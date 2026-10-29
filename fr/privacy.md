---
layout: page
title: Politique de confidentialité
permalink: /fr/privacy/
ref: /privacy/
lang: fr
privacy_date: true
lede: Ce que Motoor collecte, où c’est conservé, qui d’autre y a accès et comment le supprimer.
description: Ce que Motoor collecte, où c’est conservé, qui d’autre y a accès et comment le supprimer.
---
{% assign p = site.privacy %}
{% assign dev = site.developer %}
{% assign t = site.data.i18n[page.lang] %}
{% comment %}
  Before publishing: read this page end to end and check every statement is true
  for your build. The switches under `privacy:` in _config.yml fill in the details.
  This is a starting point, not legal advice.
{% endcomment %}

<p class="mt-doc__meta">Ceci est une traduction. En cas de divergence avec la <a href="{{ '/privacy/' | relative_url }}">version anglaise</a>, la version anglaise fait foi.</p>

<div class="mt-note"><strong>En bref.</strong> Vous vous connectez avec Google ou Apple. Votre carnet est conservé sur votre téléphone et sauvegardé automatiquement sur notre serveur à {{ t.privacy.data_location }}, pour que vous puissiez le restaurer sur un nouveau téléphone. Motoor n’affiche aucune publicité et nous ne vendons pas vos données. Vous pouvez supprimer votre compte et tout son contenu à tout moment.</div>

## Qui sommes-nous

Motoor est une application créée et publiée par **{{ dev.name }}**, un développeur indépendant (« nous »). Nous sommes responsables de la manière dont Motoor traite vos informations. Vous pouvez nous écrire à [{{ dev.email }}](mailto:{{ dev.email }}).

Cette politique s’applique à l’application Motoor sur Android et iOS, aux pages de partage créées par Motoor et à ce site web.

## Ce que nous collectons

**Votre compte.** Pour ajouter un véhicule, vous vous connectez avec Google, ou avec Apple sur iOS. Cette connexion nous transmet votre nom, votre adresse e-mail et un identifiant de compte. Nous ne voyons jamais votre mot de passe Google ou Apple.

**Votre carnet.** Tout ce que vous saisissez dans Motoor :

- véhicules : marque, modèle, catégorie, nom, immatriculation, année, relevés du compteur, notes et photos
- pleins et recharges, entretiens, dépenses, lieux et notes
- rappels et leurs échéances
- tickets, scans et autres fichiers que vous joignez
- vos réglages, comme les unités, la devise, la langue et le thème

**Votre appareil.** Un jeton de notification push, pour que les rappels et alertes arrivent sur votre téléphone, et la plateforme (Android ou iOS).

**Achats.** Si vous avez un abonnement Premium actif, tel que communiqué par Google Play ou l’App Store.

{% if p.crash_reporting != "" %}**Rapports de plantage.** Des détails techniques lorsque l’application plante (voir ci-dessous).
{% endif %}
{% if p.analytics != "" %}**Statistiques d’utilisation.** Les fonctionnalités utilisées (voir ci-dessous).
{% endif %}

**Les e-mails que vous nous envoyez.** Votre adresse et ce que vous écrivez.

## Où votre carnet est conservé

Votre carnet est stocké sur votre téléphone, dans l’espace de stockage privé de Motoor, pour que l’application fonctionne sans connexion.

Il est aussi **sauvegardé automatiquement** sur notre serveur Google Cloud à **{{ t.privacy.data_location }}**. Cela concerne tous les utilisateurs connectés, en Free comme en Premium, et il n’existe aucune option pour le désactiver : c’est grâce à cette sauvegarde que Motoor restaure votre carnet lorsque vous vous connectez sur un nouveau téléphone. Elle comprend vos entrées, pièces jointes et tickets.

Les données sont chiffrées pendant leur transfert entre votre téléphone et notre serveur, et chiffrées au repos sur Google Cloud. Vous seul pouvez lire votre carnet via l’application. Nous n’accédons aux données stockées que lorsque vous nous demandez de l’aide, ou lorsque nous devons corriger un problème.

## Scan des tickets (Premium)

Lorsque vous scannez un ticket, Motoor y lit les montants, la date et le lieu pour vous éviter de les saisir. Vous vérifiez chaque champ avant tout enregistrement. Le kilométrage n’est jamais lu sur un ticket.

- **Sur votre téléphone, si possible.** Si votre téléphone dispose d’un modèle intégré capable de lire les tickets, Motoor l’utilise et la lecture se fait sur l’appareil.
- **Sinon, sur notre serveur.** L’image ou le PDF est envoyé à notre serveur, qui le transmet au **modèle Gemini de Google sur Google Cloud**, en {{ t.privacy.scan_location }}. Nous utilisons le service payant de Google, dont les conditions n’autorisent pas Google à utiliser les données pour entraîner ses modèles. Les champs extraits reviennent sur votre téléphone.

