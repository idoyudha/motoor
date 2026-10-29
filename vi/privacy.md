---
layout: page
title: Chính sách quyền riêng tư
permalink: /vi/privacy/
ref: /privacy/
lang: vi
privacy_date: true
lede: "Motoor thu thập những gì, dữ liệu được lưu ở đâu, ai khác xử lý dữ liệu và cách xóa dữ liệu."
description: "Motoor thu thập những gì, dữ liệu được lưu ở đâu, ai khác xử lý dữ liệu và cách xóa dữ liệu."
---
{% assign p = site.privacy %}
{% assign dev = site.developer %}
{% assign t = site.data.i18n[page.lang] %}
{% comment %}
  Before publishing: read this page end to end and check every statement is true
  for your build. The switches under `privacy:` in _config.yml fill in the details.
  This is a starting point, not legal advice.
{% endcomment %}

<p class="mt-doc__meta">Đây là bản dịch. Nếu có khác biệt so với <a href="{{ '/privacy/' | relative_url }}">bản tiếng Anh</a>, bản tiếng Anh sẽ được áp dụng.</p>

<div class="mt-note"><strong>Tóm tắt ngắn gọn.</strong> Bạn đăng nhập bằng Google hoặc Apple. Sổ theo dõi của bạn được lưu trên điện thoại và tự động sao lưu lên máy chủ của chúng tôi tại {{ t.privacy.data_location }}, để bạn có thể khôi phục trên điện thoại mới. Motoor không hiển thị quảng cáo và chúng tôi không bán dữ liệu của bạn. Bạn có thể xóa tài khoản cùng toàn bộ dữ liệu trong đó bất cứ lúc nào.</div>

## Chúng tôi là ai

Motoor là ứng dụng do **{{ dev.name }}**, một nhà phát triển độc lập (“chúng tôi”), tạo ra và phát hành. Chúng tôi chịu trách nhiệm về cách Motoor xử lý thông tin của bạn. Bạn có thể liên hệ với chúng tôi qua [{{ dev.email }}](mailto:{{ dev.email }}).

Chính sách này áp dụng cho ứng dụng Motoor trên Android và iOS, cho các trang chia sẻ do Motoor tạo ra, và cho trang web này.

## Chúng tôi thu thập những gì

**Tài khoản của bạn.** Để thêm xe, bạn đăng nhập bằng Google, hoặc bằng Apple trên iOS. Từ lần đăng nhập đó, chúng tôi nhận được tên, địa chỉ email và một ID tài khoản của bạn. Chúng tôi không bao giờ thấy mật khẩu Google hoặc Apple của bạn.

**Sổ theo dõi của bạn.** Mọi thứ bạn nhập vào Motoor:

- xe: hãng, mẫu xe, loại xe, tên, biển số đăng ký, năm, các chỉ số odo, ghi chú và ảnh
- các mục nhiên liệu và sạc điện, bảo dưỡng, chi phí, địa điểm và ghi chú
- nhắc nhở và lịch của chúng
- hóa đơn, bản quét và các tệp khác bạn đính kèm
- cài đặt của bạn, như đơn vị, tiền tệ, ngôn ngữ và chủ đề

**Thiết bị của bạn.** Mã thông báo thông báo đẩy (push token), để nhắc nhở và cảnh báo đến được điện thoại của bạn, và nền tảng (Android hoặc iOS).

**Giao dịch mua.** Việc bạn có gói đăng ký Premium đang hoạt động hay không, theo thông tin do Google Play hoặc App Store cung cấp.

{% if p.crash_reporting != "" %}**Báo cáo sự cố.** Thông tin kỹ thuật khi ứng dụng gặp sự cố (xem bên dưới).
{% endif %}
{% if p.analytics != "" %}**Thống kê sử dụng.** Những tính năng nào được sử dụng (xem bên dưới).
{% endif %}

**Email bạn gửi cho chúng tôi.** Địa chỉ của bạn và mọi nội dung bạn viết.

## Sổ theo dõi của bạn được lưu ở đâu

Sổ theo dõi của bạn được lưu trên điện thoại, trong bộ nhớ riêng của Motoor, nên ứng dụng vẫn hoạt động khi không có kết nối.

