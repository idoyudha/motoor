---
layout: page
title: Support
permalink: /de/support/
ref: /support/
lang: de
lede: Antworten auf häufige Fragen und ein direkter Draht zu der Person, die Motoor entwickelt.
description: Antworten auf häufige Fragen und ein direkter Draht zu der Person, die Motoor entwickelt.
---
{% assign dev = site.developer %}
{% assign t = site.data.i18n[page.lang] %}

<div class="mt-contact">
  <h2 class="mt-contact__title">Kontakt</h2>
  <p style="margin:0">Schreiben Sie an <a href="mailto:{{ dev.email }}">{{ dev.email }}</a>, und Sie erhalten eine Antwort {{ t.ui.response_time }}. Hilfreich sind Ihr Handymodell, ob Sie Android oder iOS nutzen, und die Motoor-Version unter <strong>Einstellungen → Über</strong>.</p>
  <a class="mt-btn mt-btn--filled mt-btn--small" href="mailto:{{ dev.email }}?subject=Motoor%20support">{% include icon.html name="mail" %}Support per E-Mail</a>
</div>

## Häufige Fragen

<details class="mt-faq">
<summary>Erinnerungen erscheinen nicht auf meinem Handy</summary>
<div>
<p>Prüfen Sie, ob Benachrichtigungen für Motoor in den Einstellungen Ihres Handys aktiviert sind. Unter Android beenden manche Handys außerdem Apps im Hintergrund, um Akku zu sparen: Öffnen Sie <strong>Einstellungen → Apps → Motoor → Akku</strong> und wählen Sie <strong>Nicht eingeschränkt</strong>. Erinnerungen erscheinen in der App immer im Tab <strong>Erinnerungen</strong>, auch wenn Benachrichtigungen ausgeschaltet sind.</p>
</div>
</details>

<details class="mt-faq">
<summary>Wie entscheidet Motoor, wann eine Wartung fällig ist?</summary>
<div>
<p>Wenn Sie ein Fahrzeug hinzufügen, schlägt Motoor einen Wartungsplan für Marke, Klasse und Antrieb vor. Jeder Punkt ist nach Strecke oder Datum fällig, je nachdem, was zuerst eintritt. Bei jedem Punkt sehen Sie, woher sein Intervall stammt. In jedem Tarif können Sie Punkte abwählen, die Sie nicht brauchen. Mit Premium können Sie Punkte außerdem umbenennen, ihre Intervalle ändern und eigene hinzufügen. Halten Sie den Kilometerstand aktuell, indem Sie Tankfüllungen oder Wartungen eintragen, damit streckenbasierte Erinnerungen genau bleiben.</p>
</div>
</details>

<details class="mt-faq">
<summary>Ich habe Premium gekauft, aber es ist nicht freigeschaltet</summary>
<div>
<p>Öffnen Sie <strong>Einstellungen → Premium → Kauf wiederherstellen</strong>, während Sie mit demselben Google- oder Apple-Konto angemeldet sind, mit dem Sie gekauft haben. Wenn das nicht hilft, schreiben Sie uns eine E-Mail mit der Bestellnummer aus Ihrem Google-Play- oder App-Store-Beleg.</p>
</div>
</details>

<details class="mt-faq">
<summary>Wie kündige ich Premium?</summary>
<div>
<p>Abos werden vom Store verwaltet, nicht von Motoor.</p>
<ul>
<li><strong>Android:</strong> Öffnen Sie den Play Store, tippen Sie auf Ihr Profilbild und dann auf <strong>Zahlungen und Abos → Abos → Motoor → Abo kündigen</strong>.</li>
<li><strong>iOS:</strong> Öffnen Sie <strong>Einstellungen</strong>, tippen Sie auf Ihren Namen und dann auf <strong>Abonnements → Motoor → Abo kündigen</strong>.</li>
</ul>
<p>Wenn der Abrechnungszeitraum endet, gelten wieder die Grenzen von Free, aber nichts wird gelöscht. Ihr erstes Fahrzeug bleibt aktiv (Sie können ein anderes auswählen), und alle weiteren werden schreibgeschützt, bis Sie erneut abonnieren. Jeder Eintrag und jeder Anhang bleibt erhalten, auf Ihrem Handy und in Ihrer Sicherung.</p>
</div>
</details>

