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
                description: "設定した QuickCSS を適用します"
            },
            enableReactDevtools: {
                label: "React 開発者ツールを有効にする",
                description: "主にプラグイン開発者向けです。何かわからない場合は無視してください"
            },
            mainWindowFrameless: {
                label: "メインウィンドウフレームを無効にする",
                description: "ネイティブのウィンドウフレームを取り外して、すっきりとした外観にします。タイトル バー領域をドラッグすることでウィンドウを移動できます。"
            },
            frameless: {
                label: "ウィンドウフレームを無効にする",
                description: "ネイティブのウィンドウフレームを取り外して、すっきりとした外観にします。タイトル バー領域をドラッグすることでウィンドウを移動できます。"
            },
            nativeTitleBar: {
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
                description: "Discord の最小サイズより小さくても、ウィンドウを任意のサイズに変更できます"
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
        windowsMaterial: {
            title: "Windows 背景マテリアル（再起動が必要）",
            description: "Windows の透明な背景エフェクトです。透明化に対応したテーマが必要です。対応していない場合は何も起こりません。この設定を変更した後は再起動が必要です。",
            material: {
                none: "なし",
                mica: "Mica（システムテーマとデスクトップの壁紙を使って背景を描画）",
                tabbed: "Tabbed（背景の色合いがより強い Mica のバリエーション）",
                acrylic: "Acrylic（Discord の背後のウィンドウをぼかして半透明の背景にする）"
            }
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
        },
        tabs: {
            renderFailed: "{{tab}} タブを表示できませんでした。問題が続く場合はインストーラーで再インストールしてください！"
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
            dev: "Plexcordの開発者版",
            browser: "Plexcord のウェブブラウザ版"
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
                api: "APIプラグインを表示",
                type: "種類でフィルター",
                tags: "タグでフィルター",
                favorites: "お気に入りを表示"
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
            source: "ソースコードを表示する",
            favorite: "お気に入りに追加 - プラグイン一覧の先頭に固定します",
            unfavorite: "お気に入りから削除"
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
                    userArea: "ユーザーエリアパネルにボタンを追加するためのAPI。",
                    profileCollections: "Discordのゲームコレクションのように、ユーザープロフィールパネルにコレクションを追加するためのAPI。",
                    profileSections: "ユーザープロフィールパネルの「参加日」エリア付近にセクションを追加するためのAPI。",
                    headerBar: "ヘッダーバーにボタンを追加する API です。",
                    surfaceClasses: "Discord の安定したレイアウト領域に、プラグイン独自のセマンティックなデータ属性と限定的な props を追加する API です。"
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
        },
        invalidInput: "無効な入力です",
        loading: "読み込み中...",
        authorPrefix: "作者:"
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
        },
        backupFileType: "Plexcord設定バックアップ"
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
        more: "+{{count}} その他のプラグイン",
        error: {
            retrieveRepo: "リポジトリ情報を取得できませんでした",
            fetchRepo: "リポジトリから取得できませんでした",
            connectRepo: "リポジトリに接続できませんでした。インターネット接続を確認してください。"
        }
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
        activation: {
            title: "テーマの有効化",
            always: "常に有効",
            lightOnly: "ライトテーマのみ",
            darkOnly: "ダークテーマのみ"
        },
        actions: {
            pin: "固定",
            unpin: "固定解除",
            editSettings: "設定を編集"
        },
        unknown: {
            title: "未知",
            author: "作者不明",
            theme: "不協和音のテーマ",
            description: "説明はありません。"
        },
        required: "次のプラグインは必須ですが、有効になっていません:",
        homepage: "ホームページ",
        support: "サポート",
        online: {
            title: "オンラインテーマ",
            description: "テーマをローカル ファイルではなく URL から直接読み込みます。オンライン テーマはソースが変更されると自動更新されるため、手動でダウンロードしなくても常に最新バージョンを入手できます。",
            enable: "オンラインテーマを有効にする",
            enableDescription: "オンラインテーマの読み込みを切り替えます。無効にすると、すべてのオンライン テーマがオフになり、新しいテーマを追加できなくなります。",
            placeholder: "https://例.jp/theme.css"
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
        },
        openInFolder: "フォルダで開く",
        fallback: {
            author: "不明な作者",
            description: "Discordテーマ。"
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
        unknownAuthor: "不明な作者"
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
            close: "とにかく閉じる",
            windowTitle: "Plexcord QuickCSSエディター"
        },
        messagePopover: {
            scrollLeft: "左にスクロール",
            scrollRight: "右にスクロール"
        },
        notices: {
            error: "通知の表示中にエラーが発生しました"
        },
        tray: {
            aboutPlexcord: "Plexcordについて",
            updatePlexcord: "Plexcordを更新",
            noUpdateTitle: "利用可能な更新はありません",
            noUpdateBody: "すでに最新バージョンのPlexcordを使用しています。",
            updateFailedTitle: "更新に失敗しました",
            updateFailedBody: "Plexcordの更新を適用できませんでした。",
            updateSuccessTitle: "更新が完了しました",
            updateSuccessBody: "更新を適用するためPlexcordを再起動しています。",
            updateErrorTitle: "更新エラー",
            updateErrorBody: "Plexcordの更新中にエラーが発生しました。\n\n{{error}}",
            openSettingsFolder: "設定フォルダーを開く",
            openThemesFolder: "テーマフォルダーを開く"
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
        },
        detectLanguage: "言語を検出"
    },

    plugin: {
        tags: {
            accessibility: "アクセシビリティ",
            activity: "アクティビティ",
            appearance: "外観",
            chat: "チャット",
            commands: "コマンド",
            console: "コンソール",
            customisation: "カスタマイズ",
            developers: "開発者",
            emotes: "エモート",
            friends: "フレンド",
            fun: "楽しさ",
            media: "メディア",
            notifications: "通知",
            organisation: "整理",
            privacy: "プライバシー",
            reactions: "リアクション",
            roles: "ロール",
            servers: "サーバー",
            shortcuts: "ショートカット",
            utility: "ユーティリティ",
            voice: "音声"
        },
        concatenatedComponentExtractor: {
            name: "ConcatenatedComponentExtractor",
            description: "バンドラーによって結合されたコンポーネントを抽出します"
        },
        concatenatedModules: {
            name: "ConcatenatedModules",
            description: "バンドラーによって結合されたモジュールを抽出します"
        },
        noTrack: {
            name: "NoTrack",
            description: "Discord のトラッキング (分析/「科学」)、メトリクス、Sentry クラッシュ レポートを無効にする",
            option: {
                disableAnalytics: {
                    label: "分析を無効にする",
                    description: "Discord のトラッキング (分析/「科学」)、メトリクス、Sentry クラッシュ レポートを無効にする"
                },
                disableStackDumping: {
                    description: "Discord がクラッシュしたときにネイティブのスタックトレースをコンソールに出力します。完全な再起動が必要です。"
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
                },
                includePlexcordInfoWhenCopying: {
                    label: "コピー時にPlexcord情報を含める",
                    description: "設定ページの左下にあるバージョン情報をクリックした際に、Plexcord情報（Plexcord、Electron、Chromium）もコピーします"
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
                    dismiss: "何をしているか分かっている場合、またはアップデートできない場合は、このメッセージを閉じても構いません。",
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
                    timestamp: "タイムスタンプ",
                    date: "日付"
                },
                randomisedLength: {
                    label: "ランダム化された長さ",
                    description: "ランダムな文字長"
                },
                consistent: {
                    label: "一貫性のある",
                    description: "一貫した匿名化の秘密"
                },
                dateFormat: {
                    description: "日付形式（YYYY、MM、DD、HH、mm、ss、SSS に対応）",
                    label: "日付形式"
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
            },
            text: {
                smallText: "小さいテキスト",
                largeText: "大きいテキスト"
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
                }
            },
            toast: {
                invalidColorFormat: "{{settingKey}} のカラー形式が無効です。'R、G、B' または '#RRGGBB' の形式であることを確認してください。",
                invalidColorFormatFor: "{{key}} の色形式が無効です。\"R, G, B\" または \"#RRGGBB\" を使用してください"
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
            add: "別の理由を追加",
            duration: {
                discordDefault: "Discord の既定",
                none: "何も削除しない",
                hour1: "直近 1 時間",
                hours6: "直近 6 時間",
                hours12: "直近 12 時間",
                hours24: "直近 24 時間",
                days3: "直近 3 日間",
                days7: "直近 7 日間"
            },
            text: {
                autoDeleteDuration: "メッセージの自動削除期間"
            }
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
                enableNestedFolders: {
                    label: "ネストされたフォルダを有効化",
                    description: "ドラッグしてフォルダ内に別のフォルダを配置できるようにします"
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
                headerSelf: "{{server}} への参加招待を送信しました",
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
            description: "ユーザープロフィールやメンバーリストでロールを右クリックしたとき、ロール色のコピー / ロールの編集 / ロールアイコンの表示を行えるようにします",
            option: {
                roleIconFileFormat: {
                    label: "役割アイコンのファイル形式",
                    description: "役割アイコンを表示するときに使用するファイル形式"
                }
            },
            context: {
                copyColor: "役割の色のコピー",
                editRole: "役割の編集",
                viewIcon: "役割アイコンの表示",
                viewMembers: "ロールのメンバーを表示"
            },
            text: {
                roleActions: "ロールの操作"
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
            regexHelper: {
                title: "正規表現ヘルパー",
                placeholder: "テストする入力...",
                noPatterns: "パターンが設定されていません"
            },
            option: {
                blockedWords: {
                    label: "ブロックされた単語",
                    description: "ブロックする単語のカンマ区切りリスト"
                },
                useRegex: {
                    label: "正規表現を使用する",
                    description: "メッセージの内容を確認するときに各値を正規表現として使用する (上級)"
                },
                regexHelper: {
                    label: "正規表現ヘルパー",
                    description: "サンプル入力に対して正規表現をテストします"
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
            },
            text: {
                unknownUser: "不明なユーザー"
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
                selectedBorder: "選択中タブのアクセント枠",
                selectedBackground: "選択したタブの背景色",
                tabShadows: "タブの影の効果",
                tabRepositioning: "タブの位置変更 (スムーズな位置変更)",
                resizeHandle: "サイズ変更ハンドルフェード",
                questActivate: "進行中のクエストのグラデーション"
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
                specialPage: "スペシャルページ",
                searchPlaceholder: "ブックマークを検索",
            },
            button: {
                save: "保存",
                delete: "消去",
                cancel: "キャンセル",
                reset: "リセット",
                close: "閉じる",
            },
            context: {
                label: "チャンネルタブのコンテキストメニュー",
                bookmark: "ChannelTabs ブックマーク コンテキスト メニュー",
                tab: "ChannelTabs タブのコンテキスト メニュー",
                compact: "コンパクト",
                bookmarkBar: "ブックマークバー",
                openAll: "すべてのブックマークを開く",
                openNew: "新しいタブで開く",
                folderMenu: "ブックマークフォルダメニュー",
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
                folderIcon: {
                    title: "フォルダーアイコンを選択",
                    preview: "プレビュー",
                    iconColor: "アイコンの色",
                    search: "検索",
                    searchPlaceholder: "{{count}} 個のアイコンを検索...",
                    folderName: "フォルダー名",
                    folderColor: "フォルダーの色",
                    folderIcon: "フォルダーアイコン",
                    chooseIcon: "アイコンを選択",
                    useDefaultIcon: "デフォルトアイコンを使用"
                },
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
                persistUnreadCountFallback: {
                    label: "未読数フォールバックを保持",
                    description: "タブとブックマークの未読バッジのフォールバックをリロード間で保持する"
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
                tabHeightScale: {
                    label: "タブの高さスケール",
                    description: "タブの高さスケール（パーセンテージ）。"
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
                    shortcutDisabled: "このショートカットは現在無効です",
                    pressKey: "任意のキーを押してください...",
                    conflictError: "このキー割り当てはすでに使用されています: {{key}}",
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
            },
            text: {
                folder: "フォルダー"
            }
        },
        characterCounter: {
            name: "CharacterCounter",
            description: "チャット入力欄に文字数カウンターを追加します",
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
            description: "チャンネル名から絵文字や装飾を取り除きます。チャンネルの編集中は元の名前に戻ります。",
            option: {
                ignoredChannels: {
                    description: "変更しないチャンネル ID のカンマ区切りリストです。",
                    label: "無視するチャンネル"
                }
            },
            text: {
                keepOriginalName: "元の名前を維持"
            }
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
                unknown: "不明な役割",
                andMore: "他 {{count}} 人"
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
            },
            text: {
                dark: "ダーク",
                light: "ライト"
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
            description: "Discord のどこでもアクションを実行できる Raycast 風のコマンドパレット",
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
                    streamer: "配信者モードを切り替え",
                    mute: "セルフミュートの切り替え",
                    deafen: "スピーカーミュートを切り替え",
                },
                notification: {
                    clear: {
                        label: "デスクトップ通知を消去"
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
                },
                commandDeleted: "コマンドを削除しました。",
                statusSetToLabel: "ステータスを {{label}} に設定しました。",
                themeSetToLabel: "テーマを {{label}} に設定しました。",
                noSettingsPageWas: "設定ページが指定されていません。",
                unableToOpenLabel: "{{label_that_settings_page}} を開けませんでした。",
                failedToStartDependencies: "依存関係を開始できませんでした: {{join}}",
                messageSentToUsername: "{{username}} にメッセージを送信しました。",
                enabledRestart: "{{name}} を有効にしました。適用するには再起動してください。",
                disabledRestart: "{{name}} を無効にしました。適用するには再起動してください。",
                enabled: "{{name}} を有効にしました。",
                disabled: "{{name}} を無効にしました。",
                errorStarting: "{{name}} の開始中にエラーが発生しました。",
                errorStopping: "{{name}} の停止中にエラーが発生しました。"
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
                },
                closeAfterExecute: {
                    description: "コマンド実行後にパレットを閉じます。",
                    label: "実行後に閉じる"
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
            },
            text: {
                insertTextInChat: "チャットにテキストを挿入",
                name: "Name",
                commandName: "コマンド名",
                settingsPage: "設定ページ",
                searchSettingsPages: "設定ページを検索...",
                text: "テキスト",
                textToInsertInto: "チャット欄に挿入するテキスト",
                editCommand: "コマンドを編集",
                deleteCommand: "コマンドを削除",
                createCustomCommand: "カスタムコマンドを作成",
                light: "ライト",
                ash: "アッシュ",
                dark: "ダーク",
                onyx: "オニキス",
                toggleMute: "ミュートを切り替え",
                toggleDeafen: "スピーカーミュートを切り替え",
                setStatus: "ステータスを設定",
                searchStatuses: "ステータスを検索...",
                setLabel: "{{label}} に設定",
                toggleTheme: "テーマを切り替え",
                openServer: "サーバーを開く",
                openChannel: "チャンネルを開く",
                openDm: "DM を開く",
                goHome: "ホームへ移動",
                goToServer: "サーバーへ移動",
                searchServers: "サーバーを検索...",
                goToChannel: "チャンネルへ移動",
                searchChannels: "チャンネルを検索...",
                searchFriends: "フレンドを検索...",
                myAccount: "マイアカウント",
                profiles: "プロフィール",
                dataPrivacy: "データとプライバシー",
                devices: "デバイス",
                connections: "接続",
                appearance: "外観",
                accessibility: "ユーザー補助",
                voiceVideo: "音声・ビデオ",
                chat: "チャット",
                textImages: "テキストと画像",
                notifications: "通知",
                keybinds: "キー割り当て",
                authorizedApps: "認可済みアプリ",
                familyCenter: "ファミリーセンター",
                advanced: "詳細設定",
                plexcord: "Plexcord",
                plexcordPlugins: "Plexcord プラグイン",
                plexcordThemes: "Plexcord テーマ",
                plexcordUpdater: "Plexcord アップデーター",
                plexcordChangelog: "Plexcord 変更履歴",
                openQuickcss: "QuickCSS を開く",
                openUpdater: "アップデーターを開く",
                openChangelog: "変更履歴を開く",
                restartDiscord: "Discord を再起動",
                managePlugins: "プラグインを管理",
                searchPlugins: "プラグインを検索...",
                sendDm: "DM を送信",
                recipient: "受信者",
                message: "メッセージ",
                messageContent: "メッセージ内容",
                openPaletteHotkey: "パレットを開くホットキー",
                actions: "アクション",
                preview: "プレビュー",
                openCommand: "コマンドを開く",
                copyAnswer: "答えをコピー",
                openDetails: "詳細を開く",
                calculator: "電卓",
                expression: "式",
                result: "結果",
                copyExpression: "式をコピー",
                pinned: "ピン留め",
                suggestions: "候補",
                setAlias: "エイリアスを設定",
                aliasForLabel: "{{label}} のエイリアス",
                leaveEmptyToRemove: "空欄にすると削除されます",
                command: "コマンド",
                noResults: "結果なし",
                addFile: "ファイルを追加",
                saveCommand: "コマンドを保存",
                createCommand: "コマンドを作成",
                nameRequired: "名前は必須です。",
                enterValidUrl: "有効なURLを入力してください。",
                pickSettingsPage: "候補から設定ページを選んでください。",
                textRequired: "テキストは必須です。",
                commandSaved: "コマンドを保存しました。",
                commandCreated: "コマンドを作成しました。",
                editCustomCommand: "カスタムコマンドを編集",
                disablePlugin: "プラグインを無効化",
                enablePlugin: "プラグインを有効化",
                pickRecipient: "候補から宛先を選んでください。",
                addMessageOrFile: "メッセージかファイルを追加してください。",
                pressKeys: "キーを押してください...",
                answerCopied: "答えをクリップボードにコピーしました。",
                calculationCopied: "計算式をクリップボードにコピーしました。",
                unpinCommand: "コマンドのピン留めを解除",
                pinCommand: "コマンドをピン留め",
                saveAlias: "エイリアスを保存",
                changeHotkey: "ホットキーを変更",
                recordHotkey: "ホットキーを記録",
                pressKeyCombo: "キーの組み合わせを押してください。Backspaceでクリア、Escでキャンセル",
                searchIn: "{{title}}を検索...",
                searchCommands: "コマンドを検索...",
                somethingWentWrong: "問題が発生しました。",
                remove: "削除",
                enabled: "有効",
                disabled: "無効",
                sectionNavigation: "ナビゲーション",
                sectionCustom: "カスタム",
                sectionPlugins: "プラグイン",
                sectionMessaging: "メッセージ",
                current: "現在",
                submit: "送信"
            },
            description2: "Discord のどこでもアクションを実行できる Raycast 風のコマンドパレット"
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
            copy: "サーバープロフィールの色をコピー",
            toast: {
                noColor: "プロファイルの色が見つかりません!",
                copied: "プロファイルの色がクリップボードにコピーされました。",
                error: "プロファイルの色のコピー中にエラーが発生しました!"
            },
            text: {
                formatted: "メインカラー #{{primary}}、サブカラー #{{secondary}}"
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
                copy: "ステッカーのリンクをコピー",
                open: "ステッカーのリンクを開く"
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
                    body: "Awn :( Discord は 2 回急速にクラッシュしましたが、回復しようとしませんでした",
                    update: "ああ、Discord がクラッシュしました...しかし良いニュースです。この問題を修正する可能性のある Plexcord アップデートが利用可能です。今すぐ更新しますか?",
                    recover: "回復を試みています...",
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
            },
            context: {
                changeIcon: "アイコンを変更"
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
                sharing: "アクティビティ共有が無効なため、他の人はカスタムリッチプレゼンスを見られません！",
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
                },
                enablePresence: {
                    description: "プレゼンスを表示するかどうか",
                    label: "プレゼンスを有効化"
                }
            },
            toast: {
                savedPresetName: "プリセット {{name}} を保存しました。",
                loadedPresetName: "プリセット {{name}} を読み込みました。",
                deletedPresetSelectedpreset: "プリセット {{selectedPreset}} を削除しました。"
            },
            text: {
                presetName: "プリセット名",
                selectAPreset: "プリセットを選択",
                streamLinkTwitchOr: "配信リンク（Twitch または YouTube、アクティビティの種類が配信中の場合のみ）",
                presets: "プリセット",
                save: "保存",
                load: "読み込む",
                delete: "削除",
                noSavedPresetsYet: "保存されたプリセットはまだありません。",
                showCustomRpc: "カスタム RPC を表示",
                customRpcDisabled: "カスタム RPC は無効です",
                theEnablePresenceSetting: "「プレゼンスを有効化」設定が無効なため、プレゼンスは表示されません。意図しない場合は下で有効にしてください。",
                activitySharingDisabled: "アクティビティ共有が無効です",
                discordDeveloperPortal: "Discord デベロッパーポータル",
                imgur: "Imgur",
                enableActivitySharing: "アクティビティ共有を有効化"
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
                select: "ファイルを選択してください...",
                overrides: {
                    label: "上書き"
                },
                soundpack: {
                    label: "サウンドパック",
                    description: "Discordで設定されているものの代わりに使用するサウンドパック。",
                    default: "Discordのデフォルト"
                }
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
                or: "または",
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
            },
            text: {
                toggleDearrow: "Dearrow を切り替え"
            }
        },
        declutter: {
            name: "Declutter",
            description: "プロフィール効果、ショップタブ、ブーストなどの必須ではない UI 要素を削除して、Discord をクリーンアップします。",
            option: {
                userProfileHeader: {
                    label: "ユーザープロフィール"
                },
                removeAvatarDecoration: {
                    label: "アバター装飾を削除",
                    description: "アバターデコレーションを削除します。Decor が有効な場合は無効になります。",
                    alertBody: "Decor プラグインとの衝突を防ぐため、アバター装飾の削除は無効化されています。",
                    ok: "OK"
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
                },
                removeProfileFrame: {
                    description: "プロフィールフレームを削除します。",
                    label: "プロフィールフレームを削除"
                },
                removeDisplayNameStyles: {
                    description: "メンバーリストのアニメーション/装飾された表示名を削除します。",
                    label: "表示名のスタイルを削除"
                },
                removeLibraryAboveDms: {
                    description: "DM リストの上のライブラリを削除します。",
                    label: "DM の上のライブラリを削除"
                },
                removeFamilyCenterAboveDms: {
                    description: "DM リストの上のファミリーセンターを削除します。",
                    label: "DM の上のファミリーセンターを削除"
                }
            },
            text: {
                discordAlreadyHasA: "Discord には既にユーザー名スタイルの組み込みオプションがあります：",
                accessibilitySettings: "ユーザー補助設定。"
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
            },
            toast: {
                failedToAuthorizeMessage: "認可に失敗しました: {{message}}"
            },
            text: {
                removeDecoration: "Decorのデコレーションを削除",
                decoration: "Decorのデコレーション",
                none: "なし",
                decorationFile: "デコレーションファイル"
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
                    label: "キー割り当て",
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
            },
            text: {
                reconnect: "再接続",
                loadingLazyModules: "遅延モジュールを読み込み中です。再起動するとエラーが発生する可能性があります",
                loadedLazyModules: "すべての遅延モジュールを読み込みました",
                failedLazyModules: "遅延モジュールの読み込みに失敗しました。コンソールを確認してください",
                ok: "OK"
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
            },
            text: {
                notSupported: "非対応",
                devBuild: "開発ビルド",
                standalone: "スタンドアロン"
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
        downloadAllAttachments: {
            name: "DownloadAllAttachments",
            description: "メッセージの添付ファイルをまとめてダウンロードするポップオーバーボタンを追加します。",
            button: "すべての添付ファイルをダウンロード",
            toast: {
                success: "{{count}} 件の添付ファイルをダウンロードしました。",
                partial: "{{total}} 件中 {{succeeded}} 件の添付ファイルをダウンロードしました。{{failed}} 件が失敗しました。",
                downloadedPluralizeSucceededAttachment: "{{pluralize_succeeded_attachment}} をダウンロードしました。",
                downloadedSucceededOfLength: "{{length}} 件中 {{succeeded}} 件の添付ファイルをダウンロードしました。{{failed}} 件失敗しました。"
            },
            option: {
                downloadAllFileTypes: {
                    description: "メディア以外の添付ファイルもダウンロードします。送られてくるものを信頼できる場合のみ有効にしてください。",
                    label: "すべてのファイル形式をダウンロード"
                }
            }
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
                },
                noReusableInvite: "再利用できる招待がありません。",
                unableToReuseInvite: "招待を再利用できません。"
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
            },
            text: {
                searchExperiments: "実験を検索"
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
            },
            text: {
                unknownError: "不明なエラー"
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
                console: "何か問題が発生しました (コンソールを確認してください!)",
                successfullyClonedNameTo: "{{name}} を {{name_your_server}} に複製しました！"
            },
            context: {
                clone: "クローン{{type}}",
                cloneName: "クローン{{data}}"
            },
            text: {
                yourServer: "あなたのサーバー",
                cloneTo: "{{name}}に複製",
                emoji: "絵文字",
                sticker: "スタンプ"
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
                empty: "FPTE ビルダーが空です。コピーするものがありません！"
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
                failedSave: "エイリアスの保存に失敗しました。",
                removedAliasAlias: "エイリアス :{{alias}}: を削除しました",
                aliasSetForGetemojidisplayname: "{{getEmojiDisplayName_ref}} のエイリアスを設定しました。"
            },
            button: {
                edit: "エイリアスの編集",
                set: "エイリアスの設定"
            },
            text: {
                remove: "削除",
                noAliasesSetYet: "エイリアスはまだ設定されていません。",
                aliasRequired: "エイリアスは必須です。",
                aliasInvalid: "エイリアスは2〜32文字で、小文字・数字・アンダースコアのみ使用できます。"
            }
        },
        favoriteAnything: {
            name: "FavoriteAnything",
            description: "任意の画像をお気に入りに追加",
            noFiles: "検索に一致するファイルがありません。",
            searchPlaceholder: "ファイルを検索",
            media: "メディア",
            demoText: "星をクリックしてファイルをお気に入りに追加します。\nお気に入りのファイルがここに表示されます！",
            fetchError: "{filename}を取得できませんでした",
            uploadError: "{filename}をアップロードできませんでした",
            text: {
                clickTheStarTo: "星をクリックするとファイルをお気に入りに追加できます。",
                favoriteFilesWillShow: "お気に入りのファイルがここに表示されます！"
            },
            option: {
                localThumbnails: {
                    description: "外部サービス (placeholder.nin0.dev) を使わず、ファイルのサムネイルをローカルで生成します。モバイルには対応していません。このオプションを切り替えても既存のお気に入りには影響しません。",
                    label: "ローカルサムネイル"
                }
            }
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
                couldntFind: "返信が見つかりませんでした。"
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
                    label: "返信がない場合はボタンを非表示",
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
                },
                onlyWhenInVoice: {
                    label: "ボイス中のみ",
                    description: "自分がボイスチャンネルにいるときだけユーザーを追従します"
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
            },
            text: {
                currentFont: "現在のフォント:",
                resetFont: "フォントをリセット"
            }
        },
        forceOwnerCrown: {
            name: "ForceOwnerCrown",
            description: "サーバーが大きい場合でも、ユーザー名の横に所有者の王冠を強制的に表示します。"
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
            },
            option: {
                showFriendsInChat: {
                    description: "フレンドからのメッセージにフレンドアイコンを表示します。",
                    label: "チャットでフレンドを表示"
                }
            },
            text: {
                friend: "フレンド",
                rankIcon: "ランクアイコン"
            }
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
            description: "アバターが VC タイル全体を占めるようにします"
        },
        gameActivityToggle: {
            name: "GameActivityToggle",
            description: "マイクとスピーカーミュートのボタンの横に、ゲームアクティビティを切り替えるボタンを追加します。右クリックで Spotify アクティビティを切り替えます。",
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
            },
            text: {
                disableGameActivity: "ゲームアクティビティを無効化",
                enableGameActivity: "ゲームアクティビティを有効化",
                shareSpotifyActivity: "Spotifyアクティビティを共有",
                shareSpotifyActivityAccount: "Spotifyアクティビティを共有 ({{name}})"
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
                alreadyCollection: "この GIF は既にコレクションにあります",
                collectionsImportedSuccessfully: "コレクションをインポートしました。",
                failedToImportCollections: "コレクションをインポートできませんでした: {{String_err}}"
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
            },
            text: {
                gifPickerCategoryOptions: "GIF ピッカーのカテゴリーオプション",
                gifCollections: "GIFコレクション",
                unknown: "不明"
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
                    description: "運命を誘惑してGIFを送る",
                    restricted: "このコマンドはこのサーバーでは制限されています。"
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
                title: "{{username}} の GitHub リポジトリ",
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
            description: "再起動するまでメッセージとDMを一時的に非表示にします。",
            button: {
                hide: "隠れる",
                hideDm: "DMを非表示",
                unhideDm: "DMを再表示"
            },
            toggle: {
                none: "非表示のDMはありません",
                hide: "非表示のDMを隠す",
                show: "非表示のDMを表示"
            },
            option: {
                hidePopoverButton: {
                    label: "ポップオーバーボタンを非表示にする",
                    description: "メッセージポップオーバーの非表示ボタンを非表示にします。"
                }
            }
        },
        hideMutedVoiceIndicator: {
            name: "HideMutedVoiceIndicator",
            description: "アクティブなボイスチャンネルがすべてミュートされている場合、サーバーリストのボイスインジケーターを非表示にします"
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
                invalid: "メモのインポートに失敗しました。",
                invalidJson: "無効な JSON"
            },
            toolbox: {
                action: "ノートを開く"
            },
            text: {
                holyNotes: "Holy Notes",
                noteTag: "メモ"
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
                    description: "すべての再生中アクティビティを無視します（通常は Spotify のアクティビティ）"
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
            },
            text: {
                enableActivity: "アクティビティを有効化",
                disableActivity: "アクティビティを無効化"
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
            },
            text: {
                bytes: "バイト"
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
            },
            toast: {
                instantScreenshareDisabled: "インスタント画面共有 {{disabled}}"
            },
            text: {
                instantScreenshare: "Instant Screenshare"
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
            },
            text: {
                serverOptions: "サーバーオプション",
                copyServerId: "サーバー ID をコピー",
                serverIdCopied: "サーバーIDをクリップボードにコピーしました"
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
            },
            text: {
                keywordEntryI1: "キーワード項目 {{i_1}}",
                listPriorityAdvanced: "リストの優先度（詳細）",
                whichListToPrioritize: "メッセージが両方のリストに該当した場合に優先するリスト",
                ifYouAreNot: "よくわからない場合、多くの一般的なケースではブラックリストに設定されています"
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
                showAlbumCover: {
                    label: "アルバムのアートワークを表示",
                    description: "アルバムのアートワークを表示します。無効にするとプレースホルダーが表示されます。音楽に不適切なアートワークが含まれている場合に便利です"
                },
                useLogo: {
                    label: "ロゴを使用する",
                    description: "アルバム アートに ListenBrainz ロゴを表示する"
                }
            },
            button: {
                profile: "ListenBrainz プロフィール",
                viewSong: "曲を見る"
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
            },
            text: {
                allQuotesDisabled: "本当に読み込み中の名言を全部オフにしたの？なんて道化なんだ…"
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
            orPaste: "または、クリップボードから画像を貼り付けます。",
            verifyLogin: "ログインを確認",
            text: {
                scanQrCode: "QRコードをスキャン"
            }
        },
        markdownTables: {
            name: "MarkdownTables",
            description: "DiscordのメッセージでGitHub形式のMarkdownテーブルを表示します。",
            toolbar: {
                label: "Markdownテーブル表示",
                table: "テーブル",
                raw: "生データ"
            },
            option: {
                hideToggle: {
                    label: "切り替えを非表示",
                    description: "テーブル/生データの切り替えを非表示にし、常に表示用テーブルを表示します。"
                }
            }
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
            description: "サーバーのオンラインメンバー数、総メンバー数、ボイスチャンネルのユーザー数を、メンバーリストとツールチップに表示します。",
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
            totalVoice: "{{formattedVoiceCount}} メンバーの声",
            tooltip: {
                total: "サーバーのメンバー合計 {{count}} 人"
            }
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
            linkCopied: "リンクがコピーされました!",
            text: {
                shift: "Shift",
                ctrl: "Ctrl",
                alt: "Alt",
                backspace: "Backspace",
                pickEmoji: "絵文字を選択"
            },
            emojiSetting: {
                pick: "絵文字を選択",
                selectMain: "リアクション用の絵文字を選択",
                selectAdditional: "追加の絵文字を選択",
                additionalPlaceholder: "カンマ/改行区切り、最大 {{max}}"
            },
            toast: {
                cannotReact: "リアクションできません: 権限がありません",
                linkCopied: "リンクをコピーしました！"
            }
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
            removeMessage: "メッセージ履歴を消去",
            removeMessageTemporary: "メッセージの削除 (一時的)",
            clearMessageLog: "メッセージログのクリア",
            showDiff: "差分を表示",
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
                ignoreSelfEdits: {
                    label: "自分の編集を無視する",
                    description: "自分自身による編集を無視するかどうか"
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
                },
                logDeletedAttachments: {
                    description: "削除された添付ファイルを記録するかどうか",
                    label: "削除された添付ファイルを記録"
                }
            },
            text: {
                clearHistory: "履歴を消去",
                toggleDeletedHighlight: "削除済みのハイライトを切り替え",
                enableDiffView: "差分表示を有効化",
                disableDiffView: "差分表示を無効化",
                noDeletedMessages: "削除されたメッセージはありません",
                deletedMessageSuffix: " 件の削除されたメッセージ",
                deletedMessagesSuffix: " 件の削除されたメッセージ"
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
                    description: "メッセージログに常に表示するサーバー、チャンネル、またはユーザーのID。"
                },
                blacklistedIds: {
                    label: "ブラックリストに登録されたID",
                    description: "メッセージログに決して表示しないサーバー、チャンネル、またはユーザーのID。"
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
                clearLogsOnRestart: {
                    label: "再起動時にログをクリア",
                    description: "Discord再起動時にログをクリアします。"
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
            },
            toast: {
                clearedLogs: "ログを消去しました",
                failedToClearLogs: "ログを消去できませんでした",
                failedToRemoveMessage: "メッセージを削除できませんでした。詳細はコンソールを確認してください。",
                noMessagesFoundIn: "ログファイルにメッセージが見つかりません",
                successfullyImportedCountLogs: "{{count}} 件のログをインポートしました",
                successfullyExportedLogs: "ログをエクスポートしました",
                successfullyExportedCountLogs: "{{count}} 件のログをエクスポートしました",
                errorExportingLogsCheck: "ログのエクスポート中にエラーが発生しました。詳細はコンソールを確認してください"
            },
            text: {
                jsonFile: "JSON ファイル",
                clearLogs: "ログを消去",
                clearingLogs: "ログを消去中...",
                messageLogger: "Message Logger",
                importLogs: "ログをインポート",
                logs: "ログ",
                loadingTabLogs: "{{tab}}のログを読み込み中..."
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
                spotifySectionTitle: {
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
                tidalSectionTitle: {
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
                websocketURL: {
                    label: "WebSocket URL",
                    description: "デフォルトは ws://localhost:24123 です"
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
                showMusicNoteOnNoLyrics: {
                    label: "歌詞のない音符を表示",
                    description: "歌詞が見つからない場合に音符アイコンを表示する"
                },
                lyricsPosition: {
                    label: "歌詞の位置",
                    description: "歌詞パネルの位置",
                    above: "上記のプレーヤー",
                    below: "プレーヤーの下"
                },
                lyricsProvider: {
                    label: "歌詞プロバイダー",
                    description: "歌詞の取得元",
                    spotify: "Spotify（ミュージックマッチ）",
                    LRCLIB: "LRCLIB"
                },
                spotifyLyricsApiUrl: {
                    label: "Spotify 歌詞 API のベース URL",
                    description: "カスタムインスタンスのベース URL（例: http://localhost:8080）。"
                },
                translateTo: {
                    label: "翻訳先",
                    description: "歌詞を翻訳する - これを変更すると、既存の翻訳がクリアされます",
                    cleared: "翻訳を消去しました"
                },
                lyricsConversion: {
                    label: "歌詞変換",
                    description: "歌詞を自動翻訳またはローマ字化",
                    none: "なし",
                    translate: "翻訳する",
                    romanize: "ロマニ語"
                },
                fallbackProvider: {
                    label: "フォールバックプロバイダー",
                    description: "歌詞プロバイダーが失敗した場合は、他のプロバイダーを試してください"
                },
                showFailedToasts: {
                    label: "失敗したトーストを表示する",
                    description: "歌詞の読み込みに失敗した場合にトーストを表示する"
                },
                purgeLyricsCache: {
                    label: "歌詞キャッシュをパージ",
                    description: "キャッシュされた歌詞と翻訳をすべてクリアします",
                    button: "キャッシュのパージ",
                    cacheLyricsPurged: "歌詞キャッシュがパージされました"
                },
                lyricDelay: {
                    label: "歌詞の遅延"
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
            },
            text: {
                unknownArtist: "不明なアーティスト",
                unknownTitle: "不明なタイトル"
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
                apply: "フォルダーに NewGuildSettings を適用"
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
                continue: "続く",
                supportUs: "Plexcordはオープンソースソフトウェアです。気に入っていただけたら、ご支援をご検討ください:",
                supportUsLink: "こちら"
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
            description: "デスクトップ通知をより有益なものにする",
            text: {
                threadInParent: "{{parent}} の {{thread}}"
            }
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
                },
                telegram: {
                    label: "Telegram",
                    description: "Telegram のリンクを Telegram アプリで開く"
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
            },
            text: {
                roleOptions: "ロールのオプション",
                userOptions: "ユーザーのオプション",
                unknownRole: "不明なロール",
                unknownUser: "不明なユーザー"
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
                    label: "DM をピン留め",
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
                },
                defaultCategoryName: "ピン留めカテゴリー {{number}}"
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
            embeddedTooltip: "組み込み（コンソールまたはゲーム）",
            vrTooltip: "VR",
            option: {
                list: {
                    label: "リスト",
                    description: "ユーザープロフィールにインジケーターを表示"
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
            about: "このプラグインによって警告やBANを受けないことは保証できません。Xbox/Playstation/VRを選ぶと、クライアントが古いバージョンになる場合があります。",
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
                    description: "使用しているふりをするプラットフォーム。",
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
            description: "さまざまなプロフィールのプリセットを保存・読み込みできます。",
            toast: {
                importFailed: "プリセットをインポートできませんでした。ファイルが無効な可能性があります。",
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
            },
            text: {
                selectAServer: "サーバーを選択",
                profileSets: "プロフィールセット",
                youAreNotIn: "まだどのサーバーにも参加していません。",
                mainProfile: "メインプロフィール",
                serverProfiles: "サーバープロフィール",
                openProfileSets: "プロフィールセットを開く"
            }
        },
        questify: {
            name: "Questify",
            description: "特定の Quest 機能を強化したり、煩わしい要素を無効化したり、Quest を完全に削除したりします。",
            quests: "Quest",
            context: {
                quest: {
                    label: "Quest ボタンメニュー",
                    ignore: "すべて無視としてマーク",
                    reset: "無視リストをリセット",
                    fetch: "Quest を取得",
                    markAsIgnored: "無視としてマーク",
                    unmarkAsIgnored: "無視を解除",
                    stopAuto: "自動完了を停止",
                    startAuto: "自動完了を開始",
                    copyQuestID: "Quest ID をコピー"
                }
            },
            button: {
                completing: "完了中...",
                completingWithTime: "完了中 ({{time}})",
                completingIn: "{{time}} 後に完了",
                queued: "待機中 ({{position}})",
                resuming: "再開中...",
                completeNow: "今すぐ完了",
                complete: "完了 ({{time}})",
                resume: "再開 ({{time}})",
                completed: "完了済み"
            },
            reward: {
                orbs: "{{status}}：{{orbQuantity}} Orbs",
                article: "{{status}}：{{itemName}}",
                unrecognized: "{{status}}：不明な報酬"
            },
            toast: {
                autoCompleteBroken: "自動完了が壊れています。まもなく修正されます。",
                enrollmentFailed: "{{questName}} Quest への登録に失敗しました。",
                enrollmentInNormalizequestnameQuest: "クエスト {{normalizeQuestName_quest}} への参加に失敗しました{{rateLimitSuffix}}。"
            },
            notification: {
                completed: {
                    title: "Quest 完了！",
                    body: "{{questName}} Quest が完了しました。"
                },
                newQuest: {
                    title: "新しい Quest を検出！",
                    body: "{{questName}} Quest が利用可能になりました。"
                },
                newQuests: {
                    title: "新しい Quest を検出！",
                    body: "{{count}} 件の新しい Quest が利用可能になりました。"
                },
                newExcludedQuest: {
                    title: "新しい除外 Quest を検出！",
                    body: "除外された {{questName}} Quest を検出しました。ID: {{questId}}"
                },
                newExcludedQuests: {
                    title: "新しい除外 Quest を検出！",
                    body: "{{count}} 件の新しい除外 Quest を検出しました。Quest ID はコンソールを確認してください。"
                }
            },
            alert: {
                restart: {
                    title: "再起動が必要です",
                    body: "Questify の設定変更を反映するには再起動が必要です。",
                    confirm: "再起動",
                    cancel: "後で"
                },
                dangerous: {
                    title: "よろしいですか？",
                    confirm: "続行",
                    cancel: "キャンセル",
                    disableEverything: "Quest 機能を完全に無効化します。",
                    allowDangerous: "危険な設定の変更を許可します。"
                }
            },
            status: {
                unclaimed: "未受取",
                claimed: "受け取り済み",
                ignored: "無視",
                expired: "期限切れ"
            },
            questTypes: {
                watchVideo: "動画を視聴",
                watchVideoOnMobile: "モバイルで動画を視聴",
                achievementInActivity: "アクティビティで実績",
                achievementInGame: "ゲームで実績",
                playActivity: "アクティビティをプレイ",
                playOnDesktop: "デスクトップでプレイ",
                playOnDesktopV2: "デスクトップでプレイ V2",
                streamOnDesktop: "デスクトップで配信",
                playOnPlayStation: "PlayStation でプレイ",
                playOnXbox: "Xbox でプレイ"
            },
            settings: {
                questButton: {
                    title: "Quest ボタン",
                    description: "サーバーリストに Quest ボタンを表示し、未受け取りかつ無視されていない Quest のインジケーターを任意で表示します。",
                    behavior: "ボタンの動作",
                    leftClick: "左クリックの動作:",
                    middleClick: "中クリックの動作:",
                    rightClick: "右クリックの動作:",
                    visibility: "ボタンの表示:",
                    visibilityTooltip: "常に：この機能が有効な間、Quest ボタンを表示します。\n\n未受け取り：関連する未受け取りの Quest 報酬がある場合のみ表示します。\n\n表示しない：Quest ボタンを非表示にします。",
                    unclaimedIndicator: "未受け取りインジケーター:",
                    unclaimedIndicatorTooltip: "ピル：Quest ボタンの横に Discord の未読マーカーを表示します。\n\nバッジ：関連する未受け取りの Quest 報酬の数を表示します。\n\n両方：ピルとバッジを一緒に表示します。\n\nなし：インジケーターを非表示にします。",
                    badgeColor: "バッジの色:",
                    relevancy: "Quest の対象",
                    includedRewardTypes: "対象の報酬タイプ:",
                    includedRewardTypesTooltip: "ボタンの表示、バッジの数、通知の動作を判断する際、これらの報酬タイプを持つ Quest のみを未受け取りとして数えます。",
                    includedQuestTypes: "対象の Quest タイプ:",
                    includedQuestTypesTooltip: "ボタンの表示、バッジの数、通知の動作を判断する際、これらのタスクタイプを持つ Quest のみを未受け取りとして数えます。",
                    display: {
                        always: "常に",
                        unclaimed: "未受け取り",
                        never: "表示しない"
                    },
                    indicator: {
                        pill: "ピル",
                        badge: "バッジ",
                        both: "両方",
                        none: "なし"
                    },
                    action: {
                        openQuests: "Quest を開く",
                        contextMenu: "コンテキストメニュー",
                        pluginSettings: "プラグイン設定",
                        nothing: "何もしない"
                    },
                    rewardTypes: {
                        orbs: "Orbs",
                        nitroCodes: "Nitro コード",
                        rewardCodes: "報酬コード",
                        inGameItems: "ゲーム内アイテム",
                        profileCollectibles: "プロフィールコレクティブル"
                    }
                },
                questFeatures: {
                    title: "Quest 機能",
                    description: "Quest の動作を変更して機能を強化または削除します。",
                    disableFeatures: "機能を無効化",
                    disableEverything: "Quest 機能を完全に無効化:",
                    disableEverythingTooltip: "プラグインのすべての強化を無効にし、Quest ページと Discord 全体の Quest 要素を非表示にし、Discord が Quest データを取得するのを防ぎます。Orbs は副次通貨としてショップと密接に結びついているため、ショップには影響しません。",
                    disableSpecific: "特定の機能を無効化:",
                    disableSpecificTooltip: "スポンサーバナーは Quest ページ上部の有料 Quest バナーです。\n\n移転のお知らせは、Quest が DM に移動したことを示す発見ページなどの表示です。\n\nフレンドリストのプロモは、サーバーを共有するユーザーがアクティブな Quest のあるゲームをプレイしている間、フレンドリストの「アクティブ」欄に表示されるカードです。\n\nメンバーリストのプロモは、アクティブな Quest のあるゲームをプレイ中のメンバーにサーバーのメンバーリストで表示されるアイコンです。\n\nアカウントパネルのプロモは、ユーザーアカウントパネルの上に表示される有料 Quest プロモーションです。\n\nアカウントパネルの進捗は、ユーザーアカウントパネルの上に表示される進行中または完了した Quest の進捗です。\n\nQuest と Orbs のバッジは、Quest を 1 つ以上完了した人や Orbs バッジを購入した人のプロフィールに表示されるバッジです。",
                    disableOptions: {
                        sponsoredBanner: "スポンサーバナー",
                        relocationNotices: "移転のお知らせ",
                        friendsListPromo: "フレンドリストのプロモ",
                        membersListPromo: "メンバーリストのプロモ",
                        accountPanelPromo: "アカウントパネルのプロモ",
                        accountPanelProgress: "アカウントパネルの進捗",
                        orbsAndQuestsBadges: "Quest と Orbs のバッジ"
                    },
                    modifyFeatures: "機能を変更",
                    warningTos: "Discord は、Quest の完了方法を変更するスクリプトやプラグインの利用者に警告を出し始めました。これは {{tos}} に違反します。",
                    tos: "利用規約",
                    warningEscalate: "警告は今のところ Quest やその報酬へのアクセスを失う可能性に限られているようですが、Discord はいつでも措置を強化する可能性があります。",
                    warningDetection: "Discord はさまざまな方法でユーザーを追跡しているため、検出を現実的に回避する方法はありません。続行する場合、いずれ Discord に検出される可能性が高いことを理解してください。",
                    warningRisk: "以下のトグルで、潜在的に危険な設定に自己責任でアクセスできます。",
                    allowDangerous: "危険な設定の変更を許可...",
                    disallowDangerous: "リセットして危険な設定の変更を禁止...",
                    completeVideoQuicker: "動画 Quest の自動完了を高速化:",
                    completeVideoQuickerTooltip: "Discord では、Quest に登録してから動画の長さより 24 秒短い時間が経過すると、動画 Quest を完了できます。\n\nつまり、24 秒以下の動画 Quest や、登録して後で戻ってきた Quest はすぐに完了できます。\n\nこの設定は動画 Quest の自動完了にのみ適用され、下の自動完了設定に依存します。手動で完了する場合は引き続き全時間待つ必要があり、登録時刻には依存しません。",
                    mobileDesktop: "一部のモバイル専用動画 Quest をデスクトップで完了可能にする:",
                    mobileDesktopTooltip: "一部のモバイル専用動画 Quest はデスクトップで登録できますが、完了はモバイルで行う必要があります。この設定によりデスクトップで完了できるようになります。\n\n一部のモバイル専用動画 Quest はモバイルでのみ登録できます。この設定を適用するには、モバイル端末で登録してからデスクトップに戻り、Quest を更新してください。\n\n単独で有効にした場合、この設定は動画 Quest の手動完了にのみ適用されます。デスクトップからのモバイル動画 Quest の自動完了は下の自動完了設定に依存し、この設定も暗黙的に有効になります。",
                    simultaneous: "Quest を順番ではなく同時に自動完了:",
                    simultaneousTooltip: "デフォルトでは、複数の Quest を自動完了しようとするとキューに入れられ、順番に完了されます。\n\nこの設定では、代わりにすべての自動完了 Quest を同時に実行できます。\n\nこの設定は Quest の自動完了にのみ適用され、下の自動完了設定に依存します。",
                    resumeInterrupted: "再読み込みや再起動後に中断された自動完了を再開:",
                    resumeInterruptedTooltip: "この設定は、再読み込みや再起動で中断された自動完了を自動的に再開します。キューに入っていたがまだ開始していなかった Quest の再キュー登録も含みます。",
                    autoCompleteTypes: "特定の Quest タイプを自動完了:",
                    autoCompleteTypesTooltip: "「モバイルで動画を視聴」Quest は、デスクトップで登録できるモバイル Quest でのみ動作します。モバイルでのみ登録できる Quest の場合は、先にモバイル端末で登録してからデスクトップに戻り、Quest を更新してください。\n\n動画関連の Quest は通常、進捗報告とともにスタックトレースを送信します。そのため Discord はどの関数が呼ばれたかを正確に把握し、自社の関数が進捗を開始したことを検証できます。Questify はこのスタックトレースを消去しますが、存在しないこと自体が存在するのと同じくらい目立ちます。\n\n「デスクトップでプレイ」「PlayStation でプレイ」「Xbox でプレイ」「アクティビティをプレイ」Quest は、Discord による制限のため公式デスクトップクライアントでのみ利用できます。Web 拡張機能、Plextron などのサードパーティクライアントは、これらのタイプの自動完了に対応していません。\n\nゲーム関連の Quest は通常、ハートビート報告とともにゲームのフィンガープリントを送信します。そのため Discord は数万人のユーザーのデータを使って、他のユーザーが実際のゲームを使っているか実行ファイルを偽装しているかを判断できます。この値を偽装する合理的な方法はないため Questify は空のままにしますが、存在しないことは下手な偽装と同じくらい目立ちます。\n\n「アクティビティで実績」Quest は即座に完了することでのみ自動完了できます。この方法はいつでも修正される可能性があります。\n\nQuest の自動完了は、Quest ページの各ボタンをクリックして行います。上で同時完了が有効でない限り、Quest はキューに入った順に自動完了されます。\n\nQuest の自動完了は最もリスクの高い危険な設定です。自己責任で有効にしてください。"
                },
                questNotifications: {
                    title: "Quest 通知",
                    description: "Quest 完了時と新しい Quest 検出時の通知とアラートを設定します。",
                    questCompleted: "Quest 完了",
                    notifyOnComplete: "Quest 完了時に通知を表示:",
                    soundOnComplete: "Quest 完了時にサウンドを再生:",
                    volume: "音量:",
                    newQuests: "新しい Quest の検出",
                    notifyOnNew: "新しい Quest 検出時に通知を表示:",
                    soundOnNew: "新しい Quest 検出時にサウンドを再生:",
                    notifyOnNewExcluded: "新しい除外 Quest 検出時に通知を表示:",
                    notifyOnNewExcludedTooltip: "一部の Quest は地域やプラットフォームの制限により、利用可能な Quest リストから除外されています。\n\n有効にすると、Questify はそれらの Quest 設定を取得し、対象の Quest タイプと報酬タイプのフィルターを適用し、除外 Quest のデータをコンソールに出力して、一致する除外 Quest について個別の通知を表示します。",
                    soundOnNewExcluded: "新しい除外 Quest 検出時にサウンドを再生:",
                    soundOnNewExcludedTooltip: "一部の Quest は地域やプラットフォームの制限により、利用可能な Quest リストから除外されています。\n\nサウンドを選択すると、Questify はそれらの Quest 設定を取得し、対象の Quest タイプと報酬タイプのフィルターを適用し、除外 Quest のデータをコンソールに出力して、一致する除外 Quest についてこのサウンドを再生します。",
                    fetchInterval: "Quest の取得間隔:",
                    fetchIntervalTooltip: "Discord は起動時と Quest ページを開いたときにのみ Quest を取得します。\n\nこの間隔により、クライアントが開いている間 Quest が定期的に取得され、Quest ボタンのインジケーターや新しい Quest のアラートが一日中最新に保たれます。\n\n有効になっていて、Quest ボタンまたは Quest 通知の設定で定期取得が意味を持つ場合にのみ動作します。",
                    disabled: "無効",
                    preview: "{{sound}} を試聴",
                    intervals: {
                        thirtyMinutes: "30 分",
                        fortyFiveMinutes: "45 分",
                        oneHour: "1 時間",
                        threeHours: "3 時間",
                        sixHours: "6 時間",
                        twelveHours: "12 時間"
                    }
                },
                questTiles: {
                    title: "Quest タイル",
                    description: "テーマカラーで Quest を強調表示して見やすくします。",
                    behavior: "タイルの動作",
                    gradientStyle: "グラデーションのスタイル:",
                    gradientStyleTooltip: "強めとデフォルトは、画像のグラデーションに選択したタイルの色を使用します。\n\n控えめな黒は、コントラストのために暗めのニュートラルなグラデーションを使います。\n\nグラデーションなしは画像のグラデーションを削除するため、一部の Quest のアートワークが読みにくくなる場合があります。",
                    assetPreload: "アセットのプリロード:",
                    assetPreloadTooltip: "Quest ページを開いたときにすべてのアセットを読み込むと、スクロール中のレイアウトのずれが減ります。\n\nスクロール中に読み込むのは Discord のデフォルトの動作に近く、最初の負荷が少なくなる場合があります。",
                    colors: "タイルの色",
                    enable: "有効化",
                    disable: "無効化",
                    gradient: {
                        intense: "強めのリスタイルグラデーション",
                        default: "デフォルトのリスタイルグラデーション",
                        black: "控えめな黒のグラデーション",
                        hide: "グラデーションなし"
                    },
                    preload: {
                        onLoad: "ページ読み込み時にすべての Quest アセットを読み込む",
                        onScroll: "ページのスクロール中に Quest アセットを読み込む"
                    }
                },
                reorderQuests: {
                    title: "Quest の並べ替え",
                    description: "クエストページで Questify の並べ替えを選んだとき、クエストをステータス順に並べます。非表示のステータスはどの並べ替えでも除外されます。",
                    statusOrder: "ステータスの順序",
                    statusOrderTooltip: "各ステータスは一度しか使えません。別の位置で使われているステータスを選ぶと、2 つの位置が入れ替わります。",
                    positions: {
                        first: "1 番目:",
                        second: "2 番目:",
                        third: "3 番目:",
                        fourth: "4 番目:"
                    },
                    subsorts: "サブソート",
                    unclaimedSubsort: "未受け取りのサブソート:",
                    unclaimedSubsortTooltip: "完了済みで未受け取りの Quest は未完了の未受け取り Quest の下に置かれ、その後各グループ内でこのサブソートが適用されます。",
                    claimedSubsort: "受け取り済みのサブソート:",
                    claimedSubsortTooltip: "受け取り済みの Quest は、受け取り時刻または Quest の追加時刻で並べ替えられます。",
                    ignoredSubsort: "無視のサブソート:",
                    ignoredSubsortTooltip: "無視された Quest はグループの位置を保ち、このサブソートがグループ内の順序を決めます。",
                    expiredSubsort: "期限切れのサブソート:",
                    expiredSubsortTooltip: "期限切れの Quest は、期限時刻または Quest の追加時刻で並べ替えられます。",
                    subsort: {
                        addedNewest: "追加日 (新しい順)",
                        addedOldest: "追加日 (古い順)",
                        expiringSoonest: "期限 (近い順)",
                        expiringLatest: "期限 (遠い順)",
                        expiredMostRecent: "期限切れ (最近)",
                        expiredLeastRecent: "期限切れ (古い)",
                        claimedMostRecent: "受け取り (最近)",
                        claimedLeastRecent: "受け取り (古い)"
                    },
                    memory: "Quest ページの記憶",
                    rememberSort: "Quest ページで選択した並べ替えを記憶:",
                    rememberSortTooltip: "無効にすると、Quest ページは毎回 Questify の並べ替えで開きます。",
                    rememberFilters: "Quest ページで選択したフィルターを記憶:",
                    rememberFiltersTooltip: "無効にすると、Quest ページは毎回タスクや報酬のフィルターなしで開きます。"
                }
            },
            option: {
                migrationVersion: {
                    label: "移行バージョン",
                    description: "設定の現在の移行バージョンです。"
                },
                questFeatures: {
                    label: "Quest 機能",
                    description: "無効にする Quest 機能を選択します。"
                },
                disableQuestsEverything: {
                    label: "すべて無効化",
                    description: "すべての Quest 機能を無効にします。"
                },
                disableRelocationNotices: {
                    label: "移転のお知らせを無効化",
                    description: "発見ページの Quest 移転のお知らせを無効にします。"
                },
                disableSponsoredBanner: {
                    label: "スポンサーバナーを無効化",
                    description: "Quest ページのスポンサーバナーを無効にします。"
                },
                disableAccountPanelPromo: {
                    label: "アカウントパネルのプロモを無効化",
                    description: "アカウントパネルの上に表示されるプロモ Quest のポップアップを無効にします。"
                },
                disableAccountPanelQuestProgress: {
                    label: "アカウントパネルの進捗を無効化",
                    description: "アカウントパネルの上に表示される進行中・完了済み Quest の進捗を無効にします。"
                },
                disableOrbsAndQuestsBadges: {
                    label: "Quest と Orbs のバッジを無効化",
                    description: "ユーザープロフィールの Quest バッジを無効にします。"
                },
                disableFriendsListPromo: {
                    label: "フレンドリストのプロモを無効化",
                    description: "フレンドがプレイ中のゲームの Quest プロモーションを無効にします。"
                },
                disableMembersListPromo: {
                    label: "メンバーリストのプロモを無効化",
                    description: "メンバーリストのプレイ中アイコンを無効にします。"
                },
                allowChangingDangerousSettings: {
                    label: "危険な設定を許可",
                    description: "危険な設定の変更を許可します。"
                },
                resumeInterruptedQuests: {
                    label: "中断された Quest を再開",
                    description: "再読み込みや再起動後に Quest の自動完了を再開します。"
                },
                makeMobileVideoQuestsDesktopCompatible: {
                    label: "モバイル動画 Quest をデスクトップ対応にする",
                    description: "モバイル専用の動画 Quest をデスクトップに対応させます。"
                },
                autoCompleteQuestsSimultaneously: {
                    label: "同時に自動完了",
                    description: "Quest を順番ではなく同時に完了します。"
                },
                completeVideoQuestsQuicker: {
                    label: "動画 Quest を素早く完了",
                    description: "動画 Quest の自動完了に Discord の進捗猶予と登録からの経過時間を使用します。"
                },
                autoCompleteQuestTypes: {
                    label: "自動完了する Quest タイプ",
                    description: "バックグラウンドで自動完了する Quest のタイプです。"
                },
                questButton: {
                    label: "Quest ボタン",
                    description: "サーバーリストの Quest ボタンをカスタマイズします。"
                },
                questButtonDisplay: {
                    label: "Quest ボタンの表示",
                    description: "サーバーリストの Quest ボタンに使用する表示タイプです。"
                },
                questButtonIncludedTypes: {
                    label: "Quest ボタンの対象タイプ",
                    description: "Quest ボタンに Quest 数を表示する際に含める報酬タイプと Quest タイプです。"
                },
                questButtonIndicator: {
                    label: "Quest ボタンのインジケーター",
                    description: "Quest ボタンの未受け取りインジケーターに使用する表示タイプです。"
                },
                questButtonBadgeCount: {
                    label: "バッジの数",
                    description: "関連する未受け取り Quest の現在の数です。"
                },
                questButtonBadgeColor: {
                    label: "バッジの色",
                    description: "サーバーリストの Quest ボタンのバッジの色です。"
                },
                questButtonLeftClickAction: {
                    label: "左クリックの動作",
                    description: "Quest ボタンを左クリックしたときの動作です。"
                },
                questButtonMiddleClickAction: {
                    label: "中クリックの動作",
                    description: "Quest ボタンを中クリックしたときの動作です。"
                },
                questButtonRightClickAction: {
                    label: "右クリックの動作",
                    description: "Quest ボタンを右クリックしたときの動作です。"
                },
                questNotifications: {
                    label: "Quest 通知",
                    description: "Quest 完了時と新しい Quest 検出時の通知を設定します。"
                },
                notifyOnQuestComplete: {
                    label: "完了時に通知",
                    description: "Quest が完了したときに通知を表示します。"
                },
                notifyOnNewQuests: {
                    label: "新しい Quest を通知",
                    description: "新しい Quest が検出されたときに通知を表示します。"
                },
                notifyOnNewExcludedQuests: {
                    label: "新しい除外 Quest を通知",
                    description: "新しい除外 Quest が検出されたときに通知を表示します。"
                },
                questCompletedAlertSound: {
                    label: "Quest 完了サウンド",
                    description: "Quest が完了したときに再生するサウンドです。"
                },
                questCompletedAlertVolume: {
                    label: "Quest 完了サウンドの音量",
                    description: "Quest 完了サウンドの音量です。"
                },
                questFetchInterval: {
                    label: "取得間隔",
                    description: "Discord から Quest を取得する間隔 (秒) です。"
                },
                newQuestAlertSound: {
                    label: "新しい Quest のサウンド",
                    description: "新しい Quest が検出されたときに再生するサウンドです。"
                },
                newQuestAlertVolume: {
                    label: "新しい Quest のサウンド音量",
                    description: "新しい Quest のサウンドの音量です。"
                },
                newExcludedQuestAlertSound: {
                    label: "新しい除外 Quest のサウンド",
                    description: "新しい除外 Quest が検出されたときに再生するサウンドです。"
                },
                newExcludedQuestAlertVolume: {
                    label: "新しい除外 Quest のサウンド音量",
                    description: "新しい除外 Quest のサウンドの音量です。"
                },
                questTiles: {
                    label: "Quest タイル",
                    description: "Quest ページの Quest タイルの見た目をカスタマイズします。"
                },
                questTileUnclaimedColor: {
                    label: "未受け取りタイルの色",
                    description: "未受け取りの Quest タイルの色です。"
                },
                questTileClaimedColor: {
                    label: "受け取り済みタイルの色",
                    description: "受け取り済みの Quest タイルの色です。"
                },
                questTileIgnoredColor: {
                    label: "無視タイルの色",
                    description: "無視された Quest タイルの色です。"
                },
                questTileExpiredColor: {
                    label: "期限切れタイルの色",
                    description: "期限切れの Quest タイルの色です。"
                },
                questTileGradient: {
                    label: "タイルのグラデーション",
                    description: "Quest タイルで使用するグラデーションのスタイルです。"
                },
                questTilePreload: {
                    label: "タイルのプリロード",
                    description: "Quest タイルのアセットのプリロードを試みます。"
                },
                reorderQuests: {
                    label: "Quest の並べ替え",
                    description: "ステータスで Quest を並べ替えます。"
                },
                questOrder: {
                    label: "Quest の順序",
                    description: "Quest のステータスグループの並べ替え順です。"
                },
                unclaimedSubsort: {
                    label: "未受け取りのサブソート",
                    description: "未受け取り Quest のサブソート方法です。"
                },
                claimedSubsort: {
                    label: "受け取り済みのサブソート",
                    description: "受け取り済み Quest のサブソート方法です。"
                },
                ignoredSubsort: {
                    label: "無視のサブソート",
                    description: "無視された Quest のサブソート方法です。"
                },
                expiredSubsort: {
                    label: "期限切れのサブソート",
                    description: "期限切れ Quest のサブソート方法です。"
                },
                isOnQuestsPage: {
                    label: "Quest ページ表示中",
                    description: "ユーザーが現在 Quest ページにいるかどうかです。"
                },
                rememberQuestPageSort: {
                    label: "並べ替えを記憶",
                    description: "Quest ページで最後に使用した並べ替えを記憶します。"
                },
                rememberQuestPageFilters: {
                    label: "フィルターを記憶",
                    description: "Quest ページで最後に使用したフィルターを記憶します。"
                },
                lastQuestPageSort: {
                    label: "最後の並べ替え",
                    description: "Quest ページで最後に使用した並べ替えです。"
                },
                lastQuestPageFilters: {
                    label: "最後のフィルター",
                    description: "Quest ページで最後に使用したフィルターです。"
                },
                ignoredQuestIDs: {
                    label: "無視された Quest ID",
                    description: "無視された Quest ID のリストです。"
                },
                resumeQuestIDs: {
                    label: "再開する Quest ID",
                    description: "バックグラウンドで自動完了中またはキュー待ちの Quest ID のリストです。"
                },
                acknowledgedNotices: {
                    description: "ユーザーが確認済みの一度きりのお知らせです。",
                    label: "確認済みのお知らせ"
                },
                settingsSearch: {
                    description: "Questify の設定を検索します。",
                    label: "設定検索"
                },
                hideNonAutoCompletableQuests: {
                    description: "対応済みかつ有効な自動完了タスクがない未完了クエストを非表示にします。",
                    label: "自動完了できないクエストを非表示"
                },
                preventVideoQuestsPausing: {
                    description: "クエストのモーダルがフォーカスを失っても動画を一時停止しないようにします。",
                    label: "ビデオクエストの一時停止を防止"
                },
                hiddenQuestStatuses: {
                    description: "非表示にするクエストのステータスグループです。",
                    label: "非表示のクエストステータス"
                }
            },
            text: {
                clearQuestQueue: "クエストキューを消去",
                hideIncompleteQuestsWith: "このプラットフォームで対応し、クエストの種類で有効な自動完了タスクがない場合、未受取または無視状態の未完了クエストを非表示にします。受取済み、期限切れ、完了済みのクエストは対象外です。それらを隠すにはステータス順序の非表示オプションを使います。",
                discordForcesYouTo: "ビデオクエストの動画を再生するには、Discord はクライアントを前面に表示し続けることを強制します。",
                hideNonAutoCompletable: "自動完了できないクエストを非表示:",
                preventVideoQuestsFrom: "フォーカスを失ってもビデオクエストを一時停止しない:",
                thePunishmentAlsoConsists: "罰則には違反 1 件につき 2 年間続くアカウントステータス違反も含まれます。",
                dueToTheVarious: "Discord はさまざまな方法でユーザーを追跡しているため、検出を現実的に回避する方法はありません。続行する場合、いずれ Discord に使用を検出される可能性が高いことを理解してください。",
                enrollInQuest: "クエストに参加",
                hidden: "非表示",
                selectingAnOccupiedPosition: "使用中の位置を選ぶと 2 つのステータスが入れ替わります。非表示のステータスはクエスト一覧から除外されます。",
                searchQuestifySettings: "Questify の設定を検索",
                searchQuestifySettings2: "Questify の設定を検索...",
                noMatchingSettings: "一致する設定はありません。",
                questifyNoticeAugust7th: "Questify のお知らせ - 2026年8月7日",
                keepUsingDangerousQuestify: "危険な Questify 設定を使い続ける",
                disableDangerousQuestifySettings: "危険な Questify 設定を無効化",
                questifyNoticeAugust26th: "Questify のお知らせ - 2026年8月26日",
                areYouSure: "本当によろしいですか？",
                thePunishmentAppearsLimited: "罰則はクエストとその報酬へのアクセス喪失に限られるようですが、Discord はいつでも強化する可能性があります。",
                queueAllQuests: "すべてのクエストをキューに追加",
                inProgress: "進行中",
                rateLimited: "レート制限中",
                preventsVideoPausing: "この設定は動画の一時停止を防ぎ、通常どおり完了が進むようにします。",
                appliesOnlyToVideoQuests: "この設定はビデオクエストを手動で完了する場合にのみ適用されます。",
                knownToPunish: "Discordはクエストの完了を改変するスクリプトやプラグインの利用者を処罰することで知られています。クエストの完了を改変することはDiscordの次の規約に違反します:",
                punishmentConsists: "処罰内容は、クエストとその報酬へのアクセスの一時的または永久的な喪失です。",
                questBanSystem: "Discordはクエスト禁止システムを導入しました。非公式な方法でクエストを完了していると判断された場合、クエストの完了と報酬の受け取りが一時的または永久に制限されます。クエストの完了を改変することは次の規約に違反します:",
                begunPunishing: "Discordはクエストの完了を改変するスクリプトやプラグインの利用者の処罰を開始しました。クエストの完了を改変することは次の規約に違反します:",
                dueToRateLimits: "（レート制限のため）"
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
            },
            text: {
                quotePreview: "引用のプレビュー"
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
                    selectAll: "すべて選択",
                    reset: "リセット",
                    stateFilters: "状態フィルター",
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
                    joinSettings: "参加設定",
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
            keybind: {
                label: "キーバインド",
                recording: "記録中...",
                reset: "リセット"
            },
            option: {
                keybindEnabled: {
                    label: "キーバインド有効",
                    description: "ランダムボイスのキーバインド設定を表示します"
                },
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
                prioritizeFriends: {
                    label: "フレンドを優先",
                    description: "可能な限り、フレンドがいるチャンネルを優先します。"
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
            },
            toast: {
                failedToFindA: "ボイスチャンネルが見つかりませんでした。",
                voiceChannelIsUnavailable: "ボイスチャンネルは利用できません。"
            },
            text: {
                userCount: "{{count}} 人",
                usersCount: "{{count}} 人"
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
                    toast: "RDMS の履歴を消去しました",
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
            },
            text: {
                relationshipNotifier: "関係通知"
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
                fill: "埋める",
                image: "画像"
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
            },
            text: {
                google: "Google"
            }
        },
        replyPingControl: {
            name: "ReplyPingControl",
            description: "メッセージの返信時に常にメンションを受けるか全く受けないかを制御し、ホワイトリストとブラックリストの機能を備えています",
            option: {
                replyPingBlacklist: {
                    label: "返信メンションのブラックリスト",
                    description: "返信メンションを一切受け取らないユーザーIDのカンマ区切りリスト"
                },
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
            },
            text: {
                all: "すべて"
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
            },
            profile: {
                optedOut: "ユーザーがオプトアウトしました",
                noReviews: "まだレビューがありません"
            },
            toast: {
                youCannotVoteOn: "自分のレビューには投票できません。",
                networkErrorFailedTo: "ネットワークエラー: ReviewDB に接続できませんでした。",
                pleaseAuthorizeToVote: "レビューに投票するには認可してください。",
                requestFailed: "ReviewDB: リクエストがステータス{{status}}で失敗しました"
            },
            text: {
                ok: "OK",
                updateReviewFor: "@{{name}}のレビューを更新",
                reviewUser: "@{{name}}をレビュー",
                system: "システム",
                reviewCount: "（{{count}} 件のレビュー）"
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
                allCleared: "スケジュールされたメッセージはすべてクリアされました",
                scheduledMessageSentTo: "予約メッセージを {{name}} に送信しました"
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
                roles: "役割",
                boostLevel: "{{count}}（レベル {{level}}）"
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
                },
                ignoredLanguages: {
                    label: "除外する言語",
                    description: "Discordのデフォルトのコードブロックに任せる言語のカンマ区切りリスト"
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
                },
                noQuickReacts: {
                    description: "クイックリアクションを非表示にします。既定ではフルメニューを表示するとクイックリアクションボタンが隠れます。",
                    label: "クイックリアクションなし"
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
                },
                showGithubOrgs: {
                    description: "ユーザーが所属する GitHub 組織を表示",
                    label: "GitHub 組織を表示"
                },
                showOnModal: {
                    description: "フルサイズのプロフィールモーダルに連携アカウントを表示",
                    label: "モーダルに表示"
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
                    description: "メンバーリスト、DM リスト、フレンドリスト、アクティブ中に、カスタム名前形式の最初に使える名前を表示します。"
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
                alwaysShowEffects: {
                    label: "常にエフェクトをアニメーション",
                    description: "カーソルをあわせているときのように、常にエフェクトを表示します。"
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
                },
                searchAutocomplete: {
                    description: "メンションと検索の自動補完に、カスタム名前形式の最初に使える名前を表示します。",
                    label: "検索の自動補完"
                },
                styleDirectMessagesList: {
                    description: "ホバーなしで未選択の項目に表示名エフェクトを表示します。無効でも選択中・ホバー中の項目は装飾されます。",
                    label: "ダイレクトメッセージ一覧を装飾"
                },
                styleDirectMessagesMessages: {
                    description: "ホバーなしでメッセージ送信者に表示名エフェクトを表示します。無効でもホバー中の名前は装飾されます。",
                    label: "DM のメッセージを装飾"
                },
                styleFriendsList: {
                    description: "ホバーなしで表示名エフェクトを表示します。無効でもホバー中の項目は装飾されます。",
                    label: "フレンドリストを装飾"
                },
                styleActiveNow: {
                    description: "ホバーなしで表示名エフェクトを表示します。無効でもホバー中の項目は装飾されます。",
                    label: "アクティブ中を装飾"
                },
                ignoreEffects: {
                    description: "主要以外の名前には主要ロールの色のみを使い、表示名エフェクトを省略します。",
                    label: "エフェクトを無視"
                },
                animateEffects: {
                    description: "主要以外の名前でロールのグラデーションと表示名エフェクトをアニメーションします。「エフェクトを無視」と動きの軽減で無効になります。",
                    label: "エフェクトをアニメーション"
                },
                alwaysAnimateEffects: {
                    description: "表示名エフェクトが既に見える場合、ホバーなしでも強制的にアニメーションします。",
                    label: "常にエフェクトをアニメーション"
                },
                gradientGlow: {
                    description: "サーバーロールのグラデーションと同様に、アニメーションするユーザーグラデーションに光彩を追加します。",
                    label: "グラデーションの光彩"
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
            },
            text: {
                save: "保存",
                unknown: "不明"
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
            },
            text: {
                timeoutRemaining: "タイムアウト残り"
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
            channelTitle: {
                chat: "チャット",
                dm: "DM"
            },
            modal: {
                switch: "チャンネルを切り替える",
                popout: "ポップアウトチャット",
                popoutClose: "ポップアウトチャットを閉じる",
                popoutFor: "「{{channel}}」をポップアウトチャットで開く",
                close: "サイドバーチャットを閉じる"
            },
            option: {
                persistSidebar: {
                    label: "サイドバーチャットを維持する",
                    description: "Discordを再起動してもサイドバーチャットを開いたままにします"
                },
                persistPopoutWindows: {
                    label: "ポップアウトを保持する",
                    description: "Discord の再起動後に開いていたポップアウトチャットを復元します"
                },
                popoutAlwaysOnTop: {
                    label: "常に最前面",
                    description: "ポップアウトチャットのウィンドウを常に他のウィンドウより前面に表示します。"
                },
                patchCommunity: {
                    label: "パッチコミュニティ",
                    description: "コミュニティ サーバーが備えているチャネル ブラウザやメンバー タブなどの機能にパッチを適用します。"
                },
                persistedPopoutWindowIds: {
                    description: "保持するポップアウトチャットのチャンネル ID。"
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
                global: "入力の表示 (グローバル)",
                voiceChannel: "接続中のボイスチャンネルのチャットでは入力中表示が常に表示されます",
                temporary: "最近のメッセージにより、このチャンネルでは入力中表示が一時的に表示されます"
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
                alwaysEnableInActiveVoiceChat: {
                    label: "アクティブなボイスチャットでは常に有効化",
                    description: "接続中のボイスチャンネルで入力する際、入力中インジケーターを常に表示できるようにします。"
                },
                temporaryEnableThresholdServers: {
                    label: "一時的な有効化時間（サーバー）",
                    description: "サーバーチャンネルでメッセージを送信した後、この秒数の間入力中インジケーターを一時的に表示できるようにします。すでに表示されている場合、この設定は効果がありません。"
                },
                temporaryEnableThresholdDirectMessages: {
                    label: "一時的な有効化時間（ダイレクトメッセージ）",
                    description: "DMまたはグループDMでメッセージを送信した後、この秒数の間入力中インジケーターを一時的に表示できるようにします。すでに表示されている場合、この設定は効果がありません。"
                },
                enabledLocations: {
                    label: "有効な場所",
                    description: "これらの ID の機能を有効にします。 DM ID、チャネル ID、ギルド ID のカンマ区切りリストを受け入れます。 「デフォルトの非表示」が無効になっている場合にのみ使用されます。"
                },
                disabledLocations: {
                    label: "無効な場所",
                    description: "これらの ID の機能を無効にします。 DM ID、チャネル ID、ギルド ID のカンマ区切りリストを受け入れます。 「デフォルトの非表示」が有効な場合にのみ使用されます。"
                }
            },
            text: {
                silentTyping: "サイレント入力",
                enabled: "有効",
                chatBarIndicators: "チャットバーのインジケーター",
                membersListIndicators: "メンバーリストのインジケーター",
                guild: "サーバー",
                channel: "チャンネル",
                global: "グローバル"
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
            description: "長すぎるメッセージを送信前に Discord のサイズに合わせて分割します。",
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
                    description: "各パーツ間の最小遅延（秒）。"
                },
                hardSplit: {
                    label: "ハードスプリット",
                    description: "true の場合、最後のスペース/改行ではなく最後の文字で分割されます。"
                },
                splitInSlowmode: {
                    label: "スローモードでの分割",
                    description: "低速モードの遅延が設定した上限内なら分割を許可します。"
                },
                slowmodeMax: {
                    label: "スローモードマックス",
                    description: "メッセージ分割時に許容される低速モードの最大時間です。"
                },
                splitMode: {
                    description: "メッセージを分割するときにこの区切りを優先します。",
                    label: "分割モード"
                }
            },
            toast: {
                cannotSplitThisMessage: "チャンネルの低速モードのため、このメッセージを分割できません。",
                onlySentLengthMessage: "{{sent}}/{{length}} 件のメッセージ部分しか送信されませんでした。",
                unsentCopied: "未送信のメッセージ部分をクリップボードにコピーしました。"
            },
            text: {
                newlines: "改行",
                spaces: "スペース",
                strictCharacterLimit: "厳密な文字数制限"
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
                set: "カスタムステータスの設定",
                delete: "プリセットを削除"
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
            },
            text: {
                failedToRender: "表示に失敗しました :("
            }
        },
        stickerPaste: {
            name: "StickerPaste",
            description: "ステッカーピッカーでステッカーを選択すると、すぐに送信するのではなく、チャットボックスに挿入されます。"
        },
        streaks: {
            name: "Streaks",
            description: "連続した日にDMをやり取りしたユーザーの横に連続記録を表示します。",
            tooltip: "{{count}}日連続",
            tooltipExpiring: "{{count}}日連続 — 今日もメッセージして記録を続けよう！",
            option: {
                account: {
                    description: "Streaks API にログインまたはログアウトします。連続記録は API に保存されるため、記録するにはログインが必要です。",
                    login: "Streaks API にログイン",
                    logout: "Streaks API からログアウト"
                },
                eliteColor: "エリートの色（100日以上）",
                diamondColor: "ダイヤモンドの色（60日以上）",
                platinumColor: "プラチナの色（45日以上）",
                goldColor: "ゴールドの色（30日以上）",
                silverColor: "シルバーの色（14日以上）",
                bronzeColor: "ブロンズの色（7日以上）",
                defaultColor: "デフォルトの色（1日以上）"
            },
            toast: {
                authFailed: "認証に失敗しました: {{error}}",
                failedToAuthorizeMessage: "認可に失敗しました: {{message}}",
                authorizationExpired: "Streaksの認証の有効期限が切れました。Streaksプラグインの設定で再認証してください。"
            }
        },
        streamerModeOnStream: {
            name: "StreamerModeOnStream",
            description: "Discordでストリーミングを開始するとストリーマーモードが自動的に有効になります"
        },
        streamingCodecDisabler: {
            name: "StreamingCodecDisabler",
            description: "配信とカメラで使う動画コーデックを選んで無効化します。",
            option: {
                disableAv1Codec: {
                    label: "AV1 コーデックを無効にする",
                    description: "配信とカメラで AV1 を使わないようにします。"
                },
                disableH265Codec: {
                    label: "H265 コーデックを無効にする",
                    description: "配信とカメラで H265 を使わないようにします。"
                },
                disableH264Codec: {
                    label: "H264 コーデックを無効にする",
                    description: "配信とカメラで H264 を使わないようにします。"
                },
                disableVP8Codec: {
                    label: "VP8 コーデックを無効にする",
                    description: "配信とカメラで VP8 を使わないようにします。"
                },
                disableVP9Codec: {
                    label: "VP9 コーデックを無効にする",
                    description: "配信とカメラで VP9 を使わないようにします。"
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
                    string: "シンプル置換",
                    stringDescription: "シンプルな検索と置換のルールです。例えば 'brb' を見つけて 'be right back' に置き換えます",
                    regex: "Regex 置換",
                    regexDescription: "正規表現を使用したより高度な置換です。このセクションは上級ユーザー向けです。理解できない場合は無視してください",
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
                name: "名前",
                nameDescription: "このルールを識別しやすくするための任意の名前です。",
                search: "ルールを検索...",
                noResults: "検索条件に一致するルールはありません。",
                title: "テストルール",
                find: "探す",
                findRegex: "Regex パターン",
                findText: "置き換えるテキスト",
                replace: "置き換え",
                replaceDescription: "見つかったテキストを置き換えるテキスト",
                includes: "含まれている場合のみ",
                includesDescription: "このルールはメッセージにこのテキストが含まれている場合のみ適用されます。これは任意です",
                type: "メッセージを入力",
                applied: "ルールが適用されたメッセージ",
                delete: "ルールを削除",
                add: "ルールを追加",
                empty: "空のルール",
                rule: "ルール",
            },
            text: {
                optionallyOnlyApplyThis: "任意で、メッセージにこのテキストが含まれる場合のみこのルールを適用します。",
                emptyRule: "空のルール {{number}}",
                ruleWithFind: "ルール {{number}} - {{find}}"
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
                    description: "24 時間表示で時刻を表示"
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
                },
                recipientTimezoneInDms: {
                    label: "DM での相手のタイムゾーン",
                    description: "DM では自分のメッセージに相手のタイムゾーンを表示します"
                },
                showLocalTimezone: {
                    label: "ローカルのタイムゾーンを表示",
                    description: "「ローカル」だけでなくローカルのタイムゾーンを表示"
                }
            },
            modal: {
                title: "タイムゾーン",
                select: "タイムゾーンの選択",
                selectPlaceholder: "タイムゾーンを選択してください",
                delete: "タイムゾーンの削除",
                save: "保存"
            },
            text: {
                invalidResponseFormat: "無効な応答形式"
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
                respectDoNotDisturb: {
                    label: "取り込み中を尊重",
                    description: "ステータスが取り込み中のときは通知を表示しません。"
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
                    deepl: "DeepL 無料版 - APIキーが必要です",
                    deeplPro: "DeepL Pro - APIキーが必要です",
                    kagi: "Kagi 翻訳 - APIキーが必要です"
                },
                kagiSession: {
                    label: "Kagi セッション",
                    description: "https://kagi.com/settings?p=user_details からセッショントークンを取得してください"
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
            },
            button: {
                manageLanguages: "翻訳言語と自動翻訳をカスタマイズ"
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
            description: "Discord 内にランダムな無駄知識を表示します。ショートカットと間隔は調整できます。",
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
            },
            text: {
                viewAvatarDecoration: "アバターデコレーションを表示"
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
                },
                messageContextMenu: {
                    description: "メッセージのコンテキストメニューに表示",
                    label: "メッセージのコンテキストメニュー"
                },
                sortKeys: {
                    description: "生データのキーをアルファベット順に並べ替えます。",
                    label: "キーを並べ替え"
                },
                stripSensitiveData: {
                    description: "メールアドレスや電話番号などの機密データを生データから削除します。",
                    label: "機密データを削除"
                }
            },
            modal: {
                title: "生で見る",
                content: "メッセージ内容",
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
            },
            text: {
                copyTypeData: "{{type}} データをコピー",
                rawTypeData: "{{type}} の生データ",
                messageData: "メッセージデータ"
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
            description: "ボイスチャンネルへの参加と退出を記録します",
            context: {
                view: "チャンネルログを表示"
            },
            modal: {
                joined: "<#{{channel}}> に参加しました",
                left: "左<#{{channel}}>",
                movedTo: "<#{{channel}}> に移動しました",
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
            },
            text: {
                convertioWebConverter: "convertio のウェブ変換ツール"
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
            description: "Web 版 Discord にないショートカットを追加し直します。完全に動作するのは Plextron/Legcord のみで、ブラウザー内では動作しません",
            option: {
                showNavigationButtons: {
                    description: "タイトルバーに戻る/進むボタンを表示します。",
                    label: "ナビゲーションボタンを表示"
                },
                overrideCommonKeybinds: {
                    description: "Discord がよく使うタブ操作のショートカット（ctrl+t、ctrl+shift+t、ctrl+tab、ctrl+shift+tab、ctrl+n）を上書きできるようにします。Web サイトのショートカットを優先できる一部のブラウザーでのみ動作します。",
                    label: "一般的なショートカットを上書き"
                }
            }
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
                },
                clickableAvatars: {
                    description: "有効にすると、リアクションしたユーザーのアバターをクリックしたときにリアクションを追加せずプロフィールを開きます",
                    label: "クリック可能なアバター"
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
        },
        addAttachments: {
            name: "AddAttachments",
            description: "メッセージ編集中に新しい添付ファイルを追加できるようにします",
            toast: {
                youCannotAddMore: "このメッセージにはこれ以上添付ファイルを追加できません。",
                youCanOnlyAdd: "このメッセージに追加できる添付ファイルはあと{{count}}件です。",
                uploadingThisCanTake: "アップロード中です。しばらくかかる場合があります...",
                addedOne: "添付ファイルを追加しました！",
                addedMany: "添付ファイルを追加しました！"
            },
            text: {
                addAttachments: "添付ファイルを追加"
            }
        },
        advancedPermissions: {
            option: {
                simplifiedCard: {
                    description: "Discord の簡易権限カードをどうするか",
                    label: "簡易カード",
                    hide: "非表示にする",
                    collapse: "折りたたみ可能にする",
                    show: "表示したままにする"
                },
                collapsedByDefault: {
                    description: "簡易権限を折りたたんだ状態で開始します。",
                    label: "デフォルトで折りたたむ"
                }
            },
            name: "AdvancedPermissions",
            description: "デフォルトで詳細権限カードを表示します。",
            text: {
                simplifiedPermissions: "簡易権限"
            }
        },
        autoJumpToMessage: {
            option: {
                onlyWhenUnfocused: {
                    description: "Discord のウィンドウにフォーカスがないときだけ自動的にメッセージへ移動します。",
                    label: "フォーカスがないときのみ"
                }
            },
            name: "AutoJumpToMessage",
            description: "新しいメッセージのチャンネルを自動的に開きます。"
        },
        betterForwards: {
            text: {
                serverIconForName: "{{name}} のサーバーアイコン",
                messageAttachments: "メッセージの添付ファイル",
                messageTextWillNot: "このオプションが無効の場合、メッセージ本文は転送されません",
                forwardEverything: "すべて転送",
                viewServer: "サーバーを表示",
                embed: "埋め込み",
                embedNumber: "埋め込み {{number}}",
                image: "画像",
                video: "動画",
                serverIcon: "{{name}} のサーバーアイコン",
                dmIcon: "{{name}} の DM アイコン",
                groupDmIcon: "{{name}} のグループ DM アイコン"
            },
            option: {
                resendOnFail: {
                    description: "転送に失敗した場合、転送メッセージの再送信を試みます。意図しないメンションやテキストスパムが発生する可能性があります。NSFW 制限を回避します。",
                    label: "失敗時に再送信"
                },
                forwardPreface: {
                    description: "転送メッセージの先頭に付けるもの",
                    label: "転送の前置き"
                },
                dontFollowForwards: {
                    description: "1 件のメッセージを転送した後、そのメッセージに移動しません。Shift を押したままにするとこの動作を無視します。",
                    label: "転送先に移動しない"
                },
                selfForward: {
                    description: "転送リストのポップアップに現在のチャンネルを表示します。",
                    label: "自分に転送"
                }
            },
            name: "BetterForwards",
            description: "NSFW の回避や UI の改善を含む、メッセージ転送のユーティリティです。"
        },
        betterImageEditor: {
            text: {
                search: "検索",
                searchSavedPictures: "保存した画像を検索",
                clearTheSearch: "検索をクリア",
                savedPictures: "保存した画像",
                removeName: "{{name}} を削除",
                removeHoldShiftTo: "削除。Shift を押したままにすると確認をスキップします",
                originals: "オリジナル",
                putBackTheLast: "最後のものを戻す",
                forgetEveryRememberedCrop: "記憶したすべての切り抜きを忘れますか？",
                yourPicturesStayEach: "画像はそのまま残ります。今後は、再度切り抜くまで各画像がフレーミングなしで開きます。",
                forget: "忘れる",
                cancel: "キャンセル",
                clearSavedPictures: "保存した画像を消去しますか？",
                everyPictureYouHave: "ここに保存したすべての画像が、それぞれ記憶された切り抜きとともに削除されます。Discord 自体のアーカイブと現在のアバター・バナーには影響しません。",
                clear: "消去",
                removeThisPicture: "この画像を削除しますか？",
                remove: "削除",
                keepTheCroppedCopy: "切り抜いたコピーを保存しますか？",
                itGoesOnThe: "オリジナルの隣の {{toLowerCase}} の棚に置かれます。",
                keep: "保存",
                noThanks: "いいえ、結構です",
                exportToAFile: "ファイルにエクスポート",
                importFromAFile: "ファイルからインポート",
                forgetRememberedFraming: "記憶したフレーミングを忘れる",
                clearSavedPictures2: "保存した画像を消去",
                croppedKind: "切り抜いた{{kind}}",
                unpinName: "{{name}}のピン留めを解除",
                pinName: "{{name}}をピン留め",
                pinnedNeverDrops: "ピン留め済み、棚から消えることはありません",
                pinNeverDrops: "ピン留めして棚から消えないようにする",
                nothingMatches: "一致するものがありません",
                originalsEmpty: "選択・貼り付け・ドロップした画像がここに表示されます",
                croppedEmpty: "切り抜いた画像がここに表示されます",
                forgotFraming: "{{count}}枚の画像のフレーミングを削除しました",
                nothingFramed: "フレーミングされた画像はありませんでした",
                pictureLibrary: "画像ライブラリ",
                addedPictures: "{{count}}枚の画像を追加しました",
                nothingNew: "そのファイルに新しいものはありません",
                shownOfTotal: "{{shown}} / {{total}}",
                keptCount: "{{count}} 件保存済み",
                youAreWearingThis: "現在使用中",
                removePictureBody: "{{name}} は保存済みの画像から、記憶されたトリミングと共に削除されます。"
            },
            option: {
                librarySize: {
                    description: "各棚に保存する画像の数です。",
                    label: "ライブラリのサイズ"
                },
                rememberCrop: {
                    description: "画像に最後に使用したズームと位置を復元します。",
                    label: "切り抜きを記憶"
                },
                forgetFraming: {
                    description: "記憶したすべての切り抜きを破棄し、各画像を Discord と同じように開きます。",
                    label: "フレーミングを忘れる"
                },
                saveCropped: {
                    description: "切り抜いた後、各画像のコピーを保存します。",
                    label: "切り抜いた画像を保存"
                },
                askBeforeSavingCropped: {
                    description: "切り抜いたコピーを自動で保存せず、先に確認します。",
                    label: "切り抜き画像の保存前に確認"
                },
                transfer: {
                    description: "画像と、それぞれのフレーミングを別のデバイスへ移します。",
                    label: "転送"
                },
                clearLibrary: {
                    description: "保存したすべての画像を破棄します。",
                    label: "ライブラリを消去"
                }
            },
            name: "BetterImageEditor",
            description: "アバターとバナーのエディターに画像の棚を用意し、それぞれの切り抜き方を記憶します。",
            toast: {
                couldNotExportYour: "画像をエクスポートできませんでした",
                couldNotReadThat: "そのファイルを読み込めませんでした",
                thatPictureIsMissing: "その画像が見つかりません",
                thatPictureIsToo: "その画像は Discord には大きすぎます",
                couldNotUseThat: "その画像を使用できませんでした",
                couldNotKeepThe: "切り抜いたコピーを保存できませんでした"
            },
            kind: {
                avatars: "アバター",
                banners: "バナー",
                serverIcons: "サーバーアイコン",
                serverBanners: "サーバーバナー",
                eventCovers: "イベントカバー",
                homeHeaders: "ホームヘッダー",
                decorations: "デコレーション",
                widgetCovers: "ウィジェットカバー",
                widgetImages: "ウィジェット画像"
            }
        },
        cancelFriendRequest: {
            name: "CancelFriendRequest",
            description: "プロフィールから送信済みのフレンドリクエストをキャンセルできるようにします。",
            text: {
                cancelOutgoingFriendRequest: "送信済みのフレンドリクエストをキャンセル"
            }
        },
        clipUpload: {
            text: {
                createdAtMustBe: "作成日時は有効な日付である必要があります。",
                cancel: "キャンセル",
                uploadClipFile: "クリップファイルをアップロード",
                fileName: "ファイル名",
                title: "タイトル",
                epicMoment: "最高の瞬間",
                message: "メッセージ",
                checkOutThisClip: "このクリップを見て！",
                spoiler: "ネタバレ",
                remix: "リミックス",
                thumbnail: "サムネイル",
                file: "ファイル",
                selectFile: "ファイルを選択",
                parseClipMetadataFrom: "ファイルからクリップのメタデータを読み取る",
                selectFriends: "フレンドを選択",
                selectAGame: "ゲームを選択",
                customApplicationId: "カスタムアプリケーション ID",
                createdAt: "作成日時",
                participants: "参加者",
                onlyTagPeopleWho: "その場にいて、このクリップへの登場に同意した人だけをタグ付けしてください。",
                gameApplication: "ゲーム/アプリケーション",
                uploadClipFile2: "クリップファイルをアップロード",
                uploading: "アップロード中",
                upload: "アップロード",
                noFileSelected: "ファイルが選択されていません",
                couldNotPrepare: "選択したファイルを準備できませんでした。",
                couldNotRead: "選択したファイルを読み込めませんでした。",
                couldNotUpdateMetadata: "クリップのメタデータを更新できませんでした。",
                notCompatible: "このファイルは互換性がありません。H.264映像とAAC音声のMP4クリップを使用してください。",
                uploadFailed: "アップロードに失敗しました。",
                noUploadSlot: "Discordがアップロード枠を返しませんでした。",
                uploadCanceled: "アップロードをキャンセルしました。",
                failedToUpload: "クリップをアップロードできませんでした。",
                selectClipFile: "クリップファイルを選択",
                mp4Video: "MP4動画"
            },
            name: "ClipUpload",
            description: "ローカルの動画ファイルを Discord クリップとしてアップロードするボタンを追加します。",
            toast: {
                checkingClipFile: "クリップファイルを確認しています。",
                convertingClipFile: "クリップファイルを変換しています。",
                clipUploaded: "クリップをアップロードしました。"
            }
        },
        collapsibleUI: {
            name: "CollapsibleUI",
            description: "チャンネル、メンバー、チャットボタン、ユーザーエリアをネイティブに折りたためるようにします。",
            text: {
                collapsibleUi: "折りたたみ可能な UI",
                guildBar: "サーバーバー",
                channelList: "チャンネルリスト",
                membersList: "メンバーリスト",
                messageButtons: "メッセージボタン",
                titleBar: "タイトルバー",
                headerBar: "ヘッダーバー",
                userArea: "ユーザーエリア"
            },
            option: {
                detachUserArea: {
                    description: "ユーザーエリアを切り離し、折りたたまれていないときに自由に移動できるようにします。",
                    label: "ユーザーエリアを切り離す"
                },
                detachedUserAreaX: {
                    description: "切り離したユーザーエリアの x 座標を保存します。",
                    label: "切り離したユーザーエリア X"
                },
                detachedUserAreaY: {
                    description: "切り離したユーザーエリアの y 座標を保存します。",
                    label: "切り離したユーザーエリア Y"
                },
                guildBarCollapsed: {
                    description: "サーバーバーを折りたたんだ状態で保存します。",
                    label: "サーバーバーを折りたたみ"
                },
                channelListCollapsed: {
                    description: "チャンネルリストを折りたたんだ状態で保存します。",
                    label: "チャンネルリストを折りたたみ"
                },
                membersListCollapsed: {
                    description: "メンバーリストを折りたたんだ状態で保存します。",
                    label: "メンバーリストを折りたたみ"
                },
                chatButtonsCollapsed: {
                    description: "メッセージボタンの列を折りたたんだ状態で保存します。",
                    label: "チャットボタンを折りたたみ"
                },
                titleBarCollapsed: {
                    description: "タイトルバーを折りたたんだ状態で保存します。",
                    label: "タイトルバーを折りたたみ"
                },
                headerBarCollapsed: {
                    description: "ヘッダーバーを折りたたんだ状態で保存します。",
                    label: "ヘッダーバーを折りたたみ"
                },
                userAreaCollapsed: {
                    description: "ユーザーエリアを折りたたんだ状態で保存します。",
                    label: "ユーザーエリアを折りたたみ"
                }
            }
        },
        customCommands: {
            text: {
                cancel: "キャンセル",
                name: "Name",
                response: "応答",
                detectedArguments: "検出された引数",
                exampleCommandResponse: "コマンド応答の例:",
                exampleUsage: "使用例:",
                exampleOutput: "出力例:",
                viewArgumentsGuide: "引数ガイドを表示",
                editTag: "タグを編集",
                deleteTag: "タグを削除",
                registeredTags: "登録済みのタグ",
                createTag: "タグを作成",
                aTagWithThe: "**{{name}}** という名前のタグは存在しません！",
                successfullyDeletedTheTag: "タグ **{{name}}** を削除しました！",
                ephemeralReserved: "引数名 \"ephemeral\" は予約されているため使用できません。",
                createNewTag: "新しいタグを作成",
                editTagSubtitle: "カスタムコマンドを編集します。",
                createTagSubtitle: "スラッシュコマンドとして登録される新しいタグを作成します。",
                save: "保存",
                create: "作成",
                variablesHelp: "応答には二重の波括弧で囲んだ変数を含めることができ、コマンドの引数になります。例:",
                defaultValuesHelp: "等号を使って既定値付きの引数を指定できます。例:",
                noTagsYet: "おっと！まだタグがありません。`/tags create`で作成しましょう！",
                nameAlreadyExists: "\"{{name}}\" という名前のタグは既に存在するため、上書きされます。",
                defaultValue: "（デフォルト: {{value}}）"
            },
            name: "CustomCommands",
            description: "カスタムスラッシュコマンド / タグを作成できます",
            option: {
                tagsList: {
                    label: "タグ一覧"
                }
            },
            command: {
                ephemeral: "応答を自分だけに表示するかどうか",
                tags: "すべてのカスタムコマンドを管理",
                create: "新しいタグを作成する",
                list: "すべてのタグを一覧表示",
                delete: "名前でタグを削除",
                tagName: "タグの名前"
            }
        },
        fileUpload: {
            name: "FileUpload",
            description: "Zipline、Nest、S3、WebDAV などのホスティングサービスにファイルをアップロードします",
            toast: {
                fileTypeNotAllowed: "現在のフィルターではこのファイル形式は許可されていません",
                pleaseConfigureFileuploadSettings: "先に FileUpload の設定を行ってください",
                sharexConfigIsValid: "ShareX の設定は有効です",
                importedSharexConfig: "ShareX の設定をインポートしました",
                uploadSuccessfulButNo: "アップロードに成功しましたが、コピーできる URL がありませんでした",
                uploadSuccessfulUrlCopied: "アップロードに成功し、URL をクリップボードにコピーしました",
                uploadSuccessfulButFailed: "アップロードに成功しましたが、URL をコピーできませんでした",
                uploadSuccessful: "アップロードに成功しました",
                uploadSucceededWithServicelabels: "代替を経て {{serviceLabels_service}} でアップロードに成功しました",
                apngToGifConversion: "APNG から GIF への変換に失敗したため、APNG としてアップロードします",
                uploadAlreadyInProgress: "すでにアップロード中です",
                uploadCancelled: "アップロードをキャンセルしました",
                uploadFailedMessage: "アップロードに失敗しました: {{message}}",
                invalidSharexConfig: "無効なShareX設定です",
                failedToImportSharexConfig: "ShareX設定をインポートできませんでした"
            },
            text: {
                uploadToServicename: "{{serviceName}} にアップロード",
                uploadToHost: "ホストにアップロード",
                chooseFile: "ファイルを選択...",
                zipline: "Zipline",
                eZHost: "E-Z Host",
                nest: "Nest",
                encryptingHost: "Encrypting.host",
                s3Compatible: "S3 互換",
                catboxMoe: "Catbox.moe",
                litterbox: "Litterbox",
                sharexCustomUploader: "ShareX カスタムアップローダー",
                webdavNextcloudOwncloud: "WebDAV (Nextcloud/Owncloud)",
                n1Hour: "1 時間",
                n12Hours: "12 時間",
                n24Hours: "24 時間",
                n72Hours: "72 時間",
                corsProxy: "CORS プロキシ",
                query: "クエリ",
                param: "パラメーター",
                fakeLink: "偽リンク",
                embed: "埋め込み",
                n30Seconds: "30 秒",
                n1Minute: "1 分",
                n2Minutes: "2 分",
                n5Minutes: "5 分",
                n10Minutes: "10 分",
                dragHostsToReorder: "ホストをドラッグして代替の試行順序を並べ替えます。選択したホストを最初に試し、その後この順序を使用します。",
                chooseWhereFileuploadSends: "FileUpload が新しいファイルを送信する先を選択します。",
                connectionDetailsForYour: "Zipline インスタンスの接続情報です。",
                theUrlOfYour: "Zipline インスタンスの URL",
                yourZiplineApiAuthorization: "Zipline API 認可トークン",
                yourZiplineApiToken: "Zipline API トークン",
                folderIdForUploads: "アップロード先のフォルダー ID（フォルダーなしは空欄）",
                leaveEmptyForNo: "フォルダーなしの場合は空欄",
                connectionDetailsForE: "E-Z Host へのアップロードの接続情報です。",
                yourEZHost: "E-Z Host API キー",
                connectionDetailsForNest: "Nest へのアップロードの接続情報です。",
                yourNestApiAuthorization: "Nest API 認可トークン",
                yourNestApiToken: "Nest API トークン",
                connectionDetailsForEncrypting: "Encrypting.host へのアップロードの接続情報です。",
                yourEncryptingHostApi: "Encrypting.host API キー",
                howEncryptingHostShould: "Encrypting.host が返すリンクの形式です。",
                selectUrlStyle: "URL スタイルを選択",
                optionalTitleForEmbed: "埋め込みスタイルの応答に使うタイトル（任意）。",
                optionalTitle: "タイトル（任意）",
                optionalColorForEmbed: "埋め込みスタイルの応答に使う色（任意）。",
                optionalColor: "色（任意）",
                optionalFakeLinkValue: "fakelink スタイルの応答に使う偽リンクの値（任意）。",
                optionalFakeLink: "偽リンク（任意）",
                connectionDetailsAndObject: "バケットの接続情報とオブジェクトの命名です。",
                s3CompatibleEndpointE: "S3 互換エンドポイント（例: https://<accountid>.r2.cloudflarestorage.com）",
                bucketToUploadInto: "アップロード先のバケット",
                awsRegionOrAuto: "AWS リージョン、または Cloudflare R2 の場合は auto",
                s3CompatibleAccessKey: "S3 互換アクセスキー",
                yourAccessKeyId: "アクセスキー ID",
                s3CompatibleSecretKey: "S3 互換シークレットキー",
                yourSecretAccessKey: "シークレットアクセスキー",
                optionalTemporaryCredentialToken: "一時的な認証情報トークン（任意）",
                optionalSessionToken: "セッショントークン（任意）",
                optionalPublicUrlBase: "返されるリンクに使う公開ベース URL（任意）",
                optionalFolderPrefixInside: "バケット内のフォルダー/プレフィックス（任意）",
                useEndpointBucketKey: "endpoint/bucket/key 形式を使用します（R2 に推奨）。",
                optionalAccountBindingFor: "Catbox へのアップロード用のアカウント連携（任意）。",
                yourCatboxUserhashFor: "アカウント連携用の Catbox userhash。匿名でアップロードする場合は空欄にします。",
                yourCatboxUserhash: "Catbox userhash",
                howLongUploadsAre: "アップロードの保存期間",
                selectExpiry: "有効期限を選択",
                optionalAccountBindingFor2: "GoFile へのアップロード用のアカウント連携（任意）。",
                optionalGofileTokenTo: "アカウントにアップロードするための GoFile トークン（任意）。",
                optionalGofileToken: "GoFile トークン（任意）",
                connectionDetailsForPixelvault: "PixelVault へのアップロードの接続情報です。",
                yourPixelvaultAuthorizationKey: "PixelVault 認可キーです。",
                yourPixelvaultUploadKey: "PixelVault アップロードキー",
                optionalAccountBindingFor3: "PixelDrain へのアップロード用のアカウント連携（任意）。",
                optionalPixeldrainApiKey: "認証付きアップロード用の PixelDrain API キー（任意）。匿名でアップロードする場合は空欄にします。",
                yourPixeldrainApiKey: "PixelDrain API キー",
                pasteImportOrValidate: "ShareX カスタムアップローダーの設定を貼り付け、インポート、または検証します。",
                pasteYourSharexCustom: "ShareX カスタムアップローダーの JSON (.sxcu/.json) を貼り付けてください。DestinationType には FileUploader または ImageUploader を含める必要があります。",
                importFromFileOr: "ファイルからインポート、または貼り付けた設定を検証",
                connectionDetailsForWebdav: "WebDAV サーバー（Nextcloud、Owncloud など）の接続情報です。",
                baseWebdavUrlE: "WebDAV のベース URL（例: https://nextcloud.example.com/remote.php/dav/files/username）",
                optionalSubdirectoryOnThe: "アップロード先のサーバー上のサブディレクトリ（任意、例: uploads）",
                leaveEmptyForRoot: "ルートディレクトリの場合は空欄",
                selectYourWebdavServer: "WebDAV サーバーの種類を選択します。Nextcloud と ownCloud は公開共有リンクを作成します。汎用は生のファイル URL を返します。",
                selectServerType: "サーバーの種類を選択",
                howToReturnThe: "公開共有リンクの返し方です。共有ページは Web ページへ、直接ダウンロードはファイルへ直接リンクし、Markdown リンクは共有ページをクリック可能なファイル名で包みます。",
                selectShareLinkFormat: "共有リンクの形式を選択",
                controlWhatFileuploadDoes: "ホストが URL を返した後の FileUpload の動作を設定します。",
                stripQueryParametersFrom: "アップロードしたファイルの URL からクエリパラメーターを削除します。",
                wrapUploadedVideoLinks: "Discord のプレビューを改善するため、アップロードした動画リンクを埋め込みプロキシで包みます。",
                chooseWhichEmbedProxy: "アップロードした動画リンクに使う埋め込みプロキシサービスを選択します",
                selectAnEmbedProxy: "埋め込みプロキシサービスを選択",
                convertApngFilesTo: "APNG ファイルを GIF 形式に変換します。",
                useTheOriginalFilename: "アップロードを upload.ext と名付ける代わりに元のファイル名を使用します。",
                automaticallyCopyTheUploaded: "アップロードしたファイルの URL をクリップボードに自動コピーします。",
                onlyUseTheSelected: "代替ホストを試さず、選択したアップローダーのみを使用します。",
                afterUploadInsertThe: "アップロード後、得られた URL を現在のチャット入力欄に挿入します。",
                wrapInsertedUrlsIn: "Discord のプレビュー埋め込みを避けるため、挿入した URL を山括弧で囲みます。",
                chooseWhenFileuploadTakes: "FileUpload が Discord のファイル処理を引き継ぐタイミングを選択します。",
                useFileuploadWhenUploading: "Discord のファイル選択からアップロードするときに FileUpload を使用します。",
                useFileuploadOnlyFor: "現在の Discord アップロード上限より大きいファイルにのみ FileUpload を使用します。",
                manualDiscordFileSize: "自動検出が誤っている場合に使う、Discord のファイルサイズ上限（MB）の手動設定です。自動にするには空欄にします。",
                auto: "自動",
                commaSeparatedListOf: "カンマ区切りの拡張子リスト（例: png,jpg,gif）。空欄ですべて許可します。",
                configureBrowserUploadProxying: "ブラウザーからのアップロードのプロキシとタイムアウトを設定します。",
                corsProxyUsedFor: "Web アップロードに使う CORS プロキシです。既定のプロキシを使う場合は空欄にします。",
                sourceCodeForThe: "既定の CORS プロキシのソースコード",
                maximumTimeToWait: "代替に切り替えるまでのアップロード 1 回あたりの最大待機時間",
                selectTimeout: "タイムアウトを選択",
                drag: "ドラッグ",
                importSxcuJson: ".sxcu/.json をインポート",
                validate: "検証",
                resetToDefault: "既定値に戻す",
                progress: "{{percent}}% - {{transferred}} / {{total}}",
                cancel: "キャンセル"
            },
            option: {
                serviceType: {
                    description: "選択したアップロードサービス",
                    label: "サービスの種類"
                },
                serviceUrl: {
                    description: "Zipline サービスの URL",
                    label: "サービス URL"
                },
                ziplineToken: {
                    description: "Zipline 認証トークン",
                    label: "Zipline トークン"
                },
                folderId: {
                    description: "Zipline フォルダー ID（任意）",
                    label: "フォルダー ID"
                },
                ezHostKey: {
                    description: "E-Z Host API キー",
                    label: "E-Z Host キー"
                },
                nestToken: {
                    description: "Nest API トークン",
                    label: "Nest トークン"
                },
                encryptingHostKey: {
                    description: "Encrypting.host API キー",
                    label: "Encrypting.host キー"
                },
                encryptingHostUrlStyle: {
                    description: "Encrypting.host の URL スタイル",
                    label: "Encrypting.host URL スタイル"
                },
                encryptingHostDomains: {
                    description: "Encrypting.host ドメインの JSON リスト",
                    label: "Encrypting.host ドメイン"
                },
                encryptingHostTitle: {
                    description: "Encrypting.host 埋め込みのタイトル（任意）",
                    label: "Encrypting.host タイトル"
                },
                encryptingHostColor: {
                    description: "Encrypting.host 埋め込みの色（任意）",
                    label: "Encrypting.host の色"
                },
                encryptingHostFakelink: {
                    description: "Encrypting.host の偽リンク（任意）",
                    label: "Encrypting.host 偽リンク"
                },
                s3Endpoint: {
                    description: "S3 互換エンドポイントの URL",
                    label: "S3 エンドポイント"
                },
                s3Bucket: {
                    description: "S3 バケット名",
                    label: "S3 バケット"
                },
                s3Region: {
                    description: "S3 リージョン（R2 の場合は auto）",
                    label: "S3 リージョン"
                },
                s3AccessKeyId: {
                    description: "S3 アクセスキー ID",
                    label: "S3 アクセスキー ID"
                },
                s3SecretAccessKey: {
                    description: "S3 シークレットアクセスキー",
                    label: "S3 シークレットアクセスキー"
                },
                s3SessionToken: {
                    description: "S3 セッショントークン（任意）",
                    label: "S3 セッショントークン"
                },
                s3PublicUrl: {
                    description: "公開ベース URL（任意）",
                    label: "S3 公開 URL"
                },
                s3Prefix: {
                    description: "S3 オブジェクトキーのプレフィックス（任意）",
                    label: "S3 プレフィックス"
                },
                s3ForcePathStyle: {
                    description: "パス形式の S3 URL を使用",
                    label: "S3 パス形式を強制"
                },
                litterboxExpiry: {
                    description: "Litterbox の保存期間",
                    label: "Litterbox の有効期限"
                },
                catboxUserhash: {
                    description: "アカウント連携用の Catbox userhash",
                    label: "Catbox userhash"
                },
                sharexConfig: {
                    description: "ShareX カスタムアップローダーの JSON",
                    label: "ShareX 設定"
                },
                disableFallbacks: {
                    description: "代替アップロードサービスを無効化",
                    label: "代替を無効化"
                },
                autoSend: {
                    description: "アップロードした URL をチャット入力欄に挿入",
                    label: "自動送信"
                },
                autoFormat: {
                    description: "挿入した URL を山括弧で囲む",
                    label: "自動整形"
                },
                bypassDiscordUpload: {
                    description: "Discord のアップロードを使わず、代わりに FileUpload を使用します。",
                    label: "Discord アップロードを回避"
                },
                bypassDiscordUploadOnlyOverLimit: {
                    description: "ファイルがサイズ上限を超える場合のみ FileUpload を使用します。",
                    label: "上限超過時のみ Discord アップロードを回避"
                },
                customDiscordFileSizeLimitMB: {
                    description: "Discord のファイルサイズ上限（MB）を手動で指定します。0 で自動検出します。",
                    label: "カスタム Discord ファイルサイズ上限（MB）"
                },
                gofileToken: {
                    description: "GoFile API トークン（任意）",
                    label: "GoFile トークン"
                },
                fallbackOrder: {
                    description: "代替アップローダーの順序",
                    label: "代替の順序"
                },
                pixelVaultKey: {
                    description: "PixelVault アップロードキー",
                    label: "PixelVault キー"
                },
                pixelDrainKey: {
                    description: "PixelDrain API キー（任意）",
                    label: "PixelDrain キー"
                },
                uploadTimeoutMs: {
                    description: "アップロードのタイムアウト（ミリ秒）",
                    label: "アップロードのタイムアウト (ms)"
                },
                stripQueryParams: {
                    description: "アップロードした URL からクエリパラメーターを削除",
                    label: "クエリパラメーターを削除"
                },
                embedProxyEnabled: {
                    description: "アップロードした動画リンクを埋め込み補助サービス経由にします。",
                    label: "埋め込みプロキシを有効化"
                },
                embedProxyService: {
                    description: "アップロードした動画リンクをラップする埋め込み補助サービスです。",
                    label: "埋め込みプロキシサービス"
                },
                corsProxyUrl: {
                    description: "ブラウザーからのアップロードに使う CORS プロキシの URL",
                    label: "CORS プロキシ URL"
                },
                apngToGif: {
                    description: "APNG のアップロードを GIF に変換",
                    label: "APNG を GIF に"
                },
                preserveOriginalFilename: {
                    description: "アップロード時に元のファイル名を保持します。",
                    label: "元のファイル名を保持"
                },
                autoCopy: {
                    description: "アップロード URL を自動コピー",
                    label: "自動コピー"
                },
                autoUploadPastedFiles: {
                    description: "チャット入力欄に貼り付けたとき、クリップボードのファイルを画像ホストへ自動アップロードします。",
                    label: "貼り付けたファイルを自動アップロード"
                },
                webdavUrl: {
                    description: "WebDAV サーバーの URL",
                    label: "WebDAV URL"
                },
                webdavUsername: {
                    description: "WebDAV ユーザー名",
                    label: "WebDAV ユーザー名"
                },
                webdavPassword: {
                    description: "WebDAV のパスワードまたはアプリトークン",
                    label: "WebDAV パスワード"
                },
                webdavDirectory: {
                    description: "WebDAV サーバー上のサブディレクトリ（任意）",
                    label: "WebDAV ディレクトリ"
                },
                webdavServerType: {
                    description: "WebDAV サーバーの種類",
                    label: "WebDAV サーバーの種類",
                    nextcloud: "Nextcloud",
                    owncloud: "ownCloud",
                    generic: "汎用 WebDAV"
                },
                webdavShareType: {
                    description: "WebDAV 共有リンクの形式",
                    label: "WebDAV 共有の種類",
                    sharepage: "共有ページ",
                    directdownload: "直接ダウンロード",
                    markdown: "Markdown リンク"
                },
                uploadAllowedFileTypes: {
                    description: "許可するファイル拡張子のカンマ区切りリスト（例: png,jpg,gif,mp4）。空欄ですべてのファイルを許可します。",
                    label: "アップロードを許可するファイル形式"
                },
                settingsComponent: {
                    description: "設定",
                    label: "設定コンポーネント"
                }
            },
            panel: {
                fallbackOrder: "代替の順序",
                uploadService: "アップロードサービス",
                zipline: "Zipline",
                serviceUrl: "サービス URL",
                ziplineToken: "Zipline トークン",
                folderId: "フォルダー ID",
                eZHost: "E-Z Host",
                eZHostApiKey: "E-Z Host API キー",
                nest: "Nest",
                nestToken: "Nest トークン",
                encryptingHost: "Encrypting.host",
                encryptingHostApiKey: "Encrypting.host API キー",
                urlStyle: "URL スタイル",
                domainsJson: "ドメイン（JSON）",
                embedTitle: "埋め込みのタイトル",
                embedColor: "埋め込みの色",
                fakeLink: "偽リンク",
                s3CompatibleStorage: "S3 互換ストレージ",
                s3EndpointUrl: "S3 エンドポイント URL",
                bucketName: "バケット名",
                region: "リージョン",
                accessKeyId: "アクセスキー ID",
                secretAccessKey: "シークレットアクセスキー",
                sessionToken: "セッショントークン",
                publicBaseUrl: "公開ベース URL",
                objectKeyPrefix: "オブジェクトキーのプレフィックス",
                usePathStyleEndpoint: "パス形式のエンドポイントを使用",
                catbox: "Catbox",
                catboxUserhash: "Catbox userhash",
                litterboxExpiry: "Litterbox の有効期限",
                gofile: "GoFile",
                gofileToken: "GoFile トークン",
                pixelvault: "PixelVault",
                pixelvaultUploadKey: "PixelVault アップロードキー",
                pixeldrain: "PixelDrain",
                pixeldrainApiKey: "PixelDrain API キー",
                sharexCustomUploader: "ShareX カスタムアップローダー",
                sharexCustomUploaderConfig: "ShareX カスタムアップローダーの設定",
                sharexConfigActions: "ShareX 設定の操作",
                webdav: "WebDAV",
                serverUrl: "サーバー URL",
                username: "ユーザー名",
                passwordOrAppToken: "パスワードまたはアプリトークン",
                passwordOrAppToken2: "パスワードまたはアプリトークン",
                uploadDirectory: "アップロード先ディレクトリ",
                serverType: "サーバーの種類",
                shareLinkFormat: "共有リンクの形式",
                uploadBehavior: "アップロードの動作",
                stripQueryParameters: "クエリパラメーターを削除",
                useEmbedProxy: "埋め込みプロキシを使用",
                embedProxyService: "埋め込みプロキシサービス",
                convertApngToGif: "APNG を GIF に変換",
                preserveOriginalFilename: "元のファイル名を保持",
                autoCopyUrl: "URL を自動コピー",
                disableFallbackUploaders: "代替アップローダーを無効化",
                insertUrlIntoChatInput: "URL をチャット入力欄に挿入",
                formatInsertedUrl: "挿入した URL を整形",
                discordIntegration: "Discord との連携",
                bypassDiscordUploadButton: "Discord のアップロードボタンを回避",
                autoUploadPastedFiles: "貼り付けたファイルを自動アップロード",
                respectDiscordFileSizeLimit: "Discord のファイルサイズ上限に従う",
                discordLimitOverrideMb: "Discord の上限を上書き（MB）",
                allowedFileTypes: "許可するファイル形式",
                network: "ネットワーク",
                corsProxyUrl: "CORS プロキシ URL",
                defaultCorsProxySource: "既定の CORS プロキシのソース",
                uploadTimeout: "アップロードのタイムアウト",
                domainsJsonDescription: "使用するドメインの JSON 配列。例: [\"offensive\"]"
            },
            status: {
                cancelled: "アップロードをキャンセルしました。",
                uploadingVia: "{{service}}でアップロード中...",
                uploading: "アップロード中...",
                unknownError: "不明なエラー",
                startingVia: "{{service}}でアップロードを開始中...",
                retryingWith: "{{service}}で再試行中 ({{attempt}}/{{total}})...",
                uploadedVia: "{{service}}でアップロードしました。",
                allFailed: "すべてのアップロードサービスが失敗しました。最後のエラー: {{error}}",
                fileReady: "ファイルの準備完了、アップロードを開始中...",
                preparing: "アップロードを準備中...",
                failed: "アップロードに失敗しました: {{message}}",
                timedOut: "アップロードがタイムアウトしました",
                serviceFailed: "{{service}} が失敗しました: {{message}}",
                preparingFile: "{{name}}{{suffix}} を準備中..."
            }
        },
        gifMaker: {
            option: {
                lastWidth: {
                    label: "前回の幅"
                },
                lastHeight: {
                    label: "前回の高さ"
                },
                lastCaptionMode: {
                    label: "前回のキャプションモード"
                },
                lastCaptionText: {
                    label: "前回のキャプションテキスト"
                },
                lastCaptionSize: {
                    label: "前回のキャプションサイズ"
                },
                lastFontFamily: {
                    label: "前回のフォントファミリー"
                },
                lastBubbleTipBase: {
                    label: "前回の吹き出し先端の基点"
                },
                maxWidth: {
                    description: "自動調整時の最大幅です。",
                    label: "最大幅"
                },
                maxHeight: {
                    description: "自動調整時の最大の高さです。",
                    label: "最大の高さ"
                }
            },
            name: "GifMaker",
            description: "チャットや GIF ピッカーの任意のメディアから GIF を作成し、キャプションを付けます。",
            text: {
                send: "送信",
                export: "エクスポート",
                makeGif: "GIF を作成",
                editGif: "GIF を編集",
                selectAFont: "フォントを選択...",
                enterCaption: "キャプションを入力...",
                width: "幅",
                height: "高さ",
                loadingFonts: "フォントを読み込み中...",
                captions: "キャプション",
                text: "テキスト",
                font: "フォント",
                fontSize: "フォントサイズ",
                tipBase: "先端の基点",
                dimensions: "サイズ",
                generatingGif: "GIF を生成中...",
                clickOnThePreview: "プレビューをクリックして吹き出しの先端の位置を決めます",
                gifPreview: "GIFプレビュー"
            },
            captionMode: {
                caption: "キャプション",
                none: "なし",
                speechbubble: "吹き出し"
            }
        },
        gifProviderSwitcher: {
            name: "GifProviderSwitcher",
            description: "Klipy の代わりに Tenor または Giphy の GIF 検索を使えるようにします",
            text: {
                tenor: "Tenor",
                giphy: "Giphy",
                klipy: "Klipy",
                providers: "プロバイダー",
                providersCount: "{{count}} 個のプロバイダー"
            }
        },
        keyboardNavigation: {
            toast: {
                invalidUrl: "無効な URL",
                copiedResponseToClipboard: "応答をクリップボードにコピーしました！",
                issueFetchingUrl: "URL の取得中に問題が発生しました",
                copiedGitInfoTo: "Git 情報をクリップボードにコピーしました！",
                noUpdatesAvailable: "利用可能なアップデートはありません",
                enabledPlugin: "{{id}} を有効にしました",
                disabledPlugin: "{{id}} を無効にしました"
            },
            text: {
                openPlexcordTab: "Plexcord タブを開く",
                openPluginTab: "プラグインタブを開く",
                openThemesTab: "テーマタブを開く",
                openUpdaterTab: "アップデータータブを開く",
                openCloudTab: "クラウドタブを開く",
                openBackupRestoreTab: "バックアップと復元タブを開く",
                restartClient: "クライアントを再起動",
                openQuickCssFile: "QuickCSS ファイルを開く",
                openSettingsFolder: "設定フォルダーを開く",
                openInGithub: "GitHub で開く",
                openInBrowser: "ブラウザーで開く",
                togglePlugin: "プラグインを切り替え",
                enable: "有効化",
                disable: "無効化",
                quickFetch: "クイック取得",
                copyGitInfo: "Git 情報をコピー",
                checkForUpdates: "アップデートを確認",
                aPlexcordUpdateIs: "Plexcord のアップデートがあります！",
                clickHereToView: "ここをクリックしてアップデートを表示",
                navigateToServer: "サーバーへ移動",
                commandPalette: "コマンドパレット",
                searchTheCommandPalette: "コマンドパレットを検索",
                multipleChoice: "複数選択",
                textInput: "テキスト入力",
                openDevTab: "開発タブを開く",
                enterUrlToFetch: "取得するURLを入力（GETのみ）",
                typeAndPressEnter: "入力してEnterを押してください",
                recording: "記録中...",
                recordKeybind: "キーバインドを記録",
                enterUrl: "URL を入力"
            },
            option: {
                hotkey: {
                    description: "コマンドパレットを開くホットキーです。",
                    label: "ホットキー"
                },
                allowMouseControl: {
                    description: "マウスでコマンドパレットを操作できるようにします。",
                    label: "マウス操作を許可"
                }
            },
            name: "KeyboardNavigation",
            description: "キーボードで UI を操作できるようにします。"
        },
        lastActive: {
            name: "LastActive",
            description: "チャンネル/サーバー内で自分や他のユーザーの最後のメッセージへジャンプするプラグインです。",
            toast: {
                failedToFindMessages: "メッセージが見つかりませんでした。詳細はコンソールを確認してください。",
                couldnTFindAny: "このユーザーの最近のメッセージが見つかりませんでした。",
                channelInformationNotAvailable: "チャンネル情報を取得できません。",
                failedToJumpTo: "メッセージへジャンプできませんでした。詳細はコンソールを確認してください。"
            },
            text: {
                yourLastMessage: "自分の最後のメッセージ",
                userSLastMessage: "ユーザーの最後のメッセージ"
            }
        },
        limitlessScreenshare: {
            text: {
                deleteTag: "タグを削除",
                mustBeGreaterThan: "{{value}}より大きくする必要があります",
                maxResolutionTooLow: "最大解像度は{{value}}未満にできません",
                maxResolutionRound: "解像度の丸めが有効な場合、最大解像度は0で終わる必要があります"
            },
            name: "LimitlessScreenshare",
            description: "画面共有の解像度と FPS 用のスライダーを追加します。",
            option: {
                maxFPS: {
                    description: "スライダーの最大 FPS",
                    label: "最大 FPS"
                },
                maxResolution: {
                    description: "スライダーの最大解像度",
                    label: "最大解像度"
                },
                roundResolution: {
                    description: "解像度を 10p 単位で丸めます",
                    label: "解像度を丸める"
                },
                resolutions: {
                    label: "解像度"
                },
                fpss: {
                    label: "FPS 値"
                }
            }
        },
        messagePeek: {
            option: {
                hideMuted: {
                    description: "ミュートした DM とグループチャットのメッセージプレビューとタイムスタンプを非表示にします。",
                    label: "ミュートを非表示"
                }
            },
            name: "MessagePeek",
            description: "ダイレクトメッセージ一覧に最後のメッセージのプレビューとタイムスタンプを表示します。",
            text: {
                officialDiscordMessage: "Discord 公式メッセージ",
                sentGif: "GIF を送信しました",
                voiceMessage: "ボイスメッセージ",
                membersCount: "{{count}} 人のメンバー",
                you: "あなた"
            }
        },
        messageTranslate: {
            name: "MessageTranslate",
            description: "キャッシュ、チャンネルごとの切り替えなどのオプション付きで、メッセージを自分の言語に自動翻訳します。",
            option: {
                targetLanguage: {
                    description: "翻訳先の言語コード（例: en, es, fr, de, ja）。",
                    label: "翻訳先の言語"
                },
                excludedLanguages: {
                    description: "翻訳から除外する言語コード（例: en, es, fr, de, ja）。",
                    label: "除外する言語"
                },
                confidenceRequirement: {
                    description: "翻訳を表示するのに必要な最小信頼度（0〜1）。",
                    label: "信頼度の要件"
                },
                autoTranslate: {
                    description: "メッセージが表示されると自動で翻訳します。",
                    label: "自動翻訳"
                },
                skipOwnMessages: {
                    description: "自分のメッセージは翻訳しません。",
                    label: "自分のメッセージをスキップ"
                },
                skipBotMessages: {
                    description: "ボットのメッセージは翻訳しません。",
                    label: "ボットのメッセージをスキップ"
                },
                ignoredGuilds: {
                    description: "翻訳しないサーバー ID のカンマ区切りリスト。",
                    label: "無視するサーバー"
                },
                ignoredChannels: {
                    description: "翻訳しないチャンネル ID のカンマ区切りリスト。",
                    label: "無視するチャンネル"
                },
                ignoredUsers: {
                    description: "翻訳しないユーザー ID のカンマ区切りリスト。",
                    label: "無視するユーザー"
                },
                showIndicator: {
                    description: "翻訳されたメッセージに小さな（翻訳済み）表示を追加します。",
                    label: "表示を出す"
                },
                showOriginal: {
                    description: "原文と訳文を表示します。",
                    noorig: "原文を表示しない。"
                }
            },
            text: {
                showOriginalInSubtext: "原文をサブテキストに表示",
                showOriginalMessageTranslation: "元のメッセージを表示し、翻訳をサブテキストに表示",
                translatedFrom: "{{lang}}から翻訳"
            }
        },
        moreStickers: {
            toast: {
                stickerPackDeleted: "ステッカーパックを削除しました",
                stickerPackAdded: "ステッカーパックを追加しました",
                stickerPacksAdded: "ステッカーパックを追加しました",
                stickerPacksExported: "ステッカーパックをエクスポートしました",
                newStickerPacksAlready: "新しいステッカーパックが既に存在するため、移行は不要です",
                oldStickerPacksNot: "古いステッカーパックが見つからないため、移行するものはありません",
                migrationFailedTitleId: "移行に失敗しました: {{title}} ({{id}})",
                stickerPackMigrationComplete: "ステッカーパックの移行が完了しました",
                failedToUploadSticker: "ステッカーをアップロードできませんでした"
            },
            text: {
                stickerPackUrl: "ステッカーパックの URL",
                pasteHtmlHere: "ここに HTML を貼り付け",
                delete: "削除",
                addStickerPackFrom: "URL からステッカーパックを追加",
                insert: "挿入",
                addStickerPackFrom2: "HTML からステッカーパックを追加",
                insertFromHtml: "HTML から挿入",
                addStickerPackFrom3: "ファイルからステッカーパックを追加",
                miscTools: "その他のツール",
                exportStickerPacks: "ステッカーパックをエクスポート",
                migrateFromV1: "v1 から移行",
                stickersManagement: "ステッカー管理",
                theRegionLineRecognized: "使用している CORS プロキシの影響で、LINE が認識する地域が実際の地域と異なる場合があります。",
                openStickerPackFile: "ステッカーパックファイルを開く",
                stickers: "ステッカー+",
                categoryTitle: "カテゴリー、{{title}}",
                searchStickers: "ステッカーを検索",
                ffmpegstatecontextIsUndefined: "FFmpegStateContext が未定義です",
                recentlyUsed: "最近使用",
                addFromUrl: "URLから追加",
                addFromHtml: "HTMLから追加",
                addFromFile: "ファイルから追加",
                misc: "その他",
                invalidUrl: "無効なURL",
                lineOnly: "現在はLINEのスタンプ/絵文字のみ対応しています。",
                getTelegramStickers: "Telegramのスタンプは次で入手できます:",
                htmlFallbackHelp: "スタンプパックの追加中にエラーが発生した場合は、スタンプパックページのHTMLソースコードを使って追加してみてください。",
                htmlFallbackApplies: "これは地域ロック/OSロックなどのスタンプに当てはまります。"
            },
            option: {
                promptToUpload: {
                    description: "すぐに送信せず、ステッカーをチャットバーに挿入します",
                    label: "アップロード前に確認"
                },
                packs: {
                    description: "パック",
                    label: "パック"
                }
            },
            name: "MoreStickers",
            description: "他の SNS プラットフォームのステッカーパックを追加します。（例: LINE）"
        },
        musicRichPresence: {
            option: {
                scrobblerBackend: {
                    description: "使用するスクロブラーのバックエンドです。",
                    label: "スクロブラーのバックエンド"
                },
                instanceBaseURL: {
                    description: "ListenBrainz インスタンスのベース URL です。",
                    label: "インスタンスのベース URL"
                },
                instanceAPIBaseUrl: {
                    description: "ListenBrainz API のベース URL です。",
                    label: "インスタンスの API ベース URL"
                },
                apiKey: {
                    description: "Last.fm API キー。必須ではありませんが、共有キーのレート制限を避けるため強く推奨します",
                    label: "API キー"
                },
                username: {
                    description: "ユーザー名",
                    label: "ユーザー名"
                },
                shareUsername: {
                    description: "スクロブラーのプロフィールへのリンクを表示",
                    label: "ユーザー名を共有"
                },
                clickableLinks: {
                    description: "曲名、アーティスト名、アルバム名をクリック可能なリンクにします",
                    label: "クリック可能なリンク"
                },
                hideWithSpotify: {
                    description: "Spotify が起動中ならプレゼンスを非表示",
                    label: "Spotify 起動時は非表示"
                },
                hideWithActivity: {
                    description: "他のプレゼンスがある場合は非表示",
                    label: "アクティビティ時は非表示"
                },
                statusName: {
                    description: "カスタムステータステキスト。次の変数を使えます: {artist} | {album} | {title}",
                    label: "ステータス名"
                },
                statusDisplayType: {
                    description: "メンバーリストに曲名/アーティスト名を表示",
                    off: "表示しない（一般的な再生中メッセージを表示）"
                },
                nameFormat: {
                    description: "ステータス名に曲名とアーティスト名を表示",
                    statusName: "カスタムステータス名を使用"
                },
                missingArt: {
                    description: "アルバムまたはアルバムアートがない場合",
                    logo: "大きなスクロブラーのロゴを使用"
                },
                showLogo: {
                    description: "アルバムカバーの横にスクロブラーサービスのロゴを表示",
                    label: "スクロブラーのロゴを表示"
                },
                showAlbumCover: {
                    description: "アルバムカバーを表示します。無効にするとプレースホルダーを表示します。不適切なアートがある場合に便利です",
                    label: "アルバムカバーを表示"
                },
                useListeningStatus: {
                    description: "「プレイ中」の代わりに「再生中」ステータスを表示"
                }
            },
            name: "MusicRichPresence",
            description: "Last.FM/Listenbrainz 用のリッチプレゼンス",
            text: {
                showArtistName: "アーティスト名を表示",
                showTrackName: "曲名を表示",
                useMusicServiceName: "音楽サービス名を使用（なければカスタムステータステキスト）",
                useFormatArtistSong: "「アーティスト - 曲」形式を使用",
                useFormatSongArtist: "「曲 - アーティスト」形式を使用",
                useArtistNameOnly: "アーティスト名のみを使用",
                useSongNameOnly: "曲名のみを使用",
                useAlbumNameFalls: "アルバム名を使用（曲にアルバムがなければカスタムステータステキスト）",
                useGenericPlaceholder: "汎用プレースホルダーを使用",
                lastFm: "Last.FM",
                howToCreateAn: "API キーの作成方法",
                set: "設定:",
                applicationName: "アプリケーション名",
                applicationDescription: "アプリケーションの説明",
                toAnythingAndLeave: "に任意の値を入れ、残りは空欄にします。",
                createApiKey: "API キーを作成",
                invalidInstance: "無効なListenBrainz互換インスタンス",
                provideBoth: "次の両方を入力してください:",
                apiBaseUrl: "API ベースURL",
                andThe: "と",
                instanceBaseUrl: "インスタンスのベースURL",
                forYourCustomInstance: "（カスタムListenBrainzインスタンス用）。または ListenBrainz/Last.FM に戻してください",
                allowConnectTitle: "PlexcordにListenBrainzインスタンスへの接続を許可",
                allowConnectBody: "カスタムListenBrainzインスタンスを使用するには、まずPlexcordの接続を許可する必要があります。",
                allowInstance: "インスタンスを許可",
                listenBrainzCompatible: "ListenBrainz互換（セルフホスト）",
                and: "と"
            }
        },
        noMiddleClickPaste: {
            name: "NoMiddleClickPaste",
            description: "Linux の中クリック貼り付けを無効化 - Linux のみ"
        },
        orbolayBridge: {
            option: {
                port: {
                    description: "接続先のポート",
                    label: "ポート"
                }
            },
            name: "OrbolayBridge",
            description: "Orbolay を Discord に接続するブリッジプラグイン",
            toast: {
                connectedToOrbolayServer: "Orbolay サーバーに接続しました"
            }
        },
        plexcordHelper: {
            name: "PlexcordHelper",
            description: "サポートの提供と、Discordが原因のクラッシュの修正に使用されます。",
            text: {
                restartRequired: "再起動が必要",
                restartNow: "今すぐ再起動",
                later: "後で",
                wouldYouLikeTo: "今すぐ再起動しますか？",
                somePluginsRequireA: "一部のプラグインは完全に無効化するために再起動が必要です。",
                alreadyEnabled: "{{plugin}}はすでに有効です",
                alreadyDisabled: "{{plugin}}はすでに無効です",
                disablePlugin: "{{plugin}}を無効化",
                enablePlugin: "{{plugin}}を有効化",
                errorStopping: "プラグイン {{plugin}} の停止中にエラーが発生しました",
                errorStarting: "プラグイン {{plugin}} の起動中にエラーが発生しました"
            },
            toast: {
                failedToTolowercase: "{{toLowerCase}} に失敗しました",
                aRestartIsRequired: "変更を反映するには再起動が必要です！"
            },
            card: {
                notOnThisVersion: "このプラグインはこのバージョンの Plexcord にはありません。アップデートしてみてください！"
            }
        },
        plexcordTweaks: {
            name: "PlexcordTweaks",
            option: {
                removeActivitySection: {
                    description: "メンバーリスト上部のアクティビティセクションを削除します",
                    label: "アクティビティセクションを削除"
                },
                showYourOwnActivityButtons: {
                    description: "Discord はなぜか自分のアクティビティボタンを非表示にします",
                    label: "自分のアクティビティボタンを表示"
                },
                refreshSlashCommands: {
                    description: "クライアントを再起動せずに新しく追加されたスラッシュコマンドを表示するよう更新します。",
                    label: "スラッシュコマンドを更新"
                },
                forceRoleIcon: {
                    description: "コンパクトモードでメッセージの横にロールアイコンを強制表示します",
                    label: "ロールアイコンを強制"
                },
                accountStandingButton: {
                    description: "ヘッダーバーにアカウントステータスボタンを表示",
                    label: "アカウントステータスボタン"
                },
                jsonGateway: {
                    description: "ゲートウェイ再接続時に JSON を強制します",
                    label: "JSON ゲートウェイ"
                },
                enableAutoCorrect: {
                    description: "チャットボックスのコンテキストメニューに、ネイティブの自動修正とテキスト置換の切り替えを追加します",
                    label: "自動修正を有効化"
                },
                autoCorrect: {
                    description: "メッセージエディターでネイティブの自動修正とテキスト置換を使用します",
                    label: "自動修正"
                },
                disableHolidayNotifications: {
                    label: "ホリデー通知を無効化",
                    description: "常にDiscordのデフォルト通知音を使用します"
                },
                showAllBadges: {
                    label: "すべてのバッジを表示",
                    description: "残りを +n にまとめず、プロフィールのバッジをすべて表示します"
                }
            },
            text: {
                allGood: "問題ありません！",
                limited: "制限あり",
                veryLimited: "大きく制限",
                atRisk: "リスクあり",
                suspended: "停止中",
                slashCommandsRefreshedSuccessfully: "スラッシュコマンドを更新しました。",
                failedToRefreshCommands: "コマンドを更新できませんでした。詳細はコンソールを確認してください。",
                enableAutocorrect: "自動修正を有効化"
            },
            command: {
                refreshCommands: "スラッシュコマンドを更新"
            },
            description: "Discord向けの小さな調整と修正のコレクション。"
        },
        plextronStreamFixes: {
            option: {
                unlockQualityOptions: {
                    description: "Nitro の状態に関係なく配信品質オプションを解放",
                    label: "品質オプションを解放"
                },
                removeResolutionCap: {
                    description: "60fps で 720p を超える解像度を許可",
                    label: "解像度の上限を解除"
                },
                forceEncoderSettings: {
                    description: "エンコーダーに設定した解像度/FPS を強制",
                    label: "エンコーダー設定を強制"
                },
                preventDownscale: {
                    description: "Discord が配信解像度を下げるのを防ぐ",
                    label: "ダウンスケールを防止"
                },
                keyframeInterval: {
                    description: "キーフレーム間隔（ms、0 = エンコーダー既定、5000 = 5 秒ごと）",
                    label: "キーフレーム間隔"
                },
                minBitrate: {
                    description: "エンコーダーの最小ビットレート（kbps）",
                    label: "最小ビットレート"
                },
                raiseBitrateCaps: {
                    description: "デスクトップの既定ビットレート上限を引き上げ（目標 600kbps → 10Mbps、最大 3.5Mbps → 40Mbps）",
                    label: "ビットレート上限を引き上げ"
                },
                preventFramerateReduction: {
                    description: "話していないときに Discord が配信フレームレートを下げるのを防ぐ",
                    label: "フレームレート低下を防止"
                },
                bitsPerPixelPct: {
                    description: "目標ビットレートのピクセルあたりビット率（8 = 0.08bpp、12 = 0.12bpp）",
                    label: "ピクセルあたりビット (%)"
                }
            },
            name: "PlextronStreamFixes",
            description: "Discord のエンコーダーと品質制限にパッチを当て、Plextron での配信品質の改善を試みます。"
        },
        rPCEditor: {
            name: "RPCEditor"
        },
        reactionTimestamps: {
            name: "ReactionTimestamps",
            description: "リアクションのポップアウトに各リアクションの時刻を表示します。",
            text: {
                userAtTime: "{{user}}（{{time}}）"
            }
        },
        richPresence: {
            text: {
                useCustomStatusName: "カスタムステータス名を使用",
                useFormatArtistSong: "「アーティスト - 曲」形式を使用",
                useFormatSongArtist: "「曲 - アーティスト」形式を使用",
                useArtistNameOnly: "アーティスト名のみを使用",
                useSongNameOnly: "曲名のみを使用",
                useAlbumName: "アルバム名を使用",
                useLargeStatsFm: "大きな Stats.fm のロゴを使用",
                useGenericPlaceholder: "汎用プレースホルダーを使用",
                seriesMovieName: "シリーズ/映画名",
                seriesEpisodeTrackMovie: "シリーズ - エピソード/トラック/映画名",
                custom: "カスタム",
                seriesCover: "シリーズのカバー",
                episodeCover: "エピソードのカバー",
                season1Episode1: "シーズン 1 エピソード 1",
                off: "オフ",
                listening: "再生中",
                playing: "プレイ中",
                streaming: "配信中",
                watching: "視聴中",
                none: "なし",
                navidromeInstanceExposesServer: "Navidrome インスタンス（サーバー URL を公開。一度だけ認証を送信）",
                lastFmApiSends: "Last.fm API（メタデータを last.fm に送信）",
                donTShowShows: "表示しない（一般的な再生中メッセージを表示）",
                showStateLineContent: "状態行の内容を表示",
                showDetailsLineContent: "詳細行の内容を表示",
                displayYourCurrentlyPlaying: "再生中のオーディオブックを Discord リッチプレゼンスとして表示します。AudioBookShelf サーバーの URL、ユーザー名、パスワードが必要です。",
                audiobookshelfServerUrl: "AudioBookShelf サーバーの URL。",
                audiobookshelfUsername: "AudioBookShelf のユーザー名。",
                audiobookshelfPassword: "AudioBookShelf のパスワード。",
                connectsToTosuVia: "ポート 24050 の WebSocket で tosu に接続します。設定は不要です。tosu が osu! と一緒に起動していることを確認してください。",
                showWhatYouRe: "stats.fm 経由で再生中の曲を表示します。再生履歴が公開されている必要があります。",
                statsFmUsername: "Stats.fm のユーザー名。",
                customStatusText: "カスタムステータステキスト。",
                statsFm: "Stats.fm",
                nameFormat: "名前の形式。",
                fallbackWhenArtIs: "アートがない場合の代替。",
                showListeningStatus: "再生中ステータスを表示。",
                showStatsFmLogo: "アルバムアートの横に Stats.fm のロゴを表示。",
                showLinkToStats: "stats.fm のプロフィールへのリンクを表示。",
                showLinkToSong: "stats.fm の曲へのリンクを表示。",
                hideStatsFmPresence: "Spotify が起動中なら stats.fm のプレゼンスを非表示。",
                hideStatsFmPresence2: "外部 RPC が起動中なら stats.fm のプレゼンスを非表示。",
                disableDownloadingAlbumArt: "アルバムアートのダウンロードを無効化。",
                showWhatYouRe2: "Jellyfin で再生中のものを表示します。API キーの取得方法: Jellyfin の Web UI を開き、F12 で開発者ツールを開き、ネットワークタブでサーバーへのリクエストを探し、Authorization ヘッダー（Ctrl+F で検索）の Token='this' の部分が必要です。ユーザー ID はプロフィールページの URL にあります。",
                jellyfinServerUrl: "Jellyfin サーバーの URL。",
                jellyfinApiKey: "Jellyfin API キー。",
                authorization: "Authorization",
                jellyfinUserId: "Jellyfin のユーザー ID。",
                userIdFromProfile: "プロフィール URL のユーザー ID",
                nameDisplayFormat: "名前の表示形式。",
                customNameTemplate: "カスタム名前テンプレート。",
                nameOnJellyfin: "Jellyfin で {name}",
                coverTypeForTv: "テレビ番組のカバーの種類。",
                episodeNumberFormat: "エピソード番号の形式。",
                overrideRichPresenceType: "リッチプレゼンスの種類を上書き。",
                showEpisodeNameAfter: "シーズン/エピソード情報の後にエピソード名を表示。",
                showPresenceWhenMedia: "メディアが一時停止中でもプレゼンスを表示。",
                hideMediaDetails: "メディアの詳細を非表示。",
                discordRichPresenceFor: "Gensokyo Radio 用の Discord リッチプレゼンス。有効にして聴くだけ！",
                refreshIntervalInSeconds: "更新間隔（秒）。",
                showWhatYouRe3: "Navidrome 経由で再生中の曲を表示します。",
                navidromeServerUrlMust: "Navidrome サーバーの URL（公開ドメインである必要があります。例: https://navidrome.example.com）。",
                navidromeUsername: "Navidrome のユーザー名。",
                navidromePassword: "Navidrome のパスワード。",
                optionalDiscordApplicationClient: "Discord アプリケーションのクライアント ID（任意）。",
                howToFetchAlbum: "アルバムアートの取得方法。",
                optionalProvideYourOwn: "任意: 独自の Last.fm API キーを指定（空欄なら既定値）。",
                showNavidromeLogoIn: "アルバムアートの右下に Navidrome のロゴを表示。",
                showAlbumNameIn: "プレゼンスにアルバム名を表示。",
                whichTypeOfActivity: "表示するアクティビティの種類。",
                showTheStateDetails: "メンバーリストに状態/詳細行の内容を表示",
                hideRichPresenceWhen: "音楽が一時停止中はリッチプレゼンスを非表示（ストップウォッチを表示しない）",
                theListeningToText: "「再生中」テキスト（例: {artist}）",
                navidrome: "Navidrome",
                theMainLineShowing: "再生中の曲を示すメイン行（例: {song}）",
                song: "{song}",
                theLineBelowThe: "曲名の下の行（例: {artist}）",
                artist: "{artist}",
                theAlbumLineE: "アルバム行（例: {album}）",
                album: "{album}",
                enableTabLabelsCurrenttab: "{{TAB_LABELS_currentTab}} のプレゼンスを有効化。",
                statsFmProfile: "Stats.fm プロフィール",
                viewSong: "曲を見る",
                showArtistName: "アーティスト名を表示",
                showTrackName: "曲名を表示",
                enterValue: "値を入力"
            },
            name: "RichPresence",
            description: "AudioBookShelf、osu!、stats.fm、Jellyfin、Navidrome、Gensokyo Radio 用の統合リッチプレゼンスハブ。",
            toast: {
                audiobookshelfRpcIsNot: "AudioBookShelf RPC が設定されていません。",
                jellyfinRpcIsNot: "Jellyfin RPC が設定されていません。",
                jellyfinReturnedAnInvalid: "Jellyfin が無効な応答を返しました。API キーが間違っている可能性があります。"
            },
            option: {
                enabled: {
                    description: "リッチプレゼンスサービスを有効化。",
                    label: "有効"
                },
                serviceSettings: {
                    description: "サービスの設定。",
                    label: "サービス設定"
                },
                abs_enabled: {
                    description: "AudioBookShelf のプレゼンスを有効化。",
                    label: "AudioBookShelf 有効"
                },
                tosu_enabled: {
                    description: "osu! (tosu) のプレゼンスを有効化。",
                    label: "osu! (tosu) 有効"
                },
                sfm_enabled: {
                    description: "stats.fm のプレゼンスを有効化。",
                    label: "Stats.fm 有効"
                },
                jf_enabled: {
                    description: "Jellyfin のプレゼンスを有効化。",
                    label: "Jellyfin 有効"
                },
                gr_enabled: {
                    description: "Gensokyo Radio のプレゼンスを有効化。",
                    label: "Gensokyo Radio 有効"
                },
                nd_enabled: {
                    description: "Navidrome のプレゼンスを有効化。",
                    label: "Navidrome 有効"
                },
                abs_serverUrl: {
                    description: "AudioBookShelf サーバーの URL。",
                    label: "AudioBookShelf サーバー URL"
                },
                abs_username: {
                    description: "AudioBookShelf のユーザー名。",
                    label: "AudioBookShelf ユーザー名"
                },
                abs_password: {
                    description: "AudioBookShelf のパスワード。",
                    label: "AudioBookShelf パスワード"
                },
                sfm_username: {
                    description: "Stats.fm のユーザー名。",
                    label: "Stats.fm ユーザー名"
                },
                sfm_shareUsername: {
                    description: "stats.fm のプロフィールへのリンクを表示。",
                    label: "Stats.fm: ユーザー名を共有"
                },
                sfm_shareSong: {
                    description: "stats.fm の曲へのリンクを表示。",
                    label: "Stats.fm: 曲を共有"
                },
                sfm_hideWithSpotify: {
                    description: "Spotify が起動中なら stats.fm のプレゼンスを非表示。",
                    label: "Stats.fm: Spotify 起動時は非表示"
                },
                sfm_hideWithExternalRPC: {
                    description: "外部 RPC が起動中なら stats.fm のプレゼンスを非表示。",
                    label: "Stats.fm: 外部 RPC 時は非表示"
                },
                sfm_statusName: {
                    description: "カスタムステータステキスト。",
                    label: "Stats.fm: ステータス名"
                },
                sfm_nameFormat: {
                    description: "名前の形式。",
                    label: "Stats.fm: 名前の形式",
                    statusName: "カスタムステータス名を使用",
                    artistFirst: "「アーティスト - 曲」形式を使用",
                    songFirst: "「曲 - アーティスト」形式を使用",
                    artistOnly: "アーティスト名のみを使用",
                    songOnly: "曲名のみを使用",
                    albumName: "アルバム名を使用"
                },
                sfm_useListeningStatus: {
                    description: "再生中ステータスを表示。",
                    label: "Stats.fm: 再生中ステータスを使用"
                },
                sfm_missingArt: {
                    description: "アートがない場合の代替。",
                    label: "Stats.fm: アートがない場合",
                    statsFmLogo: "大きな Stats.fm のロゴを使用",
                    placeholder: "汎用プレースホルダーを使用"
                },
                sfm_showLogo: {
                    description: "アルバムアートの横に Stats.fm のロゴを表示。",
                    label: "Stats.fm: ロゴを表示"
                },
                sfm_alwaysHideArt: {
                    description: "アルバムアートのダウンロードを無効化。",
                    label: "Stats.fm: 常にアートを非表示"
                },
                jf_serverUrl: {
                    description: "Jellyfin サーバーの URL。",
                    label: "Jellyfin サーバー URL"
                },
                jf_apiKey: {
                    description: "Jellyfin API キー。",
                    label: "Jellyfin API キー"
                },
                jf_userId: {
                    description: "Jellyfin のユーザー ID。",
                    label: "Jellyfin ユーザー ID"
                },
                jf_nameDisplay: {
                    description: "名前の表示形式。",
                    label: "Jellyfin: 名前の表示",
                    default: "シリーズ/映画名",
                    full: "シリーズ - エピソード/トラック/映画名",
                    custom: "カスタム"
                },
                jf_customName: {
                    description: "カスタム名前テンプレート。",
                    label: "Jellyfin: カスタム名"
                },
                jf_coverType: {
                    description: "テレビ番組のカバーの種類。",
                    label: "Jellyfin: カバーの種類",
                    series: "シリーズのカバー",
                    episode: "エピソードのカバー"
                },
                jf_episodeFormat: {
                    description: "エピソード番号の形式。",
                    label: "Jellyfin: エピソードの形式",
                    long: "S01E01",
                    fulltext: "シーズン 1 エピソード 1"
                },
                jf_showEpisodeName: {
                    description: "シーズン/エピソード情報の後にエピソード名を表示。",
                    label: "Jellyfin: エピソード名を表示"
                },
                jf_overrideType: {
                    description: "リッチプレゼンスの種類を上書き。",
                    label: "Jellyfin: 種類を上書き",
                    off: "オフ",
                    listening: "再生中",
                    playing: "プレイ中",
                    streaming: "配信中",
                    watching: "視聴中"
                },
                jf_showPausedState: {
                    description: "メディアが一時停止中でもプレゼンスを表示。",
                    label: "Jellyfin: 一時停止状態を表示"
                },
                jf_privacyMode: {
                    description: "メディアの詳細を非表示。",
                    label: "Jellyfin: プライバシーモード"
                },
                gr_refreshInterval: {
                    description: "更新間隔（秒）。",
                    label: "Gensokyo Radio: 更新間隔"
                },
                nd_serverUrl: {
                    description: "Navidrome サーバーの URL（例: https://navidrome.example.com）",
                    label: "Navidrome サーバー URL"
                },
                nd_username: {
                    description: "Navidrome ユーザー名",
                    label: "Navidrome ユーザー名"
                },
                nd_password: {
                    description: "Navidrome パスワード",
                    label: "Navidrome パスワード"
                },
                nd_clientId: {
                    description: "Discord アプリケーションのクライアント ID（任意）",
                    label: "Navidrome: クライアント ID"
                },
                nd_showSmallImage: {
                    description: "アルバムアートの右下に Navidrome のロゴを表示。",
                    label: "Navidrome: 小さい画像を表示"
                },
                nd_showAlbum: {
                    description: "プレゼンスにアルバム名を表示。",
                    label: "Navidrome: アルバムを表示"
                },
                nd_albumArtMode: {
                    description: "アルバムアートの取得方法。",
                    label: "Navidrome: アルバムアートのモード",
                    none: "なし",
                    instance: "Navidrome インスタンス（サーバー URL を Discord に公開、認証は送信しない）",
                    lastfm: "Last.fm API（曲のメタデータを Last.fm に送信）"
                },
                nd_lastfmApiKey: {
                    description: "Last.fm API キー（任意）",
                    label: "Navidrome: Last.fm API キー"
                },
                nd_refreshInterval: {
                    description: "更新間隔（秒）。",
                    label: "Navidrome: 更新間隔"
                },
                nd_activityType: {
                    description: "アクティビティの種類",
                    label: "Navidrome: アクティビティの種類",
                    listening: "再生中",
                    playingFixesHiddenLines: "プレイ中（非表示の行を修正）",
                    watching: "視聴中"
                },
                nd_nameString: {
                    description: "アクティビティ名の書式文字列",
                    label: "Navidrome: 名前の文字列"
                },
                nd_detailsString: {
                    description: "アクティビティ詳細の書式文字列",
                    label: "Navidrome: 詳細の文字列"
                },
                nd_stateString: {
                    description: "アクティビティ状態の書式文字列",
                    label: "Navidrome: 状態の文字列"
                },
                nd_largeTextString: {
                    description: "アクティビティの大きいテキストの書式文字列",
                    label: "Navidrome: 大きいテキストの文字列"
                },
                nd_statusDisplayType: {
                    description: "メンバーリストに曲名/アーティスト名を表示",
                    off: "表示しない（一般的な再生中メッセージを表示）"
                },
                nd_hideOnPause: {
                    description: "音楽が一時停止中はリッチプレゼンスを非表示",
                    label: "Navidrome: 一時停止時は非表示"
                }
            },
            panel: {
                password: "パスワード",
                statsFmUsername: "stats.fm のユーザー名",
                customStatusText: "カスタムステータステキスト",
                nameFormat: "名前の形式",
                missingArtFallback: "アートがない場合の代替",
                showListeningStatus: "再生中ステータスを表示",
                showStatsFmLogo: "Stats.fm のロゴを表示",
                showProfileLink: "プロフィールリンクを表示",
                showSongLink: "曲のリンクを表示",
                hideWithSpotify: "Spotify 起動時は非表示",
                hideWithExternalRpc: "外部 RPC 時は非表示",
                disableAlbumArt: "アルバムアートを無効化",
                apiKey: "API キー",
                userId: "ユーザーID",
                nameDisplay: "名前の表示",
                customNameTemplate: "カスタム名前テンプレート",
                coverType: "カバーの種類",
                episodeFormat: "エピソードの形式",
                overridePresenceType: "プレゼンスの種類を上書き",
                showEpisodeName: "エピソード名を表示",
                showWhenPaused: "一時停止中も表示",
                privacyMode: "プライバシーモード",
                refreshInterval: "更新間隔",
                clientId: "クライアント ID",
                albumArtMode: "アルバムアートのモード",
                lastFmApiKey: "Last.fm API キー",
                showSmallImage: "小さい画像を表示",
                showAlbum: "アルバムを表示",
                activityType: "アクティビティの種類",
                statusDisplayType: "ステータスの表示形式",
                hideOnPause: "一時停止時は非表示",
                activityNameFormat: "アクティビティ名の形式",
                detailsFormat: "詳細の形式",
                stateFormat: "状態の形式",
                largeTextFormat: "大きいテキストの形式",
                enabled: "有効"
            }
        },
        sedEnhanced: {
            option: {
                regexByDefault: {
                    description: "`r` フラグを反転し、`r` を付けると非正規表現モード、付けないと正規表現モードになります。",
                    label: "既定で正規表現"
                }
            },
            name: "SedEnhanced",
            description: "Discord の簡易的な `sed` サポートを拡張します。"
        },
        showRolesInChat: {
            option: {
                showBots: {
                    description: "ボットの最上位ロールを表示するかどうか。",
                    label: "ボットを表示"
                },
                useRoleColor: {
                    description: "アイコンにロールの色を使用します。",
                    label: "ロールの色を使用"
                }
            },
            name: "ShowRolesInChat",
            description: "チャットメッセージでユーザー名の横に最上位ロールを表示します。特定のロールはコンテキストメニュー（右クリック）で表示/非表示にできます。",
            text: {
                chatRoleActions: "チャットのロール操作",
                unhideRolesInChat: "チャットのロールを再表示",
                showRoleInChat: "チャットにロールを表示",
                hideRoleInChat: "チャットのロールを隠す"
            }
        },
        silenceUsers: {
            option: {
                mutedUserIds: {
                    description: "ping とサーバーバッジを消音する Discord ユーザー ID（カンマ区切り）。",
                    label: "消音したユーザー ID"
                }
            },
            name: "SilenceUsers",
            description: "特定ユーザーからの @メンションの通知とサーバーバッジのカウントを消音します。通常のメッセージや DM には影響しません。"
        },
        songLink: {
            text: {
                showIfAvailable: "利用可能なら表示",
                openInDesktopApp: "デスクトップアプリで開く",
                loadingSongLink: "曲のリンクを読み込み中...",
                pleaseProvideAMusic: "音楽のリンクを指定してください。",
                thisWillTakeA: "少々お待ちください...",
                noAlternativePlatformsFound: "このリンクの代替プラットフォームは見つかりませんでした。",
                failedToResolveMusic: "音楽のリンクを解決できませんでした",
                logo: "{{name}} のロゴ"
            },
            option: {
                servicesSettings: {
                    description: "サービスの設定",
                    label: "サービス設定"
                },
                userCountry: {
                    description: "検索に使う国（2 文字の国コード）",
                    label: "ユーザーの国"
                },
                includeMetadata: {
                    description: "曲名とアーティスト名を見出しとして含めます。",
                    label: "メタデータを含める"
                }
            },
            name: "SongLink",
            description: "曲のリンクの下にストリーミングサービスのボタンを追加します",
            command: {
                musiclink: "音楽のリンクを他のストリーミングサービスに変換します。",
                url: "音楽のリンク（Spotify、Deezer、YouTube、Tidal、Apple Music、SoundCloud）"
            }
        },
        songSpotlight: {
            name: "SongSpotlight",
            description: "プロフィールで曲を紹介します",
            text: {
                songSpotlight: "Song Spotlight",
                explicit: "不適切な表現を含む",
                addSong: "曲を追加",
                addANewSong: "新しい曲を追加",
                copyLink: "リンクをコピー",
                removeSong: "曲を削除",
                failedToLoad: "読み込みに失敗しました！",
                areYouSure: "よろしいですか？",
                thisWillOverwriteYour: "現在の曲が上書きされます。",
                continue: "続行",
                nevermind: "やめる",
                thisWillPermanentlyDelete: "すべての曲が完全に削除されます。",
                delete: "削除",
                signInToSong: "Song Spotlight にサインイン",
                songs: "曲",
                authorization: "Authorization",
                importFromClipboard: "クリップボードからインポート",
                copyToClipboard: "クリップボードにコピー",
                signOut: "サインアウト",
                deleteSongs: "曲を削除",
                more: "その他",
                editSongs: "曲を編集",
                copyJson: "JSON をコピー",
                looksLikeThereS: "ここには何もないようです！",
                uhOhSongSpotlight: "おっと！Song Spotlight を読み込めませんでした。詳細はコンソールを確認してください。",
                stealSong: "曲をもらう",
                profileSongs: "プロフィールの曲",
                notEnoughSpace: "空きがありません",
                alreadyAdded: "この曲はすでに追加されています",
                invalidLink: "無効なリンク",
                failedToParseLink: "リンクを解析できませんでした",
                invalidUrl: "無効なURL",
                goAddSongs: "さあ、何を待っているの？Song Spotlightに曲を追加しましょう！",
                tellUserToAddSongs: "{{name}}さんにSong Spotlightへ曲を追加するよう伝えましょう！",
                supportedServices: "Song Spotlightは次のサービスに対応しています:",
                viewSongsVia: "曲は",
                viewSongsViaSuffix: "コマンドでも確認できます！",
                coverTooltipOwner: "{{label}} の {{sublabel}}",
                coverTooltipBy: "{{sublabel}} の {{label}}",
                lastUpdated: "最終更新",
                save: "保存",
                showMore: "さらに {{count}} 件表示"
            },
            toast: {
                youHaveBeenSigned: "Song Spotlight からサインアウトされました。再度サインインしてください。",
                songSpotlightError: "Song Spotlight: {{error}}",
                successfullyAuthorized: "認可に成功しました！",
                failedToPlaySong: "曲のプレビューを再生できませんでした！",
                addedSong: "曲を追加しました！",
                removedSong: "曲を削除しました！",
                noJsonInClipboard: "クリップボードに JSON がありません！",
                invalidSongSpotlightData: "クリップボードの Song Spotlight データが無効です！",
                oneOrMoreImported: "インポートした曲の一部が無効でした。",
                importedSongsFromClipboard: "クリップボードから曲をインポートしました！",
                successfullySavedSongs: "曲を保存しました！",
                successfullySignedOut: "サインアウトしました！",
                successfullyDeletedSongs: "曲を削除しました！",
                youDonTHave: "空きが足りません！",
                uhOhThisSong: "おっと、この曲は存在しません！",
                youAlreadyHaveThis: "この曲は既に追加されています！",
                youDonTHave2: "この曲…追加されていませんよね？",
                fetchError: "Song Spotlight の取得エラー: {{path}}"
            },
            option: {
                collapseSongList: {
                    description: "ユーザープロフィールの曲リストを、別メニューを開くボタンに折りたたみます",
                    label: "曲リストを折りたたむ"
                },
                profileSongsLimit: {
                    description: "ユーザーを最初にクリックしたときに表示する曲数",
                    label: "プロフィールの曲数上限"
                },
                previewVolume: {
                    description: "曲のプレビュー再生時の音量",
                    label: "プレビュー音量"
                }
            }
        },
        stopAutoUnread: {
            name: "StopAutoUnread",
            description: "Discord がチャンネルの通知設定を自動的に「すべてのメッセージ」に変更するのを防ぎます"
        },
        themeLibrary: {
            text: {
                enablePlugin: "プラグインを有効化",
                cancel: "キャンセル",
                holdOn: "ちょっと待って！",
                thisThemeRequiresThe: "このテーマには",
                pluginToWorkProperly: "プラグインが必要です！",
                doYouWantTo: "有効にしますか？",
                themeInfo: "テーマ情報",
                viewSource: "ソースを表示",
                close: "閉じる",
                download: "ダウンロード",
                overwrite: "上書き",
                keepMyFile: "自分のファイルを保持",
                copyToClipboard: "クリップボードにコピー",
                conflict: "競合！",
                themeSource: "テーマのソース",
                aThemeWithThe: "同じ名前のテーマ",
                alreadyExists: "が既に存在します",
                inYourThemesDirectory: "テーマフォルダーにあります！上書きしますか？",
                version: "バージョン",
                likes: "いいね",
                donate: "寄付",
                supportServer: "サポートサーバー",
                source: "ソース",
                tags: "タグ",
                youCanSupportThe: "下から寄付して作者を応援できます！",
                joinDiscordServer: "Discord サーバーに参加",
                viewThemeSource: "テーマのソースを表示",
                showAll: "すべて表示",
                showThemes: "テーマを表示",
                showSnippets: "スニペットを表示",
                showMostLiked: "いいねが多い順に表示",
                showDark: "ダークを表示",
                showLight: "ライトを表示",
                showEnabled: "有効なものを表示",
                showDisabled: "無効なものを表示",
                searchForATheme: "テーマを検索...",
                gettingTheLatestThemes: "最新のテーマを取得中...",
                thisWonTTake: "すぐに終わります！",
                failedToFetchThemes: "テーマを取得できませんでした",
                couldNotFetchThe: "テーマ一覧を取得できませんでした。後でもう一度お試しください。",
                wantYourThemeRemoved: "テーマを削除してほしいですか？",
                hide: "非表示",
                noThemeFound: "テーマが見つかりません。",
                tryNarrowingYourSearch: "検索条件を絞り込んでみてください。",
                themeLibrary: "テーマライブラリ",
                successfullyAuthorizedWithThemelibrary: "ThemeLibrary で認可しました！",
                failedToAuthorizeCheck: "認可に失敗しました。コンソールを確認してください",
                successfullyDeauthorizedFromThemelibrary: "ThemeLibrary の認可を解除しました！",
                failedToDeauthorizeCheck: "認可の解除に失敗しました。コンソールを確認してください",
                themelibraryAuth: "ThemeLibrary 認証",
                themeRemoval: "テーマの削除",
                allThemeAuthorsAre: "すべてのテーマ作者はテーマ情報にクレジットされており、ソースは変更されていません。それでもテーマの削除を希望する場合は、下をクリックして Issue を作成してください。",
                authorizeWithThemelibrary: "ThemeLibrary で認可",
                copyThemelibraryToken: "ThemeLibrary トークンをコピー",
                deauthorizeThemelibrary: "ThemeLibrary の認可を解除",
                themeDetails: "{{name}} の詳細",
                mostLiked: "いいねが多い順",
                newestAdditions: "新着",
                removeTheme: "テーマを削除",
                addTheme: "テーマを追加",
                authors: "作者",
                author: "作者",
                nobodyLikedTheme: "このテーマにはまだいいねがありません。",
                nobodyLikedSnippet: "このスニペットにはまだいいねがありません。",
                usersLikedTheme: "{{likes}}人のユーザーがこのテーマにいいねしました！",
                usersLikedSnippet: "{{likes}}人のユーザーがこのスニペットにいいねしました！",
                openThemeLibrary: "テーマライブラリを開く",
                lastUpdated: "このテーマの最終更新日:",
                removalInfo: "テーマを完全に削除したい場合は、こちらで issue を作成してください:",
                themes: "テーマ",
                requestRemoval: "テーマの削除をリクエスト",
                pluginSuffix: "プラグインが必要です！"
            },
            toast: {
                downloadedName: "{{name}} をダウンロードしました！",
                failedToDownloadName: "{{name}} をダウンロードできませんでした！（コンソールを確認）",
                invalidOrExpiredInvite: "招待が無効か期限切れです！",
                copiedToClipboard: "クリップボードにコピーしました",
                noUniquetokenPresentTry: "uniqueToken がありません。先に認可してください！",
                noTokenToCopy: "コピーするトークンがありません。先に認可してください！",
                copiedToClipboard2: "クリップボードにコピーしました！"
            },
            name: "ThemeLibrary",
            description: "Plexcord 用のテーマライブラリです。",
            option: {
                hideWarningCard: {
                    description: "テーマライブラリタブ上部の警告カードを非表示",
                    label: "警告カードを非表示"
                },
                buttons: {
                    description: "ThemeLibrary のボタン",
                    label: "ボタン"
                }
            }
        },
        translatePlus: {
            name: "Translate+",
            description: "Plexcord の翻訳プラグインに人工言語のサポートを加えたものです！",
            text: {
                translate: "翻訳",
                dismiss: "閉じる",
                translationFailedDueTo: "エラーのため翻訳に失敗しました。",
                translatedFrom: "{{lang}}から翻訳"
            },
            option: {
                target: {
                    description: "翻訳先の言語",
                    label: "翻訳先"
                },
                toki: {
                    description: "トキポナを有効化",
                    label: "トキポナ"
                },
                sitelen: {
                    description: "シテレンポナを有効化",
                    label: "シテレンポナ"
                },
                shavian: {
                    description: "ショー・アルファベットを有効化",
                    label: "ショー・アルファベット"
                }
            }
        },
        triviaAI: {
            name: "TriviaAI",
            description: "AI を使ってクイズの質問に答えるのを手伝うプラグインです。",
            text: {
                answerWithAi: "AI で回答",
                enterApiKeyHere: "AI エンドポイントの API キーをここに入力します。",
                enterSystemPrompt: "システムプロンプトを入力します。",
                enterYourOpenaiCompatible: "OpenAI 互換の AI エンドポイントをここに入力します。",
                status: "ステータス {{status}}"
            },
            option: {
                apiKey: {
                    description: "API キー。",
                    label: "API キー"
                },
                model: {
                    description: "使用する AI モデル。",
                    label: "モデル",
                    placeholder: "例: google/gemini-3-flash-preview、inception/mercury、openai/gpt-5.2-chat など"
                },
                systemPrompt: {
                    description: "AI 用のシステムプロンプト。プレースホルダー: {current_user}, {current_time}",
                    label: "システムプロンプト"
                },
                maxTokens: {
                    description: "応答の最大トークン数。",
                    label: "最大トークン数"
                },
                endpoint: {
                    description: "OpenAI 互換の AI エンドポイント。",
                    label: "エンドポイント"
                },
                context: {
                    description: "コンテキストとして含める過去のメッセージ数。",
                    label: "コンテキスト"
                },
                passMessageAuthorName: {
                    description: "AI に渡すとき、メッセージ内容の前に送信者名を付けます。会話内のユーザーを AI が区別しやすくなります。",
                    label: "送信者名を渡す"
                },
                treatSelfAsAssistant: {
                    description: "有効にすると、自分のメッセージはコンテキスト内でアシスタントのメッセージとして扱われます。一部のモデルがファンフィクションを書き始める原因になります。",
                    label: "自分をアシスタントとして扱う"
                },
                mode: {
                    description: "回答をどのように扱いますか？",
                    label: "モード",
                    autoreply: "自動返信",
                    chatbar: "チャットバーのテキストを置き換え",
                    bot: "Clyde"
                },
                supportImages: {
                    description: "画像をコンテキストとして AI に渡します（ある場合）。すべてのモデルが対応しているわけではありません。",
                    label: "画像に対応"
                },
                sendImagesAsBase64: {
                    description: "画像を base64 で AI に送信します。",
                    label: "画像を base64 で送信"
                }
            },
            toast: {
                triviaaiApiSettingsAre: "TriviaAI: API の設定が不完全です。",
                errorGettingResponseFrom: "AI モデルからの応答取得中にエラーが発生しました"
            }
        },
        unreadCountBadge: {
            option: {
                showOnMutedChannels: {
                    description: "ミュートしたチャンネルにも未読数を表示",
                    label: "ミュートしたチャンネルに表示"
                },
                notificationCountLimit: {
                    description: "実際の数の代わりに +99 を表示",
                    label: "通知数の上限"
                }
            },
            name: "UnreadCountBadge",
            description: "チャンネル一覧のチャンネルに未読メッセージ数のバッジを表示します"
        },
        userPFP: {
            toast: {
                gifsWebpMustBe: "GIF/WebP は URL で追加する必要があります。画像ホスティングサービスにアップロードしてリンクを貼り付けてください。"
            },
            text: {
                save: "保存",
                delete: "削除",
                customAvatar: "カスタムアバター",
                original: "オリジナル",
                local: "ローカル",
                enterPngGifUrl: "PNG/GIF の URL を入力",
                setAvatar: "アバターを設定",
                usingTheSetAvatar: "アバター設定機能はローカルのみで、変更が見えるのは自分だけです。",
                joinUserpfpServer: "UserPFP サーバーに参加",
                dropHere: "ここにドロップ！",
                dragOrClick: "⬆ 画像をドラッグするかクリックしてアップロード（GIFやWebPはURLを使用してください）",
                uploadedFile: "（アップロードしたファイル）",
                supportHere: "UserPFP を支援する"
            },
            option: {
                overrideServerAvatars: {
                    description: "サーバーアバターをカスタムアバター、または未設定の場合は既定のユーザーアバターで上書きします。",
                    label: "サーバーアバターを上書き"
                },
                preferNitro: {
                    description: "既定のアニメーションアバター（Nitro）と UserPFP アバターの両方がある場合に使用するアバター",
                    label: "Nitro を優先",
                    false: "UserPFP",
                    true: "Nitro"
                },
                databaseSource: {
                    description: "データベースを読み込む URL",
                    label: "データベースのソース"
                }
            },
            name: "UserPFP",
            description: "自分や他のユーザーにローカルの静止画またはアニメーションアバターを設定できます"
        },
        userpluginInstaller: {
            toast: {
                restartToApplyChanges: "変更を適用するには再起動してください！"
            },
            text: {
                installError: "インストールエラー",
                done: "完了！",
                later: "後で",
                updateError: "更新エラー",
                checkingForUpdates: "アップデートを確認中...",
                loadingPlugins: "プラグインを読み込み中...",
                pluginUpdatesAvailable: "プラグインのアップデートがあります",
                theFollowingPluginsAre: "次のプラグインは古くなっています:",
                youCanUpdatePlugins: "下でプラグインを更新できます。",
                installPlugin: "プラグインをインストール",
                userplugininstallerNotFullyLoaded: "UserpluginInstaller が完全に読み込まれていません",
                youNeedToRestart: "ネイティブ部分を読み込むには再起動が必要です :)",
                restartNow: "今すぐ再起動",
                someUserpluginsAreOut: "一部の UserPlugins が古くなっています！",
                clickToOpenThe: "クリックして UserPlugin アップデーターを開く",
                plexcordDoesNotModerate: "Plexcord はユーザープラグインを審査しておらず、インストールによって生じる結果について一切責任を負いません。",
                onlyInstallUserpluginsFrom: "信頼できる開発者のユーザープラグインのみをインストールしてください。すべて自己責任です。",
                setGitPath: "Git のパスを設定",
                installHint: "GitHub、GitLab、Codeberg、git.nin0.dev、plugins.nin0.dev のプラグインは、クローン URL をここに貼り付けてインストールできます。",
                enableAndRestart: "有効化して再起動",
                enableAndRefresh: "有効化して再読み込み",
                tabCounts: "（{{total}} 件、{{enabled}} 件有効）",
                possiblyMore: "更新の確認が完了していないため、他にもある可能性があります。",
                alreadyInstalled: "プラグインは既にインストールされています。下で更新してください",
                invalidUrl: "無効な URL です。上の注意をお読みください",
                install: "インストール",
                restart: "再起動",
                refresh: "再読み込み",
                update: "更新",
                source: "ソース",
                support: "サポート",
                managePlugins: "プラグインを管理",
                uninstalledRestart: "{{name}} をアンインストールしました。完全に削除するには再起動が必要です。",
                uninstalledRefresh: "{{name}} をアンインストールしました。完全に削除するには再読み込みが必要です。",
                updatedRestart: "{{name}} を更新しました。更新を適用するには再起動が必要です。",
                updatedRefresh: "{{name}} を更新しました。更新を適用するには再読み込みが必要です。",
                installedBody: "{{name}} のインストールに成功しました。次はどうしますか？",
                installedNativeBody: "{{name}} のインストールに成功しました。ただしネイティブ機能を使用するため、クライアントの再起動が必要です。次はどうしますか？"
            },
            option: {
                allowlistedChannels: {
                    description: "「プラグインをインストール」ボタンを表示するチャンネルのカンマ区切りリスト。Plexcord のユーザープラグインチャンネルでは常に表示されます",
                    label: "許可リストのチャンネル"
                },
                notifyIfUpdate: {
                    description: "UserPlugins の更新が必要な場合に Plexcord の通知を表示",
                    label: "更新があれば通知"
                },
                neverNotifyForPlugins: {
                    description: "これらのプラグインの更新通知を表示しない（UserPlugins タブからは更新可能）",
                    label: "通知しないプラグイン"
                }
            },
            name: "UserpluginInstaller",
            description: "ボタンをクリックするだけでユーザープラグインをインストールします"
        },
        vCPanelSettings: {
            option: {
                title1: {
                    label: "タイトル 1"
                },
                uncollapseSettingsByDefault: {
                    description: "既定で音声設定を自動的に展開",
                    label: "既定で設定を展開"
                },
                title2: {
                    label: "タイトル 2"
                },
                outputVolume: {
                    description: "出力音量スライダーを表示",
                    label: "出力音量"
                },
                inputVolume: {
                    description: "入力音量スライダーを表示",
                    label: "入力音量"
                },
                outputDevice: {
                    description: "出力デバイスの選択を表示",
                    label: "出力デバイス"
                },
                inputDevice: {
                    description: "入力デバイスの選択を表示",
                    label: "入力デバイス"
                },
                camera: {
                    description: "カメラの選択を表示",
                    label: "カメラ"
                },
                title3: {
                    label: "タイトル 3"
                },
                showOutputVolumeHeader: {
                    description: "出力音量スライダーの上に見出しを表示",
                    label: "出力音量の見出しを表示"
                },
                showInputVolumeHeader: {
                    description: "入力音量スライダーの上に見出しを表示",
                    label: "入力音量の見出しを表示"
                },
                showOutputDeviceHeader: {
                    description: "出力デバイス選択の上に見出しを表示",
                    label: "出力デバイスの見出しを表示"
                },
                showInputDeviceHeader: {
                    description: "入力デバイス選択の上に見出しを表示",
                    label: "入力デバイスの見出しを表示"
                },
                showVideoDeviceHeader: {
                    description: "カメラ選択の上に見出しを表示",
                    label: "ビデオデバイスの見出しを表示"
                }
            },
            name: "VCPanelSettings",
            description: "ボイスパネルから直接音声設定を操作します",
            text: {
                appearance: "外観",
                settingsToShow: "表示する設定",
                headersToShow: "表示する見出し",
                outputVolume: "出力音量",
                inputVolume: "入力音量",
                outputDevice: "出力デバイス",
                inputDevice: "入力デバイス",
                settings: "設定",
                hide: "非表示"
            }
        },
        voiceMessageTranscriber: {
            text: {
                autoDetect: "自動検出",
                start: "開始",
                transcriptionOptions: "文字起こしのオプション",
                audioLanguage: "音声の言語",
                retry: "再試行",
                transcriptionFailed: "文字起こしに失敗しました",
                transcribeVoiceMessage: "ボイスメッセージを文字起こし",
                close: "閉じる",
                baseRecommended: "Base（推奨）",
                small: "Small",
                largeV3TurboBest: "Large v3 Turbo（最高精度、GPU 推奨）",
                transcribe: "文字起こし",
                translateToEnglish: "英語に翻訳",
                voiceMessageTranslation: "ボイスメッセージの翻訳",
                voiceMessageTranscription: "ボイスメッセージの文字起こし",
                hideTimestamps: "タイムスタンプを隠す",
                showTimestamps: "タイムスタンプを表示",
                copied: "コピーしました！",
                copyText: "テキストをコピー",
                downloadingAudio: "音声をダウンロード中...",
                processingAudio: "音声を処理中...",
                loadingModel: "モデルを読み込み中...",
                transcribing: "文字起こし中...",
                transcription: "文字起こし",
                transcriptionError: "文字起こしエラー",
                transcribingInProgress: "文字起こし処理中...",
                initializing: "初期化中...",
                workerCrashed: "文字起こしワーカーがクラッシュしました",
                workerStopped: "文字起こしワーカーが停止しました",
                deleteCache: "すべてのキャッシュファイルを削除（{{size}} MB）",
                action: "アクション"
            },
            name: "VoiceMessageTranscriber",
            description: "Whisper によるボイスメッセージのデバイス上での文字起こし",
            option: {
                embed: {
                    description: "モーダルではなく、ボイスメッセージの添付内に直接文字起こしを表示します。",
                    label: "埋め込み"
                },
                maintainHorizontal: {
                    description: "埋め込みの文字起こしボックスの横幅を維持し、縦方向に広げます。",
                    label: "横幅を維持"
                },
                selectedModel: {
                    description: "モデルのサイズ。",
                    onnxcommunitywhispertiny: "Tiny（最速、精度最低）"
                },
                useGpu: {
                    description: "対応している場合は GPU（WebGPU）でモデルを実行します。大幅に高速化し、大きなモデルも実用的になります。使えない場合は CPU を使用します。",
                    label: "GPU を使用"
                },
                quantized: {
                    description: "CPU で実行する際に量子化モデルを使用します（サイズ小、わずかな品質低下）。",
                    label: "量子化"
                },
                deleteModalFiles: {
                    description: "キャッシュされたファイルをストレージから削除します。",
                    label: "モデルファイルを削除"
                }
            }
        },
        voiceMessagesInBackground: {
            name: "VoiceMessagesInBackground",
            description: "同期したミニプレーヤーで、チャットをまたいでボイスメッセージを再生し続けます。",
            text: {
                voiceMessagesInBackground: "バックグラウンドのボイスメッセージプレーヤー",
                returnToChannelname: "{{channelName}} に戻る",
                voiceMessagePosition: "ボイスメッセージの再生位置",
                changePlaybackSpeed: "再生速度を変更",
                playbackSpeedSpeedTimes: "再生速度 {{speed}} 倍",
                closeVoiceMessagePlayer: "ボイスメッセージプレーヤーを閉じる",
                voiceMessage: "ボイスメッセージ",
                directMessage: "ダイレクトメッセージ",
                resume: "ボイスメッセージを再開",
                pause: "ボイスメッセージを一時停止"
            }
        },
        webPWA: {
            name: "WebPWA",
            description: "Discord をアプリ（PWA）としてインストール可能にします。通知バッジ、グローバルショートカット、Discord 独自のタイトルバーが有効になります。",
            text: {
                activities: "アクティビティ",
                hopIn: "参加する",
                status: "ステータス",
                emojis: "絵文字",
                rooms: "ルーム",
                discord: "Discord",
                platforms: "プラットフォーム",
                keybindsInfoBefore: "カスタムのグローバル「押して X」キーバインドに対応しています。変更するには",
                keybindsInfoAfter: "を開いてください。「長押しで X」キーバインドには対応していません。"
            }
        },
        "webRichPresence (arRPC)": {
            name: "WebRichPresence (arRPC)"
        },
        webScreenShare: {
            option: {
                resolution: {
                    description: "解像度",
                    label: "解像度"
                },
                frameRate: {
                    description: "フレームレート",
                    label: "フレームレート"
                },
                contentHint: {
                    description: "コンテンツヒント",
                    label: "コンテンツヒント"
                },
                systemAudio: {
                    description: "システム音声をミュート",
                    label: "システム音声"
                }
            },
            name: "WebScreenShare",
            description: "画面共有のオプションメニューを追加します。解像度、フレームレート、エンコードのヒント、システム音声を変更できます。",
            text: {
                stream: "配信",
                streamMuted: "配信をミュート中",
                streamMode: "配信モード",
                muteStreamAudio: "配信の音声をミュート",
                preventsSystemAudioFrom: "システム音声が配信に含まれないようにします。",
                showStreamPreviews: "配信プレビューを表示",
                allowsOthersToSee: "参加前に他の人が配信のプレビューを見られるようにします。",
                smootherVideo: "滑らかな映像",
                cleanerText: "くっきりした文字",
                userPreset: "ユーザープリセット",
                custom: "カスタム",
                gaming: "ゲーム",
                screenshare: "画面共有"
            }
        },
        whitelistedEmojis: {
            option: {
                defaultEmojis: {
                    description: "ホワイトリストにない限り、既定の Unicode 絵文字を自動補完から非表示にします。",
                    label: "既定の絵文字"
                },
                serverEmojis: {
                    description: "ホワイトリストにない限り、サーバーのカスタム絵文字を自動補完から非表示にします。",
                    label: "サーバーの絵文字"
                },
                disableToasts: {
                    description: "絵文字の追加・削除時にトーストを表示しません。",
                    label: "トーストを無効化"
                },
                whiteListedEmojis: {
                    description: "ホワイトリストの絵文字",
                    label: "ホワイトリストの絵文字"
                },
                exportEmojis: {
                    description: "絵文字をエクスポート",
                    label: "絵文字をエクスポート"
                },
                importEmojis: {
                    description: "絵文字をインポート",
                    label: "絵文字をインポート"
                },
                resetEmojis: {
                    description: "絵文字をリセット",
                    label: "絵文字をリセット"
                }
            },
            name: "WhitelistedEmojis",
            description: "ホワイトリストの絵文字以外、メッセージ内の絵文字をすべて無効にできます。",
            toast: {
                addedLengthEmojisTo: "{{length}} 個の絵文字をリストに追加しました（{{length}} 個は既に存在）",
                removedLengthEmojisFrom: "{{length}} 個の絵文字をリストから削除しました",
                nameIsAlreadyIn: "「{{name}}」は既にリストにあります",
                addedNameToThe: "「{{name}}」をリストに追加しました",
                nameIsNotIn: "「{{name}}」はリストにありません",
                removedNameFromThe: "「{{name}}」をリストから削除しました",
                successfullyExportedEmojis: "絵文字をエクスポートしました",
                successfullyImportedEmojis: "絵文字をインポートしました",
                invalidJsonData: "無効な JSON データ",
                failedToImportEmojis: "絵文字をインポートできませんでした: {{err}}",
                resetEmojis: "絵文字をリセットしました"
            },
            text: {
                areYouSure: "よろしいですか？",
                thisWillOverwriteYour: "現在のホワイトリストが上書きされます。",
                import: "インポート",
                cancel: "キャンセル",
                thisWillRemoveAll: "ホワイトリストからすべての絵文字が削除されます。",
                reset: "リセット",
                addAllGuildEmojis: "サーバーの絵文字をすべて追加",
                removeAllGuildEmojis: "サーバーの絵文字をすべて削除",
                noEmojisInThe: "ホワイトリストに絵文字がありません。",
                removeAll: "すべて削除",
                removeFromWhitelist: "ホワイトリストから削除",
                addToWhitelist: "ホワイトリストに追加",
                defaultEmojis: "デフォルトの絵文字",
                guildEmojis: "{{name}}の絵文字",
                guildFallback: "サーバー {{id}}",
                whitelistedEmojis: "ホワイトリストの絵文字",
                remove: "削除"
            }
        },
        wigglyText: {
            option: {
                intensity: {
                    description: "アニメーションの強さ（px）",
                    label: "強さ"
                }
            },
            name: "WigglyText",
            description: "テキストをくねくね揺らす新しい Markdown 書式を追加します。",
            text: {
                leftAndRight: "左右に",
                byTyping: "入力:",
                upAndDown: "上下に",
                inACircle: "円を描いて",
                youCanMakeTextWiggle: "次の方法で文字を揺らせます:"
            }
        },
        fixDiscordCss: {
            description: "Discord の CSS の遅延を修正します"
        },
        directFileDownload: {
            name: "DirectFileDownload",
            description: "ファイルをブラウザで開かずにDiscordから直接ダウンロードします"
        },
        githubRepos: {
            text: {
                failedToFetchRepositories: "リポジトリを取得できませんでした",
                personal: "個人",
                unknown: "不明",
                sortedByCount: "リポジトリ数順。クリックでA-Z順に並べ替え",
                sortedAlphabetically: "A-Z順。クリックでリポジトリ数順に並べ替え",
                mostRepos: "リポジトリが多い順"
            }
        }
    }
} as const;

export default translations;
