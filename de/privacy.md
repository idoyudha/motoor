---
layout: page
title: Datenschutzerklärung
permalink: /de/privacy/
ref: /privacy/
lang: de
privacy_date: true
lede: Was Motoor erfasst, wo es gespeichert wird, wer sonst damit umgeht und wie Sie es löschen.
description: Was Motoor erfasst, wo es gespeichert wird, wer sonst damit umgeht und wie Sie es löschen.
---
{% assign p = site.privacy %}
{% assign dev = site.developer %}
{% assign t = site.data.i18n[page.lang] %}
{% comment %}
  Before publishing: read this page end to end and check every statement is true
  for your build. The switches under `privacy:` in _config.yml fill in the details.
  This is a starting point, not legal advice.
{% endcomment %}

<p class="mt-doc__meta">Dies ist eine Übersetzung. Weicht sie von der <a href="{{ '/privacy/' | relative_url }}">englischen Fassung</a> ab, gilt die englische Fassung.</p>

<div class="mt-note"><strong>Kurz gesagt.</strong> Sie melden sich mit Google oder Apple an. Ihr Logbuch wird auf Ihrem Handy gespeichert und automatisch auf unserem Server in {{ t.privacy.data_location }} gesichert, damit Sie es auf einem neuen Handy wiederherstellen können. Motoor zeigt keine Werbung, und wir verkaufen Ihre Daten nicht. Sie können Ihr Konto und alle Inhalte jederzeit löschen.</div>

## Wer wir sind

Motoor ist eine App, die von **{{ dev.name }}**, einem unabhängigen Entwickler („wir“, „uns“), entwickelt und veröffentlicht wird. Wir sind dafür verantwortlich, wie Motoor mit Ihren Daten umgeht. Sie erreichen uns unter [{{ dev.email }}](mailto:{{ dev.email }}).

Diese Erklärung gilt für die Motoor-App unter Android und iOS, für die von Motoor erstellten Freigabeseiten und für diese Website.

## Was wir erfassen

**Ihr Konto.** Um ein Fahrzeug hinzuzufügen, melden Sie sich mit Google an, unter iOS auch mit Apple. Über diese Anmeldung erhalten wir Ihren Namen, Ihre E-Mail-Adresse und eine Konto-ID. Ihr Google- oder Apple-Passwort sehen wir nie.

**Ihr Logbuch.** Alles, was Sie in Motoor eingeben:

- Fahrzeuge: Marke, Modell, Klasse, Name, Kennzeichen, Baujahr, Kilometerstände, Notizen und Fotos
- Tank- und Ladeeinträge, Wartungen, Kosten, Orte und Notizen
- Erinnerungen und ihre Zeitpläne
- Belege, Scans und andere Dateien, die Sie anhängen
- Ihre Einstellungen, etwa Einheiten, Währung, Sprache und Design

**Ihr Gerät.** Ein Push-Benachrichtigungs-Token, damit Erinnerungen und Hinweise Ihr Handy erreichen, sowie die Plattform (Android oder iOS).

**Käufe.** Ob Sie ein aktives Premium-Abo haben, wie von Google Play oder dem App Store gemeldet.

{% if p.crash_reporting != "" %}**Absturzberichte.** Technische Details, wenn die App abstürzt (siehe unten).
{% endif %}
{% if p.analytics != "" %}**Nutzungsstatistiken.** Welche Funktionen genutzt werden (siehe unten).
{% endif %}

**E-Mails, die Sie uns senden.** Ihre Adresse und alles, was Sie schreiben.

## Wo Ihr Logbuch gespeichert wird

Ihr Logbuch wird auf Ihrem Handy im privaten Speicher von Motoor abgelegt, sodass die App auch ohne Verbindung funktioniert.

Außerdem wird es **automatisch** auf unserem Server bei Google Cloud in **{{ t.privacy.data_location }}** **gesichert**. Das gilt für alle angemeldeten Nutzer, sowohl mit Free als auch mit Premium, und es gibt keinen Schalter, um es abzuschalten: Über die Sicherung stellt Motoor Ihr Logbuch wieder her, wenn Sie sich auf einem neuen Handy anmelden. Sie umfasst Ihre Einträge, Anhänge und Belege.

