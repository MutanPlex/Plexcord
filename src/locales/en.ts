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

const translations = {
    settings: {
        title: "Settings",
        language: {
            selector: {
                label: "Language",
                description: "Select your preferred language for the Plexcord.",
                placeholder: "Select Language"
            }
        },
        location: {
            label: "Settings Location",
            description: "Where to put the Plexcord settings section",
            top: "At the very top",
            nitro: {
                above: "Above the Nitro section",
                below: "Below the Nitro section"
            },
            activity: {
                above: "Above Activity Settings",
                below: "Below Activity Settings"
            },
            bottom: "At the very bottom"
        },
        switches: {
            useQuickCss: {
                label: "Enable Custom CSS",
                description: "Load custom CSS from the QuickCSS editor. This allows you to customize Discord's appearance with your own styles."
            },
            enableReactDevtools: {
                label: "Enable React Developer Tools",
                description: "Enable the React Developer Tools extension for debugging Discord's React components. Useful for plugin development."
            },
            frameless: {
                label: "Disable the window frame",
                description: "Remove the native window frame for a cleaner look. You can still move the window by dragging the title bar area."
            },
            winNativeTitleBar: {
                label: "Use Windows' native title bar instead of Discord's custom one",
                description: "Replace Discord's custom title bar with the standard Windows title bar. This may improve compatibility with some window management tools."
            },
            transparent: {
                label: "Enable window transparency",
                description: "Make the Discord window transparent. A theme that supports transparency is required or this will do nothing.",
                isWindows: "This will stop the window from being resizable and prevents you from snapping the window to screen edges.",
                notWindows: "This will stop the window from being resizable."
            },
            winCtrlQ: {
                label: "Register Ctrl+Q as shortcut to close Discord (Alternative to Alt+F4)",
                description: "Add Ctrl+Q as a keyboard shortcut to close Discord. This provides an alternative to Alt+F4 for quickly closing the application."
            },
            disableMinSize: {
                label: "Disable minimum window size",
                description: "Allow the Discord window to be resized smaller than its default minimum size. Useful for tiling window managers or small screens."
            }
        },
        quickActions: {
            title: "Quick Actions",
            description: "Common actions you might want to perform. These shortcuts give you quick access to frequently used features without navigating through menus.",
            notificationLog: "Notification Log",
            editQuickCSS: "Edit QuickCSS",
            relaunchDiscord: "Relaunch Discord",
            openSettingsFolder: "Open Settings Folder",
            viewSourceCode: "View Source Code"
        },
        specialCards: {
            donations: {
                title: "Donations",
                subtitle: "Thank you for donating!",
                description: "You can manage your perks at any time by messaging @mutanplex.",
                button: "Donate",
                invite: "Join our Discord",
                invalid: "Invalid or expired invite link."
            },
            supportProject: {
                title: "Support the Project",
                description: "Please consider supporting the development of Plexcord by donating!"
            },
            contributions: {
                title: "Contributions",
                subtitle: "Thank you for contributing!",
                description: "Since you've contributed to Plexcord you now have a cool new badge!",
                buttonTitle: "See what you've contributed to"
            }
        },
        settingsSection: {
            title: "Settings",
            description: "Configure how Plexcord behaves and integrates with Discord. These settings affect the Discord client's appearance and behavior.",
            hintParts: {
                prefix: "You can customize where this settings section appears in Discord's settings menu by configuring the {{pluginLink}}",
                linkText: "Settings Plugin"
            }
        },
        notifications: {
            title: "Notifications",
            description: "Configure how Plexcord handles notifications. You can customize when and how you receive alerts, or view a history of past notifications.",
            settings: "Notification Settings",
            viewLog: "View Notification Log",
            permissions: {
                denied: {
                    title: "Desktop Notification Permission Denied",
                    label: "You have denied notification permissions. Desktop notifications will not work!"
                }
            },
            style: {
                label: "Notifications Style",
                description: "Some plugins may show notifications to you. These come in two styles:",
                plexcord: "Plexcord Notifications",
                plexcordDesc: "These are in-app notifications",
                desktop: "Desktop Notifications",
                desktopDesc: "Native Desktop notifications (like when you get a ping)",
                onlyWhenNotFocused: "Only use Desktop notifications when Discord is not focused",
                always: {
                    desktop: "Always use Desktop notifications",
                    plexcord: "Always use Plexcord notifications"
                }
            },
            positions: {
                label: "Notification Position",
                right: {
                    bottom: "Bottom Right",
                    top: "Top Right",
                },
                left: {
                    bottom: "Bottom Left",
                    top: "Top Left",
                }
            },
            missed: {
                label: "Missed Notifications Count",
                description: "When refocusing discord a notification will popup with how you missed",
                whileYou: "While you were away",
                count: "{{count}} notification{{s}} received",
                s: "s"
            },
            timeout: {
                label: "Notification Timeout",
                description: "The amount of time (in seconds) that notifications will stay on screen before automatically disappearing"
            },
            logLimit: {
                label: "Notification Log Limit",
                description: "The maximum number of notifications to keep in the log before old ones are removed. Set to {{disable}} to disable the notification log and {{unlimited}} to never automatically remove old notifications"
            },
            opacity: {
                label: "Notification Opacity",
                description: "The opacity of in-app notifications"
            },
            maxNotifications: {
                label: "Max Notifications",
                description: "Maximum number of notifications displayed at once"
            },
            behavior: {
                label: "Notification Behavior",
            },
            disableInStreamerMode: {
                label: "Disable In Streamer Mode",
                description: "Disable notifications while in streamer mode"
            },
            renderImages: {
                label: "Render Images",
                description: "Render images in notifications"
            },
            streamingTreatment: {
                label: "Streaming Treatment",
                description: "How to treat notifications while sharing your screen",
                normal: "Normal - Show the notification as normal",
                noContent: "No Content - Hide the notification body",
                ignore: "Ignore - Don't show the notification at all"
            },
        },
        macVibrancy: {
            title: "Window Vibrancy Style (Requires Restart)",
            description: "Customize the macOS window vibrancy effect. This controls the blur and transparency style of the Discord window. Changes require a restart to take effect.",
            placeholder: "Window vibrancy style",
            style: {
                no: "No Vibrancy",
                underPage: "Under Page (Window tinting)",
                content: "Content",
                window: "Window",
                selection: "Selection",
                titlebar: "Title Bar",
                header: "Header",
                sidebar: "Sidebar",
                tooltip: "Tooltip",
                menu: "Menu",
                popover: "Popover",
                fullscreenUI: "Fullscreen UI (Transparent but slightly blurred)",
                hud: "HUD (Most Transparent)"
            }
        }
    },

    plugins: {
        title: "Plugins",
        new: "NEW",
        unknown: "Unknown",
        noDescription: "No description available.",
        restart: {
            apply: "Restart to apply changes!",
            required: "Restart required!",
            description: "Restart now to apply new plugins and their settings",
            following: "The following plugins require a restart:",
            remainingCount: "and {{count}} more",
            fully: "Some plugins require a restart to fully disable",
            would: "Would you like to restart now?",
            resetDefault: "Reset to default settings",
            failed: "Failed to start dependencies:",
            button: {
                restart: "Restart",
                later: "Later!",
                now: "Restart Now",
                cancel: "Cancel",
                disableWarning: "Disable Warning Forever",
                disableAll: "Disable All",
                reset: "Reset",
                close: "Close"
            }
        },
        contributor: {
            contributed: "contributed",
            modal: {
                contributionsInfo: "{{userName}} has {{continuedLink}} to {{contributionCount}} plugin{{s}}.",
                noContributions: "{{userName}} has not made any plugins. They likely {{contributedLink}} in other ways!"
            }
        },
        infoModal: {
            description: "Press the cog wheel or info icon to get more info on a plugin",
            settingsInfo: "Plugins with a cog wheel have settings you can modify!",
            disableAll: "Disable All Plugins"
        },
        error: {
            invalidInput: "Invalid input provided",
            stopping: "Error while stopping plugin {{plugin}}",
            starting: "Error while starting plugin {{plugin}}",
            startDependency: "Error while starting dependencies: {{failures}}",
            infoRender: "An error occured while rendering this plugin's custom Info Component"
        },
        placeholder: {
            number: "Enter a number",
            select: "Select an option",
            text: "Enter a value"
        },
        excluded: {
            desktop: "Discord Desktop app or Plextron",
            discordDesktop: "Discord Desktop app",
            plextron: "Plextron app",
            web: "Plextron app and the Web version of Discord",
            dev: "Developer version of Plexcord"
        },
        search: {
            looking: "Are you looking for",
            onlyAvailable: "Only available on the",
            noCriteria: "No plugins meet the search criteria."
        },
        required: {
            title: "Required Plugins",
            this: "This plugin is required for Plexcord to function.",
            by: "This plugin is required by:"
        },
        dangerModal: {
            title: "DANGEROUS ACTION",
            disablePlugins: "Disable Plugins",
            disableText: "Disable All",
            irreversible: "THIS ACTION IS IRREVERSIBLE!",
            enableBack: "Are you absolutely sure you want to proceed? You can always enable them back later.",
            undone: "This action cannet be undone. Are you sure?",
            resetDescription: "You are about to reset all settings for {{pluginName}} to their default values.",
            disable: "You are about to disable {{enabledPlugins}} plugins!",
            confirmReset: "Confirm Reset",
            cancel: "Cancel",
            resetSettings: "Reset Settings",
            resetText: "Reset"
        },
        filters: {
            label: "Filters",
            placeholder: "Search for a plugin...",
            option: {
                all: "Show All",
                enabled: "Show Enabled",
                disabled: "Show Disabled",
                new: "Show New",
                userplugins: "Show User Plugins",
                api: "Show API Plugins"
            }
        },
        pluginModal: {
            noSettings: "There are no settings for this plugin.",
            authors: "Authors",
            settings: "Settings",
            successfulReset: "Settings for {{plugin}} have been reset.",
            enabledStock: "Enabled Stock Plugins",
            totalStock: "Total Stock Plugins",
            enabledUser: "Enabled User Plugins",
            totalUser: "Total User Plugins",
            info: "View more info",
            source: "View source code"
        },
        metadata: {
            api: {
                description: {
                    memberListDecorators: "API to add decorators to member list (both in servers and DMs)",
                    messageAccessories: "API to add accessories to messages",
                    messageDecorations: "API to add decorations to messages",
                    chatInputButtons: "API to add buttons to the chat input",
                    commands: "API required by anything that uses commands",
                    contextMenu: "API for adding/removing items to/from context menus.",
                    dynamicImageModal: "Allows you to omit either width or height when opening an image modal",
                    menuItemDemangler: "Demangles Discord's Menu Item module",
                    messageEvents: "API required by anything using message events",
                    messagePopover: "API to add buttons to message popovers",
                    messageUpdater: "API for updating and re-rendering messages",
                    nicknameIcons: "API to add icons to the nickname, in profiles",
                    notices: "Fixes notices being automatically dismissed",
                    serverList: "API required for plugins that modify the server list",
                    userSettings: "Patches Discord's UserSettings to expose their group and name.",
                    audioPlayer: "API to play internal Discord audio files or external audio links.",
                    userArea: "API to add buttons to the user area panel."
                },
                chatButtons: {
                    context: {
                        buttons: "Buttons"
                    }
                }
            },
            badges: {
                description: "API to add badges to users",
                contributor: {
                    plexcord: "Plexcord Contributor",
                    vencord: "Vencord Contributor",
                    userPlugin: "User Plugin Contributor"
                },
                context: {
                    title: "Badges Options",
                    copy: {
                        name: "Copy Badge Name",
                        link: "Copy Badge Image Link"
                    },
                    refetch: {
                        button: "Refetch Badges",
                        success: "Badges successfully refetched!"
                    }
                },
                modal: {
                    title: "Plexcord Donor",
                    special: "This Badge is a special perk for Plexcord Donors",
                    description: "Please consider supporting the development of Plexcord by becoming a donor. It would mean a lot!"
                }
            },
        },
        uiElements: {
            manage: "Manage UI Elements",
            allows: "Allows you to hide buttons you don't like",
            section: {
                chatbar: {
                    title: "Chatbar Buttons",
                    description: "These are the buttons on the right side of the chat input bar"
                },
                messagePopover: {
                    title: "Message Popover Buttons",
                    description: "These are the floating buttons on the right when you hover over a message"
                }
            },
            button: "Buttons of enabled plugins will appear here."
        }
    },

    patchHelper: {
        title: "Patch Helper",
        description: "A developer tool to help you create patches for Plexcord plugins.",
        fullPatch: {
            label: "Full Patch",
            description: "Paste your full JSON patch here to fill in the fields"
        },
        find: "Find",
        match: "Match",
        replacement: "Replacement",
        preview: "Preview",
        generatedCode: "Generated Code",
        group: "Group",
        diff: "Diff",
        module: "Module",
        compile: "Compile",
        compiled: "Compilation Successful",
        copy: {
            clipboard: "Copy to Clipboard",
            codeblock: "Copy as Code Block"
        },
        error: {
            noMatch: "No match found. This module may be lazy loaded?",
            multipleMatch: "Multiple matches found. Please use a more specific search pattern.",
            noFind: "'Find' field is missing.",
            noReplacement: "'Replacement' field is missing.",
            invalidReplacement: "'Replacement' field is invalid",
            replacementMatch: "'replacement.match' field is missing",
            replacementReplace: "'replacement.replace' field is missing",
            replacementMustFunction: "'Replacement' must be a function"
        },
        cheatSheet: {
            title: "Cheat Sheet",
            identifiers: "Special regex escape sequence that matches identifiers (varnames, classnames, etc.)",
            dollar: "Insert a $",
            entireMatch: "Insert the entire match",
            beforeMatch: "Insert the substring before the match",
            afterMatch: "Insert the substring after the match",
            nthGroup: "Insert the nth capturing group ($1, $2...)",
            pluginInstance: "Insert the plugin instance"
        },
        replacementEval: {
            label: "Treat Replacement as function",
            description: "'Replacement' will be evaluated as a function if this is enabled"
        }
    },

    sync: {
        title: "Backup & Restore",
        warning: "Warning",
        warningText: "Importing a settings file will overwrite your current settings. Make sure to export a backup first if you want to keep your current configuration.",
        description: "You can import and export your Plexcord settings as a JSON file. This allows you to easily transfer your settings to another device, or recover your settings after reinstalling Plexcord or Discord.",
        successful: "Settings successfully imported. Restart to apply changes!",
        error: {
            failure: "Failed to import settings: {{error}}",
            failedExport: "Failed to export settings, check console",
            invalid: "Invalid Settings. Is this even a Plexcord Settings file?",
            tooLarge: "DataStore too large - excluded from backup. Use 'Export DataStores' if needed.",
            clearSomeDate: "DataStore too large. Please clear some plugin data and try again."
        },
        settings: {
            text: "What's included in a backup?",
            quickcss: "Custom QuickCSS",
            theme: "Theme Links",
            plugins: "Plugin Settings",
            datastores: "Plugin DataStores (e.g Timezones or IRememberYou)"
        },
        import: {
            title: "Import Settings",
            description: "Select a previously exported settings file to restore your configuration. This will replace all your current settings with the ones from the backup.",
            all: "Import All Settings",
            plugins: "Import Plugin",
            css: "Import QuickCSS",
            datastore: "Import DataStores"
        },
        export: {
            title: "Export Settings",
            description: "You can export your current Plexcord settings to a file for backup or transfer to another device.",
            all: "Export All Settings",
            plugins: "Export Plugin",
            css: "Export QuickCSS",
            datastore: "Export DataStores"
        }
    },

    cloud: {
        text: "Cloud",
        title: "Settings Sync",
        override: "Cloud Sync",
        description: "Synchronize your Plexcord settings to the cloud. This makes it easy to keep your configuration consistent across multiple devices without manual import/export.",
        switchDescription: "When enabled, your settings can be synced to and from the cloud. Use the actions below to manually sync.",
        settings: "Cloud Settings",
        successful: "Synchronized settings to the cloud!",
        updated: "Your settings have been updated! Click here to restart to fully apply changes!",
        deleted: "Settings deleted from cloud!",
        integration: {
            title: "Cloud Integration",
            description: "Plexcord's cloud integration allows you to sync your settings across multiple devices and Discord installations. Your data is securely stored and can be easily restored at any time.",
        },
        reauth: "We've noticed you have cloud integrations enabled in another client! Due to limitations, you will need to re-authenticate to continue using them. Click here to go to the settings page to do so!",
        error: {
            setup: "Setup failed (couldn't retrieve OAuth configuration).",
            secret: "Setup failed (no secret returned).",
            string: "Setup failed ({{error}}).",
            connect: "Cloud sync was disabled because this account isn't connected to the Plexcord Cloud App. You can enable it again by connecting this account in Cloud Settings. (note: it will store your preferences separately)",
            noSettings: "There are no settings in the cloud.",
            uptodate: "Your settings are up to date.",
            localNewer: "Your local settings are newer than the cloud ones.",
            delete: "Could not delete settings ({{error}}).",
            api: {
                returned: {
                    delete: "Could not delete settings (API returned {{status}}).",
                    to: "Could not synchronize settings to cloud (API returned {{status}}).",
                    from: "Could not synchronize settings from the cloud (API returned {{status}})."
                }
            },
            synchronize: {
                to: "Could not synchronize settings to cloud ({{error}}).",
                from: "Could not synchronize settings from the cloud ({{error}})."
            }
        },
        warning: {
            enableCloudIntegration: "Enable cloud integration above to use settings sync features."
        },
        danger: {
            title: "Danger Zone",
            description: "Permanently delete all your data from the cloud. This action cannot be undone and will remove all synced settings and any other data stored on the cloud backend.",
            delete: {
                account: {
                    title: "Delete Cloud Account",
                    description: "Are you sure you want to permanently delete your cloud account and all associated data? This action cannot be undone.",
                    confirm: "Delete Account",
                    cancel: "Cancel"
                }
            }
        },
        notification: {
            title: "Cloud Integration",
            enabled: "Cloud integration Enabled",
            host: "{{host}} has been added to the whitelist. Please restart the app for the changes to take effect.",
            erase: {
                successful: "Cloud data successfully erased",
                failed: "Failed to erase all data (API {{status}} returned), please contact support."
            }
        },
        button: {
            to: "Sync to Cloud",
            from: "Sync from Cloud",
            fromDescription: "This will overwrite your local settings with the ones on the cloud. Use wisely!",
            delete: "Delete Cloud Data",
            enable: "Enable Cloud Integrations",
            reauthorize: "Reauthorize",
            confirm: "Restart now",
            later: "Later!"
        },
        privacy: "respects your privacy",
        source: "source code",
        overview: "Plexcord comes with a cloud integration that adds goodies like settings sync across devices. It {{privacy}}, and the {{source}} is AGPL 3.0 licensed so you can host it yourself.",
        authorization: "Connect to the cloud backend for settings synchronization. This will request authorization if you haven't set up cloud integration yet.",
        backend: {
            title: "Cloud Backend",
            description: "Choose how your settings are stored in the cloud. By default, Plexcord Cloud is used, but you can also connect your own self-hosted cloud service.",
            invalid: "Invalid URL"
        },
        sync: {
            title: "Sync Rules for This Device",
            description: "This setting controls how settings move between this device and the cloud. You can let changes flow both ways, or choose one place to be the main source of truth.",
            direction: {
                both: "Two-way sync (changes go both directions)",
                push: "This device is the source (upload only)",
                pull: "The cloud is the source (download only)",
                manual: "Do not sync automatically (manual sync via buttons below only)"
            }
        }
    },

    changelog: {
        text: "Changelog",
        title: "Changelog",
        description: "You can find the latest changes and updates to Plexcord here.",
        by: "by",
        check: "Repository check",
        uptodate: "up to date",
        update: "Update",
        noMessage: "No message",
        unknown: "Unknown",
        updatedPlugins: "Updated Plugins",
        newSettings: "New Settings",
        newSettingTooltip: "New setting in {{plugin}}",
        loading: "Loading...",
        repoUptodate: "Repository up to date",
        fetch: "Fetch from Repository",
        clear: "Clear All Logs",
        internet: "Make sure you have an internet connection and try again.",
        recent: "Recent Changes",
        codeChanges: "Code Changes {{count}} new commit{{s}}",
        updateLogs: "Update Logs ({{count}})",
        noCommit: "No commits available ahead of your current version. Click 'Fetch from Repository' to check for new changes.",
        previous: "Previous update sessions with their commit history and plugin changes.",
        modal: {
            description: "View the most recent changes to Plexcord. This fetches commits directly from the repository to show you what's new.",
            repository: "Repository",
            failed: "Failed to retrieve - check console",
            current: "Current:",
            hide: "Hide logs",
            show: "Show logs",
            fetch: {
                title: "Fetch Changes",
                description: "Check the repository for new commits, plugin updates, and code changes. This will compare your current version with the latest available and show you what's new.",
                newCommit: "These are the new commits and plugin updates since your last version. You can see what features were added, bugs were fixed, and which plugins received updates.",
                confirm: "Fetch",
            }
        },
        commit: {
            available: "commits available",
            no: "No new commits",
            new: "new plugins",
            updated: "updated plugins",
            settings: "new settings"
        },
        toast: {
            already: "Already up to date with repository",
            found: "Found {{count}} new commit{{s}} from repository",
            local: "Repository is up to date with your local copy",
            failed: "Failed to fetch from repository :(",
            cleared: "All logs have been cleared",
            logCleared: "Log has been cleared",
            yourLatest: "Logged commits from your latest update"
        },
        alert: {
            clear: {
                title: "Clear All Logs",
                body: "Are you sure you would like to clear all logs? This can't be undone.",
                confirm: "Clear All",
                confirmColor: "danger",
                cancel: "Cancel"
            },
            log: {
                title: "Clear Log",
                body: "Are you sure you would like to clear this log? This can't be undone.",
                confirm: "Clear Log",
                confirmColor: "danger",
                cancel: "Cancel"
            }
        },
        newPlugins: "{{count}} New Plugin{{s}}",
        following: "The following plugins have been added in recent updates:",
        more: "+{{count}} more plugins"
    },

    csp: {
        restart: "A restart is required to apply this change",
        blocked: {
            resources: "Blocked Resources",
            disallowed: "Some images, styles, or fonts were blocked because they come from disallowed domains.",
            recommended: "It is highly recommended to move them to GitHub or Imgur. But you may also allow domains if you fully trust them.",
            afterAllow: "After allowing a domain, you have to fully close (from tray / task manager) and restart {{platform}} to apply the change.",
            allow: "Allow",
            url: "Blocked URLs"
        },
        imgur: {
            direct: "Imgur links should be direct links in the form of {{etc}}",
            copy: "To obtain a direct link, right-click the image and select 'Copy image address'."
        },
        wants: {
            caller: "{{callerName}} wants to allow connections to {{domain}}",
            detail: "Unless you recognise and fully trust {{domain}}, you should cancel this request!",
            restart: "You will have to fully close and restart {{appName}} for the changes to take effect.",
            type: {
                images: "Images",
                styles: "CSS & Themes",
                fonts: "Fonts"
            },
            content: "The following types of content will be allowed to load from {{domain}}:",
            understand: "I fully trust {{domain}} and understand the risks of allowing connections to it.",
            button: {
                cancel: "Cancel",
                allow: "Allow"
            },
            title: "Host Permissions"
        }
    },

    themes: {
        title: "Themes",
        management: "Theme Management",
        description: "Customize Discord's appearance with themes. Add local .css files or load themes directly from URLs. Themes with a cog wheel icon have customizable settings you can modify.",
        local: "Local Themes",
        new: "NEW",
        pinned: "Pinned",
        stylus: "Stylus extension",
        bd: "BetterDiscord Themes",
        github: "Github",
        download: "Looking for themes? Check out {{bd}} or search on {{github}}. When downloading from BetterDiscord, click 'Download' and place the .theme.css file into your themes folder.",
        add: "Add",
        reset: "Reset settings to default",
        notCSS: "Not a CSS file. Remember to use the raw link!",
        okay: "Okay!",
        checking: "Checking...",
        valid: "Valid!",
        upload: "Upload Theme",
        openFolder: "Open Themes Folder",
        loadMissing: "Load Missing Themes",
        editQuickCSS: "Edit QuickCSS",
        editClient: "Edit ClientTheme",
        website: "Open Website",
        discord: "Discord Server",
        downloadTheme: "Download",
        refresh: "Refresh",
        delete: "Delete",
        unknown: {
            title: "Unknown",
            author: "Unknown Author",
            theme: "A Discord Theme"
        },
        required: "The following plugins are required, but aren't enabled: ",
        homepage: "Homepage",
        support: "Support",
        online: {
            title: "Online Themes",
            description: "Load themes directly from URLs instead of local files. Online themes auto-update when the source changes, so you always have the latest version without manual downloads.",
            enable: "Enable Online Themes",
            enableDescription: "Toggle online theme loading. When disabled, all online themes will be turned off and you won't be able to add new ones."
        },
        quickActions: {
            title: "Quick Actions",
            description: "Shortcuts for managing your themes. Open your themes folder to add new themes, use QuickCSS for quick style tweaks, or reload themes after making changes."
        },
        error: {
            userscript: "Themes are not supported on the Userscript!",
            stylus: "You can istead install themes with the {{stylus}}!",
            expired: "Invalid or expired link",
            text: "Error:"
        },
        copy: {
            url: "Copy URL",
            copied: "Theme URL copied!",
            settings: "Copy theme settings",
            copiedSettings: "Copied theme settings to clipboard."
        },
        paste: {
            settings: "Paste theme settings",
            empty: "Your clipboard is empty.",
            invalid: "Your clipboard doesn't have valid settings data.",
            pasted: "Pasted theme settings from clipboard."
        },
        settings: {
            for: "Settings for {{themeName}}",
        },
        installed: {
            title: "Installed Themes",
            description: "Manage your themes here. Local themes load from your themes folder, online themes from URLs. Themes with a cog wheel icon have customizable settings.",
            count: "{{count}} theme{{s}} installed ({{localCount}} local, {{onlineCount}} online) · {{enabledCount}} enabled",
            search: "Search for a theme...",
            loading: "Loading themes...",
            none: "No themes installed yet. Add theme files to your themes folder or add an online theme above to get started.",
            noCriteria: "No themes match your search or filter criteria."
        },
        filter: {
            all: "Show All",
            online: "Online Themes",
            local: "Local Themes",
            enabled: "Enabled",
            disabled: "Disabled"
        },
        notification: {
            refresh: {
                title: "Theme Refreshed",
                error: "Failed to refresh theme"
            },
            failed: {
                download: "Failed to download theme"
            }
        }
    },

    updater: {
        title: "Updater",
        settings: "Updater Settings",
        updates: "Updates",
        updated: "has been updated!",
        restart: "Click here to restart",
        repaired: "Plexcord has been repaired!",
        ok: "Ok",
        preferences: {
            title: "Update Preferences",
            description: "Control how Plexcord keeps itself up to date. You can choose to update automatically in the background or be notified when new updates are available.",
        },
        github: {
            local: "Your local copy has more recent commits than the remote repository. This usually happens when you've made local changes. Please stash or reset them before updating."
        },
        error: {
            check: "Failed to check updates. Check the console for more info",
            occurred: "An unknown error occurred",
            retrieve: "Failed to retrieve - check console",
            title: "Oops!",
            tryAgain: "An unknown error occurred. Please try again or see the console for more info.",
            command: "Command {{path}} not found. Please install it and try again.",
            code: "Code {{code}}. See the console for more info.",
            running: "An error occurred while running {{cmd}}: {{error}}",
            failed: "That also failed :( Try updating or re-installing with the installer!"
        },
        available: "There is 1 update",
        updateAvailable: "A Plexcord update is available!",
        click: "Click here to view the update",
        available_plural: "There are {{count}} updates",
        current: "Up to Date!",
        successful: {
            title: "Update Success!",
            body: "Successfully updated. Restart now to apply the changes?",
            button: {
                confirm: "Restart",
                cancel: "Not now!",
                update: "Update Now",
                check: "Check for Updates"
            },
            noFound: "No updates found"
        },
        automatically: {
            label: "Automatically update",
            description: "Automatically update Plexcord without confirmation prompt"
        },
        notify: {
            label: "Get notified when an automatic update completes",
            description: "Shows a notification when Plexcord automatically updates"
        },
        repo: "Repo",
        repoDescription: "This is the GitHub repository where Plexcord fetches updates from.",
        loading: "Loading...",
    },

    components: {
        error: {
            title: "Oh no!",
            render: "An error occurred while rendering this Component. More info can be found below and in your console."
        },
        componentFailed: {
            message: "Uh Oh! Failed to render this Page. However, there is an update available that might fix it. Would you like to update and restart now?"
        }
    },

    commands: {
        error: {
            execute: "An Error occurred while executing command '{{command}}'"
        }
    },

    notifications: {
        dismiss: "Dismiss Notification",
        noYet: "No notifications yet",
        settings: "Notification Settings",
        log: {
            title: "Notification Log",
            clear: "Clear Notification Log",
            sure: "Are you sure?",
            permamently: "This will permamently remove {{count}} notification{{s}}. This action cannot be undone.",
            button: {
                confirm: "Do it!",
                cancel: "Nevermind"
            }
        }
    },

    memberlist: {
        error: {
            render: "Failed to render {{key}} Member List Decorator"
        }
    },

    message: {
        accessory: {
            error: {
                render: "Failed to render {{key}} Message Accessory"
            }
        },
        decoration: {
            error: {
                render: "Failed to render {{key}} Message Decoration"
            }
        }
    },

    utils: {
        toast: {
            copied: "Copied to clipboard!"
        }
    },

    common: {
        unit: {
            year: "year",
            years: "years",
            month: "month",
            months: "months",
            week: "week",
            weeks: "weeks",
            day: "day",
            days: "days",
            hour: "hour",
            hours: "hours",
            minute: "minute",
            minutes: "minutes",
            second: "second",
            seconds: "seconds",
            ago: "ago",
            s: "s"
        }
    },

    plugin: {
        noTrack: {
            name: "NoTrack",
            description: "Disable Discord's tracking (analytics/'science'), metrics and Sentry crash reporting",
            option: {
                disableAnalytics: {
                    label: "Disable Analytics",
                    description: "Disable Discord's tracking (analytics/'science'), metrics and Sentry crash reporting"
                }
            }
        },
        settings: {
            name: "Settings",
            description: "Adds Settings UI and debug info",
            option: {
                language: {
                    label: "Language",
                    description: "Select your preferred language for Plexcord."
                },
                settingsLocation: {
                    label: "Settings Location",
                    description: "Determines where the Plexcord settings section will be located."
                }
            }
        },
        supportHelper: {
            name: "Support Helper",
            description: "Helps us provide support to you",
            commands: {
                description: {
                    debug: "Send Plexcord debug info",
                    plugins: "Send Plexcord plugin list"
                }
            },
            modals: {
                outdated: {
                    title: "Hold on!",
                    body: "You are using an outdated version of Plexcord! Chances are, your issue is already fixed.",
                    footer: "Please first update before asking for support!",
                    button: {
                        cancel: "View Updates",
                        confirm: "Update & Restart Now",
                        secondaryConfirm: "I know what I'm doing or I can't update"
                    }
                },
                updater: {
                    title: "Hold on!",
                    body: "You are using an externally updated Plexcord version, which we do not provide support for!",
                    footer: "Please either switch to an {{officially}}, or contact your package maintainer for support instead.",
                    officially: "officially supported version of Plexcord",
                    button: {
                        cancel: "Cancel",
                        confirm: "View Download Page",
                        now: "Update Now"
                    },
                    toast: {
                        success: "Success! Restarting...",
                        already: "Already up to date!",
                        failed: "Failed to update :("
                    }
                },
                custom: {
                    title: "Hold on!",
                    header: "You are using a custom build of Plexcord, which we do not provide support for!",
                    body: "We only provide support for {{officialBuild}}. Either {{switch}} or figure your issue out yourself.",
                    footer: "You will be banned from receiving support if you ignore this rule.",
                    official: "official builds",
                    switch: "switch to an official build",
                    button: {
                        confirm: "Understood",
                        secondaryConfirm: "Don't show again"
                    }
                }
            },
            button: {
                debug: "Run /plexcord-debug",
                plugins: "Run /plexcord-plugins",
                snippet: "Run Snippet"
            },
            toast: {
                success: "Success!",
                failed: "Failed to run snippet :(",
                failedOpenInvite: "Failed to open invite please check console :(",
                upload: "Plugin list uploaded successfully!",
                failedUpload: "Failed to upload plugin list file. Please try again.",
                unableGenerate: "Failed to generate plugin list."
            },
            dm: {
                warning: "Please do not private message Plexcord plugin developers for support!{{br}}Instead, you can join the {{support}} server and use the Plexcord support channel: {{channel}}"
            },
            alert: {
                title: "Warning: High Plugin Count",
                paragraph1: "You have more than 100 plugins enabled.",
                paragraph2: "Due to the sheer amount of plugins, you may not receive support.",
                paragraph3: "Your issue is likely caused by plugin conflicts.",
                paragraph4: "Please consider disabling some plugins to troubleshoot.",
                paragraph5: "Your plugin list will be sent as a text file.",
            }
        },
        accountPanelServerProfile: {
            name: "AccountPanelServerProfile",
            description: "Right click your account panel in the bottom left to view your profile in the current server",
            option: {
                prioritizeServerProfile: {
                    label: "Prioritize Server Profile",
                    description: "Prioritize Server Profile when left clicking your account panel"
                }
            },
            context: {
                account: "View Account Profile",
                server: "View Server Profile",
                prioritize: "Prioritize Server Profile"
            }
        },
        altKrispSwitch: {
            name: "AltKrispSwitch",
            description: "Makes the Noise Suppression Popout switch between None and Krisp instead of Krisp and Standard"
        },
        alwaysAnimate: {
            name: "AlwaysAnimate",
            description: "Animates anything that can be animated",
            option: {
                icons: {
                    label: "Icons",
                    description: "Always animate server icons, avatars, decor and more"
                },
                statusEmojis: {
                    label: "Status Emojis",
                    description: "Always animate status emojis"
                },
                serverBanners: {
                    label: "Server Banners",
                    description: "Always animate server banners"
                },
                nameplates: {
                    label: "Nameplates",
                    description: "Always animate nameplates"
                },
                roleGradients: {
                    label: "Role Gradients",
                    description: "Always animate role gradients"
                }
            }
        },
        alwaysExpandProfiles: {
            name: "AlwaysExpandProfiles",
            description: "Always expands profiles popouts to the full modal"
        },
        alwaysExpandRoles: {
            name: "AlwaysExpandRoles",
            description: "Always expands role lists in profile popouts",
            option: {
                hideArrow: {
                    label: "Hide Arrow",
                    description: "Hide arrow"
                }
            }
        },
        animalese: {
            name: "Animalese",
            description: "Plays animal crossing animalese for every message sent (they yap a lot)",
            option: {
                volume: {
                    label: "Volume",
                    description: "Volume of the animalese sound"
                },
                speed: {
                    label: "Speed",
                    description: "Speed of the animalese sound"
                },
                pitch: {
                    label: "Pitch",
                    description: "Pitch multiplier"
                },
                messageLengthLimit: {
                    label: "Message Length Limit",
                    description: "Maximum length of message to process"
                },
                processOwnMessages: {
                    label: "Process Own Messages",
                    description: "Enable to yap your own messages too"
                },
                soundQuality: {
                    label: "Sound Quality",
                    description: "Quality of sound to use",
                    high: "High",
                    med: "Medium",
                    low: "Low",
                    lowest: "Lowest"
                }
            }
        },
        alwaysTrust: {
            name: "AlwaysTrust",
            description: "Removes the annoying untrusted domain and suspicious file popup",
            option: {
                domain: {
                    label: "Domain",
                    description: "Remove the untrusted domain popup when opening links"
                },
                file: {
                    label: "File",
                    description: "Remove the 'Potentially Dangerous Download' popup when opening links"
                },
                noDeleteSafety: {
                    label: "No Delete Safety",
                    description: "Removes the enter server name requirement when deleting a server"
                },
                confirmModal: {
                    label: "Confirm Modal",
                    description: "Should a 'are you sure you want to delete' modal be shown?"
                }
            },
            alert: {
                title: "Delete server?",
                body: "It's permanent, if that wasn't obvious.",
                confirm: "Delete",
                cancel: "Cancel"
            }
        },
        anonymiseFileNames: {
            name: "AnonymiseFileNames",
            description: "Anonymise uploaded file names",
            option: {
                anonymiseByDefault: {
                    label: "Anonymise by default",
                    description: "Anonymise file names by default. You can disable this in the upload popup if needed."
                },
                spoilerMessages: {
                    label: "Spoiler Messages",
                    description: "Anonymise file names that are marked as spoilers."
                },
                method: {
                    label: "Method",
                    description: "Anonymisation method",
                    random: "Random Characters",
                    consistent: "Consistent",
                    timestamp: "Timestamp"
                },
                randomisedLength: {
                    label: "Randomised Length",
                    description: "Randomised character length"
                },
                consistent: {
                    label: "Consistent",
                    description: "Consistent anonymisation secret"
                }
            },
            using: {
                anonymous: "Using anonymous file name",
                spoiler: "Using normal file name"
            },
            spoiler: {
                description: "Toggle spoiler for your files",
                toggle: "Toggle spoiler for your files (default on)",
                enabled: "Spoiler enabled!",
                disabled: "Spoiler disabled!"
            }
        },
        appleMusic: {
            name: "AppleMusicRichPresence",
            description: "Discord rich presence for your Apple Music!",
            about: "For the customizable activity format strings, you can use several special strings to include track data in activities! {{name}} is replaced with the track name; {{artist}} is replaced with the artist(s)' name(s); and {{album}} is replaced with the album name.",
            button: {
                listen: "Listen on Apple Music",
                songLink: "View on SongLink"
            },
            option: {
                activityType: {
                    label: "Activity Type",
                    description: "Which type of activity",
                    listening: "Listening",
                    playing: "Playing"
                },
                statusDisplayType: {
                    label: "Status Display Type",
                    description: "Show the track / artist name in the member list",
                    off: "Don't show (shows generic listening message)",
                    artist: "Show artist name",
                    track: "Show track name"
                },
                refreshInterval: {
                    label: "Refresh Interval",
                    description: "The interval between activity refreshes (seconds)"
                },
                enableTimestamps: {
                    label: "Enable Timestamps",
                    description: "Whether or not to enable timestamps"
                },
                enableButtons: {
                    label: "Enable Buttons",
                    description: "Whether or not to enable buttons"
                },
                nameString: {
                    label: "Name String",
                    description: "Activity name format string"
                },
                detailsString: {
                    label: "Details String",
                    description: "Activity details format string"
                },
                stateString: {
                    label: "State String",
                    description: "Activity state format string"
                },
                largeImageType: {
                    label: "Large Image Type",
                    description: "Activity assets large image type",
                    album: "Album artwork",
                    artist: "Artist artwork",
                    disabled: "Disabled"
                },
                largeTextString: {
                    label: "Large Text String",
                    description: "Activity assets large text format string"
                },
                smallImageType: {
                    label: "Small Image Type",
                    description: "Activity assets small image type",
                    album: "Apple Music logo",
                    artist: "Artist artwork",
                    disabled: "Disabled"
                },
                smallTextString: {
                    label: "Small Text String",
                    description: "Activity assets small text format string"
                }
            }
        },
        arRpc: {
            name: "WebRichPresence(arRPC)",
            description: "Client plugin for arRPC to enable RPC on Discord Web (experimental)",
            use: {
                title: "How to use arRPC",
                enable: "{{link}} to get the server running, and then enable the plugin.",
                link: "Follow the instructions in the GitHub repo"
            },
            toast: {
                connected: "Connected to arRPC",
                failed: "Failed to connect to arRPC, is it running?",
                retry: "Retry"
            }
        },
        atSomeone: {
            name: "AtSomeone",
            description: "With @someone you can mention someone randomly"
        },
        autoDNDWhilePlaying: {
            name: "AutoDndWhilePlaying",
            description: "Automatically updates your online status (online, idle, dnd) when launching games",
            option: {
                statusToSet: {
                    label: "Status to Set",
                    description: "The status to set when launching a game",
                    online: "Online",
                    dnd: "Do Not Disturb",
                    idle: "Idle",
                    invisible: "Invisible"
                },
                excludeInvisible: {
                    label: "Exclude Invisible",
                    description: "Prevent automatic status changes while your status is set to invisible"
                }
            }
        },
        autoZipper: {
            name: "AutoZipper",
            description: "Automatically zips specified file types and folders before uploading to Discord",
            option: {
                extensions: {
                    label: "Extensions",
                    description: "Comma-separated list of file extensions to auto-zip (e.g., .psd,.blend,.exe,.dmg)"
                }
            }
        },
        bannersEverywhere: {
            name: "BannersEverywhere",
            description: "Displays banners in the member list",
            option: {
                animate: {
                    label: "Animate",
                    description: "Animate banner"
                },
                preferNameplate: {
                    label: "Prefer Nameplate",
                    description: "Prefer nameplate over banner"
                }
            }
        },
        betterActivities: {
            name: "BetterActivities",
            description: "Shows activity icons in the member list and allows showing all activities",
            option: {
                memberList: {
                    label: "Member List",
                    description: "Show activity icons in the member list"
                },
                iconSize: {
                    label: "Icon Size",
                    description: "Size of the activity icons"
                },
                specialFirst: {
                    label: "Special First",
                    description: "Show special activities first (Currently Spotify and Twitch)"
                },
                renderGifs: {
                    label: "Render GIFs",
                    description: "Allow rendering GIFs"
                },
                removeGameActivityStatus: {
                    label: "Remove 'Game Activity' Status",
                    description: "Remove game activity icon and status"
                },
                userPopout: {
                    label: "User Popout",
                    description: "Show all activities in the profile popout/sidebar"
                },
                hideTooltip: {
                    label: "Hide Tooltip",
                    description: "Hides activities in various places"
                },
                allActivitiesStyle: {
                    label: "All Activities Style",
                    description: "Style for showing all activities",
                    list: "List",
                    carousel: "Carousel",
                    left: "Left",
                    right: "Right"
                }
            }
        },
        betterAudioPlayer: {
            name: "BetterAudioPlayer",
            description: "Adds a spectrograph and oscilloscope visualizer to audio attachment players",
            option: {
                oscilloscope: {
                    label: "Oscilloscope",
                    description: "Enable oscilloscope visualizer"
                },
                spectrograph: {
                    label: "Spectrograph",
                    description: "Enable spectrograph visualizer"
                },
                oscilloscopeSolidColor: {
                    label: "Oscilloscope Solid Color",
                    description: "Use a solid color for the oscilloscope instead of a gradient"
                },
                oscilloscopeColor: {
                    label: "Oscilloscope Color",
                    description: "Color of the oscilloscope when solid color is enabled"
                },
                spectrographSolidColor: {
                    label: "Spectrograph Solid Color",
                    description: "Use a solid color for the spectrograph instead of a gradient"
                },
                spectrographColor: {
                    label: "Spectrograph Color",
                    description: "Color of the spectrograph when solid color is enabled"
                },
                forceMoveBelow: {
                    label: "Force Move Below",
                    description: "Force the visualizer to be below the audio controls"
                }
            },
            toast: {
                invalidColorFormat: "Invalid color format for {{settingKey}}, make sure it's in the format 'R, G, B' or '#RRGGBB'"
            }
        },
        betterBanReasons: {
            name: "BetterBanReasons",
            description: "Create custom reasons to use in the Discord ban modal, and/or show a text input by default instead of the options.",
            option: {
                reasons: {
                    label: "Reasons",
                    description: "Your custom reasons"
                },
                isTextInputDefault: {
                    label: "Is Text Input Default",
                    description: "Shows a text input instead of a select menu by default. (Equivalent to clicking the 'Other' option)"
                }
            },
            title: "Reasons",
            placeholder: "Reason",
            add: "Add another reason"
        },
        betterBlockedUsers: {
            name: "BetterBlockedUsers",
            description: "Allows you to search in blocked users list and makes names selectable in settings.",
            placeholder: "Search users..."
        },
        betterCommands: {
            name: "BetterCommands",
            description: "Enhances the command system with miscellaneous improvements.",
            option: {
                autoFillArguments: {
                    label: "Auto Fill Arguments",
                    description: "Automatically fill command with all arguments instead of just required ones"
                },
                allowNewlinesInCommands: {
                    label: "Allow Newlines in Commands",
                    description: "Allow newlines in command inputs (CTRL + Shift + Enter)"
                }
            },
            command: {
                refresh: {
                    description: "Refreshes Discord application commands locally",
                    user: "specific user to try and refresh",
                    refreshing: "Refreshing application commands...",
                    refreshed: "Commands refreshed successfully!",
                    failed: "Failed to refresh commands. Check the console for details."
                }
            }
        },
        betterFolders: {
            name: "BetterFolders",
            description: "Shows server folders on dedicated sidebar and adds folder related improvements",
            option: {
                sidebar: {
                    label: "Sidebar",
                    description: "Display servers from folder on dedicated sidebar"
                },
                sidebarAnim: {
                    label: "Sidebar Animation",
                    description: "Animate opening the folder sidebar"
                },
                closeAllFolders: {
                    label: "Close All Folders",
                    description: "Close all folders when selecting a server not in a folder"
                },
                closeAllHomeButton: {
                    label: "Close All Home Button",
                    description: "Close all folders when clicking on the home button"
                },
                closeOthers: {
                    label: "Close Others",
                    description: "Close other folders when opening a folder"
                },
                closeServerFolder: {
                    label: "Close Server Folder",
                    description: "Close folder when selecting a server in that folder"
                },
                forceOpen: {
                    label: "Force Open",
                    description: "Force a folder to open when switching to a server of that folder"
                },
                keepIcons: {
                    label: "Keep Icons",
                    description: "Keep showing guild icons in the primary guild bar folder when it's open in the BetterFolders sidebar"
                },
                showFolderIcon: {
                    label: "Show Folder Icon",
                    description: "Show the folder icon above the folder guilds in the BetterFolders sidebar",
                    never: "Never",
                    always: "Always",
                    moreThanOne: "When more than one folder is expanded"
                }
            }
        },
        betterGifAltText: {
            name: "BetterGifAltText",
            description: "Change GIF alt text from simply being 'GIF' to containing the gif tags / filename"
        },
        betterGifPicker: {
            name: "BetterGifPicker",
            description: "Makes the gif picker open the favourite category by default",
            option: {
                keepOpen: {
                    label: "Keep Open",
                    description: "Keeps the gif picker open after selecting a gif"
                }
            }
        },
        betterInvites: {
            name: "BetterInvites",
            description: "See invites expiration date, view inviter profile and preview servers before joining by clicking the name",
            render: {
                tip: "This invite will expire {{time}}",
                header: "{{name}} invited you to {{server}}",
                never: "not expire"
            }
        },
        betterNotesBox: {
            name: "BetterNotesBox",
            description: "Hide notes or disable spellcheck (Configure in settings!!)",
            option: {
                hide: {
                    label: "Hide notes",
                    description: "Hide the notes box in user popouts"
                },
                noSpellCheck: {
                    label: "No Spell Check",
                    description: "Disable spellcheck in notes"
                }
            }
        },
        betterPlusReacts: {
            name: "BetterPlusReacts",
            description: "The amount of plus before :emoji: is the message to add it to"
        },
        betterRoleContext: {
            name: "BetterRoleContext",
            description: "Adds options to copy role color / edit role / view role icon when right clicking roles in the user profile",
            option: {
                roleIconFileFormat: {
                    label: "Role Icon File Format",
                    description: "File format to use when viewing role icons"
                }
            },
            context: {
                copyColor: "Copy Role Color",
                editRole: "Edit Role",
                viewIcon: "View Role Icon"
            }
        },
        betterRoleDot: {
            name: "BetterRoleDot",
            description: "Copy role colour on RoleDot (accessibility setting) click. Also allows using both RoleDot and coloured names simultaneously.",
            option: {
                bothStyles: {
                    label: "Both Styles",
                    description: "Show both role dot and coloured names"
                },
                copyRoleColorInProfilePopout: {
                    label: "Copy Role Color in Profile Popout",
                    description: "Allow click on role dot in profile popout to copy role color"
                }
            }
        },
        betterSessions: {
            name: "BetterSessions",
            description: "Enhances the sessions (devices) menu. Allows you to view exact timestamps, give each session a custom name, and receive notifications about new sessions.",
            new: "NEW",
            newSessions: "New Sessions:",
            rename: "Rename",
            newDevice: "New Device Name",
            resetName: "Reset Name",
            save: "Save",
            cancel: "Cancel",
            option: {
                backgroundCheck: {
                    label: "Background Check",
                    description: "Check for new sessions in the background, and display notifications when they are detected"
                },
                checkInterval: {
                    label: "Check Interval",
                    description: "How often to check for new sessions in the background (if enabled), in minutes"
                }
            }
        },
        betterSettings: {
            name: "BetterSettings",
            description: "Enhances your settings-menu-opening experience",
            option: {
                disableFade: {
                    label: "Disable Fade",
                    description: "Disable the crossfade animation"
                },
                organizeMenu: {
                    label: "Organize Menu",
                    description: "Organizes the settings cog context menu into categories"
                },
                eagerLoad: {
                    label: "Eager Load",
                    description: "Removes the loading delay when opening the menu for the first time"
                }
            },
            alert: {
                title: "Restart required",
                restart: "You have changed settings that require a restart.",
                confirm: "Restart now",
                cancel: "Later!"
            }
        },
        betterUploadButton: {
            name: "BetterUploadButton",
            description: "Upload with a single click, open menu with right click"
        },
        betterUserArea: {
            name: "BetterUserArea",
            description: "Customize and make the user area more clean.",
            option: {
                removeNameplate: {
                    label: "Remove Nameplate",
                    description: "Remove nameplate styling."
                },
                removeAudioMenus: {
                    label: "Remove Audio Menus",
                    description: "Remove menus next to mute and deafen buttons."
                },
                alwaysShowUsername: {
                    label: "Always Show Username",
                    description: "Always show username instead of status."
                },
                removeButtonTooltips: {
                    label: "Remove Button Tooltips",
                    description: "Remove button tooltips."
                },
                removeAvatarDecoration: {
                    label: "Remove Avatar Decoration",
                    description: "Remove avatar decoration."
                },
                removeUsernameStyles: {
                    label: "Remove Username Styles",
                    description: "Remove username colors and effects."
                }
            }
        },
        biggerStreamPreview: {
            name: "BiggerStreamPreview",
            description: "This plugin allows you to enlarge stream previews",
            context: {
                viewPreview: "View Stream Preview"
            }
        },
        blockKeywords: {
            name: "BlockKeywords",
            description: "Blocks messages containing specific user-defined keywords, as if the user sending them was blocked.",
            option: {
                blockedWords: {
                    label: "Blocked Words",
                    description: "Comma-separated list of words to block"
                },
                useRegex: {
                    label: "Use Regex",
                    description: "Use each value as a regular expression when checking message content (advanced)"
                },
                caseSensitive: {
                    label: "Case Sensitive",
                    description: "Whether to use a case sensitive search or not"
                },
                ignoreBlockedMessages: {
                    label: "Ignore Blocked Messages",
                    description: "Completely ignores (recent) new messages bar"
                }
            }
        },
        blockKrisp: {
            name: "BlockKrisp",
            description: "Prevent Krisp from loading"
        },
        blurNSFW: {
            name: "BlurNSFW",
            description: "Blur attachments in NSFW channels until hovered",
            option: {
                blurAmount: {
                    label: "Blur Amount",
                    description: "Blur Amount (in pixels)"
                },
                blurAllChannels: {
                    label: "Blur All Channels",
                    description: "Blur attachments in all channels (not just NSFW)"
                }
            }
        },
        bypassPinPrompt: {
            name: "BypassPinPrompt",
            description: "Bypass the pin prompt when using the pin functions"
        },
        bypassStatus: {
            name: "BypassStatus",
            description: "Still get notifications from specific sources when in do not disturb mode. Right-click on users/channels/guilds to set them to bypass do not disturb mode.",
            context: {
                remove: "Remove Status Bypass",
                add: "Add Status Bypass"
            },
            option: {
                guilds: {
                    label: "Guilds",
                    description: "Guilds to let bypass (notified when pinged anywhere in guild)",
                    placeholder: "Separate with commas"
                },
                channels: {
                    label: "Channels",
                    description: "Channels to let bypass (notified when pinged in that channel)",
                    placeholder: "Separate with commas"
                },
                users: {
                    label: "Users",
                    description: "Users to let bypass (notified for all messages sent in DMs)",
                    placeholder: "Separate with commas"
                },
                allowOutsideOfDms: {
                    label: "Allow Outside of DMs",
                    description: "Allow selected users to bypass status outside of DMs too (acts like a channel/guild bypass, but it's for all messages sent by the selected users)"
                },
                notificationSound: {
                    label: "Notification Sound",
                    description: "Whether the notification sound should be played"
                },
                respectSilentPings: {
                    label: "Respect Silent Pings",
                    description: "Respect silent pings (@silent / suppress notifications)"
                },
                statusToUse: {
                    label: "Status to Use",
                    description: "Status to use for whitelist",
                    online: "Online",
                    idle: "Idle",
                    dnd: "Do Not Disturb",
                    invisible: "Invisible"
                }
            }
        },
        cakeDay: {
            name: "CakeDay",
            description: "Track and display user birthdays with cake icons",
            context: {
                label: "Birthday",
                setBirthday: "Set Birthday",
                clearBirthday: "Clear Birthday",
                current: "Current:"
            },
            option: {
                chat: {
                    label: "Chat",
                    description: "Show cake icons next to usernames in chat"
                },
                memberList: {
                    label: "Member List",
                    description: "Show cake icons in member list"
                },
                profileBadge: {
                    label: "Profile Badge",
                    description: "Show cake badge in user profile"
                },
                notificationSound: {
                    label: "Notification Sound",
                    description: "Play sound when birthday notification is sent"
                },
                userList: {
                    label: "Saved Birthdays",
                    description: "Manage saved birthdays"
                }
            },
            locations: {
                chat: {
                    label: "Chat",
                    description: "next to usernames in chat"
                },
                memberList: {
                    label: "Member List",
                    description: "in member list"
                }
            },
            toast: {
                success: "Birthday set successfully!",
                invalid: "Invalid birthday format! Only DD/MM is accepted.",
                cleared: "Birthday cleared successfully!"
            },
            notification: {
                title: "🎂 Birthday Today!",
                body: "It's {{username}}'s birthday today!"
            },
            modal: {
                title: "Set Birthday for {{username}}",
                description: "Enter the birthday in DD/MM format (e.g. 25/12)",
                placeholder: "e.g. 25/12",
                current: "Current birthday:",
                set: "Set Birthday",
                cancel: "Cancel",
                birthday: "It's my birthday! 🎂",
                saved: "Saved Birthdays",
                savedDesc: "No birthdays saved yet. Right-click on users to add their birthdays!",
                today: "Today",
                remove: "Remove",
                loading: "Loading...",
                save: "Save",
                edit: "Edit"
            }
        },
        callTimer: {
            name: "CallTimer",
            description: "Shows call timers in all voice calls",
            option: {
                format: {
                    label: "Format",
                    description: "Compact or human-readable format",
                    human: "30d 23h 00m 42s"
                },
                allCallTimers: {
                    label: "Tüm Çağrı Zamanlayıcıları",
                    description: "Sunuculardaki tüm kullanıcılar için çağrı zamanlayıcılarını göster"
                },
                showWithoutHover: {
                    label: "Show Without Hover",
                    description: "Always show the timer without needing to hover"
                },
                showRoleColor: {
                    label: "Show Role Color",
                    description: "Display in the user’s role color (if the ShowRoleColor plugin is enabled)"
                },
                trackSelf: {
                    label: "Track Yourself",
                    description: "Also show your own timer"
                },
                showSeconds: {
                    label: "Show Seconds",
                    description: "Display seconds in the timer"
                },
                watchLargeGuilds: {
                    label: "Watch Large Guilds",
                    description: "Track users in large guilds. This may cause lag if you're in a lot of large guilds with active voice users. Tested with up to 2000 active voice users with no issues."
                },
                fixUI: {
                    label: "UI Fix",
                    description: "In some cases the timer may break the user interface. Enable this option to fix it."
                }
            }
        },
        channelBadges: {
            name: "ChannelBadges",
            description: "Adds badges to channels based on their type",
            badge: {
                private: "This channel is locked.",
                nsfw: "This channel is marked as NSFW.",
                rules: "This channel is the server rules channel."
            },
            option: {
                oneBadgePerChannel: {
                    label: "One Badge Per Channel",
                    description: "Show only one badge per channel"
                },
                showTextBadge: {
                    label: "Show Text Badge",
                    description: "Show Text badge"
                },
                showVoiceBadge: {
                    label: "Show Voice Badge",
                    description: "Show Voice badge"
                },
                showCategoryBadge: {
                    label: "Show Category Badge",
                    description: "Show Category badge"
                },
                showDirectoryBadge: {
                    label: "Show Directory Badge",
                    description: "Show Directory badge"
                },
                showAnnouncementThreadBadge: {
                    label: "Show Announcement Thread Badge",
                    description: "Show Announcement Thread badge"
                },
                showPublicThreadBadge: {
                    label: "Show Public Thread Badge",
                    description: "Show Public Thread badge"
                },
                showPrivateThreadBadge: {
                    label: "Show Private Thread Badge",
                    description: "Show Private Thread badge"
                },
                showStageBadge: {
                    label: "Show Stage Badge",
                    description: "Show Stage badge"
                },
                showAnnouncementBadge: {
                    label: "Show Announcement Badge",
                    description: "Show Announcement badge"
                },
                showForumBadge: {
                    label: "Show Forum Badge",
                    description: "Show Forum badge"
                },
                showMediaBadge: {
                    label: "Show Media Badge",
                    description: "Show Media badge"
                },
                showNSFWBadge: {
                    label: "Show NSFW Badge",
                    description: "Show NSFW badge"
                },
                showLockedBadge: {
                    label: "Show Locked Badge",
                    description: "Show Locked badge"
                },
                showRulesBadge: {
                    label: "Show Rules Badge",
                    description: "Show Rules badge"
                },
                showUnknownBadge: {
                    label: "Show Unknown Badge",
                    description: "Show Unknown badge"
                },
                textBadgeLabel: {
                    label: "Text Badge Label",
                    description: "Text badge label",
                    default: "Text"
                },
                voiceBadgeLabel: {
                    label: "Voice Badge Label",
                    description: "Voice badge label",
                    default: "Voice"
                },
                categoryBadgeLabel: {
                    label: "Category Badge Label",
                    description: "Category badge label",
                    default: "Category"
                },
                announcementBadgeLabel: {
                    label: "Announcement Thread Badge Label",
                    description: "Announcement Thread badge label",
                    default: "News"
                },
                announcementThreadBadgeLabel: {
                    label: "Announcement Thread Badge Label",
                    description: "Announcement Thread badge label",
                    default: "News Thread"
                },
                publicThreadBadgeLabel: {
                    label: "Public Thread Badge Label",
                    description: "Public Thread badge label",
                    default: "Thread"
                },
                privateThreadBadgeLabel: {
                    label: "Private Thread Badge Label",
                    description: "Private Thread badge label",
                    default: "Private Thread"
                },
                stageBadgeLabel: {
                    label: "Stage Badge Label",
                    description: "Stage badge label",
                    default: "Stage"
                },
                directoryBadgeLabel: {
                    label: "Directory Badge Label",
                    description: "Directory badge label",
                    default: "Directory"
                },
                forumBadgeLabel: {
                    label: "Forum Badge Label",
                    description: "Forum badge label",
                    default: "Forum"
                },
                mediaBadgeLabel: {
                    label: "Media Badge Label",
                    description: "Media badge label",
                    default: "Media"
                },
                nsfwBadgeLabel: {
                    label: "NSFW Badge Label",
                    description: "NSFW badge label",
                    default: "NSFW"
                },
                lockedBadgeLabel: {
                    label: "Locked Badge Label",
                    description: "Locked badge label",
                    default: "Locked"
                },
                rulesBadgeLabel: {
                    label: "Rules Badge Label",
                    description: "Rules badge label",
                    default: "Rules"
                },
                unknownBadgeLabel: {
                    label: "Unknown Badge Label",
                    description: "Unknown badge label",
                    default: "Unknown"
                },
                textBadgeColor: {
                    label: "Text Badge Color",
                    description: "Text badge color"
                },
                voiceBadgeColor: {
                    label: "Voice Badge Color",
                    description: "Voice badge color"
                },
                categoryBadgeColor: {
                    label: "Category Badge Color",
                    description: "Category badge color"
                },
                announcementBadgeColor: {
                    label: "Announcement Thread Badge Color",
                    description: "Announcement Thread badge color"
                },
                announcementThreadBadgeColor: {
                    label: "Announcement Thread Badge Color",
                    description: "Announcement Thread badge color"
                },
                publicThreadBadgeColor: {
                    label: "Public Thread Badge Color",
                    description: "Public Thread badge color"
                },
                privateThreadBadgeColor: {
                    label: "Private Thread Badge Color",
                    description: "Private Thread badge color"
                },
                stageBadgeColor: {
                    label: "Stage Badge Color",
                    description: "Stage badge color"
                },
                directoryBadgeColor: {
                    label: "Directory Badge Color",
                    description: "Directory badge color"
                },
                forumBadgeColor: {
                    label: "Forum Badge Color",
                    description: "Forum badge color"
                },
                mediaBadgeColor: {
                    label: "Media Badge Color",
                    description: "Media badge color"
                },
                nsfwBadgeColor: {
                    label: "NSFW Badge Color",
                    description: "NSFW badge color"
                },
                lockedBadgeColor: {
                    label: "Locked Badge Color",
                    description: "Locked badge color"
                },
                rulesBadgeColor: {
                    label: "Rules Badge Color",
                    description: "Rules badge color"
                },
                unknownBadgeColor: {
                    label: "Unknown Badge Color",
                    description: "Unknown badge color"
                }
            },
            badges: {
                text: "Text",
                voice: "Voice",
                category: "Category",
                announcement: "News",
                announcementThread: "News Thread",
                publicThread: "Thread",
                privateThread: "Private Thread",
                stage: "Stage",
                directory: "Directory",
                forum: "Forum",
                media: "Media",
                nsfw: "NSFW",
                locked: "Locked",
                rules: "Rules",
                unknown: "Unknown"
            },
            tooltip: {
                locked: "This channel is locked.",
                nsfw: "This channel is marked as NSFW."
            }
        },
        channelTabs: {
            name: "ChannelTabs",
            description: "Group your commonly visited channels in tabs, like a browser",
            open: "Open in New Tab",
            animation: {
                title: "Animation Controls",
                description: "Enable or disable specific animations for channel tabs. Each option can be toggled independently.",
                placeholder: "Select which animations to enable...",
                tabHover: "Tab Hover Effects (lift + scale)",
                tabSelection: "Selected Tab Lift Animation",
                tabDragDrop: "Tab Drag & Drop (ghost + reorder)",
                tabEnterExit: "Tab Enter/Exit Slides (creation + closing)",
                tabIconPop: "Icon Pop on Selection (icon scale-up)",
                closeRotation: "Close Button Rotation",
                plusPulse: "Plus Button Pulse",
                mentionGlow: "Mention Badge Glow",
                compactExpand: "Compact Mode Expansion",
                selectedBorder: "Selected Tab Blue Border",
                selectedBackground: "Selected Tab Background Color",
                tabShadows: "Tab Shadow Effects",
                tabRepositioning: "Tab Repositioning (smooth position changes)",
                resizeHandle: "Resize Handle Fade",
                questActivate: "Active Quest Gradient"
            },
            bookmark: {
                label: "Bookmark",
                unknown: "Unknown User",
                folder: "Folder",
                add: "Add to Bookmarks",
                edit: "Edit Bookmark",
                delete: "Delete Bookmark",
                remove: "Remove from Bookmarks",
                removeFolder: "Remove Bookmark from Folder",
                loading: "Loading bookmarks...",
                noBookmarks: "You have no bookmarks. You can add an open tab or hide this by right clicking it",
                quests: "Quests",
                messageRequests: "Message Requests",
                friends: "Friends",
                shop: "Shop",
                library: "Library",
                discovery: "Discovery",
                nitro: "Nitro",
                icymi: "ICYMI",
                activity: "Activity",
                specialPage: "Special Page"
            },
            button: {
                save: "Save",
                delete: "Delete",
                cancel: "Cancel"
            },
            context: {
                label: "ChannelTabs Context Menu",
                bookmark: "ChannelTabs Bookmark Context Menu",
                tab: "ChannelTabs Tab Context Menu",
                compact: "Compact",
                bookmarkBar: "Bookmark Bar",
                openAll: "Open All in Bookmarks",
                openNew: "Open in New Tab",
                close: {
                    tab: "Close Tab",
                    otherTabs: "Close Other Tabs",
                    tabsToRight: "Close Tabs to the Right",
                    tabsToLeft: "Close Tabs to the Left",
                    reopen: "Reopen Closed Tab",
                    allTabs: "Close All Tabs"
                }
            },
            error: {
                noLogin: "There's no logged in account?"
            },
            modal: {
                add: {
                    title: "Add Bookmark to Folder",
                    select: "Select a folder",
                    create: "Create one"
                },
                edit: {
                    title: "Edit Bookmark",
                    name: "Bookmark Name",
                    folder: "Folder Color"
                },
                delete: {
                    title: "Are you sure?",
                    description: "Deleting a bookmark folder will also delete all bookmarks within it."
                }
            },
            option: {
                onStartup: {
                    label: "On Startup",
                    description: "What to do with tabs on startup",
                    nothing: "Do nothing (open on the friends tab)",
                    remember: "Remember tabs from last session",
                    open: "Open on a specific set of tabs"
                },
                tabSet: {
                    label: "Tab Set"
                },
                noPomeloNames: {
                    label: "No Pomelo Names",
                    description: "Use display names instead of usernames for DM's"
                },
                showStatusIndicators: {
                    label: "Show Status Indicators",
                    description: "Show status indicators for DM's"
                },
                showBookmarkBar: {
                    label: "Show Bookmark Bar"
                },
                bookmarkNotificationDot: {
                    label: "Bookmark Notification Dot",
                    description: "Show notification dot for bookmarks"
                },
                widerTabsAndBookmarks: {
                    label: "Wider Tabs and Bookmarks",
                    description: "Extend the length of tabs and bookmarks for larger monitors"
                },
                tabWidthScale: {
                    label: "Tab Width Scale",
                    description: "Tab width scale (percentage) - adjustable by dragging tab edges"
                },
                renderAllTabs: {
                    label: "Render All Tabs",
                    description: "Keep all tabs cached in memory for faster switching (caches scroll position and state)"
                },
                switchToExistingTab: {
                    label: "Switch to Existing Tab",
                    description: "Switch to tab if it already exists for the channel you're navigating to"
                },
                createNewTabIfNotExists: {
                    label: "Create New Tab If Not Exists",
                    description: "Create a new tab if one doesn't exist for the channel you're navigating to"
                },
                enableRapidNavigation: {
                    label: "Enable Rapid Navigation",
                    description: "Enable rapid navigation behavior - quickly navigating between channels will replace the current tab instead of creating new ones"
                },
                rapidNavigationThreshold: {
                    label: "Rapid Navigation Threshold",
                    description: "Time window (in milliseconds) for rapid navigation. Within this time, new channels replace the current tab instead of creating new ones."
                },
                tabBarPosition: {
                    label: "Tab Bar Position",
                    description: "Position of the tab bar",
                    top: "Top",
                    bottom: "Bottom"
                },
                enableNumberKeySwitching: {
                    label: "Enable Number Key Switching",
                    description: "Enable number keys (1-9) to switch tabs"
                },
                numberKeySwitchCount: {
                    label: "Number Key Switch Count",
                    description: "Number of tabs accessible via number keys (1-9)"
                },
                enableCloseTabShortcut: {
                    label: "Enable Close Tab Shortcut",
                    description: "Enable close tab keyboard shortcut"
                },
                enableNewTabShortcut: {
                    label: "Enable New Tab Shortcut",
                    description: "Enable new tab keyboard shortcut"
                },
                enableTabCycleShortcut: {
                    label: "Enable Tab Cycle Shortcut",
                    description: "Enable tab cycling keyboard shortcut"
                },
                keybindsSection: {
                    label: "Keybinds",
                    description: "Click a button and press your desired key combination. Modifiers like CTRL, SHIFT, and ALT are supported.",
                    title: "Keyboard shortcuts",
                    reset: "Reset All to Default",
                    closeTab: {
                        label: "Close Tab",
                        description: "Keyboard the currently active tab"
                    },
                    newTab: {
                        label: "New Tab",
                        description: "Open a new tab with the current channel"
                    },
                    cycleTabsForward: {
                        label: "Cycle Tabs Forward",
                        description: "Switch to the next tab (wraps around to first)"
                    },
                    cycleTabsBackward: {
                        label: "Cycle Tabs Backward",
                        description: "Switch to the previous tab (wraps around to last)"
                    }
                },
                closeTabKeybind: {
                    label: "Close Tab Keybind",
                    description: "Keyboard shortcut to close the current tab"
                },
                newTabKeybind: {
                    label: "New Tab Keybind",
                    description: "Keyboard shortcut to open a new tab"
                },
                cycleTabForwardKeybind: {
                    label: "Cycle Tab Forward Keybind",
                    description: "Keyboard shortcut to cycle to the next tab"
                },
                cycleTabBackwardKeybind: {
                    label: "Cycle Tab Backward Keybind",
                    description: "Keyboard shortcut to cycle to the previous tab"
                },
                showTabNumbers: {
                    label: "Show Tab Numbers",
                    description: "Show numbered badges on tabs to indicate keyboard shortcuts"
                },
                tabNumberPosition: {
                    label: "Tab Number Position",
                    description: "Where to display the numbered badge on tabs",
                    left: "Left side (before icon)",
                    right: "Right side (after content)"
                },
                animations: {
                    label: "Animations"
                },
                animationHover: {
                    label: "Animation on Hover",
                    description: "Enable hover lift and scale effects"
                },
                animationSelection: {
                    label: "Animation on Selection",
                    description: "Enable selection animations (border glow, lift)"
                },
                animationDragDrop: {
                    label: "Animation on Drag and Drop",
                    description: "Enable drag and drop ghost effects"
                },
                animationEnterExit: {
                    label: "Animation on Enter/Exit",
                    description: "Enable tab creation/closing slide animations"
                },
                animationIconPop: {
                    label: "Animation on Icon Pop",
                    description: "Enable icon scale-up animation on selection"
                },
                animationCloseRotation: {
                    label: "Animation on Close Rotation",
                    description: "Enable rotation animation for close buttons"
                },
                animationPlusPulse: {
                    label: "Animation on Plus Button Pulse",
                    description: "Enable pulse animation for plus button"
                },
                animationMentionGlow: {
                    label: "Animation on Mention Glow",
                    description: "Enable pulsing red glow for mentions"
                },
                animationCompactExpand: {
                    label: "Animation on Compact/Expand",
                    description: "Enable smooth expansion for compact tabs"
                },
                animationSelectedBorder: {
                    label: "Animation on Selected Border",
                    description: "Enable border and glow styling for selected tabs"
                },
                animationSelectedBackground: {
                    label: "Animation on Selected Background",
                    description: "Enable background color change for selected tabs"
                },
                animationTabShadows: {
                    label: "Animation on Tab Shadows",
                    description: "Enable shadow effects on tabs"
                },
                animationTabPositioning: {
                    label: "Animation Tab Positioning",
                    description: "Enable smooth transitions when tabs move positions"
                },
                animationResizeHandle: {
                    label: "Animation Resize Handle",
                    description: "Enable fade animation for resize handle"
                },
                animationQuestsActive: {
                    label: "Animation Quests Active",
                    description: "Enable gradient animations on Quests tab when quests are actively running"
                },
                compactAutoExpandSelected: {
                    label: "Compact Auto-Expand Selected",
                    description: "Automatically expand compact tabs when selected to show the full channel name"
                },
                compactAutoExpandOnHover: {
                    label: "Compact Auto-Expand on Hover",
                    description: "Automatically expand compact tabs on hover to show the full channel name"
                },
                openInNewTabAutoSwitch: {
                    label: "Open in New Tab Auto-Switch",
                    description: "Automatically switch to new tabs opened from 'Open in New Tab' context menu"
                },
                bookmarksIndependentFromTabs: {
                    label: "Bookmarks Independent From Tabs",
                    description: "Bookmarks navigate independently without affecting the active tabs bar"
                },
                showResizeHandle: {
                    label: "Show Resize Handle",
                    description: "Show resize handle when hovering over tabs to adjust tab width"
                },
                openNewTabsInCompactMode: {
                    label: "Open New Tabs in Compact Mode",
                    description: "Open all newly created tabs in compact mode by default"
                },
                newTabButtonBehavior: {
                    label: "New Tab Button Behavior",
                    description: "New tab (+) button follows tabs instead of staying pinned to the right"
                },
                oneTabPerServer: {
                    label: "One Tab Per Server",
                    description: "Limit to one tab per server, so opening a new channel in that server will use the existing tab."
                },
                maxOpenTabs: {
                    label: "Max Open Tabs",
                    description: "Maximum number of open tabs (0 = unlimited)"
                }
            },
            tabs: {
                startup: "Startup Tabs",
                currently: "Set to currently open tabs"
            },
            toast: {
                notRestoring: "Not restoring tabs as KeepCurrentChannel is enabled",
                failed: {
                    restore: "Failed to restore tabs",
                    saved: "Failed to load saved tabs"
                }
            }
        },
        characterCounter: {
            name: "CharacterCounter",
            description: "Displays a character counter in the message box",
            option: {
                colorEffects: {
                    label: "Color Effects",
                    description: "Turn on or off color effects for getting close to the character limit"
                }
            }
        },
        cleanChannelGroups: {
            name: "CleanChannelGroups",
            description: "Hides all channels in collapsed categories, even if they have unread messages."
        },
        cleanChannelName: {
            name: "CleanChannelName",
            description: "Remove all emoji and decor shit from channel names"
        },
        clearURLs: {
            name: "ClearURLs",
            description: "Automatically removes tracking elements from URLs you send"
        },
        clientSideBlock: {
            name: "ClientSideBlock",
            description: "Allows you to locally hide almost all content from any user",
            replying: "Replying to blocked message",
            option: {
                hideVc: {
                    label: "Hide Voice Channels",
                    description: "Hide voice channels containing blocked users."
                },
                usersToBlock: {
                    label: "Users to Block",
                    description: "User IDs seperated by a comma and a space"
                },
                hideBlockedUsers: {
                    label: "Hide Blocked Users",
                    description: "Should blocked users should also be hidden everywhere"
                },
                hideBlockedMessages: {
                    label: "Hide Blocked Messages",
                    description: "Should messages from blocked users should be hidden fully (same as the old noblockedmessages plugin)"
                },
                hideEmptyRoles: {
                    label: "Hide Empty Roles",
                    description: "Should role headers be hidden if all of their members are blocked"
                },
                blockedReplyDisplay: {
                    label: "Blocked Reply Display",
                    description: "What should display instead of the message when someone replies to someone you have hidden",
                    displayText: "Display text saying a hidden message was replied to",
                    hideReply: "Literally nothing"
                },
                guildBlackList: {
                    label: "Guild Blacklist",
                    description: "Guild ids to disable functionality in"
                },
                guildWhiteList: {
                    label: "Guild Whitelist",
                    description: "Guild ids to enable functionality in"
                }
            }
        },
        clientTheme: {
            name: "ClientTheme",
            description: "Recreation of the old client theme experiment. Add a color to your Discord client theme",
            title: "Theme Color",
            add: "Add a color to your Discord client theme",
            option: {
                color: {
                    label: "Color"
                },
                resetColor: {
                    label: "Reset Color"
                }
            },
            error: {
                modal: {
                    title: "Your theme won't look good!",
                    contrast: "Selected color won't contrast well with text",
                    nitro: "Nitro themes aren't supported",
                    switch: "Switch to {{oppositeTheme}} mode",
                    disable: "Disable Nitro Theme",
                    reset: "Reset Theme Color"
                }
            }
        },
        clipsEnhancements: {
            name: "ClipsEnhancements",
            description: "Add more Clip FPS and duration options, plus RPC tagging!",
            minutes: "Minutes",
            option: {
                richPresenceTagging: {
                    label: "Rich Presence Tagging",
                    description: "When should clips be tagged with the current Rich Presence?",
                    always: "Always",
                    only: "Only when beginning or end of activity name matches",
                    never: "Never"
                },
                enableScreenshotKeybind: {
                    label: "Enable Screenshot Keybind",
                    description: "Enable the screenshot keybind feature"
                },
                enableVoiceOnlyClips: {
                    label: "Enable Voice-Only Clips",
                    description: "Enable voice-only clips (audio without video)"
                },
                enableAdvancedSignals: {
                    label: "Enable Advanced Signals",
                    description: "Enable advanced clip signals (auto-clip triggers)"
                },
                ignorePlatformRestriction: {
                    label: "Ignore Platform Restriction",
                    description: "Allow Platform Restricted Clipping (may cause save errors)"
                },
                clipsLink: {
                    label: "Clips Link",
                    link: "Change FPS and duration options in Clips settings!"
                }
            }
        },
        colorSighted: {
            name: "ColorSighted",
            description: "Removes the colorblind-friendly icons from statuses, just like 2015-2017 Discord"
        },
        commandPalette: {
            name: "CommandPalette",
            description: "Allows you to navigate the UI with a keyboard.",
            action: {
                command: {
                    label: "Run Command",
                    description: "Alias another palette command by ID. Use the picker if you’re unsure of the identifier."
                },
                settings: {
                    label: "Open Settings Page",
                    description: "Jump directly to a Discord settings page. Choose a page from the picker."
                },
                url: {
                    label: "Open URL",
                    description: "Open a link. Use https:// links for best compatibility."
                },
                macro: {
                    label: "Run Macro",
                    description: "Run a sequence of commands in order. Add steps via the picker."
                }
            },
            category: {
                auto: "Auto (use default placement)",
                default: {
                    label: "Quick Actions",
                    description: "Common Plexcord shortcuts"
                },
                plugins: {
                    label: "Plugins",
                    description: "Enable, disable, and configure Plexcord plugins",
                    enable: {
                        label: "Enable Plugins"
                    },
                    disable: {
                        label: "Disable Plugins"
                    },
                    settings: {
                        label: "Plugin Settings"
                    },
                    toolbox: {
                        label: "Plugin Actions"
                    },
                    chatbar: {
                        label: "Chat Bar Buttons"
                    },
                    changes: {
                        label: "Plugin Changes"
                    }
                },
                context: {
                    label: "Current Context",
                    description: "Actions for the selected channel and guild"
                },
                updates: {
                    label: "Updates",
                    description: "Stay up to date with Plexcord"
                },
                discordSettings: {
                    label: "Discord Settings",
                    description: "Jump to Discord configuration pages"
                },
                custom: {
                    label: "Custom Commands",
                    description: "User-defined command palette entries"
                },
                sessions: {
                    label: "Session Tools",
                    description: "Utilities for managing your Discord session"
                },
                guilds: {
                    label: "Guilds",
                    description: "Quickly navigate to your guilds"
                },
                friends: {
                    label: "Friends",
                    description: "Quickly navigate to your friends"
                },
                action: {
                    label: "Action",

                }
            },
            builtIn: {
                open: {
                    settings: {
                        plexcord: "Open Plexcord Settings",
                        plugin: "Open Plugin Settings"
                    }
                },
                reload: {
                    label: "Reload Discord",
                    description: "Reloads the current Discord window"
                }
            },
            command: {
                enable: "Enable {{pluginName}}",
                enabled: "Enabled {{pluginName}}",
                disable: "Disable {{pluginName}}",
                disabled: "Disabled {{pluginName}}",
                failed: "Command failed:",
                toggleFailed: "Failed to toggle {{pluginName}}.",
                pluginSettings: "{{pluginName}} Settings",
                untitled: "Untitled Command",
                new: "New Command",
                error: {
                    enter: "Enter a command ID or choose one below.",
                    noCommand: "No command matches this ID."
                },
                discord: {
                    account: "Open My Account",
                    privacy: "Open Data & Privacy",
                    notifications: "Open Notifications",
                    voice: "Open Voice & Video",
                    text: "Open Text & Images",
                    appearance: "Open Appearance",
                    accessibility: "Open Accessibility",
                    keybinds: "Open Keybinds",
                    advanced: "Open Advanced",
                },
                updates: {
                    check: {
                        label: "Check for Updates",
                        description: "Check for Plexcord updates",
                        one: "One update available",
                        multiple: "{{count}} updates available",
                        none: "No updates available",
                        failed: "Failed to check for updates."
                    },
                    changelog: {
                        label: "View Changelog",
                        description: "Opens the Plexcord changelog"
                    }
                },
                read: {
                    mark: {
                        label: "Mark {{channelLabel}} Read"
                    }
                },
                pin: {
                    open: {
                        label: "Open Pins for {{channelLabel}}"
                    },
                    toggle: {
                        label: "Toggle Pin on Last Command"
                    }
                },
                channel: {
                    mute: {
                        label: "Mute {{channelLabel}}",
                        oneHour: "Mute {{channelLabel}} for 1 hour",
                        untilTomorrow: "Mute {{channelLabel}} until tomorrow",
                    },
                    unmute: {
                        label: "Unmute {{channelLabel}}",
                    },
                    reopen: {
                        label: "Reopen Last Closed DM"
                    },
                    dm: {
                        open: {
                            label: "Open DM with {{userLabel}}"
                        }
                    }
                },
                guild: {
                    settings: {
                        label: "Open Settings for {{guildLabel}}"
                    },
                    navigate: {
                        label: "Navigate to {{guildLabel}}"
                    }
                },
                session: {
                    thirtyMinutesDnd: "Set Do Not Disturb for 30 minutes",
                    oneHourDnd: "Set Do Not Disturb for 1 hour",
                    cancelStatusReset: "Cancel Status Timer"
                },
                status: {
                    set: {
                        online: "Set Status: Online",
                        idle: "Set Status: Idle",
                        dnd: "Set Status: Do Not Disturb",
                        invisible: "Set Status: Invisible"
                    }
                },
                toggle: {
                    streamer: "Toggle Streamer Mode",
                    mute: "Toggle Self Mute",
                    deafen: "Toggle Self Deafen",
                },
                notification: {
                    clear: {
                        label: "Clear Desktop Notifications"
                    }
                },
                palette: {
                    settings: {
                        label: "Open Command Palette Settings",
                        description: "Configure the Command Palette plugin"
                    }
                },
                recent: {
                    label: "Show Recent Commands",
                    description: "Displays the last executed commands",
                    rerun: "Re-run Last Command"
                },
                plugin: {
                    reload: {
                        label: "Reload All Plugins",
                        description: "Attempts to hot reload every enabled plugin"
                    },
                    enable: {
                        label: "Enable All Plugins"
                    },
                    disable: {
                        label: "Disable All Non-required Plugins"
                    },
                    restart: {
                        label: "Restart Plexcord",
                        description: "Reloads the Discord client window"
                    }
                },
                quickCSS: {
                    label: "Toggle Quick CSS"
                },
                transparentity: {
                    label: "Toggle Window Transparency"
                },
                theme: {
                    open: {
                        label: "Open Client Theme Settings"
                    }
                }
            },
            modal: {
                searchPlaceholder: "Search commands",
                noCommand: "No commands found",
                add: {
                    title: "Add Command"
                },
                choose: {
                    title: "Choose Command"
                },
                command: {
                    palette: {
                        label: "Command Palette",
                        placeholder: "Type a command",
                        filtering: "Filtering by {{tags}}",
                        noCommand: "No commands found",
                        pin: "Pin command",
                        unpin: "Unpin command"
                    },
                    target: {
                        label: "Target Command ID",
                        placeholder: "Enter command ID",
                        choose: "Choose Command"
                    },
                    custom: {
                        label: "Custom Commands",
                        description: "1) Name the command · 2) Add optional description/keywords/tags/category · 3) Choose an action and fill its details (IDs should match existing palette commands for aliases and macros).",
                        auto: "Auto (default)",
                        expand: "Expand",
                        collapse: "Collapse",
                        collapsed: {
                            label: "Label",
                            description: "Disaplay Name",
                            advanced: {
                                hide: "Hide advanced options",
                                show: "Show advanced options"
                            },
                            subtitle: {
                                label: "Description",
                                placeholder: "Optional subtitle"
                            },
                            keywords: {
                                label: "Keywords",
                                placeholder: "Comma-separated keywords"
                            },
                            tags: {
                                label: "Tags",
                                placeholder: "Comma-separated tags"
                            },
                            suggestion: {
                                label: "Suggestion"
                            },
                            chooseCommand: {
                                label: "Choose where this command appears in the palette."
                            },
                            danger: {
                                label: "Show as dangerous"
                            }
                        },
                        remove: "Remove Command",
                        add: "Add Command"
                    }
                },
                settings: {
                    noSelected: "No page selected",
                    current: "Current Page",
                    choose: "Choose Page..."
                },
                url: {
                    url: "URL",
                    error: "Use http:// or https:// links.",
                    valid: "Enter a valid URL.",
                    open: {
                        external: "Open externally",
                    }
                },
                macro: {
                    sequence: {
                        label: "Command Sequence",
                        placeholder: "command-a, command-b"
                    },
                    addStep: "Add Step",
                    unknownId: "Unknown Command IDs"
                }
            },
            status: {
                online: "Online",
                idle: "Idle",
                dnd: "Do Not Disturb",
                invisible: "Invisible"
            },
            tag: {
                core: "Core",
                navigation: "Navigation",
                utility: "Utility",
                developer: "Developer",
                customization: "Customization",
                plugins: "Plugins",
                session: "Session",
                context: "Context",
                custom: "Custom",
                guilds: "Guilds",
                friends: "Friends",
                other: "Other"
            },
            toast: {
                chat: {
                    button: {
                        unableToFind: "Unable to find the '{{label}}' chat button.",
                        failedToTrigger: "Failed to trigger {{label}}.",
                        activated: "{{label}} activated."
                    }
                },
                channel: {
                    mute: {
                        unavailable: "Channel mute controls unavailable",
                        muted: "Muted channel.",
                        unmuted: "Unmuted channel.",
                        failed: "Failed to update channel mute state."
                    },
                    dm: {
                        no: "No DM closures recorded this session.",
                        reOpened: "Reopened last closed DM.",
                        noAvailable: "The DM is no longer available."
                    }
                },
                command: {
                    loop: "Command loop detected in macro execution.",
                    notFound: "Command {{commandId}} not found.",
                    unsupported: "Unsupported custom command action.",
                    failedToRun: "Failed to run {{label}}.",
                    notMetadata: "Command Palette plugin metadata unavailable."
                },
                guild: {
                    mute: {
                        unavailable: "Guild mute controls unavailable",
                        muted: "Muted guild.",
                        unmuted: "Unmuted guild.",
                        failed: "Failed to update guild mute state."
                    },
                    settings: {
                        unable: "Unable to open guild settings.",
                    }
                },
                panel: {
                    pin: {
                        unable: "Unable to open pins panel.",
                    }
                },
                status: {
                    reset: {
                        canceled: "Canceled scheduled status reset.",
                        unableToChange: "Unable to change status right now.",
                        reverted: "Status reverted to {{status}}.",
                        dnd: "Do Not Disturb for {{duration}} minutes."
                    },
                    change: {
                        unableToChange: "Unable to change status right now.",
                        changed: "Status changed to {{status}}."
                    }
                },
                read: {
                    marked: "Marked {{channelLabel}} as read.",
                    failed: "Failed to mark channel as read."
                },
                route: {
                    unable: "Unable to open {{destination}}.",
                },
                notification: {
                    cleared: "Cleared all notifications.",
                    failed: "Failed to clear notifications.",
                    notSupported: "Notification clearing not supported."
                },
                streamerMode: {
                    enabled: "Streamer Mode enabled.",
                    disabled: "Streamer Mode disabled.",
                },
                voice: {
                    micToggle: {
                        muted: "Microphone muted.",
                        unmuted: "Microphone unmuted."
                    },
                    deafenToggle: {
                        deafened: "You are now deafened.",
                        undeafened: "You are no longer deafened."
                    }
                },
                quickCSS: {
                    enabled: "Quick CSS enabled.",
                    disabled: "Quick CSS disabled."
                },
                transparentity: {
                    enabled: "Window Transparency enabled.",
                    disabled: "Window Transparency disabled."
                },
                plugin: {
                    disabled: {
                        label: "{{pluginName}} is disabled.",
                        disable: "{{pluginName}} is disabled. Enable the plugin to use this action."
                    },
                    required: {
                        label: "{{pluginName}} requires a restart to reload."
                    },
                    stop: {
                        failed: "Failed to stop {{pluginName}}."
                    },
                    restart: {
                        failed: "Failed to restart {{pluginName}}."
                    },
                    reload: {
                        label: "Reloaded {{pluginName}}.",
                        noPlugin: "No plugins were reloaded.",
                        reloaded: "Reloaded {{count}} plugin{{s}}."
                    },
                    toggle: {
                        enabled: "Enabled {{changed}} plugin{{s}}.",
                        disabled: "Disabled {{changed}} plugin{{s}}.",
                        noChanged: "No plugins changed state."
                    },
                    run: {
                        failed: {
                            label: "Failed to run {{pluginName}}: {{actionLabel}}."
                        }
                    }
                }
            },
            display: {
                channel: {
                    current: "Current Channel",
                    group: "Group DM",
                    direct: "Direct Message"
                },
                guild: {
                    current: "Current Guild",
                }
            },
            option: {
                hotkey: {
                    label: "Hotkey",
                    description: "Hotkey used to open the command palette",
                    recording: "Press any key...",
                    reset: "Reset"
                },
                visualStyle: {
                    label: "Visual Style",
                    description: "Palette appearance",
                    classic: "Classic",
                    polished: "Polished"
                },
                showTags: {
                    label: "Show Tags",
                    description: "Display tag chips for commands"
                },
                enableTagFilter: {
                    label: "Enable Tag Filter",
                    description: "Show the tag filter bar"
                },
                customCommands: {
                    label: "Custom Commands",
                    description: "Manage custom command palette entries"
                }
            },
            template: {
                alias: {
                    label: "Alias Command",
                    description: "Mirror an existing command"
                },
                settings: {
                    label: "Settings",
                    description: "Open Discord Settings"
                },
                url: {
                    label: "Link",
                    description: "Open an external URL"
                },
                macro: {
                    label: "Macro",
                    description: "Run a sequence of commands"
                }
            }
        },
        consoleJanitor: {
            name: "ConsoleJanitor",
            description: "Disables annoying console messages/errors",
            option: {
                disableLoggers: {
                    label: "Disable Loggers",
                    description: "Disables Discords loggers"
                },
                disableSpotifyLogger: {
                    label: "Disable Spotify Logger",
                    description: "Disable the Spotify logger, which leaks account information and access token"
                },
                whitelistedLoggers: {
                    label: "Whitelisted Loggers",
                    description: "Semicolon (;) separated list of loggers to allow even if others are hidden"
                },
                allowLevel: {
                    label: "Allow Level",
                    description: "Always allow loggers of these types",
                    filter: "Filter List"
                }
            }
        },
        consoleShortcuts: {
            name: "Console Shortcuts",
            description: "Adds shorter Aliases for many things on the window. Run `shortcutList` for a list."
        },
        contentWarning: {
            name: "ContentWarning",
            description: "Allows you to specify certain trigger words that will be blurred by default. Clicking on the blurred content will reveal it.",
            option: {
                flagged: {
                    label: "Flagged",
                    flagged: "Flagged Words",
                    placeholder: "Word"
                },
                onClick: {
                    label: "On Click",
                    description: "Only show trigger content on click instead of hover"
                }
            }
        },
        copyEmojiMarkdown: {
            name: "CopyEmojiMarkdown",
            description: "Allows you to copy emojis as formatted string (<a:blob_pwease:1402403381900742737>)",
            option: {
                copyUnicode: {
                    label: "Copy Unicode",
                    description: "Copy the raw unicode character instead of :name: for default emojis (👽)"
                }
            },
            context: {
                copy: "Copy Emoji Markdown"
            },
            toast: {
                success: "Success! Copied emoji markdown."
            }
        },
        copyFileContents: {
            name: "CopyFileContents",
            description: "Adds a button to text file attachments to copy their contents",
            copied: "Copied!",
            large: "File too large to copy.",
            copyFileContents: "Copy File Contents"
        },
        copyProfileColors: {
            name: "CopyProfileColors",
            description: "A plugin to copy people's profile gradient colors to clipboard.",
            copy: "Copy Profile Colors",
            toast: {
                noColor: "No profile colors found!",
                copied: "Profile colors copied to clipboard!",
                error: "Error copying profile colors!"
            }
        },
        copyStatusUrls: {
            name: "CopyStatusUrls",
            description: "Copy the users status url when you right-click it",
            toast: {
                copied: "Copied URL",
                error: "Error copying URL, check console for more info"
            }
        },
        copyStickerLinks: {
            name: "CopyStickerLinks",
            description: "Adds the ability to copy & open Sticker links",
            context: {
                copy: "Copy Link",
                open: "Open Link"
            },
            toast: {
                success: "Link copied!"
            }
        },
        copyUserMention: {
            name: "CopyUserMention",
            description: "Adds a button to copy user's mention on the user context menu, works best with ValidUser.",
            context: {
                copy: "Copy User Mention"
            }
        },
        copyUserURLs: {
            name: "CopyUserURLs",
            description: "Adds a 'Copy User URL' option to the user context menu.",
            context: {
                copy: "Copy User URL"
            }
        },
        crashHandler: {
            name: "CrashHandler",
            description: "Utility plugin for handling and possibly recovering from crashes without a restart",
            option: {
                attemptToPreventCrashes: {
                    label: "Attempt to Prevent Crashes",
                    description: "Whether to attempt to prevent Discord crashes."
                },
                attemptToNavigateToHome: {
                    label: "Attempt to Navigate to Home",
                    description: "Whether to attempt to navigate to the home tab on crash recovery."
                }
            },
            toast: {
                crashed: {
                    title: "Discord has crashed!",
                    body: "Awn :( Discord has crashed two times rapidly, not attempting to recover. Click here to join our support server!",
                    update: "Uh oh, Discord has just crashed... but good news, there is a Plexcord update available that might fix this issue! Would you like to update now?",
                    recover: "Attempting to recover... Click here to join our support server!",
                    invalid: "Invalid or expired invite link."
                }
            }
        },
        ctrlEnterSend: {
            name: "CtrlEnterSend",
            description: "Use Ctrl+Enter to send messages (customizable)",
            option: {
                submitRule: {
                    label: "Submit Rule",
                    description: "The way to send a message",
                    ctrlEnter: "Ctrl+Enter (Enter or Shift+Enter for new line) (cmd+enter on macOS)",
                    shiftEnter: "Shift+Enter (Enter for new line)",
                    enter: "Enter (Shift+Enter for new line; Discord default)"
                },
                sendMessageInTheMiddleOfACodeBlock: {
                    label: "Send Message In The Middle Of A Code Block",
                    description: "Whether to send a message in the middle of a code block"
                }
            }
        },
        cursorBuddy: {
            name: "CursorBuddy",
            description: "Adds a sprite that follows your cursor.",
            modal: {
                furColor: "Fur Color",
                outlineColor: "Outline Color"
            },
            option: {
                buddy: {
                    label: "Buddy",
                    description: "Pick a cursor buddy",
                    oneko: "Oneko",
                    fathorse: "Fatass Horse"
                },
                speed: {
                    label: "Speed",
                    description: "Speed of your buddy",
                    invalid: "Speed must be bigger than 0"
                },
                fps: {
                    label: "Framerate",
                    description: "Framerate of your buddy",
                    invalid: "Framerate must be bigger than 0"
                },
                onekoSection: {
                    label: "Oneko"
                },
                furColor: {
                    label: "Fur Color",
                    description: "Fur hex color for Oneko"
                },
                outlineColor: {
                    label: "Outline Color",
                    description: "Outline hex color for Oneko"
                },
                fathorseSection: {
                    label: "Fatass Horse"
                },
                size: {
                    label: "Size",
                    description: "Size of the fatass horse",
                    invalid: "Size must be bigger than 0"
                },
                fade: {
                    label: "Fade",
                    description: "If the horse should fade when the cursor is near"
                },
                freeroam: {
                    label: "Freeroam",
                    description: "If the horse should roam freely when idle"
                },
                shake: {
                    label: "Shake",
                    description: "If the horse should shake the window when it's walking"
                }
            }
        },
        customFolderIcons: {
            name: "CustomFolderIcons",
            description: "Customize folder icons with any png",
            option: {
                solidIcon: {
                    label: "Solid Icon",
                    description: "Use a solid background on the background of the image"
                },
                folderIcons: {
                    label: "Folder Icons",
                    description: "folder icon settings"
                }
            },
            modal: {
                change: "Change the size of the folder icon",
                save: "Save",
                unset: "Unset",
                set: "Set a New Icon",
                hover: "You might have to hover the folder after setting in order for it to refresh."
            }
        },
        customIdle: {
            name: "CustomIdle",
            description: "Allows you to set the time before Discord goes idle (or disable auto-idle)",
            backOnline: "Welcome back! Click the button to go online. Click the X to stay idle until reload.",
            exit: "Exit Idle",
            option: {
                idleTimeout: {
                    label: "Idle Timeout",
                    description: "Minutes before Discord goes idle (0 to disable auto-idle)"
                },
                remainInIdle: {
                    label: "Remain In Idle",
                    description: "When you come back to Discord, remain idle until you confirm you want to go online"
                }
            }
        },
        customRPC: {
            name: "CustomRPC",
            description: "Add a fully customisable Rich Presence (Game status) to your Discord profile",
            goTo: "Go to the {{portal}} to create an application and get the application ID.",
            upload: "Upload images in the Rich Presence tab to get the image keys.",
            image: "If you want to use an image link, download your image and reupload the image to {{imgur}} and get the image link by right-clicking the image and selecting 'Copy image address'.",
            button: "You can't see your own buttons on your profile, but everyone else can see it fine.",
            font: "Some weird unicode text ('fonts' 𝖑𝖎𝖐𝖊 𝖙𝖍𝖎𝖘) may cause the rich presence to not show up, try using normal letters instead.",
            placeholder: "Enter a value",
            select: "Select an option",
            error: {
                appIdInvalid: "App ID must be a valid number.",
                notice: "Notice",
                sharing: "Activity Sharing isn't enabled, people won't be able to see your custom rich presence!",
                enable: "Enable",
                validStream: "Streaming link must be a valid URL.",
                mustBeURL: "Must be a valid URL.",
                streamCharacters: "Streaming link must be not longer than 512 characters.",
                dontUse: "Don't use a Discord link. Use an Imgur image link instead.",
                imgur: "Imgur link must be a direct link to the image (e.g. https://i.imgur.com/...). Right click the image and click 'Copy image address'",
                tenor: "Tenor link must be a direct link to the image (e.g. https://media.tenor.com/...). Right click the GIF and click 'Copy image address'",
                required: "This field is required.",
                tooLong: "Must be not longer than {{maxLength}} characters.",
                mustBeNumber: "Must be a number.",
                mustBePositive: "Must be a positive number.",
                startTimeInvalid: "Start timestamp must be greater than 0.",
                endTimeInvalid: "End timestamp must be greater than 0."
            },
            option: {
                appId: {
                    label: "App ID",
                    description: "Application ID (required)"
                },
                appName: {
                    label: "App Name",
                    description: "Application name (required)"
                },
                details: {
                    label: "Details",
                    description: "Details (line 1)"
                },
                detailsURL: {
                    label: "Details URL",
                    description: "Details clickable URL"
                },
                state: {
                    label: "State",
                    description: "State (line 2)"
                },
                stateURL: {
                    label: "State URL",
                    description: "State clickable URL"
                },
                partySize: {
                    label: "Party Size",
                    description: "Current party size (must be used with Max Party Size)"
                },
                partyMax: {
                    label: "Max Party Size",
                    description: "Max party size (must be used with Current Party Size)"
                },
                type: {
                    label: "Activity type",
                    description: "Activity type",
                    playing: "Playing",
                    streaming: "Streaming",
                    listening: "Listening",
                    watching: "Watching",
                    competing: "Competing"
                },
                streamLink: {
                    label: "Stream Link",
                    description: "Twitch.tv or Youtube.com link (only for Streaming activity type)"
                },
                timestampMode: {
                    label: "Timestamp Mode",
                    description: "What the timestamp should show",
                    none: "None",
                    sinceDiscordOpen: "Since discord open",
                    sameAsCurrentTime: "Same as your current time (not reset after 24h)",
                    custom: "Custom Time"
                },
                startTime: {
                    label: "Start Time (in milliseconds)",
                    description: "Start timestamp in milliseconds (only for custom timestamp mode)"
                },
                endTime: {
                    label: "End Time (in milliseconds)",
                    description: "End timestamp in milliseconds (only for custom timestamp mode)"
                },
                imageBig: {
                    label: "Large Image Key",
                    description: "Large image key (must be uploaded in the Rich Presence tab)"
                },
                imageBigTooltip: {
                    label: "Image Big Tooltip",
                    description: "Big image tooltip"
                },
                imageBigURL: {
                    label: "Large Image URL",
                    description: "Large Image Clickable URL"
                },
                imageSmall: {
                    label: "Small Image Key",
                    description: "Small image key (must be uploaded in the Rich Presence tab)"
                },
                imageSmallTooltip: {
                    label: "Image Small Tooltip",
                    description: "Small image tooltip"
                },
                imageSmallURL: {
                    label: "Small Image URL",
                    description: "Small Image Clickable URL"
                },
                buttonOneText: {
                    label: "Button 1 Text",
                    description: "Button 1 text"
                },
                buttonOneURL: {
                    label: "Button 1 URL",
                    description: "Button 1 URL"
                },
                buttonTwoText: {
                    label: "Button 2 Text",
                    description: "Button 2 text"
                },
                buttonTwoURL: {
                    label: "Button 2 URL",
                    description: "Button 2 URL"
                }
            }
        },
        customSounds: {
            name: "CustomSounds",
            description: "Customize Discord's sounds.",
            search: "Search sounds",
            placeholder: "Search by name or ID",
            import: "Import",
            export: "Export",
            reset: "Reset All",
            debug: "Debug",
            toast: {
                error: "Error loading custom sound file",
                exported: "Exported {{count}} settings (audio files not included)",
                imported: "Settings imported successfully",
                importError: "Error importing settings. Check console for details.",
                reset: "All overrides reset successfully!",
                overrideDescription: "Override for {{soundName}}",
                previewSound: "Error playing sound.",
                playing: "Error playing custom sound. File may be corrupted.",
                invalidFile: "No custom sound file available for preview",
                uploaded: "File uploaded successfully: {{fileName}}",
                uploadedError: "Error uploading file: {{error}}",
                invalidExtension: "Invalid file type. Please upload an audio file.",
                uploading: "Uploading file...",
                deleted: "File deleted successfully",
                deleteError: "Error deleting file.",
                loadingError: "Error loading custom sound file"
            },
            button: {
                preview: "Preview",
                stop: "Stop",
                volume: "Volume",
                soundSource: "Sound Source",
                customFile: "Custom File",
                uploadNew: "Upload New",
                delete: "Delete Selected File"
            },
            option: {
                default: "Default",
                custom: "Custom",
                select: "Select a file..."
            },
            type: {
                activityEnd: "Activity End",
                activityLaunch: "Activity Launch",
                activityUserJoin: "Activity User Join",
                activityUserLeft: "Activity User Left",
                asmrMessage: "ASMR Message",
                bitMessage: "Bit Message",
                bopMessage: "Bop Message",
                callCalling: "Call Calling",
                callRinging: "Call Ringing",
                clipError: "Clip Error",
                clipSave: "Clip Save",
                ddrDown: "DDR Down",
                ddrLeft: "DDR Left",
                ddrRight: "DDR Right",
                ddrUp: "DDR Up",
                deafen: "Deafen",
                discodo: "Discodo",
                disconnect: "Disconnect",
                duckyMessage: "Ducky Message",
                hangStatusSelect: "Hang Status Select",
                highfiveClap: "Highfive Clap",
                highfiveWhistle: "Highfive Whistle",
                humanMan: "Human Man",
                lofiMessage: "LoFi Message",
                mention1: "Mention 1 (@role)",
                mention2: "Mention 2 (@everyone)",
                mention3: "Mention 3 (@here)",
                message1: "Message 1 (Generic)",
                message2: "Message 2 (Reply in Server)",
                message3: "Message 3 (DMs and Group DMs)",
                mute: "Mute",
                overlayUnlock: "Overlay Unlock",
                poggermodeAchievement: "Poggermode Achievement",
                poggermodeApplause: "Poggermode Applause",
                poggermodeEnabled: "Poggermode Enabled",
                poggermodeMessage: "Poggermode Message",
                pttStart: "PTT Start",
                pttStop: "PTT Stop",
                reconnect: "Reconnect",
                robotMan: "Robot Man",
                stageWaiting: "Stage Waiting",
                streamEnded: "Stream Ended",
                streamStarted: "Stream Started",
                streamUserJoined: "Stream User Joined",
                streamUserLeft: "Stream User Left",
                success: "Success",
                undeafen: "Undeafen",
                unmute: "Unmute",
                userJoin: "User Join",
                userLeave: "User Leave",
                userMoved: "User Moved",
                vibingWumpus: "Vibing Wumpus"
            }
        },
        customTimestamps: {
            name: "CustomTimestamps",
            description: "Custom timestamps on messages and tooltips",
            demo: {
                cozy: "Click me to switch to Cozy format",
                compact: "Click me to switch to Compact format",
                lastWeek: "This message was sent in the last week",
                hover: "Hover over timestamps to see tooltip formats",
                edit: "Edit the formats below to see them live update here"
            },
            modal: {
                title: "How to use:",
                moment: "Moment.js formatting documentation",
                hint: "Additionally you can use these in your inputs:",
                calendar: "enables dynamic date formatting such as",
                today: "Today",
                yesterday: "Yesterday",
                relative: "gives you times such as",
                relativeTime: "4 hours ago",
                preview: "Preview",
                format: "Calendar formats",
                howTo: "How to format the [calendar] value if used in the above timestamps."
            },
            option: {
                formats: {
                    label: "Formats",
                    description: "Customize the timestamp formats",
                },
                cozyFormat: {
                    label: "Cozy mode",
                    description: "Time format to use in messages on cozy mode"
                },
                compactFormat: {
                    label: "Compact mode",
                    description: "Time format on compact mode and hovering messages"
                },
                tooltipFormat: {
                    label: "Tooltip",
                    description: "Time format to use on tooltips"
                },
                ariaLabelFormat: {
                    label: "Aria label",
                    description: "Time format to use on aria labels"
                },
                sameDayFormat: {
                    label: "Same day",
                    description: "[calendar] format for today",
                    default: "[Today at] HH:mm:ss"
                },
                lastDayFormat: {
                    label: "Last day",
                    description: "[calendar] format for yesterday",
                    default: "[Yesterday at] HH:mm:ss"
                },
                lastWeekFormat: {
                    label: "Last week",
                    description: "[calendar] format for last week"
                },
                sameElseFormat: {
                    label: "Older else",
                    description: "[calendar] format for older dates"
                }
            }
        },
        customUserColors: {
            name: "CustomUserColors",
            description: "Lets you add a custom color to any user, anywhere! Highly recommend to use with typingTweaks and roleColorEverywhere",
            option: {
                dmList: {
                    label: "DM List",
                    description: "Users with custom colors defined will have their name in the dm list colored"
                },
                colorInServers: {
                    label: "Color In Servers",
                    description: "If name colors should be changed within servers"
                }
            },
            context: {
                setColor: "Set Color"
            },
            modal: {
                custom: "Custom Color",
                pick: "Pick a color",
                delete: "Delete Entry",
                save: "Save"
            }
        },
        dearrow: {
            name: "Dearrow",
            description: "Makes YouTube embed titles and thumbnails less sensationalist, powered by Dearrow",
            option: {
                hideButton: {
                    label: "Hide Button",
                    description: "Hides the Dearrow button from YouTube embeds"
                },
                replaceElements: {
                    label: "Replace Elements",
                    description: "Choose which elements of the embed will be replaced",
                    everything: "Everything (Titles & Thumbnails)",
                    title: "Titles",
                    thumbnail: "Thumbnails"
                },
                dearrowByDefault: {
                    label: "Dearrow By Default",
                    description: "Dearrow videos automatically"
                }
            },
            tooltip: {
                dearrowed: "This embed has been dearrowed, click to restore",
                dearrow: "Click to dearrow"
            }
        },
        decodeBase64: {
            name: "DecodeBase64",
            description: "Decode base64 content of any message and copy the decoded content.",
            right: {
                decode: "Copy Decoded (Left Click) / Decode Base64 (Right Click)",
                copy: "Decode Base64 (Left Click) / Copy Decoded (Right Click)"
            },
            option: {
                clickMethod: {
                    label: "Click Method",
                    description: "Change the button to decode base64 content of any message.",
                    left: "Left Click to decode the base64 content.",
                    right: "Right click to decode the base64 content."
                }
            },
            modal: {
                title: "Decoded Base64 Content",
                content: "Decoded Content",
                copy: "Copy Decoded Content {{index}}",
                copied: "Decoded content copied to clipboard!"
            }
        },
        decor: {
            name: "Decor",
            description: "Create and use your own custom avatar decorations, or pick your favorite from the presets.",
            presetPart: "Part of the {{name}} Preset",
            createdBy: "Created by {{author}}",
            copy: "Copy Preset ID",
            file: "File",
            your: {
                title: "Your Decorations",
                subtitle: "You can delete your own decorations by right clicking on them."
            },
            option: {
                changeDecoration: {
                    label: "Change Decoration",
                    description: "Enable Decor and restart your client to change your avatar decoration.",
                    also: "You can also access Decor decorations from the {{profiles}} page.",
                    profiles: "Profiles"
                },
                baseUrl: {
                    label: "Base URL",
                    description: "Decor api url"
                },
                agreedToGuidelines: {
                    label: "Agreed To Guidelines",
                    description: "Agreed to guidelines"
                }
            },
            context: {
                decorationOptions: "Decoration Options",
                copyHash: "Copy Decoration Hash",
                deleteDecoration: "Delete Decoration"
            },
            alert: {
                delete: {
                    title: "Delete Decoration",
                    body: "Are you sure you want to delete {{decoration}}?",
                    confirm: "Delete",
                    cancel: "Cancel"
                },
                logout: {
                    title: "Log out",
                    body: "Are you sure you want to log out of Decor?",
                    confirm: "Log Out",
                    cancel: "Cancel"
                }
            },
            button: {
                change: "Change Decoration",
                remove: "Remove Decoration",
                apply: "Apply",
                cancel: "Cancel",
                browse: "Browse",
                submit: "Submit for Review",
                continue: "Continue",
                back: "Go Back"
            },
            tooltip: {
                pendingReview: "You already have a decoration pending review",
                pending: "Pending Review"
            },
            join: {
                tooltip: "Join Decor's Discord Server for notifications on your decoration's review, and when new presets are released",
                button: "Discord Server"
            },
            create: {
                title: "Create Decoration",
                notViolate: "Make sure your decoration does not violate {{guidelines}} before submitting it.",
                guidelines: "the guidelines",
                file: "File should be APNG or PNG.",
                fileHolder: "Choose a file",
                name: "This name will be used when referring to this decoration.",
                nameHolder: "Companion Cube",
                nameTitle: "Name"
            },
            help: {
                update: "To receive updates on your decoration's review, join {{server}} and allow direct messages.",
                server: "Decor's Discord Server"
            },
            guidelines: {
                hold: "Hold on",
                suspended: "By submitting a decoration, you agree to {{guidelines}}. Not reading these guidelines may get your account suspended from creating more decorations in the future.",
                guidelines: "the guidelines"
            }
        },
        demonstration: {
            name: "Demonstration",
            description: "Plugin for taking theme screenshots - censors identifying images and text.",
            toolbox: {
                toggle: "Toggle Demonstration"
            },
            keycode: "To change your keycode, check out {{keycode}}!",
            this: "this tool",
            okay: "Okay!",
            option: {
                keyBind: {
                    label: "Key Bind",
                    description: "The key to toggle the theme when pressed"
                },
                soundVolume: {
                    label: "Sound Volume",
                    description: "How loud the toggle sound is (0 to disable)"
                },
                showConfirmationModal: {
                    label: "Show Confirmation Modal",
                    description: "Show modal to remind shortcut"
                }
            },
            switch: {
                note: "You can re-enable this setting later",
                disable: "Disable modal?"
            },
            shortcut: "This will censor all text! To disable this, remember the shortcut:"
        },
        devCompanion: {
            name: "DevCompanion",
            description: "Dev Companion Plugin. Please report anything not working or being weird (most likely its a bug) to MutanPlex, either ping or dm, thanks!",
            reconnect: "Reconnect",
            option: {
                notifyOnAutoConnect: {
                    label: "Notify on Auto Connect",
                    description: "Whether to notify when Dev Companion has automatically connected."
                },
                usePatchedModule: {
                    label: "Use Patched Module",
                    description: "On extract requests, reply with the current patched module (if it is patched) instead of the original."
                },
                reloadAfterToggle: {
                    label: "Reload After Toggle",
                    description: "Reload after a disable/enable plugin command is recived."
                }
            },
            toast: {
                title: "Dev Companion Connected",
                connected: "Connected to WebSocket",
                disconnected: "Dev Companion Disconnected",
                error: "Dev Companion Error",
                reload: "Reload Needed",
                failed: "Failed to start dependencies: {{failures}}",
                close: "Close",
                stopping: "Error while stopping plugin {{plugin}}",
                starting: "Error while starting plugin {{plugin}}",
                noMessage: "No Error Message",
                noReason: "No Reason Provided"
            }
        },
        disableCallIdle: {
            name: "DisableCallIdle",
            description: "Disables automatically getting kicked from a DM voice call after 3 minutes and being moved to an AFK voice channel."
        },
        disableCameras: {
            name: "DisableCameras",
            description: "Disables cameras in a call by default"
        },
        disCleaner: {
            name: "DisCleaner",
            description: "Hides various features related to nitro and the store",
            option: {
                dms: {
                    label: "DMs",
                    description: "Remove shops above DMs list"
                },
                quests: {
                    label: "Quests",
                    description: "Remove quests above DMs list",
                },
                serverBoost: {
                    label: "Server Boost",
                    description: "Remove server boost info above channel list"
                },
                billing: {
                    label: "Billing",
                    description: "Remove billing settings"
                },
                gift: {
                    label: "Gift",
                    description: "Remove gift button"
                },
                emojiList: {
                    label: "Emoji List",
                    description: "Remove unavailable categories from the emoji picker"
                }
            }
        },
        discordDevBanner: {
            name: "DiscordDevBanner",
            description: "Enables the Discord developer banner, in which displays the build-ID",
            about: "The format for the Discord Dev Banner. You can use the following variables:",
            preview: "Preview:",
            empty: "Format cannot be empty.",
            variables: {
                discord: {
                    title: "Discord Variables",
                    icon: "Discord icon",
                    banner: "Dev banner icon",
                    channel: "Discord build channel (e.g. Stable)",
                    build: "Discord build number (e.g. 123456)",
                    hash: "Discord build hash (e.g. 123456)"
                },
                plexcord: {
                    title: "Plexcord Variables",
                    icon: "Plexcord icon",
                    name: "Name of Plexcord",
                    version: "Version of Plexcord (e.g. 1.0.0)",
                    hash: "Plexcord build hash (e.g. 123456)",
                    platform: "Platform Plexcord is running on (e.g. Dev Build)"
                },
                plextron: {
                    title: "Plextron Specific Variables",
                    hashShort: "Plextron build hash (e.g. 123456789)",
                    platformType: "Platform Plextron is running on (e.g. Dev Build)"
                },
                client: {
                    title: "Client Variables",
                    icon: "Desktop icon",
                    name: "The name of the client (e.g. Discord Canary)",
                    version: "The version of the client (e.g. 1.0.0)",
                },
                electron: {
                    title: "Electron Variables",
                    icon: "Electron icon",
                    version: "Electron version (e.g. 25.0.0)"
                },
                chromium: {
                    title: "Chromium Variables",
                    icon: "Chromium icon",
                    version: "Chromium engine version (e.g. 125.0.0.0)"
                },
                misc: {
                    title: "Miscellaneous Variables",
                    newline: "Newline character"
                }
            }
        },
        dontFilterMe: {
            name: "DontFilterMe",
            description: "Warns you if your message contains a term in the automod preset list",
            alert: {
                title: "Hold on!",
                content: "Your message contains a term on the automod preset list. (Term '{{trigger}}')",
                content2: "There is a high chance your message will be blocked and potentially moderated by a server moderator.",
                confirm: "Send Anyway",
                cancel: "Cancel"
            }
        },
        dontRoundMyTimestamps: {
            name: "DontRoundMyTimestamps",
            description: "Always rounds relative timestamps down, so 7.6y becomes 7y instead of 8y"
        },
        dragFavoriteEmotes: {
            name: "DragFavoriteEmotes",
            description: "Adds drag and drop functionality to favorite emotes"
        },
        dragify: {
            name: "Dragify",
            description: "Drop users, channels, or servers into chat to insert mentions or invites.",
            option: {
                userOutput: {
                    label: "User Output",
                    description: "User drop output.",
                    mention: "Mention",
                    id: "User ID"
                },
                channelOutput: {
                    label: "Channel Output",
                    description: "Channel drop output.",
                    mention: "#channel Mention",
                    link: "Channel Link",
                },
                inviteExpireAfter: {
                    label: "Invite Expire After",
                    description: "Invite expiration",
                    never: "Never",
                    thirtyMinutes: "30 Minutes",
                    oneHour: "1 Hour",
                    sixHours: "6 Hours",
                    twelveHours: "12 Hours",
                    oneDay: "1 Day",
                    sevenDays: "7 Days"
                },
                inviteMaxUses: {
                    label: "Invite Max Uses",
                    description: "Max uses for invite",
                    noLimit: "No Limit",
                    one: "1 Use",
                    five: "5 Uses",
                    ten: "10 Uses",
                    twentyFive: "25 Uses",
                    fifty: "50 Uses",
                    hundred: "100 Uses"
                },
                inviteTemporaryMembership: {
                    label: "Invite Temporary Membership",
                    description: "Grant temporary membership.",
                },
                reuseExistingInvites: {
                    label: "Reuse Existing Invite",
                    description: "Reuse existing invite instead of creating a new one."
                },
                allowChatBodyDrop: {
                    label: "Allow Chat Body Drop",
                    description: "Allow dropping into the main chat body to insert text."
                }
            },
            toast: {
                failed: {
                    drop: "Dragify failed to handle drop.",
                },
                invite: {
                    created: "Invite created.",
                    unable: "Unable to create invite.",
                    noChannel: "No channel available for invites.",
                }
            },
            ghost: {
                user: "User",
                server: "Server",
                dm: "Direct Messages",
                badge: {
                    channel: "channel",
                    thread: "thread",
                    voice: "voice",
                    forum: "forum",
                    media: "media",
                    announcement: "announcement",
                    dm: "dm",
                    user: "user",
                    server: "server"
                }
            }
        },
        expandedUserTags: {
            name: "ExpandedUserTags",
            description: "Adds tags for webhooks and moderative roles (owner, admin, etc.)",
            tag: {
                webhook: {
                    name: "Webhook",
                    description: "This user is a webhook"
                },
                owner: {
                    name: "Owner",
                    description: "Owns the server"
                },
                admin: {
                    name: "Admin",
                    description: "Has the administrator permission"
                },
                staff: {
                    name: "Staff",
                    description: "Can manage the server, channels or roles"
                },
                mod: {
                    name: "Mod",
                    description: "Can manage messages or kick/ban people"
                },
                vcmod: {
                    name: "VC Mod",
                    description: "Can manage voice chats"
                },
                chatmod: {
                    name: "Chat Mod",
                    description: "Can manage messages"
                }
            },
            modal: {
                example: "Example",
                tag: "Tag",
                customTextPlaceholder: "Text on tag (default: {{displayName}})",
                messages: "Show in messages",
                memberList: "Show in member list and profiles"
            },
            option: {
                dontShowForBots: {
                    label: "Don't show for bots",
                    description: "Don't show extra tags for bots (excluding webhooks)"
                },
                dontShowBotTag: {
                    label: "Don't show bot tag",
                    description: "Only show extra tags for bots / Hide [APP] text"
                },
                showWebhookTagFully: {
                    label: "Show webhook tag fully",
                    description: "Show Webhook tag in followed channels like announcements"
                },
                tagSettings: {
                    label: "Tag Settings",
                    description: "fill me"
                }
            }
        },
        experiments: {
            name: "Experiments",
            description: "Enable Access to Experiments & other dev-only features in Discord!",
            modal: {
                about: {
                    title: "More Information",
                    body: "You can open Discord's DevTools via {{key}}"
                },
                warning: {
                    title: "Hold on!!",
                    body: "Experiments are unreleased Discord features. They might not work, or even break your client or get your account disabled.",
                    notReponsible: "Only use experiments if you know what you're doing. Plexcord is not responsible for any damage caused by enabling experiments.",
                    useAtOwnRisk: "If you don't know what an experiment does, ignore it. Do not ask us what experiments do either, we probably don't know.",
                    serverSideFeatures: "No, you cannot use server-side features like checking the 'Send to Client' box."
                }
            },
            option: {
                toolbarDevMenu: {
                    label: "Toolbar Dev Menu",
                    description: "Change the Help (?) toolbar button (top right in chat) to Discord's developer menu"
                }
            }
        },
        exportMessages: {
            name: "ExportMessages",
            description: "Allows you to export messages to files - single message, all messages from a user, or all channel messages",
            option: {
                maxMessages: {
                    label: "Max Messages",
                    description: "Maximum number of messages to export (0 = unlimited)"
                },
                includeAttachments: {
                    label: "Include Attachments",
                    description: "Include attachment information in exports"
                },
                includeEmbeds: {
                    label: "Include Embeds",
                    description: "Include embed information in exports"
                },
                includeReactions: {
                    label: "Include Reactions",
                    description: "Include reaction information in exports"
                },
                includeComponents: {
                    label: "Include Components",
                    description: "Include component information in exports"
                }
            },
            message: {
                invalid: "Invalid message - no author",
                unknownUser: "Unknown User",
                botEmbed: "Bot Embed Message",
                attachments: "Attachments",
                unknown: "Unknown",
                noUrl: "No URL",
                embeds: "Embeds",
                title: "Title",
                description: "Description",
                url: "URL",
                footer: "Footer",
                author: "Author",
                fields: "Fields",
                components: "Components",
                component: "Component",
                interactiveElement: "Interactive Element",
                reactions: "Reactions",
                errorFormatting: "Error formatting message",
                unknownError: "Unknown error",
                header: "{{titlePrefix}} {{displayName}} in {{channelName}}",
                from: "Messages from",
                direct: "Direct Messages",
                exported: "Exported on",
                total: "Total messages"
            },
            toast: {
                export: {
                    title: "Export Messages",
                    body: "Failed to export message"
                },
                noMessages: {
                    title: "Export Messages",
                    notFoundUser: "No messages found from this user in this channel",
                    notFoundChannel: "No messages found in this channel"
                },
                failed: {
                    title: "Export Messages",
                    body: "Failed to export messages"
                },
                userNotFound: {
                    title: "Export Messages",
                    body: "User not found"
                },
                complete: {
                    title: "Export Complete",
                    saved: "File saved",
                    downloaded: "File downloaded",
                    messages: "messages"
                }
            },
            context: {
                exportMessage: "Export This Message",
                exportAll: "Export All Messages in from {{user}}",
                user: "User",
                exportAllChannel: "Export All Channel Messages"
            }
        },
        expressionCloner: {
            name: "ExpressionCloner",
            description: "Allows you to clone Emotes & Stickers to your own server (right click them)",
            modal: {
                title: "Custom Name",
                invalidName: "Name must be between 2 and 32 characters and only contain alphanumeric characters"
            },
            toast: {
                success: "Successfully cloned {{name}} to {{guild}}!",
                yourServer: "your server",
                failed: "Failed to clone: ",
                console: "Something went wrong (check console!)"
            },
            context: {
                clone: "Clone {{type}}",
                cloneName: "Clone {{data}}"
            }
        },
        f8break: {
            name: "F8Break",
            description: "Pause the client when you press F8 with DevTools (+ breakpoints) open."
        },
        fakeNitro: {
            name: "FakeNitro",
            description: "Allows you to send fake emojis/stickers, use nitro themes, and stream in nitro quality",
            option: {
                enableEmojiBypass: {
                    label: "Enable Emoji Bypass",
                    description: "Allows sending fake emojis (also bypasses missing permission to use custom emojis)"
                },
                emojiSize: {
                    label: "Emoji Size",
                    description: "Size of the emojis when sending"
                },
                transformEmojis: {
                    label: "Transform Emojis",
                    description: "Whether to transform fake emojis into real ones"
                },
                enableStickerBypass: {
                    label: "Enable Sticker Bypass",
                    description: "Allows sending fake stickers (also bypasses missing permission to use stickers)"
                },
                stickerSize: {
                    label: "Sticker Size",
                    description: "Size of the stickers when sending"
                },
                transformStickers: {
                    label: "Transform Stickers",
                    description: "Whether to transform fake stickers into real ones"
                },
                transformCompoundSentence: {
                    label: "Transform Compound Sentence",
                    description: "Whether to transform fake stickers and emojis in compound sentences (sentences with more content than just the fake emoji or sticker link)"
                },
                enableStreamQualityBypass: {
                    label: "Enable Stream Quality Bypass",
                    description: "Allow streaming in nitro quality"
                },
                useHyperLinks: {
                    label: "Use Hyper Links",
                    description: "Whether to use hyperlinks when sending fake emojis and stickers"
                },
                hyperLinkText: {
                    label: "Hyper Link Text",
                    description: "What text the hyperlink should use. {{NAME}} will be replaced with the emoji/sticker name."
                },
                disableEmbedPermissionCheck: {
                    label: "Disable Embed Permission Check",
                    description: "Whether to disable the embed permission check when sending fake emojis and stickers"
                }
            },
            modal: {
                sticker: "This is a FakeNitro sticker and renders like a real sticker only for you. Appears as a link to non-plugin users.",
                emoji: "This is a FakeNitro emoji and renders like a real emoji only for you. Appears as a link to non-plugin users."
            },
            alert: {
                notice: {
                    title: "Hold on!",
                    body: "You are trying to send/edit a message that contains a FakeNitro emoji or sticker, however you do not have permissions to embed links in the current channel. Are you sure you want to send this message? Your FakeNitro items will appear as a link only.",
                    footer: "You can disable this alert in the FakeNitro settings",
                    confirm: "Send Anyway",
                    cancel: "Cancel",
                    secondaryConfirm: "Do not show again"
                },
                apngSticker: {
                    title: "Hold on!",
                    body: "You cannot send this message because it contains an animated FakeNitro sticker, and you do not have permissions to attach files in the current channel. Please remove the sticker to proceed."
                }
            }
        },
        fakeProfileThemes: {
            name: "FakeProfileThemes",
            description: "Allows profile theming by hiding the colors in your bio thanks to invisible 3y3 encoding",
            button: {
                copy: "Copy 3y3"
            },
            modal: {
                usage: "Usage",
                preview: "Preview",
                intro: "After enabling this plugin, you will see custom colors in the profiles of other people using compatible plugins.",
                setColor: "To set your own colors:",
                step1: "• use the color pickers below to choose your colors",
                step2: "• click the {{copy}} button",
                step3: "• paste the invisible text anywhere in your bio",
                pickers: "Color Pickers",
                primary: "Primary",
                accent: "Accent"
            },
            option: {
                nitroFirst: {
                    label: "Nitro First",
                    description: "Default color source if both are present",
                    nitro: "Nitro colors",
                    fake: "Fake colors"
                }
            }
        },
        fakeProfileThemesAndEffects: {
            name: "FakeProfileThemesAndEffects",
            description: "Allows profile theming and profile effects by hiding the colors and effects in your bio thanks to invisible 3y3 encoding",
            option: {
                prioritizeNitro: {
                    label: "Prioritize Nitro",
                    description: "Source to prioritize",
                    nitro: "Nitro",
                    aboutMe: "About me"
                },
                hideBuilder: {
                    label: "Hide Builder",
                    description: "Hide the FPTE Builder in the User Profile and Server Profiles settings pages"
                }
            },
            modal: {
                primary: "Primary",
                accent: "Accent",
                effect: "Effect",
                usage: {
                    title: "Usage",
                    intro: "After enabling this plugin, you will see custom theme colors and effects in the profiles of others using this plugin.",
                    setColor: "To set your own colors and effect:",
                    step1: "Go to your profile settings",
                    step2: "Use the FPTE Builder to choose your profile theme colors and effect",
                    step3: "Click the {{copy}} button",
                    step4: "Paste the invisible text anywhere in your bio"
                }
            },
            toast: {
                copied: "FPTE copied to clipboard!",
                empty: "FPTE Builder is empty; nothing to copy!"
            },
            button: {
                copyFPTE: "Copy FPTE",
                reset: "Reset",
                preview: "FPTE Builder Preview",
                buildBackwards: "Build backwards compatible FPTE",
                moreCharacters: "Will use more characters"
            }
        },
        fastDeleteChannels: {
            name: "FastDeleteChannels",
            description: "Adds a trash icon to delete channels",
            option: {
                keyBind: {
                    label: "Key Bind",
                    description: "The key to toggle trash when pressed."
                },
                reqCtrl: {
                    label: "Require Control",
                    description: "Require control key to be held."
                },
                reqShift: {
                    label: "Require Shift",
                    description: "Require shift key to be held."
                },
                reqAlt: {
                    label: "Require Alt",
                    description: "Require alt key to be held."
                }
            }
        },
        favoriteEmojiFirst: {
            name: "FavoriteEmojiFirst",
            description: "Puts your favorite emoji first in the emoji autocomplete and also has emoji alias.",
            option: {
                aliases: {
                    label: "Aliases",
                    description: "Manage your emoji aliases."
                },
                clearAll: {
                    label: "Clear All",
                    description: "Delete all aliases."
                }
            },
            modal: {
                clear: {
                    title: "Delete All Aliases",
                    description: "This will remove every emoji alias you saved.",
                    confirm: "Delete all aliases"
                },
                set: {
                    title: "Set Alias",
                    description: "Set an alias for {{emoji}}",
                    placeholder: "Alias, e.g. 'happy'",
                    save: "Save",
                    error: "Duplicate alias"
                }
            },
            toast: {
                set: "Alias set for {{emoji}}",
                clearAll: "Deleted all emoji aliases",
                failedDeleted: "Failed to delete aliases",
                removed: "Removed alias: {{alias}}",
                failedRemove: "Failed to remove alias",
                duplicate: "Duplicate alias",
                failedSave: "Failed to save alias."
            },
            button: {
                edit: "Edit alias",
                set: "Set alias"
            }
        },
        favoriteGifSearch: {
            name: "FavoriteGifSearch",
            description: "Adds a search bar to favorite gifs.",
            placeholder: "Search favorite gifs",
            option: {
                searchOption: {
                    label: "Search Option",
                    description: "The part of the url you want to search",
                    url: "Entire Url",
                    path: "Path Only (/somegif.gif)",
                    hostandpath: "Host & Path (tenor.com somgif.gif)"
                }
            }
        },
        fileDownloadButton: {
            name: "FileDownloadButton",
            description: "Adds Download Button to top right corner of files"
        },
        findReply: {
            name: "FindReply",
            description: "Jumps to the earliest reply to a message in a channel (lets you follow past conversations more easily).",
            context: {
                jump: "Jump to Reply"
            },
            toast: {
                navigate: "Use the bottom panel to navigate between replies.",
                container: "Couldn't find the container element.",
                couldntFind: "Couldn't find the reply message."
            },
            option: {
                includePings: {
                    label: "Include Pings",
                    description: "Will also search for messages that @ the author directly"
                },
                includeAuthor: {
                    label: "Include Author",
                    description: "Will also search for messages that reply to the author in general, not just that exact message"
                },
                hideButtonIfNoReply: {
                    label: "Hide Button If No Reply",
                    description: "Hides the button if there are no replies to the message"
                }
            }
        },
        fixCodeblockGap: {
            name: "FixCodeblockGap",
            description: "Removes the gap between codeblocks and text below it"
        },
        fixFileExtensions: {
            name: "FixFileExtensions",
            description: "Fixes file extensions by renaming them to a compatible supported format if possible"
        },
        fixImagesQuality: {
            name: "FixImagesQuality",
            description: "Improves quality of images by forcing the original source to be used",
            option: {
                originalImagesInChat: {
                    label: "Original Images In Chat",
                    description: "Also load the original image in Chat. WARNING: Read the caveats above"
                }
            },
            modal: {
                about: {
                    title: "The default behaviour is the following:",
                    body: "&mdash; In chat, optimised but full resolution images will be loaded.",
                    body2: "&mdash; In the image modal, the original image will be loaded.",
                    body3: "You can also enable original image in chat, but beware of the following caveats:",
                    warning: "&mdash; Animated images (GIF, WebP, etc.) in chat will always animate, regardless of if the App is focused.",
                    warning2: "&mdash; May cause lag.",
                }
            }
        },
        fixSpotifyEmbeds: {
            name: "FixSpotifyEmbeds",
            description: "Fixes spotify embeds being incredibly loud by letting you customise the volume",
            option: {
                volume: {
                    label: "Volume",
                    description: "The volume % to set for spotify embeds. Anything above 10% is veeeery loud"
                }
            }
        },
        fixYoutubeEmbeds: {
            name: "FixYoutubeEmbeds",
            description: "Bypasses youtube videos being blocked from display on Discord (for example by UMG)"
        },
        followUser: {
            name: "FollowUser",
            description: "Adds a follow option in the user context menu to always be in the same VC as them",
            indicatorTooltip: "Following {{user}} (click to trigger manually, right-click to unfollow)",
            unknownUser: "Unknown User",
            option: {
                executeOnFollow: {
                    label: "Execute On Follow",
                    description: "Make sure to be in the same VC when following a user"
                },
                onlyManualTrigger: {
                    label: "Only Manual Trigger",
                    description: "Only trigger on indicator click"
                },
                followLeave: {
                    label: "Follow Leave",
                    description: "Also leave when the followed user leaves"
                },
                autoMoveBack: {
                    label: "Auto Move Back",
                    description: "Automatically move back to the VC of the followed user when you got moved"
                },
                followUserId: {
                    label: "Follow User ID",
                    description: "Followed User ID"
                },
                channelFull: {
                    label: "Channel Full",
                    description: "Attempt to move you to the channel when it is not full anymore"
                }
            },
            toast: {
                channelFull: "Channel is full",
                newVc: "Followed user into a new voice channel",
                insufficientPermissions: "Insufficient permissions to enter in the voice channel",
                sameVc: "You are already in the same channel",
                disconnect: "Followed user left, disconnected",
                notFollowing: "Followed user left, but not following disconnect",
                notVc: "Followed user is not in a voice channel"
            },
            context: {
                follow: "Follow User",
                unfollow: "Unfollow User"
            }
        },
        fontLoader: {
            name: "FontLoader",
            description: "Loads any font from Google Fonts",
            option: {
                selectedFont: {
                    label: "Selected Font",
                    description: "Currently selected font"
                },
                fontSearch: {
                    label: "Font Search",
                    description: "Search and select Google Fonts"
                },
                applyOnCodeBlocks: {
                    label: "Apply on Code Blocks",
                    description: "Apply the font to code blocks"
                }
            },
            toast: {
                failedLoad: "Failed to load font"
            },
            modal: {
                settings: {
                    title: "Search Google Fonts",
                    description: "Select a font to apply it",
                    placeholder: "Search fonts...",
                    previewText: "The quick brown fox jumps over the lazy dog",
                    authors: "By {{authors}}"
                }
            }
        },
        forceOwnerCrown: {
            name: "ForceOwnerCrown",
            description: "Force the owner crown next to usernames even if the server is large."
        },
        freaky: {
            name: "Freaky",
            description: "Allows you to send your message in a weird font using the /freaky command.",
            command: {
                freaky: "It's freaky.",
                message: "Make your message freaky"
            },
            option: {
                addFreakyEnding: {
                    label: "Add Freaky Ending",
                    description: "Add 👅 or ❤️ at the end"
                }
            }
        },
        frequentQuickSwitcher: {
            name: "Frequent Quick Switcher",
            description: "Rewrites and filters the quick switcher results to be your most frequent channels."
        },
        friendInvites: {
            name: "FriendInvites",
            description: "Create and manage friend invite links via slash commands (/create friend invite, /view friend invites, /revoke friend invites).",
            command: {
                create: {
                    description: "Generates a friend invite link.",
                    message: "discord.gg/{{code}}`\n· Expires <t:{{expiration}}:R>\n· Max Uses: {{uses}}"
                },
                view: {
                    description: "View a list of all generated friend invites.",
                    message: "_discord.gg/{{code}}_ \n· Expires: <t:{{expiration}}:R> \n· Times used: {{uses}}/{{maxUses}}",
                    noInvites: "You have no active friend invites."
                },
                revoke: {
                    description: "Revokes all generated friend invites.",
                    message: "All friend invites have been revoked."
                }
            }
        },
        friendshipRanks: {
            name: "FriendshipRanks",
            description: "Adds badges showcasing how long you have been friends with a user for",
            badge: {
                sprout: {
                    name: "Sprout",
                    description: "Your friendship is just starting"
                },
                blooming: {
                    name: "Blooming",
                    description: "Your friendship is getting there! (1 Month)"
                },
                burning: {
                    name: "Burning",
                    description: "Your friendship has reached terminal velocity (3 Months)"
                },
                fighter: {
                    name: "Fighter",
                    description: "Your friendship is strong (6 Months)"
                },
                star: {
                    name: "Star",
                    description: "Your friendship has been going on for a WHILE (1 Year)"
                },
                royal: {
                    name: "Royal",
                    description: "Your friendship has gone through thick and thin- a whole 2 years!"
                },
                besties: {
                    name: "Besties",
                    description: "How do you even manage this??? (5 Years)"
                }
            }
        },
        friendsSince: {
            name: "FriendsSince",
            description: "Shows when you became friends with someone in the user popout",
            section: "Friends Since"
        },
        fullSearchContext: {
            name: "FullSearchContext",
            description: "Makes the message context menu in message search results have all options you'd expect"
        },
        fullUserInChatbox: {
            name: "FullUserInChatbox",
            description: "Makes the user mention in the chatbox have more functionalities, like left/right clicking"
        },
        fullVCPFP: {
            name: "FullVCPFP",
            description: "Makes avatars take up the entire vc tile"
        },
        gameActivityToggle: {
            name: "GameActivityToggle",
            description: "Adds a toggle to the user popout to show/hide your game activity",
            tooltip: "Toggle Game Activity",
            gameActivity: {
                enabled: "Game Activity Enabled",
                disabled: "Game Activity Disabled"
            },
            option: {
                oldIcon: {
                    label: "Old Icon",
                    description: "Use the old icon style before Discord icon redesign"
                },
                location: {
                    label: "Location",
                    description: "Where to show the game activity toggle button",
                    panel: "Next to Mute/Deafen",
                    toolbox: "Plexcord Toolbox"
                }
            }
        },
        gifCollections: {
            name: "GifCollection",
            description: "Allows you to create collections of gifs",
            context: {
                copyImageLink: "Copy Image Link",
                copyUrl: "Copy URL",
                collection: {
                    add: "Add to Collection",
                    gif: "GIF Collections",
                    delete: "Delete Collection",
                    create: "Create Collection",
                    remove: "Remove",
                    information: "Collection Information",
                    name: "Name",
                    gifs: "GIFs",
                    created: "Created At",
                    updated: "Last Updated",
                    close: "Close",
                    rename: "Rename",
                    move: "Move to Collection",
                    select: "Select a collection to move the item to"
                },
                gif: {
                    information: "Information",
                    added: "Added At",
                    width: "Width",
                    height: "Height",
                    close: "Close"
                }
            },
            option: {
                itemPrefix: {
                    label: "Item Prefix",
                    description: "The prefix for gif items"
                },
                collectionPrefix: {
                    label: "Collection Prefix",
                    description: "The prefix for collections"
                },
                onlyShowCollections: {
                    label: "Only Show Collections",
                    description: "Only show collections"
                },
                stopWarnings: {
                    label: "Stop Warnings",
                    description: "Stop deletion warnings"
                },
                showCopyImageLink: {
                    label: "Show Copy Image Link",
                    description: "Show {{copyImageLink}} option in context menus"
                },
                preventDuplicates: {
                    label: "Prevent Duplicates",
                    description: "Prevent adding the same GIF to a collection multiple times"
                },
                defaultEmptyCollectionImage: {
                    label: "Default Empty Collection Image",
                    description: "The image / gif that will be shown when a collection has no images / gifs"
                },
                collectionsSortType: {
                    label: "Collections Sort Type",
                    description: "The type of sorting for collections"
                },
                collectionsSortOrder: {
                    label: "Collections Sort Order",
                    description: "The order of sorting for collections"
                },
                collectionsSort: {
                    label: "Collections Sort",
                    description: "Decide how to sort collections",
                    title: "Sort Collections",
                    sortDescription: "Choose a sorting criteria for your collections",
                    sortBy: "Sort By",
                    name: "Name",
                    creationDate: "Creation Date",
                    modifiedDate: "Modified Date",
                    ascending: "Ascending",
                    descending: "Descending"
                },
                importGifs: {
                    label: "Import Gifs",
                    description: "Import Collections",
                    button: "Import Collections"
                },
                exportGifs: {
                    label: "Export Gifs",
                    description: "Export Collections",
                    button: "Export Collections"
                },
                resetCollections: {
                    label: "Reset Collections",
                    description: "Reset Collections to default (deletes all your collections)",
                    button: "Reset Collections"
                }
            },
            toast: {
                copied: "Image link copied to clipboard!",
                urlCopied: "URL copied to clipboard!",
                already: "That collection already exists",
                alreadyCollection: "That GIF is already in that collection"
            },
            modal: {
                create: {
                    title: "Create Collection",
                    name: "Collection Name",
                    create: "Create"
                },
                rename: {
                    title: "Rename Collection",
                    name: "New Collection Name",
                    warning: "Name can't be longer than 24 characters",
                    rename: "Rename"
                }
            },
            alert: {
                import: {
                    title: "Are you sure?",
                    body: "Importing collections will overwrite your current collections.",
                    confirm: "Import",
                    cancel: "Nevermind"
                },
                reset: {
                    title: "Are you sure?",
                    body: "Resetting collections will remove all your collections.",
                    confirm: "Reset",
                    cancel: "Nevermind"
                },
                delete: {
                    title: "Are you sure?",
                    deleteBody: "Do you really want to delete this collection?",
                    removeBody: "Do you really want to remove this item?",
                    confirm: "Delete",
                    remove: "Remove",
                    cancel: "Nevermind"
                }
            }
        },
        gifPaste: {
            name: "GifPaste",
            description: "Allows you to paste gifs directly into the chatbox"
        },
        gitHubRepos: {
            name: "GitHubRepos",
            description: "Displays a user's public GitHub repositories in their profile",
            loading: "Loading repositories...",
            option: {
                showStars: {
                    label: "Show Stars",
                    description: "Show repository stars"
                },
                showLanguage: {
                    label: "Show Language",
                    description: "Show repository primary language"
                },
                showInMiniProfile: {
                    label: "Show in Mini Profile",
                    description: "Show repositories in the mini profile popout"
                },
                showRepositoryTab: {
                    label: "Show Repository Tab",
                    description: "Show repositories tab in profile modal (hides button in connections when enabled)"
                }
            },
            error: {
                error: "Error",
                render: "Error, Failed to render GithubRepos"
            },
            button: {
                show: "Show github Repositories",
                repositories: "Github Repositories",
                more: "Show More",
                only: "Showing only top {{length}}/{{total}}"
            },
            modal: {
                title: "{{user}}'s Github Repositories",
                repository: "Repository",
                description: "Description",
                language: "Language",
                stars: "Stars",
                viewOnGitHub: "View on GitHub",
                close: "Close"
            }
        },
        googleThat: {
            name: "GoogleThat",
            description: "Adds a command to send an internet search link",
            command: {
                googleThat: {
                    description: "Send a search engine link",
                    query: "The search query"
                }
            },
            option: {
                hyperlink: {
                    label: "Hyperlink",
                    description: "If the sent link should hyperlink with the query as the label"
                },
                embed: {
                    label: "Embed",
                    description: "If the sent link should render an embed"
                },
                defaultEngine: {
                    label: "Default Engine",
                    description: "The search engine to use"
                },
                customEngineURL: {
                    label: "Custom Engine URL",
                    description: "The URL of the Engine you wish to use"
                }
            }
        },
        greetStickerPicker: {
            name: "GreetStickerPicker",
            description: "Allows you to use any greet sticker instead of only the random one by right-clicking the 'Wave to say hi!' button",
            mode: {
                greet: "Greet",
                message: "Message"
            },
            option: {
                greetMode: {
                    label: "Greet Mode",
                    description: "Choose the greet mode",
                    greet: "Greet (you can only greet 3 times)",
                    message: "Message (you can greet spam)"
                }
            },
            context: {
                label: "Greet Sticker Picker",
                mode: "Greet Mode",
                stickers: "Greet Stickers",
                multi: "Unholy Multi-Greet",
                send: "Send Greets"
            }
        },
        guildPickerDumper: {
            name: "GuildPickerDumper",
            description: "Context menu to dump and download a server's emojis and stickers.",
            context: {
                download: {
                    emoji: "Download Emojis",
                    sticker: "Download Stickers"
                }
            }
        },
        hideChatButtons: {
            name: "HideChatButtons",
            description: "able to hide the chat buttons",
            tooltip: {
                close: "Close",
                open: "Open"
            },
            option: {
                color: {
                    label: "Color",
                    description: "Color it red on open"
                },
                open: {
                    label: "Open",
                    description: "opened by default"
                }
            }
        },
        hideMedia: {
            name: "HideMedia",
            description: "Hide attachments and embeds for individual messages via hover button",
            show: "Show Media",
            hide: "Hide Media",
            hidden: "Media Hidden"
        },
        hideServers: {
            name: "HideServers",
            description: "Hides servers from the server list",
            context: {
                hide: "Hide Server",
                unhide: "Unhide Server",
                folder: {
                    hide: "Hide Folder",
                    unhide: "Unhide Folder"
                }
            },
            option: {
                showIndicator: {
                    label: "Show Indicator",
                    description: "Show menu to unhide servers at the bottom of the list"
                },
                guildsList: {
                    label: "Guilds List",
                    description: "Remove hidden servers"
                },
                resetHidden: {
                    label: "Reset Hidden",
                    description: "Remove all hidden guilds from the list",
                    button: "Reset Hidden Servers"
                }
            },
            button: {
                hidden: "Hidden",
                hiddenServers: "Hidden Servers",
                remove: "Remove",
                folder: "Folder",
                removeAll: "Remove All",
                guilds: "Guilds",
                noHiddenServers: "No hidden servers"
            }
        },
        holyNotes: {
            name: "HolyNotes",
            description: "Holy Notes allows you to save messages",
            main: "Main",
            button: {
                tooltip: "Holy Notes",
                save: "Save Note",
                cancel: "Cancel",
                noteMessage: "Note Message",
                refresh: "Refresh Avatars",
                import: "Import Notes",
                export: "Export Notes",
                deleteAll: "Delete All Notes",
                delete: "Delete Notebook",
                create: "Create Notebook",
                copyText: "Copy Text",
                copyAttachment: "Copy Attachment URL",
                deleteNote: "Delete Note",
                moveNote: "Move Note",
                moveTo: "Move to {{key}}",
                copyId: "Copy ID"
            },
            modal: {
                error: {
                    generic: "There was an error parsing your notes. Check the console for details.",
                    easter: "No notes were found. Empathy banana is here for you.",
                    empty: "No notes were found saved in this notebook."
                },
                help: {
                    title: "Help",
                    description: "Learn how to use Holy Notes",
                    addingNotes: "Adding Notes",
                    addingNotesText: "To add a note right click on a message then hover over the 'Note Message' item and click the button with the notebook name you would like to note the message to.",
                    prototype: "Prototype",
                    noteMessage: "Clicking the 'Note Message' button by itself will note to Main by default!",
                    deletingNotes: "Deleting Notes",
                    deletingNotesText: "Note you can either right click the note and hit 'Delete Note' or you can hold the 'DELETE' key on your keyboard and click on a note; it's like magic!",
                    movingNotes: "Moving Notes",
                    movingNotesText: "To move a note right click on a note and hover over the 'Move Note' item and click on the button corresponding to the notebook you would like to move the note to.",
                    jumpToMessage: "Jump To Message",
                    jumpToMessageText: "To jump to the location that the note was originally located at just right click on the note and hit 'Jump to Message'."
                },
                notebook: {
                    title: "NOTEBOOK",
                    search: "Search for a message...",
                    options: "Sort Options",
                    label: "Sort Menu",
                    filteredOf: "{{filteredCount}} of {{noteCount}} note{{s}}",
                    note: "{{noteCount}} note{{s}}",
                    ada: "Ascending / Date Added",
                    amd: "Ascending / Message Date",
                    dda: "Descending / Date Added",
                    dmd: "Descending / Message Date",
                    change: "Change Sorting",
                    ascending: "Ascending",
                    descending: "Descending",
                    dateAdded: "Date Added",
                    messageDate: "Message Date"
                },
                create: {
                    title: "Create Notebook",
                    description: "Enter a name for your new notebook",
                    placeholder: "Notebook Name"
                },
                delete: {
                    title: "Delete {{notebookName}}?",
                    description: "{{noteCount}} note{{s}} will be deleted permanently",
                    button: "Delete"
                },
                tabs: {
                    label: "Notebook Tabs"
                }
            },
            toast: {
                saved: "Successfully added message to {{notebook}}",
                deleted: "Successfully deleted note from {{notebook}}",
                moved: "Successfully moved note from {{from}} to {{to}}.",
                exists: "Notebook {{notebookName}} already exists.",
                created: "Successfully created {{notebookName}}.",
                deletedNotebook: "Successfully deleted {{notebookName}}.",
                refreshed: "Successfully refreshed avatars.",
                deletedAll: "Successfully deleted all notes.",
                imported: "Successfully imported notes.",
                invalid: "Failed to import notes."
            },
            toolbox: {
                action: "Open Notes"
            }
        },
        homeTyping: {
            name: "HomeTyping",
            description: "Changes the home button to a typing indicator if someone in your dms is typing"
        },
        ignoreActivities: {
            name: "IgnoreActivities",
            description: "Ignore activities from showing up on your status ONLY. You can configure which ones are specifically ignored from the Registered Games and Activities tabs, or use the general settings below",
            modal: {
                import: {
                    title: "Import the application id of the CustomRPC plugin to the filter list"
                },
                filter: {
                    title: "Filter List",
                    description: "Comma separated list of activity IDs to filter (Useful for filtering specific RPC activities and CustomRPC)"
                }
            },
            toast: {
                id: {
                    notSet: "CustomRPC application ID is not set.",
                    alreadyAdded: "CustomRPC application ID is already added."
                }
            },
            button: {
                import: "Import CustomRPC ID"
            },
            option: {
                importCustomRPC: {
                    label: "Import CustomRPC"
                },
                listMode: {
                    label: "List Mode",
                    description: "Choose how the filter list is applied",
                    blacklist: "Blacklist (Ignore only what's in the list)",
                    whitelist: "Whitelist (Ignore everything except what's in the list)"
                },
                idList: {
                    label: "IDs List"
                },
                ignorePlaying: {
                    label: "Ignore Playing",
                    description: "Ignore all playing activities (These are usually game and RPC activities)"
                },
                ignoreStreaming: {
                    label: "Ignore Streaming",
                    description: "Ignore all streaming activities"
                },
                ignoreListening: {
                    label: "Ignore Listening",
                    description: "Ignore all listening activities (These are usually spotify activities)"
                },
                ignoreWatching: {
                    label: "Ignore Watching",
                    description: "Ignore all watching activities"
                },
                ignoreCompeting: {
                    label: "Ignore Competing",
                    description: "Ignore all competing activities (These are normally special game activities)"
                },
                ignoredActivities: {
                    label: "Ignored Activities"
                }
            }
        },
        ignoreCalls: {
            name: "IgnoreCalls",
            description: "Allows you to ignore calls from specific users or dm groups.",
            option: {
                permanentlyIgnoredUsers: {
                    label: "Permanently Ignored Users",
                    description: "User IDs (comma + space) who should be permanently ignored"
                }
            },
            button: {
                ignore: "Ignore",
                temporarilyIgnore: "Temporarily Ignore Calls",
                permanentlyIgnore: "Permanently Ignore Calls"
            }
        },
        iLoveSpam: {
            name: "ILoveSpam",
            description: "Do not hide messages from 'likely spammers'"
        },
        imageFilename: {
            name: "ImageFilename",
            description: "Display the file name of images & GIFs as a tooltip when hovering over them",
            option: {
                showFullUrl: {
                    label: "Show Full URL",
                    description: "Show the full URL of the image instead of just the file name. Always enabled for GIFs because they usually have no meaningful file name"
                }
            }
        },
        imageLink: {
            name: "ImageLink",
            description: "Never hide image links in messages, even if it's the only content"
        },
        imageZoom: {
            name: "ImageZoom",
            description: "Lets you zoom in to images and gifs as well as displays image metadata. Use scroll wheel to zoom in and shift + scroll wheel to increase lens radius.",
            option: {
                saveZoomValues: {
                    label: "Save Zoom Values",
                    description: "Whether to save zoom and lens size values"
                },
                invertScroll: {
                    label: "Invert Scroll",
                    description: "Invert scroll"
                },
                nearestNeighbour: {
                    label: "Nearest Neighbour",
                    description: "Use Nearest Neighbour Interpolation when scaling images"
                },
                square: {
                    label: "Square",
                    description: "Make the lens square"
                },
                zoom: {
                    label: "Zoom",
                    description: "Zoom of the lens"
                },
                size: {
                    label: "Size",
                    description: "Radius / Size of the lens"
                },
                zoomSpeed: {
                    label: "Zoom Speed",
                    description: "How fast the zoom / lens size changes"
                },
                showMetadata: {
                    label: "Show Metadata",
                    description: "Show image metadata when double clicking on selected image"
                }
            },
            context: {
                square: "Square Lens",
                nearest: "Nearest Neighbour",
                zoom: "Zoom",
                size: "Lens Size",
                zoomSpeed: "Zoom Speed",
                showImageMetadata: "Show Image Metadata",
                view: "View Metadata",
                loading: "Loading...",
                unknown: "Unknown",
                sizeHTML: "Size",
                dimensions: "Dimensions",
                filename: "Filename"
            }
        },
        imgToGif: {
            name: "ImgToGif",
            description: "Adds a /imgtogif slash command to create a gif from any image",
            command: {
                imgToGif: {
                    description: "Allows you to turn an image to a gif",
                    image: "Image attachment to use",
                    width: "Width of the gif",
                    height: "Height of the gif"
                }
            },
            error: {
                noImage: "No Image specified!",
                notImage: "Upload is not an image"
            }
        },
        implicitRelationships: {
            name: "ImplicitRelationships",
            description: "Shows your implicit relationships in the Friends tab.",
            option: {
                sortByAffinity: {
                    label: "Sort by Affinity",
                    description: "Whether to sort implicit relationships by their affinity to you."
                }
            },
            implicit: "Implicit"
        },
        inRole: {
            name: "InRole",
            description: "Know who is in a role with the role context menu or /inrole command (read plugin info!)",
            command: {
                inrole: {
                    description: "Know who is in a role",
                    role: "The role",
                    noGuild: "Make sure that you are in a server."
                }
            },
            context: {
                view: "View Members in Role"
            },
            modal: {
                about: {
                    title: "Limitations",
                    description: "If you don't have mod permissions on the server, and that server is large (over 100 members), the plugin may be limited in the following ways",
                    list: {
                        one: "Offline members won't be listed",
                        two: "Up to 100 members will be listed by default. To get more, scroll down in the member list to load more members.",
                        three: "However, friends will always be shown regardless of their status."
                    }
                },
                member: {
                    title: "Role Members",
                    noMembers: "Looks like no online cached members with that role were found. Try scrolling down on your member list to cache more users!"
                }
            }
        },
        instantScreenshare: {
            name: "InstantScreenshare",
            description: "Instantly screenshare when joining a voice channel with support for desktop sources, windows, and video input devices (cameras, capture cards)",
            modal: {
                linux: {
                    title: "For Linux",
                    body: "For Wayland it only pops up the screenshare select",
                    bodyTwo: "For X11 it may or may not work :shrug:"
                },
                videoDevices: {
                    title: "Video Input Devices",
                    body: "Supports cameras and capture cards (like Elgato HD60X) when enabled in settings"
                },
                regardingSound: {
                    title: "Regarding Sound & Preview Settings",
                    body: "We use the settings set and used by discord to decide if stream preview and sound should be enabled or not"
                }
            },
            option: {
                streamMedia: {
                    label: "Media source to stream",
                    description: "Resets to main screen if not found",
                    loading: "Loading media sources...",
                    none: "No media sources found",
                    placeholder: "Select a media source to stream"
                },
                includeVideoDevices: {
                    label: "Include Video Devices",
                    description: "Include video input devices (cameras, capture cards) in the source list"
                },
                autoMute: {
                    label: "Auto Mute",
                    description: "Automatically mute your microphone when joining a voice channel"
                },
                autoDeafen: {
                    label: "Auto Deafen",
                    description: "Automatically deafen when joining a voice channel (also mutes you)"
                },
                instantScreenshare: {
                    label: "Instant Screenshare",
                    description: "Enables automatic screenshare feature"
                },
                keybindScreenshare: {
                    label: "Keybind Screenshare",
                    description: "Screenshare by keybind in discord keybind settings"
                },
                focusDiscord: {
                    label: "Focus Discord",
                    description: "Only start screenshare with keybind when Discord is focused"
                },
                toolboxManagement: {
                    label: "Toolbox Management",
                    description: "Enable/Disable Instant Screenshare"
                }
            },
            toolbox: {
                label: "Instant Screenshare",
                toast: "Instant Screenshare {{state}}",
                enabled: "Enabled",
                disabled: "Disabled"
            }
        },
        invisibleChat: {
            name: "InvisibleChat",
            description: "Encrypt your Messages in a non-suspicious way!",
            option: {
                savedPasswords: {
                    label: "Saved Passwords",
                    description: "Saved Passwords (Seperated with a , )"
                }
            },
            button: {
                encrypt: "Encrypt Message",
                decrypt: "Decrypt Message",
                hidden: "Hidden Message Indicator (InvisibleChat)"
            },
            tooltip: {
                hidden: "This message has a hidden message! (InvisibleChat)"
            },
            embed: {
                title: "Decrypted Message",
                footer: "Sent with InvisibleChat"
            },
            modal: {
                encrypt: {
                    title: "Encrypt Message",
                    secret: "Secret",
                    cover: "Cover (2 or more Words!!)",
                    password: "Password",
                    dontUseCover: "Don't use a Cover",
                    send: "Send",
                    cancel: "Cancel"
                },
                decrypt: {
                    title: "Decrypt Message",
                    with: "Message with Encryption",
                    password: "Password",
                    decrypt: "Decrypt",
                    cancel: "Cancel"
                }
            }
        },
        inviteDefaults: {
            name: "InviteDefaults",
            description: "Allows you to edit the default values when creating server invites.",
            option: {
                inviteDuration: {
                    label: "Invite Duration",
                    description: "Default duration for server invites",
                    thirtyMinutes: "30 Minutes",
                    oneHour: "1 Hour",
                    sixHours: "6 Hours",
                    twelveHours: "12 Hours",
                    oneDay: "1 Day",
                    sevenDays: "7 Days",
                    forever: "Forever"
                },
                maxUses: {
                    label: "Max Uses",
                    description: "Default maximum uses for server invites",
                    unlimited: "Unlimited",
                    one: "1",
                    five: "5",
                    ten: "10",
                    twentyFive: "25",
                    fifty: "50",
                    oneHundred: "100"
                },
                temporaryMembership: {
                    label: "Temporary Membership",
                    description: "Default temporary membership for server invites"
                }
            }
        },
        ircColors: {
            name: "IrcColors",
            description: "Makes username colors in chat unique, like in IRC clients",
            option: {
                lightness: {
                    label: "Lightness",
                    description: "Lightness, in %. Change if the colors are too light or too dark"
                },
                memberListColors: {
                    label: "Member List Colors",
                    description: "Replace role colors in the member list"
                },
                applyColorOnlyToUsersWithoutColor: {
                    label: "Apply Color Only to Users Without Color",
                    description: "Apply colors only to users who don't have a predefined color"
                },
                applyColorOnlyInDms: {
                    label: "Apply Color Only in DMs",
                    description: "Apply colors only in direct messages; do not apply colors in servers."
                }
            }
        },
        iRememberYou: {
            name: "IRememberYou",
            description: "Locally saves everyone you've been communicating with (including servers), in case of lose",
            section: {
                description: "Provides a list of users you have mentioned or replied to, or those who own the servers you belong to (user owner*), or are members of your guild",
                empty: "It's empty right now.",
                tooltip: "{{user}}, updated at {{updatedAtContent}}",
                owner: "Server Owner"
            },
            modal: {
                title: "Editor",
                filter: "Filter by tag, username, ID",
                button: {
                    validate: "Validate and Save",
                    cancel: "Cancel",
                    openEditor: "Open Editor",
                    resetData: "Reset Storage",
                    sure: "Are you sure?"
                }
            }
        },
        jumpTo: {
            name: "JumpTo",
            description: "Adds context menu options to jump to the start or bottom of a channel/DM",
            context: {
                top: "Jump to First Message",
                bottom: "Jump to Latest Message",
                noMessages: "No messages found from this user in this channel.",
                searchFailed: "Failed to search for messages."
            }
        },
        keepCurrentChannel: {
            name: "KeepCurrentChannel",
            description: "Attempt to navigate to the channel you were in before switching accounts or loading Discord."
        },
        keyboardSounds: {
            name: "KeyboardSounds",
            description: "Adds OperaGX or osu! sound effects when typing on your keyboard.",
            option: {
                volume: {
                    label: "Volume",
                    description: "Volume of the keyboard sounds"
                },
                soundPack: {
                    label: "Sound Pack",
                    description: "Sound pack to use for keyboard sounds",
                    operagx: "OperaGX",
                    osu: "osu!"
                }
            }
        },
        keywordNotify: {
            name: "KeywordNotify",
            description: "Sends a notification if a given message matches certain keywords or regexes",
            idHolder: "ID",
            keywordEntry: "Keyword Entry",
            regexHolder: "example|regex",
            ignoreCase: "Ignore Case",
            whiteblackLabel: "Whitelist/Blacklist",
            tab: {
                title: "Keywords",
                clearAll: "Clear All"
            },
            button: {
                addId: "Add ID",
                addKeyword: "Add Keyword Entry"
            },
            listTypeSelector: {
                blacklist: "Blacklist",
                whitelist: "Whitelist",
                placeholder: "Select a list type"
            },
            option: {
                ignoreBots: {
                    label: "Ignore Bots",
                    description: "Ignore messages from bots"
                },
                amountToKeep: {
                    label: "Amount to Keep",
                    description: "Amount of messages to keep in the log"
                },
                keywords: {
                    label: "Keywords",
                    description: "Manage keywords"
                }
            }
        },
        lastOnline: {
            name: "LastOnline",
            description: "Adds a last online indicator under usernames in your DM list and guild and GDM member list",
            unit: {
                d: "day",
                h: "hour",
                m: "minute"
            },
            online: "Online {{formattedTime}} ago"
        },
        limitMiddleClickPaste: {
            name: "LimitMiddleClickPaste",
            description: "Prevent middle click pasting either always or just when a text area is not focused.",
            option: {
                scope: {
                    label: "Scope",
                    description: "Situations in which to prevent middle click from pasting.",
                    always: "Always Prevent Middle Click Pasting",
                    focus: "Only Prevent When Text Area Not Focused"
                },
                threshold: {
                    label: "Threshold",
                    description: "Milliseconds until pasting is enabled again after a middle click."
                }
            }
        },
        listenBrainzRPC: {
            name: "ListenBrainzRPC",
            description: "Little plugin for ListenBrainz rich presence",
            about: {
                title: "About MusicBrainz API",
                description: "The MusicBrainz API does not require an API key, but it does require a {{link}}. For most, an email address should suffice.",
                userAgent: "meaningful user-agent string"
            },
            option: {
                username: {
                    label: "Username",
                    description: "ListenBrainz username"
                },
                mbContact: {
                    label: "MB Contact",
                    description: "ListenBrainz contact"
                },
                shareUsername: {
                    label: "Share Username",
                    description: "show link to ListenBrainz profile (may only be visible to other users)"
                },
                shareSong: {
                    label: "Share Song",
                    description: "show link to current song on ListenBrainz (may only be visible to other users)"
                },
                hideWithSpotify: {
                    label: "Hide with Spotify",
                    description: "hide ListenBrainz presence if Spotify is running"
                },
                hideWithActivity: {
                    label: "Hide with Activity",
                    description: "hide ListenBrainz presence if you have any other presence"
                },
                useTimeBar: {
                    label: "Use Time Bar",
                    description: "use track duration to display a time bar (must be using Listening status)"
                },
                statusName: {
                    label: "Status Name",
                    description: "custom status text"
                },
                nameFormat: {
                    label: "Name Format",
                    description: "Show name of song and artist in status name",
                    custom: "Use custom status name",
                    artistSong: "Use format 'artist - song'",
                    songArtist: "Use format 'song - artist'",
                    artistOnly: "Use artist name only",
                    songOnly: "Use song name only",
                    albumName: "Use album name (falls back to custom status text if song has no album)"
                },
                useListeningStatus: {
                    label: "Use Listening Status",
                    description: "show 'Listening to' status instead of 'Playing'"
                },
                missingArt: {
                    label: "Missing Art",
                    description: "When album or album art is missing",
                    listenbrainzLogo: "Use large ListenBrainz logo",
                    generic: "Use generic placeholder"
                },
                useLogo: {
                    label: "Use Logo",
                    description: "Show ListenBrainz logo on album art"
                }
            }
        },
        loadingQuotes: {
            name: "LoadingQuotes",
            description: "Replace Discord's loading quotes",
            option: {
                replaceEvents: {
                    label: "Replace Events",
                    description: "Should this plugin also apply during events with special event themed quotes? (e.g. Halloween)"
                },
                enablePluginPresetQuotes: {
                    label: "Enable Plugin Preset Quotes",
                    description: "Enable the quotes preset by this plugin"
                },
                enableDiscordPresetQuotes: {
                    label: "Enable Discord Preset Quotes",
                    description: "Enable Discord's preset quotes (including event quotes, during events)"
                },
                additionalQuotes: {
                    label: "Additional Quotes",
                    description: "Additional custom quotes to possibly appear, separated by the below delimiter"
                },
                additionalQuotesDelimiter: {
                    label: "Additional Quotes Delimiter",
                    description: "Delimiter for additional quotes"
                }
            }
        },
        loginWithQR: {
            name: "LoginWithQR",
            description: "Allows you to login to another device by scanning a login QR code, just like on mobile!",
            option: {
                scanQr: {
                    label: "Scan QR Code",
                    description: "Scan a QR code",
                    notEnabled: "Enable the plugin and restart your client to scan a login QR code"
                }
            },
            neverScan: "Never scan a login QR code from another user or application.",
            hold: "Hold to confirm login",
            scanning: "Scanning...",
            stopScanning: "Stop Scanning",
            usingWebcam: "Scan using webcam",
            dragDrop: "Drag and drop an image here, or click to select an image",
            orPaste: "Or paste an image from your clipboard!"
        },
        mediaPlaybackSpeed: {
            name: "MediaPlaybackSpeed",
            description: "Allows changing the (default) playback speed of media embeds",
            playbackSpeed: "Playback Speed",
            context: {
                label: "Playback speed control"
            },
            option: {
                defaultVoiceMessageSpeed: {
                    label: "Default Voice Message Speed",
                    description: "Voice messages"
                },
                defaultVideoSpeed: {
                    label: "Default Video Speed",
                    description: "Videos"
                },
                defaultAudioSpeed: {
                    label: "Default Audio Speed",
                    description: "Audios"
                }
            }
        },
        memberCount: {
            name: "MemberCount",
            description: "Shows the number of online members, total members, and users in voice channels on the server — in the member list and tooltip.",
            option: {
                toolTip: {
                    label: "Tooltip",
                    description: "Show member count on the server tooltip"
                },
                memberList: {
                    label: "Member List",
                    description: "Show member count in the member list header"
                },
                voiceActivity: {
                    label: "Voice Activity",
                    description: "Show number of users in voice channels"
                }
            },
            onlineThisChannel: "{{formattedOnlineCount}} online in this channel",
            totalMembers: "{{formattedTotalCount}} total server members",
            totalVoice: "{{formattedVoiceCount}} members in voice"
        },
        mentionAvatars: {
            name: "MentionAvatars",
            description: "Shows user avatars and role icons inside mentions",
            option: {
                showAtSymbol: {
                    label: "Show @ Symbol",
                    description: "Whether the the @ symbol should be displayed on user mentions"
                }
            }
        },
        meow: {
            name: "Meow",
            description: "Adds a chatbar button to meow in chat",
            button: {
                meow: "Meow"
            }
        },
        messageClickActions: {
            name: "MessageClickActions",
            description: "Hold Backspace and click to delete, double click to edit/reply",
            option: {
                reactEmoji: {
                    label: "React Emoji",
                    description: "Emoji to use for react actions"
                },
                singleClickAction: {
                    label: "Single Click Action",
                    description: "Action on single click (your messages)"
                },
                singleClickModifier: {
                    label: "Single Click Modifier",
                    description: "Modifier required for single click action (your messages)"
                },
                singleClickOthersAction: {
                    label: "Single Click Action (Others)",
                    description: "Action on single click (others' messages)"
                },
                singleClickOthersModifier: {
                    label: "Single Click Modifier (Others)",
                    description: "Modifier required for single click action (others' messages)"
                },
                doubleClickAction: {
                    label: "Double Click Action",
                    description: "Action on double-click (your messages)"
                },
                doubleClickOthersAction: {
                    label: "Double Click Action (Others)",
                    description: "Action on double-click (others' messages)"
                },
                doubleClickModifier: {
                    label: "Double Click Modifier",
                    description: "Modifier required for double-click action"
                },
                tripleClickAction: {
                    label: "Triple Click Action",
                    description: "Action on triple-click"
                },
                tripleClickModifier: {
                    label: "Triple Click Modifier",
                    description: "Modifier required for triple-click action"
                },
                disableInDms: {
                    label: "Disable in DMs",
                    description: "Disable all click actions in direct messages"
                },
                disableInSystemDms: {
                    label: "Disable in System DMs",
                    description: "Disable all click actions in system DMs"
                },
                clickTimeout: {
                    label: "Click Timeout",
                    description: "Timeout to distinguish double/triple clicks (ms)"
                },
                selectionHoldTimeout: {
                    label: "Selection Hold Timeout",
                    description: "Timeout to allow text selection (ms)"
                },
                quoteWithReply: {
                    label: "Quote with Reply",
                    description: "When quoting, also reply to the message"
                },
                useSelectionForQuote: {
                    label: "Use Selection for Quote",
                    description: "When quoting, use selected text if available"
                }
            },
            actions: {
                none: "None",
                delete: "Delete",
                copyLink: "Copy Link",
                copyID: "Copy ID",
                copyContent: "Copy Content",
                copyUserID: "Copy User ID",
                edit: "Edit",
                reply: "Reply",
                react: "React",
                openThread: "Open Thread",
                openTab: "Open Tab",
                quote: "Quote",
                pin: "Pin"
            },
            missingPermissions: {
                react: "Cannot react: Missing permissions",
                pin: "Cannot pin: Missing permissions",
            },
            cannotQuote: "Cannot quote this message type",
            copy: {
                messageId: "Message ID copied!",
                messageContent: "Message content copied!",
                userId: "User ID copied!"
            },
            linkCopied: "Link copied!"
        },
        messageColors: {
            name: "MessageColors",
            description: "Displays color codes like #FF0042 inside of messages",
            option: {
                renderType: {
                    label: "Render Type",
                    description: "How to render colors",
                    textColor: "Text color",
                    block: "Block nearby",
                    backgroundColor: "Background color"
                },
                enableShortHexCodes: {
                    label: "Enable Short Hex Codes",
                    description: "Enable 3 char hex-code like #39f"
                },
                blockView: {
                    label: "Block View Type",
                    description: "How to display color blocks",
                    right: "Right side",
                    left: "Left side",
                    both: "Both sides"
                }
            }
        },
        messageFetchTimer: {
            name: "MessageFetchTimer",
            description: "Shows how long it took to fetch messages for the current channel",
            option: {
                showIcon: {
                    label: "Show Icon",
                    description: "Show fetch time icon in message bar"
                },
                showMs: {
                    label: "Show Milliseconds",
                    description: "Show milliseconds in timing"
                },
                iconColor: {
                    label: "Icon Color",
                    description: "Icon color (CSS color value)"
                }
            },
            loaded: "Messages loaded in {{time}}ms ({{timeAgo}})",
            day: "day{{s}} ago",
            hour: "hour{{s}} ago",
            minute: "minute{{s}} ago",
            justNow: "just now"
        },
        messageLatency: {
            name: "MessageLatency",
            description: "Displays an indicator for messages that took ≥n seconds to send",
            day: "day",
            days: "days",
            hour: "hour",
            hours: "hours",
            minute: "minute",
            minutes: "minutes",
            second: "second",
            seconds: "seconds",
            millisecond: "millisecond",
            milliseconds: "milliseconds",
            and: "and",
            oldKotlinDetected: "User is suspected to be on an old Discord Android client.",
            ahead: "This user's clock is {{delta}} ahead.",
            delay: "This message was sent with a delay of {{delta}}.",
            delayedMessage: "Delayed Message",
            oldAndroidClient: "Old Discord Android client",
            option: {
                latency: {
                    label: "Latency",
                    description: "Threshold in seconds for latency indicator"
                },
                detectDiscordKotlin: {
                    label: "Detect Discord Kotlin",
                    description: "Detect old Discord Android clients"
                },
                showMillis: {
                    label: "Show Milliseconds",
                    description: "Show milliseconds"
                },
                ignoreSelf: {
                    label: "Ignore Self",
                    description: "Don't add indicator to your own messages"
                }
            }
        },
        messageLinkEmbeds: {
            name: "MessageLinkEmbeds",
            description: "Adds a preview to messages that link another message",
            option: {
                messageBackgroundColor: {
                    label: "Message Background Color",
                    description: "Background color for messages in rich embeds"
                },
                automodEmbeds: {
                    label: "Automod Embeds",
                    description: "Use automod embeds instead of rich embeds (smaller but less info)",
                    always: "Always use automod embeds",
                    prefer: "Prefer automod embeds, but use rich embeds if some content can't be shown",
                    never: "Never use automod embeds"
                },
                listMode: {
                    label: "List Mode",
                    description: "Whether to use ID list as blacklist or whitelist",
                    blacklist: "Blacklist",
                    whitelist: "Whitelist"
                },
                idList: {
                    label: "ID List",
                    description: "Guild/channel/user IDs to blacklist or whitelist (separate with comma)"
                },
                clearMessageCache: {
                    label: "Clear Message Cache",
                    description: "Clear the linked message cache"
                }
            },
            noContent: {
                noAttachments: "no content {{count}} embed{{s}}",
                noEmbeds: "no content {{count}} attachment{{s}}",
                both: "no content, {{attachments}} attachment{{attachmentsS}} and {{embeds}} embed{{embedsS}}"
            },
            dm: "Direct Message",
            groupDm: "Group DM",
            server: "Server"
        },
        messageLinkTooltip: {
            name: "MessageLinkTooltip",
            description: "Adds a tooltip with a message preview when hovering over message links, replies, and forwarded messages.",
            loading: "Loading...",
            option: {
                onLink: {
                    label: "On Link",
                    description: "Show tooltip when hovering over message links"
                },
                onReply: {
                    label: "On Reply",
                    description: "Show tooltip when hovering over message replies"
                },
                onForward: {
                    label: "On Forward",
                    description: "Show tooltip when hovering over forwarded messages"
                },
                display: {
                    label: "Display",
                    description: "Display style",
                    auto: "Same as message",
                    compact: "Compact",
                    cozy: "Cozy"
                }
            }
        },
        messageLogger: {
            name: "MessageLogger",
            description: "Temporarily logs deleted and edited messages.",
            removeMessage: "Remove Message History",
            removeMessageTemporary: "Remove Message (Temporary)",
            clearMessageLog: "Clear Message Log",
            modal: {
                edit: {
                    title: "Message Edit History",
                    tooltip: "This edit state was not logged so it can't be displayed."
                }
            },
            option: {
                deleteStyle: {
                    label: "Delete Style",
                    description: "The style of deleted messages",
                    text: "Red text",
                    overlay: "Red overlay"
                },
                logDeletes: {
                    label: "Log Deletes",
                    description: "Whether to log deleted messages"
                },
                collapseDeleted: {
                    label: "Collapse Deleted",
                    description: "Whether to collapse deleted messages, similar to blocked messages"
                },
                logEdits: {
                    label: "Log Edits",
                    description: "Whether to log edited messages"
                },
                inlineEdits: {
                    label: "Inline Edits",
                    description: "Whether to display edit history as part of message content"
                },
                ignoreBots: {
                    label: "Ignore Bots",
                    description: "Whether to ignore messages by bots"
                },
                ignoreSelf: {
                    label: "Ignore Self",
                    description: "Whether to ignore messages by yourself"
                },
                ignoreUsers: {
                    label: "Ignore Users",
                    description: "Comma-separated list of user IDs to ignore"
                },
                ignoreChannels: {
                    label: "Ignore Channels",
                    description: "Comma-separated list of channel IDs to ignore"
                },
                ignoreGuilds: {
                    label: "Ignore Guilds",
                    description: "Comma-separated list of guild IDs to ignore"
                },
                showEditDiffs: {
                    label: "Show Edit Diffs",
                    description: "Show visual differences between edited message versions"
                },
                separatedDiffs: {
                    label: "Separated Diffs",
                    description: "Separate addition and removals in diffs for a more readable differential"
                }
            }
        },
        messageLoggerEnhanced: {
            name: "MessageLoggerEnhanced",
            description: "Enhances the MessageLogger plugin with additional features.",
            updateImageCacheDir: "Successfully updated image cache directory.",
            updateLogsDir: "Successfully updated logs directory.",
            failedUpdate: "Failed to update directory.",
            blacklist: "Blacklist",
            whitelist: "Whitelist",
            failedToRemove: "Failed to remove message",
            successfullyImported: "Successfully imported logs",
            errorImportingLogs: "Error importing logs. Check the console for more information",
            importing: "Importing...",
            importLogs: "Import Logs",
            exporting: "Exporting...",
            exportLogs: "Export Logs",
            alert: {
                clearLogs: {
                    title: "Clear Logs",
                    body: "Are you sure you want to clear all the logs",
                    confirmText: "Clear",
                    cancel: "Cancel"
                },
                clearVisibleLogs: {
                    title: "Clear Visible Logs",
                    body: "Are you sure you want to clear {{messages}} logs",
                    confirmText: "Clear",
                    cancel: "Cancel"
                },
                cleared: "Message log database and cache cleared."
            },
            context: {
                title: "Message Logger",
                jumpToMessage: "Jump to Message",
                openUserProfile: "Open User Profile",
                copyContent: "Copy Content",
                copyUserId: "Copy User ID",
                copyMessageId: "Copy Message ID",
                copyChannelId: "Copy Channel ID",
                copyServerId: "Copy Server ID",
                deleteLog: "Delete Log",
                fromUsernameDm: "From {{username}}'s DM's",
                fromGroupDm: "From {{channelName}} Group DM",
                fromServerChannel: "From {{channelName}} in {{serverName}}",
                moveTypeTo: "Move {{type}} to {{destination}}",
                removeTypeFrom: "Remove {{type}} from {{list}}",
                openLogsFor: "Open Logs for {{name}}",
                openLogs: "Open Logs",
                removeMessage: "Remove Message (Permanent)",
                removeMessageHistory: "Remove Message History (Permanent)",
                deleteMessageHide: "Delete Message (Hide from Message Loggers)",
                addServerToBlacklist: "Add Server to Blacklist",
                addServerToWhitelist: "Add Server to Whitelist",
                removeServerFromBlacklist: "Remove Server from Blacklist",
                removeServerFromWhitelist: "Remove Server from Whitelist",
                moveServerToBlacklist: "Move Server to Blacklist",
                moveServerToWhitelist: "Move Server to Whitelist",
                addUserToBlacklist: "Add User to Blacklist",
                addUserToWhitelist: "Add User to Whitelist",
                removeUserFromBlacklist: "Remove User from Blacklist",
                removeUserFromWhitelist: "Remove User from Whitelist",
                moveUserToBlacklist: "Move User to Blacklist",
                moveUserToWhitelist: "Move User to Whitelist",
                addChannelToBlacklist: "Add Channel to Blacklist",
                addChannelToWhitelist: "Add Channel to Whitelist",
                removeChannelFromBlacklist: "Remove Channel from Blacklist",
                removeChannelFromWhitelist: "Remove Channel from Whitelist",
                moveChannelToBlacklist: "Move Channel to Blacklist",
                moveChannelToWhitelist: "Move Channel to Whitelist"
            },
            type: {
                server: "Server",
                user: "User",
                channel: "Channel"
            },
            button: {
                chooseFolder: "Choose Folder",
                browse: "Browse",
                clearLogs: "Clear All Logs",
                clearVisibleLogs: "Clear Visible Logs",
                sortOldest: "Sort Oldest First",
                sortNewest: "Sort Newest First",
                loadMore: "Load More",
                noResults: "No results in {{tab}}",
                tryOtherTabs: "Maybe try {{nextTab}} or {{lastTab}}",
                importLogs: "Import Logs"
            },
            modal: {
                title: "Filter Messages",
                deleted: "Deleted",
                edited: "Edited",
                ghostPing: "Ghost Pinged",
                empty: "Empty eh",
                importLogs: "ML Enhanced now stores logs in indexeddb. You need to import your old logs from the logs directory. Importing wont overwrite existing logs"
            },
            clear: {
                title: "Clear Logs",
                description: "Are you sure you want to clear all the logs",
                confirm: "Clear",
                cancel: "Cancel"
            },
            option: {
                saveMessages: {
                    label: "Save Messages",
                    description: "Whether to save the deleted and edited messages."
                },
                saveImages: {
                    label: "Save Images",
                    description: "Save deleted attachments."
                },
                sortNewest: {
                    label: "Sort Newest First",
                    description: "Sort logs by newest."
                },
                cacheMessagesFromServers: {
                    label: "Cache Messages From Servers",
                    description: "Usually message logger only logs from whitelisted ids and dms, enabling this would mean it would log messages from all servers as well. Note that this may cause the cache to exceed its limit, resulting in some messages being missed. If you are in a lot of servers, this may significantly increase the chances of messages being logged, which can result in a large message record and the inclusion of irrelevant messages."
                },
                ignoreBots: {
                    label: "Ignore Bots",
                    description: "Whether to ignore messages by bots"
                },
                ignoreWebhooks: {
                    label: "Ignore Webhooks",
                    description: "Whether to ignore messages by webhooks"
                },
                ignoreSelf: {
                    label: "Ignore Self",
                    description: "Whether to ignore messages by yourself"
                },
                ignoreMutedGuilds: {
                    label: "Ignore Muted Guilds",
                    description: "Messages in muted guilds will not be logged. Whitelisted users/channels in muted guilds will still be logged."
                },
                ignoreMutedCategories: {
                    label: "Ignore Muted Categories",
                    description: "Messages in channels belonging to muted categories will not be logged. Whitelisted users/channels in muted guilds will still be logged."
                },
                ignoreMutedChannels: {
                    label: "Ignore Muted Channels",
                    description: "Messages in muted channels will not be logged. Whitelisted users/channels in muted guilds will still be logged."
                },
                alwaysLogDirectMessages: {
                    label: "Always Log Direct Messages",
                    description: "Always log DMs"
                },
                alwaysLogCurrentChannel: {
                    label: "Always Log Current Channel",
                    description: "Always log current selected channel. Blacklisted channels/users will still be ignored."
                },
                permanentlyRemoveLogByDefault: {
                    label: "Permanently Remove Log by Default",
                    description: "Base MessageLogger remove log button wiil delete logs permanently"
                },
                hideMessageFromMessageLoggers: {
                    label: "Hide Message From Message Loggers",
                    description: "When enabled, a context menu button will be added to messages to allow you to delete messages without them being logged by other loggers. Might not be safe, use at your own risk."
                },
                showLogsButton: {
                    label: "Show Logs Button",
                    description: "Toggle to whenever show the toolbox or not"
                },
                showWhereMessageIsFrom: {
                    label: "Show Where Message Is From",
                    description: "Show message channel/author name and server name"
                },
                messagesToDisplayAtOnceInLogs: {
                    label: "Messages to Display at Once in Logs",
                    description: "Number of messages to display at once in logs & number of messages to load when loading more messages in logs."
                },
                hideMessageFromMessageLoggersDeletedMessage: {
                    label: "Hide Message From Message Loggers Deleted Message",
                    description: "The message content to replace the message with when using the hide message from message loggers feature."
                },
                messageLimit: {
                    label: "Message Limit",
                    description: "Maximum number of messages to save. Older messages are deleted when the limit is reached. 0 means there is no limit"
                },
                attachmentSizeLimitInMegabytes: {
                    label: "Attachment Size Limit in Megabytes",
                    description: "Maximum size of an attachment in megabytes to save. Attachments larger than this size will not be saved."
                },
                attachmentFileExtensions: {
                    label: "Attachment File Extensions",
                    description: "Comma separated list of file extensions to save. Attachments with file extensions not in this list will not be saved. Leave empty to save all attachments."
                },
                cacheLimit: {
                    label: "Cache Limit",
                    description: "Maximum number of messages to keep in the cache. Older messages are deleted when the limit is reached."
                },
                timeBasedCleanupMinutes: {
                    label: "Time Based Cleanup Minutes",
                    description: "Interval in minutes to perform time based cleanup of messages older than the message limit."
                },
                preserveCurrentChannel: {
                    label: "Preserve Current Channel",
                    description: "When enabled, messages in your currently selected channel are not affected by time-based cleanup."
                },
                whitelistedIds: {
                    label: "Whitelisted IDs",
                    description: "Whitelisted server, channel, or user IDs."
                },
                blacklistedIds: {
                    label: "Blacklisted IDs",
                    description: "Blacklisted server, channel, or user IDs."
                },
                imageCacheDir: {
                    label: "Image Cache Directory",
                    description: "Select saved images directory"
                },
                logsDir: {
                    label: "Logs Directory",
                    description: "Select logs directory"
                },
                importLogs: {
                    label: "Import Logs",
                    description: "Import Logs From File"
                },
                exportLogs: {
                    label: "Export Logs",
                    description: "Export Logs From IndexedDB"
                },
                openLogs: {
                    label: "Open Logs",
                    description: "Open Logs"
                },
                openImageCacheFolder: {
                    label: "Open Image Cache Folder",
                    description: "Opens the image cache directory"
                },
                clearLogs: {
                    label: "Clear Logs",
                    description: "Clear Logs",
                    title: "Clear logs",
                    body: "Are you sure you want to clear all logs?",
                    confirmText: "Clear",
                    cancel: "Cancel"
                }
            }
        },
        messageTags: {
            name: "MessageTags",
            description: "Allows you to save messages and to use them with a simple command.",
            notExist: "The tag **{{tagname}}** does not exist anymore! Please reload ur Discord to fix :)",
            alreadyExist: "A tag with the name **{{tagname}}** already exists!",
            sentTag: "The tag **{{tagname}}** has been sent!",
            successCreate: "The tag **{{tagname}}** has been created!",
            allTags: "All your tags:",
            noTags: "Woops! There are no tags yet, use /tag create to create one!",
            noDeleteTag: "A tag **{{tagname}}** does not exist, so it can't be deleted!",
            successDelete: "Successfully deleted the tag **{{name}}**!",
            tagPreview: "A Tag with the name **{{name}}** does not exist!",
            option: {
                clyde: {
                    label: "Clyde message on send",
                    description: "If enabled, clyde will send you an ephemeral message when a tag was used."
                },
                tagsList: {
                    label: "Tags List",
                    description: ""
                }
            },
            command: {
                tags: {
                    description: "Manage all the tags for yourself",
                    option: {
                        create: {
                            description: "Create a new tag",
                            name: "The name of the tag to trigger the response",
                            message: "The message that you will send when using this tag"
                        },
                        list: {
                            description: "List all tags from yourself"
                        },
                        delete: {
                            description: "Remove a tag from yourself",
                            name: "The name of the tag to remove"
                        },
                        preview: {
                            description: "Preview a tag without sending it publicly",
                            name: "The name of the tag to preview"
                        }
                    }
                }
            }
        },
        moreCommands: {
            name: "MoreCommands",
            description: "Echo, Lenny, Mock, and More",
            command: {
                echo: {
                    description: "Sends a message as Clyde (locally)"
                },
                lenny: {
                    description: "Sends a lenny face"
                },
                mock: {
                    description: "mOcK PeOpLe"
                },
                wordcount: {
                    description: "Counts the number of words in a message",
                    response: "The message contains {{count}} words."
                },
                flipcoin: {
                    description: "Flips a coin and returns heads or tails",
                    heads: "Heads",
                    tails: "Tails",
                    response: "The coin landed on {{result}}."
                },
                ask: {
                    description: "Ask a yes/no question and get an answer",
                    yes: "Yes",
                    no: "No",
                    maybe: "Maybe",
                    askAgain: "Ask Again Later",
                    definitelyNot: "Definitely not",
                    itIsCertain: "It is certain"
                },
                randomanimal: {
                    description: "Get a random animal picture",
                    animal: "pick your animal",
                    cat: "cat",
                    dog: "dog",
                    response: "Sorry, couldn't fetch an animal picture right now"
                },
                randomnumber: {
                    description: "Generates a random number between two values",
                    min: "Minimum value",
                    max: "Maximum value",
                    response: "Random number between {{min}} and {{max}}: {{number}}"
                },
                choose: {
                    description: "Randomly chooses from provided options",
                    option: "Comma-separated list of choices",
                    response: "I choose: {{choice}}"
                },
                systeminfo: {
                    description: "Shows system information",
                    platform: "Platform",
                    deviceType: "Device Type",
                    mobile: "Mobile",
                    desktop: "Desktop",
                    browser: "Browser",
                    cpuCores: "CPU Cores",
                    memory: "Memory",
                    screen: "Screen",
                    languages: "Languages",
                    network: "Network",
                    online: "Online",
                    offline: "Offline",
                    failedToFetch: "Failed to fetch system information",
                    unknown: "Unknown"
                },
                getuptime: {
                    description: "Gets the client's uptime",
                    response: "**Client Uptime**: {{uptime}} minutes"
                },
                gettime: {
                    description: "Gets the current time",
                    response: "Current time is {{time}}"
                },
                transform: {
                    description: "Transform your text with the specified option",
                    transformation: {
                        description: "Transformation to apply to your text",
                        lowercase: "Convert text to lowercase",
                        uppercase: "Convert text to uppercase",
                        localeLowercase: "Convert text to locale lowercase",
                        localeUppercase: "Convert text to locale uppercase",
                        same: "Stay the same"
                    },
                    repeat: "how many times to repeat",
                    reverse: "whether to reverse the text",
                    normalize: {
                        description: "Text normalization form",
                        nfc: "Normalization Form C (NFC)",
                        nfd: "Normalization Form D (NFD)",
                        nfkc: "Normalization Form KC (NFKC)",
                        nfkd: "Normalization Form KD (NFKD)"
                    },
                    text: "Transform this text"
                }
            }
        },
        moreKaomoji: {
            name: "MoreKaomoji",
            description: "Adds more Kaomoji to discord. ヽ(´▽`)/"
        },
        moreQuickReactions: {
            name: "MoreQuickReactions",
            description: "Improves the quick react buttons in the message context menu.",
            option: {
                reactionCount: {
                    label: "Reaction Count",
                    description: "Number of reactions (0-42)"
                },
                frequentEmojis: {
                    label: "Frequent Emojis",
                    description: "Use frequently used emojis instead of favourite emojis"
                },
                rows: {
                    label: "Rows",
                    description: "Rows of quick reactions to display"
                },
                columns: {
                    label: "Columns",
                    description: "Columns of quick reactions to display"
                },
                compactMode: {
                    label: "Compact Mode",
                    description: "Scales the buttons to 75% of their original scale, whilst increasing the inner emoji to 125% scale. Emojis will be 93.75% of the original size. Recommended to have a minimum of 5 columns"
                },
                scroll: {
                    label: "Scroll",
                    description: "Enable scrolling the list of emojis"
                }
            }
        },
        morse: {
            name: "Morse",
            description: "A slash command to translate to/from morse code.",
            command: {
                morse: {
                    description: "Translate to or from Morse code",
                    message: "Text to convert"
                }
            }
        },
        moyai: {
            name: "Moyai",
            description: "🗿🗿🗿🗿🗿🗿🗿🗿",
            option: {
                volume: {
                    label: "Volume",
                    description: "Volume of the 🗿🗿🗿"
                },
                quality: {
                    label: "Quality",
                    description: "Quality of the 🗿🗿🗿",
                    normal: "Normal",
                    hd: "HD"
                },
                triggerWhenUnfocused: {
                    label: "Trigger When Unfocused",
                    description: "Trigger the 🗿 even when the window is unfocused"
                },
                ignoreBots: {
                    label: "Ignore Bots",
                    description: "Ignore messages from bots"
                },
                ignoreBlocked: {
                    label: "Ignore Blocked Users",
                    description: "Ignore messages from blocked users"
                }
            }
        },
        musicControls: {
            name: "MusicControls",
            description: "Music Controls and Lyrics for multiple services",
            option: {
                SpotifySectionTitle: {
                    label: "Spotify"
                },
                showSpotifyControls: {
                    label: "Show Spotify Controls",
                    description: "Show music controls for Spotify"
                },
                showSpotifyLyrics: {
                    label: "Show Spotify Lyrics",
                    description: "Show lyrics for Spotify"
                },
                useSpotifyUris: {
                    label: "Use Spotify URIs",
                    description: "Open Spotify URIs instead of Spotify URLs. Will only work if you have Spotify installed and might not work on all platforms"
                },
                previousButtonRestartsTrack: {
                    label: "Previous Button Restarts Track",
                    description: "Restart currently playing track when pressing the previous button if playtime is >3s"
                },
                TidalSectionTitle: {
                    label: "Tidal"
                },
                showTidalControls: {
                    label: "Show Tidal Controls",
                    description: "Show music controls for Tidal"
                },
                showTidalLyrics: {
                    label: "Show Tidal Lyrics",
                    description: "Show lyrics for Tidal"
                },
                YtmSectionTitle: {
                    label: "YouTube Music",
                    description: "{{app}} is required for these settings"
                },
                showYoutubeMusicControls: {
                    label: "Show YouTube Music Controls",
                    description: "Show music controls for YouTube Music"
                },
                YoutubeMusicApiUrl: {
                    label: "YouTube Music API URL",
                    description: "The URL for the YouTube Music API server you are using"
                },
                hoverControls: {
                    label: "Hover Controls",
                    description: "Show controls on hover"
                },
                ShowMusicNoteOnNoLyrics: {
                    label: "Show Music Note On No Lyrics",
                    description: "Show a music note icon when no lyrics are found"
                },
                LyricsPosition: {
                    label: "Lyrics Position",
                    description: "Position of the lyrics panel",
                    above: "Above Player(s)",
                    below: "Below  Player(s)"
                },
                LyricsProvider: {
                    label: "Lyrics Provider",
                    description: "Where lyrics are fetched from",
                    spotify: "Spotify (Musixmatch)",
                    LRCLIB: "LRCLIB"
                },
                TranslateTo: {
                    label: "Translate To",
                    description: "Translate lyrics to - Changing this will clear existing translations",
                    cleared: "Translation Cleared"
                },
                LyricsConversion: {
                    label: "Lyrics Conversion",
                    description: "Automatically translate or romanize lyrics",
                    none: "None",
                    translate: "Translate",
                    romanize: "Romanize"
                },
                FallbackProvider: {
                    label: "Fallback Provider",
                    description: "When a lyrics provider fails, try other providers"
                },
                ShowFailedToasts: {
                    label: "Show Failed Toasts",
                    description: "Show toasts when lyrics fail to load"
                },
                PurgeLyricsCache: {
                    label: "Purge Lyrics Cache",
                    description: "Clear all cached lyrics and translations",
                    button: "Purge Cache",
                    cacheLyricsPurged: "Lyrics cache purged"
                }
            },
            context: {
                spotify: {
                    label: "Spotify Lyrics Menu",
                    type: "Spotify {{type}} Menu",
                    copy: "Copy {{type}} Name",
                    link: "Copy {{type}} Link",
                    open: "Open {{type}} in Spotify",
                    album: "Spotify Album Menu"
                },
                tidal: {
                    label: "Tidal Lyrics Menu",
                    lyrics: "Tidal Lyrics",
                    type: "Tidal {{name}} Menu",
                    copy: "Copy {{name}} Name",
                    open: "Open {{name}} in Tidal",
                    album: "Tidal Album Menu"
                },
                ytm: {
                    type: "Youtube Music {{name}} Menu",
                    copy: "Copy {{name}} Name",
                    open: "Open {{name}} in Youtube Music",
                    album: "Youtube Music Album Menu",
                    muted: "Muted"
                },
                lyrics: {
                    provider: "Lyrics Provider",
                    saved: "saved",
                    notFound: "No synced lyrics found"
                },
                copy: {
                    currentLyrics: "Copy current lyrics"
                }
            },
            alert: {
                lyricCopied: "Lyric copied to clipboard!",
                noLyrics: "No lyrics",
                noLyricsTo: "No lyrics to {{translated}}",
                translate: "translate",
                romanize: "romanize",
                lyricsFetchFailed: "Lyrics fetch failed",
                failedToFetchLyrics: "Failed to fetch {{translated}}",
                translation: "translation",
                romanization: "romanization",
                failedToFetchTranslation: "Failed to fetch {{translated}} lyrics"
            },
            modal: {
                install: {
                    title: "How to install",
                    install: "Install {{link}} from here, then go to TidalLuna settings → Plugin stores → Install @vmohammad/api",
                    tidaluna: "TidaLuna"
                },
                player: {
                    noPlaying: "No track playing",
                    artist: "Artist:",
                    album: "Album:",
                    noLyrics: "No lyrics available :(",
                    progress: "Progress",
                    totalDuration: "Total Duration"
                },
                type: {
                    song: "Song",
                    artist: "Artist",
                    album: "Album"
                },
                album: {
                    open: "Open Album",
                    viewCover: "View Album Cover",
                    volume: "Volume",
                    image: "Album Image"
                }
            },
            provider: {
                lrclib: "LRCLIB",
                spotify: "Spotify",
                translated: "Translated",
                romanized: "Romanized",
                none: "None"
            },
            error: {
                failed: "Failed to render Modal :(",
                checkConsole: "Check the console for errors",
                invalidUrlCustomApi: "Invalid URL format for Custom Api Server URL"
            }
        },
        mutualGroupDMs: {
            name: "MutualGroupDMs",
            description: "Shows mutual group dms in profiles",
            no: "No Mutual Groups",
            mutualGroup: "{{count}} Mutual Group{{s}}",
            members: "Members",
            noGroup: "No group dms in common",
            header: "Mutual Groups"
        },
        newGuildSettings: {
            name: "NewGuildSettings",
            description: "Automatically mute new servers and change various other settings upon joining",
            context: {
                apply: "Apply NewGuildSettings"
            },
            option: {
                guild: {
                    label: "Mute Guild",
                    description: "Mute Guild automatically"
                },
                messages: {
                    label: "Server Notification Settings",
                    description: "Server Notification Settings",
                    all: "All messages",
                    mentions: "Only @mentions",
                    nothing: "Nothing",
                    default: "Server default"
                },
                everyone: {
                    label: "Suppress @everyone and @here",
                    description: "Suppress @everyone and @here"
                },
                role: {
                    label: "Suppress All Role @mentions",
                    description: "Suppress All Role @mentions"
                },
                highlights: {
                    label: "Suppress Highlights",
                    description: "Suppress Highlights automatically"
                },
                events: {
                    label: "Mute New Events",
                    description: "Mute New Events automatically"
                },
                showAllChannels: {
                    label: "Show All Channels",
                    description: "Show all channels automatically"
                },
                mobilePush: {
                    label: "Mute Mobile Push Notifications",
                    description: "Mute Mobile Push Notifications automatically"
                }
            }
        },
        newPluginsManager: {
            name: "NewPluginsManager",
            description: "Utility that notifies you when new plugins are added to Plexcord",
            modal: {
                title: "New Plugins and Settings",
                tooltip: "Dismiss for this session",
                dontShowAgain: "Don't show this again"
            }
        },
        noBlockedMessages: {
            name: "NoBlockedMessages",
            description: "Hides all blocked/ignored messages from chat completely",
            option: {
                ignoreMessages: {
                    label: "Ignore Messages",
                    description: "Completely ignores incoming messages from blocked and ignored (if enabled) users"
                },
                applyToIgnoredUsers: {
                    label: "Apply to Ignored Users",
                    description: "Additionally apply to 'ignored' users"
                }
            }
        },
        noBulletPoints: {
            name: "NoBulletPoints",
            description: "Stops you from typing markdown bullet points (stinky)"
        },
        noDeepLinks: {
            name: "DisableDeepLinks",
            description: "Disables Discord's stupid deep linking feature which tries to force you to use their Desktop App"
        },
        noDeleteSafety: {
            name: "NoDeleteSafety",
            description: "Removes the 'enter server name' requirement when deleting a server",
            option: {
                confirmModal: {
                    label: "Confirm Modal",
                    description: "Should a 'are you sure you want to delete' modal be shown?"
                }
            },
            modal: {
                title: "Delete server?",
                body: "It's permanent, if that wasn't obvious.",
                confirm: "Delete",
                cancel: "Cancel"
            }
        },
        noDevtoolsWarning: {
            name: "NoDevtoolsWarning",
            description: "Disables the 'HOLD UP' banner in the console. As a side effect, also prevents Discord from hiding your token, which prevents random logouts."
        },
        noF1: {
            name: "NoF1",
            description: "Disables F1 help bind."
        },
        noMaskedUrlPaste: {
            name: "NoMaskedUrlPaste",
            description: "Pasting a link while having text selected will not paste as masked URL"
        },
        noMirroredCamera: {
            name: "NoMirroredCamera",
            description: "Prevents the camera from being mirrored on your screen"
        },
        noModalAnimation: {
            name: "NoModalAnimation",
            description: "Remove the 300ms long animation when opening or closing modals"
        },
        noMosaic: {
            name: "NoMosaic",
            description: "Removes Discord image mosaic",
            option: {
                inlineVideo: {
                    label: "Inline Video",
                    description: "Play videos without carousel modal"
                }
            }
        },
        noNitroUpsell: {
            name: "NoNitroUpsell",
            description: "Removes ALL of Discord's nitro upsells by tricking the client into thinking you have nitro."
        },
        noOnboarding: {
            name: "NoOnboarding",
            description: "Bypasses Discord's onboarding process for quicker server entry."
        },
        noOnboardingDelay: {
            name: "NoOnboardingDelay",
            description: "Skips the slow and annoying onboarding delay"
        },
        noPendingCount: {
            name: "NoPendingCount",
            description: "Removes the ping count of incoming friend requests, message requests, and nitro offers.",
            option: {
                hideFriendRequestsCount: {
                    label: "Hide Friend Request Count",
                    description: "Hide incoming friend requests count"
                },
                hideMessageRequestsCount: {
                    label: "Hide Message Requests Count",
                    description: "Hide message requests count"
                },
                hidePremiumOffersCount: {
                    label: "Hide Premium Offers Count",
                    description: "Hide nitro offers count"
                }
            }
        },
        noProfileThemes: {
            name: "NoProfileThemes",
            description: "Completely removes Nitro profile themes from everyone but yourself."
        },
        noReplyMention: {
            name: "NoReplyMention",
            description: "Disables reply pings by default",
            option: {
                userList: {
                    label: "User List",
                    description: "List of users to allow or exempt pings for (separated by commas or spaces)"
                },
                roleList: {
                    label: "Role List",
                    description: "List of roles to allow or exempt pings for (separated by commas or spaces)"
                },
                shouldPingListed: {
                    label: "Should Ping Listed",
                    description: "Behaviour",
                    dontPing: "Do not ping the listed users / roles",
                    onlyPing: "Only ping the listed users / roles"
                },
                inverseShiftReply: {
                    label: "Inverse Shift Reply",
                    description: "Invert Discord's shift replying behaviour (enable to make shift reply mention user)"
                }
            }
        },
        normalizeMessageLinks: {
            name: "NormalizeMessageLinks",
            description: "Strip canary/ptb from message links"
        },
        noRPC: {
            name: "NoRPC",
            description: "Disables Discord Rich Presence"
        },
        noServerEmojis: {
            name: "NoServerEmojis",
            description: "Do not show server emojis in the autocomplete menu.",
            option: {
                shownEmojis: {
                    label: "Shown Emojis",
                    description: "Choose which emojis to show in the autocomplete menu",
                    onlyUnicode: "Only unicode emojis",
                    currentServer: "Unicode emojis and server emojis from current server",
                    all: "Unicode emojis and all server emojis (Discord default)"
                }
            }
        },
        noSystemBadge: {
            name: "NoSystemBadge",
            description: "Disables the taskbar and system tray unread count badge."
        },
        notificationTitle: {
            name: "NotificationTitle",
            description: "Makes desktop notifications more informative"
        },
        notificationVolume: {
            name: "NotificationVolume",
            description: "Set custom volume for Discord notifications",
            option: {
                notificationVolume: {
                    label: "Notification Volume",
                    description: "Notification volume"
                }
            }
        },
        noTypingAnimation: {
            name: "NoTypingAnimation",
            description: "Disables the typing animation in chat"
        },
        noUnblockToJump: {
            name: "NoUnblockToJump",
            description: "Allows you to jump to messages of blocked or ignored users and likely spammers without unblocking them."
        },
        onePingPerDM: {
            name: "OnePingPerDM",
            description: "If unread messages are sent by a user in DMs multiple times, you'll only receive one audio ping.",
            option: {
                channelToAffect: {
                    label: "Channel to Affect",
                    description: "Select the type of DM for the plugin to affect",
                    both: "Both",
                    user: "User DMs",
                    group: "Group DMs"
                },
                allowMentions: {
                    label: "Allow Mentions",
                    description: "Receive audio pings for @mentions"
                },
                allowEveryone: {
                    label: "Allow Everyone",
                    description: "Receive audio pings for @everyone and @here in group DMs"
                },
                ignoreUsers: {
                    label: "Ignore Users",
                    description: "User IDs (comma + space) whose pings should NEVER be throttled"
                },
                alwaysPlaySound: {
                    label: "Always Play Sound",
                    description: "Play the message notification sound even when its disabled"
                }
            }
        },
        openInApp: {
            name: "OpenInApp",
            description: "Open links in their respective apps instead of your browser",
            option: {
                spotify: {
                    label: "Spotify",
                    description: "Open Spotify links in the Spotify app"
                },
                steam: {
                    label: "Steam",
                    description: "Open Steam links in the Steam app"
                },
                epic: {
                    label: "Epic Games",
                    description: "Open Epic Games links in the Epic Games Launcher"
                },
                tidal: {
                    label: "Tidal",
                    description: "Open Tidal links in the Tidal app"
                },
                itunes: {
                    label: "iTunes",
                    description: "Open Apple Music links in the iTunes app"
                },
                vrcx: {
                    label: "VRChat",
                    description: "Open VRChat links in the VRCX app"
                }
            },
            notification: {
                open: "Opened link in native app"
            }
        },
        overrideForumDefaults: {
            name: "OverrideForumDefaults",
            description: "Allows you to override default forum layout/sort order. you can still change it on a per-channel basis",
            option: {
                defaultLayout: {
                    label: "Default Tags",
                    description: "Which layout to use as default",
                    list: "List",
                    gallery: "Gallery"
                },
                defaultSortOrder: {
                    label: "Default Sort Order",
                    description: "Which sort order to use as default",
                    recentlyActive: "Recently Active",
                    datePosted: "Date Posted"
                }
            }
        },
        partyMode: {
            name: "PartyMode",
            description: "Allows you to use party mode cause the party never ends ✨",
            option: {
                superIntensePartyMode: {
                    label: "Super Intense Party Mode",
                    description: "Party intensity",
                    normal: "Normal",
                    better: "Better",
                    projectX: "Project X"
                }
            }
        },
        pauseInvitesForever: {
            name: "PauseInvitesForever",
            description: "Brings back the option to pause invites indefinitely that stupit Discord removed.",
            pauseIndefinitely: "Pause Indefinitely"
        },
        permissionFreeWill: {
            name: "PermissionFreeWill",
            description: "Disables the client-side restrictions for channel permission management.",
            option: {
                lockout: {
                    label: "Lockout",
                    description: "Bypass the permission lockout prevention ('Pretty sure you don't want to do this')"
                },
                onboarding: {
                    label: "Onboarding",
                    description: "Bypass the onboarding requirements ('Making this change will make your server incompatible [...]')"
                }
            }
        },
        permissionsViewer: {
            name: "PermissionsViewer",
            description: "View the permissions a user or channel has, and the roles of a server",
            view: "View Permissions",
            option: {
                permissionsSortOrder: {
                    label: "Permissions Sort Order",
                    description: "The sort method used for defining which role grants an user a certain permission",
                    highest: "Highest Role",
                    lowest: "Lowest Role"
                }
            },
            icon: {
                denied: "Denied",
                allowed: "Allowed",
                notOverwritten: "Not Overwritten"
            },
            context: {
                permissions: "Permissions"
            },
            modal: {
                title: "Permissions",
                noPermissions: "No permissions to display!",
                owner: "owner",
                grantedBy: "Granted by",
                serverOwner: "Server Owner",
                ownerRole: "Owner",
                sortingBy: "Sorting by {{method}}",
                highest: "Highest Role",
                lowest: "Lowest Role",
                details: "Role Details"
            }
        },
        petpet: {
            name: "PetPet",
            description: "Adds a /petpet slash command to create headpet gifs from any image",
            command: {
                petpet: {
                    description: "Create a petpet gif. You can only specify one of the image options",
                    delay: "The delay between each frame. Defaults to 20.",
                    resolution: "Resolution for the gif. Defaults to 120. If you enter an insane number and it freezes Discord that's your fault.",
                    image: "Image attachment to use",
                    url: "URL to fetch image from",
                    user: "User whose avatar to use as image",
                    noServerPfp: "Use the normal avatar instead of the server specific one when using the 'user' option",
                    error: {
                        noImage: "No Image specified!",
                        delayTooLow: "Delay must be at least 20.",
                    }
                }
            },
            error: {
                uploadNotImage: "Upload is not an image",
                fetchUserFailed: "Failed to fetch user. Check the console for more info.",
                fetchImageFailed: "An error occurred while loading {{url}}. Check the console for more info."
            }
        },
        pictureInPicture: {
            name: "PictureInPicture",
            description: "Adds picture in picture to videos (next to the Download button)",
            tooltip: "Toggle Picture in Picture",
            option: {
                loop: {
                    label: "Loop",
                    description: "Whether to make the PiP video loop or not"
                }
            }
        },
        pinDMs: {
            name: "PinDMs",
            description: "Allows you to pin private channels to the top of your DM list. To pin/unpin or re-order pins, right click DMs",
            context: {
                category: {
                    label: "Pin DMs Category Menu",
                    edit: "Edit Category",
                    up: "Move Up",
                    down: "Move Down",
                    delete: "Delete Category",
                    unnamed: "uh oh"
                },
                pin: {
                    label: "Pin DM",
                    addCategory: "Add Category"
                },
                unPin: {
                    label: "Unpin DM",
                    move: "Move to Category"
                }
            },
            option: {
                pinOrder: {
                    label: "Pin Order",
                    description: "Which order should pinned DMs be displayed in?",
                    lastMessage: "Most recent message",
                    custom: "Custom (right click channels to reorder)"
                },
                canCollapseDmSection: {
                    label: "Collapsible Pinned Section",
                    description: "Allow uncategorised DMs section to be collapsable"
                },
                dmSectionCollapsed: {
                    label: "DM Section Collapsed",
                    description: "Collapse DM section"
                },
                userBasedCategoryList: {
                    label: "User Based Category List",
                    description: ""
                }
            },
            modal: {
                category: {
                    pin: "Pin Category",
                    edit: "Edit Category",
                    new: "New Category",
                    name: "Name",
                    color: "Color",
                    save: "Save",
                    create: "Create"
                }
            }
        },
        pingNotifications: {
            name: "PingNotifications",
            description: "Customizable notifications with improved mention formatting",
            option: {
                friends: {
                    label: "Friends",
                    description: "Notify when friends send messages in servers"
                },
                mentions: {
                    label: "Mentions",
                    description: "Notify when someone @mentions you directly"
                },
                dms: {
                    label: "DMs",
                    description: "Notify for direct messages (DMs)"
                },
                showInActive: {
                    label: "Show In Active",
                    description: "Show notifications even for currently active channel"
                },
                ignoreMuted: {
                    label: "Ignore Muted",
                    description: "Skip notifications from muted servers, channels, or users"
                }
            },
            unknown: "Unknown",
            dm: "DM",
            groupDM: "Group DM",
            title: "{{username}} in {{channelName}}"
        },
        pinIcon: {
            name: "PinIcon",
            description: "Adds a pin icon to pinned messages"
        },
        plainFolderIcon: {
            name: "PlainFolderIcon",
            description: "Dont show the small guild icons in folders"
        },
        platformIndicators: {
            name: "PlatformIndicators",
            description: "Adds platform indicators (Desktop, Mobile, Web...) to users",
            embeddedTooltip: "Console",
            option: {
                list: {
                    label: "List",
                    description: "Show indicators in the member list"
                },
                badges: {
                    label: "Badges",
                    description: "Show indicators in user profiles, as badges"
                },
                messages: {
                    label: "Messages",
                    description: "Show indicators inside messages"
                },
                colorMobileIndicator: {
                    label: "Color Mobile Indicator",
                    description: "Whether to make the mobile indicator match the color of the user status."
                },
                showBots: {
                    label: "Show Bots",
                    description: "Whether to show platform indicators on bots"
                }
            }
        },
        platformSpoofer: {
            name: "PlatformSpoofer",
            description: "Spoof what platform or device you're on",
            about: "We can't guarantee this plugin won't get you warned or banned.",
            platform: {
                desktop: "Discord Client",
                web: "Discord Web",
                ios: "Discord iOS",
                android: "Discord Android",
                xbox: "Discord Embedded",
                playstation: "Discord Embedded"
            },
            option: {
                platform: {
                    label: "Platform",
                    description: "What platform to show up as on",
                    desktop: "Desktop",
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
            description: "Adds a button to the AppBar that houses Plexcord quick actions",
            tooltip: "Plexcord Toolbox",
            context: {
                openLog: "Open Notification Log",
                enableQuickCSS: "Enable QuickCSS",
                openQuickCSS: "Edit QuickCSS",
                openSettings: "Open Settings",
                manageThemes: "Manage Themes"
            },
            option: {
                showPluginMenu: {
                    label: "Show Plugin Menu",
                    description: "Show the plugin menu in the Plexcord Toolbox"
                }
            }
        },
        previewMessage: {
            name: "PreviewMessage",
            description: "Lets you preview your message before sending it.",
            tooltip: "Preview Message"
        },
        questify: {
            name: "Questify",
            description: "Enhance your Quest experience with a suite of features, or disable them entirely if they're not your thing.",
            quests: "Quests",
            context: {
                quest: {
                    label: "Quest Button Menu",
                    ignore: "Mark All Ignored",
                    reset: "Reset Ignored List",
                    fetch: "Fetch Quests",
                    markAsIgnored: "Mark as Ignored",
                    unmarkAsIgnored: "Unmark as Ignored",
                    stopAuto: "Stop Auto-Complete",
                    copyQuestID: "Copy Quest ID",
                    startAuto: "Start Auto-Complete"
                }
            },
            settings: {
                questButton: {
                    title: "Quest Button",
                    description: "Show a Quest button in the server list with an optional indicator for unclaimed Quests.",
                    leftClick: "Left Click Action",
                    middleClick: "Middle Click Action",
                    rightClick: "Right Click Action",
                    visibility: "Button Visibility",
                    unclaimedIndicator: "Unclaimed Indicator",
                    badgeColor: "Badge Color",
                    rewardDisplay: "Reward Display",
                    includedRewardTypes: "Included Reward Types",
                    includedRewardTypesDesc: "Only count Quests with these reward types as unclaimed when determining button visibility, badge count, and when playing the alert sound.",
                    selectRewardTypes: "Select which reward types to include in the unclaimed count...",
                    noRewardType: "There's no supported Quest feature by that name.",
                    default: "Default",
                    disable: "Disable"
                },
                questFeatures: {
                    title: "Quest Features",
                    description: "Modify specific Quest features.",
                    popupWarning: "The {{disablePopup}} option will be ignored for completed Quests and Quest progress tracking.",
                    videoQuestInfo: "The {{completeVideo}} option will wait for the duration of the Video Quest and mark it as completed automatically.",
                    gameQuestInfo: "Similarly, the {{completeGame}} option will wait for the duration of the Game Quest and mark it as completed automatically. This option is only supported on the official desktop client.",
                    manualStartWarning: "You still must start the Quests manually. The first click will start the Quests in the background. For Video Quests, subsequent clicks will open the video modal as normal. To abort the Quests, you can open the context menu on the Quest tile and select {{stopAuto}}.",
                    tosWarning: "Using either of those options is against Discord's TOS. Use at your own risk.",
                    selectFeatures: "Select which Quest features to modify.",
                    disablePopup: "Disable Quest Popup Above Account Panel",
                    completeVideo: "Complete Video Quests in Background",
                    completeGame: "Complete Play Game Quests in Background",
                    stopAuto: "Stop Auto-Complete"
                },
                restyleQuests: {
                    title: "Restyle Quests",
                    description: "Highlight Quests with optional theme colors for visibility.",
                    precedenceNote: "Claimed and Expired Quest styles will take precedence even if a Quest is ignored.",
                    gradientStyle: "Gradient Style",
                    assetPreload: "Asset Preload",
                    unclaimed: "Unclaimed",
                    claimed: "Claimed",
                    ignored: "Ignored",
                    expired: "Expired",
                    intenseGradient: "Intense Restyle Gradient",
                    defaultGradient: "Default Restyle Gradient",
                    blackGradient: "Subtle Black Gradient",
                    noGradient: "No Gradient",
                    loadAllAssets: "Load All Quest Assets On Page Load",
                    loadDuringScroll: "Load Quest Assets During Page Scroll"
                },
                reorderQuests: {
                    title: "Reorder Quests",
                    description: "Sort Quests by their status. Applied when the \"Questify\" sort option is selected on the Quest page.",
                    formatNote: "Comma-separated list must contain all of: {{items}}.",
                    placeholder: "You must include all of UNCLAIMED, CLAIMED, IGNORED, EXPIRED",
                    invalidFormat: "Invalid format.",
                    unclaimedSubsort: "Unclaimed Subsort",
                    claimedSubsort: "Claimed Subsort",
                    ignoredSubsort: "Ignored Subsort",
                    expiredSubsort: "Expired Subsort",
                    addedNewest: "Added (Newest)",
                    addedOldest: "Added (Oldest)",
                    expiredRecent: "Expired (Most Recent)",
                    expiredLeast: "Expired (Least Recent)",
                    expiringSoon: "Expiring (Soonest)",
                    expiringLate: "Expiring (Latest)",
                    claimedRecent: "Claimed (Most Recent)",
                    claimedLeast: "Claimed (Least Recent)",
                    ignoredQuestProfile: "Ignored Quest Profile",
                    sharedProfile: "Shared: All accounts on this client share ignores.",
                    privateProfile: "Private: All accounts on this client have separate ignores.",
                    rememberSort: "Remember Sort Choice",
                    rememberFilter: "Remember Filter Choice",
                    yes: "Yes",
                    no: "No",
                    rememberNote: "This sort and filter choice refers to the built-in sort and filter options on the Quest page. The custom sorting above is only applied when the \"Questify\" sort option is selected on the Quest page. If remembering is disabled, the sort or filter options will be reset each time you open the Quest page."
                },
                fetchingQuests: {
                    title: "Fetching Quests",
                    description: "Configure how often to fetch Quests from Discord and set up alerts for new Quests.",
                    defaultBehavior: "By default, Discord only fetches Quests on load and when visiting the Quests page. This means that without a fetch interval defined below, this plugin will become unaware of new Quests added throughout the day.",
                    requirement: "This relies on the Quest Button being enabled and set to either {{unclaimed}}, or set to {{always}} with unclaimed {{pill}}, {{badge}}, or {{both}} indicators enabled. Otherwise, there is no reason to periodically fetch Quests.",
                    blockWarning: "Also, if {{fetchingQuests}} is blocked in the {{questFeatures}} setting, this will not work.",
                    fetchInterval: "Fetch Interval",
                    alertSound: "Alert Sound",
                    intervalPlaceholder: "Select or type an interval between 30 minutes and 12 hours.",
                    intervalFeedback: "Intervals must be between 30 minutes and 12 hours.",
                    soundPlaceholder: "Select a sound or provide a custom sound URL.",
                    soundFeedback: "Sound not found, or URL is not from a supported domain.",
                    disabled: "Disabled",
                    minutes: "Minutes",
                    minute: "Minute",
                    hours: "Hours",
                    hour: "Hour",
                    thirtyMinutes: "30 Minutes",
                    oneHour: "1 Hour",
                    threeHours: "3 Hours",
                    sixHours: "6 Hours",
                    twelveHours: "12 Hours",
                    customSound: "CUSTOM SOUND"
                },
                disableOptions: {
                    everything: "Disable Everything",
                    discovery: "Disable Discovery Tab",
                    dms: "Disable Quests Tab in DMs",
                    fetching: "Disable Fetching Quests",
                    popup: "Disable Popup Above Account Panel",
                    sponsored: "Disable Sponsored Banner on Quests Page",
                    badge: "Disable Badge on User Profiles",
                    inventory: "Disable Gift Inventory Relocation Notice",
                    friendsList: "Friends List Active Now Promotion",
                    membersList: "Members List Actively Playing Icons",
                    gameQuests: "Complete Play Game/Activity Quests in Background",
                    videoQuests: "Complete Watch Video Quests in Background",
                    achievementQuests: "Complete Task in Activity Quests in Background",
                    mobileDesktop: "Make Mobile Quests Desktop Compatible",
                    notifyOnComplete: "Notify on Quest Completion"
                },
                options: {
                    always: "Always",
                    unclaimed: "Unclaimed",
                    never: "Never",
                    pill: "Pill",
                    badge: "Badge",
                    both: "Both",
                    none: "None",
                    openQuests: "Open Quests",
                    contextMenu: "Context Menu",
                    pluginSettings: "Plugin Settings",
                    nothing: "Nothing",
                    orbs: "Orbs",
                    nitroCodes: "Nitro Codes",
                    rewardCodes: "Reward Codes",
                    inGameItems: "In Game Items",
                    profileCollectibles: "Profile Collectibles"
                }
            },
            option: {
                disableQuests: {
                    description: "Select which Quest features to disable."
                },
                disableQuestsEverything: {
                    label: "Disable Everything",
                    description: "Disable all Quest features."
                },
                disableQuestsFetchingQuests: {
                    label: "Disable Fetching Quests",
                    description: "Disable fetching Quests from Discord."
                },
                disableQuestsDirectMessagesTab: {
                    label: "Disable Quests Tab in DMs",
                    description: "Disable Quest tab in the Direct Messages page."
                },
                disableQuestsDiscoveryTab: {
                    label: "Disable Discovery Tab",
                    description: "Disable Quest tab in the Discovery page."
                },
                disableQuestsPageSponsoredBanner: {
                    label: "Disable Sponsored Banner on Quests Page",
                    description: "Disable the sponsored banner on the Quest page."
                },
                disableQuestsPopupAboveAccountPanel: {
                    label: "Disable Popup Above Account Panel",
                    description: "Disable the Quest popup above your account panel."
                },
                disableQuestsBadgeOnUserProfiles: {
                    label: "Disable Badge On User Profiles",
                    description: "Disable the Quest badge on user profiles."
                },
                disableQuestsGiftInventoryRelocationNotice: {
                    label: "Disable Gift Inventory Relocation Notice",
                    description: "Disable the gift inventory Quest relocation notice."
                },
                disableFriendsListActiveNowPromotion: {
                    label: "Disable Friends List Active Now Promotion",
                    description: "Disable the promotion of Quests for games played by friends."
                },
                disableMembersListActivelyPlayingIcons: {
                    label: "Disable Members List Actively Playing Icons",
                    description: "Disable the actively playing icons in the members list."
                },
                makeMobileQuestsDesktopCompatible: {
                    label: "Make Mobile Quests Desktop Compatible",
                    description: "Make mobile-only Quests compatible with desktop."
                },
                completeVideoQuestsInBackground: {
                    label: "Complete Video Quests In Background",
                    description: "Complete Video Quests in the background after the video duration has passed."
                },
                completeGameQuestsInBackground: {
                    label: "Complete Game Quests In Background",
                    description: "Complete Game Quests in the background after the game duration has passed."
                },
                completeAchievementQuestsInBackground: {
                    label: "Complete Task In Activity Quests In Background",
                    description: "Complete Achievement in Activity Quests in the background."
                },
                notifyOnQuestComplete: {
                    label: "Notify On Quest Completion",
                    description: "Show a notification when a Quest is completed automatically."
                },
                questButton: {
                    description: "Show a Quest button in the server list."
                },
                questButtonDisplay: {
                    label: "Quest Button Display",
                    description: "Which display type to use for the Quest button in the server list."
                },
                questRewardIncludeRewardCode: {
                    label: "Include Reward Codes",
                    description: "Include Quests with Reward Codes when displaying Quest counts."
                },
                questRewardIncludeNitroCode: {
                    label: "Include Nitro Codes",
                    description: "Include Quests with Nitro Codes when displaying Quest counts."
                },
                questRewardIncludeInGame: {
                    label: "Include In-Game Rewards",
                    description: "Include Quests with In-Game rewards when displaying Quest counts."
                },
                questRewardIncludeCollectibles: {
                    label: "Include Collectibles",
                    description: "Include Quests with Collectibles when displaying Quest counts."
                },
                questRewardIncludeOrbs: {
                    label: "Include Orbs",
                    description: "Include Quests with Orbs when displaying Quest counts."
                },
                questButtonUnclaimed: {
                    label: "Quest Button Unclaimed Indicator",
                    description: "Which display type to use for the unclaimed indicator on the Quest button in the server list."
                },
                questButtonBadgeColor: {
                    label: "Quest Button Badge Color",
                    description: "The color of the Quest button badge in the server list."
                },
                questButtonLeftClickAction: {
                    label: "Left Click Action",
                    description: "The action to perform when left-clicking the Quest button in the server list."
                },
                questButtonMiddleClickAction: {
                    label: "Middle Click Action",
                    description: "The action to perform when middle-clicking the Quest button in the server list."
                },
                questButtonRightClickAction: {
                    label: "Right Click Action",
                    description: "The action to perform when right-clicking the Quest button in the server list."
                },
                fetchingQuests: {
                    description: "Fetch Quests from Discord."
                },
                fetchingQuestsInterval: {
                    label: "Fetching Quests Interval",
                    description: "The interval in seconds to fetch Quests from Discord."
                },
                fetchingQuestsAlert: {
                    label: "Fetching Quests Alert",
                    description: "The sound to play when new Quests are detected."
                },
                fetchingQuestsAlertVolume: {
                    label: "Fetching Quests Alert Volume",
                    description: "The volume of the alert sound when new Quests are detected."
                },
                restyleQuests: {
                    description: "Customize the appearance of Quest tiles in the Quests page."
                },
                restyleQuestsUnclaimed: {
                    label: "Restyle Quests Unclaimed",
                    description: "The color of unclaimed Quest tiles in the Quests page."
                },
                restyleQuestsClaimed: {
                    label: "Restyle Quests Claimed",
                    description: "The color of claimed Quest tiles in the Quests page."
                },
                restyleQuestsIgnored: {
                    label: "Restyle Quests Ignored",
                    description: "The color of ignored Quest tiles in the Quests page."
                },
                restyleQuestsExpired: {
                    label: "Restyle Quests Expired",
                    description: "The color of expired Quest tiles in the Quests page."
                },
                restyleQuestsGradient: {
                    label: "Restyle Quests Gradient",
                    description: "Style of the gradient used in the Quest tiles."
                },
                restyleQuestsPreload: {
                    label: "Restyle Quests Preload",
                    description: "Attempt to preload the assets for the Quest tiles."
                },
                reorderQuests: {
                    description: "Sort Quests by their status. Leave empty for default sorting. Comma-separated list must contain all of: UNCLAIMED, CLAIMED, IGNORED, EXPIRED."
                },
                unclaimedSubsort: {
                    label: "Unclaimed Subsort",
                    description: "Subsort method for unclaimed Quests."
                },
                claimedSubsort: {
                    label: "Claimed Subsort",
                    description: "Subsort method for claimed Quests."
                },
                ignoredSubsort: {
                    label: "Ignored Subsort",
                    description: "Subsort method for ignored Quests."
                },
                expiredSubsort: {
                    label: "Expired Subsort",
                    description: "Subsort method for expired Quests."
                },
                unclaimedUnignoredQuests: {
                    label: "Unclaimed Unignored Quests",
                    description: "Tracks the number of unclaimed and unignored Quests."
                },
                onQuestsPage: {
                    label: "On Quests Page",
                    description: "Whether the user is currently on the Quests page."
                },
                triggerQuestsRerender: {
                    label: "Trigger Quests Rerender",
                    description: "Trigger a rerender of the Quests page by toggling this setting."
                },
                ignoredQuestProfile: {
                    label: "Ignored Quest Profile",
                    description: "The profile used for ignored Quests."
                },
                rememberQuestPageSort: {
                    label: "Remember Quest Page Sort",
                    description: "Remember the last used sort on the Quests page."
                },
                rememberQuestPageFilters: {
                    label: "Remember Quest Page Filters",
                    description: "Remember the last used filters on the Quests page."
                },
                lastQuestPageSort: {
                    label: "Last Quest Page Sort",
                    description: "Remember the last used sort on the Quests page."
                },
                lastQuestPageFilters: {
                    label: "Last Quest Page Filters",
                    description: "Remember the last used filters on the Quests page."
                },
                ignoredQuestIDs: {
                    label: "Ignored Quest IDs",
                    description: "An array of Quest IDs that are ignored."
                },
                resumeQuestIDs: {
                    label: "Resume Quest IDs",
                    description: "An array of Quest IDs that are being auto-completed in the background."
                }
            },
            button: {
                questInProgressWithTime: "Completing ({{remainTime}})",
                completing: "Completing",
                resume: "Resume (~{{remainTime}})",
                complete: "Complete {{remainTime}}",
                completeImmediate: "Complete (Immediate)",
                completed: "Completed"
            },
            reward: {
                orbs: "{{completingText}} for {{orbQuantity}} Orbs.",
                article: "{{completingText}} for {{itemName}}.",
                unrecognized: "{{completingText}} for an unrecognized reward type."
            },
            notification: {
                completed: {
                    title: "Quest Completed",
                    body: "The {{questName}} Quest has completed."
                }
            }
        },
        questionMarkReplacement: {
            name: "QuestionMarkReplacement",
            description: "Replace all question marks with chosen string, if message only contains question marks.",
            option: {
                replace: {
                    label: "Replace",
                    description: "Replace with"
                }
            }
        },
        quickMention: {
            name: "QuickMention",
            description: "Adds a quick mention button to the message actions bar",
            tooltip: "Quick Mention"
        },
        quickReply: {
            name: "QuickReply",
            description: "Reply to (ctrl + up/down) and edit (ctrl + shift + up/down) messages via keybinds",
            option: {
                shouldMention: {
                    label: "Should Mention",
                    description: "Ping reply by default",
                    noReplyMentionPlugin: "Follow NoReplyMention plugin (if enabled)",
                    enabled: "Enabled",
                    disabled: "Disabled"
                },
                ignoreBlockedAndIgnored: {
                    label: "Ignore Block And Ignored",
                    description: "Ignore messages by blocked/ignored users when navigating"
                }
            }
        },
        quoter: {
            name: "Quoter",
            description: "Adds the ability to create an inspirational quote image from a message",
            context: {
                quote: "Quote"
            },
            modal: {
                title: "Catch Them In 4k",
                grayscale: "Grayscale",
                export: "Export",
                send: "Send",
                saveAsGIF: "Save as GIF",
                saveDescription: "Saves/Sends the image as a GIF instead of a PNG",
                showWatermark: "Show Watermark",
                watermarkText: "Watermark Text (max 32 characters)"
            },
            option: {
                quoteFont: {
                    label: "Quote Font",
                    description: "Font for quote text (author/username always use M PLUS Rounded 1c)",
                    mPlusRounded: "M PLUS Rounded 1c",
                    openSans: "Open Sans",
                    momoSignature: "Momo Signature",
                    lora: "Lora",
                    merriWeather: "Merriweather"
                },
                watermark: {
                    label: "Watermark",
                    description: "Custom watermark text (max 32 characters)"
                },
                grayscale: {
                    label: "Grayscale",
                    description: "Enable grayscale by default"
                },
                showWatermark: {
                    label: "Show Watermark",
                    description: "Show watermark by default"
                },
                saveAsGif: {
                    label: "Save As Gif",
                    description: "Save as GIF by default"
                }
            }
        },
        randomVoice: {
            name: "RandomVoice",
            description: "Adds a Button near the Mute button to join a random voice call.",
            tooltip: "Random Voice",
            context: {
                label: "Voice state modifier",
                amountLabel: "USER AMOUNT",
                spacesLabel: "SPACES LEFT",
                voiceLabel: "VOICE LIMIT",
                selfLabel: "SELF SETTINGS",
                select: {
                    servers: "Select Servers",
                    list: "Select List",
                    filters: "Select Filters",
                    amount: "User Amount",
                    userAmount: "{{amount}} user{{s}}",
                    parameters: "Parameters",
                    moreThan: "More than",
                    lessThan: "Less than",
                    equalTo: "Equal to",
                    spaces: "Spaces Left",
                    voice: "Voice Limit"
                },
                filter: {
                    muted: "Muted",
                    deafened: "Deafened",
                    camera: "Camera",
                    stream: "Stream",
                    includeFilters: "Include Filters",
                    avoidFilters: "Avoid Filters"
                },
                reset: {
                    list: "Reset List"
                },
                voice: {
                    label: "Voice Options",
                    auto: {
                        mute: "Auto Mute",
                        deafen: "Auto Deafen",
                        camera: "Auto Camera",
                        stream: "Auto Stream",
                        leaveWhenEmpty: "Leave When Empty",
                        navigate: "Auto Navigate",
                        stage: "Avoid Stage",
                        afk: "Avoid AFK"
                    }
                },
                invalid: {
                    server: "invalid server"
                }
            },
            option: {
                userAmountOperation: {
                    label: "User Amount Operation",
                    description: "Select an operation for the amounts of users"
                },
                userAmount: {
                    label: "User Amount",
                    description: "Select amount of users"
                },
                spacesLeftOperation: {
                    label: "Spaces Left Operation",
                    description: "Select an operation for the maximum amounts of users"
                },
                spacesLeft: {
                    label: "Spaces Left",
                    description: "Select amount of max users"
                },
                vcLimitOperation: {
                    label: "Voice Channel Limit Operation",
                    description: "Select an operation for the voice-channel."
                },
                vcLimit: {
                    label: "Voice Channel Limit",
                    description: "Select a voice-channel limit"
                },
                servers: {
                    label: "Servers",
                    description: "Servers that are included"
                },
                autoNavigate: {
                    label: "Auto Navigate",
                    description: "Automatically navigates to the voice-channel."
                },
                autoCamera: {
                    label: "Auto Camera",
                    description: "Automatically turns on camera"
                },
                autoStream: {
                    label: "Auto Stream",
                    description: "Automatically turns on stream"
                },
                selfMute: {
                    label: "Auto Mute",
                    description: "Automatically mutes your mic when joining voice-channel."
                },
                selfDeafen: {
                    label: "Auto Deafen",
                    description: "Automatically deafems your mic when joining voice-channel."
                },
                leaveEmpty: {
                    label: "Leave When Empty",
                    description: "Finds a random-call, when the voice chat is empty."
                },
                avoidStages: {
                    label: "Avoid Stage",
                    description: "Avoids joining stage voice-channels."
                },
                avoidAfk: {
                    label: "Avoid AFK",
                    description: "Avoids joining AFK voice-channels."
                },
                video: {
                    label: "Video",
                    description: "Searches for users with their video on"
                },
                stream: {
                    label: "Stream",
                    description: "Searches for users who are streaming"
                },
                mute: {
                    label: "Mute",
                    description: "Searches for users who are muted"
                },
                deafen: {
                    label: "Deafen",
                    description: "Searches for users who are deafened"
                },
                includeStates: {
                    label: "Include Filters",
                    description: "Option to include states"
                },
                avoidStates: {
                    label: "Avoid Filters",
                    description: "Option to avoid states"
                }
            },
            alert: {
                failed: "Failed to find a Voice Channel!"
            }
        },
        reactErrorDecoder: {
            name: "ReactErrorDecoder",
            description: "Decodes React error codes into human-readable messages."
        },
        readAllNotificationsButton: {
            name: "ReadAllNotificationsButton",
            description: "Read all server notifications with a single button click!",
            button: "Read All"
        },
        relationshipNotifier: {
            name: "RelationshipNotifier",
            description: "Notifies you when a friend, group chat, or server removes you.",
            option: {
                notices: {
                    label: "Notices",
                    description: "Also show a notice at the top of your screen when removed (use this if you don't want to miss any notifications)."
                },
                offlineRemovals: {
                    label: "Offline Removals",
                    description: "Notify you when starting discord if you were removed while offline."
                },
                friends: {
                    label: "Friends",
                    description: "Notify when a friend removes you"
                },
                friendRequestCancels: {
                    label: "Friend Request Cancels",
                    description: "Notify when a friend request is cancelled"
                },
                servers: {
                    label: "Servers",
                    description: "Notify when removed from a server"
                },
                groups: {
                    label: "Groups",
                    description: "Notify when removed from a group chat"
                }
            },
            notification: {
                removedFriend: "{{user}} removed you as a friend.",
                cancelledFriendRequest: "A friend request from {{user}} has been removed.",
                removedFromServer: "You have been removed from the server {{server}}.",
                removedFromGroup: "You were removed from the group {{group}}.",
                noLongerGroup: "You are no longer in the group {{group}}.",
                noLongerServer: "You are no longer in the server {{server}}.",
                noLongerFriend: "You are no longer friends with {{user}}.",
                friendRequestRevoked: "Friend request from {{user}} has been revoked.",
                ok: "OK"
            }
        },
        remix: {
            name: "Remix",
            description: "Adds a 'Remix' option to the right-click menu of the file upload button. This option opens an image in a simple image editor and allows you to send the edited image directly into the chat.",
            label: "Remix",
            button: {
                send: "Send",
                close: "Close",
                brush: "Brush",
                erase: "Erase",
                crop: "Crop",
                shape: "Shape",
                reset: "Reset",
                clear: "Clear"
            },
            editor: {
                choose: "Choose an Image",
                browse: "Browse",
                rectangle: "Rectangle",
                ellipse: "Ellipse",
                line: "Line",
                arrow: "Arrow",
                fill: "Fill"
            }
        },
        repeatMessages: {
            name: "RepeatMessages",
            description: "Allows you to repeat messages quickly. If you hold shift while clicking the Repeat option, it will reply to the message.",
            button: "Repeat (Click) / Repeat and Reply (Shift + Click)",
            context: {
                repeat: "Repeat",
                repeatAndReply: "Repeat and Reply"
            }
        },
        replaceGoogleSearch: {
            name: "ReplaceGoogleSearch",
            description: "Replaces the Google search with different Engines.",
            option: {
                customEngineName: {
                    label: "Custom Engine Name",
                    description: "Name of the custom search engine"
                },
                customEngineURL: {
                    label: "Custom Engine URL",
                    description: "The URL of your Engine"
                }
            },
            context: {
                label: "Search Text"
            }
        },
        replyPingControl: {
            name: "ReplyPingControl",
            description: "Control whether to always or never get pinged on message replies, with a whitelist feature",
            option: {
                alwaysPingOnReply: {
                    label: "Always Ping On Reply",
                    description: "Always get pinged when someone replies to your messages"
                },
                replyPingWhitelist: {
                    label: "Reply Ping Whitelist",
                    description: "Comma-separated list of User IDs to always receive reply pings from"
                }
            }
        },
        replyTimestamp: {
            name: "ReplyTimestamp",
            description: "Shows a timestamp on replied-message previews"
        },
        revealAllSpoilers: {
            name: "RevealAllSpoilers",
            description: "Reveal all spoilers in a message by Ctrl-clicking a spoiler, or in the chat with Ctrl+Shift-click"
        },
        reverseImageSearch: {
            name: "ReverseImageSearch",
            description: "Adds ImageSearch to image context menus",
            context: {
                label: "Search Image",
                all: "Search All"
            }
        },
        reviewDB: {
            name: "ReviewDB",
            description: "Review other users (Adds a new settings to profiles)",
            notification: {
                newReview: "You have new reviews on your profile!",
                auth: {
                    error: "An error occured while authorizing",
                    successfully: "Successfully logged in!",
                    failed: "Failed to authorize",
                    review: "Please authorize to add a review.",
                    opening: "Opening authorization window...",
                    need: "You need to authorize to review users!"
                },
                error: {
                    fast: "You are sending requests too fast. Wait a few seconds and try again.",
                    fetching: "An error occured while fetching reviews.",
                    action: {
                        failed: "Failed to {{action}} user",
                        success: "Successfully {{action}}ed user"
                    }
                }
            },
            modal: {
                delete: {
                    title: "Are you sure?",
                    description: "Do you really you want to delete this review?",
                    confirm: "Delete",
                    cancel: "Nevermind",
                    error: "You must be logged in to delete reviews.",
                },
                report: {
                    title: "Are you sure?",
                    description: "Do you really you want to report this review?",
                    confirm: "Report",
                    cancel: "Nevermind",
                    error: "You must be logged in to report reviews.",
                },
                block: {
                    title: "Are you sure?",
                    description: "Do you really you want to block this user? You will not see their reviews anymore.",
                    confirm: "Block",
                    cancel: "Nevermind",
                    error: "You must be logged in to block users.",
                },
                blocked: {
                    title: "Blocked Users",
                    auth: "You are not logged into ReviewDB!",
                    noBlocked: "No users are blocked.",
                    fetch: "An error occurred while fetching blocked user."
                },
                reviews: {
                    title: "'s Reviews",
                    noUser: "Looks like nobody reviewed this user yet. You could be the first!",
                    noServer: "Looks like nobody reviewed this server yet. You could be the first!"
                }
            },
            button: {
                appeal: "Appeal",
                ok: "OK",
                more: "Read more",
                reply: "Reply to @{{user}}",
                update: "Update review for @{{user}}",
                review: "Review @{{user}}"
            },
            context: {
                view: "View Reviews",
                blocked: "You have blocked this user",
                delete: "Delete Review",
                report: "Report Review",
                block: "Block User",
                unblock: "Unblock User",
                reply: "Reply Review"
            },
            option: {
                authorize: {
                    label: "Authorize",
                    button: "Authorize with ReviewDB"
                },
                notifyReviews: {
                    label: "Notify Reviews",
                    description: "Notify about new reviews on startup"
                },
                showWarning: {
                    label: "Show Warning",
                    description: "Display warning to be respectful at the top of the reviews list"
                },
                hideTimestamps: {
                    label: "Hide Timestamps",
                    description: "Hide timestamps on reviews"
                },
                hideBlockedUsers: {
                    label: "Hide Blocked Users",
                    description: "Hide reviews from blocked users"
                },
                buttons: {
                    label: "Buttons",
                    manageBlocked: "Manage Blocked Users",
                    support: "Support ReviewDB development",
                    website: "ReviewDB website",
                    server: "ReviewDB Support server"
                }
            }
        },
        roleColorEverywhere: {
            name: "RoleColorEverywhere",
            description: "Adds the top role color anywhere possible",
            option: {
                chatMentions: {
                    label: "Chat Mentions",
                    description: "Show role colors in chat mentions (including in the message box)"
                },
                memberList: {
                    label: "Member List",
                    description: "Show role colors in member list role headers"
                },
                voiceUsers: {
                    label: "Voice Users",
                    description: "Show role colors in the voice chat user list"
                },
                reactorsList: {
                    label: "Reactors List",
                    description: "Show role colors in the reactors list"
                },
                pollResults: {
                    label: "Poll Results",
                    description: "Show role colors in the poll results"
                },
                colorChatMessages: {
                    label: "Color Chat Messages",
                    description: "Color chat messages based on the author's role color"
                },
                messageSaturation: {
                    label: "Message Saturation",
                    description: "Intensity of message coloring"
                }
            }
        },
        searchFix: {
            name: "SearchFix",
            description: "Fixes the annoying 'We dropped the magnifying glass!' error.",
            notPerfect: "This fix isn't perfect, so you may have to reload the search bar to fix issues.",
            paragraph1: "Discord only allows a max offset of 5000 (this is what causes the magnifying glass error).",
            paragraph2: "This means that you can only see precisely 5000 messages into the past, and 5000 messages into the future (when sorting by old).",
            paragraph3: "This plugin just jumps to the opposite sorting method to try get around Discord's restriction,",
            paragraph4: "but if there is a large search result, and you try to view a message that is unobtainable with both methods of sorting,",
            paragraph5: "the plugin will simply show offset 0 (either newest or oldest message depending on the sorting method)."
        },
        secretRingToneEnabler: {
            name: "SecretRingToneEnabler",
            description: "Always play the secret version of the discord ringtone (except during special ringtone events)",
            option: {
                onlySnow: {
                    label: "Only During Snow Ringtone Event",
                    description: "Only play the Snow Halation Theme"
                }
            }
        },
        summaries: {
            name: "Summaries",
            description: "Enables Discord's experimental Summaries feature on every server, displaying AI generated summaries of conversations",
            option: {
                summaryExpiryThresholdDays: {
                    label: "Summary Expiry Threshold (Days)",
                    description: "The time in days before a summary is removed. Note that only up to 50 summaries are kept per channel"
                }
            }
        },
        selfForward: {
            name: "SelfForward",
            description: "Adds the current channel to the forward list popup"
        },
        sendTimestamps: {
            name: "SendTimestamps",
            description: "Send timestamps easily via chat box button & text shortcuts. Read the extended description!",
            sample: {
                paragraph1: "To quickly send send time only timestamps, include timestamps formatted as `HH:MM` (including the backticks!) in your message",
                paragraph2: "See below for examples.\nIf you need anything more specific, use the Date button in the chat bar!",
                examples: "Examples:"
            },
            modal: {
                title: "Timestamp Picker",
                light: "Light",
                dark: "Dark",
                format: "Timestamp Format",
                preview: "Preview",
                insert: "Insert",
                insertTimestamp: "Insert Timestamp"
            },
            option: {
                replaceMessageContents: {
                    label: "Replace Message Contents",
                    description: "Replace timestamps in message contents"
                }
            }
        },
        serverInfo: {
            name: "ServerInfo",
            description: "Allows you to view info about a server",
            context: {
                serverInfo: "Server Info"
            },
            option: {
                sorting: {
                    label: "Sorting",
                    description: "Username or if applicable Display Name",
                    username: "Username",
                    displayname: "Display Name",
                    none: "Dont Sort"
                }
            },
            modal: {
                tab: {
                    serverInfo: "Server Info",
                    friends: "Friends",
                    mutualUsers: "Mutual Users",
                    blockedUsers: "Blocked Users",
                    ignoredUsers: "Ignored Users"
                },
                owner: "Server Owner",
                loading: "Loading...",
                createdAt: "Created At",
                joinedAt: "Joined At",
                vanityLink: "Vanity Link",
                preferredLocale: "Preferred Locale",
                verification: {
                    level: "Verification Level",
                    none: "None",
                    low: "Low",
                    medium: "Medium",
                    high: "High",
                    highest: "Highest"
                },
                serverBoosts: "Server Boosts",
                channels: "Channels",
                roles: "Roles"
            }
        },
        serverListIndicators: {
            name: "ServerListIndicators",
            description: "Add online friend count or server count in the server list",
            friends: "Friends",
            servers: "Servers",
            option: {
                mode: {
                    label: "Mode",
                    description: "Mode to display in server list",
                    friend: "Only online friend count",
                    server: "Only server count",
                    both: "Both server and online friend counts"
                },
                useCompact: {
                    label: "Use Compact Mode",
                    description: "Makes the indicator appear with only text"
                }
            }
        },
        serverSearch: {
            name: "ServerSearch",
            description: "Navigate your servers better with a quick search button",
            tooltip: "Search"
        },
        shikiCodeblocks: {
            name: "ShikiCodeblocks",
            description: "Brings vscode-style codeblocks into Discord, powered by Shiki",
            option: {
                theme: {
                    label: "Theme",
                    description: "Default themes"
                },
                customTheme: {
                    label: "Custom Theme",
                    description: "A link to a custom vscode theme",
                    mustURL: "Must be a valid URL",
                    mustJSON: "Must be a json file"
                },
                tryHljs: {
                    label: "Fallback to Hljs",
                    description: "Use the more lightweight default Discord highlighter and theme.",
                    never: "Never",
                    secondary: "Prefer Shiki instead of Highlight.js",
                    primary: "Prefer Highlight.js instead of Shiki",
                    always: "Always"
                },
                useDevIcon: {
                    label: "Use Devicon for Language Icons",
                    description: "How to show language icons on codeblocks",
                    disabled: "Disabled",
                    colorless: "Colorless",
                    colored: "Colored"
                },
                bgOpacity: {
                    label: "Background Opacity",
                    description: "Background opacity"
                }
            },
            button: {
                copy: "Copy",
                copied: "Copied!"
            }
        },
        showAllMessageButtons: {
            name: "ShowAllMessageButtons",
            description: "Always show all message buttons no matter if you are holding the shift key or not.",
            option: {
                noShiftDelete: {
                    label: "No Shift Delete",
                    description: "Remove requirement to hold shift for deleting a message."
                },
                noShiftPin: {
                    label: "No Shift Pin",
                    description: "Remove requirement to hold shift for pinning a message."
                }
            }
        },
        showBadgesInChat: {
            name: "ShowBadgesInChat",
            description: "Shows the message author's badges beside their name in chat.",
            option: {
                showPlexcordDonor: {
                    label: "Show Plexcord Donor Badge",
                    description: "Enable to show Plexcord Donor badges in chat."
                },
                plexcordDonorPosition: {
                    label: "Plexcord Donor Badge Position",
                    description: "The position of the Plexcord Donor badges."
                },
                showPlexcordContributor: {
                    label: "Show Plexcord Contributor Badge",
                    description: "Enable to show Plexcord Contributor badges in chat."
                },
                plexcordContributorPosition: {
                    label: "Plexcord Contributor Badge Position",
                    description: "The position of the Plexcord Contributor badges."
                },
                showDiscordProfile: {
                    label: "Show Discord Profile Badge",
                    description: "Enable to show Discord Profile badges in chat."
                },
                discordProfilePosition: {
                    label: "Discord Profile Badge Position",
                    description: "The position of the Discord Profile badges."
                },
                showDiscordNitro: {
                    label: "Show Discord Nitro Badge",
                    description: "Enable to show Discord Nitro badges in chat."
                },
                discordNitroPosition: {
                    label: "Discord Nitro Badge Position",
                    description: "The position of the Discord Nitro badges."
                },
                badgeSettings: {
                    label: "Badge Settings",
                    description: "Configure the position of other badges shown in chat.",
                    modal: "Drag the badges to reorder them, you can click to enable/disable a specific badge type."
                }
            },
            badge: {
                plexcord: "Plexcord donor badge",
                contributor: "Plexcord contributor badge",
                discordProfile: "Discord profile badges (HypeSquad, Discord Staff, Active Developer, etc.)",
                nitro: "Nitro badge",
                staff: "Discord Staff",
                partner: "Partnered Server Owner",
                events: "HypeSquad Events",
                bravery: "HypeSquad Bravery",
                brilliance: "HypeSquad Brilliance",
                balance: "HypeSquad Balance",
                bugHunter: "Discord Bug Hunter",
                earlyVerifiedBotDeveloper: "Early Verified Bot Developer",
                earlySupporter: "Early Supporter",
                moderatorProgram: "Moderator Program Alumni"
            },
            modal: {
                plexcordContributor: "Plexcord Contributor",
                discordNitro: "Discord Nitro",
                basic: "Basic",
                classic: "Classic"
            }
        },
        showConnections: {
            name: "ShowConnections",
            description: "Show connected accounts in user popouts",
            option: {
                iconSize: {
                    label: "Icon Size",
                    description: "Icon size (px)"
                },
                iconSpacing: {
                    label: "Icon Spacing",
                    description: "Icon margin",
                    compact: "Compact",
                    cozy: "Cozy",
                    roomy: "Roomy"
                }
            }
        },
        showHiddenChannels: {
            name: "ShowHiddenChannels",
            description: "Show channels that you do not have access to view.",
            tooltip: "Hidden Channel",
            option: {
                hideUnreads: {
                    label: "Hide Unreads",
                    description: "Hide Unreads"
                },
                showMode: {
                    label: "Show Mode",
                    description: "The mode used to display hidden channels.",
                    lock: "Plain style with Lock Icon instead",
                    hidden: "Muted style with hidden eye icon on the right"
                },
                defaultAllowedUsersAndRolesDropdownState: {
                    label: "Default Allowed Users And Roles Dropdown State",
                    description: "Whether the allowed users and roles dropdown on hidden channels should be open by default"
                }
            },
            channelType: {
                text: "text",
                announcement: "announcement",
                forum: "forum",
                voice: "voice",
                stage: "stage"
            },
            sortOrder: {
                latestActivity: "Latest Activity",
                creationDate: "Creation Date"
            },
            forumLayout: {
                default: "Not set",
                list: "List view",
                grid: "Gallery view"
            },
            videoQuality: {
                auto: "Automatic",
                full: "720p"
            },
            modal: {
                hidden: "hidden",
                locked: "locked",
                threads: "threads",
                posts: "posts",
                messages: "messages",
                post: "post",
                message: "message",
                unknown: "unknown",
                permissionDetails: "Permission Details",
                thisIsA: "This is a {{status}} {{channelType}} channel",
                canNotSee: "You cannot see the {{type}} of this channel.",
                guidelines: "However you may see its guidelines:",
                lastCreated: "Last {{type}} created:",
                lastPin: "Last message pin:",
                threadSlowmode: "Default thread slowmode:",
                slowmode: "Slowmode:",
                bitrate: "Bitrate:",
                region: "Region:",
                automatic: "Automatic",
                videoQuality: "Video Quality Mode:",
                inactiveArchiveDuration: "Default inactivity duration before archiving {{type}}",
                defaultLayout: "Default layout:",
                defaultSort: "Default sort order:",
                defaultReaction: "Default reaction emoji:",
                requireTag: "Posts on this forum require a tag to be set.",
                availableTags: "Available Tags:",
                allowedUsersAndRoles: "Allowed users and roles:",
                hideAllowedUsersAndRoles: "Hide Allowed Users and Roles",
                viewAllowedUsersAndRoles: "View Allowed Users and Roles"
            }
        },
        showHiddenThings: {
            name: "ShowHiddenThings",
            description: "Displays various hidden & moderator-only things regardless of permissions.",
            option: {
                showTimeouts: {
                    label: "Show Member Timeouts in Chat",
                    description: "Show member timeout icons in chat."
                },
                showInvitesPaused: {
                    label: "Show Invites Paused",
                    description: "Show the invites paused tooltip in the server list."
                },
                showModView: {
                    label: "Show Mod View",
                    description: "Show the member mod view context menu item in all servers."
                }
            }
        },
        showMessageEmbeds: {
            name: "ShowMessageEmbeds",
            description: "Adds a context menu option to show embeds for links that don't have one",
            context: {
                embed: {
                    show: "Show Embed",
                    hide: "Remove Embed"
                }
            },
            error: {
                failed: "Failed to get embed",
                noEmbed: "No embeds found"
            }
        },
        showMeYourName: {
            name: "ShowMeYourName",
            description: "Display any permutation of custom nicknames, friend nicknames, server nicknames, display names, and usernames in chat.",
            option: {
                messages: {
                    label: "Messages",
                    description: "Display custom name format in messages."
                },
                replies: {
                    label: "Replies",
                    description: "Display custom name format in replies."
                },
                mentions: {
                    label: "Mentions",
                    description: "Display custom name format in mentions."
                },
                typingIndicator: {
                    label: "Typing Indicator",
                    description: "Display the first available name listed in your custom name format in the typing indicator."
                },
                memberList: {
                    label: "Member List",
                    description: "Display the first available name listed in your custom name format in the member list."
                },
                profilePopout: {
                    label: "Profile Popout",
                    description: "Display the first available name listed in your custom name format in profile popouts."
                },
                voiceChannels: {
                    label: "Voice Channels",
                    description: "Display the first available name listed in your custom name format in voice channels."
                },
                reactions: {
                    label: "Reactions",
                    description: "Display the first available name listed in your custom name format in reaction tooltips, and the full name in reaction popouts."
                },
                discriminators: {
                    label: "Discriminators",
                    description: "Append discriminators to usernames for bots. Discriminators were deprecated for users, but are still used for bots. By default, a bot's username is equivalent to a user's global name, therefore multiple bots can have the same username. Appending discriminators makes them unique again."
                },
                hideDefaultAtSign: {
                    label: "Hide Default At Sign",
                    description: "Hide the default '@' symbol before the name in mentions and replies. Only applied if either feature is enabled."
                },
                truncateAllNamesWithStreamerMode: {
                    label: "Truncate All Names with Streamer Mode",
                    description: "Truncate all names, not just usernames, while in Streamer Mode."
                },
                removeDuplicates: {
                    label: "Remove Duplicates",
                    description: "If any of the names are equivalent, remove them, leaving only the unique names."
                },
                ignoreFonts: {
                    label: "Ignore Fonts",
                    description: "For the second, third, and fourth names, use GG SANS regardless of the user's custom font."
                },
                ignoreGradients: {
                    label: "Ignore Gradients",
                    description: "For the second, third, and fourth names, if the role has a gradient, ignore it in favor of the value below."
                },
                animateGradients: {
                    label: "Animate Gradients",
                    description: "For the second, third, and fourth names, if the role has a gradient, animate it. This is disabled by 'Ignore Gradients' and reduced motion."
                },
                nameSeparator: {
                    label: "Name Separator",
                    description: "The separator to use between names. The default is a single space."
                },
                friendNameOnlyInDirectMessages: {
                    label: "Friend Name Only In Direct Messages",
                    description: "Only display friend names when in DMs, and not in servers."
                },
                customNameOnlyInDirectMessages: {
                    label: "Custom Name Only In Direct Messages",
                    description: "Only display custom names when in DMs, and not in servers."
                },
                includedNames: {
                    label: "Included Names",
                    description: "The order to display usernames, display names, nicknames, and friend names. Use the following placeholders: {user}, {display}, {nick}, {friend}. You can provide multiple name options to use as fallbacks if one is unavailable by separating them with commas as such: {friend, nick, display}. You can have up to three prefixes and three suffixes per name."
                },
                customNameColor: {
                    label: "Custom Name Color",
                    description: "The color to use for the custom name you assigned a user if it's not the first displayed. Leave blank for default. Accepts hex(a), rgb(a), or hsl(a) input. Use 'Role' to follow the user's top role color. Use 'Role+-#' to adjust the brightness by that percentage (ex: 'Role+15')"
                },
                friendNameColor: {
                    label: "Friend Name Color",
                    description: "The color to use for a friend's nickname if it's not the first displayed. Leave blank for default. Accepts hex(a), rgb(a), or hsl(a) input. Use 'Role' to follow the user's top role color. Use 'Role+-#' to adjust the brightness by that percentage (ex: 'Role+15')"
                },
                nicknameColor: {
                    label: "Nickname Color",
                    description: "The color to use for the nickname if it's not the first displayed. Leave blank for default. Accepts hex(a), rgb(a), or hsl(a) input. Use 'Role' to follow the user's top role color. Use 'Role+-#' to adjust the brightness by that percentage (ex: 'Role+15')"
                },
                displayNameColor: {
                    label: "Display Name Color",
                    description: "The color to use for the display name if it's not the first displayed. Leave blank for default. Accepts hex(a), rgb(a), or hsl(a) input. Use 'Role' to follow the user's top role color. Use 'Role+-#' to adjust the brightness by that percentage (ex: 'Role+15')"
                },
                usernameColor: {
                    label: "Username Color",
                    description: "The color to use for the username if it's not the first displayed. Leave blank for default. Accepts hex(a), rgb(a), or hsl(a) input. Use 'Role' to follow the user's top role color. Use 'Role+-#' to adjust the brightness by that percentage (ex: 'Role+15')"
                },
                triggerNameRerender: {
                    label: "Trigger Name Rerender",
                    description: "Trigger a name rerender by toggling this setting."
                }
            },
            modal: {
                change: {
                    title: "Change SMYN Nickname"
                },
                add: {
                    title: "Add SMYN Nickname"
                },
                setCustom: "Set a custom SMYN nickname for this user. Make use of it by specifying {custom} in the SMYN template settings.",
                nickname: "SMYN Nickname",
                reset: "Reset SMYN Nickname",
                cancel: "Cancel"
            }
        },
        showTimeoutDuration: {
            name: "ShowTimeoutDuration",
            description: "Shows how much longer a user's timeout will last, either in the timeout icon tooltip or next to it",
            option: {
                displayStyle: {
                    label: "Display Style",
                    description: "How to display the timeout duration",
                    tooltip: "In the Tooltip",
                    inline: "Next to the timeout icon"
                }
            }
        },
        sidebarChat: {
            name: "SidebarChat",
            description: "Open a another channel or a DM as a sidebar or as a popout",
            toolbox: {
                label: "Open Previous Chat"
            },
            context: {
                label: "Open Sidebar Chat"
            },
            modal: {
                switch: "Switch channels",
                popout: "Popout chat",
                close: "Close sidebar chat"
            },
            option: {
                persistSidebar: {
                    label: "Persist Sidebar Chat",
                    description: "Keep the sidebar chat open across Discord restarts"
                },
                patchCommunity: {
                    label: "Patch Community",
                    description: "Patch things like the Channel Browser or Members tab that community servers have."
                }
            }
        },
        signature: {
            name: "Signature",
            description: "Automated fingerprint/end text",
            option: {
                name: {
                    label: "Name",
                    description: "The signature that will be added to the end of your messages"
                },
                textHeader: {
                    label: "Text Header",
                    description: "What header to preface text with"
                },
                showIcon: {
                    label: "Show Icon",
                    description: "Show an icon for toggling the plugin in the chat bar"
                },
                contextMenu: {
                    label: "Context Menu",
                    description: "Add option to toggle the functionality in the chat input context menu"
                },
                isEnabled: {
                    label: "Is Enabled",
                    description: "Toggle functionality"
                }
            },
            tooltip: {
                enable: "Enable Signature",
                disable: "Disable Signature"
            },
            context: {
                enable: "Enable Signature"
            },
            command: {
                signature: {
                    name: "Signature",
                    description: "Toggle your signature",
                    toogle: "Toggle your signature (default is toggle)",
                    enabled: "Signature enabled",
                    disabled: "Signature disabled"
                }
            }
        },
        silentMessageToggle: {
            name: "SilentMessageToggle",
            description: "Adds a button to the chat bar to toggle sending a silent message.",
            option: {
                persistState: {
                    label: "Persist State",
                    description: "How to persist the silent message toggle state",
                    none: "Don't persist (reset on channel change)",
                    channels: "Persist between channels",
                    restarts: "Persist between channels and restarts"
                },
                autoDisable: {
                    label: "Auto Disable",
                    description: "Automatically disable the silent message toggle again after sending one"
                }
            },
            tooltip: {
                enable: "Enable Silent Message",
                disable: "Disable Silent Message"
            }
        },
        silentTyping: {
            name: "SilentTyping",
            description: "Hide your typing indicator from chat.",
            command: {
                silentTyping: {
                    name: "SilentTyping",
                    description: "Hide your typing indicator from chat.",
                    toggle: {
                        name: "toggle",
                        description: "Toggle functionality globally, for the channel, or for the guild.",
                        global: "Global",
                        channel: "Channel",
                        guild: "Guild"
                    },
                    chatBarIndicator: {
                        name: "chatBarIndicator",
                        description: "Hide other users' typing indicators from above the chat bar."
                    },
                    membersListIndicator: {
                        name: "membersListIndicator",
                        description: "Hide other users' typing indicators from the members list."
                    },
                    chatIcon: {
                        name: "chatIcon",
                        description: "Show an icon in the chat bar for toggling the plugin on the go."
                    },
                    chatContextMenu: {
                        name: "chatContextMenu",
                        description: "Show a dropdown in the chat context menu to toggle plugin settings on the go."
                    },
                    defaultHidden: {
                        name: "defaultHidden",
                        description: "Whether to hide typing in DMs/channels/guilds by default or not."
                    }
                }
            },
            content: {
                updated: "Silent typing settings updated.",
                noChanges: "No changes made to silent typing settings."
            },
            tooltip: {
                hidden: "Typing Hidden ({{location}})",
                visible: "Typing Visible ({{location}})",
                global: "Typing Visible (Global)"
            },
            option: {
                enabledGlobally: {
                    label: "Enabled Globally",
                    description: "Toggle functionality of your own typing indicator globally."
                },
                hideChatBoxTypingIndicators: {
                    label: "Hide Chat Box Typing Indicators",
                    description: "Hide other users' typing indicators from above the chat bar."
                },
                hideMembersListTypingIndicators: {
                    label: "Hide Members List Typing Indicators",
                    description: "Hide other users' typing indicators from the members list."
                },
                chatIcon: {
                    label: "Chat Icon",
                    description: "Show an icon in the chat bar for modifying the plugin on the go."
                },
                chatIconLeftClickAction: {
                    label: "Chat Icon Left Click Action",
                    description: "What to do when left clicking the chat icon.",
                    global: "Toggle Typing Globally",
                    channel: "Toggle Typing for Channel",
                    guild: "Toggle Typing for Guild",
                    settings: "Open Plugin Settings"
                },
                chatIconMiddleClickAction: {
                    label: "Chat Icon Middle Click Action",
                    description: "What to do when middle clicking the chat icon.",
                    global: "Toggle Typing Globally",
                    channel: "Toggle Typing for Channel",
                    guild: "Toggle Typing for Guild",
                    settings: "Open Plugin Settings"
                },
                chatIconRightClickAction: {
                    label: "Chat Icon Right Click Action",
                    description: "What to do when right clicking the chat icon.",
                    global: "Toggle Typing Globally",
                    channel: "Toggle Typing for Channel",
                    guild: "Toggle Typing for Guild",
                    settings: "Open Plugin Settings"
                },
                chatContextMenu: {
                    label: "Chat Context Menu",
                    description: "Show a dropdown in the chat context menu to modify plugin settings on the go."
                },
                defaultHidden: {
                    label: "Default Hidden",
                    description: "If enabled, the plugin will hide your typing from others in any DMs/channels/guilds not listed in 'Disabled Locations' below. If disabled, the plugin will show your typing to others for any DMs/channels/guilds not listed in 'Enabled Locations' below."
                },
                enabledLocations: {
                    label: "Enabled Locations",
                    description: "Enable functionality for these IDs. Accepts a comma separated list of DM IDs, channel IDs, and guild IDs. Only used if 'Default Hidden' is disabled."
                },
                disabledLocations: {
                    label: "Disabled Locations",
                    description: "Disable functionality for these IDs. Accepts a comma separated list of DM IDs, channel IDs, and guild IDs. Only used if 'Default Hidden' is enabled."
                }
            }
        },
        sortFriends: {
            name: "SortFriends",
            description: "Sorts friend requests by date of receipt",
            tooltip: "Added &mdash; {{date}}",
            option: {
                showDates: {
                    label: "Show Dates",
                    description: "Show dates on friend requests"
                }
            }
        },
        soundBoardLogger: {
            name: "SoundBoardLogger",
            description: "Logs all soundboards that are played in a voice chat and allows you to download them",
            tooltip: "Open SoundBoard Log",
            option: {
                savedIds: {
                    label: "Saved Soundboard IDs",
                    description: "The amount of soundboard ids you want to save at a time (0 lets you save infinite)",
                    notNumber: "The value is not a number.",
                    cantDecimal: "The value can't be a decimal number.",
                    cantNegative: "The value can't be a negative number.",
                    heading: "The amount of soundboard ids you want to save at a time (0 lets you save infinite)",
                    warning: "Warning! Setting the number to a lower value will reset the log!",
                    placeholder: "Enter a number"
                },
                fileType: {
                    label: "File Type",
                    description: "the format that you want to save your file"
                },
                openLogs: {
                    label: "Open Logs",
                    description: "show the logs",
                    button: "Open Logs"
                },
                soundVolume: {
                    label: "Sound Volume",
                    description: "How loud the toggle sound is (0 to disable)"
                },
                iconLocation: {
                    label: "Icon Location",
                    description: "choose where to show the SoundBoard Log icon (requires restart)",
                    toolbar: "Toolbar",
                    chatInput: "Chat Input"
                }
            },
            modal: {
                title: "SoundBoard Logs",
                loading: "Loading sounds...",
                noLogs: "No sounds logged yet. Join a voice chat to start logging!",
                clearLogs: "Clear Logs",
                played: "Played {{time}} time{{s}}",
                last: "Last played:",
                also: "Also played:",
                download: "Download",
                copyId: "Copy ID",
                copied: "ID copied to clipboard!",
                playSound: "Play Sound",
                moreUsers: "other people used this sound...",
                volume: "Soundboard Volume"
            }
        },
        splitLargeMessages: {
            name: "SplitLargeMessages",
            description: "Splits large messages into multiple to fit Discord's message limit.",
            option: {
                maxLength: {
                    label: "Maximum Message Length",
                    description: "Maximum length of a message before it is split. Set to 0 to automatically detect."
                },
                disableFileConversion: {
                    label: "Disable File Conversion",
                    description: "If true, disables file conversion for large messages."
                },
                sendDelay: {
                    label: "Send Delay",
                    description: "Delay between each chunk in seconds."
                },
                hardSplit: {
                    label: "Hard Split",
                    description: "If true, splits on the last character instead of the last space/newline."
                },
                splitInSlowmode: {
                    label: "Split In Slowmode",
                    description: "Should messages be split if the channel has slowmode enabled?"
                },
                slowmodeMax: {
                    label: "Slowmode Max",
                    description: "Maximum slowmode time if splitting in slowmode."
                }
            }
        },
        spotifyActivityToggle: {
            name: "SpotifyActivityToggle",
            description: "Adds a toggle button for Spotify activity visibility.",
            tooltip: {
                enable: "Turn on Spotify activity",
                disable: "Turn off Spotify activity"
            },
            option: {
                location: {
                    label: "Location",
                    description: "Where to show the Spotify toggle button",
                    panel: "Next to Mute/Deafen",
                    toolbox: "Plexcord Toolbox"
                },
                activityStatus: {
                    label: "Activity Status",
                    description: "The current status of your Spotify activity"
                }
            }
        },
        spotifyCrack: {
            name: "SpotifyCrack",
            description: "Free listen along, no auto-pausing in voice chat, and allows activity to continue playing when idling",
            option: {
                noSpotifyAutoPause: {
                    label: "No Spotify Auto-Pause",
                    description: "Disable Spotify auto-pause."
                },
                keepSpotifyActivityOnIdle: {
                    label: "Keep Spotify Activity On Idle",
                    description: "Keep Spotify activity playing when idling"
                }
            }
        },
        spotifyShareCommands: {
            name: "SpotifyShareCommands",
            description: "Share your current Spotify track, album or artist via slash command (/track, /album, /artist)",
            command: {
                makeCommand: {
                    description: "Share your current Spotify {{type}} in chat",
                    track: "You're not listening to any track on Spotify.",
                    find: "Failed to find the track on spotify."
                }
            }
        },
        startupTimings: {
            name: "StartupTimings",
            description: "Adds Startup Timings to the Settings menu",
            modal: {
                title: "Startup Timings",
                ended: "Trace ended at:",
                start: "Start",
                interval: "Interval",
                delta: "Delta",
                event: "Event",
                serverTrace: "Server Trace",
                loading: "Loading..."
            }
        },
        statusNotifications: {
            name: "StatusNotifications",
            description: "Adds notifications for status changes",
            loading: "Loading...",
            option: {
                notificationsSound: {
                    label: "Notification Sound",
                    description: "Play a notification sound for status notifications?"
                },
                usersList: {
                    label: "Users List",
                    description: "List of users to notify on status change",
                    empty: "No users tracked. Right-click a user and select 'Status Notifications' to add them."
                }
            },
            context: {
                label: "Status Notifications",
                notifications: "Notifications",
                type: {
                    all: "All",
                    online: "Online",
                    offline: "Offline",
                    none: "None"
                }
            },
            notification: {
                unknownUser: "User",
                title: "Status Notifications"
            },
            status: {
                online: "Online",
                idle: "Idle",
                dnd: "Do Not Disturb",
                offline: "Offline",
            },
        },
        statusPresets: {
            name: "StatusPresets",
            description: "Allows you to remember your statuses and set them later",
            button: {
                remember: "Remember Status"
            },
            context: {
                edit: "Edit Custom Presets",
                set: "Set Custom Status"
            },
            notification: {
                successfully: "Successfully saved status"
            }
        },
        steamStatusSync: {
            name: "SteamStatusSync",
            description: "Sync your status to Steam! (Online, Away, Invisible, or Offline.)",
            option: {
                onlineStatus: {
                    label: "Online Status",
                    description: "Steam status when on Online"
                },
                idleStatus: {
                    label: "Idle Status",
                    description: "Steam status when on Idle"
                },
                dndStatus: {
                    label: "Do Not Disturb Status",
                    description: "Steam status when on Do Not Disturb"
                },
                invisibleStatus: {
                    label: "Invisible Status",
                    description: "Steam status when on Invisible"
                },
                goInvisibleIfActivityIsHidden: {
                    label: "Go Invisible If Activity Is Hidden",
                    description: "Set Steam status to Invisible when Discord activity is hidden"
                }
            },
            status: {
                online: "Online",
                away: "Away",
                invisible: "Invisible",
                offline: "Offline (Disconnect Steam Chat)",
                disabled: "Disabled"
            }
        },
        stickerBlocker: {
            name: "StickerBlocker",
            description: "Allows you to block stickers from being displayed.",
            option: {
                showGif: {
                    label: "Show GIF",
                    description: "Whether to show a snazzy cat gif."
                },
                showMessage: {
                    label: "Show Message",
                    description: "Whether to show a message detailing which id was blocked"
                },
                showButton: {
                    label: "Show Button",
                    description: "Whether to show a button to unblock the gif"
                },
                blockedStickers: {
                    label: "Blocked Stickers",
                    description: "The list of blocked sticker IDs (don't edit unless you know what you're doing)"
                }
            },
            modal: {
                blocked: "Blocked Sticker. ID: {{id}} NAME: {{name}}",
                unblock: "Unblock {{name}}"
            },
            context: {
                blockSticker: "Block Sticker",
                unblockSticker: "Unblock Sticker"
            }
        },
        stickerPaste: {
            name: "StickerPaste",
            description: "Makes picking a sticker in the sticker picker insert it into the chatbox instead of instantly sending"
        },
        streamerModeOnStream: {
            name: "StreamerModeOnStream",
            description: "Automatically enables streamer mode when you start streaming in Discord"
        },
        streamingCodecDisabler: {
            name: "StreamingCodecDisabler",
            description: "Disable codecs for streaming of your choice",
            option: {
                disableAv1Codec: {
                    label: "Disable AV1 Codec",
                    description: "Make Discord not consider using AV1 for streaming."
                },
                disableH265Codec: {
                    label: "Disable H265 Codec",
                    description: "Make Discord not consider using H265 for streaming."
                },
                disableH264Codec: {
                    label: "Disable H264 Codec",
                    description: "Make Discord not consider using H264 for streaming."
                }
            }
        },
        superReactionTweaks: {
            name: "SuperReactionTweaks",
            description: "Customize the limit of Super Reactions playing at once, and super react by default",
            option: {
                superReactByDefault: {
                    label: "Super React By Default",
                    description: "Reaction picker will default to Super Reactions"
                },
                unlimitedSuperReactionPlaying: {
                    label: "Unlimited Super Reactions Playing",
                    description: "Remove the limit on Super Reactions playing at once"
                },
                superReactionPlayingLimit: {
                    label: "Super Reactions Playing Limit",
                    description: "Max Super Reactions to play at once. 0 to disable playing Super Reactions"
                }
            }
        },
        textReplace: {
            name: "TextReplace",
            description: "Replace text in your messages. You can find pre-made rules in the #textreplace-rules channel in Plexcord's Server",
            option: {
                replace: {
                    label: "Replace",
                    string: "Using String",
                    regex: "Using Regex",
                    myMessages: "Apply to your messages (visible to everyone)",
                    othersMessages: "Apply to others' messages (only visible to you)",
                    allMessages: "Apply to all messages"
                },
                stringRules: {
                    label: "String Rules",
                    description: "Rules for replacing text using string matching."
                },
                regexRules: {
                    label: "Regex Rules",
                    description: "Rules for replacing text using regular expressions."
                }
            },
            modal: {
                title: "Test Rules",
                find: "Find",
                replace: "Replace",
                includes: "Only if includes",
                type: "Type a message",
                applied: "Message with rules applied"
            }
        },
        themeAttributes: {
            name: "ThemeAttributes",
            description: "Adds data attributes to various elements for theming purposes"
        },
        timezones: {
            name: "Timezones",
            description: "Shows the local time of users in profiles and message headers",
            button: {
                wantToSave: "Want to save your timezone to the database? Click here to set it.",
                yourLocalTimezone: "(Your local timezone)"
            },
            context: {
                set: "Set Local Timezone"
            },
            toast: {
                refresh: {
                    successfully: "Timezones refreshed successfully!",
                    failed: "Timezones Failed to refresh!",
                    failedTo: "Failed to refresh timezones."
                },
                update: {
                    successfully: "Timezone updated successfully!",
                    failed: "Failed to set timezone."
                },
                delete: {
                    successfully: "Timezone deleted successfully!",
                    failed: "Failed to delete timezone."
                },
                auth: {
                    failed: "Authentication failed.",
                    success: "Authorization successful!"
                }
            },
            toolbox: {
                set: "Set Database Timezone",
                refresh: "Refresh Database Timezones"
            },
            option: {
                showOwnTimezone: {
                    label: "Show Own Timezone",
                    description: "Show your own timezone in profiles and message headers"
                },
                twentyFourHourTime: {
                    label: "24-Hour Time",
                    description: "Show time in 24-hour format"
                },
                showTimezoneInfo: {
                    label: "Show Timezone Info",
                    description: "Show timezone info next to time"
                },
                showMessageHeaderTime: {
                    label: "Show Message Header Time",
                    description: "Show time in message headers"
                },
                showProfileTime: {
                    label: "Show Profile Time",
                    description: "Show time in user profiles"
                },
                useDatabase: {
                    label: "Use Database Timezone",
                    description: "Enable database for getting user timezones"
                },
                preferDatabaseOverLocal: {
                    label: "Prefer Database Over Local",
                    description: "Prefer database over local storage for timezones"
                },
                databaseUrl: {
                    label: "Database URL",
                    description: "The URL of the timezone database server"
                },
                setDatabaseTimezone: {
                    label: "Set Database Timezone",
                    description: "Set your timezone on the database",
                    setTimezone: "Set Timezone on Database"
                },
                resetDatabaseTimezone: {
                    label: "Reset Database Timezone",
                    description: "Reset your timezone on the database",
                    failed: "Failed to reset database timezone"
                },
                askedTimezone: {
                    label: "Asked Timezone",
                    description: "Whether the user has been asked to set their timezone"
                }
            },
            modal: {
                title: "Timezones",
                select: "Select Timezone",
                selectPlaceholder: "Select a Timezone",
                delete: "Delete Timezone",
                save: "Save"
            }
        },
        toastNotifications: {
            name: "ToastNotifications",
            description: "Show a toast notification whenever you receive a direct message.",
            notification: {
                call: "Started a call with you!",
                recipient: {
                    add: "{{target}} was added to the group by {{actor}}.",
                    remove: "{{target}} was removed from the group by {{actor}}.",
                    left: "Left the group."
                },
                channel: {
                    change: {
                        name: "Changed the channel name to {{name}}.",
                        icon: "Changed the channel icon."
                    },
                    pinned: "Pinned a message."
                },
                sent: {
                    embed: "Sent an embed.",
                    sticker: "Sent a sticker.",
                    attachment: "Attachment:"
                },
                redacted: "Message content has been redacted.",
                friend: {
                    accept: "{{user}} is now your friend",
                    acceptBody: "You can now message them directly.",
                    request: "{{user}} sent you a friend request.",
                    requestBody: "You can accept or decline it in the Friends tab."
                },
                example: {
                    title: "Example Notification",
                    body: "This is an example notification body."
                }
            },
            modal: {
                dismiss: "Dismiss Notification",
                attachments: "{{attachments}} attachment{{s}} {{were}} sent."
            },
            option: {
                position: {
                    label: "Position",
                    description: "The position of the toast notification",
                    topRight: "Top Right",
                    topLeft: "Top Left",
                    bottomRight: "Bottom Right",
                    bottomLeft: "Bottom Left"
                },
                timeout: {
                    label: "Timeout",
                    description: "Time in seconds notifications will be shown for"
                },
                opacity: {
                    label: "Opacity",
                    description: "The opacity of the toast notification"
                },

                determineServerNotifications: {
                    label: "Determine Server Notifications",
                    description: "Determine whether to show notifications based on server notification settings"
                },
                directMessages: {
                    label: "Direct Messages",
                    description: "Show notifications for direct messages"
                },
                groupMessages: {
                    label: "Group Messages",
                    description: "Show notifications for group messages"
                },
                friendServerNotifications: {
                    label: "Friend & Server Notifications",
                    description: "Show notifications when friends send messages in servers they share with you"
                },
                friendActivity: {
                    label: "Friend Activity",
                    description: "Show notifications for adding someone or receiving a friend request"
                },
                notifyFor: {
                    label: "Notify For",
                    description: "Create a list of channel ids to receive notifications from (separate with commas)"
                },
                ignoreUsers: {
                    label: "Ignore Users",
                    description: "Create a list of user ids to ignore all their notifications from (separate with commas)"
                },
                exampleButton: {
                    label: "Example Button",
                    description: "Show an example toast notification.",
                    show: "Show Example Notification"
                }
            }
        },
        toggleVideoBind: {
            name: "ToggleVideoBind",
            description: "Adds a customizable bind to toggle webcam.",
            option: {
                keyBind: {
                    label: "Keybind",
                    description: "The key to toggle webcam when pressed."
                },
                reqCtrl: {
                    label: "Require Ctrl",
                    description: "Require control to be held."
                },
                reqShift: {
                    label: "Require Shift",
                    description: "Require shift to be held."
                },
                reqAlt: {
                    label: "Require Alt",
                    description: "Require alt to be held."
                }
            }
        },
        translate: {
            name: "Translate",
            description: "Translate messages with Google Translate or DeepL",
            tooltip: {
                label: "Translate"
            },
            context: {
                translate: "Translate",
                open: "Open Translate Modal",
                auto: "Auto Translate Enabled"
            },
            option: {
                receivedInput: {
                    label: "Received Input",
                    description: "Language that received messages should be translated from"
                },
                receivedOutput: {
                    label: "Received Output",
                    description: "Language that received messages should be translated to"
                },
                sentInput: {
                    label: "Sent Input",
                    description: "Language that your own messages should be translated from"
                },
                sentOutput: {
                    label: "Sent Output",
                    description: "Language that your own messages should be translated to"
                },
                service: {
                    label: "Translation Service",
                    description: "DeepL requires a paid API key from DeepL Pro",
                    descriptionWeb: "Translation service (Not supported on Web!)",
                    google: "Google Translate",
                    deepl: "DeepL Free",
                    deeplPro: "DeepL Pro"
                },
                deeplApiKey: {
                    label: "DeepL API Key",
                    description: "DeepL API key",
                    placeholder: "Get your API key from https://deepl.com/your-account"
                },
                autoTranslate: {
                    label: "Auto Translate",
                    description: "Automatically translate your messages before sending. You can also shift/right click the translate button to toggle this"
                },
                showAutoTranslateTooltip: {
                    label: "Show Auto Translate Tooltip",
                    description: "Show a tooltip on the ChatBar button whenever a message is automatically translated"
                }
            },
            modal: {
                title: "Translate",
                select: "Select a language",
                auto: "Auto Translate",
                dismiss: "Dismiss",
                translated: "translated from {{from}}",
                failed: {
                    to: "Failed to translate {{text}}",
                    connect: "Failed to connect to DeepL API:"
                },
                wrong: "Something went wrong. If this issue persists, please check the console or ask for help in the support server.",
                deepl: {
                    api: "Deepl API quota exceeded. Falling back to Google Translate.",
                    apiKey: "DeepL API key is not set. Resetting to Google",
                    auth: "Invalid DeepL API key or version"
                },
                autoTranslateEnabled: {
                    title: "Plexcord Auto-Translate Enabled",
                    body: "You just enabled Auto Translate! Any message will automatically be translated before being sent.",
                    confirm: "Disable Auto-Translate",
                    cancel: "Got It",
                    secondaryConfirm: "Don't show again"
                }
            }
        },
        typingIndicator: {
            name: "TypingIndicator",
            description: "Adds an indicator if someone is typing on a channel.",
            option: {
                includeCurrentChannel: {
                    label: "Include Current Channel",
                    description: "Whether to show the typing indicator for the currently selected channel"
                },
                includeMutedChannels: {
                    label: "Include Muted Channels",
                    description: "Whether to show the typing indicator for muted channels."
                },
                includeIgnoredUsers: {
                    label: "Include Ignored Users",
                    description: "Whether to show the typing indicator for ignored users."
                },
                includeBlockedUsers: {
                    label: "Include Blocked Users",
                    description: "Whether to show the typing indicator for blocked users."
                },
                indicatorMode: {
                    label: "Indicator Mode",
                    description: "How should the indicator be displayed?",
                    both: "Avatars and animated dots",
                    dots: "Animated dots",
                    avatars: "Avatars"
                }
            }
        },
        typingTweaks: {
            name: "TypingTweaks",
            description: "Show avatars and role colours in the typing indicator",
            option: {
                showAvatars: {
                    label: "Show Several Users",
                    description: "Show avatars in the typing indicator"
                },
                showRoleColors: {
                    label: "Show Role Colors",
                    description: "Show role colors in the typing indicator"
                },
                alternativeFormatting: {
                    label: "Alternative Formatting",
                    description: "Show a more useful message when several users are typing"
                },
                amITyping: {
                    label: "Am I Typing",
                    description: "Shows you if other people can see you typing"
                }
            },
            others: {
                areTyping: "and {{count}} others are typing..."
            }
        },
        unindent: {
            name: "Unindent",
            description: "Trims leading indentation from codeblocks"
        },
        unitConverter: {
            name: "UnitConverter",
            description: "Converts metric units to Imperal units and vice versa",
            tooltip: "Convert Units",
            option: {
                myUnits: {
                    label: "My Units",
                    description: "the units you use and want things converted to. defaults to imperial",
                    imperial: "Imperial",
                    metric: "Metric"
                }
            },
            button: {
                dismiss: "Dismiss"
            }
        },
        unlimitedAccounts: {
            name: "UnlimitedAccounts",
            description: "Increases the amount of accounts you can add.",
            option: {
                maxAccounts: {
                    label: "Max Accounts",
                    description: "Number of accounts that can be added, or 0 for no limit"
                }
            }
        },
        unlockedAvatarZoom: {
            name: "UnlockedAvatarZoom",
            description: "Allows you to zoom in further in the image crop tool when changing your avatar",
            option: {
                zoomMultiplier: {
                    label: "Zoom Multiplier",
                    description: "Zoom multiplier"
                }
            }
        },
        unsuppressEmbeds: {
            name: "UnsuppressEmbeds",
            description: "Allows you to unsuppress embeds in messages",
            context: {
                unsuppress: "Unsuppress Embed",
                suppress: "Suppress Embed"
            }
        },
        uselessInfo: {
            name: "UselessInfo",
            description: "Shows random useless information within Discord; shortcuts and spacing are adjustable.",
            recording: "Recording...",
            record: "Record",
            option: {
                delay: {
                    label: "Notification Interval",
                    description: "Notification display interval in minutes"
                },
                historyHotkey: {
                    label: "History Panel Shortcut",
                    description: "Hotkey to show a history of previously shown facts"
                },
                randomFactHotkey: {
                    label: "Random Fact Shortcut",
                    description: "Hotkey to open the random fact panel"
                },
                sameFact: {
                    label: "Avoid showing same items",
                    description: "Avoid showing the same fact multiple times until all facts have been shown"
                },
                lastNFacts: {
                    label: "How many recents to avoid",
                    description: "Number of most recently shown facts to avoid repeating (0 = all-time)"
                }
            },
            modal: {
                title: "UselessInfo",
                history: {
                    none: "No facts yet. Use the shortcut or wait.",
                    source: "Source"
                },
                showRandom: "Show Random",
                close: "Close"
            },
            notification: {
                title: "Did you know?"
            }
        },
        userMessagesPronouns: {
            name: "UserMessagesPronouns",
            description: "Shows user pronouns in message headers",
            option: {
                pronounsFormat: {
                    label: "Pronouns Format",
                    description: "The format for pronouns to appear in chat",
                    lowercase: "Lowercase",
                    capitalized: "Capitalized"
                },
                showSelf: {
                    label: "Show Self",
                    description: "Enable or disable showing pronouns for yourself"
                }
            }
        },
        userVoiceShow: {
            name: "UserVoiceShow",
            description: "Shows an indicator when a user is in a Voice Channel",
            option: {
                showInUserProfileModal: {
                    label: "Show In User Profile Modal",
                    description: "Show a user's Voice Channel indicator in their profile next to the name"
                },
                showInMemberList: {
                    label: "Show In Member List",
                    description: "Show a user's Voice Channel indicator in the member and DMs list"
                },
                showInMessages: {
                    label: "Show In Messages",
                    description: "Show a user's Voice Channel indicator in messages"
                }
            },
            modal: {
                inVoiceChat: "In Voice Chat"
            },
            notification: {
                cannotJoin: "You cannot join the user's Voice Channel."
            }
        },
        uSRBG: {
            name: "USRBG",
            description: "Displays user banners from USRBG, allowing anyone to get a banner without Nitro",
            option: {
                nitroFirst: {
                    label: "Nitro First",
                    description: "Banner to use if both Nitro and USRBG banners are present",
                    nitro: "Nitro Banner",
                    usrbg: "USRBG Banner"
                },
                voiceBackground: {
                    label: "Voice Background",
                    description: "Use USRBG banners as voice chat backgrounds"
                }
            },
            button: "Get your own USRBG banner"
        },
        validReply: {
            name: "ValidReply",
            description: "Fixes 'Message could not be loaded' upon hovering over the reply"
        },
        validUser: {
            name: "ValidUser",
            description: "Fix mentions for unknown users showing up as '@unknown-user' (hover over a mention to fix it)",
            badges: {
                discordBugHunter: "Discord Bug Hunter",
                moderatorProgramsAlumni: "Moderator Programs Alumni",
                discordStaff: "Discord Staff",
                hypeSquadEvents: "HypeSquad Events",
                bravery: "HypeSquad Bravery",
                brilliance: "HypeSquad Brilliance",
                balance: "HypeSquad Balance",
                partneredServerOwner: "Partnered Server Owner",
                nitro: "Discord Nitro",
                earlySupporter: "Early Supporter",
                earlyVerifiedBotDeveloper: "Early Verified Bot Developer"
            }
        },
        voiceChatDoubleClick: {
            name: "VoiceChatDoubleClick",
            description: "Join voice chats via double click instead of single click"
        },
        vcNarrator: {
            name: "VCNarrator",
            description: "Announces when users join, leave, or move voice channels via narrator",
            option: {
                voice: {
                    label: "Voice"
                },
                volume: {
                    label: "Volume",
                    description: "Narrator Volume"
                },
                rate: {
                    label: "Rate",
                    description: "Narrator Speed"
                },
                sayOwnName: {
                    label: "Say Own Name",
                    description: "Say own name"
                },
                latinOnly: {
                    label: "Latin Only",
                    description: "Strip non latin characters from names before saying them"
                },
                joinMessage: {
                    label: "Join Message",
                    description: "Join Message"
                },
                leaveMessage: {
                    label: "Leave Message",
                    description: "Leave Message"
                },
                moveMessage: {
                    label: "Move Message",
                    description: "Move Message"
                },
                muteMessage: {
                    label: "Mute Message",
                    description: "Mute Message (only self for now)"
                },
                unmuteMessage: {
                    label: "Unmute Message",
                    description: "Unmute Message (only self for now)"
                },
                deafenMessage: {
                    label: "Deafen Message",
                    description: "Deafen Message (only self for now)"
                },
                undeafenMessage: {
                    label: "Undeafen Message",
                    description: "Undeafen Message (only self for now)"
                }
            },
            modal: {
                title: "Play Example Sounds",
                voiceTitle: "Voice",
                voice: "Select a voice",
                languageTitle: "Language",
                language: "Select a language",
                noVoice: "No narrator voices found. ",
                linuxNote: "Install speech-dispatcher or espeak and run Discord with the --enable-speech-dispatcher flag",
                someNarrator: "Try installing some in the Narrator settings of your Operating System",
                dontHaveEnglish: "You don't have any English voices installed, so the narrator might sound weird",
                customiseMessages: "You can customise the spoken messages below. You can disable specific messages by setting them to nothing",
                placeholdersInfo: "The special placeholders {{USER}}, {{DISPLAY_NAME}}, {{NICKNAME}} and {{CHANNEL}} will be replaced with the user's name (nothing if it's yourself), the user's display name, the user's nickname on current server and the channel's name respectively"
            }
        },
        viewIcons: {
            name: "ViewIcons",
            description: "Makes avatars and banners in user profiles clickable, adds View Icon/Banner entries in the user, server and group channel context menu.",
            context: {
                view: {
                    avatar: "View Avatar",
                    serverAvatar: "View Server Avatar",
                    icon: "View Icon",
                    banner: "View Banner"
                }
            },
            option: {
                format: {
                    label: "Format",
                    description: "Choose the image format to use for non animated images. Animated images will always use .gif"
                },
                imgSize: {
                    label: "Image Size",
                    description: "The image size to use"
                }
            }
        },
        viewRaw: {
            name: "ViewRaw",
            description: "Copy and view the raw content/data of any message, channel or guild",
            context: {
                copyLeft: "Copy Raw (Left Click) / View Raw (Right Click)",
                copyRight: "Copy Raw (Right Click) / View Raw (Left Click)",
                view: "View Raw"
            },
            option: {
                popoverButton: {
                    label: "Popover Button",
                    description: "Show a button in the message popover to view the raw content/data of the message."
                },
                clickMethod: {
                    label: "Click Method",
                    description: "Change the button to view the raw content/data of any message.",
                    left: "Left Click to view the raw content.",
                    right: "Right Click to view the raw content."
                }
            },
            modal: {
                title: "View Raw",
                content: "Content",
                data: "{{type}} Data",
                copied: "{{type}} data copied to clipboard!",
                copy: "Copy {{type}} JSON",
                copiedContent: "Content copied to clipboard!",
                copyContent: "Copy Raw Content"
            },
            types: {
                message: "Message",
                channel: "Channel",
                guild: "Guild",
                role: "Role",
                user: "User"
            }
        },
        voiceButtons: {
            name: "VoiceButtons",
            description: "Quickly DM, mute, or deafen any user right from the voice-call panel.",
            option: {
                showChatButton: {
                    label: "Show Chat Button",
                    description: "Whether you want to display the chat button"
                },
                showMuteButton: {
                    label: "Show Mute Button",
                    description: "Whether you want to display the mute button"
                },
                showDeafenButton: {
                    label: "Show Deafen Button",
                    description: "Whether you want to display the deafen button"
                },
                muteSoundboard: {
                    label: "Mute Soundboard",
                    description: "Toggles their soundboard upon clicking deafen button."
                },
                disableVideo: {
                    label: "Disable Video",
                    description: "Toggles their video upon clicking deafen button."
                },
                useServer: {
                    label: "Use Server",
                    description: "Use server mute/deafen instead of local when you have permission."
                },
                serverSelf: {
                    label: "Server Self",
                    description: "Deafen / Mute yourself on the server when using mute/deafen."
                },
                showButtonsSelf: {
                    label: "Show Buttons on Self",
                    description: "Whether you want to display buttons for your own user. Same functionality as other button(s) except it'll open DMs panel and mute/deafen for yourself upon clicking button(s).",
                    display: "Display",
                    hide: "Hide",
                    disable: "Disable"
                },
                whichNameToShow: {
                    label: "Which Name to Show",
                    description: "Choose whether to show nickname or username in tooltip.",
                    global: "Global Name",
                    username: "Username",
                    both: "Both"
                }
            },
            tooltip: {
                navigate: "Navigate to DMs",
                open: "Open DMs with {{username}}",
                yourself: "yourself",
                serverMute: "Server Mute",
                serverDeafen: "Server Deafen",
                mute: "Mute",
                deafen: "Deafen",
                unmute: "Unmute",
                undeafen: "Undeafen",
                serverUnmute: "Server Unmute",
                serverUndeafen: "Server Undeafen"
            }
        },
        voiceChannelLog: {
            name: "VoiceChannelLog",
            description: "Logs who joins and leaves voice channels",
            context: {
                view: "View Channel Log"
            },
            modal: {
                joined: "Joined <#{{channel}}>",
                left: "Left <#{{channel}}>",
                movedTo: "Moved to <#{{channel}}>",
                movedFrom: "Moved from <#{{channel}}>",
                noLogs: "No logs to display.",
                logs: "{{channel}} logs"
            },
            option: {
                mode: {
                    label: "Mode",
                    description: "How to show the voice channel log",
                    menu: "Log menu",
                    associated: "Log to associated chat directly",
                    both: "Log to chat and log menu"
                },
                voiceChannelChatSelf: {
                    label: "Voice Channel Chat Self",
                    description: "Log your own voice channel events in the voice channels"
                },
                voiceChannelChatSilent: {
                    label: "Voice Channel Chat Silent",
                    description: "Join/leave/move messages in voice channel chats will be silent"
                },
                voiceChannelChatSilentSelf: {
                    label: "Voice Channel Chat Silent Self",
                    description: "Join/leave/move messages in voice channel chats will be silent if you are in the voice channel"
                },
                ignoreBlockedUsers: {
                    label: "Ignore Blocked Users",
                    description: "Do not log blocked users"
                }
            }
        },
        voiceChatUtilities: {
            name: "VoiceChatUtilities",
            description: "This plugin allows you to perform multiple actions on an entire channel (move, mute, disconnect, etc.) (originally by dutake)",
            option: {
                waitAfter: {
                    label: "Wait After Action",
                    description: "Amount of API actions to perform before waiting (to avoid rate limits)"
                },
                waitSeconds: {
                    label: "Wait Seconds",
                    description: "Time to wait between each action (in seconds)"
                }
            },
            context: {
                voiceTools: "Voice Tools",
                disconnectAll: "Disconnect All",
                muteAll: "Mute All",
                unmuteAll: "Unmute All",
                deafenAll: "Deafen All",
                undeafenAll: "Undeafen All",
                moveAll: "Move All"
            }
        },
        voiceDownload: {
            name: "VoiceDownload",
            description: "Adds a download to voice messages. (Opens a new browser tab)",
            context: {
                download: "Download voice message"
            }
        },
        voiceMessages: {
            name: "VoiceMessages",
            description: "Allows you to send voice messages like on mobile. To do so, right click the upload button and click Send Voice Message.",
            option: {
                noiseSuppression: {
                    label: "Noise Suppression",
                    description: "Noise Suppression"
                },
                echoCancellation: {
                    label: "Echo Cancellation",
                    description: "Echo Cancellation"
                }
            },
            notification: {
                failed: {
                    upload: "Failed to upload voice message.",
                    start: "Failed to start recording.",
                    finish: "Failed to finish recording."
                }
            },
            context: {
                sendVoiceMessage: "Send Voice Message",
                missingPermissions: "(Missing Permissions)"
            },
            modal: {
                record: "Record Voice Message",
                upload: "Upload File",
                preview: "Preview",
                failed: "Failed to parse selected audio file:",
                oggOpus: "Voice Messages have to be OggOpus to be playable on iOS. This file is {{type}} so it will not be playable on iOS.",
                fix: "To fix it, first convert it to OggOpus, for example using the {{link}}",
                sending: "Now sending voice message... Please be patient.",
                stop: "Stop recording",
                start: "Start recording",
                resume: "Resume recording",
                pause: "Pause recording",
                recording: "RECORDING",
                send: "Send",
            }
        },
        volumeBooster: {
            name: "VolumeBooster",
            description: "Allows you to set the user and stream volume above the default maximum",
            option: {
                multiplier: {
                    label: "Multiplier",
                    description: "Volume Multiplier"
                }
            }
        },
        wallpaperFree: {
            name: "WallpaperFree",
            description: "Recreation of the old DM wallpaper experiment; Set a background image for any channel, user or server.",
            option: {
                globalDefault: {
                    label: "Global Default",
                    description: "Set a global default wallpaper for all channels."
                },
                stylingTips: {
                    label: "Styling Tips"
                }
            },
            context: {
                setWallpaper: "Set Wallpaper",
                removeWallpaper: "Remove Wallpaper"
            },
            modal: {
                set: "Set wallpaper",
                image: "The image URL",
                cancel: "Cancel",
                apply: "Apply",
                global: {
                    set: "Set a global wallpaper",
                    remove: "Remove global default wallpaper",
                    reset: "Reset wallpaper data"
                },
                web: {
                    info: "you can use local files by having them in the plexcord theme directory, and using the url plexcord:///themes/filename.ext",
                    open: "Open Theme Directory",
                    quickCSS: "Open QuickCSS"
                }
            }
        },
        webContextMenus: {
            name: "WebContextMenus",
            description: "Re-adds context menus missing in the web version of Discord: Links & Images (Copy/Open Link/Image), Text Area (Copy, Cut, Paste, SpellCheck)",
            option: {
                addBack: {
                    label: "Add Back",
                    description: "Add back the Discord context menus for images, links and the chat input bar"
                }
            }
        },
        webKeybinds: {
            name: "WebKeybinds",
            description: "Re-adds keybinds missing in the web version of Discord: ctrl+t, ctrl+shift+t, ctrl+tab, ctrl+shift+tab, ctrl+1-9, ctrl+,. Only works fully on Plextron/Legcord, not inside your browser"
        },
        webScreenShareFixes: {
            name: "WebScreenShareFixes",
            description: "Removes 2500kbps bitrate cap on chromium and Plextron clients.",
            option: {
                experimentalAV1Support: {
                    label: "Experimental AV1 Support",
                    description: "Enable AV1 codec support. May cause issues like infinitely loading streams"
                }
            }
        },
        whoReacted: {
            name: "WhoReacted",
            description: "Renders the avatars of users who reacted to a message",
            option: {
                avatarClick: {
                    label: "Avatar Click",
                    description: "Toggle clicking avatars in reactions"
                }
            }
        },
        whosWatching: {
            name: "WhosWatching",
            description: "Hover over the screenshare icon to view what users are watching your stream",
            modal: {
                noSpectator: "No spectators"
            },
            option: {
                showPanel: {
                    label: "Show Panel",
                    description: "Show spectators under screenshare panel"
                }
            }
        },
        writeUpperCase: {
            name: "WriteUpperCase",
            description: "Changes the first Letter of each Sentence in Message Inputs to Uppercase",
            option: {
                blockedWords: {
                    label: "Blocked Words",
                    description: "Strings not to capitilise (seperate with a comma)"
                }
            }
        },
        xSOverlay: {
            name: "XSOverlay",
            description: "Forwards discord notifications to XSOverlay, for easy viewing in VR",
            notification: {
                call: {
                    title: "{{user}} is calling you.",
                    content: "Incoming call"
                },
                message: {
                    reply: " (reply)",
                    embed: " [embed] ",
                    onlyEmbed: "sent message embed(s)",
                    sticker: " [sticker] ",
                    onlySticker: "sent a sticker",
                    image: "image",
                    attachment: "attachment"
                },
                test: {
                    title: "Hello from Plexcord!",
                    content: "This is a test notification! explode",
                    button: "Send test notification"
                }
            },
            option: {
                webSocketPort: {
                    label: "WebSocket Port",
                    description: "Websocket port"
                },
                preferUDP: {
                    label: "Prefer UDP",
                    description: "Enable if you use an older build of XSOverlay unable to connect through websockets. This setting is ignored on web."
                },
                botNotifications: {
                    label: "Bot Notifications",
                    description: "Allow bot notifications"
                },
                serverNotifications: {
                    label: "Server Notifications",
                    description: "Allow server notifications"
                },
                dmNotifications: {
                    label: "DM Notifications",
                    description: "Allow Direct Message notifications"
                },
                groupDmNotifications: {
                    label: "Group DM Notifications",
                    description: "Allow Group DM notifications"
                },
                callNotifications: {
                    label: "Call Notifications",
                    description: "Allow call notifications"
                },
                pingColor: {
                    label: "Ping Color",
                    description: "User mention color"
                },
                channelPingColor: {
                    label: "Channel Ping Color",
                    description: "Channel mention color"
                },
                soundPath: {
                    label: "Sound Path",
                    description: "Notification sound (default/warning/error)"
                },
                timeout: {
                    label: "Timeout",
                    description: "Notification duration (secs)"
                },
                lengthBasedTimeout: {
                    label: "Length Based Timeout",
                    description: "Extend duration with message length"
                },
                opacity: {
                    label: "Opacity",
                    description: "Notification opacity"
                },
                volume: {
                    label: "Volume",
                    description: "Volume"
                }
            }
        },
        youtubeAdblock: {
            name: "YouTubeAdblock",
            description: "Block ads in YouTube embeds and the WatchTogether activity via AdGuard"
        },
        youtubeDescription: {
            name: "YouTubeDescription",
            description: "Adds descriptions to youtube video embeds"
        }
    }
} as const;

type DeepKeyProxy<T> = {
    [K in keyof T]: T[K] extends object
    ? DeepKeyProxy<T[K]>
    : T[K] extends string
    ? T[K]
    : string;
} & {
    toString(): string;
    valueOf(): string;
};

function createKeyProxy<T extends Record<string, any>>(obj: T, path: string[] = []): DeepKeyProxy<T> {
    const handler: ProxyHandler<any> = {
        get(target, prop: string | symbol) {
            if (typeof prop === "symbol") return undefined;
            if (prop === "toString" || prop === "valueOf") {
                return () => path.join(".");
            }
            // Check if we're at the root and accessing a top-level property
            if (path.length === 0 && typeof obj[prop] === "object") {
                return createKeyProxy(obj[prop], [prop]);
            }
            return createKeyProxy(obj, [...path, prop]);
        }
    };

    return new Proxy({}, handler) as DeepKeyProxy<T>;
}

export const settings = createKeyProxy(translations.settings, ["settings"]);
export const plugins = createKeyProxy(translations.plugins, ["plugins"]);
export const patchHelper = createKeyProxy(translations.patchHelper, ["patchHelper"]);
export const sync = createKeyProxy(translations.sync, ["sync"]);
export const changelog = createKeyProxy(translations.changelog, ["changelog"]);
export const cloud = createKeyProxy(translations.cloud, ["cloud"]);
export const csp = createKeyProxy(translations.csp, ["csp"]);
export const themes = createKeyProxy(translations.themes, ["themes"]);
export const updater = createKeyProxy(translations.updater, ["updater"]);
export const components = createKeyProxy(translations.components, ["components"]);
export const commands = createKeyProxy(translations.commands, ["commands"]);
export const notifications = createKeyProxy(translations.notifications, ["notifications"]);
export const memberlist = createKeyProxy(translations.memberlist, ["memberlist"]);
export const message = createKeyProxy(translations.message, ["message"]);
export const utils = createKeyProxy(translations.utils, ["utils"]);
export const common = createKeyProxy(translations.common, ["common"]);
export const plugin = createKeyProxy(translations.plugin, ["plugin"]);

export default translations;
