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
        title: "cài đặt",
        language: {
            selector: {
                label: "Dil",
                description: "Chọn ngôn ngữ ưa thích của bạn cho Plexcord.",
                placeholder: "Chọn ngôn ngữ"
            }
        },
        location: {
            label: "Cài đặt Vị trí",
            description: "Plexcord xác định nơi đặt phần cài đặt",
            top: "lên đỉnh",
            nitro: {
                above: "Trên đầu phần nitro",
                below: "dưới phần nitro"
            },
            activity: {
                above: "Cài đặt sự kiện ở trên",
                below: "Trong Cài đặt sự kiện"
            },
            bottom: "trên cao"
        },
        switches: {
            useQuickCss: {
                label: "Bật CSS tùy chỉnh",
                description: "Tải CSS tùy chỉnh từ trình chỉnh sửa QuickCSS. Điều này cho phép bạn tùy chỉnh giao diện của Discord theo phong cách của riêng bạn."
            },
            enableReactDevtools: {
                label: "Kích hoạt công cụ dành cho nhà phát triển React",
                description: "Kích hoạt tiện ích mở rộng Công cụ dành cho nhà phát triển React để gỡ lỗi các thành phần React của Discord. Hữu ích cho việc phát triển plugin."
            },
            mainWindowFrameless: {
                label: "Tắt khung cửa sổ chính",
                description: "Loại bỏ khung cửa sổ cục bộ để có cái nhìn rõ ràng hơn. Bạn vẫn có thể di chuyển cửa sổ bằng cách kéo vùng thanh tiêu đề."
            },
            frameless: {
                label: "Tắt khung cửa sổ",
                description: "Loại bỏ khung cửa sổ cục bộ để có cái nhìn rõ ràng hơn. Bạn vẫn có thể di chuyển cửa sổ bằng cách kéo vùng thanh tiêu đề."
            },
            winNativeTitleBar: {
                label: "Sử dụng thanh tiêu đề gốc của Windows thay vì thanh tiêu đề tùy chỉnh của Discord",
                description: "Thay thế thanh tiêu đề tùy chỉnh của Discord bằng thanh tiêu đề tiêu chuẩn của Windows. Điều này có thể cải thiện khả năng tương thích với một số công cụ quản lý cửa sổ."
            },
            transparent: {
                label: "Kích hoạt độ trong suốt của cửa sổ",
                description: "Làm cho cửa sổ Discord trong suốt. Cần có một chủ đề hỗ trợ tính minh bạch, nếu không nó sẽ không làm được gì cả.",
                isWindows: "Điều này sẽ ngăn cửa sổ thay đổi kích thước và ngăn bạn gắn cửa sổ vào các cạnh màn hình.",
                notWindows: "Điều này sẽ ngăn cửa sổ bị thay đổi kích thước."
            },
            winCtrlQ: {
                label: "Lưu phím tắt Ctrl+Q để đóng Discord (thay thế cho Alt+F4)",
                description: "Thêm Ctrl+Q làm phím tắt để đóng Discord. Điều này cung cấp một giải pháp thay thế cho Alt+F4 để đóng ứng dụng nhanh chóng."
            },
            disableMinSize: {
                label: "Vô hiệu hóa kích thước cửa sổ tối thiểu",
                description: "Cho phép cửa sổ Discord thay đổi kích thước nhỏ hơn kích thước tối thiểu mặc định của nó. Hữu ích cho việc sắp xếp các trình quản lý cửa sổ hoặc màn hình nhỏ."
            }
        },
        quickActions: {
            title: "Giao dịch nhanh",
            description: "Các thao tác phổ biến có thể bạn muốn sử dụng thường xuyên. Những phím tắt này giúp truy cập nhanh vào các tính năng được sử dụng thường xuyên mà không cần điều hướng menu.",
            notificationLog: "Nhật ký thông báo",
            editQuickCSS: "Chỉnh sửa QuickCSS",
            relaunchDiscord: "Khởi động lại sự bất hòa",
            openSettingsFolder: "Mở thư mục cài đặt",
            viewSourceCode: "Xem mã nguồn"
        },
        specialCards: {
            donations: {
                title: "Đóng góp",
                subtitle: "Cảm ơn vì sự đóng góp của bạn!",
                description: "Bạn có thể quản lý các đặc quyền của mình bất cứ lúc nào bằng cách nhắn tin cho @mutanplex.",
                button: "Đóng góp",
                invite: "Tham gia vào sự bất hòa của chúng tôi",
                invalid: "Liên kết lời mời không hợp lệ hoặc đã hết hạn."
            },
            supportProject: {
                title: "Hỗ trợ dự án",
                description: "Hãy cân nhắc hỗ trợ sự phát triển của Plexcord bằng cách quyên góp!"
            },
            contributions: {
                title: "Đóng góp",
                subtitle: "Cảm ơn sự đóng góp của bạn!",
                description: "Bây giờ bạn đã có một huy hiệu tuyệt vời để đóng góp cho Plexcord!",
                buttonTitle: "Xem những gì bạn đã đóng góp"
            }
        },
        settingsSection: {
            title: "Cài đặt",
            description: "Định cấu hình cách Plexcord tích hợp và hoạt động với Discord. Các cài đặt này ảnh hưởng đến giao diện và hoạt động của ứng dụng khách Discord.",
            hintParts: {
                prefix: "Bằng cách định cấu hình cài đặt {{pluginLink}}, bạn có thể tùy chỉnh vị trí xuất hiện của phần cài đặt này trong menu cài đặt Discord.",
                linkText: "Plugin cài đặt"
            }
        },
        notifications: {
            title: "Thông báo",
            description: "Định cấu hình cách Plexcord xử lý thông báo. Bạn có thể tùy chỉnh thời điểm và cách thức nhận thông báo hoặc xem lịch sử các thông báo trước đây.",
            settings: "Cài đặt thông báo",
            viewLog: "Xem lịch sử thông báo",
            permissions: {
                denied: {
                    title: "Quyền thông báo trên màn hình bị từ chối",
                    label: "Bạn đã từ chối Quyền thông báo. Thông báo trên màn hình sẽ không hoạt động!"
                }
            },
            style: {
                label: "Kiểu thông báo",
                description: "Một số plugin có thể hiển thị thông báo cho bạn. Chúng có hai phong cách:",
                plexcord: "Thông báo Plexcord",
                plexcordDesc: "Đây là những thông báo trong ứng dụng",
                desktop: "Thông báo trên màn hình",
                desktopDesc: "Thông báo trên Màn hình cục bộ (chẳng hạn như khi bạn nhận được ping)",
                onlyWhenNotFocused: "Chỉ sử dụng thông báo trên Màn hình khi Discord không được tập trung",
                always: {
                    desktop: "Luôn sử dụng thông báo trên màn hình",
                    plexcord: "Luôn sử dụng thông báo Plexcord"
                }
            },
            positions: {
                label: "Vị trí thông báo",
                right: {
                    bottom: "Xuống bên phải",
                    top: "Lên bên phải"
                },
                left: {
                    bottom: "Xuống bên trái",
                    top: "Lên trái"
                }
            },
            missed: {
                label: "Số thông báo bị bỏ lỡ",
                description: "Khi bạn tập trung lại vào Discord, một thông báo sẽ bật lên về bất kỳ thông báo nào bạn đã bỏ lỡ.",
                whileYou: "trong khi bạn đi vắng",
                count: "Đã nhận được {{count}} thông báo{{s}}",
                s: " "
            },
            timeout: {
                label: "Hết thời gian thông báo",
                description: "Khoảng thời gian thông báo hiển thị trên màn hình trước khi tự động biến mất (tính bằng giây)"
            },
            logLimit: {
                label: "Giới hạn nhật ký thông báo",
                description: "Số lượng thông báo tối đa được lưu trữ trong nhật ký thông báo. Đặt thành {{disable}} để tắt ghi nhật ký thông báo và đặt thành {{unlimited}} để không tự động xóa thông báo cũ"
            },
            opacity: {
                label: "Độ mờ",
                description: "Độ mờ của thông báo trong ứng dụng"
            },
            maxNotifications: {
                label: "Thông báo tối đa",
                description: "Số lượng thông báo tối đa hiển thị đồng thời"
            },
            behavior: {
                label: "Hành vi thông báo",
            },
            disableInStreamerMode: {
                label: "Tắt ở Chế độ phát sóng",
                description: "Tắt thông báo khi ở chế độ phát sóng"
            },
            renderImages: {
                label: "Xử lý hình ảnh",
                description: "Hiển thị hình ảnh trong thông báo"
            },
            streamingTreatment: {
                label: "Hành vi của chế độ phát sóng",
                description: "Cách xử lý thông báo khi chia sẻ màn hình của bạn",
                normal: "Bình thường - Hiển thị thông báo bình thường",
                noContent: "Không có nội dung - Ẩn nội dung thông báo",
                ignore: "Bỏ qua – Hoàn toàn không hiển thị thông báo"
            },
        },
        macVibrancy: {
            title: "Kiểu nhấp nháy cửa sổ (Yêu cầu khởi động lại)",
            description: "Tùy chỉnh hiệu ứng nhấp nháy cửa sổ macOS. Điều này kiểm soát kiểu mờ và trong suốt của cửa sổ Discord. Cần phải khởi động lại để những thay đổi có hiệu lực.",
            placeholder: "Kiểu cửa sổ nhấp nháy",
            style: {
                no: "không rung chuyển",
                underPage: "Bên dưới trang (Tông màu cửa sổ)",
                content: "Nội dung",
                window: "Cửa sổ",
                selection: "Bỏ phiếu",
                titlebar: "thanh tiêu đề",
                header: "Tiêu đề",
                sidebar: "thanh bên",
                tooltip: "mẹo công cụ",
                menu: "thực đơn",
                popover: "cửa sổ bật lên",
                fullscreenUI: "Giao diện người dùng toàn màn hình (trong suốt nhưng hơi mờ)",
                hud: "HUD (Minh bạch nhất)"
            }
        }
    },

    plugins: {
        title: "Plugin",
        new: "Mới",
        unknown: "Không xác định",
        noDescription: "Mô tả không có sẵn.",
        restart: {
            apply: "Hãy khởi động lại để áp dụng các thay đổi!",
            required: "Yêu cầu khởi động lại!",
            description: "Khởi động lại ngay bây giờ để áp dụng các plugin và cài đặt mới",
            following: "Các plugin sau yêu cầu khởi động lại:",
            fully: "Một số plugin yêu cầu khởi động lại để tắt hoàn toàn.",
            would: "Bạn có muốn khởi động lại không?",
            remainingCount: "và {{count}} nữa",
            resetDefault: "Đặt lại về cài đặt mặc định",
            failed: "Không khởi tạo được phần phụ thuộc:",
            button: {
                restart: "Khởi động lại",
                later: "Sau đó!",
                now: "Khởi động lại ngay bây giờ",
                cancel: "Hủy bỏ",
                disableWarning: "Tắt cảnh báo",
                disableAll: "Tắt tất cả",
                reset: "cài lại",
                close: "Một phần tư"
            }
        },
        contributor: {
            contributed: "đóng góp",
            modal: {
                contributionsInfo: "{{userName}} {{contributionCount}} {{continuedLink}} bằng cách phát triển plugin.",
                noContributions: "{{userName}} chưa phát triển bất kỳ plugin nào. Rất có thể là {{contributedLink}} theo những cách khác nhau!"
            }
        },
        infoModal: {
            description: "Bạn có thể biết thêm thông tin về plugin bằng cách nhấn vào biểu tượng bánh răng hoặc thông tin",
            settingsInfo: "Các plugin có bánh răng có các cài đặt mà bạn có thể thay đổi!",
            disableAll: "Vô hiệu hóa tất cả các plugin"
        },
        error: {
            invalidInput: "Đã cung cấp thông tin đầu vào không hợp lệ",
            stopping: "Đã xảy ra sự cố khi dừng plugin {{plugin}}",
            starting: "Đã xảy ra sự cố khi khởi chạy plugin {{plugin}}",
            startDependency: "Đã xảy ra sự cố khi khởi tạo các phần phụ thuộc: {{failures}}",
            infoRender: "Đã xảy ra lỗi khi hiển thị Thành phần thông tin tùy chỉnh của plugin này"
        },
        placeholder: {
            number: "Nhập một số",
            select: "Chọn một tùy chọn",
            text: "Nhập một giá trị"
        },
        excluded: {
            desktop: "Ứng dụng Discord Desktop hoặc Plextron",
            discordDesktop: "Ứng dụng Discord dành cho máy tính để bàn",
            plextron: "Ứng dụng Plextron",
            web: "Ứng dụng Plextron và phiên bản Web của Discord",
            dev: "Phiên bản dành cho nhà phát triển của Plexcord"
        },
        search: {
            looking: "Đây có phải là thứ bạn đang tìm kiếm",
            onlyAvailable: "Chỉ có ở đây ->",
            noCriteria: "Không tìm thấy plugin nào phù hợp với tiêu chí tìm kiếm của bạn"
        },
        required: {
            title: "Plugin bắt buộc",
            this: "Cần có plugin này để Plexcord hoạt động.",
            by: "Plugin này là cần thiết để những thứ sau hoạt động:"
        },
        dangerModal: {
            title: "Hành động nguy hiểm",
            disablePlugins: "Tắt plugin",
            disableText: "Tắt tất cả",
            irreversible: "HÀNH ĐỘNG NÀY KHÔNG THỂ HOÀN LẠI!",
            enableBack: "Bạn có chắc chắn muốn tiếp tục không? Bạn có thể kích hoạt lại nó sau.",
            undone: "Không thể hoàn tác hành động này. Bạn có chắc không?",
            resetDescription: "Bạn sắp đặt lại cài đặt plugin {{pluginName}} về giá trị mặc định.",
            disable: "Bạn sắp tắt plugin {{enabledPlugins}}!",
            confirmReset: "Xác nhận và đặt lại",
            cancel: "Hủy bỏ",
            resetSettings: "Đặt lại cài đặt",
            resetText: "cài lại"
        },
        filters: {
            label: "Bộ lọc",
            placeholder: "Tìm kiếm plugin...",
            option: {
                all: "Tất cả",
                enabled: "Tích cực",
                disabled: "Tàn tật",
                new: "mới",
                userplugins: "Plugin người dùng",
                api: "Plugin API"
            }
        },
        pluginModal: {
            noSettings: "Plugin này không có cài đặt mà bạn có thể thay đổi.",
            authors: "tác giả",
            settings: "Cài đặt",
            successfulReset: "Cài đặt của plugin {{plugin}} đã được đặt lại thành công.",
            enabledStock: "Tiện ích bổ sung chứng khoán đang hoạt động",
            totalStock: "Tổng số tiện ích bổ sung",
            enabledUser: "Plugin người dùng đang hoạt động",
            totalUser: "Tổng số tiện ích bổ sung của người dùng",
            info: "Xem thêm thông tin",
            source: "Xem mã nguồn"
        },
        metadata: {
            api: {
                description: {
                    memberListDecorators: "API để thêm trang trí vào danh sách thành viên (cả trên máy chủ và DM)",
                    messageAccessories: "API để thêm đạo cụ vào tin nhắn",
                    messageDecorations: "API để thêm trang trí vào bài viết",
                    chatInputButtons: "API để thêm nút vào mục trò chuyện",
                    commands: "API cần thiết cho bất kỳ thứ gì sử dụng lệnh",
                    contextMenu: "API để thêm/xóa các mục khỏi menu ngữ cảnh",
                    dynamicImageModal: "Cho phép bạn bỏ qua chiều rộng hoặc chiều cao khi mở chế độ hình ảnh",
                    menuItemDemangler: "Làm cho mục menu Discord dễ đọc hơn",
                    messageEvents: "Bất kỳ thứ gì sử dụng sự kiện tin nhắn đều cần có API",
                    messagePopover: "API để thêm nút vào cửa sổ bật lên tin nhắn",
                    messageUpdater: "API để cập nhật và xử lý lại tin nhắn",
                    nicknameIcons: "API để thêm biểu tượng vào tên người dùng trong hồ sơ",
                    notices: "Sửa lỗi tự động loại bỏ thông báo",
                    serverList: "Cần có API cho các plugin sửa đổi danh sách máy chủ",
                    userSettings: "Các bản vá để tiết lộ cài đặt, nhóm và tên người dùng của Discord",
                    audioPlayer: "API để phát các tệp âm thanh bên trong của Discord hoặc các liên kết âm thanh bên ngoài.",
                    userArea: "API để thêm các nút vào bảng khu vực người dùng."
                },
                chatButtons: {
                    context: {
                        buttons: "Nút"
                    }
                }
            },
            badges: {
                description: "API để thêm huy hiệu cho người dùng",
                contributor: {
                    plexcord: "Người tham gia Plexcord",
                    vencord: "Người tham gia Vencord",
                    userPlugin: "Người đóng góp plugin người dùng"
                },
                context: {
                    title: "Tùy chọn huy hiệu",
                    copy: {
                        name: "Sao chép tên huy hiệu",
                        link: "Sao chép liên kết hình ảnh của huy hiệu"
                    },
                    refetch: {
                        button: "Làm mới huy hiệu",
                        success: "Huy hiệu đã được gia hạn thành công!"
                    }
                },
                modal: {
                    title: "Người hỗ trợ Plexcord",
                    special: "Huy hiệu này là một đặc quyền dành cho các nhà tài trợ Plexcord.",
                    description: "Vui lòng cân nhắc hỗ trợ sự phát triển của Plexcord bằng cách trở thành nhà tài trợ. Điều này sẽ rất có giá trị đối với chúng tôi!!"
                }
            }
        },
        uiElements: {
            manage: "Quản lý các thành phần giao diện người dùng",
            allows: "Cho phép bạn ẩn các nút bạn không thích",
            section: {
                chatbar: {
                    title: "Nút thanh trò chuyện",
                    description: "Đây là các nút ở bên phải thanh nhập cuộc trò chuyện"
                },
                messagePopover: {
                    title: "Nút bật lên tin nhắn",
                    description: "Đây là các nút nổi xuất hiện ở bên phải khi bạn di chuột qua tin nhắn"
                }
            },
            button: "Các nút kích hoạt plugin sẽ xuất hiện ở đây."
        }
    },

    patchHelper: {
        title: "Trợ lý bản vá",
        description: "Một công cụ dành cho nhà phát triển giúp bạn tạo các bản vá cho plugin Plexcord.",
        fullPatch: {
            label: "Tam Yama",
            description: "Dán bản vá JSON đầy đủ của bạn vào đây để điền vào các trường"
        },
        find: "Bul",
        match: "cuộc thi đấu",
        replacement: "Thay đổi",
        preview: "Xem trước",
        generatedCode: "Mã được tạo",
        group: "Nhóm",
        diff: "Sự khác biệt",
        module: "mô-đun",
        compile: "Derle",
        compiled: "Biên dịch thành công",
        copy: {
            clipboard: "Sao chép vào Clipboard",
            codeblock: "Sao chép dưới dạng khối mã"
        },
        error: {
            noMatch: "Không tìm thấy kết quả phù hợp. Có lẽ mô-đun đó đang tải chậm.",
            multipleMatch: "Nhiều hơn một trận đấu được tìm thấy. Vui lòng sử dụng mẫu tìm kiếm cụ thể hơn.",
            noFind: "Không có trường 'tìm'.",
            noReplacement: "Không có trường 'Thay đổi'.",
            invalidReplacement: "Trường thay thế không hợp lệ",
            replacementMatch: "Trường 'replacement.match' không tồn tại",
            replacementReplace: "Trường 'replacement.replace' không tồn tại",
            replacementMustFunction: "Sự thay thế phải là một chức năng"
        },
        cheatSheet: {
            title: "Bảng gian lận",
            identifiers: "Mã nhận dạng khớp với chuỗi thoát biểu thức chính quy tùy chỉnh (tên biến, tên lớp, v.v.)",
            dollar: "thêm $",
            entireMatch: "Thêm tất cả trận đấu",
            beforeMatch: "Thêm chuỗi con trước trận đấu",
            afterMatch: "Thêm chuỗi con sau trận đấu",
            nthGroup: "Thêm nhóm chụp thứ n ($1, $2...)",
            pluginInstance: "Thêm phiên bản plugin"
        },
        replacementEval: {
            label: "Quá trình thay thế dưới dạng chức năng",
            description: "'Thay thế' sẽ được coi là một chức năng khi tính năng này được bật."
        }
    },

    sync: {
        title: "Sao lưu và khôi phục",
        warning: "Cảnh báo",
        warningText: "Nhập tệp cài đặt sẽ ghi đè cài đặt hiện tại của bạn. Nếu bạn muốn giữ cấu hình hiện tại của mình, trước tiên hãy nhớ xuất bản sao lưu.",
        description: "Bạn có thể nhập và xuất cài đặt Plexcord của mình dưới dạng tệp JSON. Bằng cách này, bạn có thể dễ dàng di chuyển cài đặt của mình sang thiết bị khác hoặc khôi phục cài đặt của mình sau khi cài đặt lại Plexcord hoặc Discord.",
        successful: "Các cài đặt đã được nhập thành công. Khởi động lại ứng dụng để những thay đổi có hiệu lực!",
        error: {
            failure: "Nhập cài đặt không thành công: {{error}}",
            failedExport: "Xuất cài đặt không thành công, hãy kiểm tra bảng điều khiển",
            invalid: "Cài đặt không hợp lệ. Đây có thực sự là tệp Điều chỉnh Plexcord không?",
            tooLarge: "DataStore quá lớn - bị loại khỏi bản sao lưu. Sử dụng tính năng 'Xuất kho dữ liệu' nếu cần.",
            clearSomeDate: "DataStore rất lớn. Vui lòng xóa một số dữ liệu plugin và thử lại."
        },
        settings: {
            text: "Có gì trong bản sao lưu?",
            quickcss: "CSS nhanh tùy chỉnh",
            theme: "Liên kết chủ đề",
            plugins: "Cài đặt plugin",
            datastores: "Kho lưu trữ bổ trợ (ví dụ: Múi giờ hoặc IRememberYou)"
        },
        import: {
            title: "Cài đặt nhập",
            description: "Chọn tệp cài đặt đã xuất trước đó để khôi phục cấu hình của bạn. Thao tác này sẽ thay thế tất cả cài đặt hiện tại của bạn bằng cài đặt từ bản sao lưu.",
            all: "Nhập tất cả cài đặt",
            plugins: "Eklentiyi Iche Aktar",
            css: "QuickCSS sẽ được thêm vào",
            datastore: "Nhập kho dữ liệu"
        },
        export: {
            title: "Xuất cài đặt",
            description: "Bạn có thể xuất cài đặt Plexcord hiện tại của mình sang một tệp để sao lưu hoặc chuyển sang thiết bị khác.",
            all: "Xuất tất cả cài đặt",
            plugins: "Xuất plugin",
            css: "Xuất QuickCSS",
            datastore: "Xuất kho dữ liệu"
        }
    },

    cloud: {
        text: "Đám mây",
        title: "Đồng bộ hóa cài đặt",
        override: "Đồng bộ đám mây",
        description: "Đồng bộ hóa cài đặt Plexcord của bạn với đám mây. Điều này cho phép bạn duy trì cấu hình của mình một cách nhất quán trên nhiều thiết bị mà không cần nhập/xuất thủ công.",
        switchDescription: "Sau khi được bật, cài đặt của bạn sẽ được đồng bộ hóa với đám mây. Bạn có thể đồng bộ hóa thủ công bằng cách thực hiện các thao tác sau.",
        settings: "Cài đặt đám mây",
        successful: "Cài đặt của bạn đã được đồng bộ hóa thành công với đám mây.",
        updated: "Cài đặt của bạn đã được cập nhật! Bấm vào đây để khởi động lại để những thay đổi có hiệu lực đầy đủ!",
        deleted: "Cài đặt đã bị xóa khỏi đám mây!",
        integration: {
            title: "Tích hợp đám mây",
            description: "Tích hợp đám mây của Plexcord cho phép bạn đồng bộ hóa cài đặt của mình trên nhiều thiết bị và cài đặt Discord. Dữ liệu của bạn được lưu trữ an toàn và có thể dễ dàng khôi phục bất cứ lúc nào.",
        },
        reauth: "Chúng tôi nhận thấy rằng một khách hàng khác đã bật tích hợp đám mây! Do những hạn chế, bạn sẽ cần phải xác thực lại để tiếp tục. Bấm vào đây để đến trang cài đặt và tiếp tục!",
        error: {
            setup: "Thiết lập không thành công (không thể truy xuất cấu hình OAuth).",
            secret: "Thiết lập không thành công (không có khóa bí mật nào được trả về).",
            string: "Cài đặt không thành công ({{error}}).",
            connect: "Đồng bộ hóa đám mây đã bị tắt vì tài khoản này không được kết nối với Ứng dụng đám mây Plexcord. Bạn có thể kích hoạt lại tài khoản này bằng cách kết nối nó trong Cài đặt đám mây. (lưu ý: sẽ lưu trữ riêng các tùy chọn của bạn)",
            noSettings: "Không tìm thấy cài đặt nào trên đám mây.",
            uptodate: "Cài đặt của bạn đã được cập nhật.",
            localNewer: "Cài đặt cục bộ của bạn mới hơn cài đặt đám mây.",
            delete: "Không xóa được cài đặt ({{error}}).",
            api: {
                returned: {
                    delete: "Không xóa được cài đặt (API trả về {{status}}).",
                    to: "Không thể đồng bộ hóa cài đặt với đám mây (API trả về {{status}}).",
                    from: "Không thể đồng bộ hóa cài đặt từ đám mây (API trả về {{status}})."
                }
            },
            synchronize: {
                to: "Không thể đồng bộ hóa cài đặt với đám mây ({{error}}).",
                from: "Không thể đồng bộ hóa cài đặt từ đám mây ({{error}})."
            }
        },
        warning: {
            enableCloudIntegration: "Để sử dụng các tính năng đồng bộ hóa cài đặt, hãy bật tích hợp đám mây ở trên."
        },
        danger: {
            title: "Vùng nguy hiểm",
            description: "Xóa vĩnh viễn tất cả dữ liệu của bạn trên đám mây. Hành động này không thể đảo ngược và sẽ xóa tất cả cài đặt đã đồng bộ hóa cũng như mọi dữ liệu khác được lưu trữ trong cơ sở hạ tầng đám mây.",
            delete: {
                account: {
                    title: "Xóa tài khoản đám mây",
                    description: "Bạn có chắc chắn muốn xóa vĩnh viễn tài khoản đám mây của mình và tất cả dữ liệu liên quan không? Không thể hoàn tác hành động này.",
                    confirm: "Xóa tài khoản",
                    cancel: "Hủy bỏ"
                }
            }
        },
        notification: {
            title: "Tích hợp đám mây",
            enabled: "Đã bật tích hợp đám mây",
            host: "Miền {{host}} đã được thêm vào danh sách cấp phép. Khởi động lại ứng dụng để những thay đổi có hiệu lực.",
            erase: {
                successful: "Dữ liệu đám mây đã được xóa thành công",
                failed: "Không xóa được tất cả dữ liệu (API trả về {{status}}), vui lòng liên hệ với bộ phận hỗ trợ."
            }
        },
        button: {
            to: "Đồng bộ hóa với đám mây",
            from: "Đồng bộ hóa từ đám mây",
            fromDescription: "Thao tác này sẽ ghi đè cài đặt hiện tại của bạn bằng cài đặt từ đám mây. Hãy sử dụng nó một cách khôn ngoan!",
            delete: "Xóa dữ liệu đám mây",
            enable: "Kích hoạt tích hợp đám mây",
            reauthorize: "Ủy quyền lại",
            confirm: "Khởi động lại ngay bây giờ",
            later: "Sau đó!"
        },
        privacy: "bảo vệ sự riêng tư của bạn",
        source: "mã nguồn",
        overview: "Plexcord đi kèm với tích hợp đám mây, mang lại những lợi ích như đồng bộ hóa cài đặt trên các thiết bị. Vì những {{privacy}} và {{source}} này được cung cấp với giấy phép AGPL 3.0 nên bạn có thể lưu trữ chúng trên máy chủ của riêng mình.",
        authorization: "Kết nối với đám mây để đồng bộ hóa cài đặt. Nếu bạn chưa thiết lập tích hợp đám mây, thao tác này sẽ yêu cầu ủy quyền.",
        backend: {
            title: "Nhà cung cấp đám mây",
            description: "Chọn cách cài đặt của bạn sẽ được lưu trữ trên đám mây. Theo mặc định, Plexcord Cloud được sử dụng nhưng bạn cũng có thể định cấu hình dịch vụ đám mây tự lưu trữ của riêng mình nếu muốn.",
            invalid: "URL không hợp lệ"
        },
        sync: {
            title: "Quy tắc đồng bộ hóa cho thiết bị này",
            description: "Cài đặt này xác định cách đồng bộ hóa cài đặt giữa thiết bị này và đám mây. Bạn có thể cho phép các thay đổi được truyền theo cả hai hướng hoặc chọn một bên làm nguồn chính.",
            direction: {
                both: "Đồng bộ hóa hai chiều (các thay đổi được truyền theo cả hai hướng)",
                push: "Thiết bị này là nguồn (chỉ tải lên)",
                pull: "Nguồn đám mây (chỉ tải xuống)",
                manual: "Đồng bộ hóa tự động (chỉ đồng bộ hóa thủ công với các nút bên dưới)"
            }
        }
    },

    changelog: {
        text: "Thay đổi ghi chú",
        title: "Thay đổi ghi chú",
        description: "Bạn có thể tìm thấy những thay đổi và cập nhật mới nhất cho Plexcord tại đây.",
        by: "nhà văn",
        check: "Kiểm tra kho",
        uptodate: "hiện hành",
        update: "Cập nhật",
        noMessage: "không có tin nhắn",
        unknown: "không rõ",
        updatedPlugins: "Plugin được cập nhật",
        newSettings: "Cài đặt mới",
        newSettingTooltip: "Cài đặt mới cho {{plugin}}",
        loading: "Đang tải...",
        repoUptodate: "Kho hàng cập nhật",
        fetch: "Mang từ kho về",
        clear: "Xóa tất cả ghi chú",
        internet: "Hãy đảm bảo bạn có kết nối Internet và thử lại.",
        recent: "Những thay đổi gần đây",
        codeChanges: "Thay đổi mã {{count}} cam kết mới",
        updateLogs: "{{count}} Ghi chú cập nhật",
        noCommit: "Không tìm thấy cam kết chuyển tiếp nào từ phiên bản hiện tại của bạn. Nhấp vào 'Tìm nạp từ Kho lưu trữ' để kiểm tra các thay đổi mới.",
        previous: "Cùng với các phiên cập nhật trước đó, lịch sử cam kết và các thay đổi của plugin.",
        modal: {
            description: "Xem những thay đổi mới nhất đối với Plexcord. Quá trình này cho bạn biết có gì mới bằng cách tìm nạp các cam kết trực tiếp từ kho lưu trữ.",
            repository: "kho lưu trữ",
            failed: "Không nhận được - hãy kiểm tra bảng điều khiển",
            current: "Có sẵn:",
            hide: "ẩn ghi chú",
            show: "Hiển thị ghi chú",
            fetch: {
                title: "Mang theo những thay đổi",
                description: "Kiểm tra các cam kết mới, cập nhật plugin và thay đổi mã trong kho lưu trữ. Điều này sẽ so sánh phiên bản hiện tại của bạn với phiên bản mới nhất và hiển thị cho bạn những tính năng mới.",
                newCommit: "Đây là các cam kết và cập nhật plugin mới kể từ bản phát hành gần đây nhất của bạn. Bạn có thể xem những tính năng nào đã được thêm vào, lỗi nào đã được sửa và plugin nào đã được cập nhật.",
                confirm: "Có thể",
            }
        },
        commit: {
            available: "cam kết có sẵn",
            no: "Không có cam kết mới",
            new: "plugin mới",
            updated: "plugin được cập nhật",
            settings: "cài đặt mới"
        },
        toast: {
            already: "Kho lưu trữ đã được cập nhật",
            found: "{{count}} cam kết mới được tìm thấy từ kho lưu trữ",
            local: "Kho lưu trữ được cập nhật với bản sao cục bộ của bạn",
            failed: "Không thể mang nó từ kho :(",
            cleared: "Đã xóa tất cả ghi chú",
            logCleared: "Đã xóa ghi chú",
            yourLatest: "Đã lưu cam kết từ lần cập nhật gần đây nhất của bạn"
        },
        alert: {
            clear: {
                title: "Xóa tất cả ghi chú",
                body: "Bạn có chắc chắn muốn xóa tất cả ghi chú không? Không thể hoàn tác hành động này.",
                confirm: "Xóa tất cả",
                confirmColor: "sự nguy hiểm",
                cancel: "Hủy bỏ"
            },
            log: {
                title: "Xóa nhật ký",
                body: "Bạn có chắc chắn muốn xóa nhật ký này không? Không thể hoàn tác hành động này.",
                confirm: "Xóa nhật ký",
                confirmColor: "sự nguy hiểm",
                cancel: "Hủy bỏ"
            }
        },
        newPlugins: "{{count}} Plugin mới",
        following: "Các plugin sau đã được thêm vào trong các bản cập nhật gần đây:",
        more: "+{{count}} plugin mới"
    },

    csp: {
        restart: "Cần phải khởi động lại để áp dụng thay đổi này",
        blocked: {
            resources: "Tài nguyên bị chặn",
            disallowed: "Một số hình ảnh, kiểu hoặc phông chữ đã bị chặn vì chúng đến từ các miền trái phép.",
            recommended: "Chúng tôi khuyên bạn nên chuyển chúng sang GitHub hoặc Imgur. Tuy nhiên, bạn cũng có thể cho phép các miền nếu bạn hoàn toàn tin tưởng chúng.",
            afterAllow: "Sau khi cấp quyền cho một không gian, bạn phải tắt hoàn toàn và khởi động lại {{platform}} (từ khay hệ thống / trình quản lý tác vụ) để áp dụng thay đổi.",
            allow: "Cho phép",
            url: "URL bị chặn"
        },
        imgur: {
            direct: "Liên kết Imgur phải là liên kết trực tiếp ở định dạng {{etc}}.",
            copy: "Để lấy link trực tiếp, nhấp chuột phải vào hình ảnh và chọn 'Sao chép địa chỉ hình ảnh'."
        },
        wants: {
            caller: "{{callerName}} muốn cho phép kết nối với {{domain}}",
            detail: "Nếu bạn không nhận ra và hoàn toàn tin tưởng {{domain}}, bạn nên hủy yêu cầu này!",
            restart: "Bạn phải đóng hoàn toàn và khởi động lại {{appName}} để các thay đổi có hiệu lực.",
            type: {
                images: "hình ảnh",
                styles: "CSS và Chủ đề",
                fonts: "Phông chữ"
            },
            content: "Các loại nội dung sau sẽ được phép tải lên từ {{domain}}:",
            understand: "Tôi hoàn toàn tin tưởng {{domain}} và hiểu những rủi ro khi cho phép liên kết.",
            button: {
                cancel: "Hủy bỏ",
                allow: "Cho phép"
            },
            title: "Quyền đối với tên miền"
        }
    },

    themes: {
        title: "Chủ đề",
        management: "Quản lý chủ đề",
        description: "Tùy chỉnh giao diện của Discord bằng các chủ đề. Thêm tệp .css cục bộ hoặc cài đặt chủ đề trực tiếp từ URL. Chủ đề có biểu tượng bánh răng có các cài đặt tùy chỉnh mà bạn có thể thay đổi.",
        local: "Chủ đề địa phương",
        new: "MỚI",
        pinned: "được ghim",
        stylus: "Phần mở rộng bút cảm ứng",
        bd: "Chủ đề BetterDiscord",
        github: "Github",
        download: "Bạn đang tìm kiếm một chủ đề? Hãy xem {{bd}} hoặc tìm kiếm trên {{github}}. Khi tải xuống từ BetterDiscord, hãy nhấp vào nút “Tải xuống” và đặt tệp .theme.css vào thư mục chủ đề của bạn.",
        add: "Thêm vào",
        reset: "Đặt lại cài đặt về mặc định",
        notCSS: "Đây không phải là tệp CSS. Hãy chắc chắn rằng bạn sử dụng liên kết thô!",
        okay: "Được rồi!",
        checking: "Đang kiểm tra...",
        valid: "Có hiệu lực!",
        upload: "Tải chủ đề lên",
        openFolder: "Mở thư mục chủ đề",
        loadMissing: "Cài đặt chủ đề bị thiếu",
        editQuickCSS: "Chỉnh sửa QuickCSS",
        editClient: "Chỉnh sửa chủ đề khách hàng",
        website: "Mở trang web",
        discord: "Máy chủ bất hòa",
        downloadTheme: "Tải xuống",
        refresh: "Làm cho khỏe lại",
        delete: "Sil",
        unknown: {
            title: "không rõ",
            author: "Tác giả không xác định",
            theme: "Chủ đề bất hòa"
        },
        required: "Các plugin sau được yêu cầu nhưng không hoạt động:",
        homepage: "Trang chủ",
        support: "Ủng hộ",
        online: {
            title: "Chủ đề trực tuyến",
            description: "Cài đặt chủ đề trực tiếp từ URL thay vì tệp cục bộ. Các chủ đề trực tuyến được cập nhật tự động khi nguồn thay đổi; để bạn luôn có phiên bản mới nhất mà không cần tải xuống thủ công.",
            enable: "Kích hoạt chủ đề trực tuyến",
            enableDescription: "Chuyển đổi tải lên chủ đề trực tuyến. Khi bị tắt, tất cả các chủ đề trực tuyến sẽ bị tắt và bạn sẽ không thể thêm các chủ đề trực tuyến mới."
        },
        quickActions: {
            title: "Giao dịch nhanh",
            description: "Các phím tắt để quản lý chủ đề của bạn. Mở thư mục chủ đề để thêm chủ đề mới, sử dụng QuickCSS để chỉnh sửa kiểu nhanh chóng hoặc tải lại chủ đề sau khi thay đổi."
        },
        error: {
            userscript: "Các chủ đề trên Userscript không được hỗ trợ!",
            stylus: "Thay vào đó, bạn có thể cài đặt chủ đề bằng {{stylus}}!",
            expired: "Liên kết không hợp lệ hoặc đã hết hạn",
            text: "Thậm chí:"
        },
        copy: {
            url: "Sao chép URL",
            copied: "Đã sao chép URL chủ đề!",
            settings: "Sao chép cài đặt chủ đề",
            copiedSettings: "Cài đặt chủ đề đã được sao chép vào bảng nhớ tạm."
        },
        paste: {
            settings: "Dán cài đặt chủ đề",
            empty: "Clipboard của bạn trống.",
            invalid: "Không có dữ liệu cài đặt hợp lệ trong clipboard của bạn.",
            pasted: "Cài đặt chủ đề đã được dán từ bảng nhớ tạm."
        },
        settings: {
            for: "Cài đặt cho {{themeName}}",
        },
        installed: {
            title: "Chủ đề đã cài đặt",
            description: "Quản lý chủ đề của bạn ở đây. Chủ đề cục bộ được tải từ thư mục chủ đề của bạn, chủ đề trực tuyến được tải từ URL. Chủ đề có biểu tượng bánh răng có cài đặt tùy chỉnh.",
            count: "Đã cài đặt {{count}} chủ đề ({{localCount}} cục bộ, {{onlineCount}} trực tuyến) đã bật {{enabledCount}}",
            search: "Chủ đề thậm chí...",
            loading: "Chủ đề đang tải...",
            none: "Chưa có chủ đề nào được cài đặt. Để bắt đầu, hãy thêm các tệp chủ đề vào thư mục chủ đề của bạn hoặc thêm chủ đề trực tuyến từ phía trên.",
            noCriteria: "Không tìm thấy chủ đề nào phù hợp với tiêu chí tìm kiếm hoặc bộ lọc của bạn."
        },
        filter: {
            all: "Hiển thị tất cả",
            online: "Chủ đề trực tuyến",
            local: "Chủ đề địa phương",
            enabled: "Hiệu quả",
            disabled: "Tàn tật"
        },
        notification: {
            refresh: {
                title: "Chủ đề được đổi mới",
                error: "Không thể làm mới chủ đề"
            },
            failed: {
                download: "Chủ đề Indirilemedi"
            }
        }
    },

    updater: {
        title: "Trình cập nhật",
        settings: "Cài đặt trình cập nhật",
        updates: "Cập nhật",
        updated: "đã cập nhật!",
        restart: "Khởi động lại bằng cách nhấp vào đây",
        repaired: "Plexcord đã được sửa chữa!",
        ok: "Được rồi",
        preferences: {
            title: "Cập nhật tùy chọn",
            description: "Hãy xem cách Plexcord tự cập nhật. Bạn có thể chọn cập nhật tự động trong nền hoặc nhận thông báo khi có bản cập nhật mới.",
        },
        github: {
            local: "Bản sao cục bộ của bạn có bản ghi mới hơn kho lưu trữ từ xa. Điều này thường xảy ra khi bạn thực hiện thay đổi cục bộ. Vui lòng giữ lại hoặc đặt lại chúng trước khi cập nhật."
        },
        error: {
            check: "Đã xảy ra sự cố khi kiểm tra bản cập nhật. Xem bảng điều khiển để biết thêm thông tin.",
            occurred: "Đã xảy ra lỗi",
            retrieve: "Đã xảy ra sự cố khi truy xuất thông tin cập nhật - Check Console",
            title: "Không!",
            tryAgain: "Đã xảy ra lỗi. Vui lòng thử lại hoặc xem bảng điều khiển để biết thêm thông tin.",
            command: "Không tìm thấy lệnh {{path}}. Tải xuống cái này hoặc thử lại.",
            code: "Mã {{mã}}. Xem bảng điều khiển để biết thêm thông tin.",
            running: "Đã xảy ra sự cố khi thực thi {{cmd}}: {{error}}",
            failed: "Điều này cũng không thành công :( Vui lòng thử cập nhật hoặc cài đặt lại bằng trình cài đặt!"
        },
        available: "Có 1 bản cập nhật",
        updateAvailable: "Đã có bản cập nhật Plexcord!",
        click: "Bấm vào đây để xem bản cập nhật",
        available_plural: "Có sẵn bản cập nhật {{count}}",
        current: "Hiện hành!",
        successful: {
            title: "Cập nhật thành công!",
            body: "Đã cập nhật thành công. Khởi động lại để lưu thay đổi!",
            button: {
                confirm: "Khởi động lại",
                cancel: "Không phải bây giờ!",
                update: "Cập nhật ngay",
                check: "Kiểm tra cập nhật"
            },
            noFound: "Không tìm thấy bản cập nhật"
        },
        automatically: {
            label: "Tự động cập nhật",
            description: "Plexcord tự động tải xuống và cài đặt các bản cập nhật mà không cần xác nhận"
        },
        notify: {
            label: "Hiển thị thông báo cập nhật tự động",
            description: "Hiển thị thông báo khi Plexcord tự động cập nhật"
        },
        repo: "kho lưu trữ",
        repoDescription: "Đây là kho lưu trữ GitHub nơi Plexcord nhận các bản cập nhật.",
        loading: "Đang tải...",
    },

    components: {
        error: {
            title: "Ồ không!",
            render: "Đã xảy ra lỗi khi hiển thị thành phần này. Tìm thêm thông tin bên dưới và trên bảng điều khiển của bạn."
        },
        componentFailed: {
            message: "À! Không thể hiển thị trang này. Tuy nhiên, có một bản cập nhật có thể khắc phục điều này. Bạn có muốn cập nhật và khởi động lại ngay bây giờ không?"
        },
        quickCSS: {
            title: "Mở trình soạn thảo QuickCSS",
            message: "Trình chỉnh sửa QuickCSS vẫn đang mở ở chế độ nền.",
            detail: "Bạn vẫn muốn đóng Discord? Thao tác này cũng sẽ đóng trình soạn thảo QuickCSS.",
            cancel: "Hủy bỏ",
            close: "Vẫn đóng"
        }
    },

    commands: {
        error: {
            execute: "Đã xảy ra lỗi khi thực thi lệnh '{{command}}'"
        }
    },

    notifications: {
        dismiss: "Đóng thông báo",
        noYet: "Chưa có thông báo nào",
        settings: "Cài đặt thông báo",
        log: {
            title: "Nhật ký thông báo",
            clear: "Xóa nhật ký thông báo",
            sure: "Bạn có chắc không?",
            permamently: "{{count}} thông báo sẽ bị xóa vĩnh viễn. Không thể hoàn tác hành động này.",
            button: {
                confirm: "Được rồi",
                cancel: "Hủy bỏ"
            }
        }
    },

    memberlist: {
        error: {
            render: "Đã xảy ra lỗi khi hiển thị Trình trang trí danh sách thành viên {{key}}"
        }
    },

    message: {
        accessory: {
            error: {
                render: "Đã xảy ra lỗi khi hiển thị Phụ kiện thông báo {{key}}"
            }
        },
        decoration: {
            error: {
                render: "Đã xảy ra lỗi khi hiển thị trang trí thông báo {{key}}"
            }
        }
    },

    utils: {
        toast: {
            copied: "Đã sao chép vào bảng nhớ tạm!"
        }
    },

    common: {
        unit: {
            year: "năm",
            years: "năm",
            month: "là",
            months: "là",
            week: "tuần",
            weeks: "tuần",
            day: "ngày",
            days: "ngày",
            hour: "chốc lát",
            hours: "chốc lát",
            minute: "phút",
            minutes: "phút",
            second: "thứ hai",
            seconds: "thứ hai",
            ago: "trước",
            s: " "
        }
    },

    plugin: {
        noTrack: {
            name: "Không theo dõi",
            description: "Tắt tính năng theo dõi của Discord (phân tích/'khoa học'), số liệu và báo cáo sự cố Sentry",
            option: {
                disableAnalytics: {
                    label: "Đóng phân tích",
                    description: "Tắt các chỉ số theo dõi (phân tích/'khoa học') của Discord và báo cáo sự cố Sentry"
                }
            }
        },
        settings: {
            name: "Cài đặt",
            description: "Thêm giao diện cài đặt và thông tin gỡ lỗi",
            option: {
                language: {
                    label: "Dil",
                    description: "Chọn ngôn ngữ ưa thích của bạn cho Plexcord."
                },
                settingsLocation: {
                    label: "Cài đặt Vị trí",
                    description: "Plexcord xác định nơi đặt phần cài đặt"
                }
            }
        },
        supportHelper: {
            name: "Trợ lý hỗ trợ",
            description: "Giúp chúng tôi cung cấp hỗ trợ cho bạn",
            commands: {
                description: {
                    debug: "Gửi thông tin gỡ lỗi Plexcord",
                    plugins: "Gửi danh sách plugin Plexcord"
                }
            },
            modals: {
                outdated: {
                    title: "Chờ đợi!",
                    body: "Bạn đang sử dụng phiên bản cũ của Plexcord! Rất có thể vấn đề của bạn đã được giải quyết.",
                    footer: "Vui lòng cập nhật trước khi yêu cầu hỗ trợ!",
                    button: {
                        cancel: "Xem cập nhật",
                        confirm: "Cập nhật và khởi động lại ngay",
                        secondaryConfirm: "Tôi biết mình đang làm gì hoặc tôi không thể cập nhật"
                    }
                },
                updater: {
                    title: "Chờ đợi!",
                    body: "Bạn đang sử dụng phiên bản cập nhật bên ngoài của Plexcord, chúng tôi không cung cấp hỗ trợ cho phiên bản này!",
                    footer: "Vui lòng {{officially}} hoặc liên hệ với nhà cung cấp gói của bạn để được hỗ trợ.",
                    officially: "phiên bản được hỗ trợ chính thức của Plexcord",
                    button: {
                        cancel: "Hủy bỏ",
                        confirm: "Xem trang tải xuống",
                        now: "Cập nhật ngay"
                    },
                    toast: {
                        success: "Thành công! Đang khởi động lại...",
                        already: "Đã được cập nhật!",
                        failed: "Cập nhật không thành công :("
                    }
                },
                custom: {
                    title: "Chờ đợi!",
                    header: "Bạn đang sử dụng phiên bản Plexcord độc quyền, chúng tôi không cung cấp hỗ trợ cho phiên bản này!",
                    body: "Chúng tôi chỉ cung cấp hỗ trợ cho {{officialBuild}}. {{switch}} hoặc tự mình giải quyết vấn đề.",
                    footer: "Nếu bạn bỏ qua quy tắc này, quyền nhận hỗ trợ của bạn sẽ bị thu hồi.",
                    official: "phát hành chính thức",
                    switch: "nâng cấp lên phiên bản chính thức",
                    button: {
                        confirm: "Tôi hiểu",
                        secondaryConfirm: "Đừng hiển thị lại"
                    }
                }
            },
            button: {
                debug: "chạy/gỡ lỗi plexcord",
                plugins: "chạy /plexcord-plugin",
                snippet: "Chạy đoạn mã"
            },
            toast: {
                success: "Thành công!",
                failed: "Không thể chạy đoạn mã :(",
                failedOpenInvite: "Không mở được lời mời, vui lòng kiểm tra bảng điều khiển :(",
                upload: "Danh sách plugin đã được tải thành công!",
                failedUpload: "Không thể tải tệp danh sách plugin. Vui lòng thử lại.",
                unableGenerate: "Không tạo được danh sách plugin."
            },
            dm: {
                warning: "Vui lòng không gửi tin nhắn riêng tư tới các nhà phát triển plugin Plexcord để được hỗ trợ!{{br}}Thay vào đó, bạn có thể sử dụng kênh hỗ trợ Plexcord bằng cách tham gia máy chủ {{support}}: {{channel}}"
            },
            alert: {
                title: "Cảnh báo: Quá nhiều Plugin",
                paragraph1: "Chúng tôi nhận thấy hơn 100 plugin đã được kích hoạt.",
                paragraph2: "Bạn có thể không nhận được hỗ trợ do số lượng plugin.",
                paragraph3: "Vấn đề của bạn rất có thể là do xung đột plugin.",
                paragraph4: "Hãy cân nhắc việc vô hiệu hóa một số plugin để khắc phục sự cố.",
                paragraph5: "Danh sách plugin của bạn sẽ được gửi dưới dạng tệp văn bản.",
            }
        },
        accountPanelServerProfile: {
            name: "Hồ sơ máy chủ AccountPanel",
            description: "Nhấp chuột trái vào bảng tài khoản của bạn và nhấp chuột phải để xem hồ sơ máy chủ của bạn",
            option: {
                prioritizeServerProfile: {
                    label: "Ưu tiên hồ sơ máy chủ",
                    description: "Ưu tiên hồ sơ máy chủ khi bạn nhấp chuột trái vào bảng tài khoản của mình"
                }
            },
            context: {
                account: "Hiển thị hồ sơ tài khoản",
                server: "Hiển thị hồ sơ máy chủ",
                prioritize: "Ưu tiên hồ sơ máy chủ"
            }
        },
        altKrispSwitch: {
            name: "AltKrispChuyển đổi",
            description: "Làm cho Cửa sổ bật lên khử tiếng ồn chuyển đổi giữa Không có và Krisp thay vì Krisp và Tiêu chuẩn."
        },
        alwaysAnimate: {
            name: "Luôn luôn hoạt hình",
            description: "Nó hoạt hình bất cứ thứ gì có thể hoạt hình.",
            option: {
                icons: {
                    label: "biểu tượng",
                    description: "Làm sinh động các biểu tượng máy chủ, hình đại diện, đồ trang trí và nhiều thứ khác bất cứ lúc nào."
                },
                statusEmojis: {
                    label: "Biểu tượng cảm xúc trạng thái",
                    description: "Luôn làm sống động các biểu tượng cảm xúc trạng thái."
                },
                serverBanners: {
                    label: "Biểu ngữ máy chủ",
                    description: "Luôn làm động các biểu ngữ máy chủ."
                },
                nameplates: {
                    label: "Bảng tên",
                    description: "Luôn làm sống động các bảng tên."
                },
                roleGradients: {
                    label: "Chuyển đổi vai trò",
                    description: "Luôn tạo hiệu ứng chuyển tiếp màu của vai trò."
                }
            }
        },
        alwaysExpandProfiles: {
            name: "luônMở rộngHồ sơ",
            description: "Luôn mở rộng hồ sơ người dùng"
        },
        alwaysExpandRoles: {
            name: "LuônMở rộngVai trò",
            description: "Luôn mở rộng danh sách vai trò trong cửa sổ bật lên hồ sơ",
            option: {
                hideArrow: {
                    label: "Ẩn mũi tên",
                    description: "Ẩn mũi tên"
                }
            }
        },
        animalese: {
            name: "Động vật",
            description: "Phát âm thanh động vật cho mỗi tin nhắn được gửi (họ làm rất nhiều)",
            option: {
                volume: {
                    label: "Mức âm thanh",
                    description: "Âm lượng giọng nói của động vật"
                },
                speed: {
                    label: "Tốc độ",
                    description: "Tốc độ giọng nói của động vật"
                },
                pitch: {
                    label: "Tôn",
                    description: "nhân giai điệu"
                },
                messageLengthLimit: {
                    label: "Giới hạn độ dài tin nhắn",
                    description: "Độ dài tin nhắn tối đa để xử lý"
                },
                processOwnMessages: {
                    label: "Xử lý tin nhắn của riêng bạn",
                    description: "Cho phép nói tin nhắn của riêng bạn quá"
                },
                soundQuality: {
                    label: "Chất lượng âm thanh",
                    description: "Chất lượng âm thanh sử dụng",
                    high: "Cao",
                    med: "Trung bình",
                    low: "Thấp",
                    lowest: "Thấp nhất"
                }
            }
        },
        alwaysTrust: {
            name: "Luôn tin tưởng",
            description: "Loại bỏ miền độc hại và cửa sổ bật lên tệp đáng ngờ",
            option: {
                domain: {
                    label: "tên miền",
                    description: "Loại bỏ cửa sổ bật lên 'tên miền độc hại'"
                },
                file: {
                    label: "Tài liệu",
                    description: "Loại bỏ cửa sổ bật lên tải xuống 'có thể nguy hiểm'"
                },
                noDeleteSafety: {
                    label: "Không Xóa Bảo mật",
                    description: "Loại bỏ nhu cầu nhập tên máy chủ khi xóa máy chủ"
                },
                confirmModal: {
                    label: "Cửa sổ bật lên xác nhận",
                    description: "'Bạn có chắc chắn muốn xác nhận giao dịch này không?' xóa cửa sổ bật lên"
                }
            },
            alert: {
                title: "Xóa máy chủ?",
                body: "Quá trình này là vĩnh viễn, hãy để chúng tôi nêu rõ nếu nó không rõ ràng!",
                confirm: "Sil",
                cancel: "Hủy bỏ"
            }
        },
        anonymiseFileNames: {
            name: "Ẩn danhTên tệp",
            description: "Ẩn danh tên tập tin được tải lên.",
            option: {
                anonymiseByDefault: {
                    label: "Ẩn danh theo mặc định",
                    description: "Ẩn danh tên tập tin theo mặc định. Bạn có thể tắt nó trong cửa sổ bật lên tải lên tệp nếu muốn."
                },
                spoilerMessages: {
                    label: "Tin nhắn tiết lộ",
                    description: "Ẩn danh tên của các tập tin được đánh dấu là tiết lộ thông tin."
                },
                method: {
                    label: "Phương pháp",
                    description: "Phương pháp ẩn danh",
                    random: "Nhân vật ngẫu nhiên",
                    consistent: "Nhất quán",
                    timestamp: "Dấu thời gian"
                },
                randomisedLength: {
                    label: "Độ dài ngẫu nhiên",
                    description: "Độ dài ký tự ngẫu nhiên"
                },
                consistent: {
                    label: "Ẩn danh nhất quán",
                    description: "Khóa bí mật để ẩn danh nhất quán"
                }
            },
            using: {
                anonymous: "Tên tệp ẩn danh được sử dụng",
                spoiler: "Tên tập tin bình thường được sử dụng"
            },
            spoiler: {
                description: "Bật hoặc tắt spoiler cho các tập tin của bạn",
                toggle: "Bật hoặc tắt spoiler cho các tập tin của bạn (bật mặc định)",
                enabled: "Đã kích hoạt spoiler!",
                disabled: "spoilers bị vô hiệu hóa!"
            }
        },
        appleMusic: {
            name: "Sự hiện diện phong phú của Apple Music",
            description: "Apple Music hiển thị trạng thái nghe dưới dạng Discord Rich Presence",
            about: "Đối với các chuỗi định dạng sự kiện có thể tùy chỉnh, bạn có thể sử dụng một số chuỗi tùy chỉnh để thêm dữ liệu theo dõi vào các sự kiện! {{name}} được thay thế bằng tên bài hát, {{artist}} bằng (các) tên nghệ sĩ và {{album}} bằng tên album.",
            button: {
                listen: "Apple Music't Dinle",
                songLink: "Xem trên SongLink"
            },
            option: {
                activityType: {
                    label: "Loại hoạt động",
                    description: "Loại hoạt động nào sẽ được hiển thị",
                    listening: "lắng nghe",
                    playing: "đang chơi"
                },
                statusDisplayType: {
                    label: "Loại hiển thị trạng thái",
                    description: "Hiển thị tên bài hát/nghệ sĩ trong danh sách thành viên",
                    off: "Không hiển thị (hiển thị thông báo nghe chung)",
                    artist: "Hiển thị tên nghệ sĩ",
                    track: "Hiển thị tên bản nhạc"
                },
                refreshInterval: {
                    label: "Khoảng thời gian làm mới",
                    description: "Khoảng thời gian làm mới sự kiện (giây)"
                },
                enableTimestamps: {
                    label: "Bật dấu thời gian",
                    description: "Có bật dấu thời gian hay không"
                },
                enableButtons: {
                    label: "Bật nút",
                    description: "Có bật nút hay không"
                },
                nameString: {
                    label: "Chuỗi tên",
                    description: "Chuỗi định dạng tên sự kiện"
                },
                detailsString: {
                    label: "Chuỗi chi tiết",
                    description: "Chuỗi định dạng chi tiết sự kiện"
                },
                stateString: {
                    label: "Chuỗi trạng thái",
                    description: "Chuỗi định dạng trạng thái sự kiện"
                },
                largeImageType: {
                    label: "Loại hình ảnh lớn",
                    description: "Nội dung sự kiện loại hình ảnh lớn",
                    album: "ảnh bìa album",
                    artist: "nghệ sĩ vẽ tranh",
                    disabled: "tàn tật"
                },
                largeTextString: {
                    label: "Chuỗi văn bản lớn",
                    description: "Thực thể sự kiện chuỗi định dạng văn bản lớn"
                },
                smallImageType: {
                    label: "Loại hình thu nhỏ",
                    description: "Loại hình thu nhỏ nội dung sự kiện",
                    album: "Logo của Apple Music",
                    artist: "nghệ sĩ vẽ tranh",
                    disabled: "tàn tật"
                },
                smallTextString: {
                    label: "Chuỗi văn bản nhỏ",
                    description: "Thực thể sự kiện chuỗi định dạng văn bản nhỏ"
                }
            }
        },
        arRpc: {
            name: "WebRichPresence (arRPC)",
            description: "Plugin máy khách arRPC để kích hoạt RPC trên Discord Web (thử nghiệm)",
            use: {
                title: "Cách sử dụng arRPC",
                enable: "{{link}} để chạy máy chủ và sau đó kích hoạt plugin.",
                link: "Làm theo hướng dẫn trong kho GitHub"
            },
            toast: {
                connected: "Đã kết nối với arRPC",
                failed: "Không thể kết nối với arRPC, nó có hoạt động không?",
                retry: "Thử lại"
            }
        },
        atSomeone: {
            name: "tại ai đó",
            description: "Cho phép bạn gắn thẻ một người ngẫu nhiên với @someone"
        },
        autoDNDWhilePlaying: {
            name: "AutoDndTrong KhiChơi",
            description: "Tự động cập nhật trạng thái trực tuyến (online, không hoạt động, không làm phiền) khi game khởi chạy",
            option: {
                statusToSet: {
                    label: "Trạng thái cần đặt",
                    description: "Trạng thái được đặt khi trò chơi bắt đầu",
                    online: "trực tuyến",
                    dnd: "Đừng làm phiền",
                    idle: "nhàn rỗi",
                    invisible: "Vô hình"
                },
                excludeInvisible: {
                    label: "Loại trừ ẩn",
                    description: "Ngăn thay đổi trạng thái tự động khi trạng thái của bạn được đặt thành ẩn"
                }
            }
        },
        autoZipper: {
            name: "AutoZipper",
            description: "Tự động nén các loại tệp và thư mục được chỉ định trước khi tải chúng lên Discord",
            option: {
                extensions: {
                    label: "Tiện ích mở rộng",
                    description: "Danh sách các phần mở rộng tệp được phân tách bằng dấu phẩy sẽ được nén tự động (ví dụ: .psd,.blend,.exe,.dmg)"
                }
            }
        },
        bannersEverywhere: {
            name: "Biểu ngữ ở mọi nơi",
            description: "Hiển thị banner trong danh sách thành viên",
            option: {
                animate: {
                    label: "Hoạt hình",
                    description: "Làm banner hoạt hình"
                },
                preferNameplate: {
                    label: "Chọn bảng tên",
                    description: "Chọn bảng tên thay vì banner"
                }
            }
        },
        betterActivities: {
            name: "Hoạt động tốt hơn",
            description: "Hiển thị biểu tượng hoạt động trong danh sách thành viên và cho phép hiển thị tất cả các sự kiện",
            option: {
                memberList: {
                    label: "Danh sách thành viên",
                    description: "Hiển thị biểu tượng hoạt động trong danh sách thành viên"
                },
                iconSize: {
                    label: "Kích thước biểu tượng",
                    description: "Kích thước của biểu tượng sự kiện"
                },
                specialFirst: {
                    label: "Ưu đãi đầu tiên",
                    description: "Hiển thị các sự kiện đặc biệt trước tiên (Hiện tại là Spotify và Twitch)"
                },
                renderGifs: {
                    label: "GIF'yere Make it",
                    description: "Cho phép hiển thị ảnh GIF"
                },
                removeGameActivityStatus: {
                    label: "Xóa trạng thái trò chơi",
                    description: "Xóa biểu tượng và trạng thái trò chơi"
                },
                userPopout: {
                    label: "Cửa sổ bật lên của người dùng",
                    description: "Hiển thị tất cả các hoạt động trong cửa sổ bật lên/thanh bên hồ sơ"
                },
                hideTooltip: {
                    label: "Ẩn mẹo công cụ",
                    description: "Ẩn các hoạt động ở nhiều nơi khác nhau"
                },
                allActivitiesStyle: {
                    label: "Tất cả sự kiện",
                    description: "Hiển thị tất cả kiểu sự kiện",
                    list: "Danh sách",
                    carousel: "thanh trượt",
                    left: "Sol",
                    right: "Phải"
                }
            }
        },
        betterAudioPlayer: {
            name: "BetterAudioPlayer",
            description: "Thêm máy quang phổ và máy hiển thị dao động vào trình phát tệp đính kèm âm thanh",
            option: {
                oscilloscope: {
                    label: "Máy hiện sóng",
                    description: "Bật trình hiển thị phạm vi"
                },
                spectrograph: {
                    label: "máy quang phổ",
                    description: "Bật trình hiển thị quang phổ"
                },
                oscilloscopeSolidColor: {
                    label: "Máy hiện sóng màu đồng nhất",
                    description: "Sử dụng màu đồng nhất thay vì độ dốc cho phạm vi"
                },
                oscilloscopeColor: {
                    label: "Máy hiện sóng Rengi",
                    description: "Màu của máy hiện sóng khi bật màu đồng nhất"
                },
                spectrographSolidColor: {
                    label: "Máy quang phổ màu rắn",
                    description: "Sử dụng màu đồng nhất thay vì độ dốc cho máy quang phổ"
                },
                spectrographColor: {
                    label: "Màu quang phổ",
                    description: "Màu của máy quang phổ khi bật màu đồng nhất"
                },
                forceMoveBelow: {
                    label: "Buộc di chuyển xuống dưới cùng",
                    description: "Buộc di chuyển trình hiển thị bên dưới điều khiển âm lượng"
                }
            },
            toast: {
                invalidColorFormat: "Định dạng màu không hợp lệ cho {{settingKey}}, hãy đảm bảo nó ở định dạng 'R, G, B' hoặc '#RRGGBB'"
            }
        },
        betterBanReasons: {
            name: "Tốt hơnCấmLý do",
            description: "Tạo lý do tùy chỉnh để sử dụng trong cửa sổ cấm Discord và/hoặc hiển thị kiểu nhập văn bản thay vì tùy chọn theo mặc định.",
            option: {
                reasons: {
                    label: "lý do",
                    description: "lý do đặc biệt của bạn"
                },
                isTextInputDefault: {
                    label: "Nhập văn bản mặc định",
                    description: "Theo mặc định, nó hiển thị kiểu nhập văn bản thay vì menu lựa chọn. (Tương đương với việc nhấn vào More)"
                }
            },
            title: "lý do",
            placeholder: "Từ đâu",
            add: "Thêm một lý do khác"
        },
        betterBlockedUsers: {
            name: "Người dùng bị chặn tốt hơn",
            description: "Nó cho phép bạn tìm kiếm danh sách người dùng bị chặn và đặt tên có thể chọn được trong cài đặt.",
            placeholder: "Tìm kiếm người dùng..."
        },
        betterCommands: {
            name: "Lệnh tốt hơn",
            description: "Nó tăng cường hệ thống chỉ huy với nhiều cải tiến khác nhau.",
            option: {
                autoFillArguments: {
                    label: "Tự động điền đối số",
                    description: "Tự động điền lệnh với tất cả các đối số, không chỉ các đối số được yêu cầu"
                },
                allowNewlinesInCommands: {
                    label: "Cho phép dòng mới trong lệnh",
                    description: "Cho phép dòng mới trong mục lệnh (CTRL + Shift + Enter)"
                }
            },
            command: {
                refresh: {
                    description: "Discord làm mới các lệnh ứng dụng nguyên bản",
                    user: "người dùng cụ thể cố gắng gia hạn",
                    refreshing: "Các lệnh ứng dụng đang được đổi mới...",
                    refreshed: "Lệnh được làm mới thành công!",
                    failed: "Lệnh làm mới không thành công. Kiểm tra bảng điều khiển để biết chi tiết."
                }
            }
        },
        betterFolders: {
            name: "Thư mục tốt hơn",
            description: "Hiển thị các thư mục máy chủ trong thanh bên tùy chỉnh và thêm các cải tiến liên quan đến thư mục",
            option: {
                sidebar: {
                    label: "Thanh bên",
                    description: "Hiển thị máy chủ trong thư mục trong thanh bên tùy chỉnh"
                },
                sidebarAnim: {
                    label: "Hoạt ảnh thanh bên",
                    description: "Sử dụng hình ảnh động khi mở thanh bên thư mục"
                },
                closeAllFolders: {
                    label: "Đóng tất cả thư mục",
                    description: "Đóng tất cả các thư mục khi chọn máy chủ không có trong thư mục"
                },
                closeAllHomeButton: {
                    label: "Đóng tất cả trên nút Home",
                    description: "Đóng tất cả các thư mục khi nhấp vào nút home"
                },
                closeOthers: {
                    label: "Đóng phần khác",
                    description: "Đóng các thư mục khác khi một thư mục được mở"
                },
                closeServerFolder: {
                    label: "Đóng thư mục máy chủ",
                    description: "Đóng thư mục khi máy chủ trong thư mục được chọn"
                },
                forceOpen: {
                    label: "Buộc mở",
                    description: "Buộc mở một thư mục khi chuyển sang máy chủ của thư mục"
                },
                keepIcons: {
                    label: "Bảo vệ biểu tượng",
                    description: "Tiếp tục hiển thị các biểu tượng máy chủ trong thư mục thanh máy chủ chính khi thư mục được mở trong thanh bên BetterFolders"
                },
                showFolderIcon: {
                    label: "Hiển thị biểu tượng thư mục",
                    description: "Hiển thị biểu tượng thư mục phía trên máy chủ thư mục trong thanh bên BetterFolders",
                    never: "Không bao giờ",
                    always: "Luôn luôn",
                    moreThanOne: "Khi nhiều thư mục được mở rộng"
                }
            }
        },
        betterGifAltText: {
            name: "Tốt hơnGifAltText",
            description: "Thay đổi văn bản thay thế GIF từ chỉ 'GIF' để bao gồm thẻ/tên tệp gif"
        },
        betterGifPicker: {
            name: "Tốt hơnGifPicker",
            description: "Làm cho bộ chọn GIF mở danh mục yêu thích theo mặc định",
            option: {
                keepOpen: {
                    label: "Giữ bộ chọn mở",
                    description: "Cho phép bộ chọn GIF vẫn mở sau khi chọn GIF"
                }
            }
        },
        betterInvites: {
            name: "Tốt hơnMời",
            description: "Xem ngày hết hạn của lời mời, xem hồ sơ của người mời và xem trước máy chủ trước khi tham gia (bằng cách nhấp vào tên)",
            render: {
                tip: "Lời mời này sẽ hết hạn sau {{time}}",
                header: "{{name}} đã mời bạn tham gia {{server}}",
                never: "không bao giờ"
            }
        },
        betterNotesBox: {
            name: "Tốt hơnGhi chúHộp",
            description: "Ẩn ghi chú hoặc tắt kiểm tra chính tả (Định cấu hình trong Cài đặt!!)",
            option: {
                hide: {
                    label: "Ẩn ghi chú",
                    description: "Ẩn hộp ghi chú trong cửa sổ bật lên của người dùng"
                },
                noSpellCheck: {
                    label: "Tắt kiểm tra chính tả",
                    description: "Vô hiệu hóa kiểm tra chính tả trong ghi chú"
                }
            }
        },
        betterPlusReacts: {
            name: "BetterPlusReacts",
            description: "Số dấu cộng trước :emoji: cho biết tin nhắn sẽ thêm biểu tượng cảm xúc vào"
        },
        betterRoleContext: {
            name: "Bối cảnh tốt hơnVai trò",
            description: "Thêm tùy chọn sao chép màu vai trò/chỉnh sửa vai trò/hiển thị biểu tượng vai trò khi nhấp chuột phải vào vai trò trong hồ sơ người dùng",
            option: {
                roleIconFileFormat: {
                    label: "Định dạng tệp biểu tượng vai trò",
                    description: "Định dạng tệp để sử dụng khi hiển thị biểu tượng vai trò"
                }
            },
            context: {
                copyColor: "Sao chép màu vai trò",
                editRole: "Chỉnh sửa vai trò",
                viewIcon: "Xem biểu tượng vai trò"
            }
        },
        betterRoleDot: {
            name: "Tốt hơnVai tròDot",
            description: "RoleDot (cài đặt khả năng truy cập) sao chép màu vai trò khi được nhấp vào. Nó cũng cho phép sử dụng đồng thời RoleDot và tên màu.",
            option: {
                bothStyles: {
                    label: "Đây İki Stil",
                    description: "Hiển thị cả điểm vai trò và tên màu"
                },
                copyRoleColorInProfilePopout: {
                    label: "Sao chép màu vai trò trong cửa sổ bật lên hồ sơ",
                    description: "Cho phép sao chép màu vai trò bằng cách nhấp vào dấu chấm vai trò trong cửa sổ bật lên hồ sơ"
                }
            }
        },
        betterSessions: {
            name: "Phiên tốt hơn",
            description: "Cải thiện menu Phiên (thiết bị). Nó cho phép bạn xem dấu thời gian chính xác, đặt cho mỗi phiên một tên duy nhất và nhận thông báo về các phiên mới.",
            new: "MỚI",
            newSessions: "Phiên mới:",
            rename: "Đổi tên",
            newDevice: "Tên thiết bị mới",
            resetName: "Đặt lại tên",
            save: "Cứu",
            cancel: "Hủy bỏ",
            option: {
                backgroundCheck: {
                    label: "Kiểm tra lý lịch",
                    description: "Kiểm tra các phiên mới ở chế độ nền và hiển thị thông báo khi được phát hiện"
                },
                checkInterval: {
                    label: "Phạm vi kiểm soát",
                    description: "Tần suất kiểm tra các phiên mới ở chế độ nền (nếu được bật), tính bằng phút"
                }
            }
        },
        betterSettings: {
            name: "Cài đặt tốt hơn",
            description: "Cải thiện trải nghiệm mở menu cài đặt",
            option: {
                disableFade: {
                    label: "Tắt hiệu ứng chuyển tiếp",
                    description: "Tắt hoạt ảnh xen kẽ"
                },
                organizeMenu: {
                    label: "Chỉnh sửa thực đơn",
                    description: "Cài đặt chia menu biểu tượng bánh răng thành các danh mục"
                },
                eagerLoad: {
                    label: "Tải nhanh",
                    description: "Loại bỏ độ trễ tải khi menu được mở lần đầu tiên"
                }
            },
            alert: {
                title: "Yêu cầu khởi động lại",
                restart: "Bạn đã thay đổi cài đặt yêu cầu khởi động lại.",
                confirm: "Khởi động lại ngay bây giờ",
                cancel: "Sau đó!"
            }
        },
        betterUploadButton: {
            name: "Nút Tải Lên Tốt Hơn",
            description: "Cài đặt bằng một cú nhấp chuột, mở menu bằng nhấp chuột phải"
        },
        biggerStreamPreview: {
            name: "Xem trước luồng lớn hơn",
            description: "Plugin này cho phép bạn phóng to các bản xem trước phát sóng",
            context: {
                viewPreview: "Xem bản xem trước bản phát hành"
            }
        },
        blockKeywords: {
            name: "Chặn từ khóa",
            description: "Chặn các tin nhắn chứa một số từ khóa do người dùng xác định như thể người dùng gửi đã bị chặn.",
            option: {
                blockedWords: {
                    label: "từ bị chặn",
                    description: "Danh sách các từ cần chặn được phân tách bằng dấu phẩy"
                },
                useRegex: {
                    label: "Regex Kullan",
                    description: "Sử dụng từng giá trị làm biểu thức chính quy khi kiểm tra nội dung thư (nâng cao)"
                },
                caseSensitive: {
                    label: "Phân biệt chữ hoa chữ thường",
                    description: "Sử dụng tìm kiếm phân biệt chữ hoa chữ thường?"
                },
                ignoreBlockedMessages: {
                    label: "Bỏ qua tin nhắn bị chặn",
                    description: "Hoàn toàn bỏ qua thanh tin nhắn mới (tin nhắn gần đây)"
                }
            }
        },
        blockKrisp: {
            name: "khốiKrisp",
            description: "Ngăn chặn cài đặt Krisp"
        },
        blurNSFW: {
            name: "BlurNSFW",
            description: "Làm mờ các tệp đính kèm trong các kênh NSFW cho đến khi được di chuột qua",
            option: {
                blurAmount: {
                    label: "Lượng mờ",
                    description: "Mức độ mờ (tính bằng pixel)"
                },
                blurAllChannels: {
                    label: "Làm mờ tất cả các kênh",
                    description: "Làm mờ tệp đính kèm trên tất cả các kênh (không chỉ NSFW)"
                }
            }
        },
        bypassPinPrompt: {
            name: "Bỏ QuaPinNhắc",
            description: "Bỏ qua lời nhắc ghim khi sử dụng chức năng ghim"
        },
        bypassStatus: {
            name: "Bỏ quaTrạng thái",
            description: "Vẫn nhận được thông báo từ một số nguồn nhất định khi ở chế độ Không làm phiền. Bạn có thể nhấp chuột phải vào người dùng/kênh/máy chủ để bỏ qua chế độ Không làm phiền.",
            context: {
                remove: "Xóa bỏ qua trạng thái",
                add: "Thêm trạng thái Bỏ qua"
            },
            option: {
                guilds: {
                    label: "Máy chủ",
                    description: "Máy chủ được phép nhảy (nhận thông báo khi được ping ở bất kỳ đâu trên máy chủ)",
                    placeholder: "Phân cách bằng dấu phẩy"
                },
                channels: {
                    label: "Kênh",
                    description: "Các kênh được phép bỏ qua (nhận thông báo khi được ping trên kênh đó)",
                    placeholder: "Phân cách bằng dấu phẩy"
                },
                users: {
                    label: "Người dùng",
                    description: "Người dùng được phép bỏ qua (nhận thông báo cho tất cả tin nhắn được gửi trong DM)",
                    placeholder: "Phân cách bằng dấu phẩy"
                },
                allowOutsideOfDms: {
                    label: "Cho phép DM bên ngoài",
                    description: "Cho phép người dùng được chọn bỏ qua các trạng thái không phải DM (hoạt động giống như bỏ qua kênh/máy chủ nhưng áp dụng cho tất cả tin nhắn do người dùng đã chọn gửi)"
                },
                notificationSound: {
                    label: "Âm thanh thông báo",
                    description: "Xác định xem có phát âm thanh thông báo hay không"
                },
                respectSilentPings: {
                    label: "Tôn trọng Ping im lặng",
                    description: "Tôn trọng ping im lặng (@silent/ngăn chặn thông báo)"
                },
                statusToUse: {
                    label: "Trường hợp sử dụng",
                    description: "Trạng thái sử dụng cho danh sách trắng",
                    online: "trực tuyến",
                    idle: "nhàn rỗi",
                    dnd: "Đừng làm phiền",
                    invisible: "Vô hình"
                }
            }
        },
        cakeDay: {
            name: "BánhNgày",
            description: "Theo dõi và hiển thị ngày sinh nhật của người dùng bằng biểu tượng chiếc bánh",
            context: {
                label: "Sinh nhật",
                setBirthday: "Đặt ngày sinh nhật",
                clearBirthday: "Xóa ngày sinh",
                current: "Hiện hành:"
            },
            option: {
                chat: {
                    label: "Trò chuyện",
                    description: "Hiển thị biểu tượng hình tròn bên cạnh tên người dùng trong cuộc trò chuyện"
                },
                memberList: {
                    label: "Danh sách thành viên",
                    description: "Hiển thị biểu tượng bánh trong danh sách thành viên"
                },
                profileBadge: {
                    label: "Huy hiệu hồ sơ",
                    description: "Hiển thị huy hiệu bánh trên hồ sơ người dùng"
                },
                notificationSound: {
                    label: "Âm thanh thông báo",
                    description: "Phát âm thanh khi gửi thông báo sinh nhật"
                },
                userList: {
                    label: "Sinh nhật đã lưu",
                    description: "Quản lý ngày sinh nhật đã lưu"
                }
            },
            locations: {
                chat: {
                    label: "Trò chuyện",
                    description: "Bên cạnh tên người dùng trong cuộc trò chuyện"
                },
                memberList: {
                    label: "Danh sách thành viên",
                    description: "Trong danh sách thành viên"
                }
            },
            toast: {
                success: "Đặt sinh nhật thành công!",
                invalid: "Định dạng sinh nhật không hợp lệ! Chỉ DD/MM được chấp nhận.",
                cleared: "Đã xóa ngày sinh thành công!"
            },
            notification: {
                title: "🎂 Hôm nay là sinh nhật!",
                body: "Hôm nay là sinh nhật của {{username}}!"
            },
            modal: {
                title: "Đặt ngày sinh cho {{username}}",
                description: "Nhập ngày sinh của bạn ở định dạng DD/MM (ví dụ: 25/12)",
                placeholder: "đại bàng 25/12",
                current: "Ngày sinh hiện tại:",
                set: "Đặt ngày sinh nhật",
                cancel: "Hủy bỏ",
                birthday: "Hôm nay là sinh nhật của tôi! 🎂",
                saved: "Sinh nhật đã lưu",
                savedDesc: "Chưa có ngày sinh nhật nào được ghi lại. Nhấp chuột phải vào người dùng để thêm ngày sinh nhật!",
                today: "Hôm nay",
                remove: "Di dời",
                loading: "Đang tải...",
                save: "Cứu",
                edit: "Biên tập"
            }
        },
        callTimer: {
            name: "Cuộc gọi hẹn giờ",
            description: "Hiển thị bộ hẹn giờ cuộc gọi trên tất cả các cuộc gọi thoại",
            option: {
                format: {
                    label: "Định dạng",
                    description: "Định dạng nhỏ gọn hoặc có thể đọc được",
                    human: "30g 23s 00d 42s"
                },
                allCallTimers: {
                    label: "Tất cả bộ hẹn giờ cuộc gọi",
                    description: "Hiển thị bộ hẹn giờ cuộc gọi cho tất cả người dùng trên máy chủ"
                },
                showWithoutHover: {
                    label: "Hiển thị mà không di chuột",
                    description: "Luôn hiển thị bộ đếm thời gian mà không cần di chuột"
                },
                showRoleColor: {
                    label: "Hiển thị màu vai trò",
                    description: "Hiển thị màu vai trò của người dùng (nếu plugin ShowRoleColor được bật)"
                },
                trackSelf: {
                    label: "Theo dõi chính bạn",
                    description: "Hiển thị bộ đếm thời gian của riêng bạn"
                },
                showSeconds: {
                    label: "Hiển thị giây",
                    description: "Cũng hiển thị giây trong bộ đếm thời gian"
                },
                watchLargeGuilds: {
                    label: "Xem các máy chủ lớn",
                    description: "Theo dõi người dùng trên các máy chủ lớn. Nếu bạn đang sử dụng các máy chủ lớn có nhiều người dùng giọng nói đang hoạt động thì điều này có thể gây ra hiện tượng lag. Đã thử nghiệm với tối đa 2000 người dùng giọng nói đang hoạt động và không có sự cố nào xảy ra."
                },
                fixUI: {
                    label: "Sửa lỗi giao diện người dùng",
                    description: "Trong một số trường hợp, bộ hẹn giờ có thể làm hỏng giao diện người dùng. Bạn có thể khắc phục điều này bằng cách kích hoạt tùy chọn này."
                }
            }
        },
        channelBadges: {
            name: "Huy hiệu kênh",
            description: "Thêm huy hiệu vào các kênh dựa trên loại của chúng",
            badge: {
                private: "Kênh này đã bị khóa.",
                nsfw: "Kênh này được đánh dấu NSFW.",
                rules: "Kênh này là kênh quy tắc máy chủ."
            },
            option: {
                oneBadgePerChannel: {
                    label: "Một huy hiệu cho mỗi kênh",
                    description: "Chỉ hiển thị một huy hiệu cho mỗi kênh"
                },
                showTextBadge: {
                    label: "Hiển thị huy hiệu văn bản",
                    description: "Hiển thị huy hiệu văn bản"
                },
                showVoiceBadge: {
                    label: "Hiển thị huy hiệu giọng nói",
                    description: "Hiển thị huy hiệu âm thanh"
                },
                showCategoryBadge: {
                    label: "Hiển thị Huy hiệu Danh mục",
                    description: "Hiển thị huy hiệu danh mục"
                },
                showDirectoryBadge: {
                    label: "Hiển thị huy hiệu chỉ mục",
                    description: "Hiển thị huy hiệu chỉ mục"
                },
                showAnnouncementThreadBadge: {
                    label: "Hiển thị huy hiệu chủ đề thông báo",
                    description: "Hiển thị huy hiệu chủ đề thông báo"
                },
                showPublicThreadBadge: {
                    label: "Hiển thị huy hiệu chủ đề chung",
                    description: "Hiển thị huy hiệu chủ đề công khai"
                },
                showPrivateThreadBadge: {
                    label: "Hiển thị huy hiệu chủ đề đặc biệt",
                    description: "Hiển thị huy hiệu chủ đề tùy chỉnh"
                },
                showStageBadge: {
                    label: "Hiển thị huy hiệu sân khấu",
                    description: "Hiển thị huy hiệu sân khấu"
                },
                showAnnouncementBadge: {
                    label: "Hiển thị huy hiệu thông báo",
                    description: "Hiển thị huy hiệu thông báo"
                },
                showForumBadge: {
                    label: "Hiển thị huy hiệu diễn đàn",
                    description: "Hiển thị huy hiệu diễn đàn"
                },
                showMediaBadge: {
                    label: "Hiển thị huy hiệu truyền thông",
                    description: "Hiển thị huy hiệu truyền thông"
                },
                showNSFWBadge: {
                    label: "Hiển thị Huy hiệu NSFW của bạn",
                    description: "Hiển thị huy hiệu NSFW"
                },
                showLockedBadge: {
                    label: "Hiển thị huy hiệu bị khóa",
                    description: "Hiển thị huy hiệu đã khóa của bạn"
                },
                showRulesBadge: {
                    label: "Hiển thị huy hiệu quy tắc",
                    description: "Hiển thị huy hiệu quy tắc"
                },
                showUnknownBadge: {
                    label: "Hiển thị huy hiệu không xác định",
                    description: "Hiển thị huy hiệu không xác định"
                },
                textBadgeLabel: {
                    label: "Nhãn huy hiệu văn bản",
                    description: "nhãn huy hiệu văn bản",
                    default: "Chữ"
                },
                voiceBadgeLabel: {
                    label: "Nhãn huy hiệu âm thanh",
                    description: "nhãn huy hiệu âm thanh",
                    default: "Ses"
                },
                categoryBadgeLabel: {
                    label: "Nhãn huy hiệu danh mục",
                    description: "Nhãn huy hiệu danh mục",
                    default: "Loại"
                },
                announcementBadgeLabel: {
                    label: "Nhãn huy hiệu thông báo",
                    description: "Nhãn huy hiệu thông báo",
                    default: "Đồ may vá"
                },
                announcementThreadBadgeLabel: {
                    label: "Nhãn huy hiệu chủ đề thông báo",
                    description: "Nhãn huy hiệu chủ đề thông báo",
                    default: "chủ đề tin tức"
                },
                publicThreadBadgeLabel: {
                    label: "Nhãn huy hiệu chủ đề chung",
                    description: "Nhãn huy hiệu chủ đề chung",
                    default: "Chủ thể"
                },
                privateThreadBadgeLabel: {
                    label: "Nhãn huy hiệu chủ đề đặc biệt",
                    description: "Nhãn huy hiệu chủ đề tùy chỉnh",
                    default: "Chủ đề đặc biệt"
                },
                stageBadgeLabel: {
                    label: "Nhãn huy hiệu sân khấu",
                    description: "Nhãn huy hiệu sân khấu",
                    default: "Bối cảnh"
                },
                directoryBadgeLabel: {
                    label: "Nhãn huy hiệu chỉ mục",
                    description: "Nhãn huy hiệu chỉ mục",
                    default: "chỉ mục"
                },
                forumBadgeLabel: {
                    label: "Nhãn huy hiệu diễn đàn",
                    description: "Nhãn huy hiệu diễn đàn",
                    default: "diễn đàn"
                },
                mediaBadgeLabel: {
                    label: "Nhãn huy hiệu truyền thông",
                    description: "Nhãn huy hiệu truyền thông",
                    default: "Phương tiện truyền thông"
                },
                nsfwBadgeLabel: {
                    label: "Nhãn huy hiệu NSFW",
                    description: "Nhãn huy hiệu NSFW",
                    default: "NSFW"
                },
                lockedBadgeLabel: {
                    label: "Khóa thẻ huy hiệu",
                    description: "thẻ huy hiệu khóa",
                    default: "Đã khóa"
                },
                rulesBadgeLabel: {
                    label: "Nhãn huy hiệu quy tắc",
                    description: "Nhãn huy hiệu quy tắc",
                    default: "Quy tắc"
                },
                unknownBadgeLabel: {
                    label: "Nhãn huy hiệu không xác định",
                    description: "Nhãn huy hiệu không xác định",
                    default: "Không xác định"
                },
                textBadgeColor: {
                    label: "Màu huy hiệu văn bản",
                    description: "Màu huy hiệu văn bản"
                },
                voiceBadgeColor: {
                    label: "Màu huy hiệu âm thanh",
                    description: "Màu huy hiệu âm thanh"
                },
                categoryBadgeColor: {
                    label: "Màu huy hiệu danh mục",
                    description: "Màu huy hiệu danh mục"
                },
                announcementBadgeColor: {
                    label: "Màu huy hiệu thông báo",
                    description: "Màu huy hiệu thông báo"
                },
                announcementThreadBadgeColor: {
                    label: "Màu huy hiệu chủ đề thông báo",
                    description: "Màu huy hiệu chủ đề thông báo"
                },
                publicThreadBadgeColor: {
                    label: "Màu huy hiệu chủ đề chung",
                    description: "Màu huy hiệu chủ đề chung"
                },
                privateThreadBadgeColor: {
                    label: "Màu huy hiệu chủ đề đặc biệt",
                    description: "Màu huy hiệu chủ đề tùy chỉnh"
                },
                stageBadgeColor: {
                    label: "Màu huy hiệu sân khấu",
                    description: "Màu huy hiệu sân khấu"
                },
                directoryBadgeColor: {
                    label: "Màu huy hiệu chỉ mục",
                    description: "Màu huy hiệu chỉ mục"
                },
                forumBadgeColor: {
                    label: "Màu huy hiệu diễn đàn",
                    description: "Màu huy hiệu diễn đàn"
                },
                mediaBadgeColor: {
                    label: "Màu huy hiệu phương tiện",
                    description: "Màu huy hiệu truyền thông"
                },
                nsfwBadgeColor: {
                    label: "Màu huy hiệu NSFW",
                    description: "Màu huy hiệu NSFW"
                },
                lockedBadgeColor: {
                    label: "Màu huy hiệu bị khóa",
                    description: "Màu huy hiệu bị khóa"
                },
                rulesBadgeColor: {
                    label: "Màu huy hiệu quy tắc",
                    description: "Màu huy hiệu quy tắc"
                },
                unknownBadgeColor: {
                    label: "Màu huy hiệu không xác định",
                    description: "Màu huy hiệu không xác định"
                }
            },
            badges: {
                text: "Chữ",
                voice: "Ses",
                category: "Loại",
                announcement: "Đồ may vá",
                announcementThread: "chủ đề tin tức",
                publicThread: "Chủ thể",
                privateThread: "Chủ đề đặc biệt",
                stage: "Bối cảnh",
                directory: "chỉ mục",
                forum: "diễn đàn",
                media: "Phương tiện truyền thông",
                nsfw: "NSFW",
                locked: "Đã khóa",
                rules: "Quy tắc",
                unknown: "Không xác định"
            },
            tooltip: {
                locked: "Kênh này đã bị khóa.",
                nsfw: "Kênh này được đánh dấu NSFW."
            }
        },
        channelTabs: {
            name: "Tab kênh",
            description: "Nhóm các kênh bạn thường xuyên truy cập vào các tab giống như trong trình duyệt",
            open: "Mở trong tab mới",
            animation: {
                title: "Điều khiển hoạt ảnh",
                description: "Bật hoặc tắt hoạt ảnh cụ thể cho tab kênh. Mỗi tùy chọn có thể được bật hoặc tắt độc lập.",
                placeholder: "Chọn hoạt ảnh nào sẽ bật...",
                tabHover: "Hiệu ứng di chuột qua tab (xóa + chia tỷ lệ)",
                tabSelection: "Hoạt ảnh nâng tab đã chọn",
                tabDragDrop: "Tab Kéo & Thả (ma + sắp xếp lại)",
                tabEnterExit: "Cuộn vào/ra tab (tạo + đóng)",
                tabIconPop: "Icon Pop (tăng trưởng bầu cử)",
                closeRotation: "Nút đóng Quay lại",
                plusPulse: "Hiệu ứng xung nút cộng",
                mentionGlow: "Huy hiệu đề cập lấp lánh",
                compactExpand: "Mở rộng chế độ nhỏ gọn",
                selectedBorder: "Tab đã chọn Viền xanh",
                selectedBackground: "Màu nền của tab đã chọn",
                tabShadows: "Hiệu ứng đổ bóng tab",
                tabRepositioning: "Định vị lại tab (chuyển đổi mềm)",
                resizeHandle: "Thay đổi kích thước xử lý mờ dần",
                questActivate: "Độ dốc nhiệm vụ tích cực"
            },
            bookmark: {
                label: "Yer İmi",
                unknown: "Người dùng không xác định",
                folder: "Thư mục",
                add: "Thêm vào dấu trang",
                edit: "Chỉnh sửa dấu trang",
                delete: "Yer İmini Sil",
                remove: "Xóa khỏi Dấu trang",
                removeFolder: "Xóa dấu trang khỏi thư mục",
                loading: "Đang tải dấu trang...",
                noBookmarks: "Bạn không có bất kỳ dấu trang nào. Bạn có thể thêm một tab đang mở hoặc ẩn nó bằng cách nhấp chuột phải.",
                quests: "Nhiệm vụ",
                messageRequests: "Yêu cầu tin nhắn",
                friends: "Bạn",
                shop: "Cửa hàng",
                library: "Thư viện",
                discovery: "Khám phá",
                nitro: "Nitơ",
                icymi: "ICYMI",
                activity: "Hoạt động",
                specialPage: "Trang đặc biệt"
            },
            button: {
                save: "Cứu",
                delete: "Sil",
                cancel: "Hủy bỏ"
            },
            context: {
                label: "Menu ngữ cảnh của ChannelTabs",
                bookmark: "Menu ngữ cảnh đánh dấu trang ChannelTabs",
                tab: "Menu ngữ cảnh tab ChannelTabs",
                compact: "Nhỏ gọn",
                bookmarkBar: "Thanh dấu trang",
                openAll: "Mở tất cả trong dấu trang",
                openNew: "Mở trong tab mới",
                close: {
                    tab: "Đóng tab",
                    otherTabs: "Đóng các tab khác",
                    tabsToRight: "Đóng các tab bên phải",
                    tabsToLeft: "Đóng các tab bên trái",
                    reopen: "Mở lại tab đã đóng",
                    allTabs: "Đóng tất cả các tab"
                }
            },
            error: {
                noLogin: "Bạn chưa có tài khoản đăng nhập?"
            },
            modal: {
                add: {
                    title: "Thêm dấu trang vào thư mục",
                    select: "Chọn một thư mục",
                    create: "Tạo mới"
                },
                edit: {
                    title: "Chỉnh sửa dấu trang",
                    name: "Tên dấu trang",
                    folder: "Màu thư mục"
                },
                delete: {
                    title: "Bạn có chắc không?",
                    description: "Xóa thư mục dấu trang cũng xóa tất cả dấu trang trong đó."
                }
            },
            option: {
                onStartup: {
                    label: "Ban đầu",
                    description: "Chọn việc cần làm với các tab khi khởi động",
                    nothing: "Không làm gì cả (mở tab bạn bè)",
                    remember: "Ghi nhớ các tab từ phiên trước",
                    open: "Mở các tab cụ thể"
                },
                tabSet: {
                    label: "Bộ tab"
                },
                noPomeloNames: {
                    label: "Không Có Tên Bưởi",
                    description: "Sử dụng tên hiển thị thay vì tên người dùng cho DM"
                },
                showStatusIndicators: {
                    label: "Hiển thị chỉ báo trạng thái",
                    description: "Hiển thị chỉ báo trạng thái cho DM"
                },
                showBookmarkBar: {
                    label: "Hiển thị thanh dấu trang"
                },
                bookmarkNotificationDot: {
                    label: "Đánh dấu điểm thông báo",
                    description: "Hiển thị dấu chấm thông báo cho dấu trang"
                },
                widerTabsAndBookmarks: {
                    label: "Tab lớn và dấu trang",
                    description: "Mở rộng tab và dấu trang trên màn hình lớn hơn"
                },
                tabWidthScale: {
                    label: "Tỷ lệ chiều rộng tab",
                    description: "Tỷ lệ chiều rộng tab (phần trăm) - có thể điều chỉnh bằng cách kéo các cạnh tab"
                },
                renderAllTabs: {
                    label: "Giữ tất cả các tab trong bộ nhớ",
                    description: "Giữ tất cả các tab trong bộ nhớ để chuyển đổi nhanh hơn giữa các tab (cuộn và trạng thái được lưu vào bộ đệm)"
                },
                switchToExistingTab: {
                    label: "Chuyển sang tab hiện có",
                    description: "Nếu đã có một tab cho kênh bạn đang duyệt, hãy chuyển sang tab đó"
                },
                createNewTabIfNotExists: {
                    label: "Nếu chưa có tab thì tạo nó",
                    description: "Nếu không có tab cho kênh, hãy tạo tab mới"
                },
                enableRapidNavigation: {
                    label: "Bật điều hướng nhanh",
                    description: "Khi các thay đổi kênh được thực hiện nhanh chóng, tab hiện tại sẽ thay đổi thay vì tab mới."
                },
                rapidNavigationThreshold: {
                    label: "Ngưỡng điều hướng nhanh",
                    description: "Khoảng thời gian tính bằng mili giây. Nếu một kênh mới được mở trong khoảng thời gian này, tab hiện tại sẽ được thay đổi."
                },
                tabBarPosition: {
                    label: "Vị trí thanh tab",
                    description: "Vị trí thanh tab",
                    top: "Đứng đầu",
                    bottom: "thay thế"
                },
                enableNumberKeySwitching: {
                    label: "Chuyển đổi tab bằng phím số",
                    description: "Bật chuyển đổi tab bằng các phím 1–9"
                },
                numberKeySwitchCount: {
                    label: "Số Tab Phím Số",
                    description: "Số tab có thể truy cập bằng phím số (1–9)"
                },
                enableCloseTabShortcut: {
                    label: "Phím tắt Đóng tab",
                    description: "Bật phím tắt đóng tab"
                },
                enableNewTabShortcut: {
                    label: "Phím tắt tab mới",
                    description: "Bật phím tắt mở tab mới"
                },
                enableTabCycleShortcut: {
                    label: "Phím tắt vòng lặp tab",
                    description: "Bật phím tắt để chuyển đổi giữa các tab"
                },
                keybindsSection: {
                    label: "Phím tắt",
                    description: "Nhấp vào nút và nhấn tổ hợp phím mong muốn. Các công cụ sửa đổi như CTRL, SHIFT và ALT được hỗ trợ.",
                    title: "Phím tắt",
                    reset: "Đặt lại tất cả về mặc định",
                    closeTab: {
                        label: "Đóng tab",
                        description: "Phím tắt để đóng tab hiện tại"
                    },
                    newTab: {
                        label: "Tab mới",
                        description: "Phím tắt để mở tab mới với kênh hiện tại"
                    },
                    cycleTabsForward: {
                        label: "Vòng lặp tab chuyển tiếp",
                        description: "Phím tắt để chuyển đến tab tiếp theo (chuyển đến tab đầu tiên)"
                    },
                    cycleTabsBackward: {
                        label: "Vòng lặp trả lại",
                        description: "Phím tắt để chuyển đến tab trước (chuyển đến tab cuối cùng)"
                    }
                },
                closeTabKeybind: {
                    label: "Phím tắt Đóng tab",
                    description: "Phím tắt để đóng tab hiện tại"
                },
                newTabKeybind: {
                    label: "Phím tắt tab mới",
                    description: "Phím tắt mở tab mới"
                },
                cycleTabForwardKeybind: {
                    label: "Vòng lặp tab chuyển tiếp",
                    description: "Phím tắt để chuyển đến tab tiếp theo"
                },
                cycleTabBackwardKeybind: {
                    label: "Vòng lặp trả lại",
                    description: "Phím tắt để chuyển đến tab trước"
                },
                showTabNumbers: {
                    label: "Hiển thị số tab",
                    description: "Hiển thị huy hiệu số trên tab để hiển thị phím tắt"
                },
                tabNumberPosition: {
                    label: "Vị trí số tab",
                    description: "Vị trí của huy hiệu số trên tab",
                    left: "Bên trái (biểu tượng trước)",
                    right: "Đúng (đăng nội dung)"
                },
                animations: {
                    label: "Hoạt hình"
                },
                animationHover: {
                    label: "Hoạt ảnh di chuột",
                    description: "Bật hiệu ứng nâng và phóng to khi di chuột"
                },
                animationSelection: {
                    label: "Lựa chọn hoạt hình",
                    description: "Bật hoạt ảnh ánh sáng/khung hình tại thời điểm lựa chọn"
                },
                animationDragDrop: {
                    label: "Hoạt ảnh kéo và thả",
                    description: "Bật hiệu ứng ma khi kéo"
                },
                animationEnterExit: {
                    label: "Hoạt ảnh vào/ra",
                    description: "Cuộn hình động khi tạo/đóng tab"
                },
                animationIconPop: {
                    label: "Biểu tượng Hoạt hình Pop",
                    description: "Bật hoạt ảnh tăng trưởng biểu tượng trong khi chọn"
                },
                animationCloseRotation: {
                    label: "Trả lại nút tiêu diệt",
                    description: "Thêm hoạt ảnh xoay vào biểu tượng tắt máy"
                },
                animationPlusPulse: {
                    label: "Xung nút cộng",
                    description: "Bật hoạt ảnh xung cho nút tab mới"
                },
                animationMentionGlow: {
                    label: "đề cập đến lấp lánh",
                    description: "Bật hoạt ảnh phát sáng màu đỏ trên huy hiệu đề cập"
                },
                animationCompactExpand: {
                    label: "Hoạt ảnh mở rộng nhỏ gọn",
                    description: "Cho phép mở rộng mượt mà các tab thu gọn"
                },
                animationSelectedBorder: {
                    label: "Hoạt ảnh viền tab đã chọn",
                    description: "Bật hoạt ảnh kiểu đường viền và ánh sáng cho tab đã chọn"
                },
                animationSelectedBackground: {
                    label: "Hoạt ảnh nền của tab đã chọn",
                    description: "Cho phép thay đổi hoạt hình màu nền của tab đã chọn"
                },
                animationTabShadows: {
                    label: "Tab bóng hoạt hình",
                    description: "Bật hiệu ứng đổ bóng trên tab"
                },
                animationTabPositioning: {
                    label: "Hoạt ảnh định vị tab",
                    description: "Hoạt ảnh chuyển tiếp mượt mà khi chuyển tab"
                },
                animationResizeHandle: {
                    label: "Thay đổi kích thước hoạt ảnh",
                    description: "Bật hoạt ảnh mờ dần của bộ điều khiển định cỡ"
                },
                animationQuestsActive: {
                    label: "Hoạt hình nhiệm vụ tích cực",
                    description: "Bật hoạt ảnh chuyển màu trong tab khi tác vụ đang hoạt động"
                },
                compactAutoExpandSelected: {
                    label: "Tự động mở rộng khi được chọn",
                    description: "Tự động mở rộng các tab thu gọn khi được chọn"
                },
                compactAutoExpandOnHover: {
                    label: "Tự động mở rộng khi di chuột",
                    description: "Tự động mở rộng các tab thu gọn khi di chuột"
                },
                openInNewTabAutoSwitch: {
                    label: "Tự động chuyển đổi khi mở trong tab mới",
                    description: "Tự động chuyển sang tab mới khi mở tab"
                },
                bookmarksIndependentFromTabs: {
                    label: "Dấu trang độc lập",
                    description: "Dấu trang điều hướng độc lập mà không ảnh hưởng đến thanh tab"
                },
                showResizeHandle: {
                    label: "Hiển thị tay cầm định cỡ",
                    description: "Hiển thị tay cầm để điều chỉnh độ rộng của tab"
                },
                openNewTabsInCompactMode: {
                    label: "Mở tab mới một cách gọn gàng",
                    description: "Các tab mới mở được mở ở chế độ thu gọn theo mặc định"
                },
                newTabButtonBehavior: {
                    label: "Hành vi nút tab mới",
                    description: "Nút tab mới (+) theo sau các tab thay vì cố định ở bên phải"
                },
                oneTabPerServer: {
                    label: "Tab đơn cho mỗi máy chủ",
                    description: "Hãy để chỉ có một bước nhảy cho một máy chủ; Sử dụng cùng một tab khi mở kênh mới"
                },
                maxOpenTabs: {
                    label: "Tab mở tối đa",
                    description: "Số lượng tab tối đa có thể mở cùng lúc (0 = không giới hạn)"
                }
            },
            tabs: {
                startup: "Tab Trang chủ",
                currently: "Đặt các tab hiện đang mở"
            },
            toast: {
                notRestoring: "Các tab không khôi phục vì KeepCurrentChannel được bật",
                failed: {
                    restore: "Không thể khôi phục các tab",
                    saved: "Các tab đã lưu không tải được"
                }
            }
        },
        characterCounter: {
            name: "Nhân vậtQuầy cập",
            description: "Hiển thị bộ đếm ký tự trong hộp thông báo",
            option: {
                colorEffects: {
                    label: "Hiệu ứng màu sắc",
                    description: "Bật hoặc tắt hiệu ứng màu khi đạt đến giới hạn ký tự"
                }
            }
        },
        cleanChannelGroups: {
            name: "Nhóm kênh sạch",
            description: "Nó chỉ ẩn tất cả các kênh trong danh mục thu gọn, ngay cả khi có tin nhắn chưa đọc."
        },
        cleanChannelName: {
            name: "Tên kênh sạch",
            description: "Xóa tất cả biểu tượng cảm xúc và các chi tiết trang trí ngớ ngẩn khỏi tên kênh"
        },
        clearURLs: {
            name: "Xóa URL",
            description: "Tự động xóa các yếu tố theo dõi khỏi URL bạn gửi"
        },
        clickableRoles: {
            name: "Vai trò có thể nhấp",
            description: "Bạn có thể xem các thành viên có vai trò gì bằng cách nhấp vào vai trò trong hồ sơ người dùng và danh sách thành viên.",
            modal: {
                loading: "Các thành viên đang tải...",
                noMembers: "Không tìm thấy thành viên nào",
                unknown: "Vai trò không xác định"
            }
        },
        clientSideBlock: {
            name: "Khối phía khách hàng",
            description: "Cho phép bạn ẩn cục bộ hầu hết mọi nội dung khỏi bất kỳ người dùng nào",
            replying: "Trả lời tin nhắn bị chặn",
            option: {
                hideVc: {
                    label: "Ẩn khỏi các kênh thoại",
                    description: "Ẩn các kênh thoại chứa người dùng bị chặn"
                },
                usersToBlock: {
                    label: "Người dùng cần chặn",
                    description: "ID người dùng được phân tách bằng dấu phẩy và dấu cách"
                },
                hideBlockedUsers: {
                    label: "Ẩn người dùng bị chặn",
                    description: "Ẩn hoàn toàn người dùng bị chặn ở mọi nơi"
                },
                hideBlockedMessages: {
                    label: "Ẩn tin nhắn bị chặn",
                    description: "Ẩn hoàn toàn tin nhắn khỏi người dùng bị chặn (giống như plugin noblockedmessages cũ)"
                },
                hideEmptyRoles: {
                    label: "Ẩn vai trò trống",
                    description: "Ẩn chức danh vai trò nếu tất cả thành viên bị chặn"
                },
                blockedReplyDisplay: {
                    label: "Chế độ xem phản hồi bị chặn",
                    description: "Điều gì xuất hiện thay vì tin nhắn khi bạn trả lời người mà bạn đã ẩn",
                    displayText: "Hiển thị văn bản cho biết trả lời tin nhắn ẩn",
                    hideReply: "không hiển thị bất cứ điều gì"
                },
                guildBlackList: {
                    label: "Danh sách đen máy chủ",
                    description: "ID máy chủ nơi chức năng sẽ bị tắt"
                },
                guildWhiteList: {
                    label: "Danh sách trắng máy chủ",
                    description: "ID máy chủ nơi chức năng sẽ được kích hoạt"
                }
            }
        },
        clientTheme: {
            name: "Chủ đề khách hàng",
            description: "Làm lại thử nghiệm chủ đề khách hàng cũ. Thêm màu vào chủ đề ứng dụng khách Discord của bạn",
            title: "Màu chủ đề",
            add: "Thêm màu vào chủ đề ứng dụng khách Discord của bạn",
            option: {
                color: {
                    label: "Màu sắc"
                },
                resetColor: {
                    label: "Đặt lại màu"
                }
            },
            error: {
                modal: {
                    title: "Chủ đề của bạn sẽ trông không đẹp!",
                    contrast: "Màu được chọn sẽ không tương phản tốt với văn bản",
                    nitro: "Chủ đề Nitro không được hỗ trợ",
                    switch: "Chuyển sang chế độ {{oppositeTheme}}",
                    disable: "Tắt chủ đề Nitro",
                    reset: "Đặt lại màu chủ đề"
                }
            }
        },
        clipsEnhancements: {
            name: "ClipCải tiến",
            description: "Thêm nhiều tùy chọn Clip FPS và thời lượng, cùng với tính năng gắn thẻ RPC!",
            minutes: "Một phút",
            option: {
                richPresenceTagging: {
                    label: "Gắn thẻ hiện diện phong phú",
                    description: "Khi nào các clip nên được gắn thẻ với Sự hiện diện phong phú hiện có?",
                    always: "Luôn luôn",
                    only: "Chỉ khi phần đầu hoặc phần cuối của tên sự kiện trùng khớp",
                    never: "Không bao giờ"
                },
                enableScreenshotKeybind: {
                    label: "Bật phím nóng chụp ảnh màn hình",
                    description: "Kích hoạt tính năng phím nóng ảnh chụp màn hình"
                },
                enableVoiceOnlyClips: {
                    label: "Chỉ bật clip âm thanh",
                    description: "Bật clip chỉ có âm thanh (âm thanh không có video)"
                },
                enableAdvancedSignals: {
                    label: "Kích hoạt tín hiệu nâng cao",
                    description: "Bật tín hiệu clip nâng cao (kích hoạt clip tự động)"
                },
                ignorePlatformRestriction: {
                    label: "Bỏ qua các hạn chế về nền tảng",
                    description: "Cho phép cắt theo nền tảng cụ thể (có thể gây ra lỗi lưu)"
                },
                clipsLink: {
                    label: "Liên kết clip",
                    link: "Thay đổi tùy chọn FPS và thời lượng trong cài đặt Clip!"
                }
            }
        },
        colorSighted: {
            name: "Màu sắcSighted",
            description: "Loại bỏ các biểu tượng thân thiện với người mù màu khỏi các tình huống, giống như Discord 2015-2017"
        },
        commandPalette: {
            name: "Bảng lệnh",
            description: "Nó cho phép bạn điều hướng giao diện bằng bàn phím.",
            action: {
                command: {
                    label: "Chạy lệnh",
                    description: "Chạy lệnh bảng màu khác có ID. Nếu bạn không chắc chắn về mã định danh, hãy sử dụng bộ chọn."
                },
                settings: {
                    label: "Mở trang cài đặt",
                    description: "Nó đi thẳng đến trang cài đặt Discord. Chọn một trang từ bộ chọn."
                },
                url: {
                    label: "Mở URL",
                    description: "Mở một liên kết. Để có khả năng tương thích tốt nhất, hãy sử dụng liên kết https://."
                },
                macro: {
                    label: "Chạy macro",
                    description: "Chạy một loạt lệnh tuần tự. Thêm các bước thông qua bộ chọn."
                }
            },
            category: {
                auto: "Tự động (sử dụng bố cục mặc định)",
                default: {
                    label: "Giao dịch nhanh",
                    description: "Các phím tắt Plexcord phổ biến"
                },
                plugins: {
                    label: "Plugin",
                    description: "Bật, tắt và định cấu hình plugin Plexcord",
                    enable: {
                        label: "Kích hoạt plugin"
                    },
                    disable: {
                        label: "Tắt plugin"
                    },
                    settings: {
                        label: "Cài đặt plugin"
                    },
                    toolbox: {
                        label: "Tác vụ bổ trợ"
                    },
                    chatbar: {
                        label: "Nút thanh trò chuyện"
                    },
                    changes: {
                        label: "Thay đổi plugin"
                    }
                },
                context: {
                    label: "Bối cảnh hiện tại",
                    description: "Hành động cho kênh và máy chủ đã chọn"
                },
                updates: {
                    label: "Cập nhật",
                    description: "Luôn cập nhật với Plexcord"
                },
                discordSettings: {
                    label: "Cài đặt bất hòa",
                    description: "Chuyển đến trang cấu hình Discord"
                },
                custom: {
                    label: "Lệnh đặc biệt",
                    description: "Các mục trong bảng lệnh do người dùng xác định"
                },
                sessions: {
                    label: "Công cụ phiên",
                    description: "Công cụ quản lý phiên Discord của bạn"
                },
                guilds: {
                    label: "Máy chủ",
                    description: "Điều hướng nhanh đến máy chủ của bạn"
                },
                friends: {
                    label: "Bạn",
                    description: "Nhanh chóng đi đến chỗ bạn bè của bạn"
                },
                action: {
                    label: "Hoạt động",
                }
            },
            builtIn: {
                open: {
                    settings: {
                        plexcord: "Mở cài đặt Plexcord",
                        plugin: "Mở cài đặt plugin"
                    }
                },
                reload: {
                    label: "Cài đặt lại Discord",
                    description: "Tải lại cửa sổ Discord hiện tại"
                }
            },
            command: {
                enable: "Bật {{pluginName}}",
                enabled: "Đã bật {{pluginName}}",
                disable: "Tắt {{pluginName}}",
                disabled: "{{pluginName}} Đã tắt",
                failed: "Lệnh không thành công:",
                toggleFailed: "Không thể thay đổi {{pluginName}}.",
                pluginSettings: "Cài đặt {{pluginName}}",
                untitled: "Lệnh ẩn danh",
                new: "Lệnh mới",
                error: {
                    enter: "Nhập ID lệnh hoặc chọn bên dưới.",
                    noCommand: "Không có lệnh nào khớp với ID này."
                },
                discord: {
                    account: "Mở tài khoản của tôi",
                    privacy: "Dữ liệu và Quyền riêng tư Mở",
                    notifications: "Bật thông báo",
                    voice: "Bật âm thanh và video",
                    text: "Mở văn bản và hình ảnh",
                    appearance: "Mở chế độ xem",
                    accessibility: "Mở khả năng truy cập",
                    keybinds: "Bật ràng buộc phím",
                    advanced: "Mở Cài đặt nâng cao",
                },
                updates: {
                    check: {
                        label: "Kiểm tra cập nhật",
                        description: "Kiểm tra bản cập nhật Plexcord",
                        one: "Đã có bản cập nhật",
                        multiple: "Có sẵn bản cập nhật {{count}}",
                        none: "không cập nhật",
                        failed: "Không thể kiểm tra cập nhật."
                    },
                    changelog: {
                        label: "Xem nhật ký thay đổi",
                        description: "Plexcord mở nhật ký thay đổi"
                    }
                },
                read: {
                    mark: {
                        label: "{{channelLabel}} Đánh dấu là đã đọc"
                    }
                },
                pin: {
                    open: {
                        label: "Bật Ghim {{channelLabel}}"
                    },
                    toggle: {
                        label: "Chuyển đổi ghim trên lệnh cuối cùng"
                    }
                },
                channel: {
                    mute: {
                        label: "{{channelLabel}} Duy trì",
                        oneHour: "Tắt tiếng kênh {{channelLabel}} trong 1 giờ",
                        untilTomorrow: "Tắt tiếng kênh {{channelLabel}} cho đến ngày mai",
                    },
                    unmute: {
                        label: "Bật tiếng {{channelLabel}}",
                    },
                    reopen: {
                        label: "Mở lại DM đã đóng lần cuối"
                    },
                    dm: {
                        open: {
                            label: "Mở DM bằng {{userLabel}}"
                        }
                    }
                },
                guild: {
                    settings: {
                        label: "Mở cài đặt {{guildLabel}}"
                    },
                    navigate: {
                        label: "Đi tới máy chủ {{guildLabel}}"
                    }
                },
                session: {
                    thirtyMinutesDnd: "30 phút Không làm phiền",
                    oneHourDnd: "1 giờ Không làm phiền",
                    cancelStatusReset: "Hủy hẹn giờ trạng thái"
                },
                status: {
                    set: {
                        online: "Đặt trạng thái: Trực tuyến",
                        idle: "Đặt trạng thái: Không hoạt động",
                        dnd: "Đặt trạng thái: Không làm phiền",
                        invisible: "Đặt trạng thái: Vô hình"
                    }
                },
                toggle: {
                    streamer: "Chuyển đổi chế độ truyền phát",
                    mute: "Chuyển đổi tự tắt tiếng",
                    deafen: "Chuyển đổi tự điếc",
                },
                notification: {
                    clear: {
                        label: "Xóa thông báo trên màn hình"
                    }
                },
                palette: {
                    settings: {
                        label: "Mở cài đặt bảng lệnh",
                        description: "Định cấu hình plugin Bảng lệnh"
                    }
                },
                recent: {
                    label: "Hiển thị các lệnh gần đây",
                    description: "Hiển thị các lệnh được thực hiện gần đây",
                    rerun: "Chạy lại lệnh cuối cùng"
                },
                plugin: {
                    reload: {
                        label: "Cài đặt lại tất cả các plugin",
                        description: "Cố gắng tải lại ngay lập tức mọi plugin đang hoạt động"
                    },
                    enable: {
                        label: "Kích hoạt tất cả các plugin"
                    },
                    disable: {
                        label: "Vô hiệu hóa tất cả các plugin không cần thiết"
                    },
                    restart: {
                        label: "Khởi động lại Plexcord",
                        description: "Tải lại cửa sổ máy khách Discord"
                    }
                },
                quickCSS: {
                    label: "Chuyển đổi CSS nhanh"
                },
                transparentity: {
                    label: "Chuyển đổi độ trong suốt của cửa sổ"
                },
                theme: {
                    open: {
                        label: "Mở cài đặt chủ đề máy khách"
                    }
                }
            },
            modal: {
                searchPlaceholder: "Tìm kiếm lệnh",
                noCommand: "Lệnh không tìm thấy",
                add: {
                    title: "Thêm lệnh"
                },
                choose: {
                    title: "Chọn lệnh"
                },
                command: {
                    palette: {
                        label: "Bảng lệnh",
                        placeholder: "Nhập lệnh",
                        filtering: "Lọc theo {{tags}}",
                        noCommand: "Lệnh không tìm thấy",
                        pin: "lệnh ghim",
                        unpin: "Bỏ ghim"
                    },
                    target: {
                        label: "ID lệnh mục tiêu",
                        placeholder: "Nhập ID lệnh",
                        choose: "Chọn lệnh"
                    },
                    custom: {
                        label: "Lệnh đặc biệt",
                        description: "1) Đặt tên cho lệnh · 2) Thêm mô tả/từ khóa/thẻ/danh mục tùy chọn · 3) Chọn một hành động và điền thông tin chi tiết (ID cho bí danh và macro phải khớp với các lệnh bảng màu hiện có).",
                        auto: "Tự động (mặc định)",
                        expand: "Mở rộng",
                        collapse: "Sụp đổ",
                        collapsed: {
                            label: "Vé",
                            description: "Tên hiển thị",
                            advanced: {
                                hide: "Ẩn tùy chọn nâng cao",
                                show: "Hiển thị tùy chọn nâng cao"
                            },
                            subtitle: {
                                label: "Giải thích",
                                placeholder: "Tiêu đề phụ tùy chọn"
                            },
                            keywords: {
                                label: "Từ khóa",
                                placeholder: "Từ khóa được phân tách bằng dấu phẩy"
                            },
                            tags: {
                                label: "Thẻ",
                                placeholder: "Thẻ được phân tách bằng dấu phẩy"
                            },
                            suggestion: {
                                label: "Gợi ý"
                            },
                            chooseCommand: {
                                label: "Chọn nơi lệnh này xuất hiện trong bảng màu."
                            },
                            danger: {
                                label: "Hiển thị là nguy hiểm"
                            }
                        },
                        remove: "Xóa lệnh",
                        add: "Thêm lệnh"
                    }
                },
                settings: {
                    noSelected: "Trang chưa được chọn",
                    current: "Trang hiện tại",
                    choose: "Chọn trang..."
                },
                url: {
                    url: "URL",
                    error: "Sử dụng liên kết http:// hoặc https://.",
                    valid: "Nhập một URL hợp lệ.",
                    open: {
                        external: "mở bên ngoài",
                    }
                },
                macro: {
                    sequence: {
                        label: "Kịch bản",
                        placeholder: "lệnh-a, lệnh-b"
                    },
                    addStep: "Thêm bước",
                    unknownId: "ID lệnh không xác định"
                }
            },
            status: {
                online: "trực tuyến",
                idle: "nhàn rỗi",
                dnd: "Đừng làm phiền",
                invisible: "Vô hình"
            },
            tag: {
                core: "Hạt hướng dương",
                navigation: "Đi dạo",
                utility: "Phương tiện giao thông",
                developer: "Nhà phát triển",
                customization: "tùy biến",
                plugins: "Plugin",
                session: "Phiên họp",
                context: "Bối cảnh",
                custom: "Đặc biệt",
                guilds: "Máy chủ",
                friends: "Bạn",
                other: "Khác"
            },
            toast: {
                chat: {
                    button: {
                        unableToFind: "Không tìm thấy nút trò chuyện '{{label}}'.",
                        failedToTrigger: "{{nhãn}} không thể được kích hoạt.",
                        activated: "{{nhãn}} được kích hoạt."
                    }
                },
                channel: {
                    mute: {
                        unavailable: "Điều khiển tắt tiếng kênh không khả dụng",
                        muted: "Kênh đã bị im lặng.",
                        unmuted: "Kênh đã bị tắt tiếng.",
                        failed: "Không thể cập nhật trạng thái tắt tiếng của kênh."
                    },
                    dm: {
                        no: "Không có lần đóng DM nào được ghi lại trong phiên này.",
                        reOpened: "DM đóng cuối cùng đã được mở lại.",
                        noAvailable: "DM không còn nữa."
                    }
                },
                command: {
                    loop: "Vòng lặp lệnh được phát hiện trong quá trình thực thi macro.",
                    notFound: "Không tìm thấy lệnh {{commandId}}.",
                    unsupported: "Hành động lệnh tùy chỉnh không được hỗ trợ.",
                    failedToRun: "Không chạy được {{nhãn}}.",
                    notMetadata: "Siêu dữ liệu plugin Bảng lệnh không có sẵn."
                },
                guild: {
                    mute: {
                        unavailable: "Điều khiển tắt tiếng máy chủ không khả dụng",
                        muted: "Máy chủ đã bị im lặng.",
                        unmuted: "Việc tắt tiếng máy chủ đã bị xóa.",
                        failed: "Không thể cập nhật trạng thái tắt tiếng của máy chủ."
                    },
                    settings: {
                        unable: "Không thể mở cài đặt máy chủ.",
                    }
                },
                panel: {
                    pin: {
                        unable: "Bảng cố định không thể mở được.",
                    }
                },
                status: {
                    reset: {
                        canceled: "Việc đặt lại trạng thái theo kế hoạch đã bị hủy.",
                        unableToChange: "Trạng thái không thể thay đổi vào lúc này.",
                        reverted: "Trạng thái được trả về là {{status}}.",
                        dnd: "Không làm phiền trong {{duration}} phút."
                    },
                    change: {
                        unableToChange: "Trạng thái không thể thay đổi vào lúc này.",
                        changed: "Trạng thái đã thay đổi thành {{status}}."
                    }
                },
                read: {
                    marked: "{{channelLabel}} được đánh dấu là đã đọc.",
                    failed: "Không thể đánh dấu kênh này là đã đọc."
                },
                route: {
                    unable: "Không thể mở {{destination}}.",
                },
                notification: {
                    cleared: "Đã xóa tất cả thông báo.",
                    failed: "Không thể xóa thông báo.",
                    notSupported: "Xóa thông báo không được hỗ trợ."
                },
                streamerMode: {
                    enabled: "Chế độ phát sóng được bật.",
                    disabled: "Chế độ phát sóng bị tắt.",
                },
                voice: {
                    micToggle: {
                        muted: "Micrô đã im lặng.",
                        unmuted: "Micrô đã được bật."
                    },
                    deafenToggle: {
                        deafened: "Bây giờ bạn bị điếc.",
                        undeafened: "Bạn không còn bị điếc nữa."
                    }
                },
                quickCSS: {
                    enabled: "CSS nhanh được kích hoạt.",
                    disabled: "CSS nhanh bị vô hiệu hóa."
                },
                transparentity: {
                    enabled: "Tính năng trong suốt của cửa sổ được bật.",
                    disabled: "Tính trong suốt của cửa sổ bị tắt."
                },
                plugin: {
                    disabled: {
                        label: "{{pluginName}} bị vô hiệu hóa.",
                        disable: "{{pluginName}} bị vô hiệu hóa. Để sử dụng hành động này, hãy kích hoạt plugin."
                    },
                    required: {
                        label: "{{pluginName}} yêu cầu khởi động lại để cài đặt lại."
                    },
                    stop: {
                        failed: "Không thể dừng {{pluginName}}."
                    },
                    restart: {
                        failed: "Không khởi động lại được {{pluginName}}."
                    },
                    reload: {
                        label: "{{pluginName}} đã được tải lại.",
                        noPlugin: "Không có plugin nào được cài đặt lại.",
                        reloaded: "Đã cài đặt lại {{count}} plugin."
                    },
                    toggle: {
                        enabled: "Đã kích hoạt plugin {{changed}}.",
                        disabled: "Plugin {{changed}} đã bị vô hiệu hóa.",
                        noChanged: "Trạng thái của bất kỳ plugin nào không thay đổi."
                    },
                    run: {
                        failed: {
                            label: "Không chạy được {{pluginName}}: {{actionLabel}}."
                        }
                    }
                }
            },
            display: {
                channel: {
                    current: "Kênh hiện tại",
                    group: "Nhóm DM",
                    direct: "Tin nhắn trực tiếp"
                },
                guild: {
                    current: "Máy chủ hiện tại",
                }
            },
            option: {
                hotkey: {
                    label: "Phím nóng",
                    description: "Phím nóng dùng để mở bảng lệnh",
                    recording: "Nhấn phím bất kỳ...",
                    reset: "cài lại"
                },
                visualStyle: {
                    label: "Phong cách trực quan",
                    description: "chế độ xem bảng màu",
                    classic: "Cổ điển",
                    polished: "Đánh bóng (Hiện đại)"
                },
                showTags: {
                    label: "Hiển thị thẻ",
                    description: "Hiển thị nhãn cho lệnh"
                },
                enableTagFilter: {
                    label: "Bật bộ lọc thẻ",
                    description: "Hiển thị thanh bộ lọc thẻ"
                },
                customCommands: {
                    label: "Lệnh đặc biệt",
                    description: "Quản lý các mục bảng lệnh tùy chỉnh"
                }
            },
            template: {
                alias: {
                    label: "Lệnh biệt danh",
                    description: "Phản ánh một lệnh hiện có"
                },
                settings: {
                    label: "Cài đặt",
                    description: "Mở cài đặt Discord"
                },
                url: {
                    label: "Sự liên quan",
                    description: "Mở một URL bên ngoài"
                },
                macro: {
                    label: "Vĩ mô",
                    description: "Chạy một loạt lệnh"
                }
            }
        },
        consoleJanitor: {
            name: "Bảng điều khiểnNgười gác cổng",
            description: "Tắt các thông báo/lỗi bảng điều khiển gây phiền nhiễu",
            option: {
                disableLoggers: {
                    label: "Tắt trình ghi nhật ký",
                    description: "Vô hiệu hóa nhật ký của Discord"
                },
                disableSpotifyLogger: {
                    label: "Vô hiệu hóa Spotify Logger",
                    description: "Tắt trình ghi nhật ký Spotify làm rò rỉ thông tin tài khoản và khóa truy cập"
                },
                whitelistedLoggers: {
                    label: "Trình ghi nhật ký được đưa vào danh sách trắng",
                    description: "Danh sách các trình ghi nhật ký được phân tách bằng dấu chấm phẩy (;) sẽ được phép ngay cả khi các trình ghi nhật ký khác bị ẩn"
                },
                allowLevel: {
                    label: "Cấp độ cho phép",
                    description: "Luôn cho phép logger thuộc loại này",
                    filter: "Danh sách bộ lọc"
                }
            }
        },
        consoleShortcuts: {
            name: "Phím tắt bảng điều khiển",
            description: "Thêm phím tắt ngắn hơn cho nhiều thứ trên cửa sổ. Chạy `shortcutList` cho danh sách."
        },
        contentWarning: {
            name: "Nội dungCảnh báo",
            description: "Cho phép làm mờ một số từ kích hoạt nhất định theo mặc định. Nhấp vào nội dung mờ sẽ hiển thị nội dung đó.",
            option: {
                flagged: {
                    label: "đánh dấu",
                    flagged: "từ được đánh dấu",
                    placeholder: "Từ"
                },
                onClick: {
                    label: "Bấm vào nó",
                    description: "Hiển thị nội dung khi nhấp chuột, không chỉ khi di chuột qua"
                }
            }
        },
        copyEmojiMarkdown: {
            name: "Sao chépEmojiMarkdown",
            description: "Cho phép bạn sao chép biểu tượng cảm xúc dưới dạng văn bản được định dạng (<a:blob_pwease:1402403381900742737>)",
            option: {
                copyUnicode: {
                    label: "Bản sao Unicode",
                    description: "Sao chép ký tự unicode thô thay vì :name: cho biểu tượng cảm xúc mặc định (👽)"
                }
            },
            context: {
                copy: "Sao chép đánh dấu biểu tượng cảm xúc"
            },
            toast: {
                success: "Thành công! Đánh dấu của biểu tượng cảm xúc đã được sao chép."
            }
        },
        copyFileContents: {
            name: "CopyFileNội dung",
            description: "Thêm nút vào tệp đính kèm tệp văn bản để sao chép nội dung của chúng",
            copied: "Đã sao chép!",
            large: "Tệp quá lớn để sao chép.",
            copyFileContents: "Sao chép nội dung tập tin"
        },
        copyProfileColors: {
            name: "Sao chépHồ sơMàu sắc",
            description: "Một plugin sao chép màu gradient trong hồ sơ của người dùng vào bảng tạm.",
            copy: "Sao chép màu hồ sơ",
            toast: {
                noColor: "Không tìm thấy màu hồ sơ!",
                copied: "Màu hồ sơ được sao chép vào clipboard!",
                error: "Lỗi sao chép màu hồ sơ!"
            }
        },
        copyStatusUrls: {
            name: "CopyStatusUrl",
            description: "Sao chép URL trạng thái của người dùng khi bạn nhấp chuột phải",
            toast: {
                copied: "Đã sao chép URL",
                error: "Lỗi sao chép URL, kiểm tra bảng điều khiển để biết thêm thông tin"
            }
        },
        copyStickerLinks: {
            name: "CopyStickerLiên kết",
            description: "Thêm khả năng sao chép và mở liên kết nhãn dán",
            context: {
                copy: "Sao chép liên kết",
                open: "Mở liên kết"
            },
            toast: {
                success: "Đã sao chép liên kết!"
            }
        },
        copyUserMention: {
            name: "Sao chépNgười dùngĐề cập",
            description: "Thêm một nút vào menu ngữ cảnh của người dùng để sao chép đề cập của người dùng. Hoạt động tốt nhất với ValidUser.",
            context: {
                copy: "Sao chép đề cập của người dùng"
            }
        },
        copyUserURLs: {
            name: "Sao chépURL người dùng",
            description: "Thêm tùy chọn 'Sao chép URL người dùng' vào menu ngữ cảnh của người dùng.",
            context: {
                copy: "Sao chép URL người dùng"
            }
        },
        crashHandler: {
            name: "CrashHandler",
            description: "Plugin trợ giúp để quản lý và nếu có thể, khôi phục sau sự cố mà không cần phải khởi động lại",
            option: {
                attemptToPreventCrashes: {
                    label: "Cố gắng ngăn chặn sự cố",
                    description: "Cố gắng ngăn chặn sự cố Discord?"
                },
                attemptToNavigateToHome: {
                    label: "Cố gắng chuyển hướng đến trang chủ",
                    description: "Cố gắng chuyển hướng đến tab chính trong quá trình khôi phục sau sự cố."
                }
            },
            toast: {
                crashed: {
                    title: "Sự bất hòa đã sụp đổ!",
                    body: "Rất tiếc :( Discord bị lỗi hai lần trong một thời gian ngắn, sẽ không có nỗ lực khôi phục nào được thực hiện. Nhấp vào đây và tham gia máy chủ hỗ trợ!",
                    update: "Ồ không, Discord vừa gặp sự cố… nhưng tin tốt là có bản cập nhật Plexcord có thể khắc phục sự cố này! Bạn có muốn cập nhật ngay bây giờ không?",
                    recover: "Đang cố gắng khôi phục... Nhấp vào đây và tham gia máy chủ hỗ trợ!",
                    invalid: "Liên kết lời mời không hợp lệ hoặc đã hết hạn."
                }
            }
        },
        ctrlEnterSend: {
            name: "CtrlNhậpGửi",
            description: "Sử dụng Ctrl+Enter để gửi tin nhắn (có thể tùy chỉnh)",
            option: {
                submitRule: {
                    label: "Quy tắc đăng bài",
                    description: "Cách gửi tin nhắn",
                    ctrlEnter: "Ctrl+Enter (Enter hoặc Shift+Enter cho dòng mới) (cmd+enter trên macOS)",
                    shiftEnter: "Shift+Enter (Nhập cho dòng mới)",
                    enter: "Enter (Shift+Enter cho dòng mới; Discord mặc định)"
                },
                sendMessageInTheMiddleOfACodeBlock: {
                    label: "Gửi tin nhắn ở giữa khối mã",
                    description: "Gửi tin nhắn ở giữa một khối mã"
                }
            }
        },
        cursorBuddy: {
            name: "Con trỏBuddy",
            description: "Thêm một sprite đi theo con trỏ của bạn.",
            modal: {
                furColor: "Màu lông",
                outlineColor: "Anahat Rengi"
            },
            option: {
                buddy: {
                    label: "Bạn bè",
                    description: "Chọn một người bạn con trỏ",
                    oneko: "Tốt",
                    fathorse: "Ngựa béo"
                },
                speed: {
                    label: "Tốc độ",
                    description: "Tốc độ của bạn anh",
                    invalid: "Tốc độ phải lớn hơn 0"
                },
                fps: {
                    label: "Tốc độ khung hình (FPS)",
                    description: "Tốc độ khung hình của bạn bè bạn",
                    invalid: "Tốc độ khung hình phải lớn hơn 0"
                },
                onekoSection: {
                    label: "Tốt"
                },
                furColor: {
                    label: "Màu lông",
                    description: "màu lông lục giác cho oneko"
                },
                outlineColor: {
                    label: "Anahat Rengi",
                    description: "Phác thảo màu hex cho Oneko"
                },
                fathorseSection: {
                    label: "Ngựa béo"
                },
                size: {
                    label: "Kích thước",
                    description: "Kích thước của ngựa béo",
                    invalid: "Kích thước phải lớn hơn 0"
                },
                fade: {
                    label: "Phai dần",
                    description: "Liệu con ngựa có mờ đi khi con trỏ đến gần không"
                },
                freeroam: {
                    label: "Đi lang thang miễn phí",
                    description: "Liệu con ngựa có thể tự do dạo chơi khi nhàn rỗi không"
                },
                shake: {
                    label: "Sa thải",
                    description: "Liệu con ngựa có lắc cửa sổ khi đi bộ không"
                }
            }
        },
        customFolderIcons: {
            name: "Biểu tượng thư mục tùy chỉnh",
            description: "Tùy chỉnh biểu tượng thư mục với bất kỳ png nào",
            option: {
                solidIcon: {
                    label: "Biểu tượng phẳng",
                    description: "Sử dụng nền đơn giản cho nền hình ảnh của bạn"
                },
                folderIcons: {
                    label: "Biểu tượng thư mục",
                    description: "Cài đặt biểu tượng thư mục"
                }
            },
            modal: {
                change: "Thay đổi kích thước biểu tượng thư mục",
                save: "Cứu",
                unset: "Di dời",
                set: "Đặt biểu tượng mới",
                hover: "Bạn có thể cần phải di chuột qua thư mục sau khi đặt nó ở chế độ làm mới."
            }
        },
        customIdle: {
            name: "tùy chỉnh không hoạt động",
            description: "Cho phép bạn đặt khoảng thời gian trước khi Discord chuyển sang chế độ không hoạt động (hoặc tắt chế độ không hoạt động tự động)",
            backOnline: "Chào mừng trở lại! Bấm vào nút để truy cập trực tuyến. Nhấp vào X để ở chế độ chờ cho đến khi tải lại.",
            exit: "Thoát khỏi chế độ chờ",
            option: {
                idleTimeout: {
                    label: "Hết thời gian chờ",
                    description: "Số phút trước khi Discord chuyển sang chế độ không hoạt động (0 để tắt chế độ không hoạt động tự động)"
                },
                remainInIdle: {
                    label: "Ở nhàn rỗi",
                    description: "Khi bạn quay lại Discord, hãy ở chế độ chờ cho đến khi bạn xác nhận rằng bạn muốn trực tuyến"
                }
            }
        },
        customRPC: {
            name: "RPC tùy chỉnh",
            description: "Thêm Hiện diện phong phú có thể tùy chỉnh hoàn toàn vào hồ sơ Discord của bạn",
            goTo: "Tạo một ứng dụng bằng cách truy cập {{portal}} và lấy ID ứng dụng.",
            upload: "Nhận khóa hình ảnh bằng cách tải hình ảnh lên từ tab Hiện diện phong phú.",
            image: "Nếu bạn muốn sử dụng liên kết hình ảnh, hãy tải hình ảnh của bạn xuống và tải lên {{imgur}}, sau đó nhấp chuột phải vào hình ảnh và sử dụng 'Sao chép địa chỉ hình ảnh' để lấy liên kết.",
            button: "Bạn không thể nhìn thấy các nút của chính mình trên hồ sơ của mình nhưng những người khác có thể nhìn thấy chúng một cách bình thường.",
            font: "Một số chữ cái unicode lạ ('𝖇ö𝖞𝖑𝖊 𝖞𝖆𝖟ı𝖑𝖆𝖗') có thể khiến Rich Presence không xuất hiện, thay vào đó hãy thử sử dụng các chữ cái bình thường.",
            placeholder: "Nhập một giá trị",
            select: "Chọn một tùy chọn",
            error: {
                appIdInvalid: "ID ứng dụng không phải là số hợp lệ.",
                notice: "Cảnh báo",
                sharing: "Chia sẻ sự kiện không được bật, mọi người sẽ không thể nhìn thấy Sự hiện diện phong phú riêng tư của bạn!",
                enable: "kích hoạt",
                validStream: "Liên kết bài viết phải là một URL hợp lệ.",
                mustBeURL: "Nó phải là một URL hợp lệ.",
                streamCharacters: "Liên kết bài viết không được dài hơn 512 ký tự.",
                dontUse: "Không sử dụng liên kết Discord. Thay vào đó hãy sử dụng liên kết hình ảnh Imgur.",
                imgur: "Liên kết Imgur phải trực tiếp tới hình ảnh (ví dụ: https://i.imgur.com/...). Nhấp chuột phải vào hình ảnh và nhấp vào 'Sao chép địa chỉ hình ảnh'.",
                tenor: "Liên kết Tenor phải trực tiếp tới hình ảnh (ví dụ: https://media.tenor.com/...). Nhấp chuột phải vào GIF và nhấp vào 'Sao chép địa chỉ hình ảnh'.",
                required: "Trường này là bắt buộc.",
                tooLong: "Nó không được dài hơn {{maxLength}} ký tự.",
                mustBeNumber: "Nó phải là một con số.",
                mustBePositive: "Nó phải là một số dương.",
                startTimeInvalid: "Thời gian bắt đầu phải lớn hơn 0.",
                endTimeInvalid: "Thời gian kết thúc phải lớn hơn 0."
            },
            option: {
                appId: {
                    label: "ID ứng dụng",
                    description: "ID ứng dụng (bắt buộc)"
                },
                appName: {
                    label: "Tên ứng dụng",
                    description: "Tên ứng dụng (bắt buộc)"
                },
                details: {
                    label: "Chi tiết",
                    description: "Chi tiết (dòng 1)"
                },
                detailsURL: {
                    label: "URL chi tiết",
                    description: "URL có thể nhấp để biết chi tiết"
                },
                state: {
                    label: "cứng",
                    description: "Trạng thái (dòng 2)"
                },
                stateURL: {
                    label: "URL trạng thái",
                    description: "URL có thể nhấp để biết trạng thái"
                },
                partySize: {
                    label: "Quy mô nhóm",
                    description: "Quy mô nhóm hiện tại (phải được sử dụng cùng với Quy mô nhóm tối đa)"
                },
                partyMax: {
                    label: "Kích thước nhóm tối đa",
                    description: "Kích thước nhóm tối đa (phải được sử dụng với Kích thước nhóm hiện tại)"
                },
                type: {
                    label: "Loại sự kiện",
                    description: "Loại sự kiện",
                    playing: "đang chơi",
                    streaming: "Phát sóng",
                    listening: "lắng nghe",
                    watching: "đang xem",
                    competing: "cuộc đua"
                },
                streamLink: {
                    label: "Đăng liên kết",
                    description: "Liên kết tới Twitch.tv hoặc Youtube.com (chỉ dành cho loại sự kiện Phát sóng)"
                },
                timestampMode: {
                    label: "Chế độ dấu thời gian",
                    description: "Dấu thời gian sẽ chỉ ra điều gì",
                    none: "Không có",
                    sinceDiscordOpen: "Kể từ khi Discord mở ra",
                    sameAsCurrentTime: "Giống như thời gian hiện tại của bạn (không đặt lại sau 24 giờ)",
                    custom: "Giờ đặc biệt"
                },
                startTime: {
                    label: "Thời gian bắt đầu (tính bằng mili giây)",
                    description: "Dấu thời gian bắt đầu (chỉ dành cho chế độ thời gian tùy chỉnh)"
                },
                endTime: {
                    label: "Thời gian kết thúc (tính bằng mili giây)",
                    description: "Dấu thời gian kết thúc (chỉ dành cho chế độ thời gian tùy chỉnh)"
                },
                imageBig: {
                    label: "Chìa khóa hình ảnh lớn",
                    description: "Phím trực quan lớn (phải được cài đặt trong tab Hiện diện phong phú)"
                },
                imageBigTooltip: {
                    label: "Manh mối trực quan lớn",
                    description: "Mẹo xuất hiện khi di chuột qua hình ảnh lớn hơn"
                },
                imageBigURL: {
                    label: "URL hình ảnh lớn",
                    description: "URL có thể nhấp vào hình ảnh lớn"
                },
                imageSmall: {
                    label: "Công tắc trực quan nhỏ",
                    description: "Phím trực quan nhỏ (phải được cài đặt trong tab Hiện diện phong phú)"
                },
                imageSmallTooltip: {
                    label: "Manh mối trực quan nhỏ",
                    description: "Mẹo xuất hiện khi di chuột qua hình ảnh thu nhỏ"
                },
                imageSmallURL: {
                    label: "URL hình ảnh thu nhỏ",
                    description: "URL có thể nhấp vào hình ảnh nhỏ"
                },
                buttonOneText: {
                    label: "Buton 1 Metni",
                    description: "Nút 1"
                },
                buttonOneURL: {
                    label: "URL của nút 1",
                    description: "Kết nối nút 1"
                },
                buttonTwoText: {
                    label: "Buton 2 Metni",
                    description: "Nút 2"
                },
                buttonTwoURL: {
                    label: "URL của nút 2",
                    description: "Kết nối nút 2"
                }
            }
        },
        customSounds: {
            name: "Âm thanh tùy chỉnh",
            description: "Tùy chỉnh âm thanh của Discord.",
            search: "Tìm kiếm âm thanh",
            placeholder: "Tìm kiếm theo tên hoặc ID",
            import: "Iche Aktar",
            export: "Xuất khẩu",
            reset: "Đặt lại tất cả",
            debug: "Gỡ lỗi",
            toast: {
                error: "Lỗi tải tập tin âm thanh tùy chỉnh",
                exported: "Đã xuất {{count}} cài đặt (không bao gồm tệp âm thanh)",
                imported: "Cài đặt đã được nhập thành công",
                importError: "Đã xảy ra lỗi khi nhập cài đặt. Kiểm tra bảng điều khiển để biết chi tiết.",
                reset: "Tất cả âm thanh đã được thiết lập lại thành công!",
                overrideDescription: "Âm thanh {{soundName}} đã thay đổi",
                previewSound: "Đã xảy ra lỗi khi phát âm thanh.",
                playing: "Không thể phát âm thanh tùy chỉnh. Tập tin có thể bị hỏng.",
                invalidFile: "Không có tệp âm thanh tùy chỉnh để xem trước",
                uploaded: "Tệp đã được tải lên thành công: {{fileName}}",
                uploadedError: "Đã xảy ra lỗi khi tải tệp lên: {{error}}",
                invalidExtension: "Loại tệp không hợp lệ. Vui lòng tải lên một tập tin âm thanh.",
                uploading: "Đang tải tập tin...",
                deleted: "Tập tin đã được xóa thành công",
                deleteError: "Đã xảy ra lỗi khi xóa tệp.",
                loadingError: "Lỗi tải tập tin âm thanh tùy chỉnh"
            },
            button: {
                preview: "Xem trước",
                stop: "Chảy",
                volume: "Ses",
                soundSource: "Nguồn âm thanh",
                customFile: "Tệp đặc biệt",
                uploadNew: "Tải lên mới",
                delete: "Xóa tệp đã chọn"
            },
            option: {
                default: "Mặc định",
                custom: "Đặc biệt",
                select: "Chọn một tập tin..."
            },
            type: {
                activityEnd: "Sự kiện đã kết thúc",
                activityLaunch: "Sự kiện đã bắt đầu",
                activityUserJoin: "Người dùng đã tham gia sự kiện",
                activityUserLeft: "Người dùng đã rời khỏi sự kiện",
                asmrMessage: "Tin nhắn ASMR",
                bitMessage: "Tin nhắn bit",
                bopMessage: "Tin nhắn Bop",
                callCalling: "Đang tiến hành tìm kiếm",
                callRinging: "Đổ chuông cuộc gọi",
                clipError: "Lỗi clip",
                clipSave: "Đã lưu đoạn phim",
                ddrDown: "Giảm DDR",
                ddrLeft: "DDR Sol",
                ddrRight: "DDR phải",
                ddrUp: "Tăng DDR",
                deafen: "làm điếc tai",
                discodo: "Đĩa",
                disconnect: "Đã ngắt kết nối",
                duckyMessage: "Tin nhắn Ducky",
                hangStatusSelect: "Tạm dừng lựa chọn trạng thái",
                highfiveClap: "Tiếng vỗ tay cao năm",
                highfiveWhistle: "Tiếng còi cao năm",
                humanMan: "con người",
                lofiMessage: "Tin nhắn LoFi",
                mention1: "Đề cập đến 1 (@role)",
                mention2: "Đề cập đến 2 (@mọi người)",
                mention3: "Đề cập đến 3 (@here)",
                message1: "Tin nhắn 1 (Chung)",
                message2: "Tin nhắn 2 (Phản hồi trên máy chủ)",
                message3: "Tin nhắn 3 (DM và DM nhóm)",
                mute: "Tắt tiếng",
                overlayUnlock: "Đã mở khóa lớp",
                poggermodeAchievement: "Thành tích Poggermode",
                poggermodeApplause: "Tiếng vỗ tay của Poggermode",
                poggermodeEnabled: "Đã bật chế độ Pogger",
                poggermodeMessage: "Tin nhắn chế độ Pogger",
                pttStart: "Bắt đầu PTT",
                pttStop: "Dừng PTT",
                reconnect: "Kết nối lại",
                robotMan: "Robot Adam",
                stageWaiting: "Cảnh chờ",
                streamEnded: "Đã kết thúc phát sóng",
                streamStarted: "Đã bắt đầu phát sóng",
                streamUserJoined: "Người dùng đã tham gia chương trình phát sóng",
                streamUserLeft: "Người dùng đã rời khỏi chương trình phát sóng",
                success: "Thành công",
                undeafen: "Loại bỏ điếc",
                unmute: "Xóa im lặng",
                userJoin: "Người dùng đã tham gia",
                userLeave: "Người dùng còn lại",
                userMoved: "Người dùng đã di chuyển",
                vibingWumpus: "Wumpus bị mắc kẹt"
            }
        },
        customTimestamps: {
            name: "Dấu thời gian tùy chỉnh",
            description: "Dấu thời gian tùy chỉnh trên tin nhắn và chú giải công cụ",
            demo: {
                cozy: "Nhấp vào tôi để chuyển sang định dạng thông thường",
                compact: "Bấm vào tôi để chuyển sang định dạng nhỏ gọn",
                lastWeek: "Tin nhắn này đã được gửi vào tuần trước",
                hover: "Bạn có thể xem các định dạng chú giải công cụ bằng cách di chuột qua dấu thời gian",
                edit: "Chỉnh sửa các định dạng bên dưới, xem chúng được cập nhật trực tiếp tại đây"
            },
            modal: {
                title: "Cách sử dụng:",
                moment: "Tài liệu định dạng Moment.js",
                hint: "Ngoài ra, bạn có thể sử dụng thông tin sau trong mục nhập của mình:",
                calendar: "cho phép định dạng ngày động, ví dụ",
                today: "Hôm nay",
                yesterday: "Hôm qua",
                relative: "mang đến cho bạn những lúc như:",
                relativeTime: "4 giờ trước",
                preview: "Xem trước",
                format: "định dạng lịch",
                howTo: "Dưới đây là cách định dạng giá trị [calendar] khi được sử dụng trong dấu thời gian ở trên."
            },
            option: {
                formats: {
                    label: "Định dạng",
                    description: "Tùy chỉnh định dạng dấu thời gian",
                },
                cozyFormat: {
                    label: "mod cứu trợ",
                    description: "Định dạng thời gian sử dụng cho chế độ thư giãn trong tin nhắn"
                },
                compactFormat: {
                    label: "Chế độ nhỏ gọn",
                    description: "Định dạng thời gian để sử dụng ở chế độ thu gọn và khi di chuột qua tin nhắn"
                },
                tooltipFormat: {
                    label: "mẹo công cụ",
                    description: "Định dạng thời gian để sử dụng trong chú giải công cụ"
                },
                ariaLabelFormat: {
                    label: "Nhãn Aria",
                    description: "Định dạng thời gian để sử dụng trong thẻ Aria"
                },
                sameDayFormat: {
                    label: "cùng ngày",
                    description: "[lịch] định dạng cho ngày hôm nay",
                    default: "[Lỗi] HH:mm:ss"
                },
                lastDayFormat: {
                    label: "Hôm qua",
                    description: "[lịch] định dạng cho ngày hôm qua",
                    default: "[Mỏng] HH:mm:ss"
                },
                lastWeekFormat: {
                    label: "Tuần trước",
                    description: "định dạng [lịch] cho tuần trước"
                },
                sameElseFormat: {
                    label: "lớn hơn",
                    description: "định dạng [lịch] cho ngày cũ hơn"
                }
            }
        },
        customUserColors: {
            name: "Màu sắc người dùng tùy chỉnh",
            description: "Cho phép bạn thêm màu tùy chỉnh cho bất kỳ người dùng nào, ở bất cứ đâu! Rất khuyến khích sử dụng với TypingTweaks và roleColorEverywhere",
            option: {
                dmList: {
                    label: "Danh sách tin nhắn trực tiếp",
                    description: "Tên người dùng được gán màu đặc biệt sẽ được tô màu trong danh sách DM"
                },
                colorInServers: {
                    label: "Màu trên máy chủ",
                    description: "Có nên thay đổi màu tên trên máy chủ không?"
                }
            },
            context: {
                setColor: "Điều chỉnh màu"
            },
            modal: {
                custom: "Màu tùy chỉnh",
                pick: "chọn một màu",
                delete: "Xóa bản ghi",
                save: "Cứu"
            }
        },
        dearrow: {
            name: "thân yêu",
            description: "Làm cho tiêu đề và hình thu nhỏ nhúng của YouTube ít giật gân hơn, được cung cấp bởi Dearrow",
            option: {
                hideButton: {
                    label: "Nút Ẩn",
                    description: "Ẩn nút Dearrow khỏi nội dung nhúng trên YouTube"
                },
                replaceElements: {
                    label: "Thay đổi mục",
                    description: "Chọn thành phần nào của phần nhúng để thay thế",
                    everything: "Mọi thứ (Tiêu đề & Hình thu nhỏ)",
                    title: "Tiêu đề",
                    thumbnail: "Hình thu nhỏ"
                },
                dearrowByDefault: {
                    label: "Dearrow theo mặc định",
                    description: "Tự động thu nhỏ video"
                }
            },
            tooltip: {
                dearrowed: "Dearrow đã được áp dụng cho nội dung nhúng này, nhấp để khôi phục",
                dearrow: "Nhấn vào đây để áp dụng"
            }
        },
        declutter: {
            name: "dọn dẹp",
            description: "Dọn dẹp Discord bằng cách loại bỏ các thành phần UI không cần thiết như hiệu ứng hồ sơ, tab cửa hàng, tăng sức mạnh, v.v.",
            option: {
                userProfileHeader: {
                    label: "Hồ sơ người dùng"
                },
                removeNameplate: {
                    label: "Xóa bảng tên",
                    description: "Loại bỏ bảng tên."
                },
                removeProfileEffect: {
                    label: "Xóa hiệu ứng hồ sơ",
                    description: "Loại bỏ các hiệu ứng hoạt hình xuất hiện khi mở hồ sơ."
                },
                removeClanTag: {
                    label: "Xóa thẻ bang hội",
                    description: "Loại bỏ thẻ clan."
                },
                alwaysShowUsername: {
                    label: "Luôn hiển thị tên người dùng",
                    description: "Nó luôn hiển thị tên người dùng thay vì trạng thái."
                },
                accessibilityNotice: {
                    label: "Cảnh báo khả năng truy cập",
                    description: "Discord đã có sẵn tùy chọn kiểu tên người dùng trong cài đặt Trợ năng."
                },
                friendsListHeader: {
                    label: "Trên danh sách bạn bè/DM"
                },
                removeShopAboveDM: {
                    label: "Xóa cửa hàng trên danh sách DM",
                    description: "Xóa nút lưu trữ phía trên danh sách DM."
                },
                removeQuestsAboveDM: {
                    label: "Xóa nhiệm vụ khỏi danh sách DM",
                    description: "Xóa nút nhiệm vụ phía trên danh sách DM."
                },
                miscHeader: {
                    label: "Nhiều"
                },
                removeServerBoostInfo: {
                    label: "Xóa thông tin tăng cường máy chủ",
                    description: "Xóa thông tin củng cố máy chủ ở đầu danh sách kênh."
                },
                removeBillingSettings: {
                    label: "Xóa cài đặt thanh toán",
                    description: "Xóa cài đặt thanh toán (hóa đơn)."
                },
                removeGiftButton: {
                    label: "Nút xóa quà tặng",
                    description: "Loại bỏ nút gửi quà tặng."
                },
                removeUnavailableEmojiPicker: {
                    label: "Xóa Bộ chọn biểu tượng cảm xúc không khả dụng",
                    description: "Loại bỏ các danh mục không thể truy cập trong bộ chọn biểu tượng cảm xúc."
                },
                removeAudioMenus: {
                    label: "Xóa menu âm thanh",
                    description: "Loại bỏ các menu mũi tên bên cạnh nút tắt tiếng và điếc."
                },
                removeButtonTooltips: {
                    label: "Xóa gợi ý nút",
                    description: "Nó loại bỏ các chú giải công cụ xuất hiện trên các nút."
                }
            }
        },
        decodeBase64: {
            name: "Giải mãBase64",
            description: "Giải mã nội dung base64 của bất kỳ tin nhắn nào và sao chép nội dung được giải mã.",
            right: {
                decode: "Sao chép đã giải quyết (Nhấp chuột trái) / Giải quyết Base64 (Nhấp chuột phải)",
                copy: "Giải mã Base64 (Nhấp chuột trái) / Giải mã sao chép (Nhấp chuột phải)"
            },
            option: {
                clickMethod: {
                    label: "Bấm vào phương pháp",
                    description: "Thay đổi hành vi của nút để giải mã nội dung base64 của bất kỳ tin nhắn nào.",
                    left: "Nhấp chuột trái để giải mã nội dung Base64.",
                    right: "Nhấp chuột phải để giải mã nội dung Base64."
                }
            },
            modal: {
                title: "Nội dung Base64 được giải mã",
                content: "Nội dung hòa tan",
                copy: "Sao chép nội dung đã giải quyết {{index}}",
                copied: "Đã giải quyết nội dung được sao chép vào clipboard!"
            }
        },
        decor: {
            name: "Thiết kế nội thất",
            description: "Tạo và sử dụng trang trí hình đại diện tùy chỉnh của riêng bạn hoặc chọn mục yêu thích của bạn từ các cài đặt trước.",
            presetPart: "Một phần của cài đặt trước {{name}}",
            createdBy: "Được tạo bởi {{author}}",
            copy: "Sao chép ID đặt trước",
            file: "Tài liệu",
            your: {
                title: "đồ trang trí",
                subtitle: "Bạn có thể xóa đồ trang trí của riêng mình bằng cách nhấp chuột phải."
            },
            option: {
                changeDecoration: {
                    label: "Thay đổi đồ trang trí",
                    description: "Để thay đổi trang trí hình đại diện của bạn, hãy bật Trang trí và khởi động lại ứng dụng khách của bạn.",
                    also: "Bạn cũng có thể truy cập trang trí Trang trí từ trang {{profiles}}.",
                    profiles: "Hồ sơ"
                },
                baseUrl: {
                    label: "URL cơ sở",
                    description: "URL API trang trí"
                },
                agreedToGuidelines: {
                    label: "Tôi đã chấp nhận các quy tắc",
                    description: "Quy tắc được chấp nhận"
                }
            },
            context: {
                decorationOptions: "Tùy chọn trang trí",
                copyHash: "Sao chép băm trang trí",
                deleteDecoration: "Xóa trang trí"
            },
            alert: {
                delete: {
                    title: "Xóa trang trí",
                    body: "Bạn có chắc chắn muốn xóa trang trí {{trang trí}} không?",
                    confirm: "Sil",
                    cancel: "Hủy bỏ"
                },
                logout: {
                    title: "Đăng xuất",
                    body: "Bạn có chắc chắn muốn đăng xuất khỏi Dekor không?",
                    confirm: "Đăng xuất",
                    cancel: "Hủy bỏ"
                }
            },
            button: {
                change: "Thay đổi đồ trang trí",
                remove: "Xóa trang trí",
                apply: "Áp dụng",
                cancel: "Hủy bỏ",
                browse: "Duyệt qua",
                submit: "Gửi để xem xét",
                continue: "Devam Et",
                back: "Quay lại"
            },
            tooltip: {
                pendingReview: "Bạn đã có một đồ trang trí đang được xem xét",
                pending: "Đang chờ xem xét"
            },
            join: {
                tooltip: "Tham gia máy chủ Discord của Decor để xem lại trang trí của bạn và nhận thông báo khi các cài đặt trước mới được phát hành",
                button: "Máy chủ bất hòa"
            },
            create: {
                title: "Tạo đồ trang trí",
                notViolate: "Đảm bảo phần trang trí của bạn không vi phạm {{guidelines}} trước khi gửi.",
                guidelines: "quy tắc",
                file: "Tệp phải là PNG hoặc PNG.",
                fileHolder: "Chọn một tập tin",
                name: "Tên này sẽ được sử dụng khi đề cập đến vật trang trí này.",
                nameHolder: "Khối đồng hành",
                nameTitle: "Quảng cáo"
            },
            help: {
                update: "Tham gia {{server}} và cho phép tin nhắn trực tiếp nhận thông tin cập nhật về đánh giá trang trí của bạn.",
                server: "Trang trí bất hòa"
            },
            guidelines: {
                hold: "Chờ đợi",
                suspended: "Bằng cách gửi đồ trang trí, bạn đồng ý với {{guidelines}}. Việc không đọc các quy tắc này có thể dẫn đến việc bạn bị đình chỉ quyền tạo thêm đồ trang trí trong tương lai.",
                guidelines: "quy tắc"
            }
        },
        demonstration: {
            name: "Biểu tình",
            description: "Plugin chụp ảnh màn hình chủ đề - người kiểm duyệt xác định hình ảnh và văn bản.",
            toolbox: {
                toggle: "bị kiểm duyệt"
            },
            keycode: "Hãy xem {{keycode}} để thay đổi phím nóng của bạn!",
            this: "của chiếc xe này",
            okay: "Được rồi!",
            option: {
                keyBind: {
                    label: "Phím nóng",
                    description: "Nút sẽ bật và tắt chủ đề khi nhấn"
                },
                soundVolume: {
                    label: "Mức âm thanh",
                    description: "Âm lượng bật/tắt âm thanh (0 = tắt)"
                },
                showConfirmationModal: {
                    label: "Hiển thị cửa sổ xác nhận",
                    description: "Hiện cửa sổ nhắc nhở lối tắt"
                }
            },
            switch: {
                note: "Bạn có thể bật lại cài đặt này sau",
                disable: "Tắt cửa sổ xác nhận?"
            },
            shortcut: "Điều này sẽ kiểm duyệt tất cả các văn bản! Hãy nhớ phím tắt để tắt tính năng này:"
        },
        devCompanion: {
            name: "đồng hành cùng nhà phát triển",
            description: "Plugin trợ lý nhà phát triển. Nếu bạn thấy điều gì đó không hoạt động hoặc có hành động kỳ lạ (rất có thể là lỗi), hãy báo cáo điều đó cho MutanPlex, gắn thẻ hoặc gửi tin nhắn cho nó, cảm ơn!",
            reconnect: "Kết nối lại",
            option: {
                notifyOnAutoConnect: {
                    label: "Thông báo về Tự động kết nối",
                    description: "Hiển thị thông báo khi Dev Companion tự động kết nối?"
                },
                usePatchedModule: {
                    label: "Sử dụng mô-đun bản vá",
                    description: "Đối với các yêu cầu xóa, hãy phản hồi bằng mô-đun đã vá hiện có (nếu được vá) thay vì mô-đun gốc."
                },
                reloadAfterToggle: {
                    label: "Sau khi cài đặt lại",
                    description: "Cài đặt lại sau khi nhận được lệnh tắt/bật plugin."
                }
            },
            toast: {
                title: "Đã kết nối đồng hành với nhà phát triển",
                connected: "đã kết nối với WebSocket",
                disconnected: "Đồng hành Dev bị ngắt kết nối",
                error: "Lỗi đồng hành với Dev",
                reload: "Yêu cầu cài đặt lại",
                failed: "Không khởi tạo được phần phụ thuộc: {{failures}}",
                close: "Một phần tư",
                stopping: "Lỗi dừng plugin {{plugin}}",
                starting: "Lỗi khi khởi tạo plugin {{plugin}}",
                noMessage: "Không có thông báo lỗi",
                noReason: "Lý do không được cung cấp"
            }
        },
        disableCallIdle: {
            name: "Vô hiệu hóa cuộc gọi không hoạt động",
            description: "Tắt tính năng tự động thoát khỏi cuộc gọi thoại DM sau 3 phút và chuyển sang kênh thoại AFK."
        },
        disableCameras: {
            name: "Vô hiệu hóa Máy ảnh",
            description: "Theo mặc định, tắt camera trong cuộc gọi"
        },
        discordDevBanner: {
            name: "DiscordDevBiểu ngữ",
            description: "Bật biểu ngữ nhà phát triển Discord hiển thị thông tin Build-ID.",
            about: "Định dạng biểu ngữ dành cho nhà phát triển Discord. Bạn có thể sử dụng các biến sau:",
            preview: "Xem trước:",
            empty: "Định dạng không được để trống.",
            variables: {
                discord: {
                    title: "Biến bất hòa",
                    icon: "Biểu tượng bất hòa",
                    banner: "Biểu tượng biểu ngữ dành cho nhà phát triển",
                    channel: "Kênh xây dựng Discord (ví dụ: Ổn định)",
                    build: "Số bản dựng Discord (ví dụ: 123456)",
                    hash: "Hàm băm xây dựng Discord (ví dụ: 123456)"
                },
                plexcord: {
                    title: "Biến Plexcord",
                    icon: "Biểu tượng Plexcord",
                    name: "Tên Plexcord",
                    version: "Phiên bản Plexcord (ví dụ: 1.0.0)",
                    hash: "Băm cấu trúc Plexcord (ví dụ: 123456)",
                    platform: "Nền tảng Plexcord chạy trên (ví dụ: Dev Build)"
                },
                plextron: {
                    title: "Biến tùy chỉnh Plextron",
                    hashShort: "Hàm băm cấu trúc ngắn Plextron (ví dụ: 123456789)",
                    platformType: "Loại nền tảng Plextron chạy trên (ví dụ: Dev Build)"
                },
                client: {
                    title: "Biến khách hàng",
                    icon: "biểu tượng máy tính để bàn",
                    name: "Tên khách hàng (ví dụ: Discord Canary)",
                    version: "Phiên bản máy khách (ví dụ: 1.0.0)",
                },
                electron: {
                    title: "Biến điện tử",
                    icon: "biểu tượng điện tử",
                    version: "Phiên bản điện tử (ví dụ: 25.0.0)"
                },
                chromium: {
                    title: "Biến crom",
                    icon: "biểu tượng crom",
                    version: "Phiên bản công cụ Chrome (ví dụ: 125.0.0.0)"
                },
                misc: {
                    title: "Các biến khác",
                    newline: "ký tự dòng mới"
                }
            }
        },
        dontFilterMe: {
            name: "ĐừngFilterMe",
            description: "Cảnh báo bạn nếu tin nhắn của bạn chứa một thuật ngữ nằm trong danh sách sẵn sàng tự động kiểm duyệt",
            alert: {
                title: "Đợi một chút!",
                content: "Thư của bạn có chứa một thuật ngữ nằm trong danh sách sẵn sàng kiểm duyệt tự động. (Thuật ngữ '{{kích hoạt}}')",
                content2: "Khả năng cao tin nhắn của bạn sẽ bị người kiểm duyệt máy chủ chặn và xử lý.",
                confirm: "Vẫn gửi",
                cancel: "Hủy bỏ"
            }
        },
        dontRoundMyTimestamps: {
            name: "DontRoundMyTimestamps",
            description: "Luôn làm tròn dấu thời gian tương đối xuống để 7,6y trở thành 7y thay vì 8y"
        },
        dragFavoriteEmotes: {
            name: "KéoYêu thíchBiểu tượng cảm xúc",
            description: "Thêm tính năng kéo và thả để thay đổi thứ tự các biểu tượng cảm xúc yêu thích"
        },
        dragify: {
            name: "Kéo",
            description: "Kéo và thả người dùng, kênh hoặc người thuyết trình vào cuộc trò chuyện để thêm đề cập hoặc lời mời.",
            option: {
                userOutput: {
                    label: "Đầu ra của người dùng",
                    description: "Đầu ra bỏ học của người dùng.",
                    mention: "đừng đề cập đến",
                    id: "Danh tính người dùng (ID)"
                },
                channelOutput: {
                    label: "Đầu ra kênh",
                    description: "Đầu ra phát hành kênh.",
                    mention: "#channel Đề cập",
                    link: "Kết nối kênh",
                },
                inviteExpireAfter: {
                    label: "Thời lượng lời mời",
                    description: "Thời hạn hiệu lực của liên kết lời mời.",
                    never: "Không bao giờ",
                    thirtyMinutes: "30 phút",
                    oneHour: "1 khoảnh khắc",
                    sixHours: "6 khoảnh khắc",
                    twelveHours: "12 khoảnh khắc",
                    oneDay: "1 ngày",
                    sevenDays: "7 ngày"
                },
                inviteMaxUses: {
                    label: "Số lần sử dụng tối đa",
                    description: "Giới hạn sử dụng tối đa của lời mời.",
                    noLimit: "Không giới hạn",
                    one: "1 Cách sử dụng",
                    five: "5 Cách sử dụng",
                    ten: "10 Cách sử dụng",
                    twentyFive: "25 Cách sử dụng",
                    fifty: "50 công dụng",
                    hundred: "100 công dụng"
                },
                inviteTemporaryMembership: {
                    label: "Cung cấp tư cách thành viên tạm thời",
                    description: "Nó cấp quyền thành viên tạm thời cho những người được mời.",
                },
                reuseExistingInvites: {
                    label: "Sử dụng lại lời mời hiện có",
                    description: "Nó sử dụng lời mời hiện có thay vì tạo lời mời mới."
                },
                allowChatBodyDrop: {
                    label: "Cho phép thả vào nội dung trò chuyện",
                    description: "Cho phép thả văn bản trực tiếp vào khu vực trò chuyện để thêm vào."
                }
            },
            toast: {
                failed: {
                    drop: "Dragify không thể thực hiện thao tác.",
                },
                invite: {
                    created: "Lời mời đã được tạo.",
                    unable: "Không thể tạo lời mời.",
                    noChannel: "Không có kênh nào để tạo lời mời.",
                }
            },
            ghost: {
                user: "người dùng",
                server: "Người trình bày",
                dm: "Tin nhắn trực tiếp",
                badge: {
                    channel: "kênh",
                    thread: "tiêu đề",
                    voice: "ses",
                    forum: "diễn đàn",
                    media: "phương tiện truyền thông",
                    announcement: "thông báo",
                    dm: "dm",
                    user: "người dùng",
                    server: "người dẫn chương trình"
                }
            }
        },
        elementHighlighter: {
            name: "phần tử tô sáng",
            description: "Dễ dàng đánh dấu và kiểm tra các mục.",
            modal: {
                recording: "Đang ghi...",
                reset: "cài lại"
            },
            option: {
                keybind: {
                    label: "Bài tập chính",
                    description: "Chuyển đổi công cụ đánh dấu"
                },
                showClasses: {
                    label: "Hiển thị lớp học",
                    description: "Hiển thị tên lớp CSS của phần tử trong chú giải công cụ"
                },
                showId: {
                    label: "Hiển thị ID",
                    description: "Hiển thị thuộc tính ID của phần tử trong chú giải công cụ"
                },
                showFont: {
                    label: "Hiển thị phông chữ",
                    description: "Hiển thị họ và kích thước phông chữ được tính toán"
                },
                showPadding: {
                    label: "Hiển thị phần đệm",
                    description: "Hiển thị các giá trị khoảng cách bên trong của phần tử"
                },
                showMargin: {
                    label: "Hiển thị lề ngoài",
                    description: "Hiển thị các giá trị không gian bên ngoài của phần tử"
                },
                showBorderRadius: {
                    label: "Hiển thị độ tròn của cạnh",
                    description: "Hiển thị giá trị bán kính đường viền của phần tử"
                },
                showPosition: {
                    label: "Hiển thị vị trí",
                    description: "Hiển thị loại vị trí CSS và giá trị chỉ mục z của phần tử"
                },
                showDisplay: {
                    label: "Hiển thị chế độ xem",
                    description: "Hiển thị kiểu xem của phần tử cùng với thuộc tính flex hoặc lưới của nó"
                }
            },
            toast: {
                copied: {
                    color: "Đã sao chép màu vào clipboard!",
                }
            }
        },
        exitSounds: {
            name: "ThoátÂm thanh",
            description: "Khi bạn rời khỏi kênh âm thanh, âm thanh sẽ phát từ bảng âm thanh.",
            button: "Đặt làm âm thanh đầu ra chung",
            toast: {
                failedToPlay: "Chúa ơi, không! Đã xảy ra lỗi."
            },
            option: {
                soundGuildId: {
                    label: "Nhận dạng máy chủ thoại (ID)",
                    description: "Chọn máy chủ nơi chứa âm thanh.",
                    placeholder: "Chọn máy chủ..."
                },
                soundId: {
                    label: "Nhận dạng giọng nói (ID)",
                    description: "Nhập ID của âm thanh bạn muốn phát.",
                    placeholder: "Nhập ID giọng nói..."
                }
            }
        },
        experiments: {
            name: "Thí nghiệm",
            description: "Cung cấp quyền truy cập vào Thử nghiệm và các tính năng khác chỉ dành cho nhà phát triển trong Discord!",
            modal: {
                about: {
                    title: "Thêm thông tin",
                    body: "Bạn có thể mở Công cụ dành cho nhà phát triển của Discord bằng {{key}}"
                },
                warning: {
                    title: "Chú ý!!",
                    body: "Thử nghiệm là các tính năng Discord chưa được phát hành. Chúng có thể không hoạt động hoặc thậm chí có thể làm hỏng ứng dụng khách của bạn hoặc khiến tài khoản của bạn bị vô hiệu hóa.",
                    notReponsible: "Chỉ sử dụng các thử nghiệm nếu bạn biết bạn đang làm gì. Plexcord không chịu trách nhiệm về bất kỳ thiệt hại nào có thể xảy ra khi kích hoạt thử nghiệm.",
                    useAtOwnRisk: "Nếu bạn không biết thử nghiệm làm gì, hãy bỏ qua nó. Đừng hỏi chúng tôi họ làm gì, có lẽ chúng tôi cũng không biết.",
                    serverSideFeatures: "Không, bạn không thể sử dụng các tính năng phía máy chủ như đánh dấu vào ô 'Gửi cho Khách hàng'."
                }
            },
            option: {
                toolbarDevMenu: {
                    label: "Menu nhà phát triển thanh công cụ",
                    description: "Thay thế nút thanh công cụ trợ giúp (?) (trên cùng bên phải của trò chuyện) bằng menu nhà phát triển của Discord"
                }
            }
        },
        exportMessages: {
            name: "Xuất tin nhắn",
            description: "Cho phép bạn xuất tin nhắn thành tập tin - một tin nhắn, tất cả tin nhắn của một người dùng hoặc tất cả tin nhắn của một kênh",
            option: {
                maxMessages: {
                    label: "Tin nhắn tối đa",
                    description: "Số lượng tin nhắn tối đa cần chuyển (0 = không giới hạn)"
                },
                includeAttachments: {
                    label: "Bao gồm tệp đính kèm",
                    description: "Bao gồm thông tin đính kèm trong chuyển khoản"
                },
                includeEmbeds: {
                    label: "Embedleri Dahil Et",
                    description: "Bao gồm thông tin nhúng trong chuyển khoản"
                },
                includeReactions: {
                    label: "Bao gồm các phản ứng",
                    description: "Bao gồm thông tin phản ứng trong chuyển giao"
                },
                includeComponents: {
                    label: "Bao gồm các thành phần",
                    description: "Bao gồm thông tin thành phần trong nhập khẩu"
                }
            },
            message: {
                invalid: "Tin nhắn không hợp lệ - không có tác giả",
                unknownUser: "Người dùng không xác định",
                botEmbed: "Tin nhắn nhúng Bot",
                attachments: "tệp đính kèm",
                unknown: "Không xác định",
                noUrl: "không có URL",
                embeds: "Trình nhúng",
                title: "Tiêu đề",
                description: "Giải thích",
                url: "URL",
                footer: "thay thế",
                author: "Nhà văn",
                fields: "Trường",
                components: "Linh kiện",
                component: "Thành phần",
                interactiveElement: "Yếu tố tương tác",
                reactions: "phản ứng",
                errorFormatting: "Thông báo lỗi định dạng",
                unknownError: "lỗi không xác định",
                header: "{{titlePrefix}} {{displayName}}, {{channelName}} kanalında",
                from: "Tin nhắn -",
                direct: "Tin nhắn trực tiếp",
                exported: "Ngày xuất",
                total: "Tổng số tin nhắn"
            },
            toast: {
                export: {
                    title: "Xuất tin nhắn",
                    body: "Xuất tin nhắn không thành công"
                },
                noMessages: {
                    title: "Xuất tin nhắn",
                    notFoundUser: "Không tìm thấy tin nhắn cho người dùng này",
                    notFoundChannel: "Không tìm thấy tin nhắn nào trong kênh này"
                },
                failed: {
                    title: "Xuất tin nhắn",
                    body: "Đã xảy ra lỗi khi xuất tin nhắn"
                },
                userNotFound: {
                    title: "Xuất tin nhắn",
                    body: "Không tìm thấy người dùng"
                },
                complete: {
                    title: "Đã xuất xong",
                    saved: "Đã lưu tệp",
                    downloaded: "Tệp đã tải xuống",
                    messages: "tin nhắn"
                }
            },
            context: {
                exportMessage: "Xuất tin nhắn này",
                exportAll: "Xuất tất cả tin nhắn của {{user}}",
                user: "người dùng",
                exportAllChannel: "Xuất tất cả tin nhắn của kênh"
            }
        },
        expressionCloner: {
            name: "Biểu thức nhân bản",
            description: "Cho phép bạn sao chép Biểu tượng cảm xúc và Nhãn dán vào máy chủ của riêng bạn (nhấp chuột phải)",
            modal: {
                title: "Danh từ riêng",
                invalidName: "Tên phải dài từ 2 đến 32 ký tự và chỉ chứa các ký tự chữ và số"
            },
            toast: {
                success: "{{name}} đã được sao chép thành công vào máy chủ {{guild}}!",
                yourServer: "máy chủ của bạn",
                failed: "Nhân bản không thành công:",
                console: "Đã xảy ra lỗi (kiểm tra bảng điều khiển!)"
            },
            context: {
                clone: "{{type}} Bản sao",
                cloneName: "{{dữ liệu}} Bản sao"
            }
        },
        f8break: {
            name: "F8Nghỉ",
            description: "Khi DevTools (+ điểm dừng) mở, việc nhấn F8 sẽ tạm dừng ứng dụng khách."
        },
        fakeNitro: {
            name: "Nitro giả",
            description: "Cho phép bạn gửi biểu tượng cảm xúc/nhãn dán giả, sử dụng chủ đề nitro và phát trực tuyến với chất lượng nitro",
            option: {
                enableEmojiBypass: {
                    label: "Bật bỏ qua biểu tượng cảm xúc",
                    description: "Cho phép gửi biểu tượng cảm xúc giả (cũng bỏ qua việc thiếu quyền sử dụng biểu tượng cảm xúc tùy chỉnh)"
                },
                emojiSize: {
                    label: "Kích thước biểu tượng cảm xúc",
                    description: "Kích thước sử dụng khi gửi biểu tượng cảm xúc"
                },
                transformEmojis: {
                    label: "Chuyển đổi biểu tượng cảm xúc",
                    description: "Xác định xem biểu tượng cảm xúc giả có được chuyển đổi thành biểu tượng cảm xúc thật hay không"
                },
                enableStickerBypass: {
                    label: "Bật hình dán Bỏ qua",
                    description: "Cho phép gửi nhãn dán giả (cũng bỏ qua việc thiếu quyền sử dụng nhãn dán)"
                },
                stickerSize: {
                    label: "Kích thước nhãn dán",
                    description: "Kích thước sử dụng khi gửi nhãn dán"
                },
                transformStickers: {
                    label: "Chuyển đổi nhãn dán",
                    description: "Xác định xem nhãn dán giả có được chuyển đổi thành nhãn dán thật hay không"
                },
                transformCompoundSentence: {
                    label: "Chuyển đổi câu ghép",
                    description: "Xác định xem biểu tượng cảm xúc và hình dán giả trong câu ghép (các câu chứa nhiều nội dung hơn chỉ liên kết biểu tượng cảm xúc hoặc hình dán giả) có được chuyển đổi hay không"
                },
                enableStreamQualityBypass: {
                    label: "Bật bỏ qua chất lượng phát sóng",
                    description: "Cho phép phát trực tuyến ở chất lượng nitro"
                },
                useStickerHyperLinks: {
                    label: "Sử dụng cầu dán nhãn dán",
                    description: "Xác định xem có nên sử dụng siêu liên kết khi gửi nhãn dán giả mạo hay không"
                },
                useEmojiHyperLinks: {
                    label: "Sử dụng cầu nối biểu tượng cảm xúc",
                    description: "Xác định xem có nên sử dụng siêu liên kết khi gửi biểu tượng cảm xúc giả mạo hay không"
                },
                hyperLinkText: {
                    label: "siêu văn bản",
                    description: "Văn bản sẽ sử dụng trong siêu liên kết. {{NAME}} sẽ được thay thế bằng tên biểu tượng cảm xúc/nhãn dán."
                },
                disableEmbedPermissionCheck: {
                    label: "Tắt kiểm tra quyền nhúng",
                    description: "Xác định xem có tắt tính năng kiểm tra quyền nhúng khi gửi biểu tượng cảm xúc và nhãn dán giả hay không"
                }
            },
            modal: {
                sticker: "Đây là nhãn dán FakeNitro và nó trông giống như nhãn dán thực sự chỉ dành cho bạn. Nó xuất hiện dưới dạng liên kết dành cho những người không sử dụng plugin.",
                emoji: "Đây là biểu tượng cảm xúc FakeNitro và nó trông giống như biểu tượng cảm xúc thực sự chỉ dành cho bạn. Nó xuất hiện dưới dạng liên kết dành cho những người không sử dụng plugin."
            },
            alert: {
                notice: {
                    title: "Chú ý!",
                    body: "Bạn đang cố gắng gửi/chỉnh sửa tin nhắn có chứa biểu tượng cảm xúc hoặc nhãn dán FakeNitro nhưng bạn không có quyền nhúng liên kết vào kênh này. Bạn có chắc chắn muốn gửi tin nhắn này? Các mục FakeNitro của bạn sẽ chỉ xuất hiện dưới dạng liên kết.",
                    footer: "Bạn có thể tắt cảnh báo này trong cài đặt FakeNitro",
                    confirm: "Vẫn gửi",
                    cancel: "Hủy bỏ",
                    secondaryConfirm: "Đừng hiện lại lần nữa"
                },
                apngSticker: {
                    title: "Chú ý!",
                    body: "Bạn không thể gửi tin nhắn này vì nó chứa nhãn dán FakeNitro hoạt hình và bạn không có quyền thêm tệp vào kênh này. Bạn phải gỡ bỏ nhãn dán để tiếp tục."
                }
            }
        },
        fakeProfileThemes: {
            name: "Chủ đề FakeProfile",
            description: "Cung cấp chủ đề hồ sơ; Nó thêm các màu ẩn vào sinh học nhờ mã hóa 3y3 vô hình.",
            button: {
                copy: "Sao chép 3y3"
            },
            modal: {
                usage: "Sử dụng",
                preview: "Xem trước",
                intro: "Khi bạn kích hoạt plugin này, bạn sẽ thấy màu tùy chỉnh trên hồ sơ của những người khác sử dụng plugin tương thích.",
                setColor: "Để đặt màu của riêng bạn:",
                step1: "• chọn màu của bạn bằng cách sử dụng bộ chọn màu bên dưới",
                step2: "• Nhấp vào nút {{copy}}",
                step3: "• dán văn bản vô hình vào bất cứ đâu trong phần giới thiệu",
                pickers: "Bộ chọn màu",
                primary: "Sơ đẳng",
                accent: "Nhấn mạnh"
            },
            option: {
                nitroFirst: {
                    label: "Nitro đầu tiên",
                    description: "Nguồn màu mặc định nếu cả hai đều có sẵn",
                    nitro: "Màu nitơ",
                    fake: "màu sắc giả"
                }
            }
        },
        fakeProfileThemesAndEffects: {
            name: "FakeProfileThemeAndEffects",
            description: "Cho phép bạn thêm chủ đề hồ sơ và hiệu ứng hồ sơ; Nhờ mã hóa 3y3 vô hình, các màu sắc và hiệu ứng ẩn sẽ được thêm vào tiểu sử.",
            option: {
                prioritizeNitro: {
                    label: "Ưu tiên Nitro",
                    description: "Nguồn lực cần ưu tiên",
                    nitro: "Nitơ",
                    aboutMe: "về tôi"
                },
                hideBuilder: {
                    label: "Ẩn người sáng tạo",
                    description: "Ẩn FPTE Creator trong trang cài đặt Hồ sơ người dùng và Hồ sơ máy chủ"
                }
            },
            modal: {
                primary: "Sơ đẳng",
                accent: "Nhấn mạnh",
                effect: "Tác dụng",
                usage: {
                    title: "Sử dụng",
                    intro: "Khi bạn kích hoạt plugin này, bạn sẽ thấy màu sắc và hiệu ứng chủ đề tùy chỉnh trên hồ sơ của những người khác sử dụng plugin này.",
                    setColor: "Để đặt màu sắc và hiệu ứng của riêng bạn:",
                    step1: "Đi tới cài đặt hồ sơ",
                    step2: "Sử dụng FPTE Creator để chọn màu sắc và hiệu ứng chủ đề hồ sơ",
                    step3: "Nhấp vào nút {{copy}}",
                    step4: "Dán văn bản vô hình vào bất cứ nơi nào bạn muốn trong tiểu sử của mình"
                }
            },
            toast: {
                copied: "FPTE đã sao chép vào clipboard!",
                empty: "Máy phát điện FPTE trống; Không có gì để sao chép!"
            },
            button: {
                copyFPTE: "Bản sao FPTE",
                reset: "cài lại",
                preview: "Bản xem trước của FPTE Creator",
                buildBackwards: "Tạo FPTE tương thích ngược",
                moreCharacters: "Nhiều ký tự hơn sẽ được sử dụng"
            }
        },
        fastDeleteChannels: {
            name: "Xóa nhanhKênh",
            description: "Thêm biểu tượng thùng rác để xóa kênh",
            option: {
                keyBind: {
                    label: "Phím nóng",
                    description: "Chìa khóa dùng để mở và đóng thùng rác."
                },
                reqCtrl: {
                    label: "Cần có phím Ctrl",
                    description: "Yêu cầu giữ phím Ctrl để mở thùng rác."
                },
                reqShift: {
                    label: "Cần có phím Shift",
                    description: "Mở thùng rác yêu cầu giữ phím Shift."
                },
                reqAlt: {
                    label: "Cần có phím Alt",
                    description: "Mở thùng rác yêu cầu giữ phím Alt."
                }
            }
        },
        favoriteEmojiFirst: {
            name: "Biểu tượng cảm xúc yêu thíchĐầu tiên",
            description: "Nó đặt biểu tượng cảm xúc yêu thích của bạn ở đầu danh sách tự động hoàn thành biểu tượng cảm xúc và cũng cung cấp biệt hiệu biểu tượng cảm xúc.",
            option: {
                aliases: {
                    label: "Biệt danh",
                    description: "Quản lý biệt hiệu biểu tượng cảm xúc của bạn."
                },
                clearAll: {
                    label: "Xóa tất cả",
                    description: "Xóa tất cả biệt hiệu."
                }
            },
            modal: {
                clear: {
                    title: "Xóa tất cả bí danh",
                    description: "Thao tác này sẽ xóa mọi biệt hiệu biểu tượng cảm xúc mà bạn đã lưu.",
                    confirm: "Xóa tất cả biệt danh"
                },
                set: {
                    title: "Đặt biệt hiệu",
                    description: "Đặt biệt hiệu cho {{emoji}}",
                    placeholder: "Biệt hiệu, ví dụ: 'Vui mừng'",
                    save: "Cứu",
                    error: "Biệt hiệu trùng lặp"
                }
            },
            toast: {
                set: "Biệt hiệu được đặt cho {{emoji}}",
                clearAll: "Tất cả biệt hiệu biểu tượng cảm xúc đã bị xóa",
                failedDeleted: "Xóa bí danh không thành công",
                removed: "​​Bí danh cho {{alias}} đã bị xóa",
                failedRemove: "Xóa bí danh không thành công",
                duplicate: "Biệt hiệu trùng lặp",
                failedSave: "Không thể đăng ký biệt hiệu"
            },
            button: {
                edit: "Chỉnh sửa biệt hiệu",
                set: "Đặt biệt hiệu"
            }
        },
        favoriteGifSearch: {
            name: "Yêu thíchGifTìm kiếm",
            description: "Thêm thanh tìm kiếm vào ảnh GIF yêu thích.",
            placeholder: "Tìm kiếm ảnh GIF yêu thích",
            option: {
                searchOption: {
                    label: "Tùy chọn tìm kiếm",
                    description: "Phần nào của URL bạn muốn tìm kiếm",
                    url: "Tất cả URL",
                    path: "Chỉ đường dẫn (/somegif.gif)",
                    hostandpath: "Máy chủ và đường dẫn (tenor.com somegif.gif)"
                }
            }
        },
        favouriteAnything: {
            name: "Yêu thíchBất cứ điều gì",
            description: "Yêu thích bất kỳ hình ảnh"
        },
        fileDownloadButton: {
            name: "Nút Tải xuống Tệp",
            description: "Thêm nút tải xuống vào góc trên bên phải của tệp"
        },
        findReply: {
            name: "Tìm câu trả lời",
            description: "Chuyển tới câu trả lời cũ nhất cho tin nhắn trong một kênh (giúp theo dõi các cuộc hội thoại trước đây dễ dàng hơn).",
            context: {
                jump: "Đi tới Trả lời"
            },
            toast: {
                navigate: "Sử dụng bảng điều khiển phía dưới để điều hướng qua các câu trả lời.",
                container: "Không tìm thấy phần tử vùng chứa.",
                couldntFind: "Không tìm thấy tin nhắn phản hồi."
            },
            option: {
                includePings: {
                    label: "Bao gồm các đề cập",
                    description: "Nó cũng tìm kiếm các tin nhắn được gửi trực tiếp đến tác giả."
                },
                includeAuthor: {
                    label: "Bao gồm tác giả",
                    description: "Tìm kiếm câu trả lời không chỉ cho bài viết cụ thể mà còn cho tác giả nói chung"
                },
                hideButtonIfNoReply: {
                    label: "Nút Ẩn Nếu Không Phản Hồi",
                    description: "Ẩn nút nếu không có phản hồi cho tin nhắn"
                }
            }
        },
        fixCodeblockGap: {
            name: "FixCodeblockGap",
            description: "Xóa khoảng cách giữa các khối mã và văn bản bên dưới chúng"
        },
        fixFileExtensions: {
            name: "FixFileExtensions",
            description: "Sửa các phần mở rộng tệp bằng cách đổi tên chúng thành định dạng được hỗ trợ tương thích nếu có thể"
        },
        fixImagesQuality: {
            name: "FixHình ảnhChất lượng",
            description: "Cải thiện chất lượng hình ảnh bằng cách buộc sử dụng nguồn gốc",
            option: {
                originalImagesInChat: {
                    label: "Hiển thị hình ảnh gốc trong trò chuyện",
                    description: "Đồng thời hiển thị hình ảnh gốc trong Trò chuyện. CẢNH BÁO: Đọc các cảnh báo ở trên"
                }
            },
            modal: {
                about: {
                    title: "Hành vi mặc định như sau:",
                    body: "&mdash; Hình ảnh được tối ưu hóa nhưng có độ phân giải đầy đủ sẽ được tải trong cuộc trò chuyện.",
                    body2: "&mdash; Trong cửa sổ hình ảnh (phương thức hình ảnh), hình ảnh gốc sẽ được tải.",
                    body3: "Bạn cũng có thể bật hình ảnh gốc trong cuộc trò chuyện nhưng hãy lưu ý những điều sau:",
                    warning: "&mdash; Hình ảnh động (GIF, WebP, v.v.) trong trò chuyện sẽ luôn ở dạng động, ngay cả khi ứng dụng có tiêu điểm.",
                    warning2: "&mdash; Nó có thể gây ra vấn đề về hiệu suất."
                }
            }
        },
        fixSpotifyEmbeds: {
            name: "FixSpotifyNhúng",
            description: "Sửa lỗi nhúng Spotify quá to, cho phép bạn tùy chỉnh âm lượng",
            option: {
                volume: {
                    label: "Mức âm thanh",
                    description: "Phần trăm âm lượng để điều chỉnh cho nội dung nhúng Spotify. Trên 10% sẽ là quá cao"
                }
            }
        },
        fixYoutubeEmbeds: {
            name: "Sửa chữaYoutubeNhúng",
            description: "Bỏ qua việc chặn xem video YouTube trong Discord (ví dụ: bởi UMG)"
        },
        followUser: {
            name: "Theo dõiNgười dùng",
            description: "Thêm tùy chọn theo dõi vào menu ngữ cảnh của người dùng; đảm bảo bạn luôn ở trên cùng một kênh thoại",
            indicatorTooltip: "{{user}} đang được theo dõi (nhấp để kích hoạt thủ công, nhấp chuột phải để hủy theo dõi)",
            unknownUser: "Người dùng không xác định",
            option: {
                executeOnFollow: {
                    label: "Áp dụng khi bạn theo dõi",
                    description: "Khi theo dõi người dùng, hãy đảm bảo họ ở trên cùng một kênh thoại"
                },
                onlyManualTrigger: {
                    label: "Chỉ kích hoạt thủ công",
                    description: "Chỉ kích hoạt khi nhấp vào chỉ báo"
                },
                followLeave: {
                    label: "Khi Theo Lá",
                    description: "Khi người dùng được theo dõi rời đi, hãy rời đi"
                },
                autoMoveBack: {
                    label: "Tự động di chuyển trở lại",
                    description: "Tự động chuyển về kênh thoại của người dùng đang theo dõi khi bạn di chuyển"
                },
                followUserId: {
                    label: "ID người dùng đã theo dõi",
                    description: "ID người dùng đã theo dõi"
                },
                channelFull: {
                    label: "Kênh đầy đủ",
                    description: "Nếu kênh không còn đầy nữa, hãy thử chuyển bạn đến đó"
                }
            },
            toast: {
                channelFull: "kênh đầy đủ",
                newVc: "Người dùng được theo dõi đã chuyển sang kênh thoại mới",
                insufficientPermissions: "Không đủ quyền để vào kênh thoại",
                sameVc: "Bạn đã ở trên cùng một kênh",
                disconnect: "Người dùng đã theo dõi đã rời khỏi, đã ngắt kết nối",
                notFollowing: "Người dùng được theo dõi đã rời đi nhưng bạn không hủy theo dõi",
                notVc: "Người dùng được theo dõi không có trên kênh thoại"
            },
            context: {
                follow: "Theo",
                unfollow: "Hủy theo dõi"
            }
        },
        fontLoader: {
            name: "Trình tải phông chữ",
            description: "Cài đặt bất kỳ phông chữ nào qua Google Fonts",
            option: {
                selectedFont: {
                    label: "Phông chữ đã chọn",
                    description: "Phông chữ hiện được chọn"
                },
                fontSearch: {
                    label: "Tìm kiếm phông chữ",
                    description: "Tìm kiếm và chọn font chữ qua Google Fonts"
                },
                applyOnCodeBlocks: {
                    label: "Áp dụng cho khối mã",
                    description: "Áp dụng phông chữ cho khối mã"
                }
            },
            toast: {
                failedLoad: "Không tải được phông chữ"
            },
            modal: {
                settings: {
                    title: "Google Fonts'ta Ara",
                    description: "Chọn một phông chữ để áp dụng",
                    placeholder: "Tìm kiếm phông chữ...",
                    previewText: "Bệnh nhân mặc đồ ngủ nhanh chóng tin tưởng tài xế dầu nhớt",
                    authors: "bởi {{tác giả}}"
                }
            }
        },
        forceOwnerCrown: {
            name: "BuộcChủ Sở HữuVương Miện",
            description: "Ngay cả khi máy chủ lớn, nó vẫn buộc hiển thị vương miện của chủ sở hữu máy chủ bên cạnh tên người dùng."
        },
        forwardAnywhere: {
            name: "Chuyển tiếp mọi nơi",
            description: "Nếu chuyển tiếp không thành công, nó sẽ gửi tin nhắn như một tin nhắn bình thường; Nó cũng cho phép truyền tải nội dung NSFW.",
            option: {
                forwardPreface: {
                    label: "Tiền tố chuyển tiếp",
                    description: "Câu lệnh nào nên được thêm vào phần đầu của tin nhắn được truyền đi?"
                }
            },
            context: {
                attachments: "tệp đính kèm",
                forwarded: "Được chuyển tiếp từ:"
            }
        },
        freaky: {
            name: "kỳ dị",
            description: "Lệnh /freaky cho phép bạn gửi tin nhắn bằng phông chữ lạ.",
            command: {
                freaky: "Thật kỳ lạ.",
                message: "Gửi tin nhắn của bạn bằng phông chữ lạ"
            },
            option: {
                addFreakyEnding: {
                    label: "Thêm cái kết kỳ lạ",
                    description: "Thêm 👅 hoặc ❤️ vào cuối"
                }
            }
        },
        frequentQuickSwitcher: {
            name: "Bộ chuyển đổi nhanh thường xuyên",
            description: "Nó thay thế và lọc kết quả trong cửa sổ chuyển đổi nhanh bằng các kênh bạn sử dụng thường xuyên nhất."
        },
        friendCloud: {
            name: "Bạn BèĐám Mây",
            description: "Thêm lệnh /friendcloud để trực quan hóa những người dùng mà bạn tương tác nhiều nhất.",
            command: {
                friendcloud: {
                    description: "Hình dung đám mây bạn bè của bạn",
                    count: "Số lượng người dùng hiển thị",
                    mustHigher: "Số phải bằng 1 hoặc cao hơn!",
                    noAffinities: "Không tìm thấy dữ liệu lân cận. Kiểm tra [cài đặt quyền riêng tư](<https://support.discord.com/hc/en-us/articles/21864805694999-Data-Used-to-Improve-Discord>).",
                    noValid: "Không tìm thấy người dùng hợp lệ trong proxy. Kiểm tra [cài đặt quyền riêng tư](<https://support.discord.com/hc/en-us/articles/21864805694999-Data-Used-to-Improve-Discord>).",
                    genFailed: "Không thể tạo được hình ảnh :c"
                }
            }
        },
        friendCodes: {
            name: "Mã bạn bè",
            description: "Tạo Mã Bạn bè để dễ dàng thêm bạn bè",
            card: {
                expires: "Hết hạn: <t:{{expiration}}:R> • Mức sử dụng {{uses}}/{{maxUses}}",
                copy: "sao chép",
                copied: "Đã sao chép!",
                codes: "Mã tình bạn của bạn",
                count: "Mã bạn bè - {{invites}}",
                create: "Tạo mã tình bạn",
                revoke: "Hủy tất cả mã bạn bè",
                loading: "Đang tải...",
                dontHave: "Bạn không có bất kỳ mã bạn bè nào."
            }
        },
        friendInvites: {
            name: "Lời mời bạn bè",
            description: "Tạo và quản lý các liên kết mời bạn bè bằng các lệnh Slash (/tạo lời mời kết bạn,/xem lời mời kết bạn,/thu hồi lời mời kết bạn).",
            command: {
                create: {
                    description: "Tạo liên kết mời bạn bè.",
                    message: "discord.gg/{{code}}`\n· Hết hạn: <t:{{expiration}}:R>\n· Mức sử dụng tối đa: {{uses}}"
                },
                view: {
                    description: "Xem tất cả các liên kết mời bạn bè đã tạo.",
                    message: "_discord.gg/{{code}__\n· Hết hạn: <t:{{expiration}}:R> \n· Số lần sử dụng: {{uses}}/{{maxUses}}",
                    noInvites: "Bạn không có liên kết mời bạn bè đang hoạt động."
                },
                revoke: {
                    description: "Hủy mọi liên kết lời mời kết bạn đã được tạo.",
                    message: "Tất cả các liên kết mời bạn bè đã bị hủy."
                }
            }
        },
        friendshipRanks: {
            name: "Thứ hạng tình bạn",
            description: "Thêm huy hiệu cho biết bạn đã làm bạn với một người dùng được bao lâu.",
            badge: {
                sprout: {
                    name: "Mầm",
                    description: "Tình bạn của bạn đang nở rộ."
                },
                blooming: {
                    name: "nở hoa",
                    description: "Tình bạn của bạn đang được cải thiện! (1 tháng)"
                },
                burning: {
                    name: "Rực rỡ",
                    description: "Tình bạn của bạn đã đạt đến đỉnh cao. (3 tháng)"
                },
                fighter: {
                    name: "máy bay chiến đấu",
                    description: "Tình bạn của bạn rất bền chặt. (6 tháng)"
                },
                star: {
                    name: "Ngôi sao",
                    description: "Tình bạn của bạn đã diễn ra trong một thời gian dài. (1 năm)"
                },
                royal: {
                    name: "Kết quả",
                    description: "Tình bạn của bạn đã vượt qua mọi thử thách - 2 năm!"
                },
                besties: {
                    name: "Người Bạn Thân Nhất",
                    description: "Làm thế nào để bạn đạt được điều này??? (5 Năm)"
                }
            }
        },
        friendsSince: {
            name: "Bạn bèKể từ",
            description: "Nó hiển thị khi người dùng kết bạn với ai đó trong cửa sổ bật lên.",
            section: "Ngày hẹn hò"
        },
        friendTags: {
            name: "Thẻ bạn bè",
            description: "Bắt đầu tìm kiếm của bạn bằng & cho phép bạn lọc theo thẻ tùy chỉnh trong menu nhảy nhanh.",
            modal: {
                name: "Tên",
                users: "Người dùng (Phân tách bằng dấu phẩy)",
                userlist: "Danh sách người dùng (Click vào người dùng để xóa)",
                remove: "Di dời",
                add: "Thêm vào",
                tag: "Vé",
                removeFrom: "Xóa khỏi:",
                addTo: "Thêm vào:"
            },
            option: {
                tagConfiguration: {
                    label: "Cấu hình thẻ",
                    description: "Thành phần cấu hình thẻ"
                }
            }
        },
        fullSearchContext: {
            name: "Bối cảnh tìm kiếm đầy đủ",
            description: "Nó làm cho menu ngữ cảnh thư trong kết quả tìm kiếm thư hoàn chỉnh với tất cả các tùy chọn mà bạn mong đợi."
        },
        fullUserInChatbox: {
            name: "Toàn bộ người dùng trong Chatbox",
            description: "Thêm chức năng bổ sung như nhấp chuột trái/phải vào thẻ người dùng trong hộp trò chuyện."
        },
        fullVCPFP: {
            name: "FullVCPFP",
            description: "Cho phép hình đại diện bao trùm toàn bộ hộp trò chuyện thoại.",
            option: {
                useServerProfileAvatars: {
                    label: "Sử dụng Avatar hồ sơ máy chủ",
                    description: "Sử dụng hình đại diện của hồ sơ người thuyết trình trong hộp trò chuyện thoại (nếu có)"
                }
            }
        },
        gameActivityToggle: {
            name: "Hoạt động trò chơiChuyển đổi",
            description: "Thêm nút chuyển vào cửa sổ bật lên của người dùng để hiển thị hoặc ẩn hoạt động chơi trò chơi của bạn.",
            tooltip: "Thay đổi sự kiện trò chơi",
            gameActivity: {
                enabled: "Đã bật sự kiện trò chơi",
                disabled: "Sự kiện trò chơi đã bị vô hiệu hóa"
            },
            option: {
                oldIcon: {
                    label: "biểu tượng cổ xưa",
                    description: "Sử dụng kiểu biểu tượng cũ trước khi thiết kế lại biểu tượng Discord"
                },
                location: {
                    label: "Phụ nữ",
                    description: "Nơi hiển thị khóa sự kiện trò chơi",
                    panel: "Bên cạnh Tắt tiếng/Tắt micrô",
                    toolbox: "Plexcord trong Hộp công cụ"
                }
            }
        },
        ghosted: {
            name: "ma quái",
            description: "Một hồn ma dễ thương xuất hiện bên cạnh những người mà bạn chưa trả lời tin nhắn trực tiếp.",
            modal: {
                title: "Người dùng bị ma",
                no: "Không có người dùng bị ma",
                unghost: "loại bỏ bóng ma",
                unknown: "không rõ",
                unnamedGroup: "Nhóm ẩn danh",
                unknownUser: "Người dùng không xác định",
                clearAll: "Xóa tất cả",
                noGhost: "Không có ma ở đây!",
                clear: "thông thoáng"
            },
            option: {
                showIndicator: {
                    label: "Hiển thị chỉ báo",
                    description: "Hiển thị bộ đếm ma ở đầu danh sách máy chủ."
                },
                showDmIcons: {
                    label: "Hiển thị biểu tượng DM",
                    description: "Hiển thị biểu tượng ma bên cạnh từng DM riêng lẻ."
                },
                ignoreGroupDms: {
                    label: "Bỏ qua DM nhóm",
                    description: "Giữ tất cả các tin nhắn nhóm ra khỏi danh sách ma."
                },
                exemptedChannels: {
                    label: "Kênh miễn trừ",
                    description: "Danh sách ID kênh (ID) được phân tách bằng dấu phẩy sẽ không được đưa vào danh sách ma (nhấp chuột phải vào kênh DM để sao chép ID)."
                },
                ignoreBots: {
                    label: "Bỏ qua Bot",
                    description: "Bỏ qua DM từ bot."
                }
            }
        },
        gifCollections: {
            name: "Bộ sưu tập Gif",
            description: "Cho phép bạn tạo bộ sưu tập GIF.",
            context: {
                copyImageLink: "Sao chép liên kết hình ảnh",
                copyUrl: "Sao chép URL",
                collection: {
                    add: "Thêm vào bộ sưu tập",
                    gif: "Bộ sưu tập GIF",
                    delete: "Xóa bộ sưu tập",
                    create: "Tạo bộ sưu tập",
                    remove: "Di dời",
                    information: "Thông tin thu thập",
                    name: "Tên",
                    gifs: "Tát",
                    created: "Ngày tạo",
                    updated: "Cập nhật lần cuối",
                    close: "Một phần tư",
                    rename: "Đổi tên",
                    move: "Chuyển đến Bộ sưu tập",
                    select: "Chọn bộ sưu tập để di chuyển"
                },
                gif: {
                    information: "Thông tin",
                    added: "Ngày thêm",
                    width: "Chiều rộng",
                    height: "Chiều cao",
                    close: "Một phần tư"
                }
            },
            option: {
                itemPrefix: {
                    label: "Tiền tố mục",
                    description: "Tiền tố cho các phần tử GIF"
                },
                collectionPrefix: {
                    label: "Tiền tố bộ sưu tập",
                    description: "Tiền tố cho bộ sưu tập"
                },
                onlyShowCollections: {
                    label: "Chỉ hiển thị bộ sưu tập",
                    description: "Chỉ hiển thị bộ sưu tập"
                },
                stopWarnings: {
                    label: "Dừng cảnh báo",
                    description: "Dừng cảnh báo xóa"
                },
                showCopyImageLink: {
                    label: "Hiển thị tùy chọn liên kết hình ảnh sao chép",
                    description: "Hiển thị {{copyImageLink}} trong menu ngữ cảnh"
                },
                preventDuplicates: {
                    label: "Ngăn ngừa tái phát",
                    description: "Ngăn chặn việc thêm cùng một GIF vào bộ sưu tập nhiều lần"
                },
                defaultEmptyCollectionImage: {
                    label: "Hình ảnh bộ sưu tập trống mặc định",
                    description: "Hình ảnh/GIF hiển thị khi không có hình ảnh/GIF nào trong bộ sưu tập"
                },
                collectionsSortType: {
                    label: "Loại sắp xếp bộ sưu tập",
                    description: "Sắp xếp loại bộ sưu tập"
                },
                collectionsSortOrder: {
                    label: "Thứ tự sắp xếp bộ sưu tập",
                    description: "Sắp xếp thứ tự các bộ sưu tập"
                },
                collectionsSort: {
                    label: "Sắp xếp bộ sưu tập",
                    description: "Xác định cách sắp xếp các bộ sưu tập",
                    title: "Sắp xếp bộ sưu tập",
                    sortDescription: "Chọn sắp xếp theo bộ sưu tập của bạn",
                    sortBy: "Sắp xếp theo",
                    name: "Tên",
                    creationDate: "Ngày tạo",
                    modifiedDate: "Ngày sửa đổi",
                    ascending: "Đang phát triển",
                    descending: "Giảm dần"
                },
                importGifs: {
                    label: "Nhập ảnh GIF",
                    description: "Nhập bộ sưu tập",
                    button: "Nhập bộ sưu tập"
                },
                exportGifs: {
                    label: "Xuất ảnh GIF",
                    description: "Xuất bộ sưu tập",
                    button: "Xuất bộ sưu tập"
                },
                resetCollections: {
                    label: "Đặt lại bộ sưu tập",
                    description: "Đặt lại bộ sưu tập về mặc định (xóa tất cả bộ sưu tập)",
                    button: "Đặt lại bộ sưu tập"
                }
            },
            toast: {
                copied: "Đã sao chép liên kết hình ảnh vào clipboard!",
                urlCopied: "Đã sao chép URL vào khay nhớ tạm!",
                already: "Bộ sưu tập này đã tồn tại",
                alreadyCollection: "GIF này đã tồn tại trong bộ sưu tập"
            },
            modal: {
                create: {
                    title: "Tạo bộ sưu tập",
                    name: "Tên bộ sưu tập",
                    create: "Tạo nên"
                },
                rename: {
                    title: "Đổi tên bộ sưu tập",
                    name: "Tên bộ sưu tập mới",
                    warning: "Tên không thể dài hơn 24 ký tự",
                    rename: "Đổi tên"
                }
            },
            alert: {
                import: {
                    title: "Bạn có chắc không?",
                    body: "Nhập bộ sưu tập sẽ ghi đè bộ sưu tập hiện có.",
                    confirm: "Iche Aktar",
                    cancel: "Hủy bỏ"
                },
                reset: {
                    title: "Bạn có chắc không?",
                    body: "Việc đặt lại bộ sưu tập sẽ xóa tất cả các bộ sưu tập.",
                    confirm: "cài lại",
                    cancel: "Hủy bỏ"
                },
                delete: {
                    title: "Bạn có chắc không?",
                    deleteBody: "Bạn có thực sự muốn xóa bộ sưu tập này?",
                    removeBody: "Bạn có thực sự muốn xóa mục này?",
                    confirm: "Sil",
                    remove: "Di dời",
                    cancel: "Hủy bỏ"
                }
            }
        },
        gifPaste: {
            name: "GifDán",
            description: "Nó cho phép bạn dán ảnh GIF trực tiếp vào hộp trò chuyện."
        },
        gifRoulette: {
            name: "GifRoulette",
            description: "Thêm lệnh gửi ảnh GIF ngẫu nhiên từ mục yêu thích của bạn; Có 10% cơ hội gắn thẻ chủ sở hữu máy chủ!",
            command: {
                gifRoulette: {
                    description: "Hãy thử vận ​​may của bạn và gửi một ảnh GIF ngẫu nhiên"
                }
            },
            option: {
                pingOwnerChance: {
                    label: "Cơ hội gắn thẻ chủ sở hữu máy chủ",
                    description: "Đặt cơ hội gắn thẻ chủ sở hữu máy chủ là 1 trên 10 (đúng vậy!)"
                }
            }
        },
        gitHubRepos: {
            name: "GitHubRepos",
            description: "Hiển thị kho GitHub công khai của người dùng trên hồ sơ của họ.",
            loading: "Kho lưu trữ đang tải...",
            option: {
                showStars: {
                    label: "Hiển thị các ngôi sao",
                    description: "Hiển thị sao kho"
                },
                showLanguage: {
                    label: "Hiển thị ngôn ngữ",
                    description: "Hiển thị ngôn ngữ lập trình chính của kho lưu trữ"
                },
                showInMiniProfile: {
                    label: "Hiển thị trong Hồ sơ nhỏ",
                    description: "Hiển thị kho lưu trữ trong cửa sổ hồ sơ nhỏ"
                },
                showRepositoryTab: {
                    label: "Hiển thị tab kho lưu trữ",
                    description: "Hiển thị tab kho lưu trữ trong chế độ hồ sơ (nút ẩn trên các liên kết khi được bật)"
                }
            },
            error: {
                error: "Thậm chí",
                render: "Lỗi: GithubRepos không thể hiển thị"
            },
            button: {
                show: "Hiển thị kho lưu trữ GitHub",
                repositories: "Kho GitHub",
                more: "Hiển thị thêm",
                only: "Chỉ hiển thị {{length}}/{{total}} tốt nhất"
            },
            modal: {
                title: "Kho lưu trữ GitHub của {{user}}",
                repository: "kho lưu trữ",
                description: "Giải thích",
                language: "Dil",
                stars: "Ngôi sao",
                viewOnGitHub: "Xem trên GitHub",
                close: "Một phần tư"
            }
        },
        googleThat: {
            name: "GoogleCái đó",
            description: "Thêm lệnh cho phép bạn gửi kết nối tìm kiếm trên Internet.",
            command: {
                googleThat: {
                    description: "Gửi liên kết công cụ tìm kiếm",
                    query: "truy vấn tìm kiếm"
                }
            },
            option: {
                hyperlink: {
                    label: "Cầu",
                    description: "Liệu liên kết đã gửi có được gửi dưới dạng siêu liên kết với thẻ truy vấn hay không"
                },
                embed: {
                    label: "Nội dung nhúng",
                    description: "Có hiển thị liên kết đã gửi dưới dạng nội dung được nhúng hay không"
                },
                defaultEngine: {
                    label: "Công cụ tìm kiếm mặc định",
                    description: "Công cụ tìm kiếm để sử dụng"
                },
                customEngineURL: {
                    label: "URL công cụ tìm kiếm tùy chỉnh",
                    description: "URL của công cụ tìm kiếm bạn muốn sử dụng"
                }
            }
        },
        greetStickerPicker: {
            name: "Chào hỏiStickerPicker",
            description: "'Vẫy tay và nói xin chào!' Nhấp chuột phải vào nút sẽ cho phép bạn sử dụng nhãn dán chào mừng mà bạn muốn thay vì nhãn dán ngẫu nhiên.",
            mode: {
                greet: "Xin chào",
                message: "Tin nhắn"
            },
            option: {
                greetMode: {
                    label: "Chế độ chào hỏi",
                    description: "Chọn chế độ chào",
                    greet: "Lời chào (bạn chỉ có thể gửi lời chào 3 lần)",
                    message: "Tin nhắn (bạn có thể gửi lời chào không giới hạn)"
                }
            },
            context: {
                label: "Bộ chọn nhãn dán lời chào",
                mode: "Chế độ chào hỏi",
                stickers: "Nhãn dán lời chào",
                multi: "Nhiều lời chào",
                send: "Gửi lời chào"
            }
        },
        guildPickerDumper: {
            name: "GuildPickerDumper",
            description: "Thêm menu ngữ cảnh cho phép bạn xuất và tải xuống biểu tượng cảm xúc và nhãn dán của máy chủ.",
            context: {
                download: {
                    emoji: "Tải xuống biểu tượng cảm xúc",
                    sticker: "Tải xuống nhãn dán"
                }
            }
        },
        guildTagSettings: {
            name: "GuildTagCài đặt",
            description: "Thêm cài đặt thẻ máy chủ, chẳng hạn như ẩn thẻ máy chủ hoặc tắt lời nhắc sử dụng thẻ.",
            option: {
                hideTags: {
                    label: "Ẩn thẻ",
                    description: "Làm cho thẻ máy chủ trở nên vô hình"
                },
                disableAdoptTagPrompt: {
                    label: "Đóng cảnh báo xác nhận quyền sở hữu thẻ",
                    description: "Tắt lời nhắc sử dụng (yêu cầu) thẻ máy chủ"
                }
            }
        },
        hideChatButtons: {
            name: "Ẩn nút trò chuyện",
            description: "Cho phép bạn ẩn các nút trò chuyện.",
            tooltip: {
                close: "Một phần tư",
                open: "Đói bụng"
            },
            option: {
                color: {
                    label: "Màu sắc",
                    description: "Hiển thị màu đỏ khi bật"
                },
                open: {
                    label: "Mở",
                    description: "Bật theo mặc định"
                }
            }
        },
        hideMedia: {
            name: "Ẩn phương tiện",
            description: "Nó cho phép bạn ẩn tệp đính kèm và nội dung được nhúng trong một số tin nhắn nhất định bằng một nút xuất hiện khi di chuột qua.",
            show: "Hiển thị phương tiện",
            hide: "Ẩn phương tiện",
            hidden: "Phương tiện ẩn"
        },
        hideMessages: {
            name: "Ẩn tin nhắn",
            description: "Tạm thời ẩn tin nhắn cho đến khi bạn khởi động lại.",
            button: {
                hide: "trốn"
            },
            option: {
                hidePopoverButton: {
                    label: "Ẩn nút bật lên",
                    description: "Ẩn nút ẩn trong cửa sổ bật lên tin nhắn."
                }
            }
        },
        hideServers: {
            name: "Máy chủ ẩn",
            description: "Ẩn máy chủ khỏi danh sách máy chủ",
            context: {
                hide: "Ẩn máy chủ",
                unhide: "Hiển thị máy chủ",
                folder: {
                    hide: "Ẩn thư mục",
                    unhide: "Hiển thị thư mục"
                }
            },
            option: {
                showIndicator: {
                    label: "Hiển thị chỉ số",
                    description: "Hiển thị menu ở phía dưới để hiển thị các máy chủ ẩn trong danh sách"
                },
                guildsList: {
                    label: "Danh sách máy chủ",
                    description: "Xóa máy chủ ẩn"
                },
                resetHidden: {
                    label: "Đặt lại máy chủ ẩn",
                    description: "Xóa tất cả các máy chủ ẩn khỏi danh sách",
                    button: "Đặt lại máy chủ ẩn"
                }
            },
            button: {
                hidden: "Ẩn giấu",
                hiddenServers: "Máy chủ ẩn",
                remove: "Di dời",
                folder: "Thư mục",
                removeAll: "Xóa tất cả",
                guilds: "Máy chủ",
                noHiddenServers: "Không có máy chủ ẩn"
            }
        },
        holyNotes: {
            name: "ThánhNotes",
            description: "Holy Notes cho phép bạn lưu tin nhắn",
            main: "Tốt",
            button: {
                tooltip: "Thánh ghi chú",
                save: "Lưu ghi chú",
                cancel: "Hủy bỏ",
                noteMessage: "Tin nhắn ghi chú",
                refresh: "Làm mới hình đại diện",
                import: "Ghi chú nhập khẩu",
                export: "Xuất ghi chú",
                deleteAll: "Xóa tất cả ghi chú",
                delete: "Xóa sổ ghi chép",
                create: "Tạo sổ tay",
                copyText: "Sao chép văn bản",
                copyAttachment: "Sao chép URL đính kèm",
                deleteNote: "Notu Sil",
                moveNote: "Di chuyển ghi chú",
                moveTo: "Di chuyển đến {{key}}",
                copyId: "Sao chép giấy tờ tùy thân"
            },
            modal: {
                error: {
                    generic: "Đã xảy ra lỗi khi xử lý điểm của bạn. Kiểm tra bảng điều khiển để biết chi tiết.",
                    easter: "Không tìm thấy ghi chú nào. Quả chuối đồng cảm đang ở bên bạn.",
                    empty: "Không có ghi chú nào được lưu trong sổ tay này."
                },
                help: {
                    title: "Giúp đỡ",
                    description: "Tìm hiểu cách sử dụng Holy Notes",
                    addingNotes: "Thêm ghi chú",
                    addingNotesText: "Để thêm ghi chú, hãy nhấp chuột phải vào tin nhắn, trỏ tới 'Tin nhắn ghi chú' và chọn sổ ghi chép bạn muốn thêm ghi chú vào.",
                    prototype: "Nguyên mẫu",
                    noteMessage: "Một cú nhấp chuột vào nút 'Thông báo ghi chú' sẽ thêm nó vào Sổ cái chính theo mặc định!",
                    deletingNotes: "Không phải Silme",
                    deletingNotesText: "Để xóa ghi chú, bạn có thể nhấp chuột phải và chọn 'Xóa ghi chú' hoặc giữ phím 'DELETE' trên bàn phím và nhấp vào ghi chú.",
                    movingNotes: "Di chuyển một ghi chú",
                    movingNotesText: "Để di chuyển ghi chú, nhấp chuột phải và chọn sổ ghi chép bạn muốn di chuyển từ tùy chọn 'Di chuyển ghi chú'.",
                    jumpToMessage: "Đi tới Tin nhắn",
                    jumpToMessageText: "Để đi tới tin nhắn chứa ghi chú, hãy nhấp chuột phải vào ghi chú đó và chọn 'Chuyển đến Tin nhắn'."
                },
                notebook: {
                    title: "SỔ TAY",
                    search: "Tìm kiếm tin nhắn...",
                    options: "Tùy chọn sắp xếp",
                    label: "Trình đơn sắp xếp",
                    filteredOf: "{{filteredCount}}/{{noteCount}} không",
                    note: "{{noteCount}} không",
                    ada: "Ngày tăng dần/thêm",
                    amd: "Tăng dần/Ngày nhắn tin",
                    dda: "Ngày giảm dần/thêm",
                    dmd: "Giảm dần / Ngày nhắn tin",
                    change: "Thay đổi sắp xếp",
                    ascending: "Đang phát triển",
                    descending: "Giảm dần",
                    dateAdded: "Ngày thêm",
                    messageDate: "Ngày tin nhắn"
                },
                create: {
                    title: "Tạo sổ tay",
                    description: "Nhập tên của sổ ghi chép mới",
                    placeholder: "Tên sổ ghi chép"
                },
                delete: {
                    title: "{{notebookName}} Silinsin Mi?",
                    description: "{{noteCount}} ghi chú sẽ bị xóa vĩnh viễn",
                    button: "Sil"
                },
                tabs: {
                    label: "Tab sổ tay"
                }
            },
            toast: {
                saved: "Tin nhắn đã được thêm thành công vào {{notebook}}.",
                deleted: "Ghi chú đã được xóa thành công khỏi {{notebook}}.",
                moved: "Ghi chú đã được di chuyển thành công từ sổ ghi chép {{from}} sang sổ ghi chép {{to}}.",
                exists: "Sổ tay có tên {{notebookName}} đã tồn tại.",
                created: "{{notebookName}} đã được tạo thành công.",
                deletedNotebook: "{{notebookName}} đã được xóa thành công.",
                refreshed: "Avatar đã được làm mới thành công.",
                deletedAll: "Tất cả các ghi chú đã được xóa thành công.",
                imported: "Ghi chú đã được nhập thành công.",
                invalid: "Không thể nhập ghi chú."
            },
            toolbox: {
                action: "Mở ghi chú"
            }
        },
        homeTyping: {
            name: "Trang chủĐánh máy",
            description: "Nếu ai đó đang viết trong tin nhắn trực tiếp của bạn, nó sẽ biến nút home thành chỉ báo đang viết."
        },
        iconViewer: {
            name: "Trình xem biểu tượng",
            description: "Thêm tab mới trong cài đặt để xem trước tất cả các biểu tượng.",
            toolbox: "Mở tab biểu tượng",
            iconFinder: "Trình tìm biểu tượng",
            about: {
                title: "Đặc trưng",
                preview: "Xem trước biểu tượng",
                list: {
                    copy: "Sao chép tên biểu tượng và biến CSS",
                    download: "Tải xuống các biểu tượng ở các định dạng khác nhau (SVG, PNG, GIF, v.v.)",
                    premade: "Sao chép các biểu tượng được tạo sẵn cho plugin của bạn",
                    find: "Tìm biểu tượng theo ngữ cảnh chức năng",
                    search: "Tìm kiếm màu bằng cách nhấp chuột phải vào tên màu",
                    special: "lời cảm ơn đặc biệt"
                }
            },
            context: {
                icon: {
                    options: "Tùy chọn biểu tượng",
                    log: "In ra bảng điều khiển (Nhật ký)",
                    save: "Lưu dưới dạng...",
                    rightClick: "Nhấp chuột phải vào biểu tượng để thay thế",
                    usage: "Sử dụng",
                    click: "Bấm để sao chép",
                    copied: "Đã sao chép!",
                    actions: "hành động"
                }
            },
            modal: {
                label: "Tìm kiếm theo ngữ cảnh chức năng",
                search: "Tìm kiếm trong {{count}} ký hiệu...",
                function: "Chức năng",
                iconViewer: {
                    colors: "Màu sắc của trình xem biểu tượng",
                    unknown: "không rõ",
                }
            }
        },
        idleAutoRestart: {
            name: "Nhàn rỗiTự độngKhởi động lại",
            description: "Nó tự động khởi động lại ứng dụng khi bạn không sử dụng trong một khoảng thời gian nhất định nhưng ngăn việc khởi động lại khi bạn đang ở kênh âm thanh.",
            option: {
                isEnabled: {
                    label: "Hiệu quả",
                    description: "Cho phép tự động khởi động lại sau khi không hoạt động"
                },
                idleMinutes: {
                    label: "Thời gian nhàn rỗi (Phút)",
                    description: "Thời gian không hoạt động trước khi khởi động lại (không phải trên kênh âm thanh)"
                }
            },
            toolbox: {
                disable: "Tắt tự động khởi động lại",
                enable: "Bật tự động khởi động lại"
            }
        },
        ignoreActivities: {
            name: "Bỏ qua các hoạt động",
            description: "Ngăn chặn các sự kiện chỉ xuất hiện trong trạng thái. Bạn có thể chỉ định những trò chơi nào cần bỏ qua trong tab Trò chơi và Sự kiện đã lưu hoặc sử dụng cài đặt chung bên dưới.",
            modal: {
                import: {
                    title: "Nhập ID ứng dụng của plugin CustomRPC vào danh sách bộ lọc"
                },
                filter: {
                    title: "Danh sách bộ lọc",
                    description: "Danh sách ID sự kiện được phân tách bằng dấu phẩy để lọc (Hữu ích để lọc các sự kiện RPC cụ thể và CustomRPC)"
                }
            },
            toast: {
                id: {
                    notSet: "ID ứng dụng CustomRPC chưa được đặt.",
                    alreadyAdded: "ID ứng dụng CustomRPC đã được thêm."
                }
            },
            button: {
                import: "Nhập ID CustomRPC"
            },
            option: {
                importCustomRPC: {
                    label: "CustomRPC'yi Thêm"
                },
                listMode: {
                    label: "Chế độ danh sách",
                    description: "Chọn cách áp dụng danh sách bộ lọc",
                    blacklist: "Danh sách đen (Chỉ bỏ qua những người trong danh sách)",
                    whitelist: "Danh sách trắng (Bỏ qua tất cả trừ những thứ trong danh sách)"
                },
                idList: {
                    label: "Danh sách ID"
                },
                ignorePlaying: {
                    label: "Bỏ qua những gì đang chơi",
                    description: "Bỏ qua tất cả các sự kiện đã chơi (Thông thường là các sự kiện trò chơi và RPC)"
                },
                ignoreStreaming: {
                    label: "Bỏ qua bài viết",
                    description: "Bỏ qua tất cả các sự kiện phát sóng"
                },
                ignoreListening: {
                    label: "Bỏ qua người nghe",
                    description: "Bỏ qua tất cả các sự kiện nghe (Thường là sự kiện Spotify)"
                },
                ignoreWatching: {
                    label: "Bỏ qua Đã xem",
                    description: "Bỏ qua tất cả các sự kiện theo dõi"
                },
                ignoreCompeting: {
                    label: "Bỏ qua các sự kiện cạnh tranh",
                    description: "Bỏ qua tất cả các sự kiện (cạnh tranh) cạnh tranh (Thường là các sự kiện trò chơi tùy chỉnh)"
                },
                ignoredActivities: {
                    label: "Sự kiện bị bỏ qua"
                }
            }
        },
        ignoreCalls: {
            name: "Bỏ qua cuộc gọi",
            description: "Cho phép bạn bỏ qua cuộc gọi từ người dùng hoặc nhóm DM cụ thể.",
            option: {
                permanentlyIgnoredUsers: {
                    label: "Người dùng bị bỏ qua vĩnh viễn",
                    description: "ID người dùng (virgül + boşluk) nên bị bỏ qua vĩnh viễn"
                }
            },
            button: {
                ignore: "Yoksay",
                temporarilyIgnore: "Bỏ qua tạm thời",
                permanentlyIgnore: "Bỏ qua vĩnh viễn"
            }
        },
        iLoveSpam: {
            name: "ILoveThư rác",
            description: "Ẩn tin nhắn khỏi 'những kẻ gửi thư rác tiềm năng'."
        },
        imageFilename: {
            name: "Tên tệp hình ảnh",
            description: "Hiển thị tên tệp dưới dạng chú giải công cụ khi di chuột qua hình ảnh và ảnh GIF.",
            option: {
                showFullUrl: {
                    label: "Hiển thị URL đầy đủ",
                    description: "Nó hiển thị URL đầy đủ của hình ảnh thay vì chỉ tên tệp. Tính năng này luôn được bật cho ảnh GIF vì chúng thường không có tên tệp có ý nghĩa."
                }
            }
        },
        imageLink: {
            name: "Liên kết hình ảnh",
            description: "Nó không bao giờ ẩn các liên kết trực quan, ngay cả khi chỉ có một liên kết hình ảnh trong tin nhắn."
        },
        imageZoom: {
            name: "Hình ảnhZoom",
            description: "Nó cho phép bạn phóng to hình ảnh và GIF, cũng như xem siêu dữ liệu hình ảnh. Phóng to bằng bánh xe chuột, tăng bán kính ống kính bằng Shift + bánh xe chuột.",
            option: {
                saveZoomValues: {
                    label: "Lưu giá trị thu phóng",
                    description: "Xác định xem giá trị thu phóng và kích thước ống kính có được lưu hay không"
                },
                invertScroll: {
                    label: "Cuộn ngược",
                    description: "Đảo ngược hướng cuộn chuột"
                },
                nearestNeighbour: {
                    label: "Hàng xóm gần nhất",
                    description: "Sử dụng Nội suy lân cận gần nhất khi chia tỷ lệ hình ảnh"
                },
                square: {
                    label: "Bảo vệ",
                    description: "Biến ống kính thành hình vuông"
                },
                zoom: {
                    label: "Phóng",
                    description: "Tỷ lệ zoom của ống kính"
                },
                size: {
                    label: "Kích thước",
                    description: "Bán kính/kích thước ống kính"
                },
                zoomSpeed: {
                    label: "Tốc độ thu phóng",
                    description: "Xác định tốc độ thay đổi kích thước zoom/ống kính"
                },
                showMetadata: {
                    label: "Hiển thị siêu dữ liệu",
                    description: "Hiển thị siêu dữ liệu khi nhấp đúp vào hình ảnh đã chọn"
                }
            },
            context: {
                square: "Ống kính vuông",
                nearest: "Phóng to pixel",
                zoom: "Phóng",
                size: "Kích thước ống kính",
                zoomSpeed: "Tốc độ thu phóng",
                showImageMetadata: "Hiển thị siêu dữ liệu hình ảnh",
                view: "Xem siêu dữ liệu",
                loading: "Đang tải...",
                unknown: "không rõ",
                sizeHTML: "Kích thước",
                dimensions: "Kích thước",
                filename: "Tên tập tin"
            }
        },
        imgToGif: {
            name: "ImgToGif",
            description: "Thêm lệnh /imgtogif để chuyển đổi bất kỳ hình ảnh nào sang GIF",
            command: {
                imgToGif: {
                    description: "Cho phép bạn chuyển đổi hình ảnh thành GIF",
                    image: "Tệp đính kèm trực quan để sử dụng",
                    width: "chiều rộng GIF",
                    height: "chiều cao gif"
                }
            },
            error: {
                noImage: "Không có hình ảnh được chỉ định!",
                notImage: "Tệp được tải lên không phải là hình ảnh"
            }
        },
        implicitRelationships: {
            name: "Mối quan hệ ngầm",
            description: "Hiển thị các mối quan hệ gián tiếp của bạn trong tab Bạn bè.",
            option: {
                sortByAffinity: {
                    label: "Sắp xếp theo mức độ gần gũi",
                    description: "Xác định xem các mối quan hệ gián tiếp có được sắp xếp theo mức độ gần gũi của chúng với bạn hay không."
                }
            },
            implicit: "gián tiếp"
        },
        inRole: {
            name: "trong vai trò",
            description: "Tìm hiểu xem ai có vai trò bằng cách sử dụng menu ngữ cảnh vai trò hoặc lệnh /inrole (đọc thông tin plugin!)",
            command: {
                inrole: {
                    description: "Tìm hiểu xem ai là người có vai trò",
                    role: "Vai trò",
                    noGuild: "Hãy chắc chắn rằng bạn đang ở trên một máy chủ."
                }
            },
            context: {
                view: "Xem thành viên trong vai trò"
            },
            modal: {
                about: {
                    title: "Hạn chế",
                    description: "Nếu bạn không có quyền kiểm duyệt trên máy chủ và máy chủ lớn (hơn 100 thành viên), plugin có thể bị hạn chế theo những cách sau:",
                    list: {
                        one: "Thành viên ngoại tuyến sẽ không được liệt kê",
                        two: "Theo mặc định, tối đa 100 thành viên sẽ được liệt kê. Kéo xuống danh sách thành viên để xem thêm thành viên.",
                        three: "Nhưng bạn bè của bạn sẽ luôn được hiển thị bất kể trạng thái của họ."
                    }
                },
                member: {
                    title: "Các thành viên trong vai trò",
                    noMembers: "Không tìm thấy thành viên nào được lưu trong bộ nhớ đệm trực tuyến có vai trò này. Hãy thử cuộn xuống danh sách thành viên của bạn để lưu vào bộ nhớ đệm nhiều người dùng hơn!"
                }
            }
        },
        instantScreenshare: {
            name: "Chia sẻ màn hình tức thì",
            description: "Khi bạn tham gia một kênh âm thanh, nó cho phép bạn chia sẻ màn hình ngay lập tức với sự hỗ trợ cho các nguồn máy tính để bàn, cửa sổ và thiết bị đầu vào video (máy ảnh, thẻ chụp).",
            modal: {
                linux: {
                    title: "Dành cho Linux",
                    body: "Nếu bạn đang sử dụng Wayland, nó chỉ bật tùy chọn chia sẻ màn hình.",
                    bodyTwo: "Nó có thể hoạt động hoặc không hoạt động với X11 :srug:"
                },
                videoDevices: {
                    title: "Thiết bị đầu vào video",
                    body: "Hỗ trợ máy ảnh và thẻ chụp (ví dụ: Elgato HD60X) khi được bật trong cài đặt."
                },
                regardingSound: {
                    title: "Giới thiệu về cài đặt âm thanh và xem trước",
                    body: "Chúng tôi sử dụng cùng cài đặt mà Discord sử dụng để xem trước luồng và quyết định có bật âm thanh hay không."
                }
            },
            option: {
                streamMedia: {
                    label: "Nguồn phương tiện truyền thông sẽ được phát hành",
                    description: "Nếu không tìm thấy, nó sẽ reset về màn hình chính.",
                    loading: "Đang tải nguồn phương tiện...",
                    none: "Không tìm thấy nguồn phương tiện nào",
                    placeholder: "Chọn nguồn phương tiện để xuất bản"
                },
                includeVideoDevices: {
                    label: "Bao gồm các thiết bị video",
                    description: "Bao gồm các thiết bị đầu vào video (máy ảnh, thẻ chụp) trong danh sách nguồn"
                },
                autoMute: {
                    label: "Tự động tắt tiếng",
                    description: "Tự động tắt tiếng micrô của bạn khi tham gia kênh thoại"
                },
                autoDeafen: {
                    label: "Tự động làm điếc",
                    description: "Tự động tắt tiếng khi bạn tham gia kênh thoại (nó cũng tắt tiếng bạn)"
                },
                instantScreenshare: {
                    label: "Chia sẻ màn hình tức thì",
                    description: "Bật tính năng chia sẻ màn hình tự động"
                },
                keybindScreenshare: {
                    label: "Chia sẻ màn hình bằng phím nóng",
                    description: "Chia sẻ màn hình với phím nóng trong cài đặt phím nóng Discord"
                },
                focusDiscord: {
                    label: "Tập trung vào sự bất hòa",
                    description: "Chỉ bắt đầu chia sẻ màn hình bằng cách bấm phím khi Discord đã tập trung"
                },
                toolboxManagement: {
                    label: "Quản lý hộp công cụ",
                    description: "Bật/Tắt chia sẻ màn hình tức thì"
                }
            },
            toolbox: {
                label: "Chia sẻ màn hình tức thì",
                toast: "Chia sẻ màn hình tức thì {{state}}",
                enabled: "Hiệu quả",
                disabled: "Tàn tật"
            }
        },
        invisibleChat: {
            name: "Trò chuyện vô hình",
            description: "Mã hóa tin nhắn của bạn mà không thu hút sự nghi ngờ!",
            option: {
                savedPasswords: {
                    label: "Mật khẩu đã lưu",
                    description: "Mật khẩu đã lưu (được phân tách bằng dấu phẩy)"
                }
            },
            button: {
                encrypt: "Mã hóa tin nhắn",
                decrypt: "Giải mã tin nhắn",
                hidden: "Chỉ báo tin nhắn ẩn (InvisibleChat)"
            },
            tooltip: {
                hidden: "Có một tin nhắn ẩn trong tin nhắn này! (Trò chuyện vô hình)"
            },
            embed: {
                title: "Tin nhắn được giải mã",
                footer: "Đã gửi qua Trò chuyện vô hình"
            },
            modal: {
                encrypt: {
                    title: "Mã hóa tin nhắn",
                    secret: "Tin nhắn bí mật",
                    cover: "Bìa (2 từ trở lên!!)",
                    password: "Mật khẩu",
                    dontUseCover: "Sử dụng bìa",
                    send: "Gửi",
                    cancel: "Hủy bỏ"
                },
                decrypt: {
                    title: "Giải mã tin nhắn",
                    with: "Tin nhắn được mã hóa",
                    password: "Mật khẩu",
                    decrypt: "giải mã",
                    cancel: "Hủy bỏ"
                }
            }
        },
        inviteDefaults: {
            name: "MờiMặc định",
            description: "Cho phép bạn chỉnh sửa các giá trị mặc định khi tạo lời mời máy chủ.",
            option: {
                inviteDuration: {
                    label: "Thời lượng lời mời",
                    description: "Thời lượng mặc định cho lời mời máy chủ",
                    thirtyMinutes: "30 phút",
                    oneHour: "1 khoảnh khắc",
                    sixHours: "6 khoảnh khắc",
                    twelveHours: "12 khoảnh khắc",
                    oneDay: "1 ngày",
                    sevenDays: "7 ngày",
                    forever: "không xác định"
                },
                maxUses: {
                    label: "Mức sử dụng tối đa",
                    description: "Mức sử dụng tối đa mặc định cho lời mời máy chủ",
                    unlimited: "Không giới hạn",
                    one: "1",
                    five: "5",
                    ten: "10",
                    twentyFive: "25",
                    fifty: "50",
                    oneHundred: "100"
                },
                temporaryMembership: {
                    label: "Tư cách thành viên tạm thời",
                    description: "Cài đặt thành viên tạm thời mặc định cho lời mời máy chủ"
                }
            }
        },
        ircColors: {
            name: "IrcMàu sắc",
            description: "Làm cho màu sắc của tên người dùng trong cuộc trò chuyện trở nên độc đáo, giống như trong ứng dụng khách IRC.",
            option: {
                lightness: {
                    label: "Sáng",
                    description: "Tỷ lệ độ sáng (%). Nếu màu sắc có vẻ quá sáng hoặc tối, hãy thay đổi chúng."
                },
                memberListColors: {
                    label: "Màu danh sách thành viên",
                    description: "Thay đổi màu vai trò trong danh sách thành viên."
                },
                applyColorOnlyToUsersWithoutColor: {
                    label: "Chỉ áp dụng cho người dùng không có màu",
                    description: "Áp dụng màu cho người dùng có màu không được xác định trước."
                },
                applyColorOnlyInDms: {
                    label: "Chỉ áp dụng trong tin nhắn riêng tư",
                    description: "Chỉ áp dụng màu cho tin nhắn riêng tư; ứng dụng trên các máy chủ."
                }
            }
        },
        iRememberYou: {
            name: "tôi nhớ bạn",
            description: "Nó ghi lại cục bộ tất cả những người bạn liên lạc (bao gồm cả máy chủ), bảo vệ khỏi mất mát.",
            section: {
                description: "Nó hiển thị danh sách chủ sở hữu của các máy chủ mà bạn đã đề cập, đã trả lời, là thành viên của (chủ sở hữu máy chủ*) hoặc thành viên của các máy chủ mà bạn đang sử dụng.",
                empty: "Hiện đang trống.",
                tooltip: "{{user}} đã cập nhật vào {{updatedAtContent}}",
                owner: "Chủ sở hữu máy chủ",
                iRememberYou: "tôi nhớ bạn"
            },
            context: {
                user: "Tùy chọn người dùng",
                copy: "Sao chép ID người dùng",
                copyToast: "Đã sao chép ID người dùng vào bảng nhớ tạm",
                view: "Xem hồ sơ"
            },
            modal: {
                title: "Bộ điều chỉnh",
                filter: "Lọc theo thẻ, tên người dùng hoặc ID",
                button: {
                    validate: "Xác minh và lưu",
                    cancel: "Hủy bỏ",
                    openEditor: "Mở trình chỉnh sửa",
                    resetData: "Đặt lại dữ liệu",
                    sure: "Bạn có chắc không?"
                }
            }
        },
        jumpTo: {
            name: "Chuyển tới",
            description: "Thêm tùy chọn vào menu chuột phải để chuyển đến đầu hoặc cuối kênh hoặc tin nhắn riêng tư.",
            context: {
                top: "Đi tới bài viết đầu tiên",
                bottom: "Đi tới bài viết cuối cùng",
                noMessages: "Không tìm thấy tin nhắn nào từ người dùng này trong kênh này.",
                searchFailed: "Đã xảy ra lỗi khi tìm kiếm tin nhắn."
            }
        },
        keepCurrentChannel: {
            name: "Giữ kênh hiện tại",
            description: "Khi chuyển đổi tài khoản hoặc tải Discord, nó sẽ cố gắng quay lại kênh bạn đang xem."
        },
        keyboardSounds: {
            name: "Âm thanh bàn phím",
            description: "OperaGX hoặc osu khi gõ bằng bàn phím! Thêm hiệu ứng âm thanh.",
            option: {
                volume: {
                    label: "Mức âm thanh",
                    description: "Âm lượng bàn phím"
                },
                soundPack: {
                    label: "Gói âm thanh",
                    description: "Gói âm thanh để sử dụng cho âm thanh bàn phím",
                    operagx: "OperaGX",
                    osu: "ôi!"
                }
            }
        },
        keywordNotify: {
            name: "Từ khóaThông báo",
            description: "Gửi thông báo về các tin nhắn khớp với các từ khóa hoặc biểu thức chính quy nhất định.",
            idHolder: "NHẬN DẠNG",
            keywordEntry: "Nhập từ khóa",
            regexHolder: "ví dụ|regex",
            ignoreCase: "Không phân biệt chữ hoa chữ thường",
            whiteblackLabel: "Danh sách trắng / Danh sách đen",
            tab: {
                title: "Từ khóa",
                clearAll: "Xóa tất cả"
            },
            button: {
                addId: "ID Ekle",
                addKeyword: "Thêm mục nhập từ khóa"
            },
            listTypeSelector: {
                blacklist: "Danh sách đen",
                whitelist: "Danh sách trắng",
                placeholder: "Chọn loại danh sách"
            },
            option: {
                ignoreBots: {
                    label: "Bỏ qua Bot",
                    description: "Bỏ qua tin nhắn từ bot"
                },
                amountToKeep: {
                    label: "Số tiền cần tiết kiệm",
                    description: "Số tin nhắn cần lưu trong nhật ký"
                },
                keywords: {
                    label: "Từ khóa",
                    description: "Quản lý từ khóa"
                }
            }
        },
        lastOnline: {
            name: "Cuối cùngTrực tuyến",
            description: "Thêm chỉ báo trực tuyến cuối cùng dưới tên người dùng trong danh sách DM, máy chủ và danh sách thành viên DM nhóm của bạn.",
            unit: {
                d: "ngày",
                h: "chốc lát",
                m: "phút"
            },
            online: "{{formattedTime}} trước đây đã trực tuyến"
        },
        listenBrainzRPC: {
            name: "ListenBrainzRPC",
            description: "ListenBrainz là một plugin nhỏ mang lại sự hiện diện phong phú.",
            about: {
                title: "Giới thiệu về API MusicBrainz",
                description: "API MusicBrainz không yêu cầu khóa API nhưng lại yêu cầu {{link}}. Đối với hầu hết người dùng, một địa chỉ email là đủ.",
                userAgent: "một chuỗi tác nhân người dùng có ý nghĩa"
            },
            option: {
                username: {
                    label: "Tên người dùng",
                    description: "Tên người dùng ListenBrainz"
                },
                mbContact: {
                    label: "Liên hệ MB",
                    description: "Thông tin liên hệ ListenBrainz"
                },
                shareUsername: {
                    label: "Chia sẻ tên người dùng",
                    description: "Hiển thị liên kết hồ sơ ListenBrainz (chỉ hiển thị với người dùng khác)"
                },
                shareSong: {
                    label: "Chia sẻ bài hát",
                    description: "Hiển thị liên kết tới bài hát hiện tại trên ListenBrainz (chỉ hiển thị với người dùng khác)"
                },
                hideWithSpotify: {
                    label: "Ẩn khi Spotify đang hoạt động",
                    description: "Ẩn trạng thái ListenBrainz nếu Spotify đang chạy"
                },
                hideWithActivity: {
                    label: "Ẩn nếu có sự kiện khác",
                    description: "Ẩn trạng thái ListenBrainz nếu bạn có trạng thái khác"
                },
                useTimeBar: {
                    label: "Sử dụng thanh thời gian",
                    description: "Hiển thị thời lượng bản nhạc dưới dạng thanh thời gian (Phải sử dụng trạng thái nghe)"
                },
                statusName: {
                    label: "Tên trạng thái",
                    description: "Văn bản ngoại lệ"
                },
                nameFormat: {
                    label: "Định dạng tên",
                    description: "Cách hiển thị tên bài hát và nghệ sĩ trong tên trạng thái",
                    custom: "Sử dụng văn bản trạng thái tùy chỉnh",
                    artistSong: "sử dụng định dạng 'nghệ sĩ - bài hát'",
                    songArtist: "sử dụng định dạng 'bài hát - nghệ sĩ'",
                    artistOnly: "Chỉ cần sử dụng tên nghệ sĩ",
                    songOnly: "Chỉ cần sử dụng tên bài hát",
                    albumName: "Sử dụng tên album (trả về văn bản ngoại lệ nếu bài hát không có album)"
                },
                useListeningStatus: {
                    label: "Sử dụng trạng thái nghe",
                    description: "Hiển thị trạng thái 'Đang nghe' thay vì 'Đang phát'"
                },
                missingArt: {
                    label: "Thiếu ảnh bìa",
                    description: "Khi album hoặc ảnh bìa album bị thiếu",
                    listenbrainzLogo: "Sử dụng logo ListenBrainz lớn",
                    generic: "Sử dụng trình giữ chỗ chung"
                },
                useLogo: {
                    label: "Logo Kullan",
                    description: "Hiển thị logo ListenBrainz trên bìa album"
                }
            }
        },
        loadingQuotes: {
            name: "Đang tảiBáo giá",
            description: "Thay đổi trích dẫn tải của Discord",
            option: {
                replaceEvents: {
                    label: "Thay đổi sự kiện",
                    description: "Có nên áp dụng plugin này trong các sự kiện có trích dẫn theo chủ đề sự kiện đặc biệt không? (ví dụ: Halloween)"
                },
                enablePluginPresetQuotes: {
                    label: "Bật trích dẫn plugin",
                    description: "Bật trích dẫn được chuẩn bị bởi plugin này"
                },
                enableDiscordPresetQuotes: {
                    label: "Bật trích dẫn bất hòa",
                    description: "Bật trích dẫn soạn sẵn của Discord (bao gồm trích dẫn sự kiện, trong các sự kiện)"
                },
                additionalQuotes: {
                    label: "Báo giá bổ sung",
                    description: "Các trích dẫn đặc biệt bổ sung có thể xuất hiện được phân tách bằng dấu phân cách sau"
                },
                additionalQuotesDelimiter: {
                    label: "Dấu phân cách trích dẫn bổ sung",
                    description: "Dấu phân cách cho dấu ngoặc kép bổ sung"
                }
            }
        },
        loginWithQR: {
            name: "Đăng nhậpVớiQR",
            description: "Cũng giống như trên thiết bị di động, quét mã QR đăng nhập cho phép bạn đăng nhập trên thiết bị khác!",
            option: {
                scanQr: {
                    label: "Quét mã QR",
                    description: "Quét mã QR",
                    notEnabled: "Kích hoạt plugin và khởi động lại ứng dụng khách của bạn để quét mã QR đăng nhập"
                }
            },
            neverScan: "Không bao giờ quét mã QR đăng nhập từ người dùng hoặc ứng dụng khác.",
            hold: "Nhấn và giữ để xác nhận nhập",
            scanning: "Đang quét...",
            stopScanning: "Dừng quét",
            usingWebcam: "Quét bằng webcam",
            dragDrop: "Kéo và thả hình ảnh vào đây hoặc nhấp để chọn hình ảnh",
            orPaste: "Hoặc dán một hình ảnh từ clipboard!"
        },
        mediaPlaybackSpeed: {
            name: "MediaPlaybackTốc độ",
            description: "Cho phép bạn thay đổi tốc độ phát lại (mặc định) của nội dung nhúng phương tiện.",
            playbackSpeed: "Tốc độ phát lại",
            context: {
                label: "Kiểm soát tốc độ phát lại"
            },
            option: {
                defaultVoiceMessageSpeed: {
                    label: "Tỷ lệ thư thoại mặc định",
                    description: "Tin nhắn thoại"
                },
                defaultVideoSpeed: {
                    label: "Tốc độ video mặc định",
                    description: "Video"
                },
                defaultAudioSpeed: {
                    label: "Tốc độ âm thanh mặc định",
                    description: "tập tin âm thanh"
                }
            }
        },
        memberCount: {
            name: "Số lượng thành viên",
            description: "Hiển thị số lượng thành viên trực tuyến trên máy chủ, tổng số thành viên và người dùng trong các kênh thoại — trong danh sách thành viên và chú giải công cụ.",
            option: {
                toolTip: {
                    label: "Mẹo công cụ",
                    description: "Hiển thị số lượng thành viên trong chú giải công cụ máy chủ"
                },
                memberList: {
                    label: "Danh sách thành viên",
                    description: "Hiển thị số lượng thành viên ở đầu danh sách thành viên"
                },
                voiceActivity: {
                    label: "Hoạt động bằng giọng nói",
                    description: "Hiển thị số lượng người dùng trên các kênh thoại"
                }
            },
            onlineThisChannel: "{{formattedOnlineCount}} đang trực tuyến trên kênh này",
            totalMembers: "Tổng số {{formattedTotalCount}} thành viên trên máy chủ",
            totalVoice: "Thành viên trên kênh thoại {{formattedVoiceCount}}"
        },
        mentionAvatars: {
            name: "đề cập đếnAvatar",
            description: "Hiển thị hình đại diện và biểu tượng vai trò của người dùng trong các đề cập.",
            option: {
                showAtSymbol: {
                    label: "Hiển thị biểu tượng @",
                    description: "Xác định xem biểu tượng @ có được hiển thị trong đề cập của người dùng hay không."
                }
            }
        },
        meow: {
            name: "Meo",
            description: "Thêm một nút vào thanh trò chuyện để kêu meo meo trong trò chuyện.",
            button: {
                meow: "Miyav"
            }
        },
        messageBurst: {
            name: "Tin nhắnBurst",
            description: "Nó hợp nhất các tin nhắn được gửi trong một khoảng thời gian nhất định với tin nhắn trước đó của bạn, trừ khi có người khác gửi tin nhắn trước bạn.",
            option: {
                timePeriod: {
                    label: "Phạm vi thời gian",
                    description: "Thời gian hợp nhất (tính bằng giây)."
                },
                shouldMergeWithAttachment: {
                    label: "Kết hợp với tệp đính kèm",
                    description: "Có nên hợp nhất tin nhắn nếu có tệp đính kèm (tệp/hình ảnh) trong tin nhắn cuối cùng không?"
                },
                useSpace: {
                    label: "Sử dụng không gian",
                    description: "Có thêm dấu cách giữa các tin nhắn thay vì chuyển sang dòng mới khi hợp nhất hay không."
                }
            }
        },
        messageClickActions: {
            name: "Tin nhắnClickHành động",
            description: "Giữ phím Backspace và nhấp chuột cho phép bạn xóa, nhấp đúp để chỉnh sửa hoặc trả lời.",
            option: {
                singleClickAction: {
                    label: "Hành động một cú nhấp chuột",
                    description: "Hành động nhấp chuột duy nhất (trên tin nhắn của riêng bạn)"
                },
                singleClickModifier: {
                    label: "Công cụ sửa đổi một cú nhấp chuột",
                    description: "Cần có công cụ sửa đổi cho hành động bằng một cú nhấp chuột (trong tin nhắn của riêng bạn)"
                },
                singleClickOthersAction: {
                    label: "Hành động một cú nhấp chuột (Khác)",
                    description: "Hành động nhấp chuột một lần (trên tin nhắn của người khác)"
                },
                singleClickOthersModifier: {
                    label: "Công cụ sửa đổi một cú nhấp chuột (Khác)",
                    description: "Cần có công cụ sửa đổi cho hành động nhấp chuột bằng một cú nhấp chuột (trong bài đăng của người khác)"
                },
                doubleClickAction: {
                    label: "Hành động nhấp đúp",
                    description: "Nhấp đúp vào hành động trên tin nhắn của riêng bạn"
                },
                doubleClickOthersAction: {
                    label: "Hành động nhấp đúp (Khác)",
                    description: "Thao tác nhấn đúp vào tin nhắn của người khác"
                },
                doubleClickModifier: {
                    label: "Công cụ sửa đổi nhấp đúp",
                    description: "Cần có công cụ sửa đổi cho hành động nhấp đúp"
                },
                tripleClickAction: {
                    label: "Hành động ba cú nhấp chuột",
                    description: "Hành động ba cú nhấp chuột"
                },
                tripleClickModifier: {
                    label: "Công cụ sửa đổi ba lần nhấp",
                    description: "Cần có công cụ sửa đổi cho ba hành động nhấp chuột"
                },
                reactEmoji: {
                    label: "Biểu tượng cảm xúc phản ứng",
                    description: "Biểu tượng cảm xúc để sử dụng cho hành động phản ứng"
                },
                addAdditionalReacts: {
                    label: "Thêm phản ứng bổ sung",
                    description: "Đồng thời thêm biểu tượng cảm xúc phản ứng được định cấu hình bổ sung"
                },
                additionalReactEmojis: {
                    label: "Biểu tượng cảm xúc phản ứng bổ sung",
                    description: "Các biểu tượng cảm xúc bổ sung sẽ được thêm vào khi sử dụng hành động phản ứng (được phân tách bằng dấu phẩy/enter, tối đa {{count}})"
                },
                disableInDms: {
                    label: "Vô hiệu hóa trong DM",
                    description: "Vô hiệu hóa tất cả các hành động nhấp chuột trong tin nhắn trực tiếp"
                },
                disableInSystemDms: {
                    label: "Vô hiệu hóa trong DM hệ thống",
                    description: "Vô hiệu hóa tất cả các hành động nhấp chuột trong DM hệ thống"
                },
                clickTimeout: {
                    label: "Nhấp vào Hết thời gian",
                    description: "Thời gian chờ (ms) để phân biệt nhấp đúp/ba lần"
                },
                doubleClickHoldThreshold: {
                    label: "Ngưỡng duy trì nhấp đúp",
                    description: "Thời gian giữ tối đa (ms) cho hành động nhấp đúp. Cho phép lựa chọn văn bản để giữ lâu hơn"
                },
                deferDoubleClickForTriple: {
                    label: "Trì hoãn nhấp đúp để nhấp ba lần",
                    description: "Trì hoãn nhấp đúp để cho phép hành động nhấp ba lần (nhấp ba lần sẽ bị tắt nếu tắt)"
                },
                selectionHoldTimeout: {
                    label: "Hết thời gian giữ lựa chọn",
                    description: "Thời gian chờ (ms) để cho phép chọn văn bản"
                },
                quoteWithReply: {
                    label: "Trả lời kèm trích dẫn",
                    description: "Khi trích dẫn cũng trả lời tin nhắn"
                },
                useSelectionForQuote: {
                    label: "Sử dụng lựa chọn để báo giá",
                    description: "Khi trích dẫn hãy sử dụng văn bản đã chọn (nếu có)"
                }
            },
            actions: {
                none: "Không có",
                delete: "Sil",
                copyLink: "Sao chép liên kết",
                copyID: "Sao chép giấy tờ tùy thân",
                copyContent: "Sao chép nội dung",
                copyUserID: "Sao chép ID người dùng",
                edit: "Biên tập",
                reply: "Hồi đáp",
                react: "Phản ứng",
                openThread: "Mở chủ đề",
                openTab: "Mở trong tab",
                quote: "trích dẫn",
                pin: "Ghim nó"
            },
            missingPermissions: {
                react: "Không thể phản hồi: Thiếu quyền",
                pin: "Không thể khắc phục: Thiếu quyền",
            },
            cannotQuote: "Loại tin nhắn này không thể được trích dẫn",
            copy: {
                messageId: "ID tin nhắn đã được sao chép!",
                messageContent: "Đã sao chép nội dung tin nhắn!",
                userId: "ID người dùng đã được sao chép!"
            },
            linkCopied: "Đã sao chép liên kết!"
        },
        messageColors: {
            name: "Tin nhắnMàu sắc",
            description: "Hiển thị mã màu trong tin nhắn, chẳng hạn như #FF0042.",
            option: {
                renderType: {
                    label: "Loại trực quan",
                    description: "Xác định cách hiển thị màu sắc",
                    textColor: "màu văn bản",
                    block: "chặn bên cạnh",
                    backgroundColor: "màu nền"
                },
                enableShortHexCodes: {
                    label: "Kích hoạt mã Hex ngắn",
                    description: "Kích hoạt mã hex gồm 3 ký tự như #39f"
                },
                blockView: {
                    label: "Loại xem khối",
                    description: "Xác định cách hiển thị các khối màu",
                    right: "Bên phải",
                    left: "Bên trái",
                    both: "cả hai bên"
                }
            }
        },
        messageFetchTimer: {
            name: "Bộ đếm thời gian tìm nạp tin nhắn",
            description: "Hiển thị thời gian tải tin nhắn của kênh hiện tại.",
            option: {
                showIcon: {
                    label: "Hiển thị biểu tượng",
                    description: "Hiển thị biểu tượng thời gian tải trên thanh tin nhắn"
                },
                showMs: {
                    label: "Hiển thị mili giây",
                    description: "Hiển thị thời gian tính bằng mili giây"
                },
                iconColor: {
                    label: "Màu biểu tượng",
                    description: "Màu biểu tượng (giá trị màu CSS)"
                }
            },
            loaded: "Tin nhắn được tải sau {{time}}ms ({{timeAgo}})",
            day: "ngày trước",
            hour: "giờ trước",
            minute: "phút trước",
            justNow: "Hiện nay"
        },
        messageLatency: {
            name: "Tin nhắnĐộ trễ",
            description: "Thêm chỉ báo cho các tin nhắn mất ≥n giây để gửi.",
            day: "ngày",
            days: "ngày",
            hour: "chốc lát",
            hours: "chốc lát",
            minute: "phút",
            minutes: "phút",
            second: "thứ hai",
            seconds: "thứ hai",
            millisecond: "mili giây",
            milliseconds: "mili giây",
            and: "đã",
            oldKotlinDetected: "Người dùng bị nghi ngờ đang sử dụng ứng dụng khách Discord Android đã lỗi thời.",
            ahead: "Thời gian của người dùng này còn trước {{delta}}.",
            delay: "Tin nhắn này được gửi với độ trễ {{delta}}.",
            delayedMessage: "Tin nhắn bị trì hoãn",
            oldAndroidClient: "Ứng dụng khách Android Discord kế thừa",
            option: {
                latency: {
                    label: "Trì hoãn",
                    description: "Giá trị ngưỡng tính bằng giây cho chỉ báo độ trễ"
                },
                detectDiscordKotlin: {
                    label: "Phát hiện sự bất hòa Kotlin",
                    description: "Phát hiện ứng dụng khách Discord Android cũ"
                },
                showMillis: {
                    label: "Hiển thị mili giây",
                    description: "Hiển thị mili giây"
                },
                ignoreSelf: {
                    label: "Bỏ qua bản thân",
                    description: "Thêm chỉ báo vào tin nhắn của riêng bạn"
                }
            }
        },
        messageLinkEmbeds: {
            name: "Tin nhắnLiên kếtNhúng",
            description: "Thêm bản xem trước cho các tin nhắn có chứa liên kết đến một tin nhắn khác.",
            option: {
                messageBackgroundColor: {
                    label: "Màu nền tin nhắn",
                    description: "Màu nền cho thư ở dạng nhúng phong phú"
                },
                automodEmbeds: {
                    label: "chôn cất tự động",
                    description: "Sử dụng nội dung nhúng tự động thay vì nội dung nhúng phong phú (nhỏ hơn nhưng chứa ít thông tin hơn)",
                    always: "Luôn sử dụng nhúng automod",
                    prefer: "Thích nhúng Automod hơn, nhưng sử dụng nhúng phong phú nếu một số nội dung không thể được hiển thị",
                    never: "Không bao giờ sử dụng nhúng automod"
                },
                listMode: {
                    label: "Chế độ danh sách",
                    description: "Xác định xem danh sách ID sẽ được sử dụng làm danh sách đen hay danh sách trắng",
                    blacklist: "Danh sách đen",
                    whitelist: "Danh sách trắng"
                },
                idList: {
                    label: "Danh sách ID",
                    description: "ID máy chủ/kênh/người dùng sẽ được thêm vào danh sách đen hoặc danh sách trắng (cách nhau bằng dấu phẩy)"
                },
                clearMessageCache: {
                    label: "Xóa bộ nhớ đệm tin nhắn",
                    description: "Xóa bộ nhớ đệm của tin nhắn được liên kết"
                }
            },
            noContent: {
                noAttachments: "không có nội dung {{count}} tin nhắn nhúng",
                noEmbeds: "không có nội dung bổ sung {{count}}",
                both: "không có nội dung, tệp đính kèm {{attachments}} và tin nhắn nhúng {{embeds}}"
            },
            dm: "Tin nhắn riêng",
            groupDm: "Tin nhắn nhóm",
            server: "Người trình bày"
        },
        messageLinkTooltip: {
            name: "Chú giải công cụ liên kết tin nhắn",
            description: "Thêm chú giải công cụ và bản xem trước tin nhắn khi di chuột qua các liên kết tin nhắn, câu trả lời và tin nhắn được chuyển tiếp.",
            loading: "Đang tải...",
            option: {
                onLink: {
                    label: "Trên liên kết",
                    description: "Hiển thị chú giải công cụ khi di chuột qua các liên kết tin nhắn"
                },
                onReply: {
                    label: "Đang phản hồi",
                    description: "Hiển thị chú giải công cụ khi di chuột qua thư trả lời"
                },
                onForward: {
                    label: "Trên tin nhắn đã truyền",
                    description: "Hiển thị chú giải công cụ khi di chuột qua các tin nhắn được chuyển tiếp"
                },
                display: {
                    label: "Vẻ bề ngoài",
                    description: "Phong cách ngoại hình",
                    auto: "Tương tự như tin nhắn",
                    compact: "Nhỏ gọn",
                    cozy: "Thoải mái"
                }
            }
        },
        messageLogger: {
            name: "MessageLogger",
            description: "Tạm thời lưu các tin nhắn đã xóa và chỉnh sửa.",
            removeMessage: "Xóa lịch sử tin nhắn",
            removeMessageTemporary: "Xóa tin nhắn (Tạm thời)",
            clearMessageLog: "Xóa nhật ký tin nhắn",
            modal: {
                edit: {
                    title: "Lịch sử chỉnh sửa tin nhắn",
                    tooltip: "Trạng thái chỉnh sửa này không thể hiển thị vì nó chưa được lưu."
                }
            },
            option: {
                deleteStyle: {
                    label: "Xóa kiểu",
                    description: "Phong cách xuất hiện của tin nhắn đã xóa",
                    text: "văn bản màu đỏ",
                    overlay: "lớp phủ màu đỏ"
                },
                logDeletes: {
                    label: "Lưu Đã xóa",
                    description: "Xác định tin nhắn đã xóa có được lưu hay không"
                },
                collapseDeleted: {
                    label: "Đã xóa thu gọn",
                    description: "Tinh chỉnh các tin nhắn đã xóa tương tự như tin nhắn bị chặn"
                },
                logEdits: {
                    label: "Lưu đã chỉnh sửa",
                    description: "Xác định có lưu tin nhắn đã chỉnh sửa hay không"
                },
                inlineEdits: {
                    label: "Chỉnh sửa nội tuyến",
                    description: "Hiển thị lịch sử chỉnh sửa như một phần nội dung tin nhắn"
                },
                ignoreBots: {
                    label: "Bỏ qua Bot",
                    description: "Bỏ qua tin nhắn được gửi bởi bot"
                },
                ignoreSelf: {
                    label: "Bỏ qua bản thân",
                    description: "Bỏ qua tin nhắn của chính mình"
                },
                ignoreUsers: {
                    label: "Bỏ qua người dùng",
                    description: "Danh sách ID người dùng được phân tách bằng dấu phẩy cần bỏ qua"
                },
                ignoreChannels: {
                    label: "Bỏ qua kênh",
                    description: "Danh sách ID kênh được phân tách bằng dấu phẩy cần bỏ qua"
                },
                ignoreGuilds: {
                    label: "Bỏ qua máy chủ",
                    description: "Danh sách ID máy chủ được phân tách bằng dấu phẩy cần bỏ qua"
                },
                showEditDiffs: {
                    label: "Hiển thị chỉnh sửa sự khác biệt",
                    description: "Hiển thị sự khác biệt giữa các phiên bản tin nhắn đã chỉnh sửa"
                },
                separatedDiffs: {
                    label: "Chia sự khác biệt",
                    description: "Cung cấp chế độ xem dễ đọc hơn bằng cách hiển thị các phần bổ sung và xóa riêng biệt trong các khác biệt"
                }
            }
        },
        messageLoggerEnhanced: {
            name: "MessageLoggerTăng cường",
            description: "Nó tăng cường plugin MessageLogger với các tính năng bổ sung.",
            updateImageCacheDir: "Thư mục bộ nhớ đệm trực quan đã được cập nhật thành công.",
            updateLogsDir: "Thư mục nhật ký đã được cập nhật thành công.",
            failedUpdate: "Không thể cập nhật thư mục.",
            blacklist: "Danh sách đen",
            whitelist: "Danh sách trắng",
            failedToRemove: "Không thể xóa tin nhắn",
            successfullyImported: "Nhật ký đã được nhập thành công.",
            errorImportingLogs: "Đã xảy ra lỗi khi nhập nhật ký. Kiểm tra bảng điều khiển để biết thêm thông tin.",
            importing: "Đang nhập khẩu...",
            importLogs: "Nhập nhật ký",
            exporting: "Đang xuất...",
            exportLogs: "Xuất nhật ký",
            alert: {
                clearLogs: {
                    title: "Xóa nhật ký",
                    body: "Bạn có chắc chắn muốn xóa tất cả nhật ký không?",
                    confirmText: "thông thoáng",
                    cancel: "Hủy bỏ"
                },
                clearVisibleLogs: {
                    title: "Xóa nhật ký hiển thị",
                    body: "Bạn có chắc chắn muốn xóa nhật ký {{messages}} không?",
                    confirmText: "thông thoáng",
                    cancel: "Hủy bỏ"
                },
                cleared: "Cơ sở dữ liệu nhật ký tin nhắn và bộ đệm đã bị xóa."
            },
            context: {
                title: "Nhật ký tin nhắn",
                jumpToMessage: "Đi tới Tin nhắn",
                openUserProfile: "Mở hồ sơ người dùng",
                copyContent: "Sao chép nội dung",
                copyUserId: "Sao chép ID người dùng",
                copyMessageId: "Sao chép ID tin nhắn",
                copyChannelId: "Sao chép ID kênh",
                copyServerId: "Sao chép ID máy chủ",
                deleteLog: "Xóa nhật ký",
                fromUsernameDm: "Từ DM của {{username}}",
                fromGroupDm: "Tin nhắn trực tiếp của nhóm {{channelName}}",
                fromServerChannel: "Từ kênh {{channelName}} trên máy chủ {{serverName}}",
                moveTypeTo: "Di chuyển {{type}} đến {{destination}}",
                removeTypeFrom: "Xóa {{type}} khỏi {{list}}",
                openLogsFor: "Mở Nhật ký cho {{name}}",
                openLogs: "Nhật ký mở",
                removeMessage: "Xóa tin nhắn (Vĩnh viễn)",
                removeMessageHistory: "Xóa lịch sử tin nhắn (Vĩnh viễn)",
                deleteMessageHide: "Xóa tin nhắn (Ẩn khỏi Trình ghi nhật ký tin nhắn)",
                addServerToBlacklist: "Thêm máy chủ vào danh sách đen",
                addServerToWhitelist: "Thêm máy chủ vào danh sách trắng",
                removeServerFromBlacklist: "Xóa máy chủ khỏi danh sách đen",
                removeServerFromWhitelist: "Xóa máy chủ khỏi danh sách trắng",
                moveServerToBlacklist: "Di chuyển máy chủ vào danh sách đen",
                moveServerToWhitelist: "Di chuyển máy chủ vào danh sách trắng",
                addUserToBlacklist: "Thêm người dùng vào danh sách đen",
                addUserToWhitelist: "Thêm người dùng vào danh sách trắng",
                removeUserFromBlacklist: "Xóa người dùng khỏi danh sách đen",
                removeUserFromWhitelist: "Xóa người dùng khỏi danh sách trắng",
                moveUserToBlacklist: "Di chuyển người dùng vào danh sách đen",
                moveUserToWhitelist: "Di chuyển người dùng vào danh sách trắng",
                addChannelToBlacklist: "Thêm kênh vào danh sách đen",
                addChannelToWhitelist: "Thêm kênh vào danh sách trắng",
                removeChannelFromBlacklist: "Xóa kênh khỏi danh sách đen",
                removeChannelFromWhitelist: "Xóa kênh khỏi danh sách trắng",
                moveChannelToBlacklist: "Chuyển kênh vào danh sách đen",
                moveChannelToWhitelist: "Chuyển kênh vào danh sách trắng"
            },
            type: {
                server: "Người trình bày",
                user: "người dùng",
                channel: "Kênh"
            },
            button: {
                chooseFolder: "Chọn thư mục",
                browse: "Gozat",
                clearLogs: "Xóa tất cả nhật ký",
                clearVisibleLogs: "Xóa nhật ký hiển thị",
                sortOldest: "Sắp xếp cũ nhất đến mới nhất",
                sortNewest: "Sắp xếp mới nhất đến cũ nhất",
                loadMore: "Tải thêm",
                noResults: "Không có kết quả nào trong tab {{tab}}",
                tryOtherTabs: "Hãy thử tab {{nextTab}} hoặc {{lastTab}}",
                importLogs: "Nhập nhật ký"
            },
            modal: {
                title: "Lọc tin nhắn",
                deleted: "Đã xóa",
                edited: "Được tổ chức",
                ghostPing: "Ping vô hình",
                empty: "Trống rỗng nhỉ",
                importLogs: "ML Nâng cao hiện lưu nhật ký vào IndexedDB. Bạn cần nhập nhật ký cũ của mình từ thư mục nhật ký. Việc nhập không thay đổi nhật ký hiện có."
            },
            clear: {
                title: "Xóa nhật ký",
                description: "Bạn có chắc chắn muốn xóa tất cả nhật ký không?",
                confirm: "thông thoáng",
                cancel: "Hủy bỏ"
            },
            option: {
                saveMessages: {
                    label: "Lưu tin nhắn",
                    description: "Xác định xem tin nhắn đã xóa và chỉnh sửa có được lưu hay không."
                },
                saveImages: {
                    label: "Lưu hình ảnh",
                    description: "Lưu các tệp đính kèm đã xóa."
                },
                sortNewest: {
                    label: "Sắp xếp mới nhất đến cũ nhất",
                    description: "Sắp xếp nhật ký theo mới nhất."
                },
                cacheMessagesFromServers: {
                    label: "Tin nhắn bộ nhớ đệm từ máy chủ",
                    description: "Thông thường, trình ghi nhật ký chỉ ghi lại ID và DM nằm trong danh sách cho phép, việc bật tùy chọn này cũng sẽ ghi lại tin nhắn trên tất cả các máy chủ. Tuy nhiên, điều này có thể vượt quá giới hạn bộ đệm và khiến một số tin nhắn bị bỏ qua."
                },
                ignoreBots: {
                    label: "Bỏ qua Bot",
                    description: "Bỏ qua tin nhắn bot."
                },
                ignoreWebhooks: {
                    label: "Webhookları Yoksay",
                    description: "Bỏ qua tin nhắn webhook."
                },
                ignoreSelf: {
                    label: "Bỏ qua bản thân",
                    description: "Bỏ qua tin nhắn của riêng bạn."
                },
                ignoreMutedGuilds: {
                    label: "Bỏ qua máy chủ bị tắt tiếng",
                    description: "Tin nhắn trên máy chủ bị tắt tiếng không được ghi lại. Tuy nhiên, người dùng/kênh trong danh sách trắng vẫn được ghi lại."
                },
                ignoreMutedCategories: {
                    label: "Bỏ qua các danh mục bị tắt tiếng",
                    description: "Tin nhắn trong các kênh thuộc danh mục bị tắt tiếng sẽ không được ghi lại."
                },
                ignoreMutedChannels: {
                    label: "Bỏ qua các kênh bị tắt tiếng",
                    description: "Tin nhắn trên các kênh bị tắt tiếng sẽ không được ghi lại."
                },
                alwaysLogDirectMessages: {
                    label: "Luôn lưu DM",
                    description: "Luôn lưu tin nhắn trực tiếp."
                },
                alwaysLogCurrentChannel: {
                    label: "Luôn lưu kênh hiện tại",
                    description: "Luôn lưu kênh hiện tại. Các kênh/người dùng trong danh sách đen bị loại trừ."
                },
                permanentlyRemoveLogByDefault: {
                    label: "Xóa vĩnh viễn nhật ký theo mặc định",
                    description: "Trong menu ngữ cảnh MessageLogger chính, tùy chọn xóa khỏi nhật ký tin nhắn mặc định là xóa vĩnh viễn."
                },
                hideMessageFromMessageLoggers: {
                    label: "Ẩn tin nhắn từ người ghi nhật ký",
                    description: "Khi được bật, nó sẽ thêm tùy chọn menu ngữ cảnh để ẩn tin nhắn khỏi các trình ghi nhật ký khác. Nó có thể không an toàn, sử dụng có nguy cơ của riêng bạn."
                },
                showLogsButton: {
                    label: "Hiển thị nút nhật ký",
                    description: "Chuyển đổi xem thanh công cụ có được hiển thị hay không."
                },
                showWhereMessageIsFrom: {
                    label: "Hiển thị nguồn tin nhắn",
                    description: "Hiển thị kênh/tác giả và tên máy chủ của tin nhắn."
                },
                messagesToDisplayAtOnceInLogs: {
                    label: "Số lượng tin nhắn hiển thị đồng thời trong nhật ký",
                    description: "Xác định số lượng tin nhắn hiển thị trong nhật ký tại một thời điểm và số lượng tin nhắn sẽ được thêm vào khi tải nhiều tin nhắn hơn."
                },
                hideMessageFromMessageLoggersDeletedMessage: {
                    label: "Nội dung tin nhắn bị ẩn khỏi Trình ghi nhật ký tin nhắn",
                    description: "Nội dung để thay thế tin nhắn khi ẩn khỏi trình ghi nhật ký tin nhắn được sử dụng."
                },
                messageLimit: {
                    label: "Giới hạn tin nhắn",
                    description: "Số lượng tin nhắn tối đa để lưu. Khi vượt quá giới hạn, tin nhắn cũ sẽ bị xóa. 0 = không giới hạn."
                },
                attachmentSizeLimitInMegabytes: {
                    label: "Giới hạn kích thước tệp đính kèm (MB)",
                    description: "Kích thước tối đa (tính bằng MB) của tệp đính kèm cần lưu. Các tệp đính kèm lớn hơn giá trị này sẽ không được lưu."
                },
                attachmentFileExtensions: {
                    label: "Phần mở rộng tệp bổ sung",
                    description: "Danh sách các phần mở rộng tệp được phân tách bằng dấu phẩy để lưu. Nếu để trống, tất cả các tệp đính kèm sẽ được lưu."
                },
                cacheLimit: {
                    label: "Giới hạn bộ nhớ đệm",
                    description: "Số lượng tin nhắn tối đa để giữ trong bộ nhớ cache. Khi vượt quá giới hạn, tin nhắn cũ sẽ bị xóa."
                },
                timeBasedCleanupMinutes: {
                    label: "Làm sạch phút theo thời gian",
                    description: "Khoảng thời gian phút trong đó việc dọn dẹp các tin nhắn cũ hơn giới hạn tin nhắn sẽ được thực hiện theo thời gian."
                },
                preserveCurrentChannel: {
                    label: "Giữ kênh hiện tại",
                    description: "Khi được bật, các tin nhắn trên kênh hiện được chọn của bạn sẽ không bị ảnh hưởng bởi việc dọn dẹp theo thời gian."
                },
                whitelistedIds: {
                    label: "ID danh sách trắng",
                    description: "ID máy chủ, kênh hoặc ID người dùng được đưa vào danh sách trắng."
                },
                blacklistedIds: {
                    label: "ID danh sách đen",
                    description: "Máy chủ, kênh hoặc ID người dùng bị liệt vào danh sách đen."
                },
                imageCacheDir: {
                    label: "Thư mục bộ nhớ đệm trực quan",
                    description: "Chọn thư mục hình ảnh đã lưu."
                },
                logsDir: {
                    label: "Chỉ mục nhật ký",
                    description: "Chọn thư mục nơi nhật ký sẽ được lưu."
                },
                importLogs: {
                    label: "Nhập nhật ký",
                    description: "Nhập nhật ký từ tập tin."
                },
                exportLogs: {
                    label: "Xuất nhật ký",
                    description: "Xuất nhật ký từ IndexedDB."
                },
                openLogs: {
                    label: "Nhật ký mở",
                    description: "Mở nhật ký."
                },
                openImageCacheFolder: {
                    label: "Mở thư mục bộ nhớ đệm trực quan",
                    description: "Mở thư mục bộ đệm trực quan."
                },
                clearLogs: {
                    label: "Xóa nhật ký",
                    description: "Xóa nhật ký.",
                    title: "Xóa nhật ký",
                    body: "Bạn có chắc chắn muốn xóa tất cả nhật ký không?",
                    confirmText: "thông thoáng",
                    cancel: "Hủy bỏ"
                }
            }
        },
        messageNotifier: {
            name: "Trình thông báo tin nhắn",
            description: "Nhận thông báo khi người dùng được chọn gửi tin nhắn",
            dm: "tin nhắn riêng tư",
            option: {
                users: {
                    label: "Người dùng",
                    description: "Danh sách ID người dùng được phân tách bằng dấu phẩy để nhận thông báo tin nhắn",
                    invalidId: "{{id}} không phải là ID người dùng hợp lệ"
                }
            },
            notification: {
                title: "{{tên người dùng}} đã gửi tin nhắn",
                body: "Nhấp để đi tới {{locationName}}"
            }
        },
        messageTags: {
            name: "Tin nhắnThẻ",
            description: "Nó cho phép bạn lưu tin nhắn và sử dụng chúng bằng một lệnh đơn giản.",
            notExist: "Thẻ **{{tagname}}** không còn tồn tại! Khởi động lại Discord để khắc phục :)",
            alreadyExist: "Thẻ có tên **{{tagname}}** đã tồn tại!",
            sentTag: "Thẻ **{{tagname}}** đã được gửi!",
            successCreate: "**{{tagname}}** thẻ đã được tạo thành công!",
            allTags: "Tất cả các thẻ:",
            noTags: "Up! Chưa có thẻ nào, hãy sử dụng /tag create để tạo chúng!",
            noDeleteTag: "Không tìm thấy thẻ có tên **{{tagname}}** nên không thể xóa được!",
            successDelete: "Thẻ **{{name}}** Đã xóa thành công!",
            tagPreview: "Thẻ có tên **{{name}}** không tồn tại!",
            option: {
                clyde: {
                    label: "Tin nhắn của Clyde trong bài viết",
                    description: "Sau khi được bật, Clyde sẽ gửi cho bạn một tin nhắn tạm thời khi thẻ được sử dụng."
                },
                tagsList: {
                    label: "Danh sách thẻ",
                    description: ""
                }
            },
            command: {
                tags: {
                    description: "Quản lý thẻ của riêng bạn",
                    option: {
                        create: {
                            description: "Tạo nhãn mới",
                            name: "Tên của thẻ sẽ kích hoạt phản hồi",
                            message: "Tin nhắn sẽ được gửi khi bạn sử dụng hashtag này"
                        },
                        list: {
                            description: "Liệt kê tất cả các thẻ"
                        },
                        delete: {
                            description: "Xóa thẻ",
                            name: "Tên tag cần xóa"
                        },
                        preview: {
                            description: "Xem trước thẻ mà không đăng công khai",
                            name: "Tên của thẻ để xem trước"
                        }
                    }
                }
            }
        },
        micLoopbackTester: {
            name: "MicLoopbackTester",
            description: "Thêm biểu tượng kiểm tra vòng lặp micrô vào bảng người dùng",
            button: "Chu kỳ kiểm tra micrô"
        },
        middleClickTweaks: {
            name: "MiddleClickTinh chỉnh",
            description: "Nhiều cải tiến về nhấp chuột giữa (bánh xe chuột) như dán và mở liên kết.",
            option: {
                openScope: {
                    label: "Phạm vi mở",
                    description: "Nó ngăn các loại nội dung này mở khi nhấp chuột giữa.",
                    links: "Liên kết",
                    media: "Phương tiện truyền thông",
                    linksAndMedia: "Liên kết và phương tiện truyền thông",
                    none: "Không có"
                },
                pasteScope: {
                    label: "Phạm vi liên kết",
                    description: "Trong một số trường hợp nhất định, nhấp chuột giữa sẽ ngăn cản việc dán.",
                    always: "Luôn chặn dán bằng cách nhấp chuột giữa",
                    focus: "Chỉ chặn khi vùng văn bản không được tập trung",
                },
                pasteThreshold: {
                    label: "Ngưỡng liên kết",
                    description: "Một phần nghìn giây cần thiết để dán để kích hoạt lại sau khi nhấp chuột giữa."
                }
            }
        },
        moreCommands: {
            name: "Thêmlệnh",
            description: "Echo, Lenny, Mock và hơn thế nữa",
            command: {
                echo: {
                    description: "Gửi tin nhắn dưới dạng Clyde (địa phương)"
                },
                lenny: {
                    description: "Gửi một khuôn mặt Lenny"
                },
                mock: {
                    description: "Làm trò cười cho mọi người (mOcK PeOpLe)"
                },
                wordcount: {
                    description: "Tính số từ trong tin nhắn",
                    response: "Tin nhắn chứa {{count}} từ."
                },
                flipcoin: {
                    description: "Lật đồng xu và trả về kết quả",
                    heads: "Viết",
                    tails: "Tura",
                    response: "Số tiền {{result}} đã đến."
                },
                ask: {
                    description: "Hỏi và trả lời các câu hỏi có/không",
                    yes: "Đúng",
                    no: "KHÔNG",
                    maybe: "Có lẽ",
                    askAgain: "hỏi lại sau",
                    definitelyNot: "Tuyệt đối không",
                    itIsCertain: "Hoàn toàn có"
                },
                randomanimal: {
                    description: "Trả về hình ảnh động vật ngẫu nhiên",
                    animal: "chọn con vật của bạn",
                    cat: "con mèo",
                    dog: "chó",
                    response: "Xin lỗi, không thể lấy hình ảnh động vật vào thời điểm này"
                },
                randomnumber: {
                    description: "Tạo một số ngẫu nhiên giữa hai giá trị",
                    min: "tối thiểu",
                    max: "giá trị tối đa",
                    response: "Số ngẫu nhiên giữa {{min}} và {{max}}: {{number}}"
                },
                choose: {
                    description: "Chọn ngẫu nhiên một trong số các tùy chọn đã cho",
                    option: "Danh sách tùy chọn được phân tách bằng dấu phẩy",
                    response: "Lựa chọn của tôi: {{choice}}"
                },
                systeminfo: {
                    description: "Hiển thị thông tin hệ thống",
                    platform: "Nền tảng",
                    deviceType: "Loại thiết bị",
                    mobile: "Điện thoại di động",
                    desktop: "máy tính để bàn",
                    browser: "Máy quét",
                    cpuCores: "lõi CPU",
                    memory: "Ký ức",
                    screen: "Màn hình",
                    languages: "Dil",
                    network: "Trắng",
                    online: "trực tuyến",
                    offline: "ngoại tuyến",
                    failedToFetch: "Không thể truy xuất thông tin hệ thống",
                    unknown: "không rõ"
                },
                getuptime: {
                    description: "Hiển thị thời gian hoạt động của khách hàng",
                    response: "**Thời gian hoạt động của khách hàng**: {{uptime}} phút"
                },
                gettime: {
                    description: "Hiển thị thời gian hiện tại",
                    response: "Thời gian hiện tại: {{time}}"
                },
                transform: {
                    description: "Chuyển đổi văn bản theo tùy chọn đã chỉ định",
                    transformation: {
                        description: "Kiểu chuyển đổi áp dụng cho văn bản",
                        lowercase: "Chuyển văn bản sang chữ thường",
                        uppercase: "Chuyển văn bản thành chữ hoa",
                        localeLowercase: "Chuyển đổi văn bản thành chữ thường gốc",
                        localeUppercase: "Chuyển đổi văn bản thành chữ hoa gốc",
                        same: "cứ để vậy đi"
                    },
                    repeat: "Nó sẽ được lặp lại bao nhiêu lần?",
                    reverse: "Có đảo ngược văn bản hay không",
                    normalize: {
                        description: "Định dạng chuẩn hóa văn bản",
                        nfc: "Định dạng chuẩn hóa C (NFC)",
                        nfd: "Mẫu chuẩn hóa D (NFD)",
                        nfkc: "Định dạng chuẩn hóa KC (NFKC)",
                        nfkd: "Định dạng chuẩn hóa KD (NFKD)"
                    },
                    text: "Văn bản cần chuyển đổi"
                }
            }
        },
        moreKaomoji: {
            name: "Thêm Kaomoji",
            description: "Thêm nhiều Kaomoji vào Discord. ヽ(`▽`)/"
        },
        moreQuickReactions: {
            name: "ThêmPhản ứng nhanh",
            description: "Cải thiện các nút phản hồi nhanh trong menu ngữ cảnh tin nhắn.",
            option: {
                reactionCount: {
                    label: "Số lượng phản ứng",
                    description: "Số lượng phản ứng hiển thị (0-42)"
                },
                frequentEmojis: {
                    label: "Biểu tượng cảm xúc thường được sử dụng",
                    description: "Sử dụng biểu tượng cảm xúc được sử dụng thường xuyên thay vì biểu tượng cảm xúc yêu thích"
                },
                rows: {
                    label: "Họ bán",
                    description: "Số dòng phản ứng nhanh để hiển thị"
                },
                columns: {
                    label: "Cột",
                    description: "Số cột phản ứng nhanh để hiển thị"
                },
                compactMode: {
                    label: "Mod nhỏ gọn",
                    description: "Nó chia tỷ lệ các nút thành 75% kích thước ban đầu trong khi phóng to biểu tượng cảm xúc bên trong lên 125%. Biểu tượng cảm xúc sẽ có kích thước bằng 93,75% kích thước ban đầu. Nên sử dụng ít nhất 5 cột"
                },
                scroll: {
                    label: "cuộn",
                    description: "Bật danh sách biểu tượng cảm xúc cuộn"
                }
            }
        },
        moreUserTags: {
            name: "ThêmThẻ người dùng",
            description: "Thêm thẻ cho webhooks và vai trò kiểm duyệt (chủ sở hữu, quản trị viên, v.v.)",
            tag: {
                webhook: {
                    name: "Webhook",
                    description: "Người dùng này là một webhook"
                },
                owner: {
                    name: "Người sở hữu",
                    description: "Chủ sở hữu máy chủ"
                },
                admin: {
                    name: "Quản trị viên",
                    description: "Có quyền quản trị viên"
                },
                staff: {
                    name: "Chính thức",
                    description: "Có thể quản lý máy chủ, kênh hoặc vai trò"
                },
                mod: {
                    name: "mod",
                    description: "Có thể quản lý tin nhắn hoặc khóa/cấm liên hệ"
                },
                vcmod: {
                    name: "Xem Chế độ",
                    description: "Có thể quản lý cuộc trò chuyện thoại"
                },
                chatmod: {
                    name: "Chế độ trò chuyện",
                    description: "Có thể quản lý tin nhắn"
                }
            },
            modal: {
                example: "Ví dụ",
                tag: "Vé",
                customTextPlaceholder: "Văn bản trên nhãn (mặc định: {{displayName}})",
                messages: "Hiển thị trong tin nhắn",
                memberList: "Hiển thị trong danh sách thành viên và hồ sơ"
            },
            option: {
                dontShowForBots: {
                    label: "Không hiển thị cho bot",
                    description: "Hiển thị các thẻ bổ sung cho bot (ngoại trừ webhook)"
                },
                dontShowBotTag: {
                    label: "Hiển thị thẻ bot",
                    description: "Chỉ hiển thị các thẻ bổ sung / Ẩn [APP]"
                },
                showWebhookTagFully: {
                    label: "Hiển thị thẻ webhook đầy đủ",
                    description: "Hiển thị thẻ webhook đầy đủ trong các kênh được theo dõi (ví dụ: thông báo)"
                },
                tagSettings: {
                    label: "Cài đặt thẻ",
                    description: "được lấp đầy"
                }
            }
        },
        morse: {
            name: "Morse",
            description: "Lệnh dịch sang hoặc từ mã morse.",
            command: {
                morse: {
                    description: "Dịch sang hoặc từ mã morse",
                    message: "Văn bản cần chuyển đổi"
                }
            }
        },
        moyai: {
            name: "moyai",
            description: "🗿🗿🗿🗿🗿🗿🗿🗿",
            option: {
                volume: {
                    label: "Âm lượng",
                    description: "🗿🗿🗿 âm lượng"
                },
                quality: {
                    label: "Chất lượng",
                    description: "🗿🗿🗿 chất lượng",
                    normal: "Bình thường",
                    hd: "HD"
                },
                triggerWhenUnfocused: {
                    label: "Kích hoạt khi mất nét",
                    description: "Kích hoạt 🗿 ngay cả khi cửa sổ không được lấy nét"
                },
                ignoreBots: {
                    label: "Bỏ qua Bot",
                    description: "Bỏ qua tin nhắn từ bot"
                },
                ignoreBlocked: {
                    label: "Bỏ qua người dùng bị chặn",
                    description: "Bỏ qua tin nhắn từ người dùng bị chặn"
                }
            }
        },
        musicControls: {
            name: "Điều khiển âm nhạc",
            description: "Điều khiển nhạc và lời bài hát cho nhiều dịch vụ",
            option: {
                SpotifySectionTitle: {
                    label: "Spotify"
                },
                showSpotifyControls: {
                    label: "Hiển thị các điều khiển Spotify",
                    description: "Hiển thị điều khiển nhạc cho Spotify"
                },
                showSpotifyLyrics: {
                    label: "Hiển thị lời bài hát Spotify",
                    description: "Hiển thị lời bài hát cho Spotify"
                },
                useSpotifyUris: {
                    label: "Sử dụng URI Spotify",
                    description: "Spotify mở URI thay vì URL. Chỉ hoạt động nếu Spotify được cài đặt và có thể không hoạt động trên tất cả các nền tảng"
                },
                previousButtonRestartsTrack: {
                    label: "Nút trước Khởi động lại bài hát",
                    description: "Nếu thời gian phát lại lớn hơn 3 giây, nhấn nút trước đó sẽ phát lại bài hát hiện tại từ đầu"
                },
                TidalSectionTitle: {
                    label: "Thủy triều"
                },
                showTidalControls: {
                    label: "Hiển thị kiểm soát thủy triều",
                    description: "Hiển thị điều khiển nhạc cho Tidal"
                },
                showTidalLyrics: {
                    label: "Hiển thị lời bài hát thủy triều",
                    description: "Hiển thị lời bài hát Tidal"
                },
                YtmSectionTitle: {
                    label: "YouTube Âm nhạc",
                    description: "Cần có {{app}} cho cài đặt này"
                },
                showYoutubeMusicControls: {
                    label: "Hiển thị điều khiển âm nhạc trên YouTube",
                    description: "Hiển thị các nút điều khiển nhạc cho YouTube Music"
                },
                YoutubeMusicApiUrl: {
                    label: "URL API YouTube Music",
                    description: "URL của máy chủ API YouTube Music bạn đang sử dụng"
                },
                hoverControls: {
                    label: "Điều khiển di chuột",
                    description: "Hiển thị điều khiển khi di chuột"
                },
                ShowMusicNoteOnNoLyrics: {
                    label: "Hiển thị ghi chú nếu không có lời bài hát",
                    description: "Hiển thị biểu tượng ghi chú khi không tìm thấy lời bài hát"
                },
                LyricsPosition: {
                    label: "Vị trí lời bài hát",
                    description: "Vị trí của bảng lời bài hát",
                    above: "(Những) Người chơi ở trên",
                    below: "(Những) người chơi bên dưới"
                },
                LyricsProvider: {
                    label: "Nhà cung cấp lời bài hát",
                    description: "Nguồn lời bài hát",
                    spotify: "Spotify (Trận đấu âm nhạc)",
                    LRCLIB: "LRCLIB"
                },
                TranslateTo: {
                    label: "Dịch sang ngôn ngữ của bạn",
                    description: "Dịch lời bài hát — Thay đổi điều này sẽ xóa các bản dịch hiện có",
                    cleared: "Đã làm sạch bản dịch"
                },
                LyricsConversion: {
                    label: "Chuyển đổi lời bài hát",
                    description: "Tự động dịch hoặc La-tinh hóa lời bài hát",
                    none: "Không có",
                    translate: "Chuyển thành",
                    romanize: "La Mã hóa Et"
                },
                FallbackProvider: {
                    label: "Nhà cung cấp dự phòng",
                    description: "Nếu một nhà cung cấp lời bài hát không thành công, hãy thử một nhà cung cấp lời bài hát khác"
                },
                ShowFailedToasts: {
                    label: "Hiển thị thông báo lỗi",
                    description: "Hiển thị thông báo khi lời bài hát không tải được"
                },
                PurgeLyricsCache: {
                    label: "Xóa bộ nhớ đệm lời bài hát",
                    description: "Xóa tất cả lời bài hát và bản dịch được lưu trong bộ nhớ đệm",
                    button: "Xóa bộ nhớ đệm",
                    cacheLyricsPurged: "Đã xóa bộ nhớ đệm lời bài hát"
                }
            },
            context: {
                spotify: {
                    label: "Menu lời bài hát Spotify",
                    type: "Menu Spotify {{type}}",
                    copy: "Sao chép tên {{type}}",
                    link: "Sao chép liên kết {{type}}",
                    open: "Mở {{type}} trong Spotify",
                    album: "Menu Album Spotify"
                },
                tidal: {
                    label: "Menu lời bài hát thủy triều",
                    lyrics: "Lời bài hát thủy triều",
                    type: "Thực đơn thủy triều {{name}}",
                    copy: "Sao chép tên {{name}}",
                    open: "Mở {{name}} trên Tidal",
                    album: "Thực đơn album thủy triều"
                },
                ytm: {
                    type: "YouTube Music {{name}} Trình đơn",
                    copy: "Sao chép tên {{name}}",
                    open: "{{name}}’i YouTube Music’te Aç",
                    album: "Menu Album nhạc trên YouTube",
                    muted: "Đã tắt tiếng"
                },
                lyrics: {
                    provider: "Nhà cung cấp lời bài hát",
                    saved: "ghi lại",
                    notFound: "Không tìm thấy lời bài hát đồng bộ"
                },
                copy: {
                    currentLyrics: "Sao chép lời bài hát hiện tại"
                }
            },
            alert: {
                lyricCopied: "Lời bài hát đã được sao chép vào clipboard!",
                noLyrics: "không có lời bài hát",
                noLyricsTo: "Không có lời bài hát cho {{dịch}}",
                translate: "dịch thuật",
                romanize: "đừng La Mã hoá",
                lyricsFetchFailed: "Không thể tìm thấy lời bài hát",
                failedToFetchLyrics: "{{dịch}} không thể truy xuất được",
                translation: "dịch thuật",
                romanization: "sự La-tinh hóa",
                failedToFetchTranslation: "Không thể dịch lời bài hát {{dịch}}"
            },
            modal: {
                install: {
                    title: "Cách cài đặt",
                    install: "{{link}} cài đặt từ đây, sau đó đi tới cài đặt TidaLuna → Cửa hàng tiện ích bổ sung → cài đặt @vmohammad/api",
                    tidaluna: "không có mặt trăng"
                },
                player: {
                    noPlaying: "Không có bản nhạc nào đang phát",
                    artist: "Nghệ sĩ:",
                    album: "Anbum:",
                    noLyrics: "Không tìm thấy lời bài hát :(",
                    progress: "Tiến triển",
                    totalDuration: "Tổng thời lượng"
                },
                type: {
                    song: "Bài hát",
                    artist: "Nghệ sĩ",
                    album: "Album"
                },
                album: {
                    open: "Mở Anbom",
                    viewCover: "Xem bìa album",
                    volume: "Âm lượng",
                    image: "Hình ảnh album"
                }
            },
            provider: {
                lrclib: "LRCLIB",
                spotify: "Spotify",
                translated: "Đã dịch",
                romanized: "La tinh hóa",
                none: "Không có"
            },
            error: {
                failed: "Không tạo được cửa sổ :(",
                checkConsole: "Kiểm tra bảng điều khiển để tìm lỗi",
                invalidUrlCustomApi: "Định dạng URL máy chủ API tùy chỉnh không hợp lệ"
            }
        },
        mutualGroupDMs: {
            name: "DM nhóm chung",
            description: "Hiển thị DM nhóm được chia sẻ trên hồ sơ",
            no: "Không có nhóm chung",
            mutualGroup: "{{count}} Nhóm chung",
            members: "Thành viên",
            noGroup: "Không có DM nhóm công khai",
            header: "Nhóm chung"
        },
        neverPausePreviews: {
            name: "Không bao giờTạm dừngXem trước",
            description: "Ngăn việc tạm dừng các bản xem trước trong cuộc gọi/PiP (chia sẻ màn hình, chương trình phát sóng, v.v.) ngay cả khi ứng dụng mất tiêu điểm.",
            about: "Tiện ích bổ sung này khiến Discord tiêu tốn nhiều tài nguyên hơn bình thường."
        },
        newGuildSettings: {
            name: "Cài đặt bang hội mới",
            description: "Tự động tắt tiếng và thay đổi nhiều cài đặt khác khi tham gia máy chủ mới",
            context: {
                apply: "Áp dụng cài đặt máy chủ mới"
            },
            option: {
                guild: {
                    label: "Tắt tiếng máy chủ",
                    description: "Tự động tắt tiếng máy chủ"
                },
                messages: {
                    label: "Cài đặt thông báo máy chủ",
                    description: "Cài đặt thông báo máy chủ",
                    all: "Tất cả tin nhắn",
                    mentions: "chỉ @đề cập",
                    nothing: "Không có",
                    default: "Máy chủ mặc định"
                },
                everyone: {
                    label: "Ngăn chặn @everyone và @here",
                    description: "Loại bỏ thông báo @everyone và @here"
                },
                role: {
                    label: "Loại bỏ tất cả các @đề cập đến vai trò",
                    description: "Loại bỏ tất cả các @đề cập đến vai trò"
                },
                highlights: {
                    label: "Loại bỏ phần nổi bật",
                    description: "Tự động loại bỏ phần nổi bật"
                },
                events: {
                    label: "Tắt tiếng sự kiện mới",
                    description: "Tự động tắt tiếng các sự kiện mới"
                },
                showAllChannels: {
                    label: "Hiển thị tất cả các kênh",
                    description: "Tự động hiển thị tất cả các kênh"
                },
                mobilePush: {
                    label: "Tắt tiếng thông báo trên thiết bị di động",
                    description: "Tự động tắt tiếng thông báo trên thiết bị di động"
                },
                voiceChannels: {
                    label: "Kênh thoại",
                    description: "Tự động ẩn tên trong kênh thoại"
                }
            }
        },
        newPluginsManager: {
            name: "Trình quản lý plugin mới",
            description: "Công cụ hữu ích thông báo cho bạn khi có plugin mới được thêm vào Plexcord",
            modal: {
                title: "Plugin và cài đặt mới",
                description: "Các plugin và cài đặt mới đã được thêm vào kể từ lần truy cập trước của bạn. Vui lòng xem lại các bổ sung mới bên dưới.",
                tooltip: "Đóng phiên này",
                dontShowAgain: "Đừng hiển thị lại",
                restartRequired: "Các plugin sau yêu cầu khởi động lại",
                restart: "Khởi động lại",
                continue: "Devam Et"
            }
        },
        noAppsAllowed: {
            name: "Không có ứng dụng nào được phép",
            description: "Mang lại thẻ Bot cho bot"
        },
        noBlockedMessages: {
            name: "Không có tin nhắn bị chặn",
            description: "Ẩn hoàn toàn tất cả tin nhắn bị chặn/bỏ qua khỏi cuộc trò chuyện",
            option: {
                alsoHideIgnoredUsers: {
                    label: "Đồng thời ẩn người dùng bị bỏ qua",
                    description: "Đồng thời ẩn tin nhắn khỏi người dùng bị bỏ qua."
                },
                disableNotifications: {
                    label: "Tắt thông báo",
                    description: "Ẩn thông báo tin nhắn mới cho người dùng bị chặn. Những điều sau đây sẽ luôn áp dụng nếu tính năng 'Ẩn người dùng mặc định' được bật và người dùng đã kích hoạt thông báo không có trong danh sách 'Người dùng ngoại lệ'."
                },
                allowAutoModMessages: {
                    label: "Cho phép tin nhắn AutoMod",
                    description: "Cho phép tin nhắn được gửi bởi AutoMod đi qua mà không được lọc."
                },
                hideBlockedUserReplies: {
                    label: "Ẩn câu trả lời của người dùng bị chặn",
                    description: "Ẩn tin nhắn từ những người dùng bị chặn trong các chủ đề bạn đã tham gia trước đó."
                },
                defaultHideUsers: {
                    label: "Ẩn người dùng mặc định",
                    description: "Nếu được bật, tin nhắn từ người dùng bị chặn sẽ bị ẩn hoàn toàn và thay vào đó, tin nhắn từ ID người dùng trong danh sách ngoại lệ sẽ được thu gọn (hành vi Discord mặc định). Nếu bị tắt, tin nhắn từ người dùng bị chặn sẽ bị thu gọn và tin nhắn từ ID người dùng trong danh sách ngoại lệ sẽ bị ẩn hoàn toàn."
                },
                overrideUsers: {
                    label: "Người dùng ngoại lệ",
                    description: "Danh sách ID người dùng được phân tách bằng dấu phẩy để ẩn hoặc thu gọn, thay vì hành vi mặc định đã chọn ở trên."
                }
            }
        },
        noBulletPoints: {
            name: "Không có điểm đạn",
            description: "Dấu đầu dòng Markdown (^, ​​-, *) khiến bạn không thể viết được (thói quen xấu)"
        },
        noDeepLinks: {
            name: "Vô hiệu hóaDeepLinks",
            description: "Vô hiệu hóa tính năng liên kết sâu khó chịu cố gắng buộc mở ứng dụng máy tính để bàn của Discord"
        },
        noDeleteSafety: {
            name: "KhôngXóaAn toàn",
            description: "Loại bỏ yêu cầu 'gõ tên máy chủ' khi xóa máy chủ",
            option: {
                confirmModal: {
                    label: "Cửa sổ xác nhận",
                    description: "'Bạn có chắc chắn muốn xóa máy chủ này không?' Hiển thị cửa sổ xác nhận?"
                }
            },
            modal: {
                title: "Xóa máy chủ?",
                body: "Nó sẽ là vĩnh viễn, nếu điều đó chưa rõ ràng.",
                confirm: "Sil",
                cancel: "Hủy bỏ"
            }
        },
        noDevtoolsWarning: {
            name: "NoDevtoolsCảnh báo",
            description: "Tắt biểu ngữ cảnh báo 'LET'S HIT' trên bảng điều khiển. Là một tác dụng phụ, nó cũng ngăn Discord ẩn mã thông báo của nó, điều này ngăn cản việc đăng xuất ngẫu nhiên."
        },
        noF1: {
            name: "Số F1",
            description: "F1 tắt phím tắt trợ giúp."
        },
        noMaskedUrlPaste: {
            name: "Không có mặt nạUrlDán",
            description: "Khi một liên kết được dán với văn bản đã chọn, nó sẽ ngăn việc dán liên kết đó dưới dạng URL bị ẩn."
        },
        noMirroredCamera: {
            name: "Không có máy ảnh nhân đôi",
            description: "Nó ngăn máy ảnh phản chiếu màn hình."
        },
        noModalAnimation: {
            name: "NoModalHoạt hình",
            description: "Tắt hoạt ảnh mở/đóng trong tất cả các cửa sổ phương thức."
        },
        noMosaic: {
            name: "Không có khảm",
            description: "Xóa bố cục khảm trực quan của Discord.",
            option: {
                inlineVideo: {
                    label: "Video nội tuyến",
                    description: "Phát video mà không lặp lại phương thức."
                }
            }
        },
        noNitroUpsell: {
            name: "Không có NitroUpsell",
            description: "Xóa TẤT CẢ thông báo bán Nitro khỏi Discord bằng cách lừa khách hàng nghĩ rằng bạn sở hữu Nitro."
        },
        noOnboarding: {
            name: "Không giới thiệu",
            description: "Nó cho phép đăng nhập nhanh hơn bằng cách bỏ qua quá trình tham gia máy chủ của Discord."
        },
        noOnboardingDelay: {
            name: "Không có sự chậm trễ giới thiệu",
            description: "Bỏ qua sự chậm trễ khi tham gia máy chủ chậm và khó chịu."
        },
        noPendingCount: {
            name: "Không có số lượng đang chờ xử lý",
            description: "Loại bỏ số lượng thông báo về yêu cầu kết bạn, yêu cầu tin nhắn và ưu đãi Nitro.",
            option: {
                hideFriendRequestsCount: {
                    label: "Ẩn số lượng yêu cầu kết bạn",
                    description: "Ẩn số lượng yêu cầu kết bạn đến"
                },
                hideMessageRequestsCount: {
                    label: "Ẩn số lượng yêu cầu tin nhắn",
                    description: "Ẩn số lượng yêu cầu tin nhắn"
                },
                hidePremiumOffersCount: {
                    label: "Ẩn số lượng ưu đãi Nitro",
                    description: "Ẩn số lượng ưu đãi nitro"
                }
            }
        },
        noProfileThemes: {
            name: "Không có hồ sơChủ đề",
            description: "Nó loại bỏ hoàn toàn chủ đề hồ sơ Nitro cho tất cả mọi người ngoại trừ chính bạn."
        },
        noPushToTalk: {
            name: "Không Đẩy Để Nói",
            description: "Bỏ qua yêu cầu nhấn để nói đối với hoạt động bằng giọng nói trên các kênh yêu cầu điều đó."
        },
        noReplyMention: {
            name: "Không Trả lờiĐề cập",
            description: "Tắt ping trả lời theo mặc định.",
            option: {
                userList: {
                    label: "Danh sách người dùng",
                    description: "Danh sách người dùng sẽ được phép hoặc miễn ping (phải cách nhau bằng dấu phẩy hoặc dấu cách)"
                },
                roleList: {
                    label: "Danh sách vai trò",
                    description: "Danh sách các vai trò sẽ cho phép hoặc miễn ping (phải phân tách bằng dấu phẩy hoặc dấu cách)"
                },
                shouldPingListed: {
                    label: "Ping được liệt kê",
                    description: "Hành vi",
                    dontPing: "Ping người dùng/vai trò được liệt kê",
                    onlyPing: "Ping chỉ liệt kê người dùng/vai trò"
                },
                inverseShiftReply: {
                    label: "Hành vi phản ứng chuyển số ngược",
                    description: "Đảo ngược hành vi trả lời ca của Discord (đề cập đến người dùng khi trả lời ca khi được bật)"
                }
            }
        },
        normalizeMessageLinks: {
            name: "Bình thường hóaMessageLinks",
            description: "Xóa tiền tố canary/ptb khỏi liên kết tin nhắn."
        },
        noRoleHeaders: {
            name: "Không có tiêu đề",
            description: "Tất cả chúng ta đều bình đẳng!! Xóa chức danh vai trò khỏi danh sách thành viên."
        },
        noRPC: {
            name: "NoRPC",
            description: "Discord vô hiệu hóa sự hiện diện phong phú."
        },
        noServerEmojis: {
            name: "Biểu tượng cảm xúc từ máy chủ",
            description: "Máy chủ không hiển thị biểu tượng cảm xúc trong menu tự động hoàn thành.",
            option: {
                shownEmojis: {
                    label: "Biểu tượng cảm xúc được hiển thị",
                    description: "Chọn biểu tượng cảm xúc nào sẽ hiển thị trong menu tự động hoàn thành",
                    onlyUnicode: "Chỉ biểu tượng cảm xúc Unicode",
                    currentServer: "Biểu tượng cảm xúc và biểu tượng cảm xúc Unicode trên máy chủ hiện tại",
                    all: "Biểu tượng cảm xúc Unicode và tất cả biểu tượng cảm xúc của máy chủ (Mặc định Discord)"
                }
            }
        },
        noSystemBadge: {
            name: "Không có huy hiệu hệ thống",
            description: "Tắt huy hiệu thông báo chưa đọc trên thanh tác vụ và khay hệ thống."
        },
        notificationTitle: {
            name: "Tiêu đề thông báo",
            description: "Làm cho thông báo trên màn hình có nhiều thông tin hơn."
        },
        notificationVolume: {
            name: "Khối lượng thông báo",
            description: "Đặt âm lượng tùy chỉnh cho thông báo Discord.",
            option: {
                notificationVolume: {
                    label: "Âm thanh thông báo",
                    description: "Khối lượng thông báo"
                }
            }
        },
        noTypingAnimation: {
            name: "Không Đánh MáyHoạt Hình",
            description: "Tắt hoạt ảnh gõ trong cuộc trò chuyện."
        },
        noUnblockToJump: {
            name: "KhôngBỏ chặnĐểNhảy",
            description: "Nó cho phép bạn bỏ qua tin nhắn từ những người dùng bị chặn hoặc bị bỏ qua (và có thể cả những kẻ gửi thư rác) mà không cần bỏ chặn chúng."
        },
        onePingPerDM: {
            name: "OnePingPerDM",
            description: "Ngay cả khi người dùng gửi liên tiếp các tin nhắn chưa đọc trong DM, bạn sẽ chỉ nhận được một thông báo bằng âm thanh.",
            option: {
                channelToAffect: {
                    label: "Loại kênh bị ảnh hưởng",
                    description: "Chọn loại DM mà plugin sẽ ảnh hưởng",
                    both: "Cả hai",
                    user: "DM của người dùng",
                    group: "DM nhóm"
                },
                allowMentions: {
                    label: "@AllowMentions",
                    description: "Nhận thông báo bằng âm thanh cho lượt đề cập @"
                },
                allowEveryone: {
                    label: "Cho phép @mọi người",
                    description: "Nhận thông báo âm thanh cho @everyone và @here trong DM nhóm"
                },
                ignoreUsers: {
                    label: "Người dùng bỏ qua",
                    description: "ID người dùng KHÔNG BAO GIỜ giới hạn thông báo (phân tách bằng dấu phẩy + dấu cách)"
                },
                alwaysPlaySound: {
                    label: "Luôn phát âm thanh",
                    description: "Phát âm thanh ngay cả khi âm thanh thông báo bị tắt"
                }
            }
        },
        openInApp: {
            name: "Mở trong ứng dụng",
            description: "Mở liên kết trong các ứng dụng liên quan thay vì trình duyệt",
            option: {
                spotify: {
                    label: "Spotify",
                    description: "Mở liên kết Spotify trong ứng dụng Spotify"
                },
                steam: {
                    label: "Hơi nước",
                    description: "Mở liên kết Steam trong ứng dụng Steam"
                },
                epic: {
                    label: "Trò chơi sử thi",
                    description: "Mở liên kết Epic Games trong Trình khởi chạy Epic Games"
                },
                tidal: {
                    label: "Thủy triều",
                    description: "Mở liên kết Tidal trong ứng dụng Tidal"
                },
                itunes: {
                    label: "iTunes",
                    description: "Mở liên kết Apple Music trong ứng dụng iTunes"
                },
                vrcx: {
                    label: "VRChat",
                    description: "Mở liên kết VRChat trong ứng dụng VRChat"
                }
            },
            notification: {
                open: "Đã mở liên kết trong ứng dụng gốc"
            }
        },
        overrideForumDefaults: {
            name: "Ghi đè Diễn đànMặc định",
            description: "Cho phép bạn ghi đè thứ tự sắp xếp/bố cục diễn đàn mặc định. Bạn vẫn có thể thực hiện thay đổi theo từng kênh.",
            option: {
                defaultLayout: {
                    label: "Bố cục mặc định",
                    description: "Chọn bố cục sẽ sử dụng làm mặc định",
                    list: "Danh sách",
                    gallery: "Phòng trưng bày"
                },
                defaultSortOrder: {
                    label: "Thứ tự sắp xếp mặc định",
                    description: "Chọn thứ tự sắp xếp sẽ sử dụng theo mặc định",
                    recentlyActive: "Hoạt động lần cuối",
                    datePosted: "Ngày đăng"
                }
            }
        },
        partyMode: {
            name: "Chế độ tiệc tùng",
            description: "Cho phép bạn sử dụng chế độ nhóm vì bữa tiệc không bao giờ kết thúc ✨",
            option: {
                superIntensePartyMode: {
                    label: "Chế độ tiệc tùng siêu mãnh liệt",
                    description: "Mật độ đảng",
                    normal: "Bình thường",
                    better: "Tốt hơn",
                    projectX: "Dự án X"
                }
            }
        },
        pauseInvitesForever: {
            name: "Tạm dừngLời mờiMãi mãi",
            description: "Nó mang lại tùy chọn 'tạm dừng lời mời vô thời hạn' mà Discord đã loại bỏ một cách ngu ngốc.",
            pauseIndefinitely: "Tạm dừng vô thời hạn"
        },
        permissionFreeWill: {
            name: "Giấy phépMiễn phíÝ chí",
            description: "Vô hiệu hóa các hạn chế phía máy khách trong quản lý quyền của kênh.",
            option: {
                lockout: {
                    label: "sự bế tắc",
                    description: "Bỏ qua bảo vệ sự cố quyền ('Bạn có chắc chắn muốn thực hiện việc này không?')"
                },
                onboarding: {
                    label: "Yêu cầu bắt đầu",
                    description: "Bỏ qua các yêu cầu cài đặt có thể khiến máy chủ không tương thích ('Thay đổi này có thể khiến máy chủ của bạn không tương thích […]')"
                }
            }
        },
        permissionsViewer: {
            name: "QuyềnViewer",
            description: "Cho phép bạn xem các quyền mà người dùng hoặc kênh có và vai trò của máy chủ.",
            view: "Xem quyền",
            option: {
                permissionsSortOrder: {
                    label: "Thứ tự sắp xếp quyền",
                    description: "Phương pháp sắp xếp được sử dụng để xác định cách một vai trò cấp quyền cụ thể cho người dùng",
                    highest: "Vai trò cao nhất",
                    lowest: "Vai trò thấp nhất"
                }
            },
            icon: {
                denied: "vật bị loại bỏ",
                allowed: "Cho phép",
                notOverwritten: "Không bị ghi đè"
            },
            context: {
                permissions: "Quyền"
            },
            modal: {
                title: "Quyền",
                noPermissions: "Không có quyền hiển thị!",
                owner: "người sở hữu",
                grantedBy: "cho phép",
                serverOwner: "Chủ sở hữu máy chủ",
                ownerRole: "Người sở hữu",
                sortingBy: "{{method}} được sắp xếp theo mức độ ưu tiên",
                highest: "Vai trò cao nhất",
                lowest: "Vai trò thấp nhất",
                details: "Chi tiết vai trò"
            }
        },
        petpet: {
            name: "Thú cưngThú cưng",
            description: "Thêm lệnh /petpet để tạo gif petpet từ bất kỳ hình ảnh nào",
            command: {
                petpet: {
                    description: "Tạo một gif thú cưng. Bạn chỉ có thể chỉ định một trong các tùy chọn hình ảnh",
                    delay: "Độ trễ giữa mỗi khung hình. Mặc định là 20.",
                    resolution: "Độ phân giải cho gif. Mặc định là 120. Nếu bạn nhập một số điên và Discord bị treo thì đó là lỗi của bạn.",
                    image: "Đính kèm hình ảnh để sử dụng",
                    url: "URL để lấy hình ảnh",
                    user: "Người dùng có hình đại diện sẽ được sử dụng làm hình ảnh",
                    noServerPfp: "Sử dụng hình đại diện bình thường thay vì máy chủ cụ thể khi sử dụng tùy chọn 'người dùng'",
                    error: {
                        noImage: "Không có hình ảnh được chỉ định!",
                        delayTooLow: "Độ trễ phải ít nhất là 20.",
                    }
                }
            },
            error: {
                uploadNotImage: "Tệp được tải lên không phải là hình ảnh",
                fetchUserFailed: "Không thể truy xuất người dùng. Kiểm tra bảng điều khiển để biết thêm thông tin.",
                fetchImageFailed: "Đã xảy ra lỗi khi tải {{url}}. Kiểm tra bảng điều khiển để biết thêm thông tin."
            }
        },
        pictureInPicture: {
            name: "Hình ẢnhTrong Hình Ảnh",
            description: "Thêm tính năng ảnh trong ảnh vào video (bên cạnh nút Tải xuống)",
            tooltip: "Chuyển đổi hình ảnh trong hình ảnh",
            option: {
                loop: {
                    label: "Vòng lặp",
                    description: "Có lặp lại video PiP hay không"
                }
            }
        },
        pinDMs: {
            name: "PinDM",
            description: "Cho phép bạn ghim các kênh riêng tư (DM) vào đầu danh sách DM của bạn. Bạn có thể nhấp chuột phải vào DM để ghim/xóa hoặc thay đổi thứ tự DM.",
            context: {
                category: {
                    label: "Menu danh mục DM",
                    edit: "Chỉnh sửa danh mục",
                    up: "Di chuyển lên",
                    down: "Di chuyển xuống",
                    delete: "Xóa danh mục",
                    unnamed: "vô danh"
                },
                pin: {
                    label: "DM Sabitle",
                    addCategory: "Chuyên mục Kinh tởm"
                },
                unPin: {
                    label: "Bỏ ghim DM",
                    move: "Chuyển đến danh mục"
                }
            },
            option: {
                pinOrder: {
                    label: "Sửa đơn hàng",
                    description: "DM được ghim sẽ hiển thị theo thứ tự nào?",
                    lastMessage: "Đến ngày nhắn tin cuối cùng",
                    custom: "Riêng tư (thay đổi thứ tự bằng cách nhấp chuột phải vào kênh)"
                },
                canCollapseDmSection: {
                    label: "Phần cố định có thể gập lại",
                    description: "Làm cho phần DM chưa được phân loại có thể thu gọn được"
                },
                dmSectionCollapsed: {
                    label: "Phần DM bị thu hẹp",
                    description: "Thu gọn phần DM"
                },
                userBasedCategoryList: {
                    label: "Danh sách danh mục dựa trên người dùng",
                    description: ""
                }
            },
            modal: {
                category: {
                    pin: "Ghim danh mục",
                    edit: "Chỉnh sửa danh mục",
                    new: "Danh mục mới",
                    name: "Tên",
                    color: "Màu sắc",
                    save: "Cứu",
                    create: "Tạo nên"
                }
            }
        },
        pingNotifications: {
            name: "PingThông báo",
            description: "Thông báo có thể tùy chỉnh và định dạng đề cập được cải thiện",
            option: {
                friends: {
                    label: "Bạn",
                    description: "Nhận thông báo khi bạn bè của bạn gửi tin nhắn trên máy chủ"
                },
                mentions: {
                    label: "Đề cập",
                    description: "Nhận thông báo khi ai đó @đề cập trực tiếp đến bạn"
                },
                dms: {
                    label: "DM'ler",
                    description: "Nhận thông báo cho tin nhắn trực tiếp (DM)"
                },
                showInActive: {
                    label: "Hiển thị trên các kênh đang hoạt động",
                    description: "Hiển thị thông báo ngay cả đối với các kênh hiện đang hoạt động"
                },
                ignoreMuted: {
                    label: "Bỏ qua Tắt tiếng",
                    description: "Bỏ qua thông báo từ máy chủ, kênh hoặc người dùng bị tắt tiếng"
                }
            },
            unknown: "không rõ",
            dm: "DM",
            groupDM: "Nhóm DM",
            title: "{{username}} trên kênh {{channelName}}"
        },
        pinIcon: {
            name: "PinBiểu Tượng",
            description: "Thêm biểu tượng ghim vào tin nhắn đã ghim."
        },
        plainFolderIcon: {
            name: "PlainThư MụcBiểu Tượng",
            description: "Nó không hiển thị các biểu tượng máy chủ nhỏ trong các thư mục."
        },
        platformIndicators: {
            name: "Nền tảngChỉ báo",
            description: "Thêm chỉ báo nền tảng (Desktop, Mobile, Web...) cho người dùng.",
            embeddedTooltip: "Bảng điều khiển",
            vrTooltip: "thực tế ảo",
            option: {
                list: {
                    label: "Danh sách",
                    description: "Hiển thị các chỉ số trong danh sách thành viên"
                },
                badges: {
                    label: "phù hiệu",
                    description: "Hiển thị các chỉ báo dưới dạng huy hiệu trên hồ sơ người dùng"
                },
                messages: {
                    label: "Tin nhắn",
                    description: "Hiển thị các chỉ báo bên trong tin nhắn"
                },
                colorMobileIndicator: {
                    label: "Tô màu màn hình điện thoại di động của bạn",
                    description: "Xác định xem chỉ báo di động có màu trạng thái người dùng hay không."
                },
                showBots: {
                    label: "Hiển thị Bot",
                    description: "Xác định xem có hiển thị chỉ báo nền tảng trong bot hay không"
                }
            }
        },
        platformSpoofer: {
            name: "Nền tảng giả mạo",
            description: "Mô phỏng bất kỳ nền tảng hoặc thiết bị nào bạn đang sử dụng",
            about: "Chúng tôi không thể đảm bảo rằng tiện ích bổ sung này sẽ bảo vệ bạn khỏi bị cảnh báo hoặc cấm.",
            platform: {
                desktop: "Ứng dụng khách bất hòa",
                web: "Web bất hòa",
                ios: "Bất hòa iOS",
                android: "Bất hòa Android",
                xbox: "Sự bất hòa nhúng",
                playstation: "Sự bất hòa nhúng",
                vr: "thực tế ảo"
            },
            option: {
                platform: {
                    label: "Nền tảng",
                    description: "Bạn muốn xuất hiện với tư cách là nền tảng nào?",
                    desktop: "máy tính để bàn",
                    web: "Web",
                    android: "Android",
                    ios: "iOS",
                    xbox: "Xbox",
                    playstation: "PlayStation",
                    vr: "thực tế ảo"
                }
            }
        },
        plexcordToolbox: {
            name: "Hộp công cụ Plexcord",
            description: "Thêm nút vào thanh ứng dụng để lưu trữ các hành động nhanh của Plexcord.",
            tooltip: "Hộp công cụ Plexcord",
            context: {
                openLog: "Mở nhật ký thông báo",
                enableQuickCSS: "Kích hoạt QuickCSS",
                openQuickCSS: "Mở QuickCSS",
                openSettings: "Mở cài đặt",
                manageThemes: "Quản lý chủ đề"
            },
            option: {
                showPluginMenu: {
                    label: "Hiển thị menu plugin",
                    description: "Hiển thị menu plugin trong Hộp công cụ Plexcord"
                }
            }
        },
        polishWording: {
            name: "Tiếng Ba LanTừ ngữ",
            description: "Nó thực hiện các chỉnh sửa nhỏ để làm cho tin nhắn của bạn trông đẹp hơn và có ngữ pháp tốt hơn. Kiểm tra các cài đặt",
            option: {
                quickDisable: {
                    label: "Tắt nhanh",
                    description: "Vô hiệu hóa nhanh chóng. Tắt tính năng chỉnh sửa tin nhắn mà không cần phải khởi động lại ứng dụng."
                },
                blockedWords: {
                    label: "từ bị chặn",
                    description: "Các từ không viết hoa (phân cách bằng dấu phẩy)."
                },
                fixApostrophes: {
                    label: "Sửa dấu nháy đơn",
                    description: "Đảm bảo các chữ viết tắt có dấu nháy đơn."
                },
                expandContractions: {
                    label: "Mở từ viết tắt",
                    description: "Nó chuyển đổi các từ viết tắt thành dạng rõ ràng của chúng (chẳng hạn như Don't -> Do not)."
                },
                fixCapitalization: {
                    label: "Chỉnh sửa viết hoa",
                    description: "Cho phép câu bắt đầu bằng chữ in hoa."
                },
                fixPunctuation: {
                    label: "Dấu câu đúng",
                    description: "Chỉnh sửa khoảng trắng xung quanh dấu chấm câu."
                },
                fixPunctuationFrequency: {
                    label: "Tần số chấm câu",
                    description: "Tỷ lệ tần suất đặt dấu chấm ở cuối câu (tính năng này có thể khiến một số người khó chịu).",
                }
            }
        },
        previewMessage: {
            name: "Xem trướcTin nhắn",
            description: "Nó cho phép bạn xem trước tin nhắn của mình trước khi gửi.",
            tooltip: "Xem trước tin nhắn"
        },
        profileSets: {
            name: "Bộ hồ sơ",
            description: "Nó cho phép bạn lưu các cài đặt trước của hồ sơ và tải chúng thông qua Phần Hồ sơ trong Cài đặt.",
            toast: {
                importFailed: "Không thể nhập cài đặt trước hồ sơ. Tệp có thể không hợp lệ.",
            },
            option: {
                avatarSize: {
                    label: "Kích thước hình đại diện",
                    description: "Kích thước avatar trong danh sách cài đặt trước hồ sơ"
                },
            },
            modal: {
                override: "ghi đè",
                merge: "Hợp nhất",
                cancel: "Hủy bỏ",
                timestamp: "{{formattedDate}} vào lúc {{formattedTime}}",
                rename: "Đổi tên",
                update: "Cập nhật",
                moveUp: "Di chuyển lên",
                moveDown: "Di chuyển xuống",
                moveTo: "Chuyển đến trang 1",
                delete: "Xóa bỏ",
                importProfiles: "Nhập hồ sơ",
                importText: "Bạn hiện có {{currentCount}} hồ sơ trong phần này. Bạn có muốn ghi đè chúng hoặc hợp nhất với các cấu hình đã nhập không?",
                heading: "Hồ sơ đã lưu",
                searchProfiles: "Tìm kiếm hồ sơ...",
                profileName: "Tên hồ sơ",
                saving: "Đang lưu...",
                save: "Lưu hồ sơ",
                cancelSearch: "Hủy tìm kiếm",
                search: "Tìm kiếm",
                random: "ngẫu nhiên",
                import: "Nhập khẩu",
                exportAll: "Xuất tất cả"
            }
        },
        questify: {
            name: "Hỏi đáp",
            description: "Nâng cao trải nghiệm nhiệm vụ của bạn với một loạt tính năng hoặc vô hiệu hóa chúng hoàn toàn nếu chúng không phải là thứ bạn muốn.",
            quests: "Nhiệm vụ",
            context: {
                quest: {
                    label: "Menu nút tác vụ",
                    ignore: "Đánh dấu bỏ qua tất cả",
                    reset: "Đặt lại danh sách bỏ qua",
                    fetch: "Tìm nạp nhiệm vụ",
                    markAsIgnored: "Đánh dấu là Bỏ qua",
                    unmarkAsIgnored: "Xóa Bỏ qua",
                    stopAuto: "Dừng tự động hoàn thành",
                    copyQuestID: "Sao chép ID tác vụ",
                    startAuto: "Bắt đầu Tự động Hoàn tất"
                }
            },
            settings: {
                questButton: {
                    title: "Nút tác vụ",
                    description: "Hiển thị nút Nhiệm vụ với chỉ báo tùy chọn cho các Nhiệm vụ chưa được nhận trong danh sách máy chủ.",
                    leftClick: "Hành động nhấp chuột trái",
                    middleClick: "Hành động nhấp chuột giữa",
                    rightClick: "Hành động nhấp chuột phải",
                    visibility: "Hiển thị nút",
                    unclaimedIndicator: "Chỉ báo không được yêu cầu",
                    badgeColor: "Màu huy hiệu",
                    rewardDisplay: "Hiển thị giải thưởng",
                    includedRewardTypes: "Các loại phần thưởng bao gồm",
                    includedRewardTypesDesc: "Khi phát khả năng hiển thị nút, số lượng huy hiệu và âm thanh cảnh báo, chỉ tính các Nhiệm vụ có các loại phần thưởng này là chưa được nhận.",
                    selectRewardTypes: "Chọn loại phần thưởng để đưa vào số lượng không có người nhận...",
                    noRewardType: "Không có tính năng Tác vụ được hỗ trợ với tên này.",
                    default: "Mặc định",
                    disable: "Vô hiệu hóa"
                },
                questFeatures: {
                    title: "Tính năng nhiệm vụ",
                    description: "Thay đổi thuộc tính nhiệm vụ cụ thể.",
                    popupWarning: "Tùy chọn {{disablePopup}} sẽ bị bỏ qua khi hoàn thành Nhiệm vụ và theo dõi tiến trình Nhiệm vụ.",
                    videoQuestInfo: "Tùy chọn {{completeVideo}} sẽ đợi trong suốt thời gian thực hiện Nhiệm vụ video và tự động đánh dấu nhiệm vụ đó là đã hoàn thành.",
                    gameQuestInfo: "Tương tự, tùy chọn {{completeGame}} sẽ chờ trong suốt thời gian của Nhiệm vụ trò chơi và tự động đánh dấu nó là đã hoàn thành. Tùy chọn này chỉ được hỗ trợ trong máy tính để bàn chính thức.",
                    manualStartWarning: "Bạn phải bắt đầu nhiệm vụ theo cách thủ công. Nhấp chuột đầu tiên sẽ khởi chạy Nhiệm vụ ở chế độ nền. Đối với Tác vụ video, các lần nhấp tiếp theo sẽ mở chế độ video như bình thường. Để hủy nhiệm vụ, bạn có thể mở menu ngữ cảnh trong ô Nhiệm vụ và chọn {{stopAuto}}.",
                    tosWarning: "Việc sử dụng bất kỳ tùy chọn nào trong số này đều vi phạm Điều khoản dịch vụ của Discord. Sử dụng có nguy cơ của riêng bạn.",
                    selectFeatures: "Chọn thuộc tính nhiệm vụ cần thay đổi.",
                    disablePopup: "Tắt cửa sổ bật lên tác vụ trên bảng tài khoản",
                    completeVideo: "Hoàn thành nhiệm vụ video trong nền",
                    completeGame: "Hoàn thành nhiệm vụ chơi trò chơi trong nền",
                    stopAuto: "Dừng tự động hoàn thành"
                },
                restyleQuests: {
                    title: "Nhiệm vụ định dạng lại",
                    description: "Đánh dấu Nhiệm vụ bằng màu chủ đề tùy chọn để dễ nhìn.",
                    precedenceNote: "Kiểu Nhiệm vụ đã Yêu cầu và Đã Hết hạn sẽ được ưu tiên ngay cả khi Nhiệm vụ bị bỏ qua.",
                    gradientStyle: "Màu gradient",
                    assetPreload: "Trình tải khởi động nội dung",
                    unclaimed: "Không được yêu cầu",
                    claimed: "Đã yêu cầu",
                    ignored: "bỏ qua",
                    expired: "Hết hạn",
                    intenseGradient: "Độ dốc đúc lại dày đặc",
                    defaultGradient: "Chuyển đổi màu mặc định",
                    blackGradient: "Màu đen tinh tế",
                    noGradient: "Không có độ dốc",
                    loadAllAssets: "Tải tất cả nội dung nhiệm vụ khi tải trang",
                    loadDuringScroll: "Tải nội dung tác vụ trong khi cuộn trang"
                },
                reorderQuests: {
                    title: "Sắp xếp lại nhiệm vụ",
                    description: "Sắp xếp nhiệm vụ theo trạng thái của họ. Áp dụng khi tùy chọn sắp xếp \"Questify\" được chọn trên trang nhiệm vụ.",
                    formatNote: "Danh sách được phân tách bằng dấu phẩy phải chứa tất cả các mục sau: {{items}}.",
                    placeholder: "Bạn phải thêm UNCLAIMED, YÊU CẦU, BỎ QUA, HẾT HẠN tất cả",
                    invalidFormat: "Định dạng không hợp lệ.",
                    unclaimedSubsort: "Xếp hạng phụ chưa được xác nhận",
                    claimedSubsort: "Xếp hạng phụ được xác nhận",
                    ignoredSubsort: "Đơn hàng phụ bị bỏ qua",
                    expiredSubsort: "Xếp hạng phụ đã hết hạn",
                    addedNewest: "Đã thêm (Mới nhất)",
                    addedOldest: "Bổ sung (Cũ nhất)",
                    expiredRecent: "Đã hết hạn (Mới nhất)",
                    expiredLeast: "Đã hết hạn (Ít nhất là mới nhất)",
                    expiringSoon: "Hết hạn (Gần nhất)",
                    expiringLate: "Hết hạn (Mới nhất)",
                    claimedRecent: "Đã yêu cầu (Mới nhất)",
                    claimedLeast: "Đã yêu cầu (Ít nhất là mới nhất)",
                    ignoredQuestProfile: "Hồ sơ nhiệm vụ bị bỏ qua",
                    sharedProfile: "Đã chia sẻ: Tất cả tài khoản trên khách hàng này đều bị bỏ qua.",
                    privateProfile: "Riêng tư: Tất cả tài khoản trên khách hàng này đều có chế độ bỏ qua riêng.",
                    rememberSort: "Ghi nhớ lựa chọn sắp xếp",
                    rememberFilter: "Ghi nhớ lựa chọn bộ lọc",
                    yes: "Đúng",
                    no: "KHÔNG",
                    rememberNote: "Lựa chọn sắp xếp và lọc này đề cập đến các tùy chọn sắp xếp và lọc tích hợp trên trang Nhiệm vụ. Cách sắp xếp tùy chỉnh ở trên chỉ áp dụng khi tùy chọn sắp xếp \"Questify\" được chọn trên trang Nhiệm vụ. Nếu việc thu hồi bị tắt, các tùy chọn sắp xếp hoặc lọc sẽ được đặt lại mỗi khi bạn mở trang Nhiệm vụ."
                },
                fetchingQuests: {
                    title: "Tìm nạp nhiệm vụ",
                    description: "Định cấu hình tần suất Nhiệm vụ được tìm nạp từ Discord và đặt cảnh báo cho Nhiệm vụ mới.",
                    defaultBehavior: "Theo mặc định, Discord chỉ hiển thị Nhiệm vụ khi chúng được cài đặt và bạn truy cập trang Nhiệm vụ. Điều này có nghĩa là nếu không có khoảng thời gian tìm nạp được xác định bên dưới, plugin này sẽ không được thông báo về các Nhiệm vụ mới được thêm vào trong ngày.",
                    requirement: "Điều này phụ thuộc vào việc Nút Nhiệm vụ đang hoạt động và được đặt thành {{unclaimed}} hay được đặt thành {{always}} và các chỉ báo {{pill}}, {{badge}} hoặc {{both}} chưa được xác nhận được bật. Nếu không, không cần phải tìm nạp Nhiệm vụ định kỳ.",
                    blockWarning: "Ngoài ra, nếu {{fetchingQuests}} bị chặn trong cài đặt {{questFeatures}} thì thao tác này sẽ không hoạt động.",
                    fetchInterval: "Phạm vi tìm nạp",
                    alertSound: "Âm thanh cảnh báo",
                    intervalPlaceholder: "Chọn hoặc nhập khoảng thời gian từ 30 phút đến 12 giờ.",
                    intervalFeedback: "Khoảng thời gian nên từ 30 phút đến 12 giờ.",
                    soundPlaceholder: "Chọn âm thanh hoặc cung cấp URL âm thanh tùy chỉnh.",
                    soundFeedback: "Không tìm thấy âm thanh hoặc URL không thuộc miền được hỗ trợ.",
                    disabled: "Tàn tật",
                    minutes: "Một phút",
                    minute: "Một phút",
                    hours: "Chốc lát",
                    hour: "Chốc lát",
                    thirtyMinutes: "30 phút",
                    oneHour: "1 khoảnh khắc",
                    threeHours: "3 khoảnh khắc",
                    sixHours: "6 khoảnh khắc",
                    twelveHours: "12 khoảnh khắc",
                    customSound: "ÂM THANH TÙY CHỈNH"
                },
                disableOptions: {
                    everything: "Vô hiệu hóa mọi thứ",
                    discovery: "Tắt tab Khám phá",
                    dms: "Vô hiệu hóa tab nhiệm vụ trong DM",
                    fetching: "Tắt tính năng tìm nạp tác vụ",
                    popup: "Tắt cửa sổ bật lên phía trên bảng tài khoản",
                    sponsored: "Vô hiệu hóa biểu ngữ được tài trợ trên trang nhiệm vụ",
                    badge: "Tắt huy hiệu trên hồ sơ người dùng",
                    inventory: "Tắt thông báo vận chuyển hàng tồn kho quà tặng",
                    friendsList: "Danh sách bạn bè hiện đang hoạt động Khuyến mãi",
                    membersList: "Danh sách thành viên Biểu tượng đang chơi",
                    gameQuests: "Hoàn thành các thử thách trò chơi/hoạt động trong nền",
                    videoQuests: "Hoàn thành nhiệm vụ xem video trong nền",
                    achievementQuests: "Hoàn thành nhiệm vụ hoạt động trong nền",
                    mobileDesktop: "Làm cho các tác vụ di động tương thích với máy tính để bàn",
                    notifyOnComplete: "Thông báo cho tôi khi nhiệm vụ hoàn thành"
                },
                options: {
                    always: "Luôn luôn",
                    unclaimed: "Không được yêu cầu",
                    never: "Không bao giờ",
                    pill: "Hap",
                    badge: "Huy hiệu",
                    both: "Cả hai người họ",
                    none: "Không có",
                    openQuests: "Nhiệm vụ mở",
                    contextMenu: "Trình đơn ngữ cảnh",
                    pluginSettings: "Cài đặt plugin",
                    nothing: "Không có gì",
                    orbs: "quả cầu",
                    nitroCodes: "Mã Nitro",
                    rewardCodes: "Mã thưởng",
                    inGameItems: "Vật phẩm trong trò chơi",
                    profileCollectibles: "Bộ sưu tập hồ sơ"
                }
            },
            option: {
                disableQuests: {
                    label: "Vô hiệu hóa nhiệm vụ",
                    description: "Chọn tính năng Tác vụ nào cần tắt."
                },
                disableQuestsEverything: {
                    label: "Vô hiệu hóa mọi thứ",
                    description: "Vô hiệu hóa tất cả các tính năng của Tác vụ."
                },
                disableQuestsFetchingQuests: {
                    label: "Tắt tính năng tìm nạp tác vụ",
                    description: "Tắt tính năng tìm nạp tác vụ từ Discord."
                },
                disableQuestsDirectMessagesTab: {
                    label: "Tắt tab tác vụ trong DM",
                    description: "Tắt tab Tác vụ trên trang Tin nhắn trực tiếp."
                },
                disableQuestsDiscoveryTab: {
                    label: "Tắt tab Khám phá",
                    description: "Tắt tab Nhiệm vụ trên trang Khám phá."
                },
                disableQuestsPageSponsoredBanner: {
                    label: "Vô hiệu hóa biểu ngữ được tài trợ trên trang nhiệm vụ",
                    description: "Tắt biểu ngữ được tài trợ trên trang Nhiệm vụ."
                },
                disableQuestsPopupAboveAccountPanel: {
                    label: "Tắt cửa sổ bật lên trên bảng tài khoản",
                    description: "Tắt cửa sổ bật lên Tác vụ ở đầu bảng tài khoản của bạn."
                },
                disableQuestsBadgeOnUserProfiles: {
                    label: "Tắt huy hiệu trên hồ sơ người dùng",
                    description: "Tắt huy hiệu Nhiệm vụ trên hồ sơ người dùng."
                },
                disableQuestsGiftInventoryRelocationNotice: {
                    label: "Tắt thông báo di chuyển kho quà tặng",
                    description: "Kho quà tặng Tắt thông báo di chuyển nhiệm vụ."
                },
                disableFriendsListActiveNowPromotion: {
                    label: "Tắt danh sách bạn bè hiện đang hoạt động",
                    description: "Tắt quảng cáo Quest cho các trò chơi do bạn bè chơi."
                },
                disableMembersListActivelyPlayingIcons: {
                    label: "Tắt biểu tượng Active Play trong danh sách thành viên",
                    description: "Tắt các biểu tượng phát đang hoạt động trong danh sách thành viên."
                },
                makeMobileQuestsDesktopCompatible: {
                    label: "Làm cho các tác vụ di động tương thích với máy tính để bàn",
                    description: "Làm cho Nhiệm vụ chỉ dành cho thiết bị di động tương thích với máy tính để bàn."
                },
                completeVideoQuestsInBackground: {
                    label: "Hoàn thành nhiệm vụ video trong nền",
                    description: "Hoàn thành Nhiệm vụ Video ở chế độ nền sau khi thời gian video trôi qua."
                },
                completeGameQuestsInBackground: {
                    label: "Hoàn thành nhiệm vụ trò chơi trong nền",
                    description: "Hoàn thành Nhiệm vụ của trò chơi ở chế độ nền sau khi thời gian trò chơi trôi qua."
                },
                completeAchievementQuestsInBackground: {
                    label: "Hoàn thành nhiệm vụ hoạt động trong nền",
                    description: "Hoàn thành các thử thách hoạt động trong nền."
                },
                notifyOnQuestComplete: {
                    label: "Thông báo cho tôi khi nhiệm vụ hoàn thành",
                    description: "Hiển thị thông báo khi Nhiệm vụ được hoàn thành tự động."
                },
                questButton: {
                    label: "Nút tác vụ",
                    description: "Hiển thị nút Nhiệm vụ trong danh sách máy chủ."
                },
                questButtonDisplay: {
                    label: "Giao diện nút tác vụ",
                    description: "Loại hiển thị nào sẽ sử dụng cho nút Tác vụ trong danh sách máy chủ."
                },
                questRewardIncludeRewardCode: {
                    label: "Bao gồm mã thưởng",
                    description: "Bao gồm các Nhiệm vụ kèm theo Mã Phần thưởng khi xem số lượng nhiệm vụ."
                },
                questRewardIncludeNitroCode: {
                    label: "Bao gồm mã Nitro",
                    description: "Bao gồm các nhiệm vụ được mã hóa Nitro khi xem số lượng nhiệm vụ."
                },
                questRewardIncludeInGame: {
                    label: "Bao gồm phần thưởng trong trò chơi",
                    description: "Bao gồm các Nhiệm vụ với phần thưởng trong trò chơi khi xem số lượng Nhiệm vụ."
                },
                questRewardIncludeCollectibles: {
                    label: "Bao gồm các bộ sưu tập",
                    description: "Bao gồm các Nhiệm vụ với Vật phẩm sưu tầm khi xem số lượng nhiệm vụ."
                },
                questRewardIncludeOrbs: {
                    label: "Bao gồm các quả cầu",
                    description: "Bao gồm các Nhiệm vụ giành được Quả cầu khi xem số lượng Nhiệm vụ."
                },
                questButtonUnclaimed: {
                    label: "Chỉ báo chưa được xác nhận của nút nhiệm vụ",
                    description: "Loại hiển thị nào sẽ được sử dụng cho chỉ báo chưa được xác nhận trên nút Tác vụ trong danh sách máy chủ."
                },
                questButtonBadgeColor: {
                    label: "Màu huy hiệu nút nhiệm vụ",
                    description: "Màu của huy hiệu nút Nhiệm vụ trong danh sách máy chủ."
                },
                questButtonLeftClickAction: {
                    label: "Hành động nhấp chuột trái",
                    description: "Hành động cần thực hiện khi nhấp chuột trái vào nút Tác vụ trong danh sách máy chủ."
                },
                questButtonMiddleClickAction: {
                    label: "Hành động nhấp chuột giữa",
                    description: "Hành động được thực hiện khi nhấp chuột giữa vào nút Tác vụ trong danh sách máy chủ."
                },
                questButtonRightClickAction: {
                    label: "Hành động nhấp chuột phải",
                    description: "Hành động cần thực hiện khi nhấp chuột phải vào nút Tác vụ trong danh sách máy chủ."
                },
                fetchingQuests: {
                    label: "Tìm nạp nhiệm vụ",
                    description: "Mang nhiệm vụ từ Discord."
                },
                fetchingQuestsInterval: {
                    label: "Phạm vi tìm nạp nhiệm vụ",
                    description: "Khoảng thời gian (tính bằng giây) để tìm nạp Nhiệm vụ từ Discord."
                },
                fetchingQuestsAlert: {
                    label: "Cảnh báo tìm nạp nhiệm vụ",
                    description: "Âm thanh sẽ được phát khi phát hiện Nhiệm vụ mới."
                },
                fetchingQuestsAlertVolume: {
                    label: "Khối lượng thông báo tìm nạp nhiệm vụ",
                    description: "Âm lượng âm thanh sẽ được phát khi phát hiện Nhiệm vụ mới."
                },
                restyleQuests: {
                    label: "Nhiệm vụ định dạng lại",
                    description: "Tùy chỉnh giao diện của ô Nhiệm vụ trên trang Nhiệm vụ."
                },
                restyleQuestsUnclaimed: {
                    label: "Nhiệm vụ định dạng lại - Không được yêu cầu",
                    description: "Màu của các ô Nhiệm vụ chưa được nhận trên trang Nhiệm vụ."
                },
                restyleQuestsClaimed: {
                    label: "Nhiệm vụ định dạng lại - Đã yêu cầu",
                    description: "Màu của ô Nhiệm vụ được xác nhận trên trang Nhiệm vụ."
                },
                restyleQuestsIgnored: {
                    label: "Nhiệm vụ định dạng lại - Bỏ qua",
                    description: "Màu của ô Nhiệm vụ bị bỏ qua trên trang Nhiệm vụ."
                },
                restyleQuestsExpired: {
                    label: "Nhiệm vụ định dạng lại - Đã hết hạn",
                    description: "Màu của ô Nhiệm vụ đã hết hạn trên trang Nhiệm vụ."
                },
                restyleQuestsGradient: {
                    label: "Nhiệm vụ định dạng lại - gradient",
                    description: "Kiểu chuyển màu được sử dụng trong các ô tác vụ."
                },
                restyleQuestsPreload: {
                    label: "Nhiệm vụ định dạng lại - Bootloader",
                    description: "Hãy thử tải trước nội dung cho ô nhiệm vụ."
                },
                reorderQuests: {
                    label: "Sắp xếp lại nhiệm vụ",
                    description: "Sắp xếp nhiệm vụ theo trạng thái của họ. Để trống để sắp xếp mặc định. Danh sách được phân tách bằng dấu phẩy phải chứa tất cả các mục sau: KHÔNG ĐƯỢC CHẤP NHẬN, ĐƯỢC YÊU CẦU, BỎ QUA, HẾT HẠN."
                },
                unclaimedSubsort: {
                    label: "Xếp hạng phụ chưa được xác nhận",
                    description: "Phương pháp phân loại phụ cho các Nhiệm vụ chưa được xác nhận."
                },
                claimedSubsort: {
                    label: "Xếp hạng phụ được xác nhận",
                    description: "Phương pháp sắp xếp phụ cho các Nhiệm vụ được yêu cầu."
                },
                ignoredSubsort: {
                    label: "Đơn hàng phụ bị bỏ qua",
                    description: "Phương pháp sắp xếp phụ cho các tác vụ bị bỏ qua."
                },
                expiredSubsort: {
                    label: "Xếp hạng phụ đã hết hạn",
                    description: "Phương pháp sắp xếp ngược cho các Nhiệm vụ đã hết hạn."
                },
                unclaimedUnignoredQuests: {
                    label: "Nhiệm vụ không được yêu cầu Không bị bỏ qua",
                    description: "Theo dõi số lượng Nhiệm vụ chưa được nhận và chưa được bỏ qua."
                },
                onQuestsPage: {
                    label: "Trên trang Nhiệm vụ",
                    description: "Liệu người dùng hiện có ở trang Nhiệm vụ hay không."
                },
                triggerQuestsRerender: {
                    label: "Kích hoạt nhiệm vụ kết xuất lại",
                    description: "Kích hoạt kết xuất lại trang Nhiệm vụ bằng cách thay đổi cài đặt này."
                },
                ignoredQuestProfile: {
                    label: "Hồ sơ nhiệm vụ bị bỏ qua",
                    description: "Hồ sơ được sử dụng cho Nhiệm vụ bị bỏ qua."
                },
                rememberQuestPageSort: {
                    label: "Ghi nhớ sắp xếp trang nhiệm vụ",
                    description: "Ghi nhớ trình tự được sử dụng lần cuối trên trang Nhiệm vụ."
                },
                rememberQuestPageFilters: {
                    label: "Ghi nhớ bộ lọc trang nhiệm vụ",
                    description: "Ghi nhớ các bộ lọc được sử dụng lần cuối trên trang Nhiệm vụ."
                },
                lastQuestPageSort: {
                    label: "Xếp hạng trang nhiệm vụ mới nhất",
                    description: "Ghi nhớ trình tự được sử dụng lần cuối trên trang Nhiệm vụ."
                },
                lastQuestPageFilters: {
                    label: "Bộ lọc trang nhiệm vụ mới nhất",
                    description: "Ghi nhớ các bộ lọc được sử dụng lần cuối trên trang Nhiệm vụ."
                },
                ignoredQuestIDs: {
                    label: "ID tác vụ bị bỏ qua",
                    description: "Mảng ID tác vụ bị bỏ qua."
                },
                resumeQuestIDs: {
                    label: "ID nhiệm vụ đang tiến hành",
                    description: "Mảng ID tác vụ tự động hoàn thành ở chế độ nền."
                }
            },
            button: {
                questInProgressWithTime: "Đang hoàn thành ({{remainTime}})",
                completing: "Đang hoàn thiện",
                resume: "Devam Và (~{{remainTime}})",
                complete: "Hoàn thành {{remainTime}}",
                completeImmediate: "Hoàn thành (Ngay lập tức)",
                completed: "hoàn thành"
            },
            reward: {
                orbs: "{{orbQuantity}} Quả cầu trong {{completingText}}.",
                article: "{{completingText}} cho {{itemName}}.",
                unrecognized: "{{completingText}} dành cho loại phần thưởng không được công nhận."
            },
            notification: {
                completed: {
                    title: "Công việc đã xong",
                    body: "Nhiệm vụ {{questName}} đã hoàn thành."
                }
            }
        },
        questionMarkReplacement: {
            name: "Dấu hỏiThay thế",
            description: "Nếu thông báo chỉ bao gồm các dấu chấm hỏi, nó sẽ thay thế tất cả các dấu chấm hỏi bằng chuỗi đã chọn.",
            option: {
                replace: {
                    label: "Thay đổi",
                    description: "Thay thế bằng"
                }
            }
        },
        quickMention: {
            name: "Đề cập nhanh",
            description: "Thêm nút đề cập nhanh vào thanh tác vụ tin nhắn.",
            tooltip: "Đặt cược nhanh"
        },
        quickReply: {
            name: "Trả lời nhanh",
            description: "Trả lời (ctrl + up/down) và chỉnh sửa tin nhắn (ctrl + shift + up/down) bằng phím nóng.",
            option: {
                shouldMention: {
                    label: "Tôi có nên đề cập đến",
                    description: "Ping phản hồi theo mặc định",
                    noReplyMentionPlugin: "Theo dõi plugin NoReplyMention (nếu được bật)",
                    enabled: "Hiệu quả",
                    disabled: "Tàn tật"
                },
                ignoreBlockedAndIgnored: {
                    label: "Bỏ qua Bị chặn và bỏ qua",
                    description: "Bỏ qua tin nhắn từ người dùng bị chặn/bỏ qua khi duyệt web"
                }
            }
        },
        quickThemeSwitcher: {
            name: "QuickThemeSwitcher",
            description: "Chuyển đổi nhanh giữa các chủ đề bằng phím tắt.",
            about: {
                title: "Phím nóng",
                description: "Sử dụng Ctrl/Cmd+Shift+Phím mũi tên để điều hướng (Trái/Phải: Chuyển đổi giữa các chủ đề, Lên: Bật, Xuống: Tắt).",
                reload: "Nhấn Ctrl/Cmd+Shift+Alt để làm mới danh sách chủ đề."
            },
            modal: {
                added: "Đã thêm {{count}} chủ đề mới",
                removed: "Đã xóa {{count}} chủ đề",
                reloaded: "Đã tải lại chủ đề {{themeCount}}",
                addedLocal: "Đã thêm {{count}} chủ đề địa phương",
                removedLocal: "Đã xóa {{count}} chủ đề gốc",
            },
            option: {
                includeLocal: {
                    label: "Bao gồm các chủ đề gốc",
                    description: "Bao gồm các chủ đề gốc trên thiết bị của bạn trong danh sách"
                },
                includeOnline: {
                    label: "Bao gồm các chủ đề trực tuyến",
                    description: "Bao gồm các chủ đề trực tuyến trong danh sách"
                },
                sortOrder: {
                    label: "Sắp xếp theo",
                    description: "Phương pháp sắp xếp",
                    asc: "A'dan Z'ye",
                    desc: "Z'den A'ya",
                    recent: "Ở Sơn"
                },
                autoRefresh: {
                    label: "Tự động làm mới",
                    description: "Tự động làm mới danh sách chủ đề khi phát hiện thay đổi"
                },
                showNotifications: {
                    label: "Hiển thị thông báo",
                    description: "Hiển thị thông báo khi chủ đề được thêm hoặc xóa"
                }
            }
        },
        quoter: {
            name: "Người trích dẫn",
            description: "Cho phép bạn tạo hình ảnh trích dẫn đầy cảm hứng từ tin nhắn",
            context: {
                quote: "Trích dẫn"
            },
            modal: {
                title: "4K'da Yakala",
                grayscale: "Đen-Trắng",
                export: "Xuất khẩu",
                send: "Gửi",
                saveAsGIF: "Lưu dưới dạng GIF",
                saveDescription: "Lưu/gửi hình ảnh dưới dạng GIF thay vì PNG",
                showWatermark: "Hiển thị hình mờ",
                watermarkText: "Filigran Metni (tối đa 32 ký tự)"
            },
            option: {
                quoteFont: {
                    label: "Phông chữ trích dẫn",
                    description: "Phông chữ cho văn bản trích dẫn (tác giả/tên người dùng luôn sử dụng M PLUS Rounded 1c)",
                    mPlusRounded: "M PLUS Làm tròn 1c",
                    openSans: "Mở Sans",
                    momoSignature: "Chữ ký Momo",
                    lora: "Lora",
                    merriWeather: "Merriweather"
                },
                watermark: {
                    label: "đồ chạm khắc",
                    description: "Văn bản hình mờ tùy chỉnh (tối đa 32 ký tự)"
                },
                grayscale: {
                    label: "Đen-Trắng",
                    description: "Bật đen trắng theo mặc định"
                },
                showWatermark: {
                    label: "Hiển thị hình mờ",
                    description: "Hiển thị hình mờ theo mặc định"
                },
                saveAsGif: {
                    label: "Lưu dưới dạng GIF",
                    description: "Lưu dưới dạng GIF theo mặc định"
                }
            }
        },
        randomVoice: {
            name: "Ngẫu nhiênVoice",
            description: "Thêm nút tham gia cuộc gọi thoại ngẫu nhiên bên cạnh nút tắt tiếng.",
            tooltip: "Giọng nói ngẫu nhiên",
            context: {
                label: "điều hòa âm thanh",
                amountLabel: "SỐ LƯỢNG NGƯỜI DÙNG",
                spacesLabel: "VỊ TRÍ CÒN TRỐNG",
                voiceLabel: "SES LİMİTİ",
                selfLabel: "CÀI ĐẶT RIÊNG CỦA BẠN",
                select: {
                    servers: "Chọn máy chủ",
                    list: "Chọn danh sách",
                    filters: "Chọn bộ lọc",
                    amount: "Số lượng người dùng",
                    userAmount: "{{số tiền}} người dùng",
                    parameters: "Thông số",
                    moreThan: "nhiều hơn",
                    lessThan: "Ít hơn thế",
                    equalTo: "bằng",
                    spaces: "Vị trí còn trống",
                    voice: "Giới hạn của nó"
                },
                filter: {
                    muted: "im lặng",
                    deafened: "bị điếc",
                    camera: "Máy ảnh",
                    stream: "Phát sóng",
                    includeFilters: "Bao gồm bộ lọc",
                    avoidFilters: "Tránh bộ lọc"
                },
                reset: {
                    list: "Đặt lại danh sách"
                },
                voice: {
                    label: "Cài đặt âm thanh",
                    auto: {
                        mute: "Tự động tắt tiếng",
                        deafen: "Tự động làm điếc",
                        camera: "Máy ảnh tự động",
                        stream: "Phát sóng tự động",
                        leaveWhenEmpty: "Rời đi khi bạn rảnh",
                        navigate: "Tự động điều hướng",
                        stage: "Tránh các kênh sân khấu",
                        afk: "Tránh các kênh AFK"
                    }
                },
                invalid: {
                    server: "máy chủ không hợp lệ"
                }
            },
            option: {
                userAmountOperation: {
                    label: "Giao dịch đếm người dùng",
                    description: "Chọn một hành động cho số lượng người dùng"
                },
                userAmount: {
                    label: "Số lượng người dùng",
                    description: "Chọn số lượng người dùng"
                },
                spacesLeftOperation: {
                    label: "Quy trình tuyển dụng",
                    description: "Chọn một hành động cho số lượng người dùng tối đa"
                },
                spacesLeft: {
                    label: "Vị trí còn trống",
                    description: "Chọn dung lượng trống"
                },
                vcLimitOperation: {
                    label: "Hoạt động giới hạn kênh âm thanh",
                    description: "Chọn một hành động cho giới hạn kênh âm thanh."
                },
                vcLimit: {
                    label: "Giới hạn kênh âm thanh",
                    description: "Chọn giới hạn kênh âm thanh"
                },
                servers: {
                    label: "Máy chủ",
                    description: "Máy chủ bao gồm"
                },
                autoNavigate: {
                    label: "Tự động điều hướng",
                    description: "Nó tự động chuyển sang kênh âm thanh."
                },
                autoCamera: {
                    label: "Máy ảnh tự động",
                    description: "Tự động bật camera"
                },
                autoStream: {
                    label: "Phát sóng tự động",
                    description: "Tự động bắt đầu phát sóng"
                },
                selfMute: {
                    label: "Tự động tắt tiếng",
                    description: "Nó tự động tắt tiếng micrô của bạn khi bạn tham gia kênh âm thanh."
                },
                selfDeafen: {
                    label: "Tự động làm điếc",
                    description: "Nó tự động làm bạn bị điếc khi bạn tham gia kênh thoại."
                },
                leaveEmpty: {
                    label: "Rời đi khi bạn rảnh",
                    description: "Khi kênh thoại trống, nó sẽ ngẫu nhiên tìm thấy một cuộc gọi khác."
                },
                avoidStages: {
                    label: "Tránh các kênh sân khấu",
                    description: "Tránh tham gia các kênh âm thanh kiểu sân khấu."
                },
                avoidAfk: {
                    label: "Tránh các kênh AFK",
                    description: "AFK tránh nối các kênh âm thanh."
                },
                video: {
                    label: "Băng hình",
                    description: "Tìm kiếm người dùng có camera đang bật"
                },
                stream: {
                    label: "Phát sóng",
                    description: "Tìm kiếm người dùng đang phát sóng"
                },
                mute: {
                    label: "im lặng",
                    description: "Tìm kiếm người dùng bị tắt tiếng"
                },
                deafen: {
                    label: "bị điếc",
                    description: "Tìm kiếm người dùng bị điếc"
                },
                includeStates: {
                    label: "Bao gồm bộ lọc",
                    description: "Cho phép bao gồm các trạng thái người dùng cụ thể"
                },
                avoidStates: {
                    label: "Tránh bộ lọc",
                    description: "Cho phép tránh một số tình huống người dùng nhất định"
                }
            },
            alert: {
                failed: "Không tìm thấy Kênh Âm thanh!"
            }
        },
        reactErrorDecoder: {
            name: "ReactErrorBộ giải mã",
            description: "React chuyển đổi mã lỗi thành thông báo mà con người có thể đọc được."
        },
        readAllNotificationsButton: {
            name: "Nút đọc tất cả thông báo",
            description: "Thêm một nút vào bảng thông báo để đánh dấu tất cả thông báo là đã đọc chỉ bằng một cú nhấp chuột.",
            button: "Đọc tất cả"
        },
        recentDMSwitcher: {
            name: "Gần đâyDMSswitcher",
            description: "Chuyển đổi giữa các DM được sử dụng gần đây bằng Ctrl+Tab (Ctrl+Shift+Tab đảo ngược)",
            option: {
                visualStyle: {
                    label: "Phong cách trực quan",
                    description: "Kiểu chỉ báo trực quan xuất hiện khi chuyển đổi",
                    overlay: "Lớp (kiểu Alt+Tab)",
                    toast: "Thông báo (Thông báo trạng thái)",
                    off: "Đã đóng"
                },
                overlayMode: {
                    label: "Chế độ lớp",
                    description: "Lớp nội dung",
                    row: "Dòng trò chuyện cuối cùng",
                    current: "chỉ có sẵn",
                },
                amountOfUsers: {
                    label: "Số lượng người dùng",
                    description: "Số lượng người dùng hiển thị trên lớp"
                },
                overlayRowLength: {
                    label: "Chiều dài hàng lớp",
                    description: "Số lượng DM gần đây sẽ hiển thị trong hàng"
                },
                overlayShowAvatars: {
                    label: "Hiển thị hình ảnh hồ sơ lớp",
                    description: "Hiển thị hình ảnh hồ sơ người dùng trên lớp"
                },
                toastDurationMs: {
                    label: "Thời gian thông báo (ms)",
                    description: "Hiển thị hình ảnh hồ sơ trên lớp"
                },
                clearRdms: {
                    label: "Xóa danh sách RDMS",
                    description: "Công cụ kiểm tra: Xóa danh sách RDM",
                    toast: "Đã xóa lịch sử RDMS",
                    button: "Xóa lịch sử RDM"
                }
            },
            modal: {
                unknown: "Không xác định",
                dm: "DM",
                group: "Nhóm DM",
                channel: "Kênh",
                switchingTo: "Đang chuyển sang {{name}}"
            }
        },
        relationshipNotifier: {
            name: "Trình thông báo mối quan hệ",
            description: "Thông báo cho bạn khi một người bạn, cuộc trò chuyện nhóm hoặc máy chủ loại bỏ bạn.",
            option: {
                notices: {
                    label: "Thông báo",
                    description: "Hiển thị thông báo ở đầu màn hình khi bị xóa (sử dụng thông báo này nếu bạn không muốn bỏ lỡ bất kỳ thông báo nào)."
                },
                offlineRemovals: {
                    label: "Xóa ngoại tuyến",
                    description: "Gửi thông báo nếu bạn bị xóa khi ngoại tuyến khi mở Discord."
                },
                friends: {
                    label: "Bạn",
                    description: "Thông báo cho tôi khi một người bạn xóa bạn khỏi danh sách của họ"
                },
                friendRequestCancels: {
                    label: "Hủy yêu cầu kết bạn",
                    description: "Thông báo cho tôi khi yêu cầu kết bạn bị hủy"
                },
                servers: {
                    label: "Máy chủ",
                    description: "Thông báo khi bị xóa khỏi máy chủ"
                },
                groups: {
                    label: "Nhóm",
                    description: "Thông báo cho tôi khi bị xóa khỏi cuộc trò chuyện nhóm"
                }
            },
            notification: {
                removedFriend: "{{user}} đã hủy kết bạn với bạn.",
                cancelledFriendRequest: "Yêu cầu kết bạn do {{user}} gửi đã bị hủy.",
                removedFromServer: "Bạn đã bị xóa khỏi {{server}}.",
                removedFromGroup: "Bạn đã bị xóa khỏi {{group}}.",
                noLongerGroup: "Bạn không còn ở trong {{group}}.",
                noLongerServer: "Bạn không còn ở trên {{server}} nữa.",
                noLongerFriend: "Bạn không còn là bạn với {{user}} nữa.",
                friendRequestRevoked: "Yêu cầu kết bạn do {{user}} gửi đã bị rút lại.",
                ok: "Được rồi"
            }
        },
        remix: {
            name: "phối lại",
            description: "Thêm tùy chọn 'Remix' vào menu chuột phải của nút gửi tệp. Thao tác này sẽ mở hình ảnh trong trình chỉnh sửa hình ảnh đơn giản và cung cấp cho bạn tùy chọn gửi hình ảnh đã chỉnh sửa trực tiếp vào cuộc trò chuyện.",
            label: "phối lại",
            button: {
                send: "Gửi",
                close: "Một phần tư",
                brush: "Chải",
                erase: "khăn lau bụi",
                crop: "Mùa vụ",
                shape: "Hình dạng",
                reset: "cài lại",
                clear: "thông thoáng"
            },
            editor: {
                choose: "Chọn một hình ảnh",
                browse: "Gozat",
                rectangle: "Hình chữ nhật",
                ellipse: "hình elip",
                line: "Đường kẻ",
                arrow: "Được rồi",
                fill: "đổ đầy"
            }
        },
        repeatMessages: {
            name: "Tin nhắn lặp lại",
            description: "Nó cho phép bạn nhanh chóng gửi lại tin nhắn. Nếu bạn giữ phím Shift trong khi bấm vào Lặp lại, nó sẽ gửi nó dưới dạng trả lời tin nhắn.",
            button: "Lặp lại (Nhấp chuột) / Lặp lại và Trả lời (Shift + Nhấp chuột)",
            context: {
                repeat: "lặp lại",
                repeatAndReply: "Lặp lại và trả lời"
            }
        },
        replaceGoogleSearch: {
            name: "Thay thếGoogleTìm kiếm",
            description: "Nó thay thế tìm kiếm của Google bằng các công cụ tìm kiếm khác nhau.",
            option: {
                customEngineName: {
                    label: "Tên công cụ tùy chỉnh",
                    description: "Tên của công cụ tìm kiếm tùy chỉnh"
                },
                customEngineURL: {
                    label: "URL công cụ tùy chỉnh",
                    description: "URL công cụ tìm kiếm của bạn"
                },
                replacementEngine: {
                    label: "Công cụ tìm kiếm sao lưu",
                    description: "Thay thế công cụ tìm kiếm dự phòng bằng một công cụ tìm kiếm cụ thể (thay vì thêm menu)",
                    off: "Đã đóng",
                    custom: "Động cơ đặc biệt",
                }
            },
            context: {
                label: "Metni Ara",
                searchWith: "Nhà của {{name}} Ara"
            }
        },
        replyPingControl: {
            name: "Trả lờiPingControl",
            description: "Cho phép bạn kiểm soát luôn hoặc không bao giờ ping khi trả lời tin nhắn, cũng bao gồm tính năng danh sách trắng",
            option: {
                alwaysPingOnReply: {
                    label: "Luôn trả lời Ping",
                    description: "Nhận ping mỗi khi ai đó trả lời tin nhắn của bạn"
                },
                replyPingWhitelist: {
                    label: "Danh sách trắng Ping phản hồi",
                    description: "Nhập ID của người dùng mà bạn muốn luôn nhận được ping phản hồi, phân tách bằng dấu phẩy."
                }
            }
        },
        replyTimestamp: {
            name: "Trả lờiDấu thời gian",
            description: "Hiển thị dấu thời gian trong bản xem trước tin nhắn đã trả lời"
        },
        revealAllSpoilers: {
            name: "Tiết LộTất CảSpoilers",
            description: "Ctrl-nhấp vào phần tiết lộ nội dung để hiển thị tất cả nội dung tiết lộ nội dung trong tin nhắn, Ctrl+Shift để hiển thị tất cả nội dung tiết lộ nội dung trong toàn bộ cuộc trò chuyện"
        },
        reverseImageSearch: {
            name: "Tìm kiếm hình ảnh ngược",
            description: "Thêm tùy chọn Tìm kiếm hình ảnh ngược vào menu nhấp chuột phải vào hình ảnh",
            context: {
                label: "Tìm kiếm hình ảnh",
                all: "Tìm kiếm tất cả"
            }
        },
        reviewDB: {
            name: "Đánh giáDB",
            description: "Đánh giá người dùng khác (Thêm phần cài đặt mới vào Hồ sơ)",
            notification: {
                newReview: "Có những đánh giá mới trên hồ sơ của bạn!",
                auth: {
                    error: "Đã xảy ra lỗi trong quá trình ủy quyền",
                    successfully: "Đăng nhập thành công!",
                    failed: "Ủy quyền không thành công",
                    review: "Vui lòng ủy quyền để thêm đánh giá.",
                    opening: "Cửa sổ ủy quyền sẽ mở ra...",
                    need: "Bạn cần có sự cho phép để đánh giá!"
                },
                error: {
                    fast: "Bạn đang đưa ra yêu cầu quá nhanh. Đợi vài giây và thử lại.",
                    fetching: "Đã xảy ra lỗi khi truy xuất bài đánh giá.",
                    action: {
                        failed: "Không thể liên lạc được với người dùng {{action}}",
                        success: "Người dùng đã {{action}} thành công"
                    }
                }
            },
            modal: {
                delete: {
                    title: "Bạn có chắc không?",
                    description: "Bạn có thực sự muốn xóa đánh giá này?",
                    confirm: "Sil",
                    cancel: "Hủy bỏ",
                    error: "Bạn phải đăng nhập để xóa đánh giá.",
                },
                report: {
                    title: "Bạn có chắc không?",
                    description: "Bạn có thực sự muốn báo cáo đánh giá này?",
                    confirm: "Tuyên ngôn",
                    cancel: "Hủy bỏ",
                    error: "Bạn phải đăng nhập để gửi đánh giá.",
                },
                block: {
                    title: "Bạn có chắc không?",
                    description: "Bạn có thực sự muốn chặn người dùng này? Bạn sẽ không còn thấy đánh giá của họ nữa.",
                    confirm: "khối",
                    cancel: "Hủy bỏ",
                    error: "Bạn phải đăng nhập để chặn người dùng.",
                },
                blocked: {
                    title: "Người dùng bị chặn",
                    auth: "Bạn chưa đăng nhập vào ReviewDB.",
                    noBlocked: "Không có người dùng nào bị chặn.",
                    fetch: "Đã xảy ra lỗi khi truy xuất người dùng bị chặn"
                },
                reviews: {
                    title: "Đánh giá của người dùng",
                    noUser: "Có vẻ như chưa có ai đánh giá người dùng này. Bạn có thể là người đầu tiên!",
                    noServer: "Có vẻ như chưa có ai đánh giá máy chủ này. Bạn có thể là người đầu tiên!"
                }
            },
            button: {
                appeal: "Phản đối",
                ok: "Được rồi",
                more: "Hơn",
                reply: "Trả lời @{{user}}",
                update: "Cập nhật đánh giá cho @{{user}}",
                review: "Đánh giá @{{user}}"
            },
            context: {
                view: "Xem đánh giá",
                blocked: "Bạn đã chặn người dùng này",
                delete: "Xóa đánh giá",
                report: "Đánh giá báo cáo",
                block: "Chặn người dùng",
                unblock: "Bỏ chặn người dùng",
                reply: "Trả lời đánh giá"
            },
            option: {
                authorize: {
                    label: "Ủy quyền",
                    button: "Ủy quyền với ReviewDB"
                },
                notifyReviews: {
                    label: "Thông báo đánh giá",
                    description: "Thông báo đánh giá mới khi khởi động"
                },
                showWarning: {
                    label: "Hiển thị cảnh báo",
                    description: "Hiển thị cảnh báo tôn trọng trên phiếu tự đánh giá"
                },
                hideTimestamps: {
                    label: "Ẩn dấu thời gian",
                    description: "Ẩn dấu thời gian trên bài đánh giá"
                },
                hideBlockedUsers: {
                    label: "Ẩn người dùng bị chặn",
                    description: "Ẩn đánh giá từ người dùng mà bạn đã chặn"
                },
                buttons: {
                    label: "Nút",
                    manageBlocked: "Quản lý người dùng bị chặn",
                    support: "Hỗ trợ phát triển ReviewDB",
                    website: "Trang web ReviewDB",
                    server: "Máy chủ hỗ trợ ReviewDB"
                }
            }
        },
        richMagnetLinks: {
            name: "RichMagnetLiên Kết",
            description: "Xử lý các liên kết nam châm như liên kết tin nhắn (có bản xem trước)",
            unknown: "tên tệp không xác định"
        },
        roleColorEverywhere: {
            name: "Vai tròMàu sắcMọi nơi",
            description: "Hiển thị màu vai trò hàng đầu bất cứ khi nào có thể",
            option: {
                chatMentions: {
                    label: "Đề cập trò chuyện",
                    description: "Hiển thị màu sắc vai trò trong đề cập trò chuyện (bao gồm cả hộp tin nhắn)"
                },
                memberList: {
                    label: "Danh sách thành viên",
                    description: "Hiển thị màu vai trò trong chức danh danh sách thành viên"
                },
                voiceUsers: {
                    label: "Người dùng giọng nói",
                    description: "Hiển thị màu vai trò trong danh sách người dùng trò chuyện thoại"
                },
                reactorsList: {
                    label: "Danh sách lò phản ứng",
                    description: "Hiển thị màu vai trò trong danh sách người dùng bằng biểu tượng cảm xúc"
                },
                pollResults: {
                    label: "Kết quả khảo sát",
                    description: "Hiển thị màu sắc vai trò trong kết quả khảo sát"
                },
                colorChatMessages: {
                    label: "Tô màu tin nhắn trò chuyện của bạn",
                    description: "Tô màu tin nhắn trò chuyện theo màu vai trò của tác giả"
                },
                messageSaturation: {
                    label: "Độ bão hòa tin nhắn",
                    description: "Cường độ tô màu tin nhắn"
                }
            }
        },
        rpcEditor: {
            name: "RPCEditor",
            description: "Chỉnh sửa bất kỳ nội dung và loại Hiện diện phong phú nào",
            option: {
                replacedAppIds: {
                    label: "Nhận dạng ứng dụng (ID) đã thay đổi",
                }
            },
            modal: {
                tutorial: {
                    title: "ID của các sự kiện hiện đang chạy",
                    noRunning: "Không có sự kiện đang diễn ra",
                    available: "Các biến có sẵn",
                    variableText: "Trong tất cả các trường (ngoại trừ URL bài đăng), bạn có thể đặt các biến sẽ tự động được thay thế bằng nội dung gốc của chúng:",
                    more: "Thêm chi tiết",
                    details: {
                        leave: "Để giữ nguyên một trường, hãy để trống.",
                        set: "Nhập 'null' để ẩn trường trong chỉ báo trạng thái.",
                        reload: "Bạn có thể cần phải khởi động lại Discord để áp dụng các thay đổi."
                    }
                },
                settings: {
                    applyEdits: "Áp dụng chỉnh sửa cho ứng dụng",
                    addNewApp: "Thêm ứng dụng mới",
                    appId: "ID ứng dụng",
                    invalidAppId: "ID ứng dụng không hợp lệ",
                    newActivityType: "Loại sự kiện mới",
                    activityTypes: {
                        playing: "đang chơi",
                        watching: "đang xem",
                        listening: "lắng nghe",
                        competing: "cuộc đua",
                        streaming: "trên sóng"
                    },
                    streamUrl: "URL luồng (phải là YouTube hoặc Twitch)",
                    invalidStreamUrl: "URL bài đăng không hợp lệ",
                    newName: "tên mới",
                    newDetails: "chi tiết mới",
                    newState: "tình hình mới",
                    largeImage: "bức tranh lớn",
                    smallImage: "clip nghệ thuật",
                    text: "Chữ",
                    url: "URL",
                    firstLine: "(dòng đầu tiên)",
                    secondLine: "(dòng thứ hai)",
                    thirdLine: "(dòng thứ ba)",
                    alsoThirdLine: "(cũng là dòng thứ ba)",
                    hideAssets: "Ẩn hình ảnh (hình ảnh lớn và nhỏ)",
                    hideTimestamps: "Ẩn dấu thời gian"
                }
            },
        },
        rpcStats: {
            name: "RPCStats",
            description: "Hiển thị số liệu thống kê về hoạt động của bạn với tư cách là Sự hiện diện phong phú",
            option: {
                assetURL: {
                    label: "URL trực quan",
                    description: "Hình ảnh được sử dụng cho RPC. Nếu để trống, ảnh hồ sơ của bạn sẽ được sử dụng"
                },
                rpcTitle: {
                    label: "Tiêu đề RPC",
                    description: "Tiêu đề RPC của bạn"
                },
                statDisplay: {
                    label: "Xem số liệu thống kê",
                    description: "RPC nên hiển thị những gì? (Có thể bạn chỉ được phép có một dòng)",
                    today: "Số lượng tin nhắn được gửi hôm nay",
                    alltime: "Số lượng tin nhắn được gửi mọi lúc",
                    listened: "Album được nghe nhiều nhất trong tuần"
                },
                lastFMApiKey: {
                    label: "Khóa API Last.fm",
                    description: "Khóa API Last.fm của bạn"
                },
                lastFMUsername: {
                    label: "Tên người dùng Last.fm",
                    description: "Tên người dùng Last.fm của bạn"
                },
                albumCoverImage: {
                    label: "Ảnh bìa album",
                    description: "Sử dụng bìa album làm hình ảnh RPC? (Nếu hiển thị Last.fm được chọn)"
                },
                lastFMStatFormat: {
                    label: "Định dạng thống kê Last.fm",
                    description: "Số liệu thống kê Last.fm nên được định dạng như thế nào? $album được thay thế bằng tên album, $artist được thay thế bằng tên nghệ sĩ"
                }
            },
            noInfo: "Hiện chưa có thông tin :(",
            messagesToday: "Tin nhắn đã gửi hôm nay: {{count}}",
            messagesAllTime: "Tin nhắn luôn được gửi: {{count}}"
        },
        saveFavoriteGIFs: {
            name: "LưuGIF yêu thích",
            description: "Xuất liên kết GIF yêu thích",
            toolbox: "Lưu ảnh GIF yêu thích",
            title: "Lưu ảnh GIF yêu thích",
            command: {
                savegifs: {
                    description: "Lưu tất cả các liên kết GIF yêu thích vào một tệp văn bản"
                },
                saveworkinggifs: {
                    description: "Kiểm tra tất cả các ảnh GIF yêu thích của bạn và chỉ lưu những ảnh vẫn hoạt động"
                }
            },
            option: {
                showToolboxButton: {
                    label: "Hiển thị nút hộp công cụ",
                    description: "Hiển thị nút 'Lưu ảnh GIF yêu thích' trong Hộp công cụ Plexcord (Yêu cầu khởi động lại)"
                }
            },
            toast: {
                save: "Đã lưu thành công ảnh GIF dưới dạng {{filename}}",
                failed: "Không thể lưu ảnh GIF",
                no: "Không tìm thấy GIF yêu thích!",
                testing: "{{count}} ảnh GIF đang được thử nghiệm, quá trình này có thể mất chút thời gian...",
                noneWorking: "Không có ảnh GIF đã lưu nào của bạn có vẻ đang hoạt động.",
                saved: "{{broken}} ảnh GIF có khả năng bị hỏng đã được lọc ra. Đã lưu {{saved}} ảnh GIF đang hoạt động."
            }
        },
        scheduledMessages: {
            name: "Tin nhắn đã lên lịch",
            description: "Lên lịch gửi tin nhắn vào một thời điểm nhất định hoặc sau một khoảng thời gian trễ nhất định.",
            toolbox: {
                toggle: "Xem tin nhắn đã lên lịch"
            },
            option: {
                maxMessagesPerMinute: {
                    label: "Tin nhắn tối đa mỗi phút",
                    description: "Số lượng tin nhắn được lên lịch tối đa có thể được gửi trên một kênh trong cùng một phút."
                },
                checkIntervalSeconds: {
                    label: "Khoảng thời gian kiểm soát (Giây)",
                    description: "Tần suất plugin sẽ kiểm tra xem có tin nhắn nào cần gửi hay không."
                },
                showNotifications: {
                    label: "Hiển thị thông báo",
                    description: "Hiển thị thông báo (bánh mì nướng) khi tin nhắn được gửi."
                },
                showPhantomMessages: {
                    label: "Hiển thị tin nhắn ma",
                    description: "Hiển thị các tin nhắn đã lên lịch dưới dạng tin nhắn ma (tạm thời) trong cuộc trò chuyện."
                }
            },
            channelType: {
                unknown: "Không xác định",
                dm: "DM",
                groupDm: "Nhóm DM",
                channel: "Kênh"
            },
            toast: {
                messageSent: "Đã gửi tin nhắn theo lịch tới {{channel}}",
                messageFailed: "Không thể gửi tin nhắn đã lên lịch",
                maxMessagesReached: "Đã đạt đến giới hạn tối đa {{max}} tin nhắn mỗi phút trên mỗi kênh",
                messageScheduled: "Tin nhắn đã được lên kế hoạch!",
                messageRemoved: "Đã xóa tin nhắn theo lịch trình",
                allCleared: "Đã xóa tất cả tin nhắn đã lên lịch"
            },
            button: {
                tooltipOn: "Chế độ lập kế hoạch BẬT (nhấp để tắt, nhấp chuột phải để xem danh sách)",
                tooltipOff: "Chế độ lập kế hoạch TẮT (nhấp để bật, nhấp chuột phải để xem danh sách)"
            },
            accessory: {
                scheduledFor: "Đã lên lịch vào {{date}} {{timeLeft}}",
                remaining: {
                    days: "Còn lại {{days}}g {{hours}} giây",
                    hours: "Còn lại {{hours}} giây {{phút}}phút",
                    minutes: "Còn {{phút}} phút"
                }
            },
            scheduleModal: {
                title: "tin nhắn kế hoạch",
                schedulingFor: "Kênh dự kiến: {{channel}}",
                scheduleType: "Loại quy hoạch",
                delay: "Trì hoãn",
                specificTime: "Thời gian cụ thể",
                delayMinutes: "Độ trễ (phút)",
                dateTime: "Ngày và Giờ",
                error: {
                    invalidDelay: "Vui lòng nhập thời gian trễ hợp lệ (tối thiểu 1 phút)",
                    invalidDateTime: "Vui lòng chọn ngày và giờ trong tương lai"
                },
                schedule: "Đã lên kế hoạch",
                cancel: "Hủy bỏ"
            },
            viewModal: {
                title: "Tin nhắn đã lên lịch",
                clearAll: "Xóa tất cả",
                noMessages: "Không có tin nhắn theo lịch trình",
                delete: "Sil",
                close: "Một phần tư"
            }
        },
        searchFix: {
            name: "Tìm kiếmFix",
            description: "Câu nói khó chịu 'Chúng tôi đã đánh rơi kính lúp!' sửa lỗi.",
            notPerfect: "Cách khắc phục này không hoàn hảo nên bạn có thể cần phải tải lại thanh tìm kiếm để khắc phục sự cố.",
            paragraph1: "Discord chỉ cho phép độ lệch tối đa là 5000 (đây là nguyên nhân gây ra lỗi kính lúp).",
            paragraph2: "Điều này có nghĩa là bạn có thể xem chính xác 5000 tin nhắn trong quá khứ và 5000 tin nhắn trong tương lai (được sắp xếp theo cũ nhất).",
            paragraph3: "Plugin này chuyển sang phương pháp sắp xếp ngược lại để vượt qua hạn chế của Discord,",
            paragraph4: "nhưng nếu có một kết quả tìm kiếm lớn và bạn cố gắng hiển thị thông báo không thể truy cập được bằng bất kỳ phương pháp sắp xếp nào,",
            paragraph5: "plugin chỉ hiển thị offset 0 (tin nhắn mới nhất hoặc cũ nhất tùy thuộc vào phương pháp sắp xếp)."
        },
        secretRingToneEnabler: {
            name: "SecretRingToneEnabler",
            description: "Discord luôn phát phiên bản bí mật của nhạc chuông (trừ các sự kiện nhạc chuông đặc biệt)",
            option: {
                onlySnow: {
                    label: "Chỉ trong sự kiện nhạc chuông tuyết",
                    description: "Chỉ chơi chủ đề Snow Halation"
                }
            }
        },
        summaries: {
            name: "Tóm tắt",
            description: "Bật tính năng Tóm tắt thử nghiệm của Discord trên tất cả các máy chủ và hiển thị tóm tắt các cuộc hội thoại do AI tạo",
            option: {
                summaryExpiryThresholdDays: {
                    label: "Ngưỡng xóa tóm tắt (Ngày)",
                    description: "Số ngày thông báo có hiệu lực trước khi bị xóa. Lưu ý rằng tối đa 50 bản tóm tắt được lưu trữ trên mỗi kênh"
                }
            }
        },
        selfForward: {
            name: "Tự chuyển tiếp",
            description: "Thêm kênh hiện tại vào cửa sổ bật lên danh sách chuyển tiếp"
        },
        sendTimestamps: {
            name: "GửiDấu thời gian",
            description: "Dễ dàng gửi dấu thời gian bằng nút hộp trò chuyện và phím tắt văn bản. Đọc mô tả mở rộng!",
            sample: {
                paragraph1: "Để nhanh chóng gửi dấu thời gian chỉ có thời gian, hãy thêm dấu thời gian ở định dạng `HH:MM` (bao gồm cả dấu ngoặc kép!) vào tin nhắn của bạn",
                paragraph2: "Xem các ví dụ bên dưới.\nNếu bạn cần thông tin cụ thể hơn, hãy sử dụng nút Ngày trong thanh trò chuyện!",
                examples: "Ví dụ:"
            },
            modal: {
                title: "Bộ chọn dấu thời gian",
                light: "Mở",
                dark: "Tối tăm",
                format: "Định dạng dấu thời gian",
                preview: "Xem trước",
                insert: "Thêm vào",
                insertTimestamp: "Thêm dấu thời gian"
            },
            option: {
                replaceMessageContents: {
                    label: "Thay đổi nội dung tin nhắn",
                    description: "Thay đổi dấu thời gian trong nội dung tin nhắn"
                }
            }
        },
        serverInfo: {
            name: "Thông tin máy chủ",
            description: "Cho phép bạn xem thông tin về máy chủ",
            context: {
                serverInfo: "Thông tin máy chủ"
            },
            option: {
                sorting: {
                    label: "Sắp xếp",
                    description: "Tên người dùng hoặc Tên hiển thị nếu có",
                    username: "Tên người dùng",
                    displayname: "Tên hiển thị",
                    none: "Sắp xếp"
                }
            },
            modal: {
                tab: {
                    serverInfo: "Thông tin máy chủ",
                    friends: "Bạn",
                    mutualUsers: "Người dùng thông thường",
                    blockedUsers: "Người dùng bị chặn",
                    ignoredUsers: "Người dùng bị bỏ qua"
                },
                owner: "Chủ sở hữu máy chủ",
                loading: "Đang tải...",
                createdAt: "Ngày tạo",
                joinedAt: "Ngày tham gia",
                vanityLink: "Liên kết mời đặc biệt",
                preferredLocale: "Vùng ưa thích",
                verification: {
                    level: "Cấp độ xác minh",
                    none: "Không có",
                    low: "Thấp",
                    medium: "Trung bình",
                    high: "Cao",
                    highest: "Cao nhất"
                },
                serverBoosts: "Tăng cường máy chủ",
                channels: "Kênh",
                roles: "Con lăn"
            }
        },
        serverListIndicators: {
            name: "Danh sách máy chủChỉ báo",
            description: "Thêm số lượng bạn bè trực tuyến hoặc số lượng máy chủ vào danh sách máy chủ",
            friends: "Bạn bè",
            servers: "Người trình bày",
            option: {
                mode: {
                    label: "mod",
                    description: "Chế độ hiển thị trong danh sách máy chủ",
                    friend: "Chỉ số lượng bạn bè trực tuyến",
                    server: "Chỉ số lượng máy chủ",
                    both: "Số lượng cả máy chủ và bạn bè trực tuyến"
                },
                useCompact: {
                    label: "Modu Kullan nhỏ gọn",
                    description: "Làm cho chú giải chỉ xuất hiện với văn bản"
                }
            }
        },
        serverSearch: {
            name: "Tìm kiếm máy chủ",
            description: "Điều hướng máy chủ của bạn tốt hơn bằng nút tìm kiếm nhanh",
            tooltip: "Chúng tôi mua"
        },
        shikiCodeblocks: {
            name: "ShikiCodeblocks",
            description: "Đưa các khối mã kiểu VSCode do Shiki cung cấp vào Discord",
            option: {
                theme: {
                    label: "Anh ta",
                    description: "Chủ đề mặc định"
                },
                customTheme: {
                    label: "Chủ đề tùy chỉnh",
                    description: "Liên kết đến chủ đề VSCode tùy chỉnh",
                    mustURL: "Phải là một URL hợp lệ",
                    mustJSON: "Phải là tệp JSON"
                },
                tryHljs: {
                    label: "Sao lưu vào Hljs",
                    description: "Sử dụng chủ đề và màu sắc Discord mặc định nhẹ hơn.",
                    never: "Không bao giờ",
                    secondary: "Chọn Shiki thay vì Highlight.js",
                    primary: "Chọn Highlight.js thay vì Shiki",
                    always: "Luôn luôn"
                },
                useDevIcon: {
                    label: "Sử dụng Devicon cho biểu tượng ngôn ngữ",
                    description: "Cách hiển thị biểu tượng ngôn ngữ trong khối mã",
                    disabled: "Tàn tật",
                    colorless: "không màu",
                    colored: "đầy màu sắc"
                },
                bgOpacity: {
                    label: "Độ mờ nền",
                    description: "độ mờ nền"
                }
            },
            button: {
                copy: "sao chép",
                copied: "Đã sao chép!"
            }
        },
        showAllMessageButtons: {
            name: "Hiển thị tất cả tin nhắnNút",
            description: "Nó luôn hiển thị tất cả các nút tin nhắn, cho dù bạn có nhấn phím Shift hay không.",
            option: {
                noShiftDelete: {
                    label: "Xóa không cần Shift",
                    description: "Loại bỏ nhu cầu nhấn phím shift để xóa tin nhắn."
                },
                noShiftPin: {
                    label: "Sửa lỗi không cần Shift",
                    description: "Loại bỏ nhu cầu nhấn phím shift để ghim tin nhắn."
                }
            }
        },
        showBadgesInChat: {
            name: "Hiển thịHuy hiệuTrongTrò chuyện",
            description: "Hiển thị huy hiệu bên cạnh tên tác giả tin nhắn trong cuộc trò chuyện.",
            option: {
                showPlexcordDonor: {
                    label: "Hiển thị Huy hiệu nhà tài trợ Plexcord của bạn",
                    description: "Cho phép hiển thị huy hiệu Nhà tài trợ Plexcord trong cuộc trò chuyện."
                },
                plexcordDonorPosition: {
                    label: "Vị trí huy hiệu nhà tài trợ Plexcord",
                    description: "Vị trí của huy hiệu Nhà tài trợ Plexcord."
                },
                showPlexcordContributor: {
                    label: "Hiển thị huy hiệu cộng tác viên Plexcord",
                    description: "Cho phép hiển thị huy hiệu Người đóng góp Plexcord trong cuộc trò chuyện."
                },
                plexcordContributorPosition: {
                    label: "Vị trí huy hiệu cộng tác viên Plexcord",
                    description: "Vị trí của huy hiệu Người đóng góp Plexcord."
                },
                showDiscordProfile: {
                    label: "Hiển thị huy hiệu hồ sơ Discord",
                    description: "Cho phép hiển thị huy hiệu Hồ sơ Discord trong cuộc trò chuyện."
                },
                discordProfilePosition: {
                    label: "Vị trí huy hiệu hồ sơ Discord",
                    description: "Vị trí của huy hiệu Hồ sơ Discord."
                },
                showDiscordNitro: {
                    label: "Hiển thị huy hiệu Discord Nitro",
                    description: "Bật để hiển thị huy hiệu Discord Nitro trong trò chuyện."
                },
                discordNitroPosition: {
                    label: "Vị trí huy hiệu Discord Nitro",
                    description: "Vị trí của huy hiệu Discord Nitro."
                },
                badgeSettings: {
                    label: "Cài đặt huy hiệu",
                    description: "Định cấu hình vị trí của các huy hiệu khác được hiển thị trong cuộc trò chuyện.",
                    modal: "Kéo để sắp xếp lại huy hiệu; Nhấp để bật/tắt một loại huy hiệu cụ thể."
                }
            },
            badge: {
                plexcord: "Huy hiệu hỗ trợ Plexcord",
                contributor: "Huy hiệu người tham gia Plexcord",
                discordProfile: "Hồ sơ bất hòa rozetleri (HypeSquad, Nhân viên Discord, Nhà phát triển tích cực vb.)",
                nitro: "huy hiệu nitro",
                staff: "Nhân viên bất hòa",
                partner: "Chủ sở hữu máy chủ đối tác",
                events: "Sự kiện HypeSquad",
                bravery: "Sự dũng cảm của Biệt đội Hype",
                brilliance: "HypeSquad rực rỡ",
                balance: "Số dư đội hình cường điệu",
                bugHunter: "Thợ săn lỗi bất hòa",
                earlyVerifiedBotDeveloper: "Nhà phát triển Bot đã được xác minh sớm",
                earlySupporter: "Người ủng hộ sớm",
                moderatorProgram: "Người điều hành chương trình tốt nghiệp"
            },
            modal: {
                plexcordContributor: "Người tham gia Plexcord",
                discordNitro: "Bất hòa Nitro",
                basic: "Nền tảng",
                classic: "Cổ điển"
            }
        },
        showConnections: {
            name: "Hiển thị kết nối",
            description: "Hiển thị các tài khoản được liên kết trong thẻ bật lên của người dùng",
            option: {
                iconSize: {
                    label: "Kích thước biểu tượng",
                    description: "Kích thước biểu tượng (px)"
                },
                iconSpacing: {
                    label: "Không gian biểu tượng",
                    description: "lề biểu tượng",
                    compact: "Nhỏ gọn",
                    cozy: "Thoải mái",
                    roomy: "Rộng"
                }
            }
        },
        showHiddenChannels: {
            name: "Hiển thịKênh ẩn",
            description: "Hiển thị các kênh mà bạn không có quyền truy cập.",
            tooltip: "Kênh bí mật",
            option: {
                channelStyle: {
                    label: "Kiểu kênh",
                    description: "Kiểu được sử dụng để hiển thị các kênh ẩn.",
                    classic: "Cổ điển",
                    muted: "Im lặng",
                    showUnreads: "Hiển thị chưa đọc",
                    mutedWithUnreads: "Hiển thị bị tắt tiếng và chưa đọc"
                },
                showMode: {
                    label: "Chế độ hiển thị",
                    description: "Chế độ được sử dụng để hiển thị các kênh ẩn.",
                    lock: "phong cách đơn giản với biểu tượng khóa",
                    hidden: "Kiểu tắt tiếng với biểu tượng con mắt ẩn ở bên phải",
                    lockIconRight: "Biểu tượng khóa bên phải"
                },
                defaultAllowedUsersAndRolesDropdownState: {
                    label: "Trạng thái thả xuống vai trò và người dùng được phép mặc định",
                    description: "Theo mặc định, menu vai trò và người dùng được phép có được mở trong các kênh riêng tư hay không"
                }
            },
            channelType: {
                text: "chữ",
                announcement: "thông báo",
                forum: "diễn đàn",
                voice: "ses",
                stage: "bối cảnh"
            },
            sortOrder: {
                latestActivity: "Sự kiện mới nhất",
                creationDate: "Ngày tạo"
            },
            forumLayout: {
                default: "Chưa đặt",
                list: "Chế độ xem danh sách",
                grid: "xem thư viện"
            },
            videoQuality: {
                auto: "Tự động",
                full: "720p"
            },
            modal: {
                hidden: "ẩn giấu",
                locked: "bị khóa",
                threads: "chủ đề",
                posts: "bài viết",
                messages: "tin nhắn",
                post: "bưu kiện",
                message: "tin nhắn",
                unknown: "không rõ",
                permissionDetails: "Chi tiết giấy phép",
                thisIsA: "Đây là kênh {{status}} {{channelType}}",
                canNotSee: "Bạn không thể xem phần {{type}} của kênh này.",
                guidelines: "Nhưng bạn có thể xem hướng dẫn của họ:",
                lastCreated: "Lần tạo cuối cùng {{type}}:",
                lastPin: "Bài đăng cuối cùng được ghim:",
                threadSlowmode: "Chế độ chậm của luồng mặc định:",
                slowmode: "Chế độ chậm:",
                bitrate: "Tốc độ bit:",
                region: "Khu vực:",
                automatic: "Tự động",
                videoQuality: "Chế độ chất lượng video:",
                inactiveArchiveDuration: "Khoảng thời gian không hoạt động mặc định trước khi lưu trữ {{type}}",
                defaultLayout: "Bố cục mặc định:",
                defaultSort: "Sắp xếp mặc định:",
                defaultReaction: "Biểu tượng cảm xúc phản ứng mặc định:",
                requireTag: "Việc gắn thẻ cho các bài viết trong diễn đàn này là bắt buộc.",
                availableTags: "Thẻ có sẵn:",
                allowedUsersAndRoles: "Người dùng và vai trò được phép:",
                hideAllowedUsersAndRoles: "Ẩn người dùng và vai trò được phép",
                viewAllowedUsersAndRoles: "Xem người dùng và vai trò được phép"
            }
        },
        showHiddenThings: {
            name: "Hiển thịNhững điều ẩn giấu",
            description: "Nó hiển thị nhiều thứ ẩn và chỉ dành cho người kiểm duyệt bất kể quyền.",
            option: {
                showTimeouts: {
                    label: "Hiển thị thời gian chờ của thành viên trong cuộc trò chuyện",
                    description: "Hiển thị biểu tượng thời gian chờ của thành viên trong cuộc trò chuyện."
                },
                showInvitesPaused: {
                    label: "Hiển thị thông tin lời mời bị tạm dừng",
                    description: "Hiển thị rằng lời mời đã bị tạm dừng trong danh sách máy chủ."
                },
                showModView: {
                    label: "Hiển thị chế độ xem mod",
                    description: "Hiển thị tùy chọn menu ngữ cảnh xem chế độ thành viên trên tất cả các máy chủ."
                }
            }
        },
        showMessageEmbeds: {
            name: "Hiển thịTin nhắnNhúng",
            description: "Thêm tùy chọn hiển thị nhúng vào menu ngữ cảnh cho các liên kết không có phần nhúng",
            context: {
                embed: {
                    show: "Hiển thị nhúng",
                    hide: "Xóa nhúng"
                }
            },
            error: {
                failed: "Không thể truy xuất nội dung nhúng",
                noEmbed: "Không tìm thấy nhúng"
            }
        },
        showMeYourName: {
            name: "Cho tôi biết tên của bạn",
            description: "Xem bất kỳ hoán vị nào của biệt hiệu tùy chỉnh, biệt hiệu của bạn bè, biệt hiệu máy chủ, tên hiển thị và tên người dùng trong cuộc trò chuyện.",
            option: {
                messages: {
                    label: "Tin nhắn",
                    description: "Hiển thị định dạng tên tùy chỉnh trong tin nhắn."
                },
                replies: {
                    label: "Trả lời",
                    description: "Xem định dạng tên tùy chỉnh trong thư trả lời."
                },
                mentions: {
                    label: "Đề cập",
                    description: "Hiển thị định dạng tên tùy chỉnh trong đề cập."
                },
                memberList: {
                    label: "Danh sách thành viên",
                    description: "Hiển thị tên khả dụng đầu tiên được liệt kê ở định dạng tên tùy chỉnh của bạn trong danh sách thành viên."
                },
                typingIndicator: {
                    label: "Chỉ báo viết",
                    description: "Hiển thị tên khả dụng đầu tiên được liệt kê ở định dạng tên tùy chỉnh của bạn trong chỉ báo nhập."
                },
                profilePopout: {
                    label: "Thẻ bật lên hồ sơ",
                    description: "Hiển thị tên khả dụng đầu tiên được liệt kê ở định dạng tên tùy chỉnh của bạn trong thẻ bật lên hồ sơ."
                },
                voiceChannels: {
                    label: "Kênh âm thanh",
                    description: "Hiển thị tên khả dụng đầu tiên được liệt kê ở định dạng tên tùy chỉnh của bạn trên các kênh âm thanh."
                },
                reactions: {
                    label: "phản ứng",
                    description: "Hiển thị tên khả dụng đầu tiên được liệt kê ở định dạng tên tùy chỉnh của bạn trong chú giải công cụ phản ứng và hiển thị tên đầy đủ trong cửa sổ bật lên phản ứng."
                },
                discriminators: {
                    label: "Hiển thị trình phân tích cú pháp",
                    description: "Thêm trình phân tích cú pháp vào tên người dùng bot. Trình phân tích cú pháp đã bị xóa đối với người dùng thông thường nhưng vẫn được sử dụng cho bot. Theo mặc định, tên người dùng của bot tương đương với tên chung của người dùng và do đó nhiều bot có thể có cùng tên người dùng. Việc thêm các trình phân tích cú pháp sẽ làm cho chúng trở nên độc đáo trở lại."
                },
                hideDefaultAtSign: {
                    label: "Ẩn mặc định @ Ký",
                    description: "Ẩn ký hiệu '@' mặc định ở đầu tên trong các đề cập và câu trả lời. Chỉ áp dụng nếu tính năng liên quan được bật."
                },
                truncateAllNamesWithStreamerMode: {
                    label: "Rút ngắn tất cả tên trong chế độ nhà xuất bản",
                    description: "Khi ở Chế độ phát sóng, hãy rút ngắn tất cả các tên, không chỉ tên người dùng."
                },
                removeDuplicates: {
                    label: "Xóa trùng lặp",
                    description: "Nếu bất kỳ hai tên nào giống nhau, hãy loại bỏ các tên trùng lặp, chỉ để lại những tên duy nhất."
                },
                ignoreFonts: {
                    label: "Bỏ qua phông chữ",
                    description: "Đối với tên thứ hai, thứ ba và thứ tư, hãy sử dụng GG SANS, bỏ qua phông chữ tùy chỉnh của người dùng."
                },
                ignoreGradients: {
                    label: "Bỏ qua các gradient",
                    description: "Đối với các tên không chính, nếu vai trò có dải màu và màu sau được đặt thành 'Vai trò+-#', hãy sử dụng màu chính thay vì toàn bộ dải màu và nếu có hiệu ứng nitro, hãy bỏ qua hoàn toàn."
                },
                animateGradients: {
                    label: "Tạo hiệu ứng chuyển màu",
                    description: "Hiển thị hoạt ảnh nếu tên thứ hai, thứ ba và thứ tư có dải màu vai trò. Bị tắt nếu 'Bỏ qua độ dốc' được bật hoặc giảm chuyển động được bật."
                },
                nameSeparator: {
                    label: "Dấu phân cách tên",
                    description: "Dấu phân cách để sử dụng giữa các tên. Mặc định là không gian đơn."
                },
                friendNameOnlyInDirectMessages: {
                    label: "Tên bạn bè chỉ hiển thị trong tin nhắn riêng tư",
                    description: "Chỉ hiển thị tên bạn bè trong tin nhắn riêng tư, không hiển thị trên máy chủ."
                },
                customNameOnlyInDirectMessages: {
                    label: "Tên tùy chỉnh Chỉ hiển thị trong tin nhắn riêng tư",
                    description: "Chỉ hiển thị tên tùy chỉnh trong tin nhắn riêng tư, không hiển thị trên máy chủ."
                },
                includedNames: {
                    label: "Tên bao gồm",
                    description: "Thứ tự hiển thị tên người dùng, tên hiển thị, biệt hiệu và tên bạn bè. Sử dụng các phần giữ chỗ sau: {user}, {display}, {nick}, {friend}. Nếu không có tên, bạn có thể viết các tên thay thế sẽ được sử dụng, phân tách bằng dấu phẩy: {friend, nick, display}. Bạn có thể thêm ba tiền tố và ba hậu tố cho mỗi tên."
                },
                customNameColor: {
                    label: "Màu tên tùy chỉnh",
                    description: "Màu sử dụng cho tên tùy chỉnh mà bạn gán cho người dùng, nếu đó không phải là tên đầu tiên được hiển thị. Nó chấp nhận mọi đầu vào CSS hợp lệ. Sử dụng 'Vai trò' để theo dõi màu vai trò chính của người dùng, màu hiệu ứng nitro hoặc màu IRCColors (nếu được bật). Sử dụng 'Vai trò+-#' để điều chỉnh độ sáng theo tỷ lệ phần trăm này (ví dụ: 'Vai trò+15')"
                },
                friendNameColor: {
                    label: "Màu tên bạn bè",
                    description: "Màu được sử dụng khi tên của người bạn không phải là tên đầu tiên được hiển thị. Nó chấp nhận mọi đầu vào CSS hợp lệ. Sử dụng 'Vai trò' để theo dõi màu vai trò chính của người dùng, màu hiệu ứng nitro hoặc màu IRCColors (nếu được bật). Sử dụng 'Vai trò+-#' để điều chỉnh độ sáng theo tỷ lệ phần trăm này (ví dụ: 'Vai trò+15')"
                },
                nicknameColor: {
                    label: "Màu biệt hiệu",
                    description: "Màu sử dụng khi biệt hiệu không phải là tên hiển thị đầu tiên. Nó chấp nhận mọi đầu vào CSS hợp lệ. Sử dụng 'Vai trò' để theo dõi màu vai trò chính của người dùng, màu hiệu ứng nitro hoặc màu IRCColors (nếu được bật). Sử dụng 'Vai trò+-#' để điều chỉnh độ sáng theo tỷ lệ phần trăm này (ví dụ: 'Vai trò+15')"
                },
                displayNameColor: {
                    label: "Màu tên hiển thị",
                    description: "Màu được sử dụng khi tên hiển thị không phải là tên hiển thị đầu tiên. Nó chấp nhận mọi đầu vào CSS hợp lệ. Sử dụng 'Vai trò' để theo dõi màu vai trò chính của người dùng, màu hiệu ứng nitro hoặc màu IRCColors (nếu được bật). Sử dụng 'Vai trò+-#' để điều chỉnh độ sáng theo tỷ lệ phần trăm này (ví dụ: 'Vai trò+15')"
                },
                usernameColor: {
                    label: "Màu tên người dùng",
                    description: "Màu được sử dụng khi tên người dùng không phải là tên đầu tiên được hiển thị. Nó chấp nhận mọi đầu vào CSS hợp lệ. Sử dụng 'Vai trò' để theo dõi màu vai trò chính của người dùng, màu hiệu ứng nitro hoặc màu IRCColors (nếu được bật). Sử dụng 'Vai trò+-#' để điều chỉnh độ sáng theo tỷ lệ phần trăm này (ví dụ: 'Vai trò+15')"
                },
                triggerNameRerender: {
                    label: "Tái tạo tên kích hoạt",
                    description: "Việc thay đổi cài đặt này sẽ kích hoạt tên được tạo lại."
                }
            },
            modal: {
                change: {
                    title: "Thay đổi tên người dùng SMYN",
                },
                add: {
                    title: "Thêm biệt hiệu SMYN"
                },
                setCustom: "Đặt biệt hiệu SMYN tùy chỉnh cho người dùng này. Sử dụng bằng cách chỉ định {custom} trong cài đặt mẫu SMYN.",
                nickname: "Biệt danh SMYN",
                reset: "Đặt lại biệt hiệu SMYN",
                cancel: "Hủy bỏ"
            }
        },
        showResourceChannels: {
            name: "Hiển thịTài nguyênKênh",
            description: "Hiển thị các kênh ẩn đằng sau tài nguyên máy chủ trong danh sách kênh"
        },
        showSongName: {
            name: "Hiển thịTên bài hát",
            description: "Hiển thị tên bài hát thay vì nghệ sĩ cho sự kiện Spotify"
        },
        showTimeoutDuration: {
            name: "Hiển thịHết thời gian",
            description: "Cho biết người dùng sẽ hết thời gian chờ trong chú giải công cụ biểu tượng thời gian chờ hoặc bên cạnh nó",
            option: {
                displayStyle: {
                    label: "Kiểu hiển thị",
                    description: "Cách xem khoảng thời gian chờ",
                    tooltip: "Trong chú giải công cụ",
                    inline: "Bên cạnh biểu tượng hết thời gian chờ"
                }
            }
        },
        sidebarChat: {
            name: "Thanh bênTrò chuyện",
            description: "Mở kênh hoặc DM khác dưới dạng thanh bên hoặc cửa sổ bật lên",
            toolbox: {
                label: "Mở cuộc trò chuyện trước đó"
            },
            context: {
                label: "Mở trò chuyện thanh bên"
            },
            modal: {
                switch: "Thay đổi kênh",
                popout: "Mở Trò chuyện dưới dạng Cửa sổ bật lên",
                close: "Đóng trò chuyện ở thanh bên"
            },
            option: {
                persistSidebar: {
                    label: "Đặt trò chuyện trên thanh bên vĩnh viễn",
                    description: "Cho phép trò chuyện ở thanh bên vẫn mở khi Discord được khởi động lại"
                },
                patchCommunity: {
                    label: "Áp dụng bản vá cộng đồng",
                    description: "Vá các mục trên máy chủ cộng đồng, chẳng hạn như Trình duyệt kênh hoặc tab Thành viên."
                }
            }
        },
        signature: {
            name: "Chữ ký",
            description: "Tự động ký/kết thúc nội dung tin nhắn",
            option: {
                name: {
                    label: "Chữ ký",
                    description: "Văn bản chữ ký sẽ được thêm vào cuối tin nhắn của bạn"
                },
                textHeader: {
                    label: "Tiêu đề văn bản",
                    description: "Tiêu đề cần được thêm vào đầu văn bản"
                },
                showIcon: {
                    label: "Hiển thị biểu tượng",
                    description: "Hiển thị biểu tượng trên thanh trò chuyện để bật và tắt plugin"
                },
                contextMenu: {
                    label: "Trình đơn ngữ cảnh",
                    description: "Thêm tùy chọn chuyển đổi chức năng trên menu ngữ cảnh đăng nhập trò chuyện"
                },
                isEnabled: {
                    label: "Hiệu quả",
                    description: "Chuyển đổi chức năng"
                }
            },
            tooltip: {
                enable: "Bật chữ ký",
                disable: "Tắt chữ ký"
            },
            context: {
                enable: "Bật chữ ký"
            },
            command: {
                signature: {
                    name: "Chữ ký",
                    description: "Bật và tắt chữ ký của bạn",
                    toogle: "Thay đổi chữ ký của bạn (hành vi mặc định: thay đổi)",
                    enabled: "Đã bật chữ ký",
                    disabled: "Chữ ký bị vô hiệu hóa"
                }
            }
        },
        silentMessageToggle: {
            name: "SilentMessageChuyển đổi",
            description: "Thêm một nút vào thanh trò chuyện để bật và tắt tính năng gửi tin nhắn im lặng.",
            option: {
                persistState: {
                    label: "Đặt trạng thái vĩnh viễn",
                    description: "Xác định cách duy trì trạng thái chuyển đổi tin nhắn im lặng",
                    none: "Nó không phải là vĩnh viễn (cần được đặt lại khi kênh được thay đổi)",
                    channels: "Làm cho nó liên tục trên các kênh",
                    restarts: "Kiên trì trên các kênh và khởi động lại Discord"
                },
                autoDisable: {
                    label: "Tự động tắt",
                    description: "Tự động tắt tính năng lại sau khi gửi tin nhắn im lặng"
                }
            },
            tooltip: {
                enable: "Bật tin nhắn im lặng",
                disable: "Tắt tin nhắn im lặng"
            }
        },
        silentTyping: {
            name: "Đánh máy im lặng",
            description: "Ẩn chỉ báo gõ của bạn khỏi cuộc trò chuyện.",
            command: {
                silentTyping: {
                    name: "Đánh máy im lặng",
                    description: "Ẩn chỉ báo gõ của bạn khỏi cuộc trò chuyện.",
                    toggle: {
                        name: "chuyển đổi",
                        description: "Chuyển đổi chức năng trên toàn cầu, trên mỗi kênh hoặc trên mỗi máy chủ.",
                        global: "Toàn cầu",
                        channel: "Kênh",
                        guild: "Người trình bày"
                    },
                    chatBarIndicator: {
                        name: "chatBarChỉ báo",
                        description: "Ẩn chỉ báo đang gõ của người dùng khác ở đầu thanh trò chuyện."
                    },
                    membersListIndicator: {
                        name: "thành viênListIndicator",
                        description: "Ẩn chỉ báo gõ của người dùng khác khỏi danh sách thành viên."
                    },
                    chatIcon: {
                        name: "biểu tượng trò chuyện",
                        description: "Hiển thị biểu tượng trên thanh trò chuyện để bật và tắt plugin nhanh chóng."
                    },
                    chatContextMenu: {
                        name: "trò chuyệnContextMenu",
                        description: "Thêm menu thả xuống vào menu ngữ cảnh trò chuyện để thay đổi nhanh cài đặt plugin."
                    },
                    defaultHidden: {
                        name: "mặc địnhẨn",
                        description: "Xác định xem thông tin ghi trong DM/kênh/máy chủ có bị ẩn theo mặc định hay không."
                    }
                }
            },
            content: {
                updated: "Cài đặt gõ im lặng đã được cập nhật.",
                noChanges: "Không có thay đổi nào được thực hiện đối với cài đặt gõ im lặng."
            },
            tooltip: {
                hidden: "Nó báo Ẩn ({{location}})",
                visible: "Viết có thể nhìn thấy ({{location}})",
                global: "Viết có thể nhìn thấy (Toàn cầu)"
            },
            option: {
                enabledGlobally: {
                    label: "Hoạt động toàn cầu",
                    description: "Bật/tắt chỉ báo viết của riêng bạn trên toàn cầu."
                },
                hideChatBoxTypingIndicators: {
                    label: "Ẩn chỉ báo viết trong hộp trò chuyện",
                    description: "Ẩn chỉ báo đang gõ ở đầu hộp trò chuyện của người dùng khác."
                },
                hideMembersListTypingIndicators: {
                    label: "Ẩn chỉ báo viết danh sách thành viên",
                    description: "Ẩn chỉ báo gõ trong danh sách thành viên của người dùng khác."
                },
                chatIcon: {
                    label: "Biểu tượng trò chuyện",
                    description: "Hiển thị biểu tượng trên thanh trò chuyện để nhanh chóng chuyển đổi plugin."
                },
                chatIconLeftClickAction: {
                    label: "Biểu tượng trò chuyện Hành động nhấp chuột trái",
                    description: "Xác định những việc cần làm khi nhấn chuột trái vào biểu tượng trò chuyện.",
                    global: "Thay đổi trạng thái viết chung",
                    channel: "Thay đổi trạng thái ghi cho kênh",
                    guild: "Thay đổi trạng thái ghi vào máy chủ",
                    settings: "Mở cài đặt plugin"
                },
                chatIconMiddleClickAction: {
                    label: "Biểu tượng trò chuyện Hành động nhấp chuột giữa",
                    description: "Xác định những việc cần làm khi nhấp chuột giữa vào biểu tượng trò chuyện.",
                    global: "Thay đổi trạng thái viết chung",
                    channel: "Thay đổi trạng thái ghi cho kênh",
                    guild: "Thay đổi trạng thái ghi vào máy chủ",
                    settings: "Mở cài đặt plugin"
                },
                chatIconRightClickAction: {
                    label: "Biểu tượng trò chuyện Hành động nhấp chuột phải",
                    description: "Xác định những việc cần làm khi nhấp chuột phải vào biểu tượng trò chuyện.",
                    global: "Thay đổi trạng thái viết chung",
                    channel: "Thay đổi trạng thái ghi cho kênh",
                    guild: "Thay đổi trạng thái ghi vào máy chủ",
                    settings: "Mở cài đặt plugin"
                },
                chatContextMenu: {
                    label: "Menu ngữ cảnh trò chuyện",
                    description: "Thêm menu thả xuống vào menu ngữ cảnh trò chuyện để thay đổi nhanh cài đặt plugin."
                },
                defaultHidden: {
                    label: "Mặc định Ẩn",
                    description: "Nếu được bật, chỉ báo của bạn sẽ bị ẩn khỏi những người dùng khác trên tất cả DM/kênh/máy chủ không được liệt kê trong danh sách 'Vị trí bị vô hiệu hóa' bên dưới. Nếu tính năng này bị tắt, chỉ báo của bạn sẽ xuất hiện ở những nơi không có trong danh sách 'Vị trí Hoạt động'."
                },
                enabledLocations: {
                    label: "Địa điểm đang hoạt động",
                    description: "Kích hoạt chức năng cho các ID này. Nó chấp nhận ID DM, ID kênh và ID máy chủ được phân tách bằng dấu phẩy. Chỉ được sử dụng nếu 'Riêng tư mặc định' bị tắt."
                },
                disabledLocations: {
                    label: "Vị trí bị vô hiệu hóa",
                    description: "Vô hiệu hóa chức năng cho các ID này. Nó chấp nhận ID DM, ID kênh và ID máy chủ được phân tách bằng dấu phẩy. Chỉ được sử dụng nếu 'Riêng tư mặc định' được bật."
                }
            }
        },
        snowfall: {
            name: "Tuyết rơi",
            description: "Hãy để tuyết rơi trên Discord!",
            about: {
                title: "Thông tin",
                paragraph: "Plugin này thêm hiệu ứng tuyết rơi theo chủ đề Giáng sinh trên giao diện Discord. Bạn có thể thay đổi loại tuyết từ các cài đặt bên dưới.",
                note: "LƯU Ý: Mặc dù plugin này không tạo ra bất kỳ tác động hiệu suất nào hơn so với plug-in Plexcord trung bình trên hầu hết các máy tính, nhưng nó có thể gây ra một số độ trễ trên các hệ thống cấp thấp."
            },
            option: {
                typeOfSnow: {
                    label: "loại xe",
                    description: "Thay đổi loại tuyết hiển thị (ảnh hưởng đến hiệu suất).",
                    solid: "Màu đồng nhất (Hiệu suất cao nhất)",
                    text: "Metin (Hiệu suất trung bình)",
                    emoji: "Trực quan (Hiệu suất kém nhất)"
                },
                maxSize: {
                    label: "Kích thước tối đa",
                    description: "Kích thước bông tuyết tối đa"
                },
                speed: {
                    label: "Tốc độ",
                    description: "Tỷ lệ tuyết rơi (cao hơn = rơi nhanh hơn)"
                },
                flakesPerSecond: {
                    label: "Bông tuyết mỗi giây",
                    description: "Lượng bông tuyết rơi mỗi giây (cao hơn = lượng mưa lớn hơn)"
                }
            }
        },
        sortFriendRequests: {
            name: "Sắp xếp yêu cầu kết bạn",
            description: "Sắp xếp lời mời kết bạn theo ngày nhận được",
            tooltip: "Đã thêm — {{date}}",
            option: {
                showDates: {
                    label: "Hiển thị ngày",
                    description: "Hiển thị ngày trong yêu cầu kết bạn"
                }
            }
        },
        soundBoardLogger: {
            name: "SoundBoardLogger",
            description: "Ghi lại tất cả âm thanh soundboard được phát trong cuộc trò chuyện thoại và cho phép bạn tải chúng xuống",
            tooltip: "Mở nhật ký SoundBoard",
            option: {
                savedIds: {
                    label: "ID bảng âm thanh đã lưu",
                    description: "Số lượng ID soundboard bạn muốn lưu tại một thời điểm (0 cho phép bạn lưu không giới hạn)",
                    notNumber: "Giá trị không phải là một con số.",
                    cantDecimal: "Giá trị không thể là số thập phân.",
                    cantNegative: "Giá trị không thể là số âm.",
                    heading: "Số lượng ID soundboard bạn muốn lưu tại một thời điểm (0 cho phép bạn lưu không giới hạn)",
                    warning: "Cảnh báo! Đặt số thành giá trị thấp hơn sẽ đặt lại nhật ký!",
                    placeholder: "Nhập một số"
                },
                fileType: {
                    label: "Loại tệp",
                    description: "Định dạng bạn muốn lưu tệp của mình vào"
                },
                openLogs: {
                    label: "Nhật ký mở",
                    description: "Hiển thị nhật ký",
                    button: "Nhật ký mở"
                },
                soundVolume: {
                    label: "Mức âm thanh",
                    description: "Âm lượng bật/tắt âm thanh (0 tắt)"
                },
                iconLocation: {
                    label: "Vị trí biểu tượng",
                    description: "Chọn nơi xuất hiện biểu tượng Nhật ký SoundBoard (yêu cầu khởi động lại)",
                    toolbar: "Thanh công cụ",
                    chatInput: "Trò chuyện Đăng nhập"
                }
            },
            modal: {
                title: "Nhật ký SoundBoard",
                loading: "Đang tải âm thanh...",
                noLogs: "Chưa có âm thanh nào được ghi lại. Tham gia trò chuyện thoại để đăng nhập!",
                clearLogs: "Xóa nhật ký",
                played: "Đã chơi {{time}} lần",
                last: "Chơi lần cuối:",
                also: "Anh ta cũng đã ăn trộm:",
                download: "Tải xuống",
                copyId: "Sao chép giấy tờ tùy thân",
                copied: "Đã sao chép ID vào clipboard!",
                playSound: "Phát âm thanh",
                moreUsers: "Những người khác cũng sử dụng âm thanh này...",
                volume: "Âm lượng của soundboard"
            }
        },
        splitLargeMessages: {
            name: "Chia tin nhắn lớn",
            description: "Chia tin nhắn lớn thành nhiều tin nhắn để phù hợp với giới hạn tin nhắn của Discord.",
            option: {
                maxLength: {
                    label: "Độ dài tin nhắn tối đa",
                    description: "Độ dài tối đa mà một tin nhắn có thể có trước khi được chia nhỏ. Đặt thành 0 để tự động phát hiện."
                },
                disableFileConversion: {
                    label: "Tắt chuyển đổi tệp",
                    description: "Nếu được bật, sẽ tắt chuyển đổi tệp cho các tin nhắn lớn."
                },
                sendDelay: {
                    label: "Trì hoãn vận chuyển",
                    description: "Thời gian chờ tính bằng giây giữa mỗi bản nhạc."
                },
                hardSplit: {
                    label: "Phân vùng rắn",
                    description: "Nếu được bật, nó sẽ tách khỏi ký tự cuối cùng thay vì dấu cách/dòng mới."
                },
                splitInSlowmode: {
                    label: "Chia ở chế độ chậm",
                    description: "Chia nhỏ tin nhắn nếu bật chế độ chậm trên kênh?"
                },
                slowmodeMax: {
                    label: "Chế độ chậm tối đa",
                    description: "Thời gian chế độ chậm tối đa cho phép khi chia ở chế độ chậm."
                }
            }
        },
        spotifyActivityToggle: {
            name: "SpotifyHoạt độngChuyển đổi",
            description: "Thêm nút chuyển đổi để hiển thị hoạt động Spotify.",
            tooltip: {
                enable: "Mở hoạt động Spotify",
                disable: "Tắt hoạt động Spotify"
            },
            option: {
                location: {
                    label: "Phụ nữ",
                    description: "Nơi hiển thị nút bật/tắt Spotify",
                    panel: "Bên cạnh Tắt tiếng/Tắt tiếng",
                    toolbox: "Hộp công cụ Plexcord"
                },
                activityStatus: {
                    label: "Trạng thái hoạt động",
                    description: "Trạng thái hiện tại của hoạt động Spotify của bạn"
                }
            }
        },
        spotifyCrack: {
            name: "Spotify Crack",
            description: "Cho phép cùng nghe miễn phí, chặn tự động tạm dừng trong trò chuyện thoại và tiếp tục phát hoạt động Spotify khi không hoạt động",
            option: {
                noSpotifyAutoPause: {
                    label: "Tắt Tự động tạm dừng Spotify",
                    description: "Tắt tính năng tự động tạm dừng của Spotify."
                },
                keepSpotifyActivityOnIdle: {
                    label: "Tiếp tục hoạt động Spotify khi không hoạt động",
                    description: "Cho phép hoạt động Spotify tiếp tục phát khi không hoạt động"
                }
            }
        },
        spotifyShareCommands: {
            name: "Lệnh chia sẻ Spotify",
            description: "Chia sẻ bài hát, album hoặc nghệ sĩ Spotify hiện tại của bạn bằng lệnh gạch chéo (/track, /album, /artist)",
            command: {
                makeCommand: {
                    description: "Chia sẻ Spotify {{type}} hiện tại của bạn trong cuộc trò chuyện",
                    track: "Bạn hiện không nghe bất kỳ bài hát nào trên Spotify.",
                    find: "Không thể tìm thấy bài hát trên Spotify."
                }
            }
        },
        startupTimings: {
            name: "Thời gian khởi động",
            description: "Thêm Thời gian bắt đầu vào menu Cài đặt",
            modal: {
                title: "Thời gian bắt đầu",
                ended: "Thời gian kết thúc xem:",
                start: "Bắt đầu",
                interval: "Tháng 12",
                delta: "Đồng bằng",
                event: "Olay",
                serverTrace: "Giám sát máy chủ",
                loading: "Đang tải..."
            }
        },
        statusNotifications: {
            name: "Thông báo trạng thái",
            description: "Thêm thông báo thay đổi trạng thái",
            loading: "Đang tải...",
            option: {
                notificationsSound: {
                    label: "Âm thanh thông báo",
                    description: "Phát âm thanh thông báo cho thông báo trạng thái?"
                },
                usersList: {
                    label: "Danh sách người dùng",
                    description: "Người dùng sẽ được thông báo khi thay đổi trạng thái xảy ra",
                    empty: "Không có người dùng nào được theo dõi. Bạn có thể thêm người dùng bằng cách nhấp chuột phải vào họ và sử dụng tùy chọn 'Thông báo trạng thái'."
                }
            },
            context: {
                label: "Thông báo trạng thái",
                notifications: "Thông báo",
                type: {
                    all: "Tất cả",
                    online: "trực tuyến",
                    offline: "ngoại tuyến",
                    none: "Không có"
                }
            },
            notification: {
                unknownUser: "người dùng",
                title: "Thông báo trạng thái",
            },
            status: {
                online: "trực tuyến",
                idle: "nhàn rỗi",
                dnd: "Đừng làm phiền",
                offline: "ngoại tuyến",
            },
        },
        statusPresets: {
            name: "Trạng thái cài sẵn",
            description: "Cho phép bạn lưu trạng thái của mình và điều chỉnh chúng sau",
            button: {
                remember: "Ghi nhớ trạng thái",
            },
            context: {
                edit: "Chỉnh sửa cài đặt trước tùy chỉnh",
                set: "Đặt ngoại lệ"
            },
            notification: {
                successfully: "Đã lưu trạng thái thành công"
            }
        },
        steamStatusSync: {
            name: "Đồng bộ hóa trạng thái Steam",
            description: "Đồng bộ trạng thái của bạn với Steam! (Trực tuyến, Đi, Vô hình hoặc Ngoại tuyến.)",
            option: {
                onlineStatus: {
                    label: "Trạng thái trực tuyến",
                    description: "Trạng thái Steam khi Discord Online"
                },
                idleStatus: {
                    label: "Trạng thái nhàn rỗi",
                    description: "Trạng thái Steam khi Discord ở chế độ chờ"
                },
                dndStatus: {
                    label: "Trạng thái không làm phiền",
                    description: "Trạng thái Steam trong khi Discord Không làm phiền"
                },
                invisibleStatus: {
                    label: "Trạng thái vô hình",
                    description: "Trạng thái Steam khi Discord Invisible"
                },
                goInvisibleIfActivityIsHidden: {
                    label: "Trở nên vô hình nếu sự kiện là riêng tư",
                    description: "Đặt trạng thái Steam thành Ẩn khi hoạt động Discord bị ẩn"
                }
            },
            status: {
                online: "trực tuyến",
                away: "Xa",
                invisible: "Vô hình",
                offline: "Ngoại tuyến (Ngắt kết nối khỏi trò chuyện Steam)",
                disabled: "Tàn tật"
            }
        },
        stickerBlocker: {
            name: "Nhãn dánChặn",
            description: "Cho phép bạn ngăn chặn việc hiển thị nhãn dán.",
            option: {
                showGif: {
                    label: "Hiển thị ảnh GIF",
                    description: "Có hiển thị ảnh GIF mèo thú vị hay không."
                },
                showMessage: {
                    label: "Hiển thị tin nhắn",
                    description: "Có hiển thị thông báo cho biết ID nào bị chặn hay không"
                },
                showButton: {
                    label: "Nút hiển thị",
                    description: "Có hiển thị nút để bỏ chặn GIF hay không"
                },
                blockedStickers: {
                    label: "Hình dán bị chặn",
                    description: "Danh sách ID nhãn dán bị chặn (không chỉnh sửa trừ khi bạn biết mình đang làm gì)"
                }
            },
            modal: {
                blocked: "Hình dán bị chặn. ID: {{id}} TÊN: {{name}}",
                unblock: "Bỏ chặn {{name}}"
            },
            context: {
                blockSticker: "Hình dán khối",
                unblockSticker: "Bỏ chặn nhãn dán"
            }
        },
        stickerPaste: {
            name: "Nhãn dánDán",
            description: "Khi bạn chọn một nhãn dán trong bộ chọn nhãn dán, nó sẽ thêm nhãn dán đó vào hộp trò chuyện thay vì gửi ngay lập tức"
        },
        streamerModeOnStream: {
            name: "StreamerModeOnStream",
            description: "Tự động bật chế độ truyền phát khi bạn bắt đầu phát trên Discord"
        },
        streamingCodecDisabler: {
            name: "StreamingCodecDisabler",
            description: "Vô hiệu hóa codec phát trực tuyến mong muốn của bạn",
            option: {
                disableAv1Codec: {
                    label: "Tắt Codec AV1",
                    description: "Ngăn Discord cân nhắc sử dụng AV1 để phát trực tuyến."
                },
                disableH265Codec: {
                    label: "Tắt Codec H265",
                    description: "Ngăn Discord cân nhắc sử dụng H265 để phát trực tuyến."
                },
                disableH264Codec: {
                    label: "Tắt Codec H264",
                    description: "Ngăn Discord cân nhắc sử dụng H264 để phát trực tuyến."
                }
            }
        },
        superReactionTweaks: {
            name: "SuperReactionTinh chỉnh",
            description: "Tùy chỉnh giới hạn Siêu phản ứng được phát đồng thời và sử dụng siêu phản ứng theo mặc định",
            option: {
                superReactByDefault: {
                    label: "Siêu phản ứng theo mặc định",
                    description: "Bộ chọn phản ứng sử dụng Siêu phản ứng theo mặc định"
                },
                unlimitedSuperReactionPlaying: {
                    label: "Lượt chơi siêu phản ứng không giới hạn",
                    description: "Loại bỏ giới hạn Super Reaction khi phát lại đồng thời"
                },
                superReactionPlayingLimit: {
                    label: "Giới hạn phát lại siêu phản ứng",
                    description: "Số lượng Siêu phản ứng tối đa để chơi cùng lúc. 0 vô hiệu hóa Super Reactions khi phát"
                }
            }
        },
        textReplace: {
            name: "Thay thế văn bản",
            description: "Thay đổi văn bản trong tin nhắn của bạn. Bạn có thể tìm thấy các quy tắc được tạo sẵn trong kênh #textreplace-rules trên máy chủ Plexcord",
            option: {
                replace: {
                    label: "Thay đổi",
                    string: "Sử dụng văn bản thuần túy",
                    regex: "Sử dụng Regex",
                    myMessages: "Áp dụng cho tin nhắn của riêng bạn (hiển thị cho mọi người)",
                    othersMessages: "Áp dụng cho tin nhắn của người khác (chỉ hiển thị với bạn)",
                    allMessages: "Áp dụng cho tất cả tin nhắn"
                },
                stringRules: {
                    label: "Quy tắc văn bản thuần túy",
                    description: "Quy tắc thay thế văn bản bằng cách sử dụng kết hợp văn bản gốc."
                },
                regexRules: {
                    label: "Quy tắc Regex",
                    description: "Quy tắc thay thế văn bản bằng cách sử dụng biểu thức thông thường."
                }
            },
            modal: {
                title: "Kiểm tra các quy tắc",
                find: "Bul",
                replace: "Thay đổi",
                includes: "Chỉ khi nó chứa",
                type: "Viết tin nhắn",
                applied: "Tin nhắn có áp dụng quy tắc"
            }
        },
        themeAttributes: {
            name: "Chủ đềThuộc tính",
            description: "Thêm thuộc tính dữ liệu vào các thành phần khác nhau cho mục đích tạo chủ đề"
        },
        timezones: {
            name: "Múi giờ",
            description: "Hiển thị giờ địa phương của người dùng trong hồ sơ và chuỗi tin nhắn",
            button: {
                wantToSave: "Bạn có muốn lưu múi giờ của mình vào cơ sở dữ liệu không? Nhấn vào đây để thiết lập.",
                yourLocalTimezone: "(Múi giờ địa phương của bạn)"
            },
            context: {
                set: "Đặt múi giờ địa phương"
            },
            toast: {
                refresh: {
                    successfully: "Múi giờ đã được gia hạn thành công!",
                    failed: "Múi giờ không thể được làm mới!",
                    failedTo: "Múi giờ không thể được làm mới."
                },
                update: {
                    successfully: "Múi giờ được cập nhật thành công!",
                    failed: "Không thể đặt múi giờ."
                },
                delete: {
                    successfully: "Múi giờ đã được xóa thành công!",
                    failed: "Không thể xóa múi giờ."
                },
                auth: {
                    failed: "Xác thực không thành công.",
                    success: "Ủy quyền thành công!"
                }
            },
            toolbox: {
                set: "Đặt múi giờ cơ sở dữ liệu",
                refresh: "Làm mới múi giờ cơ sở dữ liệu"
            },
            option: {
                showOwnTimezone: {
                    label: "Hiển thị múi giờ của bạn",
                    description: "Hiển thị múi giờ của bạn trên hồ sơ và chuỗi tin nhắn của bạn"
                },
                twentyFourHourTime: {
                    label: "Định dạng 24 giờ",
                    description: "Hiển thị thời gian ở định dạng 24 giờ"
                },
                showTimezoneInfo: {
                    label: "Hiển thị thông tin múi giờ",
                    description: "Hiển thị thông tin múi giờ ngoài đồng hồ"
                },
                showMessageHeaderTime: {
                    label: "Hiển thị thời gian tiêu đề tin nhắn",
                    description: "Hiển thị thời gian trong chuỗi tin nhắn"
                },
                showProfileTime: {
                    label: "Hiển thị thời gian hồ sơ",
                    description: "Hiển thị thời gian trong hồ sơ người dùng"
                },
                useDatabase: {
                    label: "Sử dụng múi giờ cơ sở dữ liệu",
                    description: "Sử dụng cơ sở dữ liệu để lấy múi giờ của người dùng"
                },
                preferDatabaseOverLocal: {
                    label: "Thích cơ sở dữ liệu hơn cục bộ",
                    description: "Ưu tiên cơ sở dữ liệu hơn bộ nhớ cục bộ trên các múi giờ"
                },
                databaseUrl: {
                    label: "URL cơ sở dữ liệu",
                    description: "URL của máy chủ cơ sở dữ liệu múi giờ"
                },
                setDatabaseTimezone: {
                    label: "Đặt múi giờ cơ sở dữ liệu",
                    description: "Đặt múi giờ của bạn trong cơ sở dữ liệu",
                    setTimezone: "Đặt múi giờ trong cơ sở dữ liệu"
                },
                resetDatabaseTimezone: {
                    label: "Đặt lại múi giờ cơ sở dữ liệu",
                    description: "Đặt lại múi giờ của bạn trong cơ sở dữ liệu",
                    failed: "Không thể đặt lại múi giờ cơ sở dữ liệu"
                },
                askedTimezone: {
                    label: "Múi giờ được hỏi",
                    description: "Cho biết liệu người dùng có được nhắc về múi giờ của họ hay không"
                }
            },
            modal: {
                title: "Múi giờ",
                select: "Chọn múi giờ",
                selectPlaceholder: "Chọn múi giờ",
                delete: "Xóa múi giờ",
                save: "Cứu"
            }
        },
        toastNotifications: {
            name: "Thông báo bánh mì nướng",
            description: "Hiển thị thông báo chúc mừng khi bạn nhận được tin nhắn trực tiếp.",
            notification: {
                call: "Bắt đầu tìm kiếm với bạn!",
                recipient: {
                    add: "{{target}} đã được thêm vào nhóm bởi {{actor}}.",
                    remove: "{{target}} đã bị xóa khỏi nhóm bởi {{actor}}.",
                    left: "Anh ấy đã rời nhóm."
                },
                channel: {
                    change: {
                        name: "Tên kênh đã đổi thành {{name}}.",
                        icon: "Biểu tượng kênh đã được thay đổi."
                    },
                    pinned: "Đã ghim một tin nhắn."
                },
                sent: {
                    embed: "Anh ấy đã gửi một bản nhúng.",
                    sticker: "Anh ấy đã gửi một nhãn dán.",
                    attachment: "Tài liệu:"
                },
                redacted: "Nội dung tin nhắn đã bị ẩn.",
                friend: {
                    accept: "{{user}} hiện là bạn của bạn",
                    acceptBody: "Bây giờ bạn có thể gửi tin nhắn trực tiếp cho anh ấy.",
                    request: "{{user}} đã gửi cho bạn lời mời kết bạn.",
                    requestBody: "Bạn có thể chấp nhận hoặc từ chối điều này từ tab Bạn bè."
                },
                example: {
                    title: "Thông báo mẫu",
                    body: "Đây là một văn bản thông báo mẫu."
                }
            },
            modal: {
                dismiss: "Đóng thông báo",
                attachments: "Đã gửi {{đính kèm}} tệp."
            },
            option: {
                position: {
                    label: "Phụ nữ",
                    description: "Vị trí thông báo Toast",
                    topRight: "Trên cùng bên phải",
                    topLeft: "Trên cùng bên trái",
                    bottomRight: "Dưới cùng bên phải",
                    bottomLeft: "Sol Alt"
                },
                timeout: {
                    label: "Giờ đóng cửa",
                    description: "Bao nhiêu giây để hiển thị thông báo"
                },
                opacity: {
                    label: "Độ mờ",
                    description: "Độ mờ của thông báo Toast"
                },
                determineServerNotifications: {
                    label: "Đặt thông báo máy chủ",
                    description: "Xác định xem có hiển thị thông báo dựa trên cài đặt thông báo của máy chủ hay không"
                },
                directMessages: {
                    label: "Tin nhắn trực tiếp",
                    description: "Hiển thị thông báo cho tin nhắn trực tiếp"
                },
                groupMessages: {
                    label: "Tin nhắn nhóm",
                    description: "Hiển thị thông báo cho tin nhắn nhóm"
                },
                friendServerNotifications: {
                    label: "Thông báo về bạn bè và máy chủ",
                    description: "Hiển thị thông báo khi bạn bè gửi tin nhắn trên máy chủ công cộng"
                },
                friendActivity: {
                    label: "Sự kiện kết bạn",
                    description: "Hiển thị thông báo thêm bạn bè hoặc nhận yêu cầu kết bạn"
                },
                notifyFor: {
                    label: "Các kênh nhận thông báo",
                    description: "Nhập ID kênh để nhận thông báo (phân cách bằng dấu phẩy)"
                },
                ignoreUsers: {
                    label: "Người dùng bỏ qua",
                    description: "Nhập ID người dùng có thông báo sẽ bị bỏ qua (phân tách bằng dấu phẩy)"
                },
                exampleButton: {
                    label: "Nút mẫu",
                    description: "Hiển thị một ví dụ về thông báo nâng ly chúc mừng.",
                    show: "Hiển thị thông báo mẫu"
                }
            }
        },
        toggleVideoBind: {
            name: "Chuyển đổiVideoRàng buộc",
            description: "Thêm một phím nóng có thể tùy chỉnh để bật và tắt webcam của bạn.",
            option: {
                keyBind: {
                    label: "Phím nóng",
                    description: "Nút sẽ bật và tắt webcam khi nhấn."
                },
                reqCtrl: {
                    label: "Ctrl Gerekli",
                    description: "Buộc nhấn phím Ctrl."
                },
                reqShift: {
                    label: "Yêu cầu ca",
                    description: "Buộc nhấn phím Shift."
                },
                reqAlt: {
                    label: "Yêu cầu phụ",
                    description: "Buộc nhấn phím Alt."
                }
            }
        },
        translate: {
            name: "Dịch",
            description: "Dịch tin nhắn bằng Google Translate hoặc DeepL",
            tooltip: {
                label: "Chuyển thành"
            },
            context: {
                translate: "Chuyển thành",
                open: "Mở cửa sổ dịch",
                auto: "Đã bật dịch tự động"
            },
            option: {
                receivedInput: {
                    label: "Đầu vào đã nhận",
                    description: "Ngôn ngữ mà tin nhắn nhận được sẽ được dịch"
                },
                receivedOutput: {
                    label: "Đầu ra đã nhận",
                    description: "Tin nhắn nhận được sẽ được dịch sang ngôn ngữ nào?"
                },
                sentInput: {
                    label: "Đầu vào đã gửi",
                    description: "Ngôn ngữ mà tin nhắn của bạn sẽ được dịch sang"
                },
                sentOutput: {
                    label: "Đầu ra đã gửi",
                    description: "Tin nhắn của bạn sẽ được dịch sang ngôn ngữ nào"
                },
                service: {
                    label: "Dịch vụ dịch thuật",
                    description: "DeepL Pro yêu cầu khóa API trả phí",
                    descriptionWeb: "Dịch vụ dịch thuật (Không được hỗ trợ trên web!)",
                    google: "Google Dịch",
                    deepl: "DeepL miễn phí",
                    deeplPro: "DeepL Pro"
                },
                deeplApiKey: {
                    label: "Khóa API DeepL",
                    description: "Khóa API DeepL",
                    placeholder: "Nhận khóa API của bạn tại https://deepl.com/your-account"
                },
                autoTranslate: {
                    label: "Dịch tự động",
                    description: "Nó tự động dịch tin nhắn của bạn trước khi gửi chúng. Bạn cũng có thể dịch chuyển hoặc nhấp chuột phải vào nút dịch để bật hoặc tắt tính năng này."
                },
                showAutoTranslateTooltip: {
                    label: "Hiển thị mô tả dịch tự động",
                    description: "Hiển thị mô tả trong nút thanh trò chuyện khi tin nhắn được dịch tự động"
                }
            },
            modal: {
                title: "Dịch thuật",
                select: "Chọn một ngôn ngữ",
                auto: "Dịch tự động",
                dismiss: "Một phần tư",
                translated: "Đã dịch từ {{from}}",
                failed: {
                    to: "Bản dịch {{văn bản}} không thành công",
                    connect: "Kết nối API DeepL không thành công:"
                },
                wrong: "Đã xảy ra lỗi. Nếu sự cố vẫn tiếp diễn, vui lòng kiểm tra bảng điều khiển hoặc yêu cầu trợ giúp từ máy chủ hỗ trợ.",
                deepl: {
                    api: "Đã vượt quá hạn ngạch API DeepL. Đang chuyển sang Google Dịch.",
                    apiKey: "Khóa API DeepL chưa được đặt. Trở lại Google.",
                    auth: "Phiên bản hoặc khóa API DeepL không hợp lệ"
                },
                autoTranslateEnabled: {
                    title: "Đã bật dịch tự động Plexcord",
                    body: "Bạn vừa kích hoạt Dịch tự động! Tất cả tin nhắn bạn gửi sẽ được dịch tự động trước khi gửi.",
                    confirm: "Tắt dịch tự động",
                    cancel: "Tôi hiểu",
                    secondaryConfirm: "Đừng hiển thị lại"
                }
            }
        },
        typingIndicator: {
            name: "Chỉ báo đánh máy",
            description: "Thêm chỉ báo khi ai đó đang nhập kênh.",
            option: {
                includeCurrentChannel: {
                    label: "Bao gồm kênh hiện tại",
                    description: "Có hiển thị chỉ báo nhập cho kênh hiện được chọn hay không"
                },
                includeMutedChannels: {
                    label: "Bao gồm các kênh bị tắt tiếng",
                    description: "Có hiển thị chỉ báo nhập cho các kênh bị tắt tiếng hay không."
                },
                includeIgnoredUsers: {
                    label: "Bao gồm người dùng bị bỏ qua",
                    description: "Có hiển thị chỉ báo nhập cho người dùng bị bỏ qua hay không."
                },
                includeBlockedUsers: {
                    label: "Bao gồm người dùng bị chặn",
                    description: "Có hiển thị chỉ báo nhập cho người dùng bị chặn hay không."
                },
                indicatorMode: {
                    label: "Chế độ hiển thị",
                    description: "Làm thế nào để hiển thị chỉ báo?",
                    both: "Hình đại diện và dấu chấm hoạt hình",
                    dots: "dấu chấm hoạt hình",
                    avatars: "hình đại diện"
                }
            }
        },
        typingTweaks: {
            name: "TypingTinh chỉnh",
            description: "Hiển thị hình đại diện và màu vai trò trong chỉ báo nhập",
            option: {
                showAvatars: {
                    label: "Hiển thị nhiều người dùng",
                    description: "Hiển thị hình đại diện trong chỉ báo gõ"
                },
                showRoleColors: {
                    label: "Hiển thị màu sắc vai trò",
                    description: "Hiển thị màu vai trò trong chỉ báo gõ"
                },
                alternativeFormatting: {
                    label: "Định dạng thay thế",
                    description: "Hiển thị tin nhắn hữu ích hơn khi có nhiều người cùng gõ"
                },
                amITyping: {
                    label: "Tôi đang viết à?",
                    description: "Cho biết người khác có thấy những gì bạn viết hay không"
                }
            },
            others: {
                areTyping: "và {{count}} người nữa viết..."
            }
        },
        unindent: {
            name: "Bỏ thụt lề",
            description: "Loại bỏ thụt lề ở đầu khối mã"
        },
        unitConverter: {
            name: "Bộ chuyển đổi đơn vị",
            description: "Chuyển đổi đơn vị Metric sang đơn vị Imperial và ngược lại",
            tooltip: "Chuyển đổi đơn vị",
            option: {
                myUnits: {
                    label: "Đơn vị của tôi",
                    description: "Đơn vị bạn sử dụng và muốn chuyển đổi sang. Mặc định: đế quốc",
                    imperial: "Đế chế",
                    metric: "Số liệu"
                }
            },
            button: {
                dismiss: "Một phần tư"
            }
        },
        unlimitedAccounts: {
            name: "Không giới hạnTài khoản",
            description: "Tăng số lượng tài khoản bạn có thể thêm.",
            option: {
                maxAccounts: {
                    label: "Tài khoản tối đa",
                    description: "Số lượng tài khoản có thể thêm vào, nhập 0 là không giới hạn"
                }
            }
        },
        unlockedAvatarZoom: {
            name: "Đã mở khóaAvatarZoom",
            description: "Cho phép bạn phóng to hơn nữa trong công cụ cắt ảnh khi thay đổi hình đại diện",
            option: {
                zoomMultiplier: {
                    label: "Hệ số thu phóng",
                    description: "Hệ số thu phóng"
                }
            }
        },
        unsuppressEmbeds: {
            name: "Hủy bỏ nhúng",
            description: "Cho phép bạn bỏ chặn nội dung được nhúng trong tin nhắn",
            context: {
                unsuppress: "Loại bỏ tính năng ngăn chặn nhúng",
                suppress: "In nhúng"
            }
        },
        uselessInfo: {
            name: "Thông tin vô dụng",
            description: "Hiển thị thông tin vô dụng ngẫu nhiên trong Discord; các phím tắt và cài đặt khoảng thời gian có thể được thực hiện.",
            recording: "Đang ghi...",
            record: "Cứu",
            option: {
                delay: {
                    label: "Khoảng thời gian thông báo",
                    description: "Khoảng thời gian hiển thị thông báo (tính bằng phút)"
                },
                historyHotkey: {
                    label: "Phím tắt bảng lịch sử",
                    description: "Phím nóng để mở lịch sử thông tin được hiển thị trước đó"
                },
                randomFactHotkey: {
                    label: "Phím tắt thông tin ngẫu nhiên",
                    description: "Phím nóng để mở bảng thông tin ngẫu nhiên"
                },
                sameFact: {
                    label: "Tránh lặp lại thông tin giống nhau",
                    description: "Ngăn chặn việc hiển thị cùng một thông tin nhiều lần mà không hiển thị tất cả thông tin"
                },
                lastNFacts: {
                    label: "Thông tin mới nhất không được lặp lại",
                    description: "Số thông tin cuối cùng không được hiển thị lại (0 = tất cả các lần)"
                }
            },
            modal: {
                title: "Thông tin vô dụng",
                history: {
                    none: "Chưa có thông tin. Sử dụng phím tắt hoặc chờ đợi.",
                    source: "Nguồn"
                },
                showRandom: "Hiển thị ngẫu nhiên",
                close: "Một phần tư"
            },
            notification: {
                title: "Bạn có biết không?"
            }
        },
        userMessagesPronouns: {
            name: "Thông điệp của người dùngĐại từ",
            description: "Hiển thị đại từ người dùng trong tiêu đề thư",
            option: {
                pronounsFormat: {
                    label: "Mẫu đại từ",
                    description: "Cách đại từ xuất hiện trong cuộc trò chuyện",
                    lowercase: "Chữ thường",
                    capitalized: "chữ cái viết hoa đầu tiên"
                },
                showSelf: {
                    label: "Thể hiện bản thân",
                    description: "Bật hoặc tắt hiển thị đại từ của riêng bạn"
                }
            }
        },
        userVoiceShow: {
            name: "Người dùngVoiceHiển thị",
            description: "Hiển thị chỉ báo khi người dùng đang sử dụng kênh thoại",
            option: {
                showInUserProfileModal: {
                    label: "Hiển thị trong hồ sơ người dùng",
                    description: "Hiển thị chỉ báo kênh thoại bên cạnh tên trong hồ sơ người dùng"
                },
                showInMemberList: {
                    label: "Hiển thị trong danh sách thành viên",
                    description: "Hiển thị chỉ báo kênh thoại trong danh sách thành viên và DM"
                },
                showInMessages: {
                    label: "Hiển thị trong Tin nhắn",
                    description: "Hiển thị chỉ báo kênh thoại trong tin nhắn"
                }
            },
            modal: {
                inVoiceChat: "Trong trò chuyện thoại"
            },
            notification: {
                cannotJoin: "Bạn không thể tham gia kênh thoại của người dùng."
            }
        },
        uSRBG: {
            name: "USRBG",
            description: "Hiển thị biểu ngữ người dùng từ USRBG để bất kỳ ai cũng có thể sử dụng biểu ngữ mà không cần Nitro",
            option: {
                nitroFirst: {
                    label: "Nitro đầu tiên",
                    description: "Nếu tồn tại cả hai biểu ngữ Nitro và USRBG, hãy xác định nên sử dụng biểu ngữ nào",
                    nitro: "Biểu ngữ Nitro",
                    usrbg: "Biểu ngữ USRBG"
                },
                voiceBackground: {
                    label: "Nền âm thanh",
                    description: "Sử dụng biểu ngữ USRBG làm nền trò chuyện thoại"
                }
            },
            button: "Nhận biểu ngữ USRBG của riêng bạn"
        },
        validReply: {
            name: "Trả lời hợp lệ",
            description: "Sửa lỗi 'Không tải được tin nhắn' khi di chuột qua phần trả lời"
        },
        validUser: {
            name: "Người dùng hợp lệ",
            description: "Sửa các đề cập xuất hiện dưới dạng '@unknown-user' đối với người dùng không xác định (di chuột qua đề cập để sửa)",
            badges: {
                discordBugHunter: "Thợ săn lỗi bất hòa",
                moderatorProgramsAlumni: "Tốt nghiệp chương trình điều hành viên",
                discordStaff: "Nhân viên bất hòa",
                hypeSquadEvents: "Sự kiện HypeSquad",
                bravery: "HypeSquad Cesaret",
                brilliance: "Độ sáng của đội HypeSquad",
                balance: "HypeSquad Denge",
                partneredServerOwner: "Đồng chủ sở hữu máy chủ",
                nitro: "Bất hòa Nitro",
                earlySupporter: "Người ủng hộ sớm",
                earlyVerifiedBotDeveloper: "Nhà phát triển Bot đã được xác minh sớm"
            }
        },
        voiceChatDoubleClick: {
            name: "Trò chuyện bằng giọng nóiNhấp đúp chuột",
            description: "Cho phép bạn tham gia trò chuyện thoại bằng cách nhấp đúp thay vì nhấp một lần"
        },
        vcNarrator: {
            name: "VCnarrator",
            description: "Thông báo qua trình tường thuật khi người dùng tham gia, rời khỏi hoặc di chuyển các kênh thoại",
            option: {
                voice: {
                    label: "Ses"
                },
                volume: {
                    label: "Mức âm thanh",
                    description: "Mức độ giọng nói của người kể chuyện"
                },
                rate: {
                    label: "Tốc độ",
                    description: "Tốc độ nói của người kể chuyện"
                },
                sayOwnName: {
                    label: "Nói tên của bạn",
                    description: "Người kể chuyện có nói tên bạn không"
                },
                latinOnly: {
                    label: "chỉ tiếng Latinh",
                    description: "Xóa các ký tự không phải tiếng Latinh trong tên trước khi đọc"
                },
                joinMessage: {
                    label: "Tham gia tin nhắn",
                    description: "Tham gia tin nhắn"
                },
                leaveMessage: {
                    label: "Tin nhắn chia tay",
                    description: "để lại tin nhắn"
                },
                moveMessage: {
                    label: "Tin nhắn di chuyển",
                    description: "tin nhắn di chuyển"
                },
                muteMessage: {
                    label: "Tắt tin nhắn",
                    description: "Tắt tiếng tin nhắn (bây giờ chỉ có chính bạn)"
                },
                unmuteMessage: {
                    label: "Bật tiếng tin nhắn",
                    description: "Bật tiếng tin nhắn (bây giờ chỉ có chính bạn)"
                },
                deafenMessage: {
                    label: "Tin nhắn chói tai",
                    description: "Tin nhắn chói tai (bây giờ chỉ có chính bạn)"
                },
                undeafenMessage: {
                    label: "Tin nhắn chói tai",
                    description: "Tin nhắn chói tai (bây giờ chỉ có chính bạn)"
                }
            },
            modal: {
                title: "Chơi âm thanh mẫu",
                voiceTitle: "Ses",
                voice: "Chọn một âm thanh",
                languageTitle: "Dil",
                language: "Chọn một ngôn ngữ",
                noVoice: "Không tìm thấy giọng nói của người kể chuyện.",
                linuxNote: "Cài đặt bộ điều phối lời nói hoặc đặc biệt và chạy Discord với tham số --enable-speech-dispatcher",
                someNarrator: "Hãy thử cài đặt một số giọng nói từ cài đặt Trình tường thuật trong hệ điều hành của bạn",
                dontHaveEnglish: "Bạn chưa tải lên bất kỳ âm thanh tiếng Anh nào, vì vậy người kể chuyện có thể nghe kỳ lạ",
                customiseMessages: "Bạn có thể tùy chỉnh các tin nhắn nói bên dưới. Nếu bạn để trống, bạn có thể tắt một số tin nhắn nhất định",
                placeholdersInfo: "Các phần giữ chỗ tùy chỉnh {{USER}}, {{DISPLAY_NAME}}, {{NICKNAME}} và {{CHANNEL}} lần lượt được thay thế bằng tên người dùng (để trống nếu bạn là chính bạn), tên hiển thị, biệt hiệu trên máy chủ và tên kênh"
            }
        },
        viewIcons: {
            name: "XemBiểu tượng",
            description: "Làm cho hình ảnh đại diện và biểu ngữ trong hồ sơ người dùng có thể nhấp vào được; Thêm tùy chọn Hiển thị hình đại diện/Biểu ngữ vào menu ngữ cảnh kênh người dùng, máy chủ và nhóm.",
            context: {
                view: {
                    avatar: "Xem hình đại diện",
                    serverAvatar: "Xem hình đại diện máy chủ",
                    icon: "Xem biểu tượng",
                    banner: "Xem biểu ngữ"
                }
            },
            option: {
                format: {
                    label: "Định dạng",
                    description: "Chọn định dạng hình ảnh để sử dụng cho hình ảnh không chuyển động. Hình ảnh động luôn sử dụng định dạng .gif"
                },
                imgSize: {
                    label: "Kích thước hình ảnh",
                    description: "Kích thước hình ảnh sử dụng"
                }
            }
        },
        viewRaw: {
            name: "Xem bản thô",
            description: "Sao chép và xem nội dung/dữ liệu thô của bất kỳ tin nhắn, kênh hoặc máy chủ nào",
            context: {
                copyLeft: "Sao chép dữ liệu thô (Nhấp chuột trái) / Xem dữ liệu thô (Nhấp chuột phải)",
                copyRight: "Sao chép dữ liệu thô (Nhấp chuột phải) / Xem dữ liệu thô (Nhấp chuột trái)",
                view: "Xem dữ liệu thô"
            },
            option: {
                popoverButton: {
                    label: "Nút menu bật lên",
                    description: "Hiển thị một nút trong cửa sổ bật lên của tin nhắn để xem nội dung/dữ liệu thô của tin nhắn."
                },
                clickMethod: {
                    label: "Bấm vào phương pháp",
                    description: "Thay đổi phương pháp nhấp chuột sẽ sử dụng để xem nội dung/dữ liệu thô của bất kỳ tin nhắn nào.",
                    left: "Nhấp chuột trái để xem nội dung thô.",
                    right: "Nhấp chuột phải để xem nội dung thô."
                }
            },
            modal: {
                title: "Hàm Veri",
                content: "Nội dung",
                data: "{{type}} Xác thực",
                copied: "Đã sao chép dữ liệu {{type}} vào bảng nhớ tạm!",
                copy: "Sao chép {{type}} JSON",
                copiedContent: "Nội dung được sao chép vào clipboard!",
                copyContent: "Sao chép nội dung thô"
            },
            types: {
                message: "Tin nhắn",
                channel: "Kênh",
                guild: "Người trình bày",
                role: "Vai trò",
                user: "người dùng"
            }
        },
        voiceButtons: {
            name: "Nút giọng nói",
            description: "Nhanh chóng DM, tắt tiếng hoặc làm điếc bất kỳ người dùng nào khỏi bảng cuộc gọi thoại.",
            option: {
                showChatButton: {
                    label: "Hiển thị nút trò chuyện",
                    description: "Có hiển thị nút trò chuyện hay không"
                },
                showMuteButton: {
                    label: "Hiển thị nút tắt tiếng",
                    description: "Có hiển thị nút tắt tiếng hay không"
                },
                showDeafenButton: {
                    label: "Hiển thị nút điếc",
                    description: "Có hiển thị nút điếc không"
                },
                muteSoundboard: {
                    label: "Soundboard'u Sessize Al",
                    description: "Khi nhấp vào nút điếc, nó sẽ bật và tắt soundboard của người dùng."
                },
                disableVideo: {
                    label: "Tắt video",
                    description: "Khi nhấp vào nút điếc, nó sẽ bật và tắt video của người dùng."
                },
                useServer: {
                    label: "Sử dụng máy chủ",
                    description: "Sử dụng tính năng tắt tiếng/làm chói máy chủ thay vì cục bộ nếu bạn được phép."
                },
                serverSelf: {
                    label: "Tự tắt tiếng trên máy chủ",
                    description: "Tắt tiếng/tắt tiếng sẽ tắt tiếng hoặc làm điếc chính bạn trên máy chủ khi sử dụng."
                },
                showButtonsSelf: {
                    label: "Hiển thị các nút cho chính bạn",
                    description: "Có hiển thị các nút cho người dùng của riêng bạn hay không. Nó có chức năng tương tự; Bảng điều khiển DM mở ra và tự tắt tiếng/điếc.",
                    display: "Trình diễn",
                    hide: "trốn",
                    disable: "Tàn tật"
                },
                whichNameToShow: {
                    label: "Tên nào nên xuất hiện?",
                    description: "Hiển thị tên người dùng, tên chung hoặc cả hai trong chú giải công cụ?",
                    global: "Tên toàn cầu",
                    username: "Tên người dùng",
                    both: "Cả hai"
                },
                buttonPosition: {
                    label: "Vị trí nút",
                    description: "Chọn nơi hiển thị các nút.",
                    left: "Sol",
                    right: "Phải",
                }
            },
            tooltip: {
                navigate: "Đi tới DM",
                open: "Mở DM bằng {{username}}",
                yourself: "bản thân bạn",
                serverMute: "Tắt tiếng trên máy chủ",
                serverDeafen: "Điếc trên máy chủ",
                mute: "Tắt tiếng",
                deafen: "làm điếc tai",
                unmute: "Bật tiếng",
                undeafen: "Loại bỏ khỏi điếc",
                serverUnmute: "Bật tiếng trên máy chủ",
                serverUndeafen: "Xóa điếc trên máy chủ"
            }
        },
        voiceChannelLog: {
            name: "Giọng nóiKênhNhật ký",
            description: "Ghi lại những người tham gia và rời khỏi kênh âm thanh",
            context: {
                view: "Xem nhật ký kênh"
            },
            modal: {
                joined: "Đã tham gia kênh <#{{channel}}>",
                left: "Kênh trái <#{{channel}}>",
                movedTo: "Đã chuyển sang kênh <#{{channel}}>",
                movedFrom: "Đã chuyển từ <#{{channel}}>",
                noLogs: "Không có nhật ký để hiển thị.",
                logs: "nhật ký {{kênh}}"
            },
            option: {
                mode: {
                    label: "mod",
                    description: "Cách hiển thị nhật ký kênh âm thanh",
                    menu: "Trình đơn nhật ký",
                    associated: "Đăng nhập trực tiếp vào kênh trò chuyện có liên quan",
                    both: "Đăng nhập vào cả kênh trò chuyện và menu nhật ký"
                },
                voiceChannelChatSelf: {
                    label: "Trò chuyện kênh thoại (Chính bạn)",
                    description: "Đăng nhập hoạt động kênh thoại của riêng bạn trong các kênh thoại"
                },
                voiceChannelChatSilent: {
                    label: "Trò chuyện kênh giọng nói im lặng",
                    description: "Tin nhắn tham gia/rời khỏi/di chuyển bị tắt tiếng trong cuộc trò chuyện kênh thoại"
                },
                voiceChannelChatSilentSelf: {
                    label: "Trò chuyện kênh giọng nói im lặng (Chính bạn)",
                    description: "Nếu bạn đang sử dụng kênh thoại, các tin nhắn nối/rời/di chuyển sẽ ở chế độ im lặng"
                },
                ignoreBlockedUsers: {
                    label: "Bỏ qua người dùng bị chặn",
                    description: "Ghi nhật ký người dùng bạn đã chặn"
                }
            }
        },
        voiceChatUtilities: {
            name: "Tiện ích VoiceChat",
            description: "Plugin này cho phép bạn thực hiện nhiều hành động (di chuyển, tắt tiếng, ngắt kết nối, v.v.) trên toàn bộ kênh (ban đầu là dutake)",
            option: {
                waitAfter: {
                    label: "Chờ Sau Khi Hành Động",
                    description: "Số lượng giao dịch API được thực hiện trước khi chờ đợi (để tránh giới hạn tỷ lệ)"
                },
                waitSeconds: {
                    label: "Thời gian chờ đợi",
                    description: "Thời gian chờ giữa mỗi thao tác (tính bằng giây)"
                }
            },
            context: {
                voiceTools: "Công cụ âm thanh",
                mentionAll: "Gắn thẻ tất cả người dùng",
                disconnectAll: "Ngắt kết nối mọi người",
                muteAll: "Tắt tiếng mọi người",
                unmuteAll: "Bật tiếng mọi người",
                deafenAll: "Điếc Mọi người",
                undeafenAll: "Hãy ra ngoài mà không làm điếc tai mọi người",
                moveAll: "Di chuyển mọi người"
            }
        },
        voiceDownload: {
            name: "Giọng nóiTải xuống",
            description: "Thêm tùy chọn tải xuống vào tin nhắn thoại. (Mở tab trình duyệt mới)",
            context: {
                download: "Tải xuống thư thoại"
            }
        },
        voiceMessages: {
            name: "Tin nhắn bằng giọng nói",
            description: "Nó cho phép bạn gửi tin nhắn thoại giống như trên điện thoại di động. Để thực hiện việc này, nhấp chuột phải vào nút tải lên và chọn 'Gửi tin nhắn thoại'.",
            option: {
                noiseSuppression: {
                    label: "Khử tiếng ồn",
                    description: "Khử tiếng ồn"
                },
                echoCancellation: {
                    label: "Hủy bỏ tiếng vang",
                    description: "Hủy bỏ tiếng vang"
                }
            },
            notification: {
                failed: {
                    upload: "Không thể tải thư thoại.",
                    start: "Không thể bắt đầu ghi.",
                    finish: "Việc đăng ký không thể hoàn tất."
                }
            },
            context: {
                sendVoiceMessage: "Gửi tin nhắn thoại",
                missingPermissions: "(Thiếu quyền)"
            },
            modal: {
                record: "Ghi tin nhắn thoại",
                upload: "Tải tệp lên",
                preview: "Xem trước",
                failed: "Không thể phân tích cú pháp tệp âm thanh đã chọn:",
                oggOpus: "Tin nhắn thoại phải ở định dạng OggOpus để phát trên iOS. Không thể phát tệp này trên iOS vì nó ở định dạng {{type}}.",
                fix: "Để khắc phục điều này, trước tiên hãy chuyển đổi tệp sang định dạng OggOpus. Ví dụ: bạn có thể sử dụng {{link}}.",
                sending: "Đang gửi thư thoại... Vui lòng đợi.",
                stop: "dừng ghi âm",
                start: "bắt đầu ghi âm",
                resume: "Tiếp tục đăng ký",
                pause: "Tạm dừng ghi",
                recording: "ĐANG ĐĂNG KÝ",
                send: "Gửi"
            }
        },
        volumeBooster: {
            name: "tăng cường âm lượng",
            description: "Cho phép bạn tăng lượng người dùng và khối lượng phát sóng trên mức tối đa mặc định",
            option: {
                multiplier: {
                    label: "Số nhân",
                    description: "Hệ số âm thanh"
                }
            }
        },
        wallpaperFree: {
            name: "Hình NềnMiễn Phí",
            description: "Phiên bản làm lại của thử nghiệm hình nền DM cũ; Đặt hình nền cho bất kỳ kênh, người dùng hoặc máy chủ nào.",
            option: {
                globalDefault: {
                    label: "Mặc định chung",
                    description: "Đặt hình nền mặc định chung cho tất cả các kênh."
                },
                stylingTips: {
                    label: "Mẹo về phong cách"
                }
            },
            context: {
                setWallpaper: "Đặt hình nền",
                removeWallpaper: "Xóa hình nền"
            },
            modal: {
                set: "đặt hình nền",
                image: "URL hình ảnh",
                cancel: "Hủy bỏ",
                apply: "Áp dụng",
                global: {
                    set: "Đặt hình nền công khai",
                    remove: "Xóa hình nền mặc định toàn cầu",
                    reset: "Đặt lại dữ liệu hình nền"
                },
                web: {
                    info: "Bạn có thể sử dụng các tệp cục bộ bằng cách đặt chúng vào thư mục chủ đề plexcord và sử dụng url plexcord:///themes/filename.ext.",
                    open: "Mở thư mục chủ đề",
                    quickCSS: "Mở QuickCSS"
                }
            }
        },
        webContextMenus: {
            name: "WebContextMenu",
            description: "Thêm lại các menu ngữ cảnh bị thiếu trong phiên bản web của Discord: Liên kết và Hình ảnh (Sao chép hoặc Mở liên kết/Hình ảnh), Vùng văn bản (Sao chép, Cắt, Dán, Kiểm tra chính tả)",
            option: {
                addBack: {
                    label: "Thêm trở lại",
                    description: "Thêm lại menu ngữ cảnh Discord cho hình ảnh, liên kết và thanh mục trò chuyện"
                }
            }
        },
        webKeybinds: {
            name: "WebKeybinds",
            description: "Nó bổ sung lại các phím nóng bị thiếu trong phiên bản web của Discord: ctrl+t, ctrl+shift+t, ctrl+tab, ctrl+shift+tab, ctrl+1-9, ctrl+,. Theo nghĩa đen, nó chỉ hoạt động trên Plextron/Legcord chứ không hoạt động trên trình duyệt."
        },
        webScreenShareFixes: {
            name: "WebScreenShareSửa lỗi",
            description: "Loại bỏ giới hạn tốc độ bit chia sẻ màn hình 2500 kbps trên máy khách Chrome và Plextron.",
            option: {
                experimentalAV1Support: {
                    label: "Hỗ trợ AV1 thử nghiệm",
                    description: "Cho phép hỗ trợ codec AV1. Luồng tải vô hạn có thể gây ra sự cố như"
                }
            }
        },
        whoReacted: {
            name: "Ai đã phản ứng",
            description: "Hiển thị hình đại diện của người dùng phản ứng với tin nhắn",
            option: {
                avatarClick: {
                    label: "Bấm vào hình đại diện",
                    description: "Chuyển đổi khả năng nhấp của hình đại diện trong phản ứng"
                }
            }
        },
        whosWatching: {
            name: "Ai đang xem",
            description: "Xem người dùng đang xem chương trình phát sóng của bạn bằng cách di chuột qua biểu tượng chia sẻ màn hình",
            modal: {
                noSpectator: "không có khán giả"
            },
            option: {
                showPanel: {
                    label: "Hiển thị bảng điều khiển",
                    description: "Hiển thị người xem bên dưới bảng chia sẻ màn hình"
                }
            }
        },
        writeUpperCase: {
            name: "ViếtUpperCase",
            description: "Chuyển đổi chữ cái đầu tiên của mỗi câu thành chữ hoa trong mục nhập tin nhắn.",
            option: {
                blockedWords: {
                    label: "từ bị chặn",
                    description: "Các biểu thức không được viết hoa (phân tách bằng dấu phẩy)"
                }
            }
        },
        xSOverlay: {
            name: "XSOverlay",
            description: "Đẩy thông báo Discord lên XSOverlay để dễ dàng xem trong VR",
            notification: {
                call: {
                    title: "{{user}} đang tìm kiếm bạn.",
                    content: "cuộc gọi đến"
                },
                message: {
                    reply: "(phản ứng)",
                    embed: "[nhúng]",
                    onlyEmbed: "(các) tin nhắn nhúng đã gửi",
                    sticker: "[nhãn dán]",
                    onlySticker: "đã gửi nhãn dán",
                    image: "hình ảnh",
                    attachment: "TÔI"
                },
                test: {
                    title: "Plexcord'và lặn!",
                    content: "Đây là thông báo thử nghiệm! nổ tung",
                    button: "Gửi thông báo kiểm tra"
                }
            },
            option: {
                webSocketPort: {
                    label: "Cổng WebSocket",
                    description: "Cổng WebSocket"
                },
                preferUDP: {
                    label: "UDP Tercih Et",
                    description: "Nếu bạn đang sử dụng các phiên bản XSOverlay cũ hơn và không thể kết nối qua WebSocket, hãy bật nó. Cài đặt này bị bỏ qua trên web."
                },
                botNotifications: {
                    label: "Thông báo của bot",
                    description: "Cho phép thông báo bot"
                },
                serverNotifications: {
                    label: "Thông báo máy chủ",
                    description: "Cho phép thông báo máy chủ"
                },
                dmNotifications: {
                    label: "Thông báo DM",
                    description: "Cho phép thông báo tin nhắn riêng tư"
                },
                groupDmNotifications: {
                    label: "Thông báo DM nhóm",
                    description: "Cho phép thông báo DM nhóm"
                },
                callNotifications: {
                    label: "Thông báo cuộc gọi",
                    description: "Cho phép thông báo cuộc gọi"
                },
                pingColor: {
                    label: "Ping Rengi",
                    description: "Màu gắn thẻ người dùng"
                },
                channelPingColor: {
                    label: "Kênh Ping màu",
                    description: "Màu ghi nhãn kênh"
                },
                soundPath: {
                    label: "Đường dẫn âm thanh",
                    description: "Âm thanh thông báo (mặc định/cảnh báo/lỗi)"
                },
                timeout: {
                    label: "Hết giờ",
                    description: "Thời lượng thông báo (giây)"
                },
                lengthBasedTimeout: {
                    label: "Thời lượng dựa trên độ dài tin nhắn",
                    description: "Kéo dài thời lượng theo độ dài tin nhắn"
                },
                opacity: {
                    label: "Độ mờ",
                    description: "Độ mờ thông báo"
                },
                volume: {
                    label: "Ses",
                    description: "mức âm thanh"
                }
            }
        },
        youtubeAdblock: {
            name: "Khối quảng cáo YouTube",
            description: "Chặn quảng cáo trên các nội dung nhúng trên YouTube và hoạt động WatchTogether bằng AdGuard"
        },
        youtubeDescription: {
            name: "Mô tả YouTube",
            description: "Thêm mô tả vào video nhúng trên YouTube"
        }
    }
} as const;

export default translations;
