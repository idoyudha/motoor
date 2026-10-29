---
layout: page
title: Privacy policy
permalink: /privacy/
ref: /privacy/
privacy_date: true
lede: What Motoor collects, where it's kept, who else handles it, and how to delete it.
---
{% assign p = site.privacy %}
{% assign dev = site.developer %}
{% assign t = site.data.i18n[page.lang] %}
{% comment %}
  Before publishing: read this page end to end and check every statement is true
  for your build. The switches under `privacy:` in _config.yml fill in the details.
  This is a starting point, not legal advice.
{% endcomment %}

<div class="mt-note"><strong>The short version.</strong> You sign in with Google or Apple. Your logbook is kept on your phone and backed up automatically to our server in {{ t.privacy.data_location }}, so you can restore it on a new phone. Motoor shows no ads and we don’t sell your data. You can delete your account and everything in it at any time.</div>

## Who we are

Motoor is an app made and published by **{{ dev.name }}**, an independent developer (“we”, “us”). We are responsible for how Motoor handles your information. You can reach us at [{{ dev.email }}](mailto:{{ dev.email }}).

This policy applies to the Motoor app on Android and iOS, to the share pages Motoor creates, and to this website.

## What we collect

**Your account.** To add a vehicle you sign in with Google, or with Apple on iOS. We receive your name, your email address and an account ID from that sign-in. We never see your Google or Apple password.

**Your logbook.** Everything you put into Motoor:

- vehicles: make, model, class, name, registration, year, odometer readings, notes and photos
- fuel and charging entries, services, costs, places and notes
- reminders and their schedules
- receipts, scans and other files you attach
- your settings, such as units, currency, language and theme

**Your device.** A push notification token, so reminders and alerts reach your phone, and the platform (Android or iOS).

**Purchases.** Whether you have an active Premium subscription, as reported by Google Play or the App Store.

{% if p.crash_reporting != "" %}**Crash reports.** Technical details when the app crashes (see below).
{% endif %}
{% if p.analytics != "" %}**Usage statistics.** Which features are used (see below).
{% endif %}

**Email you send us.** Your address and whatever you write.

## Where your logbook is kept

Your logbook is stored on your phone, in Motoor’s private storage, so the app works without a connection.

It is also **backed up automatically** to our server on Google Cloud in **{{ t.privacy.data_location }}**. This happens for every signed-in user, on both Free and Premium, and there is no switch to turn it off: the backup is how Motoor restores your logbook when you sign in on a new phone. It covers your entries, attachments and receipts.

Data is encrypted in transit between your phone and our server, and encrypted at rest on Google Cloud. Only you can read your logbook through the app. We access stored data only when you ask us for help, or when we need to fix a fault.

## Receipt scanning (Premium)

When you scan a receipt, Motoor reads the totals, date and place from it so you don’t have to type them. You review every field before anything is saved. The odometer is never read from a receipt.

- **On your phone, where possible.** If your phone has a built-in model that can read receipts, Motoor uses it and the reading happens on the device.
- **Otherwise, on our server.** The image or PDF is uploaded to our server, which sends it to **Google’s Gemini model on Google Cloud**, in {{ t.privacy.scan_location }}. We use Google’s paid service, whose terms don’t allow Google to use the data to train its models. The extracted fields come back to your phone.

Either way, the scan is kept with the entry as an attachment, and is backed up like the rest of your logbook.

## Sharing and transferring a vehicle (Premium)

**Share history** creates a link and QR code to a read-only web page with the vehicle’s entries, dates, odometer readings and totals. It shows no account details. Anyone who has the link can open it until it expires after 24 hours, or until you revoke it.

**Transfer ownership** creates a single-use code that expires after 24 hours. The first Premium user who opens it receives the vehicle with its history and receipts, and you see their name and when they claimed it. Your copy becomes read-only.

{% if p.crash_reporting != "" %}
## Crash reports

If Motoor crashes, **{{ p.crash_reporting }}** sends us a crash report so we can fix the problem. A report contains technical details only: device model, operating system version, app version, the time of the crash and the state of the code when it happened. It does not contain your vehicles, logs or photos.
{% endif %}

{% if p.analytics != "" %}
## Usage statistics

Motoor uses **{{ p.analytics }}** to count how the app is used, for example how many people finish adding a vehicle, log their first fill-up, or open the Premium screen and which plan they choose. These statistics are tied to a random app-instance ID, not to your name or email, and they don’t contain your logbook entries.
{% endif %}

## Purchases

If you buy Premium, the payment is handled entirely by **Google Play** or the **Apple App Store**. We never see your card or payment details. The store tells us only whether you have an active purchase, so Premium can be unlocked and restored on your other devices.

## Who else handles your data

