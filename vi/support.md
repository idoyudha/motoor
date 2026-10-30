---
layout: page
title: Hỗ trợ
permalink: /vi/support/
ref: /support/
lang: vi
lede: "Giải đáp các câu hỏi thường gặp, và kênh liên hệ trực tiếp với người làm ra Motoor."
description: "Giải đáp các câu hỏi thường gặp, và kênh liên hệ trực tiếp với người làm ra Motoor."
---
{% assign dev = site.developer %}
{% assign t = site.data.i18n[page.lang] %}

<div class="mt-contact">
  <h2 class="mt-contact__title">Liên hệ</h2>
  <p style="margin:0">Gửi email đến <a href="mailto:{{ dev.email }}">{{ dev.email }}</a> và bạn sẽ nhận được phản hồi {{ t.ui.response_time }}. Sẽ rất hữu ích nếu bạn cho biết mẫu điện thoại, bạn dùng Android hay iOS, và phiên bản Motoor trong <strong>Cài đặt → Giới thiệu</strong>.</p>
  <a class="mt-btn mt-btn--filled mt-btn--small" href="mailto:{{ dev.email }}?subject=Motoor%20support">{% include icon.html name="mail" %}Gửi email hỗ trợ</a>
</div>

## Câu hỏi thường gặp

<details class="mt-faq">
<summary>Nhắc nhở không hiện trên điện thoại của tôi</summary>
<div>
<p>Hãy kiểm tra xem thông báo của Motoor đã được bật trong cài đặt điện thoại chưa. Trên Android, một số điện thoại còn dừng các ứng dụng chạy nền để tiết kiệm pin: mở <strong>Cài đặt → Ứng dụng → Motoor → Pin</strong> và chọn <strong>Không hạn chế</strong>. Nhắc nhở luôn hiển thị trong ứng dụng ở thẻ <strong>Nhắc nhở</strong>, kể cả khi thông báo bị tắt.</p>
</div>
</details>

<details class="mt-faq">
<summary>Motoor xác định khi nào đến hạn bảo dưỡng như thế nào?</summary>
<div>
<p>Khi bạn thêm xe, Motoor đề xuất lịch bảo dưỡng theo hãng, loại xe và hệ truyền động, với mỗi hạng mục đến hạn theo quãng đường hoặc theo ngày, tùy điều kiện nào đến trước. Mỗi hạng mục đều cho biết chu kỳ của nó lấy từ đâu. Ở gói nào bạn cũng có thể bỏ chọn những hạng mục không cần. Với Premium, bạn còn có thể đổi tên hạng mục, thay đổi chu kỳ và thêm hạng mục của riêng mình. Hãy cập nhật số odo thường xuyên bằng cách ghi nhiên liệu hoặc bảo dưỡng để nhắc nhở theo quãng đường luôn chính xác.</p>
</div>
</details>

<details class="mt-faq">
<summary>Tôi đã mua Premium nhưng chưa được mở khóa</summary>
<div>
<p>Mở <strong>Cài đặt → Premium → Khôi phục giao dịch mua</strong> khi đang đăng nhập bằng đúng tài khoản mà bạn đã dùng để mua. Nếu vẫn không được, hãy gửi email cho chúng tôi kèm mã đơn hàng trên biên lai Google Play hoặc App Store của bạn.</p>
</div>
</details>

<details class="mt-faq">
<summary>Làm sao để hủy Premium?</summary>
<div>
<p>Gói đăng ký do cửa hàng ứng dụng quản lý, không phải Motoor.</p>
<ul>
<li><strong>Android:</strong> mở Play Store, chạm vào ảnh hồ sơ, sau đó chọn <strong>Thanh toán và gói thuê bao → Gói thuê bao → Motoor → Hủy gói thuê bao</strong>.</li>
<li><strong>iOS:</strong> mở <strong>Cài đặt</strong>, chạm vào tên của bạn, sau đó chọn <strong>Đăng ký → Motoor → Hủy đăng ký</strong>.</li>
</ul>
<p>Khi kỳ thanh toán kết thúc, các giới hạn của gói Free sẽ áp dụng trở lại, nhưng không có gì bị xóa. Xe đầu tiên của bạn vẫn hoạt động (bạn có thể chọn xe khác), và các xe còn lại chuyển sang chế độ chỉ đọc cho đến khi bạn đăng ký lại. Mọi mục ghi và tệp đính kèm đều được giữ lại, trên điện thoại và trong bản sao lưu của bạn.</p>
</div>
</details>

