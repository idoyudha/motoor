---
layout: page
title: サポート
permalink: /ja/support/
ref: /support/
lang: ja
lede: よくある質問への回答と、Motoor の開発者に直接連絡できる窓口です。
description: よくある質問への回答と、Motoor の開発者に直接連絡できる窓口です。
---
{% assign dev = site.developer %}
{% assign t = site.data.i18n[page.lang] %}

<div class="mt-contact">
  <h2 class="mt-contact__title">お問い合わせ</h2>
  <p style="margin:0"><a href="mailto:{{ dev.email }}">{{ dev.email }}</a> までメールをお送りください。{{ t.ui.response_time }}返信します。スマートフォンの機種、Android と iOS のどちらをお使いか、そして <strong>設定 → アプリについて</strong> に表示される Motoor のバージョンを添えていただけると助かります。</p>
  <a class="mt-btn mt-btn--filled mt-btn--small" href="mailto:{{ dev.email }}?subject=Motoor%20support">{% include icon.html name="mail" %}メールでサポートに問い合わせる</a>
</div>

## よくある質問

<details class="mt-faq">
<summary>スマートフォンにリマインダーが表示されない</summary>
<div>
<p>スマートフォンの設定で、Motoor の通知がオンになっているか確認してください。Android では、バッテリー節約のためにバックグラウンドでのアプリの動作を停止する機種もあります。<strong>設定 → アプリ → Motoor → バッテリー</strong> を開き、<strong>制限なし</strong> を選択してください。通知がオフの場合でも、リマインダーは常にアプリ内の <strong>リマインダー</strong> タブに表示されます。</p>
</div>
</details>

<details class="mt-faq">
<summary>Motoor は整備の時期をどのように判断していますか？</summary>
<div>
<p>車両を追加すると、Motoor はメーカー、車種、パワートレインに応じた整備スケジュールを提案します。各項目は、距離または日付のどちらか早いほうで期限になります。各項目には、その間隔の根拠が表示されます。どのプランでも、不要な項目のチェックを外すことができます。Premium では、項目の名前の変更、間隔の変更、独自の項目の追加もできます。距離に基づくリマインダーを正確に保つため、給油や整備を記録して走行距離を最新の状態にしておいてください。</p>
</div>
</details>

<details class="mt-faq">
<summary>Premium を購入したのに有効になっていない</summary>
<div>
<p>購入時と同じアカウントでログインした状態で、<strong>設定 → Premium → 購入を復元</strong> を開いてください。それでも解決しない場合は、Google Play または App Store のレシートに記載された注文番号を添えて、メールでご連絡ください。</p>
</div>
</details>

<details class="mt-faq">
<summary>Premium を解約するには？</summary>
<div>
<p>サブスクリプションは Motoor ではなく、ストアで管理されています。</p>
<ul>
<li><strong>Android：</strong>Play ストアを開き、プロフィール写真をタップしてから、<strong>お支払いと定期購入 → 定期購入 → Motoor → 定期購入を解約</strong> の順に進みます。</li>
<li><strong>iOS：</strong><strong>設定</strong> を開き、お名前をタップしてから、<strong>サブスクリプション → Motoor → サブスクリプションをキャンセルする</strong> の順に進みます。</li>
</ul>
<p>請求期間が終了すると Free の制限が再び適用されますが、データは何も削除されません。最初の車両は引き続き有効で（別の車両を選ぶこともできます）、それ以外の車両は再度サブスクリプションに登録するまで閲覧専用になります。すべての記録と添付ファイルは、スマートフォンとバックアップの両方に保持されます。</p>
</div>
</details>

<details class="mt-faq">
<summary>返金はできますか？</summary>
<div>
<p>返金は、購入したストアが対応します。Android の場合は、<a href="https://support.google.com/googleplay/answer/2479637">Google Play の返金ページ</a>からリクエストしてください。iOS の場合は、<a href="https://reportaproblem.apple.com">reportaproblem.apple.com</a> をご利用ください。</p>
</div>
</details>

<details class="mt-faq">
<summary>ログブックはバックアップされていますか？</summary>
<div>
<p>はい、Free・Premium のどちらでも自動でバックアップされます。オンラインのときはいつでも、車両、記録、リマインダー、添付ファイル、レシートが当方のサーバーにバックアップされます。新しいスマートフォンで同じアカウントでログインすれば、ログブックが戻ってきます。詳しくは<a href="{{ '/ja/privacy/' | relative_url }}">プライバシーポリシー</a>をご覧ください。</p>
</div>
</details>

<details class="mt-faq">
<summary>Motoor はオフラインでも使えますか？</summary>
<div>
<p>はい。ログブックはスマートフォンに保存されているため、オフラインでも給油、整備、費用の記録、履歴の確認、リマインダーの受け取りができます。変更内容は、再びオンラインになったときに自動でバックアップされます。ログイン、レシートのスキャン、車両の共有と譲渡にはインターネット接続が必要です。</p>
</div>
</details>

<details class="mt-faq">
<summary>アイデアがある / 不具合を見つけた</summary>
<div>
<p><a href="mailto:{{ dev.email }}">{{ dev.email }}</a> までメールでお知らせください。不具合の場合は、何をしたか、どうなると思っていたか、実際に何が起きたかを教えてください。スクリーンショットがあると大変助かります。</p>
</div>
</details>

## データの削除 {#delete-your-data}

アカウントを削除すると、ログブックはスマートフォンから削除され、{{ site.privacy.deletion_grace_days }} 日後には当方のサーバーからも完全に削除されます。削除方法は 2 つあります。

**アプリで削除する場合：** **設定 → プロフィール → アカウントを削除** を開き、確認します。アカウントはただちにロックされ、共有リンクはすべて無効になります。

**アプリを使わずに削除する場合：** ログインに使用しているメールアドレスから、件名を「Delete my account」（アカウントを削除）として [{{ dev.email }}](mailto:{{ dev.email }}?subject=Delete%20my%20account) までメールをお送りください。{{ t.ui.response_time }}メールで確認のご連絡をし、削除の手続きを行います。その後の流れはアプリで削除した場合と同じです。

その後の流れ：

1. **{{ site.privacy.deletion_grace_days }} 日間は取り消すことができます。** Motoor にログインして**復元**を選択してください。ログブックは元の状態に戻ります。
2. **{{ site.privacy.deletion_grace_days }} 日が経過すると**、アカウント、ログブックのバックアップ、添付ファイル、レシート、スキャンは完全に削除され、ログインアカウントも削除されます。災害復旧用バックアップ内のコピーは、その後さらに {{ site.privacy.backup_expiry_days }} 日以内に失効します。この操作は元に戻せません。
3. **サブスクリプションは自動では解約されません。** 先に Google Play または App Store で解約してください（上記参照）。

Motoor をアンインストールしても、削除されるのはスマートフォン上のコピーのみです。バックアップは、アカウントを削除するまで残ります。

当方にメールを送ったことがあり、そのやり取りの削除をご希望の場合は、件名を「Delete my emails」（メールを削除）として [{{ dev.email }}](mailto:{{ dev.email }}?subject=Delete%20my%20emails) までお送りください。30 日以内に削除し、メールで確認のご連絡をします。

詳しくは[プライバシーポリシー]({{ '/ja/privacy/' | relative_url }})をご覧ください。
