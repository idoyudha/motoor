---
layout: page
title: 지원
permalink: /ko/support/
ref: /support/
lang: ko
lede: 자주 묻는 질문에 대한 답변과 Motoor 개발자에게 직접 연락할 수 있는 창구입니다.
description: 자주 묻는 질문에 대한 답변과 Motoor 개발자에게 직접 연락할 수 있는 창구입니다.
---
{% assign dev = site.developer %}
{% assign t = site.data.i18n[page.lang] %}

<div class="mt-contact">
  <h2 class="mt-contact__title">문의하기</h2>
  <p style="margin:0"><a href="mailto:{{ dev.email }}">{{ dev.email }}</a>으로 이메일을 보내 주시면 {{ t.ui.response_time }} 답변을 받으실 수 있습니다. 휴대폰 기종, Android와 iOS 중 어느 것을 사용하시는지, 그리고 <strong>설정 → 정보</strong>에 표시된 Motoor 버전을 함께 알려 주시면 도움이 됩니다.</p>
  <a class="mt-btn mt-btn--filled mt-btn--small" href="mailto:{{ dev.email }}?subject=Motoor%20support">{% include icon.html name="mail" %}이메일로 지원 요청</a>
</div>

## 자주 묻는 질문

<details class="mt-faq">
<summary>휴대폰에 알림이 표시되지 않아요</summary>
<div>
<p>휴대폰 설정에서 Motoor 알림이 켜져 있는지 확인하세요. Android의 경우 일부 휴대폰은 배터리를 절약하기 위해 백그라운드에서 실행 중인 앱을 중지하기도 합니다. <strong>설정 → 애플리케이션 → Motoor → 배터리</strong>를 열고 <strong>제한 없음</strong>을 선택하세요. 알림이 꺼져 있어도 앱 안의 <strong>알림</strong> 탭에는 항상 알림이 표시됩니다.</p>
</div>
</details>

<details class="mt-faq">
<summary>Motoor는 정비 시기를 어떻게 정하나요?</summary>
<div>
<p>차량을 추가하면 Motoor가 제조사, 차종, 파워트레인에 맞는 정비 일정을 제안하며, 각 항목은 주행 거리나 날짜 중 먼저 도래하는 기준에 따라 기한이 정해집니다. 각 항목에는 주기의 출처가 표시됩니다. 어떤 요금제에서든 필요 없는 항목은 선택을 해제할 수 있습니다. Premium에서는 항목 이름을 바꾸고, 주기를 변경하고, 나만의 항목을 추가할 수도 있습니다. 주행 거리 기준 알림이 정확하도록 주유나 정비를 기록해 주행 거리를 최신 상태로 유지하세요.</p>
</div>
</details>

<details class="mt-faq">
<summary>Premium을 구매했는데 활성화되지 않아요</summary>
<div>
<p>구매할 때 사용한 것과 같은 Google 또는 Apple 계정으로 로그인한 상태에서 <strong>설정 → Premium → 구매 복원</strong>을 여세요. 그래도 해결되지 않으면 Google Play 또는 App Store 영수증에 있는 주문 번호를 이메일로 보내 주세요.</p>
</div>
</details>

<details class="mt-faq">
<summary>Premium은 어떻게 해지하나요?</summary>
<div>
<p>구독은 Motoor가 아닌 스토어에서 관리합니다.</p>
<ul>
<li><strong>Android:</strong> Play 스토어를 열고 프로필 사진을 탭한 다음 <strong>결제 및 정기 결제 → 정기 결제 → Motoor → 정기 결제 취소</strong>를 선택하세요.</li>
<li><strong>iOS:</strong> <strong>설정</strong>을 열고 이름을 탭한 다음 <strong>구독 → Motoor → 구독 취소</strong>를 선택하세요.</li>
</ul>
<p>결제 기간이 끝나면 Free 제한이 다시 적용되지만 아무것도 삭제되지 않습니다. 첫 번째 차량은 계속 활성 상태로 유지되며(다른 차량을 선택할 수도 있습니다), 나머지 차량은 다시 구독할 때까지 읽기 전용이 됩니다. 모든 기록과 첨부 파일은 휴대폰과 백업에 그대로 보관됩니다.</p>
</div>
</details>

