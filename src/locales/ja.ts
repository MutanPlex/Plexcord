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
                label: "ディル",
                description: "Plexcord の優先言語を選択します。",
                placeholder: "言語の選択"
            }
        },
        location: {
            label: "設定場所",
            description: "Plexcord は設定セクションを配置する場所を決定します",
            top: "頂上へ",
            nitro: {
                above: "ニトロセクションの上に",
                below: "ニトロセクションの下"
            },
            activity: {
                above: "上記イベント設定",
                below: "イベント設定の下で"
            },
            bottom: "高いところに"
        },
        switches: {
            useQuickCss: {
                label: "カスタムCSSを有効にする",
                description: "QuickCSS エディターからカスタム CSS を読み込みます。 これにより、Discord の外観を独自のスタイルでカスタマイズできます。"
            },
            enableReactDevtools: {
                label: "React 開発者ツールを有効にする",
                description: "React Developer Tools 拡張機能を有効にして、Discord の React コンポーネントをデバッグします。 プラグイン開発に役立ちます。"
            },
            mainWindowFrameless: {
                label: "メインウィンドウフレームを無効にする",
                description: "見た目をすっきりさせるために、ローカルの窓枠を取り外します。 タイトル バー領域をドラッグすることでウィンドウを移動できます。"
            },
            frameless: {
                label: "ウィンドウフレームを無効にする",
                description: "見た目をすっきりさせるために、ローカルの窓枠を取り外します。 タイトル バー領域をドラッグすることでウィンドウを移動できます。"
            },
            winNativeTitleBar: {
                label: "Discordのカスタムタイトルバーの代わりにWindowsのネイティブタイトルバーを使用する",
                description: "Discord のカスタム タイトル バーを標準の Windows タイトル バーに置き換えます。 これにより、一部のウィンドウ管理ツールとの互換性が向上する可能性があります。"
            },
            transparent: {
                label: "ウィンドウの透明性を有効にする",
                description: "Discordのウィンドウを透明にします。 透明性をサポートするテーマが必要です。そうでない場合は何も行われません。",
                isWindows: "これにより、ウィンドウのサイズ変更が停止され、ウィンドウを画面の端にスナップできなくなります。",
                notWindows: "これにより、ウィンドウのサイズが変更されなくなります。"
            },
            winCtrlQ: {
                label: "Ctrl+Q ショートカットを保存して Discord を閉じる (Alt+F4 の代替)",
                description: "Discordを閉じるためのキーボードショートカットとしてCtrl+Qを追加します。 これにより、アプリケーションをすばやく閉じるための Alt+F4 の代替手段が提供されます。"
            },
            disableMinSize: {
                label: "最小ウィンドウ サイズを無効にする",
                description: "Discord ウィンドウのサイズをデフォルトの最小サイズよりも小さくできるようにします。 ウィンドウ マネージャーや小さな画面を並べて表示する場合に便利です。"
            }
        },
        quickActions: {
            title: "クイックトランザクション",
            description: "頻繁に使用する一般的な操作。 これらのショートカットを使用すると、メニューを移動することなく、頻繁に使用する機能にすばやくアクセスできます。",
            notificationLog: "通知ログ",
            editQuickCSS: "クイックCSS編集",
            relaunchDiscord: "Discordを再起動する",
            openSettingsFolder: "設定フォルダーを開く",
            viewSourceCode: "ソースコードを表示"
        },
        specialCards: {
            donations: {
                title: "寄付",
                subtitle: "寄付していただきありがとうございます!",
                description: "@mutanplex にメッセージを送信することで、いつでも自分の権限を管理できます。",
                button: "寄付",
                invite: "Discordに参加してください",
                invalid: "招待リンクが無効または期限切れです。"
            },
            supportProject: {
                title: "プロジェクトを支援する",
                description: "寄付による Plexcord の開発のサポートをご検討ください。"
            },
            contributions: {
                title: "貢献",
                subtitle: "ご貢献いただきありがとうございます!",
                description: "Plexcord に貢献すると、クールなバッジが手に入ります。",
                buttonTitle: "あなたが貢献したものを見る"
            }
        },
        settingsSection: {
            title: "設定",
            description: "Plexcord が Discord と統合して動作する方法を構成します。 これらの設定は、Discord クライアントの外観と動作に影響します。",
            hintParts: {
                prefix: "{{pluginLink}} 設定を構成することで、この設定セクションが Discord 設定メニューのどこに表示されるかをカスタマイズできます。",
                linkText: "設定プラグイン"
            }
        },
        notifications: {
            title: "通知",
            description: "Plexcord が通知を処理する方法を構成します。 アラートをいつどのように受信するかをカスタマイズしたり、過去の通知の履歴を表示したりできます。",
            settings: "通知設定",
            viewLog: "通知履歴の表示",
            permissions: {
                denied: {
                    title: "デスクトップ通知の許可が拒否されました",
                    label: "通知権限を拒否しました。 デスクトップ通知は機能しません。"
                }
            },
            style: {
                label: "通知スタイル",
                description: "一部のプラグインでは通知が表示される場合があります。 これらには 2 つのスタイルがあります。",
                plexcord: "プレックスコードの通知",
                plexcordDesc: "これらはアプリ内通知です",
                desktop: "デスクトップ通知",
                desktopDesc: "ローカル デスクトップ通知 (ping を受信したときなど)",
                onlyWhenNotFocused: "Discord がフォーカスされていない場合にのみデスクトップ通知を使用する",
                always: {
                    desktop: "常にデスクトップ通知を使用する",
                    plexcord: "常に Plexcord 通知を使用する"
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
                label: "見逃した通知の数",
                description: "Discord に再び注目すると、見逃した通知に関する通知がポップアップ表示されます。",
                whileYou: "あなたがいない間",
                count: "{{count}} 件の通知を受信しました{{s}}",
                s: " "
            },
            timeout: {
                label: "通知タイムアウト",
                description: "通知が自動的に消えるまでの画面上に表示される時間 (秒単位)"
            },
            logLimit: {
                label: "通知ログの制限",
                description: "通知ログに保存される通知の最大数。 通知ログを無効にする場合は {{disable}} に設定し、古い通知を自動的に削除しない場合は {{unlimited}} に設定します"
            },
            opacity: {
                label: "不透明度",
                description: "アプリ内通知の不透明性"
            },
            maxNotifications: {
                label: "最大の通知",
                description: "同時に表示する通知の最大数"
            },
            behavior: {
                label: "通知の動作",
            },
            disableInStreamerMode: {
                label: "ブロードキャスターモードで無効にする",
                description: "ブロードキャスターモード中に通知を無効にする"
            },
            renderImages: {
                label: "画像の処理",
                description: "通知に画像をレンダリングする"
            },
            streamingTreatment: {
                label: "ブロードキャスターモードの動作",
                description: "画面共有時の通知の処理方法",
                normal: "通常 - 通知を通常どおり表示します",
                noContent: "コンテンツなし - 通知本文を非表示にする",
                ignore: "無視 – 通知をまったく表示しません"
            },
        },
        macVibrancy: {
            title: "ウィンドウのちらつきスタイル (再起動が必要)",
            description: "macOS ウィンドウのちらつき効果をカスタマイズします。 これは、Discord ウィンドウのぼかしと透明度のスタイルを制御します。 変更を有効にするには再起動が必要です。",
            placeholder: "ウィンドウのちらつきスタイル",
            style: {
                no: "揺れない",
                underPage: "ページの下 (ウィンドウの色合い)",
                content: "コンテンツ",
                window: "ウィンドウ",
                selection: "投票する",
                titlebar: "タイトルバー",
                header: "タイトル",
                sidebar: "サイドバー",
                tooltip: "ツールチップ",
                menu: "メニュー",
                popover: "ポップアップウィンドウ",
                fullscreenUI: "フルスクリーン UI (透明ですが少し鈍い)",
                hud: "HUD (最も透明)"
            }
        }
    },

    plugins: {
        title: "プラグイン",
        new: "新しい",
        unknown: "未知",
        noDescription: "説明はありません。",
        restart: {
            apply: "変更を適用するには再起動してください。",
            required: "再起動が必要です!",
            description: "新しいプラグインと設定を適用するには、今すぐ再起動してください",
            following: "次のプラグインは再起動が必要です。",
            fully: "一部のプラグインは完全に無効にするために再起動が必要です。",
            would: "再開しますか?",
            remainingCount: "他 {{count}} 個",
            resetDefault: "デフォルト設定にリセットする",
            failed: "依存関係の初期化に失敗しました:",
            button: {
                restart: "再起動",
                later: "それから！",
                now: "今すぐ再起動してください",
                cancel: "キャンセル",
                disableWarning: "アラートを無効にする",
                disableAll: "すべて無効にする",
                reset: "リセット",
                close: "四半期"
            }
        },
        contributor: {
            contributed: "貢献した",
            modal: {
                contributionsInfo: "プラグインの開発による {{userName}} {{contributionCount}} {{continuedLink}}。",
                noContributions: "{{userName}} はまだプラグインを開発していません。 おそらく、さまざまな方法で {{contributedLink}} が行われる可能性があります。"
            }
        },
        infoModal: {
            description: "歯車または情報アイコンを押すと、プラグインに関する詳細情報を取得できます。",
            settingsInfo: "歯車付きのプラグインには設定を変更できます。",
            disableAll: "すべてのプラグインを無効にする"
        },
        error: {
            invalidInput: "無効な入力が提供されました",
            stopping: "{{plugin}} プラグインの停止中に問題が発生しました",
            starting: "{{plugin}} プラグインの初期化中に問題が発生しました",
            startDependency: "依存関係の初期化中に問題が発生しました: {{failures}}",
            infoRender: "このプラグインのカスタム情報コンポーネントのレンダリング中にエラーが発生しました"
        },
        placeholder: {
            number: "数字を入力してください",
            select: "オプションを選択してください",
            text: "値を入力してください"
        },
        excluded: {
            desktop: "Discord デスクトップ アプリまたは Plextron",
            discordDesktop: "Discord デスクトップアプリ",
            plextron: "プレクストロンのアプリケーション",
            web: "Plextron アプリと Web バージョンの Discord",
            dev: "Plexcordの開発者版"
        },
        search: {
            looking: "これがあなたが探しているものですか",
            onlyAvailable: "ここでしか手に入らない→",
            noCriteria: "検索条件に一致するプラグインは見つかりませんでした"
        },
        required: {
            title: "必要なプラグイン",
            this: "このプラグインは、Plexcord が動作するために必要です。",
            by: "このプラグインは、以下を機能させるために必要です。"
        },
        dangerModal: {
            title: "危険な行為",
            disablePlugins: "プラグインを無効にする",
            disableText: "すべて無効にする",
            irreversible: "このアクションは取り消しできません。",
            enableBack: "続行してもよろしいですか?後で再度アクティブ化することができます。",
            undone: "この操作は元に戻すことができません。 本気ですか？",
            resetDescription: "{{pluginName}} プラグイン設定をデフォルト値にリセットしようとしています。",
            disable: "{{enabledPlugins}} プラグインを無効にしようとしています。",
            confirmReset: "確認してリセットする",
            cancel: "キャンセル",
            resetSettings: "設定をリセットする",
            resetText: "リセット"
        },
        filters: {
            label: "フィルター",
            placeholder: "プラグインを検索...",
            option: {
                all: "全て",
                enabled: "アクティブ",
                disabled: "無効",
                new: "新しい",
                userplugins: "ユーザープラグイン",
                api: "APIプラグイン"
            }
        },
        pluginModal: {
            noSettings: "このプラグインには変更できる設定がありません。",
            authors: "著者",
            settings: "設定",
            successfulReset: "{{plugin}} プラグインの設定は正常にリセットされました。",
            enabledStock: "アクティブストックアドオン",
            totalStock: "合計ストックアドオン",
            enabledUser: "アクティブなユーザープラグイン",
            totalUser: "ユーザーアドオンの合計",
            info: "さらに詳しい情報を見る",
            source: "ソースコードを表示する"
        },
        metadata: {
            api: {
                description: {
                    memberListDecorators: "メンバーリストにデコレーターを追加するための API (サーバーと DM の両方)",
                    messageAccessories: "メッセージに小道具を追加するための API",
                    messageDecorations: "投稿にデコレータを追加する API",
                    chatInputButtons: "チャットエントリにボタンを追加するAPI",
                    commands: "コマンドを使用するものに必要な API",
                    contextMenu: "コンテキストメニューから項目を追加/削除するためのAPI",
                    dynamicImageModal: "画像モーダルを開くときに幅または高さをスキップできます。",
                    menuItemDemangler: "Discord のメニュー項目を読みやすくします",
                    messageEvents: "メッセージ イベントを使用するものに必要な API",
                    messagePopover: "メッセージポップアップにボタンを追加するAPI",
                    messageUpdater: "メッセージを更新および再処理するための API",
                    nicknameIcons: "プロフィールのユーザー名にアイコンを追加する API",
                    notices: "通知の自動消去を修正",
                    serverList: "サーバーリストを変更するプラグインに必要な API",
                    userSettings: "Discordのユーザー設定、グループ、名前を明らかにするパッチ",
                    audioPlayer: "Discord の内部オーディオ ファイルまたは外部オーディオ リンクを再生するための API。",
                    userArea: "ユーザーエリアパネルにボタンを追加するためのAPI。"
                },
                chatButtons: {
                    context: {
                        buttons: "ボタン"
                    }
                }
            },
            badges: {
                description: "ユーザーにバッジを追加するための API",
                contributor: {
                    plexcord: "プレックスコード参加者",
                    vencord: "ヴェンコード参加者",
                    userPlugin: "ユーザープラグインの貢献者"
                },
                context: {
                    title: "バッジのオプション",
                    copy: {
                        name: "バッジ名をコピー",
                        link: "バッジの画像リンクをコピー"
                    },
                    refetch: {
                        button: "バッジを更新する",
                        success: "バッジが無事に更新されました！"
                    }
                },
                modal: {
                    title: "プレックスコードサポーター",
                    special: "このバッジは、Plexcord の寄付者に対する特別な特典です。",
                    description: "ドナーになって Plexcord の開発をサポートすることをご検討ください。 これは私たちにとって非常に貴重なものになります!!"
                }
            }
        },
        uiElements: {
            manage: "UI要素の管理",
            allows: "気に入らないボタンを非表示にできます",
            section: {
                chatbar: {
                    title: "チャットバーのボタン",
                    description: "これらはチャットエントリバーの右側にあるボタンです"
                },
                messagePopover: {
                    title: "メッセージポップアップボタン",
                    description: "これらは、メッセージの上にマウスを置くと右側に表示されるフローティング ボタンです。"
                }
            },
            button: "有効化されたプラグインのボタンがここに表示されます。"
        }
    },

    patchHelper: {
        title: "パッチアシスタント",
        description: "Plexcord プラグインのパッチの作成に役立つ開発者ツール。",
        fullPatch: {
            label: "タム・ヤマ",
            description: "完全な JSON パッチをここに貼り付けてフィールドに値を入力します"
        },
        find: "ブル",
        match: "マッチ",
        replacement: "変化",
        preview: "プレビュー",
        generatedCode: "生成されたコード",
        group: "グループ",
        diff: "違い",
        module: "モジュール",
        compile: "デルレ",
        compiled: "コンパイルに成功しました",
        copy: {
            clipboard: "クリップボードにコピー",
            codeblock: "コードブロックとしてコピー"
        },
        error: {
            noMatch: "一致するものが見つかりませんでした。 おそらくそのモジュールは遅延読み込みされているのでしょう。",
            multipleMatch: "一致するものが複数見つかりました。 より具体的な検索パターンを使用してください。",
            noFind: "「検索」フィールドはありません。",
            noReplacement: "「変更」フィールドはありません。",
            invalidReplacement: "置換フィールドが無効です",
            replacementMatch: "「replacement.match」フィールドは存在しません",
            replacementReplace: "「replacement.replace」フィールドが存在しません",
            replacementMustFunction: "置換は関数でなければなりません"
        },
        cheatSheet: {
            title: "チートシート",
            identifiers: "識別子 (変数名、クラス名など) に一致するカスタム正規表現エスケープ シーケンス",
            dollar: "$を追加します",
            entireMatch: "すべての一致を追加します",
            beforeMatch: "一致の前に部分文字列を追加します",
            afterMatch: "一致の後に部分文字列を追加します",
            nthGroup: "n 番目のキャプチャ グループ ($1、$2...) を追加します。",
            pluginInstance: "プラグインインスタンスを追加します"
        },
        replacementEval: {
            label: "機能としてのプロセスの置き換え",
            description: "これが有効な場合、「置換」は関数として扱われます。"
        }
    },

    sync: {
        title: "バックアップと復元",
        warning: "警告",
        warningText: "設定ファイルをインポートすると、現在の設定が上書きされます。 現在の構成を保持したい場合は、必ず最初にバックアップをエクスポートしてください。",
        description: "Plexcord 設定を JSON ファイルとしてインポートおよびエクスポートできます。 このようにして、設定を別のデバイスに簡単に移動したり、Plexcord または Discord を再インストールした後に設定を復元したりできます。",
        successful: "設定は正常にインポートされました。 変更を有効にするには、アプリを再起動してください。",
        error: {
            failure: "設定のインポートに失敗しました: {{error}}",
            failedExport: "設定のエクスポートに失敗しました。コンソールを確認してください",
            invalid: "無効な設定です。 これは本当に Plexcord Tuning ファイルですか?",
            tooLarge: "データストアが大きすぎるため、バックアップから除外されました。 必要に応じて、「データストアのエクスポート」機能を使用します。",
            clearSomeDate: "データストアは巨大です。 プラグイン データをいくつか削除して、もう一度試してください。"
        },
        settings: {
            text: "バックアップには何が入っているのでしょうか？",
            quickcss: "カスタムQuickCSS",
            theme: "テーマリンク",
            plugins: "プラグイン設定",
            datastores: "アドオン リポジトリ (タイムゾーンや IRememberYou など)"
        },
        import: {
            title: "インポート設定",
            description: "構成を復元するには、以前にエクスポートした設定ファイルを選択します。 これにより、現在の設定がすべてバックアップの設定に置き換えられます。",
            all: "すべての設定をインポート",
            plugins: "エクレンティ・イチェ・アクタル",
            css: "QuickCSS の詳細",
            datastore: "データストアのインポート"
        },
        export: {
            title: "設定のエクスポート",
            description: "現在の Plexcord 設定をファイルにエクスポートしてバックアップしたり、別のデバイスに転送したりできます。",
            all: "すべての設定をエクスポート",
            plugins: "エクスポートプラグイン",
            css: "QuickCSSのエクスポート",
            datastore: "データストアのエクスポート"
        }
    },

    cloud: {
        text: "雲",
        title: "設定の同期",
        override: "クラウド同期",
        description: "Plexcord の設定をクラウドに同期します。 これにより、手動でインポート/エクスポートを行わなくても、複数のデバイス間で構成を一貫して維持できます。",
        switchDescription: "有効にすると、設定がクラウドに同期されます。 次のアクションを使用して手動で同期できます。",
        settings: "クラウド設定",
        successful: "設定はクラウドに正常に同期されました。",
        updated: "設定が更新されました!変更を完全に有効にするには、ここをクリックして再起動してください。",
        deleted: "設定がクラウドから削除されました!",
        integration: {
            title: "クラウド統合",
            description: "Plexcord のクラウド統合により、複数のデバイスと Discord インストール間で設定を同期できます。 データは安全に保存され、いつでも簡単に復元できます。",
        },
        reauth: "別のクライアントでクラウド統合が有効になっていることに気付きました。 制限があるため、続行するには再認証する必要があります。 ここをクリックして設定ページに移動し、続行してください。",
        error: {
            setup: "セットアップに失敗しました (OAuth 構成を取得できませんでした)。",
            secret: "セットアップに失敗しました (秘密キーが返されませんでした)。",
            string: "インストールに失敗しました ({{error}})。",
            connect: "このアカウントは Plexcord クラウド アプリに接続されていないため、クラウド同期は無効になっています。 このアカウントを再度有効にするには、クラウド設定で接続します。 (注: 設定は別途保存されます)",
            noSettings: "クラウドに設定が見つかりません。",
            uptodate: "設定は最新です。",
            localNewer: "ローカル設定はクラウド設定よりも新しいです。",
            delete: "設定の削除に失敗しました ({{error}})。",
            api: {
                returned: {
                    delete: "設定の削除に失敗しました (API が {{status}} を返しました)。",
                    to: "設定をクラウドに同期できませんでした (API が {{status}} を返しました)。",
                    from: "クラウドから設定を同期できませんでした (API が {{status}} を返しました)。"
                }
            },
            synchronize: {
                to: "設定をクラウドに同期できませんでした ({{error}})。",
                from: "設定をクラウドから同期できませんでした ({{error}})。"
            }
        },
        warning: {
            enableCloudIntegration: "設定同期機能を使用するには、上記のクラウド統合を有効にします。"
        },
        danger: {
            title: "危険地帯",
            description: "クラウド内のすべてのデータを完全に削除します。 この操作は元に戻すことができず、同期された設定とクラウド インフラストラクチャに保存されているその他のデータがすべて削除されます。",
            delete: {
                account: {
                    title: "クラウドアカウントの削除",
                    description: "クラウド アカウントとすべての関連データを完全に削除してもよろしいですか?この操作は元に戻すことができません。",
                    confirm: "アカウントの削除",
                    cancel: "キャンセル"
                }
            }
        },
        notification: {
            title: "クラウド統合",
            enabled: "クラウド統合が有効になりました",
            host: "ドメイン {{host}} が権限リストに追加されました。 変更を有効にするには、アプリケーションを再起動します。",
            erase: {
                successful: "クラウドデータは正常に削除されました",
                failed: "すべてのデータを削除できませんでした (API が {{status}} を返しました)。サポートにお問い合わせください。"
            }
        },
        button: {
            to: "クラウドに同期する",
            from: "クラウドから同期",
            fromDescription: "これにより、現在の設定がクラウドの設定で上書きされます。 賢く利用しましょう！",
            delete: "クラウドデータの削除",
            enable: "クラウド統合を有効にする",
            reauthorize: "再認証",
            confirm: "今すぐ再起動してください",
            later: "それから！"
        },
        privacy: "あなたのプライバシーを保護します",
        source: "ソースコード",
        overview: "Plexcord にはクラウド統合が備わっており、デバイス間で設定を同期するなどの利点があります。 これらの {{privacy}} と {{source}} は AGPL 3.0 ライセンスで提供されているため、独自のサーバーでホストできます。",
        authorization: "クラウドに接続して設定を同期します。 クラウド統合をまだ設定していない場合は、認証を求められます。",
        backend: {
            title: "クラウドプロバイダー",
            description: "設定をクラウドに保存する方法を選択します。 デフォルトでは Plexcord Cloud が使用されますが、必要に応じて独自のセルフホスト型クラウド サービスを構成することもできます。",
            invalid: "無効な URL"
        },
        sync: {
            title: "このデバイスの同期ルール",
            description: "この設定は、このデバイスとクラウドの間で設定を同期する方法を決定します。 変更を両方向に転送できるようにすることも、片側をメイン ソースとして選択することもできます。",
            direction: {
                both: "双方向同期 (変更は両方向に転送されます)",
                push: "このデバイスはソースです (アップロードのみ)",
                pull: "クラウドソース（ダウンロードのみ）",
                manual: "自動同期（以下のボタンによる手動同期のみ）"
            }
        }
    },

    changelog: {
        text: "変更メモ",
        title: "変更メモ",
        description: "Plexcord の最新の変更と更新はここで見つけることができます。",
        by: "ライター",
        check: "倉庫をチェックする",
        uptodate: "現在",
        update: "アップデート",
        noMessage: "メッセージはありません",
        unknown: "未知",
        updatedPlugins: "更新されたプラグイン",
        newSettings: "新しい設定",
        newSettingTooltip: "{{plugin}} の新しい設定",
        loading: "読み込み中...",
        repoUptodate: "倉庫は最新です",
        fetch: "倉庫から持ち込む",
        clear: "すべてのメモをクリア",
        internet: "インターネットに接続していることを確認して、もう一度試してください。",
        recent: "最近の変更点",
        codeChanges: "コード変更 {{count}} 件の新しいコミット",
        updateLogs: "{{count}} 更新メモ",
        noCommit: "現在のバージョンからのフォワード コミットは見つかりませんでした。 「リポジトリから取得」をクリックして新しい変更を確認します。",
        previous: "以前の更新セッションに加えて、履歴とプラグインの変更をコミットします。",
        modal: {
            description: "Plexcord に対する最新の変更を表示します。 このプロセスでは、リポジトリから直接コミットを取得することで、最新情報が表示されます。",
            repository: "デポ",
            failed: "受信に失敗しました - コンソールを確認してください",
            current: "利用可能：",
            hide: "メモを隠す",
            show: "メモを表示",
            fetch: {
                title: "変化をもたらす",
                description: "リポジトリ内の新しいコミット、プラグインの更新、コードの変更を確認します。 これにより、現在のバージョンと最新バージョンが比較され、新機能が表示されます。",
                newCommit: "これらは、前回のリリース以降の新しいコミットとプラグインの更新です。 どの機能が追加されたか、どのバグが修正されたか、どのプラグインが更新されたかを確認できます。",
                confirm: "できる",
            }
        },
        commit: {
            available: "コミットが利用可能",
            no: "新しいコミットはありません",
            new: "新しいプラグイン",
            updated: "更新されたプラグイン",
            settings: "新しい設定"
        },
        toast: {
            already: "リポジトリはすでに最新です",
            found: "リポジトリから {{count}} 個の新しいコミットが見つかりました",
            local: "リポジトリはローカル コピーで最新です",
            failed: "倉庫から持ち出せませんでした:(",
            cleared: "すべてのメモがクリアされました",
            logCleared: "ノートがクリアされました",
            yourLatest: "前回の更新で保存されたコミット"
        },
        alert: {
            clear: {
                title: "すべてのメモをクリア",
                body: "すべてのメモをクリアしてもよろしいですか?この操作は元に戻すことができません。",
                confirm: "すべてクリア",
                confirmColor: "危険",
                cancel: "キャンセル"
            },
            log: {
                title: "ログをクリアする",
                body: "このログを消去してもよろしいですか?この操作は元に戻すことができません。",
                confirm: "ログをクリアする",
                confirmColor: "危険",
                cancel: "キャンセル"
            }
        },
        newPlugins: "{{count}} 個の新しいプラグイン",
        following: "最近のアップデートで次のプラグインが追加されました。",
        more: "+{{count}} 個の新しいプラグイン"
    },

    csp: {
        restart: "この変更を適用するには再起動が必要です",
        blocked: {
            resources: "ブロックされたリソース",
            disallowed: "一部の画像、スタイル、フォントは、未承認のドメインからのものであるためブロックされています。",
            recommended: "GitHub または Imgur に移動することを強くお勧めします。 ただし、ドメインを完全に信頼する場合は、ドメインを許可することもできます。",
            afterAllow: "スペースに権限を付与した後、変更を適用するには、{{プラットフォーム}} を完全にシャットダウンして (システム トレイ/タスク マネージャーから) 再起動する必要があります。",
            allow: "許可する",
            url: "ブロックされた URL"
        },
        imgur: {
            direct: "Imgur リンクは、{{etc}} 形式の直接リンクである必要があります。",
            copy: "直接リンクを取得するには、画像を右クリックして「画像アドレスをコピー」を選択します。"
        },
        wants: {
            caller: "{{callerName}} は {{domain}} への接続を許可したいと考えています",
            detail: "{{domain}} を認識せず、完全に信頼できない場合は、このリクエストをキャンセルしてください。",
            restart: "変更を有効にするには、{{appName}} を完全に閉じて再起動する必要があります。",
            type: {
                images: "写真",
                styles: "CSS とテーマ",
                fonts: "フォント"
            },
            content: "次のタイプのコンテンツは、{{domain}} からのアップロードが許可されます。",
            understand: "私は {{domain}} を完全に信頼しており、リンクを許可するリスクを理解しています。",
            button: {
                cancel: "キャンセル",
                allow: "許可する"
            },
            title: "ドメイン名の権限"
        }
    },

    themes: {
        title: "テーマ",
        management: "テーマ管理",
        description: "テーマを使用して Discord の外観をカスタマイズします。 ローカルの .css ファイルを追加するか、URL からテーマを直接インストールします。 歯車アイコンの付いたテーマには、変更できるカスタマイズ可能な設定があります。",
        local: "ローカルテーマ",
        new: "新しい",
        pinned: "固定された",
        stylus: "スタイラスエクステンション",
        bd: "より良いDiscordのテーマ",
        github: "ギットハブ",
        download: "テーマをお探しですか? {{bd}} をチェックするか、{{github}} で検索してください。 BetterDiscord からダウンロードする場合は、「ダウンロード」ボタンをクリックし、テーマ フォルダーに .theme.css ファイルを配置します。",
        add: "追加",
        reset: "設定をデフォルトにリセットする",
        notCSS: "CSSファイルではありません。 必ず生のリンクを使用してください。",
        okay: "わかった！",
        checking: "検査中です…",
        valid: "有効！",
        upload: "テーマをアップロードする",
        openFolder: "テーマフォルダーを開く",
        loadMissing: "不足しているテーマをインストールする",
        editQuickCSS: "QuickCSSを編集する",
        editClient: "クライアントテーマの編集",
        website: "ウェブサイトを開く",
        discord: "ディスコードサーバー",
        downloadTheme: "ダウンロード",
        refresh: "リフレッシュ",
        delete: "シル",
        unknown: {
            title: "未知",
            author: "作者不明",
            theme: "ディスコードのテーマ"
        },
        required: "次のプラグインは必須ですが、アクティブになっていません:",
        homepage: "ホームページ",
        support: "サポート",
        online: {
            title: "オンラインテーマ",
            description: "テーマをローカル ファイルではなく URL から直接インストールします。 オンライン テーマは、ソースが変更されると自動的に更新されます。 そのため、手動でダウンロードしなくても常に最新バージョンを入手できます。",
            enable: "オンラインテーマを有効にする",
            enableDescription: "オンラインテーマのアップロードを切り替えます。 無効にすると、すべてのオンライン テーマがオフになり、新しいオンライン テーマを追加できなくなります。"
        },
        quickActions: {
            title: "クイックトランザクション",
            description: "テーマを管理するためのショートカット。 テーマ フォルダーを開いて新しいテーマを追加したり、QuickCSS を使用してスタイルを簡単に編集したり、変更後にテーマをリロードしたりできます。"
        },
        error: {
            userscript: "ユーザースクリプトのテーマはサポートされていません。",
            stylus: "代わりに、{{stylus}} を使用してテーマをインストールできます。",
            expired: "リンクが無効または期限切れです",
            text: "平："
        },
        copy: {
            url: "URLをコピー",
            copied: "テーマの URL をコピーしました!",
            settings: "テーマ設定をコピーする",
            copiedSettings: "テーマの設定がクリップボードにコピーされました。"
        },
        paste: {
            settings: "テーマ設定を貼り付ける",
            empty: "クリップボードが空です。",
            invalid: "クリップボードに有効な設定データがありません。",
            pasted: "テーマ設定はクリップボードから貼り付けられました。"
        },
        settings: {
            for: "{{テーマ名}} の設定",
        },
        installed: {
            title: "インストールされているテーマ",
            description: "ここでテーマを管理します。 ローカル テーマはテーマ フォルダーからロードされ、オンライン テーマは URL からロードされます。 歯車アイコンが付いたテーマにはカスタマイズ可能な設定があります。",
            count: "{{count}} 個のテーマがインストールされています (ローカルでは {{localCount}}、オンラインでは {{onlineCount}}) {{enabledCount}} が有効になっています",
            search: "テーマさえも…",
            loading: "テーマを読み込み中...",
            none: "まだテーマがインストールされていません。 まず、テーマ ファイルをテーマ フォルダーに追加するか、上からオンライン テーマを追加します。",
            noCriteria: "検索条件またはフィルター条件に一致するテーマは見つかりませんでした。"
        },
        filter: {
            all: "すべて表示",
            online: "オンラインテーマ",
            local: "ローカルテーマ",
            enabled: "効果的",
            disabled: "無効"
        },
        notification: {
            refresh: {
                title: "テーマのリニューアル",
                error: "テーマの更新に失敗しました"
            },
            failed: {
                download: "インディリレメディのテーマ"
            }
        }
    },

    updater: {
        title: "アップデーター",
        settings: "アップデーターの設定",
        updates: "アップデート",
        updated: "更新されました！",
        restart: "ここをクリックして再起動してください",
        repaired: "プレックスコード修理しました！",
        ok: "わかりました",
        preferences: {
            title: "設定を更新する",
            description: "Plexcord がどのように更新され続けるかを確認してください。 バックグラウンドで自動的に更新するか、新しい更新が利用可能になったときに通知を受け取るかを選択できます。",
        },
        github: {
            local: "ローカル コピーにはリモート リポジトリよりも新しいレコードがあります。 これは通常、ローカルに変更を加えたときに発生します。 更新する前に、それらを保持するかリセットしてください。"
        },
        error: {
            check: "アップデートの確認中に問題が発生しました。 詳細については、コンソールを参照してください。",
            occurred: "エラーが発生しました",
            retrieve: "更新情報の取得で問題が発生しました - コンソールを確認してください",
            title: "いやー！",
            tryAgain: "エラーが発生しました。 もう一度試すか、詳細についてはコンソールを参照してください。",
            command: "{{path}} コマンドが見つかりません。 これをダウンロードするか、もう一度試してください。",
            code: "コード{{コード}}。 詳細については、コンソールを参照してください。",
            running: "{{cmd}} の実行中に問題が発生しました: {{error}}",
            failed: "これも失敗しました:( インストーラーを使用して更新または再インストールしてみてください。"
        },
        available: "1 件のアップデートが利用可能",
        updateAvailable: "Plexcord のアップデートが利用可能になりました!",
        click: "アップデートを表示するにはここをクリックしてください",
        available_plural: "{{count}} 件のアップデートが利用可能",
        current: "現在！",
        successful: {
            title: "アップデートが成功しました!",
            body: "正常に更新されました。 変更を保存するには再起動してください。",
            button: {
                confirm: "再起動",
                cancel: "今じゃない！",
                update: "今すぐアップデート",
                check: "アップデートをチェックする"
            },
            noFound: "アップデートが見つかりませんでした"
        },
        automatically: {
            label: "自動更新",
            description: "Plexcord は確認なしにアップデートを自動的にダウンロードしてインストールします"
        },
        notify: {
            label: "自動アップデート通知を表示する",
            description: "Plexcord が自動的に更新されるときに通知を表示する"
        },
        repo: "デポ",
        repoDescription: "これは、Plexcord が更新を受け取る GitHub リポジトリです。",
        loading: "読み込み中...",
    },

    components: {
        error: {
            title: "なんてこった！",
            render: "このコンポーネントのレンダリング中にエラーが発生しました。 詳細については、以下およびコンソールで確認してください。"
        },
        componentFailed: {
            message: "ああ！ このページはレンダリングできませんでした。 ただし、この問題を修正する可能性のあるアップデートが利用可能です。 今すぐ更新して再起動しますか?"
        },
        quickCSS: {
            title: "QuickCSSエディターを開く",
            message: "QuickCSS エディターはバックグラウンドで開いたままです。",
            detail: "Discordを閉じてもよろしいですか?これにより、QuickCSS エディターも閉じられます。",
            cancel: "キャンセル",
            close: "とにかく閉じる"
        }
    },

    commands: {
        error: {
            execute: "コマンド「{{command}}」の実行中にエラーが発生しました"
        }
    },

    notifications: {
        dismiss: "通知を閉じる",
        noYet: "まだ通知はありません",
        settings: "通知設定",
        log: {
            title: "通知ログ",
            clear: "通知ログをクリアする",
            sure: "本気ですか？",
            permamently: "{{count}} 件の通知は完全に削除されます。 この操作は元に戻すことができません。",
            button: {
                confirm: "わかりました",
                cancel: "キャンセル"
            }
        }
    },

    memberlist: {
        error: {
            render: "{{key}} メンバー リスト デコレータのレンダリング中にエラーが発生しました"
        }
    },

    message: {
        accessory: {
            error: {
                render: "{{key}} メッセージ アクセサリのレンダリング中にエラーが発生しました"
            }
        },
        decoration: {
            error: {
                render: "{{key}} メッセージ装飾のレンダリング中にエラーが発生しました"
            }
        }
    },

    utils: {
        toast: {
            copied: "クリップボードにコピーされました!"
        }
    },

    common: {
        unit: {
            year: "年",
            years: "年",
            month: "は",
            months: "は",
            week: "週",
            weeks: "週",
            day: "日",
            days: "日",
            hour: "一瞬",
            hours: "一瞬",
            minute: "分",
            minutes: "分",
            second: "2番",
            seconds: "2番",
            ago: "前に",
            s: " "
        }
    },

    plugin: {
        noTrack: {
            name: "ノートラック",
            description: "Discord のトラッキング (分析/「科学」)、メトリクス、および Sentry クラッシュ レポートを無効にします",
            option: {
                disableAnalytics: {
                    label: "分析を閉じる",
                    description: "Discord の追跡 (分析/「科学」) 指標と Sentry クラッシュ レポートを無効にする"
                }
            }
        },
        settings: {
            name: "設定",
            description: "設定インターフェイスとデバッグ情報を追加します",
            option: {
                language: {
                    label: "ディル",
                    description: "Plexcord の優先言語を選択します。"
                },
                settingsLocation: {
                    label: "設定場所",
                    description: "Plexcord は設定セクションを配置する場所を決定します"
                }
            }
        },
        supportHelper: {
            name: "サポートアシスタント",
            description: "お客様へのサポートの提供に役立ちます",
            commands: {
                description: {
                    debug: "Plexcordのデバッグ情報を送信する",
                    plugins: "Plexcord プラグイン リストを送信する"
                }
            },
            modals: {
                outdated: {
                    title: "待って！",
                    body: "古いバージョンの Plexcord を使用しています。 おそらく、あなたの問題はすでに解決されています。",
                    footer: "サポートを求める前にアップデートしてください。",
                    button: {
                        cancel: "アップデートを参照",
                        confirm: "今すぐ更新して再起動してください",
                        secondaryConfirm: "自分が何をしているのかわかっている、または更新できない"
                    }
                },
                updater: {
                    title: "待って！",
                    body: "外部で更新されたバージョンの Plexcord を使用しています。このバージョンに対するサポートは提供されていません。",
                    footer: "{{公式}}するか、サポートについてはパッケージプロバイダーにお問い合わせください。",
                    officially: "正式にサポートされているバージョンの Plexcord",
                    button: {
                        cancel: "キャンセル",
                        confirm: "ダウンロードページを見る",
                        now: "今すぐアップデート"
                    },
                    toast: {
                        success: "成功！ 再起動中...",
                        already: "すでに最新です！",
                        failed: "更新に失敗しました:("
                    }
                },
                custom: {
                    title: "待って！",
                    header: "Plexcord の独自バージョンを使用しています。このバージョンに対するサポートは提供されていません。",
                    body: "私たちは {{officialBuild}} のサポートのみを提供します。 {{switch}} するか、自分で問題に対処してください。",
                    footer: "この規則を無視した場合、サポートを受ける権利は剥奪されます。",
                    official: "公式リリース",
                    switch: "正式バージョンにアップグレードする",
                    button: {
                        confirm: "わかりました",
                        secondaryConfirm: "二度と見せないでください"
                    }
                }
            },
            button: {
                debug: "/plexcord-debug を実行します",
                plugins: "/plexcord-plugins を実行します",
                snippet: "コードスニペットを実行する"
            },
            toast: {
                success: "成功！",
                failed: "コード スニペットを実行できませんでした:(",
                failedOpenInvite: "招待状を開けませんでした。コンソールを確認してください:(",
                upload: "プラグインリストが正常にロードされました。",
                failedUpload: "プラグインリストファイルをロードできませんでした。 もう一度試してください。",
                unableGenerate: "プラグインリストの作成に失敗しました。"
            },
            dm: {
                warning: "サポートを求めて Plexcord プラグイン開発者にプライベート メッセージを送信しないでください。{{br}}代わりに、{{support}} サーバー: {{channel}} に参加して、Plexcord サポート チャネルを使用できます。"
            },
            alert: {
                title: "警告: プラグインが多すぎます",
                paragraph1: "100 を超えるプラグインがアクティブ化されていることがわかりました。",
                paragraph2: "プラグインの数によってはサポートを受けられない場合があります。",
                paragraph3: "あなたの問題は、プラグインの競合によって引き起こされている可能性が高くなります。",
                paragraph4: "問題を解決するには、一部のプラグインを無効にすることを検討してください。",
                paragraph5: "プラグイン リストはテキスト ファイルとして送信されます。",
            }
        },
        accountPanelServerProfile: {
            name: "アカウントパネルサーバープロファイル",
            description: "アカウントパネルを左クリックし、右クリックしてサーバープロファイルを表示します",
            option: {
                prioritizeServerProfile: {
                    label: "サーバープロファイルの優先順位付け",
                    description: "アカウントパネルを左クリックしたときにサーバープロファイルを優先する"
                }
            },
            context: {
                account: "アカウントプロフィールを表示",
                server: "サーバープロファイルの表示",
                prioritize: "サーバープロファイルの優先順位付け"
            }
        },
        altKrispSwitch: {
            name: "Altクリスプスイッチ",
            description: "ノイズ キャンセリング ポップアップを、Krisp と標準ではなく、なしと Krisp の間で切り替えます。"
        },
        alwaysAnimate: {
            name: "常にアニメーション化する",
            description: "アニメーション化できるものはすべてアニメーション化します。",
            option: {
                icons: {
                    label: "アイコン",
                    description: "サーバーアイコン、アバター、装飾などをいつでもアニメーション化できます。"
                },
                statusEmojis: {
                    label: "ステータス絵文字",
                    description: "ステータス絵文字を常に活気づけます。"
                },
                serverBanners: {
                    label: "サーバーバナー",
                    description: "サーバーのバナーは常にアニメーション化します。"
                },
                nameplates: {
                    label: "銘板",
                    description: "ネームプレートは常にアニメーション化します。"
                },
                roleGradients: {
                    label: "役割の移行",
                    description: "ロールの色の遷移を常にアニメーション化します。"
                }
            }
        },
        alwaysExpandProfiles: {
            name: "常にプロファイルを展開する",
            description: "常にユーザープロファイルを展開して開きます"
        },
        alwaysExpandRoles: {
            name: "AlwaysExpand役割",
            description: "プロファイルポップアップで常に役割リストを展開します",
            option: {
                hideArrow: {
                    label: "矢印を隠す",
                    description: "矢印を非表示にする"
                }
            }
        },
        animalese: {
            name: "アニマリーズ",
            description: "送信されるすべてのメッセージに対して動物の音声を再生します (多くのメッセージを再生します)",
            option: {
                volume: {
                    label: "騒音レベル",
                    description: "動物的な声の大きさ"
                },
                speed: {
                    label: "スピード",
                    description: "動物的な声の速さ"
                },
                pitch: {
                    label: "トン",
                    description: "トーンマルチプライヤ"
                },
                messageLengthLimit: {
                    label: "メッセージの長さの制限",
                    description: "処理するメッセージの最大長"
                },
                processOwnMessages: {
                    label: "独自のメッセージを処理する",
                    description: "自分のメッセージを音声化することも可能"
                },
                soundQuality: {
                    label: "音質",
                    description: "使える音質",
                    high: "高い",
                    med: "中くらい",
                    low: "低い",
                    lowest: "最低"
                }
            }
        },
        alwaysTrust: {
            name: "常に信頼する",
            description: "悪意のあるドメインと不審なファイルのポップアップを削除します",
            option: {
                domain: {
                    label: "ドメイン名",
                    description: "「悪意のあるドメイン」ポップアップを削除します"
                },
                file: {
                    label: "ファイル",
                    description: "「潜在的に危険な」ダウンロードポップアップを削除"
                },
                noDeleteSafety: {
                    label: "削除セキュリティなし",
                    description: "サーバーを削除するときにサーバー名の入力が不要になります。"
                },
                confirmModal: {
                    label: "確認ポップアップ",
                    description: "「この取引を確認してもよろしいですか?」ポップアップを削除します"
                }
            },
            alert: {
                title: "サーバーを削除しますか?",
                body: "このプロセスは永続的なものです。明らかでない場合は明記してください。",
                confirm: "シル",
                cancel: "キャンセル"
            }
        },
        anonymiseFileNames: {
            name: "ファイル名の匿名化",
            description: "アップロードされたファイル名を匿名化します。",
            option: {
                anonymiseByDefault: {
                    label: "デフォルトで匿名化する",
                    description: "デフォルトでファイル名を匿名化します。 必要に応じて、ファイルアップロードポップアップで無効にすることができます。"
                },
                spoilerMessages: {
                    label: "ネタバレメッセージ",
                    description: "ネタバレとしてマークされたファイルの名前を匿名化します。"
                },
                method: {
                    label: "方法",
                    description: "匿名化方法",
                    random: "ランダムなキャラクター",
                    consistent: "一貫性のある",
                    timestamp: "タイムスタンプ"
                },
                randomisedLength: {
                    label: "ランダム化の長さ",
                    description: "ランダムな文字長"
                },
                consistent: {
                    label: "一貫した匿名化",
                    description: "一貫した匿名化のための秘密鍵"
                }
            },
            using: {
                anonymous: "匿名のファイル名が使用されます",
                spoiler: "通常のファイル名が使用されます"
            },
            spoiler: {
                description: "ファイルのスポイラーをオンまたはオフにする",
                toggle: "ファイルのスポイラーをオンまたはオフにします (デフォルトはオン)",
                enabled: "スポイラーが作動しました！",
                disabled: "ネタバレは禁止です！"
            }
        },
        appleMusic: {
            name: "Apple Musicのリッチなプレゼンス",
            description: "Apple Music は視聴ステータスを Discord リッチ プレゼンスとして表示します",
            about: "カスタマイズ可能なイベント形式文字列の場合、いくつかのカスタム文字列を使用してトラック データをイベントに追加できます。 {{name}} はトラック名に、{{artist}} はアーティスト名に、{{album}} はアルバム名に置き換えられます。",
            button: {
                listen: "Apple Music のディンル",
                songLink: "ソングリンクで見る"
            },
            option: {
                activityType: {
                    label: "アクティビティの種類",
                    description: "どのようなアクティビティが表示されるか",
                    listening: "リスニング",
                    playing: "遊んでいる"
                },
                statusDisplayType: {
                    label: "ステータス表示の種類",
                    description: "メンバーリストにトラック/アーティスト名を表示",
                    off: "表示しない (一般的なリスニングメッセージを表示します)",
                    artist: "アーティスト名を表示",
                    track: "トラック名を表示"
                },
                refreshInterval: {
                    label: "リフレッシュ間隔",
                    description: "イベント更新間隔(秒)"
                },
                enableTimestamps: {
                    label: "タイムスタンプを有効にする",
                    description: "タイムスタンプを有効にするかどうか"
                },
                enableButtons: {
                    label: "ボタンを有効にする",
                    description: "ボタンを有効にするかどうか"
                },
                nameString: {
                    label: "名前文字列",
                    description: "イベント名の形式文字列"
                },
                detailsString: {
                    label: "詳細文字列",
                    description: "イベント詳細の形式文字列"
                },
                stateString: {
                    label: "ステータス文字列",
                    description: "イベントステータスの形式文字列"
                },
                largeImageType: {
                    label: "大画像タイプ",
                    description: "イベントアセット大きな画像タイプ",
                    album: "アルバムのカバーアート",
                    artist: "アーティストの絵",
                    disabled: "無効"
                },
                largeTextString: {
                    label: "大きなテキスト文字列",
                    description: "イベントエンティティの大きなテキスト形式の文字列"
                },
                smallImageType: {
                    label: "サムネイルの種類",
                    description: "イベントアセットのサムネイルタイプ",
                    album: "Apple Musicのロゴ",
                    artist: "アーティストの絵",
                    disabled: "無効"
                },
                smallTextString: {
                    label: "小さなテキスト文字列",
                    description: "イベントエンティティの小さなテキスト形式の文字列"
                }
            }
        },
        arRpc: {
            name: "WebRichPresence (arRPC)",
            description: "Discord Web で RPC を有効にする arRPC クライアント プラグイン (実験的)",
            use: {
                title: "arRPCの使い方",
                enable: "{{link}} をクリックしてサーバーを実行し、プラグインをアクティブ化します。",
                link: "GitHub リポジトリの指示に従います"
            },
            toast: {
                connected: "arRPC に接続されています",
                failed: "arRPC に接続できませんでした。機能していますか?",
                retry: "もう一度やり直してください"
            }
        },
        atSomeone: {
            name: "誰かで",
            description: "ランダムな人を @someone でタグ付けできます"
        },
        autoDNDWhilePlaying: {
            name: "再生中に自動停止",
            description: "ゲームの起動時にオンラインステータス (オンライン、アイドル、応答不可) を自動的に更新します",
            option: {
                statusToSet: {
                    label: "設定するステータス",
                    description: "ゲーム開始時に設定するステータス",
                    online: "オンライン",
                    dnd: "邪魔しないでください",
                    idle: "アイドル状態",
                    invisible: "見えない"
                },
                excludeInvisible: {
                    label: "非表示を除外する",
                    description: "ステータスが非表示に設定されている場合にステータスが自動的に変更されるのを防ぐ"
                }
            }
        },
        autoZipper: {
            name: "オートジッパー",
            description: "指定したファイルタイプとフォルダーを Discord にアップロードする前に自動的に圧縮します。",
            option: {
                extensions: {
                    label: "拡張機能",
                    description: "自動的に圧縮されるファイル拡張子のカンマ区切りのリスト (例: .psd、.blend、.exe、.dmg)"
                }
            }
        },
        bannersEverywhere: {
            name: "どこにでもあるバナー",
            description: "メンバーリストにバナーを表示します",
            option: {
                animate: {
                    label: "アニメーション",
                    description: "バナーをアニメーション化する"
                },
                preferNameplate: {
                    label: "ネームプレートを選ぶ",
                    description: "バナーの代わりにネームプレートを選択してください"
                }
            }
        },
        betterActivities: {
            name: "より良いアクティビティ",
            description: "メンバーリストにアクティビティアイコンを表示し、すべてのイベントを表示できるようにします",
            option: {
                memberList: {
                    label: "メンバー一覧",
                    description: "メンバーリストにアクティビティアイコンを表示する"
                },
                iconSize: {
                    label: "アイコンのサイズ",
                    description: "イベントアイコンのサイズ"
                },
                specialFirst: {
                    label: "スペシャルファースト",
                    description: "特別なイベントを最初に表示します (現在は Spotify と Twitch)"
                },
                renderGifs: {
                    label: "GIF'yer 作ってください",
                    description: "GIF のレンダリングを許可する"
                },
                removeGameActivityStatus: {
                    label: "ゲーム状態の削除",
                    description: "ゲームステータスアイコンとステータスを削除する"
                },
                userPopout: {
                    label: "ユーザーポップアップ",
                    description: "プロフィールのポップアップ/サイドバーにすべてのアクティビティを表示"
                },
                hideTooltip: {
                    label: "ツールチップを非表示にする",
                    description: "各地で活動を隠している"
                },
                allActivitiesStyle: {
                    label: "すべてのイベントのスタイル",
                    description: "すべてのイベントのスタイルを表示",
                    list: "リスト",
                    carousel: "スライダー",
                    left: "ソル",
                    right: "右"
                }
            }
        },
        betterAudioPlayer: {
            name: "BetterAudioPlayer",
            description: "スペクトログラフとオシロスコープのビジュアライザーをオーディオ添付プレーヤーに追加します",
            option: {
                oscilloscope: {
                    label: "オシロスコープ",
                    description: "スコープビジュアライザを有効にする"
                },
                spectrograph: {
                    label: "分光器",
                    description: "スペクトログラフビジュアライザを有効にする"
                },
                oscilloscopeSolidColor: {
                    label: "オシロスコープ ソリッドカラー",
                    description: "範囲にグラデーションの代わりに単色を使用する"
                },
                oscilloscopeColor: {
                    label: "連技オシロスコープ",
                    description: "単色が有効な場合のオシロスコープの色"
                },
                spectrographSolidColor: {
                    label: "分光器ソリッドカラー",
                    description: "分光器にはグラデーションの代わりに単色を使用します"
                },
                spectrographColor: {
                    label: "分光器の色",
                    description: "単色が有効な場合の分光器の色"
                },
                forceMoveBelow: {
                    label: "強制的に一番下に移動",
                    description: "ビジュアライザをボリューム コントロールの下に強制的に移動します"
                }
            },
            toast: {
                invalidColorFormat: "{{settingKey}} のカラー形式が無効です。「R、G、B」または「#RRGGBB」形式であることを確認してください"
            }
        },
        betterBanReasons: {
            name: "ベターバンの理由",
            description: "Discord の禁止ウィンドウで使用するカスタム理由を作成したり、デフォルトでオプションの代わりにテキスト入力を表示したりできます。",
            option: {
                reasons: {
                    label: "理由",
                    description: "あなたの特別な理由"
                },
                isTextInputDefault: {
                    label: "デフォルトのテキスト入力",
                    description: "デフォルトでは、選択メニューの代わりにテキスト入力が表示されます。 (「その他」をクリックするのと同じ)"
                }
            },
            title: "理由",
            placeholder: "どこから",
            add: "別の理由を追加"
        },
        betterBlockedUsers: {
            name: "BetterBlockedUsers",
            description: "ブロックされたユーザーのリストを検索し、設定で名前を選択できるようにすることができます。",
            placeholder: "ユーザーを検索..."
        },
        betterCommands: {
            name: "より良いコマンド",
            description: "さまざまな改善によりコマンド システムが強化されます。",
            option: {
                autoFillArguments: {
                    label: "自動入力引数",
                    description: "必要な引数だけでなく、すべての引数をコマンドに自動的に入力します。"
                },
                allowNewlinesInCommands: {
                    label: "コマンドで改行を許可する",
                    description: "コマンドエントリで改行を許可する (CTRL + Shift + Enter)"
                }
            },
            command: {
                refresh: {
                    description: "Discord はアプリのコマンドをネイティブに更新します",
                    user: "特定のユーザーが更新を試行する",
                    refreshing: "アプリケーションコマンドが更新されています...",
                    refreshed: "コマンドは正常に更新されました。",
                    failed: "コマンドの更新に失敗しました。 詳細についてはコンソールを確認してください。"
                }
            }
        },
        betterFolders: {
            name: "ベターフォルダー",
            description: "カスタム サイドバーにサーバー フォルダーを表示し、フォルダー関連の改善を追加します。",
            option: {
                sidebar: {
                    label: "サイドバー",
                    description: "カスタムサイドバーのフォルダー内のサーバーを表示"
                },
                sidebarAnim: {
                    label: "サイドバーのアニメーション",
                    description: "フォルダーのサイドバーを開くときにアニメーションを使用する"
                },
                closeAllFolders: {
                    label: "すべてのフォルダーを閉じる",
                    description: "フォルダー内にないサーバーが選択されている場合は、すべてのフォルダーを閉じます"
                },
                closeAllHomeButton: {
                    label: "ホームボタンですべてを閉じる",
                    description: "ホームボタンをクリックするとすべてのフォルダーが閉じます"
                },
                closeOthers: {
                    label: "その他を閉じる",
                    description: "フォルダーを開いているときに他のフォルダーを閉じる"
                },
                closeServerFolder: {
                    label: "サーバーフォルダーを閉じる",
                    description: "フォルダー内のサーバーが選択されている場合はフォルダーを閉じる"
                },
                forceOpen: {
                    label: "強制オープン",
                    description: "フォルダーのサーバーに切り替えたときにフォルダーを強制的に開く"
                },
                keepIcons: {
                    label: "アイコンを保護する",
                    description: "BetterFolders サイドバーでメイン サーバー バー フォルダーが開いているときに、メイン サーバー バー フォルダーにサーバー アイコンを表示し続ける"
                },
                showFolderIcon: {
                    label: "フォルダーアイコンを表示",
                    description: "BetterFolders サイドバーのフォルダー サーバーの上にフォルダー アイコンを表示する",
                    never: "一度もない",
                    always: "いつも",
                    moreThanOne: "複数のフォルダーを展開した場合"
                }
            }
        },
        betterGifAltText: {
            name: "BetterGifAltText",
            description: "GIF の代替テキストを単なる「GIF」から GIF タグ/ファイル名を含むように変更します。"
        },
        betterGifPicker: {
            name: "BetterGifPicker",
            description: "GIF ピッカーがデフォルトでお気に入りのカテゴリを開くようにします",
            option: {
                keepOpen: {
                    label: "セレクターを開いたままにする",
                    description: "GIF を選択した後も GIF ピッカーを開いたままにできるようにします"
                }
            }
        },
        betterInvites: {
            name: "より良い招待状",
            description: "招待者の有効期限を確認し、招待者のプロフィールを表示し、参加する前にサーバーをプレビューします (名前をクリックします)。",
            render: {
                tip: "この招待状は {{time}} 後に期限切れになります",
                header: "{{name}} があなたを {{server}} に招待しました",
                never: "一度もない"
            }
        },
        betterNotesBox: {
            name: "ベターノートボックス",
            description: "メモを非表示にするかスペルチェックを無効にする (設定で設定!!)",
            option: {
                hide: {
                    label: "メモを隠す",
                    description: "ユーザーポップアップのメモボックスを非表示にする"
                },
                noSpellCheck: {
                    label: "スペルチェックをオフにする",
                    description: "ノートのスペルチェックを無効にする"
                }
            }
        },
        betterPlusReacts: {
            name: "BetterPlusReacts",
            description: ":emoji: の前のプラス記号の数は、絵文字が追加されるメッセージを示します"
        },
        betterRoleContext: {
            name: "より良い役割コンテキスト",
            description: "ユーザープロファイルの役割を右クリックしたときに役割の色のコピー/役割の編集/役割アイコンを表示するオプションを追加します",
            option: {
                roleIconFileFormat: {
                    label: "役割アイコンのファイル形式",
                    description: "ロールアイコンを表示するときに使用するファイル形式"
                }
            },
            context: {
                copyColor: "役割の色のコピー",
                editRole: "役割の編集",
                viewIcon: "役割アイコンの表示"
            }
        },
        betterRoleDot: {
            name: "ベターロールドット",
            description: "RoleDot (アクセシビリティ設定) をクリックすると、役割の色がコピーされます。 また、RoleDot と色の名前を同時に使用することもできます。",
            option: {
                bothStyles: {
                    label: "ここでイキ・スティル",
                    description: "ロールポイントと色付きの名前の両方を表示"
                },
                copyRoleColorInProfilePopout: {
                    label: "プロファイルポップアップで役割の色のコピー",
                    description: "プロファイルポップアップで役割のドットをクリックして役割の色のコピーを許可します"
                }
            }
        },
        betterSessions: {
            name: "より良いセッション",
            description: "セッション (デバイス) メニューを強化します。 これにより、正確なタイムスタンプを確認したり、各セッションに一意の名前を付けたり、新しいセッションに関する通知を受け取ったりすることができます。",
            new: "新しい",
            newSessions: "新しいセッション:",
            rename: "名前を変更する",
            newDevice: "新しいデバイス名",
            resetName: "名前をリセット",
            save: "保存",
            cancel: "キャンセル",
            option: {
                backgroundCheck: {
                    label: "身元調査",
                    description: "バックグラウンドで新しいセッションを確認し、検出された場合は通知を表示します"
                },
                checkInterval: {
                    label: "制御範囲",
                    description: "バックグラウンドで新しいセッションを確認する頻度 (有効な場合) (分単位)"
                }
            }
        },
        betterSettings: {
            name: "より良い設定",
            description: "設定メニューを開くエクスペリエンスが向上しました",
            option: {
                disableFade: {
                    label: "トランジション効果を無効にする",
                    description: "クロスフェードアニメーションを無効にする"
                },
                organizeMenu: {
                    label: "編集メニュー",
                    description: "設定により、歯車アイコン メニューがカテゴリに分割されます"
                },
                eagerLoad: {
                    label: "高速読み込み",
                    description: "メニューを最初に開いたときの読み込みラグを解消します。"
                }
            },
            alert: {
                title: "再起動が必要です",
                restart: "再起動が必要な設定を変更しました。",
                confirm: "今すぐ再起動してください",
                cancel: "後で！"
            }
        },
        betterUploadButton: {
            name: "より良いアップロードボタン",
            description: "ワンクリックでインストール、右クリックでメニューを開く"
        },
        biggerStreamPreview: {
            name: "BiggerStreamプレビュー",
            description: "このプラグインを使用すると、ブロードキャストのプレビューを拡大できます",
            context: {
                viewPreview: "リリースプレビューを参照"
            }
        },
        blockKeywords: {
            name: "ブロックキーワード",
            description: "送信ユーザーがブロックされたかのように、特定のユーザー定義キーワードを含むメッセージをブロックします。",
            option: {
                blockedWords: {
                    label: "ブロックされた単語",
                    description: "ブロックする単語のカンマ区切りリスト"
                },
                useRegex: {
                    label: "正規品 クラン",
                    description: "メッセージの内容を確認するときに各値を正規表現として使用する (上級)"
                },
                caseSensitive: {
                    label: "大文字と小文字を区別",
                    description: "大文字と小文字を区別した検索を使用しますか?"
                },
                ignoreBlockedMessages: {
                    label: "ブロックされたメッセージを無視する",
                    description: "新しいメッセージバー (最近のメッセージ) を完全に無視します。"
                }
            }
        },
        blockKrisp: {
            name: "ブロッククリスプ",
            description: "Krisp のインストールを妨げます"
        },
        blurNSFW: {
            name: "ぼかしNSFW",
            description: "カーソルを合わせるまで、NSFW チャンネルの添付ファイルをぼかします",
            option: {
                blurAmount: {
                    label: "ぼかし量",
                    description: "ぼかしの量 (ピクセル単位)"
                },
                blurAllChannels: {
                    label: "すべてのチャンネルをぼかす",
                    description: "すべてのチャンネル（NSFW だけでなく）の添付ファイルをぼかします"
                }
            }
        },
        bypassPinPrompt: {
            name: "バイパスピンプロンプト",
            description: "ピン機能を使用するときにピンのプロンプトをスキップします"
        },
        bypassStatus: {
            name: "バイパスステータス",
            description: "おやすみモード中も特定のソースからの通知を受け取ります。 ユーザー/チャネル/サーバーを右クリックすると、おやすみモードをバイパスできます。",
            context: {
                remove: "ステータススキップを削除",
                add: "ステータススキップの追加"
            },
            option: {
                guilds: {
                    label: "サーバー",
                    description: "ホップを許可されたサーバー (サーバー上の任意の場所に ping が送信されたときに通知を受信)",
                    placeholder: "カンマで区切る"
                },
                channels: {
                    label: "チャンネル",
                    description: "スキップが許可されているチャネル (そのチャネルで ping が送信されると通知を受け取ります)",
                    placeholder: "カンマで区切る"
                },
                users: {
                    label: "ユーザー",
                    description: "スキップを許可されたユーザー (DM で送信されたすべてのメッセージの通知を受け取る)",
                    placeholder: "カンマで区切る"
                },
                allowOutsideOfDms: {
                    label: "外部DMを許可する",
                    description: "選択したユーザーが非 DM ステータスをスキップできるようにします (チャネル/サーバーのスキップと同様に機能しますが、選択したユーザーが送信したすべてのメッセージに適用されます)"
                },
                notificationSound: {
                    label: "通知音",
                    description: "通知音を再生するかどうかを決定します"
                },
                respectSilentPings: {
                    label: "サイレント ping を尊重する",
                    description: "サイレント ping を尊重します (@silent/通知を抑制)"
                },
                statusToUse: {
                    label: "使用事例",
                    description: "ホワイトリストに使用するステータス",
                    online: "オンライン",
                    idle: "アイドル状態",
                    dnd: "邪魔しないでください",
                    invisible: "見えない"
                }
            }
        },
        cakeDay: {
            name: "ケーキデイ",
            description: "ユーザーの誕生日を追跡し、ケーキのアイコンで表示します",
            context: {
                label: "誕生日",
                setBirthday: "誕生日を設定する",
                clearBirthday: "誕生日の削除",
                current: "現在："
            },
            option: {
                chat: {
                    label: "チャット",
                    description: "チャット内のユーザー名の横に円アイコンを表示する"
                },
                memberList: {
                    label: "メンバー一覧",
                    description: "メンバーリストにケーキアイコンを表示"
                },
                profileBadge: {
                    label: "プロフィールバッジ",
                    description: "ユーザープロフィールにケーキバッジを表示する"
                },
                notificationSound: {
                    label: "通知音",
                    description: "誕生日通知が送信されたときに音を鳴らす"
                },
                userList: {
                    label: "保存された誕生日",
                    description: "保存された誕生日を管理する"
                }
            },
            locations: {
                chat: {
                    label: "チャット",
                    description: "チャット内のユーザー名の横に"
                },
                memberList: {
                    label: "メンバー一覧",
                    description: "メンバーリストには"
                }
            },
            toast: {
                success: "誕生日の設定が成功しました！",
                invalid: "誕生日の形式が無効です! DD/MMのみ受け付けます。",
                cleared: "誕生日が正常に削除されました。"
            },
            notification: {
                title: "🎂 今日は誕生日です！",
                body: "今日は {{username}} の誕生日です!"
            },
            modal: {
                title: "{{username}} の誕生日を設定する",
                description: "誕生日を DD/MM 形式で入力してください (例: 25/12)",
                placeholder: "イーグル 25/12",
                current: "現在の誕生日:",
                set: "誕生日を設定する",
                cancel: "キャンセル",
                birthday: "今日は私の誕生日です！ 🎂",
                saved: "保存された誕生日",
                savedDesc: "誕生日はまだ記録されていません。 ユーザーを右クリックして誕生日を追加します。",
                today: "今日",
                remove: "取り除く",
                loading: "読み込み中...",
                save: "保存",
                edit: "編集"
            }
        },
        callTimer: {
            name: "コールタイマー",
            description: "すべての音声通話で通話タイマーを表示します",
            option: {
                format: {
                    label: "形式",
                    description: "コンパクトまたは人間が読める形式",
                    human: "30g 23秒 00日 42秒"
                },
                allCallTimers: {
                    label: "すべての通話タイマー",
                    description: "サーバー上のすべてのユーザーの通話タイマーを表示する"
                },
                showWithoutHover: {
                    label: "ホバリングなしで表示",
                    description: "ホバーしなくても常にタイマーを表示"
                },
                showRoleColor: {
                    label: "役割の色を表示",
                    description: "ユーザーの役割の色で表示 (ShowRoleColor プラグインが有効な場合)"
                },
                trackSelf: {
                    label: "自分自身に従ってください",
                    description: "自分のタイマーも表示"
                },
                showSeconds: {
                    label: "秒を表示",
                    description: "タイマーにも秒を表示"
                },
                watchLargeGuilds: {
                    label: "ビッグサーバーを監視する",
                    description: "大規模サーバー上のユーザーを追跡します。 アクティブな音声ユーザーが多数いる大規模なサーバーを使用している場合、これにより遅延が発生する可能性があります。 最大 2000 人のアクティブ音声ユーザーでテストしましたが、問題は発生しませんでした。"
                },
                fixUI: {
                    label: "ユーザーインターフェースの修正",
                    description: "場合によっては、タイマーがユーザー インターフェイスを破壊する可能性があります。 このオプションを有効にすることでこれを修正できます。"
                }
            }
        },
        channelBadges: {
            name: "チャンネルバッジ",
            description: "タイプに基づいてチャンネルにバッジを追加します",
            badge: {
                private: "このチャンネルはロックされています。",
                nsfw: "このチャンネルは NSFW とマークされています。",
                rules: "このチャネルはサーバー ルール チャネルです。"
            },
            option: {
                oneBadgePerChannel: {
                    label: "チャンネルごとに 1 つのバッジ",
                    description: "チャンネルごとにバッジを 1 つだけ表示します"
                },
                showTextBadge: {
                    label: "テキストバッジを表示",
                    description: "テキストバッジを表示"
                },
                showVoiceBadge: {
                    label: "音声バッジを表示",
                    description: "オーディオバッジを表示"
                },
                showCategoryBadge: {
                    label: "カテゴリバッジを表示",
                    description: "カテゴリバッジを表示"
                },
                showDirectoryBadge: {
                    label: "インデックスバッジを表示",
                    description: "インデックスバッジを表示"
                },
                showAnnouncementThreadBadge: {
                    label: "アナウンストピックバッジを表示",
                    description: "お知らせトピックバッジを表示する"
                },
                showPublicThreadBadge: {
                    label: "一般トピックのバッジを表示",
                    description: "パブリックトピックバッジを表示"
                },
                showPrivateThreadBadge: {
                    label: "特別なトピックのバッジを表示",
                    description: "カスタムトピックバッジを表示"
                },
                showStageBadge: {
                    label: "ショーステージバッジ",
                    description: "ショーステージバッジ"
                },
                showAnnouncementBadge: {
                    label: "アナウンスバッジを表示",
                    description: "アナウンスバッジを表示する"
                },
                showForumBadge: {
                    label: "フォーラムバッジを表示",
                    description: "フォーラムバッジを表示"
                },
                showMediaBadge: {
                    label: "メディアバッジを表示",
                    description: "メディアバッジを表示"
                },
                showNSFWBadge: {
                    label: "NSFWバッジを見せましょう",
                    description: "NSFWバッジを表示"
                },
                showLockedBadge: {
                    label: "ロックされたバッジを表示",
                    description: "ロックされたバッジを表示する"
                },
                showRulesBadge: {
                    label: "ルールバッジを表示",
                    description: "ルールバッジを表示"
                },
                showUnknownBadge: {
                    label: "不明なバッジを表示",
                    description: "不明なバッジを表示"
                },
                textBadgeLabel: {
                    label: "テキストバッジラベル",
                    description: "テキストバッジラベル",
                    default: "文章"
                },
                voiceBadgeLabel: {
                    label: "サウンドバッジラベル",
                    description: "オーディオバッジラベル",
                    default: "セス"
                },
                categoryBadgeLabel: {
                    label: "カテゴリバッジラベル",
                    description: "カテゴリバッジラベル",
                    default: "カテゴリ"
                },
                announcementBadgeLabel: {
                    label: "アナウンスバッジラベル",
                    description: "お知らせバッジラベル",
                    default: "ハーバー"
                },
                announcementThreadBadgeLabel: {
                    label: "お知らせトピックバッジラベル",
                    description: "お知らせトピックのバッジ ラベル",
                    default: "ニューストピック"
                },
                publicThreadBadgeLabel: {
                    label: "一般的なトピックのバッジ ラベル",
                    description: "一般的なトピックのバッジ ラベル",
                    default: "主題"
                },
                privateThreadBadgeLabel: {
                    label: "特別なトピックのバッジラベル",
                    description: "カスタムトピックバッジラベル",
                    default: "特別なトピック"
                },
                stageBadgeLabel: {
                    label: "ステージバッジラベル",
                    description: "ステージバッジラベル",
                    default: "シーン"
                },
                directoryBadgeLabel: {
                    label: "インデックスバッジラベル",
                    description: "インデックスバッジラベル",
                    default: "索引"
                },
                forumBadgeLabel: {
                    label: "フォーラムバッジラベル",
                    description: "フォーラムのバッジラベル",
                    default: "フォーラム"
                },
                mediaBadgeLabel: {
                    label: "メディアバッジラベル",
                    description: "メディアバッジラベル",
                    default: "メディア"
                },
                nsfwBadgeLabel: {
                    label: "NSFW バッジ ラベル",
                    description: "NSFWバッジラベル",
                    default: "NSFW"
                },
                lockedBadgeLabel: {
                    label: "ロックバッジタグ",
                    description: "ロックバッジタグ",
                    default: "ロックされています"
                },
                rulesBadgeLabel: {
                    label: "ルールバッジラベル",
                    description: "ルールバッジラベル",
                    default: "ルール"
                },
                unknownBadgeLabel: {
                    label: "不明なバッジのラベル",
                    description: "不明なバッジ ラベル",
                    default: "未知"
                },
                textBadgeColor: {
                    label: "テキストバッジの色",
                    description: "テキストバッジの色"
                },
                voiceBadgeColor: {
                    label: "オーディオバッジの色",
                    description: "サウンドバッジの色"
                },
                categoryBadgeColor: {
                    label: "カテゴリバッジの色",
                    description: "カテゴリバッジの色"
                },
                announcementBadgeColor: {
                    label: "アナウンスバッジの色",
                    description: "アナウンスバッジの色"
                },
                announcementThreadBadgeColor: {
                    label: "お知らせの件名バッジの色",
                    description: "お知らせトピックバッジの色"
                },
                publicThreadBadgeColor: {
                    label: "一般的なスレッドバッジの色",
                    description: "一般的なトピックのバッジの色"
                },
                privateThreadBadgeColor: {
                    label: "特別なトピックのバッジの色",
                    description: "カスタムトピックバッジの色"
                },
                stageBadgeColor: {
                    label: "ステージバッジの色",
                    description: "ステージバッジの色"
                },
                directoryBadgeColor: {
                    label: "インデックスバッジの色",
                    description: "インデックスバッジの色"
                },
                forumBadgeColor: {
                    label: "フォーラムバッジの色",
                    description: "フォーラムのバッジの色"
                },
                mediaBadgeColor: {
                    label: "メディアバッジの色",
                    description: "メディアバッジの色"
                },
                nsfwBadgeColor: {
                    label: "NSFWバッジの色",
                    description: "NSFWバッジの色"
                },
                lockedBadgeColor: {
                    label: "ロックされたバッジの色",
                    description: "ロックされたバッジの色"
                },
                rulesBadgeColor: {
                    label: "ルールバッジの色",
                    description: "ルールバッジの色"
                },
                unknownBadgeColor: {
                    label: "不明なバッジの色",
                    description: "不明なバッジの色"
                }
            },
            badges: {
                text: "文章",
                voice: "セス",
                category: "カテゴリ",
                announcement: "ハーバー",
                announcementThread: "ニューストピック",
                publicThread: "主題",
                privateThread: "特別なトピック",
                stage: "シーン",
                directory: "索引",
                forum: "フォーラム",
                media: "メディア",
                nsfw: "NSFW",
                locked: "ロックされています",
                rules: "ルール",
                unknown: "未知"
            },
            tooltip: {
                locked: "このチャンネルはロックされています。",
                nsfw: "このチャンネルは NSFW とマークされています。"
            }
        },
        channelTabs: {
            name: "チャンネルタブ",
            description: "頻繁にアクセスするチャンネルをブラウザのようにタブにグループ化します",
            open: "新しいタブで開く",
            animation: {
                title: "アニメーションコントロール",
                description: "チャンネル タブの特定のアニメーションを有効または無効にします。 各オプションは個別にオンまたはオフにできます。",
                placeholder: "有効にするアニメーションを選択してください...",
                tabHover: "タブホバー効果 (削除 + スケール)",
                tabSelection: "選択したタブのリフト アニメーション",
                tabDragDrop: "タブ ドラッグ アンド ドロップ (ゴースト + 並べ替え)",
                tabEnterExit: "タブイン/タブアウトスクロール (作成 + 閉じる)",
                tabIconPop: "アイコンポップ (選挙数の増加)",
                closeRotation: "閉じるボタン 戻る",
                plusPulse: "プラスボタンのパルス効果",
                mentionGlow: "メンションバッジの輝き",
                compactExpand: "コンパクトモードの拡張",
                selectedBorder: "選択したタブの青い枠線",
                selectedBackground: "選択したタブの背景色",
                tabShadows: "タブの影の効果",
                tabRepositioning: "タブの位置変更 (ソフト トランジション)",
                resizeHandle: "サイズ変更ハンドルフェード",
                questActivate: "アクティブ デューティの勾配"
            },
            bookmark: {
                label: "イェル・イミ",
                unknown: "不明なユーザー",
                folder: "フォルダ",
                add: "ブックマークに追加",
                edit: "ブックマークの編集",
                delete: "イェル・イミニ・シル",
                remove: "ブックマークから削除",
                removeFolder: "フォルダーからブックマークを削除",
                loading: "ブックマークを読み込んでいます...",
                noBookmarks: "ブックマークがありません。 開いているタブを追加したり、右クリックして非表示にしたりできます。",
                quests: "クエスト",
                messageRequests: "メッセージリクエスト",
                friends: "友達",
                shop: "店",
                library: "図書館",
                discovery: "発見",
                nitro: "ニトロ",
                icymi: "アイシミ",
                activity: "活動",
                specialPage: "スペシャルページ"
            },
            button: {
                save: "保存",
                delete: "シル",
                cancel: "キャンセル"
            },
            context: {
                label: "チャンネルタブのコンテキストメニュー",
                bookmark: "ChannelTabs ブックマーク コンテキスト メニュー",
                tab: "ChannelTabs タブのコンテキスト メニュー",
                compact: "コンパクト",
                bookmarkBar: "ブックマークバー",
                openAll: "ブックマーク内のすべてを開く",
                openNew: "新しいタブで開く",
                close: {
                    tab: "タブを閉じる",
                    otherTabs: "他のタブを閉じる",
                    tabsToRight: "右側のタブを閉じる",
                    tabsToLeft: "左側のタブを閉じる",
                    reopen: "閉じたタブを再度開く",
                    allTabs: "すべてのタブを閉じる"
                }
            },
            error: {
                noLogin: "アカウントにログインしていませんか?"
            },
            modal: {
                add: {
                    title: "ブックマークをフォルダに追加",
                    select: "フォルダーを選択してください",
                    create: "新規作成"
                },
                edit: {
                    title: "ブックマークの編集",
                    name: "ブックマーク名",
                    folder: "フォルダーの色"
                },
                delete: {
                    title: "本気ですか？",
                    description: "ブックマーク フォルダを削除すると、そのフォルダ内のブックマークもすべて削除されます。"
                }
            },
            option: {
                onStartup: {
                    label: "最初は",
                    description: "起動時にタブをどうするかを選択します",
                    nothing: "何もしない（友達タブを開く）",
                    remember: "前回のセッションのタブを記憶する",
                    open: "特定のタブを開く"
                },
                tabSet: {
                    label: "タブセット"
                },
                noPomeloNames: {
                    label: "ポメロの名前はありません",
                    description: "DM にはユーザー名の代わりに表示名を使用する"
                },
                showStatusIndicators: {
                    label: "ステータスインジケーターを表示する",
                    description: "DM のステータス インジケーターを表示する"
                },
                showBookmarkBar: {
                    label: "ブックマークバーを表示"
                },
                bookmarkNotificationDot: {
                    label: "ブックマーク通知ポイント",
                    description: "ブックマークの通知ドットを表示する"
                },
                widerTabsAndBookmarks: {
                    label: "大きなタブとブックマーク",
                    description: "大きなモニターでタブとブックマークを展開"
                },
                tabWidthScale: {
                    label: "タブ幅スケール",
                    description: "タブ幅スケール (パーセンテージ) – タブの端をドラッグして調整可能"
                },
                renderAllTabs: {
                    label: "すべてのタブをメモリ内に保持する",
                    description: "すべてのタブをメモリ内に保持し、タブ間の切り替えを高速化します (スクロールと状態はキャッシュされます)。"
                },
                switchToExistingTab: {
                    label: "既存のタブに切り替える",
                    description: "閲覧しているチャンネルのタブがすでにある場合は、それに切り替えます"
                },
                createNewTabIfNotExists: {
                    label: "タブがない場合は作成してください",
                    description: "チャンネルのタブがない場合は、新しいタブを作成します"
                },
                enableRapidNavigation: {
                    label: "クイックナビゲーションを有効にする",
                    description: "チャンネルをすばやく変更すると、新しいタブではなく現在のタブが変更されます。"
                },
                rapidNavigationThreshold: {
                    label: "高速ナビゲーションのしきい値",
                    description: "ミリ秒単位の時間間隔。 この期間中に新しいチャネルが開かれると、既存のタブが変更されます。"
                },
                tabBarPosition: {
                    label: "タブバーの位置",
                    description: "タブバーの位置",
                    top: "トップ",
                    bottom: "代替"
                },
                enableNumberKeySwitching: {
                    label: "数字キーでタブを切り替える",
                    description: "1 ～ 9 キーによるタブ切り替えを有効にする"
                },
                numberKeySwitchCount: {
                    label: "数字キーのタブ番号",
                    description: "数字キー (1 ～ 9) でアクセスできるタブの数"
                },
                enableCloseTabShortcut: {
                    label: "タブを閉じるショートカット",
                    description: "タブを閉じるキーボード ショートカットを有効にする"
                },
                enableNewTabShortcut: {
                    label: "新しいタブのショートカット",
                    description: "新しいタブを開くショートカットを有効にする"
                },
                enableTabCycleShortcut: {
                    label: "タブループのショートカット",
                    description: "タブ間を切り替えるためのショートカットを有効にする"
                },
                keybindsSection: {
                    label: "キーボードショートカット",
                    description: "ボタンをクリックし、目的のキーの組み合わせを押します。 CTRL、SHIFT、ALT などの修飾子がサポートされています。",
                    title: "キーボードショートカット",
                    reset: "すべてをデフォルトにリセット",
                    closeTab: {
                        label: "タブを閉じる",
                        description: "現在のタブを閉じるキーボード ショートカット"
                    },
                    newTab: {
                        label: "新しいタブ",
                        description: "現在のチャンネルで新しいタブを開くためのキーボード ショートカット"
                    },
                    cycleTabsForward: {
                        label: "前方タブループ",
                        description: "次のタブに移動するショートカット (最初のタブに移動)"
                    },
                    cycleTabsBackward: {
                        label: "バックバウンスループ",
                        description: "前のタブに移動するショートカット (最後のタブに移動)"
                    }
                },
                closeTabKeybind: {
                    label: "タブを閉じるショートカット",
                    description: "現在のタブを閉じるショートカット"
                },
                newTabKeybind: {
                    label: "新しいタブのショートカット",
                    description: "新しいタブを開くショートカット"
                },
                cycleTabForwardKeybind: {
                    label: "前方タブループ",
                    description: "次のタブに移動するショートカット"
                },
                cycleTabBackwardKeybind: {
                    label: "バックバウンスループ",
                    description: "前のタブに移動するショートカット"
                },
                showTabNumbers: {
                    label: "タブ番号を表示",
                    description: "タブに番号バッジを表示してショートカットを表示します"
                },
                tabNumberPosition: {
                    label: "タブ番号の位置",
                    description: "タブ上の番号バッジの位置",
                    left: "左 (プレアイコン)",
                    right: "右（投稿内容）"
                },
                animations: {
                    label: "アニメーション"
                },
                animationHover: {
                    label: "ホバーアニメーション",
                    description: "ホバリング中のリフト効果と拡大効果を有効にする"
                },
                animationSelection: {
                    label: "選択アニメーション",
                    description: "選択時にライト/フレームアニメーションを有効にする"
                },
                animationDragDrop: {
                    label: "ドラッグアンドドロップアニメーション",
                    description: "ドラッグ中のゴースト効果を有効にする"
                },
                animationEnterExit: {
                    label: "入退場アニメーション",
                    description: "タブの作成時/閉じる時のスクロールアニメーション"
                },
                animationIconPop: {
                    label: "アイコンポップアニメーション",
                    description: "選択中にアイコンの成長アニメーションを有効にする"
                },
                animationCloseRotation: {
                    label: "キルボタンリターン",
                    description: "シャットダウンアイコンにスピンアニメーションを追加"
                },
                animationPlusPulse: {
                    label: "プラスボタンパルス",
                    description: "新しいタブボタンのパルスアニメーションを有効にする"
                },
                animationMentionGlow: {
                    label: "スパークルについて言及する",
                    description: "メンションバッジで赤く光るアニメーションを有効にする"
                },
                animationCompactExpand: {
                    label: "コンパクト展開アニメーション",
                    description: "コンパクトタブのスムーズな拡張を可能にする"
                },
                animationSelectedBorder: {
                    label: "選択したタブの境界線のアニメーション",
                    description: "選択したタブの境界線とグロースタイルのアニメーションを有効にする"
                },
                animationSelectedBackground: {
                    label: "選択したタブの背景アニメーション",
                    description: "選択したタブの背景色のアニメーションによる変更を有効にする"
                },
                animationTabShadows: {
                    label: "タブの影のアニメーション",
                    description: "タブの影効果を有効にする"
                },
                animationTabPositioning: {
                    label: "タブの位置決めアニメーション",
                    description: "タブ切り替え時のスムーズな遷移アニメーション"
                },
                animationResizeHandle: {
                    label: "アニメーションのサイズ変更",
                    description: "サイズ変更ハンドルのフェード アニメーションを有効にする"
                },
                animationQuestsActive: {
                    label: "アクティブなアニメーション",
                    description: "タスクがアクティブなときにタブでグラデーションアニメーションを有効にする"
                },
                compactAutoExpandSelected: {
                    label: "選択時に自動展開",
                    description: "選択するとコンパクトタブを自動展開します"
                },
                compactAutoExpandOnHover: {
                    label: "ホバー時に自動展開",
                    description: "ホバー時にコンパクトタブを自動展開"
                },
                openInNewTabAutoSwitch: {
                    label: "新しいタブで開くと自動で切り替わる",
                    description: "新しいタブが開くと自動的にタブに切り替わります"
                },
                bookmarksIndependentFromTabs: {
                    label: "ブックマークの独立性",
                    description: "ブックマークはタブ バーに影響を与えずに個別に移動します"
                },
                showResizeHandle: {
                    label: "サイズ変更ハンドルを表示",
                    description: "タブの幅を調整するためのハンドルを表示します"
                },
                openNewTabsInCompactMode: {
                    label: "新しいタブをコンパクトに開く",
                    description: "新しく開いたタブはデフォルトでコンパクト モードで開きます"
                },
                newTabButtonBehavior: {
                    label: "新しいタブボタンの動作",
                    description: "新しいタブ (+) ボタンは右側に固定されるのではなく、タブに従います。"
                },
                oneTabPerServer: {
                    label: "サーバーごとに単一のタブ",
                    description: "サーバーのホップは 1 つだけとします。 新しいチャンネルを開いたときに同じタブを使用する"
                },
                maxOpenTabs: {
                    label: "開いているタブの最大数",
                    description: "同時に開くことができるタブの最大数 (0 = 無制限)"
                }
            },
            tabs: {
                startup: "ホームタブ",
                currently: "現在開いているタブを設定する"
            },
            toast: {
                notRestoring: "KeepCurrentChannel が有効になっているためタブが復元されない",
                failed: {
                    restore: "タブを復元できませんでした",
                    saved: "保存したタブの読み込みに失敗しました"
                }
            }
        },
        characterCounter: {
            name: "キャラクターカウンター",
            description: "メッセージボックスに文字カウンターを表示します",
            option: {
                colorEffects: {
                    label: "色の効果",
                    description: "文字数制限に近づいたときに色の効果をオンまたはオフにする"
                }
            }
        },
        cleanChannelGroups: {
            name: "CleanChannelGroups",
            description: "未読のメッセージがある場合でも、折りたたまれたカテゴリ内のすべてのチャネルが非表示になるだけです。"
        },
        cleanChannelName: {
            name: "クリーンチャンネル名",
            description: "チャンネル名からすべての絵文字と愚かな装飾を削除します"
        },
        clearURLs: {
            name: "URL のクリア",
            description: "送信した URL からトラッキング要素を自動的に削除します"
        },
        clickableRoles: {
            name: "クリック可能な役割",
            description: "ユーザー プロファイルとメンバー リストで役割をクリックすると、メンバーがどの役割を持っているかを確認できます。",
            modal: {
                loading: "メンバーを読み込んでいます...",
                noMembers: "メンバーが見つかりませんでした。",
                unknown: "不明な役割"
            }
        },
        clientSideBlock: {
            name: "クライアントサイドブロック",
            description: "ほぼすべてのコンテンツをローカルですべてのユーザーから非表示にすることができます",
            replying: "ブロックされたメッセージに返信する",
            option: {
                hideVc: {
                    label: "音声チャンネルから隠す",
                    description: "ブロックされたユーザーが含まれる音声チャネルを非表示にする"
                },
                usersToBlock: {
                    label: "ブロックするユーザー",
                    description: "カンマとスペースで区切られたユーザー ID"
                },
                hideBlockedUsers: {
                    label: "ブロックされたユーザーを非表示にする",
                    description: "ブロックされたユーザーをどこでも完全に非表示にします"
                },
                hideBlockedMessages: {
                    label: "ブロックされたメッセージを非表示にする",
                    description: "ブロックされたユーザーからのメッセージを完全に非表示にします (古い noblockedmessages プラグインと同じ)"
                },
                hideEmptyRoles: {
                    label: "空席の役割を非表示にする",
                    description: "すべてのメンバーがブロックされている場合は役割タイトルを非表示にする"
                },
                blockedReplyDisplay: {
                    label: "ブロックされた応答ビュー",
                    description: "非表示にした相手に返信するときにメッセージの代わりに表示されるもの",
                    displayText: "非表示のメッセージへの返信を示すテキストを表示する",
                    hideReply: "何も見せないでください"
                },
                guildBlackList: {
                    label: "サーバーのブラックリスト",
                    description: "機能が無効になるサーバーID"
                },
                guildWhiteList: {
                    label: "サーバーのホワイトリスト",
                    description: "機能が有効になるサーバー ID"
                }
            }
        },
        clientTheme: {
            name: "クライアントのテーマ",
            description: "古いクライアントテーマの実験のリメイク。 Discord クライアントテーマに色を追加する",
            title: "テーマカラー",
            add: "Discord クライアントテーマに色を追加する",
            option: {
                color: {
                    label: "色"
                },
                resetColor: {
                    label: "カラーをリセット"
                }
            },
            error: {
                modal: {
                    title: "テーマの見栄えが悪くなります。",
                    contrast: "選択した色はテキストとのコントラストが良くありません",
                    nitro: "Nitro テーマはサポートされていません",
                    switch: "{{oppositeTheme}} モードに切り替えます",
                    disable: "ニトロテーマを無効にする",
                    reset: "テーマカラーをリセット"
                }
            }
        },
        clipsEnhancements: {
            name: "クリップの機能強化",
            description: "クリップ FPS と期間のオプションをさらに追加し、さらに RPC タグを追加します。",
            minutes: "ちょっと",
            option: {
                richPresenceTagging: {
                    label: "リッチプレゼンスのタグ付け",
                    description: "いつクリップに既存のリッチ プレゼンスをタグ付けする必要がありますか?",
                    always: "いつも",
                    only: "イベント名の先頭または末尾が一致した場合のみ",
                    never: "一度もない"
                },
                enableScreenshotKeybind: {
                    label: "スクリーンショットホットキーを有効にする",
                    description: "スクリーンショットのホットキー機能を有効にする"
                },
                enableVoiceOnlyClips: {
                    label: "オーディオクリップのみを有効にする",
                    description: "オーディオのみのクリップを有効にする (ビデオなしのオーディオ)"
                },
                enableAdvancedSignals: {
                    label: "高度な信号を有効にする",
                    description: "高度なクリップ信号を有効にする (自動クリップトリガー)"
                },
                ignorePlatformRestriction: {
                    label: "プラットフォームの制限を無視する",
                    description: "プラットフォーム固有のクリッピングを許可します (保存エラーが発生する可能性があります)"
                },
                clipsLink: {
                    label: "クリップリンク",
                    link: "クリップ設定で FPS と再生時間のオプションを変更してください。"
                }
            }
        },
        colorSighted: {
            name: "色覚者",
            description: "2015 ～ 2017 年の Discord と同様に、色盲に優しいアイコンを状況から削除します。"
        },
        commandPalette: {
            name: "コマンドパレット",
            description: "キーボードを使用してインターフェイスを移動できるようになります。",
            action: {
                command: {
                    label: "コマンドの実行",
                    description: "ID を指定して別のパレット コマンドを実行します。 識別子がわからない場合は、セレクターを使用してください。"
                },
                settings: {
                    label: "設定ページを開く",
                    description: "Discordの設定ページに直接移動します。 チューザーからページを選択します。"
                },
                url: {
                    label: "URLを開く",
                    description: "リンクを開きます。 互換性を最大限に高めるには、https:// リンクを使用してください。"
                },
                macro: {
                    label: "マクロの実行",
                    description: "一連のコマンドを順番に実行します。 セレクターを介してステップを追加します。"
                }
            },
            category: {
                auto: "自動 (デフォルトのレイアウトを使用)",
                default: {
                    label: "クイックトランザクション",
                    description: "一般的な Plexcord のショートカット"
                },
                plugins: {
                    label: "プラグイン",
                    description: "Plexcord プラグインを有効、無効、および構成します。",
                    enable: {
                        label: "プラグインを有効にする"
                    },
                    disable: {
                        label: "プラグインを無効にする"
                    },
                    settings: {
                        label: "プラグイン設定"
                    },
                    toolbox: {
                        label: "プラグインのアクション"
                    },
                    chatbar: {
                        label: "チャットバーのボタン"
                    },
                    changes: {
                        label: "プラグインの変更"
                    }
                },
                context: {
                    label: "現在のコンテキスト",
                    description: "選択したチャネルとサーバーのアクション"
                },
                updates: {
                    label: "アップデート",
                    description: "Plexcord の最新情報を入手する"
                },
                discordSettings: {
                    label: "Discordの設定",
                    description: "Discord設定ページに移動します"
                },
                custom: {
                    label: "特別なコマンド",
                    description: "ユーザー定義のコマンド パレット エントリ"
                },
                sessions: {
                    label: "セッションツール",
                    description: "Discord セッションを管理するためのツール"
                },
                guilds: {
                    label: "サーバー",
                    description: "サーバーにすばやく移動します"
                },
                friends: {
                    label: "友達",
                    description: "急いで友達のところへ行きましょう"
                },
                action: {
                    label: "アクション",
                }
            },
            builtIn: {
                open: {
                    settings: {
                        plexcord: "Plexcord設定を開く",
                        plugin: "プラグイン設定を開く"
                    }
                },
                reload: {
                    label: "Discordを再インストールする",
                    description: "現在の Discord ウィンドウをリロードします"
                }
            },
            command: {
                enable: "{{プラグイン名}}を有効にする",
                enabled: "{{pluginName}} が有効になりました",
                disable: "{{プラグイン名}}を無効にする",
                disabled: "{{pluginName}} が無効になりました",
                failed: "コマンドは失敗しました:",
                toggleFailed: "{{pluginName}} を変更できませんでした。",
                pluginSettings: "{{pluginName}} の設定",
                untitled: "匿名コマンド",
                new: "新しいコマンド",
                error: {
                    enter: "コマンドIDを入力するか、以下を選択してください。",
                    noCommand: "この ID に一致するコマンドはありません。"
                },
                discord: {
                    account: "マイアカウントを開く",
                    privacy: "データとプライバシーをオープンにする",
                    notifications: "通知をオンにする",
                    voice: "オーディオとビデオをオンにする",
                    text: "テキストと画像を開く",
                    appearance: "ビューを開く",
                    accessibility: "オープンなアクセシビリティ",
                    keybinds: "キーバインドをオンにする",
                    advanced: "詳細設定を開く",
                },
                updates: {
                    check: {
                        label: "アップデートをチェックする",
                        description: "Plexcord のアップデートを確認する",
                        one: "アップデートが利用可能です",
                        multiple: "{{count}} 件のアップデートが利用可能",
                        none: "更新はありません",
                        failed: "アップデートの確認に失敗しました。"
                    },
                    changelog: {
                        label: "変更ログの表示",
                        description: "Plexcord が変更ログを開く"
                    }
                },
                read: {
                    mark: {
                        label: "{{channelLabel}} 既読としてマーク"
                    }
                },
                pin: {
                    open: {
                        label: "{{channelLabel}} ピンをオンにする"
                    },
                    toggle: {
                        label: "最後のコマンドの固定を切り替え"
                    }
                },
                channel: {
                    mute: {
                        label: "{{channelLabel}} ススター",
                        oneHour: "チャンネル {{channelLabel}} を 1 時間ミュートします",
                        untilTomorrow: "明日までチャンネル {{channelLabel}} をミュートします",
                    },
                    unmute: {
                        label: "{{channelLabel}}のミュートを解除する",
                    },
                    reopen: {
                        label: "最後に閉じたDMを再開する"
                    },
                    dm: {
                        open: {
                            label: "{{userLabel}} で DM を開く"
                        }
                    }
                },
                guild: {
                    settings: {
                        label: "{{guildLabel}}の設定を開きます"
                    },
                    navigate: {
                        label: "{{guildLabel}}サーバーに移動します"
                    }
                },
                session: {
                    thirtyMinutesDnd: "30 分間邪魔しないでください",
                    oneHourDnd: "1 時間の邪魔しないでください",
                    cancelStatusReset: "キャンセルステータスタイマー"
                },
                status: {
                    set: {
                        online: "設定ステータス: オンライン",
                        idle: "設定ステータス: アイドル",
                        dnd: "ステータスを設定: 応答不可",
                        invisible: "設定ステータス: 非表示"
                    }
                },
                toggle: {
                    streamer: "ストリーマーモードの切り替え",
                    mute: "セルフミュートの切り替え",
                    deafen: "自動聴覚障害の切り替え",
                },
                notification: {
                    clear: {
                        label: "デスクトップ通知をクリアする"
                    }
                },
                palette: {
                    settings: {
                        label: "コマンドパレット設定を開く",
                        description: "コマンドパレットプラグインの設定"
                    }
                },
                recent: {
                    label: "最近のコマンドを表示",
                    description: "最近実行したコマンドを表示します",
                    rerun: "最後のコマンドを再実行する"
                },
                plugin: {
                    reload: {
                        label: "すべてのプラグインを再インストールする",
                        description: "すべてのアクティブなプラグインを即座に再ロードしようとします"
                    },
                    enable: {
                        label: "すべてのプラグインを有効にする"
                    },
                    disable: {
                        label: "不要なプラグインをすべて無効にする"
                    },
                    restart: {
                        label: "Plexcordを再起動します",
                        description: "Discordクライアントウィンドウをリロードします"
                    }
                },
                quickCSS: {
                    label: "クイックCSSの切り替え"
                },
                transparentity: {
                    label: "ウィンドウの透明性の切り替え"
                },
                theme: {
                    open: {
                        label: "クライアントのテーマ設定を開く"
                    }
                }
            },
            modal: {
                searchPlaceholder: "コマンドを検索する",
                noCommand: "コマンドが見つかりません",
                add: {
                    title: "コマンドの追加"
                },
                choose: {
                    title: "コマンドの選択"
                },
                command: {
                    palette: {
                        label: "コマンドパレット",
                        placeholder: "コマンドを入力してください",
                        filtering: "{{タグ}}によるフィルタリング",
                        noCommand: "コマンドが見つかりません",
                        pin: "ピンコマンド",
                        unpin: "固定を解除する"
                    },
                    target: {
                        label: "対象コマンドID",
                        placeholder: "コマンドIDを入力してください",
                        choose: "コマンドの選択"
                    },
                    custom: {
                        label: "特別なコマンド",
                        description: "1) コマンドに名前を付けます · 2) オプションの説明/キーワード/タグ/カテゴリを追加します · 3) アクションを選択し、詳細を入力します (エイリアスとマクロの ID は既存のパレット コマンドと一致する必要があります)。",
                        auto: "自動 (デフォルト)",
                        expand: "拡大する",
                        collapse: "崩壊",
                        collapsed: {
                            label: "チケット",
                            description: "表示名",
                            advanced: {
                                hide: "詳細オプションを非表示にする",
                                show: "詳細オプションを表示"
                            },
                            subtitle: {
                                label: "説明",
                                placeholder: "オプションの小見出し"
                            },
                            keywords: {
                                label: "キーワード",
                                placeholder: "カンマ区切りのキーワード"
                            },
                            tags: {
                                label: "タグ",
                                placeholder: "カンマ区切りのタグ"
                            },
                            suggestion: {
                                label: "提案"
                            },
                            chooseCommand: {
                                label: "このコマンドがパレット内のどこに表示されるかを選択します。"
                            },
                            danger: {
                                label: "危険なものとして表示"
                            }
                        },
                        remove: "削除コマンド",
                        add: "コマンドの追加"
                    }
                },
                settings: {
                    noSelected: "ページが選択されていません",
                    current: "現在のページ",
                    choose: "ページを選択..."
                },
                url: {
                    url: "URL",
                    error: "http:// または https:// リンクを使用します。",
                    valid: "有効な URL を入力してください。",
                    open: {
                        external: "外部に開く",
                    }
                },
                macro: {
                    sequence: {
                        label: "スクリプト",
                        placeholder: "コマンド-a、コマンド-b"
                    },
                    addStep: "ステップの追加",
                    unknownId: "不明なコマンド ID"
                }
            },
            status: {
                online: "オンライン",
                idle: "アイドル状態",
                dnd: "邪魔しないでください",
                invisible: "見えない"
            },
            tag: {
                core: "ヒマワリの種",
                navigation: "散策",
                utility: "車両",
                developer: "開発者",
                customization: "カスタマイズ",
                plugins: "プラグイン",
                session: "セッション",
                context: "コンテクスト",
                custom: "特別",
                guilds: "サーバー",
                friends: "友達",
                other: "他の"
            },
            toast: {
                chat: {
                    button: {
                        unableToFind: "チャット ボタン「{{label}}」が見つかりません。",
                        failedToTrigger: "{{label}} をトリガーできませんでした。",
                        activated: "{{label}} が有効化されています。"
                    }
                },
                channel: {
                    mute: {
                        unavailable: "チャンネルミュートコントロールは利用不可",
                        muted: "チャンネルは沈黙されました。",
                        unmuted: "チャンネルはミュートされています。",
                        failed: "チャンネルのミュート状態を更新できませんでした。"
                    },
                    dm: {
                        no: "このセッションでは DM のクローズは記録されていません。",
                        reOpened: "前回閉じていたDMを再開しました。",
                        noAvailable: "DMはご利用できなくなりました。"
                    }
                },
                command: {
                    loop: "マクロ実行中にコマンドループが検出されました。",
                    notFound: "{{commandId}} コマンドが見つかりませんでした。",
                    unsupported: "サポートされていないカスタム コマンド アクションです。",
                    failedToRun: "{{label}}の実行に失敗しました。",
                    notMetadata: "コマンド パレット プラグインのメタデータは利用できません。"
                },
                guild: {
                    mute: {
                        unavailable: "サーバーのミュート制御は使用できません",
                        muted: "サーバーは沈黙しました。",
                        unmuted: "サーバーのミュートが解除されました。",
                        failed: "サーバーのミュート状態を更新できませんでした。"
                    },
                    settings: {
                        unable: "サーバー設定を開けません。",
                    }
                },
                panel: {
                    pin: {
                        unable: "固定パネルは開けられません。",
                    }
                },
                status: {
                    reset: {
                        canceled: "予定されていたステータスリセットは中止されました。",
                        unableToChange: "現時点ではステータスを変更することはできません。",
                        reverted: "ステータスは {{status}} として返されます。",
                        dnd: "{{duration}}分間は「おやすみ」にしてください。"
                    },
                    change: {
                        unableToChange: "現時点ではステータスを変更することはできません。",
                        changed: "ステータスが {{status}} に変更されました。"
                    }
                },
                read: {
                    marked: "{{channelLabel}} は既読としてマークされています。",
                    failed: "チャネルを既読としてマークできませんでした。"
                },
                route: {
                    unable: "{{宛先}}を開けません。",
                },
                notification: {
                    cleared: "すべての通知がクリアされました。",
                    failed: "通知をクリアできませんでした。",
                    notSupported: "通知の消去はサポートされていません。"
                },
                streamerMode: {
                    enabled: "ブロードキャスターモードが有効になっています。",
                    disabled: "ブロードキャスターモードは無効になっています。",
                },
                voice: {
                    micToggle: {
                        muted: "マイクは沈黙されました。",
                        unmuted: "マイクがオンになっています。"
                    },
                    deafenToggle: {
                        deafened: "あなたは今、聴覚障害者です。",
                        undeafened: "あなたはもう聴覚障害者ではありません。"
                    }
                },
                quickCSS: {
                    enabled: "高速CSSが有効になっています。",
                    disabled: "高速CSSは無効になっています。"
                },
                transparentity: {
                    enabled: "ウィンドウの透明度が有効になっています。",
                    disabled: "ウィンドウの透明度が無効になっています。"
                },
                plugin: {
                    disabled: {
                        label: "{{pluginName}} は無効になっています。",
                        disable: "{{pluginName}} は無効になっています。 このアクションを使用するには、プラグインを有効にしてください。"
                    },
                    required: {
                        label: "{{pluginName}} を再インストールするには再起動が必要です。"
                    },
                    stop: {
                        failed: "{{pluginName}} を停止できませんでした。"
                    },
                    restart: {
                        failed: "{{pluginName}} を再起動できませんでした。"
                    },
                    reload: {
                        label: "{{pluginName}} がリロードされました。",
                        noPlugin: "プラグインは再インストールされませんでした。",
                        reloaded: "{{count}} 個のプラグインが再インストールされました。"
                    },
                    toggle: {
                        enabled: "{{changed}} プラグインが有効になりました。",
                        disabled: "{{changed}} プラグインは無効になっています。",
                        noChanged: "プラグインのステータスは変更されていません。"
                    },
                    run: {
                        failed: {
                            label: "{{pluginName}}: {{actionLabel}} の実行に失敗しました。"
                        }
                    }
                }
            },
            display: {
                channel: {
                    current: "現在のチャンネル",
                    group: "グループDM",
                    direct: "ダイレクトメッセージ"
                },
                guild: {
                    current: "現在のサーバー",
                }
            },
            option: {
                hotkey: {
                    label: "ホットキー",
                    description: "コマンドパレットを開くために使用するホットキー",
                    recording: "任意のキーを押してください...",
                    reset: "リセット"
                },
                visualStyle: {
                    label: "ビジュアルスタイル",
                    description: "パレットビュー",
                    classic: "クラシック",
                    polished: "ポリッシュ（モダン）"
                },
                showTags: {
                    label: "タグを表示",
                    description: "コマンドのラベルを表示する"
                },
                enableTagFilter: {
                    label: "タグフィルターを有効にする",
                    description: "タグフィルターバーを表示"
                },
                customCommands: {
                    label: "特別なコマンド",
                    description: "カスタム コマンド パレット エントリを管理する"
                }
            },
            template: {
                alias: {
                    label: "ニックネームコマンド",
                    description: "既存のコマンドを反映します"
                },
                settings: {
                    label: "設定",
                    description: "Discord設定を開く"
                },
                url: {
                    label: "繋がり",
                    description: "外部URLを開きます"
                },
                macro: {
                    label: "マクロ",
                    description: "一連のコマンドを実行します"
                }
            }
        },
        consoleJanitor: {
            name: "コンソール管理人",
            description: "煩わしいコンソールメッセージ/エラーを無効にします",
            option: {
                disableLoggers: {
                    label: "ロガーを無効にする",
                    description: "Discordのロガーを無効にします"
                },
                disableSpotifyLogger: {
                    label: "Spotify ロガーを無効にする",
                    description: "アカウント情報やアクセスキーを漏洩するSpotifyロガーを無効にする"
                },
                whitelistedLoggers: {
                    label: "ホワイトリストに登録されたロガー",
                    description: "他のロガーが非表示であっても許可されるロガーのセミコロン (;) で区切られたリスト"
                },
                allowLevel: {
                    label: "許容レベル",
                    description: "これらのタイプのロガーを常に許可する",
                    filter: "フィルタリスト"
                }
            }
        },
        consoleShortcuts: {
            name: "コンソールのショートカット",
            description: "ウィンドウ上のさまざまな項目に対する短いショートカットを追加します。 リストに対して `shortcutList` を実行します。"
        },
        contentWarning: {
            name: "コンテンツ警告",
            description: "デフォルトで特定のトリガーワードをぼかすことができます。 ぼやけたコンテンツをクリックすると、表示されるようになります。",
            option: {
                flagged: {
                    label: "マーク",
                    flagged: "マークされた単語",
                    placeholder: "言葉"
                },
                onClick: {
                    label: "それをクリックしてください",
                    description: "マウスオーバー時だけでなく、クリック時にコンテンツを表示する"
                }
            }
        },
        copyEmojiMarkdown: {
            name: "絵文字マークダウンをコピー",
            description: "絵文字をフォーマットされたテキストとしてコピーできます (<a:blob_pwease:1402403381900742737>)",
            option: {
                copyUnicode: {
                    label: "Unicode コピー",
                    description: "デフォルトの絵文字の :name: の代わりに生の Unicode 文字をコピーします (👽)"
                }
            },
            context: {
                copy: "絵文字マークダウンをコピー"
            },
            toast: {
                success: "成功！ 絵文字のマークダウンがコピーされました。"
            }
        },
        copyFileContents: {
            name: "ファイルの内容をコピー",
            description: "テキストファイルの添付ファイルに内容をコピーするボタンを追加します",
            copied: "コピーしました！",
            large: "ファイルが大きすぎてコピーできません。",
            copyFileContents: "ファイルの内容をコピーする"
        },
        copyProfileColors: {
            name: "プロファイルの色をコピー",
            description: "ユーザーのプロフィールのグラデーションカラーをクリップボードにコピーするプラグイン。",
            copy: "プロファイルの色のコピー",
            toast: {
                noColor: "プロファイルの色が見つかりません!",
                copied: "プロファイルの色がクリップボードにコピーされました。",
                error: "プロファイルカラーのコピー中にエラーが発生しました!"
            }
        },
        copyStatusUrls: {
            name: "ステータスURLのコピー",
            description: "右クリックしてユーザーのステータス URL をコピーします",
            toast: {
                copied: "URLをコピーしました",
                error: "URL のコピー中にエラーが発生しました。詳細についてはコンソールを確認してください"
            }
        },
        copyStickerLinks: {
            name: "ステッカーリンクのコピー",
            description: "ステッカーのリンクをコピーして開く機能を追加します",
            context: {
                copy: "リンクをコピー",
                open: "リンクを開く"
            },
            toast: {
                success: "リンクがコピーされました!"
            }
        },
        copyUserMention: {
            name: "ユーザーメンションのコピー",
            description: "ユーザーのメンションをコピーするためのボタンをユーザーのコンテキスト メニューに追加します。 ValidUser で最適に動作します。",
            context: {
                copy: "ユーザーメンションをコピー"
            }
        },
        copyUserURLs: {
            name: "ユーザーURLのコピー",
            description: "ユーザーのコンテキスト メニューに「ユーザー URL をコピー」オプションを追加します。",
            context: {
                copy: "ユーザーのURLをコピー"
            }
        },
        crashHandler: {
            name: "クラッシュハンドラ",
            description: "再起動せずにクラッシュを管理し、可能であれば回復するためのヘルパー プラグイン",
            option: {
                attemptToPreventCrashes: {
                    label: "クラッシュを防ぐように努めてください",
                    description: "Discord のクラッシュを防ぎたいですか?"
                },
                attemptToNavigateToHome: {
                    label: "ホームページへのリダイレクトを試みます",
                    description: "クラッシュ後の回復でメインタブへのリダイレクトを試みます。"
                }
            },
            toast: {
                crashed: {
                    title: "Discordがクラッシュしました！",
                    body: "おっと :( Discord は短期間に 2 回クラッシュしました。回復は試行されません。ここをクリックしてサポート サーバーに参加してください。",
                    update: "いや、Discord がクラッシュしたばかりです…しかし朗報です。この問題を解決できる Plexcord アップデートがあります。 今すぐ更新しますか?",
                    recover: "回復しようとしています... ここをクリックしてサポートサーバーに参加してください!",
                    invalid: "招待リンクが無効または期限切れです。"
                }
            }
        },
        ctrlEnterSend: {
            name: "CtrlEnter送信",
            description: "Ctrl+Enter を使用してメッセージを送信します (カスタマイズ可能)",
            option: {
                submitRule: {
                    label: "投稿ルール",
                    description: "メッセージの送信方法",
                    ctrlEnter: "Ctrl+Enter (Enter または Shift+Enter で改行) (macOS では cmd+Enter)",
                    shiftEnter: "Shift+Enter (改行の場合は Enter)",
                    enter: "Enter (Shift+Enter で改行、Discord のデフォルト)"
                },
                sendMessageInTheMiddleOfACodeBlock: {
                    label: "コードブロックの途中でメッセージを送信する",
                    description: "コードブロックの途中でメッセージを送信する"
                }
            }
        },
        cursorBuddy: {
            name: "カーソルバディ",
            description: "カーソルに追従するスプライトを追加します。",
            modal: {
                furColor: "毛皮の色",
                outlineColor: "アナハト・レンギ"
            },
            option: {
                buddy: {
                    label: "バディ",
                    description: "カーソルフレンドを選択してください",
                    oneko: "良い",
                    fathorse: "太った馬"
                },
                speed: {
                    label: "スピード",
                    description: "相棒のスピード",
                    invalid: "速度は0より大きくなければなりません"
                },
                fps: {
                    label: "フレームレート (FPS)",
                    description: "あなたのバディのフレームレート",
                    invalid: "フレームレートは0より大きくなければなりません"
                },
                onekoSection: {
                    label: "良い"
                },
                furColor: {
                    label: "毛皮の色",
                    description: "oneko のファーの 16 進カラー"
                },
                outlineColor: {
                    label: "アナハト・レンギ",
                    description: "Oneko のアウトライン 16 進カラー"
                },
                fathorseSection: {
                    label: "太った馬"
                },
                size: {
                    label: "寸法",
                    description: "太った馬の大きさ",
                    invalid: "サイズは0より大きくなければなりません"
                },
                fade: {
                    label: "色褪せ",
                    description: "カーソルが近づいたときに馬がフェードするかどうか"
                },
                freeroam: {
                    label: "フリーローミング",
                    description: "馬がアイドル状態のときに自由に歩き回ることができるかどうか"
                },
                shake: {
                    label: "解任",
                    description: "馬が歩いているときに窓を振るかどうか"
                }
            }
        },
        customFolderIcons: {
            name: "カスタムフォルダーアイコン",
            description: "任意の png を使用してフォルダー アイコンをカスタマイズします",
            option: {
                solidIcon: {
                    label: "フラットアイコン",
                    description: "画像の背景には無地の背景を使用します"
                },
                folderIcons: {
                    label: "フォルダーアイコン",
                    description: "フォルダーアイコンの設定"
                }
            },
            modal: {
                change: "フォルダーアイコンのサイズを変更する",
                save: "保存",
                unset: "取り除く",
                set: "新しいアイコンを設定する",
                hover: "フォルダーを更新するように設定した後、フォルダーの上にマウスを移動する必要がある場合があります。"
            }
        },
        customIdle: {
            name: "カスタムアイドル",
            description: "Discordがアイドルモードになる（または自動アイドルモードを無効にする）までの時間を設定できます。",
            backOnline: "おかえり！ ボタンをクリックしてオンラインにアクセスします。 [X] をクリックすると、リロードされるまでアイドル状態になります。",
            exit: "アイドル状態を終了",
            option: {
                idleTimeout: {
                    label: "アイドルタイムアウト",
                    description: "Discord がアイドル モードになるまでの分数 (自動アイドル モードを無効にする場合は 0)"
                },
                remainInIdle: {
                    label: "アイドル状態を保つ",
                    description: "Discord に戻ったら、オンラインにすることを確認するまでアイドル状態のままにしてください"
                }
            }
        },
        customRPC: {
            name: "カスタムRPC",
            description: "完全にカスタマイズ可能なリッチ プレゼンスを Discord プロフィールに追加します",
            goTo: "{{portal}} に移動してアプリケーションを作成し、アプリケーション ID を取得します。",
            upload: "[リッチ プレゼンス] タブから画像をアップロードして画像キーを取得します。",
            image: "画像リンクを使用したい場合は、画像をダウンロードして {{imgur}} にアップロードし、画像を右クリックして [画像アドレスをコピー] を使用してリンクを取得します。",
            button: "自分のプロフィールには自分のボタンは表示されませんが、他の人には通常どおりに表示されます。",
            font: "一部の奇妙な Unicode 文字 ('𝖇ö𝖞𝖑𝖊 𝖞𝖆𝖟ı𝖑𝖆𝖗') は、リッチ プレゼンスが表示されない原因となる場合があります。代わりに通常の文字を使用してみてください。",
            placeholder: "値を入力してください",
            select: "オプションを選択してください",
            error: {
                appIdInvalid: "アプリケーション ID は有効な数値ではありません。",
                notice: "警告",
                sharing: "イベント共有が有効になっていないため、他の人はあなたのプライベート リッチ プレゼンスを見ることができません。",
                enable: "活性化",
                validStream: "投稿リンクは有効な URL である必要があります。",
                mustBeURL: "有効な URL である必要があります。",
                streamCharacters: "投稿リンクは 512 文字以下にする必要があります。",
                dontUse: "Discord リンクは使用しないでください。 代わりに Imgur 画像リンクを使用してください。",
                imgur: "Imgur リンクは画像に直接リンクする必要があります (例: https://i.imgur.com/...)。 画像を右クリックし、「画像アドレスをコピー」をクリックします。",
                tenor: "Tenor リンクは画像に直接リンクする必要があります (例: https://media.tenor.com/...)。 GIFを右クリックし、「画像アドレスをコピー」をクリックします。",
                required: "この項目は必須です。",
                tooLong: "{{maxLength}} 文字を超えてはなりません。",
                mustBeNumber: "数字でなければなりません。",
                mustBePositive: "正の数である必要があります。",
                startTimeInvalid: "開始時間は 0 より大きくなければなりません。",
                endTimeInvalid: "終了時刻は 0 より大きくなければなりません。"
            },
            option: {
                appId: {
                    label: "アプリケーションID",
                    description: "アプリID (必須)"
                },
                appName: {
                    label: "アプリケーション名",
                    description: "アプリ名 (必須)"
                },
                details: {
                    label: "詳細",
                    description: "詳細（1行目）"
                },
                detailsURL: {
                    label: "詳細URL",
                    description: "詳細については、クリック可能な URL"
                },
                state: {
                    label: "デュラム",
                    description: "ステータス（2行目）"
                },
                stateURL: {
                    label: "ステータスURL",
                    description: "クリック可能なステータスの URL"
                },
                partySize: {
                    label: "グループの規模",
                    description: "現在のグループ サイズ (最大グループ サイズと組み合わせて使用​​する必要があります)"
                },
                partyMax: {
                    label: "最大グループサイズ",
                    description: "最大グループ サイズ (現在のグループ サイズと併用する必要があります)"
                },
                type: {
                    label: "イベントの種類",
                    description: "イベントの種類",
                    playing: "遊んでいる",
                    streaming: "放送",
                    listening: "リスニング",
                    watching: "見てる",
                    competing: "レーシング"
                },
                streamLink: {
                    label: "リンクを投稿する",
                    description: "Twitch.tv または Youtube.com へのリンク (ブロードキャスト イベント タイプのみ)"
                },
                timestampMode: {
                    label: "タイムスタンプモード",
                    description: "タイムスタンプが示すもの",
                    none: "なし",
                    sinceDiscordOpen: "Discordがオープンしてから",
                    sameAsCurrentTime: "現在の時刻と同じ（24時間経ってもリセットされません）",
                    custom: "スペシャルタイム"
                },
                startTime: {
                    label: "開始時間 (ミリ秒単位)",
                    description: "開始タイムスタンプ (カスタム時間モードのみ)"
                },
                endTime: {
                    label: "終了時刻 (ミリ秒単位)",
                    description: "終了タイムスタンプ (カスタム時間モードのみ)"
                },
                imageBig: {
                    label: "ビッグビジュアルキー",
                    description: "大きなビジュアル キー ([リッチ プレゼンス] タブにインストールする必要があります)"
                },
                imageBigTooltip: {
                    label: "大きな視覚的手がかり",
                    description: "大きな画像の上にマウスを置くと表示されるヒント"
                },
                imageBigURL: {
                    label: "大きい画像のURL",
                    description: "大きな画像をクリックできる URL"
                },
                imageSmall: {
                    label: "小さなビジュアルスイッチ",
                    description: "小さなビジュアル キー ([リッチ プレゼンス] タブにインストールする必要があります)"
                },
                imageSmallTooltip: {
                    label: "ちょっとした視覚的手がかり",
                    description: "サムネイル画像にマウスを移動すると表示されるヒント"
                },
                imageSmallURL: {
                    label: "サムネイル画像のURL",
                    description: "小さい画像のクリック可能な URL"
                },
                buttonOneText: {
                    label: "ブトン 1 メトニ",
                    description: "ボタン1メットニ"
                },
                buttonOneURL: {
                    label: "ボタン1のURL",
                    description: "ボタン1の接続"
                },
                buttonTwoText: {
                    label: "ブトン 2 メトニ",
                    description: "ボタン 2 メットニ"
                },
                buttonTwoURL: {
                    label: "ボタン2のURL",
                    description: "ボタン2の接続"
                }
            }
        },
        customSounds: {
            name: "カスタムサウンド",
            description: "Discordのサウンドをカスタマイズします。",
            search: "音を探す",
            placeholder: "名前またはIDで検索",
            import: "イチェ・アクター",
            export: "輸出",
            reset: "すべてリセット",
            debug: "デバッグ",
            toast: {
                error: "カスタムオーディオファイルの読み込みエラー",
                exported: "{{count}} 個の設定がエクスポートされました (オーディオ ファイルは含まれません)",
                imported: "設定が正常にインポートされました",
                importError: "設定のインポート中にエラーが発生しました。 詳細についてはコンソールを確認してください。",
                reset: "すべてのサウンドが正常にリセットされました。",
                overrideDescription: "{{soundName}} のサウンドが変更されました",
                previewSound: "サウンドの再生中にエラーが発生しました。",
                playing: "カスタムサウンドが再生できませんでした。 ファイルが壊れている可能性があります。",
                invalidFile: "プレビュー用のカスタムオーディオファイルがありません",
                uploaded: "ファイルが正常にアップロードされました: {{fileName}}",
                uploadedError: "ファイルのアップロード中にエラーが発生しました: {{error}}",
                invalidExtension: "無効なファイルタイプです。 音声ファイルをアップロードしてください。",
                uploading: "ファイルをロード中...",
                deleted: "ファイルは正常に削除されました",
                deleteError: "ファイルの削除中にエラーが発生しました。",
                loadingError: "カスタムオーディオファイルの読み込みエラー"
            },
            button: {
                preview: "プレビュー",
                stop: "流れ",
                volume: "セス",
                soundSource: "オーディオソース",
                customFile: "スペシャルファイル",
                uploadNew: "新規アップロード",
                delete: "選択したファイルを削除"
            },
            option: {
                default: "デフォルト",
                custom: "特別",
                select: "ファイルを選択してください..."
            },
            type: {
                activityEnd: "イベントは終了しました",
                activityLaunch: "イベント開始",
                activityUserJoin: "イベントに参加したユーザー",
                activityUserLeft: "ユーザーがイベントから退席しました",
                asmrMessage: "ASMRメッセージ",
                bitMessage: "ビットメッセージ",
                bopMessage: "バップメッセージ",
                callCalling: "検索中です",
                callRinging: "電話の呼び出し音",
                clipError: "クリップエラー",
                clipSave: "クリップを保存しました",
                ddrDown: "DDR ダウン",
                ddrLeft: "DDRソル",
                ddrRight: "DDR右",
                ddrUp: "DDRアップ",
                deafen: "耳が聞こえない",
                discodo: "ディスク",
                disconnect: "切断されました",
                duckyMessage: "ダッキーのメッセージ",
                hangStatusSelect: "サスペンドステータスの選択",
                highfiveClap: "ハイタッチの拍手",
                highfiveWhistle: "ハイタッチホイッスル",
                humanMan: "人間",
                lofiMessage: "LoFi メッセージ",
                mention1: "メンション 1 (@role)",
                mention2: "メンション 2 (@everyone)",
                mention3: "メンション 3 (@ここ)",
                message1: "メッセージ 1 (一般)",
                message2: "メッセージ 2 (サーバー上の応答)",
                message3: "メッセージ 3 (DM およびグループ DM)",
                mute: "ミュート",
                overlayUnlock: "レイヤーのロックが解除されました",
                poggermodeAchievement: "ポガーモードの実績",
                poggermodeApplause: "ポガーモードの拍手",
                poggermodeEnabled: "ポガーモードが有効になりました",
                poggermodeMessage: "ポガーモードメッセージ",
                pttStart: "PTT を開始する",
                pttStop: "PTTストップ",
                reconnect: "再接続",
                robotMan: "ロボット・アダム",
                stageWaiting: "待機シーン",
                streamEnded: "放送終了",
                streamStarted: "放送開始",
                streamUserJoined: "ユーザーがブロードキャストに参加しました",
                streamUserLeft: "ユーザーがブロードキャストから退出した",
                success: "成功",
                undeafen: "耳をつんざく音を取り除く",
                unmute: "沈黙を取り除く",
                userJoin: "ユーザーが参加しました",
                userLeave: "ユーザー左",
                userMoved: "ユーザーが移動されました",
                vibingWumpus: "ウンパスが立ち往生している"
            }
        },
        customTimestamps: {
            name: "カスタムタイムスタンプ",
            description: "メッセージとツールチップのカスタム タイムスタンプ",
            demo: {
                cozy: "クリックするとカジュアル形式に切り替わります",
                compact: "クリックするとコンパクト形式に切り替わります",
                lastWeek: "このメッセージは先週送信されました",
                hover: "タイムスタンプの上にマウスを置くと、ツールチップの形式が表示されます",
                edit: "以下のフォーマットを編集してください。ここでライブ更新を確認してください"
            },
            modal: {
                title: "使用方法:",
                moment: "Moment.js のフォーマットに関するドキュメント",
                hint: "さらに、エントリでは以下を使用できます。",
                calendar: "たとえば、動的な日付フォーマットを有効にします。",
                today: "今日",
                yesterday: "昨日",
                relative: "次のような時間を与えます:",
                relativeTime: "4時間前",
                preview: "プレビュー",
                format: "カレンダー形式",
                howTo: "上記のタイムスタンプで使用される場合に [calendar] 値をフォーマットする方法は次のとおりです。"
            },
            option: {
                formats: {
                    label: "フォーマット",
                    description: "タイムスタンプ形式をカスタマイズする",
                },
                cozyFormat: {
                    label: "リリーフモッド",
                    description: "メッセージのリラックスモードに使用する時刻形式"
                },
                compactFormat: {
                    label: "コンパクトモッド",
                    description: "コンパクト モードおよびメッセージ上にマウスを移動するときに使用する時刻形式"
                },
                tooltipFormat: {
                    label: "ツールチップ",
                    description: "ツールチップで使用する時刻形式"
                },
                ariaLabelFormat: {
                    label: "アリアラベル",
                    description: "Aria タグで使用する時間形式"
                },
                sameDayFormat: {
                    label: "同日",
                    description: "今日の[カレンダー]形式",
                    default: "[ブグン] HH:mm:ss"
                },
                lastDayFormat: {
                    label: "昨日",
                    description: "[カレンダー] 昨日の形式",
                    default: "[細い] HH:mm:ss"
                },
                lastWeekFormat: {
                    label: "先週",
                    description: "[カレンダー] 先週の形式"
                },
                sameElseFormat: {
                    label: "年上の",
                    description: "[カレンダー] 古い日付の形式"
                }
            }
        },
        customUserColors: {
            name: "カスタムユーザーカラー",
            description: "どこにいても、任意のユーザーにカスタム カラーを追加できます。 testingTweaks および roleColorEverywhere と併用することを強くお勧めします",
            option: {
                dmList: {
                    label: "DMリスト",
                    description: "特別な色が割り当てられたユーザーの名前は、DM リストで色付けされます。"
                },
                colorInServers: {
                    label: "サーバー上の色",
                    description: "サーバーでも名前の色を変更する必要がありますか?"
                }
            },
            context: {
                setColor: "色の調整"
            },
            modal: {
                custom: "カスタムカラー",
                pick: "色を選ぶ",
                delete: "レコードの削除",
                save: "保存"
            }
        },
        dearrow: {
            name: "デアロー",
            description: "Dearrow を利用して、YouTube の埋め込みタイトルとサムネイルをセンセーショナルにしないようにします",
            option: {
                hideButton: {
                    label: "非表示ボタン",
                    description: "YouTube の埋め込みから Dearrow ボタンを非表示にします"
                },
                replaceElements: {
                    label: "項目の変更",
                    description: "埋め込みのどの要素を置き換えるかを選択してください",
                    everything: "すべて（タイトルとサムネイル）",
                    title: "タイトル",
                    thumbnail: "サムネイル"
                },
                dearrowByDefault: {
                    label: "デフォルトでディアロー",
                    description: "ビデオを自動的に削除します"
                }
            },
            tooltip: {
                dearrowed: "Dearrow はこの埋め込みに適用されました。クリックして復元します",
                dearrow: "クリックして適用します。"
            }
        },
        declutter: {
            name: "整理整頓",
            description: "プロフィール効果、ショップタブ、パワーアップなどの必須ではない UI 要素を削除して、Discord をクリーンアップします。",
            option: {
                userProfileHeader: {
                    label: "ユーザープロフィール"
                },
                removeNameplate: {
                    label: "銘板を外す",
                    description: "銘板を外します。"
                },
                removeProfileEffect: {
                    label: "プロファイル効果の削除",
                    description: "プロファイルを開いたときに表示されるアニメーション効果を削除します。"
                },
                removeClanTag: {
                    label: "クランタグを削除する",
                    description: "クランタグを削除します。"
                },
                alwaysShowUsername: {
                    label: "常にユーザー名を表示",
                    description: "ステータスではなく常にユーザー名が表示されます。"
                },
                accessibilityNotice: {
                    label: "アクセシビリティに関する警告",
                    description: "Discord には、アクセシビリティ設定にユーザー名スタイルのオプションがすでに組み込まれています。"
                },
                friendsListHeader: {
                    label: "フレンド/DMリストの上"
                },
                removeShopAboveDM: {
                    label: "DMリスト上のストアを削除",
                    description: "DM リストの上にあるストア ボタンを削除します。"
                },
                removeQuestsAboveDM: {
                    label: "DMリストからタスクを削除",
                    description: "DM リストの上にあるタスク ボタンを削除します。"
                },
                miscHeader: {
                    label: "様々な"
                },
                removeServerBoostInfo: {
                    label: "サーバーブースト情報の削除",
                    description: "チャネルリストの先頭にあるサーバー強化情報を削除します。"
                },
                removeBillingSettings: {
                    label: "支払い設定を削除する",
                    description: "支払い（請求書）設定を削除します。"
                },
                removeGiftButton: {
                    label: "ギフトボタンを削除",
                    description: "ギフト送信ボタンを削除します。"
                },
                removeUnavailableEmojiPicker: {
                    label: "使用できない絵文字ピッカーを削除する",
                    description: "絵文字ピッカーでアクセスできないカテゴリを削除します。"
                },
                removeAudioMenus: {
                    label: "サウンドメニューの削除",
                    description: "ミュートボタンと聴覚障害者ボタンの横にある矢印メニューを削除します。"
                },
                removeButtonTooltips: {
                    label: "ボタンのヒントを削除する",
                    description: "ボタンに表示されるツールチップを削除します。"
                }
            }
        },
        decodeBase64: {
            name: "DecodeBase64",
            description: "メッセージの Base64 コンテンツをデコードし、デコードされたコンテンツをコピーします。",
            right: {
                decode: "解決済みのコピー (左クリック) / Base64 解決済み (右クリック)",
                copy: "Base64 デコード (左クリック) / デコードされたコピー (右クリック)"
            },
            option: {
                clickMethod: {
                    label: "クリック方法",
                    description: "ボタンの動作を変更して、メッセージの Base64 コンテンツをデコードします。",
                    left: "左クリックして Base64 コンテンツをデコードします。",
                    right: "右クリックして Base64 コンテンツをデコードします。"
                }
            },
            modal: {
                title: "デコードされたBase64コンテンツ",
                content: "溶解内容",
                copy: "解決済みコンテンツ {{index}} をコピー",
                copied: "解決された内容がクリップボードにコピーされました。"
            }
        },
        decor: {
            name: "装飾",
            description: "独自のカスタム アバター装飾を作成して使用するか、プリセットからお気に入りを選択します。",
            presetPart: "{{name}} プリセットの一部",
            createdBy: "作成者: {{author}}",
            copy: "プリセットIDをコピー",
            file: "ファイル",
            your: {
                title: "装飾",
                subtitle: "右クリックすると独自の装飾を削除できます。"
            },
            option: {
                changeDecoration: {
                    label: "装飾の変更",
                    description: "アバターの装飾を変更するには、装飾を有効にしてクライアントを再起動します。",
                    also: "{{プロフィール}} ページから装飾デコレーションにアクセスすることもできます。",
                    profiles: "プロフィール"
                },
                baseUrl: {
                    label: "ベース URL",
                    description: "Dekor API URL"
                },
                agreedToGuidelines: {
                    label: "ルールに同意しました",
                    description: "受け入れられるルール"
                }
            },
            context: {
                decorationOptions: "装飾オプション",
                copyHash: "デコレーションハッシュをコピーする",
                deleteDecoration: "装飾の削除"
            },
            alert: {
                delete: {
                    title: "装飾の削除",
                    body: "{{decoration}} 装飾を削除してもよろしいですか?",
                    confirm: "シル",
                    cancel: "キャンセル"
                },
                logout: {
                    title: "サインアウト",
                    body: "Dekor からログアウトしてもよろしいですか?",
                    confirm: "サインアウト",
                    cancel: "キャンセル"
                }
            },
            button: {
                change: "装飾の変更",
                remove: "装飾を削除する",
                apply: "適用する",
                cancel: "キャンセル",
                browse: "ブラウズ",
                submit: "レビューのために送信する",
                continue: "デヴァム・エット",
                back: "戻る"
            },
            tooltip: {
                pendingReview: "すでに審査中の装飾品があります",
                pending: "審査待ち"
            },
            join: {
                tooltip: "Decor の Discord サーバーに参加して、デコレーションを確認し、新しいプリセットがリリースされたときに通知を受け取ります",
                button: "ディスコードサーバー"
            },
            create: {
                title: "オーナメントの作成",
                notViolate: "送信する前に、装飾が {{ガイドライン}} に違反していないことを確認してください。",
                guidelines: "ルール",
                file: "ファイルは APNG または PNG である必要があります。",
                fileHolder: "ファイルを選択してください",
                name: "この装飾品を指す場合は、この名前が使用されます。",
                nameHolder: "コンパニオンキューブ",
                nameTitle: "広告"
            },
            help: {
                update: "{{server}} に参加して、ダイレクト メッセージがデコレーションのレビューに関する最新情報を受け取ることを許可してください。",
                server: "デコルンディスコード"
            },
            guidelines: {
                hold: "待って",
                suspended: "装飾を送信すると、{{ガイドライン}}に同意したことになります。 これらの規則を読まない場合、将来さらに装飾を作成する権利が停止される可能性があります。",
                guidelines: "ルール"
            }
        },
        demonstration: {
            name: "デモンストレーション",
            description: "テーマのスクリーンショットを撮るためのプラグイン - 画像とテキストを識別する検閲者。",
            toolbox: {
                toggle: "検閲された"
            },
            keycode: "ホットキーを変更するには、{{keycode}} を確認してください。",
            this: "この車両の",
            okay: "わかった！",
            option: {
                keyBind: {
                    label: "ホットキー",
                    description: "押すとテーマのオンとオフを切り替えるボタン"
                },
                soundVolume: {
                    label: "騒音レベル",
                    description: "オン/オフ音の音量 (0 = オフ)"
                },
                showConfirmationModal: {
                    label: "確認ウィンドウを表示する",
                    description: "ウィンドウを表示してショートカットを思い出させる"
                }
            },
            switch: {
                note: "この設定は後で再度有効にすることができます",
                disable: "確認ウィンドウを無効にしますか?"
            },
            shortcut: "これにより、すべてのテキストが検閲されます。 これを無効にするショートカットを覚えておいてください。"
        },
        devCompanion: {
            name: "開発コンパニオン",
            description: "開発者アシスタントプラグイン。 何かが動作していない、または奇妙な動作をしている (おそらくバグ) を見つけた場合は、タグ付けするか dm して、MutanPlex に報告してください。ありがとうございます。",
            reconnect: "再接続",
            option: {
                notifyOnAutoConnect: {
                    label: "自動接続時に通知する",
                    description: "Dev Companion が自動的に接続するときに通知を表示しますか?"
                },
                usePatchedModule: {
                    label: "パッチモジュールを使用する",
                    description: "削除リクエストの場合は、元のモジュールではなく、パッチが適用された既存のモジュール (パッチが適用されている場合) で応答します。"
                },
                reloadAfterToggle: {
                    label: "再インストール後",
                    description: "プラグインの無効化/有効化コマンドを受信した後、再インストールします。"
                }
            },
            toast: {
                title: "開発コンパニオンが接続されました",
                connected: "WebSocketに接続されています",
                disconnected: "開発コンパニオンが切断されました",
                error: "開発コンパニオンエラー",
                reload: "再インストールが必要です",
                failed: "依存関係の初期化に失敗しました: {{failures}}",
                close: "四半期",
                stopping: "{{plugin}} プラグインの停止中にエラーが発生しました",
                starting: "{{plugin}} プラグインの初期化中にエラーが発生しました",
                noMessage: "エラーメッセージなし",
                noReason: "理由が提供されない"
            }
        },
        disableCallIdle: {
            name: "CallIdle を無効にする",
            description: "3 分後に DM 音声通話から自動的に追い出され、AFK 音声チャネルに移動されるのを無効にします。"
        },
        disableCameras: {
            name: "カメラを無効にする",
            description: "デフォルトで通話中のカメラを無効にします"
        },
        discordDevBanner: {
            name: "DiscordDevバナー",
            description: "ビルド ID 情報を表示する Discord 開発者バナーを有効にします。",
            about: "Discord 開発者バナー形式。 次の変数を使用できます。",
            preview: "プレビュー:",
            empty: "形式を空にすることはできません。",
            variables: {
                discord: {
                    title: "Discord変数",
                    icon: "不和アイコン",
                    banner: "開発者バナーアイコン",
                    channel: "Discord ビルド チャネル (例: Stable)",
                    build: "Discord のビルド番号 (例: 123456)",
                    hash: "Discord ビルド ハッシュ (例: 123456)"
                },
                plexcord: {
                    title: "プレックスコード変数",
                    icon: "プレックスコードのアイコン",
                    name: "プレックスコード名",
                    version: "Plexcord のバージョン (例: 1.0.0)",
                    hash: "Plexcord 構造ハッシュ (例: 123456)",
                    platform: "Plexcord が実行されるプラットフォーム (例: Dev Build)"
                },
                plextron: {
                    title: "Plextron のカスタム変数",
                    hashShort: "Plextron の短い構造ハッシュ (例: 123456789)",
                    platformType: "Plextron が実行されるプラットフォームの種類 (例: Dev Build)"
                },
                client: {
                    title: "クライアント変数",
                    icon: "デスクトップアイコン",
                    name: "クライアント名 (例: Discord Canary)",
                    version: "クライアントのバージョン (例: 1.0.0)",
                },
                electron: {
                    title: "電子変数",
                    icon: "電子アイコン",
                    version: "電子バージョン (例: 25.0.0)"
                },
                chromium: {
                    title: "クロム変数",
                    icon: "クロムのアイコン",
                    version: "Chromium エンジンのバージョン (例: 125.0.0.0)"
                },
                misc: {
                    title: "その他の変数",
                    newline: "改行文字"
                }
            }
        },
        dontFilterMe: {
            name: "ドントフィルターミー",
            description: "メッセージに自動モデレーションの準備完了リストにある用語が含まれている場合に警告します",
            alert: {
                title: "ちょっと待って！",
                content: "メッセージには、自動モデレーション準備リストにある用語が含まれています。 (用語「{{トリガー}}」)",
                content2: "あなたのメッセージはサーバーモデレーターによってブロックされ、処理される可能性が高くなります。",
                confirm: "とにかく送信する",
                cancel: "キャンセル"
            }
        },
        dontRoundMyTimestamps: {
            name: "DontRoundMyTimestamps",
            description: "相対タイムスタンプは常に切り捨てられるため、7.6y は 8y ではなく 7y になります。"
        },
        dragFavoriteEmotes: {
            name: "ドラッグお気に入りエモート",
            description: "ドラッグアンドドロップ機能を追加して、お気に入りの絵文字の順序を変更します"
        },
        dragify: {
            name: "ドラッグする",
            description: "ユーザー、チャネル、またはプレゼンターをチャットにドラッグ アンド ドロップして、メンションまたは招待を追加します。",
            option: {
                userOutput: {
                    label: "ユーザー出力",
                    description: "ユーザードロップアウト出力。",
                    mention: "言及しないでください",
                    id: "ユーザー ID (ID)"
                },
                channelOutput: {
                    label: "チャンネル出力",
                    description: "チャンネルリリース出力。",
                    mention: "#channel メンション",
                    link: "チャンネル接続",
                },
                inviteExpireAfter: {
                    label: "招待期間",
                    description: "招待リンクの有効期間。",
                    never: "一度もない",
                    thirtyMinutes: "30分",
                    oneHour: "1 瞬間",
                    sixHours: "6 瞬間",
                    twelveHours: "12 モーメント",
                    oneDay: "1日",
                    sevenDays: "7日間"
                },
                inviteMaxUses: {
                    label: "最大使用回数",
                    description: "招待状の最大使用制限。",
                    noLimit: "制限なし",
                    one: "1 使い方",
                    five: "5 使用方法",
                    ten: "10 使用法",
                    twentyFive: "25 使用法",
                    fifty: "50 の用途",
                    hundred: "100回の使用"
                },
                inviteTemporaryMembership: {
                    label: "一時的なメンバーシップの提供",
                    description: "招待された人に一時的なメンバーシップを付与します。",
                },
                reuseExistingInvites: {
                    label: "既存の招待状を再利用する",
                    description: "新しい招待状を作成するのではなく、既存の招待状を使用します。"
                },
                allowChatBodyDrop: {
                    label: "チャット本文へのドロップを許可する",
                    description: "テキストをチャットエリアに直接ドロップして追加できます。"
                }
            },
            toast: {
                failed: {
                    drop: "Dragify は操作を実行できませんでした。",
                },
                invite: {
                    created: "招待状が作成されました。",
                    unable: "招待状を作成できません。",
                    noChannel: "招待を作成できるチャネルがありません。",
                }
            },
            ghost: {
                user: "ユーザー",
                server: "プレゼンター",
                dm: "ダイレクトメッセージ",
                badge: {
                    channel: "チャネル",
                    thread: "タイトル",
                    voice: "セス",
                    forum: "フォーラム",
                    media: "メディア",
                    announcement: "発表",
                    dm: "DMで",
                    user: "ユーザー",
                    server: "プレゼンター"
                }
            }
        },
        elementHighlighter: {
            name: "要素ハイライター",
            description: "アイテムを簡単に強調表示して検査できます。",
            modal: {
                recording: "録音中...",
                reset: "リセット"
            },
            option: {
                keybind: {
                    label: "キーの割り当て",
                    description: "ハイライトの切り替え"
                },
                showClasses: {
                    label: "クラスを表示する",
                    description: "要素の CSS クラス名をツールチップに表示します"
                },
                showId: {
                    label: "IDを表示",
                    description: "要素の ID 属性をツールチップに表示します"
                },
                showFont: {
                    label: "フォントを表示",
                    description: "計算されたフォントファミリーとサイズを表示します"
                },
                showPadding: {
                    label: "パディングを表示",
                    description: "要素の内部間隔の値を表示します"
                },
                showMargin: {
                    label: "外側のマージンを表示",
                    description: "要素の外部空間の値を表示します"
                },
                showBorderRadius: {
                    label: "エッジの丸みを表示",
                    description: "要素の境界半径の値を表示します"
                },
                showPosition: {
                    label: "場所を表示",
                    description: "要素の CSS 位置タイプと Z インデックス値を表示します。"
                },
                showDisplay: {
                    label: "ビューを表示",
                    description: "要素のビュー タイプとそのフレックスまたはグリッド プロパティを表示します。"
                }
            },
            toast: {
                copied: {
                    color: "カラーがクリップボードにコピーされました!",
                }
            }
        },
        exitSounds: {
            name: "終了音",
            description: "オーディオ チャンネルから離れると、オーディオ パネルからサウンドが再生されます。",
            button: "グローバル出力サウンドとして設定",
            toast: {
                failedToPlay: "キリスト、いや！ 何か問題が発生しました。"
            },
            option: {
                soundGuildId: {
                    label: "音声サーバー ID (ID)",
                    description: "オーディオが存在するサーバーを選択します。",
                    placeholder: "サーバーを選択してください..."
                },
                soundId: {
                    label: "音声アイデンティティ (ID)",
                    description: "再生したいサウンドのIDを入力します。",
                    placeholder: "音声IDを入力してください..."
                }
            }
        },
        experiments: {
            name: "実験",
            description: "Discord の実験やその他の開発者専用機能へのアクセスを提供します。",
            modal: {
                about: {
                    title: "詳細情報",
                    body: "{{key}} を使用して Discord の開発者ツールを開くことができます"
                },
                warning: {
                    title: "注意！！",
                    body: "実験は未リリースの Discord 機能です。 これらは機能しない可能性があり、クライアントが壊れたり、アカウントが無効になったりする可能性もあります。",
                    notReponsible: "実験は、何をしようとしているのかわかっている場合にのみ使用してください。 Plexcord は、実験を有効にすることによって発生する可能性のある損害に対して責任を負いません。",
                    useAtOwnRisk: "実験が何をするのかわからない場合は、無視してください。 彼らが何をしているかは私たちに聞かないでください。おそらく私たちも知りません。",
                    serverSideFeatures: "いいえ、「クライアントに送信」ボックスをチェックするなどのサーバー側の機能は使用できません。"
                }
            },
            option: {
                toolbarDevMenu: {
                    label: "ツールバーの開発者メニュー",
                    description: "ヘルプ (?) ツールバー ボタン (チャットの右上) を Discord の開発者メニューに置き換えます。"
                }
            }
        },
        exportMessages: {
            name: "メッセージのエクスポート",
            description: "単一のメッセージ、ユーザーのすべてのメッセージ、またはチャネルのすべてのメッセージなど、メッセージをファイルにエクスポートできます。",
            option: {
                maxMessages: {
                    label: "最大メッセージ数",
                    description: "転送するメッセージの最大数 (0 = 無制限)"
                },
                includeAttachments: {
                    label: "添付ファイルを含める",
                    description: "転送に添付ファイル情報を含める"
                },
                includeEmbeds: {
                    label: "エンベドレリ・ダヒルら",
                    description: "転送に埋め込み情報を含める"
                },
                includeReactions: {
                    label: "リアクションを含める",
                    description: "転送に反応情報を含める"
                },
                includeComponents: {
                    label: "コンポーネントを含める",
                    description: "インポートにコンポーネント情報を含める"
                }
            },
            message: {
                invalid: "無効なメッセージ - 作成者がいません",
                unknownUser: "不明なユーザー",
                botEmbed: "ボット埋め込みメッセージ",
                attachments: "添付ファイル",
                unknown: "未知",
                noUrl: "URLがありません",
                embeds: "埋め込み者",
                title: "タイトル",
                description: "説明",
                url: "URL",
                footer: "アルトビルギ",
                author: "ライター",
                fields: "フィールド",
                components: "コンポーネント",
                component: "成分",
                interactiveElement: "インタラクティブ要素",
                reactions: "反応",
                errorFormatting: "フォーマットエラーメッセージ",
                unknownError: "不明なエラー",
                header: "{{titlePrefix}} {{displayName}}、{{channelName}} カナリンダ",
                from: "メッセージ -",
                direct: "ダイレクトメッセージ",
                exported: "輸出日",
                total: "総メッセージ数"
            },
            toast: {
                export: {
                    title: "メッセージのエクスポート",
                    body: "メッセージのエクスポートに失敗しました"
                },
                noMessages: {
                    title: "メッセージのエクスポート",
                    notFoundUser: "このユーザーへのメッセージは見つかりませんでした",
                    notFoundChannel: "このチャンネルにはメッセージが見つかりませんでした"
                },
                failed: {
                    title: "メッセージのエクスポート",
                    body: "メッセージのエクスポート中にエラーが発生しました"
                },
                userNotFound: {
                    title: "メッセージのエクスポート",
                    body: "ユーザーが見つかりません"
                },
                complete: {
                    title: "エクスポートが完了しました",
                    saved: "ファイルが保存されました",
                    downloaded: "ダウンロードされたファイル",
                    messages: "メッセージ"
                }
            },
            context: {
                exportMessage: "このメッセージをエクスポート",
                exportAll: "{{user}} のすべてのメッセージをエクスポートする",
                user: "ユーザー",
                exportAllChannel: "チャネルのすべてのメッセージをエクスポート"
            }
        },
        expressionCloner: {
            name: "ExpressionCloner",
            description: "絵文字とステッカーを自分のサーバーに複製できます (右クリック)",
            modal: {
                title: "固有名詞",
                invalidName: "名前は 2 ～ 32 文字で、英数字のみを含む必要があります。"
            },
            toast: {
                success: "{{name}} は {{guild}} サーバーに正常にクローン作成されました。",
                yourServer: "あなたのサーバー",
                failed: "クローン作成に失敗しました:",
                console: "何か問題が発生しました (コンソールを確認してください!)"
            },
            context: {
                clone: "{{type}} クローン",
                cloneName: "{{data}} クローン"
            }
        },
        f8break: {
            name: "F8ブレイク",
            description: "DevTools (+ ブレークポイント) が開いているときに F8 を押すと、クライアントが一時停止します。"
        },
        fakeNitro: {
            name: "フェイクニトロ",
            description: "偽の絵文字/ステッカーを送信したり、ニトロテーマを使用したり、ニトロ品質でストリーミングしたりできます",
            option: {
                enableEmojiBypass: {
                    label: "絵文字スキップを有効にする",
                    description: "偽の絵文字の送信を許可します (カスタム絵文字を使用する権限の欠如も回避します)"
                },
                emojiSize: {
                    label: "絵文字のサイズ",
                    description: "絵文字を送信するときに使用するサイズ"
                },
                transformEmojis: {
                    label: "絵文字を変換する",
                    description: "偽の絵文字を本物の絵文字に変換するかどうかを決定します"
                },
                enableStickerBypass: {
                    label: "ステッカースキップを有効にする",
                    description: "偽のステッカーの送信を許可します (ステッカーの使用許可の欠如も回避します)"
                },
                stickerSize: {
                    label: "ステッカーのサイズ",
                    description: "ステッカーを送るときに使用するサイズ"
                },
                transformStickers: {
                    label: "ステッカーを変換する",
                    description: "偽のステッカーを本物のステッカーに変換するかどうかを決定します"
                },
                transformCompoundSentence: {
                    label: "複合文の変換",
                    description: "複文内の偽の絵文字とステッカー (偽の絵文字やステッカーのリンク以外のコンテンツを含む文) を変換するかどうかを決定します。"
                },
                enableStreamQualityBypass: {
                    label: "ブロードキャスト品質スキップを有効にする",
                    description: "ニトロ品質でのストリーミングが可能"
                },
                useStickerHyperLinks: {
                    label: "ステッカーブリッジを使用する",
                    description: "偽のステッカーを送信するときにハイパーリンクを使用するかどうかを決定します"
                },
                useEmojiHyperLinks: {
                    label: "絵文字ブリッジを使用する",
                    description: "偽の絵文字を送信するときにハイパーリンクを使用するかどうかを決定します"
                },
                hyperLinkText: {
                    label: "ハイパーテキスト",
                    description: "ハイパーリンクで使用するテキスト。 {{NAME}} は絵文字/ステッカーの名前に置き換えられます。"
                },
                disableEmbedPermissionCheck: {
                    label: "埋め込み権限チェックを無効にする",
                    description: "偽の絵文字やステッカーを送信するときに埋め込み許可チェックを無効にするかどうかを決定します"
                }
            },
            modal: {
                sticker: "これはFakeNitroステッカーで、あなただけの本物のステッカーのように見えます。 プラグインを使用していない人向けのリンクとして表示されます。",
                emoji: "これはFakeNitro絵文字で、あなただけの本物の絵文字のように見えます。 プラグインを使用していない人向けのリンクとして表示されます。"
            },
            alert: {
                notice: {
                    title: "注意！",
                    body: "FakeNitro 絵文字またはステッカーを含むメッセージを送信/編集しようとしていますが、このチャンネルにリンクを埋め込む権限がありません。 このメッセージを送信してもよろしいですか? FakeNitro アイテムはリンクとしてのみ表示されます。",
                    footer: "この警告は FakeNitro 設定で無効にすることができます",
                    confirm: "とにかく送信する",
                    cancel: "キャンセル",
                    secondaryConfirm: "二度と見せないでください"
                },
                apngSticker: {
                    title: "注意！",
                    body: "このメッセージにはアニメーションの FakeNitro ステッカーが含まれており、このチャンネルにファイルを追加する権限がないため、送信できません。 続行するにはステッカーを剥がす必要があります。"
                }
            }
        },
        fakeProfileThemes: {
            name: "偽のプロフィールのテーマ",
            description: "プロフィールのテーマを提供します。 目に見えない 3y3 コーディングのおかげで、バイオンに隠れた色が追加されます。",
            button: {
                copy: "3y3コピー"
            },
            modal: {
                usage: "使用",
                preview: "プレビュー",
                intro: "このプラグインを有効にすると、互換性のあるプラグインを使用している他の人のプロフィールにカスタム カラーが表示されるようになります。",
                setColor: "独自の色を設定するには:",
                step1: "• 以下のカラーピッカーを使用して色を選択してください",
                step2: "• [{{コピー}}]ボタンをクリックします",
                step3: "• 非表示のテキストを about セクションの任意の場所に貼り付けます",
                pickers: "カラーピッカー",
                primary: "主要な",
                accent: "強調"
            },
            option: {
                nitroFirst: {
                    label: "ニトロファースト",
                    description: "両方が使用可能な場合のデフォルトのカラー ソース",
                    nitro: "ニトロカラー",
                    fake: "偽の色"
                }
            }
        },
        fakeProfileThemesAndEffects: {
            name: "偽のプロフィールテーマと効果",
            description: "プロフィールテーマとプロフィール効果を追加できます。 目に見えない 3y3 コーディングのおかげで、隠れた色と効果がバイオに追加されます。",
            option: {
                prioritizeNitro: {
                    label: "ニトロを優先する",
                    description: "優先順位を付けるリソース",
                    nitro: "ニトロ",
                    aboutMe: "私について"
                },
                hideBuilder: {
                    label: "クリエイターを隠す",
                    description: "ユーザー プロファイルおよびサーバー プロファイル設定ページで FPTE Creator を非表示にする"
                }
            },
            modal: {
                primary: "主要な",
                accent: "強調",
                effect: "効果",
                usage: {
                    title: "使用",
                    intro: "このプラグインを有効にすると、このプラグインを使用している他の人のプロフィールにカスタム テーマの色と効果が表示されます。",
                    setColor: "独自の色と効果を設定するには:",
                    step1: "プロファイル設定に移動します",
                    step2: "FPTE Creator を使用してプロファイルのテーマの色と効果を選択する",
                    step3: "{{コピー}}ボタンをクリックします",
                    step4: "プロフィール内の任意の場所に非表示のテキストを貼り付けます"
                }
            },
            toast: {
                copied: "FPTE がクリップボードにコピーされました。",
                empty: "FPTE ジェネレーターは空です。 コピーするものは何もありません！"
            },
            button: {
                copyFPTE: "FPTEコピー",
                reset: "リセット",
                preview: "FPTE クリエイター プレビュー",
                buildBackwards: "下位互換性のある FPTE を作成する",
                moreCharacters: "さらに多くのキャラクターが使用されます"
            }
        },
        fastDeleteChannels: {
            name: "高速削除チャネル",
            description: "チャンネルを削除するためのゴミ箱アイコンを追加します",
            option: {
                keyBind: {
                    label: "ホットキー",
                    description: "ゴミ箱の開閉に使用する鍵です。"
                },
                reqCtrl: {
                    label: "Ctrlキーが必要です",
                    description: "ゴミ箱を開くには Ctrl キーを押し続ける必要があります。"
                },
                reqShift: {
                    label: "Shift キーが必要です",
                    description: "ゴミ箱を開くには、Shift キーを押し続ける必要があります。"
                },
                reqAlt: {
                    label: "Alt キーが必要です",
                    description: "ゴミ箱を開くには、Alt キーを押し続ける必要があります。"
                }
            }
        },
        favoriteEmojiFirst: {
            name: "好きな絵文字最初",
            description: "お気に入りの絵文字が絵文字オートコンプリート リストの先頭に表示され、絵文字のニックネームも提供されます。",
            option: {
                aliases: {
                    label: "ニックネーム",
                    description: "絵文字のニックネームを管理します。"
                },
                clearAll: {
                    label: "すべてクリア",
                    description: "すべてのニックネームを削除します。"
                }
            },
            modal: {
                clear: {
                    title: "すべてのエイリアスを削除",
                    description: "これにより、保存した絵文字のニックネームが削除されます。",
                    confirm: "すべてのニックネームを削除する"
                },
                set: {
                    title: "ニックネームを設定する",
                    description: "{{emoji}} のニックネームを設定します",
                    placeholder: "ニックネーム、例: 'ハッピー'",
                    save: "保存",
                    error: "重複したニックネーム"
                }
            },
            toast: {
                set: "{{emoji}} に設定されたニックネーム",
                clearAll: "すべての絵文字ニックネームが削除されました",
                failedDeleted: "エイリアスの削除に失敗しました",
                removed: "{{alias}} のエイリアスが削除されました",
                failedRemove: "エイリアスの削除に失敗しました",
                duplicate: "重複したニックネーム",
                failedSave: "ニックネームが登録できませんでした"
            },
            button: {
                edit: "ニックネームの編集",
                set: "ニックネームを設定する"
            }
        },
        favoriteGifSearch: {
            name: "お気に入りGif検索",
            description: "お気に入りの GIF に検索バーを追加します。",
            placeholder: "お気に入りのGIFを検索",
            option: {
                searchOption: {
                    label: "検索オプション",
                    description: "URLのどの部分を検索したいのか",
                    url: "すべてのURL",
                    path: "パスのみ (/somegif.gif)",
                    hostandpath: "ホストとパス (tenor.com somegif.gif)"
                }
            }
        },
        favouriteAnything: {
            name: "お気に入り何でも",
            description: "任意の画像をお気に入りに追加"
        },
        fileDownloadButton: {
            name: "ファイルダウンロードボタン",
            description: "ファイルの右上隅にダウンロード ボタンを追加します"
        },
        findReply: {
            name: "返信を見つける",
            description: "チャネル内のメッセージに対する最も古い返信にジャンプします (過去の会話を追跡しやすくなります)。",
            context: {
                jump: "回答に進む"
            },
            toast: {
                navigate: "下部パネルを使用して回答を参照してください。",
                container: "コンテナ要素が見つかりません。",
                couldntFind: "応答メッセージが見つかりませんでした。"
            },
            option: {
                includePings: {
                    label: "言及を含める",
                    description: "また、作成者に直接送信されたメッセージも検索します。"
                },
                includeAuthor: {
                    label: "著者を含める",
                    description: "特定の投稿に対する返信だけでなく、投稿者全般に対する返信も検索します"
                },
                hideButtonIfNoReply: {
                    label: "応答がない場合はボタンを非表示にする",
                    description: "メッセージに対する応答がない場合はボタンを非表示にします"
                }
            }
        },
        fixCodeblockGap: {
            name: "コードブロックギャップを修正",
            description: "コードのブロックとその下のテキストの間のスペースを削除します。"
        },
        fixFileExtensions: {
            name: "ファイル拡張子の修正",
            description: "可能であれば、互換性のあるサポートされている形式に名前を変更してファイル拡張子を修正します"
        },
        fixImagesQuality: {
            name: "画像の修正品質",
            description: "オリジナルのソースの使用を強制することで画像の品質を向上させます",
            option: {
                originalImagesInChat: {
                    label: "チャットで元の画像を表示する",
                    description: "チャットでは元の画像も表示します。 警告: 上記の警告をお読みください"
                }
            },
            modal: {
                about: {
                    title: "デフォルトの動作は次のとおりです。",
                    body: "&mdash;最適化されたフル解像度の画像がチャットにロードされます。",
                    body2: "&mdash;画像ウィンドウ (画像モーダル) に、元の画像がロードされます。",
                    body3: "チャットで元の画像を有効にすることもできますが、次の注意点に注意してください。",
                    warning: "&mdash;チャット内のアニメーション画像 (GIF、WebP など) は、アプリケーションにフォーカスがある場合でも、常にアニメーション化されます。",
                    warning2: "&mdash;パフォーマンス上の問題が発生する可能性があります。"
                }
            }
        },
        fixSpotifyEmbeds: {
            name: "Spotify埋め込みを修正する",
            description: "Spotify の埋め込み音が大きすぎるのを修正し、音量をカスタマイズできるようにします",
            option: {
                volume: {
                    label: "騒音レベル",
                    description: "Spotify 埋め込み用に調整する音量パーセンテージ。 10%を超えると高すぎる"
                }
            }
        },
        fixYoutubeEmbeds: {
            name: "YouTubeの埋め込みを修正する",
            description: "Discord での YouTube 動画の視聴のブロックをバイパスします (UMG などによる)"
        },
        followUser: {
            name: "ユーザーをフォローする",
            description: "ユーザーのコンテキスト メニューにフォロー オプションを追加します。 常に同じ音声チャンネルを使用できるようにします",
            indicatorTooltip: "{{user}} がフォローされています (クリックして手動でトリガーし、右クリックしてフォローを解除します)",
            unknownUser: "不明なユーザー",
            option: {
                executeOnFollow: {
                    label: "フォローすると適用される",
                    description: "ユーザーをフォローするときは、同じ音声チャネルを使用していることを確認してください"
                },
                onlyManualTrigger: {
                    label: "手動トリガーのみ",
                    description: "インジケーターがクリックされた場合のみトリガー"
                },
                followLeave: {
                    label: "フォローされた場合",
                    description: "フォローしたユーザーが離れるときは自分も離れる"
                },
                autoMoveBack: {
                    label: "自動で戻る",
                    description: "移動すると、フォローしているユーザーの音声チャンネルに自動的に戻ります"
                },
                followUserId: {
                    label: "フォローしたユーザーID",
                    description: "フォローしたユーザーID"
                },
                channelFull: {
                    label: "チャンネルがいっぱい",
                    description: "チャンネルがもういっぱいでない場合は、そこに移動してみてください"
                }
            },
            toast: {
                channelFull: "チャンネルがいっぱいです",
                newVc: "フォローしているユーザーが新しい音声チャンネルに切り替えました",
                insufficientPermissions: "音声チャネルに入るには十分な権限がありません",
                sameVc: "あなたはすでに同じチャンネルにいます",
                disconnect: "ユーザーのフォローを解除し、切断されました",
                notFollowing: "フォローしていたユーザーは退会しましたが、あなたはフォローを解除しませんでした",
                notVc: "フォローされているユーザーは音声チャンネルに参加していません"
            },
            context: {
                follow: "フォローする",
                unfollow: "フォローを解除する"
            }
        },
        fontLoader: {
            name: "フォントローダー",
            description: "Google Fonts経由で任意のフォントをインストールします",
            option: {
                selectedFont: {
                    label: "選択したフォント",
                    description: "現在選択されているフォント"
                },
                fontSearch: {
                    label: "フォント検索",
                    description: "Google Fonts経由でフォントを検索して選択します"
                },
                applyOnCodeBlocks: {
                    label: "コードブロックに適用する",
                    description: "コードブロックにフォントを適用する"
                }
            },
            toast: {
                failedLoad: "フォントの読み込みに失敗しました"
            },
            modal: {
                settings: {
                    title: "Google Fonts'ta Ara",
                    description: "適用するフォントを選択してください",
                    placeholder: "フォントを検索...",
                    previewText: "パジャマを着た患者はすぐに油まみれの運転手を信頼した",
                    authors: "{{著者}} 著"
                }
            }
        },
        forceOwnerCrown: {
            name: "フォースオーナークラウン",
            description: "サーバーが大きい場合でも、ユーザー名の横にサーバー所有者の王冠が強制的に表示されます。"
        },
        forwardAnywhere: {
            name: "どこでも進む",
            description: "転送が失敗した場合、メッセージは通常のメッセージとして送信されます。 NSFW コンテンツの送信も可能になります。",
            option: {
                forwardPreface: {
                    label: "転送プレフィックス",
                    description: "送信メッセージの先頭にどのステートメントを追加する必要がありますか?"
                }
            },
            context: {
                attachments: "添付ファイル",
                forwarded: "転送元:"
            }
        },
        freaky: {
            name: "気まぐれな",
            description: "/freaky コマンドを使用すると、奇妙なフォントでメッセージを送信できます。",
            command: {
                freaky: "それは奇妙でした。",
                message: "奇妙なフォントでメッセージを送信する"
            },
            option: {
                addFreakyEnding: {
                    label: "奇妙なエンディングを追加する",
                    description: "最後に👅または❤️を追加します"
                }
            }
        },
        frequentQuickSwitcher: {
            name: "頻繁に使用するクイックスイッチャー",
            description: "クイック スイッチ ウィンドウ内の結果を、最も頻繁に使用するチャンネルに置き換えてフィルターします。"
        },
        friendCloud: {
            name: "フレンドクラウド",
            description: "/friendcloud コマンドを追加して、最も頻繁にやり取りするユーザーを視覚化します。",
            command: {
                friendcloud: {
                    description: "友達のクラウドを視覚化する",
                    count: "表示するユーザーの数",
                    mustHigher: "数値は 1 以上である必要があります。",
                    noAffinities: "近接データが見つかりません。 [プライバシー設定](<https://support.discord.com/hc/en-us/articles/21864805694999-Data-used-to- Improvement-Discord>) を確認してください。",
                    noValid: "プロキシ内に有効なユーザーが見つかりません。 [プライバシー設定](<https://support.discord.com/hc/en-us/articles/21864805694999-Data-used-to- Improvement-Discord>) を確認してください。",
                    genFailed: "画像を作成できませんでした:c"
                }
            }
        },
        friendCodes: {
            name: "フレンドコード",
            description: "フレンドコードを生成して簡単に友達を追加",
            card: {
                expires: "有効期限: <t:{{expiration}}:R> • {{uses}}/{{maxUses}} の使用量",
                copy: "コピー",
                copied: "コピーしました！",
                codes: "あなたのフレンドシップコード",
                count: "フレンドコード - {{招待}}",
                create: "フレンドシップコードを生成する",
                revoke: "フレンドコードをすべてキャンセルする",
                loading: "読み込み中...",
                dontHave: "フレンドコードがありません。"
            }
        },
        friendInvites: {
            name: "友達が招待する",
            description: "スラッシュ コマンド (/create 友人招待、/view 友人招待、/revoke 友人招待) を使用して友人招待リンクを作成および管理します。",
            command: {
                create: {
                    description: "友達の招待リンクを生成します。",
                    message: "discord.gg/{{code}}`\n・有効期限: <t:{{expiration}}:R>\n・最大使用量: {{uses}}"
                },
                view: {
                    description: "作成されたすべての友達招待リンクを表示します。",
                    message: "_discord.gg/{{code}}_\n· 有効期限: <t:{{expiration}}:R> \n· 使用回数: {{uses}}/{{maxUses}}",
                    noInvites: "有効な友達招待リンクがありません。"
                },
                revoke: {
                    description: "作成された友達招待リンクをキャンセルします。",
                    message: "友達の招待リンクはすべてキャンセルされました。"
                }
            }
        },
        friendshipRanks: {
            name: "友情ランク",
            description: "ユーザーと友達になってからの期間を示すバッジを追加します。",
            badge: {
                sprout: {
                    name: "スプラウト",
                    description: "あなたの友情はまさに花開いたばかりです。"
                },
                blooming: {
                    name: "咲く",
                    description: "あなたの友情はさらに深まります！ (1ヶ月)"
                },
                burning: {
                    name: "燃える",
                    description: "あなたの友情は最高潮に達しました。 (3ヶ月)"
                },
                fighter: {
                    name: "ファイター",
                    description: "あなたの友情は強いです。 (6ヶ月)"
                },
                star: {
                    name: "星",
                    description: "あなたの友情は長い間続いています。 (1年)"
                },
                royal: {
                    name: "結果",
                    description: "あなたの友情はあらゆる困難を乗り越えてきました - 2 年間!"
                },
                besties: {
                    name: "親友",
                    description: "どうやってこれを達成しますか？ (5年)"
                }
            }
        },
        friendsSince: {
            name: "友達以来",
            description: "ユーザーがポップアップ内の誰かと友達であることを示します。",
            section: "デートの日付"
        },
        friendTags: {
            name: "友達タグ",
            description: "& で検索を開始すると、クイック ジャンプ メニューでカスタム タグでフィルタリングできます。",
            modal: {
                name: "名前",
                users: "ユーザー (カンマで区切る)",
                userlist: "ユーザーリスト (削除するユーザーをクリックします)",
                remove: "取り除く",
                add: "追加",
                tag: "チケット",
                removeFrom: "以下から削除します:",
                addTo: "に追加："
            },
            option: {
                tagConfiguration: {
                    label: "タグの設定",
                    description: "タグ構成コンポーネント"
                }
            }
        },
        fullSearchContext: {
            name: "フルサーチコンテキスト",
            description: "これにより、メッセージ検索結果のメッセージ コンテキスト メニューに、期待されるすべてのオプションが表示されます。"
        },
        fullUserInChatbox: {
            name: "チャットボックス内のフルユーザー",
            description: "チャット ボックスのユーザー タグを左/右クリックするなどの追加機能を追加します。"
        },
        fullVCPFP: {
            name: "フルVCPFP",
            description: "アバターがボイスチャットボックス全体をカバーできるようにします。",
            option: {
                useServerProfileAvatars: {
                    label: "サーバープロファイルアバターを使用する",
                    description: "音声チャット ボックスでプレゼンター プロフィール アバターを使用します (利用可能な場合)"
                }
            }
        },
        gameActivityToggle: {
            name: "ゲームアクティビティトグル",
            description: "ユーザー ポップアップにスイッチを追加して、ゲーム アクティビティを表示または非表示にします。",
            tooltip: "ゲームイベントの変更",
            gameActivity: {
                enabled: "ゲームイベントが有効になりました",
                disabled: "ゲームイベントが無効になっています"
            },
            option: {
                oldIcon: {
                    label: "古代のアイコン",
                    description: "Discord アイコンを再設計する前に古いアイコン スタイルを使用する"
                },
                location: {
                    label: "女性",
                    description: "ゲームイベントキーを表示する場所",
                    panel: "ミュート/マイクオフの隣",
                    toolbox: "ツールボックスの Plexcord"
                }
            }
        },
        ghosted: {
            name: "ゴースト化",
            description: "DMに返事をしていない人の隣にはかわいい幽霊が現れます。",
            modal: {
                title: "ゴースト化されたユーザー",
                no: "ゴースト化されたユーザーは存在しない",
                unghost: "幽霊を取り除く",
                unknown: "未知",
                unnamedGroup: "匿名グループ",
                unknownUser: "不明なユーザー",
                clearAll: "すべてクリア",
                noGhost: "ここには幽霊なんていないよ！",
                clear: "クリア"
            },
            option: {
                showIndicator: {
                    label: "インジケーターを表示",
                    description: "サーバーリストの先頭にゴーストカウンターを表示します。"
                },
                showDmIcons: {
                    label: "DMアイコンを表示",
                    description: "個々の DM の横にゴースト アイコンを表示します。"
                },
                ignoreGroupDms: {
                    label: "グループDMを無視する",
                    description: "すべてのグループ メッセージをゴースト リストから除外します。"
                },
                exemptedChannels: {
                    label: "除外チャンネル",
                    description: "ゴーストリストに含まれないチャネル ID (ID) のカンマ区切りリスト (DM チャネルを右クリックして ID をコピーします)。"
                },
                ignoreBots: {
                    label: "ボットを無視する",
                    description: "ボットからのDMは無視します。"
                }
            }
        },
        gifCollections: {
            name: "GIFコレクション",
            description: "GIF コレクションを作成できます。",
            context: {
                copyImageLink: "画像リンクをコピー",
                copyUrl: "URLをコピー",
                collection: {
                    add: "コレクションに追加",
                    gif: "GIFコレクション",
                    delete: "コレクションの削除",
                    create: "コレクションの作成",
                    remove: "取り除く",
                    information: "コレクション情報",
                    name: "名前",
                    gifs: "平手打ち",
                    created: "作成日",
                    updated: "最終更新",
                    close: "四半期",
                    rename: "名前を変更する",
                    move: "コレクションに移動",
                    select: "移動するコレクションを選択してください"
                },
                gif: {
                    information: "情報",
                    added: "追加日",
                    width: "幅",
                    height: "身長",
                    close: "四半期"
                }
            },
            option: {
                itemPrefix: {
                    label: "項目の接頭辞",
                    description: "GIF要素のプレフィックス"
                },
                collectionPrefix: {
                    label: "コレクションのプレフィックス",
                    description: "コレクションの接頭辞"
                },
                onlyShowCollections: {
                    label: "コレクションのみを表示",
                    description: "コレクションのみを表示"
                },
                stopWarnings: {
                    label: "アラートの停止",
                    description: "削除警告を停止する"
                },
                showCopyImageLink: {
                    label: "画像リンクのコピー オプションを表示",
                    description: "コンテキスト メニューに {{copyImageLink}} を表示する"
                },
                preventDuplicates: {
                    label: "再発を防ぐ",
                    description: "同じ GIF がコレクションに複数回追加されないようにする"
                },
                defaultEmptyCollectionImage: {
                    label: "デフォルトの空のコレクション画像",
                    description: "コレクションに画像/GIF がない場合に表示する画像/GIF"
                },
                collectionsSortType: {
                    label: "コレクションの並べ替えタイプ",
                    description: "コレクションのソートタイプ"
                },
                collectionsSortOrder: {
                    label: "コレクションの並べ替え順序",
                    description: "コレクションの並べ替え順序"
                },
                collectionsSort: {
                    label: "コレクションの並べ替え",
                    description: "コレクションの並べ替え方法を決定する",
                    title: "コレクションの並べ替え",
                    sortDescription: "コレクションごとに並べ替えを選択してください",
                    sortBy: "並べ替え",
                    name: "名前",
                    creationDate: "作成日",
                    modifiedDate: "変更日",
                    ascending: "成長する",
                    descending: "減少中"
                },
                importGifs: {
                    label: "GIFをインポートする",
                    description: "コレクションをインポートする",
                    button: "コレクションのインポート"
                },
                exportGifs: {
                    label: "GIFをエクスポートする",
                    description: "コレクションのエクスポート",
                    button: "コレクションのエクスポート"
                },
                resetCollections: {
                    label: "コレクションをリセットする",
                    description: "コレクションをデフォルトにリセットします (すべてのコレクションを削除します)",
                    button: "コレクションをリセットする"
                }
            },
            toast: {
                copied: "画像リンクがクリップボードにコピーされました!",
                urlCopied: "URL がクリップボードにコピーされました!",
                already: "このコレクションはすでに存在します",
                alreadyCollection: "このGIFはすでにコレクションに存在します"
            },
            modal: {
                create: {
                    title: "コレクションの作成",
                    name: "コレクション名",
                    create: "作成する"
                },
                rename: {
                    title: "コレクションの名前を変更",
                    name: "新しいコレクション名",
                    warning: "名前は 24 文字以下にする必要があります",
                    rename: "名前を変更する"
                }
            },
            alert: {
                import: {
                    title: "本気ですか？",
                    body: "コレクションをインポートすると、既存のコレクションが上書きされます。",
                    confirm: "イチェ・アクター",
                    cancel: "キャンセル"
                },
                reset: {
                    title: "本気ですか？",
                    body: "コレクションをリセットすると、すべてのコレクションが削除されます。",
                    confirm: "リセット",
                    cancel: "キャンセル"
                },
                delete: {
                    title: "本気ですか？",
                    deleteBody: "本当にこのコレクションを削除してもよろしいですか?",
                    removeBody: "本当にこの項目を削除してもよろしいですか?",
                    confirm: "シル",
                    remove: "取り除く",
                    cancel: "キャンセル"
                }
            }
        },
        gifPaste: {
            name: "GIFペースト",
            description: "GIF をチャット ボックスに直接貼り付けることができます。"
        },
        gifRoulette: {
            name: "GIFルーレット",
            description: "お気に入りからランダムな GIF を送信するコマンドを追加します。 サーバー所有者をタグ付けできる確率は 10% です。",
            command: {
                gifRoulette: {
                    description: "運試しにランダムな GIF を送信してください"
                }
            },
            option: {
                pingOwnerChance: {
                    label: "サーバー所有者にタグを付けるチャンス",
                    description: "サーバー所有者をタグ付けする確率を 10 分の 1 に設定します (すごい!)"
                }
            }
        },
        gitHubRepos: {
            name: "GitHubリポジトリ",
            description: "ユーザーのプロフィールにパブリック GitHub リポジトリを表示します。",
            loading: "リポジトリをロードしています...",
            option: {
                showStars: {
                    label: "スターを見せて",
                    description: "ウェアハウスのスターを表示する"
                },
                showLanguage: {
                    label: "言語を表示",
                    description: "リポジトリの主なプログラミング言語を表示します"
                },
                showInMiniProfile: {
                    label: "ミニプロフィールで表示",
                    description: "ミニプロファイルウィンドウにリポジトリを表示"
                },
                showRepositoryTab: {
                    label: "「リポジトリ」タブを表示",
                    description: "プロファイルモーダルにリポジトリタブを表示します（有効になっている場合、リンク上のボタンを非表示にします）"
                }
            },
            error: {
                error: "平",
                render: "エラー: GithubRepos を表示できませんでした"
            },
            button: {
                show: "GitHub リポジトリを表示する",
                repositories: "GitHub リポジトリ",
                more: "もっと見る",
                only: "最高の {{length}}/{{total}} のみを表示しています"
            },
            modal: {
                title: "{{user}} の GitHub リポジトリ",
                repository: "デポ",
                description: "説明",
                language: "ディル",
                stars: "星",
                viewOnGitHub: "GitHub で見る",
                close: "四半期"
            }
        },
        googleThat: {
            name: "Googleそれ",
            description: "インターネット検索接続を送信できるコマンドを追加します。",
            command: {
                googleThat: {
                    description: "検索エンジンのリンクを送信する",
                    query: "検索クエリ"
                }
            },
            option: {
                hyperlink: {
                    label: "橋",
                    description: "送信されたリンクがクエリ タグを含むハイパーリンクとして送信されるかどうか"
                },
                embed: {
                    label: "埋め込みコンテンツ",
                    description: "送信されたリンクを埋め込みコンテンツとして表示するかどうか"
                },
                defaultEngine: {
                    label: "デフォルトの検索エンジン",
                    description: "使用する検索エンジン"
                },
                customEngineURL: {
                    label: "カスタム検索エンジンの URL",
                    description: "使用したい検索エンジンのURL"
                }
            }
        },
        greetStickerPicker: {
            name: "グリートステッカーピッカー",
            description: "「手を振って挨拶してください！」ボタンを右クリックすると、ランダムなウェルカム ステッカーの代わりに必要なウェルカム ステッカーを使用できます。",
            mode: {
                greet: "こんにちは",
                message: "メッセージ"
            },
            option: {
                greetMode: {
                    label: "挨拶モード",
                    description: "挨拶モードを選択します",
                    greet: "挨拶（挨拶は3回までしか送信できません）",
                    message: "メッセージ（無制限にグリーティングを送信できます）"
                }
            },
            context: {
                label: "グリーティングステッカーセレクター",
                mode: "挨拶モード",
                stickers: "グリーティングステッカー",
                multi: "複数の挨拶",
                send: "こんにちは送信"
            }
        },
        guildPickerDumper: {
            name: "ギルドピッカーダンパー",
            description: "サーバーの絵文字とステッカーをエクスポートおよびダウンロードできるコンテキスト メニューを追加します。",
            context: {
                download: {
                    emoji: "絵文字をダウンロード",
                    sticker: "ステッカーをダウンロードする"
                }
            }
        },
        guildTagSettings: {
            name: "ギルドタグ設定",
            description: "サーバー タグの非表示やタグを使用するためのプロンプトの無効化など、サーバー タグ設定を追加します。",
            option: {
                hideTags: {
                    label: "タグを非表示にする",
                    description: "サーバータグを非表示にする"
                },
                disableAdoptTagPrompt: {
                    label: "タグを閉じるクレームの警告",
                    description: "サーバータグを使用（要求）するためのプロンプトを無効にします"
                }
            }
        },
        hideChatButtons: {
            name: "チャットボタンを非表示にする",
            description: "チャットボタンを非表示にできます。",
            tooltip: {
                close: "四半期",
                open: "お腹がすいた"
            },
            option: {
                color: {
                    label: "色",
                    description: "オンにすると赤色で表示されます"
                },
                open: {
                    label: "開ける",
                    description: "デフォルトでオン"
                }
            }
        },
        hideMedia: {
            name: "メディアを隠す",
            description: "マウスを移動すると表示されるボタンを使用して、特定のメッセージの添付ファイルや埋め込みコンテンツを非表示にすることができます。",
            show: "メディアを表示する",
            hide: "メディアを隠す",
            hidden: "メディア非表示"
        },
        hideMessages: {
            name: "メッセージを隠す",
            description: "再起動するまでメッセージを一時的に非表示にします。",
            button: {
                hide: "隠れる"
            },
            option: {
                hidePopoverButton: {
                    label: "ポップオーバーボタンを非表示にする",
                    description: "メッセージポップオーバーの非表示ボタンを非表示にします。"
                }
            }
        },
        hideServers: {
            name: "サーバーを非表示にする",
            description: "サーバーリストからサーバーを非表示にします",
            context: {
                hide: "サーバーを非表示にする",
                unhide: "サーバーを表示",
                folder: {
                    hide: "フォルダーを隠す",
                    unhide: "フォルダーを表示"
                }
            },
            option: {
                showIndicator: {
                    label: "インジケーターを表示する",
                    description: "リスト内の非表示のサーバーを表示するには、下部にあるメニューを表示します"
                },
                guildsList: {
                    label: "サーバーリスト",
                    description: "隠しサーバーを削除する"
                },
                resetHidden: {
                    label: "隠しサーバーをリセットする",
                    description: "リストからすべての非表示サーバーを削除します",
                    button: "隠しサーバーをリセットする"
                }
            },
            button: {
                hidden: "隠れた",
                hiddenServers: "隠しサーバー",
                remove: "取り除く",
                folder: "フォルダ",
                removeAll: "すべて削除",
                guilds: "サーバー",
                noHiddenServers: "隠しサーバーはありません"
            }
        },
        holyNotes: {
            name: "ホーリーノート",
            description: "Holy Notes ではメッセージを保存できます",
            main: "良い",
            button: {
                tooltip: "ホーリーノート",
                save: "メモの保存",
                cancel: "キャンセル",
                noteMessage: "注意メッセージ",
                refresh: "アバターを更新",
                import: "インポートメモ",
                export: "エクスポートノート",
                deleteAll: "すべてのメモを削除",
                delete: "ノートブックの削除",
                create: "ノートブックの作成",
                copyText: "テキストをコピーする",
                copyAttachment: "添付ファイルの URL をコピー",
                deleteNote: "ノトゥ・シル",
                moveNote: "ノートの移動",
                moveTo: "{{key}} に移動",
                copyId: "IDをコピーする"
            },
            modal: {
                error: {
                    generic: "成績の処理中にエラーが発生しました。 詳細についてはコンソールを確認してください。",
                    easter: "メモが見つかりませんでした。 共感バナナはあなたとともにあります。",
                    empty: "このノートブックにはメモが保存されていません。"
                },
                help: {
                    title: "ヘルプ",
                    description: "ホーリーノートの使い方を学ぶ",
                    addingNotes: "メモを追加する",
                    addingNotesText: "メモを追加するには、メッセージを右クリックし、[メモ メッセージ] をポイントして、メモを追加するノートブックを選択します。",
                    prototype: "プロトタイプ",
                    noteMessage: "「メモメッセージ」ボタンをワンクリックすると、デフォルトでメイン台帳にメッセージが追加されます。",
                    deletingNotes: "シルメではありません",
                    deletingNotesText: "メモを削除するには、右クリックして「メモの削除」を選択するか、キーボードの「DELETE」キーを押したままメモをクリックします。",
                    movingNotes: "メモの移動",
                    movingNotesText: "メモを移動するには、右クリックして、「メモの移動」オプションから移動するノートブックを選択します。",
                    jumpToMessage: "メッセージに移動",
                    jumpToMessageText: "メモが属するメッセージに移動するには、メモを右クリックして [メッセージに移動] を選択します。"
                },
                notebook: {
                    title: "ノート",
                    search: "メッセージを検索...",
                    options: "並べ替えオプション",
                    label: "ソートメニュー",
                    filteredOf: "{{filteredCount}}/{{noteCount}} ではありません",
                    note: "{{noteCount}} ではありません",
                    ada: "昇順 / 追加日",
                    amd: "昇順 / メッセージ日付",
                    dda: "降順/追加日",
                    dmd: "降順 / メッセージ日付",
                    change: "並べ替えの変更",
                    ascending: "成長する",
                    descending: "減少中",
                    dateAdded: "追加日",
                    messageDate: "メッセージの日付"
                },
                create: {
                    title: "ノートブックの作成",
                    description: "新しいノートブックの名前を入力します",
                    placeholder: "ノートブック名"
                },
                delete: {
                    title: "{{notebookName}} シリンシン ミ?",
                    description: "{{noteCount}} 個のメモが完全に削除されます",
                    button: "シル"
                },
                tabs: {
                    label: "ノートブックのタブ"
                }
            },
            toast: {
                saved: "メッセージは {{notebook}} に正常に追加されました。",
                deleted: "メモは {{notebook}} から正常に削除されました。",
                moved: "ノートは {{from}} ノートブックから {{to}} ノートブックに正常に移動されました。",
                exists: "{{notebookName}} という名前のノートブックはすでに存在します。",
                created: "{{notebookName}} が正常に作成されました。",
                deletedNotebook: "{{notebookName}} は正常に削除されました。",
                refreshed: "アバターは正常に更新されました。",
                deletedAll: "すべてのメモが正常に削除されました。",
                imported: "メモは正常にインポートされました。",
                invalid: "メモのインポートに失敗しました。"
            },
            toolbox: {
                action: "ノートを開く"
            }
        },
        homeTyping: {
            name: "ホームタイピング",
            description: "誰かがあなたの DM に書き込みをしている場合、ホーム ボタンが書き込みインジケーターに変わります。"
        },
        iconViewer: {
            name: "アイコンビューア",
            description: "すべてのアイコンをプレビューするための新しいタブを設定に追加します。",
            toolbox: "アイコンタブを開く",
            iconFinder: "アイコンファインダー",
            about: {
                title: "特徴",
                preview: "プレビューアイコン",
                list: {
                    copy: "アイコン名とCSS変数をコピーする",
                    download: "さまざまな形式 (SVG、PNG、GIF など) でアイコンをダウンロードします。",
                    premade: "プラグイン用に既製のアイコンの結果をコピーします",
                    find: "関数コンテキストによるアイコンの検索",
                    search: "色名を右クリックして色を検索します",
                    special: "特別な感謝"
                }
            },
            context: {
                icon: {
                    options: "アイコンのオプション",
                    log: "コンソールへの出力 (ログ)",
                    save: "名前を付けて保存...",
                    rightClick: "置き換えるアイコンを右クリックします",
                    usage: "使用",
                    click: "クリックしてコピー",
                    copied: "コピーしました！",
                    actions: "アクション"
                }
            },
            modal: {
                label: "関数コンテキストによる検索",
                search: "{{count}} 個のシンボル内を検索します...",
                function: "関数",
                iconViewer: {
                    colors: "アイコンビューアの色",
                    unknown: "未知",
                }
            }
        },
        idleAutoRestart: {
            name: "アイドル自動再起動",
            description: "一定時間アイドル状態になるとアプリが自動的に再起動されますが、オーディオ チャネルを使用している場合は再起動が防止されます。",
            option: {
                isEnabled: {
                    label: "効果的",
                    description: "アイドル後の自動再起動を有効にする"
                },
                idleMinutes: {
                    label: "アイドル時間 (分)",
                    description: "再起動するまでの非アクティブな時間 (オーディオ チャネルではない)"
                }
            },
            toolbox: {
                disable: "自動再起動を無効にする",
                enable: "自動再起動を有効にする"
            }
        },
        ignoreActivities: {
            name: "アクティビティを無視する",
            description: "イベントがその状態にのみ表示されるのを防ぎます。 [保存されたゲーム] タブと [イベント] タブでどれを無視するかを指定することも、以下の一般設定を使用することもできます。",
            modal: {
                import: {
                    title: "CustomRPC プラグインのアプリ ID をフィルター リストにインポートします"
                },
                filter: {
                    title: "フィルタリスト",
                    description: "フィルターするイベント ID のカンマ区切りリスト (特定の RPC イベントおよび CustomRPC をフィルターする場合に便利)"
                }
            },
            toast: {
                id: {
                    notSet: "CustomRPC アプリケーション ID が設定されていません。",
                    alreadyAdded: "CustomRPC アプリケーション ID はすでに追加されています。"
                }
            },
            button: {
                import: "CustomRPC ID をインポートする"
            },
            option: {
                importCustomRPC: {
                    label: "CustomRPC'yi もっと見る"
                },
                listMode: {
                    label: "リストモード",
                    description: "フィルタリストの適用方法を選択します",
                    blacklist: "ブラックリスト (リストにあるもののみを無視します)",
                    whitelist: "ホワイトリスト (リストにあるもの以外はすべて無視)"
                },
                idList: {
                    label: "IDリスト"
                },
                ignorePlaying: {
                    label: "再生内容を無視する",
                    description: "再生されたイベントをすべて無視します (通常はゲーム イベントと RPC イベント)"
                },
                ignoreStreaming: {
                    label: "投稿を無視する",
                    description: "すべてのブロードキャスト イベントを無視する"
                },
                ignoreListening: {
                    label: "リスナーを無視する",
                    description: "すべてのリスニング イベント (通常は Spotify イベント) を無視します。"
                },
                ignoreWatching: {
                    label: "閲覧済みを無視",
                    description: "すべての追跡イベントを無視する"
                },
                ignoreCompeting: {
                    label: "競争イベントを無視する",
                    description: "すべての競合 (競争) イベントを無視します (通常はカスタム ゲーム イベント)"
                },
                ignoredActivities: {
                    label: "無視されたイベント"
                }
            }
        },
        ignoreCalls: {
            name: "通話を無視する",
            description: "特定のユーザーまたは DM グループからの通話を無視できます。",
            option: {
                permanentlyIgnoredUsers: {
                    label: "永久に無視されたユーザー",
                    description: "永久に無視すべきユーザー ID (virgül + boşluk)"
                }
            },
            button: {
                ignore: "ヨクサイ",
                temporarilyIgnore: "一時的に無視する",
                permanentlyIgnore: "永久に無視"
            }
        },
        iLoveSpam: {
            name: "アイラブスパム",
            description: "「潜在的なスパマー」からのメッセージを隠す。"
        },
        imageFilename: {
            name: "画像ファイル名",
            description: "画像や GIF の上にマウスを移動すると、ツールチップとしてファイル名が表示されます。",
            option: {
                showFullUrl: {
                    label: "完全な URL を表示",
                    description: "ファイル名だけではなく、画像の完全な URL が表示されます。 GIF には通常、意味のあるファイル名がないため、GIF では常に有効になります。"
                }
            }
        },
        imageLink: {
            name: "画像リンク",
            description: "メッセージ内に画像リンクしかない場合でも、ビジュアルリンクが非表示になることはありません。"
        },
        imageZoom: {
            name: "画像ズーム",
            description: "画像や GIF を拡大したり、画像のメタデータを表示したりできます。 マウス ホイールを使用してズームインし、Shift + マウス ホイールを使用してレンズの半径を拡大します。",
            option: {
                saveZoomValues: {
                    label: "ズーム値の保存",
                    description: "ズームとレンズサイズの値を保存するかどうかを決定します"
                },
                invertScroll: {
                    label: "逆スクロール",
                    description: "マウスのスクロール方向を反転します"
                },
                nearestNeighbour: {
                    label: "最近隣",
                    description: "画像をスケーリングするときに最近傍補間を使用します"
                },
                square: {
                    label: "守る",
                    description: "レンズを四角形に変える"
                },
                zoom: {
                    label: "ズーム",
                    description: "レンズのズーム比"
                },
                size: {
                    label: "寸法",
                    description: "レンズ半径/サイズ"
                },
                zoomSpeed: {
                    label: "ズーム速度",
                    description: "ズーム/レンズサイズの変化の速度を決定します"
                },
                showMetadata: {
                    label: "メタデータの表示",
                    description: "選択した画像をダブルクリックするとメタデータが表示されます"
                }
            },
            context: {
                square: "スクエアレンズ",
                nearest: "ピクセル化された拡大",
                zoom: "ズーム",
                size: "レンズサイズ",
                zoomSpeed: "ズーム速度",
                showImageMetadata: "画像メタデータを表示",
                view: "メタデータの表示",
                loading: "読み込み中...",
                unknown: "未知",
                sizeHTML: "寸法",
                dimensions: "寸法",
                filename: "ファイル名"
            }
        },
        imgToGif: {
            name: "ImgToGif",
            description: "任意の画像を GIF に変換する /imgtogif コマンドを追加します",
            command: {
                imgToGif: {
                    description: "画像をGIFに変換できます",
                    image: "使用するビジュアルアタッチメント",
                    width: "GIFの幅",
                    height: "GIFの高さ"
                }
            },
            error: {
                noImage: "画像が指定されていません!",
                notImage: "アップロードされたファイルは画像ではありません"
            }
        },
        implicitRelationships: {
            name: "暗黙的な関係",
            description: "「友達」タブに間接的な関係が表示されます。",
            option: {
                sortByAffinity: {
                    label: "近さで並べ替え",
                    description: "間接的な関係をあなたへの近さによって並べ替えるかどうかを決定します。"
                }
            },
            implicit: "間接的"
        },
        inRole: {
            name: "役割内",
            description: "ロールのコンテキスト メニューまたは /inrole コマンドを使用して、ロールに属しているユーザーを確認します (プラグイン情報を参照してください)。",
            command: {
                inrole: {
                    description: "誰が役割を果たしているかを確認する",
                    role: "役割",
                    noGuild: "サーバー上にいることを確認してください。"
                }
            },
            context: {
                view: "役割内のメンバーを表示"
            },
            modal: {
                about: {
                    title: "制限事項",
                    description: "サーバーに対するモデレーション権限がなく、サーバーが大規模 (メンバーが 100 人を超える) 場合、プラグインは次のように制限される可能性があります。",
                    list: {
                        one: "オフラインメンバーは表示されません",
                        two: "デフォルトでは、最大 100 人のメンバーがリストされます。 さらにメンバーを表示するには、メンバー リストを下にスクロールします。",
                        three: "ただし、友達はステータスに関係なく常に表示されます。"
                    }
                },
                member: {
                    title: "役割を担うメンバー",
                    noMembers: "この役割を持つオンライン キャッシュされたメンバーは見つかりませんでした。 より多くのユーザーをキャッシュするには、メンバー リストを下にスクロールしてみてください。"
                }
            }
        },
        instantScreenshare: {
            name: "インスタントスクリーンシェア",
            description: "オーディオ チャネルに参加すると、デスクトップ ソース、ウィンドウ、ビデオ入力デバイス (カメラ、キャプチャ カード) をサポートして、即座に画面を共有できます。",
            modal: {
                linux: {
                    title: "Linuxの場合",
                    body: "Wayland を使用している場合は、画面共有オプションのみがオンになります。",
                    bodyTwo: "X11 では機能する場合と機能しない場合があります。 :shrug:"
                },
                videoDevices: {
                    title: "ビデオ入力デバイス",
                    body: "設定で有効にすると、カメラとキャプチャ カード (Elgato HD60X など) をサポートします。"
                },
                regardingSound: {
                    title: "サウンドとプレビューの設定について",
                    body: "Discord がストリームをプレビューし、音声を有効にするかどうかを決定するために使用するのと同じ設定を使用します。"
                }
            },
            option: {
                streamMedia: {
                    label: "リリース予定のメディアソース",
                    description: "見つからない場合は、メイン画面にリセットされます。",
                    loading: "メディア ソースを読み込んでいます...",
                    none: "メディア ソースが見つかりません",
                    placeholder: "公開するメディア ソースを選択してください"
                },
                includeVideoDevices: {
                    label: "ビデオデバイスを含める",
                    description: "ビデオ入力デバイス (カメラ、キャプチャ カード) をソース リストに含めます。"
                },
                autoMute: {
                    label: "オートミュート",
                    description: "音声チャンネルに参加するときにマイクを自動的にミュートします"
                },
                autoDeafen: {
                    label: "自動聴覚障害者",
                    description: "音声チャンネルに参加すると自動的に耳が聞こえなくなります (ミュートにもなります)"
                },
                instantScreenshare: {
                    label: "インスタント画面共有",
                    description: "自動画面共有機能を有効にします"
                },
                keybindScreenshare: {
                    label: "ホットキーを使用した画面共有",
                    description: "Discordのホットキー設定のホットキーで画面を共有します"
                },
                focusDiscord: {
                    label: "Discordを中心に",
                    description: "Discordにフォーカスがある場合にのみキーバインドによる画面共有を開始します"
                },
                toolboxManagement: {
                    label: "ツールボックス管理",
                    description: "インスタント画面共有を有効/無効にする"
                }
            },
            toolbox: {
                label: "インスタント画面共有",
                toast: "インスタント画面共有 {{state}}",
                enabled: "効果的",
                disabled: "無効"
            }
        },
        invisibleChat: {
            name: "見えないチャット",
            description: "疑惑を抱かずにメッセージを暗号化しましょう。",
            option: {
                savedPasswords: {
                    label: "保存されたパスワード",
                    description: "保存されたパスワード (カンマ区切り)"
                }
            },
            button: {
                encrypt: "メッセージの暗号化",
                decrypt: "メッセージを解読する",
                hidden: "隠しメッセージインジケーター (InvisibleChat)"
            },
            tooltip: {
                hidden: "このメッセージには隠されたメッセージがあります！ (目に見えないチャット)"
            },
            embed: {
                title: "復号化されたメッセージ",
                footer: "InvisibleChat 経由で送信"
            },
            modal: {
                encrypt: {
                    title: "メッセージの暗号化",
                    secret: "秘密のメッセージ",
                    cover: "表紙（2文字以上!!）",
                    password: "パスワード",
                    dontUseCover: "カバーを使う",
                    send: "送信",
                    cancel: "キャンセル"
                },
                decrypt: {
                    title: "メッセージを解読する",
                    with: "暗号化されたメッセージ",
                    password: "パスワード",
                    decrypt: "解読する",
                    cancel: "キャンセル"
                }
            }
        },
        inviteDefaults: {
            name: "招待デフォルト",
            description: "サーバーへの招待を作成するときにデフォルト値を編集できます。",
            option: {
                inviteDuration: {
                    label: "招待期間",
                    description: "サーバー招待のデフォルトの期間",
                    thirtyMinutes: "30分",
                    oneHour: "1 瞬間",
                    sixHours: "6 瞬間",
                    twelveHours: "12 モーメント",
                    oneDay: "1日",
                    sevenDays: "7日間",
                    forever: "不定"
                },
                maxUses: {
                    label: "最大使用量",
                    description: "サーバー招待のデフォルトの最大使用量",
                    unlimited: "無制限",
                    one: "1",
                    five: "5",
                    ten: "10",
                    twentyFive: "25",
                    fifty: "50",
                    oneHundred: "100"
                },
                temporaryMembership: {
                    label: "一時会員",
                    description: "サーバー招待のデフォルトの一時メンバーシップ設定"
                }
            }
        },
        ircColors: {
            name: "IrcColors",
            description: "IRC クライアントと同様に、チャット内のユーザー名の色を一意にします。",
            option: {
                lightness: {
                    label: "明るい",
                    description: "明るさの比率 (%)。 色が明るすぎる、または暗すぎると思われる場合は、変更してください。"
                },
                memberListColors: {
                    label: "メンバーリストの色",
                    description: "メンバーリストの役割の色を変更します。"
                },
                applyColorOnlyToUsersWithoutColor: {
                    label: "色を持たないユーザーにのみ適用",
                    description: "色が事前定義されていないユーザーに色を適用します。"
                },
                applyColorOnlyInDms: {
                    label: "プライベートメッセージのみで適用",
                    description: "プライベートメッセージにのみ色を適用します。 サーバー上のアプリケーション。"
                }
            }
        },
        iRememberYou: {
            name: "私はあなたのことを覚えています",
            description: "通信相手全員 (サーバーを含む) をローカルに記録し、損失を防ぎます。",
            section: {
                description: "あなたが言及したサーバーの所有者、返信したサーバー、(サーバー所有者*) のメンバー、またはあなたが使用しているサーバーのメンバーのリストが表示されます。",
                empty: "現在空です。",
                tooltip: "{{user}} が {{updatedAtContent}} で更新されました",
                owner: "サーバー所有者",
                iRememberYou: "私はあなたのことを覚えています"
            },
            context: {
                user: "ユーザーオプション",
                copy: "ユーザーIDをコピーする",
                copyToast: "ユーザーIDがクリップボードにコピーされました",
                view: "プロフィールを見る"
            },
            modal: {
                title: "レギュレータ",
                filter: "タグ、ユーザー名、ID によるフィルター",
                button: {
                    validate: "確認して保存する",
                    cancel: "キャンセル",
                    openEditor: "エディタを開く",
                    resetData: "データのリセット",
                    sure: "本気ですか？"
                }
            }
        },
        jumpTo: {
            name: "JumpTo",
            description: "チャネルまたはプライベート メッセージの先頭または末尾にジャンプするオプションを右クリック メニューに追加します。",
            context: {
                top: "最初の投稿に移動",
                bottom: "最後の投稿に移動",
                noMessages: "このチャネルではこのユーザーからのメッセージが見つかりませんでした。",
                searchFailed: "メッセージの検索中にエラーが発生しました。"
            }
        },
        keepCurrentChannel: {
            name: "現在のチャンネルを維持",
            description: "アカウントを切り替えたり、Discord を読み込んだりすると、元のチャンネルに戻ろうとします。"
        },
        keyboardSounds: {
            name: "キーボード音",
            description: "キーボードで入力するときは OperaGX または osu!効果音を追加します。",
            option: {
                volume: {
                    label: "騒音レベル",
                    description: "キーボードの音の大きさ"
                },
                soundPack: {
                    label: "サウンドパック",
                    description: "キーボードサウンドに使用するサウンドパック",
                    operagx: "OperaGX",
                    osu: "押忍！"
                }
            }
        },
        keywordNotify: {
            name: "キーワード通知",
            description: "特定のキーワードまたは正規表現に一致するメッセージに関する通知を送信します。",
            idHolder: "ID",
            keywordEntry: "キーワード入力",
            regexHolder: "例|正規表現",
            ignoreCase: "大文字と小文字を区別しない",
            whiteblackLabel: "ホワイトリスト/ブラックリスト",
            tab: {
                title: "キーワード",
                clearAll: "すべてクリア"
            },
            button: {
                addId: "IDエクル",
                addKeyword: "キーワードエントリの追加"
            },
            listTypeSelector: {
                blacklist: "ブラックリスト",
                whitelist: "ホワイトリスト",
                placeholder: "リストの種類を選択してください"
            },
            option: {
                ignoreBots: {
                    label: "ボットを無視する",
                    description: "ボットからのメッセージを無視する"
                },
                amountToKeep: {
                    label: "貯蓄額",
                    description: "ログに保存するメッセージの数"
                },
                keywords: {
                    label: "キーワード",
                    description: "キーワードを管理する"
                }
            }
        },
        lastOnline: {
            name: "ラストオンライン",
            description: "DM リスト、サーバー、およびグループ DM メンバー リストのユーザー名の下に、最後のオンライン インジケーターを追加します。",
            unit: {
                d: "日",
                h: "一瞬",
                m: "分"
            },
            online: "{{formattedTime}} は以前はオンラインでした"
        },
        listenBrainzRPC: {
            name: "ListenBrainzRPC",
            description: "ListenBrainz は、リッチなプレゼンスを実現する小さなプラグインです。",
            about: {
                title: "MusicBrainz APIについて",
                description: "MusicBrainz API には API キーは必要ありませんが、{{link}} が必要です。 ほとんどのユーザーは、1 つの電子メール アドレスで十分です。",
                userAgent: "意味のあるユーザーエージェント文字列"
            },
            option: {
                username: {
                    label: "ユーザー名",
                    description: "ListenBrainzのユーザー名"
                },
                mbContact: {
                    label: "MB連絡先",
                    description: "ListenBrainz の連絡先情報"
                },
                shareUsername: {
                    label: "ユーザー名を共有する",
                    description: "ListenBrainz プロフィール リンクを表示 (他のユーザーにのみ表示)"
                },
                shareSong: {
                    label: "曲をシェアする",
                    description: "ListenBrainz 上の現在の曲へのリンクを表示します (他のユーザーにのみ表示されます)"
                },
                hideWithSpotify: {
                    label: "Spotify がアクティブな間は非表示にする",
                    description: "Spotify が実行中の場合、ListenBrainz ステータスを非表示にする"
                },
                hideWithActivity: {
                    label: "他のイベントがある場合は非表示にする",
                    description: "別のステータスがある場合は、ListenBrainz ステータスを非表示にします"
                },
                useTimeBar: {
                    label: "タイムバーを使用する",
                    description: "トラックの継続時間をタイムバーとして表示 (リスニングステータスを使用する必要があります)"
                },
                statusName: {
                    label: "ステータス名",
                    description: "例外テキスト"
                },
                nameFormat: {
                    label: "名前の形式",
                    description: "ステータス名に曲名とアーティスト名を表示する方法",
                    custom: "カスタムステータステキストを使用する",
                    artistSong: "「アーティスト - 曲」形式を使用する",
                    songArtist: "「曲 - アーティスト」形式を使用する",
                    artistOnly: "アーティスト名だけを使用してください",
                    songOnly: "曲名だけを使用してください",
                    albumName: "アルバム名を使用します (曲にアルバムがない場合は例外テキストを返します)"
                },
                useListeningStatus: {
                    label: "リスニングステータスを使用する",
                    description: "「再生中」ではなく「リスニング」ステータスを表示する"
                },
                missingArt: {
                    label: "カバー画像がありません",
                    description: "アルバムまたはアルバムアートが見つからない場合",
                    listenbrainzLogo: "大きな ListenBrainz ロゴを使用する",
                    generic: "一般的なプレースホルダーを使用する"
                },
                useLogo: {
                    label: "クランのロゴ",
                    description: "アルバム カバーに ListenBrainz ロゴを表示する"
                }
            }
        },
        loadingQuotes: {
            name: "引用の読み込み中",
            description: "Discordの読み込み引用符を変更します",
            option: {
                replaceEvents: {
                    label: "変更イベント",
                    description: "このプラグインは、特別なイベントをテーマにした引用を含むイベント中にも適用する必要がありますか? （例：ハロウィン）"
                },
                enablePluginPresetQuotes: {
                    label: "プラグインの引用を有効にする",
                    description: "このプラグインによって作成された引用を有効にする"
                },
                enableDiscordPresetQuotes: {
                    label: "Discord の引用を有効にする",
                    description: "Discord の定型引用を有効にする (イベント中のイベント引用を含む)"
                },
                additionalQuotes: {
                    label: "追加の見積もり",
                    description: "追加で表示される特殊引用符は、次の区切り文字で区切られます。"
                },
                additionalQuotesDelimiter: {
                    label: "追加の引用符の区切り文字",
                    description: "追加の引用符の区切り文字"
                }
            }
        },
        loginWithQR: {
            name: "QRでログイン",
            description: "モバイルと同じように、ログイン QR コードをスキャンすると、別のデバイスでログインできます。",
            option: {
                scanQr: {
                    label: "QRコードをスキャン",
                    description: "QRコードをスキャンしてください",
                    notEnabled: "プラグインをアクティブ化し、クライアントを再起動してログイン QR コードをスキャンします。"
                }
            },
            neverScan: "別のユーザーまたはアプリからのログイン QR コードを決してスキャンしないでください。",
            hold: "長押しして入力を確認します",
            scanning: "走査...",
            stopScanning: "スキャンを停止する",
            usingWebcam: "Webカメラを使用してスキャンする",
            dragDrop: "ここに画像をドラッグ アンド ドロップするか、クリックして画像を選択します",
            orPaste: "または、クリップボードから画像を貼り付けます。"
        },
        mediaPlaybackSpeed: {
            name: "メディア再生速度",
            description: "メディア埋め込みの (デフォルト) 再生速度を変更できます。",
            playbackSpeed: "再生速度",
            context: {
                label: "再生速度の制御"
            },
            option: {
                defaultVoiceMessageSpeed: {
                    label: "デフォルトのボイスメール速度",
                    description: "音声メッセージ"
                },
                defaultVideoSpeed: {
                    label: "デフォルトのビデオ速度",
                    description: "動画"
                },
                defaultAudioSpeed: {
                    label: "デフォルトのオーディオレート",
                    description: "オーディオファイル"
                }
            }
        },
        memberCount: {
            name: "メンバー数",
            description: "サーバー上のオンライン メンバーの数、合計メンバー、および音声チャネルのユーザーの数をメンバー リストとツールチップに表示します。",
            option: {
                toolTip: {
                    label: "ツールチップ",
                    description: "サーバーのツールチップにメンバー数を表示"
                },
                memberList: {
                    label: "メンバー一覧",
                    description: "メンバーリストの上部にメンバー数を表示する"
                },
                voiceActivity: {
                    label: "音声アクティビティ",
                    description: "音声チャネルのユーザー数を表示する"
                }
            },
            onlineThisChannel: "{{formattedOnlineCount}} はこのチャンネルでオンラインです",
            totalMembers: "サーバー上の合計メンバー数は {{formattedTotalCount}} です",
            totalVoice: "{{formattedVoiceCount}} 音声チャンネルのメンバー"
        },
        mentionAvatars: {
            name: "アバターについての言及",
            description: "メンション内にユーザーのアバターとロールのアイコンを表示します。",
            option: {
                showAtSymbol: {
                    label: "@アイコンを表示",
                    description: "ユーザーのメンションに @ 記号を表示するかどうかを決定します。"
                }
            }
        },
        meow: {
            name: "ニャー",
            description: "チャットでニャーと鳴くボタンをチャットバーに追加します。",
            button: {
                meow: "ミヤフ"
            }
        },
        messageBurst: {
            name: "メッセージバースト",
            description: "他の誰かが先にメッセージを送信していない限り、一定期間内に送信されたメッセージが以前のメッセージとマージされます。",
            option: {
                timePeriod: {
                    label: "時間範囲",
                    description: "マージ時間 (秒単位)。"
                },
                shouldMergeWithAttachment: {
                    label: "アタッチメントと組み合わせる",
                    description: "最後のメッセージに添付ファイル (ファイル/画像) がある場合、メッセージをマージする必要がありますか?"
                },
                useSpace: {
                    label: "スペースを使用する",
                    description: "結合時に新しい行に移動するのではなく、メッセージ間にスペースを追加するかどうか。"
                }
            }
        },
        messageClickActions: {
            name: "メッセージクリックアクション",
            description: "Backspace キーを押しながらクリックすると削除でき、ダブルクリックすると編集または返信できます。",
            option: {
                singleClickAction: {
                    label: "ワンクリックアクション",
                    description: "シングルクリックアクション (自分のメッセージに対する)"
                },
                singleClickModifier: {
                    label: "ワンクリックモディファイア",
                    description: "ワンクリックアクションに必要な修飾子 (独自のメッセージ内)"
                },
                singleClickOthersAction: {
                    label: "ワンクリックアクション（その他）",
                    description: "シングルクリックアクション (他の人のメッセージに対する)"
                },
                singleClickOthersModifier: {
                    label: "ワンクリックモディファイア（その他）",
                    description: "シングルクリックアクションに必要な修飾子 (他の人の投稿内)"
                },
                doubleClickAction: {
                    label: "ダブルクリックアクション",
                    description: "自分のメッセージに対するダブルクリックアクション"
                },
                doubleClickOthersAction: {
                    label: "ダブルクリックアクション（その他）",
                    description: "他の人のメッセージに対するダブルタップアクション"
                },
                doubleClickModifier: {
                    label: "ダブルクリック修飾子",
                    description: "ダブルクリックアクションには修飾子が必要です"
                },
                tripleClickAction: {
                    label: "3 回クリックするアクション",
                    description: "3回のクリックアクション"
                },
                tripleClickModifier: {
                    label: "スリークリックモディファイア",
                    description: "3 つのクリック アクションには修飾子が必要です"
                },
                reactEmoji: {
                    label: "リアクション絵文字",
                    description: "リアクションアクションに使用する絵文字"
                },
                addAdditionalReacts: {
                    label: "追加の反応を追加する",
                    description: "設定済みのリアクション絵文字も追加します"
                },
                additionalReactEmojis: {
                    label: "追加のリアクション絵文字",
                    description: "リアクションアクションを使用するときに追加する追加の絵文字 (カンマ/エンターで区切られ、最大 {{count}})"
                },
                disableInDms: {
                    label: "DMで無効にする",
                    description: "ダイレクトメッセージ内のすべてのクリックアクションを無効にする"
                },
                disableInSystemDms: {
                    label: "システムDMで無効にする",
                    description: "システム DM のすべてのクリック アクションを無効にする"
                },
                clickTimeout: {
                    label: "クリックタイムアウト",
                    description: "ダブル/トリプルクリックを区別するためのタイムアウト (ミリ秒)"
                },
                doubleClickHoldThreshold: {
                    label: "ダブルクリック保持のしきい値",
                    description: "ダブルクリック操作の最大保持時間 (ミリ秒)。 テキストの選択をより長く保持できるようにします"
                },
                deferDoubleClickForTriple: {
                    label: "ダブルクリックをトリプルクリックまで遅らせる",
                    description: "ダブルクリックを遅らせてトリプルクリックアクションを許可します (オフの場合、トリプルクリックは無効になります)"
                },
                selectionHoldTimeout: {
                    label: "選択保持タイムアウト",
                    description: "テキスト選択を許可するタイムアウト (ミリ秒)"
                },
                quoteWithReply: {
                    label: "引用で返信",
                    description: "引用する場合はメッセージにも返信してください"
                },
                useSelectionForQuote: {
                    label: "選択範囲を引用に使用する",
                    description: "引用する場合は、選択したテキストを使用します (利用可能な場合)"
                }
            },
            actions: {
                none: "なし",
                delete: "シル",
                copyLink: "リンクをコピー",
                copyID: "IDをコピーする",
                copyContent: "コンテンツをコピーする",
                copyUserID: "ユーザーIDをコピーする",
                edit: "編集",
                reply: "返事",
                react: "反応する",
                openThread: "オープントピック",
                openTab: "タブで開く",
                quote: "引用",
                pin: "ピン留めする"
            },
            missingPermissions: {
                react: "反応できません: 権限がありません",
                pin: "修正できません: 権限がありません",
            },
            cannotQuote: "このメッセージ タイプは引用符で囲むことができません",
            copy: {
                messageId: "メッセージIDがコピーされました!",
                messageContent: "メッセージ内容がコピーされました!",
                userId: "ユーザーIDがコピーされました！"
            },
            linkCopied: "リンクがコピーされました!"
        },
        messageColors: {
            name: "メッセージ色",
            description: "メッセージ内のカラーコード (#FF0042 など) を表示します。",
            option: {
                renderType: {
                    label: "可視化タイプ",
                    description: "色の表示方法を決定します",
                    textColor: "文字の色",
                    block: "隣のブロック",
                    backgroundColor: "背景色"
                },
                enableShortHexCodes: {
                    label: "短い 16 進コードを有効にする",
                    description: "#39f のような 3 文字の 16 進コードを有効にする"
                },
                blockView: {
                    label: "ブロックビュータイプ",
                    description: "カラーブロックの表示方法を決定します",
                    right: "右側",
                    left: "左",
                    both: "両側"
                }
            }
        },
        messageFetchTimer: {
            name: "メッセージフェッチタイマー",
            description: "現在のチャンネルのメッセージが読み込まれるまでにかかる時間を示します。",
            option: {
                showIcon: {
                    label: "アイコンを表示",
                    description: "メッセージバーに読み込み時間アイコンを表示"
                },
                showMs: {
                    label: "ミリ秒を表示",
                    description: "ミリ秒のタイミングを表示"
                },
                iconColor: {
                    label: "アイコンの色",
                    description: "アイコンの色 (CSS カラー値)"
                }
            },
            loaded: "メッセージは {{time}} ミリ秒 ({{timeAgo}}) で読み込まれました",
            day: "数日前",
            hour: "数時間前",
            minute: "数分前",
            justNow: "今"
        },
        messageLatency: {
            name: "メッセージ遅延",
            description: "送信に n 秒以上かかるメッセージのインジケーターを追加します。",
            day: "日",
            days: "日",
            hour: "一瞬",
            hours: "一瞬",
            minute: "分",
            minutes: "分",
            second: "2番",
            seconds: "2番",
            millisecond: "ミリ秒",
            milliseconds: "ミリ秒",
            and: "ve",
            oldKotlinDetected: "ユーザーは古い Discord Android クライアントを使用している疑いがあります。",
            ahead: "このユーザーの時間は {{delta}} 進んでいます。",
            delay: "このメッセージは {{delta}} 遅れて送信されました。",
            delayedMessage: "遅延メッセージ",
            oldAndroidClient: "従来の Discord Android クライアント",
            option: {
                latency: {
                    label: "遅れ",
                    description: "遅延インジケーターのしきい値 (秒)"
                },
                detectDiscordKotlin: {
                    label: "Discord Kotlin を検出する",
                    description: "古い Discord Android クライアントを検出する"
                },
                showMillis: {
                    label: "ミリ秒を表示",
                    description: "ミリ秒を表示"
                },
                ignoreSelf: {
                    label: "自分を無視する",
                    description: "独自のメッセージにインジケーターを追加する"
                }
            }
        },
        messageLinkEmbeds: {
            name: "メッセージリンク埋め込み",
            description: "別のメッセージへのリンクを含むメッセージにプレビューを追加します。",
            option: {
                messageBackgroundColor: {
                    label: "メッセージの背景色",
                    description: "リッチ埋め込みのメッセージの背景色"
                },
                automodEmbeds: {
                    label: "オートモッド埋葬",
                    description: "リッチ埋め込みの代わりに automod 埋め込みを使用します (サイズは小さいですが、含まれる情報は少なくなります)",
                    always: "常に automod 埋め込みを使用する",
                    prefer: "Automod 埋め込みを優先しますが、一部のコンテンツが表示できない場合はリッチ埋め込みを使用してください",
                    never: "automod の埋め込みは絶対に使用しないでください"
                },
                listMode: {
                    label: "リストモード",
                    description: "ID リストをブラックリストとして使用するかホワイトリストとして使用するかを決定します",
                    blacklist: "ブラックリスト",
                    whitelist: "ホワイトリスト"
                },
                idList: {
                    label: "IDリスト",
                    description: "ブラックリストまたはホワイトリストに追加するサーバー/チャネル/ユーザー ID (カンマ区切り)"
                },
                clearMessageCache: {
                    label: "メッセージキャッシュのクリア",
                    description: "リンクされたメッセージのキャッシュをクリアする"
                }
            },
            noContent: {
                noAttachments: "コンテンツがありません {{count}} 個の埋め込みメッセージ",
                noEmbeds: "コンテンツがありません {{count}} 追加",
                both: "コンテンツなし、添付ファイル {{attachments}} 個、埋め込みメッセージ {{embeds}} 個"
            },
            dm: "プライベートメッセージ",
            groupDm: "グループメッセージ",
            server: "プレゼンター"
        },
        messageLinkTooltip: {
            name: "メッセージリンクツールチップ",
            description: "メッセージ リンク、返信、転送されたメッセージの上にマウスを置くと、ツールヒントとメッセージ プレビューが追加されます。",
            loading: "読み込み中...",
            option: {
                onLink: {
                    label: "リンク上",
                    description: "メッセージリンクの上にマウスを置くとツールチップが表示されます"
                },
                onReply: {
                    label: "応答時",
                    description: "メッセージの返信にカーソルを合わせるとツールチップを表示します"
                },
                onForward: {
                    label: "送信されるメッセージについて",
                    description: "転送されたメッセージの上にマウスを置くとツールチップを表示します"
                },
                display: {
                    label: "外観",
                    description: "外観スタイル",
                    auto: "メッセージと同じ",
                    compact: "コンパクト",
                    cozy: "快適"
                }
            }
        },
        messageLogger: {
            name: "メッセージロガー",
            description: "削除および編集したメッセージを一時的に保存します。",
            removeMessage: "メッセージ履歴の削除",
            removeMessageTemporary: "メッセージの削除 (一時的)",
            clearMessageLog: "メッセージログのクリア",
            modal: {
                edit: {
                    title: "メッセージ編集履歴",
                    tooltip: "この編集状況は保存されていないため表示できません。"
                }
            },
            option: {
                deleteStyle: {
                    label: "スタイルの消去",
                    description: "削除されたメッセージの表示スタイル",
                    text: "赤文字",
                    overlay: "赤いコーティング"
                },
                logDeletes: {
                    label: "削除済みを保存",
                    description: "削除されたメッセージを保存するかどうかを決定します"
                },
                collapseDeleted: {
                    label: "削除されたものを折りたたむ",
                    description: "ブロックされたメッセージと同様に削除されたメッセージを絞り込む"
                },
                logEdits: {
                    label: "編集済みを保存",
                    description: "編集したメッセージを保存するかどうかを決定します"
                },
                inlineEdits: {
                    label: "インライン編集",
                    description: "メッセージコンテンツの一部として編集履歴を表示する"
                },
                ignoreBots: {
                    label: "ボットを無視する",
                    description: "ボットから送信されたメッセージを無視する"
                },
                ignoreSelf: {
                    label: "自分を無視する",
                    description: "自分自身のメッセージを無視する"
                },
                ignoreUsers: {
                    label: "ユーザーを無視する",
                    description: "無視するユーザー ID のカンマ区切りリスト"
                },
                ignoreChannels: {
                    label: "チャンネルを無視する",
                    description: "無視するチャネル ID のカンマ区切りリスト"
                },
                ignoreGuilds: {
                    label: "サーバーを無視する",
                    description: "無視するサーバー ID のカンマ区切りリスト"
                },
                showEditDiffs: {
                    label: "編集の差異を表示",
                    description: "編集されたメッセージのバージョン間の違いを表示する"
                },
                separatedDiffs: {
                    label: "分割された差異",
                    description: "追加と削除を相違点に分けて表示することで、より読みやすいビューを提供します。"
                }
            }
        },
        messageLoggerEnhanced: {
            name: "メッセージロガー強化版",
            description: "追加機能により MessageLogger プラグインが強化されます。",
            updateImageCacheDir: "ビジュアル キャッシュ ディレクトリが正常に更新されました。",
            updateLogsDir: "ログ ディレクトリは正常に更新されました。",
            failedUpdate: "ディレクトリを更新できませんでした。",
            blacklist: "ブラックリスト",
            whitelist: "ホワイトリスト",
            failedToRemove: "メッセージを削除できませんでした",
            successfullyImported: "ログは正常にインポートされました。",
            errorImportingLogs: "ログのインポート中にエラーが発生しました。 詳細については、コンソールを確認してください。",
            importing: "インポート中...",
            importLogs: "インポートログ",
            exporting: "エクスポート中...",
            exportLogs: "ログのエクスポート",
            alert: {
                clearLogs: {
                    title: "ログをクリアする",
                    body: "すべてのログをクリアしてもよろしいですか?",
                    confirmText: "クリア",
                    cancel: "キャンセル"
                },
                clearVisibleLogs: {
                    title: "表示されているログをクリアする",
                    body: "{{messages}} ログをクリアしてもよろしいですか?",
                    confirmText: "クリア",
                    cancel: "キャンセル"
                },
                cleared: "メッセージ ログ データベースとキャッシュがクリアされました。"
            },
            context: {
                title: "メッセージログ",
                jumpToMessage: "メッセージに移動",
                openUserProfile: "ユーザープロフィールを開く",
                copyContent: "コンテンツをコピーする",
                copyUserId: "ユーザーIDをコピーする",
                copyMessageId: "メッセージIDをコピー",
                copyChannelId: "チャンネルIDをコピー",
                copyServerId: "サーバーIDのコピー",
                deleteLog: "ログの削除",
                fromUsernameDm: "{{username}} の DM から",
                fromGroupDm: "{{channelName}} グループの DM",
                fromServerChannel: "サーバー {{serverName}} のチャンネル {{channelName}} から",
                moveTypeTo: "{{type}} を {{destination}} に移動",
                removeTypeFrom: "{{list}} から {{type}} を削除します",
                openLogsFor: "{{name}} のログを開く",
                openLogs: "ログを開く",
                removeMessage: "メッセージの削除 (永久)",
                removeMessageHistory: "メッセージ履歴の削除 (永続的)",
                deleteMessageHide: "メッセージの削除 (メッセージロガーから非表示)",
                addServerToBlacklist: "サーバーをブラックリストに追加",
                addServerToWhitelist: "サーバーをホワイトリストに追加",
                removeServerFromBlacklist: "ブラックリストからサーバーを削除",
                removeServerFromWhitelist: "ホワイトリストからサーバーを削除",
                moveServerToBlacklist: "サーバーをブラックリストに移動",
                moveServerToWhitelist: "サーバーをホワイトリストに移動",
                addUserToBlacklist: "ユーザーをブラックリストに追加",
                addUserToWhitelist: "ユーザーをホワイトリストに追加",
                removeUserFromBlacklist: "ブラックリストからユーザーを削除",
                removeUserFromWhitelist: "ホワイトリストからユーザーを削除",
                moveUserToBlacklist: "ユーザーをブラックリストに移動",
                moveUserToWhitelist: "ユーザーをホワイトリストに移動",
                addChannelToBlacklist: "チャンネルをブラックリストに追加",
                addChannelToWhitelist: "チャンネルをホワイトリストに追加",
                removeChannelFromBlacklist: "ブラックリストからチャンネルを削除",
                removeChannelFromWhitelist: "ホワイトリストからチャンネルを削除",
                moveChannelToBlacklist: "チャンネルをブラックリストに移動",
                moveChannelToWhitelist: "チャンネルをホワイトリストに移動"
            },
            type: {
                server: "プレゼンター",
                user: "ユーザー",
                channel: "チャネル"
            },
            button: {
                chooseFolder: "フォルダーの選択",
                browse: "ゴザット",
                clearLogs: "すべてのログをクリア",
                clearVisibleLogs: "表示されているログをクリアする",
                sortOldest: "古いものから新しいものへ並べ替える",
                sortNewest: "新しい順に並べ替える",
                loadMore: "もっと読み込む",
                noResults: "{{tab}} タブに結果がありません",
                tryOtherTabs: "{{nextTab}} または {{lastTab}} タブをお試しください",
                importLogs: "インポートログ"
            },
            modal: {
                title: "メッセージのフィルタリング",
                deleted: "削除されました",
                edited: "整頓された",
                ghostPing: "目に見えない Ping",
                empty: "空いてるね",
                importLogs: "ML Enhanced では、ログが IndexedDB に保存されるようになりました。 古いログをログ ディレクトリからインポートする必要があります。 インポートしても既存のログは変更されません。"
            },
            clear: {
                title: "ログをクリアする",
                description: "すべてのログをクリアしてもよろしいですか?",
                confirm: "クリア",
                cancel: "キャンセル"
            },
            option: {
                saveMessages: {
                    label: "メッセージを保存する",
                    description: "削除および編集したメッセージを保存するかどうかを決定します。"
                },
                saveImages: {
                    label: "画像の保存",
                    description: "削除した添付ファイルを保存します。"
                },
                sortNewest: {
                    label: "新しい順に並べ替える",
                    description: "ログを最新順に並べ替えます。"
                },
                cacheMessagesFromServers: {
                    label: "サーバーからのメッセージをキャッシュする",
                    description: "通常、ロガーはホワイトリストに登録された ID と DM のみを記録しますが、このオプションを有効にすると、すべてのサーバー上のメッセージも記録されます。 ただし、これはキャッシュ制限を超える可能性があり、一部のメッセージがスキップされる可能性があります。"
                },
                ignoreBots: {
                    label: "ボットを無視する",
                    description: "ボットメッセージを無視します。"
                },
                ignoreWebhooks: {
                    label: "Webhooklarıヨクサイ",
                    description: "Webhook メッセージを無視します。"
                },
                ignoreSelf: {
                    label: "自分を無視する",
                    description: "自分自身のメッセージは無視してください。"
                },
                ignoreMutedGuilds: {
                    label: "ミュートされたサーバーを無視する",
                    description: "ミュートされたサーバー上のメッセージは記録されません。 ただし、ホワイトリストに登録されたユーザー/チャネルは引き続き記録されます。"
                },
                ignoreMutedCategories: {
                    label: "ミュートされたカテゴリを無視する",
                    description: "ミュートされたカテゴリに属する​​チャンネルのメッセージは録音されません。"
                },
                ignoreMutedChannels: {
                    label: "ミュートされたチャンネルを無視する",
                    description: "ミュートされたチャンネルのメッセージは録音されません。"
                },
                alwaysLogDirectMessages: {
                    label: "DMは必ず保存する",
                    description: "ダイレクトメッセージは必ず保存してください。"
                },
                alwaysLogCurrentChannel: {
                    label: "現在のチャンネルを常に保存する",
                    description: "現在のチャンネルを常に保存します。 ブラックリストに登録されたチャンネル/ユーザーは除外されます。"
                },
                permanentlyRemoveLogByDefault: {
                    label: "デフォルトでログを完全に削除",
                    description: "MessageLogger のメイン コンテキスト メニューでは、メッセージ ログから削除するオプションはデフォルトで完全に削除されています。"
                },
                hideMessageFromMessageLoggers: {
                    label: "ロガーからのメッセージを非表示にする",
                    description: "有効にすると、他のロガーからのメッセージを非表示にするコンテキスト メニュー オプションが追加されます。 安全ではない可能性がありますので、ご自身の責任でご使用ください。"
                },
                showLogsButton: {
                    label: "「ログを表示」ボタン",
                    description: "ツールバーの表示/非表示を切り替えます。"
                },
                showWhereMessageIsFrom: {
                    label: "メッセージのソースを表示",
                    description: "メッセージのチャネル/作成者およびサーバー名を表示します。"
                },
                messagesToDisplayAtOnceInLogs: {
                    label: "ログに同時に表示するメッセージの数",
                    description: "一度にログに表示するメッセージの数と、さらにメッセージが読み込まれるときに追加されるメッセージの量を決定します。"
                },
                hideMessageFromMessageLoggersDeletedMessage: {
                    label: "メッセージロガーから隠されるメッセージコンテンツ",
                    description: "メッセージロガーから非表示にするときにメッセージを置き換えるコンテンツが使用されます。"
                },
                messageLimit: {
                    label: "メッセージ制限",
                    description: "保存するメッセージの最大数。 制限を超えると、古いメッセージは削除されます。 0 = 無制限。"
                },
                attachmentSizeLimitInMegabytes: {
                    label: "添付ファイルのサイズ制限 (MB)",
                    description: "保存する添付ファイルの最大サイズ (MB 単位)。 この値より大きい添付ファイルは保存されません。"
                },
                attachmentFileExtensions: {
                    label: "追加のファイル拡張子",
                    description: "保存するファイル拡張子のカンマ区切りのリスト。 空白のままにすると、すべての添付ファイルが保存されます。"
                },
                cacheLimit: {
                    label: "キャッシュ制限",
                    description: "キャッシュに保持するメッセージの最大数。 制限を超えると、古いメッセージは削除されます。"
                },
                timeBasedCleanupMinutes: {
                    label: "時間ベースの分単位のクリーニング",
                    description: "メッセージ制限を超えた古いメッセージの時間ベースのクリーニングが実行される分間隔。"
                },
                preserveCurrentChannel: {
                    label: "現在のチャンネルを維持する",
                    description: "有効にすると、現在選択しているチャネルのメッセージは時間ベースのクリーニングの影響を受けません。"
                },
                whitelistedIds: {
                    label: "ホワイトリストID",
                    description: "ホワイトリストに登録されたサーバー、チャネル、またはユーザー ID。"
                },
                blacklistedIds: {
                    label: "ブラックリストID",
                    description: "ブラックリストに登録されたサーバー、チャネル、またはユーザー ID。"
                },
                imageCacheDir: {
                    label: "ビジュアルキャッシュディレクトリ",
                    description: "保存した画像のディレクトリを選択します。"
                },
                logsDir: {
                    label: "ログインデックス",
                    description: "ログを保存するディレクトリを選択します。"
                },
                importLogs: {
                    label: "インポートログ",
                    description: "ファイルからログをインポートします。"
                },
                exportLogs: {
                    label: "ログのエクスポート",
                    description: "IndexedDB からログをエクスポートします。"
                },
                openLogs: {
                    label: "ログを開く",
                    description: "ログを開きます。"
                },
                openImageCacheFolder: {
                    label: "ビジュアルキャッシュフォルダーを開く",
                    description: "ビジュアルキャッシュディレクトリを開きます。"
                },
                clearLogs: {
                    label: "ログをクリアする",
                    description: "ログをクリアします。",
                    title: "ログをクリアする",
                    body: "すべてのログをクリアしてもよろしいですか?",
                    confirmText: "クリア",
                    cancel: "キャンセル"
                }
            }
        },
        messageNotifier: {
            name: "メッセージ通知者",
            description: "選択したユーザーがメッセージを送信したときに通知を受け取る",
            dm: "プライベートメッセージ",
            option: {
                users: {
                    label: "ユーザー",
                    description: "メッセージ通知を受信するユーザー ID のカンマ区切りリスト",
                    invalidId: "{{id}} は有効なユーザー ID ではありません"
                }
            },
            notification: {
                title: "{{username}} がメッセージを送信しました",
                body: "クリックして {{locationName}} に移動します"
            }
        },
        messageTags: {
            name: "メッセージタグ",
            description: "メッセージを保存し、簡単なコマンドで使用できます。",
            notExist: "タグ **{{タグ名}}** は使用できなくなりました。 Discordを再起動して修正してください:)",
            alreadyExist: "**{{タグ名}}** という名前のタグはすでに存在します。",
            sentTag: "**{{タグ名}}** タグが送信されました。",
            successCreate: "**{{タグ名}}** タグが正常に作成されました。",
            allTags: "すべてのタグ:",
            noTags: "UPS！ まだタグがありません。タグを作成するには /tag create を使用してください。",
            noDeleteTag: "**{{tagname}}** という名前のタグが見つからなかったため、削除できません。",
            successDelete: "タグ**{{name}}**は正常に削除されました。",
            tagPreview: "**{{name}}** という名前のタグは存在しません。",
            option: {
                clyde: {
                    label: "クライドの投稿メッセージ",
                    description: "有効にすると、タグが使用されたときに Clyde が一時メッセージを送信します。"
                },
                tagsList: {
                    label: "タグリスト",
                    description: ""
                }
            },
            command: {
                tags: {
                    description: "独自のタグを管理する",
                    option: {
                        create: {
                            description: "新しいラベルを作成する",
                            name: "応答をトリガーするタグの名前",
                            message: "このハッシュタグを使用すると送信されるメッセージ"
                        },
                        list: {
                            description: "すべてのタグをリストする"
                        },
                        delete: {
                            description: "タグを削除する",
                            name: "削除するタグの名前"
                        },
                        preview: {
                            description: "タグを公開せずにプレビューする",
                            name: "プレビューするタグの名前"
                        }
                    }
                }
            }
        },
        micLoopbackTester: {
            name: "マイクループバックテスター",
            description: "ユーザーパネルにマイクループテストアイコンを追加",
            button: "マイクのテストサイクル"
        },
        middleClickTweaks: {
            name: "MiddleClickTweaks",
            description: "貼り付けやリンクを開くなど、さまざまな中クリック (マウス ホイール) の改善。",
            option: {
                openScope: {
                    label: "スコープを開く",
                    description: "これにより、これらのコンテンツ タイプが中クリックされたときに開かなくなります。",
                    links: "リンク",
                    media: "メディア",
                    linksAndMedia: "リンクとメディア",
                    none: "なし"
                },
                pasteScope: {
                    label: "結合範囲",
                    description: "場合によっては、中クリックすると貼り付けができなくなります。",
                    always: "中クリックによる貼り付けを常にブロックする",
                    focus: "テキスト領域がフォーカスされていない場合のみブロックする",
                },
                pasteThreshold: {
                    label: "結合閾値",
                    description: "中クリックした後、貼り付けが再び有効になるまでに必要なミリ秒。"
                }
            }
        },
        moreCommands: {
            name: "その他のコマンド",
            description: "エコー、レニー、モックなど",
            command: {
                echo: {
                    description: "Clyde としてメッセージを送信します (ローカル)"
                },
                lenny: {
                    description: "レニーの顔を送信します"
                },
                mock: {
                    description: "人をからかう (mOcK PeOpLe)"
                },
                wordcount: {
                    description: "メッセージ内の単語数を計算します",
                    response: "メッセージには {{count}} 語が含まれています。"
                },
                flipcoin: {
                    description: "コインを投げて結果を返す",
                    heads: "書き込み",
                    tails: "トゥーラ",
                    response: "お金 {{result}} が届きました。"
                },
                ask: {
                    description: "はい/いいえの質問と回答",
                    yes: "はい",
                    no: "いいえ",
                    maybe: "多分",
                    askAgain: "後でもう一度尋ねる",
                    definitelyNot: "絶対に違います",
                    itIsCertain: "まったくそのとおりです"
                },
                randomanimal: {
                    description: "ランダムな動物画像を返します",
                    animal: "あなたの動物を選んでください",
                    cat: "猫",
                    dog: "犬",
                    response: "申し訳ありませんが、現時点では動物の画像を取得できません"
                },
                randomnumber: {
                    description: "2 つの値の間の乱数を生成します",
                    min: "最小",
                    max: "最大値",
                    response: "{{min}} から {{max}} までの乱数: {{number}}"
                },
                choose: {
                    description: "与えられた選択肢の中からランダムに 1 つを選択します",
                    option: "オプションのカンマ区切りリスト",
                    response: "私の選択: {{選択}}"
                },
                systeminfo: {
                    description: "システム情報を表示します",
                    platform: "プラットフォーム",
                    deviceType: "デバイスの種類",
                    mobile: "モービル",
                    desktop: "デスクトップ",
                    browser: "スキャナー",
                    cpuCores: "CPUコア",
                    memory: "メモリ",
                    screen: "画面",
                    languages: "ディル",
                    network: "白",
                    online: "オンライン",
                    offline: "オフライン",
                    failedToFetch: "システム情報を取得できませんでした",
                    unknown: "未知"
                },
                getuptime: {
                    description: "クライアントの稼働時間を表示します",
                    response: "**クライアント稼働時間**: {{稼働時間}} 分"
                },
                gettime: {
                    description: "現在の時刻を表示します",
                    response: "現在時刻: {{time}}"
                },
                transform: {
                    description: "指定されたオプションに従ってテキストを変換します",
                    transformation: {
                        description: "テキストに適用する変換のタイプ",
                        lowercase: "テキストを小文字に変換する",
                        uppercase: "テキストを大文字に変換する",
                        localeLowercase: "テキストをネイティブの小文字に変換する",
                        localeUppercase: "テキストをネイティブの大文字に変換する",
                        same: "そのままにしておきます"
                    },
                    repeat: "何回繰り返されるのでしょうか？",
                    reverse: "テキストを反転するかどうか",
                    normalize: {
                        description: "テキストの正規化形式",
                        nfc: "正規化フォーマットC（NFC）",
                        nfd: "正規化形式 D (NFD)",
                        nfkc: "正規化フォーマット KC (NFKC)",
                        nfkd: "正規化フォーマット KD (NFKD)"
                    },
                    text: "変換するテキスト"
                }
            }
        },
        moreKaomoji: {
            name: "MoreKaomoji",
            description: "Discordに顔文字を追加します。 ヽ(´▽`)/"
        },
        moreQuickReactions: {
            name: "もっとクイックリアクション",
            description: "メッセージコンテキストメニューのクイックレスポンスボタンを改善しました。",
            option: {
                reactionCount: {
                    label: "反応数",
                    description: "表示するリアクションの数 (0 ～ 42)"
                },
                frequentEmojis: {
                    label: "よく使われる絵文字",
                    description: "お気に入りの絵文字の代わりによく使う絵文字を使用する"
                },
                rows: {
                    label: "彼らは売っています",
                    description: "表示するクイックリアクションの行数"
                },
                columns: {
                    label: "コラム",
                    description: "表示するクイックリアクションの列数"
                },
                compactMode: {
                    label: "コンパクトモッド",
                    description: "ボタンは元のサイズの 75% に拡大縮小され、内側の絵文字は 125% に拡大されます。 絵文字は元のサイズの 93.75% になります。 少なくとも 5 列を使用することをお勧めします"
                },
                scroll: {
                    label: "スクロール",
                    description: "絵文字リストのスクロールを有効にする"
                }
            }
        },
        moreUserTags: {
            name: "その他のユーザータグ",
            description: "Webhook とモデレーションロール (所有者、管理者など) のタグを追加します。",
            tag: {
                webhook: {
                    name: "Webhook",
                    description: "このユーザーは Webhook です"
                },
                owner: {
                    name: "所有者",
                    description: "サーバーの所有者"
                },
                admin: {
                    name: "管理者",
                    description: "管理者権限がある"
                },
                staff: {
                    name: "正式",
                    description: "サーバー、チャネル、またはロールを管理できる"
                },
                mod: {
                    name: "モジュール",
                    description: "メッセージを管理したり、連絡先をキック/禁止したりできます"
                },
                vcmod: {
                    name: "Modを参照",
                    description: "ボイスチャットを管理できる"
                },
                chatmod: {
                    name: "チャットモード",
                    description: "メッセージを管理できる"
                }
            },
            modal: {
                example: "例",
                tag: "チケット",
                customTextPlaceholder: "ラベル上のテキスト (デフォルト: {{displayName}})",
                messages: "メッセージに表示",
                memberList: "メンバーリストとプロフィールに表示"
            },
            option: {
                dontShowForBots: {
                    label: "ボットには表示しない",
                    description: "ボットの追加タグを表示します (Webhook を除く)"
                },
                dontShowBotTag: {
                    label: "ボットタグを表示",
                    description: "余分なタグのみを表示 / [APP] を非表示"
                },
                showWebhookTagFully: {
                    label: "Webhook タグ全体を表示",
                    description: "フォローされているチャネルに完全な Webhook タグを表示します (アナウンスなど)"
                },
                tagSettings: {
                    label: "タグ設定",
                    description: "満たされる"
                }
            }
        },
        morse: {
            name: "モールス信号",
            description: "モールス信号に、またはモールス信号から変換するコマンド。",
            command: {
                morse: {
                    description: "モールス信号への、またはモールス信号からの変換",
                    message: "変換するテキスト"
                }
            }
        },
        moyai: {
            name: "もやい",
            description: "🗿🗿🗿🗿🗿🗿🗿🗿",
            option: {
                volume: {
                    label: "音量",
                    description: "🗿🗿🗿ボリューム"
                },
                quality: {
                    label: "品質",
                    description: "🗿🗿🗿品質",
                    normal: "普通",
                    hd: "HD"
                },
                triggerWhenUnfocused: {
                    label: "焦点が合っていないときにトリガー",
                    description: "ウィンドウにフォーカスが合っていない場合でも 🗿 をトリガーします"
                },
                ignoreBots: {
                    label: "ボットを無視する",
                    description: "ボットからのメッセージを無視する"
                },
                ignoreBlocked: {
                    label: "ブロックされたユーザーを無視する",
                    description: "ブロックされたユーザーからのメッセージを無視する"
                }
            }
        },
        musicControls: {
            name: "音楽コントロール",
            description: "複数のサービスの音楽コントロールと歌詞",
            option: {
                SpotifySectionTitle: {
                    label: "スポティファイ"
                },
                showSpotifyControls: {
                    label: "Spotify コントロールを表示",
                    description: "Spotify の音楽コントロールを表示する"
                },
                showSpotifyLyrics: {
                    label: "Spotify の歌詞を表示",
                    description: "Spotify の歌詞を表示する"
                },
                useSpotifyUris: {
                    label: "Spotify URI を使用する",
                    description: "Spotify は URL ではなく URI を開きます。 Spotify がインストールされている場合にのみ機能し、すべてのプラットフォームで機能するとは限りません"
                },
                previousButtonRestartsTrack: {
                    label: "「前へ」ボタンで曲を再開します",
                    description: "再生時間が 3 秒を超える場合は、前へボタンを押すと、現在の曲を最初から開始します。"
                },
                TidalSectionTitle: {
                    label: "潮汐"
                },
                showTidalControls: {
                    label: "潮汐制御を表示する",
                    description: "Tidal の音楽コントロールを表示する"
                },
                showTidalLyrics: {
                    label: "タイダルの歌詞を表示",
                    description: "タイダルの歌詞を表示"
                },
                YtmSectionTitle: {
                    label: "YouTube ミュージック",
                    description: "この設定には {{app}} が必要です"
                },
                showYoutubeMusicControls: {
                    label: "YouTube ミュージック コントロールを表示する",
                    description: "YouTube Music の音楽コントロールを表示する"
                },
                YoutubeMusicApiUrl: {
                    label: "YouTube Music API URL の",
                    description: "使用している YouTube Music API サーバーの URL"
                },
                hoverControls: {
                    label: "ホバーコントロール",
                    description: "ホバー時にコントロールを表示"
                },
                ShowMusicNoteOnNoLyrics: {
                    label: "歌詞がない場合はノートを表示",
                    description: "歌詞が見つからない場合にメモアイコンを表示する"
                },
                LyricsPosition: {
                    label: "歌詞の場所",
                    description: "歌詞パネルの場所",
                    above: "上記のプレーヤー",
                    below: "プレーヤーの下"
                },
                LyricsProvider: {
                    label: "歌詞プロバイダー",
                    description: "歌詞の出典",
                    spotify: "Spotify（ミュージックマッチ）",
                    LRCLIB: "LRCLIB"
                },
                TranslateTo: {
                    label: "あなたの言語に翻訳してください",
                    description: "歌詞を翻訳する — これを変更すると、既存の翻訳がクリアされます",
                    cleared: "翻訳がクリーンになりました"
                },
                LyricsConversion: {
                    label: "歌詞変換",
                    description: "歌詞を自動的に翻訳またはローマ字化する",
                    none: "なし",
                    translate: "変換する",
                    romanize: "ローマ字化して"
                },
                FallbackProvider: {
                    label: "バックアッププロバイダー",
                    description: "1 つの歌詞プロバイダーが失敗した場合は、別の歌詞プロバイダーを試してください"
                },
                ShowFailedToasts: {
                    label: "失敗通知を表示する",
                    description: "歌詞の読み込みに失敗した場合に通知を表示する"
                },
                PurgeLyricsCache: {
                    label: "歌詞キャッシュのクリア",
                    description: "キャッシュされた歌詞と翻訳をすべて削除します",
                    button: "キャッシュのクリア",
                    cacheLyricsPurged: "歌詞キャッシュがクリアされました"
                }
            },
            context: {
                spotify: {
                    label: "Spotify の歌詞メニュー",
                    type: "Spotify {{type}} メニュー",
                    copy: "{{type}} の名前をコピー",
                    link: "{{type}} リンクをコピー",
                    open: "Spotify で {{type}} を開きます",
                    album: "Spotify のアルバムメニュー"
                },
                tidal: {
                    label: "タイダル歌詞メニュー",
                    lyrics: "タイダルの歌詞",
                    type: "潮汐 {{name}} メニュー",
                    copy: "名前をコピー {{name}}",
                    open: "Tidal で {{name}} を開く",
                    album: "潮汐アルバムメニュー"
                },
                ytm: {
                    type: "YouTube Music {{name}} メニュー",
                    copy: "名前をコピー {{name}}",
                    open: "{{name}} の YouTube Music の機能",
                    album: "YouTube ミュージック アルバム メニュー",
                    muted: "ミュート"
                },
                lyrics: {
                    provider: "歌詞プロバイダー",
                    saved: "記録された",
                    notFound: "同期歌詞が見つかりません"
                },
                copy: {
                    currentLyrics: "現在の歌詞をコピーする"
                }
            },
            alert: {
                lyricCopied: "歌詞がクリップボードにコピーされました!",
                noLyrics: "歌詞はありません",
                noLyricsTo: "{{翻訳済み}} の歌詞はありません",
                translate: "翻訳",
                romanize: "ローマ字化しないでください",
                lyricsFetchFailed: "歌詞が見つかりませんでした",
                failedToFetchLyrics: "{{翻訳済み}} を取得できませんでした",
                translation: "翻訳",
                romanization: "ローマ字",
                failedToFetchTranslation: "{{翻訳済み}}の歌詞の翻訳を取得できませんでした"
            },
            modal: {
                install: {
                    title: "インストール方法",
                    install: "{{link}} ここからインストールし、TidaLuna 設定 → アドオン ストア → @vmohammad/api のインストールに移動します",
                    tidaluna: "ルナなし"
                },
                player: {
                    noPlaying: "再生中のトラックがありません",
                    artist: "アーティスト：",
                    album: "アルバム：",
                    noLyrics: "歌詞が見つかりません:(",
                    progress: "進捗",
                    totalDuration: "合計所要時間"
                },
                type: {
                    song: "歌",
                    artist: "アーティスト",
                    album: "アルバム"
                },
                album: {
                    open: "アルバムを開く",
                    viewCover: "アルバムカバーを見る",
                    volume: "音量",
                    image: "アルバム画像"
                }
            },
            provider: {
                lrclib: "LRCLIB",
                spotify: "スポティファイ",
                translated: "翻訳済み",
                romanized: "ローマ字表記",
                none: "なし"
            },
            error: {
                failed: "ウィンドウの作成に失敗しました:(",
                checkConsole: "コンソールにエラーがないか確認してください",
                invalidUrlCustomApi: "カスタム API サーバーの URL 形式が無効です"
            }
        },
        mutualGroupDMs: {
            name: "相互グループDM",
            description: "プロフィールに共有グループDMを表示します",
            no: "共通グループなし",
            mutualGroup: "{{count}} 個の共通グループ",
            members: "メンバー",
            noGroup: "公開グループDMはありません",
            header: "共通グループ"
        },
        neverPausePreviews: {
            name: "決して一時停止しないプレビュー",
            description: "アプリがフォーカスを失った場合でも、通話中/PiP プレビュー (画面共有、ブロードキャストなど) が一時停止されないようにします。",
            about: "このアドオンにより、Discord は通常よりも多くのリソースを消費します。"
        },
        newGuildSettings: {
            name: "新しいギルド設定",
            description: "新しいサーバーに参加するときに、自動的にミュートし、その他のさまざまな設定を変更します",
            context: {
                apply: "新しいサーバー設定を適用する"
            },
            option: {
                guild: {
                    label: "ミュートサーバー",
                    description: "サーバーを自動的にミュートする"
                },
                messages: {
                    label: "サーバー通知設定",
                    description: "サーバー通知設定",
                    all: "すべてのメッセージ",
                    mentions: "@メンションのみ",
                    nothing: "なし",
                    default: "サーバーのデフォルト"
                },
                everyone: {
                    label: "@everyone と @here を抑制します",
                    description: "@everyone と @here の通知を抑制する"
                },
                role: {
                    label: "すべてのロールの @メンションを抑制する",
                    description: "すべてのロールの @メンションを抑制する"
                },
                highlights: {
                    label: "ハイライトを抑制する",
                    description: "ハイライトを自動的に抑制する"
                },
                events: {
                    label: "新しいイベントをミュートする",
                    description: "新しいイベントを自動的にミュートする"
                },
                showAllChannels: {
                    label: "すべてのチャンネルを表示",
                    description: "すべてのチャンネルを自動的に表示する"
                },
                mobilePush: {
                    label: "モバイル通知をミュートする",
                    description: "モバイル通知を自動的に無音にする"
                },
                voiceChannels: {
                    label: "音声チャンネル",
                    description: "音声チャンネル内の名前を自動的に非表示にする"
                }
            }
        },
        newPluginsManager: {
            name: "新しいプラグインマネージャー",
            description: "新しいプラグインが Plexcord に追加されたときに通知してくれる便利なツール",
            modal: {
                title: "新しいプラグインと設定",
                description: "前回の訪問以降、新しいプラグインと設定が追加されました。 以下の新しく追加された内容を確認してください。",
                tooltip: "このセッションは終了します",
                dontShowAgain: "二度と見せないでください",
                restartRequired: "次のプラグインは再起動が必要です",
                restart: "再起動",
                continue: "デヴァム・エット"
            }
        },
        noAppsAllowed: {
            name: "許可されたアプリはありません",
            description: "ボットの Bot タグを戻します"
        },
        noBlockedMessages: {
            name: "ブロックされたメッセージがありません",
            description: "ブロック/無視されたすべてのメッセージをチャットから完全に非表示にします",
            option: {
                alsoHideIgnoredUsers: {
                    label: "無視されたユーザーも非表示にする",
                    description: "無視されたユーザーからのメッセージも非表示にします。"
                },
                disableNotifications: {
                    label: "通知を無効にする",
                    description: "ブロックされたユーザーの新着メッセージ通知を非表示にします。 「デフォルト ユーザーの非表示」機能が有効であり、通知をトリガーしたユーザーが「例外ユーザー」リストに含まれていない場合は、次のことが常に適用されます。"
                },
                allowAutoModMessages: {
                    label: "AutoMod メッセージを許可する",
                    description: "AutoMod によって送信されたメッセージがフィルタリングされずに通過できるようにします。"
                },
                hideBlockedUserReplies: {
                    label: "ブロックされたユーザーの返信を非表示にする",
                    description: "以前に参加したことのあるスレッドでブロックされたユーザーからのメッセージを非表示にします。"
                },
                defaultHideUsers: {
                    label: "デフォルトのユーザーの非表示",
                    description: "有効にすると、ブロックされたユーザーからのメッセージは完全に非表示になり、代わりに例外リスト内のユーザー ID からのメッセージが折りたたまれます (デフォルトの Discord の動作)。 無効にすると、ブロックされたユーザーからのメッセージは折りたたまれ、例外リスト内のユーザー ID からのメッセージは完全に非表示になります。"
                },
                overrideUsers: {
                    label: "例外ユーザー",
                    description: "上記で選択したデフォルトの動作の代わりに、非表示または折りたたむユーザー ID のカンマ区切りのリスト。"
                }
            }
        },
        noBulletPoints: {
            name: "箇条書きなし",
            description: "マークダウンの箇条書き (•、-、*) は書くことを妨げます (悪い習慣)"
        },
        noDeepLinks: {
            name: "ディープリンクを無効にする",
            description: "Discordのデスクトップアプリを強制的に開こうとする迷惑なディープリンク機能を無効にします"
        },
        noDeleteSafety: {
            name: "いいえ削除安全性",
            description: "サーバーを削除する際の「サーバー名の入力」要件を削除します。",
            option: {
                confirmModal: {
                    label: "確認ウィンドウ",
                    description: "「このサーバーを削除してもよろしいですか?」確認ウィンドウを表示しますか?"
                }
            },
            modal: {
                title: "サーバーを削除しますか?",
                body: "それがまだ明らかではなかったとしても、それは永続的になります。",
                confirm: "シル",
                cancel: "キャンセル"
            }
        },
        noDevtoolsWarning: {
            name: "いいえ開発ツール警告",
            description: "コンソール上の「LET'S HIT」警告バナーを無効にします。 副作用として、Discord がトークンを隠すことも防止され、ランダムなログアウトが防止されます。"
        },
        noF1: {
            name: "F1号",
            description: "F1 キーを押すと、ヘルプ ショートカットが無効になります。"
        },
        noMaskedUrlPaste: {
            name: "NoMaskedUrlPaste",
            description: "テキストを選択した状態でリンクを貼り付けると、リンクがマスクされた URL として貼り付けられなくなります。"
        },
        noMirroredCamera: {
            name: "いいえミラーカメラ",
            description: "カメラが画面をミラーリングするのを防ぎます。"
        },
        noModalAnimation: {
            name: "いいえモーダルアニメーション",
            description: "すべてのモーダル ウィンドウで開閉アニメーションを無効にします。"
        },
        noMosaic: {
            name: "ノーモザイク",
            description: "Discordのビジュアルモザイクレイアウトを削除します。",
            option: {
                inlineVideo: {
                    label: "インラインビデオ",
                    description: "モーダルをループせずにビデオを再生します。"
                }
            }
        },
        noNitroUpsell: {
            name: "ニトロアップセルなし",
            description: "クライアントを騙して、あなたが Nitro を所有していると思わせることで、Discord からすべての Nitro セール通知を削除します。"
        },
        noOnboarding: {
            name: "いいえオンボーディング",
            description: "Discordのサーバー参加プロセスをスキップすることで、より高速なログインが可能になります。"
        },
        noOnboardingDelay: {
            name: "オンボーディング遅延なし",
            description: "遅くて煩わしいサーバー参加遅延を回避します。"
        },
        noPendingCount: {
            name: "保留中の数",
            description: "友達リクエスト、メッセージリクエスト、Nitro オファーの受信に関する通知の数を削除します。",
            option: {
                hideFriendRequestsCount: {
                    label: "友達リクエスト数を非表示にする",
                    description: "受信した友達リクエストの数を非表示にする"
                },
                hideMessageRequestsCount: {
                    label: "メッセージリクエスト数を非表示にする",
                    description: "メッセージリクエストの数を非表示にする"
                },
                hidePremiumOffersCount: {
                    label: "Nitro オファー数を非表示にする",
                    description: "ニトロオファーの数を非表示にする"
                }
            }
        },
        noProfileThemes: {
            name: "プロファイルテーマなし",
            description: "自分以外の全員の Nitro プロフィール テーマを完全に削除します。"
        },
        noPushToTalk: {
            name: "プッシュトゥトークなし",
            description: "プッシュツートークを必要とするチャネルでの音声アクティビティのプッシュツートーク要件をバイパスします。"
        },
        noReplyMention: {
            name: "返信なし",
            description: "デフォルトで応答 ping を無効にします。",
            option: {
                userList: {
                    label: "ユーザーリスト",
                    description: "ping を許可または免除されるユーザーのリスト (カンマまたはスペースで区切る必要があります)"
                },
                roleList: {
                    label: "役割リスト",
                    description: "ping を許可または免除するロールのリスト (カンマまたはスペースで区切る必要があります)"
                },
                shouldPingListed: {
                    label: "Ping リストに登録済み",
                    description: "行動",
                    dontPing: "リストされたユーザー/ロールに ping を送信する",
                    onlyPing: "リストされたユーザー/ロールのみに ping を実行する"
                },
                inverseShiftReply: {
                    label: "逆シフト応答動作",
                    description: "Discord のシフト返信動作を逆転します (有効にするとシフト返信時にユーザーに言及します)"
                }
            }
        },
        normalizeMessageLinks: {
            name: "メッセージリンクの正規化",
            description: "メッセージ リンクから Canary/ptb プレフィックスを削除します。"
        },
        noRoleHeaders: {
            name: "役割ヘッダーなし",
            description: "私たちは皆平等です!!メンバーリストからロールタイトルを削除します。"
        },
        noRPC: {
            name: "NoRPC",
            description: "Discord はリッチ プレゼンスを無効にします。"
        },
        noServerEmojis: {
            name: "FromServer絵文字",
            description: "サーバーはオートコンプリート メニューに絵文字を表示しません。",
            option: {
                shownEmojis: {
                    label: "表示される絵文字",
                    description: "オートコンプリート メニューに表示する絵文字を選択します",
                    onlyUnicode: "Unicode 絵文字のみ",
                    currentServer: "Unicode 絵文字と現在のサーバー上の絵文字",
                    all: "Unicode 絵文字とすべてのサーバー絵文字 (Discord のデフォルト)"
                }
            }
        },
        noSystemBadge: {
            name: "システムバッジなし",
            description: "タスクバーとシステムトレイの未読通知バッジを無効にします。"
        },
        notificationTitle: {
            name: "通知タイトル",
            description: "デスクトップ通知をより有益なものにします。"
        },
        notificationVolume: {
            name: "通知ボリューム",
            description: "Discord の通知のカスタム音量を設定します。",
            option: {
                notificationVolume: {
                    label: "通知音",
                    description: "通知量"
                }
            }
        },
        noTypingAnimation: {
            name: "タイピングなしアニメーション",
            description: "チャットでの入力アニメーションを無効にします。"
        },
        noUnblockToJump: {
            name: "いいえUnblockToJump",
            description: "これにより、ブロックまたは無視されたユーザー (および場合によってはスパマー) からのメッセージを、ブロックを解除せずにスキップできます。"
        },
        onePingPerDM: {
            name: "OnePingPerDM",
            description: "ユーザーが DM で連続して未読メッセージを送信した場合でも、音声通知は 1 回だけ受信されます。",
            option: {
                channelToAffect: {
                    label: "影響を受けるチャネルの種類",
                    description: "プラグインが影響する DM のタイプを選択します",
                    both: "両方",
                    user: "ユーザーDM",
                    group: "グループDM"
                },
                allowMentions: {
                    label: "@AllowMentions",
                    description: "@メンションの音声通知を受け取る"
                },
                allowEveryone: {
                    label: "@Everyone を許可する",
                    description: "グループDMで@everyoneと@hereの音声通知を受け取る"
                },
                ignoreUsers: {
                    label: "無視するユーザー",
                    description: "通知を決して制限しないユーザー ID (カンマ + スペースで区切る)"
                },
                alwaysPlaySound: {
                    label: "常にサウンドを再生する",
                    description: "通知音が無効になっていても音を鳴らす"
                }
            }
        },
        openInApp: {
            name: "アプリ内で開く",
            description: "ブラウザの代わりに関連アプリケーションでリンクを開きます",
            option: {
                spotify: {
                    label: "スポティファイ",
                    description: "Spotify アプリで Spotify リンクを開く"
                },
                steam: {
                    label: "スチーム",
                    description: "Steam アプリで Steam リンクを開く"
                },
                epic: {
                    label: "エピック ゲームズ",
                    description: "Epic Games Launcher で Epic Games のリンクを開く"
                },
                tidal: {
                    label: "潮汐",
                    description: "Tidal アプリで Tidal リンクを開く"
                },
                itunes: {
                    label: "iTunes",
                    description: "iTunes アプリで Apple Music のリンクを開く"
                },
                vrcx: {
                    label: "VRChat",
                    description: "VRChat アプリで VRChat リンクを開く"
                }
            },
            notification: {
                open: "ネイティブアプリで開かれたリンク"
            }
        },
        overrideForumDefaults: {
            name: "フォーラムのデフォルトを上書きする",
            description: "デフォルトのフォーラムのレイアウト/並べ替え順序を上書きできます。 引き続きチャネルごとに変更を加えることができます。",
            option: {
                defaultLayout: {
                    label: "デフォルトのレイアウト",
                    description: "デフォルトとして使用するレイアウトを選択します",
                    list: "リスト",
                    gallery: "ギャラリー"
                },
                defaultSortOrder: {
                    label: "デフォルトの並べ替え順序",
                    description: "デフォルトで使用する並べ替え順序を選択します",
                    recentlyActive: "最終アクティブ",
                    datePosted: "投稿日"
                }
            }
        },
        partyMode: {
            name: "パーティーモード",
            description: "パーティーは決して終わらないので、パーティーモードを使用しましょう✨",
            option: {
                superIntensePartyMode: {
                    label: "超激しいパーティーモード",
                    description: "パーティーの密度",
                    normal: "普通",
                    better: "より良い",
                    projectX: "プロジェクトX"
                }
            }
        },
        pauseInvitesForever: {
            name: "一時停止招待永遠に",
            description: "Discordが愚かにも削除した「招待を無期限に一時停止する」オプションが復活します。",
            pauseIndefinitely: "無期限に一時停止する"
        },
        permissionFreeWill: {
            name: "許可自由意志",
            description: "チャネル権限管理におけるクライアント側の制限を無効にします。",
            option: {
                lockout: {
                    label: "デッドロック",
                    description: "アクセス許可のクラッシュ保護をバイパスします (「本当にこれを実行しますか?」)"
                },
                onboarding: {
                    label: "開始要件",
                    description: "サーバーとの互換性がなくなる可能性があるオンボーディング要件をバイパスします (「この変更により、サーバーとの互換性がなくなる可能性があります [...]」)"
                }
            }
        },
        permissionsViewer: {
            name: "権限ビューア",
            description: "ユーザーまたはチャネルが持つ権限とサーバーの役割を表示できます。",
            view: "権限の表示",
            option: {
                permissionsSortOrder: {
                    label: "権限のソート順",
                    description: "ロールがユーザーに特定の権限を付与する方法を決定するために使用される並べ替え方法",
                    highest: "最高の役割",
                    lowest: "最下位の役割"
                }
            },
            icon: {
                denied: "拒否されました",
                allowed: "許可された",
                notOverwritten: "上書きされません"
            },
            context: {
                permissions: "権限"
            },
            modal: {
                title: "権限",
                noPermissions: "表示する権限がありません!",
                owner: "所有者",
                grantedBy: "寛容",
                serverOwner: "サーバー所有者",
                ownerRole: "所有者",
                sortingBy: "{{method}} は優先順位に従って並べ替えられます",
                highest: "最高の役割",
                lowest: "最下位の役割",
                details: "役割の詳細"
            }
        },
        petpet: {
            name: "ペットペット",
            description: "任意の画像から petpet gif を作成する /petpet コマンドを追加します",
            command: {
                petpet: {
                    description: "ペットペットGIFを作成します。 画像オプションのうち 1 つだけを指定できます",
                    delay: "各フレーム間の遅延。 デフォルトは 20 です。",
                    resolution: "gifの解像度。 デフォルトは 120 です。おかしな数字を入力して Discord がフリーズした場合、それはあなたのせいです。",
                    image: "使用する画像添付ファイル",
                    url: "画像を取得するURL",
                    user: "アバターを画像として使用するユーザー",
                    noServerPfp: "「ユーザー」オプションを使用する場合は、サーバー固有のアバターではなく通常のアバターを使用します",
                    error: {
                        noImage: "画像の指定がありません！",
                        delayTooLow: "遅延は少なくとも 20 でなければなりません。",
                    }
                }
            },
            error: {
                uploadNotImage: "アップロードされたファイルは画像ではありません",
                fetchUserFailed: "ユーザーの取得に失敗しました。 詳細については、コンソールを確認してください。",
                fetchImageFailed: "{{url}} の読み込み中にエラーが発生しました。 詳細については、コンソールを確認してください。"
            }
        },
        pictureInPicture: {
            name: "ピクチャー・イン・ピクチャー",
            description: "動画にピクチャインピクチャ機能を追加します（ダウンロードボタンの隣）",
            tooltip: "ピクチャーインピクチャーの切り替え",
            option: {
                loop: {
                    label: "ループ",
                    description: "PiPビデオをループするかどうか"
                }
            }
        },
        pinDMs: {
            name: "PinDM",
            description: "プライベート チャネル (DM) を DM リストの先頭に固定できます。 DM を右クリックして、DM を固定/削除したり、順序を変更したりできます。",
            context: {
                category: {
                    label: "DMカテゴリーメニュー",
                    edit: "カテゴリの編集",
                    up: "上に移動",
                    down: "下に移動",
                    delete: "カテゴリの削除",
                    unnamed: "匿名"
                },
                pin: {
                    label: "DMサビトル",
                    addCategory: "カテゴリー 気持ち悪い"
                },
                unPin: {
                    label: "DMの固定を解除",
                    move: "カテゴリに移動"
                }
            },
            option: {
                pinOrder: {
                    label: "順序を固定する",
                    description: "固定された DM はどのような順序で表示されますか?",
                    lastMessage: "最後のメッセージの日付まで",
                    custom: "プライベート (チャンネルを右クリックして順序を変更)"
                },
                canCollapseDmSection: {
                    label: "折りたたみ可能な固定セクション",
                    description: "未分類の DM セクションを折りたたみ可能にする"
                },
                dmSectionCollapsed: {
                    label: "DMセクションの絞り込み",
                    description: "DMセクションを折りたたむ"
                },
                userBasedCategoryList: {
                    label: "ユーザーベースのカテゴリリスト",
                    description: ""
                }
            },
            modal: {
                category: {
                    pin: "ピンのカテゴリ",
                    edit: "カテゴリの編集",
                    new: "新しいカテゴリー",
                    name: "名前",
                    color: "色",
                    save: "保存",
                    create: "作成する"
                }
            }
        },
        pingNotifications: {
            name: "Ping通知",
            description: "カスタマイズ可能な通知と改善されたメンションの形式",
            option: {
                friends: {
                    label: "友達",
                    description: "友達がサーバーにメッセージを送信したときに通知を受け取る"
                },
                mentions: {
                    label: "言及",
                    description: "誰かがあなたに直接 @メンションしたときに通知を受け取る"
                },
                dms: {
                    label: "DM'ler",
                    description: "ダイレクトメッセージ（DM）の通知を受け取る"
                },
                showInActive: {
                    label: "アクティブなチャンネルに表示",
                    description: "現在アクティブなチャンネルでも通知を表示する"
                },
                ignoreMuted: {
                    label: "ミュートを無視する",
                    description: "ミュートされたサーバー、チャネル、またはユーザーからの通知をバイパスします"
                }
            },
            unknown: "未知",
            dm: "DM",
            groupDM: "グループDM",
            title: "チャンネル {{channelName}} の {{username}}"
        },
        pinIcon: {
            name: "ピンアイコン",
            description: "ピン留めされたメッセージにピンアイコンを追加します。"
        },
        plainFolderIcon: {
            name: "プレーンフォルダーアイコン",
            description: "フォルダー内の小さなサーバー アイコンは表示されません。"
        },
        platformIndicators: {
            name: "プラットフォームインジケーター",
            description: "プラットフォーム インジケーター (デスクトップ、モバイル、Web...) をユーザーに追加します。",
            embeddedTooltip: "コンソール",
            vrTooltip: "VR",
            option: {
                list: {
                    label: "リスト",
                    description: "メンバーリストにインジケーターを表示"
                },
                badges: {
                    label: "バッジ",
                    description: "ユーザープロフィールにインジケーターをバッジとして表示する"
                },
                messages: {
                    label: "メッセージ",
                    description: "メッセージ内にインジケーターを表示する"
                },
                colorMobileIndicator: {
                    label: "モバイルディスプレイに色を付ける",
                    description: "モバイル インジケーターがユーザー ステータスの色を取るかどうかを決定します。"
                },
                showBots: {
                    label: "ボットを表示する",
                    description: "ボットにプラットフォーム インジケーターを表示するかどうかを決定します"
                }
            }
        },
        platformSpoofer: {
            name: "プラットフォームスプーファー",
            description: "使用しているプラ​​ットフォームやデバイスをシミュレートします",
            about: "このアドオンが警告や禁止からあなたを守ることを保証することはできません。",
            platform: {
                desktop: "Discordクライアント",
                web: "ディスコードウェブ",
                ios: "ディスコードiOS",
                android: "ディスコードアンドロイド",
                xbox: "埋め込み型不和",
                playstation: "埋め込み型不和",
                vr: "VR"
            },
            option: {
                platform: {
                    label: "プラットフォーム",
                    description: "どのプラットフォームで登場したいですか?",
                    desktop: "デスクトップ",
                    web: "ウェブ",
                    android: "アンドロイド",
                    ios: "iOS",
                    xbox: "Xbox",
                    playstation: "プレイステーション",
                    vr: "VR"
                }
            }
        },
        plexcordToolbox: {
            name: "Plexcordツールボックス",
            description: "Plexcord のクイック アクションをホストするボタンをアプリ バーに追加します。",
            tooltip: "Plexcord ツールボックス",
            context: {
                openLog: "通知ログを開く",
                enableQuickCSS: "QuickCSSを有効にする",
                openQuickCSS: "QuickCSSを開く",
                openSettings: "設定を開く",
                manageThemes: "テーマの管理"
            },
            option: {
                showPluginMenu: {
                    label: "プラグインメニューを表示",
                    description: "Plexcord ツールボックスにプラグイン メニューを表示"
                }
            }
        },
        polishWording: {
            name: "ポーランド語の言葉遣い",
            description: "メッセージの見栄えを良くし、文法を改善するために若干の編集が加えられます。 設定を確認してください",
            option: {
                quickDisable: {
                    label: "クイック無効化",
                    description: "素早い無効化。 アプリを再起動せずにメッセージ編集をオフにします。"
                },
                blockedWords: {
                    label: "ブロックされた単語",
                    description: "大文字にならない単語 (カンマで区切る)。"
                },
                fixApostrophes: {
                    label: "アポストロフィを修正",
                    description: "略語にはアポストロフィが含まれていることを確認してください。"
                },
                expandContractions: {
                    label: "オープン略語",
                    description: "省略された単語を明示的な形式に変換します (Don't -> Do not など)。"
                },
                fixCapitalization: {
                    label: "大文字の編集",
                    description: "文章を大文字で始めることができます。"
                },
                fixPunctuation: {
                    label: "正しい句読点",
                    description: "句読点の周囲のスペースを編集します。"
                },
                fixPunctuationFrequency: {
                    label: "句読点の頻度",
                    description: "文末にピリオドを付ける頻度の割合 (この機能が気になる人もいるかもしれません)。",
                }
            }
        },
        previewMessage: {
            name: "プレビューメッセージ",
            description: "メッセージを送信する前にプレビューできます。",
            tooltip: "プレビューメッセージ"
        },
        profileSets: {
            name: "プロファイルセット",
            description: "プロファイル プリセットを保存し、設定のプロファイル セクションからロードすることができます。",
            toast: {
                importFailed: "プロファイル プリセットのインポートに失敗しました。 ファイルが無効である可能性があります。",
            },
            option: {
                avatarSize: {
                    label: "アバターのサイズ",
                    description: "プロファイルプリセットリストのアバターサイズ"
                },
            },
            modal: {
                override: "オーバーライド",
                merge: "マージ",
                cancel: "キャンセル",
                timestamp: "{{formattedDate}}、時刻: {{formattedTime}}",
                rename: "名前を変更する",
                update: "アップデート",
                moveUp: "上に移動",
                moveDown: "下に移動",
                moveTo: "1ページ目に移動",
                delete: "消去",
                importProfiles: "プロファイルのインポート",
                importText: "このセクションには {{existingCount}} 個の既存のプロファイルがあります。 それらを上書きしますか、それともインポートされたプロファイルとマージしますか?",
                heading: "保存されたプロファイル",
                searchProfiles: "プロフィールを検索...",
                profileName: "プロファイル名",
                saving: "保存中...",
                save: "プロファイルの保存",
                cancelSearch: "検索のキャンセル",
                search: "検索",
                random: "ランダム",
                import: "輸入",
                exportAll: "すべてエクスポート"
            }
        },
        questify: {
            name: "クエストファイ",
            description: "さまざまな機能を使用してミッション エクスペリエンスを向上させたり、必要でない場合は完全に無効にしたりできます。",
            quests: "クエスト",
            context: {
                quest: {
                    label: "タスクボタンメニュー",
                    ignore: "「すべて無視」をマークする",
                    reset: "無視リストをリセット",
                    fetch: "タスクのフェッチ",
                    markAsIgnored: "無視としてマーク",
                    unmarkAsIgnored: "無視を削除",
                    stopAuto: "オートコンプリートを停止する",
                    copyQuestID: "タスクIDのコピー",
                    startAuto: "オートコンプリートを開始する"
                }
            },
            settings: {
                questButton: {
                    title: "タスクボタン",
                    description: "サーバーリスト内の未請求のクエストのオプションのインジケーターを備えたクエストボタンを表示します。",
                    leftClick: "左クリックアクション",
                    middleClick: "中クリックアクション",
                    rightClick: "右クリックアクション",
                    visibility: "ボタンの可視性",
                    unclaimedIndicator: "迷惑インジケーター",
                    badgeColor: "バッジの色",
                    rewardDisplay: "賞品の展示",
                    includedRewardTypes: "含まれる報酬の種類",
                    includedRewardTypesDesc: "ボタンの可視性、バッジの数、アラート音を再生するときは、これらの報酬タイプのクエストのみを未請求としてカウントします。",
                    selectRewardTypes: "未請求のカウントに含める報酬タイプを選択してください...",
                    noRewardType: "この名前でサポートされているタスク機能はありません。",
                    default: "デフォルト",
                    disable: "無効にする"
                },
                questFeatures: {
                    title: "タスクの機能",
                    description: "特定のタスクのプロパティを変更します。",
                    popupWarning: "{{disablePopup}} オプションは、完了したクエストとクエストの進行状況の追跡では無視されます。",
                    videoQuestInfo: "{{completeVideo}} オプションは、ビデオ タスクの継続時間まで待機し、自動的に完了としてマークされます。",
                    gameQuestInfo: "同様に、{{completeGame}} オプションは、ゲーム タスクの期間を待機し、自動的に完了としてマークされます。 このオプションは、公式デスクトップ クライアントでのみサポートされています。",
                    manualStartWarning: "タスクは手動で開始する必要があります。 最初のクリックでバックグラウンドでタスクが起動します。 ビデオ タスクの場合、その後クリックすると通常どおりビデオ モーダルが開きます。 ミッションをキャンセルするには、ミッション タイルのコンテキスト メニューを開いて、{{stopAuto}} を選択します。",
                    tosWarning: "これらのオプションの使用は、Discord の利用規約に違反します。 ご自身の責任でご使用ください。",
                    selectFeatures: "変更するタスクのプロパティを選択します。",
                    disablePopup: "アカウントパネルでタスクポップアップを無効にする",
                    completeVideo: "バックグラウンドでビデオタスクを完了する",
                    completeGame: "バックグラウンドでゲームプレイタスクを完了する",
                    stopAuto: "オートコンプリートを停止する"
                },
                restyleQuests: {
                    title: "再フォーマットタスク",
                    description: "オプションのテーマカラーを使用してタスクを強調表示し、見やすくします。",
                    precedenceNote: "タスクが無視された場合でも、要求されたタスク スタイルと期限切れのタスク スタイルが優先されます。",
                    gradientStyle: "グラデーションスティリ",
                    assetPreload: "アセットブートローダー",
                    unclaimed: "要求されていない",
                    claimed: "リクエスト済み",
                    ignored: "無視されました",
                    expired: "期限切れ",
                    intenseGradient: "密なリキャスト勾配",
                    defaultGradient: "デフォルトのリキャスト グラデーション",
                    blackGradient: "微妙な黒のグラデーション",
                    noGradient: "グラデーションなし",
                    loadAllAssets: "ページ読み込み時にすべてのタスク アセットを読み込みます",
                    loadDuringScroll: "ページスクロール中にタスクアセットをロードする"
                },
                reorderQuests: {
                    title: "タスクの並べ替え",
                    description: "ステータスに応じてタスクを並べ替えます。 クエスト ページで「クエスト化」並べ替えオプションが選択されている場合に適用されます。",
                    formatNote: "カンマ区切りのリストには、{{items}} をすべて含める必要があります。",
                    placeholder: "UNCLAIMED、CLAIMED、IGNORED、EXPIRED をすべて追加する必要があります",
                    invalidFormat: "無効な形式です。",
                    unclaimedSubsort: "未請求のサブランク",
                    claimedSubsort: "主張されたサブランク",
                    ignoredSubsort: "無視されたサブオーダー",
                    expiredSubsort: "期限切れのサブランク",
                    addedNewest: "追加（最新）",
                    addedOldest: "追加（最も古い）",
                    expiredRecent: "期限切れ(最新)",
                    expiredLeast: "期限切れ (少なくとも最新のもの)",
                    expiringSoon: "期限切れ（最も近い）",
                    expiringLate: "有効期限切れ (最新)",
                    claimedRecent: "リクエスト済み(最新)",
                    claimedLeast: "リクエスト済み (少なくとも最新のもの)",
                    ignoredQuestProfile: "無視されたタスクプロファイル",
                    sharedProfile: "共有: このクライアント共有上のすべてのアカウントは無視されます。",
                    privateProfile: "プライベート: このクライアントのすべてのアカウントには個別の無視があります。",
                    rememberSort: "並べ替えの選択を記憶する",
                    rememberFilter: "フィルター選択を記憶する",
                    yes: "はい",
                    no: "いいえ",
                    rememberNote: "この並べ替えとフィルターの選択は、[タスク] ページの組み込みの並べ替えとフィルターのオプションを参照します。 上記のカスタム並べ替えは、Quest ページで「Questify」並べ替えオプションが選択されている場合にのみ適用されます。 呼び出しが無効になっている場合、並べ替えまたはフィルターのオプションは、[タスク] ページを開くたびにリセットされます。"
                },
                fetchingQuests: {
                    title: "タスクの取得",
                    description: "Discord からタスクを取得する頻度を設定し、新しいタスクのアラートを設定します。",
                    defaultBehavior: "デフォルトでは、Discord はタスクがインストールされていて、タスク ページにアクセスした場合にのみタスクを表示します。 これは、以下で定義されている取得間隔がなければ、このプラグインは 1 日を通して新しいクエストが追加されたことを通知されないことを意味します。",
                    requirement: "これは、クエスト ボタンがアクティブで {{unclaimed}} に設定されているか、または {{always}} に設定されていて未請求の {{pill}}、{{badge}}、または {{both}} インジケーターが有効になっているかどうかによって異なります。 それ以外の場合は、定期的にクエストを取得する必要はありません。",
                    blockWarning: "また、{{fetchingQuests}} が {{questFunctions}} 設定でブロックされている場合、これは機能しません。",
                    fetchInterval: "フェッチ範囲",
                    alertSound: "警告音",
                    intervalPlaceholder: "30 分から 12 時間までの間隔を選択または入力します。",
                    intervalFeedback: "間隔は 30 分から 12 時間の間である必要があります。",
                    soundPlaceholder: "サウンドを選択するか、カスタム サウンド URL を指定します。",
                    soundFeedback: "音声が見つからないか、URL がサポートされているドメインからのものではありません。",
                    disabled: "無効",
                    minutes: "ちょっと",
                    minute: "ちょっと",
                    hours: "一瞬",
                    hour: "一瞬",
                    thirtyMinutes: "30分",
                    oneHour: "1 瞬間",
                    threeHours: "3 瞬間",
                    sixHours: "6 瞬間",
                    twelveHours: "12 モーメント",
                    customSound: "カスタムサウンド"
                },
                disableOptions: {
                    everything: "すべてを無効にする",
                    discovery: "「探索」タブを無効にする",
                    dms: "DM の [タスク] タブを無効にする",
                    fetching: "タスクの取得を無効にする",
                    popup: "アカウントパネル上のポップアップを無効にする",
                    sponsored: "タスクページでスポンサー付きバナーを無効にする",
                    badge: "ユーザープロファイルのバッジを無効にする",
                    inventory: "ギフトインベントリの転送通知を無効にする",
                    friendsList: "現在アクティブなプロモーションの友達リスト",
                    membersList: "メンバーリストのアクティブなプレイアイコン",
                    gameQuests: "バックグラウンドでゲーム/アクティビティのチャレンジを完了する",
                    videoQuests: "バックグラウンドでビデオ視聴タスクを完了する",
                    achievementQuests: "バックグラウンドでアクティビティタスクを完了する",
                    mobileDesktop: "モバイルタスクをデスクトップと互換性のあるものにする",
                    notifyOnComplete: "タスクが完了したら通知する"
                },
                options: {
                    always: "いつも",
                    unclaimed: "要求されていない",
                    never: "一度もない",
                    pill: "ハプ",
                    badge: "バッジ",
                    both: "二人とも",
                    none: "なし",
                    openQuests: "オープンクエスト",
                    contextMenu: "コンテキストメニュー",
                    pluginSettings: "プラグイン設定",
                    nothing: "何もない",
                    orbs: "球体",
                    nitroCodes: "ニトロコード",
                    rewardCodes: "報酬コード",
                    inGameItems: "ゲーム内アイテム",
                    profileCollectibles: "プロフィールコレクション"
                }
            },
            option: {
                disableQuests: {
                    label: "タスクを無効にする",
                    description: "どのタスク機能を無効にするかを選択します。"
                },
                disableQuestsEverything: {
                    label: "すべてを無効にする",
                    description: "すべてのタスク機能を無効にします。"
                },
                disableQuestsFetchingQuests: {
                    label: "タスクの取得を無効にする",
                    description: "Discordからのタスクの取得を無効にします。"
                },
                disableQuestsDirectMessagesTab: {
                    label: "DM のタスクタブを無効にする",
                    description: "[ダイレクト メッセージ] ページの [タスク] タブを無効にします。"
                },
                disableQuestsDiscoveryTab: {
                    label: "「探索」タブを無効にする",
                    description: "「探索」ページの「クエスト」タブを無効にします。"
                },
                disableQuestsPageSponsoredBanner: {
                    label: "タスクページでスポンサー付きバナーを無効にする",
                    description: "「タスク」ページのスポンサー付きバナーを無効にします。"
                },
                disableQuestsPopupAboveAccountPanel: {
                    label: "アカウントパネルのポップアップを無効にする",
                    description: "アカウントパネルの上部にあるタスクポップアップを無効にします。"
                },
                disableQuestsBadgeOnUserProfiles: {
                    label: "ユーザープロファイルのバッジを無効にする",
                    description: "ユーザー プロファイルのタスク バッジを無効にします。"
                },
                disableQuestsGiftInventoryRelocationNotice: {
                    label: "ギフトの在庫移動通知を無効にする",
                    description: "ギフトの在庫 クエストの移動通知を無効にします。"
                },
                disableFriendsListActiveNowPromotion: {
                    label: "現在アクティブな友達リストのプロモーションを無効にする",
                    description: "友達がプレイするゲームのクエスト プロモーションを無効にします。"
                },
                disableMembersListActivelyPlayingIcons: {
                    label: "メンバーリストのアクティブプレイアイコンを無効にする",
                    description: "メンバーリストのアクティブプレイアイコンを無効にします。"
                },
                makeMobileQuestsDesktopCompatible: {
                    label: "モバイルタスクをデスクトップと互換性のあるものにする",
                    description: "モバイル専用タスクをデスクトップと互換性のあるものにします。"
                },
                completeVideoQuestsInBackground: {
                    label: "バックグラウンドでビデオタスクを完了する",
                    description: "ビデオ時間が経過した後、バックグラウンドでビデオ ミッションを完了します。"
                },
                completeGameQuestsInBackground: {
                    label: "バックグラウンドでゲームミッションを完了する",
                    description: "ゲーム時間が経過した後、バックグラウンドでゲームミッションを完了します。"
                },
                completeAchievementQuestsInBackground: {
                    label: "バックグラウンドでアクティビティタスクを完了する",
                    description: "バックグラウンドでアクティビティ チャレンジを完了します。"
                },
                notifyOnQuestComplete: {
                    label: "タスクが完了したら通知する",
                    description: "タスクが自動的に完了したときに通知を表示します。"
                },
                questButton: {
                    label: "タスクボタン",
                    description: "サーバーリストにクエストボタンを表示します。"
                },
                questButtonDisplay: {
                    label: "タスクボタンの外観",
                    description: "サーバーリストのタスクボタンに使用する表示タイプ。"
                },
                questRewardIncludeRewardCode: {
                    label: "特典コードを含める",
                    description: "クエスト数を表示するときに、報酬コードのあるクエストを含めます。"
                },
                questRewardIncludeNitroCode: {
                    label: "Nitro コードを含める",
                    description: "ミッション数を表示するときに、Nitro コード化されたミッションを含めます。"
                },
                questRewardIncludeInGame: {
                    label: "ゲーム内報酬を含める",
                    description: "ミッション数を表示するときに、ゲーム内報酬のあるミッションを含めます。"
                },
                questRewardIncludeCollectibles: {
                    label: "コレクションを含める",
                    description: "クエスト数を表示するときに、収集アイテムのあるクエストも含めます。"
                },
                questRewardIncludeOrbs: {
                    label: "球を含める",
                    description: "クエスト数を表示するときに、グローブ賞を受賞したクエストも含めます。"
                },
                questButtonUnclaimed: {
                    label: "クエストボタン未請求インジケーター",
                    description: "サーバー リストの [タスク] ボタンの未要求インジケーターに使用する表示タイプ。"
                },
                questButtonBadgeColor: {
                    label: "クエスト缶バッジの色",
                    description: "サーバーリストのクエストボタンバッジの色。"
                },
                questButtonLeftClickAction: {
                    label: "左クリックアクション",
                    description: "サーバーリストの「タスク」ボタンを左クリックしたときに実行されるアクション。"
                },
                questButtonMiddleClickAction: {
                    label: "中クリックアクション",
                    description: "サーバーリストのタスクボタンを中クリックしたときに実行されるアクション。"
                },
                questButtonRightClickAction: {
                    label: "右クリックアクション",
                    description: "サーバーリストの「タスク」ボタンを右クリックしたときに実行されるアクション。"
                },
                fetchingQuests: {
                    label: "タスクの取得",
                    description: "Discordからタスクを持ってきます。"
                },
                fetchingQuestsInterval: {
                    label: "クエストフェッチ範囲",
                    description: "Discord からタスクを取得する間隔 (秒単位)。"
                },
                fetchingQuestsAlert: {
                    label: "クエストフェッチアラート",
                    description: "新しいミッションが検出されたときに再生されるサウンド。"
                },
                fetchingQuestsAlertVolume: {
                    label: "クエストフェッチアラートボリューム",
                    description: "新しいミッションが検出されたときに再生される音の音量。"
                },
                restyleQuests: {
                    label: "再フォーマットタスク",
                    description: "[タスク] ページのタスク タイルの外観をカスタマイズします。"
                },
                restyleQuestsUnclaimed: {
                    label: "再フォーマットタスク - 要求されていない",
                    description: "[タスク] ページの未請求のタスク タイルの色。"
                },
                restyleQuestsClaimed: {
                    label: "再フォーマットタスク - リクエスト済み",
                    description: "[タスク] ページで要求されたタスク タイルの色。"
                },
                restyleQuestsIgnored: {
                    label: "再フォーマットタスク - 無視",
                    description: "[タスク] ページで無視されたタスク タイルの色。"
                },
                restyleQuestsExpired: {
                    label: "再フォーマットタスク - 期限切れ",
                    description: "[タスク] ページの期限切れのタスク タイルの色。"
                },
                restyleQuestsGradient: {
                    label: "再フォーマットタスク - グラデーション",
                    description: "タスクタイルで使用されるグラデーションスタイル。"
                },
                restyleQuestsPreload: {
                    label: "再フォーマットタスク - ブートローダー",
                    description: "タスク タイルのアセットをプリロードしてみてください。"
                },
                reorderQuests: {
                    label: "タスクの並べ替え",
                    description: "ステータスに応じてタスクを並べ替えます。 デフォルトの並べ替えの場合は空白のままにします。 カンマ区切りのリストには、UNCLAIMED、CLAIMED、IGNORED、EXPIRED をすべて含める必要があります。"
                },
                unclaimedSubsort: {
                    label: "未請求のサブランク",
                    description: "請求されていないタスクのサブソート方法。"
                },
                claimedSubsort: {
                    label: "主張されたサブランク",
                    description: "リクエストされたタスクのサブソート方法。"
                },
                ignoredSubsort: {
                    label: "無視されたサブオーダー",
                    description: "無視されたタスクのサブソート方法。"
                },
                expiredSubsort: {
                    label: "期限切れのサブランク",
                    description: "期限切れのタスクのダウンソート方法。"
                },
                unclaimedUnignoredQuests: {
                    label: "要求されていない無視されないタスク",
                    description: "要求されていないタスクおよび無視されていないタスクの数を追跡します。"
                },
                onQuestsPage: {
                    label: "タスクページで",
                    description: "ユーザーが現在「タスク」ページにいるかどうか。"
                },
                triggerQuestsRerender: {
                    label: "クエストの再レンダリングのトリガー",
                    description: "この設定を変更すると、[タスク] ページの再レンダリングがトリガーされます。"
                },
                ignoredQuestProfile: {
                    label: "無視されたタスクプロファイル",
                    description: "無視されたタスクに使用されるプロファイル。"
                },
                rememberQuestPageSort: {
                    label: "クエストページの並べ替えを記憶する",
                    description: "「タスク」ページで最後に使用したシーケンスを覚えておいてください。"
                },
                rememberQuestPageFilters: {
                    label: "タスクページフィルターを記憶する",
                    description: "[タスク] ページで最後に使用したフィルターを記憶します。"
                },
                lastQuestPageSort: {
                    label: "最新クエストページランキング",
                    description: "「タスク」ページで最後に使用したシーケンスを覚えておいてください。"
                },
                lastQuestPageFilters: {
                    label: "最新のタスクページフィルター",
                    description: "[タスク] ページで最後に使用したフィルターを記憶します。"
                },
                ignoredQuestIDs: {
                    label: "無視されたタスクID",
                    description: "無視されたタスク ID の配列。"
                },
                resumeQuestIDs: {
                    label: "進行中のタスクID",
                    description: "バックグラウンドで自動完了するタスク ID の配列。"
                }
            },
            button: {
                questInProgressWithTime: "完了中 ({{remainTime}})",
                completing: "完了中",
                resume: "デヴァムと (~{{remainTime}})",
                complete: "{{remainTime}}を完了します",
                completeImmediate: "完了（即時）",
                completed: "完了しました"
            },
            reward: {
                orbs: "{{orbQuantity}} 個のオーブが {{completingText}} に表示されます。",
                article: "{{itemName}} の {{completingText}}。",
                unrecognized: "認識できない報酬タイプの場合は {{completingText}}。"
            },
            notification: {
                completed: {
                    title: "仕事は終わりました",
                    body: "{{questName}}のクエストが完了しました。"
                }
            }
        },
        questionMarkReplacement: {
            name: "クエスチョンマークの置換",
            description: "メッセージが疑問符のみで構成されている場合は、すべての疑問符が選択した文字列で置き換えられます。",
            option: {
                replace: {
                    label: "変化",
                    description: "と置き換えます"
                }
            }
        },
        quickMention: {
            name: "クイックメンション",
            description: "メッセージ アクション バーにクイック メンション ボタンを追加します。",
            tooltip: "クイックベット"
        },
        quickReply: {
            name: "クイックリプライ",
            description: "ホットキーを使用してメッセージに返信 (Ctrl + 上/下) し、メッセージを編集 (CTRL + SHIFT + 上/下) します。",
            option: {
                shouldMention: {
                    label: "言及すべきか",
                    description: "デフォルトで ping 応答",
                    noReplyMentionPlugin: "NoReplyMention プラグインをフォローする (有効な場合)",
                    enabled: "効果的",
                    disabled: "無効"
                },
                ignoreBlockedAndIgnored: {
                    label: "ブロックされて無視される",
                    description: "ブラウジング中にブロック/無視されたユーザーからのメッセージを無視する"
                }
            }
        },
        quickThemeSwitcher: {
            name: "クイックテーマスイッチャー",
            description: "キーボード ショートカットを使用してテーマをすばやく切り替えます。",
            about: {
                title: "ホットキー",
                description: "Ctrl/Cmd+Shift+矢印キーを使用して移動します (左/右: テーマ間を循環、上: 有効、下: 無効)。",
                reload: "Ctrl/Cmd+Shift+Alt を押してテーマのリストを更新します。"
            },
            modal: {
                added: "{{count}} 個の新しいテーマが追加されました",
                removed: "{{count}} 個のテーマが削除されました",
                reloaded: "{{themeCount}} テーマがリロードされました",
                addedLocal: "{{count}} 個のローカル テーマを追加しました",
                removedLocal: "{{count}} 個のネイティブ テーマが削除されました",
            },
            option: {
                includeLocal: {
                    label: "ネイティブテーマを含める",
                    description: "デバイス上のネイティブ テーマをリストに含めます"
                },
                includeOnline: {
                    label: "オンラインテーマを含める",
                    description: "リストにオンラインテーマが含まれています"
                },
                sortOrder: {
                    label: "並べ替え",
                    description: "選別方法",
                    asc: "アダン・ゼイエ",
                    desc: "ズデン・アヤ",
                    recent: "インソン"
                },
                autoRefresh: {
                    label: "自動更新",
                    description: "変更が検出されるとテーマリストを自動的に更新します"
                },
                showNotifications: {
                    label: "通知を表示する",
                    description: "テーマが追加または削除されたときに通知を表示します"
                }
            }
        },
        quoter: {
            name: "引用者",
            description: "メッセージからインスピレーションを与える引用画像を作成できます",
            context: {
                quote: "引用"
            },
            modal: {
                title: "4Kダ ヤカラ",
                grayscale: "黒白",
                export: "輸出",
                send: "送信",
                saveAsGIF: "GIFとして保存",
                saveDescription: "画像を PNG ではなく GIF として保存/送信します",
                showWatermark: "ウォーターマークを表示",
                watermarkText: "フィリグラン メトニ (最大 32 文字)"
            },
            option: {
                quoteFont: {
                    label: "引用フォント",
                    description: "引用テキストのフォント (作成者/ユーザー名は常に M PLUS Rounded 1c を使用します)",
                    mPlusRounded: "M PLUS ラウンド 1c",
                    openSans: "オープンサンズ",
                    momoSignature: "モモのサイン",
                    lora: "ローラ",
                    merriWeather: "メリウェザー"
                },
                watermark: {
                    label: "フィリグリー",
                    description: "カスタム透かしテキスト (最大 32 文字)"
                },
                grayscale: {
                    label: "黒白",
                    description: "デフォルトで白黒を有効にする"
                },
                showWatermark: {
                    label: "ウォーターマークを表示",
                    description: "デフォルトでウォーターマークを表示する"
                },
                saveAsGif: {
                    label: "GIFとして保存",
                    description: "デフォルトでGIFとして保存"
                }
            }
        },
        randomVoice: {
            name: "ランダムボイス",
            description: "ミュート ボタンの隣にランダムな音声通話参加ボタンを追加します。",
            tooltip: "ランダムボイス",
            context: {
                label: "サウンドコンディショナー",
                amountLabel: "ユーザー数",
                spacesLabel: "空室",
                voiceLabel: "SES リミティ",
                selfLabel: "独自の設定",
                select: {
                    servers: "サーバーの選択",
                    list: "リストの選択",
                    filters: "フィルターの選択",
                    amount: "ユーザー数",
                    userAmount: "{{金額}} ユーザー",
                    parameters: "パラメータ",
                    moreThan: "より多い",
                    lessThan: "それ未満",
                    equalTo: "に等しい",
                    spaces: "欠員",
                    voice: "その限界"
                },
                filter: {
                    muted: "サイレントで",
                    deafened: "耳が聞こえなくなった",
                    camera: "カメラ",
                    stream: "放送",
                    includeFilters: "フィルターを含める",
                    avoidFilters: "フィルターを避ける"
                },
                reset: {
                    list: "リストのリセット"
                },
                voice: {
                    label: "サウンド設定",
                    auto: {
                        mute: "オートミュート",
                        deafen: "自動聴覚障害者",
                        camera: "自動カメラ",
                        stream: "自動ブロードキャスト",
                        leaveWhenEmpty: "暇なときに出発",
                        navigate: "自動ナビゲート",
                        stage: "ステージチャンネルを避ける",
                        afk: "AFK チャネルを避ける"
                    }
                },
                invalid: {
                    server: "無効なサーバー"
                }
            },
            option: {
                userAmountOperation: {
                    label: "ユーザー数トランザクション",
                    description: "ユーザー数に応じたアクションを選択してください"
                },
                userAmount: {
                    label: "ユーザー数",
                    description: "ユーザー数を選択してください"
                },
                spacesLeftOperation: {
                    label: "欠員のプロセス",
                    description: "最大ユーザー数に対するアクションを選択してください"
                },
                spacesLeft: {
                    label: "欠員",
                    description: "空き容量の選択"
                },
                vcLimitOperation: {
                    label: "オーディオチャンネル制限の動作",
                    description: "オーディオチャンネル制限のアクションを選択します。"
                },
                vcLimit: {
                    label: "オーディオチャンネル制限",
                    description: "オーディオチャンネル制限を選択してください"
                },
                servers: {
                    label: "サーバー",
                    description: "含めるサーバー"
                },
                autoNavigate: {
                    label: "オートナビゲーション",
                    description: "自動的にオーディオチャンネルに移動します。"
                },
                autoCamera: {
                    label: "自動カメラ",
                    description: "カメラを自動的にオンにします"
                },
                autoStream: {
                    label: "自動ブロードキャスト",
                    description: "自動的に放送を開始します"
                },
                selfMute: {
                    label: "オートミュート",
                    description: "オーディオチャンネルに参加すると、マイクが自動的にミュートされます。"
                },
                selfDeafen: {
                    label: "自動聴覚障害者",
                    description: "音声チャンネルに参加すると、自動的に耳が聞こえなくなります。"
                },
                leaveEmpty: {
                    label: "暇なときに出発",
                    description: "音声チャネルが空になると、別の通話がランダムに検索されます。"
                },
                avoidStages: {
                    label: "ステージチャンネルを避ける",
                    description: "ステージタイプのオーディオチャンネルへの参加を回避します。"
                },
                avoidAfk: {
                    label: "AFK チャネルを避ける",
                    description: "AFK はオーディオ チャネルへの参加を回避します。"
                },
                video: {
                    label: "ビデオ",
                    description: "カメラがオンになっているユーザーを検索します"
                },
                stream: {
                    label: "放送",
                    description: "ブロードキャストを行っているユーザーを検索します"
                },
                mute: {
                    label: "サイレントで",
                    description: "ミュートされているユーザーを検索します"
                },
                deafen: {
                    label: "耳が聞こえなくなった",
                    description: "聴覚障害のあるユーザーの検索"
                },
                includeStates: {
                    label: "フィルターを含める",
                    description: "特定のユーザー状態を含めることができます"
                },
                avoidStates: {
                    label: "フィルターを避ける",
                    description: "特定のユーザー状況を回避できるようにします"
                }
            },
            alert: {
                failed: "オーディオ チャンネルが見つかりませんでした。"
            }
        },
        reactErrorDecoder: {
            name: "ReactErrorDecoder",
            description: "React はエラー コードを人間が読めるメッセージに変換します。"
        },
        readAllNotificationsButton: {
            name: "すべての通知を読むボタン",
            description: "通知パネルにボタンを追加して、1 回のクリックですべての通知を既読としてマークします。",
            button: "すべて読む"
        },
        recentDMSwitcher: {
            name: "最近のDMSwitcher",
            description: "Ctrl+Tab で最近使用した DM を切り替える (Ctrl+Shift+Tab は逆)",
            option: {
                visualStyle: {
                    label: "ビジュアルスタイル",
                    description: "切り替え時に表示される視覚的なインジケーターのスタイル",
                    overlay: "レイヤー (Alt+Tab スタイル)",
                    toast: "通知（ステータスメッセージ）",
                    off: "閉店"
                },
                overlayMode: {
                    label: "レイヤーモード",
                    description: "レイヤーコンテンツ",
                    row: "最近の会話ライン",
                    current: "のみ利用可能",
                },
                amountOfUsers: {
                    label: "ユーザー数",
                    description: "レイヤーに表示するユーザーの数"
                },
                overlayRowLength: {
                    label: "レイヤーの行の長さ",
                    description: "行に表示する最近の DM の数"
                },
                overlayShowAvatars: {
                    label: "レイヤープロファイル画像を表示",
                    description: "レイヤー上にユーザープロフィール画像を表示します"
                },
                toastDurationMs: {
                    label: "通知時間 (ミリ秒)",
                    description: "レイヤーにプロフィール画像を表示"
                },
                clearRdms: {
                    label: "RDMSリストのクリア",
                    description: "テストツール: RDM リストをクリアします。",
                    toast: "RDMS履歴がクリアされました",
                    button: "RDM 履歴のクリア"
                }
            },
            modal: {
                unknown: "未知",
                dm: "DM",
                group: "グループDM",
                channel: "チャネル",
                switchingTo: "{{name}} に切り替えます"
            }
        },
        relationshipNotifier: {
            name: "RelationshipNotifier",
            description: "友達、グループチャット、またはサーバーがあなたを削除したときに通知します。",
            option: {
                notices: {
                    label: "通知",
                    description: "削除されたときに画面の上部に通知を表示します (通知を見逃したくない場合はこれを使用します)。"
                },
                offlineRemovals: {
                    label: "オフラインでの削除",
                    description: "オフライン中に Discord を開いたときに削除された場合に通知を送信します。"
                },
                friends: {
                    label: "友達",
                    description: "友達があなたをリストから削除したときに通知を受け取る"
                },
                friendRequestCancels: {
                    label: "友達リクエストのキャンセル",
                    description: "友達リクエストがキャンセルされたときに通知する"
                },
                servers: {
                    label: "サーバー",
                    description: "サーバーから削除されたときに通知する"
                },
                groups: {
                    label: "グループ",
                    description: "グループチャットから削除されたときに通知を受け取る"
                }
            },
            notification: {
                removedFriend: "{{user}} さんがあなたの友達を解除しました。",
                cancelledFriendRequest: "{{user}} から送信された友達リクエストはキャンセルされました。",
                removedFromServer: "あなたは {{server}} から削除されました。",
                removedFromGroup: "あなたは {{グループ}} から削除されました。",
                noLongerGroup: "あなたはもう {{group}} に所属していません。",
                noLongerServer: "あなたはもう {{server}} にはいません。",
                noLongerFriend: "あなたはもう {{user}} とは友達ではありません。",
                friendRequestRevoked: "{{user}} から送信された友達リクエストは取り下げられました。",
                ok: "わかりました"
            }
        },
        remix: {
            name: "リミックス",
            description: "ファイル送信ボタンの右クリックメニューに「リミックス」オプションを追加します。 これにより、単純な画像エディターで画像が開き、編集した画像をチャットに直接送信するオプションが表示されます。",
            label: "リミックス",
            button: {
                send: "送信",
                close: "四半期",
                brush: "ブラシ",
                erase: "ダスター",
                crop: "作物",
                shape: "形",
                reset: "リセット",
                clear: "クリア"
            },
            editor: {
                choose: "画像を選択してください",
                browse: "ゴザット",
                rectangle: "矩形",
                ellipse: "楕円",
                line: "ライン",
                arrow: "わかりました",
                fill: "埋める"
            }
        },
        repeatMessages: {
            name: "繰り返しメッセージ",
            description: "これにより、メッセージをすばやく再送信できます。 Shift キーを押しながら「繰り返し」をクリックすると、メッセージへの返信として送信されます。",
            button: "繰り返し (クリック) / 繰り返して返信 (Shift + クリック)",
            context: {
                repeat: "繰り返す",
                repeatAndReply: "繰り返して返信する"
            }
        },
        replaceGoogleSearch: {
            name: "GoogleSearch を置き換える",
            description: "Google 検索をさまざまな検索エンジンに置き換えます。",
            option: {
                customEngineName: {
                    label: "カスタムエンジン名",
                    description: "カスタム検索エンジンの名前"
                },
                customEngineURL: {
                    label: "カスタムエンジンのURL",
                    description: "検索エンジンの URL"
                },
                replacementEngine: {
                    label: "バックアップ検索エンジン",
                    description: "(メニューを追加する代わりに) バックアップ検索エンジンを特定の検索エンジンに置き換えます。",
                    off: "閉店",
                    custom: "特殊エンジン",
                }
            },
            context: {
                label: "メトニ・アラ",
                searchWith: "{{name}} アラの家"
            }
        },
        replyPingControl: {
            name: "ReplyPingControl",
            description: "メッセージ返信時に常に ping を実行するか、まったく実行しないかを制御できます。ホワイトリスト機能も含まれています",
            option: {
                alwaysPingOnReply: {
                    label: "常に Ping に返信する",
                    description: "誰かがあなたのメッセージに返信するたびに ping を受け取る"
                },
                replyPingWhitelist: {
                    label: "応答 Ping ホワイトリスト",
                    description: "応答 ping を常に受信したいユーザーの ID をカンマで区切って入力します。"
                }
            }
        },
        replyTimestamp: {
            name: "返信タイムスタンプ",
            description: "返信メッセージのプレビューにタイムスタンプを表示します"
        },
        revealAllSpoilers: {
            name: "すべてを明らかにするスポイラー",
            description: "Ctrl キーを押しながらスポイラーをクリックするとメッセージ内のすべてのスポイラーが表示され、Ctrl + Shift キーを押すとチャット全体のすべてのスポイラーが表示されます。"
        },
        reverseImageSearch: {
            name: "逆画像検索",
            description: "画像の右クリック メニューに画像の逆検索オプションを追加します",
            context: {
                label: "画像検索",
                all: "すべて検索"
            }
        },
        reviewDB: {
            name: "レビューDB",
            description: "他のユーザーを評価します (プロフィールに新しい設定セクションを追加します)",
            notification: {
                newReview: "あなたのプロフィールに新しいレビューがあります!",
                auth: {
                    error: "認証中にエラーが発生しました",
                    successfully: "ログインに成功しました!",
                    failed: "認証に失敗しました",
                    review: "レビューを追加することを許可してください。",
                    opening: "認証ウィンドウが開きます...",
                    need: "評価するには権限が必要です!"
                },
                error: {
                    fast: "要求が早すぎます。 数秒待ってからもう一度試してください。",
                    fetching: "レビューの取得中にエラーが発生しました。",
                    action: {
                        failed: "ユーザー {{action}} に連絡できませんでした",
                        success: "ユーザーは正常に {{action}} に成功しました"
                    }
                }
            },
            modal: {
                delete: {
                    title: "本気ですか？",
                    description: "本当にこのレビューを削除してもよろしいですか?",
                    confirm: "シル",
                    cancel: "キャンセル",
                    error: "レビューを削除するにはログインする必要があります。",
                },
                report: {
                    title: "本気ですか？",
                    description: "本当にこのレビューを報告してもよろしいですか?",
                    confirm: "宣言",
                    cancel: "キャンセル",
                    error: "レビューを投稿するにはログインする必要があります。",
                },
                block: {
                    title: "本気ですか？",
                    description: "本当にこのユーザーをブロックしますか?彼らのレビューは表示されなくなります。",
                    confirm: "ブロック",
                    cancel: "キャンセル",
                    error: "ユーザーをブロックするにはログインする必要があります。",
                },
                blocked: {
                    title: "ブロックされたユーザー",
                    auth: "ReviewDB にログインしていません。",
                    noBlocked: "ブロックされているユーザーはいません。",
                    fetch: "ブロックされたユーザーの取得中にエラーが発生しました"
                },
                reviews: {
                    title: "ユーザーのレビュー",
                    noUser: "このユーザーはまだ誰もレビューしていないようです。 あなたも最初になれます!",
                    noServer: "このサーバーはまだ誰もレビューしていないようです。 あなたも最初になれます!"
                }
            },
            button: {
                appeal: "異議",
                ok: "わかりました",
                more: "もっと",
                reply: "@{{user}} に返信します",
                update: "@{{user}} のレビューを更新",
                review: "@{{user}} をレビューします"
            },
            context: {
                view: "レビューを見る",
                blocked: "このユーザーをブロックしました",
                delete: "レビューの削除",
                report: "レポートレビュー",
                block: "ユーザーをブロックする",
                unblock: "ユーザーのブロックを解除する",
                reply: "レビューに返信"
            },
            option: {
                authorize: {
                    label: "承認する",
                    button: "ReviewDB で承認する"
                },
                notifyReviews: {
                    label: "評価通知",
                    description: "起動時に新しいレビューを通知する"
                },
                showWarning: {
                    label: "警告を表示",
                    description: "ルーブリックの上に敬意を持って警告を表示する"
                },
                hideTimestamps: {
                    label: "タイムスタンプを非表示にする",
                    description: "レビューのタイムスタンプを非表示にする"
                },
                hideBlockedUsers: {
                    label: "ブロックされたユーザーを非表示にする",
                    description: "ブロックしたユーザーからのレビューを非表示にする"
                },
                buttons: {
                    label: "ボタン",
                    manageBlocked: "ブロックされたユーザーの管理",
                    support: "ReviewDB 開発のサポート",
                    website: "ReviewDB Web サイト",
                    server: "ReviewDB サポート サーバー"
                }
            }
        },
        richMagnetLinks: {
            name: "リッチマグネットリンク",
            description: "マグネット リンクをメッセージ リンクのように扱います (プレビューあり)",
            unknown: "不明なファイル名"
        },
        roleColorEverywhere: {
            name: "役割どこでも色",
            description: "可能な限り最上位の役割の色を表示します",
            option: {
                chatMentions: {
                    label: "チャットのメンション",
                    description: "チャットのメンションに役割の色を表示する (メッセージ ボックスを含む)"
                },
                memberList: {
                    label: "メンバー一覧",
                    description: "メンバーリストの役割タイトルに役割の色を表示する"
                },
                voiceUsers: {
                    label: "音声ユーザー",
                    description: "ボイスチャットユーザーリストに役割の色を表示する"
                },
                reactorsList: {
                    label: "リアクター一覧",
                    description: "ユーザーリストの役割の色を絵文字リアクションで表示する"
                },
                pollResults: {
                    label: "調査結果",
                    description: "アンケート結果に役割の色を表示する"
                },
                colorChatMessages: {
                    label: "チャットメッセージに色を付ける",
                    description: "作成者の役割の色に応じてチャット メッセージを色分けする"
                },
                messageSaturation: {
                    label: "メッセージの飽和",
                    description: "メッセージカラーリングの強度"
                }
            }
        },
        rpcEditor: {
            name: "RPCエディター",
            description: "リッチ プレゼンスのコンテンツとタイプを編集します",
            option: {
                replacedAppIds: {
                    label: "変更されたアプリケーション ID (ID)",
                }
            },
            modal: {
                tutorial: {
                    title: "現在実行中のイベントのID",
                    noRunning: "実行中のイベントはありません",
                    available: "利用可能な変数",
                    variableText: "すべてのフィールド (投稿 URL を除く) に、元のコンテンツに自動的に置き換えられる変数を入力できます。",
                    more: "さらに詳しく",
                    details: {
                        leave: "フィールドをそのままにする場合は、空白のままにします。",
                        set: "ステータス インジケーターのフィールドを非表示にするには、「null」と入力します。",
                        reload: "変更を適用するには、Discord を再起動する必要がある場合があります。"
                    }
                },
                settings: {
                    applyEdits: "編集内容をアプリに適用する",
                    addNewApp: "新しいアプリを追加",
                    appId: "アプリケーションID",
                    invalidAppId: "無効なアプリケーション ID",
                    newActivityType: "新しいイベントタイプ",
                    activityTypes: {
                        playing: "遊んでいる",
                        watching: "見てる",
                        listening: "リスニング",
                        competing: "レーシング",
                        streaming: "オンエア"
                    },
                    streamUrl: "ストリーム URL (YouTube または Twitch である必要があります)",
                    invalidStreamUrl: "投稿URLが無効です",
                    newName: "新しい名前",
                    newDetails: "新しい詳細",
                    newState: "新しい状況",
                    largeImage: "全体像",
                    smallImage: "クリップアート",
                    text: "文章",
                    url: "URL",
                    firstLine: "(最初の行)",
                    secondLine: "(2行目)",
                    thirdLine: "(3行目)",
                    alsoThirdLine: "(3行目も)",
                    hideAssets: "画像を非表示にする (大きい画像と小さい画像)",
                    hideTimestamps: "タイムスタンプを非表示にする"
                }
            },
        },
        rpcStats: {
            name: "RPC統計",
            description: "アクティビティに関する統計をリッチ プレゼンスとして表示します",
            option: {
                assetURL: {
                    label: "ビジュアル URL",
                    description: "RPC に使用されるイメージ。 空白のままにすると、プロフィール写真が使用されます"
                },
                rpcTitle: {
                    label: "RPCヘッダー",
                    description: "RPC のタイトル"
                },
                statDisplay: {
                    label: "統計の表示",
                    description: "RPC では何を表示する必要がありますか? (おそらく 1 行しか許可されていません)",
                    today: "今日送信されたメッセージの量",
                    alltime: "常時送信されるメッセージの量",
                    listened: "今週最も聴かれたアルバム"
                },
                lastFMApiKey: {
                    label: "Last.fm API キー",
                    description: "Last.fm API キー"
                },
                lastFMUsername: {
                    label: "Last.fm ユーザー名",
                    description: "Last.fm のユーザー名"
                },
                albumCoverImage: {
                    label: "アルバムカバー画像",
                    description: "アルバム カバーを RPC イメージとして使用しますか? (Last.fm表示を選択した場合)"
                },
                lastFMStatFormat: {
                    label: "Last.fm 統計フォーマット",
                    description: "Last.fm 統計はどのようにフォーマットすればよいですか? $album はアルバム名に置き換えられ、$artist はアーティスト名に置き換えられます。"
                }
            },
            noInfo: "今のところ情報はありません:(",
            messagesToday: "今日送信されたメッセージ: {{count}}",
            messagesAllTime: "常に送信されるメッセージ: {{count}}"
        },
        saveFavoriteGIFs: {
            name: "お気に入りのGIFを保存",
            description: "お気に入りの GIF リンクをエクスポートします",
            toolbox: "お気に入りのGIFを保存する",
            title: "お気に入りのGIFを保存する",
            command: {
                savegifs: {
                    description: "お気に入りの GIF リンクをすべてテキスト ファイルに保存します"
                },
                saveworkinggifs: {
                    description: "お気に入りの GIF をすべてテストし、まだ機能するものだけを保存します"
                }
            },
            option: {
                showToolboxButton: {
                    label: "ツールボックスボタンを表示",
                    description: "Plexcord ツールボックスに「お気に入り GIF を保存」ボタンを表示します (再起動が必要です)"
                }
            },
            toast: {
                save: "GIF は {{filename}} として正常に保存されました",
                failed: "GIFを保存できませんでした",
                no: "お気に入りのGIFが見つかりません!",
                testing: "{{count}} 個の GIF がテスト中です。しばらく時間がかかる可能性があります...",
                noneWorking: "保存した GIF はどれも機能していないようです。",
                saved: "{{broken}} 個の壊れている可能性のある GIF が除外されました。 {{saved}} 個の作業用 GIF が保存されました。"
            }
        },
        scheduledMessages: {
            name: "スケジュールされたメッセージ",
            description: "特定の時刻または一定の遅延後にメッセージが送信されるようにスケジュールします。",
            toolbox: {
                toggle: "スケジュールされたメッセージを表示する"
            },
            option: {
                maxMessagesPerMinute: {
                    label: "1 分あたりの最大メッセージ数",
                    description: "同じ分間にチャネル上で送信できるスケジュールされたメッセージの最大数。"
                },
                checkIntervalSeconds: {
                    label: "制御間隔(秒)",
                    description: "プラグインが送信するメッセージがあるかどうかを確認する頻度。"
                },
                showNotifications: {
                    label: "通知を表示する",
                    description: "メッセージが送信されたときに通知 (トースト) を表示します。"
                },
                showPhantomMessages: {
                    label: "ゴーストメッセージを表示する",
                    description: "スケジュールされたメッセージをチャット内にゴースト (一時) メッセージとして表示します。"
                }
            },
            channelType: {
                unknown: "未知",
                dm: "DM",
                groupDm: "グループDM",
                channel: "チャネル"
            },
            toast: {
                messageSent: "スケジュールされたメッセージが {{channel}} に送信されました",
                messageFailed: "スケジュールされたメッセージを送信できませんでした",
                maxMessagesReached: "チャネルごとに 1 分あたり {{max}} メッセージの最大制限に達しました",
                messageScheduled: "メッセージ企画中！",
                messageRemoved: "スケジュールされたメッセージが削除されました",
                allCleared: "スケジュールされたメッセージはすべてクリアされました"
            },
            button: {
                tooltipOn: "計画モードがオン (クリックして無効にし、右クリックしてリストを表示)",
                tooltipOff: "計画モード オフ (クリックして有効にし、右クリックしてリストを表示)"
            },
            accessory: {
                scheduledFor: "{{date}} {{timeLeft}}に予定されています",
                remaining: {
                    days: "残り {{日}}g {{時間}}秒",
                    hours: "残り {{時間}}秒 {{分}}分",
                    minutes: "残り {{ minutes}} 分"
                }
            },
            scheduleModal: {
                title: "企画メッセージ",
                schedulingFor: "予定されているチャンネル: {{channel}}",
                scheduleType: "企画タイプ",
                delay: "遅れ",
                specificTime: "特定の時間",
                delayMinutes: "遅延 (分)",
                dateTime: "日時",
                error: {
                    invalidDelay: "有効な遅延時間を入力してください (最低 1 分)",
                    invalidDateTime: "将来の日付と時刻を選択してください"
                },
                schedule: "計画済み",
                cancel: "キャンセル"
            },
            viewModal: {
                title: "スケジュールされたメッセージ",
                clearAll: "すべてクリア",
                noMessages: "スケジュールされたメッセージはありません",
                delete: "シル",
                close: "四半期"
            }
        },
        searchFix: {
            name: "検索修正",
            description: "「虫眼鏡を落としてしまった！」という迷惑な話。 エラーを修正します。",
            notPerfect: "この修正は完全ではないため、問題を修正するには検索バーを再読み込みする必要がある場合があります。",
            paragraph1: "Discord では最大オフセット 5000 のみが許可されています (これが拡大鏡エラーの原因です)。",
            paragraph2: "これは、過去の 5000 件のメッセージと将来の 5000 件のメッセージを表示できることを意味します (古い順に並べ替えられます)。",
            paragraph3: "このプラグインは、Discord の制限を回避するために逆の並べ替え方法に切り替えます。",
            paragraph4: "ただし、大量の検索結果があり、どちらの並べ替え方法でも到達できないメッセージを表示しようとすると、",
            paragraph5: "プラグインはオフセット 0 (ソート方法に応じて最も新しいメッセージまたは最も古いメッセージ) のみを表示します。"
        },
        secretRingToneEnabler: {
            name: "SecretRingToneEnabler",
            description: "Discord は常にシークレット バージョンの着信音を再生します (特別な着信音イベントを除く)。",
            option: {
                onlySnow: {
                    label: "雪着信音イベント期間中のみ",
                    description: "Snow Halation テーマのみを再生する"
                }
            }
        },
        summaries: {
            name: "概要",
            description: "すべてのサーバーで Discord の実験的な概要機能を有効にし、AI が生成した会話の概要を表示します",
            option: {
                summaryExpiryThresholdDays: {
                    label: "概要削除のしきい値 (日)",
                    description: "ダイジェストが削除されるまでの有効日数。 チャンネルごとに最大 50 件のサマリーが保存されることに注意してください。"
                }
            }
        },
        selfForward: {
            name: "セルフフォワード",
            description: "現在のチャンネルを転送リストのポップアップに追加します"
        },
        sendTimestamps: {
            name: "タイムスタンプの送信",
            description: "チャット ボックス ボタンとテキスト ショートカットを使用してタイムスタンプを簡単に送信できます。 詳細な説明を読んでください。",
            sample: {
                paragraph1: "時間のみのタイムスタンプをすばやく送信するには、「HH:MM」形式 (バッククオートを含む) でタイムスタンプをメッセージに追加します。",
                paragraph2: "以下の例を参照してください。\nより具体的な内容が必要な場合は、チャット バーの [日付] ボタンを使用してください。",
                examples: "例:"
            },
            modal: {
                title: "タイムスタンプピッカー",
                light: "開ける",
                dark: "暗い",
                format: "タイムスタンプの形式",
                preview: "プレビュー",
                insert: "追加",
                insertTimestamp: "タイムスタンプの追加"
            },
            option: {
                replaceMessageContents: {
                    label: "メッセージ内容の変更",
                    description: "メッセージコンテンツのタイムスタンプを変更する"
                }
            }
        },
        serverInfo: {
            name: "サーバー情報",
            description: "サーバーに関する情報を表示できます",
            context: {
                serverInfo: "サーバー情報"
            },
            option: {
                sorting: {
                    label: "配置",
                    description: "ユーザー名または表示名 (該当する場合)",
                    username: "ユーザー名",
                    displayname: "表示名",
                    none: "仕分け"
                }
            },
            modal: {
                tab: {
                    serverInfo: "サーバー情報",
                    friends: "友達",
                    mutualUsers: "一般ユーザー",
                    blockedUsers: "ブロックされたユーザー",
                    ignoredUsers: "無視されたユーザー"
                },
                owner: "サーバー所有者",
                loading: "読み込み中...",
                createdAt: "作成日",
                joinedAt: "入社日",
                vanityLink: "特別招待リンク",
                preferredLocale: "優先地域",
                verification: {
                    level: "検証レベル",
                    none: "なし",
                    low: "低い",
                    medium: "中くらい",
                    high: "高い",
                    highest: "最高"
                },
                serverBoosts: "サーバーブースト",
                channels: "チャンネル",
                roles: "ローラー"
            }
        },
        serverListIndicators: {
            name: "サーバーリストインジケーター",
            description: "オンライン友達の数またはサーバーの数をサーバーリストに追加します",
            friends: "友達",
            servers: "プレゼンター",
            option: {
                mode: {
                    label: "モジュール",
                    description: "サーバー一覧に表示するモード",
                    friend: "オンラインのみの友達の数",
                    server: "サーバーの数のみ",
                    both: "サーバーとオンラインフレンドの両方の数"
                },
                useCompact: {
                    label: "コンパクトなモデュ・クラン",
                    description: "凡例をテキストのみで表示します"
                }
            }
        },
        serverSearch: {
            name: "サーバーサーチ",
            description: "クイック検索ボタンを使用してサーバーをより適切にナビゲートします",
            tooltip: "私たちは買う"
        },
        shikiCodeblocks: {
            name: "シキコードブロック",
            description: "Shiki を利用した VSCode スタイルのコード ブロックを Discord に導入します",
            option: {
                theme: {
                    label: "彼",
                    description: "デフォルトのテーマ"
                },
                customTheme: {
                    label: "カスタムテーマ",
                    description: "カスタム VSCode テーマへのリンク",
                    mustURL: "有効な URL である必要があります",
                    mustJSON: "JSON ファイルである必要があります"
                },
                tryHljs: {
                    label: "Hljs へのバックアップ",
                    description: "明るいデフォルトの Discord 着色剤とテーマを使用します。",
                    never: "一度もない",
                    secondary: "Highlight.js ではなく Shiki を選択してください",
                    primary: "Shiki ではなく Highlight.js を選択してください",
                    always: "いつも"
                },
                useDevIcon: {
                    label: "言語アイコンに Devicon を使用する",
                    description: "コードブロックに言語アイコンを表示する方法",
                    disabled: "無効",
                    colorless: "無色",
                    colored: "カラフル"
                },
                bgOpacity: {
                    label: "背景の不透明度",
                    description: "背景の不透明度"
                }
            },
            button: {
                copy: "コピー",
                copied: "コピーしました！"
            }
        },
        showAllMessageButtons: {
            name: "すべてのメッセージボタンを表示",
            description: "Shift キーを押すかどうかに関係なく、常にすべてのメッセージ ボタンが表示されます。",
            option: {
                noShiftDelete: {
                    label: "シフトせずに削除",
                    description: "メッセージを削除するために Shift キーを押す必要がなくなります。"
                },
                noShiftPin: {
                    label: "シフトせずに固定する",
                    description: "メッセージを固定するために Shift キーを押す必要がなくなります。"
                }
            }
        },
        showBadgesInChat: {
            name: "チャットでバッジを表示",
            description: "チャット内のメッセージ作成者の名前の横にバッジを表示します。",
            option: {
                showPlexcordDonor: {
                    label: "Plexcord の寄付者バッジを提示してください",
                    description: "チャットで Plexcord 寄付者バッジを表示できるようにします。"
                },
                plexcordDonorPosition: {
                    label: "Plexcord 寄付者バッジの場所",
                    description: "Plexcord 寄付者バッジの場所。"
                },
                showPlexcordContributor: {
                    label: "Plexcord 貢献者バッジを表示する",
                    description: "チャットに Plexcord 貢献者バッジを表示できるようにします。"
                },
                plexcordContributorPosition: {
                    label: "Plexcord 貢献者バッジの場所",
                    description: "Plexcord 貢献者バッジの場所。"
                },
                showDiscordProfile: {
                    label: "Discord プロフィールバッジを表示",
                    description: "チャットに Discord プロフィールバッジを表示できるようにします。"
                },
                discordProfilePosition: {
                    label: "Discord プロフィールバッジの場所",
                    description: "Discord プロフィールバッジの場所。"
                },
                showDiscordNitro: {
                    label: "Discord Nitro バッジを表示",
                    description: "チャットに Discord Nitro バッジを表示できるようにします。"
                },
                discordNitroPosition: {
                    label: "Discord Nitro バッジの場所",
                    description: "Discord Nitro バッジの場所。"
                },
                badgeSettings: {
                    label: "バッジの設定",
                    description: "チャットに表示される他のバッジの位置を構成します。",
                    modal: "ドラッグしてバッジを並べ替えます。 クリックして、特定のバッジ タイプを有効または無効にします。"
                }
            },
            badge: {
                plexcord: "Plexcord サポーターバッジ",
                contributor: "Plexcord 参加者バッジ",
                discordProfile: "Discord プロフィール rozetleri (HypeSquad、Discord Staff、Active Developer vb.)",
                nitro: "ニトロバッジ",
                staff: "ディスコードスタッフ",
                partner: "パートナーサーバーの所有者",
                events: "ハイプスクワッドイベント",
                bravery: "HypeSquad の勇気",
                brilliance: "HypeSquad の輝き",
                balance: "HypeSquad バランス",
                bugHunter: "Discord バグハンター",
                earlyVerifiedBotDeveloper: "初期の認証済みボット開発者",
                earlySupporter: "アーリーサポーター",
                moderatorProgram: "モデレータープログラム卒業生"
            },
            modal: {
                plexcordContributor: "プレックスコード参加者",
                discordNitro: "ディスコードニトロ",
                basic: "基本",
                classic: "クラシック"
            }
        },
        showConnections: {
            name: "接続を表示する",
            description: "リンクされたアカウントをユーザーのポップアップ カードに表示します",
            option: {
                iconSize: {
                    label: "アイコンのサイズ",
                    description: "アイコンのサイズ (px)"
                },
                iconSpacing: {
                    label: "アイコンスペース",
                    description: "アイコンの余白",
                    compact: "コンパクト",
                    cozy: "快適",
                    roomy: "広い"
                }
            }
        },
        showHiddenChannels: {
            name: "非表示のチャンネルを表示",
            description: "アクセス権限のないチャンネルを表示します。",
            tooltip: "秘密のチャンネル",
            option: {
                channelStyle: {
                    label: "チャンネルスタイル",
                    description: "非表示のチャンネルを表示するために使用されるスタイル。",
                    classic: "クラシック",
                    muted: "静けさ",
                    showUnreads: "未読を表示",
                    mutedWithUnreads: "ミュートおよび未読を表示"
                },
                showMode: {
                    label: "表示モード",
                    description: "非表示のチャンネルを表示するために使用されるモード。",
                    lock: "ロックアイコンを備えたシンプルなスタイル",
                    hidden: "右側に目のアイコンが隠れた落ち着いたスタイル",
                    lockIconRight: "右側のロックアイコン"
                },
                defaultAllowedUsersAndRolesDropdownState: {
                    label: "デフォルトの許可されたユーザーとロールのドロップダウンステータス",
                    description: "許可されたユーザーとロールのメニューをプライベート チャネルでデフォルトで開くかどうか"
                }
            },
            channelType: {
                text: "文章",
                announcement: "発表",
                forum: "フォーラム",
                voice: "セス",
                stage: "シーン"
            },
            sortOrder: {
                latestActivity: "最新のイベント",
                creationDate: "作成日"
            },
            forumLayout: {
                default: "未設定",
                list: "リストビュー",
                grid: "ギャラリービュー"
            },
            videoQuality: {
                auto: "自動",
                full: "720p"
            },
            modal: {
                hidden: "隠れた",
                locked: "ロックされた",
                threads: "トピックス",
                posts: "投稿",
                messages: "メッセージ",
                post: "役職",
                message: "メッセージ",
                unknown: "未知",
                permissionDetails: "許可の詳細",
                thisIsA: "これは {{status}} {{channelType}} チャンネルです",
                canNotSee: "このチャンネルの {{type}} 部分は表示されません。",
                guidelines: "しかし、彼らの指示を見ることができます:",
                lastCreated: "最後に作成された {{type}}:",
                lastPin: "最後に固定された投稿:",
                threadSlowmode: "デフォルトのスレッド低速モード:",
                slowmode: "低速モード:",
                bitrate: "ビットレート:",
                region: "エリア：",
                automatic: "自動",
                videoQuality: "ビデオ品質モード:",
                inactiveArchiveDuration: "{{type}} をアーカイブするまでのデフォルトの非アクティブ期間",
                defaultLayout: "デフォルトのレイアウト:",
                defaultSort: "デフォルトの並べ替え:",
                defaultReaction: "デフォルトのリアクション絵文字:",
                requireTag: "このフォーラムへの投稿にはタグの設定が必須です。",
                availableTags: "利用可能なタグ:",
                allowedUsersAndRoles: "許可されたユーザーと役割:",
                hideAllowedUsersAndRoles: "許可されたユーザーとロールを非表示にする",
                viewAllowedUsersAndRoles: "許可されたユーザーとロールの表示"
            }
        },
        showHiddenThings: {
            name: "表示隠されたもの",
            description: "権限に関係なく、さまざまな非表示のものやモデレータのみのものを表示します。",
            option: {
                showTimeouts: {
                    label: "チャットでメンバーのタイムアウトを表示",
                    description: "チャットにメンバーのタイムアウト アイコンを表示します。"
                },
                showInvitesPaused: {
                    label: "一時停止中の招待状の情報を表示",
                    description: "サーバー リストで招待が一時停止されていることを示します。"
                },
                showModView: {
                    label: "Mod ビューを表示",
                    description: "すべてのサーバーでメンバー モード ビューのコンテキスト メニュー オプションを表示します。"
                }
            }
        },
        showMessageEmbeds: {
            name: "表示メッセージ埋め込み",
            description: "埋め込みのないリンクのコンテキスト メニューに埋め込み表示オプションを追加します",
            context: {
                embed: {
                    show: "埋め込みを表示",
                    hide: "埋め込みを削除"
                }
            },
            error: {
                failed: "埋め込みを取得できませんでした",
                noEmbed: "埋め込みが見つかりません"
            }
        },
        showMeYourName: {
            name: "あなたの名前を見せてください",
            description: "チャット内のカスタム ニックネーム、友人ニックネーム、サーバー ニックネーム、表示名、ユーザー名の順列を表示します。",
            option: {
                messages: {
                    label: "メッセージ",
                    description: "メッセージにカスタム名の形式を表示します。"
                },
                replies: {
                    label: "返信",
                    description: "返信内のカスタム名の形式を表示します。"
                },
                mentions: {
                    label: "言及",
                    description: "メンションにカスタム名の形式を表示します。"
                },
                memberList: {
                    label: "メンバー一覧",
                    description: "メンバーリストのカスタム名形式でリストされている最初の利用可能な名前を表示します。"
                },
                typingIndicator: {
                    label: "インジケーターの書き込み",
                    description: "カスタム名形式でリストされている最初の使用可能な名前を入力インジケーターに表示します。"
                },
                profilePopout: {
                    label: "プロフィールポップアップカード",
                    description: "プロフィール ポップアップ カードに、カスタム名形式でリストされている最初の利用可能な名前を表示します。"
                },
                voiceChannels: {
                    label: "オーディオチャンネル",
                    description: "オーディオ チャネルのカスタム名形式でリストされている最初の利用可能な名前を表示します。"
                },
                reactions: {
                    label: "反応",
                    description: "カスタム名形式でリストされている最初に使用可能な名前を反応ツールチップに表示し、反応ポップアップにフルネームを表示します。"
                },
                discriminators: {
                    label: "パーサーの表示",
                    description: "ボットのユーザー名にパーサーを追加します。 パーサーは通常のユーザーに対しては削除されましたが、ボットには依然として使用されています。 デフォルトでは、ボットのユーザー名はユーザーのグローバル名と同等であるため、複数のボットが同じユーザー名を持つことができます。 パーサーを追加すると、パーサーは再び一意になります。"
                },
                hideDefaultAtSign: {
                    label: "デフォルトの @ 記号を非表示にする",
                    description: "メンションや返信で名前の先頭にあるデフォルトの「@」記号を非表示にします。 関連する機能が有効になっている場合にのみ適用されます。"
                },
                truncateAllNamesWithStreamerMode: {
                    label: "パブリッシャーモードですべての名前を短縮する",
                    description: "ブロードキャスター モードでは、ユーザー名だけでなくすべての名前を短縮します。"
                },
                removeDuplicates: {
                    label: "重複の削除",
                    description: "名前のうち 2 つが同じ場合は、重複した名前を削除し、一意の名前だけを残します。"
                },
                ignoreFonts: {
                    label: "フォントを無視する",
                    description: "2 番目、3 番目、および 4 番目の名前には、ユーザーのカスタム フォントを無視して GG SANS を使用します。"
                },
                ignoreGradients: {
                    label: "グラデーションを無視する",
                    description: "プライマリ以外の名前の場合、ロールにグラデーションがあり、次の色が「Role+-#」に設定されている場合は、グラデーション全体の代わりにプライマリ カラーを使用し、ニトロ効果がある場合は完全に無視します。"
                },
                animateGradients: {
                    label: "グラデーションをアニメーション化する",
                    description: "2 番目、3 番目、4 番目の名前に役割のグラデーションがある場合、アニメーションを表示します。 「グラデーションを無視」が有効になっている場合、またはモーションの軽減がオンになっている場合は無効になります。"
                },
                nameSeparator: {
                    label: "名前の区切り文字",
                    description: "名前の間に使用する区切り文字。 デフォルトは単一のスペースです。"
                },
                friendNameOnlyInDirectMessages: {
                    label: "友達の名前はプライベートメッセージにのみ表示されます",
                    description: "友達の名前はプライベート メッセージにのみ表示され、サーバーには表示されません。"
                },
                customNameOnlyInDirectMessages: {
                    label: "プライベートメッセージにのみカスタム名が表示される",
                    description: "カスタム名はプライベート メッセージにのみ表示され、サーバーには表示されません。"
                },
                includedNames: {
                    label: "含まれる名前",
                    description: "ユーザー名、表示名、ニックネーム、友人名が表示される順序。 次のプレースホルダーを使用します: {user}、{display}、{nick}、{friend}。 名前が使用できない場合は、使用する代替名をカンマで区切って書くことができます: {friend, nick, display}。 各名前に 3 つのプレフィックスと 3 つのサフィックスを追加できます。"
                },
                customNameColor: {
                    label: "カスタム名の色",
                    description: "最初に表示されるものでない場合に、ユーザーに割り当てるカスタム名に使用する色。 有効な CSS 入力を受け入れます。 「Role」を使用して、ユーザーの親ロールの色、ニトロ効果の色、または IRCColors カラー (有効な場合) を追跡します。 このパーセンテージで明るさを調整するには、「Role+-#」を使用します (例: 「Role+15」)"
                },
                friendNameColor: {
                    label: "友達の名前の色",
                    description: "友人の名前が表示される名前以外の場合に使用する色。 有効な CSS 入力を受け入れます。 「Role」を使用して、ユーザーの親ロールの色、ニトロ効果の色、または IRCColors カラー (有効な場合) を追跡します。 このパーセンテージで明るさを調整するには、「Role+-#」を使用します (例: 「Role+15」)"
                },
                nicknameColor: {
                    label: "ニックネームの色",
                    description: "ニックネームが表示される名前ではない場合に使用する色。 有効な CSS 入力を受け入れます。 「Role」を使用して、ユーザーの親ロールの色、ニトロ効果の色、または IRCColors カラー (有効な場合) を追跡します。 このパーセンテージで明るさを調整するには、「Role+-#」を使用します (例: 「Role+15」)"
                },
                displayNameColor: {
                    label: "表示名の色",
                    description: "表示名が最初に表示される名前ではない場合に使用する色。 有効な CSS 入力を受け入れます。 「Role」を使用して、ユーザーの親ロールの色、ニトロ効果の色、または IRCColors カラー (有効な場合) を追跡します。 このパーセンテージで明るさを調整するには、「Role+-#」を使用します (例: 「Role+15」)"
                },
                usernameColor: {
                    label: "ユーザー名の色",
                    description: "ユーザー名が最初に表示される名前ではない場合に使用する色。 有効な CSS 入力を受け入れます。 「Role」を使用して、ユーザーの親ロールの色、ニトロ効果の色、または IRCColors カラー (有効な場合) を追跡します。 このパーセンテージで明るさを調整するには、「Role+-#」を使用します (例: 「Role+15」)"
                },
                triggerNameRerender: {
                    label: "トリガー名の再生成",
                    description: "この設定を変更すると、名前が再生成されます。"
                }
            },
            modal: {
                change: {
                    title: "SMYN ユーザー名の変更",
                },
                add: {
                    title: "SMYNニックネームを追加"
                },
                setCustom: "このユーザーのカスタム SMYN ニックネームを設定します。 SMYNテンプレートの設定で{custom}を指定して使用します。",
                nickname: "SMYN ニックネーム",
                reset: "SMYNニックネームをリセット",
                cancel: "キャンセル"
            }
        },
        showResourceChannels: {
            name: "リソースチャンネルの表示",
            description: "チャンネルリストのサーバーリソースの背後に隠れているチャンネルを表示します"
        },
        showSongName: {
            name: "表示曲名",
            description: "Spotify イベントのアーティストの代わりに曲名を表示します"
        },
        showTimeoutDuration: {
            name: "ShowTimeoutDuration",
            description: "ユーザーがタイムアウトする時間をタイムアウト アイコン ツールチップまたはその横に示します",
            option: {
                displayStyle: {
                    label: "表示スタイル",
                    description: "タイムアウト期間の表示方法",
                    tooltip: "ツールチップ内",
                    inline: "タイムアウトアイコンの横にある"
                }
            }
        },
        sidebarChat: {
            name: "サイドバーチャット",
            description: "別のチャネルまたは DM をサイドバーまたはポップアップとして開きます",
            toolbox: {
                label: "前のチャットを開く"
            },
            context: {
                label: "サイドバーチャットを開く"
            },
            modal: {
                switch: "チャンネルを変更する",
                popout: "チャットをポップアップとして開く",
                close: "サイドバーチャットを閉じる"
            },
            option: {
                persistSidebar: {
                    label: "サイドバーチャットを永続化する",
                    description: "Discordの再起動時にサイドバーチャットを開いたままにできるようにします"
                },
                patchCommunity: {
                    label: "コミュニティパッチを適用する",
                    description: "チャネル ブラウザや [メンバー] タブなど、コミュニティ サーバー上のアイテムにパッチを適用します。"
                }
            }
        },
        signature: {
            name: "サイン",
            description: "自動署名/メッセージテキストの末尾",
            option: {
                name: {
                    label: "サイン",
                    description: "メッセージの最後に追加される署名テキスト"
                },
                textHeader: {
                    label: "テキストタイトル",
                    description: "本文の先頭に追加するタイトル"
                },
                showIcon: {
                    label: "アイコンを表示",
                    description: "チャットバーにアイコンを表示してプラグインをオンまたはオフにします"
                },
                contextMenu: {
                    label: "コンテキストメニュー",
                    description: "チャットログインコンテキストメニューの機能を切り替えるオプションを追加"
                },
                isEnabled: {
                    label: "効果的",
                    description: "トグル機能"
                }
            },
            tooltip: {
                enable: "署名を有効にする",
                disable: "署名を無効にする"
            },
            context: {
                enable: "署名を有効にする"
            },
            command: {
                signature: {
                    name: "サイン",
                    description: "署名のオンとオフを切り替える",
                    toogle: "署名を変更します (デフォルトの動作: 変更)",
                    enabled: "署名が有効です",
                    disabled: "署名が無効になっています"
                }
            }
        },
        silentMessageToggle: {
            name: "サイレントメッセージ切り替え",
            description: "チャット バーにボタンを追加して、サイレント メッセージの送信をオンまたはオフにします。",
            option: {
                persistState: {
                    label: "ステータスを永続化する",
                    description: "サイレント メッセージの切り替えステータスを維持する方法を決定する",
                    none: "永続的であってはなりません (チャンネルが変更されるとリセットされる必要があります)。",
                    channels: "チャネル間で永続化する",
                    restarts: "チャネル間で持続し、Discord が再起動される"
                },
                autoDisable: {
                    label: "自動無効化",
                    description: "無言メッセージを送信した後、機能を再び自動的に無効にする"
                }
            },
            tooltip: {
                enable: "サイレントメッセージを有効にする",
                disable: "サイレントメッセージを無効にする"
            }
        },
        silentTyping: {
            name: "サイレントタイピング",
            description: "チャットから入力インジケーターを非表示にします。",
            command: {
                silentTyping: {
                    name: "サイレントタイピング",
                    description: "チャットから入力インジケーターを非表示にします。",
                    toggle: {
                        name: "トグル",
                        description: "機能をグローバルに、チャネルごと、またはサーバーごとに切り替えます。",
                        global: "グローバル",
                        channel: "チャネル",
                        guild: "プレゼンター"
                    },
                    chatBarIndicator: {
                        name: "チャットバーインジケーター",
                        description: "他のユーザーの入力インジケーターをチャット バーの上部から非表示にします。"
                    },
                    membersListIndicator: {
                        name: "メンバーリストインジケーター",
                        description: "他のユーザーの入力インジケーターをメンバー リストから非表示にします。"
                    },
                    chatIcon: {
                        name: "チャットアイコン",
                        description: "チャット バーにアイコンを表示すると、プラグインのオンとオフをすばやく切り替えることができます。"
                    },
                    chatContextMenu: {
                        name: "チャットコンテキストメニュー",
                        description: "プラグイン設定をすばやく変更するには、チャット コンテキスト メニューにドロップダウン メニューを追加します。"
                    },
                    defaultHidden: {
                        name: "デフォルト非表示",
                        description: "DM/チャネル/サーバー内の書き込み情報をデフォルトで非表示にするかどうかを決定します。"
                    }
                }
            },
            content: {
                updated: "サイレントタイピング設定が更新されました。",
                noChanges: "サイレントタイピング設定には変更は加えられませんでした。"
            },
            tooltip: {
                hidden: "非表示 ({{location}}) と表示されます",
                visible: "書き込み可能 ({{location}})",
                global: "書き込み可視 (グローバル)"
            },
            option: {
                enabledGlobally: {
                    label: "グローバルに活躍",
                    description: "独自の書き込みインジケーターをグローバルにオン/オフにします。"
                },
                hideChatBoxTypingIndicators: {
                    label: "チャット ボックス書き込みインジケーターを非表示にする",
                    description: "他のユーザーのチャット ボックスの上部にある入力インジケーターを非表示にします。"
                },
                hideMembersListTypingIndicators: {
                    label: "メンバーリストの書き込みインジケーターを非表示にする",
                    description: "他のユーザーのメンバーリストで入力インジケーターを非表示にします。"
                },
                chatIcon: {
                    label: "チャットアイコン",
                    description: "チャットバーにアイコンを表示すると、プラグインをすばやく切り替えることができます。"
                },
                chatIconLeftClickAction: {
                    label: "チャットアイコンの左クリックアクション",
                    description: "チャット アイコンを左クリックしたときの動作を決定します。",
                    global: "グローバル書き込みステータスの変更",
                    channel: "チャネルの書き込みステータスの変更",
                    guild: "サーバーへの書き込みステータスの変更",
                    settings: "プラグイン設定を開く"
                },
                chatIconMiddleClickAction: {
                    label: "チャットアイコンの中クリックアクション",
                    description: "チャット アイコンを中クリックしたときの動作を決定します。",
                    global: "グローバル書き込みステータスの変更",
                    channel: "チャネルの書き込みステータスの変更",
                    guild: "サーバーへの書き込みステータスの変更",
                    settings: "プラグイン設定を開く"
                },
                chatIconRightClickAction: {
                    label: "チャットアイコンの右クリックアクション",
                    description: "チャット アイコンを右クリックしたときの動作を決定します。",
                    global: "グローバル書き込みステータスの変更",
                    channel: "チャネルの書き込みステータスの変更",
                    guild: "サーバーへの書き込みステータスの変更",
                    settings: "プラグイン設定を開く"
                },
                chatContextMenu: {
                    label: "チャットコンテキストメニュー",
                    description: "プラグイン設定をすばやく変更するには、チャット コンテキスト メニューにドロップダウン メニューを追加します。"
                },
                defaultHidden: {
                    label: "デフォルトの非表示",
                    description: "有効にすると、以下の「無効な場所」リストにリストされていないすべての DM/チャネル/サーバー上の他のユーザーからインジケーターが非表示になります。 無効にすると、インジケーターは「アクティブな場所」リストに含まれていない場所に表示されます。"
                },
                enabledLocations: {
                    label: "アクティブな場所",
                    description: "これらのIDに対して機能を有効にします。 カンマ区切りの DM ID、チャネル ID、サーバー ID を受け入れます。 「デフォルトのプライベート」が無効になっている場合にのみ使用されます。"
                },
                disabledLocations: {
                    label: "無効な場所",
                    description: "これらのIDの機能を無効にします。 カンマ区切りの DM ID、チャネル ID、サーバー ID を受け入れます。 「デフォルトのプライベート」が有効な場合にのみ使用されます。"
                }
            }
        },
        snowfall: {
            name: "降雪",
            description: "Discordに雪を降らせましょう！",
            about: {
                title: "情報",
                paragraph: "このプラグインは、Discord インターフェースにクリスマスをテーマにした降雪効果を追加します。 以下の設定から雪の種類を変更できます。",
                note: "注: このプラグインは、ほとんどのコンピュータで平均的な Plexcord プラグインよりもパフォーマンスに大きな影響を与えませんが、ローエンド システムでは多少の遅延が発生する可能性があります。"
            },
            option: {
                typeOfSnow: {
                    label: "車の種類",
                    description: "表示される雪の種類を変更します (パフォーマンスに影響します)。",
                    solid: "ソリッドカラー (最高パフォーマンス)",
                    text: "メチン（中性能）",
                    emoji: "ビジュアル (最低パフォーマンス)"
                },
                maxSize: {
                    label: "最大サイズ",
                    description: "雪の結晶の最大サイズ"
                },
                speed: {
                    label: "スピード",
                    description: "降雪率 (高い = より早く降る)"
                },
                flakesPerSecond: {
                    label: "1 秒あたりの雪の結晶数",
                    description: "1 秒あたりに降る雪の結晶の量 (多い = 降水量が多い)"
                }
            }
        },
        sortFriendRequests: {
            name: "友達リクエストの並べ替え",
            description: "友達リクエストを受信日順に並べ替えます",
            tooltip: "追加しました — {{日付}}",
            option: {
                showDates: {
                    label: "ショーの日付",
                    description: "友達リクエストに日付を表​​示する"
                }
            }
        },
        soundBoardLogger: {
            name: "サウンドボードロガー",
            description: "ボイスチャットで再生されるすべてのサウンドボードサウンドを録音し、ダウンロードできるようにします",
            tooltip: "サウンドボードログを開く",
            option: {
                savedIds: {
                    label: "保存されたサウンドボード ID",
                    description: "一度に保存したいサウンドボード ID の量 (0 では無制限に保存できます)",
                    notNumber: "値は数値ではありません。",
                    cantDecimal: "値を 10 進数にすることはできません。",
                    cantNegative: "値を負の数にすることはできません。",
                    heading: "一度に保存したいサウンドボード ID の量 (0 では無制限に保存できます)",
                    warning: "警告！ 数値をより低い値に設定すると、ログがリセットされます。",
                    placeholder: "数字を入力してください"
                },
                fileType: {
                    label: "ファイルの種類",
                    description: "ファイルを保存する形式"
                },
                openLogs: {
                    label: "ログを開く",
                    description: "ログを表示する",
                    button: "ログを開く"
                },
                soundVolume: {
                    label: "騒音レベル",
                    description: "オン/オフ音の音量(0無効)"
                },
                iconLocation: {
                    label: "アイコンの場所",
                    description: "SoundBoard Log アイコンが表示される場所を選択します (再起動が必要です)",
                    toolbar: "ツールバー",
                    chatInput: "チャットログイン"
                }
            },
            modal: {
                title: "サウンドボードのログ",
                loading: "サウンドを読み込んでいます...",
                noLogs: "音声はまだ録音されていません。 ボイスチャットに参加してログを取得しましょう！",
                clearLogs: "ログをクリアする",
                played: "{{time}} 回再生しました",
                last: "最後にプレイした:",
                also: "彼は次のものも盗みました。",
                download: "ダウンロード",
                copyId: "IDをコピーする",
                copied: "ID がクリップボードにコピーされました!",
                playSound: "サウンドを再生する",
                moreUsers: "他の人もこの音を使っていました...",
                volume: "響板の音量"
            }
        },
        splitLargeMessages: {
            name: "分割大メッセージ",
            description: "Discord のメッセージ制限に合わせて、大きなメッセージを複数のメッセージに分割します。",
            option: {
                maxLength: {
                    label: "最大メッセージ長",
                    description: "分割されるまでのメッセージの最大長。 自動検出するには 0 に設定します。"
                },
                disableFileConversion: {
                    label: "ファイル変換を無効にする",
                    description: "有効にすると、大きなメッセージのファイル変換が無効になります。"
                },
                sendDelay: {
                    label: "配送の遅延",
                    description: "各トラック間の待機時間 (秒単位)。"
                },
                hardSplit: {
                    label: "ソリッドパーティション",
                    description: "有効にすると、スペース/改行の代わりに最後の文字から分割されます。"
                },
                splitInSlowmode: {
                    label: "スローモードでの分割",
                    description: "チャンネルで低速モードが有効になっている場合、メッセージを分割しますか?"
                },
                slowmodeMax: {
                    label: "低速モードの最大値",
                    description: "スローモードで分割する場合に許容される最大スローモード時間。"
                }
            }
        },
        spotifyActivityToggle: {
            name: "Spotifyアクティビティトグル",
            description: "Spotify アクティビティの可視性の切り替えボタンを追加します。",
            tooltip: {
                enable: "Spotify アクティビティを開く",
                disable: "Spotify アクティビティをオフにする"
            },
            option: {
                location: {
                    label: "女性",
                    description: "Spotify のオン/オフ ボタンを表示する場所",
                    panel: "ミュート/ミュートの隣",
                    toolbox: "Plexcord ツールボックス"
                },
                activityStatus: {
                    label: "活動状況",
                    description: "Spotify アクティビティの現在のステータス"
                }
            }
        },
        spotifyCrack: {
            name: "Spotify クラック",
            description: "無料の共同リスニングを許可し、ボイスチャットの自動一時停止をブロックし、アイドル時に Spotify アクティビティを再生し続けることができます。",
            option: {
                noSpotifyAutoPause: {
                    label: "Spotify の自動一時停止をオフにする",
                    description: "Spotify の自動一時停止を無効にします。"
                },
                keepSpotifyActivityOnIdle: {
                    label: "アイドル中に Spotify アクティビティを再開する",
                    description: "アイドル状態でも Spotify アクティビティの再生を継続できるようにします"
                }
            }
        },
        spotifyShareCommands: {
            name: "Spotify 共有コマンド",
            description: "スラッシュコマンド (/track、/album、/artist) を使用して、現在の Spotify の曲、アルバム、またはアーティストを共有します。",
            command: {
                makeCommand: {
                    description: "現在の Spotify {{type}} をチャットで共有します",
                    track: "Spotify で曲を聴いていません。",
                    find: "この曲は Spotify で見つかりませんでした。"
                }
            }
        },
        startupTimings: {
            name: "起動タイミング",
            description: "設定メニューに開始タイミングを追加",
            modal: {
                title: "開始タイミング",
                ended: "視聴終了時間:",
                start: "始まり",
                interval: "12月",
                delta: "デルタ",
                event: "オーレイ",
                serverTrace: "サーバー監視",
                loading: "読み込み中..."
            }
        },
        statusNotifications: {
            name: "ステータス通知",
            description: "ステータス変更の通知を追加します",
            loading: "読み込み中...",
            option: {
                notificationsSound: {
                    label: "通知音",
                    description: "ステータス通知の通知音を鳴らしますか?"
                },
                usersList: {
                    label: "ユーザーリスト",
                    description: "ステータスの変化が発生したときにユーザーに通知を受ける",
                    empty: "監視されているユーザーはいません。 ユーザーを追加するには、ユーザーを右クリックし、[ステータス通知] オプションを使用します。"
                }
            },
            context: {
                label: "ステータス通知",
                notifications: "通知",
                type: {
                    all: "全て",
                    online: "オンライン",
                    offline: "オフライン",
                    none: "なし"
                }
            },
            notification: {
                unknownUser: "ユーザー",
                title: "ステータス通知",
            },
            status: {
                online: "オンライン",
                idle: "アイドル状態",
                dnd: "邪魔しないでください",
                offline: "オフライン",
            },
        },
        statusPresets: {
            name: "ステータスプリセット",
            description: "ステータスを保存して後で再調整できます",
            button: {
                remember: "ステータスを記憶",
            },
            context: {
                edit: "カスタムプリセットの編集",
                set: "例外を設定する"
            },
            notification: {
                successfully: "ステータスが正常に保存されました"
            }
        },
        steamStatusSync: {
            name: "Steamステータス同期",
            description: "Steam とステータスを同期しましょう! (オンライン、外出先、非表示、またはオフライン。)",
            option: {
                onlineStatus: {
                    label: "オンラインステータス",
                    description: "Discordオンライン中のSteamステータス"
                },
                idleStatus: {
                    label: "アイドルステータス",
                    description: "Discord がアイドル状態のときの Steam ステータス"
                },
                dndStatus: {
                    label: "ステータスを邪魔しないでください",
                    description: "Discord のサイレント中の Steam ステータス"
                },
                invisibleStatus: {
                    label: "目に見えないステータス",
                    description: "Discord 非表示時の Steam ステータス"
                },
                goInvisibleIfActivityIsHidden: {
                    label: "イベントが非公開の場合は非表示になります",
                    description: "Discord アクティビティが非表示の場合に Steam ステータスを非表示に設定する"
                }
            },
            status: {
                online: "オンライン",
                away: "離れて",
                invisible: "見えない",
                offline: "オフライン (Steam チャットから切断)",
                disabled: "無効"
            }
        },
        stickerBlocker: {
            name: "ステッカーブロッカー",
            description: "ステッカーを表示させないようにすることができます。",
            option: {
                showGif: {
                    label: "GIFを表示",
                    description: "かっこいい猫のGIFを表示するかどうか。"
                },
                showMessage: {
                    label: "メッセージを表示",
                    description: "どのIDがブロックされているかを示すメッセージを表示するかどうか"
                },
                showButton: {
                    label: "ボタンを表示",
                    description: "GIFのブロックを解除するボタンを表示するかどうか"
                },
                blockedStickers: {
                    label: "ブロックされたステッカー",
                    description: "ブロックされたステッカー ID のリスト (何をしているのかわからない場合は編集しないでください)"
                }
            },
            modal: {
                blocked: "ブロックされたステッカー。 ID: {{id}} 名前: {{name}}",
                unblock: "{{name}}のブロックを解除する"
            },
            context: {
                blockSticker: "ブロックステッカー",
                unblockSticker: "ステッカーのブロックを解除する"
            }
        },
        stickerPaste: {
            name: "ステッカーペースト",
            description: "ステッカー チューザーでステッカーを選択すると、すぐに送信されるのではなく、チャット ボックスに追加されます。"
        },
        streamerModeOnStream: {
            name: "ストリーマーモードオンストリーム",
            description: "Discordでブロードキャストを開始するとストリーマーモードが自動的に有効になります"
        },
        streamingCodecDisabler: {
            name: "ストリーミングコーデック無効化",
            description: "必要なストリーミング コーデックを無効にします",
            option: {
                disableAv1Codec: {
                    label: "AV1 コーデックを無効にする",
                    description: "Discord がストリーミングに AV1 の使用を検討しないようにします。"
                },
                disableH265Codec: {
                    label: "H265 コーデックを無効にする",
                    description: "Discord がストリーミングに H265 の使用を検討しないようにします。"
                },
                disableH264Codec: {
                    label: "H264 コーデックを無効にする",
                    description: "Discord がストリーミングに H264 を使用することを検討しないようにします。"
                }
            }
        },
        superReactionTweaks: {
            name: "スーパーリアクションの調整",
            description: "同時に再生されるスーパー リアクションの制限をカスタマイズし、デフォルトでスーパー リアクションを使用します",
            option: {
                superReactByDefault: {
                    label: "デフォルトでスーパーリアクティブ",
                    description: "リアクションピッカーはデフォルトでスーパーリアクションを使用します"
                },
                unlimitedSuperReactionPlaying: {
                    label: "無制限のスーパーリアクションプレイ",
                    description: "スーパーリアクションの同時再生制限を解除"
                },
                superReactionPlayingLimit: {
                    label: "スーパーリアクション再生制限",
                    description: "同時に再生できるスーパーリアクションの最大数。 0 はスーパーリアクションの再生を無効にします"
                }
            }
        },
        textReplace: {
            name: "テキスト置換",
            description: "メッセージ内のテキストを変更します。 既製のルールは、Plexcord サーバーの #textreplace-rules チャネルで見つけることができます。",
            option: {
                replace: {
                    label: "変化",
                    string: "プレーンテキストの使用",
                    regex: "正規表現の使用",
                    myMessages: "自分のメッセージに適用します (全員に表示されます)",
                    othersMessages: "他の人のメッセージに適用します (自分だけに表示されます)",
                    allMessages: "すべてのメッセージに適用"
                },
                stringRules: {
                    label: "プレーンテキストのルール",
                    description: "平文マッチングを使用したテキスト置換ルール。"
                },
                regexRules: {
                    label: "正規表現ルール",
                    description: "正規表現を使用してテキストを置換するためのルール。"
                }
            },
            modal: {
                title: "ルールをテストする",
                find: "ブル",
                replace: "変化",
                includes: "含まれている場合のみ",
                type: "メッセージを書く",
                applied: "ルールが適用されたメッセージ"
            }
        },
        themeAttributes: {
            name: "テーマの属性",
            description: "テーマ設定の目的でさまざまな要素にデータ属性を追加します"
        },
        timezones: {
            name: "タイムゾーン",
            description: "プロフィールとメッセージスレッドにユーザーの現地時間を表示します",
            button: {
                wantToSave: "タイムゾーンをデータベースに保存しますか?ここをクリックして設定してください。",
                yourLocalTimezone: "(あなたの現地のタイムゾーン)"
            },
            context: {
                set: "ローカルタイムゾーンの設定"
            },
            toast: {
                refresh: {
                    successfully: "タイムゾーンが正常に更新されました。",
                    failed: "タイムゾーンを更新できませんでした。",
                    failedTo: "タイムゾーンを更新できませんでした。"
                },
                update: {
                    successfully: "タイムゾーンが正常に更新されました。",
                    failed: "タイムゾーンを設定できませんでした。"
                },
                delete: {
                    successfully: "タイムゾーンが正常に削除されました。",
                    failed: "タイムゾーンの削除に失敗しました。"
                },
                auth: {
                    failed: "認証に失敗しました。",
                    success: "認証が成功しました!"
                }
            },
            toolbox: {
                set: "データベースのタイムゾーンを設定する",
                refresh: "データベースのタイムゾーンを更新する"
            },
            option: {
                showOwnTimezone: {
                    label: "タイムゾーンを表示する",
                    description: "プロフィールとメッセージスレッドにタイムゾーンを表示します"
                },
                twentyFourHourTime: {
                    label: "24 時間形式",
                    description: "24時間形式での上映時間"
                },
                showTimezoneInfo: {
                    label: "タイムゾーン情報を表示する",
                    description: "時計に加えてタイムゾーン情報を表示する"
                },
                showMessageHeaderTime: {
                    label: "メッセージタイトルの表示時間",
                    description: "メッセージスレッドの表示時間"
                },
                showProfileTime: {
                    label: "プロファイル時間を表示する",
                    description: "ユーザープロフィールに時間を表示する"
                },
                useDatabase: {
                    label: "データベースのタイムゾーンを使用する",
                    description: "データベースを使用してユーザーのタイムゾーンを取得する"
                },
                preferDatabaseOverLocal: {
                    label: "ローカルよりデータベースを優先する",
                    description: "タイムゾーンを超えてローカル ストレージよりデータベースを優先する"
                },
                databaseUrl: {
                    label: "データベースのURL",
                    description: "タイムゾーンデータベースサーバーのURL"
                },
                setDatabaseTimezone: {
                    label: "データベースのタイムゾーンを設定する",
                    description: "データベースにタイムゾーンを設定する",
                    setTimezone: "データベースにタイムゾーンを設定する"
                },
                resetDatabaseTimezone: {
                    label: "データベースのタイムゾーンをリセットする",
                    description: "データベースのタイムゾーンをリセットする",
                    failed: "データベースのタイムゾーンをリセットできませんでした"
                },
                askedTimezone: {
                    label: "タイムゾーンを尋ねる",
                    description: "ユーザーにタイムゾーンの入力を求めるプロンプトが表示されるかどうかを示します"
                }
            },
            modal: {
                title: "タイムゾーン",
                select: "タイムゾーンの選択",
                selectPlaceholder: "タイムゾーンを選択してください",
                delete: "タイムゾーンの削除",
                save: "保存"
            }
        },
        toastNotifications: {
            name: "トースト通知",
            description: "ダイレクトメッセージを受信したときにトースト通知を表示します。",
            notification: {
                call: "あなたと一緒に検索を始めました！",
                recipient: {
                    add: "{{target}} は {{actor}} によってグループに追加されました。",
                    remove: "{{target}} は {{actor}} によってグループから削除されました。",
                    left: "彼はグループを去りました。"
                },
                channel: {
                    change: {
                        name: "チャンネル名が {{name}} に変更されました。",
                        icon: "チャンネルアイコンが変更されました。"
                    },
                    pinned: "メッセージを固定しました。"
                },
                sent: {
                    embed: "彼は埋め込みを送信しました。",
                    sticker: "彼はステッカーを送りました。",
                    attachment: "ファイル："
                },
                redacted: "メッセージの内容は非表示になりました。",
                friend: {
                    accept: "{{user}} があなたの友達になりました",
                    acceptBody: "これで、彼にダイレクト メッセージを送信できるようになりました。",
                    request: "{{user}} さんがあなたに友達リクエストを送信しました。",
                    requestBody: "[友達] タブからこれを承認または拒否できます。"
                },
                example: {
                    title: "サンプル通知",
                    body: "これは通知文のサンプルです。"
                }
            },
            modal: {
                dismiss: "通知を閉じる",
                attachments: "{{attachments}} ファイルが送信されました。"
            },
            option: {
                position: {
                    label: "女性",
                    description: "トースト通知の場所",
                    topRight: "右上",
                    topLeft: "左上",
                    bottomRight: "右下",
                    bottomLeft: "ソル・アルト"
                },
                timeout: {
                    label: "閉店時間",
                    description: "通知を表示する秒数"
                },
                opacity: {
                    label: "不透明度",
                    description: "トースト通知の不透明度"
                },
                determineServerNotifications: {
                    label: "サーバー通知を設定する",
                    description: "サーバー通知設定に基づいて通知を表示するかどうかを決定します"
                },
                directMessages: {
                    label: "ダイレクトメッセージ",
                    description: "ダイレクトメッセージの通知を表示する"
                },
                groupMessages: {
                    label: "グループメッセージ",
                    description: "グループメッセージの通知を表示する"
                },
                friendServerNotifications: {
                    label: "フレンドとサーバーの通知",
                    description: "友達がパブリックサーバーにメッセージを送信したときに通知を表示する"
                },
                friendActivity: {
                    label: "フレンドイベント",
                    description: "友達の追加または友達リクエストの受信に関する通知を表示する"
                },
                notifyFor: {
                    label: "通知を受信するチャネル",
                    description: "通知を受信するチャネル ID を入力します (カンマで区切ります)。"
                },
                ignoreUsers: {
                    label: "無視するユーザー",
                    description: "通知を無視するユーザー ID を入力します (カンマで区切ります)。"
                },
                exampleButton: {
                    label: "サンプルボタン",
                    description: "トースト通知の例を示します。",
                    show: "サンプル通知を表示"
                }
            }
        },
        toggleVideoBind: {
            name: "ビデオバインドの切り替え",
            description: "ウェブカメラをオンまたはオフにするカスタマイズ可能なホットキーを追加します。",
            option: {
                keyBind: {
                    label: "ホットキー",
                    description: "押すとウェブカメラのオンとオフを切り替えるボタン。"
                },
                reqCtrl: {
                    label: "Ctrl ゲレクリ",
                    description: "Ctrl キーを強制的に押します。"
                },
                reqShift: {
                    label: "シフト必須",
                    description: "Shift キーを強制的に押します。"
                },
                reqAlt: {
                    label: "サブ必須",
                    description: "Alt キーを強制的に押します。"
                }
            }
        },
        translate: {
            name: "翻訳する",
            description: "Google 翻訳または DeepL でメッセージを翻訳する",
            tooltip: {
                label: "変換する"
            },
            context: {
                translate: "変換する",
                open: "翻訳ウィンドウを開く",
                auto: "自動翻訳が有効になっています"
            },
            option: {
                receivedInput: {
                    label: "受信した入力",
                    description: "受信したメッセージが翻訳される言語"
                },
                receivedOutput: {
                    label: "受信出力",
                    description: "受信したメッセージは何語に翻訳されますか?"
                },
                sentInput: {
                    label: "提出された入力",
                    description: "あなた自身のメッセージが翻訳される言語"
                },
                sentOutput: {
                    label: "送信された出力",
                    description: "自分のメッセージがどの言語に翻訳されるか"
                },
                service: {
                    label: "翻訳サービス",
                    description: "DeepL Pro には有料の API キーが必要です",
                    descriptionWeb: "翻訳サービス (Web ではサポートされていません!)",
                    google: "Google翻訳",
                    deepl: "DeepL 無料",
                    deeplPro: "DeepL プロ"
                },
                deeplApiKey: {
                    label: "DeepL APIキー",
                    description: "DeepL APIキー",
                    placeholder: "https://deepl.com/your-account で API キーを取得します。"
                },
                autoTranslate: {
                    label: "自動翻訳",
                    description: "メッセージを送信する前に自動的に翻訳します。 翻訳ボタンをシフトまたは右クリックして、この機能をオンまたはオフにすることもできます。"
                },
                showAutoTranslateTooltip: {
                    label: "自動翻訳の説明を表示",
                    description: "メッセージが自動翻訳されるときにチャットバーボタンに説明を表示します"
                }
            },
            modal: {
                title: "翻訳",
                select: "言語を選択してください",
                auto: "自動翻訳",
                dismiss: "四半期",
                translated: "{{から}} から翻訳",
                failed: {
                    to: "{{text}} の翻訳に失敗しました",
                    connect: "DeepL API 接続に失敗しました:"
                },
                wrong: "何か問題が発生しました。 問題が解決しない場合は、コンソールを確認するか、サポート サーバーに支援を求めてください。",
                deepl: {
                    api: "DeepL API クォータを超過しました。 Google翻訳に切り替えます。",
                    apiKey: "DeepL APIキーが設定されていません。 Google に戻ります。",
                    auth: "DeepL API キーまたはバージョンが無効です"
                },
                autoTranslateEnabled: {
                    title: "Plexcord 自動翻訳が有効になっています",
                    body: "自動翻訳を有効にしました。 送信するすべてのメッセージは、送信前に自動的に翻訳されます。",
                    confirm: "自動翻訳を無効にする",
                    cancel: "わかりました",
                    secondaryConfirm: "二度と見せないでください"
                }
            }
        },
        typingIndicator: {
            name: "タイピングインジケーター",
            description: "誰かがチャンネルに入力しているときにインジケーターを追加します。",
            option: {
                includeCurrentChannel: {
                    label: "現在のチャンネルを含める",
                    description: "現在選択されているチャンネルの入力インジケーターを表示するかどうか"
                },
                includeMutedChannels: {
                    label: "ミュートされたチャンネルを含める",
                    description: "ミュートされたチャンネルの入力インジケーターを表示するかどうか。"
                },
                includeIgnoredUsers: {
                    label: "無視されたユーザーを含める",
                    description: "無視されたユーザーに対して入力インジケーターを表示するかどうか。"
                },
                includeBlockedUsers: {
                    label: "ブロックされたユーザーを含める",
                    description: "ブロックされたユーザーに入力インジケーターを表示するかどうか。"
                },
                indicatorMode: {
                    label: "表示モード",
                    description: "インジケーターを表示するにはどうすればよいですか?",
                    both: "アバターとアニメーションドット",
                    dots: "アニメーション化されたドット",
                    avatars: "アバター"
                }
            }
        },
        typingTweaks: {
            name: "タイピングの調整",
            description: "入力インジケーターにアバターと役割の色を表示します",
            option: {
                showAvatars: {
                    label: "複数のユーザーを表示",
                    description: "入力インジケーターにアバターを表示"
                },
                showRoleColors: {
                    label: "役割の色を表示",
                    description: "入力インジケーターに役割の色を表示する"
                },
                alternativeFormatting: {
                    label: "代替フォーマット",
                    description: "複数の人が入力しているときに、より有用なメッセージを表示する"
                },
                amITyping: {
                    label: "私は書いていますか?",
                    description: "あなたが書いたものを他の人が見たかどうかを示します"
                }
            },
            others: {
                areTyping: "さらに {{count}} 人が書いています..."
            }
        },
        unindent: {
            name: "インデントを解除する",
            description: "コードブロックの先頭のインデントを削除します"
        },
        unitConverter: {
            name: "単位コンバータ",
            description: "メートル単位をインペリアル単位に、またはその逆に変換します",
            tooltip: "単位の変換",
            option: {
                myUnits: {
                    label: "私のユニット",
                    description: "使用し、変換したい単位。 デフォルト: インペリアル",
                    imperial: "帝国",
                    metric: "メトリック"
                }
            },
            button: {
                dismiss: "四半期"
            }
        },
        unlimitedAccounts: {
            name: "無制限のアカウント",
            description: "追加できるアカウントの数が増えます。",
            option: {
                maxAccounts: {
                    label: "最大アカウント数",
                    description: "追加できるアカウントの数。無制限の場合は 0 を入力します"
                }
            }
        },
        unlockedAvatarZoom: {
            name: "ロック解除アバターズーム",
            description: "アバターを変更するときに、画像トリミングツールでさらにズームインできるようになります",
            option: {
                zoomMultiplier: {
                    label: "ズーム倍率",
                    description: "ズーム倍率"
                }
            }
        },
        unsuppressEmbeds: {
            name: "埋め込みの抑制を解除する",
            description: "メッセージ内の埋め込みコンテンツの抑制を解除できます。",
            context: {
                unsuppress: "埋め込み抑制を解除する",
                suppress: "印刷の埋め込み"
            }
        },
        uselessInfo: {
            name: "役に立たない情報",
            description: "Discord内で役に立たない情報をランダムに表示します。 ショートカットや間隔設定が可能です。",
            recording: "録音中...",
            record: "保存",
            option: {
                delay: {
                    label: "通知間隔",
                    description: "通知表示間隔（分）"
                },
                historyHotkey: {
                    label: "履歴パネルのショートカット",
                    description: "以前に表示された情報の履歴を開くホットキー"
                },
                randomFactHotkey: {
                    label: "ランダム情報のショートカット",
                    description: "ランダムな情報パネルを開くホットキー"
                },
                sameFact: {
                    label: "同じ情報の繰り返しを避ける",
                    description: "すべての情報を表示せずに、同じ情報が複数回表示されることを防ぎます。"
                },
                lastNFacts: {
                    label: "繰り返さない最新情報",
                    description: "再表示すべきではない最後の情報の数 (0 = 常に)"
                }
            },
            modal: {
                title: "役に立たない情報",
                history: {
                    none: "まだ情報はありません。 ショートカットを使用するか、お待ちください。",
                    source: "ソース"
                },
                showRandom: "ランダムに表示",
                close: "四半期"
            },
            notification: {
                title: "知っていましたか？"
            }
        },
        userMessagesPronouns: {
            name: "ユーザーメッセージ代名詞",
            description: "メッセージヘッダーにユーザー代名詞を表示します",
            option: {
                pronounsFormat: {
                    label: "代名詞の形式",
                    description: "チャットでの代名詞の表示方法",
                    lowercase: "小文字",
                    capitalized: "最初の大文字"
                },
                showSelf: {
                    label: "自分自身を見せてください",
                    description: "独自の代名詞の表示のオンとオフを切り替えます"
                }
            }
        },
        userVoiceShow: {
            name: "ユーザーボイスショー",
            description: "ユーザーが音声チャネルに接続しているときにインジケーターを表示します",
            option: {
                showInUserProfileModal: {
                    label: "ユーザープロフィールに表示",
                    description: "ユーザープロフィールの名前の横に音声チャンネルインジケーターを表示する"
                },
                showInMemberList: {
                    label: "メンバーリストに表示",
                    description: "メンバーとDMリストにボイスチャンネルインジケーターを表示"
                },
                showInMessages: {
                    label: "メッセージに表示",
                    description: "メッセージに音声チャンネルインジケーターを表示する"
                }
            },
            modal: {
                inVoiceChat: "ボイスチャット中"
            },
            notification: {
                cannotJoin: "ユーザーの音声チャンネルに参加できません。"
            }
        },
        uSRBG: {
            name: "USRBG",
            description: "USRBG からユーザー バナーを表示するため、Nitro なしで誰でもバナーを使用できます",
            option: {
                nitroFirst: {
                    label: "ニトロファースト",
                    description: "Nitro バナーと USRBG バナーの両方が存在する場合、どちらを使用するかを決定します",
                    nitro: "ニトロバナー",
                    usrbg: "USRBG バナー"
                },
                voiceBackground: {
                    label: "オーディオの背景",
                    description: "USRBG バナーをボイスチャットの背景として使用する"
                }
            },
            button: "独自の USRBG バナーを入手"
        },
        validReply: {
            name: "有効な返信",
            description: "返信にカーソルを合わせると「メッセージの読み込みに失敗しました」エラーが修正されました"
        },
        validUser: {
            name: "有効なユーザー",
            description: "不明なユーザーに対して「@unknown-user」として表示されるメンションを修正します (修正するにはメンションの上にカーソルを置きます)",
            badges: {
                discordBugHunter: "Discord バグハンター",
                moderatorProgramsAlumni: "モデレータープログラム卒業生",
                discordStaff: "ディスコードスタッフ",
                hypeSquadEvents: "ハイプスクワッドイベント",
                bravery: "HypeSquad チェザレ",
                brilliance: "HypeSquad の明るさ",
                balance: "HypeSquad デンジ",
                partneredServerOwner: "共同サーバー所有者",
                nitro: "ディスコードニトロ",
                earlySupporter: "アーリーサポーター",
                earlyVerifiedBotDeveloper: "初期の認証済みボット開発者"
            }
        },
        voiceChatDoubleClick: {
            name: "ボイスチャットダブルクリック",
            description: "シングルクリックではなくダブルクリックしてボイスチャットに参加できるようになります"
        },
        vcNarrator: {
            name: "VCナレーター",
            description: "ユーザーが音声チャンネルに参加、脱退、または移動するとナレーターによってアナウンスされます",
            option: {
                voice: {
                    label: "セス"
                },
                volume: {
                    label: "騒音レベル",
                    description: "ナレーターの声レベル"
                },
                rate: {
                    label: "スピード",
                    description: "ナレーターの話す速度"
                },
                sayOwnName: {
                    label: "あなたの名前を言ってください",
                    description: "ナレーターがあなたの名前を言うかどうか"
                },
                latinOnly: {
                    label: "ラテン語のみ",
                    description: "読む前に名前に含まれる非ラテン文字を消去してください"
                },
                joinMessage: {
                    label: "参加メッセージ",
                    description: "参加メッセージ"
                },
                leaveMessage: {
                    label: "別れのメッセージ",
                    description: "メッセージを残す"
                },
                moveMessage: {
                    label: "感動的なメッセージ",
                    description: "感動的なメッセージ"
                },
                muteMessage: {
                    label: "メッセージをミュートする",
                    description: "メッセージをミュートします (今のところ自分だけ)"
                },
                unmuteMessage: {
                    label: "メッセージのミュートを解除する",
                    description: "メッセージのミュートを解除します (今のところ自分だけ)"
                },
                deafenMessage: {
                    label: "耳をつんざくようなメッセージ",
                    description: "耳をつんざくようなメッセージ (今は自分だけ)"
                },
                undeafenMessage: {
                    label: "耳をつんざくようなメッセージ",
                    description: "耳をつんざくようなメッセージ (今は自分だけ)"
                }
            },
            modal: {
                title: "サンプルサウンドを再生する",
                voiceTitle: "セス",
                voice: "サウンドを選択してください",
                languageTitle: "ディル",
                language: "言語を選択してください",
                noVoice: "ナレーターの音声が見つかりません。",
                linuxNote: "speech-dispatcher または espeak をインストールし、--enable-speech-dispatcher パラメーターを指定して Discord を実行します",
                someNarrator: "オペレーティング システムのナレーター設定から音声をインストールしてみてください",
                dontHaveEnglish: "英語の音声をアップロードしていないため、ナレーターが奇妙に聞こえる可能性があります",
                customiseMessages: "以下の音声メッセージをカスタマイズできます。 空白のままにすると、特定のメッセージを無効にすることができます",
                placeholdersInfo: "カスタム プレースホルダー {{USER}}、{{DISPLAY_NAME}}、{{NICKNAME}}、および {{CHANNEL}} は、それぞれユーザー名 (自分の場合は空白)、表示名、サーバー上のニックネーム、およびチャンネル名に置き換えられます。"
            }
        },
        viewIcons: {
            name: "ビューアイコン",
            description: "ユーザープロフィール内のアバター画像とバナー画像をクリック可能にします。 ユーザー、サーバー、およびグループ チャネルのコンテキスト メニューにアバター/バナーの表示オプションを追加します。",
            context: {
                view: {
                    avatar: "アバターを見る",
                    serverAvatar: "サーバーアバターの表示",
                    icon: "表示アイコン",
                    banner: "バナーを見る"
                }
            },
            option: {
                format: {
                    label: "形式",
                    description: "動きのない画像に使用する画像形式を選択します。 アニメーション画像は常に .gif 形式を使用します"
                },
                imgSize: {
                    label: "画像サイズ",
                    description: "使用する画像サイズ"
                }
            }
        },
        viewRaw: {
            name: "生で見る",
            description: "メッセージ、チャネル、サーバーの生のコンテンツ/データをコピーして表示する",
            context: {
                copyLeft: "Raw データのコピー (左クリック) / Raw データの表示 (右クリック)",
                copyRight: "Raw データのコピー (右クリック) / Raw データの表示 (左クリック)",
                view: "生データを表示する"
            },
            option: {
                popoverButton: {
                    label: "ポップアップメニューボタン",
                    description: "メッセージの生のコンテンツ/データを表示するためのボタンをメッセージ ポップオーバーに表示します。"
                },
                clickMethod: {
                    label: "クリック方法",
                    description: "メッセージの生のコンテンツ/データを表示するために使用するクリック方法を変更します。",
                    left: "左クリックして生のコンテンツを表示します。",
                    right: "右クリックして生のコンテンツを表示します。"
                }
            },
            modal: {
                title: "ハム・ヴェリ",
                content: "コンテンツ",
                data: "{{タイプ}} ベリ",
                copied: "{{type}} データがクリップボードにコピーされました!",
                copy: "{{type}} JSON をコピー",
                copiedContent: "コンテンツがクリップボードにコピーされました!",
                copyContent: "未加工のコンテンツをコピーする"
            },
            types: {
                message: "メッセージ",
                channel: "チャネル",
                guild: "プレゼンター",
                role: "役割",
                user: "ユーザー"
            }
        },
        voiceButtons: {
            name: "音声ボタン",
            description: "音声通話パネルからユーザーをすばやく DM、ミュート、または聴覚障害者にします。",
            option: {
                showChatButton: {
                    label: "チャットボタンを表示",
                    description: "チャットボタンを表示するかどうか"
                },
                showMuteButton: {
                    label: "ミュートボタンを表示",
                    description: "ミュートボタンを表示するかどうか"
                },
                showDeafenButton: {
                    label: "聴覚障害者ボタンを表示",
                    description: "聴覚障害者ボタンを表示するかどうか"
                },
                muteSoundboard: {
                    label: "サウンドボードウ・セサイズ・アル",
                    description: "耳をつんざくボタンをクリックすると、ユーザーのサウンドボードがオンまたはオフになります。"
                },
                disableVideo: {
                    label: "ビデオを無効にする",
                    description: "耳をつんざくボタンをクリックすると、ユーザーのビデオがオンまたはオフになります。"
                },
                useServer: {
                    label: "サーバーを使用する",
                    description: "許可がある場合は、ローカルの代わりにサーバーのミュート/聴覚障害を使用します。"
                },
                serverSelf: {
                    label: "サーバー上で自分自身をミュートする",
                    description: "ミュート/聴覚障害者は、使用するとサーバー上で自分自身をミュートまたは聴覚障害者にします。"
                },
                showButtonsSelf: {
                    label: "自分用にボタンを表示する",
                    description: "自分のユーザーにボタンを表示するかどうか。 同じ機能があります。 DM パネルが開き、自分自身をミュート/耳を聞こえなくします。",
                    display: "見せる",
                    hide: "隠れる",
                    disable: "無効"
                },
                whichNameToShow: {
                    label: "どの名前を表示する必要がありますか?",
                    description: "ツールチップにユーザー名、グローバル名、またはその両方を表示しますか?",
                    global: "グローバル名",
                    username: "ユーザー名",
                    both: "両方"
                },
                buttonPosition: {
                    label: "ボタンの位置",
                    description: "ボタンを表示する場所を選択します。",
                    left: "ソル",
                    right: "右",
                }
            },
            tooltip: {
                navigate: "DMに移動",
                open: "{{username}} で DM を開きます",
                yourself: "あなた自身",
                serverMute: "サーバーでミュート",
                serverDeafen: "サーバーの聴覚障害者",
                mute: "ミュート",
                deafen: "耳が聞こえない",
                unmute: "ミュートを解除する",
                undeafen: "耳をつんざく状態から取り除く",
                serverUnmute: "サーバーでミュートを解除する",
                serverUndeafen: "サーバー上の耳障りな音を削除する"
            }
        },
        voiceChannelLog: {
            name: "ボイスチャネルログ",
            description: "オーディオチャンネルに誰が参加、誰が脱退したかを記録します",
            context: {
                view: "チャンネルログの表示"
            },
            modal: {
                joined: "<#{{channel}}> チャンネルに参加しました",
                left: "左チャンネル <#{{channel}}>",
                movedTo: "<#{{channel}}> チャンネルに移動しました",
                movedFrom: "<#{{channel}}> から移動しました",
                noLogs: "表示するログはありません。",
                logs: "{{チャンネル}} ログ"
            },
            option: {
                mode: {
                    label: "モジュール",
                    description: "オーディオチャンネルログを表示する方法",
                    menu: "ログメニュー",
                    associated: "関連するチャット チャネルに直接ログインします。",
                    both: "チャット チャネルとログ メニューの両方にログインします。"
                },
                voiceChannelChatSelf: {
                    label: "ボイス チャネル チャット (自分自身)",
                    description: "自分の音声チャネルのアクティビティを音声チャネルに記録します"
                },
                voiceChannelChatSilent: {
                    label: "無音ボイスチャンネルチャット",
                    description: "ボイス チャネル チャットでは参加/退席/移動メッセージがミュートされます"
                },
                voiceChannelChatSilentSelf: {
                    label: "無音ボイスチャンネルチャット（自分）",
                    description: "音声チャネルを使用している場合、メッセージへの参加/脱退/移動は無音になります"
                },
                ignoreBlockedUsers: {
                    label: "ブロックされたユーザーを無視する",
                    description: "ブロックしたユーザーのログ記録"
                }
            }
        },
        voiceChatUtilities: {
            name: "ボイスチャットユーティリティ",
            description: "このプラグインを使用すると、チャンネル全体で複数のアクション (移動、ミュート、切断など) を実行できます (オリジナルは dutake による)",
            option: {
                waitAfter: {
                    label: "アクション後に待機する",
                    description: "待機する前に行われる API トランザクションの数 (レート制限を回避するため)"
                },
                waitSeconds: {
                    label: "待ち時間",
                    description: "各操作間の待機時間 (秒単位)"
                }
            },
            context: {
                voiceTools: "オーディオツール",
                mentionAll: "すべてのユーザーにタグを付ける",
                disconnectAll: "全員の接続を解除する",
                muteAll: "全員をミュート",
                unmuteAll: "全員のミュートを解除する",
                deafenAll: "聴覚障害者全員",
                undeafenAll: "全員の耳をつんざくことなく出て行け",
                moveAll: "みんなを動かす"
            }
        },
        voiceDownload: {
            name: "音声ダウンロード",
            description: "音声メッセージにダウンロード オプションを追加します。 (新しいブラウザタブが開きます)",
            context: {
                download: "ボイスメールをダウンロードする"
            }
        },
        voiceMessages: {
            name: "ボイスメッセージ",
            description: "携帯電話と同じように音声メッセージを送信できます。 これを行うには、アップロード ボタンを右クリックし、[ボイス メッセージの送信] を選択します。",
            option: {
                noiseSuppression: {
                    label: "ノイズキャンセリング",
                    description: "ノイズキャンセリング"
                },
                echoCancellation: {
                    label: "エコーキャンセル",
                    description: "エコーキャンセル"
                }
            },
            notification: {
                failed: {
                    upload: "ボイスメールを読み込めませんでした。",
                    start: "記録の開始に失敗しました。",
                    finish: "登録を完了できませんでした。"
                }
            },
            context: {
                sendVoiceMessage: "音声メッセージを送信する",
                missingPermissions: "(許可がありません)"
            },
            modal: {
                record: "音声メッセージを録音する",
                upload: "ファイルをアップロードする",
                preview: "プレビュー",
                failed: "選択した音声ファイルを解析できませんでした:",
                oggOpus: "iOS で再生するには、音声メッセージは OggOpus 形式である必要があります。 このファイルは {{type}} 形式であるため、iOS では再生できません。",
                fix: "これを修正するには、まずファイルを OggOpus 形式に変換します。 たとえば、{{link}} を使用できます。",
                sending: "ボイスメールを送信中...お待ちください。",
                stop: "録音を停止する",
                start: "録音を開始する",
                resume: "登録を再開する",
                pause: "録音を一時停止する",
                recording: "登録中です",
                send: "送信"
            }
        },
        volumeBooster: {
            name: "ボリュームブースター",
            description: "ユーザーおよびブロードキャストの音量をデフォルトの最大値を超えて増やすことができます",
            option: {
                multiplier: {
                    label: "乗数",
                    description: "サウンドマルチプライヤー"
                }
            }
        },
        wallpaperFree: {
            name: "壁紙無料",
            description: "古い DM 壁紙実験のリメイク。 任意のチャネル、ユーザー、またはサーバーの背景画像を設定します。",
            option: {
                globalDefault: {
                    label: "一般的なデフォルト",
                    description: "すべてのチャンネルにグローバルなデフォルトの壁紙を設定します。"
                },
                stylingTips: {
                    label: "スタイルのヒント"
                }
            },
            context: {
                setWallpaper: "壁紙を設定する",
                removeWallpaper: "壁紙を削除する"
            },
            modal: {
                set: "壁紙を設定する",
                image: "画像URL",
                cancel: "キャンセル",
                apply: "適用する",
                global: {
                    set: "公開壁紙を設定する",
                    remove: "グローバルのデフォルト壁紙を削除する",
                    reset: "壁紙データをリセットする"
                },
                web: {
                    info: "ローカル ファイルを使用するには、ローカル ファイルを plexcord テーマ ディレクトリに置き、URL plexcord:///themes/filename.ext を使用します。",
                    open: "テーマディレクトリを開く",
                    quickCSS: "QuickCSSを開く"
                }
            }
        },
        webContextMenus: {
            name: "Webコンテキストメニュー",
            description: "Web バージョンの Discord にはないバック コンテキスト メニューを追加します: リンクと画像 (リンク/画像をコピーまたは開く)、テキスト領域 (コピー、切り取り、貼り付け、スペル チェック)",
            option: {
                addBack: {
                    label: "戻るを追加",
                    description: "画像、リンク、チャットエントリバーの Discord コンテキストメニューを追加し直す"
                }
            }
        },
        webKeybinds: {
            name: "Webキーバインド",
            description: "Web バージョンの Discord にはないホットキーを追加します: ctrl+t、ctrl+shift+t、ctrl+tab、ctrl+shift+tab、ctrl+1-9、ctrl+、。 文字通り、Plextron/Legcord 上でのみ動作し、ブラウザ内では動作しません。"
        },
        webScreenShareFixes: {
            name: "WebScreenShareの修正",
            description: "Chromium および Plextron クライアントの 2500 kbps 画面共有ビットレート制限を削除します。",
            option: {
                experimentalAV1Support: {
                    label: "実験的な AV1 サポート",
                    description: "AV1 コーデックのサポートを有効にします。 無限の読み込みストリームは次のような問題を引き起こす可能性があります。"
                }
            }
        },
        whoReacted: {
            name: "誰が反応したのか",
            description: "メッセージに反応するユーザーのアバターを表示します",
            option: {
                avatarClick: {
                    label: "アバタークリック",
                    description: "リアクションにおけるアバターのクリック可能性を切り替えます"
                }
            }
        },
        whosWatching: {
            name: "誰が見てる",
            description: "画面共有アイコンの上にマウスを置くと、ブロードキャストを視聴しているユーザーが表示されます",
            modal: {
                noSpectator: "無観客"
            },
            option: {
                showPanel: {
                    label: "パネルを表示",
                    description: "画面共有パネルの下に視聴者を表示する"
                }
            }
        },
        writeUpperCase: {
            name: "大文字で書く",
            description: "メッセージエントリの各文の最初の文字を大文字に変換します。",
            option: {
                blockedWords: {
                    label: "ブロックされた単語",
                    description: "大文字で始めるべきではない式 (カンマで区切る)"
                }
            }
        },
        xSOverlay: {
            name: "XSオーバーレイ",
            description: "Discord 通知を XSOverlay にプッシュして VR で簡単に表示できるようにします",
            notification: {
                call: {
                    title: "{{user}} があなたを探しています。",
                    content: "着信"
                },
                message: {
                    reply: "（応答）",
                    embed: "[埋め込む]",
                    onlyEmbed: "送信されたメッセージの埋め込み",
                    sticker: "[ステッカー]",
                    onlySticker: "ステッカーを送りました",
                    image: "写真",
                    attachment: "私"
                },
                test: {
                    title: "プレックスコードでダイブ！",
                    content: "テストのお知らせです！ 爆発する",
                    button: "テスト通知を送信する"
                }
            },
            option: {
                webSocketPort: {
                    label: "WebSocketポート",
                    description: "WebSocketポート"
                },
                preferUDP: {
                    label: "UDP テルシエ",
                    description: "古いバージョンの XSOverlay を使用していて WebSocket 経由で接続できない場合は、WebSocket を有効にしてください。 この設定は Web では無視されます。"
                },
                botNotifications: {
                    label: "ボット通知",
                    description: "ボット通知を許可する"
                },
                serverNotifications: {
                    label: "サーバー通知",
                    description: "サーバー通知を許可する"
                },
                dmNotifications: {
                    label: "DM通知",
                    description: "プライベートメッセージ通知を許可する"
                },
                groupDmNotifications: {
                    label: "グループDM通知",
                    description: "グループDM通知を許可する"
                },
                callNotifications: {
                    label: "通話通知",
                    description: "通話通知を許可する"
                },
                pingColor: {
                    label: "平仁儀",
                    description: "ユーザータグの色"
                },
                channelPingColor: {
                    label: "カラーピングチャンネル",
                    description: "チャンネルのラベルの色"
                },
                soundPath: {
                    label: "サウンドパス",
                    description: "通知音（デフォルト/警告/エラー）"
                },
                timeout: {
                    label: "タイムアウト",
                    description: "通知期間 (秒)"
                },
                lengthBasedTimeout: {
                    label: "メッセージ長ベースの継続時間",
                    description: "メッセージの長さに応じて継続時間を延長する"
                },
                opacity: {
                    label: "不透明度",
                    description: "通知の不透明度"
                },
                volume: {
                    label: "セス",
                    description: "騒音レベル"
                }
            }
        },
        youtubeAdblock: {
            name: "YouTube広告ブロック",
            description: "YouTube の埋め込み広告と WatchTogether アクティビティを AdGuard でブロックします"
        },
        youtubeDescription: {
            name: "YouTube説明",
            description: "YouTube ビデオの埋め込みに説明を追加します"
        }
    }
} as const;

export default translations;
