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
                description: "Apply your configured QuickCSS"
            },
            enableReactDevtools: {
                label: "Enable React Developer Tools",
                description: "Mainly useful for plugin developers. Ignore this if you don't know what it is"
            },
            mainWindowFrameless: {
                label: "Disable the Main Window Frame",
                description: "Remove the native window frame for a cleaner look. You can still move the window by dragging the title bar area."
            },
            frameless: {
                label: "Disable the window frame",
                description: "Remove the native window frame for a cleaner look. You can still move the window by dragging the title bar area."
            },
            nativeTitleBar: {
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
                description: "Allows you to resize the window to any size, even smaller than Discord's minimum size"
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
        windowsMaterial: {
            title: "Windows Background Material (Requires Restart)",
            description: "Windows transparent background effects. You need a theme that supports transparency or this will do nothing. A restart is required after changing this setting.",
            material: {
                none: "None",
                mica: "Mica (incorporates system theme + desktop wallpaper to paint the background)",
                tabbed: "Tabbed (variant of Mica with stronger background tinting)",
                acrylic: "Acrylic (blurs the window behind Discord for a translucent background)"
            }
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
        },
        tabs: {
            renderFailed: "Failed to render the {{tab}} tab. If this issue persists, try using the installer to reinstall!"
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
            dev: "Developer version of Plexcord",
            browser: "Web Browser version of Plexcord"
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
                api: "Show API Plugins",
                type: "Filter by Type",
                tags: "Filter by Tags",
                favorites: "Show Favorites"
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
            source: "View source code",
            favorite: "Favorite plugin - pins it to the top of the plugin list",
            unfavorite: "Unfavorite plugin"
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
                    userArea: "API to add buttons to the user area panel.",
                    profileCollections: "API to add collections to the user profile panel like discords game collection.",
                    profileSections: "API to add sections near the 'Member Since' area of user profile panels.",
                    headerBar: "API to add buttons to the header bar.",
                    surfaceClasses: "API to add plugin-owned semantic data attributes and limited props to stable Discord layout surfaces."
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
        },
        invalidInput: "Invalid input provided",
        loading: "Loading...",
        authorPrefix: "by"
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
        },
        backupFileType: "Plexcord Settings Backup"
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
                    from: "Could not synchronize settings from the cloud (API returned {{status}}).",
                    manifest: "Could not fetch manifest for deletion (API returned {{status}})."
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
        more: "+{{count}} more plugins",
        error: {
            retrieveRepo: "Failed to retrieve repository information",
            fetchRepo: "Failed to fetch from repository",
            connectRepo: "Failed to connect to repository. Check your internet connection."
        }
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
        activation: {
            title: "Theme activation",
            always: "Always on",
            lightOnly: "Light only",
            darkOnly: "Dark only"
        },
        actions: {
            pin: "Pin",
            unpin: "Unpin",
            editSettings: "Edit Settings"
        },
        unknown: {
            title: "Unknown",
            author: "Unknown Author",
            theme: "A Discord Theme",
            description: "No description provided."
        },
        required: "The following plugins are required, but aren't enabled: ",
        homepage: "Homepage",
        support: "Support",
        online: {
            title: "Online Themes",
            description: "Load themes directly from URLs instead of local files. Online themes auto-update when the source changes, so you always have the latest version without manual downloads.",
            enable: "Enable Online Themes",
            enableDescription: "Toggle online theme loading. When disabled, all online themes will be turned off and you won't be able to add new ones.",
            placeholder: "https://example.com/theme.css"
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
        },
        openInFolder: "Open in Folder",
        fallback: {
            author: "Unknown Author",
            description: "A Discord Theme."
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
        unknownAuthor: "Unknown Author"
    },

    components: {
        error: {
            title: "Oh no!",
            render: "An error occurred while rendering this Component. More info can be found below and in your console."
        },
        componentFailed: {
            message: "Uh Oh! Failed to render this Page. However, there is an update available that might fix it. Would you like to update and restart now?"
        },
        quickCSS: {
            title: "QuickCSS Editor Open",
            message: "QuickCSS editor is still open in the background.",
            detail: "Do you want to close Discord anyway? This will also close the QuickCSS editor.",
            cancel: "Cancel",
            close: "Close Anyway",
            windowTitle: "Plexcord QuickCSS Editor"
        },
        messagePopover: {
            scrollLeft: "Scroll left",
            scrollRight: "Scroll right"
        },
        notices: {
            error: "Error Showing Notice"
        },
        tray: {
            aboutPlexcord: "About Plexcord",
            updatePlexcord: "Update Plexcord",
            noUpdateTitle: "No Update Available",
            noUpdateBody: "You are already using the latest version of Plexcord.",
            updateFailedTitle: "Update Failed",
            updateFailedBody: "Failed to apply the update for Plexcord.",
            updateSuccessTitle: "Update Successful",
            updateSuccessBody: "Now relaunching Plexcord to apply the update.",
            updateErrorTitle: "Update Error",
            updateErrorBody: "An error occurred while updating Plexcord.\n\n{{error}}",
            openSettingsFolder: "Open Settings Folder",
            openThemesFolder: "Open Themes Folder"
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
        },
        detectLanguage: "Detect language"
    },

    plugin: {
        tags: {
            accessibility: "Accessibility",
            activity: "Activity",
            appearance: "Appearance",
            chat: "Chat",
            commands: "Commands",
            console: "Console",
            customisation: "Customisation",
            developers: "Developers",
            emotes: "Emotes",
            friends: "Friends",
            fun: "Fun",
            media: "Media",
            notifications: "Notifications",
            organisation: "Organisation",
            privacy: "Privacy",
            reactions: "Reactions",
            roles: "Roles",
            servers: "Servers",
            shortcuts: "Shortcuts",
            utility: "Utility",
            voice: "Voice"
        },
        concatenatedComponentExtractor: {
            name: "ConcatenatedComponentExtractor",
            description: "Extract components that have been concatenated by the bundler"
        },
        concatenatedModules: {
            name: "ConcatenatedModules",
            description: "Extract modules that have been concatenated by the bundler"
        },
        noTrack: {
            name: "NoTrack",
            description: "Disable Discord's tracking (analytics/'science'), metrics and Sentry crash reporting",
            option: {
                disableAnalytics: {
                    label: "Disable Analytics",
                    description: "Block Discord's tracking analytics. Disable this if you want badges to track your progress (eg: hours streamed)."
                },
                disableStackDumping: {
                    description: "Print a native stack trace to the console when Discord crashes. Requires full restart."
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
                },
                includePlexcordInfoWhenCopying: {
                    label: "Include Plexcord Info When Copying",
                    description: "Also copy Plexcord info (Plexcord, Electron, Chromium) when clicking the version info in the bottom left area of the Settings page"
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
                    dismiss: "If you know what you're doing or cannot update, you can dismiss this prompt.",
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
                    timestamp: "Timestamp",
                    date: "Date"
                },
                randomisedLength: {
                    label: "Randomised Length",
                    description: "Randomised character length"
                },
                consistent: {
                    label: "Consistent",
                    description: "Consistent anonymisation secret"
                },
                dateFormat: {
                    description: "Date format (YYYY, MM, DD, HH, mm, ss, SSS are supported)",
                    label: "Date Format"
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
            },
            text: {
                smallText: "Small Text",
                largeText: "Large Text"
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
                }
            },
            toast: {
                invalidColorFormat: "Invalid color format for {{settingKey}}, make sure it's in the format 'R, G, B' or '#RRGGBB'",
                invalidColorFormatFor: "Invalid color format for {{key}}, use \"R, G, B\" or \"#RRGGBB\""
            }
        },
        betterBackreading: {
            name: "BetterBackreading",
            description: "Improve backreading with earlier message loading and less rubberbanding.",
            wholeNumber: "Enter a whole number from {{min}} to {{max}}.",
            option: {
                imageScrollMargin: {
                    label: "Image Preload Distance",
                    description: "How far ahead to load images, in pixels (300-3000)."
                },
                messageLoadBuffer: {
                    label: "Message Load Buffer",
                    description: "How far ahead to fetch more messages, in pixels (500-3000)."
                },
                useDiscordMessageCount: {
                    label: "Use Discord's Dynamic Message Count",
                    description: "Let Discord choose how many messages to fetch based on your window and chat settings."
                },
                messageCount: {
                    label: "Custom Message Count",
                    description: "How many messages to fetch per history request when the dynamic count is disabled (30-100)."
                },
                channelOpenScrollMode: {
                    label: "Channel Opening Position",
                    description: "Open unread channels at the saved position (or bottom), always the bottom, or defer to default unread behavior.",
                    default: "Discord Default",
                    bottom: "Always Bottom",
                    saved: "Saved Position"
                }
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
            add: "Add another reason",
            duration: {
                discordDefault: "Discord default",
                none: "Don't delete any",
                hour1: "Previous hour",
                hours6: "Previous 6 hours",
                hours12: "Previous 12 hours",
                hours24: "Previous 24 hours",
                days3: "Previous 3 days",
                days7: "Previous 7 days"
            },
            text: {
                autoDeleteDuration: "Message Auto-delete duration"
            }
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
                enableNestedFolders: {
                    label: "Enable Nested Folders",
                    description: "Allow nesting folders inside other folders by dragging"
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
            description: "Makes the gif picker open the favorite category by default",
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
                headerSelf: "You sent an invite to join {{server}}",
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
            description: "Adds options to copy role color / edit role / view role icon when right clicking roles in the user profile or in the member list",
            option: {
                roleIconFileFormat: {
                    label: "Role Icon File Format",
                    description: "File format to use when viewing role icons"
                }
            },
            context: {
                copyColor: "Copy Role Color",
                editRole: "Edit Role",
                viewIcon: "View Role Icon",
                viewMembers: "View Role Members"
            },
            text: {
                roleActions: "Role Actions"
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
            regexHelper: {
                title: "Regex Helper",
                placeholder: "Input to test...",
                noPatterns: "No patterns configured"
            },
            option: {
                blockedWords: {
                    label: "Blocked Words",
                    description: "Comma-separated list of words to block"
                },
                useRegex: {
                    label: "Use Regex",
                    description: "Use each value as a regular expression when checking message content (advanced)"
                },
                regexHelper: {
                    label: "Regex Helper",
                    description: "Test your regular expressions against a sample input"
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
            },
            text: {
                unknownUser: "Unknown User"
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
                    label: "All Call Timers",
                    description: "Show call timers for all users in servers"
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
                selectedBorder: "Selected Tab Accent Border",
                selectedBackground: "Selected Tab Background Color",
                tabShadows: "Tab Shadow Effects",
                tabRepositioning: "Tab Repositioning (smooth position changes)",
                resizeHandle: "Resize Handle Fade",
                questActivate: "Active Quests Gradient"
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
                searchPlaceholder: "Search bookmarks",
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
                cancel: "Cancel",
                reset: "Reset",
                close: "Close"
            },
            context: {
                label: "ChannelTabs Context Menu",
                bookmark: "ChannelTabs Bookmark Context Menu",
                tab: "ChannelTabs Tab Context Menu",
                folderMenu: "Bookmark Folder Menu",
                compact: "Compact",
                bookmarkBar: "Bookmark Bar",
                openAll: "Open All Bookmarks",
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
                },
                folderIcon: {
                    title: "Choose Folder Icon",
                    preview: "Preview",
                    iconColor: "Icon Color",
                    search: "Search",
                    searchPlaceholder: "Search {{count}} icons...",
                    folderName: "Folder Name",
                    folderColor: "Folder Color",
                    folderIcon: "Folder Icon",
                    chooseIcon: "Choose Icon",
                    useDefaultIcon: "Use Default Icon"
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
                persistUnreadCountFallback: {
                    label: "Persist Unread Count Fallback",
                    description: "Persist unread badge fallbacks across reloads for tabs and bookmarks"
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
                tabHeightScale: {
                    label: "Tab Height Scale",
                    description: "Tab height scale (percentage)."
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
                    shortcutDisabled: "This shortcut is currently disabled",
                    pressKey: "Press any key...",
                    conflictError: "This keybind is already used by: {{key}}",
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
            },
            text: {
                folder: "Folder"
            }
        },
        characterCounter: {
            name: "CharacterCounter",
            description: "Adds a character counter to the chat input",
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
            description: "Remove emoji and decoration from channel names. Reverts to the original while you're editing the channel.",
            option: {
                ignoredChannels: {
                    description: "Comma separated list of channel IDs to leave untouched.",
                    label: "Ignored Channels"
                }
            },
            text: {
                keepOriginalName: "Keep Original Name"
            }
        },
        clearURLs: {
            name: "ClearURLs",
            description: "Automatically removes tracking elements from URLs you send"
        },
        clickableRoles: {
            name: "ClickableRoles",
            description: "Click on roles in user profiles and the member list to see which members have them.",
            modal: {
                loading: "Loading members...",
                noMembers: "No members found.",
                unknown: "Unknown Role",
                andMore: "and {{count}} more"
            }
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
            },
            text: {
                dark: "Dark",
                light: "Light"
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
            description: "Raycast style command palette for running actions anywhere in Discord",
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
                },
                commandDeleted: "Command deleted.",
                statusSetToLabel: "Status set to {{label}}.",
                themeSetToLabel: "Theme set to {{label}}.",
                noSettingsPageWas: "No settings page was provided.",
                unableToOpenLabel: "Unable to open {{label_that_settings_page}}.",
                failedToStartDependencies: "Failed to start dependencies: {{join}}",
                messageSentToUsername: "Message sent to {{username}}.",
                enabledRestart: "{{name}} enabled. Restart to apply.",
                disabledRestart: "{{name}} disabled. Restart to apply.",
                enabled: "{{name}} enabled.",
                disabled: "{{name}} disabled.",
                errorStarting: "Error while starting {{name}}.",
                errorStopping: "Error while stopping {{name}}."
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
                },
                closeAfterExecute: {
                    description: "Close the palette after running a command.",
                    label: "Close After Execute"
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
            },
            text: {
                insertTextInChat: "Insert Text in Chat",
                name: "Name",
                commandName: "Command name",
                settingsPage: "Settings page",
                searchSettingsPages: "Search settings pages...",
                text: "Text",
                textToInsertInto: "Text to insert into the chat box",
                editCommand: "Edit Command",
                deleteCommand: "Delete Command",
                createCustomCommand: "Create Custom Command",
                light: "Light",
                ash: "Ash",
                dark: "Dark",
                onyx: "Onyx",
                toggleMute: "Toggle Mute",
                toggleDeafen: "Toggle Deafen",
                setStatus: "Set Status",
                searchStatuses: "Search statuses...",
                setLabel: "Set {{label}}",
                toggleTheme: "Toggle Theme",
                openServer: "Open Server",
                openChannel: "Open Channel",
                openDm: "Open DM",
                goHome: "Go Home",
                goToServer: "Go to Server",
                searchServers: "Search servers...",
                goToChannel: "Go to Channel",
                searchChannels: "Search channels...",
                searchFriends: "Search friends...",
                myAccount: "My Account",
                profiles: "Profiles",
                dataPrivacy: "Data & Privacy",
                devices: "Devices",
                connections: "Connections",
                appearance: "Appearance",
                accessibility: "Accessibility",
                voiceVideo: "Voice & Video",
                chat: "Chat",
                textImages: "Text & Images",
                notifications: "Notifications",
                keybinds: "Keybinds",
                authorizedApps: "Authorized Apps",
                familyCenter: "Family Center",
                advanced: "Advanced",
                plexcord: "Plexcord",
                plexcordPlugins: "Plexcord Plugins",
                plexcordThemes: "Plexcord Themes",
                plexcordUpdater: "Plexcord Updater",
                plexcordChangelog: "Plexcord Changelog",
                openQuickcss: "Open QuickCSS",
                openUpdater: "Open Updater",
                openChangelog: "Open Changelog",
                restartDiscord: "Restart Discord",
                managePlugins: "Manage Plugins",
                searchPlugins: "Search plugins...",
                sendDm: "Send DM",
                recipient: "Recipient",
                message: "Message",
                messageContent: "Message content",
                openPaletteHotkey: "Open palette hotkey",
                actions: "Actions",
                preview: "Preview",
                openCommand: "Open Command",
                copyAnswer: "Copy Answer",
                openDetails: "Open Details",
                calculator: "Calculator",
                expression: "Expression",
                result: "Result",
                copyExpression: "Copy Expression",
                pinned: "Pinned",
                suggestions: "Suggestions",
                setAlias: "Set Alias",
                aliasForLabel: "Alias for {{label}}",
                leaveEmptyToRemove: "Leave empty to remove",
                command: "Command",
                noResults: "No results",
                addFile: "Add file",
                saveCommand: "Save Command",
                createCommand: "Create Command",
                nameRequired: "Name is required.",
                enterValidUrl: "Enter a valid URL.",
                pickSettingsPage: "Pick a settings page from the suggestions.",
                textRequired: "Text is required.",
                commandSaved: "Command saved.",
                commandCreated: "Command created.",
                editCustomCommand: "Edit Custom Command",
                disablePlugin: "Disable Plugin",
                enablePlugin: "Enable Plugin",
                pickRecipient: "Pick a recipient from the suggestions.",
                addMessageOrFile: "Add a message or a file.",
                pressKeys: "Press keys...",
                answerCopied: "Answer copied to clipboard.",
                calculationCopied: "Calculation copied to clipboard.",
                unpinCommand: "Unpin Command",
                pinCommand: "Pin Command",
                saveAlias: "Save Alias",
                changeHotkey: "Change Hotkey",
                recordHotkey: "Record Hotkey",
                pressKeyCombo: "Press a key combo, Backspace to clear, Esc to cancel",
                searchIn: "Search {{title}}...",
                searchCommands: "Search for commands...",
                somethingWentWrong: "Something went wrong.",
                remove: "Remove",
                enabled: "Enabled",
                disabled: "Disabled",
                sectionNavigation: "Navigation",
                sectionCustom: "Custom",
                sectionPlugins: "Plugins",
                sectionMessaging: "Messaging",
                current: "Current",
                submit: "Submit"
            },
            description2: "Raycast style command palette for running actions anywhere in Discord"
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
            copy: "Copy Server Profile Colors",
            toast: {
                noColor: "No profile colors found!",
                copied: "Profile colors copied to clipboard!",
                error: "Error copying profile colors!"
            },
            text: {
                formatted: "Primary color #{{primary}}, Secondary color #{{secondary}}"
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
                copy: "Copy Sticker Link",
                open: "Open Sticker Link"
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
                    body: "Awn :( Discord has crashed two times rapidly, not attempting to recover.",
                    update: "Uh oh, Discord has just crashed... but good news, there is a Plexcord update available that might fix this issue! Would you like to update now?",
                    recover: "Attempting to recover...",
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
            },
            context: {
                changeIcon: "Change Icon"
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
                sharing: "Activity Sharing isn't enabled, so people won't be able to see your custom rich presence!",
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
                },
                enablePresence: {
                    description: "Whether to show the presence",
                    label: "Enable Presence"
                }
            },
            toast: {
                savedPresetName: "Saved preset {{name}}.",
                loadedPresetName: "Loaded preset {{name}}.",
                deletedPresetSelectedpreset: "Deleted preset {{selectedPreset}}."
            },
            text: {
                presetName: "Preset name",
                selectAPreset: "Select a preset",
                streamLinkTwitchOr: "Stream Link (Twitch or YouTube, only if activity type is Streaming)",
                presets: "Presets",
                save: "Save",
                load: "Load",
                delete: "Delete",
                noSavedPresetsYet: "No saved presets yet.",
                showCustomRpc: "Show Custom RPC",
                customRpcDisabled: "Custom RPC disabled",
                theEnablePresenceSetting: "The \"Enable Presence\" setting is disabled, so your presence won't show. If this was unintentional, enable it below.",
                activitySharingDisabled: "Activity Sharing disabled",
                discordDeveloperPortal: "Discord Developer Portal",
                imgur: "Imgur",
                enableActivitySharing: "Enable Activity Sharing"
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
                select: "Select a file...",
                overrides: {
                    label: "Overrides"
                },
                soundpack: {
                    label: "Soundpack",
                    description: "Soundpack to use instead of the one set in Discord.",
                    default: "Discord Default"
                }
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
                or: "or",
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
            },
            text: {
                toggleDearrow: "Toggle Dearrow"
            }
        },
        declutter: {
            name: "Declutter",
            description: "Cleans up Discord by removing non-essential UI elements like profile effects, shop tabs, boosts, and more.",
            option: {
                userProfileHeader: {
                    label: "User Profile"
                },
                removeAvatarDecoration: {
                    label: "Remove Avatar Decoration",
                    description: "Remove avatar decorations. This is/will be disabled if Decor is enabled.",
                    alertBody: "Avatar decoration removal has been disabled to prevent conflicts with Decor plugin.",
                    ok: "OK"
                },
                removeNameplate: {
                    label: "Remove Nameplate",
                    description: "Remove nameplates."
                },
                removeProfileEffect: {
                    label: "Remove Profile Effect",
                    description: "Remove profile animation effects on open."
                },
                removeClanTag: {
                    label: "Remove Clan Tag",
                    description: "Remove clan tags."
                },
                alwaysShowUsername: {
                    label: "Always Show Username",
                    description: "Always show username instead of status."
                },
                accessibilityNotice: {
                    label: "Accessibility Notice",
                    description: "Discord already has a built-in username style option in Accessibility settings."
                },
                friendsListHeader: {
                    label: "Above Friends/DMs List"
                },
                removeShopAboveDM: {
                    label: "Remove Shop Above DMs",
                    description: "Remove shops above DMs list."
                },
                removeQuestsAboveDM: {
                    label: "Remove Quests Above DMs",
                    description: "Remove quests above DMs list."
                },
                miscHeader: {
                    label: "Misc"
                },
                removeServerBoostInfo: {
                    label: "Remove Server Boost Info",
                    description: "Remove server boost info above channel list."
                },
                removeBillingSettings: {
                    label: "Remove Billing Settings",
                    description: "Remove billing settings."
                },
                removeGiftButton: {
                    label: "Remove Gift Button",
                    description: "Remove gift button."
                },
                removeUnavailableEmojiPicker: {
                    label: "Remove Unavailable Emoji Picker",
                    description: "Remove unavailable categories from the emoji picker."
                },
                removeAudioMenus: {
                    label: "Remove Audio Menus",
                    description: "Remove menus next to mute and deafen buttons."
                },
                removeButtonTooltips: {
                    label: "Remove Button Tooltips",
                    description: "Remove button tooltips."
                },
                removeProfileFrame: {
                    description: "Remove profile frames.",
                    label: "Remove Profile Frame"
                },
                removeDisplayNameStyles: {
                    description: "Remove animated/styled display names in the member list.",
                    label: "Remove Display Name Styles"
                },
                removeLibraryAboveDms: {
                    description: "Remove library above DMs list.",
                    label: "Remove Library Above Dms"
                },
                removeFamilyCenterAboveDms: {
                    description: "Remove family center above DMs list.",
                    label: "Remove Family Center Above Dms"
                }
            },
            text: {
                discordAlreadyHasA: "Discord already has a built-in username style option in",
                accessibilitySettings: "Accessibility settings."
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
            },
            toast: {
                failedToAuthorizeMessage: "Failed to authorize: {{message}}"
            },
            text: {
                removeDecoration: "Remove Decor decoration",
                decoration: "Decor decoration",
                none: "None",
                decorationFile: "Decoration file"
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
            },
            text: {
                reconnect: "Reconnect",
                loadingLazyModules: "Loading lazy modules, restarting could lead to errors",
                loadedLazyModules: "Loaded all lazy modules",
                failedLazyModules: "Failed to load lazy modules, check console for errors",
                ok: "OK"
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
            },
            text: {
                notSupported: "Not Supported",
                devBuild: "Dev Build",
                standalone: "Standalone"
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
        downloadAllAttachments: {
            name: "DownloadAllAttachments",
            description: "Adds a popover button to download all attachments in a message at once.",
            button: "Download All Attachments",
            toast: {
                success: "Downloaded {{count}} attachment(s).",
                partial: "Downloaded {{succeeded}} of {{total}} attachments. {{failed}} failed.",
                downloadedPluralizeSucceededAttachment: "Downloaded {{pluralize_succeeded_attachment}}.",
                downloadedSucceededOfLength: "Downloaded {{succeeded}} of {{length}} attachments. {{failed}} failed."
            },
            option: {
                downloadAllFileTypes: {
                    description: "Also download non-media attachments. Only enable this if you trust what people send you.",
                    label: "Download All File Types"
                }
            }
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
                },
                noReusableInvite: "No reusable invite available.",
                unableToReuseInvite: "Unable to reuse invite."
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
        elementHighlighter: {
            name: "ElementHighlighter",
            description: "Highlight and inspect elements easily.",
            modal: {
                recording: "Recording...",
                reset: "Reset"
            },
            option: {
                keybind: {
                    label: "Key Bind",
                    description: "Toggle Highlighter"
                },
                showClasses: {
                    label: "Show Classes",
                    description: "Display the element's CSS class names in the tooltip"
                },
                showId: {
                    label: "Show ID",
                    description: "Display the element's ID attribute in the tooltip"
                },
                showFont: {
                    label: "Show Font",
                    description: "Display the computed font family and font size"
                },
                showPadding: {
                    label: "Show Padding",
                    description: "Display the element's padding values"
                },
                showMargin: {
                    label: "Show Margin",
                    description: "Display the element's margin values"
                },
                showBorderRadius: {
                    label: "Show Border Radius",
                    description: "Display the element's border radius values"
                },
                showPosition: {
                    label: "Show Position",
                    description: "Display the element's CSS position type and z-index"
                },
                showDisplay: {
                    label: "Show Display",
                    description: "Display the element's display type along with flex or grid properties"
                }
            },
            toast: {
                copied: {
                    color: "Copied color to clipboard!",
                }
            }
        },
        exitSounds: {
            name: "ExitSounds",
            description: "Play soundboard sounds when you disconnect from voice.",
            button: "Set as global exit sound",
            toast: {
                failedToPlay: "Oops! Something went wrong."
            },
            option: {
                soundGuildId: {
                    label: "Sound Guild ID",
                    description: "Select the server containing the sound.",
                    placeholder: "Select a server..."
                },
                soundId: {
                    label: "Sound ID",
                    description: "Enter the ID of the sound you want to play.",
                    placeholder: "Enter sound ID..."
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
            },
            text: {
                searchExperiments: "Search experiments"
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
            },
            text: {
                unknownError: "Unknown error"
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
                console: "Something went wrong (check console!)",
                successfullyClonedNameTo: "Successfully cloned {{name}} to {{name_your_server}}!"
            },
            context: {
                clone: "Clone {{type}}",
                cloneName: "Clone {{data}}"
            },
            text: {
                yourServer: "your server",
                cloneTo: "Clone to {{name}}",
                emoji: "Emoji",
                sticker: "Sticker"
            }
        },
        externalPlayer: {
            name: "ExternalPlayer",
            description: "Open videos and audio in an external media player like mpv.",
            option: {
                player: {
                    label: "Player",
                    description: "Which player to open media in."
                },
                openOnClick: {
                    label: "Open On Click",
                    description: "Open videos and audio in the player when you press play, instead of playing them in Discord."
                },
                path: {
                    label: "Player Path",
                    description: "Absolute path to the player executable. Leave empty to use the one on your PATH."
                },
                args: {
                    label: "Player Arguments",
                    description: "Extra arguments passed to the player. Wrap values with spaces in quotes."
                }
            },
            context: {
                openIn: "Open in {{player}}"
            },
            toast: {
                alreadyOpen: "Already open in {{player}}.",
                restartRequired: "Fully restart Discord to load ExternalPlayer.",
                openFailed: "Failed to open the player."
            },
            status: {
                paused: "Paused in {{player}}",
                playing: "Playing in {{player}}"
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
                useStickerHyperLinks: {
                    label: "Use Sticker Hyper Links",
                    description: "Whether to use hyperlinks when sending fake stickers"
                },
                useEmojiHyperLinks: {
                    label: "Use Emoji Hyper Links",
                    description: "Whether to use hyperlinks when sending fake emojis"
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
                failedSave: "Failed to save alias.",
                removedAliasAlias: "Removed alias :{{alias}}:",
                aliasSetForGetemojidisplayname: "Alias set for {{getEmojiDisplayName_ref}}."
            },
            button: {
                edit: "Edit alias",
                set: "Set alias"
            },
            text: {
                remove: "Remove",
                noAliasesSetYet: "No aliases set yet.",
                aliasRequired: "Alias is required.",
                aliasInvalid: "Alias must be 2-32 characters and only use lowercase letters, numbers, or underscores."
            }
        },
        favoriteAnything: {
            name: "FavoriteAnything",
            description: "Favorite any image, video, or file attachment",
            noFiles: "No files match your search.",
            searchPlaceholder: "Search files",
            media: "Media",
            demoText: "Click the star to favorite a file.\nFavorite files will show up here!",
            fetchError: "Couldn't fetch {filename}",
            uploadError: "Couldn't upload {filename}",
            text: {
                clickTheStarTo: "Click the star to favorite a file.",
                favoriteFilesWillShow: "Favorite files will show up here!"
            },
            option: {
                localThumbnails: {
                    description: "Generate file thumbnails locally instead of using an external service (placeholder.nin0.dev). Not compatible with mobile. Toggling this option will not affect existing favorites.",
                    label: "Local Thumbnails"
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
                couldntFind: "Couldn't find a reply."
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
                },
                onlyWhenInVoice: {
                    label: "Only When In Voice",
                    description: "Only follow the user when you are in a voice channel"
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
            },
            text: {
                currentFont: "Current font:",
                resetFont: "Reset Font"
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
        friendCloud: {
            name: "FriendCloud",
            description: "Adds a /friendcloud command to visualize the users you most interact with",
            command: {
                friendcloud: {
                    description: "Visualize your friend cloud",
                    count: "Number of users to display",
                    mustHigher: "The count must be 1 or higher!",
                    noAffinities: "No affinities found. Check your [privacy settings](<https://support.discord.com/hc/en-us/articles/21864805694999-Data-Used-to-Improve-Discord>).",
                    noValid: "No valid users found in affinities. Check your [privacy settings](<https://support.discord.com/hc/en-us/articles/21864805694999-Data-Used-to-Improve-Discord>).",
                    genFailed: "Couldn't generate the image :c"
                }
            }
        },
        friendCodes: {
            name: "FriendCodes",
            description: "Generate FriendCodes to easily add friends",
            card: {
                expires: "Expires <t:{{expiration}}:R> • {{uses}}/{{maxUses}} uses",
                copy: "Copy",
                copied: "Copied!",
                codes: "Your Friend Codes",
                count: "Friend Codes - {{invites}}",
                create: "Create Friend Code",
                revoke: "Revoke All Friend Codes",
                loading: "Loading...",
                dontHave: "You don't have any friend codes."
            }
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
            },
            option: {
                showFriendsInChat: {
                    description: "Show a friend icon on messages from friends.",
                    label: "Show Friends In Chat"
                }
            },
            text: {
                friend: "Friend",
                rankIcon: "Rank icon"
            }
        },
        friendTags: {
            name: "FriendTags",
            description: "Allows you to filter by custom tags in the quick switcher by starting a search with &",
            modal: {
                name: "Name",
                users: "Users (Seperated by comma)",
                userlist: "User List (Click a user to remove)",
                remove: "Remove",
                add: "Add",
                tag: "Tag",
                removeFrom: "Remove from",
                addTo: "Add to"
            },
            option: {
                tagConfiguration: {
                    label: "Tag Configuration",
                    description: "The tag configuration component"
                }
            }
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
            description: "Adds a button next to the mic and deafen button to toggle game activity. Right click it to toggle Spotify activity.",
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
            },
            text: {
                disableGameActivity: "Disable Game Activity",
                enableGameActivity: "Enable Game Activity",
                shareSpotifyActivity: "Share Spotify Activity",
                shareSpotifyActivityAccount: "Share Spotify Activity ({{name}})"
            }
        },
        ghosted: {
            name: "Ghosted",
            description: "A cute ghost will appear if you don't answer their DMs",
            modal: {
                title: "Ghosted Users",
                no: "No Ghosted Users",
                unghost: "unghost",
                unknown: "Unknown",
                unnamedGroup: "Unnamed Group",
                unknownUser: "Unknown User",
                clearAll: "Clear All",
                noGhost: "No ghosts here!",
                clear: "Clear"
            },
            option: {
                showIndicator: {
                    label: "Show Indicator",
                    description: "Show the ghost counter at the top of the server list"
                },
                showDmIcons: {
                    label: "Show DM Icons",
                    description: "Show ghost icons next to individual DMs"
                },
                ignoreGroupDms: {
                    label: "Ignore Group DMs",
                    description: "Exclude all group dms from ghosting"
                },
                exemptedChannels: {
                    label: "Exempted Channels",
                    description: "Comma-separated list of channel IDs to exempt from ghosting (right-click a DM channel to copy its ID)"
                },
                ignoreBots: {
                    label: "Ignore Bots",
                    description: "Ignore DMs from bots"
                },
                maxInactiveTimeMs: {
                    label: "Max Inactive Time",
                    description: "Only ghost DMs active within this timeframe",
                    no: "No limit",
                    oneHour: "1 hour",
                    oneDay: "1 day",
                    oneWeek: "1 week",
                    oneMonth: "1 month"
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
                alreadyCollection: "This GIF is already in the collection",
                collectionsImportedSuccessfully: "Collections imported successfully.",
                failedToImportCollections: "Failed to import collections: {{String_err}}"
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
            },
            text: {
                gifPickerCategoryOptions: "GIF Picker Category Options",
                gifCollections: "Gif Collections",
                unknown: "Unknown"
            }
        },
        gifPaste: {
            name: "GifPaste",
            description: "Allows you to paste gifs directly into the chatbox"
        },
        gifRoulette: {
            name: "GifRoulette",
            description: "Adds a command to send a random gif from your favourites, and a one in ten chance to ping the owner of the server",
            command: {
                gifRoulette: {
                    description: "Tempt fate and send a gif",
                    restricted: "This command is restricted in this server."
                }
            },
            option: {
                pingOwnerChance: {
                    label: "Ping Owner Chance",
                    description: "If there should be a 1 in 10 change to ping the owner of the guild (oh no)"
                }
            }
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
                title: "{{username}}'s GitHub Repositories",
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
        guildTagSettings: {
            name: "GuildTagSettings",
            description: "Adds some settings for guild tags, such as hiding them or disabling the prompt to adopt them.",
            option: {
                disableAdoptTagPrompt: {
                    label: "Disable Adopt Tag Prompt",
                    description: "Disable the prompt to adopt tags"
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
        hideMessages: {
            name: "HideMessages",
            description: "Temporarily hide messages and DMs until you restart.",
            button: {
                hide: "Hide",
                hideDm: "Hide DM",
                unhideDm: "Unhide DM"
            },
            toggle: {
                none: "No Hidden DMs",
                hide: "Hide Hidden DMs",
                show: "Show Hidden DMs"
            },
            option: {
                hidePopoverButton: {
                    label: "Hide Popover Button",
                    description: "Hide the hide button in the message popover."
                }
            }
        },
        hideMutedVoiceIndicator: {
            name: "HideMutedVoiceIndicator",
            description: "Hides the voice indicator in the server list when the only active voice channels are muted"
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
                invalid: "Failed to import notes.",
                invalidJson: "Invalid JSON"
            },
            toolbox: {
                action: "Open Notes"
            },
            text: {
                holyNotes: "Holy Notes",
                noteTag: "NOTE"
            }
        },
        homeTyping: {
            name: "HomeTyping",
            description: "Changes the home button to a typing indicator if someone in your dms is typing"
        },
        iconViewer: {
            name: "IconViewer",
            description: "Adds a new tab to settings to preview all icons.",
            toolbox: "Open Icons Tab",
            iconFinder: "Icon Finder",
            about: {
                title: "Features",
                preview: "Preview Icons",
                list: {
                    copy: "Copy icon names and CSS variables",
                    download: "Download icons in different formats (SVG, PNG, GIF, etc.)",
                    premade: "Copy pre-made icon finds for your plugins",
                    find: "Find icons by function context",
                    search: "Search for colors by right-clicking the color name",
                    special: "Special thanks"
                }
            },
            context: {
                icon: {
                    options: "Icon Options",
                    log: "Log to Console",
                    save: "Save as...",
                    rightClick: "Right-click icon to change",
                    usage: "Usage",
                    click: "Click to copy",
                    copied: "Copied!",
                    actions: "Actions"
                }
            },
            modal: {
                label: "Search by function context",
                search: "Search {{count}} icons...",
                function: "Function",
                iconViewer: {
                    colors: "Icon Viewer Colors",
                    unknown: "unknown",
                }
            }
        },
        idleAutoRestart: {
            name: "IdleAutoRestart",
            description: "Automatically restarts the client after being idle for a configurable amount of time, but avoids restarting while you are in VC.",
            option: {
                isEnabled: {
                    label: "Is Enabled",
                    description: "Enable automatic restart after idle"
                },
                idleMinutes: {
                    label: "Idle Minutes",
                    description: "Minutes of inactivity before restarting (when not in VC)"
                }
            },
            toolbox: {
                disable: "Disable Idle Auto Restart",
                enable: "Enable Idle Auto Restart"
            }
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
                    description: "Ignore all listening activities (These are usually Spotify activities)"
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
            },
            text: {
                enableActivity: "Enable Activity",
                disableActivity: "Disable Activity"
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
            },
            text: {
                bytes: "Bytes"
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
            },
            toast: {
                instantScreenshareDisabled: "Instant Screenshare {{disabled}}"
            },
            text: {
                instantScreenshare: "Instant Screenshare"
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
                owner: "Server Owner",
                iRememberYou: "I Remember You"
            },
            context: {
                user: "User Options",
                copy: "Copy User ID",
                copyToast: "User ID copied to clipboard",
                view: "View Profile"
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
            },
            text: {
                serverOptions: "Server Options",
                copyServerId: "Copy Server ID",
                serverIdCopied: "Server ID copied to clipboard"
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
            },
            text: {
                keywordEntryI1: "Keyword Entry {{i_1}}",
                listPriorityAdvanced: "List priority (Advanced)",
                whichListToPrioritize: "Which list to prioritize in case a message triggers both lists",
                ifYouAreNot: "If you are not sure, in most common scenarios it is usually set to Blacklist"
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
                    description: "custom status text. You can use the following variables: {artist} | {album} | {title}"
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
                showAlbumCover: {
                    label: "Show Album Cover",
                    description: "Show album cover. Disabling this will display a placeholder. Useful if your Music has inappropriate art"
                },
                useLogo: {
                    label: "Use Logo",
                    description: "Show ListenBrainz logo on album art"
                }
            },
            button: {
                profile: "ListenBrainz Profile",
                viewSong: "View Song"
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
            },
            text: {
                allQuotesDisabled: "Did you really disable all loading quotes? What a buffoon you are..."
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
            orPaste: "Or paste an image from your clipboard!",
            verifyLogin: "Verify Login",
            text: {
                scanQrCode: "Scan QR Code"
            }
        },
        markdownTables: {
            name: "MarkdownTables",
            description: "Render GitHub-style markdown tables in Discord messages.",
            toolbar: {
                label: "Markdown table view",
                table: "Table",
                raw: "Raw"
            },
            option: {
                hideToggle: {
                    label: "Hide Toggle",
                    description: "Hide the Table/Raw toggle and always show rendered tables."
                }
            }
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
            description: "Shows the number of online members, total members, and users in voice channels on the server - in the member list and tooltip.",
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
            totalVoice: "{{formattedVoiceCount}} members in voice",
            tooltip: {
                total: "{{count}} total server members"
            }
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
        messageBurst: {
            name: "MessageBurst",
            description: "Merges messages sent within a time period with your previous sent message if no one else sends a message before you.",
            option: {
                timePeriod: {
                    label: "Time Period",
                    description: "The duration of bursts (in seconds)."
                },
                shouldMergeWithAttachment: {
                    label: "Merge with Attachments",
                    description: "Should the message be merged if the last message has an attachment?"
                },
                useSpace: {
                    label: "Use Space",
                    description: "Whether to add a space between messages when merging instead of new lines."
                }
            }
        },
        messageClickActions: {
            name: "MessageClickActions",
            description: "Hold Backspace and click to delete, double click to edit/reply",
            option: {
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
                reactEmoji: {
                    label: "React Emoji",
                    description: "Emoji to use for react actions"
                },
                addAdditionalReacts: {
                    label: "Add Additional Reacts",
                    description: "Also add additional configured reaction emojis"
                },
                additionalReactEmojis: {
                    label: "Additional React Emojis",
                    description: "Additional emojis to add when using React action (comma/newline separated, max {{count}}"
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
                doubleClickHoldThreshold: {
                    label: "Double Click Hold Threshold",
                    description: "Max hold time for double-click actions (ms). Holding longer allows text selection"
                },
                deferDoubleClickForTriple: {
                    label: "Defer Double Click for Triple",
                    description: "Delay double-click to allow triple-click actions (disables triple-click when off)"
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
            linkCopied: "Link copied!",
            text: {
                shift: "Shift",
                ctrl: "Ctrl",
                alt: "Alt",
                backspace: "Backspace",
                pickEmoji: "Pick Emoji"
            },
            emojiSetting: {
                pick: "Pick Emoji",
                selectMain: "Select Emoji For Reactions",
                selectAdditional: "Select Additional Emojis",
                additionalPlaceholder: "comma/newline separated, max {{max}}"
            },
            toast: {
                cannotReact: "Cannot react: Missing permissions",
                linkCopied: "Link copied!"
            }
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
            removeMessage: "Clear Message History",
            removeMessageTemporary: "Remove Message (Temporary)",
            clearMessageLog: "Clear Message Log",
            showDiff: "Show Diff",
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
                ignoreSelfEdits: {
                    label: "Ignore Self Edits",
                    description: "Whether to ignore edits by yourself"
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
                },
                logDeletedAttachments: {
                    description: "Whether to log deleted attachments",
                    label: "Log Deleted Attachments"
                }
            },
            text: {
                clearHistory: "Clear history",
                toggleDeletedHighlight: "Toggle Deleted Highlight",
                enableDiffView: "Enable Diff View",
                disableDiffView: "Disable Diff View",
                noDeletedMessages: "No deleted messages",
                deletedMessageSuffix: " deleted message",
                deletedMessagesSuffix: " deleted messages"
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
                    description: "Server, channel, or user IDs to always show in message log."
                },
                blacklistedIds: {
                    label: "Blacklisted IDs",
                    description: "Server, channel, or user IDs to never show in message log."
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
                clearLogsOnRestart: {
                    label: "Clear Logs on Restart",
                    description: "Clear logs when Discord restarts."
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
            },
            toast: {
                clearedLogs: "Cleared Logs",
                failedToClearLogs: "Failed to clear logs",
                failedToRemoveMessage: "Failed to remove message. Check console for details.",
                noMessagesFoundIn: "No messages found in log file",
                successfullyImportedCountLogs: "Successfully imported {{count}} logs",
                successfullyExportedLogs: "Successfully exported logs",
                successfullyExportedCountLogs: "Successfully exported {{count}} logs",
                errorExportingLogsCheck: "Error exporting logs. Check the console for more information"
            },
            text: {
                jsonFile: "JSON File",
                clearLogs: "Clear Logs",
                clearingLogs: "Clearing Logs...",
                messageLogger: "Message Logger",
                importLogs: "Import Logs",
                logs: "Logs",
                loadingTabLogs: "Loading {{tab}} logs..."
            }
        },
        messageNotifier: {
            name: "MessageNotifier",
            description: "Get toasts for when chosen users send a message",
            dm: "their dms",
            option: {
                users: {
                    label: "Users",
                    description: "Comma separated list of user ids to get message toasts for",
                    invalidId: "{{id}} isn't a valid user id"
                }
            },
            notification: {
                title: "{{username}} sent a message",
                body: "Click to jump to {{locationName}}"
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
        micLoopbackTester: {
            name: "MicLoopbackTester",
            description: "Adds mic loopback test icon to the user panel",
            button: "Mic Test Loopback"
        },
        middleClickTweaks: {
            name: "MiddleClickTweaks",
            description: "Various middle click tweaks, such as with pasting and link opening.",
            option: {
                openScope: {
                    label: "Open Scope",
                    description: "Prevent middle clicking on these content types from opening them.",
                    links: "Links",
                    media: "Media",
                    linksAndMedia: "Links and Media",
                    none: "None"
                },
                pasteScope: {
                    label: "Paste Scope",
                    description: "Prevent middle click from pasting during these situations.",
                    always: "Always Prevent Middle Click Pasting",
                    focus: "Only Prevent When Text Area Not Focused",
                },
                pasteThreshold: {
                    label: "Paste Threshold",
                    description: "Milliseconds until pasting is enabled again after a middle click."
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
                    description: "Use frequently used emojis instead of favorite emojis"
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
        moreUserTags: {
            name: "MoreUserTags",
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
                spotifySectionTitle: {
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
                tidalSectionTitle: {
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
                websocketURL: {
                    label: "Websocket URL",
                    description: "Default is ws://localhost:24123"
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
                showMusicNoteOnNoLyrics: {
                    label: "Show Music Note On No Lyrics",
                    description: "Show a music note icon when no lyrics are found"
                },
                lyricsPosition: {
                    label: "Lyrics Position",
                    description: "Position of the lyrics panel",
                    above: "Above Player(s)",
                    below: "Below  Player(s)"
                },
                lyricsProvider: {
                    label: "Lyrics Provider",
                    description: "Where lyrics are fetched from",
                    spotify: "Spotify (Musixmatch)",
                    LRCLIB: "LRCLIB"
                },
                spotifyLyricsApiUrl: {
                    label: "Spotify Lyrics API Base URL",
                    description: "Custom instance base URL (for example: http://localhost:8080)."
                },
                translateTo: {
                    label: "Translate To",
                    description: "Translate lyrics to - Changing this will clear existing translations",
                    cleared: "Translations cleared"
                },
                lyricsConversion: {
                    label: "Lyrics Conversion",
                    description: "Automatically translate or romanize lyrics",
                    none: "None",
                    translate: "Translate",
                    romanize: "Romanize"
                },
                fallbackProvider: {
                    label: "Fallback Provider",
                    description: "When a lyrics provider fails, try other providers"
                },
                showFailedToasts: {
                    label: "Show Failed Toasts",
                    description: "Show toasts when lyrics fail to load"
                },
                purgeLyricsCache: {
                    label: "Purge Lyrics Cache",
                    description: "Clear all cached lyrics and translations",
                    button: "Purge Cache",
                    cacheLyricsPurged: "Lyrics cache purged"
                },
                lyricDelay: {
                    label: "Lyric Delay"
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
            },
            text: {
                unknownArtist: "Unknown Artist",
                unknownTitle: "Unknown Title"
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
        neverPausePreviews: {
            name: "NeverPausePreviews",
            description: "Prevents in-call/PiP previews (screenshare, streams, etc) from pausing even if the client loses focus",
            about: "This plugin will cause discord to use more resources than normal"
        },
        newGuildSettings: {
            name: "NewGuildSettings",
            description: "Automatically mute new servers and change various other settings upon joining",
            context: {
                apply: "Apply NewGuildSettings to Folder"
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
                },
                voiceChannels: {
                    label: "Voice Channels",
                    description: "Hide names in Voice channels automatically"
                }
            }
        },
        newPluginsManager: {
            name: "NewPluginsManager",
            description: "Utility that notifies you when new plugins are added to Plexcord",
            modal: {
                title: "New Plugins and Settings",
                description: "New plugins and settings have been added since your last visit. Please review the new additions below.",
                tooltip: "Dismiss for this session",
                dontShowAgain: "Don't show this again",
                restartRequired: "Restart required to apply changes",
                restart: "Restart",
                continue: "Continue",
                supportUs: "Plexcord is Open Source Software. If you enjoy using it, consider supporting us",
                supportUsLink: "here"
            }
        },
        noAppsAllowed: {
            name: "NoAppsAllowed",
            description: "Returns the bot's tag back to its original form"
        },
        noBlockedMessages: {
            name: "NoBlockedMessages",
            description: "Hides all blocked/ignored messages from chat completely",
            option: {
                alsoHideIgnoredUsers: {
                    label: "Also Hide Ignored Users",
                    description: "Also hide messages from ignored users."
                },
                disableNotifications: {
                    label: "Disable Notifications",
                    description: "Hide new message notifications for blocked users. Always true if 'Default Hide Users' is enabled below and the user triggering the notification is not exempted in 'Override Users'."
                },
                allowAutoModMessages: {
                    label: "Allow AutoMod Messages",
                    description: "Allow messages sent by AutoMod to bypass filtering."
                },
                hideBlockedUserReplies: {
                    label: "Hide Blocked User Replies",
                    description: "Hide messages from blocked users in threads if you have participated in the thread."
                },
                defaultHideUsers: {
                    label: "Default Hide Users",
                    description: "If enabled, messages from blocked users will be completely hidden and any messages from user IDs in the override list will be collapsed (default Discord behavior) instead. If disabled, messages from blocked users will be collapsed and any messages from user IDs in the override list will be completely hidden instead."
                },
                overrideUsers: {
                    label: "Override Users",
                    description: "Comma separated list of user IDs which will be hidden or collapsed instead of the default behavior selected above."
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
        noPushToTalk: {
            name: "NoPushToTalk",
            description: "Bypasses the push-to-talk requirement for voice activity in channels that enforce it."
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
        noRoleHeaders: {
            name: "NoRoleHeaders",
            description: "We are all equal!! Removes the role headers in the member list."
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
            description: "Makes desktop notifications more informative",
            text: {
                threadInParent: "{{thread}} in {{parent}}"
            }
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
                },
                telegram: {
                    label: "Telegram",
                    description: "Open Telegram links in the Telegram app"
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
            },
            text: {
                roleOptions: "Role Options",
                userOptions: "User Options",
                unknownRole: "Unknown Role",
                unknownUser: "Unknown User"
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
                    label: "Pin DMs",
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
                },
                defaultCategoryName: "Pin Category {{number}}"
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
            embeddedTooltip: "Embedded (Console or Game)",
            vrTooltip: "VR",
            option: {
                list: {
                    label: "List",
                    description: "Show indicators in user profiles"
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
            about: "We can't guarantee this plugin won't get you warned or banned. Choosing Xbox/Playstation/VR may make your client an outdated version.",
            platform: {
                desktop: "Discord Client",
                web: "Discord Web",
                ios: "Discord iOS",
                android: "Discord Android",
                xbox: "Discord Embedded",
                playstation: "Discord Embedded",
                vr: "VR"
            },
            option: {
                platform: {
                    label: "Platform",
                    description: "What platform to pretend you're on.",
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
        polishWording: {
            name: "PolishWording",
            description: "Tweaks your messages to make them look nicer and have better grammar. See settings",
            option: {
                quickDisable: {
                    label: "Quick Disable",
                    description: "Quick disable. Turns off message modifying without requiring a client reload."
                },
                blockedWords: {
                    label: "Blocked Words",
                    description: "Words that will not be capitalized (comma separated)."
                },
                fixApostrophes: {
                    label: "Fix Apostrophes",
                    description: "Ensure contractions contain apostrophes."
                },
                expandContractions: {
                    label: "Expand Contractions",
                    description: "Expand contractions"
                },
                fixCapitalization: {
                    label: "Fix Capitalization",
                    description: "Capitalize sentences."
                },
                fixPunctuation: {
                    label: "Fix Punctuation",
                    description: "Fix spacing around punctuation."
                },
                fixPunctuationFrequency: {
                    label: "Fix Punctuation Frequency",
                    description: "Percent period frequency (this majorly annoys some people).",
                }
            }
        },
        previewMessage: {
            name: "PreviewMessage",
            description: "Lets you preview your message before sending it.",
            tooltip: "Preview Message"
        },
        profileSets: {
            name: "ProfileSets",
            description: "Allows you to save and load different profile presets.",
            toast: {
                importFailed: "Failed to import presets. The file might be invalid.",
            },
            option: {
                avatarSize: {
                    label: "Avatar Size",
                    description: "Avatar size in preset list"
                }
            },
            modal: {
                override: "Override",
                merge: "Merge",
                cancel: "Cancel",
                timestamp: "{{formattedDate}} at {{formattedTime}}",
                rename: "Rename",
                update: "Update",
                moveUp: "Move Up",
                moveDown: "Move Down",
                moveTo: "Move to Page 1",
                delete: "Delete",
                importProfiles: "Import Profiles",
                importText: "You have {{existingCount}} existing profiles in this section. Do you want to override them or merge with imported profiles?",
                heading: "Saved Profiles",
                searchProfiles: "Search Profiles...",
                profileName: "Profile Name",
                saving: "Saving...",
                save: "Save Profile",
                cancelSearch: "Cancel Search",
                search: "Search",
                random: "Random",
                import: "Import",
                exportAll: "Export All"
            },
            text: {
                selectAServer: "Select a server",
                profileSets: "Profile Sets",
                youAreNotIn: "You are not in any servers yet.",
                mainProfile: "Main Profile",
                serverProfiles: "Server Profiles",
                openProfileSets: "Open Profile Sets"
            }
        },
        questify: {
            name: "Questify",
            description: "Enhance specific Quest features, disable annoyances, or completely remove Quests.",
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
                    startAuto: "Start Auto-Complete",
                    copyQuestID: "Copy Quest ID",
                    pauseAutoEnrollment: "Pause Auto-Enrollment",
                    unpauseAutoEnrollment: "Unpause Auto-Enrollment",
                    pauseAutoProcessing: "Pause Auto-Processing",
                    unpauseAutoProcessing: "Unpause Auto-Processing"
                }
            },
            button: {
                completing: "Completing...",
                completingWithTime: "Completing ({{time}})",
                completingIn: "Completing in {{time}}",
                queued: "Queued ({{position}})",
                resuming: "Resuming...",
                completeNow: "Complete Now",
                complete: "Complete ({{time}})",
                resume: "Resume ({{time}})",
                completed: "Completed"
            },
            reward: {
                orbs: "{{status}} for {{orbQuantity}} Orbs.",
                article: "{{status}} for {{itemName}}.",
                unrecognized: "{{status}} for an unrecognized reward."
            },
            toast: {
                autoCompleteBroken: "Auto-Complete is broken. A fix will be implemented shortly.",
                enrollmentFailed: "Enrollment in the {{questName}} Quest failed.",
                enrollmentInNormalizequestnameQuest: "Enrollment in {{normalizeQuestName_quest}} Quest failed{{rateLimitSuffix}}.",
                automationUnlocked: "Quest Automation Unlocked.",
                automationLocked: "Quest Automation Locked."
            },
            notification: {
                completed: {
                    title: "Quest Completed!",
                    body: "The {{questName}} Quest has completed."
                },
                newQuest: {
                    title: "New Quest Detected!",
                    body: "The {{questName}} Quest is now available."
                },
                newQuests: {
                    title: "New Quests Detected!",
                    body: "{{count}} new Quests are now available."
                },
                newExcludedQuest: {
                    title: "New Excluded Quest Detected!",
                    body: "The excluded {{questName}} Quest was detected. ID: {{questId}}"
                },
                newExcludedQuests: {
                    title: "New Excluded Quests Detected!",
                    body: "{{count}} new excluded Quests were detected. Check the console for their Quest IDs."
                }
            },
            alert: {
                restart: {
                    title: "Restart Required",
                    body: "A change you've made to Questify's settings requires a restart.",
                    confirm: "Restart",
                    cancel: "Later"
                },
                dangerous: {
                    title: "Are you sure?",
                    confirm: "Continue",
                    cancel: "Cancel",
                    disableEverything: "This will completely disable Quest functionality.",
                    allowDangerous: "This will allow changing dangerous settings."
                }
            },
            status: {
                unclaimed: "UNCLAIMED",
                claimed: "Claimed",
                ignored: "Ignored",
                expired: "Expired"
            },
            questTypes: {
                watchVideo: "Watch Video",
                watchVideoOnMobile: "Watch Video on Mobile",
                achievementInActivity: "Achievement in Activity",
                achievementInGame: "Achievement in Game",
                playActivity: "Play Activity",
                playOnDesktop: "Play on Desktop",
                playOnDesktopV2: "Play on Desktop V2",
                streamOnDesktop: "Stream on Desktop",
                playOnPlayStation: "Play on PlayStation",
                playOnXbox: "Play on Xbox"
            },
            settings: {
                questButton: {
                    title: "Quest Button",
                    description: "Show a Quest Button in the server list with an optional indicator for unclaimed and unignored Quests.",
                    behavior: "Button Behavior",
                    leftClick: "Left Click Action:",
                    middleClick: "Middle Click Action:",
                    rightClick: "Right Click Action:",
                    visibility: "Button Visibility:",
                    visibilityTooltip: "Always shows the Quest Button whenever this feature is enabled.\n\nUnclaimed only shows it while you have relevant unclaimed Quest rewards.\n\nNever hides the Quest Button.",
                    unclaimedIndicator: "Unclaimed Indicator:",
                    unclaimedIndicatorTooltip: "Pill shows Discord's unread-style marker beside the Quest Button.\n\nBadge shows the number of relevant unclaimed Quest rewards.\n\nBoth shows the pill and badge together.\n\nNone hides unclaimed indicators.",
                    badgeColor: "Badge Color:",
                    relevancy: "Quest Relevancy",
                    includedRewardTypes: "Included Reward Types:",
                    includedRewardTypesTooltip: "Only count Quests with these reward types as unclaimed when determining button visibility, badge count, and alert behavior.",
                    includedQuestTypes: "Included Quest Types:",
                    includedQuestTypesTooltip: "Only count Quests with these task types as unclaimed when determining button visibility, badge count, and alert behavior.",
                    display: {
                        always: "Always",
                        unclaimed: "Unclaimed",
                        never: "Never"
                    },
                    indicator: {
                        pill: "Pill",
                        badge: "Badge",
                        both: "Both",
                        none: "None"
                    },
                    action: {
                        openQuests: "Open Quests",
                        contextMenu: "Context Menu",
                        pluginSettings: "Plugin Settings",
                        nothing: "Nothing"
                    },
                    rewardTypes: {
                        orbs: "Orbs",
                        nitroCodes: "Nitro Codes",
                        rewardCodes: "Reward Codes",
                        inGameItems: "In Game Items",
                        profileCollectibles: "Profile Collectibles"
                    }
                },
                questFeatures: {
                    title: "Quest Features",
                    description: "Modify how Quests behave to enhance or remove functionality.",
                    disableFeatures: "Disable Features",
                    disableEverything: "Completely disable Quest functionality:",
                    disableEverythingTooltip: "This will disable all plugin enhancements, hide the Quests page and Quest elements across Discord, and prevent Discord from fetching Quest data. This will not affect the shop as Orbs are too intrinsically tied to it as a secondary currency.",
                    disableSpecific: "Disable specific features:",
                    disableSpecificTooltip: "Sponsored Banner is a paid-for Quest banner at the top of the Quests page.\n\nRelocation Notices are indicators such as in the Discovery page about Quests moving to DMs.\n\nFriends List Promo is a card that displays on the \"Active Now\" section of your Friends List while a user you share a server with is playing a game with an active Quest.\n\nMembers List Promo is an icon that displays on members in a server's Members List while they are playing a game with an active Quest.\n\nAccount Panel Promo is a paid-for Quest promotion that appears above your user account panel.\n\nAccount Panel Progress is the active or completed Quest progress shown above your user account panel.\n\nQuest & Orbs Badges are badges on user profiles for when someone has completed at least one Quest or bought the Orbs badge respectively.",
                    disableOptions: {
                        sponsoredBanner: "Sponsored Banner",
                        relocationNotices: "Relocation Notices",
                        friendsListPromo: "Friends List Promo",
                        membersListPromo: "Members List Promo",
                        accountPanelPromo: "Account Panel Promo",
                        accountPanelProgress: "Account Panel Progress",
                        orbsAndQuestsBadges: "Quest & Orbs Badges"
                    },
                    modifyFeatures: "Modify Features",
                    warningTos: "Discord has begun issuing warnings to users of scripts or plugins that modify how Quests are completed, which is against their {{tos}}.",
                    tos: "Terms of Service",
                    warningEscalate: "The warnings appear limited to threat of loss of access to Quests or their rewards, but Discord may escalate at any time.",
                    warningDetection: "Due to the various methods Discord uses to track users, there's no way to realistically evade detection. If you proceed, understand that Discord likely will detect it at some point.",
                    warningRisk: "Use the following toggle to access potentially dangerous settings at your own risk.",
                    allowDangerous: "Allow changing dangerous settings...",
                    disallowDangerous: "Reset and disallow changing dangerous settings...",
                    completeVideoQuicker: "Accelerate Video Quest auto-completion:",
                    completeVideoQuickerTooltip: "Discord allows Video Quests to be completed once 24 seconds less than the duration of the video has passed since you enrolled into the Quest.\n\nThis means that if a Video Quest is 24 seconds or less, or if you enroll in a Video Quest and return later to complete it, it can be completed immediately.\n\nThis setting will only apply to auto-completing Video Quests and relies on the auto-complete setting below. Manually completing Video Quests will still require waiting the full duration and is not dependent on enrollment time.",
                    mobileDesktop: "Make some mobile-only Video Quests completable on desktop:",
                    mobileDesktopTooltip: "Some mobile-only Video Quests can be enrolled in on desktop, but still must be completed on mobile. This setting will allow those to be completed on desktop.\n\nSome mobile-only Video Quests are only enrollable on mobile. For this setting to affect those, you must enroll in those Quests on your mobile device before returning to desktop and refreshing your Quests.\n\nThis setting, when enabled independently, applies only to manually completing Video Quests. Auto-completing mobile Video Quests from desktop relies on the auto-complete setting below, and will implicitly enable this setting as well.",
                    simultaneous: "Auto-complete Quests simultaneously rather than sequentially:",
                    simultaneousTooltip: "By default, attempting to auto-complete multiple Quests will queue them to be completed in order.\n\nThis setting will alternatively allow all auto-complete Quests to run at the same time.\n\nThis setting will only apply to auto-completing Quests and relies on the auto-complete setting below.",
                    resumeInterrupted: "Resume interrupted auto-completions after a reload or restart:",
                    resumeInterruptedTooltip: "This setting will automatically resume any interrupted auto-completions caused by reloads or restarts, including requeuing Quests which had yet to start auto-completing but had been queued.",
                    autoProcess: "Automatically process compatible Quests for auto-completion:",
                    autoProcessTooltip: "Complete eligible, unclaimed, unignored, and unexpired Quests included by your reward and Quest type filters that are detected while Discord is running. Only supported task types enabled below are included.\n\nAutomatically enrolls in compatible Quests before queuing them for auto-completion. Waits for known rate-limit cooldowns. Stops on unknown errors, rate limits without a retry delay, or repeated enrollment failures.",
                    autoEnroll: "Automatically enroll in compatible Quests.",
                    autoEnrollTooltip: "Enroll in eligible, unclaimed, unignored, and unexpired Quests included by your reward and Quest type filters that are detected while Discord is running.\n\nEnrolls in Quests without queuing them for auto-completion. Waits for known rate-limit cooldowns. Stops on unknown errors, rate limits without a retry delay, or repeated enrollment failures.",
                    autoCompleteTypes: "Auto-complete specific Quest types:",
                    autoCompleteTypesTooltip: "Watch Video on Mobile Quests will only work on mobile Quests which are enrollable on desktop. If a Quest is locked to enrollment on mobile, you must first enroll in it on your mobile device before returning to desktop and refreshing your Quests.\n\nAll video related Quests usually send a stack trace with the progress reports. This means Discord would know exactly which functions were called, and can therefore verify that their own functions initiated the progress. Questify erases this stack trace, but the absence of it will be just as telling as its presence.\n\nPlay on Desktop, Play on PlayStation, Play on Xbox, Play Activity, and Achievement in Activity Quests are only available on official desktop clients due to a limitation imposed by Discord. 3rd party clients such as web extensions, Plextron, and others, do not support auto-completing these Quest types.\n\nAll game related Quests usually send a game fingerprint with the heartbeat reports. This means Discord can use data from tens of thousands of users to determine whether other users are likely using a real game or are emulating the executable. There is no reasonable method to spoof this value, so Questify leaves it blank, but the absence of it will be just as telling as poorly spoofing the value.\n\nAuto-completion starts from Quest buttons on the Quests page or automatic processing. Quests are completed in the order they were queued, unless simultaneous completion is enabled above.\n\nAuto-completing Quests is the riskiest dangerous setting available. Enable it at your own risk."
                },
                questNotifications: {
                    title: "Quest Notifications",
                    description: "Configure Quest completed and new Quest detected notifications and alerts.",
                    questCompleted: "Quest Completed",
                    notifyOnComplete: "Show a notification when a Quest is completed:",
                    soundOnComplete: "Play a sound when a Quest is completed:",
                    volume: "Volume:",
                    newQuests: "New Quests Detected",
                    notifyOnNew: "Show a notification when new Quests are detected:",
                    soundOnNew: "Play a sound when new Quests are detected:",
                    notifyOnNewExcluded: "Show a notification when new excluded Quests are detected:",
                    notifyOnNewExcludedTooltip: "Some Quests are excluded from your available Quests list due to region or platform restrictions.\n\nWhen enabled, Questify will fetch their Quest configs, apply your included Quest and reward type filters, print the resolved excluded Quest data to console, and show a separate notification for matching excluded Quests.",
                    soundOnNewExcluded: "Play a sound when new excluded Quests are detected:",
                    soundOnNewExcludedTooltip: "Some Quests are excluded from your available Quests list due to region or platform restrictions.\n\nWhen a sound is selected, Questify will fetch their Quest configs, apply your included Quest and reward type filters, print the resolved excluded Quest data to console, and play this sound for matching excluded Quests.",
                    fetchInterval: "Quest Fetch Interval:",
                    fetchIntervalTooltip: "Discord only fetches Quests on load and when you visit the Quests page.\n\nThis interval periodically fetches Quests for you while the client stays open, so Quest Button indicators and new Quest alerts can stay up to date throughout the day.\n\nThis only runs if enabled and if the Quest Button or Quest Notifications settings are configured in a way which makes fetching periodically meaningful.",
                    disabled: "DISABLED",
                    preview: "Preview {{sound}}",
                    intervals: {
                        thirtyMinutes: "30 Minutes",
                        fortyFiveMinutes: "45 Minutes",
                        oneHour: "1 Hour",
                        threeHours: "3 Hours",
                        sixHours: "6 Hours",
                        twelveHours: "12 Hours"
                    }
                },
                questTiles: {
                    title: "Quest Tiles",
                    description: "Highlight Quests with optional theme colors for visibility.",
                    behavior: "Tile Behavior",
                    gradientStyle: "Gradient Style:",
                    gradientStyleTooltip: "Intense and Default use the selected tile color in the asset gradient.\n\nSubtle Black keeps a darker neutral gradient for contrast.\n\nNo Gradient removes the asset gradient, which can make some Quest artwork harder to read.",
                    assetPreload: "Asset Preload:",
                    assetPreloadTooltip: "Loading all assets when the Quests page opens reduces layout shifting while scrolling.\n\nLoading during page scroll is closer to Discord's default behavior and may use less work up front.",
                    colors: "Tile Colors",
                    enable: "Enable",
                    disable: "Disable",
                    gradient: {
                        intense: "Intense Restyle Gradient",
                        default: "Default Restyle Gradient",
                        black: "Subtle Black Gradient",
                        hide: "No Gradient"
                    },
                    preload: {
                        onLoad: "Load All Quest Assets On Page Load",
                        onScroll: "Load Quest Assets During Page Scroll"
                    }
                },
                reorderQuests: {
                    title: "Reorder Quests",
                    description: "Sort Quests by their status when the Questify sort option is selected on the Quests page. Hidden statuses are filtered out with any sort option.",
                    statusOrder: "Status Order",
                    statusOrderTooltip: "Each status can only appear once. Selecting a status already used in another position swaps the two positions.",
                    positions: {
                        first: "First:",
                        second: "Second:",
                        third: "Third:",
                        fourth: "Fourth:"
                    },
                    subsorts: "Subsorts",
                    unclaimedSubsort: "Unclaimed Subsort:",
                    unclaimedSubsortTooltip: "Completed but unclaimed Quests stay below incomplete unclaimed Quests, then this subsort is applied within those groups.",
                    claimedSubsort: "Claimed Subsort:",
                    claimedSubsortTooltip: "Claimed Quests can be sorted by claim time or by when the Quest was added.",
                    ignoredSubsort: "Ignored Subsort:",
                    ignoredSubsortTooltip: "Ignored Quests still keep their ignored group position, then this subsort controls their order inside that group.",
                    expiredSubsort: "Expired Subsort:",
                    expiredSubsortTooltip: "Expired Quests can be sorted by expiration time or by when the Quest was added.",
                    subsort: {
                        addedNewest: "Added (Newest)",
                        addedOldest: "Added (Oldest)",
                        expiringSoonest: "Expiring (Soonest)",
                        expiringLatest: "Expiring (Latest)",
                        expiredMostRecent: "Expired (Most Recent)",
                        expiredLeastRecent: "Expired (Least Recent)",
                        claimedMostRecent: "Claimed (Most Recent)",
                        claimedLeastRecent: "Claimed (Least Recent)"
                    },
                    memory: "Quest Page Memory",
                    rememberSort: "Remember the selected Quest page sort:",
                    rememberSortTooltip: "When disabled, the Quests page opens with the Questify sort option each time.",
                    rememberFilters: "Remember the selected Quest page filters:",
                    rememberFiltersTooltip: "When disabled, the Quests page opens without task or reward filters each time."
                }
            },
            option: {
                migrationVersion: {
                    label: "Migration Version",
                    description: "The current migration version of the settings."
                },
                questFeatures: {
                    label: "Quest Features",
                    description: "Select which Quest features to disable."
                },
                disableQuestsEverything: {
                    label: "Disable Everything",
                    description: "Disable all Quest features."
                },
                disableRelocationNotices: {
                    label: "Disable Relocation Notices",
                    description: "Disable Quest relocation notices in the Discovery page."
                },
                disableSponsoredBanner: {
                    label: "Disable Sponsored Banner",
                    description: "Disable the sponsored banner on the Quest page."
                },
                disableAccountPanelPromo: {
                    label: "Disable Account Panel Promo",
                    description: "Disable the promoted Quest popup above your account panel."
                },
                disableAccountPanelQuestProgress: {
                    label: "Disable Account Panel Progress",
                    description: "Disable active and completed Quest progress above your account panel."
                },
                disableOrbsAndQuestsBadges: {
                    label: "Disable Quest & Orbs Badges",
                    description: "Disable the Quest badge on user profiles."
                },
                disableFriendsListPromo: {
                    label: "Disable Friends List Promo",
                    description: "Disable the promotion of Quests for games played by friends."
                },
                disableMembersListPromo: {
                    label: "Disable Members List Promo",
                    description: "Disable the actively playing icon in members list items."
                },
                allowChangingDangerousSettings: {
                    label: "Allow Changing Dangerous Settings",
                    description: "Allow changing dangerous settings."
                },
                resumeInterruptedQuests: {
                    label: "Resume Interrupted Quests",
                    description: "Resume auto-completing Quests after a reload or restart."
                },
                makeMobileVideoQuestsDesktopCompatible: {
                    label: "Make Mobile Video Quests Desktop Compatible",
                    description: "Make mobile-only Video Quests compatible with desktop."
                },
                autoCompleteQuestsSimultaneously: {
                    label: "Auto-Complete Quests Simultaneously",
                    description: "Complete Quests simultaneously rather than sequentially."
                },
                completeVideoQuestsQuicker: {
                    label: "Complete Video Quests Quicker",
                    description: "Use Discord's progress leeway and elapsed enrollment time for Video Quest auto-completion."
                },
                autoCompleteQuestTypes: {
                    label: "Auto-Complete Quest Types",
                    description: "Which types of Quests to auto-complete in the background."
                },
                questButton: {
                    label: "Quest Button",
                    description: "Customize the Quest button in the server list."
                },
                questButtonDisplay: {
                    label: "Quest Button Display",
                    description: "Which display type to use for the Quest button in the server list."
                },
                questButtonIncludedTypes: {
                    label: "Quest Button Included Types",
                    description: "Which reward types and Quest types to include when displaying Quest counts on the Quest button."
                },
                questButtonIndicator: {
                    label: "Quest Button Indicator",
                    description: "Which display type to use for the unclaimed indicator on the Quest button in the server list."
                },
                questButtonBadgeCount: {
                    label: "Quest Button Badge Count",
                    description: "The current number of relevant unclaimed Quests."
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
                questNotifications: {
                    label: "Quest Notifications",
                    description: "Configure Quest completed and new Quest detected notifications."
                },
                notifyOnQuestComplete: {
                    label: "Notify On Quest Completion",
                    description: "Show a notification when a Quest is completed."
                },
                notifyOnNewQuests: {
                    label: "Notify On New Quests",
                    description: "Show a notification when new Quests are detected."
                },
                notifyOnNewExcludedQuests: {
                    label: "Notify On New Excluded Quests",
                    description: "Show a notification when new excluded Quests are detected."
                },
                questCompletedAlertSound: {
                    label: "Quest Completed Alert Sound",
                    description: "The sound to play when a Quest is completed."
                },
                questCompletedAlertVolume: {
                    label: "Quest Completed Alert Volume",
                    description: "The volume for the Quest completed alert sound."
                },
                questFetchInterval: {
                    label: "Quest Fetch Interval",
                    description: "The interval in seconds to fetch Quests from Discord."
                },
                newQuestAlertSound: {
                    label: "New Quest Alert Sound",
                    description: "The sound to play when new Quests are detected."
                },
                newQuestAlertVolume: {
                    label: "New Quest Alert Volume",
                    description: "The volume for the new Quest alert sound."
                },
                newExcludedQuestAlertSound: {
                    label: "New Excluded Quest Alert Sound",
                    description: "The sound to play when new excluded Quests are detected."
                },
                newExcludedQuestAlertVolume: {
                    label: "New Excluded Quest Alert Volume",
                    description: "The volume for the new excluded Quest alert sound."
                },
                questTiles: {
                    label: "Quest Tiles",
                    description: "Customize the appearance of Quest tiles in the Quests page."
                },
                questTileUnclaimedColor: {
                    label: "Unclaimed Tile Color",
                    description: "The color of unclaimed Quest tiles in the Quests page."
                },
                questTileClaimedColor: {
                    label: "Claimed Tile Color",
                    description: "The color of claimed Quest tiles in the Quests page."
                },
                questTileIgnoredColor: {
                    label: "Ignored Tile Color",
                    description: "The color of ignored Quest tiles in the Quests page."
                },
                questTileExpiredColor: {
                    label: "Expired Tile Color",
                    description: "The color of expired Quest tiles in the Quests page."
                },
                questTileGradient: {
                    label: "Tile Gradient",
                    description: "Style of the gradient used in the Quest tiles."
                },
                questTilePreload: {
                    label: "Tile Asset Preload",
                    description: "Attempt to preload the assets for the Quest tiles."
                },
                reorderQuests: {
                    label: "Reorder Quests",
                    description: "Sort Quests by their status."
                },
                questOrder: {
                    label: "Quest Order",
                    description: "Sort order for Quest status groups."
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
                isOnQuestsPage: {
                    label: "On Quests Page",
                    description: "Whether the user is currently on the Quests page."
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
                    description: "The last used sort on the Quests page."
                },
                lastQuestPageFilters: {
                    label: "Last Quest Page Filters",
                    description: "The last used filters on the Quests page."
                },
                ignoredQuestIDs: {
                    label: "Ignored Quest IDs",
                    description: "An array of Quest IDs that are ignored."
                },
                resumeQuestIDs: {
                    label: "Resume Quest IDs",
                    description: "An array of Quest IDs that are being or are queued to be auto-completed in the background."
                },
                acknowledgedNotices: {
                    description: "One-time notices that the user has acknowledged.",
                    label: "Acknowledged Notices"
                },
                settingsSearch: {
                    description: "Search Questify settings.",
                    label: "Settings Search"
                },
                hideNonAutoCompletableQuests: {
                    description: "Hide incomplete Quests without a supported and enabled auto-complete task.",
                    label: "Hide Non Auto Completable Quests"
                },
                preventVideoQuestsPausing: {
                    description: "Prevent pausing the video when the Quest modal loses focus.",
                    label: "Prevent Video Quests Pausing"
                },
                hiddenQuestStatuses: {
                    description: "Quest status groups to hide.",
                    label: "Hidden Quest Statuses"
                },
                autoEnrollQuests: {
                    label: "Auto Enroll Quests",
                    description: "Automatically enroll in eligible available Quests on successful fetches while Discord is running."
                },
                autoCompleteQuests: {
                    label: "Auto Complete Quests",
                    description: "Automatically enroll in and complete eligible available Quests with supported and enabled task types on successful fetches while Discord is running."
                }
            },
            text: {
                clearQuestQueue: "Clear Quest Queue",
                hideIncompleteQuestsWith: "Hide incomplete Quests with an unclaimed or ignored status when no auto-complete task is supported on this platform and enabled in the Quest types dropdown. Claimed, expired, and completed Quests are exempt. Use the Status Order Hidden options to hide those Quests.",
                discordForcesYouTo: "Discord forces you to be tabbed into the client for Video Quests to play their video.",
                hideNonAutoCompletable: "Hide Non Auto-Completable Quests:",
                preventVideoQuestsFrom: "Prevent Video Quests from pausing when losing focus:",
                thePunishmentAlsoConsists: "The punishment also consists of an account standing violation which lasts 2 years per violation.",
                dueToTheVarious: "Due to the various methods Discord uses to track users, there's no way to realistically evade detection. If you proceed, understand that Discord likely will detect your use at some point.",
                enrollInQuest: "Enroll in Quest",
                hidden: "Hidden",
                selectingAnOccupiedPosition: "Selecting an occupied position swaps the two statuses. Hidden statuses are removed from the Quest lists.",
                searchQuestifySettings: "Search Questify Settings",
                searchQuestifySettings2: "Search Questify Settings...",
                noMatchingSettings: "No matching settings.",
                questifyNoticeAugust7th: "Questify Notice - August 7th, 2026",
                keepUsingDangerousQuestify: "Keep Using Dangerous Questify Settings",
                disableDangerousQuestifySettings: "Disable Dangerous Questify Settings",
                questifyNoticeAugust26th: "Questify Notice - August 26th, 2026",
                areYouSure: "Are You Sure?",
                thePunishmentAppearsLimited: "The punishment appears limited to loss of access to Quests and their rewards, but Discord may escalate at any time.",
                queueAllQuests: "Queue All Quests",
                inProgress: "In-Progress",
                rateLimited: "Rate-Limited",
                preventsVideoPausing: "This setting prevents the video from pausing and allows completion to progress as normal.",
                appliesOnlyToVideoQuests: "This setting applies only to manually completing Video Quests.",
                knownToPunish: "Discord is known to punish users of scripts or plugins that modify the completion of Quests. Modifying the completion of Quests is against Discord's",
                punishmentConsists: "The punishment consists of a temporary or permanent loss of access to Quests and their rewards.",
                questBanSystem: "Discord has implemented a Quest Ban system which will temporarily or permanently limit your access to completing Quests and claiming their rewards if you are found to be completing them through unofficial means. Modifying the completion of Quests is against their",
                begunPunishing: "Discord has begun punishing users of scripts and plugins that modify the completion of Quests. Modifying the completion of Quests is against their",
                dueToRateLimits: " due to rate limits"
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
        quickThemeSwitcher: {
            name: "QuickThemeSwitcher",
            description: "Quickly switch between themes using keyboard shortcuts.",
            about: {
                title: "Bindings",
                description: "Use Ctrl/Cmd+Shift+Arrows to navigate (Left/Right: cycle themes, Up: enable, Down: disable).",
                reload: "Press Ctrl/Cmd+Shift+Alt to reload the theme list."
            },
            modal: {
                added: "Added {{count}} theme{{s}}",
                removed: "Removed {{count}} theme{{s}}",
                reloaded: "Reloaded {{themeCount}} themes",
                addedLocal: "Added {{count}} local theme{{s}}",
                removedLocal: "Removed {{count}} local theme{{s}}",
            },
            option: {
                includeLocal: {
                    label: "Include Local",
                    description: "Include local themes"
                },
                includeOnline: {
                    label: "Include Online",
                    description: "Include online themes"
                },
                sortOrder: {
                    label: "Sort Order",
                    description: "Sort method",
                    asc: "A-Z",
                    desc: "Z-A",
                    recent: "Recent"
                },
                autoRefresh: {
                    label: "Auto Refresh",
                    description: "Auto-refresh theme list when changes are detected"
                },
                showNotifications: {
                    label: "Show Notifications",
                    description: "Show notifications when themes are added/removed"
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
            },
            text: {
                quotePreview: "Quote preview"
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
                    selectAll: "Select All",
                    reset: "Reset",
                    stateFilters: "State Filters",
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
                    joinSettings: "Join Settings",
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
            keybind: {
                label: "Keybind",
                recording: "Recording...",
                reset: "Reset"
            },
            option: {
                keybindEnabled: {
                    label: "Keybind Enabled",
                    description: "Show the random voice keybind controls"
                },
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
                prioritizeFriends: {
                    label: "Prioritize Friends",
                    description: "Prefer channels with your friends in them when possible."
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
            },
            toast: {
                failedToFindA: "Failed to find a voice channel.",
                voiceChannelIsUnavailable: "Voice channel is unavailable."
            },
            text: {
                userCount: "{{count}} user",
                usersCount: "{{count}} users"
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
        recentDMSwitcher: {
            name: "RecentDMSwitcher",
            description: "Ctrl+Tab between most recently used DMs (Ctrl+Shift+Tab reverse)",
            option: {
                visualStyle: {
                    label: "Visual Style",
                    description: "Visual indicator style while cycling",
                    overlay: "Overlay (Alt+Tab style)",
                    toast: "Toast (status message)",
                    off: "Off"
                },
                overlayMode: {
                    label: "Overlay Mode",
                    description: "Overlay content",
                    row: "Row of recent",
                    current: "Current only",
                },
                amountOfUsers: {
                    label: "Amount of Users",
                    description: "Number of users to show in overlay"
                },
                overlayRowLength: {
                    label: "Overlay Row Length",
                    description: "Number of recent DMs to show in row"
                },
                overlayShowAvatars: {
                    label: "Overlay Show Avatars",
                    description: "Show user avatars in overlay"
                },
                toastDurationMs: {
                    label: "Toast Duration (ms)",
                    description: "Show avatars in overlay"
                },
                clearRdms: {
                    label: "Clear RDMS List",
                    description: "Testing utility: Clear RDMs list",
                    toast: "Cleared RDMS history",
                    button: "Clear RDMs History"
                }
            },
            modal: {
                unknown: "Unknown",
                dm: "DM",
                group: "Group DM",
                channel: "Channel",
                switchingTo: "Switching to: {{name}}"
            }
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
            },
            text: {
                relationshipNotifier: "Relationship Notifier"
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
                fill: "Fill",
                image: "Image"
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
                },
                replacementEngine: {
                    label: "Replacement Engine",
                    description: "Replace with a specific search engine instead of adding a menu",
                    off: "Off",
                    custom: "Custom Engine",
                }
            },
            context: {
                label: "Search Text",
                searchWith: "Search with {{name}}"
            },
            text: {
                google: "Google"
            }
        },
        replyPingControl: {
            name: "ReplyPingControl",
            description: "Control whether to always or never get pinged on message replies, with whitelist and blacklist features",
            option: {
                replyPingBlacklist: {
                    label: "Reply Ping Blacklist",
                    description: "Comma-separated list of User IDs to never receive reply pings from"
                },
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
            },
            text: {
                all: "All"
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
            },
            profile: {
                optedOut: "User opted out",
                noReviews: "No reviews yet"
            },
            toast: {
                youCannotVoteOn: "You cannot vote on your own review.",
                networkErrorFailedTo: "Network error: Failed to connect to ReviewDB.",
                pleaseAuthorizeToVote: "Please authorize to vote on reviews.",
                requestFailed: "ReviewDB: Request failed with status {{status}}"
            },
            text: {
                ok: "Ok",
                updateReviewFor: "Update review for @{{name}}",
                reviewUser: "Review @{{name}}",
                system: "System",
                reviewCount: "({{count}} Reviews)"
            }
        },
        richMagnetLinks: {
            name: "RichMagnetLinks",
            description: "Renders magnet links like message links",
            unknown: "unknown filename"
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
        rpcEditor: {
            name: "RPCEditor",
            description: "Edit the type and content of any Rich Presence",
            option: {
                replacedAppIds: {
                    label: "Replaced App IDs",
                }
            },
            modal: {
                tutorial: {
                    title: "IDs of currently running activities",
                    noRunning: "No running activities",
                    available: "Available variables",
                    variableText: "In all fields (except stream URL), you can put in variables that'll automatically be replaced by their original content:",
                    more: "More details",
                    details: {
                        leave: "Leave a field empty to leave it as is.",
                        set: "Set a field to 'null' to hide it on the presence.",
                        reload: "You may need to reload Discord for changes to apply."

                    }
                },
                settings: {
                    applyEdits: "Apply edits to app",
                    addNewApp: "Add new application",
                    appId: "Application ID",
                    invalidAppId: "Invalid application ID",
                    newActivityType: "New activity type",
                    activityTypes: {
                        playing: "Playing",
                        watching: "Watching",
                        listening: "Listening",
                        competing: "Competing",
                        streaming: "Streaming"
                    },
                    streamUrl: "Stream URL (must be YouTube or Twitch)",
                    invalidStreamUrl: "Invalid stream URL",
                    newName: "New name",
                    newDetails: "New details",
                    newState: "New state",
                    largeImage: "Large image",
                    smallImage: "Small image",
                    text: "Text",
                    url: "URL",
                    firstLine: "(first line)",
                    secondLine: "(second line)",
                    thirdLine: "(third line)",
                    alsoThirdLine: "(also third line)",
                    hideAssets: "Hide assets (large & small images)",
                    hideTimestamps: "Hide timestamps"
                }
            },
        },
        saveFavoriteGIFs: {
            name: "SaveFavoriteGIFs",
            description: "Export favorited GIF urls",
            toolbox: "Save Favorite GIFs",
            title: "Save Favorite GIFs",
            command: {
                savegifs: {
                    description: "Save all favorite GIF urls to a text file"
                },
                saveworkinggifs: {
                    description: "Test all favorite GIFs and only save the ones that are still working"
                }
            },
            option: {
                showToolboxButton: {
                    label: "Show Toolbox Button",
                    description: "Show 'Save Favorite GIFs' button in Plexcord Toolbox (Requires Reload)"
                }
            },
            toast: {
                save: "Saved GIFs successfully as {{filename}}",
                failed: "Failed to save GIFs",
                no: "No favorite GIFs found!",
                testing: "Testing {{count}} GIFs, This may take a moment...",
                noneWorking: "None of your saved GIFs appear to be working.",
                saved: "Filtered {{broken}} possibly broken GIFs. Saved {{saved}} working GIFs."
            }
        },
        scheduledMessages: {
            name: "ScheduledMessages",
            description: "Schedule messages to be sent at a specific time or after a delay.",
            toolbox: {
                toggle: "View Scheduled Messages"
            },
            option: {
                maxMessagesPerMinute: {
                    label: "Max Messages Per Minute",
                    description: "Max scheduled messages per channel that can fire in the same minute."
                },
                checkIntervalSeconds: {
                    label: "Check Interval (Seconds)",
                    description: "How often the plugin checks for messages to send."
                },
                showNotifications: {
                    label: "Show Notifications",
                    description: "Show toast notifications when messages are sent."
                },
                showPhantomMessages: {
                    label: "Show Phantom Messages",
                    description: "Show scheduled messages as phantom messages in chat."
                }
            },
            channelType: {
                unknown: "Unknown",
                dm: "DM",
                groupDm: "Group DM",
                channel: "Channel"
            },
            toast: {
                messageSent: "Scheduled message sent to {{channel}}",
                messageFailed: "Failed to send scheduled message",
                maxMessagesReached: "Maximum of {{max}} messages per channel per minute reached",
                messageScheduled: "Message scheduled!",
                messageRemoved: "Scheduled message removed",
                allCleared: "All scheduled messages cleared",
                scheduledMessageSentTo: "Scheduled message sent to {{name}}"
            },
            button: {
                tooltipOn: "Schedule Mode ON (click to disable, right-click for list)",
                tooltipOff: "Schedule Mode OFF (click to enable, right-click for list)"
            },
            accessory: {
                scheduledFor: "Scheduled for {date}{timeLeft}",
                remaining: {
                    days: "{{days}}d {{hours}}h remaining",
                    hours: "{{hours}}h {{minutes}}m remaining",
                    minutes: "{{minutes}}m remaining"
                }
            },
            scheduleModal: {
                title: "Schedule Message",
                schedulingFor: "Scheduling for: {{channel}}",
                scheduleType: "Schedule Type",
                delay: "Delay",
                specificTime: "Specific Time",
                delayMinutes: "Delay (minutes)",
                dateTime: "Date & Time",
                error: {
                    invalidDelay: "Please enter a valid delay (minimum 1 minute)",
                    invalidDateTime: "Please select a future date and time"
                },
                schedule: "Schedule",
                cancel: "Cancel"
            },
            viewModal: {
                title: "Scheduled Messages",
                clearAll: "Clear All",
                noMessages: "No scheduled messages",
                delete: "Delete",
                close: "Close"
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
        sendTimestamps: {
            name: "SendTimestamps",
            description: "Send timestamps easily via chat box button & text shortcuts. Read the extended description!",
            sample: {
                paragraph1: "To quickly send time only timestamps, include timestamps formatted as `HH:MM` (including the backticks!) in your message",
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
                roles: "Roles",
                boostLevel: "{{count}} (Level {{level}})"
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
                tryDiscordHighlighter: {
                    label: "Try Discord's Highlighter",
                    description: "Use the more lightweight default Discord highlighter and theme.",
                    never: "Never",
                    secondary: "Prefer Shiki instead of Discord's highlighter",
                    primary: "Prefer Discord's highlighter instead of Shiki",
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
                },
                ignoredLanguages: {
                    label: "Ignored Languages",
                    description: "Comma separated list of languages to leave to Discord's default codeblocks"
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
                },
                noQuickReacts: {
                    description: "Hide quick reacts. By default, showing the full menu hides quick react buttons.",
                    label: "No Quick Reacts"
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
                },
                showGithubOrgs: {
                    description: "Show GitHub organizations the user is a member of",
                    label: "Show Github Orgs"
                },
                showOnModal: {
                    description: "Show connected accounts in the full-size profile modal",
                    label: "Show On Modal"
                }
            }
        },
        showHiddenChannels: {
            name: "ShowHiddenChannels",
            description: "Show channels that you do not have access to view.",
            tooltip: "Hidden Channel",
            option: {
                channelStyle: {
                    label: "Channel Style",
                    description: "The style used to display hidden channels.",
                    classic: "Classic",
                    muted: "Muted",
                    showUnreads: "Show Unreads",
                    mutedWithUnreads: "Muted and Show Unreads"
                },
                showMode: {
                    label: "Show Mode",
                    description: "The mode used to display hidden channels.",
                    lock: "Plain style with Lock Icon instead",
                    hidden: "Muted style with hidden eye icon on the right",
                    lockIconRight: "Lock icon on the right"
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
                    description: "Display the first available name listed in your custom name format in the members list, DMs list, friends list, and Active Now."
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
                    description: "For the non-primary names, if the role has a gradient and the color below is set to 'Role+-#', use the primary color instead of the whole gradient, and if it has a nitro effect, ignore it entirely."
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
                alwaysShowEffects: {
                    label: "Always Animate Effects",
                    description: "Always show effects as if you were hovering."
                },
                includedNames: {
                    label: "Included Names",
                    description: "The order to display usernames, display names, nicknames, and friend names. Use the following placeholders: {user}, {display}, {nick}, {friend}. You can provide multiple name options to use as fallbacks if one is unavailable by separating them with commas as such: {friend, nick, display}. You can have up to three prefixes and three suffixes per name."
                },
                customNameColor: {
                    label: "Custom Name Color",
                    description: "The color to use for the custom name you assigned a user if it's not the first displayed. Accepts any valid CSS input. Use 'Role' to follow the user's top role colors, nitro effect colors, or IRCColors color if enabled. Use 'Role+-#' to adjust the brightness by that percentage (ex: 'Role+15')"
                },
                friendNameColor: {
                    label: "Friend Name Color",
                    description: "The color to use for a friend's nickname if it's not the first displayed. Accepts any valid CSS input. Use 'Role' to follow the user's top role colors, nitro effect colors, or IRCColors color if enabled. Use 'Role+-#' to adjust the brightness by that percentage (ex: 'Role+15')"
                },
                nicknameColor: {
                    label: "Nickname Color",
                    description: "The color to use for the nickname if it's not the first displayed. Accepts any valid CSS input. Use 'Role' to follow the user's top role colors, nitro effect colors, or IRCColors color if enabled. Use 'Role+-#' to adjust the brightness by that percentage (ex: 'Role+15')"
                },
                displayNameColor: {
                    label: "Display Name Color",
                    description: "The color to use for the display name if it's not the first displayed. Accepts any valid CSS input. Use 'Role' to follow the user's top role colors, nitro effect colors, or IRCColors color if enabled. Use 'Role+-#' to adjust the brightness by that percentage (ex: 'Role+15')"
                },
                usernameColor: {
                    label: "Username Color",
                    description: "The color to use for the username if it's not the first displayed. Accepts any valid CSS input. Use 'Role' to follow the user's top role colors, nitro effect colors, or IRCColors color if enabled. Use 'Role+-#' to adjust the brightness by that percentage (ex: 'Role+15')"
                },
                triggerNameRerender: {
                    label: "Trigger Name Rerender",
                    description: "Trigger a name rerender by toggling this setting."
                },
                searchAutocomplete: {
                    description: "Display the first available name listed in your custom name format in mention and search autocomplete.",
                    label: "Search Autocomplete"
                },
                styleDirectMessagesList: {
                    description: "Show display name effects on unselected entries without requiring hover. Selected and hovered entries are still styled when disabled.",
                    label: "Style Direct Messages List"
                },
                styleDirectMessagesMessages: {
                    description: "Show display name effects on message authors without requiring hover. Hovered names are still styled when disabled.",
                    label: "Style Direct Messages Messages"
                },
                styleFriendsList: {
                    description: "Show display name effects without requiring hover. Hovered entries are still styled when disabled.",
                    label: "Style Friends List"
                },
                styleActiveNow: {
                    description: "Show display name effects without requiring hover. Hovered entries are still styled when disabled.",
                    label: "Style Active Now"
                },
                ignoreEffects: {
                    description: "For non-primary names, use only the primary role color and omit display name effects.",
                    label: "Ignore Effects"
                },
                animateEffects: {
                    description: "Animate role gradients and display name effects on non-primary names. This is disabled by \"Ignore Effects\" and reduced motion.",
                    label: "Animate Effects"
                },
                alwaysAnimateEffects: {
                    description: "Force display name effects to animate when they would already be visible, even without hover.",
                    label: "Always Animate Effects"
                },
                gradientGlow: {
                    description: "Add a glow to animated user gradients the same way server role gradients glow.",
                    label: "Gradient Glow"
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
            },
            text: {
                save: "Save",
                unknown: "Unknown"
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
            },
            text: {
                timeoutRemaining: "timeout remaining"
            }
        },
        showResourceChannels: {
            name: "ShowResourceChannels",
            description: "Shows the channels hidden behind the server resources in the channel list"
        },
        showSongName: {
            name: "ShowSongName",
            description: "Shows song name instead of artist for Spotify activity"
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
            channelTitle: {
                chat: "Chat",
                dm: "DM"
            },
            modal: {
                switch: "Switch channels",
                popout: "Popout chat",
                popoutClose: "Close popout chat",
                popoutFor: "Popout chat for {{channel}}",
                close: "Close sidebar chat"
            },
            option: {
                persistSidebar: {
                    label: "Persist Sidebar Chat",
                    description: "Keep the sidebar chat open across Discord restarts"
                },
                persistPopoutWindows: {
                    label: "Persist Popout Chats",
                    description: "Restore open popout chats after Discord restarts"
                },
                popoutAlwaysOnTop: {
                    label: "Popout Always on Top",
                    description: "Keep popout chat windows above all others."
                },
                patchCommunity: {
                    label: "Patch Community",
                    description: "Patch things like the Channel Browser or Members tab that community servers have."
                },
                persistedPopoutWindowIds: {
                    description: "Persisted popout chat channel IDs."
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
                global: "Typing Visible (Global)",
                voiceChannel: "Typing Always Visible In The Connected Voice Channel Chat",
                temporary: "Typing Temporarily Visible In This Channel Due To A Recent Message"
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
                alwaysEnableInActiveVoiceChat: {
                    label: "Always Enable In Active Voice Chat",
                    description: "Always allow your typing indicator to show when typing in a voice channel you are connected to."
                },
                temporaryEnableThresholdServers: {
                    label: "Temporary Enable Threshold (Servers)",
                    description: "Temporarily allow your typing indicator to show for this many seconds after sending a message in a server channel. If the typing indicator is already visible in the channel, this setting will have no effect."
                },
                temporaryEnableThresholdDirectMessages: {
                    label: "Temporary Enable Threshold (Direct Messages)",
                    description: "Temporarily allow your typing indicator to show for this many seconds after sending a message in a DM or Group DM. If the typing indicator is already visible in the channel, this setting will have no effect."
                },
                enabledLocations: {
                    label: "Enabled Locations",
                    description: "Enable functionality for these IDs. Accepts a comma separated list of DM IDs, channel IDs, and guild IDs. Only used if 'Default Hidden' is disabled."
                },
                disabledLocations: {
                    label: "Disabled Locations",
                    description: "Disable functionality for these IDs. Accepts a comma separated list of DM IDs, channel IDs, and guild IDs. Only used if 'Default Hidden' is enabled."
                }
            },
            text: {
                silentTyping: "Silent Typing",
                enabled: "Enabled",
                chatBarIndicators: "Chat Bar Indicators",
                membersListIndicators: "Members List Indicators",
                guild: "Guild",
                channel: "Channel",
                global: "Global"
            }
        },
        snowfall: {
            name: "Snowfall",
            description: "Let it snow on Discord!",
            about: {
                title: "Information",
                paragraph: "This plugin adds a christmas-y snowfall effect on top of Discord's interface. You can change the type of snow in the settings below.",
                note: "NOTE: While on most computers this plugin will not impact performance any more than your average Plexcord extension, it may cause some lag on lower end systems."
            },
            option: {
                typeOfSnow: {
                    label: "Type of Snow",
                    description: "Change the type of snow displayed (Affects performance).",
                    solid: "Solid (Highest Performance)",
                    text: "Text (Medium Performance)",
                    emoji: "Image (Lowest Performance)"
                },
                maxSize: {
                    label: "Max Size",
                    description: "Maximum snowflake size"
                },
                speed: {
                    label: "Speed",
                    description: "Snowfall speed (higher = faster fall)"
                },
                flakesPerSecond: {
                    label: "Flakes Per Second",
                    description: "Snowflakes per second (higher = denser snowfall)"
                }
            }
        },
        sortFriendRequests: {
            name: "SortFriendRequests",
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
            description: "Splits oversized messages into Discord-sized chunks before sending.",
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
                    description: "Minimum delay between each chunk in seconds."
                },
                hardSplit: {
                    label: "Hard Split",
                    description: "If true, splits on the last character instead of the last space/newline."
                },
                splitInSlowmode: {
                    label: "Split In Slowmode",
                    description: "Allow splitting in slowmode when its delay is within the configured maximum."
                },
                slowmodeMax: {
                    label: "Slowmode Max",
                    description: "Maximum slowmode duration allowed when splitting messages."
                },
                splitMode: {
                    description: "Prefer this boundary when splitting a message.",
                    label: "Split Mode"
                }
            },
            toast: {
                cannotSplitThisMessage: "Cannot split this message because of the channel's slowmode.",
                onlySentLengthMessage: "Only {{sent}}/{{length}} message parts were sent.",
                unsentCopied: "Unsent message parts copied to clipboard."
            },
            text: {
                newlines: "Newlines",
                spaces: "Spaces",
                strictCharacterLimit: "Strict character limit"
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
                set: "Set Custom Status",
                delete: "Delete Preset"
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
            },
            text: {
                failedToRender: "Failed to render :("
            }
        },
        stickerPaste: {
            name: "StickerPaste",
            description: "Makes picking a sticker in the sticker picker insert it into the chatbox instead of instantly sending"
        },
        streaks: {
            name: "Streaks",
            description: "Shows a streak next to a user when you exchange DMs with them on consecutive days.",
            tooltip: "{{count}} day streak",
            tooltipExpiring: "{{count}} day streak — message today to keep it going!",
            option: {
                account: {
                    description: "Log in or out of the Streaks API. Streaks are stored on the API, so you need to log in for them to be tracked.",
                    login: "Log In to Streaks API",
                    logout: "Log Out of Streaks API"
                },
                eliteColor: "Elite Streak Color (100+ days)",
                diamondColor: "Diamond Streak Color (60+ days)",
                platinumColor: "Platinum Streak Color (45+ days)",
                goldColor: "Gold Streak Color (30+ days)",
                silverColor: "Silver Streak Color (14+ days)",
                bronzeColor: "Bronze Streak Color (7+ days)",
                defaultColor: "Default Streak Color (1+ days)"
            },
            toast: {
                authFailed: "Failed to authorize: {{error}}",
                failedToAuthorizeMessage: "Failed to authorize: {{message}}",
                authorizationExpired: "Streaks authorization expired. Reauthorize in the Streaks plugin settings."
            }
        },
        streamerModeOnStream: {
            name: "StreamerModeOnStream",
            description: "Automatically enables streamer mode when you start streaming in Discord"
        },
        streamingCodecDisabler: {
            name: "StreamingCodecDisabler",
            description: "Disable video codecs of your choice for streaming and cameras.",
            option: {
                disableAv1Codec: {
                    label: "Disable AV1 Codec",
                    description: "Make Discord not consider using AV1 for streaming and cameras."
                },
                disableH265Codec: {
                    label: "Disable H265 Codec",
                    description: "Make Discord not consider using H265 for streaming and cameras."
                },
                disableH264Codec: {
                    label: "Disable H264 Codec",
                    description: "Make Discord not consider using H264 for streaming and cameras."
                },
                disableVP8Codec: {
                    label: "Disable VP8 Codec",
                    description: "Make Discord not consider using VP8 for streaming and cameras."
                },
                disableVP9Codec: {
                    label: "Disable VP9 Codec",
                    description: "Make Discord not consider using VP9 for streaming and cameras."
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
                    string: "Simple Replacements",
                    stringDescription: "Simple find and replace rules. For example, find 'brb' and replace it with 'be right back'",
                    regex: "Regex Replacements",
                    regexDescription: "More powerful replacements using Regular Expressions. This section is for advanced users. If you don't understand it, just ignore it",
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
                name: "Name",
                nameDescription: "An optional name to help you identify this rule.",
                search: "Search for a rule...",
                noResults: "No rules match your search criteria.",
                title: "Test Rules",
                find: "Find",
                findRegex: "The regex pattern",
                findText: "The text to replace",
                replace: "Replace",
                replaceDescription: "The text to replace the found text with",
                includes: "Only if includes",
                includesDescription: "This rule will only be applied if the message includes this text. This is optional",
                type: "Type a message",
                applied: "Message with rules applied",
                delete: "Delete Rule",
                add: "Add Rule",
                empty: "Empty Rule",
                rule: "Rule"
            },
            text: {
                optionallyOnlyApplyThis: "Optionally, only apply this rule if the message includes this text.",
                emptyRule: "Empty Rule {{number}}",
                ruleWithFind: "Rule {{number}} - {{find}}"
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
                    description: "Show time in 24h format"
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
                },
                recipientTimezoneInDms: {
                    label: "Recipient Timezone in DMs",
                    description: "In DMs, show the recipient's timezone on your messages"
                },
                showLocalTimezone: {
                    label: "Show Local Timezone",
                    description: "Show Local Timezone instead of just local"
                }
            },
            modal: {
                title: "Timezones",
                select: "Select Timezone",
                selectPlaceholder: "Select a Timezone",
                delete: "Delete Timezone",
                save: "Save"
            },
            text: {
                invalidResponseFormat: "Invalid response format"
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
                respectDoNotDisturb: {
                    label: "Respect Do Not Disturb",
                    description: "Do not show notifications when your status is Do Not Disturb."
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
                    deepl: "DeepL Free - API key required",
                    deeplPro: "DeepL Pro - API key required",
                    kagi: "Kagi Translate - API key required"
                },
                kagiSession: {
                    label: "Kagi Session",
                    description: "Get your session token from https://kagi.com/settings?p=user_details"
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
            },
            button: {
                manageLanguages: "Customize translation languages & Auto-Translate"
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
            },
            text: {
                viewAvatarDecoration: "View Avatar Decoration"
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
                },
                messageContextMenu: {
                    description: "Show in message context menu",
                    label: "Message Context Menu"
                },
                sortKeys: {
                    description: "Alphabetically sort the keys of the raw data.",
                    label: "Sort Keys"
                },
                stripSensitiveData: {
                    description: "Remove sensitive data from the raw data, such as your email and phone number.",
                    label: "Strip Sensitive Data"
                }
            },
            modal: {
                title: "View Raw",
                content: "Message Content",
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
            },
            text: {
                copyTypeData: "Copy {{type}} Data",
                rawTypeData: "Raw {{type}} Data",
                messageData: "Message Data"
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
                },
                buttonPosition: {
                    label: "Button Position",
                    description: "Choose where the buttons will be displayed.",
                    left: "Left",
                    right: "Right",
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
                mentionAll: "Mention All Users",
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
            },
            text: {
                convertioWebConverter: "convertio web converter"
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
            description: "Re-adds keybinds missing in the web version of Discord. Only works fully on Plextron/Legcord, not inside your browser",
            option: {
                showNavigationButtons: {
                    description: "Show the back/forward navigation buttons in the title bar.",
                    label: "Show Navigation Buttons"
                },
                overrideCommonKeybinds: {
                    description: "Allows discord to override the most common tab navigation keybinds (ctrl+t, ctrl+shift+t, ctrl+tab, ctrl+shift+tab, ctrl+n). Only works in a few select browsers that allow website keybinds to take priority over native ones.",
                    label: "Override Common Keybinds"
                }
            }
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
                },
                clickableAvatars: {
                    description: "While this is enabled, clicking a reacting user's avatar will open their profile instead of adding the reaction",
                    label: "Clickable Avatars"
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
        },
        addAttachments: {
            name: "AddAttachments",
            description: "Allows you to add new attachments while editing messages",
            toast: {
                youCannotAddMore: "You cannot add more attachments to this message.",
                youCanOnlyAdd: "You can only add {{count}} more attachment{{s}} to this message.",
                uploadingThisCanTake: "Uploading, this can take a while...",
                addedOne: "Attachment added successfully!",
                addedMany: "Attachments added successfully!"
            },
            text: {
                addAttachments: "Add Attachments"
            }
        },
        advancedPermissions: {
            option: {
                simplifiedCard: {
                    description: "What to do with Discord's simplified permissions card",
                    label: "Simplified Card",
                    hide: "Hide it",
                    collapse: "Make it collapsible",
                    show: "Leave it visible"
                },
                collapsedByDefault: {
                    description: "Start the simplified permissions collapsed.",
                    label: "Collapsed By Default"
                }
            },
            name: "AdvancedPermissions",
            description: "Show advanced permissions card by default.",
            text: {
                simplifiedPermissions: "Simplified permissions"
            }
        },
        autoJumpToMessage: {
            option: {
                onlyWhenUnfocused: {
                    description: "Only automatically jump to messages when Discord's window is unfocused.",
                    label: "Only When Unfocused"
                }
            },
            name: "AutoJumpToMessage",
            description: "Automatically opens the channel from new messages."
        },
        betterForwards: {
            text: {
                serverIconForName: "Server icon for {{name}}",
                messageAttachments: "Message attachments",
                messageTextWillNot: "Message text will not be forwarded when this option is disabled",
                forwardEverything: "Forward everything",
                viewServer: "View server",
                embed: "Embed",
                embedNumber: "Embed {{number}}",
                image: "Image",
                video: "Video",
                serverIcon: "Server icon for {{name}}",
                dmIcon: "DM icon for {{name}}",
                groupDmIcon: "Group DM icon for {{name}}"
            },
            option: {
                resendOnFail: {
                    description: "This will attempt to resend a forwarded message if the forward fails. Could cause unintentional pings or text spam. Bypasses NSFW restrictions.",
                    label: "Resend On Fail"
                },
                forwardPreface: {
                    description: "What should the forwarded message be prefaced with",
                    label: "Forward Preface"
                },
                dontFollowForwards: {
                    description: "After forwarding a single message, don't jump to it. Hold shift to ignore this behavior.",
                    label: "Don't Follow Forwards"
                },
                selfForward: {
                    description: "Show the current channel in the forward list popup.",
                    label: "Self Forward"
                }
            },
            name: "BetterForwards",
            description: "Message forward utilities including NSFW bypass and UI improvements."
        },
        betterImageEditor: {
            text: {
                search: "Search",
                searchSavedPictures: "Search saved pictures",
                clearTheSearch: "Clear the search",
                savedPictures: "Saved pictures",
                removeName: "Remove {{name}}",
                removeHoldShiftTo: "Remove. Hold Shift to skip the confirmation",
                originals: "Originals",
                putBackTheLast: "Put back the last one",
                forgetEveryRememberedCrop: "Forget every remembered crop?",
                yourPicturesStayEach: "Your pictures stay. Each one opens unframed from now on, until you crop it again.",
                forget: "Forget",
                cancel: "Cancel",
                clearSavedPictures: "Clear saved pictures?",
                everyPictureYouHave: "Every picture you have saved here goes, along with the crop remembered for each one. Discord's own archive and your current avatar and banner are not touched.",
                clear: "Clear",
                removeThisPicture: "Remove this picture?",
                remove: "Remove",
                keepTheCroppedCopy: "Keep the cropped copy?",
                itGoesOnThe: "It goes on the {{toLowerCase}} shelf, next to your originals.",
                keep: "Keep",
                noThanks: "No thanks",
                exportToAFile: "Export to a file",
                importFromAFile: "Import from a file",
                forgetRememberedFraming: "Forget remembered framing",
                clearSavedPictures2: "Clear saved pictures",
                croppedKind: "Cropped {{kind}}",
                unpinName: "Unpin {{name}}",
                pinName: "Pin {{name}}",
                pinnedNeverDrops: "Pinned, so it never drops off the shelf",
                pinNeverDrops: "Pin so it never drops off the shelf",
                nothingMatches: "Nothing here matches that",
                originalsEmpty: "Pictures you pick, paste or drop land here",
                croppedEmpty: "Pictures you crop land here",
                forgotFraming: "Forgot the framing on {{count}} picture{{s}}",
                nothingFramed: "Nothing was framed",
                pictureLibrary: "Picture library",
                addedPictures: "Added {{count}} picture{{s}}",
                nothingNew: "Nothing new in that file",
                shownOfTotal: "{{shown}} of {{total}}",
                keptCount: "{{count}} kept",
                youAreWearingThis: "You are wearing this",
                removePictureBody: "{{name}} goes from your saved pictures, along with the crop remembered for it."
            },
            option: {
                librarySize: {
                    description: "How many pictures to keep on each shelf.",
                    label: "Library Size"
                },
                rememberCrop: {
                    description: "Restore the zoom and position you last used for a picture.",
                    label: "Remember Crop"
                },
                forgetFraming: {
                    description: "Drop every remembered crop and open each picture the way Discord would.",
                    label: "Forget Framing"
                },
                saveCropped: {
                    description: "Keep a copy of each picture after you crop it.",
                    label: "Save Cropped"
                },
                askBeforeSavingCropped: {
                    description: "Ask first, instead of keeping the cropped copy automatically.",
                    label: "Ask Before Saving Cropped"
                },
                transfer: {
                    description: "Carry your pictures, and how each one is framed, to another device.",
                    label: "Transfer"
                },
                clearLibrary: {
                    description: "Throw away every picture you have saved.",
                    label: "Clear Library"
                }
            },
            name: "BetterImageEditor",
            description: "Keeps a shelf of your pictures in the avatar and banner editor, and remembers how you cropped each one.",
            toast: {
                couldNotExportYour: "Could not export your pictures",
                couldNotReadThat: "Could not read that file",
                thatPictureIsMissing: "That picture is missing",
                thatPictureIsToo: "That picture is too big for Discord",
                couldNotUseThat: "Could not use that picture",
                couldNotKeepThe: "Could not keep the cropped copy"
            },
            kind: {
                avatars: "avatars",
                banners: "banners",
                serverIcons: "server icons",
                serverBanners: "server banners",
                eventCovers: "event covers",
                homeHeaders: "home headers",
                decorations: "decorations",
                widgetCovers: "widget covers",
                widgetImages: "widget images"
            }
        },
        cancelFriendRequest: {
            name: "CancelFriendRequest",
            description: "Adds a way to cancel outgoing friend requests from profiles.",
            text: {
                cancelOutgoingFriendRequest: "Cancel Outgoing Friend Request"
            }
        },
        clipUpload: {
            text: {
                createdAtMustBe: "Created at must be a valid date.",
                cancel: "Cancel",
                uploadClipFile: "Upload Clip File",
                fileName: "File name",
                title: "Title",
                epicMoment: "Epic Moment",
                message: "Message",
                checkOutThisClip: "Check out this clip!",
                spoiler: "Spoiler",
                remix: "Remix",
                thumbnail: "Thumbnail",
                file: "File",
                selectFile: "Select File",
                parseClipMetadataFrom: "Parse clip metadata from file",
                selectFriends: "Select friends",
                selectAGame: "Select a game",
                customApplicationId: "Custom application ID",
                createdAt: "Created at",
                participants: "Participants",
                onlyTagPeopleWho: "Only tag people who were present and have consented to being in this clip.",
                gameApplication: "Game/Application",
                uploadClipFile2: "Upload clip file",
                uploading: "Uploading",
                upload: "Upload",
                noFileSelected: "No file selected",
                couldNotPrepare: "Couldn't prepare the selected file.",
                couldNotRead: "Couldn't read the selected file.",
                couldNotUpdateMetadata: "Couldn't update clip metadata.",
                notCompatible: "This file is not compatible. Use an MP4 clip with H.264 video and AAC audio.",
                uploadFailed: "Upload failed.",
                noUploadSlot: "Discord did not return an upload slot.",
                uploadCanceled: "Upload canceled.",
                failedToUpload: "Failed to upload clip.",
                selectClipFile: "Select clip file",
                mp4Video: "MP4 Video"
            },
            name: "ClipUpload",
            description: "Adds a button to upload a local video file as a Discord clip.",
            toast: {
                checkingClipFile: "Checking clip file.",
                convertingClipFile: "Converting clip file.",
                clipUploaded: "Clip uploaded."
            }
        },
        collapsibleUI: {
            name: "CollapsibleUI",
            description: "Native collapsible channel, member, chat button, and user area surfaces.",
            text: {
                collapsibleUi: "Collapsible UI",
                guildBar: "Guild Bar",
                channelList: "Channel List",
                membersList: "Members List",
                messageButtons: "Message Buttons",
                titleBar: "Title Bar",
                headerBar: "Header Bar",
                userArea: "User Area"
            },
            option: {
                detachUserArea: {
                    description: "Detach the user area so it can be moved freely when it is not collapsed.",
                    label: "Detach User Area"
                },
                detachedUserAreaX: {
                    description: "Persist the detached user area x position.",
                    label: "Detached User Area X"
                },
                detachedUserAreaY: {
                    description: "Persist the detached user area y position.",
                    label: "Detached User Area Y"
                },
                guildBarCollapsed: {
                    description: "Persist the guild bar as collapsed.",
                    label: "Guild Bar Collapsed"
                },
                channelListCollapsed: {
                    description: "Persist the channel list as collapsed.",
                    label: "Channel List Collapsed"
                },
                membersListCollapsed: {
                    description: "Persist the members list as collapsed.",
                    label: "Members List Collapsed"
                },
                chatButtonsCollapsed: {
                    description: "Persist the message button row as collapsed.",
                    label: "Chat Buttons Collapsed"
                },
                titleBarCollapsed: {
                    description: "Persist the title bar as collapsed.",
                    label: "Title Bar Collapsed"
                },
                headerBarCollapsed: {
                    description: "Persist the header bar as collapsed.",
                    label: "Header Bar Collapsed"
                },
                userAreaCollapsed: {
                    description: "Persist the user area as collapsed.",
                    label: "User Area Collapsed"
                }
            }
        },
        customCommands: {
            text: {
                cancel: "Cancel",
                name: "Name",
                response: "Response",
                detectedArguments: "Detected Arguments",
                exampleCommandResponse: "Example Command response:",
                exampleUsage: "Example usage:",
                exampleOutput: "Example output:",
                viewArgumentsGuide: "View Arguments guide",
                editTag: "Edit Tag",
                deleteTag: "Delete Tag",
                registeredTags: "Registered Tags",
                createTag: "Create Tag",
                aTagWithThe: "A Tag with the name **{{name}}** does not exist!",
                successfullyDeletedTheTag: "Successfully deleted the tag **{{name}}**!",
                ephemeralReserved: "The argument name \"ephemeral\" is reserved and cannot be used.",
                createNewTag: "Create New Tag",
                editTagSubtitle: "Edit your custom command.",
                createTagSubtitle: "Create a new tag which will be registered as a slash command.",
                save: "Save",
                create: "Create",
                variablesHelp: "Your response can include variables wrapped in double curly braces which will become command arguments, for example",
                defaultValuesHelp: "You can specify arguments with default values by using an equals sign, for example",
                noTagsYet: "Woops! There are no tags yet, use `/tags create` to create one!",
                nameAlreadyExists: "A tag with the name \"{{name}}\" already exists and will be overwritten.",
                defaultValue: "(default: {{value}})"
            },
            name: "CustomCommands",
            description: "Allows you to create custom slash commands / tags",
            option: {
                tagsList: {
                    label: "Tags List"
                }
            },
            command: {
                ephemeral: "Whether the response should only be visible to you",
                tags: "Manage all custom commands",
                create: "Create a new tag",
                list: "List all your tags",
                delete: "Remove a tag by name",
                tagName: "The name of the tag"
            }
        },
        fileUpload: {
            name: "FileUpload",
            description: "Upload files to hosting services like Zipline, Nest, S3, and WebDAV",
            toast: {
                fileTypeNotAllowed: "File type not allowed by current filter",
                pleaseConfigureFileuploadSettings: "Please configure FileUpload settings first",
                sharexConfigIsValid: "ShareX config is valid",
                importedSharexConfig: "Imported ShareX config",
                uploadSuccessfulButNo: "Upload successful, but no URL was available to copy",
                uploadSuccessfulUrlCopied: "Upload successful, URL copied to clipboard",
                uploadSuccessfulButFailed: "Upload successful, but failed to copy URL",
                uploadSuccessful: "Upload successful",
                uploadSucceededWithServicelabels: "Upload succeeded with {{serviceLabels_service}} after fallback",
                apngToGifConversion: "APNG to GIF conversion failed, uploading as APNG",
                uploadAlreadyInProgress: "Upload already in progress",
                uploadCancelled: "Upload cancelled",
                uploadFailedMessage: "Upload failed: {{message}}",
                invalidSharexConfig: "Invalid ShareX config",
                failedToImportSharexConfig: "Failed to import ShareX config"
            },
            text: {
                uploadToServicename: "Upload to {{serviceName}}",
                uploadToHost: "Upload to Host",
                chooseFile: "Choose File...",
                zipline: "Zipline",
                eZHost: "E-Z Host",
                nest: "Nest",
                encryptingHost: "Encrypting.host",
                s3Compatible: "S3-Compatible",
                catboxMoe: "Catbox.moe",
                litterbox: "Litterbox",
                sharexCustomUploader: "ShareX Custom Uploader",
                webdavNextcloudOwncloud: "WebDAV (Nextcloud/Owncloud)",
                n1Hour: "1 hour",
                n12Hours: "12 hours",
                n24Hours: "24 hours",
                n72Hours: "72 hours",
                corsProxy: "CORS Proxy",
                query: "Query",
                param: "Param",
                fakeLink: "Fake Link",
                embed: "Embed",
                n30Seconds: "30 seconds",
                n1Minute: "1 minute",
                n2Minutes: "2 minutes",
                n5Minutes: "5 minutes",
                n10Minutes: "10 minutes",
                dragHostsToReorder: "Drag hosts to reorder fallback attempts. The selected host is tried first, then this order is used.",
                chooseWhereFileuploadSends: "Choose where FileUpload sends new files.",
                connectionDetailsForYour: "Connection details for your Zipline instance.",
                theUrlOfYour: "The URL of your Zipline instance",
                yourZiplineApiAuthorization: "Your Zipline API authorization token",
                yourZiplineApiToken: "Your Zipline API token",
                folderIdForUploads: "Folder ID for uploads (leave empty for no folder)",
                leaveEmptyForNo: "Leave empty for no folder",
                connectionDetailsForE: "Connection details for E-Z Host uploads.",
                yourEZHost: "Your E-Z Host API key",
                connectionDetailsForNest: "Connection details for Nest uploads.",
                yourNestApiAuthorization: "Your Nest API authorization token",
                yourNestApiToken: "Your Nest API token",
                connectionDetailsForEncrypting: "Connection details for Encrypting.host uploads.",
                yourEncryptingHostApi: "Your Encrypting.host API key",
                howEncryptingHostShould: "How Encrypting.host should format returned links.",
                selectUrlStyle: "Select URL style",
                optionalTitleForEmbed: "Optional title for embed style responses.",
                optionalTitle: "Optional title",
                optionalColorForEmbed: "Optional color for embed style responses.",
                optionalColor: "Optional color",
                optionalFakeLinkValue: "Optional fake link value for fakelink style responses.",
                optionalFakeLink: "Optional fake link",
                connectionDetailsAndObject: "Connection details and object naming for your bucket.",
                s3CompatibleEndpointE: "S3-compatible endpoint (e.g. https://<accountid>.r2.cloudflarestorage.com)",
                bucketToUploadInto: "Bucket to upload into",
                awsRegionOrAuto: "AWS region or auto for Cloudflare R2",
                s3CompatibleAccessKey: "S3-compatible access key",
                yourAccessKeyId: "Your access key ID",
                s3CompatibleSecretKey: "S3-compatible secret key",
                yourSecretAccessKey: "Your secret access key",
                optionalTemporaryCredentialToken: "Optional temporary credential token",
                optionalSessionToken: "Optional session token",
                optionalPublicUrlBase: "Optional public URL base to use for returned links",
                optionalFolderPrefixInside: "Optional folder/prefix inside the bucket",
                useEndpointBucketKey: "Use endpoint/bucket/key format, recommended for R2.",
                optionalAccountBindingFor: "Optional account binding for Catbox uploads.",
                yourCatboxUserhashFor: "Your Catbox userhash for account binding, leave empty for anonymous uploads.",
                yourCatboxUserhash: "Your Catbox userhash",
                howLongUploadsAre: "How long uploads are retained",
                selectExpiry: "Select expiry",
                optionalAccountBindingFor2: "Optional account binding for GoFile uploads.",
                optionalGofileTokenTo: "Optional GoFile token to upload into your account.",
                optionalGofileToken: "Optional GoFile token",
                connectionDetailsForPixelvault: "Connection details for PixelVault uploads.",
                yourPixelvaultAuthorizationKey: "Your PixelVault authorization key.",
                yourPixelvaultUploadKey: "Your PixelVault upload key",
                optionalAccountBindingFor3: "Optional account binding for PixelDrain uploads.",
                optionalPixeldrainApiKey: "Optional PixelDrain API key for authenticated uploads. Leave empty for anonymous uploads.",
                yourPixeldrainApiKey: "Your PixelDrain API key",
                pasteImportOrValidate: "Paste, import, or validate a ShareX custom uploader config.",
                pasteYourSharexCustom: "Paste your ShareX custom uploader JSON (.sxcu/.json). DestinationType must include FileUploader or ImageUploader.",
                importFromFileOr: "Import from file or validate pasted config",
                connectionDetailsForWebdav: "Connection details for WebDAV servers (Nextcloud, Owncloud, etc.).",
                baseWebdavUrlE: "Base WebDAV URL (e.g. https://nextcloud.example.com/remote.php/dav/files/username)",
                optionalSubdirectoryOnThe: "Optional subdirectory on the server to upload into (e.g. uploads)",
                leaveEmptyForRoot: "Leave empty for root directory",
                selectYourWebdavServer: "Select your WebDAV server type. Nextcloud and ownCloud will create a public share link. Generic returns the raw file URL.",
                selectServerType: "Select server type",
                howToReturnThe: "How to return the public share link. Share Page links to a web page; Direct Download links straight to the file; Markdown Link wraps the share page in a clickable filename.",
                selectShareLinkFormat: "Select share link format",
                controlWhatFileuploadDoes: "Control what FileUpload does after a host returns a URL.",
                stripQueryParametersFrom: "Strip query parameters from the uploaded file URL.",
                wrapUploadedVideoLinks: "Wrap uploaded video links with an embed proxy service for better Discord previews.",
                chooseWhichEmbedProxy: "Choose which embed proxy service to use for uploaded video links",
                selectAnEmbedProxy: "Select an embed proxy service",
                convertApngFilesTo: "Convert APNG files to GIF format.",
                useTheOriginalFilename: "Use the original filename instead of naming uploads as upload.ext.",
                automaticallyCopyTheUploaded: "Automatically copy the uploaded file URL to clipboard.",
                onlyUseTheSelected: "Only use the selected uploader without trying fallback hosts.",
                afterUploadInsertThe: "After upload, insert the resulting URL into the current chat input.",
                wrapInsertedUrlsIn: "Wrap inserted URLs in angle brackets to avoid Discord preview embedding.",
                chooseWhenFileuploadTakes: "Choose when FileUpload takes over Discord file handling.",
                useFileuploadWhenUploading: "Use FileUpload when uploading through Discord's file picker.",
                useFileuploadOnlyFor: "Use FileUpload only for files larger than your current Discord upload limit.",
                manualDiscordFileSize: "Manual Discord file size limit in MB, used when automatic detection is wrong. Leave empty for automatic.",
                auto: "Auto",
                commaSeparatedListOf: "Comma-separated list of extensions (e.g. png,jpg,gif). Leave empty to allow all.",
                configureBrowserUploadProxying: "Configure browser upload proxying and timeouts.",
                corsProxyUsedFor: "CORS proxy used for web uploads. Leave empty to use the default proxy.",
                sourceCodeForThe: "Source code for the default CORS proxy",
                maximumTimeToWait: "Maximum time to wait per upload attempt before switching to fallback",
                selectTimeout: "Select timeout",
                drag: "Drag",
                importSxcuJson: "Import .sxcu/.json",
                validate: "Validate",
                resetToDefault: "Reset to default",
                progress: "{{percent}}% - {{transferred}} of {{total}}",
                cancel: "Cancel"
            },
            option: {
                serviceType: {
                    description: "Selected uploader service",
                    label: "Service Type"
                },
                serviceUrl: {
                    description: "Zipline service URL",
                    label: "Service Url"
                },
                ziplineToken: {
                    description: "Zipline auth token",
                    label: "Zipline Token"
                },
                folderId: {
                    description: "Optional Zipline folder ID",
                    label: "Folder Id"
                },
                ezHostKey: {
                    description: "E-Z Host API key",
                    label: "Ez Host Key"
                },
                nestToken: {
                    description: "Nest API token",
                    label: "Nest Token"
                },
                encryptingHostKey: {
                    description: "Encrypting.host API key",
                    label: "Encrypting Host Key"
                },
                encryptingHostUrlStyle: {
                    description: "Encrypting.host URL style",
                    label: "Encrypting Host Url Style"
                },
                encryptingHostDomains: {
                    description: "Encrypting.host domains JSON list",
                    label: "Encrypting Host Domains"
                },
                encryptingHostTitle: {
                    description: "Optional Encrypting.host embed title",
                    label: "Encrypting Host Title"
                },
                encryptingHostColor: {
                    description: "Optional Encrypting.host embed color",
                    label: "Encrypting Host Color"
                },
                encryptingHostFakelink: {
                    description: "Optional Encrypting.host fake link",
                    label: "Encrypting Host Fakelink"
                },
                s3Endpoint: {
                    description: "S3-compatible endpoint URL",
                    label: "S3 Endpoint"
                },
                s3Bucket: {
                    description: "S3 bucket name",
                    label: "S3 Bucket"
                },
                s3Region: {
                    description: "S3 region (use auto for R2)",
                    label: "S3 Region"
                },
                s3AccessKeyId: {
                    description: "S3 access key ID",
                    label: "S3 Access Key Id"
                },
                s3SecretAccessKey: {
                    description: "S3 secret access key",
                    label: "S3 Secret Access Key"
                },
                s3SessionToken: {
                    description: "Optional S3 session token",
                    label: "S3 Session Token"
                },
                s3PublicUrl: {
                    description: "Optional public base URL",
                    label: "S3 Public Url"
                },
                s3Prefix: {
                    description: "Optional S3 object key prefix",
                    label: "S3 Prefix"
                },
                s3ForcePathStyle: {
                    description: "Use path-style S3 URLs",
                    label: "S3 Force Path Style"
                },
                litterboxExpiry: {
                    description: "Litterbox retention window",
                    label: "Litterbox Expiry"
                },
                catboxUserhash: {
                    description: "Catbox userhash for account binding",
                    label: "Catbox Userhash"
                },
                sharexConfig: {
                    description: "ShareX custom uploader JSON",
                    label: "Sharex Config"
                },
                disableFallbacks: {
                    description: "Disable fallback upload services",
                    label: "Disable Fallbacks"
                },
                autoSend: {
                    description: "Insert uploaded URL in chat input",
                    label: "Auto Send"
                },
                autoFormat: {
                    description: "Wrap inserted URL in angle brackets",
                    label: "Auto Format"
                },
                bypassDiscordUpload: {
                    description: "Bypass Discord uploads and use FileUpload instead.",
                    label: "Bypass Discord Upload"
                },
                bypassDiscordUploadOnlyOverLimit: {
                    description: "Only use FileUpload if the file(s) exceed the file size limit.",
                    label: "Bypass Discord Upload Only Over Limit"
                },
                customDiscordFileSizeLimitMB: {
                    description: "Manual Discord file size limit in MB. 0 means automatic detection.",
                    label: "Custom Discord File Size Limit Mb"
                },
                gofileToken: {
                    description: "Optional GoFile API token",
                    label: "Gofile Token"
                },
                fallbackOrder: {
                    description: "Fallback uploader order",
                    label: "Fallback Order"
                },
                pixelVaultKey: {
                    description: "PixelVault upload key",
                    label: "Pixel Vault Key"
                },
                pixelDrainKey: {
                    description: "Optional PixelDrain API key",
                    label: "Pixel Drain Key"
                },
                uploadTimeoutMs: {
                    description: "Upload timeout in milliseconds",
                    label: "Upload Timeout Ms"
                },
                stripQueryParams: {
                    description: "Strip query params from uploaded URLs",
                    label: "Strip Query Params"
                },
                embedProxyEnabled: {
                    description: "Proxy uploaded video links through an embed helper service.",
                    label: "Embed Proxy Enabled"
                },
                embedProxyService: {
                    description: "Embed helper service to wrap uploaded video links.",
                    label: "Embed Proxy Service"
                },
                corsProxyUrl: {
                    description: "CORS proxy URL used for browser uploads",
                    label: "Cors Proxy Url"
                },
                apngToGif: {
                    description: "Convert APNG uploads to GIF",
                    label: "Apng To Gif"
                },
                preserveOriginalFilename: {
                    description: "Preserve the original filename when uploading.",
                    label: "Preserve Original Filename"
                },
                autoCopy: {
                    description: "Auto copy upload URL",
                    label: "Auto Copy"
                },
                autoUploadPastedFiles: {
                    description: "Automatically upload files from clipboard to image host when pasting in chat input.",
                    label: "Auto Upload Pasted Files"
                },
                webdavUrl: {
                    description: "WebDAV server URL",
                    label: "Webdav Url"
                },
                webdavUsername: {
                    description: "WebDAV username",
                    label: "Webdav Username"
                },
                webdavPassword: {
                    description: "WebDAV password or app token",
                    label: "Webdav Password"
                },
                webdavDirectory: {
                    description: "Optional subdirectory on the WebDAV server",
                    label: "Webdav Directory"
                },
                webdavServerType: {
                    description: "WebDAV server type",
                    label: "Webdav Server Type",
                    nextcloud: "Nextcloud",
                    owncloud: "ownCloud",
                    generic: "Generic WebDAV"
                },
                webdavShareType: {
                    description: "WebDAV share link format",
                    label: "Webdav Share Type",
                    sharepage: "Share Page",
                    directdownload: "Direct Download",
                    markdown: "Markdown Link"
                },
                uploadAllowedFileTypes: {
                    description: "Comma-separated list of allowed file extensions (e.g. png,jpg,gif,mp4). Leave empty to allow all files.",
                    label: "Upload Allowed File Types"
                },
                settingsComponent: {
                    description: "Settings",
                    label: "Settings Component"
                }
            },
            panel: {
                fallbackOrder: "Fallback Order",
                uploadService: "Upload Service",
                zipline: "Zipline",
                serviceUrl: "Service URL",
                ziplineToken: "Zipline Token",
                folderId: "Folder ID",
                eZHost: "E-Z Host",
                eZHostApiKey: "E-Z Host API Key",
                nest: "Nest",
                nestToken: "Nest Token",
                encryptingHost: "Encrypting.host",
                encryptingHostApiKey: "Encrypting.host API Key",
                urlStyle: "URL Style",
                domainsJson: "Domains JSON",
                embedTitle: "Embed Title",
                embedColor: "Embed Color",
                fakeLink: "Fake Link",
                s3CompatibleStorage: "S3-Compatible Storage",
                s3EndpointUrl: "S3 Endpoint URL",
                bucketName: "Bucket Name",
                region: "Region",
                accessKeyId: "Access Key ID",
                secretAccessKey: "Secret Access Key",
                sessionToken: "Session Token",
                publicBaseUrl: "Public Base URL",
                objectKeyPrefix: "Object Key Prefix",
                usePathStyleEndpoint: "Use Path-Style Endpoint",
                catbox: "Catbox",
                catboxUserhash: "Catbox Userhash",
                litterboxExpiry: "Litterbox Expiry",
                gofile: "GoFile",
                gofileToken: "GoFile Token",
                pixelvault: "PixelVault",
                pixelvaultUploadKey: "PixelVault Upload Key",
                pixeldrain: "PixelDrain",
                pixeldrainApiKey: "PixelDrain API Key",
                sharexCustomUploader: "ShareX Custom Uploader",
                sharexCustomUploaderConfig: "ShareX Custom Uploader Config",
                sharexConfigActions: "ShareX Config Actions",
                webdav: "WebDAV",
                serverUrl: "Server URL",
                username: "Username",
                passwordOrAppToken: "Password or App Token",
                passwordOrAppToken2: "password or app token",
                uploadDirectory: "Upload Directory",
                serverType: "Server Type",
                shareLinkFormat: "Share Link Format",
                uploadBehavior: "Upload Behavior",
                stripQueryParameters: "Strip Query Parameters",
                useEmbedProxy: "Use Embed Proxy",
                embedProxyService: "Embed Proxy Service",
                convertApngToGif: "Convert APNG to GIF",
                preserveOriginalFilename: "Preserve Original Filename",
                autoCopyUrl: "Auto Copy URL",
                disableFallbackUploaders: "Disable Fallback Uploaders",
                insertUrlIntoChatInput: "Insert URL into Chat Input",
                formatInsertedUrl: "Format Inserted URL",
                discordIntegration: "Discord Integration",
                bypassDiscordUploadButton: "Bypass Discord Upload Button",
                autoUploadPastedFiles: "Auto Upload Pasted Files",
                respectDiscordFileSizeLimit: "Respect Discord File Size Limit",
                discordLimitOverrideMb: "Discord Limit Override (MB)",
                allowedFileTypes: "Allowed File Types",
                network: "Network",
                corsProxyUrl: "CORS Proxy URL",
                defaultCorsProxySource: "Default CORS Proxy Source",
                uploadTimeout: "Upload Timeout",
                domainsJsonDescription: "JSON array of domains to use, for example [\"offensive\"]."
            },
            status: {
                cancelled: "Upload cancelled.",
                uploadingVia: "Uploading via {{service}}...",
                uploading: "Uploading...",
                unknownError: "Unknown error",
                startingVia: "Starting upload via {{service}}...",
                retryingWith: "Retrying with {{service}} ({{attempt}}/{{total}})...",
                uploadedVia: "Uploaded successfully via {{service}}.",
                allFailed: "All upload services failed. Last error: {{error}}",
                fileReady: "File ready, starting upload...",
                preparing: "Preparing upload...",
                failed: "Upload failed: {{message}}",
                timedOut: "Upload timed out",
                serviceFailed: "{{service}} failed: {{message}}",
                preparingFile: "Preparing {{name}}{{suffix}}..."
            }
        },
        gifMaker: {
            option: {
                lastWidth: {
                    label: "Last Width"
                },
                lastHeight: {
                    label: "Last Height"
                },
                lastCaptionMode: {
                    label: "Last Caption Mode"
                },
                lastCaptionText: {
                    label: "Last Caption Text"
                },
                lastCaptionSize: {
                    label: "Last Caption Size"
                },
                lastFontFamily: {
                    label: "Last Font Family"
                },
                lastBubbleTipBase: {
                    label: "Last Bubble Tip Base"
                },
                maxWidth: {
                    description: "Maximum auto-fit width.",
                    label: "Max Width"
                },
                maxHeight: {
                    description: "Maximum auto-fit height.",
                    label: "Max Height"
                }
            },
            name: "GifMaker",
            description: "Create and caption GIFs from any media in chat or the GIF picker.",
            text: {
                send: "Send",
                export: "Export",
                makeGif: "Make GIF",
                editGif: "Edit GIF",
                selectAFont: "Select a font...",
                enterCaption: "Enter caption...",
                width: "Width",
                height: "Height",
                loadingFonts: "Loading fonts...",
                captions: "Captions",
                text: "Text",
                font: "Font",
                fontSize: "Font size",
                tipBase: "Tip Base",
                dimensions: "Dimensions",
                generatingGif: "Generating GIF...",
                clickOnThePreview: "Click on the preview to position the bubble tip",
                gifPreview: "GIF preview"
            },
            captionMode: {
                caption: "Caption",
                none: "None",
                speechbubble: "Bubble"
            }
        },
        gifProviderSwitcher: {
            name: "GifProviderSwitcher",
            description: "Allows you to use Tenor or Giphy GIF search instead of Klipy",
            text: {
                tenor: "Tenor",
                giphy: "Giphy",
                klipy: "Klipy",
                providers: "Providers",
                providersCount: "{{count}} providers"
            }
        },
        keyboardNavigation: {
            toast: {
                invalidUrl: "Invalid URL",
                copiedResponseToClipboard: "Copied response to clipboard!",
                issueFetchingUrl: "Issue fetching URL",
                copiedGitInfoTo: "Copied git info to clipboard!",
                noUpdatesAvailable: "No updates available",
                enabledPlugin: "Successfully enabled {{id}}",
                disabledPlugin: "Successfully disabled {{id}}"
            },
            text: {
                openPlexcordTab: "Open Plexcord tab",
                openPluginTab: "Open Plugin tab",
                openThemesTab: "Open Themes tab",
                openUpdaterTab: "Open Updater tab",
                openCloudTab: "Open Cloud tab",
                openBackupRestoreTab: "Open Backup & Restore tab",
                restartClient: "Restart Client",
                openQuickCssFile: "Open Quick CSS File",
                openSettingsFolder: "Open Settings Folder",
                openInGithub: "Open in Github",
                openInBrowser: "Open in Browser",
                togglePlugin: "Toggle Plugin",
                enable: "Enable",
                disable: "Disable",
                quickFetch: "Quick Fetch",
                copyGitInfo: "Copy Git Info",
                checkForUpdates: "Check for Updates",
                aPlexcordUpdateIs: "A Plexcord update is available!",
                clickHereToView: "Click here to view the update",
                navigateToServer: "Navigate to Server",
                commandPalette: "Command Palette",
                searchTheCommandPalette: "Search the Command Palette",
                multipleChoice: "Multiple Choice",
                textInput: "Text Input",
                openDevTab: "Open Dev tab",
                enterUrlToFetch: "Enter URL to fetch (GET only)",
                typeAndPressEnter: "Type and press Enter",
                recording: "Recording...",
                recordKeybind: "Record keybind",
                enterUrl: "Enter a URL"
            },
            option: {
                hotkey: {
                    description: "The hotkey to open the command palette.",
                    label: "Hotkey"
                },
                allowMouseControl: {
                    description: "Allow the mouse to control the command palette.",
                    label: "Allow Mouse Control"
                }
            },
            name: "KeyboardNavigation",
            description: "Allows you to navigate the UI with a keyboard."
        },
        lastActive: {
            name: "LastActive",
            description: "A plugin to jump to last active message from yourself or another user in a channel/server.",
            toast: {
                failedToFindMessages: "Failed to find messages. Check console for details.",
                couldnTFindAny: "Couldn't find any recent messages from this user.",
                channelInformationNotAvailable: "Channel information not available.",
                failedToJumpTo: "Failed to jump to message. Check console for details."
            },
            text: {
                yourLastMessage: "Your Last Message",
                userSLastMessage: "User's Last Message"
            }
        },
        limitlessScreenshare: {
            text: {
                deleteTag: "Delete Tag",
                mustBeGreaterThan: "Must be >{{value}}",
                maxResolutionTooLow: "Max resolution cannot be lower than {{value}}",
                maxResolutionRound: "Max resolution must end with 0 if Round Resolution is on"
            },
            name: "LimitlessScreenshare",
            description: "Adds a slider for screenshare resolution and fps.",
            option: {
                maxFPS: {
                    description: "Max FPS for the range slider",
                    label: "Max Fps"
                },
                maxResolution: {
                    description: "Max Resolution for the range slider",
                    label: "Max Resolution"
                },
                roundResolution: {
                    description: "Round resolution to the nearest 10p",
                    label: "Round Resolution"
                },
                resolutions: {
                    label: "Resolutions"
                },
                fpss: {
                    label: "Fpss"
                }
            }
        },
        messagePeek: {
            option: {
                hideMuted: {
                    description: "Hide message previews and timestamps for muted DMs and group chats.",
                    label: "Hide Muted"
                }
            },
            name: "MessagePeek",
            description: "Shows the last message preview and timestamp in the Direct Messages list.",
            text: {
                officialDiscordMessage: "Official Discord Message",
                sentGif: "sent a GIF",
                voiceMessage: "voice message",
                membersCount: "{{count}} Members",
                you: "You"
            }
        },
        messageTranslate: {
            name: "MessageTranslate",
            description: "Auto translate messages to your language with caching, per-channel toggles, and more options.",
            option: {
                targetLanguage: {
                    description: "Target language code for translations (e.g. en, es, fr, de, ja).",
                    label: "Target Language"
                },
                excludedLanguages: {
                    description: "Language codes to exclude from translation (e.g. en, es, fr, de, ja).",
                    label: "Excluded Languages"
                },
                confidenceRequirement: {
                    description: "Minimum confidence (0 to 1) required to show a translation.",
                    label: "Confidence Requirement"
                },
                autoTranslate: {
                    description: "Automatically translate messages as they appear.",
                    label: "Auto Translate"
                },
                skipOwnMessages: {
                    description: "Do not translate your own messages.",
                    label: "Skip Own Messages"
                },
                skipBotMessages: {
                    description: "Do not translate bot messages.",
                    label: "Skip Bot Messages"
                },
                ignoredGuilds: {
                    description: "Comma-separated list of server IDs to not translate in.",
                    label: "Ignored Guilds"
                },
                ignoredChannels: {
                    description: "Comma-separated list of channel IDs to not translate in.",
                    label: "Ignored Channels"
                },
                ignoredUsers: {
                    description: "Comma-separated list of user IDs to not translate.",
                    label: "Ignored Users"
                },
                showIndicator: {
                    description: "Append a small (translated) indicator to translated messages.",
                    label: "Show Indicator"
                },
                showOriginal: {
                    description: "Show the original and translated text.",
                    noorig: "Don't show original."
                }
            },
            text: {
                showOriginalInSubtext: "Show original in subtext",
                showOriginalMessageTranslation: "Show original message, translation in subtext",
                translatedFrom: "translated from {{lang}}"
            }
        },
        moreStickers: {
            toast: {
                stickerPackDeleted: "Sticker Pack deleted",
                stickerPackAdded: "Sticker Pack added",
                stickerPacksAdded: "Sticker Packs added",
                stickerPacksExported: "Sticker Packs exported",
                newStickerPacksAlready: "New sticker packs already exist, migration not needed",
                oldStickerPacksNot: "Old sticker packs not found, nothing to migrate",
                migrationFailedTitleId: "Migration failed: {{title}} ({{id}})",
                stickerPackMigrationComplete: "Sticker Pack Migration Complete",
                failedToUploadSticker: "Failed to upload sticker"
            },
            text: {
                stickerPackUrl: "Sticker Pack URL",
                pasteHtmlHere: "Paste HTML here",
                delete: "Delete",
                addStickerPackFrom: "Add Sticker Pack from URL",
                insert: "Insert",
                addStickerPackFrom2: "Add Sticker Pack from HTML",
                insertFromHtml: "Insert from HTML",
                addStickerPackFrom3: "Add Sticker Pack from File",
                miscTools: "Misc tools",
                exportStickerPacks: "Export Sticker Packs",
                migrateFromV1: "Migrate from v1",
                stickersManagement: "Stickers Management",
                theRegionLineRecognized: "The region LINE recognized may vary from the region you are in due to the CORS proxy we're using.",
                openStickerPackFile: "Open Sticker Pack File",
                stickers: "Stickers+",
                categoryTitle: "Category, {{title}}",
                searchStickers: "Search stickers",
                ffmpegstatecontextIsUndefined: "FFmpegStateContext is undefined",
                recentlyUsed: "Recently Used",
                addFromUrl: "Add from URL",
                addFromHtml: "Add from HTML",
                addFromFile: "Add from File",
                misc: "Misc",
                invalidUrl: "Invalid URL",
                lineOnly: "Currently LINE stickers/emojis supported only.",
                getTelegramStickers: "Get Telegram stickers with",
                htmlFallbackHelp: "When encountering errors while adding a sticker pack, you can try to add it using the HTML source code of the sticker pack page.",
                htmlFallbackApplies: "This applies to stickers which are region locked / OS locked / etc."
            },
            option: {
                promptToUpload: {
                    description: "Inserts the sticker into your chatbar instead of sending immediately",
                    label: "Prompt To Upload"
                },
                packs: {
                    description: "Packs",
                    label: "Packs"
                }
            },
            name: "MoreStickers",
            description: "Adds sticker packs from other social media platforms. (e.g. LINE)"
        },
        musicRichPresence: {
            option: {
                scrobblerBackend: {
                    description: "The scrobbler backend to use.",
                    label: "Scrobbler Backend"
                },
                instanceBaseURL: {
                    description: "The base url of your ListenBrainz instance.",
                    label: "Instance Base Url"
                },
                instanceAPIBaseUrl: {
                    description: "The base url of your ListenBrainz API.",
                    label: "Instance Apibase Url"
                },
                apiKey: {
                    description: "Last.fm API key. Not required but highly recommended to avoid rate limiting with our shared key",
                    label: "API Key"
                },
                username: {
                    description: "Username",
                    label: "Username"
                },
                shareUsername: {
                    description: "Show link to scrobbler profile",
                    label: "Share Username"
                },
                clickableLinks: {
                    description: "Make track, artist and album names clickable links",
                    label: "Clickable Links"
                },
                hideWithSpotify: {
                    description: "Hide presence if Spotify is running",
                    label: "Hide With Spotify"
                },
                hideWithActivity: {
                    description: "Hide presence if you have any other presence",
                    label: "Hide With Activity"
                },
                statusName: {
                    description: "Custom status text. You can use the following variables: {artist} | {album} | {title}",
                    label: "Status Name"
                },
                statusDisplayType: {
                    description: "Show the track / artist name in the member list",
                    off: "Don't show (shows generic listening message)"
                },
                nameFormat: {
                    description: "Show name of song and artist in status name",
                    statusName: "Use custom status name"
                },
                missingArt: {
                    description: "When album or album art is missing",
                    logo: "Use large scrobbler logo"
                },
                showLogo: {
                    description: "Show the scrobbler service logo by the album cover",
                    label: "Show Scrobbler Logo"
                },
                showAlbumCover: {
                    description: "Show album cover. Disabling this will display a placeholder. Useful if your music has inappropriate art",
                    label: "Show Album Cover"
                },
                useListeningStatus: {
                    description: "Show \"Listening to\" status instead of \"Playing\""
                }
            },
            name: "MusicRichPresence",
            description: "Rich Presence for Last.FM/Listenbrainz",
            text: {
                showArtistName: "Show artist name",
                showTrackName: "Show track name",
                useMusicServiceName: "Use music service name (falls back to custom status text)",
                useFormatArtistSong: "Use format 'artist - song'",
                useFormatSongArtist: "Use format 'song - artist'",
                useArtistNameOnly: "Use artist name only",
                useSongNameOnly: "Use song name only",
                useAlbumNameFalls: "Use album name (falls back to custom status text if song has no album)",
                useGenericPlaceholder: "Use generic placeholder",
                lastFm: "Last.FM",
                howToCreateAn: "How to create an API key",
                set: "Set",
                applicationName: "Application name",
                applicationDescription: "Application description",
                toAnythingAndLeave: "to anything and leave the rest blank.",
                createApiKey: "Create API Key",
                invalidInstance: "Invalid ListenBrainz compatible instance",
                provideBoth: "Provide both the",
                apiBaseUrl: "API Base URL",
                andThe: "and the",
                instanceBaseUrl: "Instance Base URL",
                forYourCustomInstance: "for your custom ListenBrainz instance or switch back to ListenBrainz/Last.FM",
                allowConnectTitle: "Allow Plexcord to connect to ListenBrainz instance",
                allowConnectBody: "To use your custom ListenBrainz instance, you must first allow Plexcord to connect to it.",
                allowInstance: "Allow Instance",
                listenBrainzCompatible: "ListenBrainz Compatible (self-hosted)",
                and: "and"
            }
        },
        noMiddleClickPaste: {
            name: "NoMiddleClickPaste",
            description: "Disable Linux middle-click paste - Linux only"
        },
        orbolayBridge: {
            option: {
                port: {
                    description: "Port to connect to",
                    label: "Port"
                }
            },
            name: "OrbolayBridge",
            description: "Bridge plugin to connect Orbolay to Discord",
            toast: {
                connectedToOrbolayServer: "Connected to Orbolay server"
            }
        },
        plexcordHelper: {
            name: "PlexcordHelper",
            description: "Used to provide support and fix discord caused crashes.",
            text: {
                restartRequired: "Restart Required",
                restartNow: "Restart Now",
                later: "Later",
                wouldYouLikeTo: "Would you like to restart now?",
                somePluginsRequireA: "Some plugins require a restart to fully disable.",
                alreadyEnabled: "{{plugin}} is already enabled",
                alreadyDisabled: "{{plugin}} is already disabled",
                disablePlugin: "Disable {{plugin}}",
                enablePlugin: "Enable {{plugin}}",
                errorStopping: "Error while stopping plugin {{plugin}}",
                errorStarting: "Error while starting plugin {{plugin}}"
            },
            toast: {
                failedToTolowercase: "Failed to {{toLowerCase}}",
                aRestartIsRequired: "A restart is required for the change to take effect!"
            },
            card: {
                notOnThisVersion: "This plugin is not on this version of Plexcord. Try updating!"
            }
        },
        plexcordTweaks: {
            name: "PlexcordTweaks",
            option: {
                removeActivitySection: {
                    description: "Removes the activity section above member list",
                    label: "Remove Activity Section"
                },
                showYourOwnActivityButtons: {
                    description: "Discord hides your own activity buttons for some reason",
                    label: "Show Your Own Activity Buttons"
                },
                refreshSlashCommands: {
                    description: "Refreshes Slash Commands to show newly added commands without restarting your client.",
                    label: "Refresh Slash Commands"
                },
                forceRoleIcon: {
                    description: "Forces role icons to display next to messages in compact mode",
                    label: "Force Role Icon"
                },
                accountStandingButton: {
                    description: "Show an account standing button in the header bar",
                    label: "Account Standing Button"
                },
                jsonGateway: {
                    description: "Forces JSON on gateway reconnect",
                    label: "Json Gateway"
                },
                enableAutoCorrect: {
                    description: "Adds a chat box context menu toggle for native autocorrection and text replacements",
                    label: "Enable Auto Correct"
                },
                autoCorrect: {
                    description: "Use native autocorrection and text replacements in message editors",
                    label: "Auto Correct"
                },
                disableHolidayNotifications: {
                    label: "Disable Holiday Notifications",
                    description: "Always use Discord's default notification sounds"
                },
                showAllBadges: {
                    label: "Show All Badges",
                    description: "Shows every profile badge instead of collapsing the rest behind +n"
                }
            },
            text: {
                allGood: "All good!",
                limited: "Limited",
                veryLimited: "Very limited",
                atRisk: "At risk",
                suspended: "Suspended",
                slashCommandsRefreshedSuccessfully: "Slash Commands refreshed successfully.",
                failedToRefreshCommands: "Failed to refresh commands. Check console for details.",
                enableAutocorrect: "Enable Autocorrect"
            },
            command: {
                refreshCommands: "Refresh Slash Commands"
            },
            description: "A collection of small tweaks and fixes for Discord."
        },
        plextronStreamFixes: {
            option: {
                unlockQualityOptions: {
                    description: "Unlock stream quality options regardless of Nitro status",
                    label: "Unlock Quality Options"
                },
                removeResolutionCap: {
                    description: "Allow resolutions above 720p at 60fps",
                    label: "Remove Resolution Cap"
                },
                forceEncoderSettings: {
                    description: "Force encoder to use configured resolution/fps",
                    label: "Force Encoder Settings"
                },
                preventDownscale: {
                    description: "Prevent Discord from downscaling stream resolution",
                    label: "Prevent Downscale"
                },
                keyframeInterval: {
                    description: "Keyframe interval in ms (0 = encoder default, 5000 = every 5s)",
                    label: "Keyframe Interval"
                },
                minBitrate: {
                    description: "Minimum encoder bitrate in kbps",
                    label: "Min Bitrate"
                },
                raiseBitrateCaps: {
                    description: "Raise default desktop bitrate caps (600kbps target → 10Mbps, 3.5Mbps max → 40Mbps)",
                    label: "Raise Bitrate Caps"
                },
                preventFramerateReduction: {
                    description: "Prevent Discord from reducing stream framerate when not speaking",
                    label: "Prevent Framerate Reduction"
                },
                bitsPerPixelPct: {
                    description: "Bits per pixel percentage for target bitrate (8 = 0.08 bpp, 12 = 0.12bpp)",
                    label: "Bits Per Pixel Pct"
                }
            },
            name: "PlextronStreamFixes",
            description: "Tries to fix stream quality on Plextron by patching Discord's encoder and quality restrictions."
        },
        rPCEditor: {
            name: "RPCEditor"
        },
        reactionTimestamps: {
            name: "ReactionTimestamps",
            description: "Shows each reaction time in the reaction popout.",
            text: {
                userAtTime: "{{user}} at {{time}}"
            }
        },
        richPresence: {
            text: {
                useCustomStatusName: "Use custom status name",
                useFormatArtistSong: "Use format 'artist - song'",
                useFormatSongArtist: "Use format 'song - artist'",
                useArtistNameOnly: "Use artist name only",
                useSongNameOnly: "Use song name only",
                useAlbumName: "Use album name",
                useLargeStatsFm: "Use large Stats.fm logo",
                useGenericPlaceholder: "Use generic placeholder",
                seriesMovieName: "Series/Movie Name",
                seriesEpisodeTrackMovie: "Series - Episode/Track/Movie Name",
                custom: "Custom",
                seriesCover: "Series Cover",
                episodeCover: "Episode Cover",
                season1Episode1: "Season 1 Episode 1",
                off: "Off",
                listening: "Listening",
                playing: "Playing",
                streaming: "Streaming",
                watching: "Watching",
                none: "None",
                navidromeInstanceExposesServer: "Navidrome Instance (Exposes Server URL. One-time auth sent.)",
                lastFmApiSends: "Last.fm API (Sends Metadata to last.fm)",
                donTShowShows: "Don't show (shows generic listening message)",
                showStateLineContent: "Show state line content",
                showDetailsLineContent: "Show details line content",
                displayYourCurrentlyPlaying: "Display your currently playing audiobooks as Discord Rich Presence. Requires your AudioBookShelf server URL, username, and password.",
                audiobookshelfServerUrl: "AudioBookShelf server URL.",
                audiobookshelfUsername: "AudioBookShelf username.",
                audiobookshelfPassword: "AudioBookShelf password.",
                connectsToTosuVia: "Connects to tosu via WebSocket on port 24050. No configuration needed, just make sure tosu is running alongside osu!.",
                showWhatYouRe: "Show what you're currently listening to via stats.fm. Requires your listening history to be public.",
                statsFmUsername: "Stats.fm username.",
                customStatusText: "Custom status text.",
                statsFm: "Stats.fm",
                nameFormat: "Name format.",
                fallbackWhenArtIs: "Fallback when art is missing.",
                showListeningStatus: "Show listening status.",
                showStatsFmLogo: "Show Stats.fm logo next to album art.",
                showLinkToStats: "Show link to stats.fm profile.",
                showLinkToSong: "Show link to song on stats.fm.",
                hideStatsFmPresence: "Hide stats.fm presence if Spotify is running.",
                hideStatsFmPresence2: "Hide stats.fm presence if an external RPC is running.",
                disableDownloadingAlbumArt: "Disable downloading album art.",
                showWhatYouRe2: "Show what you're playing on Jellyfin. To get your API key: open your Jellyfin web UI, press F12 to open Developer Tools, go to the Network tab, look for requests to your server, find the Authorization header (Ctrl+F to search), and You need the part from Token='this'. Your user ID can be found in your profile page URL.",
                jellyfinServerUrl: "Jellyfin server URL.",
                jellyfinApiKey: "Jellyfin API key.",
                authorization: "Authorization",
                jellyfinUserId: "Jellyfin user ID.",
                userIdFromProfile: "User ID from profile URL",
                nameDisplayFormat: "Name display format.",
                customNameTemplate: "Custom name template.",
                nameOnJellyfin: "{name} on Jellyfin",
                coverTypeForTv: "Cover type for TV shows.",
                episodeNumberFormat: "Episode number format.",
                overrideRichPresenceType: "Override rich presence type.",
                showEpisodeNameAfter: "Show episode name after season/episode info.",
                showPresenceWhenMedia: "Show presence when media is paused.",
                hideMediaDetails: "Hide media details.",
                discordRichPresenceFor: "Discord rich presence for Gensokyo Radio. Just enable it and listen!",
                refreshIntervalInSeconds: "Refresh interval in seconds.",
                showWhatYouRe3: "Show what you're currently listening to via Navidrome.",
                navidromeServerUrlMust: "Navidrome Server URL (must be a public domain, e.g. https://navidrome.example.com).",
                navidromeUsername: "Navidrome username.",
                navidromePassword: "Navidrome password.",
                optionalDiscordApplicationClient: "Optional Discord Application Client ID.",
                howToFetchAlbum: "How to fetch album art.",
                optionalProvideYourOwn: "Optional: Provide your own Last.fm API Key (leaves default if empty).",
                showNavidromeLogoIn: "Show Navidrome logo in bottom right of album art.",
                showAlbumNameIn: "Show album name in presence.",
                whichTypeOfActivity: "Which type of activity to display.",
                showTheStateDetails: "Show the state / details line contents in the member list",
                hideRichPresenceWhen: "Hide Rich Presence when music is paused (instead of showing a stopwatch)",
                theListeningToText: "The 'Listening to' text (e.g. {artist})",
                navidrome: "Navidrome",
                theMainLineShowing: "The main line showing what song is playing (e.g. {song})",
                song: "{song}",
                theLineBelowThe: "The line below the song name (e.g. {artist})",
                artist: "{artist}",
                theAlbumLineE: "The album line (e.g. {album})",
                album: "{album}",
                enableTabLabelsCurrenttab: "Enable {{TAB_LABELS_currentTab}} presence.",
                statsFmProfile: "Stats.fm Profile",
                viewSong: "View Song",
                showArtistName: "Show artist name",
                showTrackName: "Show track name",
                enterValue: "Enter a value"
            },
            name: "RichPresence",
            description: "Unified rich presence hub for AudioBookShelf, osu!, stats.fm, Jellyfin, Navidrome, and Gensokyo Radio.",
            toast: {
                audiobookshelfRpcIsNot: "AudioBookShelf RPC is not configured.",
                jellyfinRpcIsNot: "Jellyfin RPC is not configured.",
                jellyfinReturnedAnInvalid: "Jellyfin returned an invalid response. Your API key may be wrong."
            },
            option: {
                enabled: {
                    description: "Enable rich presence services.",
                    label: "Enabled"
                },
                serviceSettings: {
                    description: "Service configuration.",
                    label: "Service Settings"
                },
                abs_enabled: {
                    description: "Enable AudioBookShelf presence.",
                    label: "Abs Enabled"
                },
                tosu_enabled: {
                    description: "Enable osu! (tosu) presence.",
                    label: "Tosu Enabled"
                },
                sfm_enabled: {
                    description: "Enable stats.fm presence.",
                    label: "Sfm Enabled"
                },
                jf_enabled: {
                    description: "Enable Jellyfin presence.",
                    label: "Jf Enabled"
                },
                gr_enabled: {
                    description: "Enable Gensokyo Radio presence.",
                    label: "Gr Enabled"
                },
                nd_enabled: {
                    description: "Enable Navidrome presence.",
                    label: "Nd Enabled"
                },
                abs_serverUrl: {
                    description: "AudioBookShelf server URL.",
                    label: "Abs Server Url"
                },
                abs_username: {
                    description: "AudioBookShelf username.",
                    label: "Abs Username"
                },
                abs_password: {
                    description: "AudioBookShelf password.",
                    label: "Abs Password"
                },
                sfm_username: {
                    description: "Stats.fm username.",
                    label: "Sfm Username"
                },
                sfm_shareUsername: {
                    description: "Show link to stats.fm profile.",
                    label: "Sfm Share Username"
                },
                sfm_shareSong: {
                    description: "Show link to song on stats.fm.",
                    label: "Sfm Share Song"
                },
                sfm_hideWithSpotify: {
                    description: "Hide stats.fm presence if Spotify is running.",
                    label: "Sfm Hide With Spotify"
                },
                sfm_hideWithExternalRPC: {
                    description: "Hide stats.fm presence if an external RPC is running.",
                    label: "Sfm Hide With External Rpc"
                },
                sfm_statusName: {
                    description: "Custom status text.",
                    label: "Sfm Status Name"
                },
                sfm_nameFormat: {
                    description: "Name format.",
                    label: "Sfm Name Format",
                    statusName: "Use custom status name",
                    artistFirst: "Use format 'artist - song'",
                    songFirst: "Use format 'song - artist'",
                    artistOnly: "Use artist name only",
                    songOnly: "Use song name only",
                    albumName: "Use album name"
                },
                sfm_useListeningStatus: {
                    description: "Show listening status.",
                    label: "Sfm Use Listening Status"
                },
                sfm_missingArt: {
                    description: "Fallback when art is missing.",
                    label: "Sfm Missing Art",
                    statsFmLogo: "Use large Stats.fm logo",
                    placeholder: "Use generic placeholder"
                },
                sfm_showLogo: {
                    description: "Show Stats.fm logo next to album art.",
                    label: "Sfm Show Logo"
                },
                sfm_alwaysHideArt: {
                    description: "Disable downloading album art.",
                    label: "Sfm Always Hide Art"
                },
                jf_serverUrl: {
                    description: "Jellyfin server URL.",
                    label: "Jf Server Url"
                },
                jf_apiKey: {
                    description: "Jellyfin API key.",
                    label: "Jf Api Key"
                },
                jf_userId: {
                    description: "Jellyfin user ID.",
                    label: "Jf User Id"
                },
                jf_nameDisplay: {
                    description: "Name display format.",
                    label: "Jf Name Display",
                    default: "Series/Movie Name",
                    full: "Series - Episode/Track/Movie Name",
                    custom: "Custom"
                },
                jf_customName: {
                    description: "Custom name template.",
                    label: "Jf Custom Name"
                },
                jf_coverType: {
                    description: "Cover type for TV shows.",
                    label: "Jf Cover Type",
                    series: "Series Cover",
                    episode: "Episode Cover"
                },
                jf_episodeFormat: {
                    description: "Episode number format.",
                    label: "Jf Episode Format",
                    long: "S01E01",
                    fulltext: "Season 1 Episode 1"
                },
                jf_showEpisodeName: {
                    description: "Show episode name after season/episode info.",
                    label: "Jf Show Episode Name"
                },
                jf_overrideType: {
                    description: "Override rich presence type.",
                    label: "Jf Override Type",
                    off: "Off",
                    listening: "Listening",
                    playing: "Playing",
                    streaming: "Streaming",
                    watching: "Watching"
                },
                jf_showPausedState: {
                    description: "Show presence when media is paused.",
                    label: "Jf Show Paused State"
                },
                jf_privacyMode: {
                    description: "Hide media details.",
                    label: "Jf Privacy Mode"
                },
                gr_refreshInterval: {
                    description: "Refresh interval in seconds.",
                    label: "Gr Refresh Interval"
                },
                nd_serverUrl: {
                    description: "Navidrome Server URL (e.g. https://navidrome.example.com)",
                    label: "Nd Server Url"
                },
                nd_username: {
                    description: "Navidrome Username",
                    label: "Nd Username"
                },
                nd_password: {
                    description: "Navidrome Password",
                    label: "Nd Password"
                },
                nd_clientId: {
                    description: "Optional Discord Application Client ID",
                    label: "Nd Client Id"
                },
                nd_showSmallImage: {
                    description: "Show Navidrome logo in bottom right of album art.",
                    label: "Nd Show Small Image"
                },
                nd_showAlbum: {
                    description: "Show album name in presence.",
                    label: "Nd Show Album"
                },
                nd_albumArtMode: {
                    description: "How to fetch album art.",
                    label: "Nd Album Art Mode",
                    none: "None",
                    instance: "Navidrome Instance (Exposes Server URL to Discord, no auth sent)",
                    lastfm: "Last.fm API (Sends track metadata to Last.fm)"
                },
                nd_lastfmApiKey: {
                    description: "Optional Last.fm API Key",
                    label: "Nd Lastfm Api Key"
                },
                nd_refreshInterval: {
                    description: "Refresh interval in seconds.",
                    label: "Nd Refresh Interval"
                },
                nd_activityType: {
                    description: "Which type of activity",
                    label: "Nd Activity Type",
                    listening: "Listening",
                    playingFixesHiddenLines: "Playing (Fixes hidden lines)",
                    watching: "Watching"
                },
                nd_nameString: {
                    description: "Activity name format string",
                    label: "Nd Name String"
                },
                nd_detailsString: {
                    description: "Activity details format string",
                    label: "Nd Details String"
                },
                nd_stateString: {
                    description: "Activity state format string",
                    label: "Nd State String"
                },
                nd_largeTextString: {
                    description: "Activity large text format string",
                    label: "Nd Large Text String"
                },
                nd_statusDisplayType: {
                    description: "Show the track / artist name in the member list",
                    off: "Don't show (shows generic listening message)"
                },
                nd_hideOnPause: {
                    description: "Hide Rich Presence when music is paused",
                    label: "Nd Hide On Pause"
                }
            },
            panel: {
                password: "Password",
                statsFmUsername: "stats.fm username",
                customStatusText: "Custom Status Text",
                nameFormat: "Name Format",
                missingArtFallback: "Missing Art Fallback",
                showListeningStatus: "Show Listening Status",
                showStatsFmLogo: "Show Stats.fm Logo",
                showProfileLink: "Show Profile Link",
                showSongLink: "Show Song Link",
                hideWithSpotify: "Hide With Spotify",
                hideWithExternalRpc: "Hide With External RPC",
                disableAlbumArt: "Disable Album Art",
                apiKey: "API Key",
                userId: "User ID",
                nameDisplay: "Name Display",
                customNameTemplate: "Custom Name Template",
                coverType: "Cover Type",
                episodeFormat: "Episode Format",
                overridePresenceType: "Override Presence Type",
                showEpisodeName: "Show Episode Name",
                showWhenPaused: "Show When Paused",
                privacyMode: "Privacy Mode",
                refreshInterval: "Refresh Interval",
                clientId: "Client ID",
                albumArtMode: "Album Art Mode",
                lastFmApiKey: "Last.fm API Key",
                showSmallImage: "Show Small Image",
                showAlbum: "Show Album",
                activityType: "Activity Type",
                statusDisplayType: "Status Display Type",
                hideOnPause: "Hide On Pause",
                activityNameFormat: "Activity Name Format",
                detailsFormat: "Details Format",
                stateFormat: "State Format",
                largeTextFormat: "Large Text Format",
                enabled: "Enabled"
            }
        },
        sedEnhanced: {
            option: {
                regexByDefault: {
                    description: "Inverts the `r` flag, so using the `r` flag enables non-regex mode, and omitting it uses regex mode.",
                    label: "Regex By Default"
                }
            },
            name: "SedEnhanced",
            description: "Expands on Discord's rudimentary `sed` support."
        },
        showRolesInChat: {
            option: {
                showBots: {
                    description: "Whether to show the highest role on bots.",
                    label: "Show Bots"
                },
                useRoleColor: {
                    description: "Use the role's color for the icon.",
                    label: "Use Role Color"
                }
            },
            name: "ShowRolesInChat",
            description: "Shows a user's highest role next to their name in chat messages. Hide/show specific roles in their context menu (right-click).",
            text: {
                chatRoleActions: "Chat Role Actions",
                unhideRolesInChat: "Unhide Roles in Chat",
                showRoleInChat: "Show Role in Chat",
                hideRoleInChat: "Hide Role in Chat"
            }
        },
        silenceUsers: {
            option: {
                mutedUserIds: {
                    description: "Comma-separated Discord user IDs to silence pings and server badges.",
                    label: "Muted User Ids"
                }
            },
            name: "SilenceUsers",
            description: "Silences @mention pings and server badge counts from specific users. Regular messages and DMs are untouched."
        },
        songLink: {
            text: {
                showIfAvailable: "Show if available",
                openInDesktopApp: "Open in desktop app",
                loadingSongLink: "Loading song link...",
                pleaseProvideAMusic: "Please provide a music link.",
                thisWillTakeA: "This will take a moment...",
                noAlternativePlatformsFound: "No alternative platforms found for this link.",
                failedToResolveMusic: "Failed to resolve music link",
                logo: "{{name}} logo"
            },
            option: {
                servicesSettings: {
                    description: "settings for services",
                    label: "Services Settings"
                },
                userCountry: {
                    description: "Country used for lookup (Two letter country code)",
                    label: "User Country"
                },
                includeMetadata: {
                    description: "Include the track title and artist name as a header.",
                    label: "Include Metadata"
                }
            },
            name: "SongLink",
            description: "Adds streaming service buttons below song links",
            command: {
                musiclink: "Convert a music link to other streaming platforms.",
                url: "Music link (Spotify, Deezer, YouTube, Tidal, Apple Music, SoundCloud)"
            }
        },
        songSpotlight: {
            name: "SongSpotlight",
            description: "Show off songs on your profile",
            text: {
                songSpotlight: "Song Spotlight",
                explicit: "Explicit",
                addSong: "Add song",
                addANewSong: "Add a new song",
                copyLink: "Copy link",
                removeSong: "Remove song",
                failedToLoad: "Failed to load!",
                areYouSure: "Are you sure?",
                thisWillOverwriteYour: "This will overwrite your current songs.",
                continue: "Continue",
                nevermind: "Nevermind",
                thisWillPermanentlyDelete: "This will permanently delete all of your songs.",
                delete: "Delete",
                signInToSong: "Sign in to Song Spotlight",
                songs: "Songs",
                authorization: "Authorization",
                importFromClipboard: "Import from clipboard",
                copyToClipboard: "Copy to clipboard",
                signOut: "Sign out",
                deleteSongs: "Delete songs",
                more: "More",
                editSongs: "Edit songs",
                copyJson: "Copy JSON",
                looksLikeThereS: "Looks like there's nothing here!",
                uhOhSongSpotlight: "Uh oh! Song Spotlight failed to load. You can check the console for more details.",
                stealSong: "Steal song",
                profileSongs: "Profile songs",
                notEnoughSpace: "Not enough space",
                alreadyAdded: "You've already added this song",
                invalidLink: "Invalid link",
                failedToParseLink: "Failed to parse link",
                invalidUrl: "Invalid URL",
                goAddSongs: "Well? What are you waiting for? Go add some songs to your Song Spotlight!",
                tellUserToAddSongs: "Tell {{name}} to add some songs to their Song Spotlight!",
                supportedServices: "Song Spotlight supports these services:",
                viewSongsVia: "You can also view your songs via the",
                viewSongsViaSuffix: "command!",
                coverTooltipOwner: "{{label}}'s {{sublabel}}",
                coverTooltipBy: "{{label}} by {{sublabel}}",
                lastUpdated: "Last updated",
                save: "Save",
                showMore: "Show {{count}} more"
            },
            toast: {
                youHaveBeenSigned: "You have been signed out from Song Spotlight. Please sign in again.",
                songSpotlightError: "Song Spotlight: {{error}}",
                successfullyAuthorized: "Successfully authorized!",
                failedToPlaySong: "Failed to play song preview!",
                addedSong: "Added song!",
                removedSong: "Removed song!",
                noJsonInClipboard: "No JSON in clipboard!",
                invalidSongSpotlightData: "Invalid Song Spotlight data in clipboard!",
                oneOrMoreImported: "One or more imported songs were invalid.",
                importedSongsFromClipboard: "Imported songs from clipboard!",
                successfullySavedSongs: "Successfully saved songs!",
                successfullySignedOut: "Successfully signed out!",
                successfullyDeletedSongs: "Successfully deleted songs!",
                youDonTHave: "You don't have enough space!",
                uhOhThisSong: "Uh oh, this song doesn't exist!",
                youAlreadyHaveThis: "You already have this song added!",
                youDonTHave2: "You... don't have this song added?",
                fetchError: "Song Spotlight fetch error at {{path}}"
            },
            option: {
                collapseSongList: {
                    description: "Collapses the song list on user profiles to a button which opens a separate menu",
                    label: "Collapse Song List"
                },
                profileSongsLimit: {
                    description: "How many songs are shown when initially clicking on a user",
                    label: "Profile Songs Limit"
                },
                previewVolume: {
                    description: "Volume of song previews when played",
                    label: "Preview Volume"
                }
            }
        },
        stopAutoUnread: {
            name: "StopAutoUnread",
            description: "Stops Discord from automatically bumping a channel's notification setting to \"All Messages\""
        },
        themeLibrary: {
            text: {
                enablePlugin: "Enable Plugin",
                cancel: "Cancel",
                holdOn: "Hold on!",
                thisThemeRequiresThe: "This theme requires the",
                pluginToWorkProperly: "plugin to work properly!",
                doYouWantTo: "Do you want to enable it?",
                themeInfo: "Theme Info",
                viewSource: "View Source",
                close: "Close",
                download: "Download",
                overwrite: "Overwrite",
                keepMyFile: "Keep my file",
                copyToClipboard: "Copy to Clipboard",
                conflict: "Conflict!",
                themeSource: "Theme Source",
                aThemeWithThe: "A theme with the same name",
                alreadyExists: "already exists",
                inYourThemesDirectory: "in your themes directory! Do you want to overwrite it?",
                version: "Version",
                likes: "Likes",
                donate: "Donate",
                supportServer: "Support Server",
                source: "Source",
                tags: "Tags",
                youCanSupportThe: "You can support the author by donating below!",
                joinDiscordServer: "Join Discord Server",
                viewThemeSource: "View Theme Source",
                showAll: "Show All",
                showThemes: "Show Themes",
                showSnippets: "Show Snippets",
                showMostLiked: "Show Most Liked",
                showDark: "Show Dark",
                showLight: "Show Light",
                showEnabled: "Show Enabled",
                showDisabled: "Show Disabled",
                searchForATheme: "Search for a theme...",
                gettingTheLatestThemes: "Getting the latest themes...",
                thisWonTTake: "This won't take long!",
                failedToFetchThemes: "Failed to fetch themes",
                couldNotFetchThe: "Could not fetch the theme list. Try again later.",
                wantYourThemeRemoved: "Want your theme removed?",
                hide: "Hide",
                noThemeFound: "No theme found.",
                tryNarrowingYourSearch: "Try narrowing your search down.",
                themeLibrary: "Theme Library",
                successfullyAuthorizedWithThemelibrary: "Successfully authorized with ThemeLibrary!",
                failedToAuthorizeCheck: "Failed to authorize, check console",
                successfullyDeauthorizedFromThemelibrary: "Successfully deauthorized from ThemeLibrary!",
                failedToDeauthorizeCheck: "Failed to deauthorize, check console",
                themelibraryAuth: "ThemeLibrary Auth",
                themeRemoval: "Theme Removal",
                allThemeAuthorsAre: "All Theme Authors are given credit in the theme info, no source has been modified, if you wish your theme to be removed anyway, open an Issue by clicking below.",
                authorizeWithThemelibrary: "Authorize with ThemeLibrary",
                copyThemelibraryToken: "Copy ThemeLibrary Token",
                deauthorizeThemelibrary: "Deauthorize ThemeLibrary",
                themeDetails: "{{name}} details",
                mostLiked: "Most Liked",
                newestAdditions: "Newest Additions",
                removeTheme: "Remove Theme",
                addTheme: "Add Theme",
                authors: "Authors",
                author: "Author",
                nobodyLikedTheme: "Nobody liked this theme yet.",
                nobodyLikedSnippet: "Nobody liked this snippet yet.",
                usersLikedTheme: "{{likes}} users liked this theme!",
                usersLikedSnippet: "{{likes}} users liked this snippet!",
                openThemeLibrary: "Open Theme Library",
                lastUpdated: "This theme was last updated",
                removalInfo: "If you want your theme(s) permanently removed, please open an issue on",
                themes: "Themes",
                requestRemoval: "Request Theme Removal",
                pluginSuffix: "plugin!"
            },
            toast: {
                downloadedName: "Downloaded {{name}}!",
                failedToDownloadName: "Failed to download {{name}}! (check console)",
                invalidOrExpiredInvite: "Invalid or expired invite!",
                copiedToClipboard: "Copied to Clipboard",
                noUniquetokenPresentTry: "No uniqueToken present, try authorizing first!",
                noTokenToCopy: "No token to copy, try authorizing first!",
                copiedToClipboard2: "Copied to Clipboard!"
            },
            name: "ThemeLibrary",
            description: "A library of themes for Plexcord.",
            option: {
                hideWarningCard: {
                    description: "Hide the warning card displayed at the top of the theme library tab",
                    label: "Hide Warning Card"
                },
                buttons: {
                    description: "ThemeLibrary Buttons",
                    label: "Buttons"
                }
            }
        },
        translatePlus: {
            name: "Translate+",
            description: "Plexcord's translate plugin but with support for artistic languages!",
            text: {
                translate: "Translate",
                dismiss: "Dismiss",
                translationFailedDueTo: "Translation failed due to an error.",
                translatedFrom: "translated from {{lang}}"
            },
            option: {
                target: {
                    description: "Target language",
                    label: "Target"
                },
                toki: {
                    description: "Enable Toki Pona",
                    label: "Toki"
                },
                sitelen: {
                    description: "Enable Sitelen Pona",
                    label: "Sitelen"
                },
                shavian: {
                    description: "Enable Shavian",
                    label: "Shavian"
                }
            }
        },
        triviaAI: {
            name: "TriviaAI",
            description: "A plugin that helps you answer trivia questions using AI.",
            text: {
                answerWithAi: "Answer With AI",
                enterApiKeyHere: "Enter API Key here for your AI endpoint.",
                enterSystemPrompt: "Enter system prompt.",
                enterYourOpenaiCompatible: "Enter your OpenAI compatible AI endpoint here.",
                status: "Status {{status}}"
            },
            option: {
                apiKey: {
                    description: "API Key.",
                    label: "Api Key"
                },
                model: {
                    description: "AI Model to use.",
                    label: "Model",
                    placeholder: "e.g. google/gemini-3-flash-preview, inception/mercury, openai/gpt-5.2-chat, etc."
                },
                systemPrompt: {
                    description: "System Prompt for the AI. Placeholders: {current_user}, {current_time}",
                    label: "System Prompt"
                },
                maxTokens: {
                    description: "Maximum number of tokens in the response.",
                    label: "Max Tokens"
                },
                endpoint: {
                    description: "OpenAI Compatible AI Endpoint.",
                    label: "Endpoint"
                },
                context: {
                    description: "Number of previous messages to include as context.",
                    label: "Context"
                },
                passMessageAuthorName: {
                    description: "Prepend the author's name to the message content when passing it to the AI. This can help the AI distinguish between different users in a conversation.",
                    label: "Pass Message Author Name"
                },
                treatSelfAsAssistant: {
                    description: "When enabled, your own messages will be treated as assistant messages in the context. This causes some models to start generating fanfic.",
                    label: "Treat Self As Assistant"
                },
                mode: {
                    description: "How should answers be handled?",
                    label: "Mode",
                    autoreply: "Auto Reply",
                    chatbar: "Replace Chatbar Text",
                    bot: "Clyde"
                },
                supportImages: {
                    description: "Pass images to the AI for context (if any). This is not supported by all models.",
                    label: "Support Images"
                },
                sendImagesAsBase64: {
                    description: "Send images to the AI as base64.",
                    label: "Send Images As Base64"
                }
            },
            toast: {
                triviaaiApiSettingsAre: "TriviaAI: API settings are incomplete.",
                errorGettingResponseFrom: "Error getting response from AI model"
            }
        },
        unreadCountBadge: {
            option: {
                showOnMutedChannels: {
                    description: "Show unread count on muted channels",
                    label: "Show On Muted Channels"
                },
                notificationCountLimit: {
                    description: "Show +99 instead of true amount",
                    label: "Notification Count Limit"
                }
            },
            name: "UnreadCountBadge",
            description: "Shows unread message count badges on channels in the channel list"
        },
        userPFP: {
            toast: {
                gifsWebpMustBe: "GIFs/WebP must be added via URL. Upload your GIF/WebP to a image hosting service and paste the link."
            },
            text: {
                save: "Save",
                delete: "Delete",
                customAvatar: "Custom Avatar",
                original: "Original",
                local: "Local",
                enterPngGifUrl: "Enter PNG/GIF URL",
                setAvatar: "Set Avatar",
                usingTheSetAvatar: "Using the set avatar feature is local only meaning only you see it change.",
                joinUserpfpServer: "Join UserPFP Server",
                dropHere: "Drop here!",
                dragOrClick: "⬆ Drag an image or click to upload (for GIFs or WebP use a URL instead)",
                uploadedFile: "(uploaded file)",
                supportHere: "Support UserPFP here"
            },
            option: {
                overrideServerAvatars: {
                    description: "Override server avatars with custom avatars or the default user avatar if no custom avatar is set.",
                    label: "Override Server Avatars"
                },
                preferNitro: {
                    description: "Which avatar to use if both default animated (Nitro) pfp and UserPFP avatars are present",
                    label: "Prefer Nitro",
                    false: "UserPFP",
                    true: "Nitro"
                },
                databaseSource: {
                    description: "URL to load database from",
                    label: "Database Source"
                }
            },
            name: "UserPFP",
            description: "Allows you to set local static or animated avatars for yourself and other users"
        },
        userpluginInstaller: {
            toast: {
                restartToApplyChanges: "Restart to apply changes!"
            },
            text: {
                installError: "Install error",
                done: "Done!",
                later: "Later",
                updateError: "Update error",
                checkingForUpdates: "Checking for updates...",
                loadingPlugins: "Loading plugins...",
                pluginUpdatesAvailable: "Plugin Updates Available",
                theFollowingPluginsAre: "The following plugins are out-of-date:",
                youCanUpdatePlugins: "You can update plugins below.",
                installPlugin: "Install Plugin",
                userplugininstallerNotFullyLoaded: "UserpluginInstaller not fully loaded",
                youNeedToRestart: "You need to restart to allow the native to be loaded :)",
                restartNow: "Restart now",
                someUserpluginsAreOut: "Some UserPlugins are out of date!",
                clickToOpenThe: "Click to open the UserPlugin Updater",
                plexcordDoesNotModerate: "Plexcord does not moderate userplugins and takes no responsibility for anything that may result from installing them.",
                onlyInstallUserpluginsFrom: "Only install userplugins from developers you trust. Doing so is entirely at your own risk.",
                setGitPath: "Set Git path",
                installHint: "You can install a plugin from GitHub, GitLab, Codeberg, git.nin0.dev, or plugins.nin0.dev by pasting its clone URL here.",
                enableAndRestart: "Enable & restart",
                enableAndRefresh: "Enable & refresh",
                tabCounts: "({{total}}, {{enabled}} enabled)",
                possiblyMore: "and possibly more, as update checking is not finished. ",
                alreadyInstalled: "Plugin already installed, update below",
                invalidUrl: "Invalid URL, read the notice above",
                install: "Install",
                restart: "Restart",
                refresh: "Refresh",
                update: "Update",
                source: "Source",
                support: "Support",
                managePlugins: "Manage plugins",
                uninstalledRestart: "{{name}} has been uninstalled. A restart is needed to fully remove the plugin.",
                uninstalledRefresh: "{{name}} has been uninstalled. A refresh is needed to fully remove the plugin.",
                updatedRestart: "{{name}} has been updated. A restart is needed to apply the update.",
                updatedRefresh: "{{name}} has been updated. A refresh is needed to apply the update.",
                installedBody: "{{name}} has been successfully installed. What now?",
                installedNativeBody: "{{name}} has been successfully installed. However, as it makes use of native functions, a client restart is required. What now?"
            },
            option: {
                allowlistedChannels: {
                    description: "Comma separated list of channels where the Install Plugin button should be displayed. It is always displayed in the Plexcord Userplugin channels",
                    label: "Allowlisted Channels"
                },
                notifyIfUpdate: {
                    description: "Show a Plexcord notification if UserPlugins need to be updated",
                    label: "Notify If Update"
                },
                neverNotifyForPlugins: {
                    description: "Never show update notifications for these plugins (you can still update them from the UserPlugins tab)",
                    label: "Never Notify For Plugins"
                }
            },
            name: "UserpluginInstaller",
            description: "Install userplugins with a simple button click"
        },
        vCPanelSettings: {
            option: {
                title1: {
                    label: "Title1"
                },
                uncollapseSettingsByDefault: {
                    description: "Automatically uncollapse voice settings by default",
                    label: "Uncollapse Settings By Default"
                },
                title2: {
                    label: "Title2"
                },
                outputVolume: {
                    description: "Show an output volume slider",
                    label: "Output Volume"
                },
                inputVolume: {
                    description: "Show an input volume slider",
                    label: "Input Volume"
                },
                outputDevice: {
                    description: "Show an output device selector",
                    label: "Output Device"
                },
                inputDevice: {
                    description: "Show an input device selector",
                    label: "Input Device"
                },
                camera: {
                    description: "Show a camera selector",
                    label: "Camera"
                },
                title3: {
                    label: "Title3"
                },
                showOutputVolumeHeader: {
                    description: "Show header above output volume slider",
                    label: "Show Output Volume Header"
                },
                showInputVolumeHeader: {
                    description: "Show header above input volume slider",
                    label: "Show Input Volume Header"
                },
                showOutputDeviceHeader: {
                    description: "Show header above output device selector",
                    label: "Show Output Device Header"
                },
                showInputDeviceHeader: {
                    description: "Show header above input device selector",
                    label: "Show Input Device Header"
                },
                showVideoDeviceHeader: {
                    description: "Show header above camera selector",
                    label: "Show Video Device Header"
                }
            },
            name: "VCPanelSettings",
            description: "Control voice settings right from the voice panel",
            text: {
                appearance: "Appearance",
                settingsToShow: "Settings to show",
                headersToShow: "Headers to show",
                outputVolume: "Output volume",
                inputVolume: "Input volume",
                outputDevice: "Output device",
                inputDevice: "Input device",
                settings: "Settings",
                hide: "Hide"
            }
        },
        voiceMessageTranscriber: {
            text: {
                autoDetect: "Auto Detect",
                start: "Start",
                transcriptionOptions: "Transcription Options",
                audioLanguage: "Audio Language",
                retry: "Retry",
                transcriptionFailed: "Transcription Failed",
                transcribeVoiceMessage: "Transcribe Voice Message",
                close: "Close",
                baseRecommended: "Base (Recommended)",
                small: "Small",
                largeV3TurboBest: "Large v3 Turbo (Best accuracy, GPU recommended)",
                transcribe: "Transcribe",
                translateToEnglish: "Translate to English",
                voiceMessageTranslation: "Voice Message Translation",
                voiceMessageTranscription: "Voice Message Transcription",
                hideTimestamps: "Hide Timestamps",
                showTimestamps: "Show Timestamps",
                copied: "Copied!",
                copyText: "Copy Text",
                downloadingAudio: "Downloading Audio...",
                processingAudio: "Processing Audio...",
                loadingModel: "Loading Model...",
                transcribing: "Transcribing...",
                transcription: "Transcription",
                transcriptionError: "Transcription Error",
                transcribingInProgress: "Transcribing in progress...",
                initializing: "Initializing...",
                workerCrashed: "Transcription worker crashed",
                workerStopped: "Transcription worker was stopped",
                deleteCache: "Delete all cached files ({{size}} MB)",
                action: "Action"
            },
            name: "VoiceMessageTranscriber",
            description: "On-device transcriptions for voice messages powered by Whisper",
            option: {
                embed: {
                    description: "Display transcription directly in the voice message attachment instead of a modal.",
                    label: "Embed"
                },
                maintainHorizontal: {
                    description: "Maintain horizontal size for the embedded transcription box and expand vertically.",
                    label: "Maintain Horizontal"
                },
                selectedModel: {
                    description: "Model size.",
                    onnxcommunitywhispertiny: "Tiny (Fastest, lowest accuracy)"
                },
                useGpu: {
                    description: "Run the model on your GPU (WebGPU) when supported. Much faster, and makes the larger models usable. Falls back to CPU if unavailable.",
                    label: "Use Gpu"
                },
                quantized: {
                    description: "Use quantized models when running on CPU (smaller size, slight quality loss).",
                    label: "Quantized"
                },
                deleteModalFiles: {
                    description: "Delete cached files from storage.",
                    label: "Delete Modal Files"
                }
            }
        },
        voiceMessagesInBackground: {
            name: "VoiceMessagesInBackground",
            description: "Keeps voice messages playing across chats with a synchronized mini player.",
            text: {
                voiceMessagesInBackground: "Voice Messages In-Background player",
                returnToChannelname: "Return to {{channelName}}",
                voiceMessagePosition: "Voice message position",
                changePlaybackSpeed: "Change playback speed",
                playbackSpeedSpeedTimes: "Playback speed {{speed}} times",
                closeVoiceMessagePlayer: "Close voice message player",
                voiceMessage: "Voice message",
                directMessage: "Direct message",
                resume: "Resume voice message",
                pause: "Pause voice message"
            }
        },
        webPWA: {
            name: "WebPWA",
            description: "Makes Discord installable as an App (PWA). Enables notification badges, global key-binds and Discord's custom title bar.",
            text: {
                activities: "Activities",
                hopIn: "Hop In",
                status: "Status",
                emojis: "Emojis",
                rooms: "Rooms",
                discord: "Discord",
                platforms: "Platforms",
                keybindsInfoBefore: "Custom global Push To X keybinds are supported. Navigate to",
                keybindsInfoAfter: "to change them. Hold To X keybinds are not supported."
            }
        },
        "webRichPresence (arRPC)": {
            name: "WebRichPresence (arRPC)"
        },
        webScreenShare: {
            option: {
                resolution: {
                    description: "Resolution",
                    label: "Resolution"
                },
                frameRate: {
                    description: "Frame Rate",
                    label: "Frame Rate"
                },
                contentHint: {
                    description: "Content Hint",
                    label: "Content Hint"
                },
                systemAudio: {
                    description: "Mute system audio",
                    label: "System Audio"
                }
            },
            name: "WebScreenShare",
            description: "Adds a screenshare options menu. Allows for changing resolution, framerate, encoding hints, and system audio settings.",
            text: {
                stream: "Stream",
                streamMuted: "Stream Muted",
                streamMode: "Stream Mode",
                muteStreamAudio: "Mute Stream Audio",
                preventsSystemAudioFrom: "Prevents system audio from being included in your stream.",
                showStreamPreviews: "Show Stream Previews",
                allowsOthersToSee: "Allows others to see a preview of your stream before they join.",
                smootherVideo: "Smoother video",
                cleanerText: "Cleaner text",
                userPreset: "User preset",
                custom: "Custom",
                gaming: "Gaming",
                screenshare: "Screenshare"
            }
        },
        whitelistedEmojis: {
            option: {
                defaultEmojis: {
                    description: "Hide default Unicode emojis from the autocomplete unless whitelisted.",
                    label: "Default Emojis"
                },
                serverEmojis: {
                    description: "Hide custom server emojis from the autocomplete unless whitelisted.",
                    label: "Server Emojis"
                },
                disableToasts: {
                    description: "Don't show toasts when adding or removing emojis.",
                    label: "Disable Toasts"
                },
                whiteListedEmojis: {
                    description: "Whitelisted Emojis",
                    label: "White Listed Emojis"
                },
                exportEmojis: {
                    description: "Export Emojis",
                    label: "Export Emojis"
                },
                importEmojis: {
                    description: "Import Emojis",
                    label: "Import Emojis"
                },
                resetEmojis: {
                    description: "Reset Emojis",
                    label: "Reset Emojis"
                }
            },
            name: "WhitelistedEmojis",
            description: "Adds the ability to disable all message emojis except for a whitelisted set.",
            toast: {
                addedLengthEmojisTo: "Added {{length}} emojis to the list, {{length}} already in the list",
                removedLengthEmojisFrom: "Removed {{length}} emojis from the list",
                nameIsAlreadyIn: "\"{{name}}\" is already in the list",
                addedNameToThe: "Added \"{{name}}\" to the list",
                nameIsNotIn: "\"{{name}}\" is not in the list",
                removedNameFromThe: "Removed \"{{name}}\" from the list",
                successfullyExportedEmojis: "Successfully exported emojis",
                successfullyImportedEmojis: "Successfully imported emojis",
                invalidJsonData: "Invalid JSON data",
                failedToImportEmojis: "Failed to import emojis: {{err}}",
                resetEmojis: "Reset emojis"
            },
            text: {
                areYouSure: "Are you sure?",
                thisWillOverwriteYour: "This will overwrite your current whitelist.",
                import: "Import",
                cancel: "Cancel",
                thisWillRemoveAll: "This will remove all emojis from your whitelist.",
                reset: "Reset",
                addAllGuildEmojis: "Add All Guild Emojis",
                removeAllGuildEmojis: "Remove All Guild Emojis",
                noEmojisInThe: "No emojis in the whitelist.",
                removeAll: "Remove All",
                removeFromWhitelist: "Remove from Whitelist",
                addToWhitelist: "Add to Whitelist",
                defaultEmojis: "Default Emojis",
                guildEmojis: "{{name}} Emojis",
                guildFallback: "Guild {{id}}",
                whitelistedEmojis: "Whitelisted Emojis",
                remove: "Remove"
            }
        },
        wigglyText: {
            option: {
                intensity: {
                    description: "Animation intensity in px",
                    label: "Intensity"
                }
            },
            name: "WigglyText",
            description: "Adds a new markdown formatting that makes text wiggly.",
            text: {
                leftAndRight: "left and right",
                byTyping: "by typing",
                upAndDown: "up and down",
                inACircle: "in a circle",
                youCanMakeTextWiggle: "You can make text wiggle with the following:"
            }
        },
        fixDiscordCss: {
            description: "Fixes Discord's CSS lag"
        },
        directFileDownload: {
            name: "DirectFileDownload",
            description: "Directly download files from Discord instead of opening them in the browser"
        },
        githubRepos: {
            text: {
                failedToFetchRepositories: "Failed to fetch repositories",
                personal: "Personal",
                unknown: "Unknown",
                sortedByCount: "Sorted by repo count. Click to sort A-Z",
                sortedAlphabetically: "Sorted A-Z. Click to sort by repo count",
                mostRepos: "Most repos"
            }
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
