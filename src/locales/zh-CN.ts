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
        title: "设置",
        language: {
            selector: {
                label: "语言",
                description: "选择您的 Plexcord 首选语言。",
                placeholder: "选择语言"
            }
        },
        location: {
            label: "设置位置",
            description: "Plexcord 设置部分的放置位置",
            top: "在最顶部",
            nitro: {
                above: "硝基部分上方",
                below: "硝基部分下方"
            },
            activity: {
                above: "以上活动设置",
                below: "下面的活动设置"
            },
            bottom: "在最底部"
        },
        switches: {
            useQuickCss: {
                label: "启用自定义 CSS",
                description: "应用你配置的 QuickCSS"
            },
            enableReactDevtools: {
                label: "启用 React 开发者工具",
                description: "主要供插件开发者使用。如果你不知道这是什么，请忽略"
            },
            mainWindowFrameless: {
                label: "禁用主窗口框架",
                description: "移除原生窗框以获得更干净的外观。您仍然可以通过拖动标题栏区域来移动窗口。"
            },
            frameless: {
                label: "禁用窗框",
                description: "移除原生窗框以获得更干净的外观。您仍然可以通过拖动标题栏区域来移动窗口。"
            },
            nativeTitleBar: {
                label: "使用 Windows 的原生标题栏而不是 Discord 的自定义标题栏",
                description: "将 Discord 的自定义标题栏替换为标准 Windows 标题栏。这可能会提高与某些窗口管理工具的兼容性。"
            },
            transparent: {
                label: "启用窗口透明度",
                description: "使 Discord 窗口透明。需要一个支持透明度的主题，否则将不起作用。",
                isWindows: "这将阻止窗口调整大小并阻止您将窗口捕捉到屏幕边缘。",
                notWindows: "这将阻止窗口调整大小。"
            },
            winCtrlQ: {
                label: "将 Ctrl+Q 注册为关闭 Discord 的快捷方式（替代 Alt+F4）",
                description: "添加 Ctrl+Q 作为关闭 Discord 的键盘快捷键。这提供了 Alt+F4 的替代方法来快速关闭应用程序。"
            },
            disableMinSize: {
                label: "禁用最小窗口大小",
                description: "允许将窗口调整为任意大小，甚至小于 Discord 的最小尺寸"
            }
        },
        quickActions: {
            title: "快速行动",
            description: "您可能想要执行的常见操作。这些快捷方式使您可以快速访问常用功能，而无需浏览菜单。",
            notificationLog: "通知日志",
            editQuickCSS: "编辑 QuickCSS",
            relaunchDiscord: "重新启动不和谐",
            openSettingsFolder: "打开设置文件夹",
            viewSourceCode: "查看源代码"
        },
        specialCards: {
            donations: {
                title: "捐款",
                subtitle: "感谢您的捐赠！",
                description: "您可以随时通过消息@mutanplex 管理您的福利。",
                button: "捐",
                invite: "加入我们的不和谐",
                invalid: "邀请链接无效或过期。"
            },
            supportProject: {
                title: "支持项目",
                description: "请考虑通过捐赠来支持 Plexcord 的发展！"
            },
            contributions: {
                title: "贡献",
                subtitle: "感谢您的贡献！",
                description: "由于您为 Plexcord 做出了贡献，您现在拥有了一个很酷的新徽章！",
                buttonTitle: "查看您做出的贡献"
            }
        },
        settingsSection: {
            title: "设置",
            description: "配置 Plexcord 的行为方式以及与 Discord 的集成方式。这些设置会影响 Discord 客户端的外观和行为。",
            hintParts: {
                prefix: "您可以通过配置 {{pluginLink}} 来自定义此设置部分在 Discord 设置菜单中的显示位置",
                linkText: "设置插件"
            }
        },
        notifications: {
            title: "通知",
            description: "配置 Plexcord 如何处理通知。您可以自定义接收警报的时间和方式，或查看过去通知的历史记录。",
            settings: "通知设置",
            viewLog: "查看通知日志",
            permissions: {
                denied: {
                    title: "桌面通知权限被拒绝",
                    label: "您已拒绝通知权限。桌面通知不起作用！"
                }
            },
            style: {
                label: "通知样式",
                description: "某些插件可能会向您显示通知。它们有两种风格：",
                plexcord: "Plexcord 通知",
                plexcordDesc: "这些是应用内通知",
                desktop: "桌面通知",
                desktopDesc: "本机桌面通知（例如当您收到 ping 时）",
                onlyWhenNotFocused: "仅当 Discord 未聚焦时才使用桌面通知",
                always: {
                    desktop: "始终使用桌面通知",
                    plexcord: "始终使用 Plexcord 通知"
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
                label: "错过的通知计数",
                description: "当重新聚焦 Discord 时，会弹出一条通知，显示您错过了多少次",
                whileYou: "当你不在的时候",
                count: "{{count}} 通知{{s}} 已收到",
                s: "s"
            },
            timeout: {
                label: "通知超时",
                description: "通知在自动消失之前在屏幕上停留的时间（以秒为单位）"
            },
            logLimit: {
                label: "通知日志限制",
                description: "在删除旧通知之前保留在日志中的通知的最大数量。设置为 {{disable}} 以禁用通知日志，设置为 {{unlimited}} 以从不自动删除旧通知"
            },
            opacity: {
                label: "通知不透明度",
                description: "应用内通知的不透明度"
            },
            maxNotifications: {
                label: "最大通知数",
                description: "一次显示的最大通知数"
            },
            behavior: {
                label: "通知行为",
            },
            disableInStreamerMode: {
                label: "在流光模式下禁用",
                description: "在流媒体模式下禁用通知"
            },
            renderImages: {
                label: "渲染图像",
                description: "渲染通知中的图像"
            },
            streamingTreatment: {
                label: "流媒体处理",
                description: "如何在共享屏幕时处理通知",
                normal: "正常 - 正常显示通知",
                noContent: "无内容 - 隐藏通知正文",
                ignore: "忽略 - 根本不显示通知"
            },
        },
        windowsMaterial: {
            title: "Windows 背景材质（需要重启）",
            description: "Windows 透明背景效果。你需要一个支持透明的主题，否则此选项不会有任何效果。更改此设置后需要重启。",
            material: {
                none: "无",
                mica: "Mica（结合系统主题和桌面壁纸绘制背景）",
                tabbed: "Tabbed（背景着色更强的 Mica 变体）",
                acrylic: "Acrylic（模糊 Discord 后方的窗口，形成半透明背景）"
            }
        },
        macVibrancy: {
            title: "窗口活力风格（需要重新启动）",
            description: "自定义 macOS 窗口活力效果。这控制 Discord 窗口的模糊和透明度样式。更改需要重新启动才能生效。",
            placeholder: "窗户活力风格",
            style: {
                no: "没有活力",
                underPage: "页面下方（窗口着色）",
                content: "内容",
                window: "窗户",
                selection: "选择",
                titlebar: "标题栏",
                header: "标头",
                sidebar: "侧边栏",
                tooltip: "工具提示",
                menu: "菜单",
                popover: "弹出窗口",
                fullscreenUI: "全屏用户界面（透明但稍微模糊）",
                hud: "HUD（最透明）"
            }
        },
        tabs: {
            renderFailed: "无法渲染 {{tab}} 标签页。如果问题持续，请尝试使用安装程序重新安装！"
        }
    },

    plugins: {
        title: "插件",
        new: "新的",
        unknown: "未知",
        noDescription: "没有可用的描述。",
        restart: {
            apply: "重新启动以应用更改！",
            required: "需要重启！",
            description: "立即重新启动以应用新插件及其设置",
            following: "以下插件需要重新启动：",
            remainingCount: "还有 {{count}} 更多",
            fully: "某些插件需要重新启动才能完全禁用",
            would: "您想现在重新启动吗？",
            resetDefault: "重置为默认设置",
            failed: "无法启动依赖项：",
            button: {
                restart: "重新启动",
                later: "之后！",
                now: "立即重新启动",
                cancel: "取消",
                disableWarning: "永远禁用警告",
                disableAll: "全部禁用",
                reset: "重置",
                close: "关闭"
            }
        },
        contributor: {
            contributed: "贡献了",
            modal: {
                contributionsInfo: "{{userName}} 有 {{continuedLink}} 到 {{contributionCount}} 插件 {{s}}。",
                noContributions: "{{userName}} 尚未制作任何插件。他们很可能以其他方式{{contributedLink}}！"
            }
        },
        infoModal: {
            description: "按齿轮或信息图标以获取有关插件的更多信息",
            settingsInfo: "带有齿轮的插件具有可以修改的设置！",
            disableAll: "禁用所有插件"
        },
        error: {
            invalidInput: "提供的输入无效",
            stopping: "停止插件 {{plugin}} 时出错",
            starting: "启动插件 {{plugin}} 时出错",
            startDependency: "启动依赖项时出错：{{failures}}",
            infoRender: "渲染此插件的自定义信息组件时发生错误"
        },
        placeholder: {
            number: "输入一个数字",
            select: "选择一个选项",
            text: "输入一个值"
        },
        excluded: {
            desktop: "Discord 桌面应用程序或 Plextron",
            discordDesktop: "Discord 桌面应用程序",
            plextron: "Plextron 应用程序",
            web: "Plextron 应用程序和 Discord 网络版",
            dev: "Plexcord 开发者版本",
            browser: "Plexcord 网页浏览器版本"
        },
        search: {
            looking: "您在寻找吗",
            onlyAvailable: "仅适用于",
            noCriteria: "没有符合搜索条件的插件。"
        },
        required: {
            title: "所需插件",
            this: "Plexcord 需要此插件才能运行。",
            by: "以下人员需要此插件："
        },
        dangerModal: {
            title: "危险行为",
            disablePlugins: "禁用插件",
            disableText: "全部禁用",
            irreversible: "此操作不可逆转！",
            enableBack: "您绝对确定要继续吗？您以后随时可以重新启用它们。",
            undone: "此操作无法撤消。你确定吗？",
            resetDescription: "您即将将 {{pluginName}} 的所有设置重置为其默认值。",
            disable: "您即将禁用 {{enabledPlugins}} 插件！",
            confirmReset: "确认重置",
            cancel: "取消",
            resetSettings: "重置设置",
            resetText: "重置"
        },
        filters: {
            label: "过滤器",
            placeholder: "搜索插件...",
            option: {
                all: "显示全部",
                enabled: "显示已启用",
                disabled: "显示禁用",
                new: "显示新内容",
                userplugins: "显示用户插件",
                api: "显示 API 插件",
                type: "按类型筛选",
                tags: "按标签筛选",
                favorites: "显示收藏"
            }
        },
        pluginModal: {
            noSettings: "该插件没有任何设置。",
            authors: "作者",
            settings: "设置",
            successfulReset: "{{plugin}} 的设置已重置。",
            enabledStock: "启用库存插件",
            totalStock: "总库存插件",
            enabledUser: "启用的用户插件",
            totalUser: "用户插件总数",
            info: "查看更多信息",
            source: "查看源代码",
            favorite: "收藏插件 - 将其置顶到插件列表顶部",
            unfavorite: "取消收藏插件"
        },
        metadata: {
            api: {
                description: {
                    memberListDecorators: "用于将装饰器添加到成员列表的 API（在服务器和 DM 中）",
                    messageAccessories: "用于向消息添加附件的 API",
                    messageDecorations: "用于向消息添加装饰的 API",
                    chatInputButtons: "用于向聊天输入添加按钮的 API",
                    commands: "任何使用命令所需的 API",
                    contextMenu: "用于向上下文菜单添加/删除项目的 API。",
                    dynamicImageModal: "允许您在打开图像模式时省略宽度或高度",
                    menuItemDemangler: "Demangles Discord 的菜单项模块",
                    messageEvents: "使用消息事件的任何事物都需要 API",
                    messagePopover: "用于向消息弹出窗口添加按钮的 API",
                    messageUpdater: "用于更新和重新呈现消息的 API",
                    nicknameIcons: "用于在个人资料中向昵称添加图标的 API",
                    notices: "修复通知被自动忽略的问题",
                    serverList: "修改服务器列表的插件需要API",
                    userSettings: "修补 Discord 的 UserSettings 以公开他们的组和名称。",
                    audioPlayer: "用于播放内部 Discord 音频文件或外部音频链接的 API。",
                    userArea: "用于向用户区域面板添加按钮的 API。",
                    profileCollections: "用于将集合添加到用户个人资料面板的 API，例如 Discord 的游戏收藏。",
                    profileSections: "用于在用户个人资料面板“成员始于”区域附近添加章节的 API。",
                    headerBar: "用于向标题栏添加按钮的 API。",
                    surfaceClasses: "用于向 Discord 稳定布局区域添加插件自有的语义数据属性和有限 props 的 API。"
                },
                chatButtons: {
                    context: {
                        buttons: "按钮"
                    }
                }
            },
            badges: {
                description: "为用户添加徽章的API",
                contributor: {
                    plexcord: "Plexcord 贡献者",
                    vencord: "Vencord 贡献者",
                    userPlugin: "用户插件贡献者"
                },
                context: {
                    title: "徽章选项",
                    copy: {
                        name: "Copy Badge Name",
                        link: "复制徽章图像链接"
                    },
                    refetch: {
                        button: "重新获取徽章",
                        success: "徽章已成功重新获取！"
                    }
                },
                modal: {
                    title: "Plexcord 供体",
                    special: "此徽章是 Plexcord 捐赠者的特殊福利",
                    description: "请考虑成为捐助者来支持 Plexcord 的发展。这意味着很多！"
                }
            },
        },
        uiElements: {
            manage: "管理 UI 元素",
            allows: "允许您隐藏不喜欢的按钮",
            section: {
                chatbar: {
                    title: "聊天栏按钮",
                    description: "这些是聊天输入栏右侧的按钮"
                },
                messagePopover: {
                    title: "消息弹出按钮",
                    description: "当您将鼠标悬停在消息上时，这些是右侧的浮动按钮"
                }
            },
            button: "已启用插件的按钮将出现在此处。"
        },
        invalidInput: "输入无效",
        loading: "加载中...",
        authorPrefix: "作者："
    },

    patchHelper: {
        title: "补丁助手",
        description: "一个开发工具，可帮助您为 Plexcord 插件创建补丁。",
        fullPatch: {
            label: "完整补丁",
            description: "将完整的 JSON 补丁粘贴到此处以填写字段"
        },
        find: "寻找",
        match: "匹配",
        replacement: "替代品",
        preview: "预览",
        generatedCode: "生成的代码",
        group: "团体",
        diff: "差异",
        module: "模块",
        compile: "编译",
        compiled: "编译成功",
        copy: {
            clipboard: "复制到剪贴板",
            codeblock: "复制为代码块"
        },
        error: {
            noMatch: "未找到匹配项。这个模块可能是延迟加载的？",
            multipleMatch: "找到多个匹配项。请使用更具体的搜索模式。",
            noFind: "缺少“查找”字段。",
            noReplacement: "缺少“替换”字段。",
            invalidReplacement: "“替换”字段无效",
            replacementMatch: "缺少“replacement.match”字段",
            replacementReplace: "缺少“replacement.replace”字段",
            replacementMustFunction: "“替换”必须是一个函数"
        },
        cheatSheet: {
            title: "备忘单",
            identifiers: "与标识符（变量名、类名等）匹配的特殊正则表达式转义序列",
            dollar: "插入一个$",
            entireMatch: "插入整个匹配项",
            beforeMatch: "在匹配之前插入子字符串",
            afterMatch: "在匹配后插入子字符串",
            nthGroup: "插入第 n 个捕获组 ($1, $2...)",
            pluginInstance: "插入插件实例"
        },
        replacementEval: {
            label: "将替换视为函数",
            description: "如果启用，“替换”将被评估为一个函数"
        }
    },

    sync: {
        title: "备份与恢复",
        warning: "警告",
        warningText: "导入设置文件将覆盖您当前的设置。如果您想保留当前配置，请务必先导出备份。",
        description: "您可以将 Plexcord 设置导入和导出为 JSON 文件。这使您可以轻松地将设置转移到另一台设备，或在重新安装 Plexcord 或 Discord 后恢复您的设置。",
        successful: "设置已成功导入。重新启动以应用更改！",
        error: {
            failure: "导入设置失败：{{error}}",
            failedExport: "导出设置失败，请检查控制台",
            invalid: "设置无效。这还是 Plexcord 设置文件吗？",
            tooLarge: "数据存储太大 - 从备份中排除。如果需要，请使用“导出数据存储”。",
            clearSomeDate: "数据存储太大。请清除一些插件数据并重试。"
        },
        settings: {
            text: "备份中包含什么？",
            quickcss: "自定义 QuickCSS",
            theme: "主题链接",
            plugins: "插件设置",
            datastores: "插件数据存储（例如时区或 IRememberYou）"
        },
        import: {
            title: "导入设置",
            description: "选择以前导出的设置文件来恢复您的配置。这会将您当前的所有设置替换为备份中的设置。",
            all: "导入所有设置",
            plugins: "导入插件",
            css: "导入 QuickCSS",
            datastore: "导入数据存储"
        },
        export: {
            title: "导出设置",
            description: "您可以将当前的 Plexcord 设置导出到文件以进行备份或传输到其他设备。",
            all: "导出所有设置",
            plugins: "导出插件",
            css: "导出 QuickCSS",
            datastore: "导出数据存储"
        },
        backupFileType: "Plexcord 设置备份"
    },

    cloud: {
        text: "云",
        title: "设置同步",
        override: "云同步",
        description: "将您的 Plexcord 设置同步到云端。这使得您可以轻松地在多个设备上保持配置一致，而无需手动导入/导出。",
        switchDescription: "启用后，您的设置可以与云端同步。使用以下操作手动同步。",
        settings: "云设置",
        successful: "同步设置到云端！",
        updated: "您的设置已更新！单击此处重新启动以完全应用更改！",
        deleted: "设置已从云端删除！",
        integration: {
            title: "云端整合",
            description: "Plexcord 的云集成允许您跨多个设备和 Discord 安装同步您的设置。您的数据被安全存储，并且可以随时轻松恢复。",
        },
        reauth: "我们注意到您在另一个客户端中启用了云集成！由于限制，您需要重新授权才能继续使用它们。单击此处转到设置页面即可执行此操作！",
        error: {
            setup: "安装失败（无法检索 OAuth 配置）。",
            secret: "安装失败（没有返回秘密）。",
            string: "安装失败 ({{error}})。",
            connect: "云同步被禁用，因为此帐户未连接到 Plexcord 云应用程序。您可以通过在云设置中连接此帐户来再次启用它。 （注意：它将单独存储您的偏好）",
            noSettings: "云端没有任何设置。",
            uptodate: "您的设置是最新的。",
            localNewer: "您的本地设置比云设置更新。",
            delete: "无法删除设置 ({{error}})。",
            api: {
                returned: {
                    delete: "无法删除设置（API 返回 {{status}}）。",
                    to: "无法将设置同步到云（API 返回 {{status}}）。",
                    from: "无法从云同步设置（API 返回 {{status}}）。",
                    manifest: "无法获取用于删除的清单（API 返回 {{status}}）。"
                }
            },
            synchronize: {
                to: "无法将设置同步到云 ({{error}})。",
                from: "无法从云同步设置 ({{error}})。"
            }
        },
        warning: {
            enableCloudIntegration: "启用上面的云集成以使用设置同步功能。"
        },
        danger: {
            title: "危险区",
            description: "从云端永久删除您的所有数据。此操作无法撤消，并将删除所有同步设置以及存储在云后端的任何其他数据。",
            delete: {
                account: {
                    title: "删除云账户",
                    description: "您确定要永久删除您的云帐户和所有关联数据吗？此操作无法撤消。",
                    confirm: "删除帐户",
                    cancel: "取消"
                }
            }
        },
        notification: {
            title: "云端整合",
            enabled: "云集成已启用",
            host: "{{host}} 已添加至白名单。请重新启动应用程序以使更改生效。",
            erase: {
                successful: "云数据已成功删除",
                failed: "无法擦除所有数据（返回 API {{status}}），请联系支持人员。"
            }
        },
        button: {
            to: "同步至云端",
            from: "从云端同步",
            fromDescription: "这将用云上的设置覆盖您的本地设置。明智地使用！",
            delete: "删除云数据",
            enable: "启用云集成",
            reauthorize: "重新授权",
            confirm: "立即重新启动",
            later: "之后！"
        },
        privacy: "尊重您的隐私",
        source: "源代码",
        overview: "Plexcord 附带云集成，添加了跨设备同步设置等功能。它 {{privacy}} 和 {{source}} 已获得 AGPL 3.0 许可，因此您可以自己托管它。",
        authorization: "连接到云后端以同步设置。如果您尚未设置云集成，这将请求授权。",
        backend: {
            title: "云后台",
            description: "选择您的设置在云中的存储方式。默认情况下，使用 Plexcord Cloud，但您也可以连接自己的自托管云服务。",
            invalid: "无效网址"
        },
        sync: {
            title: "该设备的同步规则",
            description: "此设置控制设置如何在此设备和云之间移动。您可以让变化双向流动，或者选择一个地方作为事实的主要来源。",
            direction: {
                both: "双向同步（双向更改）",
                push: "该设备是源（仅上传）",
                pull: "云为源（仅供下载）",
                manual: "不自动同步（仅通过下面的按钮手动同步）"
            }
        }
    },

    changelog: {
        text: "变更日志",
        title: "变更日志",
        description: "您可以在此处找到 Plexcord 的最新更改和更新。",
        by: "经过",
        check: "存储库检查",
        uptodate: "最新",
        update: "更新",
        noMessage: "没有消息",
        unknown: "未知",
        updatedPlugins: "更新的插件",
        newSettings: "新设置",
        newSettingTooltip: "{{plugin}} 中的新设置",
        loading: "加载中...",
        repoUptodate: "存储库是最新的",
        fetch: "从存储库中获取",
        clear: "清除所有日志",
        internet: "确保您有互联网连接，然后重试。",
        recent: "最近的变化",
        codeChanges: "代码更改 {{count}} 新提交 {{s}}",
        updateLogs: "更新日志 ({{count}})",
        noCommit: "当前版本之前没有可用的提交。单击“从存储库获取”以检查新更改。",
        previous: "以前的更新会话及其提交历史记录和插件更改。",
        modal: {
            description: "查看 Plexcord 的最新更改。这会直接从存储库获取提交，以向您展示新内容。",
            repository: "存储库",
            failed: "检索失败 - 检查控制台",
            current: "当前的：",
            hide: "隐藏日志",
            show: "显示日志",
            fetch: {
                title: "获取更改",
                description: "检查存储库中是否有新的提交、插件更新和代码更改。这会将您当前的版本与最新的可用版本进行比较，并向您展示新增内容。",
                newCommit: "这些是自上一个版本以来的新提交和插件更新。您可以查看添加了哪些功能、修复了哪些错误以及哪些插件收到了更新。",
                confirm: "拿来",
            }
        },
        commit: {
            available: "可用提交",
            no: "没有新的提交",
            new: "新插件",
            updated: "更新的插件",
            settings: "新设置"
        },
        toast: {
            already: "已经与存储库保持同步",
            found: "从存储库中找到 {{count}} 新提交 {{s}}",
            local: "存储库与您的本地副本保持同步",
            failed: "无法从存储库获取:(",
            cleared: "所有日志均已清除",
            logCleared: "日志已被清除",
            yourLatest: "记录最新更新的提交"
        },
        alert: {
            clear: {
                title: "清除所有日志",
                body: "您确定要清除所有日志吗？此操作无法撤消。",
                confirm: "全部清除",
                confirmColor: "危险",
                cancel: "取消"
            },
            log: {
                title: "清除日志",
                body: "您确定要清除此日志吗？此操作无法撤消。",
                confirm: "清除日志",
                confirmColor: "危险",
                cancel: "取消"
            }
        },
        newPlugins: "{{count}} 新插件{{s}}",
        following: "最近的更新中添加了以下插件：",
        more: "+{{count}} 更多插件",
        error: {
            retrieveRepo: "无法获取仓库信息",
            fetchRepo: "无法从仓库获取数据",
            connectRepo: "无法连接到仓库。请检查你的网络连接。"
        }
    },

    csp: {
        restart: "需要重新启动才能应用此更改",
        blocked: {
            resources: "被阻止的资源",
            disallowed: "某些图像、样式或字体被阻止，因为它们来自不允许的域。",
            recommended: "强烈建议将它们移至 GitHub 或 Imgur。但如果您完全信任域，您也可以允许它们。",
            afterAllow: "允许域后，您必须完全关闭（从托盘/任务管理器）并重新启动 {{platform}} 才能应用更改。",
            allow: "允许",
            url: "被阻止的网址"
        },
        imgur: {
            direct: "Imgur 链接应该是 {{etc}} 形式的直接链接",
            copy: "要获取直接链接，请右键单击图像并选择“复制图像地址”。"
        },
        wants: {
            caller: "{{callerName}} 希望允许连接到 {{domain}}",
            detail: "除非您认可并完全信任 {{domain}}，否则您应该取消此请求！",
            restart: "您必须完全关闭并重新启动 {{appName}} 才能使更改生效。",
            type: {
                images: "图片",
                styles: "CSS 和主题",
                fonts: "字体"
            },
            content: "将允许从 {{domain}} 加载以下类型的内容：",
            understand: "我完全信任 {{domain}} 并了解允许与其建立连接的风险。",
            button: {
                cancel: "取消",
                allow: "允许"
            },
            title: "主机权限"
        }
    },

    themes: {
        title: "主题",
        management: "主题管理",
        description: "使用主题自定义 Discord 的外观。添加本地 .css 文件或直接从 URL 加载主题。带有齿轮图标的主题具有可以修改的自定义设置。",
        local: "当地主题",
        new: "新的",
        pinned: "已固定",
        stylus: "触控笔延长杆",
        bd: "BetterDiscord 主题",
        github: "GitHub",
        download: "寻找主题？查看 {{bd}} 或搜索 {{github}}。从 BetterDiscord 下载时，单击“下载”并将 .theme.css 文件放入您的主题文件夹中。",
        add: "添加",
        reset: "将设置重置为默认值",
        notCSS: "不是 CSS 文件。记得使用原始链接！",
        okay: "好的！",
        checking: "检查...",
        valid: "有效的！",
        upload: "上传主题",
        openFolder: "打开主题文件夹",
        loadMissing: "加载缺少的主题",
        editQuickCSS: "编辑 QuickCSS",
        editClient: "编辑客户端主题",
        website: "打开网站",
        discord: "不和谐服务器",
        downloadTheme: "下载",
        refresh: "刷新",
        delete: "删除",
        activation: {
            title: "主题激活",
            always: "始终开启",
            lightOnly: "仅浅色主题",
            darkOnly: "仅深色主题"
        },
        actions: {
            pin: "固定",
            unpin: "取消固定",
            editSettings: "编辑设置"
        },
        unknown: {
            title: "未知",
            author: "作者未知",
            theme: "不和谐的主题",
            description: "未提供描述。"
        },
        required: "以下插件是必需的，但未启用：",
        homepage: "主页",
        support: "支持",
        online: {
            title: "在线主题",
            description: "直接从 URL 而不是本地文件加载主题。当来源更改时，在线主题会自动更新，因此您始终拥有最新版本，无需手动下载。",
            enable: "启用在线主题",
            enableDescription: "切换在线主题加载。禁用后，所有在线主题将被关闭，并且您将无法添加新主题。",
            placeholder: "https://示例.cn/theme.css"
        },
        quickActions: {
            title: "快速行动",
            description: "管理主题的快捷方式。打开主题文件夹以添加新主题，使用 QuickCSS 进行快速样式调整，或在进行更改后重新加载主题。"
        },
        error: {
            userscript: "用户脚本不支持主题！",
            stylus: "您可以使用 {{stylus}} 安装主题！",
            expired: "链接无效或过期",
            text: "错误："
        },
        copy: {
            url: "复制网址",
            copied: "主题网址已复制！",
            settings: "复制主题设置",
            copiedSettings: "将主题设置复制到剪贴板。"
        },
        paste: {
            settings: "粘贴主题设置",
            empty: "您的剪贴板是空的。",
            invalid: "您的剪贴板没有有效的设置数据。",
            pasted: "从剪贴板粘贴主题设置。"
        },
        settings: {
            for: "{{themeName}} 的设置",
        },
        installed: {
            title: "已安装的主题",
            description: "在这里管理您的主题。本地主题从主题文件夹加载，在线主题从 URL 加载。带有齿轮图标的主题具有可自定义的设置。",
            count: "{{count}} 主题{{s}} 已安装（{{localCount}} 本地，{{onlineCount}} 在线）· {{enabledCount}} 已启用",
            search: "搜索主题...",
            loading: "正在加载主题...",
            none: "尚未安装主题。将主题文件添加到主题文件夹或添加上面的在线主题以开始使用。",
            noCriteria: "没有主题符合您的搜索或过滤条件。"
        },
        filter: {
            all: "显示全部",
            online: "在线主题",
            local: "当地主题",
            enabled: "启用",
            disabled: "残疾人"
        },
        notification: {
            refresh: {
                title: "主题更新",
                error: "刷新主题失败"
            },
            failed: {
                download: "主题下载失败"
            }
        },
        openInFolder: "在文件夹中打开",
        fallback: {
            author: "未知作者",
            description: "一个 Discord 主题。"
        }
    },

    updater: {
        title: "更新程序",
        settings: "更新程序设置",
        updates: "更新内容",
        updated: "已更新！",
        restart: "单击此处重新启动",
        repaired: "Plexcord 已修复！",
        ok: "好的",
        preferences: {
            title: "更新偏好设置",
            description: "控制 Plexcord 如何保持最新状态。您可以选择在后台自动更新或在有新更新可用时收到通知。",
        },
        github: {
            local: "您的本地副本比远程存储库具有更新的提交。当您进行本地更改时通常会发生这种情况。请在更新之前隐藏或重置它们。"
        },
        error: {
            check: "无法检查更新。检查控制台以获取更多信息",
            occurred: "发生未知错误",
            retrieve: "检索失败 - 检查控制台",
            title: "哎呀！",
            tryAgain: "发生未知错误。请重试或查看控制台以获取更多信息。",
            command: "未找到命令 {{path}}。请安装它并重试。",
            code: "代码 {{code}}。请参阅控制台以获取更多信息。",
            running: "运行 {{cmd}} 时出错：{{error}}",
            failed: "这也失败了:(尝试使用安装程序更新或重新安装！"
        },
        available: "有 1 条更新",
        updateAvailable: "Plexcord 更新可用！",
        click: "点击此处查看更新",
        available_plural: "有 {{count}} 更新",
        current: "最新！",
        successful: {
            title: "更新成功！",
            body: "更新成功。立即重新启动以应用更改？",
            button: {
                confirm: "重新启动",
                cancel: "现在不要！",
                update: "立即更新",
                check: "检查更新"
            },
            noFound: "没有找到更新"
        },
        automatically: {
            label: "自动更新",
            description: "自动更新 Plexcord，无需确认提示"
        },
        notify: {
            label: "自动更新完成时收到通知",
            description: "Plexcord 自动更新时显示通知"
        },
        repo: "回购协议",
        repoDescription: "这是 Plexcord 从中获取更新的 GitHub 存储库。",
        loading: "加载中...",
        unknownAuthor: "未知作者"
    },

    components: {
        error: {
            title: "哦不！",
            render: "渲染此组件时发生错误。更多信息可以在下面和您的控制台中找到。"
        },
        componentFailed: {
            message: "呃哦！无法呈现此页面。但是，有一个可用的更新可以修复该问题。您想立即更新并重新启动吗？"
        },
        quickCSS: {
            title: "QuickCSS 编辑器打开",
            message: "QuickCSS 编辑器仍然在后台打开。",
            detail: "您仍然想关闭 Discord 吗？这也将关闭 QuickCSS 编辑器。",
            cancel: "取消",
            close: "无论如何关闭",
            windowTitle: "Plexcord QuickCSS 编辑器"
        },
        messagePopover: {
            scrollLeft: "向左滚动",
            scrollRight: "向右滚动"
        },
        notices: {
            error: "显示通知时出错"
        },
        tray: {
            aboutPlexcord: "关于 Plexcord",
            updatePlexcord: "更新 Plexcord",
            noUpdateTitle: "没有可用更新",
            noUpdateBody: "你已在使用最新版本的 Plexcord。",
            updateFailedTitle: "更新失败",
            updateFailedBody: "无法应用 Plexcord 更新。",
            updateSuccessTitle: "更新成功",
            updateSuccessBody: "正在重启 Plexcord 以应用更新。",
            updateErrorTitle: "更新错误",
            updateErrorBody: "更新 Plexcord 时发生错误。\n\n{{error}}",
            openSettingsFolder: "打开设置文件夹",
            openThemesFolder: "打开主题文件夹"
        }
    },

    commands: {
        error: {
            execute: "执行命令“{{command}}”时发生错误"
        }
    },

    notifications: {
        dismiss: "关闭通知",
        noYet: "还没有通知",
        settings: "通知设置",
        log: {
            title: "通知日志",
            clear: "清除通知日志",
            sure: "你确定吗？",
            permamently: "这将永久删除 {{count}} 通知 {{s}}。此操作无法撤消。",
            button: {
                confirm: "做吧！",
                cancel: "没关系"
            }
        }
    },

    memberlist: {
        error: {
            render: "无法渲染 {{key}} 成员列表装饰器"
        }
    },

    message: {
        accessory: {
            error: {
                render: "无法呈现 {{key}} 消息附件"
            }
        },
        decoration: {
            error: {
                render: "无法渲染 {{key}} 消息装饰"
            }
        }
    },

    utils: {
        toast: {
            copied: "已复制到剪贴板！"
        }
    },

    common: {
        unit: {
            year: "年",
            years: "年",
            month: "月",
            months: "月",
            week: "星期",
            weeks: "周",
            day: "天",
            days: "天",
            hour: "小时",
            hours: "小时",
            minute: "分钟",
            minutes: "分钟",
            second: "第二",
            seconds: "秒",
            ago: "前",
            s: "s"
        },
        detectLanguage: "检测语言"
    },

    plugin: {
        tags: {
            accessibility: "无障碍",
            activity: "活动",
            appearance: "外观",
            chat: "聊天",
            commands: "命令",
            console: "控制台",
            customisation: "自定义",
            developers: "开发者",
            emotes: "表情",
            friends: "好友",
            fun: "娱乐",
            media: "媒体",
            notifications: "通知",
            organisation: "组织",
            privacy: "隐私",
            reactions: "反应",
            roles: "角色",
            servers: "服务器",
            shortcuts: "快捷方式",
            utility: "工具",
            voice: "语音"
        },
        concatenatedComponentExtractor: {
            name: "ConcatenatedComponentExtractor",
            description: "提取已被打包工具（bundler）拼接的组件"
        },
        concatenatedModules: {
            name: "ConcatenatedModules",
            description: "提取已被打包工具（bundler）拼接的模块"
        },
        noTrack: {
            name: "NoTrack",
            description: "禁用 Discord 的跟踪（分析/“科学”）、指标和 Sentry 崩溃报告",
            option: {
                disableAnalytics: {
                    label: "禁用分析",
                    description: "禁用 Discord 的跟踪（分析/“科学”）、指标和 Sentry 崩溃报告"
                },
                disableStackDumping: {
                    description: "Discord 崩溃时在控制台输出原生堆栈跟踪。需要完全重启。"
                }
            }
        },
        settings: {
            name: "Settings",
            description: "添加设置 UI 和调试信息",
            option: {
                language: {
                    label: "语言",
                    description: "选择您的 Plexcord 首选语言。"
                },
                settingsLocation: {
                    label: "设置位置",
                    description: "确定 Plexcord 设置部分的位置。"
                },
                includePlexcordInfoWhenCopying: {
                    label: "复制时包含 Plexcord 信息",
                    description: "点击设置页面左下角的版本信息时，一并复制 Plexcord 信息（Plexcord, Electron, Chromium）"
                }
            }
        },
        supportHelper: {
            name: "Support Helper",
            description: "帮助我们为您提供支持",
            commands: {
                description: {
                    debug: "发送 Plexcord 调试信息",
                    plugins: "发送 Plexcord 插件列表"
                }
            },
            modals: {
                outdated: {
                    title: "坚持，稍等！",
                    body: "您正在使用过时版本的 Plexcord！您的问题很可能已经得到解决。",
                    footer: "在寻求支持之前请先更新！",
                    dismiss: "如果你清楚自己在做什么，或无法更新，可以关闭此提示。",
                    button: {
                        cancel: "查看更新",
                        confirm: "立即更新并重新启动",
                        secondaryConfirm: "我知道我在做什么，否则我无法更新"
                    }
                },
                updater: {
                    title: "坚持，稍等！",
                    body: "您正在使用外部更新的 Plexcord 版本，我们不提供支持！",
                    footer: "请切换到 {{officially}}，或联系您的软件包维护者以获得支持。",
                    officially: "Plexcord 官方支持版本",
                    button: {
                        cancel: "取消",
                        confirm: "查看下载页面",
                        now: "立即更新"
                    },
                    toast: {
                        success: "成功！正在重新启动...",
                        already: "已经是最新的了！",
                        failed: "更新失败:("
                    }
                },
                custom: {
                    title: "坚持，稍等！",
                    header: "您正在使用自定义版本的 Plexcord，我们不提供支持！",
                    body: "我们仅提供对 {{officialBuild}} 的支持。要么 {{switch}} 要么​​自己解决你的问题。",
                    footer: "如果您忽视此规则，您将被禁止获得支持。",
                    official: "官方构建",
                    switch: "切换到官方版本",
                    button: {
                        confirm: "明白了",
                        secondaryConfirm: "不再显示"
                    }
                }
            },
            button: {
                debug: "运行 /plexcord-debug",
                plugins: "运行 /plexcord-plugins",
                snippet: "运行代码片段"
            },
            toast: {
                success: "成功！",
                failed: "无法运行片段:(",
                failedOpenInvite: "无法打开邀请，请检查控制台:(",
                upload: "插件列表上传成功！",
                failedUpload: "上传插件列表文件失败。请再试一次。",
                unableGenerate: "无法生成插件列表。"
            },
            dm: {
                warning: "请不要私信Plexcord插件开发者寻求支持！{{br}}相反，您可以加入{{support}}服务器并使用Plexcord支持频道：{{channel}}"
            },
            alert: {
                title: "警告：插件数量过多",
                paragraph1: "您启用了 100 多个插件。",
                paragraph2: "由于插件数量庞大，您可能无法获得支持。",
                paragraph3: "您的问题很可能是由插件冲突引起的。",
                paragraph4: "请考虑禁用一些插件来排除故障。",
                paragraph5: "您的插件列表将作为文本文件发送。",
            }
        },
        accountPanelServerProfile: {
            name: "AccountPanelServerProfile",
            description: "右键单击左下角您的帐户面板可以查看您在当前服务器中的个人资料",
            option: {
                prioritizeServerProfile: {
                    label: "优先考虑服务器配置文件",
                    description: "左键单击帐户面板时优先考虑服务器配置文件"
                }
            },
            context: {
                account: "查看帐户资料",
                server: "查看服务器配置文件",
                prioritize: "优先考虑服务器配置文件"
            }
        },
        altKrispSwitch: {
            name: "AltKrispSwitch",
            description: "使噪声抑制弹出窗口在“无”和“Krisp”之间切换，而不是在“Krisp”和“标准”之间切换"
        },
        alwaysAnimate: {
            name: "AlwaysAnimate",
            description: "为任何可以动画化的东西制作动画",
            option: {
                icons: {
                    label: "图标",
                    description: "始终为服务器图标、头像、装饰等设置动画"
                },
                statusEmojis: {
                    label: "状态表情符号",
                    description: "始终为状态表情符号添加动画"
                },
                serverBanners: {
                    label: "服务器横幅",
                    description: "始终为服务器横幅设置动画"
                },
                nameplates: {
                    label: "铭牌",
                    description: "始终为铭牌制作动画"
                },
                roleGradients: {
                    label: "角色梯度",
                    description: "始终为角色渐变设置动画"
                }
            }
        },
        alwaysExpandProfiles: {
            name: "AlwaysExpandProfiles",
            description: "始终将配置文件弹出窗口扩展为完整模式"
        },
        alwaysExpandRoles: {
            name: "AlwaysExpandRoles",
            description: "始终扩展个人资料弹出窗口中的角色列表",
            option: {
                hideArrow: {
                    label: "隐藏箭头",
                    description: "隐藏箭头"
                }
            }
        },
        animalese: {
            name: "Animalese",
            description: "每发送一条消息都会播放《动物森友会》动物语（他们经常大喊大叫）",
            option: {
                volume: {
                    label: "体积",
                    description: "动物声音的音量"
                },
                speed: {
                    label: "速度",
                    description: "动物声音的速度"
                },
                pitch: {
                    label: "沥青",
                    description: "螺距乘数"
                },
                messageLengthLimit: {
                    label: "消息长度限制",
                    description: "要处理的消息的最大长度"
                },
                processOwnMessages: {
                    label: "处理自己的消息",
                    description: "也可以发送您自己的消息"
                },
                soundQuality: {
                    label: "音质",
                    description: "使用的音质",
                    high: "高的",
                    med: "中等的",
                    low: "低的",
                    lowest: "最低"
                }
            }
        },
        alwaysTrust: {
            name: "AlwaysTrust",
            description: "删除烦人的不受信任域和可疑文件弹出窗口",
            option: {
                domain: {
                    label: "领域",
                    description: "删除打开链接时的不受信任域弹出窗口"
                },
                file: {
                    label: "文件",
                    description: "删除打开链接时的“潜在危险下载”弹出窗口"
                },
                noDeleteSafety: {
                    label: "无删除安全性",
                    description: "删除删除服务器时删除输入服务器名称的要求"
                },
                confirmModal: {
                    label: "确认模态",
                    description: "是否应该显示“您确定要删除”模式吗？"
                }
            },
            alert: {
                title: "删除服务器？",
                body: "如果这不是很明显的话，它是永久性的。",
                confirm: "删除",
                cancel: "取消"
            }
        },
        anonymiseFileNames: {
            name: "AnonymiseFileNames",
            description: "匿名上传的文件名",
            option: {
                anonymiseByDefault: {
                    label: "默认匿名",
                    description: "默认情况下匿名文件名。如果需要，您可以在上传弹出窗口中禁用此功能。"
                },
                spoilerMessages: {
                    label: "剧透消息",
                    description: "对标记为剧透的文件名进行匿名处理。"
                },
                method: {
                    label: "方法",
                    description: "匿名化方法",
                    random: "随机字符",
                    consistent: "持续的",
                    timestamp: "时间戳",
                    date: "日期"
                },
                randomisedLength: {
                    label: "随机长度",
                    description: "随机字符长度"
                },
                consistent: {
                    label: "持续的",
                    description: "一致的匿名化秘密"
                },
                dateFormat: {
                    description: "日期格式（支持 YYYY、MM、DD、HH、mm、ss、SSS）",
                    label: "日期格式"
                }
            },
            using: {
                anonymous: "使用匿名文件名",
                spoiler: "使用普通文件名"
            },
            spoiler: {
                description: "切换文件的剧透",
                toggle: "切换文件的扰流板（默认打开）",
                enabled: "剧透已启用！",
                disabled: "剧透已禁用！"
            }
        },
        arRpc: {
            name: "WebRichPresence(arRPC)",
            description: "arRPC 客户端插件，用于在 Discord Web 上启用 RPC（实验性）",
            use: {
                title: "如何使用arRPC",
                enable: "{{link}} 让服务器运行，然后启用插件。",
                link: "按照 GitHub 存储库中的说明进行操作"
            },
            toast: {
                connected: "连接到arRPC",
                failed: "无法连接到 arRPC，它是否正在运行？",
                retry: "重试"
            }
        },
        atSomeone: {
            name: "AtSomeone",
            description: "通过@someone，您可以随机提及某人"
        },
        autoDNDWhilePlaying: {
            name: "AutoDndWhilePlaying",
            description: "启动游戏时自动更新您的在线状态（在线、空闲、免打扰）",
            option: {
                statusToSet: {
                    label: "要设置的状态",
                    description: "启动游戏时设置的状态",
                    online: "在线的",
                    dnd: "请勿打扰",
                    idle: "闲置的",
                    invisible: "无形的"
                },
                excludeInvisible: {
                    label: "排除隐形",
                    description: "当您的状态设置为不可见时，防止自动状态更改"
                }
            }
        },
        autoZipper: {
            name: "AutoZipper",
            description: "在上传到 Discord 之前自动压缩指定的文件类型和文件夹",
            option: {
                extensions: {
                    label: "扩展",
                    description: "以逗号分隔的自动压缩文件扩展名列表（例如 .psd、.blend、.exe、.dmg）"
                }
            }
        },
        bannersEverywhere: {
            name: "BannersEverywhere",
            description: "在成员列表中显示横幅",
            option: {
                animate: {
                    label: "动画",
                    description: "动画横幅"
                },
                preferNameplate: {
                    label: "更喜欢铭牌",
                    description: "更喜欢铭牌而不是横幅"
                }
            }
        },
        betterActivities: {
            name: "BetterActivities",
            description: "在成员列表中显示活动图标并允许显示所有活动",
            option: {
                memberList: {
                    label: "会员名单",
                    description: "在成员列表中显示活动图标"
                },
                iconSize: {
                    label: "图标大小",
                    description: "活动图标的大小"
                },
                specialFirst: {
                    label: "特别第一",
                    description: "首先显示特别活动（目前为 Spotify 和 Twitch）"
                },
                renderGifs: {
                    label: "渲染 GIF",
                    description: "允许渲染 GIF"
                },
                removeGameActivityStatus: {
                    label: "删除“游戏活动”状态",
                    description: "删除游戏活动图标和状态"
                },
                userPopout: {
                    label: "用户弹出窗口",
                    description: "在个人资料弹出窗口/侧栏中显示所有活动"
                },
                hideTooltip: {
                    label: "隐藏工具提示",
                    description: "隐藏各个地方的活动"
                },
                allActivitiesStyle: {
                    label: "所有活动风格",
                    description: "显示所有活动的样式",
                    list: "列表",
                    carousel: "轮播",
                    left: "左边",
                    right: "正确的"
                }
            },
            text: {
                smallText: "小文本",
                largeText: "大文本"
            }
        },
        betterAudioPlayer: {
            name: "BetterAudioPlayer",
            description: "为音频附件播放器添加光谱仪和示波器可视化器",
            option: {
                oscilloscope: {
                    label: "示波器",
                    description: "启用示波器可视化工具"
                },
                spectrograph: {
                    label: "光谱仪",
                    description: "启用光谱仪可视化器"
                },
                oscilloscopeSolidColor: {
                    label: "示波器纯色",
                    description: "使用示波器的纯色而不是渐变色"
                },
                oscilloscopeColor: {
                    label: "示波器颜色",
                    description: "启用纯色时示波器的颜色"
                },
                spectrographSolidColor: {
                    label: "光谱仪纯色",
                    description: "对光谱仪使用纯色而不是渐变"
                },
                spectrographColor: {
                    label: "光谱仪颜色",
                    description: "启用纯色时光谱仪的颜色"
                }
            },
            toast: {
                invalidColorFormat: "{{settingKey}} 的颜色格式无效，请确保其格式为“R、G、B”或“#RRGGBB”",
                invalidColorFormatFor: "{{key}} 的颜色格式无效，请使用 \"R, G, B\" 或 \"#RRGGBB\""
            }
        },
        betterBanReasons: {
            name: "BetterBanReasons",
            description: "创建在 Discord 禁止模式中使用的自定义原因，和/或默认显示文本输入而不是选项。",
            option: {
                reasons: {
                    label: "原因",
                    description: "您的定制理由"
                },
                isTextInputDefault: {
                    label: "文本输入是否默认",
                    description: "默认情况下显示文本输入而不是选择菜单。 （相当于点击“其他”选项）"
                }
            },
            title: "原因",
            placeholder: "原因",
            add: "添加另一个原因",
            duration: {
                discordDefault: "Discord 默认",
                none: "不删除任何消息",
                hour1: "过去 1 小时",
                hours6: "过去 6 小时",
                hours12: "过去 12 小时",
                hours24: "过去 24 小时",
                days3: "过去 3 天",
                days7: "过去 7 天"
            },
            text: {
                autoDeleteDuration: "消息自动删除时长"
            }
        },
        betterBlockedUsers: {
            name: "BetterBlockedUsers",
            description: "允许您在阻止的用户列表中搜索并在设置中选择名称。",
            placeholder: "搜索用户..."
        },
        betterCommands: {
            name: "BetterCommands",
            description: "通过各种改进增强了指挥系统。",
            option: {
                autoFillArguments: {
                    label: "自动填充参数",
                    description: "使用所有参数自动填充命令，而不仅仅是必需的参数"
                },
                allowNewlinesInCommands: {
                    label: "允许命令中换行",
                    description: "允许在命令输入中换行（CTRL + Shift + Enter）"
                }
            },
            command: {
                refresh: {
                    description: "在本地刷新 Discord 应用程序命令",
                    user: "特定用户尝试刷新",
                    refreshing: "正在刷新应用程序命令...",
                    refreshed: "命令刷新成功！",
                    failed: "刷新命令失败。检查控制台了解详细信息。"
                }
            }
        },
        betterFolders: {
            name: "BetterFolders",
            description: "在专用侧边栏上显示服务器文件夹并添加与文件夹相关的改进",
            option: {
                sidebar: {
                    label: "侧边栏",
                    description: "在专用侧边栏上显示文件夹中的服务器"
                },
                sidebarAnim: {
                    label: "侧边栏动画",
                    description: "打开文件夹侧边栏的动画"
                },
                closeAllFolders: {
                    label: "关闭所有文件夹",
                    description: "选择不在文件夹中的服务器时关闭所有文件夹"
                },
                closeAllHomeButton: {
                    label: "关闭所有主页按钮",
                    description: "单击主页按钮时关闭所有文件夹"
                },
                closeOthers: {
                    label: "关闭其他",
                    description: "打开文件夹时关闭其他文件夹"
                },
                closeServerFolder: {
                    label: "关闭服务器文件夹",
                    description: "在该文件夹中选择服务器时关闭该文件夹"
                },
                forceOpen: {
                    label: "强制打开",
                    description: "切换到该文件夹​​的服务器时强制打开该文件夹"
                },
                enableNestedFolders: {
                    label: "启用嵌套文件夹",
                    description: "允许通过拖拽将文件夹嵌套在其他文件夹内部"
                },
                keepIcons: {
                    label: "保留图标",
                    description: "当主公会栏文件夹在 BetterFolders 侧边栏中打开时，继续在主公会栏文件夹中显示公会图标"
                },
                showFolderIcon: {
                    label: "显示文件夹图标",
                    description: "在 BetterFolders 侧边栏中的文件夹行会上方显示文件夹图标",
                    never: "绝不",
                    always: "总是",
                    moreThanOne: "当展开多个文件夹时"
                }
            }
        },
        betterGifAltText: {
            name: "BetterGifAltText",
            description: "将 GIF 替代文本从简单的“GIF”更改为包含 gif 标签/文件名"
        },
        betterGifPicker: {
            name: "BetterGifPicker",
            description: "使 gif 选择器默认打开最喜欢的类别",
            option: {
                keepOpen: {
                    label: "保持开放",
                    description: "选择 gif 后保持 gif 选择器打开"
                }
            }
        },
        betterInvites: {
            name: "BetterInvites",
            description: "在加入之前通过单击名称查看邀请到期日期、查看邀请者个人资料和预览服务器",
            render: {
                tip: "此邀请将于 {{time}} 过期",
                header: "{{name}} 邀请您参加 {{server}}",
                headerSelf: "您发送了加入 {{server}} 的邀请",
                never: "没有过期"
            }
        },
        betterNotesBox: {
            name: "BetterNotesBox",
            description: "隐藏注释或禁用拼写检查（在设置中配置！！）",
            option: {
                hide: {
                    label: "隐藏笔记",
                    description: "隐藏用户弹出窗口中的注释框"
                },
                noSpellCheck: {
                    label: "没有拼写检查",
                    description: "禁用笔记中的拼写检查"
                }
            }
        },
        betterPlusReacts: {
            name: "BetterPlusReacts",
            description: ":emoji: 前面的加号是要添加到的消息"
        },
        betterRoleContext: {
            name: "BetterRoleContext",
            description: "在用户资料或成员列表中右键点击身份组时，添加复制身份组颜色 / 编辑身份组 / 查看身份组图标的选项",
            option: {
                roleIconFileFormat: {
                    label: "角色图标文件格式",
                    description: "查看角色图标时使用的文件格式"
                }
            },
            context: {
                copyColor: "复制角色颜色",
                editRole: "编辑角色",
                viewIcon: "查看角色图标",
                viewMembers: "查看身分组成员"
            },
            text: {
                roleActions: "身份组操作"
            }
        },
        betterRoleDot: {
            name: "BetterRoleDot",
            description: "在 RoleDot（辅助功能设置）上单击复制角色颜色。还允许同时使用 RoleDot 和彩色名称。",
            option: {
                bothStyles: {
                    label: "两种风格",
                    description: "显示角色点和彩色名称"
                },
                copyRoleColorInProfilePopout: {
                    label: "在配置文件弹出窗口中复制角色颜色",
                    description: "允许单击配置文件弹出窗口中的角色点来复制角色颜色"
                }
            }
        },
        betterSessions: {
            name: "BetterSessions",
            description: "增强了会话（设备）菜单。允许您查看确切的时间戳、为每个会话指定自定义名称以及接收有关新会话的通知。",
            new: "新的",
            newSessions: "新会议：",
            rename: "重命名",
            newDevice: "新设备名称",
            resetName: "重置名称",
            save: "节省",
            cancel: "取消",
            option: {
                backgroundCheck: {
                    label: "背景调查",
                    description: "在后台检查新会话，并在检测到新会话时显示通知"
                },
                checkInterval: {
                    label: "检查间隔",
                    description: "在后台检查新会话的频率（如果启用），以分钟为单位"
                }
            }
        },
        betterSettings: {
            name: "BetterSettings",
            description: "增强您的设置菜单打开体验",
            option: {
                disableFade: {
                    label: "禁用淡入淡出",
                    description: "禁用交叉淡入淡出动画"
                },
                organizeMenu: {
                    label: "整理菜单",
                    description: "将设置齿轮上下文菜单组织成类别"
                },
                eagerLoad: {
                    label: "急切负载",
                    description: "消除了第一次打开菜单时的加载延迟"
                }
            },
            alert: {
                title: "需要重新启动",
                restart: "您已更改需要重新启动的设置。",
                confirm: "立即重新启动",
                cancel: "之后！"
            }
        },
        betterUploadButton: {
            name: "BetterUploadButton",
            description: "单击上传，右键打开菜单"
        },
        biggerStreamPreview: {
            name: "BiggerStreamPreview",
            description: "该插件允许您放大流预览",
            context: {
                viewPreview: "查看流预览"
            }
        },
        blockKeywords: {
            name: "BlockKeywords",
            description: "阻止包含特定用户定义关键字的消息，就像发送这些关键字的用户被阻止一样。",
            regexHelper: {
                title: "正则表达式助手",
                placeholder: "要测试的输入...",
                noPatterns: "未配置任何模式"
            },
            option: {
                blockedWords: {
                    label: "被阻止的单词",
                    description: "要阻止的以逗号分隔的单词列表"
                },
                useRegex: {
                    label: "使用正则表达式",
                    description: "检查消息内容时使用每个值作为正则表达式（高级）"
                },
                regexHelper: {
                    label: "正则表达式助手",
                    description: "用示例输入测试你的正则表达式"
                },
                caseSensitive: {
                    label: "区分大小写",
                    description: "是否使用区分大小写的搜索"
                },
                ignoreBlockedMessages: {
                    label: "忽略被阻止的消息",
                    description: "完全忽略（最近的）新消息栏"
                }
            }
        },
        blockKrisp: {
            name: "BlockKrisp",
            description: "防止 Krisp 加载"
        },
        blurNSFW: {
            name: "BlurNSFW",
            description: "模糊 NSFW 频道中的附件直至悬停",
            option: {
                blurAmount: {
                    label: "模糊量",
                    description: "模糊量（以像素为单位）"
                },
                blurAllChannels: {
                    label: "模糊所有通道",
                    description: "模糊所有频道中的附件（不仅仅是 NSFW）"
                }
            }
        },
        bypassPinPrompt: {
            name: "BypassPinPrompt",
            description: "使用引脚功能时绕过引脚提示"
        },
        bypassStatus: {
            name: "BypassStatus",
            description: "在请勿打扰模式下，仍会收到来自特定来源的通知。右键单击用户/频道/公会将其设置为绕过请勿打扰模式。",
            context: {
                remove: "删除状态绕过",
                add: "添加状态绕过"
            },
            option: {
                guilds: {
                    label: "行会",
                    description: "允许绕过的公会（在公会中任何地方进行 ping 操作时收到通知）",
                    placeholder: "用逗号分隔"
                },
                channels: {
                    label: "渠道",
                    description: "允许旁路的通道（在该通道中进行 ping 操作时通知）",
                    placeholder: "用逗号分隔"
                },
                users: {
                    label: "用户",
                    description: "允许绕过的用户（在 DM 中发送的所有消息都会收到通知）",
                    placeholder: "用逗号分隔"
                },
                allowOutsideOfDms: {
                    label: "允许 DM 外部",
                    description: "也允许选定的用户绕过 DM 之外的状态（类似于频道/公会绕过，但适用于选定用户发送的所有消息）"
                },
                notificationSound: {
                    label: "通知声音",
                    description: "是否应播放通知声音"
                },
                respectSilentPings: {
                    label: "尊重静默 Ping",
                    description: "尊重静默 ping（@silent / 抑制通知）"
                },
                statusToUse: {
                    label: "使用状态",
                    description: "用于白名单的状态",
                    online: "在线的",
                    idle: "闲置的",
                    dnd: "请勿打扰",
                    invisible: "无形的"
                }
            }
        },
        cakeDay: {
            name: "CakeDay",
            description: "使用蛋糕图标跟踪和显示用户生日",
            context: {
                label: "生日",
                setBirthday: "设置生日",
                clearBirthday: "清除生日",
                current: "当前的："
            },
            option: {
                chat: {
                    label: "聊天",
                    description: "在聊天中的用户名旁边显示蛋糕图标"
                },
                memberList: {
                    label: "会员名单",
                    description: "在成员列表中显示蛋糕图标"
                },
                profileBadge: {
                    label: "个人资料徽章",
                    description: "在用户个人资料中显示蛋糕徽章"
                },
                notificationSound: {
                    label: "通知声音",
                    description: "发送生日通知时播放声音"
                },
                userList: {
                    label: "已保存的生日",
                    description: "管理已保存的生日"
                }
            },
            locations: {
                chat: {
                    label: "聊天",
                    description: "聊天中用户名旁边"
                },
                memberList: {
                    label: "会员名单",
                    description: "在会员名单中"
                }
            },
            toast: {
                success: "生日设置成功！",
                invalid: "生日格式无效！仅接受 DD/MM。",
                cleared: "生日通关成功！"
            },
            notification: {
                title: "🎂 今天生日！",
                body: "今天是 {{username}} 的生日！"
            },
            modal: {
                title: "为 {{username}} 设置生日",
                description: "以 DD/MM 格式输入生日（例如 25/12）",
                placeholder: "例如25/12",
                current: "当前生日：",
                set: "设置生日",
                cancel: "取消",
                birthday: "今天是我的生日！ 🎂",
                saved: "已保存的生日",
                savedDesc: "尚未保存生日。右键单击用户即可添加他们的生日！",
                today: "今天",
                remove: "消除",
                loading: "加载中...",
                save: "节省",
                edit: "编辑"
            },
            text: {
                unknownUser: "未知用户"
            }
        },
        callTimer: {
            name: "CallTimer",
            description: "显示所有语音通话中的通话计时器",
            option: {
                format: {
                    label: "格式",
                    description: "紧凑或人类可读的格式",
                    human: "30天23小时0米42秒"
                },
                allCallTimers: {
                    label: "所有呼叫计时器",
                    description: "显示服务器中所有用户的呼叫计时器"
                },
                showWithoutHover: {
                    label: "不悬停显示",
                    description: "始终显示计时器，无需悬停"
                },
                showRoleColor: {
                    label: "显示角色颜色",
                    description: "以用户角色颜色显示（如果启用了 ShowRoleColor 插件）"
                },
                trackSelf: {
                    label: "追踪自己",
                    description: "还显示您自己的计时器"
                },
                showSeconds: {
                    label: "显示秒数",
                    description: "在计时器中显示秒数"
                },
                watchLargeGuilds: {
                    label: "观看大型公会",
                    description: "跟踪大型公会中的用户。如果您在许多拥有活跃语音用户的大型公会中，这可能会导致延迟。经过多达 2000 个主动语音用户的测试，没有出现任何问题。"
                },
                fixUI: {
                    label: "用户界面修复",
                    description: "在某些情况下，计时器可能会破坏用户界面。启用此选项可以修复它。"
                }
            }
        },
        channelBadges: {
            name: "ChannelBadges",
            description: "根据频道类型添加徽章",
            badge: {
                private: "该频道已被锁定。",
                nsfw: "该频道被标记为 NSFW。",
                rules: "该通道是服务器规则通道。"
            },
            option: {
                oneBadgePerChannel: {
                    label: "每个频道一个徽章",
                    description: "每个频道仅显示一个徽章"
                },
                showTextBadge: {
                    label: "显示文字徽章",
                    description: "显示文字徽章"
                },
                showVoiceBadge: {
                    label: "显示语音徽章",
                    description: "显示语音徽章"
                },
                showCategoryBadge: {
                    label: "显示类别徽章",
                    description: "显示类别徽章"
                },
                showDirectoryBadge: {
                    label: "显示目录徽章",
                    description: "显示目录徽章"
                },
                showAnnouncementThreadBadge: {
                    label: "显示公告主题徽章",
                    description: "显示公告主题徽章"
                },
                showPublicThreadBadge: {
                    label: "显示公共线程徽章",
                    description: "显示公共线程徽章"
                },
                showPrivateThreadBadge: {
                    label: "显示私人话题徽章",
                    description: "显示私人话题徽章"
                },
                showStageBadge: {
                    label: "演出舞台徽章",
                    description: "演出舞台徽章"
                },
                showAnnouncementBadge: {
                    label: "显示公告徽章",
                    description: "显示公告徽章"
                },
                showForumBadge: {
                    label: "显示论坛徽章",
                    description: "显示论坛徽章"
                },
                showMediaBadge: {
                    label: "显示媒体徽章",
                    description: "显示媒体徽章"
                },
                showNSFWBadge: {
                    label: "显示 NSFW 徽章",
                    description: "显示 NSFW 徽章"
                },
                showLockedBadge: {
                    label: "显示锁定徽章",
                    description: "显示锁定徽章"
                },
                showRulesBadge: {
                    label: "显示规则徽章",
                    description: "显示规则徽章"
                },
                showUnknownBadge: {
                    label: "显示未知徽章",
                    description: "显示未知徽章"
                },
                textBadgeLabel: {
                    label: "文字徽章标签",
                    description: "文字徽章标签",
                    default: "文本"
                },
                voiceBadgeLabel: {
                    label: "语音徽章标签",
                    description: "语音徽章标签",
                    default: "嗓音"
                },
                categoryBadgeLabel: {
                    label: "类别徽章标签",
                    description: "类别徽章标签",
                    default: "类别"
                },
                announcementBadgeLabel: {
                    label: "公告主题徽章标签",
                    description: "公告主题徽章标签",
                    default: "消息"
                },
                announcementThreadBadgeLabel: {
                    label: "公告主题徽章标签",
                    description: "公告主题徽章标签",
                    default: "新闻主题"
                },
                publicThreadBadgeLabel: {
                    label: "公共线程徽章标签",
                    description: "公共线程徽章标签",
                    default: "线"
                },
                privateThreadBadgeLabel: {
                    label: "私有线程徽章标签",
                    description: "私人话题徽章标签",
                    default: "私有线程"
                },
                stageBadgeLabel: {
                    label: "舞台徽章标签",
                    description: "舞台徽章标签",
                    default: "阶段"
                },
                directoryBadgeLabel: {
                    label: "目录徽章标签",
                    description: "目录徽章标签",
                    default: "目录"
                },
                forumBadgeLabel: {
                    label: "论坛徽章标签",
                    description: "论坛徽章标签",
                    default: "论坛"
                },
                mediaBadgeLabel: {
                    label: "媒体徽章标签",
                    description: "媒体徽章标签",
                    default: "媒体"
                },
                nsfwBadgeLabel: {
                    label: "NSFW 徽章标签",
                    description: "NSFW 徽章标签",
                    default: "国家科学基金会"
                },
                lockedBadgeLabel: {
                    label: "锁定徽章标签",
                    description: "锁定徽章标签",
                    default: "锁定"
                },
                rulesBadgeLabel: {
                    label: "规则徽章标签",
                    description: "规则徽章标签",
                    default: "规则"
                },
                unknownBadgeLabel: {
                    label: "未知徽章标签",
                    description: "未知徽章标签",
                    default: "未知"
                },
                textBadgeColor: {
                    label: "文字徽章颜色",
                    description: "文字徽章颜色"
                },
                voiceBadgeColor: {
                    label: "语音徽章颜色",
                    description: "语音徽章颜色"
                },
                categoryBadgeColor: {
                    label: "类别徽章颜色",
                    description: "类别徽章颜色"
                },
                announcementBadgeColor: {
                    label: "公告线程徽章颜色",
                    description: "公告主题徽章颜色"
                },
                announcementThreadBadgeColor: {
                    label: "公告线程徽章颜色",
                    description: "公告主题徽章颜色"
                },
                publicThreadBadgeColor: {
                    label: "公共话题徽章颜色",
                    description: "公共线程徽章颜色"
                },
                privateThreadBadgeColor: {
                    label: "私人话题徽章颜色",
                    description: "私人话题徽章颜色"
                },
                stageBadgeColor: {
                    label: "舞台徽章颜色",
                    description: "舞台徽章颜色"
                },
                directoryBadgeColor: {
                    label: "目录徽章颜色",
                    description: "目录徽章颜色"
                },
                forumBadgeColor: {
                    label: "论坛徽章颜色",
                    description: "论坛徽章颜色"
                },
                mediaBadgeColor: {
                    label: "媒体徽章颜色",
                    description: "媒体徽章颜色"
                },
                nsfwBadgeColor: {
                    label: "NSFW 徽章颜色",
                    description: "NSFW 徽章颜色"
                },
                lockedBadgeColor: {
                    label: "锁定徽章颜色",
                    description: "锁定徽章颜色"
                },
                rulesBadgeColor: {
                    label: "规则徽章颜色",
                    description: "规则徽章颜色"
                },
                unknownBadgeColor: {
                    label: "未知徽章颜色",
                    description: "未知徽章颜色"
                }
            },
            badges: {
                text: "文本",
                voice: "嗓音",
                category: "类别",
                announcement: "消息",
                announcementThread: "新闻主题",
                publicThread: "线",
                privateThread: "私有线程",
                stage: "阶段",
                directory: "目录",
                forum: "论坛",
                media: "媒体",
                nsfw: "国家科学基金会",
                locked: "锁定",
                rules: "规则",
                unknown: "未知"
            },
            tooltip: {
                locked: "该频道已被锁定。",
                nsfw: "该频道被标记为 NSFW。"
            }
        },
        channelTabs: {
            name: "ChannelTabs",
            description: "像浏览器一样将您经常访问的频道分组到选项卡中",
            open: "在新标签中打开",
            animation: {
                title: "动画控制",
                description: "启用或禁用频道选项卡的特定动画。每个选项都可以独立切换。",
                placeholder: "选择要启用的动画...",
                tabHover: "选项卡悬停效果（提升+缩放）",
                tabSelection: "选定的选项卡抬起动画",
                tabDragDrop: "选项卡拖放（幽灵+重新排序）",
                tabEnterExit: "选项卡进入/退出幻灯片（创建+关闭）",
                tabIconPop: "选择时弹出图标（图标放大）",
                closeRotation: "关闭按钮旋转",
                plusPulse: "加号按钮脉冲",
                mentionGlow: "提及徽章发光",
                compactExpand: "紧凑模式扩展",
                selectedBorder: "所选标签页强调色边框",
                selectedBackground: "选定的选项卡背景颜色",
                tabShadows: "选项卡阴影效果",
                tabRepositioning: "选项卡重新定位（平滑位置变化）",
                resizeHandle: "调整淡入淡出手柄大小",
                questActivate: "进行中任务渐变"
            },
            bookmark: {
                label: "书签",
                unknown: "未知用户",
                folder: "文件夹",
                add: "添加到书签",
                edit: "编辑书签",
                delete: "删除书签",
                remove: "从书签中删除",
                removeFolder: "从文件夹中删除书签",
                loading: "正在加载书签...",
                noBookmarks: "您没有书签。您可以添加打开的选项卡或通过右键单击隐藏它",
                quests: "任务",
                messageRequests: "留言请求",
                friends: "朋友们",
                shop: "店铺",
                library: "图书馆",
                discovery: "发现",
                nitro: "硝基",
                icymi: "伊西米",
                activity: "活动",
                specialPage: "特别页面",
                searchPlaceholder: "搜索书签",
            },
            button: {
                save: "节省",
                delete: "删除",
                cancel: "取消",
                reset: "重置",
                close: "关闭",
            },
            context: {
                label: "ChannelTabs 上下文菜单",
                bookmark: "ChannelTabs 书签上下文菜单",
                tab: "ChannelTabs 选项卡上下文菜单",
                compact: "袖珍的",
                bookmarkBar: "书签栏",
                openAll: "打开所有书签",
                openNew: "在新标签中打开",
                folderMenu: "书签文件夹菜单",
                close: {
                    tab: "关闭选项卡",
                    otherTabs: "关闭其他选项卡",
                    tabsToRight: "关闭右侧的选项卡",
                    tabsToLeft: "关闭左侧的选项卡",
                    reopen: "重新打开关闭的选项卡",
                    allTabs: "关闭所有选项卡"
                }
            },
            error: {
                noLogin: "没有登录帐户？"
            },
            modal: {
                add: {
                    title: "添加书签到文件夹",
                    select: "选择一个文件夹",
                    create: "创建一个"
                },
                folderIcon: {
                    title: "选择文件夹图标",
                    preview: "预览",
                    iconColor: "图标颜色",
                    search: "搜索",
                    searchPlaceholder: "搜索 {{count}} 个图标...",
                    folderName: "文件夹名称",
                    folderColor: "文件夹颜色",
                    folderIcon: "文件夹图标",
                    chooseIcon: "选择图标",
                    useDefaultIcon: "使用默认图标"
                },
                edit: {
                    title: "编辑书签",
                    name: "Bookmark Name",
                    folder: "文件夹颜色"
                },
                delete: {
                    title: "你确定吗？",
                    description: "删除书签文件夹也会删除其中的所有书签。"
                }
            },
            option: {
                onStartup: {
                    label: "启动时",
                    description: "启动时如何处理选项卡",
                    nothing: "不执行任何操作（在好友选项卡上打开）",
                    remember: "记住上次会话的选项卡",
                    open: "在一组特定的选项卡上打开"
                },
                tabSet: {
                    label: "标签集"
                },
                noPomeloNames: {
                    label: "没有柚子的名字",
                    description: "使用显示名称而不是 DM 的用户名"
                },
                showStatusIndicators: {
                    label: "显示状态指示器",
                    description: "显示 DM 的状态指示器"
                },
                showBookmarkBar: {
                    label: "显示书签栏"
                },
                persistUnreadCountFallback: {
                    label: "持久化未读计数回退",
                    description: "在重新加载之间为标签页和书签保留未读徽章回退"
                },
                bookmarkNotificationDot: {
                    label: "书签通知点",
                    description: "显示书签的通知点"
                },
                widerTabsAndBookmarks: {
                    label: "更宽的标签和书签",
                    description: "延长更大显示器的选项卡和书签的长度"
                },
                tabWidthScale: {
                    label: "制表符宽度比例",
                    description: "选项卡宽度比例（百分比）- 通过拖动选项卡边缘进行调整"
                },
                tabHeightScale: {
                    label: "标签页高度缩放",
                    description: "标签页高度缩放（百分比）。"
                },
                renderAllTabs: {
                    label: "渲染所有选项卡",
                    description: "将所有选项卡缓存在内存中以实现更快的切换（缓存滚动位置和状态）"
                },
                switchToExistingTab: {
                    label: "切换到现有选项卡",
                    description: "如果您要导航到的频道已存在该选项卡，请切换到该选项卡"
                },
                createNewTabIfNotExists: {
                    label: "如果不存在则创建新选项卡",
                    description: "如果您要导航到的频道不存在新选项卡，请创建一个新选项卡"
                },
                enableRapidNavigation: {
                    label: "启用快速导航",
                    description: "启用快速导航行为 - 在频道之间快速导航将替换当前选项卡，而不是创建新选项卡"
                },
                rapidNavigationThreshold: {
                    label: "快速导航阈值",
                    description: "用于快速导航的时间窗口（以毫秒为单位）。在此时间内，新频道将替换当前选项卡，而不是创建新选项卡。"
                },
                tabBarPosition: {
                    label: "标签栏位置",
                    description: "标签栏的位置",
                    top: "顶部",
                    bottom: "底部"
                },
                enableNumberKeySwitching: {
                    label: "启用数字键切换",
                    description: "启用数字键 (1-9) 来切换选项卡"
                },
                numberKeySwitchCount: {
                    label: "按键开关数量",
                    description: "通过数字键访问的选项卡数量 (1-9)"
                },
                enableCloseTabShortcut: {
                    label: "启用关闭选项卡快捷方式",
                    description: "启用关闭选项卡键盘快捷键"
                },
                enableNewTabShortcut: {
                    label: "启用新选项卡快捷方式",
                    description: "启用新选项卡键盘快捷键"
                },
                enableTabCycleShortcut: {
                    label: "启用选项卡循环快捷方式",
                    description: "启用选项卡循环键盘快捷键"
                },
                keybindsSection: {
                    label: "按键绑定",
                    description: "单击按钮并按所需的组合键。支持 CTRL、SHIFT 和 ALT 等修饰符。",
                    title: "键盘快捷键",
                    reset: "全部重置为默认值",
                    shortcutDisabled: "该快捷键当前已被禁用",
                    pressKey: "按任意键...",
                    conflictError: "该按键绑定已被使用：{{key}}",
                    closeTab: {
                        label: "关闭选项卡",
                        description: "使用键盘输入当前活动选项卡"
                    },
                    newTab: {
                        label: "新标签",
                        description: "打开包含当前频道的新选项卡"
                    },
                    cycleTabsForward: {
                        label: "向前循环选项卡",
                        description: "切换到下一个选项卡（环绕到第一个选项卡）"
                    },
                    cycleTabsBackward: {
                        label: "向后循环选项卡",
                        description: "切换到上一个选项卡（循环到最后一个）"
                    }
                },
                closeTabKeybind: {
                    label: "关闭标签键绑定",
                    description: "用于关闭当前选项卡的键盘快捷键"
                },
                newTabKeybind: {
                    label: "新标签键绑定",
                    description: "打开新选项卡的键盘快捷键"
                },
                cycleTabForwardKeybind: {
                    label: "循环选项卡向前键绑定",
                    description: "用于循环到下一个选项卡的键盘快捷键"
                },
                cycleTabBackwardKeybind: {
                    label: "循环选项卡向后键绑定",
                    description: "用于循环到上一个选项卡的键盘快捷键"
                },
                showTabNumbers: {
                    label: "显示选项卡编号",
                    description: "在选项卡上显示编号徽章以指示键盘快捷键"
                },
                tabNumberPosition: {
                    label: "标签编号位置",
                    description: "在选项卡上的何处显示编号徽章",
                    left: "左侧（图标之前）",
                    right: "右侧（内容之后）"
                },
                animations: {
                    label: "动画"
                },
                animationHover: {
                    label: "悬停动画",
                    description: "启用悬停提升和缩放效果"
                },
                animationSelection: {
                    label: "选择时的动画",
                    description: "启用选择动画（边框发光、提升）"
                },
                animationDragDrop: {
                    label: "拖放动画",
                    description: "启用拖放幻影效果"
                },
                animationEnterExit: {
                    label: "进入/退出时的动画",
                    description: "启用选项卡创建/关闭幻灯片动画"
                },
                animationIconPop: {
                    label: "Icon Pop 上的动画",
                    description: "选择时启用图标放大动画"
                },
                animationCloseRotation: {
                    label: "关闭旋转动画",
                    description: "为关闭按钮启用旋转动画"
                },
                animationPlusPulse: {
                    label: "加号按钮脉冲动画",
                    description: "为加号按钮启用脉冲动画"
                },
                animationMentionGlow: {
                    label: "提及发光的动画",
                    description: "为提及启用脉冲红光"
                },
                animationCompactExpand: {
                    label: "压缩/展开动画",
                    description: "实现紧凑选项卡的平滑扩展"
                },
                animationSelectedBorder: {
                    label: "选定边框上的动画",
                    description: "为选定的选项卡启用边框和发光样式"
                },
                animationSelectedBackground: {
                    label: "选定背景上的动画",
                    description: "为选定的选项卡启用背景颜色更改"
                },
                animationTabShadows: {
                    label: "选项卡阴影上的动画",
                    description: "在选项卡上启用阴影效果"
                },
                animationTabPositioning: {
                    label: "动画选项卡定位",
                    description: "当选项卡移动位置时启用平滑过渡"
                },
                animationResizeHandle: {
                    label: "动画调整大小手柄",
                    description: "启用淡入淡出动画以调整手柄大小"
                },
                animationQuestsActive: {
                    label: "动画任务活跃",
                    description: "当任务正在运行时，在“任务”选项卡上启用渐变动画"
                },
                compactAutoExpandSelected: {
                    label: "紧凑自动扩展选定",
                    description: "选择显示完整频道名称时自动展开紧凑选项卡"
                },
                compactAutoExpandOnHover: {
                    label: "悬停时紧凑自动展开",
                    description: "悬停时自动展开紧凑选项卡以显示完整的频道名称"
                },
                openInNewTabAutoSwitch: {
                    label: "在新标签页中打开自动切换",
                    description: "自动切换到从“在新选项卡中打开”上下文菜单打开的新选项卡"
                },
                bookmarksIndependentFromTabs: {
                    label: "独立于选项卡的书签",
                    description: "书签独立导航，不影响活动选项卡栏"
                },
                showResizeHandle: {
                    label: "显示调整大小手柄",
                    description: "将鼠标悬停在选项卡上以调整选项卡宽度时显示调整大小手柄"
                },
                openNewTabsInCompactMode: {
                    label: "以紧凑模式打开新选项卡",
                    description: "默认情况下以紧凑模式打开所有新创建的选项卡"
                },
                newTabButtonBehavior: {
                    label: "新标签按钮行为",
                    description: "新选项卡 (+) 按钮跟随选项卡而不是固定在右侧"
                },
                oneTabPerServer: {
                    label: "每台服务器一个选项卡",
                    description: "每台服务器仅限一个选项卡，因此在该服务器中打开新通道将使用现有选项卡。"
                },
                maxOpenTabs: {
                    label: "最大打开标签数",
                    description: "打开选项卡的最大数量（0 = 无限制）"
                }
            },
            tabs: {
                startup: "启动选项卡",
                currently: "设置为当前打开的选项卡"
            },
            toast: {
                notRestoring: "启用 KeepCurrentChannel 后不恢复选项卡",
                failed: {
                    restore: "恢复标签页失败",
                    saved: "无法加载已保存的选项卡"
                }
            },
            text: {
                folder: "文件夹"
            }
        },
        characterCounter: {
            name: "CharacterCounter",
            description: "在聊天输入框中添加字符计数器",
            option: {
                colorEffects: {
                    label: "色彩效果",
                    description: "打开或关闭颜色效果以接近字符限制"
                }
            }
        },
        cleanChannelGroups: {
            name: "CleanChannelGroups",
            description: "隐藏折叠类别中的所有频道，即使它们有未读消息。"
        },
        cleanChannelName: {
            name: "CleanChannelName",
            description: "移除频道名称中的表情和装饰。编辑频道时会恢复原名称。",
            option: {
                ignoredChannels: {
                    description: "以逗号分隔的保持不变的频道 ID 列表。",
                    label: "忽略的频道"
                }
            },
            text: {
                keepOriginalName: "保留原始名称"
            }
        },
        clearURLs: {
            name: "ClearURLs",
            description: "自动从您发送的网址中删除跟踪元素"
        },
        clickableRoles: {
            name: "ClickableRoles",
            description: "单击用户配置文件和成员列表中的角色可查看哪些成员拥有这些角色。",
            modal: {
                loading: "正在加载会员...",
                noMembers: "没有找到会员。",
                unknown: "未知角色",
                andMore: "还有 {{count}} 人"
            }
        },
        clientSideBlock: {
            name: "ClientSideBlock",
            description: "允许您在本地对任何用户隐藏几乎所有内容",
            replying: "回复被阻止的消息",
            option: {
                hideVc: {
                    label: "隐藏语音频道",
                    description: "隐藏包含被阻止用户的语音通道。"
                },
                usersToBlock: {
                    label: "要阻止的用户",
                    description: "用户 ID 以逗号和空格分隔"
                },
                hideBlockedUsers: {
                    label: "隐藏被阻止的用户",
                    description: "被阻止的用户是否也应该隐藏在各处"
                },
                hideBlockedMessages: {
                    label: "隐藏被阻止的消息",
                    description: "来自被阻止用户的消息是否应该完全隐藏（与旧的 noblockedmessages 插件相同）"
                },
                hideEmptyRoles: {
                    label: "隐藏空角色",
                    description: "如果所有成员都被阻止，角色标题是否应该隐藏"
                },
                blockedReplyDisplay: {
                    label: "阻止回复显示",
                    description: "当有人回复您隐藏的人时，应该显示什么而不是消息",
                    displayText: "显示隐藏消息已回复的文字",
                    hideReply: "从字面上看什么也没有"
                },
                guildBlackList: {
                    label: "公会黑名单",
                    description: "用于禁用功能的公会 ID"
                },
                guildWhiteList: {
                    label: "公会白名单",
                    description: "用于启用功能的公会 ID"
                }
            }
        },
        clientTheme: {
            name: "ClientTheme",
            description: "旧客户端主题实验的重现。为您的 Discord 客户端主题添加颜色",
            title: "主题颜色",
            add: "为您的 Discord 客户端主题添加颜色",
            option: {
                color: {
                    label: "颜色"
                },
                resetColor: {
                    label: "重置颜色"
                }
            },
            error: {
                modal: {
                    title: "你的主题看起来不太好！",
                    contrast: "所选颜色与文本对比度不佳",
                    nitro: "不支持 Nitro 主题",
                    switch: "切换到 {{oppositeTheme}} 模式",
                    disable: "禁用硝基主题",
                    reset: "重置主题颜色"
                }
            },
            text: {
                dark: "深色",
                light: "浅色"
            }
        },
        clipsEnhancements: {
            name: "ClipsEnhancements",
            description: "添加更多剪辑 FPS 和持续时间选项，以及 RPC 标记！",
            minutes: "分钟",
            option: {
                richPresenceTagging: {
                    label: "丰富的存在标记",
                    description: "何时应使用当前的 Rich Presence 标记剪辑？",
                    always: "总是",
                    only: "仅当活动名称的开始或结束匹配时",
                    never: "绝不"
                },
                clipsLink: {
                    label: "剪辑链接",
                    link: "更改剪辑设置中的 FPS 和持续时间选项！"
                }
            }
        },
        colorSighted: {
            name: "ColorSighted",
            description: "从状态中删除色盲友好图标，就像 2015-2017 Discord 一样"
        },
        commandPalette: {
            name: "CommandPalette",
            description: "Raycast 风格的命令面板，可在 Discord 任意位置执行操作",
            action: {
                command: {
                    label: "运行命令",
                    description: "通过 ID 给另一个调色板命令起别名。如果您不确定标识符，请使用选择器。"
                },
                settings: {
                    label: "打开设置页面",
                    description: "直接跳转到 Discord 设置页面。从选择器中选择一个页面。"
                },
                url: {
                    label: "打开网址",
                    description: "打开一个链接。使用 https:// 链接以获得最佳兼容性。"
                },
                macro: {
                    label: "运行宏",
                    description: "按顺序运行一系列命令。通过选择器添加步骤。"
                }
            },
            category: {
                auto: "自动（使用默认放置）",
                default: {
                    label: "快速行动",
                    description: "常见 Plexcord 快捷键"
                },
                plugins: {
                    label: "插件",
                    description: "启用、禁用和配置 Plexcord 插件",
                    enable: {
                        label: "启用插件"
                    },
                    disable: {
                        label: "禁用插件"
                    },
                    settings: {
                        label: "插件设置"
                    },
                    toolbox: {
                        label: "插件操作"
                    },
                    chatbar: {
                        label: "聊天栏按钮"
                    },
                    changes: {
                        label: "插件变更"
                    }
                },
                context: {
                    label: "当前背景",
                    description: "所选频道和公会的操作"
                },
                updates: {
                    label: "更新",
                    description: "了解 Plexcord 的最新动态"
                },
                discordSettings: {
                    label: "不和谐设置",
                    description: "跳转到 Discord 配置页面"
                },
                custom: {
                    label: "自定义命令",
                    description: "用户定义的命令选项板条目"
                },
                sessions: {
                    label: "会话工具",
                    description: "用于管理 Discord 会话的实用程序"
                },
                guilds: {
                    label: "行会",
                    description: "快速导航到您的公会"
                },
                friends: {
                    label: "朋友们",
                    description: "快速导航到您的朋友"
                },
                action: {
                    label: "行动"
                }
            },
            builtIn: {
                open: {
                    settings: {
                        plexcord: "打开 Plexcord 设置",
                        plugin: "打开插件设置"
                    }
                },
                reload: {
                    label: "重新加载不和谐",
                    description: "重新加载当前的 Discord 窗口"
                }
            },
            command: {
                enable: "启用 {{pluginName}}",
                enabled: "已启用 {{pluginName}}",
                disable: "禁用 {{pluginName}}",
                disabled: "残疾人 {{pluginName}}",
                failed: "命令失败：",
                toggleFailed: "无法切换 {{pluginName}}。",
                pluginSettings: "{{pluginName}} 设置",
                untitled: "无标题命令",
                new: "新命令",
                error: {
                    enter: "输入命令 ID 或从下面选择一个。",
                    noCommand: "没有命令与该 ID 匹配。"
                },
                discord: {
                    account: "开设我的账户",
                    privacy: "开放数据和隐私",
                    notifications: "打开通知",
                    voice: "打开语音和视频",
                    text: "打开文本和图像",
                    appearance: "开放式外观",
                    accessibility: "开放辅助功能",
                    keybinds: "打开按键绑定",
                    advanced: "打开高级",
                },
                updates: {
                    check: {
                        label: "检查更新",
                        description: "检查 Plexcord 更新",
                        one: "可用更新一",
                        multiple: "{{count}} 可用更新",
                        none: "无可用更新",
                        failed: "无法检查更新。"
                    },
                    changelog: {
                        label: "查看变更日志",
                        description: "打开 Plexcord 更改日志"
                    }
                },
                read: {
                    mark: {
                        label: "标记 {{channelLabel}} 已读"
                    }
                },
                pin: {
                    open: {
                        label: "打开 {{channelLabel}} 的引脚"
                    },
                    toggle: {
                        label: "切换固定上一个命令"
                    }
                },
                channel: {
                    mute: {
                        label: "静音 {{channelLabel}}",
                        oneHour: "将 {{channelLabel}} 静音 1 小时",
                        untilTomorrow: "明天之前将 {{channelLabel}} 静音",
                    },
                    unmute: {
                        label: "取消静音 {{channelLabel}}",
                    },
                    reopen: {
                        label: "重新打开上次关闭的 DM"
                    },
                    dm: {
                        open: {
                            label: "使用 {{userLabel}} 打开 DM"
                        }
                    }
                },
                guild: {
                    settings: {
                        label: "打开 {{guildLabel}} 的设置"
                    },
                    navigate: {
                        label: "导航至 {{guildLabel}}"
                    }
                },
                session: {
                    thirtyMinutesDnd: "设置请勿打扰 30 分钟",
                    oneHourDnd: "设置请勿打扰 1 小时",
                    cancelStatusReset: "取消状态定时器"
                },
                status: {
                    set: {
                        online: "设置状态：在线",
                        idle: "设置状态：空闲",
                        dnd: "设置状态：请勿打扰",
                        invisible: "设置状态：隐形"
                    }
                },
                toggle: {
                    streamer: "切换流媒体模式",
                    mute: "切换自动静音",
                    deafen: "切换自聋",
                },
                notification: {
                    clear: {
                        label: "清除桌面通知"
                    }
                },
                palette: {
                    settings: {
                        label: "打开命令面板设置",
                        description: "配置命令面板插件"
                    }
                },
                recent: {
                    label: "显示最近的命令",
                    description: "显示最近执行的命令",
                    rerun: "重新运行最后一个命令"
                },
                plugin: {
                    reload: {
                        label: "重新加载所有插件",
                        description: "尝试热重载每个启用的插件"
                    },
                    enable: {
                        label: "启用所有插件"
                    },
                    disable: {
                        label: "禁用所有不需要的插件"
                    },
                    restart: {
                        label: "重新启动 Plexcord",
                        description: "重新加载 Discord 客户端窗口"
                    }
                },
                quickCSS: {
                    label: "切换快速 CSS"
                },
                transparentity: {
                    label: "切换窗口透明度"
                },
                theme: {
                    open: {
                        label: "打开客户端主题设置"
                    }
                }
            },
            modal: {
                searchPlaceholder: "搜索命令",
                noCommand: "没有找到命令",
                add: {
                    title: "添加命令"
                },
                choose: {
                    title: "选择命令"
                },
                command: {
                    palette: {
                        label: "命令面板",
                        placeholder: "输入命令",
                        filtering: "按 {{tags}} 过滤",
                        noCommand: "没有找到命令",
                        pin: "引脚命令",
                        unpin: "取消固定命令"
                    },
                    target: {
                        label: "目标命令ID",
                        placeholder: "输入命令ID",
                        choose: "选择命令"
                    },
                    custom: {
                        label: "自定义命令",
                        description: "1) 为命令命名 · 2) 添加可选描述/关键字/标签/类别 · 3) 选择一个操作并填写其详细信息（ID 应与别名和宏的现有调色板命令匹配）。",
                        auto: "自动（默认）",
                        expand: "扩张",
                        collapse: "坍塌",
                        collapsed: {
                            label: "标签",
                            description: "显示名称",
                            advanced: {
                                hide: "隐藏高级选项",
                                show: "显示高级选项"
                            },
                            subtitle: {
                                label: "描述",
                                placeholder: "可选字幕"
                            },
                            keywords: {
                                label: "关键词",
                                placeholder: "以逗号分隔的关键字"
                            },
                            tags: {
                                label: "标签",
                                placeholder: "逗号分隔的标签"
                            },
                            suggestion: {
                                label: "建议"
                            },
                            chooseCommand: {
                                label: "选择此命令在调色板中的显示位置。"
                            },
                            danger: {
                                label: "显示为危险"
                            }
                        },
                        remove: "删除命令",
                        add: "添加命令"
                    }
                },
                settings: {
                    noSelected: "未选择页面",
                    current: "当前页面",
                    choose: "选择页面..."
                },
                url: {
                    url: "网址",
                    error: "使用 http:// 或 https:// 链接。",
                    valid: "输入有效的 URL。",
                    open: {
                        external: "对外开放",
                    }
                },
                macro: {
                    sequence: {
                        label: "命令序列",
                        placeholder: "命令-a，命令-b"
                    },
                    addStep: "添加步骤",
                    unknownId: "未知的命令 ID"
                }
            },
            status: {
                online: "在线的",
                idle: "闲置的",
                dnd: "请勿打扰",
                invisible: "无形的"
            },
            tag: {
                core: "核",
                navigation: "导航",
                utility: "公用事业",
                developer: "开发商",
                customization: "定制化",
                plugins: "插件",
                session: "会议",
                context: "语境",
                custom: "风俗",
                guilds: "行会",
                friends: "朋友们",
                other: "其他"
            },
            toast: {
                chat: {
                    button: {
                        unableToFind: "找不到“{{label}}”聊天按钮。",
                        failedToTrigger: "无法触发 {{label}}。",
                        activated: "{{label}} 已激活。"
                    }
                },
                channel: {
                    mute: {
                        unavailable: "通道静音控制不可用",
                        muted: "频道静音。",
                        unmuted: "频道取消静音。",
                        failed: "无法更新通道静音状态。"
                    },
                    dm: {
                        no: "此会话没有 DM 关闭记录。",
                        reOpened: "重新打开上次关闭的 DM。",
                        noAvailable: "DM 不再可用。"
                    }
                },
                command: {
                    loop: "在宏执行中检测到命令循环。",
                    notFound: "未找到命令 {{commandId}}。",
                    unsupported: "不支持的自定义命令操作。",
                    failedToRun: "无法运行 {{label}}。",
                    notMetadata: "命令面板插件元数据不可用。"
                },
                guild: {
                    mute: {
                        unavailable: "公会静音控制不可用",
                        muted: "公会静音。",
                        unmuted: "公会未静音。",
                        failed: "无法更新公会静音状态。"
                    },
                    settings: {
                        unable: "无法打开公会设置。",
                    }
                },
                panel: {
                    pin: {
                        unable: "无法打开图钉面板。",
                    }
                },
                status: {
                    reset: {
                        canceled: "已取消预定的状态重置。",
                        unableToChange: "现在无法更改状态。",
                        reverted: "状态恢复为 {{status}}。",
                        dnd: "{{duration}} 分钟内请勿打扰。"
                    },
                    change: {
                        unableToChange: "现在无法更改状态。",
                        changed: "状态更改为 {{status}}。"
                    }
                },
                read: {
                    marked: "将 {{channelLabel}} 标记为已读。",
                    failed: "无法将频道标记为已读。"
                },
                route: {
                    unable: "无法打开 {{destination}}。",
                },
                notification: {
                    cleared: "清除了所有通知。",
                    failed: "无法清除通知。",
                    notSupported: "不支持通知清除。"
                },
                streamerMode: {
                    enabled: "流光模式已启用。",
                    disabled: "流光模式已禁用。",
                },
                voice: {
                    micToggle: {
                        muted: "麦克风静音。",
                        unmuted: "麦克风取消静音。"
                    },
                    deafenToggle: {
                        deafened: "你现在已经聋了。",
                        undeafened: "你不再聋了。"
                    }
                },
                quickCSS: {
                    enabled: "启用快速 CSS。",
                    disabled: "快速 CSS 已禁用。"
                },
                transparentity: {
                    enabled: "窗口透明度已启用。",
                    disabled: "窗口透明度已禁用。"
                },
                plugin: {
                    disabled: {
                        label: "{{pluginName}} 已禁用。",
                        disable: "{{pluginName}} 已禁用。启用插件以使用此操作。"
                    },
                    required: {
                        label: "{{pluginName}} 需要重新启动才能重新加载。"
                    },
                    stop: {
                        failed: "无法停止 {{pluginName}}。"
                    },
                    restart: {
                        failed: "无法重新启动 {{pluginName}}。"
                    },
                    reload: {
                        label: "重新加载{{pluginName}}。",
                        noPlugin: "没有重新加载任何插件。",
                        reloaded: "重新加载 {{count}} 插件 {{s}}。"
                    },
                    toggle: {
                        enabled: "启用 {{changed}} 插件 {{s}}。",
                        disabled: "禁用 {{changed}} 插件 {{s}}。",
                        noChanged: "没有插件改变状态。"
                    },
                    run: {
                        failed: {
                            label: "无法运行 {{pluginName}}：{{actionLabel}}。"
                        }
                    }
                },
                commandDeleted: "命令已删除。",
                statusSetToLabel: "状态已设为 {{label}}。",
                themeSetToLabel: "主题已设为 {{label}}。",
                noSettingsPageWas: "未提供设置页面。",
                unableToOpenLabel: "无法打开 {{label_that_settings_page}}。",
                failedToStartDependencies: "无法启动依赖项：{{join}}",
                messageSentToUsername: "已向 {{username}} 发送消息。",
                enabledRestart: "已启用 {{name}}。重启以应用。",
                disabledRestart: "已禁用 {{name}}。重启以应用。",
                enabled: "已启用 {{name}}。",
                disabled: "已禁用 {{name}}。",
                errorStarting: "启动 {{name}} 时出错。",
                errorStopping: "停止 {{name}} 时出错。"
            },
            display: {
                channel: {
                    current: "当前频道",
                    group: "小组DM",
                    direct: "私信"
                },
                guild: {
                    current: "当前公会",
                }
            },
            option: {
                hotkey: {
                    label: "热键",
                    description: "用于打开命令面板的热键",
                    recording: "按任意键...",
                    reset: "重置"
                },
                visualStyle: {
                    label: "视觉风格",
                    description: "调色板外观",
                    classic: "经典的",
                    polished: "抛光"
                },
                showTags: {
                    label: "显示标签",
                    description: "显示命令的标签芯片"
                },
                enableTagFilter: {
                    label: "启用标签过滤器",
                    description: "显示标签过滤栏"
                },
                customCommands: {
                    label: "自定义命令",
                    description: "管理自定义命令选项板条目"
                },
                closeAfterExecute: {
                    description: "运行命令后关闭面板。",
                    label: "执行后关闭"
                }
            },
            template: {
                alias: {
                    label: "别名命令",
                    description: "镜像现有命令"
                },
                settings: {
                    label: "设置",
                    description: "打开不和谐设置"
                },
                url: {
                    label: "关联",
                    description: "打开外部 URL"
                },
                macro: {
                    label: "宏",
                    description: "运行一系列命令"
                }
            },
            text: {
                insertTextInChat: "在聊天中插入文本",
                name: "Name",
                commandName: "命令名称",
                settingsPage: "设置页面",
                searchSettingsPages: "搜索设置页面...",
                text: "文本",
                textToInsertInto: "要插入聊天框的文本",
                editCommand: "编辑命令",
                deleteCommand: "删除命令",
                createCustomCommand: "创建自定义命令",
                light: "浅色",
                ash: "灰烬",
                dark: "深色",
                onyx: "玛瑙",
                toggleMute: "切换静音",
                toggleDeafen: "切换拒听",
                setStatus: "设置状态",
                searchStatuses: "搜索状态...",
                setLabel: "设为 {{label}}",
                toggleTheme: "切换主题",
                openServer: "打开服务器",
                openChannel: "打开频道",
                openDm: "打开私信",
                goHome: "返回主页",
                goToServer: "前往服务器",
                searchServers: "搜索服务器...",
                goToChannel: "前往频道",
                searchChannels: "搜索频道...",
                searchFriends: "搜索好友...",
                myAccount: "我的账号",
                profiles: "个人资料",
                dataPrivacy: "数据和隐私",
                devices: "设备",
                connections: "关联账号",
                appearance: "外观",
                accessibility: "无障碍",
                voiceVideo: "语音和视频",
                chat: "聊天",
                textImages: "文本和图片",
                notifications: "通知",
                keybinds: "快捷键",
                authorizedApps: "已授权的应用",
                familyCenter: "家庭中心",
                advanced: "高级",
                plexcord: "Plexcord",
                plexcordPlugins: "Plexcord 插件",
                plexcordThemes: "Plexcord 主题",
                plexcordUpdater: "Plexcord 更新程序",
                plexcordChangelog: "Plexcord 更新日志",
                openQuickcss: "打开 QuickCSS",
                openUpdater: "打开更新程序",
                openChangelog: "打开更新日志",
                restartDiscord: "重启 Discord",
                managePlugins: "管理插件",
                searchPlugins: "搜索插件...",
                sendDm: "发送私信",
                recipient: "收件人",
                message: "消息",
                messageContent: "消息内容",
                openPaletteHotkey: "打开面板的快捷键",
                actions: "操作",
                preview: "预览",
                openCommand: "打开命令",
                copyAnswer: "复制答案",
                openDetails: "打开详情",
                calculator: "计算器",
                expression: "表达式",
                result: "结果",
                copyExpression: "复制表达式",
                pinned: "已置顶",
                suggestions: "建议",
                setAlias: "设置别名",
                aliasForLabel: "{{label}} 的别名",
                leaveEmptyToRemove: "留空即可移除",
                command: "命令",
                noResults: "无结果",
                addFile: "添加文件",
                saveCommand: "保存命令",
                createCommand: "创建命令",
                nameRequired: "名称为必填项。",
                enterValidUrl: "请输入有效的 URL。",
                pickSettingsPage: "请从建议中选择一个设置页面。",
                textRequired: "文本为必填项。",
                commandSaved: "命令已保存。",
                commandCreated: "命令已创建。",
                editCustomCommand: "编辑自定义命令",
                disablePlugin: "禁用插件",
                enablePlugin: "启用插件",
                pickRecipient: "请从建议中选择一个接收者。",
                addMessageOrFile: "请添加消息或文件。",
                pressKeys: "请按键...",
                answerCopied: "答案已复制到剪贴板。",
                calculationCopied: "计算式已复制到剪贴板。",
                unpinCommand: "取消置顶命令",
                pinCommand: "置顶命令",
                saveAlias: "保存别名",
                changeHotkey: "更改快捷键",
                recordHotkey: "录制快捷键",
                pressKeyCombo: "按下组合键，Backspace 清除，Esc 取消",
                searchIn: "搜索{{title}}...",
                searchCommands: "搜索命令...",
                somethingWentWrong: "出了点问题。",
                remove: "移除",
                enabled: "已启用",
                disabled: "已禁用",
                sectionNavigation: "导航",
                sectionCustom: "自定义",
                sectionPlugins: "插件",
                sectionMessaging: "消息",
                current: "当前",
                submit: "提交"
            },
            description2: "Raycast 风格的命令面板，可在 Discord 任意位置执行操作"
        },
        consoleJanitor: {
            name: "ConsoleJanitor",
            description: "禁用烦人的控制台消息/错误",
            option: {
                disableLoggers: {
                    label: "禁用记录器",
                    description: "禁用 Discord 的记录器"
                },
                disableSpotifyLogger: {
                    label: "禁用 Spotify 记录器",
                    description: "禁用 Spotify 记录器，该记录器会泄露帐户信息和访问令牌"
                },
                whitelistedLoggers: {
                    label: "白名单记录器",
                    description: "即使其他记录器被隐藏，分号 (;) 分隔的记录器列表也允许"
                },
                allowLevel: {
                    label: "允许级别",
                    description: "始终允许这些类型的记录器",
                    filter: "过滤器列表"
                }
            }
        },
        consoleShortcuts: {
            name: "Console Shortcuts",
            description: "为窗口上的许多内容添加较短的别名。运行“shortcutList”以获取列表。"
        },
        contentWarning: {
            name: "ContentWarning",
            description: "允许您指定默认情况下会模糊的某些触发词。单击模糊的内容将显示它。",
            option: {
                flagged: {
                    label: "已标记",
                    flagged: "标记的单词",
                    placeholder: "单词"
                },
                onClick: {
                    label: "单击时",
                    description: "仅在点击时显示触发内容，而不是悬停时显示"
                }
            }
        },
        copyEmojiMarkdown: {
            name: "CopyEmojiMarkdown",
            description: "允许您将表情符号复制为格式化字符串 (<a:blob_pwease:1402403381900742737>)",
            option: {
                copyUnicode: {
                    label: "复制统一码",
                    description: "复制原始 unicode 字符而不是 :name: 作为默认表情符号 (👽)"
                }
            },
            context: {
                copy: "复制表情符号 Markdown"
            },
            toast: {
                success: "成功！复制表情符号降价。"
            }
        },
        copyFileContents: {
            name: "CopyFileContents",
            description: "向文本文件附件添加一个按钮以复制其内容",
            copied: "复制了！",
            large: "文件太大，无法复制。",
            copyFileContents: "复制文件内容"
        },
        copyProfileColors: {
            name: "CopyProfileColors",
            description: "一个将人们的个人资料渐变颜色复制到剪贴板的插件。",
            copy: "复制服务器资料颜色",
            toast: {
                noColor: "未找到配置文件颜色！",
                copied: "配置文件颜色已复制到剪贴板！",
                error: "复制配置文件颜色时出错！"
            },
            text: {
                formatted: "主色 #{{primary}}，副色 #{{secondary}}"
            }
        },
        copyStatusUrls: {
            name: "CopyStatusUrls",
            description: "右键单击用户的状态 URL 时复制它",
            toast: {
                copied: "复制的网址",
                error: "复制 URL 时出错，请检查控制台以获取更多信息"
            }
        },
        copyStickerLinks: {
            name: "CopyStickerLinks",
            description: "添加复制和打开贴纸链接的功能",
            context: {
                copy: "复制贴纸链接",
                open: "打开贴纸链接"
            },
            toast: {
                success: "链接已复制！"
            }
        },
        copyUserMention: {
            name: "CopyUserMention",
            description: "添加一个按钮以在用户上下文菜单上复制用户的提及，最适合与 ValidUser 配合使用。",
            context: {
                copy: "复制用户提及"
            }
        },
        copyUserURLs: {
            name: "CopyUserURLs",
            description: "将“复制用户 URL”选项添加到用户上下文菜单。",
            context: {
                copy: "复制用户网址"
            }
        },
        crashHandler: {
            name: "CrashHandler",
            description: "用于处理崩溃并可能在不重新启动的情况下恢复的实用插件",
            option: {
                attemptToPreventCrashes: {
                    label: "尝试防止崩溃",
                    description: "是否尝试防止 Discord 崩溃。"
                },
                attemptToNavigateToHome: {
                    label: "尝试导航回家",
                    description: "是否尝试在崩溃恢复时导航到主页选项卡。"
                }
            },
            toast: {
                crashed: {
                    title: "不和谐已经崩溃了！",
                    body: "Awn :( Discord 已快速崩溃两次，且未尝试恢复",
                    update: "呃哦，Discord 刚刚崩溃了……但好消息是，有一个 Plexcord 更新可以解决这个问题！您想现在更新吗？",
                    recover: "正在尝试恢复...",
                    invalid: "邀请链接无效或过期。"
                }
            }
        },
        ctrlEnterSend: {
            name: "CtrlEnterSend",
            description: "使用Ctrl+Enter发送消息（可自定义）",
            option: {
                submitRule: {
                    label: "提交规则",
                    description: "发送消息的方式",
                    ctrlEnter: "Ctrl+Enter（Enter 或 Shift+Enter 换行）（在 macOS 上为 cmd+enter）",
                    shiftEnter: "Shift+Enter（输入换行）",
                    enter: "Enter（Shift+Enter 换行；Discord 默认值）"
                },
                sendMessageInTheMiddleOfACodeBlock: {
                    label: "在代码块中间发送消息",
                    description: "是否在代码块中间发送消息"
                }
            }
        },
        cursorBuddy: {
            name: "CursorBuddy",
            description: "添加一个跟随光标的精灵。",
            modal: {
                furColor: "毛皮颜色",
                outlineColor: "轮廓颜色"
            },
            option: {
                buddy: {
                    label: "伙伴",
                    description: "选择一个光标好友",
                    oneko: "温尼科",
                    fathorse: "胖马"
                },
                speed: {
                    label: "速度",
                    description: "你好友的速度",
                    invalid: "速度必须大于 0"
                },
                fps: {
                    label: "帧率",
                    description: "你好友的帧率",
                    invalid: "帧率必须大于0"
                },
                onekoSection: {
                    label: "温尼科"
                },
                furColor: {
                    label: "毛皮颜色",
                    description: "Oneko 的毛皮六角形颜色"
                },
                outlineColor: {
                    label: "轮廓颜色",
                    description: "Oneko 的轮廓六角形颜色"
                },
                fathorseSection: {
                    label: "胖马"
                },
                size: {
                    label: "尺寸",
                    description: "胖马的大小",
                    invalid: "大小必须大于 0"
                },
                fade: {
                    label: "褪色",
                    description: "当光标靠近时，马是否会消失"
                },
                freeroam: {
                    label: "自由漫游",
                    description: "马是否应该在空闲时自由漫步"
                },
                shake: {
                    label: "摇",
                    description: "如果马走路时摇动窗户"
                }
            }
        },
        customFolderIcons: {
            name: "CustomFolderIcons",
            description: "使用任意 PNG 自定义文件夹图标",
            option: {
                solidIcon: {
                    label: "实心图标",
                    description: "在图像背景上使用纯色背景"
                },
                folderIcons: {
                    label: "文件夹图标",
                    description: "文件夹图标设置"
                }
            },
            modal: {
                change: "更改文件夹图标的大小",
                save: "节省",
                unset: "取消设置",
                set: "设置新图标",
                hover: "设置后，您可能必须将鼠标悬停在文件夹上才能刷新它。"
            },
            context: {
                changeIcon: "更改图标"
            }
        },
        customIdle: {
            name: "CustomIdle",
            description: "允许您设置 Discord 空闲之前的时间（或禁用自动空闲）",
            backOnline: "欢迎回来！单击按钮即可上网。单击 X 保持空闲直至重新加载。",
            exit: "退出空闲状态",
            option: {
                idleTimeout: {
                    label: "空闲超时",
                    description: "Discord 进入空闲状态前的分钟数（0 表示禁用自动空闲）"
                },
                remainInIdle: {
                    label: "保持空闲状态",
                    description: "当您返回 Discord 时，请保持空闲状态，直到您确认要上网"
                }
            }
        },
        customRPC: {
            name: "CustomRPC",
            description: "将完全可定制的 Rich Presence（游戏状态）添加到您的 Discord 个人资料中",
            goTo: "进入{{portal}}创建应用并获取应用ID。",
            upload: "在 Rich Presence 选项卡中上传图像以获取图像密钥。",
            image: "如果您想使用图像链接，请下载图像并将图像重新上传到 {{imgur}}，然后右键单击图像并选择“复制图像地址”来获取图像链接。",
            button: "您在个人资料上看不到自己的按钮，但其他人都可以正常看到它们。",
            font: "一些奇怪的 unicode 文本（“字体”𝖑𝖎𝖐𝖊 𝖙𝖍𝖎𝖘）可能会导致丰富的存在无法显示，请尝试使用普通字母代替。",
            placeholder: "输入一个值",
            select: "选择一个选项",
            error: {
                appIdInvalid: "应用程序 ID 必须是有效的数字。",
                notice: "注意",
                sharing: "活动共享未启用，因此其他人将看不到你的自定义 Rich Presence！",
                enable: "使能够",
                validStream: "流媒体链接必须是有效的 URL。",
                mustBeURL: "必须是有效的 URL。",
                streamCharacters: "流媒体链接不得超过 512 个字符。",
                dontUse: "不要使用 Discord 链接。请改用 Imgur 图像链接。",
                imgur: "Imgur 链接必须是图像的直接链接（例如 https://i.imgur.com/...）。右键单击图像，然后单击“复制图像地址”",
                tenor: "Tenor 链接必须是图像的直接链接（例如 https://media.tenor.com/...）。右键单击 GIF，然后单击“复制图像地址”",
                required: "此字段是必需的。",
                tooLong: "长度不得超过 {{maxLength}} 个字符。",
                mustBeNumber: "必须是一个数字。",
                mustBePositive: "必须是正数。",
                startTimeInvalid: "开始时间戳必须大于 0。",
                endTimeInvalid: "结束时间戳必须大于 0。"
            },
            option: {
                appId: {
                    label: "应用程序ID",
                    description: "申请ID（必填）"
                },
                appName: {
                    label: "应用程序名称",
                    description: "应用名称（必填）"
                },
                details: {
                    label: "细节",
                    description: "详细信息（第 1 行）"
                },
                detailsURL: {
                    label: "详情网址",
                    description: "详情可点击网址"
                },
                state: {
                    label: "状态",
                    description: "状态（第 2 行）"
                },
                stateURL: {
                    label: "州网址",
                    description: "注明可点击的 URL"
                },
                partySize: {
                    label: "聚会规模",
                    description: "当前队伍规模（必须与最大队伍规模一起使用）"
                },
                partyMax: {
                    label: "最大聚会人数",
                    description: "最大聚会人数（必须与当前聚会人数一起使用）"
                },
                type: {
                    label: "活动类型",
                    description: "活动类型",
                    playing: "演奏",
                    streaming: "流媒体",
                    listening: "听力",
                    watching: "观看",
                    competing: "竞争"
                },
                streamLink: {
                    label: "串流链接",
                    description: "Twitch.tv 或 YouTube.com 链接（仅适用于流媒体活动类型）"
                },
                timestampMode: {
                    label: "时间戳模式",
                    description: "时间戳应该显示什么",
                    none: "没有任何",
                    sinceDiscordOpen: "自 Discord 开放以来",
                    sameAsCurrentTime: "与您当前时间相同（24小时后不重置）",
                    custom: "自定义时间"
                },
                startTime: {
                    label: "开始时间（以毫秒为单位）",
                    description: "开始时间戳（以毫秒为单位）（仅适用于自定义时间戳模式）"
                },
                endTime: {
                    label: "结束时间（以毫秒为单位）",
                    description: "结束时间戳（以毫秒为单位）（仅适用于自定义时间戳模式）"
                },
                imageBig: {
                    label: "大图键",
                    description: "大图像密钥（必须在 Rich Presence 选项卡中上传）"
                },
                imageBigTooltip: {
                    label: "图像大工具提示",
                    description: "大图像工具提示"
                },
                imageBigURL: {
                    label: "大图片网址",
                    description: "大图可点击 URL"
                },
                imageSmall: {
                    label: "小图像键",
                    description: "小图像密钥（必须在 Rich Presence 选项卡中上传）"
                },
                imageSmallTooltip: {
                    label: "图像小工具提示",
                    description: "小图像工具提示"
                },
                imageSmallURL: {
                    label: "小图片网址",
                    description: "小图片可点击 URL"
                },
                buttonOneText: {
                    label: "按钮 1 文本",
                    description: "按钮1文字"
                },
                buttonOneURL: {
                    label: "按钮 1 网址",
                    description: "按钮 1 网址"
                },
                buttonTwoText: {
                    label: "按钮 2 文本",
                    description: "按钮 2 文字"
                },
                buttonTwoURL: {
                    label: "按钮 2 网址",
                    description: "按钮 2 网址"
                },
                enablePresence: {
                    description: "是否显示状态",
                    label: "启用状态"
                }
            },
            toast: {
                savedPresetName: "已保存预设 {{name}}。",
                loadedPresetName: "已加载预设 {{name}}。",
                deletedPresetSelectedpreset: "已删除预设 {{selectedPreset}}。"
            },
            text: {
                presetName: "预设名称",
                selectAPreset: "选择预设",
                streamLinkTwitchOr: "直播链接（Twitch 或 YouTube，仅当活动类型为直播时）",
                presets: "预设",
                save: "保存",
                load: "加载",
                delete: "删除",
                noSavedPresetsYet: "暂无保存的预设。",
                showCustomRpc: "显示自定义 RPC",
                customRpcDisabled: "自定义 RPC 已禁用",
                theEnablePresenceSetting: "\"启用状态\"设置已禁用，因此你的状态不会显示。如果不是有意为之，请在下方启用。",
                activitySharingDisabled: "活动共享已禁用",
                discordDeveloperPortal: "Discord 开发者门户",
                imgur: "Imgur",
                enableActivitySharing: "启用活动共享"
            }
        },
        customSounds: {
            name: "CustomSounds",
            description: "自定义 Discord 的声音。",
            search: "搜索声音",
            placeholder: "按姓名或 ID 搜索",
            import: "进口",
            export: "出口",
            reset: "全部重置",
            debug: "调试",
            toast: {
                error: "加载自定义声音文件时出错",
                exported: "导出的 {{count}} 设置（不包括音频文件）",
                imported: "设置导入成功",
                importError: "导入设置时出错。检查控制台了解详细信息。",
                reset: "所有覆盖重置成功！",
                overrideDescription: "覆盖 {{soundName}}",
                previewSound: "播放声音时出错。",
                playing: "播放自定义声音时出错。文件可能已损坏。",
                invalidFile: "没有可供预览的自定义声音文件",
                uploaded: "文件上传成功：{{fileName}}",
                uploadedError: "上传文件时出错：{{error}}",
                invalidExtension: "文件类型无效。请上传音频文件。",
                uploading: "正在上传文件...",
                deleted: "文件删除成功",
                deleteError: "删除文件时出错。",
                loadingError: "加载自定义声音文件时出错"
            },
            button: {
                preview: "预览",
                stop: "停止",
                volume: "体积",
                soundSource: "声源",
                customFile: "自定义文件",
                uploadNew: "上传新内容",
                delete: "删除选定的文件"
            },
            option: {
                default: "默认",
                custom: "风俗",
                select: "选择一个文件...",
                overrides: {
                    label: "覆盖"
                },
                soundpack: {
                    label: "音效包",
                    description: "用于替代 Discord 中所设置音效包的音效包。",
                    default: "Discord 默认"
                }
            },
            type: {
                activityEnd: "活动结束",
                activityLaunch: "活动启动",
                activityUserJoin: "活动用户加入",
                activityUserLeft: "活动用户离开",
                asmrMessage: "ASMR 消息",
                bitMessage: "位消息",
                bopMessage: "波普消息",
                callCalling: "呼叫 呼叫",
                callRinging: "来电铃声",
                clipError: "剪辑错误",
                clipSave: "剪辑保存",
                ddrDown: "DDR下降",
                ddrLeft: "DDR左",
                ddrRight: "DDR右",
                ddrUp: "DDR 上行",
                deafen: "聋哑人",
                discodo: "迪斯科多",
                disconnect: "断开",
                duckyMessage: "鸭子留言",
                hangStatusSelect: "挂起状态选择",
                highfiveClap: "击掌",
                highfiveWhistle: "击掌口哨",
                humanMan: "人类的人",
                lofiMessage: "低保真讯息",
                mention1: "提及 1 (@role)",
                mention2: "提及 2（@everyone）",
                mention3: "提及 3（@here）",
                message1: "消息 1（通用）",
                message2: "消息2（服务器回复）",
                message3: "消息 3（DM 和群组 DM）",
                mute: "沉默的",
                overlayUnlock: "叠加解锁",
                poggermodeAchievement: "波格模式成就",
                poggermodeApplause: "Pogger模式掌声",
                poggermodeEnabled: "Pogger 模式已启用",
                poggermodeMessage: "Pogger模式消息",
                pttStart: "一键通开始",
                pttStop: "一键通停止",
                reconnect: "重新连接",
                robotMan: "机器人人",
                stageWaiting: "舞台等待",
                streamEnded: "直播结束",
                streamStarted: "直播开始",
                streamUserJoined: "流用户已加入",
                streamUserLeft: "流用户离开",
                success: "成功",
                undeafen: "不聋",
                unmute: "取消静音",
                userJoin: "用户加入",
                userLeave: "用户离开",
                userMoved: "用户已移动",
                vibingWumpus: "振动乌普斯"
            }
        },
        customTimestamps: {
            name: "CustomTimestamps",
            description: "消息和工具提示上的自定义时间戳",
            demo: {
                cozy: "点我切换到Cosy格式",
                compact: "点我切换到压缩格式",
                lastWeek: "此消息是上周发送的",
                hover: "将鼠标悬停在时间戳上可查看工具提示格式",
                edit: "编辑下面的格式以在此处查看它们的实时更新"
            },
            modal: {
                title: "使用方法：",
                moment: "Moment.js 格式化文档",
                hint: "此外，您可以在输入中使用这些：",
                calendar: "启用动态日期格式，例如",
                today: "今天",
                yesterday: "昨天",
                or: "或",
                relative: "为您提供诸如",
                relativeTime: "4小时前",
                preview: "预览",
                format: "日历格式",
                howTo: "如果在上述时间戳中使用，如何格式化 [calendar] 值。"
            },
            option: {
                formats: {
                    label: "格式",
                    description: "自定义时间戳格式",
                },
                cozyFormat: {
                    label: "舒适模式",
                    description: "舒适模式下消息中使用的时间格式"
                },
                compactFormat: {
                    label: "紧凑模式",
                    description: "紧凑模式下的时间格式和悬停在消息上"
                },
                tooltipFormat: {
                    label: "工具提示",
                    description: "在工具提示上使用的时间格式"
                },
                ariaLabelFormat: {
                    label: "咏叹调标签",
                    description: "在 aria 标签上使用的时间格式"
                },
                sameDayFormat: {
                    label: "同一天",
                    description: "[日历] 今天的格式",
                    default: "[今天] HH:mm:ss"
                },
                lastDayFormat: {
                    label: "最后一天",
                    description: "[日历] 昨天的格式",
                    default: "[昨天在] HH:mm:ss"
                },
                lastWeekFormat: {
                    label: "上星期",
                    description: "[日历] 上周的格式"
                },
                sameElseFormat: {
                    label: "较老的其他人",
                    description: "[日历] 旧日期的格式"
                }
            }
        },
        customUserColors: {
            name: "CustomUserColors",
            description: "让您可以随时随地为任何用户添加自定义颜色！强烈建议与 TypingTweaks 和 roleColorEverywhere 一起使用",
            option: {
                dmList: {
                    label: "DM列表",
                    description: "定义了自定义颜色的用户的名字将在 DM 列表中显示为彩色"
                },
                colorInServers: {
                    label: "服务器中的颜色",
                    description: "是否应在服务器内更改名称颜色"
                }
            },
            context: {
                setColor: "设置颜色"
            },
            modal: {
                custom: "定制颜色",
                pick: "选择一种颜色",
                delete: "删除条目",
                save: "节省"
            }
        },
        dearrow: {
            name: "DeArrow",
            description: "使 YouTube 嵌入的标题和缩略图不那么耸人听闻，由 DeArrow 提供支持",
            option: {
                hideButton: {
                    label: "隐藏按钮",
                    description: "在 YouTube 嵌入中隐藏 DeArrow 按钮"
                },
                replaceElements: {
                    label: "替换元素",
                    description: "选择将替换嵌入的哪些元素",
                    everything: "一切（标题和缩略图）",
                    title: "标题",
                    thumbnail: "缩略图"
                },
                dearrowByDefault: {
                    label: "默认情况下的 DeArrow",
                    description: "自动 DeArrow 视频"
                }
            },
            tooltip: {
                dearrowed: "该嵌入已被 DeArrowed；点击恢复",
                dearrow: "点击去箭"
            },
            text: {
                toggleDearrow: "切换 Dearrow"
            }
        },
        declutter: {
            name: "Declutter",
            description: "通过删除非必要的 UI 元素（例如个人资料效果、商店选项卡、增强功能等）来清理 Discord。",
            option: {
                userProfileHeader: {
                    label: "用户资料"
                },
                removeAvatarDecoration: {
                    label: "移除头像装饰",
                    description: "移除头像装饰。若启用了 Decor，此项会被禁用。",
                    alertBody: "移除头像装饰功能已禁用，以防止与 Decor 插件发生冲突。",
                    ok: "确定"
                },
                removeNameplate: {
                    label: "移除铭牌",
                    description: "取下铭牌。"
                },
                removeProfileEffect: {
                    label: "删除轮廓效果",
                    description: "删除打开时的个人资料动画效果。"
                },
                removeClanTag: {
                    label: "删除氏族标签",
                    description: "删除部落标签。"
                },
                alwaysShowUsername: {
                    label: "始终显示用户名",
                    description: "始终显示用户名而不是状态。"
                },
                accessibilityNotice: {
                    label: "无障碍通知",
                    description: "Discord 在辅助功能设置中已经有内置的用户名样式选项。"
                },
                friendsListHeader: {
                    label: "以上好友/DM 列表"
                },
                removeShopAboveDM: {
                    label: "删除 DM 上方的商店",
                    description: "删除 DM 列表上方的商店。"
                },
                removeQuestsAboveDM: {
                    label: "删除 DM 上方的任务",
                    description: "删除 DM 列表上方的任务。"
                },
                miscHeader: {
                    label: "杂项"
                },
                removeServerBoostInfo: {
                    label: "删除服务器提升信息",
                    description: "删除频道列表上方的服务器增强信息。"
                },
                removeBillingSettings: {
                    label: "删除计费设置",
                    description: "删除计费设置。"
                },
                removeGiftButton: {
                    label: "删除礼物按钮",
                    description: "删除礼物按钮。"
                },
                removeUnavailableEmojiPicker: {
                    label: "删除不可用的表情符号选择器",
                    description: "从表情符号选择器中删除不可用的类别。"
                },
                removeAudioMenus: {
                    label: "删除音频菜单",
                    description: "删除静音和震耳欲聋按钮旁边的菜单。"
                },
                removeButtonTooltips: {
                    label: "删除按钮工具提示",
                    description: "删除按钮工具提示。"
                },
                removeProfileFrame: {
                    description: "移除个人资料框。",
                    label: "移除个人资料框"
                },
                removeDisplayNameStyles: {
                    description: "移除成员列表中的动画/样式化显示名称。",
                    label: "移除显示名称样式"
                },
                removeLibraryAboveDms: {
                    description: "移除私信列表上方的游戏库。",
                    label: "移除私信上方的游戏库"
                },
                removeFamilyCenterAboveDms: {
                    description: "移除私信列表上方的家庭中心。",
                    label: "移除私信上方的家庭中心"
                }
            },
            text: {
                discordAlreadyHasA: "Discord 已在以下位置内置用户名样式选项：",
                accessibilitySettings: "无障碍设置。"
            }
        },
        decodeBase64: {
            name: "DecodeBase64",
            description: "解码任何消息的 Base64 内容并复制解码的内容。",
            right: {
                decode: "复制解码（左键单击）/解码 Base64（右键单击）",
                copy: "解码 Base64（左键单击）/复制解码（右键单击）"
            },
            option: {
                clickMethod: {
                    label: "点击方式",
                    description: "更改按钮以解码任何消息的 Base64 内容。",
                    left: "左键单击以解码 Base64 内容。",
                    right: "右键单击以解码 Base64 内容。"
                }
            },
            modal: {
                title: "解码的 Base64 内容",
                content: "解码内容",
                copy: "复制解码内容 {{index}}",
                copied: "解码内容复制到剪贴板！"
            }
        },
        decor: {
            name: "Decor",
            description: "创建并使用您自己的自定义头像装饰，或从预设中选择您最喜欢的。",
            presetPart: "{{name}} 预设的一部分",
            createdBy: "创建者：{{author}}",
            copy: "复制预设 ID",
            file: "文件",
            your: {
                title: "你的装饰品",
                subtitle: "您可以通过右键单击自己的装饰来删除它们。"
            },
            option: {
                changeDecoration: {
                    label: "更换装修",
                    description: "启用装饰并重新启动客户端以更改您的头像装饰。",
                    also: "您还可以从 {{profiles}} 页面访问 Decor 装饰品。",
                    profiles: "型材"
                },
                baseUrl: {
                    label: "基本网址",
                    description: "装饰 API 网址"
                },
                agreedToGuidelines: {
                    label: "同意准则",
                    description: "同意指导方针"
                }
            },
            context: {
                decorationOptions: "装饰选项",
                copyHash: "复制装饰哈希",
                deleteDecoration: "删除装饰"
            },
            alert: {
                delete: {
                    title: "删除装饰",
                    body: "您确定要删除 {{decoration}} 吗？",
                    confirm: "删除",
                    cancel: "取消"
                },
                logout: {
                    title: "退出",
                    body: "您确定要退出 Decor 吗？",
                    confirm: "退出",
                    cancel: "取消"
                }
            },
            button: {
                change: "更换装修",
                remove: "移除装饰",
                apply: "申请",
                cancel: "取消",
                browse: "浏览",
                submit: "提交审核",
                continue: "继续",
                back: "回去"
            },
            tooltip: {
                pendingReview: "您已经有一个装饰正在等待审核",
                pending: "待审核"
            },
            join: {
                tooltip: "加入 Decor 的 Discord 服务器，以获取有关装饰审核以及新预设发布时的通知",
                button: "不和谐服务器"
            },
            create: {
                title: "创造装饰",
                notViolate: "提交之前请确保您的装饰不违反 {{guidelines}} 。",
                guidelines: "指导方针",
                file: "文件应为 APNG 或 PNG。",
                fileHolder: "选择一个文件",
                name: "This name will be used when referring to this decoration.",
                nameHolder: "伴侣立方体",
                nameTitle: "姓名"
            },
            help: {
                update: "要接收有关您的装饰的评论的更新，请加入 {{server}} 并允许直接消息。",
                server: "Decor 的 Discord 服务器"
            },
            guidelines: {
                hold: "坚持，稍等",
                suspended: "提交装饰即表示您同意 {{guidelines}}。不阅读这些指南可能会导致您的帐户在将来被暂停创建更多装饰。",
                guidelines: "指导方针"
            },
            toast: {
                failedToAuthorizeMessage: "授权失败：{{message}}"
            },
            text: {
                removeDecoration: "移除 Decor 装饰",
                decoration: "Decor 装饰",
                none: "无",
                decorationFile: "装饰文件"
            }
        },
        demonstration: {
            name: "Demonstration",
            description: "用于拍摄主题屏幕截图的插件 - 识别图像和文本的审查器。",
            toolbox: {
                toggle: "切换演示"
            },
            keycode: "要更改您的密钥代码，请查看 {{keycode}}！",
            this: "这个工具",
            okay: "好的！",
            option: {
                keyBind: {
                    label: "按键绑定",
                    description: "按下时切换主题的键"
                },
                soundVolume: {
                    label: "音量",
                    description: "切换声音有多大（0 表示禁用）"
                },
                showConfirmationModal: {
                    label: "显示确认模式",
                    description: "显示模式以提醒您快捷方式"
                }
            },
            switch: {
                note: "您可以稍后重新启用此设置",
                disable: "禁用模式？"
            },
            shortcut: "这将审查所有文本！要禁用此功能，请记住快捷方式："
        },
        devCompanion: {
            name: "DevCompanion",
            description: "开发伴侣插件。请通过 ping 或 DM 向 MutanPlex 报告任何无法正常工作或行为异常（很可能是错误）的情况。谢谢！",
            reconnect: "重新连接",
            option: {
                notifyOnAutoConnect: {
                    label: "自动连接时通知",
                    description: "是否在 Dev Companion 自动连接时发出通知。"
                },
                usePatchedModule: {
                    label: "使用修补模块",
                    description: "对于提取请求，请使用当前已修补的模块（如果已修补）而不是原始模块进行回复。"
                },
                reloadAfterToggle: {
                    label: "切换后重新加载",
                    description: "收到“禁用/启用插件”命令后重新加载。"
                }
            },
            toast: {
                title: "开发伙伴已连接",
                connected: "连接到 WebSocket",
                disconnected: "开发伙伴已断开连接",
                error: "开发伙伴错误",
                reload: "需要重新加载",
                failed: "无法启动依赖项：{{failures}}",
                close: "关闭",
                stopping: "停止插件 {{plugin}} 时出错",
                starting: "启动插件 {{plugin}} 时出错",
                noMessage: "无错误信息",
                noReason: "没有提供理由"
            },
            text: {
                reconnect: "重新连接",
                loadingLazyModules: "正在加载延迟模块，重启可能导致错误",
                loadedLazyModules: "已加载所有延迟模块",
                failedLazyModules: "加载延迟模块失败，请检查控制台错误",
                ok: "确定"
            }
        },
        disableCallIdle: {
            name: "DisableCallIdle",
            description: "禁止在 3 分钟后自动从 DM 语音呼叫中踢出并转移到 AFK 语音通道。"
        },
        disableCameras: {
            name: "DisableCameras",
            description: "默认情况下在通话中禁用摄像头"
        },
        discordDevBanner: {
            name: "DiscordDevBanner",
            description: "启用 Discord 开发者横幅，其中显示构建 ID",
            about: "Discord 开发横幅的格式。您可以使用以下变量：",
            preview: "预览：",
            empty: "格式不能为空。",
            variables: {
                discord: {
                    title: "不和谐变量",
                    icon: "不和谐图标",
                    banner: "开发横幅图标",
                    channel: "Discord 构建渠道（例如稳定）",
                    build: "Discord 内部版本号（例如 123456）",
                    hash: "Discord 构建哈希（例如 123456）"
                },
                plexcord: {
                    title: "Plexcord 变量",
                    icon: "Plexcord 图标",
                    name: "Name of Plexcord",
                    version: "Plexcord 版本（例如 1.0.0）",
                    hash: "Plexcord 构建哈希（例如 123456）",
                    platform: "Plexcord 正在运行的平台（例如 Dev Build）"
                },
                plextron: {
                    title: "Plextron 特定变量",
                    hashShort: "Plextron 构建哈希（例如 123456789）",
                    platformType: "Plextron 运行的平台（例如 Dev Build）"
                },
                client: {
                    title: "客户端变量",
                    icon: "桌面图标",
                    name: "The name of the client (e.g. Discord Canary)",
                    version: "客户端的版本（例如1.0.0）",
                },
                electron: {
                    title: "电子变量",
                    icon: "电子图标",
                    version: "Electron 版本（例如 25.0.0）"
                },
                chromium: {
                    title: "铬变量",
                    icon: "铬图标",
                    version: "Chromium 引擎版本（例如 125.0.0.0）"
                },
                misc: {
                    title: "杂项变量",
                    newline: "换行符"
                }
            },
            text: {
                notSupported: "不支持",
                devBuild: "开发版",
                standalone: "独立版"
            }
        },
        dontFilterMe: {
            name: "DontFilterMe",
            description: "如果您的消息包含 AutoMod 预设列表中的术语，则会向您发出警告",
            alert: {
                title: "坚持，稍等！",
                content: "您的消息包含 AutoMod 预设列表中的术语（术语：“{{trigger}}”）。",
                content2: "您的消息很有可能被阻止并可能由服务器管理员审核。",
                confirm: "无论如何发送",
                cancel: "取消"
            }
        },
        dontRoundMyTimestamps: {
            name: "DontRoundMyTimestamps",
            description: "始终向下舍入相对时间戳，因此 7.6y 变为 7y 而不是 8y"
        },
        downloadAllAttachments: {
            name: "DownloadAllAttachments",
            description: "添加一个消息悬浮按钮，可一次下载消息中的所有附件。",
            button: "下载所有附件",
            toast: {
                success: "已下载 {{count}} 个附件。",
                partial: "已下载 {{total}} 个附件中的 {{succeeded}} 个，{{failed}} 个失败。",
                downloadedPluralizeSucceededAttachment: "已下载 {{pluralize_succeeded_attachment}}。",
                downloadedSucceededOfLength: "已下载 {{length}} 个附件中的 {{succeeded}} 个。{{failed}} 个失败。"
            },
            option: {
                downloadAllFileTypes: {
                    description: "同时下载非媒体附件。仅在你信任他人发送的内容时启用。",
                    label: "下载所有文件类型"
                }
            }
        },
        dragFavoriteEmotes: {
            name: "DragFavoriteEmotes",
            description: "为最喜爱的表情添加拖放功能"
        },
        dragify: {
            name: "Dragify",
            description: "将用户、频道或服务器放入聊天中以插入提及或邀请。",
            option: {
                userOutput: {
                    label: "用户输出",
                    description: "用户丢弃输出。",
                    mention: "提到",
                    id: "用户身份"
                },
                channelOutput: {
                    label: "通道输出",
                    description: "通道下降输出。",
                    mention: "#频道提及",
                    link: "频道链接",
                },
                inviteExpireAfter: {
                    label: "邀请过期时间",
                    description: "邀请到期",
                    never: "绝不",
                    thirtyMinutes: "30分钟",
                    oneHour: "1小时",
                    sixHours: "6小时",
                    twelveHours: "12小时",
                    oneDay: "1 天",
                    sevenDays: "7天"
                },
                inviteMaxUses: {
                    label: "邀请最大使用次数",
                    description: "邀请的最大使用次数",
                    noLimit: "无限制",
                    one: "1 使用",
                    five: "5 用途",
                    ten: "10 种用途",
                    twentyFive: "25 种用途",
                    fifty: "50 种用途",
                    hundred: "100 次使用"
                },
                inviteTemporaryMembership: {
                    label: "邀请临时会员",
                    description: "授予临时会员资格。",
                },
                reuseExistingInvites: {
                    label: "重复使用现有邀请",
                    description: "重复使用现有邀请，而不是创建新邀请。"
                },
                allowChatBodyDrop: {
                    label: "允许聊天正文删除",
                    description: "允许进入主聊天正文插入文本。"
                }
            },
            toast: {
                failed: {
                    drop: "Dragify 无法处理放置。",
                },
                invite: {
                    created: "已创建邀请。",
                    unable: "无法创建邀请。",
                    noChannel: "没有可供邀请的频道。",
                },
                noReusableInvite: "没有可重复使用的邀请。",
                unableToReuseInvite: "无法重复使用邀请。"
            },
            ghost: {
                user: "用户",
                server: "服务器",
                dm: "直接消息",
                badge: {
                    channel: "渠道",
                    thread: "线",
                    voice: "嗓音",
                    forum: "论坛",
                    media: "媒体",
                    announcement: "公告",
                    dm: "DM",
                    user: "用户",
                    server: "服务器"
                }
            }
        },
        elementHighlighter: {
            name: "ElementHighlighter",
            description: "轻松突出显示和检查元素。",
            modal: {
                recording: "记录...",
                reset: "重置"
            },
            option: {
                keybind: {
                    label: "按键绑定",
                    description: "切换荧光笔"
                },
                showClasses: {
                    label: "显示课程",
                    description: "在工具提示中显示元素的 CSS 类名称"
                },
                showId: {
                    label: "显示身份证",
                    description: "在工具提示中显示元素的 ID 属性"
                },
                showFont: {
                    label: "显示字体",
                    description: "显示计算出的字体系列和字体大小"
                },
                showPadding: {
                    label: "显示内边距",
                    description: "显示元素的填充值"
                },
                showMargin: {
                    label: "显示保证金",
                    description: "显示元素的边距值"
                },
                showBorderRadius: {
                    label: "显示边框半径",
                    description: "显示元素的边框半径值"
                },
                showPosition: {
                    label: "显示位置",
                    description: "显示元素的 CSS 位置类型和 z-index"
                },
                showDisplay: {
                    label: "显示显示",
                    description: "显示元素的显示类型以及 flex 或 grid 属性"
                }
            },
            toast: {
                copied: {
                    color: "已将颜色复制到剪贴板！",
                }
            }
        },
        exitSounds: {
            name: "ExitSounds",
            description: "当您断开语音连接时播放音板声音。",
            button: "设置为全局退出声音",
            toast: {
                failedToPlay: "哎呀！出了点问题。"
            },
            option: {
                soundGuildId: {
                    label: "声音公会 ID",
                    description: "选择包含声音的服务器。",
                    placeholder: "选择服务器..."
                },
                soundId: {
                    label: "声音ID",
                    description: "输入您要播放的声音的 ID。",
                    placeholder: "输入声音 ID..."
                }
            }
        },
        experiments: {
            name: "Experiments",
            description: "允许访问 Discord 中的实验和其他仅限开发的功能！",
            modal: {
                about: {
                    title: "更多信息",
                    body: "您可以通过 {{key}} 打开 Discord 的 DevTools"
                },
                warning: {
                    title: "坚持，稍等！！",
                    body: "实验是未发布的 Discord 功能。它们可能不起作用，甚至会破坏您的客户端或使您的帐户被禁用。",
                    notReponsible: "仅当您知道自己在做什么时才使用实验。 Plexcord 对启用实验造成的任何损坏不承担任何责任。",
                    useAtOwnRisk: "如果您不知道实验的作用，请忽略它。也不要问我们实验是做什么的；我们可能不知道。",
                    serverSideFeatures: "不可以，您不能使用服务器端功能，例如选中“发送到客户端”框。"
                }
            },
            option: {
                toolbarDevMenu: {
                    label: "工具栏开发菜单",
                    description: "将帮助 (?) 工具栏按钮（聊天右上角）更改为 Discord 的开发者菜单"
                }
            },
            text: {
                searchExperiments: "搜索实验"
            }
        },
        exportMessages: {
            name: "ExportMessages",
            description: "允许您将消息导出到文件 - 单条消息、来自用户的所有消息或所有频道消息",
            option: {
                maxMessages: {
                    label: "最大消息数",
                    description: "要导出的最大消息数（0 = 无限制）"
                },
                includeAttachments: {
                    label: "包括附件",
                    description: "在导出中包含附件信息"
                },
                includeEmbeds: {
                    label: "包括嵌入",
                    description: "在导出中包含嵌入信息"
                },
                includeReactions: {
                    label: "包括反应",
                    description: "在导出中包含反应信息"
                },
                includeComponents: {
                    label: "包括组件",
                    description: "在导出中包含组件信息"
                }
            },
            message: {
                invalid: "无效消息——无作者",
                unknownUser: "未知用户",
                botEmbed: "机器人嵌入消息",
                attachments: "附件",
                unknown: "未知",
                noUrl: "无网址",
                embeds: "嵌入",
                title: "标题",
                description: "描述",
                url: "网址",
                footer: "页脚",
                author: "作者",
                fields: "领域",
                components: "成分",
                component: "成分",
                interactiveElement: "互动元素",
                reactions: "反应",
                errorFormatting: "消息格式错误",
                unknownError: "未知错误",
                header: "{{titlePrefix}} {{displayName}} 在 {{channelName}} 中",
                from: "来自的消息",
                direct: "直接消息",
                exported: "导出于",
                total: "消息总数"
            },
            toast: {
                export: {
                    title: "导出消息",
                    body: "导出消息失败"
                },
                noMessages: {
                    title: "导出消息",
                    notFoundUser: "在此频道中未找到该用户的消息",
                    notFoundChannel: "在此频道中找不到消息"
                },
                failed: {
                    title: "导出消息",
                    body: "导出消息失败"
                },
                userNotFound: {
                    title: "导出消息",
                    body: "未找到用户"
                },
                complete: {
                    title: "导出完成",
                    saved: "文件已保存",
                    downloaded: "文件已下载",
                    messages: "消息"
                }
            },
            context: {
                exportMessage: "导出此消息",
                exportAll: "从 {{user}} 导出所有消息",
                user: "用户",
                exportAllChannel: "导出所有频道消息"
            },
            text: {
                unknownError: "未知错误"
            }
        },
        expressionCloner: {
            name: "ExpressionCloner",
            description: "允许您将表情和贴纸克隆到您自己的服务器（右键单击它们）",
            modal: {
                title: "自定义名称",
                invalidName: "名称必须介于 2 到 32 个字符之间，并且仅包含字母数字字符"
            },
            toast: {
                success: "成功将 {{name}} 克隆到 {{guild}}！",
                yourServer: "你的服务器",
                failed: "克隆失败：",
                console: "出了点问题（检查控制台！）",
                successfullyClonedNameTo: "已成功将 {{name}} 克隆到 {{name_your_server}}！"
            },
            context: {
                clone: "克隆 {{type}}",
                cloneName: "克隆 {{data}}"
            },
            text: {
                yourServer: "你的服务器",
                cloneTo: "克隆到 {{name}}",
                emoji: "表情符号",
                sticker: "贴纸"
            }
        },
        f8break: {
            name: "F8Break",
            description: "当您在 DevTools（+ 断点）打开的情况下按 F8 时，会暂停客户端。"
        },
        fakeNitro: {
            name: "FakeNitro",
            description: "允许您发送假表情符号/贴纸、使用 Nitro 主题并以 Nitro 质量进行流式传输",
            option: {
                enableEmojiBypass: {
                    label: "启用表情符号绕过",
                    description: "允许发送假表情符号（也绕过缺少使用自定义表情符号的权限）"
                },
                emojiSize: {
                    label: "表情符号大小",
                    description: "发送时表情符号的大小"
                },
                transformEmojis: {
                    label: "变换表情符号",
                    description: "是否将假表情符号转为真表情符号"
                },
                enableStickerBypass: {
                    label: "启用贴纸绕过",
                    description: "允许发送假贴纸（也绕过缺少使用贴纸的权限）"
                },
                stickerSize: {
                    label: "贴纸尺寸",
                    description: "发送时贴纸尺寸"
                },
                transformStickers: {
                    label: "变形贴纸",
                    description: "是否将假贴纸转为真贴纸"
                },
                transformCompoundSentence: {
                    label: "变换复合句",
                    description: "是否在复合句中转换假贴纸和表情符号（内容比假表情符号或贴纸链接更多的句子）"
                },
                enableStreamQualityBypass: {
                    label: "启用流质量绕过",
                    description: "允许以 Nitro 质量进行流式传输"
                },
                useStickerHyperLinks: {
                    label: "使用贴纸超链接",
                    description: "发送假贴纸时是否使用超链接"
                },
                useEmojiHyperLinks: {
                    label: "使用表情符号超链接",
                    description: "发送假表情符号时是否使用超链接"
                },
                hyperLinkText: {
                    label: "超链接文本",
                    description: "超链接应使用什么文本。 {{NAME}} 将替换为表情符号/贴纸名称。"
                },
                disableEmbedPermissionCheck: {
                    label: "禁用嵌入权限检查",
                    description: "发送虚假表情符号和贴纸时是否禁用嵌入权限检查"
                }
            },
            modal: {
                sticker: "这是一个 FakeNitro 贴纸，并且只为您呈现像真正的贴纸一样的效果。显示为非插件用户的链接。",
                emoji: "这是一个 FakeNitro 表情符号，并且只为您呈现像真正的表情符号一样。显示为非插件用户的链接。"
            },
            alert: {
                notice: {
                    title: "坚持，稍等！",
                    body: "您正在尝试发送/编辑包含 FakeNitro 表情符号或贴纸的消息；但是，您无权在当前频道中嵌入链接。您确定要发送此消息吗？您的 FakeNitro 项目将仅显示为链接。",
                    footer: "您可以在 FakeNitro 设置中禁用此警报",
                    confirm: "无论如何发送",
                    cancel: "取消",
                    secondaryConfirm: "不再显示"
                },
                apngSticker: {
                    title: "坚持，稍等！",
                    body: "您无法发送此消息，因为它包含动画 FakeNitro 贴纸，并且您无权在当前频道中附加文件。请撕下贴纸以继续。"
                }
            }
        },
        fakeProfileThemes: {
            name: "FakeProfileThemes",
            description: "借助隐形 3y3 编码，通过隐藏个人简介中的颜色来实现个人资料主题",
            button: {
                copy: "复制 3y3"
            },
            modal: {
                usage: "用法",
                preview: "预览",
                intro: "启用此插件后，您将在使用兼容插件的其他人的个人资料中看到自定义颜色。",
                setColor: "设置您自己的颜色：",
                step1: "• 使用下面的颜色选择器选择您的颜色",
                step2: "• 单击{{copy}} 按钮",
                step3: "• 将不可见文本粘贴到您的个人简介中的任意位置",
                pickers: "颜色选择器",
                primary: "基本的",
                accent: "口音"
            },
            option: {
                nitroFirst: {
                    label: "Nitro 优先",
                    description: "默认颜色源（如果两者都存在）",
                    nitro: "硝基色",
                    fake: "假色"
                }
            }
        },
        fakeProfileThemesAndEffects: {
            name: "FakeProfileThemesAndEffects",
            description: "通过隐藏 3y3 编码隐藏个人简介中的颜色和效果，允许配置文件主题和配置文件效果",
            option: {
                prioritizeNitro: {
                    label: "优先考虑硝基",
                    description: "优先考虑的来源",
                    nitro: "硝基",
                    aboutMe: "关于我"
                },
                hideBuilder: {
                    label: "隐藏生成器",
                    description: "在用户配置文件和服务器配置文件设置页面中隐藏 FPTE Builder"
                }
            },
            modal: {
                primary: "基本的",
                accent: "口音",
                effect: "影响",
                usage: {
                    title: "用法",
                    intro: "启用此插件后，您将在使用此插件的其他人的个人资料中看到自定义主题颜色和效果。",
                    setColor: "设置您自己的颜色和效果：",
                    step1: "转到您的个人资料设置",
                    step2: "使用 FPTE Builder 选择您的个人资料主题颜色和效果",
                    step3: "单击 {{copy}} 按钮",
                    step4: "将不可见文本粘贴到您的个人简介中的任意位置"
                }
            },
            toast: {
                copied: "FPTE 已复制到剪贴板！",
                empty: "FPTE Builder 为空；没什么可复制的！"
            },
            button: {
                copyFPTE: "复制 FPTE",
                reset: "重置",
                preview: "FPTE Builder 预览",
                buildBackwards: "构建向后兼容的 FPTE",
                moreCharacters: "将使用更多字符"
            }
        },
        fastDeleteChannels: {
            name: "FastDeleteChannels",
            description: "添加垃圾桶图标以删除频道",
            option: {
                keyBind: {
                    label: "按键绑定",
                    description: "按下该键可切换垃圾箱。"
                },
                reqCtrl: {
                    label: "需要控制",
                    description: "需要按住 Control 键。"
                },
                reqShift: {
                    label: "需要轮班",
                    description: "需要按住 Shift 键。"
                },
                reqAlt: {
                    label: "需要替代",
                    description: "需要按住 Alt 键。"
                }
            }
        },
        favoriteEmojiFirst: {
            name: "FavouriteEmojiFirst",
            description: "将您最喜欢的表情符号放在表情符号自动完成中的第一位，并且还提供表情符号别名。",
            option: {
                aliases: {
                    label: "别名",
                    description: "管理您的表情符号别名。"
                },
                clearAll: {
                    label: "全部清除",
                    description: "删除所有别名。"
                }
            },
            modal: {
                clear: {
                    title: "删除所有别名",
                    description: "这将删除您保存的每个表情符号别名。",
                    confirm: "删除所有别名"
                },
                set: {
                    title: "设置别名",
                    description: "为 {{emoji}} 设置别名",
                    placeholder: "别名，例如'快乐的'",
                    save: "节省",
                    error: "别名重复"
                }
            },
            toast: {
                set: "别名设置为 {{emoji}}",
                clearAll: "删除了所有表情符号别名",
                failedDeleted: "删除别名失败",
                removed: "删除别名：{{alias}}",
                failedRemove: "删除别名失败",
                duplicate: "别名重复",
                failedSave: "保存别名失败。",
                removedAliasAlias: "已移除别名 :{{alias}}:",
                aliasSetForGetemojidisplayname: "已为 {{getEmojiDisplayName_ref}} 设置别名。"
            },
            button: {
                edit: "编辑别名",
                set: "设置别名"
            },
            text: {
                remove: "移除",
                noAliasesSetYet: "尚未设置别名。",
                aliasRequired: "别名为必填项。",
                aliasInvalid: "别名必须为 2-32 个字符，且只能包含小写字母、数字或下划线。"
            }
        },
        favoriteAnything: {
            name: "FavoriteAnything",
            description: "收藏任何图像",
            noFiles: "没有与您的搜索匹配的文件。",
            searchPlaceholder: "搜索文件",
            media: "媒体",
            demoText: "点击星标来收藏文件。\n收藏的文件将显示在这里！",
            fetchError: "无法获取 {filename}",
            uploadError: "无法上传 {filename}",
            text: {
                clickTheStarTo: "点击星标即可收藏文件。",
                favoriteFilesWillShow: "收藏的文件会显示在这里！"
            },
            option: {
                localThumbnails: {
                    description: "在本地生成文件缩略图，而不使用外部服务 (placeholder.nin0.dev)。不兼容移动端。切换此选项不会影响已有的收藏。",
                    label: "本地缩略图"
                }
            }
        },
        fileDownloadButton: {
            name: "FileDownloadButton",
            description: "在文件右上角添加下载按钮"
        },
        findReply: {
            name: "FindReply",
            description: "跳转到频道中消息的最早回复（让您更轻松地跟踪过去的对话）。",
            context: {
                jump: "跳转到回复"
            },
            toast: {
                navigate: "使用底部面板在回复之间导航。",
                container: "找不到容器元素。",
                couldntFind: "找不到回复。"
            },
            option: {
                includePings: {
                    label: "包括 Ping",
                    description: "还会搜索直接@作者的消息"
                },
                includeAuthor: {
                    label: "包括作者",
                    description: "还将搜索一般回复作者的消息，而不仅仅是确切的消息"
                },
                hideButtonIfNoReply: {
                    label: "如果没有回复则隐藏按钮",
                    description: "如果没有回复消息则隐藏按钮"
                }
            }
        },
        fixCodeblockGap: {
            name: "FixCodeblockGap",
            description: "消除代码块与其下面的文本之间的间隙"
        },
        fixFileExtensions: {
            name: "FixFileExtensions",
            description: "如果可能，通过将文件扩展名重命名为兼容的支持格式来修复文件扩展名"
        },
        fixImagesQuality: {
            name: "FixImagesQuality",
            description: "通过强制使用原始来源来提高图像质量",
            option: {
                originalImagesInChat: {
                    label: "聊天中的原始图像",
                    description: "还在聊天中加载原始图像。警告：阅读上面的注意事项"
                }
            },
            modal: {
                about: {
                    title: "默认行为如下：",
                    body: "— 在聊天中，将加载优化但全分辨率的图像。",
                    body2: "— 在图像模式中，将加载原始图像。",
                    body3: "您还可以在聊天中启用原始图像，但请注意以下注意事项：",
                    warning: "— 聊天中的动画图像（GIF、WebP 等）将始终以动画形式显示，无论应用程序是否聚焦。",
                    warning2: "— 可能会导致滞后。",
                }
            }
        },
        fixSpotifyEmbeds: {
            name: "FixSpotifyEmbeds",
            description: "通过让您自定义音量，修复了 Spotify 嵌入的声音令人难以置信的问题",
            option: {
                volume: {
                    label: "体积",
                    description: "为 Spotify 嵌入设置的音量 %。任何高于 10% 的声音都会非常响亮"
                }
            }
        },
        fixYoutubeEmbeds: {
            name: "FixYoutubeEmbeds",
            description: "绕过 Discord 上禁止显示的 YouTube 视频（例如 UMG）"
        },
        followUser: {
            name: "FollowUser",
            description: "在用户上下文菜单中添加“关注”选项，以始终与他们位于同一 VC 中",
            indicatorTooltip: "关注{{user}}（点击手动触发，右键取消关注）",
            unknownUser: "未知用户",
            option: {
                executeOnFollow: {
                    label: "跟随执行",
                    description: "关注用户时确保处于同一个 VC 中"
                },
                onlyManualTrigger: {
                    label: "仅手动触发",
                    description: "仅在指示器点击时触发"
                },
                followLeave: {
                    label: "关注 离开",
                    description: "当关注的用户离开时也离开"
                },
                autoMoveBack: {
                    label: "自动后移",
                    description: "移动时自动移回关注用户的 VC"
                },
                followUserId: {
                    label: "关注用户 ID",
                    description: "关注的用户 ID"
                },
                channelFull: {
                    label: "频道已满",
                    description: "当频道不再满时尝试将您移至该频道"
                },
                onlyWhenInVoice: {
                    label: "仅在语音中时",
                    description: "仅当你在语音频道中时才跟随该用户"
                }
            },
            toast: {
                channelFull: "频道已满",
                newVc: "跟随用户进入新的语音频道",
                insufficientPermissions: "权限不足，无法进入语音通道",
                sameVc: "你们已经在同一个频道了",
                disconnect: "已关注用户离开；断开连接",
                notFollowing: "关注用户离开，但未关注断开连接",
                notVc: "被关注的用户不在语音频道中"
            },
            context: {
                follow: "关注用户",
                unfollow: "取消关注用户"
            }
        },
        fontLoader: {
            name: "FontLoader",
            description: "从 Google Fonts 加载任何字体",
            option: {
                selectedFont: {
                    label: "选定的字体",
                    description: "当前选择的字体"
                },
                fontSearch: {
                    label: "字体搜索",
                    description: "搜索并选择 Google 字体"
                },
                applyOnCodeBlocks: {
                    label: "应用于代码块",
                    description: "将字体应用于代码块"
                }
            },
            toast: {
                failedLoad: "加载字体失败"
            },
            modal: {
                settings: {
                    title: "搜索谷歌字体",
                    description: "选择一种字体来应用它",
                    placeholder: "搜索字体...",
                    previewText: "敏捷的棕色狐狸跳过了懒狗",
                    authors: "通过 {{authors}}"
                }
            },
            text: {
                currentFont: "当前字体：",
                resetFont: "重置字体"
            }
        },
        forceOwnerCrown: {
            name: "ForceOwnerCrown",
            description: "即使服务器很大，也强制将所有者冠放在用户名旁边。"
        },
        freaky: {
            name: "Freaky",
            description: "允许您使用 /freaky 命令以奇怪的字体发送消息。",
            command: {
                freaky: "太奇怪了。",
                message: "让你的信息变得怪异"
            },
            option: {
                addFreakyEnding: {
                    label: "添加怪异结局",
                    description: "最后添加👅或❤️"
                }
            }
        },
        frequentQuickSwitcher: {
            name: "Frequent Quick Switcher",
            description: "将快速切换器结果重写并过滤为您最常使用的频道。"
        },
        friendCloud: {
            name: "FriendCloud",
            description: "添加 /friendcloud 命令以可视化与您最常互动的用户",
            command: {
                friendcloud: {
                    description: "可视化您的朋友云",
                    count: "显示的用户数",
                    mustHigher: "计数必须为 1 或更高！",
                    noAffinities: "未发现亲缘关系。检查您的[隐私设置](<https://support.discord.com/hc/en-us/articles/21864805694999-Data-Used-to-Improve-Discord>)。",
                    noValid: "在关联中找不到有效用户。检查您的[隐私设置](<https://support.discord.com/hc/en-us/articles/21864805694999-Data-Used-to-Improve-Discord>)。",
                    genFailed: "无法生成图像：c"
                }
            }
        },
        friendCodes: {
            name: "FriendCodes",
            description: "生成好友代码，轻松添加好友",
            card: {
                expires: "过期 <t:{{expiration}}:R> • {{uses}}/{{maxUses}} 使用",
                copy: "复制",
                copied: "复制了！",
                codes: "您的好友代码",
                count: "好友代码 - {{invites}}",
                create: "创建好友代码",
                revoke: "撤销所有好友代码",
                loading: "加载中...",
                dontHave: "您没有任何好友代码。"
            }
        },
        friendInvites: {
            name: "FriendInvites",
            description: "通过斜杠命令创建和管理好友邀请链接（/创建好友邀请、/查看好友邀请、/撤销好友邀请）。",
            command: {
                create: {
                    description: "生成好友邀请链接。",
                    message: "Discord.gg/{{code}}`\n· 过期 <t:{{expiration}}:R>\n· 最大使用次数：{{uses}}"
                },
                view: {
                    description: "查看所有生成的好友邀请的列表。",
                    message: "_discord.gg/{{code}}_ \n· 过期：<t:{{expiration}}:R> \n· 使用次数：{{uses}}/{{maxUses}}",
                    noInvites: "您没有有效的好友邀请。"
                },
                revoke: {
                    description: "撤销所有生成的好友邀请。",
                    message: "所有好友邀请均已撤销。"
                }
            }
        },
        friendshipRanks: {
            name: "FriendshipRanks",
            description: "添加徽章，显示您与用户成为朋友的时间有多长",
            badge: {
                sprout: {
                    name: "Sprout",
                    description: "你们的友谊才刚刚开始"
                },
                blooming: {
                    name: "Blooming",
                    description: "你们的友谊即将到来！ （1个月）"
                },
                burning: {
                    name: "Burning",
                    description: "你们的友谊已经达到了极限速度（3个月）"
                },
                fighter: {
                    name: "Fighter",
                    description: "你们的友谊很牢固（6个月）"
                },
                star: {
                    name: "Star",
                    description: "你们的友谊已经持续了一段时间（1年）"
                },
                royal: {
                    name: "Royal",
                    description: "你们的友谊经历了风风雨雨——整整两年了！"
                },
                besties: {
                    name: "Besties",
                    description: "你怎么处理这个？？？ （5年）"
                }
            },
            option: {
                showFriendsInChat: {
                    description: "在好友发送的消息上显示好友图标。",
                    label: "在聊天中显示好友"
                }
            },
            text: {
                friend: "好友",
                rankIcon: "等级图标"
            }
        },
        friendTags: {
            name: "FriendTags",
            description: "允许您通过使用 & 开始搜索来在快速切换器中按自定义标签进行过滤",
            modal: {
                name: "Name",
                users: "用户（以逗号分隔）",
                userlist: "用户列表（点击要删除的用户）",
                remove: "消除",
                add: "添加",
                tag: "标签",
                removeFrom: "删除自",
                addTo: "添加"
            },
            option: {
                tagConfiguration: {
                    label: "标签配置",
                    description: "标签配置组件"
                }
            }
        },
        fullSearchContext: {
            name: "FullSearchContext",
            description: "使消息搜索结果中的消息上下文菜单包含您期望的所有选项"
        },
        fullUserInChatbox: {
            name: "FullUserInChatbox",
            description: "使聊天框中的用户提及具有更多功能，例如左/右键单击"
        },
        fullVCPFP: {
            name: "FullVCPFP",
            description: "使头像占据整个 VC 图块"
        },
        gameActivityToggle: {
            name: "GameActivityToggle",
            description: "在麦克风和静音按钮旁添加切换游戏活动的按钮。右键点击可切换 Spotify 活动。",
            tooltip: "切换游戏活动",
            gameActivity: {
                enabled: "游戏活动已启用",
                disabled: "游戏活动已禁用"
            },
            option: {
                oldIcon: {
                    label: "旧图标",
                    description: "使用 Discord 图标重新设计之前的旧图标样式"
                },
                location: {
                    label: "地点",
                    description: "在哪里显示游戏活动切换按钮",
                    panel: "静音/失聪旁边",
                    toolbox: "Plexcord 工具箱"
                }
            },
            text: {
                disableGameActivity: "禁用游戏活动",
                enableGameActivity: "启用游戏活动",
                shareSpotifyActivity: "分享 Spotify 活动",
                shareSpotifyActivityAccount: "分享 Spotify 活动（{{name}}）"
            }
        },
        ghosted: {
            name: "Ghosted",
            description: "如果你不回复他们的私信，一个可爱的幽灵就会出现",
            modal: {
                title: "幽灵用户",
                no: "没有幽灵用户",
                unghost: "鬼魂",
                unknown: "未知",
                unnamedGroup: "未命名团体",
                unknownUser: "未知用户",
                clearAll: "全部清除",
                noGhost: "这里没有鬼！",
                clear: "清除"
            },
            option: {
                showIndicator: {
                    label: "显示指标",
                    description: "在服务器列表顶部显示幽灵计数器"
                },
                showDmIcons: {
                    label: "显示 DM 图标",
                    description: "在各个 DM 旁边显示幽灵图标"
                },
                ignoreGroupDms: {
                    label: "忽略群组私信",
                    description: "从重影中排除所有群组 DM"
                },
                exemptedChannels: {
                    label: "豁免渠道",
                    description: "以逗号分隔的通道 ID 列表，以避免重影（右键单击 DM 通道以复制其 ID）"
                },
                ignoreBots: {
                    label: "忽略机器人",
                    description: "忽略来自机器人的私信"
                },
                maxInactiveTimeMs: {
                    label: "最大非活动时间",
                    description: "仅显示在此时间段内活跃的匿名私信",
                    no: "无限制",
                    oneHour: "1 小时",
                    oneDay: "1 天",
                    oneWeek: "1 周",
                    oneMonth: "1 个月"
                }
            }
        },
        gifCollections: {
            name: "GifCollection",
            description: "允许您创建 GIF 集合",
            context: {
                copyImageLink: "复制图片链接",
                copyUrl: "复制网址",
                collection: {
                    add: "添加到收藏",
                    gif: "GIF 集合",
                    delete: "删除集合",
                    create: "创建收藏",
                    remove: "消除",
                    information: "收藏信息",
                    name: "Name",
                    gifs: "动图",
                    created: "创建于",
                    updated: "最后更新",
                    close: "关闭",
                    rename: "重命名",
                    move: "移至收藏",
                    select: "选择要将项目移至的集合"
                },
                gif: {
                    information: "信息",
                    added: "添加于",
                    width: "宽度",
                    height: "高度",
                    close: "关闭"
                }
            },
            option: {
                itemPrefix: {
                    label: "项目前缀",
                    description: "GIF 项目的前缀"
                },
                collectionPrefix: {
                    label: "集合前缀",
                    description: "集合的前缀"
                },
                onlyShowCollections: {
                    label: "只显示集合",
                    description: "只显示集合"
                },
                stopWarnings: {
                    label: "停止警告",
                    description: "停止删除警告"
                },
                showCopyImageLink: {
                    label: "显示复制图像链接",
                    description: "在上下文菜单中显示 {{copyImageLink}} 选项"
                },
                preventDuplicates: {
                    label: "防止重复",
                    description: "防止多次将相同的 GIF 添加到集合中"
                },
                defaultEmptyCollectionImage: {
                    label: "默认空集合图像",
                    description: "当集合没有图像/GIF 时将显示的图像/GIF"
                },
                collectionsSortType: {
                    label: "集合排序类型",
                    description: "集合的排序类型"
                },
                collectionsSortOrder: {
                    label: "收藏排序顺序",
                    description: "集合的排序顺序"
                },
                collectionsSort: {
                    label: "收藏排序",
                    description: "决定如何对集合进行排序",
                    title: "对集合进行排序",
                    sortDescription: "为您的收藏选择排序标准",
                    sortBy: "排序方式",
                    name: "Name",
                    creationDate: "创建日期",
                    modifiedDate: "修改日期",
                    ascending: "升序",
                    descending: "降序"
                },
                importGifs: {
                    label: "导入 GIF",
                    description: "进口收藏品",
                    button: "进口收藏品"
                },
                exportGifs: {
                    label: "导出 GIF",
                    description: "导出集合",
                    button: "导出集合"
                },
                resetCollections: {
                    label: "重置收藏",
                    description: "将收藏集重置为默认值（删除所有收藏集）",
                    button: "重置收藏"
                }
            },
            toast: {
                copied: "图片链接已复制到剪贴板！",
                urlCopied: "网址已复制到剪贴板！",
                already: "该集合已经存在",
                alreadyCollection: "此 GIF 已在收藏集中",
                collectionsImportedSuccessfully: "已成功导入收藏集。",
                failedToImportCollections: "导入收藏集失败：{{String_err}}"
            },
            modal: {
                create: {
                    title: "创建收藏",
                    name: "Collection Name",
                    create: "创造"
                },
                rename: {
                    title: "重命名集合",
                    name: "New Collection Name",
                    warning: "名称不能超过 24 个字符",
                    rename: "重命名"
                }
            },
            alert: {
                import: {
                    title: "你确定吗？",
                    body: "导入集合将覆盖您当前的集合。",
                    confirm: "进口",
                    cancel: "没关系"
                },
                reset: {
                    title: "你确定吗？",
                    body: "重置收藏集将删除您的所有收藏集。",
                    confirm: "重置",
                    cancel: "没关系"
                },
                delete: {
                    title: "你确定吗？",
                    deleteBody: "您确实要删除此收藏吗？",
                    removeBody: "您真的要删除该项目吗？",
                    confirm: "删除",
                    remove: "消除",
                    cancel: "没关系"
                }
            },
            text: {
                gifPickerCategoryOptions: "GIF 选择器分类选项",
                gifCollections: "GIF 收藏集",
                unknown: "未知"
            }
        },
        gifPaste: {
            name: "GifPaste",
            description: "允许您将 GIF 直接粘贴到聊天框中"
        },
        gifRoulette: {
            name: "GifRoulette",
            description: "添加一条命令，从您最喜欢的图片中发送随机 GIF，有十分之一的机会 ping 服务器的所有者",
            command: {
                gifRoulette: {
                    description: "诱惑命运，发送 GIF",
                    restricted: "此命令在本服务器中受限。"
                }
            },
            option: {
                pingOwnerChance: {
                    label: "Ping 拥有者机会",
                    description: "是否应该有十分之一的机会来 ping 公会的所有者（哦不）"
                }
            }
        },
        gitHubRepos: {
            name: "GitHubRepos",
            description: "在用户的个人资料中显示用户的公共 GitHub 存储库",
            loading: "正在加载存储库...",
            option: {
                showStars: {
                    label: "秀星",
                    description: "显示存储库星星"
                },
                showLanguage: {
                    label: "显示语言",
                    description: "显示存储库主要语言"
                }
            },
            error: {
                error: "错误",
                render: "错误：无法呈现 GitHubRepos"
            },
            button: {
                show: "显示 GitHub 存储库",
                repositories: "GitHub 存储库",
                more: "显示更多",
                only: "仅显示顶部 {{length}}/{{total}}"
            },
            modal: {
                title: "{{username}} 的 GitHub 仓库",
                repository: "存储库",
                description: "描述",
                language: "语言",
                stars: "星星",
                viewOnGitHub: "在 GitHub 上查看",
                close: "关闭"
            }
        },
        googleThat: {
            name: "GoogleThat",
            description: "添加发送互联网搜索链接的命令",
            command: {
                googleThat: {
                    description: "发送搜索引擎链接",
                    query: "搜索查询"
                }
            },
            option: {
                hyperlink: {
                    label: "超级链接",
                    description: "发送的链接是否应以查询作为标签进行超链接"
                },
                embed: {
                    label: "嵌入",
                    description: "发送的链接是否应呈现嵌入"
                },
                defaultEngine: {
                    label: "默认引擎",
                    description: "使用的搜索引擎"
                },
                customEngineURL: {
                    label: "自定义引擎 URL",
                    description: "您要使用的引擎的 URL"
                }
            }
        },
        greetStickerPicker: {
            name: "GreetStickerPicker",
            description: "允许您通过右键单击“挥手打招呼！”来使用任何问候贴纸，而不仅仅是随机贴纸。按钮",
            mode: {
                greet: "迎接",
                message: "信息"
            },
            option: {
                greetMode: {
                    label: "问候模式",
                    description: "选择问候模式",
                    greet: "打招呼（只能打招呼3次）",
                    message: "消息（您可以迎接垃圾邮件）"
                }
            },
            context: {
                label: "问候贴纸选择器",
                mode: "问候模式",
                stickers: "问候贴纸",
                multi: "邪恶多重问候",
                send: "发送问候"
            }
        },
        guildPickerDumper: {
            name: "GuildPickerDumper",
            description: "用于转储和下载服务器的表情符号和贴纸的上下文菜单。",
            context: {
                download: {
                    emoji: "下载表情符号",
                    sticker: "下载贴纸"
                }
            }
        },
        guildTagSettings: {
            name: "GuildTagSettings",
            description: "添加了一些公会标签的设置，例如隐藏它们或禁用提示采用它们。",
            option: {
                disableAdoptTagPrompt: {
                    label: "禁用采用标签提示",
                    description: "禁用采用标签的提示"
                }
            }
        },
        hideChatButtons: {
            name: "HideChatButtons",
            description: "能够隐藏聊天按钮",
            tooltip: {
                close: "关闭",
                open: "打开"
            },
            option: {
                color: {
                    label: "颜色",
                    description: "打开时将其涂成红色"
                },
                open: {
                    label: "打开",
                    description: "默认打开"
                }
            }
        },
        hideMedia: {
            name: "HideMedia",
            description: "通过悬停按钮隐藏单个消息的附件和嵌入",
            show: "展会媒体",
            hide: "隐藏媒体",
            hidden: "媒体隐藏"
        },
        hideMessages: {
            name: "HideMessages",
            description: "在重启前临时隐藏消息和私信。",
            button: {
                hide: "隐藏",
                hideDm: "隐藏私信",
                unhideDm: "取消隐藏私信"
            },
            toggle: {
                none: "没有隐藏的私信",
                hide: "隐藏已隐藏的私信",
                show: "显示已隐藏的私信"
            },
            option: {
                hidePopoverButton: {
                    label: "隐藏弹出按钮",
                    description: "隐藏消息弹出窗口中的隐藏按钮。"
                }
            }
        },
        hideMutedVoiceIndicator: {
            name: "HideMutedVoiceIndicator",
            description: "当活跃的语音频道均已静音时，隐藏服务器列表中的语音指示器"
        },
        hideServers: {
            name: "HideServers",
            description: "从服务器列表中隐藏服务器",
            context: {
                hide: "隐藏服务器",
                unhide: "取消隐藏服务器",
                folder: {
                    hide: "隐藏文件夹",
                    unhide: "取消隐藏文件夹"
                }
            },
            option: {
                showIndicator: {
                    label: "显示指标",
                    description: "显示菜单以取消隐藏列表底部的服务器"
                },
                guildsList: {
                    label: "公会列表",
                    description: "删除隐藏服务器"
                },
                resetHidden: {
                    label: "重置隐藏",
                    description: "从列表中删除所有隐藏的公会",
                    button: "重置隐藏服务器"
                }
            },
            button: {
                hidden: "隐",
                hiddenServers: "隐藏服务器",
                remove: "消除",
                folder: "文件夹",
                removeAll: "全部删除",
                guilds: "行会",
                noHiddenServers: "没有隐藏服务器"
            }
        },
        holyNotes: {
            name: "HolyNotes",
            description: "Holy Notes 允许您保存消息",
            main: "主要的",
            button: {
                tooltip: "神圣笔记",
                save: "保存备注",
                cancel: "取消",
                noteMessage: "备注留言",
                refresh: "刷新头像",
                import: "进口备注",
                export: "出口票据",
                deleteAll: "删除所有笔记",
                delete: "删除笔记本",
                create: "创建笔记本",
                copyText: "复制文本",
                copyAttachment: "复制附件网址",
                deleteNote: "删除注释",
                moveNote: "移动注释",
                moveTo: "移至 {{key}}",
                copyId: "复制身份证件"
            },
            modal: {
                error: {
                    generic: "解析您的笔记时出错。检查控制台了解详细信息。",
                    easter: "没有找到任何注释。同理心香蕉就在这里为您服务。",
                    empty: "未发现此笔记本中保存任何笔记。"
                },
                help: {
                    title: "帮助",
                    description: "了解如何使用神圣笔记",
                    addingNotes: "添加注释",
                    addingNotesText: "要添加注释，请右键单击一条消息，然后将鼠标悬停在“注释消息”项目上，然后单击带有您要为其添加注释的笔记本名称的按钮。",
                    prototype: "原型",
                    noteMessage: "点击“备注消息”按钮，默认会备注到主页面！",
                    deletingNotes: "删除笔记",
                    deletingNotesText: "注意：您可以右键单击注释并点击“删除注释”，也可以按住键盘上的“DELETE”键并单击注释；这就像魔法一样！",
                    movingNotes: "移动笔记",
                    movingNotesText: "要移动笔记，请右键单击笔记并将鼠标悬停在“移动笔记”项目上，然后单击与要将笔记移动到的笔记本对应的按钮。",
                    jumpToMessage: "跳转至消息",
                    jumpToMessageText: "要跳转到注释最初所在的位置，只需右键单击注释并点击“跳转到消息”即可。"
                },
                notebook: {
                    title: "笔记本",
                    search: "搜索消息...",
                    options: "排序选项",
                    label: "排序菜单",
                    filteredOf: "{{noteCount}} 注释{{s}} 的 {{filteredCount}}",
                    note: "{{noteCount}} 注{{s}}",
                    ada: "升序/添加日期",
                    amd: "升序/消息日期",
                    dda: "降序/添加日期",
                    dmd: "降序/消息日期",
                    change: "更改排序",
                    ascending: "升序",
                    descending: "降序",
                    dateAdded: "添加日期",
                    messageDate: "留言日期"
                },
                create: {
                    title: "创建笔记本",
                    description: "输入新笔记本的名称",
                    placeholder: "笔记本名称"
                },
                delete: {
                    title: "删除{{notebookName}}？",
                    description: "{{noteCount}} 注意{{s}} 将被永久删除",
                    button: "删除"
                },
                tabs: {
                    label: "笔记本标签"
                }
            },
            toast: {
                saved: "已成功将消息添加到 {{notebook}}",
                deleted: "已成功删除 {{notebook}} 中的注释",
                moved: "已成功将注释从 {{from}} 移动到 {{to}}。",
                exists: "笔记本 {{notebookName}} 已存在。",
                created: "成功创建{{notebookName}}。",
                deletedNotebook: "成功删除 {{notebookName}}。",
                refreshed: "头像刷新成功。",
                deletedAll: "成功删除所有笔记。",
                imported: "成功导入笔记。",
                invalid: "导入笔记失败。",
                invalidJson: "无效的 JSON"
            },
            toolbox: {
                action: "打开笔记"
            },
            text: {
                holyNotes: "Holy Notes",
                noteTag: "笔记"
            }
        },
        homeTyping: {
            name: "HomeTyping",
            description: "如果您的 DM 中有人正在打字，则将主页按钮更改为打字指示器"
        },
        iconViewer: {
            name: "IconViewer",
            description: "在设置中添加一个新选项卡以预览所有图标。",
            toolbox: "打开图标选项卡",
            iconFinder: "图标查找器",
            about: {
                title: "特征",
                preview: "预览图标",
                list: {
                    copy: "复制图标名称和 CSS 变量",
                    download: "下载不同格式的图标（SVG、PNG、GIF 等）",
                    premade: "复制为您的插件找到的预制图标",
                    find: "按功能上下文查找图标",
                    search: "通过右键单击颜色名称来搜索颜色",
                    special: "特别感谢"
                }
            },
            context: {
                icon: {
                    options: "图标选项",
                    log: "登录到控制台",
                    save: "另存为...",
                    rightClick: "右键点击图标即可更改",
                    usage: "用法",
                    click: "点击复制",
                    copied: "复制了！",
                    actions: "行动"
                }
            },
            modal: {
                label: "按功能上下文搜索",
                search: "搜索 {{count}} 图标...",
                function: "功能",
                iconViewer: {
                    colors: "图标查看器颜色",
                    unknown: "未知",
                }
            }
        },
        idleAutoRestart: {
            name: "IdleAutoRestart",
            description: "在空闲一段可配置的时间后自动重新启动客户端，但避免在 VC 中重新启动。",
            option: {
                isEnabled: {
                    label: "已启用",
                    description: "启用空闲后自动重启"
                },
                idleMinutes: {
                    label: "空闲分钟数",
                    description: "重新启动前不活动的分钟数（不在 VC 中时）"
                }
            },
            toolbox: {
                disable: "禁用空闲自动重启",
                enable: "启用空闲自动重启"
            }
        },
        ignoreActivities: {
            name: "IgnoreActivities",
            description: "忽略仅显示在您的状态上的活动。您可以从“注册游戏”和“活动”选项卡中配置专门忽略哪些游戏，或使用下面的常规设置",
            modal: {
                import: {
                    title: "将CustomRPC插件的应用程序ID导入到过滤器列表中"
                },
                filter: {
                    title: "过滤器列表",
                    description: "要过滤的以逗号分隔的活动 ID 列表（对于过滤特定 RPC 活动和 CustomRPC 很有用）"
                }
            },
            toast: {
                id: {
                    notSet: "未设置 CustomRPC 应用程序 ID。",
                    alreadyAdded: "CustomRPC 应用程序 ID 已添加。"
                }
            },
            button: {
                import: "导入自定义RPC ID"
            },
            option: {
                importCustomRPC: {
                    label: "导入自定义RPC"
                },
                listMode: {
                    label: "列表模式",
                    description: "选择如何应用过滤器列表",
                    blacklist: "黑名单（仅忽略列表中的内容）",
                    whitelist: "白名单（忽略除列表中的内容之外的所有内容）"
                },
                idList: {
                    label: "ID列表"
                },
                ignorePlaying: {
                    label: "忽略播放",
                    description: "忽略所有游戏活动（通常是游戏和 RPC 活动）"
                },
                ignoreStreaming: {
                    label: "忽略流媒体",
                    description: "忽略所有流媒体活动"
                },
                ignoreListening: {
                    label: "忽略倾听",
                    description: "忽略所有收听活动（通常为 Spotify 活动）"
                },
                ignoreWatching: {
                    label: "忽略观看",
                    description: "忽略所有观看活动"
                },
                ignoreCompeting: {
                    label: "忽略竞争",
                    description: "忽略所有竞争活动（这些通常是特殊的游戏活动）"
                },
                ignoredActivities: {
                    label: "被忽略的活动"
                }
            },
            text: {
                enableActivity: "启用活动",
                disableActivity: "禁用活动"
            }
        },
        ignoreCalls: {
            name: "IgnoreCalls",
            description: "允许您忽略来自特定用户或 DM 组的呼叫。",
            option: {
                permanentlyIgnoredUsers: {
                    label: "永久被忽略的用户",
                    description: "应永久忽略的用户 ID（逗号 + 空格）"
                }
            },
            button: {
                ignore: "忽略",
                temporarilyIgnore: "暂时忽略来电",
                permanentlyIgnore: "永久忽略来电"
            }
        },
        iLoveSpam: {
            name: "ILoveSpam",
            description: "不要隐藏来自“可能的垃圾邮件发送者”的消息"
        },
        imageFilename: {
            name: "ImageFilename",
            description: "将鼠标悬停在图像和 GIF 上时将其文件名显示为工具提示",
            option: {
                showFullUrl: {
                    label: "显示完整网址",
                    description: "显示图像的完整 URL，而不仅仅是文件名。始终启用 GIF，因为它们通常没有有意义的文件名"
                }
            }
        },
        imageLink: {
            name: "ImageLink",
            description: "切勿隐藏消息中的图像链接，即使它是唯一的内容"
        },
        imageZoom: {
            name: "ImageZoom",
            description: "允许您放大图像和 GIF 以及显示图像元数据。使用滚轮放大，使用 Shift + 滚轮增加镜头半径。",
            option: {
                saveZoomValues: {
                    label: "保存缩放值",
                    description: "是否保存变焦和镜头尺寸值"
                },
                invertScroll: {
                    label: "反转滚动",
                    description: "反转滚动"
                },
                nearestNeighbour: {
                    label: "最近邻",
                    description: "缩放图像时使用最近邻插值"
                },
                square: {
                    label: "正方形",
                    description: "将镜片设为正方形"
                },
                zoom: {
                    label: "飞涨",
                    description: "镜头变焦"
                },
                size: {
                    label: "尺寸",
                    description: "镜片半径/尺寸"
                },
                zoomSpeed: {
                    label: "变焦速度",
                    description: "变焦/镜头尺寸变化的速度有多快"
                },
                showMetadata: {
                    label: "显示元数据",
                    description: "双击所选图像时显示图像元数据"
                }
            },
            context: {
                square: "方形镜片",
                nearest: "最近邻",
                zoom: "飞涨",
                size: "镜片尺寸",
                zoomSpeed: "变焦速度",
                showImageMetadata: "显示图像元数据",
                view: "查看元数据",
                loading: "加载中...",
                unknown: "未知",
                sizeHTML: "尺寸",
                dimensions: "方面",
                filename: "文件名"
            },
            text: {
                bytes: "字节"
            }
        },
        imgToGif: {
            name: "ImgToGif",
            description: "添加 /imgtogif 斜线命令以从任何图像创建 GIF",
            command: {
                imgToGif: {
                    description: "允许您将图像转换为 GIF",
                    image: "使用的图像附件",
                    width: "GIF 的宽度",
                    height: "GIF 的高度"
                }
            },
            error: {
                noImage: "没有指定图片！",
                notImage: "上传的不是图片"
            }
        },
        implicitRelationships: {
            name: "ImplicitRelationships",
            description: "在“好友”选项卡中显示您的隐式关系。",
            option: {
                sortByAffinity: {
                    label: "按亲和力排序",
                    description: "是否按隐式关系与您的亲和力对它们进行排序。"
                }
            },
            implicit: "隐含的"
        },
        inRole: {
            name: "InRole",
            description: "使用角色上下文菜单或 /inrole 命令了解角色中的角色（阅读插件信息！）",
            command: {
                inrole: {
                    description: "了解角色是谁",
                    role: "角色",
                    noGuild: "确保您位于服务器中。"
                }
            },
            context: {
                view: "查看角色中的成员"
            },
            modal: {
                about: {
                    title: "局限性",
                    description: "如果您在服务器上没有 mod 权限，并且该服务器很大（超过 100 个成员），则该插件可能会受到以下限制",
                    list: {
                        one: "离线会员不会被列出",
                        two: "默认情况下最多会列出 100 名成员。要获取更多信息，请在成员列表中向下滚动以加载更多成员。",
                        three: "然而，无论其状态如何，朋友总是会被显示。"
                    }
                },
                member: {
                    title: "角色成员",
                    noMembers: "看起来没有找到具有该角色的在线缓存成员。尝试向下滚动您的成员列表以缓存更多用户！"
                }
            }
        },
        instantScreenshare: {
            name: "InstantScreenshare",
            description: "加入语音通道时立即进行屏幕共享，支持桌面源、窗口和视频输入设备（相机、采集卡）",
            modal: {
                linux: {
                    title: "对于Linux",
                    body: "对于 Wayland，它仅弹出屏幕共享选择",
                    bodyTwo: "对于 X11，它可能有效，也可能无效：耸肩："
                },
                videoDevices: {
                    title: "视频输入设备",
                    body: "在设置中启用后支持相机和采集卡（如 Elgato HD60X）"
                },
                regardingSound: {
                    title: "关于声音和预览设置",
                    body: "我们使用 Discord 设置和使用的设置来决定是否应启用流预览和声音"
                }
            },
            option: {
                streamMedia: {
                    label: "要流式传输的媒体源",
                    description: "如果未找到则重置到主屏幕",
                    loading: "正在加载媒体源...",
                    none: "找不到媒体来源",
                    placeholder: "选择要流式传输的媒体源"
                },
                includeVideoDevices: {
                    label: "包括视频设备",
                    description: "将视频输入设备（相机、采集卡）包含在源列表中"
                },
                autoMute: {
                    label: "自动静音",
                    description: "加入语音频道时自动将麦克风静音"
                },
                autoDeafen: {
                    label: "自动隔音",
                    description: "加入语音频道时自动变聋（也会使您静音）"
                },
                instantScreenshare: {
                    label: "即时屏幕共享",
                    description: "启用自动屏幕共享功能"
                },
                keybindScreenshare: {
                    label: "按键绑定屏幕共享",
                    description: "通过 Discord 键绑定设置中的键绑定进行屏幕共享"
                },
                focusDiscord: {
                    label: "焦点不和谐",
                    description: "仅当 Discord 聚焦时才使用按键绑定启动屏幕共享"
                },
                toolboxManagement: {
                    label: "工具箱管理",
                    description: "启用/禁用即时屏幕共享"
                }
            },
            toolbox: {
                label: "即时屏幕共享",
                toast: "即时屏幕共享 {{state}}",
                enabled: "启用",
                disabled: "残疾人"
            },
            toast: {
                instantScreenshareDisabled: "即时屏幕共享 {{disabled}}"
            },
            text: {
                instantScreenshare: "Instant Screenshare"
            }
        },
        invisibleChat: {
            name: "InvisibleChat",
            description: "以不可疑的方式加密您的消息！",
            option: {
                savedPasswords: {
                    label: "已保存的密码",
                    description: "保存的密码（用 , 分隔）"
                }
            },
            button: {
                encrypt: "加密消息",
                decrypt: "解密消息",
                hidden: "隐藏消息指示器（InvisibleChat）"
            },
            tooltip: {
                hidden: "此消息有隐藏消息！ （隐形聊天）"
            },
            embed: {
                title: "解密消息",
                footer: "通过 InvisibleChat 发送"
            },
            modal: {
                encrypt: {
                    title: "加密消息",
                    secret: "秘密",
                    cover: "封面（2个或更多字！！）",
                    password: "密码",
                    dontUseCover: "不要使用盖子",
                    send: "发送",
                    cancel: "取消"
                },
                decrypt: {
                    title: "解密消息",
                    with: "消息加密",
                    password: "密码",
                    decrypt: "解密",
                    cancel: "取消"
                }
            }
        },
        inviteDefaults: {
            name: "InviteDefaults",
            description: "允许您在创建服务器邀请时编辑默认值。",
            option: {
                inviteDuration: {
                    label: "邀请持续时间",
                    description: "服务器邀请的默认持续时间",
                    thirtyMinutes: "30分钟",
                    oneHour: "1小时",
                    sixHours: "6小时",
                    twelveHours: "12小时",
                    oneDay: "1 天",
                    sevenDays: "7天",
                    forever: "永远"
                },
                maxUses: {
                    label: "最大使用次数",
                    description: "服务器邀请的默认最大使用次数",
                    unlimited: "无限",
                    one: "1",
                    five: "5",
                    ten: "10",
                    twentyFive: "25",
                    fifty: "50",
                    oneHundred: "100"
                },
                temporaryMembership: {
                    label: "临时会员资格",
                    description: "服务器邀请的默认临时成员身份"
                }
            }
        },
        ircColors: {
            name: "IrcColors",
            description: "使聊天中的用户名颜色独一无二，就像在 IRC 客户端中一样",
            option: {
                lightness: {
                    label: "亮度",
                    description: "亮度，以 % 为单位。如果颜色太浅或太深，请进行更改"
                },
                memberListColors: {
                    label: "会员列表颜色",
                    description: "替换成员列表中的角色颜色"
                },
                applyColorOnlyToUsersWithoutColor: {
                    label: "仅将颜色应用于没有颜色的用户",
                    description: "仅将颜色应用于没有预定义颜色的用户"
                },
                applyColorOnlyInDms: {
                    label: "仅在 DM 中应用颜色",
                    description: "仅在直接消息中应用颜色；不要在服务器中应用颜色。"
                }
            }
        },
        iRememberYou: {
            name: "IRememberYou",
            description: "在本地保存与您通信的每个人（包括服务器），以防丢失",
            section: {
                description: "提供您提到或回复过的用户的列表，或者拥有您所属服务器的用户（服务器所有者*），或者是您的公会的成员",
                empty: "现在是空的。",
                tooltip: "{{user}}，更新于 {{updatedAtContent}}",
                owner: "服务器所有者",
                iRememberYou: "我记得你"
            },
            context: {
                user: "用户选项",
                copy: "复制用户 ID",
                copyToast: "用户 ID 已复制到剪贴板",
                view: "查看资料"
            },
            modal: {
                title: "编辑",
                filter: "按标签、用户名、ID 过滤",
                button: {
                    validate: "验证并保存",
                    cancel: "取消",
                    openEditor: "打开编辑器",
                    resetData: "重置存储",
                    sure: "你确定吗？"
                }
            },
            text: {
                serverOptions: "服务器选项",
                copyServerId: "复制服务器 ID",
                serverIdCopied: "服务器 ID 已复制到剪贴板"
            }
        },
        jumpTo: {
            name: "JumpTo",
            description: "添加上下文菜单选项以跳转到频道/DM 的开头或底部",
            context: {
                top: "跳转到第一条消息",
                bottom: "跳转至最新消息",
                noMessages: "在此频道中未找到该用户的消息。",
                searchFailed: "搜索消息失败。"
            }
        },
        keepCurrentChannel: {
            name: "KeepCurrentChannel",
            description: "在切换帐户或加载 Discord 之前尝试导航到您所在的频道。"
        },
        keyboardSounds: {
            name: "KeyboardSounds",
            description: "添加 OperaGX 或 osu!在键盘上打字时的声音效果。",
            option: {
                volume: {
                    label: "体积",
                    description: "键盘声音的音量"
                },
                soundPack: {
                    label: "声音包",
                    description: "用于键盘声音的声音包",
                    operagx: "OperaGX",
                    osu: "奥苏！"
                }
            }
        },
        keywordNotify: {
            name: "KeywordNotify",
            description: "如果给定消息与某些关键字或正则表达式匹配，则发送通知",
            idHolder: "ID",
            keywordEntry: "关键词输入",
            regexHolder: "示例|正则表达式",
            ignoreCase: "忽略大小写",
            whiteblackLabel: "白名单/黑名单",
            tab: {
                title: "关键词",
                clearAll: "全部清除"
            },
            button: {
                addId: "添加ID",
                addKeyword: "添加关键词条目"
            },
            listTypeSelector: {
                blacklist: "黑名单",
                whitelist: "白名单",
                placeholder: "选择列表类型"
            },
            option: {
                ignoreBots: {
                    label: "忽略机器人",
                    description: "忽略来自机器人的消息"
                },
                amountToKeep: {
                    label: "保留金额",
                    description: "要保留在日志中的消息数量"
                },
                keywords: {
                    label: "关键词",
                    description: "管理关键词"
                }
            },
            text: {
                keywordEntryI1: "关键词条目 {{i_1}}",
                listPriorityAdvanced: "列表优先级（高级）",
                whichListToPrioritize: "当一条消息同时触发两个列表时优先使用哪个列表",
                ifYouAreNot: "如果不确定，大多数常见情况下通常设为黑名单"
            }
        },
        lastOnline: {
            name: "LastOnline",
            description: "在 DM 列表、公会和 GDM 成员列表中的用户名下添加最后在线指示器",
            unit: {
                d: "天",
                h: "小时",
                m: "分钟"
            },
            online: "{{formattedTime}} 前在线"
        },
        listenBrainzRPC: {
            name: "ListenBrainzRPC",
            description: "ListenBrainz 丰富存在的小插件",
            about: {
                title: "关于 MusicBrainz API",
                description: "MusicBrainz API 不需要 API 密钥，但需要 {{link}}。对于大多数人来说，电子邮件地址就足够了。",
                userAgent: "有意义的用户代理字符串"
            },
            option: {
                username: {
                    label: "用户名",
                    description: "ListenBrainz 用户名"
                },
                mbContact: {
                    label: "联系方式",
                    description: "听脑联系方式"
                },
                shareUsername: {
                    label: "分享用户名",
                    description: "显示 ListenBrainz 个人资料的链接（可能仅对其他用户可见）"
                },
                shareSong: {
                    label: "分享歌曲",
                    description: "在 ListenBrainz 上显示当前歌曲的链接（可能仅对其他用户可见）"
                },
                hideWithSpotify: {
                    label: "使用 Spotify 隐藏",
                    description: "如果 Spotify 正在运行，则隐藏 ListenBrainz 存在"
                },
                hideWithActivity: {
                    label: "隐藏活动",
                    description: "如果您有任何其他状态，请隐藏 ListenBrainz 状态"
                },
                useTimeBar: {
                    label: "使用时间栏",
                    description: "使用曲目持续时间显示时间条（必须使用收听状态）"
                },
                statusName: {
                    label: "状态名称",
                    description: "自定义状态文本"
                },
                nameFormat: {
                    label: "姓名格式",
                    description: "在状态名称中显示歌曲名称和艺术家名称",
                    custom: "使用自定义状态名称",
                    artistSong: "使用格式“艺术家 - 歌曲”",
                    songArtist: "使用格式“歌曲 - 艺术家”",
                    artistOnly: "仅使用艺术家姓名",
                    songOnly: "仅使用歌曲名称",
                    albumName: "使用专辑名称（如果歌曲没有专辑，则返回自定义状态文本）"
                },
                useListeningStatus: {
                    label: "使用收听状态",
                    description: "显示“正在收听”状态而不是“正在播放”"
                },
                missingArt: {
                    label: "缺失的艺术",
                    description: "当专辑或专辑封面丢失时",
                    listenbrainzLogo: "使用大 ListenBrainz 徽标",
                    generic: "使用通用占位符"
                },
                showAlbumCover: {
                    label: "显示专辑封面",
                    description: "显示专辑封面。禁用此选项将显示占位图。如果您的音乐包含不当的封面，此功能会很有用"
                },
                useLogo: {
                    label: "使用标志",
                    description: "在专辑封面上显示 ListenBrainz 徽标"
                }
            },
            button: {
                profile: "ListenBrainz 个人资料",
                viewSong: "查看歌曲"
            }
        },
        loadingQuotes: {
            name: "LoadingQuotes",
            description: "替换 Discord 的加载引号",
            option: {
                replaceEvents: {
                    label: "替换事件",
                    description: "该插件是否也适用于具有特殊活动主题报价的活动？ （例如万圣节）"
                },
                enablePluginPresetQuotes: {
                    label: "启用插件预设报价",
                    description: "启用此插件预设的报价"
                },
                enableDiscordPresetQuotes: {
                    label: "启用 Discord 预设报价",
                    description: "启用 Discord 的预设报价（包括活动期间的活动报价）"
                },
                additionalQuotes: {
                    label: "附加报价",
                    description: "可能出现的其他自定义引号，由以下分隔符分隔"
                },
                additionalQuotesDelimiter: {
                    label: "附加引号分隔符",
                    description: "附加引号的分隔符"
                }
            },
            text: {
                allQuotesDisabled: "你真的把所有加载语录都关掉了？真是个小丑……"
            }
        },
        loginWithQR: {
            name: "LoginWithQR",
            description: "允许您通过扫描登录二维码登录到其他设备，就像在移动设备上一样！",
            option: {
                scanQr: {
                    label: "扫描二维码",
                    description: "扫描二维码",
                    notEnabled: "启用插件并重新启动客户端以扫描登录二维码"
                }
            },
            neverScan: "切勿扫描其他用户或应用程序的登录二维码。",
            hold: "按住确认登录",
            scanning: "扫描...",
            stopScanning: "停止扫描",
            usingWebcam: "使用网络摄像头扫描",
            dragDrop: "将图像拖放到此处，或单击以选择图像",
            orPaste: "或者从剪贴板粘贴图像！",
            verifyLogin: "验证登录",
            text: {
                scanQrCode: "扫描二维码"
            }
        },
        markdownTables: {
            name: "MarkdownTables",
            description: "在 Discord 消息中渲染 GitHub 风格的 Markdown 表格。",
            toolbar: {
                label: "Markdown 表格视图",
                table: "表格",
                raw: "原始"
            },
            option: {
                hideToggle: {
                    label: "隐藏切换",
                    description: "隐藏表格/原始切换，始终显示渲染后的表格。"
                }
            }
        },
        mediaPlaybackSpeed: {
            name: "MediaPlaybackSpeed",
            description: "允许更改媒体嵌入的（默认）播放速度",
            playbackSpeed: "播放速度",
            context: {
                label: "播放速度控制"
            },
            option: {
                defaultVoiceMessageSpeed: {
                    label: "默认语音留言速度",
                    description: "语音留言"
                },
                defaultVideoSpeed: {
                    label: "默认视频速度",
                    description: "视频"
                },
                defaultAudioSpeed: {
                    label: "默认音频速度",
                    description: "音频"
                }
            }
        },
        memberCount: {
            name: "MemberCount",
            description: "在成员列表和提示中显示服务器的在线成员数、总成员数和语音频道用户数。",
            option: {
                toolTip: {
                    label: "工具提示",
                    description: "在服务器工具提示上显示成员计数"
                },
                memberList: {
                    label: "会员名单",
                    description: "在成员列表标题中显示成员计数"
                },
                voiceActivity: {
                    label: "语音活动",
                    description: "显示语音频道的用户数量"
                }
            },
            onlineThisChannel: "{{formattedOnlineCount}} 在此频道在线",
            totalMembers: "{{formattedTotalCount}} 服务器成员总数",
            totalVoice: "{{formattedVoiceCount}} 成员的声音",
            tooltip: {
                total: "服务器共 {{count}} 名成员"
            }
        },
        mentionAvatars: {
            name: "MentionAvatars",
            description: "在提及中显示用户头像和角色图标",
            option: {
                showAtSymbol: {
                    label: "显示@符号",
                    description: "@符号是否应显示在用户提及中"
                }
            }
        },
        meow: {
            name: "Meow",
            description: "添加聊天栏按钮以在聊天中喵喵叫",
            button: {
                meow: "喵"
            }
        },
        messageBurst: {
            name: "MessageBurst",
            description: "如果没有其他人在您之前发送消息，则将一段时间内发送的消息与您之前发送的消息合并。",
            option: {
                timePeriod: {
                    label: "时间段",
                    description: "突发的持续时间（以秒为单位）。"
                },
                shouldMergeWithAttachment: {
                    label: "与附件合并",
                    description: "如果最后一条消息有附件，是否应该合并该消息？"
                },
                useSpace: {
                    label: "使用空间",
                    description: "合并时是否在消息之间添加空格而不是换行。"
                }
            }
        },
        messageClickActions: {
            name: "MessageClickActions",
            description: "按住退格键单击删除，双击编辑/回复",
            option: {
                singleClickAction: {
                    label: "单击操作",
                    description: "单击即可执行操作（您的消息）"
                },
                singleClickModifier: {
                    label: "单击修改器",
                    description: "单击操作所需的修饰符（您的消息）"
                },
                singleClickOthersAction: {
                    label: "单击操作（其他）",
                    description: "单击时的操作（其他人的消息）"
                },
                singleClickOthersModifier: {
                    label: "单击修改器（其他）",
                    description: "单击操作所需的修饰符（其他人的消息）"
                },
                doubleClickAction: {
                    label: "双击操作",
                    description: "双击操作（您的消息）"
                },
                doubleClickOthersAction: {
                    label: "双击操作（其他）",
                    description: "双击时的操作（其他人的消息）"
                },
                doubleClickModifier: {
                    label: "双击修改器",
                    description: "双击操作所需的修饰符"
                },
                tripleClickAction: {
                    label: "三击操作",
                    description: "三击操作"
                },
                tripleClickModifier: {
                    label: "三击修改器",
                    description: "三击操作所需的修饰符"
                },
                reactEmoji: {
                    label: "反应表情符号",
                    description: "用于反应动作的表情符号"
                },
                addAdditionalReacts: {
                    label: "添加额外的反应",
                    description: "还添加其他配置的反应表情符号"
                },
                additionalReactEmojis: {
                    label: "额外的反应表情符号",
                    description: "使用 React 操作时要添加的其他表情符号（逗号/换行符分隔，最大 {{count}}）"
                },
                disableInDms: {
                    label: "在 DM 中禁用",
                    description: "禁用私信中的所有点击操作"
                },
                disableInSystemDms: {
                    label: "在系统 DM 中禁用",
                    description: "禁用系统 DM 中的所有点击操作"
                },
                clickTimeout: {
                    label: "点击超时",
                    description: "区分双击/三次点击的超时时间（毫秒）"
                },
                doubleClickHoldThreshold: {
                    label: "双击保持阈值",
                    description: "双击操作的最长保持时间（毫秒）。按住较长时间可以选择文本"
                },
                deferDoubleClickForTriple: {
                    label: "推迟双击三次",
                    description: "延迟双击以允许三次单击操作（关闭时禁用三次单击）"
                },
                selectionHoldTimeout: {
                    label: "选择保持超时",
                    description: "允许文本选择的超时（毫秒）"
                },
                quoteWithReply: {
                    label: "引用并回复",
                    description: "引用时也回复消息"
                },
                useSelectionForQuote: {
                    label: "使用选择进行报价",
                    description: "引用时，使用选定的文本（如果有）"
                }
            },
            actions: {
                none: "没有任何",
                delete: "删除",
                copyLink: "复制链接",
                copyID: "复制身份证件",
                copyContent: "复制内容",
                copyUserID: "复制用户 ID",
                edit: "编辑",
                reply: "回复",
                react: "反应",
                openThread: "打开线程",
                openTab: "打开选项卡",
                quote: "引用",
                pin: "别针"
            },
            missingPermissions: {
                react: "无法反应：缺少权限",
                pin: "无法固定：缺少权限",
            },
            cannotQuote: "无法引用此消息类型",
            copy: {
                messageId: "消息 ID 已复制！",
                messageContent: "留言内容已复制！",
                userId: "用户ID已复制！"
            },
            linkCopied: "链接已复制！",
            text: {
                shift: "Shift",
                ctrl: "Ctrl",
                alt: "Alt",
                backspace: "退格键",
                pickEmoji: "选择表情"
            },
            emojiSetting: {
                pick: "选择表情",
                selectMain: "选择用于反应的表情",
                selectAdditional: "选择额外的表情",
                additionalPlaceholder: "用逗号/换行分隔，最多 {{max}} 个"
            },
            toast: {
                cannotReact: "无法添加反应：缺少权限",
                linkCopied: "链接已复制！"
            }
        },
        messageColors: {
            name: "MessageColors",
            description: "在消息内显示颜色代码，例如#FF0042",
            option: {
                renderType: {
                    label: "渲染类型",
                    description: "如何渲染颜色",
                    textColor: "文字颜色",
                    block: "附近街区",
                    backgroundColor: "背景颜色"
                },
                enableShortHexCodes: {
                    label: "启用短十六进制代码",
                    description: "启用 3 个字符的十六进制代码，例如 #39f"
                },
                blockView: {
                    label: "块视图类型",
                    description: "如何显示色块",
                    right: "右侧",
                    left: "左侧",
                    both: "双方"
                }
            }
        },
        messageFetchTimer: {
            name: "MessageFetchTimer",
            description: "显示获取当前频道的消息所花费的时间",
            option: {
                showIcon: {
                    label: "显示图标",
                    description: "在消息栏中显示获取时间图标"
                },
                showMs: {
                    label: "显示毫秒",
                    description: "显示毫秒计时"
                },
                iconColor: {
                    label: "图标颜色",
                    description: "图标颜色（CSS颜色值）"
                }
            },
            loaded: "消息在 {{time}}ms ({{timeAgo}}) 内加载",
            day: "天{{s}} 前",
            hour: "小时{{s}} 前",
            minute: "分钟{{s}} 前",
            justNow: "现在"
        },
        messageLatency: {
            name: "MessageLatency",
            description: "显示花费 ≥n 秒发送的消息的指示器",
            day: "天",
            days: "天",
            hour: "小时",
            hours: "小时",
            minute: "分钟",
            minutes: "分钟",
            second: "第二",
            seconds: "秒",
            millisecond: "毫秒",
            milliseconds: "毫秒",
            and: "和",
            oldKotlinDetected: "怀疑用户使用的是旧版 Discord Android 客户端。",
            ahead: "该用户的时钟提前 {{delta}}。",
            delay: "此消息的发送延迟了 {{delta}}。",
            delayedMessage: "延迟消息",
            oldAndroidClient: "旧版 Discord Android 客户端",
            option: {
                latency: {
                    label: "延迟",
                    description: "延迟指示器的阈值（以秒为单位）"
                },
                detectDiscordKotlin: {
                    label: "检测 Discord Kotlin",
                    description: "检测旧的 Discord Android 客户端"
                },
                showMillis: {
                    label: "显示毫秒",
                    description: "显示毫秒"
                },
                ignoreSelf: {
                    label: "忽略自我",
                    description: "不要在您自己的消息中添加指示符"
                }
            }
        },
        messageLinkEmbeds: {
            name: "MessageLinkEmbeds",
            description: "为链接其他消息的消息添加预览",
            option: {
                messageBackgroundColor: {
                    label: "消息背景颜色",
                    description: "丰富嵌入中消息的背景颜色"
                },
                automodEmbeds: {
                    label: "Automod 嵌入",
                    description: "使用 automod 嵌入而不是丰富的嵌入（较小但信息较少）",
                    always: "始终使用 automod 嵌入",
                    prefer: "首选 automod 嵌入，但如果某些内容无法显示，请使用丰富的嵌入",
                    never: "切勿使用 automod 嵌入"
                },
                listMode: {
                    label: "列表模式",
                    description: "是否使用ID列表作为黑名单或白名单",
                    blacklist: "黑名单",
                    whitelist: "白名单"
                },
                idList: {
                    label: "身份证号码列表",
                    description: "加入黑名单或白名单的公会/频道/用户 ID（以逗号分隔）"
                },
                clearMessageCache: {
                    label: "清除消息缓存",
                    description: "清除链接消息缓存"
                }
            },
            noContent: {
                noAttachments: "无内容 {{count}} 嵌入 {{s}}",
                noEmbeds: "无内容 {{count}} 附件 {{s}}",
                both: "无内容，{{attachments}} 附件{{attachmentsS}} 和{{embeds}} 嵌入{{embedsS}}"
            },
            dm: "私信",
            groupDm: "小组DM",
            server: "服务器"
        },
        messageLinkTooltip: {
            name: "MessageLinkTooltip",
            description: "当鼠标悬停在消息链接、回复和转发的消息上时，添加带有消息预览的工具提示。",
            loading: "加载中...",
            option: {
                onLink: {
                    label: "链接上",
                    description: "将鼠标悬停在消息链接上时显示工具提示"
                },
                onReply: {
                    label: "回复时",
                    description: "将鼠标悬停在消息回复上时显示工具提示"
                },
                onForward: {
                    label: "前进时",
                    description: "将鼠标悬停在转发的消息上时显示工具提示"
                },
                display: {
                    label: "展示",
                    description: "展示风格",
                    auto: "与留言相同",
                    compact: "袖珍的",
                    cozy: "舒适"
                }
            }
        },
        messageLogger: {
            name: "MessageLogger",
            description: "临时记录已删除和编辑的消息。",
            removeMessage: "清除消息历史",
            removeMessageTemporary: "删除消息（临时）",
            clearMessageLog: "清除消息日志",
            showDiff: "显示差异",
            modal: {
                edit: {
                    title: "留言编辑历史",
                    tooltip: "此编辑状态未记录，因此无法显示。"
                }
            },
            option: {
                deleteStyle: {
                    label: "删除样式",
                    description: "已删除消息的样式",
                    text: "红色文字",
                    overlay: "红色叠加"
                },
                logDeletes: {
                    label: "日志删除",
                    description: "是否记录已删除的消息"
                },
                collapseDeleted: {
                    label: "折叠 已删除",
                    description: "是否折叠已删除的消息，类似于阻止的消息"
                },
                logEdits: {
                    label: "日志编辑",
                    description: "是否记录编辑的消息"
                },
                inlineEdits: {
                    label: "内联编辑",
                    description: "是否将编辑历史记录显示为消息内容的一部分"
                },
                ignoreBots: {
                    label: "忽略机器人",
                    description: "是否忽略机器人发送的消息"
                },
                ignoreSelf: {
                    label: "忽略自我",
                    description: "是否自行忽略消息"
                },
                ignoreSelfEdits: {
                    label: "忽略自身编辑",
                    description: "是否忽略您自己的编辑"
                },
                ignoreUsers: {
                    label: "忽略用户",
                    description: "要忽略的以逗号分隔的用户 ID 列表"
                },
                ignoreChannels: {
                    label: "忽略频道",
                    description: "要忽略的以逗号分隔的通道 ID 列表"
                },
                ignoreGuilds: {
                    label: "忽略公会",
                    description: "要忽略的以逗号分隔的行会 ID 列表"
                },
                showEditDiffs: {
                    label: "显示编辑差异",
                    description: "显示已编辑消息版本之间的视觉差异"
                },
                separatedDiffs: {
                    label: "分离的差异",
                    description: "差异中单独的添加和删除以获得更具可读性的差异"
                },
                logDeletedAttachments: {
                    description: "是否记录已删除的附件",
                    label: "记录已删除的附件"
                }
            },
            text: {
                clearHistory: "清除历史记录",
                toggleDeletedHighlight: "切换已删除高亮",
                enableDiffView: "启用差异视图",
                disableDiffView: "禁用差异视图",
                noDeletedMessages: "没有已删除的消息",
                deletedMessageSuffix: " 条已删除的消息",
                deletedMessagesSuffix: " 条已删除的消息"
            }
        },
        messageLoggerEnhanced: {
            name: "MessageLoggerEnhanced",
            description: "通过附加功能增强了 MessageLogger 插件。",
            updateImageCacheDir: "已成功更新图像缓存目录。",
            updateLogsDir: "已成功更新日志目录。",
            failedUpdate: "更新目录失败。",
            blacklist: "黑名单",
            whitelist: "白名单",
            failedToRemove: "删除消息失败",
            successfullyImported: "日志导入成功",
            errorImportingLogs: "导入日志时出错。检查控制台以获取更多信息",
            importing: "输入...",
            importLogs: "导入日志",
            exporting: "出口...",
            exportLogs: "导出日志",
            alert: {
                clearLogs: {
                    title: "清除日志",
                    body: "您确定要清除所有日志吗？",
                    confirmText: "清除",
                    cancel: "取消"
                },
                clearVisibleLogs: {
                    title: "清晰可见的日志",
                    body: "您确定要清除 {{messages}} 日志吗？",
                    confirmText: "清除",
                    cancel: "取消"
                },
                cleared: "消息日志数据库和缓存已清除。"
            },
            context: {
                title: "消息记录器",
                jumpToMessage: "跳转至消息",
                openUserProfile: "打开用户资料",
                copyContent: "复制内容",
                copyUserId: "复制用户 ID",
                copyMessageId: "复制消息 ID",
                copyChannelId: "复制频道 ID",
                copyServerId: "复制服务器 ID",
                deleteLog: "删除日志",
                fromUsernameDm: "来自 {{username}} 的 DM",
                fromGroupDm: "来自 {{channelName}} 组 DM",
                fromServerChannel: "从 {{serverName}} 中的 {{channelName}}",
                moveTypeTo: "将 {{type}} 移动到 {{destination}}",
                removeTypeFrom: "从 {{list}} 中删除 {{type}}",
                openLogsFor: "打开 {{name}} 的日志",
                openLogs: "打开日志",
                removeMessage: "删除消息（永久）",
                removeMessageHistory: "删除消息历史记录（永久）",
                deleteMessageHide: "删除消息（从消息记录器中隐藏）",
                addServerToBlacklist: "将服务器添加到黑名单",
                addServerToWhitelist: "将服务器添加到白名单",
                removeServerFromBlacklist: "将服务器从黑名单中删除",
                removeServerFromWhitelist: "从白名单中删除服务器",
                moveServerToBlacklist: "将服务器移至黑名单",
                moveServerToWhitelist: "将服务器移至白名单",
                addUserToBlacklist: "将用户添加到黑名单",
                addUserToWhitelist: "将用户添加到白名单",
                removeUserFromBlacklist: "将用户从黑名单中删除",
                removeUserFromWhitelist: "从白名单中删除用户",
                moveUserToBlacklist: "将用户移至黑名单",
                moveUserToWhitelist: "将用户移至白名单",
                addChannelToBlacklist: "将频道添加到黑名单",
                addChannelToWhitelist: "将频道添加到白名单",
                removeChannelFromBlacklist: "将频道从黑名单中删除",
                removeChannelFromWhitelist: "从白名单中删除频道",
                moveChannelToBlacklist: "将频道移至黑名单",
                moveChannelToWhitelist: "将频道移至白名单"
            },
            type: {
                server: "服务器",
                user: "用户",
                channel: "渠道"
            },
            button: {
                chooseFolder: "选择文件夹",
                browse: "浏览",
                clearLogs: "清除所有日志",
                clearVisibleLogs: "清晰可见的日志",
                sortOldest: "将最旧的排在最前面",
                sortNewest: "从新排序",
                loadMore: "加载更多",
                noResults: "{{tab}} 中没有结果",
                tryOtherTabs: "也许尝试 {{nextTab}} 或 {{lastTab}}",
                importLogs: "导入日志"
            },
            modal: {
                title: "过滤消息",
                deleted: "已删除",
                edited: "已编辑",
                ghostPing: "幽灵 ping",
                empty: "空呃",
                importLogs: "ML增强版现在将日志存储在indexeddb中。您需要从日志目录导入旧日志。导入不会覆盖现有日志"
            },
            clear: {
                title: "清除日志",
                description: "您确定要清除所有日志吗？",
                confirm: "清除",
                cancel: "取消"
            },
            option: {
                saveMessages: {
                    label: "保存消息",
                    description: "是否保存已删除和编辑的消息。"
                },
                saveImages: {
                    label: "保存图像",
                    description: "保存已删除的附件。"
                },
                sortNewest: {
                    label: "从新排序",
                    description: "按最新对日志进行排序。"
                },
                cacheMessagesFromServers: {
                    label: "缓存来自服务器的消息",
                    description: "通常消息记录器仅记录来自白名单 ID 和 DM 的日志，启用此功能意味着它也会记录来自所有服务器的消息。请注意，这可能会导致缓存超出其限制，从而导致某些消息丢失。如果您位于许多服务器中，这可能会显着增加记录消息的机会，从而导致消息记录很大并包含不相关的消息。"
                },
                ignoreBots: {
                    label: "忽略机器人",
                    description: "是否忽略机器人发送的消息"
                },
                ignoreWebhooks: {
                    label: "忽略 Webhook",
                    description: "是否通过 webhook 忽略消息"
                },
                ignoreSelf: {
                    label: "忽略自我",
                    description: "是否自行忽略消息"
                },
                ignoreMutedGuilds: {
                    label: "忽略静音公会",
                    description: "静音公会中的消息不会被记录。静音公会中列入白名单的用户/频道仍将被记录。"
                },
                ignoreMutedCategories: {
                    label: "忽略静音类别",
                    description: "属于静音类别的频道中的消息不会被记录。静音公会中列入白名单的用户/频道仍将被记录。"
                },
                ignoreMutedChannels: {
                    label: "忽略静音频道",
                    description: "静音频道中的消息不会被记录。静音公会中列入白名单的用户/频道仍将被记录。"
                },
                alwaysLogDirectMessages: {
                    label: "始终记录直接消息",
                    description: "始终记录 DM"
                },
                alwaysLogCurrentChannel: {
                    label: "始终记录当前频道",
                    description: "始终记录当前选择的通道。列入黑名单的频道/用户仍将被忽略。"
                },
                permanentlyRemoveLogByDefault: {
                    label: "默认永久删除日志",
                    description: "Base MessageLogger 删除日志按钮将永久删除日志"
                },
                hideMessageFromMessageLoggers: {
                    label: "隐藏消息记录器中的消息",
                    description: "启用后，将在消息中添加一个上下文菜单按钮，以便您可以删除消息，而无需其他记录器记录它们。可能不安全，使用风险自负。"
                },
                showLogsButton: {
                    label: "显示日志按钮",
                    description: "切换到是否显示工具箱"
                },
                showWhereMessageIsFrom: {
                    label: "显示消息的来源",
                    description: "显示消息频道/作者姓名和服务器名称"
                },
                messagesToDisplayAtOnceInLogs: {
                    label: "在日志中立即显示的消息",
                    description: "日志中一次显示的消息数以及在日志中加载更多消息时要加载的消息数。"
                },
                hideMessageFromMessageLoggersDeletedMessage: {
                    label: "隐藏消息记录器中的消息 已删除的消息",
                    description: "使用消息记录器隐藏消息功能时要替换消息的消息内容。"
                },
                messageLimit: {
                    label: "消息限制",
                    description: "要保存的最大消息数。达到限制后，较旧的消息将被删除。 0表示没有限制"
                },
                attachmentSizeLimitInMegabytes: {
                    label: "附件大小限制（以兆字节为单位）",
                    description: "要保存的附件的最大大小（以兆字节为单位）。大于此大小的附件将不会被保存。"
                },
                attachmentFileExtensions: {
                    label: "附件文件扩展名",
                    description: "要保存的文件扩展名的逗号分隔列表。文件扩展名不在此列表中的附件将不会被保存。留空以保存所有附件。"
                },
                cacheLimit: {
                    label: "缓存限制",
                    description: "缓存中保留的最大消息数。达到限制后，较旧的消息将被删除。"
                },
                timeBasedCleanupMinutes: {
                    label: "基于时间的清理分钟数",
                    description: "对早于消息限制的消息执行基于时间的清理的时间间隔（以分钟为单位）。"
                },
                preserveCurrentChannel: {
                    label: "保留当前频道",
                    description: "启用后，当前所选频道中的消息不受基于时间的清理的影响。"
                },
                whitelistedIds: {
                    label: "白名单 ID",
                    description: "始终在消息日志中显示的服务器、频道或用户 ID。"
                },
                blacklistedIds: {
                    label: "列入黑名单的 ID",
                    description: "永不在消息日志中显示的服务器、频道或用户 ID。"
                },
                imageCacheDir: {
                    label: "图片缓存目录",
                    description: "选择保存图像的目录"
                },
                logsDir: {
                    label: "日志目录",
                    description: "选择日志目录"
                },
                importLogs: {
                    label: "导入日志",
                    description: "从文件导入日志"
                },
                exportLogs: {
                    label: "导出日志",
                    description: "从 IndexedDB 导出日志"
                },
                clearLogsOnRestart: {
                    label: "重启时清除日志",
                    description: "Discord 重启时清除日志。"
                },
                openLogs: {
                    label: "打开日志",
                    description: "打开日志"
                },
                openImageCacheFolder: {
                    label: "打开图像缓存文件夹",
                    description: "打开图像缓存目录"
                },
                clearLogs: {
                    label: "清除日志",
                    description: "清除日志",
                    title: "清除日志",
                    body: "您确定要清除所有日志吗？",
                    confirmText: "清除",
                    cancel: "取消"
                }
            },
            toast: {
                clearedLogs: "日志已清除",
                failedToClearLogs: "清除日志失败",
                failedToRemoveMessage: "移除消息失败。详情请查看控制台。",
                noMessagesFoundIn: "日志文件中未找到消息",
                successfullyImportedCountLogs: "已成功导入 {{count}} 条日志",
                successfullyExportedLogs: "已成功导出日志",
                successfullyExportedCountLogs: "已成功导出 {{count}} 条日志",
                errorExportingLogsCheck: "导出日志时出错。详情请查看控制台"
            },
            text: {
                jsonFile: "JSON 文件",
                clearLogs: "清除日志",
                clearingLogs: "正在清除日志...",
                messageLogger: "Message Logger",
                importLogs: "导入日志",
                logs: "日志",
                loadingTabLogs: "正在加载{{tab}}日志..."
            }
        },
        messageNotifier: {
            name: "MessageNotifier",
            description: "当选定的用户发送消息时获得祝酒词",
            dm: "他们的私信",
            option: {
                users: {
                    label: "用户",
                    description: "用于获取消息 toast 的用户 ID 的逗号分隔列表",
                    invalidId: "{{id}} 不是有效的用户 ID"
                }
            },
            notification: {
                title: "{{username}} 发送了一条消息",
                body: "点击跳转至{{locationName}}"
            }
        },
        messageTags: {
            name: "MessageTags",
            description: "允许您保存消息并通过简单的命令使用它们。",
            notExist: "标签 **{{tagname}}** 不再存在！请重新加载您的 Discord 来修复:)",
            alreadyExist: "名为 **{{tagname}}** 的标签已存在！",
            sentTag: "标签 **{{tagname}}** 已发送！",
            successCreate: "标签 **{{tagname}}** 已创建！",
            allTags: "你所有的标签：",
            noTags: "糟糕！还没有标签，请使用 /tag create 创建一个！",
            noDeleteTag: "标签 **{{tagname}}** 不存在，因此无法删除！",
            successDelete: "成功删除标签**{{name}}**！",
            tagPreview: "名为 **{{name}}** 的标签不存在！",
            option: {
                clyde: {
                    label: "发送克莱德消息",
                    description: "如果启用，当使用标签时，Clyde 会向您发送一条短暂消息。"
                },
                tagsList: {
                    label: "标签列表",
                    description: ""
                }
            },
            command: {
                tags: {
                    description: "自己管理所有标签",
                    option: {
                        create: {
                            description: "创建一个新标签",
                            name: "The name of the tag to trigger the response",
                            message: "使用此标签时您将发送的消息"
                        },
                        list: {
                            description: "列出您自己的所有标签"
                        },
                        delete: {
                            description: "删除自己的标签",
                            name: "The name of the tag to remove"
                        },
                        preview: {
                            description: "预览标签而不公开发送",
                            name: "The name of the tag to preview"
                        }
                    }
                }
            }
        },
        micLoopbackTester: {
            name: "MicLoopbackTester",
            description: "将麦克风环回测试图标添加到用户面板",
            button: "麦克风测试环回"
        },
        middleClickTweaks: {
            name: "MiddleClickTweaks",
            description: "各种中键单击调整，例如粘贴和链接打开。",
            option: {
                openScope: {
                    label: "开放范围",
                    description: "防止通过中键单击这些内容类型来打开它们。",
                    links: "链接",
                    media: "媒体",
                    linksAndMedia: "链接和媒体",
                    none: "没有任何"
                },
                pasteScope: {
                    label: "粘贴范围",
                    description: "在这些情况下防止中键单击粘贴。",
                    always: "始终防止中键单击粘贴",
                    focus: "仅在文本区域未聚焦时阻止",
                },
                pasteThreshold: {
                    label: "粘贴阈值",
                    description: "单击中键后再次启用粘贴所需的毫秒数。"
                }
            }
        },
        moreCommands: {
            name: "MoreCommands",
            description: "Echo、Lenny、Mock 等",
            command: {
                echo: {
                    description: "以 Clyde（本地）身份发送消息"
                },
                lenny: {
                    description: "发个莱尼脸"
                },
                mock: {
                    description: "模拟人"
                },
                wordcount: {
                    description: "计算消息中的字数",
                    response: "该消息包含 {{count}} 个字。"
                },
                flipcoin: {
                    description: "抛硬币，结果是正面还是反面",
                    heads: "头",
                    tails: "尾巴",
                    response: "硬币落在 {{result}} 上。"
                },
                ask: {
                    description: "提出是/否问题并得到答案",
                    yes: "是的",
                    no: "不",
                    maybe: "或许",
                    askAgain: "稍后再询问",
                    definitelyNot: "绝对不是",
                    itIsCertain: "可以肯定的是"
                },
                randomanimal: {
                    description: "获取随机的动物图片",
                    animal: "选择你的动物",
                    cat: "猫",
                    dog: "狗",
                    response: "抱歉，目前无法获取动物图片"
                },
                randomnumber: {
                    description: "生成两个值之间的随机数",
                    min: "最小值",
                    max: "最大值",
                    response: "{{min}} 和 {{max}} 之间的随机数：{{number}}"
                },
                choose: {
                    description: "从提供的选项中随机选择",
                    option: "以逗号分隔的选项列表",
                    response: "我选择：{{choice}}"
                },
                systeminfo: {
                    description: "显示系统信息",
                    platform: "平台",
                    deviceType: "设备类型",
                    mobile: "移动的",
                    desktop: "桌面",
                    browser: "浏览器",
                    cpuCores: "CPU核心",
                    memory: "记忆",
                    screen: "屏幕",
                    languages: "语言",
                    network: "网络",
                    online: "在线的",
                    offline: "离线",
                    failedToFetch: "获取系统信息失败",
                    unknown: "未知"
                },
                getuptime: {
                    description: "获取客户端的正常运行时间",
                    response: "**客户端正常运行时间**：{{uptime}} 分钟"
                },
                gettime: {
                    description: "获取当前时间",
                    response: "当前时间是 {{time}}"
                },
                transform: {
                    description: "使用指定选项转换文本",
                    transformation: {
                        description: "应用于您的文本的转换",
                        lowercase: "将文本转换为小写",
                        uppercase: "将文本转换为大写",
                        localeLowercase: "将文本转换为区域设置小写",
                        localeUppercase: "将文本转换为区域设置大写",
                        same: "保持不变"
                    },
                    repeat: "重复多少次",
                    reverse: "是否反转文本",
                    normalize: {
                        description: "文本规范化形式",
                        nfc: "标准化形式 C (NFC)",
                        nfd: "标准化表格 D (NFD)",
                        nfkc: "标准化表格 KC (NFKC)",
                        nfkd: "标准化形式 KD (NFKD)"
                    },
                    text: "转换此文本"
                }
            }
        },
        moreKaomoji: {
            name: "MoreKaomoji",
            description: "向 Discord 添加更多 Kaomoji。 ヽ(´▽`)/"
        },
        moreQuickReactions: {
            name: "MoreQuickReactions",
            description: "改进了消息上下文菜单中的快速反应按钮。",
            option: {
                reactionCount: {
                    label: "反应计数",
                    description: "反应次数（0-42）"
                },
                frequentEmojis: {
                    label: "常用表情符号",
                    description: "使用常用的表情符号代替最喜欢的表情符号"
                },
                rows: {
                    label: "行数",
                    description: "要显示的快速反应行"
                },
                columns: {
                    label: "专栏",
                    description: "显示快速反应列"
                },
                compactMode: {
                    label: "紧凑模式",
                    description: "将按钮缩放至原始比例的 75%，同时将内部表情符号放大至 125%。表情符号将是原始大小的 93.75%。建议至少有 5 列"
                },
                scroll: {
                    label: "滚动",
                    description: "启用滚动表情符号列表"
                }
            }
        },
        moreUserTags: {
            name: "MoreUserTags",
            description: "添加 webhook 和审核角色（所有者、管理员等）的标签",
            tag: {
                webhook: {
                    name: "Webhook",
                    description: "该用户是一个网络钩子"
                },
                owner: {
                    name: "Owner",
                    description: "拥有服务器"
                },
                admin: {
                    name: "Admin",
                    description: "拥有管理员权限"
                },
                staff: {
                    name: "Staff",
                    description: "可以管理服务器、通道或角色"
                },
                mod: {
                    name: "Mod",
                    description: "可以管理消息或踢/禁止人员"
                },
                vcmod: {
                    name: "VC Mod",
                    description: "可以管理语音聊天"
                },
                chatmod: {
                    name: "Chat Mod",
                    description: "可以管理消息"
                }
            },
            modal: {
                example: "例子",
                tag: "标签",
                customTextPlaceholder: "标签上的文本（默认：{{displayName}}）",
                messages: "在消息中显示",
                memberList: "显示在会员列表和个人资料中"
            },
            option: {
                dontShowForBots: {
                    label: "不向机器人显示",
                    description: "不显示机器人的额外标签（不包括 webhooks）"
                },
                dontShowBotTag: {
                    label: "不显示机器人标签",
                    description: "只显示机器人的额外标签/隐藏 [APP] 文本"
                },
                showWebhookTagFully: {
                    label: "完整显示 webhook 标签",
                    description: "在关注的频道（例如公告）中显示 Webhook 标签"
                },
                tagSettings: {
                    label: "标签设置",
                    description: "充满我"
                }
            }
        },
        morse: {
            name: "Morse",
            description: "用于转换为摩尔斯电码或从摩尔斯电码转换为斜线的命令。",
            command: {
                morse: {
                    description: "翻译到摩尔斯电码或从摩尔斯电码翻译",
                    message: "要转换的文本"
                }
            }
        },
        moyai: {
            name: "Moyai",
            description: "🗿🗿🗿🗿🗿🗿🗿🗿",
            option: {
                volume: {
                    label: "体积",
                    description: "🗿🗿🗿的音量"
                },
                quality: {
                    label: "质量",
                    description: "🗿🗿🗿的品质",
                    normal: "普通的",
                    hd: "高清"
                },
                triggerWhenUnfocused: {
                    label: "失焦时触发",
                    description: "即使窗口未聚焦也触发 🗿"
                },
                ignoreBots: {
                    label: "忽略机器人",
                    description: "忽略来自机器人的消息"
                },
                ignoreBlocked: {
                    label: "忽略被阻止的用户",
                    description: "忽略来自被阻止用户的消息"
                }
            }
        },
        musicControls: {
            name: "MusicControls",
            description: "多种服务的音乐控制和歌词",
            option: {
                spotifySectionTitle: {
                    label: "Spotify"
                },
                showSpotifyControls: {
                    label: "显示 Spotify 控件",
                    description: "显示 Spotify 的音乐控件"
                },
                showSpotifyLyrics: {
                    label: "显示 Spotify 歌词",
                    description: "显示 Spotify 的歌词"
                },
                useSpotifyUris: {
                    label: "使用 Spotify URI",
                    description: "打开 Spotify URI 而不是 Spotify URL。仅当您安装了 Spotify 时才有效，并且可能不适用于所有平台"
                },
                previousButtonRestartsTrack: {
                    label: "上一个按钮重新启动曲目",
                    description: "如果播放时间 >3 秒，则按上一个按钮重新启动当前播放的曲目"
                },
                tidalSectionTitle: {
                    label: "潮汐"
                },
                showTidalControls: {
                    label: "显示潮汐控制",
                    description: "显示 Tidal 的音乐控件"
                },
                showTidalLyrics: {
                    label: "显示潮汐歌词",
                    description: "显示潮汐的歌词"
                },
                websocketURL: {
                    label: "Websocket 地址",
                    description: "默认值为 ws://localhost:24123"
                },
                YtmSectionTitle: {
                    label: "YouTube 音乐",
                    description: "这些设置需要 {{app}}"
                },
                showYoutubeMusicControls: {
                    label: "显示 YouTube 音乐控件",
                    description: "显示 YouTube Music 的音乐控件"
                },
                YoutubeMusicApiUrl: {
                    label: "YouTube 音乐 API 网址",
                    description: "您正在使用的 YouTube Music API 服务器的网址"
                },
                hoverControls: {
                    label: "悬停控件",
                    description: "悬停时显示控件"
                },
                showMusicNoteOnNoLyrics: {
                    label: "在没有歌词的情况下显示音符",
                    description: "未找到歌词时显示音符图标"
                },
                lyricsPosition: {
                    label: "歌词位置",
                    description: "歌词面板的位置",
                    above: "以上玩家",
                    below: "以下玩家"
                },
                lyricsProvider: {
                    label: "歌词提供者",
                    description: "歌词从哪里获取",
                    spotify: "Spotify (Musixmatch)",
                    LRCLIB: "LRCLIB"
                },
                spotifyLyricsApiUrl: {
                    label: "Spotify 歌词 API 基础 URL",
                    description: "自定义实例的基础 URL（例如：http://localhost:8080）。"
                },
                translateTo: {
                    label: "翻译为",
                    description: "将歌词翻译为 - 更改此项将清除现有翻译",
                    cleared: "已清除翻译"
                },
                lyricsConversion: {
                    label: "歌词转换",
                    description: "自动翻译或罗马化歌词",
                    none: "没有任何",
                    translate: "翻译",
                    romanize: "罗马化"
                },
                fallbackProvider: {
                    label: "后备提供者",
                    description: "当歌词提供程序失败时，尝试其他提供程序"
                },
                showFailedToasts: {
                    label: "显示失败的 Toast",
                    description: "歌词加载失败时显示祝酒词"
                },
                purgeLyricsCache: {
                    label: "清除歌词缓存",
                    description: "清除所有缓存的歌词和翻译",
                    button: "清除缓存",
                    cacheLyricsPurged: "歌词缓存已清除"
                },
                lyricDelay: {
                    label: "歌词延迟"
                }
            },
            context: {
                spotify: {
                    label: "Spotify 歌词菜单",
                    type: "Spotify {{type}} 菜单",
                    copy: "复制 {{type}} 姓名",
                    link: "复制 {{type}} 链接",
                    open: "在 Spotify 中打开 {{type}}",
                    album: "Spotify 专辑菜单"
                },
                tidal: {
                    label: "潮汐歌词菜单",
                    lyrics: "潮汐",
                    type: "潮汐 {{name}} 菜单",
                    copy: "复制 {{name}} 姓名",
                    open: "在潮汐中打开 {{name}}",
                    album: "潮汐专辑菜单"
                },
                ytm: {
                    type: "YouTube 音乐 {{name}} 菜单",
                    copy: "复制 {{name}} 姓名",
                    open: "在 YouTube Music 中打开 {{name}}",
                    album: "YouTube 音乐专辑菜单",
                    muted: "静音"
                },
                lyrics: {
                    provider: "歌词提供者",
                    saved: "已保存",
                    notFound: "找不到同步歌词"
                },
                copy: {
                    currentLyrics: "复制当前歌词"
                }
            },
            alert: {
                lyricCopied: "歌词已复制到剪贴板！",
                noLyrics: "没有歌词",
                noLyricsTo: "{{translated}} 没有歌词",
                translate: "翻译",
                romanize: "罗马化",
                lyricsFetchFailed: "歌词获取失败",
                failedToFetchLyrics: "无法获取 {{translated}}",
                translation: "翻译",
                romanization: "罗马化",
                failedToFetchTranslation: "无法获取 {{translated}} 歌词"
            },
            modal: {
                install: {
                    title: "如何安装",
                    install: "从这里安装 {{link}}，然后进入 TidalLuna 设置 → 插件商店 → 安装 @vmohammad/api",
                    tidaluna: "潮汐月神"
                },
                player: {
                    noPlaying: "没有曲目播放",
                    artist: "艺术家：",
                    album: "专辑：",
                    noLyrics: "没有可用的歌词:(",
                    progress: "进步",
                    totalDuration: "总持续时间"
                },
                type: {
                    song: "歌曲",
                    artist: "艺术家",
                    album: "专辑"
                },
                album: {
                    open: "打开相册",
                    viewCover: "查看专辑封面",
                    volume: "体积",
                    image: "专辑图片"
                }
            },
            provider: {
                lrclib: "LRCLIB",
                spotify: "Spotify",
                translated: "已翻译",
                romanized: "罗马化",
                none: "没有任何"
            },
            error: {
                failed: "无法渲染模态:(",
                checkConsole: "检查控制台是否有错误",
                invalidUrlCustomApi: "自定义 API 服务器 URL 的 URL 格式无效"
            },
            text: {
                unknownArtist: "未知艺术家",
                unknownTitle: "未知标题"
            }
        },
        mutualGroupDMs: {
            name: "MutualGroupDMs",
            description: "在个人资料中显示相互的群组 DM",
            no: "无相互群组",
            mutualGroup: "{{count}} 互助组{{s}}",
            members: "会员",
            noGroup: "没有共同的群组 DM",
            header: "相互团体"
        },
        neverPausePreviews: {
            name: "NeverPausePreviews",
            description: "即使客户端失去焦点，也可以防止通话/画中画预览（屏幕共享、流等）暂停",
            about: "该插件会导致 Discord 使用比平时更多的资源"
        },
        newGuildSettings: {
            name: "NewGuildSettings",
            description: "加入后自动静音新服务器并更改各种其他设置",
            context: {
                apply: "将 NewGuildSettings 应用于文件夹"
            },
            option: {
                guild: {
                    label: "静音公会",
                    description: "自动静音公会"
                },
                messages: {
                    label: "服务器通知设置",
                    description: "服务器通知设置",
                    all: "所有消息",
                    mentions: "仅@提及",
                    nothing: "没有什么",
                    default: "服务器默认"
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
                    description: "自动抑制高光"
                },
                events: {
                    label: "静音新事件",
                    description: "自动静音新事件"
                },
                showAllChannels: {
                    label: "显示所有频道",
                    description: "自动显示所有频道"
                },
                mobilePush: {
                    label: "静音移动推送通知",
                    description: "自动静音移动推送通知"
                },
                voiceChannels: {
                    label: "语音频道",
                    description: "自动隐藏语音频道中的姓名"
                }
            }
        },
        newPluginsManager: {
            name: "NewPluginsManager",
            description: "当新插件添加到 Plexcord 时通知您的实用程序",
            modal: {
                title: "新插件和设置",
                description: "自您上次访问以来已添加新的插件和设置。请查看下面的新增内容。",
                tooltip: "取消本次会议",
                dontShowAgain: "不要再显示这个",
                restartRequired: "需要重新启动才能应用更改",
                restart: "重新启动",
                continue: "继续",
                supportUs: "Plexcord 是开源软件。如果你喜欢使用它，请考虑支持我们：",
                supportUsLink: "点此"
            }
        },
        noAppsAllowed: {
            name: "NoAppsAllowed",
            description: "将机器人的标签恢复为其原始形式"
        },
        noBlockedMessages: {
            name: "NoBlockedMessages",
            description: "完全隐藏聊天中所有被阻止/忽略的消息",
            option: {
                alsoHideIgnoredUsers: {
                    label: "还隐藏被忽略的用户",
                    description: "还可以隐藏被忽略的用户的消息。"
                },
                disableNotifications: {
                    label: "禁用通知",
                    description: "隐藏被阻止用户的新消息通知。如果下面启用了“默认隐藏用户”并且触发通知的用户未在“覆盖用户”中排除，则始终为 true。"
                },
                allowAutoModMessages: {
                    label: "允许 AutoMod 消息",
                    description: "允许 AutoMod 发送的消息绕过过滤。"
                },
                hideBlockedUserReplies: {
                    label: "隐藏被阻止的用户回复",
                    description: "如果您参与了线程，则隐藏来自线程中被阻止用户的消息。"
                },
                defaultHideUsers: {
                    label: "默认隐藏用户",
                    description: "如果启用，来自被阻止用户的消息将被完全隐藏，并且来自覆盖列表中用户 ID 的任何消息将被折叠（默认 Discord 行为）。如果禁用，来自被阻止用户的消息将被折叠，并且来自覆盖列表中用户 ID 的任何消息将被完全隐藏。"
                },
                overrideUsers: {
                    label: "覆盖用户",
                    description: "将隐藏或折叠的以逗号分隔的用户 ID 列表，而不是上面选择的默认行为。"
                }
            }
        },
        noBulletPoints: {
            name: "NoBulletPoints",
            description: "阻止你输入 Markdown 要点（臭）"
        },
        noDeepLinks: {
            name: "DisableDeepLinks",
            description: "禁用 Discord 的冗余深度链接功能，该功能试图强制您使用其桌面应用程序"
        },
        noDeleteSafety: {
            name: "NoDeleteSafety",
            description: "删除删除服务器时删除“输入服务器名称”要求",
            option: {
                confirmModal: {
                    label: "确认模态",
                    description: "是否应该显示“您确定要删除”模式吗？"
                }
            },
            modal: {
                title: "删除服务器？",
                body: "如果这不是很明显的话，它是永久性的。",
                confirm: "删除",
                cancel: "取消"
            }
        },
        noDevtoolsWarning: {
            name: "NoDevtoolsWarning",
            description: "禁用控制台中的“HOLD UP”横幅。作为副作用，还可以防止 Discord 隐藏您的令牌，从而防止随机注销。"
        },
        noF1: {
            name: "NoF1",
            description: "禁用 F1 帮助绑定。"
        },
        noMaskedUrlPaste: {
            name: "NoMaskedUrlPaste",
            description: "在选择文本时粘贴链接不会粘贴为屏蔽 URL"
        },
        noMirroredCamera: {
            name: "NoMirroredCamera",
            description: "防止相机镜像到屏幕上"
        },
        noModalAnimation: {
            name: "NoModalAnimation",
            description: "删除打开或关闭模态时 300 毫秒长的动画"
        },
        noMosaic: {
            name: "NoMosaic",
            description: "删除不和谐图像马赛克",
            option: {
                inlineVideo: {
                    label: "内嵌视频",
                    description: "不使用轮播模式播放视频"
                }
            }
        },
        noNitroUpsell: {
            name: "NoNitroUpsell",
            description: "通过欺骗客户认为您拥有 Nitro，消除 Discord 的所有 Nitro 追加销售。"
        },
        noOnboarding: {
            name: "NoOnboarding",
            description: "绕过 Discord 的加入流程，以更快地进入服务器。"
        },
        noOnboardingDelay: {
            name: "NoOnboardingDelay",
            description: "跳过缓慢而烦人的入职延迟"
        },
        noPendingCount: {
            name: "NoPendingCount",
            description: "删除传入好友请求、消息请求和 Nitro 优惠的 ping 计数。",
            option: {
                hideFriendRequestsCount: {
                    label: "隐藏好友请求计数",
                    description: "隐藏收到的好友请求计数"
                },
                hideMessageRequestsCount: {
                    label: "隐藏消息请求计数",
                    description: "隐藏消息请求计数"
                },
                hidePremiumOffersCount: {
                    label: "隐藏高级优惠计数",
                    description: "隐藏 Nitro 优惠数"
                }
            }
        },
        noProfileThemes: {
            name: "NoProfileThemes",
            description: "完全删除除了您自己以外的所有人的 Nitro 个人资料主题。"
        },
        noPushToTalk: {
            name: "NoPushToTalk",
            description: "绕过强制执行通道中语音活动的一键通要求。"
        },
        noReplyMention: {
            name: "NoReplyMention",
            description: "默认情况下禁用回复 ping",
            option: {
                userList: {
                    label: "用户列表",
                    description: "允许或免除 ping 的用户列表（以逗号或空格分隔）"
                },
                roleList: {
                    label: "角色列表",
                    description: "允许或免除 ping 的角色列表（用逗号或空格分隔）"
                },
                shouldPingListed: {
                    label: "应 Ping 列出",
                    description: "行为",
                    dontPing: "不要 ping 列出的用户/角色",
                    onlyPing: "仅 ping 列出的用户/角色"
                },
                inverseShiftReply: {
                    label: "反移回复",
                    description: "反转 Discord 的轮班回复行为（允许轮班回复提及用户）"
                }
            }
        },
        normalizeMessageLinks: {
            name: "NormalizeMessageLinks",
            description: "从消息链接中删除 canary/ptb"
        },
        noRoleHeaders: {
            name: "NoRoleHeaders",
            description: "我们都是平等的！！删除成员列表中的角色标题。"
        },
        noRPC: {
            name: "NoRPC",
            description: "禁用 Discord 丰富的存在"
        },
        noServerEmojis: {
            name: "NoServerEmojis",
            description: "不要在自动完成菜单中显示服务器表情符号。",
            option: {
                shownEmojis: {
                    label: "显示的表情符号",
                    description: "选择要在自动完成菜单中显示的表情符号",
                    onlyUnicode: "仅限 unicode 表情符号",
                    currentServer: "当前服务器中的 Unicode 表情符号和服务器表情符号",
                    all: "Unicode 表情符号和所有服务器表情符号（Discord 默认）"
                }
            }
        },
        noSystemBadge: {
            name: "NoSystemBadge",
            description: "禁用任务栏和系统托盘未读计数标志。"
        },
        notificationTitle: {
            name: "NotificationTitle",
            description: "使桌面通知信息更丰富",
            text: {
                threadInParent: "{{parent}} 中的 {{thread}}"
            }
        },
        notificationVolume: {
            name: "NotificationVolume",
            description: "设置 Discord 通知的自定义音量",
            option: {
                notificationVolume: {
                    label: "通知音量",
                    description: "通知音量"
                }
            }
        },
        noTypingAnimation: {
            name: "NoTypingAnimation",
            description: "禁用聊天中的打字动画"
        },
        noUnblockToJump: {
            name: "NoUnblockToJump",
            description: "允许您跳转到被阻止或被忽略的用户以及可能的垃圾邮件发送者的消息，而无需取消阻止。"
        },
        onePingPerDM: {
            name: "OnePingPerDM",
            description: "如果用户在 DM 中多次发送未读消息，您将只会收到一个音频 ping。",
            option: {
                channelToAffect: {
                    label: "影响渠道",
                    description: "选择插件影响的 DM 类型",
                    both: "两个都",
                    user: "用户私信",
                    group: "群组私信"
                },
                allowMentions: {
                    label: "允许提及",
                    description: "接收@提及的音频 ping"
                },
                allowEveryone: {
                    label: "允许所有人",
                    description: "在群组 DM 中接收 @everyone 和 @here 的音频 ping"
                },
                ignoreUsers: {
                    label: "忽略用户",
                    description: "其 ping 不应受到限制的用户 ID（逗号 + 空格）"
                },
                alwaysPlaySound: {
                    label: "始终播放声音",
                    description: "即使禁用也播放消息通知声音"
                }
            }
        },
        openInApp: {
            name: "OpenInApp",
            description: "在各自的应用程序中打开链接，而不是在浏览器中打开",
            option: {
                spotify: {
                    label: "Spotify",
                    description: "在 Spotify 应用程序中打开 Spotify 链接"
                },
                steam: {
                    label: "蒸汽",
                    description: "在 Steam 应用中打开 Steam 链接"
                },
                epic: {
                    label: "史诗游戏",
                    description: "在 Epic Games 启动器中打开 Epic Games 链接"
                },
                tidal: {
                    label: "潮汐",
                    description: "在 Tidal 应用程序中打开 Tidal 链接"
                },
                itunes: {
                    label: "iTunes",
                    description: "在 iTunes 应用程序中打开 Apple Music 链接"
                },
                vrcx: {
                    label: "虚拟现实聊天室",
                    description: "在 VRCX 应用程序中打开 VRChat 链接"
                },
                telegram: {
                    label: "Telegram",
                    description: "在 Telegram 应用中打开 Telegram 链接"
                }
            },
            notification: {
                open: "在本机应用程序中打开链接"
            }
        },
        overrideForumDefaults: {
            name: "OverrideForumDefaults",
            description: "允许您覆盖默认的论坛布局/排序顺序。您仍然可以针对每个频道进行更改",
            option: {
                defaultLayout: {
                    label: "默认标签",
                    description: "使用哪种布局作为默认布局",
                    list: "列表",
                    gallery: "画廊"
                },
                defaultSortOrder: {
                    label: "默认排序顺序",
                    description: "使用哪种排序顺序作为默认值",
                    recentlyActive: "最近活跃",
                    datePosted: "发布日期"
                }
            }
        },
        partyMode: {
            name: "PartyMode",
            description: "允许您使用派对模式，因为派对永远不会结束✨",
            option: {
                superIntensePartyMode: {
                    label: "超激烈的派对模式",
                    description: "聚会强度",
                    normal: "普通的",
                    better: "更好的",
                    projectX: "X项目"
                }
            }
        },
        pauseInvitesForever: {
            name: "PauseInvitesForever",
            description: "恢复了无限期暂停邀请的选项，该选项被 Discord 多余地删除了。",
            pauseIndefinitely: "无限期暂停"
        },
        permissionFreeWill: {
            name: "PermissionFreeWill",
            description: "禁用频道权限管理的客户端限制。",
            option: {
                lockout: {
                    label: "闭锁",
                    description: "绕过权限锁定预防（“很确定你不想这样做”）"
                },
                onboarding: {
                    label: "入职",
                    description: "绕过入职要求（“进行此更改将使您的服务器不兼容[...]”）"
                }
            }
        },
        permissionsViewer: {
            name: "PermissionsViewer",
            description: "查看用户或频道拥有的权限以及服务器的角色",
            view: "查看权限",
            option: {
                permissionsSortOrder: {
                    label: "权限排序",
                    description: "用于定义哪个角色授予用户某种权限的排序方法",
                    highest: "最高角色",
                    lowest: "最低的角色"
                }
            },
            icon: {
                denied: "被拒绝",
                allowed: "允许",
                notOverwritten: "不被覆盖"
            },
            context: {
                permissions: "权限"
            },
            modal: {
                title: "权限",
                noPermissions: "无权限显示！",
                owner: "所有者",
                grantedBy: "授予人",
                serverOwner: "服务器所有者",
                ownerRole: "所有者",
                sortingBy: "按 {{method}} 排序",
                highest: "最高角色",
                lowest: "最低的角色",
                details: "角色详情"
            },
            text: {
                roleOptions: "身份组选项",
                userOptions: "用户选项",
                unknownRole: "未知身份组",
                unknownUser: "未知用户"
            }
        },
        petpet: {
            name: "PetPet",
            description: "添加 /petpet 斜线命令以从任何图像创建头戴式 GIF",
            command: {
                petpet: {
                    description: "创建宠物 GIF。您只能指定图像选项之一",
                    delay: "每帧之间的延迟。默认为 20。",
                    resolution: "GIF 的分辨率。默认为 120。如果您输入一个疯狂的数字并且它冻结了 Discord，那是您的错。",
                    image: "使用的图像附件",
                    url: "从中获取图像的 URL",
                    user: "将其头像用作图像的用户",
                    noServerPfp: "使用“用户”选项时，使用普通头像而不是特定于服务器的头像",
                    error: {
                        noImage: "没有指定图片！",
                        delayTooLow: "延迟必须至少为 20。",
                    }
                }
            },
            error: {
                uploadNotImage: "上传的不是图片",
                fetchUserFailed: "获取用户失败。检查控制台以获取更多信息。",
                fetchImageFailed: "加载 {{url}} 时发生错误。检查控制台以获取更多信息。"
            }
        },
        pictureInPicture: {
            name: "PictureInPicture",
            description: "向视频添加画中画（在“下载”按钮旁边）",
            tooltip: "切换画中画",
            option: {
                loop: {
                    label: "环形",
                    description: "是否循环画中画视频"
                }
            }
        },
        pinDMs: {
            name: "PinDMs",
            description: "允许您将私人频道固定到 DM 列表的顶部。要固定/取消固定或重新排序引脚，请右键单击 DM",
            context: {
                category: {
                    label: "固定 DM 类别菜单",
                    edit: "编辑类别",
                    up: "向上移动",
                    down: "下移",
                    delete: "删除类别",
                    unnamed: "呃哦"
                },
                pin: {
                    label: "置顶私信",
                    addCategory: "添加类别"
                },
                unPin: {
                    label: "取消固定 DM",
                    move: "移至类别"
                }
            },
            option: {
                pinOrder: {
                    label: "引脚顺序",
                    description: "固定的私信应按什么顺序显示？",
                    lastMessage: "最近的消息",
                    custom: "自定义（右键单击频道重新排序）"
                },
                canCollapseDmSection: {
                    label: "可折叠固定部分",
                    description: "允许未分类的 DM 部分可折叠"
                },
                dmSectionCollapsed: {
                    label: "DM 部分折叠",
                    description: "折叠 DM 部分"
                },
                userBasedCategoryList: {
                    label: "基于用户的类别列表",
                    description: ""
                }
            },
            modal: {
                category: {
                    pin: "引脚类别",
                    edit: "编辑类别",
                    new: "新类别",
                    name: "Name",
                    color: "颜色",
                    save: "节省",
                    create: "创造"
                },
                defaultCategoryName: "置顶分类 {{number}}"
            }
        },
        pingNotifications: {
            name: "PingNotifications",
            description: "可自定义的通知，并改进了提及格式",
            option: {
                friends: {
                    label: "朋友们",
                    description: "当好友在服务器中发送消息时通知"
                },
                mentions: {
                    label: "提及",
                    description: "当有人直接 @提及您时通知"
                },
                dms: {
                    label: "DM",
                    description: "通知直接消息 (DM)"
                },
                showInActive: {
                    label: "显示活动状态",
                    description: "即使当前活动的频道也显示通知"
                },
                ignoreMuted: {
                    label: "忽略静音",
                    description: "跳过来自静音服务器、频道或用户的通知"
                }
            },
            unknown: "未知",
            dm: "DM",
            groupDM: "小组DM",
            title: "{{username}} 在 {{channelName}} 中"
        },
        pinIcon: {
            name: "PinIcon",
            description: "向固定消息添加固定图标"
        },
        plainFolderIcon: {
            name: "PlainFolderIcon",
            description: "不显示文件夹中的小公会图标"
        },
        platformIndicators: {
            name: "PlatformIndicators",
            description: "向用户添加平台指示器（桌面、移动、Web...）",
            embeddedTooltip: "嵌入式（主机或游戏）",
            vrTooltip: "虚拟现实",
            option: {
                list: {
                    label: "列表",
                    description: "在用户资料中显示指示器"
                },
                badges: {
                    label: "徽章",
                    description: "将用户个人资料中的指标显示为徽章"
                },
                messages: {
                    label: "留言",
                    description: "显示消息内的指示器"
                },
                colorMobileIndicator: {
                    label: "彩色移动指示器",
                    description: "是否使移动指示灯的颜色与用户状态的颜色相匹配。"
                },
                showBots: {
                    label: "显示机器人",
                    description: "是否在机器人上显示平台指示器"
                }
            }
        },
        platformSpoofer: {
            name: "PlatformSpoofer",
            description: "欺骗您所在的平台或设备",
            about: "我们无法保证此插件不会让你被警告或封禁。选择 Xbox/Playstation/VR 可能会使你的客户端变为过时版本。",
            platform: {
                desktop: "不和谐客户端",
                web: "不和谐网",
                ios: "不和谐 iOS",
                android: "不和谐安卓",
                xbox: "不和谐嵌入",
                playstation: "不和谐嵌入",
                vr: "虚拟现实"
            },
            option: {
                platform: {
                    label: "平台",
                    description: "要伪装成正在使用的平台。",
                    desktop: "桌面",
                    web: "网络",
                    android: "安卓",
                    ios: "iOS系统",
                    xbox: "Xbox",
                    playstation: "游戏机",
                    vr: "虚拟现实"
                }
            }
        },
        plexcordToolbox: {
            name: "PlexcordToolbox",
            description: "向 AppBar 添加一个按钮，用于容纳 Plexcord 快速操作",
            tooltip: "Plexcord 工具箱",
            context: {
                openLog: "打开通知日志",
                enableQuickCSS: "启用 QuickCSS",
                openQuickCSS: "编辑 QuickCSS",
                openSettings: "打开设置",
                manageThemes: "管理主题"
            },
            option: {
                showPluginMenu: {
                    label: "显示插件菜单",
                    description: "在 Plexcord 工具箱中显示插件菜单"
                }
            }
        },
        polishWording: {
            name: "PolishWording",
            description: "调整您的消息，使它们看起来更漂亮并且语法更好。查看设置",
            option: {
                quickDisable: {
                    label: "快速禁用",
                    description: "快速禁用。关闭消息修改而不需要客户端重新加载。"
                },
                blockedWords: {
                    label: "被阻止的单词",
                    description: "不大写的单词（逗号分隔）。"
                },
                fixApostrophes: {
                    label: "修复撇号",
                    description: "确保缩写包含撇号。"
                },
                expandContractions: {
                    label: "展开收缩",
                    description: "展开收缩"
                },
                fixCapitalization: {
                    label: "固定资本化",
                    description: "句子大写。"
                },
                fixPunctuation: {
                    label: "修复标点符号",
                    description: "修复标点符号周围的间距。"
                },
                fixPunctuationFrequency: {
                    label: "修复标点符号频率",
                    description: "百分比周期频率（这主要惹恼了一些人）。",
                }
            }
        },
        previewMessage: {
            name: "PreviewMessage",
            description: "让您在发送消息之前预览消息。",
            tooltip: "预览消息"
        },
        profileSets: {
            name: "ProfileSets",
            description: "允许保存和加载不同的资料预设。",
            toast: {
                importFailed: "导入预设失败。文件可能无效。",
            },
            option: {
                avatarSize: {
                    label: "头像尺寸",
                    description: "预设列表中的头像尺寸"
                }
            },
            modal: {
                override: "覆盖",
                merge: "合并",
                cancel: "取消",
                timestamp: "{{formattedDate}} 在 {{formattedTime}}",
                rename: "重命名",
                update: "更新",
                moveUp: "向上移动",
                moveDown: "下移",
                moveTo: "移至第 1 页",
                delete: "删除",
                importProfiles: "导入配置文件",
                importText: "您在此部分中已有 {{existingCount}} 个个人资料。您想覆盖它们还是与导入的配置文件合并？",
                heading: "保存的配置文件",
                searchProfiles: "搜索个人资料...",
                profileName: "个人资料名称",
                saving: "保存...",
                save: "保存个人资料",
                cancelSearch: "取消搜索",
                search: "搜索",
                random: "随机的",
                import: "进口",
                exportAll: "全部导出"
            },
            text: {
                selectAServer: "选择服务器",
                profileSets: "资料集",
                youAreNotIn: "你还没有加入任何服务器。",
                mainProfile: "主资料",
                serverProfiles: "服务器资料",
                openProfileSets: "打开个人资料组"
            }
        },
        questify: {
            name: "Questify",
            description: "增强特定 Quest 功能、关闭烦人的元素，或彻底移除 Quest。",
            quests: "Quest",
            context: {
                quest: {
                    label: "Quest 按钮菜单",
                    ignore: "全部标记为已忽略",
                    reset: "重置忽略列表",
                    fetch: "获取 Quest",
                    markAsIgnored: "标记为已忽略",
                    unmarkAsIgnored: "取消忽略",
                    stopAuto: "停止自动完成",
                    startAuto: "开始自动完成",
                    copyQuestID: "复制 Quest ID"
                }
            },
            button: {
                completing: "正在完成...",
                completingWithTime: "正在完成（{{time}}）",
                completingIn: "{{time}} 后完成",
                queued: "排队中（{{position}}）",
                resuming: "正在恢复...",
                completeNow: "立即完成",
                complete: "完成（{{time}}）",
                resume: "继续（{{time}}）",
                completed: "已完成"
            },
            reward: {
                orbs: "{{status}}：{{orbQuantity}} Orbs。",
                article: "{{status}}：{{itemName}}。",
                unrecognized: "{{status}}：未知奖励。"
            },
            toast: {
                autoCompleteBroken: "自动完成已失效，修复即将推出。",
                enrollmentFailed: "加入 {{questName}} Quest 失败。",
                enrollmentInNormalizequestnameQuest: "报名任务 {{normalizeQuestName_quest}} 失败{{rateLimitSuffix}}。"
            },
            notification: {
                completed: {
                    title: "Quest 已完成！",
                    body: "{{questName}} Quest 已完成。"
                },
                newQuest: {
                    title: "检测到新 Quest！",
                    body: "{{questName}} Quest 现已可用。"
                },
                newQuests: {
                    title: "检测到新 Quest！",
                    body: "{{count}} 个新 Quest 现已可用。"
                },
                newExcludedQuest: {
                    title: "检测到新的排除 Quest！",
                    body: "检测到被排除的 {{questName}} Quest。ID：{{questId}}"
                },
                newExcludedQuests: {
                    title: "检测到新的排除 Quest！",
                    body: "检测到 {{count}} 个新的排除 Quest。请在控制台查看其 Quest ID。"
                }
            },
            alert: {
                restart: {
                    title: "需要重启",
                    body: "你对 Questify 设置的更改需要重启后生效。",
                    confirm: "重启",
                    cancel: "稍后"
                },
                dangerous: {
                    title: "你确定吗？",
                    confirm: "继续",
                    cancel: "取消",
                    disableEverything: "这将完全禁用 Quest 功能。",
                    allowDangerous: "这将允许更改危险设置。"
                }
            },
            status: {
                unclaimed: "未领取",
                claimed: "已领取",
                ignored: "已忽略",
                expired: "已过期"
            },
            questTypes: {
                watchVideo: "观看视频",
                watchVideoOnMobile: "在手机上观看视频",
                achievementInActivity: "活动内成就",
                achievementInGame: "游戏内成就",
                playActivity: "玩活动",
                playOnDesktop: "在桌面端游玩",
                playOnDesktopV2: "在桌面端游玩 V2",
                streamOnDesktop: "在桌面端直播",
                playOnPlayStation: "在 PlayStation 上游玩",
                playOnXbox: "在 Xbox 上游玩"
            },
            settings: {
                questButton: {
                    title: "Quest 按钮",
                    description: "在服务器列表中显示 Quest 按钮，并可选择为未领取且未忽略的 Quest 显示指示器。",
                    behavior: "按钮行为",
                    leftClick: "左键点击操作：",
                    middleClick: "中键点击操作：",
                    rightClick: "右键点击操作：",
                    visibility: "按钮可见性：",
                    visibilityTooltip: "始终：只要启用此功能，就显示 Quest 按钮。\n\n未领取：仅在你有相关的未领取 Quest 奖励时显示。\n\n从不：隐藏 Quest 按钮。",
                    unclaimedIndicator: "未领取指示器：",
                    unclaimedIndicatorTooltip: "胶囊：在 Quest 按钮旁显示 Discord 的未读标记。\n\n徽章：显示相关未领取 Quest 奖励的数量。\n\n两者：同时显示胶囊和徽章。\n\n无：隐藏指示器。",
                    badgeColor: "徽章颜色：",
                    relevancy: "Quest 相关性",
                    includedRewardTypes: "包含的奖励类型：",
                    includedRewardTypesTooltip: "在判断按钮可见性、徽章数量和提醒行为时，仅将具有这些奖励类型的 Quest 计为未领取。",
                    includedQuestTypes: "包含的 Quest 类型：",
                    includedQuestTypesTooltip: "在判断按钮可见性、徽章数量和提醒行为时，仅将具有这些任务类型的 Quest 计为未领取。",
                    display: {
                        always: "始终",
                        unclaimed: "未领取",
                        never: "从不"
                    },
                    indicator: {
                        pill: "胶囊",
                        badge: "徽章",
                        both: "两者",
                        none: "无"
                    },
                    action: {
                        openQuests: "打开 Quest",
                        contextMenu: "右键菜单",
                        pluginSettings: "插件设置",
                        nothing: "无操作"
                    },
                    rewardTypes: {
                        orbs: "Orbs",
                        nitroCodes: "Nitro 兑换码",
                        rewardCodes: "奖励兑换码",
                        inGameItems: "游戏内物品",
                        profileCollectibles: "个人资料收藏品"
                    }
                },
                questFeatures: {
                    title: "Quest 功能",
                    description: "修改 Quest 的行为以增强或移除功能。",
                    disableFeatures: "禁用功能",
                    disableEverything: "完全禁用 Quest 功能：",
                    disableEverythingTooltip: "这将禁用所有插件增强功能，隐藏 Quest 页面和 Discord 各处的 Quest 元素，并阻止 Discord 获取 Quest 数据。由于 Orbs 作为二级货币与商店紧密相连，商店不会受到影响。",
                    disableSpecific: "禁用特定功能：",
                    disableSpecificTooltip: "赞助横幅是 Quest 页面顶部的付费 Quest 横幅。\n\n迁移提示是指如探索页面中提示 Quest 已移至私信的标识。\n\n好友列表推广是当与你共享服务器的用户正在玩有进行中 Quest 的游戏时，显示在好友列表\"正在活动\"区域的卡片。\n\n成员列表推广是当成员正在玩有进行中 Quest 的游戏时，在服务器成员列表中显示的图标。\n\n账户面板推广是显示在你的账户面板上方的付费 Quest 推广。\n\n账户面板进度是显示在你的账户面板上方的进行中或已完成 Quest 进度。\n\nQuest 与 Orbs 徽章是分别表示某人至少完成过一个 Quest 或购买了 Orbs 徽章的个人资料徽章。",
                    disableOptions: {
                        sponsoredBanner: "赞助横幅",
                        relocationNotices: "迁移提示",
                        friendsListPromo: "好友列表推广",
                        membersListPromo: "成员列表推广",
                        accountPanelPromo: "账户面板推广",
                        accountPanelProgress: "账户面板进度",
                        orbsAndQuestsBadges: "Quest 与 Orbs 徽章"
                    },
                    modifyFeatures: "修改功能",
                    warningTos: "Discord 已开始向使用修改 Quest 完成方式的脚本或插件的用户发出警告，这违反了其{{tos}}。",
                    tos: "服务条款",
                    warningEscalate: "这些警告目前似乎仅限于威胁取消 Quest 或其奖励的访问权限，但 Discord 随时可能升级处罚。",
                    warningDetection: "由于 Discord 使用多种方式追踪用户，实际上无法规避检测。如果你继续，请明白 Discord 很可能在某个时候检测到。",
                    warningRisk: "使用下方开关访问潜在危险的设置，风险自负。",
                    allowDangerous: "允许更改危险设置...",
                    disallowDangerous: "重置并禁止更改危险设置...",
                    completeVideoQuicker: "加速视频 Quest 自动完成：",
                    completeVideoQuickerTooltip: "Discord 允许在加入 Quest 后经过视频时长减去 24 秒的时间后完成视频 Quest。\n\n这意味着时长 24 秒或更短的视频 Quest，或你加入后稍后再回来完成的 Quest，可以立即完成。\n\n此设置仅适用于视频 Quest 的自动完成，并依赖下方的自动完成设置。手动完成视频 Quest 仍需等待完整时长，且与加入时间无关。",
                    mobileDesktop: "让部分仅限手机的视频 Quest 可在桌面端完成：",
                    mobileDesktopTooltip: "部分仅限手机的视频 Quest 可在桌面端加入，但仍需在手机上完成。此设置允许在桌面端完成它们。\n\n部分仅限手机的视频 Quest 只能在手机上加入。若要让此设置对其生效，你必须先在手机上加入这些 Quest，然后回到桌面端刷新 Quest。\n\n单独启用时，此设置仅适用于手动完成视频 Quest。从桌面端自动完成手机视频 Quest 依赖下方的自动完成设置，并会隐式启用此设置。",
                    simultaneous: "同时而非依次自动完成 Quest：",
                    simultaneousTooltip: "默认情况下，尝试自动完成多个 Quest 时会将它们排队并按顺序完成。\n\n此设置允许所有自动完成的 Quest 同时运行。\n\n此设置仅适用于 Quest 的自动完成，并依赖下方的自动完成设置。",
                    resumeInterrupted: "在重新加载或重启后恢复被中断的自动完成：",
                    resumeInterruptedTooltip: "此设置会自动恢复因重新加载或重启而中断的自动完成，包括重新排队那些已排队但尚未开始的 Quest。",
                    autoCompleteTypes: "自动完成特定 Quest 类型：",
                    autoCompleteTypesTooltip: "\"在手机上观看视频\" Quest 仅适用于可在桌面端加入的手机 Quest。如果某个 Quest 只能在手机上加入，你必须先在手机上加入，然后回到桌面端刷新 Quest。\n\n所有视频相关 Quest 通常会随进度报告发送调用栈。这意味着 Discord 能确切知道调用了哪些函数，从而验证进度是否由其自身函数发起。Questify 会清除此调用栈，但其缺失与存在一样容易暴露。\n\n由于 Discord 的限制，\"在桌面端游玩\"、\"在 PlayStation 上游玩\"、\"在 Xbox 上游玩\"和\"玩活动\" Quest 仅在官方桌面客户端中可用。浏览器扩展、Plextron 等第三方客户端不支持自动完成这些类型。\n\n所有游戏相关 Quest 通常会随心跳报告发送游戏指纹。这意味着 Discord 可以利用数万用户的数据判断其他用户是在运行真实游戏还是在模拟可执行文件。没有合理的方法伪造此值，因此 Questify 将其留空，但其缺失与拙劣的伪造一样容易暴露。\n\n\"活动内成就\" Quest 只能通过立即完成来自动完成。此方法随时可能被修补。\n\n自动完成 Quest 需点击 Quest 页面上相应的按钮。除非上方启用了同时完成，Quest 将按排队顺序自动完成。\n\n自动完成 Quest 是风险最高的危险设置。启用风险自负。"
                },
                questNotifications: {
                    title: "Quest 通知",
                    description: "配置 Quest 完成和检测到新 Quest 时的通知与提醒。",
                    questCompleted: "Quest 完成",
                    notifyOnComplete: "Quest 完成时显示通知：",
                    soundOnComplete: "Quest 完成时播放声音：",
                    volume: "音量：",
                    newQuests: "检测到新 Quest",
                    notifyOnNew: "检测到新 Quest 时显示通知：",
                    soundOnNew: "检测到新 Quest 时播放声音：",
                    notifyOnNewExcluded: "检测到新的排除 Quest 时显示通知：",
                    notifyOnNewExcludedTooltip: "部分 Quest 因地区或平台限制被排除在你的可用 Quest 列表之外。\n\n启用后，Questify 会获取它们的 Quest 配置，应用你设置的 Quest 和奖励类型筛选，将解析后的排除 Quest 数据输出到控制台，并为匹配的排除 Quest 单独显示通知。",
                    soundOnNewExcluded: "检测到新的排除 Quest 时播放声音：",
                    soundOnNewExcludedTooltip: "部分 Quest 因地区或平台限制被排除在你的可用 Quest 列表之外。\n\n选择声音后，Questify 会获取它们的 Quest 配置，应用你设置的 Quest 和奖励类型筛选，将解析后的排除 Quest 数据输出到控制台，并为匹配的排除 Quest 播放此声音。",
                    fetchInterval: "Quest 获取间隔：",
                    fetchIntervalTooltip: "Discord 仅在启动时和你访问 Quest 页面时获取 Quest。\n\n此间隔会在客户端保持打开时定期为你获取 Quest，使 Quest 按钮指示器和新 Quest 提醒全天保持最新。\n\n仅在启用且 Quest 按钮或 Quest 通知设置使定期获取有意义时才会运行。",
                    disabled: "已禁用",
                    preview: "试听 {{sound}}",
                    intervals: {
                        thirtyMinutes: "30 分钟",
                        fortyFiveMinutes: "45 分钟",
                        oneHour: "1 小时",
                        threeHours: "3 小时",
                        sixHours: "6 小时",
                        twelveHours: "12 小时"
                    }
                },
                questTiles: {
                    title: "Quest 卡片",
                    description: "使用可选的主题颜色突出显示 Quest，使其更醒目。",
                    behavior: "卡片行为",
                    gradientStyle: "渐变样式：",
                    gradientStyleTooltip: "强烈和默认会在图片渐变中使用所选的卡片颜色。\n\n柔和黑色保留更暗的中性渐变以增强对比。\n\n无渐变会移除图片渐变，可能使部分 Quest 图片更难辨认。",
                    assetPreload: "资源预加载：",
                    assetPreloadTooltip: "在打开 Quest 页面时加载所有资源可减少滚动时的布局偏移。\n\n在滚动时加载更接近 Discord 的默认行为，初始开销可能更小。",
                    colors: "卡片颜色",
                    enable: "启用",
                    disable: "禁用",
                    gradient: {
                        intense: "强烈重绘渐变",
                        default: "默认重绘渐变",
                        black: "柔和黑色渐变",
                        hide: "无渐变"
                    },
                    preload: {
                        onLoad: "页面加载时加载所有 Quest 资源",
                        onScroll: "页面滚动时加载 Quest 资源"
                    }
                },
                reorderQuests: {
                    title: "重新排序 Quest",
                    description: "在任务页面选择 Questify 排序时，按状态排序任务。任何排序方式都会过滤掉隐藏的状态。",
                    statusOrder: "状态顺序",
                    statusOrderTooltip: "每种状态只能出现一次。选择已在其他位置使用的状态会交换这两个位置。",
                    positions: {
                        first: "第一：",
                        second: "第二：",
                        third: "第三：",
                        fourth: "第四："
                    },
                    subsorts: "子排序",
                    unclaimedSubsort: "未领取子排序：",
                    unclaimedSubsortTooltip: "已完成但未领取的 Quest 排在未完成的未领取 Quest 之后，然后在这些分组内应用此子排序。",
                    claimedSubsort: "已领取子排序：",
                    claimedSubsortTooltip: "已领取的 Quest 可按领取时间或 Quest 添加时间排序。",
                    ignoredSubsort: "已忽略子排序：",
                    ignoredSubsortTooltip: "已忽略的 Quest 仍保持其分组位置，此子排序控制它们在组内的顺序。",
                    expiredSubsort: "已过期子排序：",
                    expiredSubsortTooltip: "已过期的 Quest 可按过期时间或 Quest 添加时间排序。",
                    subsort: {
                        addedNewest: "添加时间（最新）",
                        addedOldest: "添加时间（最早）",
                        expiringSoonest: "即将过期（最早）",
                        expiringLatest: "即将过期（最晚）",
                        expiredMostRecent: "已过期（最近）",
                        expiredLeastRecent: "已过期（最久）",
                        claimedMostRecent: "已领取（最近）",
                        claimedLeastRecent: "已领取（最久）"
                    },
                    memory: "Quest 页面记忆",
                    rememberSort: "记住所选的 Quest 页面排序：",
                    rememberSortTooltip: "禁用后，Quest 页面每次打开时都使用 Questify 排序选项。",
                    rememberFilters: "记住所选的 Quest 页面筛选：",
                    rememberFiltersTooltip: "禁用后，Quest 页面每次打开时都不带任务或奖励筛选。"
                }
            },
            option: {
                migrationVersion: {
                    label: "迁移版本",
                    description: "设置的当前迁移版本。"
                },
                questFeatures: {
                    label: "Quest 功能",
                    description: "选择要禁用的 Quest 功能。"
                },
                disableQuestsEverything: {
                    label: "全部禁用",
                    description: "禁用所有 Quest 功能。"
                },
                disableRelocationNotices: {
                    label: "禁用迁移提示",
                    description: "禁用探索页面中的 Quest 迁移提示。"
                },
                disableSponsoredBanner: {
                    label: "禁用赞助横幅",
                    description: "禁用 Quest 页面上的赞助横幅。"
                },
                disableAccountPanelPromo: {
                    label: "禁用账户面板推广",
                    description: "禁用账户面板上方的推广 Quest 弹窗。"
                },
                disableAccountPanelQuestProgress: {
                    label: "禁用账户面板进度",
                    description: "禁用账户面板上方进行中和已完成 Quest 的进度。"
                },
                disableOrbsAndQuestsBadges: {
                    label: "禁用 Quest 与 Orbs 徽章",
                    description: "禁用用户资料上的 Quest 徽章。"
                },
                disableFriendsListPromo: {
                    label: "禁用好友列表推广",
                    description: "禁用好友正在玩的游戏的 Quest 推广。"
                },
                disableMembersListPromo: {
                    label: "禁用成员列表推广",
                    description: "禁用成员列表中的正在游玩图标。"
                },
                allowChangingDangerousSettings: {
                    label: "允许危险设置",
                    description: "允许更改危险设置。"
                },
                resumeInterruptedQuests: {
                    label: "恢复中断的 Quest",
                    description: "在重新加载或重启后恢复 Quest 的自动完成。"
                },
                makeMobileVideoQuestsDesktopCompatible: {
                    label: "手机视频 Quest 兼容桌面端",
                    description: "使仅限手机的视频 Quest 与桌面端兼容。"
                },
                autoCompleteQuestsSimultaneously: {
                    label: "同时自动完成",
                    description: "同时而非依次完成 Quest。"
                },
                completeVideoQuestsQuicker: {
                    label: "更快完成视频 Quest",
                    description: "自动完成视频 Quest 时使用 Discord 的进度容差和加入后经过的时间。"
                },
                autoCompleteQuestTypes: {
                    label: "自动完成的 Quest 类型",
                    description: "在后台自动完成的 Quest 类型。"
                },
                questButton: {
                    label: "Quest 按钮",
                    description: "自定义服务器列表中的 Quest 按钮。"
                },
                questButtonDisplay: {
                    label: "Quest 按钮显示",
                    description: "服务器列表中 Quest 按钮使用的显示类型。"
                },
                questButtonIncludedTypes: {
                    label: "Quest 按钮包含类型",
                    description: "在 Quest 按钮上显示 Quest 数量时包含的奖励类型和 Quest 类型。"
                },
                questButtonIndicator: {
                    label: "Quest 按钮指示器",
                    description: "Quest 按钮上未领取指示器使用的显示类型。"
                },
                questButtonBadgeCount: {
                    label: "徽章数量",
                    description: "当前相关未领取 Quest 的数量。"
                },
                questButtonBadgeColor: {
                    label: "徽章颜色",
                    description: "服务器列表中 Quest 按钮徽章的颜色。"
                },
                questButtonLeftClickAction: {
                    label: "左键点击操作",
                    description: "左键点击 Quest 按钮时执行的操作。"
                },
                questButtonMiddleClickAction: {
                    label: "中键点击操作",
                    description: "中键点击 Quest 按钮时执行的操作。"
                },
                questButtonRightClickAction: {
                    label: "右键点击操作",
                    description: "右键点击 Quest 按钮时执行的操作。"
                },
                questNotifications: {
                    label: "Quest 通知",
                    description: "配置 Quest 完成和检测到新 Quest 时的通知。"
                },
                notifyOnQuestComplete: {
                    label: "完成时通知",
                    description: "Quest 完成时显示通知。"
                },
                notifyOnNewQuests: {
                    label: "新 Quest 通知",
                    description: "检测到新 Quest 时显示通知。"
                },
                notifyOnNewExcludedQuests: {
                    label: "新排除 Quest 通知",
                    description: "检测到新的排除 Quest 时显示通知。"
                },
                questCompletedAlertSound: {
                    label: "Quest 完成提示音",
                    description: "Quest 完成时播放的声音。"
                },
                questCompletedAlertVolume: {
                    label: "Quest 完成提示音音量",
                    description: "Quest 完成提示音的音量。"
                },
                questFetchInterval: {
                    label: "获取间隔",
                    description: "从 Discord 获取 Quest 的间隔（秒）。"
                },
                newQuestAlertSound: {
                    label: "新 Quest 提示音",
                    description: "检测到新 Quest 时播放的声音。"
                },
                newQuestAlertVolume: {
                    label: "新 Quest 提示音音量",
                    description: "新 Quest 提示音的音量。"
                },
                newExcludedQuestAlertSound: {
                    label: "新排除 Quest 提示音",
                    description: "检测到新的排除 Quest 时播放的声音。"
                },
                newExcludedQuestAlertVolume: {
                    label: "新排除 Quest 提示音音量",
                    description: "新排除 Quest 提示音的音量。"
                },
                questTiles: {
                    label: "Quest 卡片",
                    description: "自定义 Quest 页面中 Quest 卡片的外观。"
                },
                questTileUnclaimedColor: {
                    label: "未领取卡片颜色",
                    description: "未领取 Quest 卡片的颜色。"
                },
                questTileClaimedColor: {
                    label: "已领取卡片颜色",
                    description: "已领取 Quest 卡片的颜色。"
                },
                questTileIgnoredColor: {
                    label: "已忽略卡片颜色",
                    description: "已忽略 Quest 卡片的颜色。"
                },
                questTileExpiredColor: {
                    label: "已过期卡片颜色",
                    description: "已过期 Quest 卡片的颜色。"
                },
                questTileGradient: {
                    label: "卡片渐变",
                    description: "Quest 卡片中使用的渐变样式。"
                },
                questTilePreload: {
                    label: "卡片预加载",
                    description: "尝试预加载 Quest 卡片的资源。"
                },
                reorderQuests: {
                    label: "重新排序 Quest",
                    description: "按状态对 Quest 排序。"
                },
                questOrder: {
                    label: "Quest 顺序",
                    description: "Quest 状态分组的排序顺序。"
                },
                unclaimedSubsort: {
                    label: "未领取子排序",
                    description: "未领取 Quest 的子排序方式。"
                },
                claimedSubsort: {
                    label: "已领取子排序",
                    description: "已领取 Quest 的子排序方式。"
                },
                ignoredSubsort: {
                    label: "已忽略子排序",
                    description: "已忽略 Quest 的子排序方式。"
                },
                expiredSubsort: {
                    label: "已过期子排序",
                    description: "已过期 Quest 的子排序方式。"
                },
                isOnQuestsPage: {
                    label: "在 Quest 页面",
                    description: "用户当前是否在 Quest 页面。"
                },
                rememberQuestPageSort: {
                    label: "记住排序",
                    description: "记住 Quest 页面上次使用的排序。"
                },
                rememberQuestPageFilters: {
                    label: "记住筛选",
                    description: "记住 Quest 页面上次使用的筛选。"
                },
                lastQuestPageSort: {
                    label: "上次排序",
                    description: "Quest 页面上次使用的排序。"
                },
                lastQuestPageFilters: {
                    label: "上次筛选",
                    description: "Quest 页面上次使用的筛选。"
                },
                ignoredQuestIDs: {
                    label: "已忽略的 Quest ID",
                    description: "已忽略的 Quest ID 列表。"
                },
                resumeQuestIDs: {
                    label: "待恢复的 Quest ID",
                    description: "正在后台自动完成或排队等待的 Quest ID 列表。"
                },
                acknowledgedNotices: {
                    description: "用户已确认的一次性通知。",
                    label: "已确认的通知"
                },
                settingsSearch: {
                    description: "搜索 Questify 设置。",
                    label: "设置搜索"
                },
                hideNonAutoCompletableQuests: {
                    description: "隐藏没有受支持且已启用的自动完成任务的未完成任务。",
                    label: "隐藏无法自动完成的任务"
                },
                preventVideoQuestsPausing: {
                    description: "防止任务弹窗失去焦点时暂停视频。",
                    label: "防止视频任务暂停"
                },
                hiddenQuestStatuses: {
                    description: "要隐藏的任务状态分组。",
                    label: "隐藏的任务状态"
                }
            },
            text: {
                clearQuestQueue: "清空任务队列",
                hideIncompleteQuestsWith: "当此平台不支持且任务类型下拉菜单中未启用任何自动完成任务时，隐藏状态为未领取或已忽略的未完成任务。已领取、已过期和已完成的任务除外。如需隐藏它们，请使用“状态顺序隐藏”选项。",
                discordForcesYouTo: "Discord 要求客户端处于前台，视频任务才能播放视频。",
                hideNonAutoCompletable: "隐藏无法自动完成的任务：",
                preventVideoQuestsFrom: "防止视频任务在失去焦点时暂停：",
                thePunishmentAlsoConsists: "处罚还包括账号状态违规记录，每次违规持续 2 年。",
                dueToTheVarious: "由于 Discord 使用多种方式追踪用户，实际上无法规避检测。如果继续，请明白 Discord 很可能会在某个时候检测到你的使用。",
                enrollInQuest: "报名任务",
                hidden: "隐藏",
                selectingAnOccupiedPosition: "选择已占用的位置会交换两个状态。隐藏的状态会从任务列表中移除。",
                searchQuestifySettings: "搜索 Questify 设置",
                searchQuestifySettings2: "搜索 Questify 设置...",
                noMatchingSettings: "没有匹配的设置。",
                questifyNoticeAugust7th: "Questify 通知 - 2026 年 8 月 7 日",
                keepUsingDangerousQuestify: "继续使用危险的 Questify 设置",
                disableDangerousQuestifySettings: "禁用危险的 Questify 设置",
                questifyNoticeAugust26th: "Questify 通知 - 2026 年 8 月 26 日",
                areYouSure: "你确定吗？",
                thePunishmentAppearsLimited: "处罚目前似乎仅限于失去任务及其奖励的访问权限，但 Discord 随时可能加重。",
                queueAllQuests: "将所有任务加入队列",
                inProgress: "进行中",
                rateLimited: "已限速",
                preventsVideoPausing: "此设置可防止视频暂停，使完成进度正常推进。",
                appliesOnlyToVideoQuests: "此设置仅适用于手动完成视频任务。",
                knownToPunish: "众所周知，Discord 会惩罚使用脚本或插件修改任务完成情况的用户。修改任务完成情况违反了 Discord 的",
                punishmentConsists: "惩罚包括暂时或永久失去任务及其奖励的访问权限。",
                questBanSystem: "Discord 已推出任务封禁系统，如果发现你通过非官方方式完成任务，将暂时或永久限制你完成任务和领取奖励。修改任务完成情况违反了其",
                begunPunishing: "Discord 已开始惩罚使用脚本和插件修改任务完成情况的用户。修改任务完成情况违反了其",
                dueToRateLimits: "（受速率限制）"
            }
        },
        questionMarkReplacement: {
            name: "QuestionMarkReplacement",
            description: "如果消息仅包含问号，则用所选字符串替换所有问号。",
            option: {
                replace: {
                    label: "代替",
                    description: "替换为"
                }
            }
        },
        quickMention: {
            name: "QuickMention",
            description: "在消息操作栏中添加快速提及按钮",
            tooltip: "快速提及"
        },
        quickReply: {
            name: "QuickReply",
            description: "通过按键绑定回复（Ctrl+向上/向下）和编辑（Ctrl+Shift+向上/向下）消息",
            option: {
                shouldMention: {
                    label: "应该提到",
                    description: "默认 Ping 回复",
                    noReplyMentionPlugin: "关注 NoReplyMention 插件（如果启用）",
                    enabled: "启用",
                    disabled: "残疾人"
                },
                ignoreBlockedAndIgnored: {
                    label: "忽略阻止和忽略",
                    description: "导航时忽略被阻止/忽略的用户的消息"
                }
            }
        },
        quickThemeSwitcher: {
            name: "QuickThemeSwitcher",
            description: "使用键盘快捷键在主题之间快速切换。",
            about: {
                title: "绑定",
                description: "使用 Ctrl/Cmd+Shift+箭头进行导航（左/右：循环主题，向上：启用，向下：禁用）。",
                reload: "按 Ctrl/Cmd+Shift+Alt 重新加载主题列表。"
            },
            modal: {
                added: "添加了{{count}}主题{{s}}",
                removed: "删除了 {{count}} 主题 {{s}}",
                reloaded: "重新加载 {{themeCount}} 主题",
                addedLocal: "添加了{{count}}本地主题{{s}}",
                removedLocal: "删除了 {{count}} 本地主题 {{s}}",
            },
            option: {
                includeLocal: {
                    label: "包括本地",
                    description: "包括本地主题"
                },
                includeOnline: {
                    label: "包括在线",
                    description: "包括在线主题"
                },
                sortOrder: {
                    label: "排序顺序",
                    description: "排序方式",
                    asc: "A-Z",
                    desc: "Z-A",
                    recent: "最近的"
                },
                autoRefresh: {
                    label: "自动刷新",
                    description: "检测到更改时自动刷新主题列表"
                },
                showNotifications: {
                    label: "显示通知",
                    description: "添加/删除主题时显示通知"
                }
            }
        },
        quoter: {
            name: "Quoter",
            description: "增加了从消息中创建鼓舞人心的引言图像的功能",
            context: {
                quote: "引用"
            },
            modal: {
                title: "用 4k 捕捉他们",
                grayscale: "灰度",
                export: "出口",
                send: "发送",
                saveAsGIF: "另存为 GIF",
                saveDescription: "将图像保存/发送为 GIF 而不是 PNG",
                showWatermark: "显示水印",
                watermarkText: "水印文本（最多 32 个字符）"
            },
            option: {
                quoteFont: {
                    label: "报价字体",
                    description: "引用文本的字体（作者/用户名始终使用 M PLUS Rounded 1c）",
                    mPlusRounded: "M PLUS 圆形 1c",
                    openSans: "打开无字体",
                    momoSignature: "莫莫签名",
                    lora: "劳拉",
                    merriWeather: "梅里韦瑟"
                },
                watermark: {
                    label: "水印",
                    description: "自定义水印文本（最多 32 个字符）"
                },
                grayscale: {
                    label: "灰度",
                    description: "默认启用灰度"
                },
                showWatermark: {
                    label: "显示水印",
                    description: "默认显示水印"
                },
                saveAsGif: {
                    label: "另存为 GIF",
                    description: "默认另存为 GIF"
                }
            },
            text: {
                quotePreview: "引用预览"
            }
        },
        randomVoice: {
            name: "RandomVoice",
            description: "在静音按钮附近添加一个按钮以加入随机语音通话。",
            tooltip: "随机语音",
            context: {
                label: "语音状态修改器",
                amountLabel: "用户数量",
                spacesLabel: "剩余空间",
                voiceLabel: "语音限制",
                selfLabel: "自我设定",
                select: {
                    servers: "选择服务器",
                    list: "选择列表",
                    filters: "选择过滤器",
                    amount: "用户数量",
                    userAmount: "{{amount}} 用户{{s}}",
                    parameters: "参数",
                    selectAll: "全选",
                    reset: "重置",
                    stateFilters: "状态过滤器",
                    moreThan: "多于",
                    lessThan: "少于",
                    equalTo: "等于",
                    spaces: "剩余空间",
                    voice: "语音限制"
                },
                filter: {
                    muted: "静音",
                    deafened: "聋了",
                    camera: "相机",
                    stream: "溪流",
                    includeFilters: "包括过滤器",
                    avoidFilters: "避免过滤器"
                },
                reset: {
                    list: "重置列表"
                },
                voice: {
                    label: "语音选项",
                    joinSettings: "加入设置",
                    auto: {
                        mute: "自动静音",
                        deafen: "自动隔音",
                        camera: "自动相机",
                        stream: "自动串流",
                        leaveWhenEmpty: "空时离开",
                        navigate: "自动导航",
                        stage: "回避阶段",
                        afk: "避免AFK"
                    }
                },
                invalid: {
                    server: "服务器无效"
                }
            },
            keybind: {
                label: "快捷键",
                recording: "录制中...",
                reset: "重置"
            },
            option: {
                keybindEnabled: {
                    label: "启用快捷键",
                    description: "显示随机语音快捷键设置"
                },
                userAmountOperation: {
                    label: "用户数量操作",
                    description: "根据用户数量选择操作"
                },
                userAmount: {
                    label: "用户数量",
                    description: "选择用户数量"
                },
                spacesLeftOperation: {
                    label: "剩余空间操作",
                    description: "选择最大用户数的操作"
                },
                spacesLeft: {
                    label: "剩余空间",
                    description: "选择最大用户数"
                },
                vcLimitOperation: {
                    label: "语音通道限制操作",
                    description: "选择语音通道的操作。"
                },
                vcLimit: {
                    label: "语音通道限制",
                    description: "选择语音通道限制"
                },
                servers: {
                    label: "服务器",
                    description: "包含的服务器"
                },
                autoNavigate: {
                    label: "自动导航",
                    description: "自动导航至语音频道。"
                },
                autoCamera: {
                    label: "自动相机",
                    description: "自动打开相机"
                },
                autoStream: {
                    label: "自动串流",
                    description: "自动开启流"
                },
                selfMute: {
                    label: "自动静音",
                    description: "加入语音频道时自动将麦克风静音。"
                },
                selfDeafen: {
                    label: "自动隔音",
                    description: "加入语音频道时自动将您的音频震耳欲聋。"
                },
                leaveEmpty: {
                    label: "空时离开",
                    description: "当语音聊天为空时查找随机呼叫。"
                },
                prioritizeFriends: {
                    label: "好友优先",
                    description: "尽可能优先选择有好友在内的频道。"
                },
                avoidStages: {
                    label: "回避阶段",
                    description: "避免加入舞台语音通道。"
                },
                avoidAfk: {
                    label: "避免AFK",
                    description: "避免加入 AFK 语音频道。"
                },
                video: {
                    label: "视频",
                    description: "搜索打开视频的用户"
                },
                stream: {
                    label: "溪流",
                    description: "搜索正在直播的用户"
                },
                mute: {
                    label: "沉默的",
                    description: "搜索静音的用户"
                },
                deafen: {
                    label: "聋哑人",
                    description: "搜索失聪的用户"
                },
                includeStates: {
                    label: "包括过滤器",
                    description: "包含状态的选项"
                },
                avoidStates: {
                    label: "避免过滤器",
                    description: "避免状态的选项"
                }
            },
            alert: {
                failed: "找不到语音频道！"
            },
            toast: {
                failedToFindA: "未找到语音频道。",
                voiceChannelIsUnavailable: "语音频道不可用。"
            },
            text: {
                userCount: "{{count}} 位用户",
                usersCount: "{{count}} 位用户"
            }
        },
        reactErrorDecoder: {
            name: "ReactErrorDecoder",
            description: "将 React 错误代码解码为人类可读的消息。"
        },
        readAllNotificationsButton: {
            name: "ReadAllNotificationsButton",
            description: "单击按钮即可阅读所有服务器通知！",
            button: "阅读全部"
        },
        recentDMSwitcher: {
            name: "RecentDMSwitcher",
            description: "Ctrl+Tab 在最近使用的 DM 之间（Ctrl+Shift+Tab 反向）",
            option: {
                visualStyle: {
                    label: "视觉风格",
                    description: "骑行时的视觉指示器风格",
                    overlay: "叠加（Alt+Tab 样式）",
                    toast: "Toast（状态消息）",
                    off: "离开"
                },
                overlayMode: {
                    label: "叠加模式",
                    description: "叠加内容",
                    row: "最近的行",
                    current: "仅当前",
                },
                amountOfUsers: {
                    label: "用户数量",
                    description: "在叠加层中显示的用户数量"
                },
                overlayRowLength: {
                    label: "覆盖行长度",
                    description: "行中显示的最近 DM 的数量"
                },
                overlayShowAvatars: {
                    label: "叠加显示头像",
                    description: "在叠加层中显示用户头像"
                },
                toastDurationMs: {
                    label: "吐司持续时间（毫秒）",
                    description: "状态消息的持续时间"
                },
                clearRdms: {
                    label: "清除 RDMS 列表",
                    description: "测试实用程序：清除 RDM 列表",
                    toast: "已清除 RDMS 历史",
                    button: "清除 RDM 历史记录"
                }
            },
            modal: {
                unknown: "未知",
                dm: "DM",
                group: "小组DM",
                channel: "渠道",
                switchingTo: "切换到：{{name}}"
            }
        },
        relationshipNotifier: {
            name: "RelationshipNotifier",
            description: "当朋友、群聊或服务器删除您时通知您。",
            option: {
                notices: {
                    label: "通知",
                    description: "删除时还会在屏幕顶部显示一条通知（如果您不想错过任何通知，请使用此通知）。"
                },
                offlineRemovals: {
                    label: "离线删除",
                    description: "如果您在离线状态下被删除，则在启动 Discord 时通知您。"
                },
                friends: {
                    label: "朋友们",
                    description: "当朋友删除您时通知"
                },
                friendRequestCancels: {
                    label: "好友请求取消",
                    description: "当好友请求被取消时通知"
                },
                servers: {
                    label: "服务器",
                    description: "从服务器删除时发出通知"
                },
                groups: {
                    label: "团体",
                    description: "从群聊中删除时发出通知"
                }
            },
            notification: {
                removedFriend: "{{user}} 将您删除为好友。",
                cancelledFriendRequest: "来自 {{user}} 的好友请求已被删除。",
                removedFromServer: "您已从服务器 {{server}} 中删除。",
                removedFromGroup: "您已从群组 {{group}} 中删除。",
                noLongerGroup: "您不再属于 {{group}} 组。",
                noLongerServer: "您不再位于服务器 {{server}} 中。",
                noLongerFriend: "您不再是 {{user}} 的朋友。",
                friendRequestRevoked: "来自 {{user}} 的好友请求已被撤销。",
                ok: "好的"
            },
            text: {
                relationshipNotifier: "关系通知"
            }
        },
        remix: {
            name: "Remix",
            description: "在文件上传按钮的右键菜单中添加“重新混合”选项。此选项在简单的图像编辑器中打开图像，并允许您将编辑后的图像直接发送到聊天中。",
            label: "混音",
            button: {
                send: "发送",
                close: "关闭",
                brush: "刷子",
                erase: "擦除",
                crop: "庄稼",
                shape: "形状",
                reset: "重置",
                clear: "清除"
            },
            editor: {
                choose: "选择图像",
                browse: "浏览",
                rectangle: "长方形",
                ellipse: "椭圆",
                line: "线",
                arrow: "箭",
                fill: "充满",
                image: "图片"
            }
        },
        repeatMessages: {
            name: "RepeatMessages",
            description: "允许您快速重复消息。如果按住 Shift 键的同时单击“重复”选项，它将回复该消息。",
            button: "重复（单击）/重复并回复（Shift + 单击）",
            context: {
                repeat: "重复",
                repeatAndReply: "重复并回复"
            }
        },
        replaceGoogleSearch: {
            name: "ReplaceGoogleSearch",
            description: "用不同的引擎替换 Google 搜索。",
            option: {
                customEngineName: {
                    label: "自定义引擎名称",
                    description: "自定义搜索引擎的名称"
                },
                customEngineURL: {
                    label: "自定义引擎 URL",
                    description: "您的引擎的 URL"
                },
                replacementEngine: {
                    label: "更换发动机",
                    description: "替换为特定的搜索引擎而不是添加菜单",
                    off: "离开",
                    custom: "定制引擎",
                }
            },
            context: {
                label: "搜索文本",
                searchWith: "使用 {{name}} 搜索"
            },
            text: {
                google: "Google"
            }
        },
        replyPingControl: {
            name: "ReplyPingControl",
            description: "控制在消息回复时是始终还是从不接收提醒（ping），包含白名单和黑名单功能",
            option: {
                replyPingBlacklist: {
                    label: "回复提醒黑名单",
                    description: "以逗号分隔的用户 ID 列表，将从不接收来自这些用户的回复提醒"
                },
                alwaysPingOnReply: {
                    label: "始终 Ping 回复",
                    description: "当有人回复您的消息时，总是会收到通知"
                },
                replyPingWhitelist: {
                    label: "回复 Ping 白名单",
                    description: "以逗号分隔的用户 ID 列表，始终接收来自的回复 ping"
                }
            }
        },
        replyTimestamp: {
            name: "ReplyTimestamp",
            description: "在回复消息预览上显示时间戳"
        },
        revealAllSpoilers: {
            name: "RevealAllSpoilers",
            description: "通过按住 Ctrl 键单击剧透，或在聊天中按住 Ctrl+Shift 键单击，可显示消息中的所有剧透"
        },
        reverseImageSearch: {
            name: "ReverseImageSearch",
            description: "将 ImageSearch 添加到图像上下文菜单",
            context: {
                label: "搜索图片",
                all: "搜索全部"
            },
            text: {
                all: "全部"
            }
        },
        reviewDB: {
            name: "ReviewDB",
            description: "查看其他用户（向个人资料添加新部分）",
            notification: {
                newReview: "您的个人资料上有新评论！",
                auth: {
                    error: "授权时发生错误",
                    successfully: "登录成功！",
                    failed: "授权失败",
                    review: "请授权添加评论。",
                    opening: "正在打开授权窗口...",
                    need: "您需要授权才能评论用户！"
                },
                error: {
                    fast: "您发送请求的速度太快。等待几秒钟，然后重试。",
                    fetching: "获取评论时发生错误。",
                    action: {
                        failed: "{{action}} 用户失败",
                        success: "成功 {{action}}ed 用户"
                    }
                }
            },
            modal: {
                delete: {
                    title: "你确定吗？",
                    description: "您真的要删除此评论吗？",
                    confirm: "删除",
                    cancel: "没关系",
                    error: "您必须登录才能删除评论。",
                },
                report: {
                    title: "你确定吗？",
                    description: "您真的要举报此评论吗？",
                    confirm: "报告",
                    cancel: "没关系",
                    error: "您必须登录才能报告评论。",
                },
                block: {
                    title: "你确定吗？",
                    description: "您真的要阻止该用户吗？您将不会再看到他们的评论。",
                    confirm: "堵塞",
                    cancel: "没关系",
                    error: "您必须登录才能阻止用户。",
                },
                blocked: {
                    title: "被阻止的用户",
                    auth: "您还没有登录 ReviewDB！",
                    noBlocked: "没有用户被阻止。",
                    fetch: "获取被阻止的用户时发生错误。"
                },
                reviews: {
                    title: "的评论",
                    noUser: "似乎还没有人评论过该用户。你可能是第一个！",
                    noServer: "看起来还没有人评论过这个服务器。你可能是第一个！"
                }
            },
            button: {
                appeal: "上诉",
                ok: "好的",
                more: "阅读更多",
                reply: "回复@{{user}}",
                update: "更新@{{user}} 的评论",
                review: "评论@{{user}}"
            },
            context: {
                view: "查看评论",
                blocked: "您已屏蔽该用户",
                delete: "删除评论",
                report: "报告审查",
                block: "阻止用户",
                unblock: "解除阻止用户",
                reply: "回复评论"
            },
            option: {
                authorize: {
                    label: "授权",
                    button: "使用 ReviewDB 授权"
                },
                notifyReviews: {
                    label: "通知评论",
                    description: "启动时通知新评论"
                },
                showWarning: {
                    label: "显示警告",
                    description: "在评论列表顶部显示尊重警告"
                },
                hideTimestamps: {
                    label: "隐藏时间戳",
                    description: "隐藏评论的时间戳"
                },
                hideBlockedUsers: {
                    label: "隐藏被阻止的用户",
                    description: "隐藏被阻止用户的评论"
                },
                buttons: {
                    label: "按钮",
                    manageBlocked: "管理被阻止的用户",
                    support: "支持ReviewDB开发",
                    website: "评论数据库网站",
                    server: "ReviewDB 支持服务器"
                }
            },
            profile: {
                optedOut: "用户已选择退出",
                noReviews: "暂无评论"
            },
            toast: {
                youCannotVoteOn: "你不能给自己的评价投票。",
                networkErrorFailedTo: "网络错误：无法连接到 ReviewDB。",
                pleaseAuthorizeToVote: "请授权以对评价投票。",
                requestFailed: "ReviewDB：请求失败，状态码 {{status}}"
            },
            text: {
                ok: "确定",
                updateReviewFor: "更新对 @{{name}} 的评价",
                reviewUser: "评价 @{{name}}",
                system: "系统",
                reviewCount: "（{{count}} 条评价）"
            }
        },
        richMagnetLinks: {
            name: "RichMagnetLinks",
            description: "像消息链接一样呈现磁力链接",
            unknown: "未知的文件名"
        },
        roleColorEverywhere: {
            name: "RoleColorEverywhere",
            description: "在任何可能的地方添加顶级角色颜色",
            option: {
                chatMentions: {
                    label: "聊天提及",
                    description: "在聊天提及中显示角色颜色（包括在消息框中）"
                },
                memberList: {
                    label: "会员名单",
                    description: "在成员列表角色标题中显示角色颜色"
                },
                voiceUsers: {
                    label: "语音用户",
                    description: "显示语音聊天用户列表中的角色颜色"
                },
                reactorsList: {
                    label: "反应堆列表",
                    description: "在反应堆列表中显示角色颜色"
                },
                pollResults: {
                    label: "投票结果",
                    description: "在投票结果中显示角色颜色"
                },
                colorChatMessages: {
                    label: "彩色聊天消息",
                    description: "根据作者的角色颜色对聊天消息进行颜色设置"
                },
                messageSaturation: {
                    label: "消息饱和度",
                    description: "消息着色的强度"
                }
            }
        },
        rpcEditor: {
            name: "RPCEditor",
            description: "编辑任何 Rich Presence 的类型和内容",
            option: {
                replacedAppIds: {
                    label: "替换的应用程序 ID",
                }
            },
            modal: {
                tutorial: {
                    title: "当前正在运行的活动的 ID",
                    noRunning: "没有跑步活动",
                    available: "可用变量",
                    variableText: "在所有字段（流 URL 除外）中，您可以输入将自动替换为其原始内容的变量：",
                    more: "更多详情",
                    details: {
                        leave: "将字段留空以保持原样。",
                        set: "将字段设置为“null”以将其隐藏。",
                        reload: "您可能需要重新加载 Discord 才能应用更改。"
                    }
                },
                settings: {
                    applyEdits: "将编辑应用到应用程序",
                    addNewApp: "添加新应用程序",
                    appId: "应用程序ID",
                    invalidAppId: "无效的应用程序 ID",
                    newActivityType: "新活动类型",
                    activityTypes: {
                        playing: "演奏",
                        watching: "观看",
                        listening: "听力",
                        competing: "竞争",
                        streaming: "流媒体"
                    },
                    streamUrl: "直播 URL（必须是 YouTube 或 Twitch）",
                    invalidStreamUrl: "无效的流 URL",
                    newName: "新名称",
                    newDetails: "新细节",
                    newState: "新状态",
                    largeImage: "大图",
                    smallImage: "小图片",
                    text: "文本",
                    url: "网址",
                    firstLine: "（第一行）",
                    secondLine: "（第二行）",
                    thirdLine: "（第三行）",
                    alsoThirdLine: "（也是第三行）",
                    hideAssets: "隐藏资源（大图像和小图像）",
                    hideTimestamps: "隐藏时间戳"
                }
            },
        },
        saveFavoriteGIFs: {
            name: "SaveFavouritedGIFs",
            description: "导出收藏的 GIF URL",
            toolbox: "保存最喜欢的 GIF",
            title: "保存最喜欢的 GIF",
            command: {
                savegifs: {
                    description: "将所有喜爱的 GIF URL 保存到文本文件"
                },
                saveworkinggifs: {
                    description: "测试所有收藏的 GIF，只保存仍在使用的 GIF"
                }
            },
            option: {
                showToolboxButton: {
                    label: "显示工具箱按钮",
                    description: "在 Plexcord Toolbox 中显示“保存喜爱的 GIF”按钮（需要重新加载）"
                }
            },
            toast: {
                save: "已成功将 GIF 保存为 {{filename}}",
                failed: "保存 GIF 失败",
                no: "未找到收藏的 GIF！",
                testing: "测试 {{count}} GIF，这可能需要一些时间......",
                noneWorking: "您保存的 GIF 似乎都不起作用。",
                saved: "过滤了 {{broken}} 可能损坏的 GIF。已保存 {{saved}} 工作 GIF。"
            }
        },
        scheduledMessages: {
            name: "ScheduledMessages",
            description: "安排消息在特定时间或延迟后发送。",
            toolbox: {
                toggle: "查看预定消息"
            },
            option: {
                maxMessagesPerMinute: {
                    label: "每分钟最大消息数",
                    description: "每个通道可以在同一分钟内触发的最大预定消息数。"
                },
                checkIntervalSeconds: {
                    label: "检查间隔（秒）",
                    description: "插件检查要发送的消息的频率。"
                },
                showNotifications: {
                    label: "显示通知",
                    description: "发送消息时显示 toast 通知。"
                },
                showPhantomMessages: {
                    label: "显示虚拟消息",
                    description: "在聊天中将预定消息显示为虚拟消息。"
                }
            },
            channelType: {
                unknown: "未知",
                dm: "DM",
                groupDm: "小组DM",
                channel: "渠道"
            },
            toast: {
                messageSent: "预定消息发送至 {{channel}}",
                messageFailed: "发送预定消息失败",
                maxMessagesReached: "已达到每个通道每分钟最多 {{max}} 条消息",
                messageScheduled: "已安排留言！",
                messageRemoved: "预定消息已删除",
                allCleared: "所有预定消息已清除",
                scheduledMessageSentTo: "已向 {{name}} 发送定时消息"
            },
            button: {
                tooltipOn: "计划模式开启（单击以禁用，右键单击查看列表）",
                tooltipOff: "计划模式关闭（单击启用，右键单击查看列表）"
            },
            accessory: {
                scheduledFor: "预定于 {date}{timeLeft}",
                remaining: {
                    days: "剩余 {{days}}d {{hours}}h",
                    hours: "剩余 {{hours}}h {{minutes}}m",
                    minutes: "剩余 {{minutes}}m"
                }
            },
            scheduleModal: {
                title: "日程留言",
                schedulingFor: "安排时间：{{channel}}",
                scheduleType: "时间表类型",
                delay: "延迟",
                specificTime: "具体时间",
                delayMinutes: "延误（分钟）",
                dateTime: "日期和时间",
                error: {
                    invalidDelay: "请输入有效的延迟时间（至少 1 分钟）",
                    invalidDateTime: "请选择未来的日期和时间"
                },
                schedule: "日程",
                cancel: "取消"
            },
            viewModal: {
                title: "预定消息",
                clearAll: "全部清除",
                noMessages: "没有预定消息",
                delete: "删除",
                close: "关闭"
            }
        },
        searchFix: {
            name: "SearchFix",
            description: "修复了恼人的“我们掉落了放大镜！”错误。",
            notPerfect: "此修复并不完美，因此您可能需要重新加载搜索栏才能修复问题。",
            paragraph1: "Discord 只允许最大偏移量 5000（这就是导致放大镜错误的原因）。",
            paragraph2: "这意味着您只能精确地看到过去的 5000 条消息和未来的 5000 条消息（按旧排序时）。",
            paragraph3: "这个插件只是跳转到相反的排序方法来尝试绕过Discord的限制，",
            paragraph4: "但如果搜索结果很大，而您尝试查看两种排序方法都无法获取的消息，",
            paragraph5: "该插件将仅显示偏移量 0（最新或最旧的消息，具体取决于排序方法）。"
        },
        secretRingToneEnabler: {
            name: "SecretRingToneEnabler",
            description: "始终播放秘密版本的 Discord 铃声（特殊铃声活动期间除外）",
            option: {
                onlySnow: {
                    label: "仅在雪铃声活动期间",
                    description: "只播放雪光晕主题"
                }
            }
        },
        sendTimestamps: {
            name: "SendTimestamps",
            description: "通过聊天框按钮和文本快捷方式轻松发送时间戳。阅读扩展说明！",
            sample: {
                paragraph1: "要快速发送仅时间时间戳，请在消息中包含格式为“HH:MM”的时间戳（包括反引号！）",
                paragraph2: "请参阅下面的示例。\n如果您需要更具体的信息，请使用聊天栏中的“日期”按钮！",
                examples: "示例："
            },
            modal: {
                title: "时间戳选择器",
                light: "光",
                dark: "黑暗的",
                format: "时间戳格式",
                preview: "预览",
                insert: "插入",
                insertTimestamp: "插入时间戳"
            },
            option: {
                replaceMessageContents: {
                    label: "替换消息内容",
                    description: "替换消息内容中的时间戳"
                }
            }
        },
        serverInfo: {
            name: "ServerInfo",
            description: "允许您查看有关服务器的信息",
            context: {
                serverInfo: "服务器信息"
            },
            option: {
                sorting: {
                    label: "排序",
                    description: "用户名或显示名称（如果适用）",
                    username: "用户名",
                    displayname: "显示名称",
                    none: "不排序"
                }
            },
            modal: {
                tab: {
                    serverInfo: "服务器信息",
                    friends: "朋友们",
                    mutualUsers: "共同用户",
                    blockedUsers: "被阻止的用户",
                    ignoredUsers: "被忽略的用户"
                },
                owner: "服务器所有者",
                loading: "加载中...",
                createdAt: "创建于",
                joinedAt: "加入时间",
                vanityLink: "虚荣链接",
                preferredLocale: "首选区域设置",
                verification: {
                    level: "验证级别",
                    none: "没有任何",
                    low: "低的",
                    medium: "中等的",
                    high: "高的",
                    highest: "最高"
                },
                serverBoosts: "服务器提升",
                channels: "渠道",
                roles: "角色",
                boostLevel: "{{count}}（等级 {{level}}）"
            }
        },
        serverListIndicators: {
            name: "ServerListIndicators",
            description: "在服务器列表中添加在线好友数或服务器数",
            friends: "朋友们",
            servers: "服务器",
            option: {
                mode: {
                    label: "模式",
                    description: "在服务器列表中显示的模式",
                    friend: "仅在线好友计数",
                    server: "仅服务器计数",
                    both: "服务器和在线好友都算数"
                },
                useCompact: {
                    label: "使用紧凑模式",
                    description: "使指示器仅显示文本"
                }
            }
        },
        serverSearch: {
            name: "ServerSearch",
            description: "使用快速搜索按钮更好地浏览您的服务器",
            tooltip: "搜索"
        },
        shikiCodeblocks: {
            name: "ShikiCodeblocks",
            description: "将 VS Code 风格的代码块引入 Discord，由 Shiki 提供支持",
            option: {
                theme: {
                    label: "主题",
                    description: "默认主题"
                },
                customTheme: {
                    label: "自定义主题",
                    description: "自定义 VS Code 主题的链接",
                    mustURL: "必须是有效的 URL",
                    mustJSON: "必须是 JSON 文件"
                },
                tryHljs: {
                    label: "回退到 Hljs",
                    description: "使用更轻量级的默认 Discord 荧光笔和主题。",
                    never: "绝不",
                    secondary: "更喜欢 Shiki 而不是 Highlight.js",
                    primary: "更喜欢Highlight.js而不是Shiki",
                    always: "总是"
                },
                useDevIcon: {
                    label: "使用 Devicon 作为语言图标",
                    description: "如何在代码块上显示语言图标",
                    disabled: "残疾人",
                    colorless: "无色",
                    colored: "有色"
                },
                bgOpacity: {
                    label: "背景不透明度",
                    description: "背景不透明度"
                },
                ignoredLanguages: {
                    label: "忽略的语言",
                    description: "交由 Discord 默认代码块处理的语言列表，以逗号分隔"
                }
            },
            button: {
                copy: "复制",
                copied: "复制了！"
            }
        },
        showAllMessageButtons: {
            name: "ShowAllMessageButtons",
            description: "无论您是否按住 Shift 键，始终显示所有消息按钮。",
            option: {
                noShiftDelete: {
                    label: "无移位删除",
                    description: "删除删除消息时按住 Shift 的要求。"
                },
                noShiftPin: {
                    label: "无换档销",
                    description: "删除了按住 Shift 来固定消息的要求。"
                },
                noQuickReacts: {
                    description: "隐藏快速反应。默认情况下，显示完整菜单会隐藏快速反应按钮。",
                    label: "无快速反应"
                }
            }
        },
        showBadgesInChat: {
            name: "ShowBadgesInChat",
            description: "在聊天中的姓名旁边显示消息作者的徽章。",
            option: {
                showPlexcordDonor: {
                    label: "显示 Plexcord 捐赠者徽章",
                    description: "启用在聊天中显示 Plexcord 捐赠者徽章。"
                },
                plexcordDonorPosition: {
                    label: "Plexcord 捐赠者徽章位置",
                    description: "Plexcord 捐赠者徽章的位置。"
                },
                showPlexcordContributor: {
                    label: "显示 Plexcord 贡献者徽章",
                    description: "启用在聊天中显示 Plexcord 贡献者徽章。"
                },
                plexcordContributorPosition: {
                    label: "Plexcord 贡献者徽章位置",
                    description: "Plexcord 贡献者徽章的位置。"
                },
                showDiscordProfile: {
                    label: "显示 Discord 个人资料徽章",
                    description: "启用在聊天中显示 Discord 个人资料徽章。"
                },
                discordProfilePosition: {
                    label: "Discord 个人资料徽章位置",
                    description: "Discord 个人资料徽章的位置。"
                },
                showDiscordNitro: {
                    label: "显示 Discord Nitro 徽章",
                    description: "启用在聊天中显示 Discord Nitro 徽章。"
                },
                discordNitroPosition: {
                    label: "Discord Nitro 徽章位置",
                    description: "Discord Nitro 徽章的位置。"
                },
                badgeSettings: {
                    label: "徽章设置",
                    description: "配置聊天中显示的其他徽章的位置。",
                    modal: "拖动徽章以重新排序；您可以单击以启用/禁用特定徽章类型。"
                }
            },
            badge: {
                plexcord: "Plexcord 捐赠者徽章",
                contributor: "Plexcord 贡献者徽章",
                discordProfile: "Discord 个人资料徽章（HypeSquad、Discord Staff、活跃开发人员等）",
                nitro: "硝基徽章",
                staff: "不和谐法杖",
                partner: "合作服务器所有者",
                events: "HypeSquad 活动",
                bravery: "HypeSquad 勇敢",
                brilliance: "HypeSquad 辉煌",
                balance: "HypeSquad 平衡",
                bugHunter: "不和谐虫子猎人",
                earlyVerifiedBotDeveloper: "早期验证的机器人开发人员",
                earlySupporter: "早期支持者",
                moderatorProgram: "主持人计划校友"
            },
            modal: {
                plexcordContributor: "Plexcord 贡献者",
                discordNitro: "不和谐硝基",
                basic: "基本的",
                classic: "经典的"
            }
        },
        showConnections: {
            name: "ShowConnections",
            description: "在用户弹出窗口中显示连接的帐户",
            option: {
                iconSize: {
                    label: "图标大小",
                    description: "图标大小（像素）"
                },
                iconSpacing: {
                    label: "图标间距",
                    description: "图标边距",
                    compact: "袖珍的",
                    cozy: "舒适",
                    roomy: "宽敞"
                },
                showGithubOrgs: {
                    description: "显示用户所属的 GitHub 组织",
                    label: "显示 GitHub 组织"
                },
                showOnModal: {
                    description: "在完整个人资料弹窗中显示已关联的账号",
                    label: "在弹窗中显示"
                }
            }
        },
        showHiddenChannels: {
            name: "ShowHiddenChannels",
            description: "显示您无权查看的频道。",
            tooltip: "隐藏频道",
            option: {
                channelStyle: {
                    label: "频道风格",
                    description: "用于显示隐藏通道的样式。",
                    classic: "经典的",
                    muted: "静音",
                    showUnreads: "显示未读内容",
                    mutedWithUnreads: "静音并显示未读内容"
                },
                showMode: {
                    label: "显示模式",
                    description: "用于显示隐藏通道的模式。",
                    lock: "普通风格，带有锁定图标",
                    hidden: "静音风格，右侧隐藏眼睛图标",
                    lockIconRight: "右侧的锁定图标"
                },
                defaultAllowedUsersAndRolesDropdownState: {
                    label: "默认允许的用户和角色下拉状态",
                    description: "默认情况下是否应打开隐藏频道上允许的用户和角色下拉列表"
                }
            },
            channelType: {
                text: "文本",
                announcement: "公告",
                forum: "论坛",
                voice: "嗓音",
                stage: "阶段"
            },
            sortOrder: {
                latestActivity: "最新活动",
                creationDate: "创建日期"
            },
            forumLayout: {
                default: "未设置",
                list: "列表视图",
                grid: "画廊视图"
            },
            videoQuality: {
                auto: "自动的",
                full: "720p"
            },
            modal: {
                hidden: "隐",
                locked: "锁定",
                threads: "线程",
                posts: "帖子",
                messages: "消息",
                post: "邮政",
                message: "信息",
                unknown: "未知",
                permissionDetails: "权限详情",
                thisIsA: "这是一个 {{status}} {{channelType}} 频道",
                canNotSee: "您看不到该频道的 {{type}}。",
                guidelines: "但是，您可能会看到其指南：",
                lastCreated: "最后创建的 {{type}}:",
                lastPin: "最后一条消息图钉：",
                threadSlowmode: "默认线程慢模式：",
                slowmode: "慢速模式：",
                bitrate: "比特率：",
                region: "地区：",
                automatic: "自动的",
                videoQuality: "视频质量模式：",
                inactiveArchiveDuration: "归档前的默认不活动持续时间 {{type}}",
                defaultLayout: "默认布局：",
                defaultSort: "默认排序顺序：",
                defaultReaction: "默认反应表情符号：",
                requireTag: "此论坛上的帖子需要设置标签。",
                availableTags: "可用标签：",
                allowedUsersAndRoles: "允许的用户和角色：",
                hideAllowedUsersAndRoles: "隐藏允许的用户和角色",
                viewAllowedUsersAndRoles: "查看允许的用户和角色"
            }
        },
        showHiddenThings: {
            name: "ShowHiddenThings",
            description: "显示各种隐藏的和仅限主持人的内容，无论权限如何。",
            option: {
                showTimeouts: {
                    label: "在聊天中显示成员超时",
                    description: "在聊天中显示成员超时图标。"
                },
                showInvitesPaused: {
                    label: "显示邀请已暂停",
                    description: "在服务器列表中显示邀请已暂停的工具提示。"
                },
                showModView: {
                    label: "显示模组视图",
                    description: "在所有服务器中显示成员 mod 视图上下文菜单项。"
                }
            }
        },
        showMessageEmbeds: {
            name: "ShowMessageEmbeds",
            description: "添加一个上下文菜单选项以显示没有嵌入的链接",
            context: {
                embed: {
                    show: "显示嵌入",
                    hide: "删除嵌入"
                }
            },
            error: {
                failed: "嵌入失败",
                noEmbed: "未找到嵌入内容"
            }
        },
        showMeYourName: {
            name: "ShowMeYourName",
            description: "在聊天中显示自定义昵称、好友昵称、服务器昵称、显示名称和用户名的任意排列。",
            option: {
                messages: {
                    label: "留言",
                    description: "在消息中显示自定义名称格式。"
                },
                replies: {
                    label: "回复",
                    description: "在回复中显示自定义名称格式。"
                },
                mentions: {
                    label: "提及",
                    description: "在提及中显示自定义名称格式。"
                },
                typingIndicator: {
                    label: "打字指示器",
                    description: "在键入指示器中显示以自定义名称格式列出的第一个可用名称。"
                },
                memberList: {
                    label: "会员名单",
                    description: "在成员列表、私信列表、好友列表和“当前活跃”中显示自定义名称格式中第一个可用的名称。"
                },
                profilePopout: {
                    label: "个人资料弹出窗口",
                    description: "在个人资料弹出窗口中显示以自定义名称格式列出的第一个可用名称。"
                },
                voiceChannels: {
                    label: "语音频道",
                    description: "在语音通道中显示以自定义名称格式列出的第一个可用名称。"
                },
                reactions: {
                    label: "反应",
                    description: "在反应工具提示中显示以自定义名称格式列出的第一个可用名称，并在反应弹出窗口中显示全名。"
                },
                discriminators: {
                    label: "鉴别器",
                    description: "将鉴别符附加到机器人的用户名中。鉴别器已不再用于用户，但仍用于机器人。默认情况下，机器人的用户名相当于用户的全局名称，因此多个机器人可以具有相同的用户名。附加鉴别器使它们再次变得独一无二。"
                },
                hideDefaultAtSign: {
                    label: "隐藏标志处的默认值",
                    description: "隐藏提及和回复中姓名前的默认“@”符号。仅当任一功能启用时才适用。"
                },
                truncateAllNamesWithStreamerMode: {
                    label: "使用 Streamer 模式截断所有名称",
                    description: "在流媒体模式下截断所有名称，而不仅仅是用户名。"
                },
                removeDuplicates: {
                    label: "删除重复项",
                    description: "如果任何名称相同，请将其删除，只保留唯一的名称。"
                },
                ignoreFonts: {
                    label: "忽略字体",
                    description: "对于第二个、第三个和第四个名称，请使用 gg sans，无论用户的自定义字体如何。"
                },
                ignoreGradients: {
                    label: "忽略渐变",
                    description: "对于非主要名称，如果角色有渐变并且下面的颜色设置为“角色+-#”，则使用主要颜色而不是整个渐变，如果它具有 Nitro 效果，则完全忽略它。"
                },
                animateGradients: {
                    label: "动画渐变",
                    description: "对于第二个、第三个和第四个名称，如果角色有渐变，请为其设置动画。这可以通过“忽略渐变”和减少运动来禁用。"
                },
                nameSeparator: {
                    label: "名称分隔符",
                    description: "名称之间使用的分隔符。默认为单个空格。"
                },
                friendNameOnlyInDirectMessages: {
                    label: "仅在私信中显示好友姓名",
                    description: "仅在 DM 中显示好友姓名，在服务器中不显示。"
                },
                customNameOnlyInDirectMessages: {
                    label: "仅在私信中自定义名称",
                    description: "仅在 DM 中显示自定义名称，而不是在服务器中显示自定义名称。"
                },
                alwaysShowEffects: {
                    label: "始终动画效果",
                    description: "始终显示效果，就像将鼠标悬停在上方一样。"
                },
                includedNames: {
                    label: "包含的名称",
                    description: "显示用户名、显示名称、昵称和好友名称的顺序。使用以下占位符：{user}、{display}、{nick}、{friend}。您可以提供多个名称选项，以便在某个选项不可用时用作备用名称，方法是用逗号分隔它们，例如：{friend, nick, display}。每个名称最多可以有三个前缀和三个后缀。"
                },
                customNameColor: {
                    label: "自定义名称颜色",
                    description: "用于分配给用户的自定义名称的颜色（如果不是第一次显示）。接受任何有效的 CSS 输入。使用“角色”来遵循用户的顶级角色颜色、Nitro 效果颜色或 IRCColors 颜色（如果启用）。使用“Role+-#”按该百分比调整亮度（例如“Role+15”）"
                },
                friendNameColor: {
                    label: "朋友姓名颜色",
                    description: "如果朋友的昵称不是第一次显示，则使用该颜色。接受任何有效的 CSS 输入。使用“角色”来遵循用户的顶级角色颜色、Nitro 效果颜色或 IRCColors 颜色（如果启用）。使用“Role+-#”按该百分比调整亮度（例如“Role+15”）"
                },
                nicknameColor: {
                    label: "昵称颜色",
                    description: "如果昵称不是第一次显示，则用于昵称的颜色。接受任何有效的 CSS 输入。使用“角色”来遵循用户的顶级角色颜色、Nitro 效果颜色或 IRCColors 颜色（如果启用）。使用“Role+-#”按该百分比调整亮度（例如“Role+15”）"
                },
                displayNameColor: {
                    label: "显示名称 颜色",
                    description: "如果不是第一次显示，则用于显示名称的颜色。接受任何有效的 CSS 输入。使用“角色”来遵循用户的顶级角色颜色、Nitro 效果颜色或 IRCColors 颜色（如果启用）。使用“Role+-#”按该百分比调整亮度（例如“Role+15”）"
                },
                usernameColor: {
                    label: "用户名颜色",
                    description: "如果用户名不是第一次显示，则用于用户名的颜色。接受任何有效的 CSS 输入。使用“角色”来遵循用户的顶级角色颜色、Nitro 效果颜色或 IRCColors 颜色（如果启用）。使用“Role+-#”按该百分比调整亮度（例如“Role+15”）"
                },
                triggerNameRerender: {
                    label: "触发器名称重新渲染",
                    description: "通过切换此设置来触发名称重新呈现。"
                },
                searchAutocomplete: {
                    description: "在提及和搜索自动补全中显示自定义名称格式中第一个可用的名称。",
                    label: "搜索自动补全"
                },
                styleDirectMessagesList: {
                    description: "无需悬停即可在未选中条目上显示显示名称效果。禁用时，选中和悬停的条目仍会应用样式。",
                    label: "美化私信列表"
                },
                styleDirectMessagesMessages: {
                    description: "无需悬停即可在消息作者上显示显示名称效果。禁用时，悬停的名称仍会应用样式。",
                    label: "美化私信消息"
                },
                styleFriendsList: {
                    description: "无需悬停即可显示显示名称效果。禁用时，悬停的条目仍会应用样式。",
                    label: "美化好友列表"
                },
                styleActiveNow: {
                    description: "无需悬停即可显示显示名称效果。禁用时，悬停的条目仍会应用样式。",
                    label: "美化“当前活跃”"
                },
                ignoreEffects: {
                    description: "对于非主名称，仅使用主身份组颜色并省略显示名称效果。",
                    label: "忽略效果"
                },
                animateEffects: {
                    description: "为非主名称的身份组渐变和显示名称效果添加动画。会被“忽略效果”和减少动态效果禁用。",
                    label: "动画效果"
                },
                alwaysAnimateEffects: {
                    description: "当显示名称效果本就可见时，即使未悬停也强制播放动画。",
                    label: "始终动画效果"
                },
                gradientGlow: {
                    description: "为动画用户渐变添加发光效果，与服务器身份组渐变的发光方式相同。",
                    label: "渐变发光"
                }
            },
            modal: {
                change: {
                    title: "更改 SMYN 昵称"
                },
                add: {
                    title: "添加 SMYN 昵称"
                },
                setCustom: "为此用户设置自定义 SMYN 昵称。通过在 SMYN 模板设置中指定 {custom} 来使用它。",
                nickname: "SMYN 昵称",
                reset: "重置 SMYN 昵称",
                cancel: "取消"
            },
            text: {
                save: "保存",
                unknown: "未知"
            }
        },
        showTimeoutDuration: {
            name: "ShowTimeoutDuration",
            description: "在超时图标工具提示中或其旁边显示用户的超时将持续多长时间",
            option: {
                displayStyle: {
                    label: "展示风格",
                    description: "如何显示超时时长",
                    tooltip: "在工具提示中",
                    inline: "超时图标旁边"
                }
            },
            text: {
                timeoutRemaining: "禁言剩余"
            }
        },
        showResourceChannels: {
            name: "ShowResourceChannels",
            description: "在频道列表中显示隐藏在服务器资源后面的频道"
        },
        showSongName: {
            name: "ShowSongName",
            description: "显示 Spotify 活动的歌曲名称而不是艺术家"
        },
        sidebarChat: {
            name: "SidebarChat",
            description: "打开另一个频道或 DM 作为侧边栏或弹出窗口",
            toolbox: {
                label: "打开上一个聊天记录"
            },
            context: {
                label: "打开侧边栏聊天"
            },
            channelTitle: {
                chat: "聊天",
                dm: "私信"
            },
            modal: {
                switch: "切换频道",
                popout: "弹出聊天窗口",
                popoutClose: "关闭弹出聊天窗口",
                popoutFor: "为 {{channel}} 弹出聊天窗口",
                close: "关闭侧边栏聊天"
            },
            option: {
                persistSidebar: {
                    label: "保留侧边栏聊天",
                    description: "在 Discord 重新启动时保持侧边栏聊天处于打开状态"
                },
                persistPopoutWindows: {
                    label: "保留弹出聊天窗口",
                    description: "Discord 重新启动后恢复已打开的弹出聊天窗口"
                },
                popoutAlwaysOnTop: {
                    label: "弹出窗口置顶",
                    description: "使弹出聊天窗口始终保持在其他窗口之上。"
                },
                patchCommunity: {
                    label: "补丁社区",
                    description: "修补社区服务器具有的频道浏览器或成员选项卡等功能。"
                },
                persistedPopoutWindowIds: {
                    description: "已保留的弹出聊天频道 ID。"
                }
            }
        },
        signature: {
            name: "Signature",
            description: "自动指纹/结束文本",
            option: {
                name: {
                    label: "姓名",
                    description: "将添加到消息末尾的签名"
                },
                textHeader: {
                    label: "文本标题",
                    description: "文本前使用什么标题"
                },
                showIcon: {
                    label: "显示图标",
                    description: "在聊天栏中显示用于切换插件的图标"
                },
                contextMenu: {
                    label: "上下文菜单",
                    description: "添加选项以切换聊天输入上下文菜单中的功能"
                },
                isEnabled: {
                    label: "已启用",
                    description: "切换功能"
                }
            },
            tooltip: {
                enable: "启用签名",
                disable: "禁用签名"
            },
            context: {
                enable: "启用签名"
            },
            command: {
                signature: {
                    name: "Signature",
                    description: "切换您的签名",
                    toogle: "切换您的签名（默认为切换）",
                    enabled: "启用签名",
                    disabled: "签名已禁用"
                }
            }
        },
        silentMessageToggle: {
            name: "SilentMessageToggle",
            description: "在聊天栏中添加一个按钮以切换发送无声消息。",
            option: {
                persistState: {
                    label: "持久状态",
                    description: "如何保持静默消息切换状态",
                    none: "不要坚持（频道更改时重置）",
                    channels: "在通道之间保持",
                    restarts: "在通道之间保持并重新启动"
                },
                autoDisable: {
                    label: "自动禁用",
                    description: "发送一条消息后自动再次禁用静默消息切换"
                }
            },
            tooltip: {
                enable: "启用静默消息",
                disable: "禁用静默消息"
            }
        },
        silentTyping: {
            name: "SilentTyping",
            description: "在聊天中隐藏您的打字指示器。",
            command: {
                silentTyping: {
                    name: "SilentTyping",
                    description: "在聊天中隐藏您的打字指示器。",
                    toggle: {
                        name: "toggle",
                        description: "全局切换频道或公会的功能。",
                        global: "全球的",
                        channel: "渠道",
                        guild: "公会"
                    },
                    chatBarIndicator: {
                        name: "chatBarIndicator",
                        description: "从聊天栏上方隐藏其他用户的打字指示器。"
                    },
                    membersListIndicator: {
                        name: "membersListIndicator",
                        description: "从成员列表中隐藏其他用户的键入指示器。"
                    },
                    chatIcon: {
                        name: "chatIcon",
                        description: "在聊天栏中显示一个图标，以便随时随地切换插件。"
                    },
                    chatContextMenu: {
                        name: "chatContextMenu",
                        description: "在聊天上下文菜单中显示下拉菜单，以便随时切换插件设置。"
                    },
                    defaultHidden: {
                        name: "defaultHidden",
                        description: "默认情况下是否隐藏 DM/频道/公会中的输入。"
                    }
                }
            },
            content: {
                updated: "更新了无声打字设置。",
                noChanges: "未对静默打字设置进行任何更改。"
            },
            tooltip: {
                hidden: "隐藏键入 ({{location}})",
                visible: "键入可见 ({{location}})",
                global: "键入可见（全局）",
                voiceChannel: "在已连接语音频道的聊天中始终显示正在输入",
                temporary: "由于最近发送了消息，此频道中暂时显示正在输入"
            },
            option: {
                enabledGlobally: {
                    label: "全球启用",
                    description: "全局切换您自己的打字指示器的功能。"
                },
                hideChatBoxTypingIndicators: {
                    label: "隐藏聊天框键入指示器",
                    description: "从聊天栏上方隐藏其他用户的打字指示器。"
                },
                hideMembersListTypingIndicators: {
                    label: "隐藏成员列表键入指示器",
                    description: "从成员列表中隐藏其他用户的键入指示器。"
                },
                chatIcon: {
                    label: "聊天图标",
                    description: "在聊天栏中显示一个图标，以便随时修改插件。"
                },
                chatIconLeftClickAction: {
                    label: "聊天图标左键单击操作",
                    description: "左键单击聊天图标时要执行的操作。",
                    global: "切换全局输入",
                    channel: "Toggle 频道输入",
                    guild: "Toggle 公会打字",
                    settings: "打开插件设置"
                },
                chatIconMiddleClickAction: {
                    label: "聊天图标中键单击操作",
                    description: "中键单击聊天图标时要执行的操作。",
                    global: "切换全局输入",
                    channel: "Toggle 频道输入",
                    guild: "Toggle 公会打字",
                    settings: "打开插件设置"
                },
                chatIconRightClickAction: {
                    label: "聊天图标右键单击操作",
                    description: "右键单击聊天图标时该怎么做。",
                    global: "切换全局输入",
                    channel: "Toggle 频道输入",
                    guild: "Toggle 公会打字",
                    settings: "打开插件设置"
                },
                chatContextMenu: {
                    label: "聊天上下文菜单",
                    description: "在聊天上下文菜单中显示下拉菜单，以便随时修改插件设置。"
                },
                defaultHidden: {
                    label: "默认隐藏",
                    description: "如果启用，该插件将向下面“禁用位置”中未列出的任何 DM/频道/公会中的其他人隐藏您的输入内容。如果禁用，该插件将向其他未在下面的“启用位置”中列出的 DM/频道/公会显示您的输入内容。"
                },
                alwaysEnableInActiveVoiceChat: {
                    label: "在活跃语音聊天中始终启用",
                    description: "在你已连接的语音频道中输入时，始终允许显示你的正在输入指示器。"
                },
                temporaryEnableThresholdServers: {
                    label: "临时启用时长（服务器）",
                    description: "在服务器频道发送消息后，在此秒数内临时允许显示你的正在输入指示器。如果该频道中指示器已可见，此设置无效。"
                },
                temporaryEnableThresholdDirectMessages: {
                    label: "临时启用时长（私信）",
                    description: "在私信或群组私信中发送消息后，在此秒数内临时允许显示你的正在输入指示器。如果该频道中指示器已可见，此设置无效。"
                },
                enabledLocations: {
                    label: "启用的位置",
                    description: "启用这些 ID 的功能。接受以逗号分隔的 DM ID、频道 ID 和行会 ID 列表。仅在禁用“默认隐藏”时使用。"
                },
                disabledLocations: {
                    label: "残疾人场所",
                    description: "禁用这些 ID 的功能。接受以逗号分隔的 DM ID、频道 ID 和行会 ID 列表。仅在启用“默认隐藏”时使用。"
                }
            },
            text: {
                silentTyping: "静默输入",
                enabled: "已启用",
                chatBarIndicators: "聊天栏指示器",
                membersListIndicators: "成员列表指示器",
                guild: "服务器",
                channel: "频道",
                global: "全局"
            }
        },
        snowfall: {
            name: "Snowfall",
            description: "让Discord上下雪吧！",
            about: {
                title: "信息",
                paragraph: "这个插件在 Discord 的界面上添加了圣诞节的降雪效果。您可以在下面的设置中更改雪的类型。",
                note: "注意：虽然在大多数计算机上，此插件对性能的影响不会超过普通 Plexcord 扩展，但它可能会在低端系统上导致一些延迟。"
            },
            option: {
                typeOfSnow: {
                    label: "雪的类型",
                    description: "更改显示的雪的类型（影响性能）。",
                    solid: "坚固（最高性能）",
                    text: "文本（中等性能）",
                    emoji: "图像（最低性能）"
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
                    label: "每秒薄片数",
                    description: "每秒的雪花数量（越高=降雪密度越大）"
                }
            }
        },
        sortFriendRequests: {
            name: "SortFriendRequests",
            description: "按收到日期对好友请求进行排序",
            tooltip: "添加 — {{date}}",
            option: {
                showDates: {
                    label: "显示日期",
                    description: "显示好友请求的日期"
                }
            }
        },
        soundBoardLogger: {
            name: "SoundBoardLogger",
            description: "记录语音聊天中播放的所有音板并允许您下载它们",
            tooltip: "打开音板日志",
            option: {
                savedIds: {
                    label: "已保存的音板 ID",
                    description: "您一次想要保存的音板 ID 数量（0 可以让您保存无限）",
                    notNumber: "该值不是数字。",
                    cantDecimal: "该值不能是十进制数。",
                    cantNegative: "该值不能为负数。",
                    heading: "您一次想要保存的音板 ID 数量（0 可以让您保存无限）",
                    warning: "警告！将数字设置为较低的值将重置日志！",
                    placeholder: "输入一个数字"
                },
                fileType: {
                    label: "文件类型",
                    description: "您要保存文件的格式"
                },
                openLogs: {
                    label: "打开日志",
                    description: "显示日志",
                    button: "打开日志"
                },
                soundVolume: {
                    label: "音量",
                    description: "切换声音有多大（0 表示禁用）"
                },
                iconLocation: {
                    label: "图标位置",
                    description: "选择 SoundBoard 日志图标的显示位置（需要重新启动）",
                    toolbar: "工具栏",
                    chatInput: "聊天输入"
                }
            },
            modal: {
                title: "音板日志",
                loading: "正在加载声音...",
                noLogs: "尚未记录任何声音。加入语音聊天即可开始记录！",
                clearLogs: "清除日志",
                played: "玩过{{time}}时间{{s}}",
                last: "最后玩过：",
                also: "还玩过：",
                download: "下载",
                copyId: "复制身份证件",
                copied: "ID已复制到剪贴板！",
                playSound: "播放声音",
                moreUsers: "其他人用这个声音...",
                volume: "音板音量"
            }
        },
        splitLargeMessages: {
            name: "SplitLargeMessages",
            description: "在发送前将过长的消息拆分为符合 Discord 限制的片段。",
            option: {
                maxLength: {
                    label: "最大消息长度",
                    description: "消息分割前的最大长度。设置为 0 以自动检测。"
                },
                disableFileConversion: {
                    label: "禁用文件转换",
                    description: "如果为 true，则禁用大消息的文件转换。"
                },
                sendDelay: {
                    label: "发送延迟",
                    description: "每段之间的最小延迟（秒）。"
                },
                hardSplit: {
                    label: "硬分割",
                    description: "如果为 true，则在最后一个字符而不是最后一个空格/换行符上分割。"
                },
                splitInSlowmode: {
                    label: "在慢速模式下分割",
                    description: "当慢速模式延迟在配置的最大值内时，允许拆分。"
                },
                slowmodeMax: {
                    label: "慢速模式最大",
                    description: "拆分消息时允许的最长慢速模式时长。"
                },
                splitMode: {
                    description: "拆分消息时优先使用此边界。",
                    label: "拆分模式"
                }
            },
            toast: {
                cannotSplitThisMessage: "由于频道的慢速模式，无法拆分此消息。",
                onlySentLengthMessage: "仅发送了 {{sent}}/{{length}} 部分消息。",
                unsentCopied: "未发送的消息部分已复制到剪贴板。"
            },
            text: {
                newlines: "换行",
                spaces: "空格",
                strictCharacterLimit: "严格字符限制"
            }
        },
        spotifyCrack: {
            name: "SpotifyCrack",
            description: "免费聆听，语音聊天不会自动暂停，并允许活动在空闲时继续播放",
            option: {
                noSpotifyAutoPause: {
                    label: "没有 Spotify 自动暂停",
                    description: "禁用 Spotify 自动暂停。"
                },
                keepSpotifyActivityOnIdle: {
                    label: "让 Spotify 活动保持空闲状态",
                    description: "闲置时保持 Spotify 活动播放"
                }
            }
        },
        spotifyShareCommands: {
            name: "SpotifyShareCommands",
            description: "通过斜杠命令分享您当前的 Spotify 曲目、专辑或艺术家（/track、/album、/artist）",
            command: {
                makeCommand: {
                    description: "在聊天中分享您当前的 Spotify {{type}}",
                    track: "您没有在 Spotify 上收听任何曲目。",
                    find: "在 Spotify 上找不到该曲目。"
                }
            }
        },
        startupTimings: {
            name: "StartupTimings",
            description: "将启动时间添加到“设置”菜单",
            modal: {
                title: "启动时间",
                ended: "跟踪结束于：",
                start: "开始",
                interval: "间隔",
                delta: "三角洲",
                event: "事件",
                serverTrace: "服务器跟踪",
                loading: "加载中..."
            }
        },
        statusNotifications: {
            name: "StatusNotifications",
            description: "添加状态更改通知",
            loading: "加载中...",
            option: {
                notificationsSound: {
                    label: "通知声音",
                    description: "播放状态通知的通知声音？"
                },
                usersList: {
                    label: "用户列表",
                    description: "状态更改时通知的用户列表",
                    empty: "没有跟踪任何用户。右键单击用户并选择“状态通知”以添加它们。"
                }
            },
            context: {
                label: "状态通知",
                notifications: "通知",
                type: {
                    all: "全部",
                    online: "在线的",
                    offline: "离线",
                    none: "没有任何"
                }
            },
            notification: {
                unknownUser: "用户",
                title: "状态通知"
            },
            status: {
                online: "在线的",
                idle: "闲置的",
                dnd: "请勿打扰",
                offline: "离线",
            },
        },
        statusPresets: {
            name: "StatusPresets",
            description: "允许您记住您的状态并在以后进行设置",
            button: {
                remember: "记住状态"
            },
            context: {
                edit: "编辑自定义预设",
                set: "设置自定义状态",
                delete: "删除预设"
            },
            notification: {
                successfully: "已成功保存状态"
            }
        },
        steamStatusSync: {
            name: "SteamStatusSync",
            description: "将您的状态同步到 Steam！ （在线、离开、隐身或离线。）",
            option: {
                onlineStatus: {
                    label: "在线状态",
                    description: "在线时的 Steam 状态"
                },
                idleStatus: {
                    label: "空闲状态",
                    description: "空闲时的 Steam 状态"
                },
                dndStatus: {
                    label: "请勿打扰状态",
                    description: "请勿打扰时的 Steam 状态"
                },
                invisibleStatus: {
                    label: "隐形状态",
                    description: "隐形时的 Steam 状态"
                },
                goInvisibleIfActivityIsHidden: {
                    label: "如果活动被隐藏则变得不可见",
                    description: "当隐藏 Discord 活动时将 Steam 状态设置为不可见"
                }
            },
            status: {
                online: "在线的",
                away: "离开",
                invisible: "无形的",
                offline: "离线（断开 Steam 聊天）",
                disabled: "残疾人"
            }
        },
        stickerBlocker: {
            name: "StickerBlocker",
            description: "允许您阻止显示贴纸。",
            option: {
                showGif: {
                    label: "显示动图",
                    description: "是否显示时髦的猫 GIF。"
                },
                showMessage: {
                    label: "显示留言",
                    description: "是否显示详细说明哪个 ID 被阻止的消息"
                },
                showButton: {
                    label: "显示按钮",
                    description: "是否显示解锁GIF的按钮"
                },
                blockedStickers: {
                    label: "被阻止的贴纸",
                    description: "被阻止的贴纸 ID 列表（除非您知道自己在做什么，否则请勿编辑）"
                }
            },
            modal: {
                blocked: "被阻止的贴纸。 ID：{{id}} 姓名：{{name}}",
                unblock: "解锁 {{name}}"
            },
            context: {
                blockSticker: "块贴纸",
                unblockSticker: "解锁贴纸"
            },
            text: {
                failedToRender: "渲染失败 :("
            }
        },
        stickerPaste: {
            name: "StickerPaste",
            description: "使得在贴纸选择器中选择贴纸并将其插入聊天框中而不是立即发送"
        },
        streaks: {
            name: "Streaks",
            description: "当你与某位用户连续多天互发私信时，在其旁边显示连续天数。",
            tooltip: "连续 {{count}} 天",
            tooltipExpiring: "连续 {{count}} 天 — 今天发条消息来保持吧！",
            option: {
                account: {
                    description: "登录或退出 Streaks API。连续记录保存在 API 上，因此需要登录才能记录。",
                    login: "登录 Streaks API",
                    logout: "退出 Streaks API"
                },
                eliteColor: "精英连续颜色（100+ 天）",
                diamondColor: "钻石连续颜色（60+ 天）",
                platinumColor: "铂金连续颜色（45+ 天）",
                goldColor: "黄金连续颜色（30+ 天）",
                silverColor: "白银连续颜色（14+ 天）",
                bronzeColor: "青铜连续颜色（7+ 天）",
                defaultColor: "默认连续颜色（1+ 天）"
            },
            toast: {
                authFailed: "授权失败：{{error}}",
                failedToAuthorizeMessage: "授权失败：{{message}}",
                authorizationExpired: "Streaks 授权已过期。请在 Streaks 插件设置中重新授权。"
            }
        },
        streamerModeOnStream: {
            name: "StreamerModeOnStream",
            description: "当您在 Discord 中开始串流时自动启用串流模式"
        },
        streamingCodecDisabler: {
            name: "StreamingCodecDisabler",
            description: "为直播和摄像头禁用你选择的视频编解码器。",
            option: {
                disableAv1Codec: {
                    label: "禁用 AV1 编解码器",
                    description: "让 Discord 不在直播和摄像头中使用 AV1。"
                },
                disableH265Codec: {
                    label: "禁用 H265 编解码器",
                    description: "让 Discord 不在直播和摄像头中使用 H265。"
                },
                disableH264Codec: {
                    label: "禁用 H264 编解码器",
                    description: "让 Discord 不在直播和摄像头中使用 H264。"
                },
                disableVP8Codec: {
                    label: "禁用 VP8 编解码器",
                    description: "让 Discord 不在直播和摄像头中使用 VP8。"
                },
                disableVP9Codec: {
                    label: "禁用 VP9 编解码器",
                    description: "让 Discord 不在直播和摄像头中使用 VP9。"
                }
            }
        },
        superReactionTweaks: {
            name: "SuperReactionTweaks",
            description: "自定义超级反应同时播放的限制，默认超级反应",
            option: {
                superReactByDefault: {
                    label: "默认超级反应",
                    description: "反应选择器将默认为超级反应"
                },
                unlimitedSuperReactionPlaying: {
                    label: "无限超级反应播放",
                    description: "取消超级反应同时播放的限制"
                },
                superReactionPlayingLimit: {
                    label: "超级反应游戏限制",
                    description: "立即播放最大超级反应。设置为 0 以禁用超级反应"
                }
            }
        },
        textReplace: {
            name: "TextReplace",
            description: "替换消息中的文本。您可以在 Plexcord 服务器的 #textreplace-rules 频道中找到预先制定的规则",
            option: {
                replace: {
                    label: "代替",
                    string: "简单替换",
                    stringDescription: "简单的查找和替换规则。例如，查找 'brb' 并将其替换为 'be right back'",
                    regex: "Regex 替换",
                    regexDescription: "使用正则表达式进行更强大的替换。本部分适用于高级用户。如果你不理解，可以直接忽略",
                    myMessages: "应用于您的消息（所有人都可见）",
                    othersMessages: "应用于其他人的消息（仅对您可见）",
                    allMessages: "适用于所有消息"
                },
                stringRules: {
                    label: "字符串规则",
                    description: "使用字符串匹配替换文本的规则。"
                },
                regexRules: {
                    label: "正则表达式规则",
                    description: "使用正则表达式替换文本的规则。"
                }
            },
            modal: {
                name: "名称",
                nameDescription: "可选的名称，帮助你识别此规则。",
                search: "搜索规则...",
                noResults: "没有符合搜索条件的规则。",
                title: "测试规则",
                find: "寻找",
                findRegex: "Regex 模式",
                findText: "要替换的文本",
                replace: "替换",
                replaceDescription: "用于替换找到文本的内容",
                includes: "仅当包含",
                includesDescription: "只有当消息包含此文本时才会应用此规则。这是可选的",
                type: "输入一条消息",
                applied: "已应用规则的消息",
                delete: "删除规则",
                add: "添加规则",
                empty: "空规则",
                rule: "规则",
            },
            text: {
                optionallyOnlyApplyThis: "可选：仅当消息包含此文本时才应用此规则。",
                emptyRule: "空规则 {{number}}",
                ruleWithFind: "规则 {{number}} - {{find}}"
            }
        },
        themeAttributes: {
            name: "ThemeAttributes",
            description: "出于主题目的向各种元素添加数据属性"
        },
        timezones: {
            name: "Timezones",
            description: "在个人资料和消息标题中显示用户的当地时间",
            button: {
                wantToSave: "想要将您的时区保存到数据库中吗？单击此处进行设置。",
                yourLocalTimezone: "（您当地的时区）"
            },
            context: {
                set: "设置本地时区"
            },
            toast: {
                refresh: {
                    successfully: "时区刷新成功！",
                    failed: "时区刷新失败！",
                    failedTo: "刷新时区失败。"
                },
                update: {
                    successfully: "时区更新成功！",
                    failed: "设置时区失败。"
                },
                delete: {
                    successfully: "时区删除成功！",
                    failed: "删除时区失败。"
                },
                auth: {
                    failed: "认证失败。",
                    success: "授权成功！"
                }
            },
            toolbox: {
                set: "设置数据库时区",
                refresh: "刷新数据库时区"
            },
            option: {
                showOwnTimezone: {
                    label: "显示自己的时区",
                    description: "在个人资料和消息标题中显示您自己的时区"
                },
                twentyFourHourTime: {
                    label: "24 小时制",
                    description: "以 24 小时制显示时间"
                },
                showTimezoneInfo: {
                    label: "显示时区信息",
                    description: "在时间旁边显示时区信息"
                },
                showMessageHeaderTime: {
                    label: "显示消息标题时间",
                    description: "在邮件标题中显示时间"
                },
                showProfileTime: {
                    label: "显示个人资料时间",
                    description: "在用户个人资料中显示时间"
                },
                useDatabase: {
                    label: "使用数据库时区",
                    description: "启用数据库以获取用户时区"
                },
                preferDatabaseOverLocal: {
                    label: "优先选择数据库而非本地",
                    description: "对于时区，优先选择数据库而不是本地存储"
                },
                databaseUrl: {
                    label: "数据库网址",
                    description: "时区数据库服务器的 URL"
                },
                setDatabaseTimezone: {
                    label: "设置数据库时区",
                    description: "在数据库上设置您的时区",
                    setTimezone: "设置数据库时区"
                },
                resetDatabaseTimezone: {
                    label: "重置数据库时区",
                    description: "重置数据库上的时区",
                    failed: "重置数据库时区失败"
                },
                askedTimezone: {
                    label: "询问时区",
                    description: "是否要求用户设置时区"
                },
                recipientTimezoneInDms: {
                    label: "私信中显示对方时区",
                    description: "在私信中，在你的消息上显示对方的时区"
                },
                showLocalTimezone: {
                    label: "显示本地时区",
                    description: "显示本地时区，而不仅是“本地”"
                }
            },
            modal: {
                title: "时区",
                select: "选择时区",
                selectPlaceholder: "选择时区",
                delete: "删除时区",
                save: "节省"
            },
            text: {
                invalidResponseFormat: "无效的响应格式"
            }
        },
        toastNotifications: {
            name: "ToastNotifications",
            description: "每当您收到直接消息时，都会显示 Toast 通知。",
            notification: {
                call: "已开始与您通话！",
                recipient: {
                    add: "{{target}} 已由 {{actor}} 添加到组中。",
                    remove: "{{target}} 已被 {{actor}} 从群组中删除。",
                    left: "离开了团体。"
                },
                channel: {
                    change: {
                        name: "Changed the channel name to {{name}}.",
                        icon: "更改了频道图标。"
                    },
                    pinned: "置顶了一条消息。"
                },
                sent: {
                    embed: "发送了嵌入。",
                    sticker: "发了一张贴纸。",
                    attachment: "依恋："
                },
                redacted: "消息内容已被编辑。",
                friend: {
                    accept: "{{user}} 现在是你的朋友",
                    acceptBody: "您现在可以直接向他们发送消息。",
                    request: "{{user}} 向您发送了好友请求。",
                    requestBody: "您可以在“好友”选项卡中接受或拒绝。"
                },
                example: {
                    title: "通知示例",
                    body: "这是一个通知正文示例。"
                }
            },
            modal: {
                dismiss: "关闭通知",
                attachments: "{{attachments}} 附件{{s}} {{were}} 已发送。"
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
                    label: "暂停",
                    description: "将显示通知的时间（以秒为单位）"
                },
                opacity: {
                    label: "不透明度",
                    description: "Toast通知的不透明度"
                },
                determineServerNotifications: {
                    label: "确定服务器通知",
                    description: "根据服务器通知设置确定是否显示通知"
                },
                respectDoNotDisturb: {
                    label: "遵循请勿打扰",
                    description: "当你的状态为请勿打扰时不显示通知。"
                },
                directMessages: {
                    label: "直接消息",
                    description: "显示直接消息的通知"
                },
                groupMessages: {
                    label: "群组消息",
                    description: "显示群组消息的通知"
                },
                friendServerNotifications: {
                    label: "好友和服务器通知",
                    description: "当朋友在与您共享的服务器中发送消息时显示通知"
                },
                friendActivity: {
                    label: "好友活动",
                    description: "显示添加某人或接收好友请求的通知"
                },
                notifyFor: {
                    label: "通知对象",
                    description: "创建用于接收通知的通道 ID 列表（以逗号分隔）"
                },
                ignoreUsers: {
                    label: "忽略用户",
                    description: "创建用户 ID 列表以忽略其所有通知（以逗号分隔）"
                },
                exampleButton: {
                    label: "示例按钮",
                    description: "显示 Toast 通知示例。",
                    show: "显示通知示例"
                }
            }
        },
        toggleVideoBind: {
            name: "ToggleVideoBind",
            description: "添加可自定义的绑定来切换网络摄像头。",
            option: {
                keyBind: {
                    label: "按键绑定",
                    description: "按下该键即可切换网络摄像头。"
                },
                reqCtrl: {
                    label: "需要 Ctrl",
                    description: "要求保持控制权。"
                },
                reqShift: {
                    label: "需要轮班",
                    description: "要求举行轮班。"
                },
                reqAlt: {
                    label: "需要替代",
                    description: "要求按住 Alt。"
                }
            }
        },
        translate: {
            name: "Translate",
            description: "使用 Google Translate 或 DeepL 翻译消息",
            tooltip: {
                label: "翻译"
            },
            context: {
                translate: "翻译",
                open: "打开翻译模态",
                auto: "自动翻译已启用"
            },
            option: {
                receivedInput: {
                    label: "收到的输入",
                    description: "接收消息的语言应翻译自"
                },
                receivedOutput: {
                    label: "接收到的输出",
                    description: "收到消息的语言应翻译为"
                },
                sentInput: {
                    label: "发送输入",
                    description: "您自己的消息应翻译的语言"
                },
                sentOutput: {
                    label: "发送输出",
                    description: "您自己的消息应翻译成的语言"
                },
                service: {
                    label: "翻译服务",
                    description: "DeepL 需要 DeepL Pro 的付费 API 密钥",
                    descriptionWeb: "翻译服务（不支持网络！）",
                    google: "谷歌翻译",
                    deepl: "DeepL 免费版 - 需要 API 密钥",
                    deeplPro: "DeepL Pro - 需要 API 密钥",
                    kagi: "Kagi 翻译 - 需要 API 密钥"
                },
                kagiSession: {
                    label: "Kagi 会话",
                    description: "从 https://kagi.com/settings?p=user_details 获取您的会话令牌（Token）"
                },
                deeplApiKey: {
                    label: "DeepL API 密钥",
                    description: "DeepL API 密钥",
                    placeholder: "从 https://deepl.com/your-account 获取您的 API 密钥"
                },
                autoTranslate: {
                    label: "自动翻译",
                    description: "发送前自动翻译您的消息。您还可以按住 Shift/右键单击翻译按钮来切换此功能"
                },
                showAutoTranslateTooltip: {
                    label: "显示自动翻译工具提示",
                    description: "每当自动翻译消息时，都会在 ChatBar 按钮上显示工具提示"
                }
            },
            modal: {
                title: "翻译",
                select: "选择语言",
                auto: "自动翻译",
                dismiss: "解雇",
                translated: "翻译自 {{from}}",
                failed: {
                    to: "翻译失败 {{text}}",
                    connect: "无法连接到 DeepL API："
                },
                wrong: "出了点问题。如果此问题仍然存在，请检查控制台或在支持服务器中寻求帮助。",
                deepl: {
                    api: "DeepL API 超出配额。回到谷歌翻译。",
                    apiKey: "未设置 DeepL API 密钥。重置为谷歌",
                    auth: "DeepL API 密钥或版本无效"
                },
                autoTranslateEnabled: {
                    title: "启用 Plexcord 自动翻译",
                    body: "您刚刚启用了自动翻译！任何消息在发送之前都会自动翻译。",
                    confirm: "禁用自动翻译",
                    cancel: "知道了",
                    secondaryConfirm: "不再显示"
                }
            },
            button: {
                manageLanguages: "自定义翻译语言和自动翻译"
            }
        },
        typingIndicator: {
            name: "TypingIndicator",
            description: "如果有人在频道上打字，则添加一个指示器。",
            option: {
                includeCurrentChannel: {
                    label: "包括当前频道",
                    description: "是否显示当前所选频道的打字指示"
                },
                includeMutedChannels: {
                    label: "包括静音频道",
                    description: "是否显示静音通道的打字指示器。"
                },
                includeIgnoredUsers: {
                    label: "包括被忽略的用户",
                    description: "是否为被忽略的用户显示输入指示符。"
                },
                includeBlockedUsers: {
                    label: "包括被阻止的用户",
                    description: "是否为被阻止的用户显示打字指示器。"
                },
                indicatorMode: {
                    label: "指示灯模式",
                    description: "指标应该如何显示？",
                    both: "头像和动画点",
                    dots: "动画点",
                    avatars: "头像"
                }
            }
        },
        typingTweaks: {
            name: "TypingTweaks",
            description: "在打字指示器中显示头像和角色颜色",
            option: {
                showAvatars: {
                    label: "显示多个用户",
                    description: "在打字指示器中显示头像"
                },
                showRoleColors: {
                    label: "显示角色颜色",
                    description: "在打字指示器中显示角色颜色"
                },
                alternativeFormatting: {
                    label: "替代格式",
                    description: "当多个用户打字时显示更有用的消息"
                },
                amITyping: {
                    label: "我在打字吗",
                    description: "显示其他人是否可以看到您正在打字"
                }
            },
            others: {
                areTyping: "和 {{count}} 其他人正在输入..."
            }
        },
        unindent: {
            name: "Unindent",
            description: "修剪代码块的前导缩进"
        },
        unitConverter: {
            name: "UnitConverter",
            description: "将公制单位转换为英制单位，反之亦然",
            tooltip: "转换单位",
            option: {
                myUnits: {
                    label: "我的单位",
                    description: "您使用的单位以及想要转换成的单位。默认为英制",
                    imperial: "帝国",
                    metric: "公制"
                }
            },
            button: {
                dismiss: "解雇"
            }
        },
        unlimitedAccounts: {
            name: "UnlimitedAccounts",
            description: "增加您可以添加的帐户数量。",
            option: {
                maxAccounts: {
                    label: "最大帐户数",
                    description: "可添加的账户数量，0表示无限制"
                }
            }
        },
        unlockedAvatarZoom: {
            name: "UnlockedAvatarZoom",
            description: "允许您在更改头像时进一步放大图像裁剪工具",
            option: {
                zoomMultiplier: {
                    label: "变焦倍数",
                    description: "变焦倍数"
                }
            }
        },
        unsuppressEmbeds: {
            name: "UnsuppressEmbeds",
            description: "允许您取消抑制消息中的嵌入",
            context: {
                unsuppress: "取消抑制嵌入",
                suppress: "抑制嵌入"
            }
        },
        uselessInfo: {
            name: "UselessInfo",
            description: "在 Discord 中显示随机无用信息；快捷键和间距可调。",
            recording: "记录...",
            record: "记录",
            option: {
                delay: {
                    label: "通知间隔",
                    description: "通知显示间隔（以分钟为单位）"
                },
                historyHotkey: {
                    label: "历史面板快捷方式",
                    description: "显示先前显示事实的历史记录的热键"
                },
                randomFactHotkey: {
                    label: "随机事实快捷方式",
                    description: "打开随机事实面板的热键"
                },
                sameFact: {
                    label: "避免显示相同的项目",
                    description: "在显示所有事实之前，避免多次显示相同的事实"
                },
                lastNFacts: {
                    label: "需要避免多少近期事件",
                    description: "最近显示的事实数量，以避免重复（0 = 全部）"
                }
            },
            modal: {
                title: "无用信息",
                history: {
                    none: "还没有事实。使用快捷方式或等待。",
                    source: "来源"
                },
                showRandom: "显示随机",
                close: "关闭"
            },
            notification: {
                title: "你可知道？"
            }
        },
        userMessagesPronouns: {
            name: "UserMessagesPronouns",
            description: "在消息标题中显示用户代词",
            option: {
                pronounsFormat: {
                    label: "代词格式",
                    description: "代词在聊天中出现的格式",
                    lowercase: "小写",
                    capitalized: "大写"
                },
                showSelf: {
                    label: "展现自我",
                    description: "启用或禁用为自己显示代词"
                }
            }
        },
        userVoiceShow: {
            name: "UserVoiceShow",
            description: "当用户处于语音频道时显示指示器",
            option: {
                showInUserProfileModal: {
                    label: "在用户个人资料模式中显示",
                    description: "在用户个人资料中的姓名旁边显示用户的语音频道指示器"
                },
                showInMemberList: {
                    label: "显示在会员列表中",
                    description: "在成员和 DM 列表中显示用户的语音通道指示器"
                },
                showInMessages: {
                    label: "在消息中显示",
                    description: "在消息中显示用户的语音通道指示器"
                }
            },
            modal: {
                inVoiceChat: "语音聊天中"
            },
            notification: {
                cannotJoin: "您无法加入用户的语音频道。"
            }
        },
        uSRBG: {
            name: "USRBG",
            description: "显示来自 USRBG 的用户横幅，允许任何人在没有 Nitro 的情况下获得横幅",
            option: {
                nitroFirst: {
                    label: "硝基第一",
                    description: "如果同时存在 Nitro 和 USRBG 横幅，则使用横幅",
                    nitro: "硝基旗帜",
                    usrbg: "美国RBG旗帜"
                },
                voiceBackground: {
                    label: "语音背景",
                    description: "使用 USRBG 横幅作为语音聊天背景"
                }
            },
            button: "获得您自己的 USRBG 横幅"
        },
        validReply: {
            name: "ValidReply",
            description: "修复了将鼠标悬停在回复上时“无法加载消息”的问题"
        },
        validUser: {
            name: "ValidUser",
            description: "修复显示为“@unknown-user”的未知用户的提及（将鼠标悬停在提及上即可修复）",
            badges: {
                discordBugHunter: "不和谐虫子猎人",
                moderatorProgramsAlumni: "主持人节目校友",
                discordStaff: "不和谐法杖",
                hypeSquadEvents: "HypeSquad 活动",
                bravery: "HypeSquad 勇敢",
                brilliance: "HypeSquad 辉煌",
                balance: "HypeSquad 平衡",
                partneredServerOwner: "合作服务器所有者",
                nitro: "不和谐硝基",
                earlySupporter: "早期支持者",
                earlyVerifiedBotDeveloper: "早期验证的机器人开发人员"
            }
        },
        voiceChatDoubleClick: {
            name: "VoiceChatDoubleClick",
            description: "通过双击而不是单击加入语音聊天"
        },
        vcNarrator: {
            name: "VCNarrator",
            description: "当用户加入、离开或移动语音频道时通过讲述人进行宣布",
            option: {
                voice: {
                    label: "嗓音"
                },
                volume: {
                    label: "体积",
                    description: "旁白音量"
                },
                rate: {
                    label: "速度",
                    description: "讲述人速度"
                },
                sayOwnName: {
                    label: "说出自己的名字",
                    description: "说出自己的名字"
                },
                latinOnly: {
                    label: "仅拉丁语",
                    description: "在说出名字之前先将非拉丁字符从名字中删除"
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
                    label: "移动留言",
                    description: "移动留言"
                },
                muteMessage: {
                    label: "静音消息",
                    description: "静音消息（目前仅限自己）"
                },
                unmuteMessage: {
                    label: "取消静音消息",
                    description: "取消消息静音（目前仅限自己）"
                },
                deafenMessage: {
                    label: "震耳欲聋的消息",
                    description: "震耳欲聋的消息（目前只有自己）"
                },
                undeafenMessage: {
                    label: "震耳欲聋的消息",
                    description: "不聋的消息（目前只有自己）"
                }
            },
            modal: {
                title: "播放示例声音",
                voiceTitle: "嗓音",
                voice: "选择声音",
                languageTitle: "语言",
                language: "选择语言",
                noVoice: "找不到旁白的声音。",
                linuxNote: "安装语音调度程序或 espeak 并使用 --enable-speech-dispatcher 标志运行 Discord",
                someNarrator: "尝试在操作系统的讲述人设置中安装一些",
                dontHaveEnglish: "您没有安装任何英文语音，因此旁白可能听起来很奇怪",
                customiseMessages: "您可以自定义下面的语音消息。您可以通过将特定消息设置为空来禁用它们",
                placeholdersInfo: "特殊占位符 {{USER}}、{{DISPLAY_NAME}}、{{NICKNAME}} 和 {{CHANNEL}} 将分别替换为用户名（如果是你自己则什么都没有）、用户的显示名、用户在当前服务器上的昵称和频道名称"
            }
        },
        viewIcons: {
            name: "ViewIcons",
            description: "使用户配置文件中的头像和横幅可单击，在用户、服务器和组频道上下文菜单中添加“查看头像/横幅”条目。",
            context: {
                view: {
                    avatar: "查看头像",
                    serverAvatar: "查看服务器头像",
                    icon: "查看图标",
                    banner: "查看横幅"
                }
            },
            option: {
                format: {
                    label: "格式",
                    description: "选择用于非动画图像的图像格式。动画图像将始终使用 .gif"
                },
                imgSize: {
                    label: "图像尺寸",
                    description: "要使用的图像尺寸"
                }
            },
            text: {
                viewAvatarDecoration: "查看头像装饰"
            }
        },
        viewRaw: {
            name: "ViewRaw",
            description: "复制并查看任何消息、频道或公会的原始内容/数据",
            context: {
                copyLeft: "复制原始数据（左键单击）/查看原始数据（右键单击）",
                copyRight: "复制原始数据（右键单击）/查看原始数据（左键单击）",
                view: "查看原始数据"
            },
            option: {
                popoverButton: {
                    label: "弹出按钮",
                    description: "在消息弹出窗口中显示一个按钮以查看消息的原始内容/数据。"
                },
                clickMethod: {
                    label: "点击方式",
                    description: "更改按钮以查看任何消息的原始内容/数据。",
                    left: "左键单击可查看原始内容。",
                    right: "右键单击可查看原始内容。"
                },
                messageContextMenu: {
                    description: "在消息右键菜单中显示",
                    label: "消息右键菜单"
                },
                sortKeys: {
                    description: "按字母顺序排序原始数据的键。",
                    label: "排序键"
                },
                stripSensitiveData: {
                    description: "从原始数据中移除敏感数据，例如你的邮箱和电话号码。",
                    label: "移除敏感数据"
                }
            },
            modal: {
                title: "查看原始数据",
                content: "消息内容",
                data: "{{type}} 数据",
                copied: "{{type}} 数据已复制到剪贴板！",
                copy: "复制 {{type}} JSON",
                copiedContent: "内容已复制到剪贴板！",
                copyContent: "复制原始内容"
            },
            types: {
                message: "信息",
                channel: "渠道",
                guild: "公会",
                role: "角色",
                user: "用户"
            },
            text: {
                copyTypeData: "复制 {{type}} 数据",
                rawTypeData: "{{type}} 原始数据",
                messageData: "消息数据"
            }
        },
        voiceButtons: {
            name: "VoiceButtons",
            description: "直接从语音通话面板快速对任何用户进行私聊、静音或聋哑。",
            option: {
                showChatButton: {
                    label: "显示聊天按钮",
                    description: "是否要显示聊天按钮"
                },
                showMuteButton: {
                    label: "显示静音按钮",
                    description: "是否要显示静音按钮"
                },
                showDeafenButton: {
                    label: "显示震耳欲聋的按钮",
                    description: "是否要显示震耳欲聋的按钮"
                },
                muteSoundboard: {
                    label: "音板静音",
                    description: "单击“Deafen”按钮即可切换音板。"
                },
                disableVideo: {
                    label: "禁用视频",
                    description: "单击“Deafen”按钮即可切换视频。"
                },
                useServer: {
                    label: "使用服务器",
                    description: "当您有权限时，请使用服务器静音/失聪而不是本地静音。"
                },
                serverSelf: {
                    label: "服务器自建",
                    description: "使用静音/耳聋时，在服务器上将自己静音。"
                },
                showButtonsSelf: {
                    label: "在自身上显示按钮",
                    description: "是否要为您自己的用户显示按钮。与其他按钮的功能相同，只是它会在单击按钮时打开 DM 面板并让您自己静音/失聪。",
                    display: "展示",
                    hide: "隐藏",
                    disable: "禁用"
                },
                whichNameToShow: {
                    label: "显示哪个名字",
                    description: "选择是否在工具提示中显示昵称或用户名。",
                    global: "全球名称",
                    username: "用户名",
                    both: "两个都"
                },
                buttonPosition: {
                    label: "按钮位置",
                    description: "选择按钮的显示位置。",
                    left: "左边",
                    right: "正确的",
                }
            },
            tooltip: {
                navigate: "导航至 DM",
                open: "使用 {{username}} 打开 DM",
                yourself: "你自己",
                serverMute: "服务器静音",
                serverDeafen: "服务器聋",
                mute: "沉默的",
                deafen: "聋哑人",
                unmute: "取消静音",
                undeafen: "不聋",
                serverUnmute: "服务器取消静音",
                serverUndeafen: "服务器不聋"
            }
        },
        voiceChannelLog: {
            name: "VoiceChannelLog",
            description: "记录谁加入和离开语音频道",
            context: {
                view: "查看频道日志"
            },
            modal: {
                joined: "已加入 <#{{channel}}>",
                left: "左 <#{{channel}}>",
                movedTo: "移至 <#{{channel}}>",
                movedFrom: "移自 <#{{channel}}>",
                noLogs: "没有可显示的日志。",
                logs: "{{channel}} 日志"
            },
            option: {
                mode: {
                    label: "模式",
                    description: "如何显示语音通道日志",
                    menu: "日志菜单",
                    associated: "直接登录关联聊天",
                    both: "登录聊天和登录菜单"
                },
                voiceChannelChatSelf: {
                    label: "语音频道自我聊天",
                    description: "在语音通道中记录您自己的语音通道事件"
                },
                voiceChannelChatSilent: {
                    label: "语音频道聊天静音",
                    description: "语音频道聊天中的加入/离开/移动消息将静音"
                },
                voiceChannelChatSilentSelf: {
                    label: "语音频道聊天无声自我",
                    description: "如果您在语音频道中，则语音频道聊天中的加入/离开/移动消息将保持静音"
                },
                ignoreBlockedUsers: {
                    label: "忽略被阻止的用户",
                    description: "不记录被阻止的用户"
                }
            }
        },
        voiceChatUtilities: {
            name: "VoiceChatUtilities",
            description: "该插件允许您在整个通道上执行多个操作（移动、静音、断开连接等）（最初由 dutake 开发）",
            option: {
                waitAfter: {
                    label: "行动后等待",
                    description: "等待之前要执行的 API 操作数量（以避免速率限制）"
                },
                waitSeconds: {
                    label: "等待几秒钟",
                    description: "每个操作之间的等待时间（以秒为单位）"
                }
            },
            context: {
                voiceTools: "语音工具",
                mentionAll: "提及所有用户",
                disconnectAll: "全部断开连接",
                muteAll: "全部静音",
                unmuteAll: "全部取消静音",
                deafenAll: "全部震耳欲聋",
                undeafenAll: "全部不聋",
                moveAll: "全部移动"
            }
        },
        voiceDownload: {
            name: "VoiceDownload",
            description: "添加语音消息下载。 （打开新的浏览器选项卡）",
            context: {
                download: "下载语音留言"
            }
        },
        voiceMessages: {
            name: "VoiceMessages",
            description: "允许您像在移动设备上一样发送语音消息。为此，请右键单击上传按钮，然后单击发送语音消息。",
            option: {
                noiseSuppression: {
                    label: "噪音抑制",
                    description: "噪音抑制"
                },
                echoCancellation: {
                    label: "回声消除",
                    description: "回声消除"
                }
            },
            notification: {
                failed: {
                    upload: "上传语音留言失败。",
                    start: "无法开始录制。",
                    finish: "无法完成录制。"
                }
            },
            context: {
                sendVoiceMessage: "发送语音留言",
                missingPermissions: "（缺少权限）"
            },
            modal: {
                record: "录制语音留言",
                upload: "上传文件",
                preview: "预览",
                failed: "无法解析所选音频文件：",
                oggOpus: "语音消息必须是 OggOpus 才能在 iOS 上播放。该文件是 {{type}} 因此无法在 iOS 上播放。",
                fix: "要修复它，首先将其转换为 OggOpus，例如使用 {{link}}",
                sending: "正在发送语音消息...请耐心等待。",
                stop: "停止录音",
                start: "开始录音",
                resume: "恢复录音",
                pause: "暂停录音",
                recording: "记录",
                send: "发送",
            },
            text: {
                convertioWebConverter: "convertio 网页转换器"
            }
        },
        volumeBooster: {
            name: "VolumeBooster",
            description: "允许您将用户和流音量设置为高于默认最大值",
            option: {
                multiplier: {
                    label: "乘数",
                    description: "音量倍增器"
                }
            }
        },
        webContextMenus: {
            name: "WebContextMenus",
            description: "重新添加网页版 Discord 中缺少的上下文菜单：链接和图像（复制/打开链接/图像）、文本区域（复制、剪切、粘贴、拼写检查）",
            option: {
                addBack: {
                    label: "添加回来",
                    description: "重新添加图像、链接和聊天输入栏的 Discord 上下文菜单"
                }
            }
        },
        webKeybinds: {
            name: "WebKeybinds",
            description: "重新添加 Discord 网页版缺失的快捷键。仅在 Plextron/Legcord 中完全可用，在浏览器中不可用",
            option: {
                showNavigationButtons: {
                    description: "在标题栏显示后退/前进导航按钮。",
                    label: "显示导航按钮"
                },
                overrideCommonKeybinds: {
                    description: "允许 Discord 覆盖最常用的标签页导航快捷键（ctrl+t、ctrl+shift+t、ctrl+tab、ctrl+shift+tab、ctrl+n）。仅在少数允许网站快捷键优先的浏览器中有效。",
                    label: "覆盖常用快捷键"
                }
            }
        },
        webScreenShareFixes: {
            name: "WebScreenShareFixes",
            description: "取消了 Chromium 和 Plextron 客户端上 2500kbps 的比特率上限。",
            option: {
                experimentalAV1Support: {
                    label: "实验性 AV1 支持",
                    description: "启用 AV1 编解码器支持。可能会导致无限加载流等问题"
                }
            }
        },
        whoReacted: {
            name: "WhoReacted",
            description: "呈现对消息做出反应的用户的头像",
            option: {
                avatarClick: {
                    label: "头像点击",
                    description: "切换点击反应中的头像"
                },
                clickableAvatars: {
                    description: "启用后，点击做出反应的用户头像将打开其个人资料，而不是添加该反应",
                    label: "可点击头像"
                }
            }
        },
        whosWatching: {
            name: "WhosWatching",
            description: "将鼠标悬停在屏幕共享图标上可查看哪些用户正在观看您的直播",
            modal: {
                noSpectator: "没有观众"
            },
            option: {
                showPanel: {
                    label: "显示面板",
                    description: "在屏幕共享面板下显示观众"
                }
            }
        },
        writeUpperCase: {
            name: "WriteUpperCase",
            description: "将消息输入中每个句子的第一个字母更改为大写",
            option: {
                blockedWords: {
                    label: "被阻止的单词",
                    description: "字符串不要大写（用逗号分隔）"
                }
            }
        },
        xSOverlay: {
            name: "XSOverlay",
            description: "将 Discord 通知转发至 XSOverlay，以便在 VR 中轻松查看",
            notification: {
                call: {
                    title: "{{user}} 正在给您打电话。",
                    content: "来电"
                },
                message: {
                    reply: "（回复）",
                    embed: "[嵌入]",
                    onlyEmbed: "已发送消息嵌入",
                    sticker: "[贴纸]",
                    onlySticker: "已发送贴纸",
                    image: "图像",
                    attachment: "依恋"
                },
                test: {
                    title: "Plexcord 您好！",
                    content: "这是测试通知！ *爆炸*",
                    button: "发送测试通知"
                }
            },
            option: {
                webSocketPort: {
                    label: "WebSocket 端口",
                    description: "WebSocket 端口"
                },
                preferUDP: {
                    label: "首选UDP",
                    description: "如果您使用旧版本的 XSOverlay 无法通过 WebSockets 连接，请启用。此设置在网络上被忽略。"
                },
                botNotifications: {
                    label: "机器人通知",
                    description: "允许机器人通知"
                },
                serverNotifications: {
                    label: "服务器通知",
                    description: "允许服务器通知"
                },
                dmNotifications: {
                    label: "DM 通知",
                    description: "允许私信通知"
                },
                groupDmNotifications: {
                    label: "群组 DM 通知",
                    description: "允许群组 DM 通知"
                },
                callNotifications: {
                    label: "来电通知",
                    description: "允许来电通知"
                },
                pingColor: {
                    label: "平颜色",
                    description: "用户提及颜色"
                },
                channelPingColor: {
                    label: "通道 Ping 颜色",
                    description: "频道提及颜色"
                },
                soundPath: {
                    label: "声音路径",
                    description: "通知声音（默认/警告/错误）"
                },
                timeout: {
                    label: "暂停",
                    description: "通知持续时间（秒）"
                },
                lengthBasedTimeout: {
                    label: "基于长度的超时",
                    description: "通过消息长度延长持续时间"
                },
                opacity: {
                    label: "不透明度",
                    description: "通知不透明度"
                },
                volume: {
                    label: "体积",
                    description: "体积"
                }
            }
        },
        youtubeAdblock: {
            name: "YouTubeAdblock",
            description: "通过 AdGuard 屏蔽 YouTube 嵌入广告和 Watch Together 活动"
        },
        youtubeDescription: {
            name: "YouTubeDescription",
            description: "为 YouTube 视频嵌入添加说明"
        },
        addAttachments: {
            name: "AddAttachments",
            description: "允许在编辑消息时添加新附件",
            toast: {
                youCannotAddMore: "你无法向此消息添加更多附件。",
                youCanOnlyAdd: "此消息最多还能添加 {{count}} 个附件。",
                uploadingThisCanTake: "正在上传，这可能需要一段时间...",
                addedOne: "已成功添加附件！",
                addedMany: "已成功添加附件！"
            },
            text: {
                addAttachments: "添加附件"
            }
        },
        advancedPermissions: {
            option: {
                simplifiedCard: {
                    description: "如何处理 Discord 的简化权限卡片",
                    label: "简化卡片",
                    hide: "隐藏",
                    collapse: "设为可折叠",
                    show: "保持可见"
                },
                collapsedByDefault: {
                    description: "默认折叠简化权限。",
                    label: "默认折叠"
                }
            },
            name: "AdvancedPermissions",
            description: "默认显示高级权限卡片。",
            text: {
                simplifiedPermissions: "简化权限"
            }
        },
        autoJumpToMessage: {
            option: {
                onlyWhenUnfocused: {
                    description: "仅在 Discord 窗口未聚焦时自动跳转到消息。",
                    label: "仅在未聚焦时"
                }
            },
            name: "AutoJumpToMessage",
            description: "自动打开新消息所在的频道。"
        },
        betterForwards: {
            text: {
                serverIconForName: "{{name}} 的服务器图标",
                messageAttachments: "消息附件",
                messageTextWillNot: "禁用此选项时不会转发消息文本",
                forwardEverything: "转发全部",
                viewServer: "查看服务器",
                embed: "嵌入",
                embedNumber: "嵌入 {{number}}",
                image: "图片",
                video: "视频",
                serverIcon: "{{name}} 的服务器图标",
                dmIcon: "{{name}} 的私信图标",
                groupDmIcon: "{{name}} 的群组私信图标"
            },
            option: {
                resendOnFail: {
                    description: "转发失败时会尝试重新发送转发的消息。可能导致意外的提及或刷屏。会绕过 NSFW 限制。",
                    label: "失败时重新发送"
                },
                forwardPreface: {
                    description: "转发消息的前缀内容",
                    label: "转发前缀"
                },
                dontFollowForwards: {
                    description: "转发单条消息后不跳转到该消息。按住 Shift 可忽略此行为。",
                    label: "不跟随转发"
                },
                selfForward: {
                    description: "在转发列表弹窗中显示当前频道。",
                    label: "转发给自己"
                }
            },
            name: "BetterForwards",
            description: "消息转发工具，包括绕过 NSFW 和界面改进。"
        },
        betterImageEditor: {
            text: {
                search: "搜索",
                searchSavedPictures: "搜索已保存的图片",
                clearTheSearch: "清除搜索",
                savedPictures: "已保存的图片",
                removeName: "移除 {{name}}",
                removeHoldShiftTo: "移除。按住 Shift 可跳过确认",
                originals: "原图",
                putBackTheLast: "放回最后一张",
                forgetEveryRememberedCrop: "忘记所有记住的裁剪？",
                yourPicturesStayEach: "你的图片会保留。从现在起，每张图片都将以未取景状态打开，直到你再次裁剪。",
                forget: "忘记",
                cancel: "取消",
                clearSavedPictures: "清除已保存的图片？",
                everyPictureYouHave: "你在此保存的所有图片都将被删除，连同每张记住的裁剪。Discord 自己的存档以及你当前的头像和横幅不受影响。",
                clear: "清除",
                removeThisPicture: "移除此图片？",
                remove: "移除",
                keepTheCroppedCopy: "保留裁剪后的副本？",
                itGoesOnThe: "它会放到 {{toLowerCase}} 架上，紧挨着你的原图。",
                keep: "保留",
                noThanks: "不用了",
                exportToAFile: "导出到文件",
                importFromAFile: "从文件导入",
                forgetRememberedFraming: "忘记记住的取景",
                clearSavedPictures2: "清除已保存的图片",
                croppedKind: "已裁剪的{{kind}}",
                unpinName: "取消固定 {{name}}",
                pinName: "固定 {{name}}",
                pinnedNeverDrops: "已固定，永远不会从架子上掉落",
                pinNeverDrops: "固定，使其永远不会从架子上掉落",
                nothingMatches: "没有匹配的内容",
                originalsEmpty: "你选择、粘贴或拖入的图片会出现在这里",
                croppedEmpty: "你裁剪的图片会出现在这里",
                forgotFraming: "已清除 {{count}} 张图片的取景",
                nothingFramed: "没有任何已取景的图片",
                pictureLibrary: "图片库",
                addedPictures: "已添加 {{count}} 张图片",
                nothingNew: "该文件中没有新内容",
                shownOfTotal: "{{shown}} / {{total}}",
                keptCount: "已保存 {{count}} 张",
                youAreWearingThis: "你正在使用这个",
                removePictureBody: "{{name}} 将从已保存的图片中移除，连同记住的裁剪。"
            },
            option: {
                librarySize: {
                    description: "每个架子上保留的图片数量。",
                    label: "库大小"
                },
                rememberCrop: {
                    description: "恢复上次用于图片的缩放和位置。",
                    label: "记住裁剪"
                },
                forgetFraming: {
                    description: "丢弃所有记住的裁剪，并按 Discord 默认方式打开每张图片。",
                    label: "忘记取景"
                },
                saveCropped: {
                    description: "裁剪后保留每张图片的副本。",
                    label: "保存裁剪后的图片"
                },
                askBeforeSavingCropped: {
                    description: "先询问，而不是自动保留裁剪后的副本。",
                    label: "保存裁剪图片前询问"
                },
                transfer: {
                    description: "将你的图片及每张的取景转移到另一台设备。",
                    label: "转移"
                },
                clearLibrary: {
                    description: "丢弃你保存的所有图片。",
                    label: "清空库"
                }
            },
            name: "BetterImageEditor",
            description: "在头像和横幅编辑器中保留你的图片架，并记住每张图片的裁剪方式。",
            toast: {
                couldNotExportYour: "无法导出你的图片",
                couldNotReadThat: "无法读取该文件",
                thatPictureIsMissing: "该图片缺失",
                thatPictureIsToo: "该图片对 Discord 来说太大",
                couldNotUseThat: "无法使用该图片",
                couldNotKeepThe: "无法保留裁剪后的副本"
            },
            kind: {
                avatars: "头像",
                banners: "横幅",
                serverIcons: "服务器图标",
                serverBanners: "服务器横幅",
                eventCovers: "活动封面",
                homeHeaders: "主页标题图",
                decorations: "装饰",
                widgetCovers: "小组件封面",
                widgetImages: "小组件图片"
            }
        },
        cancelFriendRequest: {
            name: "CancelFriendRequest",
            description: "添加从个人资料中取消已发送好友请求的方式。",
            text: {
                cancelOutgoingFriendRequest: "取消已发送的好友请求"
            }
        },
        clipUpload: {
            text: {
                createdAtMustBe: "创建时间必须是有效日期。",
                cancel: "取消",
                uploadClipFile: "上传剪辑文件",
                fileName: "文件名",
                title: "标题",
                epicMoment: "精彩时刻",
                message: "消息",
                checkOutThisClip: "快看这个剪辑！",
                spoiler: "剧透",
                remix: "混搭",
                thumbnail: "缩略图",
                file: "文件",
                selectFile: "选择文件",
                parseClipMetadataFrom: "从文件解析剪辑元数据",
                selectFriends: "选择好友",
                selectAGame: "选择游戏",
                customApplicationId: "自定义应用 ID",
                createdAt: "创建时间",
                participants: "参与者",
                onlyTagPeopleWho: "仅标记在场且同意出现在此剪辑中的人。",
                gameApplication: "游戏/应用",
                uploadClipFile2: "上传剪辑文件",
                uploading: "正在上传",
                upload: "上传",
                noFileSelected: "未选择文件",
                couldNotPrepare: "无法准备所选文件。",
                couldNotRead: "无法读取所选文件。",
                couldNotUpdateMetadata: "无法更新剪辑元数据。",
                notCompatible: "此文件不兼容。请使用包含 H.264 视频和 AAC 音频的 MP4 剪辑。",
                uploadFailed: "上传失败。",
                noUploadSlot: "Discord 未返回上传位置。",
                uploadCanceled: "上传已取消。",
                failedToUpload: "无法上传剪辑。",
                selectClipFile: "选择剪辑文件",
                mp4Video: "MP4 视频"
            },
            name: "ClipUpload",
            description: "添加一个按钮，将本地视频文件作为 Discord 剪辑上传。",
            toast: {
                checkingClipFile: "正在检查剪辑文件。",
                convertingClipFile: "正在转换剪辑文件。",
                clipUploaded: "剪辑已上传。"
            }
        },
        collapsibleUI: {
            name: "CollapsibleUI",
            description: "原生可折叠的频道、成员、聊天按钮和用户区域。",
            text: {
                collapsibleUi: "可折叠界面",
                guildBar: "服务器栏",
                channelList: "频道列表",
                membersList: "成员列表",
                messageButtons: "消息按钮",
                titleBar: "标题栏",
                headerBar: "顶栏",
                userArea: "用户区域"
            },
            option: {
                detachUserArea: {
                    description: "分离用户区域，使其在未折叠时可以自由移动。",
                    label: "分离用户区域"
                },
                detachedUserAreaX: {
                    description: "保存分离用户区域的 x 坐标。",
                    label: "分离的用户区域 X"
                },
                detachedUserAreaY: {
                    description: "保存分离用户区域的 y 坐标。",
                    label: "分离的用户区域 Y"
                },
                guildBarCollapsed: {
                    description: "记住服务器栏为折叠状态。",
                    label: "服务器栏已折叠"
                },
                channelListCollapsed: {
                    description: "记住频道列表为折叠状态。",
                    label: "频道列表已折叠"
                },
                membersListCollapsed: {
                    description: "记住成员列表为折叠状态。",
                    label: "成员列表已折叠"
                },
                chatButtonsCollapsed: {
                    description: "记住消息按钮行为折叠状态。",
                    label: "聊天按钮已折叠"
                },
                titleBarCollapsed: {
                    description: "记住标题栏为折叠状态。",
                    label: "标题栏已折叠"
                },
                headerBarCollapsed: {
                    description: "记住顶栏为折叠状态。",
                    label: "顶栏已折叠"
                },
                userAreaCollapsed: {
                    description: "记住用户区域为折叠状态。",
                    label: "用户区域已折叠"
                }
            }
        },
        customCommands: {
            text: {
                cancel: "取消",
                name: "Name",
                response: "回复内容",
                detectedArguments: "检测到的参数",
                exampleCommandResponse: "命令回复示例：",
                exampleUsage: "用法示例：",
                exampleOutput: "输出示例：",
                viewArgumentsGuide: "查看参数指南",
                editTag: "编辑标签",
                deleteTag: "删除标签",
                registeredTags: "已注册的标签",
                createTag: "创建标签",
                aTagWithThe: "名为 **{{name}}** 的标签不存在！",
                successfullyDeletedTheTag: "已成功删除标签 **{{name}}**！",
                ephemeralReserved: "参数名 \"ephemeral\" 为保留名称，无法使用。",
                createNewTag: "创建新标签",
                editTagSubtitle: "编辑你的自定义命令。",
                createTagSubtitle: "创建一个将注册为斜杠命令的新标签。",
                save: "保存",
                create: "创建",
                variablesHelp: "你的回复可以包含用双花括号括起的变量，它们会成为命令参数，例如",
                defaultValuesHelp: "你可以使用等号为参数指定默认值，例如",
                noTagsYet: "哎呀！还没有标签，使用 `/tags create` 创建一个吧！",
                nameAlreadyExists: "名为 \"{{name}}\" 的标签已存在，将被覆盖。",
                defaultValue: "（默认：{{value}}）"
            },
            name: "CustomCommands",
            description: "允许创建自定义斜杠命令 / 标签",
            option: {
                tagsList: {
                    label: "标签列表"
                }
            },
            command: {
                ephemeral: "回复是否仅对你可见",
                tags: "管理所有自定义命令",
                create: "创建一个新标签",
                list: "列出你的所有标签",
                delete: "按名称移除标签",
                tagName: "标签名称"
            }
        },
        fileUpload: {
            name: "FileUpload",
            description: "将文件上传到 Zipline、Nest、S3 和 WebDAV 等托管服务",
            toast: {
                fileTypeNotAllowed: "当前过滤器不允许此文件类型",
                pleaseConfigureFileuploadSettings: "请先配置 FileUpload 设置",
                sharexConfigIsValid: "ShareX 配置有效",
                importedSharexConfig: "已导入 ShareX 配置",
                uploadSuccessfulButNo: "上传成功，但没有可复制的 URL",
                uploadSuccessfulUrlCopied: "上传成功，URL 已复制到剪贴板",
                uploadSuccessfulButFailed: "上传成功，但复制 URL 失败",
                uploadSuccessful: "上传成功",
                uploadSucceededWithServicelabels: "切换备用后通过 {{serviceLabels_service}} 上传成功",
                apngToGifConversion: "APNG 转 GIF 失败，将以 APNG 上传",
                uploadAlreadyInProgress: "上传已在进行中",
                uploadCancelled: "上传已取消",
                uploadFailedMessage: "上传失败：{{message}}",
                invalidSharexConfig: "无效的 ShareX 配置",
                failedToImportSharexConfig: "无法导入 ShareX 配置"
            },
            text: {
                uploadToServicename: "上传到 {{serviceName}}",
                uploadToHost: "上传到托管",
                chooseFile: "选择文件...",
                zipline: "Zipline",
                eZHost: "E-Z Host",
                nest: "Nest",
                encryptingHost: "Encrypting.host",
                s3Compatible: "兼容 S3",
                catboxMoe: "Catbox.moe",
                litterbox: "Litterbox",
                sharexCustomUploader: "ShareX 自定义上传器",
                webdavNextcloudOwncloud: "WebDAV (Nextcloud/Owncloud)",
                n1Hour: "1 小时",
                n12Hours: "12 小时",
                n24Hours: "24 小时",
                n72Hours: "72 小时",
                corsProxy: "CORS 代理",
                query: "查询",
                param: "参数",
                fakeLink: "伪装链接",
                embed: "嵌入",
                n30Seconds: "30 秒",
                n1Minute: "1 分钟",
                n2Minutes: "2 分钟",
                n5Minutes: "5 分钟",
                n10Minutes: "10 分钟",
                dragHostsToReorder: "拖动托管以调整备用尝试的顺序。会先尝试所选托管，然后按此顺序。",
                chooseWhereFileuploadSends: "选择 FileUpload 发送新文件的位置。",
                connectionDetailsForYour: "你的 Zipline 实例连接信息。",
                theUrlOfYour: "你的 Zipline 实例 URL",
                yourZiplineApiAuthorization: "你的 Zipline API 授权令牌",
                yourZiplineApiToken: "你的 Zipline API 令牌",
                folderIdForUploads: "上传的文件夹 ID（留空表示不使用文件夹）",
                leaveEmptyForNo: "留空表示不使用文件夹",
                connectionDetailsForE: "E-Z Host 上传的连接信息。",
                yourEZHost: "你的 E-Z Host API 密钥",
                connectionDetailsForNest: "Nest 上传的连接信息。",
                yourNestApiAuthorization: "你的 Nest API 授权令牌",
                yourNestApiToken: "你的 Nest API 令牌",
                connectionDetailsForEncrypting: "Encrypting.host 上传的连接信息。",
                yourEncryptingHostApi: "你的 Encrypting.host API 密钥",
                howEncryptingHostShould: "Encrypting.host 返回链接的格式。",
                selectUrlStyle: "选择 URL 样式",
                optionalTitleForEmbed: "嵌入样式响应的可选标题。",
                optionalTitle: "可选标题",
                optionalColorForEmbed: "嵌入样式响应的可选颜色。",
                optionalColor: "可选颜色",
                optionalFakeLinkValue: "fakelink 样式响应的可选伪装链接值。",
                optionalFakeLink: "可选伪装链接",
                connectionDetailsAndObject: "存储桶的连接信息和对象命名。",
                s3CompatibleEndpointE: "兼容 S3 的端点（例如 https://<accountid>.r2.cloudflarestorage.com）",
                bucketToUploadInto: "上传目标存储桶",
                awsRegionOrAuto: "AWS 区域，Cloudflare R2 请填 auto",
                s3CompatibleAccessKey: "兼容 S3 的访问密钥",
                yourAccessKeyId: "你的访问密钥 ID",
                s3CompatibleSecretKey: "兼容 S3 的秘密密钥",
                yourSecretAccessKey: "你的秘密访问密钥",
                optionalTemporaryCredentialToken: "可选的临时凭证令牌",
                optionalSessionToken: "可选会话令牌",
                optionalPublicUrlBase: "用于返回链接的可选公共基础 URL",
                optionalFolderPrefixInside: "存储桶内的可选文件夹/前缀",
                useEndpointBucketKey: "使用 endpoint/bucket/key 格式，推荐用于 R2。",
                optionalAccountBindingFor: "Catbox 上传的可选账号绑定。",
                yourCatboxUserhashFor: "用于绑定账号的 Catbox userhash，留空则匿名上传。",
                yourCatboxUserhash: "你的 Catbox userhash",
                howLongUploadsAre: "上传保留时长",
                selectExpiry: "选择过期时间",
                optionalAccountBindingFor2: "GoFile 上传的可选账号绑定。",
                optionalGofileTokenTo: "用于上传到你账号的可选 GoFile 令牌。",
                optionalGofileToken: "可选 GoFile 令牌",
                connectionDetailsForPixelvault: "PixelVault 上传的连接信息。",
                yourPixelvaultAuthorizationKey: "你的 PixelVault 授权密钥。",
                yourPixelvaultUploadKey: "你的 PixelVault 上传密钥",
                optionalAccountBindingFor3: "PixelDrain 上传的可选账号绑定。",
                optionalPixeldrainApiKey: "用于认证上传的可选 PixelDrain API 密钥。留空则匿名上传。",
                yourPixeldrainApiKey: "你的 PixelDrain API 密钥",
                pasteImportOrValidate: "粘贴、导入或验证 ShareX 自定义上传器配置。",
                pasteYourSharexCustom: "粘贴你的 ShareX 自定义上传器 JSON（.sxcu/.json）。DestinationType 必须包含 FileUploader 或 ImageUploader。",
                importFromFileOr: "从文件导入或验证粘贴的配置",
                connectionDetailsForWebdav: "WebDAV 服务器（Nextcloud、Owncloud 等）的连接信息。",
                baseWebdavUrlE: "WebDAV 基础 URL（例如 https://nextcloud.example.com/remote.php/dav/files/username）",
                optionalSubdirectoryOnThe: "服务器上用于上传的可选子目录（例如 uploads）",
                leaveEmptyForRoot: "留空表示根目录",
                selectYourWebdavServer: "选择你的 WebDAV 服务器类型。Nextcloud 和 ownCloud 会创建公共分享链接。通用类型返回原始文件 URL。",
                selectServerType: "选择服务器类型",
                howToReturnThe: "如何返回公共分享链接。分享页面链接到网页；直接下载直接链接到文件；Markdown 链接将分享页面包装为可点击的文件名。",
                selectShareLinkFormat: "选择分享链接格式",
                controlWhatFileuploadDoes: "控制托管返回 URL 后 FileUpload 的行为。",
                stripQueryParametersFrom: "从上传文件的 URL 中去除查询参数。",
                wrapUploadedVideoLinks: "使用嵌入代理包装已上传的视频链接，以获得更好的 Discord 预览。",
                chooseWhichEmbedProxy: "选择用于已上传视频链接的嵌入代理服务",
                selectAnEmbedProxy: "选择嵌入代理服务",
                convertApngFilesTo: "将 APNG 文件转换为 GIF 格式。",
                useTheOriginalFilename: "使用原始文件名，而不是将上传命名为 upload.ext。",
                automaticallyCopyTheUploaded: "自动将上传文件的 URL 复制到剪贴板。",
                onlyUseTheSelected: "仅使用所选上传器，不尝试备用托管。",
                afterUploadInsertThe: "上传后，将得到的 URL 插入当前聊天输入框。",
                wrapInsertedUrlsIn: "用尖括号包裹插入的 URL，以避免 Discord 生成预览。",
                chooseWhenFileuploadTakes: "选择 FileUpload 何时接管 Discord 的文件处理。",
                useFileuploadWhenUploading: "通过 Discord 文件选择器上传时使用 FileUpload。",
                useFileuploadOnlyFor: "仅对大于你当前 Discord 上传限制的文件使用 FileUpload。",
                manualDiscordFileSize: "手动设置 Discord 文件大小限制（MB），在自动检测出错时使用。留空则自动。",
                auto: "自动",
                commaSeparatedListOf: "以逗号分隔的扩展名列表（例如 png,jpg,gif）。留空则全部允许。",
                configureBrowserUploadProxying: "配置浏览器上传代理和超时。",
                corsProxyUsedFor: "用于网页上传的 CORS 代理。留空则使用默认代理。",
                sourceCodeForThe: "默认 CORS 代理的源代码",
                maximumTimeToWait: "每次上传尝试在切换到备用前的最长等待时间",
                selectTimeout: "选择超时",
                drag: "拖动",
                importSxcuJson: "导入 .sxcu/.json",
                validate: "验证",
                resetToDefault: "重置为默认",
                progress: "{{percent}}% - {{transferred}} / {{total}}",
                cancel: "取消"
            },
            option: {
                serviceType: {
                    description: "所选上传服务",
                    label: "服务类型"
                },
                serviceUrl: {
                    description: "Zipline 服务 URL",
                    label: "服务 URL"
                },
                ziplineToken: {
                    description: "Zipline 认证令牌",
                    label: "Zipline 令牌"
                },
                folderId: {
                    description: "可选的 Zipline 文件夹 ID",
                    label: "文件夹 ID"
                },
                ezHostKey: {
                    description: "E-Z Host API 密钥",
                    label: "E-Z Host 密钥"
                },
                nestToken: {
                    description: "Nest API 令牌",
                    label: "Nest 令牌"
                },
                encryptingHostKey: {
                    description: "Encrypting.host API 密钥",
                    label: "Encrypting.host 密钥"
                },
                encryptingHostUrlStyle: {
                    description: "Encrypting.host URL 样式",
                    label: "Encrypting.host URL 样式"
                },
                encryptingHostDomains: {
                    description: "Encrypting.host 域名 JSON 列表",
                    label: "Encrypting.host 域名"
                },
                encryptingHostTitle: {
                    description: "可选的 Encrypting.host 嵌入标题",
                    label: "Encrypting.host 标题"
                },
                encryptingHostColor: {
                    description: "可选的 Encrypting.host 嵌入颜色",
                    label: "Encrypting.host 颜色"
                },
                encryptingHostFakelink: {
                    description: "可选的 Encrypting.host 伪装链接",
                    label: "Encrypting.host 伪装链接"
                },
                s3Endpoint: {
                    description: "兼容 S3 的端点 URL",
                    label: "S3 端点"
                },
                s3Bucket: {
                    description: "S3 存储桶名称",
                    label: "S3 存储桶"
                },
                s3Region: {
                    description: "S3 区域（R2 请使用 auto）",
                    label: "S3 区域"
                },
                s3AccessKeyId: {
                    description: "S3 访问密钥 ID",
                    label: "S3 访问密钥 ID"
                },
                s3SecretAccessKey: {
                    description: "S3 秘密访问密钥",
                    label: "S3 秘密访问密钥"
                },
                s3SessionToken: {
                    description: "可选的 S3 会话令牌",
                    label: "S3 会话令牌"
                },
                s3PublicUrl: {
                    description: "可选的公共基础 URL",
                    label: "S3 公共 URL"
                },
                s3Prefix: {
                    description: "可选的 S3 对象键前缀",
                    label: "S3 前缀"
                },
                s3ForcePathStyle: {
                    description: "使用路径风格的 S3 URL",
                    label: "强制 S3 路径风格"
                },
                litterboxExpiry: {
                    description: "Litterbox 保留时长",
                    label: "Litterbox 过期时间"
                },
                catboxUserhash: {
                    description: "用于绑定账号的 Catbox userhash",
                    label: "Catbox userhash"
                },
                sharexConfig: {
                    description: "ShareX 自定义上传器 JSON",
                    label: "ShareX 配置"
                },
                disableFallbacks: {
                    description: "禁用备用上传服务",
                    label: "禁用备用"
                },
                autoSend: {
                    description: "将上传的 URL 插入聊天输入框",
                    label: "自动发送"
                },
                autoFormat: {
                    description: "用尖括号包裹插入的 URL",
                    label: "自动格式化"
                },
                bypassDiscordUpload: {
                    description: "绕过 Discord 上传，改用 FileUpload。",
                    label: "绕过 Discord 上传"
                },
                bypassDiscordUploadOnlyOverLimit: {
                    description: "仅在文件超出大小限制时使用 FileUpload。",
                    label: "仅超出限制时绕过 Discord 上传"
                },
                customDiscordFileSizeLimitMB: {
                    description: "手动设置 Discord 文件大小限制（MB）。0 表示自动检测。",
                    label: "自定义 Discord 文件大小限制（MB）"
                },
                gofileToken: {
                    description: "可选的 GoFile API 令牌",
                    label: "GoFile 令牌"
                },
                fallbackOrder: {
                    description: "备用上传器顺序",
                    label: "备用顺序"
                },
                pixelVaultKey: {
                    description: "PixelVault 上传密钥",
                    label: "PixelVault 密钥"
                },
                pixelDrainKey: {
                    description: "可选的 PixelDrain API 密钥",
                    label: "PixelDrain 密钥"
                },
                uploadTimeoutMs: {
                    description: "上传超时（毫秒）",
                    label: "上传超时 (ms)"
                },
                stripQueryParams: {
                    description: "从上传的 URL 中去除查询参数",
                    label: "去除查询参数"
                },
                embedProxyEnabled: {
                    description: "通过嵌入辅助服务代理已上传的视频链接。",
                    label: "启用嵌入代理"
                },
                embedProxyService: {
                    description: "用于包装已上传视频链接的嵌入辅助服务。",
                    label: "嵌入代理服务"
                },
                corsProxyUrl: {
                    description: "用于浏览器上传的 CORS 代理 URL",
                    label: "CORS 代理 URL"
                },
                apngToGif: {
                    description: "将上传的 APNG 转换为 GIF",
                    label: "APNG 转 GIF"
                },
                preserveOriginalFilename: {
                    description: "上传时保留原始文件名。",
                    label: "保留原始文件名"
                },
                autoCopy: {
                    description: "自动复制上传 URL",
                    label: "自动复制"
                },
                autoUploadPastedFiles: {
                    description: "在聊天输入框粘贴时，自动将剪贴板中的文件上传到图床。",
                    label: "自动上传粘贴的文件"
                },
                webdavUrl: {
                    description: "WebDAV 服务器 URL",
                    label: "WebDAV URL"
                },
                webdavUsername: {
                    description: "WebDAV 用户名",
                    label: "WebDAV 用户名"
                },
                webdavPassword: {
                    description: "WebDAV 密码或应用令牌",
                    label: "WebDAV 密码"
                },
                webdavDirectory: {
                    description: "WebDAV 服务器上的可选子目录",
                    label: "WebDAV 目录"
                },
                webdavServerType: {
                    description: "WebDAV 服务器类型",
                    label: "WebDAV 服务器类型",
                    nextcloud: "Nextcloud",
                    owncloud: "ownCloud",
                    generic: "通用 WebDAV"
                },
                webdavShareType: {
                    description: "WebDAV 分享链接格式",
                    label: "WebDAV 分享类型",
                    sharepage: "分享页面",
                    directdownload: "直接下载",
                    markdown: "Markdown 链接"
                },
                uploadAllowedFileTypes: {
                    description: "以逗号分隔的允许文件扩展名列表（例如 png,jpg,gif,mp4）。留空则允许所有文件。",
                    label: "允许上传的文件类型"
                },
                settingsComponent: {
                    description: "设置",
                    label: "设置组件"
                }
            },
            panel: {
                fallbackOrder: "备用顺序",
                uploadService: "上传服务",
                zipline: "Zipline",
                serviceUrl: "服务 URL",
                ziplineToken: "Zipline 令牌",
                folderId: "文件夹 ID",
                eZHost: "E-Z Host",
                eZHostApiKey: "E-Z Host API 密钥",
                nest: "Nest",
                nestToken: "Nest 令牌",
                encryptingHost: "Encrypting.host",
                encryptingHostApiKey: "Encrypting.host API 密钥",
                urlStyle: "URL 样式",
                domainsJson: "域名（JSON）",
                embedTitle: "嵌入标题",
                embedColor: "嵌入颜色",
                fakeLink: "伪装链接",
                s3CompatibleStorage: "兼容 S3 的存储",
                s3EndpointUrl: "S3 端点 URL",
                bucketName: "存储桶名称",
                region: "区域",
                accessKeyId: "访问密钥 ID",
                secretAccessKey: "秘密访问密钥",
                sessionToken: "会话令牌",
                publicBaseUrl: "公共基础 URL",
                objectKeyPrefix: "对象键前缀",
                usePathStyleEndpoint: "使用路径风格端点",
                catbox: "Catbox",
                catboxUserhash: "Catbox userhash",
                litterboxExpiry: "Litterbox 过期时间",
                gofile: "GoFile",
                gofileToken: "GoFile 令牌",
                pixelvault: "PixelVault",
                pixelvaultUploadKey: "PixelVault 上传密钥",
                pixeldrain: "PixelDrain",
                pixeldrainApiKey: "PixelDrain API 密钥",
                sharexCustomUploader: "ShareX 自定义上传器",
                sharexCustomUploaderConfig: "ShareX 自定义上传器配置",
                sharexConfigActions: "ShareX 配置操作",
                webdav: "WebDAV",
                serverUrl: "服务器 URL",
                username: "用户名",
                passwordOrAppToken: "密码或应用令牌",
                passwordOrAppToken2: "密码或应用令牌",
                uploadDirectory: "上传目录",
                serverType: "服务器类型",
                shareLinkFormat: "分享链接格式",
                uploadBehavior: "上传行为",
                stripQueryParameters: "去除查询参数",
                useEmbedProxy: "使用嵌入代理",
                embedProxyService: "嵌入代理服务",
                convertApngToGif: "将 APNG 转换为 GIF",
                preserveOriginalFilename: "保留原始文件名",
                autoCopyUrl: "自动复制 URL",
                disableFallbackUploaders: "禁用备用上传器",
                insertUrlIntoChatInput: "将 URL 插入聊天输入框",
                formatInsertedUrl: "格式化插入的 URL",
                discordIntegration: "Discord 集成",
                bypassDiscordUploadButton: "绕过 Discord 上传按钮",
                autoUploadPastedFiles: "自动上传粘贴的文件",
                respectDiscordFileSizeLimit: "遵守 Discord 文件大小限制",
                discordLimitOverrideMb: "覆盖 Discord 限制（MB）",
                allowedFileTypes: "允许的文件类型",
                network: "网络",
                corsProxyUrl: "CORS 代理 URL",
                defaultCorsProxySource: "默认 CORS 代理源码",
                uploadTimeout: "上传超时",
                domainsJsonDescription: "要使用的域名 JSON 数组，例如 [\"offensive\"]。"
            },
            status: {
                cancelled: "上传已取消。",
                uploadingVia: "正在通过 {{service}} 上传...",
                uploading: "正在上传...",
                unknownError: "未知错误",
                startingVia: "正在通过 {{service}} 开始上传...",
                retryingWith: "正在使用 {{service}} 重试（{{attempt}}/{{total}}）...",
                uploadedVia: "已通过 {{service}} 成功上传。",
                allFailed: "所有上传服务均失败。最后的错误：{{error}}",
                fileReady: "文件已就绪，开始上传...",
                preparing: "正在准备上传...",
                failed: "上传失败：{{message}}",
                timedOut: "上传超时",
                serviceFailed: "{{service}} 失败：{{message}}",
                preparingFile: "正在准备 {{name}}{{suffix}}..."
            }
        },
        gifMaker: {
            option: {
                lastWidth: {
                    label: "上次宽度"
                },
                lastHeight: {
                    label: "上次高度"
                },
                lastCaptionMode: {
                    label: "上次字幕模式"
                },
                lastCaptionText: {
                    label: "上次字幕文本"
                },
                lastCaptionSize: {
                    label: "上次字幕大小"
                },
                lastFontFamily: {
                    label: "上次字体系列"
                },
                lastBubbleTipBase: {
                    label: "上次气泡尾部基点"
                },
                maxWidth: {
                    description: "自动适配的最大宽度。",
                    label: "最大宽度"
                },
                maxHeight: {
                    description: "自动适配的最大高度。",
                    label: "最大高度"
                }
            },
            name: "GifMaker",
            description: "从聊天或 GIF 选择器中的任意媒体创建 GIF 并添加字幕。",
            text: {
                send: "发送",
                export: "导出",
                makeGif: "制作 GIF",
                editGif: "编辑 GIF",
                selectAFont: "选择字体...",
                enterCaption: "输入字幕...",
                width: "宽度",
                height: "高度",
                loadingFonts: "正在加载字体...",
                captions: "字幕",
                text: "文本",
                font: "字体",
                fontSize: "字号",
                tipBase: "尾部基点",
                dimensions: "尺寸",
                generatingGif: "正在生成 GIF...",
                clickOnThePreview: "点击预览以定位气泡尾部",
                gifPreview: "GIF 预览"
            },
            captionMode: {
                caption: "字幕",
                none: "无",
                speechbubble: "气泡"
            }
        },
        gifProviderSwitcher: {
            name: "GifProviderSwitcher",
            description: "允许使用 Tenor 或 Giphy 的 GIF 搜索代替 Klipy",
            text: {
                tenor: "Tenor",
                giphy: "Giphy",
                klipy: "Klipy",
                providers: "提供方",
                providersCount: "{{count}} 个提供商"
            }
        },
        keyboardNavigation: {
            toast: {
                invalidUrl: "无效的 URL",
                copiedResponseToClipboard: "已将响应复制到剪贴板！",
                issueFetchingUrl: "获取 URL 时出错",
                copiedGitInfoTo: "已将 Git 信息复制到剪贴板！",
                noUpdatesAvailable: "没有可用的更新",
                enabledPlugin: "已成功启用 {{id}}",
                disabledPlugin: "已成功禁用 {{id}}"
            },
            text: {
                openPlexcordTab: "打开 Plexcord 标签页",
                openPluginTab: "打开插件标签页",
                openThemesTab: "打开主题标签页",
                openUpdaterTab: "打开更新标签页",
                openCloudTab: "打开云端标签页",
                openBackupRestoreTab: "打开备份与恢复标签页",
                restartClient: "重启客户端",
                openQuickCssFile: "打开 QuickCSS 文件",
                openSettingsFolder: "打开设置文件夹",
                openInGithub: "在 GitHub 中打开",
                openInBrowser: "在浏览器中打开",
                togglePlugin: "切换插件",
                enable: "启用",
                disable: "禁用",
                quickFetch: "快速获取",
                copyGitInfo: "复制 Git 信息",
                checkForUpdates: "检查更新",
                aPlexcordUpdateIs: "有可用的 Plexcord 更新！",
                clickHereToView: "点击此处查看更新",
                navigateToServer: "前往服务器",
                commandPalette: "命令面板",
                searchTheCommandPalette: "搜索命令面板",
                multipleChoice: "多项选择",
                textInput: "文本输入",
                openDevTab: "打开开发者标签页",
                enterUrlToFetch: "输入要获取的 URL（仅 GET）",
                typeAndPressEnter: "输入后按 Enter",
                recording: "正在录制...",
                recordKeybind: "录制快捷键",
                enterUrl: "输入网址"
            },
            option: {
                hotkey: {
                    description: "打开命令面板的快捷键。",
                    label: "快捷键"
                },
                allowMouseControl: {
                    description: "允许使用鼠标控制命令面板。",
                    label: "允许鼠标控制"
                }
            },
            name: "KeyboardNavigation",
            description: "允许使用键盘浏览界面。"
        },
        lastActive: {
            name: "LastActive",
            description: "用于跳转到你或其他用户在频道/服务器中最后一条活跃消息的插件。",
            toast: {
                failedToFindMessages: "未能找到消息。详情请查看控制台。",
                couldnTFindAny: "找不到此用户的近期消息。",
                channelInformationNotAvailable: "频道信息不可用。",
                failedToJumpTo: "跳转到消息失败。详情请查看控制台。"
            },
            text: {
                yourLastMessage: "你的最后一条消息",
                userSLastMessage: "该用户的最后一条消息"
            }
        },
        limitlessScreenshare: {
            text: {
                deleteTag: "删除标签",
                mustBeGreaterThan: "必须 >{{value}}",
                maxResolutionTooLow: "最大分辨率不能低于 {{value}}",
                maxResolutionRound: "启用\"分辨率取整\"时，最大分辨率必须以 0 结尾"
            },
            name: "LimitlessScreenshare",
            description: "为屏幕共享分辨率和帧率添加滑块。",
            option: {
                maxFPS: {
                    description: "滑块的最大帧率",
                    label: "最大帧率"
                },
                maxResolution: {
                    description: "滑块的最大分辨率",
                    label: "最大分辨率"
                },
                roundResolution: {
                    description: "将分辨率四舍五入到最接近的 10p",
                    label: "四舍五入分辨率"
                },
                resolutions: {
                    label: "分辨率"
                },
                fpss: {
                    label: "帧率值"
                }
            }
        },
        messagePeek: {
            option: {
                hideMuted: {
                    description: "隐藏已静音私信和群聊的消息预览和时间戳。",
                    label: "隐藏已静音"
                }
            },
            name: "MessagePeek",
            description: "在私信列表中显示最后一条消息的预览和时间戳。",
            text: {
                officialDiscordMessage: "Discord 官方消息",
                sentGif: "发送了 GIF",
                voiceMessage: "语音消息",
                membersCount: "{{count}} 名成员",
                you: "你"
            }
        },
        messageTranslate: {
            name: "MessageTranslate",
            description: "自动将消息翻译为你的语言，支持缓存、按频道开关等更多选项。",
            option: {
                targetLanguage: {
                    description: "翻译的目标语言代码（例如 en、es、fr、de、ja）。",
                    label: "目标语言"
                },
                excludedLanguages: {
                    description: "不翻译的语言代码（例如 en、es、fr、de、ja）。",
                    label: "排除的语言"
                },
                confidenceRequirement: {
                    description: "显示翻译所需的最低置信度（0 到 1）。",
                    label: "置信度要求"
                },
                autoTranslate: {
                    description: "消息出现时自动翻译。",
                    label: "自动翻译"
                },
                skipOwnMessages: {
                    description: "不翻译你自己的消息。",
                    label: "跳过自己的消息"
                },
                skipBotMessages: {
                    description: "不翻译机器人消息。",
                    label: "跳过机器人消息"
                },
                ignoredGuilds: {
                    description: "以逗号分隔的不进行翻译的服务器 ID 列表。",
                    label: "忽略的服务器"
                },
                ignoredChannels: {
                    description: "以逗号分隔的不进行翻译的频道 ID 列表。",
                    label: "忽略的频道"
                },
                ignoredUsers: {
                    description: "以逗号分隔的不翻译的用户 ID 列表。",
                    label: "忽略的用户"
                },
                showIndicator: {
                    description: "在已翻译的消息后附加一个小的（已翻译）标识。",
                    label: "显示标识"
                },
                showOriginal: {
                    description: "显示原文和译文。",
                    noorig: "不显示原文。"
                }
            },
            text: {
                showOriginalInSubtext: "在副文本中显示原文",
                showOriginalMessageTranslation: "显示原始消息，译文放在副文本中",
                translatedFrom: "翻译自{{lang}}"
            }
        },
        moreStickers: {
            toast: {
                stickerPackDeleted: "已删除贴纸包",
                stickerPackAdded: "已添加贴纸包",
                stickerPacksAdded: "已添加贴纸包",
                stickerPacksExported: "已导出贴纸包",
                newStickerPacksAlready: "新贴纸包已存在，无需迁移",
                oldStickerPacksNot: "未找到旧贴纸包，无需迁移",
                migrationFailedTitleId: "迁移失败：{{title}}（{{id}}）",
                stickerPackMigrationComplete: "贴纸包迁移完成",
                failedToUploadSticker: "上传贴纸失败"
            },
            text: {
                stickerPackUrl: "贴纸包 URL",
                pasteHtmlHere: "在此粘贴 HTML",
                delete: "删除",
                addStickerPackFrom: "从 URL 添加贴纸包",
                insert: "插入",
                addStickerPackFrom2: "从 HTML 添加贴纸包",
                insertFromHtml: "从 HTML 插入",
                addStickerPackFrom3: "从文件添加贴纸包",
                miscTools: "杂项工具",
                exportStickerPacks: "导出贴纸包",
                migrateFromV1: "从 v1 迁移",
                stickersManagement: "贴纸管理",
                theRegionLineRecognized: "由于我们使用的 CORS 代理，LINE 识别的地区可能与你所在的地区不同。",
                openStickerPackFile: "打开贴纸包文件",
                stickers: "贴纸+",
                categoryTitle: "分类，{{title}}",
                searchStickers: "搜索贴纸",
                ffmpegstatecontextIsUndefined: "FFmpegStateContext 未定义",
                recentlyUsed: "最近使用",
                addFromUrl: "从 URL 添加",
                addFromHtml: "从 HTML 添加",
                addFromFile: "从文件添加",
                misc: "其他",
                invalidUrl: "无效的 URL",
                lineOnly: "目前仅支持 LINE 贴纸/表情。",
                getTelegramStickers: "使用以下工具获取 Telegram 贴纸：",
                htmlFallbackHelp: "如果添加贴纸包时遇到错误，可以尝试使用贴纸包页面的 HTML 源代码来添加。",
                htmlFallbackApplies: "这适用于有地区锁定 / 系统锁定等限制的贴纸。"
            },
            option: {
                promptToUpload: {
                    description: "将贴纸插入聊天栏而不是立即发送",
                    label: "上传前提示"
                },
                packs: {
                    description: "贴纸包",
                    label: "贴纸包"
                }
            },
            name: "MoreStickers",
            description: "添加来自其他社交媒体平台的贴纸包。（例如 LINE）"
        },
        musicRichPresence: {
            option: {
                scrobblerBackend: {
                    description: "要使用的 Scrobbler 后端。",
                    label: "Scrobbler 后端"
                },
                instanceBaseURL: {
                    description: "你的 ListenBrainz 实例的基础 URL。",
                    label: "实例基础 URL"
                },
                instanceAPIBaseUrl: {
                    description: "你的 ListenBrainz API 的基础 URL。",
                    label: "实例 API 基础 URL"
                },
                apiKey: {
                    description: "Last.fm API 密钥。非必需，但强烈建议填写，以避免共享密钥被限流",
                    label: "API 密钥"
                },
                username: {
                    description: "用户名",
                    label: "用户名"
                },
                shareUsername: {
                    description: "显示 Scrobbler 个人资料链接",
                    label: "分享用户名"
                },
                clickableLinks: {
                    description: "将曲目、艺人和专辑名称设为可点击链接",
                    label: "可点击链接"
                },
                hideWithSpotify: {
                    description: "Spotify 运行时隐藏状态",
                    label: "Spotify 时隐藏"
                },
                hideWithActivity: {
                    description: "有其他状态时隐藏",
                    label: "有活动时隐藏"
                },
                statusName: {
                    description: "自定义状态文本。可用变量：{artist} | {album} | {title}",
                    label: "状态名称"
                },
                statusDisplayType: {
                    description: "在成员列表中显示曲目/艺人名称",
                    off: "不显示（显示通用收听消息）"
                },
                nameFormat: {
                    description: "在状态名称中显示歌曲和艺人名称",
                    statusName: "使用自定义状态名称"
                },
                missingArt: {
                    description: "当专辑或专辑封面缺失时",
                    logo: "使用大号 Scrobbler 标志"
                },
                showLogo: {
                    description: "在专辑封面旁显示 Scrobbler 服务标志",
                    label: "显示 Scrobbler 标志"
                },
                showAlbumCover: {
                    description: "显示专辑封面。禁用后将显示占位图。适用于音乐封面不合适的情况",
                    label: "显示专辑封面"
                },
                useListeningStatus: {
                    description: "显示“正在收听”状态而不是“正在玩”"
                }
            },
            name: "MusicRichPresence",
            description: "Last.FM/Listenbrainz 的 Rich Presence",
            text: {
                showArtistName: "显示艺人名称",
                showTrackName: "显示曲目名称",
                useMusicServiceName: "使用音乐服务名称（回退到自定义状态文本）",
                useFormatArtistSong: "使用“艺人 - 歌曲”格式",
                useFormatSongArtist: "使用“歌曲 - 艺人”格式",
                useArtistNameOnly: "仅使用艺人名称",
                useSongNameOnly: "仅使用歌曲名称",
                useAlbumNameFalls: "使用专辑名称（若歌曲无专辑则回退到自定义状态文本）",
                useGenericPlaceholder: "使用通用占位图",
                lastFm: "Last.FM",
                howToCreateAn: "如何创建 API 密钥",
                set: "设置",
                applicationName: "应用名称",
                applicationDescription: "应用描述",
                toAnythingAndLeave: "为任意内容，其余留空。",
                createApiKey: "创建 API 密钥",
                invalidInstance: "无效的 ListenBrainz 兼容实例",
                provideBoth: "请同时提供",
                apiBaseUrl: "API 基础 URL",
                andThe: "和",
                instanceBaseUrl: "实例基础 URL",
                forYourCustomInstance: "（用于你的自定义 ListenBrainz 实例），或切换回 ListenBrainz/Last.FM",
                allowConnectTitle: "允许 Plexcord 连接到 ListenBrainz 实例",
                allowConnectBody: "要使用你的自定义 ListenBrainz 实例，必须先允许 Plexcord 连接到它。",
                allowInstance: "允许实例",
                listenBrainzCompatible: "兼容 ListenBrainz（自托管）",
                and: "和"
            }
        },
        noMiddleClickPaste: {
            name: "NoMiddleClickPaste",
            description: "禁用 Linux 中键粘贴 - 仅限 Linux"
        },
        orbolayBridge: {
            option: {
                port: {
                    description: "要连接的端口",
                    label: "端口"
                }
            },
            name: "OrbolayBridge",
            description: "将 Orbolay 连接到 Discord 的桥接插件",
            toast: {
                connectedToOrbolayServer: "已连接到 Orbolay 服务器"
            }
        },
        plexcordHelper: {
            name: "PlexcordHelper",
            description: "用于提供支持并修复由 Discord 导致的崩溃。",
            text: {
                restartRequired: "需要重启",
                restartNow: "立即重启",
                later: "稍后",
                wouldYouLikeTo: "要立即重启吗？",
                somePluginsRequireA: "部分插件需要重启才能完全禁用。",
                alreadyEnabled: "{{plugin}} 已启用",
                alreadyDisabled: "{{plugin}} 已禁用",
                disablePlugin: "禁用 {{plugin}}",
                enablePlugin: "启用 {{plugin}}",
                errorStopping: "停止插件 {{plugin}} 时出错",
                errorStarting: "启动插件 {{plugin}} 时出错"
            },
            toast: {
                failedToTolowercase: "{{toLowerCase}} 失败",
                aRestartIsRequired: "需要重启才能使更改生效！"
            },
            card: {
                notOnThisVersion: "此版本的 Plexcord 中没有该插件。请尝试更新！"
            }
        },
        plexcordTweaks: {
            name: "PlexcordTweaks",
            option: {
                removeActivitySection: {
                    description: "移除成员列表上方的活动区域",
                    label: "移除活动区域"
                },
                showYourOwnActivityButtons: {
                    description: "Discord 出于某种原因隐藏了你自己的活动按钮",
                    label: "显示你自己的活动按钮"
                },
                refreshSlashCommands: {
                    description: "刷新斜杠命令，无需重启客户端即可显示新添加的命令。",
                    label: "刷新斜杠命令"
                },
                forceRoleIcon: {
                    description: "在紧凑模式下强制在消息旁显示身份组图标",
                    label: "强制身份组图标"
                },
                accountStandingButton: {
                    description: "在标题栏显示账号状态按钮",
                    label: "账号状态按钮"
                },
                jsonGateway: {
                    description: "在网关重连时强制使用 JSON",
                    label: "JSON 网关"
                },
                enableAutoCorrect: {
                    description: "在聊天框右键菜单中添加原生自动更正和文本替换开关",
                    label: "启用自动更正"
                },
                autoCorrect: {
                    description: "在消息编辑器中使用原生自动更正和文本替换",
                    label: "自动更正"
                },
                disableHolidayNotifications: {
                    label: "禁用节日通知",
                    description: "始终使用 Discord 的默认通知音效"
                },
                showAllBadges: {
                    label: "显示所有徽章",
                    description: "显示所有个人资料徽章，而不是将其余徽章折叠为 +n"
                }
            },
            text: {
                allGood: "一切正常！",
                limited: "受限",
                veryLimited: "严重受限",
                atRisk: "有风险",
                suspended: "已封禁",
                slashCommandsRefreshedSuccessfully: "斜杠命令已成功刷新。",
                failedToRefreshCommands: "刷新命令失败。详情请查看控制台。",
                enableAutocorrect: "启用自动更正"
            },
            command: {
                refreshCommands: "刷新斜杠命令"
            },
            description: "一组针对 Discord 的小调整和修复。"
        },
        plextronStreamFixes: {
            option: {
                unlockQualityOptions: {
                    description: "无论 Nitro 状态如何都解锁直播画质选项",
                    label: "解锁画质选项"
                },
                removeResolutionCap: {
                    description: "允许 60fps 下超过 720p 的分辨率",
                    label: "移除分辨率上限"
                },
                forceEncoderSettings: {
                    description: "强制编码器使用已配置的分辨率/帧率",
                    label: "强制编码器设置"
                },
                preventDownscale: {
                    description: "防止 Discord 降低直播分辨率",
                    label: "防止降分辨率"
                },
                keyframeInterval: {
                    description: "关键帧间隔（毫秒，0 = 编码器默认，5000 = 每 5 秒）",
                    label: "关键帧间隔"
                },
                minBitrate: {
                    description: "最低编码器码率（kbps）",
                    label: "最低码率"
                },
                raiseBitrateCaps: {
                    description: "提高桌面端默认码率上限（目标 600kbps → 10Mbps，最高 3.5Mbps → 40Mbps）",
                    label: "提高码率上限"
                },
                preventFramerateReduction: {
                    description: "防止 Discord 在你不说话时降低直播帧率",
                    label: "防止降低帧率"
                },
                bitsPerPixelPct: {
                    description: "目标码率的每像素比特百分比（8 = 0.08bpp，12 = 0.12bpp）",
                    label: "每像素比特 (%)"
                }
            },
            name: "PlextronStreamFixes",
            description: "通过修补 Discord 的编码器和画质限制，尝试修复 Plextron 上的直播画质。"
        },
        rPCEditor: {
            name: "RPCEditor"
        },
        reactionTimestamps: {
            name: "ReactionTimestamps",
            description: "在反应弹窗中显示每个反应的时间。",
            text: {
                userAtTime: "{{user}} 于 {{time}}"
            }
        },
        richPresence: {
            text: {
                useCustomStatusName: "使用自定义状态名称",
                useFormatArtistSong: "使用“艺人 - 歌曲”格式",
                useFormatSongArtist: "使用“歌曲 - 艺人”格式",
                useArtistNameOnly: "仅使用艺人名称",
                useSongNameOnly: "仅使用歌曲名称",
                useAlbumName: "使用专辑名称",
                useLargeStatsFm: "使用大号 Stats.fm 标志",
                useGenericPlaceholder: "使用通用占位图",
                seriesMovieName: "剧集/电影名称",
                seriesEpisodeTrackMovie: "剧集 - 单集/曲目/电影名称",
                custom: "自定义",
                seriesCover: "剧集封面",
                episodeCover: "单集封面",
                season1Episode1: "第 1 季 第 1 集",
                off: "关闭",
                listening: "正在收听",
                playing: "正在玩",
                streaming: "正在直播",
                watching: "正在观看",
                none: "无",
                navidromeInstanceExposesServer: "Navidrome 实例（会暴露服务器 URL。发送一次性认证。）",
                lastFmApiSends: "Last.fm API（将元数据发送到 last.fm）",
                donTShowShows: "不显示（显示通用收听消息）",
                showStateLineContent: "显示状态行内容",
                showDetailsLineContent: "显示详情行内容",
                displayYourCurrentlyPlaying: "将你正在播放的有声书显示为 Discord Rich Presence。需要你的 AudioBookShelf 服务器 URL、用户名和密码。",
                audiobookshelfServerUrl: "AudioBookShelf 服务器 URL。",
                audiobookshelfUsername: "AudioBookShelf 用户名。",
                audiobookshelfPassword: "AudioBookShelf 密码。",
                connectsToTosuVia: "通过端口 24050 上的 WebSocket 连接到 tosu。无需配置，只需确保 tosu 与 osu! 同时运行。",
                showWhatYouRe: "通过 stats.fm 显示你正在收听的内容。需要你的收听历史为公开。",
                statsFmUsername: "Stats.fm 用户名。",
                customStatusText: "自定义状态文本。",
                statsFm: "Stats.fm",
                nameFormat: "名称格式。",
                fallbackWhenArtIs: "封面缺失时的回退方式。",
                showListeningStatus: "显示收听状态。",
                showStatsFmLogo: "在专辑封面旁显示 Stats.fm 标志。",
                showLinkToStats: "显示 stats.fm 个人资料链接。",
                showLinkToSong: "显示 stats.fm 上的歌曲链接。",
                hideStatsFmPresence: "Spotify 运行时隐藏 stats.fm 状态。",
                hideStatsFmPresence2: "外部 RPC 运行时隐藏 stats.fm 状态。",
                disableDownloadingAlbumArt: "禁用下载专辑封面。",
                showWhatYouRe2: "显示你在 Jellyfin 上正在播放的内容。获取 API 密钥：打开 Jellyfin 网页界面，按 F12 打开开发者工具，进入“网络”标签页，查找发往服务器的请求，找到 Authorization 请求头（Ctrl+F 搜索），你需要 Token='this' 中的部分。你的用户 ID 可在个人资料页 URL 中找到。",
                jellyfinServerUrl: "Jellyfin 服务器 URL。",
                jellyfinApiKey: "Jellyfin API 密钥。",
                authorization: "Authorization",
                jellyfinUserId: "Jellyfin 用户 ID。",
                userIdFromProfile: "个人资料 URL 中的用户 ID",
                nameDisplayFormat: "名称显示格式。",
                customNameTemplate: "自定义名称模板。",
                nameOnJellyfin: "Jellyfin 上的 {name}",
                coverTypeForTv: "电视剧的封面类型。",
                episodeNumberFormat: "集数格式。",
                overrideRichPresenceType: "覆盖 Rich Presence 类型。",
                showEpisodeNameAfter: "在季/集信息后显示单集名称。",
                showPresenceWhenMedia: "媒体暂停时显示状态。",
                hideMediaDetails: "隐藏媒体详情。",
                discordRichPresenceFor: "Gensokyo Radio 的 Discord Rich Presence。启用后即可收听！",
                refreshIntervalInSeconds: "刷新间隔（秒）。",
                showWhatYouRe3: "通过 Navidrome 显示你正在收听的内容。",
                navidromeServerUrlMust: "Navidrome 服务器 URL（必须是公共域名，例如 https://navidrome.example.com）。",
                navidromeUsername: "Navidrome 用户名。",
                navidromePassword: "Navidrome 密码。",
                optionalDiscordApplicationClient: "可选的 Discord 应用客户端 ID。",
                howToFetchAlbum: "如何获取专辑封面。",
                optionalProvideYourOwn: "可选：提供你自己的 Last.fm API 密钥（留空则使用默认）。",
                showNavidromeLogoIn: "在专辑封面右下角显示 Navidrome 标志。",
                showAlbumNameIn: "在状态中显示专辑名称。",
                whichTypeOfActivity: "要显示的活动类型。",
                showTheStateDetails: "在成员列表中显示状态/详情行内容",
                hideRichPresenceWhen: "音乐暂停时隐藏 Rich Presence（而不是显示秒表）",
                theListeningToText: "“正在收听”文本（例如 {artist}）",
                navidrome: "Navidrome",
                theMainLineShowing: "显示正在播放歌曲的主行（例如 {song}）",
                song: "{song}",
                theLineBelowThe: "歌曲名称下方的行（例如 {artist}）",
                artist: "{artist}",
                theAlbumLineE: "专辑行（例如 {album}）",
                album: "{album}",
                enableTabLabelsCurrenttab: "启用 {{TAB_LABELS_currentTab}} 状态。",
                statsFmProfile: "Stats.fm 个人资料",
                viewSong: "查看歌曲",
                showArtistName: "显示艺人名称",
                showTrackName: "显示曲目名称",
                enterValue: "输入一个值"
            },
            name: "RichPresence",
            description: "适用于 AudioBookShelf、osu!、stats.fm、Jellyfin、Navidrome 和 Gensokyo Radio 的统一 Rich Presence 中心。",
            toast: {
                audiobookshelfRpcIsNot: "AudioBookShelf RPC 未配置。",
                jellyfinRpcIsNot: "Jellyfin RPC 未配置。",
                jellyfinReturnedAnInvalid: "Jellyfin 返回了无效响应。你的 API 密钥可能有误。"
            },
            option: {
                enabled: {
                    description: "启用 Rich Presence 服务。",
                    label: "已启用"
                },
                serviceSettings: {
                    description: "服务配置。",
                    label: "服务设置"
                },
                abs_enabled: {
                    description: "启用 AudioBookShelf 状态。",
                    label: "AudioBookShelf 已启用"
                },
                tosu_enabled: {
                    description: "启用 osu!（tosu）状态。",
                    label: "osu!（tosu）已启用"
                },
                sfm_enabled: {
                    description: "启用 stats.fm 状态。",
                    label: "Stats.fm 已启用"
                },
                jf_enabled: {
                    description: "启用 Jellyfin 状态。",
                    label: "Jellyfin 已启用"
                },
                gr_enabled: {
                    description: "启用 Gensokyo Radio 状态。",
                    label: "Gensokyo Radio 已启用"
                },
                nd_enabled: {
                    description: "启用 Navidrome 状态。",
                    label: "Navidrome 已启用"
                },
                abs_serverUrl: {
                    description: "AudioBookShelf 服务器 URL。",
                    label: "AudioBookShelf 服务器 URL"
                },
                abs_username: {
                    description: "AudioBookShelf 用户名。",
                    label: "AudioBookShelf 用户名"
                },
                abs_password: {
                    description: "AudioBookShelf 密码。",
                    label: "AudioBookShelf 密码"
                },
                sfm_username: {
                    description: "Stats.fm 用户名。",
                    label: "Stats.fm 用户名"
                },
                sfm_shareUsername: {
                    description: "显示 stats.fm 个人资料链接。",
                    label: "Stats.fm：分享用户名"
                },
                sfm_shareSong: {
                    description: "显示 stats.fm 上的歌曲链接。",
                    label: "Stats.fm：分享歌曲"
                },
                sfm_hideWithSpotify: {
                    description: "Spotify 运行时隐藏 stats.fm 状态。",
                    label: "Stats.fm：Spotify 时隐藏"
                },
                sfm_hideWithExternalRPC: {
                    description: "外部 RPC 运行时隐藏 stats.fm 状态。",
                    label: "Stats.fm：外部 RPC 时隐藏"
                },
                sfm_statusName: {
                    description: "自定义状态文本。",
                    label: "Stats.fm：状态名称"
                },
                sfm_nameFormat: {
                    description: "名称格式。",
                    label: "Stats.fm：名称格式",
                    statusName: "使用自定义状态名称",
                    artistFirst: "使用“艺人 - 歌曲”格式",
                    songFirst: "使用“歌曲 - 艺人”格式",
                    artistOnly: "仅使用艺人名称",
                    songOnly: "仅使用歌曲名称",
                    albumName: "使用专辑名称"
                },
                sfm_useListeningStatus: {
                    description: "显示收听状态。",
                    label: "Stats.fm：使用收听状态"
                },
                sfm_missingArt: {
                    description: "封面缺失时的回退方式。",
                    label: "Stats.fm：缺失封面",
                    statsFmLogo: "使用大号 Stats.fm 标志",
                    placeholder: "使用通用占位图"
                },
                sfm_showLogo: {
                    description: "在专辑封面旁显示 Stats.fm 标志。",
                    label: "Stats.fm：显示标志"
                },
                sfm_alwaysHideArt: {
                    description: "禁用下载专辑封面。",
                    label: "Stats.fm：始终隐藏封面"
                },
                jf_serverUrl: {
                    description: "Jellyfin 服务器 URL。",
                    label: "Jellyfin 服务器 URL"
                },
                jf_apiKey: {
                    description: "Jellyfin API 密钥。",
                    label: "Jellyfin API 密钥"
                },
                jf_userId: {
                    description: "Jellyfin 用户 ID。",
                    label: "Jellyfin 用户 ID"
                },
                jf_nameDisplay: {
                    description: "名称显示格式。",
                    label: "Jellyfin：名称显示",
                    default: "剧集/电影名称",
                    full: "剧集 - 单集/曲目/电影名称",
                    custom: "自定义"
                },
                jf_customName: {
                    description: "自定义名称模板。",
                    label: "Jellyfin：自定义名称"
                },
                jf_coverType: {
                    description: "电视剧的封面类型。",
                    label: "Jellyfin：封面类型",
                    series: "剧集封面",
                    episode: "单集封面"
                },
                jf_episodeFormat: {
                    description: "集数格式。",
                    label: "Jellyfin：集数格式",
                    long: "S01E01",
                    fulltext: "第 1 季 第 1 集"
                },
                jf_showEpisodeName: {
                    description: "在季/集信息后显示单集名称。",
                    label: "Jellyfin：显示单集名称"
                },
                jf_overrideType: {
                    description: "覆盖 Rich Presence 类型。",
                    label: "Jellyfin：覆盖类型",
                    off: "关闭",
                    listening: "正在收听",
                    playing: "正在玩",
                    streaming: "正在直播",
                    watching: "正在观看"
                },
                jf_showPausedState: {
                    description: "媒体暂停时显示状态。",
                    label: "Jellyfin：显示暂停状态"
                },
                jf_privacyMode: {
                    description: "隐藏媒体详情。",
                    label: "Jellyfin：隐私模式"
                },
                gr_refreshInterval: {
                    description: "刷新间隔（秒）。",
                    label: "Gensokyo Radio：刷新间隔"
                },
                nd_serverUrl: {
                    description: "Navidrome 服务器 URL（例如 https://navidrome.example.com）",
                    label: "Navidrome 服务器 URL"
                },
                nd_username: {
                    description: "Navidrome 用户名",
                    label: "Navidrome 用户名"
                },
                nd_password: {
                    description: "Navidrome 密码",
                    label: "Navidrome 密码"
                },
                nd_clientId: {
                    description: "可选的 Discord 应用客户端 ID",
                    label: "Navidrome：客户端 ID"
                },
                nd_showSmallImage: {
                    description: "在专辑封面右下角显示 Navidrome 标志。",
                    label: "Navidrome：显示小图"
                },
                nd_showAlbum: {
                    description: "在状态中显示专辑名称。",
                    label: "Navidrome：显示专辑"
                },
                nd_albumArtMode: {
                    description: "如何获取专辑封面。",
                    label: "Navidrome：专辑封面模式",
                    none: "无",
                    instance: "Navidrome 实例（向 Discord 暴露服务器 URL，不发送认证）",
                    lastfm: "Last.fm API（将曲目元数据发送到 Last.fm）"
                },
                nd_lastfmApiKey: {
                    description: "可选的 Last.fm API 密钥",
                    label: "Navidrome：Last.fm API 密钥"
                },
                nd_refreshInterval: {
                    description: "刷新间隔（秒）。",
                    label: "Navidrome：刷新间隔"
                },
                nd_activityType: {
                    description: "活动类型",
                    label: "Navidrome：活动类型",
                    listening: "正在收听",
                    playingFixesHiddenLines: "正在玩（修复隐藏的行）",
                    watching: "正在观看"
                },
                nd_nameString: {
                    description: "活动名称格式字符串",
                    label: "Navidrome：名称字符串"
                },
                nd_detailsString: {
                    description: "活动详情格式字符串",
                    label: "Navidrome：详情字符串"
                },
                nd_stateString: {
                    description: "活动状态格式字符串",
                    label: "Navidrome：状态字符串"
                },
                nd_largeTextString: {
                    description: "活动大文本格式字符串",
                    label: "Navidrome：大文本字符串"
                },
                nd_statusDisplayType: {
                    description: "在成员列表中显示曲目/艺人名称",
                    off: "不显示（显示通用收听消息）"
                },
                nd_hideOnPause: {
                    description: "音乐暂停时隐藏 Rich Presence",
                    label: "Navidrome：暂停时隐藏"
                }
            },
            panel: {
                password: "密码",
                statsFmUsername: "stats.fm 用户名",
                customStatusText: "自定义状态文本",
                nameFormat: "姓名格式",
                missingArtFallback: "缺失封面时的回退",
                showListeningStatus: "显示收听状态",
                showStatsFmLogo: "显示 Stats.fm 标志",
                showProfileLink: "显示个人资料链接",
                showSongLink: "显示歌曲链接",
                hideWithSpotify: "Spotify 时隐藏",
                hideWithExternalRpc: "外部 RPC 时隐藏",
                disableAlbumArt: "禁用专辑封面",
                apiKey: "API 密钥",
                userId: "用户身份",
                nameDisplay: "名称显示",
                customNameTemplate: "自定义名称模板",
                coverType: "封面类型",
                episodeFormat: "集数格式",
                overridePresenceType: "覆盖状态类型",
                showEpisodeName: "显示单集名称",
                showWhenPaused: "暂停时显示",
                privacyMode: "隐私模式",
                refreshInterval: "刷新间隔",
                clientId: "客户端 ID",
                albumArtMode: "专辑封面模式",
                lastFmApiKey: "Last.fm API 密钥",
                showSmallImage: "显示小图",
                showAlbum: "显示专辑",
                activityType: "活动类型",
                statusDisplayType: "状态显示类型",
                hideOnPause: "暂停时隐藏",
                activityNameFormat: "活动名称格式",
                detailsFormat: "详情格式",
                stateFormat: "状态格式",
                largeTextFormat: "大文本格式",
                enabled: "启用"
            }
        },
        sedEnhanced: {
            option: {
                regexByDefault: {
                    description: "反转 `r` 标志：使用 `r` 时启用非正则模式，省略时使用正则模式。",
                    label: "默认使用正则"
                }
            },
            name: "SedEnhanced",
            description: "扩展 Discord 简陋的 `sed` 支持。"
        },
        showRolesInChat: {
            option: {
                showBots: {
                    description: "是否在机器人上显示最高身份组。",
                    label: "显示机器人"
                },
                useRoleColor: {
                    description: "图标使用身份组颜色。",
                    label: "使用身份组颜色"
                }
            },
            name: "ShowRolesInChat",
            description: "在聊天消息中于用户名旁显示其最高身份组。可在身份组的右键菜单中隐藏/显示特定身份组。",
            text: {
                chatRoleActions: "聊天身份组操作",
                unhideRolesInChat: "在聊天中取消隐藏身份组",
                showRoleInChat: "在聊天中显示身份组",
                hideRoleInChat: "在聊天中隐藏身份组"
            }
        },
        silenceUsers: {
            option: {
                mutedUserIds: {
                    description: "以逗号分隔的 Discord 用户 ID，将静音其提及和服务器徽标。",
                    label: "已静音用户 ID"
                }
            },
            name: "SilenceUsers",
            description: "静音特定用户的 @提及通知和服务器徽标计数。普通消息和私信不受影响。"
        },
        songLink: {
            text: {
                showIfAvailable: "可用时显示",
                openInDesktopApp: "在桌面应用中打开",
                loadingSongLink: "正在加载歌曲链接...",
                pleaseProvideAMusic: "请提供音乐链接。",
                thisWillTakeA: "这需要一点时间...",
                noAlternativePlatformsFound: "未找到此链接的其他平台。",
                failedToResolveMusic: "无法解析音乐链接",
                logo: "{{name}} 标志"
            },
            option: {
                servicesSettings: {
                    description: "服务设置",
                    label: "服务设置"
                },
                userCountry: {
                    description: "用于查询的国家/地区（两位字母代码）",
                    label: "用户国家/地区"
                },
                includeMetadata: {
                    description: "将曲目标题和艺人名称作为标题包含。",
                    label: "包含元数据"
                }
            },
            name: "SongLink",
            description: "在歌曲链接下方添加流媒体服务按钮",
            command: {
                musiclink: "将音乐链接转换为其他流媒体平台的链接。",
                url: "音乐链接（Spotify、Deezer、YouTube、Tidal、Apple Music、SoundCloud）"
            }
        },
        songSpotlight: {
            name: "SongSpotlight",
            description: "在你的个人资料中展示歌曲",
            text: {
                songSpotlight: "Song Spotlight",
                explicit: "含不雅内容",
                addSong: "添加歌曲",
                addANewSong: "添加新歌曲",
                copyLink: "复制链接",
                removeSong: "移除歌曲",
                failedToLoad: "加载失败！",
                areYouSure: "确定吗？",
                thisWillOverwriteYour: "这将覆盖你当前的歌曲。",
                continue: "继续",
                nevermind: "算了",
                thisWillPermanentlyDelete: "这将永久删除你的所有歌曲。",
                delete: "删除",
                signInToSong: "登录 Song Spotlight",
                songs: "歌曲",
                authorization: "Authorization",
                importFromClipboard: "从剪贴板导入",
                copyToClipboard: "复制到剪贴板",
                signOut: "退出登录",
                deleteSongs: "删除歌曲",
                more: "更多",
                editSongs: "编辑歌曲",
                copyJson: "复制 JSON",
                looksLikeThereS: "这里好像什么都没有！",
                uhOhSongSpotlight: "糟糕！Song Spotlight 加载失败。可查看控制台了解详情。",
                stealSong: "抢走歌曲",
                profileSongs: "个人资料歌曲",
                notEnoughSpace: "空间不足",
                alreadyAdded: "你已经添加过这首歌",
                invalidLink: "无效的链接",
                failedToParseLink: "无法解析链接",
                invalidUrl: "无效的 URL",
                goAddSongs: "还在等什么？快往你的 Song Spotlight 里添加几首歌吧！",
                tellUserToAddSongs: "告诉 {{name}} 往 Song Spotlight 里添加几首歌吧！",
                supportedServices: "Song Spotlight 支持以下服务：",
                viewSongsVia: "你也可以通过",
                viewSongsViaSuffix: "命令查看你的歌曲！",
                coverTooltipOwner: "{{label}} 的 {{sublabel}}",
                coverTooltipBy: "{{sublabel}} 的 {{label}}",
                lastUpdated: "最后更新",
                save: "保存",
                showMore: "再显示 {{count}} 个"
            },
            toast: {
                youHaveBeenSigned: "你已从 Song Spotlight 退出登录。请重新登录。",
                songSpotlightError: "Song Spotlight：{{error}}",
                successfullyAuthorized: "授权成功！",
                failedToPlaySong: "无法播放歌曲试听！",
                addedSong: "已添加歌曲！",
                removedSong: "已移除歌曲！",
                noJsonInClipboard: "剪贴板中没有 JSON！",
                invalidSongSpotlightData: "剪贴板中的 Song Spotlight 数据无效！",
                oneOrMoreImported: "一首或多首导入的歌曲无效。",
                importedSongsFromClipboard: "已从剪贴板导入歌曲！",
                successfullySavedSongs: "已成功保存歌曲！",
                successfullySignedOut: "已成功退出登录！",
                successfullyDeletedSongs: "已成功删除歌曲！",
                youDonTHave: "你的空间不足！",
                uhOhThisSong: "糟糕，这首歌不存在！",
                youAlreadyHaveThis: "你已经添加过这首歌了！",
                youDonTHave2: "你……没有添加这首歌？",
                fetchError: "Song Spotlight 请求出错：{{path}}"
            },
            option: {
                collapseSongList: {
                    description: "将用户资料上的歌曲列表折叠为一个打开独立菜单的按钮",
                    label: "折叠歌曲列表"
                },
                profileSongsLimit: {
                    description: "首次点击用户时显示的歌曲数量",
                    label: "资料歌曲数量上限"
                },
                previewVolume: {
                    description: "歌曲试听播放音量",
                    label: "试听音量"
                }
            }
        },
        stopAutoUnread: {
            name: "StopAutoUnread",
            description: "阻止 Discord 自动将频道的通知设置提升为“所有消息”"
        },
        themeLibrary: {
            text: {
                enablePlugin: "启用插件",
                cancel: "取消",
                holdOn: "等一下！",
                thisThemeRequiresThe: "此主题需要",
                pluginToWorkProperly: "插件才能正常工作！",
                doYouWantTo: "要启用它吗？",
                themeInfo: "主题信息",
                viewSource: "查看源代码",
                close: "关闭",
                download: "下载",
                overwrite: "覆盖",
                keepMyFile: "保留我的文件",
                copyToClipboard: "复制到剪贴板",
                conflict: "冲突！",
                themeSource: "主题源码",
                aThemeWithThe: "同名主题",
                alreadyExists: "已存在",
                inYourThemesDirectory: "于你的主题目录中！要覆盖吗？",
                version: "版本",
                likes: "点赞",
                donate: "捐赠",
                supportServer: "支持服务器",
                source: "源码",
                tags: "标签",
                youCanSupportThe: "你可以通过下方捐赠支持作者！",
                joinDiscordServer: "加入 Discord 服务器",
                viewThemeSource: "查看主题源码",
                showAll: "显示全部",
                showThemes: "显示主题",
                showSnippets: "显示代码片段",
                showMostLiked: "显示最受欢迎",
                showDark: "显示深色",
                showLight: "显示浅色",
                showEnabled: "显示已启用",
                showDisabled: "显示已禁用",
                searchForATheme: "搜索主题...",
                gettingTheLatestThemes: "正在获取最新主题...",
                thisWonTTake: "马上就好！",
                failedToFetchThemes: "获取主题失败",
                couldNotFetchThe: "无法获取主题列表。请稍后再试。",
                wantYourThemeRemoved: "想要移除你的主题？",
                hide: "隐藏",
                noThemeFound: "未找到主题。",
                tryNarrowingYourSearch: "尝试缩小搜索范围。",
                themeLibrary: "主题库",
                successfullyAuthorizedWithThemelibrary: "已成功通过 ThemeLibrary 授权！",
                failedToAuthorizeCheck: "授权失败，请查看控制台",
                successfullyDeauthorizedFromThemelibrary: "已成功取消 ThemeLibrary 授权！",
                failedToDeauthorizeCheck: "取消授权失败，请查看控制台",
                themelibraryAuth: "ThemeLibrary 认证",
                themeRemoval: "主题移除",
                allThemeAuthorsAre: "所有主题作者均在主题信息中署名，且未修改任何源码。如果你仍希望移除你的主题，请点击下方提交 Issue。",
                authorizeWithThemelibrary: "通过 ThemeLibrary 授权",
                copyThemelibraryToken: "复制 ThemeLibrary 令牌",
                deauthorizeThemelibrary: "取消 ThemeLibrary 授权",
                themeDetails: "{{name}} 详情",
                mostLiked: "最受喜欢",
                newestAdditions: "最新添加",
                removeTheme: "移除主题",
                addTheme: "添加主题",
                authors: "作者",
                author: "作者",
                nobodyLikedTheme: "还没有人喜欢这个主题。",
                nobodyLikedSnippet: "还没有人喜欢这个片段。",
                usersLikedTheme: "{{likes}} 位用户喜欢这个主题！",
                usersLikedSnippet: "{{likes}} 位用户喜欢这个片段！",
                openThemeLibrary: "打开主题库",
                lastUpdated: "此主题最后更新于",
                removalInfo: "如果你希望永久移除你的主题，请在以下位置提交 issue：",
                themes: "主题",
                requestRemoval: "申请移除主题",
                pluginSuffix: "插件！"
            },
            toast: {
                downloadedName: "已下载 {{name}}！",
                failedToDownloadName: "下载 {{name}} 失败！（请查看控制台）",
                invalidOrExpiredInvite: "邀请无效或已过期！",
                copiedToClipboard: "已复制到剪贴板",
                noUniquetokenPresentTry: "没有 uniqueToken，请先授权！",
                noTokenToCopy: "没有可复制的令牌，请先授权！",
                copiedToClipboard2: "已复制到剪贴板！"
            },
            name: "ThemeLibrary",
            description: "Plexcord 的主题库。",
            option: {
                hideWarningCard: {
                    description: "隐藏主题库标签页顶部的警告卡片",
                    label: "隐藏警告卡片"
                },
                buttons: {
                    description: "ThemeLibrary 按钮",
                    label: "按钮"
                }
            }
        },
        translatePlus: {
            name: "Translate+",
            description: "Plexcord 的翻译插件，但支持人造语言！",
            text: {
                translate: "翻译",
                dismiss: "忽略",
                translationFailedDueTo: "由于错误，翻译失败。",
                translatedFrom: "翻译自{{lang}}"
            },
            option: {
                target: {
                    description: "目标语言",
                    label: "目标"
                },
                toki: {
                    description: "启用道本语",
                    label: "道本语"
                },
                sitelen: {
                    description: "启用 Sitelen Pona",
                    label: "Sitelen Pona"
                },
                shavian: {
                    description: "启用萧伯纳字母",
                    label: "萧伯纳字母"
                }
            }
        },
        triviaAI: {
            name: "TriviaAI",
            description: "借助 AI 帮你回答知识问答题的插件。",
            text: {
                answerWithAi: "用 AI 回答",
                enterApiKeyHere: "在此输入你的 AI 端点的 API 密钥。",
                enterSystemPrompt: "输入系统提示词。",
                enterYourOpenaiCompatible: "在此输入你的兼容 OpenAI 的 AI 端点。",
                status: "状态 {{status}}"
            },
            option: {
                apiKey: {
                    description: "API 密钥。",
                    label: "API 密钥"
                },
                model: {
                    description: "要使用的 AI 模型。",
                    label: "模型",
                    placeholder: "例如 google/gemini-3-flash-preview、inception/mercury、openai/gpt-5.2-chat 等"
                },
                systemPrompt: {
                    description: "AI 的系统提示词。占位符：{current_user}、{current_time}",
                    label: "系统提示词"
                },
                maxTokens: {
                    description: "响应中的最大 token 数。",
                    label: "最大 token 数"
                },
                endpoint: {
                    description: "兼容 OpenAI 的 AI 端点。",
                    label: "端点"
                },
                context: {
                    description: "作为上下文包含的历史消息数量。",
                    label: "上下文"
                },
                passMessageAuthorName: {
                    description: "将消息传给 AI 时在内容前加上作者名称，可帮助 AI 区分对话中的不同用户。",
                    label: "传递消息作者名称"
                },
                treatSelfAsAssistant: {
                    description: "启用后，你自己的消息会在上下文中被视为助手消息。这会导致某些模型开始生成同人小说。",
                    label: "将自己视为助手"
                },
                mode: {
                    description: "如何处理回答？",
                    label: "模式",
                    autoreply: "自动回复",
                    chatbar: "替换聊天栏文本",
                    bot: "Clyde"
                },
                supportImages: {
                    description: "将图片作为上下文传给 AI（如果有）。并非所有模型都支持。",
                    label: "支持图片"
                },
                sendImagesAsBase64: {
                    description: "以 base64 格式将图片发送给 AI。",
                    label: "以 base64 发送图片"
                }
            },
            toast: {
                triviaaiApiSettingsAre: "TriviaAI：API 设置不完整。",
                errorGettingResponseFrom: "从 AI 模型获取响应时出错"
            }
        },
        unreadCountBadge: {
            option: {
                showOnMutedChannels: {
                    description: "在已静音频道上显示未读数",
                    label: "在已静音频道上显示"
                },
                notificationCountLimit: {
                    description: "显示 +99 而非实际数量",
                    label: "通知数量上限"
                }
            },
            name: "UnreadCountBadge",
            description: "在频道列表中的频道上显示未读消息数徽标"
        },
        userPFP: {
            toast: {
                gifsWebpMustBe: "GIF/WebP 必须通过 URL 添加。请将 GIF/WebP 上传到图床并粘贴链接。"
            },
            text: {
                save: "保存",
                delete: "删除",
                customAvatar: "自定义头像",
                original: "原始",
                local: "本地",
                enterPngGifUrl: "输入 PNG/GIF URL",
                setAvatar: "设置头像",
                usingTheSetAvatar: "设置头像功能仅在本地生效，只有你能看到变化。",
                joinUserpfpServer: "加入 UserPFP 服务器",
                dropHere: "拖放到这里！",
                dragOrClick: "⬆ 拖入图片或点击上传（GIF 或 WebP 请使用 URL）",
                uploadedFile: "（已上传的文件）",
                supportHere: "在此支持 UserPFP"
            },
            option: {
                overrideServerAvatars: {
                    description: "用自定义头像覆盖服务器头像；若未设置自定义头像则使用默认用户头像。",
                    label: "覆盖服务器头像"
                },
                preferNitro: {
                    description: "当默认动态（Nitro）头像和 UserPFP 头像同时存在时使用哪个",
                    label: "优先 Nitro",
                    false: "UserPFP",
                    true: "Nitro"
                },
                databaseSource: {
                    description: "加载数据库的 URL",
                    label: "数据库来源"
                }
            },
            name: "UserPFP",
            description: "允许你为自己和其他用户设置本地静态或动态头像"
        },
        userpluginInstaller: {
            toast: {
                restartToApplyChanges: "重启以应用更改！"
            },
            text: {
                installError: "安装错误",
                done: "完成！",
                later: "稍后",
                updateError: "更新错误",
                checkingForUpdates: "正在检查更新...",
                loadingPlugins: "正在加载插件...",
                pluginUpdatesAvailable: "有可用的插件更新",
                theFollowingPluginsAre: "以下插件已过时：",
                youCanUpdatePlugins: "你可以在下方更新插件。",
                installPlugin: "安装插件",
                userplugininstallerNotFullyLoaded: "UserpluginInstaller 未完全加载",
                youNeedToRestart: "需要重启才能加载原生部分 :)",
                restartNow: "立即重启",
                someUserpluginsAreOut: "部分 UserPlugins 已过时！",
                clickToOpenThe: "点击打开 UserPlugin 更新程序",
                plexcordDoesNotModerate: "Plexcord 不审核用户插件，也不对安装它们可能产生的任何后果负责。",
                onlyInstallUserpluginsFrom: "仅安装你信任的开发者的用户插件。风险完全由你自行承担。",
                setGitPath: "设置 Git 路径",
                installHint: "你可以在此粘贴克隆 URL，从 GitHub、GitLab、Codeberg、git.nin0.dev 或 plugins.nin0.dev 安装插件。",
                enableAndRestart: "启用并重启",
                enableAndRefresh: "启用并刷新",
                tabCounts: "（{{total}} 个，已启用 {{enabled}} 个）",
                possiblyMore: "可能还有更多，因为更新检查尚未完成。",
                alreadyInstalled: "插件已安装，请在下方更新",
                invalidUrl: "网址无效，请阅读上方说明",
                install: "安装",
                restart: "重启",
                refresh: "刷新",
                update: "更新",
                source: "源代码",
                support: "支持",
                managePlugins: "管理插件",
                uninstalledRestart: "{{name}} 已卸载。需要重启才能完全移除该插件。",
                uninstalledRefresh: "{{name}} 已卸载。需要刷新才能完全移除该插件。",
                updatedRestart: "{{name}} 已更新。需要重启才能应用更新。",
                updatedRefresh: "{{name}} 已更新。需要刷新才能应用更新。",
                installedBody: "{{name}} 已成功安装。接下来呢？",
                installedNativeBody: "{{name}} 已成功安装。但由于它使用原生功能，需要重启客户端。接下来呢？"
            },
            option: {
                allowlistedChannels: {
                    description: "以逗号分隔的频道列表，在其中显示“安装插件”按钮。在 Plexcord 用户插件频道中始终显示",
                    label: "允许的频道"
                },
                notifyIfUpdate: {
                    description: "当 UserPlugins 需要更新时显示 Plexcord 通知",
                    label: "有更新时通知"
                },
                neverNotifyForPlugins: {
                    description: "从不为这些插件显示更新通知（仍可在 UserPlugins 标签页中更新）",
                    label: "从不通知的插件"
                }
            },
            name: "UserpluginInstaller",
            description: "一键安装用户插件"
        },
        vCPanelSettings: {
            option: {
                title1: {
                    label: "标题 1"
                },
                uncollapseSettingsByDefault: {
                    description: "默认自动展开语音设置",
                    label: "默认展开设置"
                },
                title2: {
                    label: "标题 2"
                },
                outputVolume: {
                    description: "显示输出音量滑块",
                    label: "输出音量"
                },
                inputVolume: {
                    description: "显示输入音量滑块",
                    label: "输入音量"
                },
                outputDevice: {
                    description: "显示输出设备选择器",
                    label: "输出设备"
                },
                inputDevice: {
                    description: "显示输入设备选择器",
                    label: "输入设备"
                },
                camera: {
                    description: "显示摄像头选择器",
                    label: "摄像头"
                },
                title3: {
                    label: "标题 3"
                },
                showOutputVolumeHeader: {
                    description: "在输出音量滑块上方显示标题",
                    label: "显示输出音量标题"
                },
                showInputVolumeHeader: {
                    description: "在输入音量滑块上方显示标题",
                    label: "显示输入音量标题"
                },
                showOutputDeviceHeader: {
                    description: "在输出设备选择器上方显示标题",
                    label: "显示输出设备标题"
                },
                showInputDeviceHeader: {
                    description: "在输入设备选择器上方显示标题",
                    label: "显示输入设备标题"
                },
                showVideoDeviceHeader: {
                    description: "在摄像头选择器上方显示标题",
                    label: "显示视频设备标题"
                }
            },
            name: "VCPanelSettings",
            description: "直接在语音面板中控制语音设置",
            text: {
                appearance: "外观",
                settingsToShow: "要显示的设置",
                headersToShow: "要显示的标题",
                outputVolume: "输出音量",
                inputVolume: "输入音量",
                outputDevice: "输出设备",
                inputDevice: "输入设备",
                settings: "设置",
                hide: "隐藏"
            }
        },
        voiceMessageTranscriber: {
            text: {
                autoDetect: "自动检测",
                start: "开始",
                transcriptionOptions: "转写选项",
                audioLanguage: "音频语言",
                retry: "重试",
                transcriptionFailed: "转写失败",
                transcribeVoiceMessage: "转写语音消息",
                close: "关闭",
                baseRecommended: "Base（推荐）",
                small: "Small",
                largeV3TurboBest: "Large v3 Turbo（最佳准确度，推荐使用 GPU）",
                transcribe: "转录",
                translateToEnglish: "翻译为英语",
                voiceMessageTranslation: "语音消息翻译",
                voiceMessageTranscription: "语音消息转录",
                hideTimestamps: "隐藏时间戳",
                showTimestamps: "显示时间戳",
                copied: "已复制！",
                copyText: "复制文本",
                downloadingAudio: "正在下载音频...",
                processingAudio: "正在处理音频...",
                loadingModel: "正在加载模型...",
                transcribing: "正在转录...",
                transcription: "转录",
                transcriptionError: "转录错误",
                transcribingInProgress: "正在转录中...",
                initializing: "正在初始化...",
                workerCrashed: "转录进程崩溃",
                workerStopped: "转录进程已停止",
                deleteCache: "删除所有缓存文件（{{size}} MB）",
                action: "操作"
            },
            name: "VoiceMessageTranscriber",
            description: "由 Whisper 驱动的本地语音消息转写",
            option: {
                embed: {
                    description: "直接在语音消息附件中显示转写内容，而不是弹窗。",
                    label: "嵌入"
                },
                maintainHorizontal: {
                    description: "保持嵌入转写框的水平尺寸并纵向扩展。",
                    label: "保持水平"
                },
                selectedModel: {
                    description: "模型大小。",
                    onnxcommunitywhispertiny: "Tiny（最快，准确度最低）"
                },
                useGpu: {
                    description: "在支持时使用 GPU（WebGPU）运行模型。速度快得多，并让大模型可用。不可用时回退到 CPU。",
                    label: "使用 GPU"
                },
                quantized: {
                    description: "在 CPU 上运行时使用量化模型（体积更小，质量略有下降）。",
                    label: "量化"
                },
                deleteModalFiles: {
                    description: "从存储中删除缓存的文件。",
                    label: "删除模型文件"
                }
            }
        },
        voiceMessagesInBackground: {
            name: "VoiceMessagesInBackground",
            description: "通过同步的迷你播放器，在切换聊天时持续播放语音消息。",
            text: {
                voiceMessagesInBackground: "后台语音消息播放器",
                returnToChannelname: "返回 {{channelName}}",
                voiceMessagePosition: "语音消息位置",
                changePlaybackSpeed: "更改播放速度",
                playbackSpeedSpeedTimes: "播放速度 {{speed}} 倍",
                closeVoiceMessagePlayer: "关闭语音消息播放器",
                voiceMessage: "语音消息",
                directMessage: "私信",
                resume: "继续播放语音消息",
                pause: "暂停语音消息"
            }
        },
        webPWA: {
            name: "WebPWA",
            description: "让 Discord 可作为应用（PWA）安装。启用通知徽标、全局快捷键和 Discord 自定义标题栏。",
            text: {
                activities: "活动",
                hopIn: "加入",
                status: "状态",
                emojis: "表情",
                rooms: "房间",
                discord: "Discord",
                platforms: "平台",
                keybindsInfoBefore: "支持自定义全局“按下 X”快捷键。前往",
                keybindsInfoAfter: "进行更改。不支持“按住 X”快捷键。"
            }
        },
        "webRichPresence (arRPC)": {
            name: "WebRichPresence (arRPC)"
        },
        webScreenShare: {
            option: {
                resolution: {
                    description: "分辨率",
                    label: "分辨率"
                },
                frameRate: {
                    description: "帧率",
                    label: "帧率"
                },
                contentHint: {
                    description: "内容提示",
                    label: "内容提示"
                },
                systemAudio: {
                    description: "静音系统音频",
                    label: "系统音频"
                }
            },
            name: "WebScreenShare",
            description: "添加屏幕共享选项菜单。可更改分辨率、帧率、编码提示和系统音频设置。",
            text: {
                stream: "直播",
                streamMuted: "直播已静音",
                streamMode: "直播模式",
                muteStreamAudio: "静音直播音频",
                preventsSystemAudioFrom: "防止系统音频被包含在你的直播中。",
                showStreamPreviews: "显示直播预览",
                allowsOthersToSee: "允许他人在加入前预览你的直播。",
                smootherVideo: "更流畅的视频",
                cleanerText: "更清晰的文字",
                userPreset: "用户预设",
                custom: "自定义",
                gaming: "游戏",
                screenshare: "屏幕共享"
            }
        },
        whitelistedEmojis: {
            option: {
                defaultEmojis: {
                    description: "除非在白名单中，否则在自动补全中隐藏默认 Unicode 表情。",
                    label: "默认表情"
                },
                serverEmojis: {
                    description: "除非在白名单中，否则在自动补全中隐藏服务器自定义表情。",
                    label: "服务器表情"
                },
                disableToasts: {
                    description: "添加或移除表情时不显示提示。",
                    label: "禁用提示"
                },
                whiteListedEmojis: {
                    description: "白名单表情",
                    label: "白名单表情"
                },
                exportEmojis: {
                    description: "导出表情",
                    label: "导出表情"
                },
                importEmojis: {
                    description: "导入表情",
                    label: "导入表情"
                },
                resetEmojis: {
                    description: "重置表情",
                    label: "重置表情"
                }
            },
            name: "WhitelistedEmojis",
            description: "可禁用除白名单之外的所有消息表情。",
            toast: {
                addedLengthEmojisTo: "已将 {{length}} 个表情添加到列表，{{length}} 个已在列表中",
                removedLengthEmojisFrom: "已从列表中移除 {{length}} 个表情",
                nameIsAlreadyIn: "“{{name}}”已在列表中",
                addedNameToThe: "已将“{{name}}”添加到列表",
                nameIsNotIn: "“{{name}}”不在列表中",
                removedNameFromThe: "已将“{{name}}”从列表中移除",
                successfullyExportedEmojis: "已成功导出表情",
                successfullyImportedEmojis: "已成功导入表情",
                invalidJsonData: "无效的 JSON 数据",
                failedToImportEmojis: "导入表情失败：{{err}}",
                resetEmojis: "表情已重置"
            },
            text: {
                areYouSure: "确定吗？",
                thisWillOverwriteYour: "这将覆盖你当前的白名单。",
                import: "导入",
                cancel: "取消",
                thisWillRemoveAll: "这将从白名单中移除所有表情。",
                reset: "重置",
                addAllGuildEmojis: "添加服务器所有表情",
                removeAllGuildEmojis: "移除服务器所有表情",
                noEmojisInThe: "白名单中没有表情。",
                removeAll: "全部移除",
                removeFromWhitelist: "从白名单移除",
                addToWhitelist: "添加到白名单",
                defaultEmojis: "默认表情",
                guildEmojis: "{{name}} 的表情",
                guildFallback: "服务器 {{id}}",
                whitelistedEmojis: "白名单表情",
                remove: "移除"
            }
        },
        wigglyText: {
            option: {
                intensity: {
                    description: "动画强度（px）",
                    label: "强度"
                }
            },
            name: "WigglyText",
            description: "添加一种让文字扭动的新 Markdown 格式。",
            text: {
                leftAndRight: "左右",
                byTyping: "输入",
                upAndDown: "上下",
                inACircle: "绕圈",
                youCanMakeTextWiggle: "你可以通过以下方式让文字摇摆："
            }
        },
        fixDiscordCss: {
            description: "修复 Discord 的 CSS 卡顿"
        },
        directFileDownload: {
            name: "DirectFileDownload",
            description: "直接从 Discord 下载文件，而不是在浏览器中打开"
        },
        githubRepos: {
            text: {
                failedToFetchRepositories: "无法获取仓库",
                personal: "个人",
                unknown: "未知",
                sortedByCount: "按仓库数量排序。点击按 A-Z 排序",
                sortedAlphabetically: "按 A-Z 排序。点击按仓库数量排序",
                mostRepos: "仓库最多"
            }
        }
    }
} as const;

export default translations;
