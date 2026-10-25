---
layout: page
title: Giới thiệu Motoor
eyebrow: Giới thiệu
permalink: /vi/about/
ref: /about/
lang: vi
lede: "Một cuốn sổ ghi chép nhẹ nhàng cho mọi phương tiện bạn sở hữu."
description: "Motoor lưu hồ sơ nhiên liệu, bảo dưỡng và chi phí của các phương tiện ở một nơi, và nhắc bạn trước khi đến hạn bảo dưỡng."
---
{% assign dev = site.developer %}
{% assign t = site.data.i18n[page.lang] %}
{% assign lp = '' %}{% if page.lang != 'en' %}{% assign lp = '/' | append: page.lang %}{% endif %}

Motoor lưu hồ sơ nhiên liệu, bảo dưỡng và chi phí cho ô tô, xe máy, xe đạp và xe điện của bạn ở một nơi, và nhắc bạn trước khi đến hạn bảo dưỡng.

## Motoor hoạt động thế nào

- **Đăng ký một phương tiện trong khoảng một phút.** Chọn hãng, loại xe và hệ truyền động, Motoor sẽ đề xuất lịch bảo dưỡng cho xe.
- **Ghi nhiên liệu hoặc sạc, bảo dưỡng và chi phí** chỉ với vài lần chạm. Motoor tính mức tiêu hao và chi phí thực của từng xe.
- **Nhận lời nhắc theo quãng đường hoặc thời gian**, tùy điều kiện nào đến trước, để bạn biết việc gì đã quá hạn, việc gì sắp đến hạn và việc gì có thể đợi.

## Điều chúng tôi tin

**Dữ liệu của bạn không bao giờ bị giữ làm con tin.** Ghi chép, lịch sử và xuất dữ liệu đều đầy đủ ở gói Free. Sổ ghi chép là của bạn, và bạn có thể mang nó đi bất cứ lúc nào.

**Không có gì được tạo ra khi chưa có xác nhận của bạn.** Motoor gợi ý, bạn quyết định. Lịch được đề xuất hay hóa đơn đã quét chỉ được lưu khi bạn xác nhận.

**Mỗi chu kỳ đều nói rõ nguồn gốc.** Sổ bảo dưỡng, thông lệ của xưởng, hoặc chính bạn. Bạn luôn thấy được vì sao một lời nhắc đến hạn.

**Ưu tiên lưu trên máy.** Motoor hoạt động ngoại tuyến, sổ ghi chép nằm trên điện thoại và được sao lưu tự động, để điện thoại mới tiếp tục từ chỗ điện thoại cũ dừng lại.

## Ai làm ra Motoor

Motoor là ứng dụng độc lập do **{{ dev.name }}** phát triển tại Indonesia. Không quảng cáo, và dữ liệu của bạn không bao giờ bị bán.

## Liên hệ

Câu hỏi, ý tưởng và báo lỗi được gửi thẳng đến người làm ra Motoor: gửi email tới [{{ dev.email }}](mailto:{{ dev.email }}) và bạn sẽ nhận được phản hồi {{ t.ui.response_time }}. Câu trả lời cho các câu hỏi thường gặp có trên [trang hỗ trợ]({{ lp | append: '/support/' | relative_url }}).
