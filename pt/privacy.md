---
layout: page
title: Política de privacidade
eyebrow: Jurídico
permalink: /pt/privacy/
ref: /privacy/
lang: pt
privacy_date: true
lede: O que o Motoor coleta, onde fica armazenado, quem mais tem acesso e como excluir.
description: O que o Motoor coleta, onde fica armazenado, quem mais tem acesso e como excluir.
---
{% assign p = site.privacy %}
{% assign dev = site.developer %}
{% assign t = site.data.i18n[page.lang] %}
{% comment %}
  Before publishing: read this page end to end and check every statement is true
  for your build. The switches under `privacy:` in _config.yml fill in the details.
  This is a starting point, not legal advice.
{% endcomment %}

<p class="mt-doc__meta">Esta é uma tradução. Se houver divergência em relação à <a href="{{ '/privacy/' | relative_url }}">versão em inglês</a>, prevalece a versão em inglês.</p>

<div class="mt-note"><strong>Resumindo.</strong> Você entra com Google ou Apple. Seu registro fica no seu celular e tem backup automático no nosso servidor em {{ t.privacy.data_location }}, para que você possa restaurá-lo em um celular novo. O Motoor não exibe anúncios e não vendemos seus dados. Você pode excluir sua conta e tudo o que há nela a qualquer momento.</div>

## Quem somos

O Motoor é um app criado e publicado por **{{ dev.name }}**, um desenvolvedor independente (“nós”). Somos responsáveis pela forma como o Motoor trata suas informações. Você pode falar conosco em [{{ dev.email }}](mailto:{{ dev.email }}).

Esta política se aplica ao app Motoor no Android e no iOS, às páginas de compartilhamento que o Motoor cria e a este site.

## O que coletamos

**Sua conta.** Para adicionar um veículo, você entra com Google, ou com Apple no iOS. Desse login recebemos seu nome, seu endereço de e-mail e um ID de conta. Nunca vemos sua senha do Google ou da Apple.

**Seu registro.** Tudo o que você coloca no Motoor:

- veículos: marca, modelo, tipo, nome, placa, ano, leituras do hodômetro, notas e fotos
- abastecimentos e recargas, serviços, gastos, locais e notas
- lembretes e suas programações
- comprovantes, digitalizações e outros arquivos que você anexar
- suas configurações, como unidades, moeda, idioma e tema

**Seu dispositivo.** Um token de notificação push, para que lembretes e alertas cheguem ao seu celular, e a plataforma (Android ou iOS).

**Compras.** Se você tem uma assinatura Premium ativa, conforme informado pelo Google Play ou pela App Store.

{% if p.crash_reporting != "" %}**Relatórios de falhas.** Detalhes técnicos quando o app trava (veja abaixo).
{% endif %}
{% if p.analytics != "" %}**Estatísticas de uso.** Quais recursos são usados (veja abaixo).
{% endif %}

**E-mails que você nos envia.** Seu endereço e o que você escrever.

## Onde seu registro fica armazenado

Seu registro fica armazenado no seu celular, no armazenamento privado do Motoor, para que o app funcione sem conexão.

Ele também tem **backup automático** no nosso servidor no Google Cloud em **{{ t.privacy.data_location }}**. Isso acontece para todos os usuários conectados, tanto no Free quanto no Premium, e não há opção para desativar: o backup é como o Motoor restaura seu registro quando você entra em um celular novo. Ele inclui seus registros, anexos e comprovantes.

Os dados são criptografados em trânsito entre seu celular e nosso servidor, e criptografados em repouso no Google Cloud. Só você pode ler seu registro pelo app. Só acessamos os dados armazenados quando você nos pede ajuda ou quando precisamos corrigir uma falha.

## Leitura de comprovantes (Premium)

Quando você escaneia um comprovante, o Motoor lê os totais, a data e o local para que você não precise digitá-los. Você revisa cada campo antes de qualquer coisa ser salva. O hodômetro nunca é lido de um comprovante.

- **No seu celular, quando possível.** Se o seu celular tem um modelo integrado capaz de ler comprovantes, o Motoor o usa e a leitura acontece no próprio aparelho.
- **Caso contrário, no nosso servidor.** A imagem ou o PDF é enviado ao nosso servidor, que o envia ao **modelo Gemini do Google no Google Cloud**, em {{ t.privacy.scan_location }}. Usamos o serviço pago do Google, cujos termos não permitem que o Google use os dados para treinar seus modelos. Os campos extraídos voltam para o seu celular.

