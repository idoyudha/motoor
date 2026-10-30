---
layout: page
title: Suporte
permalink: /pt/support/
ref: /support/
lang: pt
lede: Respostas para dúvidas comuns e um canal direto com a pessoa que faz o Motoor.
description: Respostas para dúvidas comuns e um canal direto com a pessoa que faz o Motoor.
---
{% assign dev = site.developer %}
{% assign t = site.data.i18n[page.lang] %}

<div class="mt-contact">
  <h2 class="mt-contact__title">Contato</h2>
  <p style="margin:0">Envie um e-mail para <a href="mailto:{{ dev.email }}">{{ dev.email }}</a> e você receberá resposta {{ t.ui.response_time }}. Ajuda incluir o modelo do seu celular, se você usa Android ou iOS, e a versão do Motoor que aparece em <strong>Configurações → Sobre</strong>.</p>
  <a class="mt-btn mt-btn--filled mt-btn--small" href="mailto:{{ dev.email }}?subject=Motoor%20support">{% include icon.html name="mail" %}Enviar e-mail ao suporte</a>
</div>

## Perguntas frequentes

<details class="mt-faq">
<summary>Os lembretes não aparecem no meu celular</summary>
<div>
<p>Verifique se as notificações do Motoor estão ativadas nas configurações do celular. No Android, alguns celulares também interrompem apps em segundo plano para economizar bateria: abra <strong>Configurações → Apps → Motoor → Bateria</strong> e escolha <strong>Sem restrições</strong>. Os lembretes sempre aparecem dentro do app, na aba <strong>Lembretes</strong>, mesmo com as notificações desativadas.</p>
</div>
</details>

<details class="mt-faq">
<summary>Como o Motoor decide quando uma revisão está próxima?</summary>
<div>
<p>Quando você adiciona um veículo, o Motoor propõe um plano de manutenção de acordo com a marca, o tipo e a motorização, com cada item vencendo por distância ou por data, o que vier primeiro. Cada item mostra de onde vem o seu intervalo. Em qualquer plano você pode desmarcar os itens de que não precisa. Com o Premium você também pode renomear itens, alterar os intervalos e adicionar os seus. Mantenha o hodômetro atualizado registrando abastecimentos ou serviços para que os lembretes por distância continuem precisos.</p>
</div>
</details>

<details class="mt-faq">
<summary>Comprei o Premium, mas ele não foi desbloqueado</summary>
<div>
<p>Abra <strong>Configurações → Premium → Restaurar compra</strong> estando conectado à mesma conta usada na compra. Se não funcionar, envie-nos um e-mail com o número do pedido do seu recibo do Google Play ou da App Store.</p>
</div>
</details>

<details class="mt-faq">
<summary>Como cancelo o Premium?</summary>
<div>
<p>As assinaturas são gerenciadas pela loja, não pelo Motoor.</p>
<ul>
<li><strong>Android:</strong> abra a Play Store, toque na sua foto de perfil e depois em <strong>Pagamentos e assinaturas → Assinaturas → Motoor → Cancelar assinatura</strong>.</li>
<li><strong>iOS:</strong> abra os <strong>Ajustes</strong>, toque no seu nome e depois em <strong>Assinaturas → Motoor → Cancelar Assinatura</strong>.</li>
</ul>
<p>Quando o período de cobrança termina, os limites do Free voltam a valer, mas nada é excluído. Seu primeiro veículo continua ativo (você pode escolher outro), e os demais passam a ser somente leitura até você assinar novamente. Todos os registros e anexos são mantidos, no seu celular e no seu backup.</p>
</div>
</details>

<details class="mt-faq">
<summary>Posso pedir reembolso?</summary>
<div>
<p>Os reembolsos são tratados pela loja onde você comprou. No Android, solicite pela <a href="https://support.google.com/googleplay/answer/2479637">página de reembolso do Google Play</a>. No iOS, use <a href="https://reportaproblem.apple.com">reportaproblem.apple.com</a>.</p>
</div>
</details>

<details class="mt-faq">
<summary>Meu registro tem backup?</summary>
<div>
<p>Sim, automaticamente, tanto no Free quanto no Premium. Seus veículos, registros, lembretes, anexos e comprovantes têm backup no nosso servidor sempre que você está online. Em um celular novo, entre com a mesma conta e seu registro volta. Saiba mais na <a href="{{ '/pt/privacy/' | relative_url }}">política de privacidade</a>.</p>
</div>
</details>

<details class="mt-faq">
<summary>O Motoor funciona offline?</summary>
<div>
<p>Sim. Seu registro fica armazenado no celular, então você pode registrar combustível, serviços e gastos, ver seu histórico e receber lembretes sem conexão. As alterações têm backup automático quando você fica online de novo. Entrar na conta, escanear comprovantes, compartilhar e transferir um veículo exigem conexão.</p>
</div>
</details>

<details class="mt-faq">
<summary>Tenho uma ideia ou encontrei um bug</summary>
<div>
<p>Envie um e-mail para <a href="mailto:{{ dev.email }}">{{ dev.email }}</a>. Para bugs, conte o que você fez, o que esperava e o que aconteceu. Uma captura de tela ajuda muito.</p>
</div>
</details>

## Excluir seus dados {#delete-your-data}

Excluir sua conta remove seu registro do seu celular e, após {{ site.privacy.deletion_grace_days }} dias, do nosso servidor de vez. Há duas formas de fazer isso.

**No app:** abra **Configurações → Perfil → Excluir conta** e confirme. Sua conta é bloqueada imediatamente e os links de compartilhamento deixam de funcionar.

**Sem o app:** envie um e-mail para [{{ dev.email }}](mailto:{{ dev.email }}?subject=Delete%20my%20account) com o assunto “Delete my account” (Excluir minha conta), a partir do endereço de e-mail que você usa para entrar. Confirmaremos por e-mail {{ t.ui.response_time }} e agendaremos a exclusão, que então funciona da mesma forma.

O que acontece em seguida:

1. **Durante {{ site.privacy.deletion_grace_days }} dias você pode mudar de ideia.** Entre no Motoor e escolha **Restaurar**. Seu registro volta como estava.
2. **Após {{ site.privacy.deletion_grace_days }} dias**, sua conta, o backup do seu registro, os anexos, os comprovantes e as digitalizações são excluídos permanentemente, e sua conta de login é removida. As cópias em nossos backups de recuperação de desastres expiram em mais {{ site.privacy.backup_expiry_days }} dias. Isso não pode ser desfeito.
3. **Sua assinatura não é cancelada automaticamente.** Cancele-a primeiro no Google Play ou na App Store (veja acima).

Desinstalar o Motoor remove apenas a cópia do seu celular. Seu backup permanece até você excluir sua conta.

Se você nos enviou e-mails e quer que essa correspondência seja excluída, escreva para [{{ dev.email }}](mailto:{{ dev.email }}?subject=Delete%20my%20emails) com o assunto “Delete my emails” (Excluir meus e-mails). Vamos excluí-la em até 30 dias e confirmar por e-mail.

Saiba mais na [política de privacidade]({{ '/pt/privacy/' | relative_url }}).