Dans les deux cas, le scan est conservé avec l’entrée en pièce jointe, et sauvegardé comme le reste de votre carnet.

## Partager et transférer un véhicule (Premium)

**Partager l’historique** crée un lien et un QR code vers une page web en lecture seule contenant les entrées, dates, relevés du compteur et totaux du véhicule. Elle n’affiche aucune information de compte. Toute personne disposant du lien peut l’ouvrir jusqu’à son expiration au bout de 24 heures, ou jusqu’à ce que vous le révoquiez.

**Transférer la propriété** crée un code à usage unique qui expire au bout de 24 heures. Le premier utilisateur Premium qui l’ouvre reçoit le véhicule avec son historique et ses tickets, et vous voyez son nom et le moment où il l’a récupéré. Votre copie passe en lecture seule.

{% if p.crash_reporting != "" %}
## Rapports de plantage

Si Motoor plante, **{{ p.crash_reporting }}** nous envoie un rapport de plantage pour que nous puissions corriger le problème. Un rapport contient uniquement des détails techniques : modèle de l’appareil, version du système d’exploitation, version de l’application, heure du plantage et état du code à ce moment-là. Il ne contient ni vos véhicules, ni vos entrées, ni vos photos.
{% endif %}

{% if p.analytics != "" %}
## Statistiques d’utilisation

Motoor utilise **{{ p.analytics }}** pour mesurer l’utilisation de l’application, par exemple combien de personnes terminent l’ajout d’un véhicule, enregistrent leur premier plein, ou ouvrent l’écran Premium et quelle formule elles choisissent. Ces statistiques sont liées à un identifiant aléatoire d’instance de l’application, et non à votre nom ou à votre e-mail, et elles ne contiennent pas les entrées de votre carnet.
{% endif %}

## Achats

Si vous achetez Premium, le paiement est entièrement géré par **Google Play** ou l’**Apple App Store**. Nous ne voyons jamais votre carte ni vos informations de paiement. La boutique nous indique seulement si vous avez un achat actif, afin que Premium puisse être débloqué et restauré sur vos autres appareils.

## Qui d’autre traite vos données

Nous ne vendons pas vos informations personnelles et ne les partageons pas à des fins publicitaires. Ces prestataires traitent des données pour notre compte, uniquement pour faire fonctionner Motoor :

| Prestataire | Rôle | Données traitées |
|---|---|---|
| Google Cloud | Héberge notre serveur, notre base de données et notre stockage de fichiers à {{ t.privacy.data_location }} | Votre compte et la sauvegarde de votre carnet |
| Google Cloud (Gemini) | Lit les tickets qui ne peuvent pas être lus sur votre téléphone | Le ticket que vous scannez |
| Firebase Authentication (Google) | Connexion avec Google ou Apple | Nom, e-mail, identifiant de compte |
| Firebase Cloud Messaging (Google) | Envoie les notifications push | Jeton push de l’appareil |
{% if p.crash_reporting != "" %}| {{ p.crash_reporting }} (Google) | Rapports de plantage | Détails techniques des plantages |
{% endif %}{% if p.analytics != "" %}| {{ p.analytics }} (Google) | Statistiques d’utilisation | Identifiant d’instance de l’application et événements liés aux fonctionnalités |
{% endif %}| Google Play, Apple App Store | Abonnements et paiement | Statut d’achat |

Les services Firebase sont exploités par Google et peuvent traiter des données en dehors de l’Indonésie. Les taux de change pour la conversion des devises proviennent de notre propre serveur ; leur récupération n’envoie aucune information vous concernant.

## Autorisations demandées par Motoor

| Autorisation | Pourquoi | Si vous refusez |
|---|---|---|
| Notifications | Pour vous rappeler qu’un entretien arrive à échéance | Les rappels restent visibles dans l’application |
| Appareil photo | Pour photographier les tickets et les véhicules | Vous pouvez plutôt choisir des photos ou fichiers existants |
| Photos et fichiers | Pour joindre une photo ou un PDF que vous avez déjà | Vous pouvez plutôt utiliser l’appareil photo |

Motoor ne demande pas l’accès à votre position, vos contacts, votre micro ni votre journal d’appels. Si vous activez le verrouillage biométrique, votre empreinte ou votre visage est vérifié par votre téléphone ; Motoor ne le reçoit jamais.

## Comment nous utilisons les informations

Nous utilisons vos informations uniquement pour :

