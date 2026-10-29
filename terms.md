---
layout: page
title: Terms and Conditions
permalink: /terms/
ref: /terms/
updated: 2026-10-25
lede: The rules for using Motoor, what Premium includes, and what we are and aren’t responsible for.
---
{% assign p = site.privacy %}
{% assign dev = site.developer %}
{% assign t = site.data.i18n[page.lang] %}
{% assign lp = '' %}{% if page.lang != 'en' %}{% assign lp = '/' | append: page.lang %}{% endif %}
{% comment %}
  Before publishing: read this page end to end and check every statement is true
  for your build. Prices and the limits of each plan must match the app and the
  store listings. This is a starting point, not legal advice.
{% endcomment %}

<div class="mt-note"><strong>The short version.</strong> Motoor is a logbook for your vehicles. Your records belong to you and you can export them at any time, on any plan. Premium is billed by Google Play or the App Store and you can cancel it there whenever you like. Reminders are a guide: always check your vehicle’s official service schedule.</div>

## Agreeing to these terms

These terms are an agreement between you and **{{ dev.name }}** (“we”, “us”), who makes and publishes Motoor. They apply to the Motoor app on Android and iOS, to the share pages Motoor creates, and to this website. By using Motoor you agree to them. If you don’t agree, please don’t use the app.

How we handle your personal information is explained in the [privacy policy]({{ lp | append: '/privacy/' | relative_url }}), which is part of these terms.

## Who can use Motoor

You must be at least {{ p.min_age }} years old to use Motoor. If you are under the age of majority where you live, you need the permission of a parent or guardian. You must use Motoor in line with the laws that apply to you.

## Your account

You sign in with Google, or with Apple on iOS. An account is needed to register vehicles and to export your logbook. Keep access to your Google or Apple account safe: anyone who can sign in with it can open your logbook. Tell us at [{{ dev.email }}](mailto:{{ dev.email }}) if you think someone else has used your account.

## Free and Premium

**Free** gives you a complete logbook for one active vehicle: fuel and charging, services, costs, reminders, history and export.

**Premium** removes the vehicle limit and adds features such as receipt scanning, sharing a vehicle’s history and transferring a vehicle. It costs **US$1.30 per month** or **US$10.80 per year**. Prices are fixed in US dollars; the store may show them in your local currency and add local taxes.

- Premium is billed by **Google Play** or the **App Store** and renews automatically under their terms, until you cancel.
- You can cancel at any time in the store. Premium stays active until the end of the period you have paid for.
- When Premium ends, the Free limits apply again, but **nothing is deleted**. Your first vehicle stays active and any others become read-only until you subscribe again.
- Refunds are handled by the store you bought from, under its own refund policy. See the [support page]({{ lp | append: '/support/' | relative_url }}).

If we change the price, the store will tell you before the new price applies to your subscription.

## Your logbook is yours

Everything you put into Motoor (vehicles, entries, photos, receipts and notes) is your content, and you own it. You give us a limited licence to store, back up and sync your content and to show it to you and to the people you choose to share it with. We use it for nothing else.

You can export your logbook as CSV, or as a PDF service history with receipts attached, at any time from **Settings → Export and backup**, on Free and Premium.

You are responsible for your content. Don’t upload anything you don’t have the right to use.

## Sharing and transferring a vehicle

Both features are part of Premium.

- **Share history** creates a read-only link to a vehicle’s history. The link expires after 24 hours, and you can revoke it sooner. Anyone who has the link can open it until then.
- **Transfer ownership** creates a single-use code that expires after 24 hours. The recipient must have Premium. Once the code is claimed, the transfer is **permanent**: the vehicle, its history and its receipts move to the recipient, and your copy becomes read-only.

You are responsible for who you share links and codes with. We can’t undo a transfer that has been claimed.

## Receipt scanning

Receipt scanning is part of Premium. Motoor reads the totals, date and place from a receipt and fills them in for you. These are suggestions: you review and confirm every field before anything is saved, and you are responsible for what you save. The odometer is never read from a receipt.

## Reminders are guidance

Motoor proposes service intervals from the manufacturer’s service book, from common workshop practice, or from what you set yourself, and every interval shows where it came from. Reminders depend on the odometer readings and dates you enter.

Reminders are a guide, not professional advice. Always check your vehicle’s official service schedule and follow the advice of a qualified mechanic. Motoor is not responsible for maintenance that is missed, late or wrong, or for any damage that follows.

## Acceptable use

When you use Motoor, don’t:

- break the law or anyone else’s rights
- upload content that is unlawful, harmful or that you don’t have the right to share
- try to get into accounts, data or systems that aren’t yours
- copy, reverse engineer, resell or interfere with the app or our servers, except where the law allows it
- use Motoor to send spam or harmful code

We may suspend or close an account that breaks these rules. Where we can, we will tell you first and explain why.

## Availability

Motoor works offline, and your logbook stays on your phone. Signing in, backup, receipt scanning, sharing and transfers need a connection and our servers.

We work to keep Motoor running, but we can’t promise it will always be available or free of faults. We may change, add or stop features. If we stop a feature you rely on, or stop Motoor altogether, we will give notice in the app where we can, so you have time to export your logbook.

## Deleting your account

You can stop using Motoor at any time. To delete your account, open **Settings → Profile → Delete account** and confirm.

Your account is locked at once. For {{ p.deletion_grace_days }} days you can restore it by signing in again; after that, your account and logbook are deleted permanently. Deleting your account doesn’t cancel your subscription: cancel it in the store. If you no longer have the app, see the [support page]({{ lp | append: '/support/#delete-your-data' | relative_url }}). The [privacy policy]({{ lp | append: '/privacy/' | relative_url }}) explains what is deleted and when.

## Disclaimers

Motoor is provided “as is” and “as available”. To the extent the law allows, we make no promises beyond those in these terms, including that the app will meet every need or that every calculation, such as consumption, costs or exchange rates, is exact. Check important figures yourself.

## Limitation of liability

To the extent the law allows, we are not liable for indirect or consequential loss, such as lost profits, lost data or damage to a vehicle, arising from your use of Motoor. Our total liability to you is limited to the amount you paid for Premium in the 12 months before the claim. Nothing in these terms limits liability that can’t be limited by law, or takes away rights you have as a consumer.

## Governing law

These terms are governed by the laws of the **Republic of Indonesia**. If a dispute comes up, please contact us first and we will try to resolve it. This doesn’t affect any mandatory consumer protection rights you have where you live.

## Changes to these terms

If we change these terms, we will update the date at the top of this page. If a change matters to how you use Motoor, we will also tell you inside the app before it takes effect. If you keep using Motoor after that, you accept the new terms.

## Contact

Questions about these terms go to **{{ dev.name }}** at [{{ dev.email }}](mailto:{{ dev.email }}). We reply {{ t.ui.response_time }}.
