---
layout: page
title: Política de privacidad
permalink: /es/privacy/
ref: /privacy/
lang: es
privacy_date: true
lede: Qué recopila Motoor, dónde se guarda, quién más lo maneja y cómo eliminarlo.
description: Qué recopila Motoor, dónde se guarda, quién más lo maneja y cómo eliminarlo.
---
{% assign p = site.privacy %}
{% assign dev = site.developer %}
{% assign t = site.data.i18n[page.lang] %}
{% comment %}
  Before publishing: read this page end to end and check every statement is true
  for your build. The switches under `privacy:` in _config.yml fill in the details.
  This is a starting point, not legal advice.
{% endcomment %}

<p class="mt-doc__meta">Esta es una traducción. Si difiere de la <a href="{{ '/privacy/' | relative_url }}">versión en inglés</a>, prevalece la versión en inglés.</p>

<div class="mt-note"><strong>En resumen.</strong> Inicias sesión con Google o Apple. Tu registro se guarda en tu teléfono y se respalda automáticamente en nuestro servidor en {{ t.privacy.data_location }}, para que puedas restaurarlo en un teléfono nuevo. Motoor no muestra anuncios y no vendemos tus datos. Puedes eliminar tu cuenta y todo su contenido en cualquier momento.</div>

## Quiénes somos

Motoor es una app creada y publicada por **{{ dev.name }}**, un desarrollador independiente (“nosotros”). Somos responsables de cómo Motoor trata tu información. Puedes contactarnos en [{{ dev.email }}](mailto:{{ dev.email }}).

Esta política se aplica a la app Motoor en Android e iOS, a las páginas para compartir que crea Motoor y a este sitio web.

## Qué recopilamos

**Tu cuenta.** Para agregar un vehículo, inicias sesión con Google, o con Apple en iOS. De ese inicio de sesión recibimos tu nombre, tu dirección de correo electrónico y un ID de cuenta. Nunca vemos tu contraseña de Google o Apple.

**Tu registro.** Todo lo que introduces en Motoor:

- vehículos: marca, modelo, tipo, nombre, matrícula, año, lecturas del odómetro, notas y fotos
- cargas de combustible y de batería, servicios, gastos, lugares y notas
- recordatorios y sus calendarios
- recibos, escaneos y otros archivos que adjuntes
- tus ajustes, como unidades, moneda, idioma y tema

**Tu dispositivo.** Un token de notificaciones push, para que los recordatorios y avisos lleguen a tu teléfono, y la plataforma (Android o iOS).

**Compras.** Si tienes una suscripción Premium activa, según lo informen Google Play o el App Store.

{% if p.crash_reporting != "" %}**Informes de fallos.** Detalles técnicos cuando la app falla (ver más abajo).
{% endif %}
{% if p.analytics != "" %}**Estadísticas de uso.** Qué funciones se usan (ver más abajo).
{% endif %}

**Correos que nos envías.** Tu dirección y lo que escribas.

## Dónde se guarda tu registro

Tu registro se almacena en tu teléfono, en el almacenamiento privado de Motoor, para que la app funcione sin conexión.

También se **respalda automáticamente** en nuestro servidor de Google Cloud en **{{ t.privacy.data_location }}**. Esto ocurre con todos los usuarios que han iniciado sesión, tanto en Free como en Premium, y no hay ninguna opción para desactivarlo: la copia de seguridad es la forma en que Motoor restaura tu registro cuando inicias sesión en un teléfono nuevo. Incluye tus registros, archivos adjuntos y recibos.

Los datos se cifran en tránsito entre tu teléfono y nuestro servidor, y se cifran en reposo en Google Cloud. Solo tú puedes leer tu registro a través de la app. Solo accedemos a los datos almacenados cuando nos pides ayuda o cuando necesitamos corregir un fallo.

## Escaneo de recibos (Premium)

Cuando escaneas un recibo, Motoor lee de él los totales, la fecha y el lugar para que no tengas que escribirlos. Revisas cada campo antes de que se guarde nada. El odómetro nunca se lee de un recibo.

- **En tu teléfono, cuando es posible.** Si tu teléfono tiene un modelo integrado capaz de leer recibos, Motoor lo usa y la lectura se hace en el dispositivo.
- **Si no, en nuestro servidor.** La imagen o el PDF se sube a nuestro servidor, que lo envía al **modelo Gemini de Google en Google Cloud**, en {{ t.privacy.scan_location }}. Usamos el servicio de pago de Google, cuyas condiciones no permiten que Google use los datos para entrenar sus modelos. Los campos extraídos vuelven a tu teléfono.

