---
layout: page
title: Support
permalink: /support/
ref: /support/
lede: Answers to common questions, and a direct line to the person who makes Motoor.
---
{% assign dev = site.developer %}
{% assign t = site.data.i18n[page.lang] %}

<div class="mt-contact">
  <h2 class="mt-contact__title">Contact</h2>
  <p style="margin:0">Email <a href="mailto:{{ dev.email }}">{{ dev.email }}</a> and you’ll get a reply {{ t.ui.response_time }}. It helps to include your phone model, whether you use Android or iOS, and the Motoor version from <strong>Settings → About</strong>.</p>
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
<p>When you add a vehicle, Motoor proposes a service schedule for its make, class and powertrain, with each item due by distance or by date, whichever comes first. Every item shows where its interval comes from. On any plan you can untick the items you don’t need. With Premium you can also rename items, change their intervals and add your own. Keep the odometer up to date by logging fuel or services so distance-based reminders stay accurate.</p>
</div>
</details>

<details class="mt-faq">
<summary>I bought Premium but it isn’t unlocked</summary>
<div>
<p>Open <strong>Settings → Premium → Restore purchase</strong> while signed in to the same account you bought it with. If that doesn’t work, email us with the order number from your Google Play or App Store receipt.</p>
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
<p>When the billing period ends, the Free limits apply again, but nothing is deleted. Your first vehicle stays active (you can pick a different one), and any others become read-only until you subscribe again. Every log and attachment is kept, on your phone and in your backup.</p>
</div>
</details>

<details class="mt-faq">
<summary>Can I get a refund?</summary>
<div>
<p>Refunds are handled by the store you bought from. On Android, request one through <a href="https://support.google.com/googleplay/answer/2479637">Google Play’s refund page</a>. On iOS, use <a href="https://reportaproblem.apple.com">reportaproblem.apple.com</a>.</p>
</div>
</details>

<details class="mt-faq">
<summary>Is my logbook backed up?</summary>
<div>
<p>Yes, automatically, on both Free and Premium. Your vehicles, logs, reminders, attachments and receipts are backed up to our server whenever you’re online. On a new phone, sign in with the same account and your logbook comes back. Read more in the <a href="{{ '/privacy/' | relative_url }}">privacy policy</a>.</p>
</div>
</details>

<details class="mt-faq">
<summary>Does Motoor work offline?</summary>
<div>
<p>Yes. Your logbook is stored on your phone, so you can log fuel, services and costs, see your history and get reminders without a connection. Changes back up automatically when you’re online again. Signing in, scanning receipts, sharing and transferring a vehicle need a connection.</p>
</div>
</details>

<details class="mt-faq">
<summary>I have an idea or found a bug</summary>
<div>
<p>Please email <a href="mailto:{{ dev.email }}">{{ dev.email }}</a>. For bugs, say what you did, what you expected and what happened instead. A screenshot helps a lot.</p>
</div>
</details>

## Delete your data {#delete-your-data}

Deleting your account removes your logbook from your phone and, after {{ site.privacy.deletion_grace_days }} days, from our server for good. There are two ways to do it.

**In the app:** open **Settings → Profile → Delete account** and confirm. Your account is locked straight away and any share links stop working.

**Without the app:** email [{{ dev.email }}](mailto:{{ dev.email }}?subject=Delete%20my%20account) with the subject “Delete my account”, from the email address you sign in with. We’ll confirm by email {{ t.ui.response_time }} and schedule the deletion, which then works the same way.

What happens next:

1. **For {{ site.privacy.deletion_grace_days }} days you can change your mind.** Sign in to Motoor and choose **Restore**. Your logbook comes back as it was.
2. **After {{ site.privacy.deletion_grace_days }} days** your account, logbook backup, attachments, receipts and scans are deleted permanently, and your sign-in account is removed. Copies in our disaster-recovery backups expire within a further {{ site.privacy.backup_expiry_days }} days. This can’t be undone.
3. **Your subscription isn’t cancelled automatically.** Cancel it in Google Play or the App Store first (see above).

Uninstalling Motoor removes only the copy on your phone. Your backup stays until you delete your account.

If you’ve emailed us and want that correspondence deleted, write to [{{ dev.email }}](mailto:{{ dev.email }}?subject=Delete%20my%20emails) with the subject “Delete my emails”. We’ll delete it within 30 days and confirm by email.

Read more in the [privacy policy]({{ '/privacy/' | relative_url }}).
