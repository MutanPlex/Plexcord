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
                label: "言語",
                description: "Plexcord の優先言語を選択します。",
                placeholder: "言語の選択"
            }
        },
        location: {
            label: "設定場所",
            description: "Plexcord設定セクションを配置する場所",
            top: "一番上にある",
            nitro: {
                above: "ニトロセクションの上",
                below: "ニトロセクションの下"
            },
            activity: {
                above: "上記のアクティビティ設定",
                below: "アクティビティ設定の下"
            },
            bottom: "一番下に"
        },
        switches: {
            useQuickCss: {
                label: "カスタムCSSを有効にする",
                description: "QuickCSS エディターからカスタム CSS を読み込みます。これにより、Discord の外観を独自のスタイルでカスタマイズできます。"
            },
            enableReactDevtools: {
                label: "React 開発者ツールを有効にする",
                description: "Discord の React コンポーネントをデバッグするために React Developer Tools 拡張機能を有効にします。プラグイン開発に役立ちます。"
            },
            mainWindowFrameless: {
                label: "メインウィンドウフレームを無効にする",
                description: "ネイティブのウィンドウフレームを取り外して、すっきりとした外観にします。タイトル バー領域をドラッグすることでウィンドウを移動できます。"
            },
            frameless: {
                label: "ウィンドウフレームを無効にする",
                description: "ネイティブのウィンドウフレームを取り外して、すっきりとした外観にします。タイトル バー領域をドラッグすることでウィンドウを移動できます。"
            },
            winNativeTitleBar: {
                label: "Discordのカスタムタイトルバーの代わりにWindowsのネイティブタイトルバーを使用する",
                description: "Discord のカスタム タイトル バーを標準の Windows タイトル バーに置き換えます。これにより、一部のウィンドウ管理ツールとの互換性が向上する可能性があります。"
            },
            transparent: {
                label: "ウィンドウの透明性を有効にする",
                description: "Discordのウィンドウを透明にします。透明性をサポートするテーマが必要です。そうでない場合は何も行われません。",
                isWindows: "これにより、ウィンドウのサイズ変更ができなくなり、ウィンドウを画面の端にスナップできなくなります。",
                notWindows: "これにより、ウィンドウのサイズ変更ができなくなります。"
            },
            winCtrlQ: {
                label: "Ctrl+QをDiscordを閉じるショートカットとして登録（Alt+F4の代替）",
                description: "Discordを閉じるためのキーボードショートカットとしてCtrl+Qを追加します。これにより、アプリケーションをすばやく閉じるための Alt+F4 の代替手段が提供されます。"
            },
            disableMinSize: {
                label: "最小ウィンドウ サイズを無効にする",
                description: "Discord ウィンドウのサイズをデフォルトの最小サイズよりも小さくできるようにします。ウィンドウ マネージャーや小さな画面を並べて表示する場合に便利です。"
            }
        },
        quickActions: {
            title: "クイックアクション",
            description: "実行する必要がある一般的なアクション。これらのショートカットを使用すると、メニューを移動することなく、頻繁に使用する機能にすばやくアクセスできます。",
            notificationLog: "通知ログ",
            editQuickCSS: "QuickCSSを編集する",
            relaunchDiscord: "Discordを再起動する",
            openSettingsFolder: "設定フォルダーを開く",
            viewSourceCode: "ソースコードを表示"
        },
        specialCards: {
            donations: {
                title: "寄付",
                subtitle: "寄付していただきありがとうございます!",
                description: "@mutanplex にメッセージを送信することで、いつでも特典を管理できます。",
                button: "寄付する",
                invite: "Discordに参加してください",
                invalid: "招待リンクが無効または期限切れです。"
            },
            supportProject: {
                title: "プロジェクトを支援する",
                description: "寄付による Plexcord の開発のサポートをご検討ください。"
            },
            contributions: {
                title: "貢献",
                subtitle: "ご協力いただきありがとうございます!",
                description: "Plexcord に貢献したので、クールな新しいバッジが手に入りました。",
                buttonTitle: "あなたが貢献したものを見る"
            }
        },
        settingsSection: {
            title: "設定",
            description: "Plexcord がどのように動作し、Discord と統合するかを構成します。これらの設定は、Discord クライアントの外観と動作に影響します。",
            hintParts: {
                prefix: "{{pluginLink}} を構成することで、Discord の設定メニュー内でこの設定セクションが表示される場所をカスタマイズできます。",
                linkText: "設定プラグイン"
            }
        },
        notifications: {
            title: "通知",
            description: "Plexcord が通知を処理する方法を構成します。アラートをいつどのように受信するかをカスタマイズしたり、過去の通知の履歴を表示したりできます。",
            settings: "通知設定",
            viewLog: "通知ログの表示",
            permissions: {
                denied: {
                    title: "デスクトップ通知の許可が拒否されました",
                    label: "通知のアクセス許可を拒否しました。デスクトップ通知は機能しません。"
                }
            },
            style: {
                label: "通知スタイル",
                description: "一部のプラグインでは通知が表示される場合があります。これらには 2 つのスタイルがあります。",
                plexcord: "プレックスコードの通知",
                plexcordDesc: "これらはアプリ内通知です",
                desktop: "デスクトップ通知",
                desktopDesc: "ネイティブ デスクトップ通知 (ping を受信したときなど)",
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
                    top: "右上",
                },
                left: {
                    bottom: "左下",
                    top: "左上",
                }
            },
            missed: {
                label: "見逃した通知の数",
                description: "Discordに再度フォーカスすると、見逃した数を示す通知がポップアップ表示されます",
                whileYou: "あなたがいない間に",
                count: "{{count}} 通知{{s}} を受け取りました",
                s: "s"
            },
            timeout: {
                label: "通知タイムアウト",
                description: "通知が自動的に消えるまで画面に表示される時間 (秒単位)"
            },
            logLimit: {
                label: "通知ログの制限",
                description: "古い通知が削除されるまでにログに保持する通知の最大数。通知ログを無効にするには {{disable}} に設定し、古い通知を自動的に削除しないようにするには {{unlimited}} に設定します。"
            },
            opacity: {
                label: "通知の不透明度",
                description: "アプリ内通知の不透明度"
            },
            maxNotifications: {
                label: "最大通知数",
                description: "一度に表示される通知の最大数"
            },
            behavior: {
                label: "通知の動作",
            },
            disableInStreamerMode: {
                label: "ストリーマーモードで無効にする",
                description: "ストリーマーモード中に通知を無効にする"
            },
            renderImages: {
                label: "レンダリング画像",
                description: "通知に画像をレンダリングする"
            },
            streamingTreatment: {
                label: "ストリーミング処理",
                description: "画面共有中に通知を処理する方法",
                normal: "通常 - 通知を通常どおり表示します",
                noContent: "コンテンツなし - 通知本文を非表示にします",
                ignore: "無視 - 通知をまったく表示しません"
            },
        },
        macVibrancy: {
            title: "ウィンドウの鮮やかさのスタイル (再起動が必要)",
            description: "macOS ウィンドウの鮮やかさ効果をカスタマイズします。これは、Discord ウィンドウのぼかしと透明度のスタイルを制御します。変更を有効にするには再起動が必要です。",
            placeholder: "窓の活気に満ちたスタイル",
            style: {
                no: "活気がない",
                underPage: "ページ下 (ウィンドウの色合い)",
                content: "コンテンツ",
                window: "ウィンドウ",
                selection: "選択",
                titlebar: "タイトルバー",
                header: "ヘッダ",
                sidebar: "サイドバー",
                tooltip: "ツールチップ",
                menu: "メニュー",
                popover: "ポップオーバー",
                fullscreenUI: "フルスクリーン UI (透明ですがわずかにぼやけています)",
                hud: "HUD (最も透明度の高い)"
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
            description: "新しいプラグインとその設定を適用するには、今すぐ再起動してください",
            following: "次のプラグインは再起動が必要です。",
            remainingCount: "{{count}} 詳細",
            fully: "一部のプラグインは完全に無効にするために再起動が必要です",
            would: "今すぐ再開しますか?",
            resetDefault: "デフォルト設定にリセットする",
            failed: "依存関係を開始できませんでした:",
            button: {
                restart: "再起動",
                later: "後で！",
                now: "今すぐ再起動してください",
                cancel: "キャンセル",
                disableWarning: "警告を永久に無効にする",
                disableAll: "すべて無効にする",
                reset: "リセット",
                close: "近い"
            }
        },
        contributor: {
            contributed: "貢献した",
            modal: {
                contributionsInfo: "{{userName}} には {{continuedLink}} ～ {{contributionCount}} プラグイン{{s}} があります。",
                noContributions: "{{userName}} はプラグインを作成していません。彼らはおそらく別の方法で{{contributedLink}}するでしょう!"
            }
        },
        infoModal: {
            description: "歯車または情報アイコンを押すと、プラグインに関する詳細情報が表示されます",
            settingsInfo: "歯車付きのプラグインには、変更できる設定があります。",
            disableAll: "すべてのプラグインを無効にする"
        },
        error: {
            invalidInput: "無効な入力が提供されました",
            stopping: "プラグイン {{plugin}} の停止中にエラーが発生しました",
            starting: "プラグイン {{plugin}} の起動中にエラーが発生しました",
            startDependency: "依存関係の開始中にエラーが発生しました: {{failures}}",
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
            plextron: "プレクストロンアプリ",
            web: "Plextron アプリと Web バージョンの Discord",
            dev: "Plexcordの開発者版"
        },
        search: {
            looking: "探していますか",
            onlyAvailable: "でのみ利用可能",
            noCriteria: "検索条件を満たすプラグインはありません。"
        },
        required: {
            title: "必要なプラグイン",
            this: "このプラグインは、Plexcord が機能するために必要です。",
            by: "このプラグインは次の場合に必要です。"
        },
        dangerModal: {
            title: "危険な行為",
            disablePlugins: "プラグインを無効にする",
            disableText: "すべて無効にする",
            irreversible: "この行為は取り消しできません。",
            enableBack: "続行してもよろしいですか?後でいつでも有効に戻すことができます。",
            undone: "この操作は元に戻すことができません。本気ですか？",
            resetDescription: "{{pluginName}} のすべての設定をデフォルト値にリセットしようとしています。",
            disable: "{{enabledPlugins}} プラグインを無効にしようとしています。",
            confirmReset: "リセットの確認",
            cancel: "キャンセル",
            resetSettings: "設定をリセットする",
            resetText: "リセット"
        },
        filters: {
            label: "フィルター",
            placeholder: "プラグインを検索...",
            option: {
                all: "すべて表示",
                enabled: "有効表示",
                disabled: "無効を表示",
                new: "新規表示",
                userplugins: "ユーザープラグインを表示",
                api: "APIプラグインを表示"
            }
        },
        pluginModal: {
            noSettings: "このプラグインには設定はありません。",
            authors: "著者",
            settings: "設定",
            successfulReset: "{{plugin}} の設定がリセットされました。",
            enabledStock: "有効なストックプラグイン",
            totalStock: "合計ストックプラグイン",
            enabledUser: "有効なユーザープラグイン",
            totalUser: "総ユーザープラグイン数",
            info: "さらに詳しい情報を見る",
            source: "ソースコードを表示する"
        },
        metadata: {
            api: {
                description: {
                    memberListDecorators: "デコレーターをメンバーリストに追加するための API (サーバーと DM の両方)",
                    messageAccessories: "メッセージにアクセサリーを追加するための API",
                    messageDecorations: "メッセージに装飾を追加するための API",
                    chatInputButtons: "チャット入力にボタンを追加する API",
                    commands: "コマンドを使用するものに必要な API",
                    contextMenu: "コンテキスト メニューに項目を追加したり、コンテキスト メニューから項目を削除したりするための API。",
                    dynamicImageModal: "画像モーダルを開くときに幅または高さのいずれかを省略できるようにします",
                    menuItemDemangler: "Demangles Discord のメニュー項目モジュール",
                    messageEvents: "メッセージイベントを使用するものに必要な API",
                    messagePopover: "メッセージポップオーバーにボタンを追加するAPI",
                    messageUpdater: "メッセージを更新および再レンダリングするための API",
                    nicknameIcons: "プロフィール内のニックネームにアイコンを追加する API",
                    notices: "通知が自動的に無視される問題を修正",
                    serverList: "サーバーリストを変更するプラグインに必要な API",
                    userSettings: "Discord の UserSettings にパッチを適用して、グループと名前を公開します。",
                    audioPlayer: "内部 Discord オーディオ ファイルまたは外部オーディオ リンクを再生するための API。",
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
                    plexcord: "Plexcord の貢献者",
                    vencord: "Vencord の貢献者",
                    userPlugin: "ユーザープラグインの貢献者"
                },
                context: {
                    title: "バッジのオプション",
                    copy: {
                        name: "Copy Badge Name",
                        link: "バッジ画像リンクをコピー"
                    },
                    refetch: {
                        button: "バッジの再取得",
                        success: "バッジが正常に再取得されました!"
                    }
                },
                modal: {
                    title: "プレックスコードドナー",
                    special: "このバッジは、Plexcord 寄付者向けの特別な特典です",
                    description: "ドナーとなって Plexcord の開発をサポートすることをご検討ください。それは大きな意味があるでしょう！"
                }
            },
        },
        uiElements: {
            manage: "UI要素の管理",
            allows: "気に入らないボタンを非表示にできます",
            section: {
                chatbar: {
                    title: "チャットバーのボタン",
                    description: "これらはチャット入力バーの右側にあるボタンです"
                },
                messagePopover: {
                    title: "メッセージポップオーバーボタン",
                    description: "これらは、メッセージの上にマウスを置くと右側に表示されるフローティング ボタンです。"
                }
            },
            button: "有効なプラグインのボタンがここに表示されます。"
        }
    },

    patchHelper: {
        title: "パッチヘルパー",
        description: "Plexcord プラグインのパッチの作成を支援する開発者ツール。",
        fullPatch: {
            label: "フルパッチ",
            description: "完全な JSON パッチをここに貼り付けてフィールドに記入します"
        },
        find: "探す",
        match: "マッチ",
        replacement: "交換",
        preview: "プレビュー",
        generatedCode: "生成されたコード",
        group: "グループ",
        diff: "差分",
        module: "モジュール",
        compile: "コンパイル",
        compiled: "コンパイルに成功しました",
        copy: {
            clipboard: "クリップボードにコピー",
            codeblock: "コードブロックとしてコピー"
        },
        error: {
            noMatch: "一致するものが見つかりませんでした。このモジュールは遅延ロードされている可能性がありますか?",
            multipleMatch: "複数の一致が見つかりました。より具体的な検索パターンを使用してください。",
            noFind: "「検索」フィールドがありません。",
            noReplacement: "「置換」フィールドがありません。",
            invalidReplacement: "「置換」フィールドが無効です",
            replacementMatch: "「replacement.match」フィールドがありません",
            replacementReplace: "「replacement.replace」フィールドがありません",
            replacementMustFunction: "「置換」は関数である必要があります"
        },
        cheatSheet: {
            title: "チートシート",
            identifiers: "識別子 (変数名、クラス名など) に一致する特別な正規表現エスケープ シーケンス",
            dollar: "$を挿入",
            entireMatch: "一致部分全体を挿入します",
            beforeMatch: "一致の前に部分文字列を挿入します",
            afterMatch: "一致の後に部分文字列を挿入します",
            nthGroup: "n 番目のキャプチャ グループ ($1、$2...) を挿入します。",
            pluginInstance: "プラグインインスタンスを挿入する"
        },
        replacementEval: {
            label: "置換を関数として扱う",
            description: "これが有効な場合、「置換」は関数として評価されます。"
        }
    },

    sync: {
        title: "バックアップと復元",
        warning: "警告",
        warningText: "設定ファイルをインポートすると、現在の設定が上書きされます。現在の構成を保持したい場合は、必ず最初にバックアップをエクスポートしてください。",
        description: "Plexcord 設定を JSON ファイルとしてインポートおよびエクスポートできます。これにより、設定を別のデバイスに簡単に転送したり、Plexcord または Discord を再インストールした後に設定を復元したりすることができます。",
        successful: "設定が正常にインポートされました。変更を適用するには再起動してください。",
        error: {
            failure: "設定のインポートに失敗しました: {{error}}",
            failedExport: "設定のエクスポートに失敗しました。コンソールを確認してください",
            invalid: "無効な設定です。これは Plexcord 設定ファイルですか?",
            tooLarge: "データストアが大きすぎます - バックアップから除外されました。必要に応じて「データストアのエクスポート」を使用します。",
            clearSomeDate: "データストアが大きすぎます。プラグイン データをいくつか削除して、もう一度試してください。"
        },
        settings: {
            text: "バックアップには何が含まれますか?",
            quickcss: "カスタムQuickCSS",
            theme: "テーマリンク",
            plugins: "プラグイン設定",
            datastores: "プラグイン データストア (タイム ゾーンや IRememberYou など)"
        },
        import: {
            title: "インポート設定",
            description: "以前にエクスポートした設定ファイルを選択して、構成を復元します。これにより、現在の設定がすべてバックアップの設定に置き換えられます。",
            all: "すべての設定をインポート",
            plugins: "プラグインのインポート",
            css: "QuickCSSをインポートする",
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
        description: "Plexcord の設定をクラウドに同期します。これにより、手動でインポート/エクスポートしなくても、複数のデバイス間で構成の一貫性を簡単に保つことができます。",
        switchDescription: "有効にすると、設定をクラウドとの間で同期できます。手動で同期するには、以下のアクションを使用します。",
        settings: "クラウド設定",
        successful: "設定をクラウドに同期！",
        updated: "設定が更新されました!ここをクリックして再起動し、変更を完全に適用してください。",
        deleted: "設定がクラウドから削除されました!",
        integration: {
            title: "クラウド統合",
            description: "Plexcord のクラウド統合により、複数のデバイスと Discord インストール間で設定を同期できます。データは安全に保管されており、いつでも簡単に復元できます。",
        },
        reauth: "別のクライアントでクラウド統合が有効になっていることがわかりました。制限があるため、引き続き使用するには再認証する必要があります。ここをクリックして設定ページに移動してください。",
        error: {
            setup: "セットアップに失敗しました (OAuth 構成を取得できませんでした)。",
            secret: "セットアップが失敗しました (シークレットが返されません)。",
            string: "セットアップに失敗しました ({{error}})。",
            connect: "このアカウントは Plexcord Cloud App に接続されていないため、クラウド同期は無効になりました。クラウド設定でこのアカウントを接続すると、再度有効にすることができます。 (注: 設定は別に保存されます)",
            noSettings: "クラウドには設定はありません。",
            uptodate: "設定は最新です。",
            localNewer: "ローカル設定はクラウド設定よりも新しいです。",
            delete: "設定を削除できませんでした ({{error}})。",
            api: {
                returned: {
                    delete: "設定を削除できませんでした (API が {{status}} を返しました)。",
                    to: "設定をクラウドに同期できませんでした (API が {{status}} を返しました)。",
                    from: "クラウドから設定を同期できませんでした (API が {{status}} を返しました)。",
                    manifest: "削除用のマニフェストを取得できませんでした（API は {{status}} を返しました）。"
                }
            },
            synchronize: {
                to: "設定をクラウドに同期できませんでした ({{error}})。",
                from: "クラウドから設定を同期できませんでした ({{error}})。"
            }
        },
        warning: {
            enableCloudIntegration: "設定同期機能を使用するには、上記のクラウド統合を有効にします。"
        },
        danger: {
            title: "危険地帯",
            description: "すべてのデータをクラウドから完全に削除します。この操作は元に戻すことができず、すべての同期された設定とクラウド バックエンドに保存されているその他のデータが削除されます。",
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
            enabled: "クラウド統合が有効です",
            host: "{{host}} がホワイトリストに追加されました。変更を有効にするには、アプリを再起動してください。",
            erase: {
                successful: "クラウドデータは正常に消去されました",
                failed: "すべてのデータの消去に失敗しました (API {{status}} が返されました)。サポートにお問い合わせください。"
            }
        },
        button: {
            to: "クラウドに同期する",
            from: "クラウドから同期",
            fromDescription: "これにより、ローカル設定がクラウド上の設定で上書きされます。賢く利用しましょう！",
            delete: "クラウドデータの削除",
            enable: "クラウド統合を有効にする",
            reauthorize: "再認証",
            confirm: "今すぐ再起動してください",
            later: "後で！"
        },
        privacy: "あなたのプライバシーを尊重します",
        source: "ソースコード",
        overview: "Plexcord には、デバイス間で設定を同期するなどの機能を追加するクラウド統合が付属しています。これは {{privacy}}、{{source}} は AGPL 3.0 ライセンスを取得しているため、自分でホストできます。",
        authorization: "設定を同期するためにクラウド バックエンドに接続します。クラウド統合をまだ設定していない場合は、認証が要求されます。",
        backend: {
            title: "クラウドバックエンド",
            description: "設定をクラウドに保存する方法を選択します。デフォルトでは、Plexcord Cloud が使用されますが、独自のセルフホスト型クラウド サービスに接続することもできます。",
            invalid: "無効な URL"
        },
        sync: {
            title: "このデバイスの同期ルール",
            description: "この設定は、このデバイスとクラウドの間で設定を移動する方法を制御します。変更を双方向に流すことも、真実の主な情報源として 1 か所を選択することもできます。",
            direction: {
                both: "双方向同期 (変更は双方向に行われます)",
                push: "このデバイスはソースです (アップロードのみ)",
                pull: "クラウドがソース (ダウンロードのみ)",
                manual: "自動的に同期しません (下のボタンを使用した手動同期のみ)"
            }
        }
    },

    changelog: {
        text: "変更ログ",
        title: "変更ログ",
        description: "Plexcord の最新の変更と更新はここで見つけることができます。",
        by: "による",
        check: "リポジトリのチェック",
        uptodate: "最新の",
        update: "アップデート",
        noMessage: "メッセージなし",
        unknown: "未知",
        updatedPlugins: "更新されたプラグイン",
        newSettings: "新しい設定",
        newSettingTooltip: "{{plugin}} の新しい設定",
        loading: "読み込み中...",
        repoUptodate: "リポジトリは最新です",
        fetch: "リポジトリからフェッチ",
        clear: "すべてのログをクリア",
        internet: "インターネットに接続していることを確認して、もう一度試してください。",
        recent: "最近の変更点",
        codeChanges: "コードの変更 {{count}} 新しいコミット{{s}}",
        updateLogs: "ログの更新 ({{count}})",
        noCommit: "現在のバージョンより前に利用できるコミットはありません。 「リポジトリから取得」をクリックして新しい変更を確認します。",
        previous: "以前の更新セッションとそのコミット履歴およびプラグインの変更。",
        modal: {
            description: "Plexcord に対する最新の変更を表示します。これにより、リポジトリから直接コミットが取得され、最新情報が表示されます。",
            repository: "リポジトリ",
            failed: "取得に失敗しました - コンソールを確認してください",
            current: "現在：",
            hide: "ログを非表示にする",
            show: "ログを表示する",
            fetch: {
                title: "変更のフェッチ",
                description: "リポジトリに新しいコミット、プラグインの更新、コードの変更がないか確認してください。これにより、現在のバージョンと利用可能な最新バージョンが比較され、新機能が表示されます。",
                newCommit: "これらは、最後のバージョン以降の新しいコミットとプラグインの更新です。どの機能が追加されたか、バグが修正されたか、どのプラグインが更新を受け取ったかを確認できます。",
                confirm: "フェッチ",
            }
        },
        commit: {
            available: "利用可能なコミット",
            no: "新しいコミットはありません",
            new: "新しいプラグイン",
            updated: "更新されたプラグイン",
            settings: "新しい設定"
        },
        toast: {
            already: "リポジトリはすでに最新のものです",
            found: "リポジトリから {{count}} 新しい commit{{s}} が見つかりました",
            local: "リポジトリはローカル コピーで最新です",
            failed: "リポジトリからの取得に失敗しました:(",
            cleared: "すべてのログがクリアされました",
            logCleared: "ログがクリアされました",
            yourLatest: "最新のアップデートからログに記録されたコミット"
        },
        alert: {
            clear: {
                title: "すべてのログをクリア",
                body: "すべてのログをクリアしてもよろしいですか?これを元に戻すことはできません。",
                confirm: "すべてクリア",
                confirmColor: "危険",
                cancel: "キャンセル"
            },
            log: {
                title: "ログをクリアする",
                body: "このログを消去してもよろしいですか?これを元に戻すことはできません。",
                confirm: "ログをクリアする",
                confirmColor: "危険",
                cancel: "キャンセル"
            }
        },
        newPlugins: "{{count}} 新しいプラグイン{{s}}",
        following: "最近のアップデートで次のプラグインが追加されました。",
        more: "+{{count}} その他のプラグイン"
    },

    csp: {
        restart: "この変更を適用するには再起動が必要です",
        blocked: {
            resources: "ブロックされたリソース",
            disallowed: "一部の画像、スタイル、フォントは、許可されていないドメインからのものであるためブロックされました。",
            recommended: "GitHub または Imgur に移動することを強くお勧めします。ただし、ドメインを完全に信頼している場合は、ドメインを許可することもできます。",
            afterAllow: "ドメインを許可した後、(トレイ/タスク マネージャーから) 完全に閉じ、{{platform}} を再起動して変更を適用する必要があります。",
            allow: "許可する",
            url: "ブロックされた URL"
        },
        imgur: {
            direct: "Imgur リンクは、{{etc}} 形式の直接リンクである必要があります。",
            copy: "直接リンクを取得するには、画像を右クリックして「画像アドレスをコピー」を選択します。"
        },
        wants: {
            caller: "{{callerName}} は {{domain}} への接続を許可したいと考えています",
            detail: "{{domain}} を認識し、完全に信頼していない場合は、このリクエストをキャンセルする必要があります。",
            restart: "変更を有効にするには、{{appName}} を完全に閉じて再起動する必要があります。",
            type: {
                images: "画像",
                styles: "CSS とテーマ",
                fonts: "フォント"
            },
            content: "次のタイプのコンテンツは {{domain}} からロードできます。",
            understand: "私は {{domain}} を完全に信頼しており、接続を許可するリスクを理解しています。",
            button: {
                cancel: "キャンセル",
                allow: "許可する"
            },
            title: "ホストの権限"
        }
    },

    themes: {
        title: "テーマ",
        management: "テーマ管理",
        description: "テーマを使用して Discord の外観をカスタマイズします。ローカルの .css ファイルを追加するか、URL からテーマを直接読み込みます。歯車アイコンが付いたテーマには、変更できるカスタマイズ可能な設定があります。",
        local: "ローカルテーマ",
        new: "新しい",
        pinned: "固定された",
        stylus: "スタイラスエクステンション",
        bd: "より良いDiscordテーマ",
        github: "GitHub",
        download: "テーマをお探しですか? {{bd}} をチェックするか、{{github}} で検索してください。 BetterDiscord からダウンロードする場合は、「ダウンロード」をクリックして、.theme.css ファイルをテーマフォルダーに配置します。",
        add: "追加",
        reset: "設定をデフォルトにリセットする",
        notCSS: "CSSファイルではありません。生のリンクを使用することを忘れないでください。",
        okay: "わかった！",
        checking: "チェック中...",
        valid: "有効！",
        upload: "テーマをアップロードする",
        openFolder: "テーマフォルダーを開く",
        loadMissing: "不足しているテーマをロードする",
        editQuickCSS: "QuickCSSを編集する",
        editClient: "クライアントテーマの編集",
        website: "ウェブサイトを開く",
        discord: "ディスコードサーバー",
        downloadTheme: "ダウンロード",
        refresh: "リフレッシュ",
        delete: "消去",
        unknown: {
            title: "未知",
            author: "作者不明",
            theme: "不協和音のテーマ"
        },
        required: "次のプラグインは必須ですが、有効になっていません:",
        homepage: "ホームページ",
        support: "サポート",
        online: {
            title: "オンラインテーマ",
            description: "テーマをローカル ファイルではなく URL から直接読み込みます。オンライン テーマはソースが変更されると自動更新されるため、手動でダウンロードしなくても常に最新バージョンを入手できます。",
            enable: "オンラインテーマを有効にする",
            enableDescription: "オンラインテーマの読み込みを切り替えます。無効にすると、すべてのオンライン テーマがオフになり、新しいテーマを追加できなくなります。"
        },
        quickActions: {
            title: "クイックアクション",
            description: "テーマを管理するためのショートカット。テーマ フォルダーを開いて新しいテーマを追加したり、QuickCSS を使用してスタイルを簡単に調整したり、変更後にテーマをリロードしたりできます。"
        },
        error: {
            userscript: "テーマはユーザースクリプトではサポートされていません。",
            stylus: "代わりに、{{stylus}}! を使用してテーマをインストールできます。",
            expired: "リンクが無効または期限切れです",
            text: "エラー："
        },
        copy: {
            url: "URLをコピー",
            copied: "テーマの URL をコピーしました!",
            settings: "テーマ設定をコピーする",
            copiedSettings: "テーマ設定をクリップボードにコピーしました。"
        },
        paste: {
            settings: "テーマ設定を貼り付ける",
            empty: "クリップボードが空です。",
            invalid: "クリップボードに有効な設定データがありません。",
            pasted: "クリップボードからテーマ設定を貼り付けました。"
        },
        settings: {
            for: "{{themeName}} の設定",
        },
        installed: {
            title: "インストールされているテーマ",
            description: "ここでテーマを管理します。ローカル テーマはテーマ フォルダーからロードされ、オンライン テーマは URL からロードされます。歯車アイコンが付いたテーマにはカスタマイズ可能な設定があります。",
            count: "{{count}} テーマ{{s}} がインストールされています ({{localCount}} ローカル、{{onlineCount}} オンライン) · {{enabledCount}} が有効です",
            search: "テーマを検索...",
            loading: "テーマを読み込んでいます...",
            none: "まだテーマがインストールされていません。開始するには、テーマ ファイルをテーマ フォルダーに追加するか、上にオンライン テーマを追加します。",
            noCriteria: "検索条件またはフィルター条件に一致するテーマはありません。"
        },
        filter: {
            all: "すべて表示",
            online: "オンラインテーマ",
            local: "ローカルテーマ",
            enabled: "有効",
            disabled: "無効"
        },
        notification: {
            refresh: {
                title: "テーマが更新されました",
                error: "テーマの更新に失敗しました"
            },
            failed: {
                download: "テーマのダウンロードに失敗しました"
            }
        }
    },

    updater: {
        title: "アップデーター",
        settings: "アップデーターの設定",
        updates: "アップデート",
        updated: "更新されました！",
        restart: "再開するにはここをクリックしてください",
        repaired: "プレックスコード修理完了しました！",
        ok: "わかりました",
        preferences: {
            title: "設定を更新する",
            description: "Plexcord 自体を最新の状態に保つ方法を制御します。バックグラウンドで自動的に更新するか、新しい更新が利用可能になったときに通知を受け取るかを選択できます。",
        },
        github: {
            local: "ローカル コピーには、リモート リポジトリよりも新しいコミットがあります。これは通常、ローカルに変更を加えたときに発生します。更新する前に、それらを隠しておくかリセットしてください。"
        },
        error: {
            check: "アップデートの確認に失敗しました。詳細についてはコンソールを確認してください",
            occurred: "不明なエラーが発生しました",
            retrieve: "取得に失敗しました - コンソールを確認してください",
            title: "おっと！",
            tryAgain: "不明なエラーが発生しました。もう一度試すか、コンソールで詳細を確認してください。",
            command: "コマンド {{path}} が見つかりません。インストールしてもう一度お試しください。",
            code: "コード{{code}}。詳細については、コンソールを参照してください。",
            running: "{{cmd}} の実行中にエラーが発生しました: {{error}}",
            failed: "それも失敗しました:( インストーラーを使用して更新または再インストールしてみてください。"
        },
        available: "1件の更新があります",
        updateAvailable: "Plexcord のアップデートが利用可能です。",
        click: "アップデートを表示するにはここをクリックしてください",
        available_plural: "{{count}} アップデートがあります",
        current: "最新の！",
        successful: {
            title: "アップデート成功！",
            body: "正常に更新されました。変更を適用するために今すぐ再起動しますか?",
            button: {
                confirm: "再起動",
                cancel: "今じゃない！",
                update: "今すぐアップデート",
                check: "アップデートをチェックする"
            },
            noFound: "更新が見つかりませんでした"
        },
        automatically: {
            label: "自動更新",
            description: "確認プロンプトを表示せずに Plexcord を自動的に更新する"
        },
        notify: {
            label: "自動更新が完了したら通知を受け取る",
            description: "Plexcord が自動的に更新されるときに通知を表示します"
        },
        repo: "リポ",
        repoDescription: "これは、Plexcord が更新を取得する GitHub リポジトリです。",
        loading: "読み込み中...",
    },

    components: {
        error: {
            title: "なんてこった！",
            render: "このコンポーネントのレンダリング中にエラーが発生しました。詳細については、以下およびコンソールで確認できます。"
        },
        componentFailed: {
            message: "ああ、ああ！このページのレンダリングに失敗しました。ただし、それを修正する可能性のあるアップデートが利用可能です。今すぐ更新して再起動しますか?"
        },
        quickCSS: {
            title: "QuickCSS エディターを開く",
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
            permamently: "これにより、{{count}} 通知{{s}} が完全に削除されます。この操作は元に戻すことができません。",
            button: {
                confirm: "やってみろ！",
                cancel: "どうでも"
            }
        }
    },

    memberlist: {
        error: {
            render: "{{key}} メンバー リスト デコレータのレンダリングに失敗しました"
        }
    },

    message: {
        accessory: {
            error: {
                render: "{{key}} メッセージ アクセサリのレンダリングに失敗しました"
            }
        },
        decoration: {
            error: {
                render: "{{key}} メッセージ装飾のレンダリングに失敗しました"
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
            month: "月",
            months: "月",
            week: "週",
            weeks: "週",
            day: "日",
            days: "日",
            hour: "時間",
            hours: "時間",
            minute: "分",
            minutes: "分",
            second: "2番",
            seconds: "秒",
            ago: "前",
            s: "s"
        }
    },

    plugin: {
        noTrack: {
            name: "NoTrack",
            description: "Discord のトラッキング (分析/「科学」)、メトリクス、Sentry クラッシュ レポートを無効にする",
            option: {
                disableAnalytics: {
                    label: "分析を無効にする",
                    description: "Discord のトラッキング (分析/「科学」)、メトリクス、Sentry クラッシュ レポートを無効にする"
                }
            }
        },
        settings: {
            name: "Settings",
            description: "設定 UI とデバッグ情報を追加",
            option: {
                language: {
                    label: "言語",
                    description: "Plexcord の優先言語を選択します。"
                },
                settingsLocation: {
                    label: "設定場所",
                    description: "Plexcord 設定セクションが配置される場所を決定します。"
                }
            }
        },
        supportHelper: {
            name: "Support Helper",
            description: "お客様へのサポートの提供に役立ちます",
            commands: {
                description: {
                    debug: "Plexcordのデバッグ情報を送信する",
                    plugins: "Plexcord プラグイン リストを送信する"
                }
            },
            modals: {
                outdated: {
                    title: "持続する！",
                    body: "古いバージョンの Plexcord を使用しています。おそらく、問題はすでに解決されています。",
                    footer: "サポートを求める前に、まずアップデートしてください。",
                    button: {
                        cancel: "アップデートを見る",
                        confirm: "今すぐ更新して再起動してください",
                        secondaryConfirm: "自分が何をしているのかわかっている、または更新できない"
                    }
                },
                updater: {
                    title: "持続する！",
                    body: "外部で更新された Plexcord バージョンを使用していますが、当社ではサポートを提供していません。",
                    footer: "{{officially}} に切り替えるか、代わりにパッケージのメンテナにサポートを依頼してください。",
                    officially: "正式にサポートされているバージョンの Plexcord",
                    button: {
                        cancel: "キャンセル",
                        confirm: "ダウンロードページを見る",
                        now: "今すぐアップデート"
                    },
                    toast: {
                        success: "成功！再起動中...",
                        already: "すでに最新です！",
                        failed: "更新に失敗しました:("
                    }
                },
                custom: {
                    title: "持続する！",
                    header: "Plexcord のカスタム ビルドを使用していますが、サポートは提供されていません。",
                    body: "{{officialBuild}} のサポートのみを提供します。 {{switch}} するか、自分で問題を解決してください。",
                    footer: "このルールを無視した場合、サポートを受けることが禁止されます。",
                    official: "公式ビルド",
                    switch: "公式ビルドに切り替える",
                    button: {
                        confirm: "理解した",
                        secondaryConfirm: "二度と表示しないでください"
                    }
                }
            },
            button: {
                debug: "/plexcord-debug を実行します",
                plugins: "/plexcord-plugins を実行します",
                snippet: "スニペットの実行"
            },
            toast: {
                success: "成功！",
                failed: "スニペットの実行に失敗しました:(",
                failedOpenInvite: "招待を開けませんでした。コンソールを確認してください:(",
                upload: "プラグインリストが正常にアップロードされました。",
                failedUpload: "プラグインリストファイルのアップロードに失敗しました。もう一度試してください。",
                unableGenerate: "プラグインリストの生成に失敗しました。"
            },
            dm: {
                warning: "Plexcord プラグイン開発者にサポートを求めるプライベート メッセージを送信しないでください。{{br}}代わりに、{{support}} サーバーに参加して、Plexcord サポート チャネル {{channel}} を使用できます。"
            },
            alert: {
                title: "警告: プラグイン数が多い",
                paragraph1: "100 を超えるプラグインが有効になっています。",
                paragraph2: "プラグインの数が膨大であるため、サポートを受けられない場合があります。",
                paragraph3: "あなたの問題は、プラグインの競合によって引き起こされている可能性があります。",
                paragraph4: "トラブルシューティングのために一部のプラグインを無効にすることを検討してください。",
                paragraph5: "プラグイン リストはテキスト ファイルとして送信されます。",
            }
        },
        accountPanelServerProfile: {
            name: "AccountPanelServerProfile",
            description: "左下のアカウントパネルを右クリックして、現在のサーバーのプロフィールを表示します",
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
            name: "AltKrispSwitch",
            description: "ノイズ抑制ポップアウトを、Krisp と標準ではなく、なしと Krisp の間で切り替えます。"
        },
        alwaysAnimate: {
            name: "AlwaysAnimate",
            description: "アニメーション化できるものはすべてアニメーション化します",
            option: {
                icons: {
                    label: "アイコン",
                    description: "サーバーアイコン、アバター、装飾などを常にアニメーション化します"
                },
                statusEmojis: {
                    label: "ステータス絵文字",
                    description: "ステータス絵文字を常にアニメーション化する"
                },
                serverBanners: {
                    label: "サーバーバナー",
                    description: "サーバーバナーを常にアニメーション化する"
                },
                nameplates: {
                    label: "銘板",
                    description: "ネームプレートを常にアニメーション化する"
                },
                roleGradients: {
                    label: "役割の勾配",
                    description: "ロールのグラデーションを常にアニメーション化する"
                }
            }
        },
        alwaysExpandProfiles: {
            name: "AlwaysExpandProfiles",
            description: "プロファイルのポップアウトを常に完全なモーダルに展開します"
        },
        alwaysExpandRoles: {
            name: "AlwaysExpandRoles",
            description: "プロファイルのポップアウトで常に役割リストを展開します",
            option: {
                hideArrow: {
                    label: "矢印を隠す",
                    description: "矢印を隠す"
                }
            }
        },
        animalese: {
            name: "Animalese",
            description: "メッセージが送信されるたびにどうぶつの森の動物の言葉を再生します (よく吠えます)",
            option: {
                volume: {
                    label: "音量",
                    description: "動物の鳴き声の音量"
                },
                speed: {
                    label: "スピード",
                    description: "動物の鳴き声のスピード"
                },
                pitch: {
                    label: "ピッチ",
                    description: "ピッチマルチプライヤ"
                },
                messageLengthLimit: {
                    label: "メッセージの長さの制限",
                    description: "処理するメッセージの最大長"
                },
                processOwnMessages: {
                    label: "自分のメッセージを処理する",
                    description: "自分のメッセージも yap できるようにする"
                },
                soundQuality: {
                    label: "音質",
                    description: "使用する音質",
                    high: "高い",
                    med: "中くらい",
                    low: "低い",
                    lowest: "最低"
                }
            }
        },
        alwaysTrust: {
            name: "AlwaysTrust",
            description: "迷惑な信頼できないドメインと疑わしいファイルのポップアップを削除します",
            option: {
                domain: {
                    label: "ドメイン",
                    description: "リンクを開いたときに信頼できないドメインのポップアップを削除する"
                },
                file: {
                    label: "ファイル",
                    description: "リンクを開いたときに「危険な可能性があるダウンロード」ポップアップを削除する"
                },
                noDeleteSafety: {
                    label: "削除の安全性はありません",
                    description: "サーバーを削除する際のサーバー名の入力要件を削除します。"
                },
                confirmModal: {
                    label: "モーダルの確認",
                    description: "「削除してもよろしいですか」モーダルを表示する必要がありますか?"
                }
            },
            alert: {
                title: "サーバーを削除しますか?",
                body: "それが明らかでないとしても、それは永続的です。",
                confirm: "消去",
                cancel: "キャンセル"
            }
        },
        anonymiseFileNames: {
            name: "AnonymiseFileNames",
            description: "アップロードされたファイル名を匿名化する",
            option: {
                anonymiseByDefault: {
                    label: "デフォルトで匿名化する",
                    description: "デフォルトでファイル名を匿名化します。必要に応じて、アップロード ポップアップでこれを無効にすることができます。"
                },
                spoilerMessages: {
                    label: "ネタバレメッセージ",
                    description: "ネタバレとしてマークされたファイル名を匿名化します。"
                },
                method: {
                    label: "方法",
                    description: "匿名化方法",
                    random: "ランダムなキャラクター",
                    consistent: "一貫性のある",
                    timestamp: "タイムスタンプ"
                },
                randomisedLength: {
                    label: "ランダム化された長さ",
                    description: "ランダムな文字長"
                },
                consistent: {
                    label: "一貫性のある",
                    description: "一貫した匿名化の秘密"
                }
            },
            using: {
                anonymous: "匿名ファイル名の使用",
                spoiler: "通常のファイル名を使用する"
            },
            spoiler: {
                description: "ファイルのスポイラーを切り替えます",
                toggle: "ファイルのスポイラーを切り替えます (デフォルトはオン)",
                enabled: "スポイラー有効！",
                disabled: "スポイラーは無効です！"
            }
        },
        appleMusic: {
            name: "AppleMusicRichPresence",
            description: "Apple Music に Discord のリッチなプレゼンスを！",
            about: "カスタマイズ可能なアクティビティ形式文字列の場合、いくつかの特別な文字列を使用して、アクティビティにトラック データを含めることができます。 {{name}} はトラック名に置き換えられます。 {{artist}} はアーティストの名前に置き換えられます。 {{album}} はアルバム名に置き換えられます。",
            button: {
                listen: "Apple Musicで聴く",
                songLink: "ソングリンクで見る"
            },
            option: {
                activityType: {
                    label: "アクティビティの種類",
                    description: "どのような種類のアクティビティですか",
                    listening: "リスニング",
                    playing: "遊ぶ"
                },
                statusDisplayType: {
                    label: "ステータス表示の種類",
                    description: "メンバーリストに曲名/アーティスト名を表示",
                    off: "Don't show (shows generic listening message)",
                    artist: "アーティスト名を表示",
                    track: "トラック名を表示"
                },
                refreshInterval: {
                    label: "リフレッシュ間隔",
                    description: "アクティビティの更新間隔 (秒)"
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
                    description: "アクティビティ名の形式文字列"
                },
                detailsString: {
                    label: "詳細文字列",
                    description: "アクティビティ詳細の形式文字列"
                },
                stateString: {
                    label: "状態文字列",
                    description: "アクティビティ状態の形式文字列"
                },
                largeImageType: {
                    label: "大画像タイプ",
                    description: "アクティビティアセットの大きな画像タイプ",
                    album: "アルバムアートワーク",
                    artist: "アーティストのアートワーク",
                    disabled: "無効"
                },
                largeTextString: {
                    label: "大きなテキスト文字列",
                    description: "アクティビティアセットの大きなテキスト形式の文字列"
                },
                smallImageType: {
                    label: "小さい画像タイプ",
                    description: "アクティビティアセットの小さい画像タイプ",
                    album: "Apple Musicのロゴ",
                    artist: "アーティストのアートワーク",
                    disabled: "無効"
                },
                smallTextString: {
                    label: "小さなテキスト文字列",
                    description: "アクティビティアセットの小さなテキスト形式の文字列"
                }
            }
        },
        arRpc: {
            name: "WebRichPresence(arRPC)",
            description: "Discord Web で RPC を有効にする arRPC のクライアント プラグイン (実験的)",
            use: {
                title: "arRPCの使い方",
                enable: "{{link}} を使用してサーバーを実行し、プラグインを有効にします。",
                link: "GitHub リポジトリの指示に従ってください"
            },
            toast: {
                connected: "arRPC に接続されています",
                failed: "arRPC への接続に失敗しました。arRPC は実行されていますか?",
                retry: "リトライ"
            }
        },
        atSomeone: {
            name: "AtSomeone",
            description: "@someone を使用すると、誰かをランダムにメンションできます"
        },
        autoDNDWhilePlaying: {
            name: "AutoDndWhilePlaying",
            description: "ゲームの起動時にオンラインステータス (オンライン、アイドル、中断) を自動的に更新します",
            option: {
                statusToSet: {
                    label: "設定するステータス",
                    description: "ゲーム起動時に設定するステータス",
                    online: "オンライン",
                    dnd: "邪魔しないでください",
                    idle: "アイドル状態",
                    invisible: "見えない"
                },
                excludeInvisible: {
                    label: "非表示を除外する",
                    description: "ステータスが非表示に設定されている間、ステータスが自動的に変更されないようにする"
                }
            }
        },
        autoZipper: {
            name: "AutoZipper",
            description: "Discord にアップロードする前に、指定したファイルの種類とフォルダーを自動的に圧縮します",
            option: {
                extensions: {
                    label: "拡張機能",
                    description: "自動圧縮するファイル拡張子のカンマ区切りリスト (例: .psd、.blend、.exe、.dmg)"
                }
            }
        },
        bannersEverywhere: {
            name: "BannersEverywhere",
            description: "メンバーリストにバナーを表示します",
            option: {
                animate: {
                    label: "アニメイト",
                    description: "アニメーションバナー"
                },
                preferNameplate: {
                    label: "ネームプレートを好む",
                    description: "バナーよりネームプレートを好む"
                }
            }
        },
        betterActivities: {
            name: "BetterActivities",
            description: "メンバーリストにアクティビティアイコンを表示し、すべてのアクティビティを表示できるようにします",
            option: {
                memberList: {
                    label: "メンバー一覧",
                    description: "メンバーリストにアクティビティアイコンを表示する"
                },
                iconSize: {
                    label: "アイコンのサイズ",
                    description: "アクティビティアイコンのサイズ"
                },
                specialFirst: {
                    label: "スペシャルファースト",
                    description: "特別なアクティビティを最初に表示します (現在は Spotify と Twitch)"
                },
                renderGifs: {
                    label: "GIFのレンダリング",
                    description: "GIF のレンダリングを許可する"
                },
                removeGameActivityStatus: {
                    label: "「ゲームアクティビティ」ステータスの削除",
                    description: "ゲームアクティビティのアイコンとステータスを削除する"
                },
                userPopout: {
                    label: "ユーザーポップアウト",
                    description: "プロフィールのポップアウト/サイドバーにすべてのアクティビティを表示します"
                },
                hideTooltip: {
                    label: "ツールチップを非表示にする",
                    description: "各地で活動を隠している"
                },
                allActivitiesStyle: {
                    label: "すべてのアクティビティのスタイル",
                    description: "すべてのアクティビティを表示するスタイル",
                    list: "リスト",
                    carousel: "カルーセル",
                    left: "左",
                    right: "右"
                }
            }
        },
        betterAudioPlayer: {
            name: "BetterAudioPlayer",
            description: "スペクトログラフとオシロスコープのビジュアライザをオーディオ添付ファイル プレーヤーに追加します",
            option: {
                oscilloscope: {
                    label: "オシロスコープ",
                    description: "オシロスコープビジュアライザを有効にする"
                },
                spectrograph: {
                    label: "分光器",
                    description: "スペクトログラフビジュアライザーを有効にする"
                },
                oscilloscopeSolidColor: {
                    label: "オシロスコープ ソリッドカラー",
                    description: "オシロスコープにはグラデーションの代わりに単色を使用します"
                },
                oscilloscopeColor: {
                    label: "オシロスコープの色",
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
                    label: "強制的に下に移動",
                    description: "ビジュアライザーをオーディオ コントロールの下に強制的に配置します。"
                }
            },
            toast: {
                invalidColorFormat: "{{settingKey}} のカラー形式が無効です。'R、G、B' または '#RRGGBB' の形式であることを確認してください。"
            }
        },
        betterBanReasons: {
            name: "BetterBanReasons",
            description: "Discord の禁止モーダルで使用するカスタム理由を作成したり、オプションの代わりにデフォルトでテキスト入力を表示したりできます。",
            option: {
                reasons: {
                    label: "理由",
                    description: "独自の理由"
                },
                isTextInputDefault: {
                    label: "テキスト入力はデフォルトですか",
                    description: "デフォルトでは、選択メニューの代わりにテキスト入力が表示されます。 (「その他」オプションをクリックするのと同じです)"
                }
            },
            title: "理由",
            placeholder: "理由",
            add: "別の理由を追加"
        },
        betterBlockedUsers: {
            name: "BetterBlockedUsers",
            description: "ブロックされたユーザーのリストを検索でき、設定で名前を選択できるようになります。",
            placeholder: "ユーザーを検索..."
        },
        betterCommands: {
            name: "BetterCommands",
            description: "さまざまな改善によりコマンド システムを強化します。",
            option: {
                autoFillArguments: {
                    label: "自動入力引数",
                    description: "コマンドに必要な引数だけではなくすべての引数を自動的に入力します"
                },
                allowNewlinesInCommands: {
                    label: "コマンドで改行を許可する",
                    description: "コマンド入力で改行を許可します (CTRL + Shift + Enter)"
                }
            },
            command: {
                refresh: {
                    description: "Discord アプリケーションのコマンドをローカルで更新します",
                    user: "特定のユーザーが更新を試みる",
                    refreshing: "アプリケーション コマンドを更新しています...",
                    refreshed: "コマンドは正常に更新されました。",
                    failed: "コマンドの更新に失敗しました。詳細についてはコンソールを確認してください。"
                }
            }
        },
        betterFolders: {
            name: "BetterFolders",
            description: "サーバーフォルダーを専用のサイドバーに表示し、フォルダー関連の改善を追加します。",
            option: {
                sidebar: {
                    label: "サイドバー",
                    description: "専用サイドバーのフォルダーからサーバーを表示します"
                },
                sidebarAnim: {
                    label: "サイドバーのアニメーション",
                    description: "フォルダーのサイドバーを開くアニメーション"
                },
                closeAllFolders: {
                    label: "すべてのフォルダーを閉じる",
                    description: "フォルダーにないサーバーを選択する場合はすべてのフォルダーを閉じる"
                },
                closeAllHomeButton: {
                    label: "すべて閉じるホームボタン",
                    description: "ホームボタンをクリックしたときにすべてのフォルダーを閉じる"
                },
                closeOthers: {
                    label: "その他を閉じる",
                    description: "フォルダーを開くときに他のフォルダーを閉じる"
                },
                closeServerFolder: {
                    label: "サーバーフォルダーを閉じる",
                    description: "フォルダー内のサーバーを選択する場合はフォルダーを閉じます"
                },
                forceOpen: {
                    label: "強制オープン",
                    description: "フォルダーのサーバーに切り替えるときにフォルダーを強制的に開く"
                },
                keepIcons: {
                    label: "アイコンを維持する",
                    description: "BetterFolders サイドバーで開かれているプラ​​イマリ ギルド バー フォルダーにギルド アイコンを表示し続ける"
                },
                showFolderIcon: {
                    label: "フォルダーアイコンを表示",
                    description: "BetterFolders サイドバーのフォルダー ギルドの上にフォルダー アイコンを表示します",
                    never: "一度もない",
                    always: "いつも",
                    moreThanOne: "複数のフォルダーを展開した場合"
                }
            }
        },
        betterGifAltText: {
            name: "BetterGifAltText",
            description: "GIF の代替テキストを単なる「GIF」から GIF タグ/ファイル名を含むものに変更します"
        },
        betterGifPicker: {
            name: "BetterGifPicker",
            description: "GIF ピッカーがデフォルトでお気に入りのカテゴリを開くようにします",
            option: {
                keepOpen: {
                    label: "開いたままにしておきます",
                    description: "GIF を選択した後も GIF ピッカーを開いたままにします"
                }
            }
        },
        betterInvites: {
            name: "BetterInvites",
            description: "招待の有効期限を確認し、招待者のプロフィールを表示し、名前をクリックして参加する前にサーバーをプレビューします。",
            render: {
                tip: "この招待の有効期限は{{time}}です",
                header: "{{name}} さんが {{server}} に招待しました",
                never: "期限切れではない"
            }
        },
        betterNotesBox: {
            name: "BetterNotesBox",
            description: "メモを非表示にするかスペルチェックを無効にする (設定で構成します!!)",
            option: {
                hide: {
                    label: "メモを非表示にする",
                    description: "ユーザーポップアウトのメモボックスを非表示にする"
                },
                noSpellCheck: {
                    label: "スペルチェックなし",
                    description: "ノートのスペルチェックを無効にする"
                }
            }
        },
        betterPlusReacts: {
            name: "BetterPlusReacts",
            description: ":emoji: の前のプラスの量は、追加するメッセージです"
        },
        betterRoleContext: {
            name: "BetterRoleContext",
            description: "ユーザープロファイルで役割を右クリックしたときに、役割の色のコピー/役割の編集/役割アイコンを表示するオプションを追加します",
            option: {
                roleIconFileFormat: {
                    label: "役割アイコンのファイル形式",
                    description: "役割アイコンを表示するときに使用するファイル形式"
                }
            },
            context: {
                copyColor: "役割の色のコピー",
                editRole: "役割の編集",
                viewIcon: "役割アイコンの表示"
            }
        },
        betterRoleDot: {
            name: "BetterRoleDot",
            description: "RoleDot (アクセシビリティ設定) クリックで役割の色をコピーします。また、RoleDot と色付きの名前の両方を同時に使用することもできます。",
            option: {
                bothStyles: {
                    label: "両方のスタイル",
                    description: "役割のドット名と色付きの名前の両方を表示"
                },
                copyRoleColorInProfilePopout: {
                    label: "プロファイル ポップアウトの役割の色のコピー",
                    description: "プロファイルのポップアウトで役割のドットをクリックして役割の色をコピーできるようにします"
                }
            }
        },
        betterSessions: {
            name: "BetterSessions",
            description: "セッション (デバイス) メニューを強化します。正確なタイムスタンプを表示し、各セッションにカスタム名を付け、新しいセッションに関する通知を受け取ることができます。",
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
                    description: "バックグラウンドで新しいセッションをチェックし、検出された場合は通知を表示します"
                },
                checkInterval: {
                    label: "チェック間隔",
                    description: "バックグラウンドで新しいセッションを確認する頻度 (有効な場合) (分単位)"
                }
            }
        },
        betterSettings: {
            name: "BetterSettings",
            description: "設定メニューを開くエクスペリエンスが向上します",
            option: {
                disableFade: {
                    label: "フェードを無効にする",
                    description: "クロスフェードアニメーションを無効にする"
                },
                organizeMenu: {
                    label: "メニューの整理",
                    description: "設定の歯車コンテキスト メニューをカテゴリに整理します"
                },
                eagerLoad: {
                    label: "熱心なロード",
                    description: "初めてメニューを開いたときの読み込み遅延を解消します。"
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
            name: "BetterUploadButton",
            description: "シングルクリックでアップロード、右クリックでメニューを開く"
        },
        biggerStreamPreview: {
            name: "BiggerStreamPreview",
            description: "このプラグインを使用すると、ストリームのプレビューを拡大できます",
            context: {
                viewPreview: "ストリームのプレビューを表示する"
            }
        },
        blockKeywords: {
            name: "BlockKeywords",
            description: "特定のユーザー定義キーワードを含むメッセージを、メッセージを送信したユーザーがブロックされたかのようにブロックします。",
            option: {
                blockedWords: {
                    label: "ブロックされた単語",
                    description: "ブロックする単語のカンマ区切りリスト"
                },
                useRegex: {
                    label: "正規表現を使用する",
                    description: "メッセージの内容を確認するときに各値を正規表現として使用する (上級)"
                },
                caseSensitive: {
                    label: "大文字と小文字を区別",
                    description: "大文字と小文字を区別した検索を使用するかどうか"
                },
                ignoreBlockedMessages: {
                    label: "ブロックされたメッセージを無視する",
                    description: "(最近の) 新規メッセージバーを完全に無視します"
                }
            }
        },
        blockKrisp: {
            name: "BlockKrisp",
            description: "Krisp のロードを防止する"
        },
        blurNSFW: {
            name: "BlurNSFW",
            description: "NSFW チャンネルの添付ファイルをホバーするまでぼかします",
            option: {
                blurAmount: {
                    label: "ぼかし量",
                    description: "ぼかし量 (ピクセル単位)"
                },
                blurAllChannels: {
                    label: "すべてのチャンネルをぼかす",
                    description: "すべてのチャンネル (NSFW だけでなく) で添付ファイルをぼかします"
                }
            }
        },
        bypassPinPrompt: {
            name: "BypassPinPrompt",
            description: "PIN 機能を使用する場合は、PIN プロンプトをバイパスします。"
        },
        bypassStatus: {
            name: "BypassStatus",
            description: "おやすみモードでも特定のソースから通知を受け取ります。ユーザー/チャネル/ギルドを右クリックして、サイレントモードをバイパスするように設定します。",
            context: {
                remove: "ステータスバイパスの削除",
                add: "ステータスバイパスの追加"
            },
            option: {
                guilds: {
                    label: "ギルド",
                    description: "バイパスするギルド (ギルド内のどこかに ping が送信されると通知されます)",
                    placeholder: "カンマで区切る"
                },
                channels: {
                    label: "チャンネル",
                    description: "バイパスするチャネル (そのチャネルで ping が送信されると通知されます)",
                    placeholder: "カンマで区切る"
                },
                users: {
                    label: "ユーザー",
                    description: "バイパスを許可するユーザー (DM で送信されたすべてのメッセージについて通知される)",
                    placeholder: "カンマで区切る"
                },
                allowOutsideOfDms: {
                    label: "DM 以外を許可する",
                    description: "選択したユーザーが DM 以外のステータスをバイパスできるようにします (チャネル/ギルドのバイパスのように機能しますが、選択したユーザーによって送信されたすべてのメッセージが対象です)"
                },
                notificationSound: {
                    label: "通知音",
                    description: "通知音を鳴らすかどうか"
                },
                respectSilentPings: {
                    label: "サイレント ping を尊重する",
                    description: "サイレント ping を尊重する (@silent / 通知を抑制)"
                },
                statusToUse: {
                    label: "使用ステータス",
                    description: "ホワイトリストに使用するステータス",
                    online: "オンライン",
                    idle: "アイドル状態",
                    dnd: "邪魔しないでください",
                    invisible: "見えない"
                }
            }
        },
        cakeDay: {
            name: "CakeDay",
            description: "ユーザーの誕生日を追跡し、ケーキのアイコンで表示します",
            context: {
                label: "誕生日",
                setBirthday: "誕生日を設定する",
                clearBirthday: "誕生日をクリア",
                current: "現在："
            },
            option: {
                chat: {
                    label: "チャット",
                    description: "チャット内のユーザー名の横にケーキのアイコンを表示する"
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
                    description: "メンバーリストにある"
                }
            },
            toast: {
                success: "誕生日の設定が成功しました！",
                invalid: "誕生日の形式が無効です。 DD/MMのみ受け付けます。",
                cleared: "誕生日も無事クリアしました！"
            },
            notification: {
                title: "🎂 今日は誕生日！",
                body: "今日は{{username}}の誕生日です!"
            },
            modal: {
                title: "{{username}} の誕生日を設定",
                description: "誕生日を DD/MM 形式で入力します (例: 25/12)",
                placeholder: "例えば12/25",
                current: "現在の誕生日:",
                set: "誕生日を設定する",
                cancel: "キャンセル",
                birthday: "私の誕生日です！ 🎂",
                saved: "保存された誕生日",
                savedDesc: "誕生日はまだ保存されていません。ユーザーを右クリックして誕生日を追加します。",
                today: "今日",
                remove: "取り除く",
                loading: "読み込み中...",
                save: "保存",
                edit: "編集"
            }
        },
        callTimer: {
            name: "CallTimer",
            description: "すべての音声通話で通話タイマーを表示します",
            option: {
                format: {
                    label: "形式",
                    description: "コンパクトまたは人間が読める形式",
                    human: "30日23時00分42秒"
                },
                allCallTimers: {
                    label: "すべての通話タイマー",
                    description: "サーバー内のすべてのユーザーの通話タイマーを表示する"
                },
                showWithoutHover: {
                    label: "ホバーなしで表示",
                    description: "ホバーしなくても常にタイマーを表示します"
                },
                showRoleColor: {
                    label: "役割の色を表示",
                    description: "ユーザーのロールカラーで表示 (ShowRoleColor プラグインが有効な場合)"
                },
                trackSelf: {
                    label: "自分自身を追跡する",
                    description: "自分のタイマーも表示します"
                },
                showSeconds: {
                    label: "秒を表示",
                    description: "タイマーの秒数を表示します"
                },
                watchLargeGuilds: {
                    label: "大規模ギルドを監視する",
                    description: "大規模なギルドのユーザーを追跡します。アクティブな音声ユーザーがいる多数の大規模ギルドに所属している場合、これにより遅延が発生する可能性があります。最大 2000 人のアクティブな音声ユーザーでテストしましたが、問題はありませんでした。"
                },
                fixUI: {
                    label: "UIの修正",
                    description: "場合によっては、タイマーがユーザー インターフェイスを破壊する可能性があります。それを修正するには、このオプションを有効にしてください。"
                }
            }
        },
        channelBadges: {
            name: "ChannelBadges",
            description: "タイプに基づいてバッジをチャンネルに追加します",
            badge: {
                private: "このチャンネルはロックされています。",
                nsfw: "このチャンネルは NSFW としてマークされています。",
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
                    description: "音声バッジを表示"
                },
                showCategoryBadge: {
                    label: "カテゴリバッジを表示",
                    description: "カテゴリバッジを表示"
                },
                showDirectoryBadge: {
                    label: "ディレクトリバッジを表示",
                    description: "ディレクトリバッジを表示"
                },
                showAnnouncementThreadBadge: {
                    label: "アナウンススレッドバッジを表示",
                    description: "アナウンススレッドバッジを表示"
                },
                showPublicThreadBadge: {
                    label: "公開スレッドバッジを表示",
                    description: "公開スレッドバッジを表示"
                },
                showPrivateThreadBadge: {
                    label: "プライベートスレッドバッジを表示",
                    description: "プライベートスレッドバッジを表示"
                },
                showStageBadge: {
                    label: "ショーステージバッジ",
                    description: "ショーステージバッジ"
                },
                showAnnouncementBadge: {
                    label: "アナウンスバッジを表示",
                    description: "アナウンスバッジを表示"
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
                    label: "NSFWバッジを表示",
                    description: "NSFWバッジを表示"
                },
                showLockedBadge: {
                    label: "ロックされたバッジを表示",
                    description: "ロックされたバッジを表示"
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
                    label: "ボイスバッジラベル",
                    description: "音声バッジラベル",
                    default: "声"
                },
                categoryBadgeLabel: {
                    label: "カテゴリバッジラベル",
                    description: "カテゴリバッジラベル",
                    default: "カテゴリ"
                },
                announcementBadgeLabel: {
                    label: "アナウンススレッドバッジラベル",
                    description: "お知らせスレッドバッジラベル",
                    default: "ニュース"
                },
                announcementThreadBadgeLabel: {
                    label: "アナウンススレッドバッジラベル",
                    description: "お知らせスレッドバッジラベル",
                    default: "ニューススレッド"
                },
                publicThreadBadgeLabel: {
                    label: "公開スレッドバッジラベル",
                    description: "公開スレッドバッジラベル",
                    default: "糸"
                },
                privateThreadBadgeLabel: {
                    label: "プライベートスレッドバッジラベル",
                    description: "プライベートスレッドバッジラベル",
                    default: "プライベートスレッド"
                },
                stageBadgeLabel: {
                    label: "ステージバッジラベル",
                    description: "ステージバッジラベル",
                    default: "ステージ"
                },
                directoryBadgeLabel: {
                    label: "ディレクトリバッジラベル",
                    description: "ディレクトリバッジラベル",
                    default: "ディレクトリ"
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
                    label: "ロックされたバッジのラベル",
                    description: "ロックされたバッジのラベル",
                    default: "ロックされています"
                },
                rulesBadgeLabel: {
                    label: "ルールバッジラベル",
                    description: "ルールバッジラベル",
                    default: "ルール"
                },
                unknownBadgeLabel: {
                    label: "不明なバッジのラベル",
                    description: "不明なバッジのラベル",
                    default: "未知"
                },
                textBadgeColor: {
                    label: "テキストバッジの色",
                    description: "テキストバッジの色"
                },
                voiceBadgeColor: {
                    label: "ボイスバッジの色",
                    description: "ボイスバッジの色"
                },
                categoryBadgeColor: {
                    label: "カテゴリバッジの色",
                    description: "カテゴリバッジの色"
                },
                announcementBadgeColor: {
                    label: "お知らせスレッドバッジの色",
                    description: "お知らせスレッドバッジの色"
                },
                announcementThreadBadgeColor: {
                    label: "お知らせスレッドバッジの色",
                    description: "お知らせスレッドバッジの色"
                },
                publicThreadBadgeColor: {
                    label: "公開スレッドバッジの色",
                    description: "公開スレッドのバッジの色"
                },
                privateThreadBadgeColor: {
                    label: "プライベートスレッドバッジの色",
                    description: "プライベートスレッドのバッジの色"
                },
                stageBadgeColor: {
                    label: "ステージバッジの色",
                    description: "ステージバッジの色"
                },
                directoryBadgeColor: {
                    label: "ディレクトリバッジの色",
                    description: "ディレクトリバッジの色"
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
                voice: "声",
                category: "カテゴリ",
                announcement: "ニュース",
                announcementThread: "ニューススレッド",
                publicThread: "糸",
                privateThread: "プライベートスレッド",
                stage: "ステージ",
                directory: "ディレクトリ",
                forum: "フォーラム",
                media: "メディア",
                nsfw: "NSFW",
                locked: "ロックされています",
                rules: "ルール",
                unknown: "未知"
            },
            tooltip: {
                locked: "このチャンネルはロックされています。",
                nsfw: "このチャンネルは NSFW としてマークされています。"
            }
        },
        channelTabs: {
            name: "ChannelTabs",
            description: "よくアクセスするチャネルをブラウザのようにタブにグループ化します",
            open: "新しいタブで開く",
            animation: {
                title: "アニメーションコントロール",
                description: "チャンネル タブの特定のアニメーションを有効または無効にします。各オプションは個別に切り替えることができます。",
                placeholder: "有効にするアニメーションを選択してください...",
                tabHover: "タブホバー効果 (リフト + スケール)",
                tabSelection: "選択したタブのリフト アニメーション",
                tabDragDrop: "タブ ドラッグ アンド ドロップ (ゴースト + 並べ替え)",
                tabEnterExit: "タブの開始/終了スライド (作成 + 閉じる)",
                tabIconPop: "選択範囲にアイコンをポップ (アイコンの拡大)",
                closeRotation: "閉じるボタンの回転",
                plusPulse: "プラスボタンパルス",
                mentionGlow: "メンションバッジのグロー",
                compactExpand: "コンパクトモードの拡張",
                selectedBorder: "選択したタブの青い枠線",
                selectedBackground: "選択したタブの背景色",
                tabShadows: "タブの影の効果",
                tabRepositioning: "タブの位置変更 (スムーズな位置変更)",
                resizeHandle: "サイズ変更ハンドルフェード",
                questActivate: "アクティブクエストグラデーション"
            },
            bookmark: {
                label: "ブックマーク",
                unknown: "不明なユーザー",
                folder: "フォルダ",
                add: "ブックマークに追加",
                edit: "ブックマークの編集",
                delete: "ブックマークの削除",
                remove: "ブックマークから削除",
                removeFolder: "フォルダーからブックマークを削除",
                loading: "ブックマークを読み込んでいます...",
                noBookmarks: "ブックマークはありません。開いているタブを追加したり、右クリックしてこれを非表示にしたりできます",
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
                delete: "消去",
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
                noLogin: "ログインしているアカウントがありませんか?"
            },
            modal: {
                add: {
                    title: "ブックマークをフォルダに追加",
                    select: "フォルダーを選択してください",
                    create: "作成する"
                },
                edit: {
                    title: "ブックマークの編集",
                    name: "Bookmark Name",
                    folder: "フォルダーの色"
                },
                delete: {
                    title: "本気ですか？",
                    description: "ブックマーク フォルダを削除すると、そのフォルダ内のブックマークもすべて削除されます。"
                }
            },
            option: {
                onStartup: {
                    label: "起動時",
                    description: "起動時のタブをどうするか",
                    nothing: "何もしない（友達タブで開く）",
                    remember: "前回のセッションのタブを記憶する",
                    open: "特定のタブのセットで開く"
                },
                tabSet: {
                    label: "タブセット"
                },
                noPomeloNames: {
                    label: "ポメロの名前はありません",
                    description: "DM にはユーザー名の代わりに表示名を使用する"
                },
                showStatusIndicators: {
                    label: "ステータスインジケーターの表示",
                    description: "DM のステータス インジケーターを表示する"
                },
                showBookmarkBar: {
                    label: "ブックマークバーを表示"
                },
                bookmarkNotificationDot: {
                    label: "ブックマーク通知ドット",
                    description: "ブックマークの通知ドットを表示する"
                },
                widerTabsAndBookmarks: {
                    label: "幅の広いタブとブックマーク",
                    description: "大きなモニター用にタブとブックマークの長さを延長します。"
                },
                tabWidthScale: {
                    label: "タブ幅スケール",
                    description: "タブ幅スケール (パーセンテージ) - タブの端をドラッグして調整可能"
                },
                renderAllTabs: {
                    label: "すべてのタブをレンダリングする",
                    description: "切り替えを高速化するためにすべてのタブをメモリにキャッシュしたままにします (スクロール位置と状態をキャッシュします)。"
                },
                switchToExistingTab: {
                    label: "既存のタブに切り替える",
                    description: "移動先のチャンネルにタブがすでに存在する場合は、タブに切り替えます"
                },
                createNewTabIfNotExists: {
                    label: "タブが存在しない場合は新しいタブを作成",
                    description: "移動先のチャンネルに新しいタブが存在しない場合は、新しいタブを作成します"
                },
                enableRapidNavigation: {
                    label: "高速ナビゲーションを有効にする",
                    description: "迅速なナビゲーション動作を有効にする - チャネル間を迅速に移動すると、新しいタブを作成するのではなく、現在のタブが置き換えられます。"
                },
                rapidNavigationThreshold: {
                    label: "高速ナビゲーションのしきい値",
                    description: "迅速なナビゲーションのための時間枠 (ミリ秒単位)。この期間内では、新しいチャネルが作成されるのではなく、新しいチャネルが現在のタブを置き換えます。"
                },
                tabBarPosition: {
                    label: "タブバーの位置",
                    description: "タブバーの位置",
                    top: "トップ",
                    bottom: "底"
                },
                enableNumberKeySwitching: {
                    label: "数字キー切り替えを有効にする",
                    description: "数字キー (1 ～ 9) を有効にしてタブを切り替えます"
                },
                numberKeySwitchCount: {
                    label: "数字キースイッチの数",
                    description: "数字キー (1 ～ 9) でアクセスできるタブの数"
                },
                enableCloseTabShortcut: {
                    label: "タブを閉じるショートカットを有効にする",
                    description: "タブを閉じるキーボード ショートカットを有効にする"
                },
                enableNewTabShortcut: {
                    label: "新しいタブのショートカットを有効にする",
                    description: "新しいタブのキーボード ショートカットを有効にする"
                },
                enableTabCycleShortcut: {
                    label: "タブサイクルショートカットを有効にする",
                    description: "タブ循環キーボード ショートカットを有効にする"
                },
                keybindsSection: {
                    label: "キーバインド",
                    description: "ボタンをクリックして、希望のキーの組み合わせを押します。 CTRL、SHIFT、ALT などの修飾子がサポートされています。",
                    title: "キーボードショートカット",
                    reset: "すべてをデフォルトにリセット",
                    closeTab: {
                        label: "タブを閉じる",
                        description: "現在アクティブなタブをキーボードで操作する"
                    },
                    newTab: {
                        label: "新しいタブ",
                        description: "現在のチャンネルで新しいタブを開きます"
                    },
                    cycleTabsForward: {
                        label: "タブを前に循環",
                        description: "次のタブに切り替えます (最初のタブに戻ります)"
                    },
                    cycleTabsBackward: {
                        label: "タブを後方に循環",
                        description: "前のタブに切り替えます (最後に戻ります)"
                    }
                },
                closeTabKeybind: {
                    label: "タブを閉じるキーバインド",
                    description: "現在のタブを閉じるキーボード ショートカット"
                },
                newTabKeybind: {
                    label: "新しいタブのキーバインド",
                    description: "新しいタブを開くためのキーボード ショートカット"
                },
                cycleTabForwardKeybind: {
                    label: "サイクルタブの進むキーバインド",
                    description: "次のタブに切り替えるキーボード ショートカット"
                },
                cycleTabBackwardKeybind: {
                    label: "サイクルタブの後方キーバインド",
                    description: "前のタブに戻るキーボード ショートカット"
                },
                showTabNumbers: {
                    label: "タブ番号を表示",
                    description: "キーボード ショートカットを示すためにタブに番号付きバッジを表示します"
                },
                tabNumberPosition: {
                    label: "タブ番号の位置",
                    description: "タブ上の番号付きバッジを表示する場所",
                    left: "左側（アイコンの前）",
                    right: "右側（コンテンツ後）"
                },
                animations: {
                    label: "アニメーション"
                },
                animationHover: {
                    label: "ホバー時のアニメーション",
                    description: "ホバーリフトとスケール効果を有効にする"
                },
                animationSelection: {
                    label: "選択部分のアニメーション",
                    description: "選択アニメーションを有効にする (境界線のグロー、リフト)"
                },
                animationDragDrop: {
                    label: "ドラッグアンドドロップによるアニメーション",
                    description: "ドラッグ アンド ドロップのゴースト効果を有効にする"
                },
                animationEnterExit: {
                    label: "入退出時のアニメーション",
                    description: "タブの作成/スライドを閉じるアニメーションを有効にする"
                },
                animationIconPop: {
                    label: "アイコンポップのアニメーション",
                    description: "選択時にアイコンの拡大アニメーションを有効にする"
                },
                animationCloseRotation: {
                    label: "近回転時のアニメーション",
                    description: "閉じるボタンの回転アニメーションを有効にする"
                },
                animationPlusPulse: {
                    label: "プラスボタンパルスのアニメーション",
                    description: "プラスボタンのパルスアニメーションを有効にする"
                },
                animationMentionGlow: {
                    label: "グローについてのアニメーション",
                    description: "メンション時に赤色の点滅を有効にする"
                },
                animationCompactExpand: {
                    label: "コンパクト/エキスパンドのアニメーション",
                    description: "コンパクトなタブのスムーズな拡張を可能にする"
                },
                animationSelectedBorder: {
                    label: "選択した境界線のアニメーション",
                    description: "選択したタブの境界線とグローのスタイルを有効にする"
                },
                animationSelectedBackground: {
                    label: "選択した背景のアニメーション",
                    description: "選択したタブの背景色の変更を有効にする"
                },
                animationTabShadows: {
                    label: "タブの影のアニメーション",
                    description: "タブの影効果を有効にする"
                },
                animationTabPositioning: {
                    label: "アニメーションタブの配置",
                    description: "タブの位置を移動するときにスムーズな遷移を有効にする"
                },
                animationResizeHandle: {
                    label: "アニメーションのサイズ変更ハンドル",
                    description: "サイズ変更ハンドルのフェード アニメーションを有効にする"
                },
                animationQuestsActive: {
                    label: "アニメーションクエストがアクティブです",
                    description: "クエストがアクティブに実行されているときに「クエスト」タブでグラデーションアニメーションを有効にする"
                },
                compactAutoExpandSelected: {
                    label: "コンパクト自動拡張が選択されました",
                    description: "選択するとコンパクトタブが自動的に展開され、完全なチャンネル名が表示されます"
                },
                compactAutoExpandOnHover: {
                    label: "ホバー時のコンパクトな自動展開",
                    description: "カーソルを合わせるとコンパクトなタブが自動的に展開され、完全なチャンネル名が表示されます"
                },
                openInNewTabAutoSwitch: {
                    label: "新しいタブで開く自動切り替え",
                    description: "「新しいタブで開く」コンテキストメニューから開いた新しいタブに自動的に切り替えます"
                },
                bookmarksIndependentFromTabs: {
                    label: "タブから独立したブックマーク",
                    description: "ブックマークはアクティブなタブ バーに影響を与えずに個別に移動します。"
                },
                showResizeHandle: {
                    label: "サイズ変更ハンドルを表示",
                    description: "タブの上にマウスを置くとサイズ変更ハンドルを表示してタブの幅を調整します"
                },
                openNewTabsInCompactMode: {
                    label: "コンパクト モードで新しいタブを開く",
                    description: "新しく作成されたすべてのタブをデフォルトでコンパクト モードで開く"
                },
                newTabButtonBehavior: {
                    label: "新しいタブボタンの動作",
                    description: "新しいタブ (+) ボタンは右側に固定されたままではなく、タブに従います"
                },
                oneTabPerServer: {
                    label: "サーバーごとに 1 つのタブ",
                    description: "サーバーごとに 1 つのタブに制限されるため、そのサーバーで新しいチャネルを開くと既存のタブが使用されます。"
                },
                maxOpenTabs: {
                    label: "開いているタブの最大数",
                    description: "開いているタブの最大数 (0 = 無制限)"
                }
            },
            tabs: {
                startup: "起動タブ",
                currently: "現在開いているタブに設定します"
            },
            toast: {
                notRestoring: "KeepCurrentChannel が有効になっているためタブが復元されない",
                failed: {
                    restore: "タブの復元に失敗しました",
                    saved: "保存したタブの読み込みに失敗しました"
                }
            }
        },
        characterCounter: {
            name: "CharacterCounter",
            description: "メッセージボックスに文字カウンターを表示します",
            option: {
                colorEffects: {
                    label: "色の効果",
                    description: "文字数制限に近づくためのカラー効果をオンまたはオフにします"
                }
            }
        },
        cleanChannelGroups: {
            name: "CleanChannelGroups",
            description: "未読メッセージがある場合でも、折りたたまれたカテゴリ内のすべてのチャネルを非表示にします。"
        },
        cleanChannelName: {
            name: "CleanChannelName",
            description: "チャンネル名からすべての絵文字と装飾を削除する"
        },
        clearURLs: {
            name: "ClearURLs",
            description: "送信した URL から追跡要素を自動的に削除します"
        },
        clickableRoles: {
            name: "ClickableRoles",
            description: "ユーザー プロファイルとメンバー リストのロールをクリックして、どのメンバーがそのロールを持っているかを確認します。",
            modal: {
                loading: "メンバーを読み込んでいます...",
                noMembers: "メンバーが見つかりませんでした。",
                unknown: "不明な役割"
            }
        },
        clientSideBlock: {
            name: "ClientSideBlock",
            description: "ほぼすべてのコンテンツをローカルであらゆるユーザーから非表示にすることができます",
            replying: "ブロックされたメッセージに返信する",
            option: {
                hideVc: {
                    label: "音声チャンネルを非表示にする",
                    description: "ブロックされたユーザーが含まれる音声チャネルを非表示にします。"
                },
                usersToBlock: {
                    label: "ブロックするユーザー",
                    description: "カンマとスペースで区切られたユーザー ID"
                },
                hideBlockedUsers: {
                    label: "ブロックされたユーザーを非表示にする",
                    description: "ブロックされたユーザーもどこにでも非表示にする必要があります"
                },
                hideBlockedMessages: {
                    label: "ブロックされたメッセージを非表示にする",
                    description: "ブロックされたユーザーからのメッセージを完全に非表示にする必要がありますか (古い noblockedmessages プラグインと同じ)"
                },
                hideEmptyRoles: {
                    label: "空の役割を非表示にする",
                    description: "すべてのメンバーがブロックされている場合、ロールヘッダーを非表示にする必要がありますか"
                },
                blockedReplyDisplay: {
                    label: "ブロックされた返信の表示",
                    description: "あなたが非表示にした人に誰かが返信したときに、メッセージの代わりに何を表示する必要がありますか",
                    displayText: "非表示のメッセージに返信されたことを示すテキストを表示する",
                    hideReply: "文字通り何もない"
                },
                guildBlackList: {
                    label: "ギルドブラックリスト",
                    description: "機能を無効にするギルド ID"
                },
                guildWhiteList: {
                    label: "ギルドのホワイトリスト",
                    description: "機能を有効にするギルド ID"
                }
            }
        },
        clientTheme: {
            name: "ClientTheme",
            description: "古いクライアントテーマの実験の再作成。 Discord クライアントテーマに色を追加する",
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
                    title: "テーマの見栄えが良くありません。",
                    contrast: "選択した色はテキストとのコントラストが良くありません",
                    nitro: "Nitro テーマはサポートされていません",
                    switch: "{{oppositeTheme}} モードに切り替える",
                    disable: "ニトロテーマを無効にする",
                    reset: "テーマカラーをリセット"
                }
            }
        },
        clipsEnhancements: {
            name: "ClipsEnhancements",
            description: "クリップ FPS と期間のオプションをさらに追加し、さらに RPC タグを追加します。",
            minutes: "分",
            option: {
                richPresenceTagging: {
                    label: "リッチプレゼンスのタグ付け",
                    description: "いつクリップに現在のリッチ プレゼンスをタグ付けする必要がありますか?",
                    always: "いつも",
                    only: "アクティビティ名の先頭または末尾が一致する場合のみ",
                    never: "一度もない"
                },
                enableScreenshotKeybind: {
                    label: "スクリーンショットのキーバインドを有効にする",
                    description: "スクリーンショットのキーバインド機能を有効にする"
                },
                enableVoiceOnlyClips: {
                    label: "音声のみのクリップを有効にする",
                    description: "音声のみのクリップ (ビデオなしのオーディオ) を有効にする"
                },
                enableAdvancedSignals: {
                    label: "高度な信号を有効にする",
                    description: "高度なクリップ信号を有効にする (自動クリップ トリガー)"
                },
                ignorePlatformRestriction: {
                    label: "プラットフォーム制限を無視する",
                    description: "プラットフォーム制限クリッピングを許可する (保存エラーが発生する可能性があります)"
                },
                clipsLink: {
                    label: "クリップリンク",
                    link: "クリップ設定で FPS と再生時間のオプションを変更してください。"
                }
            }
        },
        colorSighted: {
            name: "ColorSighted",
            description: "2015 ～ 2017 年の Discord と同様に、色盲に優しいアイコンをステータスから削除します"
        },
        commandPalette: {
            name: "CommandPalette",
            description: "キーボードを使用して UI を操作できます。",
            action: {
                command: {
                    label: "コマンドの実行",
                    description: "ID を使用して別のパレット コマンドにエイリアスを付けます。識別子が不明な場合はピッカーを使用してください。"
                },
                settings: {
                    label: "設定ページを開く",
                    description: "Discord の設定ページに直接ジャンプします。ピッカーからページを選択します。"
                },
                url: {
                    label: "URLを開く",
                    description: "リンクを開きます。互換性を最大限に高めるには、https:// リンクを使用してください。"
                },
                macro: {
                    label: "マクロの実行",
                    description: "一連のコマンドを順番に実行します。ピッカーを使用してステップを追加します。"
                }
            },
            category: {
                auto: "自動 (デフォルトの配置を使用)",
                default: {
                    label: "クイックアクション",
                    description: "一般的な Plexcord のショートカット"
                },
                plugins: {
                    label: "プラグイン",
                    description: "Plexcord プラグインの有効化、無効化、および構成",
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
                    description: "選択したチャンネルとギルドのアクション"
                },
                updates: {
                    label: "アップデート",
                    description: "Plexcord の最新情報を入手する"
                },
                discordSettings: {
                    label: "Discordの設定",
                    description: "Discord設定ページにジャンプします"
                },
                custom: {
                    label: "カスタムコマンド",
                    description: "ユーザー定義のコマンドパレットエントリ"
                },
                sessions: {
                    label: "セッションツール",
                    description: "Discord セッションを管理するためのユーティリティ"
                },
                guilds: {
                    label: "ギルド",
                    description: "ギルドに素早く移動"
                },
                friends: {
                    label: "友達",
                    description: "友達にすばやく移動"
                },
                action: {
                    label: "アクション"
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
                    label: "ディスコードをリロードする",
                    description: "現在の Discord ウィンドウをリロードします"
                }
            },
            command: {
                enable: "{{pluginName}} を有効にする",
                enabled: "{{pluginName}}を有効にしました",
                disable: "{{pluginName}} を無効にする",
                disabled: "無効 {{pluginName}}",
                failed: "コマンドが失敗しました:",
                toggleFailed: "{{pluginName}} を切り替えることができませんでした。",
                pluginSettings: "{{pluginName}} 設定",
                untitled: "無題のコマンド",
                new: "新しいコマンド",
                error: {
                    enter: "コマンド ID を入力するか、以下から 1 つを選択します。",
                    noCommand: "この ID に一致するコマンドはありません。"
                },
                discord: {
                    account: "マイアカウントを開く",
                    privacy: "オープンデータとプライバシー",
                    notifications: "通知を開く",
                    voice: "音声とビデオを開く",
                    text: "テキストと画像を開く",
                    appearance: "オープンな外観",
                    accessibility: "オープンなアクセシビリティ",
                    keybinds: "キーバインドを開く",
                    advanced: "アドバンストを開く",
                },
                updates: {
                    check: {
                        label: "アップデートをチェックする",
                        description: "Plexcord のアップデートを確認する",
                        one: "利用可能なアップデートが 1 つあります",
                        multiple: "{{count}} アップデートが利用可能です",
                        none: "利用可能なアップデートはありません",
                        failed: "アップデートの確認に失敗しました。"
                    },
                    changelog: {
                        label: "変更ログの表示",
                        description: "Plexcord変更ログを開きます"
                    }
                },
                read: {
                    mark: {
                        label: "{{channelLabel}} をマークして読み取り"
                    }
                },
                pin: {
                    open: {
                        label: "{{channelLabel}} のピンを開く"
                    },
                    toggle: {
                        label: "最後のコマンドでピンを切り替えます"
                    }
                },
                channel: {
                    mute: {
                        label: "{{channelLabel}} をミュート",
                        oneHour: "{{channelLabel}} を 1 時間ミュートします",
                        untilTomorrow: "明日まで{{channelLabel}}をミュートします",
                    },
                    unmute: {
                        label: "{{channelLabel}} のミュートを解除",
                    },
                    reopen: {
                        label: "最後に閉じたDMを再開します"
                    },
                    dm: {
                        open: {
                            label: "{{userLabel}} で DM を開く"
                        }
                    }
                },
                guild: {
                    settings: {
                        label: "{{guildLabel}} の設定を開く"
                    },
                    navigate: {
                        label: "{{guildLabel}} に移動します"
                    }
                },
                session: {
                    thirtyMinutesDnd: "30分間のサイレントモードを設定します",
                    oneHourDnd: "1時間のサイレントモードを設定します",
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
                    streamer: "Toggle Streamer Mode",
                    mute: "セルフミュートの切り替え",
                    deafen: "Toggle Self Deafen",
                },
                notification: {
                    clear: {
                        label: "Clear Desktop Notifications"
                    }
                },
                palette: {
                    settings: {
                        label: "コマンドパレット設定を開く",
                        description: "コマンド パレット プラグインを構成する"
                    }
                },
                recent: {
                    label: "最近のコマンドを表示",
                    description: "最後に実行されたコマンドを表示します",
                    rerun: "最後のコマンドを再実行する"
                },
                plugin: {
                    reload: {
                        label: "すべてのプラグインをリロードする",
                        description: "有効になっているすべてのプラグインをホットリロードしようとします"
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
                searchPlaceholder: "検索コマンド",
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
                        filtering: "{{tags}} によるフィルタリング",
                        noCommand: "コマンドが見つかりません",
                        pin: "ピンコマンド",
                        unpin: "固定解除コマンド"
                    },
                    target: {
                        label: "対象コマンドID",
                        placeholder: "コマンドIDを入力してください",
                        choose: "コマンドの選択"
                    },
                    custom: {
                        label: "カスタムコマンド",
                        description: "1) コマンドに名前を付けます · 2) オプションの説明/キーワード/タグ/カテゴリを追加します · 3) アクションを選択し、その詳細を入力します (ID はエイリアスとマクロの既存のパレット コマンドと一致する必要があります)。",
                        auto: "自動 (デフォルト)",
                        expand: "拡大する",
                        collapse: "崩壊",
                        collapsed: {
                            label: "ラベル",
                            description: "表示名",
                            advanced: {
                                hide: "詳細オプションを非表示にする",
                                show: "詳細オプションを表示"
                            },
                            subtitle: {
                                label: "説明",
                                placeholder: "オプションのサブタイトル"
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
                        label: "コマンドシーケンス",
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
                core: "コア",
                navigation: "ナビゲーション",
                utility: "ユーティリティ",
                developer: "開発者",
                customization: "カスタマイズ",
                plugins: "プラグイン",
                session: "セッション",
                context: "コンテクスト",
                custom: "カスタム",
                guilds: "ギルド",
                friends: "友達",
                other: "他の"
            },
            toast: {
                chat: {
                    button: {
                        unableToFind: "「{{label}}」チャット ボタンが見つかりません。",
                        failedToTrigger: "{{label}} をトリガーできませんでした。",
                        activated: "{{label}} がアクティブになりました。"
                    }
                },
                channel: {
                    mute: {
                        unavailable: "チャンネルミュートコントロールは使用不可",
                        muted: "ミュートされたチャンネル。",
                        unmuted: "ミュート解除されたチャンネル。",
                        failed: "チャンネルのミュート状態を更新できませんでした。"
                    },
                    dm: {
                        no: "このセッションは記録された DM クローズはありませんでした。",
                        reOpened: "前回閉じていたDMを再開しました。",
                        noAvailable: "DMは利用できなくなりました。"
                    }
                },
                command: {
                    loop: "マクロ実行中にコマンドループが検出されました。",
                    notFound: "コマンド {{commandId}} が見つかりません。",
                    unsupported: "サポートされていないカスタム コマンド アクションです。",
                    failedToRun: "{{label}} の実行に失敗しました。",
                    notMetadata: "コマンド パレット プラグインのメタデータが利用できません。"
                },
                guild: {
                    mute: {
                        unavailable: "ギルドのミュート制御は利用できません",
                        muted: "沈黙のギルド。",
                        unmuted: "ミュートされていないギルド。",
                        failed: "ギルドのミュート状態を更新できませんでした。"
                    },
                    settings: {
                        unable: "ギルド設定を開けません。",
                    }
                },
                panel: {
                    pin: {
                        unable: "ピンパネルを開けません。",
                    }
                },
                status: {
                    reset: {
                        canceled: "スケジュールされたステータスのリセットがキャンセルされました。",
                        unableToChange: "現在ステータスを変更できません。",
                        reverted: "ステータスが {{status}} に戻りました。",
                        dnd: "{{duration}}分間は邪魔しないでください。"
                    },
                    change: {
                        unableToChange: "現在ステータスを変更できません。",
                        changed: "ステータスが{{status}}に変更されました。"
                    }
                },
                read: {
                    marked: "{{channelLabel}} を既読としてマークしました。",
                    failed: "チャネルを既読としてマークできませんでした。"
                },
                route: {
                    unable: "{{destination}}を開けません。",
                },
                notification: {
                    cleared: "すべての通知をクリアしました。",
                    failed: "通知をクリアできませんでした。",
                    notSupported: "通知の消去はサポートされていません。"
                },
                streamerMode: {
                    enabled: "ストリーマーモードが有効になりました。",
                    disabled: "ストリーマーモードが無効になっています。",
                },
                voice: {
                    micToggle: {
                        muted: "マイクがミュートになっています。",
                        unmuted: "マイクのミュートが解除されています。"
                    },
                    deafenToggle: {
                        deafened: "あなたは今、耳が聞こえなくなっています。",
                        undeafened: "あなたはもう耳が聞こえなくなりました。"
                    }
                },
                quickCSS: {
                    enabled: "クイックCSSが有効になりました。",
                    disabled: "クイックCSSが無効になっています。"
                },
                transparentity: {
                    enabled: "ウィンドウの透明度が有効になりました。",
                    disabled: "ウィンドウの透明度が無効になっています。"
                },
                plugin: {
                    disabled: {
                        label: "{{pluginName}} は無効になっています。",
                        disable: "{{pluginName}} は無効になっています。プラグインがこのアクションを使用できるようにします。"
                    },
                    required: {
                        label: "{{pluginName}} をリロードするには再起動が必要です。"
                    },
                    stop: {
                        failed: "{{pluginName}} を停止できませんでした。"
                    },
                    restart: {
                        failed: "{{pluginName}} の再起動に失敗しました。"
                    },
                    reload: {
                        label: "{{pluginName}} をリロードしました。",
                        noPlugin: "プラグインはリロードされませんでした。",
                        reloaded: "{{count}} プラグイン{{s}} をリロードしました。"
                    },
                    toggle: {
                        enabled: "{{changed}} プラグイン{{s}} を有効にしました。",
                        disabled: "{{changed}} プラグイン{{s}} を無効にしました。",
                        noChanged: "状態が変更されたプラグインはありません。"
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
                    current: "現在のギルド",
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
                    description: "パレットの外観",
                    classic: "クラシック",
                    polished: "ポリッシュ"
                },
                showTags: {
                    label: "タグを表示",
                    description: "コマンドのタグチップを表示"
                },
                enableTagFilter: {
                    label: "タグフィルターを有効にする",
                    description: "タグフィルターバーを表示する"
                },
                customCommands: {
                    label: "カスタムコマンド",
                    description: "カスタム コマンド パレット エントリを管理する"
                }
            },
            template: {
                alias: {
                    label: "エイリアスコマンド",
                    description: "既存のコマンドをミラーリングする"
                },
                settings: {
                    label: "設定",
                    description: "Discord設定を開く"
                },
                url: {
                    label: "リンク",
                    description: "外部URLを開く"
                },
                macro: {
                    label: "マクロ",
                    description: "一連のコマンドを実行する"
                }
            }
        },
        consoleJanitor: {
            name: "ConsoleJanitor",
            description: "煩わしいコンソールメッセージ/エラーを無効にします",
            option: {
                disableLoggers: {
                    label: "ロガーを無効にする",
                    description: "Discordのロガーを無効にします"
                },
                disableSpotifyLogger: {
                    label: "Spotify ロガーを無効にする",
                    description: "アカウント情報やアクセストークンが漏洩するSpotifyロガーを無効にする"
                },
                whitelistedLoggers: {
                    label: "ホワイトリストに登録されたロガー",
                    description: "他のロガーが非表示になっている場合でも許可する、セミコロン (;) で区切られたロガーのリスト"
                },
                allowLevel: {
                    label: "許可レベル",
                    description: "これらのタイプのロガーを常に許可します",
                    filter: "フィルタリスト"
                }
            }
        },
        consoleShortcuts: {
            name: "Console Shortcuts",
            description: "ウィンドウ上のさまざまなものに短いエイリアスを追加します。リストに対して `shortcutList` を実行します。"
        },
        contentWarning: {
            name: "ContentWarning",
            description: "デフォルトでぼかされる特定のトリガーワードを指定できます。ぼやけたコンテンツをクリックすると、そのコンテンツが表示されます。",
            option: {
                flagged: {
                    label: "フラグ付き",
                    flagged: "フラグ付きの単語",
                    placeholder: "言葉"
                },
                onClick: {
                    label: "クリック時",
                    description: "ホバーではなくクリック時にのみトリガーコンテンツを表示します"
                }
            }
        },
        copyEmojiMarkdown: {
            name: "CopyEmojiMarkdown",
            description: "絵文字を書式設定された文字列としてコピーできます (<a:blob_pwease:1402403381900742737>)",
            option: {
                copyUnicode: {
                    label: "Unicode をコピーする",
                    description: "デフォルトの絵文字の :name: の代わりに生の Unicode 文字をコピーします (👽)"
                }
            },
            context: {
                copy: "絵文字マークダウンをコピー"
            },
            toast: {
                success: "成功！絵文字マークダウンをコピーしました。"
            }
        },
        copyFileContents: {
            name: "CopyFileContents",
            description: "テキストファイルの添付ファイルに内容をコピーするためのボタンを追加します",
            copied: "コピーしました！",
            large: "ファイルが大きすぎてコピーできません。",
            copyFileContents: "ファイルの内容をコピーする"
        },
        copyProfileColors: {
            name: "CopyProfileColors",
            description: "人のプロフィールのグラデーションカラーをクリップボードにコピーするプラグイン。",
            copy: "プロファイルの色のコピー",
            toast: {
                noColor: "プロファイルの色が見つかりません!",
                copied: "プロファイルの色がクリップボードにコピーされました。",
                error: "プロファイルの色のコピー中にエラーが発生しました!"
            }
        },
        copyStatusUrls: {
            name: "CopyStatusUrls",
            description: "ユーザーのステータス URL を右クリックしてコピーします",
            toast: {
                copied: "コピーしたURL",
                error: "URL のコピー中にエラーが発生しました。詳細についてはコンソールを確認してください"
            }
        },
        copyStickerLinks: {
            name: "CopyStickerLinks",
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
            name: "CopyUserMention",
            description: "ユーザーのコンテキスト メニューにユーザーのメンションをコピーするボタンを追加します。ValidUser で最適に機能します。",
            context: {
                copy: "ユーザーメンションをコピー"
            }
        },
        copyUserURLs: {
            name: "CopyUserURLs",
            description: "ユーザーのコンテキスト メニューに「ユーザー URL をコピー」オプションを追加します。",
            context: {
                copy: "ユーザーのURLをコピー"
            }
        },
        crashHandler: {
            name: "CrashHandler",
            description: "再起動せずにクラッシュを処理し、場合によっては回復するためのユーティリティ プラグイン",
            option: {
                attemptToPreventCrashes: {
                    label: "クラッシュを防ぐ試み",
                    description: "Discord のクラッシュを防ぐかどうか。"
                },
                attemptToNavigateToHome: {
                    label: "ホームに移動しようとします",
                    description: "クラッシュリカバリ時にホームタブへの移動を試行するかどうか。"
                }
            },
            toast: {
                crashed: {
                    title: "Discordがクラッシュしました！",
                    body: "Awn :( Discord は 2 回急速にクラッシュしましたが、回復しようとしませんでした。ここをクリックしてサポート サーバーに参加してください!",
                    update: "ああ、Discord がクラッシュしました...しかし良いニュースです。この問題を修正する可能性のある Plexcord アップデートが利用可能です。今すぐ更新しますか?",
                    recover: "回復を試みています... ここをクリックしてサポート サーバーに参加してください!",
                    invalid: "招待リンクが無効または期限切れです。"
                }
            }
        },
        ctrlEnterSend: {
            name: "CtrlEnterSend",
            description: "Ctrl+Enter を使用してメッセージを送信します (カスタマイズ可能)",
            option: {
                submitRule: {
                    label: "ルールの送信",
                    description: "メッセージを送る方法",
                    ctrlEnter: "Ctrl+Enter (Enter または Shift+Enter で改行) (macOS では cmd+Enter)",
                    shiftEnter: "Shift+Enter (改行の場合は Enter)",
                    enter: "Enter (Shift+Enter で改行、Discord のデフォルト)"
                },
                sendMessageInTheMiddleOfACodeBlock: {
                    label: "コードブロックの途中でメッセージを送信する",
                    description: "コードブロックの途中でメッセージを送信するかどうか"
                }
            }
        },
        cursorBuddy: {
            name: "CursorBuddy",
            description: "カーソルに追従するスプライトを追加します。",
            modal: {
                furColor: "毛皮の色",
                outlineColor: "輪郭の色"
            },
            option: {
                buddy: {
                    label: "バディ",
                    description: "カーソルバディを選択してください",
                    oneko: "オネコ",
                    fathorse: "ファタスホース"
                },
                speed: {
                    label: "スピード",
                    description: "相棒のスピード",
                    invalid: "速度は0より大きくなければなりません"
                },
                fps: {
                    label: "フレームレート",
                    description: "相棒のフレームレート",
                    invalid: "フレームレートは0より大きくなければなりません"
                },
                onekoSection: {
                    label: "オネコ"
                },
                furColor: {
                    label: "毛皮の色",
                    description: "Oneko のファーの六角カラー"
                },
                outlineColor: {
                    label: "輪郭の色",
                    description: "Oneko のアウトライン 16 進カラー"
                },
                fathorseSection: {
                    label: "ファタスホース"
                },
                size: {
                    label: "サイズ",
                    description: "太った馬の大きさ",
                    invalid: "サイズは0より大きくなければなりません"
                },
                fade: {
                    label: "フェード",
                    description: "カーソルが近くにあるときに馬がフェードする場合"
                },
                freeroam: {
                    label: "フリーローム",
                    description: "馬がアイドル状態のときに自由に歩き回るべきかどうか"
                },
                shake: {
                    label: "シェイク",
                    description: "馬が歩いているときに窓を揺らしたら"
                }
            }
        },
        customFolderIcons: {
            name: "CustomFolderIcons",
            description: "任意の PNG を使用してフォルダー アイコンをカスタマイズ",
            option: {
                solidIcon: {
                    label: "実線のアイコン",
                    description: "画像の背景に無地の背景を使用する"
                },
                folderIcons: {
                    label: "フォルダーアイコン",
                    description: "フォルダーアイコンの設定"
                }
            },
            modal: {
                change: "フォルダーアイコンのサイズを変更する",
                save: "保存",
                unset: "設定を解除する",
                set: "新しいアイコンを設定する",
                hover: "設定後にフォルダーを更新するには、フォルダーの上にマウスを移動する必要がある場合があります。"
            }
        },
        customIdle: {
            name: "CustomIdle",
            description: "Discordがアイドル状態になるまでの時間を設定できます（または自動アイドルを無効にします）。",
            backOnline: "おかえり！ボタンをクリックしてオンラインにアクセスします。 [X] をクリックすると、リロードするまでアイドル状態になります。",
            exit: "アイドル状態を終了",
            option: {
                idleTimeout: {
                    label: "アイドルタイムアウト",
                    description: "Discord がアイドル状態になるまでの分数 (自動アイドルを無効にする場合は 0)"
                },
                remainInIdle: {
                    label: "アイドル状態のままにする",
                    description: "Discord に戻ったら、オンラインにすることを確認するまでアイドル状態のままにしてください"
                }
            }
        },
        customRPC: {
            name: "CustomRPC",
            description: "完全にカスタマイズ可能なリッチ プレゼンス (ゲーム ステータス) を Discord プロフィールに追加します",
            goTo: "{{portal}} に移動してアプリケーションを作成し、アプリケーション ID を取得します。",
            upload: "[リッチ プレゼンス] タブで画像をアップロードして画像キーを取得します。",
            image: "画像リンクを使用したい場合は、画像をダウンロードして {{imgur}} に再アップロードし、画像を右クリックして [画像アドレスをコピー] を選択して画像リンクを取得します。",
            button: "自分のプロフィールには自分のボタンは表示されませんが、他の人には問題なく表示されます。",
            font: "一部の奇妙な Unicode テキスト (「フォント」 𝖑𝖎𝖐𝖊 𝖙𝖍𝖎𝖘) によってリッチ プレゼンスが表示されない可能性があります。代わりに通常の文字を使用してみてください。",
            placeholder: "値を入力してください",
            select: "オプションを選択してください",
            error: {
                appIdInvalid: "アプリ ID は有効な番号である必要があります。",
                notice: "知らせ",
                sharing: "アクティビティの共有が有効になっていないため、ユーザーはカスタム リッチ プレゼンスを見ることができません。",
                enable: "有効にする",
                validStream: "ストリーミング リンクは有効な URL である必要があります。",
                mustBeURL: "有効な URL である必要があります。",
                streamCharacters: "ストリーミング リンクは 512 文字以下にする必要があります。",
                dontUse: "Discord リンクは使用しないでください。代わりに Imgur 画像リンクを使用してください。",
                imgur: "Imgur リンクは画像への直接リンクである必要があります (例: https://i.imgur.com/...)。画像を右クリックし、「画像アドレスをコピー」をクリックします",
                tenor: "Tenor リンクは画像への直接リンクである必要があります (例: https://media.tenor.com/...)。 GIFを右クリックし、「画像アドレスをコピー」をクリックします。",
                required: "この項目は必須です。",
                tooLong: "{{maxLength}} 文字以下にする必要があります。",
                mustBeNumber: "数値である必要があります。",
                mustBePositive: "正の数である必要があります。",
                startTimeInvalid: "開始タイムスタンプは 0 より大きくなければなりません。",
                endTimeInvalid: "終了タイムスタンプは 0 より大きくなければなりません。"
            },
            option: {
                appId: {
                    label: "アプリID",
                    description: "アプリケーションID (必須)"
                },
                appName: {
                    label: "アプリ名",
                    description: "アプリケーション名 (必須)"
                },
                details: {
                    label: "詳細",
                    description: "詳細（1行目）"
                },
                detailsURL: {
                    label: "詳細URL",
                    description: "詳細のクリック可能な URL"
                },
                state: {
                    label: "州",
                    description: "状態 (2 行目)"
                },
                stateURL: {
                    label: "州の URL",
                    description: "クリック可能な URL の状態"
                },
                partySize: {
                    label: "パーティーの規模",
                    description: "現在のパーティー サイズ (最大パーティー サイズと一緒に使用する必要があります)"
                },
                partyMax: {
                    label: "最大パーティー人数",
                    description: "最大パーティー サイズ (現在のパーティー サイズと一緒に使用する必要があります)"
                },
                type: {
                    label: "アクティビティの種類",
                    description: "アクティビティの種類",
                    playing: "遊ぶ",
                    streaming: "ストリーミング",
                    listening: "リスニング",
                    watching: "見てる",
                    competing: "競争する"
                },
                streamLink: {
                    label: "ストリームリンク",
                    description: "Twitch.tv または YouTube.com リンク (ストリーミング アクティビティ タイプのみ)"
                },
                timestampMode: {
                    label: "タイムスタンプモード",
                    description: "タイムスタンプが示すもの",
                    none: "なし",
                    sinceDiscordOpen: "Discordオープンしてから",
                    sameAsCurrentTime: "現在の時刻と同じ (24 時間経過してもリセットされない)",
                    custom: "カスタム時間"
                },
                startTime: {
                    label: "開始時間 (ミリ秒単位)",
                    description: "ミリ秒単位の開始タイムスタンプ (カスタム タイムスタンプ モードのみ)"
                },
                endTime: {
                    label: "終了時刻 (ミリ秒単位)",
                    description: "ミリ秒単位の終了タイムスタンプ (カスタム タイムスタンプ モードのみ)"
                },
                imageBig: {
                    label: "大きい画像キー",
                    description: "大きな画像キー ([リッチ プレゼンス] タブでアップロードする必要があります)"
                },
                imageBigTooltip: {
                    label: "画像の大きなツールチップ",
                    description: "大きな画像のツールチップ"
                },
                imageBigURL: {
                    label: "大きい画像のURL",
                    description: "大きな画像をクリックできる URL"
                },
                imageSmall: {
                    label: "小さい画像キー",
                    description: "小さな画像キー ([リッチ プレゼンス] タブでアップロードする必要があります)"
                },
                imageSmallTooltip: {
                    label: "画像の小さなツールチップ",
                    description: "小さな画像ツールチップ"
                },
                imageSmallURL: {
                    label: "小さい画像の URL",
                    description: "小さい画像のクリック可能な URL"
                },
                buttonOneText: {
                    label: "ボタン 1 のテキスト",
                    description: "ボタン 1 のテキスト"
                },
                buttonOneURL: {
                    label: "ボタン1のURL",
                    description: "ボタン1のURL"
                },
                buttonTwoText: {
                    label: "ボタン 2 のテキスト",
                    description: "ボタン 2 のテキスト"
                },
                buttonTwoURL: {
                    label: "ボタン2のURL",
                    description: "ボタン2のURL"
                }
            }
        },
        customSounds: {
            name: "CustomSounds",
            description: "Discordのサウンドをカスタマイズします。",
            search: "検索音",
            placeholder: "名前またはIDで検索",
            import: "輸入",
            export: "輸出",
            reset: "すべてリセット",
            debug: "デバッグ",
            toast: {
                error: "カスタムサウンドファイルの読み込みエラー",
                exported: "エクスポートされた {{count}} 設定 (オーディオ ファイルは含まれません)",
                imported: "設定が正常にインポートされました",
                importError: "設定のインポート中にエラーが発生しました。詳細についてはコンソールを確認してください。",
                reset: "すべてのオーバーライドが正常にリセットされました。",
                overrideDescription: "{{soundName}} のオーバーライド",
                previewSound: "サウンドの再生中にエラーが発生しました。",
                playing: "カスタムサウンドの再生中にエラーが発生しました。ファイルが破損している可能性があります。",
                invalidFile: "プレビューできるカスタム サウンド ファイルがありません",
                uploaded: "ファイルが正常にアップロードされました: {{fileName}}",
                uploadedError: "ファイルのアップロード中にエラーが発生しました: {{error}}",
                invalidExtension: "無効なファイルタイプです。音声ファイルをアップロードしてください。",
                uploading: "ファイルをアップロードしています...",
                deleted: "ファイルは正常に削除されました",
                deleteError: "ファイルの削除中にエラーが発生しました。",
                loadingError: "カスタムサウンドファイルの読み込みエラー"
            },
            button: {
                preview: "プレビュー",
                stop: "停止",
                volume: "音量",
                soundSource: "音源",
                customFile: "カスタムファイル",
                uploadNew: "新規アップロード",
                delete: "選択したファイルを削除"
            },
            option: {
                default: "デフォルト",
                custom: "カスタム",
                select: "ファイルを選択してください..."
            },
            type: {
                activityEnd: "アクティビティ終了",
                activityLaunch: "アクティビティの開始",
                activityUserJoin: "アクティビティユーザーの参加",
                activityUserLeft: "ユーザーが残したアクティビティ",
                asmrMessage: "ASMRメッセージ",
                bitMessage: "ビットメッセージ",
                bopMessage: "バップメッセージ",
                callCalling: "電話をかける",
                callRinging: "電話の呼び出し音",
                clipError: "クリップエラー",
                clipSave: "クリップの保存",
                ddrDown: "DDR ダウン",
                ddrLeft: "DDR左",
                ddrRight: "DDR右",
                ddrUp: "DDRアップ",
                deafen: "聴覚障害者",
                discodo: "ディスコド",
                disconnect: "切断する",
                duckyMessage: "ダッキーのメッセージ",
                hangStatusSelect: "ハングステータス選択",
                highfiveClap: "ハイタッチクラップ",
                highfiveWhistle: "ハイファイブホイッスル",
                humanMan: "人間の男",
                lofiMessage: "LoFi メッセージ",
                mention1: "メンション 1 (@role)",
                mention2: "メンション 2 (@everyone)",
                mention3: "メンション 3 (@ここ)",
                message1: "メッセージ 1 (一般)",
                message2: "メッセージ 2 (サーバーで応答)",
                message3: "メッセージ 3 (DM およびグループ DM)",
                mute: "ミュート",
                overlayUnlock: "オーバーレイのロック解除",
                poggermodeAchievement: "ポガーモードの実績",
                poggermodeApplause: "ポガーモードの拍手",
                poggermodeEnabled: "ポガーモードが有効になりました",
                poggermodeMessage: "ポガーモードメッセージ",
                pttStart: "PTTスタート",
                pttStop: "PTTストップ",
                reconnect: "再接続",
                robotMan: "ロボットマン",
                stageWaiting: "ステージ待機中",
                streamEnded: "ストリームが終了しました",
                streamStarted: "ストリームが開始されました",
                streamUserJoined: "ストリームユーザーが参加しました",
                streamUserLeft: "ストリームユーザーが退席しました",
                success: "成功",
                undeafen: "聴覚障害者",
                unmute: "ミュートを解除する",
                userJoin: "ユーザー参加",
                userLeave: "ユーザー休暇",
                userMoved: "ユーザーが移動されました",
                vibingWumpus: "ヴァイビング・ワンパス"
            }
        },
        customTimestamps: {
            name: "CustomTimestamps",
            description: "メッセージとツールチップのカスタム タイムスタンプ",
            demo: {
                cozy: "クリックすると Cozy 形式に切り替わります",
                compact: "クリックしてコンパクト形式に切り替えます",
                lastWeek: "このメッセージは先週送信されました",
                hover: "タイムスタンプの上にマウスを置くと、ツールチップの形式が表示されます",
                edit: "ここでライブアップデートを確認するには、以下の形式を編集してください"
            },
            modal: {
                title: "使用方法:",
                moment: "Moment.js のフォーマットに関するドキュメント",
                hint: "さらに、入力でこれらを使用できます。",
                calendar: "次のような動的な日付フォーマットを有効にします。",
                today: "今日",
                yesterday: "昨日",
                relative: "次のような時間を与えます",
                relativeTime: "4時間前",
                preview: "プレビュー",
                format: "カレンダー形式",
                howTo: "上記のタイムスタンプで使用される場合に [calendar] 値をフォーマットする方法。"
            },
            option: {
                formats: {
                    label: "フォーマット",
                    description: "タイムスタンプ形式をカスタマイズする",
                },
                cozyFormat: {
                    label: "コージーモード",
                    description: "コージー モードのメッセージで使用する時刻形式"
                },
                compactFormat: {
                    label: "コンパクトモード",
                    description: "コンパクト モードでの時刻形式とメッセージの上にマウスを置くと"
                },
                tooltipFormat: {
                    label: "ツールチップ",
                    description: "ツールチップで使用する時刻形式"
                },
                ariaLabelFormat: {
                    label: "アリアレーベル",
                    description: "aria ラベルで使用する時間形式"
                },
                sameDayFormat: {
                    label: "同日",
                    description: "今日の[カレンダー]形式",
                    default: "[今日の時刻] HH:mm:ss"
                },
                lastDayFormat: {
                    label: "最終日",
                    description: "[カレンダー] 昨日の形式",
                    default: "[昨日の時間] HH:mm:ss"
                },
                lastWeekFormat: {
                    label: "先週",
                    description: "[カレンダー] 先週の形式"
                },
                sameElseFormat: {
                    label: "それ以外の古いもの",
                    description: "[カレンダー] 古い日付の形式"
                }
            }
        },
        customUserColors: {
            name: "CustomUserColors",
            description: "どこにいても、任意のユーザーにカスタム カラーを追加できます。 testingTweaks および roleColorEverywhere と併用することを強くお勧めします",
            option: {
                dmList: {
                    label: "DMリスト",
                    description: "カスタムカラーが定義されているユーザーは、DM リストで自分の名前が色付きで表示されます。"
                },
                colorInServers: {
                    label: "サーバーのカラー",
                    description: "サーバー内で名前の色を変更する必要がある場合"
                }
            },
            context: {
                setColor: "色の設定"
            },
            modal: {
                custom: "カスタムカラー",
                pick: "色を選択してください",
                delete: "エントリの削除",
                save: "保存"
            }
        },
        dearrow: {
            name: "DeArrow",
            description: "DeArrow を利用して、YouTube の埋め込みタイトルとサムネイルをセンセーショナルなものにします。",
            option: {
                hideButton: {
                    label: "非表示ボタン",
                    description: "YouTube の埋め込みから矢印解除ボタンを非表示にします"
                },
                replaceElements: {
                    label: "要素を置換する",
                    description: "埋め込みのどの要素を置き換えるかを選択してください",
                    everything: "すべて（タイトルとサムネイル）",
                    title: "タイトル",
                    thumbnail: "サムネイル"
                },
                dearrowByDefault: {
                    label: "デフォルトで矢印を解除",
                    description: "ビデオを自動的に DeArrow"
                }
            },
            tooltip: {
                dearrowed: "この埋め込みは DeArrowed されています。クリックして復元します",
                dearrow: "クリックして矢印を解除"
            }
        },
        declutter: {
            name: "Declutter",
            description: "プロフィール効果、ショップタブ、ブーストなどの必須ではない UI 要素を削除して、Discord をクリーンアップします。",
            option: {
                userProfileHeader: {
                    label: "ユーザープロフィール"
                },
                removeNameplate: {
                    label: "銘板を外す",
                    description: "銘板を取り外します。"
                },
                removeProfileEffect: {
                    label: "プロファイル効果の削除",
                    description: "オープニング時のプロフィールアニメーション効果を削除します。"
                },
                removeClanTag: {
                    label: "クランタグを削除する",
                    description: "クランタグを削除します。"
                },
                alwaysShowUsername: {
                    label: "常にユーザー名を表示",
                    description: "ステータスではなく常にユーザー名を表示します。"
                },
                accessibilityNotice: {
                    label: "アクセシビリティに関する通知",
                    description: "Discordにはすでにアクセシビリティ設定にユーザー名スタイルのオプションが組み込まれています。"
                },
                friendsListHeader: {
                    label: "友達/DM リストの上"
                },
                removeShopAboveDM: {
                    label: "DM の上のショップを削除",
                    description: "DM リストの上にあるショップを削除します。"
                },
                removeQuestsAboveDM: {
                    label: "DM 上のクエストを削除する",
                    description: "DM リストの上にあるクエストを削除します。"
                },
                miscHeader: {
                    label: "その他"
                },
                removeServerBoostInfo: {
                    label: "サーバーブースト情報の削除",
                    description: "チャンネルリストの上にあるサーバーブースト情報を削除します。"
                },
                removeBillingSettings: {
                    label: "請求設定を削除する",
                    description: "課金設定を削除します。"
                },
                removeGiftButton: {
                    label: "ギフトボタンを削除",
                    description: "プレゼントボタンを外します。"
                },
                removeUnavailableEmojiPicker: {
                    label: "使用できない絵文字ピッカーを削除する",
                    description: "使用できないカテゴリを絵文字ピッカーから削除します。"
                },
                removeAudioMenus: {
                    label: "オーディオメニューの削除",
                    description: "ミュートボタンと耳をつんざくボタンの横にあるメニューを削除します。"
                },
                removeButtonTooltips: {
                    label: "ボタンのツールチップを削除",
                    description: "ボタンのツールチップを削除します。"
                }
            }
        },
        decodeBase64: {
            name: "DecodeBase64",
            description: "任意のメッセージの Base64 コンテンツをデコードし、デコードされたコンテンツをコピーします。",
            right: {
                decode: "デコードされたコピー (左クリック) / Base64 デコード (右クリック)",
                copy: "Base64 をデコード (左クリック) / デコードされたコピー (右クリック)"
            },
            option: {
                clickMethod: {
                    label: "クリック方法",
                    description: "ボタンを変更して、メッセージの Base64 コンテンツをデコードします。",
                    left: "左クリックして Base64 コンテンツをデコードします。",
                    right: "右クリックして Base64 コンテンツをデコードします。"
                }
            },
            modal: {
                title: "デコードされたBase64コンテンツ",
                content: "デコードされたコンテンツ",
                copy: "デコードされたコンテンツをコピー {{index}}",
                copied: "デコードされたコンテンツがクリップボードにコピーされました。"
            }
        },
        decor: {
            name: "Decor",
            description: "独自のカスタム アバター装飾を作成して使用するか、プリセットからお気に入りを選択します。",
            presetPart: "{{name}} プリセットの一部",
            createdBy: "作成者: {{author}}",
            copy: "プリセットIDをコピー",
            file: "ファイル",
            your: {
                title: "あなたの装飾",
                subtitle: "独自の装飾を右クリックして削除できます。"
            },
            option: {
                changeDecoration: {
                    label: "装飾を変更する",
                    description: "アバターの装飾を変更するには、装飾を有効にしてクライアントを再起動します。",
                    also: "{{profiles}} ページから Decor デコレーションにアクセスすることもできます。",
                    profiles: "プロフィール"
                },
                baseUrl: {
                    label: "ベース URL",
                    description: "装飾APIのURL"
                },
                agreedToGuidelines: {
                    label: "ガイドラインへの同意",
                    description: "ガイドラインに同意しました"
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
                    body: "{{decoration}} を削除してもよろしいですか?",
                    confirm: "消去",
                    cancel: "キャンセル"
                },
                logout: {
                    title: "ログアウト",
                    body: "Decor からログアウトしてもよろしいですか?",
                    confirm: "ログアウト",
                    cancel: "キャンセル"
                }
            },
            button: {
                change: "装飾を変更する",
                remove: "装飾を削除する",
                apply: "適用する",
                cancel: "キャンセル",
                browse: "ブラウズ",
                submit: "レビューのために送信する",
                continue: "続く",
                back: "戻る"
            },
            tooltip: {
                pendingReview: "審査待ちの装飾がすでにあります",
                pending: "審査待ち"
            },
            join: {
                tooltip: "Decor の Discord サーバーに参加して、デコレーションのレビューや新しいプリセットがリリースされたときに通知を受け取ります",
                button: "ディスコードサーバー"
            },
            create: {
                title: "装飾の作成",
                notViolate: "装飾を送信する前に、装飾が {{guidelines}} に違反していないことを確認してください。",
                guidelines: "ガイドライン",
                file: "ファイルはAPNGまたはPNGである必要があります。",
                fileHolder: "ファイルを選択してください",
                name: "This name will be used when referring to this decoration.",
                nameHolder: "コンパニオンキューブ",
                nameTitle: "名前"
            },
            help: {
                update: "デコレーションのレビューに関する最新情報を受け取るには、{{server}} に参加し、ダイレクト メッセージを許可してください。",
                server: "Decor の Discord サーバー"
            },
            guidelines: {
                hold: "持続する",
                suspended: "装飾を送信すると、{{guidelines}} に同意したことになります。これらのガイドラインを読まない場合、今後、アカウントが追加のデコレーションの作成を停止される可能性があります。",
                guidelines: "ガイドライン"
            }
        },
        demonstration: {
            name: "Demonstration",
            description: "テーマのスクリーンショットを撮るためのプラグイン - 画像とテキストを識別する検閲者。",
            toolbox: {
                toggle: "デモを切り替えます"
            },
            keycode: "キーコードを変更するには、{{keycode}} をチェックしてください。",
            this: "このツール",
            okay: "わかった！",
            option: {
                keyBind: {
                    label: "Key Bind",
                    description: "押すとテーマを切り替えるキー"
                },
                soundVolume: {
                    label: "音量",
                    description: "トグル音の大きさ (0 で無効)"
                },
                showConfirmationModal: {
                    label: "確認モーダルを表示",
                    description: "ショートカットを思い出させるためにモーダルを表示する"
                }
            },
            switch: {
                note: "この設定は後で再度有効にすることができます",
                disable: "モーダルを無効にしますか?"
            },
            shortcut: "これにより、すべてのテキストが検閲されます。これを無効にするには、次のショートカットを覚えておいてください。"
        },
        devCompanion: {
            name: "DevCompanion",
            description: "Dev Companion プラグイン。動作しないものや奇妙な動作 (おそらくバグ) がある場合は、ping または DM で MutanPlex に報告してください。ありがとう！",
            reconnect: "再接続",
            option: {
                notifyOnAutoConnect: {
                    label: "自動接続時に通知する",
                    description: "Dev Companion が自動的に接続したときに通知するかどうか。"
                },
                usePatchedModule: {
                    label: "パッチ適用されたモジュールを使用する",
                    description: "抽出リクエストでは、元のモジュールではなく、現在のパッチが適用されたモジュール (パッチが適用されている場合) を返信します。"
                },
                reloadAfterToggle: {
                    label: "切り替え後のリロード",
                    description: "「プラグインの無効化/有効化」コマンドを受信した後、リロードします。"
                }
            },
            toast: {
                title: "開発コンパニオンが接続されました",
                connected: "WebSocketに接続されています",
                disconnected: "開発コンパニオンが切断されました",
                error: "開発コンパニオンエラー",
                reload: "リロードが必要です",
                failed: "依存関係を開始できませんでした: {{failures}}",
                close: "近い",
                stopping: "プラグイン {{plugin}} の停止中にエラーが発生しました",
                starting: "プラグイン {{plugin}} の起動中にエラーが発生しました",
                noMessage: "エラーメッセージなし",
                noReason: "理由は示されていません"
            }
        },
        disableCallIdle: {
            name: "DisableCallIdle",
            description: "3 分後に DM 音声通話から自動的に除外され、AFK 音声チャネルに移動されることを無効にします。"
        },
        disableCameras: {
            name: "DisableCameras",
            description: "デフォルトで通話中のカメラを無効にします"
        },
        discordDevBanner: {
            name: "DiscordDevBanner",
            description: "ビルド ID を表示する Discord 開発者バナーを有効にします",
            about: "Discord 開発者バナーの形式。次の変数を使用できます。",
            preview: "プレビュー:",
            empty: "形式を空にすることはできません。",
            variables: {
                discord: {
                    title: "Discord変数",
                    icon: "不和アイコン",
                    banner: "開発バナーアイコン",
                    channel: "Discord ビルド チャネル (例: Stable)",
                    build: "Discord のビルド番号 (例: 123456)",
                    hash: "Discord ビルド ハッシュ (例: 123456)"
                },
                plexcord: {
                    title: "プレックスコード変数",
                    icon: "プレックスコードのアイコン",
                    name: "Name of Plexcord",
                    version: "Plexcord のバージョン (例: 1.0.0)",
                    hash: "Plexcord ビルド ハッシュ (例: 123456)",
                    platform: "Plexcord が実行されているプラ​​ットフォーム (例: Dev Build)"
                },
                plextron: {
                    title: "Plextron 固有の変数",
                    hashShort: "Plextron ビルド ハッシュ (例: 123456789)",
                    platformType: "Plextron が実行されているプラ​​ットフォーム (例: Dev Build)"
                },
                client: {
                    title: "クライアント変数",
                    icon: "デスクトップアイコン",
                    name: "The name of the client (e.g. Discord Canary)",
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
            name: "DontFilterMe",
            description: "メッセージに AutoMod プリセット リスト内の用語が含まれている場合に警告します",
            alert: {
                title: "持続する！",
                content: "メッセージには、AutoMod プリセット リストの用語 (用語: '{{trigger}}') が含まれています。",
                content2: "メッセージがブロックされ、サーバーのモデレーターによって管理される可能性が高くなります。",
                confirm: "とにかく送信する",
                cancel: "キャンセル"
            }
        },
        dontRoundMyTimestamps: {
            name: "DontRoundMyTimestamps",
            description: "相対タイムスタンプは常に切り捨てられるため、7.6y は 8y ではなく 7y になります。"
        },
        dragFavoriteEmotes: {
            name: "DragFavoriteEmotes",
            description: "お気に入りのエモートにドラッグ アンド ドロップ機能を追加します"
        },
        dragify: {
            name: "Dragify",
            description: "ユーザー、チャネル、サーバーをチャットにドロップして、メンションや招待を挿入します。",
            option: {
                userOutput: {
                    label: "ユーザー出力",
                    description: "ユーザードロップ出力。",
                    mention: "言及",
                    id: "ユーザーID"
                },
                channelOutput: {
                    label: "チャンネル出力",
                    description: "チャンネルドロップ出力。",
                    mention: "#channel メンション",
                    link: "チャンネルリンク",
                },
                inviteExpireAfter: {
                    label: "招待の有効期限は次のとおりです",
                    description: "招待の有効期限",
                    never: "一度もない",
                    thirtyMinutes: "30分",
                    oneHour: "1時間",
                    sixHours: "6時間",
                    twelveHours: "12時間",
                    oneDay: "1日",
                    sevenDays: "7日間"
                },
                inviteMaxUses: {
                    label: "最大使用量を招待する",
                    description: "招待の最大使用量",
                    noLimit: "制限なし",
                    one: "1 用途",
                    five: "5つの用途",
                    ten: "10 の用途",
                    twentyFive: "25 の用途",
                    fifty: "50 の用途",
                    hundred: "100回の使用"
                },
                inviteTemporaryMembership: {
                    label: "一時的なメンバーシップを招待する",
                    description: "一時的なメンバーシップを付与します。",
                },
                reuseExistingInvites: {
                    label: "既存の招待を再利用",
                    description: "新しい招待を作成する代わりに、既存の招待を再利用します。"
                },
                allowChatBodyDrop: {
                    label: "チャット本文のドロップを許可する",
                    description: "メインのチャット本文にドロップしてテキストを挿入できるようにします。"
                }
            },
            toast: {
                failed: {
                    drop: "Dragify がドロップの処理に失敗しました。",
                },
                invite: {
                    created: "招待状が作成されました。",
                    unable: "招待状を作成できません。",
                    noChannel: "招待できるチャンネルがありません。",
                }
            },
            ghost: {
                user: "ユーザー",
                server: "サーバ",
                dm: "ダイレクトメッセージ",
                badge: {
                    channel: "チャネル",
                    thread: "糸",
                    voice: "声",
                    forum: "フォーラム",
                    media: "メディア",
                    announcement: "発表",
                    dm: "DMで",
                    user: "ユーザー",
                    server: "サーバ"
                }
            }
        },
        elementHighlighter: {
            name: "ElementHighlighter",
            description: "要素を簡単に強調表示して検査します。",
            modal: {
                recording: "録音中...",
                reset: "リセット"
            },
            option: {
                keybind: {
                    label: "キーバインド",
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
                    description: "計算されたフォントファミリーとフォントサイズを表示します"
                },
                showPadding: {
                    label: "パディングを表示",
                    description: "要素のパディング値を表示する"
                },
                showMargin: {
                    label: "余白を表示",
                    description: "要素のマージン値を表示します"
                },
                showBorderRadius: {
                    label: "境界線の半径を表示",
                    description: "要素の境界半径の値を表示します"
                },
                showPosition: {
                    label: "位置を表示",
                    description: "要素の CSS 位置タイプと Z インデックスを表示します。"
                },
                showDisplay: {
                    label: "表示を表示",
                    description: "要素の表示タイプをフレックスまたはグリッドのプロパティとともに表示します"
                }
            },
            toast: {
                copied: {
                    color: "カラーをクリップボードにコピーしました!",
                }
            }
        },
        exitSounds: {
            name: "ExitSounds",
            description: "音声を切断するとサウンドボードサウンドを再生します。",
            button: "グローバル終了音として設定",
            toast: {
                failedToPlay: "おっと！何か問題が発生しました。"
            },
            option: {
                soundGuildId: {
                    label: "サウンドギルドID",
                    description: "サウンドを含むサーバーを選択します。",
                    placeholder: "サーバーを選択してください..."
                },
                soundId: {
                    label: "サウンドID",
                    description: "再生したいサウンドのIDを入力します。",
                    placeholder: "サウンド ID を入力してください..."
                }
            }
        },
        experiments: {
            name: "Experiments",
            description: "Discord の実験やその他の開発専用機能へのアクセスを有効にします。",
            modal: {
                about: {
                    title: "詳細情報",
                    body: "{{key}} 経由で Discord の DevTools を開くことができます"
                },
                warning: {
                    title: "持続する！！",
                    body: "実験は未リリースの Discord 機能です。これらは機能しなかったり、クライアントが壊れたり、アカウントが無効になったりする可能性があります。",
                    notReponsible: "実験は、何をしようとしているのかわかっている場合にのみ使用してください。 Plexcord は、実験を有効にしたことによって生じた損害に対して責任を負いません。",
                    useAtOwnRisk: "実験が何をするのかわからない場合は、無視してください。実験が何をするのかについても私たちに尋ねないでください。おそらく私たちには分かりません。",
                    serverSideFeatures: "いいえ、「クライアントに送信」ボックスをチェックするなどのサーバー側の機能は使用できません。"
                }
            },
            option: {
                toolbarDevMenu: {
                    label: "ツールバーの開発メニュー",
                    description: "ヘルプ (?) ツールバー ボタン (チャットの右上) を Discord の開発者メニューに変更します。"
                }
            }
        },
        exportMessages: {
            name: "ExportMessages",
            description: "単一のメッセージ、ユーザーからのすべてのメッセージ、またはすべてのチャネル メッセージなど、メッセージをファイルにエクスポートできます。",
            option: {
                maxMessages: {
                    label: "最大メッセージ数",
                    description: "エクスポートするメッセージの最大数 (0 = 無制限)"
                },
                includeAttachments: {
                    label: "添付ファイルを含める",
                    description: "エクスポートに添付ファイル情報を含める"
                },
                includeEmbeds: {
                    label: "埋め込みを含める",
                    description: "エクスポートに埋め込み情報を含める"
                },
                includeReactions: {
                    label: "リアクションを含める",
                    description: "エクスポートに反応情報を含める"
                },
                includeComponents: {
                    label: "コンポーネントを含める",
                    description: "エクスポートにコンポーネント情報を含める"
                }
            },
            message: {
                invalid: "無効なメッセージ — 作成者がいません",
                unknownUser: "不明なユーザー",
                botEmbed: "ボット埋め込みメッセージ",
                attachments: "添付ファイル",
                unknown: "未知",
                noUrl: "URLがありません",
                embeds: "埋め込む",
                title: "タイトル",
                description: "説明",
                url: "URL",
                footer: "フッター",
                author: "著者",
                fields: "フィールド",
                components: "コンポーネント",
                component: "成分",
                interactiveElement: "インタラクティブ要素",
                reactions: "反応",
                errorFormatting: "フォーマットエラーメッセージ",
                unknownError: "不明なエラー",
                header: "{{titlePrefix}} {{displayName}} で {{channelName}}",
                from: "からのメッセージ",
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
                    notFoundUser: "このチャンネルではこのユーザーからのメッセージが見つかりませんでした",
                    notFoundChannel: "このチャンネルにはメッセージが見つかりませんでした"
                },
                failed: {
                    title: "メッセージのエクスポート",
                    body: "メッセージのエクスポートに失敗しました"
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
                exportAll: "{{user}} からのすべてのメッセージをエクスポートする",
                user: "ユーザー",
                exportAllChannel: "すべてのチャネルメッセージをエクスポート"
            }
        },
        expressionCloner: {
            name: "ExpressionCloner",
            description: "エモートとステッカーを自分のサーバーに複製できます (右クリック)",
            modal: {
                title: "カスタム名",
                invalidName: "名前は 2 ～ 32 文字で、英数字のみを含む必要があります。"
            },
            toast: {
                success: "{{name}} から {{guild}} へのクローンが正常に作成されました。",
                yourServer: "あなたのサーバー",
                failed: "クローン作成に失敗しました:",
                console: "何か問題が発生しました (コンソールを確認してください!)"
            },
            context: {
                clone: "クローン{{type}}",
                cloneName: "クローン{{data}}"
            }
        },
        f8break: {
            name: "F8Break",
            description: "DevTools (+ ブレークポイント) を開いた状態で F8 を押すと、クライアントが一時停止します。"
        },
        fakeNitro: {
            name: "FakeNitro",
            description: "偽の絵文字/ステッカーの送信、Nitro テーマの使用、Nitro 品質でのストリーミングが可能になります",
            option: {
                enableEmojiBypass: {
                    label: "絵文字バイパスを有効にする",
                    description: "偽の絵文字の送信を許可します (カスタム絵文字を使用するための不足している権限もバイパスします)"
                },
                emojiSize: {
                    label: "絵文字のサイズ",
                    description: "送信時の絵文字のサイズ"
                },
                transformEmojis: {
                    label: "絵文字を変換する",
                    description: "偽の絵文字を本物の絵文字に変換するかどうか"
                },
                enableStickerBypass: {
                    label: "ステッカーのバイパスを有効にする",
                    description: "偽のステッカーの送信を許可します (ステッカーを使用するための不足している許可も回避します)"
                },
                stickerSize: {
                    label: "ステッカーのサイズ",
                    description: "送信時のステッカーのサイズ"
                },
                transformStickers: {
                    label: "変身ステッカー",
                    description: "偽のステッカーを本物のステッカーに変換するかどうか"
                },
                transformCompoundSentence: {
                    label: "複合文の変換",
                    description: "偽のステッカーと絵文字を複文（偽の絵文字やステッカーのリンクだけではなく、より多くの内容を含む文）で変換するかどうか"
                },
                enableStreamQualityBypass: {
                    label: "ストリーム品質バイパスを有効にする",
                    description: "Nitro 品質でのストリーミングを許可する"
                },
                useStickerHyperLinks: {
                    label: "ステッカーのハイパーリンクを使用する",
                    description: "偽のステッカーを送信するときにハイパーリンクを使用するかどうか"
                },
                useEmojiHyperLinks: {
                    label: "絵文字のハイパーリンクを使用する",
                    description: "偽の絵文字を送信するときにハイパーリンクを使用するかどうか"
                },
                hyperLinkText: {
                    label: "ハイパーリンクテキスト",
                    description: "ハイパーリンクに使用するテキスト。 {{NAME}} は絵文字/ステッカー名に置き換えられます。"
                },
                disableEmbedPermissionCheck: {
                    label: "埋め込み権限チェックを無効にする",
                    description: "偽の絵文字やステッカーを送信するときに埋め込み許可チェックを無効にするかどうか"
                }
            },
            modal: {
                sticker: "これは FakeNitro ステッカーで、あなただけの本物のステッカーのようにレンダリングされます。プラグインを使用していないユーザーへのリンクとして表示されます。",
                emoji: "これは FakeNitro 絵文字で、あなただけのために本物の絵文字のようにレンダリングされます。プラグインを使用していないユーザーへのリンクとして表示されます。"
            },
            alert: {
                notice: {
                    title: "持続する！",
                    body: "FakeNitro 絵文字またはステッカーを含むメッセージを送信/編集しようとしています。ただし、現在のチャンネルにリンクを埋め込む権限がありません。このメッセージを送信してもよろしいですか? FakeNitro アイテムはリンクとしてのみ表示されます。",
                    footer: "このアラートはFakeNitro設定で無効にすることができます",
                    confirm: "とにかく送信する",
                    cancel: "キャンセル",
                    secondaryConfirm: "二度と表示しないでください"
                },
                apngSticker: {
                    title: "持続する！",
                    body: "このメッセージにはアニメーションの FakeNitro ステッカーが含まれており、現在のチャンネルにファイルを添付する権限がないため、送信できません。ステッカーを剥がしてからお進みください。"
                }
            }
        },
        fakeProfileThemes: {
            name: "FakeProfileThemes",
            description: "目に見えない 3y3 エンコーディングのおかげでプロフィールの色を非表示にすることでプロフィールのテーマを設定できるようになります",
            button: {
                copy: "3y3をコピー"
            },
            modal: {
                usage: "使用法",
                preview: "プレビュー",
                intro: "このプラグインを有効にすると、互換性のあるプラグインを使用している他の人のプロフィールにカスタムカラーが表示されるようになります。",
                setColor: "独自の色を設定するには:",
                step1: "• 以下のカラーピッカーを使用して色を選択します",
                step2: "• [{{copy}}] ボタンをクリックします。",
                step3: "• 非表示のテキストを自己紹介の任意の場所に貼り付けます",
                pickers: "カラーピッカー",
                primary: "主要な",
                accent: "アクセント"
            },
            option: {
                nitroFirst: {
                    label: "ニトロファースト",
                    description: "両方が存在する場合のデフォルトのカラー ソース",
                    nitro: "ニトロカラー",
                    fake: "フェイクカラー"
                }
            }
        },
        fakeProfileThemesAndEffects: {
            name: "FakeProfileThemesAndEffects",
            description: "目に見えない 3y3 エンコーディングのおかげでプロフィールの色と効果を非表示にすることで、プロフィールのテーマとプロフィール効果を許可します",
            option: {
                prioritizeNitro: {
                    label: "ニトロを優先する",
                    description: "優先するソース",
                    nitro: "ニトロ",
                    aboutMe: "私について"
                },
                hideBuilder: {
                    label: "ビルダーを隠す",
                    description: "ユーザー プロファイルおよびサーバー プロファイル設定ページで FPTE Builder を非表示にする"
                }
            },
            modal: {
                primary: "主要な",
                accent: "アクセント",
                effect: "効果",
                usage: {
                    title: "使用法",
                    intro: "このプラグインを有効にすると、このプラグインを使用している他の人のプロフィールにカスタム テーマの色と効果が表示されます。",
                    setColor: "独自の色と効果を設定するには:",
                    step1: "プロフィール設定に移動します",
                    step2: "FPTE Builder を使用してプロフィールのテーマの色と効果を選択します",
                    step3: "{{copy}} ボタンをクリックします",
                    step4: "非表示のテキストを自己紹介の任意の場所に貼り付けます"
                }
            },
            toast: {
                copied: "FPTE がクリップボードにコピーされました。",
                empty: "FPTE Builder is empty; nothing to copy!"
            },
            button: {
                copyFPTE: "FPTEをコピー",
                reset: "リセット",
                preview: "FPTE ビルダー プレビュー",
                buildBackwards: "下位互換性のある FPTE を構築する",
                moreCharacters: "もっと文字を使います"
            }
        },
        fastDeleteChannels: {
            name: "FastDeleteChannels",
            description: "チャンネルを削除するためのゴミ箱アイコンを追加します",
            option: {
                keyBind: {
                    label: "キーバインド",
                    description: "押すとゴミ箱を切り替えるキー。"
                },
                reqCtrl: {
                    label: "制御が必要",
                    description: "Control キーを押し続ける必要があります。"
                },
                reqShift: {
                    label: "シフトが必要",
                    description: "Shift キーを押し続ける必要があります。"
                },
                reqAlt: {
                    label: "Alt が必要",
                    description: "Alt キーを押し続ける必要があります。"
                }
            }
        },
        favoriteEmojiFirst: {
            name: "FavouriteEmojiFirst",
            description: "お気に入りの絵文字を絵文字オートコンプリートの最初に配置し、絵文字のエイリアスも提供します。",
            option: {
                aliases: {
                    label: "別名",
                    description: "絵文字のエイリアスを管理します。"
                },
                clearAll: {
                    label: "すべてクリア",
                    description: "すべてのエイリアスを削除します。"
                }
            },
            modal: {
                clear: {
                    title: "すべてのエイリアスを削除",
                    description: "これにより、保存したすべての絵文字エイリアスが削除されます。",
                    confirm: "すべてのエイリアスを削除する"
                },
                set: {
                    title: "エイリアスの設定",
                    description: "{{emoji}} のエイリアスを設定する",
                    placeholder: "エイリアス、例: 'ハッピー'",
                    save: "保存",
                    error: "重複したエイリアス"
                }
            },
            toast: {
                set: "{{emoji}} に設定されたエイリアス",
                clearAll: "すべての絵文字エイリアスを削除しました",
                failedDeleted: "エイリアスの削除に失敗しました",
                removed: "削除されたエイリアス: {{alias}}",
                failedRemove: "エイリアスの削除に失敗しました",
                duplicate: "重複したエイリアス",
                failedSave: "エイリアスの保存に失敗しました。"
            },
            button: {
                edit: "エイリアスの編集",
                set: "エイリアスの設定"
            }
        },
        favoriteGifSearch: {
            name: "FavouriteGifSearch",
            description: "お気に入りの GIF に検索バーを追加します。",
            placeholder: "お気に入りのGIFを検索",
            option: {
                searchOption: {
                    label: "検索オプション",
                    description: "URLの検索したい部分",
                    url: "URL全体",
                    path: "パスのみ (/somegif.gif)",
                    hostandpath: "ホストとパス (tenor.com somgif.gif)"
                }
            }
        },
        favouriteAnything: {
            name: "FavouriteAnything",
            description: "任意の画像をお気に入りに追加"
        },
        fileDownloadButton: {
            name: "FileDownloadButton",
            description: "ファイルの右上隅にダウンロード ボタンを追加します"
        },
        findReply: {
            name: "FindReply",
            description: "チャネル内のメッセージに対する最も古い返信にジャンプします (過去の会話をより簡単に追跡できます)。",
            context: {
                jump: "返信にジャンプ"
            },
            toast: {
                navigate: "下部パネルを使用して、返信間を移動します。",
                container: "コンテナ要素が見つかりませんでした。",
                couldntFind: "返信メッセージが見つかりませんでした。"
            },
            option: {
                includePings: {
                    label: "Ping を含める",
                    description: "作成者に直接 @ 送信されたメッセージも検索します"
                },
                includeAuthor: {
                    label: "著者を含める",
                    description: "また、その正確なメッセージだけでなく、作成者に返信するメッセージ全般も検索します。"
                },
                hideButtonIfNoReply: {
                    label: "Hide Button If No Reply",
                    description: "メッセージに返信がない場合はボタンを非表示にします"
                }
            }
        },
        fixCodeblockGap: {
            name: "FixCodeblockGap",
            description: "コードブロックとその下のテキストの間のギャップを削除します"
        },
        fixFileExtensions: {
            name: "FixFileExtensions",
            description: "可能であれば、互換性のあるサポートされている形式に名前を変更してファイル拡張子を修正します"
        },
        fixImagesQuality: {
            name: "FixImagesQuality",
            description: "オリジナルのソースを強制的に使用することで画像の品質を向上させます",
            option: {
                originalImagesInChat: {
                    label: "チャット内の元の画像",
                    description: "チャットにもオリジナル画像を読み込みます。警告: 上記の注意事項をお読みください"
                }
            },
            modal: {
                about: {
                    title: "デフォルトの動作は次のとおりです。",
                    body: "— チャットでは、最適化されたフル解像度の画像がロードされます。",
                    body2: "— 画像モーダルでは、元の画像がロードされます。",
                    body3: "チャットで元の画像を有効にすることもできますが、次の注意点に注意してください。",
                    warning: "&mdash; Animated images (GIF, WebP, etc.) in chat will always animate, regardless of whether the app is focused.",
                    warning2: "— 遅延が発生する可能性があります。",
                }
            }
        },
        fixSpotifyEmbeds: {
            name: "FixSpotifyEmbeds",
            description: "Fixes Spotify embeds being incredibly loud by letting you customise the volume",
            option: {
                volume: {
                    label: "音量",
                    description: "Spotify 埋め込みに設定する音量 %。 10%を超えるとかなりうるさいです"
                }
            }
        },
        fixYoutubeEmbeds: {
            name: "FixYoutubeEmbeds",
            description: "Discord での表示がブロックされている YouTube 動画 (UMG など) をバイパスします。"
        },
        followUser: {
            name: "FollowUser",
            description: "ユーザーのコンテキスト メニューに [フォロー] オプションを追加して、常に同じ VC 内に表示されるようにします。",
            indicatorTooltip: "{{user}} をフォローしています (クリックして手動でトリガーし、右クリックしてフォローを解除します)",
            unknownUser: "不明なユーザー",
            option: {
                executeOnFollow: {
                    label: "フォロー時に実行",
                    description: "ユーザーをフォローするときは必ず同じ VC にいることを確認してください"
                },
                onlyManualTrigger: {
                    label: "手動トリガーのみ",
                    description: "インジケーターのクリック時にのみトリガーします"
                },
                followLeave: {
                    label: "フォローする",
                    description: "フォローしたユーザーが離脱した場合も離脱します"
                },
                autoMoveBack: {
                    label: "自動で戻る",
                    description: "移動すると、フォローしているユーザーのVCに自動的に戻ります"
                },
                followUserId: {
                    label: "ユーザーIDをフォローする",
                    description: "フォローしたユーザーID"
                },
                channelFull: {
                    label: "チャンネルがいっぱい",
                    description: "チャンネルがいっぱいでなくなったら、そのチャンネルに移動しようとします"
                }
            },
            toast: {
                channelFull: "チャンネルがいっぱいです",
                newVc: "ユーザーをフォローして新しい音声チャネルにアクセスしました",
                insufficientPermissions: "音声チャネルに入る権限が不十分です",
                sameVc: "あなたはすでに同じチャンネルにいます",
                disconnect: "ユーザーをフォローしたままにしました。切断された",
                notFollowing: "ユーザーをフォローしましたが、切断には従いませんでした",
                notVc: "フォローされているユーザーは音声チャンネルに参加していません"
            },
            context: {
                follow: "ユーザーをフォローする",
                unfollow: "ユーザーのフォローを解除する"
            }
        },
        fontLoader: {
            name: "FontLoader",
            description: "Google Fontsから任意のフォントを読み込みます",
            option: {
                selectedFont: {
                    label: "選択したフォント",
                    description: "現在選択されているフォント"
                },
                fontSearch: {
                    label: "フォント検索",
                    description: "Google Fontsを検索して選択します"
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
                    title: "Google フォントを検索",
                    description: "フォントを選択して適用します",
                    placeholder: "フォントを検索...",
                    previewText: "素早い茶色のキツネが怠惰な犬を飛び越える",
                    authors: "{{authors}} 著"
                }
            }
        },
        forceOwnerCrown: {
            name: "ForceOwnerCrown",
            description: "サーバーが大きい場合でも、ユーザー名の横に所有者の王冠を強制的に表示します。"
        },
        forwardAnywhere: {
            name: "ForwardAnywhere",
            description: "転送が失敗した場合は、通常のメッセージとして送信します。 NSFW 転送も許可します",
            option: {
                forwardPreface: {
                    label: "前書き",
                    description: "転送されるコンテンツの先頭に何を付ける必要があるか"
                }
            },
            context: {
                attachments: "添付ファイル",
                forwarded: "から転送されました"
            }
        },
        freaky: {
            name: "Freaky",
            description: "/freaky コマンドを使用して、奇妙なフォントでメッセージを送信できるようにします。",
            command: {
                freaky: "それはおかしいです。",
                message: "メッセージを奇抜なものにする"
            },
            option: {
                addFreakyEnding: {
                    label: "気まぐれなエンディングを追加",
                    description: "最後に👅または❤️を追加します"
                }
            }
        },
        frequentQuickSwitcher: {
            name: "Frequent Quick Switcher",
            description: "クイック スイッチャーの結果を書き換えてフィルタリングし、最も頻繁に使用されるチャネルにします。"
        },
        friendCloud: {
            name: "FriendCloud",
            description: "/friendcloud コマンドを追加して、最も頻繁にやり取りするユーザーを視覚化します",
            command: {
                friendcloud: {
                    description: "友達のクラウドを視覚化する",
                    count: "表示するユーザーの数",
                    mustHigher: "カウントは 1 以上である必要があります。",
                    noAffinities: "アフィニティが見つかりません。 [プライバシー設定](<https://support.discord.com/hc/en-us/articles/21864805694999-Data-used-to- Improvement-Discord>) を確認してください。",
                    noValid: "アフィニティに有効なユーザーが見つかりません。 [プライバシー設定](<https://support.discord.com/hc/en-us/articles/21864805694999-Data-used-to- Improvement-Discord>) を確認してください。",
                    genFailed: "画像を生成できませんでした:c"
                }
            }
        },
        friendCodes: {
            name: "FriendCodes",
            description: "フレンドコードを生成して簡単に友達を追加",
            card: {
                expires: "期限切れ <t:{{expiration}}:R> • {{uses}}/{{maxUses}} は使用します",
                copy: "コピー",
                copied: "コピーしました！",
                codes: "あなたのフレンドコード",
                count: "フレンドコード - {{invites}}",
                create: "フレンドコードを作成する",
                revoke: "すべてのフレンドコードを取り消す",
                loading: "読み込み中...",
                dontHave: "フレンドコードがありません。"
            }
        },
        friendInvites: {
            name: "FriendInvites",
            description: "スラッシュ コマンド (/create 友人招待、/view 友人招待、/revoke 友人招待) を使用して友人招待リンクを作成および管理します。",
            command: {
                create: {
                    description: "友達の招待リンクを生成します。",
                    message: "discord.gg/{{code}}`\n· 期限切れ <t:{{expiration}}:R>\n· 最大使用回数: {{uses}}"
                },
                view: {
                    description: "生成されたすべての友達招待のリストを表示します。",
                    message: "_discord.gg/{{code}}_ \n· 有効期限: <t:{{expiration}}:R> \n· 使用回数: {{uses}}/{{maxUses}}",
                    noInvites: "アクティブな友達の招待はありません。"
                },
                revoke: {
                    description: "生成されたすべての友達の招待を取り消します。",
                    message: "友達の招待はすべて取り消されました。"
                }
            }
        },
        friendshipRanks: {
            name: "FriendshipRanks",
            description: "ユーザーとの友達期間を示すバッジを追加します",
            badge: {
                sprout: {
                    name: "Sprout",
                    description: "あなたの友情はまだ始まったばかりです"
                },
                blooming: {
                    name: "Blooming",
                    description: "あなたの友情はそこまで来ています！ (1ヶ月)"
                },
                burning: {
                    name: "Burning",
                    description: "あなたの友情は終末速度に達しました (3 か月)"
                },
                fighter: {
                    name: "Fighter",
                    description: "あなたの友情は強いです（6か月）"
                },
                star: {
                    name: "Star",
                    description: "あなたの友情はしばらく（1年間）続いています"
                },
                royal: {
                    name: "Royal",
                    description: "あなたの友情は濃いときも薄いときもあり、丸 2 年間でした。"
                },
                besties: {
                    name: "Besties",
                    description: "これをどうやって管理するのでしょうか？ (5年)"
                }
            }
        },
        friendsSince: {
            name: "FriendsSince",
            description: "ユーザー ポップアウトにいつ誰かと友達になったかが表示されます",
            section: "以来の友達"
        },
        friendTags: {
            name: "FriendTags",
            description: "& で検索を開始すると、クイック スイッチャーでカスタム タグでフィルタリングできます。",
            modal: {
                name: "Name",
                users: "ユーザー (カンマ区切り)",
                userlist: "ユーザーリスト (削除するユーザーをクリックします)",
                remove: "取り除く",
                add: "追加",
                tag: "タグ",
                removeFrom: "から削除",
                addTo: "に追加"
            },
            option: {
                tagConfiguration: {
                    label: "タグの設定",
                    description: "タグ構成コンポーネント"
                }
            }
        },
        fullSearchContext: {
            name: "FullSearchContext",
            description: "メッセージ検索結果のメッセージ コンテキスト メニューに、期待されるすべてのオプションが含まれるようにします。"
        },
        fullUserInChatbox: {
            name: "FullUserInChatbox",
            description: "チャットボックス内のユーザーのメンションに、左/右クリックなどの機能が追加されます。"
        },
        fullVCPFP: {
            name: "FullVCPFP",
            description: "アバターが VC タイル全体を占めるようにします",
            option: {
                useServerProfileAvatars: {
                    label: "サーバープロファイルアバターを使用する",
                    description: "利用可能な場合は、ギルド音声チャネルでサーバー プロファイル アバターを使用します。"
                }
            }
        },
        gameActivityToggle: {
            name: "GameActivityToggle",
            description: "ゲームアクティビティを表示/非表示にするためのトグルをユーザーポップアウトに追加します",
            tooltip: "ゲームアクティビティの切り替え",
            gameActivity: {
                enabled: "ゲームアクティビティが有効になりました",
                disabled: "ゲームアクティビティが無効になっています"
            },
            option: {
                oldIcon: {
                    label: "古いアイコン",
                    description: "Discord アイコンの再設計前の古いアイコン スタイルを使用する"
                },
                location: {
                    label: "位置",
                    description: "ゲームアクティビティトグルボタンを表示する場所",
                    panel: "ミュート/聴覚障害者の隣",
                    toolbox: "Plexcord ツールボックス"
                }
            }
        },
        ghosted: {
            name: "Ghosted",
            description: "DMに返事をしないとかわいいオバケが現れる",
            modal: {
                title: "ゴースト化されたユーザー",
                no: "ゴースト化されたユーザーは存在しない",
                unghost: "幽霊でない",
                unknown: "未知",
                unnamedGroup: "名前のないグループ",
                unknownUser: "不明なユーザー",
                clearAll: "すべてクリア",
                noGhost: "ここには幽霊はいないよ！",
                clear: "クリア"
            },
            option: {
                showIndicator: {
                    label: "インジケーターを表示",
                    description: "サーバーリストの上部にゴーストカウンターを表示します"
                },
                showDmIcons: {
                    label: "DMアイコンを表示",
                    description: "個々の DM の横にゴースト アイコンを表示する"
                },
                ignoreGroupDms: {
                    label: "グループDMを無視する",
                    description: "すべてのグループ DM をゴースティングから除外する"
                },
                exemptedChannels: {
                    label: "免除されるチャンネル",
                    description: "ゴースティングを除外するチャネル ID のカンマ区切りリスト (DM チャネルを右クリックして ID をコピーします)"
                },
                ignoreBots: {
                    label: "ボットを無視する",
                    description: "ボットからのDMを無視する"
                },
                maxInactiveTimeMs: {
                    label: "最大非アクティブ時間",
                    description: "この時間内にアクティブなゴースト DM のみを表示",
                    no: "制限なし",
                    oneHour: "1時間",
                    oneDay: "1日",
                    oneWeek: "1週間",
                    oneMonth: "1ヶ月"
                }
            }
        },
        gifCollections: {
            name: "GifCollection",
            description: "GIF のコレクションを作成できます",
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
                    gifs: "GIF",
                    created: "作成日",
                    updated: "最終更新日",
                    close: "近い",
                    rename: "名前を変更する",
                    move: "コレクションに移動",
                    select: "アイテムの移動先のコレクションを選択してください"
                },
                gif: {
                    information: "情報",
                    added: "追加日時",
                    width: "幅",
                    height: "身長",
                    close: "近い"
                }
            },
            option: {
                itemPrefix: {
                    label: "項目の接頭辞",
                    description: "GIF アイテムのプレフィックス"
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
                    label: "停止警告",
                    description: "削除警告を停止する"
                },
                showCopyImageLink: {
                    label: "画像のコピーリンクを表示",
                    description: "コンテキスト メニューに {{copyImageLink}} オプションを表示する"
                },
                preventDuplicates: {
                    label: "重複の防止",
                    description: "同じ GIF をコレクションに複数回追加しないようにする"
                },
                defaultEmptyCollectionImage: {
                    label: "デフォルトの空のコレクション画像",
                    description: "コレクションに画像/GIF がない場合に表示される画像/GIF"
                },
                collectionsSortType: {
                    label: "コレクションの並べ替えタイプ",
                    description: "コレクションの並べ替えの種類"
                },
                collectionsSortOrder: {
                    label: "コレクションの並べ替え順序",
                    description: "コレクションのソート順序"
                },
                collectionsSort: {
                    label: "コレクションの並べ替え",
                    description: "コレクションの並べ替え方法を決定する",
                    title: "コレクションの並べ替え",
                    sortDescription: "コレクションの並べ替え基準を選択してください",
                    sortBy: "並べ替え",
                    name: "Name",
                    creationDate: "作成日",
                    modifiedDate: "変更日",
                    ascending: "上昇",
                    descending: "降順"
                },
                importGifs: {
                    label: "GIFをインポートする",
                    description: "コレクションのインポート",
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
                already: "そのコレクションはすでに存在します",
                alreadyCollection: "そのGIFはすでにそのコレクションにあります"
            },
            modal: {
                create: {
                    title: "コレクションの作成",
                    name: "Collection Name",
                    create: "作成する"
                },
                rename: {
                    title: "コレクションの名前を変更",
                    name: "New Collection Name",
                    warning: "名前は 24 文字以下にする必要があります",
                    rename: "名前を変更する"
                }
            },
            alert: {
                import: {
                    title: "本気ですか？",
                    body: "コレクションをインポートすると、現在のコレクションが上書きされます。",
                    confirm: "輸入",
                    cancel: "どうでも"
                },
                reset: {
                    title: "本気ですか？",
                    body: "コレクションをリセットすると、すべてのコレクションが削除されます。",
                    confirm: "リセット",
                    cancel: "どうでも"
                },
                delete: {
                    title: "本気ですか？",
                    deleteBody: "本当にこのコレクションを削除してもよろしいですか?",
                    removeBody: "本当にこの項目を削除してもよろしいですか?",
                    confirm: "消去",
                    remove: "取り除く",
                    cancel: "どうでも"
                }
            }
        },
        gifPaste: {
            name: "GifPaste",
            description: "GIF をチャット ボックスに直接貼り付けることができます"
        },
        gifRoulette: {
            name: "GifRoulette",
            description: "お気に入りからランダムな GIF を送信するコマンドを追加します。10 分の 1 の確率でサーバーの所有者に ping を送信します。",
            command: {
                gifRoulette: {
                    description: "運命を誘惑してGIFを送る"
                }
            },
            option: {
                pingOwnerChance: {
                    label: "Ping オーナー チャンス",
                    description: "10 分の 1 の確率でギルドのオーナーに ping を送信する必要があるかどうか (ああ、だめだ)"
                }
            }
        },
        gitHubRepos: {
            name: "GitHubRepos",
            description: "ユーザーのプロファイルにパブリック GitHub リポジトリを表示します",
            loading: "リポジトリをロードしています...",
            option: {
                showStars: {
                    label: "ショースター",
                    description: "リポジトリのスターを表示"
                },
                showLanguage: {
                    label: "言語を表示",
                    description: "リポジトリの主言語を表示"
                },
                showInMiniProfile: {
                    label: "ミニプロフィールで表示",
                    description: "ミニプロファイルポップアウトにリポジトリを表示"
                },
                showRepositoryTab: {
                    label: "「リポジトリ」タブを表示",
                    description: "プロファイルモーダルに「リポジトリ」タブを表示 (有効にすると接続のボタンが非表示になります)"
                }
            },
            error: {
                error: "エラー",
                render: "エラー: GitHubRepos のレンダリングに失敗しました"
            },
            button: {
                show: "GitHub リポジトリを表示する",
                repositories: "GitHub リポジトリ",
                more: "もっと見る",
                only: "上位 {{length}}/{{total}} のみを表示"
            },
            modal: {
                title: "{{user}} の GitHub リポジトリ",
                repository: "リポジトリ",
                description: "説明",
                language: "言語",
                stars: "星",
                viewOnGitHub: "GitHub で見る",
                close: "近い"
            }
        },
        googleThat: {
            name: "GoogleThat",
            description: "インターネット検索リンクを送信するコマンドを追加します",
            command: {
                googleThat: {
                    description: "検索エンジンのリンクを送信する",
                    query: "検索クエリ"
                }
            },
            option: {
                hyperlink: {
                    label: "ハイパーリンク",
                    description: "送信されたリンクがクエリをラベルとしてハイパーリンクするかどうか"
                },
                embed: {
                    label: "埋め込む",
                    description: "送信されたリンクが埋め込みをレンダリングする必要があるかどうか"
                },
                defaultEngine: {
                    label: "デフォルトのエンジン",
                    description: "使用する検索エンジン"
                },
                customEngineURL: {
                    label: "カスタムエンジンのURL",
                    description: "使用したいエンジンのURL"
                }
            }
        },
        greetStickerPicker: {
            name: "GreetStickerPicker",
            description: "「手を振ってこんにちは!」を右クリックすると、ランダムなステッカーだけでなく、任意の挨拶ステッカーを使用できるようになります。ボタン",
            mode: {
                greet: "挨拶する",
                message: "メッセージ"
            },
            option: {
                greetMode: {
                    label: "グリーティングモード",
                    description: "挨拶モードを選択する",
                    greet: "挨拶（挨拶は3回まで）",
                    message: "メッセージ（スパムを歓迎できます）"
                }
            },
            context: {
                label: "挨拶ステッカーピッカー",
                mode: "グリーティングモード",
                stickers: "挨拶スタンプ",
                multi: "邪悪なマルチグリーティング",
                send: "挨拶を送る"
            }
        },
        guildPickerDumper: {
            name: "GuildPickerDumper",
            description: "サーバーの絵文字とステッカーをダンプおよびダウンロードするためのコンテキスト メニュー。",
            context: {
                download: {
                    emoji: "絵文字をダウンロード",
                    sticker: "ステッカーをダウンロードする"
                }
            }
        },
        guildTagSettings: {
            name: "GuildTagSettings",
            description: "ギルドタグを非表示にしたり、ギルドタグを採用するためのプロンプトを無効にしたりするなど、ギルドタグの設定をいくつか追加します。",
            option: {
                hideTags: {
                    label: "タグを非表示にする",
                    description: "タグを非表示にする"
                },
                disableAdoptTagPrompt: {
                    label: "タグの採用プロンプトを無効にする",
                    description: "タグを採用するためのプロンプトを無効にする"
                }
            }
        },
        hideChatButtons: {
            name: "HideChatButtons",
            description: "チャットボタンを非表示にできる",
            tooltip: {
                close: "近い",
                open: "開ける"
            },
            option: {
                color: {
                    label: "色",
                    description: "開口部を赤く染める"
                },
                open: {
                    label: "開ける",
                    description: "デフォルトで開かれる"
                }
            }
        },
        hideMedia: {
            name: "HideMedia",
            description: "ホバー ボタンを使用して個々のメッセージの添付ファイルと埋め込みを非表示にする",
            show: "メディアを表示する",
            hide: "メディアを隠す",
            hidden: "メディア非表示"
        },
        hideMessages: {
            name: "HideMessages",
            description: "再起動するまでメッセージを一時的に非表示にするプラグイン。",
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
            name: "HideServers",
            description: "サーバーリストからサーバーを非表示にします",
            context: {
                hide: "サーバーを非表示にする",
                unhide: "サーバーの再表示",
                folder: {
                    hide: "フォルダーを隠す",
                    unhide: "フォルダを再表示する"
                }
            },
            option: {
                showIndicator: {
                    label: "インジケーターを表示",
                    description: "リストの下部にあるサーバーを再表示するためのメニューを表示します"
                },
                guildsList: {
                    label: "ギルドリスト",
                    description: "隠しサーバーを削除する"
                },
                resetHidden: {
                    label: "非表示をリセット",
                    description: "リストからすべての非表示ギルドを削除します",
                    button: "隠しサーバーをリセットする"
                }
            },
            button: {
                hidden: "隠れた",
                hiddenServers: "隠しサーバー",
                remove: "取り除く",
                folder: "フォルダ",
                removeAll: "すべて削除",
                guilds: "ギルド",
                noHiddenServers: "隠しサーバーはありません"
            }
        },
        holyNotes: {
            name: "HolyNotes",
            description: "Holy Notes ではメッセージを保存できます",
            main: "主要",
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
                deleteNote: "メモの削除",
                moveNote: "ノートの移動",
                moveTo: "{{key}} に移動",
                copyId: "IDをコピーする"
            },
            modal: {
                error: {
                    generic: "メモの解析中にエラーが発生しました。詳細についてはコンソールを確認してください。",
                    easter: "メモは見つかりませんでした。共感バナナはあなたのためにここにいます。",
                    empty: "このノートブックにはメモが保存されていませんでした。"
                },
                help: {
                    title: "ヘルプ",
                    description: "ホーリーノートの使い方を学ぶ",
                    addingNotes: "メモを追加する",
                    addingNotesText: "メモを追加するには、メッセージを右クリックし、[メッセージのメモ] 項目の上にマウスを置き、メッセージをメモしたいノートブック名のボタンをクリックします。",
                    prototype: "プロトタイプ",
                    noteMessage: "[メッセージにメモ] ボタンをクリックすると、デフォルトでメインにメモが送信されます。",
                    deletingNotes: "メモを削除する",
                    deletingNotesText: "注: ノートを右クリックして「ノートの削除」を押すか、キーボードの「DELETE」キーを押したままノートをクリックすることができます。まるで魔法のようです！",
                    movingNotes: "メモの移動",
                    movingNotesText: "メモを移動するには、メモを右クリックし、「メモの移動」項目の上にマウスを置き、メモの移動先のノートブックに対応するボタンをクリックします。",
                    jumpToMessage: "メッセージへジャンプ",
                    jumpToMessageText: "メモが元々あった場所にジャンプするには、メモを右クリックして [メッセージにジャンプ] をクリックします。"
                },
                notebook: {
                    title: "ノート",
                    search: "メッセージを検索...",
                    options: "並べ替えオプション",
                    label: "ソートメニュー",
                    filteredOf: "{{filteredCount}}/{{noteCount}} メモ{{s}}",
                    note: "{{noteCount}} 注{{s}}",
                    ada: "昇順 / 追加日",
                    amd: "昇順 / メッセージ日付",
                    dda: "降順 / 追加日",
                    dmd: "降順 / メッセージ日付",
                    change: "並べ替えの変更",
                    ascending: "上昇",
                    descending: "降順",
                    dateAdded: "追加日",
                    messageDate: "メッセージの日付"
                },
                create: {
                    title: "ノートブックの作成",
                    description: "新しいノートブックの名前を入力します",
                    placeholder: "ノートブック名"
                },
                delete: {
                    title: "{{notebookName}} を削除しますか?",
                    description: "{{noteCount}} 注{{s}} は完全に削除されます",
                    button: "消去"
                },
                tabs: {
                    label: "ノートブックのタブ"
                }
            },
            toast: {
                saved: "{{notebook}} にメッセージが正常に追加されました",
                deleted: "{{notebook}} からメモが正常に削除されました",
                moved: "メモを {{from}} から {{to}} に正常に移動しました。",
                exists: "ノートブック {{notebookName}} はすでに存在します。",
                created: "{{notebookName}} が正常に作成されました。",
                deletedNotebook: "{{notebookName}} が正常に削除されました。",
                refreshed: "アバターが正常に更新されました。",
                deletedAll: "すべてのメモが正常に削除されました。",
                imported: "メモが正常にインポートされました。",
                invalid: "メモのインポートに失敗しました。"
            },
            toolbox: {
                action: "ノートを開く"
            }
        },
        homeTyping: {
            name: "HomeTyping",
            description: "DM内の誰かが入力している場合、ホームボタンを入力インジケーターに変更します。"
        },
        iconViewer: {
            name: "IconViewer",
            description: "すべてのアイコンをプレビューするための新しいタブを設定に追加します。",
            toolbox: "アイコンタブを開く",
            iconFinder: "アイコンファインダー",
            about: {
                title: "特徴",
                preview: "プレビューアイコン",
                list: {
                    copy: "アイコン名とCSS変数をコピーする",
                    download: "さまざまな形式 (SVG、PNG、GIF など) でアイコンをダウンロードします。",
                    premade: "プラグイン用に見つかった既製のアイコンをコピーします",
                    find: "関数コンテキストによるアイコンの検索",
                    search: "色名を右クリックして色を検索します",
                    special: "特別な感謝"
                }
            },
            context: {
                icon: {
                    options: "アイコンのオプション",
                    log: "コンソールにログを記録する",
                    save: "名前を付けて保存...",
                    rightClick: "アイコンを右クリックして変更します",
                    usage: "使用法",
                    click: "クリックしてコピー",
                    copied: "コピーしました！",
                    actions: "アクション"
                }
            },
            modal: {
                label: "関数コンテキストによる検索",
                search: "{{count}} アイコンを検索...",
                function: "関数",
                iconViewer: {
                    colors: "アイコンビューアの色",
                    unknown: "未知",
                }
            }
        },
        idleAutoRestart: {
            name: "IdleAutoRestart",
            description: "設定可能な時間アイドル状態になった後、クライアントを自動的に再起動しますが、VC 内での再起動は回避されます。",
            option: {
                isEnabled: {
                    label: "有効です",
                    description: "アイドル後の自動再起動を有効にする"
                },
                idleMinutes: {
                    label: "アイドル時間（分）",
                    description: "再起動するまでの非アクティブな時間 (VC を使用していない場合)"
                }
            },
            toolbox: {
                disable: "アイドル時の自動再起動を無効にする",
                enable: "アイドル時の自動再起動を有効にする"
            }
        },
        ignoreActivities: {
            name: "IgnoreActivities",
            description: "アクティビティがステータスにのみ表示されるのを無視します。 [登録済みのゲームとアクティビティ] タブからどのゲームを特に無視するかを設定するか、以下の一般設定を使用できます。",
            modal: {
                import: {
                    title: "CustomRPC プラグインのアプリケーション ID をフィルター リストにインポートします"
                },
                filter: {
                    title: "フィルタリスト",
                    description: "フィルタリングするアクティビティ ID のカンマ区切りリスト (特定の RPC アクティビティおよび CustomRPC をフィルタリングする場合に便利)"
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
                    label: "CustomRPC のインポート"
                },
                listMode: {
                    label: "リストモード",
                    description: "フィルターリストの適用方法を選択します",
                    blacklist: "ブラックリスト (リストにあるもののみを無視)",
                    whitelist: "ホワイトリスト (リストにあるもの以外をすべて無視します)"
                },
                idList: {
                    label: "IDリスト"
                },
                ignorePlaying: {
                    label: "再生を無視する",
                    description: "すべての再生アクティビティを無視します (これらは通常、ゲームおよび RPC アクティビティです)"
                },
                ignoreStreaming: {
                    label: "ストリーミングを無視する",
                    description: "すべてのストリーミング アクティビティを無視する"
                },
                ignoreListening: {
                    label: "リスニングを無視する",
                    description: "すべてのリスニングアクティビティを無視します (これらは通常 Spotify アクティビティです)"
                },
                ignoreWatching: {
                    label: "監視を無視する",
                    description: "すべての監視アクティビティを無視する"
                },
                ignoreCompeting: {
                    label: "競合を無視する",
                    description: "競合するアクティビティをすべて無視します (これらは通常、特別なゲーム アクティビティです)"
                },
                ignoredActivities: {
                    label: "無視されたアクティビティ"
                }
            }
        },
        ignoreCalls: {
            name: "IgnoreCalls",
            description: "特定のユーザーまたは DM グループからの通話を無視できます。",
            option: {
                permanentlyIgnoredUsers: {
                    label: "永久に無視されたユーザー",
                    description: "永久に無視する必要があるユーザー ID (カンマ + スペース)"
                }
            },
            button: {
                ignore: "無視する",
                temporarilyIgnore: "通話を一時的に無視する",
                permanentlyIgnore: "通話を永久に無視する"
            }
        },
        iLoveSpam: {
            name: "ILoveSpam",
            description: "「スパマーの可能性がある」からのメッセージを隠さないでください"
        },
        imageFilename: {
            name: "ImageFilename",
            description: "画像や GIF の上にマウスを移動すると、そのファイル名がツールチップとして表示されます",
            option: {
                showFullUrl: {
                    label: "完全な URL を表示",
                    description: "ファイル名だけではなく、画像の完全な URL を表示します。 GIF には通常、意味のあるファイル名がないため、GIF に対しては常に有効になります。"
                }
            }
        },
        imageLink: {
            name: "ImageLink",
            description: "たとえそれが唯一のコンテンツであっても、メッセージ内の画像リンクを非表示にしないでください"
        },
        imageZoom: {
            name: "ImageZoom",
            description: "画像や GIF にズームインしたり、画像のメタデータを表示したりできます。スクロール ホイールを使用してズームインし、Shift + スクロール ホイールを使用してレンズの半径を拡大します。",
            option: {
                saveZoomValues: {
                    label: "ズーム値の保存",
                    description: "ズームとレンズサイズの値を保存するかどうか"
                },
                invertScroll: {
                    label: "反転スクロール",
                    description: "スクロールを反転する"
                },
                nearestNeighbour: {
                    label: "最近隣",
                    description: "画像をスケーリングするときに最近傍補間を使用する"
                },
                square: {
                    label: "四角",
                    description: "レンズを四角くする"
                },
                zoom: {
                    label: "ズーム",
                    description: "レンズのズーム"
                },
                size: {
                    label: "サイズ",
                    description: "レンズの半径・サイズ"
                },
                zoomSpeed: {
                    label: "ズーム速度",
                    description: "ズーム/レンズサイズの変化の速さ"
                },
                showMetadata: {
                    label: "メタデータの表示",
                    description: "選択した画像をダブルクリックすると画像メタデータを表示します"
                }
            },
            context: {
                square: "スクエアレンズ",
                nearest: "最近隣",
                zoom: "ズーム",
                size: "レンズサイズ",
                zoomSpeed: "ズーム速度",
                showImageMetadata: "画像メタデータを表示",
                view: "メタデータの表示",
                loading: "読み込み中...",
                unknown: "未知",
                sizeHTML: "サイズ",
                dimensions: "寸法",
                filename: "ファイル名"
            }
        },
        imgToGif: {
            name: "ImgToGif",
            description: "任意の画像から GIF を作成する /imgtogif スラッシュ コマンドを追加します",
            command: {
                imgToGif: {
                    description: "画像をGIFに変換できます",
                    image: "使用する画像添付ファイル",
                    width: "GIFの幅",
                    height: "GIFの高さ"
                }
            },
            error: {
                noImage: "画像が指定されていません!",
                notImage: "アップロードは画像ではありません"
            }
        },
        implicitRelationships: {
            name: "ImplicitRelationships",
            description: "[友達] タブに暗黙の関係が表示されます。",
            option: {
                sortByAffinity: {
                    label: "アフィニティで並べ替え",
                    description: "暗黙の関係を自分との親和性によって並べ替えるかどうか。"
                }
            },
            implicit: "暗黙"
        },
        inRole: {
            name: "InRole",
            description: "ロールのコンテキスト メニューまたは /inrole コマンドを使用して、ロールに誰が所属しているかを確認します (プラグイン情報を参照してください)。",
            command: {
                inrole: {
                    description: "誰が役割を担っているかを知る",
                    role: "役割",
                    noGuild: "サーバー内にいることを確認してください。"
                }
            },
            context: {
                view: "役割内のメンバーを表示"
            },
            modal: {
                about: {
                    title: "制限事項",
                    description: "サーバー上で MOD 権限がなく、サーバーが大規模 (メンバーが 100 人を超える) 場合、プラグインは次のように制限される可能性があります。",
                    list: {
                        one: "オフラインメンバーは表示されません",
                        two: "デフォルトでは最大 100 人のメンバーがリストされます。さらに取得するには、メンバー リストを下にスクロールしてさらにメンバーを読み込みます。",
                        three: "ただし、フレンドはステータスに関係なく常に表示されます。"
                    }
                },
                member: {
                    title: "役割メンバー",
                    noMembers: "そのロールを持つオンライン キャッシュされたメンバーが見つからなかったようです。より多くのユーザーをキャッシュするには、メンバー リストを下にスクロールしてみてください。"
                }
            }
        },
        instantScreenshare: {
            name: "InstantScreenshare",
            description: "デスクトップ ソース、ウィンドウ、ビデオ入力デバイス (カメラ、キャプチャ カード) をサポートし、音声チャンネルに参加すると即座に画面共有します。",
            modal: {
                linux: {
                    title: "Linuxの場合",
                    body: "Wayland の場合、画面共有の選択のみがポップアップ表示されます。",
                    bodyTwo: "X11 の場合、機能する場合と機能しない場合があります。:shrug:"
                },
                videoDevices: {
                    title: "ビデオ入力デバイス",
                    body: "設定で有効にすると、カメラとキャプチャ カード (Elgato HD60X など) をサポートします"
                },
                regardingSound: {
                    title: "サウンドとプレビューの設定について",
                    body: "Discord が設定および使用する設定を使用して、ストリームのプレビューとサウンドを有効にするかどうかを決定します。"
                }
            },
            option: {
                streamMedia: {
                    label: "ストリーミングするメディア ソース",
                    description: "見つからない場合はメイン画面にリセットします",
                    loading: "メディア ソースを読み込んでいます...",
                    none: "メディア ソースが見つかりません",
                    placeholder: "ストリーミングするメディア ソースを選択してください"
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
                    description: "音声チャンネルに参加すると自動的に耳が聞こえなくなります（ミュートにもなります）"
                },
                instantScreenshare: {
                    label: "インスタント画面共有",
                    description: "自動画面共有機能を有効にする"
                },
                keybindScreenshare: {
                    label: "キーバインド画面共有",
                    description: "Discordのキーバインド設定でのキーバインドによる画面共有"
                },
                focusDiscord: {
                    label: "フォーカスディスコード",
                    description: "Discord がフォーカスされている場合にのみキーバインドで画面共有を開始します"
                },
                toolboxManagement: {
                    label: "ツールボックス管理",
                    description: "インスタント画面共有を有効/無効にする"
                }
            },
            toolbox: {
                label: "インスタント画面共有",
                toast: "インスタント画面共有 {{state}}",
                enabled: "有効",
                disabled: "無効"
            }
        },
        invisibleChat: {
            name: "InvisibleChat",
            description: "疑わしい方法でメッセージを暗号化してください。",
            option: {
                savedPasswords: {
                    label: "保存されたパスワード",
                    description: "保存されたパスワード (「,」で区切る)"
                }
            },
            button: {
                encrypt: "メッセージの暗号化",
                decrypt: "メッセージを復号化する",
                hidden: "隠しメッセージインジケーター (InvisibleChat)"
            },
            tooltip: {
                hidden: "このメッセージには隠されたメッセージがあります！ (目に見えないチャット)"
            },
            embed: {
                title: "復号化されたメッセージ",
                footer: "InvisibleChat で送信"
            },
            modal: {
                encrypt: {
                    title: "メッセージの暗号化",
                    secret: "秘密",
                    cover: "表紙（2文字以上!!）",
                    password: "パスワード",
                    dontUseCover: "カバーは使わないでください",
                    send: "送信",
                    cancel: "キャンセル"
                },
                decrypt: {
                    title: "メッセージを復号化する",
                    with: "暗号化されたメッセージ",
                    password: "パスワード",
                    decrypt: "復号化",
                    cancel: "キャンセル"
                }
            }
        },
        inviteDefaults: {
            name: "InviteDefaults",
            description: "サーバー招待を作成するときにデフォルト値を編集できます。",
            option: {
                inviteDuration: {
                    label: "招待期間",
                    description: "サーバー招待のデフォルトの期間",
                    thirtyMinutes: "30分",
                    oneHour: "1時間",
                    sixHours: "6時間",
                    twelveHours: "12時間",
                    oneDay: "1日",
                    sevenDays: "7日間",
                    forever: "永遠に"
                },
                maxUses: {
                    label: "最大使用回数",
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
                    description: "サーバー招待用のデフォルトの一時メンバーシップ"
                }
            }
        },
        ircColors: {
            name: "IrcColors",
            description: "IRC クライアントのように、チャット内のユーザー名の色を一意にします",
            option: {
                lightness: {
                    label: "軽さ",
                    description: "明度 (%)。色が明るすぎたり暗すぎたりする場合は変更してください"
                },
                memberListColors: {
                    label: "メンバーリストの色",
                    description: "メンバーリストの役割の色を置き換える"
                },
                applyColorOnlyToUsersWithoutColor: {
                    label: "色を持たないユーザーにのみ色を適用する",
                    description: "事前定義された色を持たないユーザーにのみ色を適用する"
                },
                applyColorOnlyInDms: {
                    label: "DM にのみカラーを適用する",
                    description: "色を適用するのはダイレクト メッセージのみです。サーバーに色を適用しないでください。"
                }
            }
        },
        iRememberYou: {
            name: "IRememberYou",
            description: "紛失した場合に備えて、通信していたすべてのユーザー (サーバーを含む) をローカルに保存します。",
            section: {
                description: "あなたがメンションまたは返信したユーザー、またはあなたが所属するサーバーを所有しているユーザー (サーバー所有者*)、またはギルドのメンバーのリストを提供します。",
                empty: "今は空いています。",
                tooltip: "{{user}}、{{updatedAtContent}} に更新",
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
                title: "エディタ",
                filter: "タグ、ユーザー名、IDによるフィルタリング",
                button: {
                    validate: "検証して保存する",
                    cancel: "キャンセル",
                    openEditor: "エディタを開く",
                    resetData: "ストレージをリセットする",
                    sure: "本気ですか？"
                }
            }
        },
        jumpTo: {
            name: "JumpTo",
            description: "チャンネル/DM の先頭または末尾にジャンプするコンテキスト メニュー オプションを追加します。",
            context: {
                top: "最初のメッセージにジャンプ",
                bottom: "最新のメッセージにジャンプ",
                noMessages: "このチャンネルではこのユーザーからのメッセージが見つかりませんでした。",
                searchFailed: "メッセージの検索に失敗しました。"
            }
        },
        keepCurrentChannel: {
            name: "KeepCurrentChannel",
            description: "アカウントを切り替えるか、Discord を読み込む前に、以前のチャンネルに移動してみてください。"
        },
        keyboardSounds: {
            name: "KeyboardSounds",
            description: "OperaGX または osu! を追加します。キーボードを入力するときの効果音。",
            option: {
                volume: {
                    label: "音量",
                    description: "鍵盤音の音量"
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
            name: "KeywordNotify",
            description: "指定されたメッセージが特定のキーワードまたは正規表現に一致する場合に通知を送信します",
            idHolder: "ID",
            keywordEntry: "キーワード入力",
            regexHolder: "例|正規表現",
            ignoreCase: "大文字と小文字を無視する",
            whiteblackLabel: "ホワイトリスト/ブラックリスト",
            tab: {
                title: "キーワード",
                clearAll: "すべてクリア"
            },
            button: {
                addId: "IDの追加",
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
                    label: "保管量",
                    description: "ログに保存するメッセージの量"
                },
                keywords: {
                    label: "キーワード",
                    description: "キーワードを管理する"
                }
            }
        },
        lastOnline: {
            name: "LastOnline",
            description: "DM リスト、ギルド、GDM メンバー リストのユーザー名の下に最後のオンライン インジケーターを追加します",
            unit: {
                d: "日",
                h: "時間",
                m: "分"
            },
            online: "{{formattedTime}}前にオンライン"
        },
        listenBrainzRPC: {
            name: "ListenBrainzRPC",
            description: "ListenBrainz のリッチなプレゼンスのための小さなプラグイン",
            about: {
                title: "MusicBrainz APIについて",
                description: "MusicBrainz API には API キーは必要ありませんが、{{link}} が必要です。ほとんどの場合、電子メール アドレスで十分です。",
                userAgent: "意味のあるユーザーエージェント文字列"
            },
            option: {
                username: {
                    label: "ユーザー名",
                    description: "ListenBrainzのユーザー名"
                },
                mbContact: {
                    label: "MB連絡先",
                    description: "ListenBrainz の連絡先"
                },
                shareUsername: {
                    label: "ユーザー名を共有する",
                    description: "ListenBrainz プロフィールへのリンクを表示 (他のユーザーにのみ表示される場合があります)"
                },
                shareSong: {
                    label: "ソングをシェアする",
                    description: "ListenBrainz 上の現在の曲へのリンクを表示します (他のユーザーにのみ表示される場合があります)"
                },
                hideWithSpotify: {
                    label: "Spotify で隠す",
                    description: "Spotify が実行中の場合、ListenBrainz の存在を非表示にする"
                },
                hideWithActivity: {
                    label: "アクティビティで隠す",
                    description: "他のプレゼンスがある場合は、ListenBrainz のプレゼンスを非表示にします"
                },
                useTimeBar: {
                    label: "タイムバーを使用する",
                    description: "トラックの継続時間を使用してタイムバーを表示します (リスニングステータスを使用する必要があります)"
                },
                statusName: {
                    label: "ステータス名",
                    description: "カスタムステータステキスト"
                },
                nameFormat: {
                    label: "名前の形式",
                    description: "ステータス名に曲名とアーティスト名を表示",
                    custom: "カスタムステータス名を使用する",
                    artistSong: "「アーティスト - 曲」の形式を使用します",
                    songArtist: "「曲 - アーティスト」形式を使用します",
                    artistOnly: "アーティスト名のみを使用する",
                    songOnly: "曲名のみを使用する",
                    albumName: "アルバム名を使用します (曲にアルバムがない場合はカスタム ステータス テキストに戻ります)"
                },
                useListeningStatus: {
                    label: "リスニングステータスを使用する",
                    description: "「再生中」ではなく「視聴中」ステータスを表示する"
                },
                missingArt: {
                    label: "欠けている芸術",
                    description: "アルバムまたはアルバムアートが見つからない場合",
                    listenbrainzLogo: "大きな ListenBrainz ロゴを使用する",
                    generic: "一般的なプレースホルダーを使用する"
                },
                useLogo: {
                    label: "ロゴを使用する",
                    description: "アルバム アートに ListenBrainz ロゴを表示する"
                }
            }
        },
        loadingQuotes: {
            name: "LoadingQuotes",
            description: "Discordの読み込み中の引用符を置き換える",
            option: {
                replaceEvents: {
                    label: "イベントの置換",
                    description: "このプラグインは、特別なイベントをテーマにした引用を含むイベント中にも適用する必要がありますか? （例：ハロウィン）"
                },
                enablePluginPresetQuotes: {
                    label: "プラグインのプリセット引用符を有効にする",
                    description: "このプラグインによってプリセットされた引用符を有効にする"
                },
                enableDiscordPresetQuotes: {
                    label: "Discord のプリセット引用符を有効にする",
                    description: "Discord のプリセット引用符を有効にする (イベント中のイベント引用文を含む)"
                },
                additionalQuotes: {
                    label: "追加の見積もり",
                    description: "追加のカスタム引用符が表示される可能性があり、以下の区切り文字で区切られます。"
                },
                additionalQuotesDelimiter: {
                    label: "追加の引用符区切り文字",
                    description: "追加の引用符の区切り文字"
                }
            }
        },
        loginWithQR: {
            name: "LoginWithQR",
            description: "モバイルと同じように、ログイン QR コードをスキャンして別のデバイスにログインできます。",
            option: {
                scanQr: {
                    label: "QRコードをスキャン",
                    description: "QRコードをスキャンしてください",
                    notEnabled: "プラグインを有効にしてクライアントを再起動し、ログイン QR コードをスキャンします"
                }
            },
            neverScan: "別のユーザーまたはアプリケーションからのログイン QR コードを決してスキャンしないでください。",
            hold: "長押ししてログインを確認する",
            scanning: "走査...",
            stopScanning: "スキャンを停止する",
            usingWebcam: "Webカメラを使用してスキャンする",
            dragDrop: "ここに画像をドラッグ アンド ドロップするか、クリックして画像を選択します",
            orPaste: "または、クリップボードから画像を貼り付けます。"
        },
        mediaPlaybackSpeed: {
            name: "MediaPlaybackSpeed",
            description: "メディア埋め込みの (デフォルト) 再生速度を変更できます。",
            playbackSpeed: "再生速度",
            context: {
                label: "再生速度の制御"
            },
            option: {
                defaultVoiceMessageSpeed: {
                    label: "デフォルトの音声メッセージ速度",
                    description: "音声メッセージ"
                },
                defaultVideoSpeed: {
                    label: "デフォルトのビデオ速度",
                    description: "動画"
                },
                defaultAudioSpeed: {
                    label: "デフォルトの音声速度",
                    description: "オーディオ"
                }
            }
        },
        memberCount: {
            name: "MemberCount",
            description: "オンライン メンバー、合計メンバー、サーバー上の音声チャネルのユーザーの数をメンバー リストとツールチップに表示します。",
            option: {
                toolTip: {
                    label: "ツールチップ",
                    description: "サーバーのツールチップにメンバー数を表示する"
                },
                memberList: {
                    label: "メンバー一覧",
                    description: "メンバーリストのヘッダーにメンバー数を表示する"
                },
                voiceActivity: {
                    label: "音声アクティビティ",
                    description: "音声チャネルのユーザー数を表示する"
                }
            },
            onlineThisChannel: "{{formattedOnlineCount}} このチャンネルでオンライン",
            totalMembers: "{{formattedTotalCount}} サーバー メンバーの合計",
            totalVoice: "{{formattedVoiceCount}} メンバーの声"
        },
        mentionAvatars: {
            name: "MentionAvatars",
            description: "メンション内にユーザーのアバターとロールのアイコンを表示します",
            option: {
                showAtSymbol: {
                    label: "@シンボルを表示",
                    description: "ユーザーのメンションに @ 記号を表示するかどうか"
                }
            }
        },
        meow: {
            name: "Meow",
            description: "チャットでニャーと鳴くチャットバーボタンを追加します",
            button: {
                meow: "ニャー"
            }
        },
        messageBurst: {
            name: "MessageBurst",
            description: "以前にメッセージを送信した人がいない場合、一定期間内に送信されたメッセージを以前に送信したメッセージと結合します。",
            option: {
                timePeriod: {
                    label: "期間",
                    description: "バーストの継続時間 (秒単位)。"
                },
                shouldMergeWithAttachment: {
                    label: "添付ファイルと結合する",
                    description: "最後のメッセージに添付ファイルがある場合、メッセージをマージする必要がありますか?"
                },
                useSpace: {
                    label: "スペースを使用する",
                    description: "結合するときにメッセージ間に改行の代わりにスペースを追加するかどうか。"
                }
            }
        },
        messageClickActions: {
            name: "MessageClickActions",
            description: "Backspace キーを押しながらクリックして削除し、ダブルクリックして編集/返信します",
            option: {
                singleClickAction: {
                    label: "シングルクリックアクション",
                    description: "シングルクリック時のアクション (メッセージ)"
                },
                singleClickModifier: {
                    label: "シングルクリックモディファイア",
                    description: "シングルクリックアクション (メッセージ) に必要な修飾子"
                },
                singleClickOthersAction: {
                    label: "シングルクリックアクション（その他）",
                    description: "シングルクリック時のアクション (他人のメッセージ)"
                },
                singleClickOthersModifier: {
                    label: "シングルクリックモディファイア（その他）",
                    description: "シングルクリックアクションに必要な修飾子 (他の人のメッセージ)"
                },
                doubleClickAction: {
                    label: "ダブルクリックアクション",
                    description: "ダブルクリック時のアクション (メッセージ)"
                },
                doubleClickOthersAction: {
                    label: "ダブルクリックアクション（その他）",
                    description: "ダブルクリック時の動作（他人のメッセージ）"
                },
                doubleClickModifier: {
                    label: "ダブルクリック修飾子",
                    description: "ダブルクリックアクションには修飾子が必要です"
                },
                tripleClickAction: {
                    label: "トリプルクリックアクション",
                    description: "トリプルクリック時のアクション"
                },
                tripleClickModifier: {
                    label: "トリプルクリックモディファイア",
                    description: "トリプルクリックアクションには修飾子が必要です"
                },
                reactEmoji: {
                    label: "絵文字に反応する",
                    description: "反応アクションに使用する絵文字"
                },
                addAdditionalReacts: {
                    label: "追加の反応を追加する",
                    description: "設定済みのリアクション絵文字も追加します"
                },
                additionalReactEmojis: {
                    label: "追加の React 絵文字",
                    description: "React アクションを使用するときに追加する追加の絵文字 (カンマ/改行区切り、最大 {{count}})"
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
                    label: "ダブルクリックホールドのしきい値",
                    description: "ダブルクリック操作の最大保持時間 (ミリ秒)。長押しするとテキストの選択が可能になります"
                },
                deferDoubleClickForTriple: {
                    label: "ダブルクリックを延期してトリプルにする",
                    description: "ダブルクリックを遅らせてトリプルクリック操作を許可します (オフの場合はトリプルクリックが無効になります)"
                },
                selectionHoldTimeout: {
                    label: "選択保持タイムアウト",
                    description: "テキスト選択を許可するタイムアウト (ミリ秒)"
                },
                quoteWithReply: {
                    label: "返信付き引用",
                    description: "引用する場合はメッセージにも返信してください"
                },
                useSelectionForQuote: {
                    label: "選択範囲を引用に使用する",
                    description: "引用する場合、可能な場合は選択したテキストを使用します"
                }
            },
            actions: {
                none: "なし",
                delete: "消去",
                copyLink: "リンクをコピー",
                copyID: "IDをコピーする",
                copyContent: "コンテンツをコピーする",
                copyUserID: "ユーザーIDをコピーする",
                edit: "編集",
                reply: "返事",
                react: "反応する",
                openThread: "オープンスレッド",
                openTab: "タブを開く",
                quote: "引用",
                pin: "ピン"
            },
            missingPermissions: {
                react: "反応できません: 権限がありません",
                pin: "ピン留めできません: 権限がありません",
            },
            cannotQuote: "このメッセージ タイプは引用できません",
            copy: {
                messageId: "メッセージIDがコピーされました!",
                messageContent: "メッセージの内容がコピーされました!",
                userId: "ユーザーIDがコピーされました!"
            },
            linkCopied: "リンクがコピーされました!"
        },
        messageColors: {
            name: "MessageColors",
            description: "メッセージ内に#FF0042のようなカラーコードを表示します",
            option: {
                renderType: {
                    label: "レンダータイプ",
                    description: "色のレンダリング方法",
                    textColor: "文字の色",
                    block: "近くのブロック",
                    backgroundColor: "背景色"
                },
                enableShortHexCodes: {
                    label: "短い 16 進コードを有効にする",
                    description: "#39f のような 3 文字の 16 進コードを有効にする"
                },
                blockView: {
                    label: "ブロックビュータイプ",
                    description: "カラーブロックの表示方法",
                    right: "右側",
                    left: "左側",
                    both: "両側"
                }
            }
        },
        messageFetchTimer: {
            name: "MessageFetchTimer",
            description: "現在のチャネルのメッセージをフェッチするのにかかった時間を示します。",
            option: {
                showIcon: {
                    label: "アイコンを表示",
                    description: "メッセージバーにフェッチ時間アイコンを表示"
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
            loaded: "{{time}}ms ({{timeAgo}}) でロードされたメッセージ",
            day: "{{s}}日前",
            hour: "{{s}}時間前",
            minute: "分{{s}}前",
            justNow: "ちょうど今"
        },
        messageLatency: {
            name: "MessageLatency",
            description: "送信に n 秒以上かかったメッセージのインジケーターを表示します",
            day: "日",
            days: "日",
            hour: "時間",
            hours: "時間",
            minute: "分",
            minutes: "分",
            second: "2番",
            seconds: "秒",
            millisecond: "ミリ秒",
            milliseconds: "ミリ秒",
            and: "そして",
            oldKotlinDetected: "ユーザーは古い Discord Android クライアントを使用していると思われます。",
            ahead: "このユーザーの時計は{{delta}}進んでいます。",
            delay: "このメッセージは {{delta}} 遅れて送信されました。",
            delayedMessage: "遅延メッセージ",
            oldAndroidClient: "古い Discord Android クライアント",
            option: {
                latency: {
                    label: "レイテンシ",
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
                    label: "自分自身を無視する",
                    description: "自分のメッセージにインジケーターを追加しないでください"
                }
            }
        },
        messageLinkEmbeds: {
            name: "MessageLinkEmbeds",
            description: "別のメッセージにリンクするメッセージにプレビューを追加します",
            option: {
                messageBackgroundColor: {
                    label: "メッセージの背景色",
                    description: "リッチ埋め込みのメッセージの背景色"
                },
                automodEmbeds: {
                    label: "Automod の埋め込み",
                    description: "リッチ埋め込みの代わりに automod 埋め込みを使用します (サイズは小さいですが情報が少ないです)",
                    always: "常に automod 埋め込みを使用する",
                    prefer: "automod 埋め込みを優先しますが、一部のコンテンツを表示できない場合はリッチ埋め込みを使用してください",
                    never: "automod の埋め込みは絶対に使用しないでください"
                },
                listMode: {
                    label: "リストモード",
                    description: "IDリストをブラックリストとして使用するかホワイトリストとして使用するか",
                    blacklist: "ブラックリスト",
                    whitelist: "ホワイトリスト"
                },
                idList: {
                    label: "IDリスト",
                    description: "ブラックリストまたはホワイトリストに登録するギルド/チャネル/ユーザー ID (カンマで区切る)"
                },
                clearMessageCache: {
                    label: "メッセージキャッシュのクリア",
                    description: "リンクされたメッセージのキャッシュをクリアする"
                }
            },
            noContent: {
                noAttachments: "コンテンツなし {{count}} 埋め込み{{s}}",
                noEmbeds: "コンテンツなし{{count}}添付{{s}}",
                both: "コンテンツなし、{{attachments}} 添付{{attachmentsS}} および {{embeds}} 埋め込み{{embedsS}}"
            },
            dm: "ダイレクトメッセージ",
            groupDm: "グループDM",
            server: "サーバ"
        },
        messageLinkTooltip: {
            name: "MessageLinkTooltip",
            description: "メッセージ リンク、返信、転送されたメッセージの上にマウスを移動すると、メッセージ プレビューを含むツールチップが追加されます。",
            loading: "読み込み中...",
            option: {
                onLink: {
                    label: "リンク上",
                    description: "メッセージリンクの上にマウスを置いたときにツールチップを表示する"
                },
                onReply: {
                    label: "返信時",
                    description: "メッセージの返信の上にマウスを置くとツールチップを表示します"
                },
                onForward: {
                    label: "前進時",
                    description: "転送されたメッセージの上にマウスを置くとツールチップを表示します"
                },
                display: {
                    label: "画面",
                    description: "表示スタイル",
                    auto: "メッセージと同じ",
                    compact: "コンパクト",
                    cozy: "居心地の良い"
                }
            }
        },
        messageLogger: {
            name: "MessageLogger",
            description: "削除および編集されたメッセージを一時的にログに記録します。",
            removeMessage: "メッセージ履歴の削除",
            removeMessageTemporary: "メッセージの削除 (一時的)",
            clearMessageLog: "メッセージログのクリア",
            modal: {
                edit: {
                    title: "メッセージ編集履歴",
                    tooltip: "この編集状態はログに記録されていないため、表示できません。"
                }
            },
            option: {
                deleteStyle: {
                    label: "スタイルの削除",
                    description: "削除されたメッセージのスタイル",
                    text: "赤文字",
                    overlay: "赤いオーバーレイ"
                },
                logDeletes: {
                    label: "ログの削除",
                    description: "削除されたメッセージをログに記録するかどうか"
                },
                collapseDeleted: {
                    label: "削除されたものを折りたたむ",
                    description: "ブロックされたメッセージと同様に、削除されたメッセージを折りたたむかどうか"
                },
                logEdits: {
                    label: "ログ編集",
                    description: "編集したメッセージをログに記録するかどうか"
                },
                inlineEdits: {
                    label: "インライン編集",
                    description: "メッセージ内容の一部として編集履歴を表示するかどうか"
                },
                ignoreBots: {
                    label: "ボットを無視する",
                    description: "ボットによるメッセージを無視するかどうか"
                },
                ignoreSelf: {
                    label: "自分自身を無視する",
                    description: "自分でメッセージを無視するかどうか"
                },
                ignoreUsers: {
                    label: "ユーザーを無視する",
                    description: "無視するユーザー ID のカンマ区切りのリスト"
                },
                ignoreChannels: {
                    label: "チャンネルを無視する",
                    description: "無視するチャネル ID のカンマ区切りリスト"
                },
                ignoreGuilds: {
                    label: "ギルドを無視する",
                    description: "無視するギルド ID のカンマ区切りリスト"
                },
                showEditDiffs: {
                    label: "編集の差分を表示",
                    description: "編集されたメッセージのバージョン間の視覚的な違いを表示する"
                },
                separatedDiffs: {
                    label: "分離された差分",
                    description: "差分をより読みやすくするために、diff で追加と削除を分離します。"
                }
            }
        },
        messageLoggerEnhanced: {
            name: "MessageLoggerEnhanced",
            description: "追加機能により MessageLogger プラグインを強化します。",
            updateImageCacheDir: "画像キャッシュ ディレクトリが正常に更新されました。",
            updateLogsDir: "ログ ディレクトリが正常に更新されました。",
            failedUpdate: "ディレクトリの更新に失敗しました。",
            blacklist: "ブラックリスト",
            whitelist: "ホワイトリスト",
            failedToRemove: "メッセージの削除に失敗しました",
            successfullyImported: "ログが正常にインポートされました",
            errorImportingLogs: "ログのインポート中にエラーが発生しました。詳細についてはコンソールを確認してください",
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
                title: "メッセージロガー",
                jumpToMessage: "メッセージへジャンプ",
                openUserProfile: "ユーザープロフィールを開く",
                copyContent: "コンテンツをコピーする",
                copyUserId: "ユーザーIDをコピーする",
                copyMessageId: "メッセージIDをコピー",
                copyChannelId: "チャンネルIDをコピー",
                copyServerId: "サーバーIDのコピー",
                deleteLog: "ログの削除",
                fromUsernameDm: "{{username}} の DM より",
                fromGroupDm: "{{channelName}}グループDMより",
                fromServerChannel: "{{channelName}} から {{serverName}}",
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
                addUserToWhitelist: "ホワイトリストにユーザーを追加",
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
                server: "サーバ",
                user: "ユーザー",
                channel: "チャネル"
            },
            button: {
                chooseFolder: "フォルダーの選択",
                browse: "ブラウズ",
                clearLogs: "すべてのログをクリア",
                clearVisibleLogs: "表示されているログをクリアする",
                sortOldest: "古いものから順に並べ替え",
                sortNewest: "新しい順に並べ替え",
                loadMore: "もっと読み込む",
                noResults: "{{tab}} に結果がありません",
                tryOtherTabs: "{{nextTab}} または {{lastTab}} を試してみてください",
                importLogs: "インポートログ"
            },
            modal: {
                title: "メッセージのフィルタリング",
                deleted: "削除されました",
                edited: "編集済み",
                ghostPing: "ゴーストが鳴った",
                empty: "空っぽだね",
                importLogs: "ML Enhanced はログを Indexeddb に保存するようになりました。古いログをログ ディレクトリからインポートする必要があります。インポートしても既存のログは上書きされません"
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
                    description: "削除および編集したメッセージを保存するかどうか。"
                },
                saveImages: {
                    label: "画像の保存",
                    description: "削除された添付ファイルを保存します。"
                },
                sortNewest: {
                    label: "新しい順に並べ替え",
                    description: "ログを最新順に並べ替えます。"
                },
                cacheMessagesFromServers: {
                    label: "サーバーからのメッセージをキャッシュする",
                    description: "通常、メッセージ ロガーはホワイトリストに登録された ID と DM からのみログを記録します。これを有効にすると、すべてのサーバーからのメッセージもログに記録されることになります。これによりキャッシュが制限を超え、一部のメッセージが失われる可能性があることに注意してください。多数のサーバーを使用している場合、メッセージがログに記録される可能性が大幅に増加する可能性があり、その結果、メッセージ レコードが大きくなり、無関係なメッセージが含まれる可能性があります。"
                },
                ignoreBots: {
                    label: "ボットを無視する",
                    description: "ボットによるメッセージを無視するかどうか"
                },
                ignoreWebhooks: {
                    label: "Webhook を無視する",
                    description: "Webhook によるメッセージを無視するかどうか"
                },
                ignoreSelf: {
                    label: "自分自身を無視する",
                    description: "自分でメッセージを無視するかどうか"
                },
                ignoreMutedGuilds: {
                    label: "ミュートされたギルドを無視する",
                    description: "ミュートされたギルド内のメッセージは記録されません。ミュートされたギルドのホワイトリストに登録されたユーザー/チャンネルは引き続きログに記録されます。"
                },
                ignoreMutedCategories: {
                    label: "ミュートされたカテゴリを無視する",
                    description: "ミュートされたカテゴリに属する​​チャネル内のメッセージはログに記録されません。ミュートされたギルドのホワイトリストに登録されたユーザー/チャンネルは引き続きログに記録されます。"
                },
                ignoreMutedChannels: {
                    label: "ミュートされたチャンネルを無視する",
                    description: "ミュートされたチャンネルのメッセージは記録されません。ミュートされたギルドのホワイトリストに登録されたユーザー/チャンネルは引き続きログに記録されます。"
                },
                alwaysLogDirectMessages: {
                    label: "ダイレクトメッセージを常に記録する",
                    description: "DMを常に記録する"
                },
                alwaysLogCurrentChannel: {
                    label: "現在のチャンネルを常にログに記録する",
                    description: "現在選択されているチャンネルを常にログに記録します。ブラックリストに登録されたチャネル/ユーザーは引き続き無視されます。"
                },
                permanentlyRemoveLogByDefault: {
                    label: "デフォルトでログを完全に削除",
                    description: "Base MessageLogger のログ削除ボタンはログを完全に削除します"
                },
                hideMessageFromMessageLoggers: {
                    label: "メッセージロガーからのメッセージを非表示にする",
                    description: "有効にすると、コンテキスト メニュー ボタンがメッセージに追加され、他のロガーによってメッセージが記録されることなくメッセージを削除できるようになります。安全ではない可能性がありますので、ご自身の責任でご使用ください。"
                },
                showLogsButton: {
                    label: "「ログを表示」ボタン",
                    description: "ツールボックスを表示するかどうかを切り替えます"
                },
                showWhereMessageIsFrom: {
                    label: "メッセージの送信元を表示",
                    description: "メッセージチャネル/作成者名とサーバー名を表示します"
                },
                messagesToDisplayAtOnceInLogs: {
                    label: "ログに一度に表示するメッセージ",
                    description: "ログに一度に表示するメッセージの数と、ログにさらにメッセージを読み込むときに読み込むメッセージの数。"
                },
                hideMessageFromMessageLoggersDeletedMessage: {
                    label: "メッセージロガーからメッセージを非表示にする 削除されたメッセージ",
                    description: "メッセージ ロガーからのメッセージを非表示にする機能を使用する場合に、メッセージを置き換えるメッセージのコンテンツ。"
                },
                messageLimit: {
                    label: "メッセージ制限",
                    description: "保存するメッセージの最大数。制限に達すると、古いメッセージは削除されます。 0は制限がないことを意味します"
                },
                attachmentSizeLimitInMegabytes: {
                    label: "添付ファイルのサイズ制限（メガバイト単位）",
                    description: "保存する添付ファイルの最大サイズ (メガバイト単位)。このサイズを超える添付ファイルは保存されません。"
                },
                attachmentFileExtensions: {
                    label: "添付ファイルの拡張子",
                    description: "保存するファイル拡張子のカンマ区切りリスト。このリストにないファイル拡張子を持つ添付ファイルは保存されません。すべての添付ファイルを保存するには、空のままにします。"
                },
                cacheLimit: {
                    label: "キャッシュ制限",
                    description: "キャッシュに保持するメッセージの最大数。制限に達すると、古いメッセージは削除されます。"
                },
                timeBasedCleanupMinutes: {
                    label: "時間ベースのクリーンアップ時間（分）",
                    description: "メッセージ制限を超えた古いメッセージの時間ベースのクリーンアップを実行する間隔 (分単位)。"
                },
                preserveCurrentChannel: {
                    label: "現在のチャンネルを保持",
                    description: "有効にすると、現在選択しているチャネルのメッセージは時間ベースのクリーンアップの影響を受けません。"
                },
                whitelistedIds: {
                    label: "ホワイトリストに登録されたID",
                    description: "ホワイトリストに登録されたサーバー、チャネル、またはユーザー ID。"
                },
                blacklistedIds: {
                    label: "ブラックリストに登録されたID",
                    description: "ブラックリストに登録されたサーバー、チャネル、またはユーザー ID。"
                },
                imageCacheDir: {
                    label: "画像キャッシュディレクトリ",
                    description: "保存した画像ディレクトリを選択"
                },
                logsDir: {
                    label: "ログディレクトリ",
                    description: "ログディレクトリの選択"
                },
                importLogs: {
                    label: "インポートログ",
                    description: "ファイルからログをインポート"
                },
                exportLogs: {
                    label: "ログのエクスポート",
                    description: "IndexedDB からログをエクスポートする"
                },
                openLogs: {
                    label: "ログを開く",
                    description: "ログを開く"
                },
                openImageCacheFolder: {
                    label: "画像キャッシュフォルダーを開く",
                    description: "画像キャッシュディレクトリを開きます"
                },
                clearLogs: {
                    label: "ログをクリアする",
                    description: "ログをクリアする",
                    title: "ログをクリアする",
                    body: "すべてのログをクリアしてもよろしいですか?",
                    confirmText: "クリア",
                    cancel: "キャンセル"
                }
            }
        },
        messageNotifier: {
            name: "MessageNotifier",
            description: "選択したユーザーがメッセージを送信したときにトーストを取得する",
            dm: "彼らのDM",
            option: {
                users: {
                    label: "ユーザー",
                    description: "メッセージトーストを取得するユーザー ID のカンマ区切りリスト",
                    invalidId: "{{id}} は有効なユーザー ID ではありません"
                }
            },
            notification: {
                title: "{{username}} さんがメッセージを送信しました",
                body: "クリックすると{{locationName}}にジャンプします"
            }
        },
        messageTags: {
            name: "MessageTags",
            description: "メッセージを保存し、簡単なコマンドで使用できるようにします。",
            notExist: "**{{tagname}}** タグはもう存在しません。修正するには Discord をリロードしてください:)",
            alreadyExist: "**{{tagname}}** という名前のタグはすでに存在します。",
            sentTag: "タグ **{{tagname}}** が送信されました。",
            successCreate: "タグ **{{tagname}}** が作成されました。",
            allTags: "すべてのタグ:",
            noTags: "おっと！まだタグがありません。/tag create を使用してタグを作成してください。",
            noDeleteTag: "タグ **{{tagname}}** は存在しないため、削除できません。",
            successDelete: "タグ **{{name}}** が正常に削除されました。",
            tagPreview: "**{{name}}** という名前のタグは存在しません。",
            option: {
                clyde: {
                    label: "送信時のクライドメッセージ",
                    description: "有効にすると、タグが使用されたときに Clyde が一時的なメッセージを送信します。"
                },
                tagsList: {
                    label: "タグリスト",
                    description: ""
                }
            },
            command: {
                tags: {
                    description: "すべてのタグを自分で管理",
                    option: {
                        create: {
                            description: "新しいタグを作成する",
                            name: "The name of the tag to trigger the response",
                            message: "このタグを使用するときに送信するメッセージ"
                        },
                        list: {
                            description: "自分のタグをすべてリストする"
                        },
                        delete: {
                            description: "自分からタグを削除する",
                            name: "The name of the tag to remove"
                        },
                        preview: {
                            description: "タグを公開せずにプレビューする",
                            name: "The name of the tag to preview"
                        }
                    }
                }
            }
        },
        micLoopbackTester: {
            name: "MicLoopbackTester",
            description: "ユーザーパネルにマイクループバックテストアイコンを追加",
            button: "マイクテストループバック"
        },
        middleClickTweaks: {
            name: "MiddleClickTweaks",
            description: "貼り付けやリンクを開くなど、さまざまな中クリックの調整。",
            option: {
                openScope: {
                    label: "オープンスコープ",
                    description: "これらのコンテンツ タイプを中クリックしても開かないようにします。",
                    links: "リンク",
                    media: "メディア",
                    linksAndMedia: "リンクとメディア",
                    none: "なし"
                },
                pasteScope: {
                    label: "スコープの貼り付け",
                    description: "このような状況では、中クリックによる貼り付けを防止します。",
                    always: "中クリックによる貼り付けを常に禁止する",
                    focus: "テキスト領域にフォーカスがない場合のみ防止する",
                },
                pasteThreshold: {
                    label: "貼り付けのしきい値",
                    description: "中クリックした後、貼り付けが再び有効になるまでのミリ秒。"
                }
            }
        },
        moreCommands: {
            name: "MoreCommands",
            description: "エコー、レニー、モックなど",
            command: {
                echo: {
                    description: "Clyde としてメッセージを送信します (ローカルで)"
                },
                lenny: {
                    description: "レニーフェイスを送る"
                },
                mock: {
                    description: "モックピープル"
                },
                wordcount: {
                    description: "メッセージ内の単語数をカウントします",
                    response: "メッセージには {{count}} 語が含まれています。"
                },
                flipcoin: {
                    description: "コインを投げて表または裏を返します",
                    heads: "ヘッズ",
                    tails: "テイルス",
                    response: "コインは{{result}}に着地しました。"
                },
                ask: {
                    description: "はい/いいえの質問をして答えを得る",
                    yes: "はい",
                    no: "いいえ",
                    maybe: "多分",
                    askAgain: "後でもう一度質問する",
                    definitelyNot: "絶対に違います",
                    itIsCertain: "それは確かです"
                },
                randomanimal: {
                    description: "ランダムな動物の写真を入手する",
                    animal: "あなたの動物を選んでください",
                    cat: "猫",
                    dog: "犬",
                    response: "申し訳ありませんが、現在動物の写真を取得できませんでした"
                },
                randomnumber: {
                    description: "2 つの値の間の乱数を生成します",
                    min: "最小値",
                    max: "最大値",
                    response: "{{min}} から {{max}} までの乱数: {{number}}"
                },
                choose: {
                    description: "提供されたオプションからランダムに選択します",
                    option: "カンマ区切りの選択肢リスト",
                    response: "私が選択するのは: {{choice}}"
                },
                systeminfo: {
                    description: "システム情報を表示します",
                    platform: "プラットフォーム",
                    deviceType: "デバイスの種類",
                    mobile: "携帯",
                    desktop: "デスクトップ",
                    browser: "ブラウザ",
                    cpuCores: "CPUコア",
                    memory: "メモリ",
                    screen: "画面",
                    languages: "言語",
                    network: "ネットワーク",
                    online: "オンライン",
                    offline: "オフライン",
                    failedToFetch: "システム情報の取得に失敗しました",
                    unknown: "未知"
                },
                getuptime: {
                    description: "クライアントの稼働時間を取得します",
                    response: "**クライアント稼働時間**: {{uptime}} 分"
                },
                gettime: {
                    description: "現在時刻を取得します",
                    response: "現在の時刻は{{time}}です"
                },
                transform: {
                    description: "指定されたオプションを使用してテキストを変換します",
                    transformation: {
                        description: "テキストに適用する変換",
                        lowercase: "テキストを小文字に変換する",
                        uppercase: "テキストを大文字に変換する",
                        localeLowercase: "テキストをロケールの小文字に変換する",
                        localeUppercase: "テキストをロケールの大文字に変換する",
                        same: "そのままでいてください"
                    },
                    repeat: "何回繰り返すか",
                    reverse: "テキストを反転するかどうか",
                    normalize: {
                        description: "テキスト正規化フォーム",
                        nfc: "正規化フォーム C (NFC)",
                        nfd: "正規化形式 D (NFD)",
                        nfkc: "正規化形式 KC (NFKC)",
                        nfkd: "正規化形式 KD (NFKD)"
                    },
                    text: "このテキストを変換します"
                }
            }
        },
        moreKaomoji: {
            name: "MoreKaomoji",
            description: "Discordに顔文字を追加します。 ヽ(´▽`)/"
        },
        moreQuickReactions: {
            name: "MoreQuickReactions",
            description: "メッセージコンテキストメニューのクイックリアクションボタンを改善しました。",
            option: {
                reactionCount: {
                    label: "反応数",
                    description: "反応数 (0-42)"
                },
                frequentEmojis: {
                    label: "よく使う絵文字",
                    description: "お気に入りの絵文字の代わりによく使う絵文字を使用する"
                },
                rows: {
                    label: "行",
                    description: "表示するクイックリアクションの列"
                },
                columns: {
                    label: "コラム",
                    description: "クイックリアクションのコラムを表示"
                },
                compactMode: {
                    label: "コンパクトモード",
                    description: "ボタンを元のスケールの 75% に拡大縮小し、内側の絵文字を 125% のスケールに拡大します。絵文字は元のサイズの 93.75% になります。少なくとも 5 つの列を含めることをお勧めします"
                },
                scroll: {
                    label: "スクロール",
                    description: "絵文字リストのスクロールを有効にする"
                }
            }
        },
        moreUserTags: {
            name: "MoreUserTags",
            description: "Webhook とモデレートロール (所有者、管理者など) のタグを追加します。",
            tag: {
                webhook: {
                    name: "Webhook",
                    description: "このユーザーは Webhook です"
                },
                owner: {
                    name: "Owner",
                    description: "サーバーを所有しています"
                },
                admin: {
                    name: "Admin",
                    description: "管理者権限がある"
                },
                staff: {
                    name: "Staff",
                    description: "サーバー、チャネル、または役割を管理できます"
                },
                mod: {
                    name: "Mod",
                    description: "メッセージを管理したり、ユーザーをキック/禁止したりできます"
                },
                vcmod: {
                    name: "VC Mod",
                    description: "ボイスチャットを管理できる"
                },
                chatmod: {
                    name: "Chat Mod",
                    description: "メッセージを管理できる"
                }
            },
            modal: {
                example: "例",
                tag: "タグ",
                customTextPlaceholder: "タグ上のテキスト (デフォルト: {{displayName}})",
                messages: "メッセージに表示",
                memberList: "メンバーリストとプロフィールに表示"
            },
            option: {
                dontShowForBots: {
                    label: "ボットには表示しない",
                    description: "ボットの余分なタグを表示しない (Webhook を除く)"
                },
                dontShowBotTag: {
                    label: "ボットタグを表示しない",
                    description: "ボットの追加タグのみを表示 / [APP] テキストを非表示"
                },
                showWebhookTagFully: {
                    label: "Webhook タグを完全に表示する",
                    description: "お知らせなどのフォローされているチャネルに Webhook タグを表示します"
                },
                tagSettings: {
                    label: "タグ設定",
                    description: "私を満たしてください"
                }
            }
        },
        morse: {
            name: "Morse",
            description: "モールス信号との間で変換するスラッシュ コマンド。",
            command: {
                morse: {
                    description: "モールス信号への、またはモールス信号からの翻訳",
                    message: "変換するテキスト"
                }
            }
        },
        moyai: {
            name: "Moyai",
            description: "🗿🗿🗿🗿🗿🗿🗿🗿",
            option: {
                volume: {
                    label: "音量",
                    description: "🗿🗿🗿のボリューム"
                },
                quality: {
                    label: "品質",
                    description: "🗿🗿🗿の品質",
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
            name: "MusicControls",
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
                    description: "Spotify URL ではなく Spotify URI を開きます。 Spotify がインストールされている場合にのみ機能し、すべてのプラットフォームでは機能しない可能性があります"
                },
                previousButtonRestartsTrack: {
                    label: "「戻る」ボタンでトラックを再開します",
                    description: "再生時間が 3 秒を超える場合、前ボタンを押すと現在再生中のトラックを再開します"
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
                    description: "これらの設定には {{app}} が必要です"
                },
                showYoutubeMusicControls: {
                    label: "YouTube ミュージック コントロールを表示する",
                    description: "YouTube Music の音楽コントロールを表示する"
                },
                YoutubeMusicApiUrl: {
                    label: "YouTube ミュージック API URL",
                    description: "使用している YouTube Music API サーバーの URL"
                },
                hoverControls: {
                    label: "ホバーコントロール",
                    description: "ホバー時にコントロールを表示"
                },
                ShowMusicNoteOnNoLyrics: {
                    label: "歌詞のない音符を表示",
                    description: "歌詞が見つからない場合に音符アイコンを表示する"
                },
                LyricsPosition: {
                    label: "歌詞の位置",
                    description: "歌詞パネルの位置",
                    above: "上記のプレーヤー",
                    below: "プレーヤーの下"
                },
                LyricsProvider: {
                    label: "歌詞プロバイダー",
                    description: "歌詞の取得元",
                    spotify: "Spotify（ミュージックマッチ）",
                    LRCLIB: "LRCLIB"
                },
                TranslateTo: {
                    label: "翻訳先",
                    description: "歌詞を翻訳する - これを変更すると、既存の翻訳がクリアされます",
                    cleared: "翻訳がクリアされました"
                },
                LyricsConversion: {
                    label: "歌詞変換",
                    description: "歌詞を自動翻訳またはローマ字化",
                    none: "なし",
                    translate: "翻訳する",
                    romanize: "ロマニ語"
                },
                FallbackProvider: {
                    label: "フォールバックプロバイダー",
                    description: "歌詞プロバイダーが失敗した場合は、他のプロバイダーを試してください"
                },
                ShowFailedToasts: {
                    label: "失敗したトーストを表示する",
                    description: "歌詞の読み込みに失敗した場合にトーストを表示する"
                },
                PurgeLyricsCache: {
                    label: "歌詞キャッシュをパージ",
                    description: "キャッシュされた歌詞と翻訳をすべてクリアします",
                    button: "キャッシュのパージ",
                    cacheLyricsPurged: "歌詞キャッシュがパージされました"
                }
            },
            context: {
                spotify: {
                    label: "Spotify の歌詞メニュー",
                    type: "Spotify {{type}} メニュー",
                    copy: "{{type}} 名をコピー",
                    link: "{{type}} リンクをコピー",
                    open: "Spotify で {{type}} を開きます",
                    album: "Spotify のアルバムメニュー"
                },
                tidal: {
                    label: "タイダル歌詞メニュー",
                    lyrics: "タイダルの歌詞",
                    type: "潮汐 {{name}} メニュー",
                    copy: "{{name}} 名をコピー",
                    open: "タイダルで{{name}}を開く",
                    album: "潮汐アルバムメニュー"
                },
                ytm: {
                    type: "YouTube ミュージック {{name}} メニュー",
                    copy: "{{name}} 名をコピー",
                    open: "YouTube Music で {{name}} を開きます",
                    album: "YouTube ミュージック アルバム メニュー",
                    muted: "ミュート"
                },
                lyrics: {
                    provider: "歌詞プロバイダー",
                    saved: "保存されました",
                    notFound: "同期された歌詞が見つかりませんでした"
                },
                copy: {
                    currentLyrics: "現在の歌詞をコピーする"
                }
            },
            alert: {
                lyricCopied: "歌詞をクリップボードにコピーしました!",
                noLyrics: "歌詞なし",
                noLyricsTo: "{{translated}} には歌詞がありません",
                translate: "翻訳する",
                romanize: "ローマ字",
                lyricsFetchFailed: "歌詞の取得に失敗しました",
                failedToFetchLyrics: "{{translated}} の取得に失敗しました",
                translation: "翻訳",
                romanization: "ローマ字化",
                failedToFetchTranslation: "{{translated}} 歌詞の取得に失敗しました"
            },
            modal: {
                install: {
                    title: "インストール方法",
                    install: "ここから {{link}} をインストールし、TidalLuna 設定 → プラグイン ストア → @vmohammad/api のインストールに移動します。",
                    tidaluna: "ティダルナ"
                },
                player: {
                    noPlaying: "トラックが再生されていません",
                    artist: "アーティスト：",
                    album: "アルバム：",
                    noLyrics: "歌詞はありません:(",
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
                failed: "モーダルのレンダリングに失敗しました:(",
                checkConsole: "コンソールでエラーを確認してください",
                invalidUrlCustomApi: "カスタム API サーバー URL の URL 形式が無効です"
            }
        },
        mutualGroupDMs: {
            name: "MutualGroupDMs",
            description: "プロフィールに相互グループDMを表示します",
            no: "相互グループなし",
            mutualGroup: "{{count}} 相互グループ{{s}}",
            members: "メンバー",
            noGroup: "共通のグループDMはありません",
            header: "相互グループ"
        },
        neverPausePreviews: {
            name: "NeverPausePreviews",
            description: "クライアントがフォーカスを失った場合でも、通話中/PiP プレビュー (画面共有、ストリームなど) が一時停止しないようにします。",
            about: "このプラグインにより、Discord は通常より多くのリソースを使用します"
        },
        newGuildSettings: {
            name: "NewGuildSettings",
            description: "新しいサーバーを自動的にミュートし、参加時にその他のさまざまな設定を変更します",
            context: {
                apply: "新しいギルド設定を適用する"
            },
            option: {
                guild: {
                    label: "ミュートギルド",
                    description: "ギルドを自動的にミュートする"
                },
                messages: {
                    label: "サーバー通知設定",
                    description: "サーバー通知設定",
                    all: "すべてのメッセージ",
                    mentions: "@メンションのみ",
                    nothing: "何もない",
                    default: "サーバーのデフォルト"
                },
                everyone: {
                    label: "@everyone と @here を抑制します",
                    description: "@everyone と @here を抑制します"
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
                    label: "モバイルプッシュ通知をミュートする",
                    description: "モバイルプッシュ通知を自動的にミュートする"
                },
                voiceChannels: {
                    label: "音声チャンネル",
                    description: "音声チャンネルの名前を自動的に非表示にする"
                }
            }
        },
        newPluginsManager: {
            name: "NewPluginsManager",
            description: "新しいプラグインが Plexcord に追加されたときに通知するユーティリティ",
            modal: {
                title: "新しいプラグインと設定",
                description: "前回の訪問以降、新しいプラグインと設定が追加されました。以下の新しく追加された内容を確認してください。",
                tooltip: "このセッションを終了します",
                dontShowAgain: "これを二度と表示しないでください",
                restartRequired: "変更を適用するには再起動が必要です",
                restart: "再起動",
                continue: "続く"
            }
        },
        noAppsAllowed: {
            name: "NoAppsAllowed",
            description: "ボットのタグを元の形式に戻します"
        },
        noBlockedMessages: {
            name: "NoBlockedMessages",
            description: "ブロック/無視されたすべてのメッセージをチャットから完全に非表示にします",
            option: {
                alsoHideIgnoredUsers: {
                    label: "無視されたユーザーも非表示にする",
                    description: "無視されたユーザーからのメッセージも非表示にします。"
                },
                disableNotifications: {
                    label: "通知を無効にする",
                    description: "ブロックされたユーザーの新着メッセージ通知を非表示にします。以下で「デフォルトの非表示ユーザー」が有効になっており、通知をトリガーしたユーザーが「ユーザーの上書き」で除外されていない場合は、常に true になります。"
                },
                allowAutoModMessages: {
                    label: "AutoMod メッセージを許可する",
                    description: "AutoMod によって送信されるメッセージがフィルタリングをバイパスできるようにします。"
                },
                hideBlockedUserReplies: {
                    label: "ブロックされたユーザーの返信を非表示にする",
                    description: "スレッドに参加している場合は、ブロックされたユーザーからのメッセージをスレッド内で非表示にします。"
                },
                defaultHideUsers: {
                    label: "デフォルトの非表示ユーザー",
                    description: "有効にすると、ブロックされたユーザーからのメッセージは完全に非表示になり、代わりにオーバーライド リスト内のユーザー ID からのメッセージは折りたたまれます (デフォルトの Discord の動作)。無効にすると、ブロックされたユーザーからのメッセージは折りたたまれ、上書きリスト内のユーザー ID からのメッセージは完全に非表示になります。"
                },
                overrideUsers: {
                    label: "ユーザーを上書きする",
                    description: "上記で選択したデフォルトの動作の代わりに非表示または折りたたまれるユーザー ID のカンマ区切りのリスト。"
                }
            }
        },
        noBulletPoints: {
            name: "NoBulletPoints",
            description: "マークダウンの箇条書きを入力しなくなります (臭い)"
        },
        noDeepLinks: {
            name: "DisableDeepLinks",
            description: "デスクトップアプリの使用を強制しようとする Discord の冗長ディープリンク機能を無効にします"
        },
        noDeleteSafety: {
            name: "NoDeleteSafety",
            description: "サーバーを削除する際の「サーバー名の入力」要件を削除します。",
            option: {
                confirmModal: {
                    label: "モーダルの確認",
                    description: "「削除してもよろしいですか」モーダルを表示する必要がありますか?"
                }
            },
            modal: {
                title: "サーバーを削除しますか?",
                body: "それが明らかでないとしても、それは永続的です。",
                confirm: "消去",
                cancel: "キャンセル"
            }
        },
        noDevtoolsWarning: {
            name: "NoDevtoolsWarning",
            description: "コンソールの「HOLD UP」バナーを無効にします。副作用として、Discord がトークンを非表示にすることも防止され、ランダムなログアウトが防止されます。"
        },
        noF1: {
            name: "NoF1",
            description: "F1 ヘルプ バインドを無効にします。"
        },
        noMaskedUrlPaste: {
            name: "NoMaskedUrlPaste",
            description: "テキストを選択した状態でリンクを貼り付けても、マスクされた URL として貼り付けられません。"
        },
        noMirroredCamera: {
            name: "NoMirroredCamera",
            description: "カメラが画面にミラーリングされないようにします"
        },
        noModalAnimation: {
            name: "NoModalAnimation",
            description: "モーダルを開いたり閉じたりするときの 300 ミリ秒の長さのアニメーションを削除します。"
        },
        noMosaic: {
            name: "NoMosaic",
            description: "Discordの画像モザイクを削除します",
            option: {
                inlineVideo: {
                    label: "インラインビデオ",
                    description: "カルーセルモーダルなしでビデオを再生する"
                }
            }
        },
        noNitroUpsell: {
            name: "NoNitroUpsell",
            description: "クライアントをだまして、Nitro を持っていると思わせることで、Discord の Nitro アップセルをすべて削除します。"
        },
        noOnboarding: {
            name: "NoOnboarding",
            description: "Discord のオンボーディング プロセスをバイパスして、サーバーへのエントリを迅速化します。"
        },
        noOnboardingDelay: {
            name: "NoOnboardingDelay",
            description: "遅くて煩わしいオンボーディングの遅延を回避します"
        },
        noPendingCount: {
            name: "NoPendingCount",
            description: "受信した友達リクエスト、メッセージリクエスト、Nitro オファーの ping カウントを削除します。",
            option: {
                hideFriendRequestsCount: {
                    label: "友達リクエスト数を非表示にする",
                    description: "受信した友達リクエストの数を非表示にする"
                },
                hideMessageRequestsCount: {
                    label: "メッセージリクエスト数を非表示にする",
                    description: "メッセージリクエスト数を非表示にする"
                },
                hidePremiumOffersCount: {
                    label: "プレミアムオファー数を非表示にする",
                    description: "Nitro オファー数を非表示にする"
                }
            }
        },
        noProfileThemes: {
            name: "NoProfileThemes",
            description: "自分以外の全員から Nitro プロフィールのテーマを完全に削除します。"
        },
        noPushToTalk: {
            name: "NoPushToTalk",
            description: "プッシュツートーク要件を強制するチャネルでの音声アクティビティに対するプッシュツートーク要件をバイパスします。"
        },
        noReplyMention: {
            name: "NoReplyMention",
            description: "デフォルトで応答 ping を無効にします",
            option: {
                userList: {
                    label: "ユーザーリスト",
                    description: "ping を許可または除外するユーザーのリスト (カンマまたはスペースで区切る)"
                },
                roleList: {
                    label: "役割リスト",
                    description: "ping を許可または除外する役割のリスト (カンマまたはスペースで区切る)"
                },
                shouldPingListed: {
                    label: "Ping をリストに掲載する必要がある",
                    description: "行動",
                    dontPing: "リストされたユーザー/ロールに ping を実行しないでください",
                    onlyPing: "リストされたユーザー/ロールのみに ping を実行します"
                },
                inverseShiftReply: {
                    label: "逆シフト応答",
                    description: "Discordのシフト返信動作を反転します（シフト返信にユーザーをメンションできるようにします）"
                }
            }
        },
        normalizeMessageLinks: {
            name: "NormalizeMessageLinks",
            description: "メッセージ リンクから Canary/ptb を削除する"
        },
        noRoleHeaders: {
            name: "NoRoleHeaders",
            description: "私たちは皆平等です!!メンバーリストのロールヘッダーを削除します。"
        },
        noRPC: {
            name: "NoRPC",
            description: "Discord リッチ プレゼンスを無効にする"
        },
        noServerEmojis: {
            name: "NoServerEmojis",
            description: "オートコンプリート メニューにサーバー絵文字を表示しないでください。",
            option: {
                shownEmojis: {
                    label: "表示される絵文字",
                    description: "オートコンプリート メニューに表示する絵文字を選択します",
                    onlyUnicode: "Unicode 絵文字のみ",
                    currentServer: "Unicode 絵文字と現在のサーバーのサーバー絵文字",
                    all: "Unicode 絵文字とすべてのサーバー絵文字 (Discord のデフォルト)"
                }
            }
        },
        noSystemBadge: {
            name: "NoSystemBadge",
            description: "タスクバーとシステムトレイの未読カウントバッジを無効にします。"
        },
        notificationTitle: {
            name: "NotificationTitle",
            description: "デスクトップ通知をより有益なものにする"
        },
        notificationVolume: {
            name: "NotificationVolume",
            description: "Discord通知のカスタム音量を設定する",
            option: {
                notificationVolume: {
                    label: "通知量",
                    description: "通知量"
                }
            }
        },
        noTypingAnimation: {
            name: "NoTypingAnimation",
            description: "チャットでの入力アニメーションを無効にします"
        },
        noUnblockToJump: {
            name: "NoUnblockToJump",
            description: "ブロックまたは無視されたユーザー、およびスパマーの可能性があるユーザーのブロックを解除せずに、そのメッセージにジャンプできます。"
        },
        onePingPerDM: {
            name: "OnePingPerDM",
            description: "未読メッセージがユーザーによって DM で複数回送信された場合、音声 ping は 1 回だけ受信されます。",
            option: {
                channelToAffect: {
                    label: "影響を与えるチャネル",
                    description: "プラグインが影響を与える DM のタイプを選択します",
                    both: "両方",
                    user: "ユーザーDM",
                    group: "グループDM"
                },
                allowMentions: {
                    label: "メンションを許可する",
                    description: "@メンションの音声 ping を受信する"
                },
                allowEveryone: {
                    label: "全員に許可",
                    description: "グループ DM で @everyone と @here への音声 ping を受信します"
                },
                ignoreUsers: {
                    label: "ユーザーを無視する",
                    description: "ping を決して抑制しないユーザー ID (カンマ + スペース)"
                },
                alwaysPlaySound: {
                    label: "常にサウンドを再生する",
                    description: "無効になっている場合でもメッセージ通知音を再生する"
                }
            }
        },
        openInApp: {
            name: "OpenInApp",
            description: "ブラウザではなく、それぞれのアプリでリンクを開きます",
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
                    description: "VRCX アプリで VRChat リンクを開く"
                }
            },
            notification: {
                open: "ネイティブアプリで開かれたリンク"
            }
        },
        overrideForumDefaults: {
            name: "OverrideForumDefaults",
            description: "デフォルトのフォーラムのレイアウト/並べ替え順序を上書きできます。チャンネルごとに変更することもできます",
            option: {
                defaultLayout: {
                    label: "デフォルトのタグ",
                    description: "どのレイアウトをデフォルトとして使用するか",
                    list: "リスト",
                    gallery: "ギャラリー"
                },
                defaultSortOrder: {
                    label: "デフォルトの並べ替え順序",
                    description: "デフォルトとして使用する並べ替え順序",
                    recentlyActive: "最近アクティブ",
                    datePosted: "投稿日"
                }
            }
        },
        partyMode: {
            name: "PartyMode",
            description: "パーティーは決して終わらないので、パーティーモードを使用できるようになります✨",
            option: {
                superIntensePartyMode: {
                    label: "超激しいパーティーモード",
                    description: "パーティーの熱気",
                    normal: "普通",
                    better: "より良い",
                    projectX: "プロジェクトX"
                }
            }
        },
        pauseInvitesForever: {
            name: "PauseInvitesForever",
            description: "Discord が重複して削除した招待を無期限に一時停止するオプションを復活させます。",
            pauseIndefinitely: "無期限に一時停止する"
        },
        permissionFreeWill: {
            name: "PermissionFreeWill",
            description: "チャネル権限管理のクライアント側の制限を無効にします。",
            option: {
                lockout: {
                    label: "ロックアウト",
                    description: "アクセス許可のロックアウト防止をバイパスします (「これを実行したくないのは確かです」)"
                },
                onboarding: {
                    label: "オンボーディング",
                    description: "オンボーディング要件をバイパスします (「この変更を行うとサーバーとの互換性がなくなります [...]」)"
                }
            }
        },
        permissionsViewer: {
            name: "PermissionsViewer",
            description: "ユーザーまたはチャネルが持つ権限とサーバーの役割を表示します。",
            view: "権限の表示",
            option: {
                permissionsSortOrder: {
                    label: "権限のソート順",
                    description: "どのロールがユーザーに特定の権限を付与するかを定義するために使用されるソート方法",
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
                grantedBy: "付与者",
                serverOwner: "サーバー所有者",
                ownerRole: "所有者",
                sortingBy: "{{method}} による並べ替え",
                highest: "最高の役割",
                lowest: "最下位の役割",
                details: "役割の詳細"
            }
        },
        petpet: {
            name: "PetPet",
            description: "/petpet スラッシュ コマンドを追加して、任意の画像からヘッドペット GIF を作成します",
            command: {
                petpet: {
                    description: "ペットペットGIFを作成します。画像オプションのうち 1 つだけを指定できます",
                    delay: "各フレーム間の遅延。デフォルトは 20 です。",
                    resolution: "GIFの解像度。デフォルトは 120 です。非常識な数値を入力して Discord がフリーズした場合、それはあなたの責任です。",
                    image: "使用する画像添付ファイル",
                    url: "画像を取得する URL",
                    user: "アバターを画像として使用するユーザー",
                    noServerPfp: "「ユーザー」オプションを使用する場合は、サーバー固有のアバターではなく通常のアバターを使用します",
                    error: {
                        noImage: "画像が指定されていません!",
                        delayTooLow: "遅延は少なくとも 20 でなければなりません。",
                    }
                }
            },
            error: {
                uploadNotImage: "アップロードは画像ではありません",
                fetchUserFailed: "ユーザーの取得に失敗しました。詳細については、コンソールを確認してください。",
                fetchImageFailed: "{{url}} のロード中にエラーが発生しました。詳細については、コンソールを確認してください。"
            }
        },
        pictureInPicture: {
            name: "PictureInPicture",
            description: "ビデオにピクチャー・イン・ピクチャーを追加します (ダウンロード ボタンの横)",
            tooltip: "ピクチャインピクチャの切り替え",
            option: {
                loop: {
                    label: "ループ",
                    description: "PiPビデオをループさせるかどうか"
                }
            }
        },
        pinDMs: {
            name: "PinDMs",
            description: "プライベート チャネルを DM リストの先頭に固定できます。ピンの固定/固定解除、またはピンの順序を変更するには、DM を右クリックします",
            context: {
                category: {
                    label: "ピンDMカテゴリーメニュー",
                    edit: "カテゴリの編集",
                    up: "上に移動",
                    down: "下に移動",
                    delete: "カテゴリの削除",
                    unnamed: "ああ、ああ"
                },
                pin: {
                    label: "ピンDM",
                    addCategory: "カテゴリを追加"
                },
                unPin: {
                    label: "DMの固定を解除",
                    move: "カテゴリに移動"
                }
            },
            option: {
                pinOrder: {
                    label: "ピンの順序",
                    description: "固定DMはどの順番で表示されるべきですか？",
                    lastMessage: "最新のメッセージ",
                    custom: "カスタム (チャンネルを右クリックして並べ替えます)"
                },
                canCollapseDmSection: {
                    label: "折りたたみ可能な固定セクション",
                    description: "カテゴリ化されていない DM セクションを折りたたみ可能にする"
                },
                dmSectionCollapsed: {
                    label: "DM セクションの崩壊",
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
                    new: "新しいカテゴリ",
                    name: "Name",
                    color: "色",
                    save: "保存",
                    create: "作成する"
                }
            }
        },
        pingNotifications: {
            name: "PingNotifications",
            description: "改善されたメンション形式によるカスタマイズ可能な通知",
            option: {
                friends: {
                    label: "友達",
                    description: "友達がサーバーにメッセージを送信したときに通知する"
                },
                mentions: {
                    label: "言及",
                    description: "誰かがあなたに直接 @メンションしたときに通知する"
                },
                dms: {
                    label: "DM",
                    description: "ダイレクト メッセージ (DM) の通知"
                },
                showInActive: {
                    label: "アクティブに表示",
                    description: "現在アクティブなチャンネルでも通知を表示する"
                },
                ignoreMuted: {
                    label: "ミュートを無視する",
                    description: "ミュートされたサーバー、チャネル、またはユーザーからの通知をスキップする"
                }
            },
            unknown: "未知",
            dm: "DM",
            groupDM: "グループDM",
            title: "{{username}} の {{channelName}}"
        },
        pinIcon: {
            name: "PinIcon",
            description: "ピン留めされたメッセージにピンアイコンを追加します"
        },
        plainFolderIcon: {
            name: "PlainFolderIcon",
            description: "フォルダ内の小さなギルドアイコンを表示しない"
        },
        platformIndicators: {
            name: "PlatformIndicators",
            description: "プラットフォームインジケーター (デスクトップ、モバイル、Web...) をユーザーに追加します",
            embeddedTooltip: "コンソール",
            vrTooltip: "VR",
            option: {
                list: {
                    label: "リスト",
                    description: "メンバーリストにインジケーターを表示する"
                },
                badges: {
                    label: "バッジ",
                    description: "ユーザープロフィールのインジケーターをバッジとして表示する"
                },
                messages: {
                    label: "メッセージ",
                    description: "メッセージ内にインジケーターを表示する"
                },
                colorMobileIndicator: {
                    label: "カラーモバイルインジケーター",
                    description: "モバイルインジケーターをユーザーステータスの色と一致させるかどうか。"
                },
                showBots: {
                    label: "ボットを表示する",
                    description: "ボットにプラットフォームインジケーターを表示するかどうか"
                }
            }
        },
        platformSpoofer: {
            name: "PlatformSpoofer",
            description: "使用しているプラ​​ットフォームまたはデバイスを偽装する",
            about: "このプラグインが警告や禁止を受けないことを保証することはできません。",
            platform: {
                desktop: "Discordクライアント",
                web: "ディスコードウェブ",
                ios: "ディスコード iOS",
                android: "ディスコードアンドロイド",
                xbox: "Discord 埋め込み",
                playstation: "Discord 埋め込み",
                vr: "VR"
            },
            option: {
                platform: {
                    label: "プラットフォーム",
                    description: "どのプラットフォームとして表示されるか",
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
            name: "PlexcordToolbox",
            description: "Plexcord のクイック アクションを収容するボタンを AppBar に追加します",
            tooltip: "Plexcord ツールボックス",
            context: {
                openLog: "通知ログを開く",
                enableQuickCSS: "QuickCSSを有効にする",
                openQuickCSS: "QuickCSSを編集する",
                openSettings: "設定を開く",
                manageThemes: "テーマの管理"
            },
            option: {
                showPluginMenu: {
                    label: "プラグインメニューを表示",
                    description: "Plexcord ツールボックスにプラグイン メニューを表示する"
                }
            }
        },
        polishWording: {
            name: "PolishWording",
            description: "メッセージを調整して、見た目を良くし、文法を改善します。設定を参照",
            option: {
                quickDisable: {
                    label: "クイック無効化",
                    description: "すぐに無効にします。クライアントのリロードを必要とせずにメッセージの変更をオフにします。"
                },
                blockedWords: {
                    label: "ブロックされた単語",
                    description: "大文字にならない単語 (カンマ区切り)。"
                },
                fixApostrophes: {
                    label: "アポストロフィを修正",
                    description: "短縮形にはアポストロフィが含まれていることを確認してください。"
                },
                expandContractions: {
                    label: "拡張収縮",
                    description: "拡張収縮"
                },
                fixCapitalization: {
                    label: "大文字を修正する",
                    description: "文章を大文字にします。"
                },
                fixPunctuation: {
                    label: "句読点を修正する",
                    description: "句読点の周囲のスペースを修正します。"
                },
                fixPunctuationFrequency: {
                    label: "句読点の頻度を修正する",
                    description: "期間頻度のパーセンテージ (これは一部の人にとって非常に迷惑です)。",
                }
            }
        },
        previewMessage: {
            name: "PreviewMessage",
            description: "メッセージを送信する前にプレビューできます。",
            tooltip: "プレビューメッセージ"
        },
        profileSets: {
            name: "ProfileSets",
            description: "[設定] の [プロファイル] セクションから、さまざまなプロファイル プリセットを保存およびロードできます。",
            toast: {
                importFailed: "プロファイル セットのインポートに失敗しました。ファイルが無効である可能性があります。",
            },
            option: {
                avatarSize: {
                    label: "アバターのサイズ",
                    description: "プリセットリストのアバターサイズ"
                }
            },
            modal: {
                override: "オーバーライド",
                merge: "マージ",
                cancel: "キャンセル",
                timestamp: "{{formattedDate}}、{{formattedTime}}",
                rename: "名前を変更する",
                update: "アップデート",
                moveUp: "上に移動",
                moveDown: "下に移動",
                moveTo: "1ページ目に移動",
                delete: "消去",
                importProfiles: "プロファイルのインポート",
                importText: "このセクションには {{existingCount}} 個の既存のプロファイルがあります。それらを上書きしますか、それともインポートされたプロファイルとマージしますか?",
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
            name: "Questify",
            description: "一連の機能を使用して Quest エクスペリエンスを強化することも、気に入らない場合は完全に無効にすることもできます。",
            quests: "クエスト",
            context: {
                quest: {
                    label: "クエストボタンメニュー",
                    ignore: "すべて無視のマークを付ける",
                    reset: "無視されたリストをリセット",
                    fetch: "クエストの取得",
                    markAsIgnored: "無視としてマークする",
                    unmarkAsIgnored: "無視のマークを解除する",
                    stopAuto: "オートコンプリートを停止する",
                    copyQuestID: "クエストIDをコピー",
                    startAuto: "オートコンプリートの開始"
                }
            },
            settings: {
                questButton: {
                    title: "クエストボタン",
                    description: "サーバーリストにクエストボタンを表示し、未取得のクエストのオプションのインジケーターを表示します。",
                    leftClick: "左クリックアクション",
                    middleClick: "中クリックアクション",
                    rightClick: "右クリックアクション",
                    visibility: "ボタンの可視性",
                    unclaimedIndicator: "未請求インジケーター",
                    badgeColor: "バッジの色",
                    rewardDisplay: "報酬表示",
                    includedRewardTypes: "含まれる報酬の種類",
                    includedRewardTypesDesc: "ボタンの可視性、バッジの数を決定するとき、および警告音を再生するときに、これらの報酬タイプのクエストのみを未請求としてカウントします。",
                    selectRewardTypes: "未請求数に含める報酬タイプを選択してください...",
                    noRewardType: "その名前でサポートされている Quest 機能はありません。",
                    default: "デフォルト",
                    disable: "無効にする"
                },
                questFeatures: {
                    title: "クエストの特徴",
                    description: "特定の Quest 機能を変更します。",
                    popupWarning: "{{disablePopup}} オプションは、完了したクエストおよびクエストの進行状況の追跡では無視されます。",
                    videoQuestInfo: "{{completeVideo}} オプションは、ビデオ クエストの継続時間の間待機し、自動的に完了としてマークします。",
                    gameQuestInfo: "同様に、{{completeGame}} オプションは、ゲーム クエストの継続時間の間待機し、自動的に完了としてマークされます。このオプションは、公式デスクトップ クライアントでのみサポートされます。",
                    manualStartWarning: "クエストは依然として手動で開始する必要があります。最初のクリックでクエストがバックグラウンドで開始されます。ビデオ クエストの場合、その後クリックすると通常どおりビデオ モーダルが開きます。クエストを中止するには、クエスト タイルのコンテキスト メニューを開いて {{stopAuto}} を選択します。",
                    tosWarning: "これらのオプションのいずれかを使用することは、Discord の ToS に違反します。ご自身の責任でご使用ください。",
                    selectFeatures: "変更する Quest 機能を選択します。",
                    disablePopup: "アカウントパネル上のクエストポップアップを無効にする",
                    completeVideo: "バックグラウンドでビデオクエストを完了する",
                    completeGame: "バックグラウンドでゲームのクエストを完了する",
                    stopAuto: "オートコンプリートを停止する"
                },
                restyleQuests: {
                    title: "リスタイルクエスト",
                    description: "オプションのテーマカラーを使用してクエストを強調表示し、見やすくします。",
                    precedenceNote: "クエストが無視された場合でも、要求済みおよび期限切れのクエスト スタイルが優先されます。",
                    gradientStyle: "グラデーションスタイル",
                    assetPreload: "アセットのプリロード",
                    unclaimed: "未請求",
                    claimed: "主張した",
                    ignored: "無視されました",
                    expired: "期限切れ",
                    intenseGradient: "激しいリスタイルグラデーション",
                    defaultGradient: "デフォルトの再スタイルグラデーション",
                    blackGradient: "微妙な黒のグラデーション",
                    noGradient: "グラデーションなし",
                    loadAllAssets: "ページ読み込み時にすべての Quest アセットを読み込みます",
                    loadDuringScroll: "ページスクロール中にクエストアセットをロードする"
                },
                reorderQuests: {
                    title: "クエストを並べ替える",
                    description: "クエストをステータスごとに並べ替えます。 Quest ページで「Questify」並べ替えオプションが選択されている場合に適用されます。",
                    formatNote: "カンマ区切りのリストには、{{items}} のすべてが含まれている必要があります。",
                    placeholder: "UNCLAIMED、CLAIMED、IGNORED、EXPIRED をすべて含める必要があります",
                    invalidFormat: "無効な形式です。",
                    unclaimedSubsort: "未請求のサブソート",
                    claimedSubsort: "主張されたサブソート",
                    ignoredSubsort: "無視されたサブソート",
                    expiredSubsort: "期限切れのサブソート",
                    addedNewest: "追加（最新）",
                    addedOldest: "追加されました（最も古いもの）",
                    expiredRecent: "期限切れ (最新)",
                    expiredLeast: "期限切れ (最も古いもの)",
                    expiringSoon: "有効期限が切れます (最短)",
                    expiringLate: "期限切れ(最新)",
                    claimedRecent: "申請済み (最新)",
                    claimedLeast: "申請済み (最も最近のもの)",
                    ignoredQuestProfile: "無視されたクエストプロファイル",
                    sharedProfile: "共有: このクライアント共有上のすべてのアカウントは無視されます。",
                    privateProfile: "プライベート: このクライアントのすべてのアカウントには個別の無視があります。",
                    rememberSort: "並べ替えの選択を記憶する",
                    rememberFilter: "フィルターの選択を記憶する",
                    yes: "はい",
                    no: "いいえ",
                    rememberNote: "この並べ替えとフィルターの選択は、Quest ページの組み込みの並べ替えとフィルター オプションを参照します。上記のカスタム並べ替えは、Quest ページで「Questify」並べ替えオプションが選択されている場合にのみ適用されます。記憶が無効になっている場合、並べ替えまたはフィルターのオプションはクエスト ページを開くたびにリセットされます。"
                },
                fetchingQuests: {
                    title: "クエストの取得",
                    description: "Discord からクエストを取得する頻度を設定し、新しいクエストのアラートを設定します。",
                    defaultBehavior: "デフォルトでは、Discord はロード時およびクエスト ページにアクセスしたときにのみクエストを取得します。これは、以下で定義されている取得間隔がないと、このプラグインは 1 日を通じて追加された新しいクエストを認識できなくなることを意味します。",
                    requirement: "これは、クエスト ボタンが有効になって {{unclaimed}} に設定されるか、未請求の {{pill}}、{{badge}}、または {{both}} インジケーターが有効になって {{always}} に設定されるかどうかに依存します。それ以外の場合、クエストを定期的に取得する理由はありません。",
                    blockWarning: "また、{{questFeatures}} 設定で {{fetchingQuests}} がブロックされている場合、これは機能しません。",
                    fetchInterval: "フェッチ間隔",
                    alertSound: "警告音",
                    intervalPlaceholder: "30 分から 12 時間までの間隔を選択または入力します。",
                    intervalFeedback: "間隔は 30 分から 12 時間の間である必要があります。",
                    soundPlaceholder: "サウンドを選択するか、カスタム サウンド URL を指定します。",
                    soundFeedback: "サウンドが見つからないか、URL がサポートされているドメインからのものではありません。",
                    disabled: "無効",
                    minutes: "分",
                    minute: "分",
                    hours: "営業時間",
                    hour: "時間",
                    thirtyMinutes: "30分",
                    oneHour: "1時間",
                    threeHours: "3時間",
                    sixHours: "6時間",
                    twelveHours: "12時間",
                    customSound: "カスタムサウンド"
                },
                disableOptions: {
                    everything: "すべてを無効にする",
                    discovery: "「検出」タブを無効にする",
                    dms: "DMの「クエスト」タブを無効にする",
                    fetching: "クエストの取得を無効にする",
                    popup: "アカウントパネル上のポップアップを無効にする",
                    sponsored: "クエストページのスポンサーバナーを無効にする",
                    badge: "ユーザープロファイルのバッジを無効にする",
                    inventory: "ギフト在庫の移動通知を無効にする",
                    friendsList: "友達リストがアクティブになりましたプロモーション",
                    membersList: "メンバーリストのアクティブプレイアイコン",
                    gameQuests: "バックグラウンドでゲーム/アクティビティ クエストを完了する",
                    videoQuests: "バックグラウンドでビデオ視聴クエストを完了する",
                    achievementQuests: "バックグラウンドでアクティビティクエストのタスクを完了する",
                    mobileDesktop: "モバイルクエストをデスクトップ互換にする",
                    notifyOnComplete: "クエスト完了時に通知する"
                },
                options: {
                    always: "いつも",
                    unclaimed: "未請求",
                    never: "一度もない",
                    pill: "ピル",
                    badge: "バッジ",
                    both: "両方",
                    none: "なし",
                    openQuests: "オープンクエスト",
                    contextMenu: "コンテキストメニュー",
                    pluginSettings: "プラグイン設定",
                    nothing: "何もない",
                    orbs: "オーブ",
                    nitroCodes: "ニトロコード",
                    rewardCodes: "報酬コード",
                    inGameItems: "ゲーム内アイテム",
                    profileCollectibles: "プロフィール 収集品"
                }
            },
            option: {
                disableQuests: {
                    label: "クエストを無効にする",
                    description: "どの Quest 機能を無効にするかを選択します。"
                },
                disableQuestsEverything: {
                    label: "すべてを無効にする",
                    description: "すべての Quest 機能を無効にします。"
                },
                disableQuestsFetchingQuests: {
                    label: "クエストの取得を無効にする",
                    description: "Discordからのクエストの取得を無効にします。"
                },
                disableQuestsDirectMessagesTab: {
                    label: "DMの「クエスト」タブを無効にする",
                    description: "[ダイレクト メッセージ] ページの [クエスト] タブを無効にします。"
                },
                disableQuestsDiscoveryTab: {
                    label: "「検出」タブを無効にする",
                    description: "Discovery ページの Quest タブを無効にします。"
                },
                disableQuestsPageSponsoredBanner: {
                    label: "クエストページのスポンサーバナーを無効にする",
                    description: "クエスト ページのスポンサー バナーを無効にします。"
                },
                disableQuestsPopupAboveAccountPanel: {
                    label: "アカウントパネル上のポップアップを無効にする",
                    description: "アカウントパネルの上にある Quest ポップアップを無効にします。"
                },
                disableQuestsBadgeOnUserProfiles: {
                    label: "ユーザープロファイルのバッジを無効にする",
                    description: "ユーザー プロファイルの Quest バッジを無効にします。"
                },
                disableQuestsGiftInventoryRelocationNotice: {
                    label: "ギフト在庫の移動通知を無効にする",
                    description: "ギフトの在庫クエストの移転通知を無効にします。"
                },
                disableFriendsListActiveNowPromotion: {
                    label: "現在アクティブな友達リストのプロモーションを無効にする",
                    description: "友達がプレイするゲームのクエストのプロモーションを無効にします。"
                },
                disableMembersListActivelyPlayingIcons: {
                    label: "メンバーリストのアクティブプレイアイコンを無効にする",
                    description: "メンバーリストでアクティブに再生中のアイコンを無効にします。"
                },
                makeMobileQuestsDesktopCompatible: {
                    label: "モバイルクエストをデスクトップ互換にする",
                    description: "モバイル専用のクエストをデスクトップと互換性のあるものにします。"
                },
                completeVideoQuestsInBackground: {
                    label: "バックグラウンドでビデオクエストを完了する",
                    description: "ビデオの時間が経過した後、バックグラウンドでビデオ クエストを完了します。"
                },
                completeGameQuestsInBackground: {
                    label: "バックグラウンドでゲームクエストを完了する",
                    description: "ゲーム時間が経過した後、バックグラウンドでゲーム クエストを完了します。"
                },
                completeAchievementQuestsInBackground: {
                    label: "バックグラウンドでアクティビティクエストのタスクを完了する",
                    description: "バックグラウンドでアクティビティクエストの実績を完了します。"
                },
                notifyOnQuestComplete: {
                    label: "クエスト完了時に通知",
                    description: "クエストが自動的に完了したときに通知を表示します。"
                },
                questButton: {
                    label: "クエストボタン",
                    description: "サーバーリストにクエストボタンを表示します。"
                },
                questButtonDisplay: {
                    label: "クエストボタン表示",
                    description: "サーバーリストのクエストボタンに使用する表示タイプ。"
                },
                questRewardIncludeRewardCode: {
                    label: "特典コードを含める",
                    description: "クエスト数を表示するときに、報酬コードを含むクエストを含めます。"
                },
                questRewardIncludeNitroCode: {
                    label: "Nitro コードを含める",
                    description: "クエスト数を表示するときに、Nitro コードを含むクエストを含めます。"
                },
                questRewardIncludeInGame: {
                    label: "ゲーム内報酬を含める",
                    description: "クエスト数を表示するときに、ゲーム内報酬のあるクエストを含めます。"
                },
                questRewardIncludeCollectibles: {
                    label: "収集品を含める",
                    description: "クエスト数を表示する場合、収集品のあるクエストも含めます。"
                },
                questRewardIncludeOrbs: {
                    label: "オーブを含める",
                    description: "クエスト数を表示する際に、オーブのあるクエストも含めます。"
                },
                questButtonUnclaimed: {
                    label: "クエストボタン未請求インジケーター",
                    description: "サーバーリストのクエストボタンの未請求インジケーターに使用する表示タイプ。"
                },
                questButtonBadgeColor: {
                    label: "クエスト缶バッジの色",
                    description: "サーバーリストのクエストボタンバッジの色。"
                },
                questButtonLeftClickAction: {
                    label: "左クリックアクション",
                    description: "サーバーリストのQuestボタンを左クリックしたときに実行されるアクション。"
                },
                questButtonMiddleClickAction: {
                    label: "中クリックアクション",
                    description: "サーバーリストのQuestボタンを中クリックしたときに実行されるアクション。"
                },
                questButtonRightClickAction: {
                    label: "右クリックアクション",
                    description: "サーバーリストのQuestボタンを右クリックしたときに実行されるアクション。"
                },
                fetchingQuests: {
                    label: "クエストの取得",
                    description: "Discordからクエストを取得します。"
                },
                fetchingQuestsInterval: {
                    label: "クエストの取得間隔",
                    description: "Discord からクエストを取得する間隔 (秒単位)。"
                },
                fetchingQuestsAlert: {
                    label: "クエストアラートを取得しています",
                    description: "新しいクエストが検出されたときに再生されるサウンド。"
                },
                fetchingQuestsAlertVolume: {
                    label: "クエストアラートの音量を取得しています",
                    description: "新しいクエストを検出したときのアラート音の音量。"
                },
                restyleQuests: {
                    label: "リスタイルクエスト",
                    description: "クエスト ページのクエスト タイルの外観をカスタマイズします。"
                },
                restyleQuestsUnclaimed: {
                    label: "リスタイルクエスト未取得",
                    description: "クエスト ページの未取得のクエスト タイルの色。"
                },
                restyleQuestsClaimed: {
                    label: "要求されたリスタイルクエスト",
                    description: "クエスト ページで要求されたクエスト タイルの色。"
                },
                restyleQuestsIgnored: {
                    label: "クエストの再スタイルは無視されました",
                    description: "クエスト ページで無視されるクエスト タイルの色。"
                },
                restyleQuestsExpired: {
                    label: "リスタイルクエストの有効期限が切れました",
                    description: "クエスト ページの期限切れのクエスト タイルの色。"
                },
                restyleQuestsGradient: {
                    label: "クエストのグラデーションを変更する",
                    description: "クエスト タイルで使用されるグラデーションのスタイル。"
                },
                restyleQuestsPreload: {
                    label: "リスタイルクエストプリロード",
                    description: "Quest タイルのアセットをプリロードしてみます。"
                },
                reorderQuests: {
                    label: "クエストを並べ替える",
                    description: "クエストをステータスごとに並べ替えます。デフォルトの並べ替えの場合は空のままにします。カンマ区切りのリストには、UNCLAIMED、CLAIMED、IGNORED、EXPIRED のすべてが含まれている必要があります。"
                },
                unclaimedSubsort: {
                    label: "未請求のサブソート",
                    description: "未請求のクエストのサブソート方法。"
                },
                claimedSubsort: {
                    label: "主張されたサブソート",
                    description: "要求されたクエストのサブソート方法。"
                },
                ignoredSubsort: {
                    label: "無視されたサブソート",
                    description: "無視されたクエストのサブソート方法。"
                },
                expiredSubsort: {
                    label: "期限切れのサブソート",
                    description: "期限切れのクエストのサブソート方法。"
                },
                unclaimedUnignoredQuests: {
                    label: "要求されていない未無視のクエスト",
                    description: "未請求および無視されていないクエストの数を追跡します。"
                },
                onQuestsPage: {
                    label: "クエストページ上",
                    description: "ユーザーが現在クエスト ページにいるかどうか。"
                },
                triggerQuestsRerender: {
                    label: "トリガークエストの再レンダリング",
                    description: "この設定を切り替えることで、クエスト ページの再レンダリングをトリガーします。"
                },
                ignoredQuestProfile: {
                    label: "無視されたクエストプロファイル",
                    description: "無視されたクエストに使用されるプロファイル。"
                },
                rememberQuestPageSort: {
                    label: "クエストページの並べ替えを記憶",
                    description: "クエスト ページで最後に使用した並べ替えを覚えておいてください。"
                },
                rememberQuestPageFilters: {
                    label: "クエストページフィルターを記憶する",
                    description: "クエスト ページで最後に使用したフィルターを覚えておいてください。"
                },
                lastQuestPageSort: {
                    label: "ラストクエストページの並び替え",
                    description: "クエスト ページで最後に使用した並べ替えを覚えておいてください。"
                },
                lastQuestPageFilters: {
                    label: "最後のクエストページのフィルター",
                    description: "クエスト ページで最後に使用したフィルターを覚えておいてください。"
                },
                ignoredQuestIDs: {
                    label: "無視されたクエストID",
                    description: "無視されるクエスト ID の配列。"
                },
                resumeQuestIDs: {
                    label: "クエストIDを再開する",
                    description: "バックグラウンドで自動完了されるクエスト ID の配列。"
                }
            },
            button: {
                questInProgressWithTime: "完了しました ({{remainTime}})",
                completing: "完了中",
                resume: "履歴書 (~{{remainTime}})",
                complete: "{{remainTime}} を完了してください",
                completeImmediate: "完了 (即時)",
                completed: "完了しました"
            },
            reward: {
                orbs: "{{completingText}} は {{orbQuantity}} オーブです。",
                article: "{{completingText}} は {{itemName}} です。",
                unrecognized: "{{completingText}} 認識されない報酬タイプ。"
            },
            notification: {
                completed: {
                    title: "クエスト完了",
                    body: "{{questName}} クエストは完了しました。"
                }
            }
        },
        questionMarkReplacement: {
            name: "QuestionMarkReplacement",
            description: "メッセージに疑問符のみが含まれている場合は、すべての疑問符を選択した文字列に置き換えます。",
            option: {
                replace: {
                    label: "交換する",
                    description: "と置き換えます"
                }
            }
        },
        quickMention: {
            name: "QuickMention",
            description: "メッセージアクションバーにクイックメンションボタンを追加します",
            tooltip: "クイックメンション"
        },
        quickReply: {
            name: "QuickReply",
            description: "キーバインド経由でメッセージに返信 (Ctrl+上/下) し、メッセージを編集 (Ctrl+Shift+上/下)",
            option: {
                shouldMention: {
                    label: "言及すべき",
                    description: "デフォルトでの ping 応答",
                    noReplyMentionPlugin: "NoReplyMention プラグインをフォローする (有効な場合)",
                    enabled: "有効",
                    disabled: "無効"
                },
                ignoreBlockedAndIgnored: {
                    label: "ブロックされて無視される",
                    description: "ナビゲート時にブロック/無視されたユーザーによるメッセージを無視する"
                }
            }
        },
        quickThemeSwitcher: {
            name: "QuickThemeSwitcher",
            description: "キーボード ショートカットを使用してテーマをすばやく切り替えます。",
            about: {
                title: "バインディング",
                description: "Ctrl/Cmd+Shift+矢印を使用して移動します (左/右: サイクルテーマ、上: 有効、下: 無効)。",
                reload: "Ctrl/Cmd+Shift+Alt を押して、テーマ リストを再読み込みします。"
            },
            modal: {
                added: "{{count}} テーマ{{s}} を追加しました",
                removed: "{{count}} テーマ{{s}} を削除しました",
                reloaded: "{{themeCount}} テーマをリロードしました",
                addedLocal: "{{count}} ローカル テーマ{{s}} を追加しました",
                removedLocal: "{{count}} ローカル テーマ{{s}} を削除しました",
            },
            option: {
                includeLocal: {
                    label: "ローカルを含む",
                    description: "ローカルなテーマを含める"
                },
                includeOnline: {
                    label: "オンラインを含める",
                    description: "オンラインテーマを含める"
                },
                sortOrder: {
                    label: "並べ替え順序",
                    description: "ソート方法",
                    asc: "A-Z",
                    desc: "Z-A",
                    recent: "最近の"
                },
                autoRefresh: {
                    label: "自動更新",
                    description: "変更が検出されたときにテーマリストを自動更新する"
                },
                showNotifications: {
                    label: "通知を表示する",
                    description: "テーマが追加/削除されたときに通知を表示する"
                }
            }
        },
        quoter: {
            name: "Quoter",
            description: "メッセージからインスピレーションを与える引用画像を作成する機能を追加します",
            context: {
                quote: "引用"
            },
            modal: {
                title: "4K で捕まえましょう",
                grayscale: "グレースケール",
                export: "輸出",
                send: "送信",
                saveAsGIF: "GIFとして保存",
                saveDescription: "画像を PNG ではなく GIF として保存/送信します",
                showWatermark: "ウォーターマークを表示",
                watermarkText: "透かしテキスト (最大 32 文字)"
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
                    label: "透かし",
                    description: "カスタム透かしテキスト (最大 32 文字)"
                },
                grayscale: {
                    label: "グレースケール",
                    description: "デフォルトでグレースケールを有効にする"
                },
                showWatermark: {
                    label: "ウォーターマークを表示",
                    description: "デフォルトでウォーターマークを表示する"
                },
                saveAsGif: {
                    label: "GIF として保存",
                    description: "デフォルトでGIFとして保存"
                }
            }
        },
        randomVoice: {
            name: "RandomVoice",
            description: "ランダムな音声通話に参加するためのボタンを [ミュート] ボタンの近くに追加します。",
            tooltip: "ランダムボイス",
            context: {
                label: "音声状態修飾子",
                amountLabel: "ユーザー金額",
                spacesLabel: "残りスペースあり",
                voiceLabel: "音声制限",
                selfLabel: "自己設定",
                select: {
                    servers: "サーバーの選択",
                    list: "リストの選択",
                    filters: "フィルターの選択",
                    amount: "ユーザー金額",
                    userAmount: "{{amount}} ユーザー{{s}}",
                    parameters: "パラメータ",
                    moreThan: "より多い",
                    lessThan: "未満",
                    equalTo: "に等しい",
                    spaces: "残りスペース",
                    voice: "音声制限"
                },
                filter: {
                    muted: "ミュート",
                    deafened: "耳が聞こえない",
                    camera: "カメラ",
                    stream: "ストリーム",
                    includeFilters: "フィルターを含める",
                    avoidFilters: "フィルターを避ける"
                },
                reset: {
                    list: "リストのリセット"
                },
                voice: {
                    label: "音声オプション",
                    auto: {
                        mute: "オートミュート",
                        deafen: "自動聴覚障害者",
                        camera: "オートカメラ",
                        stream: "自動ストリーム",
                        leaveWhenEmpty: "空になったら出発",
                        navigate: "自動ナビゲート",
                        stage: "回避ステージ",
                        afk: "AFKを避ける"
                    }
                },
                invalid: {
                    server: "無効なサーバー"
                }
            },
            option: {
                userAmountOperation: {
                    label: "ユーザー量の操作",
                    description: "ユーザー数の操作を選択します"
                },
                userAmount: {
                    label: "ユーザー金額",
                    description: "ユーザー数を選択してください"
                },
                spacesLeftOperation: {
                    label: "スペース残量操作",
                    description: "最大ユーザー数に対する操作を選択してください"
                },
                spacesLeft: {
                    label: "残りスペース",
                    description: "最大ユーザー数を選択してください"
                },
                vcLimitOperation: {
                    label: "音声チャンネル制限動作",
                    description: "音声チャンネルの動作を選択します。"
                },
                vcLimit: {
                    label: "音声チャンネルの制限",
                    description: "音声チャネル制限を選択します"
                },
                servers: {
                    label: "サーバー",
                    description: "含まれるサーバー"
                },
                autoNavigate: {
                    label: "自動ナビゲート",
                    description: "音声チャンネルに自動的に移動します。"
                },
                autoCamera: {
                    label: "オートカメラ",
                    description: "カメラを自動的にオンにします"
                },
                autoStream: {
                    label: "自動ストリーム",
                    description: "ストリームを自動的にオンにする"
                },
                selfMute: {
                    label: "オートミュート",
                    description: "音声チャンネルに参加すると、マイクが自動的にミュートになります。"
                },
                selfDeafen: {
                    label: "自動聴覚障害者",
                    description: "音声チャンネルに参加すると、自動的に音声が聞こえなくなります。"
                },
                leaveEmpty: {
                    label: "空になったら出発",
                    description: "ボイスチャットが空のときにランダムな通話を検索します。"
                },
                avoidStages: {
                    label: "回避ステージ",
                    description: "ステージ音声チャンネルへの参加を回避します。"
                },
                avoidAfk: {
                    label: "AFKを避ける",
                    description: "AFK 音声チャネルへの参加を回避します。"
                },
                video: {
                    label: "ビデオ",
                    description: "ビデオをオンにしたユーザーを検索します"
                },
                stream: {
                    label: "ストリーム",
                    description: "ストリーミングしているユーザーを検索します"
                },
                mute: {
                    label: "ミュート",
                    description: "ミュートされているユーザーを検索します"
                },
                deafen: {
                    label: "聴覚障害者",
                    description: "聴覚障害のあるユーザーを検索します"
                },
                includeStates: {
                    label: "フィルターを含める",
                    description: "州を含めるオプション"
                },
                avoidStates: {
                    label: "フィルターを避ける",
                    description: "状態を回避するオプション"
                }
            },
            alert: {
                failed: "ボイスチャンネルが見つかりませんでした!"
            }
        },
        reactErrorDecoder: {
            name: "ReactErrorDecoder",
            description: "React エラー コードを人間が読めるメッセージにデコードします。"
        },
        readAllNotificationsButton: {
            name: "ReadAllNotificationsButton",
            description: "ボタンを 1 回クリックするだけで、すべてのサーバー通知を読むことができます。",
            button: "すべて読む"
        },
        recentDMSwitcher: {
            name: "RecentDMSwitcher",
            description: "最近使用した DM 間の Ctrl+Tab (Ctrl+Shift+Tab 逆)",
            option: {
                visualStyle: {
                    label: "ビジュアルスタイル",
                    description: "サイクリング中の視覚的なインジケーターのスタイル",
                    overlay: "オーバーレイ (Alt+Tab スタイル)",
                    toast: "トースト（ステータスメッセージ）",
                    off: "オフ"
                },
                overlayMode: {
                    label: "オーバーレイモード",
                    description: "オーバーレイコンテンツ",
                    row: "最近の行",
                    current: "現在のみ",
                },
                amountOfUsers: {
                    label: "ユーザー数",
                    description: "オーバーレイに表示するユーザーの数"
                },
                overlayRowLength: {
                    label: "オーバーレイ行の長さ",
                    description: "連続して表示する最近の DM の数"
                },
                overlayShowAvatars: {
                    label: "オーバーレイ表示アバター",
                    description: "ユーザーのアバターをオーバーレイで表示する"
                },
                toastDurationMs: {
                    label: "トースト時間 (ミリ秒)",
                    description: "ステータスメッセージの長さ"
                },
                clearRdms: {
                    label: "RDMSリストのクリア",
                    description: "テスト ユーティリティ: RDM リストのクリア",
                    toast: "RMDS履歴をクリアしました",
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
                    label: "お知らせ",
                    description: "また、削除されたときに画面の上部に通知を表示します (通知を見逃したくない場合はこれを使用します)。"
                },
                offlineRemovals: {
                    label: "オフラインでの削除",
                    description: "オフライン中に削除された場合は、Discord の起動時に通知されます。"
                },
                friends: {
                    label: "友達",
                    description: "友達があなたを削除したときに通知する"
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
                    description: "グループチャットから削除されたときに通知する"
                }
            },
            notification: {
                removedFriend: "{{user}} さんがあなたを友達から削除しました。",
                cancelledFriendRequest: "{{user}} からの友達リクエストは削除されました。",
                removedFromServer: "あなたはサーバー {{server}} から削除されました。",
                removedFromGroup: "あなたはグループ {{group}} から削除されました。",
                noLongerGroup: "あなたはグループ {{group}} にはもう属していません。",
                noLongerServer: "あなたはもうサーバー {{server}} にはいません。",
                noLongerFriend: "あなたはもう {{user}} とは友達ではありません。",
                friendRequestRevoked: "{{user}} からの友達リクエストは取り消されました。",
                ok: "わかりました"
            }
        },
        remix: {
            name: "Remix",
            description: "ファイルアップロードボタンの右クリックメニューに「リミックス」オプションを追加します。このオプションを使用すると、単純な画像エディタで画像が開き、編集した画像をチャットに直接送信できるようになります。",
            label: "リミックス",
            button: {
                send: "送信",
                close: "近い",
                brush: "ブラシ",
                erase: "消去",
                crop: "作物",
                shape: "形",
                reset: "リセット",
                clear: "クリア"
            },
            editor: {
                choose: "画像を選択してください",
                browse: "ブラウズ",
                rectangle: "矩形",
                ellipse: "楕円",
                line: "ライン",
                arrow: "矢印",
                fill: "埋める"
            }
        },
        repeatMessages: {
            name: "RepeatMessages",
            description: "メッセージをすばやく繰り返すことができます。 Shift キーを押したまま「Repeat」オプションをクリックすると、メッセージに返信します。",
            button: "繰り返し (クリック) / 繰り返して返信 (Shift + クリック)",
            context: {
                repeat: "繰り返す",
                repeatAndReply: "繰り返して返信する"
            }
        },
        replaceGoogleSearch: {
            name: "ReplaceGoogleSearch",
            description: "Google 検索を別のエンジンに置き換えます。",
            option: {
                customEngineName: {
                    label: "カスタムエンジン名",
                    description: "カスタム検索エンジンの名前"
                },
                customEngineURL: {
                    label: "カスタムエンジンのURL",
                    description: "エンジンの URL"
                },
                replacementEngine: {
                    label: "交換用エンジン",
                    description: "メニューを追加する代わりに、特定の検索エンジンに置き換えます",
                    off: "オフ",
                    custom: "カスタムエンジン",
                }
            },
            context: {
                label: "検索テキスト",
                searchWith: "{{name}} で検索"
            }
        },
        replyPingControl: {
            name: "ReplyPingControl",
            description: "ホワイトリスト機能を使用して、メッセージ返信時に常に ping を受信するかどうかを制御します",
            option: {
                alwaysPingOnReply: {
                    label: "応答時に常に ping を送信する",
                    description: "誰かがあなたのメッセージに返信すると、常に ping が送信されます"
                },
                replyPingWhitelist: {
                    label: "返信 Ping ホワイトリスト",
                    description: "常に応答 ping を受信するユーザー ID のカンマ区切りリスト"
                }
            }
        },
        replyTimestamp: {
            name: "ReplyTimestamp",
            description: "返信メッセージのプレビューにタイムスタンプを表示します"
        },
        revealAllSpoilers: {
            name: "RevealAllSpoilers",
            description: "メッセージ内のすべてのネタバレを表示するには、Ctrl キーを押しながらスポイラーをクリックするか、チャット内で Ctrl + Shift キーを押しながらクリックします"
        },
        reverseImageSearch: {
            name: "ReverseImageSearch",
            description: "ImageSearch を画像コンテキスト メニューに追加します",
            context: {
                label: "画像検索",
                all: "すべて検索"
            }
        },
        reviewDB: {
            name: "ReviewDB",
            description: "他のユーザーをレビューする (プロフィールに新しいセクションを追加します)",
            notification: {
                newReview: "あなたのプロフィールに新しいレビューがあります!",
                auth: {
                    error: "認証中にエラーが発生しました",
                    successfully: "ログインに成功しました!",
                    failed: "認証に失敗しました",
                    review: "レビューを追加することを許可してください。",
                    opening: "認証ウィンドウを開いています...",
                    need: "ユーザーをレビューするには承認が必要です。"
                },
                error: {
                    fast: "リクエストの送信が速すぎます。数秒待ってからもう一度試してください。",
                    fetching: "レビューの取得中にエラーが発生しました。",
                    action: {
                        failed: "{{action}} ユーザーへのアクセスに失敗しました",
                        success: "ユーザーを正常に{{action}}しました"
                    }
                }
            },
            modal: {
                delete: {
                    title: "本気ですか？",
                    description: "本当にこのレビューを削除してもよろしいですか?",
                    confirm: "消去",
                    cancel: "どうでも",
                    error: "レビューを削除するにはログインする必要があります。",
                },
                report: {
                    title: "本気ですか？",
                    description: "本当にこのレビューを報告してもよろしいですか?",
                    confirm: "報告",
                    cancel: "どうでも",
                    error: "レビューを報告するにはログインする必要があります。",
                },
                block: {
                    title: "本気ですか？",
                    description: "本当にこのユーザーをブロックしますか?彼らのレビューはもう表示されません。",
                    confirm: "ブロック",
                    cancel: "どうでも",
                    error: "ユーザーをブロックするにはログインする必要があります。",
                },
                blocked: {
                    title: "ブロックされたユーザー",
                    auth: "ReviewDB にログインしていません。",
                    noBlocked: "ブロックされているユーザーはいません。",
                    fetch: "ブロックされたユーザーを取得中にエラーが発生しました。"
                },
                reviews: {
                    title: "さんのレビュー",
                    noUser: "まだ誰もこのユーザーをレビューしていないようです。あなたがその最初の人になれるかもしれません!",
                    noServer: "まだ誰もこのサーバーをレビューしていないようです。あなたがその最初の人になれるかもしれません!"
                }
            },
            button: {
                appeal: "訴える",
                ok: "わかりました",
                more: "続きを読む",
                reply: "@{{user}} に返信",
                update: "@{{user}} のレビューを更新",
                review: "@{{user}} をレビューしてください"
            },
            context: {
                view: "レビューを見る",
                blocked: "このユーザーをブロックしました",
                delete: "レビューの削除",
                report: "レポートレビュー",
                block: "ユーザーをブロックする",
                unblock: "ユーザーのブロックを解除する",
                reply: "返信レビュー"
            },
            option: {
                authorize: {
                    label: "承認する",
                    button: "ReviewDB で承認する"
                },
                notifyReviews: {
                    label: "レビューを通知する",
                    description: "起動時に新しいレビューを通知する"
                },
                showWarning: {
                    label: "警告を表示",
                    description: "レビューリストの先頭に敬意を払うよう警告を表示する"
                },
                hideTimestamps: {
                    label: "タイムスタンプを非表示にする",
                    description: "レビューのタイムスタンプを非表示にする"
                },
                hideBlockedUsers: {
                    label: "ブロックされたユーザーを非表示にする",
                    description: "ブロックされたユーザーのレビューを非表示にする"
                },
                buttons: {
                    label: "ボタン",
                    manageBlocked: "ブロックされたユーザーの管理",
                    support: "ReviewDB 開発のサポート",
                    website: "ReviewDB Web サイト",
                    server: "ReviewDB サポートサーバー"
                }
            }
        },
        richMagnetLinks: {
            name: "RichMagnetLinks",
            description: "マグネット リンクをメッセージ リンクのようにレンダリングします",
            unknown: "不明なファイル名"
        },
        roleColorEverywhere: {
            name: "RoleColorEverywhere",
            description: "可能な限りトップロールの色を追加します",
            option: {
                chatMentions: {
                    label: "チャットのメンション",
                    description: "チャットのメンション (メッセージ ボックスを含む) で役割の色を表示する"
                },
                memberList: {
                    label: "メンバー一覧",
                    description: "メンバーリストのロールヘッダーにロールの色を表示する"
                },
                voiceUsers: {
                    label: "音声ユーザー",
                    description: "ボイスチャットユーザーリストに役割の色を表示する"
                },
                reactorsList: {
                    label: "リアクターリスト",
                    description: "リアクター リストにロールの色を表示する"
                },
                pollResults: {
                    label: "投票結果",
                    description: "投票結果に役割の色を表示する"
                },
                colorChatMessages: {
                    label: "カラーチャットメッセージ",
                    description: "作成者の役割の色に基づいてチャット メッセージを色分けする"
                },
                messageSaturation: {
                    label: "メッセージの飽和",
                    description: "メッセージカラーリングの強度"
                }
            }
        },
        rpcEditor: {
            name: "RPCEditor",
            description: "リッチ プレゼンスのタイプとコンテンツを編集する",
            option: {
                replacedAppIds: {
                    label: "置き換えられたアプリID",
                }
            },
            modal: {
                tutorial: {
                    title: "現在実行中のアクティビティの ID",
                    noRunning: "ランニングアクティビティはありません",
                    available: "利用可能な変数",
                    variableText: "すべてのフィールド (ストリーム URL を除く) に、元のコンテンツに自動的に置き換えられる変数を入力できます。",
                    more: "さらに詳しく",
                    details: {
                        leave: "フィールドを空のままにして、そのままにしておきます。",
                        set: "プレゼンス上でフィールドを非表示にするには、フィールドを「null」に設定します。",
                        reload: "変更を適用するには、Discord をリロードする必要がある場合があります。"
                    }
                },
                settings: {
                    applyEdits: "編集をアプリに適用する",
                    addNewApp: "新しいアプリケーションを追加する",
                    appId: "アプリケーションID",
                    invalidAppId: "無効なアプリケーション ID",
                    newActivityType: "新しいアクティビティタイプ",
                    activityTypes: {
                        playing: "遊ぶ",
                        watching: "見てる",
                        listening: "リスニング",
                        competing: "競争する",
                        streaming: "ストリーミング"
                    },
                    streamUrl: "ストリーム URL (YouTube または Twitch である必要があります)",
                    invalidStreamUrl: "無効なストリーム URL",
                    newName: "新しい名前",
                    newDetails: "新しい詳細",
                    newState: "新しい状態",
                    largeImage: "大きな画像",
                    smallImage: "小さい画像",
                    text: "文章",
                    url: "URL",
                    firstLine: "(最初の行)",
                    secondLine: "(2行目)",
                    thirdLine: "(3行目)",
                    alsoThirdLine: "(3行目も)",
                    hideAssets: "アセットを非表示にする (大きい画像と小さい画像)",
                    hideTimestamps: "タイムスタンプを非表示にする"
                }
            },
        },
        rpcStats: {
            name: "RPCStats",
            description: "RPC としてのアクティビティに関する統計を表示します。",
            option: {
                assetURL: {
                    label: "アセットの URL",
                    description: "RPC に使用するイメージ。空白のままにした場合、プロフィール写真が使用されます"
                },
                rpcTitle: {
                    label: "RPC タイトル",
                    description: "RPC のタイトル"
                },
                statDisplay: {
                    label: "ステータス表示",
                    description: "RPC では何を表示する必要がありますか? (一行しか入れられません、確かに)",
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
                    description: "アルバムのカバー画像を RPC イメージとして使用する必要がありますか? (Last.fm 表示を選択している場合)"
                },
                lastFMStatFormat: {
                    label: "Last.fm 統計フォーマット",
                    description: "Last.fm 統計はどのようにフォーマットすべきですか? $album はアルバム名に置き換えられ、$artist はアーティスト名に置き換えられます。"
                }
            },
            noInfo: "今のところ情報はありません:(",
            messagesToday: "今日送信されたメッセージ: {{count}}",
            messagesAllTime: "常に送信されるメッセージ: {{count}}"
        },
        saveFavoriteGIFs: {
            name: "SaveFavouritedGIFs",
            description: "お気に入りの GIF URL をエクスポート",
            toolbox: "お気に入りのGIFを保存する",
            title: "お気に入りのGIFを保存する",
            command: {
                savegifs: {
                    description: "お気に入りの GIF URL をすべてテキスト ファイルに保存します"
                },
                saveworkinggifs: {
                    description: "お気に入りの GIF をすべてテストし、まだ動作しているものだけを保存します"
                }
            },
            option: {
                showToolboxButton: {
                    label: "ツールボックスボタンを表示",
                    description: "Plexcord ツールボックスに「お気に入りの GIF を保存」ボタンを表示 (再読み込みが必要)"
                }
            },
            toast: {
                save: "GIF が {{filename}} として正常に保存されました",
                failed: "GIFの保存に失敗しました",
                no: "お気に入りの GIF が見つかりませんでした。",
                testing: "{{count}} GIF をテストしています。これには少し時間がかかる場合があります...",
                noneWorking: "保存した GIF はどれも機能していないようです。",
                saved: "壊れている可能性のある {{broken}} GIF をフィルタリングしました。 {{saved}} 個の動作 GIF を保存しました。"
            }
        },
        scheduledMessages: {
            name: "ScheduledMessages",
            description: "メッセージが特定の時間に送信されるか、遅延して送信されるようにスケジュールを設定します。",
            toolbox: {
                toggle: "スケジュールされたメッセージを表示する"
            },
            option: {
                maxMessagesPerMinute: {
                    label: "1 分あたりの最大メッセージ数",
                    description: "同じ分間に送信できる、チャネルごとのスケジュールされたメッセージの最大数。"
                },
                checkIntervalSeconds: {
                    label: "チェック間隔(秒)",
                    description: "プラグインが送信するメッセージをチェックする頻度。"
                },
                showNotifications: {
                    label: "通知を表示する",
                    description: "メッセージが送信されたときにトースト通知を表示します。"
                },
                showPhantomMessages: {
                    label: "ファントムメッセージを表示する",
                    description: "スケジュールされたメッセージをチャットにファントム メッセージとして表示します。"
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
                messageFailed: "スケジュールされたメッセージの送信に失敗しました",
                maxMessagesReached: "チャネルあたり 1 分あたりの最大 {{max}} メッセージに達しました",
                messageScheduled: "メッセージ予定あり！",
                messageRemoved: "スケジュールされたメッセージが削除されました",
                allCleared: "スケジュールされたメッセージはすべてクリアされました"
            },
            button: {
                tooltipOn: "スケジュール モード オン (クリックして無効にし、右クリックしてリストを表示)",
                tooltipOff: "スケジュール モード オフ (クリックして有効にし、右クリックしてリストを表示)"
            },
            accessory: {
                scheduledFor: "{date}{timeLeft}に予定されています",
                remaining: {
                    days: "残り {{days}}d {{hours}}h",
                    hours: "残り {{hours}}h {{minutes}}m",
                    minutes: "残り{{minutes}}分"
                }
            },
            scheduleModal: {
                title: "スケジュールメッセージ",
                schedulingFor: "スケジュール: {{channel}}",
                scheduleType: "スケジュールの種類",
                delay: "遅れ",
                specificTime: "特定の時間",
                delayMinutes: "遅延 (分)",
                dateTime: "日付と時刻",
                error: {
                    invalidDelay: "有効な遅延を入力してください (最低 1 分)",
                    invalidDateTime: "将来の日付と時刻を選択してください"
                },
                schedule: "スケジュール",
                cancel: "キャンセル"
            },
            viewModal: {
                title: "スケジュールされたメッセージ",
                clearAll: "すべてクリア",
                noMessages: "スケジュールされたメッセージはありません",
                delete: "消去",
                close: "近い"
            }
        },
        searchFix: {
            name: "SearchFix",
            description: "「虫眼鏡を落としてしまいました!」という迷惑な問題を修正します。エラー。",
            notPerfect: "この修正は完全ではないため、問題を修正するには検索バーを再読み込みする必要がある場合があります。",
            paragraph1: "Discord では最大オフセット 5000 のみが許可されています (これが虫眼鏡エラーの原因です)。",
            paragraph2: "これは、過去のメッセージ 5,000 件と、将来のメッセージ 5,000 件のみを表示できることを意味します (古い順に並べ替える場合)。",
            paragraph3: "このプラグインは、Discord の制限を回避するために反対の並べ替え方法にジャンプするだけです。",
            paragraph4: "ただし、大規模な検索結果があり、両方の並べ替え方法では取得できないメッセージを表示しようとすると、",
            paragraph5: "プラグインは単にオフセット 0 (ソート方法に応じて最新または最も古いメッセージ) を表示します。"
        },
        secretRingToneEnabler: {
            name: "SecretRingToneEnabler",
            description: "Discord 着信音のシークレット バージョンを常に再生します (特別な着信音イベント中を除く)。",
            option: {
                onlySnow: {
                    label: "雪着信音イベント期間中のみ",
                    description: "Snow Halation テーマのみを再生する"
                }
            }
        },
        summaries: {
            name: "Summaries",
            description: "すべてのサーバーで Discord の実験的な概要機能を有効にし、AI が生成した会話の概要を表示します",
            option: {
                summaryExpiryThresholdDays: {
                    label: "概要有効期限しきい値 (日)",
                    description: "概要が削除されるまでの日数。チャンネルごとに最大 50 件のサマリーのみが保持されることに注意してください"
                }
            }
        },
        selfForward: {
            name: "SelfForward",
            description: "現在のチャンネルをフォワードリストポップアップに追加します"
        },
        sendTimestamps: {
            name: "SendTimestamps",
            description: "チャット ボックス ボタンとテキスト ショートカットを使用してタイムスタンプを簡単に送信します。詳細な説明を読んでください。",
            sample: {
                paragraph1: "時間のみのタイムスタンプをすばやく送信するには、メッセージに「HH:MM」形式のタイムスタンプ (バッククォートを含む!) を含めます。",
                paragraph2: "以下の例を参照してください。\nさらに具体的な内容が必要な場合は、チャット バーの [日付] ボタンを使用してください。",
                examples: "例:"
            },
            modal: {
                title: "タイムスタンプピッカー",
                light: "ライト",
                dark: "暗い",
                format: "タイムスタンプの形式",
                preview: "プレビュー",
                insert: "入れる",
                insertTimestamp: "タイムスタンプの挿入"
            },
            option: {
                replaceMessageContents: {
                    label: "メッセージの内容を置き換える",
                    description: "メッセージ内容のタイムスタンプを置き換える"
                }
            }
        },
        serverInfo: {
            name: "ServerInfo",
            description: "サーバーに関する情報を表示できます",
            context: {
                serverInfo: "サーバー情報"
            },
            option: {
                sorting: {
                    label: "仕分け",
                    description: "ユーザー名、または該当する場合は表示名",
                    username: "ユーザー名",
                    displayname: "表示名",
                    none: "並べ替えないでください"
                }
            },
            modal: {
                tab: {
                    serverInfo: "サーバー情報",
                    friends: "友達",
                    mutualUsers: "相互ユーザー",
                    blockedUsers: "ブロックされたユーザー",
                    ignoredUsers: "無視されたユーザー"
                },
                owner: "サーバー所有者",
                loading: "読み込み中...",
                createdAt: "作成日",
                joinedAt: "に参加しました",
                vanityLink: "バニティリンク",
                preferredLocale: "優先ロケール",
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
                roles: "役割"
            }
        },
        serverListIndicators: {
            name: "ServerListIndicators",
            description: "サーバーリストにオンラインフレンド数またはサーバー数を追加します",
            friends: "友達",
            servers: "サーバー",
            option: {
                mode: {
                    label: "モード",
                    description: "サーバー一覧に表示するモード",
                    friend: "オンラインの友達のみカウント",
                    server: "サーバー数のみ",
                    both: "サーバーとオンラインの友達の両方の数"
                },
                useCompact: {
                    label: "コンパクトモードを使用する",
                    description: "インジケーターをテキストのみで表示します"
                }
            }
        },
        serverSearch: {
            name: "ServerSearch",
            description: "クイック検索ボタンでサーバーをより適切にナビゲートします",
            tooltip: "検索"
        },
        shikiCodeblocks: {
            name: "ShikiCodeblocks",
            description: "Shiki を利用して、VS Code スタイルのコードブロックを Discord に導入します",
            option: {
                theme: {
                    label: "テーマ",
                    description: "デフォルトのテーマ"
                },
                customTheme: {
                    label: "カスタムテーマ",
                    description: "カスタム VS Code テーマへのリンク",
                    mustURL: "有効な URL である必要があります",
                    mustJSON: "JSON ファイルである必要があります"
                },
                tryHljs: {
                    label: "Hljs へのフォールバック",
                    description: "より軽量なデフォルトの Discord ハイライターとテーマを使用します。",
                    never: "一度もない",
                    secondary: "Highlight.js ではなく Shiki を好む",
                    primary: "Shiki ではなく Highlight.js を好む",
                    always: "いつも"
                },
                useDevIcon: {
                    label: "言語アイコンに Devicon を使用する",
                    description: "コードブロックに言語アイコンを表示する方法",
                    disabled: "無効",
                    colorless: "無色",
                    colored: "色付き"
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
            name: "ShowAllMessageButtons",
            description: "Shift キーを押しているかどうかに関係なく、常にすべてのメッセージ ボタンを表示します。",
            option: {
                noShiftDelete: {
                    label: "シフト削除なし",
                    description: "メッセージを削除するためにシフトを押し続ける要件を削除します。"
                },
                noShiftPin: {
                    label: "シフトピンなし",
                    description: "メッセージを固定するためにシフトを押し続ける要件を削除します。"
                }
            }
        },
        showBadgesInChat: {
            name: "ShowBadgesInChat",
            description: "チャット内の名前の横にメッセージ作成者のバッジを表示します。",
            option: {
                showPlexcordDonor: {
                    label: "Plexcord 寄付者バッジを表示する",
                    description: "チャットで Plexcord 寄付者バッジを表示できるようにします。"
                },
                plexcordDonorPosition: {
                    label: "Plexcord ドナー バッジの位置",
                    description: "Plexcord の寄付者バッジの位置。"
                },
                showPlexcordContributor: {
                    label: "Plexcord 貢献者バッジを表示する",
                    description: "チャットに Plexcord 貢献者バッジを表示できるようにします。"
                },
                plexcordContributorPosition: {
                    label: "Plexcord 貢献者バッジの位置",
                    description: "Plexcord の貢献者バッジの位置。"
                },
                showDiscordProfile: {
                    label: "Discord プロフィールバッジを表示",
                    description: "チャットに Discord プロフィールバッジを表示できるようにします。"
                },
                discordProfilePosition: {
                    label: "Discord プロフィールバッジの位置",
                    description: "Discord プロフィールバッジの位置。"
                },
                showDiscordNitro: {
                    label: "Discord Nitro バッジを表示",
                    description: "チャットに Discord Nitro バッジを表示できるようにします。"
                },
                discordNitroPosition: {
                    label: "Discord Nitro バッジの位置",
                    description: "Discord Nitro バッジの位置。"
                },
                badgeSettings: {
                    label: "バッジの設定",
                    description: "チャットに表示される他のバッジの位置を設定します。",
                    modal: "バッジをドラッグして順序を変更します。クリックして特定のバッジ タイプを有効または無効にできます。"
                }
            },
            badge: {
                plexcord: "プレックスコードの寄付者バッジ",
                contributor: "Plexcord 貢献者バッジ",
                discordProfile: "Discord プロフィール バッジ (HypeSquad、Discord Staff、Active Developer など)",
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
                moderatorProgram: "モデレーター プログラムの卒業生"
            },
            modal: {
                plexcordContributor: "Plexcord の貢献者",
                discordNitro: "ディスコードニトロ",
                basic: "基本",
                classic: "クラシック"
            }
        },
        showConnections: {
            name: "ShowConnections",
            description: "接続されているアカウントをユーザーのポップアウトに表示する",
            option: {
                iconSize: {
                    label: "アイコンのサイズ",
                    description: "アイコンのサイズ (px)"
                },
                iconSpacing: {
                    label: "アイコンの間隔",
                    description: "アイコンの余白",
                    compact: "コンパクト",
                    cozy: "居心地の良い",
                    roomy: "広々"
                }
            }
        },
        showHiddenChannels: {
            name: "ShowHiddenChannels",
            description: "表示するアクセス権がないチャンネルを表示します。",
            tooltip: "隠しチャンネル",
            option: {
                channelStyle: {
                    label: "チャンネルスタイル",
                    description: "非表示のチャンネルを表示するために使用されるスタイル。",
                    classic: "クラシック",
                    muted: "ミュート",
                    showUnreads: "未読を表示",
                    mutedWithUnreads: "ミュートして未読を表示"
                },
                showMode: {
                    label: "ショーモード",
                    description: "非表示のチャンネルを表示するために使用されるモード。",
                    lock: "代わりにロックアイコンを使用したプレーンなスタイル",
                    hidden: "右側に目のアイコンが隠れた落ち着いたスタイル",
                    lockIconRight: "右側のロックアイコン"
                },
                defaultAllowedUsersAndRolesDropdownState: {
                    label: "デフォルトの許可されたユーザーとロールのドロップダウン状態",
                    description: "非表示チャネルの許可されたユーザーとロールのドロップダウンをデフォルトで開くかどうか"
                }
            },
            channelType: {
                text: "文章",
                announcement: "発表",
                forum: "フォーラム",
                voice: "声",
                stage: "ステージ"
            },
            sortOrder: {
                latestActivity: "最新の活動",
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
                threads: "スレッド",
                posts: "投稿",
                messages: "メッセージ",
                post: "役職",
                message: "メッセージ",
                unknown: "未知",
                permissionDetails: "権限の詳細",
                thisIsA: "これは {{status}} {{channelType}} チャンネルです",
                canNotSee: "このチャンネルの {{type}} は表示されません。",
                guidelines: "ただし、そのガイドラインが表示される場合があります。",
                lastCreated: "最後に作成された{{type}}:",
                lastPin: "最後のメッセージピン:",
                threadSlowmode: "デフォルトのスレッドスローモード:",
                slowmode: "スローモード:",
                bitrate: "ビットレート:",
                region: "地域：",
                automatic: "自動",
                videoQuality: "ビデオ品質モード:",
                inactiveArchiveDuration: "{{type}} をアーカイブするまでのデフォルトの非アクティブ期間",
                defaultLayout: "デフォルトのレイアウト:",
                defaultSort: "デフォルトの並べ替え順序:",
                defaultReaction: "デフォルトのリアクション絵文字:",
                requireTag: "このフォーラムへの投稿にはタグの設定が必要です。",
                availableTags: "利用可能なタグ:",
                allowedUsersAndRoles: "許可されるユーザーと役割:",
                hideAllowedUsersAndRoles: "許可されたユーザーとロールを非表示にする",
                viewAllowedUsersAndRoles: "許可されたユーザーとロールを表示する"
            }
        },
        showHiddenThings: {
            name: "ShowHiddenThings",
            description: "権限に関係なく、さまざまな非表示およびモデレーター専用のものを表示します。",
            option: {
                showTimeouts: {
                    label: "チャットでメンバーのタイムアウトを表示する",
                    description: "チャットにメンバーのタイムアウト アイコンを表示します。"
                },
                showInvitesPaused: {
                    label: "一時停止中の招待を表示",
                    description: "サーバーリストに一時停止中の招待のツールチップを表示します。"
                },
                showModView: {
                    label: "Mod ビューを表示",
                    description: "すべてのサーバーでメンバー MOD ビューのコンテキスト メニュー項目を表示します。"
                }
            }
        },
        showMessageEmbeds: {
            name: "ShowMessageEmbeds",
            description: "コンテキスト メニュー オプションを追加して、埋め込みがないリンクに埋め込みを表示します。",
            context: {
                embed: {
                    show: "埋め込みを表示",
                    hide: "埋め込みを削除"
                }
            },
            error: {
                failed: "埋め込みの取得に失敗しました",
                noEmbed: "埋め込みが見つかりません"
            }
        },
        showMeYourName: {
            name: "ShowMeYourName",
            description: "カスタム ニックネーム、友人ニックネーム、サーバー ニックネーム、表示名、ユーザー名の組み合わせをチャットに表示します。",
            option: {
                messages: {
                    label: "メッセージ",
                    description: "メッセージにカスタム名の形式を表示します。"
                },
                replies: {
                    label: "返信",
                    description: "返信にカスタム名の形式を表示します。"
                },
                mentions: {
                    label: "言及",
                    description: "メンションにカスタム名の形式を表示します。"
                },
                typingIndicator: {
                    label: "タイピングインジケーター",
                    description: "カスタム名形式でリストされている最初に使用可能な名前を入力インジケーターに表示します。"
                },
                memberList: {
                    label: "メンバー一覧",
                    description: "カスタム名形式でリストされている最初に使用可能な名前をメンバー リストに表示します。"
                },
                profilePopout: {
                    label: "プロフィールのポップアウト",
                    description: "プロファイルのポップアウトに、カスタム名形式でリストされている最初に使用可能な名前を表示します。"
                },
                voiceChannels: {
                    label: "音声チャンネル",
                    description: "音声チャネルのカスタム名形式でリストされている最初に使用可能な名前を表示します。"
                },
                reactions: {
                    label: "反応",
                    description: "カスタム名形式でリストされた最初の利用可能な名前をリアクション ツールチップに表示し、フルネームをリアクション ポップアウトに表示します。"
                },
                discriminators: {
                    label: "識別子",
                    description: "ボットのユーザー名に識別子を追加します。識別子はユーザーに対しては非推奨になりましたが、ボットには依然として使用されています。デフォルトでは、ボットのユーザー名はユーザーのグローバル名と同等であるため、複数のボットが同じユーザー名を持つことができます。識別子を追加すると、再び一意になります。"
                },
                hideDefaultAtSign: {
                    label: "デフォルトのアットマークを非表示にする",
                    description: "メンションや返信で名前の前にあるデフォルトの「@」記号を非表示にします。いずれかの機能が有効になっている場合にのみ適用されます。"
                },
                truncateAllNamesWithStreamerMode: {
                    label: "ストリーマー モードですべての名前を切り詰める",
                    description: "ストリーマー モードでは、ユーザー名だけでなくすべての名前が切り詰められます。"
                },
                removeDuplicates: {
                    label: "重複の削除",
                    description: "いずれかの名前が同等である場合は、それらを削除し、一意の名前だけを残します。"
                },
                ignoreFonts: {
                    label: "フォントを無視する",
                    description: "2 番目、3 番目、および 4 番目の名前には、ユーザーのカスタム フォントに関係なく、gg sans を使用します。"
                },
                ignoreGradients: {
                    label: "グラデーションを無視する",
                    description: "プライマリ以外の名前の場合、ロールにグラデーションがあり、下の色が「Role+-#」に設定されている場合は、グラデーション全体の代わりにプライマリ カラーを使用し、ニトロ効果がある場合は完全に無視します。"
                },
                animateGradients: {
                    label: "グラデーションをアニメーション化する",
                    description: "2 番目、3 番目、および 4 番目の名前の場合、ロールにグラデーションがある場合はアニメーション化します。これは「グラデーションを無視」することで無効になり、モーションが減少します。"
                },
                nameSeparator: {
                    label: "名前の区切り文字",
                    description: "名前の間に使用する区切り文字。デフォルトは単一のスペースです。"
                },
                friendNameOnlyInDirectMessages: {
                    label: "ダイレクトメッセージでのみ友達名",
                    description: "DM 内の場合のみ友人名を表示し、サーバー内では表示しません。"
                },
                customNameOnlyInDirectMessages: {
                    label: "ダイレクトメッセージのみのカスタム名",
                    description: "カスタム名は DM 内でのみ表示され、サーバー内では表示されません。"
                },
                includedNames: {
                    label: "含まれる名前",
                    description: "ユーザー名、表示名、ニックネーム、フレンド名の表示順序。次のプレースホルダーを使用します: {user}、{display}、{nick}、{friend}。 {friend, nick, display} のようにカンマで区切ることにより、1 つが使用できない場合にフォールバックとして使用する複数の名前オプションを指定できます。名前ごとに最大 3 つの接頭辞と 3 つの接尾辞を付けることができます。"
                },
                customNameColor: {
                    label: "カスタム名の色",
                    description: "ユーザーに割り当てたカスタム名が最初に表示されない場合に使用する色。有効な CSS 入力を受け入れます。 「Role」を使用して、ユーザーの最上位の役割の色、ニトロ効果の色、または有効になっている場合は IRCColors の色に従います。 'Role+-#' を使用して、その割合で明るさを調整します (例: 'Role+15')"
                },
                friendNameColor: {
                    label: "友達の名前の色",
                    description: "友人のニックネームが最初に表示されない場合に使用する色。有効な CSS 入力を受け入れます。 「Role」を使用して、ユーザーの最上位の役割の色、ニトロ効果の色、または有効になっている場合は IRCColors の色に従います。 'Role+-#' を使用して、その割合で明るさを調整します (例: 'Role+15')"
                },
                nicknameColor: {
                    label: "ニックネームの色",
                    description: "ニックネームが最初に表示されない場合にニックネームに使用する色。有効な CSS 入力を受け入れます。 「Role」を使用して、ユーザーの最上位の役割の色、ニトロ効果の色、または有効になっている場合は IRCColors の色に従います。 'Role+-#' を使用して、その割合で明るさを調整します (例: 'Role+15')"
                },
                displayNameColor: {
                    label: "表示名の色",
                    description: "最初に表示されるものではない場合に表示名に使用する色。有効な CSS 入力を受け入れます。 「Role」を使用して、ユーザーの最上位の役割の色、ニトロ効果の色、または有効になっている場合は IRCColors の色に従います。 'Role+-#' を使用して、その割合で明るさを調整します (例: 'Role+15')"
                },
                usernameColor: {
                    label: "ユーザー名の色",
                    description: "ユーザー名が最初に表示されない場合にユーザー名に使用する色。有効な CSS 入力を受け入れます。 「Role」を使用して、ユーザーの最上位の役割の色、ニトロ効果の色、または有効になっている場合は IRCColors の色に従います。 'Role+-#' を使用して、その割合で明るさを調整します (例: 'Role+15')"
                },
                triggerNameRerender: {
                    label: "トリガー名の再表示",
                    description: "この設定を切り替えることで、名前の再レンダリングをトリガーします。"
                }
            },
            modal: {
                change: {
                    title: "SMYNニックネームを変更する"
                },
                add: {
                    title: "SMYNニックネームを追加"
                },
                setCustom: "このユーザーのカスタム SMYN ニックネームを設定します。 SMYNテンプレートの設定で{custom}を指定してご利用ください。",
                nickname: "SMYN ニックネーム",
                reset: "SMYNニックネームをリセット",
                cancel: "キャンセル"
            }
        },
        showTimeoutDuration: {
            name: "ShowTimeoutDuration",
            description: "ユーザーのタイムアウトがどれくらい続くかをタイムアウト アイコンのツールチップまたはその横に表示します",
            option: {
                displayStyle: {
                    label: "表示スタイル",
                    description: "タイムアウト時間を表示する方法",
                    tooltip: "ツールチップ内",
                    inline: "タイムアウトアイコンの横にある"
                }
            }
        },
        showResourceChannels: {
            name: "ShowResourceChannels",
            description: "チャネルリストのサーバーリソースの背後に隠れているチャネルを表示します"
        },
        showSongName: {
            name: "ShowSongName",
            description: "Spotify アクティビティのアーティストの代わりに曲名を表示します"
        },
        sidebarChat: {
            name: "SidebarChat",
            description: "別のチャネルまたは DM をサイドバーまたはポップアウトとして開きます",
            toolbox: {
                label: "前のチャットを開く"
            },
            context: {
                label: "サイドバーチャットを開く"
            },
            modal: {
                switch: "チャンネルを切り替える",
                popout: "ポップアウトチャット",
                close: "サイドバーチャットを閉じる"
            },
            option: {
                persistSidebar: {
                    label: "サイドバーチャットを維持する",
                    description: "Discordを再起動してもサイドバーチャットを開いたままにします"
                },
                patchCommunity: {
                    label: "パッチコミュニティ",
                    description: "コミュニティ サーバーが備えているチャネル ブラウザやメンバー タブなどの機能にパッチを適用します。"
                }
            }
        },
        signature: {
            name: "Signature",
            description: "自動フィンガープリント/終了テキスト",
            option: {
                name: {
                    label: "名前",
                    description: "メッセージの最後に追加される署名"
                },
                textHeader: {
                    label: "テキストヘッダー",
                    description: "テキストの先頭に付けるヘッダー"
                },
                showIcon: {
                    label: "アイコンを表示",
                    description: "プラグインを切り替えるためのアイコンをチャットバーに表示します"
                },
                contextMenu: {
                    label: "コンテキストメニュー",
                    description: "チャット入力コンテキスト メニューの機能を切り替えるオプションを追加"
                },
                isEnabled: {
                    label: "有効です",
                    description: "機能の切り替え"
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
                    name: "Signature",
                    description: "署名を切り替えます",
                    toogle: "署名を切り替えます (デフォルトは切り替えです)",
                    enabled: "署名が有効です",
                    disabled: "署名が無効になっています"
                }
            }
        },
        silentMessageToggle: {
            name: "SilentMessageToggle",
            description: "チャット バーにボタンを追加して、サイレント メッセージの送信を切り替えます。",
            option: {
                persistState: {
                    label: "状態を維持する",
                    description: "サイレント メッセージのトグル状態を維持する方法",
                    none: "持続しない（チャンネル変更時にリセット）",
                    channels: "チャネル間で持続する",
                    restarts: "チャネルと再起動の間で持続する"
                },
                autoDisable: {
                    label: "自動無効化",
                    description: "サイレント メッセージの送信後に再びサイレント メッセージのトグルを自動的に無効にする"
                }
            },
            tooltip: {
                enable: "サイレントメッセージを有効にする",
                disable: "サイレントメッセージを無効にする"
            }
        },
        silentTyping: {
            name: "SilentTyping",
            description: "チャットから入力インジケーターを非表示にします。",
            command: {
                silentTyping: {
                    name: "SilentTyping",
                    description: "チャットから入力インジケーターを非表示にします。",
                    toggle: {
                        name: "toggle",
                        description: "機能をグローバル、チャネル、またはギルドごとに切り替えます。",
                        global: "グローバル",
                        channel: "チャネル",
                        guild: "ギルド"
                    },
                    chatBarIndicator: {
                        name: "chatBarIndicator",
                        description: "他のユーザーの入力インジケーターをチャット バーの上から非表示にします。"
                    },
                    membersListIndicator: {
                        name: "membersListIndicator",
                        description: "他のユーザーの入力インジケーターをメンバー リストから非表示にします。"
                    },
                    chatIcon: {
                        name: "chatIcon",
                        description: "外出先でプラグインを切り替えるためのアイコンをチャット バーに表示します。"
                    },
                    chatContextMenu: {
                        name: "chatContextMenu",
                        description: "チャット コンテキスト メニューにドロップダウンを表示して、外出先でプラグイン設定を切り替えます。"
                    },
                    defaultHidden: {
                        name: "defaultHidden",
                        description: "DM/チャンネル/ギルドでの入力をデフォルトで非表示にするかどうか。"
                    }
                }
            },
            content: {
                updated: "サイレントタイピング設定が更新されました。",
                noChanges: "サイレント タイピングの設定は変更されません。"
            },
            tooltip: {
                hidden: "非表示の入力 ({{location}})",
                visible: "入力が表示される ({{location}})",
                global: "入力の表示 (グローバル)"
            },
            option: {
                enabledGlobally: {
                    label: "グローバルに有効化",
                    description: "独自の入力インジケーターの機能をグローバルに切り替えます。"
                },
                hideChatBoxTypingIndicators: {
                    label: "チャット ボックスの入力インジケーターを非表示にする",
                    description: "他のユーザーの入力インジケーターをチャット バーの上から非表示にします。"
                },
                hideMembersListTypingIndicators: {
                    label: "メンバーリストの入力インジケーターを非表示にする",
                    description: "他のユーザーの入力インジケーターをメンバー リストから非表示にします。"
                },
                chatIcon: {
                    label: "チャットアイコン",
                    description: "外出先でプラグインを変更するためのアイコンをチャット バーに表示します。"
                },
                chatIconLeftClickAction: {
                    label: "チャットアイコンの左クリックアクション",
                    description: "チャットアイコンを左クリックした場合の対処方法。",
                    global: "グローバルな入力の切り替え",
                    channel: "チャンネルの入力を切り替えます",
                    guild: "ギルドの入力の切り替え",
                    settings: "プラグイン設定を開く"
                },
                chatIconMiddleClickAction: {
                    label: "チャットアイコンの中クリックアクション",
                    description: "チャットアイコンを中クリックしたときの動作。",
                    global: "グローバルな入力の切り替え",
                    channel: "チャンネルの入力を切り替えます",
                    guild: "ギルドの入力の切り替え",
                    settings: "プラグイン設定を開く"
                },
                chatIconRightClickAction: {
                    label: "チャットアイコンの右クリックアクション",
                    description: "チャットアイコンを右クリックした場合の対処方法。",
                    global: "グローバルな入力の切り替え",
                    channel: "チャンネルの入力を切り替えます",
                    guild: "ギルドの入力の切り替え",
                    settings: "プラグイン設定を開く"
                },
                chatContextMenu: {
                    label: "チャットコンテキストメニュー",
                    description: "チャット コンテキスト メニューにドロップダウンを表示して、外出先でプラグイン設定を変更します。"
                },
                defaultHidden: {
                    label: "デフォルトの非表示",
                    description: "有効にすると、プラグインは、以下の「無効な場所」にリストされていない DM/チャネル/ギルドで他のユーザーから入力を隠します。無効にすると、プラグインは、以下の「有効な場所」にリストされていない DM/チャンネル/ギルドの入力内容を他の人に表示します。"
                },
                enabledLocations: {
                    label: "有効な場所",
                    description: "これらの ID の機能を有効にします。 DM ID、チャネル ID、ギルド ID のカンマ区切りリストを受け入れます。 「デフォルトの非表示」が無効になっている場合にのみ使用されます。"
                },
                disabledLocations: {
                    label: "無効な場所",
                    description: "これらの ID の機能を無効にします。 DM ID、チャネル ID、ギルド ID のカンマ区切りリストを受け入れます。 「デフォルトの非表示」が有効な場合にのみ使用されます。"
                }
            }
        },
        snowfall: {
            name: "Snowfall",
            description: "Discordに雪を降らせましょう！",
            about: {
                title: "情報",
                paragraph: "このプラグインは、Discord のインターフェース上にクリスマスらしい降雪効果を追加します。以下の設定で雪の種類を変更できます。",
                note: "注: ほとんどのコンピュータでは、このプラグインは平均的な Plexcord 拡張機能以上のパフォーマンスには影響しませんが、ローエンド システムでは多少の遅れが生じる可能性があります。"
            },
            option: {
                typeOfSnow: {
                    label: "雪の種類",
                    description: "表示される雪の種類を変更します (パフォーマンスに影響します)。",
                    solid: "ソリッド (最高のパフォーマンス)",
                    text: "テキスト (中程度のパフォーマンス)",
                    emoji: "画像 (最低パフォーマンス)"
                },
                maxSize: {
                    label: "最大サイズ",
                    description: "雪の結晶の最大サイズ"
                },
                speed: {
                    label: "スピード",
                    description: "降雪速度 (高い = より速く降る)"
                },
                flakesPerSecond: {
                    label: "1秒あたりのフレーク数",
                    description: "1 秒あたりの雪の結晶数 (高い = 降雪の密度が高くなります)"
                }
            }
        },
        sortFriendRequests: {
            name: "SortFriendRequests",
            description: "友達リクエストを受信日順に並べ替えます",
            tooltip: "追加しました — {{date}}",
            option: {
                showDates: {
                    label: "ショーの日付",
                    description: "友達リクエストに日付を表​​示する"
                }
            }
        },
        soundBoardLogger: {
            name: "SoundBoardLogger",
            description: "ボイスチャットで再生されるすべてのサウンドボードをログに記録し、ダウンロードできるようにします。",
            tooltip: "サウンドボードログを開く",
            option: {
                savedIds: {
                    label: "保存されたサウンドボード ID",
                    description: "一度に保存したいサウンドボード ID の数 (0 を指定すると無限に保存できます)",
                    notNumber: "値は数値ではありません。",
                    cantDecimal: "値を 10 進数にすることはできません。",
                    cantNegative: "値を負の数にすることはできません。",
                    heading: "一度に保存したいサウンドボード ID の数 (0 を指定すると無限に保存できます)",
                    warning: "警告！数値をより低い値に設定すると、ログがリセットされます。",
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
                    label: "音量",
                    description: "トグル音の大きさ (0 で無効)"
                },
                iconLocation: {
                    label: "アイコンの場所",
                    description: "サウンドボードログアイコンを表示する場所を選択します (再起動が必要です)",
                    toolbar: "ツールバー",
                    chatInput: "チャット入力"
                }
            },
            modal: {
                title: "サウンドボードのログ",
                loading: "サウンドを読み込んでいます...",
                noLogs: "まだサウンドが記録されていません。ボイスチャットに参加してログインを始めましょう！",
                clearLogs: "ログをクリアする",
                played: "{{time}} 時間{{s}} プレイしました",
                last: "最後にプレイした:",
                also: "こちらもプレイ：",
                download: "ダウンロード",
                copyId: "IDをコピーする",
                copied: "ID がクリップボードにコピーされました!",
                playSound: "サウンドを再生する",
                moreUsers: "他の人もこのサウンドを使用していました...",
                volume: "響板の音量"
            }
        },
        splitLargeMessages: {
            name: "SplitLargeMessages",
            description: "Discord のメッセージ制限に合わせて、大きなメッセージを複数に分割します。",
            option: {
                maxLength: {
                    label: "最大メッセージ長",
                    description: "分割される前のメッセージの最大長。自動検出するには 0 に設定します。"
                },
                disableFileConversion: {
                    label: "ファイル変換を無効にする",
                    description: "true の場合、大きなメッセージのファイル変換が無効になります。"
                },
                sendDelay: {
                    label: "送信遅延",
                    description: "各チャンク間の遅延 (秒単位)。"
                },
                hardSplit: {
                    label: "ハードスプリット",
                    description: "true の場合、最後のスペース/改行ではなく最後の文字で分割されます。"
                },
                splitInSlowmode: {
                    label: "スローモードでの分割",
                    description: "チャネルでスローモードが有効になっている場合、メッセージを分割する必要がありますか?"
                },
                slowmodeMax: {
                    label: "スローモードマックス",
                    description: "スローモードで分割する場合の最大スローモード時間。"
                }
            }
        },
        spotifyActivityToggle: {
            name: "SpotifyActivityToggle",
            description: "Spotify アクティビティの可視性の切り替えボタンを追加します。",
            tooltip: {
                enable: "Spotify アクティビティをオンにする",
                disable: "Spotify アクティビティをオフにする"
            },
            option: {
                location: {
                    label: "位置",
                    description: "Spotify トグルボタンを表示する場所",
                    panel: "ミュート/聴覚障害者の隣",
                    toolbox: "Plexcord ツールボックス"
                },
                activityStatus: {
                    label: "活動状況",
                    description: "Spotify アクティビティの現在のステータス"
                }
            }
        },
        spotifyCrack: {
            name: "SpotifyCrack",
            description: "一緒に自由に聴くことができ、ボイスチャットでの自動一時停止はなく、アイドル状態でもアクティビティの再生を継続できます。",
            option: {
                noSpotifyAutoPause: {
                    label: "Spotify の自動一時停止なし",
                    description: "Spotify の自動一時停止を無効にします。"
                },
                keepSpotifyActivityOnIdle: {
                    label: "Spotify アクティビティをアイドル状態に保つ",
                    description: "アイドリング時に Spotify アクティビティを再生し続ける"
                }
            }
        },
        spotifyShareCommands: {
            name: "SpotifyShareCommands",
            description: "スラッシュコマンド (/track、/album、/artist) を使用して、現在の Spotify トラック、アルバム、またはアーティストを共有します。",
            command: {
                makeCommand: {
                    description: "現在の Spotify {{type}} をチャットで共有します",
                    track: "Spotify で曲を聴いていません。",
                    find: "Spotify でトラックが見つかりませんでした。"
                }
            }
        },
        startupTimings: {
            name: "StartupTimings",
            description: "設定メニューに起動タイミングを追加",
            modal: {
                title: "起動タイミング",
                ended: "トレースは次の時点で終了しました:",
                start: "始める",
                interval: "間隔",
                delta: "デルタ",
                event: "イベント",
                serverTrace: "サーバートレース",
                loading: "読み込み中..."
            }
        },
        statusNotifications: {
            name: "StatusNotifications",
            description: "ステータス変更の通知を追加します",
            loading: "読み込み中...",
            option: {
                notificationsSound: {
                    label: "通知音",
                    description: "ステータス通知の通知音を鳴らしますか?"
                },
                usersList: {
                    label: "ユーザーリスト",
                    description: "ステータス変更を通知するユーザーのリスト",
                    empty: "ユーザーは追跡されていません。ユーザーを右クリックし、「ステータス通知」を選択して追加します。"
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
                title: "ステータス通知"
            },
            status: {
                online: "オンライン",
                idle: "アイドル状態",
                dnd: "邪魔しないでください",
                offline: "オフライン",
            },
        },
        statusPresets: {
            name: "StatusPresets",
            description: "ステータスを記憶し、後で設定できます",
            button: {
                remember: "ステータスを記憶"
            },
            context: {
                edit: "カスタムプリセットの編集",
                set: "カスタムステータスの設定"
            },
            notification: {
                successfully: "正常に保存されたステータス"
            }
        },
        steamStatusSync: {
            name: "SteamStatusSync",
            description: "ステータスを Steam に同期しましょう! (オンライン、外出中、非表示、またはオフライン。)",
            option: {
                onlineStatus: {
                    label: "オンラインステータス",
                    description: "オンライン時の Steam ステータス"
                },
                idleStatus: {
                    label: "アイドルステータス",
                    description: "アイドル時の蒸気ステータス"
                },
                dndStatus: {
                    label: "ステータスを邪魔しないでください",
                    description: "おやすみモード時の Steam ステータス"
                },
                invisibleStatus: {
                    label: "目に見えないステータス",
                    description: "非表示時の蒸気ステータス"
                },
                goInvisibleIfActivityIsHidden: {
                    label: "アクティビティが非表示の場合は非表示にする",
                    description: "Discord アクティビティが非表示の場合に Steam ステータスを非表示に設定する"
                }
            },
            status: {
                online: "オンライン",
                away: "離れて",
                invisible: "見えない",
                offline: "オフライン (Steam チャットを切断)",
                disabled: "無効"
            }
        },
        stickerBlocker: {
            name: "StickerBlocker",
            description: "ステッカーの表示をブロックできます。",
            option: {
                showGif: {
                    label: "GIFを表示",
                    description: "おしゃれな猫のGIFを表示するかどうか。"
                },
                showMessage: {
                    label: "メッセージを表示",
                    description: "どのIDがブロックされたかを詳細に示すメッセージを表示するかどうか"
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
                unblock: "{{name}} のブロックを解除する"
            },
            context: {
                blockSticker: "ブロックステッカー",
                unblockSticker: "ステッカーのブロックを解除する"
            }
        },
        stickerPaste: {
            name: "StickerPaste",
            description: "ステッカーピッカーでステッカーを選択すると、すぐに送信するのではなく、チャットボックスに挿入されます。"
        },
        streamerModeOnStream: {
            name: "StreamerModeOnStream",
            description: "Discordでストリーミングを開始するとストリーマーモードが自動的に有効になります"
        },
        streamingCodecDisabler: {
            name: "StreamingCodecDisabler",
            description: "選択したストリーミングのコーデックを無効にする",
            option: {
                disableAv1Codec: {
                    label: "AV1 コーデックを無効にする",
                    description: "Discord がストリーミングに AV1 の使用を検討しないようにします。"
                },
                disableH265Codec: {
                    label: "H265 コーデックを無効にする",
                    description: "Discord がストリーミングに H265 を使用することを検討しないようにします。"
                },
                disableH264Codec: {
                    label: "H264 コーデックを無効にする",
                    description: "Discord がストリーミングに H264 を使用することを検討しないようにします。"
                }
            }
        },
        superReactionTweaks: {
            name: "SuperReactionTweaks",
            description: "一度に再生するスーパー リアクションの制限をカスタマイズし、デフォルトでスーパー リアクションを実行します",
            option: {
                superReactByDefault: {
                    label: "デフォルトでスーパーリアクト",
                    description: "リアクションピッカーはデフォルトでスーパーリアクションになります"
                },
                unlimitedSuperReactionPlaying: {
                    label: "無制限のスーパーリアクションをプレイ",
                    description: "スーパーリアクションの同時プレイ制限を解除"
                },
                superReactionPlayingLimit: {
                    label: "スーパーリアクションのプレイ制限",
                    description: "一度に最大のスーパーリアクションをプレイできます。スーパー リアクションの再生を無効にするには 0 に設定します。"
                }
            }
        },
        textReplace: {
            name: "TextReplace",
            description: "メッセージ内のテキストを置き換えます。事前に作成されたルールは、Plexcord サーバーの #textreplace-rules チャネルで見つけることができます。",
            option: {
                replace: {
                    label: "交換する",
                    string: "文字列の使用",
                    regex: "正規表現の使用",
                    myMessages: "メッセージに適用します (全員に表示されます)",
                    othersMessages: "他の人のメッセージに適用します (自分だけに表示されます)",
                    allMessages: "すべてのメッセージに適用"
                },
                stringRules: {
                    label: "文字列のルール",
                    description: "文字列マッチングを使用してテキストを置換するためのルール。"
                },
                regexRules: {
                    label: "正規表現ルール",
                    description: "正規表現を使用してテキストを置換するためのルール。"
                }
            },
            modal: {
                title: "テストルール",
                find: "探す",
                replace: "交換する",
                includes: "が含まれる場合のみ",
                type: "メッセージを入力してください",
                applied: "ルールが適用されたメッセージ"
            }
        },
        themeAttributes: {
            name: "ThemeAttributes",
            description: "テーマを設定するためにさまざまな要素にデータ属性を追加します"
        },
        timezones: {
            name: "Timezones",
            description: "プロフィールとメッセージヘッダーにユーザーの現地時間を表示します",
            button: {
                wantToSave: "タイムゾーンをデータベースに保存したいですか?ここをクリックして設定してください。",
                yourLocalTimezone: "(あなたのローカルタイムゾーン)"
            },
            context: {
                set: "ローカルタイムゾーンの設定"
            },
            toast: {
                refresh: {
                    successfully: "タイムゾーンが正常に更新されました。",
                    failed: "タイムゾーンを更新できませんでした。",
                    failedTo: "タイムゾーンの更新に失敗しました。"
                },
                update: {
                    successfully: "タイムゾーンが正常に更新されました。",
                    failed: "タイムゾーンの設定に失敗しました。"
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
                    label: "自分のタイムゾーンを表示",
                    description: "プロフィールとメッセージヘッダーに独自のタイムゾーンを表示する"
                },
                twentyFourHourTime: {
                    label: "24時間制",
                    description: "24時間形式での上映時間"
                },
                showTimezoneInfo: {
                    label: "タイムゾーン情報を表示",
                    description: "時間の横にタイムゾーン情報を表示"
                },
                showMessageHeaderTime: {
                    label: "メッセージヘッダー時間を表示",
                    description: "メッセージヘッダーに時間を表示する"
                },
                showProfileTime: {
                    label: "プロファイル時間を表示する",
                    description: "ユーザープロフィールに時間を表示する"
                },
                useDatabase: {
                    label: "データベースのタイムゾーンを使用する",
                    description: "ユーザーのタイムゾーンを取得するためにデータベースを有効にする"
                },
                preferDatabaseOverLocal: {
                    label: "ローカルよりデータベースを優先する",
                    description: "タイムゾーンについてはローカル ストレージよりもデータベースを優先する"
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
                    label: "質問されたタイムゾーン",
                    description: "ユーザーがタイムゾーンを設定するように求められたかどうか"
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
            name: "ToastNotifications",
            description: "ダイレクトメッセージを受信するたびにトースト通知を表示します。",
            notification: {
                call: "あなたと通話を開始しました!",
                recipient: {
                    add: "{{target}} は {{actor}} によってグループに追加されました。",
                    remove: "{{target}} は {{actor}} によってグループから削除されました。",
                    left: "グループを離れました。"
                },
                channel: {
                    change: {
                        name: "Changed the channel name to {{name}}.",
                        icon: "チャンネルアイコンを変更しました。"
                    },
                    pinned: "メッセージを固定しました。"
                },
                sent: {
                    embed: "埋め込みを送信しました。",
                    sticker: "ステッカーを送りました。",
                    attachment: "添付ファイル:"
                },
                redacted: "メッセージの内容は編集されました。",
                friend: {
                    accept: "{{user}} があなたの友達になりました",
                    acceptBody: "直接メッセージを送信できるようになりました。",
                    request: "{{user}} さんがあなたに友達リクエストを送信しました。",
                    requestBody: "[友達]タブで承認または拒否できます。"
                },
                example: {
                    title: "通知例",
                    body: "これは通知本文の例です。"
                }
            },
            modal: {
                dismiss: "通知を閉じる",
                attachments: "{{attachments}} 添付ファイル{{s}} {{were}} が送信されました。"
            },
            option: {
                position: {
                    label: "位置",
                    description: "トースト通知の位置",
                    topRight: "右上",
                    topLeft: "左上",
                    bottomRight: "右下",
                    bottomLeft: "左下"
                },
                timeout: {
                    label: "タイムアウト",
                    description: "通知が表示される秒数"
                },
                opacity: {
                    label: "不透明度",
                    description: "トースト通知の不透明度"
                },
                determineServerNotifications: {
                    label: "サーバー通知の決定",
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
                    description: "友達があなたと共有しているサーバーにメッセージを送信したときに通知を表示する"
                },
                friendActivity: {
                    label: "友達のアクティビティ",
                    description: "誰かの追加または友達リクエストの受信に関する通知を表示する"
                },
                notifyFor: {
                    label: "通知対象",
                    description: "通知を受信するチャネル ID のリストを作成します (カンマで区切ります)。"
                },
                ignoreUsers: {
                    label: "ユーザーを無視する",
                    description: "すべての通知を無視するユーザー ID のリストを作成します (カンマで区切ります)。"
                },
                exampleButton: {
                    label: "ボタンの例",
                    description: "トースト通知の例を示します。",
                    show: "通知の例を表示"
                }
            }
        },
        toggleVideoBind: {
            name: "ToggleVideoBind",
            description: "Webカメラを切り替えるためのカスタマイズ可能なバインドを追加します。",
            option: {
                keyBind: {
                    label: "キーバインド",
                    description: "押すとウェブカメラを切り替えるキー。"
                },
                reqCtrl: {
                    label: "Ctrl キーが必要",
                    description: "コントロールを保持する必要があります。"
                },
                reqShift: {
                    label: "シフトが必要",
                    description: "シフトを保持する必要があります。"
                },
                reqAlt: {
                    label: "Alt が必要",
                    description: "Alt キーを押し続ける必要があります。"
                }
            }
        },
        translate: {
            name: "Translate",
            description: "Google 翻訳または DeepL でメッセージを翻訳する",
            tooltip: {
                label: "翻訳する"
            },
            context: {
                translate: "翻訳する",
                open: "翻訳モーダルを開く",
                auto: "自動翻訳が有効になっています"
            },
            option: {
                receivedInput: {
                    label: "受信した入力",
                    description: "受信したメッセージの翻訳元の言語"
                },
                receivedOutput: {
                    label: "受信出力",
                    description: "受信したメッセージを翻訳する言語"
                },
                sentInput: {
                    label: "送信された入力",
                    description: "自分のメッセージを翻訳する言語"
                },
                sentOutput: {
                    label: "送信された出力",
                    description: "自分のメッセージを翻訳する言語"
                },
                service: {
                    label: "翻訳サービス",
                    description: "DeepL には DeepL Pro からの有料 API キーが必要です",
                    descriptionWeb: "翻訳サービス (Web ではサポートされていません!)",
                    google: "Google翻訳",
                    deepl: "DeepL 無料",
                    deeplPro: "DeepL プロ"
                },
                deeplApiKey: {
                    label: "DeepL APIキー",
                    description: "DeepL APIキー",
                    placeholder: "https://deepl.com/your-account から API キーを取得します。"
                },
                autoTranslate: {
                    label: "自動翻訳",
                    description: "メッセージを送信する前に自動的に翻訳します。翻訳ボタンをシフト/右クリックしてこれを切り替えることもできます。"
                },
                showAutoTranslateTooltip: {
                    label: "自動翻訳ツールチップを表示",
                    description: "メッセージが自動的に翻訳されるたびに、ChatBar ボタンにツールチップを表示します"
                }
            },
            modal: {
                title: "翻訳する",
                select: "言語を選択してください",
                auto: "自動翻訳",
                dismiss: "却下する",
                translated: "{{from}} から翻訳",
                failed: {
                    to: "{{text}} を翻訳できませんでした",
                    connect: "DeepL API への接続に失敗しました:"
                },
                wrong: "何か問題が発生しました。この問題が解決しない場合は、コンソールを確認するか、サポート サーバーに助けを求めてください。",
                deepl: {
                    api: "DeepL API クォータを超過しました。 Google 翻訳に戻ります。",
                    apiKey: "DeepL APIキーが設定されていません。 Google にリセットする",
                    auth: "無効な DeepL API キーまたはバージョン"
                },
                autoTranslateEnabled: {
                    title: "Plexcord 自動翻訳が有効になっています",
                    body: "自動翻訳を有効にしました。すべてのメッセージは送信前に自動的に翻訳されます。",
                    confirm: "自動翻訳を無効にする",
                    cancel: "わかった",
                    secondaryConfirm: "二度と表示しないでください"
                }
            }
        },
        typingIndicator: {
            name: "TypingIndicator",
            description: "誰かがチャンネルに入力しているかどうかを示すインジケーターを追加します。",
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
                    label: "インジケーターモード",
                    description: "インジケーターはどのように表示されるべきですか?",
                    both: "アバターとアニメーションドット",
                    dots: "アニメーションドット",
                    avatars: "アバター"
                }
            }
        },
        typingTweaks: {
            name: "TypingTweaks",
            description: "入力インジケーターにアバターと役割の色を表示する",
            option: {
                showAvatars: {
                    label: "複数のユーザーを表示",
                    description: "入力インジケーターにアバターを表示する"
                },
                showRoleColors: {
                    label: "役割の色を表示",
                    description: "入力インジケーターに役割の色を表示する"
                },
                alternativeFormatting: {
                    label: "代替書式設定",
                    description: "複数のユーザーが入力しているときに、より有用なメッセージを表示する"
                },
                amITyping: {
                    label: "タイピングしていますか",
                    description: "あなたが入力しているところを他の人に見られるかどうかを示します"
                }
            },
            others: {
                areTyping: "{{count}} 他の人が入力中です..."
            }
        },
        unindent: {
            name: "Unindent",
            description: "コードブロックから先頭のインデントを削除します"
        },
        unitConverter: {
            name: "UnitConverter",
            description: "メートル単位をインペリアル単位に、またはその逆に変換します",
            tooltip: "単位の変換",
            option: {
                myUnits: {
                    label: "私のユニット",
                    description: "あなたが使用し、変換したい単位。デフォルトはインペリアルです",
                    imperial: "インペリアル",
                    metric: "メトリック"
                }
            },
            button: {
                dismiss: "却下する"
            }
        },
        unlimitedAccounts: {
            name: "UnlimitedAccounts",
            description: "追加できるアカウントの数が増えます。",
            option: {
                maxAccounts: {
                    label: "最大アカウント数",
                    description: "追加できるアカウントの数、または制限なしの場合は 0"
                }
            }
        },
        unlockedAvatarZoom: {
            name: "UnlockedAvatarZoom",
            description: "アバターを変更するときに、画像トリミングツールでさらにズームインできるようになります",
            option: {
                zoomMultiplier: {
                    label: "ズーム倍率",
                    description: "ズーム倍率"
                }
            }
        },
        unsuppressEmbeds: {
            name: "UnsuppressEmbeds",
            description: "メッセージへの埋め込みの抑制を解除できます",
            context: {
                unsuppress: "埋め込みの抑制を解除",
                suppress: "埋め込みを抑制"
            }
        },
        uselessInfo: {
            name: "UselessInfo",
            description: "Shows random useless information within Discord; shortcuts and spacing are adjustable.",
            recording: "録音中...",
            record: "記録",
            option: {
                delay: {
                    label: "通知間隔",
                    description: "通知の表示間隔（分）"
                },
                historyHotkey: {
                    label: "履歴パネルのショートカット",
                    description: "以前に表示されたファクトの履歴を表示するホットキー"
                },
                randomFactHotkey: {
                    label: "ランダムファクトのショートカット",
                    description: "ランダムファクトパネルを開くホットキー"
                },
                sameFact: {
                    label: "同じ項目を表示しないようにする",
                    description: "すべての事実が表示されるまで、同じ事実を複数回表示しないようにします。"
                },
                lastNFacts: {
                    label: "どれだけ最近のことを避けるべきか",
                    description: "繰り返しを避けるために最近表示されたファクトの数 (0 = 常時)"
                }
            },
            modal: {
                title: "役に立たない情報",
                history: {
                    none: "まだ事実はありません。ショートカットを使用するか、お待ちください。",
                    source: "ソース"
                },
                showRandom: "ランダムに表示",
                close: "近い"
            },
            notification: {
                title: "知っていましたか？"
            }
        },
        userMessagesPronouns: {
            name: "UserMessagesPronouns",
            description: "メッセージヘッダーにユーザー代名詞を表示します",
            option: {
                pronounsFormat: {
                    label: "代名詞の形式",
                    description: "チャットに表示される代名詞の形式",
                    lowercase: "小文字",
                    capitalized: "大文字で表記"
                },
                showSelf: {
                    label: "自己を示す",
                    description: "自分自身の代名詞の表示を有効または無効にする"
                }
            }
        },
        userVoiceShow: {
            name: "UserVoiceShow",
            description: "ユーザーが音声チャネルにいるときにインジケーターを表示します",
            option: {
                showInUserProfileModal: {
                    label: "ユーザープロファイルモーダルに表示",
                    description: "ユーザーのプロフィールの名前の横にボイス チャンネル インジケーターを表示します"
                },
                showInMemberList: {
                    label: "メンバーリストに表示",
                    description: "メンバーとDMのリストにユーザーのボイスチャンネルインジケーターを表示します"
                },
                showInMessages: {
                    label: "メッセージに表示",
                    description: "メッセージにユーザーのボイス チャネル インジケーターを表示する"
                }
            },
            modal: {
                inVoiceChat: "ボイスチャット中"
            },
            notification: {
                cannotJoin: "ユーザーのボイスチャンネルに参加できません。"
            }
        },
        uSRBG: {
            name: "USRBG",
            description: "USRBG からユーザー バナーを表示し、Nitro なしで誰でもバナーを取得できるようにします",
            option: {
                nitroFirst: {
                    label: "ニトロファースト",
                    description: "Nitro バナーと USRBG バナーの両方が存在する場合に使用するバナー",
                    nitro: "ニトロバナー",
                    usrbg: "USRBG バナー"
                },
                voiceBackground: {
                    label: "音声の背景",
                    description: "USRBG バナーをボイスチャットの背景として使用する"
                }
            },
            button: "独自の USRBG バナーを入手"
        },
        validReply: {
            name: "ValidReply",
            description: "返信にカーソルを合わせたときの「メッセージを読み込めませんでした」を修正"
        },
        validUser: {
            name: "ValidUser",
            description: "「@unknown-user」として表示される不明なユーザーのメンションを修正します (メンションにカーソルを合わせると修正されます)",
            badges: {
                discordBugHunter: "Discord バグハンター",
                moderatorProgramsAlumni: "モデレータープログラムの卒業生",
                discordStaff: "ディスコードスタッフ",
                hypeSquadEvents: "ハイプスクワッドイベント",
                bravery: "HypeSquad の勇気",
                brilliance: "HypeSquad の輝き",
                balance: "HypeSquad バランス",
                partneredServerOwner: "パートナーサーバーの所有者",
                nitro: "ディスコードニトロ",
                earlySupporter: "アーリーサポーター",
                earlyVerifiedBotDeveloper: "初期の認証済みボット開発者"
            }
        },
        voiceChatDoubleClick: {
            name: "VoiceChatDoubleClick",
            description: "シングルクリックではなくダブルクリックでボイスチャットに参加"
        },
        vcNarrator: {
            name: "VCNarrator",
            description: "ユーザーが音声チャンネルに参加、脱退、または移動したときをナレーター経由で通知します",
            option: {
                voice: {
                    label: "声"
                },
                volume: {
                    label: "音量",
                    description: "ナレーターの音量"
                },
                rate: {
                    label: "レート",
                    description: "ナレーターの速度"
                },
                sayOwnName: {
                    label: "自分の名前を言う",
                    description: "自分の名前を言う"
                },
                latinOnly: {
                    label: "ラテン語のみ",
                    description: "名前を言う前に名前から非ラテン文字を削除する"
                },
                joinMessage: {
                    label: "メッセージに参加",
                    description: "メッセージに参加"
                },
                leaveMessage: {
                    label: "メッセージを残す",
                    description: "メッセージを残す"
                },
                moveMessage: {
                    label: "メッセージの移動",
                    description: "メッセージの移動"
                },
                muteMessage: {
                    label: "メッセージをミュートする",
                    description: "メッセージをミュート（今のところ自分のみ）"
                },
                unmuteMessage: {
                    label: "メッセージのミュートを解除する",
                    description: "メッセージのミュートを解除 (今のところ自分のみ)"
                },
                deafenMessage: {
                    label: "聴覚障害者のメッセージ",
                    description: "Deafen Message (今のところ自分のみ)"
                },
                undeafenMessage: {
                    label: "聴覚障害者のメッセージ",
                    description: "Undeafen Message (今のところ自分のみ)"
                }
            },
            modal: {
                title: "サンプルサウンドを再生する",
                voiceTitle: "声",
                voice: "音声を選択してください",
                languageTitle: "言語",
                language: "言語を選択してください",
                noVoice: "ナレーターの音声が見つかりませんでした。",
                linuxNote: "speech-dispatcher または espeak をインストールし、--enable-speech-dispatcher フラグを指定して Discord を実行します",
                someNarrator: "オペレーティング システムのナレーター設定にいくつかインストールしてみてください。",
                dontHaveEnglish: "英語の音声がインストールされていないため、ナレーターが奇妙に聞こえる可能性があります",
                customiseMessages: "以下の音声メッセージをカスタマイズできます。特定のメッセージを何も設定しないことで無効にすることができます",
                placeholdersInfo: "特別なプレースホルダー {{USER}}、{{DISPLAY_NAME}}、{{NICKNAME}}、{{CHANNEL}} は、それぞれユーザー名 (自分の場合は何もありません)、ユーザーの表示名、現在のサーバー上のユーザーのニックネーム、およびチャネル名に置き換えられます。"
            }
        },
        viewIcons: {
            name: "ViewIcons",
            description: "ユーザー プロファイルのアバターとバナーをクリックできるようにし、ユーザー、サーバー、およびグループ チャネルのコンテキスト メニューに [アバター/バナーの表示] エントリを追加します。",
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
                    description: "アニメーション以外の画像に使用する画像形式を選択します。アニメーション画像には常に .gif が使用されます"
                },
                imgSize: {
                    label: "画像サイズ",
                    description: "使用する画像サイズ"
                }
            }
        },
        viewRaw: {
            name: "ViewRaw",
            description: "メッセージ、チャネル、ギルドの生のコンテンツ/データをコピーして表示します",
            context: {
                copyLeft: "Raw をコピー (左クリック) / Raw を表示 (右クリック)",
                copyRight: "Raw をコピー (右クリック) / Raw を表示 (左クリック)",
                view: "生で見る"
            },
            option: {
                popoverButton: {
                    label: "ポップオーバーボタン",
                    description: "メッセージの生のコンテンツ/データを表示するためのボタンをメッセージ ポップオーバーに表示します。"
                },
                clickMethod: {
                    label: "クリック方法",
                    description: "ボタンを変更して、メッセージの生のコンテンツ/データを表示します。",
                    left: "左クリックして生のコンテンツを表示します。",
                    right: "右クリックして生のコンテンツを表示します。"
                }
            },
            modal: {
                title: "生で見る",
                content: "コンテンツ",
                data: "{{type}} データ",
                copied: "{{type}} データがクリップボードにコピーされました!",
                copy: "{{type}} JSON をコピー",
                copiedContent: "コンテンツがクリップボードにコピーされました!",
                copyContent: "未加工のコンテンツをコピーする"
            },
            types: {
                message: "メッセージ",
                channel: "チャネル",
                guild: "ギルド",
                role: "役割",
                user: "ユーザー"
            }
        },
        voiceButtons: {
            name: "VoiceButtons",
            description: "音声通話パネルから直接、ユーザーをすばやく DM、ミュート、または聴覚障害者にします。",
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
                    label: "耳をつんざくボタンを表示",
                    description: "耳をつんざくボタンを表示するかどうか"
                },
                muteSoundboard: {
                    label: "サウンドボードをミュートする",
                    description: "「Deafen」ボタンをクリックすると、サウンドボードが切り替わります。"
                },
                disableVideo: {
                    label: "ビデオを無効にする",
                    description: "「Deafen」ボタンをクリックするとビデオが切り替わります。"
                },
                useServer: {
                    label: "サーバーを使用する",
                    description: "許可がある場合は、ローカルの代わりにサーバーのミュート/聴覚障害者を使用してください。"
                },
                serverSelf: {
                    label: "サーバーセルフ",
                    description: "聴覚障害者 / ミュート/聴覚障害者を使用する場合、サーバー上で自分自身をミュートします。"
                },
                showButtonsSelf: {
                    label: "自分自身にボタンを表示",
                    description: "自分のユーザーのボタンを表示するかどうか。他のボタンと同じ機能ですが、ボタンをクリックすると DM パネルが開き、ミュート/耳が聞こえなくなります。",
                    display: "画面",
                    hide: "隠れる",
                    disable: "無効にする"
                },
                whichNameToShow: {
                    label: "どの名前を表示するか",
                    description: "ツールチップにニックネームまたはユーザー名を表示するかどうかを選択します。",
                    global: "グローバル名",
                    username: "ユーザー名",
                    both: "両方"
                },
                buttonPosition: {
                    label: "ボタンの位置",
                    description: "ボタンを表示する場所を選択します。",
                    left: "左",
                    right: "右",
                }
            },
            tooltip: {
                navigate: "DMに移動",
                open: "{{username}} で DM を開く",
                yourself: "あなた自身",
                serverMute: "サーバーミュート",
                serverDeafen: "サーバー聴覚障害者",
                mute: "ミュート",
                deafen: "聴覚障害者",
                unmute: "ミュートを解除する",
                undeafen: "聴覚障害者",
                serverUnmute: "サーバーのミュート解除",
                serverUndeafen: "サーバーアンデアフェン"
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
                left: "左<#{{channel}}>",
                movedTo: "Moved to <#{{channel}}>",
                movedFrom: "<#{{channel}}> から移動",
                noLogs: "表示するログはありません。",
                logs: "{{channel}} ログ"
            },
            option: {
                mode: {
                    label: "モード",
                    description: "音声チャンネルのログを表示する方法",
                    menu: "ログメニュー",
                    associated: "関連するチャットに直接ログに記録する",
                    both: "チャットへのログとログメニュー"
                },
                voiceChannelChatSelf: {
                    label: "ボイスチャンネルチャットセルフ",
                    description: "独自の音声チャネル イベントを音声チャネルに記録します。"
                },
                voiceChannelChatSilent: {
                    label: "ボイスチャンネルチャットサイレント",
                    description: "ボイス チャネル チャットでのメッセージへの参加/退出/移動は沈黙します。"
                },
                voiceChannelChatSilentSelf: {
                    label: "ボイスチャンネルチャットサイレントセルフ",
                    description: "音声チャネルにいる場合、音声チャネルでのメッセージへの参加/退出/移動は無音になります"
                },
                ignoreBlockedUsers: {
                    label: "ブロックされたユーザーを無視する",
                    description: "ブロックされたユーザーをログに記録しない"
                }
            }
        },
        voiceChatUtilities: {
            name: "VoiceChatUtilities",
            description: "このプラグインを使用すると、チャンネル全体で複数のアクション (移動、ミュート、切断など) を実行できます (オリジナルは dutake)",
            option: {
                waitAfter: {
                    label: "アクション後に待機する",
                    description: "待機する前に実行する API アクションの量 (レート制限を回避するため)"
                },
                waitSeconds: {
                    label: "数秒待ってください",
                    description: "各アクション間の待機時間 (秒単位)"
                }
            },
            context: {
                voiceTools: "音声ツール",
                mentionAll: "すべてのユーザーに言及する",
                disconnectAll: "すべて切断",
                muteAll: "すべてミュート",
                unmuteAll: "すべてのミュートを解除",
                deafenAll: "耳をつんざくすべて",
                undeafenAll: "すべての聴覚を失わせる",
                moveAll: "すべて移動"
            }
        },
        voiceDownload: {
            name: "VoiceDownload",
            description: "音声メッセージにダウンロードを追加します。 (新しいブラウザタブが開きます)",
            context: {
                download: "音声メッセージをダウンロードする"
            }
        },
        voiceMessages: {
            name: "VoiceMessages",
            description: "携帯電話と同じように音声メッセージを送信できます。これを行うには、アップロード ボタンを右クリックし、[ボイス メッセージの送信] をクリックします。",
            option: {
                noiseSuppression: {
                    label: "ノイズ対策",
                    description: "ノイズ対策"
                },
                echoCancellation: {
                    label: "エコーキャンセル",
                    description: "エコーキャンセル"
                }
            },
            notification: {
                failed: {
                    upload: "音声メッセージのアップロードに失敗しました。",
                    start: "記録の開始に失敗しました。",
                    finish: "録音を終了できませんでした。"
                }
            },
            context: {
                sendVoiceMessage: "音声メッセージを送信する",
                missingPermissions: "(権限がありません)"
            },
            modal: {
                record: "音声メッセージを録音する",
                upload: "ファイルをアップロードする",
                preview: "プレビュー",
                failed: "選択した音声ファイルの解析に失敗しました:",
                oggOpus: "ボイス メッセージを iOS で再生するには、OggOpus である必要があります。このファイルは {{type}} であるため、iOS では再生できません。",
                fix: "これを修正するには、まず {{link}} を使用して OggOpus に変換します。",
                sending: "音声メッセージを送信中です...しばらくお待ちください。",
                stop: "録音を停止する",
                start: "録音を開始する",
                resume: "録音を再開する",
                pause: "録音を一時停止する",
                recording: "録音",
                send: "送信",
            }
        },
        volumeBooster: {
            name: "VolumeBooster",
            description: "ユーザーとストリームの音量をデフォルトの最大値を超えて設定できます",
            option: {
                multiplier: {
                    label: "乗数",
                    description: "ボリュームマルチプライヤー"
                }
            }
        },
        wallpaperFree: {
            name: "WallpaperFree",
            description: "古い DM 壁紙実験の再現。任意のチャネル、ユーザー、またはサーバーの背景画像を設定します。",
            option: {
                globalDefault: {
                    label: "グローバルデフォルト",
                    description: "すべてのチャンネルにグローバルなデフォルトの壁紙を設定します。"
                },
                stylingTips: {
                    label: "スタイリングのヒント"
                }
            },
            context: {
                setWallpaper: "壁紙を設定する",
                removeWallpaper: "壁紙を削除する"
            },
            modal: {
                set: "壁紙を設定する",
                image: "画像のURL",
                cancel: "キャンセル",
                apply: "適用する",
                global: {
                    set: "グローバル壁紙を設定する",
                    remove: "グローバルのデフォルト壁紙を削除する",
                    reset: "壁紙データをリセットする"
                },
                web: {
                    info: "ローカル ファイルを使用するには、ローカル ファイルを Plexcord テーマ ディレクトリに置き、URL plexcord:///themes/filename.ext を使用します。",
                    open: "テーマディレクトリを開く",
                    quickCSS: "QuickCSSを開く"
                }
            }
        },
        webContextMenus: {
            name: "WebContextMenus",
            description: "Web バージョンの Discord にはないコンテキスト メニューを再追加します: リンクと画像 (コピー/リンク/画像を開く)、テキスト領域 (コピー、切り取り、貼り付け、スペル チェック)",
            option: {
                addBack: {
                    label: "戻るを追加",
                    description: "画像、リンク、チャット入力バーの Discord コンテキスト メニューを再び追加します"
                }
            }
        },
        webKeybinds: {
            name: "WebKeybinds",
            description: "Web バージョンの Discord に欠落しているキーバインドを再追加します: Ctrl+T、Ctrl+Shift+T、Ctrl+Tab、Ctrl+Shift+Tab、Ctrl+1-9、Ctrl+、。ブラウザ内ではなく、Plextron/Legcord 上でのみ完全に動作します"
        },
        webScreenShareFixes: {
            name: "WebScreenShareFixes",
            description: "Chromium および Plextron クライアントの 2500kbps ビットレートの上限を削除します。",
            option: {
                experimentalAV1Support: {
                    label: "実験的な AV1 サポート",
                    description: "AV1 コーデックのサポートを有効にします。ストリームの無限ロードなどの問題が発生する可能性があります"
                }
            }
        },
        whoReacted: {
            name: "WhoReacted",
            description: "メッセージに反応したユーザーのアバターをレンダリングします",
            option: {
                avatarClick: {
                    label: "アバタークリック",
                    description: "リアクションでのアバターのクリックを切り替えます"
                }
            }
        },
        whosWatching: {
            name: "WhosWatching",
            description: "画面共有アイコンにカーソルを合わせると、どのユーザーがストリームを視聴しているかが表示されます",
            modal: {
                noSpectator: "無観客"
            },
            option: {
                showPanel: {
                    label: "パネルを表示",
                    description: "画面共有パネルの下に観客を表示"
                }
            }
        },
        writeUpperCase: {
            name: "WriteUpperCase",
            description: "メッセージ入力の各文の最初の文字を大文字に変更します",
            option: {
                blockedWords: {
                    label: "ブロックされた単語",
                    description: "大文字にしない文字列 (カンマで区切る)"
                }
            }
        },
        xSOverlay: {
            name: "XSOverlay",
            description: "Discord の通知を XSOverlay に転送し、VR で簡単に表示できるようにします。",
            notification: {
                call: {
                    title: "{{user}} があなたに電話しています。",
                    content: "着信"
                },
                message: {
                    reply: "（返事）",
                    embed: "[埋め込む]",
                    onlyEmbed: "送信済みメッセージの埋め込み",
                    sticker: "[ステッカー]",
                    onlySticker: "ステッカーを送りました",
                    image: "画像",
                    attachment: "アタッチメント"
                },
                test: {
                    title: "プレックスコードからこんにちは！",
                    content: "テストのお知らせです！ *爆発*",
                    button: "テスト通知を送信する"
                }
            },
            option: {
                webSocketPort: {
                    label: "WebSocketポート",
                    description: "WebSocketポート"
                },
                preferUDP: {
                    label: "UDP を優先する",
                    description: "WebSocket 経由で接続できない XSOverlay の古いビルドを使用している場合に有効にします。この設定は Web では無視されます。"
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
                    description: "ダイレクトメッセージ通知を許可する"
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
                    label: "ピンカラー",
                    description: "ユーザー言及の色"
                },
                channelPingColor: {
                    label: "チャンネル Ping カラー",
                    description: "チャンネルメンションの色"
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
                    label: "長さベースのタイムアウト",
                    description: "メッセージの長さに応じて継続時間を延長する"
                },
                opacity: {
                    label: "不透明度",
                    description: "通知の不透明度"
                },
                volume: {
                    label: "音量",
                    description: "音量"
                }
            }
        },
        youtubeAdblock: {
            name: "YouTubeAdblock",
            description: "YouTube の埋め込み広告と、AdGuard 経由で一緒に見るアクティビティをブロックします"
        },
        youtubeDescription: {
            name: "YouTubeDescription",
            description: "YouTube ビデオの埋め込みに説明を追加します"
        }
    }
} as const;

export default translations;
