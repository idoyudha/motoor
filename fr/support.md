---
layout: page
title: Assistance
eyebrow: Aide
permalink: /fr/support/
ref: /support/
lang: fr
lede: Les réponses aux questions fréquentes, et une ligne directe avec la personne qui crée Motoor.
description: Les réponses aux questions fréquentes, et une ligne directe avec la personne qui crée Motoor.
---
{% assign dev = site.developer %}
{% assign t = site.data.i18n[page.lang] %}

<div class="mt-contact">
  <p class="mt-eyebrow">Contact</p>
  <p style="margin:0">Écrivez à <a href="mailto:{{ dev.email }}">{{ dev.email }}</a> et vous recevrez une réponse {{ t.ui.response_time }}. Pensez à indiquer le modèle de votre téléphone, si vous utilisez Android ou iOS, et la version de Motoor affichée dans <strong>Réglages → À propos</strong>.</p>
  <a class="mt-btn mt-btn--filled mt-btn--small" href="mailto:{{ dev.email }}?subject=Motoor%20support">{% include icon.html name="mail" %}Écrire à l’assistance</a>
</div>

## Questions fréquentes

<details class="mt-faq">
<summary>Les rappels n’apparaissent pas sur mon téléphone</summary>
<div>
<p>Vérifiez que les notifications sont activées pour Motoor dans les réglages de votre téléphone. Sur Android, certains téléphones arrêtent aussi les applications en arrière-plan pour économiser la batterie : ouvrez <strong>Paramètres → Applications → Motoor → Batterie</strong> et choisissez <strong>Sans restriction</strong>. Les rappels apparaissent toujours dans l’application, dans l’onglet <strong>Rappels</strong>, même lorsque les notifications sont désactivées.</p>
</div>
</details>

<details class="mt-faq">
<summary>Comment Motoor détermine-t-il quand un entretien est dû ?</summary>
<div>
<p>Lorsque vous ajoutez un véhicule, Motoor propose un programme d’entretien adapté à sa marque, sa catégorie et sa motorisation, chaque élément étant dû selon la distance ou la date, au premier des deux termes atteint. Chaque élément indique d’où vient son intervalle. Quelle que soit la formule, vous pouvez décocher les éléments dont vous n’avez pas besoin. Avec Premium, vous pouvez aussi renommer les éléments, modifier leurs intervalles et ajouter les vôtres. Tenez le compteur à jour en enregistrant vos pleins ou entretiens, pour que les rappels basés sur la distance restent précis.</p>
</div>
</details>

<details class="mt-faq">
<summary>J’ai acheté Premium mais il n’est pas débloqué</summary>
<div>
<p>Ouvrez <strong>Réglages → Premium → Restaurer l’achat</strong> en étant connecté au même compte Google ou Apple que celui utilisé pour l’achat. Si cela ne fonctionne pas, écrivez-nous en indiquant le numéro de commande figurant sur votre reçu Google Play ou App Store.</p>
</div>
</details>

<details class="mt-faq">
<summary>Comment résilier Premium ?</summary>
<div>
<p>Les abonnements sont gérés par la boutique, et non par Motoor.</p>
<ul>
<li><strong>Android :</strong> ouvrez le Play Store, touchez votre photo de profil, puis <strong>Paiements et abonnements → Abonnements → Motoor → Résilier l’abonnement</strong>.</li>
<li><strong>iOS :</strong> ouvrez <strong>Réglages</strong>, touchez votre nom, puis <strong>Abonnements → Motoor → Annuler l’abonnement</strong>.</li>
</ul>
<p>À la fin de la période de facturation, les limites de Free s’appliquent de nouveau, mais rien n’est supprimé. Votre premier véhicule reste actif (vous pouvez en choisir un autre), et les autres passent en lecture seule jusqu’à ce que vous vous réabonniez. Chaque entrée et chaque pièce jointe sont conservées, sur votre téléphone et dans votre sauvegarde.</p>
</div>
</details>