<details class="mt-faq">
<summary>Tôi có được hoàn tiền không?</summary>
<div>
<p>Việc hoàn tiền do cửa hàng nơi bạn mua xử lý. Trên Android, hãy yêu cầu qua <a href="https://support.google.com/googleplay/answer/2479637">trang hoàn tiền của Google Play</a>. Trên iOS, hãy dùng <a href="https://reportaproblem.apple.com">reportaproblem.apple.com</a>.</p>
</div>
</details>

<details class="mt-faq">
<summary>Sổ theo dõi của tôi có được sao lưu không?</summary>
<div>
<p>Có, tự động, trên cả gói Free lẫn Premium. Xe, mục ghi, nhắc nhở, tệp đính kèm và hóa đơn của bạn được sao lưu lên máy chủ của chúng tôi mỗi khi bạn trực tuyến. Trên điện thoại mới, hãy đăng nhập bằng cùng tài khoản và sổ theo dõi của bạn sẽ trở lại. Đọc thêm trong <a href="{{ '/vi/privacy/' | relative_url }}">chính sách quyền riêng tư</a>.</p>
</div>
</details>

<details class="mt-faq">
<summary>Motoor có dùng được khi ngoại tuyến không?</summary>
<div>
<p>Có. Sổ theo dõi được lưu trên điện thoại, nên bạn có thể ghi nhiên liệu, bảo dưỡng và chi phí, xem lịch sử và nhận nhắc nhở mà không cần kết nối. Các thay đổi sẽ tự động được sao lưu khi bạn trực tuyến trở lại. Việc đăng nhập, quét hóa đơn, chia sẻ và chuyển nhượng xe cần có kết nối.</p>
</div>
</details>

<details class="mt-faq">
<summary>Tôi có ý tưởng hoặc phát hiện lỗi</summary>
<div>
<p>Vui lòng gửi email đến <a href="mailto:{{ dev.email }}">{{ dev.email }}</a>. Với lỗi, hãy cho biết bạn đã làm gì, bạn mong đợi điều gì và điều gì đã thực sự xảy ra. Một ảnh chụp màn hình sẽ giúp ích rất nhiều.</p>
</div>
</details>

## Xóa dữ liệu của bạn {#delete-your-data}

Xóa tài khoản sẽ xóa sổ theo dõi khỏi điện thoại của bạn và, sau {{ site.privacy.deletion_grace_days }} ngày, xóa vĩnh viễn khỏi máy chủ của chúng tôi. Có hai cách để thực hiện.

**Trong ứng dụng:** mở **Cài đặt → Hồ sơ → Xóa tài khoản** và xác nhận. Tài khoản của bạn bị khóa ngay lập tức và mọi liên kết chia sẻ sẽ ngừng hoạt động.

**Không cần ứng dụng:** gửi email đến [{{ dev.email }}](mailto:{{ dev.email }}?subject=Delete%20my%20account) với tiêu đề “Delete my account” (Xóa tài khoản của tôi), từ địa chỉ email bạn dùng để đăng nhập. Chúng tôi sẽ xác nhận qua email {{ t.ui.response_time }} và lên lịch xóa, sau đó quá trình diễn ra theo cùng cách như trên.

Những gì xảy ra tiếp theo:

1. **Trong {{ site.privacy.deletion_grace_days }} ngày, bạn có thể đổi ý.** Đăng nhập vào Motoor và chọn **Khôi phục**. Sổ theo dõi của bạn sẽ trở lại như cũ.
2. **Sau {{ site.privacy.deletion_grace_days }} ngày**, tài khoản, bản sao lưu sổ theo dõi, tệp đính kèm, hóa đơn và bản quét của bạn bị xóa vĩnh viễn, và tài khoản đăng nhập của bạn bị gỡ bỏ. Các bản sao trong hệ thống sao lưu khôi phục thảm họa của chúng tôi sẽ hết hạn trong vòng {{ site.privacy.backup_expiry_days }} ngày tiếp theo. Thao tác này không thể hoàn tác.
3. **Gói đăng ký của bạn không tự động bị hủy.** Hãy hủy gói trong Google Play hoặc App Store trước (xem ở trên).

Gỡ cài đặt Motoor chỉ xóa bản sao trên điện thoại của bạn. Bản sao lưu vẫn còn cho đến khi bạn xóa tài khoản.

Nếu bạn đã từng gửi email cho chúng tôi và muốn xóa các thư từ đó, hãy viết đến [{{ dev.email }}](mailto:{{ dev.email }}?subject=Delete%20my%20emails) với tiêu đề “Delete my emails” (Xóa email của tôi). Chúng tôi sẽ xóa trong vòng 30 ngày và xác nhận qua email.

Đọc thêm trong [chính sách quyền riêng tư]({{ '/vi/privacy/' | relative_url }}).
