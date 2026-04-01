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
        title: "Cài đặt",
        language: {
            selector: {
                label: "Ngôn ngữ",
                description: "Chọn ngôn ngữ ưa thích của bạn cho Plexcord.",
                placeholder: "Chọn ngôn ngữ"
            }
        },
        location: {
            label: "Cài đặt Vị trí",
            description: "Nơi đặt phần cài đặt Plexcord",
            top: "Ở trên cùng",
            nitro: {
                above: "Phía trên phần Nitro",
                below: "Bên dưới phần Nitro"
            },
            activity: {
                above: "Cài đặt hoạt động trên",
                below: "Bên dưới Cài đặt hoạt động"
            },
            bottom: "Ở dưới cùng"
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
                label: "Vô hiệu hóa khung cửa sổ chính",
                description: "Loại bỏ khung cửa sổ gốc để có cái nhìn rõ ràng hơn. Bạn vẫn có thể di chuyển cửa sổ bằng cách kéo vùng thanh tiêu đề."
            },
            frameless: {
                label: "Tắt khung cửa sổ",
                description: "Loại bỏ khung cửa sổ gốc để có cái nhìn rõ ràng hơn. Bạn vẫn có thể di chuyển cửa sổ bằng cách kéo vùng thanh tiêu đề."
            },
            winNativeTitleBar: {
                label: "Sử dụng thanh tiêu đề gốc của Windows thay vì thanh tiêu đề tùy chỉnh của Discord",
                description: "Thay thế thanh tiêu đề tùy chỉnh của Discord bằng thanh tiêu đề tiêu chuẩn của Windows. Điều này có thể cải thiện khả năng tương thích với một số công cụ quản lý cửa sổ."
            },
            transparent: {
                label: "Kích hoạt độ trong suốt của cửa sổ",
                description: "Làm cho cửa sổ Discord trong suốt. Cần phải có một chủ đề hỗ trợ tính minh bạch, nếu không điều này sẽ không có tác dụng gì.",
                isWindows: "Điều này sẽ ngăn không cho cửa sổ có thể thay đổi kích thước và ngăn bạn gắn cửa sổ vào các cạnh màn hình.",
                notWindows: "Điều này sẽ ngăn không cho cửa sổ có thể thay đổi kích thước."
            },
            winCtrlQ: {
                label: "Đăng ký Ctrl+Q làm phím tắt để đóng Discord (Thay thế cho Alt+F4)",
                description: "Thêm Ctrl+Q làm phím tắt để đóng Discord. Điều này cung cấp một giải pháp thay thế cho Alt+F4 để đóng ứng dụng nhanh chóng."
            },
            disableMinSize: {
                label: "Vô hiệu hóa kích thước cửa sổ tối thiểu",
                description: "Cho phép thay đổi kích thước cửa sổ Discord nhỏ hơn kích thước tối thiểu mặc định của nó. Hữu ích cho việc sắp xếp các trình quản lý cửa sổ hoặc màn hình nhỏ."
            }
        },
        quickActions: {
            title: "Thao tác nhanh",
            description: "Những hành động phổ biến mà bạn có thể muốn thực hiện. Những phím tắt này giúp bạn truy cập nhanh vào các tính năng được sử dụng thường xuyên mà không cần điều hướng qua các menu.",
            notificationLog: "Nhật ký thông báo",
            editQuickCSS: "Chỉnh sửa QuickCSS",
            relaunchDiscord: "Khởi chạy lại Discord",
            openSettingsFolder: "Mở thư mục cài đặt",
            viewSourceCode: "Xem mã nguồn"
        },
        specialCards: {
            donations: {
                title: "Đóng góp",
                subtitle: "Cảm ơn bạn đã quyên góp!",
                description: "Bạn có thể quản lý các đặc quyền của mình bất cứ lúc nào bằng cách nhắn tin cho @mutanplex.",
                button: "Quyên tặng",
                invite: "Tham gia Discord của chúng tôi",
                invalid: "Liên kết mời không hợp lệ hoặc đã hết hạn."
            },
            supportProject: {
                title: "Hỗ trợ dự án",
                description: "Hãy cân nhắc hỗ trợ sự phát triển của Plexcord bằng cách quyên góp!"
            },
            contributions: {
                title: "Đóng góp",
                subtitle: "Cảm ơn bạn đã đóng góp!",
                description: "Vì bạn đã đóng góp cho Plexcord nên giờ đây bạn có một huy hiệu mới thú vị!",
                buttonTitle: "Xem những gì bạn đã đóng góp"
            }
        },
        settingsSection: {
            title: "Cài đặt",
            description: "Định cấu hình cách Plexcord hoạt động và tích hợp với Discord. Các cài đặt này ảnh hưởng đến giao diện và hoạt động của ứng dụng khách Discord.",
            hintParts: {
                prefix: "Bạn có thể tùy chỉnh vị trí phần cài đặt này xuất hiện trong menu cài đặt của Discord bằng cách định cấu hình {{pluginLink}}",
                linkText: "Plugin cài đặt"
            }
        },
        notifications: {
            title: "Thông báo",
            description: "Định cấu hình cách Plexcord xử lý thông báo. Bạn có thể tùy chỉnh thời điểm và cách thức nhận thông báo hoặc xem lịch sử các thông báo trước đây.",
            settings: "Cài đặt thông báo",
            viewLog: "Xem nhật ký thông báo",
            permissions: {
                denied: {
                    title: "Quyền thông báo trên màn hình bị từ chối",
                    label: "Bạn đã từ chối quyền thông báo. Thông báo trên màn hình sẽ không hoạt động!"
                }
            },
            style: {
                label: "Kiểu thông báo",
                description: "Một số plugin có thể hiển thị thông báo cho bạn. Chúng có hai phong cách:",
                plexcord: "Thông báo Plexcord",
                plexcordDesc: "Đây là những thông báo trong ứng dụng",
                desktop: "Thông báo trên màn hình",
                desktopDesc: "Thông báo gốc trên màn hình (chẳng hạn như khi bạn nhận được ping)",
                onlyWhenNotFocused: "Chỉ sử dụng thông báo trên Màn hình khi Discord không được tập trung",
                always: {
                    desktop: "Luôn sử dụng thông báo trên màn hình",
                    plexcord: "Luôn sử dụng thông báo Plexcord"
                }
            },
            positions: {
                label: "Vị trí thông báo",
                right: {
                    bottom: "Dưới cùng bên phải",
                    top: "Trên cùng bên phải",
                },
                left: {
                    bottom: "Dưới cùng bên trái",
                    top: "Trên cùng bên trái",
                }
            },
            missed: {
                label: "Số lượng thông báo bị bỏ lỡ",
                description: "Khi tập trung lại Discord, một thông báo sẽ bật lên cho biết bạn đã bỏ lỡ bao nhiêu",
                whileYou: "Trong khi bạn đi vắng",
                count: "{{count}} thông báo{{s}} đã nhận được",
                s: "S"
            },
            timeout: {
                label: "Hết thời gian thông báo",
                description: "Khoảng thời gian (tính bằng giây) mà thông báo sẽ hiển thị trên màn hình trước khi tự động biến mất"
            },
            logLimit: {
                label: "Giới hạn nhật ký thông báo",
                description: "Số lượng thông báo tối đa cần lưu trong nhật ký trước khi xóa những thông báo cũ. Đặt thành {{disable}} để tắt nhật ký thông báo và {{unlimited}} để không bao giờ tự động xóa thông báo cũ"
            },
            opacity: {
                label: "Độ mờ thông báo",
                description: "Độ mờ của thông báo trong ứng dụng"
            },
            maxNotifications: {
                label: "Thông báo tối đa",
                description: "Số lượng thông báo tối đa được hiển thị cùng một lúc"
            },
            behavior: {
                label: "Hành vi thông báo",
            },
            disableInStreamerMode: {
                label: "Tắt ở chế độ Streamer",
                description: "Tắt thông báo khi ở chế độ truyền phát"
            },
            renderImages: {
                label: "Kết xuất hình ảnh",
                description: "Hiển thị hình ảnh trong thông báo"
            },
            streamingTreatment: {
                label: "Điều trị trực tuyến",
                description: "Cách xử lý thông báo khi chia sẻ màn hình của bạn",
                normal: "Bình thường - Hiển thị thông báo như bình thường",
                noContent: "Không có nội dung - Ẩn nội dung thông báo",
                ignore: "Bỏ qua - Hoàn toàn không hiển thị thông báo"
            },
        },
        macVibrancy: {
            title: "Kiểu sống động của cửa sổ (Yêu cầu khởi động lại)",
            description: "Tùy chỉnh hiệu ứng rung của cửa sổ macOS. Điều này kiểm soát kiểu mờ và trong suốt của cửa sổ Discord. Những thay đổi yêu cầu khởi động lại để có hiệu lực.",
            placeholder: "Phong cách sống động của cửa sổ",
            style: {
                no: "Không có sự sống động",
                underPage: "Dưới trang (Tông màu cửa sổ)",
                content: "Nội dung",
                window: "Cửa sổ",
                selection: "Lựa chọn",
                titlebar: "Thanh tiêu đề",
                header: "tiêu đề",
                sidebar: "Thanh bên",
                tooltip: "Chú giải công cụ",
                menu: "Thực đơn",
                popover: "Cửa sổ bật lên",
                fullscreenUI: "Giao diện người dùng toàn màn hình (Trong suốt nhưng hơi mờ)",
                hud: "HUD (Minh bạch nhất)"
            }
        }
    },

    plugins: {
        title: "Plugin",
        new: "MỚI",
        unknown: "Không xác định",
        noDescription: "Không có mô tả có sẵn.",
        restart: {
            apply: "Hãy khởi động lại để áp dụng các thay đổi!",
            required: "Yêu cầu khởi động lại!",
            description: "Khởi động lại ngay bây giờ để áp dụng các plugin mới và cài đặt của chúng",
            following: "Các plugin sau yêu cầu khởi động lại:",
            remainingCount: "và {{count}} hơn thế nữa",
            fully: "Một số plugin yêu cầu khởi động lại để tắt hoàn toàn",
            would: "Bạn có muốn khởi động lại bây giờ không?",
            resetDefault: "Đặt lại về cài đặt mặc định",
            failed: "Không thể bắt đầu phụ thuộc:",
            button: {
                restart: "Khởi động lại",
                later: "Sau đó!",
                now: "Khởi động lại ngay bây giờ",
                cancel: "Hủy bỏ",
                disableWarning: "Tắt cảnh báo vĩnh viễn",
                disableAll: "Vô hiệu hóa tất cả",
                reset: "Cài lại",
                close: "Đóng"
            }
        },
        contributor: {
            contributed: "đóng góp",
            modal: {
                contributionsInfo: "{{userName}} có {{continuedLink}} đến {{contributionCount}} plugin{{s}}.",
                noContributions: "{{userName}} chưa tạo bất kỳ plugin nào. Họ có thể {{contributedLink}} theo những cách khác!"
            }
        },
        infoModal: {
            description: "Nhấn vào biểu tượng bánh răng hoặc thông tin để biết thêm thông tin về plugin",
            settingsInfo: "Các plugin có bánh xe răng cưa có các cài đặt mà bạn có thể sửa đổi!",
            disableAll: "Vô hiệu hóa tất cả các plugin"
        },
        error: {
            invalidInput: "Đã cung cấp thông tin đầu vào không hợp lệ",
            stopping: "Lỗi khi dừng plugin {{plugin}}",
            starting: "Lỗi khi khởi động plugin {{plugin}}",
            startDependency: "Lỗi khi khởi động phần phụ thuộc: {{failures}}",
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
            plextron: "ứng dụng Plextron",
            web: "Ứng dụng Plextron và phiên bản Web của Discord",
            dev: "Phiên bản dành cho nhà phát triển của Plexcord"
        },
        search: {
            looking: "Bạn đang tìm kiếm",
            onlyAvailable: "Chỉ có sẵn trên",
            noCriteria: "Không có plugin nào đáp ứng tiêu chí tìm kiếm."
        },
        required: {
            title: "Plugin bắt buộc",
            this: "Cần có plugin này để Plexcord hoạt động.",
            by: "Plugin này được yêu cầu bởi:"
        },
        dangerModal: {
            title: "HÀNH ĐỘNG NGUY HIỂM",
            disablePlugins: "Tắt plugin",
            disableText: "Vô hiệu hóa tất cả",
            irreversible: "HÀNH ĐỘNG NÀY LÀ KHÔNG THỂ ĐẢO NGƯỢC!",
            enableBack: "Bạn có chắc chắn muốn tiếp tục không? Bạn luôn có thể kích hoạt lại chúng sau.",
            undone: "Không thể hoàn tác hành động này. Bạn có chắc không?",
            resetDescription: "Bạn sắp đặt lại tất cả cài đặt cho {{pluginName}} về giá trị mặc định.",
            disable: "Bạn sắp tắt plugin {{enabledPlugins}}!",
            confirmReset: "Xác nhận đặt lại",
            cancel: "Hủy bỏ",
            resetSettings: "Đặt lại cài đặt",
            resetText: "Cài lại"
        },
        filters: {
            label: "Bộ lọc",
            placeholder: "Tìm kiếm plugin...",
            option: {
                all: "Hiển thị tất cả",
                enabled: "Hiển thị đã bật",
                disabled: "Hiển thị bị vô hiệu hóa",
                new: "Hiển thị mới",
                userplugins: "Hiển thị plugin của người dùng",
                api: "Hiển thị plugin API"
            }
        },
        pluginModal: {
            noSettings: "Không có cài đặt cho plugin này.",
            authors: "tác giả",
            settings: "Cài đặt",
            successfulReset: "Cài đặt cho {{plugin}} đã được đặt lại.",
            enabledStock: "Đã bật plugin chứng khoán",
            totalStock: "Tổng số plugin có sẵn",
            enabledUser: "Plugin người dùng đã bật",
            totalUser: "Tổng số plugin người dùng",
            info: "Xem thêm thông tin",
            source: "Xem mã nguồn"
        },
        metadata: {
            api: {
                description: {
                    memberListDecorators: "API để thêm trang trí vào danh sách thành viên (cả trong máy chủ và DM)",
                    messageAccessories: "API để thêm phụ kiện vào tin nhắn",
                    messageDecorations: "API để thêm trang trí vào tin nhắn",
                    chatInputButtons: "API để thêm nút vào đầu vào trò chuyện",
                    commands: "API được yêu cầu bởi mọi thứ sử dụng lệnh",
                    contextMenu: "API để thêm/xóa các mục vào/khỏi menu ngữ cảnh.",
                    dynamicImageModal: "Cho phép bạn bỏ qua chiều rộng hoặc chiều cao khi mở chế độ hình ảnh",
                    menuItemDemangler: "Mô-đun Mục menu của Demanles Discord",
                    messageEvents: "API được yêu cầu bởi bất kỳ thứ gì sử dụng sự kiện tin nhắn",
                    messagePopover: "API để thêm nút vào cửa sổ bật lên tin nhắn",
                    messageUpdater: "API để cập nhật và hiển thị lại tin nhắn",
                    nicknameIcons: "API để thêm biểu tượng vào biệt hiệu, trong hồ sơ",
                    notices: "Sửa lỗi thông báo tự động bị loại bỏ",
                    serverList: "Cần có API cho các plugin sửa đổi danh sách máy chủ",
                    userSettings: "Vá cài đặt người dùng của Discord để hiển thị nhóm và tên của họ.",
                    audioPlayer: "API để phát các tệp âm thanh Discord nội bộ hoặc liên kết âm thanh bên ngoài.",
                    userArea: "API để thêm các nút vào bảng khu vực người dùng.",
                    profileCollections: "API để thêm các bộ sưu tập vào bảng hồ sơ người dùng, như bộ sưu tập trò chơi của Discord."
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
                    plexcord: "Cộng tác viên Plexcord",
                    vencord: "Cộng tác viên Vencord",
                    userPlugin: "Người đóng góp plugin người dùng"
                },
                context: {
                    title: "Tùy chọn huy hiệu",
                    copy: {
                        name: "Copy Badge Name",
                        link: "Sao chép liên kết hình ảnh huy hiệu"
                    },
                    refetch: {
                        button: "Tải lại huy hiệu",
                        success: "Huy hiệu đã được tải lại thành công!"
                    }
                },
                modal: {
                    title: "Nhà tài trợ Plexcord",
                    special: "Huy hiệu này là một lợi ích đặc biệt dành cho Nhà tài trợ Plexcord",
                    description: "Vui lòng cân nhắc hỗ trợ sự phát triển của Plexcord bằng cách trở thành nhà tài trợ. Nó sẽ có ý nghĩa rất nhiều!"
                }
            },
        },
        uiElements: {
            manage: "Quản lý các thành phần giao diện người dùng",
            allows: "Cho phép bạn ẩn các nút bạn không thích",
            section: {
                chatbar: {
                    title: "Nút thanh trò chuyện",
                    description: "Đây là các nút ở bên phải thanh nhập liệu trò chuyện"
                },
                messagePopover: {
                    title: "Nút bật lên tin nhắn",
                    description: "Đây là các nút nổi ở bên phải khi bạn di chuột qua tin nhắn"
                }
            },
            button: "Các nút của plugin đã bật sẽ xuất hiện ở đây."
        }
    },

    patchHelper: {
        title: "Người trợ giúp bản vá",
        description: "Một công cụ dành cho nhà phát triển giúp bạn tạo các bản vá cho plugin Plexcord.",
        fullPatch: {
            label: "Bản vá đầy đủ",
            description: "Dán bản vá JSON đầy đủ của bạn vào đây để điền vào các trường"
        },
        find: "Tìm thấy",
        match: "Cuộc thi đấu",
        replacement: "thay thế",
        preview: "Xem trước",
        generatedCode: "Mã được tạo",
        group: "Nhóm",
        diff: "Khác biệt",
        module: "mô-đun",
        compile: "Biên dịch",
        compiled: "Biên dịch thành công",
        copy: {
            clipboard: "Sao chép vào Clipboard",
            codeblock: "Sao chép dưới dạng khối mã"
        },
        error: {
            noMatch: "Không tìm thấy kết quả phù hợp. Mô-đun này có thể được tải lười biếng?",
            multipleMatch: "Đã tìm thấy nhiều kết quả phù hợp. Vui lòng sử dụng mẫu tìm kiếm cụ thể hơn.",
            noFind: "Trường 'Tìm' bị thiếu.",
            noReplacement: "Trường 'Thay thế' bị thiếu.",
            invalidReplacement: "Trường 'Thay thế' không hợp lệ",
            replacementMatch: "Trường 'replacement.match' bị thiếu",
            replacementReplace: "Trường 'replacement.replace' bị thiếu",
            replacementMustFunction: "'Thay thế' phải là một chức năng"
        },
        cheatSheet: {
            title: "Bảng gian lận",
            identifiers: "Chuỗi thoát biểu thức chính quy đặc biệt khớp với các mã định danh (tên biến thể, tên lớp, v.v.)",
            dollar: "Chèn $",
            entireMatch: "Chèn toàn bộ trận đấu",
            beforeMatch: "Chèn chuỗi con trước trận đấu",
            afterMatch: "Chèn chuỗi con sau trận đấu",
            nthGroup: "Chèn nhóm chụp thứ n ($1, $2...)",
            pluginInstance: "Chèn phiên bản plugin"
        },
        replacementEval: {
            label: "Coi thay thế là chức năng",
            description: "'Thay thế' sẽ được đánh giá là một chức năng nếu tính năng này được bật"
        }
    },

    sync: {
        title: "Sao lưu & Khôi phục",
        warning: "Cảnh báo",
        warningText: "Nhập tệp cài đặt sẽ ghi đè cài đặt hiện tại của bạn. Đảm bảo xuất bản sao lưu trước nếu bạn muốn giữ cấu hình hiện tại của mình.",
        description: "Bạn có thể nhập và xuất cài đặt Plexcord của mình dưới dạng tệp JSON. Điều này cho phép bạn dễ dàng chuyển cài đặt của mình sang thiết bị khác hoặc khôi phục cài đặt sau khi cài đặt lại Plexcord hoặc Discord.",
        successful: "Cài đặt đã được nhập thành công. Hãy khởi động lại để áp dụng các thay đổi!",
        error: {
            failure: "Không nhập được cài đặt: {{error}}",
            failedExport: "Không xuất được cài đặt, hãy kiểm tra bảng điều khiển",
            invalid: "Cài đặt không hợp lệ. Đây có phải là tệp Cài đặt Plexcord không?",
            tooLarge: "DataStore quá lớn - bị loại khỏi bản sao lưu. Sử dụng 'Xuất DataStores' nếu cần.",
            clearSomeDate: "DataStore quá lớn. Vui lòng xóa một số dữ liệu plugin và thử lại."
        },
        settings: {
            text: "Những gì được bao gồm trong một bản sao lưu?",
            quickcss: "CSS nhanh tùy chỉnh",
            theme: "Liên kết chủ đề",
            plugins: "Cài đặt plugin",
            datastores: "Kho dữ liệu plugin (ví dụ: Múi giờ hoặc IRememberYou)"
        },
        import: {
            title: "Cài đặt nhập",
            description: "Chọn tệp cài đặt đã xuất trước đó để khôi phục cấu hình của bạn. Thao tác này sẽ thay thế tất cả cài đặt hiện tại của bạn bằng cài đặt từ bản sao lưu.",
            all: "Nhập tất cả cài đặt",
            plugins: "Nhập plugin",
            css: "Nhập QuickCSS",
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
        description: "Đồng bộ hóa cài đặt Plexcord của bạn với đám mây. Điều này giúp bạn dễ dàng duy trì cấu hình nhất quán trên nhiều thiết bị mà không cần nhập/xuất thủ công.",
        switchDescription: "Khi được bật, cài đặt của bạn có thể được đồng bộ hóa với và từ đám mây. Hãy thực hiện các thao tác bên dưới để đồng bộ hóa theo cách thủ công.",
        settings: "Cài đặt đám mây",
        successful: "Cài đặt được đồng bộ hóa lên đám mây!",
        updated: "Cài đặt của bạn đã được cập nhật! Bấm vào đây để khởi động lại để áp dụng đầy đủ các thay đổi!",
        deleted: "Cài đặt đã bị xóa khỏi đám mây!",
        integration: {
            title: "Tích hợp đám mây",
            description: "Tích hợp đám mây của Plexcord cho phép bạn đồng bộ hóa cài đặt của mình trên nhiều thiết bị và cài đặt Discord. Dữ liệu của bạn được lưu trữ an toàn và có thể dễ dàng khôi phục bất cứ lúc nào.",
        },
        reauth: "Chúng tôi nhận thấy bạn đã bật tích hợp đám mây trong một ứng dụng khách khác! Do những hạn chế, bạn sẽ cần phải ủy quyền lại để tiếp tục sử dụng chúng. Bấm vào đây để đến trang cài đặt để thực hiện việc này!",
        error: {
            setup: "Thiết lập không thành công (không thể truy xuất cấu hình OAuth).",
            secret: "Thiết lập không thành công (không trả lại bí mật nào).",
            string: "Thiết lập không thành công ({{error}}).",
            connect: "Đồng bộ hóa đám mây đã bị tắt vì tài khoản này không được kết nối với Ứng dụng đám mây Plexcord. Bạn có thể kích hoạt lại nó bằng cách kết nối tài khoản này trong Cài đặt đám mây. (lưu ý: nó sẽ lưu trữ riêng các tùy chọn của bạn)",
            noSettings: "Không có cài đặt nào trên đám mây.",
            uptodate: "Cài đặt của bạn đã được cập nhật.",
            localNewer: "Cài đặt cục bộ của bạn mới hơn cài đặt đám mây.",
            delete: "Không thể xóa cài đặt ({{error}}).",
            api: {
                returned: {
                    delete: "Không thể xóa cài đặt (API trả về {{status}}).",
                    to: "Không thể đồng bộ hóa cài đặt với đám mây (API trả về {{status}}).",
                    from: "Không thể đồng bộ hóa cài đặt từ đám mây (API trả về {{status}}).",
                    manifest: "Không thể lấy bản kê để xóa (API trả về {{status}})."
                }
            },
            synchronize: {
                to: "Không thể đồng bộ hóa cài đặt với đám mây ({{error}}).",
                from: "Không thể đồng bộ hóa cài đặt từ đám mây ({{error}})."
            }
        },
        warning: {
            enableCloudIntegration: "Kích hoạt tích hợp đám mây ở trên để sử dụng các tính năng đồng bộ hóa cài đặt."
        },
        danger: {
            title: "Vùng nguy hiểm",
            description: "Xóa vĩnh viễn tất cả dữ liệu của bạn khỏi đám mây. Không thể hoàn tác hành động này và sẽ xóa tất cả cài đặt đã đồng bộ hóa cũng như mọi dữ liệu khác được lưu trữ trên phần phụ trợ đám mây.",
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
            host: "{{host}} đã được thêm vào danh sách trắng. Vui lòng khởi động lại ứng dụng để những thay đổi có hiệu lực.",
            erase: {
                successful: "Dữ liệu đám mây đã được xóa thành công",
                failed: "Không thể xóa tất cả dữ liệu (API {{status}} được trả về), vui lòng liên hệ với bộ phận hỗ trợ."
            }
        },
        button: {
            to: "Đồng bộ hóa với đám mây",
            from: "Đồng bộ hóa từ đám mây",
            fromDescription: "Thao tác này sẽ ghi đè cài đặt cục bộ của bạn bằng cài đặt trên đám mây. Hãy sử dụng một cách khôn ngoan!",
            delete: "Xóa dữ liệu đám mây",
            enable: "Kích hoạt tích hợp đám mây",
            reauthorize: "Ủy quyền lại",
            confirm: "Khởi động lại ngay bây giờ",
            later: "Sau đó!"
        },
        privacy: "tôn trọng quyền riêng tư của bạn",
        source: "mã nguồn",
        overview: "Plexcord đi kèm với tích hợp đám mây để bổ sung các tính năng bổ sung như đồng bộ hóa cài đặt trên các thiết bị. Nó {{privacy}} và {{source}} được cấp phép AGPL 3.0 nên bạn có thể tự lưu trữ nó.",
        authorization: "Kết nối với phần phụ trợ đám mây để đồng bộ hóa cài đặt. Điều này sẽ yêu cầu ủy quyền nếu bạn chưa thiết lập tích hợp đám mây.",
        backend: {
            title: "Phần cuối đám mây",
            description: "Chọn cách lưu trữ cài đặt của bạn trên đám mây. Theo mặc định, Plexcord Cloud được sử dụng nhưng bạn cũng có thể kết nối dịch vụ đám mây tự lưu trữ của riêng mình.",
            invalid: "URL không hợp lệ"
        },
        sync: {
            title: "Quy tắc đồng bộ hóa cho thiết bị này",
            description: "Cài đặt này kiểm soát cách di chuyển cài đặt giữa thiết bị này và đám mây. Bạn có thể để những thay đổi diễn ra theo cả hai hướng hoặc chọn một nơi làm nguồn thông tin chính xác.",
            direction: {
                both: "Đồng bộ hai chiều (các thay đổi diễn ra theo cả hai hướng)",
                push: "Thiết bị này là nguồn (chỉ tải lên)",
                pull: "Đám mây là nguồn (chỉ tải xuống)",
                manual: "Không đồng bộ tự động (chỉ đồng bộ thủ công qua các nút bên dưới)"
            }
        }
    },

    changelog: {
        text: "Nhật ký thay đổi",
        title: "Nhật ký thay đổi",
        description: "Bạn có thể tìm thấy những thay đổi và cập nhật mới nhất cho Plexcord tại đây.",
        by: "qua",
        check: "Kiểm tra kho lưu trữ",
        uptodate: "cập nhật",
        update: "Cập nhật",
        noMessage: "Không có tin nhắn",
        unknown: "Không xác định",
        updatedPlugins: "Plugin được cập nhật",
        newSettings: "Cài đặt mới",
        newSettingTooltip: "Cài đặt mới trong {{plugin}}",
        loading: "Đang tải...",
        repoUptodate: "Kho lưu trữ được cập nhật",
        fetch: "Tìm nạp từ kho lưu trữ",
        clear: "Xóa tất cả nhật ký",
        internet: "Hãy đảm bảo bạn có kết nối Internet và thử lại.",
        recent: "Những thay đổi gần đây",
        codeChanges: "Thay đổi mã {{count}} cam kết mới{{s}}",
        updateLogs: "Nhật ký cập nhật ({{count}})",
        noCommit: "Không có cam kết nào trước phiên bản hiện tại của bạn. Nhấp vào 'Tìm nạp từ Kho lưu trữ' để kiểm tra các thay đổi mới.",
        previous: "Các phiên cập nhật trước đó với lịch sử cam kết và các thay đổi về plugin.",
        modal: {
            description: "Xem những thay đổi gần đây nhất đối với Plexcord. Việc tìm nạp này sẽ trực tiếp từ kho lưu trữ để hiển thị cho bạn những gì mới.",
            repository: "Kho lưu trữ",
            failed: "Không truy xuất được - hãy kiểm tra bảng điều khiển",
            current: "Hiện hành:",
            hide: "Ẩn nhật ký",
            show: "Hiển thị nhật ký",
            fetch: {
                title: "Tìm nạp các thay đổi",
                description: "Kiểm tra kho lưu trữ để biết các cam kết mới, cập nhật plugin và thay đổi mã. Điều này sẽ so sánh phiên bản hiện tại của bạn với phiên bản mới nhất hiện có và hiển thị cho bạn những tính năng mới.",
                newCommit: "Đây là các cam kết và cập nhật plugin mới kể từ phiên bản trước của bạn. Bạn có thể xem những tính năng nào đã được thêm vào, các lỗi đã được sửa và plugin nào đã nhận được bản cập nhật.",
                confirm: "Tìm về",
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
            already: "Đã cập nhật với kho lưu trữ",
            found: "Đã tìm thấy {{count}} cam kết mới{{s}} từ kho lưu trữ",
            local: "Kho lưu trữ được cập nhật với bản sao cục bộ của bạn",
            failed: "Không thể tìm nạp từ kho lưu trữ :(",
            cleared: "Tất cả nhật ký đã bị xóa",
            logCleared: "Nhật ký đã bị xóa",
            yourLatest: "Cam kết đã ghi từ bản cập nhật mới nhất của bạn"
        },
        alert: {
            clear: {
                title: "Xóa tất cả nhật ký",
                body: "Bạn có chắc chắn muốn xóa tất cả nhật ký không? Điều này không thể hoàn tác được.",
                confirm: "Xóa tất cả",
                confirmColor: "sự nguy hiểm",
                cancel: "Hủy bỏ"
            },
            log: {
                title: "Xóa nhật ký",
                body: "Bạn có chắc chắn muốn xóa nhật ký này không? Điều này không thể hoàn tác được.",
                confirm: "Xóa nhật ký",
                confirmColor: "sự nguy hiểm",
                cancel: "Hủy bỏ"
            }
        },
        newPlugins: "{{count}} Plugin mới{{s}}",
        following: "Các plugin sau đã được thêm vào trong các bản cập nhật gần đây:",
        more: "+{{count}} plugin khác"
    },

    csp: {
        restart: "Cần phải khởi động lại để áp dụng thay đổi này",
        blocked: {
            resources: "Tài nguyên bị chặn",
            disallowed: "Một số hình ảnh, kiểu hoặc phông chữ đã bị chặn vì chúng đến từ các miền không được phép.",
            recommended: "Chúng tôi khuyên bạn nên chuyển chúng sang GitHub hoặc Imgur. Nhưng bạn cũng có thể cho phép các miền nếu bạn hoàn toàn tin tưởng chúng.",
            afterAllow: "Sau khi cho phép miền, bạn phải đóng hoàn toàn (từ khay / trình quản lý tác vụ) và khởi động lại {{platform}} để áp dụng thay đổi.",
            allow: "Cho phép",
            url: "URL bị chặn"
        },
        imgur: {
            direct: "Liên kết Imgur phải là liên kết trực tiếp ở dạng {{etc}}",
            copy: "Để lấy liên kết trực tiếp, nhấp chuột phải vào hình ảnh và chọn 'Sao chép địa chỉ hình ảnh'."
        },
        wants: {
            caller: "{{callerName}} muốn cho phép kết nối với {{domain}}",
            detail: "Trừ khi bạn nhận ra và hoàn toàn tin tưởng {{domain}}, bạn nên hủy yêu cầu này!",
            restart: "Bạn sẽ phải đóng hoàn toàn và khởi động lại {{appName}} để các thay đổi có hiệu lực.",
            type: {
                images: "Hình ảnh",
                styles: "CSS & Chủ đề",
                fonts: "Phông chữ"
            },
            content: "Các loại nội dung sau sẽ được phép tải từ {{domain}}:",
            understand: "Tôi hoàn toàn tin tưởng {{domain}} và hiểu những rủi ro khi cho phép kết nối với nó.",
            button: {
                cancel: "Hủy bỏ",
                allow: "Cho phép"
            },
            title: "Quyền của máy chủ"
        }
    },

    themes: {
        title: "Chủ đề",
        management: "Quản lý chủ đề",
        description: "Tùy chỉnh giao diện của Discord bằng các chủ đề. Thêm tệp .css cục bộ hoặc tải chủ đề trực tiếp từ URL. Các chủ đề có biểu tượng bánh răng cưa có các cài đặt tùy chỉnh mà bạn có thể sửa đổi.",
        local: "Chủ đề địa phương",
        new: "MỚI",
        pinned: "Đã ghim",
        stylus: "Phần mở rộng bút cảm ứng",
        bd: "Chủ đề BetterDiscord",
        github: "GitHub",
        download: "Bạn đang tìm kiếm chủ đề? Hãy xem {{bd}} hoặc tìm kiếm trên {{github}}. Khi tải xuống từ BetterDiscord, hãy nhấp vào 'Tải xuống' và đặt tệp .theme.css vào thư mục chủ đề của bạn.",
        add: "Thêm vào",
        reset: "Đặt lại cài đặt về mặc định",
        notCSS: "Không phải là tệp CSS. Hãy nhớ sử dụng liên kết thô!",
        okay: "Được rồi!",
        checking: "Đang kiểm tra...",
        valid: "Có hiệu lực!",
        upload: "Tải chủ đề lên",
        openFolder: "Mở thư mục chủ đề",
        loadMissing: "Tải chủ đề bị thiếu",
        editQuickCSS: "Chỉnh sửa QuickCSS",
        editClient: "Chỉnh sửa chủ đề khách hàng",
        website: "Mở trang web",
        discord: "Máy chủ bất hòa",
        downloadTheme: "Tải xuống",
        refresh: "Làm cho khỏe lại",
        delete: "Xóa bỏ",
        unknown: {
            title: "Không xác định",
            author: "Tác giả không xác định",
            theme: "Một chủ đề bất hòa"
        },
        required: "Các plugin sau là bắt buộc nhưng chưa được bật:",
        homepage: "Trang chủ",
        support: "Ủng hộ",
        online: {
            title: "Chủ đề trực tuyến",
            description: "Tải chủ đề trực tiếp từ URL thay vì tệp cục bộ. Các chủ đề trực tuyến tự động cập nhật khi nguồn thay đổi, do đó bạn luôn có phiên bản mới nhất mà không cần tải xuống thủ công.",
            enable: "Kích hoạt chủ đề trực tuyến",
            enableDescription: "Chuyển đổi tải chủ đề trực tuyến. Khi bị tắt, tất cả chủ đề trực tuyến sẽ bị tắt và bạn sẽ không thể thêm chủ đề mới."
        },
        quickActions: {
            title: "Thao tác nhanh",
            description: "Các phím tắt để quản lý chủ đề của bạn. Mở thư mục chủ đề của bạn để thêm chủ đề mới, sử dụng QuickCSS để chỉnh sửa nhanh kiểu hoặc tải lại chủ đề sau khi thực hiện thay đổi."
        },
        error: {
            userscript: "Chủ đề không được hỗ trợ trên Userscript!",
            stylus: "Thay vào đó, bạn có thể cài đặt các chủ đề bằng {{stylus}}!",
            expired: "Liên kết không hợp lệ hoặc đã hết hạn",
            text: "Lỗi:"
        },
        copy: {
            url: "Sao chép URL",
            copied: "Đã sao chép URL chủ đề!",
            settings: "Sao chép cài đặt chủ đề",
            copiedSettings: "Đã sao chép cài đặt chủ đề vào bảng nhớ tạm."
        },
        paste: {
            settings: "Dán cài đặt chủ đề",
            empty: "Clipboard của bạn trống.",
            invalid: "Clipboard của bạn không có dữ liệu cài đặt hợp lệ.",
            pasted: "Đã dán cài đặt chủ đề từ bảng nhớ tạm."
        },
        settings: {
            for: "Cài đặt cho {{themeName}}",
        },
        installed: {
            title: "Chủ đề đã cài đặt",
            description: "Quản lý chủ đề của bạn ở đây. Chủ đề cục bộ tải từ thư mục chủ đề của bạn, chủ đề trực tuyến từ URL. Các chủ đề có biểu tượng bánh răng cưa có các cài đặt có thể tùy chỉnh.",
            count: "{{count}} chủ đề{{s}} đã cài đặt ({{localCount}} cục bộ, {{onlineCount}} trực tuyến) · Đã bật {{enabledCount}}",
            search: "Tìm kiếm chủ đề...",
            loading: "Đang tải chủ đề...",
            none: "Chưa có chủ đề nào được cài đặt. Thêm tệp chủ đề vào thư mục chủ đề của bạn hoặc thêm chủ đề trực tuyến ở trên để bắt đầu.",
            noCriteria: "Không có chủ đề nào phù hợp với tiêu chí tìm kiếm hoặc bộ lọc của bạn."
        },
        filter: {
            all: "Hiển thị tất cả",
            online: "Chủ đề trực tuyến",
            local: "Chủ đề địa phương",
            enabled: "Đã bật",
            disabled: "Tàn tật"
        },
        notification: {
            refresh: {
                title: "Đã làm mới chủ đề",
                error: "Không làm mới được chủ đề"
            },
            failed: {
                download: "Không tải được chủ đề xuống"
            }
        }
    },

    updater: {
        title: "Trình cập nhật",
        settings: "Cài đặt trình cập nhật",
        updates: "Cập nhật",
        updated: "đã được cập nhật!",
        restart: "Bấm vào đây để khởi động lại",
        repaired: "Plexcord đã được sửa chữa!",
        ok: "ĐƯỢC RỒI",
        preferences: {
            title: "Cập nhật tùy chọn",
            description: "Kiểm soát cách Plexcord luôn cập nhật. Bạn có thể chọn cập nhật tự động trong nền hoặc được thông báo khi có bản cập nhật mới.",
        },
        github: {
            local: "Bản sao cục bộ của bạn có nhiều cam kết gần đây hơn kho lưu trữ từ xa. Điều này thường xảy ra khi bạn thực hiện các thay đổi cục bộ. Vui lòng cất giữ hoặc đặt lại chúng trước khi cập nhật."
        },
        error: {
            check: "Không thể kiểm tra cập nhật. Kiểm tra bảng điều khiển để biết thêm thông tin",
            occurred: "Đã xảy ra lỗi không xác định",
            retrieve: "Không truy xuất được - hãy kiểm tra bảng điều khiển",
            title: "Ối!",
            tryAgain: "Đã xảy ra lỗi không xác định. Vui lòng thử lại hoặc xem bảng điều khiển để biết thêm thông tin.",
            command: "Lệnh {{path}} không tìm thấy. Vui lòng cài đặt nó và thử lại.",
            code: "Mã {{code}}. Xem bảng điều khiển để biết thêm thông tin.",
            running: "Đã xảy ra lỗi khi chạy {{cmd}}: {{error}}",
            failed: "Điều đó cũng không thành công :( Hãy thử cập nhật hoặc cài đặt lại bằng trình cài đặt!"
        },
        available: "Có 1 bản cập nhật",
        updateAvailable: "Đã có bản cập nhật Plexcord!",
        click: "Bấm vào đây để xem bản cập nhật",
        available_plural: "Có {{count}} cập nhật",
        current: "Cập nhật!",
        successful: {
            title: "Cập nhật thành công!",
            body: "Đã cập nhật thành công. Khởi động lại ngay bây giờ để áp dụng các thay đổi?",
            button: {
                confirm: "Khởi động lại",
                cancel: "Không phải bây giờ!",
                update: "Cập nhật ngay",
                check: "Kiểm tra cập nhật"
            },
            noFound: "Không tìm thấy bản cập nhật nào"
        },
        automatically: {
            label: "Tự động cập nhật",
            description: "Tự động cập nhật Plexcord mà không cần lời nhắc xác nhận"
        },
        notify: {
            label: "Nhận thông báo khi quá trình cập nhật tự động hoàn tất",
            description: "Hiển thị thông báo khi Plexcord tự động cập nhật"
        },
        repo: "Repo",
        repoDescription: "Đây là kho lưu trữ GitHub nơi Plexcord tìm nạp các bản cập nhật từ đó.",
        loading: "Đang tải...",
    },

    components: {
        error: {
            title: "Ồ không!",
            render: "Đã xảy ra lỗi khi hiển thị Thành phần này. Thông tin thêm có thể được tìm thấy bên dưới và trong bảng điều khiển của bạn."
        },
        componentFailed: {
            message: "Ờ ồ! Không thể hiển thị Trang này. Tuy nhiên, có một bản cập nhật có thể khắc phục được sự cố đó. Bạn có muốn cập nhật và khởi động lại ngay bây giờ không?"
        },
        quickCSS: {
            title: "Trình soạn thảo QuickCSS mở",
            message: "Trình soạn thảo QuickCSS vẫn đang mở ở chế độ nền.",
            detail: "Bạn có muốn đóng Discord không? Thao tác này cũng sẽ đóng trình soạn thảo QuickCSS.",
            cancel: "Hủy bỏ",
            close: "Vẫn đóng"
        }
    },

    commands: {
        error: {
            execute: "Đã xảy ra lỗi khi thực hiện lệnh '{{command}}'"
        }
    },

    notifications: {
        dismiss: "Loại bỏ thông báo",
        noYet: "Chưa có thông báo nào",
        settings: "Cài đặt thông báo",
        log: {
            title: "Nhật ký thông báo",
            clear: "Xóa nhật ký thông báo",
            sure: "Bạn có chắc không?",
            permamently: "Thao tác này sẽ xóa vĩnh viễn {{count}} thông báo{{s}}. Không thể hoàn tác hành động này.",
            button: {
                confirm: "Làm đi!",
                cancel: "Đừng bận tâm"
            }
        }
    },

    memberlist: {
        error: {
            render: "Không thể hiển thị {{key}} Trang trí danh sách thành viên"
        }
    },

    message: {
        accessory: {
            error: {
                render: "Không thể hiển thị {{key}} Phụ kiện tin nhắn"
            }
        },
        decoration: {
            error: {
                render: "Không thể hiển thị {{key}} Trang trí tin nhắn"
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
            month: "tháng",
            months: "tháng",
            week: "tuần",
            weeks: "tuần",
            day: "ngày",
            days: "ngày",
            hour: "giờ",
            hours: "giờ",
            minute: "phút",
            minutes: "phút",
            second: "thứ hai",
            seconds: "giây",
            ago: "trước kia",
            s: "S"
        }
    },

    plugin: {
        noTrack: {
            name: "NoTrack",
            description: "Tắt tính năng theo dõi của Discord (phân tích/'khoa học'), số liệu và báo cáo sự cố Sentry",
            option: {
                disableAnalytics: {
                    label: "Vô hiệu hóa phân tích",
                    description: "Tắt tính năng theo dõi của Discord (phân tích/'khoa học'), số liệu và báo cáo sự cố Sentry"
                }
            }
        },
        settings: {
            name: "Settings",
            description: "Thêm giao diện người dùng cài đặt và thông tin gỡ lỗi",
            option: {
                language: {
                    label: "Ngôn ngữ",
                    description: "Chọn ngôn ngữ ưa thích của bạn cho Plexcord."
                },
                settingsLocation: {
                    label: "Cài đặt Vị trí",
                    description: "Xác định vị trí của phần cài đặt Plexcord."
                }
            }
        },
        supportHelper: {
            name: "Support Helper",
            description: "Giúp chúng tôi cung cấp hỗ trợ cho bạn",
            commands: {
                description: {
                    debug: "Gửi thông tin gỡ lỗi Plexcord",
                    plugins: "Gửi danh sách plugin Plexcord"
                }
            },
            modals: {
                outdated: {
                    title: "Giữ lấy!",
                    body: "Bạn đang sử dụng phiên bản Plexcord đã lỗi thời! Rất có thể sự cố của bạn đã được khắc phục.",
                    footer: "Vui lòng cập nhật trước khi yêu cầu hỗ trợ!",
                    button: {
                        cancel: "Xem cập nhật",
                        confirm: "Cập nhật và khởi động lại ngay",
                        secondaryConfirm: "Tôi biết mình đang làm gì hoặc tôi không thể cập nhật"
                    }
                },
                updater: {
                    title: "Giữ lấy!",
                    body: "Bạn đang sử dụng phiên bản Plexcord được cập nhật bên ngoài mà chúng tôi không hỗ trợ!",
                    footer: "Vui lòng chuyển sang {{officially}} hoặc liên hệ với nhà bảo trì gói của bạn để được hỗ trợ.",
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
                    title: "Giữ lấy!",
                    header: "Bạn đang sử dụng bản dựng Plexcord tùy chỉnh mà chúng tôi không cung cấp hỗ trợ!",
                    body: "Chúng tôi chỉ cung cấp hỗ trợ cho {{officialBuild}}. {{switch}} hoặc tự mình tìm ra vấn đề.",
                    footer: "Bạn sẽ bị cấm nhận hỗ trợ nếu bỏ qua quy định này.",
                    official: "bản dựng chính thức",
                    switch: "chuyển sang bản dựng chính thức",
                    button: {
                        confirm: "đã hiểu",
                        secondaryConfirm: "Không hiển thị lại"
                    }
                }
            },
            button: {
                debug: "Chạy/gỡ lỗi plexcord",
                plugins: "Chạy /plexcord-plugin",
                snippet: "Chạy đoạn mã"
            },
            toast: {
                success: "Thành công!",
                failed: "Không chạy được đoạn mã :(",
                failedOpenInvite: "Không mở được lời mời, vui lòng kiểm tra bảng điều khiển :(",
                upload: "Danh sách plugin được tải lên thành công!",
                failedUpload: "Không thể tải lên tệp danh sách plugin. Vui lòng thử lại.",
                unableGenerate: "Không tạo được danh sách plugin."
            },
            dm: {
                warning: "Vui lòng không nhắn tin riêng cho nhà phát triển plugin Plexcord để được hỗ trợ!{{br}}Thay vào đó, bạn có thể tham gia máy chủ {{support}} và sử dụng kênh hỗ trợ Plexcord: {{channel}}"
            },
            alert: {
                title: "Cảnh báo: Số lượng plugin cao",
                paragraph1: "Bạn đã kích hoạt hơn 100 plugin.",
                paragraph2: "Do số lượng plugin quá lớn nên bạn có thể không nhận được hỗ trợ.",
                paragraph3: "Vấn đề của bạn có thể là do xung đột plugin.",
                paragraph4: "Vui lòng xem xét việc vô hiệu hóa một số plugin để khắc phục sự cố.",
                paragraph5: "Danh sách plugin của bạn sẽ được gửi dưới dạng tệp văn bản.",
            }
        },
        accountPanelServerProfile: {
            name: "AccountPanelServerProfile",
            description: "Nhấp chuột phải vào bảng tài khoản của bạn ở phía dưới bên trái để xem hồ sơ của bạn trong máy chủ hiện tại",
            option: {
                prioritizeServerProfile: {
                    label: "Ưu tiên hồ sơ máy chủ",
                    description: "Ưu tiên Hồ sơ Máy chủ khi nhấp chuột trái vào bảng tài khoản của bạn"
                }
            },
            context: {
                account: "Xem hồ sơ tài khoản",
                server: "Xem hồ sơ máy chủ",
                prioritize: "Ưu tiên hồ sơ máy chủ"
            }
        },
        altKrispSwitch: {
            name: "AltKrispSwitch",
            description: "Làm cho Cửa sổ bật lên loại bỏ tiếng ồn chuyển đổi giữa Không có và Krisp thay vì Krisp và Tiêu chuẩn"
        },
        alwaysAnimate: {
            name: "AlwaysAnimate",
            description: "Hoạt hình bất cứ thứ gì có thể hoạt hình",
            option: {
                icons: {
                    label: "Biểu tượng",
                    description: "Luôn tạo hiệu ứng động cho các biểu tượng máy chủ, hình đại diện, trang trí và hơn thế nữa"
                },
                statusEmojis: {
                    label: "Biểu tượng cảm xúc trạng thái",
                    description: "Luôn tạo hiệu ứng cho biểu tượng cảm xúc trạng thái"
                },
                serverBanners: {
                    label: "Biểu ngữ máy chủ",
                    description: "Luôn làm động các biểu ngữ máy chủ"
                },
                nameplates: {
                    label: "Bảng tên",
                    description: "Luôn tạo ảnh động cho bảng tên"
                },
                roleGradients: {
                    label: "Chuyển màu vai trò",
                    description: "Luôn tạo hiệu ứng chuyển màu vai trò"
                }
            }
        },
        alwaysExpandProfiles: {
            name: "AlwaysExpandProfiles",
            description: "Luôn mở rộng cửa sổ bật lên của hồ sơ sang chế độ đầy đủ"
        },
        alwaysExpandRoles: {
            name: "AlwaysExpandRoles",
            description: "Luôn mở rộng danh sách vai trò trong cửa sổ bật lên hồ sơ",
            option: {
                hideArrow: {
                    label: "Ẩn mũi tên",
                    description: "Ẩn mũi tên"
                }
            }
        },
        animalese: {
            name: "Animalese",
            description: "Chơi trò động vật vượt qua động vật đối với mỗi tin nhắn được gửi (chúng ngáp rất nhiều)",
            option: {
                volume: {
                    label: "Âm lượng",
                    description: "Âm lượng của âm thanh động vật"
                },
                speed: {
                    label: "Tốc độ",
                    description: "Tốc độ của âm thanh động vật"
                },
                pitch: {
                    label: "Sân bóng đá",
                    description: "Hệ số sân"
                },
                messageLengthLimit: {
                    label: "Giới hạn độ dài tin nhắn",
                    description: "Độ dài tối đa của tin nhắn cần xử lý"
                },
                processOwnMessages: {
                    label: "Xử lý tin nhắn riêng",
                    description: "Cho phép gửi tin nhắn của riêng bạn"
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
            name: "AlwaysTrust",
            description: "Loại bỏ tên miền không đáng tin cậy gây phiền nhiễu và cửa sổ bật lên tệp đáng ngờ",
            option: {
                domain: {
                    label: "Lãnh địa",
                    description: "Loại bỏ cửa sổ bật lên tên miền không đáng tin cậy khi mở liên kết"
                },
                file: {
                    label: "Tài liệu",
                    description: "Xóa cửa sổ bật lên 'Tải xuống có thể nguy hiểm' khi mở liên kết"
                },
                noDeleteSafety: {
                    label: "Không Xóa An Toàn",
                    description: "Loại bỏ yêu cầu nhập tên máy chủ khi xóa máy chủ"
                },
                confirmModal: {
                    label: "Xác nhận phương thức",
                    description: "Chế độ 'bạn có chắc chắn muốn xóa' có nên được hiển thị không?"
                }
            },
            alert: {
                title: "Xóa máy chủ?",
                body: "Nó là vĩnh viễn, nếu điều đó không rõ ràng.",
                confirm: "Xóa bỏ",
                cancel: "Hủy bỏ"
            }
        },
        anonymiseFileNames: {
            name: "AnonymiseFileNames",
            description: "Ẩn danh tên tập tin đã tải lên",
            option: {
                anonymiseByDefault: {
                    label: "Ẩn danh theo mặc định",
                    description: "Ẩn danh tên tập tin theo mặc định. Bạn có thể tắt tính năng này trong cửa sổ bật lên tải lên nếu cần."
                },
                spoilerMessages: {
                    label: "Tin nhắn tiết lộ",
                    description: "Ẩn danh tên tập tin được đánh dấu là tiết lộ nội dung."
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
                    label: "Nhất quán",
                    description: "Bí mật ẩn danh nhất quán"
                }
            },
            using: {
                anonymous: "Sử dụng tên tệp ẩn danh",
                spoiler: "Sử dụng tên tập tin bình thường"
            },
            spoiler: {
                description: "Chuyển đổi spoiler cho các tập tin của bạn",
                toggle: "Chuyển đổi spoiler cho các tập tin của bạn (bật mặc định)",
                enabled: "Đã bật spoiler!",
                disabled: "Đã vô hiệu hóa spoiler!"
            }
        },
        appleMusic: {
            name: "AppleMusicRichPresence",
            description: "Sự hiện diện phong phú của Discord cho Apple Music của bạn!",
            about: "Đối với các chuỗi định dạng hoạt động có thể tùy chỉnh, bạn có thể sử dụng một số chuỗi đặc biệt để đưa dữ liệu theo dõi vào hoạt động! {{name}} được thay thế bằng tên bản nhạc; {{artist}} được thay thế bằng tên của (các) nghệ sĩ; và {{album}} được thay thế bằng tên album.",
            button: {
                listen: "Nghe trên Apple Music",
                songLink: "Xem trên SongLink"
            },
            option: {
                activityType: {
                    label: "Loại hoạt động",
                    description: "Loại hoạt động nào",
                    listening: "Nghe",
                    playing: "Đang chơi"
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
                    description: "Khoảng thời gian giữa các lần làm mới hoạt động (giây)"
                },
                enableTimestamps: {
                    label: "Bật dấu thời gian",
                    description: "Có hay không bật dấu thời gian"
                },
                enableButtons: {
                    label: "Bật nút",
                    description: "Có bật nút hay không"
                },
                nameString: {
                    label: "Chuỗi tên",
                    description: "Chuỗi định dạng tên hoạt động"
                },
                detailsString: {
                    label: "Chuỗi chi tiết",
                    description: "Chuỗi định dạng chi tiết hoạt động"
                },
                stateString: {
                    label: "Chuỗi trạng thái",
                    description: "Chuỗi định dạng trạng thái hoạt động"
                },
                largeImageType: {
                    label: "Loại hình ảnh lớn",
                    description: "Nội dung hoạt động loại hình ảnh lớn",
                    album: "Album ảnh nghệ thuật",
                    artist: "Tác phẩm nghệ thuật của nghệ sĩ",
                    disabled: "Tàn tật"
                },
                largeTextString: {
                    label: "Chuỗi văn bản lớn",
                    description: "Nội dung hoạt động chuỗi định dạng văn bản lớn"
                },
                smallImageType: {
                    label: "Loại hình ảnh nhỏ",
                    description: "Nội dung hoạt động loại hình ảnh nhỏ",
                    album: "Biểu tượng Apple Music",
                    artist: "Tác phẩm nghệ thuật của nghệ sĩ",
                    disabled: "Tàn tật"
                },
                smallTextString: {
                    label: "Chuỗi văn bản nhỏ",
                    description: "Nội dung hoạt động chuỗi định dạng văn bản nhỏ"
                }
            }
        },
        arRpc: {
            name: "WebRichPresence(arRPC)",
            description: "Plugin máy khách cho arRPC để kích hoạt RPC trên Discord Web (thử nghiệm)",
            use: {
                title: "Cách sử dụng arRPC",
                enable: "{{link}} để máy chủ chạy, sau đó kích hoạt plugin.",
                link: "Làm theo hướng dẫn trong kho GitHub"
            },
            toast: {
                connected: "Đã kết nối với arRPC",
                failed: "Không kết nối được với arRPC, nó có đang chạy không?",
                retry: "Thử lại"
            }
        },
        atSomeone: {
            name: "AtSomeone",
            description: "Với @someone bạn có thể đề cập đến ai đó một cách ngẫu nhiên"
        },
        autoDNDWhilePlaying: {
            name: "AutoDndWhilePlaying",
            description: "Tự động cập nhật trạng thái trực tuyến của bạn (trực tuyến, nhàn rỗi, dnd) khi khởi chạy trò chơi",
            option: {
                statusToSet: {
                    label: "Trạng thái cần đặt",
                    description: "Trạng thái cần đặt khi khởi chạy trò chơi",
                    online: "Trực tuyến",
                    dnd: "Đừng làm phiền",
                    idle: "Nhàn rỗi",
                    invisible: "Vô hình"
                },
                excludeInvisible: {
                    label: "Loại trừ ẩn",
                    description: "Ngăn chặn thay đổi trạng thái tự động trong khi trạng thái của bạn được đặt ở chế độ ẩn"
                }
            }
        },
        autoZipper: {
            name: "AutoZipper",
            description: "Tự động nén các loại tệp và thư mục được chỉ định trước khi tải lên Discord",
            option: {
                extensions: {
                    label: "Tiện ích mở rộng",
                    description: "Danh sách các phần mở rộng tệp được phân tách bằng dấu phẩy để tự động nén (ví dụ: .psd,.blend,.exe,.dmg)"
                }
            }
        },
        bannersEverywhere: {
            name: "BannersEverywhere",
            description: "Hiển thị banner trong danh sách thành viên",
            option: {
                animate: {
                    label: "hoạt hình",
                    description: "Biểu ngữ động"
                },
                preferNameplate: {
                    label: "Ưu tiên bảng tên",
                    description: "Thích bảng tên hơn banner"
                }
            }
        },
        betterActivities: {
            name: "BetterActivities",
            description: "Hiển thị biểu tượng hoạt động trong danh sách thành viên và cho phép hiển thị tất cả các hoạt động",
            option: {
                memberList: {
                    label: "Danh sách thành viên",
                    description: "Hiển thị biểu tượng hoạt động trong danh sách thành viên"
                },
                iconSize: {
                    label: "Kích thước biểu tượng",
                    description: "Kích thước của các biểu tượng hoạt động"
                },
                specialFirst: {
                    label: "Đặc biệt đầu tiên",
                    description: "Hiển thị các hoạt động đặc biệt trước tiên (Hiện tại là Spotify và Twitch)"
                },
                renderGifs: {
                    label: "Kết xuất ảnh GIF",
                    description: "Cho phép hiển thị ảnh GIF"
                },
                removeGameActivityStatus: {
                    label: "Xóa trạng thái 'Hoạt động trò chơi'",
                    description: "Xóa biểu tượng và trạng thái hoạt động trò chơi"
                },
                userPopout: {
                    label: "Cửa sổ bật lên của người dùng",
                    description: "Hiển thị tất cả các hoạt động trong cửa sổ bật lên/thanh bên của hồ sơ"
                },
                hideTooltip: {
                    label: "Ẩn chú giải công cụ",
                    description: "Ẩn các hoạt động ở nhiều nơi khác nhau"
                },
                allActivitiesStyle: {
                    label: "Tất cả hoạt động",
                    description: "Phong cách để hiển thị tất cả các hoạt động",
                    list: "Danh sách",
                    carousel: "băng chuyền",
                    left: "Bên trái",
                    right: "Phải"
                }
            }
        },
        betterAudioPlayer: {
            name: "BetterAudioPlayer",
            description: "Thêm trình hiển thị quang phổ và dao động ký vào trình phát tệp đính kèm âm thanh",
            option: {
                oscilloscope: {
                    label: "Máy hiện sóng",
                    description: "Bật trình hiển thị dao động"
                },
                spectrograph: {
                    label: "máy quang phổ",
                    description: "Bật trình hiển thị quang phổ"
                },
                oscilloscopeSolidColor: {
                    label: "Máy hiện sóng màu đồng nhất",
                    description: "Sử dụng màu đồng nhất cho máy hiện sóng thay vì chuyển màu"
                },
                oscilloscopeColor: {
                    label: "Màu dao động",
                    description: "Màu của máy hiện sóng khi bật màu đồng nhất"
                },
                spectrographSolidColor: {
                    label: "Máy quang phổ màu rắn",
                    description: "Sử dụng màu đồng nhất cho máy quang phổ thay vì chuyển màu"
                },
                spectrographColor: {
                    label: "Màu quang phổ",
                    description: "Màu của máy quang phổ khi bật màu đồng nhất"
                }
            },
            toast: {
                invalidColorFormat: "Định dạng màu không hợp lệ cho {{settingKey}}, hãy đảm bảo nó ở định dạng 'R, G, B' hoặc '#RRGGBB'"
            }
        },
        betterBanReasons: {
            name: "BetterBanReasons",
            description: "Tạo lý do tùy chỉnh để sử dụng trong chế độ cấm Discord và/hoặc hiển thị kiểu nhập văn bản theo mặc định thay vì các tùy chọn.",
            option: {
                reasons: {
                    label: "Lý do",
                    description: "Lý do tùy chỉnh của bạn"
                },
                isTextInputDefault: {
                    label: "Nhập văn bản là mặc định",
                    description: "Hiển thị kiểu nhập văn bản thay vì menu chọn theo mặc định. (Tương đương với việc nhấp vào tùy chọn 'Khác')"
                }
            },
            title: "Lý do",
            placeholder: "Lý do",
            add: "Thêm một lý do khác"
        },
        betterBlockedUsers: {
            name: "BetterBlockedUsers",
            description: "Cho phép bạn tìm kiếm trong danh sách người dùng bị chặn và có thể chọn tên trong cài đặt.",
            placeholder: "Tìm kiếm người dùng..."
        },
        betterCommands: {
            name: "BetterCommands",
            description: "Tăng cường hệ thống chỉ huy với những cải tiến linh tinh.",
            option: {
                autoFillArguments: {
                    label: "Tự động điền đối số",
                    description: "Tự động điền lệnh với tất cả các đối số thay vì chỉ những đối số bắt buộc"
                },
                allowNewlinesInCommands: {
                    label: "Cho phép dòng mới trong lệnh",
                    description: "Cho phép dòng mới trong đầu vào lệnh (CTRL + Shift + Enter)"
                }
            },
            command: {
                refresh: {
                    description: "Làm mới cục bộ các lệnh ứng dụng Discord",
                    user: "người dùng cụ thể để thử và làm mới",
                    refreshing: "Đang làm mới các lệnh ứng dụng...",
                    refreshed: "Lệnh được làm mới thành công!",
                    failed: "Không thể làm mới lệnh. Kiểm tra bảng điều khiển để biết chi tiết."
                }
            }
        },
        betterFolders: {
            name: "BetterFolders",
            description: "Hiển thị các thư mục máy chủ trên thanh bên chuyên dụng và thêm các cải tiến liên quan đến thư mục",
            option: {
                sidebar: {
                    label: "Thanh bên",
                    description: "Hiển thị máy chủ từ thư mục trên thanh bên chuyên dụng"
                },
                sidebarAnim: {
                    label: "Hoạt ảnh thanh bên",
                    description: "Hoạt hình mở thanh bên thư mục"
                },
                closeAllFolders: {
                    label: "Đóng tất cả thư mục",
                    description: "Đóng tất cả các thư mục khi chọn máy chủ không có trong thư mục"
                },
                closeAllHomeButton: {
                    label: "Đóng tất cả nút Home",
                    description: "Đóng tất cả các thư mục khi nhấp vào nút home"
                },
                closeOthers: {
                    label: "Đóng những thứ khác",
                    description: "Đóng các thư mục khác khi mở một thư mục"
                },
                closeServerFolder: {
                    label: "Đóng thư mục máy chủ",
                    description: "Đóng thư mục khi chọn máy chủ trong thư mục đó"
                },
                forceOpen: {
                    label: "Buộc mở",
                    description: "Buộc mở một thư mục khi chuyển sang máy chủ của thư mục đó"
                },
                keepIcons: {
                    label: "Giữ biểu tượng",
                    description: "Tiếp tục hiển thị các biểu tượng bang hội trong thư mục thanh bang hội chính khi nó được mở trong thanh bên BetterFolders"
                },
                showFolderIcon: {
                    label: "Hiển thị biểu tượng thư mục",
                    description: "Hiển thị biểu tượng thư mục phía trên các bang hội thư mục trong thanh bên BetterFolders",
                    never: "Không bao giờ",
                    always: "Luôn luôn",
                    moreThanOne: "Khi có nhiều thư mục được mở rộng"
                }
            }
        },
        betterGifAltText: {
            name: "BetterGifAltText",
            description: "Thay đổi văn bản thay thế GIF từ chỉ đơn giản là 'GIF' sang chứa thẻ gif/tên tệp"
        },
        betterGifPicker: {
            name: "BetterGifPicker",
            description: "Làm cho bộ chọn gif mở danh mục yêu thích theo mặc định",
            option: {
                keepOpen: {
                    label: "Giữ mở",
                    description: "Giữ bộ chọn gif mở sau khi chọn gif"
                }
            }
        },
        betterInvites: {
            name: "BetterInvites",
            description: "Xem ngày hết hạn của lời mời, xem hồ sơ người mời và xem trước máy chủ trước khi tham gia bằng cách nhấp vào tên",
            render: {
                tip: "Lời mời này sẽ hết hạn {{time}}",
                header: "{{name}} đã mời bạn tham gia {{server}}",
                never: "không hết hạn"
            }
        },
        betterNotesBox: {
            name: "BetterNotesBox",
            description: "Ẩn ghi chú hoặc tắt tính năng kiểm tra chính tả (Định cấu hình trong cài đặt!!)",
            option: {
                hide: {
                    label: "Ẩn ghi chú",
                    description: "Ẩn hộp ghi chú trong cửa sổ bật lên của người dùng"
                },
                noSpellCheck: {
                    label: "Không kiểm tra chính tả",
                    description: "Vô hiệu hóa kiểm tra chính tả trong ghi chú"
                }
            }
        },
        betterPlusReacts: {
            name: "BetterPlusReacts",
            description: "Số dấu cộng trước :emoji: là thông báo để thêm vào"
        },
        betterRoleContext: {
            name: "BetterRoleContext",
            description: "Thêm tùy chọn sao chép màu vai trò/chỉnh sửa vai trò/xem biểu tượng vai trò khi nhấp chuột phải vào vai trò trong hồ sơ người dùng",
            option: {
                roleIconFileFormat: {
                    label: "Định dạng tệp biểu tượng vai trò",
                    description: "Định dạng tệp để sử dụng khi xem biểu tượng vai trò"
                }
            },
            context: {
                copyColor: "Sao chép màu vai trò",
                editRole: "Chỉnh sửa vai trò",
                viewIcon: "Xem biểu tượng vai trò"
            }
        },
        betterRoleDot: {
            name: "BetterRoleDot",
            description: "Sao chép màu vai trò trên RoleDot (cài đặt khả năng truy cập) nhấp chuột. Cũng cho phép sử dụng đồng thời cả tên RoleDot và tên màu.",
            option: {
                bothStyles: {
                    label: "Cả hai phong cách",
                    description: "Hiển thị cả vai trò dấu chấm và tên màu"
                },
                copyRoleColorInProfilePopout: {
                    label: "Sao chép màu vai trò trong cửa sổ bật lên hồ sơ",
                    description: "Cho phép nhấp vào dấu chấm vai trò trong cửa sổ bật lên của hồ sơ để sao chép màu vai trò"
                }
            }
        },
        betterSessions: {
            name: "BetterSessions",
            description: "Tăng cường menu phiên (thiết bị). Cho phép bạn xem dấu thời gian chính xác, đặt tên tùy chỉnh cho mỗi phiên và nhận thông báo về các phiên mới.",
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
                    description: "Kiểm tra các phiên mới ở chế độ nền và hiển thị thông báo khi chúng được phát hiện"
                },
                checkInterval: {
                    label: "Khoảng thời gian kiểm tra",
                    description: "Tần suất kiểm tra các phiên mới ở chế độ nền (nếu được bật), tính bằng phút"
                }
            }
        },
        betterSettings: {
            name: "BetterSettings",
            description: "Nâng cao trải nghiệm mở menu cài đặt của bạn",
            option: {
                disableFade: {
                    label: "Vô hiệu hóa mờ dần",
                    description: "Tắt hoạt ảnh xen kẽ"
                },
                organizeMenu: {
                    label: "Sắp xếp thực đơn",
                    description: "Sắp xếp menu ngữ cảnh bánh răng cài đặt thành các danh mục"
                },
                eagerLoad: {
                    label: "Háo hức tải",
                    description: "Loại bỏ độ trễ tải khi mở menu lần đầu tiên"
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
            name: "BetterUploadButton",
            description: "Tải lên chỉ bằng một cú nhấp chuột, mở menu bằng nhấp chuột phải"
        },
        biggerStreamPreview: {
            name: "BiggerStreamPreview",
            description: "Plugin này cho phép bạn phóng to bản xem trước luồng",
            context: {
                viewPreview: "Xem bản xem trước luồng"
            }
        },
        blockKeywords: {
            name: "BlockKeywords",
            description: "Chặn các tin nhắn chứa các từ khóa cụ thể do người dùng xác định, như thể người dùng gửi chúng đã bị chặn.",
            option: {
                blockedWords: {
                    label: "từ bị chặn",
                    description: "Danh sách các từ cần chặn được phân tách bằng dấu phẩy"
                },
                useRegex: {
                    label: "Sử dụng Regex",
                    description: "Sử dụng từng giá trị làm biểu thức chính quy khi kiểm tra nội dung thư (nâng cao)"
                },
                caseSensitive: {
                    label: "Phân biệt chữ hoa chữ thường",
                    description: "Có nên sử dụng tìm kiếm phân biệt chữ hoa chữ thường hay không"
                },
                ignoreBlockedMessages: {
                    label: "Bỏ qua tin nhắn bị chặn",
                    description: "Hoàn toàn bỏ qua thanh tin nhắn mới (gần đây)"
                }
            }
        },
        blockKrisp: {
            name: "BlockKrisp",
            description: "Ngăn chặn tải Krisp"
        },
        blurNSFW: {
            name: "BlurNSFW",
            description: "Làm mờ tệp đính kèm trong các kênh NSFW cho đến khi được di chuột",
            option: {
                blurAmount: {
                    label: "Số lượng mờ",
                    description: "Số lượng mờ (tính bằng pixel)"
                },
                blurAllChannels: {
                    label: "Làm mờ tất cả các kênh",
                    description: "Làm mờ tệp đính kèm ở tất cả các kênh (không chỉ NSFW)"
                }
            }
        },
        bypassPinPrompt: {
            name: "BypassPinPrompt",
            description: "Bỏ qua lời nhắc ghim khi sử dụng chức năng ghim"
        },
        bypassStatus: {
            name: "BypassStatus",
            description: "Vẫn nhận được thông báo từ các nguồn cụ thể khi ở chế độ không làm phiền. Nhấp chuột phải vào người dùng/kênh/bang hội để đặt họ bỏ qua chế độ không làm phiền.",
            context: {
                remove: "Xóa bỏ qua trạng thái",
                add: "Thêm bỏ qua trạng thái"
            },
            option: {
                guilds: {
                    label: "Bang hội",
                    description: "Bang hội được phép bỏ qua (được thông báo khi được ping ở bất kỳ đâu trong bang hội)",
                    placeholder: "Phân cách bằng dấu phẩy"
                },
                channels: {
                    label: "Kênh",
                    description: "Các kênh được phép bỏ qua (được thông báo khi được ping trong kênh đó)",
                    placeholder: "Phân cách bằng dấu phẩy"
                },
                users: {
                    label: "Người dùng",
                    description: "Người dùng cho phép bỏ qua (được thông báo cho tất cả tin nhắn được gửi trong DM)",
                    placeholder: "Phân cách bằng dấu phẩy"
                },
                allowOutsideOfDms: {
                    label: "Cho phép bên ngoài DM",
                    description: "Cho phép người dùng được chọn bỏ qua trạng thái bên ngoài DM (hoạt động giống như bỏ qua kênh/bang hội, nhưng dành cho tất cả tin nhắn được gửi bởi người dùng đã chọn)"
                },
                notificationSound: {
                    label: "Âm thanh thông báo",
                    description: "Có nên phát âm thanh thông báo hay không"
                },
                respectSilentPings: {
                    label: "Tôn trọng Ping im lặng",
                    description: "Tôn trọng ping im lặng (@silent / ngăn chặn thông báo)"
                },
                statusToUse: {
                    label: "Tình trạng sử dụng",
                    description: "Trạng thái sử dụng cho danh sách trắng",
                    online: "Trực tuyến",
                    idle: "Nhàn rỗi",
                    dnd: "Đừng làm phiền",
                    invisible: "Vô hình"
                }
            }
        },
        cakeDay: {
            name: "CakeDay",
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
                    description: "Hiển thị biểu tượng chiếc bánh bên cạnh tên người dùng trong cuộc trò chuyện"
                },
                memberList: {
                    label: "Danh sách thành viên",
                    description: "Hiển thị biểu tượng bánh trong danh sách thành viên"
                },
                profileBadge: {
                    label: "Huy hiệu hồ sơ",
                    description: "Hiển thị huy hiệu bánh trong hồ sơ người dùng"
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
                    description: "bên cạnh tên người dùng trong cuộc trò chuyện"
                },
                memberList: {
                    label: "Danh sách thành viên",
                    description: "trong danh sách thành viên"
                }
            },
            toast: {
                success: "Đặt sinh nhật thành công!",
                invalid: "Định dạng sinh nhật không hợp lệ! Chỉ DD/MM được chấp nhận.",
                cleared: "Xóa sinh nhật thành công!"
            },
            notification: {
                title: "🎂 Sinh nhật hôm nay!",
                body: "Hôm nay là sinh nhật của {{username}}!"
            },
            modal: {
                title: "Đặt ngày sinh cho {{username}}",
                description: "Nhập ngày sinh ở định dạng DD/MM (ví dụ: 25/12)",
                placeholder: "ví dụ. 25/12",
                current: "Ngày sinh hiện tại:",
                set: "Đặt ngày sinh nhật",
                cancel: "Hủy bỏ",
                birthday: "Hôm nay là sinh nhật của tôi! 🎂",
                saved: "Sinh nhật đã lưu",
                savedDesc: "Chưa lưu ngày sinh nhật nào. Nhấp chuột phải vào người dùng để thêm ngày sinh nhật của họ!",
                today: "Hôm nay",
                remove: "Di dời",
                loading: "Đang tải...",
                save: "Cứu",
                edit: "Biên tập"
            }
        },
        callTimer: {
            name: "CallTimer",
            description: "Hiển thị bộ hẹn giờ cuộc gọi trong tất cả các cuộc gọi thoại",
            option: {
                format: {
                    label: "Định dạng",
                    description: "Định dạng nhỏ gọn hoặc có thể đọc được",
                    human: "30d 23h 00m 42s"
                },
                allCallTimers: {
                    label: "Tất cả bộ hẹn giờ cuộc gọi",
                    description: "Hiển thị bộ hẹn giờ cuộc gọi cho tất cả người dùng trong máy chủ"
                },
                showWithoutHover: {
                    label: "Hiển thị không di chuột",
                    description: "Luôn hiển thị đồng hồ mà không cần di chuột"
                },
                showRoleColor: {
                    label: "Hiển thị màu vai trò",
                    description: "Hiển thị màu vai trò của người dùng (nếu plugin ShowRoleColor được bật)"
                },
                trackSelf: {
                    label: "Theo dõi chính mình",
                    description: "Đồng thời hiển thị bộ đếm thời gian của riêng bạn"
                },
                showSeconds: {
                    label: "Hiển thị giây",
                    description: "Hiển thị giây trong bộ đếm thời gian"
                },
                watchLargeGuilds: {
                    label: "Xem các bang hội lớn",
                    description: "Theo dõi người dùng trong các bang hội lớn. Điều này có thể gây ra hiện tượng lag nếu bạn tham gia nhiều bang hội lớn có người dùng giọng nói tích cực. Đã thử nghiệm với tối đa 2000 người dùng giọng nói đang hoạt động mà không gặp vấn đề gì."
                },
                fixUI: {
                    label: "Sửa giao diện người dùng",
                    description: "Trong một số trường hợp, bộ hẹn giờ có thể làm hỏng giao diện người dùng. Kích hoạt tùy chọn này để sửa nó."
                }
            }
        },
        channelBadges: {
            name: "ChannelBadges",
            description: "Thêm huy hiệu vào các kênh dựa trên loại của chúng",
            badge: {
                private: "Kênh này đã bị khóa.",
                nsfw: "Kênh này được đánh dấu là NSFW.",
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
                    description: "Hiển thị huy hiệu giọng nói"
                },
                showCategoryBadge: {
                    label: "Hiển thị Huy hiệu Danh mục",
                    description: "Hiển thị huy hiệu Danh mục"
                },
                showDirectoryBadge: {
                    label: "Hiển thị huy hiệu thư mục",
                    description: "Hiển thị huy hiệu Thư mục"
                },
                showAnnouncementThreadBadge: {
                    label: "Hiển thị huy hiệu chủ đề thông báo",
                    description: "Hiển thị huy hiệu Chủ đề Thông báo"
                },
                showPublicThreadBadge: {
                    label: "Hiển thị huy hiệu chủ đề công khai",
                    description: "Hiển thị huy hiệu Chủ đề công khai"
                },
                showPrivateThreadBadge: {
                    label: "Hiển thị huy hiệu chủ đề riêng tư",
                    description: "Hiển thị huy hiệu Chủ đề riêng tư"
                },
                showStageBadge: {
                    label: "Hiển thị huy hiệu sân khấu",
                    description: "Hiển thị huy hiệu Sân khấu"
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
                    description: "Hiển thị huy hiệu Phương tiện"
                },
                showNSFWBadge: {
                    label: "Hiển thị Huy hiệu NSFW",
                    description: "Hiển thị huy hiệu NSFW"
                },
                showLockedBadge: {
                    label: "Hiển thị huy hiệu bị khóa",
                    description: "Hiển thị huy hiệu Đã khóa"
                },
                showRulesBadge: {
                    label: "Hiển thị huy hiệu quy tắc",
                    description: "Hiển thị huy hiệu Quy tắc"
                },
                showUnknownBadge: {
                    label: "Hiển thị huy hiệu không xác định",
                    description: "Hiển thị huy hiệu Không xác định"
                },
                textBadgeLabel: {
                    label: "Nhãn huy hiệu văn bản",
                    description: "Nhãn huy hiệu văn bản",
                    default: "Chữ"
                },
                voiceBadgeLabel: {
                    label: "Nhãn huy hiệu giọng nói",
                    description: "Nhãn huy hiệu giọng nói",
                    default: "Tiếng nói"
                },
                categoryBadgeLabel: {
                    label: "Nhãn huy hiệu danh mục",
                    description: "Nhãn huy hiệu danh mục",
                    default: "Loại"
                },
                announcementBadgeLabel: {
                    label: "Nhãn huy hiệu chủ đề thông báo",
                    description: "Thông báo Nhãn huy hiệu chủ đề",
                    default: "Tin tức"
                },
                announcementThreadBadgeLabel: {
                    label: "Nhãn huy hiệu chủ đề thông báo",
                    description: "Thông báo Nhãn huy hiệu chủ đề",
                    default: "chủ đề tin tức"
                },
                publicThreadBadgeLabel: {
                    label: "Nhãn huy hiệu chủ đề công khai",
                    description: "Nhãn huy hiệu Chủ đề công khai",
                    default: "Chủ đề"
                },
                privateThreadBadgeLabel: {
                    label: "Nhãn huy hiệu chủ đề riêng tư",
                    description: "Nhãn huy hiệu Chủ đề riêng tư",
                    default: "Chủ đề riêng tư"
                },
                stageBadgeLabel: {
                    label: "Nhãn huy hiệu sân khấu",
                    description: "Nhãn huy hiệu sân khấu",
                    default: "Sân khấu"
                },
                directoryBadgeLabel: {
                    label: "Nhãn huy hiệu thư mục",
                    description: "Nhãn huy hiệu thư mục",
                    default: "Thư mục"
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
                    label: "Nhãn huy hiệu bị khóa",
                    description: "Nhãn huy hiệu bị khóa",
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
                    label: "Màu huy hiệu giọng nói",
                    description: "Màu huy hiệu giọng nói"
                },
                categoryBadgeColor: {
                    label: "Màu huy hiệu danh mục",
                    description: "Màu huy hiệu danh mục"
                },
                announcementBadgeColor: {
                    label: "Màu huy hiệu chủ đề thông báo",
                    description: "Màu huy hiệu chủ đề thông báo"
                },
                announcementThreadBadgeColor: {
                    label: "Màu huy hiệu chủ đề thông báo",
                    description: "Màu huy hiệu chủ đề thông báo"
                },
                publicThreadBadgeColor: {
                    label: "Màu huy hiệu chủ đề công khai",
                    description: "Màu huy hiệu Chủ đề công khai"
                },
                privateThreadBadgeColor: {
                    label: "Màu huy hiệu chủ đề riêng tư",
                    description: "Màu huy hiệu Chủ đề riêng tư"
                },
                stageBadgeColor: {
                    label: "Màu huy hiệu sân khấu",
                    description: "Màu huy hiệu sân khấu"
                },
                directoryBadgeColor: {
                    label: "Màu huy hiệu thư mục",
                    description: "Màu huy hiệu thư mục"
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
                voice: "Tiếng nói",
                category: "Loại",
                announcement: "Tin tức",
                announcementThread: "chủ đề tin tức",
                publicThread: "Chủ đề",
                privateThread: "Chủ đề riêng tư",
                stage: "Sân khấu",
                directory: "Thư mục",
                forum: "diễn đàn",
                media: "Phương tiện truyền thông",
                nsfw: "NSFW",
                locked: "Đã khóa",
                rules: "Quy tắc",
                unknown: "Không xác định"
            },
            tooltip: {
                locked: "Kênh này đã bị khóa.",
                nsfw: "Kênh này được đánh dấu là NSFW."
            }
        },
        channelTabs: {
            name: "ChannelTabs",
            description: "Nhóm các kênh bạn thường truy cập vào các tab, giống như một trình duyệt",
            open: "Mở trong tab mới",
            animation: {
                title: "Điều khiển hoạt ảnh",
                description: "Bật hoặc tắt hoạt ảnh cụ thể cho tab kênh. Mỗi tùy chọn có thể được chuyển đổi độc lập.",
                placeholder: "Chọn hoạt ảnh nào sẽ bật...",
                tabHover: "Hiệu ứng di chuột qua tab (nâng + tỷ lệ)",
                tabSelection: "Hoạt ảnh nâng tab đã chọn",
                tabDragDrop: "Tab Kéo & Thả (ma + sắp xếp lại)",
                tabEnterExit: "Tab Vào/Thoát slide (tạo + đóng)",
                tabIconPop: "Biểu tượng bật lên khi lựa chọn (mở rộng biểu tượng)",
                closeRotation: "Xoay nút đóng",
                plusPulse: "Xung nút cộng",
                mentionGlow: "Huy hiệu đề cập phát sáng",
                compactExpand: "Mở rộng chế độ nhỏ gọn",
                selectedBorder: "Tab đã chọn Viền xanh",
                selectedBackground: "Màu nền của tab đã chọn",
                tabShadows: "Hiệu ứng đổ bóng tab",
                tabRepositioning: "Định vị lại tab (thay đổi vị trí mượt mà)",
                resizeHandle: "Thay đổi kích thước xử lý mờ dần",
                questActivate: "Độ dốc nhiệm vụ hoạt động"
            },
            bookmark: {
                label: "Đánh dấu",
                unknown: "Người dùng không xác định",
                folder: "Thư mục",
                add: "Thêm vào dấu trang",
                edit: "Chỉnh sửa dấu trang",
                delete: "Xóa dấu trang",
                remove: "Xóa khỏi Dấu trang",
                removeFolder: "Xóa dấu trang khỏi thư mục",
                loading: "Đang tải dấu trang...",
                noBookmarks: "Bạn không có dấu trang nào. Bạn có thể thêm một tab đang mở hoặc ẩn nó bằng cách nhấp chuột phải vào nó",
                quests: "Nhiệm vụ",
                messageRequests: "Yêu cầu tin nhắn",
                friends: "Bạn",
                shop: "Cửa hàng",
                library: "Thư viện",
                discovery: "Khám phá",
                nitro: "Nitơ",
                icymi: "ICYMI",
                activity: "Hoạt động",
                specialPage: "Trang đặc biệt",
                searchPlaceholder: "Tìm kiếm dấu trang",
            },
            button: {
                save: "Cứu",
                delete: "Xóa bỏ",
                cancel: "Hủy bỏ",
                reset: "Đặt lại",
                close: "Đóng",
            },
            context: {
                label: "Menu ngữ cảnh của ChannelTabs",
                bookmark: "Menu ngữ cảnh đánh dấu trang ChannelTabs",
                tab: "Menu ngữ cảnh tab ChannelTabs",
                compact: "Nhỏ gọn",
                bookmarkBar: "Thanh dấu trang",
                openAll: "Mở tất cả trong dấu trang",
                openNew: "Mở trong tab mới",
                folderMenu: "Menu thư mục dấu trang",
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
                noLogin: "Không có tài khoản đăng nhập?"
            },
            modal: {
                add: {
                    title: "Thêm dấu trang vào thư mục",
                    select: "Chọn một thư mục",
                    create: "Tạo một cái"
                },
                folderIcon: {
                    title: "Chọn biểu tượng thư mục",
                    preview: "Xem trước",
                    iconColor: "Màu biểu tượng",
                    search: "Tìm kiếm",
                    searchPlaceholder: "Tìm kiếm {{count}} biểu tượng...",
                    folderName: "Tên thư mục",
                    folderColor: "Màu thư mục",
                    folderIcon: "Biểu tượng thư mục",
                    chooseIcon: "Chọn biểu tượng",
                    useDefaultIcon: "Sử dụng biểu tượng mặc định"
                },
                edit: {
                    title: "Chỉnh sửa dấu trang",
                    name: "Bookmark Name",
                    folder: "Màu thư mục"
                },
                delete: {
                    title: "Bạn có chắc không?",
                    description: "Xóa thư mục dấu trang cũng sẽ xóa tất cả dấu trang trong đó."
                }
            },
            option: {
                onStartup: {
                    label: "Khi khởi động",
                    description: "Phải làm gì với các tab khi khởi động",
                    nothing: "Không làm gì cả (mở trên tab bạn bè)",
                    remember: "Ghi nhớ các tab từ phiên trước",
                    open: "Mở trên một nhóm tab cụ thể"
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
                persistUnreadCountFallback: {
                    label: "Lưu fallback số chưa đọc",
                    description: "Lưu các fallback huy hiệu chưa đọc qua các lần tải lại cho tab và dấu trang"
                },
                bookmarkNotificationDot: {
                    label: "Dấu chấm thông báo đánh dấu",
                    description: "Hiển thị dấu chấm thông báo cho dấu trang"
                },
                widerTabsAndBookmarks: {
                    label: "Tab và dấu trang rộng hơn",
                    description: "Mở rộng độ dài của tab và dấu trang cho màn hình lớn hơn"
                },
                tabWidthScale: {
                    label: "Tỷ lệ chiều rộng tab",
                    description: "Tỷ lệ chiều rộng tab (phần trăm) - có thể điều chỉnh bằng cách kéo các cạnh tab"
                },
                renderAllTabs: {
                    label: "Kết xuất tất cả các tab",
                    description: "Giữ tất cả các tab được lưu trong bộ nhớ để chuyển đổi nhanh hơn (lưu vị trí và trạng thái cuộn bộ đệm)"
                },
                switchToExistingTab: {
                    label: "Chuyển sang tab hiện có",
                    description: "Chuyển sang tab nếu nó đã tồn tại cho kênh bạn đang điều hướng tới"
                },
                createNewTabIfNotExists: {
                    label: "Tạo tab mới nếu không tồn tại",
                    description: "Tạo một tab mới nếu tab này không tồn tại cho kênh bạn đang điều hướng tới"
                },
                enableRapidNavigation: {
                    label: "Bật điều hướng nhanh",
                    description: "Bật hành vi điều hướng nhanh - điều hướng nhanh giữa các kênh sẽ thay thế tab hiện tại thay vì tạo tab mới"
                },
                rapidNavigationThreshold: {
                    label: "Ngưỡng điều hướng nhanh",
                    description: "Cửa sổ thời gian (tính bằng mili giây) để điều hướng nhanh chóng. Trong thời gian này, các kênh mới sẽ thay thế tab hiện tại thay vì tạo tab mới."
                },
                tabBarPosition: {
                    label: "Vị trí thanh tab",
                    description: "Vị trí của thanh tab",
                    top: "Đứng đầu",
                    bottom: "Đáy"
                },
                enableNumberKeySwitching: {
                    label: "Bật tính năng chuyển đổi phím số",
                    description: "Kích hoạt các phím số (1-9) để chuyển tab"
                },
                numberKeySwitchCount: {
                    label: "Số lần chuyển đổi phím số",
                    description: "Số tab có thể truy cập bằng phím số (1-9)"
                },
                enableCloseTabShortcut: {
                    label: "Bật phím tắt Đóng tab",
                    description: "Bật phím tắt đóng tab"
                },
                enableNewTabShortcut: {
                    label: "Bật phím tắt tab mới",
                    description: "Bật phím tắt tab mới"
                },
                enableTabCycleShortcut: {
                    label: "Bật phím tắt chu kỳ tab",
                    description: "Bật phím tắt chuyển đổi tab"
                },
                keybindsSection: {
                    label: "Tổ hợp phím",
                    description: "Nhấp vào nút và nhấn tổ hợp phím mong muốn của bạn. Các công cụ sửa đổi như CTRL, SHIFT và ALT được hỗ trợ.",
                    title: "Phím tắt",
                    reset: "Đặt lại tất cả về mặc định",
                    shortcutDisabled: "Phím tắt này hiện đang bị vô hiệu hóa",
                    pressKey: "Nhấn bất kỳ phím nào...",
                    conflictError: "Phím này đã được sử dụng bởi: {{key}}",
                    closeTab: {
                        label: "Đóng tab",
                        description: "Bàn phím tab hiện đang hoạt động"
                    },
                    newTab: {
                        label: "Tab mới",
                        description: "Mở tab mới với kênh hiện tại"
                    },
                    cycleTabsForward: {
                        label: "Chuyển tiếp các tab theo chu kỳ",
                        description: "Chuyển sang tab tiếp theo (cuộn quanh tab đầu tiên)"
                    },
                    cycleTabsBackward: {
                        label: "Chu kỳ các tab lùi",
                        description: "Chuyển sang tab trước (cuối vòng đến cuối)"
                    }
                },
                closeTabKeybind: {
                    label: "Đóng liên kết phím tab",
                    description: "Phím tắt để đóng tab hiện tại"
                },
                newTabKeybind: {
                    label: "Liên kết phím tab mới",
                    description: "Phím tắt để mở tab mới"
                },
                cycleTabForwardKeybind: {
                    label: "Liên kết phím chuyển tiếp tab theo chu kỳ",
                    description: "Phím tắt để chuyển sang tab tiếp theo"
                },
                cycleTabBackwardKeybind: {
                    label: "Liên kết phím ngược của tab chu kỳ",
                    description: "Phím tắt để chuyển sang tab trước"
                },
                showTabNumbers: {
                    label: "Hiển thị số tab",
                    description: "Hiển thị huy hiệu được đánh số trên tab để biểu thị phím tắt"
                },
                tabNumberPosition: {
                    label: "Vị trí số tab",
                    description: "Nơi hiển thị huy hiệu được đánh số trên tab",
                    left: "Bên trái (trước biểu tượng)",
                    right: "Bên phải (sau nội dung)"
                },
                animations: {
                    label: "Hoạt hình"
                },
                animationHover: {
                    label: "Hoạt ảnh trên Hover",
                    description: "Bật hiệu ứng nâng và chia tỷ lệ khi di chuột"
                },
                animationSelection: {
                    label: "Hoạt ảnh khi được lựa chọn",
                    description: "Bật hoạt ảnh lựa chọn (đường viền sáng, nâng)"
                },
                animationDragDrop: {
                    label: "Hoạt hình khi kéo và thả",
                    description: "Kích hoạt tính năng kéo thả hiệu ứng ma quái"
                },
                animationEnterExit: {
                    label: "Hoạt ảnh khi vào/ra",
                    description: "Bật hoạt ảnh tạo/đóng tab"
                },
                animationIconPop: {
                    label: "Hoạt hình trên Icon Pop",
                    description: "Bật hoạt ảnh tăng tỷ lệ biểu tượng khi chọn"
                },
                animationCloseRotation: {
                    label: "Hoạt ảnh khi Đóng Xoay",
                    description: "Bật hoạt ảnh xoay cho các nút đóng"
                },
                animationPlusPulse: {
                    label: "Hoạt ảnh trên xung nút Plus",
                    description: "Bật hoạt ảnh xung cho nút dấu cộng"
                },
                animationMentionGlow: {
                    label: "Hoạt ảnh trên Mention Glow",
                    description: "Bật ánh sáng đỏ rực cho các lượt đề cập"
                },
                animationCompactExpand: {
                    label: "Hoạt ảnh trên Thu gọn/Mở rộng",
                    description: "Cho phép mở rộng mượt mà cho các tab nhỏ gọn"
                },
                animationSelectedBorder: {
                    label: "Hoạt ảnh trên đường viền đã chọn",
                    description: "Bật kiểu đường viền và ánh sáng cho các tab đã chọn"
                },
                animationSelectedBackground: {
                    label: "Hoạt ảnh trên nền đã chọn",
                    description: "Bật thay đổi màu nền cho các tab đã chọn"
                },
                animationTabShadows: {
                    label: "Hoạt ảnh trên Tab Shadows",
                    description: "Bật hiệu ứng đổ bóng trên tab"
                },
                animationTabPositioning: {
                    label: "Định vị tab hoạt hình",
                    description: "Cho phép chuyển tiếp mượt mà khi tab di chuyển vị trí"
                },
                animationResizeHandle: {
                    label: "Xử lý thay đổi kích thước hoạt ảnh",
                    description: "Bật hoạt ảnh mờ dần để điều khiển thay đổi kích thước"
                },
                animationQuestsActive: {
                    label: "Nhiệm vụ hoạt hình đang hoạt động",
                    description: "Bật hoạt ảnh chuyển màu trên tab Nhiệm vụ khi nhiệm vụ đang chạy tích cực"
                },
                compactAutoExpandSelected: {
                    label: "Tự động mở rộng thu gọn đã chọn",
                    description: "Tự động mở rộng tab thu gọn khi chọn để hiển thị tên kênh đầy đủ"
                },
                compactAutoExpandOnHover: {
                    label: "Tự động mở rộng nhỏ gọn khi di chuột",
                    description: "Tự động mở rộng các tab thu gọn khi di chuột để hiển thị tên kênh đầy đủ"
                },
                openInNewTabAutoSwitch: {
                    label: "Mở trong tab mới Tự động chuyển đổi",
                    description: "Tự động chuyển sang các tab mới được mở từ menu ngữ cảnh 'Mở trong tab mới'"
                },
                bookmarksIndependentFromTabs: {
                    label: "Dấu trang độc lập với tab",
                    description: "Dấu trang điều hướng độc lập mà không ảnh hưởng đến thanh tab đang hoạt động"
                },
                showResizeHandle: {
                    label: "Hiển thị phần điều khiển thay đổi kích thước",
                    description: "Hiển thị tay cầm thay đổi kích thước khi di chuột qua các tab để điều chỉnh độ rộng của tab"
                },
                openNewTabsInCompactMode: {
                    label: "Mở tab mới ở chế độ thu gọn",
                    description: "Mặc định mở tất cả các tab mới tạo ở chế độ thu gọn"
                },
                newTabButtonBehavior: {
                    label: "Hành vi nút tab mới",
                    description: "Nút tab mới (+) theo sau các tab thay vì được ghim ở bên phải"
                },
                oneTabPerServer: {
                    label: "Một tab trên mỗi máy chủ",
                    description: "Giới hạn ở một tab cho mỗi máy chủ, do đó, việc mở một kênh mới trong máy chủ đó sẽ sử dụng tab hiện có."
                },
                maxOpenTabs: {
                    label: "Tab mở tối đa",
                    description: "Số lượng tab mở tối đa (0 = không giới hạn)"
                }
            },
            tabs: {
                startup: "Tab khởi động",
                currently: "Đặt thành các tab hiện đang mở"
            },
            toast: {
                notRestoring: "Không khôi phục các tab khi KeepCurrentChannel được bật",
                failed: {
                    restore: "Không thể khôi phục các tab",
                    saved: "Không tải được các tab đã lưu"
                }
            }
        },
        characterCounter: {
            name: "CharacterCounter",
            description: "Hiển thị bộ đếm ký tự trong hộp tin nhắn",
            option: {
                colorEffects: {
                    label: "Hiệu ứng màu sắc",
                    description: "Bật hoặc tắt hiệu ứng màu để đạt gần giới hạn ký tự"
                }
            }
        },
        cleanChannelGroups: {
            name: "CleanChannelGroups",
            description: "Ẩn tất cả các kênh trong danh mục thu gọn, ngay cả khi chúng có tin nhắn chưa đọc."
        },
        cleanChannelName: {
            name: "CleanChannelName",
            description: "Xóa tất cả biểu tượng cảm xúc và nội dung trang trí khỏi tên kênh"
        },
        clearURLs: {
            name: "ClearURLs",
            description: "Tự động xóa các yếu tố theo dõi khỏi URL bạn gửi"
        },
        clickableRoles: {
            name: "ClickableRoles",
            description: "Nhấp vào vai trò trong hồ sơ người dùng và danh sách thành viên để xem thành viên nào có chúng.",
            modal: {
                loading: "Đang tải thành viên...",
                noMembers: "Không tìm thấy thành viên nào",
                unknown: "Vai trò không xác định"
            }
        },
        clientSideBlock: {
            name: "ClientSideBlock",
            description: "Cho phép bạn ẩn cục bộ gần như tất cả nội dung khỏi bất kỳ người dùng nào",
            replying: "Trả lời tin nhắn bị chặn",
            option: {
                hideVc: {
                    label: "Ẩn kênh thoại",
                    description: "Ẩn các kênh thoại có chứa người dùng bị chặn."
                },
                usersToBlock: {
                    label: "Người dùng cần chặn",
                    description: "ID người dùng được phân tách bằng dấu phẩy và dấu cách"
                },
                hideBlockedUsers: {
                    label: "Ẩn người dùng bị chặn",
                    description: "Nên người dùng bị chặn cũng bị ẩn ở mọi nơi"
                },
                hideBlockedMessages: {
                    label: "Ẩn tin nhắn bị chặn",
                    description: "Tin nhắn từ người dùng bị chặn có bị ẩn hoàn toàn không (giống như plugin noblockedmessages cũ)"
                },
                hideEmptyRoles: {
                    label: "Ẩn vai trò trống",
                    description: "Có nên ẩn tiêu đề vai trò nếu tất cả thành viên của họ bị chặn"
                },
                blockedReplyDisplay: {
                    label: "Hiển thị trả lời bị chặn",
                    description: "Nội dung nào sẽ hiển thị thay vì tin nhắn khi ai đó trả lời người mà bạn đã ẩn",
                    displayText: "Hiển thị văn bản cho biết tin nhắn ẩn đã được trả lời",
                    hideReply: "Nghĩa đen là không có gì"
                },
                guildBlackList: {
                    label: "Danh sách đen bang hội",
                    description: "ID bang hội để vô hiệu hóa chức năng trong"
                },
                guildWhiteList: {
                    label: "Danh sách trắng của bang hội",
                    description: "ID bang hội để kích hoạt chức năng trong"
                }
            }
        },
        clientTheme: {
            name: "ClientTheme",
            description: "Giải trí thử nghiệm chủ đề khách hàng cũ. Thêm màu vào chủ đề ứng dụng khách Discord của bạn",
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
                    title: "Chủ đề của bạn sẽ không đẹp!",
                    contrast: "Màu đã chọn sẽ không tương phản tốt với văn bản",
                    nitro: "Chủ đề Nitro không được hỗ trợ",
                    switch: "Chuyển sang chế độ {{oppositeTheme}}",
                    disable: "Tắt chủ đề Nitro",
                    reset: "Đặt lại màu chủ đề"
                }
            }
        },
        clipsEnhancements: {
            name: "ClipsEnhancements",
            description: "Thêm nhiều tùy chọn Clip FPS và thời lượng, cùng với tính năng gắn thẻ RPC!",
            minutes: "Phút",
            option: {
                richPresenceTagging: {
                    label: "Gắn thẻ hiện diện phong phú",
                    description: "Khi nào clip nên được gắn thẻ với Sự hiện diện phong phú hiện tại?",
                    always: "Luôn luôn",
                    only: "Chỉ khi tên bắt đầu hoặc kết thúc của hoạt động trùng khớp",
                    never: "Không bao giờ"
                },
                enableScreenshotKeybind: {
                    label: "Bật liên kết khóa ảnh chụp màn hình",
                    description: "Kích hoạt tính năng keybind ảnh chụp màn hình"
                },
                enableVoiceOnlyClips: {
                    label: "Bật clip chỉ có giọng nói",
                    description: "Bật clip chỉ có giọng nói (âm thanh không có video)"
                },
                enableAdvancedSignals: {
                    label: "Kích hoạt tín hiệu nâng cao",
                    description: "Bật tín hiệu clip nâng cao (trình kích hoạt clip tự động)"
                },
                ignorePlatformRestriction: {
                    label: "Bỏ qua hạn chế nền tảng",
                    description: "Cho phép cắt hạn chế nền tảng (có thể gây ra lỗi lưu)"
                },
                clipsLink: {
                    label: "Liên kết clip",
                    link: "Thay đổi tùy chọn FPS và thời lượng trong cài đặt Clip!"
                }
            }
        },
        colorSighted: {
            name: "ColorSighted",
            description: "Xóa các biểu tượng thân thiện với người mù màu khỏi trạng thái, giống như Discord 2015-2017"
        },
        commandPalette: {
            name: "CommandPalette",
            description: "Cho phép bạn điều hướng giao diện người dùng bằng bàn phím.",
            action: {
                command: {
                    label: "Chạy lệnh",
                    description: "Bí danh một lệnh bảng màu khác theo ID. Sử dụng bộ chọn nếu bạn không chắc chắn về mã định danh."
                },
                settings: {
                    label: "Mở trang cài đặt",
                    description: "Chuyển trực tiếp đến trang cài đặt Discord. Chọn một trang từ bộ chọn."
                },
                url: {
                    label: "Mở URL",
                    description: "Mở một liên kết. Sử dụng liên kết https:// để có khả năng tương thích tốt nhất."
                },
                macro: {
                    label: "Chạy macro",
                    description: "Chạy một chuỗi lệnh theo thứ tự. Thêm các bước thông qua bộ chọn."
                }
            },
            category: {
                auto: "Tự động (sử dụng vị trí mặc định)",
                default: {
                    label: "Thao tác nhanh",
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
                    description: "Hành động cho kênh và bang hội đã chọn"
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
                    label: "Lệnh tùy chỉnh",
                    description: "Các mục trong bảng lệnh do người dùng xác định"
                },
                sessions: {
                    label: "Công cụ phiên",
                    description: "Tiện ích để quản lý phiên Discord của bạn"
                },
                guilds: {
                    label: "Bang hội",
                    description: "Nhanh chóng điều hướng đến bang hội của bạn"
                },
                friends: {
                    label: "Bạn",
                    description: "Điều hướng nhanh đến bạn bè của bạn"
                },
                action: {
                    label: "Hoạt động"
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
                    label: "Tải lại sự bất hòa",
                    description: "Tải lại cửa sổ Discord hiện tại"
                }
            },
            command: {
                enable: "Bật {{pluginName}}",
                enabled: "Đã bật {{pluginName}}",
                disable: "Tắt {{pluginName}}",
                disabled: "Đã tắt {{pluginName}}",
                failed: "Lệnh không thành công:",
                toggleFailed: "Không chuyển đổi được {{pluginName}}.",
                pluginSettings: "{{pluginName}} Cài đặt",
                untitled: "Lệnh không có tiêu đề",
                new: "Lệnh mới",
                error: {
                    enter: "Nhập ID lệnh hoặc chọn một ID bên dưới.",
                    noCommand: "Không có lệnh nào khớp với ID này."
                },
                discord: {
                    account: "Mở tài khoản của tôi",
                    privacy: "Dữ liệu mở và quyền riêng tư",
                    notifications: "Mở thông báo",
                    voice: "Mở giọng nói và video",
                    text: "Mở văn bản và hình ảnh",
                    appearance: "Giao diện mở",
                    accessibility: "Mở khả năng truy cập",
                    keybinds: "Mở tổ hợp phím",
                    advanced: "Mở nâng cao",
                },
                updates: {
                    check: {
                        label: "Kiểm tra cập nhật",
                        description: "Kiểm tra bản cập nhật Plexcord",
                        one: "Một bản cập nhật có sẵn",
                        multiple: "{{count}} có bản cập nhật",
                        none: "Không có bản cập nhật nào",
                        failed: "Không thể kiểm tra cập nhật."
                    },
                    changelog: {
                        label: "Xem nhật ký thay đổi",
                        description: "Mở nhật ký thay đổi Plexcord"
                    }
                },
                read: {
                    mark: {
                        label: "Đánh dấu {{channelLabel}} đã đọc"
                    }
                },
                pin: {
                    open: {
                        label: "Mở Ghim cho {{channelLabel}}"
                    },
                    toggle: {
                        label: "Chuyển đổi Ghim trên lệnh cuối cùng"
                    }
                },
                channel: {
                    mute: {
                        label: "Tắt tiếng {{channelLabel}}",
                        oneHour: "Tắt tiếng {{channelLabel}} trong 1 giờ",
                        untilTomorrow: "Tắt tiếng {{channelLabel}} cho đến ngày mai",
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
                        label: "Mở Cài đặt cho {{guildLabel}}"
                    },
                    navigate: {
                        label: "Điều hướng tới {{guildLabel}}"
                    }
                },
                session: {
                    thirtyMinutesDnd: "Đặt chế độ Không làm phiền trong 30 phút",
                    oneHourDnd: "Đặt chế độ Không làm phiền trong 1 giờ",
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
                    description: "Hiển thị các lệnh được thực hiện cuối cùng",
                    rerun: "Chạy lại lệnh cuối cùng"
                },
                plugin: {
                    reload: {
                        label: "Tải lại tất cả các plugin",
                        description: "Cố gắng tải lại nóng mọi plugin đã bật"
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
                searchPlaceholder: "Lệnh tìm kiếm",
                noCommand: "Không tìm thấy lệnh nào",
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
                        noCommand: "Không tìm thấy lệnh nào",
                        pin: "Lệnh ghim",
                        unpin: "Lệnh bỏ ghim"
                    },
                    target: {
                        label: "ID lệnh mục tiêu",
                        placeholder: "Nhập ID lệnh",
                        choose: "Chọn lệnh"
                    },
                    custom: {
                        label: "Lệnh tùy chỉnh",
                        description: "1) Đặt tên cho lệnh · 2) Thêm mô tả/từ khóa/thẻ/danh mục tùy chọn · 3) Chọn một hành động và điền thông tin chi tiết của nó (ID phải khớp với các lệnh bảng màu hiện có cho bí danh và macro).",
                        auto: "Tự động (mặc định)",
                        expand: "Mở rộng",
                        collapse: "Sụp đổ",
                        collapsed: {
                            label: "Nhãn",
                            description: "Tên hiển thị",
                            advanced: {
                                hide: "Ẩn tùy chọn nâng cao",
                                show: "Hiển thị tùy chọn nâng cao"
                            },
                            subtitle: {
                                label: "Sự miêu tả",
                                placeholder: "Phụ đề tùy chọn"
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
                    noSelected: "Không có trang nào được chọn",
                    current: "Trang hiện tại",
                    choose: "Chọn trang..."
                },
                url: {
                    url: "URL",
                    error: "Sử dụng liên kết http:// hoặc https://.",
                    valid: "Nhập một URL hợp lệ.",
                    open: {
                        external: "Mở bên ngoài",
                    }
                },
                macro: {
                    sequence: {
                        label: "Chuỗi lệnh",
                        placeholder: "lệnh-a, lệnh-b"
                    },
                    addStep: "Thêm bước",
                    unknownId: "ID lệnh không xác định"
                }
            },
            status: {
                online: "Trực tuyến",
                idle: "Nhàn rỗi",
                dnd: "Đừng làm phiền",
                invisible: "Vô hình"
            },
            tag: {
                core: "Cốt lõi",
                navigation: "Điều hướng",
                utility: "Tính thiết thực",
                developer: "Nhà phát triển",
                customization: "Tùy chỉnh",
                plugins: "Plugin",
                session: "Phiên họp",
                context: "Bối cảnh",
                custom: "Phong tục",
                guilds: "Bang hội",
                friends: "Bạn",
                other: "Khác"
            },
            toast: {
                chat: {
                    button: {
                        unableToFind: "Không tìm thấy nút trò chuyện '{{label}}'.",
                        failedToTrigger: "Không thể kích hoạt {{label}}.",
                        activated: "{{label}} đã được kích hoạt."
                    }
                },
                channel: {
                    mute: {
                        unavailable: "Điều khiển tắt tiếng kênh không khả dụng",
                        muted: "Kênh bị tắt tiếng.",
                        unmuted: "Kênh không bị tắt tiếng.",
                        failed: "Không cập nhật được trạng thái tắt tiếng kênh."
                    },
                    dm: {
                        no: "Không có lần đóng DM nào được ghi lại trong phiên này.",
                        reOpened: "Đã mở lại DM đã đóng gần đây nhất.",
                        noAvailable: "DM không còn nữa."
                    }
                },
                command: {
                    loop: "Vòng lặp lệnh được phát hiện trong quá trình thực thi macro.",
                    notFound: "Lệnh {{commandId}} không tìm thấy.",
                    unsupported: "Hành động lệnh tùy chỉnh không được hỗ trợ.",
                    failedToRun: "Không chạy được {{label}}.",
                    notMetadata: "Siêu dữ liệu plugin Bảng lệnh không có sẵn."
                },
                guild: {
                    mute: {
                        unavailable: "Điều khiển tắt tiếng của bang hội không có sẵn",
                        muted: "Bang hội bị tắt tiếng.",
                        unmuted: "Bang hội không bị tắt tiếng.",
                        failed: "Không thể cập nhật trạng thái tắt tiếng của bang hội."
                    },
                    settings: {
                        unable: "Không thể mở cài đặt bang hội.",
                    }
                },
                panel: {
                    pin: {
                        unable: "Không thể mở bảng ghim.",
                    }
                },
                status: {
                    reset: {
                        canceled: "Đã hủy thiết lập lại trạng thái theo lịch trình.",
                        unableToChange: "Không thể thay đổi trạng thái ngay bây giờ.",
                        reverted: "Trạng thái được hoàn nguyên về {{status}}.",
                        dnd: "Không làm phiền trong {{duration}} phút."
                    },
                    change: {
                        unableToChange: "Không thể thay đổi trạng thái ngay bây giờ.",
                        changed: "Trạng thái đã thay đổi thành {{status}}."
                    }
                },
                read: {
                    marked: "Đã đánh dấu {{channelLabel}} là đã đọc.",
                    failed: "Không đánh dấu được kênh là đã đọc."
                },
                route: {
                    unable: "Không thể mở {{destination}}.",
                },
                notification: {
                    cleared: "Đã xóa tất cả thông báo.",
                    failed: "Không xóa được thông báo.",
                    notSupported: "Xóa thông báo không được hỗ trợ."
                },
                streamerMode: {
                    enabled: "Đã bật Chế độ phát trực tiếp.",
                    disabled: "Chế độ phát trực tuyến bị tắt.",
                },
                voice: {
                    micToggle: {
                        muted: "Micrô bị tắt tiếng.",
                        unmuted: "Đã bật tiếng micrô."
                    },
                    deafenToggle: {
                        deafened: "Bây giờ bạn đã bị điếc.",
                        undeafened: "Bạn không còn bị điếc nữa."
                    }
                },
                quickCSS: {
                    enabled: "Đã bật CSS nhanh.",
                    disabled: "CSS nhanh bị vô hiệu hóa."
                },
                transparentity: {
                    enabled: "Đã bật tính năng trong suốt của cửa sổ.",
                    disabled: "Tính năng trong suốt của cửa sổ bị tắt."
                },
                plugin: {
                    disabled: {
                        label: "{{pluginName}} bị vô hiệu hóa.",
                        disable: "{{pluginName}} bị vô hiệu hóa. Kích hoạt plugin để sử dụng hành động này."
                    },
                    required: {
                        label: "{{pluginName}} yêu cầu khởi động lại để tải lại."
                    },
                    stop: {
                        failed: "Không dừng được {{pluginName}}."
                    },
                    restart: {
                        failed: "Không khởi động lại được {{pluginName}}."
                    },
                    reload: {
                        label: "Đã tải lại {{pluginName}}.",
                        noPlugin: "Không có plugin nào được tải lại.",
                        reloaded: "Đã tải lại {{count}} plugin{{s}}."
                    },
                    toggle: {
                        enabled: "Đã bật plugin {{changed}}{{s}}.",
                        disabled: "Đã tắt plugin {{changed}}{{s}}.",
                        noChanged: "Không có plugin nào thay đổi trạng thái."
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
                    current: "Bang hội hiện tại",
                }
            },
            option: {
                hotkey: {
                    label: "Phím nóng",
                    description: "Phím nóng dùng để mở bảng lệnh",
                    recording: "Nhấn phím bất kỳ...",
                    reset: "Cài lại"
                },
                visualStyle: {
                    label: "Phong cách trực quan",
                    description: "Xuất hiện bảng màu",
                    classic: "Cổ điển",
                    polished: "đánh bóng"
                },
                showTags: {
                    label: "Hiển thị thẻ",
                    description: "Hiển thị chip thẻ cho lệnh"
                },
                enableTagFilter: {
                    label: "Bật bộ lọc thẻ",
                    description: "Hiển thị thanh bộ lọc thẻ"
                },
                customCommands: {
                    label: "Lệnh tùy chỉnh",
                    description: "Quản lý các mục bảng lệnh tùy chỉnh"
                }
            },
            template: {
                alias: {
                    label: "Lệnh bí danh",
                    description: "Phản chiếu lệnh hiện có"
                },
                settings: {
                    label: "Cài đặt",
                    description: "Mở cài đặt Discord"
                },
                url: {
                    label: "liên kết",
                    description: "Mở một URL bên ngoài"
                },
                macro: {
                    label: "Vĩ mô",
                    description: "Chạy một chuỗi lệnh"
                }
            }
        },
        consoleJanitor: {
            name: "ConsoleJanitor",
            description: "Tắt các thông báo/lỗi bảng điều khiển gây phiền nhiễu",
            option: {
                disableLoggers: {
                    label: "Tắt trình ghi nhật ký",
                    description: "Vô hiệu hóa nhật ký của Discord"
                },
                disableSpotifyLogger: {
                    label: "Vô hiệu hóa Spotify Logger",
                    description: "Tắt trình ghi nhật ký Spotify, làm rò rỉ thông tin tài khoản và mã thông báo truy cập"
                },
                whitelistedLoggers: {
                    label: "Trình ghi nhật ký được đưa vào danh sách trắng",
                    description: "Danh sách logger được phân tách bằng dấu chấm phẩy (;) để cho phép ngay cả khi những cái khác bị ẩn"
                },
                allowLevel: {
                    label: "Cho phép cấp độ",
                    description: "Luôn cho phép logger thuộc loại này",
                    filter: "Danh sách bộ lọc"
                }
            }
        },
        consoleShortcuts: {
            name: "Console Shortcuts",
            description: "Thêm Bí danh ngắn hơn cho nhiều thứ trên cửa sổ. Chạy `shortcutList` để có danh sách."
        },
        contentWarning: {
            name: "ContentWarning",
            description: "Cho phép bạn chỉ định một số từ kích hoạt nhất định sẽ bị làm mờ theo mặc định. Bấm vào nội dung bị mờ sẽ hiện ra.",
            option: {
                flagged: {
                    label: "Đã gắn cờ",
                    flagged: "Từ được gắn cờ",
                    placeholder: "Từ"
                },
                onClick: {
                    label: "Khi nhấp chuột",
                    description: "Chỉ hiển thị nội dung kích hoạt khi nhấp chuột thay vì di chuột"
                }
            }
        },
        copyEmojiMarkdown: {
            name: "CopyEmojiMarkdown",
            description: "Cho phép bạn sao chép biểu tượng cảm xúc dưới dạng chuỗi được định dạng (<a:blob_pwease:1402403381900742737>)",
            option: {
                copyUnicode: {
                    label: "Sao chép Unicode",
                    description: "Sao chép ký tự unicode thô thay vì :name: cho biểu tượng cảm xúc mặc định (👽)"
                }
            },
            context: {
                copy: "Sao chép đánh dấu biểu tượng cảm xúc"
            },
            toast: {
                success: "Thành công! Đã sao chép đánh dấu biểu tượng cảm xúc."
            }
        },
        copyFileContents: {
            name: "CopyFileContents",
            description: "Thêm nút vào tệp đính kèm tệp văn bản để sao chép nội dung của chúng",
            copied: "Đã sao chép!",
            large: "Tệp quá lớn để sao chép.",
            copyFileContents: "Sao chép nội dung tập tin"
        },
        copyProfileColors: {
            name: "CopyProfileColors",
            description: "Một plugin để sao chép màu gradient trong hồ sơ của mọi người vào khay nhớ tạm.",
            copy: "Sao chép màu hồ sơ",
            toast: {
                noColor: "Không tìm thấy màu hồ sơ!",
                copied: "Màu hồ sơ được sao chép vào clipboard!",
                error: "Lỗi sao chép màu hồ sơ!"
            }
        },
        copyStatusUrls: {
            name: "CopyStatusUrls",
            description: "Sao chép URL trạng thái của người dùng khi bạn nhấp chuột phải vào nó",
            toast: {
                copied: "URL đã sao chép",
                error: "Lỗi sao chép URL, hãy kiểm tra bảng điều khiển để biết thêm thông tin"
            }
        },
        copyStickerLinks: {
            name: "CopyStickerLinks",
            description: "Thêm khả năng sao chép và mở liên kết Nhãn dán",
            context: {
                copy: "Sao chép liên kết",
                open: "Mở liên kết"
            },
            toast: {
                success: "Đã sao chép liên kết!"
            }
        },
        copyUserMention: {
            name: "CopyUserMention",
            description: "Thêm nút để sao chép đề cập của người dùng trên menu ngữ cảnh của người dùng, hoạt động tốt nhất với ValidUser.",
            context: {
                copy: "Sao chép đề cập của người dùng"
            }
        },
        copyUserURLs: {
            name: "CopyUserURLs",
            description: "Thêm tùy chọn 'Sao chép URL người dùng' vào menu ngữ cảnh của người dùng.",
            context: {
                copy: "Sao chép URL người dùng"
            }
        },
        crashHandler: {
            name: "CrashHandler",
            description: "Plugin tiện ích để xử lý và có thể khôi phục sau sự cố mà không cần khởi động lại",
            option: {
                attemptToPreventCrashes: {
                    label: "Cố gắng ngăn chặn sự cố",
                    description: "Có nên cố gắng ngăn chặn sự cố Discord hay không."
                },
                attemptToNavigateToHome: {
                    label: "Cố gắng điều hướng đến Trang chủ",
                    description: "Có cố gắng điều hướng đến tab trang chủ khi khắc phục sự cố hay không."
                }
            },
            toast: {
                crashed: {
                    title: "Discord đã bị hỏng!",
                    body: "Awn :( Discord đã gặp sự cố nhanh chóng hai lần, không thể khôi phục.",
                    update: "Uh ồ, Discord vừa gặp sự cố... nhưng tin tốt là đã có bản cập nhật Plexcord có thể khắc phục sự cố này! Bạn có muốn cập nhật ngay bây giờ không?",
                    recover: "Đang cố gắng khôi phục...",
                    invalid: "Liên kết mời không hợp lệ hoặc đã hết hạn."
                }
            }
        },
        ctrlEnterSend: {
            name: "CtrlEnterSend",
            description: "Sử dụng Ctrl+Enter để gửi tin nhắn (có thể tùy chỉnh)",
            option: {
                submitRule: {
                    label: "Gửi quy tắc",
                    description: "Cách gửi tin nhắn",
                    ctrlEnter: "Ctrl+Enter (Enter hoặc Shift+Enter cho dòng mới) (cmd+enter trên macOS)",
                    shiftEnter: "Shift+Enter (Nhập cho dòng mới)",
                    enter: "Enter (Shift+Enter cho dòng mới; Discord mặc định)"
                },
                sendMessageInTheMiddleOfACodeBlock: {
                    label: "Gửi tin nhắn ở giữa khối mã",
                    description: "Có nên gửi tin nhắn ở giữa khối mã hay không"
                }
            }
        },
        cursorBuddy: {
            name: "CursorBuddy",
            description: "Thêm một sprite đi theo con trỏ của bạn.",
            modal: {
                furColor: "Màu lông",
                outlineColor: "Màu phác thảo"
            },
            option: {
                buddy: {
                    label: "Bạn bè",
                    description: "Chọn một con trỏ đi bạn ơi",
                    oneko: "Oneko",
                    fathorse: "Ngựa Béo"
                },
                speed: {
                    label: "Tốc độ",
                    description: "Tốc độ của bạn thân",
                    invalid: "Tốc độ phải lớn hơn 0"
                },
                fps: {
                    label: "Tốc độ khung hình",
                    description: "Tốc độ khung hình của bạn bè bạn",
                    invalid: "Tốc độ khung hình phải lớn hơn 0"
                },
                onekoSection: {
                    label: "Oneko"
                },
                furColor: {
                    label: "Màu lông",
                    description: "Màu lông lục giác cho Oneko"
                },
                outlineColor: {
                    label: "Màu phác thảo",
                    description: "Phác thảo màu hex cho Oneko"
                },
                fathorseSection: {
                    label: "Ngựa Béo"
                },
                size: {
                    label: "Kích cỡ",
                    description: "Kích thước của ngựa béo",
                    invalid: "Kích thước phải lớn hơn 0"
                },
                fade: {
                    label: "Phai",
                    description: "Nếu con ngựa mờ dần khi con trỏ ở gần"
                },
                freeroam: {
                    label: "tự do",
                    description: "Nếu con ngựa có thể đi lang thang tự do khi nhàn rỗi"
                },
                shake: {
                    label: "Lắc",
                    description: "Nếu con ngựa lắc cửa sổ khi nó đang đi"
                }
            }
        },
        customFolderIcons: {
            name: "CustomFolderIcons",
            description: "Tùy chỉnh biểu tượng thư mục với bất kỳ PNG nào",
            option: {
                solidIcon: {
                    label: "Biểu tượng rắn",
                    description: "Sử dụng nền đồng nhất trên nền ảnh"
                },
                folderIcons: {
                    label: "Biểu tượng thư mục",
                    description: "cài đặt biểu tượng thư mục"
                }
            },
            modal: {
                change: "Thay đổi kích thước của biểu tượng thư mục",
                save: "Cứu",
                unset: "Bỏ đặt",
                set: "Đặt biểu tượng mới",
                hover: "Bạn có thể phải di chuột qua thư mục sau khi cài đặt để làm mới nó."
            }
        },
        customIdle: {
            name: "CustomIdle",
            description: "Cho phép bạn đặt thời gian trước khi Discord không hoạt động (hoặc tắt tính năng tự động không hoạt động)",
            backOnline: "Chào mừng trở lại! Bấm vào nút để truy cập trực tuyến. Nhấp vào X để ở chế độ chờ cho đến khi tải lại.",
            exit: "Thoát khỏi chế độ chờ",
            option: {
                idleTimeout: {
                    label: "Hết thời gian chờ",
                    description: "Vài phút trước khi Discord không hoạt động (0 để tắt chế độ tự động không hoạt động)"
                },
                remainInIdle: {
                    label: "Vẫn ở trạng thái nhàn rỗi",
                    description: "Khi bạn quay lại Discord, hãy giữ nguyên trạng thái chờ cho đến khi bạn xác nhận rằng mình muốn trực tuyến"
                }
            }
        },
        customRPC: {
            name: "CustomRPC",
            description: "Thêm Hiện diện phong phú có thể tùy chỉnh hoàn toàn (Trạng thái trò chơi) vào hồ sơ Discord của bạn",
            goTo: "Đi tới {{portal}} để tạo ứng dụng và lấy ID ứng dụng.",
            upload: "Tải hình ảnh lên tab Hiện diện phong phú để nhận khóa hình ảnh.",
            image: "Nếu bạn muốn sử dụng liên kết hình ảnh, hãy tải xuống hình ảnh của bạn và tải lại hình ảnh lên {{imgur}} và lấy liên kết hình ảnh bằng cách nhấp chuột phải vào hình ảnh và chọn 'Sao chép địa chỉ hình ảnh'.",
            button: "Bạn không thể nhìn thấy các nút của riêng mình trên hồ sơ của mình nhưng những người khác vẫn có thể nhìn thấy chúng.",
            font: "Một số văn bản unicode kỳ lạ ('phông chữ' 𝖑𝖎𝖐𝖊 𝖙𝖍𝖎𝖘) có thể khiến sự hiện diện phong phú không hiển thị, thay vào đó hãy thử sử dụng các chữ cái bình thường.",
            placeholder: "Nhập một giá trị",
            select: "Chọn một tùy chọn",
            error: {
                appIdInvalid: "ID ứng dụng phải là số hợp lệ.",
                notice: "Để ý",
                sharing: "Chia sẻ hoạt động không được bật, mọi người sẽ không thể thấy sự hiện diện phong phú tùy chỉnh của bạn!",
                enable: "Cho phép",
                validStream: "Liên kết phát trực tuyến phải là một URL hợp lệ.",
                mustBeURL: "Phải là một URL hợp lệ.",
                streamCharacters: "Liên kết phát trực tuyến không được dài quá 512 ký tự.",
                dontUse: "Không sử dụng liên kết Discord. Thay vào đó hãy sử dụng liên kết hình ảnh Imgur.",
                imgur: "Liên kết Imgur phải là liên kết trực tiếp tới hình ảnh (ví dụ: https://i.imgur.com/...). Nhấp chuột phải vào hình ảnh và nhấp vào 'Sao chép địa chỉ hình ảnh'",
                tenor: "Liên kết tenor phải là liên kết trực tiếp tới hình ảnh (ví dụ: https://media.tenor.com/...). Nhấp chuột phải vào GIF và nhấp vào 'Sao chép địa chỉ hình ảnh'",
                required: "Trường này là bắt buộc.",
                tooLong: "Không được dài hơn {{maxLength}} ký tự.",
                mustBeNumber: "Phải là một con số.",
                mustBePositive: "Phải là số dương.",
                startTimeInvalid: "Dấu thời gian bắt đầu phải lớn hơn 0.",
                endTimeInvalid: "Dấu thời gian kết thúc phải lớn hơn 0."
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
                    description: "URL có thể nhấp chi tiết"
                },
                state: {
                    label: "Tình trạng",
                    description: "Bang (dòng 2)"
                },
                stateURL: {
                    label: "URL tiểu bang",
                    description: "Nêu rõ URL có thể nhấp"
                },
                partySize: {
                    label: "Quy mô bữa tiệc",
                    description: "Quy mô nhóm hiện tại (phải được sử dụng với Quy mô nhóm tối đa)"
                },
                partyMax: {
                    label: "Quy mô bữa tiệc tối đa",
                    description: "Quy mô nhóm tối đa (phải được sử dụng với Quy mô nhóm hiện tại)"
                },
                type: {
                    label: "Loại hoạt động",
                    description: "Loại hoạt động",
                    playing: "Đang chơi",
                    streaming: "Truyền phát",
                    listening: "Nghe",
                    watching: "Đang xem",
                    competing: "Cạnh tranh"
                },
                streamLink: {
                    label: "Liên kết luồng",
                    description: "Liên kết Twitch.tv hoặc YouTube.com (chỉ dành cho loại hoạt động Phát trực tuyến)"
                },
                timestampMode: {
                    label: "Chế độ dấu thời gian",
                    description: "Dấu thời gian sẽ hiển thị gì",
                    none: "Không có",
                    sinceDiscordOpen: "Kể từ khi Discord mở",
                    sameAsCurrentTime: "Giống như thời gian hiện tại của bạn (không được đặt lại sau 24h)",
                    custom: "Thời gian tùy chỉnh"
                },
                startTime: {
                    label: "Thời gian bắt đầu (tính bằng mili giây)",
                    description: "Dấu thời gian bắt đầu tính bằng mili giây (chỉ dành cho chế độ dấu thời gian tùy chỉnh)"
                },
                endTime: {
                    label: "Thời gian kết thúc (tính bằng mili giây)",
                    description: "Dấu thời gian kết thúc tính bằng mili giây (chỉ dành cho chế độ dấu thời gian tùy chỉnh)"
                },
                imageBig: {
                    label: "Khóa hình ảnh lớn",
                    description: "Key hình ảnh lớn (phải được tải lên trong tab Hiện diện phong phú)"
                },
                imageBigTooltip: {
                    label: "Chú giải công cụ lớn về hình ảnh",
                    description: "Chú giải công cụ hình ảnh lớn"
                },
                imageBigURL: {
                    label: "URL hình ảnh lớn",
                    description: "URL có thể nhấp vào hình ảnh lớn"
                },
                imageSmall: {
                    label: "Khóa hình ảnh nhỏ",
                    description: "Key hình ảnh nhỏ (phải được tải lên trong tab Hiện diện phong phú)"
                },
                imageSmallTooltip: {
                    label: "Chú giải công cụ nhỏ về hình ảnh",
                    description: "Chú giải công cụ hình ảnh nhỏ"
                },
                imageSmallURL: {
                    label: "URL hình ảnh nhỏ",
                    description: "URL có thể nhấp vào hình ảnh nhỏ"
                },
                buttonOneText: {
                    label: "Văn bản nút 1",
                    description: "Văn bản nút 1"
                },
                buttonOneURL: {
                    label: "URL của nút 1",
                    description: "URL của nút 1"
                },
                buttonTwoText: {
                    label: "Văn bản nút 2",
                    description: "Văn bản nút 2"
                },
                buttonTwoURL: {
                    label: "URL của nút 2",
                    description: "URL của nút 2"
                }
            }
        },
        customSounds: {
            name: "CustomSounds",
            description: "Tùy chỉnh âm thanh của Discord.",
            search: "Tìm kiếm âm thanh",
            placeholder: "Tìm kiếm theo tên hoặc ID",
            import: "Nhập khẩu",
            export: "Xuất khẩu",
            reset: "Đặt lại tất cả",
            debug: "Gỡ lỗi",
            toast: {
                error: "Lỗi tải tập tin âm thanh tùy chỉnh",
                exported: "Đã xuất cài đặt {{count}} (không bao gồm tệp âm thanh)",
                imported: "Cài đặt đã được nhập thành công",
                importError: "Lỗi khi nhập cài đặt. Kiểm tra bảng điều khiển để biết chi tiết.",
                reset: "Tất cả ghi đè được thiết lập lại thành công!",
                overrideDescription: "Ghi đè cho {{soundName}}",
                previewSound: "Lỗi phát âm thanh.",
                playing: "Lỗi phát âm thanh tùy chỉnh. Tập tin có thể bị hỏng.",
                invalidFile: "Không có tệp âm thanh tùy chỉnh nào có sẵn để xem trước",
                uploaded: "Tệp đã được tải lên thành công: {{fileName}}",
                uploadedError: "Lỗi tải tập tin lên: {{error}}",
                invalidExtension: "Loại tệp không hợp lệ. Vui lòng tải lên một tập tin âm thanh.",
                uploading: "Đang tải tệp lên...",
                deleted: "Đã xóa tệp thành công",
                deleteError: "Lỗi xóa tập tin.",
                loadingError: "Lỗi tải tập tin âm thanh tùy chỉnh"
            },
            button: {
                preview: "Xem trước",
                stop: "Dừng lại",
                volume: "Âm lượng",
                soundSource: "Nguồn âm thanh",
                customFile: "Tệp tùy chỉnh",
                uploadNew: "Tải lên mới",
                delete: "Xóa tệp đã chọn"
            },
            option: {
                default: "Mặc định",
                custom: "Phong tục",
                select: "Chọn một tập tin..."
            },
            type: {
                activityEnd: "Kết thúc hoạt động",
                activityLaunch: "Khởi động hoạt động",
                activityUserJoin: "Hoạt động Người dùng Tham gia",
                activityUserLeft: "Hoạt động của người dùng còn lại",
                asmrMessage: "Tin nhắn ASMR",
                bitMessage: "Tin nhắn bit",
                bopMessage: "Tin nhắn Bop",
                callCalling: "Gọi gọi",
                callRinging: "Đổ chuông cuộc gọi",
                clipError: "Lỗi clip",
                clipSave: "Lưu clip",
                ddrDown: "Giảm DDR",
                ddrLeft: "DDR trái",
                ddrRight: "DDR phải",
                ddrUp: "Tăng DDR",
                deafen: "Điếc",
                discodo: "sàn nhảy",
                disconnect: "Ngắt kết nối",
                duckyMessage: "Tin nhắn Ducky",
                hangStatusSelect: "Chọn trạng thái treo",
                highfiveClap: "Vỗ tay đập tay",
                highfiveWhistle: "tiếng huýt sáo",
                humanMan: "Con Người",
                lofiMessage: "Tin nhắn LoFi",
                mention1: "Đề cập đến 1 (@role)",
                mention2: "Đề cập đến 2 (@mọi người)",
                mention3: "Đề cập đến 3 (@here)",
                message1: "Tin nhắn 1 (Chung)",
                message2: "Tin nhắn 2 (Trả lời trên máy chủ)",
                message3: "Tin nhắn 3 (DM và DM nhóm)",
                mute: "Tắt tiếng",
                overlayUnlock: "Mở khóa lớp phủ",
                poggermodeAchievement: "Thành tích Poggermode",
                poggermodeApplause: "Tiếng vỗ tay của Poggermode",
                poggermodeEnabled: "Đã bật chế độ Pogger",
                poggermodeMessage: "Tin nhắn chế độ Pogger",
                pttStart: "Bắt đầu PTT",
                pttStop: "Dừng PTT",
                reconnect: "Kết nối lại",
                robotMan: "Người máy",
                stageWaiting: "Giai đoạn chờ đợi",
                streamEnded: "Luồng đã kết thúc",
                streamStarted: "Đã bắt đầu phát trực tuyến",
                streamUserJoined: "Người dùng phát trực tuyến đã tham gia",
                streamUserLeft: "Truyền trực tuyến người dùng còn lại",
                success: "Thành công",
                undeafen: "Undeafen",
                unmute: "Bật tiếng",
                userJoin: "Người dùng tham gia",
                userLeave: "Người dùng nghỉ phép",
                userMoved: "Người dùng đã di chuyển",
                vibingWumpus: "Vibing Wumpus"
            }
        },
        customTimestamps: {
            name: "CustomTimestamps",
            description: "Dấu thời gian tùy chỉnh trên tin nhắn và chú giải công cụ",
            demo: {
                cozy: "Nhấp vào tôi để chuyển sang định dạng Ấm cúng",
                compact: "Nhấp vào tôi để chuyển sang định dạng Nhỏ gọn",
                lastWeek: "Tin nhắn này đã được gửi vào tuần trước",
                hover: "Di chuột qua dấu thời gian để xem các định dạng chú giải công cụ",
                edit: "Chỉnh sửa các định dạng bên dưới để xem chúng cập nhật trực tiếp tại đây"
            },
            modal: {
                title: "Cách sử dụng:",
                moment: "Tài liệu định dạng Moment.js",
                hint: "Ngoài ra, bạn có thể sử dụng những thứ này trong đầu vào của mình:",
                calendar: "cho phép định dạng ngày động như",
                today: "Hôm nay",
                yesterday: "Hôm qua",
                relative: "mang lại cho bạn những thời điểm như",
                relativeTime: "4 giờ trước",
                preview: "Xem trước",
                format: "Định dạng lịch",
                howTo: "Cách định dạng giá trị [lịch] nếu được sử dụng trong các dấu thời gian trên."
            },
            option: {
                formats: {
                    label: "Định dạng",
                    description: "Tùy chỉnh các định dạng dấu thời gian",
                },
                cozyFormat: {
                    label: "Chế độ ấm cúng",
                    description: "Định dạng thời gian để sử dụng trong tin nhắn ở chế độ ấm cúng"
                },
                compactFormat: {
                    label: "Chế độ thu gọn",
                    description: "Định dạng thời gian ở chế độ thu gọn và di chuột qua tin nhắn"
                },
                tooltipFormat: {
                    label: "Chú giải công cụ",
                    description: "Định dạng thời gian để sử dụng trên chú giải công cụ"
                },
                ariaLabelFormat: {
                    label: "Nhãn Aria",
                    description: "Định dạng thời gian để sử dụng trên nhãn aria"
                },
                sameDayFormat: {
                    label: "Cùng ngày",
                    description: "[lịch] định dạng cho ngày hôm nay",
                    default: "[Hôm nay lúc] HH:mm:ss"
                },
                lastDayFormat: {
                    label: "Ngày cuối cùng",
                    description: "[lịch] định dạng cho ngày hôm qua",
                    default: "[Ngày hôm qua lúc] HH:mm:ss"
                },
                lastWeekFormat: {
                    label: "Tuần trước",
                    description: "định dạng [lịch] cho tuần trước"
                },
                sameElseFormat: {
                    label: "Cũ hơn",
                    description: "định dạng [lịch] cho ngày cũ hơn"
                }
            }
        },
        customUserColors: {
            name: "CustomUserColors",
            description: "Cho phép bạn thêm màu tùy chỉnh cho bất kỳ người dùng nào, ở bất cứ đâu! Rất khuyến khích sử dụng với TypingTweaks và roleColorEverywhere",
            option: {
                dmList: {
                    label: "Danh sách tin nhắn trực tiếp",
                    description: "Người dùng được xác định màu tùy chỉnh sẽ có tên trong danh sách DM được tô màu"
                },
                colorInServers: {
                    label: "Màu sắc trong máy chủ",
                    description: "Nếu màu tên nên được thay đổi trong máy chủ"
                }
            },
            context: {
                setColor: "Đặt màu"
            },
            modal: {
                custom: "Màu tùy chỉnh",
                pick: "Chọn một màu",
                delete: "Xóa mục nhập",
                save: "Cứu"
            }
        },
        dearrow: {
            name: "DeArrow",
            description: "Làm cho tiêu đề và hình thu nhỏ nhúng của YouTube bớt giật gân hơn, được cung cấp bởi DeArrow",
            option: {
                hideButton: {
                    label: "Nút Ẩn",
                    description: "Ẩn nút DeArrow khỏi nội dung nhúng trên YouTube"
                },
                replaceElements: {
                    label: "Thay thế phần tử",
                    description: "Chọn thành phần nào của phần nhúng sẽ được thay thế",
                    everything: "Mọi thứ (Tiêu đề & Hình thu nhỏ)",
                    title: "Tiêu đề",
                    thumbnail: "Hình thu nhỏ"
                },
                dearrowByDefault: {
                    label: "DeArrow theo mặc định",
                    description: "DeArrow video tự động"
                }
            },
            tooltip: {
                dearrowed: "Nội dung nhúng này đã được DeArrowed; bấm vào để khôi phục",
                dearrow: "Bấm vào DeArrow"
            }
        },
        declutter: {
            name: "Declutter",
            description: "Dọn dẹp Discord bằng cách xóa các thành phần UI không cần thiết như hiệu ứng hồ sơ, tab cửa hàng, tăng cường, v.v.",
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
                    description: "Loại bỏ các hiệu ứng hoạt hình hồ sơ khi mở."
                },
                removeClanTag: {
                    label: "Xóa thẻ bang hội",
                    description: "Xóa thẻ bang hội."
                },
                alwaysShowUsername: {
                    label: "Luôn hiển thị tên người dùng",
                    description: "Luôn hiển thị tên người dùng thay vì trạng thái."
                },
                accessibilityNotice: {
                    label: "Thông báo về khả năng tiếp cận",
                    description: "Discord đã có sẵn tùy chọn kiểu tên người dùng trong cài đặt Trợ năng."
                },
                friendsListHeader: {
                    label: "Trên danh sách bạn bè/DM"
                },
                removeShopAboveDM: {
                    label: "Xóa cửa hàng trên DM",
                    description: "Xóa các cửa hàng nằm trên danh sách DM."
                },
                removeQuestsAboveDM: {
                    label: "Xóa nhiệm vụ trên DM",
                    description: "Xóa các nhiệm vụ phía trên danh sách DM."
                },
                miscHeader: {
                    label: "linh tinh"
                },
                removeServerBoostInfo: {
                    label: "Xóa thông tin tăng cường máy chủ",
                    description: "Xóa thông tin tăng cường máy chủ phía trên danh sách kênh."
                },
                removeBillingSettings: {
                    label: "Xóa cài đặt thanh toán",
                    description: "Xóa cài đặt thanh toán."
                },
                removeGiftButton: {
                    label: "Nút xóa quà tặng",
                    description: "Tháo nút quà tặng."
                },
                removeUnavailableEmojiPicker: {
                    label: "Xóa Bộ chọn biểu tượng cảm xúc không có sẵn",
                    description: "Xóa các danh mục không có sẵn khỏi bộ chọn biểu tượng cảm xúc."
                },
                removeAudioMenus: {
                    label: "Xóa menu âm thanh",
                    description: "Loại bỏ các menu bên cạnh nút tắt tiếng và tắt tiếng."
                },
                removeButtonTooltips: {
                    label: "Xóa chú giải công cụ nút",
                    description: "Xóa chú giải công cụ nút."
                }
            }
        },
        decodeBase64: {
            name: "DecodeBase64",
            description: "Giải mã nội dung Base64 của bất kỳ tin nhắn nào và sao chép nội dung được giải mã.",
            right: {
                decode: "Sao chép Đã giải mã (Click chuột trái) / Giải mã Base64 (Click chuột phải)",
                copy: "Giải mã Base64 (Click chuột trái) / Sao chép được giải mã (Click chuột phải)"
            },
            option: {
                clickMethod: {
                    label: "Bấm vào phương pháp",
                    description: "Thay đổi nút để giải mã nội dung Base64 của bất kỳ tin nhắn nào.",
                    left: "Nhấn chuột trái để giải mã nội dung Base64.",
                    right: "Nhấp chuột phải để giải mã nội dung Base64."
                }
            },
            modal: {
                title: "Nội dung Base64 được giải mã",
                content: "Nội dung được giải mã",
                copy: "Sao chép nội dung đã giải mã {{index}}",
                copied: "Nội dung được giải mã được sao chép vào clipboard!"
            }
        },
        decor: {
            name: "Decor",
            description: "Tạo và sử dụng trang trí hình đại diện tùy chỉnh của riêng bạn hoặc chọn mục yêu thích của bạn từ các cài đặt trước.",
            presetPart: "Một phần của cài đặt sẵn {{name}}",
            createdBy: "Được tạo bởi {{author}}",
            copy: "Sao chép ID đặt trước",
            file: "Tài liệu",
            your: {
                title: "Đồ trang trí của bạn",
                subtitle: "Bạn có thể xóa đồ trang trí của riêng mình bằng cách nhấp chuột phải vào chúng."
            },
            option: {
                changeDecoration: {
                    label: "Thay đổi trang trí",
                    description: "Bật Trang trí và khởi động lại ứng dụng khách của bạn để thay đổi trang trí hình đại diện của bạn.",
                    also: "Bạn cũng có thể truy cập trang trí Trang trí từ trang {{profiles}}.",
                    profiles: "Hồ sơ"
                },
                baseUrl: {
                    label: "URL cơ sở",
                    description: "URL API trang trí"
                },
                agreedToGuidelines: {
                    label: "Đồng ý với Nguyên tắc",
                    description: "Đồng ý với hướng dẫn"
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
                    body: "Bạn có chắc chắn muốn xóa {{decoration}} không?",
                    confirm: "Xóa bỏ",
                    cancel: "Hủy bỏ"
                },
                logout: {
                    title: "Đăng xuất",
                    body: "Bạn có chắc chắn muốn đăng xuất khỏi Decor không?",
                    confirm: "Đăng xuất",
                    cancel: "Hủy bỏ"
                }
            },
            button: {
                change: "Thay đổi trang trí",
                remove: "Xóa trang trí",
                apply: "Áp dụng",
                cancel: "Hủy bỏ",
                browse: "Duyệt qua",
                submit: "Gửi để xem xét",
                continue: "Tiếp tục",
                back: "Quay lại"
            },
            tooltip: {
                pendingReview: "Bạn đã có một đồ trang trí đang chờ xem xét",
                pending: "Đang chờ xem xét"
            },
            join: {
                tooltip: "Tham gia máy chủ Discord của Decor để nhận thông báo về đánh giá trang trí của bạn và khi các cài đặt trước mới được phát hành",
                button: "Máy chủ bất hòa"
            },
            create: {
                title: "Tạo trang trí",
                notViolate: "Đảm bảo trang trí của bạn không vi phạm {{guidelines}} trước khi gửi.",
                guidelines: "các hướng dẫn",
                file: "Tệp phải là PNG hoặc PNG.",
                fileHolder: "Chọn một tập tin",
                name: "This name will be used when referring to this decoration.",
                nameHolder: "Khối đồng hành",
                nameTitle: "Tên"
            },
            help: {
                update: "Để nhận thông tin cập nhật về bài đánh giá trang trí của bạn, hãy tham gia {{server}} và cho phép nhắn tin trực tiếp.",
                server: "Máy chủ Discord của Decor"
            },
            guidelines: {
                hold: "Giữ lấy",
                suspended: "Bằng cách gửi đồ trang trí, bạn đồng ý với {{guidelines}}. Việc không đọc những nguyên tắc này có thể khiến tài khoản của bạn bị đình chỉ tạo thêm đồ trang trí trong tương lai.",
                guidelines: "các hướng dẫn"
            }
        },
        demonstration: {
            name: "Demonstration",
            description: "Plugin chụp ảnh màn hình chủ đề - người kiểm duyệt xác định hình ảnh và văn bản.",
            toolbox: {
                toggle: "Chuyển đổi trình diễn"
            },
            keycode: "Để thay đổi mã khóa của bạn, hãy xem {{keycode}}!",
            this: "công cụ này",
            okay: "Được rồi!",
            option: {
                keyBind: {
                    label: "Liên kết khóa",
                    description: "Phím chuyển đổi chủ đề khi nhấn"
                },
                soundVolume: {
                    label: "Âm lượng",
                    description: "Âm thanh chuyển đổi lớn đến mức nào (0 để tắt)"
                },
                showConfirmationModal: {
                    label: "Hiển thị phương thức xác nhận",
                    description: "Hiển thị một phương thức để nhắc bạn về phím tắt"
                }
            },
            switch: {
                note: "Bạn có thể bật lại cài đặt này sau",
                disable: "Vô hiệu hóa phương thức?"
            },
            shortcut: "Điều này sẽ kiểm duyệt tất cả văn bản! Để tắt tính năng này, hãy nhớ phím tắt:"
        },
        devCompanion: {
            name: "DevCompanion",
            description: "Plugin đồng hành của Dev. Vui lòng báo cáo bất kỳ điều gì không hoạt động hoặc hoạt động kỳ lạ (rất có thể là lỗi) cho MutanPlex, bằng ping hoặc DM. Cảm ơn!",
            reconnect: "Kết nối lại",
            option: {
                notifyOnAutoConnect: {
                    label: "Thông báo về Tự động kết nối",
                    description: "Có thông báo khi Dev Companion tự động kết nối hay không."
                },
                usePatchedModule: {
                    label: "Sử dụng mô-đun đã vá",
                    description: "Đối với các yêu cầu giải nén, hãy trả lời bằng mô-đun đã vá hiện tại (nếu nó được vá) thay vì mô-đun gốc."
                },
                reloadAfterToggle: {
                    label: "Tải lại sau khi chuyển đổi",
                    description: "Tải lại sau khi nhận được lệnh 'tắt/bật plugin'."
                }
            },
            toast: {
                title: "Đã kết nối đồng hành với nhà phát triển",
                connected: "Đã kết nối với WebSocket",
                disconnected: "Đồng hành Dev bị ngắt kết nối",
                error: "Lỗi đồng hành với Dev",
                reload: "Cần tải lại",
                failed: "Không khởi động được phần phụ thuộc: {{failures}}",
                close: "Đóng",
                stopping: "Lỗi khi dừng plugin {{plugin}}",
                starting: "Lỗi khi khởi động plugin {{plugin}}",
                noMessage: "Không có thông báo lỗi",
                noReason: "Không có lý do nào được cung cấp"
            }
        },
        disableCallIdle: {
            name: "DisableCallIdle",
            description: "Tắt tính năng tự động bị loại khỏi cuộc gọi thoại DM sau 3 phút và được chuyển sang kênh thoại AFK."
        },
        disableCameras: {
            name: "DisableCameras",
            description: "Theo mặc định, tắt camera trong cuộc gọi"
        },
        discordDevBanner: {
            name: "DiscordDevBanner",
            description: "Bật biểu ngữ nhà phát triển Discord, hiển thị ID bản dựng",
            about: "Định dạng cho Discord Dev Banner. Bạn có thể sử dụng các biến sau:",
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
                    name: "Name of Plexcord",
                    version: "Phiên bản Plexcord (ví dụ: 1.0.0)",
                    hash: "Băm xây dựng Plexcord (ví dụ: 123456)",
                    platform: "Nền tảng Plexcord đang chạy (ví dụ: Dev Build)"
                },
                plextron: {
                    title: "Các biến cụ thể của Plextron",
                    hashShort: "Hàm băm xây dựng Plextron (ví dụ: 123456789)",
                    platformType: "Nền tảng Plextron đang chạy (ví dụ: Dev Build)"
                },
                client: {
                    title: "Biến khách hàng",
                    icon: "Biểu tượng trên màn hình",
                    name: "The name of the client (e.g. Discord Canary)",
                    version: "Phiên bản của máy khách (ví dụ: 1.0.0)",
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
                    newline: "Ký tự dòng mới"
                }
            }
        },
        dontFilterMe: {
            name: "DontFilterMe",
            description: "Cảnh báo bạn nếu tin nhắn của bạn chứa một thuật ngữ trong danh sách cài sẵn AutoMod",
            alert: {
                title: "Giữ lấy!",
                content: "Tin nhắn của bạn chứa một thuật ngữ trong danh sách cài sẵn AutoMod (Thuật ngữ: '{{trigger}}').",
                content2: "Có khả năng cao thư của bạn sẽ bị người kiểm duyệt máy chủ chặn và có thể kiểm duyệt.",
                confirm: "Vẫn gửi",
                cancel: "Hủy bỏ"
            }
        },
        dontRoundMyTimestamps: {
            name: "DontRoundMyTimestamps",
            description: "Luôn làm tròn dấu thời gian tương đối xuống, do đó 7,6y trở thành 7y thay vì 8y"
        },
        dragFavoriteEmotes: {
            name: "DragFavoriteEmotes",
            description: "Thêm chức năng kéo và thả vào các biểu tượng cảm xúc yêu thích"
        },
        dragify: {
            name: "Dragify",
            description: "Đưa người dùng, kênh hoặc máy chủ vào cuộc trò chuyện để chèn đề cập hoặc lời mời.",
            option: {
                userOutput: {
                    label: "Đầu ra của người dùng",
                    description: "Người dùng thả đầu ra.",
                    mention: "Đề cập đến",
                    id: "ID người dùng"
                },
                channelOutput: {
                    label: "Đầu ra kênh",
                    description: "Đầu ra giảm kênh.",
                    mention: "#channel Đề cập",
                    link: "Liên kết kênh",
                },
                inviteExpireAfter: {
                    label: "Lời mời hết hạn sau",
                    description: "Lời mời hết hạn",
                    never: "Không bao giờ",
                    thirtyMinutes: "30 phút",
                    oneHour: "1 giờ",
                    sixHours: "6 giờ",
                    twelveHours: "12 giờ",
                    oneDay: "1 ngày",
                    sevenDays: "7 ngày"
                },
                inviteMaxUses: {
                    label: "Mời sử dụng tối đa",
                    description: "Số lần sử dụng tối đa cho lời mời",
                    noLimit: "Không giới hạn",
                    one: "1 lần sử dụng",
                    five: "5 công dụng",
                    ten: "10 công dụng",
                    twentyFive: "25 công dụng",
                    fifty: "50 công dụng",
                    hundred: "100 công dụng"
                },
                inviteTemporaryMembership: {
                    label: "Mời thành viên tạm thời",
                    description: "Cấp thành viên tạm thời.",
                },
                reuseExistingInvites: {
                    label: "Sử dụng lại lời mời hiện có",
                    description: "Sử dụng lại lời mời hiện có thay vì tạo lời mời mới."
                },
                allowChatBodyDrop: {
                    label: "Cho phép thả nội dung trò chuyện",
                    description: "Cho phép thả vào nội dung trò chuyện chính để chèn văn bản."
                }
            },
            toast: {
                failed: {
                    drop: "Kéo không thể xử lý thả.",
                },
                invite: {
                    created: "Đã tạo lời mời.",
                    unable: "Không thể tạo lời mời.",
                    noChannel: "Không có kênh nào có sẵn cho lời mời.",
                }
            },
            ghost: {
                user: "người dùng",
                server: "Máy chủ",
                dm: "Tin nhắn trực tiếp",
                badge: {
                    channel: "kênh",
                    thread: "chủ đề",
                    voice: "tiếng nói",
                    forum: "diễn đàn",
                    media: "phương tiện truyền thông",
                    announcement: "thông báo",
                    dm: "dm",
                    user: "người dùng",
                    server: "máy chủ"
                }
            }
        },
        elementHighlighter: {
            name: "ElementHighlighter",
            description: "Làm nổi bật và kiểm tra các yếu tố một cách dễ dàng.",
            modal: {
                recording: "Đang ghi...",
                reset: "Cài lại"
            },
            option: {
                keybind: {
                    label: "Liên kết khóa",
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
                    description: "Hiển thị họ phông chữ và kích thước phông chữ được tính toán"
                },
                showPadding: {
                    label: "Hiển thị phần đệm",
                    description: "Hiển thị giá trị đệm của phần tử"
                },
                showMargin: {
                    label: "Hiển thị ký quỹ",
                    description: "Hiển thị giá trị lề của phần tử"
                },
                showBorderRadius: {
                    label: "Hiển thị bán kính đường viền",
                    description: "Hiển thị giá trị bán kính đường viền của phần tử"
                },
                showPosition: {
                    label: "Hiển thị vị trí",
                    description: "Hiển thị loại vị trí CSS và chỉ mục z của phần tử"
                },
                showDisplay: {
                    label: "Hiển thị màn hình",
                    description: "Hiển thị kiểu hiển thị của phần tử cùng với thuộc tính flex hoặc lưới"
                }
            },
            toast: {
                copied: {
                    color: "Đã sao chép màu vào clipboard!",
                }
            }
        },
        exitSounds: {
            name: "ExitSounds",
            description: "Phát âm thanh soundboard khi bạn ngắt kết nối với giọng nói.",
            button: "Đặt làm âm thanh thoát chung",
            toast: {
                failedToPlay: "Ối! Đã xảy ra lỗi."
            },
            option: {
                soundGuildId: {
                    label: "ID hội âm thanh",
                    description: "Chọn máy chủ chứa âm thanh.",
                    placeholder: "Chọn máy chủ..."
                },
                soundId: {
                    label: "ID âm thanh",
                    description: "Nhập ID của âm thanh bạn muốn phát.",
                    placeholder: "Nhập ID âm thanh..."
                }
            }
        },
        experiments: {
            name: "Experiments",
            description: "Cho phép truy cập vào các thử nghiệm và các tính năng khác chỉ dành cho nhà phát triển trong Discord!",
            modal: {
                about: {
                    title: "Thêm thông tin",
                    body: "Bạn có thể mở DevTools của Discord thông qua {{key}}"
                },
                warning: {
                    title: "Giữ lấy!!",
                    body: "Thử nghiệm là các tính năng Discord chưa được phát hành. Chúng có thể không hoạt động hoặc thậm chí làm hỏng ứng dụng khách của bạn hoặc khiến tài khoản của bạn bị vô hiệu hóa.",
                    notReponsible: "Chỉ sử dụng các thử nghiệm nếu bạn biết mình đang làm gì. Plexcord không chịu trách nhiệm về bất kỳ thiệt hại nào do việc kích hoạt thử nghiệm gây ra.",
                    useAtOwnRisk: "Nếu bạn không biết thử nghiệm làm gì, hãy bỏ qua nó. Đừng hỏi chúng tôi thí nghiệm làm gì; có lẽ chúng ta không biết.",
                    serverSideFeatures: "Không, bạn không thể sử dụng các tính năng phía máy chủ như đánh dấu vào ô 'Gửi cho Khách hàng'."
                }
            },
            option: {
                toolbarDevMenu: {
                    label: "Menu phát triển của thanh công cụ",
                    description: "Thay đổi nút thanh công cụ Trợ giúp (?) (trên cùng bên phải trong trò chuyện) thành menu nhà phát triển của Discord"
                }
            }
        },
        exportMessages: {
            name: "ExportMessages",
            description: "Cho phép bạn xuất tin nhắn thành tệp - tin nhắn đơn lẻ, tất cả tin nhắn từ người dùng hoặc tất cả tin nhắn kênh",
            option: {
                maxMessages: {
                    label: "Tin nhắn tối đa",
                    description: "Số lượng tin nhắn tối đa để xuất (0 = không giới hạn)"
                },
                includeAttachments: {
                    label: "Bao gồm tệp đính kèm",
                    description: "Bao gồm thông tin đính kèm trong xuất khẩu"
                },
                includeEmbeds: {
                    label: "Bao gồm nhúng",
                    description: "Bao gồm thông tin nhúng trong xuất khẩu"
                },
                includeReactions: {
                    label: "Bao gồm các phản ứng",
                    description: "Bao gồm thông tin phản ứng trong xuất khẩu"
                },
                includeComponents: {
                    label: "Bao gồm các thành phần",
                    description: "Bao gồm thông tin thành phần trong xuất khẩu"
                }
            },
            message: {
                invalid: "Tin nhắn không hợp lệ - không có tác giả",
                unknownUser: "Người dùng không xác định",
                botEmbed: "Tin nhắn nhúng Bot",
                attachments: "Tệp đính kèm",
                unknown: "Không xác định",
                noUrl: "Không có URL",
                embeds: "Nhúng",
                title: "Tiêu đề",
                description: "Sự miêu tả",
                url: "URL",
                footer: "Chân trang",
                author: "Tác giả",
                fields: "Trường",
                components: "Linh kiện",
                component: "Thành phần",
                interactiveElement: "Yếu tố tương tác",
                reactions: "phản ứng",
                errorFormatting: "Thông báo lỗi định dạng",
                unknownError: "Lỗi không xác định",
                header: "{{titlePrefix}} {{displayName}} trong {{channelName}}",
                from: "Tin nhắn từ",
                direct: "Tin nhắn trực tiếp",
                exported: "Xuất trên",
                total: "Tổng số tin nhắn"
            },
            toast: {
                export: {
                    title: "Xuất tin nhắn",
                    body: "Không xuất được tin nhắn"
                },
                noMessages: {
                    title: "Xuất tin nhắn",
                    notFoundUser: "Không tìm thấy tin nhắn từ người dùng này trong kênh này",
                    notFoundChannel: "Không tìm thấy tin nhắn nào trong kênh này"
                },
                failed: {
                    title: "Xuất tin nhắn",
                    body: "Không thể xuất tin nhắn"
                },
                userNotFound: {
                    title: "Xuất tin nhắn",
                    body: "Không tìm thấy người dùng"
                },
                complete: {
                    title: "Xuất hoàn tất",
                    saved: "Đã lưu tệp",
                    downloaded: "Tệp đã tải xuống",
                    messages: "tin nhắn"
                }
            },
            context: {
                exportMessage: "Xuất tin nhắn này",
                exportAll: "Xuất tất cả tin nhắn từ {{user}}",
                user: "người dùng",
                exportAllChannel: "Xuất tất cả tin nhắn kênh"
            }
        },
        expressionCloner: {
            name: "ExpressionCloner",
            description: "Cho phép bạn sao chép biểu tượng cảm xúc và nhãn dán vào máy chủ của riêng bạn (nhấp chuột phải vào chúng)",
            modal: {
                title: "Tên tùy chỉnh",
                invalidName: "Tên phải dài từ 2 đến 32 ký tự và chỉ chứa các ký tự chữ và số"
            },
            toast: {
                success: "Đã sao chép thành công {{name}} thành {{guild}}!",
                yourServer: "máy chủ của bạn",
                failed: "Không sao chép được:",
                console: "Đã xảy ra lỗi (kiểm tra bảng điều khiển!)"
            },
            context: {
                clone: "Nhân bản {{type}}",
                cloneName: "Nhân bản {{data}}"
            }
        },
        f8break: {
            name: "F8Break",
            description: "Tạm dừng ứng dụng khách khi bạn nhấn F8 khi đang mở DevTools (+ điểm dừng)."
        },
        fakeNitro: {
            name: "FakeNitro",
            description: "Cho phép bạn gửi biểu tượng cảm xúc/nhãn dán giả, sử dụng chủ đề Nitro và phát trực tuyến ở chất lượng Nitro",
            option: {
                enableEmojiBypass: {
                    label: "Bật bỏ qua biểu tượng cảm xúc",
                    description: "Cho phép gửi biểu tượng cảm xúc giả (cũng bỏ qua việc thiếu quyền sử dụng biểu tượng cảm xúc tùy chỉnh)"
                },
                emojiSize: {
                    label: "Kích thước biểu tượng cảm xúc",
                    description: "Kích thước của biểu tượng cảm xúc khi gửi"
                },
                transformEmojis: {
                    label: "Biến đổi biểu tượng cảm xúc",
                    description: "Có nên biến biểu tượng cảm xúc giả thành biểu tượng cảm xúc thật hay không"
                },
                enableStickerBypass: {
                    label: "Bật bỏ qua nhãn dán",
                    description: "Cho phép gửi nhãn dán giả (cũng bỏ qua việc thiếu quyền sử dụng nhãn dán)"
                },
                stickerSize: {
                    label: "Kích thước nhãn dán",
                    description: "Kích thước của nhãn dán khi gửi"
                },
                transformStickers: {
                    label: "Nhãn dán biến đổi",
                    description: "Có nên biến nhãn dán giả thành nhãn dán thật không"
                },
                transformCompoundSentence: {
                    label: "Chuyển đổi câu ghép",
                    description: "Có chuyển đổi nhãn dán và biểu tượng cảm xúc giả thành câu ghép hay không (các câu có nhiều nội dung hơn chỉ là liên kết biểu tượng cảm xúc hoặc nhãn dán giả)"
                },
                enableStreamQualityBypass: {
                    label: "Bật bỏ qua chất lượng luồng",
                    description: "Cho phép phát trực tuyến ở chất lượng Nitro"
                },
                useStickerHyperLinks: {
                    label: "Sử dụng siêu liên kết nhãn dán",
                    description: "Có nên sử dụng siêu liên kết khi gửi nhãn dán giả mạo hay không"
                },
                useEmojiHyperLinks: {
                    label: "Sử dụng siêu liên kết biểu tượng cảm xúc",
                    description: "Có nên sử dụng siêu liên kết khi gửi biểu tượng cảm xúc giả mạo hay không"
                },
                hyperLinkText: {
                    label: "Văn bản siêu liên kết",
                    description: "Văn bản nào siêu liên kết nên sử dụng. {{NAME}} sẽ được thay thế bằng tên biểu tượng cảm xúc/nhãn dán."
                },
                disableEmbedPermissionCheck: {
                    label: "Tắt kiểm tra quyền nhúng",
                    description: "Có tắt tính năng kiểm tra quyền nhúng khi gửi biểu tượng cảm xúc và nhãn dán giả hay không"
                }
            },
            modal: {
                sticker: "Đây là nhãn dán FakeNitro và hiển thị giống như nhãn dán thực sự chỉ dành cho bạn. Xuất hiện dưới dạng liên kết tới người dùng không sử dụng plugin.",
                emoji: "Đây là biểu tượng cảm xúc FakeNitro và hiển thị giống như biểu tượng cảm xúc thực sự chỉ dành cho bạn. Xuất hiện dưới dạng liên kết tới người dùng không sử dụng plugin."
            },
            alert: {
                notice: {
                    title: "Giữ lấy!",
                    body: "Bạn đang cố gắng gửi/chỉnh sửa tin nhắn có chứa biểu tượng cảm xúc hoặc nhãn dán FakeNitro; tuy nhiên, bạn không có quyền nhúng liên kết vào kênh hiện tại. Bạn có chắc chắn muốn gửi tin nhắn này? Các mục FakeNitro của bạn sẽ chỉ xuất hiện dưới dạng liên kết.",
                    footer: "Bạn có thể tắt cảnh báo này trong cài đặt FakeNitro",
                    confirm: "Vẫn gửi",
                    cancel: "Hủy bỏ",
                    secondaryConfirm: "Không hiển thị lại"
                },
                apngSticker: {
                    title: "Giữ lấy!",
                    body: "Bạn không thể gửi tin nhắn này vì nó chứa nhãn dán FakeNitro hoạt hình và bạn không có quyền đính kèm tệp trong kênh hiện tại. Vui lòng gỡ nhãn dán để tiếp tục."
                }
            }
        },
        fakeProfileThemes: {
            name: "FakeProfileThemes",
            description: "Cho phép tạo chủ đề hồ sơ bằng cách ẩn màu sắc trong tiểu sử của bạn nhờ mã hóa 3y3 vô hình",
            button: {
                copy: "Sao chép 3y3"
            },
            modal: {
                usage: "Cách sử dụng",
                preview: "Xem trước",
                intro: "Sau khi kích hoạt plugin này, bạn sẽ thấy màu tùy chỉnh trong hồ sơ của những người khác sử dụng plugin tương thích.",
                setColor: "Để thiết lập màu sắc của riêng bạn:",
                step1: "• Sử dụng công cụ chọn màu bên dưới để chọn màu của bạn",
                step2: "• Nhấp vào nút {{copy}}",
                step3: "• Dán văn bản vô hình vào bất cứ đâu trong tiểu sử của bạn",
                pickers: "Bộ chọn màu",
                primary: "Sơ đẳng",
                accent: "Giọng"
            },
            option: {
                nitroFirst: {
                    label: "Nitro đầu tiên",
                    description: "Nguồn màu mặc định nếu có cả hai",
                    nitro: "Màu nitơ",
                    fake: "Màu giả"
                }
            }
        },
        fakeProfileThemesAndEffects: {
            name: "FakeProfileThemesAndEffects",
            description: "Cho phép tạo chủ đề hồ sơ và hiệu ứng hồ sơ bằng cách ẩn màu sắc và hiệu ứng trong tiểu sử của bạn nhờ mã hóa 3y3 vô hình",
            option: {
                prioritizeNitro: {
                    label: "Ưu tiên Nitro",
                    description: "Nguồn ưu tiên",
                    nitro: "Nitơ",
                    aboutMe: "Giới thiệu về tôi"
                },
                hideBuilder: {
                    label: "Ẩn Trình tạo",
                    description: "Ẩn FPTE Builder trong trang cài đặt Hồ sơ người dùng và Hồ sơ máy chủ"
                }
            },
            modal: {
                primary: "Sơ đẳng",
                accent: "Giọng",
                effect: "Tác dụng",
                usage: {
                    title: "Cách sử dụng",
                    intro: "Sau khi kích hoạt plugin này, bạn sẽ thấy màu sắc và hiệu ứng chủ đề tùy chỉnh trong hồ sơ của những người khác sử dụng plugin này.",
                    setColor: "Để đặt màu sắc và hiệu ứng của riêng bạn:",
                    step1: "Đi tới cài đặt hồ sơ của bạn",
                    step2: "Sử dụng FPTE Builder để chọn màu sắc và hiệu ứng chủ đề hồ sơ của bạn",
                    step3: "Nhấp vào nút {{copy}}",
                    step4: "Dán văn bản vô hình vào bất cứ đâu trong tiểu sử của bạn"
                }
            },
            toast: {
                copied: "FPTE đã sao chép vào clipboard!",
                empty: "FPTE Builder trống; không có gì để sao chép!"
            },
            button: {
                copyFPTE: "Sao chép FPTE",
                reset: "Cài lại",
                preview: "Bản xem trước của FPTE Builder",
                buildBackwards: "Xây dựng FPTE tương thích ngược",
                moreCharacters: "Sẽ sử dụng nhiều ký tự hơn"
            }
        },
        fastDeleteChannels: {
            name: "FastDeleteChannels",
            description: "Thêm biểu tượng thùng rác để xóa kênh",
            option: {
                keyBind: {
                    label: "Liên kết khóa",
                    description: "Phím chuyển đổi thùng rác khi nhấn."
                },
                reqCtrl: {
                    label: "Yêu cầu kiểm soát",
                    description: "Yêu cầu giữ phím Control."
                },
                reqShift: {
                    label: "Yêu cầu Ca",
                    description: "Yêu cầu giữ phím Shift."
                },
                reqAlt: {
                    label: "Yêu cầu Alt",
                    description: "Yêu cầu giữ phím Alt."
                }
            }
        },
        favoriteEmojiFirst: {
            name: "FavouriteEmojiFirst",
            description: "Đặt biểu tượng cảm xúc yêu thích của bạn lên hàng đầu trong tính năng tự động hoàn thành biểu tượng cảm xúc và cũng cung cấp bí danh biểu tượng cảm xúc.",
            option: {
                aliases: {
                    label: "Bí danh",
                    description: "Quản lý bí danh biểu tượng cảm xúc của bạn."
                },
                clearAll: {
                    label: "Xóa tất cả",
                    description: "Xóa tất cả bí danh."
                }
            },
            modal: {
                clear: {
                    title: "Xóa tất cả bí danh",
                    description: "Thao tác này sẽ xóa mọi bí danh biểu tượng cảm xúc mà bạn đã lưu.",
                    confirm: "Xóa tất cả bí danh"
                },
                set: {
                    title: "Đặt bí danh",
                    description: "Đặt bí danh cho {{emoji}}",
                    placeholder: "Bí danh, ví dụ: 'vui mừng'",
                    save: "Cứu",
                    error: "Bí danh trùng lặp"
                }
            },
            toast: {
                set: "Bí danh được đặt cho {{emoji}}",
                clearAll: "Đã xóa tất cả bí danh biểu tượng cảm xúc",
                failedDeleted: "Không thể xóa bí danh",
                removed: "Bí danh đã xóa: {{alias}}",
                failedRemove: "Không xóa được bí danh",
                duplicate: "Bí danh trùng lặp",
                failedSave: "Không lưu được bí danh."
            },
            button: {
                edit: "Chỉnh sửa bí danh",
                set: "Đặt bí danh"
            }
        },
        favoriteGifSearch: {
            name: "FavouriteGifSearch",
            description: "Thêm thanh tìm kiếm vào ảnh GIF yêu thích.",
            placeholder: "Tìm kiếm ảnh GIF yêu thích",
            option: {
                searchOption: {
                    label: "Tùy chọn tìm kiếm",
                    description: "Phần URL bạn muốn tìm kiếm",
                    url: "Toàn bộ URL",
                    path: "Chỉ đường dẫn (/somegif.gif)",
                    hostandpath: "Máy chủ & Đường dẫn (tenor.com somgif.gif)"
                }
            }
        },
        favouriteAnything: {
            name: "FavouriteAnything",
            description: "Yêu thích bất kỳ hình ảnh"
        },
        fileDownloadButton: {
            name: "FileDownloadButton",
            description: "Thêm nút Tải xuống vào góc trên cùng bên phải của tệp"
        },
        findReply: {
            name: "FindReply",
            description: "Chuyển tới câu trả lời sớm nhất cho tin nhắn trong một kênh (cho phép bạn theo dõi các cuộc hội thoại trước đây dễ dàng hơn).",
            context: {
                jump: "Chuyển đến Trả lời"
            },
            toast: {
                navigate: "Sử dụng bảng điều khiển phía dưới để điều hướng giữa các câu trả lời.",
                container: "Không thể tìm thấy phần tử vùng chứa.",
                couldntFind: "Không thể tìm thấy tin nhắn trả lời."
            },
            option: {
                includePings: {
                    label: "Bao gồm Ping",
                    description: "Cũng sẽ tìm kiếm các tin nhắn mà @ tác giả trực tiếp"
                },
                includeAuthor: {
                    label: "Bao gồm tác giả",
                    description: "Cũng sẽ tìm kiếm những tin nhắn trả lời tác giả nói chung chứ không chỉ chính xác tin nhắn đó"
                },
                hideButtonIfNoReply: {
                    label: "Nút Ẩn Nếu Không Trả Lời",
                    description: "Ẩn nút nếu không có phản hồi cho tin nhắn"
                }
            }
        },
        fixCodeblockGap: {
            name: "FixCodeblockGap",
            description: "Loại bỏ khoảng cách giữa các khối mã và văn bản bên dưới chúng"
        },
        fixFileExtensions: {
            name: "FixFileExtensions",
            description: "Sửa các phần mở rộng tệp bằng cách đổi tên chúng thành định dạng được hỗ trợ tương thích nếu có thể"
        },
        fixImagesQuality: {
            name: "FixImagesQuality",
            description: "Cải thiện chất lượng hình ảnh bằng cách buộc sử dụng nguồn gốc",
            option: {
                originalImagesInChat: {
                    label: "Hình ảnh gốc trong trò chuyện",
                    description: "Đồng thời tải hình ảnh gốc trong trò chuyện. CẢNH BÁO: Đọc lưu ý ở trên"
                }
            },
            modal: {
                about: {
                    title: "Hành vi mặc định là như sau:",
                    body: "— Trong trò chuyện, hình ảnh được tối ưu hóa nhưng có độ phân giải đầy đủ sẽ được tải.",
                    body2: "— Ở chế độ hình ảnh, hình ảnh gốc sẽ được tải.",
                    body3: "Bạn cũng có thể bật hình ảnh gốc trong cuộc trò chuyện nhưng hãy cẩn thận với những lưu ý sau:",
                    warning: "— Hình ảnh động (GIF, WebP, v.v.) trong trò chuyện sẽ luôn hoạt hình, bất kể ứng dụng có được tập trung hay không.",
                    warning2: "- Có thể gây lag.",
                }
            }
        },
        fixSpotifyEmbeds: {
            name: "FixSpotifyEmbeds",
            description: "Khắc phục lỗi nhúng Spotify quá to bằng cách cho phép bạn tùy chỉnh âm lượng",
            option: {
                volume: {
                    label: "Âm lượng",
                    description: "% âm lượng cần đặt cho nội dung nhúng Spotify. Bất cứ điều gì trên 10% đều rất ồn ào"
                }
            }
        },
        fixYoutubeEmbeds: {
            name: "FixYoutubeEmbeds",
            description: "Bỏ qua các video YouTube bị chặn hiển thị trên Discord (ví dụ: bởi UMG)"
        },
        followUser: {
            name: "FollowUser",
            description: "Thêm tùy chọn Theo dõi trong menu ngữ cảnh của người dùng để luôn ở cùng một VC với họ",
            indicatorTooltip: "Đang theo dõi {{user}} (nhấp để kích hoạt thủ công, nhấp chuột phải để hủy theo dõi)",
            unknownUser: "Người dùng không xác định",
            option: {
                executeOnFollow: {
                    label: "Thực hiện theo dõi",
                    description: "Đảm bảo ở cùng một VC khi theo dõi người dùng"
                },
                onlyManualTrigger: {
                    label: "Chỉ kích hoạt thủ công",
                    description: "Chỉ kích hoạt khi nhấp vào chỉ báo"
                },
                followLeave: {
                    label: "Theo dõi",
                    description: "Cũng rời đi khi người dùng được theo dõi rời đi"
                },
                autoMoveBack: {
                    label: "Tự động di chuyển trở lại",
                    description: "Tự động quay lại VC của người dùng được theo dõi khi bạn di chuyển"
                },
                followUserId: {
                    label: "Theo dõi ID người dùng",
                    description: "ID người dùng đã theo dõi"
                },
                channelFull: {
                    label: "Kênh đầy đủ",
                    description: "Cố gắng chuyển bạn đến kênh khi kênh không còn đầy"
                }
            },
            toast: {
                channelFull: "Kênh đã đầy",
                newVc: "Người dùng đã theo dõi vào kênh thoại mới",
                insufficientPermissions: "Không đủ quyền để vào kênh thoại",
                sameVc: "Bạn đã ở trong cùng một kênh",
                disconnect: "Người dùng đã theo dõi còn lại; bị ngắt kết nối",
                notFollowing: "Người dùng đã theo dõi đã rời đi nhưng không theo dõi và ngắt kết nối",
                notVc: "Người dùng được theo dõi không ở trong kênh thoại"
            },
            context: {
                follow: "Theo dõi người dùng",
                unfollow: "Hủy theo dõi người dùng"
            }
        },
        fontLoader: {
            name: "FontLoader",
            description: "Tải bất kỳ phông chữ nào từ Google Fonts",
            option: {
                selectedFont: {
                    label: "Phông chữ đã chọn",
                    description: "Phông chữ hiện được chọn"
                },
                fontSearch: {
                    label: "Tìm kiếm phông chữ",
                    description: "Tìm kiếm và chọn Google Fonts"
                },
                applyOnCodeBlocks: {
                    label: "Áp dụng trên khối mã",
                    description: "Áp dụng phông chữ cho khối mã"
                }
            },
            toast: {
                failedLoad: "Không tải được phông chữ"
            },
            modal: {
                settings: {
                    title: "Tìm kiếm phông chữ của Google",
                    description: "Chọn một phông chữ để áp dụng nó",
                    placeholder: "Tìm kiếm phông chữ...",
                    previewText: "Cáo nâu nhanh nhẹn nhảy qua chó lười",
                    authors: "Bởi {{authors}}"
                }
            }
        },
        forceOwnerCrown: {
            name: "ForceOwnerCrown",
            description: "Buộc chủ sở hữu phải đặt tên bên cạnh tên người dùng ngay cả khi máy chủ lớn."
        },
        forwardAnywhere: {
            name: "ForwardAnywhere",
            description: "Nếu chuyển tiếp không thành công, hãy gửi nó dưới dạng tin nhắn bình thường; cũng cho phép chuyển tiếp NSFW",
            option: {
                forwardPreface: {
                    label: "Lời tựa chuyển tiếp",
                    description: "Nội dung được chuyển tiếp nên được mở đầu bằng gì"
                }
            },
            context: {
                attachments: "Tệp đính kèm",
                forwarded: "Chuyển tiếp từ"
            }
        },
        freaky: {
            name: "Freaky",
            description: "Cho phép bạn gửi tin nhắn của mình bằng phông chữ lạ bằng lệnh /freaky.",
            command: {
                freaky: "Thật quái đản.",
                message: "Làm cho tin nhắn của bạn trở nên kỳ dị"
            },
            option: {
                addFreakyEnding: {
                    label: "Thêm cái kết kỳ quái",
                    description: "Thêm 👅 hoặc ❤️ vào cuối"
                }
            }
        },
        frequentQuickSwitcher: {
            name: "Frequent Quick Switcher",
            description: "Viết lại và lọc các kết quả của Trình chuyển đổi nhanh thành các kênh bạn thường xuyên sử dụng nhất."
        },
        friendCloud: {
            name: "FriendCloud",
            description: "Thêm lệnh /friendcloud để trực quan hóa những người dùng mà bạn tương tác nhiều nhất",
            command: {
                friendcloud: {
                    description: "Hình dung đám mây bạn bè của bạn",
                    count: "Số lượng người dùng hiển thị",
                    mustHigher: "Số lượng phải là 1 hoặc cao hơn!",
                    noAffinities: "Không tìm thấy mối quan hệ nào. Kiểm tra [cài đặt quyền riêng tư](<https://support.discord.com/hc/en-us/articles/21864805694999-Data-Used-to-Improve-Discord>).",
                    noValid: "Không tìm thấy người dùng hợp lệ nào trong mối quan hệ. Kiểm tra [cài đặt quyền riêng tư](<https://support.discord.com/hc/en-us/articles/21864805694999-Data-Used-to-Improve-Discord>).",
                    genFailed: "Không tạo được ảnh :c"
                }
            }
        },
        friendCodes: {
            name: "FriendCodes",
            description: "Tạo mã bạn bè để dễ dàng thêm bạn bè",
            card: {
                expires: "Hết hạn <t:{{expiration}}:R> • {{uses}}/{{maxUses}} sử dụng",
                copy: "Sao chép",
                copied: "Đã sao chép!",
                codes: "Mã bạn bè của bạn",
                count: "Mã Bạn Bè - {{invites}}",
                create: "Tạo mã bạn bè",
                revoke: "Thu hồi tất cả mã bạn bè",
                loading: "Đang tải...",
                dontHave: "Bạn không có bất kỳ mã bạn bè nào."
            }
        },
        friendInvites: {
            name: "FriendInvites",
            description: "Tạo và quản lý các liên kết mời kết bạn thông qua các lệnh gạch chéo (/tạo lời mời kết bạn, /xem lời mời kết bạn, /thu hồi lời mời kết bạn).",
            command: {
                create: {
                    description: "Tạo liên kết mời bạn bè.",
                    message: "discord.gg/{{code}}`\n· Hết hạn <t:{{expiration}}:R>\n· Số lần sử dụng tối đa: {{uses}}"
                },
                view: {
                    description: "Xem danh sách tất cả lời mời kết bạn được tạo.",
                    message: "_discord.gg/{{code}}_ \n· Hết hạn: <t:{{expiration}}:R> \n· Số lần sử dụng: {{uses}}/{{maxUses}}",
                    noInvites: "Bạn không có lời mời kết bạn nào đang hoạt động."
                },
                revoke: {
                    description: "Thu hồi tất cả lời mời kết bạn đã tạo.",
                    message: "Tất cả lời mời kết bạn đã bị thu hồi."
                }
            }
        },
        friendshipRanks: {
            name: "FriendshipRanks",
            description: "Thêm huy hiệu cho biết bạn đã làm bạn với người dùng được bao lâu",
            badge: {
                sprout: {
                    name: "Sprout",
                    description: "Tình bạn của bạn chỉ mới bắt đầu"
                },
                blooming: {
                    name: "Blooming",
                    description: "Tình bạn của bạn đang đến đó! (1 tháng)"
                },
                burning: {
                    name: "Burning",
                    description: "Tình bạn của bạn đã đạt đến tốc độ cuối cùng (3 tháng)"
                },
                fighter: {
                    name: "Fighter",
                    description: "Tình bạn của bạn rất bền chặt (6 tháng)"
                },
                star: {
                    name: "Star",
                    description: "Tình bạn của bạn đã kéo dài được một thời gian (1 năm)"
                },
                royal: {
                    name: "Royal",
                    description: "Tình bạn của bạn đã trải qua nhiều thăng trầm - suốt 2 năm!"
                },
                besties: {
                    name: "Besties",
                    description: "Làm thế nào để bạn thậm chí quản lý điều này ??? (5 năm)"
                }
            }
        },
        friendsSince: {
            name: "FriendsSince",
            description: "Hiển thị khi bạn trở thành bạn bè với ai đó trong cửa sổ bật lên của người dùng",
            section: "Bạn bè kể từ"
        },
        friendTags: {
            name: "FriendTags",
            description: "Cho phép bạn lọc theo thẻ tùy chỉnh trong Trình chuyển đổi nhanh bằng cách bắt đầu tìm kiếm với &",
            modal: {
                name: "Name",
                users: "Người dùng (cách nhau bằng dấu phẩy)",
                userlist: "Danh sách người dùng (nhấp vào người dùng để xóa)",
                remove: "Di dời",
                add: "Thêm vào",
                tag: "Nhãn",
                removeFrom: "Xóa khỏi",
                addTo: "Thêm vào"
            },
            option: {
                tagConfiguration: {
                    label: "Cấu hình thẻ",
                    description: "Thành phần cấu hình thẻ"
                }
            }
        },
        fullSearchContext: {
            name: "FullSearchContext",
            description: "Làm cho menu ngữ cảnh thư trong kết quả tìm kiếm thư có tất cả các tùy chọn mà bạn mong đợi"
        },
        fullUserInChatbox: {
            name: "FullUserInChatbox",
            description: "Làm cho đề cập của người dùng trong hộp trò chuyện có nhiều chức năng hơn, như nhấp chuột trái/phải"
        },
        fullVCPFP: {
            name: "FullVCPFP",
            description: "Làm cho hình đại diện chiếm toàn bộ ô VC"
        },
        gameActivityToggle: {
            name: "GameActivityToggle",
            description: "Thêm nút bật tắt vào cửa sổ bật lên của người dùng để hiển thị/ẩn hoạt động trò chơi của bạn",
            tooltip: "Chuyển đổi hoạt động trò chơi",
            gameActivity: {
                enabled: "Đã bật hoạt động trò chơi",
                disabled: "Hoạt động trò chơi bị vô hiệu hóa"
            },
            option: {
                oldIcon: {
                    label: "Biểu tượng cũ",
                    description: "Sử dụng kiểu biểu tượng cũ trước khi thiết kế lại biểu tượng Discord"
                },
                location: {
                    label: "Vị trí",
                    description: "Nơi hiển thị nút chuyển đổi hoạt động trò chơi",
                    panel: "Bên cạnh Tắt tiếng/Điếc",
                    toolbox: "Hộp công cụ Plexcord"
                }
            }
        },
        ghosted: {
            name: "Ghosted",
            description: "Một con ma dễ thương sẽ xuất hiện nếu bạn không trả lời DM của họ",
            modal: {
                title: "Người dùng bị ma",
                no: "Không có người dùng bị ma",
                unghost: "không lưu trữ",
                unknown: "Không xác định",
                unnamedGroup: "Nhóm không tên",
                unknownUser: "Người dùng không xác định",
                clearAll: "Xóa tất cả",
                noGhost: "Không có ma ở đây!",
                clear: "Thông thoáng"
            },
            option: {
                showIndicator: {
                    label: "Hiển thị chỉ báo",
                    description: "Hiển thị bộ đếm ghost ở đầu danh sách máy chủ"
                },
                showDmIcons: {
                    label: "Hiển thị biểu tượng DM",
                    description: "Hiển thị biểu tượng ma bên cạnh từng DM riêng lẻ"
                },
                ignoreGroupDms: {
                    label: "Bỏ qua DM nhóm",
                    description: "Loại trừ tất cả DM nhóm khỏi bóng ma"
                },
                exemptedChannels: {
                    label: "Kênh được miễn",
                    description: "Danh sách ID kênh được phân tách bằng dấu phẩy để tránh hiện tượng bóng ma (nhấp chuột phải vào kênh DM để sao chép ID của kênh đó)"
                },
                ignoreBots: {
                    label: "Bỏ qua Bot",
                    description: "Bỏ qua DM từ bot"
                },
                maxInactiveTimeMs: {
                    label: "Thời gian hoạt động tối đa",
                    description: "Chỉ các DM ma hoạt động trong khoảng thời gian này",
                    no: "Không giới hạn",
                    oneHour: "1 giờ",
                    oneDay: "1 ngày",
                    oneWeek: "1 tuần",
                    oneMonth: "1 tháng"
                }
            }
        },
        gifCollections: {
            name: "GifCollection",
            description: "Cho phép bạn tạo bộ sưu tập ảnh GIF",
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
                    name: "Name",
                    gifs: "GIF",
                    created: "Được tạo tại",
                    updated: "Cập nhật lần cuối",
                    close: "Đóng",
                    rename: "Đổi tên",
                    move: "Chuyển đến Bộ sưu tập",
                    select: "Chọn một bộ sưu tập để di chuyển mục tới"
                },
                gif: {
                    information: "Thông tin",
                    added: "Đã thêm vào lúc",
                    width: "Chiều rộng",
                    height: "Chiều cao",
                    close: "Đóng"
                }
            },
            option: {
                itemPrefix: {
                    label: "Tiền tố mục",
                    description: "Tiền tố cho các mục GIF"
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
                    label: "Hiển thị liên kết hình ảnh sao chép",
                    description: "Hiển thị tùy chọn {{copyImageLink}} trong menu ngữ cảnh"
                },
                preventDuplicates: {
                    label: "Ngăn chặn trùng lặp",
                    description: "Ngăn chặn việc thêm cùng một GIF vào bộ sưu tập nhiều lần"
                },
                defaultEmptyCollectionImage: {
                    label: "Hình ảnh bộ sưu tập trống mặc định",
                    description: "Hình ảnh/GIF sẽ được hiển thị khi bộ sưu tập không có hình ảnh/GIF"
                },
                collectionsSortType: {
                    label: "Loại sắp xếp bộ sưu tập",
                    description: "Kiểu sắp xếp cho bộ sưu tập"
                },
                collectionsSortOrder: {
                    label: "Thứ tự sắp xếp bộ sưu tập",
                    description: "Thứ tự sắp xếp của các bộ sưu tập"
                },
                collectionsSort: {
                    label: "Sắp xếp bộ sưu tập",
                    description: "Quyết định cách sắp xếp các bộ sưu tập",
                    title: "Sắp xếp bộ sưu tập",
                    sortDescription: "Chọn tiêu chí sắp xếp cho bộ sưu tập của bạn",
                    sortBy: "Sắp xếp theo",
                    name: "Name",
                    creationDate: "Ngày tạo",
                    modifiedDate: "Ngày sửa đổi",
                    ascending: "Tăng dần",
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
                    description: "Đặt lại bộ sưu tập về mặc định (xóa tất cả bộ sưu tập của bạn)",
                    button: "Đặt lại bộ sưu tập"
                }
            },
            toast: {
                copied: "Đã sao chép liên kết hình ảnh vào clipboard!",
                urlCopied: "Đã sao chép URL vào khay nhớ tạm!",
                already: "Bộ sưu tập đó đã tồn tại",
                alreadyCollection: "GIF đó đã có trong bộ sưu tập đó"
            },
            modal: {
                create: {
                    title: "Tạo bộ sưu tập",
                    name: "Collection Name",
                    create: "Tạo nên"
                },
                rename: {
                    title: "Đổi tên bộ sưu tập",
                    name: "New Collection Name",
                    warning: "Tên không thể dài hơn 24 ký tự",
                    rename: "Đổi tên"
                }
            },
            alert: {
                import: {
                    title: "Bạn có chắc không?",
                    body: "Nhập bộ sưu tập sẽ ghi đè bộ sưu tập hiện tại của bạn.",
                    confirm: "Nhập khẩu",
                    cancel: "Đừng bận tâm"
                },
                reset: {
                    title: "Bạn có chắc không?",
                    body: "Việc đặt lại bộ sưu tập sẽ xóa tất cả bộ sưu tập của bạn.",
                    confirm: "Cài lại",
                    cancel: "Đừng bận tâm"
                },
                delete: {
                    title: "Bạn có chắc không?",
                    deleteBody: "Bạn có thực sự muốn xóa bộ sưu tập này?",
                    removeBody: "Bạn có thực sự muốn xóa mục này?",
                    confirm: "Xóa bỏ",
                    remove: "Di dời",
                    cancel: "Đừng bận tâm"
                }
            }
        },
        gifPaste: {
            name: "GifPaste",
            description: "Cho phép bạn dán ảnh GIF trực tiếp vào hộp trò chuyện"
        },
        gifRoulette: {
            name: "GifRoulette",
            description: "Thêm lệnh gửi ảnh GIF ngẫu nhiên từ mục yêu thích của bạn, với cơ hội 1/10 để ping chủ sở hữu máy chủ",
            command: {
                gifRoulette: {
                    description: "Cám dỗ số phận và gửi ảnh GIF"
                }
            },
            option: {
                pingOwnerChance: {
                    label: "Cơ hội sở hữu Ping",
                    description: "Có nên có 1/10 cơ hội ping chủ guild không (ồ không)"
                }
            }
        },
        gitHubRepos: {
            name: "GitHubRepos",
            description: "Hiển thị kho GitHub công khai của người dùng trong hồ sơ của họ",
            loading: "Đang tải kho lưu trữ...",
            option: {
                showStars: {
                    label: "Hiển thị các ngôi sao",
                    description: "Hiển thị sao kho lưu trữ"
                },
                showLanguage: {
                    label: "Hiển thị ngôn ngữ",
                    description: "Hiển thị ngôn ngữ chính của kho lưu trữ"
                }
            },
            error: {
                error: "Lỗi",
                render: "Lỗi: Không thể hiển thị GitHubRepos"
            },
            button: {
                show: "Hiển thị kho lưu trữ GitHub",
                repositories: "Kho GitHub",
                more: "Hiển thị thêm",
                only: "Chỉ hiển thị hàng đầu {{length}}/{{total}}"
            },
            modal: {
                title: "Kho lưu trữ GitHub của {{user}}",
                repository: "Kho lưu trữ",
                description: "Sự miêu tả",
                language: "Ngôn ngữ",
                stars: "Ngôi sao",
                viewOnGitHub: "Xem trên GitHub",
                close: "Đóng"
            }
        },
        googleThat: {
            name: "GoogleThat",
            description: "Thêm lệnh gửi liên kết tìm kiếm trên internet",
            command: {
                googleThat: {
                    description: "Gửi liên kết công cụ tìm kiếm",
                    query: "Truy vấn tìm kiếm"
                }
            },
            option: {
                hyperlink: {
                    label: "Siêu liên kết",
                    description: "Liên kết đã gửi có nên siêu liên kết với truy vấn dưới dạng nhãn hay không"
                },
                embed: {
                    label: "Nhúng",
                    description: "Liên kết đã gửi có hiển thị nội dung nhúng hay không"
                },
                defaultEngine: {
                    label: "Công cụ mặc định",
                    description: "Công cụ tìm kiếm để sử dụng"
                },
                customEngineURL: {
                    label: "URL công cụ tùy chỉnh",
                    description: "URL của công cụ bạn muốn sử dụng"
                }
            }
        },
        greetStickerPicker: {
            name: "GreetStickerPicker",
            description: "Cho phép bạn sử dụng bất kỳ nhãn dán chào mừng nào thay vì chỉ nhãn dán ngẫu nhiên bằng cách nhấp chuột phải vào 'Vẫy chào để chào!' cái nút",
            mode: {
                greet: "Chào hỏi",
                message: "Tin nhắn"
            },
            option: {
                greetMode: {
                    label: "Chế độ chào hỏi",
                    description: "Chọn chế độ chào",
                    greet: "Chào (chỉ được chào 3 lần)",
                    message: "Tin nhắn (bạn có thể chào thư rác)"
                }
            },
            context: {
                label: "Bộ chọn hình dán chào hỏi",
                mode: "Chế độ chào hỏi",
                stickers: "Nhãn dán chào hỏi",
                multi: "Lời chào đa năng không thánh thiện",
                send: "Gửi lời chào"
            }
        },
        guildPickerDumper: {
            name: "GuildPickerDumper",
            description: "Menu ngữ cảnh để kết xuất và tải xuống biểu tượng cảm xúc và nhãn dán của máy chủ.",
            context: {
                download: {
                    emoji: "Tải xuống biểu tượng cảm xúc",
                    sticker: "Tải xuống nhãn dán"
                }
            }
        },
        guildTagSettings: {
            name: "GuildTagSettings",
            description: "Thêm một số cài đặt cho thẻ bang hội, chẳng hạn như ẩn chúng hoặc tắt lời nhắc chấp nhận chúng.",
            option: {
                disableAdoptTagPrompt: {
                    label: "Vô hiệu hóa lời nhắc thẻ thông qua",
                    description: "Tắt lời nhắc chấp nhận thẻ"
                }
            }
        },
        hideChatButtons: {
            name: "HideChatButtons",
            description: "Có thể ẩn các nút trò chuyện",
            tooltip: {
                close: "Đóng",
                open: "Mở"
            },
            option: {
                color: {
                    label: "Màu sắc",
                    description: "Tô màu đỏ khi mở"
                },
                open: {
                    label: "Mở",
                    description: "Được mở theo mặc định"
                }
            }
        },
        hideMedia: {
            name: "HideMedia",
            description: "Ẩn tệp đính kèm và nội dung nhúng cho từng tin nhắn thông qua nút di chuột",
            show: "Hiển thị phương tiện",
            hide: "Ẩn phương tiện",
            hidden: "Phương tiện ẩn"
        },
        hideMessages: {
            name: "HideMessages",
            description: "Một plugin để tạm thời ẩn tin nhắn cho đến khi bạn khởi động lại.",
            button: {
                hide: "Trốn"
            },
            option: {
                hidePopoverButton: {
                    label: "Ẩn nút bật lên",
                    description: "Ẩn nút ẩn trong cửa sổ bật lên tin nhắn."
                }
            }
        },
        hideServers: {
            name: "HideServers",
            description: "Ẩn máy chủ khỏi danh sách máy chủ",
            context: {
                hide: "Ẩn máy chủ",
                unhide: "Hiện máy chủ",
                folder: {
                    hide: "Ẩn thư mục",
                    unhide: "Bỏ ẩn thư mục"
                }
            },
            option: {
                showIndicator: {
                    label: "Hiển thị chỉ báo",
                    description: "Hiển thị menu để hiện máy chủ ở cuối danh sách"
                },
                guildsList: {
                    label: "Danh sách bang hội",
                    description: "Xóa máy chủ ẩn"
                },
                resetHidden: {
                    label: "Đặt lại ẩn",
                    description: "Xóa tất cả các bang hội ẩn khỏi danh sách",
                    button: "Đặt lại máy chủ ẩn"
                }
            },
            button: {
                hidden: "Ẩn giấu",
                hiddenServers: "Máy chủ ẩn",
                remove: "Di dời",
                folder: "Thư mục",
                removeAll: "Xóa tất cả",
                guilds: "Bang hội",
                noHiddenServers: "Không có máy chủ ẩn"
            }
        },
        holyNotes: {
            name: "HolyNotes",
            description: "Holy Notes cho phép bạn lưu tin nhắn",
            main: "Chủ yếu",
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
                deleteNote: "Xóa ghi chú",
                moveNote: "Di chuyển ghi chú",
                moveTo: "Di chuyển đến {{key}}",
                copyId: "Sao chép giấy tờ tùy thân"
            },
            modal: {
                error: {
                    generic: "Đã xảy ra lỗi khi phân tích ghi chú của bạn. Kiểm tra bảng điều khiển để biết chi tiết.",
                    easter: "Không có ghi chú nào được tìm thấy. Đồng cảm Banana ở đây dành cho bạn.",
                    empty: "Không tìm thấy ghi chú nào được lưu trong sổ tay này."
                },
                help: {
                    title: "Giúp đỡ",
                    description: "Tìm hiểu cách sử dụng Holy Notes",
                    addingNotes: "Thêm ghi chú",
                    addingNotesText: "Để thêm ghi chú, nhấp chuột phải vào tin nhắn, sau đó di chuột qua mục 'Tin nhắn ghi chú' và nhấp vào nút có tên sổ ghi chép mà bạn muốn ghi chú vào tin nhắn.",
                    prototype: "Nguyên mẫu",
                    noteMessage: "Mặc định bấm vào nút 'Note Message' sẽ ghi chú vào Main!",
                    deletingNotes: "Xóa ghi chú",
                    deletingNotesText: "Lưu ý: bạn có thể nhấp chuột phải vào ghi chú và nhấn 'Xóa ghi chú' hoặc bạn có thể giữ phím 'DELETE' trên bàn phím và nhấp vào ghi chú; nó giống như phép thuật vậy!",
                    movingNotes: "Di chuyển ghi chú",
                    movingNotesText: "Để di chuyển ghi chú, nhấp chuột phải vào ghi chú và di chuột qua mục 'Di chuyển ghi chú' rồi nhấp vào nút tương ứng với sổ ghi chú bạn muốn di chuyển ghi chú tới.",
                    jumpToMessage: "Chuyển tới tin nhắn",
                    jumpToMessageText: "Để chuyển đến vị trí ban đầu của ghi chú, chỉ cần nhấp chuột phải vào ghi chú và nhấn 'Chuyển đến tin nhắn'."
                },
                notebook: {
                    title: "SỔ TAY",
                    search: "Tìm kiếm tin nhắn...",
                    options: "Tùy chọn sắp xếp",
                    label: "Thực đơn sắp xếp",
                    filteredOf: "{{filteredCount}} trong số {{noteCount}} ghi chú{{s}}",
                    note: "{{noteCount}} lưu ý{{s}}",
                    ada: "Tăng dần/Ngày thêm",
                    amd: "Tăng dần/Ngày nhắn tin",
                    dda: "Giảm dần/Ngày thêm",
                    dmd: "Giảm dần / Ngày nhắn tin",
                    change: "Thay đổi sắp xếp",
                    ascending: "Tăng dần",
                    descending: "Giảm dần",
                    dateAdded: "Ngày thêm",
                    messageDate: "Ngày tin nhắn"
                },
                create: {
                    title: "Tạo sổ tay",
                    description: "Nhập tên cho sổ ghi chép mới của bạn",
                    placeholder: "Tên sổ ghi chép"
                },
                delete: {
                    title: "Xóa {{notebookName}}?",
                    description: "{{noteCount}} lưu ý{{s}} sẽ bị xóa vĩnh viễn",
                    button: "Xóa bỏ"
                },
                tabs: {
                    label: "Tab sổ tay"
                }
            },
            toast: {
                saved: "Đã thêm tin nhắn thành công vào {{notebook}}",
                deleted: "Đã xóa thành công ghi chú khỏi {{notebook}}",
                moved: "Đã chuyển thành công ghi chú từ {{from}} sang {{to}}.",
                exists: "Sổ ghi chép {{notebookName}} đã tồn tại.",
                created: "Đã tạo thành công {{notebookName}}.",
                deletedNotebook: "Đã xóa thành công {{notebookName}}.",
                refreshed: "Đã làm mới avatar thành công.",
                deletedAll: "Đã xóa thành công tất cả ghi chú.",
                imported: "Đã nhập ghi chú thành công.",
                invalid: "Không thể nhập ghi chú."
            },
            toolbox: {
                action: "Mở ghi chú"
            }
        },
        homeTyping: {
            name: "HomeTyping",
            description: "Thay đổi nút home thành chỉ báo đang gõ nếu ai đó trong DM của bạn đang gõ"
        },
        iconViewer: {
            name: "IconViewer",
            description: "Thêm tab mới vào cài đặt để xem trước tất cả các biểu tượng.",
            toolbox: "Mở tab biểu tượng",
            iconFinder: "Trình tìm biểu tượng",
            about: {
                title: "Đặc trưng",
                preview: "Xem trước biểu tượng",
                list: {
                    copy: "Sao chép tên biểu tượng và biến CSS",
                    download: "Tải xuống các biểu tượng ở các định dạng khác nhau (SVG, PNG, GIF, v.v.)",
                    premade: "Sao chép các tìm kiếm biểu tượng được tạo sẵn cho plugin của bạn",
                    find: "Tìm biểu tượng theo ngữ cảnh chức năng",
                    search: "Tìm kiếm màu bằng cách nhấn chuột phải vào tên màu",
                    special: "Cảm ơn đặc biệt"
                }
            },
            context: {
                icon: {
                    options: "Tùy chọn biểu tượng",
                    log: "Đăng nhập vào bảng điều khiển",
                    save: "Lưu dưới dạng...",
                    rightClick: "Nhấn chuột phải vào biểu tượng để thay đổi",
                    usage: "Cách sử dụng",
                    click: "Bấm để sao chép",
                    copied: "Đã sao chép!",
                    actions: "hành động"
                }
            },
            modal: {
                label: "Tìm kiếm theo ngữ cảnh chức năng",
                search: "Tìm kiếm biểu tượng {{count}}...",
                function: "Chức năng",
                iconViewer: {
                    colors: "Màu sắc của trình xem biểu tượng",
                    unknown: "không rõ",
                }
            }
        },
        idleAutoRestart: {
            name: "IdleAutoRestart",
            description: "Tự động khởi động lại máy khách sau khi không hoạt động trong một khoảng thời gian có thể định cấu hình nhưng tránh khởi động lại khi bạn đang ở trong VC.",
            option: {
                isEnabled: {
                    label: "Đã bật",
                    description: "Bật tự động khởi động lại sau khi không hoạt động"
                },
                idleMinutes: {
                    label: "Phút nhàn rỗi",
                    description: "Số phút không hoạt động trước khi khởi động lại (khi không ở trong VC)"
                }
            },
            toolbox: {
                disable: "Vô hiệu hóa Tự động khởi động lại khi không hoạt động",
                enable: "Bật Tự động khởi động lại khi không hoạt động"
            }
        },
        ignoreActivities: {
            name: "IgnoreActivities",
            description: "Bỏ qua các hoạt động CHỈ hiển thị trên trạng thái của bạn. Bạn có thể định cấu hình những trò chơi nào bị bỏ qua cụ thể từ tab Trò chơi và Hoạt động đã đăng ký hoặc sử dụng cài đặt chung bên dưới",
            modal: {
                import: {
                    title: "Nhập ID ứng dụng của plugin CustomRPC vào danh sách bộ lọc"
                },
                filter: {
                    title: "Danh sách bộ lọc",
                    description: "Danh sách ID hoạt động được phân tách bằng dấu phẩy để lọc (hữu ích để lọc các hoạt động RPC cụ thể và CustomRPC)"
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
                    label: "Nhập RPC tùy chỉnh"
                },
                listMode: {
                    label: "Chế độ danh sách",
                    description: "Chọn cách áp dụng danh sách bộ lọc",
                    blacklist: "Danh sách đen (chỉ bỏ qua những gì có trong danh sách)",
                    whitelist: "Danh sách trắng (bỏ qua mọi thứ trừ những gì có trong danh sách)"
                },
                idList: {
                    label: "Danh sách ID"
                },
                ignorePlaying: {
                    label: "Bỏ qua việc chơi",
                    description: "Bỏ qua mọi hoạt động chơi (thường là hoạt động game và RPC)"
                },
                ignoreStreaming: {
                    label: "Bỏ qua phát trực tuyến",
                    description: "Bỏ qua mọi hoạt động phát trực tuyến"
                },
                ignoreListening: {
                    label: "Bỏ qua việc nghe",
                    description: "Bỏ qua mọi hoạt động nghe (đây thường là hoạt động Spotify)"
                },
                ignoreWatching: {
                    label: "Bỏ qua việc xem",
                    description: "Bỏ qua mọi hoạt động xem"
                },
                ignoreCompeting: {
                    label: "Bỏ qua việc cạnh tranh",
                    description: "Bỏ qua tất cả các hoạt động cạnh tranh (đây thường là những hoạt động trò chơi đặc biệt)"
                },
                ignoredActivities: {
                    label: "Hoạt động bị bỏ qua"
                }
            }
        },
        ignoreCalls: {
            name: "IgnoreCalls",
            description: "Cho phép bạn bỏ qua cuộc gọi từ người dùng hoặc nhóm DM cụ thể.",
            option: {
                permanentlyIgnoredUsers: {
                    label: "Người dùng bị bỏ qua vĩnh viễn",
                    description: "ID người dùng (dấu phẩy + dấu cách) sẽ bị bỏ qua vĩnh viễn"
                }
            },
            button: {
                ignore: "Phớt lờ",
                temporarilyIgnore: "Tạm thời bỏ qua cuộc gọi",
                permanentlyIgnore: "Bỏ qua cuộc gọi vĩnh viễn"
            }
        },
        iLoveSpam: {
            name: "ILoveSpam",
            description: "Không ẩn tin nhắn khỏi 'có thể là kẻ gửi thư rác'"
        },
        imageFilename: {
            name: "ImageFilename",
            description: "Hiển thị tên tệp hình ảnh & GIF dưới dạng chú giải công cụ khi di chuột qua chúng",
            option: {
                showFullUrl: {
                    label: "Hiển thị URL đầy đủ",
                    description: "Hiển thị URL đầy đủ của hình ảnh thay vì chỉ tên tệp. Luôn bật cho ảnh GIF vì chúng thường không có tên tệp có ý nghĩa"
                }
            }
        },
        imageLink: {
            name: "ImageLink",
            description: "Không bao giờ ẩn link hình ảnh trong tin nhắn, ngay cả khi đó là nội dung duy nhất"
        },
        imageZoom: {
            name: "ImageZoom",
            description: "Cho phép bạn phóng to hình ảnh và GIF cũng như hiển thị siêu dữ liệu hình ảnh. Sử dụng bánh xe cuộn để phóng to và bánh xe cuộn Shift + để tăng bán kính ống kính.",
            option: {
                saveZoomValues: {
                    label: "Lưu giá trị thu phóng",
                    description: "Có lưu giá trị thu phóng và kích thước ống kính hay không"
                },
                invertScroll: {
                    label: "Đảo ngược cuộn",
                    description: "Đảo ngược cuộn"
                },
                nearestNeighbour: {
                    label: "Hàng xóm gần nhất",
                    description: "Sử dụng Nội suy lân cận gần nhất khi chia tỷ lệ hình ảnh"
                },
                square: {
                    label: "Quảng trường",
                    description: "Làm cho ống kính vuông"
                },
                zoom: {
                    label: "Phóng",
                    description: "Thu phóng ống kính"
                },
                size: {
                    label: "Kích cỡ",
                    description: "Bán kính/Kích thước của ống kính"
                },
                zoomSpeed: {
                    label: "Tốc độ thu phóng",
                    description: "Tốc độ thay đổi kích thước zoom/ống kính"
                },
                showMetadata: {
                    label: "Hiển thị siêu dữ liệu",
                    description: "Hiển thị siêu dữ liệu hình ảnh khi nhấp đúp vào hình ảnh đã chọn"
                }
            },
            context: {
                square: "Ống kính vuông",
                nearest: "Hàng xóm gần nhất",
                zoom: "Phóng",
                size: "Kích thước ống kính",
                zoomSpeed: "Tốc độ thu phóng",
                showImageMetadata: "Hiển thị siêu dữ liệu hình ảnh",
                view: "Xem siêu dữ liệu",
                loading: "Đang tải...",
                unknown: "Không xác định",
                sizeHTML: "Kích cỡ",
                dimensions: "Kích thước",
                filename: "Tên tệp"
            }
        },
        imgToGif: {
            name: "ImgToGif",
            description: "Thêm lệnh gạch chéo /imgtogif để tạo ảnh GIF từ bất kỳ hình ảnh nào",
            command: {
                imgToGif: {
                    description: "Cho phép bạn biến hình ảnh thành GIF",
                    image: "Đính kèm hình ảnh để sử dụng",
                    width: "Chiều rộng của GIF",
                    height: "Chiều cao của GIF"
                }
            },
            error: {
                noImage: "Không có hình ảnh được chỉ định!",
                notImage: "Tải lên không phải là hình ảnh"
            }
        },
        implicitRelationships: {
            name: "ImplicitRelationships",
            description: "Hiển thị các mối quan hệ tiềm ẩn của bạn trong tab Bạn bè.",
            option: {
                sortByAffinity: {
                    label: "Sắp xếp theo sở thích",
                    description: "Có nên sắp xếp các mối quan hệ ngầm theo mối quan hệ của chúng với bạn hay không."
                }
            },
            implicit: "ngầm"
        },
        inRole: {
            name: "InRole",
            description: "Biết ai có vai trò bằng menu ngữ cảnh vai trò hoặc lệnh /inrole (đọc thông tin plugin!)",
            command: {
                inrole: {
                    description: "Biết ai đang đóng một vai trò nào đó",
                    role: "Vai trò",
                    noGuild: "Hãy chắc chắn rằng bạn đang ở trong một máy chủ."
                }
            },
            context: {
                view: "Xem thành viên trong vai trò"
            },
            modal: {
                about: {
                    title: "Hạn chế",
                    description: "Nếu bạn không có quyền mod trên máy chủ và máy chủ đó lớn (trên 100 thành viên), plugin có thể bị hạn chế theo những cách sau",
                    list: {
                        one: "Thành viên ngoại tuyến sẽ không được liệt kê",
                        two: "Tối đa 100 thành viên sẽ được liệt kê theo mặc định. Để có thêm, hãy cuộn xuống danh sách thành viên để tải thêm thành viên.",
                        three: "Tuy nhiên, bạn bè sẽ luôn được hiển thị bất kể trạng thái của họ."
                    }
                },
                member: {
                    title: "Vai trò Thành viên",
                    noMembers: "Có vẻ như không tìm thấy thành viên nào được lưu trong bộ nhớ đệm trực tuyến có vai trò đó. Hãy thử cuộn xuống danh sách thành viên của bạn để lưu vào bộ nhớ đệm nhiều người dùng hơn!"
                }
            }
        },
        instantScreenshare: {
            name: "InstantScreenshare",
            description: "Chia sẻ màn hình ngay lập tức khi tham gia kênh thoại có hỗ trợ nguồn máy tính để bàn, cửa sổ và thiết bị đầu vào video (máy ảnh, thẻ chụp)",
            modal: {
                linux: {
                    title: "Dành cho Linux",
                    body: "Đối với Wayland, nó chỉ bật lên phần chọn chia sẻ màn hình",
                    bodyTwo: "Đối với X11 nó có thể hoạt động hoặc không :srug:"
                },
                videoDevices: {
                    title: "Thiết bị đầu vào video",
                    body: "Hỗ trợ máy ảnh và thẻ chụp (như Elgato HD60X) khi được bật trong cài đặt"
                },
                regardingSound: {
                    title: "Về cài đặt âm thanh và xem trước",
                    body: "Chúng tôi sử dụng các cài đặt do Discord thiết lập và sử dụng để quyết định xem có nên bật âm thanh và xem trước luồng hay không"
                }
            },
            option: {
                streamMedia: {
                    label: "Nguồn phương tiện truyền phát",
                    description: "Đặt lại về màn hình chính nếu không tìm thấy",
                    loading: "Đang tải nguồn phương tiện...",
                    none: "Không tìm thấy nguồn phương tiện nào",
                    placeholder: "Chọn nguồn phương tiện để truyền phát"
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
                    label: "Tự động điếc",
                    description: "Tự động bị điếc khi tham gia kênh thoại (cũng tắt tiếng của bạn)"
                },
                instantScreenshare: {
                    label: "Chia sẻ màn hình tức thì",
                    description: "Bật tính năng chia sẻ màn hình tự động"
                },
                keybindScreenshare: {
                    label: "Chia sẻ màn hình Keybind",
                    description: "Chia sẻ màn hình bằng keybind trong cài đặt keybind Discord"
                },
                focusDiscord: {
                    label: "Tập trung bất hòa",
                    description: "Chỉ bắt đầu chia sẻ màn hình bằng keybind khi Discord được tập trung"
                },
                toolboxManagement: {
                    label: "Quản lý hộp công cụ",
                    description: "Bật/Tắt tính năng chia sẻ màn hình tức thì"
                }
            },
            toolbox: {
                label: "Chia sẻ màn hình tức thì",
                toast: "Chia sẻ màn hình tức thì {{state}}",
                enabled: "Đã bật",
                disabled: "Tàn tật"
            }
        },
        invisibleChat: {
            name: "InvisibleChat",
            description: "Mã hóa tin nhắn của bạn theo cách không đáng ngờ!",
            option: {
                savedPasswords: {
                    label: "Mật khẩu đã lưu",
                    description: "Mật khẩu đã lưu (được phân tách bằng dấu , )"
                }
            },
            button: {
                encrypt: "Mã hóa tin nhắn",
                decrypt: "Giải mã tin nhắn",
                hidden: "Chỉ báo tin nhắn ẩn (InvisibleChat)"
            },
            tooltip: {
                hidden: "Tin nhắn này có một tin nhắn ẩn! (Trò chuyện vô hình)"
            },
            embed: {
                title: "Tin nhắn được giải mã",
                footer: "Đã gửi bằng Trò chuyện vô hình"
            },
            modal: {
                encrypt: {
                    title: "Mã hóa tin nhắn",
                    secret: "Bí mật",
                    cover: "Bìa (2 từ trở lên!!)",
                    password: "Mật khẩu",
                    dontUseCover: "Không sử dụng nắp",
                    send: "Gửi",
                    cancel: "Hủy bỏ"
                },
                decrypt: {
                    title: "Giải mã tin nhắn",
                    with: "Tin nhắn có mã hóa",
                    password: "Mật khẩu",
                    decrypt: "Giải mã",
                    cancel: "Hủy bỏ"
                }
            }
        },
        inviteDefaults: {
            name: "InviteDefaults",
            description: "Cho phép bạn chỉnh sửa các giá trị mặc định khi tạo lời mời máy chủ.",
            option: {
                inviteDuration: {
                    label: "Thời lượng mời",
                    description: "Thời lượng mặc định cho lời mời máy chủ",
                    thirtyMinutes: "30 phút",
                    oneHour: "1 giờ",
                    sixHours: "6 giờ",
                    twelveHours: "12 giờ",
                    oneDay: "1 ngày",
                    sevenDays: "7 ngày",
                    forever: "Mãi mãi"
                },
                maxUses: {
                    label: "Sử dụng tối đa",
                    description: "Số lần sử dụng tối đa mặc định cho lời mời máy chủ",
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
                    description: "Tư cách thành viên tạm thời mặc định cho lời mời máy chủ"
                }
            }
        },
        ircColors: {
            name: "IrcColors",
            description: "Làm cho màu tên người dùng trong cuộc trò chuyện trở nên độc đáo, giống như trong ứng dụng khách IRC",
            option: {
                lightness: {
                    label: "Độ nhẹ",
                    description: "Độ sáng, tính bằng %. Thay đổi nếu màu quá nhạt hoặc quá tối"
                },
                memberListColors: {
                    label: "Màu danh sách thành viên",
                    description: "Thay thế màu vai trò trong danh sách thành viên"
                },
                applyColorOnlyToUsersWithoutColor: {
                    label: "Chỉ áp dụng màu cho người dùng không có màu",
                    description: "Chỉ áp dụng màu cho những người dùng không có màu được xác định trước"
                },
                applyColorOnlyInDms: {
                    label: "Chỉ áp dụng màu trong DM",
                    description: "Chỉ áp dụng màu trong tin nhắn trực tiếp; không áp dụng màu sắc trong máy chủ."
                }
            }
        },
        iRememberYou: {
            name: "IRememberYou",
            description: "Lưu cục bộ mọi người mà bạn đã liên lạc (bao gồm cả máy chủ), trong trường hợp bị mất",
            section: {
                description: "Cung cấp danh sách người dùng mà bạn đã đề cập hoặc trả lời hoặc những người sở hữu máy chủ mà bạn sở hữu (chủ sở hữu máy chủ*) hoặc là thành viên trong bang hội của bạn",
                empty: "Hiện giờ nó đang trống rỗng.",
                tooltip: "{{user}}, cập nhật lúc {{updatedAtContent}}",
                owner: "Chủ sở hữu máy chủ",
                iRememberYou: "Tôi nhớ bạn"
            },
            context: {
                user: "Tùy chọn người dùng",
                copy: "Sao chép ID người dùng",
                copyToast: "Đã sao chép ID người dùng vào bảng nhớ tạm",
                view: "Xem hồ sơ"
            },
            modal: {
                title: "Biên tập viên",
                filter: "Lọc theo thẻ, tên người dùng, ID",
                button: {
                    validate: "Xác thực và lưu",
                    cancel: "Hủy bỏ",
                    openEditor: "Mở trình chỉnh sửa",
                    resetData: "Đặt lại bộ nhớ",
                    sure: "Bạn có chắc không?"
                }
            }
        },
        jumpTo: {
            name: "JumpTo",
            description: "Thêm tùy chọn menu ngữ cảnh để chuyển về đầu hoặc cuối kênh/DM",
            context: {
                top: "Chuyển đến tin nhắn đầu tiên",
                bottom: "Chuyển đến tin nhắn mới nhất",
                noMessages: "Không tìm thấy tin nhắn từ người dùng này trong kênh này.",
                searchFailed: "Không thể tìm kiếm tin nhắn."
            }
        },
        keepCurrentChannel: {
            name: "KeepCurrentChannel",
            description: "Cố gắng điều hướng đến kênh bạn đã tham gia trước khi chuyển đổi tài khoản hoặc tải Discord."
        },
        keyboardSounds: {
            name: "KeyboardSounds",
            description: "Thêm OperaGX hoặc osu! hiệu ứng âm thanh khi gõ trên bàn phím của bạn.",
            option: {
                volume: {
                    label: "Âm lượng",
                    description: "Âm lượng của bàn phím"
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
            name: "KeywordNotify",
            description: "Gửi thông báo nếu một tin nhắn nhất định khớp với các từ khóa hoặc biểu thức chính quy nhất định",
            idHolder: "NHẬN DẠNG",
            keywordEntry: "Nhập từ khóa",
            regexHolder: "ví dụ|regex",
            ignoreCase: "Bỏ qua trường hợp",
            whiteblackLabel: "Danh sách trắng/Danh sách đen",
            tab: {
                title: "Từ khóa",
                clearAll: "Xóa tất cả"
            },
            button: {
                addId: "Thêm giấy tờ tùy thân",
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
                    label: "Số tiền cần giữ",
                    description: "Số lượng tin nhắn cần lưu trong nhật ký"
                },
                keywords: {
                    label: "Từ khóa",
                    description: "Quản lý từ khóa"
                }
            }
        },
        lastOnline: {
            name: "LastOnline",
            description: "Thêm chỉ báo trực tuyến cuối cùng dưới tên người dùng trong danh sách DM và danh sách thành viên bang hội và GDM của bạn",
            unit: {
                d: "ngày",
                h: "giờ",
                m: "phút"
            },
            online: "Trực tuyến {{formattedTime}} trước"
        },
        listenBrainzRPC: {
            name: "ListenBrainzRPC",
            description: "Plugin nhỏ cho sự hiện diện phong phú của ListenBrainz",
            about: {
                title: "Giới thiệu về API MusicBrainz",
                description: "API MusicBrainz không yêu cầu khóa API nhưng yêu cầu {{link}}. Đối với hầu hết, một địa chỉ email là đủ.",
                userAgent: "chuỗi tác nhân người dùng có ý nghĩa"
            },
            option: {
                username: {
                    label: "Tên người dùng",
                    description: "Tên người dùng ListenBrainz"
                },
                mbContact: {
                    label: "Liên hệ MB",
                    description: "ListenBrainz liên hệ"
                },
                shareUsername: {
                    label: "Chia sẻ tên người dùng",
                    description: "Hiển thị liên kết tới hồ sơ ListenBrainz (chỉ có thể hiển thị với những người dùng khác)"
                },
                shareSong: {
                    label: "Chia sẻ bài hát",
                    description: "Hiển thị liên kết đến bài hát hiện tại trên ListenBrainz (chỉ những người dùng khác mới có thể nhìn thấy)"
                },
                hideWithSpotify: {
                    label: "Ẩn với Spotify",
                    description: "Ẩn sự hiện diện của ListenBrainz nếu Spotify đang chạy"
                },
                hideWithActivity: {
                    label: "Ẩn với hoạt động",
                    description: "Ẩn sự hiện diện ListenBrainz nếu bạn có bất kỳ sự hiện diện nào khác"
                },
                useTimeBar: {
                    label: "Sử dụng thanh thời gian",
                    description: "Sử dụng thời lượng bản nhạc để hiển thị thanh thời gian (phải sử dụng trạng thái Nghe)"
                },
                statusName: {
                    label: "Tên trạng thái",
                    description: "Văn bản trạng thái tùy chỉnh"
                },
                nameFormat: {
                    label: "Định dạng tên",
                    description: "Hiển thị tên bài hát và nghệ sĩ ở tên trạng thái",
                    custom: "Sử dụng tên trạng thái tùy chỉnh",
                    artistSong: "Sử dụng định dạng 'nghệ sĩ - bài hát'",
                    songArtist: "Sử dụng định dạng 'bài hát - nghệ sĩ'",
                    artistOnly: "Chỉ sử dụng tên nghệ sĩ",
                    songOnly: "Chỉ sử dụng tên bài hát",
                    albumName: "Sử dụng tên album (quay lại văn bản trạng thái tùy chỉnh nếu bài hát không có album)"
                },
                useListeningStatus: {
                    label: "Sử dụng trạng thái nghe",
                    description: "Hiển thị trạng thái 'Đang nghe' thay vì 'Đang phát'"
                },
                missingArt: {
                    label: "Thiếu nghệ thuật",
                    description: "Khi album hoặc ảnh bìa album bị thiếu",
                    listenbrainzLogo: "Sử dụng logo ListenBrainz lớn",
                    generic: "Sử dụng trình giữ chỗ chung"
                },
                useLogo: {
                    label: "Sử dụng biểu tượng",
                    description: "Hiển thị logo ListenBrainz trên ảnh bìa album"
                }
            }
        },
        loadingQuotes: {
            name: "LoadingQuotes",
            description: "Thay thế trích dẫn tải của Discord",
            option: {
                replaceEvents: {
                    label: "Thay thế sự kiện",
                    description: "Plugin này có nên áp dụng trong các sự kiện có trích dẫn theo chủ đề sự kiện đặc biệt không? (ví dụ: Halloween)"
                },
                enablePluginPresetQuotes: {
                    label: "Bật báo giá cài sẵn plugin",
                    description: "Kích hoạt các trích dẫn được cài sẵn bởi plugin này"
                },
                enableDiscordPresetQuotes: {
                    label: "Bật báo giá cài sẵn Discord",
                    description: "Bật các trích dẫn đặt trước của Discord (bao gồm các trích dẫn sự kiện, trong các sự kiện)"
                },
                additionalQuotes: {
                    label: "Báo giá bổ sung",
                    description: "Các trích dẫn tùy chỉnh bổ sung có thể xuất hiện, được phân tách bằng dấu phân cách bên dưới"
                },
                additionalQuotesDelimiter: {
                    label: "Dấu phân cách trích dẫn bổ sung",
                    description: "Dấu phân cách cho dấu ngoặc kép bổ sung"
                }
            }
        },
        loginWithQR: {
            name: "LoginWithQR",
            description: "Cho phép bạn đăng nhập vào thiết bị khác bằng cách quét mã QR đăng nhập, giống như trên thiết bị di động!",
            option: {
                scanQr: {
                    label: "Quét mã QR",
                    description: "Quét mã QR",
                    notEnabled: "Kích hoạt plugin và khởi động lại ứng dụng khách của bạn để quét mã QR đăng nhập"
                }
            },
            neverScan: "Không bao giờ quét mã QR đăng nhập từ người dùng hoặc ứng dụng khác.",
            hold: "Giữ để xác nhận đăng nhập",
            scanning: "Đang quét...",
            stopScanning: "Dừng quét",
            usingWebcam: "Quét bằng webcam",
            dragDrop: "Kéo và thả hình ảnh vào đây hoặc nhấp để chọn hình ảnh",
            orPaste: "Hoặc dán hình ảnh từ clipboard của bạn!"
        },
        mediaPlaybackSpeed: {
            name: "MediaPlaybackSpeed",
            description: "Cho phép thay đổi tốc độ phát lại (mặc định) của phương tiện nhúng",
            playbackSpeed: "Tốc độ phát lại",
            context: {
                label: "Kiểm soát tốc độ phát lại"
            },
            option: {
                defaultVoiceMessageSpeed: {
                    label: "Tốc độ tin nhắn thoại mặc định",
                    description: "Tin nhắn thoại"
                },
                defaultVideoSpeed: {
                    label: "Tốc độ video mặc định",
                    description: "Video"
                },
                defaultAudioSpeed: {
                    label: "Tốc độ âm thanh mặc định",
                    description: "Âm thanh"
                }
            }
        },
        memberCount: {
            name: "MemberCount",
            description: "Hiển thị số lượng thành viên trực tuyến, tổng số thành viên và người dùng trong các kênh thoại trên máy chủ — trong danh sách thành viên và chú giải công cụ.",
            option: {
                toolTip: {
                    label: "Chú giải công cụ",
                    description: "Hiển thị số lượng thành viên trên chú giải công cụ máy chủ"
                },
                memberList: {
                    label: "Danh sách thành viên",
                    description: "Hiển thị số lượng thành viên trong tiêu đề danh sách thành viên"
                },
                voiceActivity: {
                    label: "Hoạt động bằng giọng nói",
                    description: "Hiển thị số lượng người dùng trong các kênh thoại"
                }
            },
            onlineThisChannel: "{{formattedOnlineCount}} trực tuyến trên kênh này",
            totalMembers: "{{formattedTotalCount}} tổng số thành viên máy chủ",
            totalVoice: "{{formattedVoiceCount}} thành viên lên tiếng"
        },
        mentionAvatars: {
            name: "MentionAvatars",
            description: "Hiển thị hình đại diện và biểu tượng vai trò của người dùng bên trong các đề cập",
            option: {
                showAtSymbol: {
                    label: "Hiển thị biểu tượng @",
                    description: "Liệu biểu tượng @ có được hiển thị khi người dùng đề cập hay không"
                }
            }
        },
        meow: {
            name: "Meow",
            description: "Thêm nút thanh trò chuyện để kêu meo meo trong trò chuyện",
            button: {
                meow: "Meo"
            }
        },
        messageBurst: {
            name: "MessageBurst",
            description: "Hợp nhất các tin nhắn được gửi trong một khoảng thời gian với tin nhắn đã gửi trước đó của bạn nếu không có ai khác gửi tin nhắn trước bạn.",
            option: {
                timePeriod: {
                    label: "Khoảng thời gian",
                    description: "Thời lượng của các vụ nổ (tính bằng giây)."
                },
                shouldMergeWithAttachment: {
                    label: "Hợp nhất với tệp đính kèm",
                    description: "Có nên hợp nhất tin nhắn nếu tin nhắn cuối cùng có tệp đính kèm?"
                },
                useSpace: {
                    label: "Sử dụng không gian",
                    description: "Có thêm dấu cách giữa các tin nhắn khi hợp nhất thay vì dòng mới hay không."
                }
            }
        },
        messageClickActions: {
            name: "MessageClickActions",
            description: "Giữ Backspace và bấm để xóa, bấm đúp để chỉnh sửa/trả lời",
            option: {
                singleClickAction: {
                    label: "Hành động nhấp chuột một lần",
                    description: "Hành động chỉ bằng một cú nhấp chuột (tin nhắn của bạn)"
                },
                singleClickModifier: {
                    label: "Công cụ sửa đổi một cú nhấp chuột",
                    description: "Cần có công cụ sửa đổi cho hành động nhấp chuột bằng một cú nhấp chuột (tin nhắn của bạn)"
                },
                singleClickOthersAction: {
                    label: "Hành động nhấp chuột một lần (Khác)",
                    description: "Hành động chỉ bằng một cú nhấp chuột (tin nhắn của người khác)"
                },
                singleClickOthersModifier: {
                    label: "Công cụ sửa đổi một lần nhấp (Khác)",
                    description: "Cần có công cụ sửa đổi cho hành động nhấp chuột bằng một cú nhấp chuột (tin nhắn của người khác)"
                },
                doubleClickAction: {
                    label: "Hành động nhấp đúp",
                    description: "Hành động khi nhấp đúp (tin nhắn của bạn)"
                },
                doubleClickOthersAction: {
                    label: "Hành động nhấp đúp (Khác)",
                    description: "Hành động khi nhấp đúp (tin nhắn của người khác)"
                },
                doubleClickModifier: {
                    label: "Công cụ sửa đổi nhấp đúp",
                    description: "Cần có công cụ sửa đổi cho hành động nhấp đúp"
                },
                tripleClickAction: {
                    label: "Hành động nhấp ba lần",
                    description: "Hành động khi nhấp ba lần"
                },
                tripleClickModifier: {
                    label: "Công cụ sửa đổi nhấp chuột ba lần",
                    description: "Cần có công cụ sửa đổi cho hành động nhấp ba lần"
                },
                reactEmoji: {
                    label: "Phản ứng biểu tượng cảm xúc",
                    description: "Biểu tượng cảm xúc để sử dụng cho các hành động phản ứng"
                },
                addAdditionalReacts: {
                    label: "Thêm phản ứng bổ sung",
                    description: "Đồng thời thêm biểu tượng cảm xúc phản ứng được định cấu hình bổ sung"
                },
                additionalReactEmojis: {
                    label: "Biểu tượng cảm xúc phản ứng bổ sung",
                    description: "Các biểu tượng cảm xúc bổ sung cần thêm khi sử dụng tác vụ React (được phân tách bằng dấu phẩy/dòng mới, tối đa {{count}})"
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
                    description: "Hết thời gian chờ để phân biệt nhấp đúp/ba lần (ms)"
                },
                doubleClickHoldThreshold: {
                    label: "Ngưỡng giữ nhấp đúp",
                    description: "Thời gian giữ tối đa cho hành động nhấp đúp (ms). Giữ lâu hơn cho phép chọn văn bản"
                },
                deferDoubleClickForTriple: {
                    label: "Trì hoãn nhấp đúp cho ba lần",
                    description: "Trì hoãn nhấp đúp để cho phép thao tác nhấp ba lần (tắt thao tác nhấp ba lần khi tắt)"
                },
                selectionHoldTimeout: {
                    label: "Hết thời gian giữ lựa chọn",
                    description: "Hết thời gian chờ để cho phép chọn văn bản (ms)"
                },
                quoteWithReply: {
                    label: "Trích dẫn kèm câu trả lời",
                    description: "Khi trích dẫn cũng trả lời tin nhắn"
                },
                useSelectionForQuote: {
                    label: "Sử dụng lựa chọn để báo giá",
                    description: "Khi trích dẫn, hãy sử dụng văn bản đã chọn nếu có"
                }
            },
            actions: {
                none: "Không có",
                delete: "Xóa bỏ",
                copyLink: "Sao chép liên kết",
                copyID: "Sao chép giấy tờ tùy thân",
                copyContent: "Sao chép nội dung",
                copyUserID: "Sao chép ID người dùng",
                edit: "Biên tập",
                reply: "Hồi đáp",
                react: "Phản ứng",
                openThread: "Mở chủ đề",
                openTab: "Mở tab",
                quote: "Trích dẫn",
                pin: "Ghim"
            },
            missingPermissions: {
                react: "Không thể phản ứng: Thiếu quyền",
                pin: "Không thể ghim: Thiếu quyền",
            },
            cannotQuote: "Không thể trích dẫn loại tin nhắn này",
            copy: {
                messageId: "Đã sao chép ID tin nhắn!",
                messageContent: "Đã sao chép nội dung tin nhắn!",
                userId: "ID người dùng đã được sao chép!"
            },
            linkCopied: "Đã sao chép liên kết!"
        },
        messageColors: {
            name: "MessageColors",
            description: "Hiển thị mã màu như #FF0042 bên trong tin nhắn",
            option: {
                renderType: {
                    label: "Loại kết xuất",
                    description: "Cách hiển thị màu sắc",
                    textColor: "Màu văn bản",
                    block: "Chặn lân cận",
                    backgroundColor: "Màu nền"
                },
                enableShortHexCodes: {
                    label: "Kích hoạt mã Hex ngắn",
                    description: "Kích hoạt mã hex 3 char như #39f"
                },
                blockView: {
                    label: "Loại xem khối",
                    description: "Cách hiển thị khối màu",
                    right: "Bên phải",
                    left: "Bên trái",
                    both: "Cả hai bên"
                }
            }
        },
        messageFetchTimer: {
            name: "MessageFetchTimer",
            description: "Hiển thị mất bao lâu để tìm nạp tin nhắn cho kênh hiện tại",
            option: {
                showIcon: {
                    label: "Hiển thị biểu tượng",
                    description: "Hiển thị biểu tượng thời gian tìm nạp trên thanh thông báo"
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
            loaded: "Tin nhắn được tải trong {{time}}ms ({{timeAgo}})",
            day: "ngày{{s}} trước",
            hour: "giờ{{s}} trước",
            minute: "phút{{s}} trước",
            justNow: "ngay bây giờ"
        },
        messageLatency: {
            name: "MessageLatency",
            description: "Hiển thị chỉ báo cho các tin nhắn mất ≥n giây để gửi",
            day: "ngày",
            days: "ngày",
            hour: "giờ",
            hours: "giờ",
            minute: "phút",
            minutes: "phút",
            second: "thứ hai",
            seconds: "giây",
            millisecond: "mili giây",
            milliseconds: "mili giây",
            and: "Và",
            oldKotlinDetected: "Người dùng bị nghi ngờ đang sử dụng ứng dụng khách Discord Android cũ.",
            ahead: "Đồng hồ của người dùng này đang chạy trước {{delta}}.",
            delay: "Tin nhắn này được gửi với độ trễ {{delta}}.",
            delayedMessage: "Tin nhắn bị trì hoãn",
            oldAndroidClient: "Ứng dụng khách Discord Android cũ",
            option: {
                latency: {
                    label: "Độ trễ",
                    description: "Ngưỡng tính bằng giây cho chỉ báo độ trễ"
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
                    description: "Đừng thêm chỉ báo vào tin nhắn của riêng bạn"
                }
            }
        },
        messageLinkEmbeds: {
            name: "MessageLinkEmbeds",
            description: "Thêm bản xem trước vào các tin nhắn liên kết một tin nhắn khác",
            option: {
                messageBackgroundColor: {
                    label: "Màu nền tin nhắn",
                    description: "Màu nền cho thư ở dạng nhúng phong phú"
                },
                automodEmbeds: {
                    label: "Nhúng Automod",
                    description: "Sử dụng nội dung nhúng tự động thay vì nội dung nhúng phong phú (nhỏ hơn nhưng ít thông tin hơn)",
                    always: "Luôn sử dụng nhúng automod",
                    prefer: "Thích nhúng tự động sửa đổi nhưng sử dụng nhúng phong phú nếu một số nội dung không thể hiển thị",
                    never: "Không bao giờ sử dụng nhúng automod"
                },
                listMode: {
                    label: "Chế độ danh sách",
                    description: "Nên sử dụng danh sách ID làm danh sách đen hay danh sách trắng",
                    blacklist: "Danh sách đen",
                    whitelist: "Danh sách trắng"
                },
                idList: {
                    label: "Danh sách ID",
                    description: "ID bang hội/kênh/người dùng vào danh sách đen hoặc danh sách trắng (phân tách bằng dấu phẩy)"
                },
                clearMessageCache: {
                    label: "Xóa bộ nhớ đệm tin nhắn",
                    description: "Xóa bộ đệm tin nhắn được liên kết"
                }
            },
            noContent: {
                noAttachments: "không có nội dung {{count}} nhúng{{s}}",
                noEmbeds: "không có nội dung {{count}} đính kèm{{s}}",
                both: "không có nội dung, {{attachments}} tệp đính kèm{{attachmentsS}} và {{embeds}} nhúng{{embedsS}}"
            },
            dm: "Tin nhắn trực tiếp",
            groupDm: "Nhóm DM",
            server: "Máy chủ"
        },
        messageLinkTooltip: {
            name: "MessageLinkTooltip",
            description: "Thêm chú giải công cụ có bản xem trước tin nhắn khi di chuột qua các liên kết tin nhắn, câu trả lời và tin nhắn được chuyển tiếp.",
            loading: "Đang tải...",
            option: {
                onLink: {
                    label: "Trên liên kết",
                    description: "Hiển thị chú giải công cụ khi di chuột qua liên kết tin nhắn"
                },
                onReply: {
                    label: "Khi trả lời",
                    description: "Hiển thị chú giải công cụ khi di chuột qua thư trả lời"
                },
                onForward: {
                    label: "Về phía trước",
                    description: "Hiển thị chú giải công cụ khi di chuột qua các tin nhắn được chuyển tiếp"
                },
                display: {
                    label: "Trưng bày",
                    description: "Kiểu hiển thị",
                    auto: "Tương tự như tin nhắn",
                    compact: "Nhỏ gọn",
                    cozy: "Ấm áp"
                }
            }
        },
        messageLogger: {
            name: "MessageLogger",
            description: "Tạm thời ghi lại các tin nhắn đã xóa và chỉnh sửa.",
            removeMessage: "Xóa lịch sử tin nhắn",
            removeMessageTemporary: "Xóa tin nhắn (Tạm thời)",
            clearMessageLog: "Xóa nhật ký tin nhắn",
            showDiff: "Hiển thị khác biệt",
            modal: {
                edit: {
                    title: "Lịch sử chỉnh sửa tin nhắn",
                    tooltip: "Trạng thái chỉnh sửa này chưa được ghi lại nên không thể hiển thị."
                }
            },
            option: {
                deleteStyle: {
                    label: "Xóa kiểu",
                    description: "Phong cách của tin nhắn đã xóa",
                    text: "Văn bản màu đỏ",
                    overlay: "Lớp phủ màu đỏ"
                },
                logDeletes: {
                    label: "Xóa nhật ký",
                    description: "Có ghi lại các tin nhắn đã xóa hay không"
                },
                collapseDeleted: {
                    label: "Đã xóa thu gọn",
                    description: "Có thu gọn tin nhắn đã xóa hay không, tương tự như tin nhắn bị chặn"
                },
                logEdits: {
                    label: "Nhật ký chỉnh sửa",
                    description: "Có ghi lại các tin nhắn đã chỉnh sửa hay không"
                },
                inlineEdits: {
                    label: "Chỉnh sửa nội tuyến",
                    description: "Có hiển thị lịch sử chỉnh sửa như một phần nội dung tin nhắn hay không"
                },
                ignoreBots: {
                    label: "Bỏ qua Bot",
                    description: "Có bỏ qua tin nhắn của bot hay không"
                },
                ignoreSelf: {
                    label: "Bỏ qua bản thân",
                    description: "Có nên tự mình bỏ qua tin nhắn hay không"
                },
                ignoreSelfEdits: {
                    label: "Bỏ qua các chỉnh sửa của chính mình",
                    description: "Có bỏ qua các chỉnh sửa do chính bạn thực hiện hay không"
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
                    label: "Bỏ qua Bang hội",
                    description: "Danh sách ID bang hội được phân tách bằng dấu phẩy để bỏ qua"
                },
                showEditDiffs: {
                    label: "Hiển thị chỉnh sửa khác biệt",
                    description: "Hiển thị sự khác biệt trực quan giữa các phiên bản tin nhắn đã chỉnh sửa"
                },
                separatedDiffs: {
                    label: "Khác biệt riêng biệt",
                    description: "Tách riêng phần bổ sung và loại bỏ trong các khác biệt để có sự khác biệt dễ đọc hơn"
                }
            }
        },
        messageLoggerEnhanced: {
            name: "MessageLoggerEnhanced",
            description: "Cải tiến plugin MessageLogger với các tính năng bổ sung.",
            updateImageCacheDir: "Đã cập nhật thành công thư mục bộ đệm hình ảnh.",
            updateLogsDir: "Đã cập nhật thành công thư mục nhật ký.",
            failedUpdate: "Không thể cập nhật thư mục.",
            blacklist: "Danh sách đen",
            whitelist: "Danh sách trắng",
            failedToRemove: "Không thể xóa tin nhắn",
            successfullyImported: "Đã nhập nhật ký thành công",
            errorImportingLogs: "Lỗi khi nhập nhật ký. Kiểm tra bảng điều khiển để biết thêm thông tin",
            importing: "Đang nhập khẩu...",
            importLogs: "Nhập nhật ký",
            exporting: "Đang xuất...",
            exportLogs: "Xuất nhật ký",
            alert: {
                clearLogs: {
                    title: "Xóa nhật ký",
                    body: "Bạn có chắc chắn muốn xóa tất cả nhật ký không?",
                    confirmText: "Thông thoáng",
                    cancel: "Hủy bỏ"
                },
                clearVisibleLogs: {
                    title: "Xóa nhật ký hiển thị",
                    body: "Bạn có chắc chắn muốn xóa nhật ký {{messages}} không?",
                    confirmText: "Thông thoáng",
                    cancel: "Hủy bỏ"
                },
                cleared: "Đã xóa cơ sở dữ liệu nhật ký tin nhắn và bộ nhớ đệm."
            },
            context: {
                title: "Trình ghi tin nhắn",
                jumpToMessage: "Chuyển tới tin nhắn",
                openUserProfile: "Mở hồ sơ người dùng",
                copyContent: "Sao chép nội dung",
                copyUserId: "Sao chép ID người dùng",
                copyMessageId: "Sao chép ID tin nhắn",
                copyChannelId: "Sao chép ID kênh",
                copyServerId: "Sao chép ID máy chủ",
                deleteLog: "Xóa nhật ký",
                fromUsernameDm: "Từ DM của {{username}}",
                fromGroupDm: "Từ {{channelName}} Nhóm DM",
                fromServerChannel: "Từ {{channelName}} ở {{serverName}}",
                moveTypeTo: "Di chuyển {{type}} tới {{destination}}",
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
                server: "Máy chủ",
                user: "người dùng",
                channel: "Kênh"
            },
            button: {
                chooseFolder: "Chọn thư mục",
                browse: "Duyệt qua",
                clearLogs: "Xóa tất cả nhật ký",
                clearVisibleLogs: "Xóa nhật ký hiển thị",
                sortOldest: "Sắp xếp cũ nhất trước",
                sortNewest: "Sắp xếp mới nhất đầu tiên",
                loadMore: "Tải thêm",
                noResults: "Không có kết quả nào trong {{tab}}",
                tryOtherTabs: "Có thể thử {{nextTab}} hoặc {{lastTab}}",
                importLogs: "Nhập nhật ký"
            },
            modal: {
                title: "Lọc tin nhắn",
                deleted: "Đã xóa",
                edited: "Đã chỉnh sửa",
                ghostPing: "ma ping",
                empty: "trống rỗng à",
                importLogs: "ML Nâng cao hiện lưu trữ nhật ký trong indexeddb. Bạn cần nhập nhật ký cũ của mình từ thư mục nhật ký. Quá trình nhập sẽ không ghi đè nhật ký hiện có"
            },
            clear: {
                title: "Xóa nhật ký",
                description: "Bạn có chắc chắn muốn xóa tất cả nhật ký không?",
                confirm: "Thông thoáng",
                cancel: "Hủy bỏ"
            },
            option: {
                saveMessages: {
                    label: "Lưu tin nhắn",
                    description: "Có lưu lại tin nhắn đã xóa và chỉnh sửa hay không."
                },
                saveImages: {
                    label: "Lưu hình ảnh",
                    description: "Lưu các tệp đính kèm đã xóa."
                },
                sortNewest: {
                    label: "Sắp xếp mới nhất đầu tiên",
                    description: "Sắp xếp nhật ký theo mới nhất."
                },
                cacheMessagesFromServers: {
                    label: "Tin nhắn bộ nhớ đệm từ máy chủ",
                    description: "Thông thường, trình ghi nhật ký tin nhắn chỉ ghi nhật ký từ các ID và DM nằm trong danh sách trắng, việc bật tính năng này có nghĩa là nó cũng sẽ ghi nhật ký tin nhắn từ tất cả các máy chủ. Lưu ý rằng điều này có thể khiến bộ đệm vượt quá giới hạn, dẫn đến một số thư bị bỏ sót. Nếu bạn đang ở trong nhiều máy chủ, điều này có thể làm tăng đáng kể khả năng thư được ghi lại, điều này có thể dẫn đến bản ghi thư lớn và bao gồm các thư không liên quan."
                },
                ignoreBots: {
                    label: "Bỏ qua Bot",
                    description: "Có bỏ qua tin nhắn của bot hay không"
                },
                ignoreWebhooks: {
                    label: "Bỏ qua Webhooks",
                    description: "Có bỏ qua tin nhắn của webhooks hay không"
                },
                ignoreSelf: {
                    label: "Bỏ qua bản thân",
                    description: "Có nên tự mình bỏ qua tin nhắn hay không"
                },
                ignoreMutedGuilds: {
                    label: "Bỏ qua các bang hội bị tắt tiếng",
                    description: "Tin nhắn trong các bang hội bị tắt tiếng sẽ không được ghi lại. Người dùng/kênh trong danh sách trắng trong bang hội bị tắt tiếng sẽ vẫn được ghi lại."
                },
                ignoreMutedCategories: {
                    label: "Bỏ qua các danh mục bị tắt tiếng",
                    description: "Tin nhắn trong các kênh thuộc danh mục bị tắt tiếng sẽ không được ghi lại. Người dùng/kênh trong danh sách trắng trong bang hội bị tắt tiếng sẽ vẫn được ghi lại."
                },
                ignoreMutedChannels: {
                    label: "Bỏ qua các kênh bị tắt tiếng",
                    description: "Tin nhắn trong các kênh bị tắt tiếng sẽ không được ghi lại. Người dùng/kênh trong danh sách trắng trong bang hội bị tắt tiếng sẽ vẫn được ghi lại."
                },
                alwaysLogDirectMessages: {
                    label: "Luôn ghi lại tin nhắn trực tiếp",
                    description: "Luôn đăng nhập DM"
                },
                alwaysLogCurrentChannel: {
                    label: "Luôn ghi lại kênh hiện tại",
                    description: "Luôn ghi lại kênh đã chọn hiện tại. Các kênh/người dùng nằm trong danh sách đen vẫn sẽ bị bỏ qua."
                },
                permanentlyRemoveLogByDefault: {
                    label: "Xóa vĩnh viễn nhật ký theo mặc định",
                    description: "Nút xóa nhật ký Base MessageLogger sẽ xóa nhật ký vĩnh viễn"
                },
                hideMessageFromMessageLoggers: {
                    label: "Ẩn tin nhắn khỏi trình ghi tin nhắn",
                    description: "Khi được bật, nút menu ngữ cảnh sẽ được thêm vào tin nhắn để cho phép bạn xóa tin nhắn mà không bị các trình ghi nhật ký khác ghi lại. Có thể không an toàn, hãy tự chịu rủi ro khi sử dụng."
                },
                showLogsButton: {
                    label: "Nút Hiển thị nhật ký",
                    description: "Chuyển sang bất cứ khi nào hiển thị hộp công cụ hay không"
                },
                showWhereMessageIsFrom: {
                    label: "Hiển thị tin nhắn đến từ đâu",
                    description: "Hiển thị kênh tin nhắn/tên tác giả và tên máy chủ"
                },
                messagesToDisplayAtOnceInLogs: {
                    label: "Tin nhắn sẽ hiển thị cùng một lúc trong nhật ký",
                    description: "Số lượng tin nhắn hiển thị cùng một lúc trong nhật ký và số lượng tin nhắn cần tải khi tải thêm tin nhắn trong nhật ký."
                },
                hideMessageFromMessageLoggersDeletedMessage: {
                    label: "Ẩn tin nhắn khỏi trình ghi nhật ký tin nhắn Đã xóa tin nhắn",
                    description: "Nội dung tin nhắn cần thay thế khi sử dụng tính năng ẩn tin nhắn khỏi trình ghi nhật ký tin nhắn."
                },
                messageLimit: {
                    label: "Giới hạn tin nhắn",
                    description: "Số lượng tin nhắn tối đa để lưu. Tin nhắn cũ hơn sẽ bị xóa khi đạt đến giới hạn. 0 có nghĩa là không có giới hạn"
                },
                attachmentSizeLimitInMegabytes: {
                    label: "Giới hạn kích thước tệp đính kèm tính bằng Megabyte",
                    description: "Kích thước tối đa của tệp đính kèm tính bằng megabyte cần lưu. Các tệp đính kèm lớn hơn kích thước này sẽ không được lưu."
                },
                attachmentFileExtensions: {
                    label: "Phần mở rộng tệp đính kèm",
                    description: "Danh sách các phần mở rộng tệp được phân tách bằng dấu phẩy để lưu. Các tệp đính kèm có phần mở rộng tệp không có trong danh sách này sẽ không được lưu. Để trống để lưu tất cả các tệp đính kèm."
                },
                cacheLimit: {
                    label: "Giới hạn bộ nhớ đệm",
                    description: "Số lượng tin nhắn tối đa để giữ trong bộ nhớ cache. Tin nhắn cũ hơn sẽ bị xóa khi đạt đến giới hạn."
                },
                timeBasedCleanupMinutes: {
                    label: "Số phút dọn dẹp dựa trên thời gian",
                    description: "Khoảng thời gian tính bằng phút để thực hiện dọn dẹp các tin nhắn cũ hơn giới hạn tin nhắn dựa trên thời gian."
                },
                preserveCurrentChannel: {
                    label: "Bảo toàn kênh hiện tại",
                    description: "Khi được bật, các tin nhắn trong kênh hiện được chọn của bạn sẽ không bị ảnh hưởng bởi việc dọn dẹp theo thời gian."
                },
                whitelistedIds: {
                    label: "ID thuộc danh sách trắng",
                    description: "Máy chủ, kênh hoặc ID người dùng được đưa vào danh sách trắng."
                },
                blacklistedIds: {
                    label: "ID bị liệt vào danh sách đen",
                    description: "Máy chủ, kênh hoặc ID người dùng bị liệt vào danh sách đen."
                },
                imageCacheDir: {
                    label: "Thư mục bộ đệm hình ảnh",
                    description: "Chọn thư mục hình ảnh đã lưu"
                },
                logsDir: {
                    label: "Thư mục nhật ký",
                    description: "Chọn thư mục nhật ký"
                },
                importLogs: {
                    label: "Nhập nhật ký",
                    description: "Nhập nhật ký từ tệp"
                },
                exportLogs: {
                    label: "Xuất nhật ký",
                    description: "Xuất nhật ký từ IndexedDB"
                },
                openLogs: {
                    label: "Nhật ký mở",
                    description: "Nhật ký mở"
                },
                openImageCacheFolder: {
                    label: "Mở thư mục bộ đệm hình ảnh",
                    description: "Mở thư mục bộ đệm hình ảnh"
                },
                clearLogs: {
                    label: "Xóa nhật ký",
                    description: "Xóa nhật ký",
                    title: "Xóa nhật ký",
                    body: "Bạn có chắc chắn muốn xóa tất cả nhật ký không?",
                    confirmText: "Thông thoáng",
                    cancel: "Hủy bỏ"
                }
            }
        },
        messageNotifier: {
            name: "MessageNotifier",
            description: "Nâng cốc chúc mừng khi người dùng được chọn gửi tin nhắn",
            dm: "DM của họ",
            option: {
                users: {
                    label: "Người dùng",
                    description: "Danh sách ID người dùng được phân tách bằng dấu phẩy để nhận thông báo chúc mừng cho",
                    invalidId: "{{id}} không phải là ID người dùng hợp lệ"
                }
            },
            notification: {
                title: "{{username}} đã gửi tin nhắn",
                body: "Bấm để chuyển tới {{locationName}}"
            }
        },
        messageTags: {
            name: "MessageTags",
            description: "Cho phép bạn lưu tin nhắn và sử dụng chúng bằng một lệnh đơn giản.",
            notExist: "Thẻ **{{tagname}}** không tồn tại nữa! Vui lòng tải lại Discord của bạn để khắc phục :)",
            alreadyExist: "Thẻ có tên **{{tagname}}** đã tồn tại!",
            sentTag: "Thẻ **{{tagname}}** đã được gửi!",
            successCreate: "Thẻ **{{tagname}}** đã được tạo!",
            allTags: "Tất cả các thẻ của bạn:",
            noTags: "Rất tiếc! Chưa có thẻ nào, hãy sử dụng /tag create để tạo một thẻ!",
            noDeleteTag: "Thẻ **{{tagname}}** không tồn tại nên không thể xóa được!",
            successDelete: "Đã xóa thẻ thành công **{{name}}**!",
            tagPreview: "Thẻ có tên **{{name}}** không tồn tại!",
            option: {
                clyde: {
                    label: "Tin nhắn Clyde đang gửi",
                    description: "Nếu được bật, Clyde sẽ gửi cho bạn một tin nhắn tạm thời khi thẻ được sử dụng."
                },
                tagsList: {
                    label: "Danh sách thẻ",
                    description: ""
                }
            },
            command: {
                tags: {
                    description: "Quản lý tất cả các thẻ cho chính mình",
                    option: {
                        create: {
                            description: "Tạo một thẻ mới",
                            name: "The name of the tag to trigger the response",
                            message: "Thông điệp bạn sẽ gửi khi sử dụng thẻ này"
                        },
                        list: {
                            description: "Liệt kê tất cả các thẻ từ chính bạn"
                        },
                        delete: {
                            description: "Xóa thẻ khỏi chính bạn",
                            name: "The name of the tag to remove"
                        },
                        preview: {
                            description: "Xem trước thẻ mà không gửi công khai",
                            name: "The name of the tag to preview"
                        }
                    }
                }
            }
        },
        micLoopbackTester: {
            name: "MicLoopbackTester",
            description: "Thêm biểu tượng kiểm tra vòng lặp mic vào bảng người dùng",
            button: "Kiểm tra mic lặp lại"
        },
        middleClickTweaks: {
            name: "MiddleClickTweaks",
            description: "Nhiều chỉnh sửa nhấp chuột giữa khác nhau, chẳng hạn như dán và mở liên kết.",
            option: {
                openScope: {
                    label: "Phạm vi mở",
                    description: "Ngăn chặn việc nhấp chuột giữa vào các loại nội dung này để mở chúng.",
                    links: "Liên kết",
                    media: "Phương tiện truyền thông",
                    linksAndMedia: "Liên kết và phương tiện truyền thông",
                    none: "Không có"
                },
                pasteScope: {
                    label: "Dán phạm vi",
                    description: "Ngăn chặn nhấp chuột giữa dán trong những tình huống này.",
                    always: "Luôn ngăn chặn việc dán nhấp chuột giữa",
                    focus: "Chỉ ngăn chặn khi vùng văn bản không được tập trung",
                },
                pasteThreshold: {
                    label: "Dán ngưỡng",
                    description: "Một phần nghìn giây cho đến khi tính năng dán được bật lại sau lần nhấp chuột giữa."
                }
            }
        },
        moreCommands: {
            name: "MoreCommands",
            description: "Echo, Lenny, Mock và hơn thế nữa",
            command: {
                echo: {
                    description: "Gửi tin nhắn dưới dạng Clyde (cục bộ)"
                },
                lenny: {
                    description: "Gửi một khuôn mặt lenny"
                },
                mock: {
                    description: "người dân mock"
                },
                wordcount: {
                    description: "Đếm số từ trong tin nhắn",
                    response: "Tin nhắn chứa {{count}} từ."
                },
                flipcoin: {
                    description: "Lật một đồng xu và trả lại mặt ngửa hoặc mặt sấp",
                    heads: "đầu",
                    tails: "Đuôi",
                    response: "Đồng xu đã rơi vào {{result}}."
                },
                ask: {
                    description: "Đặt câu hỏi có/không và nhận được câu trả lời",
                    yes: "Đúng",
                    no: "KHÔNG",
                    maybe: "Có lẽ",
                    askAgain: "Hỏi lại sau",
                    definitelyNot: "Chắc chắn là không",
                    itIsCertain: "Đó là điều chắc chắn"
                },
                randomanimal: {
                    description: "Nhận một hình ảnh động vật ngẫu nhiên",
                    animal: "chọn con vật của bạn",
                    cat: "con mèo",
                    dog: "chó",
                    response: "Rất tiếc, hiện không thể tải hình ảnh động vật"
                },
                randomnumber: {
                    description: "Tạo một số ngẫu nhiên giữa hai giá trị",
                    min: "Giá trị tối thiểu",
                    max: "Giá trị tối đa",
                    response: "Số ngẫu nhiên giữa {{min}} và {{max}}: {{number}}"
                },
                choose: {
                    description: "Chọn ngẫu nhiên từ các tùy chọn được cung cấp",
                    option: "Danh sách lựa chọn được phân tách bằng dấu phẩy",
                    response: "Tôi chọn: {{choice}}"
                },
                systeminfo: {
                    description: "Hiển thị thông tin hệ thống",
                    platform: "Nền tảng",
                    deviceType: "Loại thiết bị",
                    mobile: "Điện thoại di động",
                    desktop: "Máy tính để bàn",
                    browser: "Trình duyệt",
                    cpuCores: "lõi CPU",
                    memory: "Ký ức",
                    screen: "Màn hình",
                    languages: "Ngôn ngữ",
                    network: "Mạng",
                    online: "Trực tuyến",
                    offline: "Ngoại tuyến",
                    failedToFetch: "Không thể tìm nạp thông tin hệ thống",
                    unknown: "Không xác định"
                },
                getuptime: {
                    description: "Nhận thời gian hoạt động của khách hàng",
                    response: "**Thời gian hoạt động của khách hàng**: {{uptime}} phút"
                },
                gettime: {
                    description: "Lấy thời gian hiện tại",
                    response: "Thời gian hiện tại là {{time}}"
                },
                transform: {
                    description: "Chuyển đổi văn bản của bạn với tùy chọn được chỉ định",
                    transformation: {
                        description: "Chuyển đổi để áp dụng cho văn bản của bạn",
                        lowercase: "Chuyển văn bản sang chữ thường",
                        uppercase: "Chuyển văn bản thành chữ hoa",
                        localeLowercase: "Chuyển đổi văn bản thành chữ thường của miền địa phương",
                        localeUppercase: "Chuyển văn bản thành chữ hoa của miền địa phương",
                        same: "Vẫn như cũ"
                    },
                    repeat: "lặp lại bao nhiêu lần",
                    reverse: "có nên đảo ngược văn bản không",
                    normalize: {
                        description: "Biểu mẫu chuẩn hóa văn bản",
                        nfc: "Mẫu chuẩn hóa C (NFC)",
                        nfd: "Mẫu chuẩn hóa D (NFD)",
                        nfkc: "Mẫu chuẩn hóa KC (NFKC)",
                        nfkd: "Mẫu chuẩn hóa KD (NFKD)"
                    },
                    text: "Chuyển đổi văn bản này"
                }
            }
        },
        moreKaomoji: {
            name: "MoreKaomoji",
            description: "Thêm nhiều Kaomoji vào Discord. ヽ(`▽`)/"
        },
        moreQuickReactions: {
            name: "MoreQuickReactions",
            description: "Cải thiện các nút phản ứng nhanh trong menu ngữ cảnh tin nhắn.",
            option: {
                reactionCount: {
                    label: "Số lượng phản ứng",
                    description: "Số lượng phản ứng (0-42)"
                },
                frequentEmojis: {
                    label: "Biểu tượng cảm xúc thường xuyên",
                    description: "Sử dụng biểu tượng cảm xúc được sử dụng thường xuyên thay vì biểu tượng cảm xúc yêu thích"
                },
                rows: {
                    label: "Hàng",
                    description: "Hàng phản ứng nhanh để hiển thị"
                },
                columns: {
                    label: "Cột",
                    description: "Cột phản ứng nhanh để hiển thị"
                },
                compactMode: {
                    label: "Chế độ nhỏ gọn",
                    description: "Chia tỷ lệ các nút lên 75% tỷ lệ ban đầu, đồng thời tăng biểu tượng cảm xúc bên trong lên tỷ lệ 125%. Biểu tượng cảm xúc sẽ có kích thước bằng 93,75% kích thước ban đầu. Nên có tối thiểu 5 cột"
                },
                scroll: {
                    label: "Cuộn",
                    description: "Cho phép cuộn danh sách biểu tượng cảm xúc"
                }
            }
        },
        moreUserTags: {
            name: "MoreUserTags",
            description: "Thêm thẻ cho webhooks và vai trò kiểm duyệt (chủ sở hữu, quản trị viên, v.v.)",
            tag: {
                webhook: {
                    name: "Webhook",
                    description: "Người dùng này là một webhook"
                },
                owner: {
                    name: "Owner",
                    description: "Sở hữu máy chủ"
                },
                admin: {
                    name: "Admin",
                    description: "Có sự cho phép của quản trị viên"
                },
                staff: {
                    name: "Staff",
                    description: "Có thể quản lý máy chủ, kênh hoặc vai trò"
                },
                mod: {
                    name: "Mod",
                    description: "Có thể quản lý tin nhắn hoặc đá/cấm người"
                },
                vcmod: {
                    name: "VC Mod",
                    description: "Có thể quản lý cuộc trò chuyện thoại"
                },
                chatmod: {
                    name: "Chat Mod",
                    description: "Có thể quản lý tin nhắn"
                }
            },
            modal: {
                example: "Ví dụ",
                tag: "Nhãn",
                customTextPlaceholder: "Văn bản trên thẻ (mặc định: {{displayName}})",
                messages: "Hiển thị trong tin nhắn",
                memberList: "Hiển thị trong danh sách thành viên và hồ sơ"
            },
            option: {
                dontShowForBots: {
                    label: "Không hiển thị cho bot",
                    description: "Không hiển thị thêm thẻ cho bot (ngoại trừ webhook)"
                },
                dontShowBotTag: {
                    label: "Không hiển thị thẻ bot",
                    description: "Chỉ hiển thị các thẻ bổ sung cho bot / Ẩn văn bản [APP]"
                },
                showWebhookTagFully: {
                    label: "Hiển thị đầy đủ thẻ webhook",
                    description: "Hiển thị thẻ Webhook trong các kênh được theo dõi như thông báo"
                },
                tagSettings: {
                    label: "Cài đặt thẻ",
                    description: "lấp đầy tôi"
                }
            }
        },
        morse: {
            name: "Morse",
            description: "Lệnh gạch chéo để dịch sang/từ mã morse.",
            command: {
                morse: {
                    description: "Dịch sang hoặc từ mã Morse",
                    message: "Văn bản cần chuyển đổi"
                }
            }
        },
        moyai: {
            name: "Moyai",
            description: "🗿🗿🗿🗿🗿🗿🗿🗿",
            option: {
                volume: {
                    label: "Âm lượng",
                    description: "Khối lượng của 🗿🗿🗿"
                },
                quality: {
                    label: "Chất lượng",
                    description: "Chất lượng của 🗿🗿🗿",
                    normal: "Bình thường",
                    hd: "HD"
                },
                triggerWhenUnfocused: {
                    label: "Kích hoạt khi không tập trung",
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
            name: "MusicControls",
            description: "Điều khiển nhạc và lời bài hát cho nhiều dịch vụ",
            option: {
                spotifySectionTitle: {
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
                    description: "Mở URI Spotify thay vì URL Spotify. Sẽ chỉ hoạt động nếu bạn đã cài đặt Spotify và có thể không hoạt động trên tất cả các nền tảng"
                },
                previousButtonRestartsTrack: {
                    label: "Nút trước Khởi động lại theo dõi",
                    description: "Khởi động lại bản nhạc hiện đang phát khi nhấn nút trước đó nếu thời gian phát >3 giây"
                },
                tidalSectionTitle: {
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
                    description: "{{app}} là bắt buộc đối với các cài đặt này"
                },
                showYoutubeMusicControls: {
                    label: "Hiển thị điều khiển âm nhạc trên YouTube",
                    description: "Hiển thị các nút điều khiển nhạc cho YouTube Music"
                },
                YoutubeMusicApiUrl: {
                    label: "URL API âm nhạc của YouTube",
                    description: "URL của máy chủ API YouTube Music bạn đang sử dụng"
                },
                hoverControls: {
                    label: "Điều khiển di chuột",
                    description: "Hiển thị điều khiển khi di chuột"
                },
                showMusicNoteOnNoLyrics: {
                    label: "Hiển thị nốt nhạc trên No Lyrics",
                    description: "Hiển thị biểu tượng nốt nhạc khi không tìm thấy lời bài hát"
                },
                lyricsPosition: {
                    label: "Vị trí lời bài hát",
                    description: "Vị trí của bảng lời bài hát",
                    above: "(Những) Người chơi ở trên",
                    below: "(Những) người chơi bên dưới"
                },
                lyricsProvider: {
                    label: "Nhà cung cấp lời bài hát",
                    description: "Lời bài hát được lấy từ đâu",
                    spotify: "Spotify (Musixmatch)",
                    LRCLIB: "LRCLIB"
                },
                spotifyLyricsApiUrl: {
                    label: "URL API lời bài hát Spotify",
                    description: "URL cơ sở của API lời bài hát Spotify."
                },
                translateTo: {
                    label: "Dịch sang",
                    description: "Dịch lời bài hát sang - Thay đổi điều này sẽ xóa các bản dịch hiện có",
                    cleared: "Đã xóa bản dịch"
                },
                lyricsConversion: {
                    label: "Chuyển đổi lời bài hát",
                    description: "Tự động dịch hoặc La-tinh hóa lời bài hát",
                    none: "Không có",
                    translate: "Dịch",
                    romanize: "La Mã hóa"
                },
                fallbackProvider: {
                    label: "Nhà cung cấp dự phòng",
                    description: "Khi nhà cung cấp lời bài hát không thành công, hãy thử các nhà cung cấp khác"
                },
                showFailedToasts: {
                    label: "Hiển thị lời chúc mừng không thành công",
                    description: "Hiển thị nâng ly khi lời bài hát không tải được"
                },
                purgeLyricsCache: {
                    label: "Xóa bộ nhớ đệm lời bài hát",
                    description: "Xóa tất cả lời bài hát và bản dịch được lưu trong bộ nhớ đệm",
                    button: "Xóa bộ nhớ đệm",
                    cacheLyricsPurged: "Bộ nhớ đệm lời bài hát đã bị xóa"
                }
            },
            context: {
                spotify: {
                    label: "Menu lời bài hát Spotify",
                    type: "Spotify {{type}} Thực đơn",
                    copy: "Sao chép {{type}} Tên",
                    link: "Sao chép liên kết {{type}}",
                    open: "Mở {{type}} trong Spotify",
                    album: "Menu Album Spotify"
                },
                tidal: {
                    label: "Menu lời bài hát thủy triều",
                    lyrics: "Lời bài hát thủy triều",
                    type: "Thủy triều {{name}} Thực đơn",
                    copy: "Sao chép {{name}} Tên",
                    open: "Mở {{name}} trong Tidal",
                    album: "Thực đơn album thủy triều"
                },
                ytm: {
                    type: "Menu YouTube Âm nhạc {{name}}",
                    copy: "Sao chép {{name}} Tên",
                    open: "Mở {{name}} trong YouTube Music",
                    album: "Menu Album nhạc trên YouTube",
                    muted: "Đã tắt tiếng"
                },
                lyrics: {
                    provider: "Nhà cung cấp lời bài hát",
                    saved: "đã lưu",
                    notFound: "Không tìm thấy lời bài hát được đồng bộ hóa"
                },
                copy: {
                    currentLyrics: "Sao chép lời bài hát hiện tại"
                }
            },
            alert: {
                lyricCopied: "Lời bài hát đã được sao chép vào clipboard!",
                noLyrics: "Không có lời bài hát",
                noLyricsTo: "Không có lời bài hát cho {{translated}}",
                translate: "dịch",
                romanize: "La-tinh hóa",
                lyricsFetchFailed: "Tải lời bài hát không thành công",
                failedToFetchLyrics: "Không tìm nạp được {{translated}}",
                translation: "dịch thuật",
                romanization: "sự La-tinh hóa",
                failedToFetchTranslation: "Không tìm nạp được {{translated}} lời bài hát"
            },
            modal: {
                install: {
                    title: "Cách cài đặt",
                    install: "Cài đặt {{link}} từ đây, sau đó đi tới cài đặt TidalLuna → Cửa hàng plugin → Cài đặt @vmohammad/api",
                    tidaluna: "TidaLuna"
                },
                player: {
                    noPlaying: "Không có bản nhạc nào đang phát",
                    artist: "Nghệ sĩ:",
                    album: "Anbum:",
                    noLyrics: "Chưa có lời bài hát :(",
                    progress: "Tiến triển",
                    totalDuration: "Tổng thời lượng"
                },
                type: {
                    song: "bài hát",
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
                failed: "Không thể hiển thị Phương thức :(",
                checkConsole: "Kiểm tra bảng điều khiển để tìm lỗi",
                invalidUrlCustomApi: "Định dạng URL không hợp lệ cho URL máy chủ API tùy chỉnh"
            }
        },
        mutualGroupDMs: {
            name: "MutualGroupDMs",
            description: "Hiển thị DM nhóm chung trong hồ sơ",
            no: "Không có nhóm chung",
            mutualGroup: "{{count}} Nhóm tương hỗ{{s}}",
            members: "Thành viên",
            noGroup: "Không có DM nhóm chung",
            header: "Nhóm tương hỗ"
        },
        neverPausePreviews: {
            name: "NeverPausePreviews",
            description: "Ngăn chặn việc tạm dừng bản xem trước trong cuộc gọi/PiP (chia sẻ màn hình, luồng, v.v.) ngay cả khi khách hàng mất tiêu điểm",
            about: "Plugin này sẽ khiến Discord sử dụng nhiều tài nguyên hơn bình thường"
        },
        newGuildSettings: {
            name: "NewGuildSettings",
            description: "Tự động tắt tiếng máy chủ mới và thay đổi nhiều cài đặt khác khi tham gia",
            context: {
                apply: "Áp dụng Cài đặt bang hội mới"
            },
            option: {
                guild: {
                    label: "Hội câm",
                    description: "Tự động tắt tiếng Guild"
                },
                messages: {
                    label: "Cài đặt thông báo máy chủ",
                    description: "Cài đặt thông báo máy chủ",
                    all: "Tất cả tin nhắn",
                    mentions: "Chỉ @đề cập",
                    nothing: "Không có gì",
                    default: "Máy chủ mặc định"
                },
                everyone: {
                    label: "Ngăn chặn @everyone và @here",
                    description: "Ngăn chặn @everyone và @here"
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
                    description: "Tự động tắt tiếng sự kiện mới"
                },
                showAllChannels: {
                    label: "Hiển thị tất cả các kênh",
                    description: "Tự động hiển thị tất cả các kênh"
                },
                mobilePush: {
                    label: "Tắt tiếng thông báo đẩy trên thiết bị di động",
                    description: "Tự động tắt thông báo đẩy trên thiết bị di động"
                },
                voiceChannels: {
                    label: "Kênh thoại",
                    description: "Tự động ẩn tên trong các kênh Thoại"
                }
            }
        },
        newPluginsManager: {
            name: "NewPluginsManager",
            description: "Tiện ích thông báo cho bạn khi có plugin mới được thêm vào Plexcord",
            modal: {
                title: "Plugin và cài đặt mới",
                description: "Các plugin và cài đặt mới đã được thêm vào kể từ lần truy cập trước của bạn. Vui lòng xem lại các bổ sung mới bên dưới.",
                tooltip: "Loại bỏ phiên này",
                dontShowAgain: "Đừng hiển thị lại điều này",
                restartRequired: "Cần phải khởi động lại để áp dụng các thay đổi",
                restart: "Khởi động lại",
                continue: "Tiếp tục"
            }
        },
        noAppsAllowed: {
            name: "NoAppsAllowed",
            description: "Trả thẻ của bot về dạng ban đầu"
        },
        noBlockedMessages: {
            name: "NoBlockedMessages",
            description: "Ẩn hoàn toàn tất cả các tin nhắn bị chặn/bỏ qua khỏi cuộc trò chuyện",
            option: {
                alsoHideIgnoredUsers: {
                    label: "Đồng thời ẩn người dùng bị bỏ qua",
                    description: "Đồng thời ẩn tin nhắn khỏi người dùng bị bỏ qua."
                },
                disableNotifications: {
                    label: "Tắt thông báo",
                    description: "Ẩn thông báo tin nhắn mới cho người dùng bị chặn. Luôn đúng nếu 'Ẩn người dùng mặc định' được bật bên dưới và người dùng kích hoạt thông báo không được miễn trong 'Ghi đè người dùng'."
                },
                allowAutoModMessages: {
                    label: "Cho phép tin nhắn AutoMod",
                    description: "Cho phép tin nhắn được gửi bởi AutoMod bỏ qua việc lọc."
                },
                hideBlockedUserReplies: {
                    label: "Ẩn câu trả lời của người dùng bị chặn",
                    description: "Ẩn tin nhắn từ những người dùng bị chặn trong chủ đề nếu bạn đã tham gia chủ đề này."
                },
                defaultHideUsers: {
                    label: "Ẩn người dùng mặc định",
                    description: "Nếu được bật, tin nhắn từ những người dùng bị chặn sẽ bị ẩn hoàn toàn và thay vào đó, mọi tin nhắn từ ID người dùng trong danh sách ghi đè sẽ bị thu gọn (hành vi Discord mặc định). Nếu bị tắt, tin nhắn từ người dùng bị chặn sẽ bị thu gọn và thay vào đó mọi tin nhắn từ ID người dùng trong danh sách ghi đè sẽ bị ẩn hoàn toàn."
                },
                overrideUsers: {
                    label: "Ghi đè người dùng",
                    description: "Danh sách ID người dùng được phân tách bằng dấu phẩy sẽ bị ẩn hoặc thu gọn thay vì hành vi mặc định đã chọn ở trên."
                }
            }
        },
        noBulletPoints: {
            name: "NoBulletPoints",
            description: "Ngăn bạn gõ dấu đầu dòng đánh dấu (hôi thối)"
        },
        noDeepLinks: {
            name: "DisableDeepLinks",
            description: "Vô hiệu hóa tính năng liên kết sâu dư thừa của Discord nhằm buộc bạn sử dụng Ứng dụng máy tính để bàn của họ"
        },
        noDeleteSafety: {
            name: "NoDeleteSafety",
            description: "Loại bỏ yêu cầu 'nhập tên máy chủ' khi xóa máy chủ",
            option: {
                confirmModal: {
                    label: "Xác nhận phương thức",
                    description: "Chế độ 'Bạn có chắc chắn muốn xóa' có nên được hiển thị không?"
                }
            },
            modal: {
                title: "Xóa máy chủ?",
                body: "Nó là vĩnh viễn, nếu điều đó không rõ ràng.",
                confirm: "Xóa bỏ",
                cancel: "Hủy bỏ"
            }
        },
        noDevtoolsWarning: {
            name: "NoDevtoolsWarning",
            description: "Tắt biểu ngữ 'HOLD UP' trong bảng điều khiển. Là một tác dụng phụ, nó cũng ngăn Discord ẩn mã thông báo của bạn, điều này ngăn cản việc đăng xuất ngẫu nhiên."
        },
        noF1: {
            name: "NoF1",
            description: "Vô hiệu hóa liên kết trợ giúp F1."
        },
        noMaskedUrlPaste: {
            name: "NoMaskedUrlPaste",
            description: "Dán liên kết trong khi đang chọn văn bản sẽ không dán dưới dạng URL bị ẩn"
        },
        noMirroredCamera: {
            name: "NoMirroredCamera",
            description: "Ngăn không cho máy ảnh được phản chiếu trên màn hình của bạn"
        },
        noModalAnimation: {
            name: "NoModalAnimation",
            description: "Loại bỏ hoạt ảnh dài 300ms khi mở hoặc đóng các chế độ"
        },
        noMosaic: {
            name: "NoMosaic",
            description: "Loại bỏ khảm hình ảnh Discord",
            option: {
                inlineVideo: {
                    label: "Video nội tuyến",
                    description: "Phát video không có chế độ quay vòng"
                }
            }
        },
        noNitroUpsell: {
            name: "NoNitroUpsell",
            description: "Loại bỏ TẤT CẢ các sản phẩm bán thêm Nitro của Discord bằng cách lừa khách hàng nghĩ rằng bạn có Nitro."
        },
        noOnboarding: {
            name: "NoOnboarding",
            description: "Bỏ qua quá trình giới thiệu của Discord để truy cập máy chủ nhanh hơn."
        },
        noOnboardingDelay: {
            name: "NoOnboardingDelay",
            description: "Bỏ qua độ trễ khi cài đặt chậm và khó chịu"
        },
        noPendingCount: {
            name: "NoPendingCount",
            description: "Loại bỏ số ping của các yêu cầu kết bạn, yêu cầu tin nhắn và ưu đãi Nitro.",
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
                    label: "Ẩn số lượng ưu đãi cao cấp",
                    description: "Ẩn số lượng ưu đãi Nitro"
                }
            }
        },
        noProfileThemes: {
            name: "NoProfileThemes",
            description: "Loại bỏ hoàn toàn các chủ đề hồ sơ Nitro khỏi mọi người trừ chính bạn."
        },
        noPushToTalk: {
            name: "NoPushToTalk",
            description: "Bỏ qua yêu cầu nhấn để nói đối với hoạt động bằng giọng nói trong các kênh thực thi yêu cầu đó."
        },
        noReplyMention: {
            name: "NoReplyMention",
            description: "Tắt ping trả lời theo mặc định",
            option: {
                userList: {
                    label: "Danh sách người dùng",
                    description: "Danh sách người dùng được phép hoặc miễn ping (cách nhau bằng dấu phẩy hoặc dấu cách)"
                },
                roleList: {
                    label: "Danh sách vai trò",
                    description: "Danh sách các vai trò cho phép hoặc miễn ping (phân tách bằng dấu phẩy hoặc dấu cách)"
                },
                shouldPingListed: {
                    label: "Nên liệt kê Ping",
                    description: "Hành vi",
                    dontPing: "Không ping người dùng/vai trò được liệt kê",
                    onlyPing: "Chỉ ping người dùng/vai trò được liệt kê"
                },
                inverseShiftReply: {
                    label: "Trả lời dịch chuyển ngược",
                    description: "Đảo ngược hành vi trả lời theo ca của Discord (cho phép người dùng đề cập đến trả lời theo ca)"
                }
            }
        },
        normalizeMessageLinks: {
            name: "NormalizeMessageLinks",
            description: "Loại bỏ canary/ptb khỏi các liên kết tin nhắn"
        },
        noRoleHeaders: {
            name: "NoRoleHeaders",
            description: "Tất cả chúng ta đều bình đẳng!! Loại bỏ các tiêu đề vai trò trong danh sách thành viên."
        },
        noRPC: {
            name: "NoRPC",
            description: "Vô hiệu hóa sự hiện diện phong phú của Discord"
        },
        noServerEmojis: {
            name: "NoServerEmojis",
            description: "Không hiển thị biểu tượng cảm xúc của máy chủ trong menu tự động hoàn thành.",
            option: {
                shownEmojis: {
                    label: "Biểu tượng cảm xúc được hiển thị",
                    description: "Chọn biểu tượng cảm xúc nào sẽ hiển thị trong menu tự động hoàn thành",
                    onlyUnicode: "Chỉ biểu tượng cảm xúc unicode",
                    currentServer: "Biểu tượng cảm xúc Unicode và biểu tượng cảm xúc máy chủ từ máy chủ hiện tại",
                    all: "Biểu tượng cảm xúc Unicode và tất cả biểu tượng cảm xúc của máy chủ (Mặc định Discord)"
                }
            }
        },
        noSystemBadge: {
            name: "NoSystemBadge",
            description: "Vô hiệu hóa biểu tượng số lượng chưa đọc trên thanh tác vụ và khay hệ thống."
        },
        notificationTitle: {
            name: "NotificationTitle",
            description: "Làm cho thông báo trên màn hình có nhiều thông tin hơn"
        },
        notificationVolume: {
            name: "NotificationVolume",
            description: "Đặt âm lượng tùy chỉnh cho thông báo Discord",
            option: {
                notificationVolume: {
                    label: "Khối lượng thông báo",
                    description: "Khối lượng thông báo"
                }
            }
        },
        noTypingAnimation: {
            name: "NoTypingAnimation",
            description: "Tắt hoạt ảnh gõ trong trò chuyện"
        },
        noUnblockToJump: {
            name: "NoUnblockToJump",
            description: "Cho phép bạn chuyển tới tin nhắn của những người dùng bị chặn hoặc bị bỏ qua và có thể là những người gửi thư rác mà không cần bỏ chặn họ."
        },
        onePingPerDM: {
            name: "OnePingPerDM",
            description: "Nếu tin nhắn chưa đọc được người dùng gửi trong DM nhiều lần, bạn sẽ chỉ nhận được một ping âm thanh.",
            option: {
                channelToAffect: {
                    label: "Kênh ảnh hưởng",
                    description: "Chọn loại DM để plugin tác động",
                    both: "Cả hai",
                    user: "DM của người dùng",
                    group: "DM nhóm"
                },
                allowMentions: {
                    label: "Cho phép đề cập",
                    description: "Nhận ping âm thanh cho @đề cập"
                },
                allowEveryone: {
                    label: "Cho phép mọi người",
                    description: "Nhận ping âm thanh cho @everyone và @here trong DM nhóm"
                },
                ignoreUsers: {
                    label: "Bỏ qua người dùng",
                    description: "ID người dùng (dấu phẩy + dấu cách) có ping KHÔNG BAO GIỜ được điều chỉnh"
                },
                alwaysPlaySound: {
                    label: "Luôn phát âm thanh",
                    description: "Phát âm thanh thông báo tin nhắn ngay cả khi nó bị tắt"
                }
            }
        },
        openInApp: {
            name: "OpenInApp",
            description: "Mở liên kết trong ứng dụng tương ứng thay vì trình duyệt của bạn",
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
                    description: "Mở liên kết VRChat trong ứng dụng VRCX"
                }
            },
            notification: {
                open: "Đã mở liên kết trong ứng dụng gốc"
            }
        },
        overrideForumDefaults: {
            name: "OverrideForumDefaults",
            description: "Cho phép bạn ghi đè thứ tự sắp xếp/bố cục diễn đàn mặc định. Bạn vẫn có thể thay đổi tùy theo từng kênh",
            option: {
                defaultLayout: {
                    label: "Thẻ mặc định",
                    description: "Bố cục nào sẽ được sử dụng làm mặc định",
                    list: "Danh sách",
                    gallery: "Phòng trưng bày"
                },
                defaultSortOrder: {
                    label: "Thứ tự sắp xếp mặc định",
                    description: "Thứ tự sắp xếp nào sẽ được sử dụng làm mặc định",
                    recentlyActive: "Hoạt động gần đây",
                    datePosted: "Ngày đăng"
                }
            }
        },
        partyMode: {
            name: "PartyMode",
            description: "Cho phép bạn sử dụng chế độ nhóm vì bữa tiệc không bao giờ kết thúc ✨",
            option: {
                superIntensePartyMode: {
                    label: "Chế độ tiệc tùng siêu mãnh liệt",
                    description: "Cường độ tiệc tùng",
                    normal: "Bình thường",
                    better: "Tốt hơn",
                    projectX: "Dự án X"
                }
            }
        },
        pauseInvitesForever: {
            name: "PauseInvitesForever",
            description: "Mang lại tùy chọn tạm dừng vô thời hạn các lời mời mà Discord đã xóa một cách dư thừa.",
            pauseIndefinitely: "Tạm dừng vô thời hạn"
        },
        permissionFreeWill: {
            name: "PermissionFreeWill",
            description: "Vô hiệu hóa các hạn chế phía máy khách đối với việc quản lý quyền của kênh.",
            option: {
                lockout: {
                    label: "Khóa",
                    description: "Bỏ qua việc ngăn chặn khóa quyền ('Khá chắc chắn rằng bạn không muốn làm điều này')"
                },
                onboarding: {
                    label: "Giới thiệu",
                    description: "Bỏ qua các yêu cầu tích hợp ('Thực hiện thay đổi này sẽ khiến máy chủ của bạn không tương thích […]')"
                }
            }
        },
        permissionsViewer: {
            name: "PermissionsViewer",
            description: "Xem các quyền mà người dùng hoặc kênh có và vai trò của máy chủ",
            view: "Xem quyền",
            option: {
                permissionsSortOrder: {
                    label: "Thứ tự sắp xếp quyền",
                    description: "Phương thức sắp xếp được sử dụng để xác định vai trò nào cấp cho người dùng một quyền nhất định",
                    highest: "Vai trò cao nhất",
                    lowest: "Vai trò thấp nhất"
                }
            },
            icon: {
                denied: "Từ chối",
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
                grantedBy: "Được cấp bởi",
                serverOwner: "Chủ sở hữu máy chủ",
                ownerRole: "Người sở hữu",
                sortingBy: "Sắp xếp theo {{method}}",
                highest: "Vai trò cao nhất",
                lowest: "Vai trò thấp nhất",
                details: "Chi tiết vai trò"
            }
        },
        petpet: {
            name: "PetPet",
            description: "Thêm lệnh gạch chéo /petpet để tạo ảnh GIF tai nghe từ bất kỳ hình ảnh nào",
            command: {
                petpet: {
                    description: "Tạo ảnh GIF thú cưng. Bạn chỉ có thể chỉ định một trong các tùy chọn hình ảnh",
                    delay: "Độ trễ giữa mỗi khung hình. Mặc định là 20.",
                    resolution: "Độ phân giải cho GIF. Mặc định là 120. Nếu bạn nhập một số điên rồ và nó đóng băng Discord thì đó là lỗi của bạn.",
                    image: "Đính kèm hình ảnh để sử dụng",
                    url: "URL để lấy hình ảnh từ",
                    user: "Người dùng có hình đại diện được sử dụng làm hình ảnh",
                    noServerPfp: "Sử dụng hình đại diện bình thường thay vì hình đại diện dành riêng cho máy chủ khi sử dụng tùy chọn 'người dùng'",
                    error: {
                        noImage: "Không có hình ảnh được chỉ định!",
                        delayTooLow: "Độ trễ phải ít nhất là 20.",
                    }
                }
            },
            error: {
                uploadNotImage: "Tải lên không phải là hình ảnh",
                fetchUserFailed: "Không tìm nạp được người dùng. Kiểm tra bảng điều khiển để biết thêm thông tin.",
                fetchImageFailed: "Đã xảy ra lỗi khi tải {{url}}. Kiểm tra bảng điều khiển để biết thêm thông tin."
            }
        },
        pictureInPicture: {
            name: "PictureInPicture",
            description: "Thêm Ảnh trong ảnh vào video (bên cạnh nút Tải xuống)",
            tooltip: "Chuyển đổi hình trong hình",
            option: {
                loop: {
                    label: "Vòng lặp",
                    description: "Có nên tạo vòng lặp video PiP hay không"
                }
            }
        },
        pinDMs: {
            name: "PinDMs",
            description: "Cho phép bạn ghim các kênh riêng tư vào đầu danh sách DM của mình. Để ghim/bỏ ghim hoặc sắp xếp lại các ghim, hãy nhấp chuột phải vào DM",
            context: {
                category: {
                    label: "Menu danh mục ghim DM",
                    edit: "Chỉnh sửa danh mục",
                    up: "Di chuyển lên",
                    down: "Di chuyển xuống",
                    delete: "Xóa danh mục",
                    unnamed: "ồ ồ"
                },
                pin: {
                    label: "Ghim DM",
                    addCategory: "Thêm danh mục"
                },
                unPin: {
                    label: "Bỏ ghim DM",
                    move: "Chuyển đến danh mục"
                }
            },
            option: {
                pinOrder: {
                    label: "Ghim thứ tự",
                    description: "DM được ghim sẽ hiển thị theo thứ tự nào?",
                    lastMessage: "Tin nhắn gần đây nhất",
                    custom: "Tùy chỉnh (nhấp chuột phải vào các kênh để sắp xếp lại)"
                },
                canCollapseDmSection: {
                    label: "Phần được ghim có thể thu gọn",
                    description: "Cho phép thu gọn phần DM chưa được phân loại"
                },
                dmSectionCollapsed: {
                    label: "Phần DM đã được thu gọn",
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
                    name: "Name",
                    color: "Màu sắc",
                    save: "Cứu",
                    create: "Tạo nên"
                }
            }
        },
        pingNotifications: {
            name: "PingNotifications",
            description: "Thông báo có thể tùy chỉnh với định dạng đề cập được cải thiện",
            option: {
                friends: {
                    label: "Bạn",
                    description: "Thông báo khi bạn bè gửi tin nhắn trên máy chủ"
                },
                mentions: {
                    label: "Đề cập",
                    description: "Thông báo khi ai đó @đề cập trực tiếp đến bạn"
                },
                dms: {
                    label: "DM",
                    description: "Thông báo về tin nhắn trực tiếp (DM)"
                },
                showInActive: {
                    label: "Hiển thị đang hoạt động",
                    description: "Hiển thị thông báo ngay cả đối với kênh hiện đang hoạt động"
                },
                ignoreMuted: {
                    label: "Bỏ qua Tắt tiếng",
                    description: "Bỏ qua thông báo từ máy chủ, kênh hoặc người dùng bị tắt tiếng"
                }
            },
            unknown: "Không xác định",
            dm: "DM",
            groupDM: "Nhóm DM",
            title: "{{username}} trong {{channelName}}"
        },
        pinIcon: {
            name: "PinIcon",
            description: "Thêm biểu tượng ghim vào tin nhắn đã ghim"
        },
        plainFolderIcon: {
            name: "PlainFolderIcon",
            description: "Không hiển thị biểu tượng bang hội nhỏ trong thư mục"
        },
        platformIndicators: {
            name: "PlatformIndicators",
            description: "Thêm chỉ báo nền tảng (Desktop, Mobile, Web...) cho người dùng",
            embeddedTooltip: "Bảng điều khiển",
            vrTooltip: "thực tế ảo",
            option: {
                list: {
                    label: "Danh sách",
                    description: "Hiển thị các chỉ số trong danh sách thành viên"
                },
                badges: {
                    label: "Huy hiệu",
                    description: "Hiển thị các chỉ báo trong hồ sơ người dùng dưới dạng huy hiệu"
                },
                messages: {
                    label: "Tin nhắn",
                    description: "Hiển thị các chỉ báo bên trong tin nhắn"
                },
                colorMobileIndicator: {
                    label: "Chỉ báo di động màu",
                    description: "Có làm cho chỉ báo trên thiết bị di động khớp với màu của trạng thái người dùng hay không."
                },
                showBots: {
                    label: "Hiển thị Bot",
                    description: "Có hiển thị chỉ báo nền tảng trên bot hay không"
                }
            }
        },
        platformSpoofer: {
            name: "PlatformSpoofer",
            description: "Giả mạo nền tảng hoặc thiết bị bạn đang sử dụng",
            about: "Chúng tôi không thể đảm bảo plugin này sẽ không khiến bạn bị cảnh báo hoặc bị cấm.",
            platform: {
                desktop: "Ứng dụng khách bất hòa",
                web: "Web bất hòa",
                ios: "Bất hòa iOS",
                android: "Bất hòa Android",
                xbox: "Bất hòa nhúng",
                playstation: "Bất hòa nhúng",
                vr: "thực tế ảo"
            },
            option: {
                platform: {
                    label: "Nền tảng",
                    description: "Nền tảng nào sẽ hiển thị dưới dạng",
                    desktop: "Máy tính để bàn",
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
            name: "PlexcordToolbox",
            description: "Thêm một nút vào AppBar chứa các hành động nhanh của Plexcord",
            tooltip: "Hộp công cụ Plexcord",
            context: {
                openLog: "Mở nhật ký thông báo",
                enableQuickCSS: "Kích hoạt QuickCSS",
                openQuickCSS: "Chỉnh sửa QuickCSS",
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
            name: "PolishWording",
            description: "Tinh chỉnh tin nhắn của bạn để làm cho chúng trông đẹp hơn và có ngữ pháp tốt hơn. Xem cài đặt",
            option: {
                quickDisable: {
                    label: "Tắt nhanh",
                    description: "Vô hiệu hóa nhanh chóng. Tắt sửa đổi tin nhắn mà không yêu cầu tải lại ứng dụng khách."
                },
                blockedWords: {
                    label: "từ bị chặn",
                    description: "Các từ không được viết hoa (cách nhau bằng dấu phẩy)."
                },
                fixApostrophes: {
                    label: "Sửa dấu nháy đơn",
                    description: "Đảm bảo các từ viết tắt có chứa dấu nháy đơn."
                },
                expandContractions: {
                    label: "Mở rộng các cơn co thắt",
                    description: "Mở rộng các cơn co thắt"
                },
                fixCapitalization: {
                    label: "Sửa lỗi viết hoa",
                    description: "Viết hoa các câu."
                },
                fixPunctuation: {
                    label: "Sửa dấu câu",
                    description: "Sửa khoảng cách xung quanh dấu câu."
                },
                fixPunctuationFrequency: {
                    label: "Sửa tần số chấm câu",
                    description: "Tần suất phần trăm trong khoảng thời gian (điều này chủ yếu gây khó chịu cho một số người).",
                }
            }
        },
        previewMessage: {
            name: "PreviewMessage",
            description: "Cho phép bạn xem trước tin nhắn của mình trước khi gửi nó.",
            tooltip: "Xem trước tin nhắn"
        },
        profileSets: {
            name: "ProfileSets",
            description: "Cho phép bạn lưu và tải các cài đặt trước hồ sơ khác nhau thông qua phần Hồ sơ trong Cài đặt.",
            toast: {
                importFailed: "Không thể nhập bộ hồ sơ. Tệp có thể không hợp lệ.",
            },
            option: {
                avatarSize: {
                    label: "Kích thước hình đại diện",
                    description: "Kích thước avatar trong danh sách đặt trước"
                }
            },
            modal: {
                override: "ghi đè",
                merge: "Hợp nhất",
                cancel: "Hủy bỏ",
                timestamp: "{{formattedDate}} tại {{formattedTime}}",
                rename: "Đổi tên",
                update: "Cập nhật",
                moveUp: "Di chuyển lên",
                moveDown: "Di chuyển xuống",
                moveTo: "Chuyển đến trang 1",
                delete: "Xóa bỏ",
                importProfiles: "Nhập hồ sơ",
                importText: "Bạn hiện có {{existingCount}} hồ sơ trong phần này. Bạn có muốn ghi đè chúng hoặc hợp nhất với các cấu hình đã nhập không?",
                heading: "Hồ sơ đã lưu",
                searchProfiles: "Tìm kiếm hồ sơ...",
                profileName: "Tên hồ sơ",
                saving: "Đang lưu...",
                save: "Lưu hồ sơ",
                cancelSearch: "Hủy tìm kiếm",
                search: "Tìm kiếm",
                random: "Ngẫu nhiên",
                import: "Nhập khẩu",
                exportAll: "Xuất tất cả"
            }
        },
        questify: {
            name: "Questify",
            description: "Nâng cao trải nghiệm Quest của bạn với một bộ tính năng hoặc tắt chúng hoàn toàn nếu chúng không phù hợp với bạn.",
            quests: "Nhiệm vụ",
            context: {
                quest: {
                    label: "Menu nút nhiệm vụ",
                    ignore: "Đánh dấu tất cả đã bỏ qua",
                    reset: "Đặt lại danh sách bị bỏ qua",
                    fetch: "Tìm nạp nhiệm vụ",
                    markAsIgnored: "Đánh dấu là đã bỏ qua",
                    unmarkAsIgnored: "Bỏ đánh dấu là đã bỏ qua",
                    stopAuto: "Dừng tự động hoàn thành",
                    copyQuestID: "Sao chép ID nhiệm vụ",
                    startAuto: "Bắt đầu tự động hoàn thành"
                }
            },
            settings: {
                questButton: {
                    title: "Nút nhiệm vụ",
                    description: "Hiển thị nút Nhiệm vụ trong danh sách máy chủ với chỉ báo tùy chọn cho các Nhiệm vụ chưa được nhận.",
                    leftClick: "Hành động nhấp chuột trái",
                    middleClick: "Hành động nhấp chuột giữa",
                    rightClick: "Hành động nhấp chuột phải",
                    visibility: "Hiển thị nút",
                    unclaimedIndicator: "Chỉ báo chưa được xác nhận",
                    badgeColor: "Màu huy hiệu",
                    rewardDisplay: "Hiển thị phần thưởng",
                    includedRewardTypes: "Các loại phần thưởng đi kèm",
                    includedRewardTypesDesc: "Chỉ tính Nhiệm vụ có các loại phần thưởng này là chưa được nhận khi xác định mức độ hiển thị của nút, số lượng huy hiệu và khi phát âm thanh cảnh báo.",
                    selectRewardTypes: "Chọn loại phần thưởng để đưa vào số lượng chưa được nhận...",
                    noRewardType: "Không có tính năng Quest được hỗ trợ với tên đó.",
                    default: "Mặc định",
                    disable: "Vô hiệu hóa"
                },
                questFeatures: {
                    title: "Tính năng nhiệm vụ",
                    description: "Sửa đổi các tính năng Quest cụ thể.",
                    popupWarning: "Tùy chọn {{disablePopup}} sẽ bị bỏ qua đối với các Nhiệm vụ đã hoàn thành và theo dõi tiến trình Nhiệm vụ.",
                    videoQuestInfo: "Tùy chọn {{completeVideo}} sẽ đợi trong suốt thời gian của Nhiệm vụ video và tự động đánh dấu nó là đã hoàn thành.",
                    gameQuestInfo: "Tương tự, tùy chọn {{completeGame}} sẽ đợi trong suốt thời gian của Nhiệm vụ trò chơi và tự động đánh dấu nó là đã hoàn thành. Tùy chọn này chỉ được hỗ trợ trên máy tính để bàn chính thức.",
                    manualStartWarning: "Bạn vẫn phải bắt đầu Nhiệm vụ theo cách thủ công. Lần nhấp đầu tiên sẽ bắt đầu Nhiệm vụ ở chế độ nền. Đối với Nhiệm vụ video, các lần nhấp tiếp theo sẽ mở chế độ video như bình thường. Để hủy Nhiệm vụ, bạn có thể mở menu ngữ cảnh trên ô Nhiệm vụ và chọn {{stopAuto}}.",
                    tosWarning: "Sử dụng một trong các tùy chọn đó là trái với Điều khoản dịch vụ của Discord. Sử dụng có nguy cơ của riêng bạn.",
                    selectFeatures: "Chọn những tính năng của Quest cần sửa đổi.",
                    disablePopup: "Tắt cửa sổ bật lên nhiệm vụ trên bảng tài khoản",
                    completeVideo: "Hoàn thành nhiệm vụ video trong nền",
                    completeGame: "Hoàn thành nhiệm vụ chơi trò chơi trong nền",
                    stopAuto: "Dừng tự động hoàn thành"
                },
                restyleQuests: {
                    title: "Nhiệm vụ thay đổi phong cách",
                    description: "Làm nổi bật Nhiệm vụ bằng màu sắc chủ đề tùy chọn để dễ nhìn.",
                    precedenceNote: "Kiểu Nhiệm vụ đã xác nhận và Đã hết hạn sẽ được ưu tiên ngay cả khi Nhiệm vụ bị bỏ qua.",
                    gradientStyle: "Kiểu chuyển màu",
                    assetPreload: "Tải trước nội dung",
                    unclaimed: "Chưa được xác nhận",
                    claimed: "Đã xác nhận quyền sở hữu",
                    ignored: "Đã bỏ qua",
                    expired: "Hết hạn",
                    intenseGradient: "Chuyển đổi phong cách mạnh mẽ",
                    defaultGradient: "Chuyển đổi kiểu mặc định",
                    blackGradient: "Màu đen tinh tế",
                    noGradient: "Không có độ dốc",
                    loadAllAssets: "Tải tất cả nội dung nhiệm vụ khi tải trang",
                    loadDuringScroll: "Tải nội dung nhiệm vụ trong khi cuộn trang"
                },
                reorderQuests: {
                    title: "Sắp xếp lại nhiệm vụ",
                    description: "Sắp xếp các nhiệm vụ theo trạng thái của chúng. Áp dụng khi tùy chọn sắp xếp \"Questify\" được chọn trên trang Nhiệm vụ.",
                    formatNote: "Danh sách được phân tách bằng dấu phẩy phải chứa tất cả: {{items}}.",
                    placeholder: "Bạn phải bao gồm tất cả KHÔNG ĐƯỢC CHẤP NHẬN, ĐƯỢC YÊU CẦU, BỎ QUA, HẾT HẠN",
                    invalidFormat: "Định dạng không hợp lệ.",
                    unclaimedSubsort: "Phân loại phụ chưa được xác nhận quyền sở hữu",
                    claimedSubsort: "Phân loại phụ được yêu cầu",
                    ignoredSubsort: "Phân loại bị bỏ qua",
                    expiredSubsort: "Phân loại đã hết hạn",
                    addedNewest: "Đã thêm (Mới nhất)",
                    addedOldest: "Đã thêm (Cũ nhất)",
                    expiredRecent: "Đã hết hạn (Gần đây nhất)",
                    expiredLeast: "Đã hết hạn (Ít nhất gần đây)",
                    expiringSoon: "Hết hạn (Sớm nhất)",
                    expiringLate: "Hết hạn (Mới nhất)",
                    claimedRecent: "Đã xác nhận quyền sở hữu (Gần đây nhất)",
                    claimedLeast: "Đã xác nhận quyền sở hữu (Ít nhất gần đây)",
                    ignoredQuestProfile: "Hồ sơ nhiệm vụ bị bỏ qua",
                    sharedProfile: "Đã chia sẻ: Tất cả tài khoản trên khách hàng này đều bị bỏ qua.",
                    privateProfile: "Riêng tư: Tất cả tài khoản trên khách hàng này đều có chế độ bỏ qua riêng.",
                    rememberSort: "Ghi nhớ lựa chọn sắp xếp",
                    rememberFilter: "Ghi nhớ lựa chọn bộ lọc",
                    yes: "Đúng",
                    no: "KHÔNG",
                    rememberNote: "Lựa chọn sắp xếp và lọc này đề cập đến các tùy chọn sắp xếp và lọc tích hợp trên trang Nhiệm vụ. Việc sắp xếp tùy chỉnh ở trên chỉ được áp dụng khi tùy chọn sắp xếp \"Questify\" được chọn trên trang Nhiệm vụ. Nếu tính năng ghi nhớ bị tắt, các tùy chọn sắp xếp hoặc lọc sẽ được đặt lại mỗi khi bạn mở trang Nhiệm vụ."
                },
                fetchingQuests: {
                    title: "Tìm nạp nhiệm vụ",
                    description: "Định cấu hình tần suất tìm nạp Nhiệm vụ từ Discord và thiết lập cảnh báo cho Nhiệm vụ mới.",
                    defaultBehavior: "Theo mặc định, Discord chỉ tìm nạp Nhiệm vụ khi tải và khi truy cập trang Nhiệm vụ. Điều này có nghĩa là nếu không có khoảng thời gian tìm nạp được xác định bên dưới, plugin này sẽ không biết về các Nhiệm vụ mới được thêm vào trong ngày.",
                    requirement: "Điều này phụ thuộc vào việc Nút Nhiệm vụ được bật và đặt thành {{unclaimed}} hoặc được đặt thành {{always}} với các chỉ báo {{pill}}, {{badge}} hoặc {{both}} chưa được xác nhận đã bật. Nếu không, không có lý do gì để tìm Nhiệm vụ định kỳ.",
                    blockWarning: "Ngoài ra, nếu {{fetchingQuests}} bị chặn trong cài đặt {{questFeatures}} thì thao tác này sẽ không hoạt động.",
                    fetchInterval: "Khoảng thời gian tìm nạp",
                    alertSound: "Âm thanh cảnh báo",
                    intervalPlaceholder: "Chọn hoặc nhập khoảng thời gian từ 30 phút đến 12 giờ.",
                    intervalFeedback: "Khoảng thời gian phải từ 30 phút đến 12 giờ.",
                    soundPlaceholder: "Chọn âm thanh hoặc cung cấp URL âm thanh tùy chỉnh.",
                    soundFeedback: "Không tìm thấy âm thanh hoặc URL không thuộc miền được hỗ trợ.",
                    disabled: "Tàn tật",
                    minutes: "Phút",
                    minute: "Phút",
                    hours: "Giờ",
                    hour: "Giờ",
                    thirtyMinutes: "30 phút",
                    oneHour: "1 giờ",
                    threeHours: "3 giờ",
                    sixHours: "6 giờ",
                    twelveHours: "12 giờ",
                    customSound: "ÂM THANH TÙY CHỈNH"
                },
                disableOptions: {
                    everything: "Vô hiệu hóa mọi thứ",
                    discovery: "Vô hiệu hóa tab khám phá",
                    dms: "Vô hiệu hóa tab nhiệm vụ trong DM",
                    fetching: "Vô hiệu hóa nhiệm vụ tìm nạp",
                    popup: "Tắt cửa sổ bật lên phía trên bảng tài khoản",
                    sponsored: "Tắt biểu ngữ được tài trợ trên trang nhiệm vụ",
                    badge: "Tắt huy hiệu trên hồ sơ người dùng",
                    inventory: "Tắt thông báo di dời kho quà tặng",
                    friendsList: "Danh sách bạn bè Đang hoạt động Khuyến mãi",
                    membersList: "Danh sách thành viên tích cực chơi biểu tượng",
                    gameQuests: "Hoàn thành nhiệm vụ chơi trò chơi/hoạt động trong nền",
                    videoQuests: "Hoàn thành nhiệm vụ xem video trong nền",
                    achievementQuests: "Hoàn thành nhiệm vụ trong Nhiệm vụ hoạt động trong nền",
                    mobileDesktop: "Làm cho nhiệm vụ di động tương thích với máy tính để bàn",
                    notifyOnComplete: "Thông báo khi hoàn thành nhiệm vụ"
                },
                options: {
                    always: "Luôn luôn",
                    unclaimed: "Chưa được xác nhận",
                    never: "Không bao giờ",
                    pill: "Thuốc viên",
                    badge: "Huy hiệu",
                    both: "Cả hai",
                    none: "Không có",
                    openQuests: "Nhiệm vụ mở",
                    contextMenu: "Trình đơn ngữ cảnh",
                    pluginSettings: "Cài đặt plugin",
                    nothing: "Không có gì",
                    orbs: "Quả cầu",
                    nitroCodes: "Mã Nitro",
                    rewardCodes: "Mã thưởng",
                    inGameItems: "Vật phẩm trong trò chơi",
                    profileCollectibles: "Hồ sơ sưu tầm"
                }
            },
            option: {
                disableQuests: {
                    label: "Vô hiệu hóa nhiệm vụ",
                    description: "Chọn những tính năng của Quest để tắt."
                },
                disableQuestsEverything: {
                    label: "Vô hiệu hóa mọi thứ",
                    description: "Vô hiệu hóa tất cả các tính năng của Quest."
                },
                disableQuestsFetchingQuests: {
                    label: "Vô hiệu hóa nhiệm vụ tìm nạp",
                    description: "Vô hiệu hóa việc tìm nạp Nhiệm vụ từ Discord."
                },
                disableQuestsDirectMessagesTab: {
                    label: "Vô hiệu hóa tab nhiệm vụ trong DM",
                    description: "Tắt tab Nhiệm vụ trong trang Tin nhắn Trực tiếp."
                },
                disableQuestsDiscoveryTab: {
                    label: "Vô hiệu hóa tab khám phá",
                    description: "Tắt tab Nhiệm vụ trong trang Khám phá."
                },
                disableQuestsPageSponsoredBanner: {
                    label: "Tắt biểu ngữ được tài trợ trên trang nhiệm vụ",
                    description: "Vô hiệu hóa biểu ngữ được tài trợ trên trang Quest."
                },
                disableQuestsPopupAboveAccountPanel: {
                    label: "Tắt cửa sổ bật lên phía trên bảng tài khoản",
                    description: "Tắt cửa sổ bật lên Quest phía trên bảng tài khoản của bạn."
                },
                disableQuestsBadgeOnUserProfiles: {
                    label: "Vô hiệu hóa huy hiệu trên hồ sơ người dùng",
                    description: "Vô hiệu hóa huy hiệu Nhiệm vụ trên hồ sơ người dùng."
                },
                disableQuestsGiftInventoryRelocationNotice: {
                    label: "Tắt thông báo di dời kho quà tặng",
                    description: "Vô hiệu hóa kho quà tặng Thông báo di dời Quest."
                },
                disableFriendsListActiveNowPromotion: {
                    label: "Tắt danh sách bạn bè Đang hoạt động Khuyến mãi",
                    description: "Vô hiệu hóa việc quảng bá Nhiệm vụ cho các trò chơi do bạn bè chơi."
                },
                disableMembersListActivelyPlayingIcons: {
                    label: "Vô hiệu hóa các biểu tượng danh sách thành viên đang phát tích cực",
                    description: "Tắt các biểu tượng đang phát trong danh sách thành viên."
                },
                makeMobileQuestsDesktopCompatible: {
                    label: "Làm cho nhiệm vụ di động tương thích với máy tính để bàn",
                    description: "Làm cho các Nhiệm vụ chỉ dành cho thiết bị di động tương thích với máy tính để bàn."
                },
                completeVideoQuestsInBackground: {
                    label: "Hoàn thành nhiệm vụ video trong nền",
                    description: "Hoàn thành Nhiệm vụ video ở chế độ nền sau khi hết thời lượng video."
                },
                completeGameQuestsInBackground: {
                    label: "Hoàn thành nhiệm vụ trò chơi trong nền",
                    description: "Hoàn thành Nhiệm vụ trò chơi ở chế độ nền sau khi thời gian trò chơi trôi qua."
                },
                completeAchievementQuestsInBackground: {
                    label: "Hoàn thành nhiệm vụ trong nhiệm vụ hoạt động trong nền",
                    description: "Hoàn thành thành tích trong Nhiệm vụ hoạt động ở chế độ nền."
                },
                notifyOnQuestComplete: {
                    label: "Thông báo khi hoàn thành nhiệm vụ",
                    description: "Hiển thị thông báo khi Nhiệm vụ được hoàn thành tự động."
                },
                questButton: {
                    label: "Nút nhiệm vụ",
                    description: "Hiển thị nút Nhiệm vụ trong danh sách máy chủ."
                },
                questButtonDisplay: {
                    label: "Hiển thị nút nhiệm vụ",
                    description: "Loại hiển thị nào sẽ sử dụng cho nút Nhiệm vụ trong danh sách máy chủ."
                },
                questRewardIncludeRewardCode: {
                    label: "Bao gồm mã thưởng",
                    description: "Bao gồm các Nhiệm vụ kèm theo Mã Phần thưởng khi hiển thị số lượng Nhiệm vụ."
                },
                questRewardIncludeNitroCode: {
                    label: "Bao gồm mã Nitro",
                    description: "Bao gồm các Nhiệm vụ với Mã Nitro khi hiển thị số lượng Nhiệm vụ."
                },
                questRewardIncludeInGame: {
                    label: "Bao gồm phần thưởng trong trò chơi",
                    description: "Bao gồm các Nhiệm vụ với phần thưởng trong trò chơi khi hiển thị số lượng Nhiệm vụ."
                },
                questRewardIncludeCollectibles: {
                    label: "Bao gồm sưu tầm",
                    description: "Bao gồm các Nhiệm vụ có Đồ sưu tầm khi hiển thị số lượng Nhiệm vụ."
                },
                questRewardIncludeOrbs: {
                    label: "Bao gồm các quả cầu",
                    description: "Bao gồm các Nhiệm vụ có Quả cầu khi hiển thị số lượng Nhiệm vụ."
                },
                questButtonUnclaimed: {
                    label: "Chỉ báo chưa được xác nhận của nút nhiệm vụ",
                    description: "Loại hiển thị nào sẽ được sử dụng cho chỉ báo chưa được xác nhận trên nút Nhiệm vụ trong danh sách máy chủ."
                },
                questButtonBadgeColor: {
                    label: "Màu huy hiệu nút nhiệm vụ",
                    description: "Màu của huy hiệu nút Nhiệm vụ trong danh sách máy chủ."
                },
                questButtonLeftClickAction: {
                    label: "Hành động nhấp chuột trái",
                    description: "Hành động cần thực hiện khi nhấn chuột trái vào nút Quest trong danh sách máy chủ."
                },
                questButtonMiddleClickAction: {
                    label: "Hành động nhấp chuột giữa",
                    description: "Hành động cần thực hiện khi nhấp chuột giữa vào nút Nhiệm vụ trong danh sách máy chủ."
                },
                questButtonRightClickAction: {
                    label: "Hành động nhấp chuột phải",
                    description: "Hành động cần thực hiện khi nhấn chuột phải vào nút Quest trong danh sách máy chủ."
                },
                fetchingQuests: {
                    label: "Tìm nạp nhiệm vụ",
                    description: "Tìm nạp nhiệm vụ từ Discord."
                },
                fetchingQuestsInterval: {
                    label: "Khoảng thời gian tìm nạp nhiệm vụ",
                    description: "Khoảng thời gian tính bằng giây để tìm nạp Nhiệm vụ từ Discord."
                },
                fetchingQuestsAlert: {
                    label: "Đang tìm nạp thông báo nhiệm vụ",
                    description: "Âm thanh phát ra khi phát hiện Nhiệm vụ mới."
                },
                fetchingQuestsAlertVolume: {
                    label: "Đang tìm nạp khối lượng cảnh báo nhiệm vụ",
                    description: "Âm lượng của âm thanh cảnh báo khi phát hiện Nhiệm vụ mới."
                },
                restyleQuests: {
                    label: "Nhiệm vụ thay đổi phong cách",
                    description: "Tùy chỉnh giao diện của các ô Nhiệm vụ trong trang Nhiệm vụ."
                },
                restyleQuestsUnclaimed: {
                    label: "Nhiệm vụ làm lại phong cách chưa được nhận",
                    description: "Màu của các ô Nhiệm vụ chưa được nhận trong trang Nhiệm vụ."
                },
                restyleQuestsClaimed: {
                    label: "Nhiệm vụ Restyle được yêu cầu",
                    description: "Màu của các ô Nhiệm vụ được xác nhận trong trang Nhiệm vụ."
                },
                restyleQuestsIgnored: {
                    label: "Nhiệm vụ Restyle bị bỏ qua",
                    description: "Màu của các ô Nhiệm vụ bị bỏ qua trong trang Nhiệm vụ."
                },
                restyleQuestsExpired: {
                    label: "Nhiệm vụ Restyle đã hết hạn",
                    description: "Màu của các ô Nhiệm vụ đã hết hạn trong trang Nhiệm vụ."
                },
                restyleQuestsGradient: {
                    label: "Thay đổi phong cách nhiệm vụ gradient",
                    description: "Kiểu chuyển màu được sử dụng trong các ô Nhiệm vụ."
                },
                restyleQuestsPreload: {
                    label: "Tải lại nhiệm vụ Restyle",
                    description: "Cố gắng tải trước nội dung cho các ô Nhiệm vụ."
                },
                reorderQuests: {
                    label: "Sắp xếp lại nhiệm vụ",
                    description: "Sắp xếp các nhiệm vụ theo trạng thái của chúng. Để trống để sắp xếp mặc định. Danh sách được phân tách bằng dấu phẩy phải chứa tất cả: KHÔNG ĐƯỢC CHẤP NHẬN, ĐƯỢC YÊU CẦU, BỎ QUA, HẾT HẠN."
                },
                unclaimedSubsort: {
                    label: "Phân loại phụ chưa được xác nhận quyền sở hữu",
                    description: "Phương pháp phân loại cho các Nhiệm vụ chưa được nhận."
                },
                claimedSubsort: {
                    label: "Phân loại phụ được yêu cầu",
                    description: "Phương pháp phân loại cho các Nhiệm vụ được xác nhận."
                },
                ignoredSubsort: {
                    label: "Phân loại bị bỏ qua",
                    description: "Phương pháp phân loại cho các Nhiệm vụ bị bỏ qua."
                },
                expiredSubsort: {
                    label: "Phân loại đã hết hạn",
                    description: "Phương pháp phân loại cho các Nhiệm vụ đã hết hạn."
                },
                unclaimedUnignoredQuests: {
                    label: "Nhiệm vụ chưa được xác nhận",
                    description: "Theo dõi số lượng Nhiệm vụ chưa được nhận và chưa được bỏ qua."
                },
                onQuestsPage: {
                    label: "Trên trang nhiệm vụ",
                    description: "Liệu người dùng hiện có ở trang Nhiệm vụ hay không."
                },
                triggerQuestsRerender: {
                    label: "Kết xuất lại nhiệm vụ kích hoạt",
                    description: "Kích hoạt hiển thị lại trang Nhiệm vụ bằng cách chuyển đổi cài đặt này."
                },
                ignoredQuestProfile: {
                    label: "Hồ sơ nhiệm vụ bị bỏ qua",
                    description: "Hồ sơ được sử dụng cho các Nhiệm vụ bị bỏ qua."
                },
                rememberQuestPageSort: {
                    label: "Ghi nhớ sắp xếp trang nhiệm vụ",
                    description: "Hãy nhớ cách sắp xếp được sử dụng lần cuối trên trang Nhiệm vụ."
                },
                rememberQuestPageFilters: {
                    label: "Ghi nhớ bộ lọc trang nhiệm vụ",
                    description: "Ghi nhớ các bộ lọc được sử dụng gần đây nhất trên trang Nhiệm vụ."
                },
                lastQuestPageSort: {
                    label: "Sắp xếp trang nhiệm vụ cuối cùng",
                    description: "Hãy nhớ cách sắp xếp được sử dụng lần cuối trên trang Nhiệm vụ."
                },
                lastQuestPageFilters: {
                    label: "Bộ lọc trang nhiệm vụ cuối cùng",
                    description: "Ghi nhớ các bộ lọc được sử dụng gần đây nhất trên trang Nhiệm vụ."
                },
                ignoredQuestIDs: {
                    label: "ID nhiệm vụ bị bỏ qua",
                    description: "Một mảng ID nhiệm vụ bị bỏ qua."
                },
                resumeQuestIDs: {
                    label: "Tiếp tục ID nhiệm vụ",
                    description: "Một mảng ID nhiệm vụ đang được tự động hoàn thành ở chế độ nền."
                }
            },
            button: {
                questInProgressWithTime: "Đang hoàn thành ({{remainTime}})",
                completing: "Đang hoàn thiện",
                resume: "Tiếp tục (~{{remainTime}})",
                complete: "Hoàn thành {{remainTime}}",
                completeImmediate: "Hoàn thành (Ngay lập tức)",
                completed: "Hoàn thành"
            },
            reward: {
                orbs: "{{completingText}} cho {{orbQuantity}} Quả cầu.",
                article: "{{completingText}} cho {{itemName}}.",
                unrecognized: "{{completingText}} đối với loại phần thưởng không được công nhận."
            },
            notification: {
                completed: {
                    title: "Nhiệm vụ đã hoàn thành",
                    body: "Nhiệm vụ {{questName}} đã hoàn thành."
                }
            }
        },
        questionMarkReplacement: {
            name: "QuestionMarkReplacement",
            description: "Thay thế tất cả các dấu chấm hỏi bằng chuỗi đã chọn nếu tin nhắn chỉ chứa dấu chấm hỏi.",
            option: {
                replace: {
                    label: "Thay thế",
                    description: "Thay thế bằng"
                }
            }
        },
        quickMention: {
            name: "QuickMention",
            description: "Thêm nút đề cập nhanh vào thanh tác vụ tin nhắn",
            tooltip: "Đề cập nhanh"
        },
        quickReply: {
            name: "QuickReply",
            description: "Trả lời tin nhắn (Ctrl+Up/Down) và chỉnh sửa (Ctrl+Shift+Up/Down) thông qua tổ hợp phím",
            option: {
                shouldMention: {
                    label: "Nên Nhắc Đến",
                    description: "Ping trả lời theo mặc định",
                    noReplyMentionPlugin: "Theo dõi plugin NoReplyMention (nếu được bật)",
                    enabled: "Đã bật",
                    disabled: "Tàn tật"
                },
                ignoreBlockedAndIgnored: {
                    label: "Bỏ qua Bị chặn và Bỏ qua",
                    description: "Bỏ qua tin nhắn của người dùng bị chặn/bỏ qua khi điều hướng"
                }
            }
        },
        quickThemeSwitcher: {
            name: "QuickThemeSwitcher",
            description: "Chuyển đổi nhanh giữa các chủ đề bằng phím tắt.",
            about: {
                title: "Ràng buộc",
                description: "Sử dụng Ctrl/Cmd+Shift+Mũi tên để điều hướng (Trái/Phải: xoay chủ đề, Lên: bật, Xuống: tắt).",
                reload: "Nhấn Ctrl/Cmd+Shift+Alt để tải lại danh sách chủ đề."
            },
            modal: {
                added: "Đã thêm chủ đề {{count}}{{s}}",
                removed: "Đã xóa {{count}} chủ đề{{s}}",
                reloaded: "Đã tải lại chủ đề {{themeCount}}",
                addedLocal: "Đã thêm {{count}} chủ đề địa phương{{s}}",
                removedLocal: "Đã xóa {{count}} chủ đề địa phương{{s}}",
            },
            option: {
                includeLocal: {
                    label: "Bao gồm địa phương",
                    description: "Bao gồm các chủ đề địa phương"
                },
                includeOnline: {
                    label: "Bao gồm trực tuyến",
                    description: "Bao gồm các chủ đề trực tuyến"
                },
                sortOrder: {
                    label: "Sắp xếp thứ tự",
                    description: "Phương pháp sắp xếp",
                    asc: "A-Z",
                    desc: "Z-A",
                    recent: "Gần đây"
                },
                autoRefresh: {
                    label: "Tự động làm mới",
                    description: "Tự động làm mới danh sách chủ đề khi phát hiện thay đổi"
                },
                showNotifications: {
                    label: "Hiển thị thông báo",
                    description: "Hiển thị thông báo khi chủ đề được thêm/xóa"
                }
            }
        },
        quoter: {
            name: "Quoter",
            description: "Thêm khả năng tạo hình ảnh trích dẫn đầy cảm hứng từ tin nhắn",
            context: {
                quote: "Trích dẫn"
            },
            modal: {
                title: "Bắt chúng trong 4k",
                grayscale: "Thang màu xám",
                export: "Xuất khẩu",
                send: "Gửi",
                saveAsGIF: "Lưu dưới dạng GIF",
                saveDescription: "Lưu/Gửi hình ảnh dưới dạng GIF thay vì PNG",
                showWatermark: "Hiển thị hình mờ",
                watermarkText: "Văn bản hình mờ (tối đa 32 ký tự)"
            },
            option: {
                quoteFont: {
                    label: "Phông chữ trích dẫn",
                    description: "Phông chữ cho văn bản trích dẫn (tác giả/tên người dùng luôn sử dụng M PLUS Làm tròn 1c)",
                    mPlusRounded: "M PLUS Làm tròn 1c",
                    openSans: "Mở Sans",
                    momoSignature: "Chữ ký Momo",
                    lora: "Lora",
                    merriWeather: "Merriweather"
                },
                watermark: {
                    label: "Hình mờ",
                    description: "Văn bản hình mờ tùy chỉnh (tối đa 32 ký tự)"
                },
                grayscale: {
                    label: "Thang màu xám",
                    description: "Bật thang độ xám theo mặc định"
                },
                showWatermark: {
                    label: "Hiển thị hình mờ",
                    description: "Hiển thị hình mờ theo mặc định"
                },
                saveAsGif: {
                    label: "Lưu dưới dạng Gif",
                    description: "Lưu dưới dạng GIF theo mặc định"
                }
            }
        },
        randomVoice: {
            name: "RandomVoice",
            description: "Thêm nút gần nút Tắt tiếng để tham gia cuộc gọi thoại ngẫu nhiên.",
            tooltip: "Giọng nói ngẫu nhiên",
            context: {
                label: "Công cụ sửa đổi trạng thái giọng nói",
                amountLabel: "SỐ TIỀN NGƯỜI DÙNG",
                spacesLabel: "CÁC KHOẢNG TRÁI",
                voiceLabel: "GIỚI HẠN GIỌNG NÓI",
                selfLabel: "TỰ CÀI ĐẶT",
                select: {
                    servers: "Chọn máy chủ",
                    list: "Chọn danh sách",
                    filters: "Chọn bộ lọc",
                    amount: "Số lượng người dùng",
                    userAmount: "{{amount}} người dùng{{s}}",
                    parameters: "Thông số",
                    selectAll: "Chọn tất cả",
                    reset: "Đặt lại",
                    stateFilters: "Bộ lọc trạng thái",
                    moreThan: "Hơn",
                    lessThan: "Ít hơn",
                    equalTo: "bằng với",
                    spaces: "Khoảng trống còn lại",
                    voice: "Giới hạn giọng nói"
                },
                filter: {
                    muted: "Đã tắt tiếng",
                    deafened: "bị điếc",
                    camera: "Máy ảnh",
                    stream: "Suối",
                    includeFilters: "Bao gồm bộ lọc",
                    avoidFilters: "Tránh bộ lọc"
                },
                reset: {
                    list: "Đặt lại danh sách"
                },
                voice: {
                    label: "Tùy chọn giọng nói",
                    joinSettings: "Cài đặt tham gia",
                    auto: {
                        mute: "Tự động tắt tiếng",
                        deafen: "Tự động điếc",
                        camera: "Máy ảnh tự động",
                        stream: "Tự động phát trực tuyến",
                        leaveWhenEmpty: "Để lại khi trống rỗng",
                        navigate: "Tự động điều hướng",
                        stage: "Tránh sân khấu",
                        afk: "Tránh AFK"
                    }
                },
                invalid: {
                    server: "Máy chủ không hợp lệ"
                }
            },
            option: {
                userAmountOperation: {
                    label: "Hoạt động số lượng người dùng",
                    description: "Chọn thao tác cho số lượng người dùng"
                },
                userAmount: {
                    label: "Số lượng người dùng",
                    description: "Chọn số lượng người dùng"
                },
                spacesLeftOperation: {
                    label: "Khoảng trống còn lại Hoạt động",
                    description: "Chọn một hoạt động cho số lượng người dùng tối đa"
                },
                spacesLeft: {
                    label: "Khoảng trống còn lại",
                    description: "Chọn số lượng người dùng tối đa"
                },
                vcLimitOperation: {
                    label: "Hoạt động giới hạn kênh thoại",
                    description: "Chọn thao tác cho kênh thoại."
                },
                vcLimit: {
                    label: "Giới hạn kênh thoại",
                    description: "Chọn giới hạn kênh thoại"
                },
                servers: {
                    label: "Máy chủ",
                    description: "Các máy chủ được bao gồm"
                },
                autoNavigate: {
                    label: "Tự động điều hướng",
                    description: "Tự động điều hướng đến kênh thoại."
                },
                autoCamera: {
                    label: "Máy ảnh tự động",
                    description: "Tự động bật camera"
                },
                autoStream: {
                    label: "Tự động phát trực tuyến",
                    description: "Tự động bật luồng"
                },
                selfMute: {
                    label: "Tự động tắt tiếng",
                    description: "Tự động tắt tiếng micrô của bạn khi tham gia kênh thoại."
                },
                selfDeafen: {
                    label: "Tự động điếc",
                    description: "Tự động làm điếc âm thanh của bạn khi tham gia kênh thoại."
                },
                leaveEmpty: {
                    label: "Để lại khi trống rỗng",
                    description: "Tìm một cuộc gọi ngẫu nhiên khi cuộc trò chuyện thoại trống."
                },
                prioritizeFriends: {
                    label: "Ưu tiên bạn bè",
                    description: "Ưu tiên các kênh có bạn bè của bạn khi có thể."
                },
                avoidStages: {
                    label: "Tránh sân khấu",
                    description: "Tránh tham gia các kênh thoại sân khấu."
                },
                avoidAfk: {
                    label: "Tránh AFK",
                    description: "Tránh tham gia các kênh thoại AFK."
                },
                video: {
                    label: "Băng hình",
                    description: "Tìm kiếm người dùng có video của họ trên"
                },
                stream: {
                    label: "Suối",
                    description: "Tìm kiếm người dùng đang phát trực tuyến"
                },
                mute: {
                    label: "Tắt tiếng",
                    description: "Tìm kiếm người dùng bị tắt tiếng"
                },
                deafen: {
                    label: "Điếc",
                    description: "Tìm kiếm người dùng bị điếc"
                },
                includeStates: {
                    label: "Bao gồm bộ lọc",
                    description: "Tùy chọn để bao gồm các trạng thái"
                },
                avoidStates: {
                    label: "Tránh bộ lọc",
                    description: "Tùy chọn để tránh trạng thái"
                }
            },
            alert: {
                failed: "Không tìm thấy Kênh Thoại!"
            }
        },
        reactErrorDecoder: {
            name: "ReactErrorDecoder",
            description: "Giải mã mã lỗi React thành thông báo mà con người có thể đọc được."
        },
        readAllNotificationsButton: {
            name: "ReadAllNotificationsButton",
            description: "Đọc tất cả các thông báo máy chủ chỉ bằng một nút bấm!",
            button: "Đọc tất cả"
        },
        recentDMSwitcher: {
            name: "RecentDMSwitcher",
            description: "Ctrl+Tab giữa các DM được sử dụng gần đây nhất (Ctrl+Shift+Tab đảo ngược)",
            option: {
                visualStyle: {
                    label: "Phong cách trực quan",
                    description: "Kiểu chỉ báo trực quan trong khi đạp xe",
                    overlay: "Lớp phủ (kiểu Alt+Tab)",
                    toast: "Bánh mì nướng (thông báo trạng thái)",
                    off: "Tắt"
                },
                overlayMode: {
                    label: "Chế độ lớp phủ",
                    description: "Nội dung lớp phủ",
                    row: "Hàng gần đây",
                    current: "Chỉ hiện tại",
                },
                amountOfUsers: {
                    label: "Số lượng người dùng",
                    description: "Số lượng người dùng hiển thị trong lớp phủ"
                },
                overlayRowLength: {
                    label: "Độ dài hàng lớp phủ",
                    description: "Số lượng DM gần đây sẽ hiển thị trong hàng"
                },
                overlayShowAvatars: {
                    label: "Lớp phủ Hiển thị Hình đại diện",
                    description: "Hiển thị hình đại diện của người dùng trong lớp phủ"
                },
                toastDurationMs: {
                    label: "Thời lượng bánh mì nướng (ms)",
                    description: "Thời lượng của thông báo trạng thái"
                },
                clearRdms: {
                    label: "Xóa danh sách RDMS",
                    description: "Tiện ích kiểm tra: Xóa danh sách RDM",
                    toast: "Đã xóa lịch sử RMDS",
                    button: "Xóa lịch sử RDM"
                }
            },
            modal: {
                unknown: "Không xác định",
                dm: "DM",
                group: "Nhóm DM",
                channel: "Kênh",
                switchingTo: "Đang chuyển sang: {{name}}"
            }
        },
        relationshipNotifier: {
            name: "RelationshipNotifier",
            description: "Thông báo cho bạn khi một người bạn, cuộc trò chuyện nhóm hoặc máy chủ loại bỏ bạn.",
            option: {
                notices: {
                    label: "Thông báo",
                    description: "Đồng thời hiển thị thông báo ở đầu màn hình của bạn khi bị xóa (sử dụng thông báo này nếu bạn không muốn bỏ lỡ bất kỳ thông báo nào)."
                },
                offlineRemovals: {
                    label: "Xóa ngoại tuyến",
                    description: "Thông báo cho bạn khi bắt đầu Discord nếu bạn bị xóa khi ngoại tuyến."
                },
                friends: {
                    label: "Bạn",
                    description: "Thông báo khi một người bạn loại bỏ bạn"
                },
                friendRequestCancels: {
                    label: "Hủy yêu cầu kết bạn",
                    description: "Thông báo khi yêu cầu kết bạn bị hủy"
                },
                servers: {
                    label: "Máy chủ",
                    description: "Thông báo khi bị xóa khỏi máy chủ"
                },
                groups: {
                    label: "Nhóm",
                    description: "Thông báo khi bị xóa khỏi cuộc trò chuyện nhóm"
                }
            },
            notification: {
                removedFriend: "{{user}} đã xóa bạn khỏi danh sách bạn bè.",
                cancelledFriendRequest: "Yêu cầu kết bạn từ {{user}} đã bị xóa.",
                removedFromServer: "Bạn đã bị xóa khỏi máy chủ {{server}}.",
                removedFromGroup: "Bạn đã bị xóa khỏi nhóm {{group}}.",
                noLongerGroup: "Bạn không còn ở trong nhóm {{group}}.",
                noLongerServer: "Bạn không còn ở trong máy chủ {{server}}.",
                noLongerFriend: "Bạn không còn là bạn với {{user}}.",
                friendRequestRevoked: "Yêu cầu kết bạn từ {{user}} đã bị thu hồi.",
                ok: "ĐƯỢC RỒI"
            }
        },
        remix: {
            name: "Remix",
            description: "Thêm tùy chọn 'Remix' vào menu chuột phải của nút tải tệp lên. Tùy chọn này mở hình ảnh trong trình chỉnh sửa hình ảnh đơn giản và cho phép bạn gửi hình ảnh đã chỉnh sửa trực tiếp vào cuộc trò chuyện.",
            label: "phối lại",
            button: {
                send: "Gửi",
                close: "Đóng",
                brush: "Chải",
                erase: "Xóa",
                crop: "Mùa vụ",
                shape: "Hình dạng",
                reset: "Cài lại",
                clear: "Thông thoáng"
            },
            editor: {
                choose: "Chọn một hình ảnh",
                browse: "Duyệt qua",
                rectangle: "Hình chữ nhật",
                ellipse: "hình elip",
                line: "Đường kẻ",
                arrow: "Mũi tên",
                fill: "Đổ đầy"
            }
        },
        repeatMessages: {
            name: "RepeatMessages",
            description: "Cho phép bạn lặp lại tin nhắn một cách nhanh chóng. Nếu bạn giữ phím Shift trong khi nhấp vào tùy chọn Lặp lại, nó sẽ trả lời tin nhắn.",
            button: "Lặp lại (Nhấp chuột) / Lặp lại và Trả lời (Shift + Nhấp chuột)",
            context: {
                repeat: "Lặp lại",
                repeatAndReply: "Lặp lại và trả lời"
            }
        },
        replaceGoogleSearch: {
            name: "ReplaceGoogleSearch",
            description: "Thay thế tìm kiếm Google bằng các công cụ khác nhau.",
            option: {
                customEngineName: {
                    label: "Tên công cụ tùy chỉnh",
                    description: "Tên của công cụ tìm kiếm tùy chỉnh"
                },
                customEngineURL: {
                    label: "URL công cụ tùy chỉnh",
                    description: "URL công cụ của bạn"
                },
                replacementEngine: {
                    label: "Động cơ thay thế",
                    description: "Thay thế bằng một công cụ tìm kiếm cụ thể thay vì thêm menu",
                    off: "Tắt",
                    custom: "Công cụ tùy chỉnh",
                }
            },
            context: {
                label: "Tìm kiếm văn bản",
                searchWith: "Tìm kiếm với {{name}}"
            }
        },
        replyPingControl: {
            name: "ReplyPingControl",
            description: "Kiểm soát việc luôn luôn hay không bao giờ nhận được ping khi trả lời tin nhắn bằng tính năng danh sách trắng",
            option: {
                alwaysPingOnReply: {
                    label: "Luôn Ping khi trả lời",
                    description: "Luôn nhận được ping khi ai đó trả lời tin nhắn của bạn"
                },
                replyPingWhitelist: {
                    label: "Trả lời Danh sách trắng Ping",
                    description: "Danh sách ID người dùng được phân tách bằng dấu phẩy để luôn nhận được ping trả lời từ"
                }
            }
        },
        replyTimestamp: {
            name: "ReplyTimestamp",
            description: "Hiển thị dấu thời gian trên bản xem trước tin nhắn đã trả lời"
        },
        revealAllSpoilers: {
            name: "RevealAllSpoilers",
            description: "Tiết lộ tất cả phần tiết lộ nội dung trong tin nhắn bằng cách nhấp Ctrl vào phần tiết lộ nội dung hoặc trong cuộc trò chuyện bằng cách nhấn Ctrl+Shift-nhấp"
        },
        reverseImageSearch: {
            name: "ReverseImageSearch",
            description: "Thêm ImageSearch vào menu ngữ cảnh hình ảnh",
            context: {
                label: "Tìm kiếm hình ảnh",
                all: "Tìm kiếm tất cả"
            }
        },
        reviewDB: {
            name: "ReviewDB",
            description: "Đánh giá những người dùng khác (Thêm phần mới vào hồ sơ)",
            notification: {
                newReview: "Bạn có đánh giá mới trên hồ sơ của bạn!",
                auth: {
                    error: "Đã xảy ra lỗi khi ủy quyền",
                    successfully: "Đăng nhập thành công!",
                    failed: "Không thể ủy quyền",
                    review: "Vui lòng ủy quyền để thêm đánh giá.",
                    opening: "Đang mở cửa sổ ủy quyền...",
                    need: "Bạn cần ủy quyền để đánh giá người dùng!"
                },
                error: {
                    fast: "Bạn đang gửi yêu cầu quá nhanh. Wait a few seconds and try again.",
                    fetching: "Đã xảy ra lỗi khi tìm nạp bài đánh giá.",
                    action: {
                        failed: "Không thể {{action}} người dùng",
                        success: "Đã {{action}}ed người dùng thành công"
                    }
                }
            },
            modal: {
                delete: {
                    title: "Bạn có chắc không?",
                    description: "Bạn có thực sự muốn xóa đánh giá này?",
                    confirm: "Xóa bỏ",
                    cancel: "Đừng bận tâm",
                    error: "Bạn phải đăng nhập để xóa đánh giá.",
                },
                report: {
                    title: "Bạn có chắc không?",
                    description: "Bạn có thực sự muốn báo cáo đánh giá này?",
                    confirm: "Báo cáo",
                    cancel: "Đừng bận tâm",
                    error: "Bạn phải đăng nhập để báo cáo đánh giá.",
                },
                block: {
                    title: "Bạn có chắc không?",
                    description: "Bạn có thực sự muốn chặn người dùng này? Bạn sẽ không nhìn thấy đánh giá của họ nữa.",
                    confirm: "Khối",
                    cancel: "Đừng bận tâm",
                    error: "Bạn phải đăng nhập để chặn người dùng.",
                },
                blocked: {
                    title: "Người dùng bị chặn",
                    auth: "Bạn chưa đăng nhập vào ReviewDB!",
                    noBlocked: "Không có người dùng nào bị chặn.",
                    fetch: "Đã xảy ra lỗi khi tìm nạp người dùng bị chặn."
                },
                reviews: {
                    title: "Bài đánh giá của",
                    noUser: "Có vẻ như chưa có ai đánh giá người dùng này. Bạn có thể là người đầu tiên!",
                    noServer: "Có vẻ như chưa có ai đánh giá máy chủ này. Bạn có thể là người đầu tiên!"
                }
            },
            button: {
                appeal: "Bắt mắt",
                ok: "ĐƯỢC RỒI",
                more: "Đọc thêm",
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
                reply: "Trả lời Đánh giá"
            },
            option: {
                authorize: {
                    label: "Ủy quyền",
                    button: "Ủy quyền với ReviewDB"
                },
                notifyReviews: {
                    label: "Thông báo đánh giá",
                    description: "Thông báo về đánh giá mới khi khởi động"
                },
                showWarning: {
                    label: "Hiển thị cảnh báo",
                    description: "Hiển thị cảnh báo tôn trọng ở đầu danh sách đánh giá"
                },
                hideTimestamps: {
                    label: "Ẩn dấu thời gian",
                    description: "Ẩn dấu thời gian trên bài đánh giá"
                },
                hideBlockedUsers: {
                    label: "Ẩn người dùng bị chặn",
                    description: "Ẩn đánh giá từ người dùng bị chặn"
                },
                buttons: {
                    label: "Nút",
                    manageBlocked: "Quản lý người dùng bị chặn",
                    support: "Hỗ trợ phát triển ReviewDB",
                    website: "Trang web ReviewDB",
                    server: "Máy chủ hỗ trợ ReviewDB"
                }
            },
            profile: {
                optedOut: "Người dùng đã từ chối",
                noReviews: "Chưa có đánh giá"
            }
        },
        richMagnetLinks: {
            name: "RichMagnetLinks",
            description: "Hiển thị liên kết nam châm giống như liên kết tin nhắn",
            unknown: "tên tệp không xác định"
        },
        roleColorEverywhere: {
            name: "RoleColorEverywhere",
            description: "Thêm màu vai trò hàng đầu bất cứ nơi nào có thể",
            option: {
                chatMentions: {
                    label: "Đề cập trò chuyện",
                    description: "Hiển thị màu sắc vai trò trong đề cập trò chuyện (bao gồm cả trong hộp tin nhắn)"
                },
                memberList: {
                    label: "Danh sách thành viên",
                    description: "Hiển thị màu vai trò trong tiêu đề vai trò của danh sách thành viên"
                },
                voiceUsers: {
                    label: "Người dùng giọng nói",
                    description: "Hiển thị màu vai trò trong danh sách người dùng trò chuyện thoại"
                },
                reactorsList: {
                    label: "Danh sách lò phản ứng",
                    description: "Hiển thị màu vai trò trong danh sách lò phản ứng"
                },
                pollResults: {
                    label: "Kết quả thăm dò ý kiến",
                    description: "Hiển thị màu sắc vai trò trong kết quả thăm dò ý kiến"
                },
                colorChatMessages: {
                    label: "Tin nhắn trò chuyện màu",
                    description: "Màu tin nhắn trò chuyện dựa trên màu vai trò của tác giả"
                },
                messageSaturation: {
                    label: "Độ bão hòa tin nhắn",
                    description: "Cường độ tô màu tin nhắn"
                }
            }
        },
        rpcEditor: {
            name: "RPCEditor",
            description: "Chỉnh sửa loại và nội dung của bất kỳ Sự hiện diện phong phú nào",
            option: {
                replacedAppIds: {
                    label: "ID ứng dụng được thay thế",
                }
            },
            modal: {
                tutorial: {
                    title: "ID của các hoạt động hiện đang chạy",
                    noRunning: "Không có hoạt động chạy bộ",
                    available: "Các biến có sẵn",
                    variableText: "Trong tất cả các trường (ngoại trừ URL luồng), bạn có thể đặt các biến sẽ tự động được thay thế bằng nội dung gốc của chúng:",
                    more: "Thêm chi tiết",
                    details: {
                        leave: "Để trống một trường để giữ nguyên như vậy.",
                        set: "Đặt trường thành 'null' để ẩn trường đó khi hiện diện.",
                        reload: "Bạn có thể cần tải lại Discord để áp dụng các thay đổi."
                    }
                },
                settings: {
                    applyEdits: "Áp dụng chỉnh sửa cho ứng dụng",
                    addNewApp: "Thêm ứng dụng mới",
                    appId: "ID ứng dụng",
                    invalidAppId: "ID ứng dụng không hợp lệ",
                    newActivityType: "Loại hoạt động mới",
                    activityTypes: {
                        playing: "Đang chơi",
                        watching: "Đang xem",
                        listening: "Nghe",
                        competing: "Cạnh tranh",
                        streaming: "Truyền phát"
                    },
                    streamUrl: "URL luồng (phải là YouTube hoặc Twitch)",
                    invalidStreamUrl: "URL luồng không hợp lệ",
                    newName: "Tên mới",
                    newDetails: "Chi tiết mới",
                    newState: "Tiểu bang mới",
                    largeImage: "Hình ảnh lớn",
                    smallImage: "Hình ảnh nhỏ",
                    text: "Chữ",
                    url: "URL",
                    firstLine: "(dòng đầu tiên)",
                    secondLine: "(dòng thứ hai)",
                    thirdLine: "(dòng thứ ba)",
                    alsoThirdLine: "(cũng là dòng thứ ba)",
                    hideAssets: "Ẩn nội dung (hình ảnh lớn và nhỏ)",
                    hideTimestamps: "Ẩn dấu thời gian"
                }
            },
        },
        rpcStats: {
            name: "RPCStats",
            description: "Hiển thị số liệu thống kê về hoạt động của bạn dưới dạng RPC",
            option: {
                assetURL: {
                    label: "URL nội dung",
                    description: "Hình ảnh để sử dụng cho RPC của bạn. Ảnh hồ sơ của bạn sẽ được sử dụng nếu để trống"
                },
                rpcTitle: {
                    label: "Tiêu đề RPC",
                    description: "Tiêu đề RPC của bạn"
                },
                statDisplay: {
                    label: "Hiển thị thống kê",
                    description: "RPC nên hiển thị những gì? (Bạn chỉ có thể có một dòng, tôi khá chắc chắn)",
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
                    description: "Có nên sử dụng ảnh bìa album làm ảnh RPC không? (Nếu bạn đã chọn màn hình Last.fm)"
                },
                lastFMStatFormat: {
                    label: "Định dạng thống kê Last.fm",
                    description: "Chỉ số Last.fm nên được định dạng như thế nào? $album được thay thế bằng tên album và $artist được thay thế bằng tên nghệ sĩ"
                }
            },
            noInfo: "Hiện chưa có thông tin :(",
            messagesToday: "Tin nhắn đã gửi hôm nay: {{count}}",
            messagesAllTime: "Tin nhắn đã gửi mọi lúc: {{count}}"
        },
        saveFavoriteGIFs: {
            name: "SaveFavouritedGIFs",
            description: "Xuất URL GIF yêu thích",
            toolbox: "Lưu ảnh GIF yêu thích",
            title: "Lưu ảnh GIF yêu thích",
            command: {
                savegifs: {
                    description: "Lưu tất cả các URL GIF yêu thích vào một tệp văn bản"
                },
                saveworkinggifs: {
                    description: "Kiểm tra tất cả các ảnh GIF yêu thích và chỉ lưu những ảnh vẫn đang hoạt động"
                }
            },
            option: {
                showToolboxButton: {
                    label: "Hiển thị nút hộp công cụ",
                    description: "Hiển thị nút 'Lưu ảnh GIF yêu thích' trong Hộp công cụ Plexcord (Yêu cầu tải lại)"
                }
            },
            toast: {
                save: "Đã lưu GIF thành công dưới dạng {{filename}}",
                failed: "Không lưu được ảnh GIF",
                no: "Không tìm thấy ảnh GIF yêu thích nào!",
                testing: "Đang kiểm tra {{count}} GIF, quá trình này có thể mất chút thời gian...",
                noneWorking: "Không có ảnh GIF đã lưu nào của bạn có vẻ đang hoạt động.",
                saved: "Đã lọc {{broken}} ảnh GIF có thể bị hỏng. Đã lưu {{saved}} ảnh GIF đang hoạt động."
            }
        },
        scheduledMessages: {
            name: "ScheduledMessages",
            description: "Lên lịch gửi tin nhắn vào một thời điểm cụ thể hoặc sau một thời gian trì hoãn.",
            toolbox: {
                toggle: "Xem tin nhắn đã lên lịch"
            },
            option: {
                maxMessagesPerMinute: {
                    label: "Số tin nhắn tối đa mỗi phút",
                    description: "Số tin nhắn được lên lịch tối đa cho mỗi kênh có thể kích hoạt trong cùng một phút."
                },
                checkIntervalSeconds: {
                    label: "Khoảng thời gian kiểm tra (Giây)",
                    description: "Tần suất plugin kiểm tra tin nhắn cần gửi."
                },
                showNotifications: {
                    label: "Hiển thị thông báo",
                    description: "Hiển thị thông báo chúc mừng khi tin nhắn được gửi."
                },
                showPhantomMessages: {
                    label: "Hiển thị tin nhắn ảo",
                    description: "Hiển thị tin nhắn đã lên lịch dưới dạng tin nhắn ảo trong cuộc trò chuyện."
                }
            },
            channelType: {
                unknown: "Không xác định",
                dm: "DM",
                groupDm: "Nhóm DM",
                channel: "Kênh"
            },
            toast: {
                messageSent: "Tin nhắn đã lên lịch gửi tới {{channel}}",
                messageFailed: "Không gửi được tin nhắn theo lịch",
                maxMessagesReached: "Đã đạt tới tối đa {{max}} tin nhắn trên mỗi kênh mỗi phút",
                messageScheduled: "Đã lên lịch tin nhắn!",
                messageRemoved: "Đã xóa tin nhắn theo lịch trình",
                allCleared: "Đã xóa tất cả tin nhắn đã lên lịch"
            },
            button: {
                tooltipOn: "Chế độ lịch trình BẬT (nhấp để tắt, nhấp chuột phải để xem danh sách)",
                tooltipOff: "Chế độ lịch trình TẮT (nhấp để bật, nhấp chuột phải để xem danh sách)"
            },
            accessory: {
                scheduledFor: "Đã lên lịch vào {date}{timeLeft}",
                remaining: {
                    days: "{{days}}d {{hours}}h còn lại",
                    hours: "{{hours}}h {{minutes}}m còn lại",
                    minutes: "{{minutes}}m còn lại"
                }
            },
            scheduleModal: {
                title: "Lên lịch tin nhắn",
                schedulingFor: "Đang lên lịch cho: {{channel}}",
                scheduleType: "Loại lịch trình",
                delay: "Trì hoãn",
                specificTime: "Thời gian cụ thể",
                delayMinutes: "Độ trễ (phút)",
                dateTime: "Ngày & Giờ",
                error: {
                    invalidDelay: "Vui lòng nhập độ trễ hợp lệ (tối thiểu 1 phút)",
                    invalidDateTime: "Vui lòng chọn ngày và giờ trong tương lai"
                },
                schedule: "Lịch trình",
                cancel: "Hủy bỏ"
            },
            viewModal: {
                title: "Tin nhắn đã lên lịch",
                clearAll: "Xóa tất cả",
                noMessages: "Không có tin nhắn theo lịch trình",
                delete: "Xóa bỏ",
                close: "Đóng"
            }
        },
        searchFix: {
            name: "SearchFix",
            description: "Khắc phục sự cố khó chịu 'Chúng tôi đã đánh rơi kính lúp!' lỗi.",
            notPerfect: "Bản sửa lỗi này chưa hoàn hảo nên bạn có thể phải tải lại thanh tìm kiếm để khắc phục sự cố.",
            paragraph1: "Discord chỉ cho phép offset tối đa là 5000 (đây là nguyên nhân gây ra lỗi kính lúp).",
            paragraph2: "Điều này có nghĩa là bạn chỉ có thể xem chính xác 5000 tin nhắn trong quá khứ và 5000 tin nhắn trong tương lai (khi sắp xếp theo cũ).",
            paragraph3: "Plugin này chỉ chuyển sang phương pháp sắp xếp ngược lại để cố gắng vượt qua hạn chế của Discord,",
            paragraph4: "nhưng nếu có một kết quả tìm kiếm lớn và bạn cố xem một thư không thể lấy được bằng cả hai phương pháp sắp xếp,",
            paragraph5: "plugin sẽ chỉ hiển thị offset 0 (tin nhắn mới nhất hoặc cũ nhất tùy thuộc vào phương pháp sắp xếp)."
        },
        secretRingToneEnabler: {
            name: "SecretRingToneEnabler",
            description: "Luôn phát phiên bản bí mật của nhạc chuông Discord (ngoại trừ trong các sự kiện nhạc chuông đặc biệt)",
            option: {
                onlySnow: {
                    label: "Chỉ trong sự kiện nhạc chuông tuyết",
                    description: "Chỉ chơi chủ đề Snow Halation"
                }
            }
        },
        summaries: {
            name: "Summaries",
            description: "Kích hoạt tính năng Tóm tắt thử nghiệm của Discord trên mọi máy chủ, hiển thị các bản tóm tắt cuộc hội thoại do AI tạo",
            option: {
                summaryExpiryThresholdDays: {
                    label: "Ngưỡng hết hạn tóm tắt (Ngày)",
                    description: "Thời gian tính bằng ngày trước khi bản tóm tắt bị xóa. Lưu ý rằng chỉ có tối đa 50 bản tóm tắt được lưu giữ trên mỗi kênh"
                }
            }
        },
        selfForward: {
            name: "SelfForward",
            description: "Thêm kênh hiện tại vào cửa sổ bật lên danh sách chuyển tiếp"
        },
        sendTimestamps: {
            name: "SendTimestamps",
            description: "Gửi dấu thời gian dễ dàng thông qua nút hộp trò chuyện và phím tắt văn bản. Đọc mô tả mở rộng!",
            sample: {
                paragraph1: "Để nhanh chóng gửi dấu thời gian chỉ có thời gian, hãy đưa dấu thời gian được định dạng là `HH:MM` (bao gồm cả dấu ngược!) vào tin nhắn của bạn",
                paragraph2: "Xem ví dụ bên dưới.\nNếu bạn cần điều gì cụ thể hơn, hãy sử dụng nút Ngày trong thanh trò chuyện!",
                examples: "Ví dụ:"
            },
            modal: {
                title: "Bộ chọn dấu thời gian",
                light: "Ánh sáng",
                dark: "Tối tăm",
                format: "Định dạng dấu thời gian",
                preview: "Xem trước",
                insert: "Chèn",
                insertTimestamp: "Chèn dấu thời gian"
            },
            option: {
                replaceMessageContents: {
                    label: "Thay thế nội dung tin nhắn",
                    description: "Thay thế dấu thời gian trong nội dung tin nhắn"
                }
            }
        },
        serverInfo: {
            name: "ServerInfo",
            description: "Cho phép bạn xem thông tin về máy chủ",
            context: {
                serverInfo: "Thông tin máy chủ"
            },
            option: {
                sorting: {
                    label: "Sắp xếp",
                    description: "Tên người dùng hoặc, nếu có, Tên hiển thị",
                    username: "Tên người dùng",
                    displayname: "Tên hiển thị",
                    none: "Đừng sắp xếp"
                }
            },
            modal: {
                tab: {
                    serverInfo: "Thông tin máy chủ",
                    friends: "Bạn",
                    mutualUsers: "Người dùng chung",
                    blockedUsers: "Người dùng bị chặn",
                    ignoredUsers: "Người dùng bị bỏ qua"
                },
                owner: "Chủ sở hữu máy chủ",
                loading: "Đang tải...",
                createdAt: "Được tạo tại",
                joinedAt: "Đã tham gia tại",
                vanityLink: "Liên kết phù phiếm",
                preferredLocale: "Ngôn ngữ ưa thích",
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
                roles: "Vai trò"
            }
        },
        serverListIndicators: {
            name: "ServerListIndicators",
            description: "Thêm số lượng bạn bè trực tuyến hoặc số lượng máy chủ trong danh sách máy chủ",
            friends: "Bạn",
            servers: "Máy chủ",
            option: {
                mode: {
                    label: "Cách thức",
                    description: "Chế độ hiển thị trong danh sách máy chủ",
                    friend: "Chỉ tính bạn bè trực tuyến",
                    server: "Chỉ tính máy chủ",
                    both: "Cả máy chủ và số bạn bè trực tuyến đều được tính"
                },
                useCompact: {
                    label: "Sử dụng Chế độ thu gọn",
                    description: "Làm cho chỉ báo chỉ xuất hiện với văn bản"
                }
            }
        },
        serverSearch: {
            name: "ServerSearch",
            description: "Điều hướng máy chủ của bạn tốt hơn bằng nút tìm kiếm nhanh",
            tooltip: "Tìm kiếm"
        },
        shikiCodeblocks: {
            name: "ShikiCodeblocks",
            description: "Đưa các khối mã kiểu VS Code vào Discord, được cung cấp bởi Shiki",
            option: {
                theme: {
                    label: "chủ đề",
                    description: "Chủ đề mặc định"
                },
                customTheme: {
                    label: "Chủ đề tùy chỉnh",
                    description: "Liên kết đến chủ đề VS Code tùy chỉnh",
                    mustURL: "Phải là một URL hợp lệ",
                    mustJSON: "Phải là tệp JSON"
                },
                tryHljs: {
                    label: "Dự phòng cho Hljs",
                    description: "Sử dụng chủ đề và công cụ đánh dấu Discord mặc định nhẹ hơn.",
                    never: "Không bao giờ",
                    secondary: "Thích Shiki thay vì Highlight.js",
                    primary: "Thích Highlight.js thay vì Shiki",
                    always: "Luôn luôn"
                },
                useDevIcon: {
                    label: "Sử dụng Devicon cho biểu tượng ngôn ngữ",
                    description: "Cách hiển thị biểu tượng ngôn ngữ trên codeblocks",
                    disabled: "Tàn tật",
                    colorless: "không màu",
                    colored: "màu"
                },
                bgOpacity: {
                    label: "Độ mờ nền",
                    description: "Độ mờ nền"
                }
            },
            button: {
                copy: "Sao chép",
                copied: "Đã sao chép!"
            }
        },
        showAllMessageButtons: {
            name: "ShowAllMessageButtons",
            description: "Luôn hiển thị tất cả các nút tin nhắn bất kể bạn có đang giữ phím shift hay không.",
            option: {
                noShiftDelete: {
                    label: "Không có ca Xóa",
                    description: "Loại bỏ yêu cầu giữ shift để xóa tin nhắn."
                },
                noShiftPin: {
                    label: "Không có phím Shift",
                    description: "Loại bỏ yêu cầu giữ phím shift để ghim tin nhắn."
                }
            }
        },
        showBadgesInChat: {
            name: "ShowBadgesInChat",
            description: "Hiển thị huy hiệu của tác giả tin nhắn bên cạnh tên của họ trong cuộc trò chuyện.",
            option: {
                showPlexcordDonor: {
                    label: "Hiển thị Huy hiệu Nhà tài trợ Plexcord",
                    description: "Cho phép hiển thị huy hiệu Nhà tài trợ Plexcord trong cuộc trò chuyện."
                },
                plexcordDonorPosition: {
                    label: "Vị trí Huy hiệu Nhà tài trợ Plexcord",
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
                    description: "Định cấu hình vị trí của các huy hiệu khác được hiển thị trong trò chuyện.",
                    modal: "Kéo các huy hiệu để sắp xếp lại chúng; bạn có thể nhấp để bật/tắt một loại huy hiệu cụ thể."
                }
            },
            badge: {
                plexcord: "Huy hiệu nhà tài trợ Plexcord",
                contributor: "Huy hiệu cộng tác viên Plexcord",
                discordProfile: "Huy hiệu hồ sơ Discord (HypeSquad, Nhân viên Discord, Nhà phát triển đang hoạt động, v.v.)",
                nitro: "Huy hiệu Nitro",
                staff: "Nhân viên bất hòa",
                partner: "Chủ sở hữu máy chủ hợp tác",
                events: "Sự kiện HypeSquad",
                bravery: "Sự dũng cảm của Biệt đội Hype",
                brilliance: "HypeSquad rực rỡ",
                balance: "Số dư đội hình cường điệu",
                bugHunter: "Thợ săn lỗi bất hòa",
                earlyVerifiedBotDeveloper: "Nhà phát triển Bot đã được xác minh sớm",
                earlySupporter: "Người ủng hộ sớm",
                moderatorProgram: "Cựu sinh viên chương trình điều hành"
            },
            modal: {
                plexcordContributor: "Cộng tác viên Plexcord",
                discordNitro: "Bất hòa Nitro",
                basic: "Nền tảng",
                classic: "Cổ điển"
            }
        },
        showConnections: {
            name: "ShowConnections",
            description: "Hiển thị các tài khoản được kết nối trong cửa sổ bật lên của người dùng",
            option: {
                iconSize: {
                    label: "Kích thước biểu tượng",
                    description: "Kích thước biểu tượng (px)"
                },
                iconSpacing: {
                    label: "Khoảng cách biểu tượng",
                    description: "Lề biểu tượng",
                    compact: "Nhỏ gọn",
                    cozy: "Ấm áp",
                    roomy: "rộng rãi"
                }
            }
        },
        showHiddenChannels: {
            name: "ShowHiddenChannels",
            description: "Hiển thị các kênh mà bạn không có quyền truy cập để xem.",
            tooltip: "Kênh ẩn",
            option: {
                channelStyle: {
                    label: "Kiểu kênh",
                    description: "Kiểu được sử dụng để hiển thị các kênh ẩn.",
                    classic: "Cổ điển",
                    muted: "Đã tắt tiếng",
                    showUnreads: "Hiển thị bài chưa đọc",
                    mutedWithUnreads: "Tắt tiếng và hiển thị nội dung chưa đọc"
                },
                showMode: {
                    label: "Chế độ hiển thị",
                    description: "Chế độ được sử dụng để hiển thị các kênh ẩn.",
                    lock: "Phong cách đơn giản với Biểu tượng khóa thay thế",
                    hidden: "Kiểu tắt tiếng với biểu tượng con mắt ẩn ở bên phải",
                    lockIconRight: "Biểu tượng khóa bên phải"
                },
                defaultAllowedUsersAndRolesDropdownState: {
                    label: "Trạng thái thả xuống vai trò và người dùng được phép mặc định",
                    description: "Theo mặc định, danh sách thả xuống vai trò và người dùng được phép trên các kênh ẩn có nên được mở hay không"
                }
            },
            channelType: {
                text: "chữ",
                announcement: "thông báo",
                forum: "diễn đàn",
                voice: "tiếng nói",
                stage: "sân khấu"
            },
            sortOrder: {
                latestActivity: "Hoạt động mới nhất",
                creationDate: "Ngày tạo"
            },
            forumLayout: {
                default: "Chưa đặt",
                list: "Chế độ xem danh sách",
                grid: "Chế độ xem thư viện"
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
                permissionDetails: "Chi tiết quyền",
                thisIsA: "Đây là kênh {{status}} {{channelType}}",
                canNotSee: "Bạn không thể xem {{type}} của kênh này.",
                guidelines: "Tuy nhiên, bạn có thể thấy hướng dẫn của nó:",
                lastCreated: "{{type}} được tạo lần cuối:",
                lastPin: "Mã pin tin nhắn cuối cùng:",
                threadSlowmode: "Chủ đề chậm mặc định:",
                slowmode: "Chế độ chậm:",
                bitrate: "Tốc độ bit:",
                region: "Vùng đất:",
                automatic: "Tự động",
                videoQuality: "Chế độ chất lượng video:",
                inactiveArchiveDuration: "Khoảng thời gian không hoạt động mặc định trước khi lưu trữ {{type}}",
                defaultLayout: "Bố cục mặc định:",
                defaultSort: "Thứ tự sắp xếp mặc định:",
                defaultReaction: "Biểu tượng cảm xúc phản ứng mặc định:",
                requireTag: "Bài viết trên diễn đàn này yêu cầu phải đặt thẻ.",
                availableTags: "Thẻ có sẵn:",
                allowedUsersAndRoles: "Người dùng và vai trò được phép:",
                hideAllowedUsersAndRoles: "Ẩn người dùng và vai trò được phép",
                viewAllowedUsersAndRoles: "Xem người dùng và vai trò được phép"
            }
        },
        showHiddenThings: {
            name: "ShowHiddenThings",
            description: "Hiển thị nhiều thứ ẩn và chỉ dành cho người kiểm duyệt bất kể quyền.",
            option: {
                showTimeouts: {
                    label: "Hiển thị thời gian chờ của thành viên trong cuộc trò chuyện",
                    description: "Hiển thị biểu tượng thời gian chờ của thành viên trong cuộc trò chuyện."
                },
                showInvitesPaused: {
                    label: "Hiển thị lời mời bị tạm dừng",
                    description: "Hiển thị chú giải công cụ lời mời bị tạm dừng trong danh sách máy chủ."
                },
                showModView: {
                    label: "Hiển thị chế độ xem mod",
                    description: "Hiển thị mục menu ngữ cảnh chế độ xem mod thành viên trong tất cả các máy chủ."
                }
            }
        },
        showMessageEmbeds: {
            name: "ShowMessageEmbeds",
            description: "Thêm tùy chọn menu ngữ cảnh để hiển thị nội dung nhúng cho các liên kết chưa có",
            context: {
                embed: {
                    show: "Hiển thị nhúng",
                    hide: "Xóa nhúng"
                }
            },
            error: {
                failed: "Không nhúng được",
                noEmbed: "Không tìm thấy nội dung nhúng nào"
            }
        },
        showMeYourName: {
            name: "ShowMeYourName",
            description: "Hiển thị bất kỳ hoán vị nào của biệt hiệu tùy chỉnh, biệt hiệu của bạn bè, biệt hiệu máy chủ, tên hiển thị và tên người dùng trong cuộc trò chuyện.",
            option: {
                messages: {
                    label: "Tin nhắn",
                    description: "Hiển thị định dạng tên tùy chỉnh trong tin nhắn."
                },
                replies: {
                    label: "Trả lời",
                    description: "Hiển thị định dạng tên tùy chỉnh trong thư trả lời."
                },
                mentions: {
                    label: "Đề cập",
                    description: "Hiển thị định dạng tên tùy chỉnh trong đề cập."
                },
                typingIndicator: {
                    label: "Chỉ báo gõ",
                    description: "Hiển thị tên khả dụng đầu tiên được liệt kê ở định dạng tên tùy chỉnh của bạn trong chỉ báo nhập."
                },
                memberList: {
                    label: "Danh sách thành viên",
                    description: "Hiển thị tên khả dụng đầu tiên được liệt kê ở định dạng tên tùy chỉnh của bạn trong danh sách thành viên."
                },
                profilePopout: {
                    label: "Hồ sơ bật lên",
                    description: "Hiển thị tên khả dụng đầu tiên được liệt kê ở định dạng tên tùy chỉnh của bạn trong cửa sổ bật lên hồ sơ."
                },
                voiceChannels: {
                    label: "Kênh thoại",
                    description: "Hiển thị tên khả dụng đầu tiên được liệt kê ở định dạng tên tùy chỉnh của bạn trong các kênh thoại."
                },
                reactions: {
                    label: "phản ứng",
                    description: "Hiển thị tên khả dụng đầu tiên được liệt kê ở định dạng tên tùy chỉnh của bạn trong chú giải công cụ phản ứng và tên đầy đủ trong cửa sổ bật lên phản ứng."
                },
                discriminators: {
                    label: "người phân biệt đối xử",
                    description: "Thêm các yếu tố phân biệt đối xử vào tên người dùng cho bot. Trình phân biệt đối xử không còn được dùng đối với người dùng nhưng vẫn được sử dụng cho bot. Theo mặc định, tên người dùng của bot tương đương với tên chung của người dùng, do đó nhiều bot có thể có cùng tên người dùng. Việc bổ sung các yếu tố phân biệt đối xử làm cho chúng trở nên độc đáo trở lại."
                },
                hideDefaultAtSign: {
                    label: "Ẩn mặc định tại dấu hiệu",
                    description: "Ẩn ký hiệu '@' mặc định trước tên trong đề cập và trả lời. Chỉ áp dụng nếu một trong hai tính năng được bật."
                },
                truncateAllNamesWithStreamerMode: {
                    label: "Cắt bớt tất cả tên với chế độ truyền phát",
                    description: "Cắt ngắn tất cả tên, không chỉ tên người dùng, khi ở Chế độ phát trực tiếp."
                },
                removeDuplicates: {
                    label: "Xóa trùng lặp",
                    description: "Nếu bất kỳ tên nào tương đương, hãy xóa chúng, chỉ để lại những tên duy nhất."
                },
                ignoreFonts: {
                    label: "Bỏ qua phông chữ",
                    description: "Đối với tên thứ hai, thứ ba và thứ tư, hãy sử dụng gg sans bất kể phông chữ tùy chỉnh của người dùng."
                },
                ignoreGradients: {
                    label: "Bỏ qua các gradient",
                    description: "Đối với các tên không chính, nếu vai trò có dải màu và màu bên dưới được đặt thành 'Vai trò+-#', hãy sử dụng màu chính thay vì toàn bộ dải màu và nếu nó có hiệu ứng Nitro, hãy bỏ qua hoàn toàn."
                },
                animateGradients: {
                    label: "Chuyển màu sinh động",
                    description: "Đối với tên thứ hai, thứ ba và thứ tư, nếu vai trò có độ chuyển màu, hãy tạo hoạt ảnh cho nó. Tính năng này bị vô hiệu hóa bởi 'Bỏ qua độ dốc' và giảm chuyển động."
                },
                nameSeparator: {
                    label: "Dấu phân cách tên",
                    description: "Dấu phân cách để sử dụng giữa các tên. Mặc định là một khoảng trắng."
                },
                friendNameOnlyInDirectMessages: {
                    label: "Chỉ tên bạn bè trong tin nhắn trực tiếp",
                    description: "Chỉ hiển thị tên bạn bè khi ở trong DM chứ không phải trên máy chủ."
                },
                customNameOnlyInDirectMessages: {
                    label: "Chỉ tên tùy chỉnh trong tin nhắn trực tiếp",
                    description: "Chỉ hiển thị tên tùy chỉnh khi ở trong DM chứ không phải trong máy chủ."
                },
                includedNames: {
                    label: "Tên bao gồm",
                    description: "Thứ tự hiển thị tên người dùng, tên hiển thị, biệt hiệu và tên bạn bè. Sử dụng các phần giữ chỗ sau: {user}, {display}, {nick}, {friend}. Bạn có thể cung cấp nhiều tùy chọn tên để sử dụng làm tên dự phòng nếu không có tùy chọn tên bằng cách phân tách chúng bằng dấu phẩy, chẳng hạn như: {friend, nick, display}. Bạn có thể có tối đa ba tiền tố và ba hậu tố cho mỗi tên."
                },
                customNameColor: {
                    label: "Màu tên tùy chỉnh",
                    description: "Màu sử dụng cho tên tùy chỉnh mà bạn đã gán cho người dùng nếu nó không phải là tên được hiển thị đầu tiên. Chấp nhận mọi đầu vào CSS hợp lệ. Sử dụng 'Vai trò' để theo dõi các màu vai trò hàng đầu của người dùng, màu hiệu ứng Nitro hoặc màu IRCColors nếu được bật. Sử dụng 'Vai trò+-#' để điều chỉnh độ sáng theo tỷ lệ phần trăm đó (ví dụ: 'Vai trò+15')"
                },
                friendNameColor: {
                    label: "Màu tên bạn bè",
                    description: "Màu dùng cho biệt hiệu của bạn bè nếu đó không phải là màu được hiển thị đầu tiên. Chấp nhận mọi đầu vào CSS hợp lệ. Sử dụng 'Vai trò' để theo dõi các màu vai trò hàng đầu của người dùng, màu hiệu ứng Nitro hoặc màu IRCColors nếu được bật. Sử dụng 'Vai trò+-#' để điều chỉnh độ sáng theo tỷ lệ phần trăm đó (ví dụ: 'Vai trò+15')"
                },
                nicknameColor: {
                    label: "Màu biệt danh",
                    description: "Màu sử dụng cho biệt hiệu nếu nó không phải là màu hiển thị đầu tiên. Chấp nhận mọi đầu vào CSS hợp lệ. Sử dụng 'Vai trò' để theo dõi các màu vai trò hàng đầu của người dùng, màu hiệu ứng Nitro hoặc màu IRCColors nếu được bật. Sử dụng 'Vai trò+-#' để điều chỉnh độ sáng theo tỷ lệ phần trăm đó (ví dụ: 'Vai trò+15')"
                },
                displayNameColor: {
                    label: "Màu tên hiển thị",
                    description: "Màu sử dụng cho tên hiển thị nếu nó không phải là màu được hiển thị đầu tiên. Accepts any valid CSS input. Sử dụng 'Vai trò' để theo dõi các màu vai trò hàng đầu của người dùng, màu hiệu ứng Nitro hoặc màu IRCColors nếu được bật. Sử dụng 'Vai trò+-#' để điều chỉnh độ sáng theo tỷ lệ phần trăm đó (ví dụ: 'Vai trò+15')"
                },
                usernameColor: {
                    label: "Màu tên người dùng",
                    description: "Màu sử dụng cho tên người dùng nếu nó không phải là màu được hiển thị đầu tiên. Chấp nhận mọi đầu vào CSS hợp lệ. Sử dụng 'Vai trò' để theo dõi các màu vai trò hàng đầu của người dùng, màu hiệu ứng Nitro hoặc màu IRCColors nếu được bật. Sử dụng 'Vai trò+-#' để điều chỉnh độ sáng theo tỷ lệ phần trăm đó (ví dụ: 'Vai trò+15')"
                },
                triggerNameRerender: {
                    label: "Trình kết xuất tên kích hoạt",
                    description: "Kích hoạt hiển thị lại tên bằng cách chuyển đổi cài đặt này."
                }
            },
            modal: {
                change: {
                    title: "Thay đổi biệt danh SMYN"
                },
                add: {
                    title: "Thêm biệt hiệu SMYN"
                },
                setCustom: "Đặt biệt hiệu SMYN tùy chỉnh cho người dùng này. Hãy tận dụng nó bằng cách chỉ định {custom} trong cài đặt mẫu SMYN.",
                nickname: "Biệt danh SMYN",
                reset: "Đặt lại biệt danh SMYN",
                cancel: "Hủy bỏ"
            }
        },
        showTimeoutDuration: {
            name: "ShowTimeoutDuration",
            description: "Hiển thị thời gian chờ của người dùng sẽ kéo dài bao lâu, trong chú giải công cụ biểu tượng thời gian chờ hoặc bên cạnh nó",
            option: {
                displayStyle: {
                    label: "Kiểu hiển thị",
                    description: "Cách hiển thị thời gian chờ",
                    tooltip: "Trong chú giải công cụ",
                    inline: "Bên cạnh biểu tượng hết thời gian chờ"
                }
            }
        },
        showResourceChannels: {
            name: "ShowResourceChannels",
            description: "Hiển thị các kênh ẩn đằng sau tài nguyên máy chủ trong danh sách kênh"
        },
        showSongName: {
            name: "ShowSongName",
            description: "Hiển thị tên bài hát thay vì nghệ sĩ cho hoạt động Spotify"
        },
        sidebarChat: {
            name: "SidebarChat",
            description: "Mở một kênh hoặc DM khác dưới dạng thanh bên hoặc dưới dạng cửa sổ bật lên",
            toolbox: {
                label: "Mở cuộc trò chuyện trước đó"
            },
            context: {
                label: "Mở trò chuyện thanh bên"
            },
            modal: {
                switch: "Chuyển kênh",
                popout: "Trò chuyện bật ra",
                close: "Đóng trò chuyện ở thanh bên"
            },
            option: {
                persistSidebar: {
                    label: "Trò chuyện trên thanh bên liên tục",
                    description: "Giữ cuộc trò chuyện ở thanh bên luôn mở khi Discord khởi động lại"
                },
                patchCommunity: {
                    label: "Cộng đồng vá lỗi",
                    description: "Các tính năng vá lỗi như tab Trình duyệt kênh hoặc Thành viên mà máy chủ cộng đồng có."
                }
            }
        },
        signature: {
            name: "Signature",
            description: "Tự động lấy dấu vân tay/kết thúc văn bản",
            option: {
                name: {
                    label: "Tên",
                    description: "Chữ ký sẽ được thêm vào cuối tin nhắn của bạn"
                },
                textHeader: {
                    label: "Tiêu đề văn bản",
                    description: "Tiêu đề nào để mở đầu văn bản"
                },
                showIcon: {
                    label: "Hiển thị biểu tượng",
                    description: "Hiển thị biểu tượng để chuyển đổi plugin trong thanh trò chuyện"
                },
                contextMenu: {
                    label: "Trình đơn ngữ cảnh",
                    description: "Thêm tùy chọn chuyển đổi chức năng trong menu ngữ cảnh nhập trò chuyện"
                },
                isEnabled: {
                    label: "Đã bật",
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
                    name: "Signature",
                    description: "Chuyển đổi chữ ký của bạn",
                    toogle: "Chuyển đổi chữ ký của bạn (mặc định là chuyển đổi)",
                    enabled: "Đã bật chữ ký",
                    disabled: "Chữ ký bị vô hiệu hóa"
                }
            }
        },
        silentMessageToggle: {
            name: "SilentMessageToggle",
            description: "Thêm một nút vào thanh trò chuyện để chuyển đổi việc gửi tin nhắn im lặng.",
            option: {
                persistState: {
                    label: "Trạng thái kiên trì",
                    description: "Cách duy trì trạng thái chuyển đổi tin nhắn im lặng",
                    none: "Đừng tiếp tục (đặt lại khi thay đổi kênh)",
                    channels: "Kiên trì giữa các kênh",
                    restarts: "Kiên trì giữa các kênh và khởi động lại"
                },
                autoDisable: {
                    label: "Tự động tắt",
                    description: "Tự động tắt tính năng chuyển đổi tin nhắn im lặng một lần nữa sau khi gửi một tin nhắn"
                }
            },
            tooltip: {
                enable: "Bật tin nhắn im lặng",
                disable: "Tắt tin nhắn im lặng"
            }
        },
        silentTyping: {
            name: "SilentTyping",
            description: "Ẩn chỉ báo gõ của bạn khỏi cuộc trò chuyện.",
            command: {
                silentTyping: {
                    name: "SilentTyping",
                    description: "Ẩn chỉ báo gõ của bạn khỏi cuộc trò chuyện.",
                    toggle: {
                        name: "toggle",
                        description: "Chuyển đổi chức năng trên toàn cầu, cho kênh hoặc cho bang hội.",
                        global: "Toàn cầu",
                        channel: "Kênh",
                        guild: "bang hội"
                    },
                    chatBarIndicator: {
                        name: "chatBarIndicator",
                        description: "Ẩn chỉ báo gõ của người dùng khác phía trên thanh trò chuyện."
                    },
                    membersListIndicator: {
                        name: "membersListIndicator",
                        description: "Ẩn chỉ báo gõ của người dùng khác khỏi danh sách thành viên."
                    },
                    chatIcon: {
                        name: "chatIcon",
                        description: "Hiển thị biểu tượng trong thanh trò chuyện để chuyển đổi plugin khi đang di chuyển."
                    },
                    chatContextMenu: {
                        name: "chatContextMenu",
                        description: "Hiển thị danh sách thả xuống trong menu ngữ cảnh trò chuyện để chuyển đổi cài đặt plugin khi đang di chuyển."
                    },
                    defaultHidden: {
                        name: "defaultHidden",
                        description: "Có ẩn nội dung nhập trong DM/kênh/bang hội theo mặc định hay không."
                    }
                }
            },
            content: {
                updated: "Đã cập nhật cài đặt gõ im lặng.",
                noChanges: "Không có thay đổi nào được thực hiện đối với cài đặt nhập im lặng."
            },
            tooltip: {
                hidden: "Đang gõ ẩn ({{location}})",
                visible: "Đang gõ hiển thị ({{location}})",
                global: "Đang gõ có thể nhìn thấy (Toàn cầu)"
            },
            option: {
                enabledGlobally: {
                    label: "Đã bật trên toàn cầu",
                    description: "Chuyển đổi chức năng của chỉ báo gõ của riêng bạn trên toàn cầu."
                },
                hideChatBoxTypingIndicators: {
                    label: "Ẩn chỉ báo gõ hộp trò chuyện",
                    description: "Ẩn chỉ báo gõ của người dùng khác phía trên thanh trò chuyện."
                },
                hideMembersListTypingIndicators: {
                    label: "Ẩn chỉ báo gõ danh sách thành viên",
                    description: "Ẩn chỉ báo gõ của người dùng khác khỏi danh sách thành viên."
                },
                chatIcon: {
                    label: "Biểu tượng trò chuyện",
                    description: "Hiển thị biểu tượng trong thanh trò chuyện để sửa đổi plugin khi đang di chuyển."
                },
                chatIconLeftClickAction: {
                    label: "Biểu tượng trò chuyện Hành động nhấp chuột trái",
                    description: "Phải làm gì khi nhấp chuột trái vào biểu tượng trò chuyện.",
                    global: "Chuyển đổi cách gõ trên toàn cầu",
                    channel: "Chuyển đổi cách nhập cho kênh",
                    guild: "Chuyển đổi cách gõ cho Bang hội",
                    settings: "Mở cài đặt plugin"
                },
                chatIconMiddleClickAction: {
                    label: "Biểu tượng trò chuyện Hành động nhấp chuột giữa",
                    description: "Phải làm gì khi nhấp chuột giữa vào biểu tượng trò chuyện.",
                    global: "Chuyển đổi cách gõ trên toàn cầu",
                    channel: "Chuyển đổi cách nhập cho kênh",
                    guild: "Chuyển đổi cách gõ cho Bang hội",
                    settings: "Mở cài đặt plugin"
                },
                chatIconRightClickAction: {
                    label: "Biểu tượng trò chuyện Hành động nhấp chuột phải",
                    description: "Phải làm gì khi nhấp chuột phải vào biểu tượng trò chuyện.",
                    global: "Chuyển đổi cách gõ trên toàn cầu",
                    channel: "Chuyển đổi cách nhập cho kênh",
                    guild: "Chuyển đổi cách gõ cho Bang hội",
                    settings: "Mở cài đặt plugin"
                },
                chatContextMenu: {
                    label: "Menu ngữ cảnh trò chuyện",
                    description: "Hiển thị danh sách thả xuống trong menu ngữ cảnh trò chuyện để sửa đổi cài đặt plugin khi đang di chuyển."
                },
                defaultHidden: {
                    label: "Mặc định Ẩn",
                    description: "If enabled, the plugin will hide your typing from others in any DMs/channels/guilds not listed in 'Disabled Locations' below. Nếu bị tắt, plugin sẽ hiển thị nội dung bạn nhập cho người khác đối với bất kỳ DM/kênh/bang hội nào không được liệt kê trong 'Vị trí đã bật' bên dưới."
                },
                enabledLocations: {
                    label: "Vị trí đã bật",
                    description: "Kích hoạt chức năng cho các ID này. Chấp nhận danh sách ID DM, ID kênh và ID bang hội được phân tách bằng dấu phẩy. Chỉ được sử dụng nếu 'Ẩn mặc định' bị tắt."
                },
                disabledLocations: {
                    label: "Vị trí bị vô hiệu hóa",
                    description: "Tắt chức năng cho các ID này. Chấp nhận danh sách ID DM, ID kênh và ID bang hội được phân tách bằng dấu phẩy. Chỉ được sử dụng nếu 'Ẩn mặc định' được bật."
                }
            }
        },
        snowfall: {
            name: "Snowfall",
            description: "Hãy để tuyết rơi trên Discord!",
            about: {
                title: "Thông tin",
                paragraph: "Plugin này thêm hiệu ứng tuyết rơi Giáng sinh trên giao diện của Discord. Bạn có thể thay đổi loại tuyết trong cài đặt bên dưới.",
                note: "LƯU Ý: Mặc dù trên hầu hết các máy tính, plugin này sẽ không ảnh hưởng đến hiệu suất nhiều hơn tiện ích mở rộng Plexcord thông thường của bạn, nhưng nó có thể gây ra một số độ trễ trên các hệ thống cấp thấp hơn."
            },
            option: {
                typeOfSnow: {
                    label: "Loại tuyết",
                    description: "Thay đổi loại tuyết hiển thị (ảnh hưởng đến hiệu suất).",
                    solid: "Rắn (Hiệu suất cao nhất)",
                    text: "Văn bản (Hiệu suất trung bình)",
                    emoji: "Hình ảnh (Hiệu suất thấp nhất)"
                },
                maxSize: {
                    label: "Kích thước tối đa",
                    description: "Kích thước bông tuyết tối đa"
                },
                speed: {
                    label: "Tốc độ",
                    description: "Tốc độ tuyết rơi (cao hơn = rơi nhanh hơn)"
                },
                flakesPerSecond: {
                    label: "Mảnh mỗi giây",
                    description: "Bông tuyết mỗi giây (cao hơn = tuyết rơi dày đặc hơn)"
                }
            }
        },
        sortFriendRequests: {
            name: "SortFriendRequests",
            description: "Sắp xếp lời mời kết bạn theo ngày nhận",
            tooltip: "Đã thêm — {{date}}",
            option: {
                showDates: {
                    label: "Hiển thị ngày",
                    description: "Hiển thị ngày trên yêu cầu kết bạn"
                }
            }
        },
        soundBoardLogger: {
            name: "SoundBoardLogger",
            description: "Ghi lại tất cả các soundboard được phát trong cuộc trò chuyện thoại và cho phép bạn tải chúng xuống",
            tooltip: "Mở nhật ký SoundBoard",
            option: {
                savedIds: {
                    label: "ID bảng âm thanh đã lưu",
                    description: "Số lượng ID soundboard bạn muốn lưu tại một thời điểm (0 cho phép bạn lưu vô hạn)",
                    notNumber: "Giá trị không phải là một con số.",
                    cantDecimal: "Giá trị không thể là số thập phân.",
                    cantNegative: "Giá trị không thể là số âm.",
                    heading: "Số lượng ID soundboard bạn muốn lưu tại một thời điểm (0 cho phép bạn lưu vô hạn)",
                    warning: "Cảnh báo! Đặt số thành giá trị thấp hơn sẽ đặt lại nhật ký!",
                    placeholder: "Nhập một số"
                },
                fileType: {
                    label: "Loại tệp",
                    description: "Định dạng mà bạn muốn lưu tệp của mình"
                },
                openLogs: {
                    label: "Nhật ký mở",
                    description: "Hiển thị nhật ký",
                    button: "Nhật ký mở"
                },
                soundVolume: {
                    label: "Âm lượng",
                    description: "Âm thanh chuyển đổi lớn đến mức nào (0 để tắt)"
                },
                iconLocation: {
                    label: "Vị trí biểu tượng",
                    description: "Chọn nơi hiển thị biểu tượng Nhật ký SoundBoard (yêu cầu khởi động lại)",
                    toolbar: "Thanh công cụ",
                    chatInput: "Đầu vào trò chuyện"
                }
            },
            modal: {
                title: "Nhật ký SoundBoard",
                loading: "Đang tải âm thanh...",
                noLogs: "Chưa có âm thanh nào được ghi lại. Tham gia trò chuyện thoại để bắt đầu đăng nhập!",
                clearLogs: "Xóa nhật ký",
                played: "Đã chơi {{time}} lần{{s}}",
                last: "Chơi lần cuối:",
                also: "Cũng đã chơi:",
                download: "Tải xuống",
                copyId: "Sao chép giấy tờ tùy thân",
                copied: "Đã sao chép ID vào clipboard!",
                playSound: "Phát âm thanh",
                moreUsers: "Những người khác đã sử dụng âm thanh này...",
                volume: "Âm lượng của soundboard"
            }
        },
        splitLargeMessages: {
            name: "SplitLargeMessages",
            description: "Chia các tin nhắn lớn thành nhiều phần để phù hợp với giới hạn tin nhắn của Discord.",
            option: {
                maxLength: {
                    label: "Độ dài tin nhắn tối đa",
                    description: "Độ dài tối đa của tin nhắn trước khi được chia nhỏ. Đặt thành 0 để tự động phát hiện."
                },
                disableFileConversion: {
                    label: "Tắt chuyển đổi tệp",
                    description: "Nếu đúng, hãy tắt tính năng chuyển đổi tệp đối với các thư lớn."
                },
                sendDelay: {
                    label: "Gửi trễ",
                    description: "Độ trễ giữa mỗi đoạn tính bằng giây."
                },
                hardSplit: {
                    label: "Chia cứng",
                    description: "Nếu đúng, phân tách ở ký tự cuối cùng thay vì dấu cách/dòng mới cuối cùng."
                },
                splitInSlowmode: {
                    label: "Chia ở chế độ chậm",
                    description: "Có nên chia nhỏ tin nhắn nếu kênh đã bật chế độ chậm không?"
                },
                slowmodeMax: {
                    label: "Chế độ chậm tối đa",
                    description: "Thời gian làm chậm tối đa nếu tách ở chế độ chậm."
                }
            }
        },
        spotifyActivityToggle: {
            name: "SpotifyActivityToggle",
            description: "Thêm nút chuyển đổi để hiển thị hoạt động Spotify.",
            tooltip: {
                enable: "Bật hoạt động Spotify",
                disable: "Tắt hoạt động Spotify"
            },
            option: {
                location: {
                    label: "Vị trí",
                    description: "Nơi hiển thị nút chuyển đổi Spotify",
                    panel: "Bên cạnh Tắt tiếng/Điếc",
                    toolbox: "Hộp công cụ Plexcord"
                },
                activityStatus: {
                    label: "Trạng thái hoạt động",
                    description: "Trạng thái hiện tại của hoạt động Spotify của bạn"
                }
            }
        },
        spotifyCrack: {
            name: "SpotifyCrack",
            description: "Nghe miễn phí, không tự động tạm dừng trong trò chuyện thoại và cho phép hoạt động tiếp tục phát khi không hoạt động",
            option: {
                noSpotifyAutoPause: {
                    label: "Không có tính năng Tự động tạm dừng Spotify",
                    description: "Tắt tính năng tự động tạm dừng của Spotify."
                },
                keepSpotifyActivityOnIdle: {
                    label: "Giữ hoạt động Spotify ở chế độ rảnh",
                    description: "Tiếp tục phát hoạt động Spotify khi không hoạt động"
                }
            }
        },
        spotifyShareCommands: {
            name: "SpotifyShareCommands",
            description: "Chia sẻ bản nhạc, album hoặc nghệ sĩ Spotify hiện tại của bạn thông qua lệnh gạch chéo (/track, /album, /artist)",
            command: {
                makeCommand: {
                    description: "Chia sẻ Spotify {{type}} hiện tại của bạn trong cuộc trò chuyện",
                    track: "Bạn hiện không nghe bất kỳ bản nhạc nào trên Spotify.",
                    find: "Không tìm thấy bản nhạc trên Spotify."
                }
            }
        },
        startupTimings: {
            name: "StartupTimings",
            description: "Thêm Thời gian khởi động vào menu Cài đặt",
            modal: {
                title: "Thời gian khởi động",
                ended: "Dấu vết kết thúc lúc:",
                start: "Bắt đầu",
                interval: "Khoảng thời gian",
                delta: "Đồng bằng",
                event: "Sự kiện",
                serverTrace: "Theo dõi máy chủ",
                loading: "Đang tải..."
            }
        },
        statusNotifications: {
            name: "StatusNotifications",
            description: "Thêm thông báo thay đổi trạng thái",
            loading: "Đang tải...",
            option: {
                notificationsSound: {
                    label: "Âm thanh thông báo",
                    description: "Phát âm thanh thông báo cho thông báo trạng thái?"
                },
                usersList: {
                    label: "Danh sách người dùng",
                    description: "Danh sách người dùng cần thông báo về việc thay đổi trạng thái",
                    empty: "Không có người dùng nào được theo dõi. Nhấp chuột phải vào người dùng và chọn 'Thông báo trạng thái' để thêm họ."
                }
            },
            context: {
                label: "Thông báo trạng thái",
                notifications: "Thông báo",
                type: {
                    all: "Tất cả",
                    online: "Trực tuyến",
                    offline: "Ngoại tuyến",
                    none: "Không có"
                }
            },
            notification: {
                unknownUser: "người dùng",
                title: "Thông báo trạng thái"
            },
            status: {
                online: "Trực tuyến",
                idle: "Nhàn rỗi",
                dnd: "Đừng làm phiền",
                offline: "Ngoại tuyến",
            },
        },
        statusPresets: {
            name: "StatusPresets",
            description: "Cho phép bạn ghi nhớ trạng thái của mình và đặt chúng sau",
            button: {
                remember: "Ghi nhớ trạng thái"
            },
            context: {
                edit: "Chỉnh sửa cài đặt trước tùy chỉnh",
                set: "Đặt trạng thái tùy chỉnh"
            },
            notification: {
                successfully: "Trạng thái đã lưu thành công"
            }
        },
        steamStatusSync: {
            name: "SteamStatusSync",
            description: "Đồng bộ trạng thái của bạn với Steam! (Trực tuyến, Đi, Ẩn hoặc Ngoại tuyến.)",
            option: {
                onlineStatus: {
                    label: "Trạng thái trực tuyến",
                    description: "Trạng thái Steam khi trực tuyến"
                },
                idleStatus: {
                    label: "Trạng thái nhàn rỗi",
                    description: "Trạng thái hơi nước khi không hoạt động"
                },
                dndStatus: {
                    label: "Trạng thái không làm phiền",
                    description: "Trạng thái Steam khi ở chế độ Không làm phiền"
                },
                invisibleStatus: {
                    label: "Trạng thái vô hình",
                    description: "Trạng thái Steam khi ở chế độ Vô hình"
                },
                goInvisibleIfActivityIsHidden: {
                    label: "Trở nên ẩn nếu hoạt động bị ẩn",
                    description: "Đặt trạng thái Steam thành Ẩn khi hoạt động Discord bị ẩn"
                }
            },
            status: {
                online: "Trực tuyến",
                away: "Xa",
                invisible: "Vô hình",
                offline: "Ngoại tuyến (Ngắt kết nối trò chuyện Steam)",
                disabled: "Tàn tật"
            }
        },
        stickerBlocker: {
            name: "StickerBlocker",
            description: "Cho phép bạn chặn hiển thị nhãn dán.",
            option: {
                showGif: {
                    label: "Hiển thị ảnh GIF",
                    description: "Có hiển thị ảnh GIF mèo hấp dẫn hay không."
                },
                showMessage: {
                    label: "Hiển thị tin nhắn",
                    description: "Có hiển thị thông báo nêu chi tiết ID nào đã bị chặn hay không"
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
            name: "StickerPaste",
            description: "Làm cho việc chọn nhãn dán trong bộ chọn nhãn dán chèn nhãn dán đó vào hộp trò chuyện thay vì gửi ngay lập tức"
        },
        streamerModeOnStream: {
            name: "StreamerModeOnStream",
            description: "Tự động bật Chế độ phát trực tuyến khi bạn bắt đầu phát trực tuyến trong Discord"
        },
        streamingCodecDisabler: {
            name: "StreamingCodecDisabler",
            description: "Vô hiệu hóa codec để phát trực tuyến theo lựa chọn của bạn",
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
            name: "SuperReactionTweaks",
            description: "Tùy chỉnh giới hạn Super Reactions phát cùng lúc và Super React theo mặc định",
            option: {
                superReactByDefault: {
                    label: "Siêu phản ứng theo mặc định",
                    description: "Bộ chọn phản ứng sẽ mặc định là Siêu phản ứng"
                },
                unlimitedSuperReactionPlaying: {
                    label: "Chơi siêu phản ứng không giới hạn",
                    description: "Loại bỏ giới hạn chơi Super Reactions cùng một lúc"
                },
                superReactionPlayingLimit: {
                    label: "Giới hạn chơi siêu phản ứng",
                    description: "Max Super Reactions để chơi cùng một lúc. Đặt thành 0 để tắt phát Super Reactions"
                }
            }
        },
        textReplace: {
            name: "TextReplace",
            description: "Thay thế văn bản trong tin nhắn của bạn. Bạn có thể tìm thấy các quy tắc được tạo sẵn trong kênh #textreplace-rules trong Máy chủ của Plexcord",
            option: {
                replace: {
                    label: "Thay thế",
                    string: "Thay thế đơn giản",
                    stringDescription: "Các quy tắc tìm và thay thế đơn giản. Ví dụ: tìm 'brb' và thay thế bằng 'be right back'",
                    regex: "Thay thế Regex",
                    regexDescription: "Các thay thế mạnh mẽ hơn باستخدام biểu thức chính quy. Phần này dành cho người dùng nâng cao. Nếu bạn không hiểu, hãy bỏ qua",
                    myMessages: "Áp dụng cho tin nhắn của bạn (hiển thị cho mọi người)",
                    othersMessages: "Áp dụng cho tin nhắn của người khác (chỉ hiển thị với bạn)",
                    allMessages: "Áp dụng cho tất cả tin nhắn"
                },
                stringRules: {
                    label: "Quy tắc chuỗi",
                    description: "Quy tắc thay thế văn bản bằng cách sử dụng kết hợp chuỗi."
                },
                regexRules: {
                    label: "Quy tắc Regex",
                    description: "Quy tắc thay thế văn bản bằng cách sử dụng biểu thức thông thường."
                }
            },
            modal: {
                title: "Quy tắc kiểm tra",
                find: "Tìm thấy",
                findRegex: "Mẫu regex",
                findText: "Văn bản cần thay thế",
                replace: "Thay thế",
                replaceDescription: "Văn bản sẽ thay thế văn bản đã tìm thấy",
                includes: "Chỉ nếu bao gồm",
                includesDescription: "Quy tắc này chỉ được áp dụng nếu tin nhắn chứa văn bản này. Đây là tùy chọn",
                type: "Nhập một tin nhắn",
                applied: "Tin nhắn đã áp dụng quy tắc",
                delete: "Xóa quy tắc",
                add: "Thêm quy tắc",
                empty: "Quy tắc trống",
                rule: "Quy tắc",
            }
        },
        themeAttributes: {
            name: "ThemeAttributes",
            description: "Thêm thuộc tính dữ liệu vào các thành phần khác nhau cho mục đích tạo chủ đề"
        },
        timezones: {
            name: "Timezones",
            description: "Hiển thị giờ địa phương của người dùng trong hồ sơ và tiêu đề thư",
            button: {
                wantToSave: "Bạn muốn lưu múi giờ của mình vào cơ sở dữ liệu? Nhấn vào đây để thiết lập nó.",
                yourLocalTimezone: "(Múi giờ địa phương của bạn)"
            },
            context: {
                set: "Đặt múi giờ địa phương"
            },
            toast: {
                refresh: {
                    successfully: "Đã làm mới múi giờ thành công!",
                    failed: "Múi giờ không thể làm mới!",
                    failedTo: "Không thể làm mới múi giờ."
                },
                update: {
                    successfully: "Múi giờ được cập nhật thành công!",
                    failed: "Không đặt được múi giờ."
                },
                delete: {
                    successfully: "Múi giờ đã được xóa thành công!",
                    failed: "Không xóa được múi giờ."
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
                    label: "Hiển thị múi giờ riêng",
                    description: "Hiển thị múi giờ của riêng bạn trong hồ sơ và tiêu đề thư"
                },
                twentyFourHourTime: {
                    label: "Thời gian 24 giờ",
                    description: "Hiển thị thời gian ở định dạng 24 giờ"
                },
                showTimezoneInfo: {
                    label: "Hiển thị thông tin múi giờ",
                    description: "Hiển thị thông tin múi giờ bên cạnh thời gian"
                },
                showMessageHeaderTime: {
                    label: "Hiển thị thời gian tiêu đề tin nhắn",
                    description: "Hiển thị thời gian trong tiêu đề tin nhắn"
                },
                showProfileTime: {
                    label: "Hiển thị thời gian hồ sơ",
                    description: "Hiển thị thời gian trong hồ sơ người dùng"
                },
                useDatabase: {
                    label: "Sử dụng múi giờ cơ sở dữ liệu",
                    description: "Kích hoạt cơ sở dữ liệu để nhận múi giờ của người dùng"
                },
                preferDatabaseOverLocal: {
                    label: "Thích cơ sở dữ liệu hơn cục bộ",
                    description: "Ưu tiên cơ sở dữ liệu hơn bộ nhớ cục bộ cho các múi giờ"
                },
                databaseUrl: {
                    label: "URL cơ sở dữ liệu",
                    description: "URL của máy chủ cơ sở dữ liệu múi giờ"
                },
                setDatabaseTimezone: {
                    label: "Đặt múi giờ cơ sở dữ liệu",
                    description: "Đặt múi giờ của bạn trên cơ sở dữ liệu",
                    setTimezone: "Đặt múi giờ trên cơ sở dữ liệu"
                },
                resetDatabaseTimezone: {
                    label: "Đặt lại múi giờ cơ sở dữ liệu",
                    description: "Đặt lại múi giờ của bạn trên cơ sở dữ liệu",
                    failed: "Không thể đặt lại múi giờ cơ sở dữ liệu"
                },
                askedTimezone: {
                    label: "Múi giờ được hỏi",
                    description: "Người dùng có được yêu cầu đặt múi giờ của họ hay không"
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
            name: "ToastNotifications",
            description: "Hiển thị thông báo chúc mừng bất cứ khi nào bạn nhận được tin nhắn trực tiếp.",
            notification: {
                call: "Đã bắt đầu cuộc gọi với bạn!",
                recipient: {
                    add: "{{target}} đã được thêm vào nhóm bởi {{actor}}.",
                    remove: "{{target}} đã bị {{actor}} xóa khỏi nhóm.",
                    left: "Đã rời nhóm."
                },
                channel: {
                    change: {
                        name: "Changed the channel name to {{name}}.",
                        icon: "Đã thay đổi biểu tượng kênh."
                    },
                    pinned: "Đã ghim một tin nhắn."
                },
                sent: {
                    embed: "Đã gửi một phần nhúng.",
                    sticker: "Đã gửi một nhãn dán.",
                    attachment: "Tệp đính kèm:"
                },
                redacted: "Nội dung tin nhắn đã được biên tập lại.",
                friend: {
                    accept: "{{user}} hiện là bạn của bạn",
                    acceptBody: "Bây giờ bạn có thể nhắn tin trực tiếp cho họ.",
                    request: "{{user}} đã gửi cho bạn lời mời kết bạn.",
                    requestBody: "Bạn có thể chấp nhận hoặc từ chối nó trong tab Bạn bè."
                },
                example: {
                    title: "Thông báo mẫu",
                    body: "Đây là một nội dung thông báo mẫu."
                }
            },
            modal: {
                dismiss: "Loại bỏ thông báo",
                attachments: "{{attachments}} tệp đính kèm{{s}} {{were}} đã gửi."
            },
            option: {
                position: {
                    label: "Chức vụ",
                    description: "Vị trí của thông báo bánh mì nướng",
                    topRight: "Trên cùng bên phải",
                    topLeft: "Trên cùng bên trái",
                    bottomRight: "Dưới cùng bên phải",
                    bottomLeft: "Dưới cùng bên trái"
                },
                timeout: {
                    label: "Hết giờ",
                    description: "Thông báo thời gian tính bằng giây sẽ được hiển thị cho"
                },
                opacity: {
                    label: "Độ mờ",
                    description: "Độ mờ của thông báo bánh mì nướng"
                },
                determineServerNotifications: {
                    label: "Xác định thông báo máy chủ",
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
                    label: "Thông báo về Bạn bè & Máy chủ",
                    description: "Hiển thị thông báo khi bạn bè gửi tin nhắn trong máy chủ họ chia sẻ với bạn"
                },
                friendActivity: {
                    label: "Hoạt động của bạn bè",
                    description: "Hiển thị thông báo để thêm ai đó hoặc nhận yêu cầu kết bạn"
                },
                notifyFor: {
                    label: "Thông báo cho",
                    description: "Tạo danh sách ID kênh để nhận thông báo (phân tách bằng dấu phẩy)"
                },
                ignoreUsers: {
                    label: "Bỏ qua người dùng",
                    description: "Tạo danh sách ID người dùng để bỏ qua tất cả các thông báo của họ (phân tách bằng dấu phẩy)"
                },
                exampleButton: {
                    label: "Nút ví dụ",
                    description: "Hiển thị một ví dụ về thông báo nâng ly chúc mừng.",
                    show: "Hiển thị thông báo mẫu"
                }
            }
        },
        toggleVideoBind: {
            name: "ToggleVideoBind",
            description: "Thêm liên kết có thể tùy chỉnh để chuyển đổi webcam.",
            option: {
                keyBind: {
                    label: "Liên kết phím",
                    description: "Phím chuyển đổi webcam khi nhấn."
                },
                reqCtrl: {
                    label: "Yêu cầu Ctrl",
                    description: "Yêu cầu phải giữ quyền Kiểm soát."
                },
                reqShift: {
                    label: "Yêu cầu Ca",
                    description: "Yêu cầu giữ phím Shift."
                },
                reqAlt: {
                    label: "Yêu cầu Alt",
                    description: "Yêu cầu giữ Alt."
                }
            }
        },
        translate: {
            name: "Translate",
            description: "Dịch tin nhắn bằng Google Translate hoặc DeepL",
            tooltip: {
                label: "Dịch"
            },
            context: {
                translate: "Dịch",
                open: "Mở phương thức dịch",
                auto: "Đã bật tính năng dịch tự động"
            },
            option: {
                receivedInput: {
                    label: "Đầu vào đã nhận",
                    description: "Ngôn ngữ nhận tin nhắn phải được dịch từ"
                },
                receivedOutput: {
                    label: "Đầu ra đã nhận",
                    description: "Ngôn ngữ nhận được tin nhắn phải được dịch sang"
                },
                sentInput: {
                    label: "Đã gửi đầu vào",
                    description: "Ngôn ngữ mà tin nhắn của bạn nên được dịch từ đó"
                },
                sentOutput: {
                    label: "Đầu ra đã gửi",
                    description: "Ngôn ngữ mà tin nhắn của bạn nên được dịch sang"
                },
                service: {
                    label: "Dịch vụ dịch thuật",
                    description: "DeepL yêu cầu khóa API trả phí từ DeepL Pro",
                    descriptionWeb: "Dịch vụ dịch thuật (Không được hỗ trợ trên Web!)",
                    google: "Google Dịch",
                    deepl: "DeepL miễn phí",
                    deeplPro: "DeepL Pro"
                },
                deeplApiKey: {
                    label: "Khóa API DeepL",
                    description: "Khóa API DeepL",
                    placeholder: "Nhận khóa API của bạn từ https://deepl.com/your-account"
                },
                autoTranslate: {
                    label: "Tự động dịch",
                    description: "Tự động dịch tin nhắn của bạn trước khi gửi. Bạn cũng có thể dịch chuyển/nhấp chuột phải vào nút dịch để chuyển đổi nút này"
                },
                showAutoTranslateTooltip: {
                    label: "Hiển thị chú giải công cụ dịch tự động",
                    description: "Hiển thị chú giải công cụ trên nút ChatBar bất cứ khi nào tin nhắn được dịch tự động"
                }
            },
            modal: {
                title: "Dịch",
                select: "Chọn một ngôn ngữ",
                auto: "Tự động dịch",
                dismiss: "Miễn nhiệm",
                translated: "được dịch từ {{from}}",
                failed: {
                    to: "Không dịch được {{text}}",
                    connect: "Không thể kết nối với API DeepL:"
                },
                wrong: "Đã xảy ra lỗi. Nếu sự cố này vẫn tiếp diễn, vui lòng kiểm tra bảng điều khiển hoặc yêu cầu trợ giúp từ máy chủ hỗ trợ.",
                deepl: {
                    api: "Đã vượt quá hạn ngạch API DeepL. Quay trở lại với Google Dịch.",
                    apiKey: "Khóa API DeepL chưa được đặt. Đặt lại vào Google",
                    auth: "Phiên bản hoặc khóa API DeepL không hợp lệ"
                },
                autoTranslateEnabled: {
                    title: "Đã bật dịch tự động Plexcord",
                    body: "Bạn vừa bật Tự động dịch! Mọi tin nhắn sẽ tự động được dịch trước khi gửi đi.",
                    confirm: "Tắt tính năng tự động dịch",
                    cancel: "Hiểu rồi",
                    secondaryConfirm: "Không hiển thị lại"
                }
            }
        },
        typingIndicator: {
            name: "TypingIndicator",
            description: "Thêm chỉ báo nếu ai đó đang gõ trên một kênh.",
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
                    label: "Chế độ chỉ báo",
                    description: "Chỉ báo nên được hiển thị như thế nào?",
                    both: "Hình đại diện và dấu chấm hoạt hình",
                    dots: "chấm hoạt hình",
                    avatars: "Hình đại diện"
                }
            }
        },
        typingTweaks: {
            name: "TypingTweaks",
            description: "Hiển thị hình đại diện và màu vai trò trong chỉ báo gõ",
            option: {
                showAvatars: {
                    label: "Hiển thị một số người dùng",
                    description: "Hiển thị hình đại diện trong chỉ báo gõ"
                },
                showRoleColors: {
                    label: "Hiển thị màu sắc vai trò",
                    description: "Hiển thị màu vai trò trong chỉ báo gõ"
                },
                alternativeFormatting: {
                    label: "Định dạng thay thế",
                    description: "Hiển thị thông báo hữu ích hơn khi có nhiều người dùng đang nhập"
                },
                amITyping: {
                    label: "Tôi đang gõ phím",
                    description: "Hiển thị cho bạn biết liệu người khác có thể thấy bạn đang gõ hay không"
                }
            },
            others: {
                areTyping: "và {{count}} những người khác đang gõ..."
            }
        },
        unindent: {
            name: "Unindent",
            description: "Cắt bớt phần thụt đầu dòng từ codeblocks"
        },
        unitConverter: {
            name: "UnitConverter",
            description: "Chuyển đổi đơn vị mét sang đơn vị Imperial và ngược lại",
            tooltip: "Chuyển đổi đơn vị",
            option: {
                myUnits: {
                    label: "Đơn vị của tôi",
                    description: "Đơn vị bạn sử dụng và muốn mọi thứ được chuyển đổi thành. Mặc định là Imperial",
                    imperial: "hoàng gia",
                    metric: "Số liệu"
                }
            },
            button: {
                dismiss: "Miễn nhiệm"
            }
        },
        unlimitedAccounts: {
            name: "UnlimitedAccounts",
            description: "Tăng số lượng tài khoản bạn có thể thêm.",
            option: {
                maxAccounts: {
                    label: "Tài khoản tối đa",
                    description: "Số lượng tài khoản có thể được thêm hoặc 0 không giới hạn"
                }
            }
        },
        unlockedAvatarZoom: {
            name: "UnlockedAvatarZoom",
            description: "Cho phép bạn phóng to hơn nữa trong công cụ cắt ảnh khi thay đổi hình đại diện",
            option: {
                zoomMultiplier: {
                    label: "Hệ số thu phóng",
                    description: "Hệ số thu phóng"
                }
            }
        },
        unsuppressEmbeds: {
            name: "UnsuppressEmbeds",
            description: "Cho phép bạn hủy chặn các nội dung nhúng trong tin nhắn",
            context: {
                unsuppress: "Bỏ chặn nhúng",
                suppress: "Ngăn chặn nhúng"
            }
        },
        uselessInfo: {
            name: "UselessInfo",
            description: "Hiển thị thông tin vô dụng ngẫu nhiên trong Discord; các phím tắt và khoảng cách có thể điều chỉnh được.",
            recording: "Đang ghi...",
            record: "Ghi",
            option: {
                delay: {
                    label: "Khoảng thời gian thông báo",
                    description: "Khoảng thời gian hiển thị thông báo tính bằng phút"
                },
                historyHotkey: {
                    label: "Phím tắt bảng lịch sử",
                    description: "Phím nóng để hiển thị lịch sử của các sự kiện được hiển thị trước đó"
                },
                randomFactHotkey: {
                    label: "Phím tắt thực tế ngẫu nhiên",
                    description: "Phím nóng để mở bảng thông tin ngẫu nhiên"
                },
                sameFact: {
                    label: "Tránh hiển thị các mục giống nhau",
                    description: "Tránh hiển thị cùng một thông tin nhiều lần cho đến khi tất cả thông tin đã được hiển thị"
                },
                lastNFacts: {
                    label: "Cần tránh bao nhiêu lần gần đây",
                    description: "Số sự kiện được hiển thị gần đây nhất để tránh lặp lại (0 = mọi lúc)"
                }
            },
            modal: {
                title: "Thông tin vô dụng",
                history: {
                    none: "Chưa có sự thật nào. Sử dụng phím tắt hoặc chờ đợi.",
                    source: "Nguồn"
                },
                showRandom: "Hiển thị ngẫu nhiên",
                close: "Đóng"
            },
            notification: {
                title: "Bạn có biết không?"
            }
        },
        userMessagesPronouns: {
            name: "UserMessagesPronouns",
            description: "Hiển thị đại từ người dùng trong tiêu đề thư",
            option: {
                pronounsFormat: {
                    label: "Định dạng đại từ",
                    description: "Định dạng đại từ xuất hiện trong trò chuyện",
                    lowercase: "Chữ thường",
                    capitalized: "Viết hoa"
                },
                showSelf: {
                    label: "thể hiện bản thân",
                    description: "Bật hoặc tắt hiển thị đại từ cho chính bạn"
                }
            }
        },
        userVoiceShow: {
            name: "UserVoiceShow",
            description: "Hiển thị chỉ báo khi người dùng đang ở Kênh Thoại",
            option: {
                showInUserProfileModal: {
                    label: "Hiển thị trong phương thức hồ sơ người dùng",
                    description: "Hiển thị chỉ báo Kênh Thoại của người dùng trong hồ sơ của họ bên cạnh tên"
                },
                showInMemberList: {
                    label: "Hiển thị trong danh sách thành viên",
                    description: "Hiển thị chỉ báo Kênh Thoại của người dùng trong danh sách thành viên và DM"
                },
                showInMessages: {
                    label: "Hiển thị trong tin nhắn",
                    description: "Hiển thị chỉ báo Kênh Thoại của người dùng trong tin nhắn"
                }
            },
            modal: {
                inVoiceChat: "Trong trò chuyện thoại"
            },
            notification: {
                cannotJoin: "Bạn không thể tham gia Kênh Thoại của người dùng."
            }
        },
        uSRBG: {
            name: "USRBG",
            description: "Hiển thị biểu ngữ người dùng từ USRBG, cho phép mọi người nhận biểu ngữ mà không cần Nitro",
            option: {
                nitroFirst: {
                    label: "Nitro đầu tiên",
                    description: "Biểu ngữ sẽ sử dụng nếu có cả biểu ngữ Nitro và USRBG",
                    nitro: "Biểu ngữ Nitro",
                    usrbg: "Biểu ngữ USRBG"
                },
                voiceBackground: {
                    label: "Nền giọng nói",
                    description: "Sử dụng biểu ngữ USRBG làm hình nền trò chuyện thoại"
                }
            },
            button: "Nhận biểu ngữ USRBG của riêng bạn"
        },
        validReply: {
            name: "ValidReply",
            description: "Sửa lỗi 'Không thể tải tin nhắn' khi di chuột qua câu trả lời"
        },
        validUser: {
            name: "ValidUser",
            description: "Sửa các đề cập cho những người dùng không xác định hiển thị dưới dạng '@unknown-user' (di chuột qua một đề cập để sửa nó)",
            badges: {
                discordBugHunter: "Thợ săn lỗi bất hòa",
                moderatorProgramsAlumni: "Cựu sinh viên chương trình điều hành",
                discordStaff: "Nhân viên bất hòa",
                hypeSquadEvents: "Sự kiện HypeSquad",
                bravery: "Sự dũng cảm của Biệt đội Hype",
                brilliance: "HypeSquad rực rỡ",
                balance: "Số dư đội hình cường điệu",
                partneredServerOwner: "Chủ sở hữu máy chủ hợp tác",
                nitro: "Bất hòa Nitro",
                earlySupporter: "Người ủng hộ sớm",
                earlyVerifiedBotDeveloper: "Nhà phát triển Bot đã được xác minh sớm"
            }
        },
        voiceChatDoubleClick: {
            name: "VoiceChatDoubleClick",
            description: "Tham gia trò chuyện thoại bằng cách nhấp đúp thay vì nhấp một lần"
        },
        vcNarrator: {
            name: "VCNarrator",
            description: "Thông báo khi người dùng tham gia, rời khỏi hoặc di chuyển các kênh thoại thông qua trình tường thuật",
            option: {
                voice: {
                    label: "Tiếng nói"
                },
                volume: {
                    label: "Âm lượng",
                    description: "Âm lượng của người kể chuyện"
                },
                rate: {
                    label: "Tỷ lệ",
                    description: "Tốc độ của người kể chuyện"
                },
                sayOwnName: {
                    label: "Nói tên riêng",
                    description: "Nói tên riêng"
                },
                latinOnly: {
                    label: "Chỉ tiếng Latinh",
                    description: "Loại bỏ các ký tự không phải tiếng Latinh khỏi tên trước khi nói chúng"
                },
                joinMessage: {
                    label: "Tham gia tin nhắn",
                    description: "Tham gia tin nhắn"
                },
                leaveMessage: {
                    label: "Để lại tin nhắn",
                    description: "Để lại tin nhắn"
                },
                moveMessage: {
                    label: "Di chuyển tin nhắn",
                    description: "Di chuyển tin nhắn"
                },
                muteMessage: {
                    label: "Tắt tin nhắn",
                    description: "Tắt tiếng tin nhắn (bây giờ chỉ có bản thân)"
                },
                unmuteMessage: {
                    label: "Bật tiếng tin nhắn",
                    description: "Bật tiếng tin nhắn (bây giờ chỉ có bản thân)"
                },
                deafenMessage: {
                    label: "Tin nhắn điếc tai",
                    description: "Tin nhắn điếc tai (hiện tại chỉ có bản thân)"
                },
                undeafenMessage: {
                    label: "Tin nhắn hủy điếc",
                    description: "Tin nhắn Undeafen (chỉ bản thân bây giờ)"
                }
            },
            modal: {
                title: "Chơi âm thanh mẫu",
                voiceTitle: "Tiếng nói",
                voice: "Chọn một giọng nói",
                languageTitle: "Ngôn ngữ",
                language: "Chọn một ngôn ngữ",
                noVoice: "Không tìm thấy giọng nói của người kể chuyện.",
                linuxNote: "Cài đặt bộ điều phối giọng nói hoặc đặc biệt và chạy Discord với cờ --enable-speech-dispatcher",
                someNarrator: "Hãy thử cài đặt một số trong cài đặt Trình tường thuật của Hệ điều hành của bạn",
                dontHaveEnglish: "Bạn chưa cài giọng tiếng Anh nên nghe có vẻ lạ",
                customiseMessages: "Bạn có thể tùy chỉnh các tin nhắn nói bên dưới. Bạn có thể tắt các tin nhắn cụ thể bằng cách đặt chúng thành không có gì",
                placeholdersInfo: "Các phần giữ chỗ đặc biệt {{USER}}, {{DISPLAY_NAME}}, {{NICKNAME}} và {{CHANNEL}} sẽ được thay thế bằng tên người dùng (không có gì nếu đó là chính bạn), tên hiển thị của người dùng, biệt hiệu của người dùng trên máy chủ hiện tại và tên kênh tương ứng"
            }
        },
        viewIcons: {
            name: "ViewIcons",
            description: "Làm cho hình đại diện và biểu ngữ trong hồ sơ người dùng có thể nhấp vào được, thêm các mục Xem hình đại diện/Biểu ngữ trong menu ngữ cảnh kênh người dùng, máy chủ và nhóm.",
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
                    description: "Chọn định dạng hình ảnh để sử dụng cho hình ảnh không hoạt hình. Hình ảnh động sẽ luôn sử dụng .gif"
                },
                imgSize: {
                    label: "Kích thước hình ảnh",
                    description: "Kích thước hình ảnh sử dụng"
                }
            }
        },
        viewRaw: {
            name: "ViewRaw",
            description: "Sao chép và xem nội dung/dữ liệu thô của bất kỳ tin nhắn, kênh hoặc bang hội nào",
            context: {
                copyLeft: "Sao chép thô (Click chuột trái) / Xem Raw (Click chuột phải)",
                copyRight: "Sao chép thô (Nhấp chuột phải) / Xem Nguyên (Nhấp chuột trái)",
                view: "Xem bản thô"
            },
            option: {
                popoverButton: {
                    label: "Nút bật lên",
                    description: "Hiển thị một nút trong cửa sổ bật lên của tin nhắn để xem nội dung/dữ liệu thô của tin nhắn."
                },
                clickMethod: {
                    label: "Bấm vào phương pháp",
                    description: "Thay đổi nút để xem nội dung/dữ liệu thô của bất kỳ tin nhắn nào.",
                    left: "Nhấp chuột trái để xem nội dung thô.",
                    right: "Nhấp chuột phải để xem nội dung thô."
                }
            },
            modal: {
                title: "Xem bản thô",
                content: "Nội dung",
                data: "{{type}} Dữ liệu",
                copied: "{{type}} dữ liệu đã được sao chép vào bảng nhớ tạm!",
                copy: "Sao chép {{type}} JSON",
                copiedContent: "Nội dung được sao chép vào clipboard!",
                copyContent: "Sao chép nội dung thô"
            },
            types: {
                message: "Tin nhắn",
                channel: "Kênh",
                guild: "bang hội",
                role: "Vai trò",
                user: "người dùng"
            }
        },
        voiceButtons: {
            name: "VoiceButtons",
            description: "Nhanh chóng DM, tắt tiếng hoặc làm điếc bất kỳ người dùng nào ngay từ bảng điều khiển cuộc gọi thoại.",
            option: {
                showChatButton: {
                    label: "Hiển thị nút trò chuyện",
                    description: "Bạn có muốn hiển thị nút trò chuyện hay không"
                },
                showMuteButton: {
                    label: "Hiển thị nút tắt tiếng",
                    description: "Cho dù bạn muốn hiển thị nút tắt tiếng"
                },
                showDeafenButton: {
                    label: "Hiển thị nút điếc",
                    description: "Cho dù bạn muốn hiển thị nút điếc"
                },
                muteSoundboard: {
                    label: "Tắt tiếng Soundboard",
                    description: "Chuyển đổi soundboard của họ khi nhấp vào nút Điếc."
                },
                disableVideo: {
                    label: "Tắt video",
                    description: "Chuyển đổi video của họ khi nhấp vào nút Điếc."
                },
                useServer: {
                    label: "Sử dụng máy chủ",
                    description: "Sử dụng máy chủ tắt tiếng/điếc thay vì cục bộ khi bạn được phép."
                },
                serverSelf: {
                    label: "Máy chủ tự",
                    description: "Điếc/Tắt tiếng trên máy chủ khi sử dụng tắt tiếng/điếc."
                },
                showButtonsSelf: {
                    label: "Hiển thị các nút trên chính nó",
                    description: "Cho dù bạn muốn hiển thị các nút cho người dùng của riêng bạn. Chức năng tương tự như (các) nút khác, ngoại trừ nó sẽ mở bảng DM và tự tắt tiếng/điếc khi nhấp vào (các) nút.",
                    display: "Trưng bày",
                    hide: "Trốn",
                    disable: "Vô hiệu hóa"
                },
                whichNameToShow: {
                    label: "Tên nào để hiển thị",
                    description: "Chọn hiển thị biệt hiệu hoặc tên người dùng trong chú giải công cụ.",
                    global: "Tên toàn cầu",
                    username: "Tên người dùng",
                    both: "Cả hai"
                },
                buttonPosition: {
                    label: "Vị trí nút",
                    description: "Chọn nơi các nút sẽ được hiển thị.",
                    left: "Bên trái",
                    right: "Phải",
                }
            },
            tooltip: {
                navigate: "Điều hướng đến DM",
                open: "Mở DM bằng {{username}}",
                yourself: "bản thân bạn",
                serverMute: "Tắt tiếng máy chủ",
                serverDeafen: "Máy chủ điếc",
                mute: "Tắt tiếng",
                deafen: "Điếc",
                unmute: "Bật tiếng",
                undeafen: "Undeafen",
                serverUnmute: "Bật tiếng máy chủ",
                serverUndeafen: "Máy chủ Undeafen"
            }
        },
        voiceChannelLog: {
            name: "VoiceChannelLog",
            description: "Nhật ký những người tham gia và rời khỏi kênh thoại",
            context: {
                view: "Xem nhật ký kênh"
            },
            modal: {
                joined: "Đã tham gia <#{{channel}}>",
                left: "Còn lại <#{{channel}}>",
                movedTo: "Đã chuyển đến <#{{channel}}>",
                movedFrom: "Đã chuyển từ <#{{channel}}>",
                noLogs: "Không có nhật ký để hiển thị.",
                logs: "{{channel}} nhật ký"
            },
            option: {
                mode: {
                    label: "Cách thức",
                    description: "Cách hiển thị nhật ký kênh thoại",
                    menu: "Trình đơn nhật ký",
                    associated: "Đăng nhập trực tiếp vào cuộc trò chuyện được liên kết",
                    both: "Đăng nhập vào menu trò chuyện và đăng nhập"
                },
                voiceChannelChatSelf: {
                    label: "Tự trò chuyện kênh thoại",
                    description: "Ghi lại các sự kiện kênh thoại của riêng bạn trong các kênh thoại"
                },
                voiceChannelChatSilent: {
                    label: "Trò chuyện kênh thoại Im lặng",
                    description: "Tham gia/rời khỏi/di chuyển tin nhắn trong các cuộc trò chuyện trên kênh thoại sẽ ở chế độ im lặng"
                },
                voiceChannelChatSilentSelf: {
                    label: "Trò chuyện kênh thoại Im lặng",
                    description: "Tham gia/rời khỏi/di chuyển tin nhắn trong cuộc trò chuyện trên kênh thoại sẽ ở chế độ im lặng nếu bạn đang ở trong kênh thoại"
                },
                ignoreBlockedUsers: {
                    label: "Bỏ qua người dùng bị chặn",
                    description: "Không đăng nhập người dùng bị chặn"
                }
            }
        },
        voiceChatUtilities: {
            name: "VoiceChatUtilities",
            description: "Plugin này cho phép bạn thực hiện nhiều hành động trên toàn bộ kênh (di chuyển, tắt tiếng, ngắt kết nối, v.v.) (ban đầu là dutake)",
            option: {
                waitAfter: {
                    label: "Chờ Sau Khi Hành Động",
                    description: "Số lượng hành động API cần thực hiện trước khi chờ đợi (để tránh giới hạn tốc độ)"
                },
                waitSeconds: {
                    label: "Đợi giây",
                    description: "Thời gian chờ giữa mỗi hành động (tính bằng giây)"
                }
            },
            context: {
                voiceTools: "Công cụ giọng nói",
                mentionAll: "Đề cập đến tất cả người dùng",
                disconnectAll: "Ngắt kết nối tất cả",
                muteAll: "Tắt tiếng tất cả",
                unmuteAll: "Bật tiếng tất cả",
                deafenAll: "Làm điếc tất cả",
                undeafenAll: "Tất cả",
                moveAll: "Di chuyển tất cả"
            }
        },
        voiceDownload: {
            name: "VoiceDownload",
            description: "Thêm phần tải xuống vào tin nhắn thoại. (Mở tab trình duyệt mới)",
            context: {
                download: "Tải xuống tin nhắn thoại"
            }
        },
        voiceMessages: {
            name: "VoiceMessages",
            description: "Cho phép bạn gửi tin nhắn thoại như trên điện thoại di động. Để làm như vậy, hãy nhấp chuột phải vào nút tải lên và nhấp vào Gửi tin nhắn thoại.",
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
                    upload: "Không thể tải lên tin nhắn thoại.",
                    start: "Không thể bắt đầu ghi.",
                    finish: "Không thể hoàn tất quá trình ghi."
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
                oggOpus: "Tin nhắn thoại phải là OggOpus để có thể phát trên iOS. Tệp này là {{type}} nên sẽ không thể phát được trên iOS.",
                fix: "Để khắc phục, trước tiên hãy chuyển đổi nó thành OggOpus, ví dụ như sử dụng {{link}}",
                sending: "Hiện đang gửi tin nhắn thoại... Xin hãy kiên nhẫn.",
                stop: "Dừng ghi",
                start: "Bắt đầu ghi",
                resume: "Tiếp tục ghi âm",
                pause: "Tạm dừng ghi",
                recording: "GHI ÂM",
                send: "Gửi",
            }
        },
        volumeBooster: {
            name: "VolumeBooster",
            description: "Cho phép bạn đặt người dùng và âm lượng luồng trên mức tối đa mặc định",
            option: {
                multiplier: {
                    label: "Số nhân",
                    description: "Hệ số nhân khối lượng"
                }
            }
        },
        wallpaperFree: {
            name: "WallpaperFree",
            description: "Giải trí thử nghiệm hình nền DM cũ; Đặt hình nền cho bất kỳ kênh, người dùng hoặc máy chủ nào.",
            option: {
                globalDefault: {
                    label: "Mặc định toàn cầu",
                    description: "Đặt hình nền mặc định chung cho tất cả các kênh."
                },
                stylingTips: {
                    label: "Mẹo tạo kiểu"
                }
            },
            context: {
                setWallpaper: "Đặt hình nền",
                removeWallpaper: "Xóa hình nền"
            },
            modal: {
                set: "Đặt hình nền",
                image: "URL hình ảnh",
                cancel: "Hủy bỏ",
                apply: "Áp dụng",
                global: {
                    set: "Đặt hình nền toàn cầu",
                    remove: "Xóa hình nền mặc định toàn cầu",
                    reset: "Đặt lại dữ liệu hình nền"
                },
                web: {
                    info: "Bạn có thể sử dụng các tệp cục bộ bằng cách đặt chúng trong thư mục chủ đề Plexcord và sử dụng URL plexcord:///themes/filename.ext",
                    open: "Mở thư mục chủ đề",
                    quickCSS: "Mở QuickCSS"
                }
            }
        },
        webContextMenus: {
            name: "WebContextMenus",
            description: "Thêm lại các menu ngữ cảnh bị thiếu trong phiên bản web của Discord: Liên kết & Hình ảnh (Sao chép/Mở liên kết/Hình ảnh), Vùng văn bản (Sao chép, Cắt, Dán, Kiểm tra chính tả)",
            option: {
                addBack: {
                    label: "Thêm trở lại",
                    description: "Thêm lại menu ngữ cảnh Discord cho hình ảnh, liên kết và thanh nhập trò chuyện"
                }
            }
        },
        webKeybinds: {
            name: "WebKeybinds",
            description: "Thêm lại các tổ hợp phím bị thiếu trong phiên bản web của Discord: Ctrl+T, Ctrl+Shift+T, Ctrl+Tab, Ctrl+Shift+Tab, Ctrl+1-9, Ctrl+,. Chỉ hoạt động hoàn toàn trên Plextron/Legcord, không hoạt động trong trình duyệt của bạn"
        },
        webScreenShareFixes: {
            name: "WebScreenShareFixes",
            description: "Loại bỏ giới hạn tốc độ bit 2500kbps trên máy khách Chrome và Plextron.",
            option: {
                experimentalAV1Support: {
                    label: "Hỗ trợ AV1 thử nghiệm",
                    description: "Kích hoạt hỗ trợ codec AV1. Có thể gây ra sự cố như tải luồng vô hạn"
                }
            }
        },
        whoReacted: {
            name: "WhoReacted",
            description: "Hiển thị hình đại diện của người dùng đã phản ứng với tin nhắn",
            option: {
                avatarClick: {
                    label: "Bấm vào hình đại diện",
                    description: "Chuyển đổi cách nhấp vào hình đại diện trong phản ứng"
                }
            }
        },
        whosWatching: {
            name: "WhosWatching",
            description: "Di chuột qua biểu tượng chia sẻ màn hình để xem nội dung người dùng đang xem luồng của bạn",
            modal: {
                noSpectator: "Không có khán giả"
            },
            option: {
                showPanel: {
                    label: "Hiển thị bảng điều khiển",
                    description: "Hiển thị người xem dưới bảng chia sẻ màn hình"
                }
            }
        },
        writeUpperCase: {
            name: "WriteUpperCase",
            description: "Thay đổi chữ cái đầu tiên của mỗi câu trong tin nhắn đầu vào thành chữ hoa",
            option: {
                blockedWords: {
                    label: "từ bị chặn",
                    description: "Các chuỗi không viết hoa (phân tách bằng dấu phẩy)"
                }
            }
        },
        xSOverlay: {
            name: "XSOverlay",
            description: "Chuyển tiếp thông báo Discord tới XSOverlay để dễ dàng xem trong VR",
            notification: {
                call: {
                    title: "{{user}} đang gọi cho bạn.",
                    content: "Cuộc gọi đến"
                },
                message: {
                    reply: "(hồi đáp)",
                    embed: "[nhúng]",
                    onlyEmbed: "(Các) tin nhắn đã gửi",
                    sticker: "[nhãn dán]",
                    onlySticker: "Đã gửi nhãn dán",
                    image: "hình ảnh",
                    attachment: "tập tin đính kèm"
                },
                test: {
                    title: "Xin chào từ Plexcord!",
                    content: "Đây là thông báo thử nghiệm! *Bùng nổ*",
                    button: "Gửi thông báo kiểm tra"
                }
            },
            option: {
                webSocketPort: {
                    label: "Cổng WebSocket",
                    description: "Cổng WebSocket"
                },
                preferUDP: {
                    label: "Ưu tiên UDP",
                    description: "Bật nếu bạn sử dụng bản dựng XSOverlay cũ hơn không thể kết nối thông qua WebSockets. Cài đặt này bị bỏ qua trên web."
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
                    description: "Cho phép thông báo bằng tin nhắn trực tiếp"
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
                    label: "Màu Ping",
                    description: "Người dùng đề cập đến màu sắc"
                },
                channelPingColor: {
                    label: "Màu Ping kênh",
                    description: "Màu đề cập kênh"
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
                    label: "Thời gian chờ dựa trên độ dài",
                    description: "Kéo dài thời lượng với độ dài tin nhắn"
                },
                opacity: {
                    label: "Độ mờ",
                    description: "Độ mờ thông báo"
                },
                volume: {
                    label: "Âm lượng",
                    description: "Âm lượng"
                }
            }
        },
        youtubeAdblock: {
            name: "YouTubeAdblock",
            description: "Chặn quảng cáo trong nội dung nhúng trên YouTube và hoạt động Xem cùng nhau qua AdGuard"
        },
        youtubeDescription: {
            name: "YouTubeDescription",
            description: "Thêm mô tả vào video nhúng trên YouTube"
        }
    }
} as const;

export default translations;