<details class="mt-faq">
<summary>Puis-je obtenir un remboursement ?</summary>
<div>
<p>Les remboursements sont gérés par la boutique où vous avez effectué l’achat. Sur Android, faites une demande via la <a href="https://support.google.com/googleplay/answer/2479637">page de remboursement de Google Play</a>. Sur iOS, utilisez <a href="https://reportaproblem.apple.com">reportaproblem.apple.com</a>.</p>
</div>
</details>

<details class="mt-faq">
<summary>Mon carnet est-il sauvegardé ?</summary>
<div>
<p>Oui, automatiquement, en Free comme en Premium. Vos véhicules, entrées, rappels, pièces jointes et tickets sont sauvegardés sur notre serveur dès que vous êtes en ligne. Sur un nouveau téléphone, connectez-vous avec le même compte Google ou Apple et votre carnet revient. Pour en savoir plus, consultez la <a href="{{ '/fr/privacy/' | relative_url }}">politique de confidentialité</a>.</p>
</div>
</details>

<details class="mt-faq">
<summary>Motoor fonctionne-t-il hors ligne ?</summary>
<div>
<p>Oui. Votre carnet est stocké sur votre téléphone : vous pouvez enregistrer vos pleins, entretiens et dépenses, consulter votre historique et recevoir des rappels sans connexion. Les modifications sont sauvegardées automatiquement dès que vous êtes de nouveau en ligne. La connexion au compte, le scan des tickets, ainsi que le partage et le transfert d’un véhicule nécessitent une connexion.</p>
</div>
</details>

<details class="mt-faq">
<summary>J’ai une idée ou j’ai trouvé un bug</summary>
<div>
<p>Écrivez-nous à <a href="mailto:{{ dev.email }}">{{ dev.email }}</a>. Pour un bug, indiquez ce que vous avez fait, ce que vous attendiez et ce qui s’est passé à la place. Une capture d’écran aide beaucoup.</p>
</div>
</details>

## Supprimer vos données {#delete-your-data}

La suppression de votre compte efface votre carnet de votre téléphone et, au bout de {{ site.privacy.deletion_grace_days }} jours, définitivement de notre serveur. Vous avez deux possibilités.

**Dans l’application :** ouvrez **Réglages → Profil → Supprimer le compte** et confirmez. Votre compte est verrouillé immédiatement et les liens de partage cessent de fonctionner.

**Sans l’application :** écrivez à [{{ dev.email }}](mailto:{{ dev.email }}?subject=Delete%20my%20account) avec l’objet « Delete my account » (Supprimer mon compte), depuis l’adresse e-mail avec laquelle vous vous connectez. Nous confirmerons par e-mail {{ t.ui.response_time }} et programmerons la suppression, qui se déroule ensuite de la même façon.

Et ensuite :

1. **Pendant {{ site.privacy.deletion_grace_days }} jours, vous pouvez changer d’avis.** Connectez-vous à Motoor et choisissez **Restaurer**. Votre carnet revient tel qu’il était.
2. **Au bout de {{ site.privacy.deletion_grace_days }} jours**, votre compte, la sauvegarde de votre carnet, vos pièces jointes, tickets et scans sont supprimés définitivement, et votre compte de connexion est supprimé. Les copies dans nos sauvegardes de reprise après sinistre expirent dans un délai supplémentaire de {{ site.privacy.backup_expiry_days }} jours. Cette action est irréversible.
3. **Votre abonnement n’est pas résilié automatiquement.** Résiliez-le d’abord dans Google Play ou l’App Store (voir ci-dessus).

Désinstaller Motoor ne supprime que la copie présente sur votre téléphone. Votre sauvegarde est conservée jusqu’à ce que vous supprimiez votre compte.

Si vous nous avez écrit et souhaitez que ces échanges soient supprimés, écrivez à [{{ dev.email }}](mailto:{{ dev.email }}?subject=Delete%20my%20emails) avec l’objet « Delete my emails » (Supprimer mes e-mails). Nous les supprimerons sous 30 jours et vous le confirmerons par e-mail.

Pour en savoir plus, consultez la [politique de confidentialité]({{ '/fr/privacy/' | relative_url }}).