Daten werden bei der Übertragung zwischen Ihrem Handy und unserem Server verschlüsselt und bei Google Cloud verschlüsselt gespeichert. Nur Sie können Ihr Logbuch über die App lesen. Wir greifen nur auf gespeicherte Daten zu, wenn Sie uns um Hilfe bitten oder wenn wir einen Fehler beheben müssen.

## Belegscan (Premium)

Wenn Sie einen Beleg scannen, liest Motoor Beträge, Datum und Ort daraus aus, damit Sie sie nicht abtippen müssen. Sie prüfen jedes Feld, bevor etwas gespeichert wird. Der Kilometerstand wird nie von einem Beleg ausgelesen.

- **Wenn möglich, auf Ihrem Handy.** Hat Ihr Handy ein integriertes Modell, das Belege lesen kann, nutzt Motoor dieses, und das Auslesen findet auf dem Gerät statt.
- **Andernfalls auf unserem Server.** Das Bild oder PDF wird auf unseren Server hochgeladen, der es an **Googles Gemini-Modell auf Google Cloud** in {{ t.privacy.scan_location }} sendet. Wir nutzen den kostenpflichtigen Dienst von Google, dessen Bedingungen es Google nicht erlauben, die Daten zum Trainieren seiner Modelle zu verwenden. Die ausgelesenen Felder kommen zurück auf Ihr Handy.

In beiden Fällen wird der Scan als Anhang beim Eintrag gespeichert und wie der Rest Ihres Logbuchs gesichert.

## Ein Fahrzeug teilen und übertragen (Premium)

**Verlauf teilen** erstellt einen Link und einen QR-Code zu einer schreibgeschützten Webseite mit den Einträgen, Daten, Kilometerständen und Summen des Fahrzeugs. Sie zeigt keine Kontodaten. Jeder, der den Link hat, kann sie öffnen, bis sie nach 24 Stunden abläuft oder bis Sie sie widerrufen.

**Eigentum übertragen** erstellt einen Einmalcode, der nach 24 Stunden abläuft. Der erste Premium-Nutzer, der ihn öffnet, erhält das Fahrzeug mit seinem Verlauf und seinen Belegen, und Sie sehen seinen Namen und wann er es übernommen hat. Ihre Kopie wird schreibgeschützt.

{% if p.crash_reporting != "" %}
## Absturzberichte

Wenn Motoor abstürzt, sendet uns **{{ p.crash_reporting }}** einen Absturzbericht, damit wir das Problem beheben können. Ein Bericht enthält nur technische Details: Gerätemodell, Betriebssystemversion, App-Version, den Zeitpunkt des Absturzes und den Zustand des Codes zu diesem Zeitpunkt. Er enthält weder Ihre Fahrzeuge noch Ihre Einträge oder Fotos.
{% endif %}

{% if p.analytics != "" %}
## Nutzungsstatistiken

Motoor nutzt **{{ p.analytics }}**, um zu zählen, wie die App verwendet wird, zum Beispiel wie viele Personen das Hinzufügen eines Fahrzeugs abschließen, ihre erste Tankfüllung eintragen oder den Premium-Bildschirm öffnen und welchen Tarif sie wählen. Diese Statistiken sind an eine zufällige App-Instanz-ID gebunden, nicht an Ihren Namen oder Ihre E-Mail-Adresse, und sie enthalten keine Einträge aus Ihrem Logbuch.
{% endif %}

## Käufe

Wenn Sie Premium kaufen, wird die Zahlung vollständig von **Google Play** oder dem **Apple App Store** abgewickelt. Ihre Karten- oder Zahlungsdaten sehen wir nie. Der Store teilt uns nur mit, ob Sie einen aktiven Kauf haben, damit Premium freigeschaltet und auf Ihren anderen Geräten wiederhergestellt werden kann.

## Wer sonst mit Ihren Daten umgeht