En ambos casos, el escaneo se guarda con el registro como archivo adjunto y se respalda como el resto de tu registro.

## Compartir y transferir un vehículo (Premium)

**Compartir historial** crea un enlace y un código QR a una página web de solo lectura con los registros, fechas, lecturas del odómetro y totales del vehículo. No muestra datos de la cuenta. Cualquier persona que tenga el enlace puede abrirlo hasta que caduque a las 24 horas o hasta que lo revoques.

**Transferir propiedad** crea un código de un solo uso que caduca a las 24 horas. El primer usuario Premium que lo abra recibe el vehículo con su historial y sus recibos, y tú ves su nombre y cuándo lo reclamó. Tu copia pasa a ser de solo lectura.

{% if p.crash_reporting != "" %}
## Informes de fallos

Si Motoor falla, **{{ p.crash_reporting }}** nos envía un informe de fallo para que podamos solucionar el problema. Un informe contiene solo detalles técnicos: modelo del dispositivo, versión del sistema operativo, versión de la app, la hora del fallo y el estado del código cuando ocurrió. No contiene tus vehículos, registros ni fotos.
{% endif %}

{% if p.analytics != "" %}
## Estadísticas de uso

Motoor usa **{{ p.analytics }}** para medir cómo se usa la app, por ejemplo cuántas personas terminan de agregar un vehículo, registran su primera carga de combustible, o abren la pantalla Premium y qué plan eligen. Estas estadísticas están vinculadas a un ID aleatorio de instancia de la app, no a tu nombre ni a tu correo, y no contienen los registros de tu bitácora.
{% endif %}

## Compras

Si compras Premium, el pago lo gestiona por completo **Google Play** o el **Apple App Store**. Nunca vemos los datos de tu tarjeta ni de tu pago. La tienda solo nos indica si tienes una compra activa, para que Premium pueda desbloquearse y restaurarse en tus otros dispositivos.

## Quién más maneja tus datos

No vendemos tu información personal y no la compartimos con fines publicitarios. Estos proveedores procesan datos por cuenta nuestra, solo para hacer funcionar Motoor:

| Proveedor | Qué hace | Datos que maneja |
|---|---|---|
| Google Cloud | Aloja nuestro servidor, base de datos y almacenamiento de archivos en {{ t.privacy.data_location }} | Tu cuenta y la copia de seguridad de tu registro |
| Google Cloud (Gemini) | Lee los recibos que no se pueden leer en tu teléfono | El recibo que escaneas |
| Firebase Authentication (Google) | Inicio de sesión con Google o Apple | Nombre, correo, ID de cuenta |
| Firebase Cloud Messaging (Google) | Envía notificaciones push | Token push del dispositivo |
{% if p.crash_reporting != "" %}| {{ p.crash_reporting }} (Google) | Informes de fallos | Detalles técnicos del fallo |
{% endif %}{% if p.analytics != "" %}| {{ p.analytics }} (Google) | Estadísticas de uso | ID de instancia de la app y eventos de funciones |
{% endif %}| Google Play, Apple App Store | Suscripciones y pagos | Estado de la compra |

Los servicios de Firebase los opera Google y pueden procesar datos fuera de Indonesia. Los tipos de cambio para la conversión de moneda provienen de nuestro propio servidor; obtenerlos no envía nada sobre ti.

## Permisos que solicita Motoor

| Permiso | Por qué | Si dices que no |
|---|---|---|
| Notificaciones | Para recordarte cuándo toca un servicio | Los recordatorios se siguen mostrando dentro de la app |
| Cámara | Para fotografiar recibos y vehículos | Puedes elegir fotos o archivos existentes |
| Fotos y archivos | Para adjuntar una foto o un PDF que ya tienes | Puedes usar la cámara en su lugar |

Motoor no solicita tu ubicación, contactos, micrófono ni registro de llamadas. Si activas el bloqueo biométrico, tu huella o tu rostro los verifica tu teléfono; Motoor nunca los recibe.

## Cómo usamos la información

Usamos tu información solo para:

- mantener tu registro en tu teléfono y respaldarlo, para que puedas restaurarlo
- enviar recordatorios y avisos
- leer los recibos que escaneas
- crear las páginas para compartir y las transferencias que solicites
- desbloquear y restaurar Premium
{% if p.crash_reporting != "" or p.analytics != "" %}- encontrar y corregir errores y mejorar la app
{% endif %}- responder a tus solicitudes de ayuda

## Tus opciones y derechos

Según la Ley de Protección de Datos Personales de Indonesia (Ley n.º 27 de 2022) y leyes similares del lugar donde vives, tienes derecho a acceder a tus datos personales, corregirlos, solicitar su eliminación y retirar tu consentimiento. En Motoor:

- **Acceder y copiar:** exporta tu registro como CSV, o como historial de mantenimiento en PDF con los recibos adjuntos, desde **Ajustes → Exportar y respaldar**.
- **Corregir:** edita cualquier vehículo, registro o recordatorio en la app, y tu nombre en **Ajustes → Perfil**.
- **Eliminar:** elimina registros individuales en la app, o elimina toda tu cuenta (ver más abajo).

Para cualquier otra cosa, escribe a [{{ dev.email }}](mailto:{{ dev.email }}).

## Eliminar tu cuenta

Abre **Ajustes → Perfil → Eliminar cuenta** y confirma. Si ya no tienes la app, puedes pedírnoslo por correo; consulta la [página de ayuda]({{ '/es/support/#delete-your-data' | relative_url }}).

- Tu cuenta se **bloquea de inmediato**, y los enlaces para compartir y las transferencias abiertas dejan de funcionar.
- Durante **{{ p.deletion_grace_days }} días** puedes cambiar de opinión: vuelve a iniciar sesión y elige **Restaurar**.
- Pasados {{ p.deletion_grace_days }} días, tu cuenta, la copia de seguridad de tu registro, los archivos adjuntos, los recibos y los escaneos se **eliminan de forma permanente** de nuestro servidor, y se elimina tu cuenta de inicio de sesión. Las copias en nuestros respaldos de recuperación ante desastres caducan en un plazo adicional de {{ p.backup_expiry_days }} días.
- Eliminar tu cuenta no cancela tu suscripción. Cancélala en Google Play o en el App Store, que conservan sus propios registros de compra.

Eliminar la app de tu teléfono solo borra la copia del teléfono. Tu copia de seguridad se conserva hasta que elimines tu cuenta.

## Cuánto tiempo conservamos la información

| Información | Se conserva |
|---|---|
| Tu cuenta y la copia de seguridad de tu registro | Hasta que eliminas tu cuenta, luego {{ p.deletion_grace_days }} días, y después se elimina (las copias de respaldo caducan {{ p.backup_expiry_days }} días más tarde) |
| Un registro, vehículo o foto individual que eliminas | Se borra de tus dispositivos de inmediato y de nuestro servidor en un plazo de 90 días |
| Enlaces para compartir y de transferencia | Hasta que caducan a las 24 horas o se revocan; después se conservan como registro hasta que se elimina tu cuenta |
{% if p.crash_reporting != "" %}| Informes de fallos | Hasta 90 días |
{% endif %}{% if p.analytics != "" %}| Estadísticas de uso | {{ t.privacy.analytics_retention }} |
{% endif %}| Correos de soporte | 12 meses después del último mensaje |

## Seguridad

Tu registro en el teléfono se guarda en el almacenamiento privado de Motoor, que otras apps no pueden leer, y puedes añadir un bloqueo biométrico. Todo lo que Motoor envía por internet va cifrado. Los enlaces para compartir y de transferencia usan códigos aleatorios largos que no se pueden adivinar, y solo guardamos una huella (hash) de cada código. Mantén tu teléfono bloqueado con PIN, huella o reconocimiento facial para proteger lo que contiene.

## Menores

Motoor está pensado para personas que tienen o cuidan un vehículo, y no está dirigido a menores de {{ p.min_age }} años. No recopilamos a sabiendas información personal de menores. Si crees que un menor nos ha dado información, escríbenos y la eliminaremos.

## Cambios en esta política

Si cambiamos esta política, actualizaremos la fecha en la parte superior de esta página. Si un cambio afecta a lo que recopilamos o a quién lo maneja, Motoor también te lo indicará dentro de la app antes de que el cambio entre en vigor.

## Contacto

Las preguntas sobre privacidad van dirigidas a **{{ dev.name }}** en [{{ dev.email }}](mailto:{{ dev.email }}). Respondemos {{ t.ui.response_time }}.