<details class="mt-faq">
<summary>Kann ich eine Rückerstattung erhalten?</summary>
<div>
<p>Rückerstattungen werden von dem Store abgewickelt, in dem Sie gekauft haben. Unter Android beantragen Sie sie über die <a href="https://support.google.com/googleplay/answer/2479637">Erstattungsseite von Google Play</a>. Unter iOS nutzen Sie <a href="https://reportaproblem.apple.com">reportaproblem.apple.com</a>.</p>
</div>
</details>

<details class="mt-faq">
<summary>Wird mein Logbuch gesichert?</summary>
<div>
<p>Ja, automatisch, sowohl mit Free als auch mit Premium. Ihre Fahrzeuge, Einträge, Erinnerungen, Anhänge und Belege werden auf unserem Server gesichert, sobald Sie online sind. Melden Sie sich auf einem neuen Handy mit demselben Google- oder Apple-Konto an, und Ihr Logbuch ist wieder da. Mehr dazu in der <a href="{{ '/de/privacy/' | relative_url }}">Datenschutzerklärung</a>.</p>
</div>
</details>

<details class="mt-faq">
<summary>Funktioniert Motoor offline?</summary>
<div>
<p>Ja. Ihr Logbuch ist auf Ihrem Handy gespeichert, sodass Sie ohne Verbindung Tankfüllungen, Wartungen und Kosten eintragen, Ihren Verlauf ansehen und Erinnerungen erhalten können. Änderungen werden automatisch gesichert, sobald Sie wieder online sind. Für die Anmeldung, das Scannen von Belegen sowie das Teilen und Übertragen eines Fahrzeugs ist eine Verbindung nötig.</p>
</div>
</details>

<details class="mt-faq">
<summary>Ich habe eine Idee oder einen Fehler gefunden</summary>
<div>
<p>Bitte schreiben Sie an <a href="mailto:{{ dev.email }}">{{ dev.email }}</a>. Beschreiben Sie bei Fehlern, was Sie getan haben, was Sie erwartet haben und was stattdessen passiert ist. Ein Screenshot hilft sehr.</p>
</div>
</details>

## Ihre Daten löschen {#delete-your-data}

Wenn Sie Ihr Konto löschen, wird Ihr Logbuch von Ihrem Handy und nach {{ site.privacy.deletion_grace_days }} Tagen endgültig von unserem Server entfernt. Dafür gibt es zwei Wege.

**In der App:** Öffnen Sie **Einstellungen → Profil → Konto löschen** und bestätigen Sie. Ihr Konto wird sofort gesperrt, und alle Freigabelinks funktionieren nicht mehr.

**Ohne die App:** Schreiben Sie von der E-Mail-Adresse, mit der Sie sich anmelden, an [{{ dev.email }}](mailto:{{ dev.email }}?subject=Delete%20my%20account) mit dem Betreff „Delete my account“ (Mein Konto löschen). Wir bestätigen {{ t.ui.response_time }} per E-Mail und planen die Löschung, die dann genauso abläuft.

So geht es weiter:

1. **{{ site.privacy.deletion_grace_days }} Tage lang können Sie es sich anders überlegen.** Melden Sie sich bei Motoor an und wählen Sie **Wiederherstellen**. Ihr Logbuch ist dann wieder so wie vorher.
2. **Nach {{ site.privacy.deletion_grace_days }} Tagen** werden Ihr Konto, die Sicherung Ihres Logbuchs, Anhänge, Belege und Scans endgültig gelöscht, und Ihr Anmeldekonto wird entfernt. Kopien in unseren Notfall-Backups laufen innerhalb von weiteren {{ site.privacy.backup_expiry_days }} Tagen ab. Dies kann nicht rückgängig gemacht werden.
3. **Ihr Abo wird nicht automatisch gekündigt.** Kündigen Sie es zuerst bei Google Play oder im App Store (siehe oben).

Wenn Sie Motoor deinstallieren, wird nur die Kopie auf Ihrem Handy entfernt. Ihre Sicherung bleibt bestehen, bis Sie Ihr Konto löschen.

Wenn Sie uns E-Mails geschrieben haben und diese Korrespondenz gelöscht haben möchten, schreiben Sie an [{{ dev.email }}](mailto:{{ dev.email }}?subject=Delete%20my%20emails) mit dem Betreff „Delete my emails“ (Meine E-Mails löschen). Wir löschen sie innerhalb von 30 Tagen und bestätigen dies per E-Mail.

Mehr dazu in der [Datenschutzerklärung]({{ '/de/privacy/' | relative_url }}).