Wir verkaufen Ihre personenbezogenen Daten nicht und geben sie nicht für Werbezwecke weiter. Diese Anbieter verarbeiten Daten in unserem Auftrag, ausschließlich für den Betrieb von Motoor:

| Anbieter | Aufgabe | Verarbeitete Daten |
|---|---|---|
| Google Cloud | Hostet unseren Server, unsere Datenbank und unseren Dateispeicher in {{ t.privacy.data_location }} | Ihr Konto und die Sicherung Ihres Logbuchs |
| Google Cloud (Gemini) | Liest Belege, die auf Ihrem Handy nicht gelesen werden können | Der Beleg, den Sie scannen |
| Firebase Authentication (Google) | Anmeldung mit Google oder Apple | Name, E-Mail, Konto-ID |
| Firebase Cloud Messaging (Google) | Stellt Push-Benachrichtigungen zu | Push-Token des Geräts |
{% if p.crash_reporting != "" %}| {{ p.crash_reporting }} (Google) | Absturzberichte | Technische Absturzdetails |
{% endif %}{% if p.analytics != "" %}| {{ p.analytics }} (Google) | Nutzungsstatistiken | App-Instanz-ID und Funktionsereignisse |
{% endif %}| Google Play, Apple App Store | Abos und Zahlung | Kaufstatus |

Firebase-Dienste werden von Google betrieben und können Daten außerhalb Indonesiens verarbeiten. Wechselkurse für die Währungsumrechnung kommen von unserem eigenen Server; beim Abrufen wird nichts über Sie übermittelt.

## Berechtigungen, die Motoor anfragt

| Berechtigung | Warum | Wenn Sie ablehnen |
|---|---|---|
| Benachrichtigungen | Um Sie an fällige Wartungen zu erinnern | Erinnerungen erscheinen weiterhin in der App |
| Kamera | Um Belege und Fahrzeuge zu fotografieren | Sie können stattdessen vorhandene Fotos oder Dateien auswählen |
| Fotos und Dateien | Um ein vorhandenes Foto oder PDF anzuhängen | Sie können stattdessen die Kamera verwenden |

Motoor fragt nicht nach Ihrem Standort, Ihren Kontakten, Ihrem Mikrofon oder Ihrer Anrufliste. Wenn Sie die biometrische Sperre aktivieren, wird Ihr Fingerabdruck oder Gesicht von Ihrem Handy geprüft; Motoor erhält ihn nie.

## Wie wir Daten verwenden

Wir verwenden Ihre Daten ausschließlich, um:

- Ihr Logbuch auf Ihrem Handy zu speichern und zu sichern, damit Sie es wiederherstellen können
- Erinnerungen und Hinweise zu senden
- Belege zu lesen, die Sie scannen
- Freigabeseiten und Übertragungen zu erstellen, die Sie anfordern
- Premium freizuschalten und wiederherzustellen
{% if p.crash_reporting != "" or p.analytics != "" %}- Fehler zu finden und zu beheben und die App zu verbessern
{% endif %}- Ihre Support-Anfragen zu beantworten

## Ihre Wahlmöglichkeiten und Rechte

Nach dem indonesischen Gesetz zum Schutz personenbezogener Daten (Gesetz Nr. 27 von 2022) und vergleichbaren Gesetzen an Ihrem Wohnort haben Sie das Recht, auf Ihre personenbezogenen Daten zuzugreifen, sie zu berichtigen, sie löschen zu lassen und Ihre Einwilligung zu widerrufen. In Motoor:

- **Zugriff und Kopie:** Exportieren Sie Ihr Logbuch als CSV oder als PDF-Serviceheft mit angehängten Belegen unter **Einstellungen → Export und Sicherung**.
- **Berichtigen:** Bearbeiten Sie jedes Fahrzeug, jeden Eintrag und jede Erinnerung in der App sowie Ihren Namen unter **Einstellungen → Profil**.
- **Löschen:** Löschen Sie einzelne Einträge in der App oder Ihr gesamtes Konto (siehe unten).