Sổ theo dõi cũng được **tự động sao lưu** lên máy chủ của chúng tôi trên Google Cloud tại **{{ t.privacy.data_location }}**. Điều này áp dụng cho mọi người dùng đã đăng nhập, cả gói Free lẫn Premium, và không có tùy chọn để tắt: bản sao lưu là cách Motoor khôi phục sổ theo dõi khi bạn đăng nhập trên điện thoại mới. Bản sao lưu bao gồm các mục ghi, tệp đính kèm và hóa đơn của bạn.

Dữ liệu được mã hóa khi truyền giữa điện thoại của bạn và máy chủ của chúng tôi, và được mã hóa khi lưu trữ trên Google Cloud. Chỉ bạn mới có thể đọc sổ theo dõi của mình thông qua ứng dụng. Chúng tôi chỉ truy cập dữ liệu đã lưu khi bạn yêu cầu chúng tôi hỗ trợ, hoặc khi chúng tôi cần khắc phục lỗi.

## Quét hóa đơn (Premium)

Khi bạn quét hóa đơn, Motoor đọc tổng tiền, ngày và địa điểm từ hóa đơn để bạn không phải gõ lại. Bạn xem lại từng trường trước khi bất cứ thứ gì được lưu. Số odo không bao giờ được đọc từ hóa đơn.

- **Trên điện thoại của bạn, khi có thể.** Nếu điện thoại của bạn có mô hình tích hợp có thể đọc hóa đơn, Motoor sẽ dùng mô hình đó và việc đọc diễn ra ngay trên thiết bị.
- **Nếu không, trên máy chủ của chúng tôi.** Ảnh hoặc tệp PDF được tải lên máy chủ của chúng tôi, máy chủ sẽ gửi nó đến **mô hình Gemini của Google trên Google Cloud**, tại {{ t.privacy.scan_location }}. Chúng tôi sử dụng dịch vụ trả phí của Google, với điều khoản không cho phép Google dùng dữ liệu này để huấn luyện mô hình của mình. Các trường đã trích xuất được gửi lại điện thoại của bạn.

Dù theo cách nào, bản quét cũng được lưu cùng mục ghi dưới dạng tệp đính kèm, và được sao lưu như phần còn lại của sổ theo dõi.

## Chia sẻ và chuyển nhượng xe (Premium)

**Chia sẻ lịch sử** tạo một liên kết và mã QR dẫn đến một trang web chỉ đọc, chứa các mục ghi, ngày, chỉ số odo và tổng số của xe. Trang này không hiển thị thông tin tài khoản. Bất kỳ ai có liên kết đều có thể mở trang cho đến khi liên kết hết hạn sau 24 giờ, hoặc cho đến khi bạn thu hồi.

**Chuyển quyền sở hữu** tạo một mã dùng một lần, hết hạn sau 24 giờ. Người dùng Premium đầu tiên mở mã sẽ nhận được xe cùng lịch sử và hóa đơn của xe, và bạn sẽ thấy tên của họ cũng như thời điểm họ nhận xe. Bản sao của bạn chuyển sang chế độ chỉ đọc.

{% if p.crash_reporting != "" %}
## Báo cáo sự cố

Nếu Motoor gặp sự cố, **{{ p.crash_reporting }}** sẽ gửi cho chúng tôi một báo cáo sự cố để chúng tôi khắc phục. Báo cáo chỉ chứa thông tin kỹ thuật: mẫu thiết bị, phiên bản hệ điều hành, phiên bản ứng dụng, thời điểm xảy ra sự cố và trạng thái mã nguồn lúc đó. Báo cáo không chứa xe, mục ghi hay ảnh của bạn.
{% endif %}

{% if p.analytics != "" %}
## Thống kê sử dụng

Motoor sử dụng **{{ p.analytics }}** để thống kê cách ứng dụng được sử dụng, ví dụ có bao nhiêu người hoàn tất việc thêm xe, ghi lần đổ nhiên liệu đầu tiên, hoặc mở màn hình Premium và chọn gói nào. Các thống kê này gắn với một ID phiên bản ứng dụng ngẫu nhiên, không gắn với tên hay email của bạn, và không chứa các mục ghi trong sổ theo dõi của bạn.
{% endif %}

## Giao dịch mua

Nếu bạn mua Premium, việc thanh toán do **Google Play** hoặc **Apple App Store** xử lý hoàn toàn. Chúng tôi không bao giờ thấy thông tin thẻ hay thanh toán của bạn. Cửa hàng chỉ cho chúng tôi biết bạn có giao dịch mua đang hoạt động hay không, để Premium có thể được mở khóa và khôi phục trên các thiết bị khác của bạn.

## Ai khác xử lý dữ liệu của bạn

