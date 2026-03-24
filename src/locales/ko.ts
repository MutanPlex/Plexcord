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
        title: "설정",
        language: {
            selector: {
                label: "언어",
                description: "Plexcord에 대해 선호하는 언어를 선택하세요.",
                placeholder: "언어 선택"
            }
        },
        location: {
            label: "설정 위치",
            description: "Plexcord 설정 섹션을 넣을 위치",
            top: "맨 꼭대기에",
            nitro: {
                above: "니트로 섹션 위",
                below: "니트로 섹션 아래"
            },
            activity: {
                above: "위 활동 설정",
                below: "활동 설정 아래"
            },
            bottom: "맨 아래에"
        },
        switches: {
            useQuickCss: {
                label: "맞춤 CSS 활성화",
                description: "QuickCSS 편집기에서 사용자 정의 CSS를 로드합니다. 이를 통해 Discord의 모양을 자신만의 스타일로 맞춤 설정할 수 있습니다."
            },
            enableReactDevtools: {
                label: "React 개발자 도구 활성화",
                description: "Discord의 React 구성 요소를 디버깅하려면 React 개발자 도구 확장을 활성화하세요. 플러그인 개발에 유용합니다."
            },
            mainWindowFrameless: {
                label: "기본 창 프레임 비활성화",
                description: "깔끔한 외관을 위해 기본 창 프레임을 제거합니다. 제목 표시줄 영역을 끌어서 창을 이동할 수 있습니다."
            },
            frameless: {
                label: "창틀 비활성화",
                description: "깔끔한 외관을 위해 기본 창 프레임을 제거합니다. 제목 표시줄 영역을 끌어서 창을 이동할 수 있습니다."
            },
            winNativeTitleBar: {
                label: "Discord의 사용자 정의 제목 표시줄 대신 Windows의 기본 제목 표시줄을 사용하세요",
                description: "Discord의 사용자 정의 제목 표시줄을 표준 Windows 제목 표시줄로 교체합니다. 이로 인해 일부 창 관리 도구와의 호환성이 향상될 수 있습니다."
            },
            transparent: {
                label: "창 투명도 활성화",
                description: "디스코드 창을 투명하게 만들어보세요. 투명성을 지원하는 테마가 필요합니다. 그렇지 않으면 아무 작업도 수행되지 않습니다.",
                isWindows: "이렇게 하면 창 크기 조정이 중단되고 창이 화면 가장자리에 맞춰지는 것을 방지할 수 있습니다.",
                notWindows: "그러면 창 크기 조정이 중단됩니다."
            },
            winCtrlQ: {
                label: "Discord를 닫는 단축키로 Ctrl+Q를 등록하세요(Alt+F4 대체).",
                description: "Discord를 닫으려면 키보드 단축키로 Ctrl+Q를 추가하세요. 이는 응용 프로그램을 빠르게 종료하기 위해 Alt+F4에 대한 대안을 제공합니다."
            },
            disableMinSize: {
                label: "최소 창 크기 비활성화",
                description: "Discord 창의 크기가 기본 최소 크기보다 작게 조정되도록 허용합니다. 창 관리자나 작은 화면을 타일링하는 데 유용합니다."
            }
        },
        quickActions: {
            title: "빠른 작업",
            description: "수행할 수 있는 일반적인 작업입니다. 이러한 바로가기를 사용하면 메뉴를 탐색하지 않고도 자주 사용하는 기능에 빠르게 액세스할 수 있습니다.",
            notificationLog: "알림 로그",
            editQuickCSS: "QuickCSS 편집",
            relaunchDiscord: "디스코드 다시 시작하기",
            openSettingsFolder: "설정 폴더 열기",
            viewSourceCode: "소스 코드 보기"
        },
        specialCards: {
            donations: {
                title: "기부",
                subtitle: "기부해주셔서 감사합니다!",
                description: "@mutanplex로 메시지를 보내 언제든지 혜택을 관리할 수 있습니다.",
                button: "기부",
                invite: "우리의 디스코드에 참여하세요",
                invalid: "초대 링크가 잘못되었거나 만료되었습니다."
            },
            supportProject: {
                title: "프로젝트 지원",
                description: "기부를 통해 Plexcord 개발을 지원해 보세요!"
            },
            contributions: {
                title: "기여",
                subtitle: "기여해 주셔서 감사합니다!",
                description: "Plexcord에 기여했으므로 이제 멋진 새 배지를 갖게 되었습니다!",
                buttonTitle: "당신이 기여한 내용을 확인하세요"
            }
        },
        settingsSection: {
            title: "설정",
            description: "Plexcord가 Discord와 작동하고 통합하는 방식을 구성합니다. 이러한 설정은 Discord 클라이언트의 모양과 동작에 영향을 미칩니다.",
            hintParts: {
                prefix: "{{pluginLink}}을 구성하여 Discord의 설정 메뉴에서 이 설정 섹션이 표시되는 위치를 사용자 정의할 수 있습니다.",
                linkText: "설정 플러그인"
            }
        },
        notifications: {
            title: "알림",
            description: "Plexcord가 알림을 처리하는 방법을 구성합니다. 알림을 받는 시기와 방법을 맞춤설정하거나 과거 알림 기록을 볼 수 있습니다.",
            settings: "알림 설정",
            viewLog: "알림 로그 보기",
            permissions: {
                denied: {
                    title: "데스크톱 알림 권한이 거부되었습니다.",
                    label: "알림 권한을 거부했습니다. 데스크톱 알림이 작동하지 않습니다!"
                }
            },
            style: {
                label: "알림 스타일",
                description: "일부 플러그인에서는 알림을 표시할 수 있습니다. 이는 두 가지 스타일로 제공됩니다.",
                plexcord: "Plexcord 알림",
                plexcordDesc: "인앱 알림입니다",
                desktop: "데스크톱 알림",
                desktopDesc: "기본 데스크톱 알림(예: 핑을 받을 때)",
                onlyWhenNotFocused: "Discord가 집중되지 않을 때만 데스크톱 알림을 사용하세요",
                always: {
                    desktop: "항상 데스크톱 알림 사용",
                    plexcord: "항상 Plexcord 알림 사용"
                }
            },
            positions: {
                label: "알림 위치",
                right: {
                    bottom: "오른쪽 하단",
                    top: "오른쪽 상단",
                },
                left: {
                    bottom: "왼쪽 하단",
                    top: "왼쪽 위",
                }
            },
            missed: {
                label: "부재중 알림 수",
                description: "Discord에 다시 초점을 맞추면 놓친 횟수가 표시된 알림이 표시됩니다.",
                whileYou: "당신이 없는 동안",
                count: "{{count}} 알림{{s}} 수신됨",
                s: "에스"
            },
            timeout: {
                label: "알림 시간 초과",
                description: "알림이 자동으로 사라지기 전까지 화면에 유지되는 시간(초)"
            },
            logLimit: {
                label: "알림 로그 제한",
                description: "오래된 알림이 제거되기 전에 로그에 보관할 최대 알림 수입니다. 알림 로그를 비활성화하려면 {{disable}}로 설정하고 오래된 알림을 자동으로 제거하지 않으려면 {{unlimited}}로 설정합니다."
            },
            opacity: {
                label: "알림 불투명도",
                description: "인앱 알림의 불투명성"
            },
            maxNotifications: {
                label: "최대 알림",
                description: "한 번에 표시되는 최대 알림 수"
            },
            behavior: {
                label: "알림 동작",
            },
            disableInStreamerMode: {
                label: "스트리머 모드에서 비활성화",
                description: "스트리머 모드에서는 알림 비활성화"
            },
            renderImages: {
                label: "이미지 렌더링",
                description: "알림의 이미지 렌더링"
            },
            streamingTreatment: {
                label: "스트리밍 처리",
                description: "화면을 공유하는 동안 알림을 처리하는 방법",
                normal: "일반 - 알림을 정상적으로 표시합니다.",
                noContent: "콘텐츠 없음 - 알림 본문 숨기기",
                ignore: "무시 - 알림을 전혀 표시하지 않습니다."
            },
        },
        macVibrancy: {
            title: "창 진동 스타일(다시 시작해야 함)",
            description: "macOS 창 생동감 효과를 사용자 정의합니다. 이는 Discord 창의 흐림 및 투명도 스타일을 제어합니다. 변경 사항을 적용하려면 다시 시작해야 합니다.",
            placeholder: "창 생동감 스타일",
            style: {
                no: "활기 없음",
                underPage: "페이지 아래(창 선팅)",
                content: "콘텐츠",
                window: "창문",
                selection: "선택",
                titlebar: "제목 표시줄",
                header: "헤더",
                sidebar: "사이드바",
                tooltip: "툴팁",
                menu: "메뉴",
                popover: "팝오버",
                fullscreenUI: "전체 화면 UI(투명하지만 약간 흐릿함)",
                hud: "HUD(가장 투명함)"
            }
        }
    },

    plugins: {
        title: "플러그인",
        new: "새로운",
        unknown: "알려지지 않은",
        noDescription: "설명이 없습니다.",
        restart: {
            apply: "변경 사항을 적용하려면 다시 시작하세요!",
            required: "다시 시작해야 합니다!",
            description: "새로운 플러그인과 해당 설정을 적용하려면 지금 다시 시작하세요.",
            following: "다음 플러그인을 사용하려면 다시 시작해야 합니다.",
            remainingCount: "그 외 {{count}}개",
            fully: "일부 플러그인을 완전히 비활성화하려면 다시 시작해야 합니다.",
            would: "지금 다시 시작하시겠습니까?",
            resetDefault: "기본 설정으로 재설정",
            failed: "종속성을 시작하지 못했습니다.",
            button: {
                restart: "다시 시작",
                later: "나중에!",
                now: "지금 다시 시작",
                cancel: "취소",
                disableWarning: "영원히 경고 비활성화",
                disableAll: "모두 비활성화",
                reset: "다시 놓기",
                close: "닫다"
            }
        },
        contributor: {
            contributed: "기여",
            modal: {
                contributionsInfo: "{{userName}}에는 {{continuedLink}} ~ {{contributionCount}} 플러그인{{s}}이 있습니다.",
                noContributions: "{{userName}}은(는) 플러그인을 만들지 않았습니다. 그들은 다른 방식으로 {{contributedLink}}할 가능성이 높습니다!"
            }
        },
        infoModal: {
            description: "플러그인에 대한 자세한 정보를 보려면 톱니바퀴 또는 정보 아이콘을 누르세요.",
            settingsInfo: "톱니바퀴가 있는 플러그인에는 수정할 수 있는 설정이 있습니다!",
            disableAll: "모든 플러그인 비활성화"
        },
        error: {
            invalidInput: "잘못된 입력이 제공되었습니다.",
            stopping: "플러그인을 중지하는 중 오류가 발생했습니다. {{plugin}}",
            starting: "플러그인을 시작하는 중 오류가 발생했습니다 {{plugin}}",
            startDependency: "종속성 시작 중 오류 발생: {{failures}}",
            infoRender: "이 플러그인의 사용자 정의 정보 구성요소를 렌더링하는 동안 오류가 발생했습니다."
        },
        placeholder: {
            number: "숫자를 입력하세요",
            select: "옵션을 선택하세요",
            text: "값을 입력하세요"
        },
        excluded: {
            desktop: "Discord 데스크톱 앱 또는 Plextron",
            discordDesktop: "Discord 데스크톱 앱",
            plextron: "플렉트론 앱",
            web: "Plextron 앱 및 Discord 웹 버전",
            dev: "Plexcord의 개발자 버전"
        },
        search: {
            looking: "당신은 찾고 있습니까?",
            onlyAvailable: "에서만 사용 가능",
            noCriteria: "검색 기준에 맞는 플러그인이 없습니다."
        },
        required: {
            title: "필수 플러그인",
            this: "이 플러그인은 Plexcord가 작동하는 데 필요합니다.",
            by: "이 플러그인은 다음에 필요합니다:"
        },
        dangerModal: {
            title: "위험한 행동",
            disablePlugins: "플러그인 비활성화",
            disableText: "모두 비활성화",
            irreversible: "이 작업은 되돌릴 수 없습니다!",
            enableBack: "계속하시겠습니까? 나중에 언제든지 다시 활성화할 수 있습니다.",
            undone: "이 작업은 취소할 수 없습니다. 확실합니까?",
            resetDescription: "{{pluginName}}에 대한 모든 설정을 기본값으로 재설정하려고 합니다.",
            disable: "{{enabledPlugins}} 플러그인을 비활성화하려고 합니다!",
            confirmReset: "재설정 확인",
            cancel: "취소",
            resetSettings: "재설정 설정",
            resetText: "다시 놓기"
        },
        filters: {
            label: "필터",
            placeholder: "플러그인 검색...",
            option: {
                all: "모두 표시",
                enabled: "표시 활성화됨",
                disabled: "비활성화됨 표시",
                new: "새로운 표시",
                userplugins: "사용자 플러그인 표시",
                api: "API 플러그인 표시"
            }
        },
        pluginModal: {
            noSettings: "이 플러그인에는 설정이 없습니다.",
            authors: "저자",
            settings: "설정",
            successfulReset: "{{plugin}}에 대한 설정이 재설정되었습니다.",
            enabledStock: "활성화된 스톡 플러그인",
            totalStock: "총 재고 플러그인",
            enabledUser: "활성화된 사용자 플러그인",
            totalUser: "총 사용자 플러그인",
            info: "더 많은 정보 보기",
            source: "소스 코드 보기"
        },
        metadata: {
            api: {
                description: {
                    memberListDecorators: "멤버 목록(서버와 DM 모두)에 데코레이터를 추가하는 API",
                    messageAccessories: "메시지에 액세서리를 추가하는 API",
                    messageDecorations: "메시지에 장식을 추가하는 API",
                    chatInputButtons: "채팅 입력에 버튼을 추가하는 API",
                    commands: "명령을 사용하는 모든 것에 필요한 API",
                    contextMenu: "컨텍스트 메뉴에 항목을 추가/제거하기 위한 API입니다.",
                    dynamicImageModal: "이미지 모달을 열 때 너비나 높이를 생략할 수 있습니다.",
                    menuItemDemangler: "Demangles Discord의 메뉴 아이템 모듈",
                    messageEvents: "메시지 이벤트를 사용하는 모든 것에 필요한 API",
                    messagePopover: "메시지 팝오버에 버튼을 추가하는 API",
                    messageUpdater: "메시지 업데이트 및 다시 렌더링을 위한 API",
                    nicknameIcons: "프로필의 닉네임에 아이콘을 추가하는 API",
                    notices: "알림이 자동으로 사라지는 문제 수정",
                    serverList: "서버 목록을 수정하는 플러그인에 필요한 API",
                    userSettings: "Discord의 UserSettings를 패치하여 그룹과 이름을 노출합니다.",
                    audioPlayer: "내부 Discord 오디오 파일 또는 외부 오디오 링크를 재생하는 API입니다.",
                    userArea: "사용자 영역 패널에 버튼을 추가하는 API입니다."
                },
                chatButtons: {
                    context: {
                        buttons: "버튼"
                    }
                }
            },
            badges: {
                description: "사용자에게 배지를 추가하는 API",
                contributor: {
                    plexcord: "Plexcord 기여자",
                    vencord: "Vencord 기여자",
                    userPlugin: "사용자 플러그인 기여자"
                },
                context: {
                    title: "배지 옵션",
                    copy: {
                        name: "Copy Badge Name",
                        link: "배지 이미지 링크 복사"
                    },
                    refetch: {
                        button: "배지 다시 가져오기",
                        success: "배지를 다시 가져왔습니다!"
                    }
                },
                modal: {
                    title: "Plexcord 기증자",
                    special: "이 배지는 Plexcord 기부자를 위한 특별 혜택입니다.",
                    description: "기부자가 되어 Plexcord 개발을 지원해 보세요. 그것은 많은 의미를 가질 것입니다!"
                }
            },
        },
        uiElements: {
            manage: "UI 요소 관리",
            allows: "마음에 들지 않는 버튼을 숨길 수 있습니다",
            section: {
                chatbar: {
                    title: "채팅바 버튼",
                    description: "채팅 입력바 오른쪽에 있는 버튼입니다."
                },
                messagePopover: {
                    title: "메시지 팝오버 버튼",
                    description: "메시지 위로 마우스를 가져가면 오른쪽에 떠 있는 버튼입니다."
                }
            },
            button: "활성화된 플러그인의 버튼이 여기에 표시됩니다."
        }
    },

    patchHelper: {
        title: "패치 도우미",
        description: "Plexcord 플러그인용 패치를 생성하는 데 도움이 되는 개발자 도구입니다.",
        fullPatch: {
            label: "전체 패치",
            description: "필드를 채우려면 여기에 전체 JSON 패치를 붙여넣으세요."
        },
        find: "찾다",
        match: "성냥",
        replacement: "대사",
        preview: "시사",
        generatedCode: "생성된 코드",
        group: "그룹",
        diff: "차이점",
        module: "기준 치수",
        compile: "엮다",
        compiled: "컴파일 성공",
        copy: {
            clipboard: "클립보드에 복사",
            codeblock: "코드 블록으로 복사"
        },
        error: {
            noMatch: "일치하는 항목이 없습니다. 이 모듈이 지연 로드되었을 수 있습니까?",
            multipleMatch: "일치하는 항목이 여러 개 발견되었습니다. 좀 더 구체적인 검색 패턴을 사용해 보세요.",
            noFind: "'찾기' 필드가 누락되었습니다.",
            noReplacement: "'교체' 필드가 누락되었습니다.",
            invalidReplacement: "'교체' 필드가 잘못되었습니다.",
            replacementMatch: "'replacement.match' 필드가 누락되었습니다.",
            replacementReplace: "'replacement.replace' 필드가 누락되었습니다.",
            replacementMustFunction: "'교체'는 함수여야 합니다."
        },
        cheatSheet: {
            title: "치트 시트",
            identifiers: "식별자(varnames, classnames 등)와 일치하는 특수 정규식 이스케이프 시퀀스",
            dollar: "$를 삽입하세요",
            entireMatch: "전체 일치 항목 삽입",
            beforeMatch: "일치 항목 앞에 하위 문자열을 삽입하세요.",
            afterMatch: "일치 항목 뒤에 하위 문자열을 삽입하세요.",
            nthGroup: "n번째 캡처 그룹($1, $2...)을 삽입합니다.",
            pluginInstance: "플러그인 인스턴스 삽입"
        },
        replacementEval: {
            label: "교체를 함수로 취급",
            description: "'교체'는 활성화된 경우 함수로 평가됩니다."
        }
    },

    sync: {
        title: "백업 및 복원",
        warning: "경고",
        warningText: "설정 파일을 가져오면 현재 설정을 덮어쓰게 됩니다. 현재 구성을 유지하려면 먼저 백업을 내보내십시오.",
        description: "Plexcord 설정을 JSON 파일로 가져오고 내보낼 수 있습니다. 이를 통해 설정을 다른 장치로 쉽게 전송하거나 Plexcord 또는 Discord를 다시 설치한 후 설정을 복구할 수 있습니다.",
        successful: "설정을 성공적으로 가져왔습니다. 변경 사항을 적용하려면 다시 시작하세요!",
        error: {
            failure: "설정을 가져오지 못했습니다: {{error}}",
            failedExport: "설정을 내보내지 못했습니다. 콘솔을 확인하세요.",
            invalid: "잘못된 설정입니다. Plexcord 설정 파일인가요?",
            tooLarge: "데이터 저장소가 너무 큼 - 백업에서 제외되었습니다. 필요한 경우 '데이터 저장소 내보내기'를 사용하십시오.",
            clearSomeDate: "데이터 저장소가 너무 큽니다. 일부 플러그인 데이터를 삭제하고 다시 시도하세요."
        },
        settings: {
            text: "백업에는 무엇이 포함되나요?",
            quickcss: "사용자 정의 QuickCSS",
            theme: "테마 링크",
            plugins: "플러그인 설정",
            datastores: "플러그인 데이터 저장소(예: 시간대 또는 IRememberYou)"
        },
        import: {
            title: "가져오기 설정",
            description: "이전에 내보낸 설정 파일을 선택하여 구성을 복원하세요. 그러면 현재 설정이 모두 백업의 설정으로 대체됩니다.",
            all: "모든 설정 가져오기",
            plugins: "플러그인 가져오기",
            css: "QuickCSS 가져오기",
            datastore: "데이터 저장소 가져오기"
        },
        export: {
            title: "내보내기 설정",
            description: "백업을 위해 현재 Plexcord 설정을 파일로 내보내거나 다른 장치로 전송할 수 있습니다.",
            all: "모든 설정 내보내기",
            plugins: "플러그인 내보내기",
            css: "QuickCSS 내보내기",
            datastore: "데이터 저장소 내보내기"
        }
    },

    cloud: {
        text: "구름",
        title: "설정 동기화",
        override: "클라우드 동기화",
        description: "Plexcord 설정을 클라우드에 동기화하세요. 이를 통해 수동으로 가져오기/내보내기 없이 여러 장치에서 구성의 일관성을 쉽게 유지할 수 있습니다.",
        switchDescription: "활성화하면 설정을 클라우드와 동기화할 수 있습니다. 아래 작업을 사용하여 수동으로 동기화하세요.",
        settings: "클라우드 설정",
        successful: "클라우드에 동기화된 설정!",
        updated: "설정이 업데이트되었습니다! 변경 사항을 완전히 적용하려면 여기를 클릭하여 다시 시작하세요!",
        deleted: "클라우드에서 설정이 삭제되었습니다!",
        integration: {
            title: "클라우드 통합",
            description: "Plexcord의 클라우드 통합을 통해 여러 장치와 Discord 설치 전반에 걸쳐 설정을 동기화할 수 있습니다. 귀하의 데이터는 안전하게 저장되며 언제든지 쉽게 복원할 수 있습니다.",
        },
        reauth: "다른 클라이언트에서 클라우드 통합이 활성화되어 있는 것으로 확인되었습니다! 제한 사항으로 인해 계속 사용하려면 다시 인증해야 합니다. 설정 페이지로 이동하려면 여기를 클릭하세요!",
        error: {
            setup: "설정에 실패했습니다(OAuth 구성을 검색할 수 없음).",
            secret: "설정에 실패했습니다(비밀번호가 반환되지 않음).",
            string: "설정에 실패했습니다({{error}}).",
            connect: "이 계정이 Plexcord Cloud 앱에 연결되어 있지 않아 클라우드 동기화가 비활성화되었습니다. 클라우드 설정에서 이 계정을 연결하면 다시 활성화할 수 있습니다. (참고: 기본 설정은 별도로 저장됩니다)",
            noSettings: "클라우드에는 설정이 없습니다.",
            uptodate: "설정이 최신 상태입니다.",
            localNewer: "로컬 설정이 클라우드 설정보다 최신입니다.",
            delete: "설정({{error}})을 삭제할 수 없습니다.",
            api: {
                returned: {
                    delete: "설정을 삭제할 수 없습니다(API가 {{status}}을 반환함).",
                    to: "설정을 클라우드에 동기화할 수 없습니다(API가 {{status}}을 반환함).",
                    from: "클라우드에서 설정을 동기화할 수 없습니다(API가 {{status}}을 반환함).",
                    manifest: "삭제를 위한 매니페스트를 가져올 수 없습니다 (API가 {{status}}를 반환했습니다)."
                }
            },
            synchronize: {
                to: "설정을 클라우드({{error}})에 동기화할 수 없습니다.",
                from: "클라우드({{error}})에서 설정을 동기화할 수 없습니다."
            }
        },
        warning: {
            enableCloudIntegration: "설정 동기화 기능을 사용하려면 위에서 클라우드 통합을 활성화하세요."
        },
        danger: {
            title: "위험지대",
            description: "클라우드에서 모든 데이터를 영구적으로 삭제합니다. 이 작업은 취소할 수 없으며 동기화된 모든 설정과 클라우드 백엔드에 저장된 기타 데이터가 제거됩니다.",
            delete: {
                account: {
                    title: "클라우드 계정 삭제",
                    description: "클라우드 계정 및 모든 관련 데이터를 영구적으로 삭제하시겠습니까? 이 작업은 취소할 수 없습니다.",
                    confirm: "계정 삭제",
                    cancel: "취소"
                }
            }
        },
        notification: {
            title: "클라우드 통합",
            enabled: "클라우드 통합 활성화",
            host: "{{host}}이(가) 허용 목록에 추가되었습니다. 변경 사항을 적용하려면 앱을 다시 시작하세요.",
            erase: {
                successful: "클라우드 데이터가 삭제되었습니다.",
                failed: "모든 데이터를 지우지 못했습니다(API {{status}} 반환됨). 지원팀에 문의하세요."
            }
        },
        button: {
            to: "클라우드에 동기화",
            from: "클라우드에서 동기화",
            fromDescription: "이렇게 하면 로컬 설정을 클라우드의 설정으로 덮어쓰게 됩니다. 현명하게 사용하세요!",
            delete: "클라우드 데이터 삭제",
            enable: "클라우드 통합 활성화",
            reauthorize: "재승인",
            confirm: "지금 다시 시작",
            later: "나중에!"
        },
        privacy: "귀하의 개인 정보를 존중합니다",
        source: "소스 코드",
        overview: "Plexcord에는 장치 간 설정 동기화와 같은 기능을 추가하는 클라우드 통합 기능이 함께 제공됩니다. {{privacy}}이고 {{source}}은(는) AGPL 3.0 라이센스가 있으므로 직접 호스팅할 수 있습니다.",
        authorization: "설정 동기화를 위해 클라우드 백엔드에 연결하세요. 아직 클라우드 통합을 설정하지 않은 경우 승인을 요청합니다.",
        backend: {
            title: "클라우드 백엔드",
            description: "설정이 클라우드에 저장되는 방식을 선택하세요. 기본적으로 Plexcord Cloud가 사용되지만 자체 호스팅 클라우드 서비스에 연결할 수도 있습니다.",
            invalid: "잘못된 URL"
        },
        sync: {
            title: "이 장치의 동기화 규칙",
            description: "이 설정은 이 기기와 클라우드 간에 설정이 이동하는 방식을 제어합니다. 변경 사항이 양방향으로 흐르도록 할 수도 있고, 정보의 주요 소스가 될 한 곳을 선택할 수도 있습니다.",
            direction: {
                both: "양방향 동기화(변경 사항이 양방향으로 진행됨)",
                push: "이 장치는 소스입니다(업로드만 가능)",
                pull: "클라우드가 소스입니다(다운로드만 가능)",
                manual: "자동으로 동기화하지 않음(아래 버튼을 통해서만 수동으로 동기화)"
            }
        }
    },

    changelog: {
        text: "변경 로그",
        title: "변경 로그",
        description: "여기에서 Plexcord에 대한 최신 변경 사항 및 업데이트를 찾을 수 있습니다.",
        by: "~에 의해",
        check: "저장소 확인",
        uptodate: "최신",
        update: "업데이트",
        noMessage: "메시지 없음",
        unknown: "알려지지 않은",
        updatedPlugins: "업데이트된 플러그인",
        newSettings: "새로운 설정",
        newSettingTooltip: "{{plugin}}의 새로운 설정",
        loading: "로드 중...",
        repoUptodate: "최신 저장소",
        fetch: "저장소에서 가져오기",
        clear: "모든 로그 지우기",
        internet: "인터넷에 연결되어 있는지 확인하고 다시 시도해 보세요.",
        recent: "최근 변경사항",
        codeChanges: "코드 변경 {{count}} 새 커밋{{s}}",
        updateLogs: "업데이트 로그({{count}})",
        noCommit: "현재 버전보다 먼저 사용할 수 있는 커밋이 없습니다. 새로운 변경 사항을 확인하려면 '저장소에서 가져오기'를 클릭하세요.",
        previous: "커밋 기록 및 플러그인 변경 사항이 포함된 이전 업데이트 세션입니다.",
        modal: {
            description: "Plexcord의 최신 변경 사항을 확인하세요. 이는 저장소에서 직접 커밋을 가져와서 새로운 내용을 보여줍니다.",
            repository: "저장소",
            failed: "검색 실패 - 콘솔을 확인하세요",
            current: "현재의:",
            hide: "로그 숨기기",
            show: "로그 표시",
            fetch: {
                title: "변경사항 가져오기",
                description: "저장소에서 새로운 커밋, 플러그인 업데이트, 코드 변경 사항을 확인하세요. 그러면 현재 버전과 사용 가능한 최신 버전을 비교하여 새로운 기능이 표시됩니다.",
                newCommit: "이는 마지막 버전 이후의 새로운 커밋 및 플러그인 업데이트입니다. 어떤 기능이 추가되었는지, 버그가 수정되었는지, 어떤 플러그인이 업데이트되었는지 확인할 수 있습니다.",
                confirm: "술책",
            }
        },
        commit: {
            available: "사용 가능한 커밋",
            no: "새로운 커밋 없음",
            new: "새로운 플러그인",
            updated: "업데이트된 플러그인",
            settings: "새로운 설정"
        },
        toast: {
            already: "이미 저장소가 최신 상태입니다.",
            found: "저장소에서 {{count}} 새 커밋{{s}}을 찾았습니다.",
            local: "저장소가 로컬 복사본으로 최신 상태입니다.",
            failed: "저장소에서 가져오지 못했습니다 :(",
            cleared: "모든 로그가 삭제되었습니다.",
            logCleared: "로그가 삭제되었습니다",
            yourLatest: "최신 업데이트에서 기록된 커밋"
        },
        alert: {
            clear: {
                title: "모든 로그 지우기",
                body: "모든 로그를 지우시겠습니까? 이 작업은 취소할 수 없습니다.",
                confirm: "모두 지우기",
                confirmColor: "위험",
                cancel: "취소"
            },
            log: {
                title: "로그 지우기",
                body: "이 로그를 지우시겠습니까? 이 작업은 취소할 수 없습니다.",
                confirm: "로그 지우기",
                confirmColor: "위험",
                cancel: "취소"
            }
        },
        newPlugins: "{{count}} 새 플러그인{{s}}",
        following: "최근 업데이트에 다음 플러그인이 추가되었습니다.",
        more: "+{{count}} 추가 플러그인"
    },

    csp: {
        restart: "이 변경사항을 적용하려면 다시 시작해야 합니다.",
        blocked: {
            resources: "차단된 리소스",
            disallowed: "일부 이미지, 스타일, 글꼴은 허용되지 않는 도메인에서 왔기 때문에 차단되었습니다.",
            recommended: "GitHub 또는 Imgur로 옮기는 것이 좋습니다. 그러나 도메인을 완전히 신뢰하는 경우 도메인을 허용할 수도 있습니다.",
            afterAllow: "도메인을 허용한 후 변경 사항을 적용하려면 (트레이/작업 관리자에서) 완전히 닫고 {{platform}}을(를) 다시 시작해야 합니다.",
            allow: "허용하다",
            url: "차단된 URL"
        },
        imgur: {
            direct: "Imgur 링크는 {{etc}} 형식의 직접 링크여야 합니다.",
            copy: "직접 링크를 얻으려면 이미지를 마우스 오른쪽 버튼으로 클릭하고 '이미지 주소 복사'를 선택하세요."
        },
        wants: {
            caller: "{{callerName}}이(가) {{domain}}에 대한 연결을 허용하려고 합니다.",
            detail: "{{domain}}을(를) 인식하고 완전히 신뢰하지 않는 한 이 요청을 취소해야 합니다!",
            restart: "변경 사항을 적용하려면 {{appName}}을(를) 완전히 닫고 다시 시작해야 합니다.",
            type: {
                images: "이미지",
                styles: "CSS 및 테마",
                fonts: "글꼴"
            },
            content: "{{domain}}에서 로드할 수 있는 콘텐츠 유형은 다음과 같습니다.",
            understand: "나는 {{domain}}을(를) 전적으로 신뢰하며 연결을 허용할 때의 위험을 이해합니다.",
            button: {
                cancel: "취소",
                allow: "허용하다"
            },
            title: "호스트 권한"
        }
    },

    themes: {
        title: "테마",
        management: "테마 관리",
        description: "테마를 사용하여 Discord의 외관을 사용자 정의하세요. 로컬 .css 파일을 추가하거나 URL에서 직접 테마를 로드하세요. 톱니바퀴 아이콘이 있는 테마에는 수정할 수 있는 사용자 정의 가능한 설정이 있습니다.",
        local: "지역 테마",
        new: "새로운",
        pinned: "고정됨",
        stylus: "스타일러스 확장",
        bd: "BetterDiscord 테마",
        github: "GitHub",
        download: "테마를 찾고 계십니까? {{bd}}을(를) 확인하거나 {{github}}에서 검색하세요. BetterDiscord에서 다운로드할 때 '다운로드'를 클릭하고 .theme.css 파일을 테마 폴더에 넣으세요.",
        add: "추가하다",
        reset: "설정을 기본값으로 재설정",
        notCSS: "CSS 파일이 아닙니다. 원시 링크를 사용하는 것을 잊지 마세요!",
        okay: "좋아요!",
        checking: "확인 중...",
        valid: "유효한!",
        upload: "테마 업로드",
        openFolder: "테마 폴더 열기",
        loadMissing: "누락된 테마 로드",
        editQuickCSS: "QuickCSS 편집",
        editClient: "클라이언트테마 편집",
        website: "웹사이트 열기",
        discord: "디스코드 서버",
        downloadTheme: "다운로드",
        refresh: "새로 고치다",
        delete: "삭제",
        unknown: {
            title: "알려지지 않은",
            author: "알 수 없는 작성자",
            theme: "불일치 테마"
        },
        required: "다음 플러그인이 필요하지만 활성화되어 있지 않습니다.",
        homepage: "홈페이지",
        support: "지원하다",
        online: {
            title: "온라인 테마",
            description: "로컬 파일 대신 URL에서 직접 테마를 로드하세요. 소스가 변경되면 온라인 테마가 자동으로 업데이트되므로 수동으로 다운로드할 필요 없이 항상 최신 버전을 사용할 수 있습니다.",
            enable: "온라인 테마 활성화",
            enableDescription: "온라인 테마 로딩을 전환합니다. 비활성화하면 모든 온라인 테마가 꺼지고 새 테마를 추가할 수 없습니다."
        },
        quickActions: {
            title: "빠른 작업",
            description: "테마 관리를 위한 단축키입니다. 테마 폴더를 열어 새 테마를 추가하고, 빠른 스타일 조정을 위해 QuickCSS를 사용하거나, 변경 후 테마를 다시 로드하세요."
        },
        error: {
            userscript: "사용자 스크립트에서는 테마가 지원되지 않습니다!",
            stylus: "대신 {{stylus}}을 사용하여 테마를 설치할 수 있습니다!",
            expired: "유효하지 않거나 만료된 링크",
            text: "오류:"
        },
        copy: {
            url: "URL 복사",
            copied: "테마 URL이 복사되었습니다!",
            settings: "테마 설정 복사",
            copiedSettings: "테마 설정을 클립보드에 복사했습니다."
        },
        paste: {
            settings: "테마 설정 붙여넣기",
            empty: "클립보드가 비어 있습니다.",
            invalid: "클립보드에 유효한 설정 데이터가 없습니다.",
            pasted: "클립보드에서 테마 설정을 붙여넣었습니다."
        },
        settings: {
            for: "{{themeName}}에 대한 설정",
        },
        installed: {
            title: "설치된 테마",
            description: "여기에서 테마를 관리하세요. 로컬 테마는 테마 폴더에서 로드되고 온라인 테마는 URL에서 로드됩니다. 톱니바퀴 아이콘이 있는 테마에는 사용자 정의 가능한 설정이 있습니다.",
            count: "{{count}} 테마{{s}} 설치됨({{localCount}} 로컬, {{onlineCount}} 온라인) · {{enabledCount}} 활성화됨",
            search: "테마 검색...",
            loading: "테마 로드 중...",
            none: "아직 설치된 테마가 없습니다. 시작하려면 테마 폴더에 테마 파일을 추가하거나 위에 온라인 테마를 추가하세요.",
            noCriteria: "검색 또는 필터 기준과 일치하는 테마가 없습니다."
        },
        filter: {
            all: "모두 표시",
            online: "온라인 테마",
            local: "지역 테마",
            enabled: "활성화됨",
            disabled: "장애가 있는"
        },
        notification: {
            refresh: {
                title: "테마가 새로워졌습니다.",
                error: "테마를 새로고침하지 못했습니다."
            },
            failed: {
                download: "테마를 다운로드하지 못했습니다."
            }
        }
    },

    updater: {
        title: "업데이터",
        settings: "업데이터 설정",
        updates: "업데이트",
        updated: "업데이트되었습니다!",
        restart: "다시 시작하려면 여기를 클릭하세요.",
        repaired: "Plexcord가 수리되었습니다!",
        ok: "좋아요",
        preferences: {
            title: "환경설정 업데이트",
            description: "Plexcord가 최신 상태를 유지하는 방법을 제어하세요. 백그라운드에서 자동으로 업데이트하도록 선택하거나 새 업데이트가 있을 때 알림을 받을 수 있습니다.",
        },
        github: {
            local: "로컬 복사본에는 원격 저장소보다 최신 커밋이 있습니다. 이는 일반적으로 로컬 변경을 수행한 경우에 발생합니다. 업데이트하기 전에 보관하거나 재설정하세요."
        },
        error: {
            check: "업데이트를 확인하지 못했습니다. 자세한 내용은 콘솔을 확인하세요.",
            occurred: "알 수 없는 오류가 발생했습니다.",
            retrieve: "검색 실패 - 콘솔을 확인하세요",
            title: "이런!",
            tryAgain: "알 수 없는 오류가 발생했습니다. 다시 시도하거나 콘솔에서 자세한 내용을 확인하세요.",
            command: "{{path}} 명령을 찾을 수 없습니다. 설치한 후 다시 시도해 주세요.",
            code: "코드 {{code}}. 자세한 내용은 콘솔을 참조하세요.",
            running: "{{cmd}}을(를) 실행하는 동안 오류가 발생했습니다: {{error}}",
            failed: "그것도 실패했습니다. :( 설치 프로그램을 사용하여 업데이트하거나 다시 설치해 보세요!"
        },
        available: "업데이트가 1개 있습니다.",
        updateAvailable: "Plexcord 업데이트를 사용할 수 있습니다!",
        click: "업데이트를 보려면 여기를 클릭하세요.",
        available_plural: "{{count}} 업데이트가 있습니다",
        current: "최신 정보!",
        successful: {
            title: "업데이트 성공!",
            body: "업데이트되었습니다. 변경사항을 적용하려면 지금 다시 시작하시겠습니까?",
            button: {
                confirm: "다시 시작",
                cancel: "지금은 안돼!",
                update: "지금 업데이트",
                check: "업데이트 확인"
            },
            noFound: "업데이트를 찾을 수 없습니다."
        },
        automatically: {
            label: "자동 업데이트",
            description: "확인 메시지 없이 Plexcord를 자동으로 업데이트합니다."
        },
        notify: {
            label: "자동 업데이트가 완료되면 알림 받기",
            description: "Plexcord가 자동으로 업데이트되면 알림을 표시합니다."
        },
        repo: "레포",
        repoDescription: "이는 Plexcord가 업데이트를 가져오는 GitHub 저장소입니다.",
        loading: "로드 중...",
    },

    components: {
        error: {
            title: "안 돼!",
            render: "이 구성요소를 렌더링하는 동안 오류가 발생했습니다. 자세한 내용은 아래 및 콘솔에서 확인할 수 있습니다."
        },
        componentFailed: {
            message: "어 오! 이 페이지를 렌더링하지 못했습니다. 그러나 이 문제를 해결할 수 있는 업데이트가 있습니다. 지금 업데이트하고 다시 시작하시겠습니까?"
        },
        quickCSS: {
            title: "QuickCSS 편집기 열기",
            message: "QuickCSS 편집기는 여전히 백그라운드에 열려 있습니다.",
            detail: "그래도 Discord를 종료하시겠습니까? 그러면 QuickCSS 편집기도 닫힙니다.",
            cancel: "취소",
            close: "어쨌든 닫기"
        }
    },

    commands: {
        error: {
            execute: "'{{command}}' 명령을 실행하는 동안 오류가 발생했습니다."
        }
    },

    notifications: {
        dismiss: "알림 닫기",
        noYet: "아직 알림이 없습니다",
        settings: "알림 설정",
        log: {
            title: "알림 로그",
            clear: "알림 로그 지우기",
            sure: "확실합니까?",
            permamently: "{{count}} 알림{{s}}이 영구적으로 삭제됩니다. 이 작업은 취소할 수 없습니다.",
            button: {
                confirm: "하세요!",
                cancel: "괜찮아요"
            }
        }
    },

    memberlist: {
        error: {
            render: "{{key}} 회원 목록 데코레이터를 렌더링하지 못했습니다."
        }
    },

    message: {
        accessory: {
            error: {
                render: "{{key}} 메시지 액세서리를 렌더링하지 못했습니다."
            }
        },
        decoration: {
            error: {
                render: "{{key}} 메시지 장식을 렌더링하지 못했습니다."
            }
        }
    },

    utils: {
        toast: {
            copied: "클립보드에 복사되었습니다!"
        }
    },

    common: {
        unit: {
            year: "년도",
            years: "연령",
            month: "월",
            months: "개월",
            week: "주",
            weeks: "주",
            day: "낮",
            days: "날",
            hour: "시간",
            hours: "시간",
            minute: "분",
            minutes: "분",
            second: "두번째",
            seconds: "초",
            ago: "~ 전에",
            s: "에스"
        }
    },

    plugin: {
        noTrack: {
            name: "NoTrack",
            description: "Discord의 추적(분석/'과학'), 측정항목 및 Sentry 충돌 보고를 비활성화합니다.",
            option: {
                disableAnalytics: {
                    label: "분석 비활성화",
                    description: "Discord의 추적(분석/'과학'), 측정항목 및 Sentry 충돌 보고를 비활성화합니다."
                }
            }
        },
        settings: {
            name: "Settings",
            description: "설정 UI 및 디버그 정보를 추가합니다.",
            option: {
                language: {
                    label: "언어",
                    description: "Plexcord에 대해 선호하는 언어를 선택하세요."
                },
                settingsLocation: {
                    label: "설정 위치",
                    description: "Plexcord 설정 섹션의 위치를 ​​결정합니다."
                }
            }
        },
        supportHelper: {
            name: "Support Helper",
            description: "우리가 귀하에게 지원을 제공하는 데 도움이 됩니다",
            commands: {
                description: {
                    debug: "Plexcord 디버그 정보 보내기",
                    plugins: "Plexcord 플러그인 목록 보내기"
                }
            },
            modals: {
                outdated: {
                    title: "기다리다!",
                    body: "오래된 버전의 Plexcord를 사용하고 있습니다! 문제가 이미 해결되었을 가능성이 있습니다.",
                    footer: "지원을 요청하기 전에 먼저 업데이트하세요!",
                    button: {
                        cancel: "업데이트 보기",
                        confirm: "지금 업데이트 및 다시 시작",
                        secondaryConfirm: "내가 무엇을 하고 있는지 알고 있거나 업데이트할 수 없습니다."
                    }
                },
                updater: {
                    title: "기다리다!",
                    body: "지원을 제공하지 않는 외부 업데이트된 Plexcord 버전을 사용하고 있습니다!",
                    footer: "{{officially}}로 전환하거나 대신 패키지 관리자에게 지원을 문의하세요.",
                    officially: "공식적으로 지원되는 Plexcord 버전",
                    button: {
                        cancel: "취소",
                        confirm: "다운로드 페이지 보기",
                        now: "지금 업데이트"
                    },
                    toast: {
                        success: "성공! 다시 시작하는 중...",
                        already: "이미 최신 상태입니다!",
                        failed: "업데이트하지 못했습니다 :("
                    }
                },
                custom: {
                    title: "기다리다!",
                    header: "귀하는 우리가 지원하지 않는 Plexcord의 맞춤형 빌드를 사용하고 있습니다!",
                    body: "우리는 {{officialBuild}}에 대해서만 지원을 제공합니다. {{switch}}하거나 문제를 직접 파악하세요.",
                    footer: "이 규칙을 무시하면 지원을 받을 수 없습니다.",
                    official: "공식 빌드",
                    switch: "공식 빌드로 전환",
                    button: {
                        confirm: "이해했다",
                        secondaryConfirm: "다시 표시하지 않음"
                    }
                }
            },
            button: {
                debug: "/plexcord-debug 실행",
                plugins: "/plexcord-plugins 실행",
                snippet: "스니펫 실행"
            },
            toast: {
                success: "성공!",
                failed: "스니펫을 실행하지 못했습니다. :(",
                failedOpenInvite: "초대를 열지 못했습니다. 콘솔을 확인하세요. :(",
                upload: "플러그인 목록이 성공적으로 업로드되었습니다!",
                failedUpload: "플러그인 목록 파일을 업로드하지 못했습니다. 다시 시도해 주세요.",
                unableGenerate: "플러그인 목록을 생성하지 못했습니다."
            },
            dm: {
                warning: "지원을 위해 Plexcord 플러그인 개발자에게 비공개 메시지를 보내지 마세요!{{br}}대신 {{support}} 서버에 가입하고 Plexcord 지원 채널({{channel}})을 사용할 수 있습니다."
            },
            alert: {
                title: "경고: 플러그인 수가 많음",
                paragraph1: "100개 이상의 플러그인이 활성화되어 있습니다.",
                paragraph2: "플러그인의 양이 너무 많아서 지원을 받지 못할 수도 있습니다.",
                paragraph3: "문제는 플러그인 충돌로 인해 발생했을 가능성이 높습니다.",
                paragraph4: "문제를 해결하려면 일부 플러그인을 비활성화하는 것이 좋습니다.",
                paragraph5: "플러그인 목록이 텍스트 파일로 전송됩니다.",
            }
        },
        accountPanelServerProfile: {
            name: "AccountPanelServerProfile",
            description: "현재 서버에서 프로필을 보려면 왼쪽 하단에 있는 계정 패널을 마우스 오른쪽 버튼으로 클릭하세요.",
            option: {
                prioritizeServerProfile: {
                    label: "서버 프로필 우선 순위 지정",
                    description: "계정 패널을 마우스 왼쪽 버튼으로 클릭하면 서버 프로필의 우선 순위를 정합니다."
                }
            },
            context: {
                account: "계정 프로필 보기",
                server: "서버 프로필 보기",
                prioritize: "서버 프로필 우선 순위 지정"
            }
        },
        altKrispSwitch: {
            name: "AltKrispSwitch",
            description: "Krisp와 Standard 대신 None과 Krisp 사이에 소음 억제 팝아웃 스위치를 만듭니다."
        },
        alwaysAnimate: {
            name: "AlwaysAnimate",
            description: "애니메이션할 수 있는 모든 것을 애니메이션화합니다.",
            option: {
                icons: {
                    label: "아이콘",
                    description: "항상 서버 아이콘, 아바타, 장식 등에 애니메이션을 적용하세요."
                },
                statusEmojis: {
                    label: "상태 이모티콘",
                    description: "상태 이모티콘에 항상 애니메이션 적용"
                },
                serverBanners: {
                    label: "서버 배너",
                    description: "항상 서버 배너에 애니메이션 적용"
                },
                nameplates: {
                    label: "명판",
                    description: "항상 명판에 애니메이션 적용"
                },
                roleGradients: {
                    label: "역할 변화",
                    description: "항상 역할 변화에 애니메이션 적용"
                }
            }
        },
        alwaysExpandProfiles: {
            name: "AlwaysExpandProfiles",
            description: "항상 프로필 팝아웃을 전체 모달로 확장합니다."
        },
        alwaysExpandRoles: {
            name: "AlwaysExpandRoles",
            description: "항상 프로필 팝아웃에서 역할 목록을 확장합니다.",
            option: {
                hideArrow: {
                    label: "화살표 숨기기",
                    description: "화살표 숨기기"
                }
            }
        },
        animalese: {
            name: "Animalese",
            description: "메시지를 보낼 때마다 동물 횡단 동물을 재생합니다(야옹 소리를 많이 냅니다).",
            option: {
                volume: {
                    label: "용량",
                    description: "동물 소리의 볼륨"
                },
                speed: {
                    label: "속도",
                    description: "동물 소리의 속도"
                },
                pitch: {
                    label: "정점",
                    description: "피치 승수"
                },
                messageLengthLimit: {
                    label: "메시지 길이 제한",
                    description: "처리할 메시지의 최대 길이"
                },
                processOwnMessages: {
                    label: "자체 메시지 처리",
                    description: "자신의 메시지도 들을 수 있습니다."
                },
                soundQuality: {
                    label: "음질",
                    description: "사용할 사운드 품질",
                    high: "높은",
                    med: "중간",
                    low: "낮은",
                    lowest: "최저"
                }
            }
        },
        alwaysTrust: {
            name: "AlwaysTrust",
            description: "짜증나는 신뢰할 수 없는 도메인과 의심스러운 파일 팝업을 제거합니다.",
            option: {
                domain: {
                    label: "도메인",
                    description: "링크를 열 때 신뢰할 수 없는 도메인 팝업 제거"
                },
                file: {
                    label: "파일",
                    description: "링크를 열 때 '잠재적으로 위험한 다운로드' 팝업 제거"
                },
                noDeleteSafety: {
                    label: "삭제 안전 없음",
                    description: "서버 삭제 시 서버 이름 입력 요구 사항을 제거합니다."
                },
                confirmModal: {
                    label: "모달 확인",
                    description: "'삭제하시겠습니까?' 모달이 표시되어야 합니까?"
                }
            },
            alert: {
                title: "서버를 삭제하시겠습니까?",
                body: "그것이 분명하지 않다면 그것은 영구적입니다.",
                confirm: "삭제",
                cancel: "취소"
            }
        },
        anonymiseFileNames: {
            name: "AnonymiseFileNames",
            description: "업로드된 파일 이름 익명화",
            option: {
                anonymiseByDefault: {
                    label: "기본적으로 익명화",
                    description: "기본적으로 파일 이름은 익명화됩니다. 필요한 경우 업로드 팝업에서 이 기능을 비활성화할 수 있습니다."
                },
                spoilerMessages: {
                    label: "스포일러 메시지",
                    description: "스포일러로 표시된 파일 이름을 익명으로 처리합니다."
                },
                method: {
                    label: "방법",
                    description: "익명화 방법",
                    random: "무작위 문자",
                    consistent: "일관된",
                    timestamp: "타임스탬프"
                },
                randomisedLength: {
                    label: "무작위 길이",
                    description: "무작위 문자 길이"
                },
                consistent: {
                    label: "일관된",
                    description: "일관된 익명화 비밀"
                }
            },
            using: {
                anonymous: "익명의 파일 이름 사용",
                spoiler: "일반 파일 이름 사용"
            },
            spoiler: {
                description: "파일 스포일러 전환",
                toggle: "파일에 대한 스포일러를 전환합니다(기본값은 켜져 있음).",
                enabled: "스포일러가 활성화되었습니다!",
                disabled: "스포일러가 비활성화되었습니다!"
            }
        },
        appleMusic: {
            name: "AppleMusicRichPresence",
            description: "Apple Music을 위한 Discord의 풍부한 존재감!",
            about: "사용자 정의 가능한 활동 형식 문자열의 경우 여러 특수 문자열을 사용하여 활동에 트랙 데이터를 포함할 수 있습니다! {{name}}은 트랙 이름으로 대체됩니다. {{artist}}은 아티스트의 이름으로 대체됩니다. {{album}}은 앨범 이름으로 대체됩니다.",
            button: {
                listen: "Apple Music에서 듣기",
                songLink: "SongLink에서 보기"
            },
            option: {
                activityType: {
                    label: "활동 유형",
                    description: "어떤 활동 유형",
                    listening: "청취",
                    playing: "재생"
                },
                statusDisplayType: {
                    label: "상태 표시 유형",
                    description: "멤버 목록에 트랙/아티스트 이름 표시",
                    off: "표시 안 함(일반 청취 메시지 표시)",
                    artist: "아티스트 이름 표시",
                    track: "트랙 이름 표시"
                },
                refreshInterval: {
                    label: "새로 고침 간격",
                    description: "활동 새로 고침 간격(초)"
                },
                enableTimestamps: {
                    label: "타임스탬프 활성화",
                    description: "타임스탬프 활성화 여부"
                },
                enableButtons: {
                    label: "버튼 활성화",
                    description: "버튼 활성화 여부"
                },
                nameString: {
                    label: "이름 문자열",
                    description: "활동 이름 형식 문자열"
                },
                detailsString: {
                    label: "세부정보 문자열",
                    description: "활동 세부정보 형식 문자열"
                },
                stateString: {
                    label: "상태 문자열",
                    description: "활동 상태 형식 문자열"
                },
                largeImageType: {
                    label: "대형 이미지 유형",
                    description: "활동 자산 큰 이미지 유형",
                    album: "앨범 아트워크",
                    artist: "아티스트 작품",
                    disabled: "장애가 있는"
                },
                largeTextString: {
                    label: "큰 텍스트 문자열",
                    description: "활동 자산 큰 텍스트 형식 문자열"
                },
                smallImageType: {
                    label: "작은 이미지 유형",
                    description: "활동 자산 작은 이미지 유형",
                    album: "애플 뮤직 로고",
                    artist: "아티스트 작품",
                    disabled: "장애가 있는"
                },
                smallTextString: {
                    label: "작은 텍스트 문자열",
                    description: "활동 자산 작은 텍스트 형식 문자열"
                }
            }
        },
        arRpc: {
            name: "WebRichPresence(arRPC)",
            description: "Discord 웹에서 RPC를 활성화하는 arRPC용 클라이언트 플러그인(실험적)",
            use: {
                title: "arRPC를 사용하는 방법",
                enable: "{{link}}을 사용하여 서버를 실행한 다음 플러그인을 활성화하세요.",
                link: "GitHub 저장소의 지침을 따르세요."
            },
            toast: {
                connected: "arRPC에 연결됨",
                failed: "arRPC에 연결하지 못했습니다. 실행 중입니까?",
                retry: "다시 해 보다"
            }
        },
        atSomeone: {
            name: "AtSomeone",
            description: "@someone을 사용하면 누군가를 무작위로 언급할 수 있습니다."
        },
        autoDNDWhilePlaying: {
            name: "AutoDndWhilePlaying",
            description: "게임을 시작할 때 온라인 상태(온라인, 유휴, 방해 금지)를 자동으로 업데이트합니다.",
            option: {
                statusToSet: {
                    label: "설정할 상태",
                    description: "게임을 시작할 때 설정할 상태",
                    online: "온라인",
                    dnd: "방해하지 마세요",
                    idle: "게으른",
                    invisible: "보이지 않는"
                },
                excludeInvisible: {
                    label: "보이지 않는 항목 제외",
                    description: "상태가 숨김으로 설정된 동안 자동 상태 변경 방지"
                }
            }
        },
        autoZipper: {
            name: "AutoZipper",
            description: "Discord에 업로드하기 전에 지정된 파일 형식과 폴더를 자동으로 압축합니다.",
            option: {
                extensions: {
                    label: "확장",
                    description: "자동 압축할 파일 확장자의 쉼표로 구분된 목록(예: .psd,.blend,.exe,.dmg)"
                }
            }
        },
        bannersEverywhere: {
            name: "BannersEverywhere",
            description: "회원 목록에 배너를 표시합니다.",
            option: {
                animate: {
                    label: "생기 있게 하다",
                    description: "배너 애니메이션"
                },
                preferNameplate: {
                    label: "명판 선호",
                    description: "배너보다 명판을 선호합니다."
                }
            }
        },
        betterActivities: {
            name: "BetterActivities",
            description: "회원 목록에 활동 아이콘을 표시하고 모든 활동을 표시하도록 허용합니다.",
            option: {
                memberList: {
                    label: "회원 목록",
                    description: "회원 목록에 활동 아이콘 표시"
                },
                iconSize: {
                    label: "아이콘 크기",
                    description: "활동 아이콘의 크기"
                },
                specialFirst: {
                    label: "스페셜 퍼스트",
                    description: "특별 활동 먼저 표시 (현재 Spotify 및 Twitch)"
                },
                renderGifs: {
                    label: "GIF 렌더링",
                    description: "GIF 렌더링 허용"
                },
                removeGameActivityStatus: {
                    label: "'게임 활동' 상태 제거",
                    description: "게임 활동 아이콘 및 상태 제거"
                },
                userPopout: {
                    label: "사용자 팝아웃",
                    description: "프로필 팝아웃/사이드바에 모든 활동 표시"
                },
                hideTooltip: {
                    label: "툴팁 숨기기",
                    description: "다양한 장소에서 활동을 숨깁니다."
                },
                allActivitiesStyle: {
                    label: "모든 활동 스타일",
                    description: "모든 활동을 표시하는 스타일",
                    list: "목록",
                    carousel: "회전목마",
                    left: "왼쪽",
                    right: "오른쪽"
                }
            }
        },
        betterAudioPlayer: {
            name: "BetterAudioPlayer",
            description: "오디오 첨부 플레이어에 분광기와 오실로스코프 시각화 기능을 추가합니다.",
            option: {
                oscilloscope: {
                    label: "오실로스코프",
                    description: "오실로스코프 시각화 기능 활성화"
                },
                spectrograph: {
                    label: "분광기",
                    description: "분광기 시각화 기능 활성화"
                },
                oscilloscopeSolidColor: {
                    label: "오실로스코프 단색",
                    description: "오실로스코프에 그라데이션 대신 단색을 사용하세요."
                },
                oscilloscopeColor: {
                    label: "오실로스코프 색상",
                    description: "단색이 활성화된 경우 오실로스코프의 색상"
                },
                spectrographSolidColor: {
                    label: "분광기 단색",
                    description: "그라데이션 대신 분광기에 단색을 사용합니다."
                },
                spectrographColor: {
                    label: "분광기 색상",
                    description: "단색이 활성화된 경우 분광기의 색상"
                },
                forceMoveBelow: {
                    label: "아래로 강제 이동",
                    description: "시각화 장치를 오디오 컨트롤 아래에 강제로 배치"
                }
            },
            toast: {
                invalidColorFormat: "{{settingKey}}의 색상 형식이 잘못되었습니다. 'R, G, B' 또는 '#RRGGBB' 형식인지 확인하세요."
            }
        },
        betterBanReasons: {
            name: "BetterBanReasons",
            description: "Discord 금지 모달에서 사용할 사용자 정의 이유를 생성하거나 옵션 대신 기본적으로 텍스트 입력을 표시합니다.",
            option: {
                reasons: {
                    label: "이유",
                    description: "맞춤 이유"
                },
                isTextInputDefault: {
                    label: "텍스트 입력이 기본값인가요?",
                    description: "기본적으로 선택 메뉴 대신 텍스트 입력을 표시합니다. ('기타' 옵션을 클릭하는 것과 동일)"
                }
            },
            title: "이유",
            placeholder: "이유",
            add: "다른 이유 추가"
        },
        betterBlockedUsers: {
            name: "BetterBlockedUsers",
            description: "차단된 사용자 목록에서 검색할 수 있으며 설정에서 이름을 선택할 수 있습니다.",
            placeholder: "사용자 검색..."
        },
        betterCommands: {
            name: "BetterCommands",
            description: "기타 개선을 통해 명령 시스템을 강화합니다.",
            option: {
                autoFillArguments: {
                    label: "자동 채우기 인수",
                    description: "필수 인수 대신 모든 인수로 명령을 자동으로 채웁니다."
                },
                allowNewlinesInCommands: {
                    label: "명령에 줄 바꿈 허용",
                    description: "명령 입력에 줄바꿈 허용(CTRL + Shift + Enter)"
                }
            },
            command: {
                refresh: {
                    description: "Discord 애플리케이션 명령을 로컬로 새로 고칩니다.",
                    user: "시도하고 새로 고칠 특정 사용자",
                    refreshing: "애플리케이션 명령을 새로 고치는 중...",
                    refreshed: "명령이 새로 고쳐졌습니다!",
                    failed: "명령을 새로 고치지 못했습니다. 자세한 내용은 콘솔을 확인하세요."
                }
            }
        },
        betterFolders: {
            name: "BetterFolders",
            description: "전용 사이드바에 서버 폴더를 표시하고 폴더 관련 개선 사항을 추가합니다.",
            option: {
                sidebar: {
                    label: "사이드바",
                    description: "전용 사이드바의 폴더에서 서버 표시"
                },
                sidebarAnim: {
                    label: "사이드바 애니메이션",
                    description: "폴더 사이드바 열기 애니메이션"
                },
                closeAllFolders: {
                    label: "모든 폴더 닫기",
                    description: "폴더에 없는 서버를 선택할 때 모든 폴더를 닫습니다."
                },
                closeAllHomeButton: {
                    label: "모든 홈 버튼 닫기",
                    description: "홈 버튼을 클릭하면 모든 폴더를 닫습니다."
                },
                closeOthers: {
                    label: "기타 닫기",
                    description: "폴더를 열 때 다른 폴더 닫기"
                },
                closeServerFolder: {
                    label: "서버 폴더 닫기",
                    description: "해당 폴더에서 서버를 선택할 때 폴더를 닫습니다."
                },
                forceOpen: {
                    label: "강제 오픈",
                    description: "해당 폴더의 서버로 전환할 때 해당 폴더를 강제로 엽니다."
                },
                keepIcons: {
                    label: "아이콘 유지",
                    description: "BetterFolders 사이드바에 기본 길드 바 폴더가 열리면 길드 아이콘이 계속 표시됩니다."
                },
                showFolderIcon: {
                    label: "폴더 아이콘 표시",
                    description: "BetterFolders 사이드바의 폴더 길드 위에 폴더 아이콘 표시",
                    never: "절대",
                    always: "언제나",
                    moreThanOne: "두 개 이상의 폴더가 확장된 경우"
                }
            }
        },
        betterGifAltText: {
            name: "BetterGifAltText",
            description: "GIF 대체 텍스트를 단순히 'GIF'에서 gif 태그/파일 이름을 포함하도록 변경합니다."
        },
        betterGifPicker: {
            name: "BetterGifPicker",
            description: "기본적으로 GIF 선택기가 즐겨찾는 카테고리를 열도록 합니다.",
            option: {
                keepOpen: {
                    label: "계속 열어두세요",
                    description: "GIF를 선택한 후 GIF 선택기를 열어 둡니다."
                }
            }
        },
        betterInvites: {
            name: "BetterInvites",
            description: "이름을 클릭하여 참여하기 전에 초대 만료 날짜를 확인하고 초대자 프로필을 확인하며 서버 미리보기를 확인하세요.",
            render: {
                tip: "이 초대는 {{time}}에 만료됩니다.",
                header: "{{name}}님이 귀하를 {{server}}에 초대했습니다.",
                never: "만료되지 않음"
            }
        },
        betterNotesBox: {
            name: "BetterNotesBox",
            description: "메모 숨기기 또는 맞춤법 검사 비활성화(설정에서 구성!!)",
            option: {
                hide: {
                    label: "메모 숨기기",
                    description: "사용자 팝아웃에서 메모 상자 숨기기"
                },
                noSpellCheck: {
                    label: "맞춤법 검사 안함",
                    description: "메모에서 맞춤법 검사 비활성화"
                }
            }
        },
        betterPlusReacts: {
            name: "BetterPlusReacts",
            description: ":emoji: 앞에 있는 플러스의 양은 그것을 추가할 메시지입니다."
        },
        betterRoleContext: {
            name: "BetterRoleContext",
            description: "사용자 프로필에서 역할을 마우스 오른쪽 버튼으로 클릭하면 역할 색상 복사 / 역할 편집 / 역할 아이콘 보기 옵션이 추가되었습니다.",
            option: {
                roleIconFileFormat: {
                    label: "역할 아이콘 파일 형식",
                    description: "역할 아이콘을 볼 때 사용할 파일 형식"
                }
            },
            context: {
                copyColor: "역할 색상 복사",
                editRole: "역할 편집",
                viewIcon: "역할 아이콘 보기"
            }
        },
        betterRoleDot: {
            name: "BetterRoleDot",
            description: "RoleDot(접근성 설정) 클릭 시 역할 색상을 복사합니다. 또한 RoleDot과 색상 이름을 동시에 사용할 수 있습니다.",
            option: {
                bothStyles: {
                    label: "두 스타일 모두",
                    description: "역할 점과 색상 이름을 모두 표시"
                },
                copyRoleColorInProfilePopout: {
                    label: "프로필 팝아웃에서 역할 색상 복사",
                    description: "프로필 팝아웃에서 역할 점을 클릭하여 역할 색상을 복사할 수 있도록 허용"
                }
            }
        },
        betterSessions: {
            name: "BetterSessions",
            description: "세션(장치) 메뉴를 강화합니다. 정확한 타임스탬프를 보고, 각 세션에 맞춤 이름을 지정하고, 새 세션에 대한 알림을 받을 수 있습니다.",
            new: "새로운",
            newSessions: "새 세션:",
            rename: "이름 바꾸기",
            newDevice: "새 장치 이름",
            resetName: "이름 재설정",
            save: "구하다",
            cancel: "취소",
            option: {
                backgroundCheck: {
                    label: "배경 조사",
                    description: "백그라운드에서 새 세션을 확인하고 감지되면 알림을 표시합니다."
                },
                checkInterval: {
                    label: "확인 간격",
                    description: "백그라운드에서 새 세션을 확인하는 빈도(활성화된 경우)(분)"
                }
            }
        },
        betterSettings: {
            name: "BetterSettings",
            description: "설정 메뉴 열기 경험을 향상시킵니다.",
            option: {
                disableFade: {
                    label: "페이드 비활성화",
                    description: "크로스페이드 애니메이션 비활성화"
                },
                organizeMenu: {
                    label: "메뉴 정리",
                    description: "설정 톱니바퀴 상황에 맞는 메뉴를 카테고리로 구성합니다."
                },
                eagerLoad: {
                    label: "열정적인 로드",
                    description: "메뉴를 처음 열 때 로딩 지연 제거"
                }
            },
            alert: {
                title: "다시 시작해야 함",
                restart: "다시 시작해야 하는 설정을 변경했습니다.",
                confirm: "지금 다시 시작",
                cancel: "나중에!"
            }
        },
        betterUploadButton: {
            name: "BetterUploadButton",
            description: "한 번의 클릭으로 업로드, 마우스 오른쪽 버튼 클릭으로 메뉴 열기"
        },
        biggerStreamPreview: {
            name: "BiggerStreamPreview",
            description: "이 플러그인을 사용하면 스트림 미리보기를 확대할 수 있습니다.",
            context: {
                viewPreview: "스트림 미리보기 보기"
            }
        },
        blockKeywords: {
            name: "BlockKeywords",
            description: "특정 사용자 정의 키워드가 포함된 메시지를 보낸 사용자가 차단된 것처럼 차단합니다.",
            option: {
                blockedWords: {
                    label: "차단된 단어",
                    description: "차단할 단어를 쉼표로 구분한 목록"
                },
                useRegex: {
                    label: "정규식 사용",
                    description: "메시지 내용을 확인할 때 각 값을 정규식으로 사용(고급)"
                },
                caseSensitive: {
                    label: "대소문자 구분",
                    description: "대소문자 구분 검색 사용 여부"
                },
                ignoreBlockedMessages: {
                    label: "차단된 메시지 무시",
                    description: "(최근) 새 메시지 표시줄을 완전히 무시합니다."
                }
            }
        },
        blockKrisp: {
            name: "BlockKrisp",
            description: "Krisp이 로드되지 않도록 방지"
        },
        blurNSFW: {
            name: "BlurNSFW",
            description: "마우스를 가져갈 때까지 NSFW 채널의 첨부 파일을 흐리게 처리합니다.",
            option: {
                blurAmount: {
                    label: "흐림 정도",
                    description: "흐림 정도(픽셀 단위)"
                },
                blurAllChannels: {
                    label: "모든 채널을 흐리게 합니다.",
                    description: "NSFW뿐만 아니라 모든 채널의 첨부 파일을 흐리게 처리합니다."
                }
            }
        },
        bypassPinPrompt: {
            name: "BypassPinPrompt",
            description: "핀 기능을 사용할 때 핀 프롬프트를 우회합니다."
        },
        bypassStatus: {
            name: "BypassStatus",
            description: "방해 금지 모드에서도 특정 소스로부터 알림을 받을 수 있습니다. 사용자/채널/길드를 마우스 오른쪽 버튼으로 클릭하여 방해 금지 모드를 우회하도록 설정하세요.",
            context: {
                remove: "상태 우회 제거",
                add: "상태 우회 추가"
            },
            option: {
                guilds: {
                    label: "길드",
                    description: "우회를 허용하는 길드(길드 내 어느 곳에서나 핑을 보낼 때 알림)",
                    placeholder: "쉼표로 구분하세요."
                },
                channels: {
                    label: "채널",
                    description: "바이패스를 허용할 채널(해당 채널에서 ping이 실행될 때 알림)",
                    placeholder: "쉼표로 구분하세요."
                },
                users: {
                    label: "사용자",
                    description: "사용자가 우회하도록 허용(DM으로 전송된 모든 메시지에 대해 알림)",
                    placeholder: "쉼표로 구분하세요."
                },
                allowOutsideOfDms: {
                    label: "DM 외부 허용",
                    description: "선택한 사용자가 DM 외부에서도 상태를 우회하도록 허용(채널/길드 우회처럼 작동하지만 선택한 사용자가 보낸 모든 메시지에 적용됩니다)"
                },
                notificationSound: {
                    label: "알림음",
                    description: "알림 소리를 재생할지 여부"
                },
                respectSilentPings: {
                    label: "조용한 핑을 존중하세요",
                    description: "자동 핑 존중(@silent / 알림 억제)"
                },
                statusToUse: {
                    label: "사용할 상태",
                    description: "화이트리스트에 사용할 상태",
                    online: "온라인",
                    idle: "게으른",
                    dnd: "방해하지 마세요",
                    invisible: "보이지 않는"
                }
            }
        },
        cakeDay: {
            name: "CakeDay",
            description: "케이크 아이콘으로 사용자 생일을 추적하고 표시합니다.",
            context: {
                label: "생일",
                setBirthday: "생일 설정",
                clearBirthday: "생일 지우기",
                current: "현재의:"
            },
            option: {
                chat: {
                    label: "채팅",
                    description: "채팅에서 사용자 이름 옆에 케이크 아이콘 표시"
                },
                memberList: {
                    label: "회원 목록",
                    description: "회원 목록에 케이크 아이콘 표시"
                },
                profileBadge: {
                    label: "프로필 배지",
                    description: "사용자 프로필에 케이크 배지 표시"
                },
                notificationSound: {
                    label: "알림음",
                    description: "생일 알림이 전송되면 소리 재생"
                },
                userList: {
                    label: "저장된 생일",
                    description: "저장된 생일 관리"
                }
            },
            locations: {
                chat: {
                    label: "채팅",
                    description: "채팅의 사용자 이름 옆"
                },
                memberList: {
                    label: "회원 목록",
                    description: "회원 목록에서"
                }
            },
            toast: {
                success: "생일 설정 성공!",
                invalid: "생일 형식이 잘못되었습니다! DD/MM만 허용됩니다.",
                cleared: "생일이 성공적으로 삭제되었습니다!"
            },
            notification: {
                title: "🎂 오늘 생일이에요!",
                body: "오늘은 {{username}}의 생일입니다!"
            },
            modal: {
                title: "{{username}}의 생일을 설정하세요",
                description: "DD/MM 형식으로 생일을 입력하세요(예: 25/12).",
                placeholder: "예를 들어 12/25",
                current: "현재 생일:",
                set: "생일 설정",
                cancel: "취소",
                birthday: "내 생일이야! 🎂",
                saved: "저장된 생일",
                savedDesc: "아직 저장된 생일이 없습니다. 생일을 추가하려면 사용자를 마우스 오른쪽 버튼으로 클릭하세요!",
                today: "오늘",
                remove: "제거하다",
                loading: "로드 중...",
                save: "구하다",
                edit: "편집하다"
            }
        },
        callTimer: {
            name: "CallTimer",
            description: "모든 음성 통화에 통화 타이머 표시",
            option: {
                format: {
                    label: "체재",
                    description: "컴팩트하거나 사람이 읽을 수 있는 형식",
                    human: "30일 23시 00분 42초"
                },
                allCallTimers: {
                    label: "모든 통화 타이머",
                    description: "서버의 모든 사용자에게 통화 타이머 표시"
                },
                showWithoutHover: {
                    label: "마우스오버 없이 표시",
                    description: "마우스를 가져갈 필요 없이 항상 타이머 표시"
                },
                showRoleColor: {
                    label: "역할 색상 표시",
                    description: "사용자의 역할 색상으로 표시(ShowRoleColor 플러그인이 활성화된 경우)"
                },
                trackSelf: {
                    label: "자신을 추적하세요",
                    description: "나만의 타이머도 보여주세요"
                },
                showSeconds: {
                    label: "초 표시",
                    description: "타이머에 초 표시"
                },
                watchLargeGuilds: {
                    label: "대규모 길드 보기",
                    description: "대규모 길드의 사용자를 추적합니다. 활성 음성 사용자가 있는 대규모 길드에 속해 있는 경우 이로 인해 지연이 발생할 수 있습니다. 최대 2000명의 활성 음성 사용자를 대상으로 문제 없이 테스트되었습니다."
                },
                fixUI: {
                    label: "UI 수정",
                    description: "어떤 경우에는 타이머로 인해 사용자 인터페이스가 중단될 수 있습니다. 문제를 해결하려면 이 옵션을 활성화하세요."
                }
            }
        },
        channelBadges: {
            name: "ChannelBadges",
            description: "유형에 따라 채널에 배지를 추가합니다.",
            badge: {
                private: "이 채널은 잠겨 있습니다.",
                nsfw: "이 채널은 NSFW로 표시되어 있습니다.",
                rules: "이 채널은 서버 규칙 채널입니다."
            },
            option: {
                oneBadgePerChannel: {
                    label: "채널당 하나의 배지",
                    description: "채널당 하나의 배지만 표시"
                },
                showTextBadge: {
                    label: "텍스트 배지 표시",
                    description: "텍스트 배지 표시"
                },
                showVoiceBadge: {
                    label: "음성 배지 표시",
                    description: "Voice 배지 표시"
                },
                showCategoryBadge: {
                    label: "카테고리 배지 표시",
                    description: "카테고리 배지 표시"
                },
                showDirectoryBadge: {
                    label: "디렉토리 배지 표시",
                    description: "디렉터리 배지 표시"
                },
                showAnnouncementThreadBadge: {
                    label: "공지사항 스레드 배지 표시",
                    description: "공지사항 스레드 배지 표시"
                },
                showPublicThreadBadge: {
                    label: "공개 스레드 배지 표시",
                    description: "공개 스레드 배지 표시"
                },
                showPrivateThreadBadge: {
                    label: "비공개 스레드 배지 표시",
                    description: "비공개 스레드 배지 표시"
                },
                showStageBadge: {
                    label: "무대 배지 표시",
                    description: "스테이지 배지 표시"
                },
                showAnnouncementBadge: {
                    label: "공지사항 배지 표시",
                    description: "공지사항 배지 표시"
                },
                showForumBadge: {
                    label: "포럼 배지 표시",
                    description: "포럼 배지 표시"
                },
                showMediaBadge: {
                    label: "미디어 배지 표시",
                    description: "미디어 배지 표시"
                },
                showNSFWBadge: {
                    label: "NSFW 배지 표시",
                    description: "NSFW 배지 표시"
                },
                showLockedBadge: {
                    label: "잠긴 배지 표시",
                    description: "잠김 배지 표시"
                },
                showRulesBadge: {
                    label: "규칙 배지 표시",
                    description: "규칙 배지 표시"
                },
                showUnknownBadge: {
                    label: "알 수 없는 배지 표시",
                    description: "알 수 없음 배지 표시"
                },
                textBadgeLabel: {
                    label: "텍스트 배지 라벨",
                    description: "텍스트 배지 라벨",
                    default: "텍스트"
                },
                voiceBadgeLabel: {
                    label: "음성 배지 라벨",
                    description: "음성 배지 라벨",
                    default: "목소리"
                },
                categoryBadgeLabel: {
                    label: "카테고리 배지 라벨",
                    description: "카테고리 배지 라벨",
                    default: "범주"
                },
                announcementBadgeLabel: {
                    label: "공지사항 스레드 배지 라벨",
                    description: "공지사항 스레드 배지 라벨",
                    default: "소식"
                },
                announcementThreadBadgeLabel: {
                    label: "공지사항 스레드 배지 라벨",
                    description: "공지사항 스레드 배지 라벨",
                    default: "뉴스 스레드"
                },
                publicThreadBadgeLabel: {
                    label: "공개 스레드 배지 라벨",
                    description: "공개 스레드 배지 라벨",
                    default: "실"
                },
                privateThreadBadgeLabel: {
                    label: "개인 실 배지 라벨",
                    description: "비공개 스레드 배지 라벨",
                    default: "비공개 스레드"
                },
                stageBadgeLabel: {
                    label: "무대 배지 라벨",
                    description: "무대 배지 라벨",
                    default: "단계"
                },
                directoryBadgeLabel: {
                    label: "디렉토리 배지 라벨",
                    description: "디렉토리 배지 라벨",
                    default: "예배 규칙서"
                },
                forumBadgeLabel: {
                    label: "포럼 배지 라벨",
                    description: "포럼 배지 라벨",
                    default: "법정"
                },
                mediaBadgeLabel: {
                    label: "미디어 배지 라벨",
                    description: "미디어 배지 라벨",
                    default: "메디아"
                },
                nsfwBadgeLabel: {
                    label: "NSFW 배지 라벨",
                    description: "NSFW 배지 라벨",
                    default: "NSFW"
                },
                lockedBadgeLabel: {
                    label: "잠긴 배지 라벨",
                    description: "잠긴 배지 라벨",
                    default: "잠김"
                },
                rulesBadgeLabel: {
                    label: "규칙 배지 라벨",
                    description: "규칙 배지 라벨",
                    default: "규칙"
                },
                unknownBadgeLabel: {
                    label: "알 수 없는 배지 라벨",
                    description: "알 수 없는 배지 라벨",
                    default: "알려지지 않은"
                },
                textBadgeColor: {
                    label: "텍스트 배지 색상",
                    description: "텍스트 배지 색상"
                },
                voiceBadgeColor: {
                    label: "음성 배지 색상",
                    description: "음성 배지 색상"
                },
                categoryBadgeColor: {
                    label: "카테고리 배지 색상",
                    description: "카테고리 배지 색상"
                },
                announcementBadgeColor: {
                    label: "공지사항 스레드 배지 색상",
                    description: "공지사항 스레드 배지 색상"
                },
                announcementThreadBadgeColor: {
                    label: "공지사항 스레드 배지 색상",
                    description: "공지사항 스레드 배지 색상"
                },
                publicThreadBadgeColor: {
                    label: "공개 스레드 배지 색상",
                    description: "공개 스레드 배지 색상"
                },
                privateThreadBadgeColor: {
                    label: "개인 스레드 배지 색상",
                    description: "비공개 스레드 배지 색상"
                },
                stageBadgeColor: {
                    label: "무대배지 색상",
                    description: "무대 뱃지 색상"
                },
                directoryBadgeColor: {
                    label: "디렉토리 배지 색상",
                    description: "디렉토리 배지 색상"
                },
                forumBadgeColor: {
                    label: "포럼 배지 색상",
                    description: "포럼 배지 색상"
                },
                mediaBadgeColor: {
                    label: "미디어 배지 색상",
                    description: "미디어 배지 색상"
                },
                nsfwBadgeColor: {
                    label: "NSFW 배지 색상",
                    description: "NSFW 배지 색상"
                },
                lockedBadgeColor: {
                    label: "잠긴 배지 색상",
                    description: "잠긴 배지 색상"
                },
                rulesBadgeColor: {
                    label: "규칙 배지 색상",
                    description: "규칙 배지 색상"
                },
                unknownBadgeColor: {
                    label: "알 수 없는 배지 색상",
                    description: "알 수 없는 배지 색상"
                }
            },
            badges: {
                text: "텍스트",
                voice: "목소리",
                category: "범주",
                announcement: "소식",
                announcementThread: "뉴스 스레드",
                publicThread: "실",
                privateThread: "비공개 스레드",
                stage: "단계",
                directory: "예배 규칙서",
                forum: "법정",
                media: "메디아",
                nsfw: "NSFW",
                locked: "잠김",
                rules: "규칙",
                unknown: "알려지지 않은"
            },
            tooltip: {
                locked: "이 채널은 잠겨 있습니다.",
                nsfw: "이 채널은 NSFW로 표시되어 있습니다."
            }
        },
        channelTabs: {
            name: "ChannelTabs",
            description: "브라우저처럼 자주 방문하는 채널을 탭으로 그룹화하세요.",
            open: "새 탭에서 열기",
            animation: {
                title: "애니메이션 컨트롤",
                description: "채널 탭에 대한 특정 애니메이션을 활성화하거나 비활성화합니다. 각 옵션은 독립적으로 전환될 수 있습니다.",
                placeholder: "활성화할 애니메이션을 선택하세요...",
                tabHover: "탭 호버 효과(리프트 + 스케일)",
                tabSelection: "선택한 탭 리프트 애니메이션",
                tabDragDrop: "탭 드래그 앤 드롭(고스트 + 재정렬)",
                tabEnterExit: "탭 Enter/Exit 슬라이드(생성 + 닫기)",
                tabIconPop: "선택 시 아이콘 팝업(아이콘 확대)",
                closeRotation: "닫기 버튼 회전",
                plusPulse: "플러스 버튼 펄스",
                mentionGlow: "멘션 배지 글로우",
                compactExpand: "컴팩트 모드 확장",
                selectedBorder: "선택한 탭 파란색 테두리",
                selectedBackground: "선택한 탭 배경색",
                tabShadows: "탭 그림자 효과",
                tabRepositioning: "탭 위치 변경(부드러운 위치 변경)",
                resizeHandle: "크기 조정 핸들 페이드",
                questActivate: "활성 퀘스트 그라데이션"
            },
            bookmark: {
                label: "서표",
                unknown: "알 수 없는 사용자",
                folder: "접는 사람",
                add: "북마크에 추가",
                edit: "북마크 편집",
                delete: "북마크 삭제",
                remove: "북마크에서 제거",
                removeFolder: "폴더에서 북마크 제거",
                loading: "북마크 로드 중...",
                noBookmarks: "북마크가 없습니다. 열린 탭을 추가하거나 마우스 오른쪽 버튼을 클릭하여 숨길 수 있습니다.",
                quests: "퀘스트",
                messageRequests: "메시지 요청",
                friends: "친구",
                shop: "가게",
                library: "도서관",
                discovery: "발견",
                nitro: "니트로",
                icymi: "아이씨미",
                activity: "활동",
                specialPage: "특별 페이지",
                searchPlaceholder: "북마크 검색",
            },
            button: {
                save: "구하다",
                delete: "삭제",
                cancel: "취소",
                reset: "재설정",
                close: "닫기",
            },
            context: {
                label: "ChannelTabs 상황에 맞는 메뉴",
                bookmark: "ChannelTabs 북마크 컨텍스트 메뉴",
                tab: "ChannelTabs 탭 상황에 맞는 메뉴",
                compact: "콤팩트",
                bookmarkBar: "북마크바",
                openAll: "북마크에서 모두 열기",
                openNew: "새 탭에서 열기",
                folderMenu: "북마크 폴더 메뉴",
                close: {
                    tab: "탭 닫기",
                    otherTabs: "다른 탭 닫기",
                    tabsToRight: "오른쪽 탭 닫기",
                    tabsToLeft: "왼쪽 탭 닫기",
                    reopen: "닫힌 탭 다시 열기",
                    allTabs: "모든 탭 닫기"
                }
            },
            error: {
                noLogin: "로그인된 계정이 없나요?"
            },
            modal: {
                add: {
                    title: "폴더에 북마크 추가",
                    select: "폴더 선택",
                    create: "하나 만들기"
                },
                folderIcon: {
                    title: "폴더 아이콘 선택",
                    preview: "미리보기",
                    iconColor: "아이콘 색상",
                    search: "검색",
                    searchPlaceholder: "{{count}}개 아이콘 검색...",
                    folderName: "폴더 이름",
                    folderColor: "폴더 색상",
                    folderIcon: "폴더 아이콘",
                    chooseIcon: "아이콘 선택",
                    useDefaultIcon: "기본 아이콘 사용"
                },
                edit: {
                    title: "북마크 편집",
                    name: "Bookmark Name",
                    folder: "폴더 색상"
                },
                delete: {
                    title: "확실합니까?",
                    description: "북마크 폴더를 삭제하면 그 안에 있는 모든 북마크도 삭제됩니다."
                }
            },
            option: {
                onStartup: {
                    label: "시작 시",
                    description: "시작 시 탭으로 수행할 작업",
                    nothing: "아무것도 하지 않음(친구 탭에서 열기)",
                    remember: "마지막 세션의 탭 기억",
                    open: "특정 탭 집합에서 열기"
                },
                tabSet: {
                    label: "탭 세트"
                },
                noPomeloNames: {
                    label: "포멜로 이름 없음",
                    description: "DM에 사용자 이름 대신 표시 이름을 사용하세요."
                },
                showStatusIndicators: {
                    label: "상태 표시기 표시",
                    description: "DM에 대한 상태 표시기 표시"
                },
                showBookmarkBar: {
                    label: "북마크바 표시"
                },
                persistUnreadCountFallback: {
                    label: "읽지 않음 수 대체값 유지",
                    description: "탭과 북마크에 대해 다시 로드 간 읽지 않음 배지 대체값을 유지"
                },
                bookmarkNotificationDot: {
                    label: "북마크 알림 점",
                    description: "북마크에 알림 점 표시"
                },
                widerTabsAndBookmarks: {
                    label: "더 넓은 탭과 북마크",
                    description: "더 큰 모니터를 위해 탭과 북마크의 길이를 연장하세요"
                },
                tabWidthScale: {
                    label: "탭 너비 스케일",
                    description: "탭 너비 배율(백분율) - 탭 가장자리를 드래그하여 조정 가능"
                },
                renderAllTabs: {
                    label: "모든 탭 렌더링",
                    description: "더 빠른 전환을 위해 모든 탭을 메모리에 캐시된 상태로 유지합니다(캐시 스크롤 위치 및 상태)."
                },
                switchToExistingTab: {
                    label: "기존 탭으로 전환",
                    description: "탐색하려는 채널에 탭이 이미 존재하는 경우 탭으로 전환하세요."
                },
                createNewTabIfNotExists: {
                    label: "존재하지 않는 경우 새 탭 만들기",
                    description: "탐색 중인 채널에 탭이 없으면 새 탭을 만듭니다."
                },
                enableRapidNavigation: {
                    label: "빠른 탐색 활성화",
                    description: "빠른 탐색 동작 활성화 - 채널 간 빠르게 탐색하면 새 탭을 만드는 대신 현재 탭이 대체됩니다."
                },
                rapidNavigationThreshold: {
                    label: "신속한 탐색 임계값",
                    description: "빠른 탐색을 위한 시간 창(밀리초)입니다. 이 시간 내에 새 채널을 만드는 대신 새 채널이 현재 탭을 대체합니다."
                },
                tabBarPosition: {
                    label: "탭바 위치",
                    description: "탭바의 위치",
                    top: "맨 위",
                    bottom: "맨 아래"
                },
                enableNumberKeySwitching: {
                    label: "숫자 키 전환 활성화",
                    description: "탭을 전환하려면 숫자 키(1~9)를 활성화하세요."
                },
                numberKeySwitchCount: {
                    label: "숫자 키 스위치 수",
                    description: "숫자 키(1-9)를 통해 액세스할 수 있는 탭 수"
                },
                enableCloseTabShortcut: {
                    label: "탭 닫기 바로가기 활성화",
                    description: "탭 닫기 키보드 단축키 활성화"
                },
                enableNewTabShortcut: {
                    label: "새 탭 바로가기 활성화",
                    description: "새 탭 키보드 단축키 활성화"
                },
                enableTabCycleShortcut: {
                    label: "탭 사이클 바로가기 활성화",
                    description: "탭 순환 키보드 단축키 활성화"
                },
                keybindsSection: {
                    label: "키 바인딩",
                    description: "버튼을 클릭하고 원하는 키 조합을 누르세요. CTRL, SHIFT, ALT와 같은 수정자가 지원됩니다.",
                    title: "키보드 단축키",
                    reset: "모두 기본값으로 재설정",
                    shortcutDisabled: "이 단축키는 현재 비활성화되어 있습니다",
                    pressKey: "아무 키나 누르세요...",
                    conflictError: "이 키 바인딩은 이미 사용 중입니다: {{key}}",
                    closeTab: {
                        label: "탭 닫기",
                        description: "키보드 현재 활성 탭"
                    },
                    newTab: {
                        label: "새 탭",
                        description: "현재 채널로 새 탭 열기"
                    },
                    cycleTabsForward: {
                        label: "순환 탭 앞으로",
                        description: "다음 탭으로 전환(첫 번째 탭으로 돌아감)"
                    },
                    cycleTabsBackward: {
                        label: "탭을 뒤로 순환",
                        description: "이전 탭으로 전환(마지막 탭으로 이동)"
                    }
                },
                closeTabKeybind: {
                    label: "탭 키바인딩 닫기",
                    description: "현재 탭을 닫는 키보드 단축키"
                },
                newTabKeybind: {
                    label: "새 탭 키 바인딩",
                    description: "새 탭을 여는 단축키"
                },
                cycleTabForwardKeybind: {
                    label: "사이클 탭 앞으로 키 바인딩",
                    description: "다음 탭으로 이동하는 키보드 단축키"
                },
                cycleTabBackwardKeybind: {
                    label: "사이클 탭 뒤로 키 바인딩",
                    description: "이전 탭으로 순환하는 키보드 단축키"
                },
                showTabNumbers: {
                    label: "탭 번호 표시",
                    description: "키보드 단축키를 나타내기 위해 탭에 번호가 매겨진 배지 표시"
                },
                tabNumberPosition: {
                    label: "탭 번호 위치",
                    description: "탭에 번호가 매겨진 배지를 표시하는 위치",
                    left: "왼쪽(아이콘 전)",
                    right: "오른쪽(내용 뒤)"
                },
                animations: {
                    label: "애니메이션"
                },
                animationHover: {
                    label: "호버 애니메이션",
                    description: "호버 리프트 및 크기 조절 효과 활성화"
                },
                animationSelection: {
                    label: "선택 시 애니메이션",
                    description: "선택 애니메이션 활성화(테두리 광선, 리프트)"
                },
                animationDragDrop: {
                    label: "드래그 앤 드롭 애니메이션",
                    description: "드래그 앤 드롭 고스트 효과 활성화"
                },
                animationEnterExit: {
                    label: "Enter/Exit 시 애니메이션",
                    description: "탭 생성/닫기 슬라이드 애니메이션 활성화"
                },
                animationIconPop: {
                    label: "아이콘팝의 애니메이션",
                    description: "선택 시 아이콘 확대 애니메이션 활성화"
                },
                animationCloseRotation: {
                    label: "닫기 회전 시 애니메이션",
                    description: "닫기 버튼에 회전 애니메이션 활성화"
                },
                animationPlusPulse: {
                    label: "플러스 버튼 펄스의 애니메이션",
                    description: "더하기 버튼에 펄스 애니메이션 활성화"
                },
                animationMentionGlow: {
                    label: "Mention Glow의 애니메이션",
                    description: "멘션에 빨간색 깜박임 활성화"
                },
                animationCompactExpand: {
                    label: "압축/확장 시 애니메이션",
                    description: "소형 탭의 원활한 확장 가능"
                },
                animationSelectedBorder: {
                    label: "선택한 테두리의 애니메이션",
                    description: "선택한 탭에 테두리 및 네온 스타일을 활성화합니다."
                },
                animationSelectedBackground: {
                    label: "선택한 배경의 애니메이션",
                    description: "선택한 탭의 배경색 변경 활성화"
                },
                animationTabShadows: {
                    label: "탭 그림자의 애니메이션",
                    description: "탭에 그림자 효과 활성화"
                },
                animationTabPositioning: {
                    label: "애니메이션 탭 위치 지정",
                    description: "탭이 위치를 이동할 때 부드러운 전환을 활성화합니다."
                },
                animationResizeHandle: {
                    label: "애니메이션 크기 조정 핸들",
                    description: "크기 조정 핸들에 페이드 애니메이션 활성화"
                },
                animationQuestsActive: {
                    label: "애니메이션 퀘스트 활성화",
                    description: "퀘스트가 활발하게 실행 중일 때 퀘스트 탭에서 그라데이션 애니메이션을 활성화합니다."
                },
                compactAutoExpandSelected: {
                    label: "컴팩트 자동 확장 선택됨",
                    description: "전체 채널 이름을 표시하도록 선택하면 컴팩트 탭을 자동으로 확장합니다."
                },
                compactAutoExpandOnHover: {
                    label: "마우스오버 시 컴팩트 자동 확장",
                    description: "마우스를 올리면 컴팩트 탭이 자동으로 확장되어 전체 채널 이름이 표시됩니다."
                },
                openInNewTabAutoSwitch: {
                    label: "새 탭에서 열기 자동 전환",
                    description: "'새 탭에서 열기' 상황에 맞는 메뉴에서 열린 새 탭으로 자동 전환"
                },
                bookmarksIndependentFromTabs: {
                    label: "탭과 독립적인 북마크",
                    description: "북마크는 활성 탭 표시줄에 영향을 주지 않고 독립적으로 탐색합니다."
                },
                showResizeHandle: {
                    label: "크기 조정 핸들 표시",
                    description: "탭 너비를 조정하기 위해 탭 위로 마우스를 가져갈 때 크기 조정 핸들 표시"
                },
                openNewTabsInCompactMode: {
                    label: "컴팩트 모드에서 새 탭 열기",
                    description: "기본적으로 새로 생성된 모든 탭을 압축 모드로 엽니다."
                },
                newTabButtonBehavior: {
                    label: "새 탭 버튼 동작",
                    description: "새 탭(+) 버튼이 오른쪽에 고정되지 않고 탭을 따라갑니다."
                },
                oneTabPerServer: {
                    label: "서버당 하나의 탭",
                    description: "서버당 하나의 탭으로 제한되므로 해당 서버에서 새 채널을 열면 기존 탭이 사용됩니다."
                },
                maxOpenTabs: {
                    label: "최대 열린 탭",
                    description: "최대 열린 탭 수(0 = 무제한)"
                }
            },
            tabs: {
                startup: "시작 탭",
                currently: "현재 열려 있는 탭으로 설정"
            },
            toast: {
                notRestoring: "KeepCurrentChannel이 활성화되면 탭이 복원되지 않습니다.",
                failed: {
                    restore: "탭을 복원하지 못했습니다.",
                    saved: "저장된 탭을 로드하지 못했습니다."
                }
            }
        },
        characterCounter: {
            name: "CharacterCounter",
            description: "메시지 상자에 문자 카운터를 표시합니다.",
            option: {
                colorEffects: {
                    label: "색상 효과",
                    description: "글자 수 제한에 가까워지도록 색상 효과를 켜거나 끕니다."
                }
            }
        },
        cleanChannelGroups: {
            name: "CleanChannelGroups",
            description: "읽지 않은 메시지가 있더라도 축소된 카테고리의 모든 채널을 숨깁니다."
        },
        cleanChannelName: {
            name: "CleanChannelName",
            description: "채널 이름에서 모든 이모티콘과 장식을 제거하세요."
        },
        clearURLs: {
            name: "ClearURLs",
            description: "보내는 URL에서 추적 요소를 자동으로 제거합니다."
        },
        clickableRoles: {
            name: "ClickableRoles",
            description: "사용자 프로필과 회원 목록에서 역할을 클릭하면 어떤 회원이 해당 역할을 갖고 있는지 확인할 수 있습니다.",
            modal: {
                loading: "회원 로드 중...",
                noMembers: "회원을 찾을 수 없습니다.",
                unknown: "알 수 없는 역할"
            }
        },
        clientSideBlock: {
            name: "ClientSideBlock",
            description: "모든 사용자로부터 거의 모든 콘텐츠를 로컬로 숨길 수 있습니다.",
            replying: "차단된 메시지에 답장하기",
            option: {
                hideVc: {
                    label: "음성 채널 숨기기",
                    description: "차단된 사용자가 포함된 음성 채널을 숨깁니다."
                },
                usersToBlock: {
                    label: "차단할 사용자",
                    description: "쉼표와 공백으로 구분된 사용자 ID"
                },
                hideBlockedUsers: {
                    label: "차단된 사용자 숨기기",
                    description: "차단된 사용자도 모든 곳에서 숨겨야 합니다."
                },
                hideBlockedMessages: {
                    label: "차단된 메시지 숨기기",
                    description: "차단된 사용자의 메시지를 완전히 숨겨야 할까요(이전 noblockedmessages 플러그인과 동일)"
                },
                hideEmptyRoles: {
                    label: "빈 역할 숨기기",
                    description: "모든 구성원이 차단된 경우 역할 헤더를 숨겨야 할까요?"
                },
                blockedReplyDisplay: {
                    label: "차단된 답변 표시",
                    description: "내가 숨긴 사람에게 누군가가 답장을 보낼 때 메시지 대신 표시되는 내용",
                    displayText: "숨겨진 메시지에 답장했다는 내용의 텍스트 표시",
                    hideReply: "말 그대로 아무것도"
                },
                guildBlackList: {
                    label: "길드 블랙리스트",
                    description: "기능을 비활성화하는 길드 ID"
                },
                guildWhiteList: {
                    label: "길드 화이트리스트",
                    description: "기능을 활성화하는 길드 ID"
                }
            }
        },
        clientTheme: {
            name: "ClientTheme",
            description: "기존 클라이언트 테마 실험을 재현합니다. Discord 클라이언트 테마에 색상을 추가하세요",
            title: "테마 색상",
            add: "Discord 클라이언트 테마에 색상을 추가하세요",
            option: {
                color: {
                    label: "색상"
                },
                resetColor: {
                    label: "색상 재설정"
                }
            },
            error: {
                modal: {
                    title: "테마가 좋아 보이지 않을 것입니다!",
                    contrast: "선택한 색상이 텍스트와 잘 대비되지 않습니다.",
                    nitro: "Nitro 테마는 지원되지 않습니다.",
                    switch: "{{oppositeTheme}} 모드로 전환",
                    disable: "Nitro 테마 비활성화",
                    reset: "테마 색상 재설정"
                }
            }
        },
        clipsEnhancements: {
            name: "ClipsEnhancements",
            description: "더 많은 클립 FPS 및 지속 시간 옵션과 RPC 태깅을 추가하세요!",
            minutes: "분",
            option: {
                richPresenceTagging: {
                    label: "리치 프레즌스 태깅",
                    description: "클립에 현재 Rich Presence 태그를 언제 지정해야 합니까?",
                    always: "언제나",
                    only: "활동 시작 또는 종료 이름이 일치하는 경우에만",
                    never: "절대"
                },
                enableScreenshotKeybind: {
                    label: "스크린샷 키 바인딩 활성화",
                    description: "스크린샷 키 바인딩 기능을 활성화하세요"
                },
                enableVoiceOnlyClips: {
                    label: "음성 전용 클립 활성화",
                    description: "음성 전용 클립 활성화(비디오 없이 오디오)"
                },
                enableAdvancedSignals: {
                    label: "고급 신호 활성화",
                    description: "고급 클립 신호 활성화(자동 클립 트리거)"
                },
                ignorePlatformRestriction: {
                    label: "플랫폼 제한 무시",
                    description: "플랫폼 제한 클리핑 허용(저장 오류가 발생할 수 있음)"
                },
                clipsLink: {
                    label: "클립 링크",
                    link: "Clips 설정에서 FPS 및 지속 시간 옵션을 변경하세요!"
                }
            }
        },
        colorSighted: {
            name: "ColorSighted",
            description: "2015-2017 Discord와 마찬가지로 상태에서 색맹 친화적인 아이콘을 제거합니다."
        },
        commandPalette: {
            name: "CommandPalette",
            description: "키보드를 사용하여 UI를 탐색할 수 있습니다.",
            action: {
                command: {
                    label: "명령 실행",
                    description: "ID별로 다른 팔레트 명령의 별칭을 지정합니다. 식별자가 확실하지 않은 경우 선택기를 사용하세요."
                },
                settings: {
                    label: "설정 페이지 열기",
                    description: "Discord 설정 페이지로 바로 이동하세요. 선택기에서 페이지를 선택합니다."
                },
                url: {
                    label: "URL 열기",
                    description: "링크를 엽니다. 최상의 호환성을 위해 https:// 링크를 사용하세요."
                },
                macro: {
                    label: "매크로 실행",
                    description: "일련의 명령을 순서대로 실행합니다. 선택기를 통해 단계를 추가합니다."
                }
            },
            category: {
                auto: "자동(기본 배치 사용)",
                default: {
                    label: "빠른 작업",
                    description: "일반적인 Plexcord 단축키"
                },
                plugins: {
                    label: "플러그인",
                    description: "Plexcord 플러그인 활성화, 비활성화 및 구성",
                    enable: {
                        label: "플러그인 활성화"
                    },
                    disable: {
                        label: "플러그인 비활성화"
                    },
                    settings: {
                        label: "플러그인 설정"
                    },
                    toolbox: {
                        label: "플러그인 작업"
                    },
                    chatbar: {
                        label: "채팅 표시줄 버튼"
                    },
                    changes: {
                        label: "플러그인 변경 사항"
                    }
                },
                context: {
                    label: "현재 컨텍스트",
                    description: "선택한 채널 및 길드에 대한 작업"
                },
                updates: {
                    label: "업데이트",
                    description: "Plexcord로 최신 소식을 받아보세요"
                },
                discordSettings: {
                    label: "디스코드 설정",
                    description: "Discord 구성 페이지로 이동"
                },
                custom: {
                    label: "사용자 정의 명령",
                    description: "사용자 정의 명령 팔레트 항목"
                },
                sessions: {
                    label: "세션 도구",
                    description: "Discord 세션 관리를 위한 유틸리티"
                },
                guilds: {
                    label: "길드",
                    description: "길드로 빠르게 이동"
                },
                friends: {
                    label: "친구",
                    description: "친구를 빠르게 탐색하세요."
                },
                action: {
                    label: "행동"
                }
            },
            builtIn: {
                open: {
                    settings: {
                        plexcord: "Plexcord 설정 열기",
                        plugin: "플러그인 설정 열기"
                    }
                },
                reload: {
                    label: "디스코드 새로고침",
                    description: "현재 Discord 창을 다시 로드합니다."
                }
            },
            command: {
                enable: "{{pluginName}} 활성화",
                enabled: "{{pluginName}} 활성화됨",
                disable: "{{pluginName}} 비활성화",
                disabled: "비활성화됨 {{pluginName}}",
                failed: "명령 실패:",
                toggleFailed: "{{pluginName}}을(를) 전환하지 못했습니다.",
                pluginSettings: "{{pluginName}} 설정",
                untitled: "제목 없는 명령",
                new: "새 명령",
                error: {
                    enter: "명령 ID를 입력하거나 아래에서 하나를 선택하세요.",
                    noCommand: "이 ID와 일치하는 명령이 없습니다."
                },
                discord: {
                    account: "내 계정 열기",
                    privacy: "공개 데이터 및 개인정보 보호",
                    notifications: "알림 열기",
                    voice: "음성 및 영상 열기",
                    text: "텍스트 및 이미지 열기",
                    appearance: "열린 외관",
                    accessibility: "개방형 접근성",
                    keybinds: "오픈 키 바인드",
                    advanced: "고급 열기",
                },
                updates: {
                    check: {
                        label: "업데이트 확인",
                        description: "Plexcord 업데이트 확인",
                        one: "업데이트 1개 사용 가능",
                        multiple: "{{count}} 업데이트 사용 가능",
                        none: "사용 가능한 업데이트가 없습니다.",
                        failed: "업데이트를 확인하지 못했습니다."
                    },
                    changelog: {
                        label: "변경 로그 보기",
                        description: "Plexcord 변경 로그를 엽니다."
                    }
                },
                read: {
                    mark: {
                        label: "마크 {{channelLabel}} 읽기"
                    }
                },
                pin: {
                    open: {
                        label: "{{channelLabel}} 핀 열기"
                    },
                    toggle: {
                        label: "마지막 명령에 고정 전환"
                    }
                },
                channel: {
                    mute: {
                        label: "음소거 {{channelLabel}}",
                        oneHour: "1시간 동안 {{channelLabel}} 음소거",
                        untilTomorrow: "내일까지 {{channelLabel}} 음소거",
                    },
                    unmute: {
                        label: "음소거 해제 {{channelLabel}}",
                    },
                    reopen: {
                        label: "마지막으로 닫은 DM 다시 열기"
                    },
                    dm: {
                        open: {
                            label: "{{userLabel}}로 DM 열기"
                        }
                    }
                },
                guild: {
                    settings: {
                        label: "{{guildLabel}} 설정 열기"
                    },
                    navigate: {
                        label: "{{guildLabel}}로 이동"
                    }
                },
                session: {
                    thirtyMinutesDnd: "방해금지 모드를 30분으로 설정하세요",
                    oneHourDnd: "방해금지 모드를 1시간 동안 설정하세요",
                    cancelStatusReset: "취소 상태 타이머"
                },
                status: {
                    set: {
                        online: "상태 설정: 온라인",
                        idle: "상태 설정: 유휴",
                        dnd: "상태 설정: 방해 금지",
                        invisible: "상태 설정: 보이지 않음"
                    }
                },
                toggle: {
                    streamer: "스트리머 모드 전환",
                    mute: "자체 음소거 전환",
                    deafen: "자기 귀머거리 전환",
                },
                notification: {
                    clear: {
                        label: "데스크탑 알림 지우기"
                    }
                },
                palette: {
                    settings: {
                        label: "명령 팔레트 설정 열기",
                        description: "명령 팔레트 플러그인 구성"
                    }
                },
                recent: {
                    label: "최근 명령 표시",
                    description: "마지막으로 실행된 명령을 표시합니다.",
                    rerun: "마지막 명령 다시 실행"
                },
                plugin: {
                    reload: {
                        label: "모든 플러그인 다시 로드",
                        description: "활성화된 모든 플러그인을 핫 리로드하려고 시도합니다."
                    },
                    enable: {
                        label: "모든 플러그인 활성화"
                    },
                    disable: {
                        label: "필요하지 않은 모든 플러그인 비활성화"
                    },
                    restart: {
                        label: "Plexcord 다시 시작",
                        description: "Discord 클라이언트 창을 다시 로드합니다."
                    }
                },
                quickCSS: {
                    label: "빠른 CSS 전환"
                },
                transparentity: {
                    label: "창 투명도 전환"
                },
                theme: {
                    open: {
                        label: "클라이언트 테마 설정 열기"
                    }
                }
            },
            modal: {
                searchPlaceholder: "검색 명령",
                noCommand: "명령을 찾을 수 없습니다.",
                add: {
                    title: "명령 추가"
                },
                choose: {
                    title: "명령 선택"
                },
                command: {
                    palette: {
                        label: "명령 팔레트",
                        placeholder: "명령을 입력하세요",
                        filtering: "{{tags}}로 필터링 중",
                        noCommand: "명령을 찾을 수 없습니다.",
                        pin: "핀 명령",
                        unpin: "고정 해제 명령"
                    },
                    target: {
                        label: "대상 명령 ID",
                        placeholder: "명령 ID를 입력하세요",
                        choose: "명령 선택"
                    },
                    custom: {
                        label: "사용자 정의 명령",
                        description: "1) 명령 이름 지정 · 2) 선택적 설명/키워드/태그/범주 추가 · 3) 작업을 선택하고 세부 정보를 입력합니다(ID는 별칭 및 매크로에 대한 기존 팔레트 명령과 일치해야 합니다).",
                        auto: "자동(기본값)",
                        expand: "확장하다",
                        collapse: "무너지다",
                        collapsed: {
                            label: "상표",
                            description: "표시 이름",
                            advanced: {
                                hide: "고급 옵션 숨기기",
                                show: "고급 옵션 표시"
                            },
                            subtitle: {
                                label: "설명",
                                placeholder: "선택적 자막"
                            },
                            keywords: {
                                label: "키워드",
                                placeholder: "쉼표로 구분된 키워드"
                            },
                            tags: {
                                label: "태그",
                                placeholder: "쉼표로 구분된 태그"
                            },
                            suggestion: {
                                label: "제안"
                            },
                            chooseCommand: {
                                label: "팔레트에서 이 명령이 나타나는 위치를 선택합니다."
                            },
                            danger: {
                                label: "위험한 것으로 표시"
                            }
                        },
                        remove: "제거 명령",
                        add: "명령 추가"
                    }
                },
                settings: {
                    noSelected: "선택한 페이지가 없습니다.",
                    current: "현재 페이지",
                    choose: "페이지 선택..."
                },
                url: {
                    url: "URL",
                    error: "http:// 또는 https:// 링크를 사용하세요.",
                    valid: "유효한 URL을 입력하세요.",
                    open: {
                        external: "외부에서 열기",
                    }
                },
                macro: {
                    sequence: {
                        label: "명령 순서",
                        placeholder: "명령-a, 명령-b"
                    },
                    addStep: "단계 추가",
                    unknownId: "알 수 없는 명령 ID"
                }
            },
            status: {
                online: "온라인",
                idle: "게으른",
                dnd: "방해하지 마세요",
                invisible: "보이지 않는"
            },
            tag: {
                core: "핵심",
                navigation: "항해",
                utility: "공익사업",
                developer: "개발자",
                customization: "맞춤화",
                plugins: "플러그인",
                session: "세션",
                context: "문맥",
                custom: "관습",
                guilds: "길드",
                friends: "친구",
                other: "다른"
            },
            toast: {
                chat: {
                    button: {
                        unableToFind: "'{{label}}' 채팅 버튼을 찾을 수 없습니다.",
                        failedToTrigger: "{{label}}을(를) 트리거하지 못했습니다.",
                        activated: "{{label}}이(가) 활성화되었습니다."
                    }
                },
                channel: {
                    mute: {
                        unavailable: "채널 음소거 제어를 사용할 수 없습니다.",
                        muted: "음소거된 채널입니다.",
                        unmuted: "음소거 해제된 채널입니다.",
                        failed: "채널 음소거 상태를 업데이트하지 못했습니다."
                    },
                    dm: {
                        no: "이 세션에는 DM 종료가 기록되지 않았습니다.",
                        reOpened: "지난번 닫았던 DM을 다시 열었습니다.",
                        noAvailable: "DM은 더 이상 사용할 수 없습니다."
                    }
                },
                command: {
                    loop: "매크로 실행 중 명령 루프가 감지되었습니다.",
                    notFound: "{{commandId}} 명령을 찾을 수 없습니다.",
                    unsupported: "지원되지 않는 사용자 정의 명령 작업입니다.",
                    failedToRun: "{{label}}을(를) 실행하지 못했습니다.",
                    notMetadata: "명령 팔레트 플러그인 메타데이터를 사용할 수 없습니다."
                },
                guild: {
                    mute: {
                        unavailable: "길드 음소거 제어를 사용할 수 없습니다",
                        muted: "음소거된 길드.",
                        unmuted: "음소거 해제된 길드.",
                        failed: "길드 음소거 상태를 업데이트하지 못했습니다."
                    },
                    settings: {
                        unable: "길드 설정을 열 수 없습니다.",
                    }
                },
                panel: {
                    pin: {
                        unable: "핀 패널을 열 수 없습니다.",
                    }
                },
                status: {
                    reset: {
                        canceled: "예약된 상태 재설정이 취소되었습니다.",
                        unableToChange: "지금은 상태를 변경할 수 없습니다.",
                        reverted: "상태가 {{status}}로 되돌아갔습니다.",
                        dnd: "{{duration}}분 동안 방해하지 마세요."
                    },
                    change: {
                        unableToChange: "지금은 상태를 변경할 수 없습니다.",
                        changed: "상태가 {{status}}(으)로 변경되었습니다."
                    }
                },
                read: {
                    marked: "{{channelLabel}}을(를) 읽음으로 표시했습니다.",
                    failed: "채널을 읽은 상태로 표시하지 못했습니다."
                },
                route: {
                    unable: "{{destination}}을(를) 열 수 없습니다.",
                },
                notification: {
                    cleared: "모든 알림을 지웠습니다.",
                    failed: "알림을 지우지 못했습니다.",
                    notSupported: "알림 삭제가 지원되지 않습니다."
                },
                streamerMode: {
                    enabled: "스트리머 모드가 활성화되었습니다.",
                    disabled: "스트리머 모드가 비활성화되었습니다.",
                },
                voice: {
                    micToggle: {
                        muted: "마이크가 음소거되었습니다.",
                        unmuted: "마이크가 음소거 해제되었습니다."
                    },
                    deafenToggle: {
                        deafened: "당신은 이제 귀가 멀었습니다.",
                        undeafened: "당신은 더 이상 귀머거리가 아닙니다."
                    }
                },
                quickCSS: {
                    enabled: "빠른 CSS가 활성화되었습니다.",
                    disabled: "빠른 CSS가 비활성화되었습니다."
                },
                transparentity: {
                    enabled: "창 투명도가 활성화되었습니다.",
                    disabled: "창 투명도가 비활성화되었습니다."
                },
                plugin: {
                    disabled: {
                        label: "{{pluginName}}이(가) 비활성화되었습니다.",
                        disable: "{{pluginName}}이(가) 비활성화되었습니다. 이 작업을 사용하려면 플러그인을 활성화하세요."
                    },
                    required: {
                        label: "{{pluginName}}을(를) 다시 로드하려면 다시 시작해야 합니다."
                    },
                    stop: {
                        failed: "{{pluginName}}을(를) 중지하지 못했습니다."
                    },
                    restart: {
                        failed: "{{pluginName}}을(를) 다시 시작하지 못했습니다."
                    },
                    reload: {
                        label: "{{pluginName}}을(를) 다시 로드했습니다.",
                        noPlugin: "플러그인이 다시 로드되지 않았습니다.",
                        reloaded: "{{count}} 플러그인{{s}}을(를) 다시 로드했습니다."
                    },
                    toggle: {
                        enabled: "{{changed}} 플러그인{{s}}을 활성화했습니다.",
                        disabled: "{{changed}} 플러그인{{s}}을(를) 비활성화했습니다.",
                        noChanged: "상태가 변경된 플러그인이 없습니다."
                    },
                    run: {
                        failed: {
                            label: "{{pluginName}} 실행 실패: {{actionLabel}}."
                        }
                    }
                }
            },
            display: {
                channel: {
                    current: "현재 채널",
                    group: "그룹DM",
                    direct: "다이렉트 메시지"
                },
                guild: {
                    current: "현재 길드",
                }
            },
            option: {
                hotkey: {
                    label: "단축키",
                    description: "명령 팔레트를 여는 데 사용되는 단축키",
                    recording: "아무 키나 누르세요...",
                    reset: "다시 놓기"
                },
                visualStyle: {
                    label: "비주얼 스타일",
                    description: "팔레트 외관",
                    classic: "권위 있는",
                    polished: "우아한"
                },
                showTags: {
                    label: "태그 표시",
                    description: "명령에 대한 태그 칩 표시"
                },
                enableTagFilter: {
                    label: "태그 필터 활성화",
                    description: "태그 필터 표시줄 표시"
                },
                customCommands: {
                    label: "사용자 정의 명령",
                    description: "사용자 정의 명령 팔레트 항목 관리"
                }
            },
            template: {
                alias: {
                    label: "별칭 명령",
                    description: "기존 명령 미러링"
                },
                settings: {
                    label: "설정",
                    description: "디스코드 설정 열기"
                },
                url: {
                    label: "링크",
                    description: "외부 URL 열기"
                },
                macro: {
                    label: "매크로",
                    description: "일련의 명령 실행"
                }
            }
        },
        consoleJanitor: {
            name: "ConsoleJanitor",
            description: "성가신 콘솔 메시지/오류를 비활성화합니다.",
            option: {
                disableLoggers: {
                    label: "로거 비활성화",
                    description: "Discord의 로거를 비활성화합니다."
                },
                disableSpotifyLogger: {
                    label: "Spotify 로거 비활성화",
                    description: "계정 정보 및 액세스 토큰을 유출하는 Spotify 로거를 비활성화합니다."
                },
                whitelistedLoggers: {
                    label: "화이트리스트에 등록된 로거",
                    description: "다른 로거가 숨겨져 있어도 허용하는 세미콜론(;)으로 구분된 로거 목록"
                },
                allowLevel: {
                    label: "허용 수준",
                    description: "항상 이러한 유형의 로거를 허용합니다.",
                    filter: "필터 목록"
                }
            }
        },
        consoleShortcuts: {
            name: "Console Shortcuts",
            description: "창의 많은 항목에 대해 더 짧은 별칭을 추가합니다. 목록을 보려면 `shortcutList`를 실행하세요."
        },
        contentWarning: {
            name: "ContentWarning",
            description: "기본적으로 흐리게 표시되는 특정 트리거 단어를 지정할 수 있습니다. 흐리게 표시된 내용을 클릭하면 해당 내용이 표시됩니다.",
            option: {
                flagged: {
                    label: "신고됨",
                    flagged: "플래그가 지정된 단어",
                    placeholder: "단어"
                },
                onClick: {
                    label: "클릭 시",
                    description: "마우스를 가져가는 대신 클릭할 때만 트리거 콘텐츠 표시"
                }
            }
        },
        copyEmojiMarkdown: {
            name: "CopyEmojiMarkdown",
            description: "이모티콘을 형식화된 문자열로 복사할 수 있습니다(<a:blob_pwease:1402403381900742737>).",
            option: {
                copyUnicode: {
                    label: "유니코드 복사",
                    description: "기본 이모티콘의 경우 :name: 대신 원시 유니코드 문자를 복사하세요(👽)."
                }
            },
            context: {
                copy: "이모티콘 마크다운 복사"
            },
            toast: {
                success: "성공! 이모티콘 마크다운을 복사했습니다."
            }
        },
        copyFileContents: {
            name: "CopyFileContents",
            description: "내용을 복사할 수 있는 텍스트 첨부 파일에 버튼을 추가합니다.",
            copied: "복사되었습니다!",
            large: "파일이 너무 커서 복사할 수 없습니다.",
            copyFileContents: "파일 내용 복사"
        },
        copyProfileColors: {
            name: "CopyProfileColors",
            description: "사람들의 프로필 그라데이션 색상을 클립보드에 복사하는 플러그인입니다.",
            copy: "프로필 색상 복사",
            toast: {
                noColor: "프로필 색상을 찾을 수 없습니다!",
                copied: "프로필 색상이 클립보드에 복사되었습니다!",
                error: "프로필 색상을 복사하는 중 오류가 발생했습니다!"
            }
        },
        copyStatusUrls: {
            name: "CopyStatusUrls",
            description: "사용자의 상태 URL을 마우스 오른쪽 버튼으로 클릭하면 복사됩니다.",
            toast: {
                copied: "복사된 URL",
                error: "URL을 복사하는 중에 오류가 발생했습니다. 자세한 내용은 콘솔을 확인하세요."
            }
        },
        copyStickerLinks: {
            name: "CopyStickerLinks",
            description: "스티커 링크를 복사하고 여는 기능을 추가합니다.",
            context: {
                copy: "링크 복사",
                open: "링크 열기"
            },
            toast: {
                success: "링크가 복사되었습니다!"
            }
        },
        copyUserMention: {
            name: "CopyUserMention",
            description: "사용자 상황에 맞는 메뉴에 사용자 멘션을 복사하는 버튼을 추가하며 ValidUser와 가장 잘 작동합니다.",
            context: {
                copy: "사용자 멘션 복사"
            }
        },
        copyUserURLs: {
            name: "CopyUserURLs",
            description: "사용자 컨텍스트 메뉴에 '사용자 URL 복사' 옵션을 추가합니다.",
            context: {
                copy: "사용자 URL 복사"
            }
        },
        crashHandler: {
            name: "CrashHandler",
            description: "다시 시작하지 않고도 충돌을 처리하고 복구할 수 있는 유틸리티 플러그인",
            option: {
                attemptToPreventCrashes: {
                    label: "충돌 방지를 위한 시도",
                    description: "Discord 충돌을 방지하려고 시도할지 여부입니다."
                },
                attemptToNavigateToHome: {
                    label: "홈으로 이동 시도",
                    description: "크래시 복구 시 홈 탭으로 이동을 시도할지 여부입니다."
                }
            },
            toast: {
                crashed: {
                    title: "디스코드가 충돌했습니다!",
                    body: "Awn :( Discord는 복구를 시도하지 않고 두 번 빠르게 충돌했습니다.",
                    update: "아, 방금 Discord가 충돌했습니다... 하지만 좋은 소식은 이 문제를 해결할 수 있는 Plexcord 업데이트가 있다는 것입니다! 지금 업데이트하시겠습니까?",
                    recover: "복구를 시도하는 중...",
                    invalid: "초대 링크가 잘못되었거나 만료되었습니다."
                }
            }
        },
        ctrlEnterSend: {
            name: "CtrlEnterSend",
            description: "Ctrl+Enter를 사용하여 메시지 보내기(사용자 정의 가능)",
            option: {
                submitRule: {
                    label: "규칙 제출",
                    description: "메시지를 보내는 방법",
                    ctrlEnter: "Ctrl+Enter(새 줄의 경우 Enter 또는 Shift+Enter)(macOS에서는 cmd+enter)",
                    shiftEnter: "Shift+Enter(새 줄을 입력하려면 Enter)",
                    enter: "Enter(새 줄은 Shift+Enter, Discord 기본값)"
                },
                sendMessageInTheMiddleOfACodeBlock: {
                    label: "코드 블록 중간에 메시지 보내기",
                    description: "코드 블록 중간에 메시지를 보낼지 여부"
                }
            }
        },
        cursorBuddy: {
            name: "CursorBuddy",
            description: "커서를 따라가는 스프라이트를 추가합니다.",
            modal: {
                furColor: "모피 색상",
                outlineColor: "외곽선 색상"
            },
            option: {
                buddy: {
                    label: "친구",
                    description: "커서 친구를 선택하세요",
                    oneko: "오네코",
                    fathorse: "뚱뚱한 말"
                },
                speed: {
                    label: "속도",
                    description: "친구의 속도",
                    invalid: "속도는 0보다 커야 합니다."
                },
                fps: {
                    label: "프레임 속도",
                    description: "친구의 프레임 속도",
                    invalid: "프레임 속도는 0보다 커야 합니다."
                },
                onekoSection: {
                    label: "오네코"
                },
                furColor: {
                    label: "모피 색상",
                    description: "Oneko의 모피 육각형 색상"
                },
                outlineColor: {
                    label: "외곽선 색상",
                    description: "Oneko의 윤곽선 16진수 색상"
                },
                fathorseSection: {
                    label: "뚱뚱한 말"
                },
                size: {
                    label: "크기",
                    description: "뚱뚱한 말의 크기",
                    invalid: "크기는 0보다 커야 합니다."
                },
                fade: {
                    label: "바래다",
                    description: "커서가 근처에 있을 때 말이 희미해지는 경우"
                },
                freeroam: {
                    label: "프리로밍",
                    description: "말이 유휴 상태일 때 자유롭게 돌아다녀야 한다면"
                },
                shake: {
                    label: "떨림",
                    description: "말이 걸을 때 창문을 흔들어야 한다면"
                }
            }
        },
        customFolderIcons: {
            name: "CustomFolderIcons",
            description: "PNG로 폴더 아이콘을 사용자 정의하세요",
            option: {
                solidIcon: {
                    label: "솔리드 아이콘",
                    description: "이미지 배경에 단색 배경을 사용하세요."
                },
                folderIcons: {
                    label: "폴더 아이콘",
                    description: "폴더 아이콘 설정"
                }
            },
            modal: {
                change: "폴더 아이콘 크기 변경",
                save: "구하다",
                unset: "설정되지 않음",
                set: "새 아이콘 설정",
                hover: "새로 고치려면 설정 후 폴더 위로 마우스를 가져가야 할 수도 있습니다."
            }
        },
        customIdle: {
            name: "CustomIdle",
            description: "Discord가 유휴 상태가 되기 전의 시간을 설정할 수 있습니다(또는 자동 유휴 상태를 비활성화합니다).",
            backOnline: "돌아온 것을 환영합니다! 버튼을 클릭하면 온라인으로 전환됩니다. 다시 로드할 때까지 유휴 상태를 유지하려면 X를 클릭하세요.",
            exit: "유휴 상태 종료",
            option: {
                idleTimeout: {
                    label: "유휴 시간 초과",
                    description: "Discord가 유휴 상태가 되기까지의 시간(0은 자동 유휴 상태를 비활성화함)"
                },
                remainInIdle: {
                    label: "유휴 상태 유지",
                    description: "Discord로 돌아오면 온라인 접속을 확인할 때까지 유휴 상태를 유지하세요."
                }
            }
        },
        customRPC: {
            name: "CustomRPC",
            description: "Discord 프로필에 완전히 사용자 정의 가능한 Rich Presence(게임 상태)를 추가하세요",
            goTo: "애플리케이션을 생성하고 애플리케이션 ID를 얻으려면 {{portal}}로 이동하세요.",
            upload: "이미지 키를 얻으려면 Rich Presence 탭에 이미지를 업로드하세요.",
            image: "이미지 링크를 사용하려면 이미지를 다운로드하고 {{imgur}}에 이미지를 다시 업로드한 후 이미지를 마우스 오른쪽 버튼으로 클릭하고 '이미지 주소 복사'를 선택하여 이미지 링크를 받으세요.",
            button: "귀하는 귀하의 프로필에서 귀하의 버튼을 볼 수 없지만, 다른 모든 사람들은 그 버튼을 잘 볼 수 있습니다.",
            font: "일부 이상한 유니코드 텍스트('fonts' 𝖑𝖎𝖐𝖊 𝖙𝖍𝖎𝖘)로 인해 풍부한 존재감이 표시되지 않을 수 있습니다. 대신 일반 문자를 사용해 보세요.",
            placeholder: "값을 입력하세요",
            select: "옵션을 선택하세요",
            error: {
                appIdInvalid: "앱 ID는 유효한 숫자여야 합니다.",
                notice: "알아채다",
                sharing: "활동 공유가 활성화되어 있지 않으면 사람들이 귀하의 사용자 정의 리치 프레즌스를 볼 수 없습니다!",
                enable: "할 수 있게 하다",
                validStream: "스트리밍 링크는 유효한 URL이어야 합니다.",
                mustBeURL: "유효한 URL이어야 합니다.",
                streamCharacters: "스트리밍 링크는 512자 이하여야 합니다.",
                dontUse: "디스코드 링크를 사용하지 마세요. 대신 Imgur 이미지 링크를 사용하세요.",
                imgur: "Imgur 링크는 이미지에 대한 직접 링크여야 합니다(예: https://i.imgur.com/...). 이미지를 마우스 오른쪽 버튼으로 클릭한 후 '이미지 주소 복사'를 클릭하세요.",
                tenor: "테너 링크는 이미지에 대한 직접 링크여야 합니다(예: https://media.tenor.com/...). GIF를 마우스 오른쪽 버튼으로 클릭한 후 '이미지 주소 복사'를 클릭하세요.",
                required: "이 필드는 필수입니다.",
                tooLong: "{{maxLength}}자 이하여야 합니다.",
                mustBeNumber: "숫자여야 합니다.",
                mustBePositive: "양수여야 합니다.",
                startTimeInvalid: "시작 타임스탬프는 0보다 커야 합니다.",
                endTimeInvalid: "종료 타임스탬프는 0보다 커야 합니다."
            },
            option: {
                appId: {
                    label: "앱 ID",
                    description: "애플리케이션 ID (필수)"
                },
                appName: {
                    label: "앱 이름",
                    description: "애플리케이션 이름(필수)"
                },
                details: {
                    label: "세부",
                    description: "세부정보(1행)"
                },
                detailsURL: {
                    label: "세부정보 URL",
                    description: "세부정보 클릭 가능 URL"
                },
                state: {
                    label: "상태",
                    description: "상태(2행)"
                },
                stateURL: {
                    label: "상태 URL",
                    description: "클릭 가능한 URL 상태"
                },
                partySize: {
                    label: "파티 규모",
                    description: "현재 인원수(최대 인원수와 함께 사용해야 함)"
                },
                partyMax: {
                    label: "최대 파티 규모",
                    description: "최대 인원수(현재 인원수와 함께 사용해야 함)"
                },
                type: {
                    label: "활동 유형",
                    description: "활동 유형",
                    playing: "재생",
                    streaming: "스트리밍",
                    listening: "청취",
                    watching: "보고 있다",
                    competing: "경쟁 중"
                },
                streamLink: {
                    label: "스트림 링크",
                    description: "Twitch.tv 또는 YouTube.com 링크(스트리밍 활동 유형에만 해당)"
                },
                timestampMode: {
                    label: "타임스탬프 모드",
                    description: "타임스탬프가 표시해야 하는 내용",
                    none: "없음",
                    sinceDiscordOpen: "디스코드 오픈 이후",
                    sameAsCurrentTime: "현재 시간과 동일(24시간 이후에는 재설정되지 않음)",
                    custom: "맞춤 시간"
                },
                startTime: {
                    label: "시작 시간(밀리초)",
                    description: "밀리초 단위의 타임스탬프 시작(사용자 정의 타임스탬프 모드에만 해당)"
                },
                endTime: {
                    label: "종료 시간(밀리초)",
                    description: "밀리초 단위의 종료 타임스탬프(사용자 정의 타임스탬프 모드에만 해당)"
                },
                imageBig: {
                    label: "대형 이미지 키",
                    description: "대형 이미지 키(리치 프레즌스 탭에 업로드해야 함)"
                },
                imageBigTooltip: {
                    label: "이미지 빅 툴팁",
                    description: "큰 이미지 툴팁"
                },
                imageBigURL: {
                    label: "큰 이미지 URL",
                    description: "큰 이미지 클릭 가능한 URL"
                },
                imageSmall: {
                    label: "작은 이미지 키",
                    description: "작은 이미지 키(리치 프레즌스 탭에 업로드해야 함)"
                },
                imageSmallTooltip: {
                    label: "이미지 작은 도구 설명",
                    description: "작은 이미지 툴팁"
                },
                imageSmallURL: {
                    label: "작은 이미지 URL",
                    description: "작은 이미지 클릭 가능한 URL"
                },
                buttonOneText: {
                    label: "버튼 1 텍스트",
                    description: "버튼 1 텍스트"
                },
                buttonOneURL: {
                    label: "버튼 1 URL",
                    description: "버튼 1 URL"
                },
                buttonTwoText: {
                    label: "버튼 2 텍스트",
                    description: "버튼 2 텍스트"
                },
                buttonTwoURL: {
                    label: "버튼 2 URL",
                    description: "버튼 2 URL"
                }
            }
        },
        customSounds: {
            name: "CustomSounds",
            description: "Discord의 사운드를 사용자 정의하세요.",
            search: "소리 검색",
            placeholder: "이름이나 아이디로 검색하세요",
            import: "수입",
            export: "내보내다",
            reset: "모두 재설정",
            debug: "디버그",
            toast: {
                error: "맞춤 사운드 파일을 로드하는 중에 오류가 발생했습니다.",
                exported: "내보낸 {{count}} 설정(오디오 파일은 포함되지 않음)",
                imported: "설정을 성공적으로 가져왔습니다.",
                importError: "설정을 가져오는 중에 오류가 발생했습니다. 자세한 내용은 콘솔을 확인하세요.",
                reset: "모든 재정의가 성공적으로 재설정되었습니다!",
                overrideDescription: "{{soundName}} 재정의",
                previewSound: "사운드를 재생하는 중 오류가 발생했습니다.",
                playing: "맞춤 사운드를 재생하는 중에 오류가 발생했습니다. 파일이 손상되었을 수 있습니다.",
                invalidFile: "미리 볼 수 있는 맞춤 사운드 파일이 없습니다.",
                uploaded: "파일이 성공적으로 업로드되었습니다: {{fileName}}",
                uploadedError: "파일 업로드 오류: {{error}}",
                invalidExtension: "파일 형식이 잘못되었습니다. 오디오 파일을 업로드해주세요.",
                uploading: "파일 업로드 중...",
                deleted: "파일이 삭제되었습니다.",
                deleteError: "파일을 삭제하는 중에 오류가 발생했습니다.",
                loadingError: "맞춤 사운드 파일을 로드하는 중에 오류가 발생했습니다."
            },
            button: {
                preview: "시사",
                stop: "멈추다",
                volume: "용량",
                soundSource: "음원",
                customFile: "사용자 정의 파일",
                uploadNew: "새로 업로드",
                delete: "선택한 파일 삭제"
            },
            option: {
                default: "기본",
                custom: "관습",
                select: "파일을 선택하세요..."
            },
            type: {
                activityEnd: "활동 종료",
                activityLaunch: "활동 시작",
                activityUserJoin: "활동 사용자 가입",
                activityUserLeft: "활동 사용자 왼쪽",
                asmrMessage: "ASMR 메시지",
                bitMessage: "비트 메시지",
                bopMessage: "밥 메시지",
                callCalling: "전화 걸기",
                callRinging: "전화벨 울림",
                clipError: "클립 오류",
                clipSave: "클립 저장",
                ddrDown: "DDR 다운",
                ddrLeft: "DDR 왼쪽",
                ddrRight: "DDR 오른쪽",
                ddrUp: "DDR 업",
                deafen: "귀가 들리지 않게 하다",
                discodo: "디스코도",
                disconnect: "연결 끊기",
                duckyMessage: "덕키 메시지",
                hangStatusSelect: "정지 상태 선택",
                highfiveClap: "하이파이브 박수",
                highfiveWhistle: "하이파이브 휘파람",
                humanMan: "인간 남자",
                lofiMessage: "LoFi 메시지",
                mention1: "언급 1(@role)",
                mention2: "멘션 2(@everyone)",
                mention3: "멘션 3(@여기)",
                message1: "메시지 1(일반)",
                message2: "메시지 2(서버에서 응답)",
                message3: "메시지 3(DM 및 그룹 DM)",
                mute: "무음",
                overlayUnlock: "오버레이 잠금 해제",
                poggermodeAchievement: "포거모드 업적",
                poggermodeApplause: "포거모드 박수",
                poggermodeEnabled: "포거 모드 활성화",
                poggermodeMessage: "포거모드 메시지",
                pttStart: "PTT 시작",
                pttStop: "PTT 중지",
                reconnect: "다시 연결",
                robotMan: "로봇맨",
                stageWaiting: "무대 대기",
                streamEnded: "스트림 종료됨",
                streamStarted: "스트림이 시작되었습니다",
                streamUserJoined: "스트림 사용자가 합류했습니다",
                streamUserLeft: "스트림 사용자 왼쪽",
                success: "성공",
                undeafen: "언디펜",
                unmute: "음소거 해제",
                userJoin: "사용자 가입",
                userLeave: "사용자 탈퇴",
                userMoved: "사용자가 이동됨",
                vibingWumpus: "바이빙 웜퍼스"
            }
        },
        customTimestamps: {
            name: "CustomTimestamps",
            description: "메시지 및 도구 설명의 사용자 정의 타임스탬프",
            demo: {
                cozy: "Cozy 형식으로 전환하려면 나를 클릭하세요.",
                compact: "컴팩트 형식으로 전환하려면 나를 클릭하세요.",
                lastWeek: "이 메시지는 지난 주에 전송되었습니다.",
                hover: "툴팁 형식을 보려면 타임스탬프 위로 마우스를 가져가세요.",
                edit: "여기에서 실시간 업데이트를 보려면 아래 형식을 수정하세요."
            },
            modal: {
                title: "사용 방법:",
                moment: "Moment.js 형식화 문서",
                hint: "또한 입력에 다음을 사용할 수 있습니다.",
                calendar: "다음과 같은 동적 날짜 형식을 지원합니다.",
                today: "오늘",
                yesterday: "어제",
                relative: "다음과 같은 시간을 제공합니다",
                relativeTime: "4시간 전",
                preview: "시사",
                format: "달력 형식",
                howTo: "위 타임스탬프에 사용된 경우 [calendar] 값의 형식을 지정하는 방법입니다."
            },
            option: {
                formats: {
                    label: "형식",
                    description: "타임스탬프 형식 사용자 정의",
                },
                cozyFormat: {
                    label: "코지 모드",
                    description: "코지 모드에서 메시지에 사용할 시간 형식"
                },
                compactFormat: {
                    label: "컴팩트 모드",
                    description: "압축 모드의 시간 형식 및 메시지 위로 마우스를 가져가면"
                },
                tooltipFormat: {
                    label: "툴팁",
                    description: "도구 설명에 사용할 시간 형식"
                },
                ariaLabelFormat: {
                    label: "아리아 라벨",
                    description: "aria 라벨에 사용할 시간 형식"
                },
                sameDayFormat: {
                    label: "같은 날",
                    description: "[캘린더] 오늘의 형식",
                    default: "[오늘 시간] HH:mm:ss"
                },
                lastDayFormat: {
                    label: "마지막 날",
                    description: "[캘린더] 어제의 형식",
                    default: "[어제 시간] HH:mm:ss"
                },
                lastWeekFormat: {
                    label: "지난주",
                    description: "[캘린더] 지난주 형식"
                },
                sameElseFormat: {
                    label: "그 외",
                    description: "[캘린더] 이전 날짜의 형식"
                }
            }
        },
        customUserColors: {
            name: "CustomUserColors",
            description: "언제 어디서나 모든 사용자에게 맞춤 색상을 추가할 수 있습니다! TypingTweaks 및 roleColorEverywhere와 함께 사용하는 것이 좋습니다.",
            option: {
                dmList: {
                    label: "DM 목록",
                    description: "사용자 정의 색상이 정의된 사용자는 DM 목록에 색상이 지정된 이름을 갖게 됩니다."
                },
                colorInServers: {
                    label: "컬러인 서버",
                    description: "서버 내에서 이름 색상을 변경해야 하는 경우"
                }
            },
            context: {
                setColor: "색상 설정"
            },
            modal: {
                custom: "사용자 정의 색상",
                pick: "색상을 선택하세요",
                delete: "항목 삭제",
                save: "구하다"
            }
        },
        dearrow: {
            name: "DeArrow",
            description: "DeArrow가 제공하는 YouTube 삽입 제목과 미리보기 이미지를 덜 선정적으로 만듭니다.",
            option: {
                hideButton: {
                    label: "숨기기 버튼",
                    description: "YouTube 삽입에서 DeArrow 버튼을 숨깁니다."
                },
                replaceElements: {
                    label: "요소 교체",
                    description: "대체할 삽입 요소를 선택하세요.",
                    everything: "모든 것(제목 및 썸네일)",
                    title: "제목",
                    thumbnail: "썸네일"
                },
                dearrowByDefault: {
                    label: "기본적으로 DeArrow",
                    description: "DeArrow 비디오를 자동으로"
                }
            },
            tooltip: {
                dearrowed: "이 삽입은 DeArrowed되었습니다. 복원하려면 클릭하세요.",
                dearrow: "화살표를 해제하려면 클릭하세요"
            }
        },
        declutter: {
            name: "Declutter",
            description: "프로필 효과, 상점 탭, 부스트 등과 같은 필수적이지 않은 UI 요소를 제거하여 Discord를 정리합니다.",
            option: {
                userProfileHeader: {
                    label: "사용자 프로필"
                },
                removeNameplate: {
                    label: "명판 제거",
                    description: "명판을 제거하십시오."
                },
                removeProfileEffect: {
                    label: "프로필 효과 제거",
                    description: "열 때 프로필 애니메이션 효과를 제거합니다."
                },
                removeClanTag: {
                    label: "클랜 태그 제거",
                    description: "클랜 태그를 제거하세요."
                },
                alwaysShowUsername: {
                    label: "항상 사용자 이름 표시",
                    description: "상태 대신 항상 사용자 이름을 표시합니다."
                },
                accessibilityNotice: {
                    label: "접근성 공지",
                    description: "Discord에는 이미 접근성 설정에 사용자 이름 스타일 옵션이 내장되어 있습니다."
                },
                friendsListHeader: {
                    label: "Above Friends/DMs List"
                },
                removeShopAboveDM: {
                    label: "DM 위의 상점 제거",
                    description: "DM 목록 위의 상점을 제거하세요."
                },
                removeQuestsAboveDM: {
                    label: "DM 위의 퀘스트 제거",
                    description: "DM 목록 위에 있는 퀘스트를 제거하세요."
                },
                miscHeader: {
                    label: "기타"
                },
                removeServerBoostInfo: {
                    label: "서버 부스트 정보 제거",
                    description: "채널 목록 위의 서버 부스트 정보를 제거합니다."
                },
                removeBillingSettings: {
                    label: "결제 설정 제거",
                    description: "결제 설정을 삭제하세요."
                },
                removeGiftButton: {
                    label: "선물 버튼 제거",
                    description: "선물 버튼을 제거하세요."
                },
                removeUnavailableEmojiPicker: {
                    label: "사용할 수 없는 이모티콘 선택기 제거",
                    description: "이모티콘 선택기에서 사용할 수 없는 카테고리를 삭제하세요."
                },
                removeAudioMenus: {
                    label: "오디오 메뉴 제거",
                    description: "음소거 및 귀머거리 버튼 옆에 있는 메뉴를 제거합니다."
                },
                removeButtonTooltips: {
                    label: "버튼 툴팁 제거",
                    description: "버튼 툴팁을 제거합니다."
                }
            }
        },
        decodeBase64: {
            name: "DecodeBase64",
            description: "메시지의 Base64 콘텐츠를 디코딩하고 디코딩된 콘텐츠를 복사합니다.",
            right: {
                decode: "디코딩된 복사(왼쪽 클릭) / Base64 디코딩(오른쪽 클릭)",
                copy: "Base64 디코딩(왼쪽 클릭) / 디코딩된 복사(오른쪽 클릭)"
            },
            option: {
                clickMethod: {
                    label: "클릭 방법",
                    description: "모든 메시지의 Base64 콘텐츠를 디코딩하려면 버튼을 변경하세요.",
                    left: "Base64 콘텐츠를 디코딩하려면 마우스 왼쪽 버튼을 클릭하세요.",
                    right: "Base64 콘텐츠를 디코딩하려면 마우스 오른쪽 버튼을 클릭하세요."
                }
            },
            modal: {
                title: "디코딩된 Base64 콘텐츠",
                content: "디코딩된 콘텐츠",
                copy: "디코딩된 콘텐츠 복사 {{index}}",
                copied: "디코딩된 콘텐츠가 클립보드에 복사되었습니다!"
            }
        },
        decor: {
            name: "Decor",
            description: "나만의 맞춤형 아바타 장식을 만들어 사용하거나 사전 설정에서 마음에 드는 것을 선택하세요.",
            presetPart: "{{name}} 사전 설정의 일부",
            createdBy: "작성자: {{author}}",
            copy: "프리셋 ID 복사",
            file: "파일",
            your: {
                title: "당신의 장식",
                subtitle: "자신이 만든 장식을 마우스 오른쪽 버튼으로 클릭하면 삭제할 수 있습니다."
            },
            option: {
                changeDecoration: {
                    label: "장식 변경",
                    description: "장식을 활성화하고 클라이언트를 다시 시작하여 아바타 장식을 변경하세요.",
                    also: "{{profiles}} 페이지에서도 장식 장식에 액세스할 수 있습니다.",
                    profiles: "프로필"
                },
                baseUrl: {
                    label: "기본 URL",
                    description: "장식 API URL"
                },
                agreedToGuidelines: {
                    label: "가이드라인에 동의함",
                    description: "가이드라인에 동의함"
                }
            },
            context: {
                decorationOptions: "장식 옵션",
                copyHash: "장식 해시 복사",
                deleteDecoration: "장식 삭제"
            },
            alert: {
                delete: {
                    title: "장식 삭제",
                    body: "{{decoration}}을(를) 삭제하시겠습니까?",
                    confirm: "삭제",
                    cancel: "취소"
                },
                logout: {
                    title: "로그아웃",
                    body: "정말로 Decor에서 로그아웃하시겠습니까?",
                    confirm: "로그아웃",
                    cancel: "취소"
                }
            },
            button: {
                change: "장식 변경",
                remove: "장식 제거",
                apply: "적용하다",
                cancel: "취소",
                browse: "먹다",
                submit: "검토를 위해 제출",
                continue: "계속하다",
                back: "돌아가기"
            },
            tooltip: {
                pendingReview: "이미 검토 대기 중인 장식이 있습니다.",
                pending: "검토 대기 중"
            },
            join: {
                tooltip: "Decor의 Discord 서버에 가입하여 장식 리뷰에 대한 알림을 받고 새로운 사전 설정이 출시되면",
                button: "디스코드 서버"
            },
            create: {
                title: "장식 만들기",
                notViolate: "장식을 제출하기 전에 {{guidelines}}을 위반하지 않는지 확인하세요.",
                guidelines: "지침",
                file: "파일은 APNG 또는 PNG여야 합니다.",
                fileHolder: "파일을 선택하세요",
                name: "This name will be used when referring to this decoration.",
                nameHolder: "컴패니언 큐브",
                nameTitle: "이름"
            },
            help: {
                update: "장식 리뷰에 대한 업데이트를 받으려면 {{server}}에 가입하고 직접 메시지를 허용하세요.",
                server: "Decor의 디스코드 서버"
            },
            guidelines: {
                hold: "기다리다",
                suspended: "장식을 제출하면 {{guidelines}}에 동의하게 됩니다. 이 지침을 읽지 않으면 계정이 정지되어 향후 더 많은 장식을 만들 수 없게 될 수 있습니다.",
                guidelines: "지침"
            }
        },
        demonstration: {
            name: "Demonstration",
            description: "테마 스크린샷을 찍기 위한 플러그인 - 이미지와 텍스트를 식별하는 검열 장치입니다.",
            toolbox: {
                toggle: "Toggle 데모"
            },
            keycode: "키코드를 변경하려면 {{keycode}}을 확인하세요!",
            this: "이 도구",
            okay: "좋아요!",
            option: {
                keyBind: {
                    label: "키 바인드",
                    description: "누르면 테마를 전환하는 키"
                },
                soundVolume: {
                    label: "사운드 볼륨",
                    description: "토글 사운드의 크기(0은 비활성화)"
                },
                showConfirmationModal: {
                    label: "확인 모달 표시",
                    description: "바로가기를 상기시켜주는 모달 표시"
                }
            },
            switch: {
                note: "나중에 이 설정을 다시 사용 설정할 수 있습니다.",
                disable: "모달을 비활성화하시겠습니까?"
            },
            shortcut: "그러면 모든 텍스트가 검열됩니다! 이를 비활성화하려면 다음 단축키를 기억하세요."
        },
        devCompanion: {
            name: "DevCompanion",
            description: "Dev Companion 플러그인. 작동하지 않거나 이상하게 동작하는 사항(버그일 가능성이 높음)을 핑이나 DM을 통해 MutanPlex에 신고해 주세요. 감사해요!",
            reconnect: "다시 연결",
            option: {
                notifyOnAutoConnect: {
                    label: "자동 연결 알림",
                    description: "Dev Companion이 자동으로 연결되었을 때 알림을 보낼지 여부입니다."
                },
                usePatchedModule: {
                    label: "패치된 모듈 사용",
                    description: "추출 요청 시 원본 대신 현재 패치된 모듈(패치된 경우)로 응답하세요."
                },
                reloadAfterToggle: {
                    label: "토글 후 다시 로드",
                    description: "'플러그인 비활성화/활성화' 명령을 받은 후 다시 로드하세요."
                }
            },
            toast: {
                title: "Dev Companion이 연결됨",
                connected: "WebSocket에 연결됨",
                disconnected: "Dev Companion 연결이 끊어졌습니다.",
                error: "개발 도우미 오류",
                reload: "새로고침 필요",
                failed: "종속성 시작 실패: {{failures}}",
                close: "닫다",
                stopping: "플러그인을 중지하는 중 오류가 발생했습니다. {{plugin}}",
                starting: "플러그인을 시작하는 중 오류가 발생했습니다 {{plugin}}",
                noMessage: "오류 메시지 없음",
                noReason: "이유가 제공되지 않음"
            }
        },
        disableCallIdle: {
            name: "DisableCallIdle",
            description: "3분 후 DM 음성 통화에서 자동으로 추방되고 AFK 음성 채널로 이동되는 것을 비활성화합니다."
        },
        disableCameras: {
            name: "DisableCameras",
            description: "기본적으로 통화 중 카메라를 비활성화합니다."
        },
        discordDevBanner: {
            name: "DiscordDevBanner",
            description: "빌드 ID를 표시하는 Discord 개발자 배너를 활성화합니다.",
            about: "Discord Dev 배너의 형식입니다. 다음 변수를 사용할 수 있습니다.",
            preview: "시사:",
            empty: "형식은 비워둘 수 없습니다.",
            variables: {
                discord: {
                    title: "불일치 변수",
                    icon: "디스코드 아이콘",
                    banner: "개발자 배너 아이콘",
                    channel: "Discord 빌드 채널(예: Stable)",
                    build: "Discord 빌드 번호(예: 123456)",
                    hash: "Discord 빌드 해시(예: 123456)"
                },
                plexcord: {
                    title: "Plexcord 변수",
                    icon: "플렉코드 아이콘",
                    name: "Name of Plexcord",
                    version: "Plexcord 버전(예: 1.0.0)",
                    hash: "Plexcord 빌드 해시(예: 123456)",
                    platform: "플랫폼 Plexcord가 실행 중인 플랫폼(예: Dev Build)"
                },
                plextron: {
                    title: "Plextron 특정 변수",
                    hashShort: "Plextron 빌드 해시(예: 123456789)",
                    platformType: "Plextron이 실행 중인 플랫폼(예: Dev Build)"
                },
                client: {
                    title: "클라이언트 변수",
                    icon: "데스크탑 아이콘",
                    name: "The name of the client (e.g. Discord Canary)",
                    version: "클라이언트 버전(예: 1.0.0)",
                },
                electron: {
                    title: "전자 변수",
                    icon: "전자 아이콘",
                    version: "전자 버전(예: 25.0.0)"
                },
                chromium: {
                    title: "크롬 변수",
                    icon: "크롬 아이콘",
                    version: "Chromium 엔진 버전(예: 125.0.0.0)"
                },
                misc: {
                    title: "기타 변수",
                    newline: "개행 문자"
                }
            }
        },
        dontFilterMe: {
            name: "DontFilterMe",
            description: "메시지에 AutoMod 사전 설정 목록의 용어가 포함되어 있으면 경고합니다.",
            alert: {
                title: "기다리다!",
                content: "귀하의 메시지에는 AutoMod 사전 설정 목록에 있는 용어(용어: '{{trigger}}')가 포함되어 있습니다.",
                content2: "귀하의 메시지가 서버 중재자에 의해 차단되고 잠재적으로 조정될 가능성이 높습니다.",
                confirm: "어쨌든 보내기",
                cancel: "취소"
            }
        },
        dontRoundMyTimestamps: {
            name: "DontRoundMyTimestamps",
            description: "항상 상대 타임스탬프를 내림하므로 7.6y는 8y 대신 7y가 됩니다."
        },
        dragFavoriteEmotes: {
            name: "DragFavoriteEmotes",
            description: "즐겨찾는 감정 표현에 드래그 앤 드롭 기능을 추가합니다."
        },
        dragify: {
            name: "Dragify",
            description: "사용자, 채널 또는 서버를 채팅에 연결하여 멘션이나 초대를 삽입하세요.",
            option: {
                userOutput: {
                    label: "사용자 출력",
                    description: "사용자 드롭 출력.",
                    mention: "언급하다",
                    id: "사용자 ID"
                },
                channelOutput: {
                    label: "채널 출력",
                    description: "채널 드롭 출력.",
                    mention: "#채널 멘션",
                    link: "채널 링크",
                },
                inviteExpireAfter: {
                    label: "초대 만료 날짜",
                    description: "초대 만료",
                    never: "절대",
                    thirtyMinutes: "30분",
                    oneHour: "1시간",
                    sixHours: "6시간",
                    twelveHours: "12시간",
                    oneDay: "1일",
                    sevenDays: "7일"
                },
                inviteMaxUses: {
                    label: "최대 사용 초대",
                    description: "초대 최대 용도",
                    noLimit: "제한 없음",
                    one: "1 사용",
                    five: "5가지 용도",
                    ten: "10가지 용도",
                    twentyFive: "25 용도",
                    fifty: "50회 사용",
                    hundred: "100번의 용도"
                },
                inviteTemporaryMembership: {
                    label: "임시 회원 초대",
                    description: "임시 회원 자격을 부여합니다.",
                },
                reuseExistingInvites: {
                    label: "기존 초대 재사용",
                    description: "새 초대를 만드는 대신 기존 초대를 재사용하세요."
                },
                allowChatBodyDrop: {
                    label: "채팅 본문 삭제 허용",
                    description: "텍스트를 삽입하려면 기본 채팅 본문에 드롭하는 것을 허용하세요."
                }
            },
            toast: {
                failed: {
                    drop: "Dragify가 드롭을 처리하지 못했습니다.",
                },
                invite: {
                    created: "초대장이 생성되었습니다.",
                    unable: "초대장을 만들 수 없습니다.",
                    noChannel: "초대할 수 있는 채널이 없습니다.",
                }
            },
            ghost: {
                user: "사용자",
                server: "섬기는 사람",
                dm: "직접 메시지",
                badge: {
                    channel: "채널",
                    thread: "실",
                    voice: "목소리",
                    forum: "법정",
                    media: "메디아",
                    announcement: "발표",
                    dm: "DM",
                    user: "사용자",
                    server: "섬기는 사람"
                }
            }
        },
        elementHighlighter: {
            name: "ElementHighlighter",
            description: "요소를 쉽게 강조 표시하고 검사합니다.",
            modal: {
                recording: "녹음...",
                reset: "다시 놓기"
            },
            option: {
                keybind: {
                    label: "키 바인드",
                    description: "형광펜 전환"
                },
                showClasses: {
                    label: "수업 표시",
                    description: "도구 설명에 요소의 CSS 클래스 이름을 표시합니다."
                },
                showId: {
                    label: "ID 표시",
                    description: "도구 설명에 요소의 ID 속성을 표시합니다."
                },
                showFont: {
                    label: "글꼴 표시",
                    description: "계산된 글꼴 모음 및 글꼴 크기 표시"
                },
                showPadding: {
                    label: "패딩 표시",
                    description: "요소의 패딩 값을 표시합니다."
                },
                showMargin: {
                    label: "마진 표시",
                    description: "요소의 여백 값을 표시합니다."
                },
                showBorderRadius: {
                    label: "테두리 반경 표시",
                    description: "요소의 테두리 반경 값을 표시합니다."
                },
                showPosition: {
                    label: "위치 표시",
                    description: "요소의 CSS 위치 유형 및 Z-색인 표시"
                },
                showDisplay: {
                    label: "디스플레이 표시",
                    description: "Flex 또는 그리드 속성과 함께 요소의 표시 유형을 표시합니다."
                }
            },
            toast: {
                copied: {
                    color: "색상을 클립보드에 복사했습니다!",
                }
            }
        },
        exitSounds: {
            name: "ExitSounds",
            description: "음성 연결이 끊어지면 사운드보드 소리를 재생합니다.",
            button: "전역 종료음으로 설정",
            toast: {
                failedToPlay: "이런! 문제가 발생했습니다."
            },
            option: {
                soundGuildId: {
                    label: "사운드 길드 ID",
                    description: "사운드가 포함된 서버를 선택합니다.",
                    placeholder: "서버를 선택하세요..."
                },
                soundId: {
                    label: "사운드 ID",
                    description: "재생하려는 사운드의 ID를 입력하세요.",
                    placeholder: "사운드 ID를 입력하세요..."
                }
            }
        },
        experiments: {
            name: "Experiments",
            description: "Discord에서 실험 및 기타 개발자 전용 기능에 액세스할 수 있습니다!",
            modal: {
                about: {
                    title: "추가 정보",
                    body: "{{key}}을(를) 통해 Discord의 DevTools를 열 수 있습니다."
                },
                warning: {
                    title: "기다리다!!",
                    body: "실험은 출시되지 않은 Discord 기능입니다. 작동하지 않을 수도 있고 클라이언트가 중단되거나 계정이 비활성화될 수도 있습니다.",
                    notReponsible: "자신이 무엇을 하고 있는지 알고 있는 경우에만 실험을 사용하세요. Plexcord는 실험 활성화로 인해 발생하는 피해에 대해 책임을 지지 않습니다.",
                    useAtOwnRisk: "실험이 무엇인지 모른다면 무시하세요. 실험이 무엇인지 묻지 마세요. 우리는 아마 모릅니다.",
                    serverSideFeatures: "아니요, '클라이언트에게 보내기' 확인란 선택과 같은 서버측 기능을 사용할 수 없습니다."
                }
            },
            option: {
                toolbarDevMenu: {
                    label: "툴바 개발 메뉴",
                    description: "도움말(?) 툴바 버튼(채팅 오른쪽 상단)을 디스코드 개발자 메뉴로 변경"
                }
            }
        },
        exportMessages: {
            name: "ExportMessages",
            description: "단일 메시지, 사용자의 모든 메시지 또는 모든 채널 메시지 등 메시지를 파일로 내보낼 수 있습니다.",
            option: {
                maxMessages: {
                    label: "최대 메시지",
                    description: "내보낼 최대 메시지 수(0 = 무제한)"
                },
                includeAttachments: {
                    label: "첨부 파일 포함",
                    description: "내보내기에 첨부 파일 정보 포함"
                },
                includeEmbeds: {
                    label: "포함 포함",
                    description: "내보내기에 삽입 정보 포함"
                },
                includeReactions: {
                    label: "반응 포함",
                    description: "내보내기에 반응 정보 포함"
                },
                includeComponents: {
                    label: "구성요소 포함",
                    description: "내보내기에 구성요소 정보 포함"
                }
            },
            message: {
                invalid: "잘못된 메시지 - 작성자 없음",
                unknownUser: "알 수 없는 사용자",
                botEmbed: "봇 삽입 메시지",
                attachments: "첨부파일",
                unknown: "알려지지 않은",
                noUrl: "URL 없음",
                embeds: "삽입",
                title: "제목",
                description: "설명",
                url: "URL",
                footer: "보행인",
                author: "작가",
                fields: "전지",
                components: "구성요소",
                component: "요소",
                interactiveElement: "인터랙티브 요소",
                reactions: "반응",
                errorFormatting: "메시지 형식 지정 오류",
                unknownError: "알 수 없는 오류",
                header: "{{channelName}}의 {{titlePrefix}} {{displayName}}",
                from: "보낸 메시지",
                direct: "직접 메시지",
                exported: "내보낸 날짜",
                total: "총 메시지"
            },
            toast: {
                export: {
                    title: "메시지 내보내기",
                    body: "메시지를 내보내지 못했습니다."
                },
                noMessages: {
                    title: "메시지 내보내기",
                    notFoundUser: "이 채널에서 이 사용자가 보낸 메시지를 찾을 수 없습니다.",
                    notFoundChannel: "이 채널에는 메시지가 없습니다"
                },
                failed: {
                    title: "메시지 내보내기",
                    body: "메시지를 내보내지 못했습니다."
                },
                userNotFound: {
                    title: "메시지 내보내기",
                    body: "사용자를 찾을 수 없습니다"
                },
                complete: {
                    title: "내보내기 완료",
                    saved: "파일이 저장되었습니다",
                    downloaded: "파일이 다운로드됨",
                    messages: "메시지"
                }
            },
            context: {
                exportMessage: "이 메시지 내보내기",
                exportAll: "{{user}}에서 모든 메시지 내보내기",
                user: "사용자",
                exportAllChannel: "모든 채널 메시지 내보내기"
            }
        },
        expressionCloner: {
            name: "ExpressionCloner",
            description: "감정 표현과 스티커를 자신의 서버에 복제할 수 있습니다(마우스 오른쪽 버튼으로 클릭).",
            modal: {
                title: "맞춤 이름",
                invalidName: "이름은 2~32자여야 하며 영숫자만 포함할 수 있습니다."
            },
            toast: {
                success: "{{name}}을(를) {{guild}}에 성공적으로 복제했습니다!",
                yourServer: "귀하의 서버",
                failed: "복제 실패:",
                console: "문제가 발생했습니다(콘솔을 확인하세요!)"
            },
            context: {
                clone: "{{type}} 복제",
                cloneName: "{{data}} 복제"
            }
        },
        f8break: {
            name: "F8Break",
            description: "DevTools(+ 중단점)가 열려 있는 상태에서 F8을 누르면 클라이언트를 일시 중지합니다."
        },
        fakeNitro: {
            name: "FakeNitro",
            description: "가짜 이모티콘/스티커를 보내고, Nitro 테마를 사용하고, Nitro 품질로 스트리밍할 수 있습니다.",
            option: {
                enableEmojiBypass: {
                    label: "이모티콘 우회 활성화",
                    description: "가짜 이모티콘 보내기 허용(맞춤 이모티콘 사용에 대한 누락된 권한도 무시함)"
                },
                emojiSize: {
                    label: "이모티콘 크기",
                    description: "보낼 때 이모티콘 크기"
                },
                transformEmojis: {
                    label: "이모티콘 변환",
                    description: "가짜 이모티콘을 진짜 이모티콘으로 변환할지 여부"
                },
                enableStickerBypass: {
                    label: "스티커 우회 활성화",
                    description: "가짜 스티커 전송 허용(누락된 스티커 사용 권한도 무시함)"
                },
                stickerSize: {
                    label: "스티커 크기",
                    description: "보낼 때 스티커의 크기"
                },
                transformStickers: {
                    label: "스티커 변형",
                    description: "가짜 스티커를 진짜 스티커로 변환할지 여부"
                },
                transformCompoundSentence: {
                    label: "복합 문장 변환",
                    description: "가짜 스티커, 이모티콘을 중문으로 변환할지 여부(단순한 가짜 이모티콘이나 스티커 링크보다 내용이 더 많은 문장)"
                },
                enableStreamQualityBypass: {
                    label: "스트림 품질 우회 활성화",
                    description: "Nitro 품질로 스트리밍 허용"
                },
                useStickerHyperLinks: {
                    label: "스티커 하이퍼링크 사용",
                    description: "가짜 스티커 발송 시 하이퍼링크 사용 여부"
                },
                useEmojiHyperLinks: {
                    label: "이모티콘 하이퍼링크 사용",
                    description: "가짜 이모티콘 전송 시 하이퍼링크 사용 여부"
                },
                hyperLinkText: {
                    label: "하이퍼링크 텍스트",
                    description: "하이퍼링크에 사용해야 하는 텍스트입니다. {{NAME}}은 이모티콘/스티커 이름으로 대체됩니다."
                },
                disableEmbedPermissionCheck: {
                    label: "포함 권한 확인 비활성화",
                    description: "가짜 이모티콘, 스티커 전송 시 삽입 권한 확인 비활성화 여부"
                }
            },
            modal: {
                sticker: "이것은 FakeNitro 스티커이며 당신만을 위한 실제 스티커처럼 렌더링됩니다. 플러그인을 사용하지 않는 사용자에게 링크로 표시됩니다.",
                emoji: "이것은 FakeNitro 이모티콘이며 귀하에게만 실제 이모티콘처럼 렌더링됩니다. 플러그인을 사용하지 않는 사용자에게 링크로 표시됩니다."
            },
            alert: {
                notice: {
                    title: "기다리다!",
                    body: "FakeNitro 이모티콘 또는 스티커가 포함된 메시지를 보내거나 편집하려고 합니다. 그러나 현재 채널에 링크를 삽입할 수 있는 권한이 없습니다. 이 메시지를 보내시겠습니까? FakeNitro 항목은 링크로만 표시됩니다.",
                    footer: "FakeNitro 설정에서 이 경고를 비활성화할 수 있습니다",
                    confirm: "어쨌든 보내기",
                    cancel: "취소",
                    secondaryConfirm: "다시 표시하지 않음"
                },
                apngSticker: {
                    title: "기다리다!",
                    body: "애니메이션 FakeNitro 스티커가 포함되어 있고 현재 채널에 파일을 첨부할 수 있는 권한이 없으므로 이 메시지를 보낼 수 없습니다. 계속하려면 스티커를 제거하세요."
                }
            }
        },
        fakeProfileThemes: {
            name: "FakeProfileThemes",
            description: "보이지 않는 3y3 인코딩 덕분에 프로필의 색상을 숨겨 프로필 테마를 지정할 수 있습니다.",
            button: {
                copy: "3y3 복사"
            },
            modal: {
                usage: "용법",
                preview: "시사",
                intro: "이 플러그인을 활성화하면 호환되는 플러그인을 사용하는 다른 사람들의 프로필에 사용자 정의 색상이 표시됩니다.",
                setColor: "자신만의 색상을 설정하려면:",
                step1: "• 아래 색상 선택기를 사용하여 색상을 선택하세요.",
                step2: "• {{copy}} 버튼을 클릭하세요.",
                step3: "• 보이지 않는 텍스트를 자기소개의 아무 곳에나 붙여넣으세요.",
                pickers: "색상 선택기",
                primary: "주요한",
                accent: "악센트"
            },
            option: {
                nitroFirst: {
                    label: "니트로 퍼스트",
                    description: "둘 다 있는 경우 기본 색상 소스",
                    nitro: "니트로 색상",
                    fake: "가짜 색상"
                }
            }
        },
        fakeProfileThemesAndEffects: {
            name: "FakeProfileThemesAndEffects",
            description: "보이지 않는 3y3 인코딩 덕분에 프로필의 색상과 효과를 숨겨 프로필 테마 및 프로필 효과를 허용합니다.",
            option: {
                prioritizeNitro: {
                    label: "니트로 우선순위",
                    description: "우선순위를 정할 소스",
                    nitro: "니트로",
                    aboutMe: "나에 대해"
                },
                hideBuilder: {
                    label: "빌더 숨기기",
                    description: "사용자 프로필 및 서버 프로필 설정 페이지에서 FPTE Builder 숨기기"
                }
            },
            modal: {
                primary: "주요한",
                accent: "악센트",
                effect: "효과",
                usage: {
                    title: "용법",
                    intro: "이 플러그인을 활성화하면 이 플러그인을 사용하는 다른 사람들의 프로필에서 사용자 정의 테마 색상과 효과를 볼 수 있습니다.",
                    setColor: "자신만의 색상과 효과를 설정하려면:",
                    step1: "프로필 설정으로 이동",
                    step2: "FPTE Builder를 사용하여 프로필 테마 색상과 효과를 선택하세요.",
                    step3: "{{copy}} 버튼을 클릭하세요",
                    step4: "자기소개의 아무 곳에나 보이지 않는 텍스트를 붙여넣으세요."
                }
            },
            toast: {
                copied: "FPTE가 클립보드에 복사되었습니다!",
                empty: "FPTE 빌더가 비어 있습니다. 복사할 것이 없습니다!"
            },
            button: {
                copyFPTE: "FPTE 복사",
                reset: "다시 놓기",
                preview: "FPTE 빌더 미리보기",
                buildBackwards: "이전 버전과 호환되는 FPTE 구축",
                moreCharacters: "더 많은 문자를 사용합니다"
            }
        },
        fastDeleteChannels: {
            name: "FastDeleteChannels",
            description: "채널을 삭제하려면 휴지통 아이콘을 추가하세요.",
            option: {
                keyBind: {
                    label: "키 바인드",
                    description: "누르면 휴지통을 전환하는 키입니다."
                },
                reqCtrl: {
                    label: "통제 필요",
                    description: "Ctrl 키를 누르고 있어야 합니다."
                },
                reqShift: {
                    label: "교대 필요",
                    description: "Shift 키를 누르고 있어야 합니다."
                },
                reqAlt: {
                    label: "Alt 필요",
                    description: "Alt 키를 누르고 있어야 합니다."
                }
            }
        },
        favoriteEmojiFirst: {
            name: "FavouriteEmojiFirst",
            description: "이모티콘 자동완성에서 좋아하는 이모티콘을 먼저 표시하고 이모티콘 별칭도 제공합니다.",
            option: {
                aliases: {
                    label: "별칭",
                    description: "이모티콘 별칭을 관리하세요."
                },
                clearAll: {
                    label: "모두 지우기",
                    description: "모든 별칭을 삭제합니다."
                }
            },
            modal: {
                clear: {
                    title: "모든 별칭 삭제",
                    description: "이렇게 하면 저장한 모든 이모티콘 별칭이 제거됩니다.",
                    confirm: "모든 별칭 삭제"
                },
                set: {
                    title: "별칭 설정",
                    description: "{{emoji}}에 대한 별칭 설정",
                    placeholder: "별칭(예: '행복하다'",
                    save: "구하다",
                    error: "중복된 별칭"
                }
            },
            toast: {
                set: "{{emoji}}에 대한 별칭이 설정되었습니다.",
                clearAll: "모든 이모티콘 별칭을 삭제했습니다.",
                failedDeleted: "별칭을 삭제하지 못했습니다.",
                removed: "제거된 별칭: {{alias}}",
                failedRemove: "별칭을 제거하지 못했습니다.",
                duplicate: "중복된 별칭",
                failedSave: "별칭을 저장하지 못했습니다."
            },
            button: {
                edit: "별칭 수정",
                set: "별칭 설정"
            }
        },
        favoriteGifSearch: {
            name: "FavouriteGifSearch",
            description: "즐겨찾는 GIF에 검색창을 추가합니다.",
            placeholder: "좋아하는 GIF 검색",
            option: {
                searchOption: {
                    label: "검색 옵션",
                    description: "검색하려는 URL 부분",
                    url: "전체 URL",
                    path: "경로만(/somegif.gif)",
                    hostandpath: "호스트 및 경로(tenor.com somgif.gif)"
                }
            }
        },
        favouriteAnything: {
            name: "FavouriteAnything",
            description: "어떤 이미지든 즐겨찾기에 추가"
        },
        fileDownloadButton: {
            name: "FileDownloadButton",
            description: "파일 오른쪽 상단에 다운로드 버튼을 추가합니다."
        },
        findReply: {
            name: "FindReply",
            description: "채널의 메시지에 대한 가장 빠른 응답으로 이동합니다(이전 대화를 더 쉽게 따라갈 수 있음).",
            context: {
                jump: "답장으로 이동"
            },
            toast: {
                navigate: "답글 사이를 이동하려면 하단 패널을 사용하세요.",
                container: "컨테이너 요소를 찾을 수 없습니다.",
                couldntFind: "답변 메시지를 찾을 수 없습니다."
            },
            option: {
                includePings: {
                    label: "핑 포함",
                    description: "@작성자가 직접 보낸 메시지도 검색합니다."
                },
                includeAuthor: {
                    label: "작성자 포함",
                    description: "또한 정확한 메시지뿐만 아니라 작성자에게 일반적으로 응답하는 메시지도 검색합니다."
                },
                hideButtonIfNoReply: {
                    label: "응답이 없으면 버튼 숨기기",
                    description: "메시지에 대한 응답이 없으면 버튼을 숨깁니다."
                }
            }
        },
        fixCodeblockGap: {
            name: "FixCodeblockGap",
            description: "코드 블록과 그 아래 텍스트 사이의 간격을 제거합니다."
        },
        fixFileExtensions: {
            name: "FixFileExtensions",
            description: "가능한 경우 호환되는 지원 형식으로 이름을 바꾸어 파일 확장자를 수정합니다."
        },
        fixImagesQuality: {
            name: "FixImagesQuality",
            description: "원본 소스를 강제로 사용하여 이미지 품질을 향상시킵니다.",
            option: {
                originalImagesInChat: {
                    label: "채팅의 원본 이미지",
                    description: "채팅에서도 원본 이미지를 로드하세요. 경고: 위의 주의사항을 읽어보세요."
                }
            },
            modal: {
                about: {
                    title: "기본 동작은 다음과 같습니다.",
                    body: "— 채팅에서는 최적화되었지만 전체 해상도 이미지가 로드됩니다.",
                    body2: "— 이미지 모달에서는 원본 이미지가 로드됩니다.",
                    body3: "채팅에서 원본 이미지를 활성화할 수도 있지만 다음 사항에 주의하세요.",
                    warning: "— 채팅의 애니메이션 이미지(GIF, WebP 등)는 앱에 초점이 맞춰져 있는지 여부에 관계없이 항상 애니메이션으로 표시됩니다.",
                    warning2: "— 지연이 발생할 수 있습니다.",
                }
            }
        },
        fixSpotifyEmbeds: {
            name: "FixSpotifyEmbeds",
            description: "볼륨을 사용자 정의할 수 있도록 하여 Spotify 임베드가 엄청나게 큰 문제를 수정했습니다.",
            option: {
                volume: {
                    label: "용량",
                    description: "Spotify 삽입을 위해 설정할 볼륨 %입니다. 10% 이상이면 너무 시끄럽습니다."
                }
            }
        },
        fixYoutubeEmbeds: {
            name: "FixYoutubeEmbeds",
            description: "Discord에서 표시되지 않도록 차단된 YouTube 비디오를 우회합니다(예: UMG)"
        },
        followUser: {
            name: "FollowUser",
            description: "항상 동일한 VC에 있도록 사용자 상황에 맞는 메뉴에 팔로우 옵션을 추가합니다.",
            indicatorTooltip: "{{user}} 팔로우(수동으로 실행하려면 클릭, 팔로우 취소하려면 마우스 오른쪽 버튼 클릭)",
            unknownUser: "알 수 없는 사용자",
            option: {
                executeOnFollow: {
                    label: "팔로우 시 실행",
                    description: "사용자를 팔로우할 때 동일한 VC에 있어야 합니다."
                },
                onlyManualTrigger: {
                    label: "수동 트리거만 가능",
                    description: "표시기 클릭 시에만 트리거"
                },
                followLeave: {
                    label: "팔로우 탈퇴",
                    description: "팔로우한 사용자가 나갈 때에도 나가기"
                },
                autoMoveBack: {
                    label: "자동 뒤로 이동",
                    description: "이동 시 팔로우한 사용자의 VC로 자동 이동"
                },
                followUserId: {
                    label: "사용자 ID 팔로우",
                    description: "팔로우된 사용자 ID"
                },
                channelFull: {
                    label: "채널이 가득 참",
                    description: "채널이 더 이상 꽉 차 있지 않으면 채널로 이동을 시도합니다."
                }
            },
            toast: {
                channelFull: "채널이 꽉 찼습니다",
                newVc: "사용자를 따라 새 음성 채널로 이동",
                insufficientPermissions: "음성 채널에 들어갈 수 있는 권한이 부족합니다.",
                sameVc: "이미 같은 채널에 있습니다.",
                disconnect: "팔로우된 사용자가 떠났습니다. 연결이 끊어진",
                notFollowing: "사용자를 따라갔지만 연결 끊김을 따르지 않음",
                notVc: "팔로우된 사용자가 음성 채널에 없습니다."
            },
            context: {
                follow: "사용자 팔로우",
                unfollow: "사용자 팔로우 해제"
            }
        },
        fontLoader: {
            name: "FontLoader",
            description: "Google Fonts에서 모든 글꼴을 로드합니다.",
            option: {
                selectedFont: {
                    label: "선택한 글꼴",
                    description: "현재 선택된 글꼴"
                },
                fontSearch: {
                    label: "글꼴 검색",
                    description: "Google Fonts 검색 및 선택"
                },
                applyOnCodeBlocks: {
                    label: "코드 블록에 적용",
                    description: "코드 블록에 글꼴 적용"
                }
            },
            toast: {
                failedLoad: "글꼴을 로드하지 못했습니다."
            },
            modal: {
                settings: {
                    title: "Google 글꼴 검색",
                    description: "적용할 글꼴을 선택하세요.",
                    placeholder: "글꼴 검색...",
                    previewText: "날렵한 갈색여우는 게으른 개를 뛰어넘는다",
                    authors: "작성자: {{authors}}"
                }
            }
        },
        forceOwnerCrown: {
            name: "ForceOwnerCrown",
            description: "서버 규모가 큰 경우에도 사용자 이름 옆에 소유자 왕관을 강제 적용합니다."
        },
        forwardAnywhere: {
            name: "ForwardAnywhere",
            description: "전달이 실패하면 일반 메시지로 보냅니다. NSFW 전달도 허용합니다.",
            option: {
                forwardPreface: {
                    label: "앞으로 서문",
                    description: "전달된 콘텐츠 앞에 무엇을 붙여야 할까요?"
                }
            },
            context: {
                attachments: "첨부파일",
                forwarded: "다음에서 전달됨"
            }
        },
        freaky: {
            name: "Freaky",
            description: "/freaky 명령을 사용하여 이상한 글꼴로 메시지를 보낼 수 있습니다.",
            command: {
                freaky: "정말 이상해요.",
                message: "당신의 메시지를 이상하게 만드세요"
            },
            option: {
                addFreakyEnding: {
                    label: "이상한 엔딩 추가",
                    description: "끝에 👅 또는 ❤️을 추가하세요."
                }
            }
        },
        frequentQuickSwitcher: {
            name: "Frequent Quick Switcher",
            description: "가장 자주 사용하는 채널이 되도록 Quick Switcher 결과를 다시 작성하고 필터링합니다."
        },
        friendCloud: {
            name: "FriendCloud",
            description: "가장 많이 상호 작용하는 사용자를 시각화하기 위해 /friendcloud 명령을 추가합니다.",
            command: {
                friendcloud: {
                    description: "친구 클라우드를 시각화하세요",
                    count: "표시할 사용자 수",
                    mustHigher: "개수는 1 이상이어야 합니다!",
                    noAffinities: "연관관계를 찾을 수 없습니다. [개인정보 설정](<https://support.discord.com/hc/en-us/articles/21864805694999-Data-Used-to-Improve-Discord>)을 확인하세요.",
                    noValid: "관심분야에서 유효한 사용자를 찾을 수 없습니다. [개인정보 설정](<https://support.discord.com/hc/en-us/articles/21864805694999-Data-Used-to-Improve-Discord>)을 확인하세요.",
                    genFailed: "이미지를 생성할 수 없습니다. :c"
                }
            }
        },
        friendCodes: {
            name: "FriendCodes",
            description: "친구 코드를 생성하여 쉽게 친구를 추가하세요",
            card: {
                expires: "만료 <t:{{expiration}}:R> • {{uses}}/{{maxUses}} 사용",
                copy: "복사",
                copied: "복사되었습니다!",
                codes: "당신의 친구 코드",
                count: "친구 코드 - {{invites}}",
                create: "친구 코드 생성",
                revoke: "모든 친구 코드 취소",
                loading: "로드 중...",
                dontHave: "친구 코드가 없습니다."
            }
        },
        friendInvites: {
            name: "FriendInvites",
            description: "슬래시 명령(/친구 초대 생성, /친구 초대 보기, /친구 초대 취소)을 통해 친구 초대 링크를 생성하고 관리합니다.",
            command: {
                create: {
                    description: "친구 초대 링크를 생성합니다.",
                    message: "discord.gg/{{code}}`\n· 만료 <t:{{expiration}}:R>\n· 최대 사용: {{uses}}"
                },
                view: {
                    description: "생성된 모든 친구 초대 목록을 봅니다.",
                    message: "_discord.gg/{{code}}_ \n· 만료: <t:{{expiration}}:R> \n· 사용 시간: {{uses}}/{{maxUses}}",
                    noInvites: "활성화된 친구 초대가 없습니다."
                },
                revoke: {
                    description: "생성된 모든 친구 초대를 취소합니다.",
                    message: "친구 초대가 모두 취소되었습니다."
                }
            }
        },
        friendshipRanks: {
            name: "FriendshipRanks",
            description: "사용자와 얼마나 오랫동안 친구 관계를 유지했는지 보여주는 배지를 추가합니다.",
            badge: {
                sprout: {
                    name: "Sprout",
                    description: "당신의 우정은 이제 막 시작되었습니다"
                },
                blooming: {
                    name: "Blooming",
                    description: "당신의 우정이 거기에 도달하고 있습니다! (1개월)"
                },
                burning: {
                    name: "Burning",
                    description: "당신의 우정은 한계 속도에 도달했습니다 (3개월)"
                },
                fighter: {
                    name: "Fighter",
                    description: "우정이 돈독하다 (6개월)"
                },
                star: {
                    name: "Star",
                    description: "당신의 우정은 한동안(1년) 지속되었습니다."
                },
                royal: {
                    name: "Royal",
                    description: "당신의 우정은 2년 동안 계속 이어졌습니다!"
                },
                besties: {
                    name: "Besties",
                    description: "이걸 어떻게 관리하나요??? (5년)"
                }
            }
        },
        friendsSince: {
            name: "FriendsSince",
            description: "사용자 팝아웃에 누군가와 언제 친구가 되었는지 표시됩니다.",
            section: "이후 친구"
        },
        friendTags: {
            name: "FriendTags",
            description: "&로 검색을 시작하여 Quick Switcher에서 사용자 정의 태그로 필터링할 수 있습니다.",
            modal: {
                name: "Name",
                users: "사용자(쉼표로 구분)",
                userlist: "사용자 목록(삭제하려면 사용자를 클릭하세요)",
                remove: "제거하다",
                add: "추가하다",
                tag: "꼬리표",
                removeFrom: "에서 제거",
                addTo: "다음에 추가"
            },
            option: {
                tagConfiguration: {
                    label: "태그 구성",
                    description: "태그 구성 구성요소"
                }
            }
        },
        fullSearchContext: {
            name: "FullSearchContext",
            description: "메시지 검색 결과의 메시지 컨텍스트 메뉴에 사용자가 기대하는 모든 옵션이 포함되도록 합니다."
        },
        fullUserInChatbox: {
            name: "FullUserInChatbox",
            description: "채팅 상자에서 사용자가 언급한 내용에 왼쪽/오른쪽 클릭과 같은 더 많은 기능이 포함됩니다."
        },
        fullVCPFP: {
            name: "FullVCPFP",
            description: "아바타가 전체 VC 타일을 차지하게 만듭니다."
        },
        gameActivityToggle: {
            name: "GameActivityToggle",
            description: "게임 활동을 표시하거나 숨기기 위해 사용자 팝아웃에 토글을 추가합니다.",
            tooltip: "게임 활동 전환",
            gameActivity: {
                enabled: "게임 활동 활성화됨",
                disabled: "게임 활동 비활성화됨"
            },
            option: {
                oldIcon: {
                    label: "이전 아이콘",
                    description: "Discord 아이콘 재설계 이전의 이전 아이콘 스타일을 사용하세요"
                },
                location: {
                    label: "위치",
                    description: "게임 활동 전환 버튼을 표시할 위치",
                    panel: "음소거/청각 장애 옆",
                    toolbox: "Plexcord 도구 상자"
                }
            }
        },
        ghosted: {
            name: "Ghosted",
            description: "DM에 답하지 않으면 귀여운 유령이 나타납니다",
            modal: {
                title: "고스트된 사용자",
                no: "고스트된 사용자 없음",
                unghost: "유령이 아닌",
                unknown: "알려지지 않은",
                unnamedGroup: "이름 없는 그룹",
                unknownUser: "알 수 없는 사용자",
                clearAll: "모두 지우기",
                noGhost: "여기에는 유령이 없습니다!",
                clear: "분명한"
            },
            option: {
                showIndicator: {
                    label: "표시기 표시",
                    description: "서버 목록 상단에 고스트 카운터 표시"
                },
                showDmIcons: {
                    label: "DM 아이콘 표시",
                    description: "개별 DM 옆에 고스트 아이콘 표시"
                },
                ignoreGroupDms: {
                    label: "그룹 DM 무시",
                    description: "고스팅에서 모든 그룹 DM 제외"
                },
                exemptedChannels: {
                    label: "면제된 채널",
                    description: "고스팅에서 제외할 쉼표로 구분된 채널 ID 목록(ID를 복사하려면 DM 채널을 마우스 오른쪽 버튼으로 클릭)"
                },
                ignoreBots: {
                    label: "봇 무시",
                    description: "봇의 DM 무시"
                },
                maxInactiveTimeMs: {
                    label: "최대 비활성 시간",
                    description: "이 시간 내에서 활성화된 고스트 DM만 표시",
                    no: "제한 없음",
                    oneHour: "1시간",
                    oneDay: "1일",
                    oneWeek: "1주일",
                    oneMonth: "1개월"
                }
            }
        },
        gifCollections: {
            name: "GifCollection",
            description: "GIF 컬렉션을 만들 수 있습니다",
            context: {
                copyImageLink: "이미지 링크 복사",
                copyUrl: "URL 복사",
                collection: {
                    add: "컬렉션에 추가",
                    gif: "GIF 컬렉션",
                    delete: "컬렉션 삭제",
                    create: "컬렉션 만들기",
                    remove: "제거하다",
                    information: "수집정보",
                    name: "이름",
                    gifs: "GIF",
                    created: "생성 날짜",
                    updated: "마지막 업데이트",
                    close: "닫다",
                    rename: "이름 바꾸기",
                    move: "컬렉션으로 이동",
                    select: "항목을 이동할 컬렉션을 선택하세요."
                },
                gif: {
                    information: "정보",
                    added: "추가 날짜",
                    width: "너비",
                    height: "키",
                    close: "닫다"
                }
            },
            option: {
                itemPrefix: {
                    label: "품목 접두어",
                    description: "GIF 항목의 접두사"
                },
                collectionPrefix: {
                    label: "컬렉션 접두어",
                    description: "컬렉션의 접두사"
                },
                onlyShowCollections: {
                    label: "컬렉션만 표시",
                    description: "컬렉션만 표시"
                },
                stopWarnings: {
                    label: "경고 중지",
                    description: "삭제 경고 중지"
                },
                showCopyImageLink: {
                    label: "이미지 복사 링크 표시",
                    description: "상황에 맞는 메뉴에 {{copyImageLink}} 옵션 표시"
                },
                preventDuplicates: {
                    label: "중복 방지",
                    description: "동일한 GIF를 컬렉션에 여러 번 추가하는 것을 방지하세요."
                },
                defaultEmptyCollectionImage: {
                    label: "기본 빈 컬렉션 이미지",
                    description: "컬렉션에 이미지/GIF가 없을 때 표시될 이미지/GIF"
                },
                collectionsSortType: {
                    label: "컬렉션 정렬 유형",
                    description: "컬렉션 정렬 유형"
                },
                collectionsSortOrder: {
                    label: "컬렉션 정렬 순서",
                    description: "컬렉션 정렬 순서"
                },
                collectionsSort: {
                    label: "컬렉션 정렬",
                    description: "컬렉션 정렬 방법 결정",
                    title: "컬렉션 정렬",
                    sortDescription: "컬렉션의 정렬 기준을 선택하세요",
                    sortBy: "정렬 기준",
                    name: "이름",
                    creationDate: "생성 날짜",
                    modifiedDate: "수정된 날짜",
                    ascending: "오름차순",
                    descending: "내림차순"
                },
                importGifs: {
                    label: "GIF 가져오기",
                    description: "컬렉션 가져오기",
                    button: "컬렉션 가져오기"
                },
                exportGifs: {
                    label: "GIF 내보내기",
                    description: "컬렉션 내보내기",
                    button: "컬렉션 내보내기"
                },
                resetCollections: {
                    label: "컬렉션 재설정",
                    description: "컬렉션을 기본값으로 재설정(모든 컬렉션 삭제)",
                    button: "컬렉션 재설정"
                }
            },
            toast: {
                copied: "이미지 링크가 클립보드에 복사되었습니다!",
                urlCopied: "URL이 클립보드에 복사되었습니다!",
                already: "해당 컬렉션이 이미 존재합니다.",
                alreadyCollection: "해당 GIF는 이미 해당 컬렉션에 있습니다."
            },
            modal: {
                create: {
                    title: "컬렉션 만들기",
                    name: "컬렉션 이름",
                    create: "만들다"
                },
                rename: {
                    title: "컬렉션 이름 바꾸기",
                    name: "새 컬렉션 이름",
                    warning: "이름은 24자를 초과할 수 없습니다.",
                    rename: "이름 바꾸기"
                }
            },
            alert: {
                import: {
                    title: "확실합니까?",
                    body: "컬렉션을 가져오면 현재 컬렉션을 덮어쓰게 됩니다.",
                    confirm: "수입",
                    cancel: "괜찮아요"
                },
                reset: {
                    title: "확실합니까?",
                    body: "컬렉션을 재설정하면 모든 컬렉션이 제거됩니다.",
                    confirm: "다시 놓기",
                    cancel: "괜찮아요"
                },
                delete: {
                    title: "확실합니까?",
                    deleteBody: "이 컬렉션을 정말로 삭제하시겠습니까?",
                    removeBody: "이 항목을 정말로 제거하시겠습니까?",
                    confirm: "삭제",
                    remove: "제거하다",
                    cancel: "괜찮아요"
                }
            }
        },
        gifPaste: {
            name: "GifPaste",
            description: "채팅 상자에 GIF를 직접 붙여넣을 수 있습니다."
        },
        gifRoulette: {
            name: "GifRoulette",
            description: "서버 소유자에게 10분의 1의 확률로 즐겨찾는 GIF를 무작위로 보내는 명령을 추가합니다.",
            command: {
                gifRoulette: {
                    description: "운명을 유혹하고 GIF를 보내보세요"
                }
            },
            option: {
                pingOwnerChance: {
                    label: "핑 소유자 확률",
                    description: "길드 소유자에게 핑을 보낼 확률이 10분의 1이어야 하는지 여부(오 안돼)"
                }
            }
        },
        gitHubRepos: {
            name: "GitHubRepos",
            description: "사용자 프로필에 사용자의 공개 GitHub 저장소를 표시합니다.",
            loading: "저장소 로드 중...",
            option: {
                showStars: {
                    label: "별 표시",
                    description: "저장소 별 표시"
                },
                showLanguage: {
                    label: "언어 표시",
                    description: "저장소 기본 언어 표시"
                },
                showRepositoryTab: {
                    label: "저장소 탭 표시",
                    description: "프로필 모달에 저장소 탭 표시(활성화된 경우 연결에서 버튼을 숨김)"
                }
            },
            error: {
                error: "오류",
                render: "오류: GitHubRepos를 렌더링하지 못했습니다."
            },
            button: {
                show: "GitHub 저장소 표시",
                repositories: "GitHub 리포지토리",
                more: "더보기",
                only: "상위 {{length}}/{{total}}만 표시"
            },
            modal: {
                title: "{{user}}의 GitHub 저장소",
                repository: "저장소",
                description: "설명",
                language: "언어",
                stars: "별",
                viewOnGitHub: "GitHub에서 보기",
                close: "닫다"
            }
        },
        googleThat: {
            name: "GoogleThat",
            description: "인터넷 검색 링크를 보내는 명령어 추가",
            command: {
                googleThat: {
                    description: "검색 엔진 링크 보내기",
                    query: "검색어"
                }
            },
            option: {
                hyperlink: {
                    label: "하이퍼링크",
                    description: "전송된 링크가 쿼리를 레이블로 사용하여 하이퍼링크되어야 하는지 여부"
                },
                embed: {
                    label: "포함시키다",
                    description: "전송된 링크가 삽입을 렌더링해야 하는지 여부"
                },
                defaultEngine: {
                    label: "기본 엔진",
                    description: "사용할 검색 엔진"
                },
                customEngineURL: {
                    label: "커스텀 엔진 URL",
                    description: "사용하려는 엔진의 URL"
                }
            }
        },
        greetStickerPicker: {
            name: "GreetStickerPicker",
            description: "'안녕하세요!'를 마우스 오른쪽 버튼으로 클릭하면 무작위 스티커 대신 어떤 인사말 스티커라도 사용할 수 있습니다. 단추",
            mode: {
                greet: "환영하다",
                message: "메시지"
            },
            option: {
                greetMode: {
                    label: "인사 모드",
                    description: "인사 모드를 선택하세요",
                    greet: "인사(3번만 인사할 수 있습니다)",
                    message: "메시지(스팸으로 인사해도 됩니다)"
                }
            },
            context: {
                label: "인사 스티커 선택기",
                mode: "인사 모드",
                stickers: "인사 스티커",
                multi: "부정한 다중인사",
                send: "인사 보내기"
            }
        },
        guildPickerDumper: {
            name: "GuildPickerDumper",
            description: "서버의 이모티콘과 스티커를 덤프하고 다운로드하는 상황에 맞는 메뉴입니다.",
            context: {
                download: {
                    emoji: "이모티콘 다운로드",
                    sticker: "스티커 다운로드"
                }
            }
        },
        guildTagSettings: {
            name: "GuildTagSettings",
            description: "길드 태그를 숨기거나 채택하라는 메시지를 비활성화하는 등 길드 태그에 대한 일부 설정을 추가합니다.",
            option: {
                disableAdoptTagPrompt: {
                    label: "태그 프롬프트 채택 비활성화",
                    description: "태그 채택 프롬프트 비활성화"
                }
            }
        },
        hideChatButtons: {
            name: "HideChatButtons",
            description: "채팅 버튼을 숨길 수 있습니다",
            tooltip: {
                close: "닫다",
                open: "열려 있는"
            },
            option: {
                color: {
                    label: "색상",
                    description: "개봉하면 빨간색으로 칠해주세요"
                },
                open: {
                    label: "열려 있는",
                    description: "기본적으로 열림"
                }
            }
        },
        hideMedia: {
            name: "HideMedia",
            description: "마우스오버 버튼을 통해 개별 메시지의 첨부 파일 및 삽입 숨기기",
            show: "미디어 표시",
            hide: "미디어 숨기기",
            hidden: "미디어 숨김"
        },
        hideMessages: {
            name: "HideMessages",
            description: "다시 시작할 때까지 메시지를 일시적으로 숨기는 플러그인입니다.",
            button: {
                hide: "숨다"
            },
            option: {
                hidePopoverButton: {
                    label: "팝오버 버튼 숨기기",
                    description: "메시지 팝오버에서 숨기기 버튼을 숨깁니다."
                }
            }
        },
        hideServers: {
            name: "HideServers",
            description: "서버 목록에서 서버를 숨깁니다.",
            context: {
                hide: "서버 숨기기",
                unhide: "서버 숨기기 해제",
                folder: {
                    hide: "폴더 숨기기",
                    unhide: "폴더 숨기기 해제"
                }
            },
            option: {
                showIndicator: {
                    label: "표시기 표시",
                    description: "목록 하단에 서버 숨기기 해제 메뉴 표시"
                },
                guildsList: {
                    label: "길드 목록",
                    description: "숨겨진 서버 제거"
                },
                resetHidden: {
                    label: "숨김 재설정",
                    description: "목록에서 숨겨진 길드를 모두 제거하세요.",
                    button: "숨겨진 서버 재설정"
                }
            },
            button: {
                hidden: "숨겨진",
                hiddenServers: "숨겨진 서버",
                remove: "제거하다",
                folder: "접는 사람",
                removeAll: "모두 제거",
                guilds: "길드",
                noHiddenServers: "숨겨진 서버 없음"
            }
        },
        holyNotes: {
            name: "HolyNotes",
            description: "Holy Notes를 사용하면 메시지를 저장할 수 있습니다",
            main: "기본",
            button: {
                tooltip: "신성한 노트",
                save: "메모 저장",
                cancel: "취소",
                noteMessage: "참고 메시지",
                refresh: "아바타 새로 고침",
                import: "가져오기 노트",
                export: "노트 내보내기",
                deleteAll: "모든 메모 삭제",
                delete: "노트북 삭제",
                create: "노트북 만들기",
                copyText: "텍스트 복사",
                copyAttachment: "첨부파일 URL 복사",
                deleteNote: "메모 삭제",
                moveNote: "메모 이동",
                moveTo: "{{key}}(으)로 이동",
                copyId: "신분증 복사"
            },
            modal: {
                error: {
                    generic: "메모를 분석하는 중에 오류가 발생했습니다. 자세한 내용은 콘솔을 확인하세요.",
                    easter: "메모를 찾을 수 없습니다. 공감 바나나가 당신을 위해 여기 있습니다.",
                    empty: "이 노트북에 저장된 메모가 없습니다."
                },
                help: {
                    title: "돕다",
                    description: "홀리노트 사용법 배우기",
                    addingNotes: "메모 추가",
                    addingNotesText: "메모를 추가하려면 메시지를 마우스 오른쪽 버튼으로 클릭한 다음 '메모 메시지' 항목 위에 마우스를 놓고 메시지를 메모하려는 노트북 이름이 있는 버튼을 클릭하세요.",
                    prototype: "원기",
                    noteMessage: "'Note Message' 버튼을 클릭하면 기본적으로 Main에 메모가 됩니다!",
                    deletingNotes: "메모 삭제",
                    deletingNotesText: "참고: 메모를 마우스 오른쪽 버튼으로 클릭하고 '메모 삭제'를 누르거나 키보드에서 'DELETE' 키를 누른 채 메모를 클릭할 수 있습니다. 그것은 마술과 같습니다!",
                    movingNotes: "메모 이동",
                    movingNotesText: "노트를 이동하려면 노트를 마우스 오른쪽 버튼으로 클릭하고 '노트 이동' 항목 위로 마우스를 가져간 후 노트를 이동하려는 노트북에 해당하는 버튼을 클릭하세요.",
                    jumpToMessage: "메시지로 이동",
                    jumpToMessageText: "메모가 원래 있었던 위치로 이동하려면 메모를 마우스 오른쪽 버튼으로 클릭하고 '메시지로 이동'을 누르세요."
                },
                notebook: {
                    title: "공책",
                    search: "메시지 검색...",
                    options: "정렬 옵션",
                    label: "정렬 메뉴",
                    filteredOf: "{{noteCount}} 메모 중 {{filteredCount}}{{s}}",
                    note: "{{noteCount}} 메모{{s}}",
                    ada: "오름차순 / 추가된 날짜",
                    amd: "오름차순 / 메시지 날짜",
                    dda: "내림차순 / 추가된 날짜",
                    dmd: "내림차순 / 메시지 날짜",
                    change: "정렬 변경",
                    ascending: "오름차순",
                    descending: "내림차순",
                    dateAdded: "추가된 날짜",
                    messageDate: "메시지 날짜"
                },
                create: {
                    title: "노트북 만들기",
                    description: "새 노트북의 이름을 입력하세요.",
                    placeholder: "노트북 이름"
                },
                delete: {
                    title: "{{notebookName}}을(를) 삭제하시겠습니까?",
                    description: "{{noteCount}} 메모{{s}}이(가) 영구적으로 삭제됩니다.",
                    button: "삭제"
                },
                tabs: {
                    label: "노트북 탭"
                }
            },
            toast: {
                saved: "{{notebook}}에 메시지를 성공적으로 추가했습니다.",
                deleted: "{{notebook}}에서 메모를 삭제했습니다.",
                moved: "메모를 {{from}}에서 {{to}}(으)로 성공적으로 이동했습니다.",
                exists: "노트북 {{notebookName}}이(가) 이미 존재합니다.",
                created: "{{notebookName}}이(가) 성공적으로 생성되었습니다.",
                deletedNotebook: "{{notebookName}}을(를) 삭제했습니다.",
                refreshed: "아바타를 새로 고쳤습니다.",
                deletedAll: "모든 메모를 삭제했습니다.",
                imported: "메모를 성공적으로 가져왔습니다.",
                invalid: "메모를 가져오지 못했습니다."
            },
            toolbox: {
                action: "노트 열기"
            }
        },
        homeTyping: {
            name: "HomeTyping",
            description: "DM의 누군가가 입력 중이면 홈 버튼을 입력 표시기로 변경합니다."
        },
        iconViewer: {
            name: "IconViewer",
            description: "모든 아이콘을 미리 볼 수 있도록 설정에 새 탭을 추가합니다.",
            toolbox: "아이콘 탭 열기",
            iconFinder: "아이콘 찾기",
            about: {
                title: "특징",
                preview: "미리보기 아이콘",
                list: {
                    copy: "아이콘 이름 및 CSS 변수 복사",
                    download: "다양한 형식(SVG, PNG, GIF 등)으로 아이콘을 다운로드하세요.",
                    premade: "플러그인에 대해 미리 만들어진 아이콘 찾기를 복사하세요.",
                    find: "기능 컨텍스트별로 아이콘 찾기",
                    search: "색상 이름을 마우스 오른쪽 버튼으로 클릭하여 색상을 검색하세요.",
                    special: "특별한 감사"
                }
            },
            context: {
                icon: {
                    options: "아이콘 옵션",
                    log: "콘솔에 기록",
                    save: "다른 이름으로 저장...",
                    rightClick: "변경하려면 아이콘을 마우스 오른쪽 버튼으로 클릭하세요.",
                    usage: "용법",
                    click: "복사하려면 클릭하세요.",
                    copied: "복사되었습니다!",
                    actions: "행위"
                }
            },
            modal: {
                label: "기능 컨텍스트로 검색",
                search: "{{count}} 아이콘 검색...",
                function: "기능",
                iconViewer: {
                    colors: "아이콘 뷰어 색상",
                    unknown: "알려지지 않은",
                }
            }
        },
        idleAutoRestart: {
            name: "IdleAutoRestart",
            description: "구성 가능한 시간 동안 유휴 상태가 되면 클라이언트를 자동으로 다시 시작하지만 VC에 있는 동안에는 다시 시작하지 않습니다.",
            option: {
                isEnabled: {
                    label: "활성화됨",
                    description: "유휴 후 자동 다시 시작 활성화"
                },
                idleMinutes: {
                    label: "유휴 시간(분)",
                    description: "다시 시작하기 전 몇 분 동안 활동하지 않음(VC에 있지 않은 경우)"
                }
            },
            toolbox: {
                disable: "유휴 자동 재시작 비활성화",
                enable: "유휴 자동 재시작 활성화"
            }
        },
        ignoreActivities: {
            name: "IgnoreActivities",
            description: "귀하의 상태에만 표시되는 활동을 무시하세요. 등록된 게임 및 활동 탭에서 구체적으로 무시할 항목을 구성하거나 아래의 일반 설정을 사용할 수 있습니다.",
            modal: {
                import: {
                    title: "CustomRPC 플러그인의 애플리케이션 ID를 필터 목록으로 가져옵니다."
                },
                filter: {
                    title: "필터 목록",
                    description: "필터링할 활동 ID의 쉼표로 구분된 목록(특정 RPC 활동 및 CustomRPC를 필터링하는 데 유용함)"
                }
            },
            toast: {
                id: {
                    notSet: "CustomRPC 애플리케이션 ID가 설정되지 않았습니다.",
                    alreadyAdded: "CustomRPC 애플리케이션 ID가 이미 추가되었습니다."
                }
            },
            button: {
                import: "CustomRPC ID 가져오기"
            },
            option: {
                importCustomRPC: {
                    label: "CustomRPC 가져오기"
                },
                listMode: {
                    label: "목록 모드",
                    description: "필터 목록 적용 방법을 선택하세요.",
                    blacklist: "블랙리스트(목록에 있는 내용만 무시)",
                    whitelist: "화이트리스트(목록에 있는 항목을 제외한 모든 항목 무시)"
                },
                idList: {
                    label: "ID 목록"
                },
                ignorePlaying: {
                    label: "재생 무시",
                    description: "모든 재생 활동을 무시합니다(일반적으로 게임 및 RPC 활동)."
                },
                ignoreStreaming: {
                    label: "스트리밍 무시",
                    description: "모든 스트리밍 활동 무시"
                },
                ignoreListening: {
                    label: "듣기 무시",
                    description: "모든 청취 활동을 무시합니다(보통 Spotify 활동입니다)."
                },
                ignoreWatching: {
                    label: "시청 무시",
                    description: "모든 시청 활동 무시"
                },
                ignoreCompeting: {
                    label: "경쟁 무시",
                    description: "모든 경쟁 활동을 무시합니다(일반적으로 특별한 게임 활동입니다)."
                },
                ignoredActivities: {
                    label: "무시된 활동"
                }
            }
        },
        ignoreCalls: {
            name: "IgnoreCalls",
            description: "특정 사용자 또는 DM 그룹의 전화를 무시할 수 있습니다.",
            option: {
                permanentlyIgnoredUsers: {
                    label: "영구적으로 무시된 사용자",
                    description: "영구적으로 무시되어야 하는 사용자 ID(쉼표 + 공백)"
                }
            },
            button: {
                ignore: "무시하다",
                temporarilyIgnore: "일시적으로 통화 무시",
                permanentlyIgnore: "통화를 영구적으로 무시"
            }
        },
        iLoveSpam: {
            name: "ILoveSpam",
            description: "'스패머 가능성이 있는 사람'의 메시지를 숨기지 마세요."
        },
        imageFilename: {
            name: "ImageFilename",
            description: "이미지 및 GIF 위에 마우스를 올리면 파일 이름이 툴팁으로 표시됩니다.",
            option: {
                showFullUrl: {
                    label: "전체 URL 표시",
                    description: "파일 이름만 표시하는 대신 이미지의 전체 URL을 표시하세요. 일반적으로 의미 있는 파일 이름이 없기 때문에 GIF에 대해 항상 활성화됩니다."
                }
            }
        },
        imageLink: {
            name: "ImageLink",
            description: "유일한 콘텐츠인 경우에도 메시지에서 이미지 링크를 숨기지 마십시오."
        },
        imageZoom: {
            name: "ImageZoom",
            description: "이미지와 GIF를 확대하고 이미지 메타데이터를 표시할 수 있습니다. 확대하려면 스크롤 휠을 사용하고 렌즈 반경을 늘리려면 Shift + 스크롤 휠을 사용하세요.",
            option: {
                saveZoomValues: {
                    label: "확대/축소 값 저장",
                    description: "줌 및 렌즈 크기 값 저장 여부"
                },
                invertScroll: {
                    label: "스크롤 반전",
                    description: "스크롤 반전"
                },
                nearestNeighbour: {
                    label: "가장 가까운 이웃",
                    description: "이미지 크기를 조정할 때 가장 가까운 이웃 보간 사용"
                },
                square: {
                    label: "정사각형",
                    description: "렌즈를 정사각형으로 만드세요."
                },
                zoom: {
                    label: "줌",
                    description: "렌즈의 줌"
                },
                size: {
                    label: "크기",
                    description: "반경 / 렌즈 크기"
                },
                zoomSpeed: {
                    label: "줌 속도",
                    description: "줌/렌즈 크기가 얼마나 빨리 변하는가"
                },
                showMetadata: {
                    label: "메타데이터 표시",
                    description: "선택한 이미지를 두 번 클릭하면 이미지 메타데이터 표시"
                }
            },
            context: {
                square: "사각렌즈",
                nearest: "가장 가까운 이웃",
                zoom: "줌",
                size: "렌즈 크기",
                zoomSpeed: "줌 속도",
                showImageMetadata: "이미지 메타데이터 표시",
                view: "메타데이터 보기",
                loading: "로드 중...",
                unknown: "알려지지 않은",
                sizeHTML: "크기",
                dimensions: "치수",
                filename: "파일 이름"
            }
        },
        imgToGif: {
            name: "ImgToGif",
            description: "/imgtogif 슬래시 명령을 추가하여 모든 이미지에서 GIF를 생성합니다.",
            command: {
                imgToGif: {
                    description: "이미지를 GIF로 변환할 수 있습니다",
                    image: "사용할 이미지 첨부",
                    width: "GIF의 너비",
                    height: "GIF의 높이"
                }
            },
            error: {
                noImage: "지정된 이미지가 없습니다!",
                notImage: "업로드한 이미지가 아닙니다."
            }
        },
        implicitRelationships: {
            name: "ImplicitRelationships",
            description: "친구 탭에 암시적 관계가 표시됩니다.",
            option: {
                sortByAffinity: {
                    label: "선호도별로 정렬",
                    description: "암시적 관계를 귀하에 대한 선호도에 따라 정렬할지 여부입니다."
                }
            },
            implicit: "절대적인"
        },
        inRole: {
            name: "InRole",
            description: "역할 컨텍스트 메뉴 또는 /inrole 명령을 사용하여 역할에 누가 있는지 확인하세요(플러그인 정보를 읽어보세요!)",
            command: {
                inrole: {
                    description: "누가 역할을 맡고 있는지 알아보세요.",
                    role: "역할",
                    noGuild: "현재 서버에 있는지 확인하세요."
                }
            },
            context: {
                view: "역할이 있는 구성원 보기"
            },
            modal: {
                about: {
                    title: "제한사항",
                    description: "서버에 대한 모드 권한이 없고 해당 서버가 대규모(멤버 100명 이상)인 경우 플러그인은 다음과 같은 방식으로 제한될 수 있습니다.",
                    list: {
                        one: "오프라인 회원은 나열되지 않습니다.",
                        two: "기본적으로 최대 100명의 회원이 나열됩니다. 더 많은 회원을 얻으려면 회원 목록에서 아래로 스크롤하여 더 많은 회원을 로드하세요.",
                        three: "그러나 친구는 상태에 관계없이 항상 표시됩니다."
                    }
                },
                member: {
                    title: "역할 구성원",
                    noMembers: "해당 역할을 가진 온라인 캐시 회원이 없는 것 같습니다. 더 많은 사용자를 캐시하려면 회원 목록에서 아래로 스크롤하세요!"
                }
            }
        },
        instantScreenshare: {
            name: "InstantScreenshare",
            description: "데스크톱 소스, 창 및 비디오 입력 장치(카메라, 캡처 카드)를 지원하여 음성 채널에 참여할 때 즉시 화면 공유",
            modal: {
                linux: {
                    title: "리눅스의 경우",
                    body: "Wayland의 경우 화면 공유 선택 팝업만 표시됩니다.",
                    bodyTwo: "X11의 경우 작동할 수도 있고 작동하지 않을 수도 있습니다."
                },
                videoDevices: {
                    title: "비디오 입력 장치",
                    body: "설정에서 활성화되면 카메라 및 캡처 카드(예: Elgato HD60X)를 지원합니다."
                },
                regardingSound: {
                    title: "사운드 및 미리보기 설정 관련",
                    body: "우리는 스트리밍 미리보기와 사운드를 활성화해야 하는지 여부를 결정하기 위해 Discord에서 설정하고 사용하는 설정을 사용합니다."
                }
            },
            option: {
                streamMedia: {
                    label: "스트리밍할 미디어 소스",
                    description: "찾을 수 없으면 메인 화면으로 재설정됩니다.",
                    loading: "미디어 소스 로드 중...",
                    none: "미디어 소스를 찾을 수 없습니다.",
                    placeholder: "스트리밍할 미디어 소스를 선택하세요."
                },
                includeVideoDevices: {
                    label: "비디오 장치 포함",
                    description: "소스 목록에 비디오 입력 장치(카메라, 캡처 카드) 포함"
                },
                autoMute: {
                    label: "자동 음소거",
                    description: "음성 채널에 참여할 때 자동으로 마이크를 음소거합니다."
                },
                autoDeafen: {
                    label: "자동 귀머거리",
                    description: "음성 채널에 참가하면 자동으로 귀가 들리지 않게 됩니다(음소거도 됨)."
                },
                instantScreenshare: {
                    label: "즉시 화면 공유",
                    description: "자동 화면 공유 기능을 활성화합니다."
                },
                keybindScreenshare: {
                    label: "키바인드 화면 공유",
                    description: "Discord 키 바인딩 설정에서 키 바인딩으로 화면 공유"
                },
                focusDiscord: {
                    label: "포커스 불일치",
                    description: "Discord에 초점이 맞춰져 있을 때만 키바인드로 화면 공유를 시작하세요"
                },
                toolboxManagement: {
                    label: "도구 상자 관리",
                    description: "인스턴트 화면 공유 활성화/비활성화"
                }
            },
            toolbox: {
                label: "즉시 화면 공유",
                toast: "즉시 화면 공유 {{state}}",
                enabled: "활성화됨",
                disabled: "장애가 있는"
            }
        },
        invisibleChat: {
            name: "InvisibleChat",
            description: "의심스럽지 않은 방식으로 메시지를 암호화하세요!",
            option: {
                savedPasswords: {
                    label: "저장된 비밀번호",
                    description: "저장된 비밀번호( , 로 구분)"
                }
            },
            button: {
                encrypt: "메시지 암호화",
                decrypt: "메시지 해독",
                hidden: "숨겨진 메시지 표시기(InvisibleChat)"
            },
            tooltip: {
                hidden: "이 메시지에는 숨겨진 메시지가 있습니다! (보이지 않는 채팅)"
            },
            embed: {
                title: "해독된 메시지",
                footer: "InvisibleChat으로 전송됨"
            },
            modal: {
                encrypt: {
                    title: "메시지 암호화",
                    secret: "비밀",
                    cover: "표지(2단어 이상!!)",
                    password: "비밀번호",
                    dontUseCover: "덮개를 사용하지 마세요.",
                    send: "보내다",
                    cancel: "취소"
                },
                decrypt: {
                    title: "메시지 해독",
                    with: "암호화된 메시지",
                    password: "비밀번호",
                    decrypt: "암호 해독",
                    cancel: "취소"
                }
            }
        },
        inviteDefaults: {
            name: "InviteDefaults",
            description: "서버 초대를 생성할 때 기본값을 편집할 수 있습니다.",
            option: {
                inviteDuration: {
                    label: "초대 기간",
                    description: "서버 초대의 기본 기간",
                    thirtyMinutes: "30분",
                    oneHour: "1시간",
                    sixHours: "6시간",
                    twelveHours: "12시간",
                    oneDay: "1일",
                    sevenDays: "7일",
                    forever: "영원히"
                },
                maxUses: {
                    label: "최대 사용",
                    description: "서버 초대에 대한 기본 최대 사용량",
                    unlimited: "제한 없는",
                    one: "1",
                    five: "5",
                    ten: "10",
                    twentyFive: "25",
                    fifty: "50",
                    oneHundred: "100"
                },
                temporaryMembership: {
                    label: "임시회원",
                    description: "서버 초대를 위한 기본 임시 멤버십"
                }
            }
        },
        ircColors: {
            name: "IrcColors",
            description: "IRC 클라이언트처럼 채팅의 사용자 이름 색상을 고유하게 만듭니다.",
            option: {
                lightness: {
                    label: "가벼움",
                    description: "밝기(%) 색상이 너무 밝거나 어두우면 변경하세요."
                },
                memberListColors: {
                    label: "회원 목록 색상",
                    description: "구성원 목록의 역할 색상 바꾸기"
                },
                applyColorOnlyToUsersWithoutColor: {
                    label: "색상이 없는 사용자에게만 색상 적용",
                    description: "미리 정의된 색상이 없는 사용자에게만 색상 적용"
                },
                applyColorOnlyInDms: {
                    label: "DM에만 색상 적용",
                    description: "직접 메시지에만 색상을 적용하세요. 서버에 색상을 적용하지 마십시오."
                }
            }
        },
        iRememberYou: {
            name: "IRememberYou",
            description: "손실이 발생할 경우 통신한 모든 사람(서버 포함)을 로컬에 저장합니다.",
            section: {
                description: "자신이 언급하거나 답변한 사용자, 자신이 속한 서버의 소유자(서버 소유자*), 길드원인 사용자 목록을 제공합니다.",
                empty: "지금은 비어 있습니다.",
                tooltip: "{{user}}, {{updatedAtContent}}에 업데이트됨",
                owner: "서버 소유자",
                iRememberYou: "나는 당신을 기억합니다"
            },
            context: {
                user: "사용자 옵션",
                copy: "사용자 ID 복사",
                copyToast: "사용자 ID가 클립보드에 복사되었습니다.",
                view: "프로필 보기"
            },
            modal: {
                title: "편집자",
                filter: "태그, 사용자 이름, ID로 필터링",
                button: {
                    validate: "검증 및 저장",
                    cancel: "취소",
                    openEditor: "편집기 열기",
                    resetData: "스토리지 재설정",
                    sure: "확실합니까?"
                }
            }
        },
        jumpTo: {
            name: "JumpTo",
            description: "채널/DM의 시작 또는 맨 아래로 이동하는 상황에 맞는 메뉴 옵션을 추가합니다.",
            context: {
                top: "첫 번째 메시지로 이동",
                bottom: "최신 메시지로 이동",
                noMessages: "이 채널에는 이 사용자가 보낸 메시지가 없습니다.",
                searchFailed: "메시지를 검색하지 못했습니다."
            }
        },
        keepCurrentChannel: {
            name: "KeepCurrentChannel",
            description: "계정을 전환하거나 Discord를 로드하기 전에 있었던 채널로 이동해 보세요."
        },
        keyboardSounds: {
            name: "KeyboardSounds",
            description: "OperaGX 또는 osu를 추가합니다! 키보드로 타이핑할 때의 음향 효과.",
            option: {
                volume: {
                    label: "용량",
                    description: "키보드 소리의 볼륨"
                },
                soundPack: {
                    label: "사운드 팩",
                    description: "키보드 사운드에 사용할 사운드 팩",
                    operagx: "오페라GX",
                    osu: "오스!"
                }
            }
        },
        keywordNotify: {
            name: "KeywordNotify",
            description: "주어진 메시지가 특정 키워드나 정규 표현식과 일치하면 알림을 보냅니다.",
            idHolder: "ID",
            keywordEntry: "키워드 입력",
            regexHolder: "예|정규식",
            ignoreCase: "대소문자 무시",
            whiteblackLabel: "화이트리스트/블랙리스트",
            tab: {
                title: "키워드",
                clearAll: "모두 지우기"
            },
            button: {
                addId: "아이디 추가",
                addKeyword: "키워드 항목 추가"
            },
            listTypeSelector: {
                blacklist: "블랙리스트",
                whitelist: "화이트리스트",
                placeholder: "목록 유형을 선택하세요"
            },
            option: {
                ignoreBots: {
                    label: "봇 무시",
                    description: "봇의 메시지 무시"
                },
                amountToKeep: {
                    label: "보관할 금액",
                    description: "로그에 보관할 메시지의 양"
                },
                keywords: {
                    label: "키워드",
                    description: "키워드 관리"
                }
            }
        },
        lastOnline: {
            name: "LastOnline",
            description: "DM 목록과 길드 및 GDM 회원 목록의 사용자 이름 아래에 마지막 온라인 표시기를 추가합니다.",
            unit: {
                d: "낮",
                h: "시간",
                m: "분"
            },
            online: "{{formattedTime}} 전 접속"
        },
        listenBrainzRPC: {
            name: "ListenBrainzRPC",
            description: "ListenBrainz의 풍부한 존재감을 위한 작은 플러그인",
            about: {
                title: "MusicBrainz API 정보",
                description: "MusicBrainz API에는 API 키가 필요하지 않지만 {{link}}이 필요합니다. 대부분의 경우 이메일 주소로 충분합니다.",
                userAgent: "의미 있는 사용자 에이전트 문자열"
            },
            option: {
                username: {
                    label: "사용자 이름",
                    description: "ListenBrainz 사용자 이름"
                },
                mbContact: {
                    label: "MB연락처",
                    description: "ListenBrainz 연락처"
                },
                shareUsername: {
                    label: "사용자 이름 공유",
                    description: "ListenBrainz 프로필 링크 표시(다른 사용자에게만 표시될 수 있음)"
                },
                shareSong: {
                    label: "노래 공유",
                    description: "ListenBrainz에서 현재 노래에 대한 링크 표시(다른 사용자에게만 표시될 수 있음)"
                },
                hideWithSpotify: {
                    label: "Spotify로 숨기기",
                    description: "Spotify가 실행 중인 경우 ListenBrainz 존재 숨기기"
                },
                hideWithActivity: {
                    label: "활동으로 숨기기",
                    description: "다른 존재가 있는 경우 ListenBrainz 존재 숨기기"
                },
                useTimeBar: {
                    label: "시간 표시줄 사용",
                    description: "트랙 길이를 사용하여 시간 표시줄 표시(듣기 상태를 사용해야 함)"
                },
                statusName: {
                    label: "상태 이름",
                    description: "맞춤 상태 텍스트"
                },
                nameFormat: {
                    label: "이름 형식",
                    description: "상태 이름에 노래 이름과 아티스트 표시",
                    custom: "맞춤 상태 이름 사용",
                    artistSong: "'아티스트 - 노래' 형식을 사용하세요.",
                    songArtist: "'노래 - 아티스트' 형식을 사용하세요.",
                    artistOnly: "아티스트 이름만 사용",
                    songOnly: "노래 이름만 사용",
                    albumName: "앨범 이름 사용(노래에 앨범이 없으면 맞춤 상태 텍스트로 대체)"
                },
                useListeningStatus: {
                    label: "청취 상태 사용",
                    description: "'재생 중' 대신 '듣는 중' 상태 표시"
                },
                missingArt: {
                    label: "사라진 예술품",
                    description: "앨범 또는 앨범아트가 누락된 경우",
                    listenbrainzLogo: "큰 ListenBrainz 로고 사용",
                    generic: "일반 자리 표시자 사용"
                },
                useLogo: {
                    label: "로고 사용",
                    description: "앨범 아트에 ListenBrainz 로고 표시"
                }
            }
        },
        loadingQuotes: {
            name: "LoadingQuotes",
            description: "Discord의 로딩 인용문 바꾸기",
            option: {
                replaceEvents: {
                    label: "이벤트 교체",
                    description: "특별 이벤트 테마 인용문이 포함된 이벤트 중에도 이 플러그인을 적용해야 합니까? (예: 할로윈)"
                },
                enablePluginPresetQuotes: {
                    label: "플러그인 사전 설정 인용 활성화",
                    description: "이 플러그인으로 미리 설정된 인용문을 활성화하세요."
                },
                enableDiscordPresetQuotes: {
                    label: "Discord 사전 설정 견적 활성화",
                    description: "Discord의 사전 설정된 인용문 활성화(이벤트 중 이벤트 인용문 포함)"
                },
                additionalQuotes: {
                    label: "추가 견적",
                    description: "아래 구분 기호로 구분되어 추가 사용자 정의 따옴표가 나타날 수 있습니다."
                },
                additionalQuotesDelimiter: {
                    label: "추가 인용 구분 기호",
                    description: "추가 견적을 위한 구분 기호"
                }
            }
        },
        loginWithQR: {
            name: "LoginWithQR",
            description: "모바일에서와 마찬가지로 로그인 QR 코드를 스캔하여 다른 장치에 로그인할 수 있습니다!",
            option: {
                scanQr: {
                    label: "QR 코드 스캔",
                    description: "QR 코드 스캔",
                    notEnabled: "로그인 QR 코드를 스캔하려면 플러그인을 활성화하고 클라이언트를 다시 시작하세요."
                }
            },
            neverScan: "다른 사용자나 애플리케이션의 로그인 QR 코드를 스캔하지 마세요.",
            hold: "로그인을 확인하려면 길게 누르세요.",
            scanning: "스캐닝...",
            stopScanning: "스캔 중지",
            usingWebcam: "웹캠을 사용하여 스캔",
            dragDrop: "여기에 이미지를 드래그 앤 드롭하거나 클릭하여 이미지를 선택하세요.",
            orPaste: "아니면 클립보드에서 이미지를 붙여넣으세요!"
        },
        mediaPlaybackSpeed: {
            name: "MediaPlaybackSpeed",
            description: "미디어 삽입의 (기본) 재생 속도를 변경할 수 있습니다.",
            playbackSpeed: "재생 속도",
            context: {
                label: "재생 속도 제어"
            },
            option: {
                defaultVoiceMessageSpeed: {
                    label: "기본 음성 메시지 속도",
                    description: "음성 메시지"
                },
                defaultVideoSpeed: {
                    label: "기본 비디오 속도",
                    description: "비디오"
                },
                defaultAudioSpeed: {
                    label: "기본 오디오 속도",
                    description: "오디오"
                }
            }
        },
        memberCount: {
            name: "MemberCount",
            description: "온라인 회원 수, 총 회원 수, 서버 음성 채널 사용자 수를 회원 목록 및 도구 설명에 표시합니다.",
            option: {
                toolTip: {
                    label: "툴팁",
                    description: "서버 툴팁에 멤버 수 표시"
                },
                memberList: {
                    label: "회원 목록",
                    description: "회원 목록 헤더에 회원 수 표시"
                },
                voiceActivity: {
                    label: "음성 활동",
                    description: "음성 채널에 사용자 수 표시"
                }
            },
            onlineThisChannel: "{{formattedOnlineCount}} 이 채널에서 온라인으로",
            totalMembers: "{{formattedTotalCount}} 총 서버 구성원",
            totalVoice: "{{formattedVoiceCount}} 멤버의 목소리"
        },
        mentionAvatars: {
            name: "MentionAvatars",
            description: "멘션 내부에 사용자 아바타와 역할 아이콘 표시",
            option: {
                showAtSymbol: {
                    label: "@ 기호 표시",
                    description: "사용자 멘션에 @ 기호를 표시할지 여부"
                }
            }
        },
        meow: {
            name: "Meow",
            description: "채팅에서 야옹하기 위한 채팅바 버튼을 추가합니다.",
            button: {
                meow: "야옹"
            }
        },
        messageBurst: {
            name: "MessageBurst",
            description: "다른 사람이 귀하보다 먼저 메시지를 보내지 않으면 일정 기간 내에 보낸 메시지를 이전에 보낸 메시지와 병합합니다.",
            option: {
                timePeriod: {
                    label: "기간",
                    description: "버스트 기간(초)입니다."
                },
                shouldMergeWithAttachment: {
                    label: "첨부 파일과 병합",
                    description: "마지막 메시지에 첨부 파일이 있는 경우 메시지를 병합해야 합니까?"
                },
                useSpace: {
                    label: "공간 활용",
                    description: "새 줄 대신 병합할 때 메시지 사이에 공백을 추가할지 여부입니다."
                }
            }
        },
        messageClickActions: {
            name: "MessageClickActions",
            description: "삭제하려면 백스페이스 키를 누른 채 클릭하고, 편집/답장하려면 두 번 클릭하세요.",
            option: {
                singleClickAction: {
                    label: "단일 클릭 동작",
                    description: "한 번의 클릭으로 작업(귀하의 메시지)"
                },
                singleClickModifier: {
                    label: "단일 클릭 수정자",
                    description: "한 번의 클릭 작업에 필요한 수정자(메시지)"
                },
                singleClickOthersAction: {
                    label: "단일 클릭 동작(기타)",
                    description: "한 번의 클릭으로 동작(다른 사람의 메시지)"
                },
                singleClickOthersModifier: {
                    label: "단일 클릭 수정자(기타)",
                    description: "한 번의 클릭 작업에 필요한 수정자(다른 사람의 메시지)"
                },
                doubleClickAction: {
                    label: "두 번 클릭 동작",
                    description: "두 번 클릭 시 작업(메시지)"
                },
                doubleClickOthersAction: {
                    label: "더블 클릭 동작(기타)",
                    description: "더블클릭 시 동작(다른 사람의 메시지)"
                },
                doubleClickModifier: {
                    label: "두 번 클릭 수정자",
                    description: "두 번 클릭 동작에 수정자가 필요합니다."
                },
                tripleClickAction: {
                    label: "세 번 클릭 동작",
                    description: "삼중 클릭 시 동작"
                },
                tripleClickModifier: {
                    label: "삼중 클릭 수정자",
                    description: "삼중 클릭 동작에 필요한 수정자"
                },
                reactEmoji: {
                    label: "반응 이모티콘",
                    description: "반응 작업에 사용할 이모티콘"
                },
                addAdditionalReacts: {
                    label: "추가 반응 추가",
                    description: "추가로 구성된 반응 이모티콘도 추가하세요."
                },
                additionalReactEmojis: {
                    label: "추가 React 이모티콘",
                    description: "React 작업을 사용할 때 추가할 추가 이모티콘(쉼표/줄바꿈 구분, 최대 {{count}})"
                },
                disableInDms: {
                    label: "DM에서 비활성화",
                    description: "다이렉트 메시지의 모든 클릭 동작을 비활성화합니다."
                },
                disableInSystemDms: {
                    label: "시스템 DM에서 비활성화",
                    description: "시스템 DM에서 모든 클릭 동작을 비활성화합니다."
                },
                clickTimeout: {
                    label: "클릭 시간 초과",
                    description: "더블/트리플 클릭을 구분하는 시간 초과(ms)"
                },
                doubleClickHoldThreshold: {
                    label: "두 번 클릭하여 임계값 유지",
                    description: "두 번 클릭 작업의 최대 유지 시간(ms)입니다. 길게 누르면 텍스트를 선택할 수 있습니다."
                },
                deferDoubleClickForTriple: {
                    label: "트리플을 위해 더블 클릭 연기",
                    description: "세 번 클릭 작업을 허용하려면 두 번 클릭을 지연하세요(해제 시 세 번 클릭 비활성화)."
                },
                selectionHoldTimeout: {
                    label: "선택 보류 시간 초과",
                    description: "텍스트 선택을 허용하는 시간 초과(ms)"
                },
                quoteWithReply: {
                    label: "답글이 포함된 견적",
                    description: "인용할 때 메시지에도 답장하세요."
                },
                useSelectionForQuote: {
                    label: "견적에 대한 선택 사용",
                    description: "인용할 때 가능한 경우 선택한 텍스트를 사용하세요."
                }
            },
            actions: {
                none: "없음",
                delete: "삭제",
                copyLink: "링크 복사",
                copyID: "신분증 복사",
                copyContent: "콘텐츠 복사",
                copyUserID: "사용자 ID 복사",
                edit: "편집하다",
                reply: "회신하다",
                react: "반응하다",
                openThread: "오픈 스레드",
                openTab: "탭 열기",
                quote: "인용하다",
                pin: "핀"
            },
            missingPermissions: {
                react: "대응할 수 없음: 권한 누락",
                pin: "고정할 수 없음: 권한 누락",
            },
            cannotQuote: "이 메시지 유형을 인용할 수 없습니다.",
            copy: {
                messageId: "메시지 ID가 복사되었습니다!",
                messageContent: "메시지 내용이 복사되었습니다!",
                userId: "사용자 ID가 복사되었습니다!"
            },
            linkCopied: "링크가 복사되었습니다!"
        },
        messageColors: {
            name: "MessageColors",
            description: "메시지 내부에 #FF0042와 같은 색상 코드를 표시합니다.",
            option: {
                renderType: {
                    label: "렌더 유형",
                    description: "색상을 렌더링하는 방법",
                    textColor: "텍스트 색상",
                    block: "근처 차단",
                    backgroundColor: "배경색"
                },
                enableShortHexCodes: {
                    label: "짧은 16진수 코드 활성화",
                    description: "#39f와 같은 3자 16진수 코드를 활성화합니다."
                },
                blockView: {
                    label: "블록 뷰 유형",
                    description: "컬러 블록을 표시하는 방법",
                    right: "오른쪽",
                    left: "왼쪽",
                    both: "양측"
                }
            }
        },
        messageFetchTimer: {
            name: "MessageFetchTimer",
            description: "현재 채널에 대한 메시지를 가져오는 데 걸린 시간을 표시합니다.",
            option: {
                showIcon: {
                    label: "아이콘 표시",
                    description: "메시지 표시줄에 가져오기 시간 아이콘 표시"
                },
                showMs: {
                    label: "밀리초 표시",
                    description: "타이밍에 밀리초 표시"
                },
                iconColor: {
                    label: "아이콘 색상",
                    description: "아이콘 색상(CSS 색상 값)"
                }
            },
            loaded: "{{time}}ms({{timeAgo}})에 로드된 메시지",
            day: "{{s}}일 전",
            hour: "시간{{s}} 전",
            minute: "분{{s}} 전",
            justNow: "방금"
        },
        messageLatency: {
            name: "MessageLatency",
            description: "전송하는 데 ≥n초가 걸린 메시지에 대한 표시기를 표시합니다.",
            day: "낮",
            days: "날",
            hour: "시간",
            hours: "시간",
            minute: "분",
            minutes: "분",
            second: "두번째",
            seconds: "초",
            millisecond: "밀리초",
            milliseconds: "밀리초",
            and: "그리고",
            oldKotlinDetected: "사용자가 오래된 Discord Android 클라이언트를 사용하고 있는 것으로 의심됩니다.",
            ahead: "이 사용자의 시계는 {{delta}} 빠릅니다.",
            delay: "이 메시지는 {{delta}} 지연되어 전송되었습니다.",
            delayedMessage: "지연된 메시지",
            oldAndroidClient: "오래된 Discord Android 클라이언트",
            option: {
                latency: {
                    label: "숨어 있음",
                    description: "대기 시간 표시기의 임계값(초)"
                },
                detectDiscordKotlin: {
                    label: "불일치 감지 Kotlin",
                    description: "오래된 Discord Android 클라이언트 감지"
                },
                showMillis: {
                    label: "밀리초 표시",
                    description: "밀리초 표시"
                },
                ignoreSelf: {
                    label: "자기 무시",
                    description: "자신의 메시지에 표시를 추가하지 마세요"
                }
            }
        },
        messageLinkEmbeds: {
            name: "MessageLinkEmbeds",
            description: "다른 메시지를 연결하는 메시지에 미리보기를 추가합니다.",
            option: {
                messageBackgroundColor: {
                    label: "메시지 배경색",
                    description: "리치 임베드된 메시지의 배경색"
                },
                automodEmbeds: {
                    label: "Automod 삽입",
                    description: "리치 임베드 대신 자동 모드 임베드를 사용하세요(작지만 정보가 적음).",
                    always: "항상 자동 모드 삽입을 사용하세요",
                    prefer: "자동 모드 삽입을 선호하지만 일부 콘텐츠를 표시할 수 없는 경우 풍부한 삽입을 사용하세요.",
                    never: "자동 모드 삽입을 절대 사용하지 마세요"
                },
                listMode: {
                    label: "목록 모드",
                    description: "ID 목록을 블랙리스트로 사용할지, 화이트리스트로 사용할지 여부",
                    blacklist: "블랙리스트",
                    whitelist: "화이트리스트"
                },
                idList: {
                    label: "ID 목록",
                    description: "블랙리스트 또는 화이트리스트에 추가할 길드/채널/사용자 ID(쉼표로 구분)"
                },
                clearMessageCache: {
                    label: "메시지 캐시 지우기",
                    description: "연결된 메시지 캐시 지우기"
                }
            },
            noContent: {
                noAttachments: "콘텐츠 없음 {{count}} 삽입{{s}}",
                noEmbeds: "내용 없음 {{count}} 첨부 파일{{s}}",
                both: "콘텐츠 없음, {{attachments}} 첨부 파일{{attachmentsS}} 및 {{embeds}} 삽입{{embedsS}}"
            },
            dm: "다이렉트 메시지",
            groupDm: "그룹DM",
            server: "섬기는 사람"
        },
        messageLinkTooltip: {
            name: "MessageLinkTooltip",
            description: "메시지 링크, 답장, 전달된 메시지 위로 마우스를 가져갈 때 메시지 미리보기가 포함된 도구 설명을 추가합니다.",
            loading: "로드 중...",
            option: {
                onLink: {
                    label: "링크에서",
                    description: "메시지 링크 위로 마우스를 가져가면 도구 설명 표시"
                },
                onReply: {
                    label: "응답 시",
                    description: "메시지 답장 위로 마우스를 가져가면 도구 설명 표시"
                },
                onForward: {
                    label: "앞으로",
                    description: "전달된 메시지 위로 마우스를 가져가면 도구 설명 표시"
                },
                display: {
                    label: "표시하다",
                    description: "표시 스타일",
                    auto: "메시지와 동일",
                    compact: "콤팩트",
                    cozy: "아늑한"
                }
            }
        },
        messageLogger: {
            name: "MessageLogger",
            description: "삭제 및 편집된 메시지를 일시적으로 기록합니다.",
            removeMessage: "메시지 기록 제거",
            removeMessageTemporary: "메시지 제거(임시)",
            clearMessageLog: "메시지 로그 지우기",
            modal: {
                edit: {
                    title: "메시지 편집 기록",
                    tooltip: "이 편집 상태는 기록되지 않았으므로 표시할 수 없습니다."
                }
            },
            option: {
                deleteStyle: {
                    label: "스타일 삭제",
                    description: "삭제된 메시지의 스타일",
                    text: "빨간색 텍스트",
                    overlay: "빨간색 오버레이"
                },
                logDeletes: {
                    label: "로그 삭제",
                    description: "삭제된 메시지를 기록할지 여부"
                },
                collapseDeleted: {
                    label: "축소 삭제됨",
                    description: "차단된 메시지와 유사하게 삭제된 메시지를 축소할지 여부"
                },
                logEdits: {
                    label: "로그 편집",
                    description: "편집된 메시지를 기록할지 여부"
                },
                inlineEdits: {
                    label: "인라인 편집",
                    description: "메시지 내용의 일부로 편집 기록을 표시할지 여부"
                },
                ignoreBots: {
                    label: "봇 무시",
                    description: "봇의 메시지를 무시할지 여부"
                },
                ignoreSelf: {
                    label: "자기 무시",
                    description: "메시지를 직접 무시할지 여부"
                },
                ignoreUsers: {
                    label: "사용자 무시",
                    description: "무시할 사용자 ID의 쉼표로 구분된 목록"
                },
                ignoreChannels: {
                    label: "채널 무시",
                    description: "무시할 쉼표로 구분된 채널 ID 목록"
                },
                ignoreGuilds: {
                    label: "길드 무시",
                    description: "무시할 길드 ID의 쉼표로 구분된 목록"
                },
                showEditDiffs: {
                    label: "편집 차이점 표시",
                    description: "편집된 메시지 버전 간의 시각적 차이점 표시"
                },
                separatedDiffs: {
                    label: "분리된 차이점",
                    description: "더 읽기 쉬운 차등을 위해 diff에서 별도의 추가 및 제거"
                }
            }
        },
        messageLoggerEnhanced: {
            name: "MessageLoggerEnhanced",
            description: "추가 기능으로 MessageLogger 플러그인을 향상합니다.",
            updateImageCacheDir: "이미지 캐시 디렉터리를 성공적으로 업데이트했습니다.",
            updateLogsDir: "로그 디렉터리를 성공적으로 업데이트했습니다.",
            failedUpdate: "디렉터리를 업데이트하지 못했습니다.",
            blacklist: "블랙리스트",
            whitelist: "화이트리스트",
            failedToRemove: "메시지를 삭제하지 못했습니다.",
            successfullyImported: "로그를 성공적으로 가져왔습니다.",
            errorImportingLogs: "로그를 가져오는 중에 오류가 발생했습니다. 자세한 내용은 콘솔을 확인하세요.",
            importing: "가져오는 중...",
            importLogs: "로그 가져오기",
            exporting: "내보내는 중...",
            exportLogs: "로그 내보내기",
            alert: {
                clearLogs: {
                    title: "로그 지우기",
                    body: "모든 로그를 지우시겠습니까?",
                    confirmText: "분명한",
                    cancel: "취소"
                },
                clearVisibleLogs: {
                    title: "보이는 로그 지우기",
                    body: "{{messages}} 로그를 지우시겠습니까?",
                    confirmText: "분명한",
                    cancel: "취소"
                },
                cleared: "메시지 로그 데이터베이스 및 캐시가 지워졌습니다."
            },
            context: {
                title: "메시지 로거",
                jumpToMessage: "메시지로 이동",
                openUserProfile: "사용자 프로필 열기",
                copyContent: "콘텐츠 복사",
                copyUserId: "사용자 ID 복사",
                copyMessageId: "메시지 ID 복사",
                copyChannelId: "채널 ID 복사",
                copyServerId: "서버 ID 복사",
                deleteLog: "로그 삭제",
                fromUsernameDm: "{{username}}님의 DM에서",
                fromGroupDm: "{{channelName}} 그룹 DM에서",
                fromServerChannel: "{{serverName}}의 {{channelName}}에서",
                moveTypeTo: "{{type}}을(를) {{destination}}(으)로 이동",
                removeTypeFrom: "{{list}}에서 {{type}} 제거",
                openLogsFor: "{{name}}에 대한 로그 열기",
                openLogs: "오픈 로그",
                removeMessage: "메시지 제거(영구)",
                removeMessageHistory: "메시지 기록 제거(영구)",
                deleteMessageHide: "메시지 삭제(메시지 로거에서 숨기기)",
                addServerToBlacklist: "블랙리스트에 서버 추가",
                addServerToWhitelist: "화이트리스트에 서버 추가",
                removeServerFromBlacklist: "블랙리스트에서 서버 제거",
                removeServerFromWhitelist: "화이트리스트에서 서버 제거",
                moveServerToBlacklist: "서버를 블랙리스트로 이동",
                moveServerToWhitelist: "서버를 화이트리스트로 이동",
                addUserToBlacklist: "블랙리스트에 사용자 추가",
                addUserToWhitelist: "화이트리스트에 사용자 추가",
                removeUserFromBlacklist: "블랙리스트에서 사용자 제거",
                removeUserFromWhitelist: "화이트리스트에서 사용자 제거",
                moveUserToBlacklist: "사용자를 블랙리스트로 이동",
                moveUserToWhitelist: "사용자를 화이트리스트로 이동",
                addChannelToBlacklist: "블랙리스트에 채널 추가",
                addChannelToWhitelist: "화이트리스트에 채널 추가",
                removeChannelFromBlacklist: "블랙리스트에서 채널 제거",
                removeChannelFromWhitelist: "화이트리스트에서 채널 제거",
                moveChannelToBlacklist: "채널을 블랙리스트로 이동",
                moveChannelToWhitelist: "채널을 화이트리스트로 이동"
            },
            type: {
                server: "섬기는 사람",
                user: "사용자",
                channel: "채널"
            },
            button: {
                chooseFolder: "폴더 선택",
                browse: "먹다",
                clearLogs: "모든 로그 지우기",
                clearVisibleLogs: "보이는 로그 지우기",
                sortOldest: "오래된 것부터 정렬",
                sortNewest: "최신 항목부터 정렬",
                loadMore: "더 로드하기",
                noResults: "{{tab}}에 검색결과가 없습니다.",
                tryOtherTabs: "{{nextTab}} 또는 {{lastTab}}을 시도해 보세요.",
                importLogs: "로그 가져오기"
            },
            modal: {
                title: "메시지 필터링",
                deleted: "삭제됨",
                edited: "편집됨",
                ghostPing: "고스트 핑이 울림",
                empty: "텅 비었어 어",
                importLogs: "ML Enhanced는 이제 indexeddb에 로그를 저장합니다. 로그 디렉터리에서 이전 로그를 가져와야 합니다. 가져오기는 기존 로그를 덮어쓰지 않습니다."
            },
            clear: {
                title: "로그 지우기",
                description: "모든 로그를 지우시겠습니까?",
                confirm: "분명한",
                cancel: "취소"
            },
            option: {
                saveMessages: {
                    label: "메시지 저장",
                    description: "삭제 및 편집된 메시지를 저장할지 여부입니다."
                },
                saveImages: {
                    label: "이미지 저장",
                    description: "삭제된 첨부파일을 저장하세요."
                },
                sortNewest: {
                    label: "최신 항목부터 정렬",
                    description: "최신순으로 로그를 정렬합니다."
                },
                cacheMessagesFromServers: {
                    label: "서버의 캐시 메시지",
                    description: "일반적으로 메시지 로거는 화이트리스트에 있는 ID 및 DM의 로그만 기록하므로 이를 활성화하면 모든 서버의 메시지도 기록한다는 의미입니다. 이로 인해 캐시가 한도를 초과하여 일부 메시지가 누락될 수 있습니다. 서버가 많은 경우 메시지가 기록될 가능성이 크게 높아져 메시지 기록이 커지고 관련 없는 메시지가 포함될 수 있습니다."
                },
                ignoreBots: {
                    label: "봇 무시",
                    description: "봇의 메시지를 무시할지 여부"
                },
                ignoreWebhooks: {
                    label: "웹훅 무시",
                    description: "웹훅에 의한 메시지 무시 여부"
                },
                ignoreSelf: {
                    label: "자기 무시",
                    description: "메시지를 직접 무시할지 여부"
                },
                ignoreMutedGuilds: {
                    label: "음소거된 길드 무시",
                    description: "뮤트된 길드의 메시지는 기록되지 않습니다. 음소거된 길드의 허용된 사용자/채널은 계속 기록됩니다."
                },
                ignoreMutedCategories: {
                    label: "음소거된 카테고리 무시",
                    description: "음소거된 카테고리에 속한 채널의 메시지는 기록되지 않습니다. 음소거된 길드의 허용된 사용자/채널은 계속 기록됩니다."
                },
                ignoreMutedChannels: {
                    label: "음소거된 채널 무시",
                    description: "음소거된 채널의 메시지는 기록되지 않습니다. 음소거된 길드의 허용된 사용자/채널은 계속 기록됩니다."
                },
                alwaysLogDirectMessages: {
                    label: "항상 쪽지를 기록하세요",
                    description: "항상 DM을 기록하세요"
                },
                alwaysLogCurrentChannel: {
                    label: "항상 현재 채널 기록",
                    description: "항상 현재 선택된 채널을 기록합니다. 블랙리스트에 있는 채널/사용자는 계속 무시됩니다."
                },
                permanentlyRemoveLogByDefault: {
                    label: "기본적으로 로그를 영구적으로 제거",
                    description: "Base MessageLogger 로그 제거 버튼을 누르면 로그가 영구적으로 삭제됩니다."
                },
                hideMessageFromMessageLoggers: {
                    label: "메시지 로거에서 메시지 숨기기",
                    description: "활성화되면 상황에 맞는 메뉴 버튼이 메시지에 추가되어 다른 로거가 기록하지 않고 메시지를 삭제할 수 있습니다. 안전하지 않을 수 있으므로 위험을 감수하고 사용하십시오."
                },
                showLogsButton: {
                    label: "로그 표시 버튼",
                    description: "도구 상자를 표시할지 여부를 항상 전환합니다."
                },
                showWhereMessageIsFrom: {
                    label: "메시지의 출처 표시",
                    description: "메시지 채널/작성자 이름 및 서버 이름 표시"
                },
                messagesToDisplayAtOnceInLogs: {
                    label: "로그에 한 번에 표시할 메시지",
                    description: "로그에 한 번에 표시할 메시지 수 및 로그에 더 많은 메시지를 로드할 때 로드할 메시지 수입니다."
                },
                hideMessageFromMessageLoggersDeletedMessage: {
                    label: "메시지 로거에서 메시지 숨기기 삭제된 메시지",
                    description: "메시지 로거에서 메시지 숨기기 기능을 사용할 때 메시지를 대체할 메시지 내용입니다."
                },
                messageLimit: {
                    label: "메시지 제한",
                    description: "저장할 최대 메시지 수입니다. 한도에 도달하면 오래된 메시지가 삭제됩니다. 0은 제한이 없음을 의미합니다."
                },
                attachmentSizeLimitInMegabytes: {
                    label: "첨부 파일 크기 제한(MB)",
                    description: "저장할 첨부 파일의 최대 크기(MB)입니다. 이 크기보다 큰 첨부 파일은 저장되지 않습니다."
                },
                attachmentFileExtensions: {
                    label: "첨부 파일 확장자",
                    description: "저장할 파일 확장자의 쉼표로 구분된 목록입니다. 이 목록에 없는 파일 확장자를 가진 첨부 파일은 저장되지 않습니다. 모든 첨부파일을 저장하려면 비워두세요."
                },
                cacheLimit: {
                    label: "캐시 한도",
                    description: "캐시에 보관할 최대 메시지 수입니다. 한도에 도달하면 오래된 메시지가 삭제됩니다."
                },
                timeBasedCleanupMinutes: {
                    label: "시간 기반 정리 시간(분)",
                    description: "메시지 제한보다 오래된 메시지를 시간 기반으로 정리하는 간격(분)입니다."
                },
                preserveCurrentChannel: {
                    label: "현재 채널 유지",
                    description: "활성화되면 현재 선택한 채널의 메시지는 시간 기반 정리의 영향을 받지 않습니다."
                },
                whitelistedIds: {
                    label: "허용된 ID",
                    description: "화이트리스트에 있는 서버, 채널 또는 사용자 ID."
                },
                blacklistedIds: {
                    label: "블랙리스트에 등록된 ID",
                    description: "블랙리스트에 있는 서버, 채널 또는 사용자 ID."
                },
                imageCacheDir: {
                    label: "이미지 캐시 디렉토리",
                    description: "저장된 이미지 디렉토리 선택"
                },
                logsDir: {
                    label: "로그 디렉터리",
                    description: "로그 디렉터리 선택"
                },
                importLogs: {
                    label: "로그 가져오기",
                    description: "파일에서 로그 가져오기"
                },
                exportLogs: {
                    label: "로그 내보내기",
                    description: "IndexedDB에서 로그 내보내기"
                },
                openLogs: {
                    label: "오픈 로그",
                    description: "오픈 로그"
                },
                openImageCacheFolder: {
                    label: "이미지 캐시 폴더 열기",
                    description: "이미지 캐시 디렉터리를 엽니다."
                },
                clearLogs: {
                    label: "로그 지우기",
                    description: "로그 지우기",
                    title: "로그 지우기",
                    body: "모든 로그를 지우시겠습니까?",
                    confirmText: "분명한",
                    cancel: "취소"
                }
            }
        },
        messageNotifier: {
            name: "MessageNotifier",
            description: "선택된 사용자가 메시지를 보낼 때 토스트 받기",
            dm: "그들의 DM",
            option: {
                users: {
                    label: "사용자",
                    description: "메시지 토스트를 받을 사용자 ID의 쉼표로 구분된 목록입니다.",
                    invalidId: "{{id}}은(는) 유효한 사용자 ID가 아닙니다."
                }
            },
            notification: {
                title: "{{username}}님이 메시지를 보냈습니다",
                body: "{{locationName}}(으)로 이동하려면 클릭하세요."
            }
        },
        messageTags: {
            name: "MessageTags",
            description: "간단한 명령으로 메시지를 저장하고 사용할 수 있습니다.",
            notExist: "**{{tagname}}** 태그가 더 이상 존재하지 않습니다! 문제를 해결하려면 Discord를 다시 로드하세요 :)",
            alreadyExist: "**{{tagname}}** 이름의 태그가 이미 존재합니다!",
            sentTag: "**{{tagname}}** 태그가 전송되었습니다!",
            successCreate: "**{{tagname}}** 태그가 생성되었습니다!",
            allTags: "모든 태그:",
            noTags: "앗! 아직 태그가 없습니다. 태그를 만들려면 /tag create를 사용하세요!",
            noDeleteTag: "**{{tagname}}** 태그가 존재하지 않으므로 삭제할 수 없습니다!",
            successDelete: "**{{name}}** 태그를 삭제했습니다!",
            tagPreview: "**{{name}}** 이름의 태그가 존재하지 않습니다!",
            option: {
                clyde: {
                    label: "전송 시 클라이드 메시지",
                    description: "활성화하면 Clyde는 태그가 사용될 때 임시 메시지를 보냅니다."
                },
                tagsList: {
                    label: "태그 목록",
                    description: ""
                }
            },
            command: {
                tags: {
                    description: "모든 태그를 직접 관리하세요",
                    option: {
                        create: {
                            description: "새 태그 만들기",
                            name: "The name of the tag to trigger the response",
                            message: "이 태그를 사용할 때 보낼 메시지"
                        },
                        list: {
                            description: "자신의 모든 태그 나열"
                        },
                        delete: {
                            description: "자신에게서 태그 제거",
                            name: "The name of the tag to remove"
                        },
                        preview: {
                            description: "태그를 공개적으로 보내지 않고 미리보기",
                            name: "The name of the tag to preview"
                        }
                    }
                }
            }
        },
        micLoopbackTester: {
            name: "MicLoopbackTester",
            description: "사용자 패널에 마이크 루프백 테스트 아이콘을 추가합니다.",
            button: "마이크 테스트 루프백"
        },
        middleClickTweaks: {
            name: "MiddleClickTweaks",
            description: "붙여넣기 및 링크 열기와 같은 다양한 중간 클릭 조정이 가능합니다.",
            option: {
                openScope: {
                    label: "오픈 범위",
                    description: "이러한 콘텐츠 유형을 마우스 가운데 버튼으로 클릭하면 열리지 않도록 합니다.",
                    links: "모래밭",
                    media: "메디아",
                    linksAndMedia: "링크 및 미디어",
                    none: "없음"
                },
                pasteScope: {
                    label: "붙여넣기 범위",
                    description: "이러한 상황에서는 마우스 가운데 버튼을 클릭하여 붙여넣는 것을 방지하세요.",
                    always: "항상 중간 클릭 붙여넣기 방지",
                    focus: "텍스트 영역에 초점이 맞춰지지 않은 경우에만 방지",
                },
                pasteThreshold: {
                    label: "임계값 붙여넣기",
                    description: "가운데 클릭 후 붙여넣기가 다시 활성화될 때까지의 시간은 밀리초입니다."
                }
            }
        },
        moreCommands: {
            name: "MoreCommands",
            description: "에코, 레니, 모의 등",
            command: {
                echo: {
                    description: "Clyde로 메시지를 보냅니다(로컬로)."
                },
                lenny: {
                    description: "레니 얼굴을 보냅니다"
                },
                mock: {
                    description: "조롱하는 사람들"
                },
                wordcount: {
                    description: "메시지의 단어 수를 계산합니다.",
                    response: "메시지에 {{count}} 단어가 포함되어 있습니다."
                },
                flipcoin: {
                    description: "동전을 던져 앞면이나 뒷면이 나옵니다.",
                    heads: "머리",
                    tails: "꼬리",
                    response: "동전이 {{result}}에 떨어졌습니다."
                },
                ask: {
                    description: "예/아니요 질문을 하고 답변을 받으세요.",
                    yes: "예",
                    no: "아니요",
                    maybe: "아마도",
                    askAgain: "나중에 다시 물어보세요",
                    definitelyNot: "확실히 그렇지 않아",
                    itIsCertain: "확실하다"
                },
                randomanimal: {
                    description: "무작위로 동물 사진을 받으세요",
                    animal: "당신의 동물을 선택하세요",
                    cat: "고양이",
                    dog: "개",
                    response: "죄송합니다. 지금은 동물 사진을 가져올 수 없습니다."
                },
                randomnumber: {
                    description: "두 값 사이의 난수를 생성합니다.",
                    min: "최소값",
                    max: "최대값",
                    response: "{{min}}과 {{max}} 사이의 임의의 숫자: {{number}}"
                },
                choose: {
                    description: "제공된 옵션 중에서 무작위로 선택",
                    option: "쉼표로 구분된 선택 목록",
                    response: "나는 다음을 선택합니다: {{choice}}"
                },
                systeminfo: {
                    description: "시스템 정보를 표시합니다",
                    platform: "플랫폼",
                    deviceType: "장치 유형",
                    mobile: "이동하는",
                    desktop: "데스크탑",
                    browser: "브라우저",
                    cpuCores: "CPU 코어",
                    memory: "메모리",
                    screen: "화면",
                    languages: "언어",
                    network: "회로망",
                    online: "온라인",
                    offline: "오프라인",
                    failedToFetch: "시스템 정보를 가져오지 못했습니다.",
                    unknown: "알려지지 않은"
                },
                getuptime: {
                    description: "클라이언트의 가동 시간을 가져옵니다.",
                    response: "**클라이언트 가동 시간**: {{uptime}}분"
                },
                gettime: {
                    description: "현재 시간을 가져옵니다.",
                    response: "현재 시간은 {{time}}입니다."
                },
                transform: {
                    description: "지정된 옵션으로 텍스트를 변환하세요",
                    transformation: {
                        description: "텍스트에 적용할 변환",
                        lowercase: "텍스트를 소문자로 변환",
                        uppercase: "텍스트를 대문자로 변환",
                        localeLowercase: "텍스트를 로케일 소문자로 변환",
                        localeUppercase: "텍스트를 로케일 대문자로 변환",
                        same: "그대로 유지"
                    },
                    repeat: "몇 번이나 반복해야 할까?",
                    reverse: "텍스트를 반전할지 여부",
                    normalize: {
                        description: "텍스트 정규화 형식",
                        nfc: "정규화 형식 C(NFC)",
                        nfd: "정규화 형식 D(NFD)",
                        nfkc: "정규화 형식 KC(NFKC)",
                        nfkd: "정규화 형식 KD(NFKD)"
                    },
                    text: "이 텍스트를 변환하세요"
                }
            }
        },
        moreKaomoji: {
            name: "MoreKaomoji",
            description: "Discord에 더 많은 Kaomoji를 추가합니다. ヽ('▽`)/"
        },
        moreQuickReactions: {
            name: "MoreQuickReactions",
            description: "메시지 컨텍스트 메뉴의 빠른 반응 버튼을 개선합니다.",
            option: {
                reactionCount: {
                    label: "반응 횟수",
                    description: "반응 수(0-42)"
                },
                frequentEmojis: {
                    label: "자주 사용하는 이모티콘",
                    description: "좋아하는 이모티콘 대신 자주 사용하는 이모티콘을 사용하세요"
                },
                rows: {
                    label: "행",
                    description: "표시할 빠른 반응 행"
                },
                columns: {
                    label: "열",
                    description: "표시할 빠른 반응 열"
                },
                compactMode: {
                    label: "컴팩트 모드",
                    description: "버튼의 크기를 원래 크기의 75%로 조정하고 내부 이모티콘의 크기를 125%로 늘립니다. 이모티콘은 원본 크기의 93.75%로 표시됩니다. 최소 5개의 열을 사용하는 것이 좋습니다."
                },
                scroll: {
                    label: "스크롤",
                    description: "이모티콘 목록 스크롤 활성화"
                }
            }
        },
        moreUserTags: {
            name: "MoreUserTags",
            description: "웹훅 및 중재 역할(소유자, 관리자 등)에 대한 태그를 추가합니다.",
            tag: {
                webhook: {
                    name: "Webhook",
                    description: "이 사용자는 웹훅입니다."
                },
                owner: {
                    name: "Owner",
                    description: "서버를 소유하고 있습니다"
                },
                admin: {
                    name: "Admin",
                    description: "관리자 권한이 있습니다"
                },
                staff: {
                    name: "Staff",
                    description: "서버, 채널 또는 역할을 관리할 수 있습니다."
                },
                mod: {
                    name: "Mod",
                    description: "메시지를 관리하거나 사용자를 추방/차단할 수 있습니다."
                },
                vcmod: {
                    name: "VC Mod",
                    description: "음성 채팅을 관리할 수 있습니다"
                },
                chatmod: {
                    name: "Chat Mod",
                    description: "메시지를 관리할 수 있습니다"
                }
            },
            modal: {
                example: "예",
                tag: "꼬리표",
                customTextPlaceholder: "태그의 텍스트(기본값: {{displayName}})",
                messages: "메시지에 표시",
                memberList: "회원 목록 및 프로필에 표시"
            },
            option: {
                dontShowForBots: {
                    label: "봇에는 표시하지 않음",
                    description: "봇에 대한 추가 태그 표시 안 함(웹후크 제외)"
                },
                dontShowBotTag: {
                    label: "봇 태그 표시 안함",
                    description: "봇에 대한 추가 태그만 표시 / [APP] 텍스트 숨기기"
                },
                showWebhookTagFully: {
                    label: "웹훅 태그를 완전히 표시",
                    description: "공지사항과 같은 팔로우 채널에 웹훅 태그 표시"
                },
                tagSettings: {
                    label: "태그 설정",
                    description: "나를 채워줘"
                }
            }
        },
        morse: {
            name: "Morse",
            description: "모스 부호로/에서 변환하는 슬래시 명령입니다.",
            command: {
                morse: {
                    description: "모스 부호로 또는 모스 부호에서 번역",
                    message: "변환할 텍스트"
                }
            }
        },
        moyai: {
            name: "Moyai",
            description: "🗿🗿🗿🗿🗿🗿🗿🗿",
            option: {
                volume: {
                    label: "용량",
                    description: "🗿🗿🗿의 볼륨"
                },
                quality: {
                    label: "품질",
                    description: "🗿🗿🗿의 품질",
                    normal: "정상",
                    hd: "HD"
                },
                triggerWhenUnfocused: {
                    label: "초점이 맞지 않을 때 트리거",
                    description: "창의 초점이 맞지 않는 경우에도 🗿를 트리거합니다."
                },
                ignoreBots: {
                    label: "봇 무시",
                    description: "봇의 메시지 무시"
                },
                ignoreBlocked: {
                    label: "차단된 사용자 무시",
                    description: "차단된 사용자의 메시지 무시"
                }
            }
        },
        musicControls: {
            name: "MusicControls",
            description: "여러 서비스에 대한 음악 컨트롤 및 가사",
            option: {
                spotifySectionTitle: {
                    label: "스포티파이"
                },
                showSpotifyControls: {
                    label: "Spotify 컨트롤 표시",
                    description: "Spotify용 음악 컨트롤 표시"
                },
                showSpotifyLyrics: {
                    label: "Spotify 가사 표시",
                    description: "Spotify 가사 표시"
                },
                useSpotifyUris: {
                    label: "Spotify URI 사용",
                    description: "Spotify URL 대신 Spotify URI를 엽니다. Spotify가 설치된 경우에만 작동하며 모든 플랫폼에서는 작동하지 않을 수 있습니다."
                },
                previousButtonRestartsTrack: {
                    label: "이전 버튼으로 트랙을 다시 시작합니다.",
                    description: "재생 시간이 3초를 초과하는 경우 이전 버튼을 누르면 현재 재생 중인 트랙을 다시 시작합니다."
                },
                tidalSectionTitle: {
                    label: "갯벌"
                },
                showTidalControls: {
                    label: "조석 제어 표시",
                    description: "Tidal의 음악 컨트롤 표시"
                },
                showTidalLyrics: {
                    label: "쇼 타이달(Show Tidal) 가사",
                    description: "Tidal의 가사 표시"
                },
                YtmSectionTitle: {
                    label: "유튜브 뮤직",
                    description: "이 설정에는 {{app}}이 필요합니다"
                },
                showYoutubeMusicControls: {
                    label: "YouTube 음악 컨트롤 표시",
                    description: "YouTube Music의 음악 컨트롤 표시"
                },
                YoutubeMusicApiUrl: {
                    label: "YouTube 뮤직 API URL",
                    description: "사용 중인 YouTube Music API 서버의 URL"
                },
                hoverControls: {
                    label: "호버 컨트롤",
                    description: "마우스를 올리면 컨트롤 표시"
                },
                showMusicNoteOnNoLyrics: {
                    label: "가사 없음에 음표 표시",
                    description: "가사를 찾을 수 없을 때 음표 아이콘 표시"
                },
                lyricsPosition: {
                    label: "가사 위치",
                    description: "가사 패널의 위치",
                    above: "플레이어 위",
                    below: "아래 플레이어"
                },
                lyricsProvider: {
                    label: "가사 제공자",
                    description: "가사를 가져오는 위치",
                    spotify: "스포티파이(Musixmatch)",
                    LRCLIB: "LRCLIB"
                },
                translateTo: {
                    label: "번역 대상",
                    description: "가사 번역 - 이를 변경하면 기존 번역이 삭제됩니다.",
                    cleared: "번역이 삭제됨"
                },
                lyricsConversion: {
                    label: "가사 변환",
                    description: "가사 자동 번역 또는 로마자 표기",
                    none: "없음",
                    translate: "번역하다",
                    romanize: "로마화하다"
                },
                fallbackProvider: {
                    label: "대체 공급자",
                    description: "가사 제공업체가 실패하면 다른 제공업체를 사용해 보세요."
                },
                showFailedToasts: {
                    label: "실패한 토스트 표시",
                    description: "가사가 로드되지 않으면 토스트 표시"
                },
                purgeLyricsCache: {
                    label: "퍼지 가사 캐시",
                    description: "캐시된 가사 및 번역 모두 지우기",
                    button: "캐시 제거",
                    cacheLyricsPurged: "가사 캐시가 삭제되었습니다."
                }
            },
            context: {
                spotify: {
                    label: "Spotify 가사 메뉴",
                    type: "Spotify {{type}} 메뉴",
                    copy: "{{type}} 이름 복사",
                    link: "{{type}} 링크 복사",
                    open: "Spotify에서 {{type}} 열기",
                    album: "Spotify 앨범 메뉴"
                },
                tidal: {
                    label: "Tidal 가사 메뉴",
                    lyrics: "Tidal 가사",
                    type: "타이달 {{name}} 메뉴",
                    copy: "{{name}} 이름 복사",
                    open: "Tidal에서 {{name}} 열기",
                    album: "타이달 앨범 메뉴"
                },
                ytm: {
                    type: "YouTube 뮤직 {{name}} 메뉴",
                    copy: "{{name}} 이름 복사",
                    open: "YouTube Music에서 {{name}} 열기",
                    album: "YouTube 뮤직 앨범 메뉴",
                    muted: "음소거됨"
                },
                lyrics: {
                    provider: "가사 제공자",
                    saved: "저장됨",
                    notFound: "동기화된 가사를 찾을 수 없습니다."
                },
                copy: {
                    currentLyrics: "현재 가사 복사"
                }
            },
            alert: {
                lyricCopied: "가사가 클립보드에 복사되었습니다!",
                noLyrics: "가사 없음",
                noLyricsTo: "{{translated}} 가사 없음",
                translate: "번역하다",
                romanize: "로마자로 표기하다",
                lyricsFetchFailed: "가사를 가져오지 못했습니다.",
                failedToFetchLyrics: "{{translated}}을(를) 가져오지 못했습니다.",
                translation: "번역",
                romanization: "로마자 표기",
                failedToFetchTranslation: "{{translated}} 가사를 가져오지 못했습니다."
            },
            modal: {
                install: {
                    title: "설치 방법",
                    install: "여기에서 {{link}}을 설치한 후 TidalLuna 설정 → 플러그인 스토어 → @vmohammad/api 설치로 이동하세요.",
                    tidaluna: "티다루나"
                },
                player: {
                    noPlaying: "재생 중인 트랙 없음",
                    artist: "아티스트:",
                    album: "앨범:",
                    noLyrics: "사용 가능한 가사가 없습니다 :(",
                    progress: "진전",
                    totalDuration: "총 기간"
                },
                type: {
                    song: "노래",
                    artist: "아티스트",
                    album: "앨범"
                },
                album: {
                    open: "앨범 열기",
                    viewCover: "앨범 표지 보기",
                    volume: "용량",
                    image: "앨범 이미지"
                }
            },
            provider: {
                lrclib: "LRCLIB",
                spotify: "스포티파이",
                translated: "번역됨",
                romanized: "로마자 표기",
                none: "없음"
            },
            error: {
                failed: "모달을 렌더링하지 못했습니다 :(",
                checkConsole: "콘솔에서 오류를 확인하세요.",
                invalidUrlCustomApi: "사용자 정의 API 서버 URL의 URL 형식이 잘못되었습니다."
            }
        },
        mutualGroupDMs: {
            name: "MutualGroupDMs",
            description: "프로필에 상호 그룹 DM을 표시합니다.",
            no: "상호 그룹 없음",
            mutualGroup: "{{count}} 상호 그룹{{s}}",
            members: "회원",
            noGroup: "공통된 그룹 DM이 없습니다.",
            header: "상호 그룹"
        },
        neverPausePreviews: {
            name: "NeverPausePreviews",
            description: "클라이언트가 초점을 잃더라도 통화 중/PiP 미리 보기(화면 공유, 스트림 등)가 일시 중지되는 것을 방지합니다.",
            about: "이 플러그인을 사용하면 Discord가 평소보다 더 많은 리소스를 사용하게 됩니다."
        },
        newGuildSettings: {
            name: "NewGuildSettings",
            description: "가입 시 자동으로 새 서버를 음소거하고 기타 다양한 설정을 변경합니다.",
            context: {
                apply: "새로운 길드 설정 적용"
            },
            option: {
                guild: {
                    label: "뮤트 길드",
                    description: "자동으로 길드 음소거"
                },
                messages: {
                    label: "서버 알림 설정",
                    description: "서버 알림 설정",
                    all: "모든 메시지",
                    mentions: "@멘션만",
                    nothing: "아무것도 아님",
                    default: "서버 기본값"
                },
                everyone: {
                    label: "@everyone 및 @here 억제",
                    description: "@everyone 및 @here 억제"
                },
                role: {
                    label: "모든 역할 @멘션 억제",
                    description: "모든 역할 @멘션 억제"
                },
                highlights: {
                    label: "하이라이트 억제",
                    description: "하이라이트를 자동으로 억제"
                },
                events: {
                    label: "새 이벤트 음소거",
                    description: "새 이벤트를 자동으로 음소거"
                },
                showAllChannels: {
                    label: "모든 채널 표시",
                    description: "모든 채널을 자동으로 표시"
                },
                mobilePush: {
                    label: "모바일 푸시 알림 음소거",
                    description: "모바일 푸시 알림을 자동으로 음소거"
                },
                voiceChannels: {
                    label: "음성 채널",
                    description: "음성 채널에서 자동으로 이름 숨기기"
                }
            }
        },
        newPluginsManager: {
            name: "NewPluginsManager",
            description: "Plexcord에 새 플러그인이 추가되면 이를 알려주는 유틸리티",
            modal: {
                title: "새로운 플러그인 및 설정",
                description: "마지막 방문 이후 새로운 플러그인과 설정이 추가되었습니다. 아래에서 새로 추가된 내용을 검토하세요.",
                tooltip: "이 세션 닫기",
                dontShowAgain: "다시 표시하지 않음",
                restartRequired: "변경 사항을 적용하려면 다시 시작해야 함",
                restart: "다시 시작",
                continue: "계속하다"
            }
        },
        noAppsAllowed: {
            name: "NoAppsAllowed",
            description: "봇의 태그를 원래 형식으로 되돌립니다."
        },
        noBlockedMessages: {
            name: "NoBlockedMessages",
            description: "채팅에서 차단/무시된 모든 메시지를 완전히 숨깁니다.",
            option: {
                alsoHideIgnoredUsers: {
                    label: "무시된 사용자도 숨기기",
                    description: "또한 무시된 사용자의 메시지를 숨깁니다."
                },
                disableNotifications: {
                    label: "알림 비활성화",
                    description: "차단된 사용자에 대한 새 메시지 알림을 숨깁니다. 아래에서 '기본 사용자 숨기기'가 활성화되어 있고 알림을 트리거하는 사용자가 '사용자 재정의'에서 면제되지 않은 경우 항상 true입니다."
                },
                allowAutoModMessages: {
                    label: "AutoMod 메시지 허용",
                    description: "AutoMod에서 보낸 메시지가 필터링을 우회하도록 허용합니다."
                },
                hideBlockedUserReplies: {
                    label: "차단된 사용자 답장 숨기기",
                    description: "스레드에 참여한 경우 스레드에서 차단된 사용자의 메시지를 숨깁니다."
                },
                defaultHideUsers: {
                    label: "기본 사용자 숨기기",
                    description: "활성화하면 차단된 사용자의 메시지가 완전히 숨겨지고 대신 재정의 목록에 있는 사용자 ID의 모든 메시지가 축소됩니다(기본 Discord 동작). 비활성화하면 차단된 사용자의 메시지가 축소되고 대신 재정의 목록에 있는 사용자 ID의 메시지가 완전히 숨겨집니다."
                },
                overrideUsers: {
                    label: "사용자 재정의",
                    description: "위에서 선택한 기본 동작 대신 숨겨지거나 접힐 사용자 ID의 쉼표로 구분된 목록입니다."
                }
            }
        },
        noBulletPoints: {
            name: "NoBulletPoints",
            description: "마크다운 글머리 기호를 입력하는 것을 중지합니다(냄새남)."
        },
        noDeepLinks: {
            name: "DisableDeepLinks",
            description: "데스크톱 앱을 사용하도록 강요하는 Discord의 중복 딥링킹 기능을 비활성화합니다."
        },
        noDeleteSafety: {
            name: "NoDeleteSafety",
            description: "서버 삭제 시 '서버 이름 입력' 요구 사항 제거",
            option: {
                confirmModal: {
                    label: "모달 확인",
                    description: "'삭제하시겠습니까?' 모달이 표시되어야 합니까?"
                }
            },
            modal: {
                title: "서버를 삭제하시겠습니까?",
                body: "그것이 분명하지 않다면 그것은 영구적입니다.",
                confirm: "삭제",
                cancel: "취소"
            }
        },
        noDevtoolsWarning: {
            name: "NoDevtoolsWarning",
            description: "콘솔에서 'HOLD UP' 배너를 비활성화합니다. 부작용으로 Discord가 토큰을 숨기는 것을 방지하여 무작위 로그아웃을 방지합니다."
        },
        noF1: {
            name: "NoF1",
            description: "F1 도움말 바인딩을 비활성화합니다."
        },
        noMaskedUrlPaste: {
            name: "NoMaskedUrlPaste",
            description: "텍스트를 선택한 상태에서 링크를 붙여넣으면 마스크된 URL로 붙여넣어지지 않습니다."
        },
        noMirroredCamera: {
            name: "NoMirroredCamera",
            description: "카메라가 화면에 미러링되는 것을 방지합니다."
        },
        noModalAnimation: {
            name: "NoModalAnimation",
            description: "모달을 열거나 닫을 때 300ms 길이의 애니메이션을 제거합니다."
        },
        noMosaic: {
            name: "NoMosaic",
            description: "Discord 이미지 모자이크 제거",
            option: {
                inlineVideo: {
                    label: "인라인 비디오",
                    description: "캐러셀 모달 없이 동영상 재생"
                }
            }
        },
        noNitroUpsell: {
            name: "NoNitroUpsell",
            description: "클라이언트가 Nitro를 가지고 있다고 생각하도록 속여 Discord의 모든 Nitro 상향 판매를 제거합니다."
        },
        noOnboarding: {
            name: "NoOnboarding",
            description: "더 빠른 서버 진입을 위해 Discord의 온보딩 프로세스를 우회합니다."
        },
        noOnboardingDelay: {
            name: "NoOnboardingDelay",
            description: "느리고 성가신 온보딩 지연을 건너뜁니다."
        },
        noPendingCount: {
            name: "NoPendingCount",
            description: "수신 친구 요청, 메시지 요청 및 Nitro 제안의 핑 횟수를 제거합니다.",
            option: {
                hideFriendRequestsCount: {
                    label: "친구 요청 수 숨기기",
                    description: "수신 친구 요청 수 숨기기"
                },
                hideMessageRequestsCount: {
                    label: "메시지 요청 수 숨기기",
                    description: "메시지 요청 수 숨기기"
                },
                hidePremiumOffersCount: {
                    label: "프리미엄 제안 수 숨기기",
                    description: "Nitro 제안 수 숨기기"
                }
            }
        },
        noProfileThemes: {
            name: "NoProfileThemes",
            description: "자신을 제외한 모든 사람의 Nitro 프로필 테마를 완전히 제거합니다."
        },
        noPushToTalk: {
            name: "NoPushToTalk",
            description: "이를 시행하는 채널의 음성 활동에 대한 푸시-투-톡 요구 사항을 우회합니다."
        },
        noReplyMention: {
            name: "NoReplyMention",
            description: "기본적으로 응답 핑을 비활성화합니다.",
            option: {
                userList: {
                    label: "사용자 목록",
                    description: "핑을 허용하거나 면제할 사용자 목록(쉼표나 공백으로 구분)"
                },
                roleList: {
                    label: "역할 목록",
                    description: "핑을 허용하거나 면제할 역할 목록(쉼표나 공백으로 구분)"
                },
                shouldPingListed: {
                    label: "Ping이 나열되어야 함",
                    description: "행동",
                    dontPing: "나열된 사용자/역할을 핑하지 마십시오.",
                    onlyPing: "나열된 사용자/역할만 핑합니다."
                },
                inverseShiftReply: {
                    label: "역 시프트 응답",
                    description: "Discord의 교대 응답 동작 반전(교대 응답 사용자를 언급할 수 있게 함)"
                }
            }
        },
        normalizeMessageLinks: {
            name: "NormalizeMessageLinks",
            description: "메시지 링크에서 Canary/ptb 제거"
        },
        noRoleHeaders: {
            name: "NoRoleHeaders",
            description: "우리는 모두 평등해요!! 구성원 목록에서 역할 헤더를 제거합니다."
        },
        noRPC: {
            name: "NoRPC",
            description: "Discord Rich Presence를 비활성화합니다."
        },
        noServerEmojis: {
            name: "NoServerEmojis",
            description: "자동완성 메뉴에 서버 이모티콘을 표시하지 않습니다.",
            option: {
                shownEmojis: {
                    label: "표시된 이모티콘",
                    description: "자동완성 메뉴에 표시할 이모티콘을 선택하세요",
                    onlyUnicode: "유니코드 이모티콘만 가능",
                    currentServer: "현재 서버의 유니코드 이모티콘 및 서버 이모티콘",
                    all: "유니코드 이모티콘 및 모든 서버 이모티콘(Discord 기본값)"
                }
            }
        },
        noSystemBadge: {
            name: "NoSystemBadge",
            description: "작업 표시줄 및 시스템 트레이의 읽지 않은 읽지 않은 개수 배지를 비활성화합니다."
        },
        notificationTitle: {
            name: "NotificationTitle",
            description: "데스크톱 알림을 더욱 유익하게 만듭니다."
        },
        notificationVolume: {
            name: "NotificationVolume",
            description: "Discord 알림에 대한 사용자 정의 볼륨 설정",
            option: {
                notificationVolume: {
                    label: "알림 볼륨",
                    description: "알림 볼륨"
                }
            }
        },
        noTypingAnimation: {
            name: "NoTypingAnimation",
            description: "채팅에서 타이핑 애니메이션을 비활성화합니다."
        },
        noUnblockToJump: {
            name: "NoUnblockToJump",
            description: "차단을 해제하지 않고도 차단되거나 무시된 사용자 및 스패머 가능성이 있는 사용자의 메시지로 이동할 수 있습니다."
        },
        onePingPerDM: {
            name: "OnePingPerDM",
            description: "사용자가 읽지 않은 메시지를 DM으로 여러 번 보내는 경우 오디오 핑은 한 번만 수신됩니다.",
            option: {
                channelToAffect: {
                    label: "영향을 미칠 채널",
                    description: "플러그인이 영향을 미칠 DM 유형을 선택하세요.",
                    both: "둘 다",
                    user: "사용자 DM",
                    group: "그룹 DM"
                },
                allowMentions: {
                    label: "언급 허용",
                    description: "@멘션에 대한 오디오 핑 수신"
                },
                allowEveryone: {
                    label: "모두 허용",
                    description: "그룹 DM에서 @everyone 및 @here에 대한 오디오 핑 수신"
                },
                ignoreUsers: {
                    label: "사용자 무시",
                    description: "핑을 조절해서는 안 되는 사용자 ID(쉼표 + 공백)"
                },
                alwaysPlaySound: {
                    label: "항상 소리 재생",
                    description: "비활성화된 경우에도 메시지 알림 소리를 재생합니다."
                }
            }
        },
        openInApp: {
            name: "OpenInApp",
            description: "브라우저 대신 해당 앱에서 링크 열기",
            option: {
                spotify: {
                    label: "스포티파이",
                    description: "Spotify 앱에서 Spotify 링크 열기"
                },
                steam: {
                    label: "증기",
                    description: "Steam 앱에서 Steam 링크 열기"
                },
                epic: {
                    label: "에픽게임즈",
                    description: "Epic Games Launcher에서 Epic Games 링크를 엽니다."
                },
                tidal: {
                    label: "갯벌",
                    description: "Tidal 앱에서 Tidal 링크 열기"
                },
                itunes: {
                    label: "아이튠즈",
                    description: "iTunes 앱에서 Apple Music 링크 열기"
                },
                vrcx: {
                    label: "VR챗",
                    description: "VRCX 앱에서 VRChat 링크 열기"
                }
            },
            notification: {
                open: "기본 앱에서 링크를 열었습니다."
            }
        },
        overrideForumDefaults: {
            name: "OverrideForumDefaults",
            description: "기본 포럼 레이아웃/정렬 순서를 재정의할 수 있습니다. 채널별로 변경할 수 있습니다.",
            option: {
                defaultLayout: {
                    label: "기본 태그",
                    description: "기본으로 사용할 레이아웃",
                    list: "목록",
                    gallery: "갱도"
                },
                defaultSortOrder: {
                    label: "기본 정렬 순서",
                    description: "기본값으로 사용할 정렬 순서",
                    recentlyActive: "최근 활동",
                    datePosted: "게시된 날짜"
                }
            }
        },
        partyMode: {
            name: "PartyMode",
            description: "파티는 끝나지 않으므로 파티 모드를 사용할 수 있습니다 ✨",
            option: {
                superIntensePartyMode: {
                    label: "매우 강렬한 파티 모드",
                    description: "파티 강도",
                    normal: "정상",
                    better: "더 나은",
                    projectX: "프로젝트 X"
                }
            }
        },
        pauseInvitesForever: {
            name: "PauseInvitesForever",
            description: "Discord가 중복하여 제거한 초대를 무기한 일시 중지하는 옵션을 다시 가져옵니다.",
            pauseIndefinitely: "무기한 일시중지"
        },
        permissionFreeWill: {
            name: "PermissionFreeWill",
            description: "채널 권한 관리에 대한 클라이언트 측 제한을 비활성화합니다.",
            option: {
                lockout: {
                    label: "공장 폐쇄",
                    description: "권한 잠금 방지 우회('확실히 이 작업을 원하지 않으실 겁니다')"
                },
                onboarding: {
                    label: "온보딩",
                    description: "온보딩 요구 사항 우회('이렇게 변경하면 서버가 호환되지 않게 됩니다 [...]')"
                }
            }
        },
        permissionsViewer: {
            name: "PermissionsViewer",
            description: "사용자 또는 채널이 가지고 있는 권한과 서버의 역할을 봅니다.",
            view: "권한 보기",
            option: {
                permissionsSortOrder: {
                    label: "권한 정렬 순서",
                    description: "사용자에게 특정 권한을 부여하는 역할을 정의하는 데 사용되는 정렬 방법",
                    highest: "가장 높은 역할",
                    lowest: "가장 낮은 역할"
                }
            },
            icon: {
                denied: "거부됨",
                allowed: "허용된",
                notOverwritten: "덮어쓰지 않음"
            },
            context: {
                permissions: "권한"
            },
            modal: {
                title: "권한",
                noPermissions: "표시할 권한이 없습니다!",
                owner: "소유자",
                grantedBy: "부여자:",
                serverOwner: "서버 소유자",
                ownerRole: "소유자",
                sortingBy: "{{method}} 기준으로 정렬",
                highest: "가장 높은 역할",
                lowest: "가장 낮은 역할",
                details: "역할 세부정보"
            }
        },
        petpet: {
            name: "PetPet",
            description: "/petpet 슬래시 명령을 추가하여 모든 이미지에서 headpet GIF를 생성합니다.",
            command: {
                petpet: {
                    description: "애완동물 GIF를 만들어보세요. 이미지 옵션 중 하나만 지정할 수 있습니다.",
                    delay: "각 프레임 사이의 지연입니다. 기본값은 20입니다.",
                    resolution: "GIF의 해상도입니다. 기본값은 120입니다. 이상한 숫자를 입력하여 Discord가 정지된다면 이는 귀하의 잘못입니다.",
                    image: "사용할 이미지 첨부",
                    url: "이미지를 가져올 URL",
                    user: "아바타를 이미지로 사용할 사용자",
                    noServerPfp: "'사용자' 옵션 사용 시 서버별 아바타가 아닌 일반 아바타를 사용하세요.",
                    error: {
                        noImage: "지정된 이미지가 없습니다!",
                        delayTooLow: "지연 시간은 20 이상이어야 합니다.",
                    }
                }
            },
            error: {
                uploadNotImage: "업로드한 이미지가 아닙니다.",
                fetchUserFailed: "사용자를 가져오지 못했습니다. 자세한 내용은 콘솔을 확인하세요.",
                fetchImageFailed: "{{url}}을(를) 로드하는 동안 오류가 발생했습니다. 자세한 내용은 콘솔을 확인하세요."
            }
        },
        pictureInPicture: {
            name: "PictureInPicture",
            description: "비디오에 Picture-in-Picture 추가(다운로드 버튼 옆)",
            tooltip: "PIP(Picture-in-Picture) 전환",
            option: {
                loop: {
                    label: "고리",
                    description: "PiP 비디오 루프를 만들 것인지 여부"
                }
            }
        },
        pinDMs: {
            name: "PinDMs",
            description: "비공개 채널을 DM 목록 상단에 고정할 수 있습니다. 핀을 고정/고정 해제하거나 재정렬하려면 DM을 마우스 오른쪽 버튼으로 클릭하세요.",
            context: {
                category: {
                    label: "DM 고정 카테고리 메뉴",
                    edit: "카테고리 편집",
                    up: "위로 이동",
                    down: "아래로 이동",
                    delete: "카테고리 삭제",
                    unnamed: "어 오"
                },
                pin: {
                    label: "DM 고정",
                    addCategory: "카테고리 추가"
                },
                unPin: {
                    label: "DM 고정 해제",
                    move: "카테고리로 이동"
                }
            },
            option: {
                pinOrder: {
                    label: "핀 순서",
                    description: "고정된 DM은 어떤 순서로 표시되어야 하나요?",
                    lastMessage: "가장 최근 메시지",
                    custom: "사용자 정의(재정렬하려면 채널을 마우스 오른쪽 버튼으로 클릭)"
                },
                canCollapseDmSection: {
                    label: "접이식 고정 섹션",
                    description: "분류되지 않은 DM 섹션을 접을 수 있도록 허용"
                },
                dmSectionCollapsed: {
                    label: "DM 섹션이 접혔습니다.",
                    description: "DM 섹션 접기"
                },
                userBasedCategoryList: {
                    label: "사용자 기반 카테고리 목록",
                    description: ""
                }
            },
            modal: {
                category: {
                    pin: "핀 카테고리",
                    edit: "카테고리 편집",
                    new: "새 카테고리",
                    name: "Name",
                    color: "색상",
                    save: "구하다",
                    create: "만들다"
                }
            }
        },
        pingNotifications: {
            name: "PingNotifications",
            description: "향상된 멘션 형식으로 사용자 정의 가능한 알림",
            option: {
                friends: {
                    label: "친구",
                    description: "친구가 서버에서 메시지를 보낼 때 알림"
                },
                mentions: {
                    label: "언급",
                    description: "누군가가 귀하를 직접 @멘션하면 알림"
                },
                dms: {
                    label: "DM",
                    description: "다이렉트 메시지(DM)에 대해 알림"
                },
                showInActive: {
                    label: "활성 상태로 표시",
                    description: "현재 활성 채널에도 알림 표시"
                },
                ignoreMuted: {
                    label: "음소거 무시",
                    description: "음소거된 서버, 채널 또는 사용자의 알림 건너뛰기"
                }
            },
            unknown: "알려지지 않은",
            dm: "DM",
            groupDM: "그룹DM",
            title: "{{channelName}}의 {{username}}"
        },
        pinIcon: {
            name: "PinIcon",
            description: "고정된 메시지에 핀 아이콘을 추가합니다."
        },
        plainFolderIcon: {
            name: "PlainFolderIcon",
            description: "폴더에 작은 길드 아이콘 표시 안함"
        },
        platformIndicators: {
            name: "PlatformIndicators",
            description: "사용자에게 플랫폼 지표(데스크톱, 모바일, 웹...)를 추가합니다.",
            embeddedTooltip: "콘솔",
            vrTooltip: "VR",
            option: {
                list: {
                    label: "목록",
                    description: "회원 목록에 표시기 표시"
                },
                badges: {
                    label: "배지",
                    description: "사용자 프로필의 표시기를 배지로 표시"
                },
                messages: {
                    label: "메시지",
                    description: "메시지 내부에 표시기 표시"
                },
                colorMobileIndicator: {
                    label: "컬러 모바일 표시기",
                    description: "모바일 표시기를 사용자 상태의 색상과 일치시킬지 여부입니다."
                },
                showBots: {
                    label: "봇 표시",
                    description: "봇에 플랫폼 표시기를 표시할지 여부"
                }
            }
        },
        platformSpoofer: {
            name: "PlatformSpoofer",
            description: "현재 사용 중인 플랫폼이나 장치를 스푸핑하세요.",
            about: "이 플러그인이 경고를 받거나 금지되지 않을 것이라고 보장할 수 없습니다.",
            platform: {
                desktop: "디스코드 클라이언트",
                web: "디스코드 웹",
                ios: "iOS 디스코드",
                android: "디스코드 안드로이드",
                xbox: "디스코드 내장",
                playstation: "디스코드 내장",
                vr: "VR"
            },
            option: {
                platform: {
                    label: "플랫폼",
                    description: "어떤 플랫폼으로 나타날지",
                    desktop: "데스크탑",
                    web: "편물",
                    android: "기계적 인조 인간",
                    ios: "iOS",
                    xbox: "엑스박스",
                    playstation: "플레이스테이션",
                    vr: "VR"
                }
            }
        },
        plexcordToolbox: {
            name: "PlexcordToolbox",
            description: "Plexcord 빠른 작업이 포함된 AppBar에 버튼을 추가합니다.",
            tooltip: "Plexcord 도구 상자",
            context: {
                openLog: "알림 로그 열기",
                enableQuickCSS: "QuickCSS 활성화",
                openQuickCSS: "QuickCSS 편집",
                openSettings: "설정 열기",
                manageThemes: "테마 관리"
            },
            option: {
                showPluginMenu: {
                    label: "플러그인 메뉴 표시",
                    description: "Plexcord 도구 상자에 플러그인 메뉴 표시"
                }
            }
        },
        polishWording: {
            name: "PolishWording",
            description: "메시지를 더 보기 좋게 만들고 더 나은 문법을 갖도록 수정합니다. 설정 보기",
            option: {
                quickDisable: {
                    label: "빠른 비활성화",
                    description: "빠른 비활성화. 클라이언트를 다시 로드할 필요 없이 메시지 수정을 끕니다."
                },
                blockedWords: {
                    label: "차단된 단어",
                    description: "대문자로 표시되지 않는 단어(쉼표로 구분)"
                },
                fixApostrophes: {
                    label: "아포스트로피 수정",
                    description: "축약어에 아포스트로피가 포함되어 있는지 확인하세요."
                },
                expandContractions: {
                    label: "수축 확장",
                    description: "수축 확장"
                },
                fixCapitalization: {
                    label: "대문자 수정",
                    description: "문장을 대문자로 표기하세요."
                },
                fixPunctuation: {
                    label: "구두점 수정",
                    description: "구두점 주변의 간격을 수정하세요."
                },
                fixPunctuationFrequency: {
                    label: "구두점 빈도 수정",
                    description: "백분율 기간 빈도(이는 일부 사람들을 크게 짜증나게 합니다).",
                }
            }
        },
        previewMessage: {
            name: "PreviewMessage",
            description: "메시지를 보내기 전에 미리 볼 수 있습니다.",
            tooltip: "메시지 미리보기"
        },
        profileSets: {
            name: "ProfileSets",
            description: "설정의 프로필 섹션을 통해 다양한 프로필 사전 설정을 저장하고 로드할 수 있습니다.",
            toast: {
                importFailed: "프로필 세트를 가져오지 못했습니다. 파일이 유효하지 않을 수 있습니다.",
            },
            option: {
                avatarSize: {
                    label: "아바타 크기",
                    description: "사전 설정 목록의 아바타 크기"
                }
            },
            modal: {
                override: "보수",
                merge: "병합",
                cancel: "취소",
                timestamp: "{{formattedDate}}({{formattedTime}})",
                rename: "이름 바꾸기",
                update: "업데이트",
                moveUp: "위로 이동",
                moveDown: "아래로 이동",
                moveTo: "1페이지로 이동",
                delete: "삭제",
                importProfiles: "프로필 가져오기",
                importText: "이 섹션에는 {{existingCount}}개의 기존 프로필이 있습니다. 이를 재정의하시겠습니까, 아니면 가져온 프로필과 병합하시겠습니까?",
                heading: "저장된 프로필",
                searchProfiles: "프로필 검색...",
                profileName: "프로필 이름",
                saving: "절약...",
                save: "프로필 저장",
                cancelSearch: "검색 취소",
                search: "찾다",
                random: "무작위의",
                import: "수입",
                exportAll: "모두 내보내기"
            }
        },
        questify: {
            name: "Questify",
            description: "일련의 기능으로 Quest 경험을 향상시키거나 해당 기능이 마음에 들지 않으면 완전히 비활성화하십시오.",
            quests: "퀘스트",
            context: {
                quest: {
                    label: "퀘스트 버튼 메뉴",
                    ignore: "모두 무시로 표시",
                    reset: "무시된 목록 재설정",
                    fetch: "퀘스트 가져오기",
                    markAsIgnored: "무시로 표시",
                    unmarkAsIgnored: "무시됨 표시 해제",
                    stopAuto: "자동 완성 중지",
                    copyQuestID: "퀘스트 ID 복사",
                    startAuto: "자동 완성 시작"
                }
            },
            settings: {
                questButton: {
                    title: "퀘스트 버튼",
                    description: "요청하지 않은 퀘스트에 대한 선택적 표시와 함께 서버 목록에 퀘스트 버튼을 표시합니다.",
                    leftClick: "왼쪽 클릭 동작",
                    middleClick: "중간 클릭 동작",
                    rightClick: "마우스 오른쪽 버튼 클릭 동작",
                    visibility: "버튼 가시성",
                    unclaimedIndicator: "미청구 지표",
                    badgeColor: "배지 색상",
                    rewardDisplay: "보상 표시",
                    includedRewardTypes: "포함된 보상 유형",
                    includedRewardTypesDesc: "버튼 가시성, 배지 수를 결정하고 경고음을 재생할 때 이러한 보상 유형이 있는 퀘스트만 청구되지 않은 것으로 계산됩니다.",
                    selectRewardTypes: "미청구 횟수에 포함할 보상 유형을 선택하세요...",
                    noRewardType: "해당 이름으로 지원되는 Quest 기능이 없습니다.",
                    default: "기본",
                    disable: "장애를 입히다"
                },
                questFeatures: {
                    title: "퀘스트 특징",
                    description: "특정 Quest 기능을 수정합니다.",
                    popupWarning: "완료된 퀘스트 및 퀘스트 진행 상황 추적에서는 {{disablePopup}} 옵션이 무시됩니다.",
                    videoQuestInfo: "{{completeVideo}} 옵션은 비디오 퀘스트 기간 동안 기다렸다가 자동으로 완료된 것으로 표시합니다.",
                    gameQuestInfo: "마찬가지로 {{completeGame}} 옵션은 게임 퀘스트 기간 동안 기다렸다가 자동으로 완료된 것으로 표시합니다. 이 옵션은 공식 데스크톱 클라이언트에서만 지원됩니다.",
                    manualStartWarning: "여전히 퀘스트는 수동으로 시작해야 합니다. 첫 번째 클릭은 백그라운드에서 퀘스트를 시작합니다. 비디오 퀘스트의 경우 후속 클릭을 하면 정상적으로 비디오 모달이 열립니다. 퀘스트를 중단하려면 퀘스트 타일에서 상황에 맞는 메뉴를 열고 {{stopAuto}}을 선택하세요.",
                    tosWarning: "이러한 옵션 중 하나를 사용하는 것은 Discord의 ToS에 위배됩니다. 자신의 책임하에 사용하십시오.",
                    selectFeatures: "수정할 Quest 기능을 선택합니다.",
                    disablePopup: "계정 패널 위의 퀘스트 팝업 비활성화",
                    completeVideo: "백그라운드에서 비디오 퀘스트 완료",
                    completeGame: "백그라운드에서 플레이 게임 퀘스트 완료하기",
                    stopAuto: "자동 완성 중지"
                },
                restyleQuests: {
                    title: "퀘스트 리스타일",
                    description: "가시성을 위해 선택적인 테마 색상으로 퀘스트를 강조 표시합니다.",
                    precedenceNote: "요청한 퀘스트 스타일과 만료된 퀘스트 스타일은 퀘스트가 무시되더라도 우선적으로 적용됩니다.",
                    gradientStyle: "그라데이션 스타일",
                    assetPreload: "자산 사전 로드",
                    unclaimed: "청구되지 않은",
                    claimed: "청구됨",
                    ignored: "무시됨",
                    expired: "만료됨",
                    intenseGradient: "강렬한 리스타일 그라데이션",
                    defaultGradient: "기본 스타일 변경 그라데이션",
                    blackGradient: "미묘한 블랙 그라데이션",
                    noGradient: "그라데이션 없음",
                    loadAllAssets: "페이지 로드 시 모든 퀘스트 자산 로드",
                    loadDuringScroll: "페이지 스크롤 중 퀘스트 자산 로드"
                },
                reorderQuests: {
                    title: "퀘스트 재정렬",
                    description: "상태별로 퀘스트를 정렬합니다. 퀘스트 페이지에서 \"Questify\" 정렬 옵션을 선택한 경우 적용됩니다.",
                    formatNote: "쉼표로 구분된 목록에는 {{items}}이 모두 포함되어야 합니다.",
                    placeholder: "UNCLAIMED, CLAIMED, IGNORED, EXPIRED를 모두 포함해야 합니다.",
                    invalidFormat: "형식이 잘못되었습니다.",
                    unclaimedSubsort: "청구되지 않은 하위 분류",
                    claimedSubsort: "청구된 하위 분류",
                    ignoredSubsort: "무시된 하위 정렬",
                    expiredSubsort: "만료된 하위 분류",
                    addedNewest: "추가됨(최신)",
                    addedOldest: "추가됨(가장 오래된 것)",
                    expiredRecent: "만료됨(가장 최근)",
                    expiredLeast: "만료됨(가장 최근 항목)",
                    expiringSoon: "만료(가장 빨리)",
                    expiringLate: "만료 예정(최신)",
                    claimedRecent: "청구됨(가장 최근)",
                    claimedLeast: "청구됨(가장 최근)",
                    ignoredQuestProfile: "무시된 퀘스트 프로필",
                    sharedProfile: "공유: 이 클라이언트 공유의 모든 계정은 무시됩니다.",
                    privateProfile: "비공개: 이 클라이언트의 모든 계정에는 별도의 무시가 있습니다.",
                    rememberSort: "정렬 선택 기억하기",
                    rememberFilter: "필터 선택 기억하기",
                    yes: "예",
                    no: "아니요",
                    rememberNote: "이 정렬 및 필터 선택은 퀘스트 페이지에 내장된 정렬 및 필터 옵션을 나타냅니다. 위의 사용자 정의 정렬은 퀘스트 페이지에서 \"Questify\" 정렬 옵션을 선택한 경우에만 적용됩니다. 기억 기능이 비활성화된 경우 퀘스트 페이지를 열 때마다 정렬 또는 필터 옵션이 재설정됩니다."
                },
                fetchingQuests: {
                    title: "퀘스트 가져오는 중",
                    description: "Discord에서 퀘스트를 가져오는 빈도를 구성하고 새 퀘스트에 대한 알림을 설정하세요.",
                    defaultBehavior: "기본적으로 Discord는 로드 시와 퀘스트 페이지를 방문할 때만 퀘스트를 가져옵니다. 즉, 아래에 정의된 가져오기 간격이 없으면 이 플러그인은 하루 종일 추가된 새 퀘스트를 인식하지 못하게 됩니다.",
                    requirement: "이는 활성화된 퀘스트 버튼에 따라 {{unclaimed}}로 설정되거나 청구되지 않은 {{pill}}, {{badge}} 또는 {{both}} 표시기가 활성화된 {{always}}로 설정됩니다. 그렇지 않으면 주기적으로 퀘스트를 가져올 이유가 없습니다.",
                    blockWarning: "또한 {{questFeatures}} 설정에서 {{fetchingQuests}}이 차단된 경우에는 작동하지 않습니다.",
                    fetchInterval: "가져오기 간격",
                    alertSound: "경고음",
                    intervalPlaceholder: "30분에서 12시간 사이의 간격을 선택하거나 입력합니다.",
                    intervalFeedback: "간격은 30분에서 12시간 사이여야 합니다.",
                    soundPlaceholder: "사운드를 선택하거나 사용자 정의 사운드 URL을 제공하세요.",
                    soundFeedback: "사운드를 찾을 수 없거나 지원되는 도메인의 URL이 아닙니다.",
                    disabled: "장애가 있는",
                    minutes: "분",
                    minute: "분",
                    hours: "시간",
                    hour: "시간",
                    thirtyMinutes: "30분",
                    oneHour: "1시간",
                    threeHours: "3시간",
                    sixHours: "6시간",
                    twelveHours: "12시간",
                    customSound: "맞춤형 사운드"
                },
                disableOptions: {
                    everything: "모든 것을 비활성화",
                    discovery: "검색 탭 비활성화",
                    dms: "DM에서 퀘스트 탭 비활성화",
                    fetching: "퀘스트 가져오기 비활성화",
                    popup: "계정 패널 위 팝업 비활성화",
                    sponsored: "퀘스트 페이지에서 스폰서 배너 비활성화",
                    badge: "사용자 프로필에서 배지 비활성화",
                    inventory: "선물 인벤토리 재배치 알림 비활성화",
                    friendsList: "친구 목록 활성 상태 프로모션",
                    membersList: "회원 목록 적극적으로 재생 아이콘",
                    gameQuests: "백그라운드에서 플레이 게임/활동 퀘스트 완료",
                    videoQuests: "백그라운드에서 비디오 시청 퀘스트를 완료하세요",
                    achievementQuests: "백그라운드에서 활동 퀘스트의 작업 완료",
                    mobileDesktop: "모바일 퀘스트를 데스크탑과 호환되게 만들기",
                    notifyOnComplete: "퀘스트 완료 알림"
                },
                options: {
                    always: "언제나",
                    unclaimed: "청구되지 않은",
                    never: "절대",
                    pill: "알약",
                    badge: "배지",
                    both: "둘 다",
                    none: "없음",
                    openQuests: "오픈 퀘스트",
                    contextMenu: "상황에 맞는 메뉴",
                    pluginSettings: "플러그인 설정",
                    nothing: "아무것도 아님",
                    orbs: "오브",
                    nitroCodes: "니트로 코드",
                    rewardCodes: "보상 코드",
                    inGameItems: "게임 내 아이템",
                    profileCollectibles: "프로필 수집품"
                }
            },
            option: {
                disableQuests: {
                    label: "퀘스트 비활성화",
                    description: "비활성화할 Quest 기능을 선택합니다."
                },
                disableQuestsEverything: {
                    label: "모든 것을 비활성화",
                    description: "모든 Quest 기능을 비활성화합니다."
                },
                disableQuestsFetchingQuests: {
                    label: "퀘스트 가져오기 비활성화",
                    description: "Discord에서 퀘스트 가져오기를 비활성화합니다."
                },
                disableQuestsDirectMessagesTab: {
                    label: "DM에서 퀘스트 탭 비활성화",
                    description: "직접 메시지 페이지에서 퀘스트 탭을 비활성화합니다."
                },
                disableQuestsDiscoveryTab: {
                    label: "검색 탭 비활성화",
                    description: "검색 페이지에서 퀘스트 탭을 비활성화합니다."
                },
                disableQuestsPageSponsoredBanner: {
                    label: "퀘스트 페이지에서 스폰서 배너 비활성화",
                    description: "퀘스트 페이지에서 스폰서 배너를 비활성화합니다."
                },
                disableQuestsPopupAboveAccountPanel: {
                    label: "계정 패널 위 팝업 비활성화",
                    description: "계정 패널 위의 퀘스트 팝업을 비활성화하세요."
                },
                disableQuestsBadgeOnUserProfiles: {
                    label: "사용자 프로필에서 배지 비활성화",
                    description: "사용자 프로필에서 Quest 배지를 비활성화합니다."
                },
                disableQuestsGiftInventoryRelocationNotice: {
                    label: "선물 인벤토리 재배치 알림 비활성화",
                    description: "선물 인벤토리 퀘스트 재배치 알림을 비활성화합니다."
                },
                disableFriendsListActiveNowPromotion: {
                    label: "친구 목록 활성 상태 프로모션 비활성화",
                    description: "친구가 플레이하는 게임에 대한 퀘스트 홍보를 비활성화합니다."
                },
                disableMembersListActivelyPlayingIcons: {
                    label: "회원 목록의 활성 재생 아이콘 비활성화",
                    description: "회원 목록에서 활성 재생 아이콘을 비활성화합니다."
                },
                makeMobileQuestsDesktopCompatible: {
                    label: "모바일 퀘스트를 데스크탑과 호환되게 만들기",
                    description: "모바일 전용 퀘스트를 데스크톱과 호환되도록 만드세요."
                },
                completeVideoQuestsInBackground: {
                    label: "백그라운드에서 비디오 퀘스트를 완료하세요",
                    description: "비디오 지속 시간이 지난 후 백그라운드에서 비디오 퀘스트를 완료하세요."
                },
                completeGameQuestsInBackground: {
                    label: "백그라운드에서 게임 퀘스트 완료",
                    description: "게임 시간이 지나면 백그라운드에서 게임 퀘스트를 완료하세요."
                },
                completeAchievementQuestsInBackground: {
                    label: "백그라운드에서 활동 퀘스트의 작업 완료",
                    description: "백그라운드에서 활동 퀘스트의 성취를 완료하세요."
                },
                notifyOnQuestComplete: {
                    label: "퀘스트 완료 시 알림",
                    description: "퀘스트가 자동으로 완료되면 알림을 표시합니다."
                },
                questButton: {
                    label: "퀘스트 버튼",
                    description: "서버 목록에 퀘스트 버튼을 표시합니다."
                },
                questButtonDisplay: {
                    label: "퀘스트 버튼 표시",
                    description: "서버 목록의 퀘스트 버튼에 사용할 표시 유형입니다."
                },
                questRewardIncludeRewardCode: {
                    label: "보상 코드 포함",
                    description: "퀘스트 수를 표시할 때 보상 코드와 함께 퀘스트를 포함합니다."
                },
                questRewardIncludeNitroCode: {
                    label: "니트로 코드 포함",
                    description: "퀘스트 수를 표시할 때 Nitro 코드와 함께 퀘스트를 포함합니다."
                },
                questRewardIncludeInGame: {
                    label: "게임 내 보상 포함",
                    description: "퀘스트 수를 표시할 때 게임 내 보상이 포함된 퀘스트를 포함합니다."
                },
                questRewardIncludeCollectibles: {
                    label: "수집품 포함",
                    description: "퀘스트 수를 표시할 때 수집품과 함께 퀘스트를 포함합니다."
                },
                questRewardIncludeOrbs: {
                    label: "오브 포함",
                    description: "퀘스트 수를 표시할 때 오브와 함께 퀘스트를 포함합니다."
                },
                questButtonUnclaimed: {
                    label: "퀘스트 버튼 미청구 표시기",
                    description: "서버 목록의 퀘스트 버튼에 있는 미청구 표시에 사용할 표시 유형입니다."
                },
                questButtonBadgeColor: {
                    label: "퀘스트 버튼 배지 색상",
                    description: "서버 목록의 퀘스트 버튼 배지 색상입니다."
                },
                questButtonLeftClickAction: {
                    label: "왼쪽 클릭 동작",
                    description: "서버 목록에서 퀘스트 버튼을 마우스 왼쪽 버튼으로 클릭했을 때 수행할 작업입니다."
                },
                questButtonMiddleClickAction: {
                    label: "중간 클릭 동작",
                    description: "서버 목록에서 퀘스트 버튼을 마우스 가운데 버튼으로 클릭했을 때 수행할 작업입니다."
                },
                questButtonRightClickAction: {
                    label: "마우스 오른쪽 버튼 클릭 동작",
                    description: "서버 목록에서 퀘스트 버튼을 우클릭했을 때 수행할 동작입니다."
                },
                fetchingQuests: {
                    label: "퀘스트 가져오는 중",
                    description: "Discord에서 퀘스트를 가져옵니다."
                },
                fetchingQuestsInterval: {
                    label: "퀘스트 가져오기 간격",
                    description: "Discord에서 퀘스트를 가져오는 간격(초)입니다."
                },
                fetchingQuestsAlert: {
                    label: "퀘스트 알림을 가져오는 중",
                    description: "새로운 퀘스트가 감지되면 재생할 소리입니다."
                },
                fetchingQuestsAlertVolume: {
                    label: "퀘스트 알림 볼륨을 가져오는 중",
                    description: "새로운 퀘스트가 감지될 때 경고음의 볼륨입니다."
                },
                restyleQuests: {
                    label: "퀘스트 리스타일",
                    description: "퀘스트 페이지에서 퀘스트 타일의 모양을 사용자 정의하세요."
                },
                restyleQuestsUnclaimed: {
                    label: "요청되지 않은 퀘스트 리스타일",
                    description: "퀘스트 페이지에서 청구되지 않은 퀘스트 타일의 색상입니다."
                },
                restyleQuestsClaimed: {
                    label: "리스타일 퀘스트 요청됨",
                    description: "퀘스트 페이지에서 요청된 퀘스트 타일의 색상입니다."
                },
                restyleQuestsIgnored: {
                    label: "리스타일 퀘스트가 무시됨",
                    description: "퀘스트 페이지에서 무시된 퀘스트 타일의 색상입니다."
                },
                restyleQuestsExpired: {
                    label: "리스타일 퀘스트 만료됨",
                    description: "퀘스트 페이지에서 만료된 퀘스트 타일의 색상입니다."
                },
                restyleQuestsGradient: {
                    label: "퀘스트 그라데이션 스타일 변경",
                    description: "퀘스트 타일에 사용되는 그라데이션 스타일입니다."
                },
                restyleQuestsPreload: {
                    label: "퀘스트 미리 로드 스타일 변경",
                    description: "퀘스트 타일의 자산을 미리 로드해 보십시오."
                },
                reorderQuests: {
                    label: "퀘스트 재정렬",
                    description: "상태별로 퀘스트를 정렬합니다. 기본 정렬을 위해 비워두세요. 쉼표로 구분된 목록에는 UNCLAIMED, CLAIMED, IGNORED, EXPIRED가 모두 포함되어야 합니다."
                },
                unclaimedSubsort: {
                    label: "청구되지 않은 하위 분류",
                    description: "청구되지 않은 퀘스트에 대한 하위 정렬 방법입니다."
                },
                claimedSubsort: {
                    label: "청구된 하위 분류",
                    description: "청구된 퀘스트에 대한 하위 정렬 방법입니다."
                },
                ignoredSubsort: {
                    label: "무시된 하위 정렬",
                    description: "무시된 퀘스트에 대한 하위 정렬 방법입니다."
                },
                expiredSubsort: {
                    label: "만료된 하위 분류",
                    description: "만료된 퀘스트의 하위 정렬 방법입니다."
                },
                unclaimedUnignoredQuests: {
                    label: "청구되지 않은 무시되지 않은 퀘스트",
                    description: "청구되지 않은 퀘스트와 무시되지 않은 퀘스트 수를 추적합니다."
                },
                onQuestsPage: {
                    label: "퀘스트 페이지에서",
                    description: "사용자가 현재 퀘스트 페이지에 있는지 여부입니다."
                },
                triggerQuestsRerender: {
                    label: "트리거 퀘스트 재렌더링",
                    description: "이 설정을 전환하여 퀘스트 페이지의 다시 렌더링을 트리거합니다."
                },
                ignoredQuestProfile: {
                    label: "무시된 퀘스트 프로필",
                    description: "무시된 퀘스트에 사용되는 프로필입니다."
                },
                rememberQuestPageSort: {
                    label: "퀘스트 페이지 정렬 기억하기",
                    description: "퀘스트 페이지에서 마지막으로 사용된 정렬을 기억하세요."
                },
                rememberQuestPageFilters: {
                    label: "퀘스트 페이지 필터를 기억하세요",
                    description: "퀘스트 페이지에서 마지막으로 사용한 필터를 기억하세요."
                },
                lastQuestPageSort: {
                    label: "마지막 퀘스트 페이지 정렬",
                    description: "퀘스트 페이지에서 마지막으로 사용된 정렬을 기억하세요."
                },
                lastQuestPageFilters: {
                    label: "마지막 퀘스트 페이지 필터",
                    description: "퀘스트 페이지에서 마지막으로 사용한 필터를 기억하세요."
                },
                ignoredQuestIDs: {
                    label: "무시된 퀘스트 ID",
                    description: "무시되는 퀘스트 ID의 배열입니다."
                },
                resumeQuestIDs: {
                    label: "퀘스트 ID 재개",
                    description: "백그라운드에서 자동 완성되는 퀘스트 ID 배열입니다."
                }
            },
            button: {
                questInProgressWithTime: "완료 중({{remainTime}})",
                completing: "완료 중",
                resume: "이력서(~{{remainTime}})",
                complete: "{{remainTime}} 완료",
                completeImmediate: "완료(즉시)",
                completed: "완전한"
            },
            reward: {
                orbs: "{{orbQuantity}} 오브에 대한 {{completingText}}.",
                article: "{{itemName}}에 대한 {{completingText}}.",
                unrecognized: "인식할 수 없는 보상 유형의 경우 {{completingText}}입니다."
            },
            notification: {
                completed: {
                    title: "퀘스트 완료",
                    body: "{{questName}} 퀘스트가 완료되었습니다."
                }
            }
        },
        questionMarkReplacement: {
            name: "QuestionMarkReplacement",
            description: "메시지에 물음표만 포함된 경우 모든 물음표를 선택한 문자열로 바꿉니다.",
            option: {
                replace: {
                    label: "바꾸다",
                    description: "다음으로 교체"
                }
            }
        },
        quickMention: {
            name: "QuickMention",
            description: "메시지 작업 표시줄에 빠른 멘션 버튼을 추가합니다.",
            tooltip: "빠른 언급"
        },
        quickReply: {
            name: "QuickReply",
            description: "키 바인딩을 통해 메시지에 답장(Ctrl+Up/Down) 및 편집(Ctrl+Shift+Up/Down)",
            option: {
                shouldMention: {
                    label: "언급해야 함",
                    description: "기본적으로 핑 응답",
                    noReplyMentionPlugin: "NoReplyMention 플러그인 팔로우(활성화된 경우)",
                    enabled: "활성화됨",
                    disabled: "장애가 있는"
                },
                ignoreBlockedAndIgnored: {
                    label: "차단 및 무시 무시",
                    description: "탐색 시 차단/무시된 사용자의 메시지를 무시합니다."
                }
            }
        },
        quickThemeSwitcher: {
            name: "QuickThemeSwitcher",
            description: "키보드 단축키를 사용하여 테마 간을 빠르게 전환하세요.",
            about: {
                title: "바인딩",
                description: "Ctrl/Cmd+Shift+화살표를 사용하여 탐색합니다(왼쪽/오른쪽: 테마 순환, 위쪽: 활성화, 아래쪽: 비활성화).",
                reload: "테마 목록을 다시 로드하려면 Ctrl/Cmd+Shift+Alt를 누르세요."
            },
            modal: {
                added: "{{count}} 테마{{s}}을(를) 추가했습니다.",
                removed: "{{count}} 테마{{s}}을(를) 제거했습니다.",
                reloaded: "{{themeCount}} 테마를 다시 로드했습니다.",
                addedLocal: "{{count}} 로컬 테마{{s}}을(를) 추가했습니다.",
                removedLocal: "{{count}} 로컬 테마{{s}}을(를) 삭제했습니다.",
            },
            option: {
                includeLocal: {
                    label: "지역 포함",
                    description: "지역 테마 포함"
                },
                includeOnline: {
                    label: "온라인 포함",
                    description: "온라인 테마 포함"
                },
                sortOrder: {
                    label: "정렬 순서",
                    description: "정렬 방법",
                    asc: "AZ",
                    desc: "Z-A",
                    recent: "최근의"
                },
                autoRefresh: {
                    label: "자동 새로고침",
                    description: "변경 사항이 감지되면 테마 목록 자동 새로 고침"
                },
                showNotifications: {
                    label: "알림 표시",
                    description: "테마가 추가/제거되면 알림 표시"
                }
            }
        },
        quoter: {
            name: "Quoter",
            description: "메시지에서 영감을 주는 인용 이미지를 만드는 기능을 추가합니다.",
            context: {
                quote: "인용하다"
            },
            modal: {
                title: "4K로 잡아보세요",
                grayscale: "그레이스케일",
                export: "내보내다",
                send: "보내다",
                saveAsGIF: "GIF로 저장",
                saveDescription: "이미지를 PNG 대신 GIF로 저장/전송합니다.",
                showWatermark: "워터마크 표시",
                watermarkText: "워터마크 텍스트(최대 32자)"
            },
            option: {
                quoteFont: {
                    label: "인용 글꼴",
                    description: "인용 텍스트 글꼴(작성자/사용자 이름은 항상 M PLUS 반올림 1c 사용)",
                    mPlusRounded: "M PLUS 반올림 1c",
                    openSans: "오픈 샌즈",
                    momoSignature: "모모 시그니처",
                    lora: "로라",
                    merriWeather: "메리웨더"
                },
                watermark: {
                    label: "양수표",
                    description: "사용자 정의 워터마크 텍스트(최대 32자)"
                },
                grayscale: {
                    label: "그레이스케일",
                    description: "기본적으로 그레이스케일 활성화"
                },
                showWatermark: {
                    label: "워터마크 표시",
                    description: "기본적으로 워터마크 표시"
                },
                saveAsGif: {
                    label: "GIF로 저장",
                    description: "기본적으로 GIF로 저장"
                }
            }
        },
        randomVoice: {
            name: "RandomVoice",
            description: "무작위 음성 통화에 참여할 수 있도록 음소거 버튼 근처에 버튼을 추가합니다.",
            tooltip: "랜덤 보이스",
            context: {
                label: "음성 상태 수정자",
                amountLabel: "사용자 금액",
                spacesLabel: "남은 공간",
                voiceLabel: "음성 제한",
                selfLabel: "자체 설정",
                select: {
                    servers: "서버 선택",
                    list: "목록 선택",
                    filters: "필터 선택",
                    amount: "사용자 금액",
                    userAmount: "{{amount}} 사용자{{s}}",
                    parameters: "매개변수",
                    moreThan: "이상",
                    lessThan: "미만",
                    equalTo: "같음",
                    spaces: "남은 공간",
                    voice: "음성 제한"
                },
                filter: {
                    muted: "음소거됨",
                    deafened: "귀머거리",
                    camera: "카메라",
                    stream: "개울",
                    includeFilters: "필터 포함",
                    avoidFilters: "필터를 피하세요"
                },
                reset: {
                    list: "목록 재설정"
                },
                voice: {
                    label: "음성 옵션",
                    auto: {
                        mute: "자동 음소거",
                        deafen: "자동 귀머거리",
                        camera: "자동 카메라",
                        stream: "자동 스트림",
                        leaveWhenEmpty: "비었을 때 떠나기",
                        navigate: "자동 탐색",
                        stage: "스테이지를 피하세요",
                        afk: "AFK 방지"
                    }
                },
                invalid: {
                    server: "잘못된 서버"
                }
            },
            option: {
                userAmountOperation: {
                    label: "사용자 금액 운영",
                    description: "사용자 수에 따른 작업 선택"
                },
                userAmount: {
                    label: "사용자 금액",
                    description: "사용자 수 선택"
                },
                spacesLeftOperation: {
                    label: "남은 공간 작업",
                    description: "최대 사용자 수에 대한 작업을 선택하세요."
                },
                spacesLeft: {
                    label: "남은 공간",
                    description: "최대 사용자 수 선택"
                },
                vcLimitOperation: {
                    label: "음성 채널 제한 작업",
                    description: "음성 채널에 대한 작업을 선택합니다."
                },
                vcLimit: {
                    label: "음성 채널 제한",
                    description: "음성 채널 제한 선택"
                },
                servers: {
                    label: "서버",
                    description: "포함된 서버"
                },
                autoNavigate: {
                    label: "자동 탐색",
                    description: "자동으로 음성 채널로 이동합니다."
                },
                autoCamera: {
                    label: "자동 카메라",
                    description: "자동으로 카메라를 켭니다."
                },
                autoStream: {
                    label: "자동 스트림",
                    description: "자동으로 스트림 켜기"
                },
                selfMute: {
                    label: "자동 음소거",
                    description: "음성 채널에 참여할 때 자동으로 마이크를 음소거합니다."
                },
                selfDeafen: {
                    label: "자동 귀머거리",
                    description: "음성 채널에 참여할 때 자동으로 오디오를 차단합니다."
                },
                leaveEmpty: {
                    label: "비었을 때 떠나기",
                    description: "음성채팅이 비어있을 때 무작위로 전화를 찾습니다."
                },
                avoidStages: {
                    label: "스테이지를 피하세요",
                    description: "무대 음성 채널에 참여하는 것을 피합니다."
                },
                avoidAfk: {
                    label: "AFK 방지",
                    description: "AFK 음성 채널 참여를 피합니다."
                },
                video: {
                    label: "동영상",
                    description: "비디오를 켜둔 사용자 검색"
                },
                stream: {
                    label: "개울",
                    description: "스트리밍 중인 사용자 검색"
                },
                mute: {
                    label: "무음",
                    description: "음소거된 사용자를 검색합니다."
                },
                deafen: {
                    label: "귀가 들리지 않게 하다",
                    description: "청각 장애가 있는 사용자 검색"
                },
                includeStates: {
                    label: "필터 포함",
                    description: "상태를 포함하는 옵션"
                },
                avoidStates: {
                    label: "필터를 피하세요",
                    description: "상태를 방지하는 옵션"
                }
            },
            alert: {
                failed: "음성 채널을 찾지 못했습니다!"
            }
        },
        reactErrorDecoder: {
            name: "ReactErrorDecoder",
            description: "React 오류 코드를 사람이 읽을 수 있는 메시지로 디코딩합니다."
        },
        readAllNotificationsButton: {
            name: "ReadAllNotificationsButton",
            description: "버튼 클릭 한 번으로 모든 서버 알림을 읽어보세요!",
            button: "모두 읽기"
        },
        recentDMSwitcher: {
            name: "RecentDMSwitcher",
            description: "가장 최근에 사용한 DM 사이에서 Ctrl+Tab(Ctrl+Shift+Tab 역방향)",
            option: {
                visualStyle: {
                    label: "비주얼 스타일",
                    description: "사이클링 중 시각적 표시기 스타일",
                    overlay: "오버레이(Alt+Tab 스타일)",
                    toast: "토스트(상태 메시지)",
                    off: "끄다"
                },
                overlayMode: {
                    label: "오버레이 모드",
                    description: "오버레이 콘텐츠",
                    row: "최근 행",
                    current: "현재만",
                },
                amountOfUsers: {
                    label: "사용자 수",
                    description: "오버레이에 표시할 사용자 수"
                },
                overlayRowLength: {
                    label: "오버레이 행 길이",
                    description: "연속으로 표시할 최근 DM 수"
                },
                overlayShowAvatars: {
                    label: "오버레이 쇼 아바타",
                    description: "오버레이에 사용자 아바타 표시"
                },
                toastDurationMs: {
                    label: "토스트 기간(ms)",
                    description: "상태 메시지 지속 시간"
                },
                clearRdms: {
                    label: "RDMS 목록 지우기",
                    description: "테스트 유틸리티: RDM 목록 지우기",
                    toast: "RMDS 기록 삭제",
                    button: "RDM 기록 지우기"
                }
            },
            modal: {
                unknown: "알려지지 않은",
                dm: "DM",
                group: "그룹DM",
                channel: "채널",
                switchingTo: "다음으로 전환: {{name}}"
            }
        },
        relationshipNotifier: {
            name: "RelationshipNotifier",
            description: "친구, 그룹 채팅 또는 서버가 귀하를 제거하면 알려줍니다.",
            option: {
                notices: {
                    label: "공지사항",
                    description: "또한 제거 시 화면 상단에 알림을 표시합니다(알림을 놓치고 싶지 않은 경우 이 기능을 사용하세요)."
                },
                offlineRemovals: {
                    label: "오프라인 제거",
                    description: "오프라인 상태에서 제거된 경우 Discord를 시작할 때 알려드립니다."
                },
                friends: {
                    label: "친구",
                    description: "친구가 나를 삭제하면 알림"
                },
                friendRequestCancels: {
                    label: "친구 요청이 취소되었습니다.",
                    description: "친구 요청이 취소되면 알림"
                },
                servers: {
                    label: "서버",
                    description: "서버에서 제거되면 알림"
                },
                groups: {
                    label: "여러 떼",
                    description: "그룹 채팅에서 제거되면 알림"
                }
            },
            notification: {
                removedFriend: "{{user}}님이 귀하를 친구에서 삭제했습니다.",
                cancelledFriendRequest: "{{user}}님의 친구 요청이 삭제되었습니다.",
                removedFromServer: "귀하는 {{server}} 서버에서 제거되었습니다.",
                removedFromGroup: "{{group}} 그룹에서 삭제되었습니다.",
                noLongerGroup: "귀하는 더 이상 {{group}} 그룹에 속하지 않습니다.",
                noLongerServer: "귀하는 더 이상 {{server}} 서버에 없습니다.",
                noLongerFriend: "귀하는 더 이상 {{user}}님과 친구가 아닙니다.",
                friendRequestRevoked: "{{user}}님의 친구 요청이 취소되었습니다.",
                ok: "좋아요"
            }
        },
        remix: {
            name: "Remix",
            description: "파일 업로드 버튼의 우클릭 메뉴에 '리믹스' 옵션을 추가합니다. 이 옵션을 사용하면 간단한 이미지 편집기에서 이미지가 열리고 편집된 이미지를 채팅으로 직접 보낼 수 있습니다.",
            label: "리믹스",
            button: {
                send: "보내다",
                close: "닫다",
                brush: "브러시",
                erase: "지우다",
                crop: "수확고",
                shape: "모양",
                reset: "다시 놓기",
                clear: "분명한"
            },
            editor: {
                choose: "이미지를 선택하세요",
                browse: "먹다",
                rectangle: "구형",
                ellipse: "타원",
                line: "선",
                arrow: "화살",
                fill: "채우다"
            }
        },
        repeatMessages: {
            name: "RepeatMessages",
            description: "메시지를 빠르게 반복할 수 있습니다. Shift 키를 누른 상태에서 반복 옵션을 클릭하면 메시지에 응답합니다.",
            button: "반복(클릭) / 반복 및 답장(Shift + 클릭)",
            context: {
                repeat: "반복하다",
                repeatAndReply: "반복하고 답장하기"
            }
        },
        replaceGoogleSearch: {
            name: "ReplaceGoogleSearch",
            description: "Google 검색을 다른 엔진으로 대체합니다.",
            option: {
                customEngineName: {
                    label: "커스텀 엔진 이름",
                    description: "맞춤검색 엔진의 이름"
                },
                customEngineURL: {
                    label: "커스텀 엔진 URL",
                    description: "엔진의 URL"
                },
                replacementEngine: {
                    label: "교체 엔진",
                    description: "메뉴를 추가하는 대신 특정 검색엔진으로 대체",
                    off: "끄다",
                    custom: "커스텀 엔진",
                }
            },
            context: {
                label: "텍스트 검색",
                searchWith: "{{name}}로 검색"
            }
        },
        replyPingControl: {
            name: "ReplyPingControl",
            description: "화이트리스트 기능을 사용하여 메시지 답장에 대해 항상 핑을 받을지 여부를 제어합니다.",
            option: {
                alwaysPingOnReply: {
                    label: "응답 시 항상 핑(Ping)",
                    description: "누군가가 메시지에 답장하면 항상 핑이 울립니다."
                },
                replyPingWhitelist: {
                    label: "응답 핑 화이트리스트",
                    description: "항상 응답 핑을 수신할 사용자 ID의 쉼표로 구분된 목록입니다."
                }
            }
        },
        replyTimestamp: {
            name: "ReplyTimestamp",
            description: "응답된 메시지 미리보기에 타임스탬프를 표시합니다."
        },
        revealAllSpoilers: {
            name: "RevealAllSpoilers",
            description: "스포일러를 Ctrl-클릭하거나 채팅에서 Ctrl+Shift-클릭하여 메시지의 모든 스포일러를 공개하세요."
        },
        reverseImageSearch: {
            name: "ReverseImageSearch",
            description: "이미지 컨텍스트 메뉴에 ImageSearch를 추가합니다.",
            context: {
                label: "이미지 검색",
                all: "모두 검색"
            }
        },
        reviewDB: {
            name: "ReviewDB",
            description: "다른 사용자 검토(프로필에 새 섹션 추가)",
            notification: {
                newReview: "프로필에 새로운 리뷰가 있습니다!",
                auth: {
                    error: "승인하는 동안 오류가 발생했습니다.",
                    successfully: "성공적으로 로그인되었습니다!",
                    failed: "승인하지 못했습니다.",
                    review: "리뷰를 추가하려면 승인해 주세요.",
                    opening: "승인 창을 여는 중...",
                    need: "사용자를 검토하려면 승인이 필요합니다!"
                },
                error: {
                    fast: "요청을 너무 빨리 보내고 있습니다. 몇 초간 기다렸다가 다시 시도해 보세요.",
                    fetching: "리뷰를 가져오는 중에 오류가 발생했습니다.",
                    action: {
                        failed: "{{action}} 사용자 실패",
                        success: "성공적으로 {{action}}된 사용자"
                    }
                }
            },
            modal: {
                delete: {
                    title: "확실합니까?",
                    description: "이 리뷰를 정말로 삭제하시겠습니까?",
                    confirm: "삭제",
                    cancel: "괜찮아요",
                    error: "리뷰를 삭제하려면 로그인이 필요합니다.",
                },
                report: {
                    title: "확실합니까?",
                    description: "정말로 이 리뷰를 신고하시겠습니까?",
                    confirm: "보고서",
                    cancel: "괜찮아요",
                    error: "리뷰를 보고하려면 로그인해야 합니다.",
                },
                block: {
                    title: "확실합니까?",
                    description: "정말로 이 사용자를 차단하시겠습니까? 더 이상 리뷰를 볼 수 없습니다.",
                    confirm: "차단하다",
                    cancel: "괜찮아요",
                    error: "사용자를 차단하려면 로그인이 필요합니다.",
                },
                blocked: {
                    title: "차단된 사용자",
                    auth: "ReviewDB에 로그인하지 않았습니다!",
                    noBlocked: "차단된 사용자는 없습니다.",
                    fetch: "차단된 사용자를 가져오는 중에 오류가 발생했습니다."
                },
                reviews: {
                    title: "님의 리뷰",
                    noUser: "아직 이 사용자를 리뷰한 사람이 없는 것 같습니다. 당신은 첫 번째가 될 수 있습니다!",
                    noServer: "아직 이 서버를 검토한 사람이 없는 것 같습니다. 당신은 첫 번째가 될 수 있습니다!"
                }
            },
            button: {
                appeal: "항소",
                ok: "좋아요",
                more: "더 읽어보세요",
                reply: "@{{user}}에 답장하다",
                update: "@{{user}}에 대한 리뷰 업데이트",
                review: "@{{user}} 검토"
            },
            context: {
                view: "리뷰 보기",
                blocked: "이 사용자를 차단했습니다.",
                delete: "리뷰 삭제",
                report: "보고서 검토",
                block: "사용자 차단",
                unblock: "사용자 차단 해제",
                reply: "답글 검토"
            },
            option: {
                authorize: {
                    label: "승인하다",
                    button: "ReviewDB로 승인"
                },
                notifyReviews: {
                    label: "리뷰 알림",
                    description: "시작 시 새 리뷰 알림"
                },
                showWarning: {
                    label: "경고 표시",
                    description: "리뷰 목록 상단에 예의를 지키라는 경고 표시"
                },
                hideTimestamps: {
                    label: "타임스탬프 숨기기",
                    description: "리뷰의 타임스탬프 숨기기"
                },
                hideBlockedUsers: {
                    label: "차단된 사용자 숨기기",
                    description: "차단된 사용자의 리뷰 숨기기"
                },
                buttons: {
                    label: "버튼",
                    manageBlocked: "차단된 사용자 관리",
                    support: "ReviewDB 개발 지원",
                    website: "리뷰DB 웹사이트",
                    server: "ReviewDB 지원 서버"
                }
            },
            profile: {
                optedOut: "사용자가 거부했습니다",
                noReviews: "아직 리뷰가 없습니다"
            }
        },
        richMagnetLinks: {
            name: "RichMagnetLinks",
            description: "메시지 링크와 같은 마그넷 링크를 렌더링합니다.",
            unknown: "알 수 없는 파일 이름"
        },
        roleColorEverywhere: {
            name: "RoleColorEverywhere",
            description: "가능한 모든 위치에 최상위 역할 색상을 추가합니다.",
            option: {
                chatMentions: {
                    label: "채팅 멘션",
                    description: "채팅 멘션에 역할 색상 표시(메시지 상자 포함)"
                },
                memberList: {
                    label: "회원 목록",
                    description: "구성원 목록 역할 헤더에 역할 색상 표시"
                },
                voiceUsers: {
                    label: "음성 사용자",
                    description: "음성채팅 사용자 목록에 역할 색상 표시"
                },
                reactorsList: {
                    label: "원자로 목록",
                    description: "반응기 목록에 역할 색상 표시"
                },
                pollResults: {
                    label: "여론조사 결과",
                    description: "설문조사 결과에 역할 색상 표시"
                },
                colorChatMessages: {
                    label: "컬러 채팅 메시지",
                    description: "작성자의 역할 색상에 따라 채팅 메시지 색상을 지정합니다."
                },
                messageSaturation: {
                    label: "메시지 포화도",
                    description: "메시지 색상의 강도"
                }
            }
        },
        rpcEditor: {
            name: "RPCEditor",
            description: "리치 프레즌스의 유형 및 콘텐츠 편집",
            option: {
                replacedAppIds: {
                    label: "대체된 앱 ID",
                }
            },
            modal: {
                tutorial: {
                    title: "현재 실행 중인 활동의 ID",
                    noRunning: "달리기 활동 없음",
                    available: "사용 가능한 변수",
                    variableText: "모든 필드(스트림 URL 제외)에서 원래 콘텐츠로 자동 대체되는 변수를 넣을 수 있습니다.",
                    more: "자세한 내용",
                    details: {
                        leave: "그대로 두려면 필드를 비워 두세요.",
                        set: "현재 상태에서 필드를 숨기려면 필드를 'null'로 설정하세요.",
                        reload: "변경 사항을 적용하려면 Discord를 다시 로드해야 할 수도 있습니다."
                    }
                },
                settings: {
                    applyEdits: "앱에 수정사항 적용",
                    addNewApp: "새 애플리케이션 추가",
                    appId: "애플리케이션 ID",
                    invalidAppId: "잘못된 애플리케이션 ID",
                    newActivityType: "새로운 활동 유형",
                    activityTypes: {
                        playing: "재생",
                        watching: "보고 있다",
                        listening: "청취",
                        competing: "경쟁 중",
                        streaming: "스트리밍"
                    },
                    streamUrl: "스트림 URL(YouTube 또는 Twitch여야 함)",
                    invalidStreamUrl: "잘못된 스트림 URL",
                    newName: "새 이름",
                    newDetails: "새로운 세부정보",
                    newState: "새로운 상태",
                    largeImage: "큰 이미지",
                    smallImage: "작은 이미지",
                    text: "텍스트",
                    url: "URL",
                    firstLine: "(첫 번째 줄)",
                    secondLine: "(두 번째 줄)",
                    thirdLine: "(세 번째 줄)",
                    alsoThirdLine: "(세 번째 줄도 마찬가지)",
                    hideAssets: "자산 숨기기(대형 및 소형 이미지)",
                    hideTimestamps: "타임스탬프 숨기기"
                }
            },
        },
        rpcStats: {
            name: "RPCStats",
            description: "RPC로서의 활동에 대한 통계를 표시합니다.",
            option: {
                assetURL: {
                    label: "자산 URL",
                    description: "RPC에 사용할 이미지입니다. 비워두면 프로필 사진이 사용됩니다."
                },
                rpcTitle: {
                    label: "RPC 제목",
                    description: "RPC 제목"
                },
                statDisplay: {
                    label: "통계 표시",
                    description: "RPC는 무엇을 표시해야 합니까? (한 줄만 가질 수 있습니다. 확실합니다)",
                    today: "오늘 보낸 메시지의 양",
                    alltime: "항상 전송된 메시지의 양",
                    listened: "이번 주 가장 많이 들은 앨범"
                },
                lastFMApiKey: {
                    label: "Last.fm API 키",
                    description: "Last.fm API 키"
                },
                lastFMUsername: {
                    label: "Last.fm 사용자 이름",
                    description: "Last.fm 사용자 이름"
                },
                albumCoverImage: {
                    label: "앨범 표지 이미지",
                    description: "앨범 표지 이미지를 RPC 이미지로 사용해야 합니까? (Last.fm 디스플레이를 선택한 경우)"
                },
                lastFMStatFormat: {
                    label: "Last.fm 통계 형식",
                    description: "Last.fm 통계의 형식은 어떻게 지정되어야 합니까? $album은 앨범 이름으로 대체되고, $artist는 아티스트 이름으로 대체됩니다."
                }
            },
            noInfo: "지금은 정보가 없습니다 :(",
            messagesToday: "오늘 보낸 메시지: {{count}}",
            messagesAllTime: "항상 보낸 메시지: {{count}}"
        },
        saveFavoriteGIFs: {
            name: "SaveFavouritedGIFs",
            description: "즐겨찾는 GIF URL 내보내기",
            toolbox: "즐겨찾는 GIF 저장",
            title: "즐겨찾는 GIF 저장",
            command: {
                savegifs: {
                    description: "즐겨찾는 모든 GIF URL을 텍스트 파일에 저장"
                },
                saveworkinggifs: {
                    description: "즐겨찾는 GIF를 모두 테스트하고 아직 작동 중인 GIF만 저장하세요."
                }
            },
            option: {
                showToolboxButton: {
                    label: "도구 상자 버튼 표시",
                    description: "Plexcord 도구 상자에 '즐겨찾는 GIF 저장' 버튼 표시(다시 로드 필요)"
                }
            },
            toast: {
                save: "{{filename}}(으)로 GIF를 성공적으로 저장했습니다.",
                failed: "GIF를 저장하지 못했습니다.",
                no: "즐겨찾는 GIF를 찾을 수 없습니다!",
                testing: "{{count}} GIF를 테스트하는 데 다소 시간이 걸릴 수 있습니다...",
                noneWorking: "저장된 GIF가 작동하지 않는 것 같습니다.",
                saved: "필터링된 {{broken}} GIF가 깨졌을 수 있습니다. {{saved}} 작업 GIF를 저장했습니다."
            }
        },
        scheduledMessages: {
            name: "ScheduledMessages",
            description: "특정 시간이나 지연 후에 메시지가 전송되도록 예약합니다.",
            toolbox: {
                toggle: "예약된 메시지 보기"
            },
            option: {
                maxMessagesPerMinute: {
                    label: "분당 최대 메시지 수",
                    description: "같은 분에 실행될 수 있는 채널당 최대 예약 메시지입니다."
                },
                checkIntervalSeconds: {
                    label: "확인 간격(초)",
                    description: "플러그인이 보낼 메시지를 확인하는 빈도입니다."
                },
                showNotifications: {
                    label: "알림 표시",
                    description: "메시지가 전송되면 토스트 알림을 표시합니다."
                },
                showPhantomMessages: {
                    label: "팬텀 메시지 표시",
                    description: "채팅에서 예약된 메시지를 팬텀 메시지로 표시합니다."
                }
            },
            channelType: {
                unknown: "알려지지 않은",
                dm: "DM",
                groupDm: "그룹DM",
                channel: "채널"
            },
            toast: {
                messageSent: "{{channel}}(으)로 예약된 메시지가 전송되었습니다.",
                messageFailed: "예약된 메시지를 보내지 못했습니다.",
                maxMessagesReached: "분당 채널당 최대 {{max}} 메시지에 도달했습니다.",
                messageScheduled: "메시지 예약됨!",
                messageRemoved: "예약된 메시지가 삭제되었습니다.",
                allCleared: "예약된 메시지가 모두 삭제되었습니다."
            },
            button: {
                tooltipOn: "일정 모드 켜짐(비활성화하려면 클릭, 목록을 보려면 마우스 오른쪽 버튼 클릭)",
                tooltipOff: "일정 모드 꺼짐(활성화하려면 클릭, 목록을 보려면 마우스 오른쪽 버튼 클릭)"
            },
            accessory: {
                scheduledFor: "{date}{timeLeft}에 예정됨",
                remaining: {
                    days: "{{days}}d {{hours}}h 남음",
                    hours: "{{hours}}h {{minutes}}m 남음",
                    minutes: "{{minutes}}m 남음"
                }
            },
            scheduleModal: {
                title: "메시지 예약",
                schedulingFor: "일정: {{channel}}",
                scheduleType: "일정 유형",
                delay: "지연",
                specificTime: "특정 시간",
                delayMinutes: "지연(분)",
                dateTime: "날짜 및 시간",
                error: {
                    invalidDelay: "유효한 지연 시간을 입력하십시오(최소 1분).",
                    invalidDateTime: "미래의 날짜와 시간을 선택하세요."
                },
                schedule: "일정",
                cancel: "취소"
            },
            viewModal: {
                title: "예약된 메시지",
                clearAll: "모두 지우기",
                noMessages: "예약된 메시지가 없습니다.",
                delete: "삭제",
                close: "닫다"
            }
        },
        searchFix: {
            name: "SearchFix",
            description: "짜증나는 '돋보기를 떨어뜨렸어요!' 문제를 해결했습니다. 오류.",
            notPerfect: "이 수정 사항은 완벽하지 않으므로 문제를 해결하려면 검색 창을 다시 로드해야 할 수도 있습니다.",
            paragraph1: "Discord에서는 최대 오프셋 5000만 허용합니다(이것이 돋보기 오류의 원인입니다).",
            paragraph2: "즉, 과거의 메시지는 정확히 5,000개, 미래의 메시지는 5,000개만 볼 수 있습니다(오래된 항목을 기준으로 정렬할 경우).",
            paragraph3: "이 플러그인은 Discord의 제한 사항을 해결하기 위해 반대 정렬 방법으로 이동합니다.",
            paragraph4: "하지만 검색 결과의 양이 많아 두 가지 정렬 방법으로 모두 볼 수 없는 메시지를 보려고 한다면,",
            paragraph5: "플러그인은 단순히 오프셋 0(정렬 방법에 따라 최신 메시지 또는 가장 오래된 메시지)을 표시합니다."
        },
        secretRingToneEnabler: {
            name: "SecretRingToneEnabler",
            description: "항상 Discord 벨소리의 비밀 버전을 재생하세요(특별 벨소리 이벤트 기간 제외)",
            option: {
                onlySnow: {
                    label: "눈소리 이벤트 기간에만",
                    description: "Snow Halation 테마만 재생하세요"
                }
            }
        },
        summaries: {
            name: "Summaries",
            description: "모든 서버에서 Discord의 실험적인 요약 기능을 활성화하여 AI가 생성한 대화 요약을 표시합니다.",
            option: {
                summaryExpiryThresholdDays: {
                    label: "요약 만료 임계값(일)",
                    description: "요약이 제거되기 전까지의 시간(일)입니다. 채널당 최대 50개의 요약만 보관됩니다."
                }
            }
        },
        selfForward: {
            name: "SelfForward",
            description: "현재 채널을 앞으로 목록 팝업에 추가합니다."
        },
        sendTimestamps: {
            name: "SendTimestamps",
            description: "채팅 상자 버튼 및 텍스트 바로가기를 통해 타임스탬프를 쉽게 보낼 수 있습니다. 자세한 설명을 읽어보세요!",
            sample: {
                paragraph1: "시간 전용 타임스탬프를 빠르게 보내려면 'HH:MM'(백틱 포함!) 형식의 타임스탬프를 메시지에 포함하세요.",
                paragraph2: "아래 예시를 참조하세요.\n더 구체적인 내용이 필요한 경우 채팅 표시줄의 날짜 버튼을 사용하세요!",
                examples: "예:"
            },
            modal: {
                title: "타임스탬프 선택기",
                light: "빛",
                dark: "어두운",
                format: "타임스탬프 형식",
                preview: "시사",
                insert: "끼워 넣다",
                insertTimestamp: "타임스탬프 삽입"
            },
            option: {
                replaceMessageContents: {
                    label: "메시지 내용 바꾸기",
                    description: "메시지 내용의 타임스탬프 바꾸기"
                }
            }
        },
        serverInfo: {
            name: "ServerInfo",
            description: "서버에 대한 정보를 볼 수 있습니다.",
            context: {
                serverInfo: "서버 정보"
            },
            option: {
                sorting: {
                    label: "정렬",
                    description: "사용자 이름 또는 해당하는 경우 표시 이름",
                    username: "사용자 이름",
                    displayname: "표시 이름",
                    none: "정렬하지 않음"
                }
            },
            modal: {
                tab: {
                    serverInfo: "서버 정보",
                    friends: "친구",
                    mutualUsers: "상호 사용자",
                    blockedUsers: "차단된 사용자",
                    ignoredUsers: "무시된 사용자"
                },
                owner: "서버 소유자",
                loading: "로드 중...",
                createdAt: "생성 날짜",
                joinedAt: "가입 날짜",
                vanityLink: "배니티 링크",
                preferredLocale: "선호하는 로케일",
                verification: {
                    level: "검증수준",
                    none: "없음",
                    low: "낮은",
                    medium: "중간",
                    high: "높은",
                    highest: "제일 높은"
                },
                serverBoosts: "서버 부스트",
                channels: "채널",
                roles: "역할"
            }
        },
        serverListIndicators: {
            name: "ServerListIndicators",
            description: "서버 목록에 온라인 친구 수 또는 서버 수 추가",
            friends: "친구",
            servers: "서버",
            option: {
                mode: {
                    label: "방법",
                    description: "서버 목록에 표시되는 모드",
                    friend: "온라인 친구 수만 가능",
                    server: "서버 수만",
                    both: "서버 및 온라인 친구 수 모두"
                },
                useCompact: {
                    label: "컴팩트 모드 사용",
                    description: "표시기가 텍스트로만 나타나도록 합니다."
                }
            }
        },
        serverSearch: {
            name: "ServerSearch",
            description: "빠른 검색 버튼으로 서버를 더 잘 탐색하세요",
            tooltip: "찾다"
        },
        shikiCodeblocks: {
            name: "ShikiCodeblocks",
            description: "Shiki가 제공하는 VS Code 스타일 코드 블록을 Discord로 가져옵니다.",
            option: {
                theme: {
                    label: "주제",
                    description: "기본 테마"
                },
                customTheme: {
                    label: "맞춤 테마",
                    description: "사용자 정의 VS Code 테마에 대한 링크",
                    mustURL: "유효한 URL이어야 합니다.",
                    mustJSON: "JSON 파일이어야 합니다."
                },
                tryHljs: {
                    label: "Hljs로 대체",
                    description: "더 가벼운 기본 Discord 하이라이터와 테마를 사용하세요.",
                    never: "절대",
                    secondary: "하이라이트.js 대신 Shiki를 선호하세요",
                    primary: "Shiki 대신 하이라이트.js를 선호하세요",
                    always: "언제나"
                },
                useDevIcon: {
                    label: "언어 아이콘에 Devicon 사용",
                    description: "코드블록에 언어 아이콘을 표시하는 방법",
                    disabled: "장애가 있는",
                    colorless: "무색",
                    colored: "컬러"
                },
                bgOpacity: {
                    label: "배경 불투명도",
                    description: "배경 불투명도"
                }
            },
            button: {
                copy: "복사",
                copied: "복사되었습니다!"
            }
        },
        showAllMessageButtons: {
            name: "ShowAllMessageButtons",
            description: "Shift 키를 누르고 있는지 여부에 관계없이 항상 모든 메시지 버튼을 표시합니다.",
            option: {
                noShiftDelete: {
                    label: "Shift 삭제 없음",
                    description: "메시지 삭제 시 교대 근무를 보류해야 하는 요구 사항을 제거합니다."
                },
                noShiftPin: {
                    label: "시프트 핀 없음",
                    description: "메시지 고정을 위해 교대 근무를 보류해야 하는 요구 사항을 제거합니다."
                }
            }
        },
        showBadgesInChat: {
            name: "ShowBadgesInChat",
            description: "채팅에서 이름 옆에 메시지 작성자의 배지를 표시합니다.",
            option: {
                showPlexcordDonor: {
                    label: "Plexcord 기증자 배지 표시",
                    description: "채팅에 Plexcord 기부자 배지를 표시하려면 활성화하세요."
                },
                plexcordDonorPosition: {
                    label: "Plexcord 기부자 배지 위치",
                    description: "Plexcord 기증자 배지의 위치입니다."
                },
                showPlexcordContributor: {
                    label: "Plexcord 기여자 배지 표시",
                    description: "채팅에 Plexcord 기여자 배지를 표시하려면 활성화하세요."
                },
                plexcordContributorPosition: {
                    label: "Plexcord 기여자 배지 위치",
                    description: "Plexcord 기여자 배지의 위치입니다."
                },
                showDiscordProfile: {
                    label: "Discord 프로필 배지 표시",
                    description: "채팅에서 Discord 프로필 배지를 표시하려면 활성화하세요."
                },
                discordProfilePosition: {
                    label: "Discord 프로필 배지 위치",
                    description: "Discord 프로필 배지의 위치입니다."
                },
                showDiscordNitro: {
                    label: "Discord Nitro 배지 표시",
                    description: "채팅에 Discord Nitro 배지를 표시하려면 활성화하세요."
                },
                discordNitroPosition: {
                    label: "Discord Nitro 배지 위치",
                    description: "Discord Nitro 배지의 위치입니다."
                },
                badgeSettings: {
                    label: "배지 설정",
                    description: "채팅에 표시되는 다른 배지의 위치를 ​​구성합니다.",
                    modal: "배지를 드래그하여 재정렬하세요. 클릭하여 특정 배지 유형을 활성화/비활성화할 수 있습니다."
                }
            },
            badge: {
                plexcord: "Plexcord 기증자 배지",
                contributor: "Plexcord 기여자 배지",
                discordProfile: "Discord 프로필 배지(HypeSquad, Discord Staff, Active Developer 등)",
                nitro: "니트로 배지",
                staff: "디스코드 스태프",
                partner: "파트너 서버 소유자",
                events: "HypeSquad 이벤트",
                bravery: "HypeSquad 용기",
                brilliance: "HypeSquad 브릴리언스",
                balance: "HypeSquad 잔액",
                bugHunter: "디스코드 버그헌터",
                earlyVerifiedBotDeveloper: "초기 검증된 봇 개발자",
                earlySupporter: "얼리서포터",
                moderatorProgram: "중재자 프로그램 졸업생"
            },
            modal: {
                plexcordContributor: "Plexcord 기여자",
                discordNitro: "디스코드 니트로",
                basic: "기초적인",
                classic: "권위 있는"
            }
        },
        showConnections: {
            name: "ShowConnections",
            description: "사용자 팝아웃에 연결된 계정 표시",
            option: {
                iconSize: {
                    label: "아이콘 크기",
                    description: "아이콘 크기(px)"
                },
                iconSpacing: {
                    label: "아이콘 간격",
                    description: "아이콘 여백",
                    compact: "콤팩트",
                    cozy: "아늑한",
                    roomy: "넓은"
                }
            }
        },
        showHiddenChannels: {
            name: "ShowHiddenChannels",
            description: "볼 수 있는 액세스 권한이 없는 채널을 표시합니다.",
            tooltip: "숨겨진 채널",
            option: {
                channelStyle: {
                    label: "채널 스타일",
                    description: "숨겨진 채널을 표시하는 데 사용되는 스타일입니다.",
                    classic: "권위 있는",
                    muted: "음소거됨",
                    showUnreads: "읽지 않은 항목 표시",
                    mutedWithUnreads: "음소거 및 읽지 않은 항목 표시"
                },
                showMode: {
                    label: "쇼 모드",
                    description: "숨겨진 채널을 표시하는 데 사용되는 모드입니다.",
                    lock: "대신 잠금 아이콘이 있는 일반 스타일",
                    hidden: "오른쪽에 숨겨진 눈 아이콘이 있는 음소거 스타일",
                    lockIconRight: "오른쪽에 자물쇠 아이콘"
                },
                defaultAllowedUsersAndRolesDropdownState: {
                    label: "기본 허용 사용자 및 역할 드롭다운 상태",
                    description: "숨겨진 채널의 허용된 사용자 및 역할 드롭다운을 기본적으로 열어야 하는지 여부"
                }
            },
            channelType: {
                text: "텍스트",
                announcement: "발표",
                forum: "법정",
                voice: "목소리",
                stage: "단계"
            },
            sortOrder: {
                latestActivity: "최신 활동",
                creationDate: "생성 날짜"
            },
            forumLayout: {
                default: "설정되지 않음",
                list: "목록 보기",
                grid: "갤러리 보기"
            },
            videoQuality: {
                auto: "오토매틱",
                full: "720p"
            },
            modal: {
                hidden: "숨겨진",
                locked: "잠긴",
                threads: "스레드",
                posts: "게시물",
                messages: "메시지",
                post: "우편",
                message: "메시지",
                unknown: "알려지지 않은",
                permissionDetails: "권한 세부정보",
                thisIsA: "{{status}} {{channelType}} 채널입니다",
                canNotSee: "이 채널의 {{type}}을(를) 볼 수 없습니다.",
                guidelines: "그러나 다음 지침을 볼 수 있습니다.",
                lastCreated: "마지막으로 생성된 {{type}}:",
                lastPin: "마지막 메시지 핀:",
                threadSlowmode: "기본 스레드 느린 모드:",
                slowmode: "저속 모드:",
                bitrate: "비트 전송률:",
                region: "지역:",
                automatic: "오토매틱",
                videoQuality: "비디오 품질 모드:",
                inactiveArchiveDuration: "{{type}}을 보관하기 전 기본 비활성 기간",
                defaultLayout: "기본 레이아웃:",
                defaultSort: "기본 정렬 순서:",
                defaultReaction: "기본 반응 이모티콘:",
                requireTag: "이 포럼의 게시물에는 태그 설정이 필요합니다.",
                availableTags: "사용 가능한 태그:",
                allowedUsersAndRoles: "허용된 사용자 및 역할:",
                hideAllowedUsersAndRoles: "허용된 사용자 및 역할 숨기기",
                viewAllowedUsersAndRoles: "허용된 사용자 및 역할 보기"
            }
        },
        showHiddenThings: {
            name: "ShowHiddenThings",
            description: "권한에 관계없이 다양한 숨겨진 및 중재자 전용 항목을 표시합니다.",
            option: {
                showTimeouts: {
                    label: "채팅에 회원 시간 초과 표시",
                    description: "채팅에 회원 시간 초과 아이콘을 표시합니다."
                },
                showInvitesPaused: {
                    label: "일시중지된 초대 표시",
                    description: "서버 목록에 초대 일시 중지 툴팁을 표시합니다."
                },
                showModView: {
                    label: "모드 보기 표시",
                    description: "모든 서버에 회원 모드 보기 컨텍스트 메뉴 항목을 표시합니다."
                }
            }
        },
        showMessageEmbeds: {
            name: "ShowMessageEmbeds",
            description: "포함되지 않은 링크에 대한 포함을 표시하는 상황에 맞는 메뉴 옵션을 추가합니다.",
            context: {
                embed: {
                    show: "삽입 표시",
                    hide: "삽입 제거"
                }
            },
            error: {
                failed: "삽입하지 못했습니다.",
                noEmbed: "삽입된 내용이 없습니다."
            }
        },
        showMeYourName: {
            name: "ShowMeYourName",
            description: "사용자 정의 닉네임, 친구 닉네임, 서버 닉네임, 표시 이름 및 사용자 이름의 순열을 채팅에 표시합니다.",
            option: {
                messages: {
                    label: "메시지",
                    description: "메시지에 사용자 정의 이름 형식을 표시합니다."
                },
                replies: {
                    label: "답글",
                    description: "답장에 사용자 정의 이름 형식을 표시합니다."
                },
                mentions: {
                    label: "언급",
                    description: "멘션에 사용자 정의 이름 형식을 표시합니다."
                },
                typingIndicator: {
                    label: "입력 표시기",
                    description: "입력 표시기에 사용자 정의 이름 형식으로 나열된 첫 번째 사용 가능한 이름을 표시합니다."
                },
                memberList: {
                    label: "회원 목록",
                    description: "구성원 목록에서 사용자 정의 이름 형식으로 나열된 첫 번째 사용 가능한 이름을 표시합니다."
                },
                profilePopout: {
                    label: "프로필 팝아웃",
                    description: "프로필 팝아웃에 사용자 정의 이름 형식으로 나열된 첫 번째 사용 가능한 이름을 표시합니다."
                },
                voiceChannels: {
                    label: "음성 채널",
                    description: "음성 채널에서 사용자 정의 이름 형식으로 나열된 첫 번째 사용 가능한 이름을 표시합니다."
                },
                reactions: {
                    label: "반응",
                    description: "반응 도구 설명에 사용자 정의 이름 형식으로 나열된 첫 번째 사용 가능한 이름을 표시하고 반응 팝아웃에 전체 이름을 표시합니다."
                },
                discriminators: {
                    label: "판별자",
                    description: "봇의 사용자 이름에 판별자를 추가합니다. 판별자는 사용자에 대해 더 이상 사용되지 않지만 봇에는 여전히 사용됩니다. 기본적으로 봇의 사용자 이름은 사용자의 전역 이름과 동일하므로 여러 봇이 동일한 사용자 이름을 가질 수 있습니다. 판별자를 추가하면 다시 고유해집니다."
                },
                hideDefaultAtSign: {
                    label: "기호의 기본값 숨기기",
                    description: "멘션과 답글에서 이름 앞에 있는 기본 '@' 기호를 숨깁니다. 두 기능 중 하나가 활성화된 경우에만 적용됩니다."
                },
                truncateAllNamesWithStreamerMode: {
                    label: "Streamer 모드로 모든 이름 자르기",
                    description: "스트리머 모드에서는 사용자 이름뿐만 아니라 모든 이름을 자릅니다."
                },
                removeDuplicates: {
                    label: "중복 제거",
                    description: "동일한 이름이 있으면 제거하고 고유한 이름만 남겨 둡니다."
                },
                ignoreFonts: {
                    label: "글꼴 무시",
                    description: "두 번째, 세 번째, 네 번째 이름에는 사용자의 사용자 정의 글꼴에 관계없이 gg sans를 사용합니다."
                },
                ignoreGradients: {
                    label: "그라데이션 무시",
                    description: "기본이 아닌 이름의 경우 역할에 그라데이션이 있고 아래 색상이 'Role+-#'으로 설정된 경우 전체 그라데이션이 아닌 기본 색상을 사용하고 Nitro 효과가 있는 경우 완전히 무시합니다."
                },
                animateGradients: {
                    label: "그라디언트 애니메이션",
                    description: "두 번째, 세 번째, 네 번째 이름의 경우 역할에 그라데이션이 있으면 애니메이션을 적용합니다. 이는 '그라디언트 무시' 및 모션 감소로 인해 비활성화됩니다."
                },
                nameSeparator: {
                    label: "이름 구분 기호",
                    description: "이름 사이에 사용할 구분 기호입니다. 기본값은 단일 공백입니다."
                },
                friendNameOnlyInDirectMessages: {
                    label: "쪽지에만 친구 이름 표시",
                    description: "친구 이름은 DM에만 표시되고 서버에는 표시되지 않습니다."
                },
                customNameOnlyInDirectMessages: {
                    label: "쪽지에만 있는 맞춤 이름",
                    description: "서버가 아닌 DM에만 사용자 정의 이름을 표시합니다."
                },
                includedNames: {
                    label: "포함된 이름",
                    description: "사용자 이름, 표시 이름, 별명, 친구 이름을 표시하는 순서입니다. 다음 자리 표시자를 사용하세요: {user}, {display}, {nick}, {friend}. 이름 옵션을 사용할 수 없는 경우 {friend, nick, display}와 같이 쉼표로 구분하여 대체 이름으로 사용할 수 있는 여러 이름 옵션을 제공할 수 있습니다. 이름당 최대 3개의 접두사와 3개의 접미사를 사용할 수 있습니다."
                },
                customNameColor: {
                    label: "사용자 정의 이름 색상",
                    description: "처음 표시되는 이름이 아닌 경우 사용자에게 할당한 사용자 정의 이름에 사용할 색상입니다. 유효한 CSS 입력을 허용합니다. 사용자의 상위 역할 색상, Nitro 효과 색상 또는 활성화된 경우 IRCColors 색상을 따르려면 '역할'을 사용하세요. 해당 비율로 밝기를 조정하려면 'Role+-#'을 사용하세요(예: 'Role+15')."
                },
                friendNameColor: {
                    label: "친구 이름 색상",
                    description: "친구의 닉네임이 처음 표시되지 않는 경우 사용할 색상입니다. 유효한 CSS 입력을 허용합니다. 사용자의 상위 역할 색상, Nitro 효과 색상 또는 활성화된 경우 IRCColors 색상을 따르려면 '역할'을 사용하세요. 해당 비율로 밝기를 조정하려면 'Role+-#'을 사용하세요(예: 'Role+15')."
                },
                nicknameColor: {
                    label: "닉네임 색상",
                    description: "처음 표시되는 것이 아닌 경우 닉네임에 사용할 색상입니다. 유효한 CSS 입력을 허용합니다. 사용자의 상위 역할 색상, Nitro 효과 색상 또는 활성화된 경우 IRCColors 색상을 따르려면 '역할'을 사용하세요. 해당 비율로 밝기를 조정하려면 'Role+-#'을 사용하세요(예: 'Role+15')."
                },
                displayNameColor: {
                    label: "표시 이름 색상",
                    description: "처음 표시되는 것이 아닌 경우 표시 이름에 사용할 색상입니다. 유효한 CSS 입력을 허용합니다. 사용자의 상위 역할 색상, Nitro 효과 색상 또는 활성화된 경우 IRCColors 색상을 따르려면 '역할'을 사용하세요. 해당 비율로 밝기를 조정하려면 'Role+-#'을 사용하세요(예: 'Role+15')."
                },
                usernameColor: {
                    label: "사용자 이름 색상",
                    description: "사용자 이름이 처음 표시되지 않은 경우 사용자 이름에 사용할 색상입니다. 유효한 CSS 입력을 허용합니다. 사용자의 상위 역할 색상, Nitro 효과 색상 또는 활성화된 경우 IRCColors 색상을 따르려면 '역할'을 사용하세요. 해당 비율로 밝기를 조정하려면 'Role+-#'을 사용하세요(예: 'Role+15')."
                },
                triggerNameRerender: {
                    label: "트리거 이름 재렌더링",
                    description: "이 설정을 전환하여 이름 다시 렌더링을 트리거합니다."
                }
            },
            modal: {
                change: {
                    title: "SMYN 닉네임 변경"
                },
                add: {
                    title: "SMYN 닉네임 추가"
                },
                setCustom: "이 사용자에 대한 맞춤 SMYN 닉네임을 설정하세요. SMYN 템플릿 설정에서 {custom}을 지정하여 활용하세요.",
                nickname: "SMYN 닉네임",
                reset: "SMYN 닉네임 재설정",
                cancel: "취소"
            }
        },
        showTimeoutDuration: {
            name: "ShowTimeoutDuration",
            description: "시간 초과 아이콘 도구 설명이나 옆에 사용자의 시간 초과가 얼마나 오래 지속되는지 표시합니다.",
            option: {
                displayStyle: {
                    label: "디스플레이 스타일",
                    description: "시간 초과 기간을 표시하는 방법",
                    tooltip: "도구 설명에서",
                    inline: "시간 초과 아이콘 옆"
                }
            }
        },
        showResourceChannels: {
            name: "ShowResourceChannels",
            description: "채널 목록에서 서버 리소스 뒤에 숨겨진 채널을 표시합니다."
        },
        showSongName: {
            name: "ShowSongName",
            description: "Spotify 활동에 대해 아티스트 대신 노래 이름을 표시합니다."
        },
        sidebarChat: {
            name: "SidebarChat",
            description: "사이드바나 팝아웃으로 다른 채널이나 DM을 엽니다.",
            toolbox: {
                label: "이전 채팅 열기"
            },
            context: {
                label: "사이드바 채팅 열기"
            },
            modal: {
                switch: "채널 전환",
                popout: "팝아웃 채팅",
                close: "사이드바 채팅 닫기"
            },
            option: {
                persistSidebar: {
                    label: "사이드바 채팅 지속",
                    description: "Discord를 다시 시작해도 사이드바 채팅을 열어두세요"
                },
                patchCommunity: {
                    label: "패치 커뮤니티",
                    description: "커뮤니티 서버에 있는 채널 브라우저 또는 회원 탭과 같은 패치 기능입니다."
                }
            }
        },
        signature: {
            name: "Signature",
            description: "자동 지문/끝 텍스트",
            option: {
                name: {
                    label: "이름",
                    description: "메시지 끝에 추가될 서명"
                },
                textHeader: {
                    label: "텍스트 헤더",
                    description: "텍스트 앞에 어떤 헤더를 붙일 것인가"
                },
                showIcon: {
                    label: "아이콘 표시",
                    description: "채팅 표시줄에 플러그인을 전환하기 위한 아이콘 표시"
                },
                contextMenu: {
                    label: "상황에 맞는 메뉴",
                    description: "채팅 입력 상황에 맞는 메뉴의 기능을 전환하는 옵션 추가"
                },
                isEnabled: {
                    label: "활성화됨",
                    description: "기능 전환"
                }
            },
            tooltip: {
                enable: "서명 활성화",
                disable: "서명 비활성화"
            },
            context: {
                enable: "서명 활성화"
            },
            command: {
                signature: {
                    name: "Signature",
                    description: "서명을 전환하세요",
                    toogle: "서명을 전환하세요(기본값은 전환입니다)",
                    enabled: "서명이 활성화되었습니다.",
                    disabled: "서명이 비활성화되었습니다."
                }
            }
        },
        silentMessageToggle: {
            name: "SilentMessageToggle",
            description: "무음 메시지 보내기를 전환하는 버튼을 채팅 표시줄에 추가합니다.",
            option: {
                persistState: {
                    label: "상태 유지",
                    description: "자동 메시지 토글 상태를 유지하는 방법",
                    none: "지속하지 않음(채널 변경 시 재설정)",
                    channels: "채널 간 지속",
                    restarts: "채널 간 지속 및 재시작"
                },
                autoDisable: {
                    label: "자동 비활성화",
                    description: "자동 메시지를 보낸 후 자동 메시지 토글을 다시 자동으로 비활성화합니다."
                }
            },
            tooltip: {
                enable: "무음 메시지 활성화",
                disable: "무음 메시지 비활성화"
            }
        },
        silentTyping: {
            name: "SilentTyping",
            description: "채팅에서 입력 표시를 숨깁니다.",
            command: {
                silentTyping: {
                    name: "SilentTyping",
                    description: "채팅에서 입력 표시를 숨깁니다.",
                    toggle: {
                        name: "toggle",
                        description: "채널 또는 길드에 대해 전역적으로 기능을 전환합니다.",
                        global: "글로벌",
                        channel: "채널",
                        guild: "동업 조합"
                    },
                    chatBarIndicator: {
                        name: "chatBarIndicator",
                        description: "채팅 표시줄 위에서 다른 사용자의 입력 표시를 숨깁니다."
                    },
                    membersListIndicator: {
                        name: "membersListIndicator",
                        description: "회원 목록에서 다른 사용자의 입력 표시를 숨깁니다."
                    },
                    chatIcon: {
                        name: "chatIcon",
                        description: "이동 중에도 플러그인을 전환할 수 있도록 채팅 표시줄에 아이콘을 표시합니다."
                    },
                    chatContextMenu: {
                        name: "chatContextMenu",
                        description: "이동 중에도 플러그인 설정을 전환하려면 채팅 컨텍스트 메뉴에 드롭다운을 표시하세요."
                    },
                    defaultHidden: {
                        name: "defaultHidden",
                        description: "기본적으로 DM/채널/길드 입력을 숨길지 여부입니다."
                    }
                }
            },
            content: {
                updated: "무음 입력 설정이 업데이트되었습니다.",
                noChanges: "자동 입력 설정은 변경되지 않았습니다."
            },
            tooltip: {
                hidden: "숨김({{location}}) 입력 중",
                visible: "표시({{location}}) 입력 중",
                global: "표시 유형(전역)"
            },
            option: {
                enabledGlobally: {
                    label: "전역적으로 활성화됨",
                    description: "자신의 입력 표시기 기능을 전역적으로 전환합니다."
                },
                hideChatBoxTypingIndicators: {
                    label: "채팅 상자 입력 표시 숨기기",
                    description: "채팅 표시줄 위에서 다른 사용자의 입력 표시를 숨깁니다."
                },
                hideMembersListTypingIndicators: {
                    label: "회원 목록 입력 표시 숨기기",
                    description: "회원 목록에서 다른 사용자의 입력 표시를 숨깁니다."
                },
                chatIcon: {
                    label: "채팅 아이콘",
                    description: "이동 중에도 플러그인을 수정할 수 있도록 채팅 표시줄에 아이콘을 표시합니다."
                },
                chatIconLeftClickAction: {
                    label: "채팅 아이콘 왼쪽 클릭 동작",
                    description: "채팅 아이콘을 마우스 왼쪽 버튼으로 클릭하면 어떻게 해야 할까요?",
                    global: "Toggle 전역 입력",
                    channel: "Toggle 채널 입력",
                    guild: "Toggle 길드 입력",
                    settings: "플러그인 설정 열기"
                },
                chatIconMiddleClickAction: {
                    label: "채팅 아이콘 가운데 클릭 동작",
                    description: "채팅 아이콘을 마우스 가운데 버튼으로 클릭할 때 수행할 작업.",
                    global: "Toggle 전역 입력",
                    channel: "Toggle 채널 입력",
                    guild: "Toggle 길드 입력",
                    settings: "플러그인 설정 열기"
                },
                chatIconRightClickAction: {
                    label: "채팅 아이콘 마우스 오른쪽 버튼 클릭 동작",
                    description: "채팅 아이콘을 마우스 오른쪽 버튼으로 클릭하면 어떻게 해야 할까요?",
                    global: "Toggle 전역 입력",
                    channel: "Toggle 채널 입력",
                    guild: "Toggle 길드 입력",
                    settings: "플러그인 설정 열기"
                },
                chatContextMenu: {
                    label: "채팅 컨텍스트 메뉴",
                    description: "이동 중에 플러그인 설정을 수정하려면 채팅 컨텍스트 메뉴에 드롭다운을 표시하세요."
                },
                defaultHidden: {
                    label: "기본 숨김",
                    description: "활성화되면 플러그인은 아래 '비활성화 위치'에 나열되지 않은 DM/채널/길드에서 다른 사람이 입력하는 것을 숨깁니다. 비활성화된 경우, 플러그인은 아래 '활성화된 위치'에 나열되지 않은 DM/채널/길드에 대한 귀하의 입력을 다른 사람에게 표시합니다."
                },
                enabledLocations: {
                    label: "활성화된 위치",
                    description: "이 ID에 대한 기능을 활성화하십시오. 쉼표로 구분된 DM ID, 채널 ID 및 길드 ID 목록을 허용합니다. '기본 숨김'이 비활성화된 경우에만 사용됩니다."
                },
                disabledLocations: {
                    label: "장애인 장소",
                    description: "해당 ID에 대한 기능을 비활성화합니다. 쉼표로 구분된 DM ID, 채널 ID 및 길드 ID 목록을 허용합니다. '기본 숨김'이 활성화된 경우에만 사용됩니다."
                }
            }
        },
        snowfall: {
            name: "Snowfall",
            description: "Discord에 눈이 내리게 해주세요!",
            about: {
                title: "정보",
                paragraph: "이 플러그인은 Discord 인터페이스 위에 크리스마스 분위기의 눈 효과를 추가합니다. 아래 설정에서 눈의 종류를 변경할 수 있습니다.",
                note: "참고: 대부분의 컴퓨터에서 이 플러그인은 평균 Plexcord 확장보다 성능에 더 이상 영향을 미치지 않지만 저가형 시스템에서는 약간의 지연이 발생할 수 있습니다."
            },
            option: {
                typeOfSnow: {
                    label: "눈의 종류",
                    description: "표시되는 눈의 유형을 변경합니다(성능에 영향을 미침).",
                    solid: "솔리드(최고 성능)",
                    text: "텍스트(중간 성능)",
                    emoji: "이미지(최저 성능)"
                },
                maxSize: {
                    label: "최대 크기",
                    description: "최대 눈송이 크기"
                },
                speed: {
                    label: "속도",
                    description: "강설 속도(더 높을수록 더 빨리 내림)"
                },
                flakesPerSecond: {
                    label: "초당 조각",
                    description: "초당 눈송이 수(높을수록 강설량 밀도가 높음)"
                }
            }
        },
        sortFriendRequests: {
            name: "SortFriendRequests",
            description: "친구 요청을 받은 날짜별로 정렬합니다.",
            tooltip: "추가됨 — {{date}}",
            option: {
                showDates: {
                    label: "날짜 표시",
                    description: "친구 요청에 날짜 표시"
                }
            }
        },
        soundBoardLogger: {
            name: "SoundBoardLogger",
            description: "음성 채팅에서 재생되는 모든 사운드보드를 기록하고 다운로드할 수 있습니다.",
            tooltip: "SoundBoard 로그 열기",
            option: {
                savedIds: {
                    label: "저장된 사운드보드 ID",
                    description: "한 번에 저장하려는 사운드보드 ID의 양(0이면 무한 저장 가능)",
                    notNumber: "값이 숫자가 아닙니다.",
                    cantDecimal: "값은 10진수일 수 없습니다.",
                    cantNegative: "값은 음수일 수 없습니다.",
                    heading: "한 번에 저장하려는 사운드보드 ID의 양(0이면 무한 저장 가능)",
                    warning: "경고! 숫자를 더 낮은 값으로 설정하면 로그가 재설정됩니다!",
                    placeholder: "숫자를 입력하세요"
                },
                fileType: {
                    label: "파일 유형",
                    description: "파일을 저장하려는 형식"
                },
                openLogs: {
                    label: "오픈 로그",
                    description: "로그 표시",
                    button: "오픈 로그"
                },
                soundVolume: {
                    label: "사운드 볼륨",
                    description: "토글 사운드의 크기(0은 비활성화)"
                },
                iconLocation: {
                    label: "아이콘 위치",
                    description: "SoundBoard 로그 아이콘을 표시할 위치 선택(다시 시작해야 함)",
                    toolbar: "툴바",
                    chatInput: "채팅 입력"
                }
            },
            modal: {
                title: "사운드보드 로그",
                loading: "소리 로드 중...",
                noLogs: "아직 녹음된 소리가 없습니다. 로깅을 시작하려면 음성 채팅에 참여하세요!",
                clearLogs: "로그 지우기",
                played: "{{time}} 시간{{s}} 재생함",
                last: "마지막으로 플레이한 날짜:",
                also: "또한 재생되었습니다:",
                download: "다운로드",
                copyId: "신분증 복사",
                copied: "ID가 클립보드에 복사되었습니다!",
                playSound: "소리 재생",
                moreUsers: "다른 사람들이 이 소리를 사용했는데...",
                volume: "사운드보드 볼륨"
            }
        },
        splitLargeMessages: {
            name: "SplitLargeMessages",
            description: "Discord의 메시지 제한에 맞게 대용량 메시지를 여러 개로 분할합니다.",
            option: {
                maxLength: {
                    label: "최대 메시지 길이",
                    description: "분할되기 전 메시지의 최대 길이입니다. 0으로 설정하면 자동으로 감지됩니다."
                },
                disableFileConversion: {
                    label: "파일 변환 비활성화",
                    description: "true인 경우 대용량 메시지에 대한 파일 변환이 비활성화됩니다."
                },
                sendDelay: {
                    label: "전송 지연",
                    description: "각 청크 사이의 지연 시간은 초 단위입니다."
                },
                hardSplit: {
                    label: "하드 분할",
                    description: "true인 경우 마지막 공백/줄 바꿈 대신 마지막 문자에서 분할됩니다."
                },
                splitInSlowmode: {
                    label: "저속 모드에서 분할",
                    description: "채널에 저속 모드가 활성화된 경우 메시지를 분할해야 합니까?"
                },
                slowmodeMax: {
                    label: "저속 모드 최대",
                    description: "저속 모드로 분할하는 경우 최대 저속 모드 시간입니다."
                }
            }
        },
        spotifyActivityToggle: {
            name: "SpotifyActivityToggle",
            description: "Spotify 활동 가시성을 위한 토글 버튼을 추가합니다.",
            tooltip: {
                enable: "Spotify 활동 켜기",
                disable: "Spotify 활동 끄기"
            },
            option: {
                location: {
                    label: "위치",
                    description: "Spotify 토글 버튼을 표시할 위치",
                    panel: "음소거/청각 장애 옆",
                    toolbox: "Plexcord 도구 상자"
                },
                activityStatus: {
                    label: "활동현황",
                    description: "Spotify 활동의 현재 상태"
                }
            }
        },
        spotifyCrack: {
            name: "SpotifyCrack",
            description: "무료로 함께 듣고 음성 채팅이 자동으로 일시 중지되지 않으며 유휴 상태에서도 활동을 계속 재생할 수 있습니다.",
            option: {
                noSpotifyAutoPause: {
                    label: "Spotify 자동 일시 중지 없음",
                    description: "Spotify 자동 일시 중지를 비활성화합니다."
                },
                keepSpotifyActivityOnIdle: {
                    label: "Spotify 활동을 유휴 상태로 유지",
                    description: "유휴 상태에서도 Spotify 활동을 계속 재생하세요"
                }
            }
        },
        spotifyShareCommands: {
            name: "SpotifyShareCommands",
            description: "슬래시 명령(/track, /album, /artist)을 통해 현재 Spotify 트랙, 앨범 또는 아티스트를 공유하세요.",
            command: {
                makeCommand: {
                    description: "채팅에서 현재 Spotify {{type}}을(를) 공유하세요",
                    track: "Spotify에서 어떤 트랙도 듣고 있지 않습니다.",
                    find: "Spotify에서 트랙을 찾지 못했습니다."
                }
            }
        },
        startupTimings: {
            name: "StartupTimings",
            description: "설정 메뉴에 시작 타이밍을 추가합니다.",
            modal: {
                title: "시작 타이밍",
                ended: "추적 종료 시간:",
                start: "시작",
                interval: "간격",
                delta: "델타",
                event: "이벤트",
                serverTrace: "서버 추적",
                loading: "로드 중..."
            }
        },
        statusNotifications: {
            name: "StatusNotifications",
            description: "상태 변경에 대한 알림을 추가합니다.",
            loading: "로드 중...",
            option: {
                notificationsSound: {
                    label: "알림음",
                    description: "상태 알림에 대한 알림음을 재생하시겠습니까?"
                },
                usersList: {
                    label: "사용자 목록",
                    description: "상태 변경 알림을 받을 사용자 목록",
                    empty: "추적된 사용자가 없습니다. 사용자를 마우스 오른쪽 버튼으로 클릭하고 '상태 알림'을 선택하여 추가하세요."
                }
            },
            context: {
                label: "상태 알림",
                notifications: "알림",
                type: {
                    all: "모두",
                    online: "온라인",
                    offline: "오프라인",
                    none: "없음"
                }
            },
            notification: {
                unknownUser: "사용자",
                title: "상태 알림"
            },
            status: {
                online: "온라인",
                idle: "게으른",
                dnd: "방해하지 마세요",
                offline: "오프라인",
            },
        },
        statusPresets: {
            name: "StatusPresets",
            description: "상태를 기억하고 나중에 설정할 수 있습니다.",
            button: {
                remember: "상태 기억"
            },
            context: {
                edit: "사용자 정의 사전 설정 편집",
                set: "맞춤 상태 설정"
            },
            notification: {
                successfully: "상태가 성공적으로 저장되었습니다."
            }
        },
        steamStatusSync: {
            name: "SteamStatusSync",
            description: "상태를 Steam에 동기화하세요! (온라인, 자리 비움, 숨김 또는 오프라인.)",
            option: {
                onlineStatus: {
                    label: "온라인 상태",
                    description: "온라인일 때 Steam 상태"
                },
                idleStatus: {
                    label: "유휴 상태",
                    description: "유휴 상태일 때의 스팀 상태"
                },
                dndStatus: {
                    label: "방해 금지 상태",
                    description: "방해 금지 모드일 때 Steam 상태"
                },
                invisibleStatus: {
                    label: "보이지 않는 상태",
                    description: "Invisible일 때의 Steam 상태"
                },
                goInvisibleIfActivityIsHidden: {
                    label: "활동이 숨겨져 있으면 표시되지 않음",
                    description: "Discord 활동이 숨겨져 있으면 Steam 상태를 숨김으로 설정하세요"
                }
            },
            status: {
                online: "온라인",
                away: "떨어져 있는",
                invisible: "보이지 않는",
                offline: "오프라인(Steam 채팅 연결 끊기)",
                disabled: "장애가 있는"
            }
        },
        stickerBlocker: {
            name: "StickerBlocker",
            description: "스티커가 표시되지 않도록 차단할 수 있습니다.",
            option: {
                showGif: {
                    label: "GIF 표시",
                    description: "멋진 고양이 GIF를 보여줄지 여부."
                },
                showMessage: {
                    label: "메시지 표시",
                    description: "어떤 ID가 차단되었는지 자세히 설명하는 메시지를 표시할지 여부"
                },
                showButton: {
                    label: "버튼 표시",
                    description: "GIF 차단을 해제하는 버튼을 표시할지 여부"
                },
                blockedStickers: {
                    label: "차단된 스티커",
                    description: "차단된 스티커 ID 목록(무엇을 하고 있는지 모르면 편집하지 마세요)"
                }
            },
            modal: {
                blocked: "차단된 스티커. ID: {{id}} 이름: {{name}}",
                unblock: "{{name}} 차단 해제"
            },
            context: {
                blockSticker: "블록 스티커",
                unblockSticker: "스티커 차단 해제"
            }
        },
        stickerPaste: {
            name: "StickerPaste",
            description: "스티커 선택기에서 스티커를 선택하면 즉시 보내는 대신 채팅 상자에 삽입됩니다."
        },
        streamerModeOnStream: {
            name: "StreamerModeOnStream",
            description: "Discord에서 스트리밍을 시작하면 스트리머 모드가 자동으로 활성화됩니다."
        },
        streamingCodecDisabler: {
            name: "StreamingCodecDisabler",
            description: "원하는 스트리밍에 대한 코덱을 비활성화합니다.",
            option: {
                disableAv1Codec: {
                    label: "AV1 코덱 비활성화",
                    description: "Discord가 스트리밍에 AV1 사용을 고려하지 못하도록 방지하세요."
                },
                disableH265Codec: {
                    label: "H265 코덱 비활성화",
                    description: "Discord가 스트리밍에 H265 사용을 고려하지 않도록 방지하세요."
                },
                disableH264Codec: {
                    label: "H264 코덱 비활성화",
                    description: "Discord가 스트리밍에 H264 사용을 고려하지 않도록 방지하세요."
                }
            }
        },
        superReactionTweaks: {
            name: "SuperReactionTweaks",
            description: "한 번에 재생되는 Super Reactions의 제한 및 기본적으로 Super React를 사용자 정의하세요.",
            option: {
                superReactByDefault: {
                    label: "기본적으로 슈퍼 반응",
                    description: "반응 선택기는 기본적으로 Super Reactions로 설정됩니다."
                },
                unlimitedSuperReactionPlaying: {
                    label: "무제한 슈퍼 리액션 플레이",
                    description: "슈퍼리액션 동시 재생 제한 제거"
                },
                superReactionPlayingLimit: {
                    label: "슈퍼 리액션 플레이 제한",
                    description: "한번에 플레이할 수 있는 맥스 슈퍼리액션. 슈퍼 리액션 재생을 비활성화하려면 0으로 설정하세요."
                }
            }
        },
        textReplace: {
            name: "TextReplace",
            description: "메시지의 텍스트를 바꾸세요. Plexcord 서버의 #textreplace-rules 채널에서 미리 만들어진 규칙을 찾을 수 있습니다.",
            option: {
                replace: {
                    label: "바꾸다",
                    string: "간단한 치환",
                    stringDescription: "간단한 찾기 및 바꾸기 규칙입니다. 예: 'brb'를 찾아 'be right back'으로 바꾸기",
                    regex: "Regex 치환",
                    regexDescription: "정규식을 사용한 더 강력한 치환입니다. 이 섹션은 고급 사용자용입니다. 이해하지 못하면 무시해도 됩니다",
                    myMessages: "메시지에 적용(모든 사람에게 표시)",
                    othersMessages: "다른 사람의 메시지에 적용(나에게만 표시됨)",
                    allMessages: "모든 메시지에 적용"
                },
                stringRules: {
                    label: "문자열 규칙",
                    description: "문자열 일치를 사용하여 텍스트를 바꾸는 규칙입니다."
                },
                regexRules: {
                    label: "정규식 규칙",
                    description: "정규식을 사용하여 텍스트를 바꾸는 규칙입니다."
                }
            },
            modal: {
                title: "테스트 규칙",
                find: "찾다",
                findRegex: "Regex 패턴",
                findText: "바꿀 텍스트",
                replace: "바꾸기",
                replaceDescription: "찾은 텍스트를 대체할 텍스트",
                includes: "포함된 경우에만",
                includesDescription: "메시지에 이 텍스트가 포함된 경우에만 이 규칙이 적용됩니다. 선택 사항입니다",
                type: "메시지 입력",
                applied: "규칙이 적용된 메시지",
                delete: "규칙 삭제",
                add: "규칙 추가",
                empty: "빈 규칙",
                rule: "규칙",
            }
        },
        themeAttributes: {
            name: "ThemeAttributes",
            description: "테마 목적을 위해 다양한 요소에 데이터 속성을 추가합니다."
        },
        timezones: {
            name: "Timezones",
            description: "프로필 및 메시지 헤더에 사용자의 현지 시간을 표시합니다.",
            button: {
                wantToSave: "시간대를 데이터베이스에 저장하고 싶으십니까? 설정하려면 여기를 클릭하세요.",
                yourLocalTimezone: "(현지 시간대)"
            },
            context: {
                set: "현지 시간대 설정"
            },
            toast: {
                refresh: {
                    successfully: "시간대가 새로고침되었습니다.",
                    failed: "시간대를 새로고침하지 못했습니다.",
                    failedTo: "시간대를 새로고침하지 못했습니다."
                },
                update: {
                    successfully: "시간대가 업데이트되었습니다!",
                    failed: "시간대를 설정하지 못했습니다."
                },
                delete: {
                    successfully: "시간대가 삭제되었습니다!",
                    failed: "시간대를 삭제하지 못했습니다."
                },
                auth: {
                    failed: "인증에 실패했습니다.",
                    success: "승인이 완료되었습니다."
                }
            },
            toolbox: {
                set: "데이터베이스 시간대 설정",
                refresh: "데이터베이스 시간대 새로 고침"
            },
            option: {
                showOwnTimezone: {
                    label: "자신의 시간대 표시",
                    description: "프로필과 메시지 헤더에 자신의 시간대를 표시하세요."
                },
                twentyFourHourTime: {
                    label: "24시간제",
                    description: "24시간 형식으로 시간 표시"
                },
                showTimezoneInfo: {
                    label: "시간대 정보 표시",
                    description: "시간 옆에 시간대 정보 표시"
                },
                showMessageHeaderTime: {
                    label: "메시지 헤더 시간 표시",
                    description: "메시지 헤더에 시간 표시"
                },
                showProfileTime: {
                    label: "프로필 시간 표시",
                    description: "사용자 프로필에 시간 표시"
                },
                useDatabase: {
                    label: "데이터베이스 시간대 사용",
                    description: "사용자 시간대를 가져오기 위해 데이터베이스를 활성화합니다."
                },
                preferDatabaseOverLocal: {
                    label: "로컬보다 데이터베이스 선호",
                    description: "시간대에 대해 로컬 저장소보다 데이터베이스를 선호합니다."
                },
                databaseUrl: {
                    label: "데이터베이스 URL",
                    description: "시간대 데이터베이스 서버의 URL"
                },
                setDatabaseTimezone: {
                    label: "데이터베이스 시간대 설정",
                    description: "데이터베이스에 시간대를 설정하세요",
                    setTimezone: "데이터베이스에 시간대 설정"
                },
                resetDatabaseTimezone: {
                    label: "데이터베이스 시간대 재설정",
                    description: "데이터베이스에서 시간대 재설정",
                    failed: "데이터베이스 시간대를 재설정하지 못했습니다."
                },
                askedTimezone: {
                    label: "요청된 시간대",
                    description: "사용자에게 시간대를 설정하라는 요청을 받았는지 여부"
                }
            },
            modal: {
                title: "시간대",
                select: "시간대 선택",
                selectPlaceholder: "시간대 선택",
                delete: "시간대 삭제",
                save: "구하다"
            }
        },
        toastNotifications: {
            name: "ToastNotifications",
            description: "다이렉트 메시지를 받을 때마다 토스트 알림을 표시합니다.",
            notification: {
                call: "당신과 통화를 시작했습니다!",
                recipient: {
                    add: "{{target}}이(가) {{actor}}에 의해 그룹에 추가되었습니다.",
                    remove: "{{target}}은(는) {{actor}}에 의해 그룹에서 제거되었습니다.",
                    left: "그룹을 떠났습니다."
                },
                channel: {
                    change: {
                        name: "Changed the channel name to {{name}}.",
                        icon: "채널 아이콘이 변경되었습니다."
                    },
                    pinned: "메시지를 고정했습니다."
                },
                sent: {
                    embed: "삽입을 보냈습니다.",
                    sticker: "스티커를 보냈습니다.",
                    attachment: "부착:"
                },
                redacted: "메시지 내용이 수정되었습니다.",
                friend: {
                    accept: "{{user}}은(는) 이제 당신의 친구입니다",
                    acceptBody: "이제 직접 메시지를 보낼 수 있습니다.",
                    request: "{{user}}님이 친구 요청을 보냈습니다.",
                    requestBody: "친구 탭에서 수락하거나 거부할 수 있습니다."
                },
                example: {
                    title: "예시 알림",
                    body: "이는 알림 본문의 예입니다."
                }
            },
            modal: {
                dismiss: "알림 닫기",
                attachments: "{{attachments}} 첨부파일{{s}} {{were}} 보냈습니다."
            },
            option: {
                position: {
                    label: "위치",
                    description: "토스트 알림의 위치",
                    topRight: "오른쪽 상단",
                    topLeft: "왼쪽 위",
                    bottomRight: "오른쪽 하단",
                    bottomLeft: "왼쪽 하단"
                },
                timeout: {
                    label: "시간 초과",
                    description: "시간(초) 알림이 표시됩니다."
                },
                opacity: {
                    label: "불투명",
                    description: "토스트 알림의 불투명도"
                },
                determineServerNotifications: {
                    label: "서버 알림 결정",
                    description: "서버 알림 설정에 따라 알림 표시 여부 결정"
                },
                directMessages: {
                    label: "직접 메시지",
                    description: "다이렉트 메시지에 대한 알림 표시"
                },
                groupMessages: {
                    label: "그룹 메시지",
                    description: "그룹 메시지에 대한 알림 표시"
                },
                friendServerNotifications: {
                    label: "친구 및 서버 알림",
                    description: "친구가 나와 공유하는 서버에 메시지를 보낼 때 알림 표시"
                },
                friendActivity: {
                    label: "친구 활동",
                    description: "누군가를 추가하거나 친구 요청을 받으면 알림 표시"
                },
                notifyFor: {
                    label: "알림 대상",
                    description: "알림을 받을 채널 ID 목록을 만듭니다(쉼표로 구분)."
                },
                ignoreUsers: {
                    label: "사용자 무시",
                    description: "모든 알림을 무시할 사용자 ID 목록을 만듭니다(쉼표로 구분)."
                },
                exampleButton: {
                    label: "예시 버튼",
                    description: "토스트 알림 예시를 보여줍니다.",
                    show: "예시 알림 표시"
                }
            }
        },
        toggleVideoBind: {
            name: "ToggleVideoBind",
            description: "웹캠을 전환하기 위한 사용자 정의 가능한 바인딩을 추가합니다.",
            option: {
                keyBind: {
                    label: "키바인드",
                    description: "누르면 웹캠을 전환하는 키입니다."
                },
                reqCtrl: {
                    label: "Ctrl 필요",
                    description: "통제를 유지해야 합니다."
                },
                reqShift: {
                    label: "교대 필요",
                    description: "Shift를 유지해야 합니다."
                },
                reqAlt: {
                    label: "Alt 필요",
                    description: "Alt를 유지해야 합니다."
                }
            }
        },
        translate: {
            name: "Translate",
            description: "Google 번역 또는 DeepL을 사용하여 메시지 번역",
            tooltip: {
                label: "번역하다"
            },
            context: {
                translate: "번역하다",
                open: "번역 모달 열기",
                auto: "자동 번역 활성화됨"
            },
            option: {
                receivedInput: {
                    label: "수신된 입력",
                    description: "메시지를 받은 언어는 다음에서 번역되어야 합니다."
                },
                receivedOutput: {
                    label: "수신된 출력",
                    description: "메시지를 받은 언어는 다음으로 번역되어야 합니다."
                },
                sentInput: {
                    label: "전송된 입력",
                    description: "귀하의 메시지가 번역되어야 하는 언어"
                },
                sentOutput: {
                    label: "전송된 출력",
                    description: "귀하의 메시지가 번역되어야 하는 언어"
                },
                service: {
                    label: "번역 서비스",
                    description: "DeepL을 사용하려면 DeepL Pro의 유료 API 키가 필요합니다.",
                    descriptionWeb: "번역 서비스 (웹에서는 지원되지 않습니다!)",
                    google: "구글 번역",
                    deepl: "DeepL 무료",
                    deeplPro: "딥엘 프로"
                },
                deeplApiKey: {
                    label: "DeepL API 키",
                    description: "DeepL API 키",
                    placeholder: "https://deepl.com/your-account에서 API 키를 받으세요."
                },
                autoTranslate: {
                    label: "자동 번역",
                    description: "메시지를 보내기 전에 자동으로 번역하세요. 번역 버튼을 Shift/마우스 오른쪽 버튼으로 클릭하여 전환할 수도 있습니다."
                },
                showAutoTranslateTooltip: {
                    label: "자동 번역 도구 설명 표시",
                    description: "메시지가 자동으로 번역될 때마다 ChatBar 버튼에 툴팁 표시"
                }
            },
            modal: {
                title: "번역하다",
                select: "언어를 선택하세요",
                auto: "자동 번역",
                dismiss: "해고하다",
                translated: "{{from}}에서 번역됨",
                failed: {
                    to: "{{text}}을(를) 번역하지 못했습니다.",
                    connect: "DeepL API에 연결하지 못했습니다."
                },
                wrong: "문제가 발생했습니다. 해당 문제가 지속되면 콘솔을 확인하거나 지원 서버에 도움을 요청하세요.",
                deepl: {
                    api: "DeepL API 할당량이 초과되었습니다. Google 번역으로 돌아갑니다.",
                    apiKey: "DeepL API 키가 설정되지 않았습니다. Google로 재설정 중",
                    auth: "잘못된 DeepL API 키 또는 버전"
                },
                autoTranslateEnabled: {
                    title: "Plexcord 자동 번역 활성화됨",
                    body: "방금 자동 번역을 활성화했습니다! 모든 메시지는 전송되기 전에 자동으로 번역됩니다.",
                    confirm: "자동 번역 비활성화",
                    cancel: "알았어요",
                    secondaryConfirm: "다시 표시하지 않음"
                }
            }
        },
        typingIndicator: {
            name: "TypingIndicator",
            description: "누군가가 채널에 입력하는 경우 표시기를 추가합니다.",
            option: {
                includeCurrentChannel: {
                    label: "현재 채널 포함",
                    description: "현재 선택된 채널의 타이핑 표시 여부를 표시할지 여부"
                },
                includeMutedChannels: {
                    label: "음소거된 채널 포함",
                    description: "음소거된 채널에 대해 입력 표시기를 표시할지 여부입니다."
                },
                includeIgnoredUsers: {
                    label: "무시된 사용자 포함",
                    description: "무시된 사용자에게 입력 표시기를 표시할지 여부입니다."
                },
                includeBlockedUsers: {
                    label: "차단된 사용자 포함",
                    description: "차단된 사용자에게 입력 표시기를 표시할지 여부입니다."
                },
                indicatorMode: {
                    label: "표시 모드",
                    description: "표시기는 어떻게 표시되어야 합니까?",
                    both: "아바타 및 애니메이션 도트",
                    dots: "애니메이션 도트",
                    avatars: "아바타"
                }
            }
        },
        typingTweaks: {
            name: "TypingTweaks",
            description: "입력 표시기에 아바타와 역할 색상 표시",
            option: {
                showAvatars: {
                    label: "여러 사용자 표시",
                    description: "입력 표시기에 아바타 표시"
                },
                showRoleColors: {
                    label: "역할 색상 표시",
                    description: "입력 표시기에 역할 색상 표시"
                },
                alternativeFormatting: {
                    label: "대체 형식",
                    description: "여러 사용자가 입력할 때 더 유용한 메시지 표시"
                },
                amITyping: {
                    label: "내가 타이핑을 하고 있는 걸까?",
                    description: "다른 사람들이 당신이 타이핑하는 모습을 볼 수 있는지 보여줍니다."
                }
            },
            others: {
                areTyping: "그리고 {{count}} 다른 사람들이 입력 중입니다..."
            }
        },
        unindent: {
            name: "Unindent",
            description: "코드블록에서 선행 들여쓰기를 자릅니다."
        },
        unitConverter: {
            name: "UnitConverter",
            description: "미터법 단위를 영국식 단위로 또는 그 반대로 변환합니다.",
            tooltip: "단위 변환",
            option: {
                myUnits: {
                    label: "내 단위",
                    description: "당신이 사용하고 변환하려는 단위. 기본값은 영국식",
                    imperial: "장엄한",
                    metric: "미터법"
                }
            },
            button: {
                dismiss: "해고하다"
            }
        },
        unlimitedAccounts: {
            name: "UnlimitedAccounts",
            description: "추가할 수 있는 계정 수가 늘어납니다.",
            option: {
                maxAccounts: {
                    label: "최대 계정",
                    description: "추가할 수 있는 계정 수 또는 제한이 없는 경우 0개"
                }
            }
        },
        unlockedAvatarZoom: {
            name: "UnlockedAvatarZoom",
            description: "아바타를 변경할 때 이미지 자르기 도구에서 더 확대할 수 있습니다.",
            option: {
                zoomMultiplier: {
                    label: "줌 승수",
                    description: "줌 승수"
                }
            }
        },
        unsuppressEmbeds: {
            name: "UnsuppressEmbeds",
            description: "메시지에 포함된 내용을 억제 해제할 수 있습니다.",
            context: {
                unsuppress: "억제 해제 포함",
                suppress: "삽입 억제"
            }
        },
        uselessInfo: {
            name: "UselessInfo",
            description: "Discord 내에서 무작위로 쓸모없는 정보를 표시합니다. 단축키와 간격은 조정 가능합니다.",
            recording: "녹음...",
            record: "기록",
            option: {
                delay: {
                    label: "알림 간격",
                    description: "알림 표시 간격(분)"
                },
                historyHotkey: {
                    label: "기록 패널 바로가기",
                    description: "이전에 표시된 사실의 기록을 표시하는 단축키"
                },
                randomFactHotkey: {
                    label: "무작위 사실 바로가기",
                    description: "무작위 사실 패널을 여는 단축키"
                },
                sameFact: {
                    label: "동일한 항목 표시 방지",
                    description: "모든 사실이 표시될 때까지 동일한 사실을 여러 번 표시하지 마십시오."
                },
                lastNFacts: {
                    label: "피해야 할 최근 항목 수",
                    description: "반복을 피하기 위해 가장 최근에 표시된 사실 수(0 = 전체 시간)"
                }
            },
            modal: {
                title: "쓸모없는정보",
                history: {
                    none: "아직 사실이 없습니다. 바로가기를 사용하거나 기다리세요.",
                    source: "원천"
                },
                showRandom: "무작위로 표시",
                close: "닫다"
            },
            notification: {
                title: "알고 계셨나요?"
            }
        },
        userMessagesPronouns: {
            name: "UserMessagesPronouns",
            description: "메시지 헤더에 사용자 대명사 표시",
            option: {
                pronounsFormat: {
                    label: "대명사 형식",
                    description: "채팅에 표시되는 대명사의 형식",
                    lowercase: "소문자",
                    capitalized: "대문자로 표기"
                },
                showSelf: {
                    label: "자신 표시",
                    description: "자신에 대한 대명사 표시를 활성화 또는 비활성화합니다."
                }
            }
        },
        userVoiceShow: {
            name: "UserVoiceShow",
            description: "사용자가 음성 채널에 있을 때 표시기를 표시합니다.",
            option: {
                showInUserProfileModal: {
                    label: "사용자 프로필 모달에 표시",
                    description: "사용자 프로필의 이름 옆에 사용자의 음성 채널 표시기를 표시합니다."
                },
                showInMemberList: {
                    label: "회원 목록에 표시",
                    description: "멤버 및 DM 목록에 사용자의 음성 채널 표시기를 표시합니다."
                },
                showInMessages: {
                    label: "메시지에 표시",
                    description: "메시지에 사용자의 음성 채널 표시기를 표시합니다."
                }
            },
            modal: {
                inVoiceChat: "음성채팅 중"
            },
            notification: {
                cannotJoin: "사용자의 음성 채널에 참여할 수 없습니다."
            }
        },
        uSRBG: {
            name: "USRBG",
            description: "USRBG의 사용자 배너를 표시하여 누구나 Nitro 없이 배너를 얻을 수 있도록 합니다.",
            option: {
                nitroFirst: {
                    label: "니트로 퍼스트",
                    description: "Nitro와 USRBG 배너가 모두 있는 경우 사용할 배너",
                    nitro: "니트로 배너",
                    usrbg: "USRBG 배너"
                },
                voiceBackground: {
                    label: "음성 배경",
                    description: "USRBG 배너를 음성 채팅 배경으로 사용"
                }
            },
            button: "나만의 USRBG 배너를 받으세요"
        },
        validReply: {
            name: "ValidReply",
            description: "답장 위로 마우스를 가져가면 '메시지를 로드할 수 없습니다' 문제 수정"
        },
        validUser: {
            name: "ValidUser",
            description: "'@unknown-user'로 표시되는 알 수 없는 사용자에 대한 멘션 수정(수정하려면 멘션 위로 마우스를 가져가세요)",
            badges: {
                discordBugHunter: "디스코드 버그헌터",
                moderatorProgramsAlumni: "중재자 프로그램 동문",
                discordStaff: "디스코드 스태프",
                hypeSquadEvents: "HypeSquad 이벤트",
                bravery: "HypeSquad 용기",
                brilliance: "HypeSquad 브릴리언스",
                balance: "HypeSquad 잔액",
                partneredServerOwner: "파트너 서버 소유자",
                nitro: "디스코드 니트로",
                earlySupporter: "얼리서포터",
                earlyVerifiedBotDeveloper: "초기 검증된 봇 개발자"
            }
        },
        voiceChatDoubleClick: {
            name: "VoiceChatDoubleClick",
            description: "한 번 클릭하는 대신 두 번 클릭하여 음성 채팅에 참여하세요."
        },
        vcNarrator: {
            name: "VCNarrator",
            description: "사용자가 내레이터를 통해 음성 채널에 참여, 나가거나 이동할 때 알림",
            option: {
                voice: {
                    label: "목소리"
                },
                volume: {
                    label: "용량",
                    description: "내레이터 볼륨"
                },
                rate: {
                    label: "비율",
                    description: "내레이터 속도"
                },
                sayOwnName: {
                    label: "자신의 이름을 말해보세요",
                    description: "자신의 이름을 말해 보세요"
                },
                latinOnly: {
                    label: "라틴어만",
                    description: "이름을 말하기 전에 라틴어가 아닌 문자를 이름에서 제거하세요."
                },
                joinMessage: {
                    label: "메시지에 참여하세요",
                    description: "메시지에 참여하세요"
                },
                leaveMessage: {
                    label: "메시지 남기기",
                    description: "메시지 남기기"
                },
                moveMessage: {
                    label: "메시지 이동",
                    description: "메시지 이동"
                },
                muteMessage: {
                    label: "메시지 음소거",
                    description: "메시지 음소거(지금은 본인만)"
                },
                unmuteMessage: {
                    label: "메시지 음소거 해제",
                    description: "메시지 음소거 해제(지금은 본인만 가능)"
                },
                deafenMessage: {
                    label: "귀머거리 메시지",
                    description: "귀머거리 메시지(지금은 본인만)"
                },
                undeafenMessage: {
                    label: "귀머거리 메시지",
                    description: "Undeafen 메시지(지금은 본인만 해당)"
                }
            },
            modal: {
                title: "예시 사운드 재생",
                voiceTitle: "목소리",
                voice: "음성을 선택하세요",
                languageTitle: "언어",
                language: "언어를 선택하세요",
                noVoice: "내레이터 음성을 찾을 수 없습니다.",
                linuxNote: "speech-dispatcher 또는 espeak를 설치하고 --enable-speech-dispatcher 플래그를 사용하여 Discord를 실행하세요.",
                someNarrator: "운영 체제의 내레이터 설정에서 일부를 설치해 보세요.",
                dontHaveEnglish: "영어 음성이 설치되어 있지 않아 내레이터가 이상하게 들릴 수 있습니다.",
                customiseMessages: "아래에서 음성 메시지를 맞춤설정할 수 있습니다. 특정 메시지를 없음으로 설정하여 비활성화할 수 있습니다.",
                placeholdersInfo: "특수 자리 표시자 {{USER}}, {{DISPLAY_NAME}}, {{NICKNAME}} 및 {{CHANNEL}}은 각각 사용자 이름(본인인 경우 없음), 사용자 표시 이름, 현재 서버의 사용자 닉네임 및 채널 이름으로 대체됩니다."
            }
        },
        viewIcons: {
            name: "ViewIcons",
            description: "사용자 프로필의 아바타와 배너를 클릭 가능하게 만들고 사용자, 서버 및 그룹 채널 상황에 맞는 메뉴에 아바타/배너 보기 항목을 추가합니다.",
            context: {
                view: {
                    avatar: "아바타 보기",
                    serverAvatar: "서버 아바타 보기",
                    icon: "보기 아이콘",
                    banner: "배너 보기"
                }
            },
            option: {
                format: {
                    label: "체재",
                    description: "애니메이션이 아닌 이미지에 사용할 이미지 형식을 선택합니다. 애니메이션 이미지는 항상 .gif를 사용합니다."
                },
                imgSize: {
                    label: "이미지 크기",
                    description: "사용할 이미지 크기"
                }
            }
        },
        viewRaw: {
            name: "ViewRaw",
            description: "메시지, 채널 또는 길드의 원시 콘텐츠/데이터를 복사하고 봅니다.",
            context: {
                copyLeft: "Raw 복사(왼쪽 클릭) / Raw 보기(오른쪽 클릭)",
                copyRight: "Raw 복사(오른쪽 클릭) / Raw 보기(왼쪽 클릭)",
                view: "원시 보기"
            },
            option: {
                popoverButton: {
                    label: "팝오버 버튼",
                    description: "메시지의 원시 콘텐츠/데이터를 보려면 메시지 팝오버에 버튼을 표시합니다."
                },
                clickMethod: {
                    label: "클릭 방법",
                    description: "모든 메시지의 원시 콘텐츠/데이터를 보려면 버튼을 변경하세요.",
                    left: "원시 콘텐츠를 보려면 마우스 왼쪽 버튼을 클릭하세요.",
                    right: "원시 콘텐츠를 보려면 마우스 오른쪽 버튼을 클릭하세요."
                }
            },
            modal: {
                title: "원시 보기",
                content: "콘텐츠",
                data: "{{type}} 데이터",
                copied: "{{type}} 데이터가 클립보드에 복사되었습니다!",
                copy: "{{type}} JSON 복사",
                copiedContent: "콘텐츠가 클립보드에 복사되었습니다!",
                copyContent: "원시 콘텐츠 복사"
            },
            types: {
                message: "메시지",
                channel: "채널",
                guild: "동업 조합",
                role: "역할",
                user: "사용자"
            }
        },
        voiceButtons: {
            name: "VoiceButtons",
            description: "음성 통화 패널에서 모든 사용자에게 신속하게 DM을 보내거나, 음소거하거나, 귀머거리를 차단할 수 있습니다.",
            option: {
                showChatButton: {
                    label: "채팅 버튼 표시",
                    description: "채팅 버튼을 표시할지 여부"
                },
                showMuteButton: {
                    label: "음소거 버튼 표시",
                    description: "음소거 버튼을 표시할지 여부"
                },
                showDeafenButton: {
                    label: "귀머거리 버튼 표시",
                    description: "귀머거리 버튼을 표시할지 여부"
                },
                muteSoundboard: {
                    label: "음소거 사운드보드",
                    description: "청각 장애 버튼을 클릭하면 사운드보드가 전환됩니다."
                },
                disableVideo: {
                    label: "비디오 비활성화",
                    description: "청각 장애 버튼을 클릭하면 비디오가 전환됩니다."
                },
                useServer: {
                    label: "서버 사용",
                    description: "권한이 있는 경우 로컬 대신 서버 음소거/청각 장애를 사용하세요."
                },
                serverSelf: {
                    label: "서버 자체",
                    description: "귀머거리 / 음소거 / 귀머거리를 사용할 때 서버에서 자신을 음소거합니다."
                },
                showButtonsSelf: {
                    label: "자신에게 버튼 표시",
                    description: "자신의 사용자를 위한 버튼을 표시할지 여부. 버튼을 클릭하면 DM 패널이 열리고 음소거/청각 기능이 해제된다는 점을 제외하면 다른 버튼과 기능이 동일합니다.",
                    display: "표시하다",
                    hide: "숨다",
                    disable: "장애를 입히다"
                },
                whichNameToShow: {
                    label: "표시할 이름",
                    description: "툴팁에 닉네임 또는 사용자 이름을 표시할지 선택합니다.",
                    global: "전역 이름",
                    username: "사용자 이름",
                    both: "둘 다"
                },
                buttonPosition: {
                    label: "버튼 위치",
                    description: "버튼이 표시될 위치를 선택합니다.",
                    left: "왼쪽",
                    right: "오른쪽",
                }
            },
            tooltip: {
                navigate: "DM으로 이동",
                open: "{{username}}로 DM 열기",
                yourself: "당신 자신",
                serverMute: "서버 음소거",
                serverDeafen: "서버 디펜",
                mute: "무음",
                deafen: "귀가 들리지 않게 하다",
                unmute: "음소거 해제",
                undeafen: "언디펜",
                serverUnmute: "서버 음소거 해제",
                serverUndeafen: "서버 언디펜"
            }
        },
        voiceChannelLog: {
            name: "VoiceChannelLog",
            description: "음성 채널에 참여하고 나가는 사람을 기록합니다.",
            context: {
                view: "채널 로그 보기"
            },
            modal: {
                joined: "<#{{channel}}>에 가입함",
                left: "왼쪽 <#{{channel}}>",
                movedTo: "<#{{channel}}>(으)로 이동됨",
                movedFrom: "<#{{channel}}>에서 이동됨",
                noLogs: "표시할 로그가 없습니다.",
                logs: "{{channel}} 로그"
            },
            option: {
                mode: {
                    label: "방법",
                    description: "음성 채널 로그를 표시하는 방법",
                    menu: "로그 메뉴",
                    associated: "관련 채팅에 직접 로그인",
                    both: "채팅 및 로그 메뉴에 로그인"
                },
                voiceChannelChatSelf: {
                    label: "음성 채널 채팅 셀프",
                    description: "음성 채널에 자신의 음성 채널 이벤트를 기록하세요."
                },
                voiceChannelChatSilent: {
                    label: "음성 채널 채팅 무음",
                    description: "음성 채널 채팅의 참여/나가기/이동 메시지는 무음으로 설정됩니다."
                },
                voiceChannelChatSilentSelf: {
                    label: "음성 채널 채팅 Silent Self",
                    description: "음성 채널에 있는 경우 음성 채널 채팅의 메시지 참여/나가기/이동이 무음으로 설정됩니다."
                },
                ignoreBlockedUsers: {
                    label: "차단된 사용자 무시",
                    description: "차단된 사용자를 기록하지 않음"
                }
            }
        },
        voiceChatUtilities: {
            name: "VoiceChatUtilities",
            description: "이 플러그인을 사용하면 전체 채널에서 여러 작업(이동, 음소거, 연결 끊기 등)을 수행할 수 있습니다. (원래 dutake 제작)",
            option: {
                waitAfter: {
                    label: "조치 후 대기",
                    description: "대기하기 전에 수행할 API 작업의 양(비율 제한을 피하기 위해)"
                },
                waitSeconds: {
                    label: "잠시만 기다려주세요",
                    description: "각 작업 간 대기 시간(초)"
                }
            },
            context: {
                voiceTools: "음성 도구",
                mentionAll: "모든 사용자 언급",
                disconnectAll: "모두 연결 해제",
                muteAll: "모두 음소거",
                unmuteAll: "모두 음소거 해제",
                deafenAll: "모두를 귀먹게하다",
                undeafenAll: "모두 언디펀",
                moveAll: "모두 이동"
            }
        },
        voiceDownload: {
            name: "VoiceDownload",
            description: "음성 메시지에 다운로드를 추가합니다. (새 브라우저 탭이 열립니다)",
            context: {
                download: "음성 메시지 다운로드"
            }
        },
        voiceMessages: {
            name: "VoiceMessages",
            description: "모바일에서처럼 음성 메시지를 보낼 수 있습니다. 이렇게 하려면 업로드 버튼을 마우스 오른쪽 버튼으로 클릭하고 음성 메시지 보내기를 클릭하세요.",
            option: {
                noiseSuppression: {
                    label: "소음 억제",
                    description: "소음 억제"
                },
                echoCancellation: {
                    label: "에코 제거",
                    description: "에코 제거"
                }
            },
            notification: {
                failed: {
                    upload: "음성 메시지를 업로드하지 못했습니다.",
                    start: "녹화를 시작하지 못했습니다.",
                    finish: "녹음을 완료하지 못했습니다."
                }
            },
            context: {
                sendVoiceMessage: "음성 메시지 보내기",
                missingPermissions: "(권한 누락)"
            },
            modal: {
                record: "음성 메시지 녹음",
                upload: "파일 업로드",
                preview: "시사",
                failed: "선택한 오디오 파일을 구문 분석하지 못했습니다.",
                oggOpus: "iOS에서 재생하려면 음성 메시지가 OggOpus여야 합니다. 이 파일은 {{type}}이므로 iOS에서 재생할 수 없습니다.",
                fix: "이 문제를 해결하려면 먼저 {{link}}을 사용하여 OggOpus로 변환하세요.",
                sending: "지금 음성 메시지를 보내는 중입니다... 잠시만 기다려주세요.",
                stop: "녹음 중지",
                start: "녹음 시작",
                resume: "녹음 재개",
                pause: "녹음 일시 정지",
                recording: "녹음",
                send: "보내다",
            }
        },
        volumeBooster: {
            name: "VolumeBooster",
            description: "사용자 및 스트림 볼륨을 기본 최대값 이상으로 설정할 수 있습니다.",
            option: {
                multiplier: {
                    label: "승수",
                    description: "볼륨 승수"
                }
            }
        },
        wallpaperFree: {
            name: "WallpaperFree",
            description: "기존 DM 벽지 실험을 재현합니다. 모든 채널, 사용자 또는 서버에 대한 배경 이미지를 설정하세요.",
            option: {
                globalDefault: {
                    label: "전역 기본값",
                    description: "모든 채널에 대한 전역 기본 배경화면을 설정합니다."
                },
                stylingTips: {
                    label: "스타일링 팁"
                }
            },
            context: {
                setWallpaper: "배경화면 설정",
                removeWallpaper: "배경화면 제거"
            },
            modal: {
                set: "배경화면 설정",
                image: "이미지 URL",
                cancel: "취소",
                apply: "적용하다",
                global: {
                    set: "글로벌 배경화면 설정",
                    remove: "전역 기본 배경화면 제거",
                    reset: "배경화면 데이터 재설정"
                },
                web: {
                    info: "Plexcord 테마 디렉토리에 로컬 파일을 두고 URL plexcord:///themes/filename.ext를 사용하여 로컬 파일을 사용할 수 있습니다.",
                    open: "테마 디렉토리 열기",
                    quickCSS: "QuickCSS 열기"
                }
            }
        },
        webContextMenus: {
            name: "WebContextMenus",
            description: "Discord 웹 버전에 누락된 컨텍스트 메뉴를 다시 추가합니다: 링크 및 이미지(복사/링크 열기/이미지), 텍스트 영역(복사, 잘라내기, 붙여넣기, 맞춤법 검사)",
            option: {
                addBack: {
                    label: "뒤로 추가",
                    description: "이미지, 링크 및 채팅 입력 표시줄에 대한 Discord 컨텍스트 메뉴를 다시 추가합니다."
                }
            }
        },
        webKeybinds: {
            name: "WebKeybinds",
            description: "Discord 웹 버전에서 누락된 키 바인딩을 다시 추가합니다: Ctrl+T, Ctrl+Shift+T, Ctrl+Tab, Ctrl+Shift+Tab, Ctrl+1-9, Ctrl+,. 브라우저 내부가 아닌 Plextron/Legcord에서만 완전히 작동합니다."
        },
        webScreenShareFixes: {
            name: "WebScreenShareFixes",
            description: "Chromium 및 Plextron 클라이언트에서 2500kbps 비트 전송률 제한을 제거합니다.",
            option: {
                experimentalAV1Support: {
                    label: "실험적인 AV1 지원",
                    description: "AV1 코덱 지원을 활성화합니다. 스트림 무한 로드와 같은 문제가 발생할 수 있습니다."
                }
            }
        },
        whoReacted: {
            name: "WhoReacted",
            description: "메시지에 반응한 사용자의 아바타를 렌더링합니다.",
            option: {
                avatarClick: {
                    label: "아바타 클릭",
                    description: "반응에서 아바타 클릭 전환"
                }
            }
        },
        whosWatching: {
            name: "WhosWatching",
            description: "화면 공유 아이콘 위로 마우스를 가져가면 사용자가 스트림을 시청하고 있는 내용을 볼 수 있습니다.",
            modal: {
                noSpectator: "관중 없음"
            },
            option: {
                showPanel: {
                    label: "패널 표시",
                    description: "화면 공유 패널 아래에 관중 표시"
                }
            }
        },
        writeUpperCase: {
            name: "WriteUpperCase",
            description: "메시지 입력의 각 문장의 첫 글자를 대문자로 변경합니다.",
            option: {
                blockedWords: {
                    label: "차단된 단어",
                    description: "대문자로 쓰지 않는 문자열(쉼표로 구분)"
                }
            }
        },
        xSOverlay: {
            name: "XSOverlay",
            description: "VR에서 쉽게 볼 수 있도록 Discord 알림을 XSOverlay로 전달합니다.",
            notification: {
                call: {
                    title: "{{user}}님이 전화를 걸고 있습니다.",
                    content: "전화 수신"
                },
                message: {
                    reply: "(회신하다)",
                    embed: "[포함시키다]",
                    onlyEmbed: "보낸 메시지 삽입",
                    sticker: "[상표]",
                    onlySticker: "스티커를 보냈습니다",
                    image: "영상",
                    attachment: "부착"
                },
                test: {
                    title: "안녕하세요 Plexcord입니다!",
                    content: "테스트 알림입니다! *터지다*",
                    button: "테스트 알림 보내기"
                }
            },
            option: {
                webSocketPort: {
                    label: "웹소켓 포트",
                    description: "웹소켓 포트"
                },
                preferUDP: {
                    label: "UDP 선호",
                    description: "WebSocket을 통해 연결할 수 없는 XSOverlay의 이전 빌드를 사용하는 경우 활성화합니다. 이 설정은 웹에서는 무시됩니다."
                },
                botNotifications: {
                    label: "봇 알림",
                    description: "봇 알림 허용"
                },
                serverNotifications: {
                    label: "서버 알림",
                    description: "서버 알림 허용"
                },
                dmNotifications: {
                    label: "DM 알림",
                    description: "쪽지 알림 허용"
                },
                groupDmNotifications: {
                    label: "그룹 DM 알림",
                    description: "그룹 DM 알림 허용"
                },
                callNotifications: {
                    label: "전화 알림",
                    description: "전화 알림 허용"
                },
                pingColor: {
                    label: "핑 색상",
                    description: "사용자 언급 색상"
                },
                channelPingColor: {
                    label: "채널 핑 색상",
                    description: "채널 언급 색상"
                },
                soundPath: {
                    label: "사운드 경로",
                    description: "알림음(기본/경고/오류)"
                },
                timeout: {
                    label: "시간 초과",
                    description: "알림 기간(초)"
                },
                lengthBasedTimeout: {
                    label: "길이 기반 시간 초과",
                    description: "메시지 길이로 기간 연장"
                },
                opacity: {
                    label: "불투명",
                    description: "알림 불투명도"
                },
                volume: {
                    label: "용량",
                    description: "용량"
                }
            }
        },
        youtubeAdblock: {
            name: "YouTubeAdblock",
            description: "YouTube 삽입 광고 및 AdGuard를 통한 함께 시청 활동 차단"
        },
        youtubeDescription: {
            name: "YouTubeDescription",
            description: "YouTube 비디오 삽입에 설명을 추가합니다."
        }
    }
} as const;

export default translations;
