---
layout: page
title: 支持
permalink: /zh/support/
ref: /support/
lang: zh
lede: 常见问题解答，以及直接联系 Motoor 开发者的渠道。
description: 常见问题解答，以及直接联系 Motoor 开发者的渠道。
---
{% assign dev = site.developer %}
{% assign t = site.data.i18n[page.lang] %}

<div class="mt-contact">
  <h2 class="mt-contact__title">联系我们</h2>
  <p style="margin:0">发送电子邮件至 <a href="mailto:{{ dev.email }}">{{ dev.email }}</a>，你将在{{ t.ui.response_time }}收到回复。如能附上你的手机型号、使用的是 Android 还是 iOS，以及 <strong>设置 → 关于</strong> 中显示的 Motoor 版本号，会很有帮助。</p>
  <a class="mt-btn mt-btn--filled mt-btn--small" href="mailto:{{ dev.email }}?subject=Motoor%20support">{% include icon.html name="mail" %}发送邮件获取支持</a>
</div>

## 常见问题

<details class="mt-faq">
<summary>手机上收不到提醒</summary>
<div>
<p>请在手机设置中确认 Motoor 的通知已开启。在 Android 上，有些手机为了省电还会阻止应用在后台运行：打开 <strong>设置 → 应用 → Motoor → 电池</strong>，然后选择 <strong>不受限制</strong>。即使关闭了通知，提醒也始终会显示在应用内的 <strong>提醒</strong> 标签页中。</p>
</div>
</details>

<details class="mt-faq">
<summary>Motoor 如何判断保养何时到期？</summary>
<div>
<p>添加车辆时，Motoor 会根据车辆的品牌、类别和动力系统推荐一套保养计划，每个项目按里程或日期到期，以先到者为准。每个项目都会显示其间隔的来源。在任何方案下，你都可以取消勾选不需要的项目。使用 Premium，你还可以重命名项目、更改间隔以及添加自己的项目。请通过记录加油或保养来保持里程数据最新，这样按里程计算的提醒才会准确。</p>
</div>
</details>

<details class="mt-faq">
<summary>我购买了 Premium，但没有解锁</summary>
<div>
<p>请在登录购买时所用的同一个 Google 或 Apple 账户的情况下，打开 <strong>设置 → Premium → 恢复购买</strong>。如果仍然无效，请将 Google Play 或 App Store 收据上的订单号通过电子邮件发给我们。</p>
</div>
</details>

<details class="mt-faq">
<summary>如何取消 Premium？</summary>
<div>
<p>订阅由应用商店管理，而不是由 Motoor 管理。</p>
<ul>
<li><strong>Android：</strong>打开 Play 商店，点按你的头像，然后依次选择 <strong>付款和订阅 → 订阅 → Motoor → 取消订阅</strong>。</li>
<li><strong>iOS：</strong>打开 <strong>设置</strong>，点按你的姓名，然后依次选择 <strong>订阅 → Motoor → 取消订阅</strong>。</li>
</ul>
<p>当前计费周期结束后，Free 版的限制将重新适用，但不会删除任何内容。你的第一辆车仍保持可用（你也可以选择另一辆），其他车辆将变为只读，直到你重新订阅。所有记录和附件都会保留在你的手机和备份中。</p>
</div>
</details>

<details class="mt-faq">
<summary>可以退款吗？</summary>
<div>
<p>退款由你购买时所用的应用商店处理。在 Android 上，请通过 <a href="https://support.google.com/googleplay/answer/2479637">Google Play 退款页面</a>申请。在 iOS 上，请使用 <a href="https://reportaproblem.apple.com">reportaproblem.apple.com</a>。</p>
</div>
</details>

<details class="mt-faq">
<summary>我的记录本有备份吗？</summary>
<div>
<p>有，Free 和 Premium 都会自动备份。只要你在线，你的车辆、记录、提醒、附件和收据就会备份到我们的服务器。在新手机上，使用同一个 Google 或 Apple 账户登录，你的记录本就会恢复。详情请参阅<a href="{{ '/zh/privacy/' | relative_url }}">隐私政策</a>。</p>
</div>
</details>

<details class="mt-faq">
<summary>Motoor 可以离线使用吗？</summary>
<div>
<p>可以。你的记录本存储在手机上，因此无需联网即可记录加油、保养和费用，查看历史并接收提醒。重新联网后，更改会自动备份。登录、扫描收据、分享和转让车辆需要联网。</p>
</div>
</details>

<details class="mt-faq">
<summary>我有一个想法，或者发现了一个错误</summary>
<div>
<p>请发送电子邮件至 <a href="mailto:{{ dev.email }}">{{ dev.email }}</a>。如果是错误，请说明你做了什么、你预期的结果以及实际发生了什么。附上截图会很有帮助。</p>
</div>
</details>

## 删除你的数据 {#delete-your-data}

删除账户会将你的记录本从手机上移除，并在 {{ site.privacy.deletion_grace_days }} 天后从我们的服务器上永久删除。有两种删除方式。

**在应用内：** 打开 **设置 → 个人资料 → 删除账户** 并确认。你的账户会立即被锁定，所有分享链接都会失效。

**不使用应用：** 使用你登录时所用的电子邮件地址，发送主题为“Delete my account”（删除我的账户）的邮件至 [{{ dev.email }}](mailto:{{ dev.email }}?subject=Delete%20my%20account)。我们会在{{ t.ui.response_time }}通过电子邮件确认并安排删除，之后的流程与在应用内删除相同。

接下来会发生什么：

1. **在 {{ site.privacy.deletion_grace_days }} 天内你可以改变主意。** 登录 Motoor 并选择**恢复**。你的记录本会恢复原样。
2. **{{ site.privacy.deletion_grace_days }} 天后**，你的账户、记录本备份、附件、收据和扫描件将被永久删除，你的登录账户也会被移除。我们灾难恢复备份中的副本将在之后的 {{ site.privacy.backup_expiry_days }} 天内过期。此操作无法撤销。
3. **你的订阅不会被自动取消。** 请先在 Google Play 或 App Store 中取消订阅（见上文）。

卸载 Motoor 只会删除手机上的副本。你的备份会一直保留，直到你删除账户。

如果你曾给我们发过邮件并希望删除这些往来邮件，请发送主题为“Delete my emails”（删除我的邮件）的邮件至 [{{ dev.email }}](mailto:{{ dev.email }}?subject=Delete%20my%20emails)。我们会在 30 天内删除，并通过电子邮件确认。

详情请参阅[隐私政策]({{ '/zh/privacy/' | relative_url }})。
