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
                label: "딜",
                description: "Plexcord에 대해 선호하는 언어를 선택하세요.",
                placeholder: "언어 선택"
            }
        },
        location: {
            label: "설정 위치",
            description: "Plexcord는 설정 섹션을 배치할 위치를 결정합니다.",
            top: "맨 위로",
            nitro: {
                above: "니트로 섹션 위에",
                below: "니트로 섹션 아래"
            },
            activity: {
                above: "위 이벤트 설정",
                below: "이벤트 설정에서"
            },
            bottom: "높은 곳에"
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
                description: "더 깔끔한 외관을 위해 로컬 창 프레임을 제거합니다. 제목 표시줄 영역을 끌어서 창을 이동할 수 있습니다."
            },
            frameless: {
                label: "창틀 비활성화",
                description: "더 깔끔한 외관을 위해 로컬 창 프레임을 제거합니다. 제목 표시줄 영역을 끌어서 창을 이동할 수 있습니다."
            },
            winNativeTitleBar: {
                label: "Discord의 사용자 정의 제목 표시줄 대신 Windows의 기본 제목 표시줄을 사용하세요",
                description: "Discord의 사용자 정의 제목 표시줄을 표준 Windows 제목 표시줄로 교체합니다. 이로 인해 일부 창 관리 도구와의 호환성이 향상될 수 있습니다."
            },
            transparent: {
                label: "창 투명도 활성화",
                description: "디스코드 창을 투명하게 만들어보세요. 투명성을 지원하는 테마가 필요합니다. 그렇지 않으면 아무 작업도 수행되지 않습니다.",
                isWindows: "이렇게 하면 창 크기 조정이 중지되고 창이 화면 가장자리에 맞춰지는 것을 방지할 수 있습니다.",
                notWindows: "이렇게 하면 창 크기가 조정되는 것을 방지할 수 있습니다."
            },
            winCtrlQ: {
                label: "Discord를 닫는 Ctrl+Q 단축키 저장(Alt+F4 대체)",
                description: "Discord를 닫으려면 키보드 단축키로 Ctrl+Q를 추가하세요. 이는 Alt+F4에 대한 대안을 제공하여 응용 프로그램을 빠르게 닫습니다."
            },
            disableMinSize: {
                label: "최소 창 크기 비활성화",
                description: "Discord 창의 크기가 기본 최소 크기보다 작게 조정되도록 허용합니다. 창 관리자나 작은 화면을 타일링하는 데 유용합니다."
            }
        },
        quickActions: {
            title: "빠른 거래",
            description: "자주 사용할 수 있는 일반적인 작업입니다. 이러한 바로가기를 사용하면 메뉴를 탐색하지 않고도 자주 사용하는 기능에 빠르게 액세스할 수 있습니다.",
            notificationLog: "알림 로그",
            editQuickCSS: "빠른CSS 편집",
            relaunchDiscord: "디스코드 다시 시작",
            openSettingsFolder: "설정 폴더 열기",
            viewSourceCode: "소스 코드 보기"
        },
        specialCards: {
            donations: {
                title: "기부",
                subtitle: "기부해 주셔서 감사합니다!",
                description: "@mutanplex로 메시지를 보내 언제든지 권한을 관리할 수 있습니다.",
                button: "기부",
                invite: "우리의 불화에 동참하세요",
                invalid: "초대 링크가 잘못되었거나 만료되었습니다."
            },
            supportProject: {
                title: "프로젝트 지원",
                description: "기부를 통해 Plexcord 개발을 지원해 보세요!"
            },
            contributions: {
                title: "기여",
                subtitle: "귀하의 기여에 감사드립니다!",
                description: "이제 Plexcord에 기여할 수 있는 멋진 배지가 생겼습니다!",
                buttonTitle: "귀하가 기여한 내용 보기"
            }
        },
        settingsSection: {
            title: "설정",
            description: "Plexcord가 Discord와 통합되고 작동하는 방식을 구성합니다. 이러한 설정은 Discord 클라이언트의 모양과 동작에 영향을 미칩니다.",
            hintParts: {
                prefix: "{{pluginLink}} 설정을 구성하면 Discord 설정 메뉴에서 이 설정 섹션이 표시되는 위치를 맞춤 설정할 수 있습니다.",
                linkText: "설정 플러그인"
            }
        },
        notifications: {
            title: "알림",
            description: "Plexcord가 알림을 처리하는 방법을 구성합니다. 알림을 받는 시기와 방법을 사용자 정의하거나 과거 알림 기록을 볼 수 있습니다.",
            settings: "알림 설정",
            viewLog: "알림 기록 보기",
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
                desktopDesc: "로컬 데스크톱 알림(예: 핑을 받을 때)",
                onlyWhenNotFocused: "Discord가 집중되지 않을 때만 데스크톱 알림을 사용하세요",
                always: {
                    desktop: "항상 데스크톱 알림 사용",
                    plexcord: "항상 Plexcord 알림 사용"
                }
            },
            positions: {
                label: "알림 위치",
                right: {
                    bottom: "오른쪽 아래",
                    top: "오른쪽 위로"
                },
                left: {
                    bottom: "왼쪽 아래",
                    top: "왼쪽 위로"
                }
            },
            missed: {
                label: "부재중 알림 수",
                description: "Discord에 다시 집중하면 놓친 알림에 대한 알림이 표시됩니다.",
                whileYou: "당신이 없는 동안",
                count: "{{count}}개 알림{{s}}개 수신됨",
                s: " "
            },
            timeout: {
                label: "알림 시간 초과",
                description: "알림이 자동으로 사라지기 전까지 화면에 표시되는 시간(초)"
            },
            logLimit: {
                label: "알림 로그 제한",
                description: "알림 로그에 저장할 최대 알림 수입니다. 알림 로깅을 비활성화하려면 {{disable}}로 설정하고 오래된 알림을 자동으로 제거하지 않으려면 {{unlimited}}로 설정합니다."
            },
            opacity: {
                label: "불투명",
                description: "인앱 알림의 불투명도"
            },
            maxNotifications: {
                label: "최대 알림",
                description: "동시에 표시할 최대 알림 수"
            },
            behavior: {
                label: "알림 동작",
            },
            disableInStreamerMode: {
                label: "브로드캐스터 모드에서 비활성화",
                description: "브로드캐스터 모드에서는 알림 비활성화"
            },
            renderImages: {
                label: "프로세스 이미지",
                description: "알림의 이미지 렌더링"
            },
            streamingTreatment: {
                label: "브로드캐스터 모드 동작",
                description: "화면을 공유할 때 알림을 처리하는 방법",
                normal: "일반 - 알림을 정상적으로 표시합니다.",
                noContent: "콘텐츠 없음 - 알림 본문 숨기기",
                ignore: "무시 – 알림을 전혀 표시하지 않습니다."
            },
        },
        macVibrancy: {
            title: "창 깜박임 스타일(다시 시작해야 함)",
            description: "macOS 창 깜박임 효과를 사용자 정의합니다. 이는 Discord 창의 흐림 및 투명도 스타일을 제어합니다. 변경 사항을 적용하려면 다시 시작해야 합니다.",
            placeholder: "창 깜박임 스타일",
            style: {
                no: "흔들림 없음",
                underPage: "아래 페이지(창 선팅)",
                content: "내용물",
                window: "창문",
                selection: "투표",
                titlebar: "제목 표시줄",
                header: "제목",
                sidebar: "사이드바",
                tooltip: "도구 설명",
                menu: "메뉴",
                popover: "팝업 창",
                fullscreenUI: "전체 화면 UI(투명하지만 약간 흐릿함)",
                hud: "HUD(가장 투명함)"
            }
        }
    },

    plugins: {
        title: "플러그인",
        new: "새로운",
        unknown: "알려지지 않은",
        noDescription: "설명을 사용할 수 없습니다.",
        restart: {
            apply: "변경 사항을 적용하려면 다시 시작하세요!",
            required: "다시 시작해야 합니다!",
            description: "새로운 플러그인과 설정을 적용하려면 지금 다시 시작하세요.",
            following: "다음 플러그인을 사용하려면 다시 시작해야 합니다.",
            fully: "일부 플러그인을 완전히 비활성화하려면 재부팅이 필요합니다.",
            would: "다시 시작하시겠습니까?",
            remainingCount: "외 {{count}}개",
            resetDefault: "기본 설정으로 재설정",
            failed: "종속성을 초기화하지 못했습니다.",
            button: {
                restart: "다시 시작",
                later: "그 다음에!",
                now: "지금 다시 시작",
                cancel: "취소",
                disableWarning: "경고 비활성화",
                disableAll: "모두 비활성화",
                reset: "다시 놓기",
                close: "4분의 1"
            }
        },
        contributor: {
            contributed: "기여하다",
            modal: {
                contributionsInfo: "플러그인을 개발하여 {{userName}} {{contributionCount}} {{continuedLink}}.",
                noContributions: "{{userName}}님은 아직 플러그인을 개발하지 않았습니다. 아마도 다른 방식으로 {{contributedLink}}할 것입니다!"
            }
        },
        infoModal: {
            description: "톱니바퀴 또는 정보 아이콘을 누르면 플러그인에 대한 자세한 정보를 얻을 수 있습니다.",
            settingsInfo: "톱니바퀴가 있는 플러그인에는 변경할 수 있는 설정이 있습니다!",
            disableAll: "모든 플러그인 비활성화"
        },
        error: {
            invalidInput: "잘못된 입력이 제공되었습니다.",
            stopping: "{{plugin}} 플러그인을 중지하는 중에 문제가 발생했습니다.",
            starting: "{{plugin}} 플러그인을 초기화하는 중에 문제가 발생했습니다.",
            startDependency: "종속성을 초기화하는 중에 문제가 발생했습니다. {{failures}}",
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
            plextron: "플렉트론 적용",
            web: "Plextron 앱 및 Discord 웹 버전",
            dev: "Plexcord의 개발자 버전"
        },
        search: {
            looking: "이것이 당신이 찾고 있는 것인가요?",
            onlyAvailable: "여기서만 가능 ->",
            noCriteria: "검색 기준과 일치하는 플러그인을 찾을 수 없습니다"
        },
        required: {
            title: "필수 플러그인",
            this: "이 플러그인은 Plexcord가 작동하는 데 필요합니다.",
            by: "이 플러그인은 다음이 작동하는 데 필요합니다."
        },
        dangerModal: {
            title: "위험한 행동",
            disablePlugins: "플러그인 비활성화",
            disableText: "모두 비활성화",
            irreversible: "이 작업은 되돌릴 수 없습니다!",
            enableBack: "계속하시겠습니까? 나중에 다시 활성화할 수 있습니다.",
            undone: "이 작업은 취소할 수 없습니다. 확실합니까?",
            resetDescription: "{{pluginName}} 플러그인 설정을 기본값으로 재설정하려고 합니다.",
            disable: "{{enabledPlugins}} 플러그인을 비활성화하려고 합니다!",
            confirmReset: "확인 및 재설정",
            cancel: "취소",
            resetSettings: "재설정 설정",
            resetText: "다시 놓기"
        },
        filters: {
            label: "필터",
            placeholder: "플러그인 검색...",
            option: {
                all: "모두",
                enabled: "활동적인",
                disabled: "장애가 있는",
                new: "새로운",
                userplugins: "사용자 플러그인",
                api: "API 플러그인"
            }
        },
        pluginModal: {
            noSettings: "이 플러그인에는 변경할 수 있는 설정이 없습니다.",
            authors: "저자",
            settings: "설정",
            successfulReset: "{{plugin}} 플러그인 설정이 성공적으로 재설정되었습니다.",
            enabledStock: "활성 주식 추가 기능",
            totalStock: "총 재고 추가 기능",
            enabledUser: "활성 사용자 플러그인",
            totalUser: "총 사용자 애드온",
            info: "더 많은 정보 보기",
            source: "소스 코드 보기"
        },
        metadata: {
            api: {
                description: {
                    memberListDecorators: "구성원 목록에 데코레이터를 추가하는 API(서버 및 DM 모두)",
                    messageAccessories: "메시지에 소품을 추가하기 위한 API",
                    messageDecorations: "게시물에 데코레이터를 추가하는 API",
                    chatInputButtons: "채팅 항목에 버튼을 추가하는 API",
                    commands: "명령을 사용하는 모든 것에 필요한 API",
                    contextMenu: "컨텍스트 메뉴에서 항목을 추가/제거하는 API",
                    dynamicImageModal: "이미지 모달을 열 때 너비 또는 높이를 건너뛸 수 있습니다.",
                    menuItemDemangler: "Discord 메뉴 항목을 더 읽기 쉽게 만듭니다.",
                    messageEvents: "메시지 이벤트를 사용하는 모든 것에 필요한 API",
                    messagePopover: "메시지 팝업에 버튼을 추가하는 API",
                    messageUpdater: "메시지 업데이트 및 재처리를 위한 API",
                    nicknameIcons: "프로필의 사용자 이름에 아이콘을 추가하는 API",
                    notices: "알림 자동 해제 문제 수정",
                    serverList: "서버 목록을 수정하는 플러그인에 필요한 API",
                    userSettings: "Discord의 사용자 설정, 그룹 및 이름을 공개하는 패치",
                    audioPlayer: "Discord의 내부 오디오 파일 또는 외부 오디오 링크를 재생하기 위한 API입니다.",
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
                    plexcord: "Plexcord 참가자",
                    vencord: "Vencord 참가자",
                    userPlugin: "사용자 플러그인 기여자"
                },
                context: {
                    title: "배지 옵션",
                    copy: {
                        name: "배지 이름 복사",
                        link: "배지의 이미지 링크 복사"
                    },
                    refetch: {
                        button: "배지 새로 고침",
                        success: "배지가 성공적으로 갱신되었습니다!"
                    }
                },
                modal: {
                    title: "플렉스코드 서포터",
                    special: "이 배지는 Plexcord 기증자를 위한 특별한 특권입니다.",
                    description: "기부자가 되어 Plexcord 개발을 지원해 보세요. 이것은 우리에게 매우 귀중한 것입니다!!"
                }
            }
        },
        uiElements: {
            manage: "UI 요소 관리",
            allows: "마음에 들지 않는 버튼을 숨길 수 있습니다",
            section: {
                chatbar: {
                    title: "채팅바 버튼",
                    description: "채팅 항목 표시줄 오른쪽에 있는 버튼입니다."
                },
                messagePopover: {
                    title: "메시지 팝업 버튼",
                    description: "메시지 위로 마우스를 가져가면 오른쪽에 나타나는 플로팅 버튼입니다."
                }
            },
            button: "활성화된 플러그인에 대한 버튼이 여기에 표시됩니다."
        }
    },

    patchHelper: {
        title: "패치 도우미",
        description: "Plexcord 플러그인용 패치를 생성하는 데 도움이 되는 개발자 도구입니다.",
        fullPatch: {
            label: "탐 야마",
            description: "필드를 채우려면 여기에 전체 JSON 패치를 붙여넣으세요."
        },
        find: "불",
        match: "성냥",
        replacement: "변화",
        preview: "시사",
        generatedCode: "생성된 코드",
        group: "그룹",
        diff: "차이점",
        module: "기준 치수",
        compile: "덜레",
        compiled: "컴파일 성공",
        copy: {
            clipboard: "클립보드에 복사",
            codeblock: "코드 블록으로 복사"
        },
        error: {
            noMatch: "일치하는 항목이 없습니다. 어쩌면 해당 모듈이 게으른 로딩일 수도 있습니다.",
            multipleMatch: "일치하는 항목이 두 개 이상 발견되었습니다. 좀 더 구체적인 검색 패턴을 사용해 보세요.",
            noFind: "'찾기' 필드가 없습니다.",
            noReplacement: "'변경' 필드가 없습니다.",
            invalidReplacement: "교체 필드가 ​​잘못되었습니다.",
            replacementMatch: "'replacement.match' 필드가 존재하지 않습니다.",
            replacementReplace: "'replacement.replace' 필드가 존재하지 않습니다.",
            replacementMustFunction: "교체는 함수여야 합니다."
        },
        cheatSheet: {
            title: "치트 시트",
            identifiers: "식별자(변수 이름, 클래스 이름 등)와 일치하는 사용자 정의 정규식 이스케이프 시퀀스",
            dollar: "$ 추가",
            entireMatch: "모든 일치 항목을 추가합니다.",
            beforeMatch: "일치 항목 앞에 하위 문자열을 추가합니다.",
            afterMatch: "일치 항목 뒤에 하위 문자열을 추가합니다.",
            nthGroup: "n번째 캡처 그룹($1, $2...)을 추가합니다.",
            pluginInstance: "플러그인 인스턴스를 추가합니다."
        },
        replacementEval: {
            label: "함수로 프로세스 교체",
            description: "이 기능이 활성화되면 '교체'가 기능으로 처리됩니다."
        }
    },

    sync: {
        title: "백업 및 복원",
        warning: "경고",
        warningText: "설정 파일을 가져오면 현재 설정이 재정의됩니다. 현재 구성을 유지하려면 먼저 백업을 내보내십시오.",
        description: "Plexcord 설정을 JSON 파일로 가져오고 내보낼 수 있습니다. 이런 방식으로 쉽게 설정을 다른 장치로 옮기거나 Plexcord 또는 Discord를 다시 설치한 후 설정을 복원할 수 있습니다.",
        successful: "설정을 성공적으로 가져왔습니다. 변경 사항을 적용하려면 앱을 다시 시작하세요!",
        error: {
            failure: "설정 가져오기 실패: {{오류}}",
            failedExport: "설정 내보내기에 실패했습니다. 콘솔을 확인하세요.",
            invalid: "잘못된 설정입니다. 이게 정말 Plexcord Tuning 파일인가요?",
            tooLarge: "데이터 저장소가 너무 커서 백업에서 제외되었습니다. 필요한 경우 '데이터 저장소 내보내기' 기능을 사용하십시오.",
            clearSomeDate: "DataStore는 거대합니다. 일부 플러그인 데이터를 삭제하고 다시 시도하세요."
        },
        settings: {
            text: "백업에는 무엇이 있나요?",
            quickcss: "사용자 정의 QuickCSS",
            theme: "테마 링크",
            plugins: "플러그인 설정",
            datastores: "애드온 저장소(예: 시간대 또는 IRememberYou)"
        },
        import: {
            title: "가져오기 설정",
            description: "이전에 내보낸 설정 파일을 선택하여 구성을 복원하세요. 그러면 현재 설정이 모두 백업 설정으로 대체됩니다.",
            all: "모든 설정 가져오기",
            plugins: "에클렌티이 이체 악타르",
            css: "QuickCSS'yi 더보기",
            datastore: "데이터스토어 가져오기"
        },
        export: {
            title: "내보내기 설정",
            description: "백업을 위해 현재 Plexcord 설정을 파일로 내보내거나 다른 장치로 전송할 수 있습니다.",
            all: "모든 설정 내보내기",
            plugins: "플러그인 내보내기",
            css: "QuickCSS 내보내기",
            datastore: "데이터스토어 내보내기"
        }
    },

    cloud: {
        text: "구름",
        title: "설정 동기화",
        override: "클라우드 동기화",
        description: "Plexcord 설정을 클라우드에 동기화하세요. 이를 통해 수동으로 가져오기/내보내기 없이 여러 장치에서 구성을 일관되게 유지할 수 있습니다.",
        switchDescription: "활성화되면 설정이 클라우드에 동기화됩니다. 다음 작업을 사용하여 수동으로 동기화할 수 있습니다.",
        settings: "클라우드 설정",
        successful: "귀하의 설정이 클라우드에 성공적으로 동기화되었습니다.",
        updated: "설정이 업데이트되었습니다! 변경 사항을 완전히 적용하려면 여기를 클릭하여 재부팅하세요!",
        deleted: "클라우드에서 설정이 삭제되었습니다!",
        integration: {
            title: "클라우드 통합",
            description: "Plexcord의 클라우드 통합을 통해 여러 장치와 Discord 설치 간에 설정을 동기화할 수 있습니다. 귀하의 데이터는 안전하게 저장되며 언제든지 쉽게 복원할 수 있습니다.",
        },
        reauth: "다른 클라이언트가 클라우드 통합을 활성화한 것을 확인했습니다! 제한사항으로 인해 계속하려면 재인증이 필요합니다. 계속하려면 여기를 클릭하여 설정 페이지로 이동하세요!",
        error: {
            setup: "설정에 실패했습니다(OAuth 구성을 검색할 수 없음).",
            secret: "설정에 실패했습니다(비밀 키가 반환되지 않았습니다).",
            string: "설치에 실패했습니다({{오류}}).",
            connect: "이 계정이 Plexcord Cloud 앱에 연결되어 있지 않아 클라우드 동기화가 비활성화되었습니다. 클라우드 설정에서 이 계정을 연결하여 다시 활성화할 수 있습니다. (참고: 기본 설정은 별도로 저장됩니다)",
            noSettings: "클라우드에 설정이 없습니다.",
            uptodate: "설정이 최신 상태입니다.",
            localNewer: "로컬 설정이 클라우드 설정보다 최신입니다.",
            delete: "설정을 삭제하지 못했습니다({{오류}}).",
            api: {
                returned: {
                    delete: "설정을 삭제하지 못했습니다(API가 {{status}}를 반환함).",
                    to: "클라우드에 설정을 동기화하지 못했습니다(API가 {{status}}를 반환함).",
                    from: "클라우드에서 설정을 동기화하지 못했습니다(API가 {{status}}를 반환함)."
                }
            },
            synchronize: {
                to: "설정을 클라우드에 동기화할 수 없습니다({{오류}}).",
                from: "클라우드에서 설정을 동기화할 수 없습니다({{오류}})."
            }
        },
        warning: {
            enableCloudIntegration: "설정 동기화 기능을 사용하려면 위에서 클라우드 통합을 활성화하세요."
        },
        danger: {
            title: "위험지대",
            description: "클라우드에 있는 모든 데이터를 영구적으로 삭제합니다. 이 작업은 되돌릴 수 없으며 동기화된 모든 설정과 클라우드 인프라에 저장된 기타 데이터가 제거됩니다.",
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
            host: "{{host}} 도메인이 권한 목록에 추가되었습니다. 변경 사항을 적용하려면 애플리케이션을 다시 시작하세요.",
            erase: {
                successful: "클라우드 데이터가 삭제되었습니다.",
                failed: "모든 데이터를 삭제하지 못했습니다(API가 {{status}}를 반환함). 지원팀에 문의하세요."
            }
        },
        button: {
            to: "클라우드에 동기화",
            from: "클라우드에서 동기화",
            fromDescription: "현재 설정을 클라우드의 설정으로 덮어쓰게 됩니다. 현명하게 사용하세요!",
            delete: "클라우드 데이터 삭제",
            enable: "클라우드 통합 활성화",
            reauthorize: "재승인",
            confirm: "지금 다시 시작",
            later: "그 다음에!"
        },
        privacy: "귀하의 개인 정보를 보호합니다",
        source: "소스 코드",
        overview: "Plexcord에는 클라우드 통합 기능이 포함되어 있어 장치 간 설정 동기화와 같은 이점을 제공합니다. 이러한 {{privacy}} 및 {{source}}는 AGPL 3.0 라이선스로 제공되므로 자체 서버에서 호스팅할 수 있습니다.",
        authorization: "설정을 동기화하려면 클라우드에 연결하세요. 아직 클라우드 통합을 설정하지 않은 경우 승인을 요청합니다.",
        backend: {
            title: "클라우드 제공업체",
            description: "설정이 클라우드에 저장되는 방식을 선택하세요. 기본적으로 Plexcord Cloud가 사용되지만 원하는 경우 자체 호스팅 클라우드 서비스를 구성할 수도 있습니다.",
            invalid: "잘못된 URL"
        },
        sync: {
            title: "이 장치의 동기화 규칙",
            description: "이 설정은 이 장치와 클라우드 간에 설정이 동기화되는 방식을 결정합니다. 변경 사항이 양방향으로 전송되도록 허용하거나 한 쪽을 기본 소스로 선택할 수 있습니다.",
            direction: {
                both: "양방향 동기화(변경 사항이 양방향으로 전송됨)",
                push: "이 장치는 소스입니다(업로드만 가능)",
                pull: "클라우드 소스(다운로드만 가능)",
                manual: "자동동기화 (아래 버튼만으로 수동동기화 가능)"
            }
        }
    },

    changelog: {
        text: "변경 사항",
        title: "변경 사항",
        description: "여기에서 Plexcord에 대한 최신 변경 사항 및 업데이트를 찾을 수 있습니다.",
        by: "작가",
        check: "창고 확인",
        uptodate: "현재의",
        update: "업데이트",
        noMessage: "메시지 없음",
        unknown: "알려지지 않은",
        updatedPlugins: "업데이트된 플러그인",
        newSettings: "새로운 설정",
        newSettingTooltip: "{{플러그인}}의 새로운 설정",
        loading: "로드 중...",
        repoUptodate: "창고가 최신 상태임",
        fetch: "창고에서 가져오기",
        clear: "모든 메모 지우기",
        internet: "인터넷에 연결되어 있는지 확인하고 다시 시도하세요.",
        recent: "최근 변경사항",
        codeChanges: "코드 변경 {{count}}개의 새로운 커밋",
        updateLogs: "{{count}} 업데이트 노트",
        noCommit: "현재 버전에서 전달 커밋을 찾을 수 없습니다. 새로운 변경 사항을 확인하려면 '저장소에서 가져오기'를 클릭하세요.",
        previous: "이전 업데이트 세션과 함께 커밋 기록 및 플러그인 변경 사항이 포함됩니다.",
        modal: {
            description: "Plexcord의 최신 변경 사항을 확인하세요. 이 프로세스는 저장소에서 직접 커밋을 가져와서 새로운 기능을 보여줍니다.",
            repository: "데포",
            failed: "수신 실패 - 콘솔을 확인하세요",
            current: "사용 가능:",
            hide: "메모 숨기기",
            show: "메모 표시",
            fetch: {
                title: "변화 가져오기",
                description: "저장소에서 새로운 커밋, 플러그인 업데이트, 코드 변경 사항을 확인하세요. 그러면 현재 버전과 최신 버전을 비교하여 새로운 기능이 표시됩니다.",
                newCommit: "이는 마지막 릴리스 이후의 새로운 커밋 및 플러그인 업데이트입니다. 어떤 기능이 추가되었는지, 어떤 버그가 수정되었는지, 어떤 플러그인이 업데이트되었는지 확인할 수 있습니다.",
                confirm: "할 수 있다",
            }
        },
        commit: {
            available: "커밋 가능",
            no: "새로운 커밋 없음",
            new: "새로운 플러그인",
            updated: "업데이트된 플러그인",
            settings: "새로운 설정"
        },
        toast: {
            already: "저장소가 이미 최신 상태입니다.",
            found: "저장소에서 {{count}}개의 새 커밋이 발견되었습니다.",
            local: "저장소가 로컬 복사본으로 최신 상태입니다.",
            failed: "창고에서 가져올 수 없었습니다 :(",
            cleared: "모든 메모가 삭제되었습니다.",
            logCleared: "메모가 삭제되었습니다.",
            yourLatest: "마지막 업데이트에서 저장된 커밋"
        },
        alert: {
            clear: {
                title: "모든 메모 지우기",
                body: "모든 메모를 삭제하시겠습니까? 이 작업은 취소할 수 없습니다.",
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
        newPlugins: "{{count}}개의 새 플러그인",
        following: "최근 업데이트에 다음 플러그인이 추가되었습니다.",
        more: "+{{count}}개의 새로운 플러그인"
    },

    csp: {
        restart: "이 변경 사항을 적용하려면 재부팅이 필요합니다",
        blocked: {
            resources: "차단된 리소스",
            disallowed: "일부 이미지, 스타일, 글꼴은 승인되지 않은 도메인에서 왔기 때문에 차단되었습니다.",
            recommended: "GitHub 또는 Imgur로 옮기는 것이 좋습니다. 그러나 도메인을 완전히 신뢰하는 경우 도메인을 허용할 수도 있습니다.",
            afterAllow: "스페이스에 대한 권한을 부여한 후 변경 사항을 적용하려면 {{플랫폼}}(시스템 트레이/작업 관리자에서)을 완전히 종료하고 다시 시작해야 합니다.",
            allow: "허용하다",
            url: "차단된 URL"
        },
        imgur: {
            direct: "Imgur 링크는 {{etc}} 형식의 직접 링크여야 합니다.",
            copy: "직접 링크를 얻으려면 이미지를 마우스 오른쪽 버튼으로 클릭하고 '이미지 주소 복사'를 선택하세요."
        },
        wants: {
            caller: "{{callerName}}님이 {{domain}}에 대한 연결을 허용하려고 합니다.",
            detail: "{{domain}}을(를) 인식하지 못하고 완전히 신뢰하지 않는다면 이 요청을 취소해야 합니다!",
            restart: "변경 사항을 적용하려면 {{appName}}을(를) 완전히 닫고 다시 시작해야 합니다.",
            type: {
                images: "영화",
                styles: "CSS와 테마",
                fonts: "글꼴"
            },
            content: "다음 유형의 콘텐츠는 {{domain}}에서 업로드가 허용됩니다.",
            understand: "나는 {{domain}}을(를) 전적으로 신뢰하며 링크 허용의 위험을 이해합니다.",
            button: {
                cancel: "취소",
                allow: "허용하다"
            },
            title: "도메인 이름 권한"
        }
    },

    themes: {
        title: "테마",
        management: "테마 관리",
        description: "테마를 사용하여 Discord의 외관을 사용자 정의하세요. 로컬 .css 파일을 추가하거나 URL에서 직접 테마를 설치하세요. 기어 아이콘이 있는 테마에는 변경할 수 있는 사용자 정의 가능한 설정이 있습니다.",
        local: "지역 테마",
        new: "새로운",
        pinned: "고정된",
        stylus: "스타일러스 확장",
        bd: "BetterDiscord 테마",
        github: "Github",
        download: "테마를 찾고 계십니까? {{bd}}를 확인하거나 {{github}}에서 검색하세요. BetterDiscord에서 다운로드할 때 \"다운로드\" 버튼을 클릭하고 .theme.css 파일을 테마 폴더에 넣으세요.",
        add: "추가하다",
        reset: "설정을 기본값으로 재설정",
        notCSS: "CSS 파일이 아닙니다. 원시 링크를 사용하십시오!",
        okay: "좋아요!",
        checking: "점검중...",
        valid: "유효한!",
        upload: "테마 업로드",
        openFolder: "테마 폴더 열기",
        loadMissing: "누락된 테마 설치",
        editQuickCSS: "QuickCSS 편집",
        editClient: "클라이언트테마 편집",
        website: "웹사이트 열기",
        discord: "디스코드 서버",
        downloadTheme: "다운로드",
        refresh: "새로 고치다",
        delete: "실",
        unknown: {
            title: "알려지지 않은",
            author: "알 수 없는 작성자",
            theme: "디스코드 테마"
        },
        required: "다음 플러그인이 필요하지만 활성화되어 있지 않습니다.",
        homepage: "홈 페이지",
        support: "지원하다",
        online: {
            title: "온라인 테마",
            description: "로컬 파일 대신 URL에서 직접 테마를 설치하세요. 소스가 변경되면 온라인 테마가 자동으로 업데이트됩니다. 따라서 수동으로 다운로드하지 않고도 항상 최신 버전을 사용할 수 있습니다.",
            enable: "온라인 테마 활성화",
            enableDescription: "온라인 테마 업로드를 전환합니다. 비활성화하면 모든 온라인 테마가 꺼지고 새 온라인 테마를 추가할 수 없습니다."
        },
        quickActions: {
            title: "빠른 거래",
            description: "테마 관리를 위한 단축키입니다. 테마 폴더를 열어 새 테마를 추가하고, 빠른 스타일 편집을 위해 QuickCSS를 사용하거나 변경 후 테마를 다시 로드하세요."
        },
        error: {
            userscript: "Userscript의 테마는 지원되지 않습니다!",
            stylus: "대신 {{stylus}}를 사용하여 테마를 설치할 수 있습니다!",
            expired: "유효하지 않거나 만료된 링크",
            text: "심지어:"
        },
        copy: {
            url: "URL 복사",
            copied: "테마 URL이 복사되었습니다!",
            settings: "테마 설정 복사",
            copiedSettings: "테마 설정이 클립보드에 복사되었습니다."
        },
        paste: {
            settings: "테마 설정 붙여넣기",
            empty: "클립보드가 비어 있습니다.",
            invalid: "클립보드에 유효한 설정 데이터가 없습니다.",
            pasted: "테마 설정을 클립보드에서 붙여넣었습니다."
        },
        settings: {
            for: "{{themeName}} 설정",
        },
        installed: {
            title: "설치된 테마",
            description: "여기에서 테마를 관리하세요. 로컬 테마는 테마 폴더에서 로드되고, 온라인 테마는 URL에서 로드됩니다. 기어 아이콘이 있는 테마에는 사용자 정의 가능한 설정이 있습니다.",
            count: "{{count}} 테마 설치됨({{localCount}} 로컬, {{onlineCount}} 온라인) {{enabledCount}} 활성화됨",
            search: "테마도...",
            loading: "테마를 로드하는 중입니다...",
            none: "아직 설치된 테마가 없습니다. 시작하려면 테마 파일을 테마 폴더에 추가하거나 위에서 온라인 테마를 추가하세요.",
            noCriteria: "검색 또는 필터 기준과 일치하는 테마를 찾을 수 없습니다."
        },
        filter: {
            all: "모두 표시",
            online: "온라인 테마",
            local: "지역 테마",
            enabled: "효과적인",
            disabled: "장애가 있는"
        },
        notification: {
            refresh: {
                title: "테마 리뉴얼",
                error: "테마를 새로고침하지 못했습니다."
            },
            failed: {
                download: "인디리레메디 테마"
            }
        }
    },

    updater: {
        title: "업데이터",
        settings: "업데이터 설정",
        updates: "업데이트",
        updated: "업데이트되었습니다!",
        restart: "여기를 클릭하여 다시 시작하세요.",
        repaired: "플렉코드 수리 완료!",
        ok: "좋아요",
        preferences: {
            title: "환경설정 업데이트",
            description: "Plexcord가 어떻게 자동으로 업데이트되는지 확인하세요. 백그라운드에서 자동으로 업데이트하거나 새 업데이트가 있을 때 알림을 받도록 선택할 수 있습니다.",
        },
        github: {
            local: "로컬 복사본에는 원격 저장소보다 최신 레코드가 있습니다. 이는 일반적으로 로컬 변경을 수행할 때 발생합니다. 업데이트하기 전에 보관하거나 재설정하세요."
        },
        error: {
            check: "업데이트를 확인하는 중에 문제가 발생했습니다. 자세한 내용은 콘솔을 참조하세요.",
            occurred: "오류가 발생했습니다",
            retrieve: "업데이트 정보를 검색하는 중에 문제가 발생했습니다. - 콘솔을 확인하세요.",
            title: "안 돼!",
            tryAgain: "오류가 발생했습니다. 다시 시도하거나 콘솔에서 자세한 내용을 확인하세요.",
            command: "{{path}} 명령을 찾을 수 없습니다. 이것을 다운로드하거나 다시 시도하세요.",
            code: "코드 {{코드}}. 자세한 내용은 콘솔을 참조하세요.",
            running: "{{cmd}} 실행 중 문제가 발생했습니다: {{error}}",
            failed: "이것도 실패했습니다 :( 설치 프로그램을 사용하여 업데이트하거나 다시 설치해 보세요!"
        },
        available: "업데이트 1개 사용 가능",
        updateAvailable: "Plexcord 업데이트 가능!",
        click: "업데이트를 보려면 여기를 클릭하세요.",
        available_plural: "{{count}} 업데이트 사용 가능",
        current: "현재의!",
        successful: {
            title: "업데이트 성공!",
            body: "성공적으로 업데이트되었습니다. 변경사항을 저장하려면 다시 시작하세요.",
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
            description: "Plexcord는 확인 없이 자동으로 업데이트를 다운로드하고 설치합니다."
        },
        notify: {
            label: "자동 업데이트 알림 표시",
            description: "Plexcord가 자동으로 업데이트되면 알림 표시"
        },
        repo: "데포",
        repoDescription: "Plexcord가 업데이트를 받는 GitHub 저장소입니다.",
        loading: "로드 중...",
    },

    components: {
        error: {
            title: "안 돼!",
            render: "이 구성요소를 렌더링하는 동안 오류가 발생했습니다. 자세한 내용은 아래 및 본체에서 찾아보세요."
        },
        componentFailed: {
            message: "아! 이 페이지를 렌더링할 수 없습니다. 그러나 이 문제를 해결할 수 있는 업데이트가 있습니다. 지금 업데이트하고 재부팅하시겠습니까?"
        },
        quickCSS: {
            title: "QuickCSS 편집기 열기",
            message: "QuickCSS 편집기는 여전히 백그라운드에 열려 있습니다.",
            detail: "아직도 Discord를 종료하시겠습니까? 그러면 QuickCSS 편집기도 닫힙니다.",
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
            permamently: "{{count}}개의 알림이 영구적으로 제거됩니다. 이 작업은 취소할 수 없습니다.",
            button: {
                confirm: "좋아요",
                cancel: "취소"
            }
        }
    },

    memberlist: {
        error: {
            render: "{{key}} 멤버 목록 데코레이터를 렌더링하는 동안 오류가 발생했습니다."
        }
    },

    message: {
        accessory: {
            error: {
                render: "{{key}} 메시지 액세서리를 렌더링하는 동안 오류가 발생했습니다."
            }
        },
        decoration: {
            error: {
                render: "{{key}} 메시지 장식을 렌더링하는 동안 오류가 발생했습니다."
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
            years: "년도",
            month: "~이다",
            months: "~이다",
            week: "주",
            weeks: "주",
            day: "낮",
            days: "낮",
            hour: "순간",
            hours: "순간",
            minute: "분",
            minutes: "분",
            second: "두번째",
            seconds: "두번째",
            ago: "~ 전에",
            s: " "
        }
    },

    plugin: {
        noTrack: {
            name: "추적 없음",
            description: "Discord의 추적(분석/'과학'), 측정항목 및 Sentry 충돌 보고를 비활성화합니다.",
            option: {
                disableAnalytics: {
                    label: "면밀한 분석",
                    description: "Discord의 추적(분석/'과학') 측정항목 및 Sentry 충돌 보고를 비활성화합니다."
                }
            }
        },
        settings: {
            name: "설정",
            description: "설정 인터페이스 및 디버깅 정보를 추가합니다.",
            option: {
                language: {
                    label: "딜",
                    description: "Plexcord에 대해 선호하는 언어를 선택하세요."
                },
                settingsLocation: {
                    label: "설정 위치",
                    description: "Plexcord는 설정 섹션을 배치할 위치를 결정합니다."
                }
            }
        },
        supportHelper: {
            name: "지원 도우미",
            description: "우리가 귀하에게 지원을 제공하는 데 도움이 됩니다",
            commands: {
                description: {
                    debug: "Plexcord 디버깅 정보 보내기",
                    plugins: "Plexcord 플러그인 목록 보내기"
                }
            },
            modals: {
                outdated: {
                    title: "기다리다!",
                    body: "이전 버전의 Plexcord를 사용하고 있습니다! 귀하의 문제는 이미 해결되었을 가능성이 높습니다.",
                    footer: "지원을 요청하기 전에 업데이트하세요!",
                    button: {
                        cancel: "업데이트 보기",
                        confirm: "지금 업데이트하고 다시 시작하세요",
                        secondaryConfirm: "내가 무엇을 하고 있는지 알고 있거나 업데이트할 수 없습니다."
                    }
                },
                updater: {
                    title: "기다리다!",
                    body: "외부 업데이트 버전의 Plexcord를 사용하고 있습니다. 이 버전은 지원되지 않습니다!",
                    footer: "지원을 받으려면 {{공식적으로}} 또는 패키지 제공업체에 문의하세요.",
                    officially: "공식적으로 지원되는 Plexcord 버전",
                    button: {
                        cancel: "취소",
                        confirm: "다운로드 페이지 보기",
                        now: "지금 업데이트"
                    },
                    toast: {
                        success: "성공적인! 다시 시작하는 중...",
                        already: "이미 최신 상태입니다!",
                        failed: "업데이트 실패 :("
                    }
                },
                custom: {
                    title: "기다리다!",
                    header: "귀하는 Plexcord의 독점 버전을 사용하고 있습니다. 당사는 이 버전에 대한 지원을 제공하지 않습니다!",
                    body: "우리는 {{officialBuild}}에 대해서만 지원을 제공합니다. {{switch}}하거나 문제를 직접 처리하세요.",
                    footer: "이 규칙을 무시하면 지원을 받을 권리가 취소됩니다.",
                    official: "공식 릴리스",
                    switch: "공식 버전으로 업그레이드",
                    button: {
                        confirm: "이해합니다",
                        secondaryConfirm: "다시 표시하지 않음"
                    }
                }
            },
            button: {
                debug: "/plexcord-debug 실행",
                plugins: "/plexcord-plugins 실행",
                snippet: "코드 조각 실행"
            },
            toast: {
                success: "성공적인!",
                failed: "코드 조각을 실행할 수 없습니다. :(",
                failedOpenInvite: "초대를 열지 못했습니다. 콘솔을 확인하세요. :(",
                upload: "플러그인 목록이 성공적으로 로드되었습니다!",
                failedUpload: "플러그인 목록 파일을 로드할 수 없습니다. 다시 시도해 주세요.",
                unableGenerate: "플러그인 목록을 생성하지 못했습니다."
            },
            dm: {
                warning: "지원을 위해 Plexcord 플러그인 개발자에게 비공개 메시지를 보내지 마세요!{{br}}대신 {{support}} 서버에 가입하여 Plexcord 지원 채널을 사용할 수 있습니다: {{channel}}"
            },
            alert: {
                title: "경고: 플러그인이 너무 많습니다",
                paragraph1: "100개 이상의 플러그인이 활성화된 것을 확인했습니다.",
                paragraph2: "플러그인 개수로 인해 지원을 받지 못할 수도 있습니다.",
                paragraph3: "문제는 플러그인 충돌로 인해 발생할 가능성이 높습니다.",
                paragraph4: "문제를 해결하려면 일부 플러그인을 비활성화하는 것이 좋습니다.",
                paragraph5: "플러그인 목록이 텍스트 파일로 전송됩니다.",
            }
        },
        accountPanelServerProfile: {
            name: "AccountPanelServer프로필",
            description: "계정 패널을 마우스 왼쪽 버튼으로 클릭하고 서버 프로필을 보려면 마우스 오른쪽 버튼을 클릭하세요.",
            option: {
                prioritizeServerProfile: {
                    label: "서버 프로필 우선순위 지정",
                    description: "계정 패널을 마우스 왼쪽 버튼으로 클릭하면 서버 프로필의 우선순위를 정할 수 있습니다."
                }
            },
            context: {
                account: "계정 프로필 표시",
                server: "서버 프로필 표시",
                prioritize: "서버 프로필 우선순위 지정"
            }
        },
        altKrispSwitch: {
            name: "AltKrisp스위치",
            description: "Krisp와 Standard 대신 None과 Krisp 사이에서 소음 제거 팝업 스위치를 만듭니다."
        },
        alwaysAnimate: {
            name: "항상 애니메이션",
            description: "애니메이션할 수 있는 모든 것에 애니메이션을 적용합니다.",
            option: {
                icons: {
                    label: "아이콘",
                    description: "언제든지 서버 아이콘, 아바타, 장식 등에 애니메이션을 적용할 수 있습니다."
                },
                statusEmojis: {
                    label: "상태 이모티콘",
                    description: "상태 이모티콘을 항상 활기차게 만드세요."
                },
                serverBanners: {
                    label: "서버 배너",
                    description: "항상 서버 배너에 애니메이션을 적용하세요."
                },
                nameplates: {
                    label: "명판",
                    description: "항상 명판에 애니메이션을 적용하세요."
                },
                roleGradients: {
                    label: "역할 전환",
                    description: "항상 역할 색상 전환에 애니메이션을 적용하세요."
                }
            }
        },
        alwaysExpandProfiles: {
            name: "항상프로파일 확장",
            description: "항상 확장된 사용자 프로필을 엽니다."
        },
        alwaysExpandRoles: {
            name: "항상확장역할",
            description: "프로필 팝업에서 항상 역할 목록 확장",
            option: {
                hideArrow: {
                    label: "화살표 숨기기",
                    description: "화살표 숨기기"
                }
            }
        },
        animalese: {
            name: "동물성",
            description: "전송된 모든 메시지에 대해 동물 소리를 재생합니다(많이 합니다).",
            option: {
                volume: {
                    label: "사운드 레벨",
                    description: "동물 목소리 볼륨"
                },
                speed: {
                    label: "속도",
                    description: "동물의 음성 속도"
                },
                pitch: {
                    label: "톤",
                    description: "톤 승수"
                },
                messageLengthLimit: {
                    label: "메시지 길이 제한",
                    description: "처리할 최대 메시지 길이"
                },
                processOwnMessages: {
                    label: "나만의 메시지 처리",
                    description: "자신의 메시지도 음성으로 출력 가능"
                },
                soundQuality: {
                    label: "음질",
                    description: "사용할 음질",
                    high: "높은",
                    med: "중간",
                    low: "낮은",
                    lowest: "최저"
                }
            }
        },
        alwaysTrust: {
            name: "항상신뢰",
            description: "악성도메인 및 의심파일 팝업 제거",
            option: {
                domain: {
                    label: "도메인 이름",
                    description: "'악성 도메인' 팝업 제거"
                },
                file: {
                    label: "파일",
                    description: "'잠재적으로 위험할 수 있는' 다운로드 팝업 제거"
                },
                noDeleteSafety: {
                    label: "삭제 보안 없음",
                    description: "서버 삭제 시 서버 이름을 입력할 필요가 없습니다."
                },
                confirmModal: {
                    label: "확인 팝업",
                    description: "'정말로 이 거래를 확인하시겠습니까?' 팝업을 제거합니다"
                }
            },
            alert: {
                title: "서버를 삭제하시겠습니까?",
                body: "이 과정은 영구적입니다. 명확하지 않은 경우 명시하겠습니다!",
                confirm: "실",
                cancel: "취소"
            }
        },
        anonymiseFileNames: {
            name: "익명화파일 이름",
            description: "업로드된 파일 이름을 익명화합니다.",
            option: {
                anonymiseByDefault: {
                    label: "기본적으로 익명화",
                    description: "기본적으로 파일 이름을 익명화합니다. 원하는 경우 파일 업로드 팝업에서 비활성화할 수 있습니다."
                },
                spoilerMessages: {
                    label: "스포일러 메시지",
                    description: "스포일러로 표시된 파일의 이름을 익명화합니다."
                },
                method: {
                    label: "방법",
                    description: "익명화 방법",
                    random: "무작위 문자",
                    consistent: "일관된",
                    timestamp: "타임스탬프"
                },
                randomisedLength: {
                    label: "무작위화 길이",
                    description: "임의의 문자 길이"
                },
                consistent: {
                    label: "일관된 익명화",
                    description: "일관된 익명화를 위한 비밀 키"
                }
            },
            using: {
                anonymous: "익명의 파일 이름이 사용되었습니다.",
                spoiler: "일반 파일 이름이 사용됩니다."
            },
            spoiler: {
                description: "파일에 대한 스포일러를 켜거나 끄세요",
                toggle: "파일에 대한 스포일러를 켜거나 끄세요(기본값은 켜짐)",
                enabled: "스포일러 활성화!",
                disabled: "스포일러가 비활성화되었습니다!"
            }
        },
        appleMusic: {
            name: "Apple Music 리치 프레즌스",
            description: "Apple Music은 Discord Rich Presence로 청취 상태를 표시합니다.",
            about: "사용자 정의 가능한 이벤트 형식 문자열의 경우 몇 가지 사용자 정의 문자열을 사용하여 이벤트에 트랙 데이터를 추가할 수 있습니다! {{name}}은 트랙 이름으로, {{artist}}는 아티스트 이름으로, {{album}}은 앨범 이름으로 대체됩니다.",
            button: {
                listen: "Apple Music'te Dinle",
                songLink: "SongLink에서 보기"
            },
            option: {
                activityType: {
                    label: "활동 유형",
                    description: "어떤 유형의 활동이 표시되나요?",
                    listening: "청취",
                    playing: "연주하다"
                },
                statusDisplayType: {
                    label: "상태 표시 유형",
                    description: "회원 목록에 트랙/아티스트 이름 표시",
                    off: "표시하지 않음(일반 청취 메시지 표시)",
                    artist: "아티스트 이름 표시",
                    track: "트랙 이름 표시"
                },
                refreshInterval: {
                    label: "새로 고침 간격",
                    description: "이벤트 새로 고침 간격(초)"
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
                    description: "이벤트 이름 형식 문자열"
                },
                detailsString: {
                    label: "세부정보 문자열",
                    description: "이벤트 세부정보 형식 문자열"
                },
                stateString: {
                    label: "상태 문자열",
                    description: "이벤트 상태 형식 문자열"
                },
                largeImageType: {
                    label: "대형 이미지 유형",
                    description: "이벤트 자산 큰 이미지 유형",
                    album: "앨범 커버 아트",
                    artist: "예술가 그림",
                    disabled: "장애가 있는"
                },
                largeTextString: {
                    label: "큰 텍스트 문자열",
                    description: "이벤트 엔터티 큰 텍스트 형식 문자열"
                },
                smallImageType: {
                    label: "썸네일 유형",
                    description: "이벤트 자산 썸네일 유형",
                    album: "Apple Music 로고",
                    artist: "예술가 그림",
                    disabled: "장애가 있는"
                },
                smallTextString: {
                    label: "작은 텍스트 문자열",
                    description: "이벤트 엔터티 작은 텍스트 형식 문자열"
                }
            }
        },
        arRpc: {
            name: "WebRichPresence(arRPC)",
            description: "Discord 웹에서 RPC를 활성화하는 arRPC 클라이언트 플러그인(실험적)",
            use: {
                title: "arRPC를 사용하는 방법",
                enable: "{{link}} 서버를 실행한 후 플러그인을 활성화하세요.",
                link: "GitHub 저장소의 지침을 따르세요."
            },
            toast: {
                connected: "arRPC에 연결됨",
                failed: "arRPC에 연결할 수 없습니다. 작동합니까?",
                retry: "다시 시도"
            }
        },
        atSomeone: {
            name: "누군가에게",
            description: "@someone을 사용하여 임의의 사람을 태그할 수 있습니다."
        },
        autoDNDWhilePlaying: {
            name: "재생 중 자동 차단",
            description: "게임이 시작되면 온라인 상태(온라인, 유휴, 방해 금지)를 자동으로 업데이트합니다.",
            option: {
                statusToSet: {
                    label: "설정할 상태",
                    description: "게임 시작 시 설정할 상태",
                    online: "온라인",
                    dnd: "방해하지 마세요",
                    idle: "게으른",
                    invisible: "보이지 않는"
                },
                excludeInvisible: {
                    label: "보이지 않는 항목 제외",
                    description: "상태가 숨김으로 설정된 경우 자동 상태 변경 방지"
                }
            }
        },
        autoZipper: {
            name: "오토지퍼",
            description: "지정된 파일 형식과 폴더를 Discord에 업로드하기 전에 자동으로 압축합니다.",
            option: {
                extensions: {
                    label: "확장",
                    description: "자동으로 압축할 파일 확장자의 쉼표로 구분된 목록(예: .psd,.blend,.exe,.dmg)"
                }
            }
        },
        bannersEverywhere: {
            name: "곳곳에 배너",
            description: "회원 목록에 배너를 표시합니다.",
            option: {
                animate: {
                    label: "생기",
                    description: "배너를 애니메이션으로 만들기"
                },
                preferNameplate: {
                    label: "명판 선택",
                    description: "배너 대신 명판을 선택하세요"
                }
            }
        },
        betterActivities: {
            name: "더 나은 활동",
            description: "회원 목록에 활동 아이콘을 표시하고 모든 이벤트를 표시하도록 허용합니다.",
            option: {
                memberList: {
                    label: "회원 목록",
                    description: "회원 목록에 활동 아이콘 표시"
                },
                iconSize: {
                    label: "아이콘 크기",
                    description: "이벤트 아이콘 크기"
                },
                specialFirst: {
                    label: "스페셜 먼저",
                    description: "특별 이벤트 먼저 표시(현재 Spotify 및 Twitch)"
                },
                renderGifs: {
                    label: "GIF'yere Make it",
                    description: "GIF 렌더링 허용"
                },
                removeGameActivityStatus: {
                    label: "게임 상태 제거",
                    description: "게임 상태 아이콘 및 상태 제거"
                },
                userPopout: {
                    label: "사용자 팝업",
                    description: "프로필 팝업/사이드바에 모든 활동 표시"
                },
                hideTooltip: {
                    label: "툴팁 숨기기",
                    description: "다양한 장소에서 활동을 숨깁니다."
                },
                allActivitiesStyle: {
                    label: "모든 이벤트 스타일",
                    description: "모든 이벤트 스타일 표시",
                    list: "목록",
                    carousel: "슬라이더",
                    left: "솔",
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
                    description: "범위 시각화 도우미 활성화"
                },
                spectrograph: {
                    label: "분광기",
                    description: "분광기 시각화 기능 활성화"
                },
                oscilloscopeSolidColor: {
                    label: "오실로스코프 단색",
                    description: "범위에 그라데이션 대신 단색을 사용하세요."
                },
                oscilloscopeColor: {
                    label: "렌기 오실로스코프",
                    description: "단색이 활성화된 경우 오실로스코프의 색상"
                },
                spectrographSolidColor: {
                    label: "분광기 단색",
                    description: "분광기에는 그라데이션 대신 단색을 사용하세요."
                },
                spectrographColor: {
                    label: "분광기 색상",
                    description: "단색이 활성화된 경우 분광기의 색상"
                },
                forceMoveBelow: {
                    label: "아래쪽으로 강제 이동",
                    description: "볼륨 컨트롤 아래의 강제 이동 시각화 장치"
                }
            },
            toast: {
                invalidColorFormat: "{{settingKey}}의 색상 형식이 잘못되었습니다. 'R, G, B' 또는 '#RRGGBB' 형식인지 확인하세요."
            }
        },
        betterBanReasons: {
            name: "더 나은 금지 이유",
            description: "Discord 금지 창에서 사용할 사용자 정의 이유를 생성하거나 기본적으로 옵션 대신 텍스트 입력을 표시합니다.",
            option: {
                reasons: {
                    label: "이유",
                    description: "당신의 특별한 이유"
                },
                isTextInputDefault: {
                    label: "기본 텍스트 입력",
                    description: "기본적으로 선택 메뉴 대신 텍스트 입력이 표시됩니다. (더보기를 클릭하는 것과 동일)"
                }
            },
            title: "이유",
            placeholder: "어디서부터",
            add: "다른 이유 추가"
        },
        betterBlockedUsers: {
            name: "더 나은 차단된 사용자",
            description: "차단된 사용자 목록을 검색하고 설정에서 이름을 선택할 수 있도록 할 수 있습니다.",
            placeholder: "사용자 검색..."
        },
        betterCommands: {
            name: "더 나은 명령",
            description: "다양한 개선을 통해 명령 시스템을 향상시킵니다.",
            option: {
                autoFillArguments: {
                    label: "자동 완성 인수",
                    description: "필수 인수뿐만 아니라 모든 인수로 명령을 자동으로 채웁니다."
                },
                allowNewlinesInCommands: {
                    label: "명령에 줄 바꿈 허용",
                    description: "명령 항목에 줄바꿈 허용(CTRL + Shift + Enter)"
                }
            },
            command: {
                refresh: {
                    description: "Discord는 기본적으로 앱 명령을 새로 고칩니다.",
                    user: "갱신을 시도할 특정 사용자",
                    refreshing: "응용프로그램 명령을 갱신하는 중입니다...",
                    refreshed: "명령이 새로 고쳐졌습니다!",
                    failed: "명령을 새로 고치지 못했습니다. 자세한 내용은 콘솔을 확인하세요."
                }
            }
        },
        betterFolders: {
            name: "더 나은 폴더",
            description: "사용자 정의 사이드바에 서버 폴더를 표시하고 폴더 관련 개선 사항을 추가합니다.",
            option: {
                sidebar: {
                    label: "사이드바",
                    description: "사용자 정의 사이드바의 폴더에 서버 표시"
                },
                sidebarAnim: {
                    label: "사이드바 애니메이션",
                    description: "폴더 사이드바를 열 때 애니메이션 사용"
                },
                closeAllFolders: {
                    label: "모든 폴더 닫기",
                    description: "폴더에 없는 서버를 선택한 경우 모든 폴더를 닫습니다."
                },
                closeAllHomeButton: {
                    label: "홈 버튼으로 모두 닫기",
                    description: "홈 버튼 클릭 시 모든 폴더 닫기"
                },
                closeOthers: {
                    label: "기타 닫기",
                    description: "폴더가 열릴 때 다른 폴더 닫기"
                },
                closeServerFolder: {
                    label: "서버 폴더 닫기",
                    description: "폴더의 서버가 선택되면 폴더 닫기"
                },
                forceOpen: {
                    label: "강제 오픈",
                    description: "폴더의 서버로 전환되면 폴더를 강제로 엽니다."
                },
                keepIcons: {
                    label: "아이콘 보호",
                    description: "BetterFolders 사이드바에 폴더가 열려 있으면 기본 서버 표시줄 폴더에 서버 아이콘이 계속 표시됩니다."
                },
                showFolderIcon: {
                    label: "폴더 아이콘 표시",
                    description: "BetterFolders 사이드바의 폴더 서버 위에 폴더 아이콘 표시",
                    never: "절대",
                    always: "언제나",
                    moreThanOne: "여러 폴더가 확장된 경우"
                }
            }
        },
        betterGifAltText: {
            name: "BetterGifAltText",
            description: "GIF 태그/파일 이름을 포함하도록 GIF 대체 텍스트를 'GIF'에서 변경합니다."
        },
        betterGifPicker: {
            name: "BetterGifPicker",
            description: "기본적으로 GIF 선택기가 즐겨찾는 카테고리를 열도록 합니다.",
            option: {
                keepOpen: {
                    label: "선택기를 열어두세요",
                    description: "GIF를 선택한 후에도 GIF 선택기가 열린 상태로 유지되도록 합니다."
                }
            }
        },
        betterInvites: {
            name: "더 나은 초대",
            description: "초대 만료 날짜 확인, 초대자 프로필 보기, 참여 전 서버 미리보기(이름 클릭)",
            render: {
                tip: "이 초대는 {{time}} 후에 만료됩니다.",
                header: "{{name}}님이 귀하를 {{server}}에 초대했습니다.",
                never: "절대"
            }
        },
        betterNotesBox: {
            name: "BetterNotesBox",
            description: "메모 숨기기 또는 맞춤법 검사 비활성화(설정에서 구성!!)",
            option: {
                hide: {
                    label: "메모 숨기기",
                    description: "사용자 팝업에서 노트 상자 숨기기"
                },
                noSpellCheck: {
                    label: "맞춤법 검사 끄기",
                    description: "노트에서 맞춤법 검사 비활성화"
                }
            }
        },
        betterPlusReacts: {
            name: "BetterPlusReacts",
            description: ":emoji: 앞의 더하기 기호 수는 이모티콘이 추가될 메시지를 나타냅니다."
        },
        betterRoleContext: {
            name: "BetterRoleContext",
            description: "사용자 프로필에서 역할을 마우스 오른쪽 버튼으로 클릭하면 역할 색상 복사 / 역할 편집 / 역할 아이콘 표시 옵션이 추가되었습니다.",
            option: {
                roleIconFileFormat: {
                    label: "역할 아이콘 파일 형식",
                    description: "역할 아이콘을 표시할 때 사용할 파일 형식"
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
            description: "RoleDot(접근성 설정)을 클릭하면 역할 색상이 복사됩니다. 또한 RoleDot과 색상 이름을 동시에 사용할 수 있습니다.",
            option: {
                bothStyles: {
                    label: "여기 İki Stil",
                    description: "역할 포인트와 색상 이름을 모두 표시"
                },
                copyRoleColorInProfilePopout: {
                    label: "프로필 팝업에서 역할 색상 복사",
                    description: "프로필 팝업에서 역할 점을 클릭하여 역할 색상 복사를 허용합니다."
                }
            }
        },
        betterSessions: {
            name: "더 나은 세션",
            description: "세션(장치) 메뉴를 향상합니다. 이를 통해 정확한 타임스탬프를 확인하고, 각 세션에 고유한 이름을 지정하고, 새 세션에 대한 알림을 받을 수 있습니다.",
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
                    label: "제어 범위",
                    description: "백그라운드에서 새 세션을 확인하는 빈도(활성화된 경우)(분)"
                }
            }
        },
        betterSettings: {
            name: "더 나은 설정",
            description: "설정 메뉴를 여는 경험을 개선합니다.",
            option: {
                disableFade: {
                    label: "전환 효과 비활성화",
                    description: "크로스페이드 애니메이션 비활성화"
                },
                organizeMenu: {
                    label: "메뉴 편집",
                    description: "설정은 기어 아이콘 메뉴를 카테고리로 나눕니다."
                },
                eagerLoad: {
                    label: "빠른 로딩",
                    description: "메뉴가 처음 열릴 때 로딩 지연을 제거합니다."
                }
            },
            alert: {
                title: "다시 시작해야 함",
                restart: "재부팅이 필요한 설정을 변경했습니다.",
                confirm: "지금 다시 시작",
                cancel: "나중에!"
            }
        },
        betterUploadButton: {
            name: "더 나은 업로드 버튼",
            description: "한 번의 클릭으로 설치하고 마우스 오른쪽 버튼을 클릭하여 메뉴를 엽니다."
        },
        biggerStreamPreview: {
            name: "BiggerStream미리보기",
            description: "이 플러그인을 사용하면 방송 미리보기를 확대할 수 있습니다.",
            context: {
                viewPreview: "릴리스 미리보기 보기"
            }
        },
        blockKeywords: {
            name: "키워드 차단",
            description: "특정 사용자 정의 키워드가 포함된 메시지를 보내는 사용자를 차단한 것처럼 차단합니다.",
            option: {
                blockedWords: {
                    label: "차단된 단어",
                    description: "차단할 단어를 쉼표로 구분한 목록"
                },
                useRegex: {
                    label: "정규식 쿨란",
                    description: "메시지 내용을 확인할 때 각 값을 정규식으로 사용(고급)"
                },
                caseSensitive: {
                    label: "대소문자 구분",
                    description: "대소문자 구분 검색을 사용하시겠습니까?"
                },
                ignoreBlockedMessages: {
                    label: "차단된 메시지 무시",
                    description: "새 메시지 표시줄(최근 메시지)을 완전히 무시합니다."
                }
            }
        },
        blockKrisp: {
            name: "블록 크리스프",
            description: "Krisp의 설치를 방지합니다."
        },
        blurNSFW: {
            name: "블러NSFW",
            description: "마우스를 가져갈 때까지 NSFW 채널의 첨부 파일을 흐리게 표시합니다.",
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
            name: "우회 핀 프롬프트",
            description: "핀 기능을 사용할 때 핀 프롬프트를 건너뜁니다."
        },
        bypassStatus: {
            name: "우회상태",
            description: "방해 금지 모드에 있는 동안에도 특정 소스로부터 알림을 계속 받습니다. 사용자/채널/서버를 마우스 오른쪽 버튼으로 클릭하여 방해 금지 모드를 우회할 수 있습니다.",
            context: {
                remove: "상태 건너뛰기 제거",
                add: "상태 건너뛰기 추가"
            },
            option: {
                guilds: {
                    label: "서버",
                    description: "서버 홉이 허용됨(서버의 어느 곳에서나 ping이 실행되면 알림 수신)",
                    placeholder: "쉼표로 구분"
                },
                channels: {
                    label: "채널",
                    description: "건너뛰기가 허용되는 채널(해당 채널에서 핑을 하면 알림을 받습니다)",
                    placeholder: "쉼표로 구분"
                },
                users: {
                    label: "사용자",
                    description: "건너뛰기가 허용된 사용자(DM으로 전송된 모든 메시지에 대한 알림 수신)",
                    placeholder: "쉼표로 구분"
                },
                allowOutsideOfDms: {
                    label: "외부 DM 허용",
                    description: "선택한 사용자가 DM이 아닌 상태를 건너뛰도록 허용(채널/서버 건너뛰기와 같은 역할을 하지만 선택한 사용자가 보낸 모든 메시지에 적용됨)"
                },
                notificationSound: {
                    label: "알림음",
                    description: "알림음 재생 여부를 결정합니다."
                },
                respectSilentPings: {
                    label: "조용한 핑을 존중하세요",
                    description: "자동 핑을 존중합니다(@silent/알림 억제)."
                },
                statusToUse: {
                    label: "사용 사례",
                    description: "화이트리스트에 사용할 상태",
                    online: "온라인",
                    idle: "게으른",
                    dnd: "방해하지 마세요",
                    invisible: "보이지 않는"
                }
            }
        },
        cakeDay: {
            name: "케이크데이",
            description: "케이크 아이콘으로 사용자 생일을 추적하고 표시합니다.",
            context: {
                label: "생일",
                setBirthday: "생일 설정",
                clearBirthday: "생일 삭제",
                current: "현재의:"
            },
            option: {
                chat: {
                    label: "채팅",
                    description: "채팅에서 사용자 이름 옆에 원형 아이콘 표시"
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
                cleared: "생일이 삭제되었습니다!"
            },
            notification: {
                title: "🎂 오늘은 생일이에요!",
                body: "오늘은 {{username}}님의 생일입니다!"
            },
            modal: {
                title: "{{username}}의 생일을 설정하세요",
                description: "생일을 DD/MM 형식으로 입력하세요(예: 25/12).",
                placeholder: "독수리 25/12",
                current: "현재 생일:",
                set: "생일 설정",
                cancel: "취소",
                birthday: "오늘은 내 생일이에요! 🎂",
                saved: "저장된 생일",
                savedDesc: "아직 기록된 생일이 없습니다. 생일을 추가하려면 사용자를 마우스 오른쪽 버튼으로 클릭하세요!",
                today: "오늘",
                remove: "제거하다",
                loading: "로드 중...",
                save: "구하다",
                edit: "편집하다"
            }
        },
        callTimer: {
            name: "통화 타이머",
            description: "모든 음성 통화에 통화 타이머 표시",
            option: {
                format: {
                    label: "체재",
                    description: "컴팩트하거나 사람이 읽을 수 있는 형식",
                    human: "30g 23초 00일 42초"
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
                    description: "사용자 역할 색상으로 표시(ShowRoleColor 플러그인이 활성화된 경우)"
                },
                trackSelf: {
                    label: "자신을 따르십시오",
                    description: "나만의 타이머도 보여주세요"
                },
                showSeconds: {
                    label: "초 표시",
                    description: "타이머에도 초 표시"
                },
                watchLargeGuilds: {
                    label: "대형 서버 보기",
                    description: "대규모 서버에서 사용자를 추적합니다. 활성 음성 사용자가 많은 대규모 서버를 사용하는 경우 이로 인해 지연이 발생할 수 있습니다. 최대 2000명의 활성 음성 사용자를 대상으로 테스트한 결과 문제가 발생하지 않았습니다."
                },
                fixUI: {
                    label: "사용자 인터페이스 수정",
                    description: "어떤 경우에는 타이머로 인해 사용자 인터페이스가 중단될 수 있습니다. 이 옵션을 활성화하면 이 문제를 해결할 수 있습니다."
                }
            }
        },
        channelBadges: {
            name: "채널배지",
            description: "유형에 따라 채널에 배지를 추가합니다.",
            badge: {
                private: "이 채널은 잠겨 있습니다.",
                nsfw: "이 채널은 NSFW로 표시되어 있습니다.",
                rules: "이 채널은 서버 규칙 채널입니다."
            },
            option: {
                oneBadgePerChannel: {
                    label: "채널당 배지 1개",
                    description: "채널당 하나의 배지만 표시"
                },
                showTextBadge: {
                    label: "텍스트 배지 표시",
                    description: "텍스트 배지 표시"
                },
                showVoiceBadge: {
                    label: "음성 배지 표시",
                    description: "오디오 배지 표시"
                },
                showCategoryBadge: {
                    label: "카테고리 배지 표시",
                    description: "카테고리 배지 표시"
                },
                showDirectoryBadge: {
                    label: "색인 배지 표시",
                    description: "색인 배지 표시"
                },
                showAnnouncementThreadBadge: {
                    label: "공지사항 주제 배지 표시",
                    description: "공지사항 주제 배지 표시"
                },
                showPublicThreadBadge: {
                    label: "일반 주제 배지 표시",
                    description: "공개 주제 배지 표시"
                },
                showPrivateThreadBadge: {
                    label: "특별 주제 배지 표시",
                    description: "맞춤 주제 배지 표시"
                },
                showStageBadge: {
                    label: "무대 배지 표시",
                    description: "무대 배지 표시"
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
                    label: "NSFW 배지를 보여주세요",
                    description: "NSFW 배지 표시"
                },
                showLockedBadge: {
                    label: "잠긴 배지 표시",
                    description: "잠긴 배지를 보여주세요"
                },
                showRulesBadge: {
                    label: "규칙 배지 표시",
                    description: "규칙 배지 표시"
                },
                showUnknownBadge: {
                    label: "알 수 없는 배지 표시",
                    description: "알 수 없는 배지 표시"
                },
                textBadgeLabel: {
                    label: "텍스트 배지 라벨",
                    description: "텍스트 배지 라벨",
                    default: "텍스트"
                },
                voiceBadgeLabel: {
                    label: "사운드 배지 라벨",
                    description: "오디오 배지 라벨",
                    default: "세스"
                },
                categoryBadgeLabel: {
                    label: "카테고리 배지 라벨",
                    description: "카테고리 배지 라벨",
                    default: "범주"
                },
                announcementBadgeLabel: {
                    label: "공지사항 배지 라벨",
                    description: "공지사항 배지 라벨",
                    default: "하버"
                },
                announcementThreadBadgeLabel: {
                    label: "공지사항 주제 배지 라벨",
                    description: "공지사항 주제 배지 라벨",
                    default: "뉴스 주제"
                },
                publicThreadBadgeLabel: {
                    label: "일반 주제 배지 라벨",
                    description: "일반 주제 배지 라벨",
                    default: "주제"
                },
                privateThreadBadgeLabel: {
                    label: "특별 주제 배지 라벨",
                    description: "맞춤 주제 배지 라벨",
                    default: "특별주제"
                },
                stageBadgeLabel: {
                    label: "무대 배지 라벨",
                    description: "무대 배지 라벨",
                    default: "장면"
                },
                directoryBadgeLabel: {
                    label: "인덱스 배지 라벨",
                    description: "인덱스 배지 라벨",
                    default: "색인"
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
                    label: "잠금 배지 태그",
                    description: "잠금 배지 태그",
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
                    label: "오디오 배지 색상",
                    description: "사운드 배지 색상"
                },
                categoryBadgeColor: {
                    label: "카테고리 배지 색상",
                    description: "카테고리 배지 색상"
                },
                announcementBadgeColor: {
                    label: "공지사항 배지 색상",
                    description: "공지사항 배지 색상"
                },
                announcementThreadBadgeColor: {
                    label: "공지사항 제목 뱃지 색상",
                    description: "공지사항 주제 배지 색상"
                },
                publicThreadBadgeColor: {
                    label: "일반 실 배지 색상",
                    description: "일반 주제 배지 색상"
                },
                privateThreadBadgeColor: {
                    label: "특별주제 배지 색상",
                    description: "맞춤 주제 배지 색상"
                },
                stageBadgeColor: {
                    label: "무대 뱃지 색상",
                    description: "무대 뱃지 색상"
                },
                directoryBadgeColor: {
                    label: "색인 배지 색상",
                    description: "인덱스 배지 색상"
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
                voice: "세스",
                category: "범주",
                announcement: "하버",
                announcementThread: "뉴스 주제",
                publicThread: "주제",
                privateThread: "특별주제",
                stage: "장면",
                directory: "색인",
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
            name: "채널탭",
            description: "자주 방문하는 채널을 브라우저처럼 탭으로 그룹화하세요.",
            open: "새 탭에서 열기",
            animation: {
                title: "애니메이션 컨트롤",
                description: "채널 탭에 대한 특정 애니메이션을 활성화하거나 비활성화합니다. 각 옵션은 독립적으로 켜거나 끌 수 있습니다.",
                placeholder: "활성화할 애니메이션을 선택하세요...",
                tabHover: "탭 호버 효과(제거 + 크기 조정)",
                tabSelection: "선택한 탭 리프트 애니메이션",
                tabDragDrop: "탭 드래그 앤 드롭(고스트 + 재정렬)",
                tabEnterExit: "탭 인/아웃 스크롤(생성 + 닫기)",
                tabIconPop: "아이콘팝(선거성장)",
                closeRotation: "닫기 버튼 복귀",
                plusPulse: "플러스 버튼 펄스 효과",
                mentionGlow: "멘션 배지 스파클",
                compactExpand: "컴팩트 모드 확장",
                selectedBorder: "선택한 탭 파란색 테두리",
                selectedBackground: "선택한 탭 배경색",
                tabShadows: "탭 그림자 효과",
                tabRepositioning: "탭 위치 변경(소프트 전환)",
                resizeHandle: "크기 조정 핸들 페이드",
                questActivate: "현역 경사"
            },
            bookmark: {
                label: "예르 이미",
                unknown: "알 수 없는 사용자",
                folder: "접는 사람",
                add: "북마크에 추가",
                edit: "북마크 편집",
                delete: "예르 이미니 실",
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
                specialPage: "특별 페이지"
            },
            button: {
                save: "구하다",
                delete: "실",
                cancel: "취소"
            },
            context: {
                label: "ChannelTabs 상황에 맞는 메뉴",
                bookmark: "ChannelTabs 북마크 컨텍스트 메뉴",
                tab: "ChannelTabs 탭 상황에 맞는 메뉴",
                compact: "콤팩트",
                bookmarkBar: "북마크바",
                openAll: "북마크에서 모두 열기",
                openNew: "새 탭에서 열기",
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
                    select: "폴더를 선택하세요",
                    create: "새로 만들기"
                },
                edit: {
                    title: "북마크 편집",
                    name: "북마크 이름",
                    folder: "폴더 색상"
                },
                delete: {
                    title: "확실합니까?",
                    description: "북마크 폴더를 삭제하면 그 안에 있는 모든 북마크도 삭제됩니다."
                }
            },
            option: {
                onStartup: {
                    label: "처음에는",
                    description: "시작 시 탭으로 수행할 작업 선택",
                    nothing: "아무것도 하지 않음(친구 탭 열기)",
                    remember: "마지막 세션의 탭 기억",
                    open: "특정 탭 열기"
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
                bookmarkNotificationDot: {
                    label: "북마크 알림 포인트",
                    description: "북마크에 알림 점 표시"
                },
                widerTabsAndBookmarks: {
                    label: "큰 탭과 북마크",
                    description: "더 큰 모니터에서 탭 및 북마크 확장"
                },
                tabWidthScale: {
                    label: "탭 너비 스케일",
                    description: "탭 너비 배율(백분율) – 탭 가장자리를 드래그하여 조정 가능"
                },
                renderAllTabs: {
                    label: "모든 탭을 메모리에 유지",
                    description: "탭 간 전환 속도를 높이기 위해 모든 탭을 메모리에 유지합니다(스크롤 및 상태가 캐시됨)."
                },
                switchToExistingTab: {
                    label: "기존 탭으로 전환",
                    description: "탐색 중인 채널에 대한 탭이 이미 있는 경우 해당 탭으로 전환하세요."
                },
                createNewTabIfNotExists: {
                    label: "탭이 없으면 새로 생성하세요",
                    description: "채널에 탭이 없으면 새 탭을 만듭니다."
                },
                enableRapidNavigation: {
                    label: "빠른 탐색 활성화",
                    description: "채널 변경이 빠르게 이루어지면 새 탭 대신 현재 탭이 변경됩니다."
                },
                rapidNavigationThreshold: {
                    label: "빠른 탐색 임계값",
                    description: "시간 간격(밀리초)입니다. 해당 기간 동안 신규 채널이 오픈되면 기존 탭이 변경됩니다."
                },
                tabBarPosition: {
                    label: "탭바 위치",
                    description: "탭바 위치",
                    top: "맨 위",
                    bottom: "Alt"
                },
                enableNumberKeySwitching: {
                    label: "숫자 키로 탭 전환",
                    description: "1~9 키로 탭 전환 활성화"
                },
                numberKeySwitchCount: {
                    label: "숫자 키 탭 숫자",
                    description: "숫자 키를 통해 액세스할 수 있는 탭 수(1~9)"
                },
                enableCloseTabShortcut: {
                    label: "탭 닫기 바로가기",
                    description: "탭 닫기 키보드 단축키 활성화"
                },
                enableNewTabShortcut: {
                    label: "새 탭 바로가기",
                    description: "새 탭 열기 바로가기 활성화"
                },
                enableTabCycleShortcut: {
                    label: "탭 루프 바로가기",
                    description: "탭 간 전환을 위한 단축키 활성화"
                },
                keybindsSection: {
                    label: "키보드 단축키",
                    description: "버튼을 클릭하고 원하는 키 조합을 누르세요. CTRL, SHIFT, ALT와 같은 수정자가 지원됩니다.",
                    title: "키보드 단축키",
                    reset: "모두 기본값으로 재설정",
                    closeTab: {
                        label: "탭 닫기",
                        description: "현재 탭을 닫는 키보드 단축키"
                    },
                    newTab: {
                        label: "새 탭",
                        description: "현재 채널로 새 탭을 여는 키보드 단축키"
                    },
                    cycleTabsForward: {
                        label: "앞으로 탭 루프",
                        description: "다음 탭으로 이동하는 단축키(첫 번째 탭으로 이동)"
                    },
                    cycleTabsBackward: {
                        label: "백 바운스 루프",
                        description: "이전 탭으로 이동하는 단축키(마지막 탭으로 이동)"
                    }
                },
                closeTabKeybind: {
                    label: "탭 닫기 바로가기",
                    description: "현재 탭을 닫는 단축키"
                },
                newTabKeybind: {
                    label: "새 탭 바로가기",
                    description: "새 탭 열기 바로가기"
                },
                cycleTabForwardKeybind: {
                    label: "앞으로 탭 루프",
                    description: "다음 탭으로 이동하는 단축키"
                },
                cycleTabBackwardKeybind: {
                    label: "백 바운스 루프",
                    description: "이전 탭으로 이동하는 단축키"
                },
                showTabNumbers: {
                    label: "탭 번호 표시",
                    description: "바로가기를 표시하려면 탭에 숫자 배지를 표시하세요."
                },
                tabNumberPosition: {
                    label: "탭 번호 위치",
                    description: "탭의 숫자 배지 위치",
                    left: "왼쪽(사전 아이콘)",
                    right: "오른쪽 (게시물 내용)"
                },
                animations: {
                    label: "애니메이션"
                },
                animationHover: {
                    label: "호버 애니메이션",
                    description: "마우스를 가져가는 동안 리프트 및 확대 효과 활성화"
                },
                animationSelection: {
                    label: "선택 애니메이션",
                    description: "선택 시간에 조명/프레임 애니메이션 활성화"
                },
                animationDragDrop: {
                    label: "드래그 앤 드롭 애니메이션",
                    description: "드래그하는 동안 고스트 효과 활성화"
                },
                animationEnterExit: {
                    label: "입장/종료 애니메이션",
                    description: "탭 생성/닫기 시 스크롤 애니메이션"
                },
                animationIconPop: {
                    label: "아이콘 팝 애니메이션",
                    description: "선택하는 동안 아이콘 성장 애니메이션 활성화"
                },
                animationCloseRotation: {
                    label: "킬 버튼 리턴",
                    description: "종료 아이콘에 회전 애니메이션 추가"
                },
                animationPlusPulse: {
                    label: "플러스 버튼 펄스",
                    description: "새 탭 버튼에 펄스 애니메이션 활성화"
                },
                animationMentionGlow: {
                    label: "스파클을 언급하세요",
                    description: "멘션 배지에 빨간색 광선 애니메이션을 활성화합니다."
                },
                animationCompactExpand: {
                    label: "컴팩트 확장 애니메이션",
                    description: "컴팩트 탭의 원활한 확장 가능"
                },
                animationSelectedBorder: {
                    label: "선택한 탭 테두리 애니메이션",
                    description: "선택한 탭에 대해 테두리 및 광선 스타일 애니메이션을 활성화합니다."
                },
                animationSelectedBackground: {
                    label: "선택한 탭 배경 애니메이션",
                    description: "선택한 탭의 배경색 애니메이션 변경 활성화"
                },
                animationTabShadows: {
                    label: "탭 그림자 애니메이션",
                    description: "탭에 그림자 효과 활성화"
                },
                animationTabPositioning: {
                    label: "탭 위치 지정 애니메이션",
                    description: "탭 전환 시 부드러운 전환 애니메이션"
                },
                animationResizeHandle: {
                    label: "애니메이션 크기 조정",
                    description: "크기 조정 핸들 페이드 애니메이션 활성화"
                },
                animationQuestsActive: {
                    label: "현역 애니메이션",
                    description: "작업이 활성화되면 탭에서 그라데이션 애니메이션을 활성화합니다."
                },
                compactAutoExpandSelected: {
                    label: "선택 시 자동 확장",
                    description: "선택 시 소형 탭 자동 확장"
                },
                compactAutoExpandOnHover: {
                    label: "마우스오버 시 자동 확장",
                    description: "마우스를 올리면 컴팩트 탭 자동 확장"
                },
                openInNewTabAutoSwitch: {
                    label: "새 탭에서 열 때 자동 전환",
                    description: "새 탭이 열리면 자동으로 새 탭으로 전환"
                },
                bookmarksIndependentFromTabs: {
                    label: "북마크 독립",
                    description: "북마크는 탭 표시줄에 영향을 주지 않고 독립적으로 탐색합니다."
                },
                showResizeHandle: {
                    label: "크기 조정 핸들 표시",
                    description: "탭 너비를 조정하는 핸들 표시"
                },
                openNewTabsInCompactMode: {
                    label: "새 탭을 컴팩트하게 열기",
                    description: "새로 열린 탭은 기본적으로 압축 모드로 열립니다."
                },
                newTabButtonBehavior: {
                    label: "새 탭 버튼 동작",
                    description: "새 탭(+) 버튼이 오른쪽에 고정되지 않고 탭을 따라갑니다."
                },
                oneTabPerServer: {
                    label: "서버당 단일 탭",
                    description: "서버에 대한 홉은 하나만 있도록 합니다. 새 채널이 열릴 때 동일한 탭을 사용하세요"
                },
                maxOpenTabs: {
                    label: "최대 열린 탭",
                    description: "동시에 열 수 있는 최대 탭 수(0 = 무제한)"
                }
            },
            tabs: {
                startup: "홈 탭",
                currently: "현재 열려 있는 탭 설정"
            },
            toast: {
                notRestoring: "KeepCurrentChannel이 활성화되어 있어 탭이 복원되지 않습니다.",
                failed: {
                    restore: "탭을 복원할 수 없습니다.",
                    saved: "저장된 탭을 로드하지 못했습니다."
                }
            }
        },
        characterCounter: {
            name: "캐릭터카운터",
            description: "메시지 상자에 문자 카운터를 표시합니다.",
            option: {
                colorEffects: {
                    label: "색상 효과",
                    description: "글자 수 제한에 도달하면 색상 효과를 켜거나 끕니다."
                }
            }
        },
        cleanChannelGroups: {
            name: "CleanChannelGroups",
            description: "읽지 않은 메시지가 있더라도 축소된 카테고리의 모든 채널을 숨깁니다."
        },
        cleanChannelName: {
            name: "Clean채널 이름",
            description: "채널 이름에서 모든 이모티콘과 우스꽝스러운 장식을 제거하세요."
        },
        clearURLs: {
            name: "ClearURL",
            description: "제출한 URL에서 추적 요소를 자동으로 제거합니다."
        },
        clickableRoles: {
            name: "클릭 가능한 역할",
            description: "사용자 프로필 및 회원 목록에서 역할을 클릭하면 회원이 어떤 역할을 가지고 있는지 확인할 수 있습니다.",
            modal: {
                loading: "회원들이 로드 중입니다...",
                noMembers: "회원을 찾을 수 없습니다.",
                unknown: "알 수 없는 역할"
            }
        },
        clientSideBlock: {
            name: "클라이언트 측 블록",
            description: "모든 사용자로부터 거의 모든 콘텐츠를 로컬로 숨길 수 있습니다.",
            replying: "차단된 메시지에 답장하기",
            option: {
                hideVc: {
                    label: "음성 채널에서 숨기기",
                    description: "차단된 사용자가 포함된 음성 채널 숨기기"
                },
                usersToBlock: {
                    label: "차단할 사용자",
                    description: "쉼표와 공백으로 구분된 사용자 ID"
                },
                hideBlockedUsers: {
                    label: "차단된 사용자 숨기기",
                    description: "모든 곳에서 차단된 사용자를 완전히 숨깁니다."
                },
                hideBlockedMessages: {
                    label: "차단된 메시지 숨기기",
                    description: "차단된 사용자의 메시지를 완전히 숨깁니다(기존 noblockedmessages 플러그인과 동일)"
                },
                hideEmptyRoles: {
                    label: "빈 역할 숨기기",
                    description: "모든 구성원이 차단된 경우 역할 제목 숨기기"
                },
                blockedReplyDisplay: {
                    label: "차단된 응답 보기",
                    description: "숨긴 사람에게 답장을 보낼 때 메시지 대신 나타나는 내용",
                    displayText: "숨겨진 메시지에 대한 답장을 나타내는 텍스트 표시",
                    hideReply: "아무것도 보여주지 마"
                },
                guildBlackList: {
                    label: "서버 블랙리스트",
                    description: "기능이 비활성화되는 서버 ID"
                },
                guildWhiteList: {
                    label: "서버 화이트리스트",
                    description: "기능이 활성화될 서버 ID"
                }
            }
        },
        clientTheme: {
            name: "클라이언트테마",
            description: "기존 클라이언트 테마 실험을 리메이크했습니다. Discord 클라이언트 테마에 색상을 추가하세요",
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
            name: "클립 향상",
            description: "더 많은 클립 FPS 및 지속 시간 옵션과 RPC 태깅을 추가하세요!",
            minutes: "1분",
            option: {
                richPresenceTagging: {
                    label: "리치 프레즌스 태깅",
                    description: "클립에 기존 Rich Presence 태그를 언제 지정해야 합니까?",
                    always: "언제나",
                    only: "이벤트 이름의 시작 또는 끝이 일치하는 경우에만",
                    never: "절대"
                },
                enableScreenshotKeybind: {
                    label: "스크린샷 단축키 활성화",
                    description: "스크린샷 단축키 기능 활성화"
                },
                enableVoiceOnlyClips: {
                    label: "오디오 클립만 활성화",
                    description: "오디오 전용 클립 활성화(비디오 없이 오디오)"
                },
                enableAdvancedSignals: {
                    label: "고급 신호 활성화",
                    description: "고급 클립 신호 활성화(자동 클립 트리거)"
                },
                ignorePlatformRestriction: {
                    label: "플랫폼 제한 무시",
                    description: "플랫폼별 클리핑 허용(저장 오류가 발생할 수 있음)"
                },
                clipsLink: {
                    label: "클립 링크",
                    link: "Clips 설정에서 FPS 및 지속 시간 옵션을 변경하세요!"
                }
            }
        },
        colorSighted: {
            name: "색맹",
            description: "2015-2017 Discord와 마찬가지로 상황에서 색맹 친화적인 아이콘을 제거합니다."
        },
        commandPalette: {
            name: "명령 팔레트",
            description: "키보드를 사용하여 인터페이스를 탐색할 수 있습니다.",
            action: {
                command: {
                    label: "명령 실행",
                    description: "ID를 사용하여 다른 팔레트 명령을 실행합니다. 식별자가 확실하지 않은 경우 선택기를 사용하세요."
                },
                settings: {
                    label: "설정 페이지 열기",
                    description: "Discord 설정 페이지로 바로 이동합니다. 선택기에서 페이지를 선택하세요."
                },
                url: {
                    label: "URL 열기",
                    description: "링크를 엽니다. 최상의 호환성을 위해서는 https:// 링크를 사용하세요."
                },
                macro: {
                    label: "매크로 실행",
                    description: "일련의 명령을 순차적으로 실행합니다. 선택기를 통해 단계를 추가합니다."
                }
            },
            category: {
                auto: "자동(기본 레이아웃 사용)",
                default: {
                    label: "빠른 거래",
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
                        label: "채팅바 버튼"
                    },
                    changes: {
                        label: "플러그인 변경 사항"
                    }
                },
                context: {
                    label: "현재 컨텍스트",
                    description: "선택한 채널 및 서버에 대한 작업"
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
                    label: "특수 명령",
                    description: "사용자 정의 명령 팔레트 항목"
                },
                sessions: {
                    label: "세션 도구",
                    description: "Discord 세션을 관리하는 도구"
                },
                guilds: {
                    label: "서버",
                    description: "서버로 빠르게 이동"
                },
                friends: {
                    label: "친구",
                    description: "빨리 친구한테 가세요"
                },
                action: {
                    label: "행동",
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
                    label: "디스코드 재설치",
                    description: "현재 Discord 창을 다시 로드합니다."
                }
            },
            command: {
                enable: "{{pluginName}} 활성화",
                enabled: "{{pluginName}} 활성화됨",
                disable: "{{pluginName}} 비활성화",
                disabled: "{{pluginName}} 비활성화됨",
                failed: "명령이 실패했습니다:",
                toggleFailed: "{{pluginName}}을(를) 변경할 수 없습니다.",
                pluginSettings: "{{pluginName}} 설정",
                untitled: "익명 명령",
                new: "새 명령",
                error: {
                    enter: "명령 ID를 입력하거나 아래에서 선택하세요.",
                    noCommand: "이 ID와 일치하는 명령이 없습니다."
                },
                discord: {
                    account: "내 계정 열기",
                    privacy: "데이터 및 개인 정보 보호 열기",
                    notifications: "알림 켜기",
                    voice: "오디오 및 비디오 켜기",
                    text: "텍스트 및 이미지 열기",
                    appearance: "보기 열기",
                    accessibility: "개방형 접근성",
                    keybinds: "키 바인딩 켜기",
                    advanced: "고급 설정 열기",
                },
                updates: {
                    check: {
                        label: "업데이트 확인",
                        description: "Plexcord 업데이트 확인",
                        one: "업데이트를 사용할 수 있습니다.",
                        multiple: "{{count}} 업데이트 사용 가능",
                        none: "업데이트 없음",
                        failed: "업데이트를 확인하지 못했습니다."
                    },
                    changelog: {
                        label: "변경 내역 보기",
                        description: "Plexcord가 변경 로그를 엽니다"
                    }
                },
                read: {
                    mark: {
                        label: "{{channelLabel}} 읽음으로 표시"
                    }
                },
                pin: {
                    open: {
                        label: "{{channelLabel}} 핀 켜기"
                    },
                    toggle: {
                        label: "마지막 명령에 고정 전환"
                    }
                },
                channel: {
                    mute: {
                        label: "{{channelLabel}} 지원",
                        oneHour: "1시간 동안 {{channelLabel}} 채널 음소거",
                        untilTomorrow: "내일까지 {{channelLabel}} 채널 음소거",
                    },
                    unmute: {
                        label: "{{channelLabel}} 음소거 해제",
                    },
                    reopen: {
                        label: "마지막으로 닫은 DM 다시 열기"
                    },
                    dm: {
                        open: {
                            label: "{{userLabel}}님과의 DM 열기"
                        }
                    }
                },
                guild: {
                    settings: {
                        label: "{{guildLabel}} 설정 열기"
                    },
                    navigate: {
                        label: "{{guildLabel}} 서버로 이동"
                    }
                },
                session: {
                    thirtyMinutesDnd: "30분 방해 금지",
                    oneHourDnd: "1시간 방해 금지",
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
                        label: "데스크톱 알림 지우기"
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
                    description: "최근 실행된 명령을 표시합니다.",
                    rerun: "마지막 명령 다시 실행"
                },
                plugin: {
                    reload: {
                        label: "모든 플러그인 재설치",
                        description: "모든 활성 플러그인을 즉시 다시 로드하려고 시도합니다."
                    },
                    enable: {
                        label: "모든 플러그인 활성화"
                    },
                    disable: {
                        label: "불필요한 플러그인 모두 비활성화"
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
                searchPlaceholder: "명령 검색",
                noCommand: "명령을 찾을 수 없습니다",
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
                        noCommand: "명령을 찾을 수 없습니다",
                        pin: "핀 명령",
                        unpin: "고정 해제"
                    },
                    target: {
                        label: "대상 명령 ID",
                        placeholder: "명령 ID를 입력하세요",
                        choose: "명령 선택"
                    },
                    custom: {
                        label: "특수 명령",
                        description: "1) 명령 이름 지정 · 2) 선택적 설명/키워드/태그/범주 추가 · 3) 작업을 선택하고 세부 정보를 입력합니다(별칭 및 매크로의 ID는 기존 팔레트 명령과 일치해야 합니다).",
                        auto: "자동(기본값)",
                        expand: "확장하다",
                        collapse: "무너지다",
                        collapsed: {
                            label: "표",
                            description: "표시 이름",
                            advanced: {
                                hide: "고급 옵션 숨기기",
                                show: "고급 옵션 표시"
                            },
                            subtitle: {
                                label: "설명",
                                placeholder: "선택적 부제목"
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
                    noSelected: "페이지가 선택되지 않았습니다.",
                    current: "현재 페이지",
                    choose: "페이지 선택..."
                },
                url: {
                    url: "URL",
                    error: "http:// 또는 https:// 링크를 사용하세요.",
                    valid: "유효한 URL을 입력하세요.",
                    open: {
                        external: "외부에서 열다",
                    }
                },
                macro: {
                    sequence: {
                        label: "스크립트",
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
                core: "해바라기 씨",
                navigation: "산책",
                utility: "차량",
                developer: "개발자",
                customization: "맞춤화",
                plugins: "플러그인",
                session: "세션",
                context: "문맥",
                custom: "특별한",
                guilds: "서버",
                friends: "친구",
                other: "다른"
            },
            toast: {
                chat: {
                    button: {
                        unableToFind: "채팅 버튼 '{{label}}'을(를) 찾을 수 없습니다.",
                        failedToTrigger: "{{label}}을(를) 트리거할 수 없습니다.",
                        activated: "{{라벨}}이(가) 활성화되었습니다."
                    }
                },
                channel: {
                    mute: {
                        unavailable: "채널 음소거 제어를 사용할 수 없습니다.",
                        muted: "채널이 무음화되었습니다.",
                        unmuted: "채널이 음소거되었습니다.",
                        failed: "채널 음소거 상태를 업데이트할 수 없습니다."
                    },
                    dm: {
                        no: "이 세션에는 기록된 DM 마감이 없습니다.",
                        reOpened: "마지막으로 닫았던 DM이 다시 열렸습니다.",
                        noAvailable: "DM은 더 이상 받으실 수 없습니다."
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
                        unavailable: "서버 음소거 제어를 사용할 수 없습니다.",
                        muted: "서버가 조용해졌습니다.",
                        unmuted: "서버 음소거가 제거되었습니다.",
                        failed: "서버 음소거 상태를 업데이트할 수 없습니다."
                    },
                    settings: {
                        unable: "서버 설정을 열 수 없습니다.",
                    }
                },
                panel: {
                    pin: {
                        unable: "고정 패널을 열 수 없습니다.",
                    }
                },
                status: {
                    reset: {
                        canceled: "예정된 상태 재설정이 취소되었습니다.",
                        unableToChange: "지금은 상태를 변경할 수 없습니다.",
                        reverted: "상태는 {{status}}로 반환됩니다.",
                        dnd: "{{duration}}분 동안 방해하지 마세요."
                    },
                    change: {
                        unableToChange: "지금은 상태를 변경할 수 없습니다.",
                        changed: "상태가 {{상태}}로 변경되었습니다."
                    }
                },
                read: {
                    marked: "{{channelLabel}}이(가) 읽음으로 표시되었습니다.",
                    failed: "채널을 읽음으로 표시할 수 없습니다."
                },
                route: {
                    unable: "{{destination}}을(를) 열 수 없습니다.",
                },
                notification: {
                    cleared: "모든 알림이 삭제되었습니다.",
                    failed: "알림을 삭제할 수 없습니다.",
                    notSupported: "알림 지우기는 지원되지 않습니다."
                },
                streamerMode: {
                    enabled: "브로드캐스터 모드가 활성화되었습니다.",
                    disabled: "브로드캐스터 모드가 비활성화되었습니다.",
                },
                voice: {
                    micToggle: {
                        muted: "마이크가 조용해졌습니다.",
                        unmuted: "마이크가 켜져 있습니다."
                    },
                    deafenToggle: {
                        deafened: "당신은 이제 귀머거리입니다.",
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
                        label: "{{pluginName}}을(를) 다시 설치하려면 재부팅이 필요합니다."
                    },
                    stop: {
                        failed: "{{pluginName}}을(를) 중지할 수 없습니다."
                    },
                    restart: {
                        failed: "{{pluginName}}을(를) 다시 시작하지 못했습니다."
                    },
                    reload: {
                        label: "{{pluginName}}이(가) 다시 로드되었습니다.",
                        noPlugin: "플러그인이 다시 설치되지 않았습니다.",
                        reloaded: "{{count}}개의 플러그인이 다시 설치되었습니다."
                    },
                    toggle: {
                        enabled: "{{변경됨}} 플러그인이 활성화되었습니다.",
                        disabled: "{{변경됨}} 플러그인이 비활성화되었습니다.",
                        noChanged: "플러그인의 상태는 변경되지 않았습니다."
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
                    current: "현재 서버",
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
                    description: "팔레트 보기",
                    classic: "권위 있는",
                    polished: "광택(현대)"
                },
                showTags: {
                    label: "태그 표시",
                    description: "명령 레이블 표시"
                },
                enableTagFilter: {
                    label: "태그 필터 활성화",
                    description: "태그 필터 표시줄 표시"
                },
                customCommands: {
                    label: "특수 명령",
                    description: "사용자 정의 명령 팔레트 항목 관리"
                }
            },
            template: {
                alias: {
                    label: "닉네임 명령",
                    description: "기존 명령을 반영합니다."
                },
                settings: {
                    label: "설정",
                    description: "디스코드 설정 열기"
                },
                url: {
                    label: "연결",
                    description: "외부 URL을 엽니다"
                },
                macro: {
                    label: "매크로",
                    description: "일련의 명령을 실행합니다."
                }
            }
        },
        consoleJanitor: {
            name: "콘솔청소부",
            description: "성가신 콘솔 메시지/오류를 비활성화합니다.",
            option: {
                disableLoggers: {
                    label: "로거 비활성화",
                    description: "Discord의 로거를 비활성화합니다."
                },
                disableSpotifyLogger: {
                    label: "Spotify 로거 비활성화",
                    description: "계정 정보 및 액세스 키를 유출하는 Spotify 로거를 비활성화합니다."
                },
                whitelistedLoggers: {
                    label: "화이트리스트에 등록된 로거",
                    description: "다른 로거가 숨겨져 있어도 허용되는 세미콜론(;)으로 구분된 로거 목록"
                },
                allowLevel: {
                    label: "허용 수준",
                    description: "항상 이러한 유형의 로거를 허용합니다.",
                    filter: "필터 목록"
                }
            }
        },
        consoleShortcuts: {
            name: "콘솔 단축키",
            description: "창의 많은 항목에 대한 더 짧은 바로가기를 추가합니다. 목록에 대해 `shortcutList`를 실행합니다."
        },
        contentWarning: {
            name: "내용경고",
            description: "기본적으로 특정 트리거 단어가 흐리게 표시되도록 설정합니다. 흐린 내용을 클릭하면 내용이 표시됩니다.",
            option: {
                flagged: {
                    label: "표시",
                    flagged: "표시된 단어",
                    placeholder: "단어"
                },
                onClick: {
                    label: "그것을 클릭하세요",
                    description: "마우스 오버 시뿐만 아니라 클릭 시 콘텐츠 표시"
                }
            }
        },
        copyEmojiMarkdown: {
            name: "복사EmojiMarkdown",
            description: "이모티콘을 서식 있는 텍스트로 복사할 수 있습니다(<a:blob_pwease:1402403381900742737>).",
            option: {
                copyUnicode: {
                    label: "유니코드 복사본",
                    description: "기본 이모티콘의 경우 :name: 대신 원시 유니코드 문자를 복사합니다(👽)."
                }
            },
            context: {
                copy: "이모티콘 마크다운 복사"
            },
            toast: {
                success: "성공적인! 이모티콘의 마크다운이 복사되었습니다."
            }
        },
        copyFileContents: {
            name: "파일내용복사",
            description: "내용을 복사할 수 있도록 텍스트 첨부 파일에 버튼을 추가합니다.",
            copied: "복사되었습니다!",
            large: "파일이 너무 커서 복사할 수 없습니다.",
            copyFileContents: "파일 내용 복사"
        },
        copyProfileColors: {
            name: "프로필색상 복사",
            description: "사용자의 프로필 그라데이션 색상을 클립보드에 복사하는 플러그인입니다.",
            copy: "프로필 색상 복사",
            toast: {
                noColor: "프로필 색상을 찾을 수 없습니다!",
                copied: "프로필 색상이 클립보드에 복사되었습니다!",
                error: "프로필 색상을 복사하는 중 오류가 발생했습니다."
            }
        },
        copyStatusUrls: {
            name: "CopyStatusUrl",
            description: "마우스 오른쪽 버튼을 클릭하면 사용자의 상태 URL 복사",
            toast: {
                copied: "URL 복사됨",
                error: "URL을 복사하는 중에 오류가 발생했습니다. 자세한 내용은 콘솔을 확인하세요."
            }
        },
        copyStickerLinks: {
            name: "복사스티커링크",
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
            name: "사용자 언급 복사",
            description: "사용자의 멘션을 복사할 수 있는 버튼을 사용자 상황에 맞는 메뉴에 추가합니다. ValidUser와 가장 잘 작동합니다.",
            context: {
                copy: "사용자 멘션 복사"
            }
        },
        copyUserURLs: {
            name: "사용자 URL 복사",
            description: "사용자 컨텍스트 메뉴에 '사용자 URL 복사' 옵션을 추가합니다.",
            context: {
                copy: "사용자 URL 복사"
            }
        },
        crashHandler: {
            name: "크래시 핸들러",
            description: "재부팅할 필요 없이 충돌을 관리하고 가능한 경우 복구할 수 있는 도우미 플러그인",
            option: {
                attemptToPreventCrashes: {
                    label: "충돌 방지를 위해 노력하세요",
                    description: "Discord 충돌을 방지하려고 하시나요?"
                },
                attemptToNavigateToHome: {
                    label: "홈 페이지로 리디렉션을 시도합니다.",
                    description: "충돌 후 복구 시 기본 탭으로 리디렉션을 시도합니다."
                }
            },
            toast: {
                crashed: {
                    title: "디스코드가 터졌습니다!",
                    body: "죄송합니다 :( 짧은 시간에 Discord가 두 번 충돌하여 복구 시도가 이루어지지 않습니다. 여기를 클릭하고 지원 서버에 참여하세요!",
                    update: "아뇨, Discord가 방금 충돌했습니다… 하지만 좋은 소식은 이 문제를 해결할 수 있는 Plexcord 업데이트가 있다는 것입니다! 지금 업데이트하시겠습니까?",
                    recover: "복구 중... 여기를 클릭하고 지원 서버에 참여하세요!",
                    invalid: "초대 링크가 잘못되었거나 만료되었습니다."
                }
            }
        },
        ctrlEnterSend: {
            name: "CtrlEnter보내기",
            description: "Ctrl+Enter를 사용하여 메시지 보내기(사용자 정의 가능)",
            option: {
                submitRule: {
                    label: "게시 규칙",
                    description: "메시지 전송 방법",
                    ctrlEnter: "Ctrl+Enter(새 줄의 경우 Enter 또는 Shift+Enter)(macOS에서는 cmd+enter)",
                    shiftEnter: "Shift+Enter(새 줄을 입력하려면 Enter)",
                    enter: "Enter(새 줄은 Shift+Enter, Discord 기본값)"
                },
                sendMessageInTheMiddleOfACodeBlock: {
                    label: "코드 블록 중간에 메시지 보내기",
                    description: "코드 블록 중간에 메시지 보내기"
                }
            }
        },
        cursorBuddy: {
            name: "커서버디",
            description: "커서를 따라가는 스프라이트를 추가합니다.",
            modal: {
                furColor: "모피 색상",
                outlineColor: "아나하트 렌기"
            },
            option: {
                buddy: {
                    label: "친구",
                    description: "커서 친구를 선택하세요",
                    oneko: "좋은",
                    fathorse: "뚱뚱한 말"
                },
                speed: {
                    label: "속도",
                    description: "친구의 속도",
                    invalid: "속도는 0보다 커야 합니다."
                },
                fps: {
                    label: "프레임 속도(FPS)",
                    description: "친구의 프레임 속도",
                    invalid: "프레임 속도는 0보다 커야 합니다."
                },
                onekoSection: {
                    label: "좋은"
                },
                furColor: {
                    label: "모피 색상",
                    description: "oneko의 모피 육각형 색상"
                },
                outlineColor: {
                    label: "아나하트 렌기",
                    description: "Oneko의 윤곽선 16진수 색상"
                },
                fathorseSection: {
                    label: "뚱뚱한 말"
                },
                size: {
                    label: "차원",
                    description: "뚱뚱한 말의 크기",
                    invalid: "크기는 0보다 커야 합니다."
                },
                fade: {
                    label: "페이딩",
                    description: "커서가 접근할 때 말이 페이드되는지 여부"
                },
                freeroam: {
                    label: "자유 로밍",
                    description: "말이 유휴 상태일 때 자유롭게 돌아다닐 수 있는지 여부"
                },
                shake: {
                    label: "해임",
                    description: "말이 걸을 때 창문을 흔드는지 여부"
                }
            }
        },
        customFolderIcons: {
            name: "사용자 정의 폴더아이콘",
            description: "모든 png로 폴더 아이콘을 사용자 정의하세요",
            option: {
                solidIcon: {
                    label: "플랫 아이콘",
                    description: "이미지 배경으로 일반 배경을 사용하세요."
                },
                folderIcons: {
                    label: "폴더 아이콘",
                    description: "폴더 아이콘 설정"
                }
            },
            modal: {
                change: "폴더 아이콘 크기 변경",
                save: "구하다",
                unset: "제거하다",
                set: "새 아이콘 설정",
                hover: "폴더를 새로 고치도록 설정한 후 폴더 위로 마우스를 가져가야 할 수도 있습니다."
            }
        },
        customIdle: {
            name: "CustomIdle",
            description: "Discord가 유휴 모드로 들어가기 전의 시간을 설정할 수 있습니다(또는 자동 유휴 모드를 비활성화합니다).",
            backOnline: "돌아온 것을 환영합니다! 버튼을 클릭하면 온라인으로 전환됩니다. 다시 로드될 때까지 유휴 상태를 유지하려면 X를 클릭하세요.",
            exit: "유휴 상태 종료",
            option: {
                idleTimeout: {
                    label: "유휴 시간 초과",
                    description: "Discord가 유휴 모드로 전환되기까지의 시간(0분은 자동 유휴 모드를 비활성화함)"
                },
                remainInIdle: {
                    label: "유휴 상태 유지",
                    description: "Discord로 돌아가면 온라인 접속을 확인할 때까지 유휴 상태를 유지하세요."
                }
            }
        },
        customRPC: {
            name: "커스텀RPC",
            description: "Discord 프로필에 완전히 사용자 정의 가능한 Rich Presence를 추가하세요",
            goTo: "{{portal}}로 이동하여 애플리케이션을 생성하고 애플리케이션 ID를 받으세요.",
            upload: "Rich Presence 탭에서 이미지를 업로드하여 이미지 키를 받으세요.",
            image: "이미지 링크를 사용하려면 이미지를 다운로드하여 {{imgur}}에 업로드한 다음 이미지를 마우스 오른쪽 버튼으로 클릭하고 '이미지 주소 복사'를 사용하여 링크를 얻으세요.",
            button: "귀하는 귀하의 프로필에서 귀하의 버튼을 볼 수 없지만, 다른 사람들은 정상적으로 볼 수 있습니다.",
            font: "이상한 유니코드 문자('𝖇ö𝖞𝖑𝖊 𝖞𝖆𝖟ı𝖑𝖆𝖗')로 인해 리치 프레즌스가 표시되지 않을 수 있습니다. 대신 일반 문자를 사용해 보세요.",
            placeholder: "값을 입력하세요",
            select: "옵션을 선택하세요",
            error: {
                appIdInvalid: "애플리케이션 ID가 유효한 숫자가 아닙니다.",
                notice: "경고",
                sharing: "이벤트 공유가 활성화되지 않았습니다. 사람들은 귀하의 비공개 리치 프레즌스를 볼 수 없습니다!",
                enable: "활성화하다",
                validStream: "게시물 링크는 유효한 URL이어야 합니다.",
                mustBeURL: "유효한 URL이어야 합니다.",
                streamCharacters: "게시물 링크는 512자를 초과할 수 없습니다.",
                dontUse: "디스코드 링크를 사용하지 마세요. 대신 Imgur 이미지 링크를 사용하세요.",
                imgur: "Imgur 링크는 이미지에 직접 연결되어야 합니다(예: https://i.imgur.com/...). 이미지를 마우스 오른쪽 버튼으로 클릭한 후 '이미지 주소 복사'를 클릭하세요.",
                tenor: "Tenor 링크는 이미지에 직접 연결되어야 합니다(예: https://media.tenor.com/...). GIF를 마우스 오른쪽 버튼으로 클릭한 후 '이미지 주소 복사'를 클릭하세요.",
                required: "이 필드는 필수입니다.",
                tooLong: "{{maxLength}}자를 초과할 수 없습니다.",
                mustBeNumber: "숫자여야 합니다.",
                mustBePositive: "양수여야 합니다.",
                startTimeInvalid: "시작 시간은 0보다 커야 합니다.",
                endTimeInvalid: "종료 시간은 0보다 커야 합니다."
            },
            option: {
                appId: {
                    label: "애플리케이션 ID",
                    description: "앱 ID (필수)"
                },
                appName: {
                    label: "애플리케이션 이름",
                    description: "앱 이름(필수)"
                },
                details: {
                    label: "세부 사항",
                    description: "세부정보(1행)"
                },
                detailsURL: {
                    label: "세부정보 URL",
                    description: "자세한 내용을 보려면 클릭 가능한 URL"
                },
                state: {
                    label: "듀럼",
                    description: "상태(2행)"
                },
                stateURL: {
                    label: "상태 URL",
                    description: "상태를 확인할 수 있는 클릭 가능한 URL"
                },
                partySize: {
                    label: "그룹 규모",
                    description: "현재 그룹 크기(최대 그룹 크기와 함께 사용해야 함)"
                },
                partyMax: {
                    label: "최대 그룹 크기",
                    description: "최대 그룹 크기(현재 그룹 크기와 함께 사용해야 함)"
                },
                type: {
                    label: "이벤트 유형",
                    description: "이벤트 유형",
                    playing: "연주하다",
                    streaming: "방송",
                    listening: "청취",
                    watching: "보고 있다",
                    competing: "경마"
                },
                streamLink: {
                    label: "게시물 링크",
                    description: "Twitch.tv 또는 Youtube.com 링크(방송 이벤트 유형에만 해당)"
                },
                timestampMode: {
                    label: "타임스탬프 모드",
                    description: "타임스탬프가 나타내는 내용",
                    none: "없음",
                    sinceDiscordOpen: "디스코드 오픈 이후",
                    sameAsCurrentTime: "현재 시간과 동일(24시간 이후에는 재설정되지 않음)",
                    custom: "특별한 시간"
                },
                startTime: {
                    label: "시작 시간(밀리초)",
                    description: "시작 타임스탬프(사용자 정의 시간 모드에만 해당)"
                },
                endTime: {
                    label: "종료 시간(밀리초)",
                    description: "종료 타임스탬프(사용자 정의 시간 모드에만 해당)"
                },
                imageBig: {
                    label: "빅 비주얼 키",
                    description: "대형 시각적 키(리치 프레즌스 탭에 설치해야 함)"
                },
                imageBigTooltip: {
                    label: "큰 시각적 단서",
                    description: "큰 이미지 위에 마우스를 올리면 나타나는 팁"
                },
                imageBigURL: {
                    label: "큰 이미지 URL",
                    description: "큰 이미지 클릭 가능한 URL"
                },
                imageSmall: {
                    label: "소형 비주얼 스위치",
                    description: "작은 시각적 키(리치 프레즌스 탭에 설치해야 함)"
                },
                imageSmallTooltip: {
                    label: "작은 시각적 단서",
                    description: "썸네일 이미지 위에 마우스를 올리면 나타나는 팁"
                },
                imageSmallURL: {
                    label: "썸네일 이미지 URL",
                    description: "작은 이미지 클릭 가능한 URL"
                },
                buttonOneText: {
                    label: "부톤 1 메트니",
                    description: "버튼 1 메트니"
                },
                buttonOneURL: {
                    label: "버튼 1 URL",
                    description: "버튼 1 연결"
                },
                buttonTwoText: {
                    label: "부톤 2 메트니",
                    description: "버튼 2 메트니"
                },
                buttonTwoURL: {
                    label: "버튼 2 URL",
                    description: "버튼 2 연결"
                }
            }
        },
        customSounds: {
            name: "커스텀사운드",
            description: "Discord의 사운드를 사용자 정의하세요.",
            search: "소리 검색",
            placeholder: "이름이나 아이디로 검색하세요",
            import: "이체 아크타르",
            export: "내보내다",
            reset: "모두 재설정",
            debug: "디버깅",
            toast: {
                error: "맞춤 오디오 파일을 로드하는 중에 오류가 발생했습니다.",
                exported: "{{count}}개의 설정을 내보냈습니다(오디오 파일은 포함되지 않음)",
                imported: "설정을 성공적으로 가져왔습니다.",
                importError: "설정을 가져오는 중에 오류가 발생했습니다. 자세한 내용은 콘솔을 확인하세요.",
                reset: "모든 소리가 성공적으로 재설정되었습니다!",
                overrideDescription: "{{soundName}} 소리가 변경되었습니다.",
                previewSound: "사운드를 재생하는 동안 오류가 발생했습니다.",
                playing: "사용자 정의 사운드를 재생할 수 없습니다. 파일이 손상되었을 수 있습니다.",
                invalidFile: "미리보기용 맞춤 오디오 파일이 없습니다.",
                uploaded: "파일이 성공적으로 업로드되었습니다: {{fileName}}",
                uploadedError: "파일을 업로드하는 동안 오류가 발생했습니다: {{error}}",
                invalidExtension: "파일 형식이 잘못되었습니다. 오디오 파일을 업로드해주세요.",
                uploading: "파일 로드 중...",
                deleted: "파일이 성공적으로 삭제되었습니다",
                deleteError: "파일을 삭제하는 동안 오류가 발생했습니다.",
                loadingError: "맞춤 오디오 파일을 로드하는 중에 오류가 발생했습니다."
            },
            button: {
                preview: "시사",
                stop: "흐름",
                volume: "세스",
                soundSource: "오디오 소스",
                customFile: "특수 파일",
                uploadNew: "새로운 업로드",
                delete: "선택한 파일 삭제"
            },
            option: {
                default: "기본",
                custom: "특별한",
                select: "파일을 선택하세요..."
            },
            type: {
                activityEnd: "이벤트가 종료되었습니다",
                activityLaunch: "이벤트가 시작되었습니다",
                activityUserJoin: "사용자가 이벤트에 참여했습니다.",
                activityUserLeft: "사용자가 이벤트를 떠났습니다.",
                asmrMessage: "ASMR 메시지",
                bitMessage: "비트 메시지",
                bopMessage: "밥 메시지",
                callCalling: "검색 진행 중",
                callRinging: "전화벨 울림",
                clipError: "클립 오류",
                clipSave: "클립이 저장되었습니다",
                ddrDown: "DDR 다운",
                ddrLeft: "DDR 솔",
                ddrRight: "DDR 오른쪽",
                ddrUp: "DDR 업",
                deafen: "귀가 들리지 않게 하다",
                discodo: "디스크",
                disconnect: "연결이 끊김",
                duckyMessage: "덕키 메시지",
                hangStatusSelect: "일시중단 상태 선택",
                highfiveClap: "하이파이브 박수",
                highfiveWhistle: "하이파이브 휘파람",
                humanMan: "인간 남자",
                lofiMessage: "LoFi 메시지",
                mention1: "언급 1(@role)",
                mention2: "멘션 2(@everyone)",
                mention3: "멘션 3(@여기)",
                message1: "메시지 1(일반)",
                message2: "메시지 2(서버의 응답)",
                message3: "메시지 3(DM 및 그룹 DM)",
                mute: "무음",
                overlayUnlock: "레이어 잠금 해제됨",
                poggermodeAchievement: "포거모드 업적",
                poggermodeApplause: "포거모드 박수",
                poggermodeEnabled: "포거 모드 활성화",
                poggermodeMessage: "포거모드 메시지",
                pttStart: "PTT 시작",
                pttStop: "PTT 정지",
                reconnect: "다시 연결",
                robotMan: "로봇 아담",
                stageWaiting: "기다리는 장면",
                streamEnded: "방송 종료됨",
                streamStarted: "방송이 시작되었습니다",
                streamUserJoined: "사용자가 브로드캐스트에 참여했습니다.",
                streamUserLeft: "사용자가 방송을 떠났습니다.",
                success: "성공적인",
                undeafen: "귀머거리 제거",
                unmute: "침묵 제거",
                userJoin: "사용자가 가입했습니다",
                userLeave: "사용자 왼쪽",
                userMoved: "사용자가 이동됨",
                vibingWumpus: "Wumpus가 붙어 있음"
            }
        },
        customTimestamps: {
            name: "사용자 정의 타임스탬프",
            description: "메시지 및 도구 설명의 사용자 정의 타임스탬프",
            demo: {
                cozy: "캐주얼 형식으로 전환하려면 나를 클릭하세요.",
                compact: "압축 형식으로 전환하려면 나를 클릭하세요.",
                lastWeek: "이 메시지는 지난 주에 전송되었습니다.",
                hover: "타임스탬프 위로 마우스를 가져가면 도구 설명 형식을 볼 수 있습니다.",
                edit: "아래 형식을 편집하세요. 여기에서 실시간으로 업데이트된 내용을 확인하세요."
            },
            modal: {
                title: "사용 방법:",
                moment: "Moment.js 형식화 문서",
                hint: "또한 항목에 다음을 사용할 수 있습니다.",
                calendar: "예를 들어 동적 날짜 형식을 활성화합니다.",
                today: "오늘",
                yesterday: "어제",
                relative: "다음과 같은 시간을 제공합니다.",
                relativeTime: "4시간 전",
                preview: "시사",
                format: "달력 형식",
                howTo: "위의 타임스탬프에 사용될 때 [calendar] 값의 형식을 지정하는 방법은 다음과 같습니다."
            },
            option: {
                formats: {
                    label: "형식",
                    description: "타임스탬프 형식 사용자 정의",
                },
                cozyFormat: {
                    label: "릴리프 모드",
                    description: "메시지의 편안한 모드에 사용할 시간 형식"
                },
                compactFormat: {
                    label: "컴팩트 모드",
                    description: "압축 모드 및 메시지 위로 마우스를 가져갈 때 사용할 시간 형식"
                },
                tooltipFormat: {
                    label: "도구 설명",
                    description: "도구 설명에 사용할 시간 형식"
                },
                ariaLabelFormat: {
                    label: "아리아 라벨",
                    description: "Aria 태그에 사용할 시간 형식"
                },
                sameDayFormat: {
                    label: "같은 날",
                    description: "[캘린더] 오늘의 형식",
                    default: "[버그] HH:mm:ss"
                },
                lastDayFormat: {
                    label: "어제",
                    description: "[캘린더] 어제의 형식",
                    default: "[얇음] HH:mm:ss"
                },
                lastWeekFormat: {
                    label: "지난주",
                    description: "[캘린더] 지난주 형식"
                },
                sameElseFormat: {
                    label: "나이가 많은",
                    description: "[캘린더] 이전 날짜의 형식"
                }
            }
        },
        customUserColors: {
            name: "사용자 정의사용자 색상",
            description: "어디서나 모든 사용자에게 사용자 정의 색상을 추가할 수 있습니다! TypingTweaks 및 roleColorEverywhere와 함께 사용하는 것이 좋습니다.",
            option: {
                dmList: {
                    label: "DM 목록",
                    description: "DM 목록에 특수 색상이 지정된 사용자의 이름이 색상으로 지정됩니다."
                },
                colorInServers: {
                    label: "서버의 색상",
                    description: "서버에서도 이름 색상을 변경해야 합니까?"
                }
            },
            context: {
                setColor: "색상 조정"
            },
            modal: {
                custom: "사용자 정의 색상",
                pick: "색깔을 골라라",
                delete: "기록 삭제",
                save: "구하다"
            }
        },
        dearrow: {
            name: "디에로우",
            description: "Dearrow가 제공하는 YouTube 삽입 제목과 미리보기 이미지를 덜 선정적으로 만듭니다.",
            option: {
                hideButton: {
                    label: "숨기기 버튼",
                    description: "YouTube 삽입에서 Dearrow 버튼을 숨깁니다."
                },
                replaceElements: {
                    label: "항목 변경",
                    description: "대체할 삽입 요소를 선택하세요.",
                    everything: "모든 것(제목 및 썸네일)",
                    title: "제목",
                    thumbnail: "썸네일"
                },
                dearrowByDefault: {
                    label: "기본적으로 Dearrow",
                    description: "자동으로 비디오를 삭제하세요"
                }
            },
            tooltip: {
                dearrowed: "Dearrow가 이 삽입에 적용되었습니다. 복원하려면 클릭하세요.",
                dearrow: "적용하려면 클릭하세요"
            }
        },
        declutter: {
            name: "깔끔하게 정리하다",
            description: "프로필 효과, 상점 탭, 파워업 등과 같은 불필요한 UI 요소를 제거하여 Discord를 정리합니다.",
            option: {
                userProfileHeader: {
                    label: "사용자 프로필"
                },
                removeNameplate: {
                    label: "명판 제거",
                    description: "명판을 제거합니다."
                },
                removeProfileEffect: {
                    label: "프로필 효과 제거",
                    description: "프로필을 열 때 나타나는 애니메이션 효과를 제거합니다."
                },
                removeClanTag: {
                    label: "클랜 태그 제거",
                    description: "클랜 태그를 제거합니다."
                },
                alwaysShowUsername: {
                    label: "항상 사용자 이름 표시",
                    description: "항상 상태 대신 사용자 이름이 표시됩니다."
                },
                accessibilityNotice: {
                    label: "접근성 경고",
                    description: "Discord에는 이미 접근성 설정에 사용자 이름 스타일 옵션이 내장되어 있습니다."
                },
                friendsListHeader: {
                    label: "친구/DM 목록 위"
                },
                removeShopAboveDM: {
                    label: "DM 목록 위의 상점 제거",
                    description: "DM 목록 위의 스토어 버튼을 제거합니다."
                },
                removeQuestsAboveDM: {
                    label: "DM 목록에서 작업 제거",
                    description: "DM 목록 위의 작업 버튼을 제거합니다."
                },
                miscHeader: {
                    label: "다양한"
                },
                removeServerBoostInfo: {
                    label: "서버 부스트 정보 제거",
                    description: "채널 목록 상단의 서버 강화 정보를 제거합니다."
                },
                removeBillingSettings: {
                    label: "결제 설정 제거",
                    description: "결제(송장) 설정을 제거합니다."
                },
                removeGiftButton: {
                    label: "선물 버튼 제거",
                    description: "선물 보내기 버튼을 제거합니다."
                },
                removeUnavailableEmojiPicker: {
                    label: "사용할 수 없는 이모티콘 선택기 제거",
                    description: "이모티콘 선택기에서 접근할 수 없는 카테고리를 제거합니다."
                },
                removeAudioMenus: {
                    label: "사운드 메뉴 제거",
                    description: "음소거 및 청각 장애인 버튼 옆에 있는 화살표 메뉴를 제거합니다."
                },
                removeButtonTooltips: {
                    label: "버튼 힌트 제거",
                    description: "버튼에 나타나는 도구 설명을 제거합니다."
                }
            }
        },
        decodeBase64: {
            name: "DecodeBase64",
            description: "메시지의 base64 콘텐츠를 디코딩하고 디코딩된 콘텐츠를 복사합니다.",
            right: {
                decode: "Copy Solved(왼쪽 클릭) / Base64 Solve(오른쪽 클릭)",
                copy: "Base64 디코드(왼쪽 클릭) / 디코딩 복사(오른쪽 클릭)"
            },
            option: {
                clickMethod: {
                    label: "클릭 방법",
                    description: "모든 메시지의 base64 콘텐츠를 디코딩하려면 버튼의 동작을 변경하세요.",
                    left: "Base64 콘텐츠를 디코딩하려면 마우스 왼쪽 버튼을 클릭하세요.",
                    right: "Base64 콘텐츠를 디코딩하려면 마우스 오른쪽 버튼을 클릭하세요."
                }
            },
            modal: {
                title: "디코딩된 Base64 콘텐츠",
                content: "용해된 콘텐츠",
                copy: "해결된 콘텐츠 복사 {{index}}",
                copied: "해결 콘텐츠가 클립보드에 복사되었습니다!"
            }
        },
        decor: {
            name: "장식",
            description: "나만의 맞춤형 아바타 장식을 만들어 사용하거나 사전 설정에서 마음에 드는 것을 선택하세요.",
            presetPart: "{{name}} 사전 설정의 일부",
            createdBy: "작성자: {{author}}",
            copy: "프리셋 ID 복사",
            file: "파일",
            your: {
                title: "장식물",
                subtitle: "마우스 오른쪽 버튼을 클릭하면 자신이 만든 장식을 삭제할 수 있습니다."
            },
            option: {
                changeDecoration: {
                    label: "장식 변경",
                    description: "아바타 장식을 변경하려면 장식을 활성화하고 클라이언트를 다시 시작하세요.",
                    also: "{{프로필}} 페이지에서도 장식 장식에 액세스할 수 있습니다.",
                    profiles: "프로필"
                },
                baseUrl: {
                    label: "기본 URL",
                    description: "Dekor API URL"
                },
                agreedToGuidelines: {
                    label: "나는 규칙을 받아들였습니다",
                    description: "허용되는 규칙"
                }
            },
            context: {
                decorationOptions: "장식 옵션",
                copyHash: "장식 해시 복사",
                deleteDecoration: "장식품 삭제"
            },
            alert: {
                delete: {
                    title: "장식품 삭제",
                    body: "{{장식}} 장식을 삭제하시겠습니까?",
                    confirm: "실",
                    cancel: "취소"
                },
                logout: {
                    title: "로그아웃",
                    body: "정말로 Dekor에서 로그아웃하시겠습니까?",
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
                continue: "데밤 엣",
                back: "돌아가기"
            },
            tooltip: {
                pendingReview: "이미 검토 중인 장식품이 있습니다.",
                pending: "검토 대기 중"
            },
            join: {
                tooltip: "Decor의 Discord 서버에 가입하여 장식을 검토하고 새로운 사전 설정이 출시되면 알림을 받으세요.",
                button: "디스코드 서버"
            },
            create: {
                title: "장식품 만들기",
                notViolate: "제출하기 전에 장식이 {{guidelines}}을 위반하지 않는지 확인하세요.",
                guidelines: "규칙",
                file: "파일은 APNG 또는 PNG여야 합니다.",
                fileHolder: "파일 선택",
                name: "이 이름은 이 장식품을 언급할 때 사용됩니다.",
                nameHolder: "컴패니언 큐브",
                nameTitle: "광고"
            },
            help: {
                update: "{{server}}에 가입하고 직접 메시지를 통해 장식 리뷰에 대한 업데이트를 받을 수 있도록 허용하세요.",
                server: "불화를 꾸미다"
            },
            guidelines: {
                hold: "기다리다",
                suspended: "장식을 제출하면 {{guidelines}}에 동의하는 것으로 간주됩니다. 이 규칙을 읽지 않으면 향후 더 많은 장식을 만들 수 있는 권리가 정지될 수 있습니다.",
                guidelines: "규칙"
            }
        },
        demonstration: {
            name: "데모",
            description: "테마 스크린샷을 찍기 위한 플러그인 - 이미지와 텍스트를 식별하는 검열 장치입니다.",
            toolbox: {
                toggle: "검열된"
            },
            keycode: "단축키를 변경하려면 {{keycode}}를 확인하세요!",
            this: "이 차량의",
            okay: "좋아요!",
            option: {
                keyBind: {
                    label: "단축키",
                    description: "누르면 테마가 켜지고 꺼지는 버튼"
                },
                soundVolume: {
                    label: "사운드 레벨",
                    description: "켜짐/꺼짐 소리의 볼륨(0 = 꺼짐)"
                },
                showConfirmationModal: {
                    label: "확인 창 표시",
                    description: "바로가기를 상기시키는 창 표시"
                }
            },
            switch: {
                note: "나중에 이 설정을 다시 사용 설정할 수 있습니다.",
                disable: "확인 창을 비활성화하시겠습니까?"
            },
            shortcut: "그러면 모든 텍스트가 검열됩니다! 이를 비활성화하는 바로가기를 기억하세요:"
        },
        devCompanion: {
            name: "DevCompanion",
            description: "개발자 보조 플러그인. 작동하지 않거나 이상하게 작동하는 것을 발견하면(버그일 가능성이 높음) MutanPlex에 태그하거나 DM으로 신고해 주세요. 감사합니다!",
            reconnect: "다시 연결",
            option: {
                notifyOnAutoConnect: {
                    label: "자동 연결 알림",
                    description: "Dev Companion이 자동으로 연결되면 알림을 표시하시겠습니까?"
                },
                usePatchedModule: {
                    label: "패치 모듈 사용",
                    description: "제거 요청의 경우 원본 대신 기존 패치 모듈(패치된 경우)로 응답하세요."
                },
                reloadAfterToggle: {
                    label: "재설치 후",
                    description: "플러그인 비활성화/활성화 명령을 받은 후 다시 설치하세요."
                }
            },
            toast: {
                title: "Dev Companion이 연결됨",
                connected: "웹소켓에 연결됨",
                disconnected: "Dev Companion 연결이 끊어졌습니다.",
                error: "개발 도우미 오류",
                reload: "재설치 필요",
                failed: "종속성 초기화 실패: {{실패}}",
                close: "4분의 1",
                stopping: "{{plugin}} 플러그인을 중지하는 중에 오류가 발생했습니다.",
                starting: "{{plugin}} 플러그인 초기화 오류",
                noMessage: "오류 메시지 없음",
                noReason: "이유가 제공되지 않음"
            }
        },
        disableCallIdle: {
            name: "비활성화통화유휴",
            description: "3분 후 DM 음성통화에서 자동으로 쫓겨나고 AFK 음성채널로 이동되는 기능을 비활성화합니다."
        },
        disableCameras: {
            name: "카메라 비활성화",
            description: "기본적으로 통화 중 카메라를 비활성화합니다."
        },
        discordDevBanner: {
            name: "DiscordDev배너",
            description: "빌드 ID 정보를 표시하는 Discord 개발자 배너를 활성화합니다.",
            about: "Discord 개발자 배너 형식입니다. 다음 변수를 사용할 수 있습니다.",
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
                    name: "플렉스코드 이름",
                    version: "Plexcord 버전(예: 1.0.0)",
                    hash: "Plexcord 구조 해시(예: 123456)",
                    platform: "플랫폼 Plexcord가 실행되는 플랫폼(예: Dev Build)"
                },
                plextron: {
                    title: "Plextron 사용자 정의 변수",
                    hashShort: "Plextron 짧은 구조 해시(예: 123456789)",
                    platformType: "Plextron이 실행되는 플랫폼 유형(예: Dev Build)"
                },
                client: {
                    title: "클라이언트 변수",
                    icon: "데스크탑 아이콘",
                    name: "클라이언트 이름(예: Discord Canary)",
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
            name: "필터하지 마세요",
            description: "메시지에 자동 중재 준비 목록에 있는 용어가 포함되어 있으면 경고합니다.",
            alert: {
                title: "잠깐 기다려요!",
                content: "메시지에 자동 조정 준비 목록에 있는 용어가 포함되어 있습니다. (용어 '{{트리거}}')",
                content2: "귀하의 메시지가 서버 중재자에 의해 차단되고 처리될 가능성이 높습니다.",
                confirm: "어쨌든 제출",
                cancel: "취소"
            }
        },
        dontRoundMyTimestamps: {
            name: "DontRoundMyTimestamps",
            description: "항상 상대 타임스탬프를 내림하여 7.6y가 8y 대신 7y가 되도록 합니다."
        },
        dragFavoriteEmotes: {
            name: "드래그좋아하는 감정표현",
            description: "즐겨찾는 이모티콘의 순서를 변경하는 드래그 앤 드롭 기능 추가"
        },
        dragify: {
            name: "드래그피",
            description: "사용자, 채널 또는 발표자를 채팅에 끌어서 놓아 멘션이나 초대를 추가하세요.",
            option: {
                userOutput: {
                    label: "사용자 출력",
                    description: "사용자 드롭아웃 출력.",
                    mention: "언급하지 마세요",
                    id: "사용자 ID(ID)"
                },
                channelOutput: {
                    label: "채널 출력",
                    description: "채널 릴리스 출력.",
                    mention: "#채널 멘션",
                    link: "채널 연결",
                },
                inviteExpireAfter: {
                    label: "초대 기간",
                    description: "초대링크의 유효기간입니다.",
                    never: "절대",
                    thirtyMinutes: "30분",
                    oneHour: "1 순간",
                    sixHours: "6 순간",
                    twelveHours: "12 순간",
                    oneDay: "1일",
                    sevenDays: "7일"
                },
                inviteMaxUses: {
                    label: "최대 사용 횟수",
                    description: "초대장의 최대 사용 한도입니다.",
                    noLimit: "제한 없음",
                    one: "1 사용법",
                    five: "5 사용법",
                    ten: "10 사용법",
                    twentyFive: "25 사용법",
                    fifty: "50회 사용",
                    hundred: "100번의 용도"
                },
                inviteTemporaryMembership: {
                    label: "임시 회원 제공",
                    description: "초대받은 사람들에게 임시 회원권을 부여합니다.",
                },
                reuseExistingInvites: {
                    label: "기존 초대 재사용",
                    description: "새 초대를 만드는 대신 기존 초대를 사용합니다."
                },
                allowChatBodyDrop: {
                    label: "채팅 본문에 드롭 허용",
                    description: "텍스트를 채팅 영역에 직접 끌어서 추가할 수 있습니다."
                }
            },
            toast: {
                failed: {
                    drop: "Dragify가 작업을 수행할 수 없습니다.",
                },
                invite: {
                    created: "초대장이 생성되었습니다.",
                    unable: "초대장을 만들 수 없습니다.",
                    noChannel: "초대를 생성할 수 있는 채널이 없습니다.",
                }
            },
            ghost: {
                user: "사용자",
                server: "증여자",
                dm: "직접 메시지",
                badge: {
                    channel: "채널",
                    thread: "제목",
                    voice: "세스",
                    forum: "법정",
                    media: "메디아",
                    announcement: "발표",
                    dm: "DM",
                    user: "사용자",
                    server: "증여자"
                }
            }
        },
        elementHighlighter: {
            name: "요소하이라이터",
            description: "항목을 쉽게 강조 표시하고 검사할 수 있습니다.",
            modal: {
                recording: "녹음...",
                reset: "다시 놓기"
            },
            option: {
                keybind: {
                    label: "키 할당",
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
                    description: "계산된 글꼴 모음과 크기를 표시합니다."
                },
                showPadding: {
                    label: "패딩 표시",
                    description: "요소의 내부 간격 값을 표시합니다."
                },
                showMargin: {
                    label: "외부 여백 표시",
                    description: "요소의 외부 공간 값을 표시합니다."
                },
                showBorderRadius: {
                    label: "가장자리 원형률 표시",
                    description: "요소의 테두리 반경 값을 표시합니다."
                },
                showPosition: {
                    label: "위치 표시",
                    description: "요소의 CSS 위치 유형 및 Z-색인 값을 표시합니다."
                },
                showDisplay: {
                    label: "보기 표시",
                    description: "Flex 또는 그리드 속성과 함께 요소의 뷰 유형을 표시합니다."
                }
            },
            toast: {
                copied: {
                    color: "색상이 클립보드에 복사되었습니다!",
                }
            }
        },
        exitSounds: {
            name: "종료음",
            description: "오디오 채널을 나가면 오디오 패널에서 사운드가 재생됩니다.",
            button: "전역 출력 사운드로 설정",
            toast: {
                failedToPlay: "맙소사! 문제가 발생했습니다."
            },
            option: {
                soundGuildId: {
                    label: "음성 서버 ID(ID)",
                    description: "오디오가 있는 서버를 선택합니다.",
                    placeholder: "서버를 선택하세요..."
                },
                soundId: {
                    label: "음성 식별(ID)",
                    description: "재생하려는 사운드의 ID를 입력하세요.",
                    placeholder: "음성 ID를 입력하세요..."
                }
            }
        },
        experiments: {
            name: "실험",
            description: "Discord의 실험 및 기타 개발자 전용 기능에 대한 액세스를 제공합니다!",
            modal: {
                about: {
                    title: "추가 정보",
                    body: "{{key}}로 Discord의 개발자 도구를 열 수 있습니다"
                },
                warning: {
                    title: "주목!!",
                    body: "실험은 출시되지 않은 Discord 기능입니다. 작동하지 않을 수도 있고 클라이언트가 중단되거나 계정이 비활성화될 수도 있습니다.",
                    notReponsible: "자신이 무엇을 하고 있는지 알고 있는 경우에만 실험을 사용하세요. Plexcord는 실험을 활성화하여 발생할 수 있는 피해에 대해 책임을 지지 않습니다.",
                    useAtOwnRisk: "실험이 무엇인지 모른다면 무시하세요. 그들이 무엇을 하는지 우리에게 묻지 마세요. 우리도 아마 모릅니다.",
                    serverSideFeatures: "아니요. '클라이언트에게 보내기' 확인란을 선택하는 등의 서버측 기능을 사용할 수 없습니다."
                }
            },
            option: {
                toolbarDevMenu: {
                    label: "툴바 개발자 메뉴",
                    description: "도움말(?) 툴바 버튼(채팅 오른쪽 상단)을 Discord의 개발자 메뉴로 대체합니다."
                }
            }
        },
        exportMessages: {
            name: "메시지 내보내기",
            description: "단일 메시지, 사용자의 모든 메시지 또는 채널의 모든 메시지 등 메시지를 파일로 내보낼 수 있습니다.",
            option: {
                maxMessages: {
                    label: "최대 메시지",
                    description: "전송할 최대 메시지 수(0 = 무제한)"
                },
                includeAttachments: {
                    label: "첨부 파일 포함",
                    description: "전송 시 첨부파일 정보 포함"
                },
                includeEmbeds: {
                    label: "Embedleri Dahil Et",
                    description: "전송에 삽입 정보 포함"
                },
                includeReactions: {
                    label: "반응 포함",
                    description: "전송에 반응 정보 포함"
                },
                includeComponents: {
                    label: "구성요소 포함",
                    description: "가져오기에 구성요소 정보 포함"
                }
            },
            message: {
                invalid: "잘못된 메시지 - 작성자 없음",
                unknownUser: "알 수 없는 사용자",
                botEmbed: "봇 삽입 메시지",
                attachments: "첨부 파일",
                unknown: "알려지지 않은",
                noUrl: "URL 없음",
                embeds: "임베더러",
                title: "제목",
                description: "설명",
                url: "URL",
                footer: "알트빌기",
                author: "작가",
                fields: "전지",
                components: "구성요소",
                component: "요소",
                interactiveElement: "인터랙티브 요소",
                reactions: "반응",
                errorFormatting: "메시지 형식 지정 오류",
                unknownError: "알 수 없는 오류",
                header: "{{titlePrefix}} {{displayName}}, {{channelName}} 채널",
                from: "메시지 -",
                direct: "직접 메시지",
                exported: "수출 날짜",
                total: "총 메시지"
            },
            toast: {
                export: {
                    title: "메시지 내보내기",
                    body: "메시지 내보내기 실패"
                },
                noMessages: {
                    title: "메시지 내보내기",
                    notFoundUser: "이 사용자에 대한 메시지를 찾을 수 없습니다.",
                    notFoundChannel: "이 채널에는 메시지가 없습니다"
                },
                failed: {
                    title: "메시지 내보내기",
                    body: "메시지를 내보내는 중에 오류가 발생했습니다."
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
                exportAll: "{{user}}의 모든 메시지 내보내기",
                user: "사용자",
                exportAllChannel: "채널의 모든 메시지 내보내기"
            }
        },
        expressionCloner: {
            name: "익스프레션 클로너",
            description: "이모티콘과 스티커를 자신의 서버에 복제할 수 있습니다(오른쪽 클릭).",
            modal: {
                title: "고유명사",
                invalidName: "이름은 2~32자여야 하며 영숫자만 포함해야 합니다."
            },
            toast: {
                success: "{{name}}이(가) {{guild}} 서버에 성공적으로 복제되었습니다!",
                yourServer: "귀하의 서버",
                failed: "복제 실패:",
                console: "문제가 발생했습니다(콘솔을 확인하세요!)"
            },
            context: {
                clone: "{{type}} 클론",
                cloneName: "{{data}} 클론"
            }
        },
        f8break: {
            name: "F8 브레이크",
            description: "DevTools(+ 중단점)가 열려 있을 때 F8을 누르면 클라이언트가 일시 중지됩니다."
        },
        fakeNitro: {
            name: "페이크니트로",
            description: "가짜 이모티콘/스티커를 보내고, 니트로 테마를 사용하고, 니트로 품질로 스트리밍할 수 있습니다.",
            option: {
                enableEmojiBypass: {
                    label: "이모티콘 건너뛰기 활성화",
                    description: "가짜 이모티콘 전송 허용(맞춤 이모티콘 사용 권한 부족도 우회)"
                },
                emojiSize: {
                    label: "이모티콘 크기",
                    description: "이모티콘을 보낼 때 사용할 크기"
                },
                transformEmojis: {
                    label: "이모티콘 변환",
                    description: "가짜 이모티콘을 실제 이모티콘으로 변환할지 여부를 결정합니다."
                },
                enableStickerBypass: {
                    label: "스티커 건너뛰기 활성화",
                    description: "가짜 스티커 전송 허용(스티커 사용 권한 부족도 우회)"
                },
                stickerSize: {
                    label: "스티커 크기",
                    description: "스티커 발송시 사용하는 사이즈"
                },
                transformStickers: {
                    label: "스티커 변환",
                    description: "가짜 스티커를 진짜 스티커로 변환할지 여부를 결정합니다."
                },
                transformCompoundSentence: {
                    label: "복합 문장 변환",
                    description: "복합문장(가짜 이모티콘이나 스티커 링크보다 더 많은 내용을 담고 있는 문장)의 가짜 이모티콘과 스티커의 변환 여부를 결정합니다."
                },
                enableStreamQualityBypass: {
                    label: "방송 품질 건너뛰기 활성화",
                    description: "니트로 품질로 스트리밍 가능"
                },
                useStickerHyperLinks: {
                    label: "스티커 브리지 사용",
                    description: "가짜 스티커 발송 시 하이퍼링크 사용 여부를 결정합니다."
                },
                useEmojiHyperLinks: {
                    label: "이모티콘 브리지 사용",
                    description: "가짜 이모티콘 전송 시 하이퍼링크 사용 여부를 결정합니다."
                },
                hyperLinkText: {
                    label: "하이퍼텍스트",
                    description: "하이퍼링크에 사용할 텍스트입니다. {{NAME}}은 이모티콘/스티커 이름으로 대체됩니다."
                },
                disableEmbedPermissionCheck: {
                    label: "포함 권한 확인 비활성화",
                    description: "가짜 이모티콘, 스티커 전송 시 삽입 권한 확인 비활성화 여부를 결정합니다."
                }
            },
            modal: {
                sticker: "이것은 FakeNitro 스티커이며 당신만을 위한 진짜 스티커처럼 보입니다. 플러그인을 사용하지 않는 분들을 위한 링크로 나타납니다.",
                emoji: "이것은 FakeNitro 이모티콘이며 당신만을 위한 진짜 이모티콘처럼 보입니다. 플러그인을 사용하지 않는 분들을 위한 링크로 나타납니다."
            },
            alert: {
                notice: {
                    title: "주목!",
                    body: "FakeNitro 이모티콘 또는 스티커가 포함된 메시지를 보내거나 편집하려고 하지만 이 채널에 링크를 삽입할 권한이 없습니다. 이 메시지를 보내시겠습니까? FakeNitro 항목은 링크로만 표시됩니다.",
                    footer: "FakeNitro 설정에서 이 경고를 비활성화할 수 있습니다",
                    confirm: "어쨌든 제출",
                    cancel: "취소",
                    secondaryConfirm: "다시 표시하지 않음"
                },
                apngSticker: {
                    title: "주목!",
                    body: "애니메이션 FakeNitro 스티커가 포함되어 있고 이 채널에 파일을 추가할 권한이 없기 때문에 이 메시지를 보낼 수 없습니다. 계속하려면 스티커를 제거해야 합니다."
                }
            }
        },
        fakeProfileThemes: {
            name: "가짜 프로필 테마",
            description: "프로필 테마를 제공합니다. 눈에 보이지 않는 3y3 코딩 덕분에 바이온에 숨겨진 컬러를 더해줍니다.",
            button: {
                copy: "3y3 카피"
            },
            modal: {
                usage: "사용",
                preview: "시사",
                intro: "이 플러그인을 활성화하면 호환되는 플러그인을 사용하는 다른 사람들의 프로필에 사용자 정의 색상이 표시됩니다.",
                setColor: "자신만의 색상을 설정하려면:",
                step1: "• 아래 색상 선택기를 사용하여 색상을 선택하세요.",
                step2: "• {{복사}} 버튼을 클릭하세요.",
                step3: "• 정보 섹션의 아무 곳에나 보이지 않는 텍스트를 붙여넣습니다.",
                pickers: "색상 선택기",
                primary: "주요한",
                accent: "중요성"
            },
            option: {
                nitroFirst: {
                    label: "니트로 퍼스트",
                    description: "둘 다 사용 가능한 경우 기본 색상 소스",
                    nitro: "니트로 색상",
                    fake: "가짜 색상"
                }
            }
        },
        fakeProfileThemesAndEffects: {
            name: "가짜 프로필테마 및 효과",
            description: "프로필 테마와 프로필 효과를 추가할 수 있습니다. 보이지 않는 3y3 코딩 덕분에 바이오에 숨겨진 색상과 효과가 추가됩니다.",
            option: {
                prioritizeNitro: {
                    label: "니트로 우선순위",
                    description: "우선순위를 정할 리소스",
                    nitro: "니트로",
                    aboutMe: "나에 대해"
                },
                hideBuilder: {
                    label: "작성자 숨기기",
                    description: "사용자 프로필 및 서버 프로필 설정 페이지에서 FPSTE Creator 숨기기"
                }
            },
            modal: {
                primary: "주요한",
                accent: "중요성",
                effect: "효과",
                usage: {
                    title: "사용",
                    intro: "이 플러그인을 활성화하면 이 플러그인을 사용하는 다른 사람들의 프로필에 사용자 정의 테마 색상과 효과가 표시됩니다.",
                    setColor: "자신만의 색상과 효과를 설정하려면:",
                    step1: "프로필 설정으로 이동",
                    step2: "FPTE Creator를 사용하여 프로필 테마 색상 및 효과 선택",
                    step3: "{{복사}} 버튼을 클릭하세요",
                    step4: "자기소개에서 원하는 위치에 보이지 않는 텍스트를 붙여넣으세요."
                }
            },
            toast: {
                copied: "FPTE가 클립보드에 복사되었습니다!",
                empty: "FPTE 생성기가 비어 있습니다. 복사할 것이 없습니다!"
            },
            button: {
                copyFPTE: "FPTE 복사",
                reset: "다시 놓기",
                preview: "FPSTE 크리에이터 미리보기",
                buildBackwards: "이전 버전과 호환되는 FPTE 생성",
                moreCharacters: "더 많은 문자가 사용됩니다"
            }
        },
        fastDeleteChannels: {
            name: "빠른 삭제채널",
            description: "채널을 삭제하려면 휴지통 아이콘을 추가하세요.",
            option: {
                keyBind: {
                    label: "단축키",
                    description: "쓰레기통을 열고 닫는 데 사용하는 열쇠입니다."
                },
                reqCtrl: {
                    label: "Ctrl 키가 필요합니다",
                    description: "휴지통을 열려면 Ctrl 키를 누르고 있어야 합니다."
                },
                reqShift: {
                    label: "Shift 키 필요",
                    description: "휴지통을 열려면 Shift 키를 누르고 있어야 합니다."
                },
                reqAlt: {
                    label: "Alt 키 필요",
                    description: "휴지통을 열려면 Alt 키를 누르고 있어야 합니다."
                }
            }
        },
        favoriteEmojiFirst: {
            name: "좋아하는이모티콘첫 번째",
            description: "좋아하는 이모티콘을 이모티콘 자동완성 목록 상단에 표시하고 이모티콘 별명도 제공합니다.",
            option: {
                aliases: {
                    label: "별명",
                    description: "이모티콘 닉네임을 관리하세요."
                },
                clearAll: {
                    label: "모두 지우기",
                    description: "모든 닉네임을 삭제합니다."
                }
            },
            modal: {
                clear: {
                    title: "모든 별칭 삭제",
                    description: "저장한 이모티콘 닉네임이 모두 삭제됩니다.",
                    confirm: "닉네임 모두 삭제"
                },
                set: {
                    title: "닉네임 설정",
                    description: "{{emoji}}의 닉네임을 설정하세요",
                    placeholder: "닉네임(예: '행복하다'",
                    save: "구하다",
                    error: "중복된 닉네임"
                }
            },
            toast: {
                set: "{{emoji}}의 닉네임이 설정되었습니다.",
                clearAll: "모든 이모티콘 닉네임이 삭제되었습니다.",
                failedDeleted: "별칭을 삭제하지 못했습니다.",
                removed: "{{alias}}의 별칭이 삭제되었습니다.",
                failedRemove: "별칭 제거 실패",
                duplicate: "중복된 닉네임",
                failedSave: "닉네임을 등록할 수 없습니다."
            },
            button: {
                edit: "닉네임 수정",
                set: "닉네임 설정"
            }
        },
        favoriteGifSearch: {
            name: "즐겨찾기Gif검색",
            description: "즐겨찾는 GIF에 검색창을 추가합니다.",
            placeholder: "좋아하는 GIF 검색",
            option: {
                searchOption: {
                    label: "검색 옵션",
                    description: "검색하려는 URL 부분",
                    url: "모든 URL",
                    path: "경로만(/somegif.gif)",
                    hostandpath: "호스트 및 경로(tenor.com somegif.gif)"
                }
            }
        },
        favouriteAnything: {
            name: "좋아하는 것은 무엇이든",
            description: "어떤 이미지든 즐겨찾기에 추가"
        },
        fileDownloadButton: {
            name: "파일다운로드버튼",
            description: "파일 오른쪽 상단에 다운로드 버튼을 추가합니다."
        },
        findReply: {
            name: "답글 찾기",
            description: "채널의 메시지에 대한 가장 오래된 응답으로 이동합니다(이전 대화를 더 쉽게 추적할 수 있도록 함).",
            context: {
                jump: "답변으로 이동"
            },
            toast: {
                navigate: "답변을 탐색하려면 하단 패널을 사용하세요.",
                container: "컨테이너 요소를 찾을 수 없습니다.",
                couldntFind: "응답 메시지를 찾을 수 없습니다."
            },
            option: {
                includePings: {
                    label: "언급 포함",
                    description: "또한 작성자에게 직접 보낸 메시지도 검색합니다."
                },
                includeAuthor: {
                    label: "작성자 포함",
                    description: "특정 게시물뿐만 아니라 작성자 전체에 대한 답변도 검색합니다."
                },
                hideButtonIfNoReply: {
                    label: "응답이 없으면 버튼 숨기기",
                    description: "메시지에 대한 응답이 없으면 버튼을 숨깁니다."
                }
            }
        },
        fixCodeblockGap: {
            name: "FixCodeblockGap",
            description: "코드 블록과 그 아래 텍스트 사이의 공백을 제거합니다."
        },
        fixFileExtensions: {
            name: "FixFileExtensions",
            description: "가능한 경우 호환되는 지원 형식으로 이름을 변경하여 파일 확장자를 수정합니다."
        },
        fixImagesQuality: {
            name: "이미지 수정품질",
            description: "원본 소스를 강제로 사용하여 이미지 품질을 향상시킵니다.",
            option: {
                originalImagesInChat: {
                    label: "채팅에 원본 이미지 표시",
                    description: "채팅에도 원본 이미지를 표시하세요. 경고: 위의 경고를 읽으십시오."
                }
            },
            modal: {
                about: {
                    title: "기본 동작은 다음과 같습니다.",
                    body: "&mdash; 최적화되었지만 전체 해상도 이미지가 채팅에 로드됩니다.",
                    body2: "&mdash; 이미지 창(이미지 모달)에는 원본 이미지가 로드됩니다.",
                    body3: "채팅에서 원본 이미지를 활성화할 수도 있지만 다음 사항에 유의하세요.",
                    warning: "&mdash; 채팅의 애니메이션 이미지(GIF, WebP 등)는 애플리케이션에 포커스가 있어도 항상 애니메이션으로 표시됩니다.",
                    warning2: "&mdash; 성능 문제가 발생할 수 있습니다."
                }
            }
        },
        fixSpotifyEmbeds: {
            name: "수정Spotify임베드",
            description: "Spotify 내장이 너무 큰 문제를 해결하고 볼륨을 맞춤 설정할 수 있습니다.",
            option: {
                volume: {
                    label: "사운드 레벨",
                    description: "Spotify 삽입을 위해 조정할 볼륨 비율입니다. 10%를 넘으면 너무 높을 것이다."
                }
            }
        },
        fixYoutubeEmbeds: {
            name: "YouTube 삽입 수정",
            description: "Discord에서 YouTube 비디오를 볼 수 없도록 차단하는 기능을 우회합니다(예: UMG)."
        },
        followUser: {
            name: "사용자 팔로우",
            description: "사용자 상황에 맞는 메뉴에 팔로우 옵션을 추가합니다. 항상 동일한 음성 채널에 있도록 보장",
            indicatorTooltip: "{{user}}님을 팔로우하고 있습니다(수동으로 실행하려면 클릭, 팔로우 취소하려면 마우스 오른쪽 버튼 클릭).",
            unknownUser: "알 수 없는 사용자",
            option: {
                executeOnFollow: {
                    label: "팔로우할 때 신청하세요",
                    description: "사용자를 팔로우할 때 동일한 음성 채널에 있는지 확인하세요."
                },
                onlyManualTrigger: {
                    label: "수동 트리거링 전용",
                    description: "표시기를 클릭한 경우에만 트리거"
                },
                followLeave: {
                    label: "나뭇잎을 따라갈 때",
                    description: "팔로우한 사용자가 나가면 나도 나가라"
                },
                autoMoveBack: {
                    label: "자동 뒤로 이동",
                    description: "이동 시 자동으로 팔로우된 사용자의 음성 채널로 다시 전환됩니다."
                },
                followUserId: {
                    label: "팔로우된 사용자 ID",
                    description: "팔로우된 사용자 ID"
                },
                channelFull: {
                    label: "채널이 가득 참",
                    description: "채널이 더 이상 꽉 차 있지 않으면 채널을 그곳으로 이동해 보세요."
                }
            },
            toast: {
                channelFull: "채널이 가득 참",
                newVc: "팔로우된 사용자가 새 음성 채널로 전환되었습니다.",
                insufficientPermissions: "음성 채널에 들어갈 수 있는 권한이 충분하지 않습니다.",
                sameVc: "이미 같은 채널에 있습니다.",
                disconnect: "팔로우된 사용자가 떠났고 연결이 끊어졌습니다.",
                notFollowing: "팔로우한 사용자가 떠났지만 귀하는 팔로우를 취소하지 않았습니다.",
                notVc: "팔로우한 사용자가 음성 채널에 없습니다."
            },
            context: {
                follow: "따르다",
                unfollow: "언팔로우"
            }
        },
        fontLoader: {
            name: "폰트로더",
            description: "Google Fonts를 통해 모든 글꼴을 설치합니다.",
            option: {
                selectedFont: {
                    label: "선택한 글꼴",
                    description: "현재 선택된 글꼴"
                },
                fontSearch: {
                    label: "글꼴 검색",
                    description: "Google Fonts를 통해 글꼴 검색 및 선택"
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
                    title: "구글 폰트타 아라",
                    description: "적용할 글꼴을 선택하세요",
                    placeholder: "글꼴 검색...",
                    previewText: "잠옷을 입은 환자는 기름진 운전자를 빠르게 믿었습니다.",
                    authors: "작성자: {{authors}}"
                }
            }
        },
        forceOwnerCrown: {
            name: "ForceOwner크라운",
            description: "서버 규모가 크더라도 사용자 이름 옆에 서버 소유자 왕관을 강제로 표시합니다."
        },
        forwardAnywhere: {
            name: "어디든 전달",
            description: "전달에 실패하면 메시지를 일반 메시지로 보냅니다. 또한 NSFW 콘텐츠의 전송도 허용합니다.",
            option: {
                forwardPreface: {
                    label: "전달 접두어",
                    description: "전송된 메시지의 시작 부분에 어떤 문장을 추가해야 합니까?"
                }
            },
            context: {
                attachments: "첨부 파일",
                forwarded: "전달자:"
            }
        },
        freaky: {
            name: "이상한",
            description: "/freaky 명령을 사용하면 메시지를 이상한 글꼴로 보낼 수 있습니다.",
            command: {
                freaky: "이상했어요.",
                message: "이상한 글꼴로 메시지 보내기"
            },
            option: {
                addFreakyEnding: {
                    label: "이상한 엔딩 추가",
                    description: "끝에 👅 또는 ❤️을 추가하세요."
                }
            }
        },
        frequentQuickSwitcher: {
            name: "빈번한 퀵 스위처",
            description: "빠른 전환 창의 결과를 가장 자주 사용하는 채널로 대체하고 필터링합니다."
        },
        friendCloud: {
            name: "프렌드클라우드",
            description: "가장 많이 상호 작용하는 사용자를 시각화하기 위해 /friendcloud 명령을 추가합니다.",
            command: {
                friendcloud: {
                    description: "친구 클라우드를 시각화하세요",
                    count: "표시할 사용자 수",
                    mustHigher: "숫자는 1 이상이어야 합니다!",
                    noAffinities: "근접 데이터를 찾을 수 없습니다. [개인정보 설정](<https://support.discord.com/hc/en-us/articles/21864805694999-Data-Used-to-Improve-Discord>)을 확인하세요.",
                    noValid: "프록시에서 유효한 사용자를 찾을 수 없습니다. [개인정보 설정](<https://support.discord.com/hc/en-us/articles/21864805694999-Data-Used-to-Improve-Discord>)을 확인하세요.",
                    genFailed: "이미지를 생성할 수 없습니다. :c"
                }
            }
        },
        friendCodes: {
            name: "친구 코드",
            description: "친구 코드를 생성하여 쉽게 친구를 추가하세요",
            card: {
                expires: "만료: <t:{{expiration}}:R> • {{uses}}/{{maxUses}} 사용량",
                copy: "복사",
                copied: "복사되었습니다!",
                codes: "당신의 우정 코드",
                count: "친구 코드 - {{초대}}",
                create: "우정 코드 생성",
                revoke: "모든 친구 코드 취소",
                loading: "로드 중...",
                dontHave: "친구 코드가 없습니다."
            }
        },
        friendInvites: {
            name: "친구 초대",
            description: "슬래시 명령(/친구 초대 생성, /친구 초대 보기, /친구 초대 취소)을 사용하여 친구 초대 링크를 생성하고 관리합니다.",
            command: {
                create: {
                    description: "친구 초대 링크를 생성합니다.",
                    message: "discord.gg/{{code}}`\n· 만료: <t:{{expiration}}:R>\n· 최대 사용량: {{uses}}"
                },
                view: {
                    description: "생성된 친구 초대 링크를 모두 확인하세요.",
                    message: "_discord.gg/{{code}}_\n· 만료: <t:{{expiration}}:R> \n· 사용 횟수: {{uses}}/{{maxUses}}",
                    noInvites: "활성화된 친구 초대 링크가 없습니다."
                },
                revoke: {
                    description: "생성된 친구 초대 링크를 취소합니다.",
                    message: "친구 초대 링크가 모두 취소되었습니다."
                }
            }
        },
        friendshipRanks: {
            name: "우정순위",
            description: "사용자와 얼마나 오랫동안 친구 관계를 유지했는지 보여주는 배지를 추가합니다.",
            badge: {
                sprout: {
                    name: "새싹",
                    description: "당신의 우정은 이제 막 피어나고 있습니다."
                },
                blooming: {
                    name: "지독한",
                    description: "당신의 우정이 좋아지고 있어요! (1개월)"
                },
                burning: {
                    name: "타오르는",
                    description: "당신의 우정은 최고조에 이르렀습니다. (3개월)"
                },
                fighter: {
                    name: "전투기",
                    description: "당신의 우정은 강합니다. (6개월)"
                },
                star: {
                    name: "별",
                    description: "당신의 우정은 오랫동안 지속되어 왔습니다. (1년)"
                },
                royal: {
                    name: "결과",
                    description: "당신의 우정은 모든 어려움을 극복했습니다 — 2년!"
                },
                besties: {
                    name: "가장 친한 친구",
                    description: "이것을 어떻게 달성합니까 ??? (5년)"
                }
            }
        },
        friendsSince: {
            name: "친구이후",
            description: "사용자가 누군가와 친구인 경우 팝업에 표시됩니다.",
            section: "데이트 날짜"
        },
        friendTags: {
            name: "친구태그",
            description: "&로 검색을 시작하면 빠른 점프 메뉴에서 사용자 정의 태그로 필터링할 수 있습니다.",
            modal: {
                name: "이름",
                users: "사용자(쉼표로 구분)",
                userlist: "사용자 목록 (삭제할 사용자를 클릭하세요)",
                remove: "제거하다",
                add: "추가하다",
                tag: "표",
                removeFrom: "다음에서 제거:",
                addTo: "다음에 추가:"
            },
            option: {
                tagConfiguration: {
                    label: "태그 구성",
                    description: "태그 구성 구성요소"
                }
            }
        },
        fullSearchContext: {
            name: "전체검색컨텍스트",
            description: "메시지 검색 결과의 메시지 컨텍스트 메뉴에 여러분이 기대하는 모든 옵션이 포함되어 있습니다."
        },
        fullUserInChatbox: {
            name: "FullUserInChatbox",
            description: "채팅창 내 사용자 태그 좌/우 클릭 등 추가 기능을 추가합니다."
        },
        fullVCPFP: {
            name: "전체VCPFP",
            description: "아바타가 음성 채팅 상자 전체를 덮을 수 있도록 합니다.",
            option: {
                useServerProfileAvatars: {
                    label: "서버 프로필 아바타 사용",
                    description: "음성 채팅 상자에서 발표자 프로필 아바타를 사용합니다(사용 가능한 경우)."
                }
            }
        },
        gameActivityToggle: {
            name: "게임활동전환",
            description: "게임 활동을 표시하거나 숨길 수 있는 스위치를 사용자 팝업에 추가합니다.",
            tooltip: "게임 변경 이벤트",
            gameActivity: {
                enabled: "게임 이벤트 활성화됨",
                disabled: "게임 이벤트 비활성화됨"
            },
            option: {
                oldIcon: {
                    label: "고대 아이콘",
                    description: "Discord 아이콘을 다시 디자인하기 전에 이전 아이콘 스타일을 사용하세요"
                },
                location: {
                    label: "여성",
                    description: "게임 이벤트 키를 표시하는 위치",
                    panel: "음소거/마이크 꺼짐 옆",
                    toolbox: "도구 상자의 Plexcord"
                }
            }
        },
        ghosted: {
            name: "고스트",
            description: "답장을 보내지 않은 사람들 옆에는 귀여운 유령이 나타납니다.",
            modal: {
                title: "고스트된 사용자",
                no: "고스트된 사용자 없음",
                unghost: "유령을 제거하다",
                unknown: "알려지지 않은",
                unnamedGroup: "익명 그룹",
                unknownUser: "알 수 없는 사용자",
                clearAll: "모두 지우기",
                noGhost: "여기에는 유령이 없습니다!",
                clear: "분명한"
            },
            option: {
                showIndicator: {
                    label: "표시기 표시",
                    description: "서버 목록 상단에 고스트 카운터를 표시합니다."
                },
                showDmIcons: {
                    label: "DM 아이콘 표시",
                    description: "개별 DM 옆에 고스트 아이콘을 표시합니다."
                },
                ignoreGroupDms: {
                    label: "그룹 DM 무시",
                    description: "모든 그룹 메시지를 고스트 목록에서 제외합니다."
                },
                exemptedChannels: {
                    label: "면제 채널",
                    description: "고스트리스트에 포함되지 않을 채널 ID(ID)의 쉼표로 구분된 목록입니다(ID를 복사하려면 DM 채널을 마우스 오른쪽 버튼으로 클릭하세요)."
                },
                ignoreBots: {
                    label: "봇 무시",
                    description: "봇의 DM을 무시합니다."
                }
            }
        },
        gifCollections: {
            name: "Gif컬렉션",
            description: "GIF 컬렉션을 만들 수 있습니다.",
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
                    gifs: "찰싹",
                    created: "생성 날짜",
                    updated: "마지막 업데이트",
                    close: "4분의 1",
                    rename: "이름 바꾸기",
                    move: "컬렉션으로 이동",
                    select: "이동할 컬렉션을 선택하세요."
                },
                gif: {
                    information: "정보",
                    added: "추가된 날짜",
                    width: "너비",
                    height: "키",
                    close: "4분의 1"
                }
            },
            option: {
                itemPrefix: {
                    label: "품목 접두어",
                    description: "GIF 요소의 접두사"
                },
                collectionPrefix: {
                    label: "컬렉션 접두사",
                    description: "컬렉션의 접두사"
                },
                onlyShowCollections: {
                    label: "컬렉션만 표시",
                    description: "컬렉션만 표시"
                },
                stopWarnings: {
                    label: "알림 중지",
                    description: "삭제 경고 중지"
                },
                showCopyImageLink: {
                    label: "이미지 링크 복사 옵션 표시",
                    description: "컨텍스트 메뉴에 {{copyImageLink}} 표시"
                },
                preventDuplicates: {
                    label: "재발 방지",
                    description: "동일한 GIF가 컬렉션에 여러 번 추가되는 것을 방지합니다."
                },
                defaultEmptyCollectionImage: {
                    label: "기본 빈 컬렉션 이미지",
                    description: "컬렉션에 이미지/GIF가 없을 때 표시할 이미지/GIF"
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
                    sortDescription: "컬렉션별로 정렬을 선택하세요.",
                    sortBy: "정렬 기준",
                    name: "이름",
                    creationDate: "생성 날짜",
                    modifiedDate: "수정된 날짜",
                    ascending: "성장",
                    descending: "감소"
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
                already: "이 컬렉션은 이미 존재합니다.",
                alreadyCollection: "이 GIF는 컬렉션에 이미 존재합니다."
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
                    body: "컬렉션을 가져오면 기존 컬렉션을 덮어씁니다.",
                    confirm: "이체 아크타르",
                    cancel: "취소"
                },
                reset: {
                    title: "확실합니까?",
                    body: "컬렉션을 재설정하면 모든 컬렉션이 제거됩니다.",
                    confirm: "다시 놓기",
                    cancel: "취소"
                },
                delete: {
                    title: "확실합니까?",
                    deleteBody: "이 컬렉션을 정말로 삭제하시겠습니까?",
                    removeBody: "이 항목을 정말로 제거하시겠습니까?",
                    confirm: "실",
                    remove: "제거하다",
                    cancel: "취소"
                }
            }
        },
        gifPaste: {
            name: "GifPaste",
            description: "GIF를 채팅 상자에 직접 붙여넣을 수 있습니다."
        },
        gifRoulette: {
            name: "Gif룰렛",
            description: "즐겨찾기에서 임의의 GIF를 보내는 명령을 추가합니다. 서버 주인을 태그할 확률은 10%!",
            command: {
                gifRoulette: {
                    description: "행운을 시험해보고 임의의 GIF를 보내보세요"
                }
            },
            option: {
                pingOwnerChance: {
                    label: "서버 소유자를 태그할 기회",
                    description: "서버 소유자를 태그할 확률을 10분의 1로 설정합니다."
                }
            }
        },
        gitHubRepos: {
            name: "GitHubRepos",
            description: "사용자 프로필에 사용자의 공개 GitHub 저장소를 표시합니다.",
            loading: "저장소를 로드하는 중입니다...",
            option: {
                showStars: {
                    label: "별을 보여줘",
                    description: "창고 별 표시"
                },
                showLanguage: {
                    label: "언어 표시",
                    description: "저장소의 기본 프로그래밍 언어 표시"
                },
                showInMiniProfile: {
                    label: "미니 프로필에 표시",
                    description: "미니 프로필 창에 저장소 표시"
                },
                showRepositoryTab: {
                    label: "저장소 탭 표시",
                    description: "프로필 모달에 저장소 탭 표시(활성화된 경우 링크의 버튼 숨기기)"
                }
            },
            error: {
                error: "심지어",
                render: "오류: GithubRepos를 표시할 수 없습니다."
            },
            button: {
                show: "GitHub 저장소 표시",
                repositories: "GitHub 저장소",
                more: "더보기",
                only: "가장 좋은 {{length}}/{{total}}만 표시"
            },
            modal: {
                title: "{{user}}의 GitHub 저장소",
                repository: "데포",
                description: "설명",
                language: "딜",
                stars: "별",
                viewOnGitHub: "GitHub에서 보기",
                close: "4분의 1"
            }
        },
        googleThat: {
            name: "구글댓",
            description: "인터넷 검색 연결을 보낼 수 있는 명령을 추가합니다.",
            command: {
                googleThat: {
                    description: "검색 엔진 링크 제출",
                    query: "검색어"
                }
            },
            option: {
                hyperlink: {
                    label: "다리",
                    description: "제출된 링크를 쿼리 태그와 함께 하이퍼링크로 보낼지 여부"
                },
                embed: {
                    label: "내장된 콘텐츠",
                    description: "제출된 링크를 삽입된 콘텐츠로 표시할지 여부"
                },
                defaultEngine: {
                    label: "기본 검색 엔진",
                    description: "사용할 검색 엔진"
                },
                customEngineURL: {
                    label: "맞춤검색 엔진 URL",
                    description: "사용하려는 검색 엔진의 URL"
                }
            }
        },
        greetStickerPicker: {
            name: "인사스티커선택기",
            description: "'손을 흔들고 인사하세요!' 버튼을 마우스 오른쪽 버튼으로 클릭하면 무작위 스티커 대신 원하는 환영 스티커를 사용할 수 있습니다.",
            mode: {
                greet: "안녕하세요",
                message: "메시지"
            },
            option: {
                greetMode: {
                    label: "인사말 모드",
                    description: "인사말 모드 선택",
                    greet: "인사말(인사말은 3번까지만 보낼 수 있습니다)",
                    message: "메시지(인사말은 무제한으로 보낼 수 있습니다)"
                }
            },
            context: {
                label: "인사말 스티커 선택기",
                mode: "인사말 모드",
                stickers: "인사말 스티커",
                multi: "여러 인사말",
                send: "안녕하세요 보내기"
            }
        },
        guildPickerDumper: {
            name: "GuildPickerDumper",
            description: "서버의 이모티콘과 스티커를 내보내고 다운로드할 수 있는 컨텍스트 메뉴를 추가합니다.",
            context: {
                download: {
                    emoji: "이모티콘 다운로드",
                    sticker: "스티커 다운로드"
                }
            }
        },
        guildTagSettings: {
            name: "길드태그설정",
            description: "서버 태그 숨기기, 태그 사용 프롬프트 비활성화 등의 서버 태그 설정을 추가합니다.",
            option: {
                hideTags: {
                    label: "태그 숨기기",
                    description: "서버 태그를 보이지 않게 만듭니다."
                },
                disableAdoptTagPrompt: {
                    label: "태그 소유권 주장 닫기 경고",
                    description: "서버 태그를 사용(청구)하라는 메시지를 비활성화합니다."
                }
            }
        },
        hideChatButtons: {
            name: "숨기기ChatButtons",
            description: "채팅 버튼을 숨길 수 있습니다.",
            tooltip: {
                close: "4분의 1",
                open: "배고픈"
            },
            option: {
                color: {
                    label: "색상",
                    description: "켜져 있으면 빨간색으로 표시됩니다."
                },
                open: {
                    label: "열려 있는",
                    description: "기본적으로 켜짐"
                }
            }
        },
        hideMedia: {
            name: "미디어 숨기기",
            description: "마우스를 가져가면 나타나는 버튼을 사용하여 특정 메시지에 첨부 파일과 포함된 콘텐츠를 숨길 수 있습니다.",
            show: "미디어 표시",
            hide: "미디어 숨기기",
            hidden: "미디어 숨김"
        },
        hideMessages: {
            name: "메시지 숨기기",
            description: "재부팅할 때까지 메시지를 일시적으로 숨깁니다.",
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
                unhide: "서버 표시",
                folder: {
                    hide: "폴더 숨기기",
                    unhide: "폴더 표시"
                }
            },
            option: {
                showIndicator: {
                    label: "표시기 표시",
                    description: "숨겨진 서버를 목록에 표시하려면 하단에 메뉴를 표시하세요."
                },
                guildsList: {
                    label: "서버 목록",
                    description: "숨겨진 서버 제거"
                },
                resetHidden: {
                    label: "숨겨진 서버 재설정",
                    description: "목록에서 숨겨진 서버를 모두 제거하세요.",
                    button: "숨겨진 서버 재설정"
                }
            },
            button: {
                hidden: "숨겨진",
                hiddenServers: "숨겨진 서버",
                remove: "제거하다",
                folder: "접는 사람",
                removeAll: "모두 제거",
                guilds: "서버",
                noHiddenServers: "숨겨진 서버 없음"
            }
        },
        holyNotes: {
            name: "홀리노트",
            description: "Holy Notes를 사용하면 메시지를 저장할 수 있습니다.",
            main: "잘",
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
                deleteNote: "노투실",
                moveNote: "메모 이동",
                moveTo: "{{key}}(으)로 이동",
                copyId: "신분증 복사"
            },
            modal: {
                error: {
                    generic: "성적을 처리하는 중에 오류가 발생했습니다. 자세한 내용은 콘솔을 확인하세요.",
                    easter: "메모를 찾을 수 없습니다. 공감바나나는 당신과 함께합니다.",
                    empty: "이 노트에 저장된 노트가 없습니다."
                },
                help: {
                    title: "돕다",
                    description: "홀리노트 사용법 배우기",
                    addingNotes: "메모 추가",
                    addingNotesText: "메모를 추가하려면 메시지를 마우스 오른쪽 버튼으로 클릭하고 '메모 메시지'를 가리킨 다음 메모를 추가하려는 노트북을 선택하세요.",
                    prototype: "원기",
                    noteMessage: "'Note Message' 버튼을 한 번 클릭하면 기본 원장에 기본으로 추가됩니다!",
                    deletingNotes: "실메 아님",
                    deletingNotesText: "메모를 삭제하려면 마우스 오른쪽 버튼을 클릭하고 '메모 삭제'를 선택하거나 키보드에서 'DELETE' 키를 누른 채 메모를 클릭하세요.",
                    movingNotes: "메모 이동",
                    movingNotesText: "노트를 이동하려면 마우스 오른쪽 버튼을 클릭한 후 '노트 이동' 옵션에서 이동하려는 노트를 선택하세요.",
                    jumpToMessage: "메시지로 이동",
                    jumpToMessageText: "메모가 속한 메시지로 이동하려면 메모를 마우스 오른쪽 버튼으로 클릭하고 '메시지로 이동'을 선택하세요."
                },
                notebook: {
                    title: "공책",
                    search: "메시지 검색...",
                    options: "정렬 옵션",
                    label: "정렬 메뉴",
                    filteredOf: "{{filteredCount}}/{{noteCount}} 없음",
                    note: "{{noteCount}}개 아님",
                    ada: "오름차순/추가된 날짜",
                    amd: "오름차순 / 메시지 날짜",
                    dda: "내림차순/추가된 날짜",
                    dmd: "내림차순 / 메시지 날짜",
                    change: "정렬 변경",
                    ascending: "성장",
                    descending: "감소",
                    dateAdded: "추가된 날짜",
                    messageDate: "메시지 날짜"
                },
                create: {
                    title: "노트북 만들기",
                    description: "새 노트북의 이름을 입력하세요.",
                    placeholder: "노트북 이름"
                },
                delete: {
                    title: "{{notebookName}} 실린신 Mi?",
                    description: "{{noteCount}}개의 메모가 영구적으로 삭제됩니다.",
                    button: "실"
                },
                tabs: {
                    label: "노트북 탭"
                }
            },
            toast: {
                saved: "메시지가 {{노트북}}에 성공적으로 추가되었습니다.",
                deleted: "메모가 {{notebook}}에서 성공적으로 삭제되었습니다.",
                moved: "노트가 {{from}} 노트북에서 {{to}} 노트북으로 성공적으로 이동되었습니다.",
                exists: "{{notebookName}}이라는 노트북이 이미 존재합니다.",
                created: "{{notebookName}}이(가) 성공적으로 생성되었습니다.",
                deletedNotebook: "{{notebookName}}이(가) 성공적으로 삭제되었습니다.",
                refreshed: "아바타가 성공적으로 새로 고쳐졌습니다.",
                deletedAll: "모든 메모가 성공적으로 삭제되었습니다.",
                imported: "메모를 성공적으로 가져왔습니다.",
                invalid: "메모를 가져오지 못했습니다."
            },
            toolbox: {
                action: "노트 열기"
            }
        },
        homeTyping: {
            name: "홈타이핑",
            description: "누군가가 DM에 글을 쓰고 있으면 홈 버튼이 쓰기 표시기로 전환됩니다."
        },
        iconViewer: {
            name: "아이콘뷰어",
            description: "모든 아이콘을 미리 볼 수 있도록 설정에 새 탭을 추가합니다.",
            toolbox: "아이콘 탭 열기",
            iconFinder: "아이콘 찾기",
            about: {
                title: "특징",
                preview: "미리보기 아이콘",
                list: {
                    copy: "아이콘 이름 및 CSS 변수 복사",
                    download: "다양한 형식(SVG, PNG, GIF 등)으로 아이콘을 다운로드하세요.",
                    premade: "플러그인에 대해 미리 만들어진 아이콘 결과 복사",
                    find: "기능 컨텍스트별로 아이콘 찾기",
                    search: "색상명을 마우스 오른쪽 버튼으로 클릭하여 색상을 검색하세요.",
                    special: "특별한 감사"
                }
            },
            context: {
                icon: {
                    options: "아이콘 옵션",
                    log: "콘솔로 인쇄(로그)",
                    save: "다른 이름으로 저장...",
                    rightClick: "교체할 아이콘을 마우스 오른쪽 버튼으로 클릭하세요.",
                    usage: "사용",
                    click: "복사하려면 클릭하세요.",
                    copied: "복사되었습니다!",
                    actions: "행위"
                }
            },
            modal: {
                label: "기능 컨텍스트로 검색",
                search: "{{count}}개 기호 내에서 검색하세요...",
                function: "기능",
                iconViewer: {
                    colors: "아이콘 뷰어 색상",
                    unknown: "알려지지 않은",
                }
            }
        },
        idleAutoRestart: {
            name: "유휴자동 재시작",
            description: "설정된 시간 동안 유휴 상태이면 앱이 자동으로 다시 시작되지만 오디오 채널에 있을 때는 다시 시작되지 않습니다.",
            option: {
                isEnabled: {
                    label: "효과적인",
                    description: "유휴 후 자동 재시작 활성화"
                },
                idleMinutes: {
                    label: "유휴 시간(분)",
                    description: "다시 시작하기 전 비활성 시간(오디오 채널 아님)"
                }
            },
            toolbox: {
                disable: "자동 재시작 비활성화",
                enable: "자동 재시작 활성화"
            }
        },
        ignoreActivities: {
            name: "활동 무시",
            description: "이벤트가 해당 상태에만 나타나는 것을 방지합니다. 저장된 게임 및 이벤트 탭에서 무시할 항목을 지정하거나 아래의 일반 설정을 사용할 수 있습니다.",
            modal: {
                import: {
                    title: "CustomRPC 플러그인의 앱 ID를 필터 목록으로 가져오기"
                },
                filter: {
                    title: "필터 목록",
                    description: "필터링할 이벤트 ID의 쉼표로 구분된 목록(특정 RPC 이벤트 및 CustomRPC를 필터링하는 데 유용함)"
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
                    label: "CustomRPC'yi 더보기"
                },
                listMode: {
                    label: "목록 모드",
                    description: "필터 목록 적용 방법 선택",
                    blacklist: "블랙리스트(목록에 있는 것만 무시)",
                    whitelist: "화이트리스트(목록에 있는 것 외에는 모두 무시)"
                },
                idList: {
                    label: "ID 목록"
                },
                ignorePlaying: {
                    label: "재생된 내용 무시",
                    description: "모든 재생 이벤트 무시(보통 게임 및 RPC 이벤트)"
                },
                ignoreStreaming: {
                    label: "게시물 무시",
                    description: "모든 방송 이벤트 무시"
                },
                ignoreListening: {
                    label: "청취자 무시",
                    description: "모든 청취 이벤트 무시(보통 Spotify 이벤트)"
                },
                ignoreWatching: {
                    label: "무시함",
                    description: "모든 추적 이벤트 무시"
                },
                ignoreCompeting: {
                    label: "경쟁 이벤트 무시",
                    description: "모든 경쟁(경쟁) 이벤트를 무시합니다(보통 맞춤 게임 이벤트)."
                },
                ignoredActivities: {
                    label: "무시된 이벤트"
                }
            }
        },
        ignoreCalls: {
            name: "통화 무시",
            description: "특정 사용자 또는 DM 그룹의 전화를 무시할 수 있습니다.",
            option: {
                permanentlyIgnoredUsers: {
                    label: "영구적으로 무시된 사용자",
                    description: "영구적으로 무시되어야 하는 사용자 ID(virgül + boşluk)"
                }
            },
            button: {
                ignore: "요크사이",
                temporarilyIgnore: "일시적으로 무시",
                permanentlyIgnore: "영구적으로 무시"
            }
        },
        iLoveSpam: {
            name: "ILove스팸",
            description: "'잠재적인 스팸 발송자'로부터 메시지를 숨깁니다."
        },
        imageFilename: {
            name: "이미지파일 이름",
            description: "이미지 및 GIF 위로 마우스를 가져가면 파일 이름이 툴팁으로 표시됩니다.",
            option: {
                showFullUrl: {
                    label: "전체 URL 표시",
                    description: "파일 이름 대신 이미지의 전체 URL이 표시됩니다. GIF에는 일반적으로 의미 있는 파일 이름이 없기 때문에 항상 활성화되어 있습니다."
                }
            }
        },
        imageLink: {
            name: "이미지링크",
            description: "메시지에 이미지 링크만 있는 경우에도 시각적 링크를 숨기지 않습니다."
        },
        imageZoom: {
            name: "이미지줌",
            description: "이미지와 GIF를 확대하고 이미지 메타데이터를 볼 수 있습니다. 마우스 휠을 사용하여 확대하고 Shift + 마우스 휠을 사용하여 렌즈 반경을 늘립니다.",
            option: {
                saveZoomValues: {
                    label: "확대/축소 값 저장",
                    description: "줌 및 렌즈 크기 값 저장 여부를 결정합니다."
                },
                invertScroll: {
                    label: "역방향 스크롤",
                    description: "마우스 스크롤 방향을 반대로 바꿉니다."
                },
                nearestNeighbour: {
                    label: "가장 가까운 이웃",
                    description: "이미지 크기를 조정할 때 가장 가까운 이웃 보간법을 사용합니다."
                },
                square: {
                    label: "보호하다",
                    description: "렌즈를 사각형 모양으로 바꿔줍니다."
                },
                zoom: {
                    label: "줌",
                    description: "렌즈의 줌 비율"
                },
                size: {
                    label: "차원",
                    description: "렌즈 반경/크기"
                },
                zoomSpeed: {
                    label: "줌 속도",
                    description: "줌/렌즈 크기의 변경 속도를 결정합니다."
                },
                showMetadata: {
                    label: "메타데이터 표시",
                    description: "선택한 이미지를 두 번 클릭하면 메타데이터 표시"
                }
            },
            context: {
                square: "사각렌즈",
                nearest: "픽셀화된 확대",
                zoom: "줌",
                size: "렌즈 크기",
                zoomSpeed: "줌 속도",
                showImageMetadata: "이미지 메타데이터 표시",
                view: "메타데이터 보기",
                loading: "로드 중...",
                unknown: "알려지지 않은",
                sizeHTML: "차원",
                dimensions: "치수",
                filename: "파일 이름"
            }
        },
        imgToGif: {
            name: "ImgToGif",
            description: "모든 이미지를 GIF로 변환하는 /imgtogif 명령 추가",
            command: {
                imgToGif: {
                    description: "이미지를 GIF로 변환할 수 있습니다",
                    image: "사용할 시각적 첨부 파일",
                    width: "GIF 너비",
                    height: "gif 높이"
                }
            },
            error: {
                noImage: "지정된 이미지가 없습니다!",
                notImage: "업로드한 파일은 이미지가 아닙니다."
            }
        },
        implicitRelationships: {
            name: "암시적 관계",
            description: "친구 탭에 간접적인 관계가 표시됩니다.",
            option: {
                sortByAffinity: {
                    label: "근접성을 기준으로 정렬",
                    description: "간접 관계가 사용자와의 근접성을 기준으로 정렬되는지 여부를 결정합니다."
                }
            },
            implicit: "간접"
        },
        inRole: {
            name: "역할에 있음",
            description: "역할 컨텍스트 메뉴 또는 /inrole 명령을 사용하여 역할에 누가 있는지 알아보세요(플러그인 정보 읽기!)",
            command: {
                inrole: {
                    description: "누가 역할을 맡고 있는지 알아보세요.",
                    role: "역할",
                    noGuild: "서버에 있는지 확인하세요."
                }
            },
            context: {
                view: "역할이 있는 구성원 보기"
            },
            modal: {
                about: {
                    title: "제한 사항",
                    description: "서버에 대한 조정 권한이 없고 서버가 대규모(회원 100명 이상)인 경우 플러그인은 다음과 같은 방식으로 제한될 수 있습니다.",
                    list: {
                        one: "오프라인 회원은 목록에 표시되지 않습니다.",
                        two: "기본적으로 최대 100명의 구성원이 나열됩니다. 더 많은 회원을 보려면 회원 목록을 아래로 스크롤하세요.",
                        three: "하지만 친구는 상태에 관계없이 항상 표시됩니다."
                    }
                },
                member: {
                    title: "역할을 맡은 구성원",
                    noMembers: "이 역할을 가진 온라인 캐시된 구성원을 찾을 수 없습니다. 더 많은 사용자를 캐시하려면 회원 목록을 아래로 스크롤해 보세요!"
                }
            }
        },
        instantScreenshare: {
            name: "인스턴트화면 공유",
            description: "오디오 채널에 참여하면 데스크톱 소스, 창 및 비디오 입력 장치(카메라, 캡처 카드)를 지원하여 즉시 화면을 공유할 수 있습니다.",
            modal: {
                linux: {
                    title: "리눅스의 경우",
                    body: "Wayland를 사용하는 경우 화면 공유 옵션만 켜집니다.",
                    bodyTwo: "X11에서는 작동할 수도 있고 작동하지 않을 수도 있습니다 :shrug:"
                },
                videoDevices: {
                    title: "비디오 입력 장치",
                    body: "설정에서 활성화하면 카메라 및 캡처 카드(예: Elgato HD60X)를 지원합니다."
                },
                regardingSound: {
                    title: "사운드 및 미리보기 설정 정보",
                    body: "우리는 Discord가 스트림을 미리 보고 오디오 활성화 여부를 결정하는 데 사용하는 것과 동일한 설정을 사용합니다."
                }
            },
            option: {
                streamMedia: {
                    label: "공개 예정 미디어 소스",
                    description: "찾을 수 없을 경우 메인 화면으로 초기화됩니다.",
                    loading: "미디어 소스 로드 중...",
                    none: "미디어 소스를 찾을 수 없습니다.",
                    placeholder: "게시할 미디어 소스를 선택하세요."
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
                    description: "음성 채널에 참여하면 자동으로 귀가 들리지 않게 됩니다(음소거도 됩니다)."
                },
                instantScreenshare: {
                    label: "즉각적인 화면 공유",
                    description: "자동 화면 공유 기능을 활성화합니다."
                },
                keybindScreenshare: {
                    label: "단축키를 이용한 화면 공유",
                    description: "Discord 단축키 설정에서 단축키로 화면을 공유합니다."
                },
                focusDiscord: {
                    label: "불일치에 집중",
                    description: "Discord에 포커스가 있을 때만 키바인딩으로 화면 공유 시작"
                },
                toolboxManagement: {
                    label: "도구 상자 관리",
                    description: "인스턴트 화면 공유 활성화/비활성화"
                }
            },
            toolbox: {
                label: "즉각적인 화면 공유",
                toast: "즉각적인 화면 공유 {{state}}",
                enabled: "효과적인",
                disabled: "장애가 있는"
            }
        },
        invisibleChat: {
            name: "보이지 않는채팅",
            description: "의심을 받지 않고 메시지를 암호화하세요!",
            option: {
                savedPasswords: {
                    label: "저장된 비밀번호",
                    description: "저장된 비밀번호(쉼표로 구분)"
                }
            },
            button: {
                encrypt: "메시지 암호화",
                decrypt: "메시지를 해독하세요",
                hidden: "숨겨진 메시지 표시기(InvisibleChat)"
            },
            tooltip: {
                hidden: "이 메시지에는 숨겨진 메시지가 있습니다! (보이지 않는 채팅)"
            },
            embed: {
                title: "해독된 메시지",
                footer: "InvisibleChat을 통해 전송됨"
            },
            modal: {
                encrypt: {
                    title: "메시지 암호화",
                    secret: "비밀 메시지",
                    cover: "표지 (2단어 이상!!)",
                    password: "비밀번호",
                    dontUseCover: "표지 사용",
                    send: "보내다",
                    cancel: "취소"
                },
                decrypt: {
                    title: "메시지를 해독하세요",
                    with: "암호화된 메시지",
                    password: "비밀번호",
                    decrypt: "풀다",
                    cancel: "취소"
                }
            }
        },
        inviteDefaults: {
            name: "초대기본값",
            description: "서버 초대장을 생성할 때 기본값을 편집할 수 있습니다.",
            option: {
                inviteDuration: {
                    label: "초대 기간",
                    description: "서버 초대의 기본 기간",
                    thirtyMinutes: "30분",
                    oneHour: "1 순간",
                    sixHours: "6 순간",
                    twelveHours: "12 순간",
                    oneDay: "1일",
                    sevenDays: "7일",
                    forever: "무기한"
                },
                maxUses: {
                    label: "최대 사용량",
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
                    description: "서버 초대에 대한 기본 임시 멤버십 설정"
                }
            }
        },
        ircColors: {
            name: "IrcColors",
            description: "IRC 클라이언트처럼 채팅의 사용자 이름 색상을 고유하게 만듭니다.",
            option: {
                lightness: {
                    label: "밝은",
                    description: "밝기 비율(%). 색상이 너무 밝거나 어둡게 보이면 색상을 변경하세요."
                },
                memberListColors: {
                    label: "회원 목록 색상",
                    description: "구성원 목록의 역할 색상을 변경합니다."
                },
                applyColorOnlyToUsersWithoutColor: {
                    label: "색상이 없는 사용자에게만 적용",
                    description: "색상이 미리 정의되지 않은 사용자에게 색상을 적용합니다."
                },
                applyColorOnlyInDms: {
                    label: "비공개 메시지에만 적용",
                    description: "비공개 메시지에만 색상을 적용하세요. 서버에 응용 프로그램."
                }
            }
        },
        iRememberYou: {
            name: "당신을 기억해요",
            description: "서버를 포함하여 통신하는 모든 사람을 로컬에서 기록하여 손실을 방지합니다.",
            section: {
                description: "귀하가 언급한 서버의 소유자, 응답한 서버의 소유자, (서버 소유자*)의 구성원 또는 귀하가 있는 서버의 구성원 목록을 보여줍니다.",
                empty: "현재 비어 있습니다.",
                tooltip: "{{user}}이(가) {{updatedAtContent}}에 업데이트되었습니다.",
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
                title: "조절기",
                filter: "태그, 사용자 이름 또는 ID로 필터링",
                button: {
                    validate: "확인 및 저장",
                    cancel: "취소",
                    openEditor: "편집기 열기",
                    resetData: "데이터 재설정",
                    sure: "확실합니까?"
                }
            }
        },
        jumpTo: {
            name: "점프",
            description: "채널 또는 비공개 메시지의 시작이나 끝으로 이동할 수 있는 옵션을 오른쪽 클릭 메뉴에 추가합니다.",
            context: {
                top: "첫 번째 게시물로 이동",
                bottom: "마지막 게시물로 이동",
                noMessages: "이 채널에서 이 사용자의 메시지를 찾을 수 없습니다.",
                searchFailed: "메시지를 검색하는 중에 오류가 발생했습니다."
            }
        },
        keepCurrentChannel: {
            name: "KeepCurrentChannel 유지",
            description: "계정을 전환하거나 Discord를 로드할 때 사용 중이던 채널로 돌아가려고 시도합니다."
        },
        keyboardSounds: {
            name: "키보드소리",
            description: "키보드로 입력할 때 OperaGX나 osu! 음향 효과를 추가합니다.",
            option: {
                volume: {
                    label: "사운드 레벨",
                    description: "키보드 소리 볼륨"
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
            name: "키워드알림",
            description: "특정 키워드 또는 정규 표현식과 일치하는 메시지에 대한 알림을 보냅니다.",
            idHolder: "ID",
            keywordEntry: "키워드 입력",
            regexHolder: "예|정규식",
            ignoreCase: "대소문자를 구분하지 않음",
            whiteblackLabel: "화이트리스트 / 블랙리스트",
            tab: {
                title: "키워드",
                clearAll: "모두 지우기"
            },
            button: {
                addId: "아이디 에클레",
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
                    label: "절약할 금액",
                    description: "로그에 보관할 메시지 수"
                },
                keywords: {
                    label: "키워드",
                    description: "키워드 관리"
                }
            }
        },
        lastOnline: {
            name: "마지막 온라인",
            description: "DM 목록, 서버 및 그룹 DM 구성원 목록의 사용자 이름 아래에 마지막 온라인 표시기를 추가합니다.",
            unit: {
                d: "낮",
                h: "순간",
                m: "분"
            },
            online: "{{formattedTime}} 이전에 온라인 상태였습니다."
        },
        listenBrainzRPC: {
            name: "ListenBrainzRPC",
            description: "ListenBrainz는 풍부한 존재감을 제공하는 작은 플러그인입니다.",
            about: {
                title: "MusicBrainz API 정보",
                description: "MusicBrainz API에는 API 키가 필요하지 않지만 {{link}}가 필요합니다. 대부분의 사용자에게는 하나의 이메일 주소로 충분합니다.",
                userAgent: "의미 있는 사용자 에이전트 문자열"
            },
            option: {
                username: {
                    label: "사용자 이름",
                    description: "ListenBrainz 사용자 이름"
                },
                mbContact: {
                    label: "MB연락처",
                    description: "ListenBrainz 연락처 정보"
                },
                shareUsername: {
                    label: "사용자 이름 공유",
                    description: "ListenBrainz 프로필 링크 표시(다른 사용자에게만 표시)"
                },
                shareSong: {
                    label: "노래를 공유하세요",
                    description: "ListenBrainz에서 현재 노래에 대한 링크 표시(다른 사용자에게만 표시)"
                },
                hideWithSpotify: {
                    label: "Spotify가 활성화된 동안 숨기기",
                    description: "Spotify가 실행 중인 경우 ListenBrainz 상태 숨기기"
                },
                hideWithActivity: {
                    label: "다른 이벤트가 있으면 숨기기",
                    description: "다른 상태가 있는 경우 ListenBrainz 상태 숨기기"
                },
                useTimeBar: {
                    label: "시간 표시줄 사용",
                    description: "트랙 재생 시간을 시간 표시줄로 표시(청취 상태를 사용해야 함)"
                },
                statusName: {
                    label: "상태 이름",
                    description: "예외 텍스트"
                },
                nameFormat: {
                    label: "이름 형식",
                    description: "상태 이름에 노래 및 아티스트 이름을 표시하는 방법",
                    custom: "사용자 정의 상태 텍스트 사용",
                    artistSong: "'아티스트 - 노래' 형식을 사용하세요.",
                    songArtist: "'노래 - 아티스트' 형식을 사용하세요.",
                    artistOnly: "아티스트 이름만 사용하세요.",
                    songOnly: "노래제목만 써주세요",
                    albumName: "앨범 이름 사용(노래에 앨범이 없는 경우 예외 텍스트 반환)"
                },
                useListeningStatus: {
                    label: "청취 상태 사용",
                    description: "'재생 중' 대신 '듣는 중' 상태 표시"
                },
                missingArt: {
                    label: "표지 이미지 누락",
                    description: "앨범 또는 앨범아트가 누락된 경우",
                    listenbrainzLogo: "큰 ListenBrainz 로고를 사용하세요.",
                    generic: "일반 자리 표시자 사용"
                },
                useLogo: {
                    label: "쿨란 로고",
                    description: "앨범 표지에 ListenBrainz 로고 표시"
                }
            }
        },
        loadingQuotes: {
            name: "인용문 로드 중",
            description: "Discord의 로딩 인용문 변경",
            option: {
                replaceEvents: {
                    label: "이벤트 변경",
                    description: "특별 이벤트 테마 인용문이 있는 이벤트 중에도 이 플러그인을 적용해야 합니까? (예: 할로윈)"
                },
                enablePluginPresetQuotes: {
                    label: "플러그인 인용 활성화",
                    description: "이 플러그인에서 준비된 인용문을 활성화합니다."
                },
                enableDiscordPresetQuotes: {
                    label: "불일치 인용 활성화",
                    description: "Discord 미리 준비된 인용문 활성화(이벤트 중 이벤트 인용문 포함)"
                },
                additionalQuotes: {
                    label: "추가 견적",
                    description: "나타날 수 있는 추가 특수 따옴표는 다음 구분 기호로 구분됩니다."
                },
                additionalQuotesDelimiter: {
                    label: "추가 견적 구분 기호",
                    description: "추가 견적을 위한 구분 기호"
                }
            }
        },
        loginWithQR: {
            name: "QR로 로그인",
            description: "모바일과 마찬가지로 로그인 QR코드를 스캔하면 다른 기기에서도 로그인이 가능합니다!",
            option: {
                scanQr: {
                    label: "QR 코드 스캔",
                    description: "QR 코드 스캔",
                    notEnabled: "로그인 QR 코드를 스캔하려면 플러그인을 활성화하고 클라이언트를 다시 시작하세요."
                }
            },
            neverScan: "다른 사용자나 앱의 로그인 QR 코드를 스캔하지 마세요.",
            hold: "입력을 확인하려면 길게 누르세요.",
            scanning: "스캐닝...",
            stopScanning: "스캔 중지",
            usingWebcam: "웹캠을 사용하여 스캔",
            dragDrop: "여기에 이미지를 드래그 앤 드롭하거나 클릭하여 이미지를 선택하세요.",
            orPaste: "아니면 클립보드에서 사진을 붙여넣으세요!"
        },
        mediaPlaybackSpeed: {
            name: "미디어재생속도",
            description: "미디어 삽입의 (기본) 재생 속도를 변경할 수 있습니다.",
            playbackSpeed: "재생 속도",
            context: {
                label: "재생 속도 제어"
            },
            option: {
                defaultVoiceMessageSpeed: {
                    label: "기본 음성 메일 비율",
                    description: "음성 메시지"
                },
                defaultVideoSpeed: {
                    label: "기본 비디오 속도",
                    description: "비디오"
                },
                defaultAudioSpeed: {
                    label: "기본 오디오 속도",
                    description: "오디오 파일"
                }
            }
        },
        memberCount: {
            name: "회원수",
            description: "서버의 온라인 멤버 수, 전체 멤버 수, 음성 채널 사용자 수를 멤버 목록 및 도구 설명에 표시합니다.",
            option: {
                toolTip: {
                    label: "도구 설명",
                    description: "서버 툴팁에 멤버 수 표시"
                },
                memberList: {
                    label: "회원 목록",
                    description: "회원 목록 상단에 회원 수 표시"
                },
                voiceActivity: {
                    label: "음성 활동",
                    description: "음성 채널의 사용자 수 표시"
                }
            },
            onlineThisChannel: "{{formattedOnlineCount}}님이 이 채널에 온라인 상태입니다.",
            totalMembers: "서버의 총 구성원 수는 {{formattedTotalCount}}명입니다.",
            totalVoice: "{{formattedVoiceCount}} 음성 채널의 회원"
        },
        mentionAvatars: {
            name: "언급아바타",
            description: "멘션 내에 사용자 아바타와 역할 아이콘을 표시합니다.",
            option: {
                showAtSymbol: {
                    label: "@ 아이콘 표시",
                    description: "사용자 멘션에 @ 기호를 표시할지 여부를 결정합니다."
                }
            }
        },
        meow: {
            name: "야옹",
            description: "채팅 중에 야옹할 수 있는 버튼을 채팅 표시줄에 추가합니다.",
            button: {
                meow: "미야브"
            }
        },
        messageBurst: {
            name: "메시지 버스트",
            description: "다른 사람이 귀하보다 먼저 메시지를 보내지 않는 한 특정 기간 내에 보낸 메시지를 이전 메시지와 병합합니다.",
            option: {
                timePeriod: {
                    label: "시간 범위",
                    description: "병합 시간(초)입니다."
                },
                shouldMergeWithAttachment: {
                    label: "첨부 파일과 결합",
                    description: "마지막 메시지에 첨부 파일(파일/이미지)이 있으면 메시지를 병합해야 합니까?"
                },
                useSpace: {
                    label: "공간 활용",
                    description: "병합 시 새 줄로 이동하는 대신 메시지 사이에 공백을 추가할지 여부입니다."
                }
            }
        },
        messageClickActions: {
            name: "메시지클릭액션",
            description: "백스페이스 키를 누른 상태에서 클릭하면 삭제, 더블클릭하여 편집, 회신할 수 있습니다.",
            option: {
                singleClickAction: {
                    label: "원클릭 액션",
                    description: "단일 클릭 작업(자신의 메시지에 대해)"
                },
                singleClickModifier: {
                    label: "원클릭 수정자",
                    description: "원클릭 작업에 필요한 수정자(자신의 메시지에서)"
                },
                singleClickOthersAction: {
                    label: "원클릭 액션(기타)",
                    description: "단일 클릭 작업(다른 사람의 메시지에 대한)"
                },
                singleClickOthersModifier: {
                    label: "원클릭 수정자(기타)",
                    description: "한 번의 클릭 작업에 필요한 수정자(다른 사람의 게시물)"
                },
                doubleClickAction: {
                    label: "두 번 클릭 동작",
                    description: "자신의 메시지에 대한 두 번 클릭 동작"
                },
                doubleClickOthersAction: {
                    label: "더블 클릭 동작(기타)",
                    description: "다른 사람의 메시지에 대한 두 번 탭 작업"
                },
                doubleClickModifier: {
                    label: "두 번 클릭 수정자",
                    description: "두 번 클릭 동작에 수정자가 필요합니다."
                },
                tripleClickAction: {
                    label: "세 번의 클릭 작업",
                    description: "세 번의 클릭 동작"
                },
                tripleClickModifier: {
                    label: "세 번의 클릭 수정자",
                    description: "세 번의 클릭 동작에 필요한 수정자"
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
                    label: "추가 반응 이모티콘",
                    description: "반응 액션 사용 시 추가할 이모티콘(쉼표/입력으로 구분, 최대 {{count}}개)"
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
                    description: "더블/트리플 클릭을 구별하기 위한 시간 초과(ms)"
                },
                doubleClickHoldThreshold: {
                    label: "두 번 클릭 보존 임계값",
                    description: "두 번 클릭 작업의 최대 유지 시간(ms)입니다. 텍스트 선택을 더 오래 유지할 수 있습니다."
                },
                deferDoubleClickForTriple: {
                    label: "세 번 클릭하려면 두 번 클릭 지연",
                    description: "세 번 클릭 동작을 허용하려면 두 번 클릭을 지연시키세요. (꺼져 있으면 세 번 클릭이 비활성화됩니다.)"
                },
                selectionHoldTimeout: {
                    label: "선택 보류 시간 초과",
                    description: "텍스트 선택을 허용하는 시간 초과(ms)"
                },
                quoteWithReply: {
                    label: "견적으로 답장하기",
                    description: "인용할 때 메시지에도 응답하세요."
                },
                useSelectionForQuote: {
                    label: "견적에 대한 선택 사용",
                    description: "인용할 때 선택한 텍스트를 사용하십시오(가능한 경우)."
                }
            },
            actions: {
                none: "없음",
                delete: "실",
                copyLink: "링크 복사",
                copyID: "신분증 복사",
                copyContent: "콘텐츠 복사",
                copyUserID: "사용자 ID 복사",
                edit: "편집하다",
                reply: "회신하다",
                react: "반응하다",
                openThread: "주제 열기",
                openTab: "탭에서 열기",
                quote: "인용하다",
                pin: "고정해 보세요"
            },
            missingPermissions: {
                react: "대응할 수 없음: 권한 누락",
                pin: "해결할 수 없음: 권한 누락",
            },
            cannotQuote: "이 메시지 유형은 인용할 수 없습니다.",
            copy: {
                messageId: "메시지 ID가 복사되었습니다!",
                messageContent: "메시지 내용이 복사되었습니다!",
                userId: "사용자 ID가 복사되었습니다!"
            },
            linkCopied: "링크가 복사되었습니다!"
        },
        messageColors: {
            name: "메시지색상",
            description: "#FF0042와 같이 메시지에 색상 코드를 표시합니다.",
            option: {
                renderType: {
                    label: "시각화 유형",
                    description: "색상 표시 방법을 결정합니다.",
                    textColor: "텍스트 색상",
                    block: "옆에 블록",
                    backgroundColor: "배경색"
                },
                enableShortHexCodes: {
                    label: "짧은 16진수 코드 활성화",
                    description: "#39f와 같은 3자리 16진수 코드를 활성화하세요."
                },
                blockView: {
                    label: "블록 뷰 유형",
                    description: "색상 블록이 표시되는 방식을 결정합니다.",
                    right: "오른쪽",
                    left: "왼쪽",
                    both: "양쪽"
                }
            }
        },
        messageFetchTimer: {
            name: "메시지가져오기타이머",
            description: "현재 채널의 메시지를 로드하는 데 걸리는 시간을 표시합니다.",
            option: {
                showIcon: {
                    label: "아이콘 표시",
                    description: "메시지 표시줄에 로딩 시간 아이콘 표시"
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
            loaded: "{{time}}ms({{timeAgo}}) 내에 로드된 메시지",
            day: "며칠 전",
            hour: "몇 시간 전",
            minute: "몇 분 전",
            justNow: "지금"
        },
        messageLatency: {
            name: "메시지 지연 시간",
            description: "보내는 데 ≥n초가 걸리는 메시지에 대한 표시기를 추가합니다.",
            day: "낮",
            days: "낮",
            hour: "순간",
            hours: "순간",
            minute: "분",
            minutes: "분",
            second: "두번째",
            seconds: "두번째",
            millisecond: "밀리초",
            milliseconds: "밀리초",
            and: "ve",
            oldKotlinDetected: "사용자가 오래된 Discord Android 클라이언트를 사용하고 있는 것으로 의심됩니다.",
            ahead: "이 사용자의 시간은 {{delta}} 앞서 있습니다.",
            delay: "이 메시지는 {{delta}} 지연된 후 전송되었습니다.",
            delayedMessage: "지연된 메시지",
            oldAndroidClient: "기존 Discord Android 클라이언트",
            option: {
                latency: {
                    label: "지연",
                    description: "지연 표시기의 임계값(초)"
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
                    label: "나 자신을 무시하라",
                    description: "자신의 메시지에 표시기 추가"
                }
            }
        },
        messageLinkEmbeds: {
            name: "메시지링크 삽입",
            description: "다른 메시지에 대한 링크가 포함된 메시지에 미리보기를 추가합니다.",
            option: {
                messageBackgroundColor: {
                    label: "메시지 배경색",
                    description: "리치 임베드된 메시지의 배경색"
                },
                automodEmbeds: {
                    label: "오토모드 매장지",
                    description: "리치 임베드 대신 자동 모드 임베드 사용(작지만 정보가 적음)",
                    always: "항상 자동 모드 삽입을 사용하세요",
                    prefer: "Automod 삽입을 선호하지만 일부 콘텐츠를 표시할 수 없는 경우 풍부한 삽입을 사용하세요.",
                    never: "자동 모드 삽입을 절대 사용하지 마세요"
                },
                listMode: {
                    label: "목록 모드",
                    description: "ID 목록을 블랙리스트로 사용할지, 화이트리스트로 사용할지 결정",
                    blacklist: "블랙리스트",
                    whitelist: "화이트리스트"
                },
                idList: {
                    label: "ID 목록",
                    description: "블랙리스트 또는 화이트리스트에 추가할 서버/채널/사용자 ID(쉼표로 구분)"
                },
                clearMessageCache: {
                    label: "메시지 캐시 지우기",
                    description: "연결된 메시지 캐시 지우기"
                }
            },
            noContent: {
                noAttachments: "콘텐츠 없음 {{count}}개의 삽입된 메시지",
                noEmbeds: "콘텐츠 {{count}}개 추가 없음",
                both: "콘텐츠 없음, 첨부 파일 {{attachments}}개 및 삽입된 메시지 {{embeds}}개"
            },
            dm: "사신",
            groupDm: "그룹 메시지",
            server: "증여자"
        },
        messageLinkTooltip: {
            name: "메시지링크툴팁",
            description: "메시지 링크, 회신 및 전달된 메시지 위로 마우스를 가져가면 도구 설명과 메시지 미리보기를 추가합니다.",
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
                    label: "전송된 메시지에 대해",
                    description: "전달된 메시지 위로 마우스를 가져가면 도구 설명 표시"
                },
                display: {
                    label: "모습",
                    description: "외관 스타일",
                    auto: "메시지와 동일",
                    compact: "콤팩트",
                    cozy: "편안한"
                }
            }
        },
        messageLogger: {
            name: "메시지로거",
            description: "삭제 및 편집된 메시지를 임시로 저장합니다.",
            removeMessage: "메시지 기록 제거",
            removeMessageTemporary: "메시지 제거(임시)",
            clearMessageLog: "메시지 로그 지우기",
            modal: {
                edit: {
                    title: "메시지 편집 기록",
                    tooltip: "이 편집 상태는 저장되지 않았기 때문에 표시할 수 없습니다."
                }
            },
            option: {
                deleteStyle: {
                    label: "스타일 지우기",
                    description: "삭제된 메시지의 모양 스타일",
                    text: "빨간색 텍스트",
                    overlay: "빨간색 코팅"
                },
                logDeletes: {
                    label: "저장 삭제됨",
                    description: "삭제된 메시지의 저장 여부를 결정합니다."
                },
                collapseDeleted: {
                    label: "축소 삭제됨",
                    description: "차단된 메시지와 유사하게 삭제된 메시지를 구체화합니다."
                },
                logEdits: {
                    label: "편집한 내용으로 저장",
                    description: "편집된 메시지를 저장할지 여부를 결정합니다."
                },
                inlineEdits: {
                    label: "인라인 편집",
                    description: "메시지 내용의 일부로 편집 기록 표시"
                },
                ignoreBots: {
                    label: "봇 무시",
                    description: "봇이 보낸 메시지 무시"
                },
                ignoreSelf: {
                    label: "나 자신을 무시하라",
                    description: "자신의 메시지를 무시합니다"
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
                    label: "서버 무시",
                    description: "무시할 쉼표로 구분된 서버 ID 목록"
                },
                showEditDiffs: {
                    label: "편집 차이점 표시",
                    description: "편집된 메시지 버전 간의 차이점 표시"
                },
                separatedDiffs: {
                    label: "차이점 분할",
                    description: "차이점에 추가 및 삭제를 별도로 표시하여 더 읽기 쉬운 보기를 제공합니다."
                }
            }
        },
        messageLoggerEnhanced: {
            name: "MessageLogger향상",
            description: "추가 기능으로 MessageLogger 플러그인을 향상합니다.",
            updateImageCacheDir: "시각적 캐시 디렉터리가 성공적으로 업데이트되었습니다.",
            updateLogsDir: "로그 디렉터리가 성공적으로 업데이트되었습니다.",
            failedUpdate: "디렉터리를 업데이트할 수 없습니다.",
            blacklist: "블랙리스트",
            whitelist: "화이트리스트",
            failedToRemove: "메시지를 삭제할 수 없습니다.",
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
                cleared: "메시지 로그 데이터베이스와 캐시가 지워졌습니다."
            },
            context: {
                title: "메시지 로그",
                jumpToMessage: "메시지로 이동",
                openUserProfile: "사용자 프로필 열기",
                copyContent: "콘텐츠 복사",
                copyUserId: "사용자 ID 복사",
                copyMessageId: "메시지 ID 복사",
                copyChannelId: "채널 ID 복사",
                copyServerId: "서버 ID 복사",
                deleteLog: "로그 삭제",
                fromUsernameDm: "{{username}} 님의 DM에서",
                fromGroupDm: "{{channelName}} 그룹 DM",
                fromServerChannel: "{{serverName}} 서버의 {{channelName}} 채널에서",
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
                server: "증여자",
                user: "사용자",
                channel: "채널"
            },
            button: {
                chooseFolder: "폴더 선택",
                browse: "고자트",
                clearLogs: "모든 로그 지우기",
                clearVisibleLogs: "보이는 로그 지우기",
                sortOldest: "오래된 것부터 최신 것 순으로 정렬",
                sortNewest: "최신 항목부터 오래된 항목까지 정렬",
                loadMore: "더 로드하기",
                noResults: "{{tab}} 탭에 결과가 없습니다.",
                tryOtherTabs: "{{nextTab}} 또는 {{lastTab}} 탭을 사용해 보세요.",
                importLogs: "로그 가져오기"
            },
            modal: {
                title: "메시지 필터링",
                deleted: "삭제됨",
                edited: "정리됨",
                ghostPing: "보이지 않는 핑",
                empty: "비어있죠?",
                importLogs: "ML Enhanced는 이제 로그를 IndexedDB에 저장합니다. 로그 디렉터리에서 이전 로그를 가져와야 합니다. 가져오기는 기존 로그를 변경하지 않습니다."
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
                    description: "삭제 및 편집된 메시지의 저장 여부를 결정합니다."
                },
                saveImages: {
                    label: "이미지 저장",
                    description: "삭제된 첨부파일을 저장하세요."
                },
                sortNewest: {
                    label: "최신 항목부터 오래된 항목까지 정렬",
                    description: "최신순으로 로그를 정렬합니다."
                },
                cacheMessagesFromServers: {
                    label: "서버의 캐시 메시지",
                    description: "일반적으로 로거는 화이트리스트에 있는 ID와 DM만 기록하므로 이 옵션을 활성화하면 모든 서버의 메시지도 기록됩니다. 그러나 이는 캐시 제한을 초과하여 일부 메시지를 건너뛸 수 있습니다."
                },
                ignoreBots: {
                    label: "봇 무시",
                    description: "봇 메시지를 무시하세요."
                },
                ignoreWebhooks: {
                    label: "웹훅 Yoksay",
                    description: "웹훅 메시지를 무시합니다."
                },
                ignoreSelf: {
                    label: "나 자신을 무시하라",
                    description: "자신의 메시지를 무시하십시오."
                },
                ignoreMutedGuilds: {
                    label: "음소거된 서버 무시",
                    description: "음소거된 서버의 메시지는 녹음되지 않습니다. 그러나 화이트리스트에 등록된 사용자/채널은 계속 기록됩니다."
                },
                ignoreMutedCategories: {
                    label: "음소거된 카테고리 무시",
                    description: "음소거된 카테고리에 속한 채널의 메시지는 녹음되지 않습니다."
                },
                ignoreMutedChannels: {
                    label: "음소거된 채널 무시",
                    description: "음소거된 채널의 메시지는 녹음되지 않습니다."
                },
                alwaysLogDirectMessages: {
                    label: "항상 DM을 저장하세요",
                    description: "항상 직접 메시지를 저장하세요."
                },
                alwaysLogCurrentChannel: {
                    label: "항상 현재 채널 저장",
                    description: "항상 현재 채널을 저장합니다. 블랙리스트에 등록된 채널/사용자는 제외됩니다."
                },
                permanentlyRemoveLogByDefault: {
                    label: "기본적으로 로그를 영구적으로 삭제",
                    description: "기본 MessageLogger 컨텍스트 메뉴에서 메시지 로그에서 제거하는 옵션은 기본적으로 영구 삭제로 설정됩니다."
                },
                hideMessageFromMessageLoggers: {
                    label: "로거에서 메시지 숨기기",
                    description: "활성화되면 다른 로거의 메시지를 숨기는 컨텍스트 메뉴 옵션이 추가됩니다. 안전하지 않을 수 있으므로 사용에 따른 책임은 본인에게 있습니다."
                },
                showLogsButton: {
                    label: "로그 버튼 표시",
                    description: "도구 모음 표시 여부를 전환합니다."
                },
                showWhereMessageIsFrom: {
                    label: "메시지 소스 표시",
                    description: "메시지의 채널/작성자 및 서버 이름을 표시합니다."
                },
                messagesToDisplayAtOnceInLogs: {
                    label: "로그에 동시에 표시할 메시지 수",
                    description: "한 번에 로그에 표시할 메시지 수와 더 많은 메시지가 로드될 때 추가할 메시지 양을 결정합니다."
                },
                hideMessageFromMessageLoggersDeletedMessage: {
                    label: "메시지 로거에 숨겨진 메시지 콘텐츠",
                    description: "메시지 로거에서 숨길 때 메시지를 대체하는 콘텐츠가 사용됩니다."
                },
                messageLimit: {
                    label: "메시지 제한",
                    description: "저장할 최대 메시지 수입니다. 제한을 초과하면 오래된 메시지가 삭제됩니다. 0 = 무제한."
                },
                attachmentSizeLimitInMegabytes: {
                    label: "첨부 파일 크기 제한(MB)",
                    description: "저장할 첨부 파일의 최대 크기(MB)입니다. 이 값보다 큰 첨부 파일은 저장되지 않습니다."
                },
                attachmentFileExtensions: {
                    label: "추가 파일 확장자",
                    description: "저장할 파일 확장자의 쉼표로 구분된 목록입니다. 비워두면 모든 첨부 파일이 저장됩니다."
                },
                cacheLimit: {
                    label: "캐시 한도",
                    description: "캐시에 보관할 최대 메시지 수입니다. 제한을 초과하면 오래된 메시지가 삭제됩니다."
                },
                timeBasedCleanupMinutes: {
                    label: "시간 기반 분 청소",
                    description: "메시지 제한보다 오래된 메시지를 시간 기반으로 정리하는 분 간격입니다."
                },
                preserveCurrentChannel: {
                    label: "현재 채널 유지",
                    description: "활성화되면 현재 선택한 채널의 메시지는 시간 기반 정리의 영향을 받지 않습니다."
                },
                whitelistedIds: {
                    label: "화이트리스트 ID",
                    description: "화이트리스트에 있는 서버, 채널 또는 사용자 ID."
                },
                blacklistedIds: {
                    label: "블랙리스트 ID",
                    description: "블랙리스트에 있는 서버, 채널 또는 사용자 ID."
                },
                imageCacheDir: {
                    label: "시각적 캐시 디렉터리",
                    description: "저장된 이미지의 디렉터리를 선택합니다."
                },
                logsDir: {
                    label: "로그 인덱스",
                    description: "로그가 저장될 디렉터리를 선택합니다."
                },
                importLogs: {
                    label: "로그 가져오기",
                    description: "파일에서 로그를 가져옵니다."
                },
                exportLogs: {
                    label: "로그 내보내기",
                    description: "IndexedDB에서 로그를 내보냅니다."
                },
                openLogs: {
                    label: "오픈 로그",
                    description: "로그를 엽니다."
                },
                openImageCacheFolder: {
                    label: "시각적 캐시 폴더 열기",
                    description: "시각적 캐시 디렉터리를 엽니다."
                },
                clearLogs: {
                    label: "로그 지우기",
                    description: "로그를 지웁니다.",
                    title: "로그 지우기",
                    body: "모든 로그를 지우시겠습니까?",
                    confirmText: "분명한",
                    cancel: "취소"
                }
            }
        },
        messageNotifier: {
            name: "메시지 알리미",
            description: "선택된 사용자가 메시지를 보낼 때 알림 받기",
            dm: "사신",
            option: {
                users: {
                    label: "사용자",
                    description: "메시지 알림을 수신할 쉼표로 구분된 사용자 ID 목록",
                    invalidId: "{{id}}은(는) 유효한 사용자 ID가 아닙니다."
                }
            },
            notification: {
                title: "{{username}}님이 메시지를 보냈습니다",
                body: "{{locationName}}(으)로 이동하려면 클릭하세요."
            }
        },
        messageTags: {
            name: "메시지태그",
            description: "메시지를 저장하고 간단한 명령으로 사용할 수 있습니다.",
            notExist: "**{{tagname}}** 태그는 더 이상 사용할 수 없습니다! 문제를 해결하려면 Discord를 다시 시작하세요 :)",
            alreadyExist: "**{{tagname}}**이라는 태그가 이미 존재합니다!",
            sentTag: "**{{tagname}}** 태그가 전송되었습니다!",
            successCreate: "**{{tagname}}** 태그가 성공적으로 생성되었습니다!",
            allTags: "모든 태그:",
            noTags: "업! 아직 태그가 없습니다. 태그를 생성하려면 /tag create를 사용하세요!",
            noDeleteTag: "**{{tagname}}**라는 태그를 찾을 수 없으므로 삭제할 수 없습니다!",
            successDelete: "**{{name}}** 태그가 삭제되었습니다!",
            tagPreview: "**{{name}}**이라는 태그가 존재하지 않습니다!",
            option: {
                clyde: {
                    label: "게시물의 Clyde 메시지",
                    description: "활성화되면 Clyde는 태그가 사용될 때 임시 메시지를 보냅니다."
                },
                tagsList: {
                    label: "태그 목록",
                    description: ""
                }
            },
            command: {
                tags: {
                    description: "나만의 태그 관리",
                    option: {
                        create: {
                            description: "새 라벨 만들기",
                            name: "응답을 트리거할 태그의 이름",
                            message: "이 해시태그를 사용하면 전송되는 메시지입니다."
                        },
                        list: {
                            description: "모든 태그 나열"
                        },
                        delete: {
                            description: "태그 삭제",
                            name: "삭제할 태그 이름"
                        },
                        preview: {
                            description: "태그를 공개적으로 게시하지 않고 미리보기",
                            name: "미리 볼 태그의 이름"
                        }
                    }
                }
            }
        },
        micLoopbackTester: {
            name: "마이크루프백 테스터",
            description: "사용자 패널에 마이크 루프 테스트 아이콘을 추가합니다.",
            button: "마이크 테스트 주기"
        },
        middleClickTweaks: {
            name: "MiddleClickTweaks",
            description: "붙여넣기, 링크 열기 등 다양한 가운데 클릭(마우스 휠) 기능이 개선되었습니다.",
            option: {
                openScope: {
                    label: "개방 범위",
                    description: "이는 마우스 가운데 버튼을 클릭할 때 이러한 콘텐츠 유형이 열리는 것을 방지합니다.",
                    links: "모래밭",
                    media: "메디아",
                    linksAndMedia: "링크 및 미디어",
                    none: "없음"
                },
                pasteScope: {
                    label: "본딩 범위",
                    description: "어떤 경우에는 마우스 가운데 버튼을 클릭하면 붙여넣기가 방지됩니다.",
                    always: "항상 중간 클릭으로 붙여넣기 차단",
                    focus: "텍스트 영역에 초점이 맞춰지지 않은 경우에만 차단",
                },
                pasteThreshold: {
                    label: "본딩 임계값",
                    description: "마우스 가운데 버튼을 클릭한 후 다시 활성화하기 위해 붙여넣는 데 필요한 밀리초입니다."
                }
            }
        },
        moreCommands: {
            name: "추가명령",
            description: "에코, 레니, 모크 등",
            command: {
                echo: {
                    description: "Clyde(로컬)로 메시지를 보냅니다."
                },
                lenny: {
                    description: "레니 얼굴을 보냅니다"
                },
                mock: {
                    description: "사람들을 놀립니다. (mOcK PeOpLe)"
                },
                wordcount: {
                    description: "메시지의 단어 수를 계산합니다.",
                    response: "메시지에 {{count}} 단어가 포함되어 있습니다."
                },
                flipcoin: {
                    description: "동전을 뒤집어 결과를 반환합니다.",
                    heads: "글쓰기",
                    tails: "투라",
                    response: "돈이 {{result}} 도착했습니다."
                },
                ask: {
                    description: "예/아니요 질문을 묻고 답합니다.",
                    yes: "예",
                    no: "아니요",
                    maybe: "아마도",
                    askAgain: "나중에 다시 물어보세요",
                    definitelyNot: "절대 아니다",
                    itIsCertain: "물론 그렇습니다"
                },
                randomanimal: {
                    description: "임의의 동물 이미지를 반환합니다.",
                    animal: "당신의 동물을 선택하세요",
                    cat: "고양이",
                    dog: "개",
                    response: "죄송합니다. 지금은 동물 이미지를 검색할 수 없습니다."
                },
                randomnumber: {
                    description: "두 값 사이의 난수를 생성합니다.",
                    min: "최저한의",
                    max: "최대값",
                    response: "{{min}}과 {{max}} 사이의 임의의 숫자: {{number}}"
                },
                choose: {
                    description: "주어진 옵션 중에서 무작위로 하나를 선택합니다.",
                    option: "쉼표로 구분된 옵션 목록",
                    response: "내 선택: {{선택}}"
                },
                systeminfo: {
                    description: "시스템 정보를 표시합니다",
                    platform: "플랫폼",
                    deviceType: "장치 유형",
                    mobile: "모빌",
                    desktop: "데스크탑",
                    browser: "스캐너",
                    cpuCores: "CPU 코어",
                    memory: "메모리",
                    screen: "화면",
                    languages: "딜",
                    network: "하얀색",
                    online: "온라인",
                    offline: "오프라인",
                    failedToFetch: "시스템 정보를 검색할 수 없습니다.",
                    unknown: "알려지지 않은"
                },
                getuptime: {
                    description: "클라이언트 가동 시간 표시",
                    response: "**클라이언트 가동 시간**: {{uptime}}분"
                },
                gettime: {
                    description: "현재 시간을 표시합니다",
                    response: "현재 시간: {{time}}"
                },
                transform: {
                    description: "지정된 옵션에 따라 텍스트를 변환합니다.",
                    transformation: {
                        description: "텍스트에 적용할 변환 유형",
                        lowercase: "텍스트를 소문자로 변환",
                        uppercase: "텍스트를 대문자로 변환",
                        localeLowercase: "텍스트를 기본 소문자로 변환",
                        localeUppercase: "텍스트를 기본 대문자로 변환",
                        same: "그대로 두세요"
                    },
                    repeat: "몇 번이나 반복될까요?",
                    reverse: "텍스트 반전 여부",
                    normalize: {
                        description: "텍스트 정규화 형식",
                        nfc: "정규화 형식 C(NFC)",
                        nfd: "정규화 형식 D(NFD)",
                        nfkc: "정규화 형식 KC(NFKC)",
                        nfkd: "정규화 형식 KD(NFKD)"
                    },
                    text: "변환할 텍스트"
                }
            }
        },
        moreKaomoji: {
            name: "MoreKaomoji",
            description: "Discord에 더 많은 Kaomoji를 추가합니다. ヽ('▽`)/"
        },
        moreQuickReactions: {
            name: "더빠른반응",
            description: "메시지 컨텍스트 메뉴의 빠른 응답 버튼을 개선합니다.",
            option: {
                reactionCount: {
                    label: "반응 수",
                    description: "표시할 반응 수(0-42)"
                },
                frequentEmojis: {
                    label: "자주 사용되는 이모티콘",
                    description: "좋아하는 이모티콘 대신 자주 사용하는 이모티콘을 사용하세요"
                },
                rows: {
                    label: "그들은 판매한다",
                    description: "표시할 빠른 반응의 줄 수"
                },
                columns: {
                    label: "열",
                    description: "표시할 빠른 반응의 열 수"
                },
                compactMode: {
                    label: "컴팩트 모드",
                    description: "버튼 크기를 원래 크기의 75%로 조정하고 내부 이모티콘을 125%로 확대합니다. 이모티콘은 원본 크기의 93.75%로 표시됩니다. 5개 이상의 열을 사용하는 것이 좋습니다."
                },
                scroll: {
                    label: "스크롤",
                    description: "스크롤 이모티콘 목록 활성화"
                }
            }
        },
        moreUserTags: {
            name: "더많은사용자태그",
            description: "웹훅 및 중재 역할(소유자, 관리자 등)에 대한 태그를 추가합니다.",
            tag: {
                webhook: {
                    name: "웹훅",
                    description: "이 사용자는 웹훅입니다."
                },
                owner: {
                    name: "소유자",
                    description: "서버의 소유자"
                },
                admin: {
                    name: "관리자",
                    description: "관리자 권한이 있음"
                },
                staff: {
                    name: "공식적인",
                    description: "서버, 채널 또는 역할을 관리할 수 있습니다."
                },
                mod: {
                    name: "모드",
                    description: "메시지를 관리하거나 연락처를 차단/차단할 수 있습니다."
                },
                vcmod: {
                    name: "모드 보기",
                    description: "음성 채팅을 관리할 수 있습니다"
                },
                chatmod: {
                    name: "채팅 모드",
                    description: "메시지를 관리할 수 있습니다"
                }
            },
            modal: {
                example: "예",
                tag: "표",
                customTextPlaceholder: "라벨의 텍스트(기본값: {{displayName}})",
                messages: "메시지에 표시",
                memberList: "회원 목록 및 프로필에 표시"
            },
            option: {
                dontShowForBots: {
                    label: "봇에는 표시하지 않음",
                    description: "봇에 대한 추가 태그 표시(웹후크 제외)"
                },
                dontShowBotTag: {
                    label: "봇 태그 표시",
                    description: "추가 태그만 표시 / [APP] 숨기기"
                },
                showWebhookTagFully: {
                    label: "전체 웹훅 태그 표시",
                    description: "팔로우된 채널(예: 공지사항)에 전체 웹훅 태그 표시"
                },
                tagSettings: {
                    label: "태그 설정",
                    description: "채워지다"
                }
            }
        },
        morse: {
            name: "모스",
            description: "모스 부호로 번역하거나 모스 부호에서 번역하는 명령입니다.",
            command: {
                morse: {
                    description: "모스 부호로 또는 모스 부호에서 번역",
                    message: "변환할 텍스트"
                }
            }
        },
        moyai: {
            name: "모아이",
            description: "🗿🗿🗿🗿🗿🗿🗿🗿",
            option: {
                volume: {
                    label: "용량",
                    description: "🗿🗿🗿 볼륨"
                },
                quality: {
                    label: "품질",
                    description: "🗿🗿🗿 품질",
                    normal: "정상",
                    hd: "HD"
                },
                triggerWhenUnfocused: {
                    label: "초점이 맞지 않을 때 트리거",
                    description: "창에 초점이 맞지 않더라도 🗿 트리거"
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
            name: "음악 컨트롤",
            description: "여러 서비스에 대한 음악 컨트롤 및 가사",
            option: {
                SpotifySectionTitle: {
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
                    description: "Spotify는 URL 대신 URI를 엽니다. Spotify가 설치된 경우에만 작동하며 모든 플랫폼에서는 작동하지 않을 수 있습니다."
                },
                previousButtonRestartsTrack: {
                    label: "이전 버튼은 노래를 다시 시작합니다",
                    description: "재생 시간이 3초 이상인 경우 이전 버튼을 누르면 현재 곡의 처음부터 재생됩니다."
                },
                TidalSectionTitle: {
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
                    label: "YouTube Music API URL",
                    description: "사용 중인 YouTube Music API 서버의 URL"
                },
                hoverControls: {
                    label: "호버 컨트롤",
                    description: "마우스를 올리면 컨트롤 표시"
                },
                ShowMusicNoteOnNoLyrics: {
                    label: "가사가 없으면 메모 표시",
                    description: "가사를 찾을 수 없을 때 메모 아이콘 표시"
                },
                LyricsPosition: {
                    label: "가사 위치",
                    description: "가사 패널의 위치",
                    above: "플레이어 위",
                    below: "아래 플레이어"
                },
                LyricsProvider: {
                    label: "가사 제공자",
                    description: "가사 출처",
                    spotify: "Spotify(음악 매치)",
                    LRCLIB: "LRCLIB"
                },
                TranslateTo: {
                    label: "귀하의 언어로 번역",
                    description: "가사 번역 - 이를 변경하면 기존 번역이 지워집니다.",
                    cleared: "번역 정리됨"
                },
                LyricsConversion: {
                    label: "가사 변환",
                    description: "가사를 자동으로 번역하거나 로마자화합니다.",
                    none: "없음",
                    translate: "전환하다",
                    romanize: "Et를 로마자화하다"
                },
                FallbackProvider: {
                    label: "백업 제공업체",
                    description: "한 가사 제공자가 실패하면 다른 가사 제공자를 시도해 보세요."
                },
                ShowFailedToasts: {
                    label: "실패 알림 표시",
                    description: "가사가 로드되지 않으면 알림 표시"
                },
                PurgeLyricsCache: {
                    label: "가사 캐시 지우기",
                    description: "캐시된 가사 및 번역 모두 삭제",
                    button: "캐시 지우기",
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
                    copy: "이름 복사 {{name}}",
                    open: "Tidal에서 {{name}} 열기",
                    album: "타이달 앨범 메뉴"
                },
                ytm: {
                    type: "YouTube Music {{name}} 메뉴",
                    copy: "이름 복사 {{name}}",
                    open: "{{name}}'i YouTube Music'te Aç",
                    album: "YouTube 뮤직 앨범 메뉴",
                    muted: "음소거됨"
                },
                lyrics: {
                    provider: "가사 제공자",
                    saved: "녹음된",
                    notFound: "동기 가사를 찾을 수 없습니다"
                },
                copy: {
                    currentLyrics: "현재 가사 복사"
                }
            },
            alert: {
                lyricCopied: "가사가 클립보드에 복사되었습니다!",
                noLyrics: "가사 없음",
                noLyricsTo: "{{번역됨}}에 대한 가사가 없습니다.",
                translate: "번역",
                romanize: "로마자로 표기하지 마세요",
                lyricsFetchFailed: "가사를 찾을 수 없습니다",
                failedToFetchLyrics: "{{번역된}}을(를) 검색할 수 없습니다.",
                translation: "번역",
                romanization: "로마자 표기",
                failedToFetchTranslation: "{{translated}} 가사 번역을 가져올 수 없습니다."
            },
            modal: {
                install: {
                    title: "설치 방법",
                    install: "{{link}} 여기에서 설치한 후 TidaLuna 설정 → 애드온 스토어 → @vmohammad/api 설치로 이동하세요.",
                    tidaluna: "루나 없음"
                },
                player: {
                    noPlaying: "재생 중인 트랙이 없습니다.",
                    artist: "아티스트:",
                    album: "앨범:",
                    noLyrics: "가사를 찾을 수 없습니다 :(",
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
                failed: "창을 생성하지 못했습니다 :(",
                checkConsole: "콘솔에서 오류를 확인하세요.",
                invalidUrlCustomApi: "잘못된 사용자 정의 API 서버 URL 형식"
            }
        },
        mutualGroupDMs: {
            name: "MutualGroupDM",
            description: "프로필에 공유 그룹 DM을 표시합니다.",
            no: "공통 그룹 없음",
            mutualGroup: "{{count}} 일반 그룹",
            members: "회원",
            noGroup: "공개 그룹 DM 없음",
            header: "공통 그룹"
        },
        neverPausePreviews: {
            name: "NeverPause미리보기",
            description: "앱이 초점을 잃더라도 통화 중/PiP 미리 보기(화면 공유, 브로드캐스트 등)가 일시 중지되는 것을 방지합니다.",
            about: "이 추가 기능으로 인해 Discord는 평소보다 더 많은 리소스를 소비하게 됩니다."
        },
        newGuildSettings: {
            name: "새로운 길드 설정",
            description: "새 서버에 참가할 때 자동으로 음소거 및 기타 다양한 설정 변경",
            context: {
                apply: "새 서버 설정 적용"
            },
            option: {
                guild: {
                    label: "음소거 서버",
                    description: "서버 자동 음소거"
                },
                messages: {
                    label: "서버 알림 설정",
                    description: "서버 알림 설정",
                    all: "모든 메시지",
                    mentions: "@멘션만",
                    nothing: "없음",
                    default: "서버 기본값"
                },
                everyone: {
                    label: "@everyone 및 @here 억제",
                    description: "@everyone 및 @here 알림 억제"
                },
                role: {
                    label: "모든 역할 @멘션 억제",
                    description: "모든 역할 @멘션 억제"
                },
                highlights: {
                    label: "하이라이트 억제",
                    description: "하이라이트 자동 억제"
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
                    label: "모바일 알림 음소거",
                    description: "모바일 알림을 자동으로 무음으로 설정"
                },
                voiceChannels: {
                    label: "음성 채널",
                    description: "음성 채널에서 이름을 자동으로 숨깁니다."
                }
            }
        },
        newPluginsManager: {
            name: "새로운 플러그인 관리자",
            description: "Plexcord에 새 플러그인이 추가되면 알려주는 유용한 도구",
            modal: {
                title: "새로운 플러그인 및 설정",
                description: "마지막 방문 이후 새로운 플러그인과 설정이 추가되었습니다. 아래에서 새로 추가된 내용을 검토하세요.",
                tooltip: "이 세션 종료",
                dontShowAgain: "다시 표시하지 않음",
                restartRequired: "다음 플러그인을 사용하려면 다시 시작해야 합니다.",
                restart: "다시 시작",
                continue: "데밤 엣"
            }
        },
        noAppsAllowed: {
            name: "허용되는 앱 없음",
            description: "봇에 대한 봇 태그를 다시 가져옵니다."
        },
        noBlockedMessages: {
            name: "차단된 메시지 없음",
            description: "채팅에서 차단/무시된 모든 메시지를 완전히 숨깁니다.",
            option: {
                alsoHideIgnoredUsers: {
                    label: "무시된 사용자도 숨기기",
                    description: "또한 무시된 사용자의 메시지를 숨깁니다."
                },
                disableNotifications: {
                    label: "알림 비활성화",
                    description: "차단된 사용자에 대한 새 메시지 알림을 숨깁니다. '기본 사용자 숨기기' 기능이 활성화되어 있고 알림을 트리거한 사용자가 '예외 사용자' 목록에 없는 경우 다음 사항이 항상 적용됩니다."
                },
                allowAutoModMessages: {
                    label: "AutoMod 메시지 허용",
                    description: "AutoMod에서 보낸 메시지가 필터링되지 않은 채 통과되도록 허용합니다."
                },
                hideBlockedUserReplies: {
                    label: "차단된 사용자 답장 숨기기",
                    description: "이전에 참여한 스레드에서 차단된 사용자의 메시지를 숨깁니다."
                },
                defaultHideUsers: {
                    label: "기본 사용자 숨기기",
                    description: "활성화하면 차단된 사용자의 메시지가 완전히 숨겨지고 예외 목록에 있는 사용자 ID의 메시지가 대신 축소됩니다(기본 Discord 동작). 비활성화하면 차단된 사용자의 메시지가 접혀지고 예외 목록에 있는 사용자 ID의 메시지가 완전히 숨겨집니다."
                },
                overrideUsers: {
                    label: "예외 사용자",
                    description: "위에서 선택한 기본 동작 대신 숨기거나 축소할 사용자 ID의 쉼표로 구분된 목록입니다."
                }
            }
        },
        noBulletPoints: {
            name: "글머리 기호 없음",
            description: "마크다운 글머리 기호(•, -, *)로 인해 글을 쓸 수 없게 됩니다(나쁜 습관)"
        },
        noDeepLinks: {
            name: "딥링크 비활성화",
            description: "Discord의 데스크톱 앱을 강제로 열려고 시도하는 성가신 딥링킹 기능을 비활성화합니다."
        },
        noDeleteSafety: {
            name: "삭제안함안전",
            description: "서버 삭제 시 '서버 이름 유형' 요구 사항을 제거합니다.",
            option: {
                confirmModal: {
                    label: "확인창",
                    description: "'정말로 이 서버를 삭제하시겠습니까?' 확인 창을 표시하시겠습니까?"
                }
            },
            modal: {
                title: "서버를 삭제하시겠습니까?",
                body: "그것이 아직 명백하지 않다면 그것은 영구적일 것입니다.",
                confirm: "실",
                cancel: "취소"
            }
        },
        noDevtoolsWarning: {
            name: "NoDevtools경고",
            description: "콘솔의 'LET'S HIT' 경고 배너를 비활성화합니다. 부작용으로 Discord가 토큰을 숨기는 것을 방지하여 임의 로그아웃을 방지합니다."
        },
        noF1: {
            name: "번호 F1",
            description: "F1은 도움말 바로가기를 비활성화합니다."
        },
        noMaskedUrlPaste: {
            name: "NoMaskedUrl붙여넣기",
            description: "선택한 텍스트로 링크를 붙여넣으면 해당 링크가 마스크된 URL로 붙여넣어지는 것을 방지합니다."
        },
        noMirroredCamera: {
            name: "미러링된 카메라 없음",
            description: "카메라가 화면을 미러링하는 것을 방지합니다."
        },
        noModalAnimation: {
            name: "모달 애니메이션 없음",
            description: "모든 모달 창에서 열기/닫기 애니메이션을 비활성화합니다."
        },
        noMosaic: {
            name: "모자이크 없음",
            description: "Discord의 시각적 모자이크 레이아웃을 제거합니다.",
            option: {
                inlineVideo: {
                    label: "인라인 비디오",
                    description: "모달 반복 없이 비디오를 재생합니다."
                }
            }
        },
        noNitroUpsell: {
            name: "NoNitro상향 판매",
            description: "클라이언트가 귀하가 Nitro를 소유하고 있다고 생각하도록 속여 Discord에서 모든 Nitro 판매 알림을 제거합니다."
        },
        noOnboarding: {
            name: "온보딩 없음",
            description: "Discord의 서버 가입 과정을 건너뛰어 보다 빠른 로그인이 가능합니다."
        },
        noOnboardingDelay: {
            name: "온보딩지연 없음",
            description: "느리고 성가신 서버 조인 지연을 우회합니다."
        },
        noPendingCount: {
            name: "보류 중인 개수 없음",
            description: "수신되는 친구 요청, 메시지 요청 및 Nitro 제안에 대한 알림 수를 제거합니다.",
            option: {
                hideFriendRequestsCount: {
                    label: "친구 요청 수 숨기기",
                    description: "들어오는 친구 요청 수 숨기기"
                },
                hideMessageRequestsCount: {
                    label: "메시지 요청 수 숨기기",
                    description: "메시지 요청 수 숨기기"
                },
                hidePremiumOffersCount: {
                    label: "Nitro 제안 수 숨기기",
                    description: "니트로 혜택 수 숨기기"
                }
            }
        },
        noProfileThemes: {
            name: "프로필 테마 없음",
            description: "자신을 제외한 모든 사람의 Nitro 프로필 테마를 완전히 제거합니다."
        },
        noPushToTalk: {
            name: "NoPushToTalk",
            description: "필요한 채널의 음성 활동에 대한 푸시-투-토크 요구 사항을 우회합니다."
        },
        noReplyMention: {
            name: "NoReply멘션",
            description: "기본적으로 응답 핑을 비활성화합니다.",
            option: {
                userList: {
                    label: "사용자 목록",
                    description: "핑을 허용하거나 면제할 사용자 목록(쉼표나 공백으로 구분해야 함)"
                },
                roleList: {
                    label: "역할 목록",
                    description: "핑을 허용하거나 면제할 역할 목록(쉼표나 공백으로 구분해야 함)"
                },
                shouldPingListed: {
                    label: "핑이 나열됨",
                    description: "행동",
                    dontPing: "나열된 사용자/역할에 대한 핑",
                    onlyPing: "나열된 사용자/역할에만 Ping을 수행합니다."
                },
                inverseShiftReply: {
                    label: "역방향 변속 반응 동작",
                    description: "Discord의 교대 응답 동작을 반전합니다(활성화된 경우 교대 응답 시 사용자를 언급)"
                }
            }
        },
        normalizeMessageLinks: {
            name: "NormalizeMessageLinks",
            description: "메시지 링크에서 Canary/ptb 접두사를 제거합니다."
        },
        noRoleHeaders: {
            name: "NoRole헤더",
            description: "우리는 모두 평등해요!! 구성원 목록에서 역할 제목을 제거합니다."
        },
        noRPC: {
            name: "NoRPC",
            description: "Discord는 풍부한 존재감을 비활성화합니다."
        },
        noServerEmojis: {
            name: "FromServerEmojis",
            description: "서버는 자동 완성 메뉴에 이모티콘을 표시하지 않습니다.",
            option: {
                shownEmojis: {
                    label: "표시된 이모티콘",
                    description: "자동완성 메뉴에 표시할 이모티콘을 선택하세요",
                    onlyUnicode: "유니코드 이모티콘만 가능",
                    currentServer: "현재 서버의 유니코드 이모티콘 및 이모티콘",
                    all: "유니코드 이모티콘 및 모든 서버 이모티콘(Discord 기본값)"
                }
            }
        },
        noSystemBadge: {
            name: "시스템배지 없음",
            description: "작업 표시줄 및 시스템 트레이에서 읽지 않은 알림 배지를 비활성화합니다."
        },
        notificationTitle: {
            name: "알림제목",
            description: "데스크톱 알림을 더욱 유익하게 만듭니다."
        },
        notificationVolume: {
            name: "알림볼륨",
            description: "Discord 알림에 대한 사용자 지정 볼륨을 설정하세요.",
            option: {
                notificationVolume: {
                    label: "알림음",
                    description: "알림 볼륨"
                }
            }
        },
        noTypingAnimation: {
            name: "타이핑 안 함애니메이션",
            description: "채팅에서 타이핑 애니메이션을 비활성화합니다."
        },
        noUnblockToJump: {
            name: "NoUnblockToJump",
            description: "차단을 해제하지 않고도 차단되거나 무시된 사용자(스패머 포함)의 메시지를 건너뛸 수 있습니다."
        },
        onePingPerDM: {
            name: "원핑PerDM",
            description: "사용자가 DM으로 읽지 않은 메시지를 연속으로 보내더라도 소리 알림은 한 번만 받게 됩니다.",
            option: {
                channelToAffect: {
                    label: "영향을 받을 채널 유형",
                    description: "플러그인이 영향을 미칠 DM 유형을 선택하세요.",
                    both: "둘 다",
                    user: "사용자 DM",
                    group: "그룹 DM"
                },
                allowMentions: {
                    label: "@AllowMentions",
                    description: "@멘션에 대한 소리 알림 받기"
                },
                allowEveryone: {
                    label: "@모두 허용",
                    description: "그룹 DM에서 @everyone 및 @here에 대한 소리 알림 받기"
                },
                ignoreUsers: {
                    label: "무시할 사용자",
                    description: "알림을 제한하지 않는 사용자 ID(쉼표 + 공백으로 구분)"
                },
                alwaysPlaySound: {
                    label: "항상 소리 재생",
                    description: "알림음이 비활성화된 경우에도 소리 재생"
                }
            }
        },
        openInApp: {
            name: "오픈인앱",
            description: "브라우저 대신 관련 애플리케이션에서 링크를 엽니다.",
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
                    description: "VRChat 앱에서 VRChat 링크 열기"
                }
            },
            notification: {
                open: "기본 앱에서 링크를 열었습니다."
            }
        },
        overrideForumDefaults: {
            name: "포럼 기본값 재정의",
            description: "기본 포럼 레이아웃/정렬 순서를 재정의할 수 있습니다. 여전히 채널별로 변경할 수 있습니다.",
            option: {
                defaultLayout: {
                    label: "기본 레이아웃",
                    description: "기본으로 사용할 레이아웃을 선택하세요",
                    list: "목록",
                    gallery: "갱도"
                },
                defaultSortOrder: {
                    label: "기본 정렬 순서",
                    description: "기본적으로 사용할 정렬 순서를 선택하세요.",
                    recentlyActive: "마지막 활성",
                    datePosted: "게시 날짜"
                }
            }
        },
        partyMode: {
            name: "파티 모드",
            description: "파티는 끝나지 않으므로 파티 모드를 사용할 수 있습니다 ✨",
            option: {
                superIntensePartyMode: {
                    label: "매우 강렬한 파티 모드",
                    description: "파티 밀도",
                    normal: "정상",
                    better: "더 나은",
                    projectX: "프로젝트 X"
                }
            }
        },
        pauseInvitesForever: {
            name: "일시중지초대영원히",
            description: "Discord가 어리석게 제거했던 '초대 무기한 일시 중지' 옵션을 다시 제공합니다.",
            pauseIndefinitely: "무기한 일시중지"
        },
        permissionFreeWill: {
            name: "허가자유의지",
            description: "채널 권한 관리에서 클라이언트 측 제한을 비활성화합니다.",
            option: {
                lockout: {
                    label: "이중 자물쇠",
                    description: "우회 권한 충돌 방지('이 작업을 수행하시겠습니까?')"
                },
                onboarding: {
                    label: "시작 요구 사항",
                    description: "서버를 호환되지 않게 만들 수 있는 온보딩 요구 사항을 우회합니다('이 변경으로 인해 서버가 호환되지 않을 수 있습니다 [...]')."
                }
            }
        },
        permissionsViewer: {
            name: "권한뷰어",
            description: "사용자나 채널이 갖고 있는 권한과 서버의 역할을 볼 수 있습니다.",
            view: "권한 보기",
            option: {
                permissionsSortOrder: {
                    label: "권한 정렬 순서",
                    description: "역할이 사용자에게 특정 권한을 부여하는 방법을 결정하는 데 사용되는 정렬 방법",
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
                grantedBy: "허용적",
                serverOwner: "서버 소유자",
                ownerRole: "소유자",
                sortingBy: "{{method}}는 우선순위에 따라 정렬됩니다.",
                highest: "가장 높은 역할",
                lowest: "가장 낮은 역할",
                details: "역할 세부정보"
            }
        },
        petpet: {
            name: "애완동물Pet",
            description: "모든 이미지에서 petpet gif를 생성하는 /petpet 명령을 추가합니다.",
            command: {
                petpet: {
                    description: "애완동물 gif를 만들어보세요. 이미지 옵션 중 하나만 지정할 수 있습니다.",
                    delay: "각 프레임 사이의 지연입니다. 기본값은 20입니다.",
                    resolution: "gif 해상도입니다. 기본값은 120입니다. 이상한 숫자를 입력했는데 Discord가 멈춘다면 그건 여러분의 잘못입니다.",
                    image: "사용할 이미지 첨부",
                    url: "이미지를 가져올 URL",
                    user: "아바타가 이미지로 사용될 사용자입니다.",
                    noServerPfp: "'사용자' 옵션을 사용할 때 서버별 아바타 대신 일반 아바타를 사용하세요.",
                    error: {
                        noImage: "지정된 사진이 없습니다!",
                        delayTooLow: "지연 시간은 20 이상이어야 합니다.",
                    }
                }
            },
            error: {
                uploadNotImage: "업로드한 파일은 이미지가 아닙니다.",
                fetchUserFailed: "사용자를 검색하지 못했습니다. 자세한 내용은 콘솔을 확인하세요.",
                fetchImageFailed: "{{url}}을(를) 로드하는 동안 오류가 발생했습니다. 자세한 내용은 콘솔을 확인하세요."
            }
        },
        pictureInPicture: {
            name: "픽처인픽처",
            description: "비디오에 PIP 기능을 추가합니다(다운로드 버튼 옆)",
            tooltip: "그림 속 그림 전환",
            option: {
                loop: {
                    label: "고리",
                    description: "PiP 비디오를 반복할지 여부"
                }
            }
        },
        pinDMs: {
            name: "PinDM",
            description: "비공개 채널(DM)을 DM 목록 상단에 고정할 수 있습니다. DM을 마우스 오른쪽 버튼으로 클릭하여 DM의 순서를 고정/제거하거나 변경할 수 있습니다.",
            context: {
                category: {
                    label: "DM 카테고리 메뉴",
                    edit: "카테고리 편집",
                    up: "위로 이동",
                    down: "아래로 이동",
                    delete: "카테고리 삭제",
                    unnamed: "익명의"
                },
                pin: {
                    label: "DM 사비틀",
                    addCategory: "카테고리 역겹다"
                },
                unPin: {
                    label: "DM 고정 해제",
                    move: "카테고리로 이동"
                }
            },
            option: {
                pinOrder: {
                    label: "고정 순서",
                    description: "고정된 DM은 어떤 순서로 표시되어야 하나요?",
                    lastMessage: "마지막 메시지 날짜 기준",
                    custom: "비공개(채널을 마우스 오른쪽 버튼으로 클릭하여 순서 변경)"
                },
                canCollapseDmSection: {
                    label: "접이식 고정 섹션",
                    description: "분류되지 않은 DM 섹션을 접을 수 있도록 설정"
                },
                dmSectionCollapsed: {
                    label: "DM 섹션 축소",
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
                    name: "이름",
                    color: "색상",
                    save: "구하다",
                    create: "만들다"
                }
            }
        },
        pingNotifications: {
            name: "핑 알림",
            description: "사용자 정의 가능한 알림 및 개선된 언급 형식",
            option: {
                friends: {
                    label: "친구",
                    description: "친구가 서버에 메시지를 보내면 알림을 받습니다."
                },
                mentions: {
                    label: "언급",
                    description: "누군가가 귀하를 직접 @멘션하면 알림을 받습니다."
                },
                dms: {
                    label: "DM'ler",
                    description: "다이렉트 메시지(DM)에 대한 알림 받기"
                },
                showInActive: {
                    label: "활성 채널에 표시",
                    description: "현재 활성 채널에도 알림 표시"
                },
                ignoreMuted: {
                    label: "음소거 무시",
                    description: "음소거된 서버, 채널 또는 사용자의 알림을 우회합니다."
                }
            },
            unknown: "알려지지 않은",
            dm: "DM",
            groupDM: "그룹DM",
            title: "{{channelName}} 채널의 {{username}}"
        },
        pinIcon: {
            name: "핀아이콘",
            description: "고정된 메시지에 핀 아이콘을 추가합니다."
        },
        plainFolderIcon: {
            name: "일반폴더아이콘",
            description: "폴더에 작은 서버 아이콘은 표시되지 않습니다."
        },
        platformIndicators: {
            name: "플랫폼 지표",
            description: "사용자에게 플랫폼 표시기(데스크톱, 모바일, 웹...)를 추가합니다.",
            embeddedTooltip: "콘솔",
            vrTooltip: "VR",
            option: {
                list: {
                    label: "목록",
                    description: "회원 목록에 표시기 표시"
                },
                badges: {
                    label: "배지",
                    description: "사용자 프로필에 표시기를 배지로 표시"
                },
                messages: {
                    label: "메시지",
                    description: "메시지 내부에 표시기 표시"
                },
                colorMobileIndicator: {
                    label: "모바일 디스플레이에 색상을 입히세요",
                    description: "모바일 표시기가 사용자 상태 색상을 사용할지 여부를 결정합니다."
                },
                showBots: {
                    label: "봇 표시",
                    description: "봇에 플랫폼 표시기를 표시할지 여부를 결정합니다."
                }
            }
        },
        platformSpoofer: {
            name: "플랫폼Spoofer",
            description: "현재 사용 중인 모든 플랫폼이나 장치를 시뮬레이션합니다.",
            about: "이 추가 기능이 귀하를 경고하거나 금지하지 않도록 보호한다고 보장할 수 없습니다.",
            platform: {
                desktop: "디스코드 클라이언트",
                web: "디스코드 웹",
                ios: "iOS 디스코드",
                android: "디스코드 안드로이드",
                xbox: "내재된 불화",
                playstation: "내재된 불화",
                vr: "VR"
            },
            option: {
                platform: {
                    label: "플랫폼",
                    description: "어떤 플랫폼으로 나타나기를 원하시나요?",
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
            name: "Plexcord 도구 상자",
            description: "Plexcord 빠른 작업을 호스팅하는 앱 바에 버튼을 추가합니다.",
            tooltip: "Plexcord 도구 상자",
            context: {
                openLog: "알림 로그 열기",
                enableQuickCSS: "QuickCSS 활성화",
                openQuickCSS: "QuickCSS 열기",
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
            name: "폴란드어말씨",
            description: "메시지를 더 보기 좋게 만들고 더 나은 문법을 갖도록 약간의 편집을 수행합니다. 설정을 확인하세요",
            option: {
                quickDisable: {
                    label: "빠른 비활성화",
                    description: "빠른 비활성화. 앱을 다시 시작하지 않고도 메시지 편집을 끕니다."
                },
                blockedWords: {
                    label: "차단된 단어",
                    description: "대문자로 쓰지 않는 단어(쉼표로 구분)"
                },
                fixApostrophes: {
                    label: "아포스트로피 수정",
                    description: "약어에 아포스트로피가 포함되어 있는지 확인하세요."
                },
                expandContractions: {
                    label: "약어 열기",
                    description: "축약된 단어를 명시적인 형식(예: 하지 않음 -> 하지 않음)으로 변환합니다."
                },
                fixCapitalization: {
                    label: "대문자 편집",
                    description: "문장이 대문자로 시작되도록 허용합니다."
                },
                fixPunctuation: {
                    label: "올바른 구두점",
                    description: "구두점 주위의 공백을 편집합니다."
                },
                fixPunctuationFrequency: {
                    label: "구두점 빈도",
                    description: "문장 끝에 마침표를 찍는 빈도의 백분율입니다(이 기능은 일부 사람들에게 불편을 줄 수 있음).",
                }
            }
        },
        previewMessage: {
            name: "미리보기메시지",
            description: "메시지를 보내기 전에 미리 볼 수 있습니다.",
            tooltip: "메시지 미리보기"
        },
        profileSets: {
            name: "프로파일 세트",
            description: "프로필 사전 설정을 저장하고 설정의 프로필 섹션을 통해 로드할 수 있습니다.",
            toast: {
                importFailed: "프로필 사전 설정을 가져오지 못했습니다. 파일이 유효하지 않을 수 있습니다.",
            },
            option: {
                avatarSize: {
                    label: "아바타 크기",
                    description: "프로필 사전 설정 목록의 아바타 크기"
                },
            },
            modal: {
                override: "보수",
                merge: "병합",
                cancel: "취소",
                timestamp: "{{formattedTime}}의 {{formattedDate}}",
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
            name: "질문하다",
            description: "다양한 기능으로 임무 경험을 향상시키거나 원하는 기능이 아닌 경우 기능을 완전히 비활성화하세요.",
            quests: "퀘스트",
            context: {
                quest: {
                    label: "작업 버튼 메뉴",
                    ignore: "모두 무시로 표시",
                    reset: "무시 목록 재설정",
                    fetch: "작업 가져오기",
                    markAsIgnored: "무시로 표시",
                    unmarkAsIgnored: "무시 제거",
                    stopAuto: "자동 완성 중지",
                    copyQuestID: "작업 ID 복사",
                    startAuto: "자동 완성 시작"
                }
            },
            settings: {
                questButton: {
                    title: "작업 버튼",
                    description: "서버 목록에 청구되지 않은 퀘스트에 대한 선택적 표시와 함께 퀘스트 버튼을 표시합니다.",
                    leftClick: "왼쪽 클릭 동작",
                    middleClick: "중간 클릭 동작",
                    rightClick: "마우스 오른쪽 버튼 클릭 동작",
                    visibility: "버튼 가시성",
                    unclaimedIndicator: "원치 않는 표시기",
                    badgeColor: "배지 색상",
                    rewardDisplay: "수상 전시",
                    includedRewardTypes: "포함된 보상 유형",
                    includedRewardTypesDesc: "버튼 표시, 배지 개수 및 알림 소리를 재생할 때 이러한 보상 유형이 있는 퀘스트만 청구되지 않은 것으로 계산됩니다.",
                    selectRewardTypes: "미청구 계산에 포함할 보상 유형을 선택하세요...",
                    noRewardType: "이 이름에는 지원되는 작업 기능이 없습니다.",
                    default: "기본",
                    disable: "장애를 입히다"
                },
                questFeatures: {
                    title: "작업 기능",
                    description: "특정 작업 속성을 변경합니다.",
                    popupWarning: "완료된 퀘스트 및 퀘스트 진행 상황 추적에서는 {{disablePopup}} 옵션이 무시됩니다.",
                    videoQuestInfo: "{{completeVideo}} 옵션은 비디오 작업 기간 동안 기다렸다가 자동으로 완료로 표시합니다.",
                    gameQuestInfo: "마찬가지로, {{completeGame}} 옵션은 게임 작업 기간 동안 기다렸다가 자동으로 완료로 표시합니다. 이 옵션은 공식 데스크톱 클라이언트에서만 지원됩니다.",
                    manualStartWarning: "작업을 수동으로 시작해야 합니다. 첫 번째 클릭은 백그라운드에서 작업을 시작합니다. 비디오 작업의 경우 후속 클릭은 정상적으로 비디오 모달을 엽니다. 미션을 취소하려면 미션 타일에서 상황에 맞는 메뉴를 열고 {{stopAuto}}를 선택하세요.",
                    tosWarning: "이러한 옵션을 사용하는 것은 Discord의 서비스 약관에 위배됩니다. 자신의 책임하에 사용하십시오.",
                    selectFeatures: "변경할 작업 속성을 선택합니다.",
                    disablePopup: "계정 패널에서 작업 팝업 비활성화",
                    completeVideo: "백그라운드에서 비디오 작업 완료",
                    completeGame: "백그라운드에서 게임플레이 작업 완료",
                    stopAuto: "자동 완성 중지"
                },
                restyleQuests: {
                    title: "작업 재지정",
                    description: "가시성을 위해 선택적 테마 색상으로 작업을 강조 표시합니다.",
                    precedenceNote: "요청된 작업 및 만료된 작업 스타일은 작업이 무시되더라도 우선적으로 적용됩니다.",
                    gradientStyle: "그라데이션 스틸리",
                    assetPreload: "자산 부트로더",
                    unclaimed: "원치 않는",
                    claimed: "요청됨",
                    ignored: "무시됨",
                    expired: "만료됨",
                    intenseGradient: "조밀한 재캐스트 그라데이션",
                    defaultGradient: "기본 재캐스트 그라데이션",
                    blackGradient: "미묘한 블랙 그라데이션",
                    noGradient: "그라데이션 없음",
                    loadAllAssets: "페이지 로드 시 모든 작업 자산 로드",
                    loadDuringScroll: "페이지 스크롤 중 작업 자산 로드"
                },
                reorderQuests: {
                    title: "작업 재정렬",
                    description: "상태에 따라 작업을 정렬합니다. 퀘스트 페이지에서 \"Questify\" 정렬 옵션을 선택한 경우 적용됩니다.",
                    formatNote: "쉼표로 구분된 목록에는 다음이 모두 포함되어야 합니다: {{items}}.",
                    placeholder: "UNCLAIMED, CLAIMED, IGNORED, EXPIRED를 모두 추가해야 합니다.",
                    invalidFormat: "형식이 잘못되었습니다.",
                    unclaimedSubsort: "청구되지 않은 하위 직급",
                    claimedSubsort: "하위 직급 요청",
                    ignoredSubsort: "무시된 하위 순서",
                    expiredSubsort: "만료된 하위 직급",
                    addedNewest: "추가됨(최신)",
                    addedOldest: "추가(가장 오래된 것)",
                    expiredRecent: "만료됨(최신)",
                    expiredLeast: "만료됨(적어도 최신)",
                    expiringSoon: "만료 예정(가장 가까운 것)",
                    expiringLate: "만료(최신)",
                    claimedRecent: "요청됨(최신)",
                    claimedLeast: "요청됨(적어도 최신)",
                    ignoredQuestProfile: "무시된 작업 프로필",
                    sharedProfile: "공유: 이 클라이언트 공유의 모든 계정은 무시됩니다.",
                    privateProfile: "비공개: 이 클라이언트의 모든 계정에는 별도의 무시가 있습니다.",
                    rememberSort: "정렬 선택 기억",
                    rememberFilter: "필터 선택 기억",
                    yes: "예",
                    no: "아니요",
                    rememberNote: "이 정렬 및 필터 선택은 작업 페이지에 내장된 정렬 및 필터 옵션을 나타냅니다. 위의 사용자 정의 정렬은 퀘스트 페이지에서 \"Questify\" 정렬 옵션을 선택한 경우에만 적용됩니다. 회수가 비활성화된 경우 작업 페이지를 열 때마다 정렬 또는 필터 옵션이 재설정됩니다."
                },
                fetchingQuests: {
                    title: "작업 가져오기",
                    description: "Discord에서 작업을 가져오는 빈도를 구성하고 새 작업에 대한 알림을 설정하세요.",
                    defaultBehavior: "기본적으로 Discord는 작업이 설치되어 있고 작업 페이지를 방문할 때만 작업을 표시합니다. 즉, 아래에 정의된 가져오기 간격이 없으면 이 플러그인은 하루 종일 추가된 새 퀘스트에 대한 알림을 받지 않습니다.",
                    requirement: "이는 퀘스트 버튼이 활성화되어 있고 {{청구되지 않음}}으로 설정되어 있는지, 아니면 {{항상}}으로 설정되어 있고 청구되지 않은 {{알약}}, {{배지}} 또는 {{모두}} 표시기가 활성화되어 있는지에 따라 다릅니다. 그렇지 않으면 주기적으로 퀘스트를 가져올 필요가 없습니다.",
                    blockWarning: "또한, {{questFeatures}} 설정에서 {{fetchingQuests}}가 차단된 경우에는 작동하지 않습니다.",
                    fetchInterval: "가져오기 범위",
                    alertSound: "경고음",
                    intervalPlaceholder: "30분에서 12시간 사이의 간격을 선택하거나 입력합니다.",
                    intervalFeedback: "간격은 30분에서 12시간 사이여야 합니다.",
                    soundPlaceholder: "소리를 선택하거나 맞춤 소리 URL을 제공하세요.",
                    soundFeedback: "오디오를 찾을 수 없거나 URL이 지원되는 도메인에서 가져온 것이 아닙니다.",
                    disabled: "장애가 있는",
                    minutes: "1분",
                    minute: "1분",
                    hours: "순간",
                    hour: "순간",
                    thirtyMinutes: "30분",
                    oneHour: "1 순간",
                    threeHours: "3 순간",
                    sixHours: "6 순간",
                    twelveHours: "12 순간",
                    customSound: "맞춤형 사운드"
                },
                disableOptions: {
                    everything: "모든 것을 비활성화",
                    discovery: "탐색 탭 비활성화",
                    dms: "DM의 작업 탭 비활성화",
                    fetching: "작업 가져오기 비활성화",
                    popup: "계정 패널 위 팝업 비활성화",
                    sponsored: "작업 페이지에서 스폰서 배너 비활성화",
                    badge: "사용자 프로필에서 배지 비활성화",
                    inventory: "선물 재고 운송 알림 비활성화",
                    friendsList: "친구 목록 현재 진행 중인 프로모션",
                    membersList: "회원 목록 활성 재생 아이콘",
                    gameQuests: "백그라운드에서 게임/활동 챌린지를 완료하세요",
                    videoQuests: "백그라운드에서 비디오 시청 작업 완료",
                    achievementQuests: "백그라운드에서 활동 작업 완료",
                    mobileDesktop: "모바일 작업을 데스크톱과 호환되게 만들기",
                    notifyOnComplete: "작업이 완료되면 알림"
                },
                options: {
                    always: "언제나",
                    unclaimed: "원치 않는",
                    never: "절대",
                    pill: "우연",
                    badge: "배지",
                    both: "둘 다",
                    none: "없음",
                    openQuests: "오픈 퀘스트",
                    contextMenu: "상황에 맞는 메뉴",
                    pluginSettings: "플러그인 설정",
                    nothing: "아무것도 아님",
                    orbs: "구체",
                    nitroCodes: "니트로 코드",
                    rewardCodes: "보상 코드",
                    inGameItems: "게임 내 아이템",
                    profileCollectibles: "프로필 컬렉션"
                }
            },
            option: {
                disableQuests: {
                    label: "작업 비활성화",
                    description: "비활성화할 작업 기능을 선택합니다."
                },
                disableQuestsEverything: {
                    label: "모든 것을 비활성화",
                    description: "모든 작업 기능을 비활성화합니다."
                },
                disableQuestsFetchingQuests: {
                    label: "작업 가져오기 비활성화",
                    description: "Discord에서 작업 가져오기를 비활성화합니다."
                },
                disableQuestsDirectMessagesTab: {
                    label: "DM에서 작업 탭 비활성화",
                    description: "직접 메시지 페이지에서 작업 탭을 비활성화합니다."
                },
                disableQuestsDiscoveryTab: {
                    label: "탐색 탭 비활성화",
                    description: "탐색 페이지에서 퀘스트 탭을 비활성화합니다."
                },
                disableQuestsPageSponsoredBanner: {
                    label: "작업 페이지에서 스폰서 배너 비활성화",
                    description: "작업 페이지에서 스폰서 배너를 비활성화합니다."
                },
                disableQuestsPopupAboveAccountPanel: {
                    label: "계정 패널에서 팝업 비활성화",
                    description: "계정 패널 상단의 작업 팝업을 비활성화하세요."
                },
                disableQuestsBadgeOnUserProfiles: {
                    label: "사용자 프로필에서 배지 비활성화",
                    description: "사용자 프로필에서 작업 배지를 비활성화합니다."
                },
                disableQuestsGiftInventoryRelocationNotice: {
                    label: "선물 재고 이동 알림 비활성화",
                    description: "선물 인벤토리 퀘스트 이동 알림을 비활성화합니다."
                },
                disableFriendsListActiveNowPromotion: {
                    label: "현재 활성화된 친구 목록 비활성화",
                    description: "친구가 플레이한 게임에 대한 Quest 프로모션을 비활성화합니다."
                },
                disableMembersListActivelyPlayingIcons: {
                    label: "회원 목록에서 활성 플레이 아이콘 비활성화",
                    description: "회원 목록에서 활성 플레이 아이콘을 비활성화합니다."
                },
                makeMobileQuestsDesktopCompatible: {
                    label: "모바일 작업을 데스크톱과 호환되게 만들기",
                    description: "모바일 전용 작업을 데스크톱과 호환되도록 만드세요."
                },
                completeVideoQuestsInBackground: {
                    label: "백그라운드에서 비디오 작업 완료",
                    description: "비디오 시간이 지난 후 백그라운드에서 비디오 미션을 완료하세요."
                },
                completeGameQuestsInBackground: {
                    label: "백그라운드에서 게임 미션 완료",
                    description: "게임 시간이 지나면 백그라운드에서 게임 미션을 완료하세요."
                },
                completeAchievementQuestsInBackground: {
                    label: "백그라운드에서 활동 작업 완료",
                    description: "백그라운드에서 활동 챌린지를 완료하세요."
                },
                notifyOnQuestComplete: {
                    label: "작업이 완료되면 알림",
                    description: "작업이 자동으로 완료되면 알림을 표시합니다."
                },
                questButton: {
                    label: "작업 버튼",
                    description: "서버 목록에 퀘스트 버튼을 표시합니다."
                },
                questButtonDisplay: {
                    label: "작업 버튼 모양",
                    description: "서버 목록의 작업 버튼에 사용할 표시 유형입니다."
                },
                questRewardIncludeRewardCode: {
                    label: "보상 코드 포함",
                    description: "퀘스트 수를 볼 때 보상 코드가 있는 퀘스트를 포함합니다."
                },
                questRewardIncludeNitroCode: {
                    label: "니트로 코드 포함",
                    description: "미션 수를 볼 때 Nitro Coded Mission을 포함합니다."
                },
                questRewardIncludeInGame: {
                    label: "게임 내 보상 포함",
                    description: "미션 수를 볼 때 게임 내 보상이 포함된 미션을 포함하세요."
                },
                questRewardIncludeCollectibles: {
                    label: "컬렉션 포함",
                    description: "퀘스트 수를 볼 때 수집 가능한 항목이 포함된 퀘스트를 포함합니다."
                },
                questRewardIncludeOrbs: {
                    label: "구 포함",
                    description: "퀘스트 수를 볼 때 전 세계에서 우승한 퀘스트를 포함하세요."
                },
                questButtonUnclaimed: {
                    label: "퀘스트 버튼 미청구 표시기",
                    description: "서버 목록의 작업 버튼에 있는 청구되지 않은 표시에 사용할 표시 유형입니다."
                },
                questButtonBadgeColor: {
                    label: "퀘스트 버튼 배지 색상",
                    description: "서버 목록의 퀘스트 버튼 배지 색상입니다."
                },
                questButtonLeftClickAction: {
                    label: "왼쪽 클릭 동작",
                    description: "서버 목록에서 작업 버튼을 마우스 왼쪽 버튼으로 클릭할 때 수행할 작업입니다."
                },
                questButtonMiddleClickAction: {
                    label: "중간 클릭 동작",
                    description: "서버 목록에서 작업 버튼을 마우스 가운데 버튼으로 클릭할 때 수행할 작업입니다."
                },
                questButtonRightClickAction: {
                    label: "마우스 오른쪽 버튼 클릭 동작",
                    description: "서버 목록에서 작업 버튼을 마우스 오른쪽 버튼으로 클릭할 때 수행할 작업입니다."
                },
                fetchingQuests: {
                    label: "작업 가져오기",
                    description: "Discord에서 작업을 가져옵니다."
                },
                fetchingQuestsInterval: {
                    label: "퀘스트 가져오기 범위",
                    description: "Discord에서 작업을 가져오는 간격(초)입니다."
                },
                fetchingQuestsAlert: {
                    label: "퀘스트 가져오기 알림",
                    description: "새로운 미션이 감지되면 재생되는 소리입니다."
                },
                fetchingQuestsAlertVolume: {
                    label: "퀘스트 가져오기 알림 볼륨",
                    description: "새로운 미션이 감지될 때 재생되는 사운드 볼륨입니다."
                },
                restyleQuests: {
                    label: "작업 재지정",
                    description: "작업 페이지에서 작업 타일의 모양을 사용자 지정합니다."
                },
                restyleQuestsUnclaimed: {
                    label: "재포맷 작업 - 요청되지 않음",
                    description: "작업 페이지에서 청구되지 않은 작업 타일의 색상입니다."
                },
                restyleQuestsClaimed: {
                    label: "재형식 작업 - 요청됨",
                    description: "작업 페이지에서 요청된 작업 타일의 색상입니다."
                },
                restyleQuestsIgnored: {
                    label: "재형식화 작업 - 무시됨",
                    description: "작업 페이지에서 무시된 작업 타일의 색상입니다."
                },
                restyleQuestsExpired: {
                    label: "재포맷 작업 - 만료됨",
                    description: "작업 페이지에서 만료된 작업 타일의 색상입니다."
                },
                restyleQuestsGradient: {
                    label: "재형식화 작업 - 그라데이션",
                    description: "작업 타일에 사용되는 그라데이션 스타일입니다."
                },
                restyleQuestsPreload: {
                    label: "재포맷 작업 - 부트로더",
                    description: "작업 타일용 자산을 미리 로드해 보세요."
                },
                reorderQuests: {
                    label: "작업 재정렬",
                    description: "상태에 따라 작업을 정렬합니다. 기본 정렬을 위해 비워두세요. 쉼표로 구분된 목록에는 UNCLAIMED, CLAIMED, IGNORED, EXPIRED가 모두 포함되어야 합니다."
                },
                unclaimedSubsort: {
                    label: "청구되지 않은 하위 직급",
                    description: "청구되지 않은 작업에 대한 하위 정렬 방법입니다."
                },
                claimedSubsort: {
                    label: "하위 직급 요청",
                    description: "요청된 작업에 대한 하위 정렬 방법입니다."
                },
                ignoredSubsort: {
                    label: "무시된 하위 순서",
                    description: "무시된 작업에 대한 하위 정렬 방법입니다."
                },
                expiredSubsort: {
                    label: "만료된 하위 직급",
                    description: "만료된 태스크를 다운소팅하는 방법입니다."
                },
                unclaimedUnignoredQuests: {
                    label: "요청되지 않은 무시되지 않은 작업",
                    description: "청구되지 않은 작업 및 무시되지 않은 작업 수를 추적합니다."
                },
                onQuestsPage: {
                    label: "작업 페이지에서",
                    description: "사용자가 현재 작업 페이지에 있는지 여부입니다."
                },
                triggerQuestsRerender: {
                    label: "퀘스트 재렌더링 트리거",
                    description: "이 설정을 변경하여 작업 페이지의 다시 렌더링을 트리거합니다."
                },
                ignoredQuestProfile: {
                    label: "무시된 작업 프로필",
                    description: "무시된 작업에 사용되는 프로필입니다."
                },
                rememberQuestPageSort: {
                    label: "퀘스트 페이지 정렬을 기억하세요",
                    description: "작업 페이지에서 마지막으로 사용된 순서를 기억하세요."
                },
                rememberQuestPageFilters: {
                    label: "작업 페이지 필터 기억",
                    description: "작업 페이지에서 마지막으로 사용한 필터를 기억하세요."
                },
                lastQuestPageSort: {
                    label: "최신 퀘스트 페이지 순위",
                    description: "작업 페이지에서 마지막으로 사용된 순서를 기억하세요."
                },
                lastQuestPageFilters: {
                    label: "최신 작업 페이지 필터",
                    description: "작업 페이지에서 마지막으로 사용한 필터를 기억하세요."
                },
                ignoredQuestIDs: {
                    label: "무시된 작업 ID",
                    description: "무시된 작업 ID의 배열입니다."
                },
                resumeQuestIDs: {
                    label: "진행 중인 작업 ID",
                    description: "백그라운드에서 자동 완성되는 작업 ID 배열입니다."
                }
            },
            button: {
                questInProgressWithTime: "완료 중({{remainTime}})",
                completing: "완료 중",
                resume: "데밤 그리고 (~{{remainTime}})",
                complete: "{{remainTime}} 완료",
                completeImmediate: "완료(즉시)",
                completed: "완전한"
            },
            reward: {
                orbs: "{{orbQuantity}} 오브는 {{completingText}}에 포함됩니다.",
                article: "{{itemName}}에 대한 {{completingText}}.",
                unrecognized: "인식할 수 없는 보상 유형에 대한 {{completingText}}입니다."
            },
            notification: {
                completed: {
                    title: "작업이 완료되었습니다",
                    body: "{{questName}} 퀘스트가 완료되었습니다."
                }
            }
        },
        questionMarkReplacement: {
            name: "물음표교체",
            description: "메시지가 물음표로만 구성된 경우 모든 물음표가 선택한 문자열로 대체됩니다.",
            option: {
                replace: {
                    label: "변화",
                    description: "다음으로 교체"
                }
            }
        },
        quickMention: {
            name: "빠른멘션",
            description: "메시지 작업 표시줄에 빠른 멘션 버튼을 추가합니다.",
            tooltip: "빠른 베팅"
        },
        quickReply: {
            name: "빠른답장",
            description: "단축키를 사용하여 메시지에 답장(ctrl + up/down)하고 편집(ctrl + Shift + up/down)할 수 있습니다.",
            option: {
                shouldMention: {
                    label: "언급해야 할까",
                    description: "기본적으로 응답 시 Ping",
                    noReplyMentionPlugin: "NoReplyMention 플러그인 팔로우(활성화된 경우)",
                    enabled: "효과적인",
                    disabled: "장애가 있는"
                },
                ignoreBlockedAndIgnored: {
                    label: "차단 및 무시 무시",
                    description: "탐색하는 동안 차단/무시된 사용자의 메시지를 무시합니다."
                }
            }
        },
        quickThemeSwitcher: {
            name: "QuickThemeSwitcher",
            description: "키보드 단축키를 사용하여 테마 간을 빠르게 전환하세요.",
            about: {
                title: "단축키",
                description: "Ctrl/Cmd+Shift+화살표 키를 사용하여 탐색합니다(왼쪽/오른쪽: 테마 간 순환, 위쪽: 활성화, 아래쪽: 비활성화).",
                reload: "테마 목록을 새로 고치려면 Ctrl/Cmd+Shift+Alt를 누르세요."
            },
            modal: {
                added: "{{count}}개의 새로운 테마가 추가되었습니다",
                removed: "{{count}}개의 테마가 삭제되었습니다.",
                reloaded: "{{themeCount}} 테마가 다시 로드되었습니다.",
                addedLocal: "{{count}}개의 로컬 테마를 추가했습니다.",
                removedLocal: "{{count}}개의 기본 테마가 제거되었습니다.",
            },
            option: {
                includeLocal: {
                    label: "기본 테마 포함",
                    description: "목록에 기기의 기본 테마가 포함됩니다."
                },
                includeOnline: {
                    label: "온라인 테마 포함",
                    description: "목록에 온라인 테마가 포함되어 있습니다."
                },
                sortOrder: {
                    label: "정렬 기준",
                    description: "정렬 방법",
                    asc: "아단 지예",
                    desc: "지덴 아야",
                    recent: "손에"
                },
                autoRefresh: {
                    label: "자동 새로고침",
                    description: "변경 사항이 감지되면 테마 목록을 자동으로 새로 고칩니다."
                },
                showNotifications: {
                    label: "알림 표시",
                    description: "테마가 추가되거나 제거되면 알림을 표시합니다."
                }
            }
        },
        quoter: {
            name: "인용문",
            description: "메시지에서 영감을 주는 인용 이미지를 만들 수 있습니다.",
            context: {
                quote: "인용"
            },
            modal: {
                title: "4K'다 야칼라",
                grayscale: "흑백",
                export: "내보내다",
                send: "보내다",
                saveAsGIF: "GIF로 저장",
                saveDescription: "PNG 대신 GIF로 이미지 저장/전송",
                showWatermark: "워터마크 표시",
                watermarkText: "Filigran Metni(최대 32자)"
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
                    label: "선조",
                    description: "사용자 정의 워터마크 텍스트(최대 32자)"
                },
                grayscale: {
                    label: "흑백",
                    description: "기본적으로 흑백 활성화"
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
            name: "랜덤보이스",
            description: "음소거 버튼 옆에 임의 음성 통화 참여 버튼을 추가합니다.",
            tooltip: "랜덤 보이스",
            context: {
                label: "사운드 컨디셔너",
                amountLabel: "사용자 수",
                spacesLabel: "빈방 있음",
                voiceLabel: "SES 리미티",
                selfLabel: "나만의 설정",
                select: {
                    servers: "서버 선택",
                    list: "목록 선택",
                    filters: "필터 선택",
                    amount: "사용자 수",
                    userAmount: "{{amount}} 사용자",
                    parameters: "매개변수",
                    moreThan: "이상",
                    lessThan: "그 이하",
                    equalTo: "같음",
                    spaces: "빈방 있음",
                    voice: "한계"
                },
                filter: {
                    muted: "조용히",
                    deafened: "귀가 먹은",
                    camera: "카메라",
                    stream: "방송",
                    includeFilters: "필터 포함",
                    avoidFilters: "필터를 피하세요"
                },
                reset: {
                    list: "목록 재설정"
                },
                voice: {
                    label: "사운드 설정",
                    auto: {
                        mute: "자동 음소거",
                        deafen: "자동 귀머거리",
                        camera: "자동 카메라",
                        stream: "자동 방송",
                        leaveWhenEmpty: "자유로울 때 떠나세요",
                        navigate: "자동 탐색",
                        stage: "무대 채널을 피하세요",
                        afk: "AFK 채널 피하기"
                    }
                },
                invalid: {
                    server: "잘못된 서버"
                }
            },
            option: {
                userAmountOperation: {
                    label: "사용자 수 거래",
                    description: "사용자 수에 대한 작업 선택"
                },
                userAmount: {
                    label: "사용자 수",
                    description: "사용자 수 선택"
                },
                spacesLeftOperation: {
                    label: "공석 프로세스",
                    description: "최대 사용자 수에 대한 작업을 선택하세요."
                },
                spacesLeft: {
                    label: "빈방 있음",
                    description: "여유 공간 선택"
                },
                vcLimitOperation: {
                    label: "오디오 채널 제한 작업",
                    description: "오디오 채널 제한에 대한 작업을 선택합니다."
                },
                vcLimit: {
                    label: "오디오 채널 제한",
                    description: "오디오 채널 제한 선택"
                },
                servers: {
                    label: "서버",
                    description: "포함할 서버"
                },
                autoNavigate: {
                    label: "자동 내비게이션",
                    description: "자동으로 오디오 채널로 이동합니다."
                },
                autoCamera: {
                    label: "자동 카메라",
                    description: "카메라가 자동으로 켜집니다."
                },
                autoStream: {
                    label: "자동 방송",
                    description: "자동으로 방송 시작"
                },
                selfMute: {
                    label: "자동 음소거",
                    description: "오디오 채널에 참여하면 자동으로 마이크가 음소거됩니다."
                },
                selfDeafen: {
                    label: "자동 귀머거리",
                    description: "음성 채널에 참여하면 자동으로 귀가 먹먹해집니다."
                },
                leaveEmpty: {
                    label: "자유로울 때 떠나세요",
                    description: "음성 채널이 비어 있으면 무작위로 다른 전화를 찾습니다."
                },
                avoidStages: {
                    label: "무대 채널을 피하세요",
                    description: "무대형 오디오 채널에 참여하는 것을 방지합니다."
                },
                avoidAfk: {
                    label: "AFK 채널 피하기",
                    description: "AFK는 오디오 채널 참여를 방지합니다."
                },
                video: {
                    label: "동영상",
                    description: "카메라가 켜져 있는 사용자를 검색합니다."
                },
                stream: {
                    label: "방송",
                    description: "방송중인 사용자 검색"
                },
                mute: {
                    label: "조용히",
                    description: "음소거된 사용자를 검색합니다."
                },
                deafen: {
                    label: "귀가 먹은",
                    description: "청각 장애가 있는 사용자 검색"
                },
                includeStates: {
                    label: "필터 포함",
                    description: "특정 사용자 상태를 포함할 수 있습니다."
                },
                avoidStates: {
                    label: "필터를 피하세요",
                    description: "특정 사용자 상황을 피할 수 있습니다."
                }
            },
            alert: {
                failed: "오디오 채널을 찾을 수 없습니다!"
            }
        },
        reactErrorDecoder: {
            name: "ReactErrorDecoder",
            description: "React는 오류 코드를 사람이 읽을 수 있는 메시지로 변환합니다."
        },
        readAllNotificationsButton: {
            name: "모든 알림 읽기버튼",
            description: "한 번의 클릭으로 모든 알림을 읽음으로 표시하는 버튼을 알림 패널에 추가합니다.",
            button: "모두 읽기"
        },
        recentDMSwitcher: {
            name: "최근DM전환기",
            description: "Ctrl+Tab을 사용하여 최근에 사용한 DM 간 전환(Ctrl+Shift+Tab 반전)",
            option: {
                visualStyle: {
                    label: "비주얼 스타일",
                    description: "전환 시 나타나는 시각적 표시기 스타일",
                    overlay: "레이어(Alt+Tab 스타일)",
                    toast: "알림(상태 메시지)",
                    off: "닫은"
                },
                overlayMode: {
                    label: "레이어 모드",
                    description: "레이어 콘텐츠",
                    row: "마지막 대화 라인",
                    current: "만 가능",
                },
                amountOfUsers: {
                    label: "사용자 수",
                    description: "레이어에 표시할 사용자 수"
                },
                overlayRowLength: {
                    label: "레이어 행 길이",
                    description: "행에 표시할 최근 DM 수"
                },
                overlayShowAvatars: {
                    label: "레이어 프로필 이미지 표시",
                    description: "레이어에 사용자 프로필 이미지를 표시합니다."
                },
                toastDurationMs: {
                    label: "알림 시간(밀리초)",
                    description: "레이어에 프로필 이미지 표시"
                },
                clearRdms: {
                    label: "RDMS 목록 지우기",
                    description: "테스트 도구: RDM 목록을 지웁니다.",
                    toast: "RDMS 기록이 삭제되었습니다.",
                    button: "RDM 기록 지우기"
                }
            },
            modal: {
                unknown: "알려지지 않은",
                dm: "DM",
                group: "그룹DM",
                channel: "채널",
                switchingTo: "{{name}}(으)로 전환 중"
            }
        },
        relationshipNotifier: {
            name: "관계알림자",
            description: "친구, 그룹 채팅 또는 서버가 귀하를 제거하면 알려줍니다.",
            option: {
                notices: {
                    label: "알림",
                    description: "제거되면 화면 상단에 알림을 표시합니다(알림을 놓치고 싶지 않은 경우 사용)."
                },
                offlineRemovals: {
                    label: "오프라인 제거",
                    description: "Discord를 열 때 오프라인 상태에서 제거된 경우 알림을 보냅니다."
                },
                friends: {
                    label: "친구",
                    description: "친구가 목록에서 당신을 제거하면 나에게 알림"
                },
                friendRequestCancels: {
                    label: "친구 요청 취소",
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
                removedFriend: "{{user}}님이 귀하와 친구 관계를 끊었습니다.",
                cancelledFriendRequest: "{{user}}님이 보낸 친구 요청이 취소되었습니다.",
                removedFromServer: "귀하는 {{서버}}에서 제거되었습니다.",
                removedFromGroup: "귀하는 {{group}}에서 제거되었습니다.",
                noLongerGroup: "귀하는 더 이상 {{group}}에 속하지 않습니다.",
                noLongerServer: "귀하는 더 이상 {{서버}}에 없습니다.",
                noLongerFriend: "귀하는 더 이상 {{user}}님과 친구가 아닙니다.",
                friendRequestRevoked: "{{user}}님이 보낸 친구 요청이 철회되었습니다.",
                ok: "좋아요"
            }
        },
        remix: {
            name: "리믹스",
            description: "파일 보내기 버튼의 우클릭 메뉴에 '리믹스' 옵션을 추가합니다. 그러면 간단한 이미지 편집기에서 이미지가 열리고 편집된 이미지를 채팅에 직접 보낼 수 있는 옵션이 제공됩니다.",
            label: "리믹스",
            button: {
                send: "보내다",
                close: "4분의 1",
                brush: "브러시",
                erase: "살포기",
                crop: "수확고",
                shape: "모양",
                reset: "다시 놓기",
                clear: "분명한"
            },
            editor: {
                choose: "이미지 선택",
                browse: "고자트",
                rectangle: "구형",
                ellipse: "타원",
                line: "선",
                arrow: "좋아요",
                fill: "채우다"
            }
        },
        repeatMessages: {
            name: "반복 메시지",
            description: "메시지를 신속하게 다시 보낼 수 있습니다. Shift 키를 누른 상태에서 반복을 클릭하면 메시지에 대한 답장으로 전송됩니다.",
            button: "반복(클릭) / 반복 및 답장(Shift + 클릭)",
            context: {
                repeat: "반복하다",
                repeatAndReply: "반복하고 답장하기"
            }
        },
        replaceGoogleSearch: {
            name: "Google 검색 바꾸기",
            description: "Google 검색을 다른 검색 엔진으로 대체합니다.",
            option: {
                customEngineName: {
                    label: "커스텀 엔진 이름",
                    description: "맞춤검색 엔진 이름"
                },
                customEngineURL: {
                    label: "커스텀 엔진 URL",
                    description: "귀하의 검색 엔진 URL"
                },
                replacementEngine: {
                    label: "백업 검색 엔진",
                    description: "백업 검색엔진을 특정 검색엔진으로 교체(메뉴 추가 대신)",
                    off: "닫은",
                    custom: "특수엔진",
                }
            },
            context: {
                label: "메트니 아라",
                searchWith: "{{name}} 아라의 집"
            }
        },
        replyPingControl: {
            name: "회신PingControl",
            description: "메시지 답장에 대한 핑을 항상 또는 전혀 제어할 수 있으며 화이트리스트 기능도 포함되어 있습니다.",
            option: {
                alwaysPingOnReply: {
                    label: "항상 응답 핑",
                    description: "누군가가 귀하의 메시지에 응답할 때마다 핑을 받으세요"
                },
                replyPingWhitelist: {
                    label: "응답 핑 화이트리스트",
                    description: "항상 응답 핑을 받고 싶은 사용자의 ID를 쉼표로 구분하여 입력하세요."
                }
            }
        },
        replyTimestamp: {
            name: "답장타임스탬프",
            description: "응답된 메시지 미리보기에 타임스탬프 표시"
        },
        revealAllSpoilers: {
            name: "모든스포일러 공개",
            description: "메시지의 모든 스포일러를 표시하려면 스포일러를 Ctrl+클릭하고, 전체 채팅의 모든 스포일러를 표시하려면 Ctrl+Shift를 누릅니다."
        },
        reverseImageSearch: {
            name: "역방향이미지검색",
            description: "이미지 오른쪽 클릭 메뉴에 이미지 역방향 검색 옵션을 추가합니다.",
            context: {
                label: "이미지 검색",
                all: "모두 검색"
            }
        },
        reviewDB: {
            name: "리뷰DB",
            description: "다른 사용자 평가(프로필에 새 설정 섹션 추가)",
            notification: {
                newReview: "프로필에 새로운 리뷰가 있습니다!",
                auth: {
                    error: "인증 중 오류가 발생했습니다.",
                    successfully: "성공적으로 로그인되었습니다!",
                    failed: "승인 실패",
                    review: "리뷰를 추가하려면 승인해 주세요.",
                    opening: "인증창이 열립니다...",
                    need: "평가하려면 승인이 필요합니다!"
                },
                error: {
                    fast: "요청을 너무 빨리 하고 있습니다. 몇 초간 기다렸다가 다시 시도해 보세요.",
                    fetching: "리뷰를 검색하는 중에 오류가 발생했습니다.",
                    action: {
                        failed: "사용자 {{action}}에 연락할 수 없습니다.",
                        success: "사용자가 성공적으로 {{action}}되었습니다."
                    }
                }
            },
            modal: {
                delete: {
                    title: "확실합니까?",
                    description: "이 리뷰를 정말로 삭제하시겠습니까?",
                    confirm: "실",
                    cancel: "취소",
                    error: "리뷰를 삭제하려면 로그인해야 합니다.",
                },
                report: {
                    title: "확실합니까?",
                    description: "정말로 이 리뷰를 신고하시겠습니까?",
                    confirm: "선언",
                    cancel: "취소",
                    error: "리뷰를 게시하려면 로그인해야 합니다.",
                },
                block: {
                    title: "확실합니까?",
                    description: "정말로 이 사용자를 차단하시겠습니까? 더 이상 해당 리뷰가 표시되지 않습니다.",
                    confirm: "차단하다",
                    cancel: "취소",
                    error: "사용자를 차단하려면 로그인이 필요합니다.",
                },
                blocked: {
                    title: "차단된 사용자",
                    auth: "ReviewDB에 로그인되어 있지 않습니다.",
                    noBlocked: "차단된 사용자는 없습니다.",
                    fetch: "차단된 사용자를 검색하는 중 오류가 발생했습니다."
                },
                reviews: {
                    title: "사용자 리뷰",
                    noUser: "아직 이 사용자에 대한 리뷰를 작성한 사람이 없는 것 같습니다. 당신은 첫 번째가 될 수 있습니다!",
                    noServer: "아직 이 서버를 검토한 사람이 없는 것 같습니다. 당신은 첫 번째가 될 수 있습니다!"
                }
            },
            button: {
                appeal: "반대",
                ok: "좋아요",
                more: "더",
                reply: "@{{user}}에게 답장을 보내세요.",
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
                reply: "리뷰에 답하다"
            },
            option: {
                authorize: {
                    label: "승인하다",
                    button: "ReviewDB로 승인"
                },
                notifyReviews: {
                    label: "평가 공지",
                    description: "시작 시 새 리뷰 알림"
                },
                showWarning: {
                    label: "경고 표시",
                    description: "루브릭 위에 정중한 경고 표시"
                },
                hideTimestamps: {
                    label: "타임스탬프 숨기기",
                    description: "리뷰의 타임스탬프 숨기기"
                },
                hideBlockedUsers: {
                    label: "차단된 사용자 숨기기",
                    description: "차단한 사용자의 리뷰 숨기기"
                },
                buttons: {
                    label: "버튼",
                    manageBlocked: "차단된 사용자 관리",
                    support: "ReviewDB 개발 지원",
                    website: "리뷰DB 웹사이트",
                    server: "ReviewDB 지원 서버"
                }
            }
        },
        richMagnetLinks: {
            name: "RichMagnet링크",
            description: "마그넷 링크를 메시지 링크처럼 처리합니다(미리보기 포함)",
            unknown: "알 수 없는 파일 이름"
        },
        roleColorEverywhere: {
            name: "역할색상어디서나",
            description: "가능한 경우 최고 역할 색상을 표시합니다.",
            option: {
                chatMentions: {
                    label: "채팅 멘션",
                    description: "채팅 멘션에 역할 색상 표시(메시지 상자 포함)"
                },
                memberList: {
                    label: "회원 목록",
                    description: "구성원 목록 역할 제목에 역할 색상 표시"
                },
                voiceUsers: {
                    label: "음성 사용자",
                    description: "음성채팅 사용자 목록에 역할 색상 표시"
                },
                reactorsList: {
                    label: "원자로 목록",
                    description: "이모티콘 반응으로 사용자 목록에 역할 색상 표시"
                },
                pollResults: {
                    label: "설문조사 결과",
                    description: "설문조사 결과에 역할 색상 표시"
                },
                colorChatMessages: {
                    label: "채팅 메시지 색상 지정",
                    description: "작성자의 역할 색상에 따라 채팅 메시지 색상을 지정합니다."
                },
                messageSaturation: {
                    label: "메시지 포화도",
                    description: "메시지 색상 강도"
                }
            }
        },
        rpcEditor: {
            name: "RPC편집기",
            description: "Rich Presence 콘텐츠 및 유형 편집",
            option: {
                replacedAppIds: {
                    label: "변경된 애플리케이션 ID(ID)",
                }
            },
            modal: {
                tutorial: {
                    title: "현재 진행 중인 이벤트의 ID",
                    noRunning: "실행 중인 이벤트 없음",
                    available: "사용 가능한 변수",
                    variableText: "모든 필드(게시물 URL 제외)에서 원래 콘텐츠로 자동 대체되는 변수를 넣을 수 있습니다.",
                    more: "자세한 내용",
                    details: {
                        leave: "필드를 그대로 두려면 공백으로 두십시오.",
                        set: "상태 표시기에서 필드를 숨기려면 'null'을 입력하세요.",
                        reload: "변경 사항을 적용하려면 Discord를 다시 시작해야 할 수도 있습니다."
                    }
                },
                settings: {
                    applyEdits: "앱에 수정사항 적용",
                    addNewApp: "새 앱 추가",
                    appId: "애플리케이션 ID",
                    invalidAppId: "잘못된 애플리케이션 ID",
                    newActivityType: "새로운 이벤트 유형",
                    activityTypes: {
                        playing: "연주하다",
                        watching: "보고 있다",
                        listening: "청취",
                        competing: "경마",
                        streaming: "방송 중"
                    },
                    streamUrl: "스트림 URL(YouTube 또는 Twitch여야 함)",
                    invalidStreamUrl: "잘못된 게시물 URL",
                    newName: "새 이름",
                    newDetails: "새로운 세부 사항",
                    newState: "새로운 상황",
                    largeImage: "큰 그림",
                    smallImage: "클립 아트",
                    text: "텍스트",
                    url: "URL",
                    firstLine: "(첫 번째 줄)",
                    secondLine: "(두 번째 줄)",
                    thirdLine: "(세 번째 줄)",
                    alsoThirdLine: "(또한 세 번째 줄)",
                    hideAssets: "이미지 숨기기(큰 이미지와 작은 이미지)",
                    hideTimestamps: "타임스탬프 숨기기"
                }
            },
        },
        rpcStats: {
            name: "RPC통계",
            description: "리치 프레즌스로서의 활동에 대한 통계를 표시합니다.",
            option: {
                assetURL: {
                    label: "시각적 URL",
                    description: "RPC에 사용할 이미지입니다. 비워두면 프로필 사진이 사용됩니다."
                },
                rpcTitle: {
                    label: "RPC 헤더",
                    description: "RPC 제목"
                },
                statDisplay: {
                    label: "통계 보기",
                    description: "RPC는 무엇을 표시해야 합니까? (아마도 한 줄만 허용됩니다)",
                    today: "오늘 보낸 메시지 수",
                    alltime: "항상 전송된 메시지의 양",
                    listened: "이번주 가장 많이 들은 앨범"
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
                    description: "앨범 표지를 RPC 이미지로 사용하시겠습니까? (Last.fm 디스플레이를 선택한 경우)"
                },
                lastFMStatFormat: {
                    label: "Last.fm 통계 형식",
                    description: "Last.fm 통계의 형식은 어떻게 지정되어야 합니까? $album은 앨범 이름으로 대체되고, $artist는 아티스트 이름으로 대체됩니다."
                }
            },
            noInfo: "지금은 정보가 없습니다 :(",
            messagesToday: "오늘 보낸 메시지: {{count}}",
            messagesAllTime: "항상 전송된 메시지 수: {{count}}"
        },
        saveFavoriteGIFs: {
            name: "즐겨찾는 GIF 저장",
            description: "즐겨찾는 GIF 링크 내보내기",
            toolbox: "좋아하는 GIF 저장",
            title: "좋아하는 GIF 저장",
            command: {
                savegifs: {
                    description: "즐겨찾는 모든 GIF 링크를 텍스트 파일에 저장합니다."
                },
                saveworkinggifs: {
                    description: "좋아하는 GIF를 모두 테스트하고 여전히 작동하는 GIF만 저장합니다."
                }
            },
            option: {
                showToolboxButton: {
                    label: "도구 상자 버튼 표시",
                    description: "Plexcord 도구 상자에 '즐겨찾는 GIF 저장' 버튼 표시(다시 시작해야 함)"
                }
            },
            toast: {
                save: "GIF가 {{filename}}(으)로 저장되었습니다.",
                failed: "GIF를 저장할 수 없습니다.",
                no: "좋아하는 GIF를 찾을 수 없습니다!",
                testing: "{{count}}개의 GIF를 테스트하는 중입니다. 시간이 좀 걸릴 수 있습니다...",
                noneWorking: "저장된 GIF가 작동하지 않는 것 같습니다.",
                saved: "{{broken}} 잠재적으로 파손된 GIF가 필터링되었습니다. {{saved}} 작동 중인 GIF가 저장되었습니다."
            }
        },
        scheduledMessages: {
            name: "예약된 메시지",
            description: "특정 시간이나 특정 지연 후에 메시지가 전송되도록 예약합니다.",
            toolbox: {
                toggle: "예약된 메시지 보기"
            },
            option: {
                maxMessagesPerMinute: {
                    label: "분당 최대 메시지 수",
                    description: "같은 시간에 채널에서 보낼 수 있는 최대 예약 메시지 수입니다."
                },
                checkIntervalSeconds: {
                    label: "제어 간격(초)",
                    description: "보낼 메시지가 있는지 플러그인이 얼마나 자주 확인합니까?"
                },
                showNotifications: {
                    label: "알림 표시",
                    description: "메시지가 전송되면 알림(토스트)을 표시합니다."
                },
                showPhantomMessages: {
                    label: "고스트 메시지 표시",
                    description: "채팅에서 예약된 메시지를 고스트(임시) 메시지로 표시합니다."
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
                messageFailed: "예약된 메시지를 보낼 수 없습니다",
                maxMessagesReached: "채널당 분당 메시지 최대 한도인 {{max}}개에 도달했습니다.",
                messageScheduled: "메시지 예정!",
                messageRemoved: "예약된 메시지가 삭제되었습니다.",
                allCleared: "예약된 메시지가 모두 삭제되었습니다."
            },
            button: {
                tooltipOn: "계획 모드 ON(비활성화하려면 클릭, 목록을 보려면 마우스 오른쪽 버튼 클릭)",
                tooltipOff: "계획 모드 꺼짐(활성화하려면 클릭, 목록을 보려면 마우스 오른쪽 버튼 클릭)"
            },
            accessory: {
                scheduledFor: "{{date}} {{timeLeft}}에 예정됨",
                remaining: {
                    days: "{{days}}g {{hours}}s 남음",
                    hours: "{{시간}}초 {{분}}분 남음",
                    minutes: "{{분}}분 남음"
                }
            },
            scheduleModal: {
                title: "계획 메시지",
                schedulingFor: "계획된 채널: {{채널}}",
                scheduleType: "계획 유형",
                delay: "지연",
                specificTime: "특정 시간",
                delayMinutes: "지연(분)",
                dateTime: "날짜 및 시간",
                error: {
                    invalidDelay: "유효한 지연 시간(최소 1분)을 입력하세요.",
                    invalidDateTime: "미래의 날짜와 시간을 선택하세요."
                },
                schedule: "예정",
                cancel: "취소"
            },
            viewModal: {
                title: "예약된 메시지",
                clearAll: "모두 지우기",
                noMessages: "예약된 메시지가 없습니다.",
                delete: "실",
                close: "4분의 1"
            }
        },
        searchFix: {
            name: "SearchFix",
            description: "짜증나는 '돋보기를 떨어뜨렸어!' 오류를 수정합니다.",
            notPerfect: "이 수정 사항은 완벽하지 않으므로 문제를 해결하려면 검색 창을 다시 로드해야 할 수도 있습니다.",
            paragraph1: "Discord에서는 최대 오프셋 5000만 허용합니다(이로 인해 돋보기 오류가 발생함).",
            paragraph2: "즉, 과거에 정확히 5000개의 메시지를 볼 수 있고 앞으로는 5000개의 메시지를 볼 수 있습니다(가장 오래된 메시지 순으로 정렬).",
            paragraph3: "이 플러그인은 Discord의 제한을 우회하기 위해 반대 정렬 방법으로 전환합니다.",
            paragraph4: "하지만 검색 결과의 양이 많고 두 가지 정렬 방법으로는 도달할 수 없는 메시지를 표시하려고 하면",
            paragraph5: "플러그인은 오프셋 0(정렬 방법에 따라 최신 또는 가장 오래된 메시지)만 표시합니다."
        },
        secretRingToneEnabler: {
            name: "SecretRingToneEnabler",
            description: "Discord는 항상 벨소리의 비밀 버전을 재생합니다(특별 벨소리 이벤트 제외).",
            option: {
                onlySnow: {
                    label: "눈소리 이벤트 기간에만",
                    description: "Snow Halation 테마만 재생"
                }
            }
        },
        summaries: {
            name: "요약",
            description: "모든 서버에서 Discord의 실험적인 요약 기능을 활성화하고 AI가 생성한 대화 요약을 표시합니다.",
            option: {
                summaryExpiryThresholdDays: {
                    label: "요약 삭제 임계값(일)",
                    description: "다이제스트가 제거되기 전까지 유효한 일수입니다. 채널당 최대 50개의 요약이 저장됩니다."
                }
            }
        },
        selfForward: {
            name: "셀프 전달",
            description: "전달 목록 팝업에 현재 채널을 추가합니다."
        },
        sendTimestamps: {
            name: "보내기타임스탬프",
            description: "채팅 상자 버튼과 텍스트 바로가기를 사용하여 타임스탬프를 쉽게 보낼 수 있습니다. 자세한 설명을 읽어보세요!",
            sample: {
                paragraph1: "시간 전용 타임스탬프를 빠르게 보내려면 'HH:MM' 형식(역따옴표 포함!)의 타임스탬프를 메시지에 추가하세요.",
                paragraph2: "아래 예를 참조하세요.\n더 구체적인 내용이 필요한 경우 채팅 표시줄의 날짜 버튼을 사용하세요!",
                examples: "예:"
            },
            modal: {
                title: "타임스탬프 선택기",
                light: "열려 있는",
                dark: "어두운",
                format: "타임스탬프 형식",
                preview: "시사",
                insert: "추가하다",
                insertTimestamp: "타임스탬프 추가"
            },
            option: {
                replaceMessageContents: {
                    label: "메시지 내용 변경",
                    description: "메시지 내용의 타임스탬프 변경"
                }
            }
        },
        serverInfo: {
            name: "서버정보",
            description: "서버에 대한 정보를 볼 수 있습니다.",
            context: {
                serverInfo: "서버 정보"
            },
            option: {
                sorting: {
                    label: "준비",
                    description: "해당되는 경우 사용자 이름 또는 표시 이름",
                    username: "사용자 이름",
                    displayname: "표시 이름",
                    none: "정렬"
                }
            },
            modal: {
                tab: {
                    serverInfo: "서버 정보",
                    friends: "친구",
                    mutualUsers: "일반 사용자",
                    blockedUsers: "차단된 사용자",
                    ignoredUsers: "무시된 사용자"
                },
                owner: "서버 소유자",
                loading: "로드 중...",
                createdAt: "생성 날짜",
                joinedAt: "가입 날짜",
                vanityLink: "특별 초대 링크",
                preferredLocale: "선호하는 지역",
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
                roles: "롤러"
            }
        },
        serverListIndicators: {
            name: "서버 목록 표시기",
            description: "서버 목록에 온라인 친구 수 또는 서버 수를 추가합니다.",
            friends: "친구",
            servers: "증여자",
            option: {
                mode: {
                    label: "모드",
                    description: "서버 목록에 표시되는 모드",
                    friend: "온라인에만 있는 친구 수",
                    server: "서버 수만",
                    both: "서버 및 온라인 친구 수"
                },
                useCompact: {
                    label: "컴팩트 모두 쿨란",
                    description: "범례를 텍스트로만 표시합니다."
                }
            }
        },
        serverSearch: {
            name: "서버검색",
            description: "빠른 검색 버튼으로 서버를 더 잘 탐색하세요",
            tooltip: "우리는 산다"
        },
        shikiCodeblocks: {
            name: "ShikiCodeblocks",
            description: "Shiki가 제공하는 VSCode 스타일 코드 블록을 Discord로 가져옵니다.",
            option: {
                theme: {
                    label: "그",
                    description: "기본 테마"
                },
                customTheme: {
                    label: "맞춤 테마",
                    description: "사용자 정의 VSCode 테마에 대한 링크",
                    mustURL: "유효한 URL이어야 합니다.",
                    mustJSON: "JSON 파일이어야 합니다."
                },
                tryHljs: {
                    label: "Hljs에 백업",
                    description: "더 밝은 기본 Discord 색상과 테마를 사용하세요.",
                    never: "절대",
                    secondary: "하이라이트.js 대신 Shiki를 선택하세요",
                    primary: "Shiki 대신 하이라이트.js를 선택하세요",
                    always: "언제나"
                },
                useDevIcon: {
                    label: "언어 아이콘에 Devicon 사용",
                    description: "코드 블록에 언어 아이콘을 표시하는 방법",
                    disabled: "장애가 있는",
                    colorless: "무색",
                    colored: "화려한"
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
            description: "Shift 키를 누르든 안 누르든 항상 모든 메시지 버튼이 표시됩니다.",
            option: {
                noShiftDelete: {
                    label: "Shift 없이 삭제",
                    description: "메시지를 삭제하기 위해 Shift 키를 누를 필요가 없습니다."
                },
                noShiftPin: {
                    label: "Shift 없이 고정",
                    description: "메시지를 고정하기 위해 Shift 키를 누를 필요가 없습니다."
                }
            }
        },
        showBadgesInChat: {
            name: "Chat에서 배지 표시",
            description: "채팅에서 메시지 작성자 이름 옆에 배지를 표시합니다.",
            option: {
                showPlexcordDonor: {
                    label: "Plexcord 기증자 배지를 보여주세요",
                    description: "채팅에 Plexcord 기부자 배지를 표시하려면 활성화하세요."
                },
                plexcordDonorPosition: {
                    label: "Plexcord 기증자 배지 위치",
                    description: "Plexcord 기증자 배지의 위치."
                },
                showPlexcordContributor: {
                    label: "Plexcord 기여자 배지 표시",
                    description: "채팅에 Plexcord 기여자 배지를 표시하려면 활성화하세요."
                },
                plexcordContributorPosition: {
                    label: "Plexcord 기여자 배지 위치",
                    description: "Plexcord 기여자 배지의 위치."
                },
                showDiscordProfile: {
                    label: "Discord 프로필 배지 표시",
                    description: "채팅에서 Discord 프로필 배지를 표시하려면 활성화하세요."
                },
                discordProfilePosition: {
                    label: "Discord 프로필 배지 위치",
                    description: "Discord 프로필 배지의 위치."
                },
                showDiscordNitro: {
                    label: "Discord Nitro 배지 표시",
                    description: "채팅에 Discord Nitro 배지를 표시하려면 활성화하세요."
                },
                discordNitroPosition: {
                    label: "Discord Nitro 배지 위치",
                    description: "Discord Nitro 배지 위치"
                },
                badgeSettings: {
                    label: "배지 설정",
                    description: "채팅에 표시되는 다른 배지의 위치를 ​​구성합니다.",
                    modal: "배지를 재정렬하려면 드래그하세요. 특정 배지 유형을 활성화/비활성화하려면 클릭하세요."
                }
            },
            badge: {
                plexcord: "Plexcord 후원자 배지",
                contributor: "Plexcord 참가자 배지",
                discordProfile: "Discord 프로필 rozetleri(HypeSquad, Discord Staff, Active Developer vb.)",
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
                moderatorProgram: "중재자 프로그램 졸업"
            },
            modal: {
                plexcordContributor: "Plexcord 참가자",
                discordNitro: "디스코드 니트로",
                basic: "기초적인",
                classic: "권위 있는"
            }
        },
        showConnections: {
            name: "연결 표시",
            description: "사용자 팝업 카드에 연결된 계정 표시",
            option: {
                iconSize: {
                    label: "아이콘 크기",
                    description: "아이콘 크기(px)"
                },
                iconSpacing: {
                    label: "아이콘 공간",
                    description: "아이콘 여백",
                    compact: "콤팩트",
                    cozy: "편안한",
                    roomy: "넓은"
                }
            }
        },
        showHiddenChannels: {
            name: "숨겨진 채널 표시",
            description: "접근 권한이 없는 채널을 표시합니다.",
            tooltip: "비밀 채널",
            option: {
                channelStyle: {
                    label: "채널 스타일",
                    description: "숨겨진 채널을 표시하는 데 사용되는 스타일입니다.",
                    classic: "권위 있는",
                    muted: "조용한",
                    showUnreads: "읽지 않은 항목 표시",
                    mutedWithUnreads: "음소거 및 읽지 않음 표시"
                },
                showMode: {
                    label: "디스플레이 모드",
                    description: "숨겨진 채널을 표시하는 데 사용되는 모드입니다.",
                    lock: "자물쇠 아이콘이 있는 간단한 스타일",
                    hidden: "오른쪽에 숨겨진 눈 아이콘이 있는 음소거 스타일",
                    lockIconRight: "오른쪽에 자물쇠 아이콘"
                },
                defaultAllowedUsersAndRolesDropdownState: {
                    label: "기본 권한이 있는 사용자 및 역할 드롭다운 상태",
                    description: "허용된 사용자 및 역할 메뉴가 비공개 채널에서 기본적으로 열릴지 여부"
                }
            },
            channelType: {
                text: "텍스트",
                announcement: "발표",
                forum: "법정",
                voice: "세스",
                stage: "장면"
            },
            sortOrder: {
                latestActivity: "최신 이벤트",
                creationDate: "생성 날짜"
            },
            forumLayout: {
                default: "설정되지 않음",
                list: "목록 보기",
                grid: "갤러리보기"
            },
            videoQuality: {
                auto: "오토매틱",
                full: "720p"
            },
            modal: {
                hidden: "숨겨진",
                locked: "잠긴",
                threads: "주제",
                posts: "게시물",
                messages: "메시지",
                post: "우편",
                message: "메시지",
                unknown: "알려지지 않은",
                permissionDetails: "허가 세부사항",
                thisIsA: "이것은 {{status}} {{channelType}} 채널입니다",
                canNotSee: "이 채널의 {{type}} 부분을 볼 수 없습니다.",
                guidelines: "하지만 다음 지침을 볼 수 있습니다.",
                lastCreated: "마지막으로 생성된 {{type}}:",
                lastPin: "마지막 게시물 고정:",
                threadSlowmode: "기본 스레드 느린 모드:",
                slowmode: "저속 모드:",
                bitrate: "비트 전송률:",
                region: "영역:",
                automatic: "오토매틱",
                videoQuality: "비디오 품질 모드:",
                inactiveArchiveDuration: "{{type}} 보관 전 기본 비활성 기간",
                defaultLayout: "기본 레이아웃:",
                defaultSort: "기본 정렬:",
                defaultReaction: "기본 반응 이모티콘:",
                requireTag: "이 포럼의 게시물에 대한 태그 설정은 필수입니다.",
                availableTags: "사용 가능한 태그:",
                allowedUsersAndRoles: "허용된 사용자 및 역할:",
                hideAllowedUsersAndRoles: "허가된 사용자 및 역할 숨기기",
                viewAllowedUsersAndRoles: "권한이 있는 사용자 및 역할 보기"
            }
        },
        showHiddenThings: {
            name: "숨겨진 것들 보여주기",
            description: "권한에 관계없이 숨겨진 다양한 항목과 중재자 전용 항목을 표시합니다.",
            option: {
                showTimeouts: {
                    label: "채팅에 회원 시간 초과 표시",
                    description: "채팅에 회원 시간 초과 아이콘을 표시합니다."
                },
                showInvitesPaused: {
                    label: "일시 중지된 초대 정보 표시",
                    description: "서버 목록에서 초대가 일시 중지되었음을 표시합니다."
                },
                showModView: {
                    label: "모드 보기 표시",
                    description: "모든 서버에 회원 모드 보기 컨텍스트 메뉴 옵션을 표시합니다."
                }
            }
        },
        showMessageEmbeds: {
            name: "메시지 삽입 표시",
            description: "포함되지 않은 링크에 대한 컨텍스트 메뉴에 포함 표시 옵션을 추가합니다.",
            context: {
                embed: {
                    show: "삽입 표시",
                    hide: "삽입 제거"
                }
            },
            error: {
                failed: "삽입을 검색할 수 없습니다.",
                noEmbed: "삽입할 수 없음"
            }
        },
        showMeYourName: {
            name: "당신의 이름을 보여주세요",
            description: "채팅에서 사용자 정의 닉네임, 친구 닉네임, 서버 닉네임, 표시 이름 및 사용자 이름의 모든 순열을 확인하세요.",
            option: {
                messages: {
                    label: "메시지",
                    description: "메시지에 사용자 정의 이름 형식을 표시합니다."
                },
                replies: {
                    label: "답글",
                    description: "답글에서 맞춤 이름 형식을 확인하세요."
                },
                mentions: {
                    label: "언급",
                    description: "멘션에 사용자 정의 이름 형식을 표시합니다."
                },
                memberList: {
                    label: "회원 목록",
                    description: "구성원 목록에서 사용자 정의 이름 형식으로 나열된 첫 번째 사용 가능한 이름을 표시합니다."
                },
                typingIndicator: {
                    label: "쓰기 표시기",
                    description: "입력 표시기에 사용자 정의 이름 형식으로 나열된 첫 번째 사용 가능한 이름을 표시합니다."
                },
                profilePopout: {
                    label: "프로필 팝업 카드",
                    description: "프로필 팝업 카드에 사용자 정의 이름 형식으로 나열된 첫 번째 사용 가능한 이름을 표시합니다."
                },
                voiceChannels: {
                    label: "오디오 채널",
                    description: "오디오 채널의 사용자 정의 이름 형식에 나열된 첫 번째 사용 가능한 이름을 표시합니다."
                },
                reactions: {
                    label: "반응",
                    description: "반응 도구 설명에 사용자 정의 이름 형식으로 나열된 첫 번째 사용 가능한 이름을 표시하고 반응 팝업에 전체 이름을 표시합니다."
                },
                discriminators: {
                    label: "파서 표시",
                    description: "봇 사용자 이름에 파서를 추가합니다. 일반 사용자의 경우 파서가 제거되었지만 봇에서는 여전히 사용됩니다. 기본적으로 봇의 사용자 이름은 사용자의 전체 이름과 동일하므로 여러 봇이 동일한 사용자 이름을 가질 수 있습니다. 파서를 추가하면 다시 고유해집니다."
                },
                hideDefaultAtSign: {
                    label: "기본값 @ 기호 숨기기",
                    description: "멘션과 답글의 이름 시작 부분에 있는 기본 '@' 기호를 숨깁니다. 해당 기능이 활성화된 경우에만 적용됩니다."
                },
                truncateAllNamesWithStreamerMode: {
                    label: "게시자 모드에서 모든 이름 단축",
                    description: "브로드캐스터 모드에서는 사용자 이름뿐만 아니라 모든 이름을 줄이세요."
                },
                removeDuplicates: {
                    label: "중복 제거",
                    description: "이름 중 두 개가 동일한 경우 중복된 이름을 제거하고 고유한 이름만 남깁니다."
                },
                ignoreFonts: {
                    label: "글꼴 무시",
                    description: "두 번째, 세 번째, 네 번째 이름의 경우 사용자 정의 글꼴을 무시하고 GG SANS를 사용합니다."
                },
                ignoreGradients: {
                    label: "그라데이션 무시",
                    description: "기본이 아닌 이름의 경우 역할에 그라데이션이 있고 다음 색상이 'Role+-#'으로 설정된 경우 전체 그라데이션이 아닌 기본 색상을 사용하고 니트로 효과가 있는 경우 완전히 무시합니다."
                },
                animateGradients: {
                    label: "그라디언트를 애니메이션으로 만들기",
                    description: "두 번째, 세 번째, 네 번째 이름에 역할 변화가 있는 경우 애니메이션을 표시합니다. '그라디언트 무시'가 활성화되어 있거나 모션 감소가 켜져 있으면 비활성화됩니다."
                },
                nameSeparator: {
                    label: "이름 구분 기호",
                    description: "이름 사이에 사용할 구분 기호입니다. 기본값은 단일 공백입니다."
                },
                friendNameOnlyInDirectMessages: {
                    label: "비공개 메시지에는 친구 이름만 표시됩니다.",
                    description: "서버가 아닌 비공개 메시지에만 친구 이름을 표시합니다."
                },
                customNameOnlyInDirectMessages: {
                    label: "맞춤 이름은 비공개 메시지에만 표시됩니다.",
                    description: "서버가 아닌 비공개 메시지에만 사용자 정의 이름을 표시합니다."
                },
                includedNames: {
                    label: "포함된 이름",
                    description: "사용자 이름, 표시 이름, 별명, 친구 이름이 표시되는 순서입니다. 다음 자리 표시자를 사용하세요: {user}, {display}, {nick}, {friend}. 이름을 사용할 수 없는 경우 사용할 대안을 쉼표로 구분하여 작성할 수 있습니다({friend, nick, display}). 각 이름에 접두사 3개와 접미사 3개를 추가할 수 있습니다."
                },
                customNameColor: {
                    label: "사용자 정의 이름 색상",
                    description: "표시되는 첫 번째 이름이 아닌 경우 사용자에게 할당하는 사용자 정의 이름에 사용할 색상입니다. 유효한 CSS 입력을 허용합니다. 사용자의 상위 역할 색상, 니트로 효과 색상 또는 IRCColors 색상(활성화된 경우)을 추적하려면 '역할'을 사용하세요. 이 비율로 밝기를 조정하려면 'Role+-#'을 사용하세요(예: 'Role+15')."
                },
                friendNameColor: {
                    label: "친구 이름 색상",
                    description: "친구의 이름이 표시되는 이름이 아닐 때 사용할 색상입니다. 유효한 CSS 입력을 허용합니다. 사용자의 상위 역할 색상, 니트로 효과 색상 또는 IRCColors 색상(활성화된 경우)을 추적하려면 '역할'을 사용하세요. 이 비율로 밝기를 조정하려면 'Role+-#'을 사용하세요(예: 'Role+15')."
                },
                nicknameColor: {
                    label: "닉네임 색상",
                    description: "닉네임이 표시되는 이름이 아닐 때 사용할 색상입니다. 유효한 CSS 입력을 허용합니다. 사용자의 상위 역할 색상, 니트로 효과 색상 또는 IRCColors 색상(활성화된 경우)을 추적하려면 '역할'을 사용하세요. 이 비율로 밝기를 조정하려면 'Role+-#'을 사용하세요(예: 'Role+15')."
                },
                displayNameColor: {
                    label: "표시 이름 색상",
                    description: "표시 이름이 첫 번째 표시 이름이 아닐 때 사용할 색상입니다. 유효한 CSS 입력을 허용합니다. 사용자의 상위 역할 색상, 니트로 효과 색상 또는 IRCColors 색상(활성화된 경우)을 추적하려면 '역할'을 사용하세요. 이 비율로 밝기를 조정하려면 'Role+-#'을 사용하세요(예: 'Role+15')."
                },
                usernameColor: {
                    label: "사용자 이름 색상",
                    description: "사용자 이름이 표시되는 이름이 아닐 때 사용할 색상입니다. 유효한 CSS 입력을 허용합니다. 사용자의 상위 역할 색상, 니트로 효과 색상 또는 IRCColors 색상(활성화된 경우)을 추적하려면 '역할'을 사용하세요. 이 비율로 밝기를 조정하려면 'Role+-#'을 사용하세요(예: 'Role+15')."
                },
                triggerNameRerender: {
                    label: "트리거 이름 재생성",
                    description: "이 설정을 변경하면 이름이 다시 생성됩니다."
                }
            },
            modal: {
                change: {
                    title: "SMYN 사용자 이름 변경",
                },
                add: {
                    title: "SMYN 닉네임 추가"
                },
                setCustom: "이 사용자에 대한 맞춤 SMYN 닉네임을 설정하세요. SMYN 템플릿 설정에서 {custom}을 지정하여 사용합니다.",
                nickname: "SMYN 닉네임",
                reset: "SMYN 닉네임 재설정",
                cancel: "취소"
            }
        },
        showResourceChannels: {
            name: "리소스채널 표시",
            description: "채널 목록에서 서버 리소스 뒤에 숨겨진 채널을 표시합니다."
        },
        showSongName: {
            name: "노래 이름 표시",
            description: "Spotify 이벤트의 경우 아티스트 대신 노래 이름을 표시합니다."
        },
        showTimeoutDuration: {
            name: "표시시간 초과 기간",
            description: "시간 초과 아이콘 도구 설명이나 그 옆에 사용자가 시간 초과되는 기간을 나타냅니다.",
            option: {
                displayStyle: {
                    label: "디스플레이 스타일",
                    description: "제한 시간을 보는 방법",
                    tooltip: "툴팁에서",
                    inline: "시간 초과 아이콘 옆"
                }
            }
        },
        sidebarChat: {
            name: "사이드바채팅",
            description: "사이드바 또는 팝업으로 다른 채널이나 DM을 엽니다.",
            toolbox: {
                label: "이전 채팅 열기"
            },
            context: {
                label: "사이드바 채팅 열기"
            },
            modal: {
                switch: "채널 변경",
                popout: "팝업으로 채팅 열기",
                close: "사이드바 채팅 닫기"
            },
            option: {
                persistSidebar: {
                    label: "사이드바 채팅을 영구화",
                    description: "Discord가 다시 시작될 때 사이드바 채팅이 열려 있도록 활성화합니다."
                },
                patchCommunity: {
                    label: "커뮤니티 패치 적용",
                    description: "채널 브라우저 또는 회원 탭과 같은 커뮤니티 서버의 항목을 패치합니다."
                }
            }
        },
        signature: {
            name: "서명",
            description: "자동 서명/메시지 텍스트 끝",
            option: {
                name: {
                    label: "서명",
                    description: "메시지 끝에 추가할 서명 텍스트"
                },
                textHeader: {
                    label: "텍스트 제목",
                    description: "텍스트 시작 부분에 추가할 제목"
                },
                showIcon: {
                    label: "아이콘 표시",
                    description: "플러그인을 켜고 끄려면 채팅 표시줄에 아이콘을 표시하세요."
                },
                contextMenu: {
                    label: "상황에 맞는 메뉴",
                    description: "채팅 로그인 상황에 맞는 메뉴에 기능을 전환하는 옵션 추가"
                },
                isEnabled: {
                    label: "효과적인",
                    description: "토글 기능"
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
                    name: "서명",
                    description: "서명을 켜고 끄세요",
                    toogle: "서명 변경(기본 동작: 변경)",
                    enabled: "서명이 활성화되었습니다.",
                    disabled: "서명이 비활성화되었습니다."
                }
            }
        },
        silentMessageToggle: {
            name: "무음메시지전환",
            description: "무음 메시지 보내기를 켜거나 끌 수 있는 버튼을 채팅 표시줄에 추가합니다.",
            option: {
                persistState: {
                    label: "상태를 영구화",
                    description: "자동 메시지 토글 상태를 유지하는 방법 결정",
                    none: "영구적이어서는 안 됩니다(채널이 변경되면 재설정되어야 함).",
                    channels: "여러 채널에 걸쳐 지속적으로 유지",
                    restarts: "여러 채널에서 지속되고 Discord가 다시 시작됩니다."
                },
                autoDisable: {
                    label: "자동 비활성화",
                    description: "무음 메시지를 보낸 후 자동으로 기능을 다시 비활성화합니다."
                }
            },
            tooltip: {
                enable: "무음 메시지 활성화",
                disable: "무음 메시지 비활성화"
            }
        },
        silentTyping: {
            name: "자동 타이핑",
            description: "채팅에서 입력 표시를 숨깁니다.",
            command: {
                silentTyping: {
                    name: "자동 타이핑",
                    description: "채팅에서 입력 표시를 숨깁니다.",
                    toggle: {
                        name: "비녀장",
                        description: "기능을 전역적으로, 채널별로 또는 서버별로 전환합니다.",
                        global: "글로벌",
                        channel: "채널",
                        guild: "증여자"
                    },
                    chatBarIndicator: {
                        name: "chatBarIndicator",
                        description: "채팅바 상단에서 다른 사용자의 입력 표시를 숨깁니다."
                    },
                    membersListIndicator: {
                        name: "회원목록표시기",
                        description: "회원 목록에서 다른 사용자의 입력 표시를 숨깁니다."
                    },
                    chatIcon: {
                        name: "채팅아이콘",
                        description: "플러그인을 빠르게 켜고 끄려면 채팅 표시줄에 아이콘을 표시하세요."
                    },
                    chatContextMenu: {
                        name: "chatContext메뉴",
                        description: "플러그인 설정을 빠르게 변경하려면 채팅 컨텍스트 메뉴에 드롭다운 메뉴를 추가하세요."
                    },
                    defaultHidden: {
                        name: "기본값숨김",
                        description: "DM/채널/서버의 쓰기 정보를 기본적으로 숨길지 여부를 결정합니다."
                    }
                }
            },
            content: {
                updated: "무음 입력 설정이 업데이트되었습니다.",
                noChanges: "자동 입력 설정은 변경되지 않았습니다."
            },
            tooltip: {
                hidden: "숨겨진 ({{location}})이라고 되어 있어요",
                visible: "쓰기 표시({{location}})",
                global: "쓰기 표시(전역)"
            },
            option: {
                enabledGlobally: {
                    label: "글로벌하게 활동 중",
                    description: "전역적으로 자신의 쓰기 표시기를 켜거나 끕니다."
                },
                hideChatBoxTypingIndicators: {
                    label: "채팅 상자 쓰기 표시 숨기기",
                    description: "다른 사용자의 채팅 상자 상단에 있는 입력 표시를 숨깁니다."
                },
                hideMembersListTypingIndicators: {
                    label: "회원 목록 작성 표시 숨기기",
                    description: "다른 사용자의 회원 목록에서 입력 표시를 숨깁니다."
                },
                chatIcon: {
                    label: "채팅 아이콘",
                    description: "플러그인을 빠르게 전환하려면 채팅 표시줄에 아이콘을 표시하세요."
                },
                chatIconLeftClickAction: {
                    label: "채팅 아이콘 왼쪽 클릭 동작",
                    description: "채팅 아이콘을 마우스 왼쪽 버튼으로 클릭할 때 수행할 작업을 결정합니다.",
                    global: "전역 쓰기 상태 변경",
                    channel: "채널의 쓰기 상태 변경",
                    guild: "서버 상태에 쓰기 변경",
                    settings: "플러그인 설정 열기"
                },
                chatIconMiddleClickAction: {
                    label: "채팅 아이콘 가운데 클릭 동작",
                    description: "채팅 아이콘을 마우스 가운데 버튼으로 클릭할 때 수행할 작업을 결정합니다.",
                    global: "전역 쓰기 상태 변경",
                    channel: "채널의 쓰기 상태 변경",
                    guild: "서버 상태에 쓰기 변경",
                    settings: "플러그인 설정 열기"
                },
                chatIconRightClickAction: {
                    label: "채팅 아이콘 마우스 오른쪽 버튼 클릭 동작",
                    description: "채팅 아이콘을 마우스 오른쪽 버튼으로 클릭할 때 수행할 작업을 결정합니다.",
                    global: "전역 쓰기 상태 변경",
                    channel: "채널의 쓰기 상태 변경",
                    guild: "서버 상태에 쓰기 변경",
                    settings: "플러그인 설정 열기"
                },
                chatContextMenu: {
                    label: "채팅 컨텍스트 메뉴",
                    description: "플러그인 설정을 빠르게 변경하려면 채팅 컨텍스트 메뉴에 드롭다운 메뉴를 추가하세요."
                },
                defaultHidden: {
                    label: "기본 숨김",
                    description: "활성화되면 아래 '비활성화 위치' 목록에 나열되지 않은 모든 DM/채널/서버의 다른 사용자에게 표시기가 숨겨집니다. 비활성화된 경우 '활성 위치' 목록에 포함되지 않은 위치에 표시기가 나타납니다."
                },
                enabledLocations: {
                    label: "활성 위치",
                    description: "해당 ID에 대한 기능을 활성화합니다. 쉼표로 구분된 DM ID, 채널 ID 및 서버 ID를 허용합니다. '기본 비공개'가 비활성화된 경우에만 사용됩니다."
                },
                disabledLocations: {
                    label: "장애인 장소",
                    description: "해당 ID에 대한 기능을 비활성화합니다. 쉼표로 구분된 DM ID, 채널 ID 및 서버 ID를 허용합니다. '기본 비공개'가 활성화된 경우에만 사용됩니다."
                }
            }
        },
        snowfall: {
            name: "강설량",
            description: "Discord에 눈이 내리게 해주세요!",
            about: {
                title: "정보",
                paragraph: "이 플러그인은 Discord 인터페이스에 크리스마스 테마의 눈 효과를 추가합니다. 아래 설정에서 눈 유형을 변경할 수 있습니다.",
                note: "참고: 이 플러그인은 대부분의 컴퓨터에서 일반 Plexcord 플러그인보다 성능에 더 큰 영향을 미치지 않지만 저가형 시스템에서는 약간의 지연이 발생할 수 있습니다."
            },
            option: {
                typeOfSnow: {
                    label: "자동차 종류",
                    description: "표시되는 눈의 유형을 변경합니다(성능에 영향을 미침).",
                    solid: "단색(최고 성능)",
                    text: "메틴(중간 성능)",
                    emoji: "시각적(최저 성능)"
                },
                maxSize: {
                    label: "최대 크기",
                    description: "최대 눈송이 크기"
                },
                speed: {
                    label: "속도",
                    description: "강설량(더 높을수록 더 빨리 내림)"
                },
                flakesPerSecond: {
                    label: "초당 눈송이",
                    description: "초당 내리는 눈송이의 양(더 높을수록 강수량이 많음)"
                }
            }
        },
        sortFriendRequests: {
            name: "정렬친구요청",
            description: "친구 요청을 받은 날짜별로 정렬합니다.",
            tooltip: "추가됨 — {{날짜}}",
            option: {
                showDates: {
                    label: "날짜 표시",
                    description: "친구 요청에 날짜 표시"
                }
            }
        },
        soundBoardLogger: {
            name: "사운드보드로거",
            description: "음성 채팅에서 재생되는 모든 사운드보드 사운드를 녹음하고 다운로드할 수 있습니다.",
            tooltip: "SoundBoard 로그 열기",
            option: {
                savedIds: {
                    label: "저장된 사운드보드 ID",
                    description: "한 번에 저장하고 싶은 사운드보드 ID의 양 (0이면 무제한으로 저장할 수 있습니다)",
                    notNumber: "값이 숫자가 아닙니다.",
                    cantDecimal: "값은 10진수일 수 없습니다.",
                    cantNegative: "값은 음수일 수 없습니다.",
                    heading: "한 번에 저장하고 싶은 사운드보드 ID의 양 (0이면 무제한으로 저장할 수 있습니다)",
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
                    label: "사운드 레벨",
                    description: "켜짐/꺼짐 소리 볼륨(0은 비활성화)"
                },
                iconLocation: {
                    label: "아이콘 위치",
                    description: "SoundBoard 로그 아이콘이 나타날 위치를 선택하세요(재부팅 필요)",
                    toolbar: "툴바",
                    chatInput: "채팅 로그인"
                }
            },
            modal: {
                title: "사운드보드 로그",
                loading: "소리를 로드하는 중입니다...",
                noLogs: "아직 오디오가 녹음되지 않았습니다. 음성 채팅에 참여하여 기록하세요!",
                clearLogs: "로그 지우기",
                played: "{{time}}회 플레이함",
                last: "마지막으로 플레이한 날짜:",
                also: "그는 또한 다음을 훔쳤습니다.",
                download: "다운로드",
                copyId: "신분증 복사",
                copied: "ID가 클립보드에 복사되었습니다!",
                playSound: "소리 재생",
                moreUsers: "다른 사람들도 이 소리를 사용했는데...",
                volume: "사운드보드 볼륨"
            }
        },
        splitLargeMessages: {
            name: "분할대형 메시지",
            description: "Discord의 메시지 제한에 맞게 대용량 메시지를 여러 메시지로 분할합니다.",
            option: {
                maxLength: {
                    label: "최대 메시지 길이",
                    description: "메시지가 분할되기 전에 가질 수 있는 최대 길이입니다. 자동 감지를 위해 0으로 설정합니다."
                },
                disableFileConversion: {
                    label: "파일 변환 비활성화",
                    description: "활성화하면 대용량 메시지에 대한 파일 변환이 비활성화됩니다."
                },
                sendDelay: {
                    label: "배송지연",
                    description: "각 트랙 사이의 대기 시간(초)입니다."
                },
                hardSplit: {
                    label: "솔리드 파티션",
                    description: "활성화되면 공백/줄바꿈 대신 마지막 문자에서 분할됩니다."
                },
                splitInSlowmode: {
                    label: "느린 모드로 분할",
                    description: "채널에 저속 모드가 활성화된 경우 메시지를 분할하시겠습니까?"
                },
                slowmodeMax: {
                    label: "저속 모드 최대",
                    description: "저속 모드 분할 시 허용되는 최대 저속 모드 시간입니다."
                }
            }
        },
        spotifyActivityToggle: {
            name: "Spotify활동전환",
            description: "Spotify 활동 가시성을 위한 토글 버튼을 추가합니다.",
            tooltip: {
                enable: "Spotify 활동 열기",
                disable: "Spotify 활동 끄기"
            },
            option: {
                location: {
                    label: "여성",
                    description: "Spotify 켜기/끄기 버튼을 표시할 위치",
                    panel: "음소거/음소거 옆",
                    toolbox: "Plexcord 도구 상자"
                },
                activityStatus: {
                    label: "활동현황",
                    description: "Spotify 활동의 현재 상태"
                }
            }
        },
        spotifyCrack: {
            name: "스포티파이 크랙",
            description: "무료 공동 청취 허용, 음성 채팅 자동 일시 중지 차단, 유휴 상태에서도 Spotify 활동 재생 유지",
            option: {
                noSpotifyAutoPause: {
                    label: "Spotify 자동 일시 중지 끄기",
                    description: "Spotify의 자동 일시 중지를 비활성화합니다."
                },
                keepSpotifyActivityOnIdle: {
                    label: "유휴 상태에서 Spotify 활동 재개",
                    description: "유휴 상태에서도 Spotify 활동이 계속 재생되도록 허용합니다."
                }
            }
        },
        spotifyShareCommands: {
            name: "SpotifyShare명령",
            description: "슬래시 명령(/track, /album, /artist)을 사용하여 현재 Spotify 노래, 앨범 또는 아티스트를 공유하세요.",
            command: {
                makeCommand: {
                    description: "채팅에서 현재 Spotify {{type}}을(를) 공유하세요",
                    track: "Spotify에서 어떤 노래도 듣고 있지 않습니다.",
                    find: "Spotify에서 노래를 찾을 수 없습니다."
                }
            }
        },
        startupTimings: {
            name: "시작 타이밍",
            description: "설정 메뉴에 시작 타이밍을 추가합니다.",
            modal: {
                title: "시작 타이밍",
                ended: "시청 종료 시간:",
                start: "시작",
                interval: "12월",
                delta: "델타",
                event: "올레이",
                serverTrace: "서버 모니터링",
                loading: "로드 중..."
            }
        },
        statusNotifications: {
            name: "상태 알림",
            description: "상태 변경에 대한 알림을 추가합니다.",
            loading: "로드 중...",
            option: {
                notificationsSound: {
                    label: "알림음",
                    description: "상태 알림에 대한 알림 소리를 재생하시겠습니까?"
                },
                usersList: {
                    label: "사용자 목록",
                    description: "상태 변경이 발생하면 사용자에게 알림이 전송됩니다.",
                    empty: "모니터링되는 사용자가 없습니다. 사용자를 마우스 오른쪽 버튼으로 클릭하고 '상태 알림' 옵션을 사용하여 사용자를 추가할 수 있습니다."
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
                title: "상태 알림",
            },
            status: {
                online: "온라인",
                idle: "게으른",
                dnd: "방해하지 마세요",
                offline: "오프라인",
            },
        },
        statusPresets: {
            name: "상태 사전 설정",
            description: "상태를 저장하고 나중에 다시 조정할 수 있습니다.",
            button: {
                remember: "상태 기억",
            },
            context: {
                edit: "사용자 정의 사전 설정 편집",
                set: "예외 설정"
            },
            notification: {
                successfully: "상태가 성공적으로 저장되었습니다."
            }
        },
        steamStatusSync: {
            name: "Steam상태동기화",
            description: "Steam과 상태를 동기화하세요! (온라인, 자리 비움, 숨김 또는 오프라인.)",
            option: {
                onlineStatus: {
                    label: "온라인 상태",
                    description: "Discord Online의 Steam 상태"
                },
                idleStatus: {
                    label: "유휴 상태",
                    description: "Discord가 유휴 상태일 때 Steam 상태"
                },
                dndStatus: {
                    label: "방해 금지 상태",
                    description: "Discord가 방해하지 않는 동안 Steam 상태"
                },
                invisibleStatus: {
                    label: "보이지 않는 상태",
                    description: "Discord가 보이지 않는 동안 Steam 상태"
                },
                goInvisibleIfActivityIsHidden: {
                    label: "이벤트가 비공개인 경우 투명화됨",
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
            name: "스티커차단기",
            description: "스티커가 표시되는 것을 방지할 수 있습니다.",
            option: {
                showGif: {
                    label: "GIF 표시",
                    description: "멋진 고양이 GIF를 표시할지 여부."
                },
                showMessage: {
                    label: "메시지 표시",
                    description: "차단된 ID를 나타내는 메시지를 표시할지 여부"
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
            name: "스티커붙여넣기",
            description: "스티커 선택기에서 스티커를 선택하면 즉시 전송되지 않고 채팅 상자에 추가됩니다."
        },
        streamerModeOnStream: {
            name: "StreamerModeOnStream",
            description: "Discord에서 방송을 시작하면 스트리머 모드가 자동으로 활성화됩니다."
        },
        streamingCodecDisabler: {
            name: "스트리밍코덱Disabler",
            description: "원하는 스트리밍 코덱을 비활성화합니다.",
            option: {
                disableAv1Codec: {
                    label: "AV1 코덱 비활성화",
                    description: "Discord가 스트리밍에 AV1 사용을 고려하는 것을 방지합니다."
                },
                disableH265Codec: {
                    label: "H265 코덱 비활성화",
                    description: "Discord가 스트리밍에 H265 사용을 고려하는 것을 방지합니다."
                },
                disableH264Codec: {
                    label: "H264 코덱 비활성화",
                    description: "Discord가 스트리밍에 H264 사용을 고려하는 것을 방지합니다."
                }
            }
        },
        superReactionTweaks: {
            name: "SuperReactionTweaks",
            description: "동시에 재생되는 슈퍼 리액션의 제한을 사용자 정의하고 기본적으로 슈퍼 리액션을 사용합니다.",
            option: {
                superReactByDefault: {
                    label: "기본적으로 슈퍼 리액티브",
                    description: "반응 선택기는 기본적으로 Super Reactions를 사용합니다."
                },
                unlimitedSuperReactionPlaying: {
                    label: "무제한 슈퍼 리액션 플레이",
                    description: "동시 재생 시 Super Reaction 제한 제거"
                },
                superReactionPlayingLimit: {
                    label: "슈퍼 반응 재생 제한",
                    description: "동시에 플레이할 수 있는 최대 슈퍼리액션 수입니다. 0은 Super Reactions 재생을 비활성화합니다."
                }
            }
        },
        textReplace: {
            name: "텍스트바꾸기",
            description: "메시지의 텍스트를 변경하세요. Plexcord 서버의 #textreplace-rules 채널에서 미리 만들어진 규칙을 찾을 수 있습니다.",
            option: {
                replace: {
                    label: "변화",
                    string: "일반 텍스트 사용",
                    regex: "정규식 사용",
                    myMessages: "자신의 메시지에 적용(모든 사람에게 표시)",
                    othersMessages: "다른 사람의 메시지에 적용(나에게만 표시)",
                    allMessages: "모든 메시지에 적용"
                },
                stringRules: {
                    label: "일반 텍스트 규칙",
                    description: "일반 텍스트 일치를 사용한 텍스트 대체 규칙입니다."
                },
                regexRules: {
                    label: "정규식 규칙",
                    description: "정규식을 사용하여 텍스트를 바꾸는 규칙입니다."
                }
            },
            modal: {
                title: "규칙 테스트",
                find: "불",
                replace: "변화",
                includes: "포함된 경우에만",
                type: "메시지 쓰기",
                applied: "규칙이 적용된 메시지"
            }
        },
        themeAttributes: {
            name: "테마속성",
            description: "테마 목적을 위해 다양한 요소에 데이터 속성을 추가합니다."
        },
        timezones: {
            name: "시간대",
            description: "프로필과 메시지 스레드에 사용자의 현지 시간을 표시합니다.",
            button: {
                wantToSave: "데이터베이스에 시간대를 저장하시겠습니까? 설정하려면 여기를 클릭하세요.",
                yourLocalTimezone: "(현지 시간대)"
            },
            context: {
                set: "현지 시간대 설정"
            },
            toast: {
                refresh: {
                    successfully: "시간대가 성공적으로 갱신되었습니다!",
                    failed: "시간대를 새로고침할 수 없습니다.",
                    failedTo: "시간대를 새로고침할 수 없습니다."
                },
                update: {
                    successfully: "시간대가 업데이트되었습니다!",
                    failed: "시간대를 설정할 수 없습니다."
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
                    label: "시간대 표시",
                    description: "프로필 및 메시지 스레드에 시간대를 표시합니다."
                },
                twentyFourHourTime: {
                    label: "24시간 형식",
                    description: "24시간 형식으로 시간 표시"
                },
                showTimezoneInfo: {
                    label: "시간대 정보 표시",
                    description: "시계 외에 시간대 정보 표시"
                },
                showMessageHeaderTime: {
                    label: "메시지 제목 시간 표시",
                    description: "메시지 스레드에 시간 표시"
                },
                showProfileTime: {
                    label: "프로필 시간 표시",
                    description: "사용자 프로필에 시간 표시"
                },
                useDatabase: {
                    label: "데이터베이스 시간대 사용",
                    description: "데이터베이스를 사용하여 사용자 시간대 가져오기"
                },
                preferDatabaseOverLocal: {
                    label: "로컬보다 데이터베이스 선호",
                    description: "시간대에 관계없이 로컬 스토리지보다 데이터베이스를 선호합니다."
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
                    description: "데이터베이스에서 시간대를 재설정하세요.",
                    failed: "데이터베이스 시간대를 재설정하지 못했습니다."
                },
                askedTimezone: {
                    label: "시간대 요청",
                    description: "사용자에게 시간대를 묻는 메시지가 표시되는지 여부를 나타냅니다."
                }
            },
            modal: {
                title: "시간대",
                select: "시간대 선택",
                selectPlaceholder: "시간대를 선택하세요",
                delete: "시간대 삭제",
                save: "구하다"
            }
        },
        toastNotifications: {
            name: "토스트 알림",
            description: "다이렉트 메시지를 받으면 토스트 알림을 표시합니다.",
            notification: {
                call: "당신과 함께 검색을 시작했습니다!",
                recipient: {
                    add: "{{actor}}님이 {{target}}님을 그룹에 추가했습니다.",
                    remove: "{{actor}}님이 {{target}}님을 그룹에서 제거했습니다.",
                    left: "그는 그룹을 떠났습니다."
                },
                channel: {
                    change: {
                        name: "채널 이름이 {{name}}(으)로 변경되었습니다.",
                        icon: "채널 아이콘이 변경되었습니다."
                    },
                    pinned: "메시지를 고정했습니다."
                },
                sent: {
                    embed: "그는 삽입을 보냈습니다.",
                    sticker: "그는 스티커를 보냈습니다.",
                    attachment: "파일:"
                },
                redacted: "메시지 내용이 숨겨졌습니다.",
                friend: {
                    accept: "{{user}}은(는) 이제 귀하의 친구입니다",
                    acceptBody: "이제 그 사람에게 직접 메시지를 보낼 수 있습니다.",
                    request: "{{user}}님이 귀하에게 친구 요청을 보냈습니다.",
                    requestBody: "친구 탭에서 이를 수락하거나 거부할 수 있습니다."
                },
                example: {
                    title: "샘플 알림",
                    body: "이는 샘플 알림 텍스트입니다."
                }
            },
            modal: {
                dismiss: "알림 닫기",
                attachments: "{{첨부 파일}}개 파일이 전송되었습니다."
            },
            option: {
                position: {
                    label: "여성",
                    description: "토스트 알림 위치",
                    topRight: "오른쪽 상단",
                    topLeft: "왼쪽 위",
                    bottomRight: "오른쪽 하단",
                    bottomLeft: "솔 알트"
                },
                timeout: {
                    label: "폐관 시간",
                    description: "알림을 표시하는 데 몇 초가 소요됩니까?"
                },
                opacity: {
                    label: "불투명",
                    description: "토스트 알림의 불투명도"
                },
                determineServerNotifications: {
                    label: "서버 알림 설정",
                    description: "서버 알림 설정에 따라 알림 표시 여부 결정"
                },
                directMessages: {
                    label: "직접 메시지",
                    description: "다이렉트 메시지에 대한 알림 표시"
                },
                groupMessages: {
                    label: "그룹 메시지",
                    description: "그룹 메시지 알림 표시"
                },
                friendServerNotifications: {
                    label: "친구 및 서버 알림",
                    description: "친구가 공개 서버에 메시지를 보낼 때 알림 표시"
                },
                friendActivity: {
                    label: "친구 이벤트",
                    description: "친구 추가 또는 친구 요청 수신에 대한 알림 표시"
                },
                notifyFor: {
                    label: "알림을 받을 수 있는 채널",
                    description: "알림을 받을 채널 ID를 입력하세요. (쉼표로 구분)"
                },
                ignoreUsers: {
                    label: "무시할 사용자",
                    description: "알림을 무시할 사용자 ID를 입력하세요(쉼표로 구분)."
                },
                exampleButton: {
                    label: "샘플 버튼",
                    description: "토스트 알림 예시를 보여줍니다.",
                    show: "샘플 알림 표시"
                }
            }
        },
        toggleVideoBind: {
            name: "ToggleVideo바인딩",
            description: "웹캠을 켜고 끌 수 있는 사용자 정의 가능한 단축키를 추가합니다.",
            option: {
                keyBind: {
                    label: "단축키",
                    description: "누르면 웹캠이 켜지고 꺼지는 버튼입니다."
                },
                reqCtrl: {
                    label: "Ctrl 게레클리",
                    description: "Ctrl 키를 강제로 누르십시오."
                },
                reqShift: {
                    label: "교대 필수",
                    description: "Shift 키를 강제로 누르십시오."
                },
                reqAlt: {
                    label: "하위 필수",
                    description: "Alt 키를 강제로 누르십시오."
                }
            }
        },
        translate: {
            name: "번역하다",
            description: "Google 번역 또는 DeepL을 사용하여 메시지 번역",
            tooltip: {
                label: "전환하다"
            },
            context: {
                translate: "전환하다",
                open: "번역 창 열기",
                auto: "자동 번역 활성화"
            },
            option: {
                receivedInput: {
                    label: "수신된 입력",
                    description: "수신된 메시지가 번역될 언어"
                },
                receivedOutput: {
                    label: "수신된 출력",
                    description: "수신된 메시지는 어떤 언어로 번역되나요?"
                },
                sentInput: {
                    label: "제출된 입력",
                    description: "귀하의 메시지가 번역될 언어"
                },
                sentOutput: {
                    label: "전송된 출력",
                    description: "귀하의 메시지가 어떤 언어로 번역될까요?"
                },
                service: {
                    label: "번역 서비스",
                    description: "DeepL Pro에는 유료 API 키가 필요합니다",
                    descriptionWeb: "번역 서비스 (웹에서는 지원되지 않습니다!)",
                    google: "구글 번역",
                    deepl: "DeepL 무료",
                    deeplPro: "DeepL 프로"
                },
                deeplApiKey: {
                    label: "DeepL API 키",
                    description: "DeepL API 키",
                    placeholder: "https://deepl.com/your-account에서 API 키를 받으세요."
                },
                autoTranslate: {
                    label: "자동번역",
                    description: "메시지를 보내기 전에 자동으로 번역됩니다. 번역 버튼을 Shift하거나 마우스 오른쪽 버튼으로 클릭하여 이 기능을 켜거나 끌 수도 있습니다."
                },
                showAutoTranslateTooltip: {
                    label: "자동 번역 설명 표시",
                    description: "메시지가 자동 번역되면 채팅바 버튼에 설명 표시"
                }
            },
            modal: {
                title: "번역",
                select: "언어를 선택하세요",
                auto: "자동 번역",
                dismiss: "4분의 1",
                translated: "{{from}}에서 번역됨",
                failed: {
                    to: "{{text}} 번역 실패",
                    connect: "DeepL API 연결 실패:"
                },
                wrong: "문제가 발생했습니다. 문제가 지속되면 콘솔을 확인하거나 지원 서버에 도움을 요청하세요.",
                deepl: {
                    api: "DeepL API 할당량이 초과되었습니다. Google 번역으로 전환 중입니다.",
                    apiKey: "DeepL API 키가 설정되지 않았습니다. Google로 돌아갑니다.",
                    auth: "잘못된 DeepL API 키 또는 버전"
                },
                autoTranslateEnabled: {
                    title: "Plexcord 자동 번역 활성화",
                    body: "방금 자동 번역을 활성화했습니다! 귀하가 보내는 모든 메시지는 전송되기 전에 자동으로 번역됩니다.",
                    confirm: "자동 번역 비활성화",
                    cancel: "이해합니다",
                    secondaryConfirm: "다시 표시하지 않음"
                }
            }
        },
        typingIndicator: {
            name: "입력 표시기",
            description: "누군가가 채널에 입력할 때 표시기를 추가합니다.",
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
                    label: "디스플레이 모드",
                    description: "표시기를 표시하는 방법은 무엇입니까?",
                    both: "아바타 및 애니메이션 도트",
                    dots: "애니메이션 도트",
                    avatars: "아바타"
                }
            }
        },
        typingTweaks: {
            name: "타이핑조정",
            description: "입력 표시기에 아바타와 역할 색상을 표시합니다.",
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
                    description: "두 명 이상이 입력할 때 더 유용한 메시지 표시"
                },
                amITyping: {
                    label: "나는 글을 쓰고 있는가?",
                    description: "당신이 쓴 글을 다른 사람들이 보았는지 보여줍니다."
                }
            },
            others: {
                areTyping: "그리고 {{count}}명이 더 글을 쓰고 있습니다..."
            }
        },
        unindent: {
            name: "들여쓰기 취소",
            description: "코드 블록에서 선행 들여쓰기를 제거합니다."
        },
        unitConverter: {
            name: "단위변환기",
            description: "미터법 단위를 영국식 단위로 또는 그 반대로 변환합니다.",
            tooltip: "단위 변환",
            option: {
                myUnits: {
                    label: "내 단위",
                    description: "사용하고 변환하려는 단위입니다. 기본값: 영국식",
                    imperial: "제국",
                    metric: "미터법"
                }
            },
            button: {
                dismiss: "4분의 1"
            }
        },
        unlimitedAccounts: {
            name: "무제한계정",
            description: "추가할 수 있는 계정 수가 늘어납니다.",
            option: {
                maxAccounts: {
                    label: "최대 계정",
                    description: "추가할 수 있는 계정 수. 무제한인 경우 0을 입력하세요."
                }
            }
        },
        unlockedAvatarZoom: {
            name: "잠금 해제아바타줌",
            description: "아바타를 변경할 때 이미지 자르기 도구에서 더 확대할 수 있습니다.",
            option: {
                zoomMultiplier: {
                    label: "줌 승수",
                    description: "줌 승수"
                }
            }
        },
        unsuppressEmbeds: {
            name: "억제해제포함",
            description: "메시지에 포함된 콘텐츠를 억제 해제할 수 있습니다.",
            context: {
                unsuppress: "포함 억제 제거",
                suppress: "인쇄 삽입"
            }
        },
        uselessInfo: {
            name: "쓸모없는정보",
            description: "Discord 내에서 무작위로 쓸모없는 정보를 표시합니다. 단축키와 간격 설정이 가능합니다.",
            recording: "녹음...",
            record: "구하다",
            option: {
                delay: {
                    label: "알림 간격",
                    description: "알림 표시 간격(분)"
                },
                historyHotkey: {
                    label: "기록 패널 바로가기",
                    description: "이전에 표시된 정보의 기록을 여는 단축키"
                },
                randomFactHotkey: {
                    label: "무작위 정보 바로가기",
                    description: "무작위 정보 패널을 여는 단축키"
                },
                sameFact: {
                    label: "동일한 정보를 반복하지 마십시오",
                    description: "모든 정보를 표시하지 않고 동일한 정보가 여러 번 표시되는 것을 방지합니다."
                },
                lastNFacts: {
                    label: "반복되지 않는 최신 정보",
                    description: "다시 표시해서는 안 되는 정보의 마지막 개수(0 = 항상)"
                }
            },
            modal: {
                title: "쓸모없는정보",
                history: {
                    none: "아직 정보가 없습니다. 바로가기를 사용하거나 기다리세요.",
                    source: "원천"
                },
                showRandom: "무작위로 표시",
                close: "4분의 1"
            },
            notification: {
                title: "알고 계셨나요?"
            }
        },
        userMessagesPronouns: {
            name: "사용자 메시지대명사",
            description: "메시지 헤더에 사용자 대명사 표시",
            option: {
                pronounsFormat: {
                    label: "대명사 형태",
                    description: "채팅에 대명사가 표시되는 방식",
                    lowercase: "소문자",
                    capitalized: "초기 대문자"
                },
                showSelf: {
                    label: "자신을 보여주세요",
                    description: "자신의 대명사 표시를 켜거나 끕니다."
                }
            }
        },
        userVoiceShow: {
            name: "사용자 음성 표시",
            description: "사용자가 음성 채널에 있을 때 표시기를 표시합니다.",
            option: {
                showInUserProfileModal: {
                    label: "사용자 프로필에 표시",
                    description: "사용자 프로필의 이름 옆에 음성 채널 표시기 표시"
                },
                showInMemberList: {
                    label: "회원 목록에 표시",
                    description: "멤버 및 DM 목록에 음성 채널 표시 표시"
                },
                showInMessages: {
                    label: "메시지에 표시",
                    description: "메시지에 음성 채널 표시기 표시"
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
            description: "누구나 Nitro 없이 배너를 사용할 수 있도록 USRBG의 사용자 배너를 표시합니다.",
            option: {
                nitroFirst: {
                    label: "니트로 퍼스트",
                    description: "Nitro와 USRBG 배너가 모두 존재하는 경우 어느 것을 사용할지 결정하세요.",
                    nitro: "니트로 배너",
                    usrbg: "USRBG 배너"
                },
                voiceBackground: {
                    label: "오디오 배경",
                    description: "USRBG 배너를 음성 채팅 배경으로 사용"
                }
            },
            button: "나만의 USRBG 배너를 받으세요"
        },
        validReply: {
            name: "유효한답변",
            description: "답장 위로 마우스를 가져가면 '메시지를 로드하지 못했습니다' 오류 수정"
        },
        validUser: {
            name: "유효한 사용자",
            description: "알 수 없는 사용자에 대해 '@unknown-user'로 나타나는 멘션 수정(수정하려면 멘션 위로 마우스를 가져가세요)",
            badges: {
                discordBugHunter: "디스코드 버그헌터",
                moderatorProgramsAlumni: "중재자 프로그램 졸업",
                discordStaff: "디스코드 스태프",
                hypeSquadEvents: "HypeSquad 이벤트",
                bravery: "HypeSquad 세자렛",
                brilliance: "HypeSquad 밝기",
                balance: "HypeSquad 뎅지",
                partneredServerOwner: "공동 서버 소유자",
                nitro: "디스코드 니트로",
                earlySupporter: "얼리서포터",
                earlyVerifiedBotDeveloper: "초기 검증된 봇 개발자"
            }
        },
        voiceChatDoubleClick: {
            name: "음성채팅DoubleClick",
            description: "한 번 클릭하는 대신 두 번 클릭하여 음성 채팅에 참여할 수 있습니다."
        },
        vcNarrator: {
            name: "VC내레이터",
            description: "사용자가 음성 채널에 참여, 탈퇴 또는 이동할 때 내레이터를 통해 알립니다.",
            option: {
                voice: {
                    label: "세스"
                },
                volume: {
                    label: "사운드 레벨",
                    description: "내레이터 음성 수준"
                },
                rate: {
                    label: "속도",
                    description: "내레이터 말하기 속도"
                },
                sayOwnName: {
                    label: "당신의 이름을 말해주세요",
                    description: "내레이터가 귀하의 이름을 말할지 여부"
                },
                latinOnly: {
                    label: "라틴어만 해당",
                    description: "읽기 전에 이름에서 라틴어가 아닌 문자를 지우십시오."
                },
                joinMessage: {
                    label: "참여 메시지",
                    description: "메시지에 참여하세요"
                },
                leaveMessage: {
                    label: "이별 메시지",
                    description: "메시지 남기기"
                },
                moveMessage: {
                    label: "움직이는 메시지",
                    description: "메시지 이동"
                },
                muteMessage: {
                    label: "메시지 음소거",
                    description: "메시지 음소거(지금은 본인만 가능)"
                },
                unmuteMessage: {
                    label: "메시지 음소거 해제",
                    description: "메시지 음소거 해제(지금은 본인만 가능)"
                },
                deafenMessage: {
                    label: "귀청이 터질 듯한 메시지",
                    description: "귀청이 터질 듯한 메시지(지금은 본인만)"
                },
                undeafenMessage: {
                    label: "귀청이 터질 듯한 메시지",
                    description: "귀청이 터질 듯한 메시지(지금은 본인만)"
                }
            },
            modal: {
                title: "샘플 사운드 재생",
                voiceTitle: "세스",
                voice: "소리를 선택하세요",
                languageTitle: "딜",
                language: "언어를 선택하세요",
                noVoice: "내레이터 음성을 찾을 수 없습니다.",
                linuxNote: "speech-dispatcher 또는 espeak를 설치하고 --enable-speech-dispatcher 매개변수를 사용하여 Discord를 실행하세요.",
                someNarrator: "운영 체제의 내레이터 설정에서 일부 음성을 설치해 보세요.",
                dontHaveEnglish: "영어 오디오를 업로드하지 않았기 때문에 내레이터가 이상하게 들릴 수 있습니다.",
                customiseMessages: "아래에서 음성 메시지를 맞춤설정할 수 있습니다. 공백으로 두면 특정 메시지를 비활성화할 수 있습니다.",
                placeholdersInfo: "맞춤 자리 표시자 {{USER}}, {{DISPLAY_NAME}}, {{NICKNAME}} 및 {{CHANNEL}}은 각각 사용자 이름(본인인 경우 비어 있음), 표시 이름, 서버의 닉네임 및 채널 이름으로 대체됩니다."
            }
        },
        viewIcons: {
            name: "보기아이콘",
            description: "사용자 프로필의 아바타 및 배너 이미지를 클릭 가능하게 만듭니다. 사용자, 서버 및 그룹 채널 상황에 맞는 메뉴에 디스플레이 아바타/배너 옵션을 추가합니다.",
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
                    description: "움직이지 않는 이미지에 사용할 이미지 형식을 선택합니다. 애니메이션 이미지는 항상 .gif 형식을 사용합니다."
                },
                imgSize: {
                    label: "이미지 크기",
                    description: "사용할 이미지 크기"
                }
            }
        },
        viewRaw: {
            name: "보기원시",
            description: "메시지, 채널 또는 서버의 원시 콘텐츠/데이터 복사 및 보기",
            context: {
                copyLeft: "원시 데이터 복사(왼쪽 클릭) / 원시 데이터 보기(오른쪽 클릭)",
                copyRight: "원시 데이터 복사(오른쪽 클릭) / 원시 데이터 보기(왼쪽 클릭)",
                view: "원시 데이터 보기"
            },
            option: {
                popoverButton: {
                    label: "팝업 메뉴 버튼",
                    description: "메시지의 원시 콘텐츠/데이터를 보려면 메시지 팝오버에 버튼을 표시합니다."
                },
                clickMethod: {
                    label: "클릭 방법",
                    description: "메시지의 원시 콘텐츠/데이터를 보는 데 사용할 클릭 방법을 변경합니다.",
                    left: "원시 콘텐츠를 보려면 마우스 왼쪽 버튼을 클릭하세요.",
                    right: "원시 콘텐츠를 보려면 마우스 오른쪽 버튼을 클릭하세요."
                }
            },
            modal: {
                title: "햄 베리",
                content: "내용물",
                data: "{{유형}} 베리",
                copied: "{{type}} 데이터가 클립보드에 복사되었습니다!",
                copy: "{{type}} JSON 복사",
                copiedContent: "콘텐츠가 클립보드에 복사되었습니다!",
                copyContent: "원시 콘텐츠 복사"
            },
            types: {
                message: "메시지",
                channel: "채널",
                guild: "증여자",
                role: "역할",
                user: "사용자"
            }
        },
        voiceButtons: {
            name: "음성버튼",
            description: "음성 통화 패널에서 모든 사용자에게 신속하게 DM을 보내거나, 음소거하거나, 귀머거리를 차단할 수 있습니다.",
            option: {
                showChatButton: {
                    label: "채팅 버튼 표시",
                    description: "채팅버튼 표시 여부"
                },
                showMuteButton: {
                    label: "음소거 버튼 표시",
                    description: "음소거 버튼 표시 여부"
                },
                showDeafenButton: {
                    label: "청각 장애인 버튼 표시",
                    description: "청각장애인 버튼을 표시할지 여부"
                },
                muteSoundboard: {
                    label: "Soundboard'u Sessize Al",
                    description: "청각 장애 버튼을 클릭하면 사용자의 사운드보드가 켜지거나 꺼집니다."
                },
                disableVideo: {
                    label: "비디오 비활성화",
                    description: "청각 장애 버튼을 클릭하면 사용자의 비디오가 켜지거나 꺼집니다."
                },
                useServer: {
                    label: "서버 사용",
                    description: "권한이 있는 경우 로컬 대신 서버 음소거/청각 장애를 사용합니다."
                },
                serverSelf: {
                    label: "서버에서 자신을 음소거",
                    description: "음소거/귀머거리를 사용하면 서버에서 자신의 소리가 들리지 않게 됩니다."
                },
                showButtonsSelf: {
                    label: "직접 버튼 표시",
                    description: "자신의 사용자에게 버튼을 표시할지 여부입니다. 동일한 기능을 가지고 있습니다. DM 패널이 열리고 자신의 소리가 들리지 않게 됩니다.",
                    display: "보여주다",
                    hide: "숨다",
                    disable: "장애가 있는"
                },
                whichNameToShow: {
                    label: "어떤 이름이 나타나야 합니까?",
                    description: "도구 설명에 사용자 이름, 전역 이름 또는 둘 다를 표시하시겠습니까?",
                    global: "전역 이름",
                    username: "사용자 이름",
                    both: "둘 다"
                },
                buttonPosition: {
                    label: "버튼 위치",
                    description: "버튼을 표시할 위치를 선택합니다.",
                    left: "솔",
                    right: "오른쪽",
                }
            },
            tooltip: {
                navigate: "DM으로 이동",
                open: "{{username}}님과의 DM 열기",
                yourself: "당신 자신",
                serverMute: "서버에서 음소거",
                serverDeafen: "서버의 청각 장애",
                mute: "무음",
                deafen: "귀가 들리지 않게 하다",
                unmute: "음소거 해제",
                undeafen: "귀머거리에서 제거",
                serverUnmute: "서버에서 음소거 해제",
                serverUndeafen: "서버에서 귀머거리 제거"
            }
        },
        voiceChannelLog: {
            name: "음성채널로그",
            description: "오디오 채널에 참여하고 나가는 사람을 기록합니다.",
            context: {
                view: "채널 로그 보기"
            },
            modal: {
                joined: "<#{{channel}}> 채널에 가입했습니다",
                left: "왼쪽 채널 <#{{채널}}>",
                movedTo: "<#{{channel}}> 채널로 이동했습니다.",
                movedFrom: "<#{{채널}}>에서 이동됨",
                noLogs: "표시할 로그가 없습니다.",
                logs: "{{채널}} 로그"
            },
            option: {
                mode: {
                    label: "모드",
                    description: "오디오 채널 로그를 표시하는 방법",
                    menu: "로그 메뉴",
                    associated: "관련 채팅 채널에 직접 로그인",
                    both: "채팅 채널과 로그 메뉴에 모두 로그인하세요."
                },
                voiceChannelChatSelf: {
                    label: "음성채널 채팅(본인)",
                    description: "음성 채널에 자신의 음성 채널 활동을 기록하세요."
                },
                voiceChannelChatSilent: {
                    label: "무음 음성 채널 채팅",
                    description: "음성 채널 채팅에서 참여/탈퇴/이동 메시지가 음소거됩니다."
                },
                voiceChannelChatSilentSelf: {
                    label: "무성음성 채널 채팅(본인)",
                    description: "음성 채널을 사용 중인 경우 참여/나가기/이동 메시지는 무음입니다."
                },
                ignoreBlockedUsers: {
                    label: "차단된 사용자 무시",
                    description: "차단한 사용자 기록"
                }
            }
        },
        voiceChatUtilities: {
            name: "VoiceChat유틸리티",
            description: "이 플러그인을 사용하면 전체 채널에서 여러 작업(이동, 음소거, 연결 끊기 등)을 수행할 수 있습니다(원래 dutake 제작).",
            option: {
                waitAfter: {
                    label: "조치 후 대기",
                    description: "대기 전에 수행할 API 트랜잭션 수(비율 제한을 피하기 위해)"
                },
                waitSeconds: {
                    label: "대기 시간",
                    description: "각 작업 간 대기 시간(초)"
                }
            },
            context: {
                voiceTools: "오디오 도구",
                mentionAll: "모든 사용자 태그",
                disconnectAll: "모두 연결 해제",
                muteAll: "모두 음소거",
                unmuteAll: "모두 음소거 해제",
                deafenAll: "청각 장애인 여러분",
                undeafenAll: "모두의 귀를 멀게 하지 않고 나가세요",
                moveAll: "모두 이동"
            }
        },
        voiceDownload: {
            name: "음성다운로드",
            description: "음성 메시지에 다운로드 옵션을 추가합니다. (새 브라우저 탭이 열립니다)",
            context: {
                download: "음성메일 다운로드"
            }
        },
        voiceMessages: {
            name: "음성 메시지",
            description: "모바일에서와 마찬가지로 음성 메시지를 보낼 수 있습니다. 이렇게 하려면 업로드 버튼을 마우스 오른쪽 버튼으로 클릭하고 '음성 메시지 보내기'를 선택하세요.",
            option: {
                noiseSuppression: {
                    label: "소음 제거",
                    description: "소음 제거"
                },
                echoCancellation: {
                    label: "에코 제거",
                    description: "에코 제거"
                }
            },
            notification: {
                failed: {
                    upload: "음성메일을 로드할 수 없습니다.",
                    start: "녹화를 시작하지 못했습니다.",
                    finish: "등록을 완료할 수 없습니다."
                }
            },
            context: {
                sendVoiceMessage: "음성 메시지 보내기",
                missingPermissions: "(권한 없음)"
            },
            modal: {
                record: "음성 메시지 녹음",
                upload: "파일 업로드",
                preview: "시사",
                failed: "선택한 오디오 파일을 구문 분석할 수 없습니다.",
                oggOpus: "iOS에서 재생하려면 음성 메시지가 OggOpus 형식이어야 합니다. 이 파일은 {{type}} 형식이므로 iOS에서 재생할 수 없습니다.",
                fix: "이 문제를 해결하려면 먼저 파일을 OggOpus 형식으로 변환하세요. 예를 들어, {{링크}}를 사용할 수 있습니다.",
                sending: "음성메일을 보내는 중... 잠시 기다려 주세요.",
                stop: "녹음 중지",
                start: "녹음 시작",
                resume: "이력서 등록",
                pause: "녹음 일시 정지",
                recording: "등록이 진행 중입니다.",
                send: "보내다"
            }
        },
        volumeBooster: {
            name: "볼륨부스터",
            description: "사용자 및 방송 볼륨을 기본 최대값 이상으로 늘릴 수 있습니다.",
            option: {
                multiplier: {
                    label: "승수",
                    description: "사운드 멀티플라이어"
                }
            }
        },
        wallpaperFree: {
            name: "벽지무료",
            description: "오래된 DM 벽지 실험을 리메이크했습니다. 모든 채널, 사용자 또는 서버에 대한 배경 이미지를 설정하세요.",
            option: {
                globalDefault: {
                    label: "일반 기본값",
                    description: "모든 채널에 대한 전역 기본 배경화면을 설정합니다."
                },
                stylingTips: {
                    label: "스타일 팁"
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
                    set: "공개 배경화면 설정",
                    remove: "전역 기본 배경화면 제거",
                    reset: "배경화면 데이터 재설정"
                },
                web: {
                    info: "로컬 파일을 plexcord 테마 디렉터리에 넣고 URL plexcord:///themes/filename.ext를 사용하여 사용할 수 있습니다.",
                    open: "테마 디렉토리 열기",
                    quickCSS: "QuickCSS 열기"
                }
            }
        },
        webContextMenus: {
            name: "WebContext메뉴",
            description: "웹 버전의 Discord에서 누락된 컨텍스트 메뉴를 다시 추가합니다: 링크 및 이미지(링크/이미지 복사 또는 열기), 텍스트 영역(복사, 잘라내기, 붙여넣기, 맞춤법 검사)",
            option: {
                addBack: {
                    label: "다시 추가",
                    description: "이미지, 링크, 채팅 항목 표시줄에 Discord 컨텍스트 메뉴를 다시 추가하세요."
                }
            }
        },
        webKeybinds: {
            name: "웹키바인드",
            description: "Discord 웹 버전에서 누락된 단축키(ctrl+t, ctrl+shift+t, ctrl+tab, ctrl+shift+tab, ctrl+1-9, ctrl+,)를 다시 추가합니다. 문자 그대로 브라우저 내가 아닌 Plextron/Legcord에서만 작동합니다."
        },
        webScreenShareFixes: {
            name: "웹화면 공유수정",
            description: "Chromium 및 Plextron 클라이언트에서 2500kbps 화면 공유 비트 전송률 제한을 제거합니다.",
            option: {
                experimentalAV1Support: {
                    label: "실험적인 AV1 지원",
                    description: "AV1 코덱 지원을 활성화합니다. 무한 로딩 스트림은 다음과 같은 문제를 일으킬 수 있습니다."
                }
            }
        },
        whoReacted: {
            name: "누가반응했는가",
            description: "메시지에 반응하는 사용자의 아바타를 표시합니다.",
            option: {
                avatarClick: {
                    label: "아바타 클릭",
                    description: "반응에서 아바타의 클릭 가능성을 전환합니다."
                }
            }
        },
        whosWatching: {
            name: "누가보고있어?",
            description: "화면 공유 아이콘 위에 마우스를 올려 방송을 시청하는 사용자를 확인하세요.",
            modal: {
                noSpectator: "청중 없음"
            },
            option: {
                showPanel: {
                    label: "패널 표시",
                    description: "화면 공유 패널 아래에 시청자 표시"
                }
            }
        },
        writeUpperCase: {
            name: "쓰기대문자",
            description: "메시지 항목에서 각 문장의 첫 글자를 대문자로 변환합니다.",
            option: {
                blockedWords: {
                    label: "차단된 단어",
                    description: "대문자로 쓰지 말아야 할 표현 (쉼표로 구분)"
                }
            }
        },
        xSOverlay: {
            name: "XS오버레이",
            description: "VR에서 쉽게 볼 수 있도록 Discord 알림을 XSOverlay에 푸시합니다.",
            notification: {
                call: {
                    title: "{{user}}님이 귀하를 찾고 있습니다.",
                    content: "수신 전화"
                },
                message: {
                    reply: "(응답)",
                    embed: "[포함시키다]",
                    onlyEmbed: "보낸 메시지 삽입",
                    sticker: "[상표]",
                    onlySticker: "스티커를 보냈어요",
                    image: "그림",
                    attachment: "나"
                },
                test: {
                    title: "Plexcord'그리고 다이빙!",
                    content: "테스트 알림입니다! 터지다",
                    button: "테스트 알림 보내기"
                }
            },
            option: {
                webSocketPort: {
                    label: "웹소켓 포트",
                    description: "웹소켓 포트"
                },
                preferUDP: {
                    label: "UDP Tercih Et",
                    description: "이전 버전의 XSOverlay를 사용 중이고 WebSocket을 통해 연결할 수 없는 경우 이를 활성화하세요. 이 설정은 웹에서는 무시됩니다."
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
                    description: "비공개 메시지 알림 허용"
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
                    label: "핑 렌기",
                    description: "사용자 태그 색상"
                },
                channelPingColor: {
                    label: "컬러 핑 채널",
                    description: "채널 라벨링 색상"
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
                    label: "메시지 길이 기반 기간",
                    description: "메시지 길이에 따라 기간 연장"
                },
                opacity: {
                    label: "불투명",
                    description: "알림 불투명도"
                },
                volume: {
                    label: "세스",
                    description: "사운드 레벨"
                }
            }
        },
        youtubeAdblock: {
            name: "유튜브애드블록",
            description: "AdGuard를 사용하여 YouTube 삽입 및 WatchTogether 활동에서 광고를 차단합니다."
        },
        youtubeDescription: {
            name: "YouTube설명",
            description: "YouTube 비디오 삽입에 설명을 추가합니다."
        }
    }
} as const;

export default translations;
