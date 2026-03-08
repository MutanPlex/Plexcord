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
                label: "迪爾",
                description: "選擇您的 Plexcord 首選語言。",
                placeholder: "選擇語言"
            }
        },
        location: {
            label: "設定位置",
            description: "Plexcord 確定設定部分的放置位置",
            top: "到頂部",
            nitro: {
                above: "在硝基部分的頂部",
                below: "在硝基部分下"
            },
            activity: {
                above: "以上事件設定",
                below: "在事件設定下"
            },
            bottom: "在高處"
        },
        switches: {
            useQuickCss: {
                label: "啟用自訂 CSS",
                description: "從 QuickCSS 編輯器載入自訂 CSS。 這允許您使用自己的風格自訂 Discord 的外觀。"
            },
            enableReactDevtools: {
                label: "啟用 React 開發者工具",
                description: "啟用 React Developer Tools 擴充功能來偵錯 Discord 的 React 元件。 對於插件開發很有用。"
            },
            mainWindowFrameless: {
                label: "停用主視窗框架",
                description: "拆除局部窗框以獲得更乾淨的外觀。 您仍然可以透過拖曳標題列區域來移動視窗。"
            },
            frameless: {
                label: "停用窗框",
                description: "拆除局部窗框以獲得更乾淨的外觀。 您仍然可以透過拖曳標題列區域來移動視窗。"
            },
            winNativeTitleBar: {
                label: "使用 Windows 的本機標題列而不是 Discord 的自訂標題列",
                description: "將 Discord 的自訂標題列替換為標準 Windows 標題列。 這可能會提高與某些視窗管理工具的相容性。"
            },
            transparent: {
                label: "啟用視窗透明度",
                description: "讓 Discord 視窗透明。 需要一個支持透明度的主題，否則它不會做任何事情。",
                isWindows: "這將阻止視窗調整大小並阻止您將視窗捕捉到螢幕邊緣。",
                notWindows: "這將阻止調整視窗大小。"
            },
            winCtrlQ: {
                label: "儲存 Ctrl+Q 捷徑以關閉 Discord（取代 Alt+F4）",
                description: "新增 Ctrl+Q 作為關閉 Discord 的鍵盤快速鍵。 這提供了 Alt+F4 的替代方法來快速關閉應用程式。"
            },
            disableMinSize: {
                label: "禁用最小視窗大小",
                description: "允許 Discord 視窗調整大小小於其預設最小大小。 對於平鋪視窗管理器或小螢幕很有用。"
            }
        },
        quickActions: {
            title: "快速交易",
            description: "您可能想要經常使用的常見操作。 這些快捷方式無需導航選單即可快速存取常用功能。",
            notificationLog: "通知日誌",
            editQuickCSS: "QuickCSS 編輯",
            relaunchDiscord: "重新啟動不和諧",
            openSettingsFolder: "打開設定資料夾",
            viewSourceCode: "查看原始碼"
        },
        specialCards: {
            donations: {
                title: "捐款",
                subtitle: "感謝您的捐贈！",
                description: "您可以隨時透過訊息@mutanplex 管理您的權限。",
                button: "捐款",
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
                description: "現在，您因對 Plexcord 做出貢獻而獲得了一枚很酷的徽章！",
                buttonTitle: "看看你貢獻了什麼"
            }
        },
        settingsSection: {
            title: "設定",
            description: "配置 Plexcord 與 Discord 的整合和行為方式。 這些設定會影響 Discord 用戶端的外觀和行為。",
            hintParts: {
                prefix: "透過配置 {{pluginLink}} 設定，您可以自訂此設定部分在 Discord 設定選單中的顯示位置。",
                linkText: "設定插件"
            }
        },
        notifications: {
            title: "通知",
            description: "配置 Plexcord 如何處理通知。 您可以自訂接收警報的時間和方式，或查看過去通知的記錄。",
            settings: "通知設定",
            viewLog: "查看通知記錄",
            permissions: {
                denied: {
                    title: "桌面通知權限被拒絕",
                    label: "您已拒絕通知權限。 桌面通知不起作用！"
                }
            },
            style: {
                label: "通知樣式",
                description: "有些插件可能會向您顯示通知。 它們有兩種風格：",
                plexcord: "Plexcord 通知",
                plexcordDesc: "這些是應用程式內通知",
                desktop: "桌面通知",
                desktopDesc: "本機桌面通知（例如當您收到 ping 時）",
                onlyWhenNotFocused: "僅當 Discord 未聚焦時才使用桌面通知",
                always: {
                    desktop: "始終使用桌面通知",
                    plexcord: "始終使用 Plexcord 通知"
                }
            },
            positions: {
                label: "通知位置",
                right: {
                    bottom: "右下",
                    top: "右上"
                },
                left: {
                    bottom: "左下",
                    top: "左上"
                }
            },
            missed: {
                label: "錯過通知的數量",
                description: "當您重新關注 Discord 時，將會彈出一條通知，告知您錯過的任何通知。",
                whileYou: "當你不在的時候",
                count: "收到 {{count}} 筆通知{{s}}",
                s: " "
            },
            timeout: {
                label: "通知逾時",
                description: "通知在自動消失之前在螢幕上停留多長時間（以秒為單位）"
            },
            logLimit: {
                label: "通知日誌限制",
                description: "通知日誌中儲存的最大通知數。 設定為 {{disable}} 以停用通知日誌記錄，設定為 {{unlimited}} 以不自動刪除舊通知"
            },
            opacity: {
                label: "不透明度",
                description: "應用內通知的不透明度"
            },
            maxNotifications: {
                label: "最大通知量",
                description: "同時顯示的最大通知數"
            },
            behavior: {
                label: "通知行為",
            },
            disableInStreamerMode: {
                label: "在廣播模式下停用",
                description: "在廣播模式下停用通知"
            },
            renderImages: {
                label: "處理影像",
                description: "渲染通知中的影像"
            },
            streamingTreatment: {
                label: "廣播者模式行為",
                description: "分享螢幕時如何處理通知",
                normal: "正常 - 正常顯示通知",
                noContent: "無內容 - 隱藏通知正文",
                ignore: "忽略 – 完全不顯示通知"
            },
        },
        macVibrancy: {
            title: "視窗閃爍樣式（需要重新啟動）",
            description: "自訂 macOS 視窗閃爍效果。 這控制 Discord 視窗的模糊和透明度樣式。 需要重新啟動才能使變更生效。",
            placeholder: "視窗閃爍樣式",
            style: {
                no: "沒有搖晃",
                underPage: "下頁（窗戶著色）",
                content: "內容",
                window: "窗戶",
                selection: "投票",
                titlebar: "標題列",
                header: "標題",
                sidebar: "側邊欄",
                tooltip: "工具提示",
                menu: "選單",
                popover: "彈出視窗",
                fullscreenUI: "全螢幕UI（透明但略顯暗淡）",
                hud: "HUD（最透明）"
            }
        }
    },

    plugins: {
        title: "外掛",
        new: "新的",
        unknown: "未知",
        noDescription: "描述不可用。",
        restart: {
            apply: "重新啟動以應用更改！",
            required: "需要重啟！",
            description: "立即重新啟動以應用新的插件和設置",
            following: "以下插件需要重新啟動：",
            fully: "有些插件需要重新啟動才能完全停用。",
            would: "您想重新啟動嗎？",
            remainingCount: "還有 {{count}} 個",
            resetDefault: "重設為預設設定",
            failed: "無法初始化相依性：",
            button: {
                restart: "重新啟動",
                later: "然後！",
                now: "立即重新啟動",
                cancel: "取消",
                disableWarning: "禁用警報",
                disableAll: "全部禁用",
                reset: "重置",
                close: "四分之一"
            }
        },
        contributor: {
            contributed: "貢獻了",
            modal: {
                contributionsInfo: "{{userName}} {{contributionCount}} {{continuedLink}} 透過開發外掛程式。",
                noContributions: "{{userName}} 尚未開發任何外掛程式。 最有可能以不同的方式{{contributedLink}}！"
            }
        },
        infoModal: {
            description: "您可以透過按齒輪或資訊圖示來獲取有關插件的更多信息",
            settingsInfo: "帶齒輪的插件具有可以更改的設定！",
            disableAll: "停用所有插件"
        },
        error: {
            invalidInput: "提供的輸入無效",
            stopping: "停止 {{plugin}} 插件時出現問題",
            starting: "初始化 {{plugin}} 外掛程式時出現問題",
            startDependency: "初始化相依性時出現問題：{{failures}}",
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
            plextron: "Plextron應用",
            web: "Plextron 應用程式和 Discord 網路版",
            dev: "Plexcord 開發者版本"
        },
        search: {
            looking: "這就是您要找的嗎",
            onlyAvailable: "僅在此處可用 ->",
            noCriteria: "未找到符合您搜尋條件的插件"
        },
        required: {
            title: "所需插件",
            this: "Plexcord 需要此插件才能運作。",
            by: "該插件需要以下功能才能運作："
        },
        dangerModal: {
            title: "危險行為",
            disablePlugins: "停用插件",
            disableText: "全部禁用",
            irreversible: "此操作無法撤銷！",
            enableBack: "您絕對確定要繼續嗎？ 您可以稍後再次啟動它。",
            undone: "此操作無法撤銷。 你確定嗎？",
            resetDescription: "您即將將 {{pluginName}} 插件設定重設為其預設值。",
            disable: "您即將停用 {{enabledPlugins}} 外掛程式！",
            confirmReset: "確認並重置",
            cancel: "取消",
            resetSettings: "重置設定",
            resetText: "重置"
        },
        filters: {
            label: "過濾器",
            placeholder: "搜尋插件...",
            option: {
                all: "全部",
                enabled: "積極的",
                disabled: "殘障人士",
                new: "新的",
                userplugins: "使用者插件",
                api: "API插件"
            }
        },
        pluginModal: {
            noSettings: "該插件沒有您可以更改的設定。",
            authors: "作者",
            settings: "設定",
            successfulReset: "{{plugin}}插件的設定已成功重設。",
            enabledStock: "活躍庫存附加元件",
            totalStock: "總庫存附加品",
            enabledUser: "活躍用戶插件",
            totalUser: "用戶插件總數",
            info: "查看更多信息",
            source: "查看原始碼"
        },
        metadata: {
            api: {
                description: {
                    memberListDecorators: "用於將裝飾器新增至成員清單的 API（在伺服器和 DM 上）",
                    messageAccessories: "用於向訊息添加 props 的 API",
                    messageDecorations: "用於向帖子添加裝飾器的 API",
                    chatInputButtons: "用於向聊天條目新增按鈕的 API",
                    commands: "任何使用指令的東西都需要API",
                    contextMenu: "用於從上下文選單新增/刪除項目的 API",
                    dynamicImageModal: "允許您在開啟影像模式時跳過寬度或高度",
                    menuItemDemangler: "讓 Discord 選單項目更具可讀性",
                    messageEvents: "使用訊息事件的任何事物都需要 API",
                    messagePopover: "用於向訊息彈出視窗新增按鈕的 API",
                    messageUpdater: "用於更新和重新處理訊息的 API",
                    nicknameIcons: "用於向個人資料中的使用者名稱新增圖示的 API",
                    notices: "修復自動消除通知的問題",
                    serverList: "修改伺服器清單的插件需要API",
                    userSettings: "揭示 Discord 的使用者設定、群組和名稱的補丁",
                    audioPlayer: "用於播放 Discord 內部音訊檔案或外部音訊連結的 API。",
                    userArea: "用於向使用者區域面板新增按鈕的 API。"
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
                    plexcord: "Plexcord 參與者",
                    vencord: "Vencord 參與者",
                    userPlugin: "使用者插件貢獻者"
                },
                context: {
                    title: "徽章選項",
                    copy: {
                        name: "複製徽章名稱",
                        link: "複製徽章的圖像鏈接"
                    },
                    refetch: {
                        button: "刷新徽章",
                        success: "徽章已成功更新！"
                    }
                },
                modal: {
                    title: "Plexcord 支架",
                    special: "該徽章是 Plexcord 捐贈者的特權。",
                    description: "請考慮成為捐款者來支持 Plexcord 的發展。 這對我們來說非常有價值！"
                }
            }
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
                    description: "這些是浮動按鈕，當您將滑鼠懸停在訊息上時，它們會出現在右側"
                }
            },
            button: "此處將顯示已啟用插件的按鈕。"
        }
    },

    patchHelper: {
        title: "補丁助手",
        description: "一款開發工具，可協助您為 Plexcord 外掛程式建立補丁。",
        fullPatch: {
            label: "譚亞瑪",
            description: "將完整的 JSON 補丁貼到此處以填充字段"
        },
        find: "布林",
        match: "匹配",
        replacement: "改變",
        preview: "預覽",
        generatedCode: "產生的程式碼",
        group: "團體",
        diff: "不同之處",
        module: "模組",
        compile: "德爾勒",
        compiled: "編譯成功",
        copy: {
            clipboard: "複製到剪貼簿",
            codeblock: "複製為程式碼區塊"
        },
        error: {
            noMatch: "未找到匹配項。 也許該模組是延遲載入的。",
            multipleMatch: "找到多個匹配項。 請使用更具體的搜尋模式。",
            noFind: "沒有“查找”字段。",
            noReplacement: "沒有“更改”字段。",
            invalidReplacement: "替換欄位無效",
            replacementMatch: "“replacement.match”欄位不存在",
            replacementReplace: "“replacement.replace”欄位不存在",
            replacementMustFunction: "替換必須是一個函數"
        },
        cheatSheet: {
            title: "備忘錄",
            identifiers: "自訂正規表示式轉義序列比對標識符（變數名、類別名稱等）",
            dollar: "加 $",
            entireMatch: "新增所有符合項",
            beforeMatch: "在匹配之前添加子字串",
            afterMatch: "在匹配後添加子字串",
            nthGroup: "新增第 n 個捕獲組（$1、$2...）",
            pluginInstance: "新增插件實例"
        },
        replacementEval: {
            label: "流程替換為函數",
            description: "啟用此功能後，「替換」將被視為一項功能。"
        }
    },

    sync: {
        title: "備份與復原",
        warning: "警告",
        warningText: "導入設定檔將覆蓋您目前的設定。 如果您想保留目前配置，請務必先匯出備份。",
        description: "您可以將 Plexcord 設定匯入和匯出為 JSON 檔案。 透過這種方式，您可以輕鬆地將您的設定移至另一台設備，或在重新安裝 Plexcord 或 Discord 後恢復您的設定。",
        successful: "設定已成功導入。 重新啟動應用程式以使更改生效！",
        error: {
            failure: "設定導入失敗：{{error}}",
            failedExport: "設定匯出失敗，請檢查控制台",
            invalid: "設定無效。 這真的是 Plexcord 調整檔嗎？",
            tooLarge: "資料儲存太大 - 從備份中排除。 如有必要，請使用「匯出資料儲存」功能。",
            clearSomeDate: "資料儲存很大。 請清除一些插件資料並重試。"
        },
        settings: {
            text: "備份裡有什麼？",
            quickcss: "自訂 QuickCSS",
            theme: "主題連結",
            plugins: "插件設定",
            datastores: "附加儲存庫（例如 Timezones 或 IRememberYou）"
        },
        import: {
            title: "導入設定",
            description: "選擇先前匯出的設定檔來恢復您的配置。 這會將您目前的所有設定替換為備份中的設定。",
            all: "導入所有設定",
            plugins: "埃克倫蒂伊·伊切·阿克塔爾",
            css: "QuickCSS'yi 更多",
            datastore: "導入資料存儲"
        },
        export: {
            title: "匯出設定",
            description: "您可以將目前的 Plexcord 設定匯出到檔案以進行備份或傳輸到其他裝置。",
            all: "匯出所有設定",
            plugins: "導出插件",
            css: "匯出 QuickCSS",
            datastore: "匯出資料存儲"
        }
    },

    cloud: {
        text: "雲",
        title: "設定同步",
        override: "雲端同步",
        description: "將您的 Plexcord 設定同步到雲端。 這使您可以在多個設備上一致地維護配置，而無需手動匯入/匯出。",
        switchDescription: "啟用後，您的設定將同步到雲端。 您可以使用以下操作手動同步。",
        settings: "雲端設定",
        successful: "您的設定已成功同步至雲端。",
        updated: "您的設定已更新！ 點擊此處重新啟動以使更改完全生效！",
        deleted: "設定已從雲端刪除！",
        integration: {
            title: "雲端整合",
            description: "Plexcord 的雲端整合可讓您跨多個裝置和 Discord 安裝同步您的設定。 您的資料被安全地存儲，並且可以隨時輕鬆恢復。",
        },
        reauth: "我們注意到另一個客戶端啟用了​​雲端整合！ 由於限制，您需要重新進行身份驗證才能繼續。 點擊此處進入設定頁面繼續！",
        error: {
            setup: "安裝失敗（無法檢索 OAuth 配置）。",
            secret: "安裝失敗（未返回密鑰）。",
            string: "安裝失敗（{{error}}）。",
            connect: "雲端同步已停用，因為此帳戶未連接到 Plexcord 雲端應用程式。 您可以透過在雲端設定中連接該帳戶來重新啟用該帳戶。 （附註：將單獨儲存您的偏好）",
            noSettings: "在雲端中找不到設定。",
            uptodate: "您的設定是最新的。",
            localNewer: "您的本地設定比雲端設定更新。",
            delete: "無法刪除設定（{{error}}）。",
            api: {
                returned: {
                    delete: "無法刪除設定（API 返回 {{status}}）。",
                    to: "無法將設定同步到雲端（API 返回 {{status}}）。",
                    from: "無法從雲端同步設定（API 傳回 {{status}}）。"
                }
            },
            synchronize: {
                to: "設定無法同步到雲端（{{error}}）。",
                from: "無法從雲端同步設定（{{error}}）。"
            }
        },
        warning: {
            enableCloudIntegration: "若要使用設定同步功能，請啟用上面的雲端整合。"
        },
        danger: {
            title: "危險區",
            description: "永久刪除雲端中的所有資料。 此操作不可逆轉，並且會刪除所有同步設定以及儲存在雲端基礎架構中的任何其他資料。",
            delete: {
                account: {
                    title: "刪除雲端帳戶",
                    description: "您確定要永久刪除您的雲端帳戶和所有關聯資料嗎？ 此操作無法撤銷。",
                    confirm: "刪除帳戶",
                    cancel: "取消"
                }
            }
        },
        notification: {
            title: "雲端整合",
            enabled: "啟用雲端集成",
            host: "網域{{host}}已加入權限清單。 重新啟動應用程式以使變更生效。",
            erase: {
                successful: "雲端資料刪除成功",
                failed: "無法刪除所有資料（API 返回 {{status}}），請聯絡支援人員。"
            }
        },
        button: {
            to: "同步至雲端",
            from: "從雲端同步",
            fromDescription: "這將用雲端中的設定覆蓋您當前的設定。 明智地使用它！",
            delete: "刪除雲端數據",
            enable: "啟動雲端集成",
            reauthorize: "重新授權",
            confirm: "立即重新啟動",
            later: "然後！"
        },
        privacy: "保護您的隱私",
        source: "原始碼",
        overview: "Plexcord 具有雲端整合功能，可提供跨裝置同步設定等優勢。 由於這些 {{privacy}} 和 {{source}} 是透過 AGPL 3.0 授權提供的，因此您可以將它們託管在您自己的伺服器上。",
        authorization: "連接到雲端以同步設定。 如果您尚未設定雲端集成，這將要求授權。",
        backend: {
            title: "雲端提供者",
            description: "選擇您的設定在雲端的儲存方式。 預設使用 Plexcord Cloud，但如果您願意，您也可以配置自己的自託管雲端服務。",
            invalid: "無效網址"
        },
        sync: {
            title: "該設備的同步規則",
            description: "此設定決定如何在此裝置和雲端之間同步設定。 您可以允許變更在兩個方向上傳輸或選擇單側作為主要來源。",
            direction: {
                both: "雙向同步（更改在兩個方向上傳輸）",
                push: "該設備是來源（僅上傳）",
                pull: "雲端原始碼（僅供下載）",
                manual: "自動同步（手動同步只能使用下面的按鈕）"
            }
        }
    },

    changelog: {
        text: "變更說明",
        title: "變更說明",
        description: "您可以在此處找到 Plexcord 的最新變更和更新。",
        by: "作家",
        check: "檢查倉庫",
        uptodate: "目前的",
        update: "更新",
        noMessage: "沒有消息",
        unknown: "未知",
        updatedPlugins: "更新的插件",
        newSettings: "新設定",
        newSettingTooltip: "{{plugin}} 的新設置",
        loading: "載入中...",
        repoUptodate: "倉庫已更新",
        fetch: "從倉庫帶來",
        clear: "清除所有筆記",
        internet: "確保您有互聯網連接，然後重試。",
        recent: "最近的變化",
        codeChanges: "程式碼變更 {{count}} 個新提交",
        updateLogs: "{{count}} 更新說明",
        noCommit: "在您目前的版本中找不到前向提交。 按一下“從儲存庫取得”以檢查新變更。",
        previous: "與先前的更新會話一起，提交歷史記錄和插件變更。",
        modal: {
            description: "查看 Plexcord 的最新變更。 此過程透過直接從儲存庫取得提交來向您展示新增內容。",
            repository: "德波",
            failed: "接收失敗 - 檢查控制台",
            current: "可用的：",
            hide: "隱藏筆記",
            show: "顯示註釋",
            fetch: {
                title: "帶來改變",
                description: "檢查儲存庫中的新提交、外掛程式更新和程式碼變更。 這會將您目前的版本與最新版本進行比較，並向您展示新增內容。",
                newCommit: "這些是自上次發布以來的新提交和插件更新。 您可以看到新增了哪些功能、修復了哪些錯誤以及更新了哪些外掛程式。",
                confirm: "能",
            }
        },
        commit: {
            available: "提交可用",
            no: "沒有新的提交",
            new: "新插件",
            updated: "更新的插件",
            settings: "新設定"
        },
        toast: {
            already: "儲存庫已經是最新的",
            found: "從儲存庫中找到 {{count}} 個新提交",
            local: "儲存庫與您的本機副本保持同步",
            failed: "無法從倉庫取出:(",
            cleared: "所有筆記均已清除",
            logCleared: "註釋已清除",
            yourLatest: "從上次更新中儲存的提交"
        },
        alert: {
            clear: {
                title: "清除所有筆記",
                body: "您確定要清除所有筆記嗎？ 此操作無法撤銷。",
                confirm: "全部清除",
                confirmColor: "危險",
                cancel: "取消"
            },
            log: {
                title: "清除日誌",
                body: "您確定要清除此日誌嗎？ 此操作無法撤銷。",
                confirm: "清除日誌",
                confirmColor: "危險",
                cancel: "取消"
            }
        },
        newPlugins: "{{count}} 新插件",
        following: "最近的更新中新增了以下插件：",
        more: "+{{count}} 個新插件"
    },

    csp: {
        restart: "需要重新啟動才能應用此更改",
        blocked: {
            resources: "被阻止的資源",
            disallowed: "某些圖像、樣式或字體已被阻止，因為它們來自未經授權的網域。",
            recommended: "強烈建議您將它們移至 GitHub 或 Imgur。 但是，如果您完全信任網域，您也可以允許它們。",
            afterAllow: "授予空間權限後，您必須完全關閉並重新啟動 {{platform}}（從系統托盤/工作管理員）才能套用變更。",
            allow: "允許",
            url: "被封鎖的網址"
        },
        imgur: {
            direct: "Imgur 連結必須是格式為 {{etc}} 的直接連結。",
            copy: "要獲得直接鏈接，請右鍵單擊圖像並選擇“複製圖像地址”。"
        },
        wants: {
            caller: "{{callerName}} 希望允許連接到 {{domain}}",
            detail: "如果您不認識並完全信任 {{domain}}，您應該取消此請求！",
            restart: "您必須完全關閉並重新啟動 {{appName}} 才能使變更生效。",
            type: {
                images: "圖片",
                styles: "CSS 和主題",
                fonts: "字體"
            },
            content: "允許從 {{domain}} 上傳以下類型的內容：",
            understand: "我完全信任 {{domain}} 並了解允許連結的風險。",
            button: {
                cancel: "取消",
                allow: "允許"
            },
            title: "域名權限"
        }
    },

    themes: {
        title: "主題",
        management: "主題管理",
        description: "使用主題自訂 Discord 的外觀。 新增本機 .css 檔案或直接從 URL 安裝主題。 帶有齒輪圖示的主題具有您可以更改的自訂設定。",
        local: "當地主題",
        new: "新的",
        pinned: "固定的",
        stylus: "觸控筆延長桿",
        bd: "BetterDiscord 主題",
        github: "吉圖布",
        download: "您在尋找主題嗎？ 查看 {{bd}} 或在 {{github}} 上搜尋。 從 BetterDiscord 下載時，按一下「下載」按鈕並將 .theme.css 檔案放入主題資料夾中。",
        add: "添加",
        reset: "將設定重設為預設值",
        notCSS: "它不是 CSS 文件。 確保您使用原始連結！",
        okay: "好的！",
        checking: "正在檢查中...",
        valid: "有效的！",
        upload: "上傳主題",
        openFolder: "打開主題資料夾",
        loadMissing: "安裝缺少的主題",
        editQuickCSS: "編輯 QuickCSS",
        editClient: "編輯客戶端主題",
        website: "打開網站",
        discord: "不和諧伺服器",
        downloadTheme: "下載",
        refresh: "重新整理",
        delete: "西爾",
        unknown: {
            title: "未知",
            author: "作者未知",
            theme: "不和諧主題"
        },
        required: "以下插件是必需的但未啟用：",
        homepage: "首頁",
        support: "支援",
        online: {
            title: "線上主題",
            description: "直接從 URL 而不是本機文件安裝主題。 線上主題在來源變更時自動更新；因此您始終擁有最新版本，無需手動下載。",
            enable: "啟用線上主題",
            enableDescription: "切換線上主題上傳。 停用後，所有線上主題將關閉，並且您將無法新增新的線上主題。"
        },
        quickActions: {
            title: "快速交易",
            description: "管理主題的快捷方式。 開啟主題資料夾以新增主題，使用 QuickCSS 進行快速樣式編輯或在變更後重新載入主題。"
        },
        error: {
            userscript: "不支援 Userscript 上的主題！",
            stylus: "您可以使用 {{stylus}} 安裝主題！",
            expired: "連結無效或過期",
            text: "甚至："
        },
        copy: {
            url: "複製網址",
            copied: "主題網址已複製！",
            settings: "複製主題設定",
            copiedSettings: "主題設定已複製到剪貼簿。"
        },
        paste: {
            settings: "貼上主題設定",
            empty: "您的剪貼簿是空的。",
            invalid: "您的剪貼簿中沒有有效的設定資料。",
            pasted: "主題設定是從剪貼簿貼上的。"
        },
        settings: {
            for: "{{themeName}} 的設定",
        },
        installed: {
            title: "已安裝的主題",
            description: "在這裡管理您的主題。 本機主題從您的主題資料夾加載，線上主題從 URL 加載。 帶有齒輪圖示的主題具有可自訂的設定。",
            count: "已安裝 {{count}} 個主題（{{localCount}} 本地，{{onlineCount}} 線上）已啟用 {{enabledCount}}",
            search: "主題甚至...",
            loading: "主題正在加載...",
            none: "尚未安裝主題。 首先，將主題文件新增至主題資料夾或從上方新增線上主題。",
            noCriteria: "未找到符合您的搜尋或篩選條件的主題。"
        },
        filter: {
            all: "顯示全部",
            online: "線上主題",
            local: "當地主題",
            enabled: "有效的",
            disabled: "殘障人士"
        },
        notification: {
            refresh: {
                title: "主題更新",
                error: "主題刷新失敗"
            },
            failed: {
                download: "因迪里萊梅迪主題"
            }
        }
    },

    updater: {
        title: "更新程式",
        settings: "更新程式設定",
        updates: "更新",
        updated: "更新了！",
        restart: "點擊此處重新啟動",
        repaired: "Plexcord 已修復！",
        ok: "好的",
        preferences: {
            title: "更新偏好設定",
            description: "了解 Plexcord 如何保持自身更新。 您可以選擇在背景自動更新或在有新更新可用時接收通知。",
        },
        github: {
            local: "您的本機副本具有比遠端儲存庫更新的記錄。 當您進行本機變更時通常會發生這種情況。 請在更新前保留或重置它們。"
        },
        error: {
            check: "檢查更新時出現問題。 請參閱控制台以取得更多資訊。",
            occurred: "發生錯誤",
            retrieve: "檢索更新資訊時出現問題 - 檢查控制台",
            title: "不哦！",
            tryAgain: "發生錯誤。 請重試或查看控制台以獲取更多資訊。",
            command: "找不到 {{path}} 指令。 下載此或重試。",
            code: "代碼{{code}}。 請參閱控制台以取得更多資訊。",
            running: "執行 {{cmd}} 時出現問題：{{error}}",
            failed: "這也失敗了:(請嘗試使用安裝程式更新或重新安裝！"
        },
        available: "1 個可用更新",
        updateAvailable: "Plexcord 更新可用！",
        click: "點擊此處查看更新",
        available_plural: "有 {{count}} 個更新",
        current: "當前的！",
        successful: {
            title: "更新成功！",
            body: "更新成功。 重新啟動以儲存變更！",
            button: {
                confirm: "重新啟動",
                cancel: "現在不要！",
                update: "立即更新",
                check: "檢查更新"
            },
            noFound: "沒有發現更新"
        },
        automatically: {
            label: "自動更新",
            description: "Plexcord 無需確認即可自動下載並安裝更新"
        },
        notify: {
            label: "顯示自動更新通知",
            description: "Plexcord 自動更新時顯示通知"
        },
        repo: "德波",
        repoDescription: "這是 Plexcord 接收更新的 GitHub 儲存庫。",
        loading: "載入中...",
    },

    components: {
        error: {
            title: "哦不！",
            render: "渲染此元件時發生錯誤。 在下面和您的主機上查找更多資訊。"
        },
        componentFailed: {
            message: "啊!無法呈現該頁面。 不過，有一個可用的更新可以解決此問題。 您想立即更新並重新啟動嗎？"
        },
        quickCSS: {
            title: "開啟 QuickCSS 編輯器",
            message: "QuickCSS 編輯器仍然在背景開啟。",
            detail: "您仍想關閉 Discord 嗎？ 這也將關閉 QuickCSS 編輯器。",
            cancel: "取消",
            close: "無論如何關閉"
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
            permamently: "{{count}} 個通知將永久刪除。 此操作無法撤銷。",
            button: {
                confirm: "好的",
                cancel: "取消"
            }
        }
    },

    memberlist: {
        error: {
            render: "渲染 {{key}} 成員列表裝飾器時發生錯誤"
        }
    },

    message: {
        accessory: {
            error: {
                render: "渲染 {{key}} 訊息附件時發生錯誤"
            }
        },
        decoration: {
            error: {
                render: "渲染 {{key}} 訊息裝飾時出錯"
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
            month: "是",
            months: "是",
            week: "星期",
            weeks: "星期",
            day: "天",
            days: "天",
            hour: "片刻",
            hours: "片刻",
            minute: "分分鐘",
            minutes: "分分鐘",
            second: "第二",
            seconds: "第二",
            ago: "前",
            s: " "
        }
    },

    plugin: {
        noTrack: {
            name: "無軌",
            description: "停用 Discord 的追蹤（分析/「科學」）、指標和 Sentry 崩潰報告",
            option: {
                disableAnalytics: {
                    label: "密切分析",
                    description: "停用 Discord 的追蹤（分析/「科學」）指標和 Sentry 崩潰報告"
                }
            }
        },
        settings: {
            name: "設定",
            description: "增加設定介面和調試資訊",
            option: {
                language: {
                    label: "迪爾",
                    description: "選擇您的 Plexcord 首選語言。"
                },
                settingsLocation: {
                    label: "設定位置",
                    description: "Plexcord 確定設定部分的放置位置"
                }
            }
        },
        supportHelper: {
            name: "支援助理",
            description: "幫助我們為您提供支持",
            commands: {
                description: {
                    debug: "發送 Plexcord 調試訊息",
                    plugins: "發送 Plexcord 插件列表"
                }
            },
            modals: {
                outdated: {
                    title: "等待！",
                    body: "您使用的是舊版的 Plexcord！ 您的問題很可能已經解決。",
                    footer: "請在尋求支持之前更新！",
                    button: {
                        cancel: "查看更新",
                        confirm: "立即更新並重新啟動",
                        secondaryConfirm: "我知道我在做什麼，否則我無法更新"
                    }
                },
                updater: {
                    title: "等待！",
                    body: "您正在使用 Plexcord 的外部更新版本，我們不提供對此版本的支援！",
                    footer: "請{{官方}}或聯絡您的套餐提供者以獲得支援。",
                    officially: "Plexcord 官方支援版本",
                    button: {
                        cancel: "取消",
                        confirm: "查看下載頁面",
                        now: "立即更新"
                    },
                    toast: {
                        success: "成功的！ 正在重新啟動...",
                        already: "已經是最新的了！",
                        failed: "更新失敗:("
                    }
                },
                custom: {
                    title: "等待！",
                    header: "您正在使用 Plexcord 的專有版本，我們不提供對此版本的支援！",
                    body: "我們僅提供對 {{officialBuild}} 的支援。 要嘛{{switch}}要嘛自己解決問題。",
                    footer: "如果您忽視此規則，您獲得支持的權利將被撤銷。",
                    official: "官方發布",
                    switch: "升級到正式版本",
                    button: {
                        confirm: "我明白",
                        secondaryConfirm: "不要再顯示"
                    }
                }
            },
            button: {
                debug: "運行 /plexcord-debug",
                plugins: "運行 /plexcord-plugins",
                snippet: "運行程式碼片段"
            },
            toast: {
                success: "成功的！",
                failed: "無法運行程式碼片段:(",
                failedOpenInvite: "無法開啟邀請，請檢查控制台:(",
                upload: "插件列表載入成功！",
                failedUpload: "無法載入插件列表檔案。 請再試一次。",
                unableGenerate: "建立插件列表失敗。"
            },
            dm: {
                warning: "請不要向 Plexcord 插件開發者發送私訊尋求支援！ {{br}}相反，您可以透過加入 {{support}} 伺服器來使用 Plexcord 支援頻道：{{channel}}"
            },
            alert: {
                title: "警告：插件過多",
                paragraph1: "我們注意到超過 100 個插件被啟動。",
                paragraph2: "由於插件數量過多，您可能無法獲得支援。",
                paragraph3: "您的問題很可能是由插件衝突引起的。",
                paragraph4: "考慮禁用一些插件來解決問題。",
                paragraph5: "您的插件清單將作為文字檔案發送。",
            }
        },
        accountPanelServerProfile: {
            name: "帳戶面板伺服器設定檔",
            description: "左鍵單擊您的帳戶面板，然後右鍵單擊查看您的伺服器設定檔",
            option: {
                prioritizeServerProfile: {
                    label: "優先考慮伺服器設定檔",
                    description: "當您左鍵單擊帳戶面板時優先考慮伺服器配置文件"
                }
            },
            context: {
                account: "顯示帳號資料",
                server: "顯示伺服器設定檔",
                prioritize: "優先考慮伺服器設定檔"
            }
        },
        altKrispSwitch: {
            name: "AltKrispSwitch",
            description: "讓降噪彈出視窗在「無」和「Krisp」之間切換，而不是在「Krisp」和「標準」之間切換。"
        },
        alwaysAnimate: {
            name: "始終動畫",
            description: "它使任何可以動畫化的東西都動畫化。",
            option: {
                icons: {
                    label: "圖示",
                    description: "隨時為伺服器圖示、頭像、裝飾等製作動畫。"
                },
                statusEmojis: {
                    label: "狀態表情符號",
                    description: "始終讓狀態表情符號充滿活力。"
                },
                serverBanners: {
                    label: "伺服器橫幅",
                    description: "始終為伺服器橫幅設定動畫。"
                },
                nameplates: {
                    label: "銘牌",
                    description: "始終對銘牌進行動畫處理。"
                },
                roleGradients: {
                    label: "角色轉換",
                    description: "始終為角色顏色過渡設定動畫。"
                }
            }
        },
        alwaysExpandProfiles: {
            name: "總是展開設定檔",
            description: "始終打開擴展的用戶配置文件"
        },
        alwaysExpandRoles: {
            name: "始終擴展角色",
            description: "始終擴展個人資料彈出視窗中的角色列表",
            option: {
                hideArrow: {
                    label: "隱藏箭頭",
                    description: "隱藏箭頭"
                }
            }
        },
        animalese: {
            name: "動物語",
            description: "為每個發送的訊息播放動物聲音（他們做了很多）",
            option: {
                volume: {
                    label: "聲級",
                    description: "動物聲音音量"
                },
                speed: {
                    label: "速度",
                    description: "動物語語音速度"
                },
                pitch: {
                    label: "噸",
                    description: "音調倍增器"
                },
                messageLengthLimit: {
                    label: "訊息長度限制",
                    description: "處理的最大訊息長度"
                },
                processOwnMessages: {
                    label: "處理您自己的訊息",
                    description: "也可以用語音表達自己的訊息"
                },
                soundQuality: {
                    label: "音質",
                    description: "使用音質",
                    high: "高的",
                    med: "中等的",
                    low: "低的",
                    lowest: "最低"
                }
            }
        },
        alwaysTrust: {
            name: "永遠信任",
            description: "刪除惡意網域和可疑檔案彈出窗口",
            option: {
                domain: {
                    label: "網域",
                    description: "刪除“惡意域”彈出窗口"
                },
                file: {
                    label: "文件",
                    description: "刪除“潛在危險”的下載彈出窗口"
                },
                noDeleteSafety: {
                    label: "無刪除安全性",
                    description: "刪除伺服器時無需輸入伺服器名稱"
                },
                confirmModal: {
                    label: "確認彈出視窗",
                    description: "「您確定要確認這筆交易嗎？」刪除彈出視窗"
                }
            },
            alert: {
                title: "刪除伺服器？",
                body: "這個過程是永久性的，如果不明顯的話讓我們說明一下！",
                confirm: "西爾",
                cancel: "取消"
            }
        },
        anonymiseFileNames: {
            name: "匿名檔案名稱",
            description: "匿名上傳的檔案名稱。",
            option: {
                anonymiseByDefault: {
                    label: "預設匿名",
                    description: "預設匿名化檔案名稱。 如果需要，您可以在檔案上傳彈出視窗中停用它。"
                },
                spoilerMessages: {
                    label: "劇透消息",
                    description: "對標記為劇透的檔案名稱進行匿名處理。"
                },
                method: {
                    label: "方法",
                    description: "匿名化方法",
                    random: "隨機字符",
                    consistent: "持續的",
                    timestamp: "時間戳"
                },
                randomisedLength: {
                    label: "隨機長度",
                    description: "隨機字元長度"
                },
                consistent: {
                    label: "一致的匿名化",
                    description: "一致匿名化的金鑰"
                }
            },
            using: {
                anonymous: "使用匿名檔案名稱",
                spoiler: "使用普通檔案名稱"
            },
            spoiler: {
                description: "為您的文件開啟或關閉劇透",
                toggle: "為您的檔案開啟或關閉劇透（預設為開啟）",
                enabled: "劇透已啟動！",
                disabled: "劇透已停用！"
            }
        },
        appleMusic: {
            name: "Apple Music 豐富的存在",
            description: "Apple Music 將收聽狀態顯示為 Discord Rich Presence",
            about: "對於可自訂的事件格式字串，您可以使用一些自訂字串將追蹤資料新增至事件！ {{name}} 替換為曲目名稱，{{artist}} 替換為藝人姓名，{{album}} 替換為專輯名稱。",
            button: {
                listen: "Apple Music 丁樂",
                songLink: "在 SongLink 上查看"
            },
            option: {
                activityType: {
                    label: "活動類型",
                    description: "將顯示什麼類型的活動",
                    listening: "傾聽",
                    playing: "玩"
                },
                statusDisplayType: {
                    label: "狀態顯示類型",
                    description: "在成員清單中顯示曲目/藝人姓名",
                    off: "不顯示（顯示一般收聽訊息）",
                    artist: "顯示藝術家姓名",
                    track: "顯示曲目名稱"
                },
                refreshInterval: {
                    label: "刷新間隔",
                    description: "事件刷新間隔（秒）"
                },
                enableTimestamps: {
                    label: "啟用時間戳",
                    description: "是否啟用時間戳"
                },
                enableButtons: {
                    label: "啟用按鈕",
                    description: "是否啟用按鈕"
                },
                nameString: {
                    label: "名稱字串",
                    description: "事件名稱格式字串"
                },
                detailsString: {
                    label: "詳細資訊字串",
                    description: "事件詳細資訊格式字串"
                },
                stateString: {
                    label: "狀態字串",
                    description: "事件狀態格式字串"
                },
                largeImageType: {
                    label: "大圖像類型",
                    description: "活動資產大圖類型",
                    album: "專輯封面藝術",
                    artist: "藝術家繪畫",
                    disabled: "殘障人士"
                },
                largeTextString: {
                    label: "大文本字串",
                    description: "事件實體大文本格式字串"
                },
                smallImageType: {
                    label: "縮圖類型",
                    description: "事件資產縮圖類型",
                    album: "Apple Music 標誌",
                    artist: "藝術家繪畫",
                    disabled: "殘障人士"
                },
                smallTextString: {
                    label: "小文字字串",
                    description: "事件實體小文字格式字串"
                }
            }
        },
        arRpc: {
            name: "WebRichPresence (arRPC)",
            description: "arRPC 用戶端插件，用於在 Discord Web 上啟用 RPC（實驗性）",
            use: {
                title: "如何使用arRPC",
                enable: "{{link}} 運行伺服器，然後啟動外掛程式。",
                link: "請按照 GitHub 儲存庫中的說明進行操作"
            },
            toast: {
                connected: "連接到arRPC",
                failed: "無法連接到 arRPC，它是否工作？",
                retry: "再試一次"
            }
        },
        atSomeone: {
            name: "在某人",
            description: "讓您可以用 @someone 標記隨機的人"
        },
        autoDNDWhilePlaying: {
            name: "播放時自動撥號",
            description: "遊戲啟動時自動更新線上狀態（線上、空閒、請勿打擾）",
            option: {
                statusToSet: {
                    label: "要設定的狀態",
                    description: "遊戲開始時設定的狀態",
                    online: "在線的",
                    dnd: "請勿打擾",
                    idle: "閒置的",
                    invisible: "無形的"
                },
                excludeInvisible: {
                    label: "排除隱形",
                    description: "當您的狀態設定為不可見時，防止狀態自動更改"
                }
            }
        },
        autoZipper: {
            name: "自動拉鍊",
            description: "在上傳到 Discord 之前自動壓縮指定的檔案類型和資料夾",
            option: {
                extensions: {
                    label: "擴充",
                    description: "要自動壓縮的檔案副檔名的逗號分隔清單（例如 .psd、.blend、.exe、.dmg）"
                }
            }
        },
        bannersEverywhere: {
            name: "到處都是橫幅",
            description: "在成員清單中顯示橫幅",
            option: {
                animate: {
                    label: "卡通",
                    description: "使橫幅動畫化"
                },
                preferNameplate: {
                    label: "選擇銘牌",
                    description: "選擇銘牌而不是橫幅"
                }
            }
        },
        betterActivities: {
            name: "更好的活動",
            description: "在成員清單中顯示活動圖示並允許顯示所有活動",
            option: {
                memberList: {
                    label: "會員名單",
                    description: "在成員清單中顯示活動圖標"
                },
                iconSize: {
                    label: "圖示大小",
                    description: "事件圖示的大小"
                },
                specialFirst: {
                    label: "特價第一",
                    description: "首先顯示特別活動（目前是 Spotify 和 Twitch）"
                },
                renderGifs: {
                    label: "GIF'yere 做到了",
                    description: "允許渲染 GIF"
                },
                removeGameActivityStatus: {
                    label: "刪除遊戲狀態",
                    description: "刪除遊戲狀態圖示和狀態"
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
                    description: "顯示所有活動風格",
                    list: "清單",
                    carousel: "滑桿",
                    left: "索爾",
                    right: "正確的"
                }
            }
        },
        betterAudioPlayer: {
            name: "更好的音訊播放器",
            description: "在音訊附件播放器中新增攝譜儀和示波器視覺化工具",
            option: {
                oscilloscope: {
                    label: "示波器",
                    description: "啟用範圍視覺化工具"
                },
                spectrograph: {
                    label: "光譜儀",
                    description: "啟用光譜儀視覺化工具"
                },
                oscilloscopeSolidColor: {
                    label: "示波器純色",
                    description: "使用純色而不是漸變的範圍"
                },
                oscilloscopeColor: {
                    label: "Rengi示波器",
                    description: "啟用純色時示波器的顏色"
                },
                spectrographSolidColor: {
                    label: "光譜儀純色",
                    description: "使用純色代替光譜儀的漸變"
                },
                spectrographColor: {
                    label: "光譜儀顏色",
                    description: "啟用純色時光譜儀的顏色"
                },
                forceMoveBelow: {
                    label: "強制移動到底部",
                    description: "強制將視覺化工具移到音量控制下方"
                }
            },
            toast: {
                invalidColorFormat: "{{settingKey}} 的顏色格式無效，請確保其格式為“R、G、B”或“#RRGGBB”"
            }
        },
        betterBanReasons: {
            name: "更好的禁令理由",
            description: "建立在 Discord 禁止視窗中使用的自訂原因和/或預設顯示文字輸入而不是選項。",
            option: {
                reasons: {
                    label: "原因",
                    description: "你的特殊原因"
                },
                isTextInputDefault: {
                    label: "預設文字輸入",
                    description: "預設情況下，它顯示文字輸入而不是選擇選單。 （相當於點擊更多）"
                }
            },
            title: "原因",
            placeholder: "從哪裡",
            add: "添加另一個原因"
        },
        betterBlockedUsers: {
            name: "更好地阻止用戶",
            description: "它允許您搜尋被封鎖的用戶清單並在設定中選擇名稱。",
            placeholder: "搜尋用戶..."
        },
        betterCommands: {
            name: "更好的命令",
            description: "它透過各種改進增強了命令系統。",
            option: {
                autoFillArguments: {
                    label: "自動填充參數",
                    description: "自動用所有參數填滿命令，而不僅僅是必需的參數"
                },
                allowNewlinesInCommands: {
                    label: "允許指令中換行",
                    description: "允許在命令條目中換行（CTRL + Shift + Enter）"
                }
            },
            command: {
                refresh: {
                    description: "Discord 原生刷新應用程式指令",
                    user: "嘗試續訂的特定用戶",
                    refreshing: "應用程式命令正在更新...",
                    refreshed: "命令刷新成功！",
                    failed: "刷新命令失敗。 檢查控制台以了解詳細資訊。"
                }
            }
        },
        betterFolders: {
            name: "更好的資料夾",
            description: "在自訂側邊欄中顯示伺服器資料夾並新增與資料夾相關的改進",
            option: {
                sidebar: {
                    label: "側邊欄",
                    description: "在自訂側邊欄中的資料夾中顯示伺服器"
                },
                sidebarAnim: {
                    label: "側邊欄動畫",
                    description: "打開資料夾側邊欄時使用動畫"
                },
                closeAllFolders: {
                    label: "關閉所有資料夾",
                    description: "選擇不在資料夾中的伺服器時關閉所有資料夾"
                },
                closeAllHomeButton: {
                    label: "透過主頁按鈕關閉所有內容",
                    description: "點擊主頁按鈕時關閉所有資料夾"
                },
                closeOthers: {
                    label: "關閉其他",
                    description: "打開資料夾時關閉其他資料夾"
                },
                closeServerFolder: {
                    label: "關閉伺服器資料夾",
                    description: "選擇資料夾中的伺服器時關閉資料夾"
                },
                forceOpen: {
                    label: "強制打開",
                    description: "切換到資料夾伺服器時強制開啟資料夾"
                },
                keepIcons: {
                    label: "保護圖示",
                    description: "當資料夾在 BetterFolders 側邊欄中開啟時，繼續在主伺服器列資料夾中顯示伺服器圖標"
                },
                showFolderIcon: {
                    label: "顯示資料夾圖示",
                    description: "在 BetterFolders 側邊欄中的資料夾伺服器上方顯示資料夾圖標",
                    never: "絕不",
                    always: "總是",
                    moreThanOne: "當展開多個資料夾時"
                }
            }
        },
        betterGifAltText: {
            name: "BetterGif替代文本",
            description: "將 GIF 替代文字從「GIF」變更為包含 gif 標籤/檔案名"
        },
        betterGifPicker: {
            name: "更好的Gif選擇器",
            description: "讓 GIF 選擇器預設開啟最喜歡的類別",
            option: {
                keepOpen: {
                    label: "保持選擇器打開",
                    description: "使 GIF 選擇器在選擇 GIF 後保持開啟狀態"
                }
            }
        },
        betterInvites: {
            name: "更好的邀請",
            description: "查看邀請的到期日期，查看邀請者的個人資料，並在加入之前預覽伺服器（透過點擊名稱）",
            render: {
                tip: "此邀請將在 {{time}} 後過期",
                header: "{{name}}邀請您造訪{{server}}",
                never: "絕不"
            }
        },
        betterNotesBox: {
            name: "更好的筆記盒",
            description: "隱藏註釋或停用拼字檢查（在“設定”中配置！！）",
            option: {
                hide: {
                    label: "隱藏註釋",
                    description: "隱藏使用者彈出視窗中的註解框"
                },
                noSpellCheck: {
                    label: "關閉拼字檢查",
                    description: "停用筆記中的拼字檢查"
                }
            }
        },
        betterPlusReacts: {
            name: "更好的反應",
            description: ":emoji: 之前的加號數量表示要添加表情符號的訊息"
        },
        betterRoleContext: {
            name: "更好的角色環境",
            description: "新增右鍵點選使用者設定檔中的角色時複製角色顏色/編輯角色/顯示角色圖示的選項",
            option: {
                roleIconFileFormat: {
                    label: "角色圖示檔案格式",
                    description: "顯示角色圖示時使用的文件格式"
                }
            },
            context: {
                copyColor: "複製角色顏色",
                editRole: "編輯角色",
                viewIcon: "查看角色圖標"
            }
        },
        betterRoleDot: {
            name: "更好的角色點",
            description: "RoleDot（輔助使用設定）在點擊時複製角色顏色。 它還允許同時使用 RoleDot 和顏色名稱。",
            option: {
                bothStyles: {
                    label: "這裡是伊基風格",
                    description: "顯示角色點和彩色名稱"
                },
                copyRoleColorInProfilePopout: {
                    label: "在設定檔彈出視窗中複製角色顏色",
                    description: "允許透過點擊設定檔彈出視窗中的角色點來複製角色顏色"
                }
            }
        },
        betterSessions: {
            name: "更好的會議",
            description: "增強了會話（裝置）選單。 它可以讓您查看準確的時間戳，為每個會話指定唯一的名稱，並接收有關新會話的通知。",
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
                    description: "在背景檢查新會話並在偵測到時顯示通知"
                },
                checkInterval: {
                    label: "控制範圍",
                    description: "在背景檢查新會話的頻率（如果已啟用），以分鐘為單位"
                }
            }
        },
        betterSettings: {
            name: "更好的設置",
            description: "改善開啟設定選單的體驗",
            option: {
                disableFade: {
                    label: "禁用過渡效果",
                    description: "禁用交叉淡入淡出動畫"
                },
                organizeMenu: {
                    label: "編輯選單",
                    description: "設定將齒輪圖示選單分為幾類"
                },
                eagerLoad: {
                    label: "快速載入",
                    description: "消除首次開啟選單時的載入延遲"
                }
            },
            alert: {
                title: "需要重新啟動",
                restart: "您更改了需要重新啟動的設定。",
                confirm: "立即重新啟動",
                cancel: "之後！"
            }
        },
        betterUploadButton: {
            name: "更好的上傳按鈕",
            description: "一鍵安裝，右鍵開啟選單"
        },
        biggerStreamPreview: {
            name: "更大的串流預覽",
            description: "該插件可讓您放大廣播預覽",
            context: {
                viewPreview: "查看發布預覽"
            }
        },
        blockKeywords: {
            name: "阻止關鍵字",
            description: "封鎖包含某些使用者定義的關鍵字的訊息，就像阻止發送使用者一樣。",
            option: {
                blockedWords: {
                    label: "被阻止的單字",
                    description: "要阻止的以逗號分隔的單字列表"
                },
                useRegex: {
                    label: "正規表示式庫蘭",
                    description: "檢查訊息內容時使用每個值作為正規表示式（進階）"
                },
                caseSensitive: {
                    label: "區分大小寫",
                    description: "使用區分大小寫的搜尋？"
                },
                ignoreBlockedMessages: {
                    label: "忽略被封鎖的訊息",
                    description: "完全忽略新訊息欄（最近訊息）"
                }
            }
        },
        blockKrisp: {
            name: "布洛克克里斯普",
            description: "阻止 Krisp 安裝"
        },
        blurNSFW: {
            name: "模糊NSFW",
            description: "模糊 NSFW 頻道中的附件，直到將其懸停在",
            option: {
                blurAmount: {
                    label: "模糊量",
                    description: "模糊量（以像素為單位）"
                },
                blurAllChannels: {
                    label: "模糊所有頻道",
                    description: "模糊所有頻道上的配件（不僅僅是 NSFW）"
                }
            }
        },
        bypassPinPrompt: {
            name: "繞過Pin提示",
            description: "使用引腳功能時跳過引腳提示"
        },
        bypassStatus: {
            name: "繞過狀態",
            description: "在請勿打擾模式下仍會收到某些來源的通知。 您可以右鍵單擊使用者/頻道/伺服器來繞過請勿打擾模式。",
            context: {
                remove: "刪除狀態跳過",
                add: "新增狀態跳過"
            },
            option: {
                guilds: {
                    label: "伺服器",
                    description: "允許跳躍的伺服器（在伺服器上的任何位置進行 ping 操作時接收通知）",
                    placeholder: "用逗號分隔"
                },
                channels: {
                    label: "頻道",
                    description: "允許跳過的頻道（在該頻道上執行 ping 操作時接收通知）",
                    placeholder: "用逗號分隔"
                },
                users: {
                    label: "使用者",
                    description: "允許使用者跳過（接收 DM 中發送的所有訊息的通知）",
                    placeholder: "用逗號分隔"
                },
                allowOutsideOfDms: {
                    label: "允許外部 DM",
                    description: "允許選定的使用者跳過非 DM 狀態（類似於頻道/伺服器跳過，但適用於選定使用者發送的所有訊息）"
                },
                notificationSound: {
                    label: "通知聲音",
                    description: "決定是否播放通知聲音"
                },
                respectSilentPings: {
                    label: "尊重靜默 Ping",
                    description: "尊重靜默 ping（@silent/suppress 通知）"
                },
                statusToUse: {
                    label: "使用案例",
                    description: "用於白名單的狀態",
                    online: "在線的",
                    idle: "閒置的",
                    dnd: "請勿打擾",
                    invisible: "無形的"
                }
            }
        },
        cakeDay: {
            name: "蛋糕日",
            description: "使用蛋糕圖示追蹤和顯示用戶生日",
            context: {
                label: "生日",
                setBirthday: "設定生日",
                clearBirthday: "刪除生日",
                current: "目前的："
            },
            option: {
                chat: {
                    label: "聊天",
                    description: "在聊天中的用戶名旁邊顯示餅圖圖標"
                },
                memberList: {
                    label: "會員名單",
                    description: "在成員清單中顯示蛋糕圖標"
                },
                profileBadge: {
                    label: "個人資料徽章",
                    description: "在使用者個人資料上顯示蛋糕徽章"
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
                    description: "聊天中的使用者名稱旁邊"
                },
                memberList: {
                    label: "會員名單",
                    description: "在會員名單中"
                }
            },
            toast: {
                success: "生日設定成功！",
                invalid: "生日格式無效！ 僅接受 DD/MM。",
                cleared: "生日刪除成功！"
            },
            notification: {
                title: "🎂 今天是生日！",
                body: "今天是 {{username}} 的生日！"
            },
            modal: {
                title: "為 {{username}} 設定生日",
                description: "以 DD/MM 格式輸入您的生日（例如 25/12）",
                placeholder: "老鷹 25/12",
                current: "目前生日：",
                set: "設定生日",
                cancel: "取消",
                birthday: "今天是我的生日！ 🎂",
                saved: "已保存的生日",
                savedDesc: "尚未記錄生日。 右鍵單擊用戶即可添加生日！",
                today: "今天",
                remove: "消除",
                loading: "載入中...",
                save: "節省",
                edit: "編輯"
            }
        },
        callTimer: {
            name: "通話定時器",
            description: "顯示所有語音通話的通話計時器",
            option: {
                format: {
                    label: "格式",
                    description: "緊湊或人類可讀的格式",
                    human: "30克23秒00天42秒"
                },
                allCallTimers: {
                    label: "所有呼叫計時器",
                    description: "顯示伺服器上所有使用者的呼叫計時器"
                },
                showWithoutHover: {
                    label: "無需懸停即可顯示",
                    description: "始終顯示計時器，無需懸停"
                },
                showRoleColor: {
                    label: "顯示角色顏色",
                    description: "顯示使用者角色顏色（如果啟用了 ShowRoleColor 插件）"
                },
                trackSelf: {
                    label: "跟隨自己",
                    description: "也顯示你自己的計時器"
                },
                showSeconds: {
                    label: "顯示秒數",
                    description: "也可以在計時器中顯示秒數"
                },
                watchLargeGuilds: {
                    label: "觀看大型伺服器",
                    description: "追蹤大型伺服器上的用戶。 如果您使用的大型伺服器上有大量活躍的語音用戶，這可能會導致延遲。 對多達 2000 個主動語音使用者進行測試，沒有出現任何問題。"
                },
                fixUI: {
                    label: "使用者介面修復",
                    description: "在某些情況下，計時器可能會破壞使用者介面。 您可以透過啟用此選項來解決此問題。"
                }
            }
        },
        channelBadges: {
            name: "頻道徽章",
            description: "根據頻道類型新增徽章",
            badge: {
                private: "該頻道已被鎖定。",
                nsfw: "該頻道標記為 NSFW。",
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
                    description: "顯示音訊徽章"
                },
                showCategoryBadge: {
                    label: "顯示類別徽章",
                    description: "顯示類別徽章"
                },
                showDirectoryBadge: {
                    label: "顯示索引徽章",
                    description: "顯示索引徽章"
                },
                showAnnouncementThreadBadge: {
                    label: "顯示公告主題徽章",
                    description: "顯示公告主題徽章"
                },
                showPublicThreadBadge: {
                    label: "顯示一般主題徽章",
                    description: "顯示公共主題徽章"
                },
                showPrivateThreadBadge: {
                    label: "顯示專題徽章",
                    description: "顯示自訂主題徽章"
                },
                showStageBadge: {
                    label: "演出舞台徽章",
                    description: "展示舞台徽章"
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
                    label: "展示您的 NSFW 徽章",
                    description: "顯示 NSFW 徽章"
                },
                showLockedBadge: {
                    label: "顯示鎖定徽章",
                    description: "顯示您鎖定的徽章"
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
                    label: "聲音徽章標籤",
                    description: "音訊徽章標籤",
                    default: "賽斯"
                },
                categoryBadgeLabel: {
                    label: "類別徽章標籤",
                    description: "類別徽章標籤",
                    default: "類別"
                },
                announcementBadgeLabel: {
                    label: "公告徽章標籤",
                    description: "公告徽章標籤",
                    default: "哈伯"
                },
                announcementThreadBadgeLabel: {
                    label: "公告主題徽章標籤",
                    description: "公告主題徽章標籤",
                    default: "新聞主題"
                },
                publicThreadBadgeLabel: {
                    label: "一般主題徽章標籤",
                    description: "一般主題徽章標籤",
                    default: "主題"
                },
                privateThreadBadgeLabel: {
                    label: "專題徽章標籤",
                    description: "自訂主題徽章標籤",
                    default: "專題"
                },
                stageBadgeLabel: {
                    label: "舞台徽章標籤",
                    description: "舞台徽章標籤",
                    default: "場景"
                },
                directoryBadgeLabel: {
                    label: "索引徽章標籤",
                    description: "索引徽章標籤",
                    default: "指數"
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
                    label: "鎖徽章標籤",
                    description: "鎖徽章標籤",
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
                    label: "音頻徽章顏色",
                    description: "聲音徽章顏色"
                },
                categoryBadgeColor: {
                    label: "類別徽章顏色",
                    description: "類別徽章顏色"
                },
                announcementBadgeColor: {
                    label: "公告徽章顏色",
                    description: "公告徽章顏色"
                },
                announcementThreadBadgeColor: {
                    label: "公告主題徽章顏色",
                    description: "公告主題徽章顏色"
                },
                publicThreadBadgeColor: {
                    label: "通用螺紋徽章顏色",
                    description: "一般主題徽章顏色"
                },
                privateThreadBadgeColor: {
                    label: "專題徽章顏色",
                    description: "自訂主題徽章顏色"
                },
                stageBadgeColor: {
                    label: "舞臺徽章顏色",
                    description: "舞臺徽章顏色"
                },
                directoryBadgeColor: {
                    label: "索引徽章顏色",
                    description: "索引徽章顏色"
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
                voice: "賽斯",
                category: "類別",
                announcement: "哈伯",
                announcementThread: "新聞主題",
                publicThread: "主題",
                privateThread: "專題",
                stage: "場景",
                directory: "指數",
                forum: "論壇",
                media: "媒體",
                nsfw: "美國國家科學基金會",
                locked: "鎖定",
                rules: "規則",
                unknown: "未知"
            },
            tooltip: {
                locked: "該頻道已被鎖定。",
                nsfw: "該頻道標記為 NSFW。"
            }
        },
        channelTabs: {
            name: "頻道選項卡",
            description: "將您經常造訪的頻道分組到標籤中，就像在瀏覽器中一樣",
            open: "在新分頁中開啟",
            animation: {
                title: "動畫控制",
                description: "啟用或停用頻道標籤的特定動畫。 每個選項都可以獨立開啟或關閉。",
                placeholder: "選擇要啟用的動畫...",
                tabHover: "選項卡懸停效果（刪除+縮放）",
                tabSelection: "選定的選項卡抬起動畫",
                tabDragDrop: "選項卡拖放（幽靈+重新排序）",
                tabEnterExit: "Tab 進入/退出捲動（建立 + 關閉）",
                tabIconPop: "Icon Pop（選舉成長）",
                closeRotation: "關閉按鈕 返回",
                plusPulse: "加號按鈕脈衝效果",
                mentionGlow: "提及徽章閃耀",
                compactExpand: "緊湊模式擴展",
                selectedBorder: "選定的選項卡藍色邊框",
                selectedBackground: "選定的選項卡背景顏色",
                tabShadows: "選項卡陰影效果",
                tabRepositioning: "選項卡重新定位（軟過渡）",
                resizeHandle: "調整淡入淡出手把大小",
                questActivate: "現役梯度"
            },
            bookmark: {
                label: "耶爾·伊米",
                unknown: "未知用戶",
                folder: "資料夾",
                add: "加入書籤",
                edit: "編輯書籤",
                delete: "伊米尼·希爾",
                remove: "從書籤中刪除",
                removeFolder: "從資料夾中刪除書籤",
                loading: "正在加載書籤...",
                noBookmarks: "您沒有任何書籤。 您可以新增開啟的選項卡或透過右鍵單擊隱藏它。",
                quests: "任務",
                messageRequests: "留言請求",
                friends: "朋友們",
                shop: "店鋪",
                library: "圖書館",
                discovery: "發現",
                nitro: "硝基",
                icymi: "伊西米",
                activity: "活動",
                specialPage: "特別頁面"
            },
            button: {
                save: "節省",
                delete: "西爾",
                cancel: "取消"
            },
            context: {
                label: "ChannelTabs 上下文選單",
                bookmark: "ChannelTabs 書籤上下文選單",
                tab: "ChannelTabs 選項卡上下文選單",
                compact: "袖珍的",
                bookmarkBar: "書籤欄",
                openAll: "打開書籤中的全部內容",
                openNew: "在新分頁中開啟",
                close: {
                    tab: "關閉選項卡",
                    otherTabs: "關閉其他選項卡",
                    tabsToRight: "關閉右側選項卡",
                    tabsToLeft: "關閉左側選項卡",
                    reopen: "重新開啟關閉的選項卡",
                    allTabs: "關閉所有選項卡"
                }
            },
            error: {
                noLogin: "還沒有登入帳號？"
            },
            modal: {
                add: {
                    title: "新增書籤到資料夾",
                    select: "選擇一個資料夾",
                    create: "創造新的"
                },
                edit: {
                    title: "編輯書籤",
                    name: "書籤名稱",
                    folder: "資料夾顏色"
                },
                delete: {
                    title: "你確定嗎？",
                    description: "刪除書籤資料夾也會刪除其中的所有書籤。"
                }
            },
            option: {
                onStartup: {
                    label: "最初",
                    description: "選擇啟動時如何處理選項卡",
                    nothing: "什麼也不做（打開朋友選項卡）",
                    remember: "記住上次會話的選項卡",
                    open: "打開特定選項卡"
                },
                tabSet: {
                    label: "標籤集"
                },
                noPomeloNames: {
                    label: "沒有柚子的名字",
                    description: "使用顯示名稱代替 DM 使用者名稱"
                },
                showStatusIndicators: {
                    label: "顯示狀態指示器",
                    description: "顯示 DM 的狀態指示器"
                },
                showBookmarkBar: {
                    label: "顯示書籤列"
                },
                bookmarkNotificationDot: {
                    label: "書籤通知點",
                    description: "顯示書籤的通知點"
                },
                widerTabsAndBookmarks: {
                    label: "大標籤和書籤",
                    description: "在更大的顯示器上展開選項卡和書籤"
                },
                tabWidthScale: {
                    label: "製表符寬度比例",
                    description: "選項卡寬度比例（百分比） - 透過拖曳選項卡邊緣進行調整"
                },
                renderAllTabs: {
                    label: "將所有選項卡保留在記憶體中",
                    description: "將所有選項卡保留在記憶體中，以便更快地在選項卡之間切換（滾動和狀態被快取）"
                },
                switchToExistingTab: {
                    label: "切換到現有選項卡",
                    description: "如果您正在瀏覽的頻道已有選項卡，請切換到該選項卡"
                },
                createNewTabIfNotExists: {
                    label: "如果沒有選項卡，則建立它",
                    description: "如果頻道沒有選項卡，請建立新選項卡"
                },
                enableRapidNavigation: {
                    label: "啟用快速導航",
                    description: "當頻道快速變更時，目前選項卡會發生變化，而不是新選項卡。"
                },
                rapidNavigationThreshold: {
                    label: "快速導航閾值",
                    description: "時間間隔（以毫秒為單位）。 如果在此期間開啟新頻道，現有分頁將會發生變更。"
                },
                tabBarPosition: {
                    label: "標籤欄位置",
                    description: "標籤欄位置",
                    top: "頂部",
                    bottom: "替代"
                },
                enableNumberKeySwitching: {
                    label: "使用數字鍵切換選項卡",
                    description: "使用鍵 1–9 啟用選項卡切換"
                },
                numberKeySwitchCount: {
                    label: "數字鍵選項卡編號",
                    description: "透過數字鍵存取的選項卡數量 (1–9)"
                },
                enableCloseTabShortcut: {
                    label: "選項卡關閉快捷方式",
                    description: "啟用選項卡關閉鍵盤快速鍵"
                },
                enableNewTabShortcut: {
                    label: "新標籤快捷方式",
                    description: "啟用新分頁開啟捷徑"
                },
                enableTabCycleShortcut: {
                    label: "製表符循環快捷方式",
                    description: "啟用選項卡之間切換的快捷方式"
                },
                keybindsSection: {
                    label: "鍵盤快速鍵",
                    description: "點擊按鈕並按下所需的組合鍵。 支援 CTRL、SHIFT 和 ALT 等修飾符。",
                    title: "鍵盤快速鍵",
                    reset: "全部重設為預設值",
                    closeTab: {
                        label: "關閉選項卡",
                        description: "用於關閉目前選項卡的鍵盤快速鍵"
                    },
                    newTab: {
                        label: "新標籤",
                        description: "用於開啟包含目前頻道的新分頁的鍵盤快速鍵"
                    },
                    cycleTabsForward: {
                        label: "正向標籤循環",
                        description: "轉到下一個選項卡的快捷方式（轉到第一個選項卡）"
                    },
                    cycleTabsBackward: {
                        label: "後彈跳循環",
                        description: "轉到上一個選項卡的快捷方式（轉到最後一個選項卡）"
                    }
                },
                closeTabKeybind: {
                    label: "選項卡關閉快捷方式",
                    description: "關閉目前選項卡的快捷方式"
                },
                newTabKeybind: {
                    label: "新標籤快捷方式",
                    description: "新分頁開啟捷徑"
                },
                cycleTabForwardKeybind: {
                    label: "正向標籤循環",
                    description: "轉到下一個選項卡的快捷方式"
                },
                cycleTabBackwardKeybind: {
                    label: "後彈跳循環",
                    description: "轉到上一個選項卡的快捷方式"
                },
                showTabNumbers: {
                    label: "顯示選項卡編號",
                    description: "在選項卡上顯示數字徽章以顯示快捷方式"
                },
                tabNumberPosition: {
                    label: "標籤編號位置",
                    description: "選項卡上數位徽章的位置",
                    left: "左（圖標前）",
                    right: "右（貼文內容）"
                },
                animations: {
                    label: "動畫"
                },
                animationHover: {
                    label: "懸停動畫",
                    description: "懸停時啟用提升和放大效果"
                },
                animationSelection: {
                    label: "選擇動畫",
                    description: "在選擇時啟用燈光/影格動畫"
                },
                animationDragDrop: {
                    label: "拖放動畫",
                    description: "拖曳時啟用重影效果"
                },
                animationEnterExit: {
                    label: "進入/退出動畫",
                    description: "建立/關閉選項卡時滾動動畫"
                },
                animationIconPop: {
                    label: "圖示流行動畫",
                    description: "在選擇過程中啟用圖示增長動畫"
                },
                animationCloseRotation: {
                    label: "殺戮按鈕返回",
                    description: "為關機圖示新增旋轉動畫"
                },
                animationPlusPulse: {
                    label: "加號按鈕脈衝",
                    description: "為新選項卡按鈕啟用脈衝動畫"
                },
                animationMentionGlow: {
                    label: "提及閃閃發光",
                    description: "在提及徽章上啟用紅光動畫"
                },
                animationCompactExpand: {
                    label: "緊湊的擴展動畫",
                    description: "實現緊湊選項卡的平滑擴展"
                },
                animationSelectedBorder: {
                    label: "選定的選項卡邊框動畫",
                    description: "為選取的標籤啟用邊框和發光樣式動畫"
                },
                animationSelectedBackground: {
                    label: "選定的選項卡背景動畫",
                    description: "啟用所選選項卡背景顏色的動畫更改"
                },
                animationTabShadows: {
                    label: "選項卡陰影動畫",
                    description: "在選項卡上啟用陰影效果"
                },
                animationTabPositioning: {
                    label: "選項卡定位動畫",
                    description: "切換選項卡時的平滑過渡動畫"
                },
                animationResizeHandle: {
                    label: "調整動畫大小",
                    description: "啟用大小調整手把淡入淡出動畫"
                },
                animationQuestsActive: {
                    label: "現役動畫",
                    description: "當任務處於活動狀態時在選項卡中啟用漸變動畫"
                },
                compactAutoExpandSelected: {
                    label: "選擇時自動展開",
                    description: "選擇時自動展開緊湊選項卡"
                },
                compactAutoExpandOnHover: {
                    label: "懸停時自動展開",
                    description: "懸停時自動展開緊湊選項卡"
                },
                openInNewTabAutoSwitch: {
                    label: "新分頁開啟時自動切換",
                    description: "新分頁開啟時自動切換到新分頁"
                },
                bookmarksIndependentFromTabs: {
                    label: "獨立書籤",
                    description: "書籤獨立導航，不影響標籤列"
                },
                showResizeHandle: {
                    label: "顯示尺寸手柄",
                    description: "顯示調整標籤寬度的手柄"
                },
                openNewTabsInCompactMode: {
                    label: "緊湊地開啟新標籤",
                    description: "新開啟的選項卡預設以緊湊模式開啟"
                },
                newTabButtonBehavior: {
                    label: "新標籤按鈕行為",
                    description: "新選項卡 (+) 按鈕跟隨選項卡而不是固定在右側"
                },
                oneTabPerServer: {
                    label: "每伺服器一個選項卡",
                    description: "讓伺服器只有一跳；開啟新頻道時使用相同的選項卡"
                },
                maxOpenTabs: {
                    label: "最大打開標籤數",
                    description: "可以同時開啟的最大選項卡數（0 = 無限制）"
                }
            },
            tabs: {
                startup: "主頁選項卡",
                currently: "設定目前開啟的選項卡"
            },
            toast: {
                notRestoring: "由於啟用了 KeepCurrentChannel，選項卡未恢復",
                failed: {
                    restore: "標籤頁無法恢復",
                    saved: "儲存的選項卡無法載入"
                }
            }
        },
        characterCounter: {
            name: "字元計數器",
            description: "在訊息框中顯示字元計數器",
            option: {
                colorEffects: {
                    label: "色彩效果",
                    description: "接近字元限制時開啟或關閉色彩效果"
                }
            }
        },
        cleanChannelGroups: {
            name: "清潔頻道組",
            description: "它只是隱藏折疊類別中的所有頻道，即使有未讀訊息也是如此。"
        },
        cleanChannelName: {
            name: "清潔頻道名稱",
            description: "刪除頻道名稱中的所有表情符號和愚蠢的裝飾"
        },
        clearURLs: {
            name: "清除URL",
            description: "自動從您提交的網址中刪除追蹤元素"
        },
        clickableRoles: {
            name: "可點擊角色",
            description: "您可以透過點擊使用者個人資料和成員清單中的角色來查看成員具有哪些角色。",
            modal: {
                loading: "會員正在加載中...",
                noMembers: "沒有找到會員。",
                unknown: "未知角色"
            }
        },
        clientSideBlock: {
            name: "客戶端區塊",
            description: "允許您在本地對任何用戶隱藏幾乎所有內容",
            replying: "回覆被封鎖的訊息",
            option: {
                hideVc: {
                    label: "隱藏語音頻道",
                    description: "隱藏包含被封鎖使用者的語音頻道"
                },
                usersToBlock: {
                    label: "要封鎖的用戶",
                    description: "使用者 ID 以逗號和空格分隔"
                },
                hideBlockedUsers: {
                    label: "隱藏被封鎖的用戶",
                    description: "完全隱藏各處被封鎖的用戶"
                },
                hideBlockedMessages: {
                    label: "隱藏被封鎖的訊息",
                    description: "完全隱藏來自被封鎖使用者的訊息（與舊的 noblockedmessages 插件相同）"
                },
                hideEmptyRoles: {
                    label: "隱藏空缺職位",
                    description: "如果所有成員都被阻止，則隱藏角色頭銜"
                },
                blockedReplyDisplay: {
                    label: "阻止的回應視圖",
                    description: "當您回覆隱藏的某人時，會顯示什麼而不是訊息",
                    displayText: "顯示指示回覆隱藏訊息的文字",
                    hideReply: "不顯示任何內容"
                },
                guildBlackList: {
                    label: "伺服器黑名單",
                    description: "將停用該功能的伺服器 ID"
                },
                guildWhiteList: {
                    label: "伺服器白名單",
                    description: "將啟用該功能的伺服器 ID"
                }
            }
        },
        clientTheme: {
            name: "客戶主題",
            description: "舊客戶端主題實驗的重製。 為您的 Discord 用戶端主題新增顏色",
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
                    contrast: "所選顏色與文字的對比不佳",
                    nitro: "不支援 Nitro 主題",
                    switch: "切換到 {{oppositeTheme}} 模式",
                    disable: "禁用硝基主題",
                    reset: "重設主題顏色"
                }
            }
        },
        clipsEnhancements: {
            name: "Clips 增強功能",
            description: "添加更多剪輯 FPS 和持續時間選項，以及 RPC 標記！",
            minutes: "一分鐘",
            option: {
                richPresenceTagging: {
                    label: "豐富的存在標記",
                    description: "何時應使用現有的 Rich Presence 標記片段？",
                    always: "總是",
                    only: "僅當事件名稱的開頭或結尾匹配時",
                    never: "絕不"
                },
                enableScreenshotKeybind: {
                    label: "啟用螢幕截圖熱鍵",
                    description: "啟用截圖熱鍵功能"
                },
                enableVoiceOnlyClips: {
                    label: "僅啟用音訊剪輯",
                    description: "啟用純音訊剪輯（沒有視訊的音訊）"
                },
                enableAdvancedSignals: {
                    label: "啟用進階訊號",
                    description: "啟用進階剪輯訊號（自動剪輯觸發）"
                },
                ignorePlatformRestriction: {
                    label: "忽略平台限制",
                    description: "允許特定於平台的剪輯（可能會導致保存錯誤）"
                },
                clipsLink: {
                    label: "剪輯連結",
                    link: "更改剪輯設定中的 FPS 和持續時間選項！"
                }
            }
        },
        colorSighted: {
            name: "色彩視覺",
            description: "從情況中刪除色盲友好的圖標，就像 2015-2017 Discord 一樣"
        },
        commandPalette: {
            name: "命令面板",
            description: "它允許您使用鍵盤導航介面。",
            action: {
                command: {
                    label: "運行命令",
                    description: "使用 ID 運行另一個調色板命令。 如果您不確定標識符，請使用選擇器。"
                },
                settings: {
                    label: "開啟設定頁面",
                    description: "它直接進入 Discord 設定頁面。 從選擇器中選擇一個頁面。"
                },
                url: {
                    label: "開啟網址",
                    description: "打開一個連結。 為了獲得最佳相容性，請使用 https:// 連結。"
                },
                macro: {
                    label: "運行巨集",
                    description: "按順序運行一系列命令。 透過選擇器新增步驟。"
                }
            },
            category: {
                auto: "自動（使用預設佈局）",
                default: {
                    label: "快速交易",
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
                    description: "針對所選通道和伺服器的操作"
                },
                updates: {
                    label: "更新",
                    description: "了解 Plexcord 的最新動態"
                },
                discordSettings: {
                    label: "不和諧設定",
                    description: "前往 Discord 設定頁面"
                },
                custom: {
                    label: "特殊指令",
                    description: "使用者定義的命令選項板條目"
                },
                sessions: {
                    label: "會話工具",
                    description: "管理 Discord 會話的工具"
                },
                guilds: {
                    label: "伺服器",
                    description: "快速導航到您的伺服器"
                },
                friends: {
                    label: "朋友們",
                    description: "快快去找你的朋友吧"
                },
                action: {
                    label: "行動",
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
                    label: "重新安裝不和諧",
                    description: "重新載入目前的 Discord 視窗"
                }
            },
            command: {
                enable: "啟用 {{pluginName}}",
                enabled: "{{pluginName}} 已啟用",
                disable: "停用 {{pluginName}}",
                disabled: "{{pluginName}} 已停用",
                failed: "命令失敗：",
                toggleFailed: "無法更改 {{pluginName}}。",
                pluginSettings: "{{pluginName}} 設定",
                untitled: "匿名命令",
                new: "新指令",
                error: {
                    enter: "輸入命令 ID 或在下方選擇。",
                    noCommand: "沒有與該 ID 相符的命令。"
                },
                discord: {
                    account: "開設我的帳戶",
                    privacy: "資料和隱私開放",
                    notifications: "開啟通知",
                    voice: "打開音訊和視頻",
                    text: "開啟文字和圖像",
                    appearance: "開放視野",
                    accessibility: "開放輔助使用",
                    keybinds: "開啟按鍵綁定",
                    advanced: "開啟進階設定",
                },
                updates: {
                    check: {
                        label: "檢查更新",
                        description: "檢查 Plexcord 更新",
                        one: "有更新可用",
                        multiple: "有 {{count}} 個更新",
                        none: "沒有更新",
                        failed: "無法檢查更新。"
                    },
                    changelog: {
                        label: "查看變更日誌",
                        description: "Plexcord 開啟變更日誌"
                    }
                },
                read: {
                    mark: {
                        label: "{{channelLabel}} 標記為已讀"
                    }
                },
                pin: {
                    open: {
                        label: "開啟 {{channelLabel}} Pin 圖"
                    },
                    toggle: {
                        label: "Toggle 固定最後一個指令"
                    }
                },
                channel: {
                    mute: {
                        label: "{{channelLabel}} 蘇斯特",
                        oneHour: "將頻道 {{channelLabel}} 靜音 1 小時",
                        untilTomorrow: "將頻道 {{channelLabel}} 靜音至明天",
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
                        label: "開啟 {{guildLabel}} 設定"
                    },
                    navigate: {
                        label: "前往 {{guildLabel}} 伺服器"
                    }
                },
                session: {
                    thirtyMinutesDnd: "30分鐘請勿打擾",
                    oneHourDnd: "1小時請勿打擾",
                    cancelStatusReset: "取消狀態計時器"
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
                    deafen: "切換自震耳聾",
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
                        label: "重新安裝所有插件",
                        description: "立即嘗試重新載入每個活動插件"
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
                noCommand: "未找到指令",
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
                        noCommand: "未找到指令",
                        pin: "引腳命令",
                        unpin: "取消固定"
                    },
                    target: {
                        label: "目標指令ID",
                        placeholder: "輸入命令ID",
                        choose: "選擇命令"
                    },
                    custom: {
                        label: "特殊指令",
                        description: "1) 為指令命名 · 2) 新增選用描述/關鍵字/標籤/類別 · 3) 選擇一個動作並填寫詳細資料（別名和巨集的 ID 必須與現有調色盤指令相符）。",
                        auto: "自動（預設）",
                        expand: "擴張",
                        collapse: "坍塌",
                        collapsed: {
                            label: "票",
                            description: "顯示名稱",
                            advanced: {
                                hide: "隱藏進階選項",
                                show: "顯示進階選項"
                            },
                            subtitle: {
                                label: "解釋",
                                placeholder: "可選副標題"
                            },
                            keywords: {
                                label: "關鍵字",
                                placeholder: "逗號分隔關鍵字"
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
                        label: "腳本",
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
                core: "葵花籽",
                navigation: "漫步",
                utility: "車輛",
                developer: "開發商",
                customization: "客製化",
                plugins: "外掛",
                session: "會議",
                context: "情境",
                custom: "特別的",
                guilds: "伺服器",
                friends: "朋友們",
                other: "其他"
            },
            toast: {
                chat: {
                    button: {
                        unableToFind: "找不到聊天按鈕「{{label}}」。",
                        failedToTrigger: "無法觸發 {{label}}。",
                        activated: "{{label}} 已啟動。"
                    }
                },
                channel: {
                    mute: {
                        unavailable: "通道靜音控制不可用",
                        muted: "頻道已經安靜了。",
                        unmuted: "頻道已靜音。",
                        failed: "無法更新頻道靜音狀態。"
                    },
                    dm: {
                        no: "此會話中沒有記錄 DM 關閉。",
                        reOpened: "上次關閉的 DM 已重新開啟。",
                        noAvailable: "DM 不再可用。"
                    }
                },
                command: {
                    loop: "在巨集執行中偵測到命令循環。",
                    notFound: "找不到 {{commandId}} 指令。",
                    unsupported: "不支援的自訂命令操作。",
                    failedToRun: "無法運作 {{label}}。",
                    notMetadata: "命令面板插件元資料不可用。"
                },
                guild: {
                    mute: {
                        unavailable: "伺服器靜音控制不可用",
                        muted: "服務器已經安靜了。",
                        unmuted: "伺服器靜音已被刪除。",
                        failed: "無法更新伺服器靜音狀態。"
                    },
                    settings: {
                        unable: "無法開啟伺服器設定。",
                    }
                },
                panel: {
                    pin: {
                        unable: "固定面板無法打開。",
                    }
                },
                status: {
                    reset: {
                        canceled: "計劃的狀態重置已被取消。",
                        unableToChange: "此時狀態無法變更。",
                        reverted: "狀態返回為 {{status}}。",
                        dnd: "請勿打擾 {{duration}} 分鐘。"
                    },
                    change: {
                        unableToChange: "此時狀態無法變更。",
                        changed: "狀態改為 {{status}}。"
                    }
                },
                read: {
                    marked: "{{channelLabel}} 被標記為已讀。",
                    failed: "無法將該頻道標記為已讀。"
                },
                route: {
                    unable: "無法開啟{{destination}}。",
                },
                notification: {
                    cleared: "所有通知均已清除。",
                    failed: "無法清除通知。",
                    notSupported: "不支援通知清除。"
                },
                streamerMode: {
                    enabled: "廣播者模式已啟用。",
                    disabled: "廣播者模式已停用。",
                },
                voice: {
                    micToggle: {
                        muted: "麥克風靜音了。",
                        unmuted: "麥克風已開啟。"
                    },
                    deafenToggle: {
                        deafened: "你現在聾了。",
                        undeafened: "你不再聾了。"
                    }
                },
                quickCSS: {
                    enabled: "快速 CSS 已啟用。",
                    disabled: "快速 CSS 已禁用。"
                },
                transparentity: {
                    enabled: "視窗透明度已啟用。",
                    disabled: "視窗透明度已停用。"
                },
                plugin: {
                    disabled: {
                        label: "{{pluginName}} 已停用。",
                        disable: "{{pluginName}} 已停用。 若要使用此操作，請啟用該外掛程式。"
                    },
                    required: {
                        label: "{{pluginName}} 需要重新啟動才能重新安裝。"
                    },
                    stop: {
                        failed: "無法停止 {{pluginName}}。"
                    },
                    restart: {
                        failed: "無法重新啟動 {{pluginName}}。"
                    },
                    reload: {
                        label: "{{pluginName}} 已重新載入。",
                        noPlugin: "沒有重新安裝任何插件。",
                        reloaded: "重新安裝了 {{count}} 個外掛程式。"
                    },
                    toggle: {
                        enabled: "{{changed}} 外掛程式已啟用。",
                        disabled: "{{changed}} 外掛程式已停用。",
                        noChanged: "任何插件的狀態都沒有改變。"
                    },
                    run: {
                        failed: {
                            label: "無法運作 {{pluginName}}：{{actionLabel}}。"
                        }
                    }
                }
            },
            display: {
                channel: {
                    current: "目前頻道",
                    group: "小組DM",
                    direct: "私訊"
                },
                guild: {
                    current: "目前伺服器",
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
                    description: "調色板視圖",
                    classic: "經典的",
                    polished: "拋光（現代）"
                },
                showTags: {
                    label: "顯示標籤",
                    description: "顯示指令標籤"
                },
                enableTagFilter: {
                    label: "啟用標籤過濾器",
                    description: "顯示標籤過濾欄"
                },
                customCommands: {
                    label: "特殊指令",
                    description: "管理自訂命令選項板條目"
                }
            },
            template: {
                alias: {
                    label: "暱稱命令",
                    description: "反映現有命令"
                },
                settings: {
                    label: "設定",
                    description: "打開不和諧設置"
                },
                url: {
                    label: "聯繫",
                    description: "開啟外部 URL"
                },
                macro: {
                    label: "宏",
                    description: "運行一系列命令"
                }
            }
        },
        consoleJanitor: {
            name: "控制台管理員",
            description: "禁用煩人的控制台訊息/錯誤",
            option: {
                disableLoggers: {
                    label: "停用記錄器",
                    description: "停用 Discord 的記錄器"
                },
                disableSpotifyLogger: {
                    label: "停用 Spotify 記錄器",
                    description: "停用洩漏帳戶資訊和存取金鑰的 Spotify 記錄器"
                },
                whitelistedLoggers: {
                    label: "白名單記錄器",
                    description: "即使其他記錄器被隱藏，分號 (;) 分隔的記錄器清單也將被允許"
                },
                allowLevel: {
                    label: "允許水平",
                    description: "始終允許這些類型的記錄器",
                    filter: "過濾器列表"
                }
            }
        },
        consoleShortcuts: {
            name: "控制台快速鍵",
            description: "為視窗上的許多內容添加更短的快捷方式。 運行列表的“shortcutList”。"
        },
        contentWarning: {
            name: "內容警告",
            description: "預設啟用某些觸發詞模糊。 單擊模糊的內容使其可見。",
            option: {
                flagged: {
                    label: "標記",
                    flagged: "標記詞",
                    placeholder: "單字"
                },
                onClick: {
                    label: "點擊它",
                    description: "點擊時顯示內容，而不僅僅是滑鼠懸停時顯示內容"
                }
            }
        },
        copyEmojiMarkdown: {
            name: "複製EmojiMarkdown",
            description: "允許您將表情符號複製為格式化文字 (<a:blob_pwease:1402403381900742737>)",
            option: {
                copyUnicode: {
                    label: "統一碼副本",
                    description: "複製原始 unicode 字元而不是 :name: 作為預設表情符號 (👽)"
                }
            },
            context: {
                copy: "複製表情符號 Markdown"
            },
            toast: {
                success: "成功的！ 表情符號的降價已被複製。"
            }
        },
        copyFileContents: {
            name: "複製文件內容",
            description: "在文字檔案附件中新增一個按鈕以複製其內容",
            copied: "複製了！",
            large: "文件太大，無法複製。",
            copyFileContents: "複製文件內容"
        },
        copyProfileColors: {
            name: "複製設定檔顏色",
            description: "一個將使用者的個人資料漸層顏色複製到剪貼簿的插件。",
            copy: "複製設定檔顏色",
            toast: {
                noColor: "未找到設定檔顏色！",
                copied: "設定檔顏色已複製到剪貼簿！",
                error: "複製設定檔顏色時發生錯誤！"
            }
        },
        copyStatusUrls: {
            name: "複製狀態 URL",
            description: "右鍵單擊時複製使用者的狀態 URL",
            toast: {
                copied: "已複製網址",
                error: "複製 URL 時出錯，請檢查控制台以獲取更多信息"
            }
        },
        copyStickerLinks: {
            name: "複製貼紙鏈接",
            description: "新增複製和開啟貼紙連結的功能",
            context: {
                copy: "複製連結",
                open: "打開連結"
            },
            toast: {
                success: "連結已複製！"
            }
        },
        copyUserMention: {
            name: "複製用戶提及",
            description: "在使用者上下文選單中新增一個按鈕以複製使用者的提及。 與 ValidUser 搭配使用效果最佳。",
            context: {
                copy: "複製用戶提及"
            }
        },
        copyUserURLs: {
            name: "複製使用者 URL",
            description: "將「複製使用者 URL」選項新增至使用者上下文功能表。",
            context: {
                copy: "複製使用者網址"
            }
        },
        crashHandler: {
            name: "崩潰處理程序",
            description: "幫助插件來管理崩潰，如果可能的話，無需重新啟動即可從崩潰中恢復",
            option: {
                attemptToPreventCrashes: {
                    label: "嘗試防止崩潰",
                    description: "嘗試防止 Discord 崩潰？"
                },
                attemptToNavigateToHome: {
                    label: "嘗試重定向到主頁",
                    description: "嘗試在崩潰後恢復中重定向到主選項卡。"
                }
            },
            toast: {
                crashed: {
                    title: "不和諧崩潰了！",
                    body: "糟糕 :( Discord 短時間內崩潰了兩次，不會進行恢復嘗試。點擊此處加入支援伺服器！",
                    update: "哦不，Discord 剛剛崩潰了……但好消息是，有一個 Plexcord 更新可以解決這個問題！ 您想現在更新嗎？",
                    recover: "正在嘗試恢復...點擊此處並加入支援伺服器！",
                    invalid: "邀請連結無效或過期。"
                }
            }
        },
        ctrlEnterSend: {
            name: "CtrlEnter發送",
            description: "使用Ctrl+Enter發送訊息（可自訂）",
            option: {
                submitRule: {
                    label: "發文規則",
                    description: "訊息如何發送",
                    ctrlEnter: "Ctrl+Enter（Enter 或 Shift+Enter 換行）（在 macOS 上為 cmd+enter）",
                    shiftEnter: "Shift+Enter（輸入換行）",
                    enter: "Enter（Shift+Enter 換行；Discord 預設值）"
                },
                sendMessageInTheMiddleOfACodeBlock: {
                    label: "在程式碼區塊中間發送訊息",
                    description: "在程式碼區塊中間發送訊息"
                }
            }
        },
        cursorBuddy: {
            name: "遊標好友",
            description: "增加一個跟隨遊標的精靈。",
            modal: {
                furColor: "毛皮顏色",
                outlineColor: "阿納哈特·倫吉"
            },
            option: {
                buddy: {
                    label: "夥伴",
                    description: "選擇遊標好友",
                    oneko: "好的",
                    fathorse: "肥馬"
                },
                speed: {
                    label: "速度",
                    description: "你好友的速度",
                    invalid: "速度必須大於0"
                },
                fps: {
                    label: "幀率 (FPS)",
                    description: "你好友的幀速率",
                    invalid: "幀率必須大於0"
                },
                onekoSection: {
                    label: "好的"
                },
                furColor: {
                    label: "毛皮顏色",
                    description: "oneko 的毛皮六角形顏色"
                },
                outlineColor: {
                    label: "阿納哈特·倫吉",
                    description: "Oneko 的輪廓六角形顏色"
                },
                fathorseSection: {
                    label: "肥馬"
                },
                size: {
                    label: "方面",
                    description: "肥馬的尺寸",
                    invalid: "大小必須大於 0"
                },
                fade: {
                    label: "褪色",
                    description: "當遊標接近時馬是否消失"
                },
                freeroam: {
                    label: "自由漫遊",
                    description: "馬空閒時是否可以自由漫步"
                },
                shake: {
                    label: "解僱",
                    description: "馬行走時是否會晃動窗戶"
                }
            }
        },
        customFolderIcons: {
            name: "自訂資料夾圖標",
            description: "使用任意 png 自訂資料夾圖標",
            option: {
                solidIcon: {
                    label: "平面圖示",
                    description: "使用純色背景作為影像的背景"
                },
                folderIcons: {
                    label: "資料夾圖示",
                    description: "資料夾圖示設定"
                }
            },
            modal: {
                change: "更改資料夾圖示大小",
                save: "節省",
                unset: "消除",
                set: "設定新圖示",
                hover: "將其設為刷新後，您可能需要將滑鼠懸停在該資料夾上。"
            }
        },
        customIdle: {
            name: "自訂空閒",
            description: "允許您設定 Discord 進入空閒模式之前的時間量（或停用自動空閒模式）",
            backOnline: "歡迎回來！ 單擊按鈕即可上網。 點選 X 可保持空閒狀態，直到重新載入。",
            exit: "退出空閒狀態",
            option: {
                idleTimeout: {
                    label: "空閒超時",
                    description: "Discord 進入空閒模式之前的分鐘數（0 表示停用自動空閒模式）"
                },
                remainInIdle: {
                    label: "保持閒置",
                    description: "當您返回 Discord 時，請保持空閒狀態，直到您確認要上網"
                }
            }
        },
        customRPC: {
            name: "自訂RPC",
            description: "將完全可自訂的 Rich Presence 新增至您的 Discord 個人資料中",
            goTo: "透過存取{{portal}}建立應用程式並取得應用程式ID。",
            upload: "透過從 Rich Presence 標籤上傳圖像來取得圖像金鑰。",
            image: "如果您想使用圖像鏈接，請下載圖像並將其上傳到 {{imgur}}，然後右鍵單擊圖像並使用“複製圖像地址”來獲取鏈接。",
            button: "您在個人資料上看不到自己的按鈕，但其他人可以正常看到它們。",
            font: "一些奇怪的 unicode 字母（'𝖇ö𝖞𝖑𝖊 𝖞𝖆𝖟ı𝖑𝖆𝖗'）可能會導致 Rich Presence 不出現，請嘗試使用普通字母。",
            placeholder: "輸入一個值",
            select: "選擇一個選項",
            error: {
                appIdInvalid: "申請 ID 不是有效號碼。",
                notice: "警告",
                sharing: "未啟用事件共享，人們將無法看到您的私人豐富狀態！",
                enable: "啟用設定",
                validStream: "貼文連結必須是有效的 URL。",
                mustBeURL: "它必須是有效的 URL。",
                streamCharacters: "帖子連結不得超過 512 個字元。",
                dontUse: "不要使用 Discord 連結。 請改用 Imgur 圖像連結。",
                imgur: "Imgur 連結必須直接指向圖像（例如：https://i.imgur.com/...）。 右鍵單擊圖像，然後按一下“複製圖像地址”。",
                tenor: "Tenor 連結必須直接指向圖像（例如：https://media.tenor.com/...）。 右鍵單擊 GIF，然後按一下“複製圖像地址”。",
                required: "此欄位是必需的。",
                tooLong: "長度不得超過 {{maxLength}} 個字元。",
                mustBeNumber: "它必須是一個數字。",
                mustBePositive: "它必須是一個正數。",
                startTimeInvalid: "開始時間必須大於 0。",
                endTimeInvalid: "結束時間必須大於 0。"
            },
            option: {
                appId: {
                    label: "應用程式ID",
                    description: "應用程式 ID（必填）"
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
                    label: "硬粒小麥",
                    description: "狀態（第 2 行）"
                },
                stateURL: {
                    label: "狀態網址",
                    description: "可點選 URL 查看狀態"
                },
                partySize: {
                    label: "團體規模",
                    description: "目前群組大小（必須與最大群組大小結合使用）"
                },
                partyMax: {
                    label: "最大團體人數",
                    description: "最大組大小（必須與目前組大小一起使用）"
                },
                type: {
                    label: "事件類型",
                    description: "事件類型",
                    playing: "玩",
                    streaming: "廣播",
                    listening: "傾聽",
                    watching: "觀看",
                    competing: "賽車"
                },
                streamLink: {
                    label: "發布連結",
                    description: "連結至 Twitch.tv 或 Youtube.com（僅適用於廣播活動類型）"
                },
                timestampMode: {
                    label: "時間戳模式",
                    description: "時間戳記應該要顯示什麼",
                    none: "沒有任何",
                    sinceDiscordOpen: "自 Discord 開放以來",
                    sameAsCurrentTime: "與您目前時間相同（24小時後不會重置）",
                    custom: "特殊時期"
                },
                startTime: {
                    label: "開始時間（以毫秒為單位）",
                    description: "開始時間戳記（僅適用於自訂時間模式）"
                },
                endTime: {
                    label: "結束時間（以毫秒為單位）",
                    description: "結束時間戳記（僅適用於自訂時間模式）"
                },
                imageBig: {
                    label: "大視覺鑰匙",
                    description: "大視覺鍵（必須安裝在 Rich Presence 標籤中）"
                },
                imageBigTooltip: {
                    label: "大視覺線索",
                    description: "將滑鼠懸停在較大圖像上時出現的提示"
                },
                imageBigURL: {
                    label: "大圖片網址",
                    description: "大圖可點擊 URL"
                },
                imageSmall: {
                    label: "小型視覺開關",
                    description: "小視覺鍵（必須安裝在 Rich Presence 選項卡中）"
                },
                imageSmallTooltip: {
                    label: "視覺線索很少",
                    description: "將滑鼠懸停在縮圖上時出現的提示"
                },
                imageSmallURL: {
                    label: "縮圖 URL",
                    description: "小圖可點擊 URL"
                },
                buttonOneText: {
                    label: "布頓 1 梅特尼",
                    description: "按鈕 1 梅尼"
                },
                buttonOneURL: {
                    label: "按鈕 1 網址",
                    description: "按鈕1連接"
                },
                buttonTwoText: {
                    label: "布頓 2 梅特尼",
                    description: "按鈕 2 梅尼"
                },
                buttonTwoURL: {
                    label: "按鈕 2 網址",
                    description: "按鈕2連接"
                }
            }
        },
        customSounds: {
            name: "自訂聲音",
            description: "自訂 Discord 的聲音。",
            search: "搜尋聲音",
            placeholder: "按姓名或 ID 搜尋",
            import: "伊切·阿克塔爾",
            export: "出口",
            reset: "全部重置",
            debug: "偵錯",
            toast: {
                error: "載入自訂音訊檔案時出錯",
                exported: "已匯出 {{count}} 個設定（不包括音訊檔案）",
                imported: "設定導入成功",
                importError: "導入設定時發生錯誤。 檢查控制台以了解詳細資訊。",
                reset: "所有聲音已成功重置！",
                overrideDescription: "{{soundName}} 聲音已更改",
                previewSound: "播放聲音時發生錯誤。",
                playing: "無法播放自訂聲音。 該檔案可能已損壞。",
                invalidFile: "沒有用於預覽的自訂音訊文件",
                uploaded: "檔案上傳成功：{{fileName}}",
                uploadedError: "上傳檔案時發生錯誤：{{error}}",
                invalidExtension: "文件類型無效。 請上傳音訊檔案。",
                uploading: "正在加載檔案...",
                deleted: "文件已成功刪除",
                deleteError: "刪除檔案時發生錯誤。",
                loadingError: "載入自訂音訊檔案時出錯"
            },
            button: {
                preview: "預覽",
                stop: "流動",
                volume: "賽斯",
                soundSource: "音源",
                customFile: "特殊檔案",
                uploadNew: "新上傳",
                delete: "刪除選定的文件"
            },
            option: {
                default: "預設",
                custom: "特別的",
                select: "選擇一個檔案..."
            },
            type: {
                activityEnd: "活動結束",
                activityLaunch: "活動開始",
                activityUserJoin: "用戶參與活動",
                activityUserLeft: "用戶離開活動",
                asmrMessage: "ASMR 訊息",
                bitMessage: "位元訊息",
                bopMessage: "波普消息",
                callCalling: "搜索正在進行中",
                callRinging: "來電鈴聲",
                clipError: "剪輯錯誤",
                clipSave: "剪輯已儲存",
                ddrDown: "DDR下降",
                ddrLeft: "DDR溶膠",
                ddrRight: "DDR右",
                ddrUp: "DDR 上行",
                deafen: "震耳欲聾",
                discodo: "光碟",
                disconnect: "已斷開連接",
                duckyMessage: "鴨子留言",
                hangStatusSelect: "暫停狀態選擇",
                highfiveClap: "高五掌聲",
                highfiveWhistle: "高五口哨",
                humanMan: "人類的人",
                lofiMessage: "低傳真訊息",
                mention1: "提及 1 (@role)",
                mention2: "提及 2（@everyone）",
                mention3: "提及 3（@here）",
                message1: "訊息 1（一般）",
                message2: "訊息2（伺服器回應）",
                message3: "訊息 3（DM 和群組 DM）",
                mute: "沉默的",
                overlayUnlock: "圖層解鎖",
                poggermodeAchievement: "波格模式成就",
                poggermodeApplause: "Pogger模式掌聲",
                poggermodeEnabled: "Pogger 模式已啟用",
                poggermodeMessage: "Pogger模式訊息",
                pttStart: "開始PTT",
                pttStop: "一鍵通停止",
                reconnect: "重新連接",
                robotMan: "機器人亞當",
                stageWaiting: "等待場景",
                streamEnded: "廣播結束",
                streamStarted: "廣播開始",
                streamUserJoined: "用戶加入廣播",
                streamUserLeft: "用戶離開廣播",
                success: "成功的",
                undeafen: "消除震耳欲聾的聲音",
                unmute: "消除沉默",
                userJoin: "用戶已加入",
                userLeave: "用戶離開",
                userMoved: "使用者已移動",
                vibingWumpus: "烏普斯卡住了"
            }
        },
        customTimestamps: {
            name: "自訂時間戳",
            description: "訊息和工具提示上的自訂時間戳",
            demo: {
                cozy: "點我切換為休閒格式",
                compact: "點我切換到緊湊格式",
                lastWeek: "此訊息是上週發送的",
                hover: "您可以將滑鼠懸停在時間戳上來查看工具提示格式",
                edit: "編輯下面的格式，在此處查看它們的即時更新"
            },
            modal: {
                title: "使用方法：",
                moment: "Moment.js 格式化文檔",
                hint: "此外，您可以在條目中使用以下內容：",
                calendar: "啟用動態日期格式，例如",
                today: "今天",
                yesterday: "昨天",
                relative: "給你這樣的時間：",
                relativeTime: "4小時前",
                preview: "預覽",
                format: "日曆格式",
                howTo: "以下是在上面的時間戳記中使用時如何格式化 [calendar] 值。"
            },
            option: {
                formats: {
                    label: "格式",
                    description: "自訂時間戳格式",
                },
                cozyFormat: {
                    label: "救濟模式",
                    description: "訊息中用於輕鬆模式的時間格式"
                },
                compactFormat: {
                    label: "緊湊型模組",
                    description: "在緊湊模式下以及將滑鼠懸停在訊息上時使用的時間格式"
                },
                tooltipFormat: {
                    label: "工具提示",
                    description: "在工具提示中使用的時間格式"
                },
                ariaLabelFormat: {
                    label: "詠嘆調標籤",
                    description: "在 Aria 標籤中使用的時間格式"
                },
                sameDayFormat: {
                    label: "同一天",
                    description: "[日曆] 今天的格式",
                    default: "[Bugün] HH:mm:ss"
                },
                lastDayFormat: {
                    label: "昨天",
                    description: "[日曆] 昨天的格式",
                    default: "[細] HH:mm:ss"
                },
                lastWeekFormat: {
                    label: "上個星期",
                    description: "[日曆] 上週的格式"
                },
                sameElseFormat: {
                    label: "較老的",
                    description: "[日曆] 舊日期的格式"
                }
            }
        },
        customUserColors: {
            name: "自訂使用者顏色",
            description: "允許您隨時隨地為任何用戶添加自訂顏色！ 強烈建議與 TypingTweaks 和 roleColorEverywhere 一起使用",
            option: {
                dmList: {
                    label: "DM列表",
                    description: "指派特殊顏色的使用者名稱將在 DM 清單中顯示顏色"
                },
                colorInServers: {
                    label: "伺服器上的顏色",
                    description: "伺服器上的名稱顏色也應該更改嗎？"
                }
            },
            context: {
                setColor: "調整顏色"
            },
            modal: {
                custom: "客製化顏色",
                pick: "選擇一種顏色",
                delete: "刪除記錄",
                save: "節省"
            }
        },
        dearrow: {
            name: "迪阿羅",
            description: "讓 YouTube 嵌入的標題和縮圖不那麼聳人聽聞，由 Dearrow 提供支持",
            option: {
                hideButton: {
                    label: "隱藏按鈕",
                    description: "在 YouTube 嵌入中隱藏 Dearrow 按鈕"
                },
                replaceElements: {
                    label: "更改項目",
                    description: "選擇要替換的嵌入元素",
                    everything: "一切（標題和縮圖）",
                    title: "標題",
                    thumbnail: "縮圖"
                },
                dearrowByDefault: {
                    label: "預設為Dearrow",
                    description: "自動刪除視頻"
                }
            },
            tooltip: {
                dearrowed: "Dearrow 已應用於此嵌入，點擊恢復",
                dearrow: "點擊應用親愛的箭頭"
            }
        },
        declutter: {
            name: "整理",
            description: "透過刪除非必要的 UI 元素（例如個人資料效果、商店標籤、能力提升等）來清理 Discord。",
            option: {
                userProfileHeader: {
                    label: "使用者資料"
                },
                removeNameplate: {
                    label: "移除銘牌",
                    description: "去除銘牌。"
                },
                removeProfileEffect: {
                    label: "刪除輪廓效果",
                    description: "刪除開啟設定檔時出現的動畫效果。"
                },
                removeClanTag: {
                    label: "刪除氏族標籤",
                    description: "刪除氏族標籤。"
                },
                alwaysShowUsername: {
                    label: "始終顯示使用者名稱",
                    description: "它始終顯示用戶名而不是狀態。"
                },
                accessibilityNotice: {
                    label: "無障礙警告",
                    description: "Discord 的輔助使用設定中已經有內建的使用者名稱樣式選項。"
                },
                friendsListHeader: {
                    label: "以上朋友/DM 列表"
                },
                removeShopAboveDM: {
                    label: "刪除 DM 清單上方的商店",
                    description: "刪除 DM 清單上方的商店按鈕。"
                },
                removeQuestsAboveDM: {
                    label: "從 DM 清單中刪除任務",
                    description: "刪除 DM 清單上方的任務按鈕。"
                },
                miscHeader: {
                    label: "各種各樣的"
                },
                removeServerBoostInfo: {
                    label: "刪除伺服器提升訊息",
                    description: "刪除頻道清單頂部的伺服器加固資訊。"
                },
                removeBillingSettings: {
                    label: "刪除付款設定",
                    description: "刪除付款（發票）設定。"
                },
                removeGiftButton: {
                    label: "刪除禮物按鈕",
                    description: "刪除發送禮物按鈕。"
                },
                removeUnavailableEmojiPicker: {
                    label: "刪除不可用的表情符號選擇器",
                    description: "刪除表情符號選擇器中無法存取的類別。"
                },
                removeAudioMenus: {
                    label: "刪除聲音選單",
                    description: "刪除靜音和聾按鈕旁邊的箭頭選單。"
                },
                removeButtonTooltips: {
                    label: "刪除按鈕提示",
                    description: "它刪除了按鈕上出現的工具提示。"
                }
            }
        },
        decodeBase64: {
            name: "解碼Base64",
            description: "解碼任意訊息的 Base64 內容並複製解碼的內容。",
            right: {
                decode: "複製求解（左鍵）/Base64 求解（右鍵）",
                copy: "Base64 解碼（左鍵點擊）/複製解碼（右鍵）"
            },
            option: {
                clickMethod: {
                    label: "點擊方法",
                    description: "更改按鈕的行為以解碼任何訊息的 Base64 內容。",
                    left: "左鍵點選以解碼 Base64 內容。",
                    right: "右鍵點選以解碼 Base64 內容。"
                }
            },
            modal: {
                title: "解碼的 Base64 內容",
                content: "溶解含量",
                copy: "複製已解決的內容 {{index}}",
                copied: "已解決的內容已複製到剪貼簿！"
            }
        },
        decor: {
            name: "裝潢風格",
            description: "建立並使用您自己的自訂頭像裝飾或從預設中選擇您最喜歡的。",
            presetPart: "{{name}} 預設的一部分",
            createdBy: "由{{author}}創建",
            copy: "複製預設 ID",
            file: "文件",
            your: {
                title: "裝飾",
                subtitle: "您可以透過右鍵單擊刪除自己的裝飾。"
            },
            option: {
                changeDecoration: {
                    label: "更換飾品",
                    description: "若要變更您的頭像裝飾，請啟用裝飾並重新啟動您的用戶端。",
                    also: "您也可以從 {{profiles}} 頁面存取裝飾裝飾。",
                    profiles: "型材"
                },
                baseUrl: {
                    label: "基本網址",
                    description: "Dekor API URL 的"
                },
                agreedToGuidelines: {
                    label: "我接受規則",
                    description: "接受規則"
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
                    body: "您確定要刪除 {{decoration}} 裝飾嗎？",
                    confirm: "西爾",
                    cancel: "取消"
                },
                logout: {
                    title: "登出",
                    body: "您確定要退出聖象嗎？",
                    confirm: "登出",
                    cancel: "取消"
                }
            },
            button: {
                change: "更換飾品",
                remove: "移除裝飾",
                apply: "申請",
                cancel: "取消",
                browse: "瀏覽",
                submit: "提交審核",
                continue: "德瓦姆·埃特",
                back: "回去"
            },
            tooltip: {
                pendingReview: "您已有一件裝飾品正在接受審核",
                pending: "待審核"
            },
            join: {
                tooltip: "加入 Decor 的 Discord 伺服器來查看您的裝飾並在新預設發佈時接收通知",
                button: "不和諧伺服器"
            },
            create: {
                title: "創建裝飾品",
                notViolate: "提交前請確保您的修飾不違反{{guidelines}}。",
                guidelines: "規則",
                file: "檔案必須是 APNG 或 PNG。",
                fileHolder: "選擇一個文件",
                name: "提及該裝飾品時將使用該名稱。",
                nameHolder: "伴侶立方體",
                nameTitle: "廣告"
            },
            help: {
                update: "加入 {{server}} 並允許直接訊息接收有關您裝飾的評論的更新。",
                server: "裝飾不和諧"
            },
            guidelines: {
                hold: "等待",
                suspended: "提交裝飾品即表示您同意{{guidelines}}。 不閱讀這些規則可能會導致您將來創建更多裝飾品的權利被暫停。",
                guidelines: "規則"
            }
        },
        demonstration: {
            name: "示範",
            description: "用於拍攝主題螢幕截圖的外掛程式 - 識別圖像和文字的審查器。",
            toolbox: {
                toggle: "審查的"
            },
            keycode: "查看 {{keycode}} 來更改您的熱鍵！",
            this: "這輛車的",
            okay: "好的！",
            option: {
                keyBind: {
                    label: "熱鍵",
                    description: "按下時將開啟和關閉主題的按鈕"
                },
                soundVolume: {
                    label: "聲級",
                    description: "開/關音量（0 = 關）"
                },
                showConfirmationModal: {
                    label: "顯示確認視窗",
                    description: "顯示視窗提醒快捷方式"
                }
            },
            switch: {
                note: "您可以稍後重新啟用此設置",
                disable: "禁用確認視窗？"
            },
            shortcut: "這將審查所有文本！ 請記住禁用此功能的快捷方式："
        },
        devCompanion: {
            name: "開發夥伴",
            description: "開發助手插件。 如果您發現某些內容無法正常工作或表現奇怪（很可能是錯誤），請將其報告給 MutanPlex，無論是標記還是 dm 它，謝謝！",
            reconnect: "重新連接",
            option: {
                notifyOnAutoConnect: {
                    label: "自動連線時通知",
                    description: "當 Dev Companion 自動連線時顯示通知？"
                },
                usePatchedModule: {
                    label: "使用補丁模組",
                    description: "對於刪除請求，請使用現有的已修補模組（如果已修補）而不是原始模組進行回應。"
                },
                reloadAfterToggle: {
                    label: "重新安裝後",
                    description: "收到禁用/啟用插件命令後重新安裝。"
                }
            },
            toast: {
                title: "開發夥伴已連接",
                connected: "連線到 WebSocket",
                disconnected: "開發夥伴已斷開連接",
                error: "開發夥伴錯誤",
                reload: "需要重新安裝",
                failed: "無法初始化相依性：{{failures}}",
                close: "四分之一",
                stopping: "停止 {{plugin}} 插件時出錯",
                starting: "初始化 {{plugin}} 插件時出錯",
                noMessage: "無錯誤訊息",
                noReason: "未提供原因"
            }
        },
        disableCallIdle: {
            name: "停用呼叫空閒",
            description: "禁止在 3 分鐘後自動踢出 DM 語音通話並移至 AFK 語音頻道。"
        },
        disableCameras: {
            name: "停用相機",
            description: "預設情況下會停用通話中的鏡頭"
        },
        discordDevBanner: {
            name: "Discord開發橫幅",
            description: "啟用顯示 Build-ID 資訊的 Discord 開發者橫幅。",
            about: "Discord 開發者橫幅格式。 您可以使用以下變數：",
            preview: "預覽：",
            empty: "格式不能為空。",
            variables: {
                discord: {
                    title: "不和諧變數",
                    icon: "不和諧圖標",
                    banner: "開發人員橫幅圖標",
                    channel: "Discord 建置通路（例如穩定）",
                    build: "Discord 內部版本號（例如 123456）",
                    hash: "Discord 建構哈希（例如 123456）"
                },
                plexcord: {
                    title: "Plexcord 變數",
                    icon: "Plexcord 圖示",
                    name: "複合線名稱",
                    version: "Plexcord 版本（例如 1.0.0）",
                    hash: "Plexcord 結構哈希（例如 123456）",
                    platform: "Plexcord 運作平台（例如 Dev Build）"
                },
                plextron: {
                    title: "Plextron 自訂變數",
                    hashShort: "Plextron 短結構哈希（例如 123456789）",
                    platformType: "Plextron 運作的平台類型（例如 Dev Build）"
                },
                client: {
                    title: "客戶端變數",
                    icon: "桌面圖示",
                    name: "客戶名稱（例如 Discord Canary）",
                    version: "客戶端版本（例如1.0.0）",
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
            }
        },
        dontFilterMe: {
            name: "不要過濾我",
            description: "如果您的訊息包含自動審核就緒清單中的術語，則會向您發出警告",
            alert: {
                title: "等一下！",
                content: "您的訊息包含自動審核就緒清單中的術語。 （術語“{{trigger}}”）",
                content2: "您的訊息很可能會被伺服器管理員封鎖並處理。",
                confirm: "無論如何提交",
                cancel: "取消"
            }
        },
        dontRoundMyTimestamps: {
            name: "不要繞我的時間戳",
            description: "始終向下舍入相對時間戳，因此 7.6y 變為 7y 而不是 8y"
        },
        dragFavoriteEmotes: {
            name: "拖曳最喜歡的表情",
            description: "新增拖放功能來更改最喜歡的表情符號的順序"
        },
        dragify: {
            name: "拖曳",
            description: "將使用者、頻道或簡報者拖曳到聊天中以新增提及或邀請。",
            option: {
                userOutput: {
                    label: "使用者輸出",
                    description: "用戶遺失輸出。",
                    mention: "別提",
                    id: "使用者身分（ID）"
                },
                channelOutput: {
                    label: "通道輸出",
                    description: "通道釋放輸出。",
                    mention: "#頻道提及",
                    link: "頻道連接",
                },
                inviteExpireAfter: {
                    label: "邀約期限",
                    description: "邀請連結的有效期限。",
                    never: "絕不",
                    thirtyMinutes: "30分鐘",
                    oneHour: "1 時刻",
                    sixHours: "6 時刻",
                    twelveHours: "12 時刻",
                    oneDay: "1 天",
                    sevenDays: "7天"
                },
                inviteMaxUses: {
                    label: "最大使用次數",
                    description: "邀請的最大使用限制。",
                    noLimit: "無限制",
                    one: "1 用途",
                    five: "5 使用方法",
                    ten: "10 用法",
                    twentyFive: "25 用法",
                    fifty: "50 種用途",
                    hundred: "100 次使用"
                },
                inviteTemporaryMembership: {
                    label: "提供臨時會員資格",
                    description: "它向受邀者授予臨時會員資格。",
                },
                reuseExistingInvites: {
                    label: "重複使用現有邀請",
                    description: "它使用現有邀請而不是創建新邀請。"
                },
                allowChatBodyDrop: {
                    label: "允許拖放到聊天正文",
                    description: "允許將文字直接拖曳到聊天區域中進行新增。"
                }
            },
            toast: {
                failed: {
                    drop: "Dragify 無法執行該操作。",
                },
                invite: {
                    created: "邀請已建立。",
                    unable: "無法創建邀請。",
                    noChannel: "沒有可用於建立邀請的管道。",
                }
            },
            ghost: {
                user: "使用者",
                server: "主持人",
                dm: "直接訊息",
                badge: {
                    channel: "頻道",
                    thread: "標題",
                    voice: "塞斯",
                    forum: "論壇",
                    media: "媒體",
                    announcement: "公告",
                    dm: "DM",
                    user: "使用者",
                    server: "主持人"
                }
            }
        },
        elementHighlighter: {
            name: "元素螢光筆",
            description: "輕鬆突出顯示和檢查項目。",
            modal: {
                recording: "記錄...",
                reset: "重置"
            },
            option: {
                keybind: {
                    label: "按鍵分配",
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
                    description: "顯示計算出的字體系列和大小"
                },
                showPadding: {
                    label: "顯示填充",
                    description: "顯示元素的內部間距值"
                },
                showMargin: {
                    label: "顯示外邊距",
                    description: "顯示元素的外部空間值"
                },
                showBorderRadius: {
                    label: "顯示邊緣圓度",
                    description: "顯示元素的邊框半徑值"
                },
                showPosition: {
                    label: "顯示地點",
                    description: "顯示元素的 CSS 位置類型和 z-index 值"
                },
                showDisplay: {
                    label: "顯示視圖",
                    description: "顯示元素的視圖類型及其 flex 或 grid 屬性"
                }
            },
            toast: {
                copied: {
                    color: "顏色已複製到剪貼簿！",
                }
            }
        },
        exitSounds: {
            name: "退出聲音",
            description: "當您離開音訊通道時，音訊面板會播放聲音。",
            button: "設定為全域輸出聲音",
            toast: {
                failedToPlay: "天哪，不！ 出了點問題。"
            },
            option: {
                soundGuildId: {
                    label: "語音伺服器身分 (ID)",
                    description: "選擇音訊所在的伺服器。",
                    placeholder: "選擇伺服器..."
                },
                soundId: {
                    label: "語音辨識 (ID)",
                    description: "輸入您要播放的聲音的 ID。",
                    placeholder: "輸入語音ID..."
                }
            }
        },
        experiments: {
            name: "實驗",
            description: "提供對 Discord 中的實驗和其他開發人員專用功能的存取！",
            modal: {
                about: {
                    title: "更多資訊",
                    body: "您可以使用 {{key}} 開啟 Discord 的開發者工具"
                },
                warning: {
                    title: "注意力！ ！",
                    body: "實驗是未發布的 Discord 功能。 它們可能不起作用，甚至可能破壞您的客戶端或導致您的帳戶被停用。",
                    notReponsible: "僅當您知道自己在做什麼時才使用實驗。 Plexcord 對啟用實驗可能造成的任何損壞不承擔任何責任。",
                    useAtOwnRisk: "如果您不知道實驗的作用，請忽略它。 別問我們他們是做什麼的，我們可能也不知道。",
                    serverSideFeatures: "不可以，您不能使用伺服器端功能，例如選取「傳送至客戶端」方塊。"
                }
            },
            option: {
                toolbarDevMenu: {
                    label: "工具列開發者選單",
                    description: "將說明 (?) 工具列按鈕（聊天右上角）替換為 Discord 的開發者選單"
                }
            }
        },
        exportMessages: {
            name: "匯出訊息",
            description: "允許您將訊息匯出到文件 - 單一訊息、使用者的所有訊息或頻道的所有訊息",
            option: {
                maxMessages: {
                    label: "最大訊息數",
                    description: "要傳輸的最大訊息數（0 = 無限制）"
                },
                includeAttachments: {
                    label: "包括附件",
                    description: "在傳輸中包含附件訊息"
                },
                includeEmbeds: {
                    label: "恩貝德勒里·達希爾·埃特",
                    description: "在傳輸中包含嵌入訊息"
                },
                includeReactions: {
                    label: "包括反應",
                    description: "在傳輸中包含反應訊息"
                },
                includeComponents: {
                    label: "包括組件",
                    description: "在導入中包含元件資訊"
                }
            },
            message: {
                invalid: "無效訊息 - 無作者",
                unknownUser: "未知用戶",
                botEmbed: "機器人嵌入訊息",
                attachments: "附件",
                unknown: "未知",
                noUrl: "沒有網址",
                embeds: "恩貝德勒",
                title: "標題",
                description: "解釋",
                url: "網址",
                footer: "阿爾特比爾吉",
                author: "作家",
                fields: "領域",
                components: "成分",
                component: "成分",
                interactiveElement: "互動元素",
                reactions: "反應",
                errorFormatting: "訊息格式錯誤",
                unknownError: "未知錯誤",
                header: "{{titlePrefix}} {{displayName}}、{{channelName}} kanalında",
                from: "留言 -",
                direct: "直接訊息",
                exported: "出口日期",
                total: "訊息總數"
            },
            toast: {
                export: {
                    title: "匯出訊息",
                    body: "訊息匯出失敗"
                },
                noMessages: {
                    title: "匯出訊息",
                    notFoundUser: "沒有找到該用戶的消息",
                    notFoundChannel: "在此頻道中找不到訊息"
                },
                failed: {
                    title: "匯出訊息",
                    body: "匯出訊息時發生錯誤"
                },
                userNotFound: {
                    title: "匯出訊息",
                    body: "未找到用戶"
                },
                complete: {
                    title: "匯出完成",
                    saved: "文件已儲存",
                    downloaded: "文件已下載",
                    messages: "資訊"
                }
            },
            context: {
                exportMessage: "匯出此訊息",
                exportAll: "匯出 {{user}} 的所有訊息",
                user: "使用者",
                exportAllChannel: "匯出頻道所有訊息"
            }
        },
        expressionCloner: {
            name: "表達克隆",
            description: "允許您將表情符號和貼紙克隆到您自己的伺服器（右鍵單擊）",
            modal: {
                title: "專有名詞",
                invalidName: "名稱必須介於 2 到 32 個字元之間，並且僅包含字母數字字符"
            },
            toast: {
                success: "{{name}}已成功複製到{{guild}}伺服器！",
                yourServer: "你的伺服器",
                failed: "克隆失敗：",
                console: "出了點問題（檢查控制台！）"
            },
            context: {
                clone: "{{type}} 克隆",
                cloneName: "{{數據}}克隆"
            }
        },
        f8break: {
            name: "F8中斷",
            description: "當 DevTools（+ 斷點）開啟時，按 F8 會暫停客戶端。"
        },
        fakeNitro: {
            name: "假硝基",
            description: "讓您發送假表情符號/貼紙、使用硝基主題並以硝基品質進行串流傳輸",
            option: {
                enableEmojiBypass: {
                    label: "啟用表情符號跳過",
                    description: "允許發送假表情符號（也繞過缺乏使用自訂表情符號的權限）"
                },
                emojiSize: {
                    label: "表情符號大小",
                    description: "發送表情符號時使用的尺寸"
                },
                transformEmojis: {
                    label: "變換表情符號",
                    description: "確定假表情符號是否會轉換為真實表情符號"
                },
                enableStickerBypass: {
                    label: "啟用貼紙跳過",
                    description: "允許發送假貼紙（也繞過缺乏使用貼紙的權限）"
                },
                stickerSize: {
                    label: "貼紙尺寸",
                    description: "發送貼紙時使用的尺寸"
                },
                transformStickers: {
                    label: "轉換貼紙",
                    description: "確定假貼紙是否會轉換為真實貼紙"
                },
                transformCompoundSentence: {
                    label: "轉換複合句",
                    description: "決定是否轉換複合句（包含比假表情符號或貼紙連結更多內容的句子）中的假表情符號和貼紙"
                },
                enableStreamQualityBypass: {
                    label: "啟用廣播品質跳過",
                    description: "允許以硝基質量進行串流傳輸"
                },
                useStickerHyperLinks: {
                    label: "使用貼紙橋",
                    description: "確定發送假貼紙時是否使用超鏈接"
                },
                useEmojiHyperLinks: {
                    label: "使用表情符號橋",
                    description: "確定發送假表情符號時是否使用超連結"
                },
                hyperLinkText: {
                    label: "超文本",
                    description: "超連結中使用的文字。 {{NAME}} 將會被替換為表情符號/貼圖名稱。"
                },
                disableEmbedPermissionCheck: {
                    label: "禁用嵌入權限檢查",
                    description: "確定發送虛假表情符號和貼紙時是否停用嵌入權限檢查"
                }
            },
            modal: {
                sticker: "這是一個 FakeNitro 貼紙，它看起來就像一個真正的貼紙，只適合你。 對於那些不使用該插件的人來說，它顯示為連結。",
                emoji: "這是一個 FakeNitro 表情符號，它看起來就像一個真正的表情符號，只適合你。 對於那些不使用該插件的人來說，它顯示為連結。"
            },
            alert: {
                notice: {
                    title: "注意力！",
                    body: "您正在嘗試發送/編輯包含 FakeNitro 表情符號或貼圖的訊息，但您無權在此頻道中嵌入連結。 您確定要發送此訊息嗎？ 您的 FakeNitro 項目將僅顯示為連結。",
                    footer: "您可以在 FakeNitro 設定中停用此警告",
                    confirm: "無論如何提交",
                    cancel: "取消",
                    secondaryConfirm: "不要再顯示"
                },
                apngSticker: {
                    title: "注意力！",
                    body: "您無法傳送此訊息，因為它包含動畫 FakeNitro 貼紙，而且您無權在此頻道中新增檔案。 您必須移除貼紙才能繼續。"
                }
            }
        },
        fakeProfileThemes: {
            name: "假個人資料主題",
            description: "提供個人資料主題；由於不可見的 3y3 編碼，它為 bion 添加了隱藏的顏色。",
            button: {
                copy: "3y3 複製"
            },
            modal: {
                usage: "使用",
                preview: "預覽",
                intro: "啟動此外掛程式後，您將在使用相容外掛程式的其他人的個人資料上看到自訂顏色。",
                setColor: "要設定您自己的顏色：",
                step1: "• 使用下方的顏色選擇器選擇您的顏色",
                step2: "• 點選{{複製}}按鈕",
                step3: "• 將不可見文字貼到「關於」部分的任意位置",
                pickers: "顏色選擇器",
                primary: "基本的",
                accent: "強調"
            },
            option: {
                nitroFirst: {
                    label: "硝基第一",
                    description: "預設顏色來源（如果兩者都可用）",
                    nitro: "硝基色",
                    fake: "假顏色"
                }
            }
        },
        fakeProfileThemesAndEffects: {
            name: "假個人資料主題和效果",
            description: "允許您新增個人資料主題和個人資料效果；由於隱形 3y3 編碼，隱藏的顏色和效果被添加到生物中。",
            option: {
                prioritizeNitro: {
                    label: "優先考慮硝基",
                    description: "優先考慮的資源",
                    nitro: "硝基",
                    aboutMe: "關於我"
                },
                hideBuilder: {
                    label: "隱藏創作者",
                    description: "在使用者設定檔和伺服器設定檔設定頁面中隱藏 FPTE Creator"
                }
            },
            modal: {
                primary: "基本的",
                accent: "強調",
                effect: "影響",
                usage: {
                    title: "使用",
                    intro: "啟動此外掛程式後，您將在使用此外掛程式的其他人的個人資料上看到自訂主題顏色和效果。",
                    setColor: "要設定您自己的顏色和效果：",
                    step1: "前往個人資料設定",
                    step2: "使用 FPTE Creator 選擇設定檔主題顏色和效果",
                    step3: "點選{{複製}}按鈕",
                    step4: "將不可見文字貼到個人簡介中您想要的任意位置"
                }
            },
            toast: {
                copied: "FPTE 已複製到剪貼簿！",
                empty: "FPTE 生成器為空；沒有什麼可複製的！"
            },
            button: {
                copyFPTE: "FPTE 副本",
                reset: "重置",
                preview: "FPTE 創作者預覽",
                buildBackwards: "建立向後相容的 FPTE",
                moreCharacters: "將使用更多字符"
            }
        },
        fastDeleteChannels: {
            name: "快速刪除頻道",
            description: "新增垃圾桶圖示以刪除頻道",
            option: {
                keyBind: {
                    label: "熱鍵",
                    description: "用於打開和關閉垃圾桶的鑰匙。"
                },
                reqCtrl: {
                    label: "需要 Ctrl 鍵",
                    description: "需要按住 Ctrl 鍵才能開啟垃圾桶。"
                },
                reqShift: {
                    label: "需要 Shift 鍵",
                    description: "打開垃圾桶需要按住 Shift 鍵。"
                },
                reqAlt: {
                    label: "需要 Alt 鍵",
                    description: "打開垃圾桶需要按住 Alt 鍵。"
                }
            }
        },
        favoriteEmojiFirst: {
            name: "最喜歡的表情符號第一",
            description: "它將您最喜歡的表情符號放在表情符號自動完成清單的頂部，並且還提供表情符號暱稱。",
            option: {
                aliases: {
                    label: "暱稱",
                    description: "管理您的表情符號暱稱。"
                },
                clearAll: {
                    label: "全部清除",
                    description: "刪除所有暱稱。"
                }
            },
            modal: {
                clear: {
                    title: "刪除所有別名",
                    description: "這將刪除您儲存的所有表情符號暱稱。",
                    confirm: "刪除所有暱稱"
                },
                set: {
                    title: "設定暱稱",
                    description: "為 {{emoji}} 設定暱稱",
                    placeholder: "暱稱，例如'快樂的'",
                    save: "節省",
                    error: "暱稱重複"
                }
            },
            toast: {
                set: "為 {{emoji}} 設定的暱稱",
                clearAll: "所有表情符號暱稱已刪除",
                failedDeleted: "刪除別名失敗",
                removed: "{{alias}} 的別名已刪除",
                failedRemove: "別名刪除失敗",
                duplicate: "暱稱重複",
                failedSave: "暱稱無法註冊"
            },
            button: {
                edit: "編輯暱稱",
                set: "設定暱稱"
            }
        },
        favoriteGifSearch: {
            name: "收藏 Gif 搜尋",
            description: "為喜愛的 GIF 新增搜尋列。",
            placeholder: "搜尋最喜歡的 GIF",
            option: {
                searchOption: {
                    label: "搜尋選項",
                    description: "您要搜尋 URL 的哪一部分",
                    url: "所有網址",
                    path: "僅路徑 (/somegif.gif)",
                    hostandpath: "主機和路徑 (tenor.com somegif.gif)"
                }
            }
        },
        favouriteAnything: {
            name: "最喜歡的任何東西",
            description: "收藏任何圖像"
        },
        fileDownloadButton: {
            name: "文件下載按鈕",
            description: "在檔案右上角新增下載按鈕"
        },
        findReply: {
            name: "尋找回复",
            description: "跳到頻道中最舊的訊息回覆（以便更輕鬆地追蹤過去的對話）。",
            context: {
                jump: "前往回答"
            },
            toast: {
                navigate: "使用底部面板瀏覽答案。",
                container: "找不到容器元素。",
                couldntFind: "未找到回覆訊息。"
            },
            option: {
                includePings: {
                    label: "包括提及",
                    description: "它還會搜尋直接發送給作者的訊息。"
                },
                includeAuthor: {
                    label: "包括作者",
                    description: "不僅搜尋特定貼文的回复，也搜尋一般作者的回复"
                },
                hideButtonIfNoReply: {
                    label: "如果沒有回應則隱藏按鈕",
                    description: "如果訊息沒有回應則隱藏按鈕"
                }
            }
        },
        fixCodeblockGap: {
            name: "修復程式碼區塊間隙",
            description: "刪除程式碼區塊及其下面的文字之間的空格"
        },
        fixFileExtensions: {
            name: "修復檔案副檔名",
            description: "如果可能，請透過將檔案副檔名重新命名為相容的支援格式來修復檔案副檔名"
        },
        fixImagesQuality: {
            name: "修復影像品質",
            description: "透過強制使用原始來源來提高影像質量",
            option: {
                originalImagesInChat: {
                    label: "在聊天中顯示原始影像",
                    description: "還在聊天中顯示原始圖像。 警告：閱讀上面的警告"
                }
            },
            modal: {
                about: {
                    title: "預設行為如下：",
                    body: "&mdash;優化但全解析度的圖像將加載到聊天中。",
                    body2: "&mdash;在圖像視窗（圖像模式）中，將載入原始圖像。",
                    body3: "您也可以在聊天中啟用原始影像，但請注意以下注意事項：",
                    warning: "&mdash;聊天中的動畫圖像（GIF、WebP 等）將始終是動畫的，即使應用程式具有焦點也是如此。",
                    warning2: "&mdash;它可能會導致效能問題。"
                }
            }
        },
        fixSpotifyEmbeds: {
            name: "修復Spotify嵌入",
            description: "修正了 Spotify 嵌入聲音太大的問題，讓您可以自訂音量",
            option: {
                volume: {
                    label: "聲級",
                    description: "調整 Spotify 嵌入的音量百分比。 超過 10% 就太高了"
                }
            }
        },
        fixYoutubeEmbeds: {
            name: "修復 YouTube 嵌入",
            description: "繞過 YouTube 影片在 Discord 中觀看的阻止（例如透過 UMG）"
        },
        followUser: {
            name: "關注用戶",
            description: "在使用者上下文選單中新增關注選項；確保您始終處於相同語音頻道",
            indicatorTooltip: "{{user}} 正在被關注（點擊手動觸發，右鍵取消關注）",
            unknownUser: "未知用戶",
            option: {
                executeOnFollow: {
                    label: "關注後申請",
                    description: "關注用戶時，請確保他們處於同一語音頻道"
                },
                onlyManualTrigger: {
                    label: "僅手動觸發",
                    description: "僅當單擊指示器時觸發"
                },
                followLeave: {
                    label: "當跟隨離開時",
                    description: "當關注的用戶離開時，也離開"
                },
                autoMoveBack: {
                    label: "自動後移",
                    description: "當您移動時自動切換回關注用戶的語音頻道"
                },
                followUserId: {
                    label: "關注的用戶 ID",
                    description: "已關注用戶 ID"
                },
                channelFull: {
                    label: "頻道已滿",
                    description: "如果頻道已滿，請嘗試將您移至該頻道"
                }
            },
            toast: {
                channelFull: "頻道已滿",
                newVc: "被關注的用戶切換到新的語音頻道",
                insufficientPermissions: "權限不足，無法進入語音頻道",
                sameVc: "你們已經在同一個頻道了",
                disconnect: "關注的用戶離開，已斷開連接",
                notFollowing: "被追蹤的用戶離開了，但您沒有取消關注",
                notVc: "被追蹤的用戶不在語音頻道上"
            },
            context: {
                follow: "跟隨",
                unfollow: "取消追蹤"
            }
        },
        fontLoader: {
            name: "字體載入器",
            description: "透過 Google Fonts 安裝任何字體",
            option: {
                selectedFont: {
                    label: "選定的字體",
                    description: "目前選擇的字體"
                },
                fontSearch: {
                    label: "字體搜尋",
                    description: "透過 Google Fonts 搜尋並選擇字體"
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
                    title: "谷歌字體'ta Ara",
                    description: "選擇要套用的字體",
                    placeholder: "搜尋字體...",
                    previewText: "穿著睡衣的病人很快就相信了油膩的司機",
                    authors: "作者：{{作者}}"
                }
            }
        },
        forceOwnerCrown: {
            name: "力主皇冠",
            description: "即使伺服器很大，它也會在使用者名稱旁邊強制顯示伺服器擁有者的皇冠。"
        },
        forwardAnywhere: {
            name: "隨處轉發",
            description: "如果轉發失敗，則將訊息作為普通訊息發送；它還允許傳輸 NSFW 內容。",
            option: {
                forwardPreface: {
                    label: "轉發前綴",
                    description: "應將哪條語句加入傳輸訊息的開頭？"
                }
            },
            context: {
                attachments: "附件",
                forwarded: "轉發自："
            }
        },
        freaky: {
            name: "怪異的",
            description: "/freaky 命令允許您以奇怪的字體發送訊息。",
            command: {
                freaky: "很奇怪。",
                message: "以奇怪的字體發送您的訊息"
            },
            option: {
                addFreakyEnding: {
                    label: "加入奇怪的結局",
                    description: "最後加入👅或❤️"
                }
            }
        },
        frequentQuickSwitcher: {
            name: "頻繁快速切換",
            description: "它將快速切換視窗中的結果替換並過濾為您最常使用的通道。"
        },
        friendCloud: {
            name: "友雲",
            description: "新增 /friendcloud 指令以視覺化與您互動最多的使用者。",
            command: {
                friendcloud: {
                    description: "可視化您的朋友雲",
                    count: "顯示的使用者數",
                    mustHigher: "該數字必須為 1 或更大！",
                    noAffinities: "未找到鄰近數據。 檢查您的[隱私權設定](<https://support.discord.com/hc/en-us/articles/21864805694999-Data-Used-to-Improve-Discord>)。",
                    noValid: "在代理中找不到有效用戶。 檢查您的[隱私權設定](<https://support.discord.com/hc/en-us/articles/21864805694999-Data-Used-to-Improve-Discord>)。",
                    genFailed: "無法建立映像：c"
                }
            }
        },
        friendCodes: {
            name: "好友程式碼",
            description: "產生好友程式碼，輕鬆新增好友",
            card: {
                expires: "過期時間：<t:{{expiration}}:R> • {{uses}}/{{maxUses}} 使用量",
                copy: "複製",
                copied: "複製了！",
                codes: "你的友誼密碼",
                count: "好友代碼 - {{invites}}",
                create: "產生友情碼",
                revoke: "取消所有好友代碼",
                loading: "載入中...",
                dontHave: "您沒有任何好友代碼。"
            }
        },
        friendInvites: {
            name: "好友邀請",
            description: "使用 Slash 指令建立和管理好友邀請連結（/建立好友邀請、/查看好友邀請、/撤銷好友邀請）。",
            command: {
                create: {
                    description: "產生好友邀請連結。",
                    message: "Discord.gg/{{code}}`\n· 過期時間：<t:{{expiration}}:R>\n· 最大使用量：{{uses}}"
                },
                view: {
                    description: "查看所有已建立的好友邀請連結。",
                    message: "_discord.gg/{{code}}_\n· 過期時間：<t:{{expiration}}:R> \n· 使用次數：{{uses}}/{{maxUses}}",
                    noInvites: "您沒有有效的好友邀請連結。"
                },
                revoke: {
                    description: "取消任何已建立的好友邀請連結。",
                    message: "所有好友邀請連結均已取消。"
                }
            }
        },
        friendshipRanks: {
            name: "友誼排名",
            description: "新增徽章，顯示您與使用者成為朋友的時間。",
            badge: {
                sprout: {
                    name: "發芽",
                    description: "你們的友誼才剛綻放。"
                },
                blooming: {
                    name: "盛開",
                    description: "你們的友誼正在增進！ （1個月）"
                },
                burning: {
                    name: "熾烈",
                    description: "你們的友誼已經達到頂峰了。 （3個月）"
                },
                fighter: {
                    name: "戰鬥機",
                    description: "你們的友誼很深厚。 （6個月）"
                },
                star: {
                    name: "星星",
                    description: "你們的友誼已經持續很久了。 (1年)"
                },
                royal: {
                    name: "結果",
                    description: "你們的友誼克服了一切挑戰──兩年了！"
                },
                besties: {
                    name: "最好的朋友",
                    description: "你如何實現這個目標？ （5年）"
                }
            }
        },
        friendsSince: {
            name: "自始至終的朋友",
            description: "當使用者與彈出視窗中的某人成為朋友時，它會顯示。",
            section: "約會日期"
        },
        friendTags: {
            name: "朋友標籤",
            description: "使用 & 開始搜尋可讓您在快速跳轉選單中按自訂標籤進行過濾。",
            modal: {
                name: "姓名",
                users: "用戶（用逗號分隔）",
                userlist: "使用者清單（點擊要刪除的使用者）",
                remove: "消除",
                add: "添加",
                tag: "票",
                removeFrom: "刪除自：",
                addTo: "添加："
            },
            option: {
                tagConfiguration: {
                    label: "標籤配置",
                    description: "標籤配置組件"
                }
            }
        },
        fullSearchContext: {
            name: "完整搜尋上下文",
            description: "它使訊息搜尋結果中的訊息上下文選單包含您期望的所有選項。"
        },
        fullUserInChatbox: {
            name: "聊天框中的完整用戶",
            description: "新增附加功能，例如左/右鍵點選聊天框中的使用者標籤。"
        },
        fullVCPFP: {
            name: "全VCPFP",
            description: "使頭像覆蓋整個語音聊天框。",
            option: {
                useServerProfileAvatars: {
                    label: "使用伺服器設定檔頭像",
                    description: "在語音聊天框中使用演示者個人資料頭像（如果有）"
                }
            }
        },
        gameActivityToggle: {
            name: "遊戲活動切換",
            description: "在使用者彈出視窗中新增一個開關以顯示或隱藏您的遊戲活動。",
            tooltip: "更改遊戲事件",
            gameActivity: {
                enabled: "遊戲活動已啟用",
                disabled: "遊戲事件已停用"
            },
            option: {
                oldIcon: {
                    label: "古代圖標",
                    description: "在重新設計 Discord 圖示之前使用舊的圖示樣式"
                },
                location: {
                    label: "女性",
                    description: "在哪裡顯示遊戲事件鍵",
                    panel: "靜音/麥克風關閉旁邊",
                    toolbox: "工具箱中的 Plexcord"
                }
            }
        },
        ghosted: {
            name: "幽靈般的",
            description: "您未回覆私訊的人旁邊會出現一個可愛的幽靈。",
            modal: {
                title: "幽靈用戶",
                no: "沒有幽靈用戶",
                unghost: "去除幽靈",
                unknown: "未知",
                unnamedGroup: "匿名團體",
                unknownUser: "未知用戶",
                clearAll: "全部清除",
                noGhost: "這裡沒有鬼！",
                clear: "清除"
            },
            option: {
                showIndicator: {
                    label: "顯示指標",
                    description: "在伺服器清單頂部顯示幽靈計數器。"
                },
                showDmIcons: {
                    label: "顯示 DM 圖示",
                    description: "在各個 DM 旁邊顯示幽靈圖示。"
                },
                ignoreGroupDms: {
                    label: "忽略群組私訊",
                    description: "將所有群組訊息排除在幽靈清單之外。"
                },
                exemptedChannels: {
                    label: "豁免管道",
                    description: "不會包含在 Ghostlist 中的以逗號分隔的頻道 ID (ID) 清單（右鍵點選 DM 頻道以複製 ID）。"
                },
                ignoreBots: {
                    label: "忽略機器人",
                    description: "忽略來自機器人的 DM。"
                }
            }
        },
        gifCollections: {
            name: "動圖集",
            description: "允許您建立 GIF 集合。",
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
                    name: "姓名",
                    gifs: "拍擊",
                    created: "建立日期",
                    updated: "最後更新",
                    close: "四分之一",
                    rename: "重新命名",
                    move: "移至收藏",
                    select: "選擇要移動的集合"
                },
                gif: {
                    information: "資訊",
                    added: "新增日期",
                    width: "寬度",
                    height: "高度",
                    close: "四分之一"
                }
            },
            option: {
                itemPrefix: {
                    label: "項目前綴",
                    description: "GIF 元素的前綴"
                },
                collectionPrefix: {
                    label: "集合前綴",
                    description: "集合的前綴"
                },
                onlyShowCollections: {
                    label: "僅顯示集合",
                    description: "僅顯示集合"
                },
                stopWarnings: {
                    label: "停止警報",
                    description: "停止刪除警告"
                },
                showCopyImageLink: {
                    label: "顯示複製圖像連結選項",
                    description: "在上下文選單中顯示 {{copyImageLink}}"
                },
                preventDuplicates: {
                    label: "防止舊病復發",
                    description: "防止同一個 GIF 多次加入集合中"
                },
                defaultEmptyCollectionImage: {
                    label: "預設空集合影像",
                    description: "當集合中沒有影像/GIF 時顯示影像/GIF"
                },
                collectionsSortType: {
                    label: "集合排序類型",
                    description: "集合的排序類型"
                },
                collectionsSortOrder: {
                    label: "集合排序順序",
                    description: "集合的排序順序"
                },
                collectionsSort: {
                    label: "對集合進行排序",
                    description: "決定如何對集合進行排序",
                    title: "對集合進行排序",
                    sortDescription: "按您的收藏選擇排序",
                    sortBy: "排序方式",
                    name: "姓名",
                    creationDate: "建立日期",
                    modifiedDate: "修改日期",
                    ascending: "生長",
                    descending: "減少"
                },
                importGifs: {
                    label: "導入 GIF",
                    description: "導入收藏品",
                    button: "進口收藏品"
                },
                exportGifs: {
                    label: "匯出 GIF",
                    description: "導出集合",
                    button: "導出集合"
                },
                resetCollections: {
                    label: "重置收藏",
                    description: "將集合重設為預設值（刪除所有集合）",
                    button: "重置收藏"
                }
            },
            toast: {
                copied: "圖片連結已複製到剪貼簿！",
                urlCopied: "網址已複製到剪貼簿！",
                already: "該合集已存在",
                alreadyCollection: "該 GIF 已存在於集合中"
            },
            modal: {
                create: {
                    title: "創作收藏",
                    name: "收藏名稱",
                    create: "創造"
                },
                rename: {
                    title: "重新命名集合",
                    name: "新收藏名稱",
                    warning: "名稱不能超過 24 個字符",
                    rename: "重新命名"
                }
            },
            alert: {
                import: {
                    title: "你確定嗎？",
                    body: "導入集合會覆蓋現有集合。",
                    confirm: "伊切·阿克塔爾",
                    cancel: "取消"
                },
                reset: {
                    title: "你確定嗎？",
                    body: "重置集合會刪除所有集合。",
                    confirm: "重置",
                    cancel: "取消"
                },
                delete: {
                    title: "你確定嗎？",
                    deleteBody: "您確實要刪除此收藏嗎？",
                    removeBody: "您真的要刪除該項目嗎？",
                    confirm: "西爾",
                    remove: "消除",
                    cancel: "取消"
                }
            }
        },
        gifPaste: {
            name: "gif貼上",
            description: "它允許您將 GIF 直接貼到聊天框中。"
        },
        gifRoulette: {
            name: "Gif輪盤賭",
            description: "新增一個從您收藏夾中隨機發送 GIF 的命令；有 10% 的機會標記伺服器擁有者！",
            command: {
                gifRoulette: {
                    description: "試試你的運氣並發送隨機 GIF"
                }
            },
            option: {
                pingOwnerChance: {
                    label: "有機會標記伺服器擁有者",
                    description: "將標記伺服器擁有者的幾率設定為十分之一（哎呀！）"
                }
            }
        },
        gitHubRepos: {
            name: "GitHubRepos",
            description: "在使用者的個人資料上顯示使用者的公共 GitHub 儲存庫。",
            loading: "存儲庫正在加載...",
            option: {
                showStars: {
                    label: "顯示星星",
                    description: "顯示倉庫星星"
                },
                showLanguage: {
                    label: "顯示語言",
                    description: "顯示儲存庫的主要程式語言"
                },
                showInMiniProfile: {
                    label: "在迷你檔案中顯示",
                    description: "在迷你設定檔視窗中顯示儲存庫"
                },
                showRepositoryTab: {
                    label: "顯示儲存庫選項卡",
                    description: "在設定檔模式中顯示儲存庫標籤（啟用時隱藏連結上的按鈕）"
                }
            },
            error: {
                error: "甚至",
                render: "錯誤：GithubRepos 無法顯示"
            },
            button: {
                show: "顯示 GitHub 儲存庫",
                repositories: "GitHub 儲存庫",
                more: "顯示更多",
                only: "只顯示最好的{{length}}/{{total}}"
            },
            modal: {
                title: "{{user}} 的 GitHub 儲存庫",
                repository: "德波",
                description: "解釋",
                language: "迪爾",
                stars: "星星",
                viewOnGitHub: "在 GitHub 上查看",
                close: "四分之一"
            }
        },
        googleThat: {
            name: "谷歌那個",
            description: "新增可讓您傳送 Internet 搜尋連線的命令。",
            command: {
                googleThat: {
                    description: "提交搜尋引擎鏈接",
                    query: "搜尋查詢"
                }
            },
            option: {
                hyperlink: {
                    label: "橋",
                    description: "提交的連結是否將作為帶有查詢標籤的超連結發送"
                },
                embed: {
                    label: "嵌入內容",
                    description: "是否將提交的連結顯示為嵌入內容"
                },
                defaultEngine: {
                    label: "預設搜尋引擎",
                    description: "使用的搜尋引擎"
                },
                customEngineURL: {
                    label: "自訂搜尋引擎 URL",
                    description: "您要使用的搜尋引擎的 URL"
                }
            }
        },
        greetStickerPicker: {
            name: "問候貼紙選擇器",
            description: "「揮手打招呼！」右鍵單擊按鈕將允許您使用所需的歡迎貼紙，而不是隨機的貼紙。",
            mode: {
                greet: "你好",
                message: "資訊"
            },
            option: {
                greetMode: {
                    label: "問候模式",
                    description: "選擇問候語模式",
                    greet: "問候語（只能發送3次問候語）",
                    message: "留言（可無限發送問候語）"
                }
            },
            context: {
                label: "問候貼紙選擇器",
                mode: "問候模式",
                stickers: "問候貼紙",
                multi: "多重問候",
                send: "發送問候"
            }
        },
        guildPickerDumper: {
            name: "公會拾取器轉儲器",
            description: "新增上下文選單，可讓您匯出和下載伺服器的表情符號和貼圖。",
            context: {
                download: {
                    emoji: "下載表情符號",
                    sticker: "下載貼紙"
                }
            }
        },
        guildTagSettings: {
            name: "公會標籤設置",
            description: "新增伺服器標籤設置，例如隱藏伺服器標籤或停用使用標籤的提示。",
            option: {
                hideTags: {
                    label: "隱藏標籤",
                    description: "使伺服器標籤不可見"
                },
                disableAdoptTagPrompt: {
                    label: "關閉標籤聲明警告",
                    description: "停用使用（聲明）伺服器標籤的提示"
                }
            }
        },
        hideChatButtons: {
            name: "隱藏聊天按鈕",
            description: "允許您隱藏聊天按鈕。",
            tooltip: {
                close: "四分之一",
                open: "飢餓的"
            },
            option: {
                color: {
                    label: "顏色",
                    description: "開機時顯示紅色"
                },
                open: {
                    label: "打開",
                    description: "預設開啟"
                }
            }
        },
        hideMedia: {
            name: "隱藏媒體",
            description: "它允許您透過將滑鼠懸停在上面時出現的按鈕來隱藏某些郵件中的附件和嵌入內容。",
            show: "展會媒體",
            hide: "隱藏媒體",
            hidden: "媒體隱藏"
        },
        hideMessages: {
            name: "隱藏訊息",
            description: "暫時隱藏訊息，直到您重新啟動。",
            button: {
                hide: "隱藏"
            },
            option: {
                hidePopoverButton: {
                    label: "隱藏彈出按鈕",
                    description: "隱藏訊息彈出視窗中的隱藏按鈕。"
                }
            }
        },
        hideServers: {
            name: "隱藏伺服器",
            description: "從伺服器清單中隱藏伺服器",
            context: {
                hide: "隱藏伺服器",
                unhide: "顯示伺服器",
                folder: {
                    hide: "隱藏資料夾",
                    unhide: "顯示資料夾"
                }
            },
            option: {
                showIndicator: {
                    label: "顯示指標",
                    description: "在底部顯示選單以顯示清單中隱藏的伺服器"
                },
                guildsList: {
                    label: "伺服器列表",
                    description: "刪除隱藏伺服器"
                },
                resetHidden: {
                    label: "重置隱藏伺服器",
                    description: "從清單中刪除所有隱藏伺服器",
                    button: "重置隱藏伺服器"
                }
            },
            button: {
                hidden: "隱",
                hiddenServers: "隱藏伺服器",
                remove: "消除",
                folder: "資料夾",
                removeAll: "全部刪除",
                guilds: "伺服器",
                noHiddenServers: "沒有隱藏伺服器"
            }
        },
        holyNotes: {
            name: "聖筆記",
            description: "Holy Notes 可讓您儲存訊息",
            main: "出色地",
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
                deleteNote: "諾圖希爾",
                moveNote: "移動註釋",
                moveTo: "移至{{key}}",
                copyId: "複製身分證件"
            },
            modal: {
                error: {
                    generic: "處理您的成績時發生錯誤。 檢查控制台以了解詳細資訊。",
                    easter: "沒有找到註釋。 同理心香蕉與你同在。",
                    empty: "此筆記本中沒有儲存任何筆記。"
                },
                help: {
                    title: "幫助",
                    description: "了解如何使用神聖筆記",
                    addingNotes: "新增註釋",
                    addingNotesText: "若要新增註釋，請右鍵單擊訊息，指向“註釋訊息”，然後選擇要新增註釋的筆記本。",
                    prototype: "原型",
                    noteMessage: "預設情況下，按一下「註釋訊息」按鈕即可將其新增至主分類帳！",
                    deletingNotes: "不是西爾梅",
                    deletingNotesText: "若要刪除註釋，您可以右鍵單擊並選擇“刪除註釋”，或按住鍵盤上的“DELETE”鍵並按一下註釋。",
                    movingNotes: "移動筆記",
                    movingNotesText: "若要移動筆記，請右鍵單擊並從「移動筆記」選項中選擇要移動的筆記本。",
                    jumpToMessage: "前往留言",
                    jumpToMessageText: "若要前往註釋所屬的訊息，請右鍵按一下該註解並選擇「前往訊息」。"
                },
                notebook: {
                    title: "筆記本",
                    search: "搜尋訊息...",
                    options: "排序選項",
                    label: "排序選單",
                    filteredOf: "{{filteredCount}}/{{noteCount}} 不",
                    note: "{{noteCount}} 不",
                    ada: "升序/添加日期",
                    amd: "升序/訊息日期",
                    dda: "降序/添加日期",
                    dmd: "降序/訊息日期",
                    change: "改變排序",
                    ascending: "生長",
                    descending: "減少",
                    dateAdded: "新增日期",
                    messageDate: "留言日期"
                },
                create: {
                    title: "建立筆記本",
                    description: "輸入新筆記本的名稱",
                    placeholder: "筆記本名稱"
                },
                delete: {
                    title: "{{notebookName}} Silinsin Mi？",
                    description: "{{noteCount}}條筆記將永久刪除",
                    button: "西爾"
                },
                tabs: {
                    label: "筆記本標籤"
                }
            },
            toast: {
                saved: "該訊息已成功加入到{{notebook}}。",
                deleted: "該筆記已成功從 {{notebook}} 中刪除。",
                moved: "筆記已成功從 {{from}} 筆記本移至 {{to}} 筆記本。",
                exists: "名為 {{notebookName}} 的筆記本已存在。",
                created: "{{notebookName}} 已成功建立。",
                deletedNotebook: "{{notebookName}} 已成功刪除。",
                refreshed: "頭像已成功刷新。",
                deletedAll: "所有筆記均已成功刪除。",
                imported: "筆記已成功導入。",
                invalid: "導入筆記失敗。"
            },
            toolbox: {
                action: "打開筆記"
            }
        },
        homeTyping: {
            name: "家庭打字",
            description: "如果有人在您的私訊中書寫，它會將主頁按鈕變成書寫指示器。"
        },
        iconViewer: {
            name: "圖示檢視器",
            description: "在設定中新增一個選項卡以預覽所有圖示。",
            toolbox: "打開圖標選項卡",
            iconFinder: "圖示查找器",
            about: {
                title: "特徵",
                preview: "預覽圖標",
                list: {
                    copy: "複製圖示名稱和 CSS 變量",
                    download: "下載不同格式的圖示（SVG、PNG、GIF 等）",
                    premade: "為您的插件複製現成的圖示結果",
                    find: "按功能上下文尋找圖標",
                    search: "右鍵單擊顏色名稱以搜尋顏色",
                    special: "特別感謝"
                }
            },
            context: {
                icon: {
                    options: "圖示選項",
                    log: "列印到控制台（日誌）",
                    save: "另存為...",
                    rightClick: "右鍵單擊圖標進行替換",
                    usage: "使用",
                    click: "點選複製",
                    copied: "複製了！",
                    actions: "行動"
                }
            },
            modal: {
                label: "按功能上下文搜尋",
                search: "在 {{count}} 個符號內搜尋...",
                function: "功能",
                iconViewer: {
                    colors: "圖示檢視器顏色",
                    unknown: "未知",
                }
            }
        },
        idleAutoRestart: {
            name: "空閒自動重啟",
            description: "當您閒置一段時間後，它會自動重新啟動應用程序，但當您處於音訊通道時，它會阻止重新啟動。",
            option: {
                isEnabled: {
                    label: "有效的",
                    description: "啟用空閒後自動重啟"
                },
                idleMinutes: {
                    label: "空閒時間（分鐘）",
                    description: "重新啟動前的不活動時間（不在音訊頻道上）"
                }
            },
            toolbox: {
                disable: "停用自動重啟",
                enable: "啟用自動重啟"
            }
        },
        ignoreActivities: {
            name: "忽略活動",
            description: "防止事件僅出現在該狀態。 您可以在「已儲存的遊戲」和「活動」標籤中指定要忽略的內容，或使用下方的常規設定。",
            modal: {
                import: {
                    title: "將 CustomRPC 插件的應用程式 ID 匯入過濾器列表"
                },
                filter: {
                    title: "過濾器列表",
                    description: "要過濾的事件 ID 的逗號分隔清單（對於過濾特定 RPC 事件和 CustomRPC 很有用）"
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
                    label: "CustomRPC'yi 更多"
                },
                listMode: {
                    label: "列表模式",
                    description: "選擇如何套用篩選器列表",
                    blacklist: "黑名單（僅忽略名單上的）",
                    whitelist: "白名單（忽略清單中的所有內容）"
                },
                idList: {
                    label: "身分證號碼列表"
                },
                ignorePlaying: {
                    label: "忽略已播放的內容",
                    description: "忽略所有已玩事件（通常是遊戲和 RPC 事件）"
                },
                ignoreStreaming: {
                    label: "忽略貼文",
                    description: "忽略所有廣播事件"
                },
                ignoreListening: {
                    label: "忽略聽眾",
                    description: "忽略所有收聽事件（通常是 Spotify 事件）"
                },
                ignoreWatching: {
                    label: "忽略已查看",
                    description: "忽略所有追蹤事件"
                },
                ignoreCompeting: {
                    label: "忽略競爭事件",
                    description: "忽略所有競爭（競賽）事件（通常是自訂遊戲事件）"
                },
                ignoredActivities: {
                    label: "被忽略的事件"
                }
            }
        },
        ignoreCalls: {
            name: "忽略來電",
            description: "允許您忽略來自特定使用者或 DM 群組的通話。",
            option: {
                permanentlyIgnoredUsers: {
                    label: "永久被忽略的用戶",
                    description: "應永久忽略的使用者 ID (virgül + boşluk)"
                }
            },
            button: {
                ignore: "約克賽",
                temporarilyIgnore: "暫時忽略",
                permanentlyIgnore: "永久忽略"
            }
        },
        iLoveSpam: {
            name: "我愛垃圾郵件",
            description: "隱藏來自「潛在垃圾郵件發送者」的訊息。"
        },
        imageFilename: {
            name: "圖片檔名",
            description: "將滑鼠懸停在圖像和 GIF 上時將檔案名稱顯示為工具提示。",
            option: {
                showFullUrl: {
                    label: "顯示完整網址",
                    description: "它顯示圖像的完整 URL，而不僅僅是檔案名稱。 它始終對 GIF 啟用，因為它們通常沒有有意義的檔案名稱。"
                }
            }
        },
        imageLink: {
            name: "圖像連結",
            description: "它從不隱藏視覺鏈接，即使訊息中只有圖像鏈接。"
        },
        imageZoom: {
            name: "圖像縮放",
            description: "它允許您放大圖像和 GIF，以及查看圖像元資料。 使用滑鼠滾輪放大，使用 Shift + 滑鼠滾輪增加鏡頭半徑。",
            option: {
                saveZoomValues: {
                    label: "保存縮放值",
                    description: "確定是否儲存變焦和鏡頭尺寸值"
                },
                invertScroll: {
                    label: "反向捲動",
                    description: "反轉滑鼠滾動方向"
                },
                nearestNeighbour: {
                    label: "最近鄰",
                    description: "縮放影像時使用最近鄰插值"
                },
                square: {
                    label: "保護",
                    description: "將鏡片變成方形"
                },
                zoom: {
                    label: "飛漲",
                    description: "鏡頭變焦比"
                },
                size: {
                    label: "方面",
                    description: "鏡頭半徑/尺寸"
                },
                zoomSpeed: {
                    label: "變焦速度",
                    description: "決定變焦/鏡頭尺寸的變化速度"
                },
                showMetadata: {
                    label: "顯示元數據",
                    description: "雙擊所選影像時顯示元數據"
                }
            },
            context: {
                square: "方形鏡片",
                nearest: "像素化放大",
                zoom: "飛漲",
                size: "鏡片尺寸",
                zoomSpeed: "變焦速度",
                showImageMetadata: "顯示影像元數據",
                view: "查看元數據",
                loading: "載入中...",
                unknown: "未知",
                sizeHTML: "方面",
                dimensions: "方面",
                filename: "檔案名稱"
            }
        },
        imgToGif: {
            name: "圖像轉Gif",
            description: "添加 /imgtogif 命令將任何圖像轉換為 GIF",
            command: {
                imgToGif: {
                    description: "允許您將圖像轉換為 GIF",
                    image: "使用的視覺附件",
                    width: "GIF 寬度",
                    height: "動圖高度"
                }
            },
            error: {
                noImage: "沒有指定圖片！",
                notImage: "上傳的檔案不是圖像"
            }
        },
        implicitRelationships: {
            name: "隱性關係",
            description: "在「好友」標籤中顯示您的間接關係。",
            option: {
                sortByAffinity: {
                    label: "按距離排序",
                    description: "決定間接關係是否按與您的遠近程度排序。"
                }
            },
            implicit: "間接"
        },
        inRole: {
            name: "角色中",
            description: "使用角色上下文選單或 /inrole 指令找出角色中的人員（閱讀外掛程式資訊！）",
            command: {
                inrole: {
                    description: "找出角色中的角色",
                    role: "角色",
                    noGuild: "確保您在伺服器上。"
                }
            },
            context: {
                view: "查看角色中的成員"
            },
            modal: {
                about: {
                    title: "限制",
                    description: "如果您沒有伺服器的審核權限且伺服器很大（超過100個成員），則該外掛程式可能會受到以下限制：",
                    list: {
                        one: "離線會員不會被列出",
                        two: "預設情況下，最多會列出 100 個成員。 向下捲動成員清單以查看更多成員。",
                        three: "但您的朋友無論其狀態如何，都會始終顯示。"
                    }
                },
                member: {
                    title: "角色中的成員",
                    noMembers: "找不到具有此角色的線上快取成員。 嘗試向下捲動您的成員清單以快取更多用戶！"
                }
            }
        },
        instantScreenshare: {
            name: "即時螢幕分享",
            description: "當您加入音訊通道時，它可以讓您立即進行螢幕分享，並支援桌面來源、視窗和視訊輸入裝置（相機、擷取卡）。",
            modal: {
                linux: {
                    title: "對於Linux",
                    body: "如果您使用 Wayland，它只會打開螢幕分享選項。",
                    bodyTwo: "它可能適用於 X11，也可能不適用於 :shrug:"
                },
                videoDevices: {
                    title: "視訊輸入設備",
                    body: "在設定中啟用時支援相機和擷取卡（例如 Elgato HD60X）。"
                },
                regardingSound: {
                    title: "關於聲音和預覽設置",
                    body: "我們使用與 Discord 相同的設定來預覽串流並決定是否啟用音訊。"
                }
            },
            option: {
                streamMedia: {
                    label: "待發布媒體來源",
                    description: "如果沒有找到，它將重置到主螢幕。",
                    loading: "正在載入媒體來源...",
                    none: "找不到媒體來源",
                    placeholder: "選擇要發布的媒體來源"
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
                    description: "當您加入語音頻道時自動變聾（它也會使您靜音）"
                },
                instantScreenshare: {
                    label: "即時螢幕分享",
                    description: "啟用自動螢幕分享功能"
                },
                keybindScreenshare: {
                    label: "使用熱鍵共享螢幕",
                    description: "在 Discord 熱鍵設定中使用熱鍵共享螢幕"
                },
                focusDiscord: {
                    label: "專注於不和諧",
                    description: "僅當 Discord 具有焦點時才使用鍵綁定啟動畫面共享"
                },
                toolboxManagement: {
                    label: "工具箱管理",
                    description: "啟用/停用即時螢幕分享"
                }
            },
            toolbox: {
                label: "即時螢幕分享",
                toast: "即時螢幕分享 {{state}}",
                enabled: "有效的",
                disabled: "殘障人士"
            }
        },
        invisibleChat: {
            name: "隱形聊天",
            description: "加密您的訊息而不引起懷疑！",
            option: {
                savedPasswords: {
                    label: "已儲存的密碼",
                    description: "儲存的密碼（逗號分隔）"
                }
            },
            button: {
                encrypt: "加密訊息",
                decrypt: "破解消息",
                hidden: "隱藏訊息指示器（InvisibleChat）"
            },
            tooltip: {
                hidden: "這則訊息裡有一條隱藏的訊息！ （隱形聊天）"
            },
            embed: {
                title: "解密訊息",
                footer: "透過 InvisibleChat 發送"
            },
            modal: {
                encrypt: {
                    title: "加密訊息",
                    secret: "秘密訊息",
                    cover: "封面（2個或更多字！！）",
                    password: "密碼",
                    dontUseCover: "使用蓋子",
                    send: "傳送",
                    cancel: "取消"
                },
                decrypt: {
                    title: "破解消息",
                    with: "加密訊息",
                    password: "密碼",
                    decrypt: "解碼",
                    cancel: "取消"
                }
            }
        },
        inviteDefaults: {
            name: "邀請預設",
            description: "允許您在建立伺服器邀請時編輯預設值。",
            option: {
                inviteDuration: {
                    label: "邀約期限",
                    description: "伺服器邀請的預設持續時間",
                    thirtyMinutes: "30分鐘",
                    oneHour: "1 時刻",
                    sixHours: "6 時刻",
                    twelveHours: "12 時刻",
                    oneDay: "1 天",
                    sevenDays: "7天",
                    forever: "不定"
                },
                maxUses: {
                    label: "最大使用量",
                    description: "伺服器邀請的預設最大使用量",
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
                    description: "伺服器邀請的預設臨時成員資格設置"
                }
            }
        },
        ircColors: {
            name: "Irc顏色",
            description: "讓聊天中使用者名稱的顏色獨一無二，就像在 IRC 用戶端中一樣。",
            option: {
                lightness: {
                    label: "明亮的",
                    description: "亮度比（%）。 如果顏色看起來太淺或太深，請變更它們。"
                },
                memberListColors: {
                    label: "會員列表顏色",
                    description: "變更成員清單中的角色顏色。"
                },
                applyColorOnlyToUsersWithoutColor: {
                    label: "僅適用於沒有顏色的用戶",
                    description: "將顏色套用於未預定義顏色的使用者。"
                },
                applyColorOnlyInDms: {
                    label: "僅適用於私人訊息",
                    description: "僅對私人訊息應用顏色；伺服器上的應用程式。"
                }
            }
        },
        iRememberYou: {
            name: "我記得你",
            description: "它在本地記錄您與之通訊的每個人（包括伺服器），防止遺失。",
            section: {
                description: "它顯示您提到、回覆的伺服器的擁有者列表，是（伺服器擁有者*）的成員或您所在伺服器的成員。",
                empty: "目前空著。",
                tooltip: "{{user}} 於 {{updatedAtContent}} 更新",
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
                title: "調節器",
                filter: "按標籤、使用者名稱或 ID 過濾",
                button: {
                    validate: "驗證並保存",
                    cancel: "取消",
                    openEditor: "開啟編輯器",
                    resetData: "重置數據",
                    sure: "你確定嗎？"
                }
            }
        },
        jumpTo: {
            name: "跳到",
            description: "在右鍵選單中新增選項以跳到頻道或私人訊息的開頭或結尾。",
            context: {
                top: "轉到第一個帖子",
                bottom: "前往上一篇文章",
                noMessages: "在此頻道中未找到該用戶的消息。",
                searchFailed: "搜尋訊息時發生錯誤。"
            }
        },
        keepCurrentChannel: {
            name: "保持當前頻道",
            description: "切換帳戶或載入 Discord 時，它會嘗試返回您所在的頻道。"
        },
        keyboardSounds: {
            name: "鍵盤聲音",
            description: "使用鍵盤打字時的 OperaGX 或 osu！ 加入聲音效果。",
            option: {
                volume: {
                    label: "聲級",
                    description: "鍵盤聲音音量"
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
            name: "關鍵字通知",
            description: "發送與某些關鍵字或正規表示式相符的訊息的通知。",
            idHolder: "ID",
            keywordEntry: "關鍵字輸入",
            regexHolder: "範例|正規表示式",
            ignoreCase: "不區分大小寫",
            whiteblackLabel: "白名單/黑名單",
            tab: {
                title: "關鍵字",
                clearAll: "全部清除"
            },
            button: {
                addId: "艾克勒",
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
                    label: "節省金額",
                    description: "要保留在日誌中的消息數"
                },
                keywords: {
                    label: "關鍵字",
                    description: "管理關鍵字"
                }
            }
        },
        lastOnline: {
            name: "最後在線",
            description: "在 DM 清單、伺服器和群組 DM 成員清單中的使用者名稱下新增最後線上指示器。",
            unit: {
                d: "天",
                h: "片刻",
                m: "分分鐘"
            },
            online: "{{formattedTime}}之前在線過"
        },
        listenBrainzRPC: {
            name: "ListenBrainzRPC",
            description: "ListenBrainz 是一個用於豐富存在的小插件。",
            about: {
                title: "關於 MusicBrainz API",
                description: "MusicBrainz API 不需要 API 金鑰，但需要 {{link}}。 對於大多數使用者來說，一個電子郵件地址就足夠了。",
                userAgent: "有意義的用戶代理字串"
            },
            option: {
                username: {
                    label: "使用者名稱",
                    description: "ListenBrainz 使用者名稱"
                },
                mbContact: {
                    label: "聯絡方式",
                    description: "ListenBrainz 聯絡資訊"
                },
                shareUsername: {
                    label: "分享用戶名",
                    description: "顯示 ListenBrainz 個人資料連結（僅對其他使用者可見）"
                },
                shareSong: {
                    label: "分享歌曲",
                    description: "在 ListenBrainz 上顯示目前歌曲的連結（僅對其他使用者可見）"
                },
                hideWithSpotify: {
                    label: "Spotify 處於活動狀態時隱藏",
                    description: "如果 Spotify 正在運行，則隱藏 ListenBrainz 狀態"
                },
                hideWithActivity: {
                    label: "如果有其他事件則隱藏",
                    description: "如果您有其他狀態，請隱藏 ListenBrainz 狀態"
                },
                useTimeBar: {
                    label: "使用時間欄",
                    description: "將曲目持續時間顯示為時間列（必須使用聆聽狀態）"
                },
                statusName: {
                    label: "狀態名稱",
                    description: "例外文字"
                },
                nameFormat: {
                    label: "姓名格式",
                    description: "如何在狀態名稱中顯示歌曲和藝術家名稱",
                    custom: "使用自訂狀態文字",
                    artistSong: "使用“藝術家-歌曲”格式",
                    songArtist: "使用“歌曲-藝人”格式",
                    artistOnly: "只需使用藝術家姓名",
                    songOnly: "只需使用歌曲名稱即可",
                    albumName: "使用專輯名稱（如果歌曲沒有專輯，則傳回異常文字）"
                },
                useListeningStatus: {
                    label: "使用收聽狀態",
                    description: "顯示“正在收聽”狀態而不是“正在播放”"
                },
                missingArt: {
                    label: "缺封面圖片",
                    description: "當專輯或專輯封面遺失時",
                    listenbrainzLogo: "使用大 ListenBrainz 徽標",
                    generic: "使用通用佔位符"
                },
                useLogo: {
                    label: "庫蘭標誌",
                    description: "在專輯封面上顯示 ListenBrainz 標誌"
                }
            }
        },
        loadingQuotes: {
            name: "加載報價",
            description: "更改 Discord 的載入報價",
            option: {
                replaceEvents: {
                    label: "變更事件",
                    description: "在具有特殊活動主題報價的活動期間也應該應用此插件嗎？ （例如萬聖節）"
                },
                enablePluginPresetQuotes: {
                    label: "啟用插件報價",
                    description: "啟用此外掛程式準備的報價"
                },
                enableDiscordPresetQuotes: {
                    label: "啟用不和諧引號",
                    description: "啟用 Discord 預設報價（包括活動期間的活動報價）"
                },
                additionalQuotes: {
                    label: "附加報價",
                    description: "可能出現的其他特殊引號由以下分隔符號分隔"
                },
                additionalQuotesDelimiter: {
                    label: "附加引號分隔符",
                    description: "附加報價的分隔符"
                }
            }
        },
        loginWithQR: {
            name: "QR 圖碼登入",
            description: "就像在行動裝置上一樣，掃描登入二維碼即可在另一台裝置上登入！",
            option: {
                scanQr: {
                    label: "掃描二維碼",
                    description: "掃描二維碼",
                    notEnabled: "啟動外掛程式並重新啟動用戶端掃描登入二維碼"
                }
            },
            neverScan: "切勿掃描其他使用者或應用程式的登入二維碼。",
            hold: "按住確認輸入",
            scanning: "掃描...",
            stopScanning: "停止掃描",
            usingWebcam: "使用網路攝影機掃描",
            dragDrop: "將圖像拖放到此處或點擊以選擇圖像",
            orPaste: "或從剪貼簿貼上圖片！"
        },
        mediaPlaybackSpeed: {
            name: "媒體播放速度",
            description: "允許您更改媒體嵌入的（預設）播放速度。",
            playbackSpeed: "播放速度",
            context: {
                label: "播放速度控制"
            },
            option: {
                defaultVoiceMessageSpeed: {
                    label: "預設語音信箱費率",
                    description: "語音留言"
                },
                defaultVideoSpeed: {
                    label: "預設視訊速度",
                    description: "影片"
                },
                defaultAudioSpeed: {
                    label: "預設音訊速率",
                    description: "音訊檔案"
                }
            }
        },
        memberCount: {
            name: "會員數量",
            description: "在成員清單和工具提示中顯示伺服器上線上成員的數量、成員總數以及語音頻道中的使用者。",
            option: {
                toolTip: {
                    label: "工具提示",
                    description: "在伺服器工具提示中顯示成員計數"
                },
                memberList: {
                    label: "會員名單",
                    description: "在成員清單頂部顯示成員數量"
                },
                voiceActivity: {
                    label: "語音活動",
                    description: "顯示語音頻道的使用者數量"
                }
            },
            onlineThisChannel: "{{formattedOnlineCount}}在此頻道上線",
            totalMembers: "伺服器上的成員總數為 {{formattedTotalCount}}}",
            totalVoice: "{{formattedVoiceCount}} 個語音頻道的會員"
        },
        mentionAvatars: {
            name: "提及頭像",
            description: "顯示提及中的使用者頭像和角色圖示。",
            option: {
                showAtSymbol: {
                    label: "顯示@圖標",
                    description: "確定@符號是否顯示在使用者提及中。"
                }
            }
        },
        meow: {
            name: "喵",
            description: "在聊天欄中新增一個按鈕以在聊天中喵喵叫。",
            button: {
                meow: "米亞夫"
            }
        },
        messageBurst: {
            name: "訊息突發",
            description: "它將在特定時間段內發送的訊息與您先前的訊息合併，除非其他人在您之前發送了訊息。",
            option: {
                timePeriod: {
                    label: "時間範圍",
                    description: "合併時間（以秒為單位）。"
                },
                shouldMergeWithAttachment: {
                    label: "與附件結合",
                    description: "如果最後一則訊息中有附件（文件/圖像），是否應該合併訊息？"
                },
                useSpace: {
                    label: "使用空間",
                    description: "合併時是否在訊息之間新增空格而不是移至新行。"
                }
            }
        },
        messageClickActions: {
            name: "訊息點擊操作",
            description: "按住退格鍵並點選可刪除，雙擊可編輯或回覆。",
            option: {
                singleClickAction: {
                    label: "一鍵操作",
                    description: "點擊操作（在您自己的訊息上）"
                },
                singleClickModifier: {
                    label: "一鍵修改器",
                    description: "一鍵操作所需的修飾符（在您自己的訊息中）"
                },
                singleClickOthersAction: {
                    label: "一鍵操作（其他）",
                    description: "點擊操作（在其他人的消息上）"
                },
                singleClickOthersModifier: {
                    label: "一鍵修改器（其他）",
                    description: "點擊操作所需的修飾符（在其他人的帖子中）"
                },
                doubleClickAction: {
                    label: "按兩下操作",
                    description: "對您自己的訊息進行雙擊操作"
                },
                doubleClickOthersAction: {
                    label: "雙擊操作（其他）",
                    description: "對他人訊息進行雙擊操作"
                },
                doubleClickModifier: {
                    label: "雙擊修改器",
                    description: "雙擊操作所需的修飾符"
                },
                tripleClickAction: {
                    label: "三擊操作",
                    description: "三擊操作"
                },
                tripleClickModifier: {
                    label: "三擊修改器",
                    description: "三次點選操作所需的修飾符"
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
                    label: "附加反應表情符號",
                    description: "使用反應動作時要新增的其他表情符號（以逗號/回車分隔，最大{{count}}）"
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
            linkCopied: "Bağlantı kopyalandı!"
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
                    description: "顯示毫秒計時"
                },
                iconColor: {
                    label: "圖示顏色",
                    description: "圖示顏色（CSS顏色值）"
                }
            },
            loaded: "訊息在 {{time}} 毫秒 ({{timeAgo}}) 內載入",
            day: "幾天前",
            hour: "幾小時前",
            minute: "分鐘前",
            justNow: "現在"
        },
        messageLatency: {
            name: "訊息延遲",
            description: "為需要 ≥n 秒發送的訊息新增指示器。",
            day: "天",
            days: "天",
            hour: "片刻",
            hours: "片刻",
            minute: "分分鐘",
            minutes: "分分鐘",
            second: "第二",
            seconds: "第二",
            millisecond: "毫秒",
            milliseconds: "毫秒",
            and: "維",
            oldKotlinDetected: "懷疑用戶使用過時的 Discord Android 用戶端。",
            ahead: "該用戶的時間提早了 {{delta}}。",
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
                    label: "忽略我自己",
                    description: "將指示器新增至您自己的訊息中"
                }
            }
        },
        messageLinkEmbeds: {
            name: "訊息連結嵌入",
            description: "在包含另一封郵件連結的郵件中新增預覽。",
            option: {
                messageBackgroundColor: {
                    label: "訊息背景顏色",
                    description: "豐富嵌入中訊息的背景顏色"
                },
                automodEmbeds: {
                    label: "奧托莫德墓葬",
                    description: "使用 automod 嵌入而不是豐富的嵌入（較小但包含較少的資訊）",
                    always: "始終使用 automod 嵌入",
                    prefer: "首選 Automod 嵌入，但如果某些內容無法顯示，請使用豐富的嵌入",
                    never: "切勿使用 automod 嵌入"
                },
                listMode: {
                    label: "列表模式",
                    description: "確定ID清單是否用作黑名單或白名單",
                    blacklist: "黑名單",
                    whitelist: "白名單"
                },
                idList: {
                    label: "身分證號碼列表",
                    description: "需要新增到黑名單或白名單的伺服器/通道/用戶ID（以逗號分隔）"
                },
                clearMessageCache: {
                    label: "清除訊息快取",
                    description: "清除連結訊息緩存"
                }
            },
            noContent: {
                noAttachments: "沒有內容 {{count}} 嵌入訊息",
                noEmbeds: "沒有內容添加 {{count}}",
                both: "無內容、{{attachments}} 附件和 {{embeds}} 嵌入訊息"
            },
            dm: "私訊",
            groupDm: "群組留言",
            server: "主持人"
        },
        messageLinkTooltip: {
            name: "訊息連結工具提示",
            description: "將滑鼠懸停在訊息連結、回覆和轉發的訊息上時加入工具提示和訊息預覽。",
            loading: "載入中...",
            option: {
                onLink: {
                    label: "連結上",
                    description: "將滑鼠懸停在訊息連結上時顯示工具提示"
                },
                onReply: {
                    label: "關於回應",
                    description: "將滑鼠懸停在訊息回復上時顯示工具提示"
                },
                onForward: {
                    label: "關於傳輸的消息",
                    description: "將滑鼠懸停在轉發的訊息上時顯示工具提示"
                },
                display: {
                    label: "外貌",
                    description: "外觀風格",
                    auto: "與留言相同",
                    compact: "袖珍的",
                    cozy: "舒服的"
                }
            }
        },
        messageLogger: {
            name: "訊息記錄器",
            description: "暫時保存已刪除和編輯的訊息。",
            removeMessage: "刪除訊息歷史記錄",
            removeMessageTemporary: "刪除訊息（暫時）",
            clearMessageLog: "清除訊息日誌",
            modal: {
                edit: {
                    title: "留言編輯歷史",
                    tooltip: "由於尚未儲存，因此無法顯示該編輯狀態。"
                }
            },
            option: {
                deleteStyle: {
                    label: "擦除樣式",
                    description: "已刪除訊息的外觀風格",
                    text: "紅色文字",
                    overlay: "紅色塗層"
                },
                logDeletes: {
                    label: "儲存已刪除",
                    description: "確定是否儲存已刪除的訊息"
                },
                collapseDeleted: {
                    label: "折疊 已刪除",
                    description: "與封鎖的訊息類似，優化已刪除的訊息"
                },
                logEdits: {
                    label: "儲存編輯",
                    description: "確定是否儲存編輯的訊息"
                },
                inlineEdits: {
                    label: "內嵌編輯",
                    description: "將編輯歷史記錄顯示為訊息內容的一部分"
                },
                ignoreBots: {
                    label: "忽略機器人",
                    description: "忽略機器人發送的訊息"
                },
                ignoreSelf: {
                    label: "忽略我自己",
                    description: "忽略自己的訊息"
                },
                ignoreUsers: {
                    label: "忽略用戶",
                    description: "要忽略的用戶 ID 的逗號分隔列表"
                },
                ignoreChannels: {
                    label: "忽略頻道",
                    description: "要忽略的以逗號分隔的頻道 ID 列表"
                },
                ignoreGuilds: {
                    label: "忽略伺服器",
                    description: "要忽略的伺服器 ID 的逗號分隔列表"
                },
                showEditDiffs: {
                    label: "顯示編輯差異",
                    description: "顯示已編輯訊息版本之間的差異"
                },
                separatedDiffs: {
                    label: "分裂差異",
                    description: "透過在差異中單獨顯示新增和刪除來提供更具可讀性的視圖"
                }
            }
        },
        messageLoggerEnhanced: {
            name: "訊息記錄器增強型",
            description: "它透過附加功能增強了 MessageLogger 插件。",
            updateImageCacheDir: "視覺快取目錄已成功更新。",
            updateLogsDir: "日誌目錄已成功更新。",
            failedUpdate: "無法更新目錄。",
            blacklist: "黑名單",
            whitelist: "白名單",
            failedToRemove: "訊息無法刪除",
            successfullyImported: "日誌匯入成功。",
            errorImportingLogs: "匯入日誌時發生錯誤。 檢查控制台以取得更多資訊。",
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
                cleared: "訊息日誌資料庫和快取已被清除。"
            },
            context: {
                title: "訊息日誌",
                jumpToMessage: "前往留言",
                openUserProfile: "打開用戶資料",
                copyContent: "複製內容",
                copyUserId: "複製使用者 ID",
                copyMessageId: "複製訊息 ID",
                copyChannelId: "複製頻道 ID",
                copyServerId: "複製伺服器 ID",
                deleteLog: "刪除日誌",
                fromUsernameDm: "來自 {{username}} 的 DM",
                fromGroupDm: "{{channelName}} 群組私訊",
                fromServerChannel: "來自伺服器 {{serverName}} 上的頻道 {{channelName}}",
                moveTypeTo: "將 {{type}} 移至 {{destination}}",
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
                server: "主持人",
                user: "使用者",
                channel: "頻道"
            },
            button: {
                chooseFolder: "選擇資料夾",
                browse: "戈札特",
                clearLogs: "清除所有日誌",
                clearVisibleLogs: "清晰可見的日誌",
                sortOldest: "從最舊到最新排序",
                sortNewest: "從新到舊排序",
                loadMore: "加載更多",
                noResults: "{{tab}} 選項卡中沒有結果",
                tryOtherTabs: "嘗試使用 {{nextTab}} 或 {{lastTab}} 選項卡",
                importLogs: "匯入日誌"
            },
            modal: {
                title: "過濾訊息",
                deleted: "已刪除",
                edited: "有組織",
                ghostPing: "隱形平",
                empty: "空空如也啊",
                importLogs: "ML 增強版現在將日誌儲存到 IndexedDB。 您需要從日誌目錄匯入舊日誌。 匯入不會更改現有日誌。"
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
                    description: "確定是否儲存已刪除和編輯的訊息。"
                },
                saveImages: {
                    label: "儲存影像",
                    description: "儲存已刪除的附件。"
                },
                sortNewest: {
                    label: "從新到舊排序",
                    description: "依最新對日誌進行排序。"
                },
                cacheMessagesFromServers: {
                    label: "快取來自伺服器的訊息",
                    description: "通常記錄器僅記錄白名單ID和DM，啟用此選項也會記錄所有伺服器上的消息。 但是，這可能會超出快取限制並導致某些訊息被跳過。"
                },
                ignoreBots: {
                    label: "忽略機器人",
                    description: "忽略機器人訊息。"
                },
                ignoreWebhooks: {
                    label: "Webhookları Yoksay",
                    description: "忽略 webhook 訊息。"
                },
                ignoreSelf: {
                    label: "忽略我自己",
                    description: "忽略你自己的訊息。"
                },
                ignoreMutedGuilds: {
                    label: "忽略靜音伺服器",
                    description: "靜音伺服器上的消息不會被記錄。 但是，白名單使用者/頻道仍會被記錄。"
                },
                ignoreMutedCategories: {
                    label: "忽略靜音類別",
                    description: "屬於靜音類別的頻道中的消息不會被記錄。"
                },
                ignoreMutedChannels: {
                    label: "忽略靜音音訊道",
                    description: "靜音通道上的消息不會被記錄。"
                },
                alwaysLogDirectMessages: {
                    label: "始終保存私訊",
                    description: "始終保存私訊。"
                },
                alwaysLogCurrentChannel: {
                    label: "始終保存目前頻道",
                    description: "始終保存目前頻道。 排除列入黑名單的頻道/使用者。"
                },
                permanentlyRemoveLogByDefault: {
                    label: "預設永久刪除日誌",
                    description: "在主 MessageLogger 上下文選單中，從訊息日誌中刪除的選項預設為永久刪除。"
                },
                hideMessageFromMessageLoggers: {
                    label: "隱藏來自記錄器的訊息",
                    description: "啟用後，它會新增一個上下文選單選項來隱藏來自其他記錄器的訊息。 它可能不安全，使用風險自負。"
                },
                showLogsButton: {
                    label: "顯示日誌按鈕",
                    description: "切換是否顯示工具列。"
                },
                showWhereMessageIsFrom: {
                    label: "顯示消息來源",
                    description: "顯示訊息的頻道/作者和伺服器名稱。"
                },
                messagesToDisplayAtOnceInLogs: {
                    label: "日誌中同時顯示的訊息數",
                    description: "確定一次在日誌中顯示的訊息數以及載入更多訊息時要新增的訊息量。"
                },
                hideMessageFromMessageLoggersDeletedMessage: {
                    label: "訊息記錄器隱藏訊息內容",
                    description: "使用隱藏訊息記錄器時取代訊息的內容。"
                },
                messageLimit: {
                    label: "訊息限制",
                    description: "要保存的最大訊息數。 當超過限制時，舊訊息將被刪除。 0 = 無限制。"
                },
                attachmentSizeLimitInMegabytes: {
                    label: "附件大小限制 (MB)",
                    description: "要儲存的附件的最大大小（以 MB 為單位）。 大於此值的附件將不會被儲存。"
                },
                attachmentFileExtensions: {
                    label: "附加檔案副檔名",
                    description: "要儲存的以逗號分隔的檔案副檔名清單。 如果留空，則儲存所有附件。"
                },
                cacheLimit: {
                    label: "快取限制",
                    description: "快取中保留的最大訊息數。 當超過限制時，舊訊息將被刪除。"
                },
                timeBasedCleanupMinutes: {
                    label: "基於時間的分鐘清潔",
                    description: "對早於訊息限制的訊息進行基於時間的清理的分鐘間隔。"
                },
                preserveCurrentChannel: {
                    label: "保持當前頻道",
                    description: "啟用後，目前所選頻道上的消息不受基於時間的清理的影響。"
                },
                whitelistedIds: {
                    label: "白名單ID",
                    description: "列入白名單的伺服器、通道或使用者 ID。"
                },
                blacklistedIds: {
                    label: "黑名單ID",
                    description: "列入黑名單的伺服器、頻道或使用者 ID。"
                },
                imageCacheDir: {
                    label: "視覺緩存目錄",
                    description: "選擇儲存影像的目錄。"
                },
                logsDir: {
                    label: "日誌索引",
                    description: "選擇日誌保存的目錄。"
                },
                importLogs: {
                    label: "匯入日誌",
                    description: "從文件匯入日誌。"
                },
                exportLogs: {
                    label: "匯出日誌",
                    description: "從 IndexedDB 匯出日誌。"
                },
                openLogs: {
                    label: "打開日誌",
                    description: "打開日誌。"
                },
                openImageCacheFolder: {
                    label: "打開視覺快取資料夾",
                    description: "開啟視覺緩存目錄。"
                },
                clearLogs: {
                    label: "清除日誌",
                    description: "清除日誌。",
                    title: "清除日誌",
                    body: "您確定要清除所有日誌嗎？",
                    confirmText: "清除",
                    cancel: "取消"
                }
            }
        },
        messageNotifier: {
            name: "訊息通知程序",
            description: "當選定的用戶發送訊息時接收通知",
            dm: "私訊",
            option: {
                users: {
                    label: "使用者",
                    description: "用於接收訊息通知的使用者 ID 的逗號分隔列表",
                    invalidId: "{{id}} 不是有效的使用者 ID"
                }
            },
            notification: {
                title: "{{username}} 傳送了一則訊息",
                body: "點擊前往{{locationName}}"
            }
        },
        messageTags: {
            name: "訊息標籤",
            description: "它允許您保存訊息並透過簡單的命令使用它們。",
            notExist: "標籤 **{{tagname}}** 不再可用！ 重新啟動 Discord 即可修復它:)",
            alreadyExist: "名為 **{{tagname}}** 的標籤已存在！",
            sentTag: "**{{tagname}}** 標籤已發送！",
            successCreate: "**{{tagname}}** 標籤建立成功！",
            allTags: "所有標籤：",
            noTags: "UPS！ 還沒有標籤，請使用 /tag create 建立它們！",
            noDeleteTag: "未找到名為 **{{tagname}}** 的標籤，因此無法刪除！",
            successDelete: "標籤 **{{name}}** 已成功刪除！",
            tagPreview: "名為 **{{name}}** 的標籤不存在！",
            option: {
                clyde: {
                    label: "克萊德在貼文中留言",
                    description: "啟用後，當使用標籤時，Clyde 會向您發送臨時訊息。"
                },
                tagsList: {
                    label: "標籤列表",
                    description: ""
                }
            },
            command: {
                tags: {
                    description: "管理您自己的標籤",
                    option: {
                        create: {
                            description: "建立一個新標籤",
                            name: "將觸發回應的標籤名稱",
                            message: "當您使用此主題標籤時將發送的訊息"
                        },
                        list: {
                            description: "列出所有標籤"
                        },
                        delete: {
                            description: "刪除標籤",
                            name: "待刪除的標籤名稱"
                        },
                        preview: {
                            description: "預覽標籤而不公開發布",
                            name: "要預覽的標籤名稱"
                        }
                    }
                }
            }
        },
        micLoopbackTester: {
            name: "麥克風環回測試儀",
            description: "將麥克風循環測試圖示新增至使用者面板",
            button: "麥克風測試週期"
        },
        middleClickTweaks: {
            name: "中鍵點擊調整",
            description: "各種中鍵點擊（滑鼠滾輪）改進，例如貼上和連結開啟。",
            option: {
                openScope: {
                    label: "開放範圍",
                    description: "它可以防止這些內容類型在單擊滑鼠中鍵時打開。",
                    links: "連結",
                    media: "媒體",
                    linksAndMedia: "連結和媒體",
                    none: "沒有任何"
                },
                pasteScope: {
                    label: "黏接範圍",
                    description: "在某些情況下，中鍵單擊會阻止貼上。",
                    always: "始終透過中鍵單擊阻止貼上",
                    focus: "僅當文字區域未聚焦時才阻止",
                },
                pasteThreshold: {
                    label: "黏合閾值",
                    description: "單擊中鍵後重新啟用貼上所需的毫秒數。"
                }
            }
        },
        moreCommands: {
            name: "更多指令",
            description: "Echo、Lenny、Mock 等",
            command: {
                echo: {
                    description: "以 Clyde（本地）身分傳送訊息"
                },
                lenny: {
                    description: "傳送萊尼臉"
                },
                mock: {
                    description: "取笑別人（MOCK People）"
                },
                wordcount: {
                    description: "計算訊息中的字數",
                    response: "該訊息包含 {{count}} 個單字。"
                },
                flipcoin: {
                    description: "拋硬幣並回傳結果",
                    heads: "寫作",
                    tails: "圖拉",
                    response: "錢{{result}}到了。"
                },
                ask: {
                    description: "提出並回答是/否問題",
                    yes: "是的",
                    no: "不",
                    maybe: "或許",
                    askAgain: "稍後再問",
                    definitelyNot: "絕對不是",
                    itIsCertain: "絕對是的"
                },
                randomanimal: {
                    description: "返回隨機動物圖像",
                    animal: "選擇你的動物",
                    cat: "貓",
                    dog: "狗",
                    response: "抱歉，目前無法檢索到動物影像"
                },
                randomnumber: {
                    description: "產生兩個值之間的隨機數",
                    min: "最低限度",
                    max: "最大值",
                    response: "{{min}} 與 {{max}} 之間的隨機數：{{number}}"
                },
                choose: {
                    description: "從給定選項中隨機選擇一個",
                    option: "逗號分隔的選項列表",
                    response: "我的選擇：{{選擇}}"
                },
                systeminfo: {
                    description: "顯示系統訊息",
                    platform: "平台",
                    deviceType: "設備類型",
                    mobile: "美孚",
                    desktop: "桌面",
                    browser: "掃描器",
                    cpuCores: "CPU核心",
                    memory: "記憶",
                    screen: "螢幕",
                    languages: "迪爾",
                    network: "白色的",
                    online: "在線的",
                    offline: "離線",
                    failedToFetch: "無法檢索系統資訊",
                    unknown: "未知"
                },
                getuptime: {
                    description: "顯示客戶端正常運作時間",
                    response: "**客戶端正常運作時間**：{{uptime}} 分鐘"
                },
                gettime: {
                    description: "顯示當前時間",
                    response: "當前時間：{{time}}"
                },
                transform: {
                    description: "根據指定選項轉換文本",
                    transformation: {
                        description: "應用於文字的轉換類型",
                        lowercase: "將文字轉換為小寫",
                        uppercase: "將文字轉換為大寫",
                        localeLowercase: "將文字轉換為原生小寫",
                        localeUppercase: "將文字轉換為原生大寫",
                        same: "保持不變"
                    },
                    repeat: "會重複多少次？",
                    reverse: "是否反轉文字",
                    normalize: {
                        description: "文字規範化格式",
                        nfc: "標準化格式 C (NFC)",
                        nfd: "標準化表格 D (NFD)",
                        nfkc: "標準化格式 KC (NFKC)",
                        nfkd: "標準化格式 KD (NFKD)"
                    },
                    text: "要轉換的文本"
                }
            }
        },
        moreKaomoji: {
            name: "更多在販售的 顏文字 商品",
            description: "向 Discord 添加更多 Kaomoji。 ヽ(´▽`)/"
        },
        moreQuickReactions: {
            name: "更多快速反應",
            description: "改進了訊息上下文選單中的快速回應按鈕。",
            option: {
                reactionCount: {
                    label: "反應數",
                    description: "顯示的反應數 (0-42)"
                },
                frequentEmojis: {
                    label: "常用表情符號",
                    description: "使用常用的表情符號代替最喜歡的表情符號"
                },
                rows: {
                    label: "他們賣",
                    description: "顯示快速反應的行數"
                },
                columns: {
                    label: "專欄",
                    description: "要顯示的快速反應的列數"
                },
                compactMode: {
                    label: "緊湊型模組",
                    description: "它將按鈕縮放到原始大小的 75%，同時將內部表情符號放大到 125%。 表情符號將是原始大小的 93.75%。 建議至少使用5列"
                },
                scroll: {
                    label: "捲動",
                    description: "啟用滾動表情符號列表"
                }
            }
        },
        moreUserTags: {
            name: "更多用戶標籤",
            description: "新增網路鉤子和審核角色（所有者、管理員等）的標籤",
            tag: {
                webhook: {
                    name: "網路鉤子",
                    description: "該用戶是網路鉤子"
                },
                owner: {
                    name: "擁有者",
                    description: "伺服器的擁有者"
                },
                admin: {
                    name: "行政",
                    description: "具有管理員權限"
                },
                staff: {
                    name: "官方的",
                    description: "可以管理伺服器、通道或角色"
                },
                mod: {
                    name: "模組",
                    description: "可以管理訊息或踢出/禁止聯絡人"
                },
                vcmod: {
                    name: "參見模組",
                    description: "可以管理語音聊天"
                },
                chatmod: {
                    name: "聊天模式",
                    description: "可以管理訊息"
                }
            },
            modal: {
                example: "例子",
                tag: "票",
                customTextPlaceholder: "標籤上的文字（預設：{{displayName}}）",
                messages: "在訊息中顯示",
                memberList: "顯示在成員清單和個人資料中"
            },
            option: {
                dontShowForBots: {
                    label: "不向機器人顯示",
                    description: "顯示機器人的額外標籤（webhooks 除外）"
                },
                dontShowBotTag: {
                    label: "顯示機器人標籤",
                    description: "僅顯示額外標籤/隱藏 [APP]"
                },
                showWebhookTagFully: {
                    label: "顯示完整的 webhook 標籤",
                    description: "在追蹤的頻道中顯示完整的 webhook 標籤（例如公告）"
                },
                tagSettings: {
                    label: "標籤設定",
                    description: "待填補"
                }
            }
        },
        morse: {
            name: "莫爾斯電碼",
            description: "與莫爾斯電碼相互轉換的命令。",
            command: {
                morse: {
                    description: "翻譯成摩斯電碼或從摩斯電碼翻譯過來",
                    message: "要轉換的文本"
                }
            }
        },
        moyai: {
            name: "莫亞伊",
            description: "🗿🗿🗿🗿🗿🗿🗿🗿",
            option: {
                volume: {
                    label: "體積",
                    description: "🗿🗿🗿音量"
                },
                quality: {
                    label: "品質",
                    description: "🗿🗿🗿品質",
                    normal: "普通的",
                    hd: "高畫質"
                },
                triggerWhenUnfocused: {
                    label: "失焦時觸發",
                    description: "即使視窗未對焦也觸發🗿"
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
            name: "音樂控制",
            description: "多種服務的音樂控制和歌詞",
            option: {
                SpotifySectionTitle: {
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
                    description: "Spotify 開啟 URI 而不是 URL。 僅在安裝了 Spotify 後才有效，並且可能不適用於所有平台"
                },
                previousButtonRestartsTrack: {
                    label: "上一個按鈕重新開始歌曲",
                    description: "若播放時間超過3秒，按下上一曲鈕從頭開始播放目前歌曲"
                },
                TidalSectionTitle: {
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
                YtmSectionTitle: {
                    label: "YouTube 音樂",
                    description: "此設定需要 {{app}}"
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
                ShowMusicNoteOnNoLyrics: {
                    label: "如果沒有歌詞則顯示註釋",
                    description: "找不到歌詞時顯示註釋圖標"
                },
                LyricsPosition: {
                    label: "歌詞地點",
                    description: "歌詞面板的位置",
                    above: "以上玩家",
                    below: "以下玩家"
                },
                LyricsProvider: {
                    label: "歌詞提供者",
                    description: "歌詞來源",
                    spotify: "Spotify（音樂匹配）",
                    LRCLIB: "LRCLIB"
                },
                TranslateTo: {
                    label: "翻譯成您的語言",
                    description: "翻譯歌詞 - 更改此項目會清除現有翻譯",
                    cleared: "翻譯已清理"
                },
                LyricsConversion: {
                    label: "歌詞轉換",
                    description: "自動翻譯或羅馬化歌詞",
                    none: "沒有任何",
                    translate: "轉變",
                    romanize: "羅馬化 Et"
                },
                FallbackProvider: {
                    label: "備份提供者",
                    description: "如果一個歌詞提供者失敗，請嘗試另一個"
                },
                ShowFailedToasts: {
                    label: "顯示失敗通知",
                    description: "歌詞載入失敗時顯示通知"
                },
                PurgeLyricsCache: {
                    label: "清除歌詞快取",
                    description: "刪除所有快取的歌詞和翻譯",
                    button: "清除快取",
                    cacheLyricsPurged: "歌詞快取已清除"
                }
            },
            context: {
                spotify: {
                    label: "Spotify 歌詞選單",
                    type: "Spotify {{type}} 選單",
                    copy: "複製 {{type}} 名稱",
                    link: "複製 {{type}} 鏈接",
                    open: "在 Spotify 中開啟 {{type}}",
                    album: "Spotify 專輯選單"
                },
                tidal: {
                    label: "潮汐歌詞選單",
                    lyrics: "潮汐",
                    type: "潮汐{{name}}菜單",
                    copy: "複製名稱 {{name}}",
                    open: "在 Tidal 上開啟 {{name}}",
                    album: "潮汐專輯菜單"
                },
                ytm: {
                    type: "YouTube 音樂 {{name}} 選單",
                    copy: "複製名稱 {{name}}",
                    open: "{{name}}’i YouTube Music’te Aç",
                    album: "YouTube 音樂專輯選單",
                    muted: "靜音"
                },
                lyrics: {
                    provider: "歌詞提供者",
                    saved: "記錄的",
                    notFound: "找不到同步歌詞"
                },
                copy: {
                    currentLyrics: "複製當前歌詞"
                }
            },
            alert: {
                lyricCopied: "歌詞已複製到剪貼簿！",
                noLyrics: "沒有歌詞",
                noLyricsTo: "沒有 {{translated}} 的歌詞",
                translate: "翻譯",
                romanize: "不要羅馬化",
                lyricsFetchFailed: "找不到歌詞",
                failedToFetchLyrics: "無法檢索{{translated}}",
                translation: "翻譯",
                romanization: "羅馬化",
                failedToFetchTranslation: "無法取得 {{translated}} 歌詞翻譯"
            },
            modal: {
                install: {
                    title: "如何安裝",
                    install: "{{link}} 從這裡安裝，然後前往 TidaLuna 設定 → 附加商店 → 安裝 @vmohammad/api",
                    tidaluna: "沒有露娜"
                },
                player: {
                    noPlaying: "沒有曲目播放",
                    artist: "藝術家：",
                    album: "專輯：",
                    noLyrics: "找不到歌詞:(",
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
                failed: "建立視窗失敗:(",
                checkConsole: "檢查控制台是否有錯誤",
                invalidUrlCustomApi: "自訂 API 伺服器 URL 格式無效"
            }
        },
        mutualGroupDMs: {
            name: "互助組DM",
            description: "在個人資料上顯示共享群組 DM",
            no: "沒有共同組",
            mutualGroup: "{{count}} 公共組",
            members: "成員",
            noGroup: "沒有公共群組 DM",
            header: "常見群體"
        },
        neverPausePreviews: {
            name: "永不暫停預覽",
            description: "即使應用程式失去焦點，也可以防止暫停通話/畫中畫預覽（螢幕分享、廣播等）。",
            about: "此附加元件會導致 Discord 消耗比平常更多的資源。"
        },
        newGuildSettings: {
            name: "新公會設置",
            description: "加入新伺服器時自動靜音並更改各種其他設置",
            context: {
                apply: "應用新的伺服器設定"
            },
            option: {
                guild: {
                    label: "伺服器靜音",
                    description: "伺服器自動靜音"
                },
                messages: {
                    label: "伺服器通知設定",
                    description: "伺服器通知設定",
                    all: "所有訊息",
                    mentions: "僅@提及",
                    nothing: "沒有任何",
                    default: "伺服器預設"
                },
                everyone: {
                    label: "禁止@everyone 和@here",
                    description: "禁止@everyone和@here通知"
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
                    label: "將移動通知靜音",
                    description: "自動靜音移動通知"
                },
                voiceChannels: {
                    label: "語音頻道",
                    description: "自動隱藏語音頻道中的姓名"
                }
            }
        },
        newPluginsManager: {
            name: "新插件管理器",
            description: "當新外掛程式新增至 Plexcord 時通知您的實用工具",
            modal: {
                title: "新插件和設置",
                description: "自您上次訪問以來已添加新的插件和設定。 請查看下面的新增內容。",
                tooltip: "本次會議結束",
                dontShowAgain: "不要再顯示",
                restartRequired: "以下插件需要重啟",
                restart: "重新啟動",
                continue: "德瓦姆·埃特"
            }
        },
        noAppsAllowed: {
            name: "不允許使用應用程式",
            description: "帶回機器人的 Bot 標籤"
        },
        noBlockedMessages: {
            name: "沒有阻止的消息",
            description: "完全隱藏聊天中所有被封鎖/忽略的訊息",
            option: {
                alsoHideIgnoredUsers: {
                    label: "也隱藏被忽略的用戶",
                    description: "還可以隱藏被忽略的用戶的訊息。"
                },
                disableNotifications: {
                    label: "禁用通知",
                    description: "隱藏被封鎖用戶的新訊息通知。 如果啟用了「預設使用者隱藏」功能並且觸發通知的使用者不在「例外使用者」清單中，則以下內容將始終適用。"
                },
                allowAutoModMessages: {
                    label: "允許 AutoMod 訊息",
                    description: "允許 AutoMod 發送的訊息不經過濾地通過。"
                },
                hideBlockedUserReplies: {
                    label: "隱藏被封鎖的用戶回复",
                    description: "隱藏來自您之前參與的線程中被封鎖的用戶的訊息。"
                },
                defaultHideUsers: {
                    label: "預設用戶隱藏",
                    description: "如果啟用，來自封鎖使用者的訊息將被完全隱藏，並且來自例外清單中使用者 ID 的訊息將被折疊（預設 Discord 行為）。 如果停用，來自封鎖使用者的訊息將被折疊，並且來自例外清單中的使用者 ID 的訊息將完全隱藏。"
                },
                overrideUsers: {
                    label: "例外用戶",
                    description: "要隱藏或折疊的以逗號分隔的用戶 ID 列表，而不是上面選擇的預設行為。"
                }
            }
        },
        noBulletPoints: {
            name: "無要點",
            description: "Markdown 項目符號 (•、-、*) 阻止您寫作（壞習慣）"
        },
        noDeepLinks: {
            name: "禁用深層鏈接",
            description: "停用試圖強制開啟 Discord 桌面應用程式的煩人的深度連結功能"
        },
        noDeleteSafety: {
            name: "禁止刪除安全",
            description: "刪除刪除伺服器時刪除「輸入伺服器名稱」要求",
            option: {
                confirmModal: {
                    label: "確認視窗",
                    description: "「您確定要刪除此伺服器嗎？」顯示確認視窗？"
                }
            },
            modal: {
                title: "刪除伺服器？",
                body: "如果這還不是很明顯的話，它將是永久性的。",
                confirm: "西爾",
                cancel: "取消"
            }
        },
        noDevtoolsWarning: {
            name: "無開發工具警告",
            description: "停用控制台上的“LET'S HIT”警告橫幅。 作為副作用，它還可以防止 Discord 隱藏其令牌，從而防止隨機註銷。"
        },
        noF1: {
            name: "F1號",
            description: "F1 停用幫助快捷方式。"
        },
        noMaskedUrlPaste: {
            name: "無屏蔽網址貼上",
            description: "當貼上連結並選擇文字時，它會阻止該連結被貼上為屏蔽 URL。"
        },
        noMirroredCamera: {
            name: "無鏡像相機",
            description: "它可以防止相機鏡像螢幕。"
        },
        noModalAnimation: {
            name: "無模態動畫",
            description: "停用所有模式視窗中的開啟/關閉動畫。"
        },
        noMosaic: {
            name: "無馬賽克",
            description: "刪除 Discord 的視覺馬賽克佈局。",
            option: {
                inlineVideo: {
                    label: "內嵌視頻",
                    description: "播放影片而不循環模式。"
                }
            }
        },
        noNitroUpsell: {
            name: "無硝基追加銷售",
            description: "透過欺騙客戶認為您擁有 Nitro，從 Discord 中刪除所有 Nitro 銷售通知。"
        },
        noOnboarding: {
            name: "沒有入職",
            description: "它透過跳過 Discord 的伺服器加入過程來允許更快的登入。"
        },
        noOnboardingDelay: {
            name: "無入職延遲",
            description: "繞過緩慢且煩人的伺服器加入延遲。"
        },
        noPendingCount: {
            name: "無待處理計數",
            description: "刪除了傳入好友請求、訊息請求和 Nitro 優惠的通知數量。",
            option: {
                hideFriendRequestsCount: {
                    label: "隱藏好友請求計數",
                    description: "隱藏傳入好友請求的數量"
                },
                hideMessageRequestsCount: {
                    label: "隱藏訊息請求計數",
                    description: "隱藏訊息請求數"
                },
                hidePremiumOffersCount: {
                    label: "隱藏 Nitro 優惠數",
                    description: "隱藏硝基優惠數量"
                }
            }
        },
        noProfileThemes: {
            name: "無個人資料主題",
            description: "它完全刪除了除了你自己之外的所有人的 Nitro 個人資料主題。"
        },
        noPushToTalk: {
            name: "無一鍵通",
            description: "繞過需要語音活動的一鍵通要求。"
        },
        noReplyMention: {
            name: "沒有回覆提及",
            description: "預設情況下禁用回复 ping。",
            option: {
                userList: {
                    label: "使用者列表",
                    description: "允許或免除 ping 操作的使用者清單（必須以逗號或空格分隔）"
                },
                roleList: {
                    label: "角色列表",
                    description: "允許或免除 ping 的角色清單（必須以逗號或空格分隔）"
                },
                shouldPingListed: {
                    label: "Ping 列出",
                    description: "行為",
                    dontPing: "Ping 列出的使用者/角色",
                    onlyPing: "僅 Ping 列出的使用者/角色"
                },
                inverseShiftReply: {
                    label: "倒檔響應行為",
                    description: "反轉 Discord 的輪班回覆行為（啟用時輪班回覆時提及使用者）"
                }
            }
        },
        normalizeMessageLinks: {
            name: "規範化訊息連結",
            description: "從訊息連結中刪除 canary/ptb 前綴。"
        },
        noRoleHeaders: {
            name: "無角色標頭",
            description: "我們都是平等的！ ！從成員清單中刪除角色頭銜。"
        },
        noRPC: {
            name: "無RPC",
            description: "Discord 禁用豐富的存在。"
        },
        noServerEmojis: {
            name: "來自伺服器表情符號",
            description: "伺服器不在自動完成選單中顯示表情符號。",
            option: {
                shownEmojis: {
                    label: "顯示表情符號",
                    description: "選擇要在自動完成選單中顯示的表情符號",
                    onlyUnicode: "僅限 Unicode 表情符號",
                    currentServer: "Unicode 表情符號和目前伺服器上的表情符號",
                    all: "Unicode 表情符號和所有伺服器表情符號（Discord 預設）"
                }
            }
        },
        noSystemBadge: {
            name: "無系統徽章",
            description: "停用工作列和系統托盤上的未讀通知標誌。"
        },
        notificationTitle: {
            name: "通知標題",
            description: "使桌面通知的資訊更豐富。"
        },
        notificationVolume: {
            name: "通知音量",
            description: "設定 Discord 通知的自訂音量。",
            option: {
                notificationVolume: {
                    label: "通知聲音",
                    description: "通知音量"
                }
            }
        },
        noTypingAnimation: {
            name: "無打字動畫",
            description: "停用聊天中的打字動畫。"
        },
        noUnblockToJump: {
            name: "無法跳躍",
            description: "它允許您跳過來自被封鎖或被忽略的用戶（可能還有垃圾郵件發送者）的訊息，而無需取消封鎖。"
        },
        onePingPerDM: {
            name: "OnePingPerDM",
            description: "即使用戶在私訊中連續發送未讀訊息，您也只會收到一則聲音通知。",
            option: {
                channelToAffect: {
                    label: "受影響的管道類型",
                    description: "選擇插件將影響的 DM 類型",
                    both: "兩個都",
                    user: "使用者私訊",
                    group: "群組私訊"
                },
                allowMentions: {
                    label: "@AllowMentions",
                    description: "取得@提及的聲音通知"
                },
                allowEveryone: {
                    label: "允許@everyone",
                    description: "在群組 DM 中取得 @everyone 和 @here 的聲音通知"
                },
                ignoreUsers: {
                    label: "要忽略的用戶",
                    description: "使用者 ID 永遠不會限制通知（以逗號 + 空格分隔）"
                },
                alwaysPlaySound: {
                    label: "始終播放聲音",
                    description: "即使通知聲音已停用也播放聲音"
                }
            }
        },
        openInApp: {
            name: "在應用程式中打開",
            description: "在相關應用程式中打開鏈接，而不是在瀏覽器中打開",
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
                    description: "在 Epic Games Launcher 中開啟 Epic Games 鏈接"
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
                    description: "在 VRChat 應用程式中開啟 VRChat 鏈接"
                }
            },
            notification: {
                open: "在本機應用程式中開啟鏈接"
            }
        },
        overrideForumDefaults: {
            name: "覆蓋論壇預設值",
            description: "允許您覆蓋預設的論壇佈局/排序順序。 您仍然可以逐個頻道進行更改。",
            option: {
                defaultLayout: {
                    label: "預設佈局",
                    description: "選擇用作預設佈局的佈局",
                    list: "清單",
                    gallery: "畫廊"
                },
                defaultSortOrder: {
                    label: "預設排序順序",
                    description: "選擇預設使用的排序順序",
                    recentlyActive: "最後活躍",
                    datePosted: "發布日期"
                }
            }
        },
        partyMode: {
            name: "派對模式",
            description: "讓您使用派對模式，因為派對永遠不會結束✨",
            option: {
                superIntensePartyMode: {
                    label: "超激烈的派對模式",
                    description: "聚會密度",
                    normal: "普通的",
                    better: "更好的",
                    projectX: "X專案"
                }
            }
        },
        pauseInvitesForever: {
            name: "永遠暫停邀請",
            description: "它恢復了 Discord 愚蠢地刪除的“無限期暫停邀請”選項。",
            pauseIndefinitely: "無限期暫停"
        },
        permissionFreeWill: {
            name: "許可自由意志",
            description: "停用頻道權限管理中的客戶端限制。",
            option: {
                lockout: {
                    label: "僵局",
                    description: "繞過權限崩潰保護（「您確定要這樣做嗎？」）"
                },
                onboarding: {
                    label: "起始要求",
                    description: "繞過可能使伺服器不相容的入職要求（「此變更可能使您的伺服器不相容[...]」）"
                }
            }
        },
        permissionsViewer: {
            name: "權限檢視器",
            description: "允許您查看使用者或頻道擁有的權限以及伺服器的角色。",
            view: "查看權限",
            option: {
                permissionsSortOrder: {
                    label: "權限排序順序",
                    description: "用於確定角色如何向使用者授予特定權限的排序方法",
                    highest: "最高角色",
                    lowest: "最低的角色"
                }
            },
            icon: {
                denied: "被拒絕",
                allowed: "允許",
                notOverwritten: "未覆蓋"
            },
            context: {
                permissions: "權限"
            },
            modal: {
                title: "權限",
                noPermissions: "沒有權限顯示！",
                owner: "擁有者",
                grantedBy: "寬容的",
                serverOwner: "伺服器擁有者",
                ownerRole: "擁有者",
                sortingBy: "{{method}} 依優先權排序",
                highest: "最高角色",
                lowest: "最低的角色",
                details: "角色詳情"
            }
        },
        petpet: {
            name: "寵物寵物",
            description: "新增 /petpet 命令以從任何圖像建立 petpet gif",
            command: {
                petpet: {
                    description: "建立寵物 gif。 您只能指定其中一個影像選項",
                    delay: "每幀之間的延遲。 預設值為 20。",
                    resolution: "gif 的解析度。 預設值為 120。如果您輸入了一個瘋狂的數字並且 Discord 凍結了，那是您的錯。",
                    image: "使用的圖像附件",
                    url: "取得圖片的URL",
                    user: "其頭像將用作圖像的用戶",
                    noServerPfp: "使用“用戶”選項時使用普通頭像而不是特定於伺服器",
                    error: {
                        noImage: "沒有指定圖片！",
                        delayTooLow: "延遲必須至少為 20。",
                    }
                }
            },
            error: {
                uploadNotImage: "上傳的檔案不是圖像",
                fetchUserFailed: "檢索使用者失敗。 檢查控制台以取得更多資訊。",
                fetchImageFailed: "載入 {{url}} 時發生錯誤。 檢查控制台以取得更多資訊。"
            }
        },
        pictureInPicture: {
            name: "畫中畫",
            description: "為影片新增畫中畫功能（在「下載」按鈕旁）",
            tooltip: "切換畫中畫",
            option: {
                loop: {
                    label: "環形",
                    description: "是否循環畫中畫視頻"
                }
            }
        },
        pinDMs: {
            name: "PinDM",
            description: "允許您將私人頻道 (DM) 固定到 DM 清單的頂部。 您可以右鍵點選 DM 來固定/刪除或變更 DM 的順序。",
            context: {
                category: {
                    label: "DM 類別選單",
                    edit: "編輯類別",
                    up: "向上移動",
                    down: "下移",
                    delete: "刪除類別",
                    unnamed: "匿名的"
                },
                pin: {
                    label: "DM 薩比特",
                    addCategory: "類別 噁心"
                },
                unPin: {
                    label: "取消固定式 DM",
                    move: "移至類別"
                }
            },
            option: {
                pinOrder: {
                    label: "固定訂單",
                    description: "固定的 DM 應該以什麼順序顯示？",
                    lastMessage: "截至最後一則訊息日期",
                    custom: "私人（透過右鍵單擊頻道更改順序）"
                },
                canCollapseDmSection: {
                    label: "可折疊固定部分",
                    description: "使未分類的 DM 部分可折疊"
                },
                dmSectionCollapsed: {
                    label: "DM 部分縮小",
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
                    name: "姓名",
                    color: "顏色",
                    save: "節省",
                    create: "創造"
                }
            }
        },
        pingNotifications: {
            name: "Ping 通知",
            description: "可自訂的通知和改進的提及格式",
            option: {
                friends: {
                    label: "朋友們",
                    description: "當您的朋友在伺服器上發送訊息時收到通知"
                },
                mentions: {
                    label: "提及",
                    description: "當有人直接 @提及您時收到通知"
                },
                dms: {
                    label: "DM'ler",
                    description: "取得私訊 (DM) 通知"
                },
                showInActive: {
                    label: "在活躍頻道上顯示",
                    description: "即使目前活動的頻道也顯示通知"
                },
                ignoreMuted: {
                    label: "忽略靜音",
                    description: "繞過來自靜音伺服器、頻道或使用者的通知"
                }
            },
            unknown: "未知",
            dm: "DM",
            groupDM: "小組DM",
            title: "頻道 {{channelName}} 上的 {{username}}"
        },
        pinIcon: {
            name: "引腳圖標",
            description: "為固定訊息新增固定圖示。"
        },
        plainFolderIcon: {
            name: "普通資料夾圖標",
            description: "它不會在資料夾中顯示小伺服器圖示。"
        },
        platformIndicators: {
            name: "平台指標",
            description: "為使用者新增平台指示器（桌面、行動裝置、Web...）。",
            embeddedTooltip: "安慰",
            vrTooltip: "虛擬實境",
            option: {
                list: {
                    label: "清單",
                    description: "在成員清單中顯示指標"
                },
                badges: {
                    label: "徽章",
                    description: "在用戶個人資料上將指標顯示為徽章"
                },
                messages: {
                    label: "留言",
                    description: "顯示訊息內的指示器"
                },
                colorMobileIndicator: {
                    label: "為您的行動顯示器上色",
                    description: "確定行動指示器是否採用使用者狀態顏色。"
                },
                showBots: {
                    label: "顯示機器人",
                    description: "確定是否在機器人中顯示平台指示器"
                }
            }
        },
        platformSpoofer: {
            name: "平台欺騙者",
            description: "模擬您所在的任何平台或設備",
            about: "我們不能保證此附加元件將保護您免受警告或禁止。",
            platform: {
                desktop: "不和諧客戶端",
                web: "不和諧網",
                ios: "不和諧 iOS",
                android: "不和諧安卓",
                xbox: "嵌入式不和諧",
                playstation: "嵌入式不和諧",
                vr: "虛擬實境"
            },
            option: {
                platform: {
                    label: "平台",
                    description: "您想以哪個平台的身份出現？",
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
            name: "Plexcord工具箱",
            description: "在應用程式列中新增一個按鈕，用於託管 Plexcord 快速操作。",
            tooltip: "Plexcord 工具箱",
            context: {
                openLog: "開啟通知日誌",
                enableQuickCSS: "啟用 QuickCSS",
                openQuickCSS: "開啟 QuickCSS",
                openSettings: "開啟設定",
                manageThemes: "管理主題"
            },
            option: {
                showPluginMenu: {
                    label: "顯示插件選單",
                    description: "在 Plexcord Toolbox 中顯示插件選單"
                }
            }
        },
        polishWording: {
            name: "波蘭語措辭",
            description: "它會進行細微的編輯，使您的訊息看起來更漂亮並且語法更好。 查看設定",
            option: {
                quickDisable: {
                    label: "快速停用",
                    description: "快速停用。 關閉訊息編輯而無需重新啟動應用程式。"
                },
                blockedWords: {
                    label: "被阻止的單字",
                    description: "不大寫的單字（用逗號分隔）。"
                },
                fixApostrophes: {
                    label: "修復撇號",
                    description: "確保縮寫包含撇號。"
                },
                expandContractions: {
                    label: "開放縮寫",
                    description: "它將縮寫轉換為其顯式形式（例如 Don't -> Do not）。"
                },
                fixCapitalization: {
                    label: "大小寫編輯",
                    description: "允許句子以大寫字母開頭。"
                },
                fixPunctuation: {
                    label: "正確的標點符號",
                    description: "編輯標點符號周圍的空格。"
                },
                fixPunctuationFrequency: {
                    label: "標點頻率",
                    description: "在句子末尾添加句號的頻率百分比（此功能可能會困擾某些人）。",
                }
            }
        },
        previewMessage: {
            name: "預覽留言",
            description: "它允許您在發送訊息之前預覽訊息。",
            tooltip: "預覽訊息"
        },
        profileSets: {
            name: "輪廓集",
            description: "它允許您保存設定檔預設並透過「設定」中的設定檔部分載入它們。",
            toast: {
                importFailed: "無法導入設定檔預設。 該文件可能無效。",
            },
            option: {
                avatarSize: {
                    label: "頭像尺寸",
                    description: "設定檔預設清單中的頭像尺寸"
                },
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
                importText: "此部分中您已有 {{existingCount}} 個個人資料。 您想覆蓋它們還是與匯入的設定檔合併？",
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
            }
        },
        questify: {
            name: "質疑",
            description: "透過一系列功能增強您的任務體驗，或者如果您不想要這些功能，請完全停用它們。",
            quests: "任務",
            context: {
                quest: {
                    label: "任務按鈕選單",
                    ignore: "標記全部忽略",
                    reset: "重置忽略列表",
                    fetch: "獲取任務",
                    markAsIgnored: "標記為忽略",
                    unmarkAsIgnored: "刪除忽略",
                    stopAuto: "停止自動完成",
                    copyQuestID: "複製任務 ID",
                    startAuto: "啟動自動完成"
                }
            },
            settings: {
                questButton: {
                    title: "任務按鈕",
                    description: "顯示任務按鈕，其中帶有可選指示器，用於指示伺服器清單中無人認領的任務。",
                    leftClick: "左鍵點擊操作",
                    middleClick: "中鍵單擊操作",
                    rightClick: "右鍵單擊操作",
                    visibility: "按鈕可見性",
                    unclaimedIndicator: "主動提供的指標",
                    badgeColor: "徽章顏色",
                    rewardDisplay: "獎品展示",
                    includedRewardTypes: "包含的獎勵類型",
                    includedRewardTypesDesc: "當播放按鈕可見性、徽章計數和警報聲音時，僅將具有這些獎勵類型的任務計為無人認領。",
                    selectRewardTypes: "選擇要包含在無人認領計數中的獎勵類型...",
                    noRewardType: "沒有受支援的具有此名稱的任務功能。",
                    default: "預設",
                    disable: "停用"
                },
                questFeatures: {
                    title: "任務特點",
                    description: "更改特定任務屬性。",
                    popupWarning: "對於已完成的任務和任務進度跟踪，將忽略 {{disablePopup}} 選項。",
                    videoQuestInfo: "{{completeVideo}} 選項將等待影片任務的持續時間並自動標記為已完成。",
                    gameQuestInfo: "同樣，{{completeGame}} 選項將等待遊戲任務的持續時間並自動標記為已完成。 僅官方桌面用戶端支援此選項。",
                    manualStartWarning: "您必須手動啟動任務。 第一次單擊會在背景啟動任務。 對於視訊任務，後續點擊將照常開啟視訊模式。 若要取消任務，您可以開啟任務圖區塊中的上下文功能表並選擇 {{stopAuto}}。",
                    tosWarning: "使用任何這些選項都違反 Discord 的服務條款。 使用風險自負。",
                    selectFeatures: "選擇要變更的任務屬性。",
                    disablePopup: "禁用帳戶面板上的任務彈出窗口",
                    completeVideo: "在後台完成視訊任務",
                    completeGame: "在後台完成遊戲任務",
                    stopAuto: "停止自動完成"
                },
                restyleQuests: {
                    title: "重新格式化任務",
                    description: "使用可選主題顏色突出顯示任務以提高可見性。",
                    precedenceNote: "即使任務被忽略，請求的和過期的任務樣式也將優先。",
                    gradientStyle: "漸層風格",
                    assetPreload: "資產引導程式",
                    unclaimed: "不請自來的",
                    claimed: "已請求",
                    ignored: "被忽略",
                    expired: "已到期",
                    intenseGradient: "密集重鑄漸變",
                    defaultGradient: "預設重鑄漸變",
                    blackGradient: "微妙的黑色漸變",
                    noGradient: "無漸變",
                    loadAllAssets: "在頁面載入時載入所有任務資源",
                    loadDuringScroll: "在頁面滾動期間載入任務資源"
                },
                reorderQuests: {
                    title: "重新排序任務",
                    description: "根據任務的狀態對任務進行排序。 當在任務頁面上選擇“Questify”排序選項時適用。",
                    formatNote: "逗號分隔清單必須包含以下所有內容：{{items}}。",
                    placeholder: "您必須添加 UNCLAIMED、CLAIMED、IGNORED、EXPIRED 全部",
                    invalidFormat: "格式無效。",
                    unclaimedSubsort: "無人認領的子等級",
                    claimedSubsort: "聲稱的子等級",
                    ignoredSubsort: "被忽略的子目",
                    expiredSubsort: "過期子等級",
                    addedNewest: "新增（最新）",
                    addedOldest: "添加（最舊的）",
                    expiredRecent: "已過期（最新）",
                    expiredLeast: "已過期（至少最新）",
                    expiringSoon: "即將到期（最近）",
                    expiringLate: "過期（最新）",
                    claimedRecent: "請求（最新）",
                    claimedLeast: "已請求（至少最新）",
                    ignoredQuestProfile: "忽略的任務設定檔",
                    sharedProfile: "共用：忽略此客戶端共用上的所有帳戶。",
                    privateProfile: "私人：此客戶端上的所有帳戶都有單獨的忽略。",
                    rememberSort: "記住排序選擇",
                    rememberFilter: "記住過濾器選擇",
                    yes: "是的",
                    no: "不",
                    rememberNote: "此排序和篩選器選擇是指「任務」頁面上的內建排序和篩選器選項。 只有在任務頁面上選擇「Questify」排序選項時，上述自訂排序才適用。 如果停用調用，則每次開啟「任務」頁面時都會重設排序或篩選選項。"
                },
                fetchingQuests: {
                    title: "獲取任務",
                    description: "配置從 Discord 取得任務的頻率並為新任務設定警報。",
                    defaultBehavior: "預設情況下，Discord 僅在安裝任務並且您造訪任務頁面時才顯示任務。 這意味著如果沒有下面定義的獲取間隔，該插件將不會收到全天新增的新任務的通知。",
                    requirement: "這取決於任務按鈕是否處於活動狀態並設定為 {{unclaimed}}，或設定為 {{always}} 且啟用了無人認領的 {{pill}}、{{badge}} 或 {{both}} 指標。 否則，無需定期獲取任務。",
                    blockWarning: "另外，如果 {{questFeatures}} 設定中封鎖了 {{fetchingQuests}}，則此操作將無法運作。",
                    fetchInterval: "取得範圍",
                    alertSound: "警告聲",
                    intervalPlaceholder: "選擇或輸入 30 分鐘到 12 小時之間的間隔。",
                    intervalFeedback: "間隔時間應在 30 分鐘到 12 小時之間。",
                    soundPlaceholder: "選擇聲音或提供自訂聲音 URL。",
                    soundFeedback: "找不到音訊或 URL 不是來自受支援的網域。",
                    disabled: "殘障人士",
                    minutes: "一分鐘",
                    minute: "一分鐘",
                    hours: "片刻",
                    hour: "片刻",
                    thirtyMinutes: "30分鐘",
                    oneHour: "1 時刻",
                    threeHours: "3 時刻",
                    sixHours: "6 時刻",
                    twelveHours: "12 時刻",
                    customSound: "客製化聲音"
                },
                disableOptions: {
                    everything: "停用一切",
                    discovery: "停用探索選項卡",
                    dms: "停用 DM 中的任務標籤",
                    fetching: "停用任務獲取",
                    popup: "禁用帳戶面板上方的彈出窗口",
                    sponsored: "禁用任務頁面上的贊助橫幅",
                    badge: "停用使用者個人資料上的徽章",
                    inventory: "禁用禮品庫存運輸通知",
                    friendsList: "目前正在積極促銷的好友列表",
                    membersList: "成員清單活躍播放圖標",
                    gameQuests: "在後台完成遊戲/活動挑戰",
                    videoQuests: "在後台完成影片觀看任務",
                    achievementQuests: "在背景完成活動任務",
                    mobileDesktop: "使行動任務與桌面相容",
                    notifyOnComplete: "任務完成時通知我"
                },
                options: {
                    always: "總是",
                    unclaimed: "不請自來的",
                    never: "絕不",
                    pill: "哈普",
                    badge: "徽章",
                    both: "他們兩位",
                    none: "沒有任何",
                    openQuests: "開放任務",
                    contextMenu: "內容選單",
                    pluginSettings: "插件設定",
                    nothing: "沒有什麼",
                    orbs: "球體",
                    nitroCodes: "硝基代碼",
                    rewardCodes: "獎勵代碼",
                    inGameItems: "遊戲內物品",
                    profileCollectibles: "個人資料集"
                }
            },
            option: {
                disableQuests: {
                    label: "停用任務",
                    description: "選擇要停用的任務功能。"
                },
                disableQuestsEverything: {
                    label: "停用一切",
                    description: "停用所有任務功能。"
                },
                disableQuestsFetchingQuests: {
                    label: "停用任務獲取",
                    description: "停用從 Discord 取得任務。"
                },
                disableQuestsDirectMessagesTab: {
                    label: "停用 DM 中的任務標籤",
                    description: "停用「私訊」頁面上的「任務」標籤。"
                },
                disableQuestsDiscoveryTab: {
                    label: "停用探索選項卡",
                    description: "停用探索頁面上的任務標籤。"
                },
                disableQuestsPageSponsoredBanner: {
                    label: "禁用任務頁面上的贊助橫幅",
                    description: "停用「任務」頁面上的贊助橫幅。"
                },
                disableQuestsPopupAboveAccountPanel: {
                    label: "禁用帳戶面板上的彈出窗口",
                    description: "停用帳戶面板頂部的任務彈出視窗。"
                },
                disableQuestsBadgeOnUserProfiles: {
                    label: "停用使用者個人資料上的徽章",
                    description: "停用使用者設定檔上的任務徽章。"
                },
                disableQuestsGiftInventoryRelocationNotice: {
                    label: "禁用禮品庫存移動通知",
                    description: "禮物清單停用任務移動通知。"
                },
                disableFriendsListActiveNowPromotion: {
                    label: "禁用好友清單目前正在進行的促銷活動",
                    description: "禁用朋友玩的遊戲的任務促銷。"
                },
                disableMembersListActivelyPlayingIcons: {
                    label: "停用成員清單中的主動播放圖標",
                    description: "停用成員清單中的活動播放圖示。"
                },
                makeMobileQuestsDesktopCompatible: {
                    label: "使行動任務與桌面相容",
                    description: "使僅限行動裝置的任務與桌面相容。"
                },
                completeVideoQuestsInBackground: {
                    label: "在後台完成視訊任務",
                    description: "視訊時間結束後在背景完成視訊任務。"
                },
                completeGameQuestsInBackground: {
                    label: "在後台完成遊戲任務",
                    description: "遊戲時間結束後在背景完成遊戲任務。"
                },
                completeAchievementQuestsInBackground: {
                    label: "在背景完成活動任務",
                    description: "在後台完成活動挑戰。"
                },
                notifyOnQuestComplete: {
                    label: "任務完成時通知我",
                    description: "任務自動完成時顯示通知。"
                },
                questButton: {
                    label: "任務按鈕",
                    description: "在伺服器清單中顯示任務按鈕。"
                },
                questButtonDisplay: {
                    label: "任務按鈕外觀",
                    description: "伺服器清單中的任務按鈕使用哪種顯示類型。"
                },
                questRewardIncludeRewardCode: {
                    label: "包含獎勵代碼",
                    description: "查看任務計數時包括帶有獎勵代碼的任務。"
                },
                questRewardIncludeNitroCode: {
                    label: "包括 Nitro 代碼",
                    description: "查看任務計數時包括 Nitro 編碼任務。"
                },
                questRewardIncludeInGame: {
                    label: "包括遊戲內獎勵",
                    description: "查看任務計數時，包括有遊戲內獎勵的任務。"
                },
                questRewardIncludeCollectibles: {
                    label: "包括收藏",
                    description: "查看任務計數時將任務包含在可收集物品中。"
                },
                questRewardIncludeOrbs: {
                    label: "包括球體",
                    description: "查看任務計數時包括贏得全球獎的任務。"
                },
                questButtonUnclaimed: {
                    label: "任務按鈕無人認領指示器",
                    description: "伺服器清單中任務按鈕上的無人認領指示器使用哪種顯示類型。"
                },
                questButtonBadgeColor: {
                    label: "任務按鈕徽章顏色",
                    description: "伺服器清單中任務按鈕徽章的顏色。"
                },
                questButtonLeftClickAction: {
                    label: "左鍵點擊操作",
                    description: "左鍵點選伺服器清單中的任務按鈕時要執行的動作。"
                },
                questButtonMiddleClickAction: {
                    label: "中鍵單擊操作",
                    description: "在伺服器清單中按一下任務按鈕時要執行的動作。"
                },
                questButtonRightClickAction: {
                    label: "右鍵單擊操作",
                    description: "右鍵點選伺服器清單中的任務按鈕時要執行的動作。"
                },
                fetchingQuests: {
                    label: "獲取任務",
                    description: "從 Discord 中帶來任務。"
                },
                fetchingQuestsInterval: {
                    label: "任務獲取範圍",
                    description: "從 Discord 取得任務的時間間隔（以秒為單位）。"
                },
                fetchingQuestsAlert: {
                    label: "任務獲取警報",
                    description: "偵測到新任務時將播放的聲音。"
                },
                fetchingQuestsAlertVolume: {
                    label: "任務取得警報量",
                    description: "偵測到新任務時播放的音量。"
                },
                restyleQuests: {
                    label: "重新格式化任務",
                    description: "自訂任務頁面上任務圖塊的外觀。"
                },
                restyleQuestsUnclaimed: {
                    label: "重新格式化任務 - 主動提供",
                    description: "任務頁面上無人認領的任務圖塊的顏色。"
                },
                restyleQuestsClaimed: {
                    label: "重新格式化任務 - 請求",
                    description: "任務頁面上已領取的任務圖塊的顏色。"
                },
                restyleQuestsIgnored: {
                    label: "重新格式化任務 - 忽略",
                    description: "任務頁面上忽略的任務圖塊的顏色。"
                },
                restyleQuestsExpired: {
                    label: "重新格式化任務 - 已過期",
                    description: "任務頁面上過期任務圖塊的顏色。"
                },
                restyleQuestsGradient: {
                    label: "重新格式化任務 - 漸層",
                    description: "任務圖塊中使用的漸層樣式。"
                },
                restyleQuestsPreload: {
                    label: "重新格式化任務 - 引導程式",
                    description: "嘗試為任務圖塊預先載入資源。"
                },
                reorderQuests: {
                    label: "重新排序任務",
                    description: "根據任務的狀態對任務進行排序。 留空以進行預設排序。 逗號分隔清單必須包含以下所有內容：UNCLAIMED、CLAIMED、IGNORED、EXPIRED。"
                },
                unclaimedSubsort: {
                    label: "無人認領的子等級",
                    description: "無人認領任務的子排序方法。"
                },
                claimedSubsort: {
                    label: "聲稱的子等級",
                    description: "請求任務的子排序方法。"
                },
                ignoredSubsort: {
                    label: "被忽略的子目",
                    description: "忽略任務的子排序方法。"
                },
                expiredSubsort: {
                    label: "過期子等級",
                    description: "過期任務的降序方法。"
                },
                unclaimedUnignoredQuests: {
                    label: "未請求的未忽略的任務",
                    description: "追蹤無人認領和未被忽略的任務數量。"
                },
                onQuestsPage: {
                    label: "在任務頁面上",
                    description: "使用者目前是否位於「任務」頁面上。"
                },
                triggerQuestsRerender: {
                    label: "觸發任務重新渲染",
                    description: "透過更改此設定來觸發任務頁面的重新呈現。"
                },
                ignoredQuestProfile: {
                    label: "忽略的任務設定檔",
                    description: "用於忽略任務的設定檔。"
                },
                rememberQuestPageSort: {
                    label: "記住任務頁面排序",
                    description: "記住「任務」頁面上上次使用的序列。"
                },
                rememberQuestPageFilters: {
                    label: "記住任務頁面過濾器",
                    description: "記住「任務」頁面上上次使用的篩選器。"
                },
                lastQuestPageSort: {
                    label: "最新任務頁面排名",
                    description: "記住「任務」頁面上上次使用的序列。"
                },
                lastQuestPageFilters: {
                    label: "最新任務頁面過濾器",
                    description: "記住「任務」頁面上上次使用的篩選器。"
                },
                ignoredQuestIDs: {
                    label: "忽略的任務 ID",
                    description: "被忽略的任務 ID 的陣列。"
                },
                resumeQuestIDs: {
                    label: "正在進行的任務 ID",
                    description: "在背景自動完成的任務 ID 陣列。"
                }
            },
            button: {
                questInProgressWithTime: "正在完成 ({{remainTime}})",
                completing: "正在完成",
                resume: "德瓦姆和 (~{{remainTime}})",
                complete: "完成 {{remainTime}}",
                completeImmediate: "完成（立即）",
                completed: "完全的"
            },
            reward: {
                orbs: "{{orbQuantity}} 球體位於 {{completingText}} 中。",
                article: "{{itemName}} 的 {{completingText}}。",
                unrecognized: "{{completingText}} 表示無法辨識的獎勵類型。"
            },
            notification: {
                completed: {
                    title: "工作完成了",
                    body: "{{questName}} 任務已完成。"
                }
            }
        },
        questionMarkReplacement: {
            name: "問號替換",
            description: "如果訊息僅包含問號，它將用所選字串取代所有問號。",
            option: {
                replace: {
                    label: "改變",
                    description: "替換為"
                }
            }
        },
        quickMention: {
            name: "快速提及",
            description: "在訊息操作欄中新增快速提及按鈕。",
            tooltip: "快速投注"
        },
        quickReply: {
            name: "快速回覆",
            description: "使用熱鍵回覆（ctrl + 向上/向下）和編輯（ctrl + shift + 向上/向下）訊息。",
            option: {
                shouldMention: {
                    label: "我應該提一下",
                    description: "預設情況下 Ping 回應",
                    noReplyMentionPlugin: "關注 NoReplyMention 插件（如果啟用）",
                    enabled: "有效的",
                    disabled: "殘障人士"
                },
                ignoreBlockedAndIgnored: {
                    label: "忽略阻止和忽略",
                    description: "瀏覽時忽略來自被封鎖/忽略的用戶的訊息"
                }
            }
        },
        quickThemeSwitcher: {
            name: "快速主題切換器",
            description: "使用鍵盤快速鍵在主題之間快速切換。",
            about: {
                title: "熱鍵",
                description: "使用 Ctrl/Cmd+Shift+箭頭鍵進行導航（左/右：在主題之間循環，向上：啟用，向下：停用）。",
                reload: "按 Ctrl/Cmd+Shift+Alt 刷新主題清單。"
            },
            modal: {
                added: "新增了 {{count}} 個新主題",
                removed: "已刪除 {{count}} 個主題",
                reloaded: "{{themeCount}} 主題已重新載入",
                addedLocal: "新增了 {{count}} 個本地主題",
                removedLocal: "已刪除 {{count}} 個原生主題",
            },
            option: {
                includeLocal: {
                    label: "包括原生主題",
                    description: "在清單中包含您裝置上的本機主題"
                },
                includeOnline: {
                    label: "包括線上主題",
                    description: "在清單中包括線上主題"
                },
                sortOrder: {
                    label: "排序方式",
                    description: "排序方式",
                    asc: "A'dan Z'ye",
                    desc: "茲登阿亞",
                    recent: "在兒子"
                },
                autoRefresh: {
                    label: "自動重新整理",
                    description: "偵測到變更時自動刷新主題列表"
                },
                showNotifications: {
                    label: "顯示通知",
                    description: "新增或刪除主題時顯示通知"
                }
            }
        },
        quoter: {
            name: "報價者",
            description: "讓您可以根據訊息創建鼓舞人心的引言圖像",
            context: {
                quote: "引述"
            },
            modal: {
                title: "4K'達亞卡拉",
                grayscale: "黑白",
                export: "出口",
                send: "傳送",
                saveAsGIF: "另存為 GIF",
                saveDescription: "將圖像儲存/發送為 GIF 而不是 PNG",
                showWatermark: "顯示浮水印",
                watermarkText: "Filigran Metni（最多 32 個字元）"
            },
            option: {
                quoteFont: {
                    label: "報價字體",
                    description: "引文文字的字體（作者/使用者名稱始終使用 M PLUS Rounded 1c）",
                    mPlusRounded: "M PLUS 圓形 1c",
                    openSans: "打開無字體",
                    momoSignature: "莫莫簽名",
                    lora: "勞拉",
                    merriWeather: "梅里韋瑟"
                },
                watermark: {
                    label: "花絲",
                    description: "自訂浮水印文字（最多 32 個字元）"
                },
                grayscale: {
                    label: "黑白",
                    description: "預設啟用黑白"
                },
                showWatermark: {
                    label: "顯示浮水印",
                    description: "預設顯示浮水印"
                },
                saveAsGif: {
                    label: "另存為 GIF",
                    description: "預設另存為 GIF"
                }
            }
        },
        randomVoice: {
            name: "隨機語音",
            description: "在靜音按鈕旁邊新增隨機語音通話加入按鈕。",
            tooltip: "隨機語音",
            context: {
                label: "聲音調節器",
                amountLabel: "使用者數量",
                spacesLabel: "空缺",
                voiceLabel: "SES 利米蒂",
                selfLabel: "您自己的設置",
                select: {
                    servers: "選擇伺服器",
                    list: "選擇清單",
                    filters: "選擇過濾器",
                    amount: "使用者數量",
                    userAmount: "{{amount}} 用戶",
                    parameters: "參數",
                    moreThan: "多於",
                    lessThan: "少於那個",
                    equalTo: "等於",
                    spaces: "空缺",
                    voice: "它的局限性"
                },
                filter: {
                    muted: "靜音",
                    deafened: "聾了",
                    camera: "相機",
                    stream: "廣播",
                    includeFilters: "包括過濾器",
                    avoidFilters: "避免過濾器"
                },
                reset: {
                    list: "重置清單"
                },
                voice: {
                    label: "聲音設定",
                    auto: {
                        mute: "自動靜音",
                        deafen: "自動隔音",
                        camera: "自動相機",
                        stream: "自動廣播",
                        leaveWhenEmpty: "當你有空時離開",
                        navigate: "自動導航",
                        stage: "避免舞台通道",
                        afk: "避免AFK頻道"
                    }
                },
                invalid: {
                    server: "無效伺服器"
                }
            },
            option: {
                userAmountOperation: {
                    label: "用戶數交易",
                    description: "選擇針對使用者數量的操作"
                },
                userAmount: {
                    label: "使用者數量",
                    description: "選擇使用者數量"
                },
                spacesLeftOperation: {
                    label: "職缺流程",
                    description: "選擇最大用戶數的操作"
                },
                spacesLeft: {
                    label: "空缺",
                    description: "選擇可用空間量"
                },
                vcLimitOperation: {
                    label: "音訊通道限制操作",
                    description: "選擇音訊通道限制的操作。"
                },
                vcLimit: {
                    label: "音訊通道限制",
                    description: "選擇音訊通道限制"
                },
                servers: {
                    label: "伺服器",
                    description: "要包含的伺服器"
                },
                autoNavigate: {
                    label: "自動導航",
                    description: "它會自動轉到音訊通道。"
                },
                autoCamera: {
                    label: "自動相機",
                    description: "自動開啟相機"
                },
                autoStream: {
                    label: "自動廣播",
                    description: "自動開始廣播"
                },
                selfMute: {
                    label: "自動靜音",
                    description: "當您加入音訊頻道時，它會自動將您的麥克風靜音。"
                },
                selfDeafen: {
                    label: "自動隔音",
                    description: "當您加入語音頻道時，它會自動使您耳聾。"
                },
                leaveEmpty: {
                    label: "當你有空時離開",
                    description: "當語音通道變空時，它會隨機尋找另一個呼叫。"
                },
                avoidStages: {
                    label: "避免舞台通道",
                    description: "避免加入舞台類型的音訊通道。"
                },
                avoidAfk: {
                    label: "避免AFK頻道",
                    description: "AFK 避免加入音訊頻道。"
                },
                video: {
                    label: "影片",
                    description: "搜尋打開攝影機的用戶"
                },
                stream: {
                    label: "廣播",
                    description: "搜尋正在廣播的用戶"
                },
                mute: {
                    label: "靜音",
                    description: "搜尋靜音的用戶"
                },
                deafen: {
                    label: "聾了",
                    description: "搜尋失聰用戶"
                },
                includeStates: {
                    label: "包括過濾器",
                    description: "允許包含特定的使用者狀態"
                },
                avoidStates: {
                    label: "避免過濾器",
                    description: "允許避免某些用戶情況"
                }
            },
            alert: {
                failed: "找不到音訊通道！"
            }
        },
        reactErrorDecoder: {
            name: "React錯誤解碼器",
            description: "React 將錯誤代碼轉換為人類可讀的訊息。"
        },
        readAllNotificationsButton: {
            name: "閱讀所有通知按鈕",
            description: "在通知面板中新增一個按鈕，只需按一下即可將所有通知標記為已讀。",
            button: "閱讀全部"
        },
        recentDMSwitcher: {
            name: "最近的DM切換器",
            description: "使用 Ctrl+Tab 在最近使用的 DM 之間切換（Ctrl+Shift+Tab 反向）",
            option: {
                visualStyle: {
                    label: "視覺風格",
                    description: "切換時出現的視覺指示器樣式",
                    overlay: "圖層（Alt+Tab 樣式）",
                    toast: "通知（狀態訊息）",
                    off: "關閉"
                },
                overlayMode: {
                    label: "圖層模式",
                    description: "圖層內容",
                    row: "最後對話線",
                    current: "僅可用",
                },
                amountOfUsers: {
                    label: "使用者數量",
                    description: "圖層上顯示的使用者數"
                },
                overlayRowLength: {
                    label: "層行長度",
                    description: "行中顯示的最近 DM 的數量"
                },
                overlayShowAvatars: {
                    label: "顯示圖層設定檔影像",
                    description: "在圖層上顯示使用者個人資料影像"
                },
                toastDurationMs: {
                    label: "通知時間（毫秒）",
                    description: "在圖層上顯示個人資料影像"
                },
                clearRdms: {
                    label: "清除 RDMS 列表",
                    description: "測試工具：清除RDM列表",
                    toast: "RDMS 歷史記錄已清除",
                    button: "清除 RDM 歷史記錄"
                }
            },
            modal: {
                unknown: "未知",
                dm: "DM",
                group: "小組DM",
                channel: "頻道",
                switchingTo: "切換到{{name}}"
            }
        },
        relationshipNotifier: {
            name: "關係通知者",
            description: "當朋友、群組聊天或伺服器刪除您時通知您。",
            option: {
                notices: {
                    label: "通知",
                    description: "刪除時在螢幕頂部顯示通知（如果您不想錯過任何通知，請使用此通知）。"
                },
                offlineRemovals: {
                    label: "離線刪除",
                    description: "如果您在離線狀態下開啟 Discord 時被刪除，請傳送通知。"
                },
                friends: {
                    label: "朋友們",
                    description: "當朋友將您從他們的清單中刪除時通知我"
                },
                friendRequestCancels: {
                    label: "好友請求取消",
                    description: "當好友請求被取消時通知我"
                },
                servers: {
                    label: "伺服器",
                    description: "從伺服器刪除時發出通知"
                },
                groups: {
                    label: "團體",
                    description: "從群組聊天中刪除時通知我"
                }
            },
            notification: {
                removedFriend: "{{user}} 已與您取消好友關係。",
                cancelledFriendRequest: "{{user}} 發送的好友請求已被取消。",
                removedFromServer: "您已從 {{server}} 中刪除。",
                removedFromGroup: "您已從 {{group}} 中刪除。",
                noLongerGroup: "您不再屬於{{group}}。",
                noLongerServer: "您不再位於 {{server}} 上。",
                noLongerFriend: "您不再是 {{user}} 的朋友。",
                friendRequestRevoked: "{{user}} 發送的好友請求已被撤銷。",
                ok: "好的"
            }
        },
        remix: {
            name: "混音",
            description: "在文件發送按鈕的右鍵選單中新增“重新混合”選項。 這將在簡單的影像編輯器中開啟影像，並讓您可以選擇將編輯後的影像直接傳送到聊天室。",
            label: "混音",
            button: {
                send: "傳送",
                close: "四分之一",
                brush: "刷子",
                erase: "撣子",
                crop: "莊稼",
                shape: "形狀",
                reset: "重置",
                clear: "清除"
            },
            editor: {
                choose: "選擇影像",
                browse: "戈札特",
                rectangle: "長方形",
                ellipse: "橢圓",
                line: "線",
                arrow: "好的",
                fill: "充滿"
            }
        },
        repeatMessages: {
            name: "重複訊息",
            description: "它允許您快速重新發送訊息。 如果您在按住 Shift 鍵的同時按一下“重複”，則會將其作為訊息的回復發送。",
            button: "重複（點擊）/重複並回覆（Shift + 點擊）",
            context: {
                repeat: "重複",
                repeatAndReply: "重複並回复"
            }
        },
        replaceGoogleSearch: {
            name: "取代Google搜尋",
            description: "它用不同的搜尋引擎取代了谷歌搜尋。",
            option: {
                customEngineName: {
                    label: "自訂引擎名稱",
                    description: "自訂搜尋引擎名稱"
                },
                customEngineURL: {
                    label: "自訂引擎 URL",
                    description: "您的搜尋引擎網址"
                },
                replacementEngine: {
                    label: "備份搜尋引擎",
                    description: "將備份搜尋引擎替換為特定搜尋引擎（而不是添加菜單）",
                    off: "關閉",
                    custom: "特種發動機",
                }
            },
            context: {
                label: "梅特尼阿拉",
                searchWith: "{{name}}阿拉的房子"
            }
        },
        replyPingControl: {
            name: "回覆PingControl",
            description: "允許您控制始終或從不 ping 訊息回复，還包括白名單功能",
            option: {
                alwaysPingOnReply: {
                    label: "始終回覆 Ping",
                    description: "每次有人回覆您的訊息時都會收到 ping 訊號"
                },
                replyPingWhitelist: {
                    label: "回應 Ping 白名單",
                    description: "輸入您希望始終收到 ping 回應的使用者 ID，以逗號分隔。"
                }
            }
        },
        replyTimestamp: {
            name: "回覆時間戳",
            description: "在回覆訊息預覽中顯示時間戳"
        },
        revealAllSpoilers: {
            name: "劇透全部揭曉",
            description: "按住 Ctrl 鍵點選劇透可顯示訊息中的所有劇透，Ctrl+Shift 可顯示整個聊天中的所有劇透"
        },
        reverseImageSearch: {
            name: "反向影像搜尋",
            description: "將反向圖像搜尋選項新增至圖像右鍵選單",
            context: {
                label: "搜尋圖片",
                all: "搜尋全部"
            }
        },
        reviewDB: {
            name: "評論資料庫",
            description: "評價其他使用者（為個人資料新增新的設定部分）",
            notification: {
                newReview: "您的個人資料中有新評論！",
                auth: {
                    error: "授權時發生錯誤",
                    successfully: "登入成功！",
                    failed: "授權失敗",
                    review: "請授權添加評論。",
                    opening: "授權視窗開啟...",
                    need: "您需要授權才能評估！"
                },
                error: {
                    fast: "您提出請求的速度太快了。 等待幾秒鐘，然後再試一次。",
                    fetching: "檢索評論時發生錯誤。",
                    action: {
                        failed: "無法聯繫到使用者 {{action}}",
                        success: "使用者已成功{{action}}"
                    }
                }
            },
            modal: {
                delete: {
                    title: "你確定嗎？",
                    description: "您真的要刪除此評論嗎？",
                    confirm: "西爾",
                    cancel: "取消",
                    error: "您必須登入才能刪除評論。",
                },
                report: {
                    title: "你確定嗎？",
                    description: "您真的要檢舉此評論嗎？",
                    confirm: "宣言",
                    cancel: "取消",
                    error: "您必須登入才能發表評論。",
                },
                block: {
                    title: "你確定嗎？",
                    description: "您真的要封鎖該用戶嗎？ 您將不再看到他們的評論。",
                    confirm: "堵塞",
                    cancel: "取消",
                    error: "您必須登入才能封鎖使用者。",
                },
                blocked: {
                    title: "被封鎖的用戶",
                    auth: "您尚未登入 ReviewDB。",
                    noBlocked: "沒有用戶被封鎖。",
                    fetch: "檢索被封鎖的使用者時出錯"
                },
                reviews: {
                    title: "用戶評論",
                    noUser: "似乎還沒有人評論過該用戶。 你可以成為第一名！",
                    noServer: "看起來還沒有人評論過這台伺服器。 你可以成為第一名！"
                }
            },
            button: {
                appeal: "異議",
                ok: "好的",
                more: "更多的",
                reply: "回覆@{{user}}",
                update: "更新@{{user}}的評論",
                review: "評論@{{user}}"
            },
            context: {
                view: "查看評論",
                blocked: "您封鎖了該用戶",
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
                    label: "評估通知",
                    description: "啟動時通知新評論"
                },
                showWarning: {
                    label: "顯示警告",
                    description: "在標題上方顯示尊重的警告"
                },
                hideTimestamps: {
                    label: "隱藏時間戳",
                    description: "隱藏評論的時間戳"
                },
                hideBlockedUsers: {
                    label: "隱藏被封鎖的用戶",
                    description: "隱藏您已封鎖的用戶的評論"
                },
                buttons: {
                    label: "按鈕",
                    manageBlocked: "管理被封鎖的用戶",
                    support: "支援ReviewDB開發",
                    website: "評論資料庫網站",
                    server: "ReviewDB 支援伺服器"
                }
            }
        },
        richMagnetLinks: {
            name: "富磁力連結",
            description: "將磁力連結視為訊息連結（帶預覽）",
            unknown: "未知的檔名"
        },
        roleColorEverywhere: {
            name: "角色色彩無所不在",
            description: "盡可能顯示頂級角色顏色",
            option: {
                chatMentions: {
                    label: "聊天提及",
                    description: "在聊天提及中顯示角色顏色（包括訊息框）"
                },
                memberList: {
                    label: "會員名單",
                    description: "在成員清單角色標題中顯示角色顏色"
                },
                voiceUsers: {
                    label: "語音用戶",
                    description: "在語音聊天使用者清單中顯示角色顏色"
                },
                reactorsList: {
                    label: "反應器列表",
                    description: "透過表情符號反應在使用者清單中顯示角色顏色"
                },
                pollResults: {
                    label: "調查結果",
                    description: "在調查結果中顯示角色顏色"
                },
                colorChatMessages: {
                    label: "為您的聊天訊息著色",
                    description: "根據作者的角色顏色對聊天訊息進行顏色設置"
                },
                messageSaturation: {
                    label: "訊息飽和度",
                    description: "訊息著色強度"
                }
            }
        },
        rpcEditor: {
            name: "RPC編輯器",
            description: "編輯任何 Rich Presence 內容和類型",
            option: {
                replacedAppIds: {
                    label: "更改的應用程式身分 (ID)",
                }
            },
            modal: {
                tutorial: {
                    title: "目前正在運行的事件的ID",
                    noRunning: "沒有跑步活動",
                    available: "可用變數",
                    variableText: "在所有欄位（貼文 URL 除外）中，您可以放置​​將自動替換為其原始內容的變數：",
                    more: "更多詳情",
                    details: {
                        leave: "若要保留欄位原樣，請將其留空。",
                        set: "鍵入「null」可隱藏狀態指示器中的欄位。",
                        reload: "您可能需要重新啟動 Discord 才能套用變更。"
                    }
                },
                settings: {
                    applyEdits: "將編輯應用到應用程式",
                    addNewApp: "新增應用程式",
                    appId: "應用程式ID",
                    invalidAppId: "無效的應用程式 ID",
                    newActivityType: "新事件類型",
                    activityTypes: {
                        playing: "玩",
                        watching: "觀看",
                        listening: "傾聽",
                        competing: "賽車",
                        streaming: "正在播出"
                    },
                    streamUrl: "直播 URL（必須是 YouTube 或 Twitch）",
                    invalidStreamUrl: "貼文網址無效",
                    newName: "新名字",
                    newDetails: "新細節",
                    newState: "新情勢",
                    largeImage: "大局",
                    smallImage: "剪貼畫",
                    text: "文字",
                    url: "網址",
                    firstLine: "（第一行）",
                    secondLine: "（第二行）",
                    thirdLine: "（第三行）",
                    alsoThirdLine: "（也是第三行）",
                    hideAssets: "隱藏圖像（大圖像和小圖像）",
                    hideTimestamps: "隱藏時間戳"
                }
            },
        },
        rpcStats: {
            name: "RPC統計",
            description: "顯示有​​關您作為 Rich Presence 的活動的統計信息",
            option: {
                assetURL: {
                    label: "視覺 URL",
                    description: "用於 RPC 的圖像。 如果留空，將使用您的個人資料圖片"
                },
                rpcTitle: {
                    label: "RPC 頭",
                    description: "您的 RPC 標題"
                },
                statDisplay: {
                    label: "查看統計數據",
                    description: "RPC 應該顯示什麼？ （您可能只允許一行）",
                    today: "今天發送的訊息數量",
                    alltime: "始終發送的訊息量",
                    listened: "本週收聽次數最多的專輯"
                },
                lastFMApiKey: {
                    label: "Last.fm API 金鑰",
                    description: "您的 Last.fm API 金鑰"
                },
                lastFMUsername: {
                    label: "Last.fm 使用者名稱",
                    description: "您的 Last.fm 使用者名稱"
                },
                albumCoverImage: {
                    label: "專輯封面圖片",
                    description: "使用專輯封面作為 RPC 圖像？ （如果選擇 Last.fm 顯示）"
                },
                lastFMStatFormat: {
                    label: "Last.fm 統計格式",
                    description: "Last.fm 統計資料該如何格式化？ $album 替換為專輯名稱，$artist 替換為藝術家名稱"
                }
            },
            noInfo: "目前沒有任何資訊:(",
            messagesToday: "今天發送的訊息：{{count}}",
            messagesAllTime: "始終發送的訊息：{{count}}"
        },
        saveFavoriteGIFs: {
            name: "保存最愛的 GIF",
            description: "匯出收藏的 GIF 鏈接",
            toolbox: "保存最愛的 GIF",
            title: "保存最愛的 GIF",
            command: {
                savegifs: {
                    description: "將所有喜愛的 GIF 連結儲存到文字文件"
                },
                saveworkinggifs: {
                    description: "測試所有您喜愛的 GIF 並僅保存那些仍然有效的"
                }
            },
            option: {
                showToolboxButton: {
                    label: "顯示工具箱按鈕",
                    description: "在 Plexcord Toolbox 中顯示「儲存最愛的 GIF」按鈕（需要重新啟動）"
                }
            },
            toast: {
                save: "GIF 已成功儲存為 {{filename}}",
                failed: "無法保存 GIF",
                no: "找不到最喜歡的 GIF！",
                testing: "{{count}} 個 GIF 正在測試，這可能需要一些時間...",
                noneWorking: "您保存的 GIF 似乎都不起作用。",
                saved: "{{broken}} 可能損壞的 GIF 已被過濾掉。 已儲存 {{saved}} 個可用的 GIF。"
            }
        },
        scheduledMessages: {
            name: "預定訊息",
            description: "安排訊息在特定時間或特定延遲後發送。",
            toolbox: {
                toggle: "查看預定訊息"
            },
            option: {
                maxMessagesPerMinute: {
                    label: "每分鐘最大訊息數",
                    description: "同一分鐘內可以在通道上發送的最大計劃訊息數。"
                },
                checkIntervalSeconds: {
                    label: "控制間隔（秒）",
                    description: "插件檢查是否有訊息要發送的頻率。"
                },
                showNotifications: {
                    label: "顯示通知",
                    description: "發送訊息時顯示通知（toast）。"
                },
                showPhantomMessages: {
                    label: "顯示幽靈訊息",
                    description: "在聊天中將預定訊息顯示為幽靈（臨時）訊息。"
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
                messageFailed: "無法發送預定訊息",
                maxMessagesReached: "已達到每個頻道每分鐘 {{max}} 訊息的最大限制",
                messageScheduled: "已計劃訊息！",
                messageRemoved: "預定訊息已刪除",
                allCleared: "所有預定訊息已清除"
            },
            button: {
                tooltipOn: "規劃模式開啟（按一下以停用，以滑鼠右鍵按一下查看清單）",
                tooltipOff: "規劃模式關閉（按一下啟用，右鍵單擊查看清單）"
            },
            accessory: {
                scheduledFor: "預定於 {{date}} {{timeLeft}}",
                remaining: {
                    days: "剩下 {{days}}g {{hours}} 秒",
                    hours: "還剩{{小時}}秒{{分鐘}}分鐘",
                    minutes: "還剩 {{分鐘}} 分鐘"
                }
            },
            scheduleModal: {
                title: "計劃留言",
                schedulingFor: "計劃頻道：{{channel}}",
                scheduleType: "規劃類型",
                delay: "延遲",
                specificTime: "具體時間",
                delayMinutes: "延誤（分鐘）",
                dateTime: "日期和時間",
                error: {
                    invalidDelay: "請輸入有效的延遲時間（至少 1 分鐘）",
                    invalidDateTime: "請選擇未來的日期和時間"
                },
                schedule: "計劃",
                cancel: "取消"
            },
            viewModal: {
                title: "預定訊息",
                clearAll: "全部清除",
                noMessages: "沒有預定訊息",
                delete: "西爾",
                close: "四分之一"
            }
        },
        searchFix: {
            name: "搜尋修復",
            description: "煩人的「我們把放大鏡掉了！」修復錯誤。",
            notPerfect: "此修復並不完美，因此您可能需要重新載入搜尋欄才能修復問題。",
            paragraph1: "Discord 只允許最大偏移 5000（這就是導致放大鏡錯誤的原因）。",
            paragraph2: "這意味著您可以準確地看到過去 5000 條訊息和未來 5000 條訊息（按最舊排序）。",
            paragraph3: "這個插件切換到相反的排序方法來繞過Discord的限制，",
            paragraph4: "但如果有一個很大的搜尋結果，並且您嘗試顯示任何一種排序方法都無法存取的訊息，",
            paragraph5: "該插件僅顯示偏移量 0（最新或最舊的消息，取決於排序方法）。"
        },
        secretRingToneEnabler: {
            name: "秘密鈴聲啟用器",
            description: "Discord 總是播放秘密版本的鈴聲（特殊鈴聲活動除外）",
            option: {
                onlySnow: {
                    label: "僅在雪鈴聲活動期間",
                    description: "只玩雪暈主題"
                }
            }
        },
        summaries: {
            name: "摘要",
            description: "在所有伺服器上啟用 Discord 的實驗性摘要功能，並顯示人工智慧產生的對話摘要",
            option: {
                summaryExpiryThresholdDays: {
                    label: "摘要刪除閾值（天）",
                    description: "摘要在被刪除之前的有效天數。 請注意，每個通道最多儲存 50 個摘要"
                }
            }
        },
        selfForward: {
            name: "自我轉發",
            description: "將目前頻道新增至轉送清單彈出窗口"
        },
        sendTimestamps: {
            name: "傳送時間戳",
            description: "使用聊天框按鈕和文字快捷方式輕鬆發送時間戳記。 閱讀擴充說明！",
            sample: {
                paragraph1: "若要快速傳送僅時間時間戳，請將「HH:MM」格式的時間戳記（包括反引號！）新增至您的訊息中",
                paragraph2: "請參閱下面的範例。 \n如果您需要更具體的訊息，請使用聊天欄中的「日期」按鈕！",
                examples: "範例："
            },
            modal: {
                title: "時間戳選擇器",
                light: "打開",
                dark: "黑暗的",
                format: "時間戳格式",
                preview: "預覽",
                insert: "添加",
                insertTimestamp: "新增時間戳"
            },
            option: {
                replaceMessageContents: {
                    label: "更改訊息內容",
                    description: "更改訊息內容中的時間戳"
                }
            }
        },
        serverInfo: {
            name: "伺服器資訊",
            description: "允許您查看有關伺服器的信息",
            context: {
                serverInfo: "伺服器資訊"
            },
            option: {
                sorting: {
                    label: "安排",
                    description: "使用者名稱或顯示名稱（如果適用）",
                    username: "使用者名稱",
                    displayname: "顯示名稱",
                    none: "排序"
                }
            },
            modal: {
                tab: {
                    serverInfo: "伺服器資訊",
                    friends: "朋友們",
                    mutualUsers: "普通用戶",
                    blockedUsers: "被封鎖的用戶",
                    ignoredUsers: "被忽略的用戶"
                },
                owner: "伺服器擁有者",
                loading: "載入中...",
                createdAt: "建立日期",
                joinedAt: "加入日期",
                vanityLink: "特別邀請連結",
                preferredLocale: "首選地區",
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
                roles: "滾筒"
            }
        },
        serverListIndicators: {
            name: "伺服器清單指示器",
            description: "將線上好友數量或伺服器數量新增至伺服器列表",
            friends: "朋友",
            servers: "主持人",
            option: {
                mode: {
                    label: "模組",
                    description: "在伺服器清單中顯示的模式",
                    friend: "僅在線好友數量",
                    server: "僅伺服器數量",
                    both: "伺服器及線上好友數"
                },
                useCompact: {
                    label: "緊湊型 Modu Kullan",
                    description: "使圖例僅與文字一起出現"
                }
            }
        },
        serverSearch: {
            name: "伺服器搜尋",
            description: "使用快速搜尋按鈕更好地瀏覽您的伺服器",
            tooltip: "我們買"
        },
        shikiCodeblocks: {
            name: "四季代碼區塊",
            description: "將 Shiki 支援的 VSCode 風格的程式碼區塊引入 Discord",
            option: {
                theme: {
                    label: "他",
                    description: "預設主題"
                },
                customTheme: {
                    label: "自訂主題",
                    description: "連結到自訂 VSCode 主題",
                    mustURL: "必須是有效的 URL",
                    mustJSON: "必須是 JSON 文件"
                },
                tryHljs: {
                    label: "備份到Hljs",
                    description: "使用較淺的預設 Discord 著色劑和主題。",
                    never: "絕不",
                    secondary: "選擇 Shiki 而不是 Highlight.js",
                    primary: "選擇Highlight.js 而不是Shiki",
                    always: "總是"
                },
                useDevIcon: {
                    label: "使用 Devicon 作為語言圖標",
                    description: "如何在程式碼區塊中顯示語言圖標",
                    disabled: "殘障人士",
                    colorless: "無色",
                    colored: "豐富多彩的"
                },
                bgOpacity: {
                    label: "背景不透明度",
                    description: "背景不透明度"
                }
            },
            button: {
                copy: "複製",
                copied: "複製了！"
            }
        },
        showAllMessageButtons: {
            name: "顯示所有訊息按鈕",
            description: "無論您是否按下 Shift 鍵，它始終顯示所有訊息按鈕。",
            option: {
                noShiftDelete: {
                    label: "不按 Shift 刪除",
                    description: "無需按 Shift 鍵即可刪除訊息。"
                },
                noShiftPin: {
                    label: "不移位固定",
                    description: "無需按 Shift 鍵即可固定訊息。"
                }
            }
        },
        showBadgesInChat: {
            name: "在聊天中顯示徽章",
            description: "在聊天中訊息作者姓名旁邊顯示徽章。",
            option: {
                showPlexcordDonor: {
                    label: "出示您的 Plexcord 捐贈者徽章",
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
                    modal: "拖曳以重新排序徽章；點擊可啟用/停用特定徽章類型。"
                }
            },
            badge: {
                plexcord: "Plexcord 支持者徽章",
                contributor: "Plexcord 參與者徽章",
                discordProfile: "Discord 簡介 rozetleri（HypeSquad、Discord Staff、Active Developer vb.）",
                nitro: "硝基徽章",
                staff: "不和諧法杖",
                partner: "合作夥伴伺服器擁有者",
                events: "HypeSquad 活動",
                bravery: "HypeSquad 勇敢",
                brilliance: "HypeSquad 輝煌",
                balance: "HypeSquad 平衡",
                bugHunter: "不和諧蟲子獵人",
                earlyVerifiedBotDeveloper: "早期驗證的機器人開發人員",
                earlySupporter: "早期支持者",
                moderatorProgram: "主持人計畫畢業生"
            },
            modal: {
                plexcordContributor: "Plexcord 參與者",
                discordNitro: "不和諧硝基",
                basic: "基本的",
                classic: "經典的"
            }
        },
        showConnections: {
            name: "顯示連接",
            description: "在用戶彈出卡片中顯示連結的帳戶",
            option: {
                iconSize: {
                    label: "圖示大小",
                    description: "圖示大小（像素）"
                },
                iconSpacing: {
                    label: "圖示空間",
                    description: "圖示邊距",
                    compact: "袖珍的",
                    cozy: "舒服的",
                    roomy: "廣闊"
                }
            }
        },
        showHiddenChannels: {
            name: "顯示隱藏頻道",
            description: "顯示您無權存取的頻道。",
            tooltip: "秘密頻道",
            option: {
                channelStyle: {
                    label: "頻道風格",
                    description: "用於顯示隱藏通道的樣式。",
                    classic: "經典的",
                    muted: "沉默的",
                    showUnreads: "顯示未讀",
                    mutedWithUnreads: "顯示靜音和未讀"
                },
                showMode: {
                    label: "顯示模式",
                    description: "用於顯示隱藏通道的模式。",
                    lock: "帶鎖圖示的簡約風格",
                    hidden: "靜音風格，右側隱藏眼睛圖標",
                    lockIconRight: "右側的鎖定圖標"
                },
                defaultAllowedUsersAndRolesDropdownState: {
                    label: "預設許可用戶和角色下拉狀態",
                    description: "私人頻道中是否預設開啟允許的使用者和角色選單"
                }
            },
            channelType: {
                text: "文字",
                announcement: "公告",
                forum: "論壇",
                voice: "塞斯",
                stage: "場景"
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
                threads: "主題",
                posts: "貼文",
                messages: "訊息",
                post: "郵政",
                message: "資訊",
                unknown: "未知",
                permissionDetails: "許可證詳情",
                thisIsA: "這是一個 {{status}} {{channelType}} 頻道",
                canNotSee: "您看不到該頻道的 {{type}} 部分。",
                guidelines: "但你可以看到他們的說明：",
                lastCreated: "最後創建的{{type}}：",
                lastPin: "最後置頂的貼文：",
                threadSlowmode: "預設執行緒慢速模式：",
                slowmode: "慢速模式：",
                bitrate: "比特率：",
                region: "區域：",
                automatic: "自動的",
                videoQuality: "視訊品質模式：",
                inactiveArchiveDuration: "歸檔前的預設非活動期 {{type}}",
                defaultLayout: "預設佈局：",
                defaultSort: "預設排序：",
                defaultReaction: "預設反應表情符號：",
                requireTag: "必須為此論壇中的貼文設定標籤。",
                availableTags: "可用標籤：",
                allowedUsersAndRoles: "允許的使用者和角色：",
                hideAllowedUsersAndRoles: "隱藏授權的使用者和角色",
                viewAllowedUsersAndRoles: "查看授權的使​​用者和角色"
            }
        },
        showHiddenThings: {
            name: "顯示隱藏的東西",
            description: "它顯示各種隱藏的和僅限版主的內容，無論權限如何。",
            option: {
                showTimeouts: {
                    label: "在聊天中顯示成員超時",
                    description: "在聊天中顯示成員超時圖示。"
                },
                showInvitesPaused: {
                    label: "顯示邀請暫停訊息",
                    description: "顯示伺服器清單中的邀請已暫停。"
                },
                showModView: {
                    label: "顯示模組視圖",
                    description: "在所有伺服器上顯示成員模式視圖上下文功能表選項。"
                }
            }
        },
        showMessageEmbeds: {
            name: "顯示訊息嵌入",
            description: "將顯示嵌入選項新增至沒有嵌入的連結的上下文選單",
            context: {
                embed: {
                    show: "顯示嵌入",
                    hide: "刪除嵌入"
                }
            },
            error: {
                failed: "無法檢索嵌入內容",
                noEmbed: "找不到嵌入"
            }
        },
        showMeYourName: {
            name: "顯示你的名字",
            description: "查看聊天中自訂暱稱、好友暱稱、伺服器暱稱、顯示名稱和使用者名稱的任意排列。",
            option: {
                messages: {
                    label: "留言",
                    description: "在訊息中顯示自訂名稱格式。"
                },
                replies: {
                    label: "回覆",
                    description: "查看回覆中的自訂名稱格式。"
                },
                mentions: {
                    label: "提及",
                    description: "在提及中顯示自訂名稱格式。"
                },
                memberList: {
                    label: "會員名單",
                    description: "顯示成員清單中以自訂名稱格式列出的第一個可用名稱。"
                },
                typingIndicator: {
                    label: "寫入指示器",
                    description: "在鍵入指示器中顯示以自訂名稱格式列出的第一個可用名稱。"
                },
                profilePopout: {
                    label: "個人資料彈出卡",
                    description: "在個人資料彈出卡中顯示以自訂名稱格式列出的第一個可用名稱。"
                },
                voiceChannels: {
                    label: "音訊頻道",
                    description: "在音訊頻道上顯示以自訂名稱格式列出的第一個可用名稱。"
                },
                reactions: {
                    label: "反應",
                    description: "在反應工具提示中顯示以自訂名稱格式列出的第一個可用名稱，並在反應彈出視窗中顯示全名。"
                },
                discriminators: {
                    label: "顯示解析器",
                    description: "將解析器新增至機器人使用者名稱。 普通用戶的解析器已被刪除，但機器人仍使用解析器。 預設情況下，機器人的使用者名稱相當於使用者的全域名稱，因此多個機器人可以具有相同的使用者名稱。 添加解析器使它們再次變得獨一無二。"
                },
                hideDefaultAtSign: {
                    label: "隱藏預設@符號",
                    description: "隱藏提及和回復中名稱開頭的預設「@」符號。 僅在啟用相關功能時適用。"
                },
                truncateAllNamesWithStreamerMode: {
                    label: "在發布者模式下縮短所有名稱",
                    description: "在廣播者模式下，縮短所有名稱，而不僅僅是使用者名稱。"
                },
                removeDuplicates: {
                    label: "刪除重複項",
                    description: "如果任何兩個名稱相同，請刪除重複的名稱，只保留唯一的名稱。"
                },
                ignoreFonts: {
                    label: "忽略字體",
                    description: "對於第二個、第三個和第四個名稱，請使用 GG SANS，忽略使用者的自訂字體。"
                },
                ignoreGradients: {
                    label: "忽略漸變",
                    description: "對於非主色名稱，如果角色有漸變並且後面的顏色設定為“角色+-#”，則使用主色而不是整個漸變，如果有硝基效果，則完全忽略。"
                },
                animateGradients: {
                    label: "製作漸層動畫",
                    description: "如果第二個、第三個和第四個名字具有角色漸變，則顯示動畫。 如果啟用「忽略漸層」或啟用減少運動，則停用。"
                },
                nameSeparator: {
                    label: "名稱分隔符",
                    description: "名稱之間使用的分隔符號。 預設為單一空格。"
                },
                friendNameOnlyInDirectMessages: {
                    label: "好友姓名僅顯示在私人訊息中",
                    description: "僅在私人訊息中顯示朋友姓名，不在伺服器上顯示。"
                },
                customNameOnlyInDirectMessages: {
                    label: "自訂名稱僅在私人訊息中顯示",
                    description: "僅在私人訊息中顯示自訂名稱，而不是在伺服器上顯示自訂名稱。"
                },
                includedNames: {
                    label: "包含的名稱",
                    description: "使用者名稱、顯示名稱、暱稱和好友名稱的顯示順序。 使用這些佔位符：{user}、{display}、{nick}、{friend}。 如果名稱不可用，您可以編寫要使用的替代名稱，並用逗號分隔：{friend, nick, display}。 您可以為每個名稱添加三個前綴和三個後綴。"
                },
                customNameColor: {
                    label: "自訂名稱顏色",
                    description: "用於指派給使用者的自訂名稱的顏色（如果不是第一個顯示的顏色）。 它接受任何有效的 CSS 輸入。 使用「角色」來追蹤使用者的父角色顏色、硝基效果顏色或 IRCColors 顏色（如果已啟用）。 使用“Role+-#”以此百分比調整亮度（例如“Role+15”）"
                },
                friendNameColor: {
                    label: "朋友姓名顏色",
                    description: "當朋友的名字不是第一個顯示的名字時所使用的顏色。 它接受任何有效的 CSS 輸入。 使用「角色」來追蹤使用者的父角色顏色、硝基效果顏色或 IRCColors 顏色（如果已啟用）。 使用“Role+-#”以此百分比調整亮度（例如：“Role+15”）"
                },
                nicknameColor: {
                    label: "暱稱顏色",
                    description: "暱稱不是顯示的名字時所使用的顏色。 它接受任何有效的 CSS 輸入。 使用「角色」來追蹤使用者的父角色顏色、硝基效果顏色或 IRCColors 顏色（如果已啟用）。 使用“Role+-#”以此百分比調整亮度（例如：“Role+15”）"
                },
                displayNameColor: {
                    label: "顯示名稱 顏色",
                    description: "當顯示名稱不是第一個顯示的名稱時所使用的顏色。 它接受任何有效的 CSS 輸入。 使用「角色」來追蹤使用者的父角色顏色、硝基效果顏色或 IRCColors 顏色（如果已啟用）。 使用“Role+-#”以此百分比調整亮度（例如：“Role+15”）"
                },
                usernameColor: {
                    label: "使用者名稱顏色",
                    description: "當使用者名稱不是顯示的名字時所使用的顏色。 它接受任何有效的 CSS 輸入。 使用「角色」來追蹤使用者的父角色顏色、硝基效果顏色或 IRCColors 顏色（如果已啟用）。 使用“Role+-#”以此百分比調整亮度（例如：“Role+15”）"
                },
                triggerNameRerender: {
                    label: "觸發器名稱重新生成",
                    description: "更改此設定會觸發重新產生名稱。"
                }
            },
            modal: {
                change: {
                    title: "更改 SMYN 使用者名稱",
                },
                add: {
                    title: "新增 SMYN 暱稱"
                },
                setCustom: "為此使用者設定自訂 SMYN 暱稱。 透過在 SMYN 模板設定中指定 {custom} 來使用。",
                nickname: "SMYN 暱稱",
                reset: "重置 SMYN 暱稱",
                cancel: "取消"
            }
        },
        showResourceChannels: {
            name: "顯示資源頻道",
            description: "在頻道清單中顯示隱藏在伺服器資源後面的頻道"
        },
        showSongName: {
            name: "顯示歌曲名稱",
            description: "顯示 Spotify 活動的歌曲名稱而不是藝術家"
        },
        showTimeoutDuration: {
            name: "顯示超時持續時間",
            description: "在逾時圖示工具提示中或其旁邊指示使用者將逾時多長時間",
            option: {
                displayStyle: {
                    label: "展示風格",
                    description: "如何查看超時時間",
                    tooltip: "在工具提示中",
                    inline: "逾時圖示旁邊"
                }
            }
        },
        sidebarChat: {
            name: "側邊欄聊天",
            description: "打開另一個頻道或 DM 作為側邊欄或彈出窗口",
            toolbox: {
                label: "開啟上一個聊天記錄"
            },
            context: {
                label: "打開側邊欄聊天"
            },
            modal: {
                switch: "改變頻道",
                popout: "以彈出視窗方式開啟聊天",
                close: "關閉側邊欄聊天"
            },
            option: {
                persistSidebar: {
                    label: "讓側邊欄聊天永久化",
                    description: "讓側邊欄聊天在 Discord 重新啟動時保持開啟狀態"
                },
                patchCommunity: {
                    label: "應用社群補丁",
                    description: "修補社群伺服器上的項目，例如頻道瀏覽器或成員標籤。"
                }
            }
        },
        signature: {
            name: "簽名",
            description: "自動簽名/訊息文字結束",
            option: {
                name: {
                    label: "簽名",
                    description: "要添加到訊息末尾的簽名文本"
                },
                textHeader: {
                    label: "文字標題",
                    description: "標題要加入到文字的開頭"
                },
                showIcon: {
                    label: "顯示圖示",
                    description: "在聊天列中顯示圖示以開啟和關閉插件"
                },
                contextMenu: {
                    label: "內容選單",
                    description: "新增在聊天登入上下文選單上切換功能的選項"
                },
                isEnabled: {
                    label: "有效的",
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
                    name: "簽名",
                    description: "打開和關閉您的簽名",
                    toogle: "更改您的簽名（預設行為：更改）",
                    enabled: "啟用簽名",
                    disabled: "簽名已停用"
                }
            }
        },
        silentMessageToggle: {
            name: "靜默訊息切換",
            description: "在聊天欄中新增一個按鈕以開啟和關閉靜默訊息發送。",
            option: {
                persistState: {
                    label: "使狀態永久化",
                    description: "決定如何保持靜默訊息切換狀態",
                    none: "它不應該是永久性的（當頻道改變時應該重置）",
                    channels: "使其跨通路持續存在",
                    restarts: "跨頻道持續存在，Discord 重新啟動"
                },
                autoDisable: {
                    label: "自動停用",
                    description: "發送靜默訊息後再次自動停用該功能"
                }
            },
            tooltip: {
                enable: "啟用靜默訊息",
                disable: "禁用靜默訊息"
            }
        },
        silentTyping: {
            name: "無聲打字",
            description: "在聊天中隱藏您的打字指示器。",
            command: {
                silentTyping: {
                    name: "無聲打字",
                    description: "在聊天中隱藏您的打字指示器。",
                    toggle: {
                        name: "切換",
                        description: "全域、每個通道或每個伺服器切換該功能。",
                        global: "全球的",
                        channel: "頻道",
                        guild: "主持人"
                    },
                    chatBarIndicator: {
                        name: "聊天列指示器",
                        description: "從聊天欄頂部隱藏其他使用者的鍵入指示器。"
                    },
                    membersListIndicator: {
                        name: "成員清單指示器",
                        description: "從成員清單中隱藏其他使用者的鍵入指示器。"
                    },
                    chatIcon: {
                        name: "聊天圖示",
                        description: "在聊天列中顯示圖示以快速開啟和關閉插件。"
                    },
                    chatContextMenu: {
                        name: "聊天內容選單",
                        description: "在聊天上下文選單中新增下拉式選單以快速變更插件設定。"
                    },
                    defaultHidden: {
                        name: "預設隱藏",
                        description: "決定是否預設隱藏DM/頻道/伺服器中的寫入資訊。"
                    }
                }
            },
            content: {
                updated: "無聲打字設定已更新。",
                noChanges: "靜默打字設定未進行任何更改。"
            },
            tooltip: {
                hidden: "它說隱藏（{{location}}）",
                visible: "寫入可見（{{location}}）",
                global: "書寫可見（全球）"
            },
            option: {
                enabledGlobally: {
                    label: "全球活躍",
                    description: "全域開啟/關閉您自己的書寫指示器。"
                },
                hideChatBoxTypingIndicators: {
                    label: "隱藏聊天框書寫指示器",
                    description: "隱藏其他使用者聊天框頂部的鍵入指示器。"
                },
                hideMembersListTypingIndicators: {
                    label: "隱藏會員清單書寫指標",
                    description: "隱藏其他使用者的成員清單中的鍵入指示器。"
                },
                chatIcon: {
                    label: "聊天圖示",
                    description: "在聊天列中顯示圖示以快速切換插件。"
                },
                chatIconLeftClickAction: {
                    label: "聊天圖示左鍵點擊操作",
                    description: "確定左鍵點選聊天圖示時要執行的操作。",
                    global: "變更全域寫入狀態",
                    channel: "更改頻道的寫入狀態",
                    guild: "變更寫入伺服器狀態",
                    settings: "開啟插件設定"
                },
                chatIconMiddleClickAction: {
                    label: "聊天圖示中鍵點擊操作",
                    description: "確定在聊天圖示上按一下滑鼠中鍵時要執行的動作。",
                    global: "變更全域寫入狀態",
                    channel: "更改頻道的寫入狀態",
                    guild: "變更寫入伺服器狀態",
                    settings: "開啟插件設定"
                },
                chatIconRightClickAction: {
                    label: "聊天圖示右鍵單擊操作",
                    description: "確定右鍵單擊聊天圖示時要執行的操作。",
                    global: "變更全域寫入狀態",
                    channel: "更改頻道的寫入狀態",
                    guild: "變更寫入伺服器狀態",
                    settings: "開啟插件設定"
                },
                chatContextMenu: {
                    label: "聊天內容選單",
                    description: "在聊天上下文選單中新增下拉式選單以快速變更插件設定。"
                },
                defaultHidden: {
                    label: "預設隱藏",
                    description: "如果啟用，您的指示燈將對所有未在下方的「停用位置」清單中列出的 DM/頻道/伺服器上的其他使用者隱藏。 如果停用，您的指示器將出現在「活動位置」清單中未包含的位置。"
                },
                enabledLocations: {
                    label: "活躍地點",
                    description: "為這些 ID 啟用該功能。 它接受以逗號分隔的 DM ID、通道 ID 和伺服器 ID。 僅在禁用“預設私有”時使用。"
                },
                disabledLocations: {
                    label: "殘障場所",
                    description: "停用這些 ID 的功能。 它接受以逗號分隔的 DM ID、通道 ID 和伺服器 ID。 僅在啟用“預設私有”時使用。"
                }
            }
        },
        snowfall: {
            name: "降雪",
            description: "讓Discord上下雪吧！",
            about: {
                title: "資訊",
                paragraph: "該外掛在 Discord 介面上添加了聖誕節主題的降雪效果。 您可以透過以下設定來變更雪類型。",
                note: "注意：儘管此插件不會比大多數電腦上的普通 Plexcord 插件產生更大的效能影響，但它可能會在低階系統上導致一些延遲。"
            },
            option: {
                typeOfSnow: {
                    label: "車型",
                    description: "變更顯示的雪的類型（影響性能）。",
                    solid: "純色（最高性能）",
                    text: "Metin（中等性能）",
                    emoji: "視覺（性能最低）"
                },
                maxSize: {
                    label: "最大尺寸",
                    description: "最大雪花尺寸"
                },
                speed: {
                    label: "速度",
                    description: "降雪率（越高=降雪速度越快）"
                },
                flakesPerSecond: {
                    label: "每秒的雪花數",
                    description: "每秒飄落的雪花數量（越高=降水量越大）"
                }
            }
        },
        sortFriendRequests: {
            name: "對好友請求進行排序",
            description: "按收到日期對好友請求進行排序",
            tooltip: "新增 — {{date}}",
            option: {
                showDates: {
                    label: "顯示日期",
                    description: "在好友請求中顯示日期"
                }
            }
        },
        soundBoardLogger: {
            name: "音板記錄器",
            description: "錄製語音聊天中播放的所有音板聲音並允許您下載它們",
            tooltip: "打開音板日誌",
            option: {
                savedIds: {
                    label: "已儲存的音板 ID",
                    description: "您一次要儲存的音板 ID 數量（0 允許您無限儲存）",
                    notNumber: "該值不是數字。",
                    cantDecimal: "該值不能是十進制數。",
                    cantNegative: "該值不能為負數。",
                    heading: "您一次要儲存的音板 ID 數量（0 允許您無限儲存）",
                    warning: "警告！ 將數字設為較低的值將重置日誌！",
                    placeholder: "輸入一個數字"
                },
                fileType: {
                    label: "文件類型",
                    description: "您想要儲存文件的格式"
                },
                openLogs: {
                    label: "打開日誌",
                    description: "顯示日誌",
                    button: "打開日誌"
                },
                soundVolume: {
                    label: "聲級",
                    description: "開/關音量（0 停用）"
                },
                iconLocation: {
                    label: "圖示位置",
                    description: "選擇 SoundBoard 日誌圖示出現的位置（需要重新啟動）",
                    toolbar: "工具列",
                    chatInput: "聊天登入"
                }
            },
            modal: {
                title: "音板日誌",
                loading: "聲音正在加載...",
                noLogs: "尚未錄製任何音訊。 加入語音聊天即可登入！",
                clearLogs: "清除日誌",
                played: "玩了 {{time}} 次",
                last: "最後玩過：",
                also: "他還偷了：",
                download: "下載",
                copyId: "複製身分證件",
                copied: "ID已複製到剪貼簿！",
                playSound: "播放聲音",
                moreUsers: "其他人也用過這個聲音...",
                volume: "音板音量"
            }
        },
        splitLargeMessages: {
            name: "分割大消息",
            description: "將大訊息拆分為多個訊息以適應 Discord 的訊息限制。",
            option: {
                maxLength: {
                    label: "最大訊息長度",
                    description: "訊息在分割之前可以具有的最大長度。 設定為 0 進行自動偵測。"
                },
                disableFileConversion: {
                    label: "禁用檔案轉換",
                    description: "如果啟用，則停用大消息的檔案轉換。"
                },
                sendDelay: {
                    label: "運送延誤",
                    description: "每個曲目之間的等待時間（以秒為單位）。"
                },
                hardSplit: {
                    label: "實心隔間",
                    description: "如果啟用，它將從最後一個字元而不是空格/換行符開始分割。"
                },
                splitInSlowmode: {
                    label: "以慢速模式分割",
                    description: "如果在頻道上啟用慢速模式，則分割訊息？"
                },
                slowmodeMax: {
                    label: "慢速模式最大",
                    description: "在慢速模式下劃分時允許的最大慢速模式時間。"
                }
            }
        },
        spotifyActivityToggle: {
            name: "Spotify活動切換",
            description: "新增 Spotify 活動可見性的切換按鈕。",
            tooltip: {
                enable: "開啟 Spotify 活動",
                disable: "關閉 Spotify 活動"
            },
            option: {
                location: {
                    label: "女性",
                    description: "在哪裡顯示 Spotify 開/關按鈕",
                    panel: "靜音/靜音旁邊",
                    toolbox: "Plexcord 工具箱"
                },
                activityStatus: {
                    label: "活動狀態",
                    description: "您的 Spotify 活動的目前狀態"
                }
            }
        },
        spotifyCrack: {
            name: "Spotify 破解",
            description: "允許免費共同收聽、阻止語音聊天中的自動暫停以及在空閒時保持 Spotify 活動播放",
            option: {
                noSpotifyAutoPause: {
                    label: "關閉 Spotify 自動暫停",
                    description: "停用 Spotify 的自動暫停。"
                },
                keepSpotifyActivityOnIdle: {
                    label: "在空閒時恢復 Spotify 活動",
                    description: "允許 Spotify 活動在空閒時繼續播放"
                }
            }
        },
        spotifyShareCommands: {
            name: "SpotifyShare命令",
            description: "使用斜槓指令分享您目前的 Spotify 歌曲、專輯或藝人（/track、/album、/artist）",
            command: {
                makeCommand: {
                    description: "在聊天中分享您目前的 Spotify {{type}}",
                    track: "您沒有在 Spotify 上收聽任何歌曲。",
                    find: "在 Spotify 上找不到這首歌。"
                }
            }
        },
        startupTimings: {
            name: "啟動時間",
            description: "將開始計時加入「設定」選單",
            modal: {
                title: "開始時間",
                ended: "觀看結束時間：",
                start: "開始",
                interval: "十二月",
                delta: "三角洲",
                event: "玉蘭花油",
                serverTrace: "伺服器監控",
                loading: "載入中..."
            }
        },
        statusNotifications: {
            name: "狀態通知",
            description: "新增狀態變更通知",
            loading: "載入中...",
            option: {
                notificationsSound: {
                    label: "通知聲音",
                    description: "播放狀態通知的通知聲音？"
                },
                usersList: {
                    label: "使用者列表",
                    description: "狀態變更時通知用戶",
                    empty: "沒有用戶受到監控。 您可以透過右鍵單擊使用者並使用“狀態通知”選項來新增使用者。"
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
                title: "狀態通知",
            },
            status: {
                online: "在線的",
                idle: "閒置的",
                dnd: "請勿打擾",
                offline: "離線",
            },
        },
        statusPresets: {
            name: "狀態預設",
            description: "允許您保存狀態並稍後重新調整",
            button: {
                remember: "記住狀態",
            },
            context: {
                edit: "編輯自訂預設",
                set: "設定例外"
            },
            notification: {
                successfully: "狀態保存成功"
            }
        },
        steamStatusSync: {
            name: "Steam狀態同步",
            description: "將您的狀態與 Steam 同步！ （線上、離開、隱形或離線。）",
            option: {
                onlineStatus: {
                    label: "在線狀態",
                    description: "Discord 在線時的 Steam 狀態"
                },
                idleStatus: {
                    label: "空閒狀態",
                    description: "Discord 空閒時的 Steam 狀態"
                },
                dndStatus: {
                    label: "請勿打擾狀態",
                    description: "Discord 請勿打擾時的 Steam 狀態"
                },
                invisibleStatus: {
                    label: "隱形狀態",
                    description: "Discord 不可見時的 Steam 狀態"
                },
                goInvisibleIfActivityIsHidden: {
                    label: "如果活動是私人的，則變得隱身",
                    description: "當隱藏 Discord 活動時將 Steam 狀態設為不可見"
                }
            },
            status: {
                online: "在線的",
                away: "離開",
                invisible: "無形的",
                offline: "離線（與 Steam 聊天斷開連線）",
                disabled: "殘障人士"
            }
        },
        stickerBlocker: {
            name: "貼紙攔截器",
            description: "允許您防止顯示貼紙。",
            option: {
                showGif: {
                    label: "顯示動圖",
                    description: "是否顯示酷貓GIF。"
                },
                showMessage: {
                    label: "顯示留言",
                    description: "是否顯示屏蔽哪個ID的訊息"
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
                blocked: "被阻止的貼紙。 ID：{{id}} 名稱：{{name}}",
                unblock: "取消封鎖 {{name}}"
            },
            context: {
                blockSticker: "塊貼紙",
                unblockSticker: "解鎖貼紙"
            }
        },
        stickerPaste: {
            name: "貼紙貼",
            description: "當您在貼紙選擇器中選擇貼紙時，它會將其添加到聊天框中，而不是立即發送"
        },
        streamerModeOnStream: {
            name: "串流模式",
            description: "當您開始在 Discord 上廣播時自動啟用串流模式"
        },
        streamingCodecDisabler: {
            name: "流編解碼器禁用器",
            description: "停用您所需的串流媒體編解碼器",
            option: {
                disableAv1Codec: {
                    label: "停用 AV1 編解碼器",
                    description: "防止 Discord 考慮使用 AV1 進行串流傳輸。"
                },
                disableH265Codec: {
                    label: "停用 H265 編解碼器",
                    description: "防止 Discord 考慮使用 H265 進行串流傳輸。"
                },
                disableH264Codec: {
                    label: "停用 H264 編解碼器",
                    description: "防止 Discord 考慮使用 H264 進行串流傳輸。"
                }
            }
        },
        superReactionTweaks: {
            name: "超級反應調整",
            description: "自訂同時播放超級反應的限制並預設使用超級反應",
            option: {
                superReactByDefault: {
                    label: "預設超級反應",
                    description: "反應選擇器預設使用超級反應"
                },
                unlimitedSuperReactionPlaying: {
                    label: "無限超級反應玩法",
                    description: "消除了同時播放的超級反應限制"
                },
                superReactionPlayingLimit: {
                    label: "超反應播放限制",
                    description: "同時玩的超級反應的最大數量。 0 禁止播放超級反應"
                }
            }
        },
        textReplace: {
            name: "文字替換",
            description: "更改訊息中的文字。 您可以在 Plexcord 伺服器上的 #textreplace-rules 頻道中找到現成的規則",
            option: {
                replace: {
                    label: "改變",
                    string: "使用純文字",
                    regex: "使用正規表示式",
                    myMessages: "應用於您自己的訊息（所有人都可見）",
                    othersMessages: "套用於其他人的訊息（僅您可見）",
                    allMessages: "適用於所有訊息"
                },
                stringRules: {
                    label: "純文字規則",
                    description: "使用明文匹配的文字替換規則。"
                },
                regexRules: {
                    label: "正規表示式規則",
                    description: "使用正規表示式取代文字的規則。"
                }
            },
            modal: {
                title: "測試規則",
                find: "布林",
                replace: "改變",
                includes: "僅當它包含",
                type: "寫留言",
                applied: "應用規則的訊息"
            }
        },
        themeAttributes: {
            name: "主題屬性",
            description: "出於主題目的向各種元素添加資料屬性"
        },
        timezones: {
            name: "時區",
            description: "在個人資料和訊息線程中顯示用戶的當地時間",
            button: {
                wantToSave: "您想在資料庫中儲存您的時區嗎？ 按一下此處進行設定。",
                yourLocalTimezone: "（您當地的時區）"
            },
            context: {
                set: "設定本地時區"
            },
            toast: {
                refresh: {
                    successfully: "時區已成功更新！",
                    failed: "時區無法刷新！",
                    failedTo: "無法刷新時區。"
                },
                update: {
                    successfully: "時區更新成功！",
                    failed: "無法設定時區。"
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
                    label: "顯示您的時區",
                    description: "在您的個人資料和訊息線程中顯示您的時區"
                },
                twentyFourHourTime: {
                    label: "24 小時格式",
                    description: "以 24 小時格式顯示時間"
                },
                showTimezoneInfo: {
                    label: "顯示時區資訊",
                    description: "除時鐘外還顯示時區資訊"
                },
                showMessageHeaderTime: {
                    label: "顯示訊息標題 時間",
                    description: "在訊息線程中顯示時間"
                },
                showProfileTime: {
                    label: "顯示個人資料時間",
                    description: "在使用者個人資料中顯示時間"
                },
                useDatabase: {
                    label: "使用資料庫時區",
                    description: "使用資料庫取得使用者時區"
                },
                preferDatabaseOverLocal: {
                    label: "優先選擇資料庫而非本地",
                    description: "跨時區更喜歡資料庫而不是本地存儲"
                },
                databaseUrl: {
                    label: "資料庫網址",
                    description: "時區資料庫伺服器的 URL"
                },
                setDatabaseTimezone: {
                    label: "設定資料庫時區",
                    description: "在資料庫中設定您的時區",
                    setTimezone: "在資料庫中設定時區"
                },
                resetDatabaseTimezone: {
                    label: "重置資料庫時區",
                    description: "重置資料庫中的時區",
                    failed: "重置資料庫時區失敗"
                },
                askedTimezone: {
                    label: "詢問時區",
                    description: "指示是否提示使用者輸入時區"
                }
            },
            modal: {
                title: "時區",
                select: "選擇時區",
                selectPlaceholder: "選擇時區",
                delete: "刪除時區",
                save: "節省"
            }
        },
        toastNotifications: {
            name: "Toast通知",
            description: "當您收到直接訊息時顯示 Toast 通知。",
            notification: {
                call: "開始和你一起尋找！",
                recipient: {
                    add: "{{target}} 已由 {{actor}} 新增到群組。",
                    remove: "{{target}} 已被 {{actor}} 從群組中刪除。",
                    left: "他離開了隊伍。"
                },
                channel: {
                    change: {
                        name: "頻道名稱改為{{name}}。",
                        icon: "頻道圖示已更改。"
                    },
                    pinned: "置頂了一則訊息。"
                },
                sent: {
                    embed: "他發送了一個嵌入。",
                    sticker: "他發了一張貼紙。",
                    attachment: "文件："
                },
                redacted: "訊息內容已被隱藏。",
                friend: {
                    accept: "{{user}} 現在是您的朋友",
                    acceptBody: "現在您可以直接向他發送訊息。",
                    request: "{{user}}向您發送了好友請求。",
                    requestBody: "您可以從「好友」標籤接受或拒絕。"
                },
                example: {
                    title: "通知樣本",
                    body: "這是通知文字範例。"
                }
            },
            modal: {
                dismiss: "關閉通知",
                attachments: "已發送 {{attachments}} 個檔案。"
            },
            option: {
                position: {
                    label: "女性",
                    description: "Toast 通知的位置",
                    topRight: "右上",
                    topLeft: "左上",
                    bottomRight: "右下角",
                    bottomLeft: "索爾阿爾特"
                },
                timeout: {
                    label: "關門時間",
                    description: "顯示通知多少秒"
                },
                opacity: {
                    label: "不透明度",
                    description: "Toast通知的不透明度"
                },
                determineServerNotifications: {
                    label: "設定伺服器通知",
                    description: "根據伺服器通知設定確定是否顯示通知"
                },
                directMessages: {
                    label: "直接訊息",
                    description: "顯示直接訊息的通知"
                },
                groupMessages: {
                    label: "群組訊息",
                    description: "顯示群組訊息通知"
                },
                friendServerNotifications: {
                    label: "好友和伺服器通知",
                    description: "當朋友在公共伺服器上發送訊息時顯示通知"
                },
                friendActivity: {
                    label: "好友活動",
                    description: "顯示新增好友或接收好友請求的通知"
                },
                notifyFor: {
                    label: "接收通知的管道",
                    description: "輸入接收通知的頻道 ID（以逗號分隔）"
                },
                ignoreUsers: {
                    label: "要忽略的用戶",
                    description: "輸入將忽略其通知的使用者 ID（以逗號分隔）"
                },
                exampleButton: {
                    label: "樣品按鈕",
                    description: "顯示 Toast 通知範例。",
                    show: "顯示通知範例"
                }
            }
        },
        toggleVideoBind: {
            name: "切換視訊綁定",
            description: "新增可自訂的熱鍵來開啟和關閉網路攝影機。",
            option: {
                keyBind: {
                    label: "熱鍵",
                    description: "按下該按鈕將開啟和關閉網路攝影機。"
                },
                reqCtrl: {
                    label: "Ctrl·格雷克利",
                    description: "強制按下 Ctrl 鍵。"
                },
                reqShift: {
                    label: "需要輪班",
                    description: "強制按下 Shift 鍵。"
                },
                reqAlt: {
                    label: "需要子項",
                    description: "強制按下 Alt 鍵。"
                }
            }
        },
        translate: {
            name: "翻譯",
            description: "使用 Google Translate 或 DeepL 翻譯訊息",
            tooltip: {
                label: "轉變"
            },
            context: {
                translate: "轉變",
                open: "開啟翻譯視窗",
                auto: "啟用自動翻譯"
            },
            option: {
                receivedInput: {
                    label: "收到的輸入",
                    description: "接收到的訊息將被翻譯的語言"
                },
                receivedOutput: {
                    label: "接收到的輸出",
                    description: "收到的訊息將被翻譯成什麼語言？"
                },
                sentInput: {
                    label: "提交的意見",
                    description: "您自己的訊息將翻譯成的語言"
                },
                sentOutput: {
                    label: "發送輸出",
                    description: "您自己的訊息將翻譯成什麼語言"
                },
                service: {
                    label: "翻譯服務",
                    description: "DeepL Pro 需要付費 API 金鑰",
                    descriptionWeb: "翻譯服務（不支援網路！）",
                    google: "Google翻譯",
                    deepl: "DeepL 免費",
                    deeplPro: "深L Pro"
                },
                deeplApiKey: {
                    label: "DeepL API 金鑰",
                    description: "DeepL API 金鑰",
                    placeholder: "在 https://deepl.com/your-account 取得您的 API 金鑰"
                },
                autoTranslate: {
                    label: "自動翻譯",
                    description: "它會在發送訊息之前自動翻譯您的訊息。 您也可以按住 Shift 鍵或右鍵單擊翻譯按鈕來開啟或關閉此功能。"
                },
                showAutoTranslateTooltip: {
                    label: "顯示自動翻譯說明",
                    description: "自動翻譯訊息時在聊天列按鈕中顯示說明"
                }
            },
            modal: {
                title: "翻譯",
                select: "選擇語言",
                auto: "自動翻譯",
                dismiss: "四分之一",
                translated: "翻譯自{{from}}",
                failed: {
                    to: "{{text}} 翻譯失敗",
                    connect: "DeepL API 連線失敗："
                },
                wrong: "出了點問題。 如果問題仍然存在，請檢查控制台或向支援伺服器尋求協助。",
                deepl: {
                    api: "DeepL API 超出配額。 切換到谷歌翻譯。",
                    apiKey: "未設定 DeepL API 金鑰。 回到谷歌。",
                    auth: "DeepL API 金鑰或版本無效"
                },
                autoTranslateEnabled: {
                    title: "啟用 Plexcord 自動翻譯",
                    body: "您剛剛啟用了自動翻譯！ 您發送的所有訊息將在發送前自動翻譯。",
                    confirm: "停用自動翻譯",
                    cancel: "我明白",
                    secondaryConfirm: "不要再顯示"
                }
            }
        },
        typingIndicator: {
            name: "打字指示器",
            description: "當有人在頻道中輸入內容時添加指示器。",
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
                    description: "是否為被忽略的使用者顯示鍵入指示符。"
                },
                includeBlockedUsers: {
                    label: "包括被封鎖的用戶",
                    description: "是否為被封鎖的使用者顯示打字指示器。"
                },
                indicatorMode: {
                    label: "顯示模式",
                    description: "指標如何顯示？",
                    both: "頭像和動畫點",
                    dots: "動畫點",
                    avatars: "頭像"
                }
            }
        },
        typingTweaks: {
            name: "打字調整",
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
                    description: "當多人打字時顯示更有用的訊息"
                },
                amITyping: {
                    label: "我在寫作嗎？",
                    description: "顯示其他人是否看過您所寫的內容"
                }
            },
            others: {
                areTyping: "還有 {{count}} 人寫道..."
            }
        },
        unindent: {
            name: "取消縮排",
            description: "刪除程式碼區塊中的前導縮排"
        },
        unitConverter: {
            name: "單位換算器",
            description: "將公制單位轉換為英制單位，反之亦然",
            tooltip: "轉換單位",
            option: {
                myUnits: {
                    label: "我的單位",
                    description: "您使用並想要轉換為的單位。 預設值：英制",
                    imperial: "帝國",
                    metric: "公制"
                }
            },
            button: {
                dismiss: "四分之一"
            }
        },
        unlimitedAccounts: {
            name: "無限帳戶",
            description: "增加您可以新增的帳戶數量。",
            option: {
                maxAccounts: {
                    label: "最大帳戶數",
                    description: "可新增的帳戶數量，輸入0表示無限制"
                }
            }
        },
        unlockedAvatarZoom: {
            name: "解鎖頭像縮放",
            description: "讓您在更改頭像時進一步放大影像裁切工具",
            option: {
                zoomMultiplier: {
                    label: "變焦倍數",
                    description: "變焦倍數"
                }
            }
        },
        unsuppressEmbeds: {
            name: "取消抑制嵌入",
            description: "允許您取消隱藏訊息中的嵌入內容",
            context: {
                unsuppress: "刪除嵌入抑制",
                suppress: "列印嵌入"
            }
        },
        uselessInfo: {
            name: "無用資訊",
            description: "在 Discord 中顯示隨機無用資訊；可以進行捷徑和間隔設定。",
            recording: "記錄...",
            record: "節省",
            option: {
                delay: {
                    label: "通知間隔",
                    description: "通知顯示間隔（分鐘）"
                },
                historyHotkey: {
                    label: "歷史面板快捷方式",
                    description: "用於開啟先前顯示資訊的歷史記錄的熱鍵"
                },
                randomFactHotkey: {
                    label: "隨機資訊快捷方式",
                    description: "開啟隨機資訊面板的熱鍵"
                },
                sameFact: {
                    label: "避免重複相同的訊息",
                    description: "防止多次顯示相同訊息而不顯示所有訊息"
                },
                lastNFacts: {
                    label: "最新資訊不再重複",
                    description: "最後不應重新顯示的資訊條數（0 = 所有次數）"
                }
            },
            modal: {
                title: "無用資訊",
                history: {
                    none: "還沒有資訊。 使用快捷方式或等待。",
                    source: "來源"
                },
                showRandom: "隨機顯示",
                close: "四分之一"
            },
            notification: {
                title: "你可知道？"
            }
        },
        userMessagesPronouns: {
            name: "使用者訊息代名詞",
            description: "在訊息標題中顯示使用者代名詞",
            option: {
                pronounsFormat: {
                    label: "代名詞形式",
                    description: "代名詞如何出現在聊天中",
                    lowercase: "小寫",
                    capitalized: "首字母大寫"
                },
                showSelf: {
                    label: "展現自己",
                    description: "開啟或關閉顯示您自己的代名詞"
                }
            }
        },
        userVoiceShow: {
            name: "用戶之聲秀",
            description: "當使用者處於語音通道時顯示指示器",
            option: {
                showInUserProfileModal: {
                    label: "在使用者個人資料中顯示",
                    description: "在使用者個人資料中的姓名旁邊顯示語音頻道指示器"
                },
                showInMemberList: {
                    label: "在會員清單中顯示",
                    description: "在成員和 DM 清單中顯示語音通道指示器"
                },
                showInMessages: {
                    label: "在訊息中顯示",
                    description: "在訊息中顯示語音通道指示符"
                }
            },
            modal: {
                inVoiceChat: "語音聊天中"
            },
            notification: {
                cannotJoin: "您無法加入該使用者的語音頻道。"
            }
        },
        uSRBG: {
            name: "美國RBG",
            description: "顯示來自 USRBG 的用戶橫幅，以便任何人都可以在沒有 Nitro 的情況下使用橫幅",
            option: {
                nitroFirst: {
                    label: "硝基第一",
                    description: "如果 Nitro 和 USRBG 橫幅都存在，請確定使用哪一個",
                    nitro: "硝基旗幟",
                    usrbg: "美國RBG旗幟"
                },
                voiceBackground: {
                    label: "音訊背景",
                    description: "使用USRBG橫幅作為語音聊天背景"
                }
            },
            button: "獲得您自己的 USRBG 橫幅"
        },
        validReply: {
            name: "有效回覆",
            description: "修正了將滑鼠懸停在回復上時出現「無法載入訊息」錯誤的問題"
        },
        validUser: {
            name: "有效用戶",
            description: "修正了未知用戶顯示為“@unknown-user”的提及（將滑鼠懸停在提及上即可修復）",
            badges: {
                discordBugHunter: "不和諧蟲子獵人",
                moderatorProgramsAlumni: "主持人課程畢業生",
                discordStaff: "不和諧法杖",
                hypeSquadEvents: "HypeSquad 活動",
                bravery: "HypeSquad 塞薩雷特",
                brilliance: "HypeSquad 亮度",
                balance: "HypeSquad 登格",
                partneredServerOwner: "共同伺服器擁有者",
                nitro: "不和諧硝基",
                earlySupporter: "早期支持者",
                earlyVerifiedBotDeveloper: "早期驗證的機器人開發人員"
            }
        },
        voiceChatDoubleClick: {
            name: "語音聊天DoubleClick",
            description: "允許您透過雙擊而不是單擊來加入語音聊天"
        },
        vcNarrator: {
            name: "VC講述人",
            description: "當用戶加入、離開或移動語音頻道時透過旁白進行播報",
            option: {
                voice: {
                    label: "賽斯"
                },
                volume: {
                    label: "聲級",
                    description: "講述人聲音級別"
                },
                rate: {
                    label: "速度",
                    description: "旁白語速"
                },
                sayOwnName: {
                    label: "說出你的名字",
                    description: "旁白是否會說出你的名字"
                },
                latinOnly: {
                    label: "僅拉丁語",
                    description: "閱讀前清除姓名中的非拉丁字符"
                },
                joinMessage: {
                    label: "加盟留言",
                    description: "加盟留言"
                },
                leaveMessage: {
                    label: "臨別贈言",
                    description: "留言"
                },
                moveMessage: {
                    label: "搬家留言",
                    description: "移動訊息"
                },
                muteMessage: {
                    label: "靜音訊息",
                    description: "將訊息靜音（目前僅限您自己）"
                },
                unmuteMessage: {
                    label: "取消靜音訊息",
                    description: "取消訊息靜音（目前僅限您自己）"
                },
                deafenMessage: {
                    label: "震耳欲聾的消息",
                    description: "震耳欲聾的消息（現在只有你自己）"
                },
                undeafenMessage: {
                    label: "震耳欲聾的消息",
                    description: "震耳欲聾的消息（現在只有你自己）"
                }
            },
            modal: {
                title: "播放取樣聲音",
                voiceTitle: "賽斯",
                voice: "選擇聲音",
                languageTitle: "迪爾",
                language: "選擇語言",
                noVoice: "找不到講述人的聲音。",
                linuxNote: "安裝語音調度程式或 espeak 並使用 --enable-speech-dispatcher 參數執行 Discord",
                someNarrator: "試著從作業系統的「講述人」設定安裝一些聲音",
                dontHaveEnglish: "您尚未上傳任何英文音頻，因此旁白聽起來可能很奇怪",
                customiseMessages: "您可以自訂下面的語音訊息。 如果將其留空，您可以停用某些訊息",
                placeholdersInfo: "自訂佔位符 {{USER}}、{{DISPLAY_NAME}}、{{NICKNAME}} 和 {{CHANNEL}} 分別替換為使用者名稱（如果您自己則為空）、顯示名稱、伺服器上的暱稱和頻道名稱"
            }
        },
        viewIcons: {
            name: "查看圖示",
            description: "使用戶個人資料中的頭像和橫幅圖像可點擊；將顯示頭像/橫幅選項新增至使用者、伺服器和群組頻道上下文選單。",
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
                    description: "選擇用於非移動影像的影像格式。 動畫圖像始終使用 .gif 格式"
                },
                imgSize: {
                    label: "影像尺寸",
                    description: "使用的圖像尺寸"
                }
            }
        },
        viewRaw: {
            name: "查看原始數據",
            description: "複製並查看任何訊息、通道或伺服器的原始內容/數據",
            context: {
                copyLeft: "複製原始資料（左鍵單擊）/查看原始資料（右鍵單擊）",
                copyRight: "複製原始資料（右鍵單擊）/查看原始資料（左鍵單擊）",
                view: "查看原始數據"
            },
            option: {
                popoverButton: {
                    label: "彈出式選單按鈕",
                    description: "在訊息彈出視窗中顯示一個按鈕以查看訊息的原始內容/資料。"
                },
                clickMethod: {
                    label: "點擊方法",
                    description: "更改用於查看任何訊息的原始內容/資料的單擊方法。",
                    left: "左鍵點選查看原始內容。",
                    right: "右鍵單擊查看原始內容。"
                }
            },
            modal: {
                title: "漢姆維裡",
                content: "內容",
                data: "{{type}} 維裡",
                copied: "{{type}}資料已複製到剪貼簿！",
                copy: "複製 {{type}} JSON",
                copiedContent: "內容已複製到剪貼簿！",
                copyContent: "複製原始內容"
            },
            types: {
                message: "資訊",
                channel: "頻道",
                guild: "主持人",
                role: "角色",
                user: "使用者"
            }
        },
        voiceButtons: {
            name: "語音按鈕",
            description: "透過語音呼叫面板快速對任何使用者進行私人聊天、靜音或聾啞。",
            option: {
                showChatButton: {
                    label: "顯示聊天按鈕",
                    description: "是否顯示聊天按鈕"
                },
                showMuteButton: {
                    label: "顯示靜音按鈕",
                    description: "是否顯示靜音按鈕"
                },
                showDeafenButton: {
                    label: "顯示聾人按鈕",
                    description: "是否顯示聾人按鈕"
                },
                muteSoundboard: {
                    label: "音板'u Sessize Al",
                    description: "當點擊這個震耳欲聾的按鈕時，它會打開和關閉使用者的音板。"
                },
                disableVideo: {
                    label: "停用影片",
                    description: "當點擊這個震耳欲聾的按鈕時，它會打開和關閉用戶的影片。"
                },
                useServer: {
                    label: "使用伺服器",
                    description: "如果您有權限，可以使用伺服器靜音/震耳欲聾而不是本地靜音/震耳欲聾。"
                },
                serverSelf: {
                    label: "在伺服器上將自己靜音",
                    description: "使用時，靜音/隔音器會使您自己在伺服器上靜音或隔音。"
                },
                showButtonsSelf: {
                    label: "為自己顯示按鈕",
                    description: "是否為您自己的使用者顯示按鈕。 它具有相同的功能； DM 面板打開並使您自己靜音/失聰。",
                    display: "展示",
                    hide: "隱藏",
                    disable: "殘障人士"
                },
                whichNameToShow: {
                    label: "應該出現哪個名字？",
                    description: "在工具提示中顯示使用者名稱、全域名稱或兩者？",
                    global: "全球名稱",
                    username: "使用者名稱",
                    both: "兩個都"
                },
                buttonPosition: {
                    label: "按鈕位置",
                    description: "選擇顯示按鈕的位置。",
                    left: "索爾",
                    right: "正確的",
                }
            },
            tooltip: {
                navigate: "轉至私訊",
                open: "使用 {{username}} 開啟 DM",
                yourself: "你自己",
                serverMute: "伺服器靜音",
                serverDeafen: "伺服器上聾子",
                mute: "沉默的",
                deafen: "震耳欲聾",
                unmute: "取消靜音",
                undeafen: "從震耳欲聾中刪除",
                serverUnmute: "在伺服器上取消靜音",
                serverUndeafen: "刪除伺服器上的震耳欲聾的聲音"
            }
        },
        voiceChannelLog: {
            name: "語音頻道日誌",
            description: "記錄誰加入和離開音訊通道",
            context: {
                view: "查看頻道日誌"
            },
            modal: {
                joined: "已加入<#{{channel}}>頻道",
                left: "左聲道 <#{{channel}}>",
                movedTo: "已移至<#{{channel}}>頻道",
                movedFrom: "移自 <#{{channel}}>",
                noLogs: "沒有可顯示的日誌。",
                logs: "{{channel}} 日誌"
            },
            option: {
                mode: {
                    label: "模組",
                    description: "如何顯示音訊通道日誌",
                    menu: "日誌選單",
                    associated: "直接登入相關聊天頻道",
                    both: "同時登入聊天頻道和日誌選單"
                },
                voiceChannelChatSelf: {
                    label: "語音頻道聊天（您自己）",
                    description: "在語音頻道中記錄您自己的語音頻道活動"
                },
                voiceChannelChatSilent: {
                    label: "無聲頻道聊天",
                    description: "語音頻道聊天中的加入/離開/移動訊息被靜音"
                },
                voiceChannelChatSilentSelf: {
                    label: "無聲頻道聊天（您自己）",
                    description: "如果您使用語音頻道，加入/離開/移動訊息將保持靜音"
                },
                ignoreBlockedUsers: {
                    label: "忽略被封鎖的用戶",
                    description: "記錄您已封鎖的用戶"
                }
            }
        },
        voiceChatUtilities: {
            name: "語音聊天實用程序",
            description: "該外掛程式可讓您在整個通道上執行多個操作（移動、靜音、斷開連接等）（最初由 dutake 開發）",
            option: {
                waitAfter: {
                    label: "行動後等待",
                    description: "等待之前要進行的 API 事務數（以避免速率限制）"
                },
                waitSeconds: {
                    label: "等待時間",
                    description: "每次操作之間等待的時間（以秒為單位）"
                }
            },
            context: {
                voiceTools: "音訊工具",
                mentionAll: "標記所有用戶",
                disconnectAll: "斷開所有人的聯繫",
                muteAll: "所有人靜音",
                unmuteAll: "取消所有人靜音",
                deafenAll: "聾人大家",
                undeafenAll: "出門時不要讓所有人震耳欲聾",
                moveAll: "感動大家"
            }
        },
        voiceDownload: {
            name: "語音下載",
            description: "為語音訊息新增下載選項。 （開啟新的瀏覽器標籤）",
            context: {
                download: "下載語音郵件"
            }
        },
        voiceMessages: {
            name: "語音留言",
            description: "它允許您像在行動裝置上一樣發送語音訊息。 為此，請右鍵單擊上傳按鈕並選擇“發送語音訊息”。",
            option: {
                noiseSuppression: {
                    label: "降噪",
                    description: "降噪"
                },
                echoCancellation: {
                    label: "迴聲消除",
                    description: "迴聲消除"
                }
            },
            notification: {
                failed: {
                    upload: "無法載入語音郵件。",
                    start: "無法開始錄製。",
                    finish: "註冊無法完成。"
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
                oggOpus: "語音訊息必須採用 OggOpus 格式才能在 iOS 上播放。 該檔案無法在 iOS 上播放，因為它是 {{type}} 格式。",
                fix: "若要解決此問題，請先將檔案轉換為 OggOpus 格式。 例如，您可以使用 {{link}}。",
                sending: "正在發送語音郵件...請稍候。",
                stop: "停止錄音",
                start: "開始錄音",
                resume: "恢復註冊",
                pause: "暫停錄音",
                recording: "註冊正在進行中",
                send: "傳送"
            }
        },
        volumeBooster: {
            name: "音量增強器",
            description: "允許您將使用者和廣播音量增加到預設最大值以上",
            option: {
                multiplier: {
                    label: "乘數",
                    description: "聲音倍增器"
                }
            }
        },
        wallpaperFree: {
            name: "壁紙免費",
            description: "舊 DM 桌布實驗的翻拍；為任何頻道、使用者或伺服器設定背景圖像。",
            option: {
                globalDefault: {
                    label: "一般預設",
                    description: "為所有頻道設定全域預設壁紙。"
                },
                stylingTips: {
                    label: "風格提示"
                }
            },
            context: {
                setWallpaper: "設定壁紙",
                removeWallpaper: "刪除壁紙"
            },
            modal: {
                set: "設定壁紙",
                image: "圖片網址",
                cancel: "取消",
                apply: "申請",
                global: {
                    set: "設定公共壁紙",
                    remove: "刪除全域預設桌布",
                    reset: "重置壁紙數據"
                },
                web: {
                    info: "您可以透過將本機檔案放入 plexcord 主題目錄並使用 url plexcord:///themes/filename.ext 來使用本機檔案。",
                    open: "開啟主題目錄",
                    quickCSS: "開啟 QuickCSS"
                }
            }
        },
        webContextMenus: {
            name: "Web內容選單",
            description: "新增了 Discord 網路版中缺少的上下文功能表：連結和圖像（複製或開啟連結/圖像）、文字區域（複製、剪下、貼上、拼字檢查）",
            option: {
                addBack: {
                    label: "添加回來",
                    description: "新增回圖像、連結和聊天輸入列的 Discord 上下文選單"
                }
            }
        },
        webKeybinds: {
            name: "網頁鍵綁定",
            description: "它加入了 Discord 網頁版中缺少的熱鍵：ctrl+t、ctrl+shift+t、ctrl+tab、ctrl+shift+tab、ctrl+1-9、ctrl+,。 它實際上只適用於 Plextron/Legcord，不適用於瀏覽器。"
        },
        webScreenShareFixes: {
            name: "WebScreenShare修復",
            description: "取消了 Chromium 和 Plextron 用戶端上 2500 kbps 螢幕共享位元率限制。",
            option: {
                experimentalAV1Support: {
                    label: "實驗性 AV1 支持",
                    description: "啟用 AV1 編解碼器支援。 無限加載流可能會導致以下問題"
                }
            }
        },
        whoReacted: {
            name: "誰做出反應",
            description: "顯示對訊息做出反應的使用者頭像",
            option: {
                avatarClick: {
                    label: "頭像點擊",
                    description: "切換反應中頭像的可點擊性"
                }
            }
        },
        whosWatching: {
            name: "誰在看",
            description: "將滑鼠懸停在螢幕分享圖示上即可查看觀看您廣播的用戶",
            modal: {
                noSpectator: "沒有觀眾"
            },
            option: {
                showPanel: {
                    label: "顯示面板",
                    description: "在螢幕分享面板下方顯示檢視者"
                }
            }
        },
        writeUpperCase: {
            name: "寫大寫",
            description: "將訊息條目中每個句子的第一個字母轉換為大寫。",
            option: {
                blockedWords: {
                    label: "被阻止的單字",
                    description: "不應大寫的表達式（以逗號分隔）"
                }
            }
        },
        xSOverlay: {
            name: "XS覆蓋",
            description: "將 Discord 通知推送到 XSOverlay，以便在 VR 中輕鬆查看",
            notification: {
                call: {
                    title: "{{user}} 正在尋找您。",
                    content: "來電"
                },
                message: {
                    reply: "(回覆)",
                    embed: "[嵌入]",
                    onlyEmbed: "已發送訊息嵌入",
                    sticker: "[貼紙]",
                    onlySticker: "發送了一張貼紙",
                    image: "圖片",
                    attachment: "我"
                },
                test: {
                    title: "Plexcord' 和潛水！",
                    content: "這是測試通知！ 霹靂",
                    button: "發送測試通知"
                }
            },
            option: {
                webSocketPort: {
                    label: "WebSocket 端口",
                    description: "WebSocket 端口"
                },
                preferUDP: {
                    label: "UDP協定",
                    description: "如果您使用舊版的 XSOverlay 並且無法透過 WebSocket 連接，請啟用它。 此設定在網路上被忽略。"
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
                    description: "允許私人訊息通知"
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
                    label: "平仁吉",
                    description: "使用者標記顏色"
                },
                channelPingColor: {
                    label: "顏色 Ping 頻道",
                    description: "通道標記顏色"
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
                    label: "基於訊息長度的持續時間",
                    description: "根據訊息長度延長持續時間"
                },
                opacity: {
                    label: "不透明度",
                    description: "通知不透明度"
                },
                volume: {
                    label: "賽斯",
                    description: "聲級"
                }
            }
        },
        youtubeAdblock: {
            name: "YouTube廣告攔截",
            description: "使用 AdGuard 阻止 YouTube 嵌入廣告和 WatchTogether 活動"
        },
        youtubeDescription: {
            name: "YouTube說明",
            description: "為 YouTube 影片嵌入添加說明"
        }
    }
} as const;

export default translations;
