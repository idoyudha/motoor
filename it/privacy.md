---
layout: page
title: Informativa sulla privacy
permalink: /it/privacy/
ref: /privacy/
lang: it
privacy_date: true
lede: Cosa raccoglie Motoor, dove viene conservato, chi altro lo tratta e come eliminarlo.
description: Cosa raccoglie Motoor, dove viene conservato, chi altro lo tratta e come eliminarlo.
---
{% assign p = site.privacy %}
{% assign dev = site.developer %}
{% assign t = site.data.i18n[page.lang] %}
{% comment %}
  Before publishing: read this page end to end and check every statement is true
  for your build. The switches under `privacy:` in _config.yml fill in the details.
  This is a starting point, not legal advice.
{% endcomment %}

<p class="mt-doc__meta">Questa è una traduzione. In caso di differenze rispetto alla <a href="{{ '/privacy/' | relative_url }}">versione inglese</a>, prevale la versione inglese.</p>

<div class="mt-note"><strong>In breve.</strong> Accedi con Google o Apple. Il tuo libretto è conservato sul telefono e salvato automaticamente sul nostro server a {{ t.privacy.data_location }}, così puoi ripristinarlo su un nuovo telefono. Motoor non mostra pubblicità e non vendiamo i tuoi dati. Puoi eliminare il tuo account e tutto ciò che contiene in qualsiasi momento.</div>

## Chi siamo

Motoor è un’app realizzata e pubblicata da **{{ dev.name }}**, uno sviluppatore indipendente (“noi”). Siamo responsabili del modo in cui Motoor tratta le tue informazioni. Puoi contattarci all’indirizzo [{{ dev.email }}](mailto:{{ dev.email }}).

Questa informativa si applica all’app Motoor su Android e iOS, alle pagine di condivisione create da Motoor e a questo sito web.

## Cosa raccogliamo

**Il tuo account.** Per aggiungere un veicolo accedi con Google, oppure con Apple su iOS. Da questo accesso riceviamo il tuo nome, il tuo indirizzo email e un ID account. Non vediamo mai la tua password di Google o Apple.

**Il tuo libretto.** Tutto ciò che inserisci in Motoor:

- veicoli: marca, modello, categoria, nome, targa, anno, letture del contachilometri, note e foto
- rifornimenti e ricariche, interventi, spese, luoghi e note
- promemoria e relative scadenze
- scontrini, scansioni e altri file che alleghi
- le tue impostazioni, come unità, valuta, lingua e tema

**Il tuo dispositivo.** Un token per le notifiche push, affinché promemoria e avvisi arrivino sul tuo telefono, e la piattaforma (Android o iOS).

**Acquisti.** Se hai un abbonamento Premium attivo, secondo quanto comunicato da Google Play o dall’App Store.

{% if p.crash_reporting != "" %}**Report sugli arresti anomali.** Dettagli tecnici quando l’app si arresta in modo anomalo (vedi sotto).
{% endif %}
{% if p.analytics != "" %}**Statistiche di utilizzo.** Quali funzioni vengono usate (vedi sotto).
{% endif %}

**Email che ci invii.** Il tuo indirizzo e quello che scrivi.

## Dove viene conservato il tuo libretto

Il tuo libretto è memorizzato sul telefono, nello spazio di archiviazione privato di Motoor, così l’app funziona anche senza connessione.

Viene inoltre **salvato automaticamente** sul nostro server su Google Cloud a **{{ t.privacy.data_location }}**. Questo avviene per ogni utente che ha effettuato l’accesso, sia con Free sia con Premium, e non esiste un’opzione per disattivarlo: il backup è il modo in cui Motoor ripristina il tuo libretto quando accedi da un nuovo telefono. Comprende le tue voci, gli allegati e gli scontrini.

I dati sono crittografati in transito tra il telefono e il nostro server, e crittografati a riposo su Google Cloud. Solo tu puoi leggere il tuo libretto tramite l’app. Accediamo ai dati memorizzati solo quando ci chiedi aiuto o quando dobbiamo correggere un guasto.

## Scansione degli scontrini (Premium)

Quando scansioni uno scontrino, Motoor ne legge i totali, la data e il luogo, così non devi digitarli. Controlli ogni campo prima che venga salvato qualsiasi cosa. Il contachilometri non viene mai letto da uno scontrino.

