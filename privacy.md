---
layout: page
title: Privacy policy
eyebrow: Legal
permalink: /privacy/
privacy_date: true
lede: Motoor is built so your logbook stays on your phone. This page explains what that means, the few things that do leave your device, and the choices you have.
---
{% assign p = site.privacy %}
{% assign dev = site.developer %}
{% comment %}
  Before publishing: read this page end to end and check every statement is true
  for your build. Toggle the switches under `privacy:` in _config.yml.
  This is a starting point, not legal advice.
{% endcomment %}

<div class="mt-note"><strong>The short version.</strong> Motoor doesn’t ask you to create an account. Your vehicles, logs, reminders and photos are stored on your device and are not sent to the developer.{% if p.ads_provider != "" %} The free version shows ads from {{ p.ads_provider }}, which may use a device advertising ID.{% endif %} You can delete everything at any time.</div>

## Who we are

Motoor is an app made and published by **{{ dev.name }}**, an independent developer based in {{ dev.country }} (“we”, “us”). We are responsible for how Motoor handles your information. You can reach us at [{{ dev.email }}](mailto:{{ dev.email }}).

This policy applies to the Motoor app on Android and iOS and to this website.

## What stays on your device

Everything you put into your logbook is stored locally on your phone, in the app’s private storage:

- vehicles you add: make, model, class, name, odometer readings and photos
- fuel and charging entries, services, costs and notes
- reminders and their schedules
- receipt and vehicle photos you take or choose
- your settings

We do not have a server that receives this information, and we cannot see it. If you use your phone’s own backup (Google backup on Android, iCloud on iOS), your operating system may include Motoor’s data in that backup under Google’s or Apple’s terms.

## What leaves your device

{% if p.ads_provider != "" %}
### Ads in the free version

The free version shows ads served by **{{ p.ads_provider }}**. To show and measure ads and to prevent fraud, the ad provider may collect your device’s advertising ID, your approximate location derived from your IP address, and information about the device and how ads are viewed and tapped. It does not receive your logbook data.

- On Android, you can reset or delete your advertising ID in **Settings → Privacy → Ads**.
- On iOS, Motoor asks for permission before tracking. If you choose **Ask App Not to Track**, you only see non-personalised ads.
- Where the law requires it, Motoor asks for your consent before showing personalised ads, and you can change your choice in Motoor’s settings.
- Buying Premium removes ads, and the ad provider stops receiving data from the app.

{% if p.ads_provider contains "Google" %}You can read how Google uses this information at [policies.google.com/technologies/partner-sites](https://policies.google.com/technologies/partner-sites).{% endif %}
{% endif %}

### Purchases

If you buy Premium, the payment is handled entirely by **Google Play** or the **Apple App Store**. We never see your card or payment details. The store tells the app only whether you have an active purchase, so Premium features can be unlocked and restored.

{% if p.crash_reporting != "" %}
### Crash reports

If Motoor crashes, **{{ p.crash_reporting }}** sends us a crash report so we can fix the problem. A report contains technical details only: device model, operating system version, app version, the time of the crash and the state of the code when it happened. It does not contain your vehicles, logs or photos.
{% endif %}

{% if p.analytics != "" %}
### Usage statistics

Motoor uses **{{ p.analytics }}** to count how features are used, such as how many people log fuel, so we know what to improve. These statistics are tied to a random app-instance ID, not to your name, and do not contain your logbook entries. You can turn this off in Motoor’s settings.
{% endif %}

### Email you send us

If you email us for support, we receive your email address and whatever you choose to include. We use it only to reply to you, and delete support emails 12 months after the conversation ends.

## Permissions Motoor asks for

| Permission | Why | If you say no |
|---|---|---|
| Notifications | To remind you when a service is due | Reminders still show inside the app |
| Camera | To photograph receipts and vehicles | You can choose existing photos instead |
| Photos | To attach a photo you already have | You can use the camera instead |
{% if p.ads_provider != "" %}| Tracking (iOS only) | To show personalised ads | You see non-personalised ads |
{% endif %}

Motoor does not ask for your location, contacts, microphone or call log.
{% if p.receipt_scanning_on_device %}Receipt scanning reads the text from a receipt photo on your device; the photo is not uploaded.{% else %}When you scan a receipt, the photo is sent securely to our text-recognition service, read, and deleted straight away; it is not stored or used for anything else.{% endif %}

## How we use information

We use the limited information that reaches us only to:

- provide and unlock the features you’ve paid for
{% if p.ads_provider != "" %}- show ads in the free version
{% endif %}{% if p.crash_reporting != "" or p.analytics != "" %}- find and fix bugs and improve the app
{% endif %}- answer your support requests

We do not sell your personal information, and we do not use it for anything other than the purposes above.

## Your choices and rights

Under Indonesia’s Personal Data Protection Law (Law No. 27 of 2022) and similar laws where you live, you have the right to ask what personal data we hold about you, to correct it, to have it deleted and to withdraw consent. Because your logbook stays on your device, you already hold and control it:

- **Delete your logbook:** use **Settings → Delete all data** in Motoor, or uninstall the app. This removes everything from your phone and cannot be undone.
- **Delete support emails:** email [{{ dev.email }}](mailto:{{ dev.email }}) and we will delete our correspondence with you within 30 days.
{% if p.ads_provider != "" %}- **Ads:** reset your advertising ID, decline tracking on iOS, change your ad consent in Motoor, or buy Premium.
{% endif %}

More on this is on the [support page]({{ '/support/#delete-your-data' | relative_url }}).

## How long we keep information

Your logbook stays on your device until you delete it. Support emails are kept for 12 months after the last message.{% if p.crash_reporting != "" %} Crash reports are kept for up to 90 days.{% endif %}{% if p.ads_provider != "" %} Information collected by {{ p.ads_provider }} is kept according to its own policy.{% endif %}

## Security

Your logbook lives in Motoor’s private storage, which other apps cannot read. Anything Motoor sends over the internet is encrypted in transit. Keep your phone locked with a PIN, fingerprint or face unlock to protect what’s on it.

## Children

Motoor is meant for people who own or look after a vehicle, and is not directed at children under {{ p.min_age }}. We do not knowingly collect personal information from children. If you believe a child has sent us information, email us and we will delete it.

## Changes to this policy

If we change this policy, we will update the date at the top of this page. If a change affects what leaves your device, Motoor will also tell you inside the app before the change takes effect.

## Contact

Questions about privacy go to **{{ dev.name }}** at [{{ dev.email }}](mailto:{{ dev.email }}). We reply {{ dev.response_time }}.