Chúng tôi không bán thông tin cá nhân của bạn và không chia sẻ thông tin đó cho mục đích quảng cáo. Các nhà cung cấp sau xử lý dữ liệu thay mặt chúng tôi, chỉ để vận hành Motoor:

| Nhà cung cấp | Chức năng | Dữ liệu xử lý |
|---|---|---|
| Google Cloud | Lưu trữ máy chủ, cơ sở dữ liệu và tệp của chúng tôi tại {{ t.privacy.data_location }} | Tài khoản và bản sao lưu sổ theo dõi của bạn |
| Google Cloud (Gemini) | Đọc những hóa đơn không đọc được trên điện thoại của bạn | Hóa đơn bạn quét |
| Firebase Authentication (Google) | Đăng nhập bằng Google hoặc Apple | Tên, email, ID tài khoản |
| Firebase Cloud Messaging (Google) | Gửi thông báo đẩy | Mã thông báo đẩy của thiết bị |
{% if p.crash_reporting != "" %}| {{ p.crash_reporting }} (Google) | Báo cáo sự cố | Thông tin kỹ thuật về sự cố |
{% endif %}{% if p.analytics != "" %}| {{ p.analytics }} (Google) | Thống kê sử dụng | ID phiên bản ứng dụng và sự kiện tính năng |
{% endif %}| Google Play, Apple App Store | Gói đăng ký và thanh toán | Trạng thái giao dịch mua |

Các dịch vụ Firebase do Google vận hành và có thể xử lý dữ liệu bên ngoài Indonesia. Tỷ giá dùng để quy đổi tiền tệ lấy từ máy chủ của chính chúng tôi; việc lấy tỷ giá không gửi đi bất kỳ thông tin nào về bạn.

## Các quyền mà Motoor yêu cầu

| Quyền | Lý do | Nếu bạn từ chối |
|---|---|---|
| Thông báo | Để nhắc bạn khi đến hạn bảo dưỡng | Nhắc nhở vẫn hiển thị trong ứng dụng |
| Máy ảnh | Để chụp ảnh hóa đơn và xe | Bạn có thể chọn ảnh hoặc tệp có sẵn |
| Ảnh và tệp | Để đính kèm ảnh hoặc PDF bạn đã có | Bạn có thể dùng máy ảnh thay thế |

Motoor không yêu cầu quyền truy cập vị trí, danh bạ, micrô hay nhật ký cuộc gọi của bạn. Nếu bạn bật khóa sinh trắc học, vân tay hoặc khuôn mặt của bạn được điện thoại kiểm tra; Motoor không bao giờ nhận được dữ liệu đó.

## Cách chúng tôi sử dụng thông tin

Chúng tôi chỉ sử dụng thông tin của bạn để:

- lưu sổ theo dõi trên điện thoại của bạn và sao lưu, để bạn có thể khôi phục
- gửi nhắc nhở và cảnh báo
- đọc hóa đơn bạn quét
- tạo các trang chia sẻ và chuyển nhượng mà bạn yêu cầu
- mở khóa và khôi phục Premium
{% if p.crash_reporting != "" or p.analytics != "" %}- tìm và sửa lỗi, cải thiện ứng dụng
{% endif %}- trả lời các yêu cầu hỗ trợ của bạn

## Lựa chọn và quyền của bạn

Theo Luật Bảo vệ Dữ liệu Cá nhân của Indonesia (Luật số 27 năm 2022) và các luật tương tự tại nơi bạn sinh sống, bạn có quyền truy cập dữ liệu cá nhân của mình, chỉnh sửa, yêu cầu xóa và rút lại sự đồng ý. Trong Motoor:

- **Truy cập và sao chép:** xuất sổ theo dõi dưới dạng CSV, hoặc lịch sử bảo dưỡng dạng PDF kèm hóa đơn, từ **Cài đặt → Xuất và sao lưu**.
- **Chỉnh sửa:** sửa bất kỳ xe, mục ghi hay nhắc nhở nào trong ứng dụng, và sửa tên của bạn trong **Cài đặt → Hồ sơ**.
- **Xóa:** xóa từng mục ghi trong ứng dụng, hoặc xóa toàn bộ tài khoản (xem bên dưới).

Với mọi yêu cầu khác, hãy gửi email đến [{{ dev.email }}](mailto:{{ dev.email }}).

## Xóa tài khoản