- **Sul telefono, quando possibile.** Se il tuo telefono dispone di un modello integrato in grado di leggere gli scontrini, Motoor lo usa e la lettura avviene sul dispositivo.
- **Altrimenti, sul nostro server.** L’immagine o il PDF viene caricato sul nostro server, che lo invia al **modello Gemini di Google su Google Cloud**, in {{ t.privacy.scan_location }}. Usiamo il servizio a pagamento di Google, i cui termini non consentono a Google di usare i dati per addestrare i propri modelli. I campi estratti tornano sul tuo telefono.

In entrambi i casi, la scansione viene conservata con la voce come allegato ed è salvata come il resto del tuo libretto.

## Condividere e trasferire un veicolo (Premium)

**Condividi storico** crea un link e un codice QR verso una pagina web di sola lettura con le voci, le date, le letture del contachilometri e i totali del veicolo. Non mostra dati dell’account. Chiunque abbia il link può aprirlo finché non scade dopo 24 ore o finché non lo revochi.

**Trasferisci proprietà** crea un codice monouso che scade dopo 24 ore. Il primo utente Premium che lo apre riceve il veicolo con il suo storico e gli scontrini, e tu vedi il suo nome e quando lo ha riscattato. La tua copia diventa di sola lettura.

{% if p.crash_reporting != "" %}
## Report sugli arresti anomali

Se Motoor si arresta in modo anomalo, **{{ p.crash_reporting }}** ci invia un report così possiamo risolvere il problema. Un report contiene solo dettagli tecnici: modello del dispositivo, versione del sistema operativo, versione dell’app, l’ora dell’arresto e lo stato del codice in quel momento. Non contiene i tuoi veicoli, le tue registrazioni o le tue foto.
{% endif %}

{% if p.analytics != "" %}
## Statistiche di utilizzo

Motoor usa **{{ p.analytics }}** per misurare come viene usata l’app, ad esempio quante persone completano l’aggiunta di un veicolo, registrano il primo rifornimento o aprono la schermata Premium e quale piano scelgono. Queste statistiche sono legate a un ID casuale dell’istanza dell’app, non al tuo nome o alla tua email, e non contengono le voci del tuo libretto.
{% endif %}

## Acquisti

Se acquisti Premium, il pagamento è gestito interamente da **Google Play** o dall’**Apple App Store**. Non vediamo mai la tua carta né i tuoi dati di pagamento. Lo store ci comunica solo se hai un acquisto attivo, così Premium può essere sbloccato e ripristinato sugli altri tuoi dispositivi.

## Chi altro tratta i tuoi dati

Non vendiamo le tue informazioni personali e non le condividiamo a fini pubblicitari. Questi fornitori trattano i dati per nostro conto, solo per far funzionare Motoor:

| Fornitore | Cosa fa | Dati trattati |
|---|---|---|
| Google Cloud | Ospita il nostro server, il database e l’archiviazione dei file a {{ t.privacy.data_location }} | Il tuo account e il backup del libretto |
| Google Cloud (Gemini) | Legge gli scontrini che non è possibile leggere sul telefono | Lo scontrino che scansioni |
| Firebase Authentication (Google) | Accesso con Google o Apple | Nome, email, ID account |
| Firebase Cloud Messaging (Google) | Invia le notifiche push | Token push del dispositivo |
{% if p.crash_reporting != "" %}| {{ p.crash_reporting }} (Google) | Report sugli arresti anomali | Dettagli tecnici dell’arresto |
{% endif %}{% if p.analytics != "" %}| {{ p.analytics }} (Google) | Statistiche di utilizzo | ID dell’istanza dell’app ed eventi delle funzioni |
{% endif %}| Google Play, Apple App Store | Abbonamenti e pagamenti | Stato dell’acquisto |

I servizi Firebase sono gestiti da Google e possono trattare dati al di fuori dell’Indonesia. I tassi di cambio per la conversione di valuta provengono dal nostro server; recuperarli non invia nulla che ti riguardi.

## Autorizzazioni richieste da Motoor

| Autorizzazione | Perché | Se rifiuti |
|---|---|---|
| Notifiche | Per ricordarti quando è previsto un intervento | I promemoria vengono comunque mostrati nell’app |
| Fotocamera | Per fotografare scontrini e veicoli | Puoi scegliere foto o file esistenti |
| Foto e file | Per allegare una foto o un PDF che hai già | Puoi usare la fotocamera |

Motoor non chiede l’accesso alla tua posizione, ai contatti, al microfono o al registro chiamate. Se attivi il blocco biometrico, l’impronta digitale o il volto vengono verificati dal telefono; Motoor non li riceve mai.

## Come usiamo le informazioni

Usiamo le tue informazioni solo per:

