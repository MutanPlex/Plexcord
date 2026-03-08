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
                label: "迪尔",
                description: "选择您的 Plexcord 首选语言。",
                placeholder: "选择语言"
            }
        },
        location: {
            label: "设置位置",
            description: "Plexcord 确定设置部分的放置位置",
            top: "到顶部",
            nitro: {
                above: "在硝基部分的顶部",
                below: "在硝基部分下"
            },
            activity: {
                above: "以上事件设置",
                below: "在事件设置下"
            },
            bottom: "在高处"
        },
        switches: {
            useQuickCss: {
                label: "启用自定义 CSS",
                description: "从 QuickCSS 编辑器加载自定义 CSS。 这允许您使用自己的风格自定义 Discord 的外观。"
            },
            enableReactDevtools: {
                label: "启用 React 开发者工具",
                description: "启用 React Developer Tools 扩展来调试 Discord 的 React 组件。 对于插件开发很有用。"
            },
            mainWindowFrameless: {
                label: "禁用主窗口框架",
                description: "拆除局部窗框以获得更干净的外观。 您仍然可以通过拖动标题栏区域来移动窗口。"
            },
            frameless: {
                label: "禁用窗框",
                description: "拆除局部窗框以获得更干净的外观。 您仍然可以通过拖动标题栏区域来移动窗口。"
            },
            winNativeTitleBar: {
                label: "使用 Windows 的本机标题栏而不是 Discord 的自定义标题栏",
                description: "将 Discord 的自定义标题栏替换为标准 Windows 标题栏。 这可能会提高与某些窗口管理工具的兼容性。"
            },
            transparent: {
                label: "启用窗口透明度",
                description: "使 Discord 窗口透明。 需要一个支持透明度的主题，否则它不会做任何事情。",
                isWindows: "这将阻止窗口调整大小并阻止您将窗口捕捉到屏幕边缘。",
                notWindows: "这将阻止调整窗口大小。"
            },
            winCtrlQ: {
                label: "保存 Ctrl+Q 快捷方式以关闭 Discord（替代 Alt+F4）",
                description: "添加 Ctrl+Q 作为关闭 Discord 的键盘快捷键。 这提供了 Alt+F4 的替代方法来快速关闭应用程序。"
            },
            disableMinSize: {
                label: "禁用最小窗口大小",
                description: "允许 Discord 窗口调整大小小于其默认最小大小。 对于平铺窗口管理器或小屏幕很有用。"
            }
        },
        quickActions: {
            title: "快速交易",
            description: "您可能想要经常使用的常见操作。 这些快捷方式无需导航菜单即可快速访问常用功能。",
            notificationLog: "通知日志",
            editQuickCSS: "QuickCSS 编辑",
            relaunchDiscord: "重新启动不和谐",
            openSettingsFolder: "打开设置文件夹",
            viewSourceCode: "查看源代码"
        },
        specialCards: {
            donations: {
                title: "捐款",
                subtitle: "感谢您的捐赠！",
                description: "您可以随时通过消息@mutanplex 管理您的权限。",
                button: "捐款",
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
                description: "现在，您因对 Plexcord 做出贡献而获得了一枚很酷的徽章！",
                buttonTitle: "看看你贡献了什么"
            }
        },
        settingsSection: {
            title: "设置",
            description: "配置 Plexcord 与 Discord 的集成和行为方式。 这些设置会影响 Discord 客户端的外观和行为。",
            hintParts: {
                prefix: "通过配置 {{pluginLink}} 设置，您可以自定义此设置部分在 Discord 设置菜单中的显示位置。",
                linkText: "设置插件"
            }
        },
        notifications: {
            title: "通知",
            description: "配置 Plexcord 如何处理通知。 您可以自定义接收警报的时间和方式，或查看过去通知的历史记录。",
            settings: "通知设置",
            viewLog: "查看通知历史记录",
            permissions: {
                denied: {
                    title: "桌面通知权限被拒绝",
                    label: "您已拒绝通知权限。 桌面通知不起作用！"
                }
            },
            style: {
                label: "通知样式",
                description: "有些插件可能会向您显示通知。 它们有两种风格：",
                plexcord: "Plexcord 通知",
                plexcordDesc: "这些是应用内通知",
                desktop: "桌面通知",
                desktopDesc: "本地桌面通知（例如当您收到 ping 时）",
                onlyWhenNotFocused: "仅当 Discord 未聚焦时才使用桌面通知",
                always: {
                    desktop: "始终使用桌面通知",
                    plexcord: "始终使用 Plexcord 通知"
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
                label: "错过通知的数量",
                description: "当您重新关注 Discord 时，将会弹出一条通知，告知您错过的任何通知。",
                whileYou: "当你不在的时候",
                count: "收到 {{count}} 条通知{{s}}",
                s: " "
            },
            timeout: {
                label: "通知超时",
                description: "通知在自动消失之前在屏幕上停留多长时间（以秒为单位）"
            },
            logLimit: {
                label: "通知日志限制",
                description: "通知日志中存储的最大通知数。 设置为 {{disable}} 以禁用通知日志记录，设置为 {{unlimited}} 以不自动删除旧通知"
            },
            opacity: {
                label: "不透明度",
                description: "应用内通知的不透明度"
            },
            maxNotifications: {
                label: "最大通知量",
                description: "同时显示的最大通知数"
            },
            behavior: {
                label: "通知行为",
            },
            disableInStreamerMode: {
                label: "在广播模式下禁用",
                description: "在广播模式下禁用通知"
            },
            renderImages: {
                label: "处理图像",
                description: "渲染通知中的图像"
            },
            streamingTreatment: {
                label: "广播者模式行为",
                description: "共享屏幕时如何处理通知",
                normal: "正常 - 正常显示通知",
                noContent: "无内容 - 隐藏通知正文",
                ignore: "忽略 – 根本不显示通知"
            },
        },
        macVibrancy: {
            title: "窗口闪烁样式（需要重新启动）",
            description: "自定义 macOS 窗口闪烁效果。 这控制 Discord 窗口的模糊和透明度样式。 需要重新启动才能使更改生效。",
            placeholder: "窗口闪烁样式",
            style: {
                no: "没有摇晃",
                underPage: "下页（窗户着色）",
                content: "内容",
                window: "窗户",
                selection: "投票",
                titlebar: "标题栏",
                header: "标题",
                sidebar: "侧边栏",
                tooltip: "工具提示",
                menu: "菜单",
                popover: "弹出窗口",
                fullscreenUI: "全屏UI（透明但略显暗淡）",
                hud: "HUD（最透明）"
            }
        }
    },

    plugins: {
        title: "插件",
        new: "新的",
        unknown: "未知",
        noDescription: "描述不可用。",
        restart: {
            apply: "重新启动以应用更改！",
            required: "需要重启！",
            description: "立即重新启动以应用新的插件和设置",
            following: "以下插件需要重新启动：",
            fully: "有些插件需要重新启动才能完全禁用。",
            would: "您想重新启动吗？",
            remainingCount: "还有 {{count}} 个",
            resetDefault: "重置为默认设置",
            failed: "无法初始化依赖项：",
            button: {
                restart: "重新启动",
                later: "然后！",
                now: "立即重新启动",
                cancel: "取消",
                disableWarning: "禁用警报",
                disableAll: "全部禁用",
                reset: "重置",
                close: "四分之一"
            }
        },
        contributor: {
            contributed: "贡献了",
            modal: {
                contributionsInfo: "{{userName}} {{contributionCount}} {{continuedLink}} 通过开发插件。",
                noContributions: "{{userName}} 尚未开发任何插件。 最有可能以不同的方式{{contributedLink}}！"
            }
        },
        infoModal: {
            description: "您可以通过按齿轮或信息图标来获取有关插件的更多信息",
            settingsInfo: "带齿轮的插件具有可以更改的设置！",
            disableAll: "禁用所有插件"
        },
        error: {
            invalidInput: "提供的输入无效",
            stopping: "停止 {{plugin}} 插件时出现问题",
            starting: "初始化 {{plugin}} 插件时出现问题",
            startDependency: "初始化依赖项时出现问题：{{failures}}",
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
            plextron: "Plextron应用",
            web: "Plextron 应用程序和 Discord 网络版",
            dev: "Plexcord 开发者版本"
        },
        search: {
            looking: "这就是您要找的吗",
            onlyAvailable: "仅在此处可用 ->",
            noCriteria: "未找到符合您搜索条件的插件"
        },
        required: {
            title: "所需插件",
            this: "Plexcord 需要此插件才能工作。",
            by: "该插件需要以下功能才能工作："
        },
        dangerModal: {
            title: "危险行为",
            disablePlugins: "禁用插件",
            disableText: "全部禁用",
            irreversible: "此操作无法撤销！",
            enableBack: "您绝对确定要继续吗？ 您可以稍后再次激活它。",
            undone: "此操作无法撤消。 你确定吗？",
            resetDescription: "您即将将 {{pluginName}} 插件设置重置为其默认值。",
            disable: "您即将禁用 {{enabledPlugins}} 插件！",
            confirmReset: "确认并重置",
            cancel: "取消",
            resetSettings: "重置设置",
            resetText: "重置"
        },
        filters: {
            label: "过滤器",
            placeholder: "搜索插件...",
            option: {
                all: "全部",
                enabled: "积极的",
                disabled: "残疾人",
                new: "新的",
                userplugins: "用户插件",
                api: "API插件"
            }
        },
        pluginModal: {
            noSettings: "该插件没有您可以更改的设置。",
            authors: "作者",
            settings: "设置",
            successfulReset: "{{plugin}}插件的设置已成功重置。",
            enabledStock: "活跃库存附加组件",
            totalStock: "总库存附加品",
            enabledUser: "活跃用户插件",
            totalUser: "用户插件总数",
            info: "查看更多信息",
            source: "查看源代码"
        },
        metadata: {
            api: {
                description: {
                    memberListDecorators: "用于将装饰器添加到成员列表的 API（在服务器和 DM 上）",
                    messageAccessories: "用于向消息添加 props 的 API",
                    messageDecorations: "用于向帖子添加装饰器的 API",
                    chatInputButtons: "用于向聊天条目添加按钮的 API",
                    commands: "任何使用命令的东西都需要API",
                    contextMenu: "用于从上下文菜单添加/删除项目的 API",
                    dynamicImageModal: "允许您在打开图像模式时跳过宽度或高度",
                    menuItemDemangler: "使 Discord 菜单项更具可读性",
                    messageEvents: "使用消息事件的任何事物都需要 API",
                    messagePopover: "用于向消息弹出窗口添加按钮的 API",
                    messageUpdater: "用于更新和重新处理消息的 API",
                    nicknameIcons: "用于向个人资料中的用户名添加图标的 API",
                    notices: "修复自动消除通知的问题",
                    serverList: "修改服务器列表的插件需要API",
                    userSettings: "揭示 Discord 的用户设置、群组和名称的补丁",
                    audioPlayer: "用于播放 Discord 内部音频文件或外部音频链接的 API。",
                    userArea: "用于向用户区域面板添加按钮的 API。"
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
                    plexcord: "Plexcord 参与者",
                    vencord: "Vencord 参与者",
                    userPlugin: "用户插件贡献者"
                },
                context: {
                    title: "徽章选项",
                    copy: {
                        name: "复制徽章名称",
                        link: "复制徽章的图像链接"
                    },
                    refetch: {
                        button: "刷新徽章",
                        success: "徽章已成功更新！"
                    }
                },
                modal: {
                    title: "Plexcord 支架",
                    special: "该徽章是 Plexcord 捐赠者的特权。",
                    description: "请考虑成为捐助者来支持 Plexcord 的发展。 这对我们来说非常有价值！"
                }
            }
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
                    description: "这些是浮动按钮，当您将鼠标悬停在消息上时，它们会出现在右侧"
                }
            },
            button: "此处将显示已激活插件的按钮。"
        }
    },

    patchHelper: {
        title: "补丁助手",
        description: "一款开发工具，可帮助您为 Plexcord 插件创建补丁。",
        fullPatch: {
            label: "谭亚玛",
            description: "将完整的 JSON 补丁粘贴到此处以填充字段"
        },
        find: "布尔",
        match: "匹配",
        replacement: "改变",
        preview: "预览",
        generatedCode: "生成的代码",
        group: "团体",
        diff: "不同之处",
        module: "模块",
        compile: "德尔勒",
        compiled: "编译成功",
        copy: {
            clipboard: "复制到剪贴板",
            codeblock: "复制为代码块"
        },
        error: {
            noMatch: "未找到匹配项。 也许该模块是延迟加载的。",
            multipleMatch: "找到多个匹配项。 请使用更具体的搜索模式。",
            noFind: "没有“查找”字段。",
            noReplacement: "没有“更改”字段。",
            invalidReplacement: "替换字段无效",
            replacementMatch: "“replacement.match”字段不存在",
            replacementReplace: "“replacement.replace”字段不存在",
            replacementMustFunction: "替换必须是一个函数"
        },
        cheatSheet: {
            title: "备忘单",
            identifiers: "自定义正则表达式转义序列匹配标识符（变量名、类名等）",
            dollar: "添加 $",
            entireMatch: "添加所有匹配项",
            beforeMatch: "在匹配之前添加子字符串",
            afterMatch: "在匹配后添加子字符串",
            nthGroup: "添加第 n 个捕获组（$1、$2...）",
            pluginInstance: "添加插件实例"
        },
        replacementEval: {
            label: "流程替换为函数",
            description: "启用此功能后，“替换”将被视为一项功能。"
        }
    },

    sync: {
        title: "备份与恢复",
        warning: "警告",
        warningText: "导入设置文件将覆盖您当前的设置。 如果您想保留当前配置，请务必先导出备份。",
        description: "您可以将 Plexcord 设置导入和导出为 JSON 文件。 通过这种方式，您可以轻松地将您的设置移动到另一台设备，或者在重新安装 Plexcord 或 Discord 后恢复您的设置。",
        successful: "设置已成功导入。 重新启动应用程序以使更改生效！",
        error: {
            failure: "设置导入失败：{{error}}",
            failedExport: "设置导出失败，请检查控制台",
            invalid: "设置无效。 这真的是 Plexcord 调整文件吗？",
            tooLarge: "数据存储太大 - 从备份中排除。 如有必要，请使用“导出数据存储”功能。",
            clearSomeDate: "数据存储很大。 请清除一些插件数据并重试。"
        },
        settings: {
            text: "备份里有什么？",
            quickcss: "自定义 QuickCSS",
            theme: "主题链接",
            plugins: "插件设置",
            datastores: "附加存储库（例如 Timezones 或 IRememberYou）"
        },
        import: {
            title: "导入设置",
            description: "选择以前导出的设置文件来恢复您的配置。 这会将您当前的所有设置替换为备份中的设置。",
            all: "导入所有设置",
            plugins: "埃克伦蒂伊·伊切·阿克塔尔",
            css: "QuickCSS'yi 更多",
            datastore: "导入数据存储"
        },
        export: {
            title: "导出设置",
            description: "您可以将当前的 Plexcord 设置导出到文件以进行备份或传输到其他设备。",
            all: "导出所有设置",
            plugins: "导出插件",
            css: "导出 QuickCSS",
            datastore: "导出数据存储"
        }
    },

    cloud: {
        text: "云",
        title: "设置同步",
        override: "云同步",
        description: "将您的 Plexcord 设置同步到云端。 这使您可以在多个设备上一致地维护配置，而无需手动导入/导出。",
        switchDescription: "启用后，您的设置将同步到云端。 您可以使用以下操作手动同步。",
        settings: "云设置",
        successful: "您的设置已成功同步到云端。",
        updated: "您的设置已更新！ 单击此处重新启动以使更改完全生效！",
        deleted: "设置已从云端删除！",
        integration: {
            title: "云端整合",
            description: "Plexcord 的云集成可让您跨多个设备和 Discord 安装同步您的设置。 您的数据被安全存储，并且可以随时轻松恢复。",
        },
        reauth: "我们注意到另一个客户端启用了云集成！ 由于限制，您需要重新进行身份验证才能继续。 点击此处进入设置页面继续！",
        error: {
            setup: "安装失败（无法检索 OAuth 配置）。",
            secret: "安装失败（未返回密钥）。",
            string: "安装失败（{{error}}）。",
            connect: "云同步已被禁用，因为此帐户未连接到 Plexcord 云应用程序。 您可以通过在云设置中连接该帐户来重新启用该帐户。 （注：将单独存储您的偏好）",
            noSettings: "在云中找不到设置。",
            uptodate: "您的设置是最新的。",
            localNewer: "您的本地设置比云设置更新。",
            delete: "无法删除设置（{{error}}）。",
            api: {
                returned: {
                    delete: "无法删除设置（API 返回 {{status}}）。",
                    to: "无法将设置同步到云（API 返回 {{status}}）。",
                    from: "无法从云同步设置（API 返回 {{status}}）。"
                }
            },
            synchronize: {
                to: "设置无法同步到云端（{{error}}）。",
                from: "无法从云端同步设置（{{error}}）。"
            }
        },
        warning: {
            enableCloudIntegration: "要使用设置同步功能，请启用上面的云集成。"
        },
        danger: {
            title: "危险区",
            description: "永久删除云中的所有数据。 此操作不可逆转，并且会删除所有同步设置以及存储在云基础设施中的任何其他数据。",
            delete: {
                account: {
                    title: "删除云账户",
                    description: "您确定要永久删除您的云帐户和所有关联数据吗？ 此操作无法撤消。",
                    confirm: "删除账户",
                    cancel: "取消"
                }
            }
        },
        notification: {
            title: "云端整合",
            enabled: "启用云集成",
            host: "域{{host}}已添加到权限列表中。 重新启动应用程序以使更改生效。",
            erase: {
                successful: "云数据删除成功",
                failed: "无法删除所有数据（API 返回 {{status}}），请联系支持人员。"
            }
        },
        button: {
            to: "同步至云端",
            from: "从云端同步",
            fromDescription: "这将用云中的设置覆盖您当前的设置。 明智地使用它！",
            delete: "删除云数据",
            enable: "激活云集成",
            reauthorize: "重新授权",
            confirm: "立即重新启动",
            later: "然后！"
        },
        privacy: "保护您的隐私",
        source: "源代码",
        overview: "Plexcord 具有云集成功能，可提供跨设备同步设置等优势。 由于这些 {{privacy}} 和 {{source}} 是通过 AGPL 3.0 许可证提供的，因此您可以将它们托管在您自己的服务器上。",
        authorization: "连接到云端以同步设置。 如果您尚未设置云集成，这将要求授权。",
        backend: {
            title: "云提供商",
            description: "选择您的设置在云中的存储方式。 默认情况下使用 Plexcord Cloud，但如果您愿意，您也可以配置自己的自托管云服务。",
            invalid: "无效网址"
        },
        sync: {
            title: "该设备的同步规则",
            description: "此设置确定如何在此设备和云之间同步设置。 您可以允许更改在两个方向上传输或选择单侧作为主要源。",
            direction: {
                both: "双向同步（更改在两个方向上传输）",
                push: "该设备是源（仅上传）",
                pull: "云源码（仅供下载）",
                manual: "自动同步（手动同步只能使用下面的按钮）"
            }
        }
    },

    changelog: {
        text: "变更说明",
        title: "变更说明",
        description: "您可以在此处找到 Plexcord 的最新更改和更新。",
        by: "作家",
        check: "检查仓库",
        uptodate: "当前的",
        update: "更新",
        noMessage: "没有消息",
        unknown: "未知",
        updatedPlugins: "更新的插件",
        newSettings: "新设置",
        newSettingTooltip: "{{plugin}} 的新设置",
        loading: "加载中...",
        repoUptodate: "仓库已更新",
        fetch: "从仓库带来",
        clear: "清除所有笔记",
        internet: "确保您有互联网连接，然后重试。",
        recent: "最近的变化",
        codeChanges: "代码更改 {{count}} 个新提交",
        updateLogs: "{{count}} 更新说明",
        noCommit: "在您当前的版本中找不到前向提交。 单击“从存储库获取”以检查新更改。",
        previous: "与之前的更新会话一起，提交历史记录和插件更改。",
        modal: {
            description: "查看 Plexcord 的最新更改。 此过程通过直接从存储库获取提交来向您展示新增内容。",
            repository: "德波",
            failed: "接收失败 - 检查控制台",
            current: "可用的：",
            hide: "隐藏笔记",
            show: "显示注释",
            fetch: {
                title: "带来改变",
                description: "检查存储库中的新提交、插件更新和代码更改。 这会将您当前的版本与最新版本进行比较，并向您展示新增内容。",
                newCommit: "这些是自上次发布以来的新提交和插件更新。 您可以看到添加了哪些功能、修复了哪些错误以及更新了哪些插件。",
                confirm: "能",
            }
        },
        commit: {
            available: "提交可用",
            no: "没有新的提交",
            new: "新插件",
            updated: "更新的插件",
            settings: "新设置"
        },
        toast: {
            already: "存储库已经是最新的",
            found: "从存储库中找到 {{count}} 个新提交",
            local: "存储库与您的本地副本保持同步",
            failed: "无法从仓库取出:(",
            cleared: "所有笔记均已清除",
            logCleared: "注释已清除",
            yourLatest: "从上次更新中保存的提交"
        },
        alert: {
            clear: {
                title: "清除所有笔记",
                body: "您确定要清除所有笔记吗？ 此操作无法撤消。",
                confirm: "全部清除",
                confirmColor: "危险",
                cancel: "取消"
            },
            log: {
                title: "清除日志",
                body: "您确定要清除此日志吗？ 此操作无法撤消。",
                confirm: "清除日志",
                confirmColor: "危险",
                cancel: "取消"
            }
        },
        newPlugins: "{{count}} 新插件",
        following: "最近的更新中添加了以下插件：",
        more: "+{{count}} 个新插件"
    },

    csp: {
        restart: "需要重新启动才能应用此更改",
        blocked: {
            resources: "被阻止的资源",
            disallowed: "某些图像、样式或字体已被阻止，因为它们来自未经授权的域。",
            recommended: "强烈建议您将它们移至 GitHub 或 Imgur。 但是，如果您完全信任域，您也可以允许它们。",
            afterAllow: "授予空间权限后，您必须完全关闭并重新启动 {{platform}}（从系统托盘/任务管理器）才能应用更改。",
            allow: "允许",
            url: "被阻止的网址"
        },
        imgur: {
            direct: "Imgur 链接必须是格式为 {{etc}} 的直接链接。",
            copy: "要获得直接链接，请右键单击图像并选择“复制图像地址”。"
        },
        wants: {
            caller: "{{callerName}} 希望允许连接到 {{domain}}",
            detail: "如果您不认识并完全信任 {{domain}}，您应该取消此请求！",
            restart: "您必须完全关闭并重新启动 {{appName}} 才能使更改生效。",
            type: {
                images: "图片",
                styles: "CSS 和主题",
                fonts: "字体"
            },
            content: "允许从 {{domain}} 上传以下类型的内容：",
            understand: "我完全信任 {{domain}} 并了解允许链接的风险。",
            button: {
                cancel: "取消",
                allow: "允许"
            },
            title: "域名权限"
        }
    },

    themes: {
        title: "主题",
        management: "主题管理",
        description: "使用主题自定义 Discord 的外观。 添加本地 .css 文件或直接从 URL 安装主题。 带有齿轮图标的主题具有您可以更改的自定义设置。",
        local: "当地主题",
        new: "新的",
        pinned: "固定的",
        stylus: "触控笔延长杆",
        bd: "BetterDiscord 主题",
        github: "吉图布",
        download: "您在寻找主题吗？ 查看 {{bd}} 或在 {{github}} 上搜索。 从 BetterDiscord 下载时，单击“下载”按钮并将 .theme.css 文件放入主题文件夹中。",
        add: "添加",
        reset: "将设置重置为默认值",
        notCSS: "它不是 CSS 文件。 确保您使用原始链接！",
        okay: "好的！",
        checking: "正在检查中...",
        valid: "有效的！",
        upload: "上传主题",
        openFolder: "打开主题文件夹",
        loadMissing: "安装缺少的主题",
        editQuickCSS: "编辑 QuickCSS",
        editClient: "编辑客户端主题",
        website: "打开网站",
        discord: "不和谐服务器",
        downloadTheme: "下载",
        refresh: "刷新",
        delete: "西尔",
        unknown: {
            title: "未知",
            author: "作者未知",
            theme: "不和谐主题"
        },
        required: "以下插件是必需的但未激活：",
        homepage: "主页",
        support: "支持",
        online: {
            title: "在线主题",
            description: "直接从 URL 而不是本地文件安装主题。 在线主题在来源改变时自动更新；因此您始终拥有最新版本，无需手动下载。",
            enable: "启用在线主题",
            enableDescription: "切换在线主题上传。 禁用后，所有在线主题将被关闭，并且您将无法添加新的在线主题。"
        },
        quickActions: {
            title: "快速交易",
            description: "管理主题的快捷方式。 打开主题文件夹以添加新主题，使用 QuickCSS 进行快速样式编辑或在更改后重新加载主题。"
        },
        error: {
            userscript: "不支持 Userscript 上的主题！",
            stylus: "您可以使用 {{stylus}} 安装主题！",
            expired: "链接无效或过期",
            text: "甚至："
        },
        copy: {
            url: "复制网址",
            copied: "主题网址已复制！",
            settings: "复制主题设置",
            copiedSettings: "主题设置已复制到剪贴板。"
        },
        paste: {
            settings: "粘贴主题设置",
            empty: "您的剪贴板是空的。",
            invalid: "您的剪贴板中没有有效的设置数据。",
            pasted: "主题设置是从剪贴板粘贴的。"
        },
        settings: {
            for: "{{themeName}} 的设置",
        },
        installed: {
            title: "已安装的主题",
            description: "在这里管理您的主题。 本地主题从您的主题文件夹加载，在线主题从 URL 加载。 带有齿轮图标的主题具有可自定义的设置。",
            count: "已安装 {{count}} 个主题（{{localCount}} 本地，{{onlineCount}} 在线）已启用 {{enabledCount}}",
            search: "主题甚至...",
            loading: "主题正在加载...",
            none: "尚未安装主题。 首先，将主题文件添加到主题文件夹或从上面添加在线主题。",
            noCriteria: "未找到符合您的搜索或过滤条件的主题。"
        },
        filter: {
            all: "显示全部",
            online: "在线主题",
            local: "当地主题",
            enabled: "有效的",
            disabled: "残疾人"
        },
        notification: {
            refresh: {
                title: "主题更新",
                error: "主题刷新失败"
            },
            failed: {
                download: "因迪里莱梅迪主题"
            }
        }
    },

    updater: {
        title: "更新程序",
        settings: "更新程序设置",
        updates: "更新",
        updated: "更新了！",
        restart: "单击此处重新启动",
        repaired: "Plexcord 已修复！",
        ok: "好的",
        preferences: {
            title: "更新偏好设置",
            description: "了解 Plexcord 如何保持自身更新。 您可以选择在后台自动更新或在有新更新可用时接收通知。",
        },
        github: {
            local: "您的本地副本具有比远程存储库更新的记录。 当您进行本地更改时通常会发生这种情况。 请在更新前保留或重置它们。"
        },
        error: {
            check: "检查更新时出现问题。 请参阅控制台以获取更多信息。",
            occurred: "发生错误",
            retrieve: "检索更新信息时出现问题 - 检查控制台",
            title: "不哦！",
            tryAgain: "发生错误。 请重试或查看控制台以获取更多信息。",
            command: "未找到 {{path}} 命令。 下载此或重试。",
            code: "代码{{code}}。 请参阅控制台以获取更多信息。",
            running: "执行 {{cmd}} 时出现问题：{{error}}",
            failed: "这也失败了:(请尝试使用安装程序更新或重新安装！"
        },
        available: "1 个可用更新",
        updateAvailable: "Plexcord 更新可用！",
        click: "点击此处查看更新",
        available_plural: "有 {{count}} 个更新",
        current: "当前的！",
        successful: {
            title: "更新成功！",
            body: "更新成功。 重新启动以保存更改！",
            button: {
                confirm: "重新启动",
                cancel: "现在不要！",
                update: "立即更新",
                check: "检查更新"
            },
            noFound: "没有发现更新"
        },
        automatically: {
            label: "自动更新",
            description: "Plexcord 无需确认即可自动下载并安装更新"
        },
        notify: {
            label: "显示自动更新通知",
            description: "Plexcord 自动更新时显示通知"
        },
        repo: "德波",
        repoDescription: "这是 Plexcord 接收更新的 GitHub 存储库。",
        loading: "加载中...",
    },

    components: {
        error: {
            title: "哦不！",
            render: "渲染此组件时发生错误。 在下面和您的主机上查找更多信息。"
        },
        componentFailed: {
            message: "啊!无法呈现该页面。 不过，有一个可用的更新可以解决此问题。 您想立即更新并重新启动吗？"
        },
        quickCSS: {
            title: "打开 QuickCSS 编辑器",
            message: "QuickCSS 编辑器仍然在后台打开。",
            detail: "您仍想关闭 Discord 吗？ 这也将关闭 QuickCSS 编辑器。",
            cancel: "取消",
            close: "无论如何关闭"
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
            permamently: "{{count}} 个通知将被永久删除。 此操作无法撤消。",
            button: {
                confirm: "好的",
                cancel: "取消"
            }
        }
    },

    memberlist: {
        error: {
            render: "渲染 {{key}} 成员列表装饰器时发生错误"
        }
    },

    message: {
        accessory: {
            error: {
                render: "渲染 {{key}} 消息附件时发生错误"
            }
        },
        decoration: {
            error: {
                render: "渲染 {{key}} 消息装饰时出错"
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
            month: "是",
            months: "是",
            week: "星期",
            weeks: "星期",
            day: "天",
            days: "天",
            hour: "片刻",
            hours: "片刻",
            minute: "分钟",
            minutes: "分钟",
            second: "第二",
            seconds: "第二",
            ago: "前",
            s: " "
        }
    },

    plugin: {
        noTrack: {
            name: "无轨",
            description: "禁用 Discord 的跟踪（分析/“科学”）、指标和 Sentry 崩溃报告",
            option: {
                disableAnalytics: {
                    label: "密切分析",
                    description: "禁用 Discord 的跟踪（分析/“科学”）指标和 Sentry 崩溃报告"
                }
            }
        },
        settings: {
            name: "设置",
            description: "增加设置界面和调试信息",
            option: {
                language: {
                    label: "迪尔",
                    description: "选择您的 Plexcord 首选语言。"
                },
                settingsLocation: {
                    label: "设置位置",
                    description: "Plexcord 确定设置部分的放置位置"
                }
            }
        },
        supportHelper: {
            name: "支持助理",
            description: "帮助我们为您提供支持",
            commands: {
                description: {
                    debug: "发送 Plexcord 调试信息",
                    plugins: "发送 Plexcord 插件列表"
                }
            },
            modals: {
                outdated: {
                    title: "等待！",
                    body: "您使用的是旧版本的 Plexcord！ 您的问题很可能已经得到解决。",
                    footer: "请在寻求支持之前更新！",
                    button: {
                        cancel: "查看更新",
                        confirm: "立即更新并重新启动",
                        secondaryConfirm: "我知道我在做什么，否则我无法更新"
                    }
                },
                updater: {
                    title: "等待！",
                    body: "您正在使用 Plexcord 的外部更新版本，我们不提供对此版本的支持！",
                    footer: "请{{官方}}或联系您的套餐提供商以获得支持。",
                    officially: "Plexcord 官方支持版本",
                    button: {
                        cancel: "取消",
                        confirm: "查看下载页面",
                        now: "立即更新"
                    },
                    toast: {
                        success: "成功的！ 正在重新启动...",
                        already: "已经是最新的了！",
                        failed: "更新失败:("
                    }
                },
                custom: {
                    title: "等待！",
                    header: "您正在使用 Plexcord 的专有版本，我们不提供对此版本的支持！",
                    body: "我们仅提供对 {{officialBuild}} 的支持。 要么{{switch}}要么自己解决问题。",
                    footer: "如果您忽视此规则，您获得支持的权利将被撤销。",
                    official: "官方发布",
                    switch: "升级到正式版本",
                    button: {
                        confirm: "我明白",
                        secondaryConfirm: "不要再显示"
                    }
                }
            },
            button: {
                debug: "运行 /plexcord-debug",
                plugins: "运行 /plexcord-plugins",
                snippet: "运行代码片段"
            },
            toast: {
                success: "成功的！",
                failed: "无法运行代码片段:(",
                failedOpenInvite: "无法打开邀请，请检查控制台:(",
                upload: "插件列表加载成功！",
                failedUpload: "无法加载插件列表文件。 请再试一次。",
                unableGenerate: "创建插件列表失败。"
            },
            dm: {
                warning: "请不要向 Plexcord 插件开发者发送私信寻求支持！{{br}}相反，您可以通过加入 {{support}} 服务器来使用 Plexcord 支持频道：{{channel}}"
            },
            alert: {
                title: "警告：插件过多",
                paragraph1: "我们注意到超过 100 个插件被激活。",
                paragraph2: "由于插件数量过多，您可能无法获得支持。",
                paragraph3: "您的问题很可能是由插件冲突引起的。",
                paragraph4: "考虑禁用一些插件来解决问题。",
                paragraph5: "您的插件列表将作为文本文件发送。",
            }
        },
        accountPanelServerProfile: {
            name: "帐户面板服务器配置文件",
            description: "左键单击您的帐户面板，然后右键单击查看您的服务器配置文件",
            option: {
                prioritizeServerProfile: {
                    label: "优先考虑服务器配置文件",
                    description: "当您左键单击帐户面板时优先考虑服务器配置文件"
                }
            },
            context: {
                account: "显示帐户资料",
                server: "显示服务器配置文件",
                prioritize: "优先考虑服务器配置文件"
            }
        },
        altKrispSwitch: {
            name: "AltKrispSwitch",
            description: "使降噪弹出窗口在“无”和“Krisp”之间切换，而不是在“Krisp”和“标准”之间切换。"
        },
        alwaysAnimate: {
            name: "始终动画",
            description: "它使任何可以动画化的东西都动画化。",
            option: {
                icons: {
                    label: "图标",
                    description: "随时为服务器图标、头像、装饰等制作动画。"
                },
                statusEmojis: {
                    label: "状态表情符号",
                    description: "始终让状态表情符号充满活力。"
                },
                serverBanners: {
                    label: "服务器横幅",
                    description: "始终为服务器横幅设置动画。"
                },
                nameplates: {
                    label: "铭牌",
                    description: "始终对铭牌进行动画处理。"
                },
                roleGradients: {
                    label: "角色转换",
                    description: "始终为角色颜色过渡设置动画。"
                }
            }
        },
        alwaysExpandProfiles: {
            name: "总是展开配置文件",
            description: "始终打开扩展的用户配置文件"
        },
        alwaysExpandRoles: {
            name: "始终扩展角色",
            description: "始终扩展个人资料弹出窗口中的角色列表",
            option: {
                hideArrow: {
                    label: "隐藏箭头",
                    description: "隐藏箭头"
                }
            }
        },
        animalese: {
            name: "动物语",
            description: "为每条发送的消息播放动物声音（他们做了很多）",
            option: {
                volume: {
                    label: "声级",
                    description: "动物声音音量"
                },
                speed: {
                    label: "速度",
                    description: "动物语语音速度"
                },
                pitch: {
                    label: "吨",
                    description: "音调倍增器"
                },
                messageLengthLimit: {
                    label: "消息长度限制",
                    description: "处理的最大消息长度"
                },
                processOwnMessages: {
                    label: "处理您自己的消息",
                    description: "也可以用语音表达您自己的消息"
                },
                soundQuality: {
                    label: "音质",
                    description: "使用音质",
                    high: "高的",
                    med: "中等的",
                    low: "低的",
                    lowest: "最低"
                }
            }
        },
        alwaysTrust: {
            name: "永远信任",
            description: "删除恶意域和可疑文件弹出窗口",
            option: {
                domain: {
                    label: "域名",
                    description: "删除“恶意域”弹出窗口"
                },
                file: {
                    label: "文件",
                    description: "删除“潜在危险”的下载弹出窗口"
                },
                noDeleteSafety: {
                    label: "无删除安全性",
                    description: "删除服务器时无需输入服务器名称"
                },
                confirmModal: {
                    label: "确认弹出窗口",
                    description: "“您确定要确认这笔交易吗？”删除弹出窗口"
                }
            },
            alert: {
                title: "删除服务器？",
                body: "这个过程是永久性的，如果不明显的话让我们说明一下！",
                confirm: "西尔",
                cancel: "取消"
            }
        },
        anonymiseFileNames: {
            name: "匿名文件名",
            description: "匿名上传的文件名。",
            option: {
                anonymiseByDefault: {
                    label: "默认匿名",
                    description: "默认情况下匿名化文件名。 如果需要，您可以在文件上传弹出窗口中禁用它。"
                },
                spoilerMessages: {
                    label: "剧透消息",
                    description: "对标记为剧透的文件名称进行匿名处理。"
                },
                method: {
                    label: "方法",
                    description: "匿名化方法",
                    random: "随机字符",
                    consistent: "持续的",
                    timestamp: "时间戳"
                },
                randomisedLength: {
                    label: "随机长度",
                    description: "随机字符长度"
                },
                consistent: {
                    label: "一致的匿名化",
                    description: "一致匿名化的密钥"
                }
            },
            using: {
                anonymous: "使用匿名文件名",
                spoiler: "使用普通文件名"
            },
            spoiler: {
                description: "为您的文件打开或关闭剧透",
                toggle: "为您的文件打开或关闭剧透（默认打开）",
                enabled: "剧透已激活！",
                disabled: "剧透已禁用！"
            }
        },
        appleMusic: {
            name: "Apple Music 丰富的存在",
            description: "Apple Music 将收听状态显示为 Discord Rich Presence",
            about: "对于可自定义的事件格式字符串，您可以使用一些自定义字符串将跟踪数据添加到事件！ {{name}} 替换为曲目名称，{{artist}} 替换为艺术家姓名，{{album}} 替换为专辑名称。",
            button: {
                listen: "Apple Music 丁乐",
                songLink: "在 SongLink 上查看"
            },
            option: {
                activityType: {
                    label: "活动类型",
                    description: "将显示什么类型的活动",
                    listening: "倾听",
                    playing: "玩"
                },
                statusDisplayType: {
                    label: "状态显示类型",
                    description: "在成员列表中显示曲目/艺术家姓名",
                    off: "不显示（显示一般收听消息）",
                    artist: "显示艺术家姓名",
                    track: "显示曲目名称"
                },
                refreshInterval: {
                    label: "刷新间隔",
                    description: "事件刷新间隔（秒）"
                },
                enableTimestamps: {
                    label: "启用时间戳",
                    description: "是否启用时间戳"
                },
                enableButtons: {
                    label: "启用按钮",
                    description: "是否启用按钮"
                },
                nameString: {
                    label: "名称字符串",
                    description: "事件名称格式字符串"
                },
                detailsString: {
                    label: "详细信息字符串",
                    description: "事件详细信息格式字符串"
                },
                stateString: {
                    label: "状态字符串",
                    description: "事件状态格式字符串"
                },
                largeImageType: {
                    label: "大图像类型",
                    description: "活动资​​产大图类型",
                    album: "专辑封面艺术",
                    artist: "艺术家绘画",
                    disabled: "残疾人"
                },
                largeTextString: {
                    label: "大文本字符串",
                    description: "事件实体大文本格式字符串"
                },
                smallImageType: {
                    label: "缩略图类型",
                    description: "事件资产缩略图类型",
                    album: "Apple Music 徽标",
                    artist: "艺术家绘画",
                    disabled: "残疾人"
                },
                smallTextString: {
                    label: "小文本字符串",
                    description: "事件实体小文本格式字符串"
                }
            }
        },
        arRpc: {
            name: "WebRichPresence (arRPC)",
            description: "arRPC 客户端插件，用于在 Discord Web 上启用 RPC（实验性）",
            use: {
                title: "如何使用arRPC",
                enable: "{{link}} 运行服务器，然后激活插件。",
                link: "按照 GitHub 存储库中的说明进行操作"
            },
            toast: {
                connected: "连接到arRPC",
                failed: "无法连接到 arRPC，它是否工作？",
                retry: "再试一次"
            }
        },
        atSomeone: {
            name: "在某人",
            description: "让您可以用 @someone 标记随机的人"
        },
        autoDNDWhilePlaying: {
            name: "播放时自动拨号",
            description: "游戏启动时自动更新在线状态（在线、空闲、请勿打扰）",
            option: {
                statusToSet: {
                    label: "要设置的状态",
                    description: "游戏开始时设置的状态",
                    online: "在线的",
                    dnd: "请勿打扰",
                    idle: "闲置的",
                    invisible: "无形的"
                },
                excludeInvisible: {
                    label: "排除隐形",
                    description: "当您的状态设置为不可见时，防止状态自动更改"
                }
            }
        },
        autoZipper: {
            name: "自动拉链",
            description: "在上传到 Discord 之前自动压缩指定的文件类型和文件夹",
            option: {
                extensions: {
                    label: "扩展",
                    description: "要自动压缩的文件扩展名的逗号分隔列表（例如 .psd、.blend、.exe、.dmg）"
                }
            }
        },
        bannersEverywhere: {
            name: "到处都是横幅",
            description: "在成员列表中显示横幅",
            option: {
                animate: {
                    label: "动画片",
                    description: "使横幅动画化"
                },
                preferNameplate: {
                    label: "选择铭牌",
                    description: "选择铭牌而不是横幅"
                }
            }
        },
        betterActivities: {
            name: "更好的活动",
            description: "在成员列表中显示活动图标并允许显示所有活动",
            option: {
                memberList: {
                    label: "会员名单",
                    description: "在成员列表中显示活动图标"
                },
                iconSize: {
                    label: "图标大小",
                    description: "事件图标的大小"
                },
                specialFirst: {
                    label: "特价第一",
                    description: "首先显示特别活动（目前是 Spotify 和 Twitch）"
                },
                renderGifs: {
                    label: "GIF'yere 做到了",
                    description: "允许渲染 GIF"
                },
                removeGameActivityStatus: {
                    label: "删除游戏状态",
                    description: "删除游戏状态图标和状态"
                },
                userPopout: {
                    label: "用户弹出窗口",
                    description: "在个人资料弹出窗口/侧边栏中显示所有活动"
                },
                hideTooltip: {
                    label: "隐藏工具提示",
                    description: "隐藏各个地方的活动"
                },
                allActivitiesStyle: {
                    label: "所有活动风格",
                    description: "显示所有活动风格",
                    list: "列表",
                    carousel: "滑块",
                    left: "索尔",
                    right: "正确的"
                }
            }
        },
        betterAudioPlayer: {
            name: "更好的音频播放器",
            description: "向音频附件播放器添加摄谱仪和示波器可视化工具",
            option: {
                oscilloscope: {
                    label: "示波器",
                    description: "启用范围可视化工具"
                },
                spectrograph: {
                    label: "光谱仪",
                    description: "启用光谱仪可视化工具"
                },
                oscilloscopeSolidColor: {
                    label: "示波器纯色",
                    description: "使用纯色而不是渐变的范围"
                },
                oscilloscopeColor: {
                    label: "Rengi示波器",
                    description: "启用纯色时示波器的颜色"
                },
                spectrographSolidColor: {
                    label: "光谱仪纯色",
                    description: "使用纯色代替光谱仪的渐变"
                },
                spectrographColor: {
                    label: "光谱仪颜色",
                    description: "启用纯色时光谱仪的颜色"
                },
                forceMoveBelow: {
                    label: "强制移动到底部",
                    description: "强制将可视化工具移动到音量控件下方"
                }
            },
            toast: {
                invalidColorFormat: "{{settingKey}} 的颜色格式无效，请确保其格式为“R、G、B”或“#RRGGBB”"
            }
        },
        betterBanReasons: {
            name: "更好的禁令理由",
            description: "创建在 Discord 禁止窗口中使用的自定义原因和/或默认显示文本输入而不是选项。",
            option: {
                reasons: {
                    label: "原因",
                    description: "你的特殊原因"
                },
                isTextInputDefault: {
                    label: "默认文本输入",
                    description: "默认情况下，它显示文本输入而不是选择菜单。 （相当于点击更多）"
                }
            },
            title: "原因",
            placeholder: "从哪里",
            add: "添加另一个原因"
        },
        betterBlockedUsers: {
            name: "更好地阻止用户",
            description: "它允许您搜索被阻止的用户列表并在设置中选择名称。",
            placeholder: "搜索用户..."
        },
        betterCommands: {
            name: "更好的命令",
            description: "它通过各种改进增强了命令系统。",
            option: {
                autoFillArguments: {
                    label: "自动填充参数",
                    description: "自动用所有参数填充命令，而不仅仅是必需的参数"
                },
                allowNewlinesInCommands: {
                    label: "允许命令中换行",
                    description: "允许在命令条目中换行（CTRL + Shift + Enter）"
                }
            },
            command: {
                refresh: {
                    description: "Discord 原生刷新应用程序命令",
                    user: "尝试续订的特定用户",
                    refreshing: "应用程序命令正在更新...",
                    refreshed: "命令刷新成功！",
                    failed: "刷新命令失败。 检查控制台了解详细信息。"
                }
            }
        },
        betterFolders: {
            name: "更好的文件夹",
            description: "在自定义侧边栏中显示服务器文件夹并添加与文件夹相关的改进",
            option: {
                sidebar: {
                    label: "侧边栏",
                    description: "在自定义侧边栏中的文件夹中显示服务器"
                },
                sidebarAnim: {
                    label: "侧边栏动画",
                    description: "打开文件夹侧边栏时使用动画"
                },
                closeAllFolders: {
                    label: "关闭所有文件夹",
                    description: "选择不在文件夹中的服务器时关闭所有文件夹"
                },
                closeAllHomeButton: {
                    label: "通过主页按钮关闭所有内容",
                    description: "单击主页按钮时关闭所有文件夹"
                },
                closeOthers: {
                    label: "关闭其他",
                    description: "打开文件夹时关闭其他文件夹"
                },
                closeServerFolder: {
                    label: "关闭服务器文件夹",
                    description: "选择文件夹中的服务器时关闭文件夹"
                },
                forceOpen: {
                    label: "强制打开",
                    description: "切换到文件夹服务器时强制打开文件夹"
                },
                keepIcons: {
                    label: "保护图标",
                    description: "当文件夹在 BetterFolders 侧栏中打开时，继续在主服务器栏文件夹中显示服务器图标"
                },
                showFolderIcon: {
                    label: "显示文件夹图标",
                    description: "在 BetterFolders 侧边栏中的文件夹服务器上方显示文件夹图标",
                    never: "绝不",
                    always: "总是",
                    moreThanOne: "当展开多个文件夹时"
                }
            }
        },
        betterGifAltText: {
            name: "BetterGif替代文本",
            description: "将 GIF 替代文本从“GIF”更改为包含 gif 标签/文件名"
        },
        betterGifPicker: {
            name: "更好的Gif选择器",
            description: "使 GIF 选择器默认打开最喜欢的类别",
            option: {
                keepOpen: {
                    label: "保持选择器打开",
                    description: "使 GIF 选择器在选择 GIF 后保持打开状态"
                }
            }
        },
        betterInvites: {
            name: "更好的邀请",
            description: "查看邀请的到期日期，查看邀请者的个人资料，并在加入之前预览服务器（通过单击名称）",
            render: {
                tip: "此邀请将在 {{time}} 后过期",
                header: "{{name}}邀请您访问{{server}}",
                never: "绝不"
            }
        },
        betterNotesBox: {
            name: "更好的笔记盒",
            description: "隐藏注释或禁用拼写检查（在“设置”中配置！！）",
            option: {
                hide: {
                    label: "隐藏注释",
                    description: "隐藏用户弹出窗口中的注释框"
                },
                noSpellCheck: {
                    label: "关闭拼写检查",
                    description: "禁用笔记中的拼写检查"
                }
            }
        },
        betterPlusReacts: {
            name: "更好的反应",
            description: ":emoji: 之前的加号数量表示要添加表情符号的消息"
        },
        betterRoleContext: {
            name: "更好的角色环境",
            description: "添加右键单击用户配置文件中的角色时复制角色颜色/编辑角色/显示角色图标的选项",
            option: {
                roleIconFileFormat: {
                    label: "角色图标文件格式",
                    description: "显示角色图标时使用的文件格式"
                }
            },
            context: {
                copyColor: "复制角色颜色",
                editRole: "编辑角色",
                viewIcon: "查看角色图标"
            }
        },
        betterRoleDot: {
            name: "更好的角色点",
            description: "RoleDot（辅助功能设置）在单击时复制角色颜色。 它还允许同时使用 RoleDot 和颜色名称。",
            option: {
                bothStyles: {
                    label: "这里是伊基风格",
                    description: "显示角色点和彩色名称"
                },
                copyRoleColorInProfilePopout: {
                    label: "在配置文件弹出窗口中复制角色颜色",
                    description: "允许通过单击配置文件弹出窗口中的角色点来复制角色颜色"
                }
            }
        },
        betterSessions: {
            name: "更好的会议",
            description: "增强了会话（设备）菜单。 它可以让您查看准确的时间戳，为每个会话指定唯一的名称，并接收有关新会话的通知。",
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
                    description: "在后台检查新会话并在检测到时显示通知"
                },
                checkInterval: {
                    label: "控制范围",
                    description: "在后台检查新会话的频率（如果启用），以分钟为单位"
                }
            }
        },
        betterSettings: {
            name: "更好的设置",
            description: "改善打开设置菜单的体验",
            option: {
                disableFade: {
                    label: "禁用过渡效果",
                    description: "禁用交叉淡入淡出动画"
                },
                organizeMenu: {
                    label: "编辑菜单",
                    description: "设置将齿轮图标菜单分为几类"
                },
                eagerLoad: {
                    label: "快速加载",
                    description: "消除首次打开菜单时的加载延迟"
                }
            },
            alert: {
                title: "需要重新启动",
                restart: "您更改了需要重新启动的设置。",
                confirm: "立即重新启动",
                cancel: "之后！"
            }
        },
        betterUploadButton: {
            name: "更好的上传按钮",
            description: "一键安装，右键打开菜单"
        },
        biggerStreamPreview: {
            name: "更大的流预览",
            description: "该插件允许您放大广播预览",
            context: {
                viewPreview: "查看发布预览"
            }
        },
        blockKeywords: {
            name: "阻止关键字",
            description: "阻止包含某些用户定义的关键字的消息，就像阻止发送用户一样。",
            option: {
                blockedWords: {
                    label: "被阻止的单词",
                    description: "要阻止的以逗号分隔的单词列表"
                },
                useRegex: {
                    label: "正则表达式库兰",
                    description: "检查消息内容时使用每个值作为正则表达式（高级）"
                },
                caseSensitive: {
                    label: "区分大小写",
                    description: "使用区分大小写的搜索？"
                },
                ignoreBlockedMessages: {
                    label: "忽略被阻止的消息",
                    description: "完全忽略新消息栏（最近消息）"
                }
            }
        },
        blockKrisp: {
            name: "布洛克克里斯普",
            description: "阻止 Krisp 安装"
        },
        blurNSFW: {
            name: "模糊NSFW",
            description: "模糊 NSFW 频道中的附件，直到将其悬停在",
            option: {
                blurAmount: {
                    label: "模糊量",
                    description: "模糊量（以像素为单位）"
                },
                blurAllChannels: {
                    label: "模糊所有通道",
                    description: "模糊所有频道上的附件（不仅仅是 NSFW）"
                }
            }
        },
        bypassPinPrompt: {
            name: "绕过Pin提示",
            description: "使用引脚功能时跳过引脚提示"
        },
        bypassStatus: {
            name: "绕过状态",
            description: "在请勿打扰模式下仍会收到来自某些来源的通知。 您可以右键单击用户/频道/服务器来绕过请勿打扰模式。",
            context: {
                remove: "删除状态跳过",
                add: "添加状态跳过"
            },
            option: {
                guilds: {
                    label: "服务器",
                    description: "允许跳跃的服务器（在服务器上的任何位置进行 ping 操作时接收通知）",
                    placeholder: "用逗号分隔"
                },
                channels: {
                    label: "渠道",
                    description: "允许跳过的频道（在该频道上执行 ping 操作时接收通知）",
                    placeholder: "用逗号分隔"
                },
                users: {
                    label: "用户",
                    description: "允许用户跳过（接收 DM 中发送的所有消息的通知）",
                    placeholder: "用逗号分隔"
                },
                allowOutsideOfDms: {
                    label: "允许外部 DM",
                    description: "允许选定的用户跳过非 DM 状态（类似于频道/服务器跳过，但适用于选定用户发送的所有消息）"
                },
                notificationSound: {
                    label: "通知声音",
                    description: "决定是否播放通知声音"
                },
                respectSilentPings: {
                    label: "尊重静默 Ping",
                    description: "尊重静默 ping（@silent/suppress 通知）"
                },
                statusToUse: {
                    label: "使用案例",
                    description: "用于白名单的状态",
                    online: "在线的",
                    idle: "闲置的",
                    dnd: "请勿打扰",
                    invisible: "无形的"
                }
            }
        },
        cakeDay: {
            name: "蛋糕日",
            description: "使用蛋糕图标跟踪和显示用户生日",
            context: {
                label: "生日",
                setBirthday: "设置生日",
                clearBirthday: "删除生日",
                current: "当前的："
            },
            option: {
                chat: {
                    label: "聊天",
                    description: "在聊天中的用户名旁边显示饼图图标"
                },
                memberList: {
                    label: "会员名单",
                    description: "在成员列表中显示蛋糕图标"
                },
                profileBadge: {
                    label: "个人资料徽章",
                    description: "在用户个人资料上显示蛋糕徽章"
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
                    description: "聊天中的用户名旁边"
                },
                memberList: {
                    label: "会员名单",
                    description: "在会员名单中"
                }
            },
            toast: {
                success: "生日设置成功！",
                invalid: "生日格式无效！ 仅接受 DD/MM。",
                cleared: "生日删除成功！"
            },
            notification: {
                title: "🎂 今天是生日！",
                body: "今天是 {{username}} 的生日！"
            },
            modal: {
                title: "为 {{username}} 设置生日",
                description: "以 DD/MM 格式输入您的生日（例如 25/12）",
                placeholder: "老鹰 25/12",
                current: "当前生日：",
                set: "设置生日",
                cancel: "取消",
                birthday: "今天是我的生日！ 🎂",
                saved: "已保存的生日",
                savedDesc: "尚未记录生日。 右键单击用户即可添加生日！",
                today: "今天",
                remove: "消除",
                loading: "加载中...",
                save: "节省",
                edit: "编辑"
            }
        },
        callTimer: {
            name: "通话定时器",
            description: "显示所有语音通话的通话计时器",
            option: {
                format: {
                    label: "格式",
                    description: "紧凑或人类可读的格式",
                    human: "30克23秒00天42秒"
                },
                allCallTimers: {
                    label: "所有呼叫计时器",
                    description: "显示服务器上所有用户的呼叫计时器"
                },
                showWithoutHover: {
                    label: "无需悬停即可显示",
                    description: "始终显示计时器，无需悬停"
                },
                showRoleColor: {
                    label: "显示角色颜色",
                    description: "显示用户角色颜色（如果启用了 ShowRoleColor 插件）"
                },
                trackSelf: {
                    label: "跟随自己",
                    description: "也显示你自己的计时器"
                },
                showSeconds: {
                    label: "显示秒数",
                    description: "还可以在计时器中显示秒数"
                },
                watchLargeGuilds: {
                    label: "观看大型服务器",
                    description: "跟踪大型服务器上的用户。 如果您使用的大型服务器上有大量活跃的语音用户，这可能会导致延迟。 对多达 2000 个主动语音用户进行测试，没有出现任何问题。"
                },
                fixUI: {
                    label: "用户界面修复",
                    description: "在某些情况下，计时器可能会破坏用户界面。 您可以通过启用此选项来解决此问题。"
                }
            }
        },
        channelBadges: {
            name: "频道徽章",
            description: "根据频道类型添加徽章",
            badge: {
                private: "该频道已被锁定。",
                nsfw: "该频道标记为 NSFW。",
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
                    description: "显示音频徽章"
                },
                showCategoryBadge: {
                    label: "显示类别徽章",
                    description: "显示类别徽章"
                },
                showDirectoryBadge: {
                    label: "显示索引徽章",
                    description: "显示索引徽章"
                },
                showAnnouncementThreadBadge: {
                    label: "显示公告主题徽章",
                    description: "显示公告主题徽章"
                },
                showPublicThreadBadge: {
                    label: "显示一般主题徽章",
                    description: "显示公共主题徽章"
                },
                showPrivateThreadBadge: {
                    label: "显示专题徽章",
                    description: "显示自定义主题徽章"
                },
                showStageBadge: {
                    label: "演出舞台徽章",
                    description: "展示舞台徽章"
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
                    label: "展示您的 NSFW 徽章",
                    description: "显示 NSFW 徽章"
                },
                showLockedBadge: {
                    label: "显示锁定徽章",
                    description: "显示您锁定的徽章"
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
                    label: "声音徽章标签",
                    description: "音频徽章标签",
                    default: "赛斯"
                },
                categoryBadgeLabel: {
                    label: "类别徽章标签",
                    description: "类别徽章标签",
                    default: "类别"
                },
                announcementBadgeLabel: {
                    label: "公告徽章标签",
                    description: "公告徽章标签",
                    default: "哈伯"
                },
                announcementThreadBadgeLabel: {
                    label: "公告主题徽章标签",
                    description: "公告主题徽章标签",
                    default: "新闻主题"
                },
                publicThreadBadgeLabel: {
                    label: "一般主题徽章标签",
                    description: "一般主题徽章标签",
                    default: "主题"
                },
                privateThreadBadgeLabel: {
                    label: "专题徽章标签",
                    description: "自定义主题徽章标签",
                    default: "专题"
                },
                stageBadgeLabel: {
                    label: "舞台徽章标签",
                    description: "舞台徽章标签",
                    default: "场景"
                },
                directoryBadgeLabel: {
                    label: "索引徽章标签",
                    description: "索引徽章标签",
                    default: "指数"
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
                    label: "锁徽章标签",
                    description: "锁徽章标签",
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
                    label: "音频徽章颜色",
                    description: "声音徽章颜色"
                },
                categoryBadgeColor: {
                    label: "类别徽章颜色",
                    description: "类别徽章颜色"
                },
                announcementBadgeColor: {
                    label: "公告徽章颜色",
                    description: "公告徽章颜色"
                },
                announcementThreadBadgeColor: {
                    label: "公告主题徽章颜色",
                    description: "公告主题徽章颜色"
                },
                publicThreadBadgeColor: {
                    label: "通用螺纹徽章颜色",
                    description: "一般主题徽章颜色"
                },
                privateThreadBadgeColor: {
                    label: "专题徽章颜色",
                    description: "自定义主题徽章颜色"
                },
                stageBadgeColor: {
                    label: "舞台徽章颜色",
                    description: "舞台徽章颜色"
                },
                directoryBadgeColor: {
                    label: "索引徽章颜色",
                    description: "索引徽章颜色"
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
                voice: "赛斯",
                category: "类别",
                announcement: "哈伯",
                announcementThread: "新闻主题",
                publicThread: "主题",
                privateThread: "专题",
                stage: "场景",
                directory: "指数",
                forum: "论坛",
                media: "媒体",
                nsfw: "国家科学基金会",
                locked: "锁定",
                rules: "规则",
                unknown: "未知"
            },
            tooltip: {
                locked: "该频道已被锁定。",
                nsfw: "该频道标记为 NSFW。"
            }
        },
        channelTabs: {
            name: "频道选项卡",
            description: "将您经常访问的频道分组到选项卡中，就像在浏览器中一样",
            open: "在新选项卡中打开",
            animation: {
                title: "动画控制",
                description: "启用或禁用频道选项卡的特定动画。 每个选项都可以独立打开或关闭。",
                placeholder: "选择要启用的动画...",
                tabHover: "选项卡悬停效果（删除+缩放）",
                tabSelection: "选定的选项卡抬起动画",
                tabDragDrop: "选项卡拖放（幽灵+重新排序）",
                tabEnterExit: "Tab 进入/退出滚动（创建 + 关闭）",
                tabIconPop: "Icon Pop（选举增长）",
                closeRotation: "关闭按钮 返回",
                plusPulse: "加号按钮脉冲效果",
                mentionGlow: "提及徽章闪耀",
                compactExpand: "紧凑模式扩展",
                selectedBorder: "选定的选项卡蓝色边框",
                selectedBackground: "选定的选项卡背景颜色",
                tabShadows: "选项卡阴影效果",
                tabRepositioning: "选项卡重新定位（软过渡）",
                resizeHandle: "调整淡入淡出手柄大小",
                questActivate: "现役梯度"
            },
            bookmark: {
                label: "耶尔·伊米",
                unknown: "未知用户",
                folder: "文件夹",
                add: "添加到书签",
                edit: "编辑书签",
                delete: "伊米尼·希尔",
                remove: "从书签中删除",
                removeFolder: "从文件夹中删除书签",
                loading: "正在加载书签...",
                noBookmarks: "您没有任何书签。 您可以添加打开的选项卡或通过右键单击隐藏它。",
                quests: "任务",
                messageRequests: "留言请求",
                friends: "朋友们",
                shop: "店铺",
                library: "图书馆",
                discovery: "发现",
                nitro: "硝基",
                icymi: "伊西米",
                activity: "活动",
                specialPage: "特别页面"
            },
            button: {
                save: "节省",
                delete: "西尔",
                cancel: "取消"
            },
            context: {
                label: "ChannelTabs 上下文菜单",
                bookmark: "ChannelTabs 书签上下文菜单",
                tab: "ChannelTabs 选项卡上下文菜单",
                compact: "袖珍的",
                bookmarkBar: "书签栏",
                openAll: "打开书签中的全部内容",
                openNew: "在新选项卡中打开",
                close: {
                    tab: "关闭选项卡",
                    otherTabs: "关闭其他选项卡",
                    tabsToRight: "关闭右侧选项卡",
                    tabsToLeft: "关闭左侧选项卡",
                    reopen: "重新打开关闭的选项卡",
                    allTabs: "关闭所有选项卡"
                }
            },
            error: {
                noLogin: "还没有登录帐户？"
            },
            modal: {
                add: {
                    title: "添加书签到文件夹",
                    select: "选择一个文件夹",
                    create: "创造新的"
                },
                edit: {
                    title: "编辑书签",
                    name: "书签名称",
                    folder: "文件夹颜色"
                },
                delete: {
                    title: "你确定吗？",
                    description: "删除书签文件夹也会删除其中的所有书签。"
                }
            },
            option: {
                onStartup: {
                    label: "最初",
                    description: "选择启动时如何处理选项卡",
                    nothing: "什么也不做（打开朋友选项卡）",
                    remember: "记住上次会话的选项卡",
                    open: "打开特定选项卡"
                },
                tabSet: {
                    label: "标签集"
                },
                noPomeloNames: {
                    label: "没有柚子的名字",
                    description: "使用显示名称代替 DM 用户名"
                },
                showStatusIndicators: {
                    label: "显示状态指示器",
                    description: "显示 DM 的状态指示器"
                },
                showBookmarkBar: {
                    label: "显示书签栏"
                },
                bookmarkNotificationDot: {
                    label: "书签通知点",
                    description: "显示书签的通知点"
                },
                widerTabsAndBookmarks: {
                    label: "大标签和书签",
                    description: "在更大的显示器上展开选项卡和书签"
                },
                tabWidthScale: {
                    label: "制表符宽度比例",
                    description: "选项卡宽度比例（百分比） - 通过拖动选项卡边缘进行调整"
                },
                renderAllTabs: {
                    label: "将所有选项卡保留在内存中",
                    description: "将所有选项卡保留在内存中，以便更快地在选项卡之间切换（滚动和状态被缓存）"
                },
                switchToExistingTab: {
                    label: "切换到现有选项卡",
                    description: "如果您正在浏览的频道已有选项卡，请切换到该选项卡"
                },
                createNewTabIfNotExists: {
                    label: "如果没有选项卡，则创建它",
                    description: "如果频道没有选项卡，请创建一个新选项卡"
                },
                enableRapidNavigation: {
                    label: "启用快速导航",
                    description: "当频道快速更改时，当前选项卡会发生变化，而不是新选项卡。"
                },
                rapidNavigationThreshold: {
                    label: "快速导航阈值",
                    description: "时间间隔（以毫秒为单位）。 如果在此期间打开新频道，现有选项卡将发生更改。"
                },
                tabBarPosition: {
                    label: "标签栏位置",
                    description: "标签栏位置",
                    top: "顶部",
                    bottom: "替代"
                },
                enableNumberKeySwitching: {
                    label: "使用数字键切换选项卡",
                    description: "使用键 1–9 启用选项卡切换"
                },
                numberKeySwitchCount: {
                    label: "数字键选项卡编号",
                    description: "通过数字键访问的选项卡数量 (1–9)"
                },
                enableCloseTabShortcut: {
                    label: "选项卡关闭快捷方式",
                    description: "启用选项卡关闭键盘快捷键"
                },
                enableNewTabShortcut: {
                    label: "新标签快捷方式",
                    description: "启用新标签页打开快捷方式"
                },
                enableTabCycleShortcut: {
                    label: "制表符循环快捷方式",
                    description: "启用选项卡之间切换的快捷方式"
                },
                keybindsSection: {
                    label: "键盘快捷键",
                    description: "单击按钮并按所需的组合键。 支持 CTRL、SHIFT 和 ALT 等修饰符。",
                    title: "键盘快捷键",
                    reset: "全部重置为默认值",
                    closeTab: {
                        label: "关闭选项卡",
                        description: "用于关闭当前选项卡的键盘快捷键"
                    },
                    newTab: {
                        label: "新标签",
                        description: "用于打开包含当前频道的新选项卡的键盘快捷键"
                    },
                    cycleTabsForward: {
                        label: "正向标签循环",
                        description: "转到下一个选项卡的快捷方式（转到第一个选项卡）"
                    },
                    cycleTabsBackward: {
                        label: "后弹跳循环",
                        description: "转到上一个选项卡的快捷方式（转到最后一个选项卡）"
                    }
                },
                closeTabKeybind: {
                    label: "选项卡关闭快捷方式",
                    description: "关闭当前选项卡的快捷方式"
                },
                newTabKeybind: {
                    label: "新标签快捷方式",
                    description: "新标签页打开快捷方式"
                },
                cycleTabForwardKeybind: {
                    label: "正向标签循环",
                    description: "转到下一个选项卡的快捷方式"
                },
                cycleTabBackwardKeybind: {
                    label: "后弹跳循环",
                    description: "转到上一个选项卡的快捷方式"
                },
                showTabNumbers: {
                    label: "显示选项卡编号",
                    description: "在选项卡上显示数字徽章以显示快捷方式"
                },
                tabNumberPosition: {
                    label: "标签编号位置",
                    description: "选项卡上数字徽章的位置",
                    left: "左（图标前）",
                    right: "右（帖子内容）"
                },
                animations: {
                    label: "动画"
                },
                animationHover: {
                    label: "悬停动画",
                    description: "悬停时启用提升和放大效果"
                },
                animationSelection: {
                    label: "选择动画",
                    description: "在选择时启用灯光/帧动画"
                },
                animationDragDrop: {
                    label: "拖放动画",
                    description: "拖动时启用重影效果"
                },
                animationEnterExit: {
                    label: "进入/退出动画",
                    description: "创建/关闭选项卡时滚动动画"
                },
                animationIconPop: {
                    label: "图标流行动画",
                    description: "在选择过程中启用图标增长动画"
                },
                animationCloseRotation: {
                    label: "杀戮按钮返回",
                    description: "为关机图标添加旋转动画"
                },
                animationPlusPulse: {
                    label: "加号按钮脉冲",
                    description: "为新选项卡按钮启用脉冲动画"
                },
                animationMentionGlow: {
                    label: "提及闪闪发光",
                    description: "在提及徽章上启用红光动画"
                },
                animationCompactExpand: {
                    label: "紧凑的扩展动画",
                    description: "实现紧凑选项卡的平滑扩展"
                },
                animationSelectedBorder: {
                    label: "选定的选项卡边框动画",
                    description: "为选定的选项卡启用边框和发光样式动画"
                },
                animationSelectedBackground: {
                    label: "选定的选项卡背景动画",
                    description: "启用所选选项卡背景颜色的动画更改"
                },
                animationTabShadows: {
                    label: "选项卡阴影动画",
                    description: "在选项卡上启用阴影效果"
                },
                animationTabPositioning: {
                    label: "选项卡定位动画",
                    description: "切换选项卡时的平滑过渡动画"
                },
                animationResizeHandle: {
                    label: "调整动画大小",
                    description: "启用大小调整手柄淡入淡出动画"
                },
                animationQuestsActive: {
                    label: "现役动画",
                    description: "当任务处于活动状态时在选项卡中启用渐变动画"
                },
                compactAutoExpandSelected: {
                    label: "选择时自动展开",
                    description: "选择时自动展开紧凑选项卡"
                },
                compactAutoExpandOnHover: {
                    label: "悬停时自动展开",
                    description: "悬停时自动展开紧凑选项卡"
                },
                openInNewTabAutoSwitch: {
                    label: "新标签页打开时自动切换",
                    description: "新标签页打开时自动切换到新标签页"
                },
                bookmarksIndependentFromTabs: {
                    label: "独立书签",
                    description: "书签独立导航，不影响标签栏"
                },
                showResizeHandle: {
                    label: "显示尺寸手柄",
                    description: "显示调整选项卡宽度的手柄"
                },
                openNewTabsInCompactMode: {
                    label: "紧凑地打开新标签",
                    description: "新打开的选项卡默认以紧凑模式打开"
                },
                newTabButtonBehavior: {
                    label: "新标签按钮行为",
                    description: "新选项卡 (+) 按钮跟随选项卡而不是固定在右侧"
                },
                oneTabPerServer: {
                    label: "每服务器一个选项卡",
                    description: "让服务器只有一跳；打开新频道时使用相同的选项卡"
                },
                maxOpenTabs: {
                    label: "最大打开标签数",
                    description: "可以同时打开的最大选项卡数（0 = 无限制）"
                }
            },
            tabs: {
                startup: "主页选项卡",
                currently: "设置当前打开的选项卡"
            },
            toast: {
                notRestoring: "由于启用了 KeepCurrentChannel，选项卡未恢复",
                failed: {
                    restore: "标签页无法恢复",
                    saved: "保存的选项卡无法加载"
                }
            }
        },
        characterCounter: {
            name: "字符计数器",
            description: "在消息框中显示字符计数器",
            option: {
                colorEffects: {
                    label: "色彩效果",
                    description: "接近字符限制时打开或关闭颜色效果"
                }
            }
        },
        cleanChannelGroups: {
            name: "清洁频道组",
            description: "它只是隐藏折叠类别中的所有频道，即使有未读消息也是如此。"
        },
        cleanChannelName: {
            name: "清洁频道名称",
            description: "删除频道名称中的所有表情符号和愚蠢的装饰"
        },
        clearURLs: {
            name: "清除URL",
            description: "自动从您提交的网址中删除跟踪元素"
        },
        clickableRoles: {
            name: "可点击角色",
            description: "您可以通过单击用户个人资料和成员列表中的角色来查看成员具有哪些角色。",
            modal: {
                loading: "会员正在加载中...",
                noMembers: "没有找到会员。",
                unknown: "未知角色"
            }
        },
        clientSideBlock: {
            name: "客户端块",
            description: "允许您在本地对任何用户隐藏几乎所有内容",
            replying: "回复被阻止的消息",
            option: {
                hideVc: {
                    label: "隐藏语音频道",
                    description: "隐藏包含被阻止用户的语音通道"
                },
                usersToBlock: {
                    label: "要阻止的用户",
                    description: "用户 ID 以逗号和空格分隔"
                },
                hideBlockedUsers: {
                    label: "隐藏被阻止的用户",
                    description: "完全隐藏各处被阻止的用户"
                },
                hideBlockedMessages: {
                    label: "隐藏被阻止的消息",
                    description: "完全隐藏来自被阻止用户的消息（与旧的 noblockedmessages 插件相同）"
                },
                hideEmptyRoles: {
                    label: "隐藏空缺职位",
                    description: "如果所有成员都被阻止，则隐藏角色头衔"
                },
                blockedReplyDisplay: {
                    label: "阻止的响应视图",
                    description: "当您回复隐藏的某人时，会显示什么而不是消息",
                    displayText: "显示指示回复隐藏消息的文本",
                    hideReply: "不显示任何内容"
                },
                guildBlackList: {
                    label: "服务器黑名单",
                    description: "将禁用该功能的服务器 ID"
                },
                guildWhiteList: {
                    label: "服务器白名单",
                    description: "将启用该功能的服务器 ID"
                }
            }
        },
        clientTheme: {
            name: "客户主题",
            description: "旧客户端主题实验的重制。 为您的 Discord 客户端主题添加颜色",
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
                    contrast: "所选颜色与文本的对比不佳",
                    nitro: "不支持 Nitro 主题",
                    switch: "切换到 {{oppositeTheme}} 模式",
                    disable: "禁用硝基主题",
                    reset: "重置主题颜色"
                }
            }
        },
        clipsEnhancements: {
            name: "Clips 增强功能",
            description: "添加更多剪辑 FPS 和持续时间选项，以及 RPC 标记！",
            minutes: "一分钟",
            option: {
                richPresenceTagging: {
                    label: "丰富的存在标记",
                    description: "何时应使用现有的 Rich Presence 标记剪辑？",
                    always: "总是",
                    only: "仅当事件名称的开头或结尾匹配时",
                    never: "绝不"
                },
                enableScreenshotKeybind: {
                    label: "启用屏幕截图热键",
                    description: "启用截图热键功能"
                },
                enableVoiceOnlyClips: {
                    label: "仅启用音频剪辑",
                    description: "启用纯音频剪辑（没有视频的音频）"
                },
                enableAdvancedSignals: {
                    label: "启用高级信号",
                    description: "启用高级剪辑信号（自动剪辑触发）"
                },
                ignorePlatformRestriction: {
                    label: "忽略平台限制",
                    description: "允许特定于平台的剪辑（可能会导致保存错误）"
                },
                clipsLink: {
                    label: "剪辑链接",
                    link: "更改剪辑设置中的 FPS 和持续时间选项！"
                }
            }
        },
        colorSighted: {
            name: "色彩视觉",
            description: "从情况中删除色盲友好的图标，就像 2015-2017 Discord 一样"
        },
        commandPalette: {
            name: "命令面板",
            description: "它允许您使用键盘导航界面。",
            action: {
                command: {
                    label: "运行命令",
                    description: "使用 ID 运行另一个调色板命令。 如果您不确定标识符，请使用选择器。"
                },
                settings: {
                    label: "打开设置页面",
                    description: "它直接进入 Discord 设置页面。 从选择器中选择一个页面。"
                },
                url: {
                    label: "打开网址",
                    description: "打开一个链接。 为了获得最佳兼容性，请使用 https:// 链接。"
                },
                macro: {
                    label: "运行宏",
                    description: "按顺序运行一系列命令。 通过选择器添加步骤。"
                }
            },
            category: {
                auto: "自动（使用默认布局）",
                default: {
                    label: "快速交易",
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
                    description: "针对所选通道和服务器的操作"
                },
                updates: {
                    label: "更新",
                    description: "了解 Plexcord 的最新动态"
                },
                discordSettings: {
                    label: "不和谐设置",
                    description: "转到 Discord 配置页面"
                },
                custom: {
                    label: "特殊命令",
                    description: "用户定义的命令选项板条目"
                },
                sessions: {
                    label: "会话工具",
                    description: "管理 Discord 会话的工具"
                },
                guilds: {
                    label: "服务器",
                    description: "快速导航到您的服务器"
                },
                friends: {
                    label: "朋友们",
                    description: "快快去找你的朋友吧"
                },
                action: {
                    label: "行动",
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
                    label: "重新安装不和谐",
                    description: "重新加载当前的 Discord 窗口"
                }
            },
            command: {
                enable: "启用 {{pluginName}}",
                enabled: "{{pluginName}} 已启用",
                disable: "禁用 {{pluginName}}",
                disabled: "{{pluginName}} 已禁用",
                failed: "命令失败：",
                toggleFailed: "无法更改 {{pluginName}}。",
                pluginSettings: "{{pluginName}} 设置",
                untitled: "匿名命令",
                new: "新命令",
                error: {
                    enter: "输入命令 ID 或在下面选择。",
                    noCommand: "没有与该 ID 匹配的命令。"
                },
                discord: {
                    account: "开设我的账户",
                    privacy: "数据和隐私开放",
                    notifications: "打开通知",
                    voice: "打开音频和视频",
                    text: "打开文本和图像",
                    appearance: "开放视野",
                    accessibility: "开放辅助功能",
                    keybinds: "打开按键绑定",
                    advanced: "打开高级设置",
                },
                updates: {
                    check: {
                        label: "检查更新",
                        description: "检查 Plexcord 更新",
                        one: "有更新可用",
                        multiple: "有 {{count}} 个更新",
                        none: "没有更新",
                        failed: "无法检查更新。"
                    },
                    changelog: {
                        label: "查看变更日志",
                        description: "Plexcord 打开变更日志"
                    }
                },
                read: {
                    mark: {
                        label: "{{channelLabel}} 标记为已读"
                    }
                },
                pin: {
                    open: {
                        label: "打开 {{channelLabel}} Pin 图"
                    },
                    toggle: {
                        label: "Toggle 固定最后一个命令"
                    }
                },
                channel: {
                    mute: {
                        label: "{{channelLabel}} 苏斯特",
                        oneHour: "将频道 {{channelLabel}} 静音 1 小时",
                        untilTomorrow: "将频道 {{channelLabel}} 静音直至明天",
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
                        label: "打开 {{guildLabel}} 设置"
                    },
                    navigate: {
                        label: "前往 {{guildLabel}} 服务器"
                    }
                },
                session: {
                    thirtyMinutesDnd: "30分钟请勿打扰",
                    oneHourDnd: "1小时请勿打扰",
                    cancelStatusReset: "取消状态计时器"
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
                    streamer: "切换流光模式",
                    mute: "切换自动静音",
                    deafen: "切换自震耳聋",
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
                        label: "重新安装所有插件",
                        description: "立即尝试重新加载每个活动插件"
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
                noCommand: "未找到命令",
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
                        noCommand: "未找到命令",
                        pin: "引脚命令",
                        unpin: "取消固定"
                    },
                    target: {
                        label: "目标命令ID",
                        placeholder: "输入命令ID",
                        choose: "选择命令"
                    },
                    custom: {
                        label: "特殊命令",
                        description: "1) 为命令命名 · 2) 添加可选描述/关键字/标签/类别 · 3) 选择一个操作并填写详细信息（别名和宏的 ID 必须与现有调色板命令匹配）。",
                        auto: "自动（默认）",
                        expand: "扩张",
                        collapse: "坍塌",
                        collapsed: {
                            label: "票",
                            description: "显示名称",
                            advanced: {
                                hide: "隐藏高级选项",
                                show: "显示高级选项"
                            },
                            subtitle: {
                                label: "解释",
                                placeholder: "可选副标题"
                            },
                            keywords: {
                                label: "关键词",
                                placeholder: "逗号分隔关键字"
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
                        label: "脚本",
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
                core: "葵花籽",
                navigation: "漫步",
                utility: "车辆",
                developer: "开发商",
                customization: "定制",
                plugins: "插件",
                session: "会议",
                context: "语境",
                custom: "特别的",
                guilds: "服务器",
                friends: "朋友们",
                other: "其他"
            },
            toast: {
                chat: {
                    button: {
                        unableToFind: "找不到聊天按钮“{{label}}”。",
                        failedToTrigger: "无法触发 {{label}}。",
                        activated: "{{label}} 已激活。"
                    }
                },
                channel: {
                    mute: {
                        unavailable: "通道静音控制不可用",
                        muted: "频道已经安静了。",
                        unmuted: "频道已静音。",
                        failed: "无法更新通道静音状态。"
                    },
                    dm: {
                        no: "此会话中没有记录 DM 关闭。",
                        reOpened: "上次关闭的 DM 已重新打开。",
                        noAvailable: "DM 不再可用。"
                    }
                },
                command: {
                    loop: "在宏执行中检测到命令循环。",
                    notFound: "找不到 {{commandId}} 命令。",
                    unsupported: "不支持的自定义命令操作。",
                    failedToRun: "无法运行 {{label}}。",
                    notMetadata: "命令面板插件元数据不可用。"
                },
                guild: {
                    mute: {
                        unavailable: "服务器静音控件不可用",
                        muted: "服务器已经安静了。",
                        unmuted: "服务器静音已被删除。",
                        failed: "无法更新服务器静音状态。"
                    },
                    settings: {
                        unable: "无法打开服务器设置。",
                    }
                },
                panel: {
                    pin: {
                        unable: "固定面板无法打开。",
                    }
                },
                status: {
                    reset: {
                        canceled: "计划的状态重置已被取消。",
                        unableToChange: "此时状态无法更改。",
                        reverted: "状态返回为 {{status}}。",
                        dnd: "请勿打扰 {{duration}} 分钟。"
                    },
                    change: {
                        unableToChange: "此时状态无法更改。",
                        changed: "状态更改为 {{status}}。"
                    }
                },
                read: {
                    marked: "{{channelLabel}} 被标记为已读。",
                    failed: "无法将该频道标记为已读。"
                },
                route: {
                    unable: "无法打开{{destination}}。",
                },
                notification: {
                    cleared: "所有通知均已清除。",
                    failed: "无法清除通知。",
                    notSupported: "不支持通知清除。"
                },
                streamerMode: {
                    enabled: "广播者模式已启用。",
                    disabled: "广播者模式已禁用。",
                },
                voice: {
                    micToggle: {
                        muted: "麦克风静音了。",
                        unmuted: "麦克风已打开。"
                    },
                    deafenToggle: {
                        deafened: "你现在聋了。",
                        undeafened: "你不再聋了。"
                    }
                },
                quickCSS: {
                    enabled: "快速 CSS 已启用。",
                    disabled: "快速 CSS 已禁用。"
                },
                transparentity: {
                    enabled: "窗口透明度已启用。",
                    disabled: "窗口透明度被禁用。"
                },
                plugin: {
                    disabled: {
                        label: "{{pluginName}} 已禁用。",
                        disable: "{{pluginName}} 已禁用。 要使用此操作，请启用该插件。"
                    },
                    required: {
                        label: "{{pluginName}} 需要重新启动才能重新安装。"
                    },
                    stop: {
                        failed: "无法停止 {{pluginName}}。"
                    },
                    restart: {
                        failed: "无法重新启动 {{pluginName}}。"
                    },
                    reload: {
                        label: "{{pluginName}} 已重新加载。",
                        noPlugin: "没有重新安装任何插件。",
                        reloaded: "重新安装了 {{count}} 个插件。"
                    },
                    toggle: {
                        enabled: "{{changed}} 插件已激活。",
                        disabled: "{{changed}} 插件已禁用。",
                        noChanged: "任何插件的状态都没有改变。"
                    },
                    run: {
                        failed: {
                            label: "无法运行 {{pluginName}}：{{actionLabel}}。"
                        }
                    }
                }
            },
            display: {
                channel: {
                    current: "当前频道",
                    group: "小组DM",
                    direct: "私信"
                },
                guild: {
                    current: "当前服务器",
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
                    description: "调色板视图",
                    classic: "经典的",
                    polished: "抛光（现代）"
                },
                showTags: {
                    label: "显示标签",
                    description: "显示命令标签"
                },
                enableTagFilter: {
                    label: "启用标签过滤器",
                    description: "显示标签过滤栏"
                },
                customCommands: {
                    label: "特殊命令",
                    description: "管理自定义命令选项板条目"
                }
            },
            template: {
                alias: {
                    label: "昵称命令",
                    description: "反映现有命令"
                },
                settings: {
                    label: "设置",
                    description: "打开不和谐设置"
                },
                url: {
                    label: "联系",
                    description: "打开外部 URL"
                },
                macro: {
                    label: "宏",
                    description: "运行一系列命令"
                }
            }
        },
        consoleJanitor: {
            name: "控制台管理员",
            description: "禁用烦人的控制台消息/错误",
            option: {
                disableLoggers: {
                    label: "禁用记录器",
                    description: "禁用 Discord 的记录器"
                },
                disableSpotifyLogger: {
                    label: "禁用 Spotify 记录器",
                    description: "禁用泄露帐户信息和访问密钥的 Spotify 记录器"
                },
                whitelistedLoggers: {
                    label: "白名单记录器",
                    description: "即使其他记录器被隐藏，分号 (;) 分隔的记录器列表也将被允许"
                },
                allowLevel: {
                    label: "允许水平",
                    description: "始终允许这些类型的记录器",
                    filter: "过滤器列表"
                }
            }
        },
        consoleShortcuts: {
            name: "控制台快捷键",
            description: "为窗口上的许多内容添加更短的快捷方式。 运行列表的“shortcutList”。"
        },
        contentWarning: {
            name: "内容警告",
            description: "默认情况下启用某些触发词模糊。 单击模糊的内容使其可见。",
            option: {
                flagged: {
                    label: "标记",
                    flagged: "标记词",
                    placeholder: "单词"
                },
                onClick: {
                    label: "点击它",
                    description: "单击时显示内容，而不仅仅是鼠标悬停时显示内容"
                }
            }
        },
        copyEmojiMarkdown: {
            name: "复制EmojiMarkdown",
            description: "允许您将表情符号复制为格式化文本 (<a:blob_pwease:1402403381900742737>)",
            option: {
                copyUnicode: {
                    label: "统一码副本",
                    description: "复制原始 unicode 字符而不是 :name: 作为默认表情符号 (👽)"
                }
            },
            context: {
                copy: "复制表情符号 Markdown"
            },
            toast: {
                success: "成功的！ 表情符号的降价已被复制。"
            }
        },
        copyFileContents: {
            name: "复制文件内容",
            description: "向文本文件附件添加一个按钮以复制其内容",
            copied: "复制了！",
            large: "文件太大，无法复制。",
            copyFileContents: "复制文件内容"
        },
        copyProfileColors: {
            name: "复制配置文件颜色",
            description: "一个将用户的个人资料渐变颜色复制到剪贴板的插件。",
            copy: "复制配置文件颜色",
            toast: {
                noColor: "未找到配置文件颜色！",
                copied: "配置文件颜色已复制到剪贴板！",
                error: "复制配置文件颜色时出错！"
            }
        },
        copyStatusUrls: {
            name: "复制状态 URL",
            description: "右键单击时复制用户的状态 URL",
            toast: {
                copied: "已复制网址",
                error: "复制 URL 时出错，请检查控制台以获取更多信息"
            }
        },
        copyStickerLinks: {
            name: "复制贴纸链接",
            description: "添加复制和打开贴纸链接的功能",
            context: {
                copy: "复制链接",
                open: "打开链接"
            },
            toast: {
                success: "链接已复制！"
            }
        },
        copyUserMention: {
            name: "复制用户提及",
            description: "向用户上下文菜单添加一个按钮以复制用户的提及。 与 ValidUser 配合使用效果最佳。",
            context: {
                copy: "复制用户提及"
            }
        },
        copyUserURLs: {
            name: "复制用户 URL",
            description: "将“复制用户 URL”选项添加到用户上下文菜单。",
            context: {
                copy: "复制用户网址"
            }
        },
        crashHandler: {
            name: "崩溃处理程序",
            description: "帮助插件来管理崩溃，如果可能的话，无需重新启动即可从崩溃中恢复",
            option: {
                attemptToPreventCrashes: {
                    label: "尝试防止崩溃",
                    description: "尝试防止 Discord 崩溃？"
                },
                attemptToNavigateToHome: {
                    label: "尝试重定向到主页",
                    description: "尝试在崩溃后恢复中重定向到主选项卡。"
                }
            },
            toast: {
                crashed: {
                    title: "不和谐崩溃了！",
                    body: "糟糕 :( Discord 短时间内崩溃了两次，不会进行恢复尝试。点击此处加入支持服务器！",
                    update: "哦不，Discord 刚刚崩溃了……但好消息是，有一个 Plexcord 更新可以解决这个问题！ 您想现在更新吗？",
                    recover: "正在尝试恢复...单击此处并加入支持服务器！",
                    invalid: "邀请链接无效或过期。"
                }
            }
        },
        ctrlEnterSend: {
            name: "CtrlEnter发送",
            description: "使用Ctrl+Enter发送消息（可自定义）",
            option: {
                submitRule: {
                    label: "发帖规则",
                    description: "消息如何发送",
                    ctrlEnter: "Ctrl+Enter（Enter 或 Shift+Enter 换行）（在 macOS 上为 cmd+enter）",
                    shiftEnter: "Shift+Enter（输入换行）",
                    enter: "Enter（Shift+Enter 换行；Discord 默认值）"
                },
                sendMessageInTheMiddleOfACodeBlock: {
                    label: "在代码块中间发送消息",
                    description: "在代码块中间发送消息"
                }
            }
        },
        cursorBuddy: {
            name: "光标好友",
            description: "添加一个跟随光标的精灵。",
            modal: {
                furColor: "毛皮颜色",
                outlineColor: "阿纳哈特·伦吉"
            },
            option: {
                buddy: {
                    label: "伙伴",
                    description: "选择光标好友",
                    oneko: "好的",
                    fathorse: "肥马"
                },
                speed: {
                    label: "速度",
                    description: "你好友的速度",
                    invalid: "速度必须大于0"
                },
                fps: {
                    label: "帧率 (FPS)",
                    description: "你好友的帧速率",
                    invalid: "帧率必须大于0"
                },
                onekoSection: {
                    label: "好的"
                },
                furColor: {
                    label: "毛皮颜色",
                    description: "oneko 的毛皮六角形颜色"
                },
                outlineColor: {
                    label: "阿纳哈特·伦吉",
                    description: "Oneko 的轮廓六角形颜色"
                },
                fathorseSection: {
                    label: "肥马"
                },
                size: {
                    label: "方面",
                    description: "肥马的尺寸",
                    invalid: "大小必须大于 0"
                },
                fade: {
                    label: "褪色",
                    description: "当光标接近时马是否消失"
                },
                freeroam: {
                    label: "自由漫游",
                    description: "马空闲时是否可以自由漫步"
                },
                shake: {
                    label: "解雇",
                    description: "马行走时是否会晃动窗户"
                }
            }
        },
        customFolderIcons: {
            name: "自定义文件夹图标",
            description: "使用任意 png 自定义文件夹图标",
            option: {
                solidIcon: {
                    label: "平面图标",
                    description: "使用纯色背景作为图像的背景"
                },
                folderIcons: {
                    label: "文件夹图标",
                    description: "文件夹图标设置"
                }
            },
            modal: {
                change: "更改文件夹图标大小",
                save: "节省",
                unset: "消除",
                set: "设置新图标",
                hover: "将其设置为刷新后，您可能需要将鼠标悬停在该文件夹上。"
            }
        },
        customIdle: {
            name: "自定义空闲",
            description: "允许您设置 Discord 进入空闲模式之前的时间量（或禁用自动空闲模式）",
            backOnline: "欢迎回来！ 单击按钮即可上网。 单击 X 可保持空闲状态，直至重新加载。",
            exit: "退出空闲状态",
            option: {
                idleTimeout: {
                    label: "空闲超时",
                    description: "Discord 进入空闲模式之前的分钟数（0 表示禁用自动空闲模式）"
                },
                remainInIdle: {
                    label: "保持闲置",
                    description: "当您返回 Discord 时，请保持空闲状态，直到您确认要上网"
                }
            }
        },
        customRPC: {
            name: "自定义RPC",
            description: "将完全可定制的 Rich Presence 添加到您的 Discord 个人资料中",
            goTo: "通过访问{{portal}}创建应用程序并获取应用程序ID。",
            upload: "通过从 Rich Presence 选项卡上传图像来获取图像密钥。",
            image: "如果您想使用图像链接，请下载图像并将其上传到 {{imgur}}，然后右键单击图像并使用“复制图像地址”来获取链接。",
            button: "您在个人资料上看不到自己的按钮，但其他人可以正常看到它们。",
            font: "一些奇怪的 unicode 字母（'𝖇ö𝖞𝖑𝖊 𝖞𝖆𝖟ı𝖑𝖆𝖗'）可能会导致 Rich Presence 不出现，请尝试使用普通字母。",
            placeholder: "输入一个值",
            select: "选择一个选项",
            error: {
                appIdInvalid: "申请 ID 不是有效号码。",
                notice: "警告",
                sharing: "未启用事件共享，人们将无法看到您的私人丰富状态！",
                enable: "激活",
                validStream: "帖子链接必须是有效的 URL。",
                mustBeURL: "它必须是有效的 URL。",
                streamCharacters: "帖子链接不得超过 512 个字符。",
                dontUse: "不要使用 Discord 链接。 请改用 Imgur 图像链接。",
                imgur: "Imgur 链接必须直接指向图像（例如：https://i.imgur.com/...）。 右键单击图像，然后单击“复制图像地址”。",
                tenor: "Tenor 链接必须直接指向图像（例如：https://media.tenor.com/...）。 右键单击 GIF，然后单击“复制图像地址”。",
                required: "此字段是必需的。",
                tooLong: "长度不得超过 {{maxLength}} 个字符。",
                mustBeNumber: "它必须是一个数字。",
                mustBePositive: "它必须是一个正数。",
                startTimeInvalid: "开始时间必须大于 0。",
                endTimeInvalid: "结束时间必须大于 0。"
            },
            option: {
                appId: {
                    label: "应用程序ID",
                    description: "应用程序 ID（必填）"
                },
                appName: {
                    label: "应用名称",
                    description: "应用程序名称（必填）"
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
                    label: "硬粒小麦",
                    description: "状态（第 2 行）"
                },
                stateURL: {
                    label: "状态网址",
                    description: "可点击 URL 查看状态"
                },
                partySize: {
                    label: "团体规模",
                    description: "当前组大小（必须与最大组大小结合使用）"
                },
                partyMax: {
                    label: "最大团体人数",
                    description: "最大组大小（必须与当前组大小一起使用）"
                },
                type: {
                    label: "事件类型",
                    description: "事件类型",
                    playing: "玩",
                    streaming: "广播",
                    listening: "倾听",
                    watching: "观看",
                    competing: "赛车"
                },
                streamLink: {
                    label: "发布链接",
                    description: "链接至 Twitch.tv 或 Youtube.com（仅适用于广播活动类型）"
                },
                timestampMode: {
                    label: "时间戳模式",
                    description: "时间戳应该表明什么",
                    none: "没有任何",
                    sinceDiscordOpen: "自 Discord 开放以来",
                    sameAsCurrentTime: "与您当前时间相同（24小时后不会重置）",
                    custom: "特殊时期"
                },
                startTime: {
                    label: "开始时间（以毫秒为单位）",
                    description: "开始时间戳（仅适用于自定义时间模式）"
                },
                endTime: {
                    label: "结束时间（以毫秒为单位）",
                    description: "结束时间戳（仅适用于自定义时间模式）"
                },
                imageBig: {
                    label: "大视觉钥匙",
                    description: "大视觉键（必须安装在 Rich Presence 选项卡中）"
                },
                imageBigTooltip: {
                    label: "大视觉线索",
                    description: "将鼠标悬停在较大图像上时出现的提示"
                },
                imageBigURL: {
                    label: "大图片网址",
                    description: "大图可点击 URL"
                },
                imageSmall: {
                    label: "小型视觉开关",
                    description: "小视觉键（必须安装在 Rich Presence 选项卡中）"
                },
                imageSmallTooltip: {
                    label: "视觉线索很少",
                    description: "将鼠标悬停在缩略图上时出现的提示"
                },
                imageSmallURL: {
                    label: "缩略图 URL",
                    description: "小图片可点击 URL"
                },
                buttonOneText: {
                    label: "布顿 1 梅特尼",
                    description: "按钮 1 梅尼"
                },
                buttonOneURL: {
                    label: "按钮 1 网址",
                    description: "按钮1连接"
                },
                buttonTwoText: {
                    label: "布顿 2 梅特尼",
                    description: "按钮 2 梅尼"
                },
                buttonTwoURL: {
                    label: "按钮 2 网址",
                    description: "按钮2连接"
                }
            }
        },
        customSounds: {
            name: "自定义声音",
            description: "自定义 Discord 的声音。",
            search: "搜索声音",
            placeholder: "按姓名或 ID 搜索",
            import: "伊切·阿克塔尔",
            export: "出口",
            reset: "全部重置",
            debug: "调试",
            toast: {
                error: "加载自定义音频文件时出错",
                exported: "已导出 {{count}} 个设置（不包括音频文件）",
                imported: "设置导入成功",
                importError: "导入设置时发生错误。 检查控制台了解详细信息。",
                reset: "所有声音已成功重置！",
                overrideDescription: "{{soundName}} 声音已更改",
                previewSound: "播放声音时发生错误。",
                playing: "无法播放自定义声音。 该文件可能已损坏。",
                invalidFile: "没有用于预览的自定义音频文件",
                uploaded: "文件上传成功：{{fileName}}",
                uploadedError: "上传文件时发生错误：{{error}}",
                invalidExtension: "文件类型无效。 请上传音频文件。",
                uploading: "正在加载文件...",
                deleted: "文件已成功删除",
                deleteError: "删除文件时发生错误。",
                loadingError: "加载自定义音频文件时出错"
            },
            button: {
                preview: "预览",
                stop: "流动",
                volume: "赛斯",
                soundSource: "音源",
                customFile: "特殊档案",
                uploadNew: "新上传",
                delete: "删除选定的文件"
            },
            option: {
                default: "默认",
                custom: "特别的",
                select: "选择一个文件..."
            },
            type: {
                activityEnd: "活动结束",
                activityLaunch: "活动开始",
                activityUserJoin: "用户参与活动",
                activityUserLeft: "用户离开活动",
                asmrMessage: "ASMR 消息",
                bitMessage: "位消息",
                bopMessage: "波普消息",
                callCalling: "搜索正在进行中",
                callRinging: "来电铃声",
                clipError: "剪辑错误",
                clipSave: "剪辑已保存",
                ddrDown: "DDR下降",
                ddrLeft: "DDR溶胶",
                ddrRight: "DDR右",
                ddrUp: "DDR 上行",
                deafen: "震耳欲聋",
                discodo: "光盘",
                disconnect: "已断开连接",
                duckyMessage: "鸭子留言",
                hangStatusSelect: "暂停状态选择",
                highfiveClap: "高五掌声",
                highfiveWhistle: "高五口哨",
                humanMan: "人类的人",
                lofiMessage: "低保真讯息",
                mention1: "提及 1 (@role)",
                mention2: "提及 2（@everyone）",
                mention3: "提及 3（@here）",
                message1: "消息 1（一般）",
                message2: "消息2（服务器响应）",
                message3: "消息 3（DM 和群组 DM）",
                mute: "沉默的",
                overlayUnlock: "图层解锁",
                poggermodeAchievement: "波格模式成就",
                poggermodeApplause: "Pogger模式掌声",
                poggermodeEnabled: "Pogger 模式已启用",
                poggermodeMessage: "Pogger模式消息",
                pttStart: "开始PTT",
                pttStop: "一键通停止",
                reconnect: "重新连接",
                robotMan: "机器人亚当",
                stageWaiting: "等待场景",
                streamEnded: "广播结束",
                streamStarted: "广播开始",
                streamUserJoined: "用户加入广播",
                streamUserLeft: "用户离开广播",
                success: "成功的",
                undeafen: "消除震耳欲聋的声音",
                unmute: "消除沉默",
                userJoin: "用户已加入",
                userLeave: "用户离开",
                userMoved: "用户已移动",
                vibingWumpus: "乌普斯卡住了"
            }
        },
        customTimestamps: {
            name: "自定义时间戳",
            description: "消息和工具提示上的自定义时间戳",
            demo: {
                cozy: "点我切换为休闲格式",
                compact: "点我切换到紧凑格式",
                lastWeek: "此消息是上周发送的",
                hover: "您可以通过将鼠标悬停在时间戳上来查看工具提示格式",
                edit: "编辑下面的格式，在此处查看它们的实时更新"
            },
            modal: {
                title: "使用方法：",
                moment: "Moment.js 格式化文档",
                hint: "此外，您可以在条目中使用以下内容：",
                calendar: "启用动态日期格式，例如",
                today: "今天",
                yesterday: "昨天",
                relative: "给你这样的时间：",
                relativeTime: "4小时前",
                preview: "预览",
                format: "日历格式",
                howTo: "以下是在上面的时间戳中使用时如何格式化 [calendar] 值。"
            },
            option: {
                formats: {
                    label: "格式",
                    description: "自定义时间戳格式",
                },
                cozyFormat: {
                    label: "救济模式",
                    description: "消息中用于轻松模式的时间格式"
                },
                compactFormat: {
                    label: "紧凑型模组",
                    description: "在紧凑模式下以及将鼠标悬停在消息上时使用的时间格式"
                },
                tooltipFormat: {
                    label: "工具提示",
                    description: "在工具提示中使用的时间格式"
                },
                ariaLabelFormat: {
                    label: "咏叹调标签",
                    description: "在 Aria 标签中使用的时间格式"
                },
                sameDayFormat: {
                    label: "同一天",
                    description: "[日历] 今天的格式",
                    default: "[Bugün] HH:mm:ss"
                },
                lastDayFormat: {
                    label: "昨天",
                    description: "[日历] 昨天的格式",
                    default: "[细] HH:mm:ss"
                },
                lastWeekFormat: {
                    label: "上星期",
                    description: "[日历] 上周的格式"
                },
                sameElseFormat: {
                    label: "较老的",
                    description: "[日历] 旧日期的格式"
                }
            }
        },
        customUserColors: {
            name: "自定义用户颜色",
            description: "允许您随时随地为任何用户添加自定义颜色！ 强烈建议与 TypingTweaks 和 roleColorEverywhere 一起使用",
            option: {
                dmList: {
                    label: "DM列表",
                    description: "分配特殊颜色的用户名将在 DM 列表中显示颜色"
                },
                colorInServers: {
                    label: "服务器上的颜色",
                    description: "服务器上的名称颜色也应该更改吗？"
                }
            },
            context: {
                setColor: "调整颜色"
            },
            modal: {
                custom: "定制颜色",
                pick: "选择一种颜色",
                delete: "删除记录",
                save: "节省"
            }
        },
        dearrow: {
            name: "迪阿罗",
            description: "使 YouTube 嵌入的标题和缩略图不那么耸人听闻，由 Dearrow 提供支持",
            option: {
                hideButton: {
                    label: "隐藏按钮",
                    description: "在 YouTube 嵌入中隐藏 Dearrow 按钮"
                },
                replaceElements: {
                    label: "更改项目",
                    description: "选择要替换的嵌入元素",
                    everything: "一切（标题和缩略图）",
                    title: "标题",
                    thumbnail: "缩略图"
                },
                dearrowByDefault: {
                    label: "默认情况下为Dearrow",
                    description: "自动删除视频"
                }
            },
            tooltip: {
                dearrowed: "Dearrow 已应用于此嵌入，点击恢复",
                dearrow: "点击应用亲爱的箭头"
            }
        },
        declutter: {
            name: "整理",
            description: "通过删除非必要的 UI 元素（例如个人资料效果、商店选项卡、能力提升等）来清理 Discord。",
            option: {
                userProfileHeader: {
                    label: "用户资料"
                },
                removeNameplate: {
                    label: "移除铭牌",
                    description: "去除铭牌。"
                },
                removeProfileEffect: {
                    label: "删除轮廓效果",
                    description: "删除打开配置文件时出现的动画效果。"
                },
                removeClanTag: {
                    label: "删除氏族标签",
                    description: "删除氏族标签。"
                },
                alwaysShowUsername: {
                    label: "始终显示用户名",
                    description: "它始终显示用户名而不是状态。"
                },
                accessibilityNotice: {
                    label: "无障碍警告",
                    description: "Discord 的辅助功能设置中已经有内置的用户名样式选项。"
                },
                friendsListHeader: {
                    label: "以上朋友/DM 列表"
                },
                removeShopAboveDM: {
                    label: "删除 DM 列表上方的商店",
                    description: "删除 DM 列表上方的商店按钮。"
                },
                removeQuestsAboveDM: {
                    label: "从 DM 列表中删除任务",
                    description: "删除 DM 列表上方的任务按钮。"
                },
                miscHeader: {
                    label: "各种各样的"
                },
                removeServerBoostInfo: {
                    label: "删除服务器提升信息",
                    description: "删除频道列表顶部的服务器加固信息。"
                },
                removeBillingSettings: {
                    label: "删除付款设置",
                    description: "删除付款（发票）设置。"
                },
                removeGiftButton: {
                    label: "删除礼物按钮",
                    description: "删除发送礼物按钮。"
                },
                removeUnavailableEmojiPicker: {
                    label: "删除不可用的表情符号选择器",
                    description: "删除表情符号选择器中无法访问的类别。"
                },
                removeAudioMenus: {
                    label: "删除声音菜单",
                    description: "删除静音和聋按钮旁边的箭头菜单。"
                },
                removeButtonTooltips: {
                    label: "删除按钮提示",
                    description: "它删除了按钮上出现的工具提示。"
                }
            }
        },
        decodeBase64: {
            name: "解码Base64",
            description: "解码任意消息的 Base64 内容并复制解码的内容。",
            right: {
                decode: "复制求解（左键单击）/Base64 求解（右键单击）",
                copy: "Base64 解码（左键单击）/复制解码（右键单击）"
            },
            option: {
                clickMethod: {
                    label: "点击方法",
                    description: "更改按钮的行为以解码任何消息的 Base64 内容。",
                    left: "左键单击以解码 Base64 内容。",
                    right: "右键单击以解码 Base64 内容。"
                }
            },
            modal: {
                title: "解码的 Base64 内容",
                content: "溶解含量",
                copy: "复制已解决的内容 {{index}}",
                copied: "已解决的内容已复制到剪贴板！"
            }
        },
        decor: {
            name: "装饰风格",
            description: "创建并使用您自己的自定义头像装饰或从预设中选择您最喜欢的。",
            presetPart: "{{name}} 预设的一部分",
            createdBy: "由{{author}}创建",
            copy: "复制预设 ID",
            file: "文件",
            your: {
                title: "装饰",
                subtitle: "您可以通过右键单击删除自己的装饰。"
            },
            option: {
                changeDecoration: {
                    label: "更换饰品",
                    description: "要更改您的头像装饰，请启用装饰并重新启动您的客户端。",
                    also: "您还可以从 {{profiles}} 页面访问装饰装饰。",
                    profiles: "型材"
                },
                baseUrl: {
                    label: "基本网址",
                    description: "Dekor API URL 的"
                },
                agreedToGuidelines: {
                    label: "我接受规则",
                    description: "接受规则"
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
                    body: "您确定要删除 {{decoration}} 装饰吗？",
                    confirm: "西尔",
                    cancel: "取消"
                },
                logout: {
                    title: "登出",
                    body: "您确定要退出圣象吗？",
                    confirm: "登出",
                    cancel: "取消"
                }
            },
            button: {
                change: "更换饰品",
                remove: "移除装饰",
                apply: "申请",
                cancel: "取消",
                browse: "浏览",
                submit: "提交审核",
                continue: "德瓦姆·埃特",
                back: "回去"
            },
            tooltip: {
                pendingReview: "您已有一件装饰品正在接受审核",
                pending: "待审核"
            },
            join: {
                tooltip: "加入 Decor 的 Discord 服务器来查看您的装饰并在新预设发布时接收通知",
                button: "不和谐服务器"
            },
            create: {
                title: "创建装饰品",
                notViolate: "提交前请确保您的修饰不违反{{guidelines}}。",
                guidelines: "规则",
                file: "文件必须是 APNG 或 PNG。",
                fileHolder: "选择一个文件",
                name: "当提及该装饰品时将使用该名称。",
                nameHolder: "伴侣立方体",
                nameTitle: "广告"
            },
            help: {
                update: "加入 {{server}} 并允许直接消息接收有关您装饰的评论的更新。",
                server: "装饰不和谐"
            },
            guidelines: {
                hold: "等待",
                suspended: "提交装饰品即表示您同意{{guidelines}}。 不阅读这些规则可能会导致您将来创建更多装饰品的权利被暂停。",
                guidelines: "规则"
            }
        },
        demonstration: {
            name: "示范",
            description: "用于拍摄主题屏幕截图的插件 - 识别图像和文本的审查器。",
            toolbox: {
                toggle: "审查的"
            },
            keycode: "查看 {{keycode}} 来更改您的热键！",
            this: "这辆车的",
            okay: "好的！",
            option: {
                keyBind: {
                    label: "热键",
                    description: "按下时将打开和关闭主题的按钮"
                },
                soundVolume: {
                    label: "声级",
                    description: "开/关音量（0 = 关）"
                },
                showConfirmationModal: {
                    label: "显示确认窗口",
                    description: "显示窗口提醒快捷方式"
                }
            },
            switch: {
                note: "您可以稍后重新启用此设置",
                disable: "禁用确认窗口？"
            },
            shortcut: "这将审查所有文本！ 请记住禁用此功能的快捷方式："
        },
        devCompanion: {
            name: "开发伙伴",
            description: "开发助手插件。 如果您发现某些内容无法正常工作或表现奇怪（很可能是错误），请将其报告给 MutanPlex，无论是标记还是 dm 它，谢谢！",
            reconnect: "重新连接",
            option: {
                notifyOnAutoConnect: {
                    label: "自动连接时通知",
                    description: "当 Dev Companion 自动连接时显示通知？"
                },
                usePatchedModule: {
                    label: "使用补丁模块",
                    description: "对于删除请求，请使用现有的已修补模块（如果已修补）而不是原始模块进行响应。"
                },
                reloadAfterToggle: {
                    label: "重新安装后",
                    description: "收到禁用/启用插件命令后重新安装。"
                }
            },
            toast: {
                title: "开发伙伴已连接",
                connected: "连接到 WebSocket",
                disconnected: "开发伙伴已断开连接",
                error: "开发伙伴错误",
                reload: "需要重新安装",
                failed: "无法初始化依赖项：{{failures}}",
                close: "四分之一",
                stopping: "停止 {{plugin}} 插件时出错",
                starting: "初始化 {{plugin}} 插件时出错",
                noMessage: "无错误信息",
                noReason: "未提供原因"
            }
        },
        disableCallIdle: {
            name: "禁用呼叫空闲",
            description: "禁止在 3 分钟后自动踢出 DM 语音通话并移至 AFK 语音通道。"
        },
        disableCameras: {
            name: "禁用相机",
            description: "默认情况下禁用通话中的摄像头"
        },
        discordDevBanner: {
            name: "Discord开发横幅",
            description: "启用显示 Build-ID 信息的 Discord 开发者横幅。",
            about: "Discord 开发者横幅格式。 您可以使用以下变量：",
            preview: "预览：",
            empty: "格式不能为空。",
            variables: {
                discord: {
                    title: "不和谐变量",
                    icon: "不和谐图标",
                    banner: "开发人员横幅图标",
                    channel: "Discord 构建渠道（例如稳定）",
                    build: "Discord 内部版本号（例如 123456）",
                    hash: "Discord 构建哈希（例如 123456）"
                },
                plexcord: {
                    title: "Plexcord 变量",
                    icon: "Plexcord 图标",
                    name: "复合线名称",
                    version: "Plexcord 版本（例如 1.0.0）",
                    hash: "Plexcord 结构哈希（例如 123456）",
                    platform: "Plexcord 运行平台（例如 Dev Build）"
                },
                plextron: {
                    title: "Plextron 自定义变量",
                    hashShort: "Plextron 短结构哈希（例如 123456789）",
                    platformType: "Plextron 运行的平台类型（例如 Dev Build）"
                },
                client: {
                    title: "客户端变量",
                    icon: "桌面图标",
                    name: "客户名称（例如 Discord Canary）",
                    version: "客户端版本（例如1.0.0）",
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
            }
        },
        dontFilterMe: {
            name: "不要过滤我",
            description: "如果您的消息包含自动审核就绪列表中的术语，则会向您发出警告",
            alert: {
                title: "等一下！",
                content: "您的消息包含自动审核就绪列表中的术语。 （术语“{{trigger}}”）",
                content2: "您的消息很可能会被服务器管理员阻止并处理。",
                confirm: "无论如何提交",
                cancel: "取消"
            }
        },
        dontRoundMyTimestamps: {
            name: "不要绕我的时间戳",
            description: "始终向下舍入相对时间戳，因此 7.6y 变为 7y 而不是 8y"
        },
        dragFavoriteEmotes: {
            name: "拖动最喜欢的表情",
            description: "添加拖放功能来更改最喜欢的表情符号的顺序"
        },
        dragify: {
            name: "拖拽",
            description: "将用户、频道或演示者拖放到聊天中以添加提及或邀请。",
            option: {
                userOutput: {
                    label: "用户输出",
                    description: "用户丢失输出。",
                    mention: "别提",
                    id: "用户身份（ID）"
                },
                channelOutput: {
                    label: "通道输出",
                    description: "通道释放输出。",
                    mention: "#频道提及",
                    link: "通道连接",
                },
                inviteExpireAfter: {
                    label: "邀请期限",
                    description: "邀请链接的有效期。",
                    never: "绝不",
                    thirtyMinutes: "30分钟",
                    oneHour: "1 时刻",
                    sixHours: "6 时刻",
                    twelveHours: "12 时刻",
                    oneDay: "1 天",
                    sevenDays: "7天"
                },
                inviteMaxUses: {
                    label: "最大使用次数",
                    description: "邀请的最大使用限制。",
                    noLimit: "无限制",
                    one: "1 用途",
                    five: "5 使用方法",
                    ten: "10 用法",
                    twentyFive: "25 用法",
                    fifty: "50 种用途",
                    hundred: "100 次使用"
                },
                inviteTemporaryMembership: {
                    label: "提供临时会员资格",
                    description: "它向受邀者授予临时会员资格。",
                },
                reuseExistingInvites: {
                    label: "重复使用现有邀请",
                    description: "它使用现有邀请而不是创建新邀请。"
                },
                allowChatBodyDrop: {
                    label: "允许拖放到聊天正文",
                    description: "允许将文本直接拖放到聊天区域中进行添加。"
                }
            },
            toast: {
                failed: {
                    drop: "Dragify 无法执行该操作。",
                },
                invite: {
                    created: "邀请已创建。",
                    unable: "无法创建邀请。",
                    noChannel: "没有可用于创建邀请的渠道。",
                }
            },
            ghost: {
                user: "用户",
                server: "主持人",
                dm: "直接消息",
                badge: {
                    channel: "渠道",
                    thread: "标题",
                    voice: "塞斯",
                    forum: "论坛",
                    media: "媒体",
                    announcement: "公告",
                    dm: "DM",
                    user: "用户",
                    server: "主持人"
                }
            }
        },
        elementHighlighter: {
            name: "元素荧光笔",
            description: "轻松突出显示和检查项目。",
            modal: {
                recording: "记录...",
                reset: "重置"
            },
            option: {
                keybind: {
                    label: "按键分配",
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
                    description: "显示计算出的字体系列和大小"
                },
                showPadding: {
                    label: "显示填充",
                    description: "显示元素的内部间距值"
                },
                showMargin: {
                    label: "显示外边距",
                    description: "显示元素的外部空间值"
                },
                showBorderRadius: {
                    label: "显示边缘圆度",
                    description: "显示元素的边框半径值"
                },
                showPosition: {
                    label: "显示地点",
                    description: "显示元素的 CSS 位置类型和 z-index 值"
                },
                showDisplay: {
                    label: "显示视图",
                    description: "显示元素的视图类型及其 flex 或 grid 属性"
                }
            },
            toast: {
                copied: {
                    color: "颜色已复制到剪贴板！",
                }
            }
        },
        exitSounds: {
            name: "退出声音",
            description: "当您离开音频通道时，音频面板会播放声音。",
            button: "设置为全局输出声音",
            toast: {
                failedToPlay: "天哪，不！ 出了点问题。"
            },
            option: {
                soundGuildId: {
                    label: "语音服务器身份 (ID)",
                    description: "选择音频所在的服务器。",
                    placeholder: "选择服务器..."
                },
                soundId: {
                    label: "语音识别 (ID)",
                    description: "输入您要播放的声音的 ID。",
                    placeholder: "输入语音ID..."
                }
            }
        },
        experiments: {
            name: "实验",
            description: "提供对 Discord 中的实验和其他开发人员专用功能的访问！",
            modal: {
                about: {
                    title: "更多信息",
                    body: "您可以使用 {{key}} 打开 Discord 的开发者工具"
                },
                warning: {
                    title: "注意力！！",
                    body: "实验是未发布的 Discord 功能。 它们可能不起作用，甚至可能破坏您的客户端或导致您的帐户被禁用。",
                    notReponsible: "仅当您知道自己在做什么时才使用实验。 Plexcord 对启用实验可能造成的任何损坏不承担任何责任。",
                    useAtOwnRisk: "如果您不知道实验的作用，请忽略它。 别问我们他们是做什么的，我们可能也不知道。",
                    serverSideFeatures: "不可以，您不能使用服务器端功能，例如选中“发送到客户端”框。"
                }
            },
            option: {
                toolbarDevMenu: {
                    label: "工具栏开发者菜单",
                    description: "将帮助 (?) 工具栏按钮（聊天右上角）替换为 Discord 的开发者菜单"
                }
            }
        },
        exportMessages: {
            name: "导出消息",
            description: "允许您将消息导出到文件 - 单条消息、用户的所有消息或频道的所有消息",
            option: {
                maxMessages: {
                    label: "最大消息数",
                    description: "要传输的最大消息数（0 = 无限制）"
                },
                includeAttachments: {
                    label: "包括附件",
                    description: "在传输中包含附件信息"
                },
                includeEmbeds: {
                    label: "恩贝德勒里·达希尔·埃特",
                    description: "在传输中包含嵌入信息"
                },
                includeReactions: {
                    label: "包括反应",
                    description: "在传输中包含反应信息"
                },
                includeComponents: {
                    label: "包括组件",
                    description: "在导入中包含组件信息"
                }
            },
            message: {
                invalid: "无效消息 - 无作者",
                unknownUser: "未知用户",
                botEmbed: "机器人嵌入消息",
                attachments: "附件",
                unknown: "未知",
                noUrl: "没有网址",
                embeds: "恩贝德勒",
                title: "标题",
                description: "解释",
                url: "网址",
                footer: "阿尔特比尔吉",
                author: "作家",
                fields: "领域",
                components: "成分",
                component: "成分",
                interactiveElement: "互动元素",
                reactions: "反应",
                errorFormatting: "消息格式错误",
                unknownError: "未知错误",
                header: "{{titlePrefix}} {{displayName}}、{{channelName}} kanalında",
                from: "留言 -",
                direct: "直接消息",
                exported: "出口日期",
                total: "消息总数"
            },
            toast: {
                export: {
                    title: "导出消息",
                    body: "消息导出失败"
                },
                noMessages: {
                    title: "导出消息",
                    notFoundUser: "没有找到该用户的消息",
                    notFoundChannel: "在此频道中找不到消息"
                },
                failed: {
                    title: "导出消息",
                    body: "导出消息时发生错误"
                },
                userNotFound: {
                    title: "导出消息",
                    body: "未找到用户"
                },
                complete: {
                    title: "导出完成",
                    saved: "文件已保存",
                    downloaded: "文件已下载",
                    messages: "信息"
                }
            },
            context: {
                exportMessage: "导出此消息",
                exportAll: "导出 {{user}} 的所有消息",
                user: "用户",
                exportAllChannel: "导出频道所有消息"
            }
        },
        expressionCloner: {
            name: "表达克隆",
            description: "允许您将表情符号和贴纸克隆到您自己的服务器（右键单击）",
            modal: {
                title: "专有名词",
                invalidName: "名称必须介于 2 到 32 个字符之间，并且仅包含字母数字字符"
            },
            toast: {
                success: "{{name}}已成功克隆到{{guild}}服务器！",
                yourServer: "你的服务器",
                failed: "克隆失败：",
                console: "出了点问题（检查控制台！）"
            },
            context: {
                clone: "{{type}} 克隆",
                cloneName: "{{数据}}克隆"
            }
        },
        f8break: {
            name: "F8中断",
            description: "当 DevTools（+ 断点）打开时，按 F8 会暂停客户端。"
        },
        fakeNitro: {
            name: "假硝基",
            description: "让您发送假表情符号/贴纸、使用硝基主题并以硝基质量进行流式传输",
            option: {
                enableEmojiBypass: {
                    label: "启用表情符号跳过",
                    description: "允许发送假表情符号（也绕过缺乏使用自定义表情符号的权限）"
                },
                emojiSize: {
                    label: "表情符号大小",
                    description: "发送表情符号时使用的尺寸"
                },
                transformEmojis: {
                    label: "变换表情符号",
                    description: "确定假表情符号是否会转换为真实表情符号"
                },
                enableStickerBypass: {
                    label: "启用贴纸跳过",
                    description: "允许发送假贴纸（也绕过缺乏使用贴纸的权限）"
                },
                stickerSize: {
                    label: "贴纸尺寸",
                    description: "发送贴纸时使用的尺寸"
                },
                transformStickers: {
                    label: "转换贴纸",
                    description: "确定假贴纸是否会转换为真实贴纸"
                },
                transformCompoundSentence: {
                    label: "转换复合句",
                    description: "确定是否转换复合句（包含比假表情符号或贴纸链接更多内容的句子）中的假表情符号和贴纸"
                },
                enableStreamQualityBypass: {
                    label: "启用广播质量跳过",
                    description: "允许以硝基质量进行流式传输"
                },
                useStickerHyperLinks: {
                    label: "使用贴纸桥",
                    description: "确定发送假贴纸时是否使用超链接"
                },
                useEmojiHyperLinks: {
                    label: "使用表情符号桥",
                    description: "确定发送假表情符号时是否使用超链接"
                },
                hyperLinkText: {
                    label: "超文本",
                    description: "超链接中使用的文本。 {{NAME}} 将替换为表情符号/贴纸名称。"
                },
                disableEmbedPermissionCheck: {
                    label: "禁用嵌入权限检查",
                    description: "确定发送虚假表情符号和贴纸时是否禁用嵌入权限检查"
                }
            },
            modal: {
                sticker: "这是一个 FakeNitro 贴纸，它看起来就像一个真正的贴纸，只适合你。 对于那些不使用该插件的人来说，它显示为链接。",
                emoji: "这是一个 FakeNitro 表情符号，它看起来就像一个真正的表情符号，只适合您。 对于那些不使用该插件的人来说，它显示为链接。"
            },
            alert: {
                notice: {
                    title: "注意力！",
                    body: "您正在尝试发送/编辑包含 FakeNitro 表情符号或贴纸的消息，但您无权在此频道中嵌入链接。 您确定要发送此消息吗？ 您的 FakeNitro 项目将仅显示为链接。",
                    footer: "您可以在 FakeNitro 设置中禁用此警告",
                    confirm: "无论如何提交",
                    cancel: "取消",
                    secondaryConfirm: "不要再显示"
                },
                apngSticker: {
                    title: "注意力！",
                    body: "您无法发送此消息，因为它包含动画 FakeNitro 贴纸，并且您无权在此频道中添加文件。 您必须移除贴纸才能继续。"
                }
            }
        },
        fakeProfileThemes: {
            name: "假个人资料主题",
            description: "提供个人资料主题；由于不可见的 3y3 编码，它为 bion 添加了隐藏的颜色。",
            button: {
                copy: "3y3 复制"
            },
            modal: {
                usage: "使用",
                preview: "预览",
                intro: "激活此插件后，您将在使用兼容插件的其他人的个人资料上看到自定义颜色。",
                setColor: "要设置您自己的颜色：",
                step1: "• 使用下面的颜色选择器选择您的颜色",
                step2: "• 单击{{复制}}按钮",
                step3: "• 将不可见文本粘贴到“关于”部分的任意位置",
                pickers: "颜色选择器",
                primary: "基本的",
                accent: "强调"
            },
            option: {
                nitroFirst: {
                    label: "硝基第一",
                    description: "默认颜色源（如果两者都可用）",
                    nitro: "硝基色",
                    fake: "假颜色"
                }
            }
        },
        fakeProfileThemesAndEffects: {
            name: "假个人资料主题和效果",
            description: "允许您添加个人资料主题和个人资料效果；由于隐形 3y3 编码，隐藏的颜色和效果被添加到生物中。",
            option: {
                prioritizeNitro: {
                    label: "优先考虑硝基",
                    description: "优先考虑的资源",
                    nitro: "硝基",
                    aboutMe: "关于我"
                },
                hideBuilder: {
                    label: "隐藏创作者",
                    description: "在用户配置文件和服务器配置文件设置页面中隐藏 FPTE Creator"
                }
            },
            modal: {
                primary: "基本的",
                accent: "强调",
                effect: "影响",
                usage: {
                    title: "使用",
                    intro: "激活此插件后，您将在使用此插件的其他人的个人资料上看到自定义主题颜色和效果。",
                    setColor: "要设置您自己的颜色和效果：",
                    step1: "转到个人资料设置",
                    step2: "使用 FPTE Creator 选择配置文件主题颜色和效果",
                    step3: "单击{{复制}}按钮",
                    step4: "将不可见文本粘贴到个人简介中您想要的任意位置"
                }
            },
            toast: {
                copied: "FPTE 已复制到剪贴板！",
                empty: "FPTE 生成器为空；没有什么可复制的！"
            },
            button: {
                copyFPTE: "FPTE 副本",
                reset: "重置",
                preview: "FPTE 创建者预览",
                buildBackwards: "创建向后兼容的 FPTE",
                moreCharacters: "将使用更多字符"
            }
        },
        fastDeleteChannels: {
            name: "快速删除频道",
            description: "添加垃圾桶图标以删除频道",
            option: {
                keyBind: {
                    label: "热键",
                    description: "用于打开和关闭垃圾桶的钥匙。"
                },
                reqCtrl: {
                    label: "需要 Ctrl 键",
                    description: "需要按住 Ctrl 键才能打开垃圾桶。"
                },
                reqShift: {
                    label: "需要 Shift 键",
                    description: "打开垃圾桶需要按住 Shift 键。"
                },
                reqAlt: {
                    label: "需要 Alt 键",
                    description: "打开垃圾桶需要按住 Alt 键。"
                }
            }
        },
        favoriteEmojiFirst: {
            name: "最喜欢的表情符号第一",
            description: "它将您最喜欢的表情符号放在表情符号自动完成列表的顶部，并且还提供表情符号昵称。",
            option: {
                aliases: {
                    label: "昵称",
                    description: "管理您的表情符号昵称。"
                },
                clearAll: {
                    label: "全部清除",
                    description: "删除所有昵称。"
                }
            },
            modal: {
                clear: {
                    title: "删除所有别名",
                    description: "这将删除您保存的所有表情符号昵称。",
                    confirm: "删除所有昵称"
                },
                set: {
                    title: "设置昵称",
                    description: "为 {{emoji}} 设置昵称",
                    placeholder: "昵称，例如'快乐的'",
                    save: "节省",
                    error: "昵称重复"
                }
            },
            toast: {
                set: "为 {{emoji}} 设置的昵称",
                clearAll: "所有表情符号昵称已删除",
                failedDeleted: "删除别名失败",
                removed: "{{alias}} 的别名已删除",
                failedRemove: "别名删除失败",
                duplicate: "昵称重复",
                failedSave: "昵称无法注册"
            },
            button: {
                edit: "编辑昵称",
                set: "设置昵称"
            }
        },
        favoriteGifSearch: {
            name: "收藏 Gif 搜索",
            description: "为喜爱的 GIF 添加搜索栏。",
            placeholder: "搜索最喜欢的 GIF",
            option: {
                searchOption: {
                    label: "搜索选项",
                    description: "您要搜索 URL 的哪一部分",
                    url: "所有网址",
                    path: "仅路径 (/somegif.gif)",
                    hostandpath: "主机和路径 (tenor.com somegif.gif)"
                }
            }
        },
        favouriteAnything: {
            name: "最喜欢的任何东西",
            description: "收藏任何图像"
        },
        fileDownloadButton: {
            name: "文件下载按钮",
            description: "在文件右上角添加下载按钮"
        },
        findReply: {
            name: "查找回复",
            description: "跳转到频道中最旧的消息回复（以便更轻松地跟踪过去的对话）。",
            context: {
                jump: "前往回答"
            },
            toast: {
                navigate: "使用底部面板浏览答案。",
                container: "找不到容器元素。",
                couldntFind: "未找到回复消息。"
            },
            option: {
                includePings: {
                    label: "包括提及",
                    description: "它还搜索直接发送给作者的消息。"
                },
                includeAuthor: {
                    label: "包括作者",
                    description: "不仅搜索特定帖子的回复，还搜索一般作者的回复"
                },
                hideButtonIfNoReply: {
                    label: "如果没有响应则隐藏按钮",
                    description: "如果消息没有响应则隐藏按钮"
                }
            }
        },
        fixCodeblockGap: {
            name: "修复代码块间隙",
            description: "删除代码块及其下面的文本之间的空格"
        },
        fixFileExtensions: {
            name: "修复文件扩展名",
            description: "如果可能，通过将文件扩展名重命名为兼容的支持格式来修复文件扩展名"
        },
        fixImagesQuality: {
            name: "修复图像质量",
            description: "通过强制使用原始来源来提高图像质量",
            option: {
                originalImagesInChat: {
                    label: "在聊天中显示原始图像",
                    description: "还在聊天中显示原始图像。 警告：阅读上面的警告"
                }
            },
            modal: {
                about: {
                    title: "默认行为如下：",
                    body: "&mdash;优化但全分辨率的图像将加载到聊天中。",
                    body2: "&mdash;在图像窗口（图像模式）中，将加载原始图像。",
                    body3: "您还可以在聊天中启用原始图像，但请注意以下注意事项：",
                    warning: "&mdash;聊天中的动画图像（GIF、WebP 等）将始终是动画的，即使应用程序具有焦点也是如此。",
                    warning2: "&mdash;它可能会导致性能问题。"
                }
            }
        },
        fixSpotifyEmbeds: {
            name: "修复Spotify嵌入",
            description: "修复了 Spotify 嵌入声音太大的问题，让您可以自定义音量",
            option: {
                volume: {
                    label: "声级",
                    description: "调整 Spotify 嵌入的音量百分比。 超过 10% 就太高了"
                }
            }
        },
        fixYoutubeEmbeds: {
            name: "修复 YouTube 嵌入",
            description: "绕过对 YouTube 视频在 Discord 中观看的阻止（例如通过 UMG）"
        },
        followUser: {
            name: "关注用户",
            description: "在用户上下文菜单中添加关注选项；确保您始终处于同一语音频道",
            indicatorTooltip: "{{user}} 正在被关注（点击手动触发，右键取消关注）",
            unknownUser: "未知用户",
            option: {
                executeOnFollow: {
                    label: "关注后申请",
                    description: "关注用户时，确保他们处于同一语音频道"
                },
                onlyManualTrigger: {
                    label: "仅手动触发",
                    description: "仅当单击指示器时触发"
                },
                followLeave: {
                    label: "当跟随离开时",
                    description: "当关注的用户离开时，也离开"
                },
                autoMoveBack: {
                    label: "自动后移",
                    description: "当您移动时自动切换回关注用户的语音频道"
                },
                followUserId: {
                    label: "关注的用户 ID",
                    description: "已关注用户 ID"
                },
                channelFull: {
                    label: "频道已满",
                    description: "如果频道已满，请尝试将您移至该频道"
                }
            },
            toast: {
                channelFull: "频道已满",
                newVc: "被关注的用户切换到新的语音频道",
                insufficientPermissions: "权限不足，无法进入语音通道",
                sameVc: "你们已经在同一个频道了",
                disconnect: "关注的用户离开，已断开连接",
                notFollowing: "被关注的用户离开了，但您没有取消关注",
                notVc: "被关注的用户不在语音频道上"
            },
            context: {
                follow: "跟随",
                unfollow: "取消关注"
            }
        },
        fontLoader: {
            name: "字体加载器",
            description: "通过 Google Fonts 安装任何字体",
            option: {
                selectedFont: {
                    label: "选定的字体",
                    description: "当前选择的字体"
                },
                fontSearch: {
                    label: "字体搜索",
                    description: "通过 Google Fonts 搜索并选择字体"
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
                    title: "谷歌字体'ta Ara",
                    description: "选择要应用的字体",
                    placeholder: "搜索字体...",
                    previewText: "穿着睡衣的病人很快就相信了油腻的司机",
                    authors: "作者：{{作者}}"
                }
            }
        },
        forceOwnerCrown: {
            name: "力主皇冠",
            description: "即使服务器很大，它也会在用户名旁边强制显示服务器所有者的皇冠。"
        },
        forwardAnywhere: {
            name: "随处转发",
            description: "如果转发失败，则将消息作为普通消息发送；它还允许传输 NSFW 内容。",
            option: {
                forwardPreface: {
                    label: "转发前缀",
                    description: "应将哪条语句添加到传输消息的开头？"
                }
            },
            context: {
                attachments: "附件",
                forwarded: "转发自："
            }
        },
        freaky: {
            name: "怪异的",
            description: "/freaky 命令允许您以奇怪的字体发送消息。",
            command: {
                freaky: "很奇怪。",
                message: "以奇怪的字体发送您的消息"
            },
            option: {
                addFreakyEnding: {
                    label: "添加奇怪的结局",
                    description: "最后添加👅或❤️"
                }
            }
        },
        frequentQuickSwitcher: {
            name: "频繁快速切换",
            description: "它将快速切换窗口中的结果替换并过滤为您最常使用的通道。"
        },
        friendCloud: {
            name: "友云",
            description: "添加 /friendcloud 命令以可视化与您互动最多的用户。",
            command: {
                friendcloud: {
                    description: "可视化您的朋友云",
                    count: "显示的用户数",
                    mustHigher: "该数字必须为 1 或更大！",
                    noAffinities: "未找到邻近数据。 检查您的[隐私设置](<https://support.discord.com/hc/en-us/articles/21864805694999-Data-Used-to-Improve-Discord>)。",
                    noValid: "在代理中找不到有效用户。 检查您的[隐私设置](<https://support.discord.com/hc/en-us/articles/21864805694999-Data-Used-to-Improve-Discord>)。",
                    genFailed: "无法创建图像：c"
                }
            }
        },
        friendCodes: {
            name: "好友代码",
            description: "生成好友代码，轻松添加好友",
            card: {
                expires: "过期时间：<t:{{expiration}}:R> • {{uses}}/{{maxUses}} 使用量",
                copy: "复制",
                copied: "复制了！",
                codes: "你的友谊密码",
                count: "好友代码 - {{invites}}",
                create: "生成友情码",
                revoke: "取消所有好友代码",
                loading: "加载中...",
                dontHave: "您没有任何好友代码。"
            }
        },
        friendInvites: {
            name: "好友邀请",
            description: "使用 Slash 命令创建和管理好友邀请链接（/创建好友邀请、/查看好友邀请、/撤销好友邀请）。",
            command: {
                create: {
                    description: "生成好友邀请链接。",
                    message: "Discord.gg/{{code}}`\n· 过期时间：<t:{{expiration}}:R>\n· 最大使用量：{{uses}}"
                },
                view: {
                    description: "查看所有已创建的好友邀请链接。",
                    message: "_discord.gg/{{code}}_\n· 过期时间：<t:{{expiration}}:R> \n· 使用次数：{{uses}}/{{maxUses}}",
                    noInvites: "您没有有效的好友邀请链接。"
                },
                revoke: {
                    description: "取消任何已创建的好友邀请链接。",
                    message: "所有好友邀请链接均已取消。"
                }
            }
        },
        friendshipRanks: {
            name: "友谊排名",
            description: "添加徽章，显示您与用户成为朋友的时间。",
            badge: {
                sprout: {
                    name: "发芽",
                    description: "你们的友谊才刚刚绽放。"
                },
                blooming: {
                    name: "盛开",
                    description: "你们的友谊正在增进！ （1个月）"
                },
                burning: {
                    name: "炽烈",
                    description: "你们的友谊已经达到了顶峰。 （3个月）"
                },
                fighter: {
                    name: "战斗机",
                    description: "你们的友谊很深厚。 （6个月）"
                },
                star: {
                    name: "星星",
                    description: "你们的友谊已经持续了很长时间。 (1年)"
                },
                royal: {
                    name: "结果",
                    description: "你们的友谊克服了一切挑战——两年了！"
                },
                besties: {
                    name: "最好的朋友",
                    description: "你如何实现这一目标？ （5年）"
                }
            }
        },
        friendsSince: {
            name: "自始至终的朋友",
            description: "当用户与弹出窗口中的某人成为朋友时，它会显示。",
            section: "约会日期"
        },
        friendTags: {
            name: "朋友标签",
            description: "使用 & 开始搜索允许您在快速跳转菜单中按自定义标签进行过滤。",
            modal: {
                name: "姓名",
                users: "用户（用逗号分隔）",
                userlist: "用户列表（点击要删除的用户）",
                remove: "消除",
                add: "添加",
                tag: "票",
                removeFrom: "删除自：",
                addTo: "添加："
            },
            option: {
                tagConfiguration: {
                    label: "标签配置",
                    description: "标签配置组件"
                }
            }
        },
        fullSearchContext: {
            name: "完整搜索上下文",
            description: "它使消息搜索结果中的消息上下文菜单包含您期望的所有选项。"
        },
        fullUserInChatbox: {
            name: "聊天框中的完整用户",
            description: "添加附加功能，例如左/右键单击聊天框中的用户标签。"
        },
        fullVCPFP: {
            name: "全VCPFP",
            description: "使头像覆盖整个语音聊天框。",
            option: {
                useServerProfileAvatars: {
                    label: "使用服务器配置文件头像",
                    description: "在语音聊天框中使用演示者个人资料头像（如果有）"
                }
            }
        },
        gameActivityToggle: {
            name: "游戏活动切换",
            description: "向用户弹出窗口添加一个开关以显示或隐藏您的游戏活动。",
            tooltip: "更改游戏事件",
            gameActivity: {
                enabled: "游戏活动已启用",
                disabled: "游戏事件已禁用"
            },
            option: {
                oldIcon: {
                    label: "古代图标",
                    description: "在重新设计 Discord 图标之前使用旧的图标样式"
                },
                location: {
                    label: "女性",
                    description: "在哪里显示游戏事件键",
                    panel: "静音/麦克风关闭旁边",
                    toolbox: "工具箱中的 Plexcord"
                }
            }
        },
        ghosted: {
            name: "幽灵般的",
            description: "您未回复其私信的人旁边会出现一个可爱的幽灵。",
            modal: {
                title: "幽灵用户",
                no: "没有幽灵用户",
                unghost: "去除幽灵",
                unknown: "未知",
                unnamedGroup: "匿名团体",
                unknownUser: "未知用户",
                clearAll: "全部清除",
                noGhost: "这里没有鬼！",
                clear: "清除"
            },
            option: {
                showIndicator: {
                    label: "显示指标",
                    description: "在服务器列表顶部显示幽灵计数器。"
                },
                showDmIcons: {
                    label: "显示 DM 图标",
                    description: "在各个 DM 旁边显示幽灵图标。"
                },
                ignoreGroupDms: {
                    label: "忽略群组私信",
                    description: "将所有群组消息排除在幽灵列表之外。"
                },
                exemptedChannels: {
                    label: "豁免渠道",
                    description: "不会包含在 Ghostlist 中的以逗号分隔的频道 ID (ID) 列表（右键单击 DM 频道以复制 ID）。"
                },
                ignoreBots: {
                    label: "忽略机器人",
                    description: "忽略来自机器人的 DM。"
                }
            }
        },
        gifCollections: {
            name: "动图集",
            description: "允许您创建 GIF 集合。",
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
                    name: "姓名",
                    gifs: "拍击",
                    created: "创建日期",
                    updated: "最后更新",
                    close: "四分之一",
                    rename: "重命名",
                    move: "移至收藏",
                    select: "选择要移动的集合"
                },
                gif: {
                    information: "信息",
                    added: "添加日期",
                    width: "宽度",
                    height: "高度",
                    close: "四分之一"
                }
            },
            option: {
                itemPrefix: {
                    label: "项目前缀",
                    description: "GIF 元素的前缀"
                },
                collectionPrefix: {
                    label: "集合前缀",
                    description: "集合的前缀"
                },
                onlyShowCollections: {
                    label: "仅显示集合",
                    description: "仅显示集合"
                },
                stopWarnings: {
                    label: "停止警报",
                    description: "停止删除警告"
                },
                showCopyImageLink: {
                    label: "显示复制图像链接选项",
                    description: "在上下文菜单中显示 {{copyImageLink}}"
                },
                preventDuplicates: {
                    label: "防止旧病复发",
                    description: "防止同一个 GIF 多次添加到集合中"
                },
                defaultEmptyCollectionImage: {
                    label: "默认空集合图像",
                    description: "当集合中没有图像/GIF 时显示图像/GIF"
                },
                collectionsSortType: {
                    label: "集合排序类型",
                    description: "集合的排序类型"
                },
                collectionsSortOrder: {
                    label: "集合排序顺序",
                    description: "集合的排序顺序"
                },
                collectionsSort: {
                    label: "对集合进行排序",
                    description: "确定如何对集合进行排序",
                    title: "对集合进行排序",
                    sortDescription: "按您的收藏选择排序",
                    sortBy: "排序方式",
                    name: "姓名",
                    creationDate: "创建日期",
                    modifiedDate: "修改日期",
                    ascending: "生长",
                    descending: "减少"
                },
                importGifs: {
                    label: "导入 GIF",
                    description: "导入收藏品",
                    button: "进口收藏品"
                },
                exportGifs: {
                    label: "导出 GIF",
                    description: "导出集合",
                    button: "导出集合"
                },
                resetCollections: {
                    label: "重置收藏",
                    description: "将集合重置为默认值（删除所有集合）",
                    button: "重置收藏"
                }
            },
            toast: {
                copied: "图片链接已复制到剪贴板！",
                urlCopied: "网址已复制到剪贴板！",
                already: "该合集已存在",
                alreadyCollection: "该 GIF 已存在于集合中"
            },
            modal: {
                create: {
                    title: "创建收藏",
                    name: "收藏名称",
                    create: "创造"
                },
                rename: {
                    title: "重命名集合",
                    name: "新收藏名称",
                    warning: "名称不能超过 24 个字符",
                    rename: "重命名"
                }
            },
            alert: {
                import: {
                    title: "你确定吗？",
                    body: "导入集合会覆盖现有集合。",
                    confirm: "伊切·阿克塔尔",
                    cancel: "取消"
                },
                reset: {
                    title: "你确定吗？",
                    body: "重置集合会删除所有集合。",
                    confirm: "重置",
                    cancel: "取消"
                },
                delete: {
                    title: "你确定吗？",
                    deleteBody: "您确实要删除此收藏吗？",
                    removeBody: "您真的要删除该项目吗？",
                    confirm: "西尔",
                    remove: "消除",
                    cancel: "取消"
                }
            }
        },
        gifPaste: {
            name: "gif粘贴",
            description: "它允许您将 GIF 直接粘贴到聊天框中。"
        },
        gifRoulette: {
            name: "Gif轮盘赌",
            description: "添加一个从您收藏夹中随机发送 GIF 的命令；有 10% 的机会标记服务器所有者！",
            command: {
                gifRoulette: {
                    description: "试试你的运气并发送随机 GIF"
                }
            },
            option: {
                pingOwnerChance: {
                    label: "有机会标记服务器所有者",
                    description: "将标记服务器所有者的几率设置为十分之一（哎呀！）"
                }
            }
        },
        gitHubRepos: {
            name: "GitHubRepos",
            description: "在用户的个人资料上显示用户的公共 GitHub 存储库。",
            loading: "存储库正在加载...",
            option: {
                showStars: {
                    label: "显示星星",
                    description: "显示仓库星星"
                },
                showLanguage: {
                    label: "显示语言",
                    description: "显示存储库的主要编程语言"
                },
                showInMiniProfile: {
                    label: "在迷你档案中显示",
                    description: "在迷你配置文件窗口中显示存储库"
                },
                showRepositoryTab: {
                    label: "显示存储库选项卡",
                    description: "在配置文件模式中显示存储库选项卡（启用时隐藏链接上的按钮）"
                }
            },
            error: {
                error: "甚至",
                render: "错误：GithubRepos 无法显示"
            },
            button: {
                show: "显示 GitHub 存储库",
                repositories: "GitHub 存储库",
                more: "显示更多",
                only: "只显示最好的{{length}}/{{total}}"
            },
            modal: {
                title: "{{user}} 的 GitHub 存储库",
                repository: "德波",
                description: "解释",
                language: "迪尔",
                stars: "星星",
                viewOnGitHub: "在 GitHub 上查看",
                close: "四分之一"
            }
        },
        googleThat: {
            name: "谷歌那个",
            description: "添加可让您发送 Internet 搜索连接的命令。",
            command: {
                googleThat: {
                    description: "提交搜索引擎链接",
                    query: "搜索查询"
                }
            },
            option: {
                hyperlink: {
                    label: "桥",
                    description: "提交的链接是否将作为带有查询标签的超链接发送"
                },
                embed: {
                    label: "嵌入内容",
                    description: "是否将提交的链接显示为嵌入内容"
                },
                defaultEngine: {
                    label: "默认搜索引擎",
                    description: "使用的搜索引擎"
                },
                customEngineURL: {
                    label: "自定义搜索引擎 URL",
                    description: "您要使用的搜索引擎的 URL"
                }
            }
        },
        greetStickerPicker: {
            name: "问候贴纸选择器",
            description: "“挥手打招呼！”右键单击该按钮将允许您使用所需的欢迎贴纸，而不是随机的贴纸。",
            mode: {
                greet: "你好",
                message: "信息"
            },
            option: {
                greetMode: {
                    label: "问候模式",
                    description: "选择问候语模式",
                    greet: "问候语（只能发送3次问候语）",
                    message: "留言（可无限发送问候语）"
                }
            },
            context: {
                label: "问候贴纸选择器",
                mode: "问候模式",
                stickers: "问候贴纸",
                multi: "多重问候",
                send: "发送问候"
            }
        },
        guildPickerDumper: {
            name: "公会拾取器转储器",
            description: "添加上下文菜单，可让您导出和下载服务器的表情符号和贴纸。",
            context: {
                download: {
                    emoji: "下载表情符号",
                    sticker: "下载贴纸"
                }
            }
        },
        guildTagSettings: {
            name: "公会标签设置",
            description: "添加服务器标签设置，例如隐藏服务器标签或禁用使用标签的提示。",
            option: {
                hideTags: {
                    label: "隐藏标签",
                    description: "使服务器标签不可见"
                },
                disableAdoptTagPrompt: {
                    label: "关闭标签声明警告",
                    description: "禁用使用（声明）服务器标签的提示"
                }
            }
        },
        hideChatButtons: {
            name: "隐藏聊天按钮",
            description: "允许您隐藏聊天按钮。",
            tooltip: {
                close: "四分之一",
                open: "饥饿的"
            },
            option: {
                color: {
                    label: "颜色",
                    description: "开机时显示红色"
                },
                open: {
                    label: "打开",
                    description: "默认开启"
                }
            }
        },
        hideMedia: {
            name: "隐藏媒体",
            description: "它允许您通过将鼠标悬停在上面时出现的按钮来隐藏某些邮件中的附件和嵌入内容。",
            show: "展会媒体",
            hide: "隐藏媒体",
            hidden: "媒体隐藏"
        },
        hideMessages: {
            name: "隐藏消息",
            description: "暂时隐藏消息，直到您重新启动。",
            button: {
                hide: "隐藏"
            },
            option: {
                hidePopoverButton: {
                    label: "隐藏弹出按钮",
                    description: "隐藏消息弹出窗口中的隐藏按钮。"
                }
            }
        },
        hideServers: {
            name: "隐藏服务器",
            description: "从服务器列表中隐藏服务器",
            context: {
                hide: "隐藏服务器",
                unhide: "显示服务器",
                folder: {
                    hide: "隐藏文件夹",
                    unhide: "显示文件夹"
                }
            },
            option: {
                showIndicator: {
                    label: "显示指标",
                    description: "在底部显示菜单以显示列表中隐藏的服务器"
                },
                guildsList: {
                    label: "服务器列表",
                    description: "删除隐藏服务器"
                },
                resetHidden: {
                    label: "重置隐藏服务器",
                    description: "从列表中删除所有隐藏服务器",
                    button: "重置隐藏服务器"
                }
            },
            button: {
                hidden: "隐",
                hiddenServers: "隐藏服务器",
                remove: "消除",
                folder: "文件夹",
                removeAll: "全部删除",
                guilds: "服务器",
                noHiddenServers: "没有隐藏服务器"
            }
        },
        holyNotes: {
            name: "圣笔记",
            description: "Holy Notes 可让您保存消息",
            main: "出色地",
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
                deleteNote: "诺图希尔",
                moveNote: "移动注释",
                moveTo: "移至{{key}}",
                copyId: "复制身份证件"
            },
            modal: {
                error: {
                    generic: "处理您的成绩时发生错误。 检查控制台了解详细信息。",
                    easter: "没有找到注释。 同理心香蕉与你同在。",
                    empty: "此笔记本中没有保存任何笔记。"
                },
                help: {
                    title: "帮助",
                    description: "了解如何使用神圣笔记",
                    addingNotes: "添加注释",
                    addingNotesText: "要添加注释，请右键单击消息，指向“注释消息”，然后选择要添加注释的笔记本。",
                    prototype: "原型",
                    noteMessage: "默认情况下，单击“注释消息”按钮即可将其添加到主分类帐中！",
                    deletingNotes: "不是西尔梅",
                    deletingNotesText: "要删除注释，您可以右键单击并选择“删除注释”，或按住键盘上的“DELETE”键并单击注释。",
                    movingNotes: "移动笔记",
                    movingNotesText: "要移动笔记，请右键单击并从“移动笔记”选项中选择要移动的笔记本。",
                    jumpToMessage: "前往留言",
                    jumpToMessageText: "要转到注释所属的消息，请右键单击该注释并选择“转到消息”。"
                },
                notebook: {
                    title: "笔记本",
                    search: "搜索消息...",
                    options: "排序选项",
                    label: "排序菜单",
                    filteredOf: "{{filteredCount}}/{{noteCount}} 不",
                    note: "{{noteCount}} 不",
                    ada: "升序/添加日期",
                    amd: "升序/消息日期",
                    dda: "降序/添加日期",
                    dmd: "降序/消息日期",
                    change: "改变排序",
                    ascending: "生长",
                    descending: "减少",
                    dateAdded: "添加日期",
                    messageDate: "留言日期"
                },
                create: {
                    title: "创建笔记本",
                    description: "输入新笔记本的名称",
                    placeholder: "笔记本名称"
                },
                delete: {
                    title: "{{notebookName}} Silinsin Mi？",
                    description: "{{noteCount}}条笔记将被永久删除",
                    button: "西尔"
                },
                tabs: {
                    label: "笔记本标签"
                }
            },
            toast: {
                saved: "该消息已成功添加到{{notebook}}。",
                deleted: "该笔记已成功从 {{notebook}} 中删除。",
                moved: "笔记已成功从 {{from}} 笔记本移动到 {{to}} 笔记本。",
                exists: "名为 {{notebookName}} 的笔记本已存在。",
                created: "{{notebookName}} 已成功创建。",
                deletedNotebook: "{{notebookName}} 已成功删除。",
                refreshed: "头像已成功刷新。",
                deletedAll: "所有笔记均已成功删除。",
                imported: "笔记已成功导入。",
                invalid: "导入笔记失败。"
            },
            toolbox: {
                action: "打开笔记"
            }
        },
        homeTyping: {
            name: "家庭打字",
            description: "如果有人在您的私信中书写，它会将主页按钮变成书写指示器。"
        },
        iconViewer: {
            name: "图标查看器",
            description: "在设置中添加一个新选项卡以预览所有图标。",
            toolbox: "打开图标选项卡",
            iconFinder: "图标查找器",
            about: {
                title: "特征",
                preview: "预览图标",
                list: {
                    copy: "复制图标名称和 CSS 变量",
                    download: "下载不同格式的图标（SVG、PNG、GIF 等）",
                    premade: "为您的插件复制现成的图标结果",
                    find: "按功能上下文查找图标",
                    search: "右键单击颜色名称来搜索颜色",
                    special: "特别感谢"
                }
            },
            context: {
                icon: {
                    options: "图标选项",
                    log: "打印到控制台（日志）",
                    save: "另存为...",
                    rightClick: "右键单击图标进行替换",
                    usage: "使用",
                    click: "点击复制",
                    copied: "复制了！",
                    actions: "行动"
                }
            },
            modal: {
                label: "按功能上下文搜索",
                search: "在 {{count}} 个符号内搜索...",
                function: "功能",
                iconViewer: {
                    colors: "图标查看器颜色",
                    unknown: "未知",
                }
            }
        },
        idleAutoRestart: {
            name: "空闲自动重启",
            description: "当您闲置一段时间后，它会自动重新启动应用程序，但当您处于音频通道时，它会阻止重新启动。",
            option: {
                isEnabled: {
                    label: "有效的",
                    description: "启用空闲后自动重启"
                },
                idleMinutes: {
                    label: "空闲时间（分钟）",
                    description: "重新启动前的不活动时间（不在音频通道上）"
                }
            },
            toolbox: {
                disable: "禁用自动重启",
                enable: "启用自动重启"
            }
        },
        ignoreActivities: {
            name: "忽略活动",
            description: "防止事件仅出现在该状态中。 您可以在“已保存的游戏”和“活动”选项卡中指定要忽略的内容，或使用下面的常规设置。",
            modal: {
                import: {
                    title: "将 CustomRPC 插件的应用程序 ID 导入过滤器列表"
                },
                filter: {
                    title: "过滤器列表",
                    description: "要过滤的事件 ID 的逗号分隔列表（对于过滤特定 RPC 事件和 CustomRPC 很有用）"
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
                    label: "CustomRPC'yi 更多"
                },
                listMode: {
                    label: "列表模式",
                    description: "选择如何应用过滤器列表",
                    blacklist: "黑名单（仅忽略名单上的）",
                    whitelist: "白名单（忽略列表中的所有内容）"
                },
                idList: {
                    label: "身份证号码列表"
                },
                ignorePlaying: {
                    label: "忽略已播放的内容",
                    description: "忽略所有已玩事件（通常是游戏和 RPC 事件）"
                },
                ignoreStreaming: {
                    label: "忽略帖子",
                    description: "忽略所有广播事件"
                },
                ignoreListening: {
                    label: "忽略听众",
                    description: "忽略所有收听事件（通常是 Spotify 事件）"
                },
                ignoreWatching: {
                    label: "忽略已查看",
                    description: "忽略所有跟踪事件"
                },
                ignoreCompeting: {
                    label: "忽略竞争事件",
                    description: "忽略所有竞争（竞赛）事件（通常是自定义游戏事件）"
                },
                ignoredActivities: {
                    label: "被忽略的事件"
                }
            }
        },
        ignoreCalls: {
            name: "忽略来电",
            description: "允许您忽略来自特定用户或 DM 组的呼叫。",
            option: {
                permanentlyIgnoredUsers: {
                    label: "永久被忽略的用户",
                    description: "应永久忽略的用户 ID (virgül + boşluk)"
                }
            },
            button: {
                ignore: "约克赛",
                temporarilyIgnore: "暂时忽略",
                permanentlyIgnore: "永久忽略"
            }
        },
        iLoveSpam: {
            name: "我爱垃圾邮​​件",
            description: "隐藏来自“潜在垃圾邮件发送者”的消息。"
        },
        imageFilename: {
            name: "图片文件名",
            description: "将鼠标悬停在图像和 GIF 上时将文件名显示为工具提示。",
            option: {
                showFullUrl: {
                    label: "显示完整网址",
                    description: "它显示图像的完整 URL，而不仅仅是文件名。 它始终对 GIF 启用，因为它们通常没有有意义的文件名。"
                }
            }
        },
        imageLink: {
            name: "图像链接",
            description: "它从不隐藏视觉链接，即使消息中只有图像链接。"
        },
        imageZoom: {
            name: "图像缩放",
            description: "它允许您放大图像和 GIF，以及查看图像元数据。 使用鼠标滚轮放大，使用 Shift + 鼠标滚轮增加镜头半径。",
            option: {
                saveZoomValues: {
                    label: "保存缩放值",
                    description: "确定是否保存变焦和镜头尺寸值"
                },
                invertScroll: {
                    label: "反向滚动",
                    description: "反转鼠标滚动方向"
                },
                nearestNeighbour: {
                    label: "最近邻",
                    description: "缩放图像时使用最近邻插值"
                },
                square: {
                    label: "保护",
                    description: "将镜片变成方形"
                },
                zoom: {
                    label: "飞涨",
                    description: "镜头变焦比"
                },
                size: {
                    label: "方面",
                    description: "镜头半径/尺寸"
                },
                zoomSpeed: {
                    label: "变焦速度",
                    description: "确定变焦/镜头尺寸的变化速度"
                },
                showMetadata: {
                    label: "显示元数据",
                    description: "双击所选图像时显示元数据"
                }
            },
            context: {
                square: "方形镜片",
                nearest: "像素化放大",
                zoom: "飞涨",
                size: "镜片尺寸",
                zoomSpeed: "变焦速度",
                showImageMetadata: "显示图像元数据",
                view: "查看元数据",
                loading: "加载中...",
                unknown: "未知",
                sizeHTML: "方面",
                dimensions: "方面",
                filename: "文件名"
            }
        },
        imgToGif: {
            name: "图像转Gif",
            description: "添加 /imgtogif 命令将任何图像转换为 GIF",
            command: {
                imgToGif: {
                    description: "允许您将图像转换为 GIF",
                    image: "使用的视觉附件",
                    width: "GIF 宽度",
                    height: "动图高度"
                }
            },
            error: {
                noImage: "没有指定图片！",
                notImage: "上传的文件不是图像"
            }
        },
        implicitRelationships: {
            name: "隐性关系",
            description: "在“好友”选项卡中显示您的间接关系。",
            option: {
                sortByAffinity: {
                    label: "按距离排序",
                    description: "确定间接关系是否按与您的远近程度排序。"
                }
            },
            implicit: "间接"
        },
        inRole: {
            name: "角色中",
            description: "使用角色上下文菜单或 /inrole 命令找出角色中的人员（阅读插件信息！）",
            command: {
                inrole: {
                    description: "找出角色中的角色",
                    role: "角色",
                    noGuild: "确保您在服务器上。"
                }
            },
            context: {
                view: "查看角色中的成员"
            },
            modal: {
                about: {
                    title: "局限性",
                    description: "如果您没有服务器的审核权限并且服务器很大（超过100个成员），则该插件可能会受到以下限制：",
                    list: {
                        one: "离线会员不会被列出",
                        two: "默认情况下，最多会列出 100 个成员。 向下滚动成员列表以查看更多成员。",
                        three: "但您的朋友无论其状态如何，都会始终显示。"
                    }
                },
                member: {
                    title: "角色中的成员",
                    noMembers: "找不到具有此角色的在线缓存成员。 尝试向下滚动您的成员列表以缓存更多用户！"
                }
            }
        },
        instantScreenshare: {
            name: "即时屏幕共享",
            description: "当您加入音频通道时，它可以让您立即进行屏幕共享，并支持桌面源、窗口和视频输入设备（相机、采集卡）。",
            modal: {
                linux: {
                    title: "对于Linux",
                    body: "如果您使用 Wayland，它只会打开屏幕共享选项。",
                    bodyTwo: "它可能适用于 X11，也可能不适用于 :shrug:"
                },
                videoDevices: {
                    title: "视频输入设备",
                    body: "在设置中启用时支持相机和采集卡（例如 Elgato HD60X）。"
                },
                regardingSound: {
                    title: "关于声音和预览设置",
                    body: "我们使用与 Discord 相同的设置来预览流并决定是否启用音频。"
                }
            },
            option: {
                streamMedia: {
                    label: "待发布媒体来源",
                    description: "如果没有找到，它将重置到主屏幕。",
                    loading: "正在加载媒体源...",
                    none: "找不到媒体来源",
                    placeholder: "选择要发布的媒体源"
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
                    description: "当您加入语音频道时自动变聋（它也会使您静音）"
                },
                instantScreenshare: {
                    label: "即时屏幕共享",
                    description: "启用自动屏幕共享功能"
                },
                keybindScreenshare: {
                    label: "使用热键共享屏幕",
                    description: "在 Discord 热键设置中使用热键共享屏幕"
                },
                focusDiscord: {
                    label: "专注于不和谐",
                    description: "仅当 Discord 具有焦点时才使用键绑定启动屏幕共享"
                },
                toolboxManagement: {
                    label: "工具箱管理",
                    description: "启用/禁用即时屏幕共享"
                }
            },
            toolbox: {
                label: "即时屏幕共享",
                toast: "即时屏幕共享 {{state}}",
                enabled: "有效的",
                disabled: "残疾人"
            }
        },
        invisibleChat: {
            name: "隐形聊天",
            description: "加密您的消息而不引起怀疑！",
            option: {
                savedPasswords: {
                    label: "已保存的密码",
                    description: "保存的密码（逗号分隔）"
                }
            },
            button: {
                encrypt: "加密消息",
                decrypt: "破译消息",
                hidden: "隐藏消息指示器（InvisibleChat）"
            },
            tooltip: {
                hidden: "这条消息里有一条隐藏的消息！ （隐形聊天）"
            },
            embed: {
                title: "解密消息",
                footer: "通过 InvisibleChat 发送"
            },
            modal: {
                encrypt: {
                    title: "加密消息",
                    secret: "秘密讯息",
                    cover: "封面（2个或更多字！！）",
                    password: "密码",
                    dontUseCover: "使用盖子",
                    send: "发送",
                    cancel: "取消"
                },
                decrypt: {
                    title: "破译消息",
                    with: "加密消息",
                    password: "密码",
                    decrypt: "解码",
                    cancel: "取消"
                }
            }
        },
        inviteDefaults: {
            name: "邀请默认",
            description: "允许您在创建服务器邀请时编辑默认值。",
            option: {
                inviteDuration: {
                    label: "邀请期限",
                    description: "服务器邀请的默认持续时间",
                    thirtyMinutes: "30分钟",
                    oneHour: "1 时刻",
                    sixHours: "6 时刻",
                    twelveHours: "12 时刻",
                    oneDay: "1 天",
                    sevenDays: "7天",
                    forever: "不定"
                },
                maxUses: {
                    label: "最大使用量",
                    description: "服务器邀请的默认最大使用量",
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
                    description: "服务器邀请的默认临时成员资格设置"
                }
            }
        },
        ircColors: {
            name: "Irc颜色",
            description: "使聊天中用户名的颜色独一无二，就像在 IRC 客户端中一样。",
            option: {
                lightness: {
                    label: "明亮的",
                    description: "亮度比（%）。 如果颜色看起来太浅或太深，请更改它们。"
                },
                memberListColors: {
                    label: "会员列表颜色",
                    description: "更改成员列表中的角色颜色。"
                },
                applyColorOnlyToUsersWithoutColor: {
                    label: "仅适用于没有颜色的用户",
                    description: "将颜色应用于未预定义颜色的用户。"
                },
                applyColorOnlyInDms: {
                    label: "仅适用于私人消息",
                    description: "仅对私人消息应用颜色；服务器上的应用程序。"
                }
            }
        },
        iRememberYou: {
            name: "我记得你",
            description: "它在本地记录您与之通信的每个人（包括服务器），防止丢失。",
            section: {
                description: "它显示您提到、回复的服务器的所有者列表，是（服务器所有者*）的成员或您所在服务器的成员。",
                empty: "目前空着。",
                tooltip: "{{user}} 于 {{updatedAtContent}} 更新",
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
                title: "调节器",
                filter: "按标签、用户名或 ID 过滤",
                button: {
                    validate: "验证并保存",
                    cancel: "取消",
                    openEditor: "打开编辑器",
                    resetData: "重置数据",
                    sure: "你确定吗？"
                }
            }
        },
        jumpTo: {
            name: "跳转到",
            description: "在右键菜单中添加选项以跳转到频道或私人消息的开头或结尾。",
            context: {
                top: "转到第一个帖子",
                bottom: "转到上一篇文章",
                noMessages: "在此频道中未找到该用户的消息。",
                searchFailed: "搜索消息时出错。"
            }
        },
        keepCurrentChannel: {
            name: "保持当前频道",
            description: "切换帐户或加载 Discord 时，它会尝试返回您所在的频道。"
        },
        keyboardSounds: {
            name: "键盘声音",
            description: "使用键盘打字时的 OperaGX 或 osu！ 添加声音效果。",
            option: {
                volume: {
                    label: "声级",
                    description: "键盘声音音量"
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
            name: "关键字通知",
            description: "发送有关与某些关键字或正则表达式匹配的消息的通知。",
            idHolder: "ID",
            keywordEntry: "关键词输入",
            regexHolder: "示例|正则表达式",
            ignoreCase: "不区分大小写",
            whiteblackLabel: "白名单/黑名单",
            tab: {
                title: "关键词",
                clearAll: "全部清除"
            },
            button: {
                addId: "埃克勒",
                addKeyword: "添加关键字条目"
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
                    label: "节省金额",
                    description: "要保留在日志中的消息数"
                },
                keywords: {
                    label: "关键词",
                    description: "管理关键词"
                }
            }
        },
        lastOnline: {
            name: "最后在线",
            description: "在 DM 列表、服务器和组 DM 成员列表中的用户名下添加最后在线指示器。",
            unit: {
                d: "天",
                h: "片刻",
                m: "分钟"
            },
            online: "{{formattedTime}}之前在线过"
        },
        listenBrainzRPC: {
            name: "ListenBrainzRPC",
            description: "ListenBrainz 是一个用于丰富存在的小插件。",
            about: {
                title: "关于 MusicBrainz API",
                description: "MusicBrainz API 不需要 API 密钥，但需要 {{link}}。 对于大多数用户来说，一个电子邮件地址就足够了。",
                userAgent: "有意义的用户代理字符串"
            },
            option: {
                username: {
                    label: "用户名",
                    description: "ListenBrainz 用户名"
                },
                mbContact: {
                    label: "联系方式",
                    description: "ListenBrainz 联系信息"
                },
                shareUsername: {
                    label: "分享用户名",
                    description: "显示 ListenBrainz 个人资料链接（仅对其他用户可见）"
                },
                shareSong: {
                    label: "分享歌曲",
                    description: "在 ListenBrainz 上显示当前歌曲的链接（仅对其他用户可见）"
                },
                hideWithSpotify: {
                    label: "Spotify 处于活动状态时隐藏",
                    description: "如果 Spotify 正在运行，则隐藏 ListenBrainz 状态"
                },
                hideWithActivity: {
                    label: "如果有其他事件则隐藏",
                    description: "如果您有其他状态，请隐藏 ListenBrainz 状态"
                },
                useTimeBar: {
                    label: "使用时间栏",
                    description: "将曲目持续时间显示为时间栏（必须使用收听状态）"
                },
                statusName: {
                    label: "状态名称",
                    description: "异常文本"
                },
                nameFormat: {
                    label: "姓名格式",
                    description: "如何在状态名称中显示歌曲和艺术家名称",
                    custom: "使用自定义状态文本",
                    artistSong: "使用“艺术家-歌曲”格式",
                    songArtist: "使用“歌曲-艺术家”格式",
                    artistOnly: "只需使用艺术家姓名",
                    songOnly: "只需使用歌曲名称即可",
                    albumName: "使用专辑名称（如果歌曲没有专辑，则返回异常文本）"
                },
                useListeningStatus: {
                    label: "使用收听状态",
                    description: "显示“正在收听”状态而不是“正在播放”"
                },
                missingArt: {
                    label: "缺少封面图片",
                    description: "当专辑或专辑封面丢失时",
                    listenbrainzLogo: "使用大 ListenBrainz 徽标",
                    generic: "使用通用占位符"
                },
                useLogo: {
                    label: "库兰标志",
                    description: "在专辑封面上显示 ListenBrainz 徽标"
                }
            }
        },
        loadingQuotes: {
            name: "加载报价",
            description: "更改 Discord 的加载报价",
            option: {
                replaceEvents: {
                    label: "变更事件",
                    description: "在具有特殊活动主题报价的活动期间也应该应用此插件吗？ （例如万圣节）"
                },
                enablePluginPresetQuotes: {
                    label: "启用插件报价",
                    description: "启用此插件准备的报价"
                },
                enableDiscordPresetQuotes: {
                    label: "启用不和谐引号",
                    description: "启用 Discord 预设报价（包括活动期间的活动报价）"
                },
                additionalQuotes: {
                    label: "附加报价",
                    description: "可能出现的其他特殊引号由以下分隔符分隔"
                },
                additionalQuotesDelimiter: {
                    label: "附加引号分隔符",
                    description: "附加报价的分隔符"
                }
            }
        },
        loginWithQR: {
            name: "二维码登录",
            description: "就像在移动设备上一样，扫描登录二维码即可在另一台设备上登录！",
            option: {
                scanQr: {
                    label: "扫描二维码",
                    description: "扫描二维码",
                    notEnabled: "激活插件并重启客户端扫描登录二维码"
                }
            },
            neverScan: "切勿扫描其他用户或应用程序的登录二维码。",
            hold: "按住确认输入",
            scanning: "扫描...",
            stopScanning: "停止扫描",
            usingWebcam: "使用网络摄像头扫描",
            dragDrop: "将图像拖放到此处或单击以选择图像",
            orPaste: "或者从剪贴板粘贴图片！"
        },
        mediaPlaybackSpeed: {
            name: "媒体播放速度",
            description: "允许您更改媒体嵌入的（默认）播放速度。",
            playbackSpeed: "播放速度",
            context: {
                label: "播放速度控制"
            },
            option: {
                defaultVoiceMessageSpeed: {
                    label: "默认语音信箱费率",
                    description: "语音留言"
                },
                defaultVideoSpeed: {
                    label: "默认视频速度",
                    description: "视频"
                },
                defaultAudioSpeed: {
                    label: "默认音频速率",
                    description: "音频文件"
                }
            }
        },
        memberCount: {
            name: "会员数量",
            description: "在成员列表和工具提示中显示服务器上在线成员的数量、成员总数以及语音频道中的用户。",
            option: {
                toolTip: {
                    label: "工具提示",
                    description: "在服务器工具提示中显示成员计数"
                },
                memberList: {
                    label: "会员名单",
                    description: "在成员列表顶部显示成员数量"
                },
                voiceActivity: {
                    label: "语音活动",
                    description: "显示语音频道的用户数量"
                }
            },
            onlineThisChannel: "{{formattedOnlineCount}}在此频道在线",
            totalMembers: "服务器上的成员总数为 {{formattedTotalCount}}",
            totalVoice: "{{formattedVoiceCount}} 个语音频道的会员"
        },
        mentionAvatars: {
            name: "提及头像",
            description: "显示提及中的用户头像和角色图标。",
            option: {
                showAtSymbol: {
                    label: "显示@图标",
                    description: "确定@符号是否显示在用户提及中。"
                }
            }
        },
        meow: {
            name: "喵",
            description: "在聊天栏中添加一个按钮以在聊天中喵喵叫。",
            button: {
                meow: "米亚夫"
            }
        },
        messageBurst: {
            name: "消息突发",
            description: "它将在特定时间段内发送的消息与您之前的消息合并，除非其他人在您之前发送了消息。",
            option: {
                timePeriod: {
                    label: "时间范围",
                    description: "合并时间（以秒为单位）。"
                },
                shouldMergeWithAttachment: {
                    label: "与附件结合",
                    description: "如果最后一条消息中有附件（文件/图像），是否应该合并消息？"
                },
                useSpace: {
                    label: "使用空间",
                    description: "合并时是否在消息之间添加空格而不是移至新行。"
                }
            }
        },
        messageClickActions: {
            name: "消息点击操作",
            description: "按住退格键并单击可删除，双击可编辑或回复。",
            option: {
                singleClickAction: {
                    label: "一键操作",
                    description: "单击操作（在您自己的消息上）"
                },
                singleClickModifier: {
                    label: "一键修改器",
                    description: "一键操作所需的修饰符（在您自己的消息中）"
                },
                singleClickOthersAction: {
                    label: "一键操作（其他）",
                    description: "单击操作（在其他人的消息上）"
                },
                singleClickOthersModifier: {
                    label: "一键修改器（其他）",
                    description: "单击操作所需的修饰符（在其他人的帖子中）"
                },
                doubleClickAction: {
                    label: "双击操作",
                    description: "对您自己的消息进行双击操作"
                },
                doubleClickOthersAction: {
                    label: "双击操作（其他）",
                    description: "对他人消息进行双击操作"
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
                    description: "三次单击操作所需的修饰符"
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
                    label: "附加反应表情符号",
                    description: "使用反应动作时要添加的其他表情符号（用逗号/回车分隔，最大{{count}}）"
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
                    description: "区分双击/三次点击的超时（毫秒）"
                },
                doubleClickHoldThreshold: {
                    label: "双击保留阈值",
                    description: "双击操作的最长保持时间（毫秒）。 允许文本选择保留更长时间"
                },
                deferDoubleClickForTriple: {
                    label: "延迟双击为三次点击",
                    description: "延迟双击以允许三次单击操作（如果关闭，则三次单击将被禁用）"
                },
                selectionHoldTimeout: {
                    label: "选择保持超时",
                    description: "允许文本选择的超时（毫秒）"
                },
                quoteWithReply: {
                    label: "回复并引用报价",
                    description: "引用的时候也回复一下消息"
                },
                useSelectionForQuote: {
                    label: "使用选择进行报价",
                    description: "引用时，使用选定的文本（如果有）"
                }
            },
            actions: {
                none: "没有任何",
                delete: "西尔",
                copyLink: "复制链接",
                copyID: "复制身份证件",
                copyContent: "复制内容",
                copyUserID: "复制用户 ID",
                edit: "编辑",
                reply: "回复",
                react: "反应",
                openThread: "开放主题",
                openTab: "在选项卡中打开",
                quote: "引用",
                pin: "固定它"
            },
            missingPermissions: {
                react: "无法反应：缺少权限",
                pin: "无法修复：缺少权限",
            },
            cannotQuote: "该消息类型不能被引用",
            copy: {
                messageId: "消息 ID 已复制！",
                messageContent: "留言内容已复制！",
                userId: "用户ID被复制！"
            },
            linkCopied: "链接已复制！"
        },
        messageColors: {
            name: "消息颜色",
            description: "显示消息中的颜色代码，例如#FF0042。",
            option: {
                renderType: {
                    label: "可视化类型",
                    description: "确定颜色的显示方式",
                    textColor: "文字颜色",
                    block: "旁边的块",
                    backgroundColor: "背景颜色"
                },
                enableShortHexCodes: {
                    label: "启用短十六进制代码",
                    description: "启用 3 字符十六进制代码，例如 #39f"
                },
                blockView: {
                    label: "块视图类型",
                    description: "确定色块的显示方式",
                    right: "右侧",
                    left: "左边",
                    both: "双方"
                }
            }
        },
        messageFetchTimer: {
            name: "消息获取定时器",
            description: "显示加载当前频道的消息需要多长时间。",
            option: {
                showIcon: {
                    label: "显示图标",
                    description: "在消息栏中显示加载时间图标"
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
            loaded: "消息在 {{time}} 毫秒 ({{timeAgo}}) 内加载",
            day: "几天前",
            hour: "几小时前",
            minute: "分钟前",
            justNow: "现在"
        },
        messageLatency: {
            name: "消息延迟",
            description: "为需要 ≥n 秒发送的消息添加指示器。",
            day: "天",
            days: "天",
            hour: "片刻",
            hours: "片刻",
            minute: "分钟",
            minutes: "分钟",
            second: "第二",
            seconds: "第二",
            millisecond: "毫秒",
            milliseconds: "毫秒",
            and: "维",
            oldKotlinDetected: "怀疑用户使用过时的 Discord Android 客户端。",
            ahead: "该用户的时间提前了 {{delta}}。",
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
                    label: "忽略我自己",
                    description: "将指示器添加到您自己的消息中"
                }
            }
        },
        messageLinkEmbeds: {
            name: "消息链接嵌入",
            description: "向包含另一封邮件链接的邮件添加预览。",
            option: {
                messageBackgroundColor: {
                    label: "消息背景颜色",
                    description: "丰富嵌入中消息的背景颜色"
                },
                automodEmbeds: {
                    label: "奥托莫德墓葬",
                    description: "使用 automod 嵌入而不是丰富的嵌入（较小但包含的信息较少）",
                    always: "始终使用 automod 嵌入",
                    prefer: "首选 Automod 嵌入，但如果某些内容无法显示，请使用丰富的嵌入",
                    never: "切勿使用 automod 嵌入"
                },
                listMode: {
                    label: "列表模式",
                    description: "确定ID列表是否用作黑名单或白名单",
                    blacklist: "黑名单",
                    whitelist: "白名单"
                },
                idList: {
                    label: "身份证号码列表",
                    description: "需要添加到黑名单或白名单的服务器/通道/用户ID（以逗号分隔）"
                },
                clearMessageCache: {
                    label: "清除消息缓存",
                    description: "清除链接消息缓存"
                }
            },
            noContent: {
                noAttachments: "没有内容 {{count}} 嵌入消息",
                noEmbeds: "没有内容添加 {{count}}",
                both: "无内容、{{attachments}} 附件和 {{embeds}} 嵌入消息"
            },
            dm: "私信",
            groupDm: "群组留言",
            server: "主持人"
        },
        messageLinkTooltip: {
            name: "消息链接工具提示",
            description: "将鼠标悬停在消息链接、回复和转发的消息上时添加工具提示和消息预览。",
            loading: "加载中...",
            option: {
                onLink: {
                    label: "链接上",
                    description: "将鼠标悬停在消息链接上时显示工具提示"
                },
                onReply: {
                    label: "关于响应",
                    description: "将鼠标悬停在消息回复上时显示工具提示"
                },
                onForward: {
                    label: "关于传输的消息",
                    description: "将鼠标悬停在转发的消息上时显示工具提示"
                },
                display: {
                    label: "外貌",
                    description: "外观风格",
                    auto: "与留言相同",
                    compact: "袖珍的",
                    cozy: "舒服的"
                }
            }
        },
        messageLogger: {
            name: "消息记录器",
            description: "临时保存已删除和编辑的消息。",
            removeMessage: "删除消息历史记录",
            removeMessageTemporary: "删除消息（临时）",
            clearMessageLog: "清除消息日志",
            modal: {
                edit: {
                    title: "留言编辑历史",
                    tooltip: "由于尚未保存，因此无法显示该编辑状态。"
                }
            },
            option: {
                deleteStyle: {
                    label: "擦除样式",
                    description: "已删除消息的外观风格",
                    text: "红色文字",
                    overlay: "红色涂层"
                },
                logDeletes: {
                    label: "保存已删除",
                    description: "确定是否保存已删除的消息"
                },
                collapseDeleted: {
                    label: "折叠 已删除",
                    description: "与阻止的消息类似，优化已删除的消息"
                },
                logEdits: {
                    label: "保存编辑",
                    description: "确定是否保存编辑的消息"
                },
                inlineEdits: {
                    label: "内联编辑",
                    description: "将编辑历史记录显示为消息内容的一部分"
                },
                ignoreBots: {
                    label: "忽略机器人",
                    description: "忽略机器人发送的消息"
                },
                ignoreSelf: {
                    label: "忽略我自己",
                    description: "忽略自己的消息"
                },
                ignoreUsers: {
                    label: "忽略用户",
                    description: "要忽略的用户 ID 的逗号分隔列表"
                },
                ignoreChannels: {
                    label: "忽略频道",
                    description: "要忽略的以逗号分隔的通道 ID 列表"
                },
                ignoreGuilds: {
                    label: "忽略服务器",
                    description: "要忽略的服务器 ID 的逗号分隔列表"
                },
                showEditDiffs: {
                    label: "显示编辑差异",
                    description: "显示已编辑消息版本之间的差异"
                },
                separatedDiffs: {
                    label: "分裂差异",
                    description: "通过在差异中单独显示添加和删除来提供更具可读性的视图"
                }
            }
        },
        messageLoggerEnhanced: {
            name: "消息记录器增强型",
            description: "它通过附加功能增强了 MessageLogger 插件。",
            updateImageCacheDir: "视觉缓存目录已成功更新。",
            updateLogsDir: "日志目录已成功更新。",
            failedUpdate: "无法更新目录。",
            blacklist: "黑名单",
            whitelist: "白名单",
            failedToRemove: "消息无法删除",
            successfullyImported: "日志导入成功。",
            errorImportingLogs: "导入日志时发生错误。 检查控制台以获取更多信息。",
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
                cleared: "消息日志数据库和缓存已被清除。"
            },
            context: {
                title: "消息日志",
                jumpToMessage: "前往留言",
                openUserProfile: "打开用户资料",
                copyContent: "复制内容",
                copyUserId: "复制用户 ID",
                copyMessageId: "复制消息 ID",
                copyChannelId: "复制频道 ID",
                copyServerId: "复制服务器 ID",
                deleteLog: "删除日志",
                fromUsernameDm: "来自 {{username}} 的 DM",
                fromGroupDm: "{{channelName}} 群组私信",
                fromServerChannel: "来自服务器 {{serverName}} 上的频道 {{channelName}}",
                moveTypeTo: "将 {{type}} 移至 {{destination}}",
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
                server: "主持人",
                user: "用户",
                channel: "渠道"
            },
            button: {
                chooseFolder: "选择文件夹",
                browse: "戈扎特",
                clearLogs: "清除所有日志",
                clearVisibleLogs: "清晰可见的日志",
                sortOldest: "从最旧到最新排序",
                sortNewest: "从新到旧排序",
                loadMore: "加载更多",
                noResults: "{{tab}} 选项卡中没有结果",
                tryOtherTabs: "尝试使用 {{nextTab}} 或 {{lastTab}} 选项卡",
                importLogs: "导入日志"
            },
            modal: {
                title: "过滤消息",
                deleted: "已删除",
                edited: "有组织",
                ghostPing: "隐形平",
                empty: "空空如也啊",
                importLogs: "ML 增强版现在将日志保存到 IndexedDB。 您需要从日志目录导入旧日志。 导入不会更改现有日志。"
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
                    description: "确定是否保存已删除和编辑的消息。"
                },
                saveImages: {
                    label: "保存图像",
                    description: "保存已删除的附件。"
                },
                sortNewest: {
                    label: "从新到旧排序",
                    description: "按最新对日志进行排序。"
                },
                cacheMessagesFromServers: {
                    label: "缓存来自服务器的消息",
                    description: "通常记录器仅记录白名单ID和DM，启用此选项还将记录所有服务器上的消息。 但是，这可能会超出缓存限制并导致某些消息被跳过。"
                },
                ignoreBots: {
                    label: "忽略机器人",
                    description: "忽略机器人消息。"
                },
                ignoreWebhooks: {
                    label: "Webhookları Yoksay",
                    description: "忽略 webhook 消息。"
                },
                ignoreSelf: {
                    label: "忽略我自己",
                    description: "忽略你自己的消息。"
                },
                ignoreMutedGuilds: {
                    label: "忽略静音服务器",
                    description: "静音服务器上的消息不会被记录。 但是，白名单用户/频道仍会被记录。"
                },
                ignoreMutedCategories: {
                    label: "忽略静音类别",
                    description: "属于静音类别的频道中的消息不会被记录。"
                },
                ignoreMutedChannels: {
                    label: "忽略静音频道",
                    description: "静音频道上的消息不会被记录。"
                },
                alwaysLogDirectMessages: {
                    label: "始终保存私信",
                    description: "始终保存私信。"
                },
                alwaysLogCurrentChannel: {
                    label: "始终保存当前频道",
                    description: "始终保存当前频道。 排除列入黑名单的频道/用户。"
                },
                permanentlyRemoveLogByDefault: {
                    label: "默认永久删除日志",
                    description: "在主 MessageLogger 上下文菜单中，从消息日志中删除的选项默认为永久删除。"
                },
                hideMessageFromMessageLoggers: {
                    label: "隐藏来自记录器的消息",
                    description: "启用后，它会添加一个上下文菜单选项来隐藏来自其他记录器的消息。 它可能不安全，使用风险自负。"
                },
                showLogsButton: {
                    label: "显示日志按钮",
                    description: "切换是否显示工具栏。"
                },
                showWhereMessageIsFrom: {
                    label: "显示消息来源",
                    description: "显示消息的频道/作者和服务器名称。"
                },
                messagesToDisplayAtOnceInLogs: {
                    label: "日志中同时显示的消息数",
                    description: "确定一次在日志中显示的消息数以及加载更多消息时要添加的消息量。"
                },
                hideMessageFromMessageLoggersDeletedMessage: {
                    label: "消息记录器隐藏消息内容",
                    description: "使用隐藏消息记录器时替换消息的内容。"
                },
                messageLimit: {
                    label: "消息限制",
                    description: "要保存的最大消息数。 当超过限制时，旧消息将被删除。 0 = 无限制。"
                },
                attachmentSizeLimitInMegabytes: {
                    label: "附件大小限制 (MB)",
                    description: "要保存的附件的最大大小（以 MB 为单位）。 大于此值的附件将不会被保存。"
                },
                attachmentFileExtensions: {
                    label: "附加文件扩展名",
                    description: "要保存的以逗号分隔的文件扩展名列表。 如果留空，则保存所有附件。"
                },
                cacheLimit: {
                    label: "缓存限制",
                    description: "缓存中保留的最大消息数。 当超过限制时，旧消息将被删除。"
                },
                timeBasedCleanupMinutes: {
                    label: "基于时间的分钟清洁",
                    description: "对早于消息限制的消息进行基于时间的清理的分钟间隔。"
                },
                preserveCurrentChannel: {
                    label: "保持当前频道",
                    description: "启用后，当前所选频道上的消息不受基于时间的清理的影响。"
                },
                whitelistedIds: {
                    label: "白名单ID",
                    description: "列入白名单的服务器、通道或用户 ID。"
                },
                blacklistedIds: {
                    label: "黑名单ID",
                    description: "列入黑名单的服务器、频道或用户 ID。"
                },
                imageCacheDir: {
                    label: "视觉缓存目录",
                    description: "选择保存图像的目录。"
                },
                logsDir: {
                    label: "日志索引",
                    description: "选择日志保存的目录。"
                },
                importLogs: {
                    label: "导入日志",
                    description: "从文件导入日志。"
                },
                exportLogs: {
                    label: "导出日志",
                    description: "从 IndexedDB 导出日志。"
                },
                openLogs: {
                    label: "打开日志",
                    description: "打开日志。"
                },
                openImageCacheFolder: {
                    label: "打开视觉缓存文件夹",
                    description: "打开视觉缓存目录。"
                },
                clearLogs: {
                    label: "清除日志",
                    description: "清除日志。",
                    title: "清除日志",
                    body: "您确定要清除所有日志吗？",
                    confirmText: "清除",
                    cancel: "取消"
                }
            }
        },
        messageNotifier: {
            name: "消息通知程序",
            description: "当选定的用户发送消息时接收通知",
            dm: "私信",
            option: {
                users: {
                    label: "用户",
                    description: "用于接收消息通知的用户 ID 的逗号分隔列表",
                    invalidId: "{{id}} 不是有效的用户 ID"
                }
            },
            notification: {
                title: "{{username}} 发送了一条消息",
                body: "点击前往{{locationName}}"
            }
        },
        messageTags: {
            name: "消息标签",
            description: "它允许您保存消息并通过简单的命令使用它们。",
            notExist: "标签 **{{tagname}}** 不再可用！ 重新启动 Discord 即可修复它:)",
            alreadyExist: "名为 **{{tagname}}** 的标签已存在！",
            sentTag: "**{{tagname}}** 标签已发送！",
            successCreate: "**{{tagname}}** 标签创建成功！",
            allTags: "所有标签：",
            noTags: "UPS！ 还没有标签，请使用 /tag create 创建它们！",
            noDeleteTag: "未找到名为 **{{tagname}}** 的标签，因此无法删除！",
            successDelete: "标签 **{{name}}** 已成功删除！",
            tagPreview: "名为 **{{name}}** 的标签不存在！",
            option: {
                clyde: {
                    label: "克莱德在帖子中留言",
                    description: "启用后，当使用标签时，Clyde 会向您发送一条临时消息。"
                },
                tagsList: {
                    label: "标签列表",
                    description: ""
                }
            },
            command: {
                tags: {
                    description: "管理您自己的标签",
                    option: {
                        create: {
                            description: "创建一个新标签",
                            name: "将触发响应的标签名称",
                            message: "当您使用此主题标签时将发送的消息"
                        },
                        list: {
                            description: "列出所有标签"
                        },
                        delete: {
                            description: "删除标签",
                            name: "待删除的标签名称"
                        },
                        preview: {
                            description: "预览标签而不公开发布",
                            name: "要预览的标签名称"
                        }
                    }
                }
            }
        },
        micLoopbackTester: {
            name: "麦克风环回测试仪",
            description: "将麦克风循环测试图标添加到用户面板",
            button: "麦克风测试周期"
        },
        middleClickTweaks: {
            name: "中键点击调整",
            description: "各种中键单击（鼠标滚轮）改进，例如粘贴和链接打开。",
            option: {
                openScope: {
                    label: "开放范围",
                    description: "它可以防止这些内容类型在单击鼠标中键时打开。",
                    links: "链接",
                    media: "媒体",
                    linksAndMedia: "链接和媒体",
                    none: "没有任何"
                },
                pasteScope: {
                    label: "粘接范围",
                    description: "在某些情况下，中键单击会阻止粘贴。",
                    always: "始终通过中键单击阻止粘贴",
                    focus: "仅当文本区域未聚焦时才阻止",
                },
                pasteThreshold: {
                    label: "粘合阈值",
                    description: "单击中键后重新启用粘贴所需的毫秒数。"
                }
            }
        },
        moreCommands: {
            name: "更多命令",
            description: "Echo、Lenny、Mock 等",
            command: {
                echo: {
                    description: "以 Clyde（本地）身份发送消息"
                },
                lenny: {
                    description: "发送莱尼脸"
                },
                mock: {
                    description: "取笑别人（MOCK People）"
                },
                wordcount: {
                    description: "计算消息中的字数",
                    response: "该消息包含 {{count}} 个单词。"
                },
                flipcoin: {
                    description: "抛硬币并返回结果",
                    heads: "写作",
                    tails: "图拉",
                    response: "钱{{result}}到了。"
                },
                ask: {
                    description: "提出并回答是/否问题",
                    yes: "是的",
                    no: "不",
                    maybe: "或许",
                    askAgain: "稍后再问",
                    definitelyNot: "绝对不是",
                    itIsCertain: "绝对是的"
                },
                randomanimal: {
                    description: "返回随机动物图像",
                    animal: "选择你的动物",
                    cat: "猫",
                    dog: "狗",
                    response: "抱歉，目前无法检索到动物图像"
                },
                randomnumber: {
                    description: "生成两个值之间的随机数",
                    min: "最低限度",
                    max: "最大值",
                    response: "{{min}} 和 {{max}} 之间的随机数：{{number}}"
                },
                choose: {
                    description: "从给定选项中随机选择一个",
                    option: "逗号分隔的选项列表",
                    response: "我的选择：{{选择}}"
                },
                systeminfo: {
                    description: "显示系统信息",
                    platform: "平台",
                    deviceType: "设备类型",
                    mobile: "美孚",
                    desktop: "桌面",
                    browser: "扫描器",
                    cpuCores: "CPU核心",
                    memory: "记忆",
                    screen: "屏幕",
                    languages: "迪尔",
                    network: "白色的",
                    online: "在线的",
                    offline: "离线",
                    failedToFetch: "无法检索系统信息",
                    unknown: "未知"
                },
                getuptime: {
                    description: "显示客户端正常运行时间",
                    response: "**客户端正常运行时间**：{{uptime}} 分钟"
                },
                gettime: {
                    description: "显示当前时间",
                    response: "当前时间：{{time}}"
                },
                transform: {
                    description: "根据指定选项转换文本",
                    transformation: {
                        description: "应用于文本的转换类型",
                        lowercase: "将文本转换为小写",
                        uppercase: "将文本转换为大写",
                        localeLowercase: "将文本转换为原生小写",
                        localeUppercase: "将文本转换为原生大写",
                        same: "保持不变"
                    },
                    repeat: "会重复多少次？",
                    reverse: "是否反转文字",
                    normalize: {
                        description: "文本规范化格式",
                        nfc: "标准化格式 C (NFC)",
                        nfd: "标准化表格 D (NFD)",
                        nfkc: "标准化格式 KC (NFKC)",
                        nfkd: "标准化格式 KD (NFKD)"
                    },
                    text: "要转换的文本"
                }
            }
        },
        moreKaomoji: {
            name: "更多在售的 颜文字 商品",
            description: "向 Discord 添加更多 Kaomoji。 ヽ(´▽`)/"
        },
        moreQuickReactions: {
            name: "更多快速反应",
            description: "改进了消息上下文菜单中的快速响应按钮。",
            option: {
                reactionCount: {
                    label: "反应数",
                    description: "显示的反应数 (0-42)"
                },
                frequentEmojis: {
                    label: "常用表情符号",
                    description: "使用常用的表情符号代替最喜欢的表情符号"
                },
                rows: {
                    label: "他们卖",
                    description: "显示快速反应的行数"
                },
                columns: {
                    label: "专栏",
                    description: "要显示的快速反应的列数"
                },
                compactMode: {
                    label: "紧凑型模组",
                    description: "它将按钮缩放到原始大小的 75%，同时将内部表情符号放大到 125%。 表情符号将是原始大小的 93.75%。 建议至少使用5列"
                },
                scroll: {
                    label: "滚动",
                    description: "启用滚动表情符号列表"
                }
            }
        },
        moreUserTags: {
            name: "更多用户标签",
            description: "添加网络钩子和审核角色（所有者、管理员等）的标签",
            tag: {
                webhook: {
                    name: "网络钩子",
                    description: "该用户是一个网络钩子"
                },
                owner: {
                    name: "所有者",
                    description: "服务器的所有者"
                },
                admin: {
                    name: "行政",
                    description: "具有管理员权限"
                },
                staff: {
                    name: "官方的",
                    description: "可以管理服务器、通道或角色"
                },
                mod: {
                    name: "模组",
                    description: "可以管理消息或踢出/禁止联系人"
                },
                vcmod: {
                    name: "参见模组",
                    description: "可以管理语音聊天"
                },
                chatmod: {
                    name: "聊天模式",
                    description: "可以管理消息"
                }
            },
            modal: {
                example: "例子",
                tag: "票",
                customTextPlaceholder: "标签上的文字（默认：{{displayName}}）",
                messages: "在消息中显示",
                memberList: "显示在成员列表和个人资料中"
            },
            option: {
                dontShowForBots: {
                    label: "不向机器人显示",
                    description: "显示机器人的额外标签（webhooks 除外）"
                },
                dontShowBotTag: {
                    label: "显示机器人标签",
                    description: "仅显示额外标签/隐藏 [APP]"
                },
                showWebhookTagFully: {
                    label: "显示完整的 webhook 标签",
                    description: "在关注的频道中显示完整的 webhook 标签（例如公告）"
                },
                tagSettings: {
                    label: "标签设置",
                    description: "待填补"
                }
            }
        },
        morse: {
            name: "莫尔斯电码",
            description: "与莫尔斯电码相互转换的命令。",
            command: {
                morse: {
                    description: "翻译成摩尔斯电码或从摩尔斯电码翻译过来",
                    message: "要转换的文本"
                }
            }
        },
        moyai: {
            name: "莫亚伊",
            description: "🗿🗿🗿🗿🗿🗿🗿🗿",
            option: {
                volume: {
                    label: "体积",
                    description: "🗿🗿🗿音量"
                },
                quality: {
                    label: "质量",
                    description: "🗿🗿🗿品质",
                    normal: "普通的",
                    hd: "高清"
                },
                triggerWhenUnfocused: {
                    label: "失焦时触发",
                    description: "即使窗口未聚焦也触发🗿"
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
            name: "音乐控制",
            description: "多种服务的音乐控制和歌词",
            option: {
                SpotifySectionTitle: {
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
                    description: "Spotify 打开 URI 而不是 URL。 仅在安装了 Spotify 后才有效，并且可能不适用于所有平台"
                },
                previousButtonRestartsTrack: {
                    label: "上一个按钮重新开始歌曲",
                    description: "如果播放时间超过3秒，按上一曲按钮从头开始播放当前歌曲"
                },
                TidalSectionTitle: {
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
                YtmSectionTitle: {
                    label: "YouTube 音乐",
                    description: "此设置需要 {{app}}"
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
                ShowMusicNoteOnNoLyrics: {
                    label: "如果没有歌词则显示注释",
                    description: "找不到歌词时显示注释图标"
                },
                LyricsPosition: {
                    label: "歌词地点",
                    description: "歌词面板的位置",
                    above: "以上玩家",
                    below: "以下玩家"
                },
                LyricsProvider: {
                    label: "歌词提供者",
                    description: "歌词来源",
                    spotify: "Spotify（音乐匹配）",
                    LRCLIB: "LRCLIB"
                },
                TranslateTo: {
                    label: "翻译成您的语言",
                    description: "翻译歌词 - 更改此项会清除现有翻译",
                    cleared: "翻译已清理"
                },
                LyricsConversion: {
                    label: "歌词转换",
                    description: "自动翻译或罗马化歌词",
                    none: "没有任何",
                    translate: "转变",
                    romanize: "罗马化 Et"
                },
                FallbackProvider: {
                    label: "备份提供商",
                    description: "如果一个歌词提供者失败，请尝试另一个"
                },
                ShowFailedToasts: {
                    label: "显示失败通知",
                    description: "歌词加载失败时显示通知"
                },
                PurgeLyricsCache: {
                    label: "清除歌词缓存",
                    description: "删除所有缓存的歌词和翻译",
                    button: "清除缓存",
                    cacheLyricsPurged: "歌词缓存已清除"
                }
            },
            context: {
                spotify: {
                    label: "Spotify 歌词菜单",
                    type: "Spotify {{type}} 菜单",
                    copy: "复制 {{type}} 名称",
                    link: "复制 {{type}} 链接",
                    open: "在 Spotify 中打开 {{type}}",
                    album: "Spotify 专辑菜单"
                },
                tidal: {
                    label: "潮汐歌词菜单",
                    lyrics: "潮汐",
                    type: "潮汐{{name}}菜单",
                    copy: "复制名称 {{name}}",
                    open: "在 Tidal 上打开 {{name}}",
                    album: "潮汐专辑菜单"
                },
                ytm: {
                    type: "YouTube 音乐 {{name}} 菜单",
                    copy: "复制名称 {{name}}",
                    open: "{{name}}’i YouTube Music’te Aç",
                    album: "YouTube 音乐专辑菜单",
                    muted: "静音"
                },
                lyrics: {
                    provider: "歌词提供者",
                    saved: "记录的",
                    notFound: "找不到同步歌词"
                },
                copy: {
                    currentLyrics: "复制当前歌词"
                }
            },
            alert: {
                lyricCopied: "歌词已复制到剪贴板！",
                noLyrics: "没有歌词",
                noLyricsTo: "没有 {{translated}} 的歌词",
                translate: "翻译",
                romanize: "不要罗马化",
                lyricsFetchFailed: "找不到歌词",
                failedToFetchLyrics: "无法检索{{translated}}",
                translation: "翻译",
                romanization: "罗马化",
                failedToFetchTranslation: "无法获取 {{translated}} 歌词翻译"
            },
            modal: {
                install: {
                    title: "如何安装",
                    install: "{{link}} 从此处安装，然后转到 TidaLuna 设置 → 附加商店 → 安装 @vmohammad/api",
                    tidaluna: "没有露娜"
                },
                player: {
                    noPlaying: "没有曲目播放",
                    artist: "艺术家：",
                    album: "专辑：",
                    noLyrics: "找不到歌词:(",
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
                failed: "创建窗口失败:(",
                checkConsole: "检查控制台是否有错误",
                invalidUrlCustomApi: "自定义 API 服务器 URL 格式无效"
            }
        },
        mutualGroupDMs: {
            name: "互助组DM",
            description: "在个人资料上显示共享群组 DM",
            no: "没有共同组",
            mutualGroup: "{{count}} 公共组",
            members: "成员",
            noGroup: "没有公共群组 DM",
            header: "常见群体"
        },
        neverPausePreviews: {
            name: "永不暂停预览",
            description: "即使应用程序失去焦点，也可以防止暂停通话/画中画预览（屏幕共享、广播等）。",
            about: "此附加组件会导致 Discord 消耗比平时更多的资源。"
        },
        newGuildSettings: {
            name: "新公会设置",
            description: "加入新服务器时自动静音并更改各种其他设置",
            context: {
                apply: "应用新的服务器设置"
            },
            option: {
                guild: {
                    label: "服务器静音",
                    description: "服务器自动静音"
                },
                messages: {
                    label: "服务器通知设置",
                    description: "服务器通知设置",
                    all: "所有消息",
                    mentions: "仅@提及",
                    nothing: "没有任何",
                    default: "服务器默认"
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
                    label: "将移动通知静音",
                    description: "自动静音移动通知"
                },
                voiceChannels: {
                    label: "语音频道",
                    description: "自动隐藏语音通道中的姓名"
                }
            }
        },
        newPluginsManager: {
            name: "新插件管理器",
            description: "当新插件添加到 Plexcord 时通知您的有用工具",
            modal: {
                title: "新插件和设置",
                description: "自您上次访问以来已添加新的插件和设置。 请查看下面的新增内容。",
                tooltip: "本次会议结束",
                dontShowAgain: "不要再显示",
                restartRequired: "以下插件需要重启",
                restart: "重新启动",
                continue: "德瓦姆·埃特"
            }
        },
        noAppsAllowed: {
            name: "不允许使用应用程序",
            description: "带回机器人的 Bot 标签"
        },
        noBlockedMessages: {
            name: "没有阻止的消息",
            description: "完全隐藏聊天中所有被阻止/忽略的消息",
            option: {
                alsoHideIgnoredUsers: {
                    label: "还隐藏被忽略的用户",
                    description: "还可以隐藏被忽略的用户的消息。"
                },
                disableNotifications: {
                    label: "禁用通知",
                    description: "隐藏被阻止用户的新消息通知。 如果启用了“默认用户隐藏”功能并且触发通知的用户不在“例外用户”列表中，则以下内容将始终适用。"
                },
                allowAutoModMessages: {
                    label: "允许 AutoMod 消息",
                    description: "允许 AutoMod 发送的消息不经过滤地通过。"
                },
                hideBlockedUserReplies: {
                    label: "隐藏被阻止的用户回复",
                    description: "隐藏来自您之前参与的线程中被阻止的用户的消息。"
                },
                defaultHideUsers: {
                    label: "默认用户隐藏",
                    description: "如果启用，来自被阻止用户的消息将被完全隐藏，并且来自例外列表中用户 ID 的消息将被折叠（默认 Discord 行为）。 如果禁用，来自被阻止用户的消息将被折叠，并且来自例外列表中的用户 ID 的消息将被完全隐藏。"
                },
                overrideUsers: {
                    label: "例外用户",
                    description: "要隐藏或折叠的以逗号分隔的用户 ID 列表，而不是上面选择的默认行为。"
                }
            }
        },
        noBulletPoints: {
            name: "无要点",
            description: "Markdown 项目符号 (•、-、*) 阻止您写作（坏习惯）"
        },
        noDeepLinks: {
            name: "禁用深层链接",
            description: "禁用试图强制打开 Discord 桌面应用程序的烦人的深度链接功能"
        },
        noDeleteSafety: {
            name: "禁止删除安全",
            description: "删除删除服务器时删除“输入服务器名称”要求",
            option: {
                confirmModal: {
                    label: "确认窗口",
                    description: "“您确定要删除此服务器吗？”显示确认窗口？"
                }
            },
            modal: {
                title: "删除服务器？",
                body: "如果这还不是很明显的话，它将是永久性的。",
                confirm: "西尔",
                cancel: "取消"
            }
        },
        noDevtoolsWarning: {
            name: "无开发工具警告",
            description: "禁用控制台上的“LET'S HIT”警告横幅。 作为副作用，它还可以防止 Discord 隐藏其令牌，从而防止随机注销。"
        },
        noF1: {
            name: "F1号",
            description: "F1 禁用帮助快捷方式。"
        },
        noMaskedUrlPaste: {
            name: "无屏蔽网址粘贴",
            description: "当粘贴链接并选择文本时，它会阻止该链接被粘贴为屏蔽 URL。"
        },
        noMirroredCamera: {
            name: "无镜像相机",
            description: "它可以防止相机镜像屏幕。"
        },
        noModalAnimation: {
            name: "无模态动画",
            description: "禁用所有模式窗口中的打开/关闭动画。"
        },
        noMosaic: {
            name: "无马赛克",
            description: "删除 Discord 的视觉马赛克布局。",
            option: {
                inlineVideo: {
                    label: "内嵌视频",
                    description: "播放视频而不循环模式。"
                }
            }
        },
        noNitroUpsell: {
            name: "无硝基追加销售",
            description: "通过欺骗客户认为您拥有 Nitro，从 Discord 中删除所有 Nitro 销售通知。"
        },
        noOnboarding: {
            name: "没有入职",
            description: "它通过跳过 Discord 的服务器加入过程来允许更快的登录。"
        },
        noOnboardingDelay: {
            name: "无入职延迟",
            description: "绕过缓慢且烦人的服务器加入延迟。"
        },
        noPendingCount: {
            name: "无待处理计数",
            description: "删除了传入好友请求、消息请求和 Nitro 优惠的通知数量。",
            option: {
                hideFriendRequestsCount: {
                    label: "隐藏好友请求计数",
                    description: "隐藏传入好友请求的数量"
                },
                hideMessageRequestsCount: {
                    label: "隐藏消息请求计数",
                    description: "隐藏消息请求数"
                },
                hidePremiumOffersCount: {
                    label: "隐藏 Nitro 优惠计数",
                    description: "隐藏硝基优惠数量"
                }
            }
        },
        noProfileThemes: {
            name: "无个人资料主题",
            description: "它完全删除了除了你自己之外的所有人的 Nitro 个人资料主题。"
        },
        noPushToTalk: {
            name: "无一键通",
            description: "绕过需要语音活动的一键通要求。"
        },
        noReplyMention: {
            name: "没有回复提及",
            description: "默认情况下禁用回复 ping。",
            option: {
                userList: {
                    label: "用户列表",
                    description: "允许或免除 ping 操作的用户列表（必须用逗号或空格分隔）"
                },
                roleList: {
                    label: "角色列表",
                    description: "允许或免除 ping 的角色列表（必须用逗号或空格分隔）"
                },
                shouldPingListed: {
                    label: "Ping 列出",
                    description: "行为",
                    dontPing: "Ping 列出的用户/角色",
                    onlyPing: "仅 Ping 列出的用户/角色"
                },
                inverseShiftReply: {
                    label: "倒档响应行为",
                    description: "反转 Discord 的轮班回复行为（启用时轮班回复时提及用户）"
                }
            }
        },
        normalizeMessageLinks: {
            name: "规范化消息链接",
            description: "从消息链接中删除 canary/ptb 前缀。"
        },
        noRoleHeaders: {
            name: "无角色标头",
            description: "我们都是平等的！ ！从成员列表中删除角色头衔。"
        },
        noRPC: {
            name: "无RPC",
            description: "Discord 禁用丰富的存在。"
        },
        noServerEmojis: {
            name: "来自服务器表情符号",
            description: "服务器不在自动完成菜单中显示表情符号。",
            option: {
                shownEmojis: {
                    label: "显示表情符号",
                    description: "选择要在自动完成菜单中显示的表情符号",
                    onlyUnicode: "仅限 Unicode 表情符号",
                    currentServer: "Unicode 表情符号和当前服务器上的表情符号",
                    all: "Unicode 表情符号和所有服务器表情符号（Discord 默认）"
                }
            }
        },
        noSystemBadge: {
            name: "无系统徽章",
            description: "禁用任务栏和系统托盘上的未读通知标志。"
        },
        notificationTitle: {
            name: "通知标题",
            description: "使桌面通知的信息更丰富。"
        },
        notificationVolume: {
            name: "通知音量",
            description: "设置 Discord 通知的自定义音量。",
            option: {
                notificationVolume: {
                    label: "通知声音",
                    description: "通知音量"
                }
            }
        },
        noTypingAnimation: {
            name: "无打字动画",
            description: "禁用聊天中的打字动画。"
        },
        noUnblockToJump: {
            name: "无法跳跃",
            description: "它允许您跳过来自被阻止或被忽略的用户（可能还有垃圾邮件发送者）的消息，而无需取消阻止。"
        },
        onePingPerDM: {
            name: "OnePingPerDM",
            description: "即使用户在私信中连续发送未读消息，您也只会收到一条声音通知。",
            option: {
                channelToAffect: {
                    label: "受影响的渠道类型",
                    description: "选择插件将影响的 DM 类型",
                    both: "两个都",
                    user: "用户私信",
                    group: "群组私信"
                },
                allowMentions: {
                    label: "@AllowMentions",
                    description: "获取@提及的声音通知"
                },
                allowEveryone: {
                    label: "允许@everyone",
                    description: "在群组 DM 中获取 @everyone 和 @here 的声音通知"
                },
                ignoreUsers: {
                    label: "要忽略的用户",
                    description: "用户 ID 永远不会限制通知（用逗号 + 空格分隔）"
                },
                alwaysPlaySound: {
                    label: "始终播放声音",
                    description: "即使通知声音被禁用也播放声音"
                }
            }
        },
        openInApp: {
            name: "在应用程序中打开",
            description: "在相关应用程序中打开链接，而不是在浏览器中打开",
            option: {
                spotify: {
                    label: "Spotify",
                    description: "在 Spotify 应用程序中打开 Spotify 链接"
                },
                steam: {
                    label: "蒸汽",
                    description: "在 Steam 应用程序中打开 Steam 链接"
                },
                epic: {
                    label: "史诗游戏",
                    description: "在 Epic Games Launcher 中打开 Epic Games 链接"
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
                    description: "在 VRChat 应用程序中打开 VRChat 链接"
                }
            },
            notification: {
                open: "在本机应用程序中打开链接"
            }
        },
        overrideForumDefaults: {
            name: "覆盖论坛默认值",
            description: "允许您覆盖默认的论坛布局/排序顺序。 您仍然可以逐个频道进行更改。",
            option: {
                defaultLayout: {
                    label: "默认布局",
                    description: "选择用作默认布局的布局",
                    list: "列表",
                    gallery: "画廊"
                },
                defaultSortOrder: {
                    label: "默认排序顺序",
                    description: "选择默认使用的排序顺序",
                    recentlyActive: "最后活跃",
                    datePosted: "发布日期"
                }
            }
        },
        partyMode: {
            name: "派对模式",
            description: "让您使用派对模式，因为派对永远不会结束✨",
            option: {
                superIntensePartyMode: {
                    label: "超激烈的派对模式",
                    description: "聚会密度",
                    normal: "普通的",
                    better: "更好的",
                    projectX: "X项目"
                }
            }
        },
        pauseInvitesForever: {
            name: "永远暂停邀请",
            description: "它恢复了 Discord 愚蠢地删除的“无限期暂停邀请”选项。",
            pauseIndefinitely: "无限期暂停"
        },
        permissionFreeWill: {
            name: "许可自由意志",
            description: "禁用频道权限管理中的客户端限制。",
            option: {
                lockout: {
                    label: "僵局",
                    description: "绕过权限崩溃保护（“您确定要这样做吗？”）"
                },
                onboarding: {
                    label: "起始要求",
                    description: "绕过可能使服务器不兼容的入职要求（“此更改可能使您的服务器不兼容[...]”）"
                }
            }
        },
        permissionsViewer: {
            name: "权限查看器",
            description: "允许您查看用户或频道拥有的权限以及服务器的角色。",
            view: "查看权限",
            option: {
                permissionsSortOrder: {
                    label: "权限排序顺序",
                    description: "用于确定角色如何向用户授予特定权限的排序方法",
                    highest: "最高角色",
                    lowest: "最低的角色"
                }
            },
            icon: {
                denied: "被拒绝",
                allowed: "允许",
                notOverwritten: "未覆盖"
            },
            context: {
                permissions: "权限"
            },
            modal: {
                title: "权限",
                noPermissions: "没有权限显示！",
                owner: "所有者",
                grantedBy: "宽容的",
                serverOwner: "服务器所有者",
                ownerRole: "所有者",
                sortingBy: "{{method}} 按优先级排序",
                highest: "最高角色",
                lowest: "最低的角色",
                details: "角色详情"
            }
        },
        petpet: {
            name: "宠物宠物",
            description: "添加 /petpet 命令以从任何图像创建 petpet gif",
            command: {
                petpet: {
                    description: "创建宠物 gif。 您只能指定其中一个图像选项",
                    delay: "每帧之间的延迟。 默认值为 20。",
                    resolution: "gif 的分辨率。 默认值为 120。如果您输入了一个疯狂的数字并且 Discord 冻结了，那是您的错。",
                    image: "使用的图像附件",
                    url: "获取图片的URL",
                    user: "其头像将用作图像的用户",
                    noServerPfp: "使用“用户”选项时使用普通头像而不是特定于服务器",
                    error: {
                        noImage: "没有指定图片！",
                        delayTooLow: "延迟必须至少为 20。",
                    }
                }
            },
            error: {
                uploadNotImage: "上传的文件不是图像",
                fetchUserFailed: "检索用户失败。 检查控制台以获取更多信息。",
                fetchImageFailed: "加载 {{url}} 时发生错误。 检查控制台以获取更多信息。"
            }
        },
        pictureInPicture: {
            name: "画中画",
            description: "为视频添加画中画功能（在“下载”按钮旁边）",
            tooltip: "切换画中画",
            option: {
                loop: {
                    label: "环形",
                    description: "是否循环画中画视频"
                }
            }
        },
        pinDMs: {
            name: "PinDM",
            description: "允许您将私人频道 (DM) 固定到 DM 列表的顶部。 您可以右键单击 DM 来固定/删除或更改 DM 的顺序。",
            context: {
                category: {
                    label: "DM 类别菜单",
                    edit: "编辑类别",
                    up: "向上移动",
                    down: "下移",
                    delete: "删除类别",
                    unnamed: "匿名的"
                },
                pin: {
                    label: "DM 萨比特",
                    addCategory: "类别 恶心"
                },
                unPin: {
                    label: "取消固定 DM",
                    move: "移至类别"
                }
            },
            option: {
                pinOrder: {
                    label: "固定订单",
                    description: "固定的 DM 应该按什么顺序显示？",
                    lastMessage: "截至最后一条消息日期",
                    custom: "私人（通过右键单击频道更改顺序）"
                },
                canCollapseDmSection: {
                    label: "可折叠固定部分",
                    description: "使未分类的 DM 部分可折叠"
                },
                dmSectionCollapsed: {
                    label: "DM 部分缩小",
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
                    name: "姓名",
                    color: "颜色",
                    save: "节省",
                    create: "创造"
                }
            }
        },
        pingNotifications: {
            name: "Ping 通知",
            description: "可定制的通知和改进的提及格式",
            option: {
                friends: {
                    label: "朋友们",
                    description: "当您的朋友在服务器上发送消息时收到通知"
                },
                mentions: {
                    label: "提及",
                    description: "当有人直接 @提及您时收到通知"
                },
                dms: {
                    label: "DM'ler",
                    description: "获取私信 (DM) 通知"
                },
                showInActive: {
                    label: "在活跃频道上显示",
                    description: "即使当前活动的频道也显示通知"
                },
                ignoreMuted: {
                    label: "忽略静音",
                    description: "绕过来自静音服务器、频道或用户的通知"
                }
            },
            unknown: "未知",
            dm: "DM",
            groupDM: "小组DM",
            title: "频道 {{channelName}} 上的 {{username}}"
        },
        pinIcon: {
            name: "引脚图标",
            description: "向固定消息添加固定图标。"
        },
        plainFolderIcon: {
            name: "普通文件夹图标",
            description: "它不会在文件夹中显示小服务器图标。"
        },
        platformIndicators: {
            name: "平台指标",
            description: "向用户添加平台指示器（桌面、移动、Web...）。",
            embeddedTooltip: "安慰",
            vrTooltip: "虚拟现实",
            option: {
                list: {
                    label: "列表",
                    description: "在成员列表中显示指标"
                },
                badges: {
                    label: "徽章",
                    description: "在用户个人资料上将指标显示为徽章"
                },
                messages: {
                    label: "留言",
                    description: "显示消息内的指示器"
                },
                colorMobileIndicator: {
                    label: "为您的移动显示屏上色",
                    description: "确定移动指示器是否采用用户状态颜色。"
                },
                showBots: {
                    label: "显示机器人",
                    description: "确定是否在机器人中显示平台指示器"
                }
            }
        },
        platformSpoofer: {
            name: "平台欺骗者",
            description: "模拟您所在的任何平台或设备",
            about: "我们不能保证此附加组件将保护您免受警告或禁止。",
            platform: {
                desktop: "不和谐客户端",
                web: "不和谐网",
                ios: "不和谐 iOS",
                android: "不和谐安卓",
                xbox: "嵌入式不和谐",
                playstation: "嵌入式不和谐",
                vr: "虚拟现实"
            },
            option: {
                platform: {
                    label: "平台",
                    description: "您想以哪个平台的身份出现？",
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
            name: "Plexcord工具箱",
            description: "向应用程序栏添加一个按钮，用于托管 Plexcord 快速操作。",
            tooltip: "Plexcord 工具箱",
            context: {
                openLog: "打开通知日志",
                enableQuickCSS: "启用 QuickCSS",
                openQuickCSS: "打开 QuickCSS",
                openSettings: "打开设置",
                manageThemes: "管理主题"
            },
            option: {
                showPluginMenu: {
                    label: "显示插件菜单",
                    description: "在 Plexcord Toolbox 中显示插件菜单"
                }
            }
        },
        polishWording: {
            name: "波兰语措辞",
            description: "它会进行细微的编辑，使您的消息看起来更漂亮并且语法更好。 查看设置",
            option: {
                quickDisable: {
                    label: "快速禁用",
                    description: "快速停用。 关闭消息编辑而无需重新启动应用程序。"
                },
                blockedWords: {
                    label: "被阻止的单词",
                    description: "不大写的单词（用逗号分隔）。"
                },
                fixApostrophes: {
                    label: "修复撇号",
                    description: "确保缩写包含撇号。"
                },
                expandContractions: {
                    label: "开放缩写",
                    description: "它将缩写词转换为其显式形式（例如 Don't -> Do not）。"
                },
                fixCapitalization: {
                    label: "大小写编辑",
                    description: "允许句子以大写字母开头。"
                },
                fixPunctuation: {
                    label: "正确的标点符号",
                    description: "编辑标点符号周围的空格。"
                },
                fixPunctuationFrequency: {
                    label: "标点频率",
                    description: "在句子末尾添加句号的频率百分比（此功能可能会困扰某些人）。",
                }
            }
        },
        previewMessage: {
            name: "预览留言",
            description: "它允许您在发送消息之前预览消息。",
            tooltip: "预览消息"
        },
        profileSets: {
            name: "轮廓集",
            description: "它允许您保存配置文件预设并通过“设置”中的配置文件部分加载它们。",
            toast: {
                importFailed: "无法导入配置文件预设。 该文件可能无效。",
            },
            option: {
                avatarSize: {
                    label: "头像尺寸",
                    description: "配置文件预设列表中的头像尺寸"
                },
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
                importText: "此部分中您已有 {{existingCount}} 个个人资料。 您想覆盖它们还是与导入的配置文件合并？",
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
            }
        },
        questify: {
            name: "质疑",
            description: "通过一系列功能增强您的任务体验，或者如果您不想要这些功能，则完全禁用它们。",
            quests: "任务",
            context: {
                quest: {
                    label: "任务按钮菜单",
                    ignore: "标记全部忽略",
                    reset: "重置忽略列表",
                    fetch: "获取任务",
                    markAsIgnored: "标记为忽略",
                    unmarkAsIgnored: "删除忽略",
                    stopAuto: "停止自动完成",
                    copyQuestID: "复制任务 ID",
                    startAuto: "启动自动完成"
                }
            },
            settings: {
                questButton: {
                    title: "任务按钮",
                    description: "显示任务按钮，其中带有可选指示器，用于指示服务器列表中无人认领的任务。",
                    leftClick: "左键单击操作",
                    middleClick: "中键单击操作",
                    rightClick: "右键单击操作",
                    visibility: "按钮可见性",
                    unclaimedIndicator: "主动提供的指标",
                    badgeColor: "徽章颜色",
                    rewardDisplay: "奖品展示",
                    includedRewardTypes: "包含的奖励类型",
                    includedRewardTypesDesc: "当播放按钮可见性、徽章计数和警报声音时，仅将具有这些奖励类型的任务计为无人认领。",
                    selectRewardTypes: "选择要包含在无人认领计数中的奖励类型...",
                    noRewardType: "没有受支持的具有此名称的任务功能。",
                    default: "默认",
                    disable: "禁用"
                },
                questFeatures: {
                    title: "任务特点",
                    description: "更改特定任务属性。",
                    popupWarning: "对于已完成的任务和任务进度跟踪，将忽略 {{disablePopup}} 选项。",
                    videoQuestInfo: "{{completeVideo}} 选项将等待视频任务的持续时间并自动将其标记为已完成。",
                    gameQuestInfo: "同样，{{completeGame}} 选项将等待游戏任务的持续时间并自动将其标记为已完成。 仅官方桌面客户端支持此选项。",
                    manualStartWarning: "您必须手动启动任务。 第一次单击会在后台启动任务。 对于视频任务，后续单击将照常打开视频模式。 要取消任务，您可以打开任务图块中的上下文菜单并选择 {{stopAuto}}。",
                    tosWarning: "使用任何这些选项都违反 Discord 的服务条款。 使用风险自负。",
                    selectFeatures: "选择要更改的任务属性。",
                    disablePopup: "禁用帐户面板上的任务弹出窗口",
                    completeVideo: "在后台完成视频任务",
                    completeGame: "在后台完成游戏任务",
                    stopAuto: "停止自动完成"
                },
                restyleQuests: {
                    title: "重新格式化任务",
                    description: "使用可选主题颜色突出显示任务以提高可见性。",
                    precedenceNote: "即使任务被忽略，请求的和过期的任务样式也将优先。",
                    gradientStyle: "渐变风格",
                    assetPreload: "资产引导加载程序",
                    unclaimed: "不请自来的",
                    claimed: "已请求",
                    ignored: "被忽略",
                    expired: "已到期",
                    intenseGradient: "密集重铸渐变",
                    defaultGradient: "默认重铸渐变",
                    blackGradient: "微妙的黑色渐变",
                    noGradient: "无渐变",
                    loadAllAssets: "在页面加载时加载所有任务资源",
                    loadDuringScroll: "在页面滚动期间加载任务资源"
                },
                reorderQuests: {
                    title: "重新排序任务",
                    description: "根据任务的状态对任务进行排序。 当在任务页面上选择“Questify”排序选项时适用。",
                    formatNote: "逗号分隔列表必须包含以下所有内容：{{items}}。",
                    placeholder: "您必须添加 UNCLAIMED、CLAIMED、IGNORED、EXPIRED 全部",
                    invalidFormat: "格式无效。",
                    unclaimedSubsort: "无人认领的子等级",
                    claimedSubsort: "声称的子等级",
                    ignoredSubsort: "被忽略的子目",
                    expiredSubsort: "过期子等级",
                    addedNewest: "添加（最新）",
                    addedOldest: "添加（最旧的）",
                    expiredRecent: "已过期（最新）",
                    expiredLeast: "已过期（至少是最新）",
                    expiringSoon: "即将到期（最近）",
                    expiringLate: "过期（最新）",
                    claimedRecent: "请求（最新）",
                    claimedLeast: "已请求（至少最新）",
                    ignoredQuestProfile: "忽略的任务配置文件",
                    sharedProfile: "共享：忽略此客户端共享上的所有帐户。",
                    privateProfile: "私人：此客户端上的所有帐户都有单独的忽略。",
                    rememberSort: "记住排序选择",
                    rememberFilter: "记住过滤器选择",
                    yes: "是的",
                    no: "不",
                    rememberNote: "此排序和过滤器选择是指“任务”页面上的内置排序和过滤器选项。 仅当在任务页面上选择“Questify”排序选项时，上述自定义排序才适用。 如果禁用调用，则每次打开“任务”页面时都会重置排序或筛选选项。"
                },
                fetchingQuests: {
                    title: "获取任务",
                    description: "配置从 Discord 获取任务的频率并为新任务设置警报。",
                    defaultBehavior: "默认情况下，Discord 仅在安装任务并且您访问任务页面时才显示任务。 这意味着如果没有下面定义的获取间隔，该插件将不会收到全天添加的新任务的通知。",
                    requirement: "这取决于任务按钮是否处于活动状态并设置为 {{unclaimed}}，或者设置为 {{always}} 且启用了无人认领的 {{pill}}、{{badge}} 或 {{both}} 指示器。 否则，无需定期获取任务。",
                    blockWarning: "另外，如果 {{questFeatures}} 设置中阻止了 {{fetchingQuests}}，则此操作将不起作用。",
                    fetchInterval: "获取范围",
                    alertSound: "警告声",
                    intervalPlaceholder: "选择或输入 30 分钟到 12 小时之间的间隔。",
                    intervalFeedback: "间隔时间应在 30 分钟到 12 小时之间。",
                    soundPlaceholder: "选择声音或提供自定义声音 URL。",
                    soundFeedback: "找不到音频或 URL 不是来自受支持的域。",
                    disabled: "残疾人",
                    minutes: "一分钟",
                    minute: "一分钟",
                    hours: "片刻",
                    hour: "片刻",
                    thirtyMinutes: "30分钟",
                    oneHour: "1 时刻",
                    threeHours: "3 时刻",
                    sixHours: "6 时刻",
                    twelveHours: "12 时刻",
                    customSound: "定制声音"
                },
                disableOptions: {
                    everything: "禁用一切",
                    discovery: "禁用探索选项卡",
                    dms: "禁用 DM 中的任务选项卡",
                    fetching: "禁用任务获取",
                    popup: "禁用帐户面板上方的弹出窗口",
                    sponsored: "禁用任务页面上的赞助横幅",
                    badge: "禁用用户个人资料上的徽章",
                    inventory: "禁用礼品库存运输通知",
                    friendsList: "目前正在积极促销的好友列表",
                    membersList: "成员列表活跃播放图标",
                    gameQuests: "在后台完成游戏/活动挑战",
                    videoQuests: "在后台完成视频观看任务",
                    achievementQuests: "在后台完成活动任务",
                    mobileDesktop: "使移动任务与桌面兼容",
                    notifyOnComplete: "任务完成时通知我"
                },
                options: {
                    always: "总是",
                    unclaimed: "不请自来的",
                    never: "绝不",
                    pill: "哈普",
                    badge: "徽章",
                    both: "他们俩",
                    none: "没有任何",
                    openQuests: "开放任务",
                    contextMenu: "上下文菜单",
                    pluginSettings: "插件设置",
                    nothing: "没有什么",
                    orbs: "球体",
                    nitroCodes: "硝基代码",
                    rewardCodes: "奖励代码",
                    inGameItems: "游戏内物品",
                    profileCollectibles: "个人资料集"
                }
            },
            option: {
                disableQuests: {
                    label: "禁用任务",
                    description: "选择要禁用的任务功能。"
                },
                disableQuestsEverything: {
                    label: "禁用一切",
                    description: "禁用所有任务功能。"
                },
                disableQuestsFetchingQuests: {
                    label: "禁用任务获取",
                    description: "禁用从 Discord 获取任务。"
                },
                disableQuestsDirectMessagesTab: {
                    label: "禁用 DM 中的任务选项卡",
                    description: "禁用“私信”页面上的“任务”选项卡。"
                },
                disableQuestsDiscoveryTab: {
                    label: "禁用探索选项卡",
                    description: "禁用探索页面上的任务选项卡。"
                },
                disableQuestsPageSponsoredBanner: {
                    label: "禁用任务页面上的赞助横幅",
                    description: "禁用“任务”页面上的赞助横幅。"
                },
                disableQuestsPopupAboveAccountPanel: {
                    label: "禁用帐户面板上的弹出窗口",
                    description: "禁用帐户面板顶部的任务弹出窗口。"
                },
                disableQuestsBadgeOnUserProfiles: {
                    label: "禁用用户个人资料上的徽章",
                    description: "禁用用户配置文件上的任务徽章。"
                },
                disableQuestsGiftInventoryRelocationNotice: {
                    label: "禁用礼品库存移动通知",
                    description: "礼物清单禁用任务移动通知。"
                },
                disableFriendsListActiveNowPromotion: {
                    label: "禁用好友列表当前正在进行的促销活动",
                    description: "禁用朋友玩的游戏的任务促销。"
                },
                disableMembersListActivelyPlayingIcons: {
                    label: "禁用成员列表中的主动播放图标",
                    description: "禁用成员列表中的活动播放图标。"
                },
                makeMobileQuestsDesktopCompatible: {
                    label: "使移动任务与桌面兼容",
                    description: "使仅限移动设备的任务与桌面兼容。"
                },
                completeVideoQuestsInBackground: {
                    label: "在后台完成视频任务",
                    description: "视频时间结束后在后台完成视频任务。"
                },
                completeGameQuestsInBackground: {
                    label: "在后台完成游戏任务",
                    description: "游戏时间结束后在后台完成游戏任务。"
                },
                completeAchievementQuestsInBackground: {
                    label: "在后台完成活动任务",
                    description: "在后台完成活动挑战。"
                },
                notifyOnQuestComplete: {
                    label: "任务完成时通知我",
                    description: "任务自动完成时显示通知。"
                },
                questButton: {
                    label: "任务按钮",
                    description: "在服务器列表中显示任务按钮。"
                },
                questButtonDisplay: {
                    label: "任务按钮外观",
                    description: "服务器列表中的任务按钮使用哪种显示类型。"
                },
                questRewardIncludeRewardCode: {
                    label: "包含奖励代码",
                    description: "查看任务计数时包括带有奖励代码的任务。"
                },
                questRewardIncludeNitroCode: {
                    label: "包括 Nitro 代码",
                    description: "查看任务计数时包括 Nitro 编码任务。"
                },
                questRewardIncludeInGame: {
                    label: "包括游戏内奖励",
                    description: "查看任务计数时，包括带有游戏内奖励的任务。"
                },
                questRewardIncludeCollectibles: {
                    label: "包括收藏",
                    description: "查看任务计数时将任务包含在可收集物品中。"
                },
                questRewardIncludeOrbs: {
                    label: "包括球体",
                    description: "查看任务计数时包括赢得全球奖的任务。"
                },
                questButtonUnclaimed: {
                    label: "任务按钮无人认领指示器",
                    description: "服务器列表中任务按钮上的无人认领指示器使用哪种显示类型。"
                },
                questButtonBadgeColor: {
                    label: "任务按钮徽章颜色",
                    description: "服务器列表中任务按钮徽章的颜色。"
                },
                questButtonLeftClickAction: {
                    label: "左键单击操作",
                    description: "左键单击服务器列表中的任务按钮时要执行的操作。"
                },
                questButtonMiddleClickAction: {
                    label: "中键单击操作",
                    description: "在服务器列表中单击任务按钮时要执行的操作。"
                },
                questButtonRightClickAction: {
                    label: "右键单击操作",
                    description: "右键单击服务器列表中的任务按钮时要执行的操作。"
                },
                fetchingQuests: {
                    label: "获取任务",
                    description: "从 Discord 中带来任务。"
                },
                fetchingQuestsInterval: {
                    label: "任务获取范围",
                    description: "从 Discord 获取任务的时间间隔（以秒为单位）。"
                },
                fetchingQuestsAlert: {
                    label: "任务获取警报",
                    description: "检测到新任务时将播放的声音。"
                },
                fetchingQuestsAlertVolume: {
                    label: "任务获取警报量",
                    description: "检测到新任务时播放的音量。"
                },
                restyleQuests: {
                    label: "重新格式化任务",
                    description: "自定义任务页面上任务图块的外观。"
                },
                restyleQuestsUnclaimed: {
                    label: "重新格式化任务 - 主动提供",
                    description: "任务页面上无人认领的任务图块的颜色。"
                },
                restyleQuestsClaimed: {
                    label: "重新格式化任务 - 请求",
                    description: "任务页面上已领取的任务图块的颜色。"
                },
                restyleQuestsIgnored: {
                    label: "重新格式化任务 - 忽略",
                    description: "任务页面上忽略的任务图块的颜色。"
                },
                restyleQuestsExpired: {
                    label: "重新格式化任务 - 已过期",
                    description: "任务页面上过期任务图块的颜色。"
                },
                restyleQuestsGradient: {
                    label: "重新格式化任务 - 渐变",
                    description: "任务图块中使用的渐变样式。"
                },
                restyleQuestsPreload: {
                    label: "重新格式化任务 - 引导加载程序",
                    description: "尝试为任务图块预加载资源。"
                },
                reorderQuests: {
                    label: "重新排序任务",
                    description: "根据任务的状态对任务进行排序。 留空以进行默认排序。 逗号分隔列表必须包含以下所有内容：UNCLAIMED、CLAIMED、IGNORED、EXPIRED。"
                },
                unclaimedSubsort: {
                    label: "无人认领的子等级",
                    description: "无人认领任务的子排序方法。"
                },
                claimedSubsort: {
                    label: "声称的子等级",
                    description: "请求任务的子排序方法。"
                },
                ignoredSubsort: {
                    label: "被忽略的子目",
                    description: "忽略任务的子排序方法。"
                },
                expiredSubsort: {
                    label: "过期子等级",
                    description: "过期任务的降序方法。"
                },
                unclaimedUnignoredQuests: {
                    label: "未请求的未忽略的任务",
                    description: "跟踪无人认领和未被忽略的任务数量。"
                },
                onQuestsPage: {
                    label: "在任务页面上",
                    description: "用户当前是否位于“任务”页面上。"
                },
                triggerQuestsRerender: {
                    label: "触发任务重新渲染",
                    description: "通过更改此设置来触发任务页面的重新呈现。"
                },
                ignoredQuestProfile: {
                    label: "忽略的任务配置文件",
                    description: "用于忽略任务的配置文件。"
                },
                rememberQuestPageSort: {
                    label: "记住任务页面排序",
                    description: "记住“任务”页面上上次使用的序列。"
                },
                rememberQuestPageFilters: {
                    label: "记住任务页面过滤器",
                    description: "记住“任务”页面上上次使用的过滤器。"
                },
                lastQuestPageSort: {
                    label: "最新任务页面排名",
                    description: "记住“任务”页面上上次使用的序列。"
                },
                lastQuestPageFilters: {
                    label: "最新任务页面过滤器",
                    description: "记住“任务”页面上上次使用的过滤器。"
                },
                ignoredQuestIDs: {
                    label: "忽略的任务 ID",
                    description: "被忽略的任务 ID 的数组。"
                },
                resumeQuestIDs: {
                    label: "正在进行的任务 ID",
                    description: "在后台自动完成的任务 ID 数组。"
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
                orbs: "{{orbQuantity}} 球体位于 {{completingText}} 中。",
                article: "{{itemName}} 的 {{completingText}}。",
                unrecognized: "{{completingText}} 表示无法识别的奖励类型。"
            },
            notification: {
                completed: {
                    title: "工作完成了",
                    body: "{{questName}} 任务已完成。"
                }
            }
        },
        questionMarkReplacement: {
            name: "问号替换",
            description: "如果消息仅包含问号，它将用所选字符串替换所有问号。",
            option: {
                replace: {
                    label: "改变",
                    description: "替换为"
                }
            }
        },
        quickMention: {
            name: "快速提及",
            description: "在消息操作栏中添加快速提及按钮。",
            tooltip: "快速投注"
        },
        quickReply: {
            name: "快速回复",
            description: "使用热键回复（ctrl + 向上/向下）和编辑（ctrl + shift + 向上/向下）消息。",
            option: {
                shouldMention: {
                    label: "我应该提一下",
                    description: "默认情况下 Ping 响应",
                    noReplyMentionPlugin: "关注 NoReplyMention 插件（如果启用）",
                    enabled: "有效的",
                    disabled: "残疾人"
                },
                ignoreBlockedAndIgnored: {
                    label: "忽略阻止和忽略",
                    description: "浏览时忽略来自被阻止/忽略的用户的消息"
                }
            }
        },
        quickThemeSwitcher: {
            name: "快速主题切换器",
            description: "使用键盘快捷键在主题之间快速切换。",
            about: {
                title: "热键",
                description: "使用 Ctrl/Cmd+Shift+箭头键进行导航（左/右：在主题之间循环，向上：启用，向下：禁用）。",
                reload: "按 Ctrl/Cmd+Shift+Alt 刷新主题列表。"
            },
            modal: {
                added: "添加了 {{count}} 个新主题",
                removed: "已删除 {{count}} 个主题",
                reloaded: "{{themeCount}} 主题已重新加载",
                addedLocal: "添加了 {{count}} 个本地主题",
                removedLocal: "已删除 {{count}} 个原生主题",
            },
            option: {
                includeLocal: {
                    label: "包括原生主题",
                    description: "在列表中包括您设备上的本机主题"
                },
                includeOnline: {
                    label: "包括在线主题",
                    description: "在列表中包括在线主题"
                },
                sortOrder: {
                    label: "排序方式",
                    description: "排序方式",
                    asc: "A'dan Z'ye",
                    desc: "兹登阿亚",
                    recent: "在儿子"
                },
                autoRefresh: {
                    label: "自动刷新",
                    description: "检测到更改时自动刷新主题列表"
                },
                showNotifications: {
                    label: "显示通知",
                    description: "添加或删除主题时显示通知"
                }
            }
        },
        quoter: {
            name: "报价者",
            description: "让您可以根据消息创建鼓舞人心的引言图像",
            context: {
                quote: "引述"
            },
            modal: {
                title: "4K'达亚卡拉",
                grayscale: "黑白",
                export: "出口",
                send: "发送",
                saveAsGIF: "另存为 GIF",
                saveDescription: "将图像保存/发送为 GIF 而不是 PNG",
                showWatermark: "显示水印",
                watermarkText: "Filigran Metni（最多 32 个字符）"
            },
            option: {
                quoteFont: {
                    label: "报价字体",
                    description: "引文文本的字体（作者/用户名始终使用 M PLUS Rounded 1c）",
                    mPlusRounded: "M PLUS 圆形 1c",
                    openSans: "打开无字体",
                    momoSignature: "莫莫签名",
                    lora: "劳拉",
                    merriWeather: "梅里韦瑟"
                },
                watermark: {
                    label: "花丝",
                    description: "自定义水印文本（最多 32 个字符）"
                },
                grayscale: {
                    label: "黑白",
                    description: "默认启用黑白"
                },
                showWatermark: {
                    label: "显示水印",
                    description: "默认显示水印"
                },
                saveAsGif: {
                    label: "另存为 GIF",
                    description: "默认另存为 GIF"
                }
            }
        },
        randomVoice: {
            name: "随机语音",
            description: "在静音按钮旁边添加随机语音通话加入按钮。",
            tooltip: "随机语音",
            context: {
                label: "声音调节器",
                amountLabel: "用户数量",
                spacesLabel: "空缺",
                voiceLabel: "SES 利米蒂",
                selfLabel: "您自己的设置",
                select: {
                    servers: "选择服务器",
                    list: "选择列表",
                    filters: "选择过滤器",
                    amount: "用户数量",
                    userAmount: "{{amount}} 用户",
                    parameters: "参数",
                    moreThan: "多于",
                    lessThan: "少于那个",
                    equalTo: "等于",
                    spaces: "空缺",
                    voice: "它的局限性"
                },
                filter: {
                    muted: "静音",
                    deafened: "聋了",
                    camera: "相机",
                    stream: "广播",
                    includeFilters: "包括过滤器",
                    avoidFilters: "避免过滤器"
                },
                reset: {
                    list: "重置列表"
                },
                voice: {
                    label: "声音设置",
                    auto: {
                        mute: "自动静音",
                        deafen: "自动隔音",
                        camera: "自动相机",
                        stream: "自动广播",
                        leaveWhenEmpty: "当你有空时离开",
                        navigate: "自动导航",
                        stage: "避免舞台通道",
                        afk: "避免AFK频道"
                    }
                },
                invalid: {
                    server: "无效服务器"
                }
            },
            option: {
                userAmountOperation: {
                    label: "用户数交易",
                    description: "选择针对用户数量的操作"
                },
                userAmount: {
                    label: "用户数量",
                    description: "选择用户数量"
                },
                spacesLeftOperation: {
                    label: "职位空缺流程",
                    description: "选择最大用户数的操作"
                },
                spacesLeft: {
                    label: "空缺",
                    description: "选择可用空间量"
                },
                vcLimitOperation: {
                    label: "音频通道限制操作",
                    description: "选择音频通道限制的操作。"
                },
                vcLimit: {
                    label: "音频通道限制",
                    description: "选择音频通道限制"
                },
                servers: {
                    label: "服务器",
                    description: "要包括的服务器"
                },
                autoNavigate: {
                    label: "自动导航",
                    description: "它会自动转到音频通道。"
                },
                autoCamera: {
                    label: "自动相机",
                    description: "自动打开相机"
                },
                autoStream: {
                    label: "自动广播",
                    description: "自动开始广播"
                },
                selfMute: {
                    label: "自动静音",
                    description: "当您加入音频频道时，它会自动将您的麦克风静音。"
                },
                selfDeafen: {
                    label: "自动隔音",
                    description: "当您加入语音频道时，它会自动使您耳聋。"
                },
                leaveEmpty: {
                    label: "当你有空时离开",
                    description: "当语音通道变空时，它会随机寻找另一个呼叫。"
                },
                avoidStages: {
                    label: "避免舞台通道",
                    description: "避免加入舞台类型的音频通道。"
                },
                avoidAfk: {
                    label: "避免AFK频道",
                    description: "AFK 避免加入音频通道。"
                },
                video: {
                    label: "视频",
                    description: "搜索打开摄像头的用户"
                },
                stream: {
                    label: "广播",
                    description: "搜索正在广播的用户"
                },
                mute: {
                    label: "静音",
                    description: "搜索静音的用户"
                },
                deafen: {
                    label: "聋了",
                    description: "搜索失聪用户"
                },
                includeStates: {
                    label: "包括过滤器",
                    description: "允许包含特定的用户状态"
                },
                avoidStates: {
                    label: "避免过滤器",
                    description: "允许避免某些用户情况"
                }
            },
            alert: {
                failed: "找不到音频通道！"
            }
        },
        reactErrorDecoder: {
            name: "React错误解码器",
            description: "React 将错误代码转换为人类可读的消息。"
        },
        readAllNotificationsButton: {
            name: "阅读所有通知按钮",
            description: "在通知面板中添加一个按钮，只需单击一下即可将所有通知标记为已读。",
            button: "阅读全部"
        },
        recentDMSwitcher: {
            name: "最近的DM切换器",
            description: "使用 Ctrl+Tab 在最近使用的 DM 之间切换（Ctrl+Shift+Tab 反向）",
            option: {
                visualStyle: {
                    label: "视觉风格",
                    description: "切换时出现的视觉指示器样式",
                    overlay: "图层（Alt+Tab 样式）",
                    toast: "通知（状态消息）",
                    off: "关闭"
                },
                overlayMode: {
                    label: "图层模式",
                    description: "图层内容",
                    row: "最后对话线",
                    current: "仅可用",
                },
                amountOfUsers: {
                    label: "用户数量",
                    description: "图层上显示的用户数"
                },
                overlayRowLength: {
                    label: "层行长度",
                    description: "行中显示的最近 DM 的数量"
                },
                overlayShowAvatars: {
                    label: "显示图层配置文件图像",
                    description: "在图层上显示用户个人资料图像"
                },
                toastDurationMs: {
                    label: "通知时间（毫秒）",
                    description: "在图层上显示个人资料图像"
                },
                clearRdms: {
                    label: "清除 RDMS 列表",
                    description: "测试工具：清除RDM列表",
                    toast: "RDMS 历史记录已清除",
                    button: "清除 RDM 历史记录"
                }
            },
            modal: {
                unknown: "未知",
                dm: "DM",
                group: "小组DM",
                channel: "渠道",
                switchingTo: "切换到{{name}}"
            }
        },
        relationshipNotifier: {
            name: "关系通知者",
            description: "当朋友、群聊或服务器删除您时通知您。",
            option: {
                notices: {
                    label: "通知",
                    description: "删除时在屏幕顶部显示通知（如果您不想错过任何通知，请使用此通知）。"
                },
                offlineRemovals: {
                    label: "离线删除",
                    description: "如果您在离线状态下打开 Discord 时被删除，请发送通知。"
                },
                friends: {
                    label: "朋友们",
                    description: "当朋友将您从他们的列表中删除时通知我"
                },
                friendRequestCancels: {
                    label: "好友请求取消",
                    description: "当好友请求被取消时通知我"
                },
                servers: {
                    label: "服务器",
                    description: "从服务器删除时发出通知"
                },
                groups: {
                    label: "团体",
                    description: "从群聊中删除时通知我"
                }
            },
            notification: {
                removedFriend: "{{user}} 已与您取消好友关系。",
                cancelledFriendRequest: "{{user}} 发送的好友请求已被取消。",
                removedFromServer: "您已从 {{server}} 中删除。",
                removedFromGroup: "您已从 {{group}} 中删除。",
                noLongerGroup: "您不再属于{{group}}。",
                noLongerServer: "您不再位于 {{server}} 上。",
                noLongerFriend: "您不再是 {{user}} 的朋友。",
                friendRequestRevoked: "{{user}} 发送的好友请求已被撤回。",
                ok: "好的"
            }
        },
        remix: {
            name: "混音",
            description: "在文件发送按钮的右键菜单中添加“重新混合”选项。 这将在简单的图像编辑器中打开图像，并让您可以选择将编辑后的图像直接发送到聊天室。",
            label: "混音",
            button: {
                send: "发送",
                close: "四分之一",
                brush: "刷子",
                erase: "掸子",
                crop: "庄稼",
                shape: "形状",
                reset: "重置",
                clear: "清除"
            },
            editor: {
                choose: "选择图像",
                browse: "戈扎特",
                rectangle: "长方形",
                ellipse: "椭圆",
                line: "线",
                arrow: "好的",
                fill: "充满"
            }
        },
        repeatMessages: {
            name: "重复消息",
            description: "它允许您快速重新发送消息。 如果您在按住 Shift 键的同时单击“重复”，则会将其作为消息的回复发送。",
            button: "重复（单击）/重复并回复（Shift + 单击）",
            context: {
                repeat: "重复",
                repeatAndReply: "重复并回复"
            }
        },
        replaceGoogleSearch: {
            name: "替换Google搜索",
            description: "它用不同的搜索引擎取代了谷歌搜索。",
            option: {
                customEngineName: {
                    label: "自定义引擎名称",
                    description: "自定义搜索引擎名称"
                },
                customEngineURL: {
                    label: "自定义引擎 URL",
                    description: "您的搜索引擎网址"
                },
                replacementEngine: {
                    label: "备份搜索引擎",
                    description: "将备份搜索引擎替换为特定搜索引擎（而不是添加菜单）",
                    off: "关闭",
                    custom: "特种发动机",
                }
            },
            context: {
                label: "梅特尼阿拉",
                searchWith: "{{name}}阿拉的房子"
            }
        },
        replyPingControl: {
            name: "回复PingControl",
            description: "允许您控制始终或从不 ping 消息回复，还包括白名单功能",
            option: {
                alwaysPingOnReply: {
                    label: "始终回复 Ping",
                    description: "每次有人回复您的消息时都会收到 ping 信号"
                },
                replyPingWhitelist: {
                    label: "响应 Ping 白名单",
                    description: "输入您希望始终收到 ping 响应的用户 ID，以逗号分隔。"
                }
            }
        },
        replyTimestamp: {
            name: "回复时间戳",
            description: "在回复消息预览中显示时间戳"
        },
        revealAllSpoilers: {
            name: "剧透全部揭晓",
            description: "按住 Ctrl 键单击剧透可显示消息中的所有剧透，Ctrl+Shift 可显示整个聊天中的所有剧透"
        },
        reverseImageSearch: {
            name: "反向图像搜索",
            description: "将反向图像搜索选项添加到图像右键菜单",
            context: {
                label: "搜索图片",
                all: "搜索全部"
            }
        },
        reviewDB: {
            name: "评论数据库",
            description: "评价其他用户（向个人资料添加新的设置部分）",
            notification: {
                newReview: "您的个人资料中有新评论！",
                auth: {
                    error: "授权时发生错误",
                    successfully: "登录成功！",
                    failed: "授权失败",
                    review: "请授权添加评论。",
                    opening: "授权窗口打开...",
                    need: "您需要授权才能评估！"
                },
                error: {
                    fast: "您提出请求的速度太快了。 等待几秒钟，然后重试。",
                    fetching: "检索评论时发生错误。",
                    action: {
                        failed: "无法联系到用户 {{action}}",
                        success: "用户已成功{{action}}"
                    }
                }
            },
            modal: {
                delete: {
                    title: "你确定吗？",
                    description: "您真的要删除此评论吗？",
                    confirm: "西尔",
                    cancel: "取消",
                    error: "您必须登录才能删除评论。",
                },
                report: {
                    title: "你确定吗？",
                    description: "您真的要举报此评论吗？",
                    confirm: "宣言",
                    cancel: "取消",
                    error: "您必须登录才能发表评论。",
                },
                block: {
                    title: "你确定吗？",
                    description: "您真的要阻止该用户吗？ 您将不再看到他们的评论。",
                    confirm: "堵塞",
                    cancel: "取消",
                    error: "您必须登录才能阻止用户。",
                },
                blocked: {
                    title: "被阻止的用户",
                    auth: "您尚未登录 ReviewDB。",
                    noBlocked: "没有用户被阻止。",
                    fetch: "检索被阻止的用户时出错"
                },
                reviews: {
                    title: "用户评论",
                    noUser: "似乎还没有人评论过该用户。 你可以成为第一！",
                    noServer: "看起来还没有人评论过这台服务器。 你可以成为第一！"
                }
            },
            button: {
                appeal: "异议",
                ok: "好的",
                more: "更多的",
                reply: "回复@{{user}}",
                update: "更新@{{user}}的评论",
                review: "评论@{{user}}"
            },
            context: {
                view: "查看评论",
                blocked: "您屏蔽了该用户",
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
                    label: "评估通知",
                    description: "启动时通知新评论"
                },
                showWarning: {
                    label: "显示警告",
                    description: "在标题上方显示尊重的警告"
                },
                hideTimestamps: {
                    label: "隐藏时间戳",
                    description: "隐藏评论的时间戳"
                },
                hideBlockedUsers: {
                    label: "隐藏被阻止的用户",
                    description: "隐藏您已阻止的用户的评论"
                },
                buttons: {
                    label: "按钮",
                    manageBlocked: "管理被阻止的用户",
                    support: "支持ReviewDB开发",
                    website: "评论数据库网站",
                    server: "ReviewDB 支持服务器"
                }
            }
        },
        richMagnetLinks: {
            name: "富磁力链接",
            description: "将磁力链接视为消息链接（带预览）",
            unknown: "未知的文件名"
        },
        roleColorEverywhere: {
            name: "角色色彩无处不在",
            description: "尽可能显示顶级角色颜色",
            option: {
                chatMentions: {
                    label: "聊天提及",
                    description: "在聊天提及中显示角色颜色（包括消息框）"
                },
                memberList: {
                    label: "会员名单",
                    description: "在成员列表角色标题中显示角色颜色"
                },
                voiceUsers: {
                    label: "语音用户",
                    description: "在语音聊天用户列表中显示角色颜色"
                },
                reactorsList: {
                    label: "反应堆列表",
                    description: "通过表情符号反应在用户列表中显示角色颜色"
                },
                pollResults: {
                    label: "调查结果",
                    description: "在调查结果中显示角色颜色"
                },
                colorChatMessages: {
                    label: "为您的聊天消息着色",
                    description: "根据作者的角色颜色对聊天消息进行颜色设置"
                },
                messageSaturation: {
                    label: "消息饱和度",
                    description: "消息着色强度"
                }
            }
        },
        rpcEditor: {
            name: "RPC编辑器",
            description: "编辑任何 Rich Presence 内容和类型",
            option: {
                replacedAppIds: {
                    label: "更改的应用程序身份 (ID)",
                }
            },
            modal: {
                tutorial: {
                    title: "当前正在运行的事件的ID",
                    noRunning: "没有跑步活动",
                    available: "可用变量",
                    variableText: "在所有字段（帖子 URL 除外）中，您可以放置​​将自动替换为其原始内容的变量：",
                    more: "更多详情",
                    details: {
                        leave: "要保留字段原样，请将其留空。",
                        set: "键入“null”可隐藏状态指示器中的字段。",
                        reload: "您可能需要重新启动 Discord 才能应用更改。"
                    }
                },
                settings: {
                    applyEdits: "将编辑应用到应用程序",
                    addNewApp: "添加新应用程序",
                    appId: "应用程序ID",
                    invalidAppId: "无效的应用程序 ID",
                    newActivityType: "新事件类型",
                    activityTypes: {
                        playing: "玩",
                        watching: "观看",
                        listening: "倾听",
                        competing: "赛车",
                        streaming: "正在播出"
                    },
                    streamUrl: "直播 URL（必须是 YouTube 或 Twitch）",
                    invalidStreamUrl: "帖子网址无效",
                    newName: "新名字",
                    newDetails: "新细节",
                    newState: "新形势",
                    largeImage: "大局",
                    smallImage: "剪贴画",
                    text: "文本",
                    url: "网址",
                    firstLine: "（第一行）",
                    secondLine: "（第二行）",
                    thirdLine: "（第三行）",
                    alsoThirdLine: "（也是第三行）",
                    hideAssets: "隐藏图像（大图像和小图像）",
                    hideTimestamps: "隐藏时间戳"
                }
            },
        },
        rpcStats: {
            name: "RPC统计",
            description: "显示有关您作为 Rich Presence 的活动的统计信息",
            option: {
                assetURL: {
                    label: "视觉 URL",
                    description: "用于 RPC 的图像。 如果留空，将使用您的个人资料图片"
                },
                rpcTitle: {
                    label: "RPC 头",
                    description: "您的 RPC 标题"
                },
                statDisplay: {
                    label: "查看统计数据",
                    description: "RPC 应该显示什么？ （您可能只允许一行）",
                    today: "今天发送的消息数量",
                    alltime: "始终发送的消息量",
                    listened: "本周收听次数最多的专辑"
                },
                lastFMApiKey: {
                    label: "Last.fm API 密钥",
                    description: "您的 Last.fm API 密钥"
                },
                lastFMUsername: {
                    label: "Last.fm 用户名",
                    description: "您的 Last.fm 用户名"
                },
                albumCoverImage: {
                    label: "专辑封面图片",
                    description: "使用专辑封面作为 RPC 图像？ （如果选择 Last.fm 显示）"
                },
                lastFMStatFormat: {
                    label: "Last.fm 统计格式",
                    description: "Last.fm 统计数据应如何格式化？ $album 替换为专辑名称，$artist 替换为艺术家名称"
                }
            },
            noInfo: "目前没有任何信息:(",
            messagesToday: "今天发送的消息：{{count}}",
            messagesAllTime: "始终发送的消息：{{count}}"
        },
        saveFavoriteGIFs: {
            name: "保存最喜爱的 GIF",
            description: "导出收藏的 GIF 链接",
            toolbox: "保存最喜爱的 GIF",
            title: "保存最喜爱的 GIF",
            command: {
                savegifs: {
                    description: "将所有喜爱的 GIF 链接保存到文本文件"
                },
                saveworkinggifs: {
                    description: "测试所有您喜爱的 GIF 并仅保存那些仍然有效的"
                }
            },
            option: {
                showToolboxButton: {
                    label: "显示工具箱按钮",
                    description: "在 Plexcord Toolbox 中显示“保存最喜爱的 GIF”按钮（需要重新启动）"
                }
            },
            toast: {
                save: "GIF 已成功保存为 {{filename}}",
                failed: "无法保存 GIF",
                no: "找不到最喜欢的 GIF！",
                testing: "{{count}} 个 GIF 正在测试，这可能需要一些时间...",
                noneWorking: "您保存的 GIF 似乎都不起作用。",
                saved: "{{broken}} 可能损坏的 GIF 已被过滤掉。 已保存 {{saved}} 个可用的 GIF。"
            }
        },
        scheduledMessages: {
            name: "预定消息",
            description: "安排消息在特定时间或特定延迟后发送。",
            toolbox: {
                toggle: "查看预定消息"
            },
            option: {
                maxMessagesPerMinute: {
                    label: "每分钟最大消息数",
                    description: "同一分钟内可以在通道上发送的最大计划消息数。"
                },
                checkIntervalSeconds: {
                    label: "控制间隔（秒）",
                    description: "插件检查是否有消息要发送的频率。"
                },
                showNotifications: {
                    label: "显示通知",
                    description: "发送消息时显示通知（toast）。"
                },
                showPhantomMessages: {
                    label: "显示幽灵消息",
                    description: "在聊天中将预定消息显示为幽灵（临时）消息。"
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
                messageFailed: "无法发送预定消息",
                maxMessagesReached: "已达到每个频道每分钟 {{max}} 条消息的最大限制",
                messageScheduled: "已计划消息！",
                messageRemoved: "预定消息已删除",
                allCleared: "所有预定消息已清除"
            },
            button: {
                tooltipOn: "规划模式开启（单击以禁用，右键单击查看列表）",
                tooltipOff: "规划模式关闭（单击启用，右键单击查看列表）"
            },
            accessory: {
                scheduledFor: "预定于 {{date}} {{timeLeft}}",
                remaining: {
                    days: "还剩 {{days}}g {{hours}} 秒",
                    hours: "还剩{{小时}}秒{{分钟}}分钟",
                    minutes: "还剩 {{分钟}} 分钟"
                }
            },
            scheduleModal: {
                title: "计划留言",
                schedulingFor: "计划频道：{{channel}}",
                scheduleType: "规划类型",
                delay: "延迟",
                specificTime: "具体时间",
                delayMinutes: "延误（分钟）",
                dateTime: "日期和时间",
                error: {
                    invalidDelay: "请输入有效的延迟时间（至少 1 分钟）",
                    invalidDateTime: "请选择未来的日期和时间"
                },
                schedule: "计划",
                cancel: "取消"
            },
            viewModal: {
                title: "预定消息",
                clearAll: "全部清除",
                noMessages: "没有预定消息",
                delete: "西尔",
                close: "四分之一"
            }
        },
        searchFix: {
            name: "搜索修复",
            description: "烦人的“我们把放大镜掉了！”修复错误。",
            notPerfect: "此修复并不完美，因此您可能需要重新加载搜索栏才能修复问题。",
            paragraph1: "Discord 只允许最大偏移量 5000（这就是导致放大镜错误的原因）。",
            paragraph2: "这意味着您可以准确地看到过去 5000 条消息和未来 5000 条消息（按最旧排序）。",
            paragraph3: "这个插件切换到相反的排序方法来绕过Discord的限制，",
            paragraph4: "但如果有一个很大的搜索结果，并且您尝试显示任何一种排序方法都无法访问的消息，",
            paragraph5: "该插件仅显示偏移量 0（最新或最旧的消息，具体取决于排序方法）。"
        },
        secretRingToneEnabler: {
            name: "秘密铃声启用器",
            description: "Discord 始终播放秘密版本的铃声（特殊铃声活动除外）",
            option: {
                onlySnow: {
                    label: "仅在雪铃声活动期间",
                    description: "只玩雪光晕主题"
                }
            }
        },
        summaries: {
            name: "摘要",
            description: "在所有服务器上启用 Discord 的实验性摘要功能，并显示人工智能生成的对话摘要",
            option: {
                summaryExpiryThresholdDays: {
                    label: "摘要删除阈值（天）",
                    description: "摘要在被删除之前的有效天数。 请注意，每个通道最多存储 50 个摘要"
                }
            }
        },
        selfForward: {
            name: "自我转发",
            description: "将当前频道添加到转发列表弹出窗口"
        },
        sendTimestamps: {
            name: "发送时间戳",
            description: "使用聊天框按钮和文本快捷方式轻松发送时间戳。 阅读扩展说明！",
            sample: {
                paragraph1: "要快速发送仅时间时间戳，请将“HH:MM”格式的时间戳（包括反引号！）添加到您的消息中",
                paragraph2: "请参阅下面的示例。\n如果您需要更具体的信息，请使用聊天栏中的“日期”按钮！",
                examples: "示例："
            },
            modal: {
                title: "时间戳选择器",
                light: "打开",
                dark: "黑暗的",
                format: "时间戳格式",
                preview: "预览",
                insert: "添加",
                insertTimestamp: "添加时间戳"
            },
            option: {
                replaceMessageContents: {
                    label: "更改消息内容",
                    description: "更改消息内容中的时间戳"
                }
            }
        },
        serverInfo: {
            name: "服务器信息",
            description: "允许您查看有关服务器的信息",
            context: {
                serverInfo: "服务器信息"
            },
            option: {
                sorting: {
                    label: "安排",
                    description: "用户名或显示名称（如果适用）",
                    username: "用户名",
                    displayname: "显示名称",
                    none: "排序"
                }
            },
            modal: {
                tab: {
                    serverInfo: "服务器信息",
                    friends: "朋友们",
                    mutualUsers: "普通用户",
                    blockedUsers: "被阻止的用户",
                    ignoredUsers: "被忽略的用户"
                },
                owner: "服务器所有者",
                loading: "加载中...",
                createdAt: "创建日期",
                joinedAt: "加入日期",
                vanityLink: "特别邀请链接",
                preferredLocale: "首选地区",
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
                roles: "滚筒"
            }
        },
        serverListIndicators: {
            name: "服务器列表指示器",
            description: "添加在线好友数量或服务器数量到服务器列表",
            friends: "朋友",
            servers: "主持人",
            option: {
                mode: {
                    label: "模组",
                    description: "在服务器列表中显示的模式",
                    friend: "仅在线好友数量",
                    server: "仅服务器数量",
                    both: "服务器及在线好友数"
                },
                useCompact: {
                    label: "紧凑型 Modu Kullan",
                    description: "使图例仅与文本一起出现"
                }
            }
        },
        serverSearch: {
            name: "服务器搜索",
            description: "使用快速搜索按钮更好地浏览您的服务器",
            tooltip: "我们买"
        },
        shikiCodeblocks: {
            name: "四季代码块",
            description: "将 Shiki 支持的 VSCode 风格的代码块引入 Discord",
            option: {
                theme: {
                    label: "他",
                    description: "默认主题"
                },
                customTheme: {
                    label: "自定义主题",
                    description: "链接到自定义 VSCode 主题",
                    mustURL: "必须是有效的 URL",
                    mustJSON: "必须是 JSON 文件"
                },
                tryHljs: {
                    label: "备份到Hljs",
                    description: "使用较浅的默认 Discord 着色剂和主题。",
                    never: "绝不",
                    secondary: "选择 Shiki 而不是 Highlight.js",
                    primary: "选择Highlight.js 而不是Shiki",
                    always: "总是"
                },
                useDevIcon: {
                    label: "使用 Devicon 作为语言图标",
                    description: "如何在代码块中显示语言图标",
                    disabled: "残疾人",
                    colorless: "无色",
                    colored: "丰富多彩的"
                },
                bgOpacity: {
                    label: "背景不透明度",
                    description: "背景不透明度"
                }
            },
            button: {
                copy: "复制",
                copied: "复制了！"
            }
        },
        showAllMessageButtons: {
            name: "显示所有消息按钮",
            description: "无论您是否按下 Shift 键，它始终显示所有消息按钮。",
            option: {
                noShiftDelete: {
                    label: "不按 Shift 删除",
                    description: "无需按 Shift 键即可删除消息。"
                },
                noShiftPin: {
                    label: "不移位固定",
                    description: "无需按 Shift 键即可固定消息。"
                }
            }
        },
        showBadgesInChat: {
            name: "在聊天中显示徽章",
            description: "在聊天中消息作者姓名旁边显示徽章。",
            option: {
                showPlexcordDonor: {
                    label: "出示您的 Plexcord 捐赠者徽章",
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
                    modal: "拖动以重新排序徽章；单击可启用/禁用特定徽章类型。"
                }
            },
            badge: {
                plexcord: "Plexcord 支持者徽章",
                contributor: "Plexcord 参与者徽章",
                discordProfile: "Discord 简介 rozetleri（HypeSquad、Discord Staff、Active Developer vb.）",
                nitro: "硝基徽章",
                staff: "不和谐法杖",
                partner: "合作伙伴服务器所有者",
                events: "HypeSquad 活动",
                bravery: "HypeSquad 勇敢",
                brilliance: "HypeSquad 辉煌",
                balance: "HypeSquad 平衡",
                bugHunter: "不和谐虫子猎人",
                earlyVerifiedBotDeveloper: "早期验证的机器人开发人员",
                earlySupporter: "早期支持者",
                moderatorProgram: "主持人计划毕业生"
            },
            modal: {
                plexcordContributor: "Plexcord 参与者",
                discordNitro: "不和谐硝基",
                basic: "基本的",
                classic: "经典的"
            }
        },
        showConnections: {
            name: "显示连接",
            description: "在用户弹出卡中显示链接的帐户",
            option: {
                iconSize: {
                    label: "图标大小",
                    description: "图标大小（像素）"
                },
                iconSpacing: {
                    label: "图标空间",
                    description: "图标边距",
                    compact: "袖珍的",
                    cozy: "舒服的",
                    roomy: "广阔"
                }
            }
        },
        showHiddenChannels: {
            name: "显示隐藏频道",
            description: "显示您无权访问的频道。",
            tooltip: "秘密频道",
            option: {
                channelStyle: {
                    label: "频道风格",
                    description: "用于显示隐藏通道的样式。",
                    classic: "经典的",
                    muted: "沉默的",
                    showUnreads: "显示未读",
                    mutedWithUnreads: "显示静音和未读"
                },
                showMode: {
                    label: "显示模式",
                    description: "用于显示隐藏通道的模式。",
                    lock: "带锁图标的简约风格",
                    hidden: "静音风格，右侧隐藏眼睛图标",
                    lockIconRight: "右侧的锁定图标"
                },
                defaultAllowedUsersAndRolesDropdownState: {
                    label: "默认许可用户和角色下拉状态",
                    description: "私人频道中是否默认打开允许的用户和角色菜单"
                }
            },
            channelType: {
                text: "文本",
                announcement: "公告",
                forum: "论坛",
                voice: "塞斯",
                stage: "场景"
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
                threads: "主题",
                posts: "帖子",
                messages: "消息",
                post: "邮政",
                message: "信息",
                unknown: "未知",
                permissionDetails: "许可证详情",
                thisIsA: "这是一个 {{status}} {{channelType}} 频道",
                canNotSee: "您看不到该频道的 {{type}} 部分。",
                guidelines: "但你可以看到他们的说明：",
                lastCreated: "最后创建的{{type}}：",
                lastPin: "最后置顶的帖子：",
                threadSlowmode: "默认线程慢速模式：",
                slowmode: "慢速模式：",
                bitrate: "比特率：",
                region: "区域：",
                automatic: "自动的",
                videoQuality: "视频质量模式：",
                inactiveArchiveDuration: "归档前的默认非活动期 {{type}}",
                defaultLayout: "默认布局：",
                defaultSort: "默认排序：",
                defaultReaction: "默认反应表情符号：",
                requireTag: "必须为此论坛中的帖子设置标签。",
                availableTags: "可用标签：",
                allowedUsersAndRoles: "允许的用户和角色：",
                hideAllowedUsersAndRoles: "隐藏授权的用户和角色",
                viewAllowedUsersAndRoles: "查看授权的用户和角色"
            }
        },
        showHiddenThings: {
            name: "显示隐藏的东西",
            description: "它显示各种隐藏的和仅限版主的内容，无论权限如何。",
            option: {
                showTimeouts: {
                    label: "在聊天中显示成员超时",
                    description: "在聊天中显示成员超时图标。"
                },
                showInvitesPaused: {
                    label: "显示邀请暂停信息",
                    description: "显示服务器列表中的邀请已暂停。"
                },
                showModView: {
                    label: "显示模组视图",
                    description: "在所有服务器上显示成员模式视图上下文菜单选项。"
                }
            }
        },
        showMessageEmbeds: {
            name: "显示消息嵌入",
            description: "将显示嵌入选项添加到没有嵌入的链接的上下文菜单",
            context: {
                embed: {
                    show: "显示嵌入",
                    hide: "删除嵌入"
                }
            },
            error: {
                failed: "无法检索嵌入内容",
                noEmbed: "找不到嵌入"
            }
        },
        showMeYourName: {
            name: "显示你的名字",
            description: "查看聊天中自定义昵称、好友昵称、服务器昵称、显示名称和用户名的任意排列。",
            option: {
                messages: {
                    label: "留言",
                    description: "在消息中显示自定义名称格式。"
                },
                replies: {
                    label: "回复",
                    description: "查看回复中的自定义名称格式。"
                },
                mentions: {
                    label: "提及",
                    description: "在提及中显示自定义名称格式。"
                },
                memberList: {
                    label: "会员名单",
                    description: "显示成员列表中以自定义名称格式列出的第一个可用名称。"
                },
                typingIndicator: {
                    label: "写入指示器",
                    description: "在键入指示器中显示以自定义名称格式列出的第一个可用名称。"
                },
                profilePopout: {
                    label: "个人资料弹出卡",
                    description: "在个人资料弹出卡中显示以自定义名称格式列出的第一个可用名称。"
                },
                voiceChannels: {
                    label: "音频通道",
                    description: "在音频通道上显示以自定义名称格式列出的第一个可用名称。"
                },
                reactions: {
                    label: "反应",
                    description: "在反应工具提示中显示以自定义名称格式列出的第一个可用名称，并在反应弹出窗口中显示全名。"
                },
                discriminators: {
                    label: "显示解析器",
                    description: "将解析器添加到机器人用户名中。 普通用户的解析器已被删除，但机器人仍使用解析器。 默认情况下，机器人的用户名相当于用户的全局名称，因此多个机器人可以具有相同的用户名。 添加解析器使它们再次变得独一无二。"
                },
                hideDefaultAtSign: {
                    label: "隐藏默认@符号",
                    description: "隐藏提及和回复中名称开头的默认“@”符号。 仅在启用相关功能时适用。"
                },
                truncateAllNamesWithStreamerMode: {
                    label: "在发布者模式下缩短所有名称",
                    description: "在广播者模式下，缩短所有名称，而不仅仅是用户名。"
                },
                removeDuplicates: {
                    label: "删除重复项",
                    description: "如果任何两个名称相同，请删除重复的名称，只保留唯一的名称。"
                },
                ignoreFonts: {
                    label: "忽略字体",
                    description: "对于第二个、第三个和第四个名称，请使用 GG SANS，忽略用户的自定义字体。"
                },
                ignoreGradients: {
                    label: "忽略渐变",
                    description: "对于非主色名称，如果角色有渐变并且后面的颜色设置为“角色+-#”，则使用主色而不是整个渐变，如果有硝基效果，则完全忽略。"
                },
                animateGradients: {
                    label: "制作渐变动画",
                    description: "如果第二个、第三个和第四个名字具有角色渐变，则显示动画。 如果启用“忽略渐变”或启用减少运动，则禁用。"
                },
                nameSeparator: {
                    label: "名称分隔符",
                    description: "名称之间使用的分隔符。 默认为单个空格。"
                },
                friendNameOnlyInDirectMessages: {
                    label: "好友姓名仅显示在私人消息中",
                    description: "仅在私人消息中显示朋友姓名，不在服务器上显示。"
                },
                customNameOnlyInDirectMessages: {
                    label: "自定义名称仅在私人消息中显示",
                    description: "仅在私人消息中显示自定义名称，而不是在服务器上显示自定义名称。"
                },
                includedNames: {
                    label: "包含的名称",
                    description: "用户名、显示名称、昵称和好友名称的显示顺序。 使用这些占位符：{user}、{display}、{nick}、{friend}。 如果名称不可用，您可以编写要使用的替代名称，并用逗号分隔：{friend, nick, display}。 您可以为每个名称添加三个前缀和三个后缀。"
                },
                customNameColor: {
                    label: "自定义名称颜色",
                    description: "用于分配给用户的自定义名称的颜色（如果不是第一个显示的颜色）。 它接受任何有效的 CSS 输入。 使用“角色”来跟踪用户的父角色颜色、硝基效果颜色或 IRCColors 颜色（如果启用）。 使用“Role+-#”按此百分比调整亮度（例如“Role+15”）"
                },
                friendNameColor: {
                    label: "朋友姓名颜色",
                    description: "当朋友的名字不是第一个显示的名字时使用的颜色。 它接受任何有效的 CSS 输入。 使用“角色”来跟踪用户的父角色颜色、硝基效果颜色或 IRCColors 颜色（如果启用）。 使用“Role+-#”按此百分比调整亮度（例如：“Role+15”）"
                },
                nicknameColor: {
                    label: "昵称颜色",
                    description: "当昵称不是显示的名字时使用的颜色。 它接受任何有效的 CSS 输入。 使用“角色”来跟踪用户的父角色颜色、硝基效果颜色或 IRCColors 颜色（如果启用）。 使用“Role+-#”按此百分比调整亮度（例如：“Role+15”）"
                },
                displayNameColor: {
                    label: "显示名称 颜色",
                    description: "当显示名称不是第一个显示的名称时使用的颜色。 它接受任何有效的 CSS 输入。 使用“角色”来跟踪用户的父角色颜色、硝基效果颜色或 IRCColors 颜色（如果启用）。 使用“Role+-#”按此百分比调整亮度（例如：“Role+15”）"
                },
                usernameColor: {
                    label: "用户名颜色",
                    description: "当用户名不是显示的名字时使用的颜色。 它接受任何有效的 CSS 输入。 使用“角色”来跟踪用户的父角色颜色、硝基效果颜色或 IRCColors 颜色（如果启用）。 使用“Role+-#”按此百分比调整亮度（例如：“Role+15”）"
                },
                triggerNameRerender: {
                    label: "触发器名称重新生成",
                    description: "更改此设置会触发重新生成名称。"
                }
            },
            modal: {
                change: {
                    title: "更改 SMYN 用户名",
                },
                add: {
                    title: "添加 SMYN 昵称"
                },
                setCustom: "为此用户设置自定义 SMYN 昵称。 通过在 SMYN 模板设置中指定 {custom} 来使用。",
                nickname: "SMYN 昵称",
                reset: "重置 SMYN 昵称",
                cancel: "取消"
            }
        },
        showResourceChannels: {
            name: "显示资源频道",
            description: "在频道列表中显示隐藏在服务器资源后面的频道"
        },
        showSongName: {
            name: "显示歌曲名称",
            description: "显示 Spotify 活动的歌曲名称而不是艺术家"
        },
        showTimeoutDuration: {
            name: "显示超时持续时间",
            description: "在超时图标工具提示中或其旁边指示用户将超时多长时间",
            option: {
                displayStyle: {
                    label: "展示风格",
                    description: "如何查看超时时间",
                    tooltip: "在工具提示中",
                    inline: "超时图标旁边"
                }
            }
        },
        sidebarChat: {
            name: "侧边栏聊天",
            description: "打开另一个频道或 DM 作为侧边栏或弹出窗口",
            toolbox: {
                label: "打开上一个聊天记录"
            },
            context: {
                label: "打开侧边栏聊天"
            },
            modal: {
                switch: "改变频道",
                popout: "以弹出窗口方式打开聊天",
                close: "关闭侧边栏聊天"
            },
            option: {
                persistSidebar: {
                    label: "使侧边栏聊天永久化",
                    description: "使侧边栏聊天在 Discord 重新启动时保持打开状态"
                },
                patchCommunity: {
                    label: "应用社区补丁",
                    description: "修补社区服务器上的项目，例如频道浏览器或成员选项卡。"
                }
            }
        },
        signature: {
            name: "签名",
            description: "自动签名/消息文本结束",
            option: {
                name: {
                    label: "签名",
                    description: "要添加到消息末尾的签名文本"
                },
                textHeader: {
                    label: "文字标题",
                    description: "标题要添加到文本的开头"
                },
                showIcon: {
                    label: "显示图标",
                    description: "在聊天栏中显示图标以打开和关闭插件"
                },
                contextMenu: {
                    label: "上下文菜单",
                    description: "添加在聊天登录上下文菜单上切换功能的选项"
                },
                isEnabled: {
                    label: "有效的",
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
                    name: "签名",
                    description: "打开和关闭您的签名",
                    toogle: "更改您的签名（默认行为：更改）",
                    enabled: "启用签名",
                    disabled: "签名已禁用"
                }
            }
        },
        silentMessageToggle: {
            name: "静默消息切换",
            description: "在聊天栏中添加一个按钮以打开和关闭静默消息发送。",
            option: {
                persistState: {
                    label: "使状态永久化",
                    description: "确定如何保持静默消息切换状态",
                    none: "它不应该是永久性的（当频道改变时应该重置）",
                    channels: "使其跨渠道持续存在",
                    restarts: "跨渠道持续存在，Discord 重新启动"
                },
                autoDisable: {
                    label: "自动禁用",
                    description: "发送静默消息后再次自动禁用该功能"
                }
            },
            tooltip: {
                enable: "启用静默消息",
                disable: "禁用静默消息"
            }
        },
        silentTyping: {
            name: "无声打字",
            description: "在聊天中隐藏您的打字指示器。",
            command: {
                silentTyping: {
                    name: "无声打字",
                    description: "在聊天中隐藏您的打字指示器。",
                    toggle: {
                        name: "切换",
                        description: "全局、每个通道或每个服务器切换该功能。",
                        global: "全球的",
                        channel: "渠道",
                        guild: "主持人"
                    },
                    chatBarIndicator: {
                        name: "聊天栏指示器",
                        description: "从聊天栏顶部隐藏其他用户的键入指示器。"
                    },
                    membersListIndicator: {
                        name: "成员列表指示器",
                        description: "从成员列表中隐藏其他用户的键入指示器。"
                    },
                    chatIcon: {
                        name: "聊天图标",
                        description: "在聊天栏中显示图标以快速打开和关闭插件。"
                    },
                    chatContextMenu: {
                        name: "聊天上下文菜单",
                        description: "在聊天上下文菜单中添加下拉菜单以快速更改插件设置。"
                    },
                    defaultHidden: {
                        name: "默认隐藏",
                        description: "决定是否默认隐藏DM/频道/服务器中的写入信息。"
                    }
                }
            },
            content: {
                updated: "无声打字设置已更新。",
                noChanges: "静默打字设置未进行任何更改。"
            },
            tooltip: {
                hidden: "它说隐藏（{{location}}）",
                visible: "写入可见（{{location}}）",
                global: "书写可见（全球）"
            },
            option: {
                enabledGlobally: {
                    label: "全球活跃",
                    description: "全局打开/关闭您自己的书写指示器。"
                },
                hideChatBoxTypingIndicators: {
                    label: "隐藏聊天框书写指示器",
                    description: "隐藏其他用户聊天框顶部的键入指示器。"
                },
                hideMembersListTypingIndicators: {
                    label: "隐藏会员列表书写指标",
                    description: "隐藏其他用户的成员列表中的键入指示器。"
                },
                chatIcon: {
                    label: "聊天图标",
                    description: "在聊天栏中显示图标以快速切换插件。"
                },
                chatIconLeftClickAction: {
                    label: "聊天图标左键单击操作",
                    description: "确定左键单击聊天图标时要执行的操作。",
                    global: "更改全局写入状态",
                    channel: "更改通道的写入状态",
                    guild: "更改写入服务器状态",
                    settings: "打开插件设置"
                },
                chatIconMiddleClickAction: {
                    label: "聊天图标中键单击操作",
                    description: "确定在聊天图标上单击鼠标中键时要执行的操作。",
                    global: "更改全局写入状态",
                    channel: "更改通道的写入状态",
                    guild: "更改写入服务器状态",
                    settings: "打开插件设置"
                },
                chatIconRightClickAction: {
                    label: "聊天图标右键单击操作",
                    description: "确定右键单击聊天图标时要执行的操作。",
                    global: "更改全局写入状态",
                    channel: "更改通道的写入状态",
                    guild: "更改写入服务器状态",
                    settings: "打开插件设置"
                },
                chatContextMenu: {
                    label: "聊天上下文菜单",
                    description: "在聊天上下文菜单中添加下拉菜单以快速更改插件设置。"
                },
                defaultHidden: {
                    label: "默认隐藏",
                    description: "如果启用，您的指示器将对所有未在下面的“禁用位置”列表中列出的 DM/渠道/服务器上的其他用户隐藏。 如果禁用，您的指示器将出现在“活动位置”列表中未包含的位置。"
                },
                enabledLocations: {
                    label: "活跃地点",
                    description: "为这些 ID 启用该功能。 它接受以逗号分隔的 DM ID、通道 ID 和服务器 ID。 仅在禁用“默认私有”时使用。"
                },
                disabledLocations: {
                    label: "残疾人场所",
                    description: "禁用这些 ID 的功能。 它接受以逗号分隔的 DM ID、通道 ID 和服务器 ID。 仅在启用“默认私有”时使用。"
                }
            }
        },
        snowfall: {
            name: "降雪",
            description: "让Discord上下雪吧！",
            about: {
                title: "信息",
                paragraph: "该插件在 Discord 界面上添加了圣诞节主题的降雪效果。 您可以通过以下设置更改雪类型。",
                note: "注意：尽管此插件不会比大多数计算机上的普通 Plexcord 插件产生更大的性能影响，但它可能会在低端系统上导致一些延迟。"
            },
            option: {
                typeOfSnow: {
                    label: "车型",
                    description: "更改显示的雪的类型（影响性能）。",
                    solid: "纯色（最高性能）",
                    text: "Metin（中等性能）",
                    emoji: "视觉（性能最低）"
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
                    label: "每秒的雪花数",
                    description: "每秒飘落的雪花数量（越高=降水量越大）"
                }
            }
        },
        sortFriendRequests: {
            name: "对好友请求进行排序",
            description: "按收到日期对好友请求进行排序",
            tooltip: "添加 — {{date}}",
            option: {
                showDates: {
                    label: "显示日期",
                    description: "在好友请求中显示日期"
                }
            }
        },
        soundBoardLogger: {
            name: "音板记录器",
            description: "录制语音聊天中播放的所有音板声音并允许您下载它们",
            tooltip: "打开音板日志",
            option: {
                savedIds: {
                    label: "已保存的音板 ID",
                    description: "您一次要保存的音板 ID 数量（0 允许您无限保存）",
                    notNumber: "该值不是数字。",
                    cantDecimal: "该值不能是十进制数。",
                    cantNegative: "该值不能为负数。",
                    heading: "您一次要保存的音板 ID 数量（0 允许您无限保存）",
                    warning: "警告！ 将数字设置为较低的值将重置日志！",
                    placeholder: "输入一个数字"
                },
                fileType: {
                    label: "文件类型",
                    description: "您想要保存文件的格式"
                },
                openLogs: {
                    label: "打开日志",
                    description: "显示日志",
                    button: "打开日志"
                },
                soundVolume: {
                    label: "声级",
                    description: "开/关音量（0 禁用）"
                },
                iconLocation: {
                    label: "图标位置",
                    description: "选择 SoundBoard 日志图标出现的位置（需要重新启动）",
                    toolbar: "工具栏",
                    chatInput: "聊天登录"
                }
            },
            modal: {
                title: "音板日志",
                loading: "声音正在加载...",
                noLogs: "尚未录制任何音频。 加入语音聊天即可登录！",
                clearLogs: "清除日志",
                played: "玩了 {{time}} 次",
                last: "最后玩过：",
                also: "他还偷了：",
                download: "下载",
                copyId: "复制身份证件",
                copied: "ID已复制到剪贴板！",
                playSound: "播放声音",
                moreUsers: "其他人也用过这个声音...",
                volume: "音板音量"
            }
        },
        splitLargeMessages: {
            name: "分割大消息",
            description: "将大消息拆分为多条消息以适应 Discord 的消息限制。",
            option: {
                maxLength: {
                    label: "最大消息长度",
                    description: "消息在分割之前可以具有的最大长度。 设置为 0 进行自动检测。"
                },
                disableFileConversion: {
                    label: "禁用文件转换",
                    description: "如果启用，则禁用大消息的文件转换。"
                },
                sendDelay: {
                    label: "运送延误",
                    description: "每个曲目之间的等待时间（以秒为单位）。"
                },
                hardSplit: {
                    label: "实心隔断",
                    description: "如果启用，它将从最后一个字符而不是空格/换行符开始分割。"
                },
                splitInSlowmode: {
                    label: "以慢速模式分割",
                    description: "如果在通道上启用慢速模式，则拆分消息？"
                },
                slowmodeMax: {
                    label: "慢速模式最大",
                    description: "在慢速模式下划分时允许的最大慢速模式时间。"
                }
            }
        },
        spotifyActivityToggle: {
            name: "Spotify活动切换",
            description: "添加 Spotify 活动可见性的切换按钮。",
            tooltip: {
                enable: "打开 Spotify 活动",
                disable: "关闭 Spotify 活动"
            },
            option: {
                location: {
                    label: "女性",
                    description: "在哪里显示 Spotify 开/关按钮",
                    panel: "静音/静音旁边",
                    toolbox: "Plexcord 工具箱"
                },
                activityStatus: {
                    label: "活动状态",
                    description: "您的 Spotify 活动的当前状态"
                }
            }
        },
        spotifyCrack: {
            name: "Spotify 破解",
            description: "允许免费共同收听、阻止语音聊天中的自动暂停以及在空闲时保持 Spotify 活动播放",
            option: {
                noSpotifyAutoPause: {
                    label: "关闭 Spotify 自动暂停",
                    description: "禁用 Spotify 的自动暂停。"
                },
                keepSpotifyActivityOnIdle: {
                    label: "在空闲时恢复 Spotify 活动",
                    description: "允许 Spotify 活动在空闲时继续播放"
                }
            }
        },
        spotifyShareCommands: {
            name: "SpotifyShare命令",
            description: "使用斜杠命令分享您当前的 Spotify 歌曲、专辑或艺术家（/track、/album、/artist）",
            command: {
                makeCommand: {
                    description: "在聊天中分享您当前的 Spotify {{type}}",
                    track: "您没有在 Spotify 上收听任何歌曲。",
                    find: "在 Spotify 上找不到这首歌。"
                }
            }
        },
        startupTimings: {
            name: "启动时间",
            description: "将开始计时添加到“设置”菜单",
            modal: {
                title: "开始时间",
                ended: "观看结束时间：",
                start: "开始",
                interval: "十二月",
                delta: "三角洲",
                event: "玉兰油",
                serverTrace: "服务器监控",
                loading: "加载中..."
            }
        },
        statusNotifications: {
            name: "状态通知",
            description: "添加状态更改通知",
            loading: "加载中...",
            option: {
                notificationsSound: {
                    label: "通知声音",
                    description: "播放状态通知的通知声音？"
                },
                usersList: {
                    label: "用户列表",
                    description: "状态发生变化时通知用户",
                    empty: "没有用户受到监控。 您可以通过右键单击用户并使用“状态通知”选项来添加用户。"
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
                title: "状态通知",
            },
            status: {
                online: "在线的",
                idle: "闲置的",
                dnd: "请勿打扰",
                offline: "离线",
            },
        },
        statusPresets: {
            name: "状态预设",
            description: "允许您保存状态并稍后重新调整",
            button: {
                remember: "记住状态",
            },
            context: {
                edit: "编辑自定义预设",
                set: "设置例外"
            },
            notification: {
                successfully: "状态保存成功"
            }
        },
        steamStatusSync: {
            name: "Steam状态同步",
            description: "将您的状态与 Steam 同步！ （在线、离开、隐形或离线。）",
            option: {
                onlineStatus: {
                    label: "在线状态",
                    description: "Discord 在线时的 Steam 状态"
                },
                idleStatus: {
                    label: "空闲状态",
                    description: "Discord 空闲时的 Steam 状态"
                },
                dndStatus: {
                    label: "请勿打扰状态",
                    description: "Discord 请勿打扰时的 Steam 状态"
                },
                invisibleStatus: {
                    label: "隐形状态",
                    description: "Discord 不可见时的 Steam 状态"
                },
                goInvisibleIfActivityIsHidden: {
                    label: "如果活动是私人的，则变得隐身",
                    description: "当隐藏 Discord 活动时将 Steam 状态设置为不可见"
                }
            },
            status: {
                online: "在线的",
                away: "离开",
                invisible: "无形的",
                offline: "离线（与 Steam 聊天断开连接）",
                disabled: "残疾人"
            }
        },
        stickerBlocker: {
            name: "贴纸拦截器",
            description: "允许您防止显示贴纸。",
            option: {
                showGif: {
                    label: "显示动图",
                    description: "是否显示酷猫GIF。"
                },
                showMessage: {
                    label: "显示留言",
                    description: "是否显示屏蔽哪个ID的消息"
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
                unblock: "取消阻止 {{name}}"
            },
            context: {
                blockSticker: "块贴纸",
                unblockSticker: "解锁贴纸"
            }
        },
        stickerPaste: {
            name: "贴纸贴",
            description: "当您在贴纸选择器中选择贴纸时，它会将其添加到聊天框中，而不是立即发送"
        },
        streamerModeOnStream: {
            name: "流媒体模式",
            description: "当您开始在 Discord 上广播时自动启用流媒体模式"
        },
        streamingCodecDisabler: {
            name: "流编解码器禁用器",
            description: "禁用您所需的流媒体编解码器",
            option: {
                disableAv1Codec: {
                    label: "禁用 AV1 编解码器",
                    description: "防止 Discord 考虑使用 AV1 进行流式传输。"
                },
                disableH265Codec: {
                    label: "禁用 H265 编解码器",
                    description: "防止 Discord 考虑使用 H265 进行流式传输。"
                },
                disableH264Codec: {
                    label: "禁用 H264 编解码器",
                    description: "防止 Discord 考虑使用 H264 进行流式传输。"
                }
            }
        },
        superReactionTweaks: {
            name: "超级反应调整",
            description: "自定义同时播放超级反应的限制并默认使用超级反应",
            option: {
                superReactByDefault: {
                    label: "默认情况下超级反应",
                    description: "反应选择器默认使用超级反应"
                },
                unlimitedSuperReactionPlaying: {
                    label: "无限超级反应玩法",
                    description: "消除了同时播放的超级反应限制"
                },
                superReactionPlayingLimit: {
                    label: "超反应播放限制",
                    description: "同时玩的超级反应的最大数量。 0 禁止播放超级反应"
                }
            }
        },
        textReplace: {
            name: "文本替换",
            description: "更改消息中的文本。 您可以在 Plexcord 服务器上的 #textreplace-rules 频道中找到现成的规则",
            option: {
                replace: {
                    label: "改变",
                    string: "使用纯文本",
                    regex: "使用正则表达式",
                    myMessages: "应用于您自己的消息（所有人都可见）",
                    othersMessages: "应用于其他人的消息（仅您可见）",
                    allMessages: "适用于所有消息"
                },
                stringRules: {
                    label: "纯文本规则",
                    description: "使用明文匹配的文本替换规则。"
                },
                regexRules: {
                    label: "正则表达式规则",
                    description: "使用正则表达式替换文本的规则。"
                }
            },
            modal: {
                title: "测试规则",
                find: "布尔",
                replace: "改变",
                includes: "仅当它包含",
                type: "写留言",
                applied: "应用规则的消息"
            }
        },
        themeAttributes: {
            name: "主题属性",
            description: "出于主题目的向各种元素添加数据属性"
        },
        timezones: {
            name: "时区",
            description: "在个人资料和消息线程中显示用户的当地时间",
            button: {
                wantToSave: "您想在数据库中保存您的时区吗？ 单击此处进行设置。",
                yourLocalTimezone: "（您当地的时区）"
            },
            context: {
                set: "设置本地时区"
            },
            toast: {
                refresh: {
                    successfully: "时区已成功更新！",
                    failed: "时区无法刷新！",
                    failedTo: "无法刷新时区。"
                },
                update: {
                    successfully: "时区更新成功！",
                    failed: "无法设置时区。"
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
                    label: "显示您的时区",
                    description: "在您的个人资料和消息线程中显示您的时区"
                },
                twentyFourHourTime: {
                    label: "24 小时格式",
                    description: "以 24 小时格式显示时间"
                },
                showTimezoneInfo: {
                    label: "显示时区信息",
                    description: "除时钟外还显示时区信息"
                },
                showMessageHeaderTime: {
                    label: "显示消息标题 时间",
                    description: "在消息线程中显示时间"
                },
                showProfileTime: {
                    label: "显示个人资料时间",
                    description: "在用户个人资料中显示时间"
                },
                useDatabase: {
                    label: "使用数据库时区",
                    description: "使用数据库获取用户时区"
                },
                preferDatabaseOverLocal: {
                    label: "优先选择数据库而非本地",
                    description: "跨时区更喜欢数据库而不是本地存储"
                },
                databaseUrl: {
                    label: "数据库网址",
                    description: "时区数据库服务器的 URL"
                },
                setDatabaseTimezone: {
                    label: "设置数据库时区",
                    description: "在数据库中设置您的时区",
                    setTimezone: "在数据库中设置时区"
                },
                resetDatabaseTimezone: {
                    label: "重置数据库时区",
                    description: "重置数据库中的时区",
                    failed: "重置数据库时区失败"
                },
                askedTimezone: {
                    label: "询问时区",
                    description: "指示是否提示用户输入时区"
                }
            },
            modal: {
                title: "时区",
                select: "选择时区",
                selectPlaceholder: "选择时区",
                delete: "删除时区",
                save: "节省"
            }
        },
        toastNotifications: {
            name: "Toast通知",
            description: "当您收到直接消息时显示 Toast 通知。",
            notification: {
                call: "开始和你一起寻找！",
                recipient: {
                    add: "{{target}} 已由 {{actor}} 添加到群组。",
                    remove: "{{target}} 已被 {{actor}} 从群组中删除。",
                    left: "他离开了队伍。"
                },
                channel: {
                    change: {
                        name: "频道名称更改为{{name}}。",
                        icon: "频道图标已更改。"
                    },
                    pinned: "置顶了一条消息。"
                },
                sent: {
                    embed: "他发送了一个嵌入。",
                    sticker: "他发了一张贴纸。",
                    attachment: "文件："
                },
                redacted: "消息内容已被隐藏。",
                friend: {
                    accept: "{{user}} 现在是您的朋友",
                    acceptBody: "现在您可以直接向他发送消息。",
                    request: "{{user}}向您发送了好友请求。",
                    requestBody: "您可以从“好友”选项卡接受或拒绝。"
                },
                example: {
                    title: "通知样本",
                    body: "这是通知文本示例。"
                }
            },
            modal: {
                dismiss: "关闭通知",
                attachments: "已发送 {{attachments}} 个文件。"
            },
            option: {
                position: {
                    label: "女性",
                    description: "Toast 通知的位置",
                    topRight: "右上",
                    topLeft: "左上",
                    bottomRight: "右下角",
                    bottomLeft: "索尔阿尔特"
                },
                timeout: {
                    label: "关门时间",
                    description: "显示通知多少秒"
                },
                opacity: {
                    label: "不透明度",
                    description: "Toast通知的不透明度"
                },
                determineServerNotifications: {
                    label: "设置服务器通知",
                    description: "根据服务器通知设置确定是否显示通知"
                },
                directMessages: {
                    label: "直接消息",
                    description: "显示直接消息的通知"
                },
                groupMessages: {
                    label: "群组消息",
                    description: "显示群组消息通知"
                },
                friendServerNotifications: {
                    label: "好友和服务器通知",
                    description: "当朋友在公共服务器上发送消息时显示通知"
                },
                friendActivity: {
                    label: "好友活动",
                    description: "显示添加好友或接收好友请求的通知"
                },
                notifyFor: {
                    label: "接收通知的渠道",
                    description: "输入接收通知的通道 ID（以逗号分隔）"
                },
                ignoreUsers: {
                    label: "要忽略的用户",
                    description: "输入将忽略其通知的用户 ID（以逗号分隔）"
                },
                exampleButton: {
                    label: "样品按钮",
                    description: "显示 Toast 通知示例。",
                    show: "显示通知示例"
                }
            }
        },
        toggleVideoBind: {
            name: "切换视频绑定",
            description: "添加可自定义的热键来打开和关闭网络摄像头。",
            option: {
                keyBind: {
                    label: "热键",
                    description: "按下该按钮将打开和关闭网络摄像头。"
                },
                reqCtrl: {
                    label: "Ctrl·格雷克利",
                    description: "强制按下 Ctrl 键。"
                },
                reqShift: {
                    label: "需要轮班",
                    description: "强制按下 Shift 键。"
                },
                reqAlt: {
                    label: "需要子项",
                    description: "强制按下 Alt 键。"
                }
            }
        },
        translate: {
            name: "翻译",
            description: "使用 Google Translate 或 DeepL 翻译消息",
            tooltip: {
                label: "转变"
            },
            context: {
                translate: "转变",
                open: "打开翻译窗口",
                auto: "启用自动翻译"
            },
            option: {
                receivedInput: {
                    label: "收到的输入",
                    description: "接收到的消息将被翻译的语言"
                },
                receivedOutput: {
                    label: "接收到的输出",
                    description: "收到的消息将被翻译成什么语言？"
                },
                sentInput: {
                    label: "提交的意见",
                    description: "您自己的消息将被翻译成的语言"
                },
                sentOutput: {
                    label: "发送输出",
                    description: "您自己的消息将被翻译成什么语言"
                },
                service: {
                    label: "翻译服务",
                    description: "DeepL Pro 需要付费 API 密钥",
                    descriptionWeb: "翻译服务（不支持网络！）",
                    google: "谷歌翻译",
                    deepl: "DeepL 免费",
                    deeplPro: "深L Pro"
                },
                deeplApiKey: {
                    label: "DeepL API 密钥",
                    description: "DeepL API 密钥",
                    placeholder: "在 https://deepl.com/your-account 获取您的 API 密钥"
                },
                autoTranslate: {
                    label: "自动翻译",
                    description: "它会在发送消息之前自动翻译您的消息。 您还可以通过按住 Shift 键或右键单击翻译按钮来打开或关闭此功能。"
                },
                showAutoTranslateTooltip: {
                    label: "显示自动翻译说明",
                    description: "自动翻译消息时在聊天栏按钮中显示说明"
                }
            },
            modal: {
                title: "翻译",
                select: "选择语言",
                auto: "自动翻译",
                dismiss: "四分之一",
                translated: "翻译自{{from}}",
                failed: {
                    to: "{{text}} 翻译失败",
                    connect: "DeepL API 连接失败："
                },
                wrong: "出了点问题。 如果问题仍然存在，请检查控制台或向支持服务器寻求帮助。",
                deepl: {
                    api: "DeepL API 超出配额。 切换到谷歌翻译。",
                    apiKey: "未设置 DeepL API 密钥。 回到谷歌。",
                    auth: "DeepL API 密钥或版本无效"
                },
                autoTranslateEnabled: {
                    title: "启用 Plexcord 自动翻译",
                    body: "您刚刚启用了自动翻译！ 您发送的所有消息将在发送前自动翻译。",
                    confirm: "禁用自动翻译",
                    cancel: "我明白",
                    secondaryConfirm: "不要再显示"
                }
            }
        },
        typingIndicator: {
            name: "打字指示器",
            description: "当有人在频道中输入内容时添加指示器。",
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
                    description: "是否为被忽略的用户显示键入指示符。"
                },
                includeBlockedUsers: {
                    label: "包括被阻止的用户",
                    description: "是否为被阻止的用户显示打字指示器。"
                },
                indicatorMode: {
                    label: "显示模式",
                    description: "指标如何显示？",
                    both: "头像和动画点",
                    dots: "动画点",
                    avatars: "头像"
                }
            }
        },
        typingTweaks: {
            name: "打字调整",
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
                    description: "当多人打字时显示更有用的消息"
                },
                amITyping: {
                    label: "我在写作吗？",
                    description: "显示其他人是否看过您所写的内容"
                }
            },
            others: {
                areTyping: "还有 {{count}} 人写道..."
            }
        },
        unindent: {
            name: "取消缩进",
            description: "删除代码块中的前导缩进"
        },
        unitConverter: {
            name: "单位换算器",
            description: "将公制单位转换为英制单位，反之亦然",
            tooltip: "转换单位",
            option: {
                myUnits: {
                    label: "我的单位",
                    description: "您使用并想要转换为的单位。 默认值：英制",
                    imperial: "帝国",
                    metric: "公制"
                }
            },
            button: {
                dismiss: "四分之一"
            }
        },
        unlimitedAccounts: {
            name: "无限账户",
            description: "增加您可以添加的帐户数量。",
            option: {
                maxAccounts: {
                    label: "最大账户数",
                    description: "可添加的账户数量，输入0表示无限制"
                }
            }
        },
        unlockedAvatarZoom: {
            name: "解锁头像缩放",
            description: "允许您在更改头像时进一步放大图像裁剪工具",
            option: {
                zoomMultiplier: {
                    label: "变焦倍数",
                    description: "变焦倍数"
                }
            }
        },
        unsuppressEmbeds: {
            name: "取消抑制嵌入",
            description: "允许您取消隐藏消息中的嵌入内容",
            context: {
                unsuppress: "删除嵌入抑制",
                suppress: "打印嵌入"
            }
        },
        uselessInfo: {
            name: "无用信息",
            description: "在 Discord 中显示随机无用信息；可以进行快捷方式和间隔设置。",
            recording: "记录...",
            record: "节省",
            option: {
                delay: {
                    label: "通知间隔",
                    description: "通知显示间隔（分钟）"
                },
                historyHotkey: {
                    label: "历史面板快捷方式",
                    description: "用于打开先前显示信息的历史记录的热键"
                },
                randomFactHotkey: {
                    label: "随机信息快捷方式",
                    description: "打开随机信息面板的热键"
                },
                sameFact: {
                    label: "避免重复相同的信息",
                    description: "防止多次显示相同信息而不显示所有信息"
                },
                lastNFacts: {
                    label: "最新资讯不再重复",
                    description: "最后不应重新显示的信息条数（0 = 所有次数）"
                }
            },
            modal: {
                title: "无用信息",
                history: {
                    none: "还没有信息。 使用快捷方式或等待。",
                    source: "来源"
                },
                showRandom: "随机显示",
                close: "四分之一"
            },
            notification: {
                title: "你可知道？"
            }
        },
        userMessagesPronouns: {
            name: "用户消息代词",
            description: "在消息标题中显示用户代词",
            option: {
                pronounsFormat: {
                    label: "代词形式",
                    description: "代词如何出现在聊天中",
                    lowercase: "小写",
                    capitalized: "首字母大写"
                },
                showSelf: {
                    label: "展示你自己",
                    description: "打开或关闭显示您自己的代词"
                }
            }
        },
        userVoiceShow: {
            name: "用户之声秀",
            description: "当用户处于语音通道时显示指示器",
            option: {
                showInUserProfileModal: {
                    label: "在用户个人资料中显示",
                    description: "在用户个人资料中的姓名旁边显示语音通道指示器"
                },
                showInMemberList: {
                    label: "在会员列表中显示",
                    description: "在成员和 DM 列表中显示语音通道指示器"
                },
                showInMessages: {
                    label: "在消息中显示",
                    description: "在消息中显示语音通道指示符"
                }
            },
            modal: {
                inVoiceChat: "语音聊天中"
            },
            notification: {
                cannotJoin: "您无法加入该用户的语音频道。"
            }
        },
        uSRBG: {
            name: "美国RBG",
            description: "显示来自 USRBG 的用户横幅，以便任何人都可以在没有 Nitro 的情况下使用横幅",
            option: {
                nitroFirst: {
                    label: "硝基第一",
                    description: "如果 Nitro 和 USRBG 横幅均存在，请确定使用哪一个",
                    nitro: "硝基旗帜",
                    usrbg: "美国RBG旗帜"
                },
                voiceBackground: {
                    label: "音频背景",
                    description: "使用USRBG横幅作为语音聊天背景"
                }
            },
            button: "获得您自己的 USRBG 横幅"
        },
        validReply: {
            name: "有效回复",
            description: "修复了将鼠标悬停在回复上时出现“无法加载消息”错误的问题"
        },
        validUser: {
            name: "有效用户",
            description: "修复了未知用户显示为“@unknown-user”的提及（将鼠标悬停在提及上即可修复）",
            badges: {
                discordBugHunter: "不和谐虫子猎人",
                moderatorProgramsAlumni: "主持人课程毕业生",
                discordStaff: "不和谐法杖",
                hypeSquadEvents: "HypeSquad 活动",
                bravery: "HypeSquad 塞萨雷特",
                brilliance: "HypeSquad 亮度",
                balance: "HypeSquad 登格",
                partneredServerOwner: "共同服务器所有者",
                nitro: "不和谐硝基",
                earlySupporter: "早期支持者",
                earlyVerifiedBotDeveloper: "早期验证的机器人开发人员"
            }
        },
        voiceChatDoubleClick: {
            name: "语音聊天DoubleClick",
            description: "允许您通过双击而不是单击来加入语音聊天"
        },
        vcNarrator: {
            name: "VC讲述人",
            description: "当用户加入、离开或移动语音频道时通过旁白进行播报",
            option: {
                voice: {
                    label: "赛斯"
                },
                volume: {
                    label: "声级",
                    description: "讲述人声音级别"
                },
                rate: {
                    label: "速度",
                    description: "旁白语速"
                },
                sayOwnName: {
                    label: "说出你的名字",
                    description: "旁白是否会说出你的名字"
                },
                latinOnly: {
                    label: "仅拉丁语",
                    description: "阅读前清除姓名中的非拉丁字符"
                },
                joinMessage: {
                    label: "加盟留言",
                    description: "加盟留言"
                },
                leaveMessage: {
                    label: "临别赠言",
                    description: "留言"
                },
                moveMessage: {
                    label: "搬家留言",
                    description: "移动消息"
                },
                muteMessage: {
                    label: "静音消息",
                    description: "将消息静音（目前仅限您自己）"
                },
                unmuteMessage: {
                    label: "取消静音消息",
                    description: "取消消息静音（目前仅限您自己）"
                },
                deafenMessage: {
                    label: "震耳欲聋的消息",
                    description: "震耳欲聋的消息（现在只有你自己）"
                },
                undeafenMessage: {
                    label: "震耳欲聋的消息",
                    description: "震耳欲聋的消息（现在只有你自己）"
                }
            },
            modal: {
                title: "播放样本声音",
                voiceTitle: "赛斯",
                voice: "选择声音",
                languageTitle: "迪尔",
                language: "选择语言",
                noVoice: "找不到讲述人的声音。",
                linuxNote: "安装语音调度程序或 espeak 并使用 --enable-speech-dispatcher 参数运行 Discord",
                someNarrator: "尝试从操作系统的“讲述人”设置中安装一些声音",
                dontHaveEnglish: "您尚未上传任何英文音频，因此旁白听起来可能很奇怪",
                customiseMessages: "您可以自定义下面的语音消息。 如果将其留空，您可以禁用某些消息",
                placeholdersInfo: "自定义占位符 {{USER}}、{{DISPLAY_NAME}}、{{NICKNAME}} 和 {{CHANNEL}} 分别替换为用户名（如果您本人则为空）、显示名称、服务器上的昵称和频道名称"
            }
        },
        viewIcons: {
            name: "查看图标",
            description: "使用户个人资料中的头像和横幅图像可点击；将显示头像/横幅选项添加到用户、服务器和组频道上下文菜单。",
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
                    description: "选择用于非移动图像的图像格式。 动画图像始终使用 .gif 格式"
                },
                imgSize: {
                    label: "图像尺寸",
                    description: "使用的图像尺寸"
                }
            }
        },
        viewRaw: {
            name: "查看原始数据",
            description: "复制并查看任何消息、通道或服务器的原始内容/数据",
            context: {
                copyLeft: "复制原始数据（左键单击）/查看原始数据（右键单击）",
                copyRight: "复制原始数据（右键单击）/查看原始数据（左键单击）",
                view: "查看原始数据"
            },
            option: {
                popoverButton: {
                    label: "弹出菜单按钮",
                    description: "在消息弹出窗口中显示一个按钮以查看消息的原始内容/数据。"
                },
                clickMethod: {
                    label: "点击方法",
                    description: "更改用于查看任何消息的原始内容/数据的单击方法。",
                    left: "左键单击查看原始内容。",
                    right: "右键单击查看原始内容。"
                }
            },
            modal: {
                title: "汉姆维里",
                content: "内容",
                data: "{{type}} 维里",
                copied: "{{type}}数据已复制到剪贴板！",
                copy: "复制 {{type}} JSON",
                copiedContent: "内容已复制到剪贴板！",
                copyContent: "复制原始内容"
            },
            types: {
                message: "信息",
                channel: "渠道",
                guild: "主持人",
                role: "角色",
                user: "用户"
            }
        },
        voiceButtons: {
            name: "语音按钮",
            description: "通过语音呼叫面板快速对任何用户进行私聊、静音或聋哑。",
            option: {
                showChatButton: {
                    label: "显示聊天按钮",
                    description: "是否显示聊天按钮"
                },
                showMuteButton: {
                    label: "显示静音按钮",
                    description: "是否显示静音按钮"
                },
                showDeafenButton: {
                    label: "显示聋人按钮",
                    description: "是否显示聋人按钮"
                },
                muteSoundboard: {
                    label: "音板'u Sessize Al",
                    description: "当点击这个震耳欲聋的按钮时，它会打开和关闭用户的音板。"
                },
                disableVideo: {
                    label: "禁用视频",
                    description: "当点击这个震耳欲聋的按钮时，它会打开和关闭用户的视频。"
                },
                useServer: {
                    label: "使用服务器",
                    description: "如果您有权限，可以使用服务器静音/震耳欲聋而不是本地静音/震耳欲聋。"
                },
                serverSelf: {
                    label: "在服务器上将自己静音",
                    description: "使用时，静音/隔音器会使您自己在服务器上静音或隔音。"
                },
                showButtonsSelf: {
                    label: "为自己显示按钮",
                    description: "是否为您自己的用户显示按钮。 它具有相同的功能； DM 面板打开并使您自己静音/失聪。",
                    display: "展示",
                    hide: "隐藏",
                    disable: "残疾人"
                },
                whichNameToShow: {
                    label: "应该出现哪个名字？",
                    description: "在工具提示中显示用户名、全局名称或两者？",
                    global: "全球名称",
                    username: "用户名",
                    both: "两个都"
                },
                buttonPosition: {
                    label: "按钮位置",
                    description: "选择显示按钮的位置。",
                    left: "索尔",
                    right: "正确的",
                }
            },
            tooltip: {
                navigate: "转至私信",
                open: "使用 {{username}} 打开 DM",
                yourself: "你自己",
                serverMute: "服务器静音",
                serverDeafen: "服务器上聋子",
                mute: "沉默的",
                deafen: "震耳欲聋",
                unmute: "取消静音",
                undeafen: "从震耳欲聋中删除",
                serverUnmute: "在服务器上取消静音",
                serverUndeafen: "删除服务器上的震耳欲聋的声音"
            }
        },
        voiceChannelLog: {
            name: "语音频道日志",
            description: "记录谁加入和离开音频通道",
            context: {
                view: "查看频道日志"
            },
            modal: {
                joined: "已加入<#{{channel}}>频道",
                left: "左声道 <#{{channel}}>",
                movedTo: "已移至<#{{channel}}>频道",
                movedFrom: "移自 <#{{channel}}>",
                noLogs: "没有可显示的日志。",
                logs: "{{channel}} 日志"
            },
            option: {
                mode: {
                    label: "模组",
                    description: "如何显示音频通道日志",
                    menu: "日志菜单",
                    associated: "直接登录相关聊天频道",
                    both: "同时登录聊天频道和日志菜单"
                },
                voiceChannelChatSelf: {
                    label: "语音频道聊天（您自己）",
                    description: "在语音通道中记录您自己的语音通道活动"
                },
                voiceChannelChatSilent: {
                    label: "无声频道聊天",
                    description: "语音频道聊天中的加入/离开/移动消息被静音"
                },
                voiceChannelChatSilentSelf: {
                    label: "无声频道聊天（您自己）",
                    description: "如果您使用语音频道，加入/离开/移动消息将保持静音"
                },
                ignoreBlockedUsers: {
                    label: "忽略被阻止的用户",
                    description: "记录您已阻止的用户"
                }
            }
        },
        voiceChatUtilities: {
            name: "语音聊天实用程序",
            description: "该插件允许您在整个通道上执行多个操作（移动、静音、断开连接等）（最初由 dutake 开发）",
            option: {
                waitAfter: {
                    label: "行动后等待",
                    description: "等待之前要进行的 API 事务数（以避免速率限制）"
                },
                waitSeconds: {
                    label: "等待时间",
                    description: "每次操作之间等待的时间（以秒为单位）"
                }
            },
            context: {
                voiceTools: "音频工具",
                mentionAll: "标记所有用户",
                disconnectAll: "断开所有人的联系",
                muteAll: "所有人静音",
                unmuteAll: "取消所有人静音",
                deafenAll: "聋人大家",
                undeafenAll: "出去时不要让所有人震耳欲聋",
                moveAll: "感动大家"
            }
        },
        voiceDownload: {
            name: "语音下载",
            description: "为语音消息添加下载选项。 （打开新的浏览器选项卡）",
            context: {
                download: "下载语音邮件"
            }
        },
        voiceMessages: {
            name: "语音留言",
            description: "它允许您像在移动设备上一样发送语音消息。 为此，请右键单击上传按钮并选择“发送语音消息”。",
            option: {
                noiseSuppression: {
                    label: "降噪",
                    description: "降噪"
                },
                echoCancellation: {
                    label: "回声消除",
                    description: "回声消除"
                }
            },
            notification: {
                failed: {
                    upload: "无法加载语音邮件。",
                    start: "无法开始录制。",
                    finish: "注册无法完成。"
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
                oggOpus: "语音消息必须采用 OggOpus 格式才能在 iOS 上播放。 该文件无法在 iOS 上播放，因为它是 {{type}} 格式。",
                fix: "要解决此问题，请首先将文件转换为 OggOpus 格式。 例如，您可以使用 {{link}}。",
                sending: "正在发送语音邮件...请稍候。",
                stop: "停止录音",
                start: "开始录音",
                resume: "恢复注册",
                pause: "暂停录音",
                recording: "注册正在进行中",
                send: "发送"
            }
        },
        volumeBooster: {
            name: "音量增强器",
            description: "允许您将用户和广播音量增加到默认最大值以上",
            option: {
                multiplier: {
                    label: "乘数",
                    description: "声音倍增器"
                }
            }
        },
        wallpaperFree: {
            name: "壁纸免费",
            description: "旧 DM 壁纸实验的翻拍；为任何频道、用户或服务器设置背景图像。",
            option: {
                globalDefault: {
                    label: "一般默认",
                    description: "为所有频道设置全局默认壁纸。"
                },
                stylingTips: {
                    label: "风格提示"
                }
            },
            context: {
                setWallpaper: "设置壁纸",
                removeWallpaper: "删除壁纸"
            },
            modal: {
                set: "设置壁纸",
                image: "图片网址",
                cancel: "取消",
                apply: "申请",
                global: {
                    set: "设置公共壁纸",
                    remove: "删除全局默认壁纸",
                    reset: "重置壁纸数据"
                },
                web: {
                    info: "您可以通过将本地文件放入 plexcord 主题目录并使用 url plexcord:///themes/filename.ext 来使用本地文件。",
                    open: "打开主题目录",
                    quickCSS: "打开 QuickCSS"
                }
            }
        },
        webContextMenus: {
            name: "Web上下文菜单",
            description: "添加了 Discord 网络版中缺少的上下文菜单：链接和图像（复制或打开链接/图像）、文本区域（复制、剪切、粘贴、拼写检查）",
            option: {
                addBack: {
                    label: "添加回来",
                    description: "添加回图像、链接和聊天输入栏的 Discord 上下文菜单"
                }
            }
        },
        webKeybinds: {
            name: "网页键绑定",
            description: "它添加了 Discord 网页版中缺少的热键：ctrl+t、ctrl+shift+t、ctrl+tab、ctrl+shift+tab、ctrl+1-9、ctrl+,。 它实际上只适用于 Plextron/Legcord，不适用于浏览器。"
        },
        webScreenShareFixes: {
            name: "WebScreenShare修复",
            description: "取消了 Chromium 和 Plextron 客户端上 2500 kbps 屏幕共享比特率限制。",
            option: {
                experimentalAV1Support: {
                    label: "实验性 AV1 支持",
                    description: "启用 AV1 编解码器支持。 无限加载流可能会导致以下问题"
                }
            }
        },
        whoReacted: {
            name: "谁做出反应",
            description: "显示对消息做出反应的用户头像",
            option: {
                avatarClick: {
                    label: "头像点击",
                    description: "切换反应中头像的可点击性"
                }
            }
        },
        whosWatching: {
            name: "谁在看",
            description: "将鼠标悬停在屏幕共享图标上即可查看观看您广播的用户",
            modal: {
                noSpectator: "没有观众"
            },
            option: {
                showPanel: {
                    label: "显示面板",
                    description: "在屏幕共享面板下方显示查看者"
                }
            }
        },
        writeUpperCase: {
            name: "写大写",
            description: "将消息条目中每个句子的第一个字母转换为大写。",
            option: {
                blockedWords: {
                    label: "被阻止的单词",
                    description: "不应大写的表达式（用逗号分隔）"
                }
            }
        },
        xSOverlay: {
            name: "XS覆盖",
            description: "将 Discord 通知推送到 XSOverlay，以便在 VR 中轻松查看",
            notification: {
                call: {
                    title: "{{user}} 正在寻找您。",
                    content: "来电"
                },
                message: {
                    reply: "（回复）",
                    embed: "[嵌入]",
                    onlyEmbed: "已发送消息嵌入",
                    sticker: "[贴纸]",
                    onlySticker: "发送了一张贴纸",
                    image: "图片",
                    attachment: "我"
                },
                test: {
                    title: "Plexcord' 和潜水！",
                    content: "这是测试通知！ 爆炸",
                    button: "发送测试通知"
                }
            },
            option: {
                webSocketPort: {
                    label: "WebSocket 端口",
                    description: "WebSocket 端口"
                },
                preferUDP: {
                    label: "UDP协议",
                    description: "如果您使用旧版本的 XSOverlay 并且无法通过 WebSocket 连接，请启用它。 此设置在网络上被忽略。"
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
                    description: "允许私人消息通知"
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
                    label: "平仁吉",
                    description: "用户标记颜色"
                },
                channelPingColor: {
                    label: "颜色 Ping 频道",
                    description: "通道标记颜色"
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
                    label: "基于消息长度的持续时间",
                    description: "根据消息长度延长持续时间"
                },
                opacity: {
                    label: "不透明度",
                    description: "通知不透明度"
                },
                volume: {
                    label: "赛斯",
                    description: "声级"
                }
            }
        },
        youtubeAdblock: {
            name: "YouTube广告拦截",
            description: "使用 AdGuard 阻止 YouTube 嵌入广告和 WatchTogether 活动"
        },
        youtubeDescription: {
            name: "YouTube说明",
            description: "为 YouTube 视频嵌入添加说明"
        }
    }
} as const;

export default translations;