<details class="mt-faq">
<summary>환불받을 수 있나요?</summary>
<div>
<p>환불은 구매한 스토어에서 처리합니다. Android에서는 <a href="https://support.google.com/googleplay/answer/2479637">Google Play 환불 페이지</a>를 통해 요청하세요. iOS에서는 <a href="https://reportaproblem.apple.com">reportaproblem.apple.com</a>을 이용하세요.</p>
</div>
</details>

<details class="mt-faq">
<summary>로그북이 백업되나요?</summary>
<div>
<p>네, Free와 Premium 모두 자동으로 백업됩니다. 온라인 상태일 때마다 차량, 기록, 알림, 첨부 파일, 영수증이 저희 서버에 백업됩니다. 새 휴대폰에서 같은 Google 또는 Apple 계정으로 로그인하면 로그북이 그대로 돌아옵니다. 자세한 내용은 <a href="{{ '/ko/privacy/' | relative_url }}">개인정보처리방침</a>을 참조하세요.</p>
</div>
</details>

<details class="mt-faq">
<summary>Motoor는 오프라인에서도 작동하나요?</summary>
<div>
<p>네. 로그북은 휴대폰에 저장되므로 인터넷 연결 없이도 주유, 정비, 비용을 기록하고, 기록을 확인하고, 알림을 받을 수 있습니다. 다시 온라인 상태가 되면 변경 사항이 자동으로 백업됩니다. 로그인, 영수증 스캔, 차량 공유 및 이전에는 인터넷 연결이 필요합니다.</p>
</div>
</details>

<details class="mt-faq">
<summary>아이디어가 있거나 버그를 발견했어요</summary>
<div>
<p><a href="mailto:{{ dev.email }}">{{ dev.email }}</a>으로 이메일을 보내 주세요. 버그의 경우 어떤 작업을 했는지, 어떤 결과를 기대했는지, 실제로 어떤 일이 일어났는지 알려 주세요. 스크린샷이 있으면 큰 도움이 됩니다.</p>
</div>
</details>

## 데이터 삭제 {#delete-your-data}

계정을 삭제하면 로그북이 휴대폰에서 삭제되고, {{ site.privacy.deletion_grace_days }}일 후에는 저희 서버에서도 영구적으로 삭제됩니다. 삭제 방법은 두 가지입니다.

**앱에서:** **설정 → 프로필 → 계정 삭제**를 열고 확인합니다. 계정은 즉시 잠기며 모든 공유 링크가 작동을 멈춥니다.

**앱 없이:** 로그인에 사용하는 이메일 주소로 [{{ dev.email }}](mailto:{{ dev.email }}?subject=Delete%20my%20account)에 제목을 “Delete my account”(계정 삭제)로 하여 이메일을 보내 주세요. 저희가 {{ t.ui.response_time }} 이메일로 확인해 드리고 삭제 일정을 잡으며, 이후 과정은 앱에서 삭제할 때와 동일합니다.

이후 진행 과정:

1. **{{ site.privacy.deletion_grace_days }}일 동안은 마음을 바꿀 수 있습니다.** Motoor에 로그인하여 **복원**을 선택하세요. 로그북이 원래 상태로 돌아옵니다.
2. **{{ site.privacy.deletion_grace_days }}일이 지나면** 계정, 로그북 백업, 첨부 파일, 영수증 및 스캔본이 영구적으로 삭제되며, 로그인 계정도 삭제됩니다. 재해 복구용 백업에 있는 사본은 그로부터 {{ site.privacy.backup_expiry_days }}일 이내에 만료됩니다. 이 작업은 되돌릴 수 없습니다.
3. **구독은 자동으로 취소되지 않습니다.** 먼저 Google Play 또는 App Store에서 구독을 취소하세요(위 참조).

Motoor를 제거하면 휴대폰에 있는 사본만 삭제됩니다. 백업은 계정을 삭제할 때까지 유지됩니다.

저희에게 이메일을 보낸 적이 있고 해당 이메일 내역의 삭제를 원하시면, 제목을 “Delete my emails”(이메일 삭제)로 하여 [{{ dev.email }}](mailto:{{ dev.email }}?subject=Delete%20my%20emails)으로 보내 주세요. 30일 이내에 삭제하고 이메일로 확인해 드립니다.

자세한 내용은 [개인정보처리방침]({{ '/ko/privacy/' | relative_url }})을 참조하세요.
