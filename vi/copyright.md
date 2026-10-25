---
layout: page
title: Bản quyền
eyebrow: Pháp lý
permalink: /vi/copyright/
ref: /copyright/
lang: vi
updated: 2026-10-25
lede: "Ai sở hữu Motoor, các nhãn hiệu được nhắc đến và phần mềm mã nguồn mở được dùng để xây dựng nó."
description: "Ai sở hữu Motoor, các nhãn hiệu được nhắc đến và phần mềm mã nguồn mở được dùng để xây dựng nó."
---
{% assign dev = site.developer %}
{% assign t = site.data.i18n[page.lang] %}

<p class="mt-doc__meta">Đây là bản dịch. Nếu có khác biệt so với <a href="{{ '/copyright/' | relative_url }}">bản tiếng Anh</a>, bản tiếng Anh sẽ được áp dụng.</p>

## Thông báo bản quyền

© 2026 {{ dev.name }}. Mọi quyền được bảo lưu.

Ứng dụng Motoor, tên và logo Motoor, cùng nội dung của trang web này thuộc sở hữu của {{ dev.name }}. Bạn không được sao chép, sửa đổi hoặc phân phối chúng khi chưa được phép, trừ khi pháp luật cho phép. Nội dung sổ ghi chép của riêng bạn thuộc về bạn.

## Nhãn hiệu

Google Play là nhãn hiệu của Google LLC. App Store là nhãn hiệu dịch vụ của Apple Inc.

Các hãng xe và tên mẫu xe hiển thị trong Motoor thuộc về chủ sở hữu của chúng. Chúng chỉ được dùng để nhận diện phương tiện, và không ngụ ý bất kỳ sự bảo trợ hay liên kết nào.

## Phần mềm mã nguồn mở

Motoor được xây dựng bằng phần mềm mã nguồn mở. Chúng tôi biết ơn những người tạo ra chúng.

| Thành phần | Giấy phép |
|---|---|
| Phông chữ Figtree | [SIL Open Font License 1.1]({{ '/assets/fonts/OFL.txt' | relative_url }}) |
| Kotlin và Kotlin Coroutines | Apache License 2.0 |
| Android Jetpack: Compose, Navigation, Room, WorkManager, Biometric | Apache License 2.0 |
| Hilt và Dagger | Apache License 2.0 |
| OkHttp và Retrofit | Apache License 2.0 |
| Kotlinx Serialization | Apache License 2.0 |
| Firebase SDK | Apache License 2.0 |
| Jekyll (trang web này) | MIT License |

Danh sách đầy đủ, kèm văn bản giấy phép, có trong ứng dụng. Mỗi thành phần được sử dụng theo giấy phép riêng của nó, và văn bản giấy phép đó áp dụng cho thành phần ấy.

## Báo cáo vi phạm

Nếu bạn cho rằng nội dung nào đó trong Motoor hoặc trên trang web này vi phạm bản quyền hay nhãn hiệu của bạn, hãy gửi email tới [{{ dev.email }}](mailto:{{ dev.email }}) kèm mô tả tác phẩm, nơi nó xuất hiện và cách liên hệ với bạn. Chúng tôi phản hồi {{ t.ui.response_time }}.