Mở **Cài đặt → Hồ sơ → Xóa tài khoản** và xác nhận. Nếu bạn không còn ứng dụng, bạn có thể gửi yêu cầu cho chúng tôi qua email; xem [trang hỗ trợ]({{ '/vi/support/#delete-your-data' | relative_url }}).

- Tài khoản của bạn **bị khóa ngay lập tức**, và mọi liên kết chia sẻ cũng như các yêu cầu chuyển nhượng đang mở sẽ ngừng hoạt động.
- Trong **{{ p.deletion_grace_days }} ngày**, bạn có thể đổi ý: đăng nhập lại và chọn **Khôi phục**.
- Sau {{ p.deletion_grace_days }} ngày, tài khoản, bản sao lưu sổ theo dõi, tệp đính kèm, hóa đơn và bản quét của bạn sẽ **bị xóa vĩnh viễn** khỏi máy chủ của chúng tôi, và tài khoản đăng nhập của bạn sẽ bị gỡ bỏ. Các bản sao trong hệ thống sao lưu khôi phục thảm họa của chúng tôi sẽ hết hạn trong vòng {{ p.backup_expiry_days }} ngày tiếp theo.
- Việc xóa tài khoản không hủy gói đăng ký của bạn. Hãy hủy gói trong Google Play hoặc App Store, nơi lưu giữ hồ sơ giao dịch mua riêng của họ.

Xóa ứng dụng khỏi điện thoại chỉ xóa bản sao trên điện thoại đó. Bản sao lưu của bạn vẫn còn cho đến khi bạn xóa tài khoản.

## Chúng tôi lưu giữ thông tin trong bao lâu

| Thông tin | Thời gian lưu giữ |
|---|---|
| Tài khoản và bản sao lưu sổ theo dõi của bạn | Cho đến khi bạn xóa tài khoản, sau đó thêm {{ p.deletion_grace_days }} ngày, rồi bị xóa (các bản sao lưu hết hạn sau đó {{ p.backup_expiry_days }} ngày) |
| Một mục ghi, xe hoặc ảnh mà bạn xóa | Bị xóa khỏi thiết bị của bạn ngay lập tức và khỏi máy chủ của chúng tôi trong vòng 90 ngày |
| Liên kết chia sẻ và chuyển nhượng | Cho đến khi hết hạn sau 24 giờ hoặc bị thu hồi, sau đó được lưu làm hồ sơ cho đến khi tài khoản của bạn bị xóa |
{% if p.crash_reporting != "" %}| Báo cáo sự cố | Tối đa 90 ngày |
{% endif %}{% if p.analytics != "" %}| Thống kê sử dụng | {{ t.privacy.analytics_retention }} |
{% endif %}| Email hỗ trợ | 12 tháng sau tin nhắn cuối cùng |

## Bảo mật

Sổ theo dõi trên điện thoại được lưu trong bộ nhớ riêng của Motoor, nơi các ứng dụng khác không đọc được, và bạn có thể thêm khóa sinh trắc học. Mọi dữ liệu Motoor gửi qua internet đều được mã hóa. Liên kết chia sẻ và chuyển nhượng dùng các mã ngẫu nhiên dài không thể đoán được, và chúng tôi chỉ lưu dấu vân tay số (fingerprint) của mỗi mã. Hãy khóa điện thoại bằng mã PIN, vân tay hoặc mở khóa bằng khuôn mặt để bảo vệ dữ liệu trên máy.

## Trẻ em

Motoor dành cho những người sở hữu hoặc chăm sóc xe, và không hướng đến trẻ em dưới {{ p.min_age }} tuổi. Chúng tôi không cố ý thu thập thông tin cá nhân từ trẻ em. Nếu bạn cho rằng một trẻ em đã cung cấp thông tin cho chúng tôi, hãy gửi email cho chúng tôi và chúng tôi sẽ xóa thông tin đó.

## Thay đổi đối với chính sách này

Nếu chúng tôi thay đổi chính sách này, chúng tôi sẽ cập nhật ngày ở đầu trang. Nếu một thay đổi ảnh hưởng đến những gì chúng tôi thu thập hoặc ai xử lý dữ liệu, Motoor cũng sẽ thông báo cho bạn trong ứng dụng trước khi thay đổi có hiệu lực.

## Liên hệ

Mọi câu hỏi về quyền riêng tư xin gửi đến **{{ dev.name }}** qua [{{ dev.email }}](mailto:{{ dev.email }}). Chúng tôi phản hồi {{ t.ui.response_time }}.