We don’t sell your personal information and we don’t share it for advertising. These providers process data for us, only to run Motoor:

| Provider | What it does | Data it handles |
|---|---|---|
| Google Cloud | Hosts our server, database and file storage in {{ t.privacy.data_location }} | Your account and logbook backup |
| Google Cloud (Gemini) | Reads receipts that can’t be read on your phone | The receipt you scan |
| Firebase Authentication (Google) | Sign-in with Google or Apple | Name, email, account ID |
| Firebase Cloud Messaging (Google) | Delivers push notifications | Device push token |
{% if p.crash_reporting != "" %}| {{ p.crash_reporting }} (Google) | Crash reports | Technical crash details |
{% endif %}{% if p.analytics != "" %}| {{ p.analytics }} (Google) | Usage statistics | App-instance ID and feature events |
{% endif %}| Google Play, Apple App Store | Subscriptions and payment | Purchase status |

Firebase services are run by Google and may process data outside Indonesia. Exchange rates for currency conversion come from our own server; fetching them sends nothing about you.

## Permissions Motoor asks for

| Permission | Why | If you say no |
|---|---|---|
| Notifications | To remind you when a service is due | Reminders still show inside the app |
| Camera | To photograph receipts and vehicles | You can choose existing photos or files instead |
| Photos and files | To attach a photo or PDF you already have | You can use the camera instead |

Motoor does not ask for your location, contacts, microphone or call log. If you turn on the biometric lock, your fingerprint or face is checked by your phone; Motoor never receives it.

## How we use information

We use your information only to:

- keep your logbook on your phone and back it up, so you can restore it
- send reminders and alerts
- read receipts you scan
- create share pages and transfers you ask for
- unlock and restore Premium
{% if p.crash_reporting != "" or p.analytics != "" %}- find and fix bugs and improve the app
{% endif %}- answer your support requests

## Your choices and rights

Under Indonesia’s Personal Data Protection Law (Law No. 27 of 2022) and similar laws where you live, you have the right to access your personal data, correct it, have it deleted, and withdraw consent. In Motoor:

- **Access and copy:** export your logbook as CSV, or as a PDF service history with receipts attached, from **Settings → Export and backup**.
- **Correct:** edit any vehicle, entry or reminder in the app, and your name in **Settings → Profile**.
- **Delete:** delete single entries in the app, or delete your whole account (below).

For anything else, email [{{ dev.email }}](mailto:{{ dev.email }}).

## Deleting your account

Open **Settings → Profile → Delete account** and confirm. If you no longer have the app, you can ask us by email instead; see the [support page]({{ '/support/#delete-your-data' | relative_url }}).

- Your account is **locked straight away**, and any share links and open transfers stop working.
- For **{{ p.deletion_grace_days }} days** you can change your mind: sign in again and choose **Restore**.
- After {{ p.deletion_grace_days }} days your account, logbook backup, attachments, receipts and scans are **deleted permanently** from our server, and your sign-in account is removed. Copies in our disaster-recovery backups expire within a further {{ p.backup_expiry_days }} days.
- Your subscription isn’t cancelled by deleting your account. Cancel it in Google Play or the App Store, which keep their own purchase records.

Deleting the app from your phone removes the phone’s copy only. Your backup stays until you delete your account.

## How long we keep information

| Information | Kept |
|---|---|
| Your account and logbook backup | Until you delete your account, then {{ p.deletion_grace_days }} days, then removed (backup copies expire {{ p.backup_expiry_days }} days later) |
| A single entry, vehicle or photo you delete | Removed from your devices straight away and from our server within 90 days |
| Share and transfer links | Until they expire after 24 hours or are revoked, then kept as a record until your account is deleted |
{% if p.crash_reporting != "" %}| Crash reports | Up to 90 days |
{% endif %}{% if p.analytics != "" %}| Usage statistics | {{ t.privacy.analytics_retention }} |
{% endif %}| Support emails | 12 months after the last message |

## Security

Your logbook on the phone is kept in Motoor’s private storage, which other apps can’t read, and you can add a biometric lock. Everything Motoor sends over the internet is encrypted. Share and transfer links use long random codes that can’t be guessed, and we store only a fingerprint of each code. Keep your phone locked with a PIN, fingerprint or face unlock to protect what’s on it.

## Children

Motoor is meant for people who own or look after a vehicle, and is not directed at children under {{ p.min_age }}. We do not knowingly collect personal information from children. If you believe a child has given us information, email us and we will delete it.

## Changes to this policy

If we change this policy, we will update the date at the top of this page. If a change affects what we collect or who handles it, Motoor will also tell you inside the app before the change takes effect.

## Contact

Questions about privacy go to **{{ dev.name }}** at [{{ dev.email }}](mailto:{{ dev.email }}). We reply {{ t.ui.response_time }}.