Em ambos os casos, a digitalização fica guardada com o registro como anexo e tem backup como o restante do seu registro.

## Compartilhar e transferir um veículo (Premium)

**Compartilhar histórico** cria um link e um QR code para uma página web somente leitura com os registros, datas, leituras do hodômetro e totais do veículo. Ela não mostra dados da conta. Qualquer pessoa com o link pode abri-lo até que ele expire após 24 horas ou até que você o revogue.

**Transferir propriedade** cria um código de uso único que expira após 24 horas. O primeiro usuário Premium que abri-lo recebe o veículo com o histórico e os comprovantes, e você vê o nome dele e quando ele o resgatou. Sua cópia passa a ser somente leitura.

{% if p.crash_reporting != "" %}
## Relatórios de falhas

Se o Motoor travar, o **{{ p.crash_reporting }}** nos envia um relatório de falha para que possamos corrigir o problema. Um relatório contém apenas detalhes técnicos: modelo do dispositivo, versão do sistema operacional, versão do app, o horário da falha e o estado do código quando ela ocorreu. Ele não contém seus veículos, registros ou fotos.
{% endif %}

{% if p.analytics != "" %}
## Estatísticas de uso

O Motoor usa o **{{ p.analytics }}** para medir como o app é usado, por exemplo quantas pessoas concluem a inclusão de um veículo, registram o primeiro abastecimento ou abrem a tela Premium e qual plano escolhem. Essas estatísticas estão vinculadas a um ID aleatório de instância do app, não ao seu nome ou e-mail, e não contêm as entradas do seu registro.
{% endif %}

## Compras

Se você comprar o Premium, o pagamento é processado inteiramente pelo **Google Play** ou pela **Apple App Store**. Nunca vemos seu cartão ou dados de pagamento. A loja nos informa apenas se você tem uma compra ativa, para que o Premium possa ser desbloqueado e restaurado nos seus outros dispositivos.

## Quem mais trata seus dados

Não vendemos suas informações pessoais e não as compartilhamos para publicidade. Estes fornecedores processam dados para nós, apenas para fazer o Motoor funcionar:

| Fornecedor | O que faz | Dados que trata |
|---|---|---|
| Google Cloud | Hospeda nosso servidor, banco de dados e armazenamento de arquivos em {{ t.privacy.data_location }} | Sua conta e o backup do seu registro |
| Google Cloud (Gemini) | Lê comprovantes que não podem ser lidos no seu celular | O comprovante que você escaneia |
| Firebase Authentication (Google) | Login com Google ou Apple | Nome, e-mail, ID da conta |
| Firebase Cloud Messaging (Google) | Entrega notificações push | Token push do dispositivo |
{% if p.crash_reporting != "" %}| {{ p.crash_reporting }} (Google) | Relatórios de falhas | Detalhes técnicos da falha |
{% endif %}{% if p.analytics != "" %}| {{ p.analytics }} (Google) | Estatísticas de uso | ID de instância do app e eventos de recursos |
{% endif %}| Google Play, Apple App Store | Assinaturas e pagamento | Status da compra |

Os serviços do Firebase são operados pelo Google e podem processar dados fora da Indonésia. As taxas de câmbio para conversão de moeda vêm do nosso próprio servidor; obtê-las não envia nada sobre você.

## Permissões que o Motoor solicita

| Permissão | Por quê | Se você recusar |
|---|---|---|
| Notificações | Para lembrar você quando um serviço estiver próximo | Os lembretes continuam aparecendo dentro do app |
| Câmera | Para fotografar comprovantes e veículos | Você pode escolher fotos ou arquivos existentes |
| Fotos e arquivos | Para anexar uma foto ou PDF que você já tem | Você pode usar a câmera |

O Motoor não solicita sua localização, contatos, microfone ou registro de chamadas. Se você ativar o bloqueio biométrico, sua digital ou seu rosto são verificados pelo celular; o Motoor nunca os recebe.

## Como usamos as informações

Usamos suas informações apenas para:

- manter seu registro no seu celular e fazer backup dele, para que você possa restaurá-lo
- enviar lembretes e alertas
- ler os comprovantes que você escaneia
- criar as páginas de compartilhamento e as transferências que você solicitar
- desbloquear e restaurar o Premium
{% if p.crash_reporting != "" or p.analytics != "" %}- encontrar e corrigir bugs e melhorar o app
{% endif %}- responder às suas solicitações de suporte

## Suas escolhas e direitos

De acordo com a Lei de Proteção de Dados Pessoais da Indonésia (Lei nº 27 de 2022) e leis semelhantes onde você mora, você tem o direito de acessar seus dados pessoais, corrigi-los, solicitar sua exclusão e retirar o consentimento. No Motoor:

- **Acessar e copiar:** exporte seu registro em CSV, ou como histórico de manutenção em PDF com os comprovantes anexados, em **Configurações → Exportar e backup**.
- **Corrigir:** edite qualquer veículo, registro ou lembrete no app, e seu nome em **Configurações → Perfil**.
- **Excluir:** exclua registros individuais no app, ou exclua toda a sua conta (veja abaixo).

Para qualquer outra coisa, envie um e-mail para [{{ dev.email }}](mailto:{{ dev.email }}).

## Excluir sua conta

Abra **Configurações → Perfil → Excluir conta** e confirme. Se você não tem mais o app, pode nos pedir por e-mail; veja a [página de suporte]({{ '/pt/support/#delete-your-data' | relative_url }}).

- Sua conta é **bloqueada imediatamente**, e os links de compartilhamento e as transferências em aberto deixam de funcionar.
- Durante **{{ p.deletion_grace_days }} dias** você pode mudar de ideia: entre novamente e escolha **Restaurar**.
- Após {{ p.deletion_grace_days }} dias, sua conta, o backup do seu registro, os anexos, os comprovantes e as digitalizações são **excluídos permanentemente** do nosso servidor, e sua conta de login é removida. As cópias em nossos backups de recuperação de desastres expiram em mais {{ p.backup_expiry_days }} dias.
- Excluir sua conta não cancela sua assinatura. Cancele-a no Google Play ou na App Store, que mantêm seus próprios registros de compra.

Apagar o app do celular remove apenas a cópia do celular. Seu backup permanece até você excluir sua conta.

## Por quanto tempo guardamos as informações

| Informação | Guardada |
|---|---|
| Sua conta e o backup do seu registro | Até você excluir sua conta, depois por {{ p.deletion_grace_days }} dias, e então removidos (as cópias de backup expiram {{ p.backup_expiry_days }} dias depois) |
| Um registro, veículo ou foto que você exclui | Removido dos seus dispositivos imediatamente e do nosso servidor em até 90 dias |
| Links de compartilhamento e de transferência | Até expirarem após 24 horas ou serem revogados; depois mantidos como registro até sua conta ser excluída |
{% if p.crash_reporting != "" %}| Relatórios de falhas | Até 90 dias |
{% endif %}{% if p.analytics != "" %}| Estatísticas de uso | {{ t.privacy.analytics_retention }} |
{% endif %}| E-mails de suporte | 12 meses após a última mensagem |

## Segurança

Seu registro no celular fica no armazenamento privado do Motoor, que outros apps não conseguem ler, e você pode adicionar um bloqueio biométrico. Tudo o que o Motoor envia pela internet é criptografado. Os links de compartilhamento e de transferência usam códigos aleatórios longos que não podem ser adivinhados, e guardamos apenas uma impressão digital (hash) de cada código. Mantenha seu celular bloqueado com PIN, digital ou reconhecimento facial para proteger o que está nele.

## Crianças

O Motoor é destinado a pessoas que possuem ou cuidam de um veículo e não é direcionado a crianças menores de {{ p.min_age }} anos. Não coletamos intencionalmente informações pessoais de crianças. Se você acredita que uma criança nos forneceu informações, envie-nos um e-mail e nós as excluiremos.

## Alterações nesta política

Se alterarmos esta política, atualizaremos a data no topo desta página. Se uma alteração afetar o que coletamos ou quem trata os dados, o Motoor também avisará você dentro do app antes que a alteração entre em vigor.

## Contato

Dúvidas sobre privacidade devem ser enviadas a **{{ dev.name }}** em [{{ dev.email }}](mailto:{{ dev.email }}). Respondemos {{ t.ui.response_time }}.