- conservare il tuo libretto sul telefono e salvarlo, così puoi ripristinarlo
- inviare promemoria e avvisi
- leggere gli scontrini che scansioni
- creare le pagine di condivisione e i trasferimenti che richiedi
- sbloccare e ripristinare Premium
{% if p.crash_reporting != "" or p.analytics != "" %}- trovare e correggere bug e migliorare l’app
{% endif %}- rispondere alle tue richieste di assistenza

## Le tue scelte e i tuoi diritti

In base alla legge indonesiana sulla protezione dei dati personali (Legge n. 27 del 2022) e a leggi analoghe del paese in cui vivi, hai il diritto di accedere ai tuoi dati personali, correggerli, ottenerne la cancellazione e revocare il consenso. In Motoor:

- **Accesso e copia:** esporta il tuo libretto in CSV, oppure come storico degli interventi in PDF con gli scontrini allegati, da **Impostazioni → Esportazione e backup**.
- **Rettifica:** modifica qualsiasi veicolo, voce o promemoria nell’app, e il tuo nome in **Impostazioni → Profilo**.
- **Cancellazione:** elimina singole voci nell’app, oppure elimina l’intero account (vedi sotto).

Per qualsiasi altra richiesta, scrivi a [{{ dev.email }}](mailto:{{ dev.email }}).

## Eliminare il tuo account

Apri **Impostazioni → Profilo → Elimina account** e conferma. Se non hai più l’app, puoi chiedercelo via email; consulta la [pagina di assistenza]({{ '/it/support/#delete-your-data' | relative_url }}).

- Il tuo account viene **bloccato immediatamente**, e i link di condivisione e i trasferimenti aperti smettono di funzionare.
- Per **{{ p.deletion_grace_days }} giorni** puoi cambiare idea: accedi di nuovo e scegli **Ripristina**.
- Dopo {{ p.deletion_grace_days }} giorni, il tuo account, il backup del libretto, gli allegati, gli scontrini e le scansioni vengono **eliminati definitivamente** dal nostro server, e il tuo account di accesso viene rimosso. Le copie nei nostri backup di disaster recovery scadono entro ulteriori {{ p.backup_expiry_days }} giorni.
- L’eliminazione dell’account non annulla l’abbonamento. Annullalo su Google Play o sull’App Store, che conservano i propri registri degli acquisti.

Eliminare l’app dal telefono rimuove solo la copia sul telefono. Il backup resta finché non elimini il tuo account.

## Per quanto tempo conserviamo le informazioni

| Informazione | Conservata |
|---|---|
| Il tuo account e il backup del libretto | Finché non elimini l’account, poi per {{ p.deletion_grace_days }} giorni, quindi rimossi (le copie di backup scadono {{ p.backup_expiry_days }} giorni dopo) |
| Una singola voce, veicolo o foto che elimini | Rimossa subito dai tuoi dispositivi e dal nostro server entro 90 giorni |
| Link di condivisione e di trasferimento | Finché non scadono dopo 24 ore o vengono revocati, poi conservati come registro fino all’eliminazione dell’account |
{% if p.crash_reporting != "" %}| Report sugli arresti anomali | Fino a 90 giorni |
{% endif %}{% if p.analytics != "" %}| Statistiche di utilizzo | {{ t.privacy.analytics_retention }} |
{% endif %}| Email di assistenza | 12 mesi dopo l’ultimo messaggio |

## Sicurezza

Il tuo libretto sul telefono è conservato nello spazio di archiviazione privato di Motoor, che le altre app non possono leggere, e puoi aggiungere un blocco biometrico. Tutto ciò che Motoor invia via internet è crittografato. I link di condivisione e di trasferimento usano lunghi codici casuali impossibili da indovinare, e conserviamo solo un’impronta (hash) di ciascun codice. Tieni il telefono bloccato con PIN, impronta digitale o riconoscimento del volto per proteggere ciò che contiene.

## Minori

Motoor è pensato per chi possiede o si occupa di un veicolo e non è rivolto a minori di {{ p.min_age }} anni. Non raccogliamo consapevolmente informazioni personali di minori. Se ritieni che un minore ci abbia fornito informazioni, scrivici e le elimineremo.

## Modifiche a questa informativa

Se modifichiamo questa informativa, aggiorneremo la data in cima a questa pagina. Se una modifica riguarda cosa raccogliamo o chi lo tratta, Motoor te lo comunicherà anche all’interno dell’app prima che la modifica entri in vigore.

## Contatti

Per domande sulla privacy scrivi a **{{ dev.name }}** all’indirizzo [{{ dev.email }}](mailto:{{ dev.email }}). Rispondiamo {{ t.ui.response_time }}.