Für alles andere schreiben Sie an [{{ dev.email }}](mailto:{{ dev.email }}).

## Ihr Konto löschen

Öffnen Sie **Einstellungen → Profil → Konto löschen** und bestätigen Sie. Wenn Sie die App nicht mehr haben, können Sie uns stattdessen per E-Mail darum bitten; siehe die [Support-Seite]({{ '/de/support/#delete-your-data' | relative_url }}).

- Ihr Konto wird **sofort gesperrt**, und alle Freigabelinks und offenen Übertragungen funktionieren nicht mehr.
- **{{ p.deletion_grace_days }} Tage** lang können Sie es sich anders überlegen: Melden Sie sich erneut an und wählen Sie **Wiederherstellen**.
- Nach {{ p.deletion_grace_days }} Tagen werden Ihr Konto, die Sicherung Ihres Logbuchs, Anhänge, Belege und Scans **endgültig** von unserem Server **gelöscht**, und Ihr Anmeldekonto wird entfernt. Kopien in unseren Notfall-Backups laufen innerhalb von weiteren {{ p.backup_expiry_days }} Tagen ab.
- Ihr Abo wird durch das Löschen Ihres Kontos nicht gekündigt. Kündigen Sie es bei Google Play oder im App Store, die ihre eigenen Kaufunterlagen führen.

Wenn Sie die App von Ihrem Handy löschen, wird nur die Kopie auf dem Handy entfernt. Ihre Sicherung bleibt bestehen, bis Sie Ihr Konto löschen.

## Wie lange wir Daten aufbewahren

| Daten | Aufbewahrung |
|---|---|
| Ihr Konto und die Sicherung Ihres Logbuchs | Bis Sie Ihr Konto löschen, dann {{ p.deletion_grace_days }} Tage, danach entfernt (Backup-Kopien laufen {{ p.backup_expiry_days }} Tage später ab) |
| Ein einzelner Eintrag, ein Fahrzeug oder Foto, das Sie löschen | Sofort von Ihren Geräten entfernt und innerhalb von 90 Tagen von unserem Server |
| Freigabe- und Übertragungslinks | Bis sie nach 24 Stunden ablaufen oder widerrufen werden, danach als Nachweis aufbewahrt, bis Ihr Konto gelöscht wird |
{% if p.crash_reporting != "" %}| Absturzberichte | Bis zu 90 Tage |
{% endif %}{% if p.analytics != "" %}| Nutzungsstatistiken | {{ t.privacy.analytics_retention }} |
{% endif %}| Support-E-Mails | 12 Monate nach der letzten Nachricht |

## Sicherheit

Ihr Logbuch auf dem Handy liegt im privaten Speicher von Motoor, den andere Apps nicht lesen können, und Sie können eine biometrische Sperre hinzufügen. Alles, was Motoor über das Internet sendet, ist verschlüsselt. Freigabe- und Übertragungslinks verwenden lange, zufällige Codes, die nicht erraten werden können, und wir speichern von jedem Code nur einen Fingerabdruck. Sperren Sie Ihr Handy mit PIN, Fingerabdruck oder Gesichtserkennung, um die Daten darauf zu schützen.

## Kinder

Motoor richtet sich an Personen, die ein Fahrzeug besitzen oder betreuen, und nicht an Kinder unter {{ p.min_age }} Jahren. Wir erfassen wissentlich keine personenbezogenen Daten von Kindern. Wenn Sie glauben, dass uns ein Kind Daten übermittelt hat, schreiben Sie uns eine E-Mail, und wir löschen sie.

## Änderungen dieser Erklärung

Wenn wir diese Erklärung ändern, aktualisieren wir das Datum oben auf dieser Seite. Betrifft eine Änderung, was wir erfassen oder wer damit umgeht, informiert Motoor Sie außerdem in der App, bevor die Änderung wirksam wird.

## Kontakt

Fragen zum Datenschutz richten Sie an **{{ dev.name }}** unter [{{ dev.email }}](mailto:{{ dev.email }}). Wir antworten {{ t.ui.response_time }}.
