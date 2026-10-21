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
        title: "設定",
        language: {
            selector: {
                label: "語言",
                description: "選擇您的 Plexcord 首選語言。",
                placeholder: "選擇語言"
            }
        },
        location: {
            label: "設定位置",
            description: "Plexcord 設定部分的放置位置",
            top: "在最頂部",
            nitro: {
                above: "硝基部分上方",
                below: "硝基部分下方"
            },
            activity: {
                above: "以上活動設置",
                below: "下面的活動設置"
            },
            bottom: "在最底部"
        },
        switches: {
            useQuickCss: {
                label: "啟用自訂 CSS",
                description: "套用你設定的 QuickCSS"
            },
            enableReactDevtools: {
                label: "啟用 React 開發者工具",
                description: "主要供外掛開發者使用。如果你不知道這是什麼，請忽略"
            },
            mainWindowFrameless: {
                label: "停用主視窗框架",
                description: "移除原生窗框以獲得更乾淨的外觀。您仍然可以透過拖曳標題列區域來移動視窗。"
            },
            frameless: {
                label: "停用窗框",
                description: "移除原生窗框以獲得更乾淨的外觀。您仍然可以透過拖曳標題列區域來移動視窗。"
            },
            nativeTitleBar: {
                label: "使用 Windows 的原生標題列而不是 Discord 的自訂標題列",
                description: "將 Discord 的自訂標題列替換為標準 Windows 標題列。這可能會提高與某些視窗管理工具的相容性。"
            },
            transparent: {
                label: "啟用視窗透明度",
                description: "讓 Discord 視窗透明。需要一個支持透明度的主題，否則將不起作用。",
                isWindows: "這將阻止視窗調整大小並阻止您將視窗捕捉到螢幕邊緣。",
                notWindows: "這將阻止視窗調整大小。"
            },
            winCtrlQ: {
                label: "將 Ctrl+Q 註冊為關閉 Discord 的捷徑（取代 Alt+F4）",
                description: "新增 Ctrl+Q 作為關閉 Discord 的鍵盤快速鍵。這提供了 Alt+F4 的替代方法來快速關閉應用程式。"
            },
            disableMinSize: {
                label: "禁用最小視窗大小",
                description: "允許將視窗調整為任意大小，甚至小於 Discord 的最小尺寸"
            }
        },
        quickActions: {
            title: "快速行動",
            description: "您可能想要執行的常見操作。這些快捷方式可讓您快速存取常用功能，而無需瀏覽選單。",
            notificationLog: "通知日誌",
            editQuickCSS: "編輯 QuickCSS",
            relaunchDiscord: "重新啟動不和諧",
            openSettingsFolder: "打開設定資料夾",
            viewSourceCode: "查看原始碼"
        },
        specialCards: {
            donations: {
                title: "捐款",
                subtitle: "感謝您的捐贈！",
                description: "您可以隨時透過訊息@mutanplex 管理您的福利。",
                button: "捐",
                invite: "加入我們的不和諧",
                invalid: "邀請連結無效或過期。"
            },
            supportProject: {
                title: "支援專案",
                description: "請考慮透過捐贈來支持 Plexcord 的發展！"
            },
            contributions: {
                title: "貢獻",
                subtitle: "感謝您的貢獻！",
                description: "由於您為 Plexcord 做出了貢獻，您現在擁有了一個很酷的新徽章！",
                buttonTitle: "查看您所做的貢獻"
            }
        },
        settingsSection: {
            title: "設定",
            description: "配置 Plexcord 的行為方式以及與 Discord 的整合方式。這些設定會影響 Discord 用戶端的外觀和行為。",
            hintParts: {
                prefix: "您可以透過設定 {{pluginLink}} 來自訂此設定部分在 Discord 設定選單中的顯示位置",
                linkText: "設定插件"
            }
        },
        notifications: {
            title: "通知",
            description: "配置 Plexcord 如何處理通知。您可以自訂接收警報的時間和方式，或查看過去通知的記錄。",
            settings: "通知設定",
            viewLog: "查看通知日誌",
            permissions: {
                denied: {
                    title: "桌面通知權限被拒絕",
                    label: "您已拒絕通知權限。桌面通知不起作用！"
                }
            },
            style: {
                label: "通知樣式",
                description: "某些外掛程式可能會向您顯示通知。它們有兩種風格：",
                plexcord: "Plexcord 通知",
                plexcordDesc: "這些是應用程式內通知",
                desktop: "桌面通知",
                desktopDesc: "本機桌面通知（例如收到 ping 時）",
                onlyWhenNotFocused: "僅當 Discord 未聚焦時才使用桌面通知",
                always: {
                    desktop: "始終使用桌面通知",
                    plexcord: "始終使用 Plexcord 通知"
                }
            },
            positions: {
                label: "通知位置",
                right: {
                    bottom: "右下角",
                    top: "右上",
                },
                left: {
                    bottom: "左下角",
                    top: "左上",
                }
            },
            missed: {
                label: "錯過的通知計數",
                description: "當重新聚焦 Discord 時，會彈出一則通知，顯示您錯過了多少次",
                whileYou: "當你不在的時候",
                count: "{{count}} 通知{{s}} 已收到",
                s: "s"
            },
            timeout: {
                label: "通知逾時",
                description: "通知在自動消失之前在螢幕上停留的時間（以秒為單位）"
            },
            logLimit: {
                label: "通知日誌限制",
                description: "在刪除舊通知之前保留在日誌中的通知的最大數量。設定為 {{disable}} 以停用通知日誌，設定為 {{unlimited}} 以從不自動刪除舊通知"
            },
            opacity: {
                label: "通知不透明度",
                description: "應用內通知的不透明度"
            },
            maxNotifications: {
                label: "最大通知數",
                description: "一次顯示的最大通知數"
            },
            behavior: {
                label: "通知行為",
            },
            disableInStreamerMode: {
                label: "在流光模式下停用",
                description: "在串流媒體模式下停用通知"
            },
            renderImages: {
                label: "渲染影像",
                description: "渲染通知中的影像"
            },
            streamingTreatment: {
                label: "串流媒體處理",
                description: "如何在分享螢幕時處理通知",
                normal: "正常 - 正常顯示通知",
                noContent: "無內容 - 隱藏通知正文",
                ignore: "忽略 - 根本不顯示通知"
            },
        },
        windowsMaterial: {
            title: "Windows 背景材質（需要重新啟動）",
            description: "Windows 透明背景效果。你需要一個支援透明的主題，否則此選項不會有任何效果。變更此設定後需要重新啟動。",
            material: {
                none: "無",
                mica: "Mica（結合系統主題和桌面桌布繪製背景）",
                tabbed: "Tabbed（背景著色更強的 Mica 變體）",
                acrylic: "Acrylic（模糊 Discord 後方的視窗，形成半透明背景）"
            }
        },
        macVibrancy: {
            title: "視窗活力風格（需重新啟動）",
            description: "自訂 macOS 視窗活力效果。這控制 Discord 視窗的模糊和透明度樣式。更改需要重新啟動才能生效。",
            placeholder: "窗戶活力風格",
            style: {
                no: "沒有活力",
                underPage: "頁面下方（視窗著色）",
                content: "內容",
                window: "窗戶",
                selection: "選擇",
                titlebar: "標題列",
                header: "標頭",
                sidebar: "側邊欄",
                tooltip: "工具提示",
                menu: "選單",
                popover: "彈出視窗",
                fullscreenUI: "全螢幕使用者介面（透明但稍微模糊）",
                hud: "HUD（最透明）"
            }
        },
        tabs: {
            renderFailed: "無法顯示 {{tab}} 分頁。如果問題持續，請嘗試使用安裝程式重新安裝！"
        }
    },

    plugins: {
        title: "外掛",
        new: "新的",
        unknown: "未知",
        noDescription: "沒有可用的描述。",
        restart: {
            apply: "重新啟動以應用更改！",
            required: "需要重啟！",
            description: "立即重新啟動以應用新插件及其設置",
            following: "以下插件需要重新啟動：",
            remainingCount: "還有 {{count}} 更多",
            fully: "某些插件需要重新啟動才能完全停用",
            would: "您想現在重新啟動嗎？",
            resetDefault: "重設為預設設定",
            failed: "無法啟動相依性：",
            button: {
                restart: "重新啟動",
                later: "之後！",
                now: "立即重新啟動",
                cancel: "取消",
                disableWarning: "永遠禁用警告",
                disableAll: "全部禁用",
                reset: "重置",
                close: "關閉"
            }
        },
        contributor: {
            contributed: "貢獻了",
            modal: {
                contributionsInfo: "{{userName}} 有 {{continuedLink}} 到 {{contributionCount}} 插件 {{s}}。",
                noContributions: "{{userName}} 尚未製作任何外掛程式。他們很可能以其他方式{{contributedLink}}！"
            }
        },
        infoModal: {
            description: "按齒輪或資訊圖示以獲取有關插件的更多信息",
            settingsInfo: "帶有齒輪的插件具有可以修改的設定！",
            disableAll: "停用所有插件"
        },
        error: {
            invalidInput: "提供的輸入無效",
            stopping: "停止插件 {{plugin}} 時發生錯誤",
            starting: "啟動插件 {{plugin}} 時發生錯誤",
            startDependency: "啟動依賴項時發生錯誤：{{failures}}",
            infoRender: "渲染此插件的自訂資訊元件時發生錯誤"
        },
        placeholder: {
            number: "輸入一個數字",
            select: "選擇一個選項",
            text: "輸入一個值"
        },
        excluded: {
            desktop: "Discord 桌面應用程式或 Plextron",
            discordDesktop: "Discord 桌面應用程式",
            plextron: "Plextron 應用程式",
            web: "Plextron 應用程式和 Discord 網路版",
            dev: "Plexcord 開發者版本",
            browser: "Plexcord 網頁瀏覽器版本"
        },
        search: {
            looking: "您在尋找嗎",
            onlyAvailable: "僅適用於",
            noCriteria: "沒有符合搜尋條件的插件。"
        },
        required: {
            title: "所需插件",
            this: "Plexcord 需要此插件才能運作。",
            by: "以下人員需要此外掛："
        },
        dangerModal: {
            title: "危險行為",
            disablePlugins: "停用插件",
            disableText: "全部禁用",
            irreversible: "此操作不可逆轉！",
            enableBack: "您絕對確定要繼續嗎？您以後隨時可以重新啟用它們。",
            undone: "此操作無法撤銷。你確定嗎？",
            resetDescription: "您即將將 {{pluginName}} 的所有設定重設為其預設值。",
            disable: "您即將停用 {{enabledPlugins}} 外掛程式！",
            confirmReset: "確認重置",
            cancel: "取消",
            resetSettings: "重置設定",
            resetText: "重置"
        },
        filters: {
            label: "過濾器",
            placeholder: "搜尋插件...",
            option: {
                all: "顯示全部",
                enabled: "顯示已啟用",
                disabled: "顯示停用",
                new: "顯示新內容",
                userplugins: "顯示使用者插件",
                api: "顯示 API 插件",
                type: "依類型篩選",
                tags: "依標籤篩選",
                favorites: "顯示收藏"
            }
        },
        pluginModal: {
            noSettings: "該插件沒有任何設定。",
            authors: "作者",
            settings: "設定",
            successfulReset: "{{plugin}} 的設定已重設。",
            enabledStock: "啟用庫存插件",
            totalStock: "總庫存插件",
            enabledUser: "啟用的使用者插件",
            totalUser: "用戶插件總數",
            info: "查看更多信息",
            source: "查看原始碼",
            favorite: "收藏外掛 - 將其釘選到外掛列表頂端",
            unfavorite: "取消收藏外掛"
        },
        metadata: {
            api: {
                description: {
                    memberListDecorators: "用於將裝飾器新增至成員清單的 API（在伺服器和 DM 中）",
                    messageAccessories: "用於向訊息新增附件的 API",
                    messageDecorations: "用於向訊息添加裝飾的 API",
                    chatInputButtons: "用於向聊天輸入新增按鈕的 API",
                    commands: "任何使用命令所需的 API",
                    contextMenu: "用於向上下文選單新增/刪除項目的 API。",
                    dynamicImageModal: "讓您在開啟影像模式時省略寬度或高度",
                    menuItemDemangler: "Demangles Discord 的選單項目模組",
                    messageEvents: "使用訊息事件的任何事物都需要 API",
                    messagePopover: "用於向訊息彈出視窗新增按鈕的 API",
                    messageUpdater: "用於更新和重新呈現訊息的 API",
                    nicknameIcons: "用於在個人資料中向暱稱添加圖示的 API",
                    notices: "修復通知被自動忽略的問題",
                    serverList: "修改伺服器清單的插件需要API",
                    userSettings: "修補 Discord 的 UserSettings 以公開他們的群組和名稱。",
                    audioPlayer: "用於播放內部 Discord 音訊檔案或外部音訊連結的 API。",
                    userArea: "用於向使用者區域面板新增按鈕的 API。",
                    profileCollections: "用於將集合新增到使用者個人資料面板的 API，例如 Discord 的遊戲收藏。",
                    profileSections: "用於在使用者個人資料面板「成員始於」區域附近新增區段的 API。",
                    headerBar: "用於在標題列新增按鈕的 API。",
                    surfaceClasses: "用於向 Discord 穩定版面區域新增外掛自有的語意資料屬性與有限 props 的 API。"
                },
                chatButtons: {
                    context: {
                        buttons: "按鈕"
                    }
                }
            },
            badges: {
                description: "為用戶新增徽章的API",
                contributor: {
                    plexcord: "Plexcord 貢獻者",
                    vencord: "Vencord 貢獻者",
                    userPlugin: "使用者插件貢獻者"
                },
                context: {
                    title: "徽章選項",
                    copy: {
                        name: "Copy Badge Name",
                        link: "複製徽章圖像鏈接"
                    },
                    refetch: {
                        button: "重新取得徽章",
                        success: "徽章已成功重新取得！"
                    }
                },
                modal: {
                    title: "Plexcord 供體",
                    special: "此徽章是 Plexcord 捐贈者的特殊福利",
                    description: "請考慮成為捐款者來支持 Plexcord 的發展。這意味著很多！"
                }
            },
        },
        uiElements: {
            manage: "管理 UI 元素",
            allows: "允許您隱藏不喜歡的按鈕",
            section: {
                chatbar: {
                    title: "聊天列按鈕",
                    description: "這些是聊天輸入列右側的按鈕"
                },
                messagePopover: {
                    title: "訊息彈出按鈕",
                    description: "當您將滑鼠懸停在訊息上時，這些是右側的浮動按鈕"
                }
            },
            button: "已啟用插件的按鈕將出現在此。"
        },
        invalidInput: "輸入無效",
        loading: "載入中...",
        authorPrefix: "作者："
    },

    patchHelper: {
        title: "補丁助手",
        description: "一個開發工具，可協助您為 Plexcord 插件建立補丁。",
        fullPatch: {
            label: "完整補丁",
            description: "將完整的 JSON 補丁貼到此處以填寫字段"
        },
        find: "尋找",
        match: "匹配",
        replacement: "替代品",
        preview: "預覽",
        generatedCode: "產生的程式碼",
        group: "團體",
        diff: "差異",
        module: "模組",
        compile: "編譯",
        compiled: "編譯成功",
        copy: {
            clipboard: "複製到剪貼簿",
            codeblock: "複製為程式碼區塊"
        },
        error: {
            noMatch: "未找到匹配項。這個模組可能是延遲載入的？",
            multipleMatch: "找到多個匹配項。請使用更具體的搜尋模式。",
            noFind: "缺少“查找”字段。",
            noReplacement: "缺少“替換”字段。",
            invalidReplacement: "「替換」欄位無效",
            replacementMatch: "缺少“replacement.match”字段",
            replacementReplace: "缺少“replacement.replace”字段",
            replacementMustFunction: "「替換」必須是一個函數"
        },
        cheatSheet: {
            title: "備忘錄",
            identifiers: "與識別符（變數名、類別名等）相符的特殊正規表示式轉義序列",
            dollar: "插入一個$",
            entireMatch: "插入整個匹配項",
            beforeMatch: "在匹配之前插入子字串",
            afterMatch: "在匹配後插入子字串",
            nthGroup: "插入第 n 個捕獲組 ($1, $2...)",
            pluginInstance: "插入插件實例"
        },
        replacementEval: {
            label: "將替換視為函數",
            description: "如果啟用，「替換」將被評估為一個函數"
        }
    },

    sync: {
        title: "備份與復原",
        warning: "警告",
        warningText: "導入設定檔將覆蓋您目前的設定。如果您想保留目前配置，請務必先匯出備份。",
        description: "您可以將 Plexcord 設定匯入和匯出為 JSON 檔案。這使您可以輕鬆地將設定轉移到另一台設備，或在重新安裝 Plexcord 或 Discord 後恢復您的設定。",
        successful: "設定已成功導入。重新啟動以應用更改！",
        error: {
            failure: "導入設定失敗：{{error}}",
            failedExport: "匯出設定失敗，請檢查控制台",
            invalid: "設定無效。這還是 Plexcord 設定檔嗎？",
            tooLarge: "資料儲存太大 - 從備份中排除。如果需要，請使用「匯出資料儲存」。",
            clearSomeDate: "資料儲存太大。請清除一些插件資料並重試。"
        },
        settings: {
            text: "備份包含什麼？",
            quickcss: "自訂 QuickCSS",
            theme: "主題連結",
            plugins: "插件設定",
            datastores: "插件資料儲存（例如時區或 IRememberYou）"
        },
        import: {
            title: "導入設定",
            description: "選擇先前匯出的設定檔來恢復您的配置。這會將您目前的所有設定替換為備份中的設定。",
            all: "導入所有設定",
            plugins: "導入插件",
            css: "導入 QuickCSS",
            datastore: "導入資料存儲"
        },
        export: {
            title: "匯出設定",
            description: "您可以將目前的 Plexcord 設定匯出到檔案以進行備份或傳輸到其他裝置。",
            all: "匯出所有設定",
            plugins: "導出插件",
            css: "匯出 QuickCSS",
            datastore: "匯出資料存儲"
        },
        backupFileType: "Plexcord 設定備份"
    },

    cloud: {
        text: "雲",
        title: "設定同步",
        override: "雲端同步",
        description: "將您的 Plexcord 設定同步到雲端。這使得您可以輕鬆地在多個裝置上保持配置一致，而無需手動匯入/匯出。",
        switchDescription: "啟用後，您的設定可以與雲端同步。使用以下操作手動同步。",
        settings: "雲端設定",
        successful: "同步設定到雲端！",
        updated: "您的設定已更新！點擊此處重新啟動以完全應用變更！",
        deleted: "設定已從雲端刪除！",
        integration: {
            title: "雲端整合",
            description: "Plexcord 的雲端整合可讓您跨多個裝置和 Discord 安裝同步您的設定。您的資料被安全地存儲，並且可以隨時輕鬆恢復。",
        },
        reauth: "我們注意到您在另一個客戶端中啟用了雲端整合！由於限制，您需要重新授權才能繼續使用它們。點擊此處轉到設定頁面即可執行此操作！",
        error: {
            setup: "安裝失敗（無法檢索 OAuth 配置）。",
            secret: "安裝失敗（沒有返回秘密）。",
            string: "安裝失敗 ({{error}})。",
            connect: "雲端同步已停用，因為此帳戶未連接到 Plexcord 雲端應用程式。您可以透過在雲端設定中連接此帳戶來再次啟用它。 （注意：它將單獨存儲您的偏好）",
            noSettings: "雲端沒有任何設定。",
            uptodate: "您的設定是最新的。",
            localNewer: "您的本地設定比雲端設定更新。",
            delete: "無法刪除設定 ({{error}})。",
            api: {
                returned: {
                    delete: "無法刪除設定（API 傳回 {{status}}）。",
                    to: "無法將設定同步到雲端（API 傳回 {{status}}）。",
                    from: "無法從雲端同步設定（API 傳回 {{status}}）。",
                    manifest: "無法取得用於刪除的清單（API 返回 {{status}}）。"
                }
            },
            synchronize: {
                to: "無法將設定同步到雲端 ({{error}})。",
                from: "無法從雲端同步設定 ({{error}})。"
            }
        },
        warning: {
            enableCloudIntegration: "啟用上面的雲端整合以使用設定同步功能。"
        },
        danger: {
            title: "危險區",
            description: "從雲端永久刪除您的所有資料。此操作無法撤消，並將刪除所有同步設定以及儲存在雲端後端的任何其他資料。",
            delete: {
                account: {
                    title: "刪除雲端帳戶",
                    description: "您確定要永久刪除您的雲端帳戶和所有關聯資料嗎？此操作無法撤銷。",
                    confirm: "刪除帳戶",
                    cancel: "取消"
                }
            }
        },
        notification: {
            title: "雲端整合",
            enabled: "雲端整合已啟用",
            host: "{{host}} 已加入白名單。請重新啟動應用程式以使變更生效。",
            erase: {
                successful: "雲端資料已成功刪除",
                failed: "無法擦除所有資料（返回 API {{status}}），請聯絡支援人員。"
            }
        },
        button: {
            to: "同步至雲端",
            from: "從雲端同步",
            fromDescription: "這將用雲端上的設定覆蓋您的本地設定。明智使用！",
            delete: "刪除雲端數據",
            enable: "啟用雲端集成",
            reauthorize: "重新授權",
            confirm: "立即重新啟動",
            later: "之後！"
        },
        privacy: "尊重您的隱私",
        source: "原始碼",
        overview: "Plexcord 附帶雲端集成，新增了跨裝置同步設定等功能。它 {{privacy}} 和 {{source}} 已獲得 AGPL 3.0 許可，因此您可以自己託管它。",
        authorization: "連接到雲端後端以同步設定。如果您尚未設定雲端集成，這將請求授權。",
        backend: {
            title: "雲端後台",
            description: "選擇您的設定在雲端的儲存方式。預設情況下，使用 Plexcord Cloud，但您也可以連接自己的自架雲端服務。",
            invalid: "無效網址"
        },
        sync: {
            title: "該設備的同步規則",
            description: "此設定控制設定如何在此裝置和雲端之間移動。您可以讓變化雙向流動，或選擇一個地方作為事實的主要來源。",
            direction: {
                both: "雙向同步（雙向變更）",
                push: "該設備是來源（僅上傳）",
                pull: "雲端為來源（僅供下載）",
                manual: "不自動同步（僅透過下面的按鈕手動同步）"
            }
        }
    },

    changelog: {
        text: "變更日誌",
        title: "變更日誌",
        description: "您可以在此處找到 Plexcord 的最新變更和更新。",
        by: "經過",
        check: "儲存庫檢查",
        uptodate: "最新",
        update: "更新",
        noMessage: "沒有消息",
        unknown: "未知",
        updatedPlugins: "更新的插件",
        newSettings: "新設定",
        newSettingTooltip: "{{plugin}} 中的新設置",
        loading: "載入中...",
        repoUptodate: "儲存庫是最新的",
        fetch: "從存儲庫中獲取",
        clear: "清除所有日誌",
        internet: "確保您有互聯網連接，然後重試。",
        recent: "最近的變化",
        codeChanges: "程式碼變更 {{count}} 新提交 {{s}}",
        updateLogs: "更新日誌 ({{count}})",
        noCommit: "當前版本之前沒有可用的提交。按一下“從儲存庫取得”以檢查新變更。",
        previous: "先前的更新會話及其提交歷史記錄和插件變更。",
        modal: {
            description: "查看 Plexcord 的最新變更。這會直接從儲存庫取得提交，以向您展示新內容。",
            repository: "儲存庫",
            failed: "檢索失敗 - 檢查控制台",
            current: "目前的：",
            hide: "隱藏日誌",
            show: "顯示日誌",
            fetch: {
                title: "取得更改",
                description: "檢查儲存庫中是否有新的提交、外掛程式更新和程式碼變更。這會將您目前的版本與最新的可用版本進行比較，並向您顯示新增內容。",
                newCommit: "這些是自上一個版本以來的新提交和插件更新。您可以查看新增了哪些功能、修復了哪些錯誤以及哪些外掛程式收到了更新。",
                confirm: "拿來",
            }
        },
        commit: {
            available: "可用提交",
            no: "沒有新的提交",
            new: "新插件",
            updated: "更新的插件",
            settings: "新設定"
        },
        toast: {
            already: "已與儲存庫保持最新",
            found: "從儲存庫中找到 {{count}} 新提交 {{s}}",
            local: "儲存庫與您的本機副本保持同步",
            failed: "無法從儲存庫取得:(",
            cleared: "所有日誌已清除",
            logCleared: "日誌已被清除",
            yourLatest: "記錄最新更新的提交"
        },
        alert: {
            clear: {
                title: "清除所有日誌",
                body: "您確定要清除所有日誌嗎？此操作無法撤銷。",
                confirm: "全部清除",
                confirmColor: "危險",
                cancel: "取消"
            },
            log: {
                title: "清除日誌",
                body: "您確定要清除此日誌嗎？此操作無法撤銷。",
                confirm: "清除日誌",
                confirmColor: "危險",
                cancel: "取消"
            }
        },
        newPlugins: "{{count}} 新外掛程式{{s}}",
        following: "最近的更新中新增了以下插件：",
        more: "+{{count}} 更多插件",
        error: {
            retrieveRepo: "無法取得儲存庫資訊",
            fetchRepo: "無法從儲存庫取得資料",
            connectRepo: "無法連線至儲存庫。請檢查你的網路連線。"
        }
    },

    csp: {
        restart: "需要重新啟動才能應用此更改",
        blocked: {
            resources: "被阻止的資源",
            disallowed: "某些圖像、樣式或字體被阻止，因為它們來自不允許的網域。",
            recommended: "強烈建議將它們移至 GitHub 或 Imgur。但如果您完全信任網域，您也可以允許它們。",
            afterAllow: "允許網域後，您必須完全關閉（從托盤/工作管理員）並重新啟動 {{platform}} 才能套用變更。",
            allow: "允許",
            url: "被封鎖的網址"
        },
        imgur: {
            direct: "Imgur 連結應該是 {{etc}} 形式的直接鏈接",
            copy: "要獲取直接鏈接，請右鍵單擊圖像並選擇“複製圖像地址”。"
        },
        wants: {
            caller: "{{callerName}} 希望允許連接到 {{domain}}",
            detail: "除非您認可並完全信任 {{domain}}，否則您應該取消此請求！",
            restart: "您必須完全關閉並重新啟動 {{appName}} 才能使變更生效。",
            type: {
                images: "圖片",
                styles: "CSS 和主題",
                fonts: "字體"
            },
            content: "將允許從 {{domain}} 載入以下類型的內容：",
            understand: "我完全信任 {{domain}} 並了解允許與其建立連接的風險。",
            button: {
                cancel: "取消",
                allow: "允許"
            },
            title: "主機權限"
        }
    },

    themes: {
        title: "主題",
        management: "主題管理",
        description: "使用主題自訂 Discord 的外觀。新增本機 .css 檔案或直接從 URL 載入主題。帶有齒輪圖示的主題具有可以修改的自訂設定。",
        local: "當地主題",
        new: "新的",
        pinned: "已固定",
        stylus: "觸控筆延長桿",
        bd: "BetterDiscord 主題",
        github: "GitHub",
        download: "尋找主題？查看 {{bd}} 或搜尋 {{github}}。從 BetterDiscord 下載時，按一下「下載」並將 .theme.css 檔案放入您的主題資料夾中。",
        add: "添加",
        reset: "將設定重設為預設值",
        notCSS: "不是 CSS 檔案。記得使用原始連結！",
        okay: "好的！",
        checking: "檢查...",
        valid: "有效的！",
        upload: "上傳主題",
        openFolder: "打開主題資料夾",
        loadMissing: "加載缺少的主題",
        editQuickCSS: "編輯 QuickCSS",
        editClient: "編輯客戶端主題",
        website: "打開網站",
        discord: "不和諧伺服器",
        downloadTheme: "下載",
        refresh: "重新整理",
        delete: "刪除",
        activation: {
            title: "主題啟用",
            always: "始終啟用",
            lightOnly: "僅淺色主題",
            darkOnly: "僅深色主題"
        },
        actions: {
            pin: "釘選",
            unpin: "取消釘選",
            editSettings: "編輯設定"
        },
        unknown: {
            title: "未知",
            author: "作者未知",
            theme: "不和諧的主題",
            description: "未提供描述。"
        },
        required: "以下插件是必需的，但未啟用：",
        homepage: "首頁",
        support: "支援",
        online: {
            title: "線上主題",
            description: "直接從 URL 而不是本機文件載入主題。當來源變更時，線上主題會自動更新，因此您始終擁有最新版本，無需手動下載。",
            enable: "啟用線上主題",
            enableDescription: "切換線上主題載入。停用後，所有線上主題將關閉，並且您將無法新增主題。",
            placeholder: "https://範例.tw/theme.css"
        },
        quickActions: {
            title: "快速行動",
            description: "管理主題的快捷方式。開啟主題資料夾以新增主題，使用 QuickCSS 進行快速樣式調整，或在進行變更後重新載入主題。"
        },
        error: {
            userscript: "用戶腳本不支援主題！",
            stylus: "您可以使用 {{stylus}} 安裝主題！",
            expired: "連結無效或過期",
            text: "錯誤："
        },
        copy: {
            url: "複製網址",
            copied: "主題網址已複製！",
            settings: "複製主題設定",
            copiedSettings: "將主題設定複製到剪貼簿。"
        },
        paste: {
            settings: "貼上主題設定",
            empty: "您的剪貼簿是空的。",
            invalid: "您的剪貼簿沒有有效的設定資料。",
            pasted: "從剪貼簿貼上主題設定。"
        },
        settings: {
            for: "{{themeName}} 的設定",
        },
        installed: {
            title: "已安裝的主題",
            description: "在這裡管理您的主題。本機主題從主題資料夾加載，線上主題從 URL 加載。帶有齒輪圖示的主題具有可自訂的設定。",
            count: "{{count}} 主題{{s}} 已安裝（{{localCount}} 本地，{{onlineCount}} 在線）· {{enabledCount}} 已啟用",
            search: "搜尋主題...",
            loading: "正在加載主題...",
            none: "尚未安裝主題。將主題文件新增至主題資料夾或新增上面的線上主題以開始使用。",
            noCriteria: "沒有主題符合您的搜尋或篩選條件。"
        },
        filter: {
            all: "顯示全部",
            online: "線上主題",
            local: "當地主題",
            enabled: "啟用",
            disabled: "殘障人士"
        },
        notification: {
            refresh: {
                title: "主題更新",
                error: "刷新主題失敗"
            },
            failed: {
                download: "主題下載失敗"
            }
        },
        openInFolder: "在資料夾中開啟",
        fallback: {
            author: "未知作者",
            description: "一個 Discord 主題。"
        }
    },

    updater: {
        title: "更新程式",
        settings: "更新程式設定",
        updates: "更新",
        updated: "已更新！",
        restart: "點擊此處重新啟動",
        repaired: "Plexcord 已修復！",
        ok: "好的",
        preferences: {
            title: "更新偏好設定",
            description: "控制 Plexcord 如何保持最新狀態。您可以選擇在背景自動更新或在有新更新可用時收到通知。",
        },
        github: {
            local: "您的本機副本比遠端儲存庫具有更新的提交。當您進行本機變更時通常會發生這種情況。請在更新之前隱藏或重置它們。"
        },
        error: {
            check: "無法檢查更新。檢查控制台以獲取更多信息",
            occurred: "發生未知錯誤",
            retrieve: "檢索失敗 - 檢查控制台",
            title: "哎呀！",
            tryAgain: "發生未知錯誤。請重試或查看控制台以獲取更多資訊。",
            command: "未找到指令 {{path}}。請安裝它並重試。",
            code: "代碼 {{code}}。請參閱控制台以取得更多資訊。",
            running: "執行 {{cmd}} 時發生錯誤：{{error}}",
            failed: "這也失敗了:(嘗試使用安裝程式更新或重新安裝！"
        },
        available: "有 1 條更新",
        updateAvailable: "Plexcord 更新可用！",
        click: "點擊此處查看更新",
        available_plural: "有 {{count}} 更新",
        current: "最新！",
        successful: {
            title: "更新成功！",
            body: "更新成功。立即重新啟動以應用變更？",
            button: {
                confirm: "重新啟動",
                cancel: "現在不要！",
                update: "立即更新",
                check: "檢查更新"
            },
            noFound: "沒有找到更新"
        },
        automatically: {
            label: "自動更新",
            description: "自動更新 Plexcord，無需確認提示"
        },
        notify: {
            label: "自動更新完成時收到通知",
            description: "Plexcord 自動更新時顯示通知"
        },
        repo: "回購協議",
        repoDescription: "這是 Plexcord 從中取得更新的 GitHub 儲存庫。",
        loading: "載入中...",
        unknownAuthor: "未知作者"
    },

    components: {
        error: {
            title: "哦不！",
            render: "渲染此元件時發生錯誤。更多資訊可以在下面和您的控制台中找到。"
        },
        componentFailed: {
            message: "呃哦！無法呈現此頁面。但是，有一個可用的更新可以修復該問題。您想立即更新並重新啟動嗎？"
        },
        quickCSS: {
            title: "QuickCSS 編輯器打開",
            message: "QuickCSS 編輯器仍然在背景開啟。",
            detail: "您仍然想關閉 Discord 嗎？這也將關閉 QuickCSS 編輯器。",
            cancel: "取消",
            close: "無論如何關閉",
            windowTitle: "Plexcord QuickCSS 編輯器"
        },
        messagePopover: {
            scrollLeft: "向左捲動",
            scrollRight: "向右捲動"
        },
        notices: {
            error: "顯示通知時發生錯誤"
        },
        tray: {
            aboutPlexcord: "關於 Plexcord",
            updatePlexcord: "更新 Plexcord",
            noUpdateTitle: "沒有可用的更新",
            noUpdateBody: "你已在使用最新版本的 Plexcord。",
            updateFailedTitle: "更新失敗",
            updateFailedBody: "無法套用 Plexcord 更新。",
            updateSuccessTitle: "更新成功",
            updateSuccessBody: "正在重新啟動 Plexcord 以套用更新。",
            updateErrorTitle: "更新錯誤",
            updateErrorBody: "更新 Plexcord 時發生錯誤。\n\n{{error}}",
            openSettingsFolder: "開啟設定資料夾",
            openThemesFolder: "開啟主題資料夾"
        }
    },

    commands: {
        error: {
            execute: "執行指令「{{command}}」時發生錯誤"
        }
    },

    notifications: {
        dismiss: "關閉通知",
        noYet: "還沒有通知",
        settings: "通知設定",
        log: {
            title: "通知日誌",
            clear: "清除通知日誌",
            sure: "你確定嗎？",
            permamently: "這將永久刪除 {{count}} 通知 {{s}}。此操作無法撤銷。",
            button: {
                confirm: "做吧！",
                cancel: "沒關係"
            }
        }
    },

    memberlist: {
        error: {
            render: "無法渲染 {{key}} 成員清單裝飾器"
        }
    },

    message: {
        accessory: {
            error: {
                render: "無法呈現 {{key}} 訊息附件"
            }
        },
        decoration: {
            error: {
                render: "無法渲染 {{key}} 訊息裝飾"
            }
        }
    },

    utils: {
        toast: {
            copied: "已複製到剪貼簿！"
        }
    },

    common: {
        unit: {
            year: "年",
            years: "年",
            month: "月",
            months: "月",
            week: "星期",
            weeks: "週",
            day: "天",
            days: "天",
            hour: "小時",
            hours: "小時",
            minute: "分分鐘",
            minutes: "分分鐘",
            second: "第二",
            seconds: "秒",
            ago: "前",
            s: "s"
        },
        detectLanguage: "偵測語言"
    },

    plugin: {
        tags: {
            accessibility: "無障礙",
            activity: "活動",
            appearance: "外觀",
            chat: "聊天",
            commands: "指令",
            console: "主控台",
            customisation: "自訂",
            developers: "開發者",
            emotes: "表情",
            friends: "朋友",
            fun: "娛樂",
            media: "媒體",
            notifications: "通知",
            organisation: "組織",
            privacy: "隱私",
            reactions: "反應",
            roles: "角色",
            servers: "伺服器",
            shortcuts: "快捷鍵",
            utility: "工具",
            voice: "語音"
        },
        concatenatedComponentExtractor: {
            name: "ConcatenatedComponentExtractor",
            description: "擷取已被打包工具（bundler）串接的組件"
        },
        concatenatedModules: {
            name: "ConcatenatedModules",
            description: "擷取已被打包工具（bundler）串接的模組"
        },
        noTrack: {
            name: "NoTrack",
            description: "停用 Discord 的追蹤（分析/「科學」）、指標和 Sentry 崩潰報告",
            option: {
                disableAnalytics: {
                    label: "禁用分析",
                    description: "停用 Discord 的追蹤（分析/「科學」）、指標和 Sentry 崩潰報告"
                },
                disableStackDumping: {
                    description: "Discord 當機時在主控台輸出原生堆疊追蹤。需要完全重新啟動。"
                }
            }
        },
        settings: {
            name: "Settings",
            description: "新增設定 UI 和調試資訊",
            option: {
                language: {
                    label: "語言",
                    description: "選擇您的 Plexcord 首選語言。"
                },
                settingsLocation: {
                    label: "設定位置",
                    description: "確定 Plexcord 設定部分的位置。"
                },
                includePlexcordInfoWhenCopying: {
                    label: "複製時包含 Plexcord 資訊",
                    description: "點擊設定頁面左下角的版本資訊時，一併複製 Plexcord 資訊（Plexcord, Electron, Chromium）"
                }
            }
        },
        supportHelper: {
            name: "Support Helper",
            description: "幫助我們為您提供支持",
            commands: {
                description: {
                    debug: "發送 Plexcord 調試訊息",
                    plugins: "發送 Plexcord 插件列表"
                }
            },
            modals: {
                outdated: {
                    title: "堅持，稍等！",
                    body: "您正在使用過時版本的 Plexcord！您的問題很可能已經解決。",
                    footer: "在尋求支援之前請先更新！",
                    dismiss: "如果你清楚自己在做什麼，或無法更新，可以關閉此提示。",
                    button: {
                        cancel: "查看更新",
                        confirm: "立即更新並重新啟動",
                        secondaryConfirm: "我知道我在做什麼，否則我無法更新"
                    }
                },
                updater: {
                    title: "堅持，稍等！",
                    body: "您正在使用外部更新的 Plexcord 版本，我們不提供支援！",
                    footer: "請切換到 {{officially}}，或聯絡您的軟體包維護者以獲得支援。",
                    officially: "Plexcord 官方支援版本",
                    button: {
                        cancel: "取消",
                        confirm: "查看下載頁面",
                        now: "立即更新"
                    },
                    toast: {
                        success: "成功！正在重新啟動...",
                        already: "已經是最新的了！",
                        failed: "更新失敗:("
                    }
                },
                custom: {
                    title: "堅持，稍等！",
                    header: "您正在使用自訂版本的 Plexcord，我們不提供支援！",
                    body: "我們僅提供對 {{officialBuild}} 的支援。要嘛 {{switch}} 要嘛自己解決你的問題。",
                    footer: "如果您忽視此規則，您將被禁止獲得支持。",
                    official: "官方構建",
                    switch: "切換到官方版本",
                    button: {
                        confirm: "明白了",
                        secondaryConfirm: "不再顯示"
                    }
                }
            },
            button: {
                debug: "運行 /plexcord-debug",
                plugins: "運行 /plexcord-plugins",
                snippet: "運行程式碼片段"
            },
            toast: {
                success: "成功！",
                failed: "無法運行片段:(",
                failedOpenInvite: "無法開啟邀請，請檢查控制台:(",
                upload: "外掛程式列表上傳成功！",
                failedUpload: "上傳外掛程式列表檔案失敗。請再試一次。",
                unableGenerate: "無法產生插件列表。"
            },
            dm: {
                warning: "請不要私訊Plexcord插件開發者尋求支援！ {{br}}相反，您可以加入{{support}}伺服器並使用Plexcord支援頻道：{{channel}}"
            },
            alert: {
                title: "警告：插件數量過多",
                paragraph1: "您啟用了 100 多個插件。",
                paragraph2: "由於插件數量龐大，您可能無法獲得支援。",
                paragraph3: "您的問題很可能是由插件衝突引起的。",
                paragraph4: "請考慮禁用一些插件來排除故障。",
                paragraph5: "您的插件清單將作為文字檔案發送。",
            }
        },
        accountPanelServerProfile: {
            name: "AccountPanelServerProfile",
            description: "右鍵單擊左下角您的帳戶面板可以查看您在目前伺服器中的個人資料",
            option: {
                prioritizeServerProfile: {
                    label: "優先考慮伺服器設定檔",
                    description: "左鍵單擊帳戶面板時優先考慮伺服器配置文件"
                }
            },
            context: {
                account: "查看帳號資料",
                server: "查看伺服器設定檔",
                prioritize: "優先考慮伺服器設定檔"
            }
        },
        altKrispSwitch: {
            name: "AltKrispSwitch",
            description: "使雜訊抑制彈出視窗在「無」和「Krisp」之間切換，而不是在「Krisp」和「標準」之間切換"
        },
        alwaysAnimate: {
            name: "AlwaysAnimate",
            description: "為任何可以動畫化的東西製作動畫",
            option: {
                icons: {
                    label: "圖示",
                    description: "始終為伺服器圖示、頭像、裝飾等設定動畫"
                },
                statusEmojis: {
                    label: "狀態表情符號",
                    description: "始終為狀態表情符號新增動畫"
                },
                serverBanners: {
                    label: "伺服器橫幅",
                    description: "始終為伺服器橫幅設定動畫"
                },
                nameplates: {
                    label: "銘牌",
                    description: "始終為銘牌製作動畫"
                },
                roleGradients: {
                    label: "角色梯度",
                    description: "始終為角色漸層設定動畫"
                }
            }
        },
        alwaysExpandProfiles: {
            name: "AlwaysExpandProfiles",
            description: "始終將設定檔彈出視窗擴展為完整模式"
        },
        alwaysExpandRoles: {
            name: "AlwaysExpandRoles",
            description: "始終擴展個人資料彈出視窗中的角色列表",
            option: {
                hideArrow: {
                    label: "隱藏箭頭",
                    description: "隱藏箭頭"
                }
            }
        },
        animalese: {
            name: "Animalese",
            description: "每發送一則訊息都會播放《動物森友會》動物語（他們經常大喊大叫）",
            option: {
                volume: {
                    label: "體積",
                    description: "動物聲音的音量"
                },
                speed: {
                    label: "速度",
                    description: "動物聲音的速度"
                },
                pitch: {
                    label: "瀝青",
                    description: "螺距乘數"
                },
                messageLengthLimit: {
                    label: "訊息長度限制",
                    description: "要處理的訊息的最大長度"
                },
                processOwnMessages: {
                    label: "處理自己的訊息",
                    description: "也可以發送自己的訊息"
                },
                soundQuality: {
                    label: "音質",
                    description: "使用的音質",
                    high: "高的",
                    med: "中等的",
                    low: "低的",
                    lowest: "最低"
                }
            }
        },
        alwaysTrust: {
            name: "AlwaysTrust",
            description: "刪除煩人的不受信任網域和可疑檔案彈出窗口",
            option: {
                domain: {
                    label: "領域",
                    description: "刪除開啟連結時的不受信任網域彈出窗口"
                },
                file: {
                    label: "文件",
                    description: "刪除開啟連結時的「潛在危險下載」彈出窗口"
                },
                noDeleteSafety: {
                    label: "無刪除安全性",
                    description: "刪除刪除伺服器時刪除輸入伺服器名稱的要求"
                },
                confirmModal: {
                    label: "確認模態",
                    description: "是否應該顯示“您確定要刪除”模式嗎？"
                }
            },
            alert: {
                title: "刪除伺服器？",
                body: "如果這不是很明顯的話，它是永久性的。",
                confirm: "刪除",
                cancel: "取消"
            }
        },
        anonymiseFileNames: {
            name: "AnonymiseFileNames",
            description: "匿名上傳的檔案名",
            option: {
                anonymiseByDefault: {
                    label: "預設匿名",
                    description: "預設情況下匿名檔案名稱。如果需要，您可以在上傳彈出視窗中停用此功能。"
                },
                spoilerMessages: {
                    label: "劇透消息",
                    description: "將標記為劇透的檔案名稱進行匿名處理。"
                },
                method: {
                    label: "方法",
                    description: "匿名化方法",
                    random: "隨機字符",
                    consistent: "持續的",
                    timestamp: "時間戳",
                    date: "日期"
                },
                randomisedLength: {
                    label: "隨機長度",
                    description: "隨機字元長度"
                },
                consistent: {
                    label: "持續的",
                    description: "一致的匿名化秘密"
                },
                dateFormat: {
                    description: "日期格式（支援 YYYY、MM、DD、HH、mm、ss、SSS）",
                    label: "日期格式"
                }
            },
            using: {
                anonymous: "使用匿名檔案名稱",
                spoiler: "使用普通檔案名稱"
            },
            spoiler: {
                description: "切換文件的劇透",
                toggle: "切換檔案的擾流板（預設為開啟）",
                enabled: "劇透啟用！",
                disabled: "劇透已停用！"
            }
        },
        arRpc: {
            name: "WebRichPresence(arRPC)",
            description: "arRPC 用戶端插件，用於在 Discord Web 上啟用 RPC（實驗性）",
            use: {
                title: "如何使用arRPC",
                enable: "{{link}} 讓伺服器運行，然後啟用插件。",
                link: "請按照 GitHub 儲存庫中的說明進行操作"
            },
            toast: {
                connected: "連接到arRPC",
                failed: "無法連接到 arRPC，它是否正在運行？",
                retry: "重試"
            }
        },
        atSomeone: {
            name: "AtSomeone",
            description: "透過@someone，您可以隨機提及某人"
        },
        autoDNDWhilePlaying: {
            name: "AutoDndWhilePlaying",
            description: "啟動遊戲時自動更新您的線上狀態（線上、空閒、免打擾）",
            option: {
                statusToSet: {
                    label: "要設定的狀態",
                    description: "啟動遊戲時設定的狀態",
                    online: "在線的",
                    dnd: "請勿打擾",
                    idle: "閒置的",
                    invisible: "無形的"
                },
                excludeInvisible: {
                    label: "排除隱形",
                    description: "當您的狀態設定為不可見時，防止自動狀態變更"
                }
            }
        },
        autoZipper: {
            name: "AutoZipper",
            description: "在上傳到 Discord 之前自動壓縮指定的檔案類型和資料夾",
            option: {
                extensions: {
                    label: "擴充",
                    description: "以逗號分隔的自動壓縮檔案副檔名清單（例如 .psd、.blend、.exe、.dmg）"
                }
            }
        },
        bannersEverywhere: {
            name: "BannersEverywhere",
            description: "在成員清單中顯示橫幅",
            option: {
                animate: {
                    label: "動畫",
                    description: "動畫橫幅"
                },
                preferNameplate: {
                    label: "偏好銘牌",
                    description: "喜歡銘牌而不是橫幅"
                }
            }
        },
        betterActivities: {
            name: "BetterActivities",
            description: "在成員清單中顯示活動圖示並允許顯示所有活動",
            option: {
                memberList: {
                    label: "會員名單",
                    description: "在成員清單中顯示活動圖標"
                },
                iconSize: {
                    label: "圖示大小",
                    description: "活動圖示的大小"
                },
                specialFirst: {
                    label: "特別第一",
                    description: "首先顯示特別活動（目前為 Spotify 和 Twitch）"
                },
                renderGifs: {
                    label: "渲染 GIF",
                    description: "允許渲染 GIF"
                },
                removeGameActivityStatus: {
                    label: "刪除「遊戲活動」狀態",
                    description: "刪除遊戲活動圖示和狀態"
                },
                userPopout: {
                    label: "用戶彈出視窗",
                    description: "在個人資料彈出視窗/側邊欄中顯示所有活動"
                },
                hideTooltip: {
                    label: "隱藏工具提示",
                    description: "隱藏各個地方的活動"
                },
                allActivitiesStyle: {
                    label: "所有活動風格",
                    description: "顯示所有活動的樣式",
                    list: "清單",
                    carousel: "輪播",
                    left: "左邊",
                    right: "正確的"
                }
            },
            text: {
                smallText: "小文字",
                largeText: "大文字"
            }
        },
        betterAudioPlayer: {
            name: "BetterAudioPlayer",
            description: "為音訊附件播放器添加光譜儀和示波器視覺化器",
            option: {
                oscilloscope: {
                    label: "示波器",
                    description: "啟用示波器視覺化工具"
                },
                spectrograph: {
                    label: "光譜儀",
                    description: "啟用光譜儀可視化器"
                },
                oscilloscopeSolidColor: {
                    label: "示波器純色",
                    description: "使用示波器的純色而不是漸層色"
                },
                oscilloscopeColor: {
                    label: "示波器顏色",
                    description: "啟用純色時示波器的顏色"
                },
                spectrographSolidColor: {
                    label: "光譜儀純色",
                    description: "對光譜儀使用純色而不是漸變"
                },
                spectrographColor: {
                    label: "光譜儀顏色",
                    description: "啟用純色時光譜儀的顏色"
                }
            },
            toast: {
                invalidColorFormat: "{{settingKey}} 的顏色格式無效，請確保其格式為“R、G、B”或“#RRGGBB”",
                invalidColorFormatFor: "{{key}} 的顏色格式無效，請使用 \"R, G, B\" 或 \"#RRGGBB\""
            }
        },
        betterBanReasons: {
            name: "BetterBanReasons",
            description: "建立在 Discord 禁止模式中使用的自訂原因，和/或預設顯示文字輸入而不是選項。",
            option: {
                reasons: {
                    label: "原因",
                    description: "您的客製化理由"
                },
                isTextInputDefault: {
                    label: "文字輸入是否預設",
                    description: "預設顯示文字輸入而不是選擇選單。 （相當於點選「其他」選項）"
                }
            },
            title: "原因",
            placeholder: "原因",
            add: "添加另一個原因",
            duration: {
                discordDefault: "Discord 預設",
                none: "不刪除任何訊息",
                hour1: "過去 1 小時",
                hours6: "過去 6 小時",
                hours12: "過去 12 小時",
                hours24: "過去 24 小時",
                days3: "過去 3 天",
                days7: "過去 7 天"
            },
            text: {
                autoDeleteDuration: "訊息自動刪除時長"
            }
        },
        betterBlockedUsers: {
            name: "BetterBlockedUsers",
            description: "允許您在封鎖的使用者清單中搜尋並在設定中選擇名稱。",
            placeholder: "搜尋用戶..."
        },
        betterCommands: {
            name: "BetterCommands",
            description: "透過各種改進增強了指揮系統。",
            option: {
                autoFillArguments: {
                    label: "自動填充參數",
                    description: "使用所有參數自動填充命令，而不僅僅是必需的參數"
                },
                allowNewlinesInCommands: {
                    label: "允許指令中換行",
                    description: "允許在命令輸入中換行（CTRL + Shift + Enter）"
                }
            },
            command: {
                refresh: {
                    description: "在本地刷新 Discord 應用程式命令",
                    user: "特定用戶嘗試刷新",
                    refreshing: "正在刷新應用程式命令...",
                    refreshed: "命令刷新成功！",
                    failed: "刷新命令失敗。檢查控制台以了解詳細資訊。"
                }
            }
        },
        betterFolders: {
            name: "BetterFolders",
            description: "在專用側邊欄上顯示伺服器資料夾並新增與資料夾相關的改進",
            option: {
                sidebar: {
                    label: "側邊欄",
                    description: "在專用側邊欄上顯示資料夾中的伺服器"
                },
                sidebarAnim: {
                    label: "側邊欄動畫",
                    description: "開啟資料夾側邊欄的動畫"
                },
                closeAllFolders: {
                    label: "關閉所有資料夾",
                    description: "選擇不在資料夾中的伺服器時關閉所有資料夾"
                },
                closeAllHomeButton: {
                    label: "關閉所有主頁按鈕",
                    description: "點擊主頁按鈕時關閉所有資料夾"
                },
                closeOthers: {
                    label: "關閉其他",
                    description: "打開資料夾時關閉其他資料夾"
                },
                closeServerFolder: {
                    label: "關閉伺服器資料夾",
                    description: "在該資料夾中選擇伺服器時關閉該資料夾"
                },
                forceOpen: {
                    label: "強制打開",
                    description: "切換到該資料夾的伺服器時強制開啟該資料夾"
                },
                enableNestedFolders: {
                    label: "啟用嵌套資料夾",
                    description: "允許透過拖曳將資料夾嵌套在其他資料夾內部"
                },
                keepIcons: {
                    label: "保留圖示",
                    description: "當主公會欄資料夾在 BetterFolders 側邊欄中開啟時，繼續在主公會欄資料夾中顯示公會圖標"
                },
                showFolderIcon: {
                    label: "顯示資料夾圖示",
                    description: "在 BetterFolders 側邊欄中的資料夾行會上方顯示資料夾圖標",
                    never: "絕不",
                    always: "總是",
                    moreThanOne: "當展開多個資料夾時"
                }
            }
        },
        betterGifAltText: {
            name: "BetterGifAltText",
            description: "將 GIF 替代文字從簡單的“GIF”更改為包含 gif 標籤/檔案名"
        },
        betterGifPicker: {
            name: "BetterGifPicker",
            description: "使 gif 選擇器預設為開啟最喜歡的類別",
            option: {
                keepOpen: {
                    label: "保持開放",
                    description: "選擇 gif 後保持 gif 選擇器打開"
                }
            }
        },
        betterInvites: {
            name: "BetterInvites",
            description: "在加入之前透過點擊名稱查看邀請到期日、查看邀請者個人資料和預覽伺服器",
            render: {
                tip: "此邀請將於 {{time}} 過期",
                header: "{{name}} 邀請您參加 {{server}}",
                headerSelf: "您傳送了加入 {{server}} 的邀請",
                never: "沒有過期"
            }
        },
        betterNotesBox: {
            name: "BetterNotesBox",
            description: "隱藏註釋或停用拼字檢查（在設定中配置！！）",
            option: {
                hide: {
                    label: "隱藏筆記",
                    description: "隱藏使用者彈出視窗中的註解框"
                },
                noSpellCheck: {
                    label: "沒有拼字檢查",
                    description: "停用筆記中的拼字檢查"
                }
            }
        },
        betterPlusReacts: {
            name: "BetterPlusReacts",
            description: ":emoji: 前面的加號是要加入的訊息"
        },
        betterRoleContext: {
            name: "BetterRoleContext",
            description: "在使用者個人檔案或成員清單中右鍵點擊身分組時，新增複製身分組顏色 / 編輯身分組 / 檢視身分組圖示的選項",
            option: {
                roleIconFileFormat: {
                    label: "角色圖示檔案格式",
                    description: "查看角色圖示時使用的文件格式"
                }
            },
            context: {
                copyColor: "複製角色顏色",
                editRole: "編輯角色",
                viewIcon: "查看角色圖標",
                viewMembers: "檢視身分組成員"
            },
            text: {
                roleActions: "身分組操作"
            }
        },
        betterRoleDot: {
            name: "BetterRoleDot",
            description: "在 RoleDot（輔助使用設定）上點選複製角色顏色。也允許同時使用 RoleDot 和彩色名稱。",
            option: {
                bothStyles: {
                    label: "兩種風格",
                    description: "顯示角色點和彩色名稱"
                },
                copyRoleColorInProfilePopout: {
                    label: "在設定檔彈出視窗中複製角色顏色",
                    description: "允許單擊設定檔彈出視窗中的角色點來複製角色顏色"
                }
            }
        },
        betterSessions: {
            name: "BetterSessions",
            description: "增強了會話（裝置）選單。讓您可以查看確切的時間戳記、為每個會話指定自訂名稱以及接收有關新會話的通知。",
            new: "新的",
            newSessions: "新會議：",
            rename: "重新命名",
            newDevice: "新設備名稱",
            resetName: "重置名稱",
            save: "節省",
            cancel: "取消",
            option: {
                backgroundCheck: {
                    label: "背景調查",
                    description: "在背景檢查新會話，並在偵測到新會話時顯示通知"
                },
                checkInterval: {
                    label: "檢查間隔",
                    description: "在背景檢查新會話的頻率（如果已啟用），以分鐘為單位"
                }
            }
        },
        betterSettings: {
            name: "BetterSettings",
            description: "增強您的設定選單開啟體驗",
            option: {
                disableFade: {
                    label: "禁用淡入淡出",
                    description: "禁用交叉淡入淡出動畫"
                },
                organizeMenu: {
                    label: "整理菜單",
                    description: "將設定齒輪上下文選單組織成類別"
                },
                eagerLoad: {
                    label: "急切負載",
                    description: "消除了第一次開啟選單時的載入延遲"
                }
            },
            alert: {
                title: "需要重新啟動",
                restart: "您已變更需要重新啟動的設定。",
                confirm: "立即重新啟動",
                cancel: "之後！"
            }
        },
        betterUploadButton: {
            name: "BetterUploadButton",
            description: "點擊上傳，右鍵打開選單"
        },
        biggerStreamPreview: {
            name: "BiggerStreamPreview",
            description: "該插件可讓您放大串流預覽",
            context: {
                viewPreview: "查看串流預覽"
            }
        },
        blockKeywords: {
            name: "BlockKeywords",
            description: "封鎖包含特定使用者定義關鍵字的訊息，就像發送這些關鍵字的使用者被封鎖一樣。",
            regexHelper: {
                title: "正規表示式助手",
                placeholder: "要測試的輸入...",
                noPatterns: "未設定任何模式"
            },
            option: {
                blockedWords: {
                    label: "被阻止的單字",
                    description: "要阻止的以逗號分隔的單字列表"
                },
                useRegex: {
                    label: "使用正規表示式",
                    description: "檢查訊息內容時使用每個值作為正規表示式（進階）"
                },
                regexHelper: {
                    label: "正規表示式助手",
                    description: "用範例輸入測試你的正規表示式"
                },
                caseSensitive: {
                    label: "區分大小寫",
                    description: "是否使用區分大小寫的搜索"
                },
                ignoreBlockedMessages: {
                    label: "忽略被封鎖的訊息",
                    description: "完全忽略（最近的）新訊息欄"
                }
            }
        },
        blockKrisp: {
            name: "BlockKrisp",
            description: "防止 Krisp 加載"
        },
        blurNSFW: {
            name: "BlurNSFW",
            description: "模糊 NSFW 頻道中的附件直到懸停",
            option: {
                blurAmount: {
                    label: "模糊量",
                    description: "模糊量（以像素為單位）"
                },
                blurAllChannels: {
                    label: "模糊所有頻道",
                    description: "模糊所有頻道中的配件（不僅僅是 NSFW）"
                }
            }
        },
        bypassPinPrompt: {
            name: "BypassPinPrompt",
            description: "使用引腳功能時繞過引腳提示"
        },
        bypassStatus: {
            name: "BypassStatus",
            description: "在請勿打擾模式下，仍會收到特定來源的通知。右鍵單擊使用者/頻道/公會將其設定為繞過請勿打擾模式。",
            context: {
                remove: "刪除狀態繞過",
                add: "新增狀態繞過"
            },
            option: {
                guilds: {
                    label: "行會",
                    description: "允許繞過的公會（在公會中任何地方進行 ping 操作時收到通知）",
                    placeholder: "用逗號分隔"
                },
                channels: {
                    label: "頻道",
                    description: "允許旁路的通道（在該通道中進行 ping 操作時通知）",
                    placeholder: "用逗號分隔"
                },
                users: {
                    label: "使用者",
                    description: "允許繞過的用戶（在 DM 中發送的所有訊息都會收到通知）",
                    placeholder: "用逗號分隔"
                },
                allowOutsideOfDms: {
                    label: "允許 DM 外部",
                    description: "也允許選定的用戶繞過 DM 以外的狀態（類似於頻道/公會繞過，但適用於選定用戶發送的所有訊息）"
                },
                notificationSound: {
                    label: "通知聲音",
                    description: "是否應播放通知聲音"
                },
                respectSilentPings: {
                    label: "尊重靜默 Ping",
                    description: "尊重靜默 ping（@silent / 抑制通知）"
                },
                statusToUse: {
                    label: "使用狀態",
                    description: "用於白名單的狀態",
                    online: "在線的",
                    idle: "閒置的",
                    dnd: "請勿打擾",
                    invisible: "無形的"
                }
            }
        },
        cakeDay: {
            name: "CakeDay",
            description: "使用蛋糕圖示追蹤和顯示用戶生日",
            context: {
                label: "生日",
                setBirthday: "設定生日",
                clearBirthday: "清除生日",
                current: "目前的："
            },
            option: {
                chat: {
                    label: "聊天",
                    description: "在聊天中的用戶名旁邊顯示蛋糕圖標"
                },
                memberList: {
                    label: "會員名單",
                    description: "在成員清單中顯示蛋糕圖標"
                },
                profileBadge: {
                    label: "個人資料徽章",
                    description: "在使用者個人資料中顯示蛋糕徽章"
                },
                notificationSound: {
                    label: "通知聲音",
                    description: "發送生日通知時播放聲音"
                },
                userList: {
                    label: "已保存的生日",
                    description: "管理已儲存的生日"
                }
            },
            locations: {
                chat: {
                    label: "聊天",
                    description: "聊天中用戶名旁邊"
                },
                memberList: {
                    label: "會員名單",
                    description: "在會員名單中"
                }
            },
            toast: {
                success: "生日設定成功！",
                invalid: "生日格式無效！僅接受 DD/MM。",
                cleared: "生日通關成功！"
            },
            notification: {
                title: "🎂 今天生日！",
                body: "今天是 {{username}} 的生日！"
            },
            modal: {
                title: "為 {{username}} 設定生日",
                description: "以 DD/MM 格式輸入生日（例如 25/12）",
                placeholder: "例如25/12",
                current: "目前生日：",
                set: "設定生日",
                cancel: "取消",
                birthday: "今天是我的生日！ 🎂",
                saved: "已保存的生日",
                savedDesc: "尚未保存生日。右鍵單擊用戶即可添加他們的生日！",
                today: "今天",
                remove: "消除",
                loading: "載入中...",
                save: "節省",
                edit: "編輯"
            },
            text: {
                unknownUser: "未知使用者"
            }
        },
        callTimer: {
            name: "CallTimer",
            description: "顯示所有語音通話中的通話計時器",
            option: {
                format: {
                    label: "格式",
                    description: "緊湊或人類可讀的格式",
                    human: "30天23小時0米42秒"
                },
                allCallTimers: {
                    label: "所有呼叫計時器",
                    description: "顯示伺服器中所有使用者的呼叫計時器"
                },
                showWithoutHover: {
                    label: "不懸停顯示",
                    description: "始終顯示計時器，無需懸停"
                },
                showRoleColor: {
                    label: "顯示角色顏色",
                    description: "以使用者角色顏色顯示（如果啟用了 ShowRoleColor 插件）"
                },
                trackSelf: {
                    label: "追蹤自己",
                    description: "也顯示您自己的計時器"
                },
                showSeconds: {
                    label: "顯示秒數",
                    description: "在計時器中顯示秒數"
                },
                watchLargeGuilds: {
                    label: "觀看大型公會",
                    description: "追蹤大型公會中的使用者。如果您在許多擁有活躍語音使用者的大型公會中，這可能會導致延遲。經過多達 2000 個主動語音使用者的測試，沒有出現任何問題。"
                },
                fixUI: {
                    label: "使用者介面修復",
                    description: "在某些情況下，計時器可能會破壞使用者介面。啟用此選項可以修復它。"
                }
            }
        },
        channelBadges: {
            name: "ChannelBadges",
            description: "根據頻道類型新增徽章",
            badge: {
                private: "該頻道已被鎖定。",
                nsfw: "該頻道被標記為 NSFW。",
                rules: "該通道是伺服器規則通道。"
            },
            option: {
                oneBadgePerChannel: {
                    label: "每個頻道一個徽章",
                    description: "每個頻道僅顯示一個徽章"
                },
                showTextBadge: {
                    label: "顯示文字徽章",
                    description: "顯示文字徽章"
                },
                showVoiceBadge: {
                    label: "顯示語音徽章",
                    description: "顯示語音徽章"
                },
                showCategoryBadge: {
                    label: "顯示類別徽章",
                    description: "顯示類別徽章"
                },
                showDirectoryBadge: {
                    label: "顯示目錄徽章",
                    description: "顯示目錄徽章"
                },
                showAnnouncementThreadBadge: {
                    label: "顯示公告主題徽章",
                    description: "顯示公告主題徽章"
                },
                showPublicThreadBadge: {
                    label: "顯示公共線程徽章",
                    description: "顯示公共線程徽章"
                },
                showPrivateThreadBadge: {
                    label: "顯示私人主題徽章",
                    description: "顯示私人主題徽章"
                },
                showStageBadge: {
                    label: "演出舞台徽章",
                    description: "演出舞台徽章"
                },
                showAnnouncementBadge: {
                    label: "顯示公告徽章",
                    description: "顯示公告徽章"
                },
                showForumBadge: {
                    label: "顯示論壇徽章",
                    description: "顯示論壇徽章"
                },
                showMediaBadge: {
                    label: "顯示媒體徽章",
                    description: "顯示媒體徽章"
                },
                showNSFWBadge: {
                    label: "顯示 NSFW 徽章",
                    description: "顯示 NSFW 徽章"
                },
                showLockedBadge: {
                    label: "顯示鎖定徽章",
                    description: "顯示鎖定徽章"
                },
                showRulesBadge: {
                    label: "顯示規則徽章",
                    description: "顯示規則徽章"
                },
                showUnknownBadge: {
                    label: "顯示未知徽章",
                    description: "顯示未知徽章"
                },
                textBadgeLabel: {
                    label: "文字徽章標籤",
                    description: "文字徽章標籤",
                    default: "文字"
                },
                voiceBadgeLabel: {
                    label: "語音徽章標籤",
                    description: "語音徽章標籤",
                    default: "嗓音"
                },
                categoryBadgeLabel: {
                    label: "類別徽章標籤",
                    description: "類別徽章標籤",
                    default: "類別"
                },
                announcementBadgeLabel: {
                    label: "公告主題徽章標籤",
                    description: "公告主題徽章標籤",
                    default: "訊息"
                },
                announcementThreadBadgeLabel: {
                    label: "公告主題徽章標籤",
                    description: "公告主題徽章標籤",
                    default: "新聞主題"
                },
                publicThreadBadgeLabel: {
                    label: "公共線程徽章標籤",
                    description: "公共線程徽章標籤",
                    default: "線"
                },
                privateThreadBadgeLabel: {
                    label: "私有線程徽章標籤",
                    description: "私人話題徽章標籤",
                    default: "私有執行緒"
                },
                stageBadgeLabel: {
                    label: "舞台徽章標籤",
                    description: "舞台徽章標籤",
                    default: "階段"
                },
                directoryBadgeLabel: {
                    label: "目錄徽章標籤",
                    description: "目錄徽章標籤",
                    default: "目錄"
                },
                forumBadgeLabel: {
                    label: "論壇徽章標籤",
                    description: "論壇徽章標籤",
                    default: "論壇"
                },
                mediaBadgeLabel: {
                    label: "媒體徽章標籤",
                    description: "媒體徽章標籤",
                    default: "媒體"
                },
                nsfwBadgeLabel: {
                    label: "NSFW 徽章標籤",
                    description: "NSFW 徽章標籤",
                    default: "美國國家科學基金會"
                },
                lockedBadgeLabel: {
                    label: "鎖定徽章標籤",
                    description: "鎖定徽章標籤",
                    default: "鎖定"
                },
                rulesBadgeLabel: {
                    label: "規則徽章標籤",
                    description: "規則徽章標籤",
                    default: "規則"
                },
                unknownBadgeLabel: {
                    label: "未知徽章標籤",
                    description: "未知徽章標籤",
                    default: "未知"
                },
                textBadgeColor: {
                    label: "文字徽章顏色",
                    description: "文字徽章顏色"
                },
                voiceBadgeColor: {
                    label: "語音徽章顏色",
                    description: "語音徽章顏色"
                },
                categoryBadgeColor: {
                    label: "類別徽章顏色",
                    description: "類別徽章顏色"
                },
                announcementBadgeColor: {
                    label: "公告線徽章顏色",
                    description: "公告主題徽章顏色"
                },
                announcementThreadBadgeColor: {
                    label: "公告線徽章顏色",
                    description: "公告主題徽章顏色"
                },
                publicThreadBadgeColor: {
                    label: "公共話題徽章顏色",
                    description: "公共線程徽章顏色"
                },
                privateThreadBadgeColor: {
                    label: "私人話題徽章顏色",
                    description: "私人話題徽章顏色"
                },
                stageBadgeColor: {
                    label: "舞臺徽章顏色",
                    description: "舞臺徽章顏色"
                },
                directoryBadgeColor: {
                    label: "目錄徽章顏色",
                    description: "目錄徽章顏色"
                },
                forumBadgeColor: {
                    label: "論壇徽章顏色",
                    description: "論壇徽章顏色"
                },
                mediaBadgeColor: {
                    label: "媒體徽章顏色",
                    description: "媒體徽章顏色"
                },
                nsfwBadgeColor: {
                    label: "NSFW 徽章顏色",
                    description: "NSFW 徽章顏色"
                },
                lockedBadgeColor: {
                    label: "鎖定徽章顏色",
                    description: "鎖定徽章顏色"
                },
                rulesBadgeColor: {
                    label: "規則徽章顏色",
                    description: "規則徽章顏色"
                },
                unknownBadgeColor: {
                    label: "未知徽章顏色",
                    description: "未知徽章顏色"
                }
            },
            badges: {
                text: "文字",
                voice: "嗓音",
                category: "類別",
                announcement: "訊息",
                announcementThread: "新聞主題",
                publicThread: "線",
                privateThread: "私有執行緒",
                stage: "階段",
                directory: "目錄",
                forum: "論壇",
                media: "媒體",
                nsfw: "美國國家科學基金會",
                locked: "鎖定",
                rules: "規則",
                unknown: "未知"
            },
            tooltip: {
                locked: "該頻道已被鎖定。",
                nsfw: "該頻道被標記為 NSFW。"
            }
        },
        channelTabs: {
            name: "ChannelTabs",
            description: "像瀏覽器一樣將您經常造訪的頻道分組到選項卡中",
            open: "在新標籤中開啟",
            animation: {
                title: "動畫控制",
                description: "啟用或停用頻道標籤的特定動畫。每個選項都可以獨立切換。",
                placeholder: "選擇要啟用的動畫...",
                tabHover: "選項卡懸停效果（提升+縮放）",
                tabSelection: "選定的選項卡抬起動畫",
                tabDragDrop: "選項卡拖放（幽靈+重新排序）",
                tabEnterExit: "選項卡進入/退出投影片（建立+關閉）",
                tabIconPop: "選擇時彈出圖示（圖示放大）",
                closeRotation: "關閉按鈕旋轉",
                plusPulse: "加號按鈕脈衝",
                mentionGlow: "提及徽章發光",
                compactExpand: "緊湊模式擴展",
                selectedBorder: "所選分頁強調色邊框",
                selectedBackground: "選定的選項卡背景顏色",
                tabShadows: "選項卡陰影效果",
                tabRepositioning: "選項卡重新定位（平滑位置變化）",
                resizeHandle: "調整淡入淡出手把大小",
                questActivate: "進行中任務漸層"
            },
            bookmark: {
                label: "書籤",
                unknown: "未知用戶",
                folder: "資料夾",
                add: "加入書籤",
                edit: "編輯書籤",
                delete: "刪除書籤",
                remove: "從書籤中刪除",
                removeFolder: "從資料夾中刪除書籤",
                loading: "正在加載書籤...",
                noBookmarks: "您沒有書籤。您可以新增開啟的選項卡或透過右鍵單擊隱藏它",
                quests: "任務",
                messageRequests: "留言請求",
                friends: "朋友們",
                shop: "店鋪",
                library: "圖書館",
                discovery: "發現",
                nitro: "硝基",
                icymi: "伊西米",
                activity: "活動",
                specialPage: "特別頁面",
                searchPlaceholder: "搜尋書籤",
            },
            button: {
                save: "節省",
                delete: "刪除",
                cancel: "取消",
                reset: "重設",
                close: "關閉",
            },
            context: {
                label: "ChannelTabs 上下文選單",
                bookmark: "ChannelTabs 書籤上下文選單",
                tab: "ChannelTabs 選項卡上下文選單",
                compact: "袖珍的",
                bookmarkBar: "書籤欄",
                openAll: "開啟所有書籤",
                openNew: "在新標籤中開啟",
                folderMenu: "書籤資料夾選單",
                close: {
                    tab: "關閉選項卡",
                    otherTabs: "關閉其他選項卡",
                    tabsToRight: "關閉右側的選項卡",
                    tabsToLeft: "關閉左側的選項卡",
                    reopen: "重新開啟關閉的選項卡",
                    allTabs: "關閉所有選項卡"
                }
            },
            error: {
                noLogin: "沒有登入帳號？"
            },
            modal: {
                add: {
                    title: "新增書籤到資料夾",
                    select: "選擇一個資料夾",
                    create: "創建一個"
                },
                folderIcon: {
                    title: "選擇資料夾圖示",
                    preview: "預覽",
                    iconColor: "圖示顏色",
                    search: "搜尋",
                    searchPlaceholder: "搜尋 {{count}} 個圖示...",
                    folderName: "資料夾名稱",
                    folderColor: "資料夾顏色",
                    folderIcon: "資料夾圖示",
                    chooseIcon: "選擇圖示",
                    useDefaultIcon: "使用預設圖示"
                },
                edit: {
                    title: "編輯書籤",
                    name: "Bookmark Name",
                    folder: "資料夾顏色"
                },
                delete: {
                    title: "你確定嗎？",
                    description: "刪除書籤資料夾也會刪除其中的所有書籤。"
                }
            },
            option: {
                onStartup: {
                    label: "啟動時",
                    description: "啟動時如何處理選項卡",
                    nothing: "不執行任何操作（在好友選項卡上開啟）",
                    remember: "記住上次會話的選項卡",
                    open: "在一組特定的選項卡上開啟"
                },
                tabSet: {
                    label: "標籤集"
                },
                noPomeloNames: {
                    label: "沒有柚子的名字",
                    description: "使用顯示名稱而不是 DM 的使用者名"
                },
                showStatusIndicators: {
                    label: "顯示狀態指示器",
                    description: "顯示 DM 的狀態指示器"
                },
                showBookmarkBar: {
                    label: "顯示書籤列"
                },
                persistUnreadCountFallback: {
                    label: "持久化未讀計數備援",
                    description: "在重新載入之間為分頁和書籤保留未讀徽章備援"
                },
                bookmarkNotificationDot: {
                    label: "書籤通知點",
                    description: "顯示書籤的通知點"
                },
                widerTabsAndBookmarks: {
                    label: "更寬的標籤和書籤",
                    description: "延長更大顯示器的選項卡和書籤的長度"
                },
                tabWidthScale: {
                    label: "製表符寬度比例",
                    description: "選項卡寬度比例（百分比）- 透過拖曳選項卡邊緣進行調整"
                },
                tabHeightScale: {
                    label: "分頁高度縮放",
                    description: "分頁高度縮放（百分比）。"
                },
                renderAllTabs: {
                    label: "渲染所有選項卡",
                    description: "將所有選項卡快取在記憶體中以實現更快的切換（快取滾動位置和狀態）"
                },
                switchToExistingTab: {
                    label: "切換到現有選項卡",
                    description: "如果您要導航到的頻道已存在該選項卡，請切換至該選項卡"
                },
                createNewTabIfNotExists: {
                    label: "如果不存在則建立新選項卡",
                    description: "如果您要導航到的頻道不存在新選項卡，請建立一個新選項卡"
                },
                enableRapidNavigation: {
                    label: "啟用快速導航",
                    description: "啟用快速導航行為 - 在頻道之間快速導航將取代當前選項卡，而不是建立新選項卡"
                },
                rapidNavigationThreshold: {
                    label: "快速導航閾值",
                    description: "用於快速導航的時間視窗（以毫秒為單位）。在此時間內，新頻道將取代目前選項卡，而不是建立新選項卡。"
                },
                tabBarPosition: {
                    label: "標籤欄位置",
                    description: "標籤欄的位置",
                    top: "頂部",
                    bottom: "底部"
                },
                enableNumberKeySwitching: {
                    label: "啟用數字鍵切換",
                    description: "啟用數字鍵 (1-9) 來切換選項卡"
                },
                numberKeySwitchCount: {
                    label: "按鍵開關數量",
                    description: "透過數字鍵存取的選項卡數量 (1-9)"
                },
                enableCloseTabShortcut: {
                    label: "啟用關閉選項卡快捷方式",
                    description: "啟用關閉選項卡鍵盤快速鍵"
                },
                enableNewTabShortcut: {
                    label: "啟用新分頁快捷方式",
                    description: "啟用新分頁鍵盤快速鍵"
                },
                enableTabCycleShortcut: {
                    label: "啟用選項卡循環快捷方式",
                    description: "啟用選項卡循環鍵盤快速鍵"
                },
                keybindsSection: {
                    label: "按鍵綁定",
                    description: "點擊按鈕並按下所需的組合鍵。支援 CTRL、SHIFT 和 ALT 等修飾符。",
                    title: "鍵盤快速鍵",
                    reset: "全部重設為預設值",
                    shortcutDisabled: "此快捷鍵目前已停用",
                    pressKey: "請按任意鍵...",
                    conflictError: "此按鍵綁定已被使用：{{key}}",
                    closeTab: {
                        label: "關閉選項卡",
                        description: "使用鍵盤輸入目前活動標籤"
                    },
                    newTab: {
                        label: "新標籤",
                        description: "開啟包含目前頻道的新分頁"
                    },
                    cycleTabsForward: {
                        label: "向前循環選項卡",
                        description: "切換到下一個選項卡（環繞到第一個選項卡）"
                    },
                    cycleTabsBackward: {
                        label: "向後循環選項卡",
                        description: "切換到上一個選項卡（循環到最後一個）"
                    }
                },
                closeTabKeybind: {
                    label: "關閉標籤鍵綁定",
                    description: "用於關閉目前選項卡的鍵盤快速鍵"
                },
                newTabKeybind: {
                    label: "新標籤鍵綁定",
                    description: "開啟新分頁的鍵盤快速鍵"
                },
                cycleTabForwardKeybind: {
                    label: "循環選項卡向前鍵綁定",
                    description: "用於循環到下一個選項卡的鍵盤快捷鍵"
                },
                cycleTabBackwardKeybind: {
                    label: "循環選項卡向後鍵綁定",
                    description: "用於循環到上一個選項卡的鍵盤快捷鍵"
                },
                showTabNumbers: {
                    label: "顯示選項卡編號",
                    description: "在選項卡上顯示編號徽章以指示鍵盤快速鍵"
                },
                tabNumberPosition: {
                    label: "標籤編號位置",
                    description: "在選項卡上的何處顯示編號徽章",
                    left: "左側（圖示前）",
                    right: "右側（內容之後）"
                },
                animations: {
                    label: "動畫"
                },
                animationHover: {
                    label: "懸停動畫",
                    description: "啟用懸停提升和縮放效果"
                },
                animationSelection: {
                    label: "選擇時的動畫",
                    description: "啟用選擇動畫（邊框發光、提升）"
                },
                animationDragDrop: {
                    label: "拖放動畫",
                    description: "啟用拖放幻影效果"
                },
                animationEnterExit: {
                    label: "進入/退出時的動畫",
                    description: "啟用選項卡建立/關閉投影片動畫"
                },
                animationIconPop: {
                    label: "Icon Pop 上的動畫",
                    description: "選擇時啟用圖示放大動畫"
                },
                animationCloseRotation: {
                    label: "關閉旋轉動畫",
                    description: "為關閉按鈕啟用旋轉動畫"
                },
                animationPlusPulse: {
                    label: "加號按鈕脈衝動畫",
                    description: "為加號按鈕啟用脈衝動畫"
                },
                animationMentionGlow: {
                    label: "提及發光的動畫",
                    description: "為提及啟用脈衝紅光"
                },
                animationCompactExpand: {
                    label: "壓縮/展開動畫",
                    description: "實現緊湊選項卡的平滑擴展"
                },
                animationSelectedBorder: {
                    label: "選取邊框上的動畫",
                    description: "為選取的選項卡啟用邊框和發光樣式"
                },
                animationSelectedBackground: {
                    label: "選取背景上的動畫",
                    description: "為選定的選項卡啟用背景顏色更改"
                },
                animationTabShadows: {
                    label: "選項卡陰影上的動畫",
                    description: "在選項卡上啟用陰影效果"
                },
                animationTabPositioning: {
                    label: "動畫選項卡定位",
                    description: "當選項卡移動位置時啟用平滑過渡"
                },
                animationResizeHandle: {
                    label: "動畫調整大小手柄",
                    description: "啟用淡入淡出動畫以調整手把大小"
                },
                animationQuestsActive: {
                    label: "動畫任務活躍",
                    description: "當任務正在運行時，在「任務」標籤上啟用漸層動畫"
                },
                compactAutoExpandSelected: {
                    label: "緊湊自動擴展選定",
                    description: "選擇顯示完整頻道名稱時自動展開緊湊選項卡"
                },
                compactAutoExpandOnHover: {
                    label: "懸停時緊湊自動展開",
                    description: "懸停時會自動展開緊湊選項卡以顯示完整的頻道名稱"
                },
                openInNewTabAutoSwitch: {
                    label: "在新分頁中開啟自動切換",
                    description: "自動切換到從「在新分頁中開啟」上下文選單開啟的新分頁"
                },
                bookmarksIndependentFromTabs: {
                    label: "獨立於選項卡的書籤",
                    description: "書籤獨立導航，不影響活動選項卡欄"
                },
                showResizeHandle: {
                    label: "顯示調整大小手柄",
                    description: "將滑鼠懸停在選項卡上以調整選項卡寬度時顯示調整大小手柄"
                },
                openNewTabsInCompactMode: {
                    label: "以緊湊模式開啟新分頁",
                    description: "預設以緊湊模式開啟所有新建立的選項卡"
                },
                newTabButtonBehavior: {
                    label: "新標籤按鈕行為",
                    description: "新選項卡 (+) 按鈕跟隨選項卡而不是固定在右側"
                },
                oneTabPerServer: {
                    label: "每台伺服器一個選項卡",
                    description: "每台伺服器僅限一個選項卡，因此在該伺服器中開啟新通道將使用現有選項卡。"
                },
                maxOpenTabs: {
                    label: "最大打開標籤數",
                    description: "打開選項卡的最大數量（0 = 無限制）"
                }
            },
            tabs: {
                startup: "啟動選項卡",
                currently: "設定為目前開啟的選項卡"
            },
            toast: {
                notRestoring: "啟用 KeepCurrentChannel 後不恢復選項卡",
                failed: {
                    restore: "恢復標籤頁失敗",
                    saved: "無法載入已儲存的選項卡"
                }
            },
            text: {
                folder: "資料夾"
            }
        },
        characterCounter: {
            name: "CharacterCounter",
            description: "在聊天輸入框中新增字元計數器",
            option: {
                colorEffects: {
                    label: "色彩效果",
                    description: "開啟或關閉顏色效果以接近字元限制"
                }
            }
        },
        cleanChannelGroups: {
            name: "CleanChannelGroups",
            description: "隱藏折疊類別中的所有頻道，即使它們有未讀訊息。"
        },
        cleanChannelName: {
            name: "CleanChannelName",
            description: "移除頻道名稱中的表情符號與裝飾。編輯頻道時會恢復原名稱。",
            option: {
                ignoredChannels: {
                    description: "以逗號分隔的保持不變的頻道 ID 清單。",
                    label: "忽略的頻道"
                }
            },
            text: {
                keepOriginalName: "保留原始名稱"
            }
        },
        clearURLs: {
            name: "ClearURLs",
            description: "自動從您發送的網址中刪除追蹤元素"
        },
        clickableRoles: {
            name: "ClickableRoles",
            description: "按一下使用者設定檔和成員清單中的角色可查看哪些成員擁有這些角色。",
            modal: {
                loading: "正在加載會員...",
                noMembers: "沒有找到會員。",
                unknown: "未知角色",
                andMore: "還有 {{count}} 人"
            }
        },
        clientSideBlock: {
            name: "ClientSideBlock",
            description: "允許您在本地對任何用戶隱藏幾乎所有內容",
            replying: "回覆被封鎖的訊息",
            option: {
                hideVc: {
                    label: "隱藏語音頻道",
                    description: "隱藏包含被封鎖使用者的語音通道。"
                },
                usersToBlock: {
                    label: "要封鎖的用戶",
                    description: "使用者 ID 以逗號和空格分隔"
                },
                hideBlockedUsers: {
                    label: "隱藏被封鎖的用戶",
                    description: "被封鎖的用戶是否也應該隱藏在各處"
                },
                hideBlockedMessages: {
                    label: "隱藏被封鎖的訊息",
                    description: "來自被封鎖使用者的訊息是否應該完全隱藏（與舊的 noblockedmessages 插件相同）"
                },
                hideEmptyRoles: {
                    label: "隱藏空角色",
                    description: "如果所有成員都被阻止，角色標題是否應該隱藏"
                },
                blockedReplyDisplay: {
                    label: "阻止回覆顯示",
                    description: "當有人回覆您隱藏的人時，應該顯示什麼而不是訊息",
                    displayText: "顯示隱藏訊息已回覆的文字",
                    hideReply: "從字面上看什麼都沒有"
                },
                guildBlackList: {
                    label: "公會黑名單",
                    description: "用於停用功能的公會 ID"
                },
                guildWhiteList: {
                    label: "公會白名單",
                    description: "用於啟用功能的公會 ID"
                }
            }
        },
        clientTheme: {
            name: "ClientTheme",
            description: "舊客戶端主題實驗的重現。為您的 Discord 用戶端主題新增顏色",
            title: "主題顏色",
            add: "為您的 Discord 用戶端主題新增顏色",
            option: {
                color: {
                    label: "顏色"
                },
                resetColor: {
                    label: "重置顏色"
                }
            },
            error: {
                modal: {
                    title: "你的主題看起來不太好！",
                    contrast: "所選顏色與文字對比度不佳",
                    nitro: "不支援 Nitro 主題",
                    switch: "切換到 {{oppositeTheme}} 模式",
                    disable: "禁用硝基主題",
                    reset: "重設主題顏色"
                }
            },
            text: {
                dark: "深色",
                light: "淺色"
            }
        },
        clipsEnhancements: {
            name: "ClipsEnhancements",
            description: "添加更多剪輯 FPS 和持續時間選項，以及 RPC 標記！",
            minutes: "分分鐘",
            option: {
                richPresenceTagging: {
                    label: "豐富的存在標記",
                    description: "何時應使用目前的 Rich Presence 標記片段？",
                    always: "總是",
                    only: "僅當活動名稱的開始或結束匹配時",
                    never: "絕不"
                },
                clipsLink: {
                    label: "剪輯連結",
                    link: "更改剪輯設定中的 FPS 和持續時間選項！"
                }
            }
        },
        colorSighted: {
            name: "ColorSighted",
            description: "從狀態中刪除色盲友善圖標，就像 2015-2017 Discord 一樣"
        },
        commandPalette: {
            name: "CommandPalette",
            description: "Raycast 風格的指令面板，可在 Discord 任何位置執行動作",
            action: {
                command: {
                    label: "運行命令",
                    description: "透過 ID 給另一個調色盤指令起別名。如果您不確定標識符，請使用選擇器。"
                },
                settings: {
                    label: "開啟設定頁面",
                    description: "直接跳到 Discord 設定頁面。從選擇器中選擇一個頁面。"
                },
                url: {
                    label: "開啟網址",
                    description: "打開一個連結。使用 https:// 連結以獲得最佳相容性。"
                },
                macro: {
                    label: "運行巨集",
                    description: "按順序運行一系列命令。透過選擇器新增步驟。"
                }
            },
            category: {
                auto: "自動（使用預設放置）",
                default: {
                    label: "快速行動",
                    description: "常見 Plexcord 快捷鍵"
                },
                plugins: {
                    label: "外掛",
                    description: "啟用、停用和配置 Plexcord 插件",
                    enable: {
                        label: "啟用插件"
                    },
                    disable: {
                        label: "停用插件"
                    },
                    settings: {
                        label: "插件設定"
                    },
                    toolbox: {
                        label: "插件操作"
                    },
                    chatbar: {
                        label: "聊天列按鈕"
                    },
                    changes: {
                        label: "插件變更"
                    }
                },
                context: {
                    label: "目前背景",
                    description: "所選頻道和公會的操作"
                },
                updates: {
                    label: "更新",
                    description: "了解 Plexcord 的最新動態"
                },
                discordSettings: {
                    label: "不和諧設定",
                    description: "跳到 Discord 設定頁面"
                },
                custom: {
                    label: "自訂命令",
                    description: "使用者定義的命令選項板條目"
                },
                sessions: {
                    label: "會話工具",
                    description: "用於管理 Discord 會話的實用程式"
                },
                guilds: {
                    label: "行會",
                    description: "快速導航到您的公會"
                },
                friends: {
                    label: "朋友們",
                    description: "快速導航到您的朋友"
                },
                action: {
                    label: "行動"
                }
            },
            builtIn: {
                open: {
                    settings: {
                        plexcord: "打開 Plexcord 設定",
                        plugin: "開啟插件設定"
                    }
                },
                reload: {
                    label: "重新加載不和諧",
                    description: "重新載入目前的 Discord 視窗"
                }
            },
            command: {
                enable: "啟用 {{pluginName}}",
                enabled: "已啟用 {{pluginName}}",
                disable: "停用 {{pluginName}}",
                disabled: "殘障人士 {{pluginName}}",
                failed: "命令失敗：",
                toggleFailed: "無法切換 {{pluginName}}。",
                pluginSettings: "{{pluginName}} 設定",
                untitled: "無標題指令",
                new: "新指令",
                error: {
                    enter: "輸入命令 ID 或從下面選擇一個。",
                    noCommand: "沒有指令與該 ID 相符。"
                },
                discord: {
                    account: "開設我的帳戶",
                    privacy: "開放資料和隱私",
                    notifications: "開啟通知",
                    voice: "開啟語音和視頻",
                    text: "開啟文字和圖像",
                    appearance: "開放式外觀",
                    accessibility: "開放輔助使用",
                    keybinds: "開啟按鍵綁定",
                    advanced: "打開高級",
                },
                updates: {
                    check: {
                        label: "檢查更新",
                        description: "檢查 Plexcord 更新",
                        one: "可用更新一",
                        multiple: "{{count}} 可用更新",
                        none: "無可用更新",
                        failed: "無法檢查更新。"
                    },
                    changelog: {
                        label: "查看變更日誌",
                        description: "打開 Plexcord 更改日誌"
                    }
                },
                read: {
                    mark: {
                        label: "標記 {{channelLabel}} 已讀"
                    }
                },
                pin: {
                    open: {
                        label: "開啟 {{channelLabel}} 的引腳"
                    },
                    toggle: {
                        label: "切換固定上一個指令"
                    }
                },
                channel: {
                    mute: {
                        label: "靜音 {{channelLabel}}",
                        oneHour: "將 {{channelLabel}} 靜音 1 小時",
                        untilTomorrow: "明天之前將 {{channelLabel}} 靜音",
                    },
                    unmute: {
                        label: "取消靜音 {{channelLabel}}",
                    },
                    reopen: {
                        label: "重新開啟上次關閉的 DM"
                    },
                    dm: {
                        open: {
                            label: "使用 {{userLabel}} 開啟 DM"
                        }
                    }
                },
                guild: {
                    settings: {
                        label: "開啟 {{guildLabel}} 的設定"
                    },
                    navigate: {
                        label: "導航至 {{guildLabel}}"
                    }
                },
                session: {
                    thirtyMinutesDnd: "設定請勿打擾 30 分鐘",
                    oneHourDnd: "設定請勿打擾 1 小時",
                    cancelStatusReset: "取消狀態定時器"
                },
                status: {
                    set: {
                        online: "設定狀態：在線",
                        idle: "設定狀態：空閒",
                        dnd: "設定狀態：請勿打擾",
                        invisible: "設定狀態：隱形"
                    }
                },
                toggle: {
                    streamer: "切換流光模式",
                    mute: "切換自動靜音",
                    deafen: "切換自聾",
                },
                notification: {
                    clear: {
                        label: "清除桌面通知"
                    }
                },
                palette: {
                    settings: {
                        label: "打開命令面板設定",
                        description: "配置命令面板插件"
                    }
                },
                recent: {
                    label: "顯示最近的命令",
                    description: "顯示最近執行的命令",
                    rerun: "重新運行最後一個命令"
                },
                plugin: {
                    reload: {
                        label: "重新載入所有插件",
                        description: "嘗試熱重載每個啟用的插件"
                    },
                    enable: {
                        label: "啟用所有插件"
                    },
                    disable: {
                        label: "停用所有不需要的插件"
                    },
                    restart: {
                        label: "重新啟動 Plexcord",
                        description: "重新載入 Discord 用戶端視窗"
                    }
                },
                quickCSS: {
                    label: "切換快速 CSS"
                },
                transparentity: {
                    label: "切換視窗透明度"
                },
                theme: {
                    open: {
                        label: "開啟客戶端主題設定"
                    }
                }
            },
            modal: {
                searchPlaceholder: "搜尋命令",
                noCommand: "沒有找到指令",
                add: {
                    title: "新增命令"
                },
                choose: {
                    title: "選擇命令"
                },
                command: {
                    palette: {
                        label: "命令面板",
                        placeholder: "輸入命令",
                        filtering: "按 {{tags}} 過濾",
                        noCommand: "沒有找到指令",
                        pin: "引腳命令",
                        unpin: "取消固定命令"
                    },
                    target: {
                        label: "目標指令ID",
                        placeholder: "輸入命令ID",
                        choose: "選擇命令"
                    },
                    custom: {
                        label: "自訂命令",
                        description: "1) 為命令命名 · 2) 新增可選描述/關鍵字/標籤/類別 · 3) 選擇一個操作並填寫其詳細資訊（ID 應與別名和巨集的現有調色板命令相符）。",
                        auto: "自動（預設）",
                        expand: "擴張",
                        collapse: "坍塌",
                        collapsed: {
                            label: "標籤",
                            description: "顯示名稱",
                            advanced: {
                                hide: "隱藏進階選項",
                                show: "顯示進階選項"
                            },
                            subtitle: {
                                label: "描述",
                                placeholder: "可選字幕"
                            },
                            keywords: {
                                label: "關鍵字",
                                placeholder: "以逗號分隔的關鍵字"
                            },
                            tags: {
                                label: "標籤",
                                placeholder: "逗號分隔的標籤"
                            },
                            suggestion: {
                                label: "建議"
                            },
                            chooseCommand: {
                                label: "選擇此命令在調色板中的顯示位置。"
                            },
                            danger: {
                                label: "顯示為危險"
                            }
                        },
                        remove: "刪除命令",
                        add: "新增命令"
                    }
                },
                settings: {
                    noSelected: "未選擇頁面",
                    current: "目前頁面",
                    choose: "選擇頁面..."
                },
                url: {
                    url: "網址",
                    error: "使用 http:// 或 https:// 連結。",
                    valid: "輸入有效的 URL。",
                    open: {
                        external: "對外開放",
                    }
                },
                macro: {
                    sequence: {
                        label: "命令序列",
                        placeholder: "命令-a，命令-b"
                    },
                    addStep: "新增步驟",
                    unknownId: "未知的命令 ID"
                }
            },
            status: {
                online: "在線的",
                idle: "閒置的",
                dnd: "請勿打擾",
                invisible: "無形的"
            },
            tag: {
                core: "核",
                navigation: "導航",
                utility: "公用事業",
                developer: "開發商",
                customization: "客製化",
                plugins: "外掛",
                session: "會議",
                context: "情境",
                custom: "風俗",
                guilds: "行會",
                friends: "朋友們",
                other: "其他"
            },
            toast: {
                chat: {
                    button: {
                        unableToFind: "找不到「{{label}}」聊天按鈕。",
                        failedToTrigger: "無法觸發 {{label}}。",
                        activated: "{{label}} 已啟動。"
                    }
                },
                channel: {
                    mute: {
                        unavailable: "通道靜音控制不可用",
                        muted: "頻道靜音。",
                        unmuted: "頻道取消靜音。",
                        failed: "無法更新頻道靜音狀態。"
                    },
                    dm: {
                        no: "本次會議沒有 DM 關閉記錄。",
                        reOpened: "重新開啟上次關閉的 DM。",
                        noAvailable: "DM 不再可用。"
                    }
                },
                command: {
                    loop: "在巨集執行中偵測到命令循環。",
                    notFound: "未找到指令 {{commandId}}。",
                    unsupported: "不支援的自訂命令操作。",
                    failedToRun: "無法運作 {{label}}。",
                    notMetadata: "命令面板插件元資料不可用。"
                },
                guild: {
                    mute: {
                        unavailable: "公會靜音控制不可用",
                        muted: "公會靜音。",
                        unmuted: "公會未靜音。",
                        failed: "無法更新公會靜音狀態。"
                    },
                    settings: {
                        unable: "無法開啟公會設定。",
                    }
                },
                panel: {
                    pin: {
                        unable: "無法打開圖釘面板。",
                    }
                },
                status: {
                    reset: {
                        canceled: "已取消預定的狀態重置。",
                        unableToChange: "現在無法變更狀態。",
                        reverted: "狀態恢復為 {{status}}。",
                        dnd: "{{duration}} 分鐘內請勿打擾。"
                    },
                    change: {
                        unableToChange: "現在無法變更狀態。",
                        changed: "狀態變更為 {{status}}。"
                    }
                },
                read: {
                    marked: "將 {{channelLabel}} 標記為已讀。",
                    failed: "無法將頻道標記為已讀。"
                },
                route: {
                    unable: "無法開啟 {{destination}}。",
                },
                notification: {
                    cleared: "清除了所有通知。",
                    failed: "無法清除通知。",
                    notSupported: "不支援通知清除。"
                },
                streamerMode: {
                    enabled: "流光模式已啟用。",
                    disabled: "流光模式已停用。",
                },
                voice: {
                    micToggle: {
                        muted: "麥克風靜音。",
                        unmuted: "麥克風取消靜音。"
                    },
                    deafenToggle: {
                        deafened: "你現在已經聾了。",
                        undeafened: "你不再聾了。"
                    }
                },
                quickCSS: {
                    enabled: "啟用快速 CSS。",
                    disabled: "快速 CSS 已禁用。"
                },
                transparentity: {
                    enabled: "視窗透明度已啟用。",
                    disabled: "視窗透明度已停用。"
                },
                plugin: {
                    disabled: {
                        label: "{{pluginName}} 已停用。",
                        disable: "{{pluginName}} 已停用。啟用插件以使用此操作。"
                    },
                    required: {
                        label: "{{pluginName}} 需要重新啟動才能重新載入。"
                    },
                    stop: {
                        failed: "無法停止 {{pluginName}}。"
                    },
                    restart: {
                        failed: "無法重新啟動 {{pluginName}}。"
                    },
                    reload: {
                        label: "重新載入{{pluginName}}。",
                        noPlugin: "沒有重新加載任何插件。",
                        reloaded: "重新載入 {{count}} 外掛程式 {{s}}。"
                    },
                    toggle: {
                        enabled: "啟用 {{changed}} 外掛程式 {{s}}。",
                        disabled: "停用 {{changed}} 外掛程式 {{s}}。",
                        noChanged: "沒有插件改變狀態。"
                    },
                    run: {
                        failed: {
                            label: "無法運作 {{pluginName}}：{{actionLabel}}。"
                        }
                    }
                },
                commandDeleted: "指令已刪除。",
                statusSetToLabel: "狀態已設為 {{label}}。",
                themeSetToLabel: "主題已設為 {{label}}。",
                noSettingsPageWas: "未提供設定頁面。",
                unableToOpenLabel: "無法開啟 {{label_that_settings_page}}。",
                failedToStartDependencies: "無法啟動相依項目：{{join}}",
                messageSentToUsername: "已傳送訊息給 {{username}}。",
                enabledRestart: "已啟用 {{name}}。重新啟動以套用。",
                disabledRestart: "已停用 {{name}}。重新啟動以套用。",
                enabled: "已啟用 {{name}}。",
                disabled: "已停用 {{name}}。",
                errorStarting: "啟動 {{name}} 時發生錯誤。",
                errorStopping: "停止 {{name}} 時發生錯誤。"
            },
            display: {
                channel: {
                    current: "目前頻道",
                    group: "小組DM",
                    direct: "私訊"
                },
                guild: {
                    current: "目前公會",
                }
            },
            option: {
                hotkey: {
                    label: "熱鍵",
                    description: "用於開啟命令面板的熱鍵",
                    recording: "按任意鍵...",
                    reset: "重置"
                },
                visualStyle: {
                    label: "視覺風格",
                    description: "調色板外觀",
                    classic: "經典的",
                    polished: "拋光"
                },
                showTags: {
                    label: "顯示標籤",
                    description: "顯示指令的標籤晶片"
                },
                enableTagFilter: {
                    label: "啟用標籤過濾器",
                    description: "顯示標籤過濾欄"
                },
                customCommands: {
                    label: "自訂命令",
                    description: "管理自訂命令選項板條目"
                },
                closeAfterExecute: {
                    description: "執行指令後關閉面板。",
                    label: "執行後關閉"
                }
            },
            template: {
                alias: {
                    label: "別名命令",
                    description: "鏡像現有命令"
                },
                settings: {
                    label: "設定",
                    description: "打開不和諧設置"
                },
                url: {
                    label: "關聯",
                    description: "開啟外部 URL"
                },
                macro: {
                    label: "宏",
                    description: "運行一系列命令"
                }
            },
            text: {
                insertTextInChat: "在聊天中插入文字",
                name: "Name",
                commandName: "指令名稱",
                settingsPage: "設定頁面",
                searchSettingsPages: "搜尋設定頁面...",
                text: "文字",
                textToInsertInto: "要插入聊天框的文字",
                editCommand: "編輯指令",
                deleteCommand: "刪除指令",
                createCustomCommand: "建立自訂指令",
                light: "淺色",
                ash: "灰燼",
                dark: "深色",
                onyx: "瑪瑙",
                toggleMute: "切換靜音",
                toggleDeafen: "切換拒聽",
                setStatus: "設定狀態",
                searchStatuses: "搜尋狀態...",
                setLabel: "設為 {{label}}",
                toggleTheme: "切換主題",
                openServer: "開啟伺服器",
                openChannel: "開啟頻道",
                openDm: "開啟私訊",
                goHome: "返回首頁",
                goToServer: "前往伺服器",
                searchServers: "搜尋伺服器...",
                goToChannel: "前往頻道",
                searchChannels: "搜尋頻道...",
                searchFriends: "搜尋好友...",
                myAccount: "我的帳號",
                profiles: "個人資料",
                dataPrivacy: "資料與隱私",
                devices: "裝置",
                connections: "連結",
                appearance: "外觀",
                accessibility: "無障礙",
                voiceVideo: "語音與視訊",
                chat: "聊天",
                textImages: "文字與圖片",
                notifications: "通知",
                keybinds: "快速鍵",
                authorizedApps: "已授權的應用程式",
                familyCenter: "家庭中心",
                advanced: "進階",
                plexcord: "Plexcord",
                plexcordPlugins: "Plexcord 外掛",
                plexcordThemes: "Plexcord 主題",
                plexcordUpdater: "Plexcord 更新程式",
                plexcordChangelog: "Plexcord 更新日誌",
                openQuickcss: "開啟 QuickCSS",
                openUpdater: "開啟更新程式",
                openChangelog: "開啟更新日誌",
                restartDiscord: "重新啟動 Discord",
                managePlugins: "管理外掛",
                searchPlugins: "搜尋外掛...",
                sendDm: "傳送私訊",
                recipient: "收件人",
                message: "訊息",
                messageContent: "訊息內容",
                openPaletteHotkey: "開啟面板的快速鍵",
                actions: "動作",
                preview: "預覽",
                openCommand: "開啟指令",
                copyAnswer: "複製答案",
                openDetails: "開啟詳細資料",
                calculator: "計算機",
                expression: "運算式",
                result: "結果",
                copyExpression: "複製運算式",
                pinned: "已釘選",
                suggestions: "建議",
                setAlias: "設定別名",
                aliasForLabel: "{{label}} 的別名",
                leaveEmptyToRemove: "留空即可移除",
                command: "指令",
                noResults: "沒有結果",
                addFile: "新增檔案",
                saveCommand: "儲存指令",
                createCommand: "建立指令",
                nameRequired: "名稱為必填。",
                enterValidUrl: "請輸入有效的 URL。",
                pickSettingsPage: "請從建議中選擇一個設定頁面。",
                textRequired: "文字為必填。",
                commandSaved: "指令已儲存。",
                commandCreated: "指令已建立。",
                editCustomCommand: "編輯自訂指令",
                disablePlugin: "停用外掛",
                enablePlugin: "啟用外掛",
                pickRecipient: "請從建議中選擇一位收件者。",
                addMessageOrFile: "請新增訊息或檔案。",
                pressKeys: "請按鍵...",
                answerCopied: "答案已複製到剪貼簿。",
                calculationCopied: "計算式已複製到剪貼簿。",
                unpinCommand: "取消釘選指令",
                pinCommand: "釘選指令",
                saveAlias: "儲存別名",
                changeHotkey: "變更快速鍵",
                recordHotkey: "錄製快速鍵",
                pressKeyCombo: "按下組合鍵，Backspace 清除，Esc 取消",
                searchIn: "搜尋{{title}}...",
                searchCommands: "搜尋指令...",
                somethingWentWrong: "發生錯誤。",
                remove: "移除",
                enabled: "已啟用",
                disabled: "已停用",
                sectionNavigation: "導覽",
                sectionCustom: "自訂",
                sectionPlugins: "外掛",
                sectionMessaging: "訊息",
                current: "目前",
                submit: "提交"
            },
            description2: "Raycast 風格的指令面板，可在 Discord 任何位置執行動作"
        },
        consoleJanitor: {
            name: "ConsoleJanitor",
            description: "禁用煩人的控制台訊息/錯誤",
            option: {
                disableLoggers: {
                    label: "停用記錄器",
                    description: "停用 Discord 的記錄器"
                },
                disableSpotifyLogger: {
                    label: "停用 Spotify 記錄器",
                    description: "停用 Spotify 記錄器，該記錄器會洩露帳戶資訊和存取令牌"
                },
                whitelistedLoggers: {
                    label: "白名單記錄器",
                    description: "即使其他記錄器被隱藏，分號 (;) 分隔的記錄器清單也允許"
                },
                allowLevel: {
                    label: "允許等級",
                    description: "始終允許這些類型的記錄器",
                    filter: "過濾器列表"
                }
            }
        },
        consoleShortcuts: {
            name: "Console Shortcuts",
            description: "為視窗上的許多內容添加較短的別名。執行“shortcutList”以取得清單。"
        },
        contentWarning: {
            name: "ContentWarning",
            description: "允許您指定預設會模糊的某些觸發詞。單擊模糊的內容將顯示它。",
            option: {
                flagged: {
                    label: "已標記",
                    flagged: "標記的單字",
                    placeholder: "單字"
                },
                onClick: {
                    label: "點擊時",
                    description: "僅在點擊時顯示觸發內容，而不是懸停時顯示"
                }
            }
        },
        copyEmojiMarkdown: {
            name: "CopyEmojiMarkdown",
            description: "允許您將表情符號複製為格式化字串 (<a:blob_pwease:1402403381900742737>)",
            option: {
                copyUnicode: {
                    label: "複製統一碼",
                    description: "複製原始 unicode 字元而不是 :name: 作為預設表情符號 (👽)"
                }
            },
            context: {
                copy: "複製表情符號 Markdown"
            },
            toast: {
                success: "成功！複製表情符號降價。"
            }
        },
        copyFileContents: {
            name: "CopyFileContents",
            description: "在文字檔案附件中新增一個按鈕以複製其內容",
            copied: "複製了！",
            large: "文件太大，無法複製。",
            copyFileContents: "複製文件內容"
        },
        copyProfileColors: {
            name: "CopyProfileColors",
            description: "一個將人們的個人資料漸層顏色複製到剪貼簿的插件。",
            copy: "複製伺服器個人檔案顏色",
            toast: {
                noColor: "未找到設定檔顏色！",
                copied: "設定檔顏色已複製到剪貼簿！",
                error: "複製設定檔顏色時發生錯誤！"
            },
            text: {
                formatted: "主色 #{{primary}}，副色 #{{secondary}}"
            }
        },
        copyStatusUrls: {
            name: "CopyStatusUrls",
            description: "右鍵單擊用戶的狀態 URL 時複製它",
            toast: {
                copied: "複製的網址",
                error: "複製 URL 時出錯，請檢查控制台以獲取更多信息"
            }
        },
        copyStickerLinks: {
            name: "CopyStickerLinks",
            description: "新增複製和開啟貼紙連結的功能",
            context: {
                copy: "複製貼圖連結",
                open: "開啟貼圖連結"
            },
            toast: {
                success: "連結已複製！"
            }
        },
        copyUserMention: {
            name: "CopyUserMention",
            description: "新增一個按鈕以在使用者上下文功能表上複製使用者的提及，最適合與 ValidUser 配合使用。",
            context: {
                copy: "複製用戶提及"
            }
        },
        copyUserURLs: {
            name: "CopyUserURLs",
            description: "將「複製使用者 URL」選項新增至使用者上下文功能表。",
            context: {
                copy: "複製使用者網址"
            }
        },
        crashHandler: {
            name: "CrashHandler",
            description: "用於處理崩潰並可能在不重新啟動的情況下恢復的實用插件",
            option: {
                attemptToPreventCrashes: {
                    label: "嘗試防止崩潰",
                    description: "是否嘗試防止 Discord 崩潰。"
                },
                attemptToNavigateToHome: {
                    label: "嘗試導航回家",
                    description: "是否嘗試在崩潰恢復時導航到主頁選項卡。"
                }
            },
            toast: {
                crashed: {
                    title: "不和諧已經崩潰了！",
                    body: "Awn :( Discord 已快速崩潰兩次，且未嘗試恢復",
                    update: "呃哦，Discord 剛剛崩潰了……但好消息是，有一個 Plexcord 更新可以解決這個問題！您想現在更新嗎？",
                    recover: "正在嘗試恢復...",
                    invalid: "邀請連結無效或過期。"
                }
            }
        },
        ctrlEnterSend: {
            name: "CtrlEnterSend",
            description: "使用Ctrl+Enter發送訊息（可自訂）",
            option: {
                submitRule: {
                    label: "提交規則",
                    description: "發送訊息的方式",
                    ctrlEnter: "Ctrl+Enter（Enter 或 Shift+Enter 換行）（在 macOS 上為 cmd+enter）",
                    shiftEnter: "Shift+Enter（輸入換行）",
                    enter: "Enter（Shift+Enter 換行；Discord 預設值）"
                },
                sendMessageInTheMiddleOfACodeBlock: {
                    label: "在程式碼區塊中間發送訊息",
                    description: "是否在程式碼區塊中間發送訊息"
                }
            }
        },
        cursorBuddy: {
            name: "CursorBuddy",
            description: "增加一個跟隨遊標的精靈。",
            modal: {
                furColor: "毛皮顏色",
                outlineColor: "輪廓顏色"
            },
            option: {
                buddy: {
                    label: "夥伴",
                    description: "選擇一個遊標夥伴",
                    oneko: "溫尼科",
                    fathorse: "胖馬"
                },
                speed: {
                    label: "速度",
                    description: "你好友的速度",
                    invalid: "速度必須大於 0"
                },
                fps: {
                    label: "幀率",
                    description: "你好友的幀率",
                    invalid: "幀率必須大於0"
                },
                onekoSection: {
                    label: "溫尼科"
                },
                furColor: {
                    label: "毛皮顏色",
                    description: "Oneko 的毛皮六角形顏色"
                },
                outlineColor: {
                    label: "輪廓顏色",
                    description: "Oneko 的輪廓六角形顏色"
                },
                fathorseSection: {
                    label: "胖馬"
                },
                size: {
                    label: "尺寸",
                    description: "胖馬的大小",
                    invalid: "大小必須大於 0"
                },
                fade: {
                    label: "褪色",
                    description: "如果當遊標靠近時馬會消失"
                },
                freeroam: {
                    label: "自由漫遊",
                    description: "馬是否應該在空閒時自由漫步"
                },
                shake: {
                    label: "搖",
                    description: "如果馬走路時搖動窗戶"
                }
            }
        },
        customFolderIcons: {
            name: "CustomFolderIcons",
            description: "使用任意 PNG 自訂資料夾圖標",
            option: {
                solidIcon: {
                    label: "實心圖標",
                    description: "在影像背景上使用純色背景"
                },
                folderIcons: {
                    label: "資料夾圖示",
                    description: "資料夾圖示設定"
                }
            },
            modal: {
                change: "更改資料夾圖示的大小",
                save: "節省",
                unset: "取消設定",
                set: "設定新圖示",
                hover: "設定後，您可能必須將滑鼠懸停在資料夾上才能刷新它。"
            },
            context: {
                changeIcon: "變更圖示"
            }
        },
        customIdle: {
            name: "CustomIdle",
            description: "讓您設定 Discord 空閒之前的時間（或停用自動空閒）",
            backOnline: "歡迎回來！單擊按鈕即可上網。點擊 X 保持空閒直至重新加載。",
            exit: "退出空閒狀態",
            option: {
                idleTimeout: {
                    label: "空閒超時",
                    description: "Discord 進入空閒狀態前的分鐘數（0 表示停用自動空閒）"
                },
                remainInIdle: {
                    label: "保持空閒狀態",
                    description: "當您返回 Discord 時，請保持空閒狀態，直到您確認要上網"
                }
            }
        },
        customRPC: {
            name: "CustomRPC",
            description: "將完全可自訂的 Rich Presence（遊戲狀態）新增至您的 Discord 個人資料中",
            goTo: "進入{{portal}}建立應用程式並取得應用程式ID。",
            upload: "在 Rich Presence 標籤中上傳圖像以取得圖像金鑰。",
            image: "如果您想使用圖像鏈接，請下載圖像並將圖像重新上傳到 {{imgur}}，然後右鍵單擊圖像並選擇“複製圖像地址”以獲取圖像鏈接。",
            button: "您在個人資料上看不到自己的按鈕，但其他人都可以正常看到它們。",
            font: "一些奇怪的 unicode 文字（「字體」𝖑𝖎𝖐𝖊 𝖙𝖍𝖎𝖘）可能會導致豐富的存在無法顯示，請嘗試使用普通字母代替。",
            placeholder: "輸入一個值",
            select: "選擇一個選項",
            error: {
                appIdInvalid: "應用程式 ID 必須是有效的數字。",
                notice: "注意",
                sharing: "活動分享未啟用，因此其他人將看不到你的自訂 Rich Presence！",
                enable: "使能夠",
                validStream: "串流連結必須是有效的 URL。",
                mustBeURL: "必須是有效的 URL。",
                streamCharacters: "串流媒體連結不得超過 512 個字元。",
                dontUse: "不要使用 Discord 連結。請改用 Imgur 圖像連結。",
                imgur: "Imgur 連結必須是圖像的直接連結（例如 https://i.imgur.com/...）。右鍵單擊圖像，然後單擊“複製圖像地址”",
                tenor: "Tenor 連結必須是圖片的直接連結（例如 https://media.tenor.com/...）。右鍵單擊 GIF，然後單擊“複製圖像地址”",
                required: "此欄位是必需的。",
                tooLong: "長度不得超過 {{maxLength}} 個字元。",
                mustBeNumber: "必須是一個數字。",
                mustBePositive: "必須是正數。",
                startTimeInvalid: "開始時間戳記必須大於 0。",
                endTimeInvalid: "結束時間戳記必須大於 0。"
            },
            option: {
                appId: {
                    label: "應用程式ID",
                    description: "申請ID（必填）"
                },
                appName: {
                    label: "應用程式名稱",
                    description: "應用程式名稱（必填）"
                },
                details: {
                    label: "細節",
                    description: "詳細資訊（第 1 行）"
                },
                detailsURL: {
                    label: "詳情網址",
                    description: "詳情可點選網址"
                },
                state: {
                    label: "狀態",
                    description: "狀態（第 2 行）"
                },
                stateURL: {
                    label: "州網址",
                    description: "註明可點選的 URL"
                },
                partySize: {
                    label: "聚會規模",
                    description: "目前隊伍規模（必須與最大隊伍規模一起使用）"
                },
                partyMax: {
                    label: "最大聚會人數",
                    description: "最大聚會人數（必須與目前聚會人數一起使用）"
                },
                type: {
                    label: "活動類型",
                    description: "活動類型",
                    playing: "演奏",
                    streaming: "串流媒體",
                    listening: "聽力",
                    watching: "觀看",
                    competing: "競爭"
                },
                streamLink: {
                    label: "串流連結",
                    description: "Twitch.tv 或 YouTube.com 連結（僅適用於串流媒體活動類型）"
                },
                timestampMode: {
                    label: "時間戳模式",
                    description: "時間戳記應該顯示什麼",
                    none: "沒有任何",
                    sinceDiscordOpen: "自 Discord 開放以來",
                    sameAsCurrentTime: "與您目前時間相同（24小時後不重置）",
                    custom: "自訂時間"
                },
                startTime: {
                    label: "開始時間（以毫秒為單位）",
                    description: "開始時間戳記（以毫秒為單位）（僅適用於自訂時間戳模式）"
                },
                endTime: {
                    label: "結束時間（以毫秒為單位）",
                    description: "結束時間戳記（以毫秒為單位）（僅適用於自訂時間戳模式）"
                },
                imageBig: {
                    label: "大圖鍵",
                    description: "大圖像金鑰（必須在 Rich Presence 標籤中上傳）"
                },
                imageBigTooltip: {
                    label: "影像大工具提示",
                    description: "大圖像工具提示"
                },
                imageBigURL: {
                    label: "大圖片網址",
                    description: "大圖可點擊 URL"
                },
                imageSmall: {
                    label: "小圖像鍵",
                    description: "小圖像金鑰（必須在 Rich Presence 選項卡中上傳）"
                },
                imageSmallTooltip: {
                    label: "圖像小工具提示",
                    description: "小圖像工具提示"
                },
                imageSmallURL: {
                    label: "小圖片網址",
                    description: "小圖可點擊 URL"
                },
                buttonOneText: {
                    label: "按鈕 1 文字",
                    description: "按鈕1文字"
                },
                buttonOneURL: {
                    label: "按鈕 1 網址",
                    description: "按鈕 1 網址"
                },
                buttonTwoText: {
                    label: "按鈕 2 文字",
                    description: "按鈕 2 文字"
                },
                buttonTwoURL: {
                    label: "按鈕 2 網址",
                    description: "按鈕 2 網址"
                },
                enablePresence: {
                    description: "是否顯示狀態",
                    label: "啟用狀態"
                }
            },
            toast: {
                savedPresetName: "已儲存預設 {{name}}。",
                loadedPresetName: "已載入預設 {{name}}。",
                deletedPresetSelectedpreset: "已刪除預設 {{selectedPreset}}。"
            },
            text: {
                presetName: "預設名稱",
                selectAPreset: "選擇預設",
                streamLinkTwitchOr: "直播連結（Twitch 或 YouTube，僅當活動類型為直播時）",
                presets: "預設",
                save: "儲存",
                load: "載入",
                delete: "刪除",
                noSavedPresetsYet: "尚無儲存的預設。",
                showCustomRpc: "顯示自訂 RPC",
                customRpcDisabled: "自訂 RPC 已停用",
                theEnablePresenceSetting: "「啟用狀態」設定已停用，因此你的狀態不會顯示。若非有意，請在下方啟用。",
                activitySharingDisabled: "活動分享已停用",
                discordDeveloperPortal: "Discord 開發者入口網站",
                imgur: "Imgur",
                enableActivitySharing: "啟用活動分享"
            }
        },
        customSounds: {
            name: "CustomSounds",
            description: "自訂 Discord 的聲音。",
            search: "搜尋聲音",
            placeholder: "按姓名或 ID 搜尋",
            import: "進口",
            export: "出口",
            reset: "全部重置",
            debug: "偵錯",
            toast: {
                error: "載入自訂聲音檔案時出錯",
                exported: "匯出的 {{count}} 設定（不包括音訊檔案）",
                imported: "設定導入成功",
                importError: "導入設定時發生錯誤。檢查控制台以了解詳細資訊。",
                reset: "所有覆蓋重置成功！",
                overrideDescription: "覆蓋 {{soundName}}",
                previewSound: "播放聲音時出錯。",
                playing: "播放自訂聲音時出錯。文件可能已損壞。",
                invalidFile: "沒有可供預覽的自訂聲音文件",
                uploaded: "文件上傳成功：{{fileName}}",
                uploadedError: "上傳檔案時發生錯誤：{{error}}",
                invalidExtension: "文件類型無效。請上傳音訊檔案。",
                uploading: "正在上傳文件...",
                deleted: "文件刪除成功",
                deleteError: "刪除檔案時發生錯誤。",
                loadingError: "載入自訂聲音檔案時出錯"
            },
            button: {
                preview: "預覽",
                stop: "停止",
                volume: "體積",
                soundSource: "聲源",
                customFile: "自訂文件",
                uploadNew: "上傳新內容",
                delete: "刪除選定的文件"
            },
            option: {
                default: "預設",
                custom: "風俗",
                select: "選擇一個檔案...",
                overrides: {
                    label: "覆寫"
                },
                soundpack: {
                    label: "音效包",
                    description: "用來取代 Discord 中所設定音效包的音效包。",
                    default: "Discord 預設"
                }
            },
            type: {
                activityEnd: "活動結束",
                activityLaunch: "活動啟動",
                activityUserJoin: "活動用戶加入",
                activityUserLeft: "活動用戶離開",
                asmrMessage: "ASMR 訊息",
                bitMessage: "位元訊息",
                bopMessage: "波普消息",
                callCalling: "呼叫 呼叫",
                callRinging: "來電鈴聲",
                clipError: "剪輯錯誤",
                clipSave: "剪輯保存",
                ddrDown: "DDR下降",
                ddrLeft: "DDR左",
                ddrRight: "DDR右",
                ddrUp: "DDR 上行",
                deafen: "聾啞人士",
                discodo: "迪斯可多",
                disconnect: "斷開",
                duckyMessage: "鴨子留言",
                hangStatusSelect: "掛起狀態選擇",
                highfiveClap: "擊掌",
                highfiveWhistle: "擊掌口哨",
                humanMan: "人類的人",
                lofiMessage: "低傳真訊息",
                mention1: "提及 1 (@role)",
                mention2: "提及 2（@everyone）",
                mention3: "提及 3（@here）",
                message1: "訊息 1（通用）",
                message2: "訊息2（伺服器回覆）",
                message3: "訊息 3（DM 和群組 DM）",
                mute: "沉默的",
                overlayUnlock: "疊加解鎖",
                poggermodeAchievement: "波格模式成就",
                poggermodeApplause: "Pogger模式掌聲",
                poggermodeEnabled: "Pogger 模式已啟用",
                poggermodeMessage: "Pogger模式訊息",
                pttStart: "一鍵通開始",
                pttStop: "一鍵通停止",
                reconnect: "重新連接",
                robotMan: "機器人",
                stageWaiting: "舞台等待",
                streamEnded: "直播結束",
                streamStarted: "直播開始",
                streamUserJoined: "串流用戶已加入",
                streamUserLeft: "流用戶離開",
                success: "成功",
                undeafen: "不聾",
                unmute: "取消靜音",
                userJoin: "用戶加入",
                userLeave: "用戶離開",
                userMoved: "使用者已移動",
                vibingWumpus: "振動烏普斯"
            }
        },
        customTimestamps: {
            name: "CustomTimestamps",
            description: "訊息和工具提示上的自訂時間戳",
            demo: {
                cozy: "點我切換到Cosy格式",
                compact: "點我切換到壓縮格式",
                lastWeek: "此訊息是上週發送的",
                hover: "將滑鼠懸停在時間戳記上可查看工具提示格式",
                edit: "編輯下面的格式以在此處查看它們的即時更新"
            },
            modal: {
                title: "使用方法：",
                moment: "Moment.js 格式化文檔",
                hint: "此外，您可以在輸入中使用這些：",
                calendar: "啟用動態日期格式，例如",
                today: "今天",
                yesterday: "昨天",
                or: "或",
                relative: "為您提供諸如",
                relativeTime: "4小時前",
                preview: "預覽",
                format: "日曆格式",
                howTo: "如果在上述時間戳記中使用，如何格式化 [calendar] 值。"
            },
            option: {
                formats: {
                    label: "格式",
                    description: "自訂時間戳格式",
                },
                cozyFormat: {
                    label: "舒適模式",
                    description: "舒適模式下訊息中使用的時間格式"
                },
                compactFormat: {
                    label: "緊湊模式",
                    description: "緊湊模式下的時間格式和懸停在訊息上"
                },
                tooltipFormat: {
                    label: "工具提示",
                    description: "提示中使用的時間格式"
                },
                ariaLabelFormat: {
                    label: "詠嘆調標籤",
                    description: "在 aria 標籤上使用的時間格式"
                },
                sameDayFormat: {
                    label: "同一天",
                    description: "[日曆] 今天的格式",
                    default: "[今天] HH:mm:ss"
                },
                lastDayFormat: {
                    label: "最後一天",
                    description: "[日曆] 昨天的格式",
                    default: "[昨天在] HH:mm:ss"
                },
                lastWeekFormat: {
                    label: "上個星期",
                    description: "[日曆] 上週的格式"
                },
                sameElseFormat: {
                    label: "較老的其他人",
                    description: "[日曆] 舊日期的格式"
                }
            }
        },
        customUserColors: {
            name: "CustomUserColors",
            description: "讓您隨時隨地為任何用戶添加自訂顏色！強烈建議與 TypingTweaks 和 roleColorEverywhere 一起使用",
            option: {
                dmList: {
                    label: "DM列表",
                    description: "定義了自訂顏色的使用者的名字將在 DM 清單中顯示為彩色"
                },
                colorInServers: {
                    label: "伺服器中的顏色",
                    description: "是否應在伺服器內更改名稱顏色"
                }
            },
            context: {
                setColor: "設定顏色"
            },
            modal: {
                custom: "客製化顏色",
                pick: "選擇一種顏色",
                delete: "刪除條目",
                save: "節省"
            }
        },
        dearrow: {
            name: "DeArrow",
            description: "讓 YouTube 嵌入的標題和縮圖不那麼聳人聽聞，由 DeArrow 提供支持",
            option: {
                hideButton: {
                    label: "隱藏按鈕",
                    description: "在 YouTube 嵌入中隱藏 DeArrow 按鈕"
                },
                replaceElements: {
                    label: "替換元素",
                    description: "選擇將替換嵌入的哪些元素",
                    everything: "一切（標題和縮圖）",
                    title: "標題",
                    thumbnail: "縮圖"
                },
                dearrowByDefault: {
                    label: "預設情況下的 DeArrow",
                    description: "自動 DeArrow 視頻"
                }
            },
            tooltip: {
                dearrowed: "該嵌入已被 DeArrowed；點擊恢復",
                dearrow: "點擊去箭"
            },
            text: {
                toggleDearrow: "切換 Dearrow"
            }
        },
        declutter: {
            name: "Declutter",
            description: "透過刪除非必要的 UI 元素（例如個人資料效果、商店標籤、增強功能等）來清理 Discord。",
            option: {
                userProfileHeader: {
                    label: "使用者資料"
                },
                removeAvatarDecoration: {
                    label: "移除頭像裝飾",
                    description: "移除頭像裝飾。若啟用了 Decor，此項會被停用。",
                    alertBody: "已停用移除頭像裝飾功能，以避免與 Decor 外掛程式產生衝突。",
                    ok: "確定"
                },
                removeNameplate: {
                    label: "移除銘牌",
                    description: "取下銘牌。"
                },
                removeProfileEffect: {
                    label: "刪除輪廓效果",
                    description: "刪除開啟時的個人資料動畫效果。"
                },
                removeClanTag: {
                    label: "刪除氏族標籤",
                    description: "刪除部落標籤。"
                },
                alwaysShowUsername: {
                    label: "始終顯示使用者名稱",
                    description: "始終顯示使用者名稱而不是狀態。"
                },
                accessibilityNotice: {
                    label: "無障礙通知",
                    description: "Discord 在輔助使用設定中已經有內建的使用者名稱樣式選項。"
                },
                friendsListHeader: {
                    label: "以上好友/DM 列表"
                },
                removeShopAboveDM: {
                    label: "刪除 DM 上方的商店",
                    description: "刪除 DM 清單上方的商店。"
                },
                removeQuestsAboveDM: {
                    label: "刪除 DM 上方的任務",
                    description: "刪除 DM 清單上方的任務。"
                },
                miscHeader: {
                    label: "雜項"
                },
                removeServerBoostInfo: {
                    label: "刪除伺服器提升訊息",
                    description: "刪除頻道清單上方的伺服器增強資訊。"
                },
                removeBillingSettings: {
                    label: "刪除計費設定",
                    description: "刪除計費設定。"
                },
                removeGiftButton: {
                    label: "刪除禮物按鈕",
                    description: "刪除禮物按鈕。"
                },
                removeUnavailableEmojiPicker: {
                    label: "刪除不可用的表情符號選擇器",
                    description: "從表情符號選擇器中刪除不可用的類別。"
                },
                removeAudioMenus: {
                    label: "刪除音訊選單",
                    description: "刪除靜音和震耳欲聾按鈕旁的選單。"
                },
                removeButtonTooltips: {
                    label: "刪除按鈕工具提示",
                    description: "刪除按鈕工具提示。"
                },
                removeProfileFrame: {
                    description: "移除個人資料框。",
                    label: "移除個人資料框"
                },
                removeDisplayNameStyles: {
                    description: "移除成員清單中的動畫/樣式化顯示名稱。",
                    label: "移除顯示名稱樣式"
                },
                removeLibraryAboveDms: {
                    description: "移除私訊清單上方的遊戲庫。",
                    label: "移除私訊上方的遊戲庫"
                },
                removeFamilyCenterAboveDms: {
                    description: "移除私訊清單上方的家庭中心。",
                    label: "移除私訊上方的家庭中心"
                }
            },
            text: {
                discordAlreadyHasA: "Discord 已在以下位置內建使用者名稱樣式選項：",
                accessibilitySettings: "無障礙設定。"
            }
        },
        decodeBase64: {
            name: "DecodeBase64",
            description: "解碼任何訊息的 Base64 內容並複製解碼的內容。",
            right: {
                decode: "複製解碼（左鍵）/解碼 Base64（右鍵）",
                copy: "解碼 Base64（左鍵點擊）/複製解碼（右鍵）"
            },
            option: {
                clickMethod: {
                    label: "點擊方式",
                    description: "更改按鈕以解碼任何訊息的 Base64 內容。",
                    left: "左鍵點選以解碼 Base64 內容。",
                    right: "右鍵點選以解碼 Base64 內容。"
                }
            },
            modal: {
                title: "解碼的 Base64 內容",
                content: "解碼內容",
                copy: "複製解碼內容 {{index}}",
                copied: "解碼內容複製到剪貼簿！"
            }
        },
        decor: {
            name: "Decor",
            description: "建立並使用您自己的自訂頭像裝飾，或從預設中選擇您最喜歡的。",
            presetPart: "{{name}} 預設的一部分",
            createdBy: "創建者：{{author}}",
            copy: "複製預設 ID",
            file: "文件",
            your: {
                title: "你的裝飾品",
                subtitle: "您可以透過右鍵單擊自己的裝飾來刪除它們。"
            },
            option: {
                changeDecoration: {
                    label: "更換裝修",
                    description: "啟用裝飾並重新啟動用戶端以更改您的頭像裝飾。",
                    also: "您也可以從 {{profiles}} 頁面存取 Decor 裝飾品。",
                    profiles: "型材"
                },
                baseUrl: {
                    label: "基本網址",
                    description: "裝飾 API 網址"
                },
                agreedToGuidelines: {
                    label: "同意準則",
                    description: "同意指導方針"
                }
            },
            context: {
                decorationOptions: "裝飾選項",
                copyHash: "複製裝飾哈希",
                deleteDecoration: "刪除裝飾"
            },
            alert: {
                delete: {
                    title: "刪除裝飾",
                    body: "您確定要刪除 {{decoration}} 嗎？",
                    confirm: "刪除",
                    cancel: "取消"
                },
                logout: {
                    title: "退出",
                    body: "您確定要退出 Decor 嗎？",
                    confirm: "退出",
                    cancel: "取消"
                }
            },
            button: {
                change: "更換裝修",
                remove: "移除裝飾",
                apply: "申請",
                cancel: "取消",
                browse: "瀏覽",
                submit: "提交審核",
                continue: "繼續",
                back: "回去"
            },
            tooltip: {
                pendingReview: "您已經有一個裝飾正在等待審核",
                pending: "待審核"
            },
            join: {
                tooltip: "加入 Decor 的 Discord 伺服器，以獲取有關裝飾審核以及新預設發佈時的通知",
                button: "不和諧伺服器"
            },
            create: {
                title: "創造裝飾",
                notViolate: "提交之前請確保您的裝飾不違反 {{guidelines}} 。",
                guidelines: "指引",
                file: "檔案應為 APNG 或 PNG。",
                fileHolder: "選擇一個文件",
                name: "This name will be used when referring to this decoration.",
                nameHolder: "伴侶立方體",
                nameTitle: "姓名"
            },
            help: {
                update: "若要接收有關您的裝飾的評論的更新，請加入 {{server}} 並允許直接訊息。",
                server: "Decor 的 Discord 伺服器"
            },
            guidelines: {
                hold: "堅持，稍等",
                suspended: "提交裝飾即表示您同意 {{guidelines}}。不閱讀這些指南可能會導致您的帳戶在將來被暫停創建更多裝飾。",
                guidelines: "指引"
            },
            toast: {
                failedToAuthorizeMessage: "授權失敗：{{message}}"
            },
            text: {
                removeDecoration: "移除 Decor 裝飾",
                decoration: "Decor 裝飾",
                none: "無",
                decorationFile: "裝飾檔案"
            }
        },
        demonstration: {
            name: "Demonstration",
            description: "用於拍攝主題螢幕截圖的外掛程式 - 識別圖像和文字的審查器。",
            toolbox: {
                toggle: "切換演示"
            },
            keycode: "要更改您的密鑰代碼，請查看 {{keycode}}！",
            this: "這個工具",
            okay: "好的！",
            option: {
                keyBind: {
                    label: "按鍵綁定",
                    description: "按下時切換主題的按鍵"
                },
                soundVolume: {
                    label: "音量",
                    description: "切換聲音有多大（0 表示停用）"
                },
                showConfirmationModal: {
                    label: "顯示確認模式",
                    description: "顯示模式以提醒您快捷方式"
                }
            },
            switch: {
                note: "您可以稍後重新啟用此設置",
                disable: "禁用模式？"
            },
            shortcut: "這將審查所有文本！要停用此功能，請記住快捷方式："
        },
        devCompanion: {
            name: "DevCompanion",
            description: "開發伴侶插件。請透過 ping 或 DM 向 MutanPlex 報告任何無法正常運作或行為異常（很可能是錯誤）的情況。謝謝！",
            reconnect: "重新連接",
            option: {
                notifyOnAutoConnect: {
                    label: "自動連線時通知",
                    description: "是否在 Dev Companion 自動連線時發出通知。"
                },
                usePatchedModule: {
                    label: "使用修補模組",
                    description: "對於提取請求，請使用目前已修補的模組（如果已修補）而不是原始模組進行回應。"
                },
                reloadAfterToggle: {
                    label: "切換後重新加載",
                    description: "收到“禁用/啟用插件”命令後重新載入。"
                }
            },
            toast: {
                title: "開發夥伴已連接",
                connected: "連線到 WebSocket",
                disconnected: "開發夥伴已斷開連接",
                error: "開發夥伴錯誤",
                reload: "需要重新加載",
                failed: "無法啟動依賴項：{{failures}}",
                close: "關閉",
                stopping: "停止插件 {{plugin}} 時發生錯誤",
                starting: "啟動插件 {{plugin}} 時發生錯誤",
                noMessage: "無錯誤訊息",
                noReason: "沒有提供理由"
            },
            text: {
                reconnect: "重新連線",
                loadingLazyModules: "正在載入延遲模組，重新啟動可能導致錯誤",
                loadedLazyModules: "已載入所有延遲模組",
                failedLazyModules: "載入延遲模組失敗，請檢查主控台錯誤",
                ok: "確定"
            }
        },
        disableCallIdle: {
            name: "DisableCallIdle",
            description: "禁止在 3 分鐘後自動從 DM 語音通話中踢出並轉移到 AFK 語音頻道。"
        },
        disableCameras: {
            name: "DisableCameras",
            description: "預設在通話中停用相機"
        },
        discordDevBanner: {
            name: "DiscordDevBanner",
            description: "啟用 Discord 開發者橫幅，其中顯示建置 ID",
            about: "Discord 開發橫幅的格式。您可以使用以下變數：",
            preview: "預覽：",
            empty: "格式不能為空。",
            variables: {
                discord: {
                    title: "不和諧變數",
                    icon: "不和諧圖標",
                    banner: "開發橫幅圖標",
                    channel: "Discord 建置通路（例如穩定）",
                    build: "Discord 內部版本號（例如 123456）",
                    hash: "Discord 建構哈希（例如 123456）"
                },
                plexcord: {
                    title: "Plexcord 變數",
                    icon: "Plexcord 圖示",
                    name: "Name of Plexcord",
                    version: "Plexcord 版本（例如 1.0.0）",
                    hash: "Plexcord 建構哈希（例如 123456）",
                    platform: "Plexcord 正在運作的平台（例如 Dev Build）"
                },
                plextron: {
                    title: "Plextron 特定變數",
                    hashShort: "Plextron 建構哈希（例如 123456789）",
                    platformType: "Plextron 運作的平台（例如 Dev Build）"
                },
                client: {
                    title: "客戶端變數",
                    icon: "桌面圖示",
                    name: "The name of the client (e.g. Discord Canary)",
                    version: "客戶端的版本（例如1.0.0）",
                },
                electron: {
                    title: "電子變數",
                    icon: "電子圖示",
                    version: "Electron 版本（例如 25.0.0）"
                },
                chromium: {
                    title: "鉻變數",
                    icon: "鉻圖示",
                    version: "Chromium 引擎版本（例如 125.0.0.0）"
                },
                misc: {
                    title: "雜項變數",
                    newline: "換行符"
                }
            },
            text: {
                notSupported: "不支援",
                devBuild: "開發版",
                standalone: "獨立版"
            }
        },
        dontFilterMe: {
            name: "DontFilterMe",
            description: "如果您的訊息包含 AutoMod 預設清單中的術語，則會向您發出警告",
            alert: {
                title: "堅持，稍等！",
                content: "您的訊息包含 AutoMod 預設清單中的術語（術語：「{{trigger}}」）。",
                content2: "您的訊息很有可能被封鎖並可能由伺服器管理員審核。",
                confirm: "無論如何發送",
                cancel: "取消"
            }
        },
        dontRoundMyTimestamps: {
            name: "DontRoundMyTimestamps",
            description: "始終向下舍入相對時間戳，因此 7.6y 變為 7y 而不是 8y"
        },
        downloadAllAttachments: {
            name: "DownloadAllAttachments",
            description: "新增一個訊息懸浮按鈕，可一次下載訊息中的所有附件。",
            button: "下載所有附件",
            toast: {
                success: "已下載 {{count}} 個附件。",
                partial: "已下載 {{total}} 個附件中的 {{succeeded}} 個，{{failed}} 個失敗。",
                downloadedPluralizeSucceededAttachment: "已下載 {{pluralize_succeeded_attachment}}。",
                downloadedSucceededOfLength: "已下載 {{length}} 個附件中的 {{succeeded}} 個。{{failed}} 個失敗。"
            },
            option: {
                downloadAllFileTypes: {
                    description: "同時下載非媒體附件。僅在你信任他人傳送的內容時啟用。",
                    label: "下載所有檔案類型"
                }
            }
        },
        dragFavoriteEmotes: {
            name: "DragFavoriteEmotes",
            description: "為最愛的表情添加拖放功能"
        },
        dragify: {
            name: "Dragify",
            description: "將使用者、頻道或伺服器放入聊天中以插入提及或邀請。",
            option: {
                userOutput: {
                    label: "使用者輸出",
                    description: "用戶丟棄輸出。",
                    mention: "提到",
                    id: "使用者身分"
                },
                channelOutput: {
                    label: "通道輸出",
                    description: "通道下降輸出。",
                    mention: "#頻道提及",
                    link: "頻道連結",
                },
                inviteExpireAfter: {
                    label: "邀請過期時間",
                    description: "邀請到期",
                    never: "絕不",
                    thirtyMinutes: "30分鐘",
                    oneHour: "1小時",
                    sixHours: "6小時",
                    twelveHours: "12小時",
                    oneDay: "1 天",
                    sevenDays: "7天"
                },
                inviteMaxUses: {
                    label: "邀請最大使用次數",
                    description: "邀請的最大使用次數",
                    noLimit: "無限制",
                    one: "1 使用",
                    five: "5 用途",
                    ten: "10 種用途",
                    twentyFive: "25 種用途",
                    fifty: "50 種用途",
                    hundred: "100 次使用"
                },
                inviteTemporaryMembership: {
                    label: "邀請臨時會員",
                    description: "授予臨時會員資格。",
                },
                reuseExistingInvites: {
                    label: "重複使用現有邀請",
                    description: "重複使用現有邀請，而不是建立新邀請。"
                },
                allowChatBodyDrop: {
                    label: "允許聊天正文刪除",
                    description: "允許進入主聊天正文插入文字。"
                }
            },
            toast: {
                failed: {
                    drop: "Dragify 無法處理放置。",
                },
                invite: {
                    created: "已建立邀請。",
                    unable: "無法創建邀請。",
                    noChannel: "沒有可供邀請的頻道。",
                },
                noReusableInvite: "沒有可重複使用的邀請。",
                unableToReuseInvite: "無法重複使用邀請。"
            },
            ghost: {
                user: "使用者",
                server: "伺服器",
                dm: "直接訊息",
                badge: {
                    channel: "頻道",
                    thread: "線",
                    voice: "嗓音",
                    forum: "論壇",
                    media: "媒體",
                    announcement: "公告",
                    dm: "DM",
                    user: "使用者",
                    server: "伺服器"
                }
            }
        },
        elementHighlighter: {
            name: "ElementHighlighter",
            description: "輕鬆突出顯示和檢查元素。",
            modal: {
                recording: "記錄...",
                reset: "重置"
            },
            option: {
                keybind: {
                    label: "按鍵綁定",
                    description: "切換螢光筆"
                },
                showClasses: {
                    label: "顯示課程",
                    description: "在工具提示中顯示元素的 CSS 類別名稱"
                },
                showId: {
                    label: "顯示身分證",
                    description: "在工具提示中顯示元素的 ID 屬性"
                },
                showFont: {
                    label: "顯示字體",
                    description: "顯示計算出的字體系列和字體大小"
                },
                showPadding: {
                    label: "顯示內邊距",
                    description: "顯示元素的填滿值"
                },
                showMargin: {
                    label: "顯示保證金",
                    description: "顯示元素的邊距值"
                },
                showBorderRadius: {
                    label: "顯示邊框半徑",
                    description: "顯示元素的邊框半徑值"
                },
                showPosition: {
                    label: "顯示位置",
                    description: "顯示元素的 CSS 位置類型和 z-index"
                },
                showDisplay: {
                    label: "顯示顯示",
                    description: "顯示元素的顯示類型以及 flex 或 grid 屬性"
                }
            },
            toast: {
                copied: {
                    color: "已將顏色複製到剪貼簿！",
                }
            }
        },
        exitSounds: {
            name: "ExitSounds",
            description: "當您斷開語音連線時播放音板聲音。",
            button: "設定為全域退出聲音",
            toast: {
                failedToPlay: "哎呀！出了點問題。"
            },
            option: {
                soundGuildId: {
                    label: "聲音公會 ID",
                    description: "選擇包含聲音的伺服器。",
                    placeholder: "選擇伺服器..."
                },
                soundId: {
                    label: "聲音ID",
                    description: "輸入您要播放的聲音的 ID。",
                    placeholder: "輸入聲音 ID..."
                }
            }
        },
        experiments: {
            name: "Experiments",
            description: "允許存取 Discord 中的實驗和其他僅限開發的功能！",
            modal: {
                about: {
                    title: "更多資訊",
                    body: "您可以透過 {{key}} 開啟 Discord 的 DevTools"
                },
                warning: {
                    title: "堅持，稍等！ ！",
                    body: "實驗是未發布的 Discord 功能。它們可能不起作用，甚至會破壞您的客戶端或使您的帳戶被停用。",
                    notReponsible: "僅當您知道自己在做什麼時才使用實驗。 Plexcord 對啟用實驗造成的任何損壞不承擔任何責任。",
                    useAtOwnRisk: "如果您不知道實驗的作用，請忽略它。也不要問我們實驗是做什麼的；我們可能不知道。",
                    serverSideFeatures: "不可以，您不能使用伺服器端功能，例如選取「傳送至客戶端」方塊。"
                }
            },
            option: {
                toolbarDevMenu: {
                    label: "工具列開發選單",
                    description: "將說明 (?) 工具列按鈕（聊天右上角）變更為 Discord 的開發者選單"
                }
            },
            text: {
                searchExperiments: "搜尋實驗"
            }
        },
        exportMessages: {
            name: "ExportMessages",
            description: "允許您將訊息匯出到文件 - 單一訊息、來自使用者的所有訊息或所有頻道訊息",
            option: {
                maxMessages: {
                    label: "最大訊息數",
                    description: "要匯出的最大訊息數（0 = 無限制）"
                },
                includeAttachments: {
                    label: "包括附件",
                    description: "在匯出中包含附件資訊"
                },
                includeEmbeds: {
                    label: "包括嵌入",
                    description: "在匯出中包含嵌入信息"
                },
                includeReactions: {
                    label: "包括反應",
                    description: "在匯出中包含反應訊息"
                },
                includeComponents: {
                    label: "包括組件",
                    description: "在匯出中包含元件訊息"
                }
            },
            message: {
                invalid: "無效訊息－無作者",
                unknownUser: "未知用戶",
                botEmbed: "機器人嵌入訊息",
                attachments: "附件",
                unknown: "未知",
                noUrl: "無網址",
                embeds: "嵌入",
                title: "標題",
                description: "描述",
                url: "網址",
                footer: "頁尾",
                author: "作者",
                fields: "領域",
                components: "成分",
                component: "成分",
                interactiveElement: "互動元素",
                reactions: "反應",
                errorFormatting: "訊息格式錯誤",
                unknownError: "未知錯誤",
                header: "{{titlePrefix}} {{displayName}} 在 {{channelName}} 中",
                from: "來自的訊息",
                direct: "直接訊息",
                exported: "導出於",
                total: "訊息總數"
            },
            toast: {
                export: {
                    title: "匯出訊息",
                    body: "匯出訊息失敗"
                },
                noMessages: {
                    title: "匯出訊息",
                    notFoundUser: "此頻道中未找到該用戶的消息",
                    notFoundChannel: "在此頻道中找不到訊息"
                },
                failed: {
                    title: "匯出訊息",
                    body: "匯出訊息失敗"
                },
                userNotFound: {
                    title: "匯出訊息",
                    body: "未找到用戶"
                },
                complete: {
                    title: "匯出完成",
                    saved: "文件已儲存",
                    downloaded: "文件已下載",
                    messages: "訊息"
                }
            },
            context: {
                exportMessage: "匯出此訊息",
                exportAll: "從 {{user}} 匯出所有訊息",
                user: "使用者",
                exportAllChannel: "匯出所有頻道訊息"
            },
            text: {
                unknownError: "未知錯誤"
            }
        },
        expressionCloner: {
            name: "ExpressionCloner",
            description: "允許您將表情和貼紙克隆到您自己的伺服器（右鍵單擊它們）",
            modal: {
                title: "自訂名稱",
                invalidName: "名稱必須介於 2 到 32 個字元之間，並且僅包含字母數字字符"
            },
            toast: {
                success: "成功將 {{name}} 複製到 {{guild}}！",
                yourServer: "你的伺服器",
                failed: "克隆失敗：",
                console: "出了點問題（檢查控制台！）",
                successfullyClonedNameTo: "已成功將 {{name}} 複製到 {{name_your_server}}！"
            },
            context: {
                clone: "克隆 {{type}}",
                cloneName: "克隆 {{data}}"
            },
            text: {
                yourServer: "你的伺服器",
                cloneTo: "複製到 {{name}}",
                emoji: "表情符號",
                sticker: "貼圖"
            }
        },
        f8break: {
            name: "F8Break",
            description: "當您在 DevTools（+ 斷點）開啟的情況下按 F8 時，會暫停客戶端。"
        },
        fakeNitro: {
            name: "FakeNitro",
            description: "允許您發送假表情符號/貼紙、使用 Nitro 主題並以 Nitro 品質進行串流傳輸",
            option: {
                enableEmojiBypass: {
                    label: "啟用表情符號繞過",
                    description: "允許發送假表情符號（也繞過缺少使用自訂表情符號的權限）"
                },
                emojiSize: {
                    label: "表情符號大小",
                    description: "發送時表情符號的大小"
                },
                transformEmojis: {
                    label: "變換表情符號",
                    description: "是否將假表情符號轉為真表情符號"
                },
                enableStickerBypass: {
                    label: "啟用貼紙繞過",
                    description: "允許發送假貼紙（也繞過缺少使用貼紙的權限）"
                },
                stickerSize: {
                    label: "貼紙尺寸",
                    description: "發送時貼紙尺寸"
                },
                transformStickers: {
                    label: "變形貼紙",
                    description: "是否將假貼紙轉為真貼紙"
                },
                transformCompoundSentence: {
                    label: "變換複合句",
                    description: "是否在複合句中轉換假貼紙和表情符號（內容比假表情符號或貼紙連結更多的句子）"
                },
                enableStreamQualityBypass: {
                    label: "啟用流質量繞過",
                    description: "允許以 Nitro 質量進行串流傳輸"
                },
                useStickerHyperLinks: {
                    label: "使用貼紙超連結",
                    description: "發送假貼紙時是否使用超鏈接"
                },
                useEmojiHyperLinks: {
                    label: "使用表情符號超連結",
                    description: "發送假表情符號時是否使用超連結"
                },
                hyperLinkText: {
                    label: "超連結文字",
                    description: "超連結應使用什麼文字。 {{NAME}} 將會被替換為表情符號/貼紙名稱。"
                },
                disableEmbedPermissionCheck: {
                    label: "禁用嵌入權限檢查",
                    description: "發送虛假表情符號和貼紙時是否停用嵌入權限檢查"
                }
            },
            modal: {
                sticker: "這是一個 FakeNitro 貼紙，呈現出像真實貼紙一樣的效果，僅供您使用。顯示為非插件用戶的連結。",
                emoji: "這是一個 FakeNitro 表情符號，並且只為您呈現像真正的表情符號一樣。顯示為非插件用戶的連結。"
            },
            alert: {
                notice: {
                    title: "堅持，稍等！",
                    body: "您正在嘗試發送/編輯包含 FakeNitro 表情符號或貼紙的訊息；但是，您無權在當前頻道中嵌入連結。您確定要發送此訊息嗎？您的 FakeNitro 項目將僅顯示為連結。",
                    footer: "您可以在 FakeNitro 設定中停用此警報",
                    confirm: "無論如何發送",
                    cancel: "取消",
                    secondaryConfirm: "不再顯示"
                },
                apngSticker: {
                    title: "堅持，稍等！",
                    body: "您無法發送此訊息，因為它包含動畫 FakeNitro 貼紙，而且您無權在當前頻道中附加文件。請撕下貼紙以繼續。"
                }
            }
        },
        fakeProfileThemes: {
            name: "FakeProfileThemes",
            description: "借助隱形 3y3 編碼，透過隱藏個人簡介中的顏色來實現個人資料主題",
            button: {
                copy: "複製 3y3"
            },
            modal: {
                usage: "用法",
                preview: "預覽",
                intro: "啟用此外掛程式後，您將在使用相容外掛程式的其他人的個人資料中看到自訂顏色。",
                setColor: "設定您自己的顏色：",
                step1: "• 使用下方的顏色選擇器選擇您的顏色",
                step2: "• 點選{{copy}} 按鈕",
                step3: "• 將不可見文字貼到您的個人簡介中的任意位置",
                pickers: "顏色選擇器",
                primary: "基本的",
                accent: "口音"
            },
            option: {
                nitroFirst: {
                    label: "Nitro 優先",
                    description: "預設顏色來源（如果兩者都存在）",
                    nitro: "硝基色",
                    fake: "假色"
                }
            }
        },
        fakeProfileThemesAndEffects: {
            name: "FakeProfileThemesAndEffects",
            description: "透過隱藏 3y3 編碼隱藏個人簡介中的顏色和效果，允許設定檔主題和設定檔效果",
            option: {
                prioritizeNitro: {
                    label: "優先考慮硝基",
                    description: "優先考慮的來源",
                    nitro: "硝基",
                    aboutMe: "關於我"
                },
                hideBuilder: {
                    label: "隱藏生成器",
                    description: "在使用者設定檔和伺服器設定檔設定頁面中隱藏 FPTE Builder"
                }
            },
            modal: {
                primary: "基本的",
                accent: "口音",
                effect: "影響",
                usage: {
                    title: "用法",
                    intro: "啟用此外掛程式後，您將在使用此外掛程式的其他人的個人資料中看到自訂主題顏色和效果。",
                    setColor: "設定您自己的顏色和效果：",
                    step1: "前往您的個人資料設置",
                    step2: "使用 FPTE Builder 選擇您的個人資料主題顏色和效果",
                    step3: "點選 {{copy}} 按鈕",
                    step4: "將不可見文字貼到您的個人簡介中的任意位置"
                }
            },
            toast: {
                copied: "FPTE 已複製到剪貼簿！",
                empty: "FPTE Builder 為空；沒什麼可複製的！"
            },
            button: {
                copyFPTE: "複製 FPTE",
                reset: "重置",
                preview: "FPTE Builder 預覽",
                buildBackwards: "構建向後相容的 FPTE",
                moreCharacters: "將使用更多字符"
            }
        },
        fastDeleteChannels: {
            name: "FastDeleteChannels",
            description: "新增垃圾桶圖示以刪除頻道",
            option: {
                keyBind: {
                    label: "按鍵綁定",
                    description: "按下該鍵可切換垃圾箱。"
                },
                reqCtrl: {
                    label: "需要控制",
                    description: "需要按住 Control 鍵。"
                },
                reqShift: {
                    label: "需要輪班",
                    description: "需要按住 Shift 鍵。"
                },
                reqAlt: {
                    label: "需要替代",
                    description: "需要按住 Alt 鍵。"
                }
            }
        },
        favoriteEmojiFirst: {
            name: "FavouriteEmojiFirst",
            description: "將您最喜歡的表情符號放在表情符號自動完成中的第一位，並且還提供表情符號別名。",
            option: {
                aliases: {
                    label: "別名",
                    description: "管理您的表情符號別名。"
                },
                clearAll: {
                    label: "全部清除",
                    description: "刪除所有別名。"
                }
            },
            modal: {
                clear: {
                    title: "刪除所有別名",
                    description: "這將刪除您儲存的每個表情符號別名。",
                    confirm: "刪除所有別名"
                },
                set: {
                    title: "設定別名",
                    description: "為 {{emoji}} 設定別名",
                    placeholder: "別名，例如'快樂的'",
                    save: "節省",
                    error: "別名重複"
                }
            },
            toast: {
                set: "別名設定為 {{emoji}}",
                clearAll: "刪除了所有表情符號別名",
                failedDeleted: "刪除別名失敗",
                removed: "刪除別名：{{alias}}",
                failedRemove: "刪除別名失敗",
                duplicate: "別名重複",
                failedSave: "保存別名失敗。",
                removedAliasAlias: "已移除別名 :{{alias}}:",
                aliasSetForGetemojidisplayname: "已為 {{getEmojiDisplayName_ref}} 設定別名。"
            },
            button: {
                edit: "編輯別名",
                set: "設定別名"
            },
            text: {
                remove: "移除",
                noAliasesSetYet: "尚未設定別名。",
                aliasRequired: "別名為必填。",
                aliasInvalid: "別名必須為 2-32 個字元，且只能包含小寫字母、數字或底線。"
            }
        },
        favoriteAnything: {
            name: "FavoriteAnything",
            description: "收藏任何圖像",
            noFiles: "沒有與您的搜尋符合的檔案。",
            searchPlaceholder: "搜尋檔案",
            media: "媒體",
            demoText: "點擊星號來收藏檔案。\n收藏的檔案將顯示在這裡！",
            fetchError: "無法取得 {filename}",
            uploadError: "無法上傳 {filename}",
            text: {
                clickTheStarTo: "點擊星號即可收藏檔案。",
                favoriteFilesWillShow: "收藏的檔案會顯示在這裡！"
            },
            option: {
                localThumbnails: {
                    description: "在本機產生檔案縮圖，而不使用外部服務 (placeholder.nin0.dev)。不相容於行動裝置。切換此選項不會影響既有的收藏。",
                    label: "本機縮圖"
                }
            }
        },
        fileDownloadButton: {
            name: "FileDownloadButton",
            description: "在檔案右上角新增下載按鈕"
        },
        findReply: {
            name: "FindReply",
            description: "跳到頻道中訊息的最早回應（讓您更輕鬆地追蹤過去的對話）。",
            context: {
                jump: "跳到回复"
            },
            toast: {
                navigate: "使用底部面板在回覆之間導航。",
                container: "找不到容器元素。",
                couldntFind: "找不到回覆。"
            },
            option: {
                includePings: {
                    label: "包括 Ping",
                    description: "也會搜尋直接@作者的訊息"
                },
                includeAuthor: {
                    label: "包括作者",
                    description: "也會搜尋一般回覆作者的訊息，而不僅僅是確切的訊息"
                },
                hideButtonIfNoReply: {
                    label: "如果沒有回覆則隱藏按鈕",
                    description: "如果沒有回覆訊息則隱藏按鈕"
                }
            }
        },
        fixCodeblockGap: {
            name: "FixCodeblockGap",
            description: "消除程式碼區塊與其下面的文字之間的間隙"
        },
        fixFileExtensions: {
            name: "FixFileExtensions",
            description: "如果可能，請透過將檔案副檔名重新命名為相容的支援格式來修復檔案副檔名"
        },
        fixImagesQuality: {
            name: "FixImagesQuality",
            description: "透過強制使用原始來源來提高影像質量",
            option: {
                originalImagesInChat: {
                    label: "聊天中的原始影像",
                    description: "還在聊天中載入原始圖像。警告：閱讀上面的注意事項"
                }
            },
            modal: {
                about: {
                    title: "預設行為如下：",
                    body: "— 在聊天中，將載入最佳化但全解析度的影像。",
                    body2: "— 在影像模式中，將載入原始影像。",
                    body3: "您也可以在聊天中啟用原始影像，但請注意以下注意事項：",
                    warning: "— 聊天中的動畫圖像（GIF、WebP 等）將始終以動畫形式顯示，無論應用程式是否聚焦。",
                    warning2: "— 可能會導致滯後。",
                }
            }
        },
        fixSpotifyEmbeds: {
            name: "FixSpotifyEmbeds",
            description: "透過讓您自訂音量，修復了 Spotify 嵌入的聲音令人難以置信的問題",
            option: {
                volume: {
                    label: "體積",
                    description: "為 Spotify 嵌入設定的音量 %。任何高於 10% 的聲音都會非常大聲"
                }
            }
        },
        fixYoutubeEmbeds: {
            name: "FixYoutubeEmbeds",
            description: "繞過 Discord 上禁止顯示的 YouTube 影片（例如 UMG）"
        },
        followUser: {
            name: "FollowUser",
            description: "在使用者上下文選單中新增「關注」選項，以始終與他們位於同一 VC 中",
            indicatorTooltip: "追蹤{{user}}（點擊手動觸發，右鍵取消追蹤）",
            unknownUser: "未知用戶",
            option: {
                executeOnFollow: {
                    label: "跟隨執行",
                    description: "關注用戶時確保處於同一個 VC 中"
                },
                onlyManualTrigger: {
                    label: "僅手動觸發",
                    description: "僅在指示器點擊時觸發"
                },
                followLeave: {
                    label: "注意 離開",
                    description: "當關注的用戶離開時也離開"
                },
                autoMoveBack: {
                    label: "自動後移",
                    description: "Automatically move back to the VC of the followed user when you are moved"
                },
                followUserId: {
                    label: "關注用戶 ID",
                    description: "關注的用戶 ID"
                },
                channelFull: {
                    label: "頻道已滿",
                    description: "當頻道不再滿時嘗試將您移至該頻道"
                },
                onlyWhenInVoice: {
                    label: "僅在語音中時",
                    description: "僅當你在語音頻道中時才跟隨該使用者"
                }
            },
            toast: {
                channelFull: "頻道已滿",
                newVc: "跟隨用戶進入新的語音頻道",
                insufficientPermissions: "權限不足，無法進入語音頻道",
                sameVc: "你們已經在同一個頻道了",
                disconnect: "已關注用戶離開；斷開連接",
                notFollowing: "關注用戶離開，但未關注斷開連接",
                notVc: "被追蹤的用戶不在語音頻道中"
            },
            context: {
                follow: "關注用戶",
                unfollow: "取消追蹤用戶"
            }
        },
        fontLoader: {
            name: "FontLoader",
            description: "從 Google Fonts 加載任何字體",
            option: {
                selectedFont: {
                    label: "選定的字體",
                    description: "目前選擇的字體"
                },
                fontSearch: {
                    label: "字體搜尋",
                    description: "搜尋並選擇 Google 字體"
                },
                applyOnCodeBlocks: {
                    label: "應用於程式碼區塊",
                    description: "將字體套用至程式碼區塊"
                }
            },
            toast: {
                failedLoad: "載入字體失敗"
            },
            modal: {
                settings: {
                    title: "搜尋Google字體",
                    description: "選擇一種字體來應用它",
                    placeholder: "搜尋字體...",
                    previewText: "敏捷的棕色狐狸跳過了懶狗",
                    authors: "透過 {{authors}}"
                }
            },
            text: {
                currentFont: "目前字型：",
                resetFont: "重設字型"
            }
        },
        forceOwnerCrown: {
            name: "ForceOwnerCrown",
            description: "即使伺服器很大，也強制將所有者冠放在使用者名稱旁邊。"
        },
        freaky: {
            name: "Freaky",
            description: "允許您使用 /freaky 命令以奇怪的字體發送訊息。",
            command: {
                freaky: "太奇怪了。",
                message: "讓你的訊息變得怪異"
            },
            option: {
                addFreakyEnding: {
                    label: "加入怪異結局",
                    description: "最後加入👅或❤️"
                }
            }
        },
        frequentQuickSwitcher: {
            name: "Frequent Quick Switcher",
            description: "將快速切換器結果重寫並過濾為您最常使用的頻道。"
        },
        friendCloud: {
            name: "FriendCloud",
            description: "新增 /friendcloud 指令以視覺化與您最常互動的用戶",
            command: {
                friendcloud: {
                    description: "可視化您的朋友雲",
                    count: "顯示的使用者數",
                    mustHigher: "計數必須為 1 或更高！",
                    noAffinities: "未發現親緣關係。檢查您的[隱私權設定](<https://support.discord.com/hc/en-us/articles/21864805694999-Data-Used-to-Improve-Discord>)。",
                    noValid: "在關聯中找不到有效使用者。檢查您的[隱私權設定](<https://support.discord.com/hc/en-us/articles/21864805694999-Data-Used-to-Improve-Discord>)。",
                    genFailed: "無法產生圖像：c"
                }
            }
        },
        friendCodes: {
            name: "FriendCodes",
            description: "產生好友程式碼，輕鬆新增好友",
            card: {
                expires: "過期 <t:{{expiration}}:R> • {{uses}}/{{maxUses}} 使用",
                copy: "複製",
                copied: "複製了！",
                codes: "您的好友程式碼",
                count: "好友代碼 - {{invites}}",
                create: "建立好友代碼",
                revoke: "撤銷所有好友代碼",
                loading: "載入中...",
                dontHave: "您沒有任何好友代碼。"
            }
        },
        friendInvites: {
            name: "FriendInvites",
            description: "透過斜線指令建立和管理好友邀請連結（/建立好友邀請、/查看好友邀請、/撤銷好友邀請）。",
            command: {
                create: {
                    description: "產生好友邀請連結。",
                    message: "Discord.gg/{{code}}`\n· 過期 <t:{{expiration}}:R>\n· 最大使用次數：{{uses}}"
                },
                view: {
                    description: "查看所有產生的好友邀請的清單。",
                    message: "_discord.gg/{{code}}_ \n· 過期：<t:{{expiration}}:R> \n· 使用次數：{{uses}}/{{maxUses}}",
                    noInvites: "您沒有有效的好友邀請。"
                },
                revoke: {
                    description: "撤銷所有產生的好友邀請。",
                    message: "所有好友邀請均已撤銷。"
                }
            }
        },
        friendshipRanks: {
            name: "FriendshipRanks",
            description: "添加徽章，顯示您與用戶成為朋友的時間有多長",
            badge: {
                sprout: {
                    name: "Sprout",
                    description: "你們的友誼才剛開始"
                },
                blooming: {
                    name: "Blooming",
                    description: "你們的友誼即將來臨！ （1個月）"
                },
                burning: {
                    name: "Burning",
                    description: "你們的友誼已經達到了極限速度（3個月）"
                },
                fighter: {
                    name: "Fighter",
                    description: "你們的友誼很牢固（6個月）"
                },
                star: {
                    name: "Star",
                    description: "你們的友誼已經持續了一段時間（1年）"
                },
                royal: {
                    name: "Royal",
                    description: "你們的友誼經歷了風風雨雨──整整兩年了！"
                },
                besties: {
                    name: "Besties",
                    description: "你怎麼處理這個？ ？ ？ （5年）"
                }
            },
            option: {
                showFriendsInChat: {
                    description: "在好友傳送的訊息上顯示好友圖示。",
                    label: "在聊天中顯示好友"
                }
            },
            text: {
                friend: "好友",
                rankIcon: "等級圖示"
            }
        },
        friendTags: {
            name: "FriendTags",
            description: "允許您透過使用 & 開始搜尋來在快速切換器中按自訂標籤進行過濾",
            modal: {
                name: "Name",
                users: "用戶（以逗號分隔）",
                userlist: "使用者清單（點擊要刪除的使用者）",
                remove: "消除",
                add: "添加",
                tag: "標籤",
                removeFrom: "刪除自",
                addTo: "添加"
            },
            option: {
                tagConfiguration: {
                    label: "標籤配置",
                    description: "標籤配置組件"
                }
            }
        },
        fullSearchContext: {
            name: "FullSearchContext",
            description: "使訊息搜尋結果中的訊息上下文選單包含您期望的所有選項"
        },
        fullUserInChatbox: {
            name: "FullUserInChatbox",
            description: "使聊天框中的使用者提及具有更多功能，例如左/右鍵單擊"
        },
        fullVCPFP: {
            name: "FullVCPFP",
            description: "使頭像佔據整個 VC 區塊"
        },
        gameActivityToggle: {
            name: "GameActivityToggle",
            description: "在麥克風與拒聽按鈕旁新增切換遊戲活動的按鈕。右鍵點擊可切換 Spotify 活動。",
            tooltip: "切換遊戲活動",
            gameActivity: {
                enabled: "遊戲活動已啟用",
                disabled: "遊戲活動已停用"
            },
            option: {
                oldIcon: {
                    label: "舊圖示",
                    description: "使用 Discord 圖示重新設計先前的舊圖示樣式"
                },
                location: {
                    label: "地點",
                    description: "在哪裡顯示遊戲活動切換按鈕",
                    panel: "靜音/失聰旁邊",
                    toolbox: "Plexcord 工具箱"
                }
            },
            text: {
                disableGameActivity: "停用遊戲動態",
                enableGameActivity: "啟用遊戲動態",
                shareSpotifyActivity: "分享 Spotify 動態",
                shareSpotifyActivityAccount: "分享 Spotify 動態（{{name}}）"
            }
        },
        ghosted: {
            name: "Ghosted",
            description: "如果你不回覆他們的私信，一個可愛的幽靈就會出現",
            modal: {
                title: "幽靈用戶",
                no: "沒有幽靈用戶",
                unghost: "鬼魂",
                unknown: "未知",
                unnamedGroup: "未命名團體",
                unknownUser: "未知用戶",
                clearAll: "全部清除",
                noGhost: "這裡沒有鬼！",
                clear: "清除"
            },
            option: {
                showIndicator: {
                    label: "顯示指標",
                    description: "在伺服器列表頂部顯示幽靈計數器"
                },
                showDmIcons: {
                    label: "顯示 DM 圖示",
                    description: "在各個 DM 旁邊顯示幽靈圖標"
                },
                ignoreGroupDms: {
                    label: "忽略群組私訊",
                    description: "從重影中排除所有群組 DM"
                },
                exemptedChannels: {
                    label: "豁免管道",
                    description: "以逗號分隔的通道 ID 列表，以避免重影（右鍵單擊 DM 通道以複製其 ID）"
                },
                ignoreBots: {
                    label: "忽略機器人",
                    description: "忽略來自機器人的私訊"
                },
                maxInactiveTimeMs: {
                    label: "最大非活動時間",
                    description: "僅顯示在此時間範圍內活躍的幽靈私訊",
                    no: "無限制",
                    oneHour: "1 小時",
                    oneDay: "1 天",
                    oneWeek: "1 週",
                    oneMonth: "1 月"
                }
            }
        },
        gifCollections: {
            name: "GifCollection",
            description: "允許您建立 GIF 集合",
            context: {
                copyImageLink: "複製圖片連結",
                copyUrl: "複製網址",
                collection: {
                    add: "加入收藏",
                    gif: "GIF 集合",
                    delete: "刪除集合",
                    create: "創作收藏",
                    remove: "消除",
                    information: "收藏資訊",
                    name: "名稱",
                    gifs: "動圖",
                    created: "創建於",
                    updated: "最後更新",
                    close: "關閉",
                    rename: "重新命名",
                    move: "移至收藏",
                    select: "選擇要將項目移至的集合"
                },
                gif: {
                    information: "資訊",
                    added: "添加於",
                    width: "寬度",
                    height: "高度",
                    close: "關閉"
                }
            },
            option: {
                itemPrefix: {
                    label: "項目前綴",
                    description: "GIF 專案的前綴"
                },
                collectionPrefix: {
                    label: "集合前綴",
                    description: "集合的前綴"
                },
                onlyShowCollections: {
                    label: "只顯示集合",
                    description: "只顯示集合"
                },
                stopWarnings: {
                    label: "停止警告",
                    description: "停止刪除警告"
                },
                showCopyImageLink: {
                    label: "顯示複製圖像連結",
                    description: "在上下文選單中顯示 {{copyImageLink}} 選項"
                },
                preventDuplicates: {
                    label: "防止重複",
                    description: "防止多次將相同的 GIF 加入集合中"
                },
                defaultEmptyCollectionImage: {
                    label: "預設空集合影像",
                    description: "當集合沒有圖像/GIF 時將顯示的圖像/GIF"
                },
                collectionsSortType: {
                    label: "集合排序類型",
                    description: "集合的排序類型"
                },
                collectionsSortOrder: {
                    label: "收藏排序順序",
                    description: "集合的排序順序"
                },
                collectionsSort: {
                    label: "收藏排序",
                    description: "決定如何對集合進行排序",
                    title: "對集合進行排序",
                    sortDescription: "為您的收藏選擇排序標準",
                    sortBy: "排序方式",
                    name: "名稱",
                    creationDate: "建立日期",
                    modifiedDate: "修改日期",
                    ascending: "升序",
                    descending: "降序"
                },
                importGifs: {
                    label: "導入 GIF",
                    description: "進口收藏品",
                    button: "進口收藏品"
                },
                exportGifs: {
                    label: "匯出 GIF",
                    description: "導出集合",
                    button: "導出集合"
                },
                resetCollections: {
                    label: "重置收藏",
                    description: "將收藏集重設為預設值（刪除所有收藏集）",
                    button: "重置收藏"
                }
            },
            toast: {
                copied: "圖片連結已複製到剪貼簿！",
                urlCopied: "網址已複製到剪貼簿！",
                already: "該集合已經存在",
                alreadyCollection: "此 GIF 已在收藏集中",
                collectionsImportedSuccessfully: "已成功匯入收藏集。",
                failedToImportCollections: "匯入收藏集失敗：{{String_err}}"
            },
            modal: {
                create: {
                    title: "創作收藏",
                    name: "Collection Name",
                    create: "創造"
                },
                rename: {
                    title: "重新命名集合",
                    name: "New Collection Name",
                    warning: "名稱不能超過 24 個字符",
                    rename: "重新命名"
                }
            },
            alert: {
                import: {
                    title: "你確定嗎？",
                    body: "導入集合將覆蓋您目前的集合。",
                    confirm: "進口",
                    cancel: "沒關係"
                },
                reset: {
                    title: "你確定嗎？",
                    body: "重置收藏集將刪除您的所有收藏。",
                    confirm: "重置",
                    cancel: "沒關係"
                },
                delete: {
                    title: "你確定嗎？",
                    deleteBody: "您確實要刪除此收藏嗎？",
                    removeBody: "您真的要刪除該項目嗎？",
                    confirm: "刪除",
                    remove: "消除",
                    cancel: "沒關係"
                }
            },
            text: {
                gifPickerCategoryOptions: "GIF 選擇器分類選項",
                gifCollections: "GIF 收藏集",
                unknown: "未知"
            }
        },
        gifPaste: {
            name: "GifPaste",
            description: "允許您將 GIF 直接貼到聊天框中"
        },
        gifRoulette: {
            name: "GifRoulette",
            description: "添加一條命令，從您最喜歡的圖片中發送隨機 GIF，有十分之一的機會 ping 伺服器的所有者",
            command: {
                gifRoulette: {
                    description: "誘惑命運，發送 GIF",
                    restricted: "此指令在本伺服器中受限。"
                }
            },
            option: {
                pingOwnerChance: {
                    label: "Ping 擁有者機會",
                    description: "是否應該有十分之一的機會來 ping 公會的所有者（哦不）"
                }
            }
        },
        gitHubRepos: {
            name: "GitHubRepos",
            description: "在使用者的個人資料中顯示使用者的公共 GitHub 儲存庫",
            loading: "正在加載存儲庫...",
            option: {
                showStars: {
                    label: "秀星",
                    description: "顯示儲存庫星星"
                },
                showLanguage: {
                    label: "顯示語言",
                    description: "顯示儲存庫主要語言"
                }
            },
            error: {
                error: "錯誤",
                render: "錯誤：無法呈現 GitHubRepos"
            },
            button: {
                show: "顯示 GitHub 儲存庫",
                repositories: "GitHub 儲存庫",
                more: "顯示更多",
                only: "僅顯示頂部 {{length}}/{{total}}"
            },
            modal: {
                title: "{{username}} 的 GitHub 儲存庫",
                repository: "儲存庫",
                description: "描述",
                language: "語言",
                stars: "星星",
                viewOnGitHub: "在 GitHub 上查看",
                close: "關閉"
            }
        },
        googleThat: {
            name: "GoogleThat",
            description: "新增發送網路搜尋連結的命令",
            command: {
                googleThat: {
                    description: "發送搜尋引擎連結",
                    query: "搜尋查詢"
                }
            },
            option: {
                hyperlink: {
                    label: "超連結",
                    description: "發送的連結是否應以查詢作為標籤進行超連結"
                },
                embed: {
                    label: "嵌入",
                    description: "發送的連結是否應呈現嵌入"
                },
                defaultEngine: {
                    label: "預設引擎",
                    description: "使用的搜尋引擎"
                },
                customEngineURL: {
                    label: "自訂引擎 URL",
                    description: "您要使用的引擎的 URL"
                }
            }
        },
        greetStickerPicker: {
            name: "GreetStickerPicker",
            description: "允許您透過右鍵點擊「揮手打招呼！」來使用任何問候貼紙，而不僅僅是隨機貼紙。按鈕",
            mode: {
                greet: "迎接",
                message: "訊息"
            },
            option: {
                greetMode: {
                    label: "問候模式",
                    description: "選擇問候模式",
                    greet: "打招呼（只能打招呼3次）",
                    message: "訊息（您可以迎接垃圾郵件）"
                }
            },
            context: {
                label: "問候貼紙選擇器",
                mode: "問候模式",
                stickers: "問候貼紙",
                multi: "邪惡多重問候",
                send: "發送問候"
            }
        },
        guildPickerDumper: {
            name: "GuildPickerDumper",
            description: "用於轉儲和下載伺服器的表情符號和貼紙的上下文選單。",
            context: {
                download: {
                    emoji: "下載表情符號",
                    sticker: "下載貼紙"
                }
            }
        },
        guildTagSettings: {
            name: "GuildTagSettings",
            description: "添加了一些公會標籤的設置，例如隱藏它們或禁用提示採用它們。",
            option: {
                disableAdoptTagPrompt: {
                    label: "禁用採用標籤提示",
                    description: "禁用採用標籤的提示"
                }
            }
        },
        hideChatButtons: {
            name: "HideChatButtons",
            description: "能夠隱藏聊天按鈕",
            tooltip: {
                close: "關閉",
                open: "打開"
            },
            option: {
                color: {
                    label: "顏色",
                    description: "打開時將其塗成紅色"
                },
                open: {
                    label: "打開",
                    description: "預設開啟"
                }
            }
        },
        hideMedia: {
            name: "HideMedia",
            description: "透過懸停按鈕隱藏單一訊息的附件和嵌入",
            show: "展會媒體",
            hide: "隱藏媒體",
            hidden: "媒體隱藏"
        },
        hideMessages: {
            name: "HideMessages",
            description: "在重新啟動前暫時隱藏訊息和私訊。",
            button: {
                hide: "隱藏",
                hideDm: "隱藏私訊",
                unhideDm: "取消隱藏私訊"
            },
            toggle: {
                none: "沒有隱藏的私訊",
                hide: "隱藏已隱藏的私訊",
                show: "顯示已隱藏的私訊"
            },
            option: {
                hidePopoverButton: {
                    label: "隱藏彈出按鈕",
                    description: "隱藏訊息彈出視窗中的隱藏按鈕。"
                }
            }
        },
        hideMutedVoiceIndicator: {
            name: "HideMutedVoiceIndicator",
            description: "當活躍的語音頻道皆已靜音時，隱藏伺服器列表中的語音指示器"
        },
        hideServers: {
            name: "HideServers",
            description: "從伺服器清單中隱藏伺服器",
            context: {
                hide: "隱藏伺服器",
                unhide: "取消隱藏伺服器",
                folder: {
                    hide: "隱藏資料夾",
                    unhide: "取消隱藏資料夾"
                }
            },
            option: {
                showIndicator: {
                    label: "顯示指標",
                    description: "顯示選單以取消隱藏清單底部的伺服器"
                },
                guildsList: {
                    label: "公會列表",
                    description: "刪除隱藏伺服器"
                },
                resetHidden: {
                    label: "重置隱藏",
                    description: "從清單中刪除所有隱藏的公會",
                    button: "重置隱藏伺服器"
                }
            },
            button: {
                hidden: "隱",
                hiddenServers: "隱藏伺服器",
                remove: "消除",
                folder: "資料夾",
                removeAll: "全部刪除",
                guilds: "行會",
                noHiddenServers: "沒有隱藏伺服器"
            }
        },
        holyNotes: {
            name: "HolyNotes",
            description: "Holy Notes 允許您保存訊息",
            main: "主要的",
            button: {
                tooltip: "神聖筆記",
                save: "保存備註",
                cancel: "取消",
                noteMessage: "備註留言",
                refresh: "刷新頭像",
                import: "進口備註",
                export: "出口票據",
                deleteAll: "刪除所有筆記",
                delete: "刪除筆記本",
                create: "建立筆記本",
                copyText: "複製文字",
                copyAttachment: "複製附件網址",
                deleteNote: "刪除註釋",
                moveNote: "移動註釋",
                moveTo: "移至 {{key}}",
                copyId: "複製身分證件"
            },
            modal: {
                error: {
                    generic: "解析您的筆記時出錯。檢查控制台以了解詳細資訊。",
                    easter: "沒有找到任何註釋。同理心香蕉就在這裡為您服務。",
                    empty: "未發現此筆記本中儲存任何筆記。"
                },
                help: {
                    title: "幫助",
                    description: "了解如何使用神聖筆記",
                    addingNotes: "新增註釋",
                    addingNotesText: "若要新增註釋，請右鍵單擊一則訊息，然後將滑鼠懸停在「註釋訊息」項目上，然後按一下帶有您要為其新增註釋的筆記本名稱的按鈕。",
                    prototype: "原型",
                    noteMessage: "點選「備註訊息」按鈕，預設會備註到主頁！",
                    deletingNotes: "刪除筆記",
                    deletingNotesText: "注意：您可以右鍵單擊註釋並點擊“刪除註釋”，也可以按住鍵盤上的“DELETE”鍵並點擊註釋；這就像魔法一樣！",
                    movingNotes: "移動筆記",
                    movingNotesText: "若要移動筆記，請右鍵單擊筆記並將滑鼠懸停在「移動筆記」項目上，然後按一下與要將筆記移至的筆記本對應的按鈕。",
                    jumpToMessage: "跳轉至訊息",
                    jumpToMessageText: "要跳到註釋最初所在的位置，只需右鍵單擊註釋並點擊“跳到訊息”即可。"
                },
                notebook: {
                    title: "筆記本",
                    search: "搜尋訊息...",
                    options: "排序選項",
                    label: "排序選單",
                    filteredOf: "{{noteCount}} 註 {{s}} 的 {{filteredCount}}",
                    note: "{{noteCount}} 註{{s}}",
                    ada: "升序/添加日期",
                    amd: "升序/訊息日期",
                    dda: "降序/添加日期",
                    dmd: "降序/訊息日期",
                    change: "更改排序",
                    ascending: "升序",
                    descending: "降序",
                    dateAdded: "新增日期",
                    messageDate: "留言日期"
                },
                create: {
                    title: "建立筆記本",
                    description: "輸入新筆記本的名稱",
                    placeholder: "筆記本名稱"
                },
                delete: {
                    title: "刪除{{notebookName}}？",
                    description: "{{noteCount}} 注意{{s}} 將會永久刪除",
                    button: "刪除"
                },
                tabs: {
                    label: "筆記本標籤"
                }
            },
            toast: {
                saved: "已成功將訊息新增至 {{notebook}}",
                deleted: "已成功刪除 {{notebook}} 中的註釋",
                moved: "已成功將註解從 {{from}} 移至 {{to}}。",
                exists: "筆記本 {{notebookName}} 已存在。",
                created: "成功建立{{notebookName}}。",
                deletedNotebook: "成功刪除 {{notebookName}}。",
                refreshed: "頭像刷新成功。",
                deletedAll: "成功刪除所有筆記。",
                imported: "成功導入筆記。",
                invalid: "導入筆記失敗。",
                invalidJson: "無效的 JSON"
            },
            toolbox: {
                action: "打開筆記"
            },
            text: {
                holyNotes: "Holy Notes",
                noteTag: "筆記"
            }
        },
        homeTyping: {
            name: "HomeTyping",
            description: "如果您的 DM 中有人正在打字，則將主頁按鈕變更為打字指示器"
        },
        iconViewer: {
            name: "IconViewer",
            description: "在設定中新增一個選項卡以預覽所有圖示。",
            toolbox: "打開圖標選項卡",
            iconFinder: "圖示查找器",
            about: {
                title: "特徵",
                preview: "預覽圖標",
                list: {
                    copy: "複製圖示名稱和 CSS 變數",
                    download: "下載不同格式的圖示（SVG、PNG、GIF 等）",
                    premade: "複製為您的插件找到的預製圖標",
                    find: "按功能上下文尋找圖標",
                    search: "透過右鍵單擊顏色名稱來搜尋顏色",
                    special: "特別感謝"
                }
            },
            context: {
                icon: {
                    options: "圖示選項",
                    log: "登入控制台",
                    save: "另存為...",
                    rightClick: "右鍵單擊圖示即可更改",
                    usage: "用法",
                    click: "點選複製",
                    copied: "複製了！",
                    actions: "行動"
                }
            },
            modal: {
                label: "按功能上下文搜尋",
                search: "搜尋 {{count}} 圖示...",
                function: "功能",
                iconViewer: {
                    colors: "圖示檢視器顏色",
                    unknown: "未知",
                }
            }
        },
        idleAutoRestart: {
            name: "IdleAutoRestart",
            description: "在空閒一段可設定的時間後自動重新啟動用戶端，但避免在 VC 中重新啟動。",
            option: {
                isEnabled: {
                    label: "已啟用",
                    description: "啟用空閒後自動重啟"
                },
                idleMinutes: {
                    label: "空閒分鐘數",
                    description: "重新啟動前不活動的分鐘數（不在 VC 時）"
                }
            },
            toolbox: {
                disable: "停用空閒自動重啟",
                enable: "啟用空閒自動重啟"
            }
        },
        ignoreActivities: {
            name: "IgnoreActivities",
            description: "忽略僅顯示在您的狀態上的活動。您可以從「註冊遊戲」和「活動」標籤中配置專門忽略哪些遊戲，或使用下面的常規設置",
            modal: {
                import: {
                    title: "將CustomRPC插件的應用程式ID匯入到過濾器清單中"
                },
                filter: {
                    title: "過濾器列表",
                    description: "要過濾的以逗號分隔的活動 ID 清單（對於過濾特定 RPC 活動和 CustomRPC 很有用）"
                }
            },
            toast: {
                id: {
                    notSet: "未設定 CustomRPC 應用程式 ID。",
                    alreadyAdded: "CustomRPC 應用程式 ID 已新增。"
                }
            },
            button: {
                import: "導入自訂RPC ID"
            },
            option: {
                importCustomRPC: {
                    label: "導入自訂RPC"
                },
                listMode: {
                    label: "列表模式",
                    description: "選擇如何套用篩選器列表",
                    blacklist: "黑名單（僅忽略清單中的內容）",
                    whitelist: "白名單（忽略清單中的內容以外的所有內容）"
                },
                idList: {
                    label: "ID列表"
                },
                ignorePlaying: {
                    label: "忽略播放",
                    description: "忽略所有遊戲活動（通常是遊戲和 RPC 活動）"
                },
                ignoreStreaming: {
                    label: "忽略串流媒體",
                    description: "忽略所有串流媒體活動"
                },
                ignoreListening: {
                    label: "忽略傾聽",
                    description: "忽略所有收聽活動（通常為 Spotify 活動）"
                },
                ignoreWatching: {
                    label: "忽略觀看",
                    description: "忽略所有觀看活動"
                },
                ignoreCompeting: {
                    label: "忽略競爭",
                    description: "忽略所有競爭活動（這些通常是特殊的遊戲活動）"
                },
                ignoredActivities: {
                    label: "被忽略的活動"
                }
            },
            text: {
                enableActivity: "啟用活動",
                disableActivity: "停用動態"
            }
        },
        ignoreCalls: {
            name: "IgnoreCalls",
            description: "允許您忽略來自特定使用者或 DM 群組的通話。",
            option: {
                permanentlyIgnoredUsers: {
                    label: "永久被忽略的用戶",
                    description: "應永久忽略的使用者 ID（逗號 + 空格）"
                }
            },
            button: {
                ignore: "忽略",
                temporarilyIgnore: "暫時忽略來電",
                permanentlyIgnore: "永久忽略來電"
            }
        },
        iLoveSpam: {
            name: "ILoveSpam",
            description: "不要隱藏來自「可能的垃圾郵件發送者」的訊息"
        },
        imageFilename: {
            name: "ImageFilename",
            description: "將滑鼠懸停在圖像和 GIF 上時將其檔案名稱顯示為工具提示",
            option: {
                showFullUrl: {
                    label: "顯示完整網址",
                    description: "顯示圖像的完整 URL，而不僅僅是檔案名稱。始終啟用 GIF，因為它們通常沒有有意義的檔名"
                }
            }
        },
        imageLink: {
            name: "ImageLink",
            description: "切勿隱藏訊息中的圖像鏈接，即使它是唯一的內容"
        },
        imageZoom: {
            name: "ImageZoom",
            description: "讓您放大影像和 GIF 並顯示影像元資料。使用滾輪放大，使用 Shift + 滾輪增加鏡頭半徑。",
            option: {
                saveZoomValues: {
                    label: "保存縮放值",
                    description: "是否儲存變焦和鏡頭尺寸值"
                },
                invertScroll: {
                    label: "反轉滾動",
                    description: "反轉滾動"
                },
                nearestNeighbour: {
                    label: "最近鄰",
                    description: "縮放影像時使用最近鄰插值"
                },
                square: {
                    label: "方塊",
                    description: "將鏡片設為正方形"
                },
                zoom: {
                    label: "飛漲",
                    description: "鏡頭變焦"
                },
                size: {
                    label: "尺寸",
                    description: "鏡片半徑/尺寸"
                },
                zoomSpeed: {
                    label: "變焦速度",
                    description: "變焦/鏡頭尺寸變化的速度有多快"
                },
                showMetadata: {
                    label: "顯示元數據",
                    description: "雙擊所選影像時顯示影像元數據"
                }
            },
            context: {
                square: "方形鏡片",
                nearest: "最近鄰",
                zoom: "飛漲",
                size: "鏡片尺寸",
                zoomSpeed: "變焦速度",
                showImageMetadata: "顯示影像元數據",
                view: "查看元數據",
                loading: "載入中...",
                unknown: "未知",
                sizeHTML: "尺寸",
                dimensions: "方面",
                filename: "檔案名稱"
            },
            text: {
                bytes: "位元組"
            }
        },
        imgToGif: {
            name: "ImgToGif",
            description: "新增 /imgtogif 斜線命令以從任何圖像建立 GIF",
            command: {
                imgToGif: {
                    description: "允許您將圖像轉換為 GIF",
                    image: "使用的圖像附件",
                    width: "GIF 的寬度",
                    height: "GIF 的高度"
                }
            },
            error: {
                noImage: "沒有指定圖片！",
                notImage: "上傳的不是圖片"
            }
        },
        implicitRelationships: {
            name: "ImplicitRelationships",
            description: "在「好友」標籤中顯示您的隱式關係。",
            option: {
                sortByAffinity: {
                    label: "按親和力排序",
                    description: "是否按隱式關係與您的親和力對它們進行排序。"
                }
            },
            implicit: "隱含的"
        },
        inRole: {
            name: "InRole",
            description: "使用角色上下文選單或 /inrole 命令了解角色中的角色（閱讀插件資訊！）",
            command: {
                inrole: {
                    description: "了解角色是誰",
                    role: "角色",
                    noGuild: "確保您位於伺服器中。"
                }
            },
            context: {
                view: "查看角色中的成員"
            },
            modal: {
                about: {
                    title: "限制",
                    description: "如果您在伺服器上沒有 mod 權限，且該伺服器很大（超過 100 個成員），則該插件可能會受到以下限制",
                    list: {
                        one: "離線會員不會被列出",
                        two: "預設最多會列出 100 名成員。要獲取更多信息，請在成員列表中向下滾動以加載更多成員。",
                        three: "然而，無論其狀態如何，朋友總是會被顯示。"
                    }
                },
                member: {
                    title: "角色成員",
                    noMembers: "看起來沒有找到具有該角色的線上快取成員。嘗試向下捲動您的成員清單以快取更多用戶！"
                }
            }
        },
        instantScreenshare: {
            name: "InstantScreenshare",
            description: "加入語音頻道時立即進行螢幕分享，支援桌面來源、視窗和視訊輸入裝置（相機、擷取卡）",
            modal: {
                linux: {
                    title: "對於Linux",
                    body: "對於 Wayland，它僅彈出螢幕共享選擇",
                    bodyTwo: "對於 X11，它可能有效，也可能無效：聳肩："
                },
                videoDevices: {
                    title: "視訊輸入設備",
                    body: "在設定中啟用後支援相機和擷取卡（如 Elgato HD60X）"
                },
                regardingSound: {
                    title: "關於聲音和預覽設置",
                    body: "我們使用 Discord 設定和使用的設定來決定是否應啟用串流預覽和聲音"
                }
            },
            option: {
                streamMedia: {
                    label: "要串流的媒體來源",
                    description: "如果未找到則重設到主螢幕",
                    loading: "正在載入媒體來源...",
                    none: "找不到媒體來源",
                    placeholder: "選擇要串流的媒體來源"
                },
                includeVideoDevices: {
                    label: "包括視訊設備",
                    description: "將視訊輸入設備（相機、擷取卡）包含在來源清單中"
                },
                autoMute: {
                    label: "自動靜音",
                    description: "加入語音頻道時自動將麥克風靜音"
                },
                autoDeafen: {
                    label: "自動隔音",
                    description: "加入語音頻道時自動變聾（也會使您靜音）"
                },
                instantScreenshare: {
                    label: "即時螢幕分享",
                    description: "啟用自動螢幕分享功能"
                },
                keybindScreenshare: {
                    label: "按鍵綁定螢幕共享",
                    description: "透過 Discord 鍵綁定設定中的鍵綁定進行螢幕共享"
                },
                focusDiscord: {
                    label: "焦點不和諧",
                    description: "僅當 Discord 聚焦時才使用按鍵綁定啟動畫面共享"
                },
                toolboxManagement: {
                    label: "工具箱管理",
                    description: "啟用/停用即時螢幕分享"
                }
            },
            toolbox: {
                label: "即時螢幕分享",
                toast: "即時螢幕分享 {{state}}",
                enabled: "啟用",
                disabled: "殘障人士"
            },
            toast: {
                instantScreenshareDisabled: "即時螢幕分享 {{disabled}}"
            },
            text: {
                instantScreenshare: "Instant Screenshare"
            }
        },
        invisibleChat: {
            name: "InvisibleChat",
            description: "以不可疑的方式加密您的訊息！",
            option: {
                savedPasswords: {
                    label: "已儲存的密碼",
                    description: "儲存的密碼（以 , 分隔）"
                }
            },
            button: {
                encrypt: "加密訊息",
                decrypt: "解密訊息",
                hidden: "隱藏訊息指示器（InvisibleChat）"
            },
            tooltip: {
                hidden: "此訊息有隱藏訊息！ （隱形聊天）"
            },
            embed: {
                title: "解密訊息",
                footer: "透過 InvisibleChat 發送"
            },
            modal: {
                encrypt: {
                    title: "加密訊息",
                    secret: "秘密",
                    cover: "封面（2個或更多字！！）",
                    password: "密碼",
                    dontUseCover: "不要使用蓋子",
                    send: "傳送",
                    cancel: "取消"
                },
                decrypt: {
                    title: "解密訊息",
                    with: "訊息加密",
                    password: "密碼",
                    decrypt: "解密",
                    cancel: "取消"
                }
            }
        },
        inviteDefaults: {
            name: "InviteDefaults",
            description: "允許您在建立伺服器邀請時編輯預設值。",
            option: {
                inviteDuration: {
                    label: "邀請期限",
                    description: "伺服器邀請的預設持續時間",
                    thirtyMinutes: "30分鐘",
                    oneHour: "1小時",
                    sixHours: "6小時",
                    twelveHours: "12小時",
                    oneDay: "1 天",
                    sevenDays: "7天",
                    forever: "永遠"
                },
                maxUses: {
                    label: "最大使用次數",
                    description: "伺服器邀請的預設最大使用次數",
                    unlimited: "無限",
                    one: "1",
                    five: "5",
                    ten: "10",
                    twentyFive: "25",
                    fifty: "50",
                    oneHundred: "100"
                },
                temporaryMembership: {
                    label: "臨時會員資格",
                    description: "伺服器邀請的預設臨時成員身份"
                }
            }
        },
        ircColors: {
            name: "IrcColors",
            description: "讓聊天中的使用者名稱顏色獨一無二，就像在 IRC 用戶端中一樣",
            option: {
                lightness: {
                    label: "亮度",
                    description: "亮度，以 % 為單位。如果顏色太淺或太深，請進行更改"
                },
                memberListColors: {
                    label: "會員列表顏色",
                    description: "替換成員清單中的角色顏色"
                },
                applyColorOnlyToUsersWithoutColor: {
                    label: "僅將顏色套用於沒有顏色的用戶",
                    description: "僅將顏色套用至沒有預定義顏色的用戶"
                },
                applyColorOnlyInDms: {
                    label: "僅在 DM 中套用顏色",
                    description: "僅在直接訊息中套用顏色；不要在伺服器中套用顏色。"
                }
            }
        },
        iRememberYou: {
            name: "IRememberYou",
            description: "在本地保存與您通訊的每個人（包括伺服器），以防遺失",
            section: {
                description: "提供您提到或回覆過的使用者的列表，或擁有您所屬伺服器的使用者（伺服器擁有者*），或是您的公會的成員",
                empty: "現在是空的。",
                tooltip: "{{user}}，更新於 {{updatedAtContent}}",
                owner: "伺服器擁有者",
                iRememberYou: "我記得你"
            },
            context: {
                user: "使用者選項",
                copy: "複製使用者 ID",
                copyToast: "使用者 ID 已複製到剪貼簿",
                view: "查看資料"
            },
            modal: {
                title: "編輯",
                filter: "按標籤、使用者名稱、ID 過濾",
                button: {
                    validate: "驗證並保存",
                    cancel: "取消",
                    openEditor: "開啟編輯器",
                    resetData: "重置儲存",
                    sure: "你確定嗎？"
                }
            },
            text: {
                serverOptions: "伺服器選項",
                copyServerId: "複製伺服器 ID",
                serverIdCopied: "伺服器 ID 已複製到剪貼簿"
            }
        },
        jumpTo: {
            name: "JumpTo",
            description: "新增上下文選單選項以跳到頻道/DM 的開頭或底部",
            context: {
                top: "跳到第一則訊息",
                bottom: "跳轉至最新消息",
                noMessages: "在此頻道中未找到該用戶的消息。",
                searchFailed: "搜尋訊息失敗。"
            }
        },
        keepCurrentChannel: {
            name: "KeepCurrentChannel",
            description: "在切換帳戶或載入 Discord 之前嘗試導航到您所在的頻道。"
        },
        keyboardSounds: {
            name: "KeyboardSounds",
            description: "加入 OperaGX 或 osu!鍵盤上打字時的音效。",
            option: {
                volume: {
                    label: "體積",
                    description: "鍵盤聲音的音量"
                },
                soundPack: {
                    label: "聲音包",
                    description: "用於鍵盤聲音的聲音包",
                    operagx: "OperaGX",
                    osu: "奧蘇！"
                }
            }
        },
        keywordNotify: {
            name: "KeywordNotify",
            description: "如果給定訊息與某些關鍵字或正規表示式匹配，則發送通知",
            idHolder: "ID",
            keywordEntry: "關鍵字輸入",
            regexHolder: "範例|正規表示式",
            ignoreCase: "忽略大寫",
            whiteblackLabel: "白名單/黑名單",
            tab: {
                title: "關鍵字",
                clearAll: "全部清除"
            },
            button: {
                addId: "新增ID",
                addKeyword: "新增關鍵字條目"
            },
            listTypeSelector: {
                blacklist: "黑名單",
                whitelist: "白名單",
                placeholder: "選擇清單類型"
            },
            option: {
                ignoreBots: {
                    label: "忽略機器人",
                    description: "忽略來自機器人的訊息"
                },
                amountToKeep: {
                    label: "保留金額",
                    description: "要保留在日誌中的消息數量"
                },
                keywords: {
                    label: "關鍵字",
                    description: "管理關鍵字"
                }
            },
            text: {
                keywordEntryI1: "關鍵字項目 {{i_1}}",
                listPriorityAdvanced: "清單優先順序（進階）",
                whichListToPrioritize: "當一則訊息同時觸發兩個清單時優先使用哪個清單",
                ifYouAreNot: "如果不確定，多數常見情況下通常設為黑名單"
            }
        },
        lastOnline: {
            name: "LastOnline",
            description: "在 DM 清單、公會和 GDM 成員清單中的使用者名稱下新增最後線上指示器",
            unit: {
                d: "天",
                h: "小時",
                m: "分分鐘"
            },
            online: "{{formattedTime}} 前在線"
        },
        listenBrainzRPC: {
            name: "ListenBrainzRPC",
            description: "ListenBrainz 豐富存在的小型插件",
            about: {
                title: "關於 MusicBrainz API",
                description: "MusicBrainz API 不需要 API 金鑰，但需要 {{link}}。對大多數人來說，電子郵件地址就足夠了。",
                userAgent: "有意義的用戶代理字串"
            },
            option: {
                username: {
                    label: "使用者名稱",
                    description: "ListenBrainz 使用者名稱"
                },
                mbContact: {
                    label: "聯絡方式",
                    description: "聽腦聯繫方式"
                },
                shareUsername: {
                    label: "分享用戶名",
                    description: "顯示 ListenBrainz 個人資料的連結（可能僅對其他使用者可見）"
                },
                shareSong: {
                    label: "分享歌曲",
                    description: "在 ListenBrainz 上顯示目前歌曲的連結（可能僅對其他使用者可見）"
                },
                hideWithSpotify: {
                    label: "使用 Spotify 隱藏",
                    description: "如果 Spotify 正在運行，則隱藏 ListenBrainz 存在"
                },
                hideWithActivity: {
                    label: "隱藏活動",
                    description: "如果您有任何其他狀態，請隱藏 ListenBrainz 狀態"
                },
                useTimeBar: {
                    label: "使用時間欄",
                    description: "使用曲目持續時間顯示時間條（必須使用聆聽狀態）"
                },
                statusName: {
                    label: "狀態名稱",
                    description: "自訂狀態文字"
                },
                nameFormat: {
                    label: "姓名格式",
                    description: "在狀態名稱中顯示歌曲名稱和藝術家名稱",
                    custom: "使用自訂狀態名稱",
                    artistSong: "使用格式“藝術家 - 歌曲”",
                    songArtist: "使用格式“歌曲 - 藝術家”",
                    artistOnly: "僅使用藝術家姓名",
                    songOnly: "僅使用歌曲名稱",
                    albumName: "使用專輯名稱（如果歌曲沒有專輯，則返回自訂狀態文字）"
                },
                useListeningStatus: {
                    label: "使用收聽狀態",
                    description: "顯示“正在收聽”狀態而不是“正在播放”"
                },
                missingArt: {
                    label: "缺失的藝術",
                    description: "當專輯或專輯封面遺失時",
                    listenbrainzLogo: "使用大 ListenBrainz 徽標",
                    generic: "使用通用佔位符"
                },
                showAlbumCover: {
                    label: "顯示專輯封面",
                    description: "顯示專輯封面。停用此選項將顯示預設預覽圖。如果您的音樂包含不當的封面，此功能會很有用"
                },
                useLogo: {
                    label: "使用標誌",
                    description: "在專輯封面上顯示 ListenBrainz 標誌"
                }
            },
            button: {
                profile: "ListenBrainz 個人檔案",
                viewSong: "檢視歌曲"
            }
        },
        loadingQuotes: {
            name: "LoadingQuotes",
            description: "替換 Discord 的載入引號",
            option: {
                replaceEvents: {
                    label: "替換事件",
                    description: "該插件是否也適用於具有特殊活動主題報價的活動？ （例如萬聖節）"
                },
                enablePluginPresetQuotes: {
                    label: "啟用插件預設報價",
                    description: "啟用此外掛程式預設的報價"
                },
                enableDiscordPresetQuotes: {
                    label: "啟用 Discord 預設報價",
                    description: "啟用 Discord 的預設報價（包括活動期間的活動報價）"
                },
                additionalQuotes: {
                    label: "附加報價",
                    description: "可能出現的其他自訂引號，由以下分隔符號分隔"
                },
                additionalQuotesDelimiter: {
                    label: "附加引號分隔符",
                    description: "附加引號的分隔符"
                }
            },
            text: {
                allQuotesDisabled: "你真的把所有載入語錄都關掉了？真是個小丑……"
            }
        },
        loginWithQR: {
            name: "LoginWithQR",
            description: "允許您透過掃描登入二維碼登入其他設備，就像在行動裝置上一樣！",
            option: {
                scanQr: {
                    label: "掃描二維碼",
                    description: "掃描二維碼",
                    notEnabled: "啟用外掛程式並重新啟動用戶端以掃描登入二維碼"
                }
            },
            neverScan: "切勿掃描其他使用者或應用程式的登入二維碼。",
            hold: "按住確認登入",
            scanning: "掃描...",
            stopScanning: "停止掃描",
            usingWebcam: "使用網路攝影機掃描",
            dragDrop: "將圖像拖放到此處，或點擊以選擇圖像",
            orPaste: "或從剪貼簿貼上圖像！",
            verifyLogin: "驗證登入",
            text: {
                scanQrCode: "掃描 QR 碼"
            }
        },
        markdownTables: {
            name: "MarkdownTables",
            description: "在 Discord 訊息中顯示 GitHub 風格的 Markdown 表格。",
            toolbar: {
                label: "Markdown 表格檢視",
                table: "表格",
                raw: "原始"
            },
            option: {
                hideToggle: {
                    label: "隱藏切換",
                    description: "隱藏表格/原始切換，一律顯示轉譯後的表格。"
                }
            }
        },
        mediaPlaybackSpeed: {
            name: "MediaPlaybackSpeed",
            description: "允許更改媒體嵌入的（預設）播放速度",
            playbackSpeed: "播放速度",
            context: {
                label: "播放速度控制"
            },
            option: {
                defaultVoiceMessageSpeed: {
                    label: "預設語音留言速度",
                    description: "語音留言"
                },
                defaultVideoSpeed: {
                    label: "預設視訊速度",
                    description: "影片"
                },
                defaultAudioSpeed: {
                    label: "預設音訊速度",
                    description: "音訊"
                }
            }
        },
        memberCount: {
            name: "MemberCount",
            description: "在成員清單與提示中顯示伺服器的線上成員數、總成員數與語音頻道使用者數。",
            option: {
                toolTip: {
                    label: "工具提示",
                    description: "在伺服器工具提示上顯示成員計數"
                },
                memberList: {
                    label: "會員名單",
                    description: "在成員清單標題中顯示成員計數"
                },
                voiceActivity: {
                    label: "語音活動",
                    description: "顯示語音頻道的使用者數量"
                }
            },
            onlineThisChannel: "{{formattedOnlineCount}} 在此頻道線上",
            totalMembers: "{{formattedTotalCount}} 伺服器成員總數",
            totalVoice: "{{formattedVoiceCount}} 成員的聲音",
            tooltip: {
                total: "伺服器共 {{count}} 名成員"
            }
        },
        mentionAvatars: {
            name: "MentionAvatars",
            description: "在提及中顯示使用者頭像和角色圖標",
            option: {
                showAtSymbol: {
                    label: "顯示@符號",
                    description: "@符號是否應顯示在使用者提及中"
                }
            }
        },
        meow: {
            name: "Meow",
            description: "新增聊天欄按鈕以在聊天中喵喵叫",
            button: {
                meow: "喵"
            }
        },
        messageBurst: {
            name: "MessageBurst",
            description: "如果沒有其他人在您之前發送訊息，則將一段時間內發送的訊息與您先前發送的訊息合併。",
            option: {
                timePeriod: {
                    label: "時段",
                    description: "突發的持續時間（以秒為單位）。"
                },
                shouldMergeWithAttachment: {
                    label: "與附件合併",
                    description: "如果最後一則訊息有附件，是否應該合併該訊息？"
                },
                useSpace: {
                    label: "使用空間",
                    description: "合併時是否在訊息之間添加空格而不是換行。"
                }
            }
        },
        messageClickActions: {
            name: "MessageClickActions",
            description: "按住退格鍵點選刪除，雙擊編輯/回复",
            option: {
                singleClickAction: {
                    label: "點選操作",
                    description: "單擊即可執行操作（您的訊息）"
                },
                singleClickModifier: {
                    label: "點選修改器",
                    description: "按一下操作所需的修飾符（您的訊息）"
                },
                singleClickOthersAction: {
                    label: "點擊操作（其他）",
                    description: "單擊時的操作（其他人的消息）"
                },
                singleClickOthersModifier: {
                    label: "點擊修改器（其他）",
                    description: "按一下操作所需的修飾符（其他人的消息）"
                },
                doubleClickAction: {
                    label: "按兩下操作",
                    description: "雙擊操作（您的訊息）"
                },
                doubleClickOthersAction: {
                    label: "雙擊操作（其他）",
                    description: "雙擊時的操作（其他人的消息）"
                },
                doubleClickModifier: {
                    label: "雙擊修改器",
                    description: "雙擊動作需要的修飾鍵"
                },
                tripleClickAction: {
                    label: "三擊操作",
                    description: "三擊操作"
                },
                tripleClickModifier: {
                    label: "三擊修改器",
                    description: "三擊操作所需的修飾符"
                },
                reactEmoji: {
                    label: "反應表情符號",
                    description: "用於反應動作的表情符號"
                },
                addAdditionalReacts: {
                    label: "添加額外的反應",
                    description: "也加入其他配置的反應表情符號"
                },
                additionalReactEmojis: {
                    label: "額外的反應表情符號",
                    description: "使用 React 操作時要新增的其他表情符號（逗號/換行符號分隔，最大 {{count}}）"
                },
                disableInDms: {
                    label: "在 DM 中停用",
                    description: "禁用私訊中的所有點擊操作"
                },
                disableInSystemDms: {
                    label: "在系統 DM 中停用",
                    description: "停用系統 DM 中的所有點擊操作"
                },
                clickTimeout: {
                    label: "點選超時",
                    description: "區分雙擊/三次點擊的超時時間（毫秒）"
                },
                doubleClickHoldThreshold: {
                    label: "雙擊保持閾值",
                    description: "雙擊動作的最長按住時間（毫秒）。按住更久可選取文字"
                },
                deferDoubleClickForTriple: {
                    label: "延遲雙擊以偵測三擊",
                    description: "延遲雙擊以允許三次單擊操作（關閉時禁用三次單擊）"
                },
                selectionHoldTimeout: {
                    label: "選擇保持超時",
                    description: "允許文字選擇的超時（毫秒）"
                },
                quoteWithReply: {
                    label: "引用並回复",
                    description: "引用時也回覆訊息"
                },
                useSelectionForQuote: {
                    label: "使用選擇進行報價",
                    description: "引用時，使用選定的文字（如果有）"
                }
            },
            actions: {
                none: "沒有任何",
                delete: "刪除",
                copyLink: "複製連結",
                copyID: "複製身分證件",
                copyContent: "複製內容",
                copyUserID: "複製使用者 ID",
                edit: "編輯",
                reply: "回覆",
                react: "反應",
                openThread: "打開執行緒",
                openTab: "打開選項卡",
                quote: "引用",
                pin: "別針"
            },
            missingPermissions: {
                react: "無法反應：缺少權限",
                pin: "無法固定：缺少權限",
            },
            cannotQuote: "無法引用此訊息類型",
            copy: {
                messageId: "訊息 ID 已複製！",
                messageContent: "留言內容已複製！",
                userId: "用戶ID已複製！"
            },
            linkCopied: "連結已複製！",
            text: {
                shift: "Shift",
                ctrl: "Ctrl",
                alt: "Alt",
                backspace: "退格鍵",
                pickEmoji: "選擇表情符號"
            },
            emojiSetting: {
                pick: "選擇表情符號",
                selectMain: "選擇用於反應的表情符號",
                selectAdditional: "選擇額外的表情符號",
                additionalPlaceholder: "以逗號/換行分隔，最多 {{max}} 個"
            },
            toast: {
                cannotReact: "無法加入反應：缺少權限",
                linkCopied: "連結已複製！"
            }
        },
        messageColors: {
            name: "MessageColors",
            description: "在訊息內顯示顏色代碼，例如#FF0042",
            option: {
                renderType: {
                    label: "渲染類型",
                    description: "如何渲染顏色",
                    textColor: "文字顏色",
                    block: "附近街區",
                    backgroundColor: "背景顏色"
                },
                enableShortHexCodes: {
                    label: "啟用短十六進位代碼",
                    description: "啟用 3 個字元的十六進位代碼，例如 #39f"
                },
                blockView: {
                    label: "區塊視圖類型",
                    description: "如何顯示色塊",
                    right: "右側",
                    left: "左側",
                    both: "雙方"
                }
            }
        },
        messageFetchTimer: {
            name: "MessageFetchTimer",
            description: "顯示獲取目前頻道的消息所花費的時間",
            option: {
                showIcon: {
                    label: "顯示圖示",
                    description: "在訊息欄中顯示取得時間圖示"
                },
                showMs: {
                    label: "顯示毫秒",
                    description: "顯示毫秒計時"
                },
                iconColor: {
                    label: "圖示顏色",
                    description: "圖示顏色（CSS顏色值）"
                }
            },
            loaded: "訊息在 {{time}}ms ({{timeAgo}}) 內載入",
            day: "天{{s}} 前",
            hour: "小時{{s}} 前",
            minute: "分鐘{{s}} 前",
            justNow: "現在"
        },
        messageLatency: {
            name: "MessageLatency",
            description: "顯示花費 ≥n 秒發送的訊息的指示器",
            day: "天",
            days: "天",
            hour: "小時",
            hours: "小時",
            minute: "分分鐘",
            minutes: "分分鐘",
            second: "第二",
            seconds: "秒",
            millisecond: "毫秒",
            milliseconds: "毫秒",
            and: "和",
            oldKotlinDetected: "懷疑用戶使用的是舊版 Discord Android 用戶端。",
            ahead: "此用戶的時鐘提前 {{delta}}。",
            delay: "此訊息的發送延遲了 {{delta}}。",
            delayedMessage: "延遲訊息",
            oldAndroidClient: "舊版 Discord Android 用戶端",
            option: {
                latency: {
                    label: "延遲",
                    description: "延遲指示器的閾值（以秒為單位）"
                },
                detectDiscordKotlin: {
                    label: "偵測 Discord Kotlin",
                    description: "偵測舊的 Discord Android 用戶端"
                },
                showMillis: {
                    label: "顯示毫秒",
                    description: "顯示毫秒"
                },
                ignoreSelf: {
                    label: "忽略自我",
                    description: "不要在您自己的訊息中添加指示符"
                }
            }
        },
        messageLinkEmbeds: {
            name: "MessageLinkEmbeds",
            description: "為連結其他訊息的訊息新增預覽",
            option: {
                messageBackgroundColor: {
                    label: "訊息背景顏色",
                    description: "豐富嵌入中訊息的背景顏色"
                },
                automodEmbeds: {
                    label: "Automod 嵌入",
                    description: "使用 automod 嵌入而不是豐富的嵌入（較小但資訊較少）",
                    always: "始終使用 automod 嵌入",
                    prefer: "首選 automod 嵌入，但如果某些內容無法顯示，請使用豐富的嵌入",
                    never: "切勿使用 automod 嵌入"
                },
                listMode: {
                    label: "列表模式",
                    description: "是否使用ID列表作為黑名單或白名單",
                    blacklist: "黑名單",
                    whitelist: "白名單"
                },
                idList: {
                    label: "身分證號碼列表",
                    description: "加入黑名單或白名單的公會/頻道/使用者 ID（以逗號分隔）"
                },
                clearMessageCache: {
                    label: "清除訊息快取",
                    description: "清除連結訊息緩存"
                }
            },
            noContent: {
                noAttachments: "無內容 {{count}} 嵌入 {{s}}",
                noEmbeds: "無內容 {{count}} 附件 {{s}}",
                both: "無內容，{{attachments}} 附件{{attachmentsS}} 和{{embeds}} 嵌入{{embedsS}}"
            },
            dm: "私訊",
            groupDm: "小組DM",
            server: "伺服器"
        },
        messageLinkTooltip: {
            name: "MessageLinkTooltip",
            description: "當滑鼠懸停在訊息連結、回覆和轉發的訊息上時，加入帶有訊息預覽的工具提示。",
            loading: "載入中...",
            option: {
                onLink: {
                    label: "連結上",
                    description: "將滑鼠懸停在訊息連結上時顯示工具提示"
                },
                onReply: {
                    label: "回覆時",
                    description: "將滑鼠懸停在訊息回復上時顯示工具提示"
                },
                onForward: {
                    label: "前進時",
                    description: "將滑鼠懸停在轉發的訊息上時顯示工具提示"
                },
                display: {
                    label: "展示",
                    description: "展示風格",
                    auto: "與留言相同",
                    compact: "袖珍的",
                    cozy: "舒適"
                }
            }
        },
        messageLogger: {
            name: "MessageLogger",
            description: "臨時記錄已刪除和編輯的訊息。",
            removeMessage: "清除訊息歷史",
            removeMessageTemporary: "刪除訊息（暫時）",
            clearMessageLog: "清除訊息日誌",
            showDiff: "顯示差異",
            modal: {
                edit: {
                    title: "留言編輯歷史",
                    tooltip: "此編輯狀態未記錄，因此無法顯示。"
                }
            },
            option: {
                deleteStyle: {
                    label: "刪除樣式",
                    description: "已刪除訊息的樣式",
                    text: "紅色文字",
                    overlay: "紅色疊加"
                },
                logDeletes: {
                    label: "日誌刪除",
                    description: "是否記錄已刪除的訊息"
                },
                collapseDeleted: {
                    label: "折疊 已刪除",
                    description: "是否折疊已刪除的訊息，類似於封鎖的訊息"
                },
                logEdits: {
                    label: "日誌編輯",
                    description: "是否記錄編輯的訊息"
                },
                inlineEdits: {
                    label: "內嵌編輯",
                    description: "是否將編輯歷史顯示為訊息內容的一部分"
                },
                ignoreBots: {
                    label: "忽略機器人",
                    description: "是否忽略機器人發送的訊息"
                },
                ignoreSelf: {
                    label: "忽略自我",
                    description: "是否自行忽略訊息"
                },
                ignoreSelfEdits: {
                    label: "忽略自身編輯",
                    description: "是否忽略您自己的編輯"
                },
                ignoreUsers: {
                    label: "忽略用戶",
                    description: "要忽略的以逗號分隔的使用者 ID 列表"
                },
                ignoreChannels: {
                    label: "忽略頻道",
                    description: "要忽略的以逗號分隔的頻道 ID 列表"
                },
                ignoreGuilds: {
                    label: "忽略公會",
                    description: "要忽略的以逗號分隔的行會 ID 列表"
                },
                showEditDiffs: {
                    label: "顯示編輯差異",
                    description: "顯示已編輯訊息版本之間的視覺差異"
                },
                separatedDiffs: {
                    label: "分離的差異",
                    description: "差異中單獨的添加和刪除以獲得更具可讀性的差異"
                },
                logDeletedAttachments: {
                    description: "是否記錄已刪除的附件",
                    label: "記錄已刪除的附件"
                }
            },
            text: {
                clearHistory: "清除歷史記錄",
                toggleDeletedHighlight: "切換已刪除醒目提示",
                enableDiffView: "啟用差異檢視",
                disableDiffView: "停用差異檢視",
                noDeletedMessages: "沒有已刪除的訊息",
                deletedMessageSuffix: " 則已刪除的訊息",
                deletedMessagesSuffix: " 則已刪除的訊息"
            }
        },
        messageLoggerEnhanced: {
            name: "MessageLoggerEnhanced",
            description: "透過附加功能增強了 MessageLogger 插件。",
            updateImageCacheDir: "已成功更新映像快取目錄。",
            updateLogsDir: "已成功更新日誌目錄。",
            failedUpdate: "更新目錄失敗。",
            blacklist: "黑名單",
            whitelist: "白名單",
            failedToRemove: "刪除訊息失敗",
            successfullyImported: "日誌匯入成功",
            errorImportingLogs: "匯入日誌時發生錯誤。檢查控制台以獲取更多信息",
            importing: "輸入...",
            importLogs: "匯入日誌",
            exporting: "出口...",
            exportLogs: "匯出日誌",
            alert: {
                clearLogs: {
                    title: "清除日誌",
                    body: "您確定要清除所有日誌嗎？",
                    confirmText: "清除",
                    cancel: "取消"
                },
                clearVisibleLogs: {
                    title: "清晰可見的日誌",
                    body: "您確定要清除 {{messages}} 日誌嗎？",
                    confirmText: "清除",
                    cancel: "取消"
                },
                cleared: "訊息日誌資料庫和快取已清除。"
            },
            context: {
                title: "訊息記錄器",
                jumpToMessage: "跳轉至訊息",
                openUserProfile: "打開用戶資料",
                copyContent: "複製內容",
                copyUserId: "複製使用者 ID",
                copyMessageId: "複製訊息 ID",
                copyChannelId: "複製頻道 ID",
                copyServerId: "複製伺服器 ID",
                deleteLog: "刪除日誌",
                fromUsernameDm: "來自 {{username}} 的 DM",
                fromGroupDm: "來自 {{channelName}} 組 DM",
                fromServerChannel: "從 {{serverName}} 中的 {{channelName}}",
                moveTypeTo: "將 {{type}} 移到 {{destination}}",
                removeTypeFrom: "從 {{list}} 刪除 {{type}}",
                openLogsFor: "開啟 {{name}} 的日誌",
                openLogs: "打開日誌",
                removeMessage: "刪除訊息（永久）",
                removeMessageHistory: "刪除訊息歷史記錄（永久）",
                deleteMessageHide: "刪除訊息（從訊息記錄器隱藏）",
                addServerToBlacklist: "將伺服器新增至黑名單",
                addServerToWhitelist: "將伺服器新增至白名單",
                removeServerFromBlacklist: "將伺服器從黑名單中刪除",
                removeServerFromWhitelist: "從白名單中刪除伺服器",
                moveServerToBlacklist: "將伺服器移至黑名單",
                moveServerToWhitelist: "將伺服器移至白名單",
                addUserToBlacklist: "將用戶加入黑名單",
                addUserToWhitelist: "將使用者加入白名單",
                removeUserFromBlacklist: "將用戶從黑名單中刪除",
                removeUserFromWhitelist: "從白名單中刪除用戶",
                moveUserToBlacklist: "將使用者移至黑名單",
                moveUserToWhitelist: "將使用者移至白名單",
                addChannelToBlacklist: "將頻道加入黑名單",
                addChannelToWhitelist: "將頻道加入白名單",
                removeChannelFromBlacklist: "將頻道從黑名單中刪除",
                removeChannelFromWhitelist: "從白名單中刪除頻道",
                moveChannelToBlacklist: "將頻道移至黑名單",
                moveChannelToWhitelist: "將頻道移至白名單"
            },
            type: {
                server: "伺服器",
                user: "使用者",
                channel: "頻道"
            },
            button: {
                chooseFolder: "選擇資料夾",
                browse: "瀏覽",
                clearLogs: "清除所有日誌",
                clearVisibleLogs: "清晰可見的日誌",
                sortOldest: "將最舊的排在最前面",
                sortNewest: "從新排序",
                loadMore: "加載更多",
                noResults: "{{tab}} 沒有結果",
                tryOtherTabs: "也許嘗試 {{nextTab}} 或 {{lastTab}}",
                importLogs: "匯入日誌"
            },
            modal: {
                title: "過濾訊息",
                deleted: "已刪除",
                edited: "已編輯",
                ghostPing: "幽靈 ping",
                empty: "空呃",
                importLogs: "ML增強版現在將日誌儲存在indexeddb中。您需要從日誌目錄匯入舊日誌。匯入不會覆蓋現有日誌"
            },
            clear: {
                title: "清除日誌",
                description: "您確定要清除所有日誌嗎？",
                confirm: "清除",
                cancel: "取消"
            },
            option: {
                saveMessages: {
                    label: "儲存訊息",
                    description: "是否儲存已刪除和編輯的訊息。"
                },
                saveImages: {
                    label: "儲存影像",
                    description: "儲存已刪除的附件。"
                },
                sortNewest: {
                    label: "從新排序",
                    description: "依最新對日誌進行排序。"
                },
                cacheMessagesFromServers: {
                    label: "快取來自伺服器的訊息",
                    description: "通常訊息記錄器僅記錄來自白名單 ID 和 DM 的日誌，啟用此功能表示它也會記錄來自所有伺服器的訊息。請注意，這可能會導致快取超出其限制，從而導致某些訊息遺失。如果您位於許多伺服器中，這可能會顯著增加記錄訊息的機會，從而導致訊息記錄很大並包含不相關的訊息。"
                },
                ignoreBots: {
                    label: "忽略機器人",
                    description: "是否忽略機器人發送的訊息"
                },
                ignoreWebhooks: {
                    label: "忽略 Webhook",
                    description: "是否透過 webhook 忽略訊息"
                },
                ignoreSelf: {
                    label: "忽略自我",
                    description: "是否自行忽略訊息"
                },
                ignoreMutedGuilds: {
                    label: "忽略靜音公會",
                    description: "靜音公會中的消息不會被記錄。靜音公會中列入白名單的使用者/頻道仍將被記錄。"
                },
                ignoreMutedCategories: {
                    label: "忽略靜音類別",
                    description: "屬於靜音類別的頻道中的消息不會被記錄。靜音公會中列入白名單的使用者/頻道仍將被記錄。"
                },
                ignoreMutedChannels: {
                    label: "忽略靜音音訊道",
                    description: "靜音通道中的消息不會被記錄。靜音公會中列入白名單的使用者/頻道仍將被記錄。"
                },
                alwaysLogDirectMessages: {
                    label: "始終記錄直接訊息",
                    description: "始終記錄 DM"
                },
                alwaysLogCurrentChannel: {
                    label: "始終記錄當前頻道",
                    description: "始終記錄目前選擇的通道。列入黑名單的頻道/使用者仍將被忽略。"
                },
                permanentlyRemoveLogByDefault: {
                    label: "預設永久刪除日誌",
                    description: "Base MessageLogger 刪除日誌按鈕將永久刪除日誌"
                },
                hideMessageFromMessageLoggers: {
                    label: "隱藏訊息記錄器中的消息",
                    description: "啟用後，將在訊息中新增一個上下文選單按鈕，以便您可以刪除訊息，而無需其他記錄器記錄它們。可能不安全，使用風險自負。"
                },
                showLogsButton: {
                    label: "顯示日誌按鈕",
                    description: "切換到是否顯示工具箱"
                },
                showWhereMessageIsFrom: {
                    label: "顯示訊息的來源",
                    description: "顯示訊息頻道/作者姓名和伺服器名稱"
                },
                messagesToDisplayAtOnceInLogs: {
                    label: "在日誌中立即顯示的訊息",
                    description: "日誌中一次顯示的訊息數以及在日誌中載入更多訊息時要載入的訊息數。"
                },
                hideMessageFromMessageLoggersDeletedMessage: {
                    label: "隱藏訊息記錄器中的消息 已刪除的訊息",
                    description: "使用訊息記錄器隱藏訊息功能時要取代訊息的訊息內容。"
                },
                messageLimit: {
                    label: "訊息限制",
                    description: "要保存的最大訊息數。達到限制後，較舊的訊息將被刪除。 0表示沒有限制"
                },
                attachmentSizeLimitInMegabytes: {
                    label: "附件大小限制（以兆位元組為單位）",
                    description: "要保存的附件的最大大小（以兆位元組為單位）。大於此大小的附件將不會被儲存。"
                },
                attachmentFileExtensions: {
                    label: "附件檔案副檔名",
                    description: "要儲存的檔案副檔名的逗號分隔清單。檔案副檔名不在此清單中的附件將不會被儲存。留空以保存所有附件。"
                },
                cacheLimit: {
                    label: "快取限制",
                    description: "快取中保留的最大訊息數。達到限制後，較舊的訊息將被刪除。"
                },
                timeBasedCleanupMinutes: {
                    label: "基於時間的清理分鐘數",
                    description: "對早於訊息限制的訊息執行基於時間的清理的時間間隔（以分鐘為單位）。"
                },
                preserveCurrentChannel: {
                    label: "保留當前頻道",
                    description: "啟用後，目前所選頻道中的消息不受基於時間的清理的影響。"
                },
                whitelistedIds: {
                    label: "白名單 ID",
                    description: "一律在訊息紀錄中顯示的伺服器、頻道或使用者 ID。"
                },
                blacklistedIds: {
                    label: "列入黑名單的 ID",
                    description: "永不在訊息紀錄中顯示的伺服器、頻道或使用者 ID。"
                },
                imageCacheDir: {
                    label: "圖片快取目錄",
                    description: "選擇儲存影像的目錄"
                },
                logsDir: {
                    label: "日誌目錄",
                    description: "選擇日誌目錄"
                },
                importLogs: {
                    label: "匯入日誌",
                    description: "從文件匯入日誌"
                },
                exportLogs: {
                    label: "匯出日誌",
                    description: "從 IndexedDB 匯出日誌"
                },
                clearLogsOnRestart: {
                    label: "重新啟動時清除日誌",
                    description: "Discord 重新啟動時清除日誌。"
                },
                openLogs: {
                    label: "打開日誌",
                    description: "打開日誌"
                },
                openImageCacheFolder: {
                    label: "打開圖像快取資料夾",
                    description: "開啟映像快取目錄"
                },
                clearLogs: {
                    label: "清除日誌",
                    description: "清除日誌",
                    title: "清除日誌",
                    body: "您確定要清除所有日誌嗎？",
                    confirmText: "清除",
                    cancel: "取消"
                }
            },
            toast: {
                clearedLogs: "記錄已清除",
                failedToClearLogs: "清除記錄失敗",
                failedToRemoveMessage: "移除訊息失敗。詳情請查看主控台。",
                noMessagesFoundIn: "記錄檔中找不到訊息",
                successfullyImportedCountLogs: "已成功匯入 {{count}} 筆記錄",
                successfullyExportedLogs: "已成功匯出記錄",
                successfullyExportedCountLogs: "已成功匯出 {{count}} 筆記錄",
                errorExportingLogsCheck: "匯出記錄時發生錯誤。詳情請查看主控台"
            },
            text: {
                jsonFile: "JSON 檔案",
                clearLogs: "清除紀錄",
                clearingLogs: "正在清除紀錄...",
                messageLogger: "Message Logger",
                importLogs: "匯入紀錄",
                logs: "紀錄",
                loadingTabLogs: "正在載入{{tab}}紀錄..."
            }
        },
        messageNotifier: {
            name: "MessageNotifier",
            description: "當選定的用戶發送訊息時獲得祝酒詞",
            dm: "他們的私訊",
            option: {
                users: {
                    label: "使用者",
                    description: "用於取得訊息 toast 的使用者 ID 的逗號分隔列表",
                    invalidId: "{{id}} 不是有效的使用者 ID"
                }
            },
            notification: {
                title: "{{username}} 發送了一則訊息",
                body: "點擊跳轉至{{locationName}}"
            }
        },
        messageTags: {
            name: "MessageTags",
            description: "允許您保存訊息並透過簡單的命令使用它們。",
            notExist: "標籤 **{{tagname}}** 不再存在！請重新載入您的 Discord 來修復:)",
            alreadyExist: "名為 **{{tagname}}** 的標籤已存在！",
            sentTag: "標籤 **{{tagname}}** 已發送！",
            successCreate: "標籤 **{{tagname}}** 已建立！",
            allTags: "你所有的標籤：",
            noTags: "糟糕！還沒有標籤，請使用 /tag create 建立一個！",
            noDeleteTag: "標籤 **{{tagname}}** 不存在，因此無法刪除！",
            successDelete: "成功刪除標籤**{{name}}**！",
            tagPreview: "名為 **{{name}}** 的標籤不存在！",
            option: {
                clyde: {
                    label: "發送克萊德訊息",
                    description: "如果啟用，當使用標籤時，Clyde 會向您發送短暫訊息。"
                },
                tagsList: {
                    label: "標籤列表",
                    description: ""
                }
            },
            command: {
                tags: {
                    description: "自己管理所有標籤",
                    option: {
                        create: {
                            description: "建立一個新標籤",
                            name: "The name of the tag to trigger the response",
                            message: "使用此標籤時您將發送的訊息"
                        },
                        list: {
                            description: "列出您自己的所有標籤"
                        },
                        delete: {
                            description: "刪除自己的標籤",
                            name: "The name of the tag to remove"
                        },
                        preview: {
                            description: "預覽標籤而不公開發送",
                            name: "The name of the tag to preview"
                        }
                    }
                }
            }
        },
        micLoopbackTester: {
            name: "MicLoopbackTester",
            description: "將麥克風環回測試圖示新增至使用者面板",
            button: "麥克風測試環回"
        },
        middleClickTweaks: {
            name: "MiddleClickTweaks",
            description: "各種中鍵按一下調整，例如貼上和連結開啟。",
            option: {
                openScope: {
                    label: "開放範圍",
                    description: "防止透過中鍵點擊這些內容類型來開啟它們。",
                    links: "連結",
                    media: "媒體",
                    linksAndMedia: "連結和媒體",
                    none: "沒有任何"
                },
                pasteScope: {
                    label: "貼上範圍",
                    description: "在這些情況下防止中鍵單擊貼上。",
                    always: "始終防止中鍵單擊貼上",
                    focus: "僅在文字區域未聚焦時阻止",
                },
                pasteThreshold: {
                    label: "貼上閾值",
                    description: "單擊中鍵後再次啟用貼上所需的毫秒數。"
                }
            }
        },
        moreCommands: {
            name: "MoreCommands",
            description: "Echo、Lenny、Mock 等",
            command: {
                echo: {
                    description: "以 Clyde（本地）身分傳送訊息"
                },
                lenny: {
                    description: "發個萊尼臉"
                },
                mock: {
                    description: "類比人"
                },
                wordcount: {
                    description: "計算訊息中的字數",
                    response: "該訊息包含 {{count}} 個字。"
                },
                flipcoin: {
                    description: "拋硬幣，結果是正面還是反面",
                    heads: "頭",
                    tails: "尾巴",
                    response: "硬幣落在 {{result}} 上。"
                },
                ask: {
                    description: "提出是/否問題並得到答案",
                    yes: "是的",
                    no: "不",
                    maybe: "或許",
                    askAgain: "稍後再詢問",
                    definitelyNot: "絕對不是",
                    itIsCertain: "可以肯定的是"
                },
                randomanimal: {
                    description: "取得隨機的動物圖片",
                    animal: "選擇你的動物",
                    cat: "貓",
                    dog: "狗",
                    response: "抱歉，目前無法取得動物圖片"
                },
                randomnumber: {
                    description: "產生兩個值之間的隨機數",
                    min: "最小值",
                    max: "最大值",
                    response: "{{min}} 與 {{max}} 之間的隨機數：{{number}}"
                },
                choose: {
                    description: "從提供的選項中隨機選擇",
                    option: "以逗號分隔的選項列表",
                    response: "我選擇：{{choice}}"
                },
                systeminfo: {
                    description: "顯示系統訊息",
                    platform: "平台",
                    deviceType: "設備類型",
                    mobile: "移動的",
                    desktop: "桌面",
                    browser: "瀏覽器",
                    cpuCores: "CPU核心",
                    memory: "記憶",
                    screen: "螢幕",
                    languages: "語言",
                    network: "網路",
                    online: "在線的",
                    offline: "離線",
                    failedToFetch: "取得系統資訊失敗",
                    unknown: "未知"
                },
                getuptime: {
                    description: "取得客戶端的正常運作時間",
                    response: "**客戶端正常運作時間**：{{uptime}} 分鐘"
                },
                gettime: {
                    description: "取得當前時間",
                    response: "當前時間是 {{time}}"
                },
                transform: {
                    description: "使用指定選項轉換文本",
                    transformation: {
                        description: "應用於您的文字的轉換",
                        lowercase: "將文字轉換為小寫",
                        uppercase: "將文字轉換為大寫",
                        localeLowercase: "將文字轉換為區域設定小寫",
                        localeUppercase: "將文字轉換為區域設定大寫",
                        same: "保持不變"
                    },
                    repeat: "重複次數",
                    reverse: "是否反轉文本",
                    normalize: {
                        description: "文本規範化形式",
                        nfc: "標準化形式 C (NFC)",
                        nfd: "標準化表格 D (NFD)",
                        nfkc: "標準化表格 KC (NFKC)",
                        nfkd: "標準化形式 KD (NFKD)"
                    },
                    text: "轉換此文本"
                }
            }
        },
        moreKaomoji: {
            name: "MoreKaomoji",
            description: "向 Discord 添加更多 Kaomoji。 ヽ(´▽`)/"
        },
        moreQuickReactions: {
            name: "MoreQuickReactions",
            description: "改進了訊息上下文選單中的快速反應按鈕。",
            option: {
                reactionCount: {
                    label: "反應計數",
                    description: "反應次數（0-42）"
                },
                frequentEmojis: {
                    label: "常用表情符號",
                    description: "使用常用的表情符號代替最喜歡的表情符號"
                },
                rows: {
                    label: "行數",
                    description: "要顯示的快速反應行"
                },
                columns: {
                    label: "專欄",
                    description: "顯示快速反應列"
                },
                compactMode: {
                    label: "緊湊模式",
                    description: "將按鈕縮放至原始比例的 75%，同時將內部表情符號放大至 125%。表情符號將是原始大小的 93.75%。建議至少有 5 列"
                },
                scroll: {
                    label: "捲動",
                    description: "啟用滾動表情符號列表"
                }
            }
        },
        moreUserTags: {
            name: "MoreUserTags",
            description: "新增 webhook 和審核角色（擁有者、管理員等）的標籤",
            tag: {
                webhook: {
                    name: "Webhook",
                    description: "該用戶是網路鉤子"
                },
                owner: {
                    name: "Owner",
                    description: "擁有伺服器"
                },
                admin: {
                    name: "Admin",
                    description: "擁有管理員權限"
                },
                staff: {
                    name: "Staff",
                    description: "可以管理伺服器、通道或角色"
                },
                mod: {
                    name: "Mod",
                    description: "可以管理訊息或踢/禁止人員"
                },
                vcmod: {
                    name: "VC Mod",
                    description: "可以管理語音聊天"
                },
                chatmod: {
                    name: "Chat Mod",
                    description: "可以管理訊息"
                }
            },
            modal: {
                example: "例子",
                tag: "標籤",
                customTextPlaceholder: "標籤上的文字（預設：{{displayName}}）",
                messages: "在訊息中顯示",
                memberList: "顯示在會員清單和個人資料中"
            },
            option: {
                dontShowForBots: {
                    label: "不向機器人顯示",
                    description: "不顯示機器人的額外標籤（不包括 webhooks）"
                },
                dontShowBotTag: {
                    label: "不顯示機器人標籤",
                    description: "只顯示機器人的額外標籤/隱藏 [APP] 文字"
                },
                showWebhookTagFully: {
                    label: "完整顯示 webhook 標籤",
                    description: "在追蹤的頻道（例如公告）中顯示 Webhook 標籤"
                },
                tagSettings: {
                    label: "標籤設定",
                    description: "充滿我"
                }
            }
        },
        morse: {
            name: "Morse",
            description: "用於轉換為摩斯電碼或從摩斯電碼轉換為斜線的命令。",
            command: {
                morse: {
                    description: "翻譯到摩斯電碼或從摩斯電碼翻譯",
                    message: "要轉換的文本"
                }
            }
        },
        moyai: {
            name: "Moyai",
            description: "🗿🗿🗿🗿🗿🗿🗿🗿",
            option: {
                volume: {
                    label: "體積",
                    description: "🗿🗿🗿的音量"
                },
                quality: {
                    label: "品質",
                    description: "🗿🗿🗿的品質",
                    normal: "普通的",
                    hd: "高畫質"
                },
                triggerWhenUnfocused: {
                    label: "失焦時觸發",
                    description: "即使視窗未對焦也觸發 🗿"
                },
                ignoreBots: {
                    label: "忽略機器人",
                    description: "忽略來自機器人的訊息"
                },
                ignoreBlocked: {
                    label: "忽略被封鎖的用戶",
                    description: "忽略來自被封鎖用戶的消息"
                }
            }
        },
        musicControls: {
            name: "MusicControls",
            description: "多種服務的音樂控制和歌詞",
            option: {
                spotifySectionTitle: {
                    label: "Spotify"
                },
                showSpotifyControls: {
                    label: "顯示 Spotify 控件",
                    description: "顯示 Spotify 的音樂控制項"
                },
                showSpotifyLyrics: {
                    label: "顯示 Spotify 歌詞",
                    description: "顯示 Spotify 的歌詞"
                },
                useSpotifyUris: {
                    label: "使用 Spotify URI",
                    description: "開啟 Spotify URI 而不是 Spotify URL。僅當您安裝了 Spotify 時才有效，並且可能不適用於所有平台"
                },
                previousButtonRestartsTrack: {
                    label: "上一個按鈕重新啟動曲目",
                    description: "如果播放時間 >3 秒，則按下上一個按鈕重新啟動目前播放的曲目"
                },
                tidalSectionTitle: {
                    label: "潮汐"
                },
                showTidalControls: {
                    label: "顯示潮汐控制",
                    description: "顯示 Tidal 的音樂控件"
                },
                showTidalLyrics: {
                    label: "顯示潮汐歌詞",
                    description: "顯示潮汐的歌詞"
                },
                websocketURL: {
                    label: "Websocket 網址",
                    description: "預設值為 ws://localhost:24123"
                },
                YtmSectionTitle: {
                    label: "YouTube 音樂",
                    description: "這些設定需要 {{app}}"
                },
                showYoutubeMusicControls: {
                    label: "顯示 YouTube 音樂控件",
                    description: "顯示 YouTube Music 的音樂控件"
                },
                YoutubeMusicApiUrl: {
                    label: "YouTube 音樂 API 網址",
                    description: "您正在使用的 YouTube Music API 伺服器的網址"
                },
                hoverControls: {
                    label: "懸停控件",
                    description: "懸停時顯示控件"
                },
                showMusicNoteOnNoLyrics: {
                    label: "在沒有歌詞的情況下顯示音符",
                    description: "未找到歌詞時顯示音符圖標"
                },
                lyricsPosition: {
                    label: "歌詞位置",
                    description: "歌詞面板的位置",
                    above: "以上玩家",
                    below: "以下玩家"
                },
                lyricsProvider: {
                    label: "歌詞提供者",
                    description: "歌詞從哪裡獲取",
                    spotify: "Spotify (Musixmatch)",
                    LRCLIB: "LRCLIB"
                },
                spotifyLyricsApiUrl: {
                    label: "Spotify 歌詞 API 基礎 URL",
                    description: "自訂執行個體的基礎 URL（例如：http://localhost:8080）。"
                },
                translateTo: {
                    label: "翻譯為",
                    description: "將歌詞翻譯為 - 更改此項目將清除現有翻譯",
                    cleared: "已清除翻譯"
                },
                lyricsConversion: {
                    label: "歌詞轉換",
                    description: "自動翻譯或羅馬化歌詞",
                    none: "沒有任何",
                    translate: "翻譯",
                    romanize: "羅馬化"
                },
                fallbackProvider: {
                    label: "後備提供者",
                    description: "當歌詞提供者失敗時，嘗試其他提供程序"
                },
                showFailedToasts: {
                    label: "顯示失敗的 Toast",
                    description: "歌詞載入失敗時顯示祝酒詞"
                },
                purgeLyricsCache: {
                    label: "清除歌詞快取",
                    description: "清除所有快取的歌詞和翻譯",
                    button: "清除快取",
                    cacheLyricsPurged: "歌詞快取已清除"
                },
                lyricDelay: {
                    label: "歌詞延遲"
                }
            },
            context: {
                spotify: {
                    label: "Spotify 歌詞選單",
                    type: "Spotify {{type}} 選單",
                    copy: "複製 {{type}} 姓名",
                    link: "複製 {{type}} 連結",
                    open: "在 Spotify 中開啟 {{type}}",
                    album: "Spotify 專輯選單"
                },
                tidal: {
                    label: "潮汐歌詞選單",
                    lyrics: "潮汐",
                    type: "潮汐 {{name}} 菜單",
                    copy: "複製 {{name}} 姓名",
                    open: "在潮汐中打開 {{name}}",
                    album: "潮汐專輯菜單"
                },
                ytm: {
                    type: "YouTube 音樂 {{name}} 選單",
                    copy: "複製 {{name}} 姓名",
                    open: "在 YouTube Music 中開啟 {{name}}",
                    album: "YouTube 音樂專輯選單",
                    muted: "靜音"
                },
                lyrics: {
                    provider: "歌詞提供者",
                    saved: "已儲存",
                    notFound: "找不到同步歌詞"
                },
                copy: {
                    currentLyrics: "複製當前歌詞"
                }
            },
            alert: {
                lyricCopied: "歌詞已複製到剪貼簿！",
                noLyrics: "沒有歌詞",
                noLyricsTo: "{{translated}} 沒有歌詞",
                translate: "翻譯",
                romanize: "羅馬化",
                lyricsFetchFailed: "歌詞獲取失敗",
                failedToFetchLyrics: "無法取得 {{translated}}",
                translation: "翻譯",
                romanization: "羅馬化",
                failedToFetchTranslation: "無法取得 {{translated}} 歌詞"
            },
            modal: {
                install: {
                    title: "如何安裝",
                    install: "從這裡安裝 {{link}}，然後進入 TidalLuna 設定 → 外掛程式商店 → 安裝 @vmohammad/api",
                    tidaluna: "潮汐月神"
                },
                player: {
                    noPlaying: "沒有曲目播放",
                    artist: "藝術家：",
                    album: "專輯：",
                    noLyrics: "沒有可用的歌詞:(",
                    progress: "進步",
                    totalDuration: "總持續時間"
                },
                type: {
                    song: "歌曲",
                    artist: "藝術家",
                    album: "專輯"
                },
                album: {
                    open: "打開相簿",
                    viewCover: "看專輯封面",
                    volume: "體積",
                    image: "專輯圖片"
                }
            },
            provider: {
                lrclib: "LRCLIB",
                spotify: "Spotify",
                translated: "已翻譯",
                romanized: "羅馬化",
                none: "沒有任何"
            },
            error: {
                failed: "無法渲染模態:(",
                checkConsole: "檢查控制台是否有錯誤",
                invalidUrlCustomApi: "自訂 API 伺服器 URL 的 URL 格式無效"
            },
            text: {
                unknownArtist: "未知演出者",
                unknownTitle: "未知標題"
            }
        },
        mutualGroupDMs: {
            name: "MutualGroupDMs",
            description: "在個人資料中顯示相互的群組 DM",
            no: "無相互群組",
            mutualGroup: "{{count}} 互助組{{s}}",
            members: "會員",
            noGroup: "沒有共同的群組 DM",
            header: "相互團體"
        },
        neverPausePreviews: {
            name: "NeverPausePreviews",
            description: "即使客戶端失去焦點，也可以防止通話/畫中畫預覽（螢幕分享、串流等）暫停",
            about: "該外掛會導致 Discord 使用比平常更多的資源"
        },
        newGuildSettings: {
            name: "NewGuildSettings",
            description: "加入後自動靜音新伺服器並更改各種其他設置",
            context: {
                apply: "將 NewGuildSettings 套用至資料夾"
            },
            option: {
                guild: {
                    label: "靜音公會",
                    description: "自動靜音公會"
                },
                messages: {
                    label: "伺服器通知設定",
                    description: "伺服器通知設定",
                    all: "所有訊息",
                    mentions: "僅@提及",
                    nothing: "沒有什麼",
                    default: "伺服器預設"
                },
                everyone: {
                    label: "禁止@everyone 和@here",
                    description: "禁止@everyone 和@here"
                },
                role: {
                    label: "禁止所有角色@提及",
                    description: "禁止所有角色@提及"
                },
                highlights: {
                    label: "抑制高光",
                    description: "自動抑制高光"
                },
                events: {
                    label: "靜音新事件",
                    description: "自動靜音新事件"
                },
                showAllChannels: {
                    label: "顯示所有頻道",
                    description: "自動顯示所有頻道"
                },
                mobilePush: {
                    label: "靜音移動推播通知",
                    description: "自動靜音移動推播通知"
                },
                voiceChannels: {
                    label: "語音頻道",
                    description: "自動隱藏語音頻道中的姓名"
                }
            }
        },
        newPluginsManager: {
            name: "NewPluginsManager",
            description: "當新插件新增至 Plexcord 時通知您的實用程式",
            modal: {
                title: "新插件和設置",
                description: "自您上次訪問以來已添加新的插件和設定。請查看下面的新增內容。",
                tooltip: "取消本次會議",
                dontShowAgain: "不要再顯示這個",
                restartRequired: "需要重新啟動才能應用更改",
                restart: "重新啟動",
                continue: "繼續",
                supportUs: "Plexcord 是開源軟體。如果你喜歡使用它，請考慮支持我們：",
                supportUsLink: "點此"
            }
        },
        noAppsAllowed: {
            name: "NoAppsAllowed",
            description: "將機器人的標籤恢復為其原始形式"
        },
        noBlockedMessages: {
            name: "NoBlockedMessages",
            description: "完全隱藏聊天中所有被封鎖/忽略的訊息",
            option: {
                alsoHideIgnoredUsers: {
                    label: "也隱藏被忽略的用戶",
                    description: "還可以隱藏被忽略的用戶的訊息。"
                },
                disableNotifications: {
                    label: "禁用通知",
                    description: "隱藏被封鎖用戶的新訊息通知。如果下方啟用了「預設隱藏使用者」且觸發通知的使用者未在「覆蓋使用者」中排除，則始終為 true。"
                },
                allowAutoModMessages: {
                    label: "允許 AutoMod 訊息",
                    description: "允許 AutoMod 發送的訊息繞過過濾。"
                },
                hideBlockedUserReplies: {
                    label: "隱藏被封鎖的用戶回复",
                    description: "如果您參與了線程，則隱藏來自線程中被封鎖使用者的消息。"
                },
                defaultHideUsers: {
                    label: "預設隱藏用戶",
                    description: "如果啟用，來自封鎖使用者的訊息將被完全隱藏，並且來自覆蓋清單中使用者 ID 的任何訊息將被折疊（預設 Discord 行為）。如果停用，來自封鎖使用者的訊息將被折疊，並且來自覆蓋清單中使用者 ID 的任何訊息將完全隱藏。"
                },
                overrideUsers: {
                    label: "覆蓋用戶",
                    description: "將隱藏或折疊的以逗號分隔的用戶 ID 列表，而不是上面選擇的預設行為。"
                }
            }
        },
        noBulletPoints: {
            name: "NoBulletPoints",
            description: "阻止你輸入 Markdown 要點（臭）"
        },
        noDeepLinks: {
            name: "DisableDeepLinks",
            description: "停用 Discord 的冗餘深度連結功能，該功能試圖強制您使用其桌面應用程式"
        },
        noDeleteSafety: {
            name: "NoDeleteSafety",
            description: "刪除刪除伺服器時刪除「輸入伺服器名稱」要求",
            option: {
                confirmModal: {
                    label: "確認模態",
                    description: "是否應該顯示“您確定要刪除”模式嗎？"
                }
            },
            modal: {
                title: "刪除伺服器？",
                body: "如果這不是很明顯的話，它是永久性的。",
                confirm: "刪除",
                cancel: "取消"
            }
        },
        noDevtoolsWarning: {
            name: "NoDevtoolsWarning",
            description: "禁用控制台中的“HOLD UP”橫幅。作為副作用，還可以防止 Discord 隱藏您的令牌，從而防止隨機註銷。"
        },
        noF1: {
            name: "NoF1",
            description: "禁用 F1 幫助綁定。"
        },
        noMaskedUrlPaste: {
            name: "NoMaskedUrlPaste",
            description: "在選擇文字時貼上連結不會貼上為屏蔽 URL"
        },
        noMirroredCamera: {
            name: "NoMirroredCamera",
            description: "防止相機鏡像到螢幕上"
        },
        noModalAnimation: {
            name: "NoModalAnimation",
            description: "刪除開啟或關閉模態時 300 毫秒長的動畫"
        },
        noMosaic: {
            name: "NoMosaic",
            description: "刪除不和諧影像馬賽克",
            option: {
                inlineVideo: {
                    label: "內嵌視頻",
                    description: "不使用輪播模式播放視頻"
                }
            }
        },
        noNitroUpsell: {
            name: "NoNitroUpsell",
            description: "透過欺騙客戶認為您擁有 Nitro，消除 Discord 的所有 Nitro 追加銷售。"
        },
        noOnboarding: {
            name: "NoOnboarding",
            description: "繞過 Discord 的加入流程，以更快進入伺服器。"
        },
        noOnboardingDelay: {
            name: "NoOnboardingDelay",
            description: "跳過緩慢而煩人的入職延遲"
        },
        noPendingCount: {
            name: "NoPendingCount",
            description: "刪除傳入好友請求、訊息請求和 Nitro 優惠的 ping 計數。",
            option: {
                hideFriendRequestsCount: {
                    label: "隱藏好友請求計數",
                    description: "隱藏收到的好友請求計數"
                },
                hideMessageRequestsCount: {
                    label: "隱藏訊息請求計數",
                    description: "隱藏訊息請求計數"
                },
                hidePremiumOffersCount: {
                    label: "隱藏高級優惠數",
                    description: "隱藏 Nitro 優惠數"
                }
            }
        },
        noProfileThemes: {
            name: "NoProfileThemes",
            description: "完全刪除除了您自己以外的所有人的 Nitro 個人資料主題。"
        },
        noPushToTalk: {
            name: "NoPushToTalk",
            description: "繞過強制執行頻道中語音活動的一鍵通要求。"
        },
        noReplyMention: {
            name: "NoReplyMention",
            description: "預設情況下禁用回复 ping",
            option: {
                userList: {
                    label: "使用者列表",
                    description: "允許或免除 ping 的使用者清單（以逗號或空格分隔）"
                },
                roleList: {
                    label: "角色列表",
                    description: "允許或免除 ping 的角色清單（以逗號或空格分隔）"
                },
                shouldPingListed: {
                    label: "應 Ping 列出",
                    description: "行為",
                    dontPing: "不要 ping 列出的使用者/角色",
                    onlyPing: "僅 ping 列出的使用者/角色"
                },
                inverseShiftReply: {
                    label: "反移回復",
                    description: "反轉 Discord 的輪班回覆行為（允許輪班回覆提及用戶）"
                }
            }
        },
        normalizeMessageLinks: {
            name: "NormalizeMessageLinks",
            description: "從訊息連結中刪除 canary/ptb"
        },
        noRoleHeaders: {
            name: "NoRoleHeaders",
            description: "我們都是平等的！ ！刪除成員清單中的角色標題。"
        },
        noRPC: {
            name: "NoRPC",
            description: "禁用 Discord 豐富的存在"
        },
        noServerEmojis: {
            name: "NoServerEmojis",
            description: "不要在自動完成選單中顯示伺服器表情符號。",
            option: {
                shownEmojis: {
                    label: "顯示的表情符號",
                    description: "選擇要在自動完成選單中顯示的表情符號",
                    onlyUnicode: "僅限 unicode 表情符號",
                    currentServer: "目前伺服器中的 Unicode 表情符號和伺服器表情符號",
                    all: "Unicode 表情符號和所有伺服器表情符號（Discord 預設）"
                }
            }
        },
        noSystemBadge: {
            name: "NoSystemBadge",
            description: "停用工作列和系統托盤未讀計數標誌。"
        },
        notificationTitle: {
            name: "NotificationTitle",
            description: "讓桌面通知資訊更豐富",
            text: {
                threadInParent: "{{parent}} 中的 {{thread}}"
            }
        },
        notificationVolume: {
            name: "NotificationVolume",
            description: "設定 Discord 通知的自訂音量",
            option: {
                notificationVolume: {
                    label: "通知音量",
                    description: "通知音量"
                }
            }
        },
        noTypingAnimation: {
            name: "NoTypingAnimation",
            description: "停用聊天中的打字動畫"
        },
        noUnblockToJump: {
            name: "NoUnblockToJump",
            description: "允許您跳到被封鎖或被忽略的使用者以及可能的垃圾郵件發送者的訊息，而無需取消封鎖。"
        },
        onePingPerDM: {
            name: "OnePingPerDM",
            description: "如果使用者在 DM 中多次發送未讀訊息，您將只會收到一個音訊 ping。",
            option: {
                channelToAffect: {
                    label: "影響管道",
                    description: "選擇插件影響的 DM 類型",
                    both: "兩個都",
                    user: "使用者私訊",
                    group: "群組私訊"
                },
                allowMentions: {
                    label: "允許提及",
                    description: "接收@提及的音訊 ping"
                },
                allowEveryone: {
                    label: "允許所有人",
                    description: "在群組 DM 中接收 @everyone 和 @here 的音訊 ping"
                },
                ignoreUsers: {
                    label: "忽略用戶",
                    description: "其 ping 不應受到限制的使用者 ID（逗號 + 空格）"
                },
                alwaysPlaySound: {
                    label: "始終播放聲音",
                    description: "即使禁用也播放訊息通知聲音"
                }
            }
        },
        openInApp: {
            name: "OpenInApp",
            description: "在各自的應用程式中打開鏈接，而不是在瀏覽器中打開",
            option: {
                spotify: {
                    label: "Spotify",
                    description: "在 Spotify 應用程式中開啟 Spotify 鏈接"
                },
                steam: {
                    label: "蒸氣",
                    description: "在 Steam 應用程式中開啟 Steam 鏈接"
                },
                epic: {
                    label: "史詩遊戲",
                    description: "在 Epic Games 啟動器中開啟 Epic Games 鏈接"
                },
                tidal: {
                    label: "潮汐",
                    description: "在 Tidal 應用程式中開啟 Tidal 鏈接"
                },
                itunes: {
                    label: "iTunes",
                    description: "在 iTunes 應用程式中開啟 Apple Music 鏈接"
                },
                vrcx: {
                    label: "虛擬實境聊天室",
                    description: "在 VRCX 應用程式中開啟 VRChat 鏈接"
                },
                telegram: {
                    label: "Telegram",
                    description: "在 Telegram 應用程式中開啟 Telegram 連結"
                }
            },
            notification: {
                open: "在本機應用程式中開啟鏈接"
            }
        },
        overrideForumDefaults: {
            name: "OverrideForumDefaults",
            description: "允許您覆蓋預設的論壇佈局/排序順序。您仍然可以針對每個頻道進行更改",
            option: {
                defaultLayout: {
                    label: "預設標籤",
                    description: "使用哪種佈局作為預設佈局",
                    list: "清單",
                    gallery: "畫廊"
                },
                defaultSortOrder: {
                    label: "預設排序順序",
                    description: "使用哪種排序順序作為預設值",
                    recentlyActive: "最近活躍",
                    datePosted: "發布日期"
                }
            }
        },
        partyMode: {
            name: "PartyMode",
            description: "允許您使用派對模式，因為派對永遠不會結束✨",
            option: {
                superIntensePartyMode: {
                    label: "超激烈的派對模式",
                    description: "聚會強度",
                    normal: "普通的",
                    better: "更好的",
                    projectX: "X專案"
                }
            }
        },
        pauseInvitesForever: {
            name: "PauseInvitesForever",
            description: "恢復了無限期暫停邀請的選項，該選項被 Discord 多餘地刪除了。",
            pauseIndefinitely: "無限期暫停"
        },
        permissionFreeWill: {
            name: "PermissionFreeWill",
            description: "停用頻道權限管理的客戶端限制。",
            option: {
                lockout: {
                    label: "閉鎖",
                    description: "繞過權限鎖定預防（「很確定你不想這樣做」）"
                },
                onboarding: {
                    label: "入職",
                    description: "繞過入職要求（“進行此更改將使您的伺服器不相容[...]”）"
                }
            }
        },
        permissionsViewer: {
            name: "PermissionsViewer",
            description: "查看使用者或頻道擁有的權限以及伺服器的角色",
            view: "查看權限",
            option: {
                permissionsSortOrder: {
                    label: "權限排序",
                    description: "用於定義哪個角色授予使用者某種權限的排序方法",
                    highest: "最高角色",
                    lowest: "最低的角色"
                }
            },
            icon: {
                denied: "被拒絕",
                allowed: "允許",
                notOverwritten: "不被覆蓋"
            },
            context: {
                permissions: "權限"
            },
            modal: {
                title: "權限",
                noPermissions: "無權限顯示！",
                owner: "擁有者",
                grantedBy: "授予人",
                serverOwner: "伺服器擁有者",
                ownerRole: "擁有者",
                sortingBy: "按 {{method}} 排序",
                highest: "最高角色",
                lowest: "最低的角色",
                details: "角色詳情"
            },
            text: {
                roleOptions: "身分組選項",
                userOptions: "使用者選項",
                unknownRole: "未知身分組",
                unknownUser: "未知使用者"
            }
        },
        petpet: {
            name: "PetPet",
            description: "新增 /petpet 斜線命令以從任何圖像建立頭戴式 GIF",
            command: {
                petpet: {
                    description: "創建寵物 GIF。您只能指定圖像選項之一",
                    delay: "每幀之間的延遲。預設為 20。",
                    resolution: "GIF 的解析度。預設為 120。如果您輸入一個瘋狂的數字並且它凍結了 Discord，那是您的錯。",
                    image: "使用的圖像附件",
                    url: "從中取得圖像的 URL",
                    user: "將其頭像用作圖像的用戶",
                    noServerPfp: "使用“用戶”選項時，使用普通頭像而不是特定於伺服器的頭像",
                    error: {
                        noImage: "沒有指定圖片！",
                        delayTooLow: "延遲必須至少為 20。",
                    }
                }
            },
            error: {
                uploadNotImage: "上傳的不是圖片",
                fetchUserFailed: "取得用戶失敗。檢查控制台以取得更多資訊。",
                fetchImageFailed: "載入 {{url}} 時發生錯誤。檢查控制台以取得更多資訊。"
            }
        },
        pictureInPicture: {
            name: "PictureInPicture",
            description: "向影片新增畫中畫（在「下載」按鈕旁）",
            tooltip: "切換畫中畫",
            option: {
                loop: {
                    label: "環形",
                    description: "是否循環畫中畫視頻"
                }
            }
        },
        pinDMs: {
            name: "PinDMs",
            description: "允許您將私人頻道固定在 DM 清單的頂部。若要固定/取消固定或重新排序引腳，請右鍵點選 DM",
            context: {
                category: {
                    label: "固定 DM 類別選單",
                    edit: "編輯類別",
                    up: "向上移動",
                    down: "下移",
                    delete: "刪除類別",
                    unnamed: "呃哦"
                },
                pin: {
                    label: "釘選私訊",
                    addCategory: "新增類別"
                },
                unPin: {
                    label: "取消固定式 DM",
                    move: "移至類別"
                }
            },
            option: {
                pinOrder: {
                    label: "引腳順序",
                    description: "固定的私訊應以何種順序顯示？",
                    lastMessage: "最近的消息",
                    custom: "自訂（右鍵單擊頻道重新排序）"
                },
                canCollapseDmSection: {
                    label: "可折疊固定部分",
                    description: "允許未分類的 DM 部分可折疊"
                },
                dmSectionCollapsed: {
                    label: "DM 部分摺疊",
                    description: "折疊 DM 部分"
                },
                userBasedCategoryList: {
                    label: "基於使用者的類別列表",
                    description: ""
                }
            },
            modal: {
                category: {
                    pin: "引腳類別",
                    edit: "編輯類別",
                    new: "新類別",
                    name: "Name",
                    color: "顏色",
                    save: "節省",
                    create: "創造"
                },
                defaultCategoryName: "釘選分類 {{number}}"
            }
        },
        pingNotifications: {
            name: "PingNotifications",
            description: "可自訂的通知，並改進了提及格式",
            option: {
                friends: {
                    label: "朋友們",
                    description: "當好友在伺服器中發送訊息時通知"
                },
                mentions: {
                    label: "提及",
                    description: "當有人直接 @提及您時通知"
                },
                dms: {
                    label: "DM",
                    description: "通知直接訊息 (DM)"
                },
                showInActive: {
                    label: "顯示活動狀態",
                    description: "即使目前活動的頻道也顯示通知"
                },
                ignoreMuted: {
                    label: "忽略靜音",
                    description: "跳過來自靜音伺服器、頻道或使用者的通知"
                }
            },
            unknown: "未知",
            dm: "DM",
            groupDM: "小組DM",
            title: "{{username}} 在 {{channelName}} 中"
        },
        pinIcon: {
            name: "PinIcon",
            description: "為固定訊息新增固定圖標"
        },
        plainFolderIcon: {
            name: "PlainFolderIcon",
            description: "不顯示資料夾中的小公會圖標"
        },
        platformIndicators: {
            name: "PlatformIndicators",
            description: "為使用者新增平台指示器（桌面、行動裝置、網頁……）",
            embeddedTooltip: "嵌入式（主機或遊戲）",
            vrTooltip: "虛擬實境",
            option: {
                list: {
                    label: "清單",
                    description: "在使用者個人檔案中顯示指示器"
                },
                badges: {
                    label: "徽章",
                    description: "將使用者個人資料中的指標顯示為徽章"
                },
                messages: {
                    label: "留言",
                    description: "顯示訊息內的指示器"
                },
                colorMobileIndicator: {
                    label: "彩色移動指示器",
                    description: "是否使移動指示燈的顏色與使用者狀態的顏色相符。"
                },
                showBots: {
                    label: "顯示機器人",
                    description: "是否在機器人上顯示平台指示器"
                }
            }
        },
        platformSpoofer: {
            name: "PlatformSpoofer",
            description: "欺騙您所在的平台或設備",
            about: "我們無法保證此外掛不會讓你被警告或封鎖。選擇 Xbox/Playstation/VR 可能會使你的用戶端變成過時版本。",
            platform: {
                desktop: "不和諧客戶端",
                web: "不和諧網",
                ios: "不和諧 iOS",
                android: "不和諧安卓",
                xbox: "不和諧嵌入",
                playstation: "不和諧嵌入",
                vr: "虛擬實境"
            },
            option: {
                platform: {
                    label: "平台",
                    description: "要偽裝成正在使用的平台。",
                    desktop: "桌面",
                    web: "網路",
                    android: "安卓",
                    ios: "iOS系統",
                    xbox: "Xbox",
                    playstation: "遊戲機",
                    vr: "虛擬實境"
                }
            }
        },
        plexcordToolbox: {
            name: "PlexcordToolbox",
            description: "在 AppBar 新增一個按鈕，用於容納 Plexcord 快速操作",
            tooltip: "Plexcord 工具箱",
            context: {
                openLog: "開啟通知日誌",
                enableQuickCSS: "啟用 QuickCSS",
                openQuickCSS: "編輯 QuickCSS",
                openSettings: "開啟設定",
                manageThemes: "管理主題"
            },
            option: {
                showPluginMenu: {
                    label: "顯示插件選單",
                    description: "在 Plexcord 工具箱中顯示插件選單"
                }
            }
        },
        polishWording: {
            name: "PolishWording",
            description: "調整您的訊息，使它們看起來更漂亮並且語法更好。查看設定",
            option: {
                quickDisable: {
                    label: "快速停用",
                    description: "快速禁用。關閉訊息修改而不需要客戶端重新載入。"
                },
                blockedWords: {
                    label: "被阻止的單字",
                    description: "不大寫的單字（逗號分隔）。"
                },
                fixApostrophes: {
                    label: "修復撇號",
                    description: "確保縮寫包含撇號。"
                },
                expandContractions: {
                    label: "展開收縮",
                    description: "展開收縮"
                },
                fixCapitalization: {
                    label: "固定資本化",
                    description: "句子大寫。"
                },
                fixPunctuation: {
                    label: "修復標點符號",
                    description: "修復標點符號周圍的間距。"
                },
                fixPunctuationFrequency: {
                    label: "修復標點符號頻率",
                    description: "百分比週期頻率（這主要惹惱了一些人）。",
                }
            }
        },
        previewMessage: {
            name: "PreviewMessage",
            description: "讓您在發送訊息之前預覽訊息。",
            tooltip: "預覽訊息"
        },
        profileSets: {
            name: "ProfileSets",
            description: "允許儲存與載入不同的個人檔案預設。",
            toast: {
                importFailed: "匯入預設失敗。檔案可能無效。",
            },
            option: {
                avatarSize: {
                    label: "頭像尺寸",
                    description: "預設清單中的頭像尺寸"
                }
            },
            modal: {
                override: "覆蓋",
                merge: "合併",
                cancel: "取消",
                timestamp: "{{formattedDate}} 在 {{formattedTime}}",
                rename: "重新命名",
                update: "更新",
                moveUp: "向上移動",
                moveDown: "下移",
                moveTo: "移至第 1 頁",
                delete: "刪除",
                importProfiles: "導入設定檔",
                importText: "您在此部分中已有 {{existingCount}} 個個人資料。您想覆蓋它們還是與匯入的設定檔合併？",
                heading: "儲存的設定檔",
                searchProfiles: "搜尋個人資料...",
                profileName: "個人資料名稱",
                saving: "儲存...",
                save: "儲存個人資料",
                cancelSearch: "取消搜尋",
                search: "搜尋",
                random: "隨機的",
                import: "進口",
                exportAll: "全部導出"
            },
            text: {
                selectAServer: "選擇伺服器",
                profileSets: "個人檔案集",
                youAreNotIn: "你還沒有加入任何伺服器。",
                mainProfile: "主要個人檔案",
                serverProfiles: "伺服器個人檔案",
                openProfileSets: "開啟個人檔案組"
            }
        },
        questify: {
            name: "Questify",
            description: "強化特定 Quest 功能、關閉惱人的元素，或徹底移除 Quest。",
            quests: "Quest",
            context: {
                quest: {
                    label: "Quest 按鈕選單",
                    ignore: "全部標記為已忽略",
                    reset: "重設忽略清單",
                    fetch: "取得 Quest",
                    markAsIgnored: "標記為已忽略",
                    unmarkAsIgnored: "取消忽略",
                    stopAuto: "停止自動完成",
                    startAuto: "開始自動完成",
                    copyQuestID: "複製 Quest ID"
                }
            },
            button: {
                completing: "正在完成...",
                completingWithTime: "正在完成（{{time}}）",
                completingIn: "{{time}} 後完成",
                queued: "排隊中（{{position}}）",
                resuming: "正在恢復...",
                completeNow: "立即完成",
                complete: "完成（{{time}}）",
                resume: "繼續（{{time}}）",
                completed: "已完成"
            },
            reward: {
                orbs: "{{status}}：{{orbQuantity}} Orbs。",
                article: "{{status}}：{{itemName}}。",
                unrecognized: "{{status}}：未知獎勵。"
            },
            toast: {
                autoCompleteBroken: "自動完成已失效，修正即將推出。",
                enrollmentFailed: "加入 {{questName}} Quest 失敗。",
                enrollmentInNormalizequestnameQuest: "報名任務 {{normalizeQuestName_quest}} 失敗{{rateLimitSuffix}}。"
            },
            notification: {
                completed: {
                    title: "Quest 已完成！",
                    body: "{{questName}} Quest 已完成。"
                },
                newQuest: {
                    title: "偵測到新 Quest！",
                    body: "{{questName}} Quest 現已推出。"
                },
                newQuests: {
                    title: "偵測到新 Quest！",
                    body: "{{count}} 個新 Quest 現已推出。"
                },
                newExcludedQuest: {
                    title: "偵測到新的排除 Quest！",
                    body: "偵測到被排除的 {{questName}} Quest。ID：{{questId}}"
                },
                newExcludedQuests: {
                    title: "偵測到新的排除 Quest！",
                    body: "偵測到 {{count}} 個新的排除 Quest。請在主控台查看其 Quest ID。"
                }
            },
            alert: {
                restart: {
                    title: "需要重新啟動",
                    body: "你對 Questify 設定所做的變更需要重新啟動才會生效。",
                    confirm: "重新啟動",
                    cancel: "稍後"
                },
                dangerous: {
                    title: "你確定嗎？",
                    confirm: "繼續",
                    cancel: "取消",
                    disableEverything: "這將完全停用 Quest 功能。",
                    allowDangerous: "這將允許變更危險設定。"
                }
            },
            status: {
                unclaimed: "未領取",
                claimed: "已領取",
                ignored: "已忽略",
                expired: "已過期"
            },
            questTypes: {
                watchVideo: "觀看影片",
                watchVideoOnMobile: "在手機上觀看影片",
                achievementInActivity: "活動內成就",
                achievementInGame: "遊戲內成就",
                playActivity: "玩活動",
                playOnDesktop: "在桌面版遊玩",
                playOnDesktopV2: "在桌面版遊玩 V2",
                streamOnDesktop: "在桌面版直播",
                playOnPlayStation: "在 PlayStation 上遊玩",
                playOnXbox: "在 Xbox 上遊玩"
            },
            settings: {
                questButton: {
                    title: "Quest 按鈕",
                    description: "在伺服器清單中顯示 Quest 按鈕，並可選擇為未領取且未忽略的 Quest 顯示指示器。",
                    behavior: "按鈕行為",
                    leftClick: "左鍵點擊動作：",
                    middleClick: "中鍵點擊動作：",
                    rightClick: "右鍵點擊動作：",
                    visibility: "按鈕可見度：",
                    visibilityTooltip: "一律：只要啟用此功能，就會顯示 Quest 按鈕。\n\n未領取：僅在你有相關的未領取 Quest 獎勵時顯示。\n\n永不：隱藏 Quest 按鈕。",
                    unclaimedIndicator: "未領取指示器：",
                    unclaimedIndicatorTooltip: "膠囊：在 Quest 按鈕旁顯示 Discord 的未讀標記。\n\n徽章：顯示相關未領取 Quest 獎勵的數量。\n\n兩者：同時顯示膠囊與徽章。\n\n無：隱藏指示器。",
                    badgeColor: "徽章顏色：",
                    relevancy: "Quest 相關性",
                    includedRewardTypes: "包含的獎勵類型：",
                    includedRewardTypesTooltip: "在判斷按鈕可見度、徽章數量與提醒行為時，僅將具有這些獎勵類型的 Quest 計為未領取。",
                    includedQuestTypes: "包含的 Quest 類型：",
                    includedQuestTypesTooltip: "在判斷按鈕可見度、徽章數量與提醒行為時，僅將具有這些任務類型的 Quest 計為未領取。",
                    display: {
                        always: "一律",
                        unclaimed: "未領取",
                        never: "永不"
                    },
                    indicator: {
                        pill: "膠囊",
                        badge: "徽章",
                        both: "兩者",
                        none: "無"
                    },
                    action: {
                        openQuests: "開啟 Quest",
                        contextMenu: "右鍵選單",
                        pluginSettings: "外掛設定",
                        nothing: "無動作"
                    },
                    rewardTypes: {
                        orbs: "Orbs",
                        nitroCodes: "Nitro 兌換碼",
                        rewardCodes: "獎勵兌換碼",
                        inGameItems: "遊戲內物品",
                        profileCollectibles: "個人檔案收藏品"
                    }
                },
                questFeatures: {
                    title: "Quest 功能",
                    description: "修改 Quest 的行為以強化或移除功能。",
                    disableFeatures: "停用功能",
                    disableEverything: "完全停用 Quest 功能：",
                    disableEverythingTooltip: "這將停用所有外掛強化功能，隱藏 Quest 頁面與 Discord 各處的 Quest 元素，並阻止 Discord 取得 Quest 資料。由於 Orbs 作為次要貨幣與商店緊密相連，商店不會受到影響。",
                    disableSpecific: "停用特定功能：",
                    disableSpecificTooltip: "贊助橫幅是 Quest 頁面頂端的付費 Quest 橫幅。\n\n搬遷提示是指如探索頁面中提示 Quest 已移至私訊的標示。\n\n好友清單推廣是當與你共用伺服器的使用者正在玩有進行中 Quest 的遊戲時，顯示在好友清單「現正活躍」區塊的卡片。\n\n成員清單推廣是當成員正在玩有進行中 Quest 的遊戲時，在伺服器成員清單中顯示的圖示。\n\n帳號面板推廣是顯示在你的帳號面板上方的付費 Quest 推廣。\n\n帳號面板進度是顯示在你的帳號面板上方的進行中或已完成 Quest 進度。\n\nQuest 與 Orbs 徽章是分別表示某人至少完成過一個 Quest 或購買了 Orbs 徽章的個人檔案徽章。",
                    disableOptions: {
                        sponsoredBanner: "贊助橫幅",
                        relocationNotices: "搬遷提示",
                        friendsListPromo: "好友清單推廣",
                        membersListPromo: "成員清單推廣",
                        accountPanelPromo: "帳號面板推廣",
                        accountPanelProgress: "帳號面板進度",
                        orbsAndQuestsBadges: "Quest 與 Orbs 徽章"
                    },
                    modifyFeatures: "修改功能",
                    warningTos: "Discord 已開始向使用修改 Quest 完成方式之腳本或外掛的使用者發出警告，這違反了其{{tos}}。",
                    tos: "服務條款",
                    warningEscalate: "這些警告目前似乎僅限於威脅取消 Quest 或其獎勵的存取權，但 Discord 隨時可能升級處分。",
                    warningDetection: "由於 Discord 使用多種方式追蹤使用者，實際上無法規避偵測。如果你繼續，請明白 Discord 很可能在某個時間點偵測到。",
                    warningRisk: "使用下方切換開關存取潛在危險的設定，風險自負。",
                    allowDangerous: "允許變更危險設定...",
                    disallowDangerous: "重設並禁止變更危險設定...",
                    completeVideoQuicker: "加速影片 Quest 自動完成：",
                    completeVideoQuickerTooltip: "Discord 允許在加入 Quest 後經過影片長度減去 24 秒的時間後完成影片 Quest。\n\n這表示長度 24 秒或更短的影片 Quest，或你加入後稍後再回來完成的 Quest，可以立即完成。\n\n此設定僅適用於影片 Quest 的自動完成，並取決於下方的自動完成設定。手動完成影片 Quest 仍需等待完整長度，且與加入時間無關。",
                    mobileDesktop: "讓部分僅限手機的影片 Quest 可在桌面版完成：",
                    mobileDesktopTooltip: "部分僅限手機的影片 Quest 可在桌面版加入，但仍需在手機上完成。此設定可讓你在桌面版完成它們。\n\n部分僅限手機的影片 Quest 只能在手機上加入。若要讓此設定對其生效，你必須先在手機上加入這些 Quest，再回到桌面版重新整理 Quest。\n\n單獨啟用時，此設定僅適用於手動完成影片 Quest。從桌面版自動完成手機影片 Quest 取決於下方的自動完成設定，並會隱含啟用此設定。",
                    simultaneous: "同時而非依序自動完成 Quest：",
                    simultaneousTooltip: "預設情況下，嘗試自動完成多個 Quest 時會將它們排隊並依序完成。\n\n此設定可讓所有自動完成的 Quest 同時執行。\n\n此設定僅適用於 Quest 的自動完成，並取決於下方的自動完成設定。",
                    resumeInterrupted: "在重新載入或重新啟動後恢復被中斷的自動完成：",
                    resumeInterruptedTooltip: "此設定會自動恢復因重新載入或重新啟動而中斷的自動完成，包括重新排入那些已排隊但尚未開始的 Quest。",
                    autoCompleteTypes: "自動完成特定 Quest 類型：",
                    autoCompleteTypesTooltip: "「在手機上觀看影片」Quest 僅適用於可在桌面版加入的手機 Quest。如果某個 Quest 只能在手機上加入，你必須先在手機上加入，再回到桌面版重新整理 Quest。\n\n所有影片相關 Quest 通常會隨進度回報傳送呼叫堆疊。這表示 Discord 能確切知道呼叫了哪些函式，進而驗證進度是否由其自身函式發起。Questify 會清除此呼叫堆疊，但其缺少與存在一樣容易露出破綻。\n\n由於 Discord 的限制，「在桌面版遊玩」、「在 PlayStation 上遊玩」、「在 Xbox 上遊玩」與「玩活動」Quest 僅在官方桌面用戶端中可用。瀏覽器擴充功能、Plextron 等第三方用戶端不支援自動完成這些類型。\n\n所有遊戲相關 Quest 通常會隨心跳回報傳送遊戲指紋。這表示 Discord 能利用數萬名使用者的資料判斷其他使用者是在執行真實遊戲還是在模擬執行檔。沒有合理的方法偽造此值，因此 Questify 將其留空，但其缺少與拙劣的偽造一樣容易露出破綻。\n\n「活動內成就」Quest 只能透過立即完成來自動完成。此方法隨時可能被修補。\n\n自動完成 Quest 需點擊 Quest 頁面上相應的按鈕。除非上方啟用了同時完成，Quest 將依排隊順序自動完成。\n\n自動完成 Quest 是風險最高的危險設定。啟用風險自負。"
                },
                questNotifications: {
                    title: "Quest 通知",
                    description: "設定 Quest 完成與偵測到新 Quest 時的通知和提醒。",
                    questCompleted: "Quest 完成",
                    notifyOnComplete: "Quest 完成時顯示通知：",
                    soundOnComplete: "Quest 完成時播放音效：",
                    volume: "音量：",
                    newQuests: "偵測到新 Quest",
                    notifyOnNew: "偵測到新 Quest 時顯示通知：",
                    soundOnNew: "偵測到新 Quest 時播放音效：",
                    notifyOnNewExcluded: "偵測到新的排除 Quest 時顯示通知：",
                    notifyOnNewExcludedTooltip: "部分 Quest 因地區或平台限制被排除在你的可用 Quest 清單之外。\n\n啟用後，Questify 會取得它們的 Quest 設定，套用你設定的 Quest 與獎勵類型篩選，將解析後的排除 Quest 資料輸出到主控台，並為符合的排除 Quest 另外顯示通知。",
                    soundOnNewExcluded: "偵測到新的排除 Quest 時播放音效：",
                    soundOnNewExcludedTooltip: "部分 Quest 因地區或平台限制被排除在你的可用 Quest 清單之外。\n\n選擇音效後，Questify 會取得它們的 Quest 設定，套用你設定的 Quest 與獎勵類型篩選，將解析後的排除 Quest 資料輸出到主控台，並為符合的排除 Quest 播放此音效。",
                    fetchInterval: "Quest 取得間隔：",
                    fetchIntervalTooltip: "Discord 僅在啟動時和你造訪 Quest 頁面時取得 Quest。\n\n此間隔會在用戶端保持開啟時定期為你取得 Quest，讓 Quest 按鈕指示器與新 Quest 提醒全天保持最新。\n\n僅在啟用且 Quest 按鈕或 Quest 通知設定使定期取得有意義時才會執行。",
                    disabled: "已停用",
                    preview: "試聽 {{sound}}",
                    intervals: {
                        thirtyMinutes: "30 分鐘",
                        fortyFiveMinutes: "45 分鐘",
                        oneHour: "1 小時",
                        threeHours: "3 小時",
                        sixHours: "6 小時",
                        twelveHours: "12 小時"
                    }
                },
                questTiles: {
                    title: "Quest 卡片",
                    description: "使用可選的主題顏色突顯 Quest，使其更醒目。",
                    behavior: "卡片行為",
                    gradientStyle: "漸層樣式：",
                    gradientStyleTooltip: "強烈和預設會在圖片漸層中使用所選的卡片顏色。\n\n柔和黑色保留較暗的中性漸層以增強對比。\n\n無漸層會移除圖片漸層，可能使部分 Quest 圖片較難辨識。",
                    assetPreload: "資源預先載入：",
                    assetPreloadTooltip: "在開啟 Quest 頁面時載入所有資源可減少捲動時的版面位移。\n\n在捲動時載入較接近 Discord 的預設行為，初始負擔可能較小。",
                    colors: "卡片顏色",
                    enable: "啟用",
                    disable: "停用",
                    gradient: {
                        intense: "強烈重繪漸層",
                        default: "預設重繪漸層",
                        black: "柔和黑色漸層",
                        hide: "無漸層"
                    },
                    preload: {
                        onLoad: "頁面載入時載入所有 Quest 資源",
                        onScroll: "頁面捲動時載入 Quest 資源"
                    }
                },
                reorderQuests: {
                    title: "重新排序 Quest",
                    description: "在任務頁面選擇 Questify 排序時，依狀態排序任務。任何排序方式都會過濾掉隱藏的狀態。",
                    statusOrder: "狀態順序",
                    statusOrderTooltip: "每種狀態只能出現一次。選擇已在其他位置使用的狀態會交換這兩個位置。",
                    positions: {
                        first: "第一：",
                        second: "第二：",
                        third: "第三：",
                        fourth: "第四："
                    },
                    subsorts: "子排序",
                    unclaimedSubsort: "未領取子排序：",
                    unclaimedSubsortTooltip: "已完成但未領取的 Quest 排在未完成的未領取 Quest 之後，接著在這些群組內套用此子排序。",
                    claimedSubsort: "已領取子排序：",
                    claimedSubsortTooltip: "已領取的 Quest 可依領取時間或 Quest 新增時間排序。",
                    ignoredSubsort: "已忽略子排序：",
                    ignoredSubsortTooltip: "已忽略的 Quest 仍保持其群組位置，此子排序控制它們在群組內的順序。",
                    expiredSubsort: "已過期子排序：",
                    expiredSubsortTooltip: "已過期的 Quest 可依過期時間或 Quest 新增時間排序。",
                    subsort: {
                        addedNewest: "新增時間（最新）",
                        addedOldest: "新增時間（最早）",
                        expiringSoonest: "即將過期（最早）",
                        expiringLatest: "即將過期（最晚）",
                        expiredMostRecent: "已過期（最近）",
                        expiredLeastRecent: "已過期（最久）",
                        claimedMostRecent: "已領取（最近）",
                        claimedLeastRecent: "已領取（最久）"
                    },
                    memory: "Quest 頁面記憶",
                    rememberSort: "記住所選的 Quest 頁面排序：",
                    rememberSortTooltip: "停用後，Quest 頁面每次開啟時都使用 Questify 排序選項。",
                    rememberFilters: "記住所選的 Quest 頁面篩選：",
                    rememberFiltersTooltip: "停用後，Quest 頁面每次開啟時都不帶任務或獎勵篩選。"
                }
            },
            option: {
                migrationVersion: {
                    label: "遷移版本",
                    description: "設定的目前遷移版本。"
                },
                questFeatures: {
                    label: "Quest 功能",
                    description: "選擇要停用的 Quest 功能。"
                },
                disableQuestsEverything: {
                    label: "全部停用",
                    description: "停用所有 Quest 功能。"
                },
                disableRelocationNotices: {
                    label: "停用搬遷提示",
                    description: "停用探索頁面中的 Quest 搬遷提示。"
                },
                disableSponsoredBanner: {
                    label: "停用贊助橫幅",
                    description: "停用 Quest 頁面上的贊助橫幅。"
                },
                disableAccountPanelPromo: {
                    label: "停用帳號面板推廣",
                    description: "停用帳號面板上方的推廣 Quest 彈出視窗。"
                },
                disableAccountPanelQuestProgress: {
                    label: "停用帳號面板進度",
                    description: "停用帳號面板上方進行中與已完成 Quest 的進度。"
                },
                disableOrbsAndQuestsBadges: {
                    label: "停用 Quest 與 Orbs 徽章",
                    description: "停用使用者個人檔案上的 Quest 徽章。"
                },
                disableFriendsListPromo: {
                    label: "停用好友清單推廣",
                    description: "停用好友正在玩的遊戲之 Quest 推廣。"
                },
                disableMembersListPromo: {
                    label: "停用成員清單推廣",
                    description: "停用成員清單中的正在遊玩圖示。"
                },
                allowChangingDangerousSettings: {
                    label: "允許危險設定",
                    description: "允許變更危險設定。"
                },
                resumeInterruptedQuests: {
                    label: "恢復中斷的 Quest",
                    description: "在重新載入或重新啟動後恢復 Quest 的自動完成。"
                },
                makeMobileVideoQuestsDesktopCompatible: {
                    label: "手機影片 Quest 相容桌面版",
                    description: "讓僅限手機的影片 Quest 與桌面版相容。"
                },
                autoCompleteQuestsSimultaneously: {
                    label: "同時自動完成",
                    description: "同時而非依序完成 Quest。"
                },
                completeVideoQuestsQuicker: {
                    label: "更快完成影片 Quest",
                    description: "自動完成影片 Quest 時使用 Discord 的進度容許值與加入後經過的時間。"
                },
                autoCompleteQuestTypes: {
                    label: "自動完成的 Quest 類型",
                    description: "在背景自動完成的 Quest 類型。"
                },
                questButton: {
                    label: "Quest 按鈕",
                    description: "自訂伺服器清單中的 Quest 按鈕。"
                },
                questButtonDisplay: {
                    label: "Quest 按鈕顯示",
                    description: "伺服器清單中 Quest 按鈕使用的顯示類型。"
                },
                questButtonIncludedTypes: {
                    label: "Quest 按鈕包含類型",
                    description: "在 Quest 按鈕上顯示 Quest 數量時包含的獎勵類型與 Quest 類型。"
                },
                questButtonIndicator: {
                    label: "Quest 按鈕指示器",
                    description: "Quest 按鈕上未領取指示器使用的顯示類型。"
                },
                questButtonBadgeCount: {
                    label: "徽章數量",
                    description: "目前相關未領取 Quest 的數量。"
                },
                questButtonBadgeColor: {
                    label: "徽章顏色",
                    description: "伺服器清單中 Quest 按鈕徽章的顏色。"
                },
                questButtonLeftClickAction: {
                    label: "左鍵點擊動作",
                    description: "左鍵點擊 Quest 按鈕時執行的動作。"
                },
                questButtonMiddleClickAction: {
                    label: "中鍵點擊動作",
                    description: "中鍵點擊 Quest 按鈕時執行的動作。"
                },
                questButtonRightClickAction: {
                    label: "右鍵點擊動作",
                    description: "右鍵點擊 Quest 按鈕時執行的動作。"
                },
                questNotifications: {
                    label: "Quest 通知",
                    description: "設定 Quest 完成與偵測到新 Quest 時的通知。"
                },
                notifyOnQuestComplete: {
                    label: "完成時通知",
                    description: "Quest 完成時顯示通知。"
                },
                notifyOnNewQuests: {
                    label: "新 Quest 通知",
                    description: "偵測到新 Quest 時顯示通知。"
                },
                notifyOnNewExcludedQuests: {
                    label: "新排除 Quest 通知",
                    description: "偵測到新的排除 Quest 時顯示通知。"
                },
                questCompletedAlertSound: {
                    label: "Quest 完成提示音",
                    description: "Quest 完成時播放的音效。"
                },
                questCompletedAlertVolume: {
                    label: "Quest 完成提示音音量",
                    description: "Quest 完成提示音的音量。"
                },
                questFetchInterval: {
                    label: "取得間隔",
                    description: "從 Discord 取得 Quest 的間隔（秒）。"
                },
                newQuestAlertSound: {
                    label: "新 Quest 提示音",
                    description: "偵測到新 Quest 時播放的音效。"
                },
                newQuestAlertVolume: {
                    label: "新 Quest 提示音音量",
                    description: "新 Quest 提示音的音量。"
                },
                newExcludedQuestAlertSound: {
                    label: "新排除 Quest 提示音",
                    description: "偵測到新的排除 Quest 時播放的音效。"
                },
                newExcludedQuestAlertVolume: {
                    label: "新排除 Quest 提示音音量",
                    description: "新排除 Quest 提示音的音量。"
                },
                questTiles: {
                    label: "Quest 卡片",
                    description: "自訂 Quest 頁面中 Quest 卡片的外觀。"
                },
                questTileUnclaimedColor: {
                    label: "未領取卡片顏色",
                    description: "未領取 Quest 卡片的顏色。"
                },
                questTileClaimedColor: {
                    label: "已領取卡片顏色",
                    description: "已領取 Quest 卡片的顏色。"
                },
                questTileIgnoredColor: {
                    label: "已忽略卡片顏色",
                    description: "已忽略 Quest 卡片的顏色。"
                },
                questTileExpiredColor: {
                    label: "已過期卡片顏色",
                    description: "已過期 Quest 卡片的顏色。"
                },
                questTileGradient: {
                    label: "卡片漸層",
                    description: "Quest 卡片中使用的漸層樣式。"
                },
                questTilePreload: {
                    label: "卡片預先載入",
                    description: "嘗試預先載入 Quest 卡片的資源。"
                },
                reorderQuests: {
                    label: "重新排序 Quest",
                    description: "依狀態排序 Quest。"
                },
                questOrder: {
                    label: "Quest 順序",
                    description: "Quest 狀態群組的排序順序。"
                },
                unclaimedSubsort: {
                    label: "未領取子排序",
                    description: "未領取 Quest 的子排序方式。"
                },
                claimedSubsort: {
                    label: "已領取子排序",
                    description: "已領取 Quest 的子排序方式。"
                },
                ignoredSubsort: {
                    label: "已忽略子排序",
                    description: "已忽略 Quest 的子排序方式。"
                },
                expiredSubsort: {
                    label: "已過期子排序",
                    description: "已過期 Quest 的子排序方式。"
                },
                isOnQuestsPage: {
                    label: "位於 Quest 頁面",
                    description: "使用者目前是否位於 Quest 頁面。"
                },
                rememberQuestPageSort: {
                    label: "記住排序",
                    description: "記住 Quest 頁面上次使用的排序。"
                },
                rememberQuestPageFilters: {
                    label: "記住篩選",
                    description: "記住 Quest 頁面上次使用的篩選。"
                },
                lastQuestPageSort: {
                    label: "上次排序",
                    description: "Quest 頁面上次使用的排序。"
                },
                lastQuestPageFilters: {
                    label: "上次篩選",
                    description: "Quest 頁面上次使用的篩選。"
                },
                ignoredQuestIDs: {
                    label: "已忽略的 Quest ID",
                    description: "已忽略的 Quest ID 清單。"
                },
                resumeQuestIDs: {
                    label: "待恢復的 Quest ID",
                    description: "正在背景自動完成或排隊等候的 Quest ID 清單。"
                },
                acknowledgedNotices: {
                    description: "使用者已確認的一次性通知。",
                    label: "已確認的通知"
                },
                settingsSearch: {
                    description: "搜尋 Questify 設定。",
                    label: "設定搜尋"
                },
                hideNonAutoCompletableQuests: {
                    description: "隱藏沒有受支援且已啟用的自動完成任務的未完成任務。",
                    label: "隱藏無法自動完成的任務"
                },
                preventVideoQuestsPausing: {
                    description: "防止任務視窗失去焦點時暫停影片。",
                    label: "防止影片任務暫停"
                },
                hiddenQuestStatuses: {
                    description: "要隱藏的任務狀態群組。",
                    label: "隱藏的任務狀態"
                }
            },
            text: {
                clearQuestQueue: "清空任務佇列",
                hideIncompleteQuestsWith: "當此平台不支援且任務類型下拉選單中未啟用任何自動完成任務時，隱藏狀態為未領取或已忽略的未完成任務。已領取、已過期與已完成的任務除外。如需隱藏它們，請使用「狀態順序隱藏」選項。",
                discordForcesYouTo: "Discord 要求用戶端處於前景，影片任務才能播放影片。",
                hideNonAutoCompletable: "隱藏無法自動完成的任務：",
                preventVideoQuestsFrom: "防止影片任務在失去焦點時暫停：",
                thePunishmentAlsoConsists: "處罰還包括帳號狀態違規記錄，每次違規持續 2 年。",
                dueToTheVarious: "由於 Discord 使用多種方式追蹤使用者，實際上無法規避偵測。如果繼續，請明白 Discord 很可能會在某個時候偵測到你的使用。",
                enrollInQuest: "報名任務",
                hidden: "隱藏",
                selectingAnOccupiedPosition: "選擇已占用的位置會交換兩個狀態。隱藏的狀態會從任務清單中移除。",
                searchQuestifySettings: "搜尋 Questify 設定",
                searchQuestifySettings2: "搜尋 Questify 設定...",
                noMatchingSettings: "沒有符合的設定。",
                questifyNoticeAugust7th: "Questify 通知 - 2026 年 8 月 7 日",
                keepUsingDangerousQuestify: "繼續使用危險的 Questify 設定",
                disableDangerousQuestifySettings: "停用危險的 Questify 設定",
                questifyNoticeAugust26th: "Questify 通知 - 2026 年 8 月 26 日",
                areYouSure: "你確定嗎？",
                thePunishmentAppearsLimited: "處罰目前似乎僅限於失去任務及其獎勵的存取權，但 Discord 隨時可能加重。",
                queueAllQuests: "將所有任務加入佇列",
                inProgress: "進行中",
                rateLimited: "已限速",
                preventsVideoPausing: "此設定可防止影片暫停，讓完成進度正常推進。",
                appliesOnlyToVideoQuests: "此設定僅適用於手動完成影片任務。",
                knownToPunish: "眾所周知，Discord 會懲罰使用腳本或外掛修改任務完成狀態的使用者。修改任務完成狀態違反了 Discord 的",
                punishmentConsists: "懲罰包括暫時或永久失去任務及其獎勵的存取權。",
                questBanSystem: "Discord 已推出任務封鎖系統，如果發現你透過非官方方式完成任務，將暫時或永久限制你完成任務和領取獎勵。修改任務完成狀態違反了其",
                begunPunishing: "Discord 已開始懲罰使用腳本和外掛修改任務完成狀態的使用者。修改任務完成狀態違反了其",
                dueToRateLimits: "（受速率限制）"
            }
        },
        questionMarkReplacement: {
            name: "QuestionMarkReplacement",
            description: "如果訊息僅包含問號，則用所選字串取代所有問號。",
            option: {
                replace: {
                    label: "代替",
                    description: "替換為"
                }
            }
        },
        quickMention: {
            name: "QuickMention",
            description: "在訊息操作列中新增快速提及按鈕",
            tooltip: "快速提及"
        },
        quickReply: {
            name: "QuickReply",
            description: "透過按鍵綁定回應（Ctrl+向上/向下）和編輯（Ctrl+Shift+向上/向下）訊息",
            option: {
                shouldMention: {
                    label: "應該提到",
                    description: "預設 Ping 回复",
                    noReplyMentionPlugin: "關注 NoReplyMention 插件（如果啟用）",
                    enabled: "啟用",
                    disabled: "殘障人士"
                },
                ignoreBlockedAndIgnored: {
                    label: "忽略阻止和忽略",
                    description: "導航時忽略被封鎖/忽略的用戶的消息"
                }
            }
        },
        quickThemeSwitcher: {
            name: "QuickThemeSwitcher",
            description: "使用鍵盤快速鍵在主題之間快速切換。",
            about: {
                title: "綁定",
                description: "使用 Ctrl/Cmd+Shift+箭頭進行導航（左/右：循環主題，向上：啟用，向下：停用）。",
                reload: "按 Ctrl/Cmd+Shift+Alt 重新載入主題清單。"
            },
            modal: {
                added: "新增了{{count}}主題{{s}}",
                removed: "刪除了 {{count}} 主題 {{s}}",
                reloaded: "重新載入 {{themeCount}} 主題",
                addedLocal: "新增了{{count}}本地主題{{s}}",
                removedLocal: "刪除了 {{count}} 本地主題 {{s}}",
            },
            option: {
                includeLocal: {
                    label: "包括本地",
                    description: "包括本地主題"
                },
                includeOnline: {
                    label: "包括線上",
                    description: "包括線上主題"
                },
                sortOrder: {
                    label: "排序順序",
                    description: "排序方式",
                    asc: "A-Z",
                    desc: "Z-A",
                    recent: "最近的"
                },
                autoRefresh: {
                    label: "自動重新整理",
                    description: "偵測到變更時自動刷新主題列表"
                },
                showNotifications: {
                    label: "顯示通知",
                    description: "新增/刪除主題時顯示通知"
                }
            }
        },
        quoter: {
            name: "Quoter",
            description: "增加了從訊息中創建鼓舞人心的引言圖像的功能",
            context: {
                quote: "引用"
            },
            modal: {
                title: "用 4k 捕捉他們",
                grayscale: "灰階",
                export: "出口",
                send: "傳送",
                saveAsGIF: "另存為 GIF",
                saveDescription: "將圖像儲存/發送為 GIF 而不是 PNG",
                showWatermark: "顯示浮水印",
                watermarkText: "水印文字（最多 32 個字元）"
            },
            option: {
                quoteFont: {
                    label: "報價字體",
                    description: "引用文字的字體（作者/使用者名稱始終使用 M PLUS Rounded 1c）",
                    mPlusRounded: "M PLUS 圓形 1c",
                    openSans: "打開無字體",
                    momoSignature: "莫莫簽名",
                    lora: "勞拉",
                    merriWeather: "梅里韋瑟"
                },
                watermark: {
                    label: "水印",
                    description: "自訂浮水印文字（最多 32 個字元）"
                },
                grayscale: {
                    label: "灰階",
                    description: "預設啟用灰階"
                },
                showWatermark: {
                    label: "顯示浮水印",
                    description: "預設顯示浮水印"
                },
                saveAsGif: {
                    label: "另存為 GIF",
                    description: "預設另存為 GIF"
                }
            },
            text: {
                quotePreview: "引用預覽"
            }
        },
        randomVoice: {
            name: "RandomVoice",
            description: "在靜音按鈕附近新增一個按鈕以加入隨機語音通話。",
            tooltip: "隨機語音",
            context: {
                label: "語音狀態修改器",
                amountLabel: "使用者數量",
                spacesLabel: "剩餘空間",
                voiceLabel: "語音限制",
                selfLabel: "自我設定",
                select: {
                    servers: "選擇伺服器",
                    list: "選擇清單",
                    filters: "選擇過濾器",
                    amount: "使用者數量",
                    userAmount: "{{amount}} 使用者{{s}}",
                    parameters: "參數",
                    selectAll: "全選",
                    reset: "重置",
                    stateFilters: "狀態過濾器",
                    moreThan: "多於",
                    lessThan: "少於",
                    equalTo: "等於",
                    spaces: "剩餘空間",
                    voice: "語音限制"
                },
                filter: {
                    muted: "靜音",
                    deafened: "聾了",
                    camera: "相機",
                    stream: "溪流",
                    includeFilters: "包括過濾器",
                    avoidFilters: "避免過濾器"
                },
                reset: {
                    list: "重置清單"
                },
                voice: {
                    label: "語音選項",
                    joinSettings: "加入設定",
                    auto: {
                        mute: "自動靜音",
                        deafen: "自動隔音",
                        camera: "自動相機",
                        stream: "自動串流",
                        leaveWhenEmpty: "空時離開",
                        navigate: "自動導航",
                        stage: "迴避階段",
                        afk: "避免AFK"
                    }
                },
                invalid: {
                    server: "伺服器無效"
                }
            },
            keybind: {
                label: "快速鍵",
                recording: "錄製中...",
                reset: "重設"
            },
            option: {
                keybindEnabled: {
                    label: "啟用快速鍵",
                    description: "顯示隨機語音快速鍵設定"
                },
                userAmountOperation: {
                    label: "使用者數量操作",
                    description: "根據使用者數量選擇操作"
                },
                userAmount: {
                    label: "使用者數量",
                    description: "選擇使用者數量"
                },
                spacesLeftOperation: {
                    label: "剩餘空間操作",
                    description: "選擇最大用戶數的操作"
                },
                spacesLeft: {
                    label: "剩餘空間",
                    description: "選擇最大用戶數"
                },
                vcLimitOperation: {
                    label: "語音頻道限制操作",
                    description: "選擇語音頻道的操作。"
                },
                vcLimit: {
                    label: "語音頻道限制",
                    description: "選擇語音頻道限制"
                },
                servers: {
                    label: "伺服器",
                    description: "包含的伺服器"
                },
                autoNavigate: {
                    label: "自動導航",
                    description: "自動導航至語音頻道。"
                },
                autoCamera: {
                    label: "自動相機",
                    description: "自動開啟相機"
                },
                autoStream: {
                    label: "自動串流",
                    description: "自動開啟串流"
                },
                selfMute: {
                    label: "自動靜音",
                    description: "加入語音頻道時自動將麥克風靜音。"
                },
                selfDeafen: {
                    label: "自動隔音",
                    description: "加入語音頻道時自動將您的音訊震耳欲聾。"
                },
                leaveEmpty: {
                    label: "空時離開",
                    description: "當語音聊天為空時尋找隨機通話。"
                },
                prioritizeFriends: {
                    label: "好友優先",
                    description: "儘可能優先選擇有好友在內的頻道。"
                },
                avoidStages: {
                    label: "迴避階段",
                    description: "避免加入舞台語音頻道。"
                },
                avoidAfk: {
                    label: "避免AFK",
                    description: "避免加入 AFK 語音頻道。"
                },
                video: {
                    label: "影片",
                    description: "搜尋打開影片的用戶"
                },
                stream: {
                    label: "溪流",
                    description: "搜尋正在直播的用戶"
                },
                mute: {
                    label: "沉默的",
                    description: "搜尋靜音的用戶"
                },
                deafen: {
                    label: "聾啞人士",
                    description: "搜尋失聰的用戶"
                },
                includeStates: {
                    label: "包括過濾器",
                    description: "包含狀態的選項"
                },
                avoidStates: {
                    label: "避免過濾器",
                    description: "避免狀態的選項"
                }
            },
            alert: {
                failed: "找不到語音頻道！"
            },
            toast: {
                failedToFindA: "找不到語音頻道。",
                voiceChannelIsUnavailable: "語音頻道無法使用。"
            },
            text: {
                userCount: "{{count}} 位使用者",
                usersCount: "{{count}} 位使用者"
            }
        },
        reactErrorDecoder: {
            name: "ReactErrorDecoder",
            description: "將 React 錯誤代碼解碼為人類可讀的訊息。"
        },
        readAllNotificationsButton: {
            name: "ReadAllNotificationsButton",
            description: "點擊按鈕即可閱讀所有伺服器通知！",
            button: "閱讀全部"
        },
        recentDMSwitcher: {
            name: "RecentDMSwitcher",
            description: "Ctrl+Tab 在最近使用的 DM 之間（Ctrl+Shift+Tab 反向）",
            option: {
                visualStyle: {
                    label: "視覺風格",
                    description: "騎乘時的視覺指示器風格",
                    overlay: "疊加（Alt+Tab 樣式）",
                    toast: "Toast（狀態訊息）",
                    off: "離開"
                },
                overlayMode: {
                    label: "疊加模式",
                    description: "疊加內容",
                    row: "最近的行",
                    current: "僅當前",
                },
                amountOfUsers: {
                    label: "使用者數量",
                    description: "在疊加層中顯示的使用者數量"
                },
                overlayRowLength: {
                    label: "覆蓋行長度",
                    description: "行中顯示的最近 DM 的數量"
                },
                overlayShowAvatars: {
                    label: "疊加顯示頭像",
                    description: "在疊加層中顯示使用者頭像"
                },
                toastDurationMs: {
                    label: "吐司持續時間（毫秒）",
                    description: "狀態訊息的持續時間"
                },
                clearRdms: {
                    label: "清除 RDMS 列表",
                    description: "測試實用程式：清除 RDM 列表",
                    toast: "已清除 RDMS 歷史記錄",
                    button: "清除 RDM 歷史記錄"
                }
            },
            modal: {
                unknown: "未知",
                dm: "DM",
                group: "小組DM",
                channel: "頻道",
                switchingTo: "切換到：{{name}}"
            }
        },
        relationshipNotifier: {
            name: "RelationshipNotifier",
            description: "當朋友、群組聊天或伺服器刪除您時通知您。",
            option: {
                notices: {
                    label: "通知",
                    description: "刪除時也會在螢幕頂部顯示一則通知（如果您不想錯過任何通知，請使用此通知）。"
                },
                offlineRemovals: {
                    label: "離線刪除",
                    description: "如果您在離線狀態下被刪除，請在啟動 Discord 時通知您。"
                },
                friends: {
                    label: "朋友們",
                    description: "當朋友刪除您時通知"
                },
                friendRequestCancels: {
                    label: "好友請求取消",
                    description: "當好友請求被取消時通知"
                },
                servers: {
                    label: "伺服器",
                    description: "從伺服器刪除時發出通知"
                },
                groups: {
                    label: "團體",
                    description: "從群組聊天中刪除時發出通知"
                }
            },
            notification: {
                removedFriend: "{{user}} 將您刪除為好友。",
                cancelledFriendRequest: "來自 {{user}} 的好友請求已被刪除。",
                removedFromServer: "您已從伺服器 {{server}} 中刪除。",
                removedFromGroup: "您已從群組 {{group}} 中刪除。",
                noLongerGroup: "您不再屬於 {{group}} 群組。",
                noLongerServer: "您不再位於伺服器 {{server}} 中。",
                noLongerFriend: "您不再是 {{user}} 的朋友。",
                friendRequestRevoked: "來自 {{user}} 的好友請求已被撤銷。",
                ok: "好的"
            },
            text: {
                relationshipNotifier: "關係通知"
            }
        },
        remix: {
            name: "Remix",
            description: "在檔案上傳按鈕的右鍵選單中新增「重新混合」選項。此選項在簡單的圖像編輯器中開啟圖像，並允許您將編輯後的圖像直接發送到聊天中。",
            label: "混音",
            button: {
                send: "傳送",
                close: "關閉",
                brush: "刷子",
                erase: "擦除",
                crop: "莊稼",
                shape: "形狀",
                reset: "重置",
                clear: "清除"
            },
            editor: {
                choose: "選擇影像",
                browse: "瀏覽",
                rectangle: "長方形",
                ellipse: "橢圓",
                line: "線",
                arrow: "箭",
                fill: "充滿",
                image: "圖片"
            }
        },
        repeatMessages: {
            name: "RepeatMessages",
            description: "允許您快速重複訊息。如果按住 Shift 鍵的同時按一下「重複」選項，它將回覆該訊息。",
            button: "重複（點擊）/重複並回覆（Shift + 點擊）",
            context: {
                repeat: "重複",
                repeatAndReply: "重複並回复"
            }
        },
        replaceGoogleSearch: {
            name: "ReplaceGoogleSearch",
            description: "用不同的引擎取代 Google 搜尋。",
            option: {
                customEngineName: {
                    label: "自訂引擎名稱",
                    description: "自訂搜尋引擎的名稱"
                },
                customEngineURL: {
                    label: "自訂引擎 URL",
                    description: "您的引擎的 URL"
                },
                replacementEngine: {
                    label: "更換發動機",
                    description: "替換為特定的搜尋引擎而不是添加菜單",
                    off: "離開",
                    custom: "客製化引擎",
                }
            },
            context: {
                label: "搜尋文字",
                searchWith: "使用 {{name}} 搜尋"
            },
            text: {
                google: "Google"
            }
        },
        replyPingControl: {
            name: "ReplyPingControl",
            description: "控制在訊息回覆時是始終還是從不接收提及（ping），包含白名單和黑名單功能",
            option: {
                replyPingBlacklist: {
                    label: "回覆提及黑名單",
                    description: "以逗號分隔的使用者 ID 列表，將從不接收來自這些使用者的回覆提及"
                },
                alwaysPingOnReply: {
                    label: "始終 Ping 回复",
                    description: "當有人回覆您的訊息時，總是會收到通知"
                },
                replyPingWhitelist: {
                    label: "回覆 Ping 白名單",
                    description: "以逗號分隔的使用者 ID 列表，始終接收來自的回應 ping"
                }
            }
        },
        replyTimestamp: {
            name: "ReplyTimestamp",
            description: "在回覆訊息預覽上顯示時間戳"
        },
        revealAllSpoilers: {
            name: "RevealAllSpoilers",
            description: "透過按住 Ctrl 鍵點擊劇透，或在聊天中按住 Ctrl+Shift 鍵單擊，可顯示訊息中的所有劇透"
        },
        reverseImageSearch: {
            name: "ReverseImageSearch",
            description: "將 ImageSearch 新增至映像上下文選單",
            context: {
                label: "搜尋圖片",
                all: "搜尋全部"
            },
            text: {
                all: "全部"
            }
        },
        reviewDB: {
            name: "ReviewDB",
            description: "查看其他使用者（為個人資料新增部分）",
            notification: {
                newReview: "您的個人資料上有新評論！",
                auth: {
                    error: "授權時發生錯誤",
                    successfully: "登入成功！",
                    failed: "授權失敗",
                    review: "請授權添加評論。",
                    opening: "正在開啟授權視窗...",
                    need: "您需要授權才能評論用戶！"
                },
                error: {
                    fast: "您發送請求的速度太快。等待幾秒鐘，然後再試一次。",
                    fetching: "獲取評論時發生錯誤。",
                    action: {
                        failed: "{{action}} 使用者失敗",
                        success: "成功 {{action}}ed 用戶"
                    }
                }
            },
            modal: {
                delete: {
                    title: "你確定嗎？",
                    description: "您真的要刪除此評論嗎？",
                    confirm: "刪除",
                    cancel: "沒關係",
                    error: "您必須登入才能刪除評論。",
                },
                report: {
                    title: "你確定嗎？",
                    description: "您真的要檢舉此評論嗎？",
                    confirm: "報告",
                    cancel: "沒關係",
                    error: "您必須登入才能報告評論。",
                },
                block: {
                    title: "你確定嗎？",
                    description: "您真的要封鎖該用戶嗎？您將不會再看到他們的評論。",
                    confirm: "堵塞",
                    cancel: "沒關係",
                    error: "您必須登入才能封鎖使用者。",
                },
                blocked: {
                    title: "被封鎖的用戶",
                    auth: "您還沒有登入 ReviewDB！",
                    noBlocked: "沒有用戶被封鎖。",
                    fetch: "取得被封鎖的使用者時發生錯誤。"
                },
                reviews: {
                    title: "的評論",
                    noUser: "似乎還沒有人評論過該用戶。你可能是第一個！",
                    noServer: "看起來還沒有人評論過這個伺服器。你可能是第一個！"
                }
            },
            button: {
                appeal: "上訴",
                ok: "好的",
                more: "閱讀更多",
                reply: "回覆@{{user}}",
                update: "更新@{{user}} 的評論",
                review: "評論@{{user}}"
            },
            context: {
                view: "查看評論",
                blocked: "您已封鎖該用戶",
                delete: "刪除評論",
                report: "報告審查",
                block: "封鎖用戶",
                unblock: "解除封鎖用戶",
                reply: "回覆評論"
            },
            option: {
                authorize: {
                    label: "授權",
                    button: "使用 ReviewDB 授權"
                },
                notifyReviews: {
                    label: "通知評論",
                    description: "啟動時通知新評論"
                },
                showWarning: {
                    label: "顯示警告",
                    description: "在評論列表頂部顯示尊重警告"
                },
                hideTimestamps: {
                    label: "隱藏時間戳",
                    description: "隱藏評論的時間戳"
                },
                hideBlockedUsers: {
                    label: "隱藏被封鎖的用戶",
                    description: "隱藏被封鎖用戶的評論"
                },
                buttons: {
                    label: "按鈕",
                    manageBlocked: "管理被封鎖的用戶",
                    support: "支援ReviewDB開發",
                    website: "評論資料庫網站",
                    server: "ReviewDB 支援伺服器"
                }
            },
            profile: {
                optedOut: "使用者已選擇退出",
                noReviews: "暫無評論"
            },
            toast: {
                youCannotVoteOn: "你無法為自己的評價投票。",
                networkErrorFailedTo: "網路錯誤：無法連線到 ReviewDB。",
                pleaseAuthorizeToVote: "請授權以對評價投票。",
                requestFailed: "ReviewDB：要求失敗，狀態碼 {{status}}"
            },
            text: {
                ok: "確定",
                updateReviewFor: "更新對 @{{name}} 的評價",
                reviewUser: "評價 @{{name}}",
                system: "系統",
                reviewCount: "（{{count}} 則評價）"
            }
        },
        richMagnetLinks: {
            name: "RichMagnetLinks",
            description: "像訊息連結一樣呈現磁力鏈接",
            unknown: "未知的檔名"
        },
        roleColorEverywhere: {
            name: "RoleColorEverywhere",
            description: "在任何可能的地方添加頂級角色顏色",
            option: {
                chatMentions: {
                    label: "聊天提及",
                    description: "在聊天提及中顯示角色顏色（包含在訊息框中）"
                },
                memberList: {
                    label: "會員名單",
                    description: "在成員清單角色標題中顯示角色顏色"
                },
                voiceUsers: {
                    label: "語音用戶",
                    description: "顯示語音聊天使用者清單中的角色顏色"
                },
                reactorsList: {
                    label: "反應器列表",
                    description: "在反應器清單中顯示角色顏色"
                },
                pollResults: {
                    label: "投票結果",
                    description: "在投票結果中顯示角色顏色"
                },
                colorChatMessages: {
                    label: "彩色聊天訊息",
                    description: "根據作者的角色顏色對聊天訊息進行顏色設置"
                },
                messageSaturation: {
                    label: "訊息飽和度",
                    description: "訊息著色的強度"
                }
            }
        },
        rpcEditor: {
            name: "RPCEditor",
            description: "編輯任何 Rich Presence 的類型和內容",
            option: {
                replacedAppIds: {
                    label: "替換的應用程式 ID",
                }
            },
            modal: {
                tutorial: {
                    title: "目前正在運行的活動的 ID",
                    noRunning: "沒有跑步活動",
                    available: "可用變數",
                    variableText: "在所有欄位（流 URL 除外）中，您可以輸入將自動替換為其原始內容的變數：",
                    more: "更多詳情",
                    details: {
                        leave: "將欄位留空以保持原樣。",
                        set: "將欄位設為“null”以將其隱藏。",
                        reload: "您可能需要重新載入 Discord 才能套用變更。"
                    }
                },
                settings: {
                    applyEdits: "將編輯應用到應用程式",
                    addNewApp: "新增應用程式",
                    appId: "應用程式ID",
                    invalidAppId: "無效的應用程式 ID",
                    newActivityType: "新活動類型",
                    activityTypes: {
                        playing: "演奏",
                        watching: "觀看",
                        listening: "聽力",
                        competing: "競爭",
                        streaming: "串流媒體"
                    },
                    streamUrl: "直播 URL（必須是 YouTube 或 Twitch）",
                    invalidStreamUrl: "無效的流 URL",
                    newName: "新名稱",
                    newDetails: "新細節",
                    newState: "新狀態",
                    largeImage: "大圖",
                    smallImage: "小圖片",
                    text: "文字",
                    url: "網址",
                    firstLine: "（第一行）",
                    secondLine: "（第二行）",
                    thirdLine: "（第三行）",
                    alsoThirdLine: "（也是第三行）",
                    hideAssets: "隱藏資源（大圖像和小圖像）",
                    hideTimestamps: "隱藏時間戳"
                }
            },
        },
        saveFavoriteGIFs: {
            name: "SaveFavouritedGIFs",
            description: "匯出收藏的 GIF URL",
            toolbox: "保存最喜歡的 GIF",
            title: "保存最喜歡的 GIF",
            command: {
                savegifs: {
                    description: "將所有喜愛的 GIF URL 儲存到文字文件"
                },
                saveworkinggifs: {
                    description: "測試所有收藏的 GIF，只保存仍在使用的 GIF"
                }
            },
            option: {
                showToolboxButton: {
                    label: "顯示工具箱按鈕",
                    description: "在 Plexcord Toolbox 中顯示「儲存喜愛的 GIF」按鈕（需要重新載入）"
                }
            },
            toast: {
                save: "已成功將 GIF 儲存為 {{filename}}",
                failed: "儲存 GIF 失敗",
                no: "未找到收藏的 GIF！",
                testing: "測試 {{count}} GIF，可能需要一些時間...",
                noneWorking: "您保存的 GIF 似乎都不起作用。",
                saved: "過濾了 {{broken}} 可能損壞的 GIF。已儲存 {{saved}} 工作 GIF。"
            }
        },
        scheduledMessages: {
            name: "ScheduledMessages",
            description: "安排訊息在特定時間或延遲後發送。",
            toolbox: {
                toggle: "查看預定訊息"
            },
            option: {
                maxMessagesPerMinute: {
                    label: "每分鐘最大訊息數",
                    description: "每個通道可以在同一分鐘內觸發的最大預定訊息數。"
                },
                checkIntervalSeconds: {
                    label: "檢查間隔（秒）",
                    description: "插件檢查要傳送的訊息的頻率。"
                },
                showNotifications: {
                    label: "顯示通知",
                    description: "發送訊息時顯示 toast 通知。"
                },
                showPhantomMessages: {
                    label: "顯示虛擬訊息",
                    description: "在聊天中將預定訊息顯示為虛擬訊息。"
                }
            },
            channelType: {
                unknown: "未知",
                dm: "DM",
                groupDm: "小組DM",
                channel: "頻道"
            },
            toast: {
                messageSent: "預定訊息發送至 {{channel}}",
                messageFailed: "發送預定訊息失敗",
                maxMessagesReached: "已達到每個頻道每分鐘最多 {{max}} 則訊息",
                messageScheduled: "已安排留言！",
                messageRemoved: "預定訊息已刪除",
                allCleared: "所有預定訊息已清除",
                scheduledMessageSentTo: "已向 {{name}} 傳送排程訊息"
            },
            button: {
                tooltipOn: "計劃模式開啟（按一下以停用，右鍵單擊查看清單）",
                tooltipOff: "計劃模式關閉（按一下啟用，右鍵單擊查看清單）"
            },
            accessory: {
                scheduledFor: "預定於 {date}{timeLeft}",
                remaining: {
                    days: "剩餘 {{days}}d {{hours}}h",
                    hours: "剩餘 {{hours}}h {{minutes}}m",
                    minutes: "剩餘 {{minutes}}m"
                }
            },
            scheduleModal: {
                title: "日程留言",
                schedulingFor: "安排時間：{{channel}}",
                scheduleType: "時間表類型",
                delay: "延遲",
                specificTime: "具體時間",
                delayMinutes: "延誤（分鐘）",
                dateTime: "日期和時間",
                error: {
                    invalidDelay: "請輸入有效的延遲時間（至少 1 分鐘）",
                    invalidDateTime: "請選擇未來的日期和時間"
                },
                schedule: "行程",
                cancel: "取消"
            },
            viewModal: {
                title: "預定訊息",
                clearAll: "全部清除",
                noMessages: "沒有預定訊息",
                delete: "刪除",
                close: "關閉"
            }
        },
        searchFix: {
            name: "SearchFix",
            description: "修復了惱人的“我們掉落了放大鏡！”錯誤。",
            notPerfect: "此修復並不完美，因此您可能需要重新載入搜尋欄才能修復問題。",
            paragraph1: "Discord 只允許最大偏移 5000（這就是導致放大鏡錯誤的原因）。",
            paragraph2: "這意味著您只能精確地看到過去的 5000 則訊息和未來的 5000 則訊息（按舊排序時）。",
            paragraph3: "這個插件只是跳到相反的排序方法來嘗試繞過Discord的限制，",
            paragraph4: "但如果搜尋結果很大，而您嘗試查看兩種排序方法都無法取得的訊息，",
            paragraph5: "該插件將僅顯示偏移量 0（最新或最舊的消息，具體取決於排序方法）。"
        },
        secretRingToneEnabler: {
            name: "SecretRingToneEnabler",
            description: "請務必播放秘密版本的 Discord 鈴聲（特殊鈴聲活動期間除外）",
            option: {
                onlySnow: {
                    label: "僅在雪鈴聲活動期間",
                    description: "只播放雪光暈主題"
                }
            }
        },
        sendTimestamps: {
            name: "SendTimestamps",
            description: "透過聊天框按鈕和文字快捷方式輕鬆發送時間戳記。閱讀擴充說明！",
            sample: {
                paragraph1: "若要快速傳送僅時間時間戳，請在訊息中包含格式為「HH:MM」的時間戳記（包括反引號！）",
                paragraph2: "請參閱下面的範例。 \n如果您需要更具體的訊息，請使用聊天欄中的「日期」按鈕！",
                examples: "範例："
            },
            modal: {
                title: "時間戳選擇器",
                light: "光",
                dark: "黑暗的",
                format: "時間戳格式",
                preview: "預覽",
                insert: "插入",
                insertTimestamp: "插入時間戳"
            },
            option: {
                replaceMessageContents: {
                    label: "取代訊息內容",
                    description: "取代訊息內容中的時間戳"
                }
            }
        },
        serverInfo: {
            name: "ServerInfo",
            description: "允許您查看有關伺服器的信息",
            context: {
                serverInfo: "伺服器資訊"
            },
            option: {
                sorting: {
                    label: "排序",
                    description: "使用者名稱或顯示名稱（如果適用）",
                    username: "使用者名稱",
                    displayname: "顯示名稱",
                    none: "不排序"
                }
            },
            modal: {
                tab: {
                    serverInfo: "伺服器資訊",
                    friends: "朋友們",
                    mutualUsers: "共同用戶",
                    blockedUsers: "被封鎖的用戶",
                    ignoredUsers: "被忽略的用戶"
                },
                owner: "伺服器擁有者",
                loading: "載入中...",
                createdAt: "創建於",
                joinedAt: "加入時間",
                vanityLink: "虛榮連結",
                preferredLocale: "首選區域設置",
                verification: {
                    level: "驗證等級",
                    none: "沒有任何",
                    low: "低的",
                    medium: "中等的",
                    high: "高的",
                    highest: "最高"
                },
                serverBoosts: "伺服器提升",
                channels: "頻道",
                roles: "角色",
                boostLevel: "{{count}}（等級 {{level}}）"
            }
        },
        serverListIndicators: {
            name: "ServerListIndicators",
            description: "在伺服器清單中新增線上好友數或伺服器數",
            friends: "朋友們",
            servers: "伺服器",
            option: {
                mode: {
                    label: "模式",
                    description: "在伺服器清單中顯示的模式",
                    friend: "僅在線好友計數",
                    server: "僅伺服器計數",
                    both: "伺服器和線上好友都算數"
                },
                useCompact: {
                    label: "使用緊湊模式",
                    description: "使指示器僅顯示文字"
                }
            }
        },
        serverSearch: {
            name: "ServerSearch",
            description: "使用快速搜尋按鈕更好地瀏覽您的伺服器",
            tooltip: "搜尋"
        },
        shikiCodeblocks: {
            name: "ShikiCodeblocks",
            description: "將 VS Code 風格的程式碼區塊引入 Discord，由 Shiki 提供支援",
            option: {
                theme: {
                    label: "主題",
                    description: "預設主題"
                },
                customTheme: {
                    label: "自訂主題",
                    description: "自訂 VS Code 主題的鏈接",
                    mustURL: "必須是有效的 URL",
                    mustJSON: "必須是 JSON 文件"
                },
                tryHljs: {
                    label: "回退到 Hljs",
                    description: "使用更輕量級的預設 Discord 螢光筆和主題。",
                    never: "絕不",
                    secondary: "喜歡 Shiki 而不是 Highlight.js",
                    primary: "喜歡Highlight.js而不是Shiki",
                    always: "總是"
                },
                useDevIcon: {
                    label: "使用 Devicon 作為語言圖標",
                    description: "如何在程式碼區塊上顯示語言圖標",
                    disabled: "殘障人士",
                    colorless: "無色",
                    colored: "有色"
                },
                bgOpacity: {
                    label: "背景不透明度",
                    description: "背景不透明度"
                },
                ignoredLanguages: {
                    label: "忽略的語言",
                    description: "交由 Discord 預設程式碼區塊處理的語言清單，以逗號分隔"
                }
            },
            button: {
                copy: "複製",
                copied: "複製了！"
            }
        },
        showAllMessageButtons: {
            name: "ShowAllMessageButtons",
            description: "無論您是否按住 Shift 鍵，請始終顯示所有訊息按鈕。",
            option: {
                noShiftDelete: {
                    label: "無移位刪除",
                    description: "刪除刪除訊息時按住 Shift 的要求。"
                },
                noShiftPin: {
                    label: "無換檔銷",
                    description: "刪除了按住 Shift 來固定訊息的要求。"
                },
                noQuickReacts: {
                    description: "隱藏快速反應。預設情況下，顯示完整選單會隱藏快速反應按鈕。",
                    label: "無快速反應"
                }
            }
        },
        showBadgesInChat: {
            name: "ShowBadgesInChat",
            description: "在聊天中的姓名旁邊顯示訊息作者的徽章。",
            option: {
                showPlexcordDonor: {
                    label: "顯示 Plexcord 捐贈者徽章",
                    description: "啟用在聊天中顯示 Plexcord 捐贈者徽章。"
                },
                plexcordDonorPosition: {
                    label: "Plexcord 捐贈者徽章位置",
                    description: "Plexcord 捐贈者徽章的位置。"
                },
                showPlexcordContributor: {
                    label: "顯示 Plexcord 貢獻者徽章",
                    description: "啟用在聊天中顯示 Plexcord 貢獻者徽章。"
                },
                plexcordContributorPosition: {
                    label: "Plexcord 貢獻者徽章位置",
                    description: "Plexcord 貢獻者徽章的位置。"
                },
                showDiscordProfile: {
                    label: "顯示 Discord 個人資料徽章",
                    description: "啟用在聊天中顯示 Discord 個人資料徽章。"
                },
                discordProfilePosition: {
                    label: "Discord 個人資料徽章位置",
                    description: "Discord 個人資料徽章的位置。"
                },
                showDiscordNitro: {
                    label: "顯示 Discord Nitro 徽章",
                    description: "啟用在聊天中顯示 Discord Nitro 徽章。"
                },
                discordNitroPosition: {
                    label: "Discord Nitro 徽章位置",
                    description: "Discord Nitro 徽章的位置。"
                },
                badgeSettings: {
                    label: "徽章設定",
                    description: "配置聊天中顯示的其他徽章的位置。",
                    modal: "拖曳徽章以重新排序；您可以點擊以啟用/停用特定徽章類型。"
                }
            },
            badge: {
                plexcord: "Plexcord 捐贈者徽章",
                contributor: "Plexcord 貢獻者徽章",
                discordProfile: "Discord 個人資料徽章（HypeSquad、Discord Staff、活躍開發人員等）",
                nitro: "硝基徽章",
                staff: "不和諧法杖",
                partner: "合作伺服器擁有者",
                events: "HypeSquad 活動",
                bravery: "HypeSquad 勇敢",
                brilliance: "HypeSquad 輝煌",
                balance: "HypeSquad 平衡",
                bugHunter: "不和諧蟲子獵人",
                earlyVerifiedBotDeveloper: "早期驗證的機器人開發人員",
                earlySupporter: "早期支持者",
                moderatorProgram: "主持人計劃校友"
            },
            modal: {
                plexcordContributor: "Plexcord 貢獻者",
                discordNitro: "不和諧硝基",
                basic: "基本的",
                classic: "經典的"
            }
        },
        showConnections: {
            name: "ShowConnections",
            description: "在使用者彈出視窗中顯示連線的帳戶",
            option: {
                iconSize: {
                    label: "圖示大小",
                    description: "圖示大小（像素）"
                },
                iconSpacing: {
                    label: "圖示間距",
                    description: "圖示邊距",
                    compact: "袖珍的",
                    cozy: "舒適",
                    roomy: "寬敞"
                },
                showGithubOrgs: {
                    description: "顯示使用者所屬的 GitHub 組織",
                    label: "顯示 GitHub 組織"
                },
                showOnModal: {
                    description: "在完整個人檔案視窗中顯示已連結的帳號",
                    label: "在視窗中顯示"
                }
            }
        },
        showHiddenChannels: {
            name: "ShowHiddenChannels",
            description: "顯示您無權查看的頻道。",
            tooltip: "隱藏頻道",
            option: {
                channelStyle: {
                    label: "頻道風格",
                    description: "用於顯示隱藏通道的樣式。",
                    classic: "經典的",
                    muted: "靜音",
                    showUnreads: "顯示未讀內容",
                    mutedWithUnreads: "靜音並顯示未讀內容"
                },
                showMode: {
                    label: "顯示模式",
                    description: "用於顯示隱藏通道的模式。",
                    lock: "普通風格，帶有鎖定圖標",
                    hidden: "靜音風格，右側隱藏眼睛圖標",
                    lockIconRight: "右側的鎖定圖標"
                },
                defaultAllowedUsersAndRolesDropdownState: {
                    label: "預設允許的使用者和角色下拉狀態",
                    description: "預設是否應開啟隱藏頻道上允許的使用者和角色下拉列表"
                }
            },
            channelType: {
                text: "文字",
                announcement: "公告",
                forum: "論壇",
                voice: "嗓音",
                stage: "階段"
            },
            sortOrder: {
                latestActivity: "最新活動",
                creationDate: "建立日期"
            },
            forumLayout: {
                default: "未設定",
                list: "清單視圖",
                grid: "畫廊視圖"
            },
            videoQuality: {
                auto: "自動的",
                full: "720p"
            },
            modal: {
                hidden: "隱",
                locked: "鎖定",
                threads: "執行緒",
                posts: "貼文",
                messages: "訊息",
                post: "郵政",
                message: "訊息",
                unknown: "未知",
                permissionDetails: "權限詳情",
                thisIsA: "這是一個 {{status}} {{channelType}} 頻道",
                canNotSee: "您看不到該頻道的 {{type}}。",
                guidelines: "但是，您可能會看到其指南：",
                lastCreated: "最後建立的 {{type}}:",
                lastPin: "最後一則訊息圖釘：",
                threadSlowmode: "預設線程慢模式：",
                slowmode: "慢速模式：",
                bitrate: "比特率：",
                region: "地區：",
                automatic: "自動的",
                videoQuality: "視訊品質模式：",
                inactiveArchiveDuration: "歸檔前的預設不活動持續時間 {{type}}",
                defaultLayout: "預設佈局：",
                defaultSort: "預設排序順序：",
                defaultReaction: "預設反應表情符號：",
                requireTag: "此論壇上的貼文需要設定標籤。",
                availableTags: "可用標籤：",
                allowedUsersAndRoles: "允許的使用者和角色：",
                hideAllowedUsersAndRoles: "隱藏允許的使用者和角色",
                viewAllowedUsersAndRoles: "查看允許的使用者和角色"
            }
        },
        showHiddenThings: {
            name: "ShowHiddenThings",
            description: "顯示各種隱藏的和僅限主持人的內容，無論權限如何。",
            option: {
                showTimeouts: {
                    label: "在聊天中顯示成員超時",
                    description: "在聊天中顯示成員超時圖示。"
                },
                showInvitesPaused: {
                    label: "顯示邀請已暫停",
                    description: "在伺服器清單中顯示邀請已暫停的工具提示。"
                },
                showModView: {
                    label: "顯示模組視圖",
                    description: "在所有伺服器中顯示成員 mod 視圖上下文選單項目。"
                }
            }
        },
        showMessageEmbeds: {
            name: "ShowMessageEmbeds",
            description: "新增一個上下文選單選項以顯示沒有嵌入的連結",
            context: {
                embed: {
                    show: "顯示嵌入",
                    hide: "刪除嵌入"
                }
            },
            error: {
                failed: "嵌入失敗",
                noEmbed: "未找到嵌入內容"
            }
        },
        showMeYourName: {
            name: "ShowMeYourName",
            description: "在聊天中顯示自訂暱稱、好友暱稱、伺服器暱稱、顯示名稱和使用者名稱的任意排列。",
            option: {
                messages: {
                    label: "留言",
                    description: "在訊息中顯示自訂名稱格式。"
                },
                replies: {
                    label: "回覆",
                    description: "在回覆中顯示自訂名稱格式。"
                },
                mentions: {
                    label: "提及",
                    description: "在提及中顯示自訂名稱格式。"
                },
                typingIndicator: {
                    label: "打字指示器",
                    description: "在鍵入指示器中顯示以自訂名稱格式列出的第一個可用名稱。"
                },
                memberList: {
                    label: "會員名單",
                    description: "在成員清單、私訊清單、好友清單與「目前活躍」中顯示自訂名稱格式中第一個可用的名稱。"
                },
                profilePopout: {
                    label: "個人資料彈出窗口",
                    description: "在個人資料彈出視窗中顯示以自訂名稱格式列出的第一個可用名稱。"
                },
                voiceChannels: {
                    label: "語音頻道",
                    description: "在語音頻道中顯示以自訂名稱格式列出的第一個可用名稱。"
                },
                reactions: {
                    label: "反應",
                    description: "在反應工具提示中顯示以自訂名稱格式列出的第一個可用名稱，並在反應彈出視窗中顯示全名。"
                },
                discriminators: {
                    label: "鑑別器",
                    description: "將鑑別符附加到機器人的使用者名稱中。鑑別器已不再用於用戶，但仍用於機器人。預設情況下，機器人的使用者名稱相當於使用者的全域名稱，因此多個機器人可以具有相同的使用者名稱。附加鑑別器使它們再次變得獨一無二。"
                },
                hideDefaultAtSign: {
                    label: "隱藏標誌處的預設值",
                    description: "隱藏提及和回覆中姓名前的預設「@」符號。僅當任一功能啟用時才適用。"
                },
                truncateAllNamesWithStreamerMode: {
                    label: "使用 Streamer 模式截斷所有名稱",
                    description: "在串流媒體模式下截斷所有名稱，而不僅僅是使用者名稱。"
                },
                removeDuplicates: {
                    label: "刪除重複項",
                    description: "如果任何名稱相同，請將其刪除，只保留唯一的名稱。"
                },
                ignoreFonts: {
                    label: "忽略字體",
                    description: "對於第二個、第三個和第四個名稱，請使用 gg sans，無論使用者的自訂字體為何。"
                },
                ignoreGradients: {
                    label: "忽略漸變",
                    description: "對於非主要名稱，如果角色有漸變並且下面的顏色設置為“角色+-#”，則使用主要顏色而不是整個漸變，如果它具有 Nitro 效果，則完全忽略它。"
                },
                animateGradients: {
                    label: "動畫漸變",
                    description: "對於第二個、第三個和第四個名稱，如果角色有漸變，請為其設定動畫。這可以透過「忽略漸層」和減少運動來停用。"
                },
                nameSeparator: {
                    label: "名稱分隔符",
                    description: "名稱之間使用的分隔符號。預設為單一空格。"
                },
                friendNameOnlyInDirectMessages: {
                    label: "僅在私訊顯示好友姓名",
                    description: "僅在 DM 中顯示好友姓名，在伺服器中不顯示。"
                },
                customNameOnlyInDirectMessages: {
                    label: "僅在私訊中自訂名稱",
                    description: "僅在 DM 中顯示自訂名稱，而不是在伺服器中顯示自訂名稱。"
                },
                alwaysShowEffects: {
                    label: "一律動畫效果",
                    description: "始終顯示效果，就像將游標懸停在上方一樣。"
                },
                includedNames: {
                    label: "包含的名稱",
                    description: "顯示使用者名稱、顯示名稱、暱稱和好友名稱的順序。使用以下佔位符：{user}、{display}、{nick}、{friend}。您可以提供多個名稱選項，以便在某個選項不可用時用作備用名稱，方法是用逗號分隔它們，例如：{friend, nick, display}。每個名稱最多可以有三個前綴和三個後綴。"
                },
                customNameColor: {
                    label: "自訂名稱顏色",
                    description: "用於指派給使用者的自訂名稱的顏色（如果不是第一次顯示）。接受任何有效的 CSS 輸入。使用「角色」來遵循使用者的頂級角色顏色、Nitro 效果顏色或 IRCColors 顏色（如果已啟用）。使用“Role+-#”以該百分比調整亮度（例如“Role+15”）"
                },
                friendNameColor: {
                    label: "朋友姓名顏色",
                    description: "如果朋友的暱稱不是第一次顯示，則使用該顏色。接受任何有效的 CSS 輸入。使用「角色」來遵循使用者的頂級角色顏色、Nitro 效果顏色或 IRCColors 顏色（如果已啟用）。使用“Role+-#”以該百分比調整亮度（例如“Role+15”）"
                },
                nicknameColor: {
                    label: "暱稱顏色",
                    description: "如果暱稱不是第一次顯示，則用於暱稱的顏色。接受任何有效的 CSS 輸入。使用「角色」來遵循使用者的頂級角色顏色、Nitro 效果顏色或 IRCColors 顏色（如果已啟用）。使用“Role+-#”以該百分比調整亮度（例如“Role+15”）"
                },
                displayNameColor: {
                    label: "顯示名稱 顏色",
                    description: "如果不是第一次顯示，則用於顯示名稱的顏色。接受任何有效的 CSS 輸入。使用「角色」來遵循使用者的頂級角色顏色、Nitro 效果顏色或 IRCColors 顏色（如果已啟用）。使用“Role+-#”以該百分比調整亮度（例如“Role+15”）"
                },
                usernameColor: {
                    label: "使用者名稱顏色",
                    description: "如果使用者名稱不是第一次顯示，則用於使用者名稱的顏色。接受任何有效的 CSS 輸入。使用「角色」來遵循使用者的頂級角色顏色、Nitro 效果顏色或 IRCColors 顏色（如果已啟用）。使用“Role+-#”以該百分比調整亮度（例如“Role+15”）"
                },
                triggerNameRerender: {
                    label: "觸發器名稱重新渲染",
                    description: "透過切換此設定來觸發名稱重新呈現。"
                },
                searchAutocomplete: {
                    description: "在提及與搜尋自動完成中顯示自訂名稱格式中第一個可用的名稱。",
                    label: "搜尋自動完成"
                },
                styleDirectMessagesList: {
                    description: "無需滑過即可在未選取項目上顯示顯示名稱效果。停用時，選取與滑過的項目仍會套用樣式。",
                    label: "美化私訊清單"
                },
                styleDirectMessagesMessages: {
                    description: "無需滑過即可在訊息作者上顯示顯示名稱效果。停用時，滑過的名稱仍會套用樣式。",
                    label: "美化私訊訊息"
                },
                styleFriendsList: {
                    description: "無需滑過即可顯示顯示名稱效果。停用時，滑過的項目仍會套用樣式。",
                    label: "美化好友清單"
                },
                styleActiveNow: {
                    description: "無需滑過即可顯示顯示名稱效果。停用時，滑過的項目仍會套用樣式。",
                    label: "美化「目前活躍」"
                },
                ignoreEffects: {
                    description: "對於非主要名稱，僅使用主要身分組顏色並省略顯示名稱效果。",
                    label: "忽略效果"
                },
                animateEffects: {
                    description: "為非主要名稱的身分組漸層與顯示名稱效果加入動畫。會被「忽略效果」與減少動態效果停用。",
                    label: "動畫效果"
                },
                alwaysAnimateEffects: {
                    description: "當顯示名稱效果本就可見時，即使未滑過也強制播放動畫。",
                    label: "一律動畫效果"
                },
                gradientGlow: {
                    description: "為動畫使用者漸層加入發光效果，與伺服器身分組漸層的發光方式相同。",
                    label: "漸層發光"
                }
            },
            modal: {
                change: {
                    title: "更改 SMYN 暱稱"
                },
                add: {
                    title: "新增 SMYN 暱稱"
                },
                setCustom: "為此使用者設定自訂 SMYN 暱稱。透過在 SMYN 模板設定中指定 {custom} 來使用它。",
                nickname: "SMYN 暱稱",
                reset: "重置 SMYN 暱稱",
                cancel: "取消"
            },
            text: {
                save: "儲存",
                unknown: "未知"
            }
        },
        showTimeoutDuration: {
            name: "ShowTimeoutDuration",
            description: "在逾時圖示工具提示中或其旁邊顯示使用者的逾時將持續多久",
            option: {
                displayStyle: {
                    label: "展示風格",
                    description: "如何顯示超時時長",
                    tooltip: "在工具提示中",
                    inline: "逾時圖示旁邊"
                }
            },
            text: {
                timeoutRemaining: "禁言剩餘"
            }
        },
        showResourceChannels: {
            name: "ShowResourceChannels",
            description: "在頻道清單中顯示隱藏在伺服器資源後面的頻道"
        },
        showSongName: {
            name: "ShowSongName",
            description: "顯示 Spotify 活動的歌曲名稱而不是藝術家"
        },
        sidebarChat: {
            name: "SidebarChat",
            description: "打開另一個頻道或 DM 作為側邊欄或彈出窗口",
            toolbox: {
                label: "開啟上一個聊天記錄"
            },
            context: {
                label: "打開側邊欄聊天"
            },
            channelTitle: {
                chat: "聊天",
                dm: "私訊"
            },
            modal: {
                switch: "切換頻道",
                popout: "彈出聊天視窗",
                popoutClose: "關閉彈出聊天視窗",
                popoutFor: "為 {{channel}} 彈出聊天視窗",
                close: "關閉側邊欄聊天"
            },
            option: {
                persistSidebar: {
                    label: "保留側邊欄聊天",
                    description: "在 Discord 重新啟動時保持側邊欄聊天處於開啟狀態"
                },
                persistPopoutWindows: {
                    label: "保留彈出聊天視窗",
                    description: "Discord 重新啟動後還原已開啟的彈出聊天視窗"
                },
                popoutAlwaysOnTop: {
                    label: "彈出視窗置頂",
                    description: "讓彈出聊天視窗保持在所有其他視窗之上。"
                },
                patchCommunity: {
                    label: "補丁社區",
                    description: "修補社群伺服器具有的頻道瀏覽器或成員標籤等功能。"
                },
                persistedPopoutWindowIds: {
                    description: "已保留的彈出聊天頻道 ID。"
                }
            }
        },
        signature: {
            name: "Signature",
            description: "自動指紋/結束文字",
            option: {
                name: {
                    label: "姓名",
                    description: "將添加到訊息末尾的簽名"
                },
                textHeader: {
                    label: "文字標題",
                    description: "文字前面使用什麼標題"
                },
                showIcon: {
                    label: "顯示圖示",
                    description: "在聊天列中顯示用於切換插件的圖標"
                },
                contextMenu: {
                    label: "內容選單",
                    description: "新增選項以切換聊天輸入上下文選單中的功能"
                },
                isEnabled: {
                    label: "已啟用",
                    description: "切換功能"
                }
            },
            tooltip: {
                enable: "啟用簽名",
                disable: "停用簽名"
            },
            context: {
                enable: "啟用簽名"
            },
            command: {
                signature: {
                    name: "Signature",
                    description: "切換您的簽名",
                    toogle: "切換您的簽名（預設為切換）",
                    enabled: "啟用簽名",
                    disabled: "簽名已停用"
                }
            }
        },
        silentMessageToggle: {
            name: "SilentMessageToggle",
            description: "在聊天欄中新增一個按鈕以切換發送無聲訊息。",
            option: {
                persistState: {
                    label: "持久狀態",
                    description: "如何保持靜默訊息切換狀態",
                    none: "不要堅持（頻道更改時重置）",
                    channels: "在通道之間保持",
                    restarts: "在通道之間保持並重新啟動"
                },
                autoDisable: {
                    label: "自動停用",
                    description: "發送一則訊息後自動再次停用靜默訊息切換"
                }
            },
            tooltip: {
                enable: "啟用靜默訊息",
                disable: "禁用靜默訊息"
            }
        },
        silentTyping: {
            name: "SilentTyping",
            description: "在聊天中隱藏您的打字指示器。",
            command: {
                silentTyping: {
                    name: "SilentTyping",
                    description: "在聊天中隱藏您的打字指示器。",
                    toggle: {
                        name: "toggle",
                        description: "全域切換頻道或公會的功能。",
                        global: "全球的",
                        channel: "頻道",
                        guild: "公會"
                    },
                    chatBarIndicator: {
                        name: "chatBarIndicator",
                        description: "從聊天列上方隱藏其他使用者的打字指示器。"
                    },
                    membersListIndicator: {
                        name: "membersListIndicator",
                        description: "從成員清單中隱藏其他使用者的鍵入指示器。"
                    },
                    chatIcon: {
                        name: "chatIcon",
                        description: "在聊天欄中顯示一個圖標，以便隨時隨地切換插件。"
                    },
                    chatContextMenu: {
                        name: "chatContextMenu",
                        description: "在聊天上下文選單中顯示下拉式選單，以便隨時切換插件設定。"
                    },
                    defaultHidden: {
                        name: "defaultHidden",
                        description: "預設是否隱藏 DM/頻道/公會中的輸入。"
                    }
                }
            },
            content: {
                updated: "更新了無聲打字設定。",
                noChanges: "未對靜默打字設定進行任何更改。"
            },
            tooltip: {
                hidden: "隱藏鍵入 ({{location}})",
                visible: "鍵入可見 ({{location}})",
                global: "鍵入可見（全域）",
                voiceChannel: "在已連線語音頻道的聊天中始終顯示正在輸入",
                temporary: "由於最近傳送了訊息，此頻道中暫時顯示正在輸入"
            },
            option: {
                enabledGlobally: {
                    label: "全球啟用",
                    description: "全域切換您自己的打字指示器的功能。"
                },
                hideChatBoxTypingIndicators: {
                    label: "隱藏聊天框鍵入指示器",
                    description: "從聊天列上方隱藏其他使用者的打字指示器。"
                },
                hideMembersListTypingIndicators: {
                    label: "隱藏成員清單的輸入指示器",
                    description: "從成員清單中隱藏其他使用者的鍵入指示器。"
                },
                chatIcon: {
                    label: "聊天圖示",
                    description: "在聊天列顯示圖示，以便隨時調整外掛。"
                },
                chatIconLeftClickAction: {
                    label: "聊天圖示左鍵動作",
                    description: "What to do when left-clicking the chat icon.",
                    global: "切換全域輸入",
                    channel: "Toggle 頻道輸入",
                    guild: "Toggle 公會打字",
                    settings: "開啟插件設定"
                },
                chatIconMiddleClickAction: {
                    label: "聊天圖示中鍵點擊操作",
                    description: "中鍵點選聊天圖示時要執行的操作。",
                    global: "切換全域輸入",
                    channel: "Toggle 頻道輸入",
                    guild: "Toggle 公會打字",
                    settings: "開啟插件設定"
                },
                chatIconRightClickAction: {
                    label: "聊天圖示右鍵單擊操作",
                    description: "右鍵單擊聊天圖示時該怎麼做。",
                    global: "切換全域輸入",
                    channel: "Toggle 頻道輸入",
                    guild: "Toggle 公會打字",
                    settings: "開啟插件設定"
                },
                chatContextMenu: {
                    label: "聊天內容選單",
                    description: "在聊天上下文選單中顯示下拉式選單，以便隨時修改插件設定。"
                },
                defaultHidden: {
                    label: "預設隱藏",
                    description: "如果啟用，該外掛程式將向下面「停用位置」中未列出的任何 DM/頻道/公會中的其他人隱藏您的輸入內容。如果停用，該外掛程式將向其他未在下面的「啟用位置」中列出的 DM/頻道/公會顯示您的輸入內容。"
                },
                alwaysEnableInActiveVoiceChat: {
                    label: "在活躍語音聊天中始終啟用",
                    description: "在你已連線的語音頻道中輸入時，始終允許顯示你的正在輸入指示器。"
                },
                temporaryEnableThresholdServers: {
                    label: "臨時啟用時長（伺服器）",
                    description: "在伺服器頻道傳送訊息後，在此秒數內臨時允許顯示你的正在輸入指示器。如果該頻道中指示器已可見，此設定無效。"
                },
                temporaryEnableThresholdDirectMessages: {
                    label: "臨時啟用時長（私訊）",
                    description: "在私訊或群組私訊中傳送訊息後，在此秒數內臨時允許顯示你的正在輸入指示器。如果該頻道中指示器已可見，此設定無效。"
                },
                enabledLocations: {
                    label: "啟用的位置",
                    description: "啟用這些 ID 的功能。接受以逗號分隔的 DM ID、頻道 ID 和行會 ID 清單。僅在停用“預設隱藏”時使用。"
                },
                disabledLocations: {
                    label: "殘障場所",
                    description: "停用這些 ID 的功能。接受以逗號分隔的 DM ID、頻道 ID 和行會 ID 清單。僅在啟用“預設隱藏”時使用。"
                }
            },
            text: {
                silentTyping: "靜默輸入",
                enabled: "已啟用",
                chatBarIndicators: "聊天列指示器",
                membersListIndicators: "成員清單指示器",
                guild: "伺服器",
                channel: "頻道",
                global: "全域"
            }
        },
        snowfall: {
            name: "Snowfall",
            description: "讓Discord上下雪吧！",
            about: {
                title: "資訊",
                paragraph: "這個外掛在 Discord 的介面上加入了聖誕節的降雪效果。您可以在下面的設定中變更雪的類型。",
                note: "注意：雖然在大多數電腦上，此插件對效能的影響不會超過普通 Plexcord 擴展，但它可能會在低階系統上導致一些延遲。"
            },
            option: {
                typeOfSnow: {
                    label: "雪的類型",
                    description: "變更顯示的雪的類型（影響性能）。",
                    solid: "堅固（最高性能）",
                    text: "文字（中等表現）",
                    emoji: "影像（最低性能）"
                },
                maxSize: {
                    label: "最大尺寸",
                    description: "最大雪花尺寸"
                },
                speed: {
                    label: "速度",
                    description: "降雪速度（越高=降雪速度越快）"
                },
                flakesPerSecond: {
                    label: "每秒薄片數",
                    description: "每秒的雪花數量（越高=降雪密度越大）"
                }
            }
        },
        sortFriendRequests: {
            name: "SortFriendRequests",
            description: "按收到日期對好友請求進行排序",
            tooltip: "新增 — {{date}}",
            option: {
                showDates: {
                    label: "顯示日期",
                    description: "顯示好友請求的日期"
                }
            }
        },
        soundBoardLogger: {
            name: "SoundBoardLogger",
            description: "記錄語音聊天中播放的所有音板並允許您下載它們",
            tooltip: "打開音板日誌",
            option: {
                savedIds: {
                    label: "已儲存的音板 ID",
                    description: "您一次想要儲存的音板 ID 數量（0 可以讓您儲存無限）",
                    notNumber: "該值不是數字。",
                    cantDecimal: "該值不能是十進制數。",
                    cantNegative: "該值不能為負數。",
                    heading: "您一次想要儲存的音板 ID 數量（0 可以讓您儲存無限）",
                    warning: "警告！將數字設為較低的值將重置日誌！",
                    placeholder: "輸入一個數字"
                },
                fileType: {
                    label: "文件類型",
                    description: "您要儲存文件的格式"
                },
                openLogs: {
                    label: "打開日誌",
                    description: "顯示日誌",
                    button: "打開日誌"
                },
                soundVolume: {
                    label: "音量",
                    description: "切換聲音有多大（0 表示停用）"
                },
                iconLocation: {
                    label: "圖示位置",
                    description: "選擇 SoundBoard 日誌圖示的顯示位置（需要重新啟動）",
                    toolbar: "工具列",
                    chatInput: "聊天輸入"
                }
            },
            modal: {
                title: "音板日誌",
                loading: "正在加載聲音...",
                noLogs: "尚未記錄任何聲音。加入語音聊天即可開始錄音！",
                clearLogs: "清除日誌",
                played: "玩過{{time}}時間{{s}}",
                last: "最後玩過：",
                also: "還玩過：",
                download: "下載",
                copyId: "複製身分證件",
                copied: "ID已複製到剪貼簿！",
                playSound: "播放聲音",
                moreUsers: "其他人用這個聲音...",
                volume: "音板音量"
            }
        },
        splitLargeMessages: {
            name: "SplitLargeMessages",
            description: "在傳送前將過長的訊息拆分為符合 Discord 限制的片段。",
            option: {
                maxLength: {
                    label: "最大訊息長度",
                    description: "訊息分割前的最大長度。設定為 0 以自動偵測。"
                },
                disableFileConversion: {
                    label: "禁用檔案轉換",
                    description: "如果為 true，則停用大消息的檔案轉換。"
                },
                sendDelay: {
                    label: "發送延遲",
                    description: "每段之間的最小延遲（秒）。"
                },
                hardSplit: {
                    label: "硬分割",
                    description: "如果為 true，則在最後一個字元而不是最後一個空格/換行符上分割。"
                },
                splitInSlowmode: {
                    label: "在慢速模式下分割",
                    description: "當慢速模式延遲在設定的最大值內時，允許拆分。"
                },
                slowmodeMax: {
                    label: "慢速模式最大",
                    description: "拆分訊息時允許的最長慢速模式時長。"
                },
                splitMode: {
                    description: "拆分訊息時優先使用此邊界。",
                    label: "拆分模式"
                }
            },
            toast: {
                cannotSplitThisMessage: "由於頻道的慢速模式，無法拆分此訊息。",
                onlySentLengthMessage: "僅傳送了 {{sent}}/{{length}} 部分訊息。",
                unsentCopied: "未傳送的訊息部分已複製到剪貼簿。"
            },
            text: {
                newlines: "換行",
                spaces: "空格",
                strictCharacterLimit: "嚴格字元限制"
            }
        },
        spotifyCrack: {
            name: "SpotifyCrack",
            description: "免費聆聽，語音聊天不會自動暫停，並允許活動在空閒時繼續播放",
            option: {
                noSpotifyAutoPause: {
                    label: "沒有 Spotify 自動暫停",
                    description: "停用 Spotify 自動暫停。"
                },
                keepSpotifyActivityOnIdle: {
                    label: "讓 Spotify 活動保持空閒狀態",
                    description: "閒置時保持 Spotify 活動播放"
                }
            }
        },
        spotifyShareCommands: {
            name: "SpotifyShareCommands",
            description: "透過斜槓指令分享您目前的 Spotify 曲目、專輯或藝人（/track、/album、/artist）",
            command: {
                makeCommand: {
                    description: "在聊天中分享您目前的 Spotify {{type}}",
                    track: "您沒有在 Spotify 上收聽任何曲目。",
                    find: "在 Spotify 上找不到該曲目。"
                }
            }
        },
        startupTimings: {
            name: "StartupTimings",
            description: "將啟動時間新增至「設定」選單",
            modal: {
                title: "啟動時間",
                ended: "追蹤結束於：",
                start: "開始",
                interval: "間隔",
                delta: "三角洲",
                event: "事件",
                serverTrace: "伺服器追蹤",
                loading: "載入中..."
            }
        },
        statusNotifications: {
            name: "StatusNotifications",
            description: "新增狀態變更通知",
            loading: "載入中...",
            option: {
                notificationsSound: {
                    label: "通知聲音",
                    description: "狀態通知時是否播放通知音效？"
                },
                usersList: {
                    label: "使用者列表",
                    description: "狀態變更時通知的使用者列表",
                    empty: "沒有追蹤任何用戶。右鍵單擊使用者並選擇“狀態通知”以新增它們。"
                }
            },
            context: {
                label: "狀態通知",
                notifications: "通知",
                type: {
                    all: "全部",
                    online: "在線的",
                    offline: "離線",
                    none: "沒有任何"
                }
            },
            notification: {
                unknownUser: "使用者",
                title: "狀態通知"
            },
            status: {
                online: "在線的",
                idle: "閒置的",
                dnd: "請勿打擾",
                offline: "離線",
            },
        },
        statusPresets: {
            name: "StatusPresets",
            description: "讓您記住您的狀態並在以後進行設置",
            button: {
                remember: "記住狀態"
            },
            context: {
                edit: "編輯自訂預設",
                set: "設定自訂狀態",
                delete: "刪除預設"
            },
            notification: {
                successfully: "已成功保存狀態"
            }
        },
        steamStatusSync: {
            name: "SteamStatusSync",
            description: "將您的狀態同步到 Steam！ （線上、離開、隱身或離線。）",
            option: {
                onlineStatus: {
                    label: "在線狀態",
                    description: "線上時的 Steam 狀態"
                },
                idleStatus: {
                    label: "空閒狀態",
                    description: "空閒時的 Steam 狀態"
                },
                dndStatus: {
                    label: "請勿打擾狀態",
                    description: "請勿打擾時的 Steam 狀態"
                },
                invisibleStatus: {
                    label: "隱形狀態",
                    description: "隱形時的 Steam 狀態"
                },
                goInvisibleIfActivityIsHidden: {
                    label: "如果活動被隱藏則變得不可見",
                    description: "當隱藏 Discord 活動時將 Steam 狀態設為不可見"
                }
            },
            status: {
                online: "在線的",
                away: "離開",
                invisible: "無形的",
                offline: "離線（斷開 Steam 聊天）",
                disabled: "殘障人士"
            }
        },
        stickerBlocker: {
            name: "StickerBlocker",
            description: "允許您阻止顯示貼紙。",
            option: {
                showGif: {
                    label: "顯示動圖",
                    description: "是否顯示時髦的貓 GIF。"
                },
                showMessage: {
                    label: "顯示留言",
                    description: "是否顯示詳細說明哪個 ID 被封鎖的訊息"
                },
                showButton: {
                    label: "顯示按鈕",
                    description: "是否顯示解鎖GIF的按鈕"
                },
                blockedStickers: {
                    label: "被阻止的貼紙",
                    description: "被封鎖的貼紙 ID 清單（除非您知道自己在做什麼，否則請勿編輯）"
                }
            },
            modal: {
                blocked: "被阻止的貼紙。 ID：{{id}} 姓名：{{name}}",
                unblock: "解鎖 {{name}}"
            },
            context: {
                blockSticker: "塊貼紙",
                unblockSticker: "解鎖貼紙"
            },
            text: {
                failedToRender: "繪製失敗 :("
            }
        },
        stickerPaste: {
            name: "StickerPaste",
            description: "使得在貼紙選擇器中選擇貼紙並將其插入聊天框中而不是立即發送"
        },
        streaks: {
            name: "Streaks",
            description: "當你與某位使用者連續多天互傳私訊時，在其旁邊顯示連續天數。",
            tooltip: "連續 {{count}} 天",
            tooltipExpiring: "連續 {{count}} 天 — 今天傳個訊息來保持吧！",
            option: {
                account: {
                    description: "登入或登出 Streaks API。連續記錄儲存在 API 上，因此需要登入才能記錄。",
                    login: "登入 Streaks API",
                    logout: "登出 Streaks API"
                },
                eliteColor: "精英連續顏色（100+ 天）",
                diamondColor: "鑽石連續顏色（60+ 天）",
                platinumColor: "白金連續顏色（45+ 天）",
                goldColor: "黃金連續顏色（30+ 天）",
                silverColor: "白銀連續顏色（14+ 天）",
                bronzeColor: "青銅連續顏色（7+ 天）",
                defaultColor: "預設連續顏色（1+ 天）"
            },
            toast: {
                authFailed: "授權失敗：{{error}}",
                failedToAuthorizeMessage: "授權失敗：{{message}}",
                authorizationExpired: "Streaks 授權已過期。請在 Streaks 外掛設定中重新授權。"
            }
        },
        streamerModeOnStream: {
            name: "StreamerModeOnStream",
            description: "當您在 Discord 中開始串流時自動啟用串流模式"
        },
        streamingCodecDisabler: {
            name: "StreamingCodecDisabler",
            description: "為直播與相機停用你選擇的視訊編解碼器。",
            option: {
                disableAv1Codec: {
                    label: "停用 AV1 編解碼器",
                    description: "讓 Discord 不在直播與相機中使用 AV1。"
                },
                disableH265Codec: {
                    label: "停用 H265 編解碼器",
                    description: "讓 Discord 不在直播與相機中使用 H265。"
                },
                disableH264Codec: {
                    label: "停用 H264 編解碼器",
                    description: "讓 Discord 不在直播與相機中使用 H264。"
                },
                disableVP8Codec: {
                    label: "停用 VP8 編解碼器",
                    description: "讓 Discord 不在直播與相機中使用 VP8。"
                },
                disableVP9Codec: {
                    label: "停用 VP9 編解碼器",
                    description: "讓 Discord 不在直播與相機中使用 VP9。"
                }
            }
        },
        superReactionTweaks: {
            name: "SuperReactionTweaks",
            description: "自訂超級反應同時播放的限制，預設超級反應",
            option: {
                superReactByDefault: {
                    label: "預設超級反應",
                    description: "反應選擇器將預設為超級反應"
                },
                unlimitedSuperReactionPlaying: {
                    label: "無限超級反應播放",
                    description: "取消超級反應同時播放的限制"
                },
                superReactionPlayingLimit: {
                    label: "超級反應遊戲限制",
                    description: "立即播放最大超級反應。設定為 0 以停用超級反應"
                }
            }
        },
        textReplace: {
            name: "TextReplace",
            description: "替換訊息中的文字。您可以在 Plexcord 伺服器的 #textreplace-rules 頻道中找到預先制定的規則",
            option: {
                replace: {
                    label: "代替",
                    string: "簡單替換",
                    stringDescription: "簡單的尋找與取代規則。例如，尋找 'brb' 並將其替換為 'be right back'",
                    regex: "Regex 替換",
                    regexDescription: "使用正則表達式進行更強大的替換。本部分適用於進階使用者。如果你不理解，可以直接忽略",
                    myMessages: "應用於您的訊息（所有人都可見）",
                    othersMessages: "套用於其他人的訊息（僅對您可見）",
                    allMessages: "適用於所有訊息"
                },
                stringRules: {
                    label: "字串規則",
                    description: "使用字串匹配替換文字的規則。"
                },
                regexRules: {
                    label: "正規表示式規則",
                    description: "使用正規表示式取代文字的規則。"
                }
            },
            modal: {
                name: "名稱",
                nameDescription: "可選的名稱，協助你辨識此規則。",
                search: "搜尋規則...",
                noResults: "沒有符合搜尋條件的規則。",
                title: "測試規則",
                find: "尋找",
                findRegex: "Regex 模式",
                findText: "要取代的文字",
                replace: "取代",
                replaceDescription: "用來取代找到文字的內容",
                includes: "僅當包含",
                includesDescription: "只有當訊息包含此文字時才會套用此規則。這是可選的",
                type: "輸入一則訊息",
                applied: "已套用規則的訊息",
                delete: "刪除規則",
                add: "新增規則",
                empty: "空規則",
                rule: "規則",
            },
            text: {
                optionallyOnlyApplyThis: "選用：僅當訊息包含此文字時才套用此規則。",
                emptyRule: "空規則 {{number}}",
                ruleWithFind: "規則 {{number}} - {{find}}"
            }
        },
        themeAttributes: {
            name: "ThemeAttributes",
            description: "出於主題目的向各種元素添加資料屬性"
        },
        timezones: {
            name: "Timezones",
            description: "在個人資料和訊息標題中顯示使用者的當地時間",
            button: {
                wantToSave: "想要將您的時區儲存到資料庫中嗎？按一下此處進行設定。",
                yourLocalTimezone: "（您當地的時區）"
            },
            context: {
                set: "設定本地時區"
            },
            toast: {
                refresh: {
                    successfully: "時區刷新成功！",
                    failed: "時區刷新失敗！",
                    failedTo: "刷新時區失敗。"
                },
                update: {
                    successfully: "時區更新成功！",
                    failed: "設定時區失敗。"
                },
                delete: {
                    successfully: "時區刪除成功！",
                    failed: "刪除時區失敗。"
                },
                auth: {
                    failed: "認證失敗。",
                    success: "授權成功！"
                }
            },
            toolbox: {
                set: "設定資料庫時區",
                refresh: "刷新資料庫時區"
            },
            option: {
                showOwnTimezone: {
                    label: "顯示自己的時區",
                    description: "在個人資料和訊息標題中顯示您自己的時區"
                },
                twentyFourHourTime: {
                    label: "24 小時制",
                    description: "以 24 小時制顯示時間"
                },
                showTimezoneInfo: {
                    label: "顯示時區資訊",
                    description: "在時間旁邊顯示時區訊息"
                },
                showMessageHeaderTime: {
                    label: "顯示訊息標題時間",
                    description: "在郵件標題中顯示時間"
                },
                showProfileTime: {
                    label: "顯示個人資料時間",
                    description: "在使用者個人資料中顯示時間"
                },
                useDatabase: {
                    label: "使用資料庫時區",
                    description: "啟用資料庫以取得使用者時區"
                },
                preferDatabaseOverLocal: {
                    label: "優先選擇資料庫而非本地",
                    description: "對於時區，優先選擇資料庫而不是本地存儲"
                },
                databaseUrl: {
                    label: "資料庫網址",
                    description: "時區資料庫伺服器的 URL"
                },
                setDatabaseTimezone: {
                    label: "設定資料庫時區",
                    description: "在資料庫上設定您的時區",
                    setTimezone: "設定資料庫時區"
                },
                resetDatabaseTimezone: {
                    label: "重置資料庫時區",
                    description: "重置資料庫上的時區",
                    failed: "重置資料庫時區失敗"
                },
                askedTimezone: {
                    label: "詢問時區",
                    description: "是否要求使用者設定時區"
                },
                recipientTimezoneInDms: {
                    label: "私訊中顯示對方時區",
                    description: "在私訊中，在你的訊息上顯示對方的時區"
                },
                showLocalTimezone: {
                    label: "顯示本機時區",
                    description: "顯示本機時區，而不僅是「本機」"
                }
            },
            modal: {
                title: "時區",
                select: "選擇時區",
                selectPlaceholder: "選擇時區",
                delete: "刪除時區",
                save: "節省"
            },
            text: {
                invalidResponseFormat: "無效的回應格式"
            }
        },
        toastNotifications: {
            name: "ToastNotifications",
            description: "每當您收到直接訊息時，都會顯示 Toast 通知。",
            notification: {
                call: "已開始與您通話！",
                recipient: {
                    add: "{{target}} 已由 {{actor}} 加入群組。",
                    remove: "{{target}} 已被 {{actor}} 從群組中刪除。",
                    left: "離開了團體。"
                },
                channel: {
                    change: {
                        name: "Changed the channel name to {{name}}.",
                        icon: "更改了頻道圖示。"
                    },
                    pinned: "置頂了一則訊息。"
                },
                sent: {
                    embed: "發送了嵌入。",
                    sticker: "發了一張貼紙。",
                    attachment: "依戀："
                },
                redacted: "訊息內容已編輯。",
                friend: {
                    accept: "{{user}} 現在是你的朋友",
                    acceptBody: "現在您可以直接向他們發送訊息。",
                    request: "{{user}} 向您發送了好友請求。",
                    requestBody: "您可以在「好友」標籤中接受或拒絕。"
                },
                example: {
                    title: "通知範例",
                    body: "這是一個通知正文範例。"
                }
            },
            modal: {
                dismiss: "關閉通知",
                attachments: "{{attachments}} 附件{{s}} {{were}} 已傳送。"
            },
            option: {
                position: {
                    label: "位置",
                    description: "Toast通知的位置",
                    topRight: "右上",
                    topLeft: "左上",
                    bottomRight: "右下角",
                    bottomLeft: "左下角"
                },
                timeout: {
                    label: "暫停",
                    description: "將顯示通知的時間（以秒為單位）"
                },
                opacity: {
                    label: "不透明度",
                    description: "Toast通知的不透明度"
                },
                determineServerNotifications: {
                    label: "確定伺服器通知",
                    description: "根據伺服器通知設定確定是否顯示通知"
                },
                respectDoNotDisturb: {
                    label: "遵循請勿打擾",
                    description: "當你的狀態為請勿打擾時不顯示通知。"
                },
                directMessages: {
                    label: "直接訊息",
                    description: "顯示直接訊息的通知"
                },
                groupMessages: {
                    label: "群組訊息",
                    description: "顯示群組訊息的通知"
                },
                friendServerNotifications: {
                    label: "好友和伺服器通知",
                    description: "當朋友在與您共享的伺服器中發送訊息時顯示通知"
                },
                friendActivity: {
                    label: "好友活動",
                    description: "顯示新增某人或接收好友請求的通知"
                },
                notifyFor: {
                    label: "通知對象",
                    description: "建立用於接收通知的通道 ID 清單（以逗號分隔）"
                },
                ignoreUsers: {
                    label: "忽略用戶",
                    description: "建立使用者 ID 清單以忽略其所有通知（以逗號分隔）"
                },
                exampleButton: {
                    label: "範例按鈕",
                    description: "顯示 Toast 通知範例。",
                    show: "顯示通知範例"
                }
            }
        },
        toggleVideoBind: {
            name: "ToggleVideoBind",
            description: "新增可自訂的綁定來切換網路攝影機。",
            option: {
                keyBind: {
                    label: "按鍵綁定",
                    description: "按下該鍵即可切換網路攝影機。"
                },
                reqCtrl: {
                    label: "需要 Ctrl",
                    description: "要求保持控制權。"
                },
                reqShift: {
                    label: "需要輪班",
                    description: "要求舉行輪班。"
                },
                reqAlt: {
                    label: "需要替代",
                    description: "要求按住 Alt。"
                }
            }
        },
        translate: {
            name: "Translate",
            description: "使用 Google Translate 或 DeepL 翻譯訊息",
            tooltip: {
                label: "翻譯"
            },
            context: {
                translate: "翻譯",
                open: "開啟翻譯模態",
                auto: "自動翻譯已啟用"
            },
            option: {
                receivedInput: {
                    label: "收到的輸入",
                    description: "接收訊息的語言應翻譯自"
                },
                receivedOutput: {
                    label: "接收到的輸出",
                    description: "收到訊息的語言應翻譯為"
                },
                sentInput: {
                    label: "發送輸入",
                    description: "您自己的訊息應翻譯的語言"
                },
                sentOutput: {
                    label: "發送輸出",
                    description: "您自己的訊息應翻譯成的語言"
                },
                service: {
                    label: "翻譯服務",
                    description: "DeepL 需要 DeepL Pro 的付費 API 金鑰",
                    descriptionWeb: "翻譯服務（不支援網路！）",
                    google: "Google翻譯",
                    deepl: "DeepL 免費版 - 需要 API 金鑰",
                    deeplPro: "DeepL Pro - 需要 API 金鑰",
                    kagi: "Kagi 翻譯 - 需要 API 金鑰"
                },
                kagiSession: {
                    label: "Kagi 會話",
                    description: "從 https://kagi.com/settings?p=user_details 取得您的會話權標（Token）"
                },
                deeplApiKey: {
                    label: "DeepL API 金鑰",
                    description: "DeepL API 金鑰",
                    placeholder: "從 https://deepl.com/your-account 取得您的 API 金鑰"
                },
                autoTranslate: {
                    label: "自動翻譯",
                    description: "發送前自動翻譯您的訊息。您也可以按住 Shift/右鍵單擊翻譯按鈕來切換此功能"
                },
                showAutoTranslateTooltip: {
                    label: "顯示自動翻譯工具提示",
                    description: "每當自動翻譯訊息時，都會在 ChatBar 按鈕上顯示工具提示"
                }
            },
            modal: {
                title: "翻譯",
                select: "選擇語言",
                auto: "自動翻譯",
                dismiss: "解僱",
                translated: "翻譯自 {{from}}",
                failed: {
                    to: "翻譯失敗 {{text}}",
                    connect: "無法連接到 DeepL API："
                },
                wrong: "出了點問題。如果此問題仍然存在，請檢查控制台或在支援伺服器中尋求協助。",
                deepl: {
                    api: "DeepL API 超出配額。回到谷歌翻譯。",
                    apiKey: "未設定 DeepL API 金鑰。重置為谷歌",
                    auth: "DeepL API 金鑰或版本無效"
                },
                autoTranslateEnabled: {
                    title: "啟用 Plexcord 自動翻譯",
                    body: "您剛剛啟用了自動翻譯！任何訊息在發送之前都會自動翻譯。",
                    confirm: "停用自動翻譯",
                    cancel: "知道了",
                    secondaryConfirm: "不再顯示"
                }
            },
            button: {
                manageLanguages: "自訂翻譯語言與自動翻譯"
            }
        },
        typingIndicator: {
            name: "TypingIndicator",
            description: "如果有人在頻道上打字，則添加一個指示器。",
            option: {
                includeCurrentChannel: {
                    label: "包括當前頻道",
                    description: "是否顯示目前所選頻道的打字指示"
                },
                includeMutedChannels: {
                    label: "包括靜音通道",
                    description: "是否顯示靜音通道的打字指示器。"
                },
                includeIgnoredUsers: {
                    label: "包括被忽略的用戶",
                    description: "是否為被忽略的使用者顯示輸入指示符。"
                },
                includeBlockedUsers: {
                    label: "包括被封鎖的用戶",
                    description: "是否為被封鎖的使用者顯示打字指示器。"
                },
                indicatorMode: {
                    label: "指示燈模式",
                    description: "指標該如何顯示？",
                    both: "頭像和動畫點",
                    dots: "動畫點",
                    avatars: "頭像"
                }
            }
        },
        typingTweaks: {
            name: "TypingTweaks",
            description: "在打字指示器中顯示頭像和角色顏色",
            option: {
                showAvatars: {
                    label: "顯示多個用戶",
                    description: "在打字指示器中顯示頭像"
                },
                showRoleColors: {
                    label: "顯示角色顏色",
                    description: "在打字指示器中顯示角色顏色"
                },
                alternativeFormatting: {
                    label: "替代格式",
                    description: "當多個用戶打字時顯示更有用的消息"
                },
                amITyping: {
                    label: "我在打字嗎",
                    description: "顯示其他人是否可以看到您正在打字"
                }
            },
            others: {
                areTyping: "和 {{count}} 其他人正在輸入..."
            }
        },
        unindent: {
            name: "Unindent",
            description: "修剪程式碼區塊的前導縮排"
        },
        unitConverter: {
            name: "UnitConverter",
            description: "將公制單位轉換為英制單位，反之亦然",
            tooltip: "轉換單位",
            option: {
                myUnits: {
                    label: "我的單位",
                    description: "您使用的單位以及想要轉換成的單位。預設為英制",
                    imperial: "帝國",
                    metric: "公制"
                }
            },
            button: {
                dismiss: "解僱"
            }
        },
        unlimitedAccounts: {
            name: "UnlimitedAccounts",
            description: "增加您可以新增的帳戶數量。",
            option: {
                maxAccounts: {
                    label: "最大帳戶數",
                    description: "可新增的帳戶數量，0表示無限制"
                }
            }
        },
        unlockedAvatarZoom: {
            name: "UnlockedAvatarZoom",
            description: "讓您在更改頭像時進一步放大影像裁切工具",
            option: {
                zoomMultiplier: {
                    label: "變焦倍數",
                    description: "變焦倍數"
                }
            }
        },
        unsuppressEmbeds: {
            name: "UnsuppressEmbeds",
            description: "允許您取消抑制訊息中的嵌入",
            context: {
                unsuppress: "取消抑制嵌入",
                suppress: "抑制嵌入"
            }
        },
        uselessInfo: {
            name: "UselessInfo",
            description: "在 Discord 中顯示隨機無用資訊；快捷鍵和間距可調。",
            recording: "記錄...",
            record: "記錄",
            option: {
                delay: {
                    label: "通知間隔",
                    description: "通知顯示間隔（以分鐘為單位）"
                },
                historyHotkey: {
                    label: "歷史面板快捷方式",
                    description: "顯示先前顯示事實的歷史記錄的熱鍵"
                },
                randomFactHotkey: {
                    label: "隨機事實快捷方式",
                    description: "打開隨機事實面板的熱鍵"
                },
                sameFact: {
                    label: "避免顯示相同的項目",
                    description: "在顯示所有事實之前，避免多次顯示相同的事實"
                },
                lastNFacts: {
                    label: "需要避免多少近期事件",
                    description: "最近顯示的事實數量，以避免重複（0 = 全部）"
                }
            },
            modal: {
                title: "無用資訊",
                history: {
                    none: "還沒有事實。使用快捷方式或等待。",
                    source: "來源"
                },
                showRandom: "顯示隨機",
                close: "關閉"
            },
            notification: {
                title: "你可知道？"
            }
        },
        userMessagesPronouns: {
            name: "UserMessagesPronouns",
            description: "在訊息標題中顯示使用者代名詞",
            option: {
                pronounsFormat: {
                    label: "代名詞格式",
                    description: "代名詞在聊天中出現的格式",
                    lowercase: "小寫",
                    capitalized: "大寫"
                },
                showSelf: {
                    label: "展現自我",
                    description: "啟用或停用為自己顯示代名詞"
                }
            }
        },
        userVoiceShow: {
            name: "UserVoiceShow",
            description: "當使用者處於語音頻道時顯示指示器",
            option: {
                showInUserProfileModal: {
                    label: "在使用者個人資料模式中顯示",
                    description: "在使用者個人資料中的姓名旁邊顯示使用者的語音頻道指示器"
                },
                showInMemberList: {
                    label: "顯示在會員清單中",
                    description: "在成員和 DM 清單中顯示使用者的語音通道指示器"
                },
                showInMessages: {
                    label: "在訊息中顯示",
                    description: "在訊息中顯示用戶的語音通道指示器"
                }
            },
            modal: {
                inVoiceChat: "語音聊天中"
            },
            notification: {
                cannotJoin: "您無法加入使用者的語音頻道。"
            }
        },
        uSRBG: {
            name: "USRBG",
            description: "顯示來自 USRBG 的用戶橫幅，允許任何人在沒有 Nitro 的情況下獲得橫幅",
            option: {
                nitroFirst: {
                    label: "硝基第一",
                    description: "如果同時存在 Nitro 和 USRBG 橫幅，則使用橫幅",
                    nitro: "硝基旗幟",
                    usrbg: "美國RBG旗幟"
                },
                voiceBackground: {
                    label: "語音背景",
                    description: "使用 USRBG 橫幅作為語音聊天背景"
                }
            },
            button: "獲得您自己的 USRBG 橫幅"
        },
        validReply: {
            name: "ValidReply",
            description: "修正了將滑鼠懸停在回復上時「無法載入訊息」的問題"
        },
        validUser: {
            name: "ValidUser",
            description: "修正顯示為「@unknown-user」的未知使用者的提及（將滑鼠懸停在提及上即可修復）",
            badges: {
                discordBugHunter: "不和諧蟲子獵人",
                moderatorProgramsAlumni: "主持人節目校友",
                discordStaff: "不和諧法杖",
                hypeSquadEvents: "HypeSquad 活動",
                bravery: "HypeSquad 勇敢",
                brilliance: "HypeSquad 輝煌",
                balance: "HypeSquad 平衡",
                partneredServerOwner: "合作伺服器擁有者",
                nitro: "不和諧硝基",
                earlySupporter: "早期支持者",
                earlyVerifiedBotDeveloper: "早期驗證的機器人開發人員"
            }
        },
        voiceChatDoubleClick: {
            name: "VoiceChatDoubleClick",
            description: "透過雙擊而不是點擊加入語音聊天"
        },
        vcNarrator: {
            name: "VCNarrator",
            description: "當用戶加入、離開或移動語音頻道時透過講述者進行宣布",
            option: {
                voice: {
                    label: "嗓音"
                },
                volume: {
                    label: "體積",
                    description: "旁白音量"
                },
                rate: {
                    label: "速度",
                    description: "講述人速度"
                },
                sayOwnName: {
                    label: "說出自己的名字",
                    description: "說出自己的名字"
                },
                latinOnly: {
                    label: "僅拉丁語",
                    description: "在說出名字之前先將非拉丁字元從名字中刪除"
                },
                joinMessage: {
                    label: "加盟留言",
                    description: "加盟留言"
                },
                leaveMessage: {
                    label: "留言",
                    description: "留言"
                },
                moveMessage: {
                    label: "移動留言",
                    description: "移動留言"
                },
                muteMessage: {
                    label: "靜音訊息",
                    description: "靜音訊息（目前僅限自己）"
                },
                unmuteMessage: {
                    label: "取消靜音訊息",
                    description: "取消訊息靜音（目前僅限自己）"
                },
                deafenMessage: {
                    label: "震耳欲聾的消息",
                    description: "震耳欲聾的消息（目前只有自己）"
                },
                undeafenMessage: {
                    label: "震耳欲聾的消息",
                    description: "不聾的消息（目前只有自己）"
                }
            },
            modal: {
                title: "播放範例聲音",
                voiceTitle: "嗓音",
                voice: "選擇聲音",
                languageTitle: "語言",
                language: "選擇語言",
                noVoice: "找不到旁白的聲音。",
                linuxNote: "安裝語音調度程式或 espeak 並使用 --enable-speech-dispatcher 標誌執行 Discord",
                someNarrator: "嘗試在作業系統的講述人設定中安裝一些",
                dontHaveEnglish: "您沒有安裝任何英文語音，因此旁白可能聽起來很奇怪",
                customiseMessages: "您可以自定义下面的语音消息。您可以透過將特定訊息設為空來停用它們",
                placeholdersInfo: "特殊佔位符 {{USER}}、{{DISPLAY_NAME}}、{{NICKNAME}} 和 {{CHANNEL}} 將分別替換為用戶名（如果是你自己則什麼都沒有）、用戶的顯示名、用戶在當前伺服器上的暱稱和頻道名稱"
            }
        },
        viewIcons: {
            name: "ViewIcons",
            description: "使用戶設定檔中的頭像和橫幅可單擊，在使用者、伺服器和群組頻道上下文選單中新增「檢視頭像/橫幅」條目。",
            context: {
                view: {
                    avatar: "查看頭像",
                    serverAvatar: "查看伺服器頭像",
                    icon: "查看圖示",
                    banner: "查看橫幅"
                }
            },
            option: {
                format: {
                    label: "格式",
                    description: "選擇用於非動畫圖像的圖像格式。動畫圖像將始終使用 .gif"
                },
                imgSize: {
                    label: "影像尺寸",
                    description: "要使用的圖像尺寸"
                }
            },
            text: {
                viewAvatarDecoration: "檢視頭像裝飾"
            }
        },
        viewRaw: {
            name: "ViewRaw",
            description: "複製並查看任何訊息、頻道或公會的原始內容/數據",
            context: {
                copyLeft: "複製原始資料（左鍵單擊）/查看原始資料（右鍵單擊）",
                copyRight: "複製原始資料（右鍵單擊）/查看原始資料（左鍵單擊）",
                view: "查看原始數據"
            },
            option: {
                popoverButton: {
                    label: "彈出按鈕",
                    description: "在訊息彈出視窗中顯示一個按鈕以查看訊息的原始內容/資料。"
                },
                clickMethod: {
                    label: "點擊方式",
                    description: "更改按鈕以查看任何訊息的原始內容/數據。",
                    left: "左鍵點選可查看原始內容。",
                    right: "右鍵單擊可查看原始內容。"
                },
                messageContextMenu: {
                    description: "在訊息右鍵選單中顯示",
                    label: "訊息右鍵選單"
                },
                sortKeys: {
                    description: "依字母順序排序原始資料的鍵。",
                    label: "排序鍵"
                },
                stripSensitiveData: {
                    description: "從原始資料中移除敏感資料，例如你的電子郵件與電話號碼。",
                    label: "移除敏感資料"
                }
            },
            modal: {
                title: "查看原始數據",
                content: "訊息內容",
                data: "{{type}} 數據",
                copied: "{{type}} 資料已複製到剪貼簿！",
                copy: "複製 {{type}} JSON",
                copiedContent: "內容已複製到剪貼簿！",
                copyContent: "複製原始內容"
            },
            types: {
                message: "訊息",
                channel: "頻道",
                guild: "公會",
                role: "角色",
                user: "使用者"
            },
            text: {
                copyTypeData: "複製 {{type}} 資料",
                rawTypeData: "{{type}} 原始資料",
                messageData: "訊息資料"
            }
        },
        voiceButtons: {
            name: "VoiceButtons",
            description: "直接從語音通話面板快速對任何使用者進行私人聊天、靜音或聾啞。",
            option: {
                showChatButton: {
                    label: "顯示聊天按鈕",
                    description: "是否要顯示聊天按鈕"
                },
                showMuteButton: {
                    label: "顯示靜音按鈕",
                    description: "是否要顯示靜音按鈕"
                },
                showDeafenButton: {
                    label: "顯示震耳欲聾的按鈕",
                    description: "是否要顯示震耳欲聾的按鈕"
                },
                muteSoundboard: {
                    label: "音板靜音",
                    description: "點擊“Deafen”按鈕即可切換音板。"
                },
                disableVideo: {
                    label: "停用影片",
                    description: "點擊“Deafen”按鈕即可切換影片。"
                },
                useServer: {
                    label: "使用伺服器",
                    description: "當您有權限時，請使用伺服器靜音/失聰而不是本機靜音。"
                },
                serverSelf: {
                    label: "伺服器自建",
                    description: "使用靜音/耳聾時，在伺服器上將自己靜音。"
                },
                showButtonsSelf: {
                    label: "在自身上顯示按鈕",
                    description: "是否要為您自己的使用者顯示按鈕。與其他按鈕的功能相同，只是它會在單擊按鈕時打開 DM 面板並讓您自己靜音/失聰。",
                    display: "展示",
                    hide: "隱藏",
                    disable: "停用"
                },
                whichNameToShow: {
                    label: "顯示哪個名字",
                    description: "選擇是否在工具提示中顯示暱稱或使用者名稱。",
                    global: "全球名稱",
                    username: "使用者名稱",
                    both: "兩個都"
                },
                buttonPosition: {
                    label: "按鈕位置",
                    description: "選擇按鈕的顯示位置。",
                    left: "左邊",
                    right: "正確的",
                }
            },
            tooltip: {
                navigate: "導航至 DM",
                open: "使用 {{username}} 開啟 DM",
                yourself: "你自己",
                serverMute: "伺服器靜音",
                serverDeafen: "伺服器聾",
                mute: "沉默的",
                deafen: "聾啞人士",
                unmute: "取消靜音",
                undeafen: "不聾",
                serverUnmute: "伺服器取消靜音",
                serverUndeafen: "伺服器不聾"
            }
        },
        voiceChannelLog: {
            name: "VoiceChannelLog",
            description: "記錄誰加入和離開語音頻道",
            context: {
                view: "查看頻道日誌"
            },
            modal: {
                joined: "已加入 <#{{channel}}>",
                left: "左 <#{{channel}}>",
                movedTo: "移至 <#{{channel}}>",
                movedFrom: "移自 <#{{channel}}>",
                noLogs: "沒有可顯示的日誌。",
                logs: "{{channel}} 日誌"
            },
            option: {
                mode: {
                    label: "模式",
                    description: "如何顯示語音頻道日誌",
                    menu: "日誌選單",
                    associated: "直接登入關聯聊天",
                    both: "登入聊天和登入選單"
                },
                voiceChannelChatSelf: {
                    label: "語音頻道自我聊天",
                    description: "在語音頻道中記錄您自己的語音頻道事件"
                },
                voiceChannelChatSilent: {
                    label: "語音頻道聊天靜音",
                    description: "語音頻道聊天中的加入/離開/移動訊息將靜音"
                },
                voiceChannelChatSilentSelf: {
                    label: "語音頻道聊天無聲自我",
                    description: "如果您在語音頻道中，語音頻道聊天中的加入/離開/行動訊息將保持靜音"
                },
                ignoreBlockedUsers: {
                    label: "忽略被封鎖的用戶",
                    description: "不記錄被封鎖的用戶"
                }
            }
        },
        voiceChatUtilities: {
            name: "VoiceChatUtilities",
            description: "該外掛程式可讓您在整個通道上執行多個操作（移動、靜音、斷開連接等）（最初由 dutake 開發）",
            option: {
                waitAfter: {
                    label: "行動後等待",
                    description: "等待之前要執行的 API 操作數量（以避免速率限制）"
                },
                waitSeconds: {
                    label: "等待幾秒鐘",
                    description: "每個操作之間的等待時間（以秒為單位）"
                }
            },
            context: {
                voiceTools: "語音工具",
                mentionAll: "提及所有用戶",
                disconnectAll: "全部斷開連接",
                muteAll: "全部靜音",
                unmuteAll: "全部取消靜音",
                deafenAll: "全部震耳欲聾",
                undeafenAll: "全部不聾",
                moveAll: "全部移動"
            }
        },
        voiceDownload: {
            name: "VoiceDownload",
            description: "新增語音訊息下載。 （開啟新的瀏覽器標籤）",
            context: {
                download: "下載語音留言"
            }
        },
        voiceMessages: {
            name: "VoiceMessages",
            description: "允許您像在行動裝置上一樣發送語音訊息。為此，請右鍵單擊上傳按鈕，然後按一下傳送語音訊息。",
            option: {
                noiseSuppression: {
                    label: "噪音抑制",
                    description: "噪音抑制"
                },
                echoCancellation: {
                    label: "迴聲消除",
                    description: "迴聲消除"
                }
            },
            notification: {
                failed: {
                    upload: "上傳語音留言失敗。",
                    start: "無法開始錄製。",
                    finish: "無法完成錄製。"
                }
            },
            context: {
                sendVoiceMessage: "傳送語音留言",
                missingPermissions: "（缺少權限）"
            },
            modal: {
                record: "錄製語音留言",
                upload: "上傳文件",
                preview: "預覽",
                failed: "無法解析所選音訊檔案：",
                oggOpus: "語音訊息必須是 OggOpus 才能在 iOS 上播放。該檔案是 {{type}} 因此無法在 iOS 上播放。",
                fix: "要修復它，請先轉換為 OggOpus，例如使用 {{link}}",
                sending: "正在發送語音訊息...請耐心等待。",
                stop: "停止錄音",
                start: "開始錄音",
                resume: "恢復錄音",
                pause: "暫停錄音",
                recording: "記錄",
                send: "傳送",
            },
            text: {
                convertioWebConverter: "convertio 網頁轉換器"
            }
        },
        volumeBooster: {
            name: "VolumeBooster",
            description: "允許您將使用者和串流音量設定為高於預設最大值",
            option: {
                multiplier: {
                    label: "乘數",
                    description: "音量倍增器"
                }
            }
        },
        webContextMenus: {
            name: "WebContextMenus",
            description: "重新加入網頁版 Discord 中缺少的上下文選單：連結和圖片（複製/開啟連結/圖片）、文字區域（複製、剪下、貼上、拼字檢查）",
            option: {
                addBack: {
                    label: "添加回來",
                    description: "重新新增圖片、連結和聊天輸入列的 Discord 上下文選單"
                }
            }
        },
        webKeybinds: {
            name: "WebKeybinds",
            description: "重新加入 Discord 網頁版缺少的快速鍵。僅在 Plextron/Legcord 中完全可用，在瀏覽器中不可用",
            option: {
                showNavigationButtons: {
                    description: "在標題列顯示上一頁/下一頁導覽按鈕。",
                    label: "顯示導覽按鈕"
                },
                overrideCommonKeybinds: {
                    description: "允許 Discord 覆寫最常用的分頁導覽快速鍵（ctrl+t、ctrl+shift+t、ctrl+tab、ctrl+shift+tab、ctrl+n）。僅在少數允許網站快速鍵優先的瀏覽器中有效。",
                    label: "覆寫常用快速鍵"
                }
            }
        },
        webScreenShareFixes: {
            name: "WebScreenShareFixes",
            description: "取消了 Chromium 和 Plextron 用戶端上 2500kbps 的比特率上限。",
            option: {
                experimentalAV1Support: {
                    label: "實驗性 AV1 支持",
                    description: "啟用 AV1 編解碼器支援。可能會導致無限加載流等問題"
                }
            }
        },
        whoReacted: {
            name: "WhoReacted",
            description: "呈現對訊息做出反應的用戶的頭像",
            option: {
                avatarClick: {
                    label: "頭像點擊",
                    description: "切換點擊反應中的頭像"
                },
                clickableAvatars: {
                    description: "啟用後，點擊做出反應的使用者頭像將開啟其個人檔案，而不是新增該反應",
                    label: "可點擊頭像"
                }
            }
        },
        whosWatching: {
            name: "WhosWatching",
            description: "將滑鼠懸停在螢幕分享圖示上以查看哪些用戶正在觀看您的直播",
            modal: {
                noSpectator: "沒有觀眾"
            },
            option: {
                showPanel: {
                    label: "顯示面板",
                    description: "在螢幕分享面板下顯示觀眾"
                }
            }
        },
        writeUpperCase: {
            name: "WriteUpperCase",
            description: "將訊息輸入中每個句子的第一個字母改為大寫",
            option: {
                blockedWords: {
                    label: "被阻止的單字",
                    description: "字串不要大寫（用逗號分隔）"
                }
            }
        },
        xSOverlay: {
            name: "XSOverlay",
            description: "將 Discord 通知轉寄至 XSOverlay，以便在 VR 中輕鬆查看",
            notification: {
                call: {
                    title: "{{user}} 正在打電話給您。",
                    content: "來電"
                },
                message: {
                    reply: "(回覆)",
                    embed: "[嵌入]",
                    onlyEmbed: "已發送訊息嵌入",
                    sticker: "[貼紙]",
                    onlySticker: "已發送貼紙",
                    image: "影像",
                    attachment: "依戀"
                },
                test: {
                    title: "Plexcord 您好！",
                    content: "這是測試通知！ *爆炸*",
                    button: "發送測試通知"
                }
            },
            option: {
                webSocketPort: {
                    label: "WebSocket 端口",
                    description: "WebSocket 端口"
                },
                preferUDP: {
                    label: "首選UDP",
                    description: "如果您使用舊版的 XSOverlay 無法透過 WebSockets 連接，請啟用。此設定在網路上被忽略。"
                },
                botNotifications: {
                    label: "機器人通知",
                    description: "允許機器人通知"
                },
                serverNotifications: {
                    label: "伺服器通知",
                    description: "允許伺服器通知"
                },
                dmNotifications: {
                    label: "DM 通知",
                    description: "允許私訊通知"
                },
                groupDmNotifications: {
                    label: "群組 DM 通知",
                    description: "允許群組 DM 通知"
                },
                callNotifications: {
                    label: "來電通知",
                    description: "允許來電通知"
                },
                pingColor: {
                    label: "平色",
                    description: "使用者提及顏色"
                },
                channelPingColor: {
                    label: "通道 Ping 顏色",
                    description: "頻道提及顏色"
                },
                soundPath: {
                    label: "聲音路徑",
                    description: "通知聲音（預設/警告/錯誤）"
                },
                timeout: {
                    label: "暫停",
                    description: "通知持續時間（秒）"
                },
                lengthBasedTimeout: {
                    label: "基於長度的超時",
                    description: "透過訊息長度延長持續時間"
                },
                opacity: {
                    label: "不透明度",
                    description: "通知不透明度"
                },
                volume: {
                    label: "體積",
                    description: "體積"
                }
            }
        },
        youtubeAdblock: {
            name: "YouTubeAdblock",
            description: "透過 AdGuard 封鎖 YouTube 嵌入廣告和 Watch Together 活動"
        },
        youtubeDescription: {
            name: "YouTubeDescription",
            description: "為 YouTube 影片嵌入添加說明"
        },
        addAttachments: {
            name: "AddAttachments",
            description: "允許在編輯訊息時新增附件",
            toast: {
                youCannotAddMore: "你無法再向此訊息新增附件。",
                youCanOnlyAdd: "此訊息最多還能新增 {{count}} 個附件。",
                uploadingThisCanTake: "正在上傳，這可能需要一段時間...",
                addedOne: "已成功新增附件！",
                addedMany: "已成功新增附件！"
            },
            text: {
                addAttachments: "新增附件"
            }
        },
        advancedPermissions: {
            option: {
                simplifiedCard: {
                    description: "如何處理 Discord 的簡化權限卡片",
                    label: "簡化卡片",
                    hide: "隱藏",
                    collapse: "設為可摺疊",
                    show: "保持可見"
                },
                collapsedByDefault: {
                    description: "預設摺疊簡化權限。",
                    label: "預設摺疊"
                }
            },
            name: "AdvancedPermissions",
            description: "預設顯示進階權限卡片。",
            text: {
                simplifiedPermissions: "簡化權限"
            }
        },
        autoJumpToMessage: {
            option: {
                onlyWhenUnfocused: {
                    description: "僅在 Discord 視窗未聚焦時自動跳至訊息。",
                    label: "僅在未聚焦時"
                }
            },
            name: "AutoJumpToMessage",
            description: "自動開啟新訊息所在的頻道。"
        },
        betterForwards: {
            text: {
                serverIconForName: "{{name}} 的伺服器圖示",
                messageAttachments: "訊息附件",
                messageTextWillNot: "停用此選項時不會轉發訊息文字",
                forwardEverything: "轉發全部",
                viewServer: "檢視伺服器",
                embed: "嵌入",
                embedNumber: "嵌入 {{number}}",
                image: "圖片",
                video: "影片",
                serverIcon: "{{name}} 的伺服器圖示",
                dmIcon: "{{name}} 的私訊圖示",
                groupDmIcon: "{{name}} 的群組私訊圖示"
            },
            option: {
                resendOnFail: {
                    description: "轉發失敗時會嘗試重新傳送轉發的訊息。可能導致意外的提及或洗版。會繞過 NSFW 限制。",
                    label: "失敗時重新傳送"
                },
                forwardPreface: {
                    description: "轉發訊息的前綴內容",
                    label: "轉發前綴"
                },
                dontFollowForwards: {
                    description: "轉發單則訊息後不跳至該訊息。按住 Shift 可忽略此行為。",
                    label: "不跟隨轉發"
                },
                selfForward: {
                    description: "在轉發清單彈出視窗中顯示目前頻道。",
                    label: "轉發給自己"
                }
            },
            name: "BetterForwards",
            description: "訊息轉發工具，包括繞過 NSFW 與介面改進。"
        },
        betterImageEditor: {
            text: {
                search: "搜尋",
                searchSavedPictures: "搜尋已儲存的圖片",
                clearTheSearch: "清除搜尋",
                savedPictures: "已儲存的圖片",
                removeName: "移除 {{name}}",
                removeHoldShiftTo: "移除。按住 Shift 可略過確認",
                originals: "原圖",
                putBackTheLast: "放回最後一張",
                forgetEveryRememberedCrop: "忘記所有記住的裁切？",
                yourPicturesStayEach: "你的圖片會保留。從現在起，每張圖片都會以未取景狀態開啟，直到你再次裁切。",
                forget: "忘記",
                cancel: "取消",
                clearSavedPictures: "清除已儲存的圖片？",
                everyPictureYouHave: "你在此儲存的所有圖片都會被刪除，連同每張記住的裁切。Discord 本身的封存以及你目前的頭像與橫幅不受影響。",
                clear: "清除",
                removeThisPicture: "移除此圖片？",
                remove: "移除",
                keepTheCroppedCopy: "保留裁切後的副本？",
                itGoesOnThe: "它會放到 {{toLowerCase}} 架上，緊鄰你的原圖。",
                keep: "保留",
                noThanks: "不用了",
                exportToAFile: "匯出到檔案",
                importFromAFile: "從檔案匯入",
                forgetRememberedFraming: "忘記記住的取景",
                clearSavedPictures2: "清除已儲存的圖片",
                croppedKind: "已裁切的{{kind}}",
                unpinName: "取消釘選 {{name}}",
                pinName: "釘選 {{name}}",
                pinnedNeverDrops: "已釘選，永遠不會從架上掉落",
                pinNeverDrops: "釘選，讓它永遠不會從架上掉落",
                nothingMatches: "沒有相符的內容",
                originalsEmpty: "你選擇、貼上或拖放的圖片會出現在這裡",
                croppedEmpty: "你裁切的圖片會出現在這裡",
                forgotFraming: "已清除 {{count}} 張圖片的取景",
                nothingFramed: "沒有任何已取景的圖片",
                pictureLibrary: "圖片庫",
                addedPictures: "已新增 {{count}} 張圖片",
                nothingNew: "該檔案中沒有新內容",
                shownOfTotal: "{{shown}} / {{total}}",
                keptCount: "已保存 {{count}} 張",
                youAreWearingThis: "你正在使用這個",
                removePictureBody: "{{name}} 將從已儲存的圖片中移除，連同記住的裁剪。"
            },
            option: {
                librarySize: {
                    description: "每個架子上保留的圖片數量。",
                    label: "圖庫大小"
                },
                rememberCrop: {
                    description: "還原上次用於圖片的縮放與位置。",
                    label: "記住裁切"
                },
                forgetFraming: {
                    description: "捨棄所有記住的裁切，並以 Discord 預設方式開啟每張圖片。",
                    label: "忘記取景"
                },
                saveCropped: {
                    description: "裁切後保留每張圖片的副本。",
                    label: "儲存裁切後的圖片"
                },
                askBeforeSavingCropped: {
                    description: "先詢問，而不是自動保留裁切後的副本。",
                    label: "儲存裁切圖片前詢問"
                },
                transfer: {
                    description: "將你的圖片及每張的取景轉移到另一台裝置。",
                    label: "轉移"
                },
                clearLibrary: {
                    description: "捨棄你儲存的所有圖片。",
                    label: "清除圖庫"
                }
            },
            name: "BetterImageEditor",
            description: "在頭像與橫幅編輯器中保留你的圖片架，並記住每張圖片的裁切方式。",
            toast: {
                couldNotExportYour: "無法匯出你的圖片",
                couldNotReadThat: "無法讀取該檔案",
                thatPictureIsMissing: "該圖片遺失",
                thatPictureIsToo: "該圖片對 Discord 來說太大",
                couldNotUseThat: "無法使用該圖片",
                couldNotKeepThe: "無法保留裁切後的副本"
            },
            kind: {
                avatars: "頭像",
                banners: "橫幅",
                serverIcons: "伺服器圖示",
                serverBanners: "伺服器橫幅",
                eventCovers: "活動封面",
                homeHeaders: "首頁標頭",
                decorations: "裝飾",
                widgetCovers: "小工具封面",
                widgetImages: "小工具圖片"
            }
        },
        cancelFriendRequest: {
            name: "CancelFriendRequest",
            description: "新增從個人資料取消已送出好友邀請的方式。",
            text: {
                cancelOutgoingFriendRequest: "取消已送出的好友邀請"
            }
        },
        clipUpload: {
            text: {
                createdAtMustBe: "建立時間必須是有效日期。",
                cancel: "取消",
                uploadClipFile: "上傳剪輯檔案",
                fileName: "檔案名稱",
                title: "標題",
                epicMoment: "精彩時刻",
                message: "訊息",
                checkOutThisClip: "快看這個剪輯！",
                spoiler: "劇透",
                remix: "混搭",
                thumbnail: "縮圖",
                file: "檔案",
                selectFile: "選擇檔案",
                parseClipMetadataFrom: "從檔案解析剪輯中繼資料",
                selectFriends: "選擇好友",
                selectAGame: "選擇遊戲",
                customApplicationId: "自訂應用程式 ID",
                createdAt: "建立時間",
                participants: "參與者",
                onlyTagPeopleWho: "僅標記在場且同意出現在此剪輯中的人。",
                gameApplication: "遊戲/應用程式",
                uploadClipFile2: "上傳剪輯檔案",
                uploading: "正在上傳",
                upload: "上傳",
                noFileSelected: "未選擇檔案",
                couldNotPrepare: "無法準備所選檔案。",
                couldNotRead: "無法讀取所選檔案。",
                couldNotUpdateMetadata: "無法更新剪輯中繼資料。",
                notCompatible: "此檔案不相容。請使用包含 H.264 影片和 AAC 音訊的 MP4 剪輯。",
                uploadFailed: "上傳失敗。",
                noUploadSlot: "Discord 未傳回上傳位置。",
                uploadCanceled: "上傳已取消。",
                failedToUpload: "無法上傳剪輯。",
                selectClipFile: "選擇剪輯檔案",
                mp4Video: "MP4 影片"
            },
            name: "ClipUpload",
            description: "新增按鈕，將本機影片檔案作為 Discord 剪輯上傳。",
            toast: {
                checkingClipFile: "正在檢查剪輯檔案。",
                convertingClipFile: "正在轉換剪輯檔案。",
                clipUploaded: "剪輯已上傳。"
            }
        },
        collapsibleUI: {
            name: "CollapsibleUI",
            description: "原生可摺疊的頻道、成員、聊天按鈕與使用者區域。",
            text: {
                collapsibleUi: "可摺疊介面",
                guildBar: "伺服器列",
                channelList: "頻道清單",
                membersList: "成員清單",
                messageButtons: "訊息按鈕",
                titleBar: "標題列",
                headerBar: "頂欄",
                userArea: "使用者區域"
            },
            option: {
                detachUserArea: {
                    description: "分離使用者區域，使其在未摺疊時可以自由移動。",
                    label: "分離使用者區域"
                },
                detachedUserAreaX: {
                    description: "儲存分離使用者區域的 x 座標。",
                    label: "分離的使用者區域 X"
                },
                detachedUserAreaY: {
                    description: "儲存分離使用者區域的 y 座標。",
                    label: "分離的使用者區域 Y"
                },
                guildBarCollapsed: {
                    description: "記住伺服器列為摺疊狀態。",
                    label: "伺服器列已摺疊"
                },
                channelListCollapsed: {
                    description: "記住頻道清單為摺疊狀態。",
                    label: "頻道清單已摺疊"
                },
                membersListCollapsed: {
                    description: "記住成員清單為摺疊狀態。",
                    label: "成員清單已摺疊"
                },
                chatButtonsCollapsed: {
                    description: "記住訊息按鈕列為摺疊狀態。",
                    label: "聊天按鈕已摺疊"
                },
                titleBarCollapsed: {
                    description: "記住標題列為摺疊狀態。",
                    label: "標題列已摺疊"
                },
                headerBarCollapsed: {
                    description: "記住頂欄為摺疊狀態。",
                    label: "頂欄已摺疊"
                },
                userAreaCollapsed: {
                    description: "記住使用者區域為摺疊狀態。",
                    label: "使用者區域已摺疊"
                }
            }
        },
        customCommands: {
            text: {
                cancel: "取消",
                name: "Name",
                response: "回覆內容",
                detectedArguments: "偵測到的參數",
                exampleCommandResponse: "指令回覆範例：",
                exampleUsage: "用法範例：",
                exampleOutput: "輸出範例：",
                viewArgumentsGuide: "檢視參數指南",
                editTag: "編輯標籤",
                deleteTag: "刪除標籤",
                registeredTags: "已註冊的標籤",
                createTag: "建立標籤",
                aTagWithThe: "名為 **{{name}}** 的標籤不存在！",
                successfullyDeletedTheTag: "已成功刪除標籤 **{{name}}**！",
                ephemeralReserved: "參數名稱 \"ephemeral\" 為保留名稱，無法使用。",
                createNewTag: "建立新標籤",
                editTagSubtitle: "編輯你的自訂指令。",
                createTagSubtitle: "建立一個將註冊為斜線指令的新標籤。",
                save: "儲存",
                create: "建立",
                variablesHelp: "你的回覆可以包含以雙大括號包住的變數，它們會成為指令參數，例如",
                defaultValuesHelp: "你可以使用等號為參數指定預設值，例如",
                noTagsYet: "哎呀！還沒有標籤，使用 `/tags create` 建立一個吧！",
                nameAlreadyExists: "名為 \"{{name}}\" 的標籤已存在，將被覆寫。",
                defaultValue: "（預設：{{value}}）"
            },
            name: "CustomCommands",
            description: "允許建立自訂斜線指令 / 標籤",
            option: {
                tagsList: {
                    label: "標籤清單"
                }
            },
            command: {
                ephemeral: "回覆是否僅對你可見",
                tags: "管理所有自訂指令",
                create: "建立一個新標籤",
                list: "列出你的所有標籤",
                delete: "依名稱移除標籤",
                tagName: "標籤名稱"
            }
        },
        fileUpload: {
            name: "FileUpload",
            description: "將檔案上傳到 Zipline、Nest、S3 與 WebDAV 等託管服務",
            toast: {
                fileTypeNotAllowed: "目前篩選器不允許此檔案類型",
                pleaseConfigureFileuploadSettings: "請先設定 FileUpload",
                sharexConfigIsValid: "ShareX 設定有效",
                importedSharexConfig: "已匯入 ShareX 設定",
                uploadSuccessfulButNo: "上傳成功，但沒有可複製的 URL",
                uploadSuccessfulUrlCopied: "上傳成功，URL 已複製到剪貼簿",
                uploadSuccessfulButFailed: "上傳成功，但複製 URL 失敗",
                uploadSuccessful: "上傳成功",
                uploadSucceededWithServicelabels: "切換備用後透過 {{serviceLabels_service}} 上傳成功",
                apngToGifConversion: "APNG 轉 GIF 失敗，將以 APNG 上傳",
                uploadAlreadyInProgress: "上傳已在進行中",
                uploadCancelled: "上傳已取消",
                uploadFailedMessage: "上傳失敗：{{message}}",
                invalidSharexConfig: "無效的 ShareX 設定",
                failedToImportSharexConfig: "無法匯入 ShareX 設定"
            },
            text: {
                uploadToServicename: "上傳到 {{serviceName}}",
                uploadToHost: "上傳到託管",
                chooseFile: "選擇檔案...",
                zipline: "Zipline",
                eZHost: "E-Z Host",
                nest: "Nest",
                encryptingHost: "Encrypting.host",
                s3Compatible: "相容 S3",
                catboxMoe: "Catbox.moe",
                litterbox: "Litterbox",
                sharexCustomUploader: "ShareX 自訂上傳器",
                webdavNextcloudOwncloud: "WebDAV (Nextcloud/Owncloud)",
                n1Hour: "1 小時",
                n12Hours: "12 小時",
                n24Hours: "24 小時",
                n72Hours: "72 小時",
                corsProxy: "CORS 代理",
                query: "查詢",
                param: "參數",
                fakeLink: "偽裝連結",
                embed: "嵌入",
                n30Seconds: "30 秒",
                n1Minute: "1 分鐘",
                n2Minutes: "2 分鐘",
                n5Minutes: "5 分鐘",
                n10Minutes: "10 分鐘",
                dragHostsToReorder: "拖曳託管以調整備用嘗試的順序。會先嘗試所選託管，再依此順序。",
                chooseWhereFileuploadSends: "選擇 FileUpload 傳送新檔案的位置。",
                connectionDetailsForYour: "你的 Zipline 執行個體連線資訊。",
                theUrlOfYour: "你的 Zipline 執行個體 URL",
                yourZiplineApiAuthorization: "你的 Zipline API 授權權杖",
                yourZiplineApiToken: "你的 Zipline API 權杖",
                folderIdForUploads: "上傳的資料夾 ID（留空表示不使用資料夾）",
                leaveEmptyForNo: "留空表示不使用資料夾",
                connectionDetailsForE: "E-Z Host 上傳的連線資訊。",
                yourEZHost: "你的 E-Z Host API 金鑰",
                connectionDetailsForNest: "Nest 上傳的連線資訊。",
                yourNestApiAuthorization: "你的 Nest API 授權權杖",
                yourNestApiToken: "你的 Nest API 權杖",
                connectionDetailsForEncrypting: "Encrypting.host 上傳的連線資訊。",
                yourEncryptingHostApi: "你的 Encrypting.host API 金鑰",
                howEncryptingHostShould: "Encrypting.host 傳回連結的格式。",
                selectUrlStyle: "選擇 URL 樣式",
                optionalTitleForEmbed: "嵌入樣式回應的選用標題。",
                optionalTitle: "選用標題",
                optionalColorForEmbed: "嵌入樣式回應的選用顏色。",
                optionalColor: "選用顏色",
                optionalFakeLinkValue: "fakelink 樣式回應的選用偽裝連結值。",
                optionalFakeLink: "選用偽裝連結",
                connectionDetailsAndObject: "儲存貯體的連線資訊與物件命名。",
                s3CompatibleEndpointE: "相容 S3 的端點（例如 https://<accountid>.r2.cloudflarestorage.com）",
                bucketToUploadInto: "上傳目標儲存貯體",
                awsRegionOrAuto: "AWS 區域，Cloudflare R2 請填 auto",
                s3CompatibleAccessKey: "相容 S3 的存取金鑰",
                yourAccessKeyId: "你的存取金鑰 ID",
                s3CompatibleSecretKey: "相容 S3 的秘密金鑰",
                yourSecretAccessKey: "你的秘密存取金鑰",
                optionalTemporaryCredentialToken: "選用的暫時憑證權杖",
                optionalSessionToken: "選用工作階段權杖",
                optionalPublicUrlBase: "用於傳回連結的選用公開基礎 URL",
                optionalFolderPrefixInside: "儲存貯體內的選用資料夾/前綴",
                useEndpointBucketKey: "使用 endpoint/bucket/key 格式，建議用於 R2。",
                optionalAccountBindingFor: "Catbox 上傳的選用帳號綁定。",
                yourCatboxUserhashFor: "用於綁定帳號的 Catbox userhash，留空則匿名上傳。",
                yourCatboxUserhash: "你的 Catbox userhash",
                howLongUploadsAre: "上傳保留時長",
                selectExpiry: "選擇到期時間",
                optionalAccountBindingFor2: "GoFile 上傳的選用帳號綁定。",
                optionalGofileTokenTo: "用於上傳到你帳號的選用 GoFile 權杖。",
                optionalGofileToken: "選用 GoFile 權杖",
                connectionDetailsForPixelvault: "PixelVault 上傳的連線資訊。",
                yourPixelvaultAuthorizationKey: "你的 PixelVault 授權金鑰。",
                yourPixelvaultUploadKey: "你的 PixelVault 上傳金鑰",
                optionalAccountBindingFor3: "PixelDrain 上傳的選用帳號綁定。",
                optionalPixeldrainApiKey: "用於驗證上傳的選用 PixelDrain API 金鑰。留空則匿名上傳。",
                yourPixeldrainApiKey: "你的 PixelDrain API 金鑰",
                pasteImportOrValidate: "貼上、匯入或驗證 ShareX 自訂上傳器設定。",
                pasteYourSharexCustom: "貼上你的 ShareX 自訂上傳器 JSON（.sxcu/.json）。DestinationType 必須包含 FileUploader 或 ImageUploader。",
                importFromFileOr: "從檔案匯入或驗證貼上的設定",
                connectionDetailsForWebdav: "WebDAV 伺服器（Nextcloud、Owncloud 等）的連線資訊。",
                baseWebdavUrlE: "WebDAV 基礎 URL（例如 https://nextcloud.example.com/remote.php/dav/files/username）",
                optionalSubdirectoryOnThe: "伺服器上用於上傳的選用子目錄（例如 uploads）",
                leaveEmptyForRoot: "留空表示根目錄",
                selectYourWebdavServer: "選擇你的 WebDAV 伺服器類型。Nextcloud 與 ownCloud 會建立公開分享連結。通用類型會傳回原始檔案 URL。",
                selectServerType: "選擇伺服器類型",
                howToReturnThe: "如何傳回公開分享連結。分享頁面連到網頁；直接下載直接連到檔案；Markdown 連結會將分享頁面包裝成可點擊的檔案名稱。",
                selectShareLinkFormat: "選擇分享連結格式",
                controlWhatFileuploadDoes: "控制託管傳回 URL 後 FileUpload 的行為。",
                stripQueryParametersFrom: "從上傳檔案的 URL 中移除查詢參數。",
                wrapUploadedVideoLinks: "使用嵌入代理包裝已上傳的影片連結，以獲得更好的 Discord 預覽。",
                chooseWhichEmbedProxy: "選擇用於已上傳影片連結的嵌入代理服務",
                selectAnEmbedProxy: "選擇嵌入代理服務",
                convertApngFilesTo: "將 APNG 檔案轉換為 GIF 格式。",
                useTheOriginalFilename: "使用原始檔案名稱，而不是將上傳命名為 upload.ext。",
                automaticallyCopyTheUploaded: "自動將上傳檔案的 URL 複製到剪貼簿。",
                onlyUseTheSelected: "僅使用所選上傳器，不嘗試備用託管。",
                afterUploadInsertThe: "上傳後，將取得的 URL 插入目前的聊天輸入框。",
                wrapInsertedUrlsIn: "用角括號包住插入的 URL，以避免 Discord 產生預覽。",
                chooseWhenFileuploadTakes: "選擇 FileUpload 何時接管 Discord 的檔案處理。",
                useFileuploadWhenUploading: "透過 Discord 檔案選擇器上傳時使用 FileUpload。",
                useFileuploadOnlyFor: "僅對大於你目前 Discord 上傳限制的檔案使用 FileUpload。",
                manualDiscordFileSize: "手動設定 Discord 檔案大小限制（MB），在自動偵測錯誤時使用。留空則自動。",
                auto: "自動",
                commaSeparatedListOf: "以逗號分隔的副檔名清單（例如 png,jpg,gif）。留空則全部允許。",
                configureBrowserUploadProxying: "設定瀏覽器上傳代理與逾時。",
                corsProxyUsedFor: "用於網頁上傳的 CORS 代理。留空則使用預設代理。",
                sourceCodeForThe: "預設 CORS 代理的原始碼",
                maximumTimeToWait: "每次上傳嘗試在切換到備用前的最長等待時間",
                selectTimeout: "選擇逾時",
                drag: "拖曳",
                importSxcuJson: "匯入 .sxcu/.json",
                validate: "驗證",
                resetToDefault: "重設為預設",
                progress: "{{percent}}% - {{transferred}} / {{total}}",
                cancel: "取消"
            },
            option: {
                serviceType: {
                    description: "所選上傳服務",
                    label: "服務類型"
                },
                serviceUrl: {
                    description: "Zipline 服務 URL",
                    label: "服務 URL"
                },
                ziplineToken: {
                    description: "Zipline 驗證權杖",
                    label: "Zipline 權杖"
                },
                folderId: {
                    description: "選用的 Zipline 資料夾 ID",
                    label: "資料夾 ID"
                },
                ezHostKey: {
                    description: "E-Z Host API 金鑰",
                    label: "E-Z Host 金鑰"
                },
                nestToken: {
                    description: "Nest API 權杖",
                    label: "Nest 權杖"
                },
                encryptingHostKey: {
                    description: "Encrypting.host API 金鑰",
                    label: "Encrypting.host 金鑰"
                },
                encryptingHostUrlStyle: {
                    description: "Encrypting.host URL 樣式",
                    label: "Encrypting.host URL 樣式"
                },
                encryptingHostDomains: {
                    description: "Encrypting.host 網域 JSON 清單",
                    label: "Encrypting.host 網域"
                },
                encryptingHostTitle: {
                    description: "選用的 Encrypting.host 嵌入標題",
                    label: "Encrypting.host 標題"
                },
                encryptingHostColor: {
                    description: "選用的 Encrypting.host 嵌入顏色",
                    label: "Encrypting.host 顏色"
                },
                encryptingHostFakelink: {
                    description: "選用的 Encrypting.host 偽裝連結",
                    label: "Encrypting.host 偽裝連結"
                },
                s3Endpoint: {
                    description: "相容 S3 的端點 URL",
                    label: "S3 端點"
                },
                s3Bucket: {
                    description: "S3 儲存貯體名稱",
                    label: "S3 儲存貯體"
                },
                s3Region: {
                    description: "S3 區域（R2 請使用 auto）",
                    label: "S3 區域"
                },
                s3AccessKeyId: {
                    description: "S3 存取金鑰 ID",
                    label: "S3 存取金鑰 ID"
                },
                s3SecretAccessKey: {
                    description: "S3 秘密存取金鑰",
                    label: "S3 秘密存取金鑰"
                },
                s3SessionToken: {
                    description: "選用的 S3 工作階段權杖",
                    label: "S3 工作階段權杖"
                },
                s3PublicUrl: {
                    description: "選用的公開基礎 URL",
                    label: "S3 公開 URL"
                },
                s3Prefix: {
                    description: "選用的 S3 物件鍵前綴",
                    label: "S3 前綴"
                },
                s3ForcePathStyle: {
                    description: "使用路徑樣式的 S3 URL",
                    label: "強制 S3 路徑樣式"
                },
                litterboxExpiry: {
                    description: "Litterbox 保留期限",
                    label: "Litterbox 到期時間"
                },
                catboxUserhash: {
                    description: "用於綁定帳號的 Catbox userhash",
                    label: "Catbox userhash"
                },
                sharexConfig: {
                    description: "ShareX 自訂上傳器 JSON",
                    label: "ShareX 設定"
                },
                disableFallbacks: {
                    description: "停用備用上傳服務",
                    label: "停用備用"
                },
                autoSend: {
                    description: "將上傳的 URL 插入聊天輸入框",
                    label: "自動傳送"
                },
                autoFormat: {
                    description: "用角括號包住插入的 URL",
                    label: "自動格式化"
                },
                bypassDiscordUpload: {
                    description: "繞過 Discord 上傳，改用 FileUpload。",
                    label: "繞過 Discord 上傳"
                },
                bypassDiscordUploadOnlyOverLimit: {
                    description: "僅在檔案超出大小限制時使用 FileUpload。",
                    label: "僅超出限制時繞過 Discord 上傳"
                },
                customDiscordFileSizeLimitMB: {
                    description: "手動設定 Discord 檔案大小限制（MB）。0 表示自動偵測。",
                    label: "自訂 Discord 檔案大小限制（MB）"
                },
                gofileToken: {
                    description: "選用的 GoFile API 權杖",
                    label: "GoFile 權杖"
                },
                fallbackOrder: {
                    description: "備用上傳器順序",
                    label: "備用順序"
                },
                pixelVaultKey: {
                    description: "PixelVault 上傳金鑰",
                    label: "PixelVault 金鑰"
                },
                pixelDrainKey: {
                    description: "選用的 PixelDrain API 金鑰",
                    label: "PixelDrain 金鑰"
                },
                uploadTimeoutMs: {
                    description: "上傳逾時（毫秒）",
                    label: "上傳逾時 (ms)"
                },
                stripQueryParams: {
                    description: "從上傳的 URL 中移除查詢參數",
                    label: "移除查詢參數"
                },
                embedProxyEnabled: {
                    description: "透過嵌入輔助服務代理已上傳的影片連結。",
                    label: "啟用嵌入代理"
                },
                embedProxyService: {
                    description: "用於包裝已上傳影片連結的嵌入輔助服務。",
                    label: "嵌入代理服務"
                },
                corsProxyUrl: {
                    description: "用於瀏覽器上傳的 CORS 代理 URL",
                    label: "CORS 代理 URL"
                },
                apngToGif: {
                    description: "將上傳的 APNG 轉換為 GIF",
                    label: "APNG 轉 GIF"
                },
                preserveOriginalFilename: {
                    description: "上傳時保留原始檔案名稱。",
                    label: "保留原始檔案名稱"
                },
                autoCopy: {
                    description: "自動複製上傳 URL",
                    label: "自動複製"
                },
                autoUploadPastedFiles: {
                    description: "在聊天輸入框貼上時，自動將剪貼簿中的檔案上傳到圖床。",
                    label: "自動上傳貼上的檔案"
                },
                webdavUrl: {
                    description: "WebDAV 伺服器 URL",
                    label: "WebDAV URL"
                },
                webdavUsername: {
                    description: "WebDAV 使用者名稱",
                    label: "WebDAV 使用者名稱"
                },
                webdavPassword: {
                    description: "WebDAV 密碼或應用程式權杖",
                    label: "WebDAV 密碼"
                },
                webdavDirectory: {
                    description: "WebDAV 伺服器上的選用子目錄",
                    label: "WebDAV 目錄"
                },
                webdavServerType: {
                    description: "WebDAV 伺服器類型",
                    label: "WebDAV 伺服器類型",
                    nextcloud: "Nextcloud",
                    owncloud: "ownCloud",
                    generic: "通用 WebDAV"
                },
                webdavShareType: {
                    description: "WebDAV 分享連結格式",
                    label: "WebDAV 分享類型",
                    sharepage: "分享頁面",
                    directdownload: "直接下載",
                    markdown: "Markdown 連結"
                },
                uploadAllowedFileTypes: {
                    description: "以逗號分隔的允許副檔名清單（例如 png,jpg,gif,mp4）。留空則允許所有檔案。",
                    label: "允許上傳的檔案類型"
                },
                settingsComponent: {
                    description: "設定",
                    label: "設定元件"
                }
            },
            panel: {
                fallbackOrder: "備用順序",
                uploadService: "上傳服務",
                zipline: "Zipline",
                serviceUrl: "服務 URL",
                ziplineToken: "Zipline 權杖",
                folderId: "資料夾 ID",
                eZHost: "E-Z Host",
                eZHostApiKey: "E-Z Host API 金鑰",
                nest: "Nest",
                nestToken: "Nest 權杖",
                encryptingHost: "Encrypting.host",
                encryptingHostApiKey: "Encrypting.host API 金鑰",
                urlStyle: "URL 樣式",
                domainsJson: "網域（JSON）",
                embedTitle: "嵌入標題",
                embedColor: "嵌入顏色",
                fakeLink: "偽裝連結",
                s3CompatibleStorage: "相容 S3 的儲存空間",
                s3EndpointUrl: "S3 端點 URL",
                bucketName: "儲存貯體名稱",
                region: "區域",
                accessKeyId: "存取金鑰 ID",
                secretAccessKey: "秘密存取金鑰",
                sessionToken: "工作階段權杖",
                publicBaseUrl: "公開基礎 URL",
                objectKeyPrefix: "物件鍵前綴",
                usePathStyleEndpoint: "使用路徑樣式端點",
                catbox: "Catbox",
                catboxUserhash: "Catbox userhash",
                litterboxExpiry: "Litterbox 到期時間",
                gofile: "GoFile",
                gofileToken: "GoFile 權杖",
                pixelvault: "PixelVault",
                pixelvaultUploadKey: "PixelVault 上傳金鑰",
                pixeldrain: "PixelDrain",
                pixeldrainApiKey: "PixelDrain API 金鑰",
                sharexCustomUploader: "ShareX 自訂上傳器",
                sharexCustomUploaderConfig: "ShareX 自訂上傳器設定",
                sharexConfigActions: "ShareX 設定動作",
                webdav: "WebDAV",
                serverUrl: "伺服器 URL",
                username: "使用者名稱",
                passwordOrAppToken: "密碼或應用程式權杖",
                passwordOrAppToken2: "密碼或應用程式權杖",
                uploadDirectory: "上傳目錄",
                serverType: "伺服器類型",
                shareLinkFormat: "分享連結格式",
                uploadBehavior: "上傳行為",
                stripQueryParameters: "移除查詢參數",
                useEmbedProxy: "使用嵌入代理",
                embedProxyService: "嵌入代理服務",
                convertApngToGif: "將 APNG 轉換為 GIF",
                preserveOriginalFilename: "保留原始檔案名稱",
                autoCopyUrl: "自動複製 URL",
                disableFallbackUploaders: "停用備用上傳器",
                insertUrlIntoChatInput: "將 URL 插入聊天輸入框",
                formatInsertedUrl: "格式化插入的 URL",
                discordIntegration: "Discord 整合",
                bypassDiscordUploadButton: "繞過 Discord 上傳按鈕",
                autoUploadPastedFiles: "自動上傳貼上的檔案",
                respectDiscordFileSizeLimit: "遵守 Discord 檔案大小限制",
                discordLimitOverrideMb: "覆寫 Discord 限制（MB）",
                allowedFileTypes: "允許的檔案類型",
                network: "網路",
                corsProxyUrl: "CORS 代理 URL",
                defaultCorsProxySource: "預設 CORS 代理原始碼",
                uploadTimeout: "上傳逾時",
                domainsJsonDescription: "要使用的網域 JSON 陣列，例如 [\"offensive\"]。"
            },
            status: {
                cancelled: "上傳已取消。",
                uploadingVia: "正在透過 {{service}} 上傳...",
                uploading: "正在上傳...",
                unknownError: "未知錯誤",
                startingVia: "正在透過 {{service}} 開始上傳...",
                retryingWith: "正在使用 {{service}} 重試（{{attempt}}/{{total}}）...",
                uploadedVia: "已透過 {{service}} 成功上傳。",
                allFailed: "所有上傳服務皆失敗。最後的錯誤：{{error}}",
                fileReady: "檔案已就緒，開始上傳...",
                preparing: "正在準備上傳...",
                failed: "上傳失敗：{{message}}",
                timedOut: "上傳逾時",
                serviceFailed: "{{service}} 失敗：{{message}}",
                preparingFile: "正在準備 {{name}}{{suffix}}..."
            }
        },
        gifMaker: {
            option: {
                lastWidth: {
                    label: "上次寬度"
                },
                lastHeight: {
                    label: "上次高度"
                },
                lastCaptionMode: {
                    label: "上次字幕模式"
                },
                lastCaptionText: {
                    label: "上次字幕文字"
                },
                lastCaptionSize: {
                    label: "上次字幕大小"
                },
                lastFontFamily: {
                    label: "上次字型系列"
                },
                lastBubbleTipBase: {
                    label: "上次氣泡尾端基點"
                },
                maxWidth: {
                    description: "自動調整的最大寬度。",
                    label: "最大寬度"
                },
                maxHeight: {
                    description: "自動調整的最大高度。",
                    label: "最大高度"
                }
            },
            name: "GifMaker",
            description: "從聊天或 GIF 選擇器中的任何媒體建立 GIF 並加上字幕。",
            text: {
                send: "傳送",
                export: "匯出",
                makeGif: "製作 GIF",
                editGif: "編輯 GIF",
                selectAFont: "選擇字型...",
                enterCaption: "輸入字幕...",
                width: "寬度",
                height: "高度",
                loadingFonts: "正在載入字型...",
                captions: "字幕",
                text: "文字",
                font: "字型",
                fontSize: "字型大小",
                tipBase: "尾端基點",
                dimensions: "尺寸",
                generatingGif: "正在產生 GIF...",
                clickOnThePreview: "點擊預覽以定位氣泡尾端",
                gifPreview: "GIF 預覽"
            },
            captionMode: {
                caption: "字幕",
                none: "無",
                speechbubble: "氣泡"
            }
        },
        gifProviderSwitcher: {
            name: "GifProviderSwitcher",
            description: "允許使用 Tenor 或 Giphy 的 GIF 搜尋代替 Klipy",
            text: {
                tenor: "Tenor",
                giphy: "Giphy",
                klipy: "Klipy",
                providers: "提供者",
                providersCount: "{{count}} 個提供者"
            }
        },
        keyboardNavigation: {
            toast: {
                invalidUrl: "無效的 URL",
                copiedResponseToClipboard: "已將回應複製到剪貼簿！",
                issueFetchingUrl: "取得 URL 時發生問題",
                copiedGitInfoTo: "已將 Git 資訊複製到剪貼簿！",
                noUpdatesAvailable: "沒有可用的更新",
                enabledPlugin: "已成功啟用 {{id}}",
                disabledPlugin: "已成功停用 {{id}}"
            },
            text: {
                openPlexcordTab: "開啟 Plexcord 分頁",
                openPluginTab: "開啟外掛分頁",
                openThemesTab: "開啟主題分頁",
                openUpdaterTab: "開啟更新分頁",
                openCloudTab: "開啟雲端分頁",
                openBackupRestoreTab: "開啟備份與還原分頁",
                restartClient: "重新啟動用戶端",
                openQuickCssFile: "開啟 QuickCSS 檔案",
                openSettingsFolder: "開啟設定資料夾",
                openInGithub: "在 GitHub 中開啟",
                openInBrowser: "在瀏覽器中開啟",
                togglePlugin: "切換外掛",
                enable: "啟用",
                disable: "停用",
                quickFetch: "快速取得",
                copyGitInfo: "複製 Git 資訊",
                checkForUpdates: "檢查更新",
                aPlexcordUpdateIs: "有可用的 Plexcord 更新！",
                clickHereToView: "點擊此處檢視更新",
                navigateToServer: "前往伺服器",
                commandPalette: "指令面板",
                searchTheCommandPalette: "搜尋指令面板",
                multipleChoice: "多重選擇",
                textInput: "文字輸入",
                openDevTab: "開啟開發者分頁",
                enterUrlToFetch: "輸入要取得的 URL（僅 GET）",
                typeAndPressEnter: "輸入後按 Enter",
                recording: "正在錄製...",
                recordKeybind: "錄製快速鍵",
                enterUrl: "輸入網址"
            },
            option: {
                hotkey: {
                    description: "開啟指令面板的快速鍵。",
                    label: "快速鍵"
                },
                allowMouseControl: {
                    description: "允許使用滑鼠控制指令面板。",
                    label: "允許滑鼠控制"
                }
            },
            name: "KeyboardNavigation",
            description: "允許使用鍵盤瀏覽介面。"
        },
        lastActive: {
            name: "LastActive",
            description: "用於跳到你或其他使用者在頻道/伺服器中最後一則活躍訊息的外掛。",
            toast: {
                failedToFindMessages: "找不到訊息。詳情請查看主控台。",
                couldnTFindAny: "找不到此使用者的近期訊息。",
                channelInformationNotAvailable: "頻道資訊無法使用。",
                failedToJumpTo: "跳到訊息失敗。詳情請查看主控台。"
            },
            text: {
                yourLastMessage: "你的最後一則訊息",
                userSLastMessage: "該使用者的最後一則訊息"
            }
        },
        limitlessScreenshare: {
            text: {
                deleteTag: "刪除標籤",
                mustBeGreaterThan: "必須 >{{value}}",
                maxResolutionTooLow: "最大解析度不能低於 {{value}}",
                maxResolutionRound: "啟用「解析度取整」時，最大解析度必須以 0 結尾"
            },
            name: "LimitlessScreenshare",
            description: "為螢幕分享解析度與幀率新增滑桿。",
            option: {
                maxFPS: {
                    description: "滑桿的最大幀率",
                    label: "最大幀率"
                },
                maxResolution: {
                    description: "滑桿的最大解析度",
                    label: "最大解析度"
                },
                roundResolution: {
                    description: "將解析度四捨五入到最接近的 10p",
                    label: "四捨五入解析度"
                },
                resolutions: {
                    label: "解析度"
                },
                fpss: {
                    label: "幀率值"
                }
            }
        },
        messagePeek: {
            option: {
                hideMuted: {
                    description: "隱藏已靜音私訊與群組聊天的訊息預覽和時間戳記。",
                    label: "隱藏已靜音"
                }
            },
            name: "MessagePeek",
            description: "在私訊清單中顯示最後一則訊息的預覽和時間戳記。",
            text: {
                officialDiscordMessage: "Discord 官方訊息",
                sentGif: "傳送了 GIF",
                voiceMessage: "語音訊息",
                membersCount: "{{count}} 位成員",
                you: "你"
            }
        },
        messageTranslate: {
            name: "MessageTranslate",
            description: "自動將訊息翻譯為你的語言，支援快取、依頻道切換等更多選項。",
            option: {
                targetLanguage: {
                    description: "翻譯的目標語言代碼（例如 en、es、fr、de、ja）。",
                    label: "目標語言"
                },
                excludedLanguages: {
                    description: "不翻譯的語言代碼（例如 en、es、fr、de、ja）。",
                    label: "排除的語言"
                },
                confidenceRequirement: {
                    description: "顯示翻譯所需的最低信賴度（0 到 1）。",
                    label: "信賴度要求"
                },
                autoTranslate: {
                    description: "訊息出現時自動翻譯。",
                    label: "自動翻譯"
                },
                skipOwnMessages: {
                    description: "不翻譯你自己的訊息。",
                    label: "略過自己的訊息"
                },
                skipBotMessages: {
                    description: "不翻譯機器人訊息。",
                    label: "略過機器人訊息"
                },
                ignoredGuilds: {
                    description: "以逗號分隔的不進行翻譯的伺服器 ID 清單。",
                    label: "忽略的伺服器"
                },
                ignoredChannels: {
                    description: "以逗號分隔的不進行翻譯的頻道 ID 清單。",
                    label: "忽略的頻道"
                },
                ignoredUsers: {
                    description: "以逗號分隔的不翻譯的使用者 ID 清單。",
                    label: "忽略的使用者"
                },
                showIndicator: {
                    description: "在已翻譯的訊息後附加一個小的（已翻譯）標示。",
                    label: "顯示標示"
                },
                showOriginal: {
                    description: "顯示原文與譯文。",
                    noorig: "不顯示原文。"
                }
            },
            text: {
                showOriginalInSubtext: "在副文字中顯示原文",
                showOriginalMessageTranslation: "顯示原始訊息，譯文放在副文字中",
                translatedFrom: "翻譯自{{lang}}"
            }
        },
        moreStickers: {
            toast: {
                stickerPackDeleted: "已刪除貼圖包",
                stickerPackAdded: "已新增貼圖包",
                stickerPacksAdded: "已新增貼圖包",
                stickerPacksExported: "已匯出貼圖包",
                newStickerPacksAlready: "新貼圖包已存在，無需遷移",
                oldStickerPacksNot: "找不到舊貼圖包，無需遷移",
                migrationFailedTitleId: "遷移失敗：{{title}}（{{id}}）",
                stickerPackMigrationComplete: "貼圖包遷移完成",
                failedToUploadSticker: "上傳貼圖失敗"
            },
            text: {
                stickerPackUrl: "貼圖包 URL",
                pasteHtmlHere: "在此貼上 HTML",
                delete: "刪除",
                addStickerPackFrom: "從 URL 新增貼圖包",
                insert: "插入",
                addStickerPackFrom2: "從 HTML 新增貼圖包",
                insertFromHtml: "從 HTML 插入",
                addStickerPackFrom3: "從檔案新增貼圖包",
                miscTools: "其他工具",
                exportStickerPacks: "匯出貼圖包",
                migrateFromV1: "從 v1 遷移",
                stickersManagement: "貼圖管理",
                theRegionLineRecognized: "由於我們使用的 CORS 代理，LINE 辨識的地區可能與你所在的地區不同。",
                openStickerPackFile: "開啟貼圖包檔案",
                stickers: "貼圖+",
                categoryTitle: "分類，{{title}}",
                searchStickers: "搜尋貼圖",
                ffmpegstatecontextIsUndefined: "FFmpegStateContext 未定義",
                recentlyUsed: "最近使用",
                addFromUrl: "從 URL 新增",
                addFromHtml: "從 HTML 新增",
                addFromFile: "從檔案新增",
                misc: "其他",
                invalidUrl: "無效的 URL",
                lineOnly: "目前僅支援 LINE 貼圖/表情符號。",
                getTelegramStickers: "使用以下工具取得 Telegram 貼圖：",
                htmlFallbackHelp: "如果新增貼圖包時遇到錯誤，可以嘗試使用貼圖包頁面的 HTML 原始碼來新增。",
                htmlFallbackApplies: "這適用於有地區鎖定 / 系統鎖定等限制的貼圖。"
            },
            option: {
                promptToUpload: {
                    description: "將貼圖插入聊天列而不是立即傳送",
                    label: "上傳前提示"
                },
                packs: {
                    description: "貼圖包",
                    label: "貼圖包"
                }
            },
            name: "MoreStickers",
            description: "新增來自其他社群媒體平台的貼圖包。（例如 LINE）"
        },
        musicRichPresence: {
            option: {
                scrobblerBackend: {
                    description: "要使用的 Scrobbler 後端。",
                    label: "Scrobbler 後端"
                },
                instanceBaseURL: {
                    description: "你的 ListenBrainz 執行個體的基礎 URL。",
                    label: "執行個體基礎 URL"
                },
                instanceAPIBaseUrl: {
                    description: "你的 ListenBrainz API 的基礎 URL。",
                    label: "執行個體 API 基礎 URL"
                },
                apiKey: {
                    description: "Last.fm API 金鑰。非必要，但強烈建議填寫，以避免共用金鑰被限速",
                    label: "API 金鑰"
                },
                username: {
                    description: "使用者名稱",
                    label: "使用者名稱"
                },
                shareUsername: {
                    description: "顯示 Scrobbler 個人檔案連結",
                    label: "分享使用者名稱"
                },
                clickableLinks: {
                    description: "將曲目、藝人與專輯名稱設為可點擊連結",
                    label: "可點擊連結"
                },
                hideWithSpotify: {
                    description: "Spotify 執行時隱藏狀態",
                    label: "Spotify 時隱藏"
                },
                hideWithActivity: {
                    description: "有其他狀態時隱藏",
                    label: "有活動時隱藏"
                },
                statusName: {
                    description: "自訂狀態文字。可用變數：{artist} | {album} | {title}",
                    label: "狀態名稱"
                },
                statusDisplayType: {
                    description: "在成員清單中顯示曲目/藝人名稱",
                    off: "不顯示（顯示通用收聽訊息）"
                },
                nameFormat: {
                    description: "在狀態名稱中顯示歌曲與藝人名稱",
                    statusName: "使用自訂狀態名稱"
                },
                missingArt: {
                    description: "當專輯或專輯封面缺失時",
                    logo: "使用大型 Scrobbler 標誌"
                },
                showLogo: {
                    description: "在專輯封面旁顯示 Scrobbler 服務標誌",
                    label: "顯示 Scrobbler 標誌"
                },
                showAlbumCover: {
                    description: "顯示專輯封面。停用後將顯示預留位置圖。適用於音樂封面不合適的情況",
                    label: "顯示專輯封面"
                },
                useListeningStatus: {
                    description: "顯示「正在收聽」狀態而不是「正在玩」"
                }
            },
            name: "MusicRichPresence",
            description: "Last.FM/Listenbrainz 的 Rich Presence",
            text: {
                showArtistName: "顯示藝人名稱",
                showTrackName: "顯示曲目名稱",
                useMusicServiceName: "使用音樂服務名稱（回退到自訂狀態文字）",
                useFormatArtistSong: "使用「藝人 - 歌曲」格式",
                useFormatSongArtist: "使用「歌曲 - 藝人」格式",
                useArtistNameOnly: "僅使用藝人名稱",
                useSongNameOnly: "僅使用歌曲名稱",
                useAlbumNameFalls: "使用專輯名稱（若歌曲無專輯則回退到自訂狀態文字）",
                useGenericPlaceholder: "使用通用預留位置圖",
                lastFm: "Last.FM",
                howToCreateAn: "如何建立 API 金鑰",
                set: "設定",
                applicationName: "應用程式名稱",
                applicationDescription: "應用程式描述",
                toAnythingAndLeave: "為任意內容，其餘留空。",
                createApiKey: "建立 API 金鑰",
                invalidInstance: "無效的 ListenBrainz 相容執行個體",
                provideBoth: "請同時提供",
                apiBaseUrl: "API 基礎 URL",
                andThe: "和",
                instanceBaseUrl: "執行個體基礎 URL",
                forYourCustomInstance: "（用於你的自訂 ListenBrainz 執行個體），或切換回 ListenBrainz/Last.FM",
                allowConnectTitle: "允許 Plexcord 連線至 ListenBrainz 執行個體",
                allowConnectBody: "要使用你的自訂 ListenBrainz 執行個體，必須先允許 Plexcord 連線至該執行個體。",
                allowInstance: "允許執行個體",
                listenBrainzCompatible: "相容 ListenBrainz（自架）",
                and: "和"
            }
        },
        noMiddleClickPaste: {
            name: "NoMiddleClickPaste",
            description: "停用 Linux 中鍵貼上 - 僅限 Linux"
        },
        orbolayBridge: {
            option: {
                port: {
                    description: "要連線的連接埠",
                    label: "連接埠"
                }
            },
            name: "OrbolayBridge",
            description: "將 Orbolay 連接到 Discord 的橋接外掛",
            toast: {
                connectedToOrbolayServer: "已連線到 Orbolay 伺服器"
            }
        },
        plexcordHelper: {
            name: "PlexcordHelper",
            description: "用於提供支援並修正由 Discord 造成的當機。",
            text: {
                restartRequired: "需要重新啟動",
                restartNow: "立即重新啟動",
                later: "稍後",
                wouldYouLikeTo: "要立即重新啟動嗎？",
                somePluginsRequireA: "部分外掛需要重新啟動才能完全停用。",
                alreadyEnabled: "{{plugin}} 已啟用",
                alreadyDisabled: "{{plugin}} 已停用",
                disablePlugin: "停用 {{plugin}}",
                enablePlugin: "啟用 {{plugin}}",
                errorStopping: "停止外掛 {{plugin}} 時發生錯誤",
                errorStarting: "啟動外掛 {{plugin}} 時發生錯誤"
            },
            toast: {
                failedToTolowercase: "{{toLowerCase}} 失敗",
                aRestartIsRequired: "需要重新啟動才能使變更生效！"
            },
            card: {
                notOnThisVersion: "此版本的 Plexcord 中沒有該外掛。請嘗試更新！"
            }
        },
        plexcordTweaks: {
            name: "PlexcordTweaks",
            option: {
                removeActivitySection: {
                    description: "移除成員清單上方的活動區域",
                    label: "移除活動區域"
                },
                showYourOwnActivityButtons: {
                    description: "Discord 不知為何隱藏了你自己的活動按鈕",
                    label: "顯示你自己的活動按鈕"
                },
                refreshSlashCommands: {
                    description: "重新整理斜線指令，無需重新啟動用戶端即可顯示新加入的指令。",
                    label: "重新整理斜線指令"
                },
                forceRoleIcon: {
                    description: "在精簡模式下強制在訊息旁顯示身分組圖示",
                    label: "強制身分組圖示"
                },
                accountStandingButton: {
                    description: "在標題列顯示帳號狀態按鈕",
                    label: "帳號狀態按鈕"
                },
                jsonGateway: {
                    description: "在閘道重新連線時強制使用 JSON",
                    label: "JSON 閘道"
                },
                enableAutoCorrect: {
                    description: "在聊天框右鍵選單中新增原生自動校正與文字取代開關",
                    label: "啟用自動校正"
                },
                autoCorrect: {
                    description: "在訊息編輯器中使用原生自動校正與文字取代",
                    label: "自動校正"
                },
                disableHolidayNotifications: {
                    label: "停用節日通知",
                    description: "一律使用 Discord 的預設通知音效"
                },
                showAllBadges: {
                    label: "顯示所有徽章",
                    description: "顯示所有個人檔案徽章，而不是將其餘徽章收合為 +n"
                }
            },
            text: {
                allGood: "一切正常！",
                limited: "受限",
                veryLimited: "嚴重受限",
                atRisk: "有風險",
                suspended: "已停權",
                slashCommandsRefreshedSuccessfully: "斜線指令已成功重新整理。",
                failedToRefreshCommands: "重新整理指令失敗。詳情請查看主控台。",
                enableAutocorrect: "啟用自動校正"
            },
            command: {
                refreshCommands: "重新整理斜線指令"
            },
            description: "一組針對 Discord 的小調整與修正。"
        },
        plextronStreamFixes: {
            option: {
                unlockQualityOptions: {
                    description: "無論 Nitro 狀態為何都解鎖直播畫質選項",
                    label: "解鎖畫質選項"
                },
                removeResolutionCap: {
                    description: "允許 60fps 下超過 720p 的解析度",
                    label: "移除解析度上限"
                },
                forceEncoderSettings: {
                    description: "強制編碼器使用已設定的解析度/幀率",
                    label: "強制編碼器設定"
                },
                preventDownscale: {
                    description: "防止 Discord 降低直播解析度",
                    label: "防止降解析度"
                },
                keyframeInterval: {
                    description: "關鍵影格間隔（毫秒，0 = 編碼器預設，5000 = 每 5 秒）",
                    label: "關鍵影格間隔"
                },
                minBitrate: {
                    description: "最低編碼器位元速率（kbps）",
                    label: "最低位元速率"
                },
                raiseBitrateCaps: {
                    description: "提高桌面端預設位元速率上限（目標 600kbps → 10Mbps，最高 3.5Mbps → 40Mbps）",
                    label: "提高位元速率上限"
                },
                preventFramerateReduction: {
                    description: "防止 Discord 在你不說話時降低直播幀率",
                    label: "防止降低幀率"
                },
                bitsPerPixelPct: {
                    description: "目標位元速率的每像素位元百分比（8 = 0.08bpp，12 = 0.12bpp）",
                    label: "每像素位元 (%)"
                }
            },
            name: "PlextronStreamFixes",
            description: "透過修補 Discord 的編碼器和畫質限制，嘗試修復 Plextron 上的直播畫質。"
        },
        rPCEditor: {
            name: "RPCEditor"
        },
        reactionTimestamps: {
            name: "ReactionTimestamps",
            description: "在反應彈出視窗中顯示每個反應的時間。",
            text: {
                userAtTime: "{{user}} 於 {{time}}"
            }
        },
        richPresence: {
            text: {
                useCustomStatusName: "使用自訂狀態名稱",
                useFormatArtistSong: "使用「藝人 - 歌曲」格式",
                useFormatSongArtist: "使用「歌曲 - 藝人」格式",
                useArtistNameOnly: "僅使用藝人名稱",
                useSongNameOnly: "僅使用歌曲名稱",
                useAlbumName: "使用專輯名稱",
                useLargeStatsFm: "使用大型 Stats.fm 標誌",
                useGenericPlaceholder: "使用通用預留位置圖",
                seriesMovieName: "影集/電影名稱",
                seriesEpisodeTrackMovie: "影集 - 單集/曲目/電影名稱",
                custom: "自訂",
                seriesCover: "影集封面",
                episodeCover: "單集封面",
                season1Episode1: "第 1 季 第 1 集",
                off: "關閉",
                listening: "正在收聽",
                playing: "正在玩",
                streaming: "正在直播",
                watching: "正在觀看",
                none: "無",
                navidromeInstanceExposesServer: "Navidrome 執行個體（會暴露伺服器 URL。傳送一次性驗證。）",
                lastFmApiSends: "Last.fm API（將中繼資料傳送到 last.fm）",
                donTShowShows: "不顯示（顯示通用收聽訊息）",
                showStateLineContent: "顯示狀態行內容",
                showDetailsLineContent: "顯示詳細資料行內容",
                displayYourCurrentlyPlaying: "將你正在播放的有聲書顯示為 Discord Rich Presence。需要你的 AudioBookShelf 伺服器 URL、使用者名稱與密碼。",
                audiobookshelfServerUrl: "AudioBookShelf 伺服器 URL。",
                audiobookshelfUsername: "AudioBookShelf 使用者名稱。",
                audiobookshelfPassword: "AudioBookShelf 密碼。",
                connectsToTosuVia: "透過連接埠 24050 上的 WebSocket 連線到 tosu。無需設定，只要確保 tosu 與 osu! 同時執行即可。",
                showWhatYouRe: "透過 stats.fm 顯示你正在收聽的內容。需要你的收聽記錄為公開。",
                statsFmUsername: "Stats.fm 使用者名稱。",
                customStatusText: "自訂狀態文字。",
                statsFm: "Stats.fm",
                nameFormat: "名稱格式。",
                fallbackWhenArtIs: "封面缺失時的回退方式。",
                showListeningStatus: "顯示收聽狀態。",
                showStatsFmLogo: "在專輯封面旁顯示 Stats.fm 標誌。",
                showLinkToStats: "顯示 stats.fm 個人檔案連結。",
                showLinkToSong: "顯示 stats.fm 上的歌曲連結。",
                hideStatsFmPresence: "Spotify 執行時隱藏 stats.fm 狀態。",
                hideStatsFmPresence2: "外部 RPC 執行時隱藏 stats.fm 狀態。",
                disableDownloadingAlbumArt: "停用下載專輯封面。",
                showWhatYouRe2: "顯示你在 Jellyfin 上正在播放的內容。取得 API 金鑰：開啟 Jellyfin 網頁介面，按 F12 開啟開發者工具，進入「網路」分頁，尋找發往伺服器的請求，找到 Authorization 標頭（Ctrl+F 搜尋），你需要 Token='this' 中的部分。你的使用者 ID 可在個人檔案頁面 URL 中找到。",
                jellyfinServerUrl: "Jellyfin 伺服器 URL。",
                jellyfinApiKey: "Jellyfin API 金鑰。",
                authorization: "Authorization",
                jellyfinUserId: "Jellyfin 使用者 ID。",
                userIdFromProfile: "個人檔案 URL 中的使用者 ID",
                nameDisplayFormat: "名稱顯示格式。",
                customNameTemplate: "自訂名稱範本。",
                nameOnJellyfin: "Jellyfin 上的 {name}",
                coverTypeForTv: "電視節目的封面類型。",
                episodeNumberFormat: "集數格式。",
                overrideRichPresenceType: "覆寫 Rich Presence 類型。",
                showEpisodeNameAfter: "在季/集資訊後顯示單集名稱。",
                showPresenceWhenMedia: "媒體暫停時顯示狀態。",
                hideMediaDetails: "隱藏媒體詳細資料。",
                discordRichPresenceFor: "Gensokyo Radio 的 Discord Rich Presence。啟用後即可收聽！",
                refreshIntervalInSeconds: "重新整理間隔（秒）。",
                showWhatYouRe3: "透過 Navidrome 顯示你正在收聽的內容。",
                navidromeServerUrlMust: "Navidrome 伺服器 URL（必須是公開網域，例如 https://navidrome.example.com）。",
                navidromeUsername: "Navidrome 使用者名稱。",
                navidromePassword: "Navidrome 密碼。",
                optionalDiscordApplicationClient: "選用的 Discord 應用程式用戶端 ID。",
                howToFetchAlbum: "如何取得專輯封面。",
                optionalProvideYourOwn: "選用：提供你自己的 Last.fm API 金鑰（留空則使用預設）。",
                showNavidromeLogoIn: "在專輯封面右下角顯示 Navidrome 標誌。",
                showAlbumNameIn: "在狀態中顯示專輯名稱。",
                whichTypeOfActivity: "要顯示的活動類型。",
                showTheStateDetails: "在成員清單中顯示狀態/詳細資料行內容",
                hideRichPresenceWhen: "音樂暫停時隱藏 Rich Presence（而不是顯示碼錶）",
                theListeningToText: "「正在收聽」文字（例如 {artist}）",
                navidrome: "Navidrome",
                theMainLineShowing: "顯示正在播放歌曲的主行（例如 {song}）",
                song: "{song}",
                theLineBelowThe: "歌曲名稱下方的行（例如 {artist}）",
                artist: "{artist}",
                theAlbumLineE: "專輯行（例如 {album}）",
                album: "{album}",
                enableTabLabelsCurrenttab: "啟用 {{TAB_LABELS_currentTab}} 狀態。",
                statsFmProfile: "Stats.fm 個人檔案",
                viewSong: "檢視歌曲",
                showArtistName: "顯示藝人名稱",
                showTrackName: "顯示曲目名稱",
                enterValue: "輸入一個值"
            },
            name: "RichPresence",
            description: "適用於 AudioBookShelf、osu!、stats.fm、Jellyfin、Navidrome 和 Gensokyo Radio 的統一 Rich Presence 中心。",
            toast: {
                audiobookshelfRpcIsNot: "AudioBookShelf RPC 尚未設定。",
                jellyfinRpcIsNot: "Jellyfin RPC 尚未設定。",
                jellyfinReturnedAnInvalid: "Jellyfin 傳回了無效的回應。你的 API 金鑰可能有誤。"
            },
            option: {
                enabled: {
                    description: "啟用 Rich Presence 服務。",
                    label: "已啟用"
                },
                serviceSettings: {
                    description: "服務設定。",
                    label: "服務設定"
                },
                abs_enabled: {
                    description: "啟用 AudioBookShelf 狀態。",
                    label: "AudioBookShelf 已啟用"
                },
                tosu_enabled: {
                    description: "啟用 osu!（tosu）狀態。",
                    label: "osu!（tosu）已啟用"
                },
                sfm_enabled: {
                    description: "啟用 stats.fm 狀態。",
                    label: "Stats.fm 已啟用"
                },
                jf_enabled: {
                    description: "啟用 Jellyfin 狀態。",
                    label: "Jellyfin 已啟用"
                },
                gr_enabled: {
                    description: "啟用 Gensokyo Radio 狀態。",
                    label: "Gensokyo Radio 已啟用"
                },
                nd_enabled: {
                    description: "啟用 Navidrome 狀態。",
                    label: "Navidrome 已啟用"
                },
                abs_serverUrl: {
                    description: "AudioBookShelf 伺服器 URL。",
                    label: "AudioBookShelf 伺服器 URL"
                },
                abs_username: {
                    description: "AudioBookShelf 使用者名稱。",
                    label: "AudioBookShelf 使用者名稱"
                },
                abs_password: {
                    description: "AudioBookShelf 密碼。",
                    label: "AudioBookShelf 密碼"
                },
                sfm_username: {
                    description: "Stats.fm 使用者名稱。",
                    label: "Stats.fm 使用者名稱"
                },
                sfm_shareUsername: {
                    description: "顯示 stats.fm 個人檔案連結。",
                    label: "Stats.fm：分享使用者名稱"
                },
                sfm_shareSong: {
                    description: "顯示 stats.fm 上的歌曲連結。",
                    label: "Stats.fm：分享歌曲"
                },
                sfm_hideWithSpotify: {
                    description: "Spotify 執行時隱藏 stats.fm 狀態。",
                    label: "Stats.fm：Spotify 時隱藏"
                },
                sfm_hideWithExternalRPC: {
                    description: "外部 RPC 執行時隱藏 stats.fm 狀態。",
                    label: "Stats.fm：外部 RPC 時隱藏"
                },
                sfm_statusName: {
                    description: "自訂狀態文字。",
                    label: "Stats.fm：狀態名稱"
                },
                sfm_nameFormat: {
                    description: "名稱格式。",
                    label: "Stats.fm：名稱格式",
                    statusName: "使用自訂狀態名稱",
                    artistFirst: "使用「藝人 - 歌曲」格式",
                    songFirst: "使用「歌曲 - 藝人」格式",
                    artistOnly: "僅使用藝人名稱",
                    songOnly: "僅使用歌曲名稱",
                    albumName: "使用專輯名稱"
                },
                sfm_useListeningStatus: {
                    description: "顯示收聽狀態。",
                    label: "Stats.fm：使用收聽狀態"
                },
                sfm_missingArt: {
                    description: "封面缺失時的回退方式。",
                    label: "Stats.fm：缺少封面",
                    statsFmLogo: "使用大型 Stats.fm 標誌",
                    placeholder: "使用通用預留位置圖"
                },
                sfm_showLogo: {
                    description: "在專輯封面旁顯示 Stats.fm 標誌。",
                    label: "Stats.fm：顯示標誌"
                },
                sfm_alwaysHideArt: {
                    description: "停用下載專輯封面。",
                    label: "Stats.fm：一律隱藏封面"
                },
                jf_serverUrl: {
                    description: "Jellyfin 伺服器 URL。",
                    label: "Jellyfin 伺服器 URL"
                },
                jf_apiKey: {
                    description: "Jellyfin API 金鑰。",
                    label: "Jellyfin API 金鑰"
                },
                jf_userId: {
                    description: "Jellyfin 使用者 ID。",
                    label: "Jellyfin 使用者 ID"
                },
                jf_nameDisplay: {
                    description: "名稱顯示格式。",
                    label: "Jellyfin：名稱顯示",
                    default: "影集/電影名稱",
                    full: "影集 - 單集/曲目/電影名稱",
                    custom: "自訂"
                },
                jf_customName: {
                    description: "自訂名稱範本。",
                    label: "Jellyfin：自訂名稱"
                },
                jf_coverType: {
                    description: "電視節目的封面類型。",
                    label: "Jellyfin：封面類型",
                    series: "影集封面",
                    episode: "單集封面"
                },
                jf_episodeFormat: {
                    description: "集數格式。",
                    label: "Jellyfin：集數格式",
                    long: "S01E01",
                    fulltext: "第 1 季 第 1 集"
                },
                jf_showEpisodeName: {
                    description: "在季/集資訊後顯示單集名稱。",
                    label: "Jellyfin：顯示單集名稱"
                },
                jf_overrideType: {
                    description: "覆寫 Rich Presence 類型。",
                    label: "Jellyfin：覆寫類型",
                    off: "關閉",
                    listening: "正在收聽",
                    playing: "正在玩",
                    streaming: "正在直播",
                    watching: "正在觀看"
                },
                jf_showPausedState: {
                    description: "媒體暫停時顯示狀態。",
                    label: "Jellyfin：顯示暫停狀態"
                },
                jf_privacyMode: {
                    description: "隱藏媒體詳細資料。",
                    label: "Jellyfin：隱私模式"
                },
                gr_refreshInterval: {
                    description: "重新整理間隔（秒）。",
                    label: "Gensokyo Radio：重新整理間隔"
                },
                nd_serverUrl: {
                    description: "Navidrome 伺服器 URL（例如 https://navidrome.example.com）",
                    label: "Navidrome 伺服器 URL"
                },
                nd_username: {
                    description: "Navidrome 使用者名稱",
                    label: "Navidrome 使用者名稱"
                },
                nd_password: {
                    description: "Navidrome 密碼",
                    label: "Navidrome 密碼"
                },
                nd_clientId: {
                    description: "選用的 Discord 應用程式用戶端 ID",
                    label: "Navidrome：用戶端 ID"
                },
                nd_showSmallImage: {
                    description: "在專輯封面右下角顯示 Navidrome 標誌。",
                    label: "Navidrome：顯示小圖"
                },
                nd_showAlbum: {
                    description: "在狀態中顯示專輯名稱。",
                    label: "Navidrome：顯示專輯"
                },
                nd_albumArtMode: {
                    description: "如何取得專輯封面。",
                    label: "Navidrome：專輯封面模式",
                    none: "無",
                    instance: "Navidrome 執行個體（向 Discord 暴露伺服器 URL，不傳送驗證）",
                    lastfm: "Last.fm API（將曲目中繼資料傳送到 Last.fm）"
                },
                nd_lastfmApiKey: {
                    description: "選用的 Last.fm API 金鑰",
                    label: "Navidrome：Last.fm API 金鑰"
                },
                nd_refreshInterval: {
                    description: "重新整理間隔（秒）。",
                    label: "Navidrome：重新整理間隔"
                },
                nd_activityType: {
                    description: "活動類型",
                    label: "Navidrome：活動類型",
                    listening: "正在收聽",
                    playingFixesHiddenLines: "正在玩（修復隱藏的行）",
                    watching: "正在觀看"
                },
                nd_nameString: {
                    description: "活動名稱格式字串",
                    label: "Navidrome：名稱字串"
                },
                nd_detailsString: {
                    description: "活動詳細資料格式字串",
                    label: "Navidrome：詳細資料字串"
                },
                nd_stateString: {
                    description: "活動狀態格式字串",
                    label: "Navidrome：狀態字串"
                },
                nd_largeTextString: {
                    description: "活動大型文字格式字串",
                    label: "Navidrome：大型文字字串"
                },
                nd_statusDisplayType: {
                    description: "在成員清單中顯示曲目/藝人名稱",
                    off: "不顯示（顯示通用收聽訊息）"
                },
                nd_hideOnPause: {
                    description: "音樂暫停時隱藏 Rich Presence",
                    label: "Navidrome：暫停時隱藏"
                }
            },
            panel: {
                password: "密碼",
                statsFmUsername: "stats.fm 使用者名稱",
                customStatusText: "自訂狀態文字",
                nameFormat: "姓名格式",
                missingArtFallback: "缺少封面時的回退",
                showListeningStatus: "顯示收聽狀態",
                showStatsFmLogo: "顯示 Stats.fm 標誌",
                showProfileLink: "顯示個人檔案連結",
                showSongLink: "顯示歌曲連結",
                hideWithSpotify: "Spotify 時隱藏",
                hideWithExternalRpc: "外部 RPC 時隱藏",
                disableAlbumArt: "停用專輯封面",
                apiKey: "API 金鑰",
                userId: "使用者身分",
                nameDisplay: "名稱顯示",
                customNameTemplate: "自訂名稱範本",
                coverType: "封面類型",
                episodeFormat: "集數格式",
                overridePresenceType: "覆寫狀態類型",
                showEpisodeName: "顯示單集名稱",
                showWhenPaused: "暫停時顯示",
                privacyMode: "隱私模式",
                refreshInterval: "重新整理間隔",
                clientId: "用戶端 ID",
                albumArtMode: "專輯封面模式",
                lastFmApiKey: "Last.fm API 金鑰",
                showSmallImage: "顯示小圖",
                showAlbum: "顯示專輯",
                activityType: "活動類型",
                statusDisplayType: "狀態顯示類型",
                hideOnPause: "暫停時隱藏",
                activityNameFormat: "活動名稱格式",
                detailsFormat: "詳細資料格式",
                stateFormat: "狀態格式",
                largeTextFormat: "大型文字格式",
                enabled: "啟用"
            }
        },
        sedEnhanced: {
            option: {
                regexByDefault: {
                    description: "反轉 `r` 旗標：使用 `r` 時啟用非正規表示式模式，省略時使用正規表示式模式。",
                    label: "預設使用正規表示式"
                }
            },
            name: "SedEnhanced",
            description: "擴充 Discord 陽春的 `sed` 支援。"
        },
        showRolesInChat: {
            option: {
                showBots: {
                    description: "是否在機器人上顯示最高身分組。",
                    label: "顯示機器人"
                },
                useRoleColor: {
                    description: "圖示使用身分組顏色。",
                    label: "使用身分組顏色"
                }
            },
            name: "ShowRolesInChat",
            description: "在聊天訊息中於使用者名稱旁顯示其最高身分組。可在身分組的右鍵選單中隱藏/顯示特定身分組。",
            text: {
                chatRoleActions: "聊天身分組動作",
                unhideRolesInChat: "在聊天中取消隱藏身分組",
                showRoleInChat: "在聊天中顯示身分組",
                hideRoleInChat: "在聊天中隱藏身分組"
            }
        },
        silenceUsers: {
            option: {
                mutedUserIds: {
                    description: "以逗號分隔的 Discord 使用者 ID，將靜音其提及與伺服器徽章。",
                    label: "已靜音使用者 ID"
                }
            },
            name: "SilenceUsers",
            description: "靜音特定使用者的 @提及通知與伺服器徽章計數。一般訊息與私訊不受影響。"
        },
        songLink: {
            text: {
                showIfAvailable: "可用時顯示",
                openInDesktopApp: "在桌面應用程式中開啟",
                loadingSongLink: "正在載入歌曲連結...",
                pleaseProvideAMusic: "請提供音樂連結。",
                thisWillTakeA: "這需要一點時間...",
                noAlternativePlatformsFound: "找不到此連結的其他平台。",
                failedToResolveMusic: "無法解析音樂連結",
                logo: "{{name}} 標誌"
            },
            option: {
                servicesSettings: {
                    description: "服務設定",
                    label: "服務設定"
                },
                userCountry: {
                    description: "用於查詢的國家/地區（兩位字母代碼）",
                    label: "使用者國家/地區"
                },
                includeMetadata: {
                    description: "將曲目標題與藝人名稱作為標題包含。",
                    label: "包含中繼資料"
                }
            },
            name: "SongLink",
            description: "在歌曲連結下方新增串流服務按鈕",
            command: {
                musiclink: "將音樂連結轉換為其他串流平台的連結。",
                url: "音樂連結（Spotify、Deezer、YouTube、Tidal、Apple Music、SoundCloud）"
            }
        },
        songSpotlight: {
            name: "SongSpotlight",
            description: "在你的個人檔案中展示歌曲",
            text: {
                songSpotlight: "Song Spotlight",
                explicit: "含不雅內容",
                addSong: "新增歌曲",
                addANewSong: "新增歌曲",
                copyLink: "複製連結",
                removeSong: "移除歌曲",
                failedToLoad: "載入失敗！",
                areYouSure: "確定嗎？",
                thisWillOverwriteYour: "這將覆寫你目前的歌曲。",
                continue: "繼續",
                nevermind: "算了",
                thisWillPermanentlyDelete: "這將永久刪除你的所有歌曲。",
                delete: "刪除",
                signInToSong: "登入 Song Spotlight",
                songs: "歌曲",
                authorization: "Authorization",
                importFromClipboard: "從剪貼簿匯入",
                copyToClipboard: "複製到剪貼簿",
                signOut: "登出",
                deleteSongs: "刪除歌曲",
                more: "更多",
                editSongs: "編輯歌曲",
                copyJson: "複製 JSON",
                looksLikeThereS: "這裡好像什麼都沒有！",
                uhOhSongSpotlight: "糟糕！Song Spotlight 載入失敗。可查看主控台了解詳情。",
                stealSong: "搶走歌曲",
                profileSongs: "個人檔案歌曲",
                notEnoughSpace: "空間不足",
                alreadyAdded: "你已經新增過這首歌",
                invalidLink: "無效的連結",
                failedToParseLink: "無法解析連結",
                invalidUrl: "無效的 URL",
                goAddSongs: "還在等什麼？快在你的 Song Spotlight 加入幾首歌吧！",
                tellUserToAddSongs: "告訴 {{name}} 在 Song Spotlight 加入幾首歌吧！",
                supportedServices: "Song Spotlight 支援以下服務：",
                viewSongsVia: "你也可以透過",
                viewSongsViaSuffix: "指令查看你的歌曲！",
                coverTooltipOwner: "{{label}} 的 {{sublabel}}",
                coverTooltipBy: "{{sublabel}} 的 {{label}}",
                lastUpdated: "最後更新",
                save: "儲存",
                showMore: "再顯示 {{count}} 個"
            },
            toast: {
                youHaveBeenSigned: "你已從 Song Spotlight 登出。請重新登入。",
                songSpotlightError: "Song Spotlight：{{error}}",
                successfullyAuthorized: "授權成功！",
                failedToPlaySong: "無法播放歌曲試聽！",
                addedSong: "已新增歌曲！",
                removedSong: "已移除歌曲！",
                noJsonInClipboard: "剪貼簿中沒有 JSON！",
                invalidSongSpotlightData: "剪貼簿中的 Song Spotlight 資料無效！",
                oneOrMoreImported: "一首或多首匯入的歌曲無效。",
                importedSongsFromClipboard: "已從剪貼簿匯入歌曲！",
                successfullySavedSongs: "已成功儲存歌曲！",
                successfullySignedOut: "已成功登出！",
                successfullyDeletedSongs: "已成功刪除歌曲！",
                youDonTHave: "你的空間不足！",
                uhOhThisSong: "糟糕，這首歌不存在！",
                youAlreadyHaveThis: "你已經新增過這首歌了！",
                youDonTHave2: "你……沒有新增這首歌？",
                fetchError: "Song Spotlight 請求出錯：{{path}}"
            },
            option: {
                collapseSongList: {
                    description: "將使用者個人檔案上的歌曲清單收合為一個開啟獨立選單的按鈕",
                    label: "收合歌曲清單"
                },
                profileSongsLimit: {
                    description: "首次點擊使用者時顯示的歌曲數量",
                    label: "個人檔案歌曲數量上限"
                },
                previewVolume: {
                    description: "歌曲試聽播放音量",
                    label: "試聽音量"
                }
            }
        },
        stopAutoUnread: {
            name: "StopAutoUnread",
            description: "阻止 Discord 自動將頻道的通知設定提升為「所有訊息」"
        },
        themeLibrary: {
            text: {
                enablePlugin: "啟用外掛",
                cancel: "取消",
                holdOn: "等一下！",
                thisThemeRequiresThe: "此主題需要",
                pluginToWorkProperly: "外掛才能正常運作！",
                doYouWantTo: "要啟用它嗎？",
                themeInfo: "主題資訊",
                viewSource: "檢視原始碼",
                close: "關閉",
                download: "下載",
                overwrite: "覆寫",
                keepMyFile: "保留我的檔案",
                copyToClipboard: "複製到剪貼簿",
                conflict: "衝突！",
                themeSource: "主題原始碼",
                aThemeWithThe: "同名主題",
                alreadyExists: "已存在",
                inYourThemesDirectory: "於你的主題目錄中！要覆寫嗎？",
                version: "版本",
                likes: "按讚數",
                donate: "贊助",
                supportServer: "支援伺服器",
                source: "原始碼",
                tags: "標籤",
                youCanSupportThe: "你可以透過下方贊助支持作者！",
                joinDiscordServer: "加入 Discord 伺服器",
                viewThemeSource: "檢視主題原始碼",
                showAll: "顯示全部",
                showThemes: "顯示主題",
                showSnippets: "顯示程式碼片段",
                showMostLiked: "顯示最受歡迎",
                showDark: "顯示深色",
                showLight: "顯示淺色",
                showEnabled: "顯示已啟用",
                showDisabled: "顯示已停用",
                searchForATheme: "搜尋主題...",
                gettingTheLatestThemes: "正在取得最新主題...",
                thisWonTTake: "馬上就好！",
                failedToFetchThemes: "取得主題失敗",
                couldNotFetchThe: "無法取得主題清單。請稍後再試。",
                wantYourThemeRemoved: "想要移除你的主題？",
                hide: "隱藏",
                noThemeFound: "找不到主題。",
                tryNarrowingYourSearch: "嘗試縮小搜尋範圍。",
                themeLibrary: "主題庫",
                successfullyAuthorizedWithThemelibrary: "已成功透過 ThemeLibrary 授權！",
                failedToAuthorizeCheck: "授權失敗，請查看主控台",
                successfullyDeauthorizedFromThemelibrary: "已成功取消 ThemeLibrary 授權！",
                failedToDeauthorizeCheck: "取消授權失敗，請查看主控台",
                themelibraryAuth: "ThemeLibrary 驗證",
                themeRemoval: "主題移除",
                allThemeAuthorsAre: "所有主題作者皆在主題資訊中署名，且未修改任何原始碼。如果你仍希望移除你的主題，請點擊下方提交 Issue。",
                authorizeWithThemelibrary: "透過 ThemeLibrary 授權",
                copyThemelibraryToken: "複製 ThemeLibrary 權杖",
                deauthorizeThemelibrary: "取消 ThemeLibrary 授權",
                themeDetails: "{{name}} 詳細資料",
                mostLiked: "最多人喜歡",
                newestAdditions: "最新加入",
                removeTheme: "移除主題",
                addTheme: "新增主題",
                authors: "作者",
                author: "作者",
                nobodyLikedTheme: "還沒有人喜歡這個主題。",
                nobodyLikedSnippet: "還沒有人喜歡這個片段。",
                usersLikedTheme: "{{likes}} 位使用者喜歡這個主題！",
                usersLikedSnippet: "{{likes}} 位使用者喜歡這個片段！",
                openThemeLibrary: "開啟主題庫",
                lastUpdated: "此主題最後更新於",
                removalInfo: "如果你希望永久移除你的主題，請在以下位置提交 issue：",
                themes: "主題",
                requestRemoval: "申請移除主題",
                pluginSuffix: "外掛！"
            },
            toast: {
                downloadedName: "已下載 {{name}}！",
                failedToDownloadName: "下載 {{name}} 失敗！（請查看主控台）",
                invalidOrExpiredInvite: "邀請無效或已過期！",
                copiedToClipboard: "已複製到剪貼簿",
                noUniquetokenPresentTry: "沒有 uniqueToken，請先授權！",
                noTokenToCopy: "沒有可複製的權杖，請先授權！",
                copiedToClipboard2: "已複製到剪貼簿！"
            },
            name: "ThemeLibrary",
            description: "Plexcord 的主題庫。",
            option: {
                hideWarningCard: {
                    description: "隱藏主題庫分頁頂端的警告卡片",
                    label: "隱藏警告卡片"
                },
                buttons: {
                    description: "ThemeLibrary 按鈕",
                    label: "按鈕"
                }
            }
        },
        translatePlus: {
            name: "Translate+",
            description: "Plexcord 的翻譯外掛，但支援人造語言！",
            text: {
                translate: "翻譯",
                dismiss: "忽略",
                translationFailedDueTo: "由於錯誤，翻譯失敗。",
                translatedFrom: "翻譯自{{lang}}"
            },
            option: {
                target: {
                    description: "目標語言",
                    label: "目標"
                },
                toki: {
                    description: "啟用道本語",
                    label: "道本語"
                },
                sitelen: {
                    description: "啟用 Sitelen Pona",
                    label: "Sitelen Pona"
                },
                shavian: {
                    description: "啟用蕭伯納字母",
                    label: "蕭伯納字母"
                }
            }
        },
        triviaAI: {
            name: "TriviaAI",
            description: "借助 AI 幫你回答知識問答題的外掛。",
            text: {
                answerWithAi: "用 AI 回答",
                enterApiKeyHere: "在此輸入你的 AI 端點的 API 金鑰。",
                enterSystemPrompt: "輸入系統提示詞。",
                enterYourOpenaiCompatible: "在此輸入你的相容 OpenAI 的 AI 端點。",
                status: "狀態 {{status}}"
            },
            option: {
                apiKey: {
                    description: "API 金鑰。",
                    label: "API 金鑰"
                },
                model: {
                    description: "要使用的 AI 模型。",
                    label: "模型",
                    placeholder: "例如 google/gemini-3-flash-preview、inception/mercury、openai/gpt-5.2-chat 等"
                },
                systemPrompt: {
                    description: "AI 的系統提示詞。預留位置：{current_user}、{current_time}",
                    label: "系統提示詞"
                },
                maxTokens: {
                    description: "回應中的最大 token 數。",
                    label: "最大 token 數"
                },
                endpoint: {
                    description: "相容 OpenAI 的 AI 端點。",
                    label: "端點"
                },
                context: {
                    description: "作為上下文包含的先前訊息數量。",
                    label: "上下文"
                },
                passMessageAuthorName: {
                    description: "將訊息傳給 AI 時在內容前加上作者名稱，可協助 AI 區分對話中的不同使用者。",
                    label: "傳遞訊息作者名稱"
                },
                treatSelfAsAssistant: {
                    description: "啟用後，你自己的訊息會在上下文中被視為助理訊息。這會導致某些模型開始產生同人小說。",
                    label: "將自己視為助理"
                },
                mode: {
                    description: "如何處理回答？",
                    label: "模式",
                    autoreply: "自動回覆",
                    chatbar: "取代聊天列文字",
                    bot: "Clyde"
                },
                supportImages: {
                    description: "將圖片作為上下文傳給 AI（如果有）。並非所有模型都支援。",
                    label: "支援圖片"
                },
                sendImagesAsBase64: {
                    description: "以 base64 格式將圖片傳送給 AI。",
                    label: "以 base64 傳送圖片"
                }
            },
            toast: {
                triviaaiApiSettingsAre: "TriviaAI：API 設定不完整。",
                errorGettingResponseFrom: "從 AI 模型取得回應時發生錯誤"
            }
        },
        unreadCountBadge: {
            option: {
                showOnMutedChannels: {
                    description: "在已靜音頻道上顯示未讀數",
                    label: "在已靜音頻道上顯示"
                },
                notificationCountLimit: {
                    description: "顯示 +99 而非實際數量",
                    label: "通知數量上限"
                }
            },
            name: "UnreadCountBadge",
            description: "在頻道清單中的頻道上顯示未讀訊息數徽章"
        },
        userPFP: {
            toast: {
                gifsWebpMustBe: "GIF/WebP 必須透過 URL 新增。請將 GIF/WebP 上傳到圖床並貼上連結。"
            },
            text: {
                save: "儲存",
                delete: "刪除",
                customAvatar: "自訂頭像",
                original: "原始",
                local: "本機",
                enterPngGifUrl: "輸入 PNG/GIF URL",
                setAvatar: "設定頭像",
                usingTheSetAvatar: "設定頭像功能僅在本機生效，只有你能看到變化。",
                joinUserpfpServer: "加入 UserPFP 伺服器",
                dropHere: "拖放到這裡！",
                dragOrClick: "⬆ 拖入圖片或點擊上傳（GIF 或 WebP 請使用 URL）",
                uploadedFile: "（已上傳的檔案）",
                supportHere: "在此支持 UserPFP"
            },
            option: {
                overrideServerAvatars: {
                    description: "用自訂頭像覆寫伺服器頭像；若未設定自訂頭像則使用預設使用者頭像。",
                    label: "覆寫伺服器頭像"
                },
                preferNitro: {
                    description: "當預設動態（Nitro）頭像與 UserPFP 頭像同時存在時使用哪個",
                    label: "優先 Nitro",
                    false: "UserPFP",
                    true: "Nitro"
                },
                databaseSource: {
                    description: "載入資料庫的 URL",
                    label: "資料庫來源"
                }
            },
            name: "UserPFP",
            description: "允許你為自己和其他使用者設定本機靜態或動態頭像"
        },
        userpluginInstaller: {
            toast: {
                restartToApplyChanges: "重新啟動以套用變更！"
            },
            text: {
                installError: "安裝錯誤",
                done: "完成！",
                later: "稍後",
                updateError: "更新錯誤",
                checkingForUpdates: "正在檢查更新...",
                loadingPlugins: "正在載入外掛...",
                pluginUpdatesAvailable: "有可用的外掛更新",
                theFollowingPluginsAre: "以下外掛已過時：",
                youCanUpdatePlugins: "你可以在下方更新外掛。",
                installPlugin: "安裝外掛",
                userplugininstallerNotFullyLoaded: "UserpluginInstaller 未完全載入",
                youNeedToRestart: "需要重新啟動才能載入原生部分 :)",
                restartNow: "立即重新啟動",
                someUserpluginsAreOut: "部分 UserPlugins 已過時！",
                clickToOpenThe: "點擊開啟 UserPlugin 更新程式",
                plexcordDoesNotModerate: "Plexcord 不審核使用者外掛，也不對安裝它們可能產生的任何後果負責。",
                onlyInstallUserpluginsFrom: "僅安裝你信任的開發者的使用者外掛。風險完全由你自行承擔。",
                setGitPath: "設定 Git 路徑",
                installHint: "你可以在此貼上複製 URL，從 GitHub、GitLab、Codeberg、git.nin0.dev 或 plugins.nin0.dev 安裝外掛。",
                enableAndRestart: "啟用並重新啟動",
                enableAndRefresh: "啟用並重新整理",
                tabCounts: "（{{total}} 個，已啟用 {{enabled}} 個）",
                possiblyMore: "可能還有更多，因為更新檢查尚未完成。",
                alreadyInstalled: "外掛已安裝，請在下方更新",
                invalidUrl: "網址無效，請閱讀上方說明",
                install: "安裝",
                restart: "重新啟動",
                refresh: "重新整理",
                update: "更新",
                source: "原始碼",
                support: "支援",
                managePlugins: "管理外掛",
                uninstalledRestart: "{{name}} 已解除安裝。需要重新啟動才能完全移除該外掛。",
                uninstalledRefresh: "{{name}} 已解除安裝。需要重新整理才能完全移除該外掛。",
                updatedRestart: "{{name}} 已更新。需要重新啟動才能套用更新。",
                updatedRefresh: "{{name}} 已更新。需要重新整理才能套用更新。",
                installedBody: "{{name}} 已成功安裝。接下來呢？",
                installedNativeBody: "{{name}} 已成功安裝。但由於它使用原生功能，需要重新啟動用戶端。接下來呢？"
            },
            option: {
                allowlistedChannels: {
                    description: "以逗號分隔的頻道清單，在其中顯示「安裝外掛」按鈕。在 Plexcord 使用者外掛頻道中一律顯示",
                    label: "允許的頻道"
                },
                notifyIfUpdate: {
                    description: "當 UserPlugins 需要更新時顯示 Plexcord 通知",
                    label: "有更新時通知"
                },
                neverNotifyForPlugins: {
                    description: "永不為這些外掛顯示更新通知（仍可在 UserPlugins 分頁中更新）",
                    label: "永不通知的外掛"
                }
            },
            name: "UserpluginInstaller",
            description: "一鍵安裝使用者外掛"
        },
        vCPanelSettings: {
            option: {
                title1: {
                    label: "標題 1"
                },
                uncollapseSettingsByDefault: {
                    description: "預設自動展開語音設定",
                    label: "預設展開設定"
                },
                title2: {
                    label: "標題 2"
                },
                outputVolume: {
                    description: "顯示輸出音量滑桿",
                    label: "輸出音量"
                },
                inputVolume: {
                    description: "顯示輸入音量滑桿",
                    label: "輸入音量"
                },
                outputDevice: {
                    description: "顯示輸出裝置選擇器",
                    label: "輸出裝置"
                },
                inputDevice: {
                    description: "顯示輸入裝置選擇器",
                    label: "輸入裝置"
                },
                camera: {
                    description: "顯示相機選擇器",
                    label: "相機"
                },
                title3: {
                    label: "標題 3"
                },
                showOutputVolumeHeader: {
                    description: "在輸出音量滑桿上方顯示標題",
                    label: "顯示輸出音量標題"
                },
                showInputVolumeHeader: {
                    description: "在輸入音量滑桿上方顯示標題",
                    label: "顯示輸入音量標題"
                },
                showOutputDeviceHeader: {
                    description: "在輸出裝置選擇器上方顯示標題",
                    label: "顯示輸出裝置標題"
                },
                showInputDeviceHeader: {
                    description: "在輸入裝置選擇器上方顯示標題",
                    label: "顯示輸入裝置標題"
                },
                showVideoDeviceHeader: {
                    description: "在相機選擇器上方顯示標題",
                    label: "顯示視訊裝置標題"
                }
            },
            name: "VCPanelSettings",
            description: "直接在語音面板中控制語音設定",
            text: {
                appearance: "外觀",
                settingsToShow: "要顯示的設定",
                headersToShow: "要顯示的標題",
                outputVolume: "輸出音量",
                inputVolume: "輸入音量",
                outputDevice: "輸出裝置",
                inputDevice: "輸入裝置",
                settings: "設定",
                hide: "隱藏"
            }
        },
        voiceMessageTranscriber: {
            text: {
                autoDetect: "自動偵測",
                start: "開始",
                transcriptionOptions: "轉錄選項",
                audioLanguage: "音訊語言",
                retry: "重試",
                transcriptionFailed: "轉錄失敗",
                transcribeVoiceMessage: "轉錄語音訊息",
                close: "關閉",
                baseRecommended: "Base（建議）",
                small: "Small",
                largeV3TurboBest: "Large v3 Turbo（最佳準確度，建議使用 GPU）",
                transcribe: "轉錄",
                translateToEnglish: "翻譯成英文",
                voiceMessageTranslation: "語音訊息翻譯",
                voiceMessageTranscription: "語音訊息轉錄",
                hideTimestamps: "隱藏時間戳記",
                showTimestamps: "顯示時間戳記",
                copied: "已複製！",
                copyText: "複製文字",
                downloadingAudio: "正在下載音訊...",
                processingAudio: "正在處理音訊...",
                loadingModel: "正在載入模型...",
                transcribing: "正在轉錄...",
                transcription: "轉錄",
                transcriptionError: "轉錄錯誤",
                transcribingInProgress: "轉錄進行中...",
                initializing: "正在初始化...",
                workerCrashed: "轉錄程序已當機",
                workerStopped: "轉錄程序已停止",
                deleteCache: "刪除所有快取檔案（{{size}} MB）",
                action: "操作"
            },
            name: "VoiceMessageTranscriber",
            description: "由 Whisper 驅動的本機語音訊息轉錄",
            option: {
                embed: {
                    description: "直接在語音訊息附件中顯示轉錄內容，而不是彈出視窗。",
                    label: "嵌入"
                },
                maintainHorizontal: {
                    description: "保持嵌入轉錄框的水平尺寸並縱向擴展。",
                    label: "保持水平"
                },
                selectedModel: {
                    description: "模型大小。",
                    onnxcommunitywhispertiny: "Tiny（最快，準確度最低）"
                },
                useGpu: {
                    description: "在支援時使用 GPU（WebGPU）執行模型。速度快得多，並讓大型模型可用。無法使用時回退到 CPU。",
                    label: "使用 GPU"
                },
                quantized: {
                    description: "在 CPU 上執行時使用量化模型（體積更小，品質略有下降）。",
                    label: "量化"
                },
                deleteModalFiles: {
                    description: "從儲存空間刪除快取的檔案。",
                    label: "刪除模型檔案"
                }
            }
        },
        voiceMessagesInBackground: {
            name: "VoiceMessagesInBackground",
            description: "透過同步的迷你播放器，在切換聊天時持續播放語音訊息。",
            text: {
                voiceMessagesInBackground: "背景語音訊息播放器",
                returnToChannelname: "返回 {{channelName}}",
                voiceMessagePosition: "語音訊息位置",
                changePlaybackSpeed: "變更播放速度",
                playbackSpeedSpeedTimes: "播放速度 {{speed}} 倍",
                closeVoiceMessagePlayer: "關閉語音訊息播放器",
                voiceMessage: "語音訊息",
                directMessage: "私人訊息",
                resume: "繼續播放語音訊息",
                pause: "暫停語音訊息"
            }
        },
        webPWA: {
            name: "WebPWA",
            description: "讓 Discord 可作為應用程式（PWA）安裝。啟用通知徽章、全域快速鍵與 Discord 自訂標題列。",
            text: {
                activities: "活動",
                hopIn: "加入",
                status: "狀態",
                emojis: "表情符號",
                rooms: "房間",
                discord: "Discord",
                platforms: "平台",
                keybindsInfoBefore: "支援自訂全域「按下 X」快捷鍵。前往",
                keybindsInfoAfter: "進行變更。不支援「按住 X」快捷鍵。"
            }
        },
        "webRichPresence (arRPC)": {
            name: "WebRichPresence (arRPC)"
        },
        webScreenShare: {
            option: {
                resolution: {
                    description: "解析度",
                    label: "解析度"
                },
                frameRate: {
                    description: "幀率",
                    label: "幀率"
                },
                contentHint: {
                    description: "內容提示",
                    label: "內容提示"
                },
                systemAudio: {
                    description: "靜音系統音訊",
                    label: "系統音訊"
                }
            },
            name: "WebScreenShare",
            description: "新增螢幕分享選項選單。可變更解析度、幀率、編碼提示與系統音訊設定。",
            text: {
                stream: "直播",
                streamMuted: "直播已靜音",
                streamMode: "直播模式",
                muteStreamAudio: "靜音直播音訊",
                preventsSystemAudioFrom: "防止系統音訊被包含在你的直播中。",
                showStreamPreviews: "顯示直播預覽",
                allowsOthersToSee: "允許他人在加入前預覽你的直播。",
                smootherVideo: "更流暢的影片",
                cleanerText: "更清晰的文字",
                userPreset: "使用者預設",
                custom: "自訂",
                gaming: "遊戲",
                screenshare: "螢幕分享"
            }
        },
        whitelistedEmojis: {
            option: {
                defaultEmojis: {
                    description: "除非在白名單中，否則在自動完成中隱藏預設 Unicode 表情符號。",
                    label: "預設表情符號"
                },
                serverEmojis: {
                    description: "除非在白名單中，否則在自動完成中隱藏伺服器自訂表情符號。",
                    label: "伺服器表情符號"
                },
                disableToasts: {
                    description: "新增或移除表情符號時不顯示提示。",
                    label: "停用提示"
                },
                whiteListedEmojis: {
                    description: "白名單表情符號",
                    label: "白名單表情符號"
                },
                exportEmojis: {
                    description: "匯出表情符號",
                    label: "匯出表情符號"
                },
                importEmojis: {
                    description: "匯入表情符號",
                    label: "匯入表情符號"
                },
                resetEmojis: {
                    description: "重設表情符號",
                    label: "重設表情符號"
                }
            },
            name: "WhitelistedEmojis",
            description: "可停用白名單以外的所有訊息表情符號。",
            toast: {
                addedLengthEmojisTo: "已將 {{length}} 個表情符號新增到清單，{{length}} 個已在清單中",
                removedLengthEmojisFrom: "已從清單移除 {{length}} 個表情符號",
                nameIsAlreadyIn: "「{{name}}」已在清單中",
                addedNameToThe: "已將「{{name}}」新增到清單",
                nameIsNotIn: "「{{name}}」不在清單中",
                removedNameFromThe: "已將「{{name}}」從清單移除",
                successfullyExportedEmojis: "已成功匯出表情符號",
                successfullyImportedEmojis: "已成功匯入表情符號",
                invalidJsonData: "無效的 JSON 資料",
                failedToImportEmojis: "匯入表情符號失敗：{{err}}",
                resetEmojis: "表情符號已重設"
            },
            text: {
                areYouSure: "確定嗎？",
                thisWillOverwriteYour: "這將覆寫你目前的白名單。",
                import: "匯入",
                cancel: "取消",
                thisWillRemoveAll: "這將從白名單中移除所有表情符號。",
                reset: "重設",
                addAllGuildEmojis: "新增伺服器所有表情符號",
                removeAllGuildEmojis: "移除伺服器所有表情符號",
                noEmojisInThe: "白名單中沒有表情符號。",
                removeAll: "全部移除",
                removeFromWhitelist: "從白名單移除",
                addToWhitelist: "加入白名單",
                defaultEmojis: "預設表情符號",
                guildEmojis: "{{name}} 的表情符號",
                guildFallback: "伺服器 {{id}}",
                whitelistedEmojis: "白名單表情符號",
                remove: "移除"
            }
        },
        wigglyText: {
            option: {
                intensity: {
                    description: "動畫強度（px）",
                    label: "強度"
                }
            },
            name: "WigglyText",
            description: "新增一種讓文字扭動的新 Markdown 格式。",
            text: {
                leftAndRight: "左右",
                byTyping: "輸入",
                upAndDown: "上下",
                inACircle: "繞圈",
                youCanMakeTextWiggle: "你可以透過以下方式讓文字搖擺："
            }
        },
        fixDiscordCss: {
            description: "修正 Discord 的 CSS 延遲"
        },
        directFileDownload: {
            name: "DirectFileDownload",
            description: "直接從 Discord 下載檔案，而不是在瀏覽器中開啟"
        },
        githubRepos: {
            text: {
                failedToFetchRepositories: "無法取得儲存庫",
                personal: "個人",
                unknown: "未知",
                sortedByCount: "依儲存庫數量排序。點擊以 A-Z 排序",
                sortedAlphabetically: "依 A-Z 排序。點擊以儲存庫數量排序",
                mostRepos: "儲存庫最多"
            }
        }
    }
} as const;

export default translations;
