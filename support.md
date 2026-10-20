---
layout: page
title: Support
eyebrow: Help
permalink: /support/
lede: Answers to common questions, and a direct line to the person who makes Motoor.
---
{% assign dev = site.developer %}

<div class="mt-contact">
  <p class="mt-eyebrow">Contact</p>
  <p style="margin:0">Email <a href="mailto:{{ dev.email }}">{{ dev.email }}</a> and you’ll get a reply {{ dev.response_time }}. It helps to include your phone model, whether you use Android or iOS, and the Motoor version from <strong>Settings → About</strong>.</p>
  <a class="mt-btn mt-btn--filled mt-btn--small" href="mailto:{{ dev.email }}?subject=Motoor%20support">{% include icon.html name="mail" %}Email support</a>
</div>

## Common questions

<details class="mt-faq">
<summary>Reminders don’t show up on my phone</summary>
<div>
<p>Check that notifications are on for Motoor in your phone’s settings. On Android, some phones also stop apps running in the background to save battery: open <strong>Settings → Apps → Motoor → Battery</strong> and choose <strong>Unrestricted</strong>. Reminders always appear inside the app on the <strong>Reminders</strong> tab, even when notifications are off.</p>
</div>
</details>

<details class="mt-faq">
<summary>How does Motoor decide when a service is due?</summary>
<div>
<p>When you add a vehicle, Motoor sets up a starting schedule for its class, with each item due by distance or by date, whichever comes first. You can change any interval, add your own items or remove ones you don’t need. Keep the odometer up to date by logging fuel or services so distance-based reminders stay accurate.</p>
</div>
</details>

<details class="mt-faq">
<summary>I bought Premium but it isn’t unlocked</summary>
<div>
<p>Open <strong>Settings → Premium → Restore purchase</strong> while signed in to the same Google or Apple account you bought it with. If that doesn’t work, email us with the order number from your Google Play or App Store receipt.</p>
</div>
</details>

<details class="mt-faq">
<summary>How do I cancel Premium?</summary>
<div>
<p>Subscriptions are managed by the store, not by Motoor.</p>
<ul>
<li><strong>Android:</strong> open the Play Store, tap your profile picture, then <strong>Payments and subscriptions → Subscriptions → Motoor → Cancel subscription</strong>.</li>
<li><strong>iOS:</strong> open <strong>Settings</strong>, tap your name, then <strong>Subscriptions → Motoor → Cancel Subscription</strong>.</li>
</ul>
<p>Cancelling drops the free limits back on at the end of the billing period, but every vehicle, log and attachment stays on the device.</p>
</div>
</details>

<details class="mt-faq">
<summary>Can I get a refund?</summary>
<div>
<p>Refunds are handled by the store you bought from. On Android, request one through <a href="https://support.google.com/googleplay/answer/2479637">Google Play’s refund page</a>. On iOS, use <a href="https://reportaproblem.apple.com">reportaproblem.apple.com</a>.</p>
</div>
</details>

<details class="mt-faq">
<summary>Does Motoor work offline?</summary>
<div>
<p>Yes. Your logbook is stored on your phone, so you can log fuel, services and costs without a connection.</p>
</div>
</details>

<details class="mt-faq">
<summary>I have an idea or found a bug</summary>
<div>
<p>Please email <a href="mailto:{{ dev.email }}">{{ dev.email }}</a>. For bugs, say what you did, what you expected and what happened instead. A screenshot helps a lot.</p>
</div>
</details>

## Delete your data

Motoor doesn’t use accounts, and your logbook is stored only on your phone, so there is no account to close and nothing on our side to delete. You can remove everything yourself:

1. **Inside the app:** open **Settings → Delete all data** and confirm. This removes every vehicle, log, reminder and photo from the device.
2. **Or uninstall Motoor.** Uninstalling deletes the app’s data from your phone.
3. **Phone backups:** if your phone backs up apps to Google or iCloud, older copies may remain in that backup until it is replaced. You can manage these in your Google or Apple account settings.

If you’ve emailed us and want that correspondence deleted, write to [{{ dev.email }}](mailto:{{ dev.email }}?subject=Delete%20my%20data) with the subject “Delete my data”. We’ll delete it within 30 days and confirm by email.

Read more in the [privacy policy]({{ '/privacy/' | relative_url }}).