- conserver votre carnet sur votre téléphone et le sauvegarder, pour que vous puissiez le restaurer
- envoyer des rappels et des alertes
- lire les tickets que vous scannez
- créer les pages de partage et les transferts que vous demandez
- débloquer et restaurer Premium
{% if p.crash_reporting != "" or p.analytics != "" %}- trouver et corriger les bugs et améliorer l’application
{% endif %}- répondre à vos demandes d’assistance

## Vos choix et vos droits

En vertu de la loi indonésienne sur la protection des données personnelles (loi n° 27 de 2022) et des lois similaires de votre pays de résidence, vous avez le droit d’accéder à vos données personnelles, de les rectifier, de les faire supprimer et de retirer votre consentement. Dans Motoor :

- **Accès et copie :** exportez votre carnet en CSV, ou sous forme d’historique d’entretien en PDF avec les tickets joints, depuis **Réglages → Export et sauvegarde**.
- **Rectification :** modifiez n’importe quel véhicule, entrée ou rappel dans l’application, et votre nom dans **Réglages → Profil**.
- **Suppression :** supprimez des entrées individuelles dans l’application, ou supprimez tout votre compte (voir ci-dessous).

Pour toute autre demande, écrivez à [{{ dev.email }}](mailto:{{ dev.email }}).

## Supprimer votre compte

Ouvrez **Réglages → Profil → Supprimer le compte** et confirmez. Si vous n’avez plus l’application, vous pouvez nous le demander par e-mail ; consultez la [page d’assistance]({{ '/fr/support/#delete-your-data' | relative_url }}).

- Votre compte est **verrouillé immédiatement**, et les liens de partage et transferts en cours cessent de fonctionner.
- Pendant **{{ p.deletion_grace_days }} jours**, vous pouvez changer d’avis : reconnectez-vous et choisissez **Restaurer**.
- Au bout de {{ p.deletion_grace_days }} jours, votre compte, la sauvegarde de votre carnet, vos pièces jointes, tickets et scans sont **supprimés définitivement** de notre serveur, et votre compte de connexion est supprimé. Les copies dans nos sauvegardes de reprise après sinistre expirent dans un délai supplémentaire de {{ p.backup_expiry_days }} jours.
- La suppression de votre compte n’annule pas votre abonnement. Annulez-le dans Google Play ou l’App Store, qui conservent leurs propres historiques d’achat.

Supprimer l’application de votre téléphone ne supprime que la copie présente sur le téléphone. Votre sauvegarde est conservée jusqu’à ce que vous supprimiez votre compte.

## Durée de conservation des informations

| Information | Conservation |
|---|---|
| Votre compte et la sauvegarde de votre carnet | Jusqu’à la suppression de votre compte, puis {{ p.deletion_grace_days }} jours, puis supprimés (les copies de sauvegarde expirent {{ p.backup_expiry_days }} jours plus tard) |
| Une entrée, un véhicule ou une photo que vous supprimez | Supprimé immédiatement de vos appareils et de notre serveur sous 90 jours |
| Liens de partage et de transfert | Jusqu’à leur expiration au bout de 24 heures ou leur révocation, puis conservés comme trace jusqu’à la suppression de votre compte |
{% if p.crash_reporting != "" %}| Rapports de plantage | Jusqu’à 90 jours |
{% endif %}{% if p.analytics != "" %}| Statistiques d’utilisation | {{ t.privacy.analytics_retention }} |
{% endif %}| E-mails d’assistance | 12 mois après le dernier message |

## Sécurité

Votre carnet sur le téléphone est conservé dans l’espace de stockage privé de Motoor, que les autres applications ne peuvent pas lire, et vous pouvez ajouter un verrouillage biométrique. Tout ce que Motoor envoie sur Internet est chiffré. Les liens de partage et de transfert utilisent de longs codes aléatoires impossibles à deviner, et nous ne conservons qu’une empreinte de chaque code. Verrouillez votre téléphone avec un code PIN, une empreinte ou la reconnaissance faciale pour protéger son contenu.

## Enfants

Motoor s’adresse aux personnes qui possèdent ou entretiennent un véhicule, et ne s’adresse pas aux enfants de moins de {{ p.min_age }} ans. Nous ne collectons pas sciemment d’informations personnelles auprès d’enfants. Si vous pensez qu’un enfant nous a communiqué des informations, écrivez-nous et nous les supprimerons.

## Modifications de cette politique

Si nous modifions cette politique, nous mettrons à jour la date en haut de cette page. Si une modification concerne ce que nous collectons ou qui le traite, Motoor vous en informera également dans l’application avant qu’elle ne prenne effet.

## Contact

Pour toute question sur la confidentialité, écrivez à **{{ dev.name }}** à [{{ dev.email }}](mailto:{{ dev.email }}). Nous répondons {{ t.ui.response_time }}.
