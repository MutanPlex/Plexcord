<div align="center">

# Plexcord

**Taking Discord to the Next Level!**

[![GitHub Sponsors](https://img.shields.io/github/sponsors/MutanPlex?style=for-the-badge&logo=github&color=pink)](https://github.com/sponsors/MutanPlex)
[![Discord](https://img.shields.io/discord/1342668210331324476?style=for-the-badge&logo=discord&logoColor=white&label=Discord)](https://discord.gg/HQGYXm5XSh)
[![GitHub Stars](https://img.shields.io/github/stars/MutanPlex/Plexcord?style=for-the-badge&logo=github)](https://github.com/MutanPlex/Plexcord/stargazers)
[![License](https://img.shields.io/github/license/MutanPlex/Plexcord?style=for-the-badge)](LICENSE)

A powerful, lightweight Discord client modification that enhances your Discord experience with 300+ built-in plugins, custom themes, and privacy-focused features.

[Features](#features) • [Installation](#installation) • [Documentation](https://docs.plexcord.club) • [Support Server](https://discord.gg/HQGYXm5XSh) • [Contributing](CONTRIBUTING.md)

</div>

## ✨ Features

### 🚀 Easy Installation & Setup

- **One-Click Installation**: Download the installer, click install, and you're done!
- **Cross-Platform Support**: Works on Windows, macOS, and Linux
- **Browser Extension**: Run Plexcord in your browser via extension or UserScript
- **Multi-Branch Support**: Compatible with Discord Stable, Canary, and PTB

### 🔌 Powerful Plugin System

- **300+ Built-in Plugins**: [Browse all plugins](https://plexcord.club/plugins)
- **Popular Plugins Include**:
    - 🎵 **MusicControls** - Control Spotify, Youtube Music and Tidal directly from Discord
    - 📝 **MessageLogger** - Never lose a deleted message
    - 🧪 **Experiments** - Access Discord's experimental features
    - 🎮 **GameActivityToggle** - Quickly toggle game activity
    - 🌍 **Translate** - Translate messages on the fly
    - 🚫 **NoTrack** - Block Discord tracking
    - 💬 **QuickReply** - Reply to messages faster
    - 😀 **Free Emotes/Stickers** - Use emotes and stickers for free
    - 🔐 **PermissionsViewer** - View detailed permissions
    - ⌨️ **CustomCommands** - Create your own commands
    - 👁️ **ShowHiddenChannels** - See hidden channels
- **Lightweight Performance**: Despite many plugins, remains fast and efficient

### 🎨 Customization

- **Custom CSS Editor**: Built-in CSS editor with syntax highlighting
- **Theme Support**: Import any CSS files, including BetterDiscord themes
- **Monaco Editor Integration**: Professional code editing experience

### 🔒 Privacy & Security

- **No Telemetry**: Zero data collection from Plexcord
- **Analytics Blocking**: Blocks Discord analytics & crash reporting by default
- **Privacy-First Design**: Your data stays on your device

### 🔄 Advanced Features

- **Settings Sync**: Keep plugins and settings synchronized across devices (optional)
- **Active Maintenance**: Broken plugins typically fixed within 12 hours
- **Developer Friendly**: Comprehensive [documentation](https://docs.plexcord.club) and APIs

## 📥 Installation

### Desktop (recommended)

Download the installer for your system. These links always point to the latest version.

| Platform | Download |
| --- | --- |
| **Windows** | [PlexcordInstaller.exe](https://github.com/Plexcord/Installer/releases/latest/download/PlexcordInstaller.exe) |
| **macOS** | [PlexcordInstaller.MacOS.zip](https://github.com/Plexcord/Installer/releases/latest/download/PlexcordInstaller.MacOS.zip) |
| **Linux** | [PlexcordInstallerCli-linux](https://github.com/Plexcord/Installer/releases/latest/download/PlexcordInstallerCli-linux) |
| Windows (command line) | [PlexcordInstallerCli.exe](https://github.com/Plexcord/Installer/releases/latest/download/PlexcordInstallerCli.exe) |

1. Close Discord completely (also from the system tray).
2. Run the installer. On Linux, make it executable first: `chmod +x PlexcordInstallerCli-linux && ./PlexcordInstallerCli-linux`
3. Pick your Discord install (Stable, PTB or Canary) and click **Install**.
4. Start Discord. Plexcord appears under **User Settings → Plexcord**.

To update, use the built-in updater in Plexcord settings. To remove Plexcord, run the installer again and click **Uninstall**.

### Browser

| Option | Download | How to install |
| --- | --- | --- |
| **Chrome / Edge / Chromium** | [extension-chrome.zip](https://github.com/MutanPlex/Plexcord/releases/download/devbuild/extension-chrome.zip) | Unzip, open `chrome://extensions`, enable **Developer mode**, click **Load unpacked** and select the folder |
| **Firefox** | [extension-firefox.zip](https://github.com/MutanPlex/Plexcord/releases/download/devbuild/extension-firefox.zip) | Open `about:debugging#/runtime/this-firefox`, click **Load Temporary Add-on** and select the zip |
| **UserScript** | [Plexcord.user.js](https://github.com/MutanPlex/Plexcord/releases/download/devbuild/Plexcord.user.js) | Install [Violentmonkey](https://violentmonkey.github.io) or Tampermonkey, then open the link |

Then open [discord.com/app](https://discord.com/app). More details on the [download page](https://plexcord.club/download).

### Build from source

For developers and advanced users. Requires [Node.js](https://nodejs.org) 22+, [pnpm](https://pnpm.io) and [Git](https://git-scm.com).

```sh
git clone https://github.com/MutanPlex/Plexcord
cd Plexcord
pnpm install --frozen-lockfile
pnpm build        # desktop build (pnpm buildWeb for the browser build)
pnpm inject       # patches your Discord install with your build
```

Use `pnpm watch` while developing. Plugin development guide: [docs.plexcord.club](https://docs.plexcord.club/docs/getting-started)

## Support the Project

If you enjoy using Plexcord, please consider supporting the development:

[![Sponsor MutanPlex](https://img.shields.io/badge/Sponsor-MutanPlex-pink?style=for-the-badge&logo=github-sponsors)](https://github.com/sponsors/MutanPlex)

Your support helps maintain and improve Plexcord!

## 🌐 Join our Support/Community Server

Join our community for support, updates, and discussions:

[![Discord Server](https://discord.com/api/guilds/1342668210331324476/widget.png?style=banner2)](https://discord.gg/HQGYXm5XSh)

<div align="center">

<a href="https://star-history.com/#MutanPlex/Plexcord&Timeline">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=MutanPlex/Plexcord&type=Timeline&theme=dark" />
    <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=MutanPlex/Plexcord&type=Timeline" />
    <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=MutanPlex/Plexcord&type=Timeline" />
  </picture>
</a>

<br>

**Discord** is a trademark of Discord Inc. and solely mentioned for the sake of descriptivity.
Mention of it does not imply any affiliation with or endorsement by Discord Inc.

<details>
<summary>⚠️ Using Plexcord violates Discord's Terms of Service</summary>

<br>

**Client modifications are against Discord's Terms of Service.**

However, Discord is generally indifferent about client modifications and there are **no known cases** of users getting banned for using client mods! You should be safe as long as you don't use plugins that implement abusive behavior. All built-in Plexcord plugins are safe to use.

**That said:**

- If your account is very important to you and getting it disabled would be catastrophic, consider the risks of using **any** client mod (not just Plexcord)
- Avoid posting screenshots showing Plexcord in servers where client mods might result in a ban
- Use common sense and don't abuse Discord's systems

**Use at your own discretion.**

</details>

---

<div align="center">

**Made with ❤️ by [MutanPlex](https://github.com/MutanPlex) and [contributors](https://github.com/MutanPlex/Plexcord/graphs/contributors)**

If you find Plexcord useful, please consider [sponsoring](https://github.com/sponsors/MutanPlex) ⭐

</div>
