---
layout: page
title: Assistenza
eyebrow: Aiuto
permalink: /it/support/
ref: /support/
lang: it
lede: Risposte alle domande più comuni e un contatto diretto con la persona che crea Motoor.
description: Risposte alle domande più comuni e un contatto diretto con la persona che crea Motoor.
---
{% assign dev = site.developer %}
{% assign t = site.data.i18n[page.lang] %}

<div class="mt-contact">
  <p class="mt-eyebrow">Contatti</p>
  <p style="margin:0">Scrivi a <a href="mailto:{{ dev.email }}">{{ dev.email }}</a> e riceverai una risposta {{ t.ui.response_time }}. È utile indicare il modello del telefono, se usi Android o iOS, e la versione di Motoor che trovi in <strong>Impostazioni → Info</strong>.</p>
  <a class="mt-btn mt-btn--filled mt-btn--small" href="mailto:{{ dev.email }}?subject=Motoor%20support">{% include icon.html name="mail" %}Scrivi all’assistenza</a>
</div>

## Domande frequenti

<details class="mt-faq">
<summary>I promemoria non compaiono sul telefono</summary>
<div>
<p>Verifica che le notifiche di Motoor siano attive nelle impostazioni del telefono. Su Android, alcuni telefoni bloccano anche le app in background per risparmiare batteria: apri <strong>Impostazioni → App → Motoor → Batteria</strong> e scegli <strong>Senza restrizioni</strong>. I promemoria compaiono sempre all’interno dell’app, nella scheda <strong>Promemoria</strong>, anche con le notifiche disattivate.</p>
</div>
</details>

<details class="mt-faq">
<summary>Come decide Motoor quando è previsto un intervento?</summary>
<div>
<p>Quando aggiungi un veicolo, Motoor propone un piano di manutenzione in base a marca, categoria e motorizzazione, con ogni voce in scadenza a distanza o a data, a seconda di cosa arriva prima. Ogni voce indica da dove proviene il suo intervallo. Con qualsiasi piano puoi deselezionare le voci che non ti servono. Con Premium puoi anche rinominarle, cambiarne gli intervalli e aggiungerne di tue. Tieni aggiornato il contachilometri registrando rifornimenti o interventi, così i promemoria a distanza restano precisi.</p>
</div>
</details>

<details class="mt-faq">
<summary>Ho acquistato Premium ma non è sbloccato</summary>
<div>
<p>Apri <strong>Impostazioni → Premium → Ripristina acquisto</strong> dopo aver effettuato l’accesso con lo stesso account Google o Apple con cui l’hai acquistato. Se non funziona, scrivici indicando il numero d’ordine della ricevuta di Google Play o dell’App Store.</p>
</div>
</details>

<details class="mt-faq">
<summary>Come annullo Premium?</summary>
<div>
<p>Gli abbonamenti sono gestiti dallo store, non da Motoor.</p>
<ul>
<li><strong>Android:</strong> apri il Play Store, tocca la tua immagine del profilo, poi <strong>Pagamenti e abbonamenti → Abbonamenti → Motoor → Annulla abbonamento</strong>.</li>
<li><strong>iOS:</strong> apri <strong>Impostazioni</strong>, tocca il tuo nome, poi <strong>Abbonamenti → Motoor → Annulla abbonamento</strong>.</li>
</ul>
<p>Al termine del periodo di fatturazione tornano a valere i limiti di Free, ma non viene eliminato nulla. Il tuo primo veicolo resta attivo (puoi sceglierne un altro) e gli altri diventano di sola lettura finché non ti abboni di nuovo. Tutte le registrazioni e gli allegati vengono conservati, sul telefono e nel backup.</p>
</div>
</details>

<details class="mt-faq">
<summary>Posso ottenere un rimborso?</summary>
<div>
<p>I rimborsi sono gestiti dallo store in cui hai effettuato l’acquisto. Su Android, richiedilo tramite la <a href="https://support.google.com/googleplay/answer/2479637">pagina dei rimborsi di Google Play</a>. Su iOS, usa <a href="https://reportaproblem.apple.com">reportaproblem.apple.com</a>.</p>
</div>
</details>

<details class="mt-faq">
<summary>Il mio libretto ha un backup?</summary>
<div>
<p>Sì, automaticamente, sia con Free sia con Premium. Veicoli, registrazioni, promemoria, allegati e scontrini vengono salvati sul nostro server ogni volta che sei online. Su un nuovo telefono, accedi con lo stesso account Google o Apple e il tuo libretto torna. Maggiori dettagli nell’<a href="{{ '/it/privacy/' | relative_url }}">informativa sulla privacy</a>.</p>
</div>
</details>

<details class="mt-faq">
<summary>Motoor funziona offline?</summary>
<div>
<p>Sì. Il tuo libretto è memorizzato sul telefono, quindi puoi registrare rifornimenti, interventi e spese, consultare lo storico e ricevere promemoria senza connessione. Le modifiche vengono salvate automaticamente quando torni online. L’accesso, la scansione degli scontrini, la condivisione e il trasferimento di un veicolo richiedono una connessione.</p>
</div>
</details>

<details class="mt-faq">
<summary>Ho un’idea o ho trovato un bug</summary>
<div>
<p>Scrivi a <a href="mailto:{{ dev.email }}">{{ dev.email }}</a>. Per i bug, descrivi cosa hai fatto, cosa ti aspettavi e cosa è successo invece. Uno screenshot aiuta molto.</p>
</div>
</details>

## Elimina i tuoi dati {#delete-your-data}

L’eliminazione dell’account rimuove il tuo libretto dal telefono e, dopo {{ site.privacy.deletion_grace_days }} giorni, dal nostro server in modo definitivo. Puoi farlo in due modi.

**Nell’app:** apri **Impostazioni → Profilo → Elimina account** e conferma. Il tuo account viene bloccato immediatamente e i link di condivisione smettono di funzionare.

**Senza l’app:** scrivi a [{{ dev.email }}](mailto:{{ dev.email }}?subject=Delete%20my%20account) con oggetto “Delete my account” (Elimina il mio account), dall’indirizzo email con cui accedi. Te lo confermeremo via email {{ t.ui.response_time }} e programmeremo l’eliminazione, che da lì in poi funziona allo stesso modo.

Cosa succede dopo:

1. **Per {{ site.privacy.deletion_grace_days }} giorni puoi cambiare idea.** Accedi a Motoor e scegli **Ripristina**. Il tuo libretto torna com’era.
2. **Dopo {{ site.privacy.deletion_grace_days }} giorni** il tuo account, il backup del libretto, gli allegati, gli scontrini e le scansioni vengono eliminati definitivamente, e il tuo account di accesso viene rimosso. Le copie nei nostri backup di disaster recovery scadono entro ulteriori {{ site.privacy.backup_expiry_days }} giorni. L’operazione è irreversibile.
3. **L’abbonamento non viene annullato automaticamente.** Annullalo prima su Google Play o sull’App Store (vedi sopra).

Disinstallare Motoor rimuove solo la copia sul telefono. Il backup resta finché non elimini il tuo account.

Se ci hai scritto e vuoi che quella corrispondenza venga eliminata, scrivi a [{{ dev.email }}](mailto:{{ dev.email }}?subject=Delete%20my%20emails) con oggetto “Delete my emails” (Elimina le mie email). La elimineremo entro 30 giorni e te lo confermeremo via email.

Maggiori dettagli nell’[informativa sulla privacy]({{ '/it/privacy/' | relative_url }}).
