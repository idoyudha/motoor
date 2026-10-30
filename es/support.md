---
layout: page
title: Ayuda
permalink: /es/support/
ref: /support/
lang: es
lede: Respuestas a preguntas frecuentes y una línea directa con la persona que hace Motoor.
description: Respuestas a preguntas frecuentes y una línea directa con la persona que hace Motoor.
---
{% assign dev = site.developer %}
{% assign t = site.data.i18n[page.lang] %}

<div class="mt-contact">
  <h2 class="mt-contact__title">Contacto</h2>
  <p style="margin:0">Escribe a <a href="mailto:{{ dev.email }}">{{ dev.email }}</a> y recibirás respuesta {{ t.ui.response_time }}. Ayuda que incluyas el modelo de tu teléfono, si usas Android o iOS, y la versión de Motoor que aparece en <strong>Ajustes → Acerca de</strong>.</p>
  <a class="mt-btn mt-btn--filled mt-btn--small" href="mailto:{{ dev.email }}?subject=Motoor%20support">{% include icon.html name="mail" %}Escribir a soporte</a>
</div>

## Preguntas frecuentes

<details class="mt-faq">
<summary>Los recordatorios no aparecen en mi teléfono</summary>
<div>
<p>Comprueba que las notificaciones de Motoor estén activadas en los ajustes de tu teléfono. En Android, algunos teléfonos también detienen las apps en segundo plano para ahorrar batería: abre <strong>Ajustes → Aplicaciones → Motoor → Batería</strong> y elige <strong>Sin restricciones</strong>. Los recordatorios siempre aparecen dentro de la app, en la pestaña <strong>Recordatorios</strong>, aunque las notificaciones estén desactivadas.</p>
</div>
</details>

<details class="mt-faq">
<summary>¿Cómo decide Motoor cuándo toca un servicio?</summary>
<div>
<p>Cuando agregas un vehículo, Motoor propone un plan de mantenimiento según su marca, tipo y motorización, con cada tarea por distancia o por fecha, lo que ocurra primero. Cada tarea muestra de dónde viene su intervalo. En cualquier plan puedes desmarcar las tareas que no necesites. Con Premium también puedes cambiarles el nombre, modificar sus intervalos y agregar las tuyas. Mantén el odómetro al día registrando combustible o servicios para que los recordatorios por distancia sean precisos.</p>
</div>
</details>

<details class="mt-faq">
<summary>Compré Premium pero no está desbloqueado</summary>
<div>
<p>Abre <strong>Ajustes → Premium → Restaurar compra</strong> con la sesión iniciada en la misma cuenta con la que lo compraste. Si eso no funciona, escríbenos con el número de pedido de tu recibo de Google Play o del App Store.</p>
</div>
</details>

<details class="mt-faq">
<summary>¿Cómo cancelo Premium?</summary>
<div>
<p>Las suscripciones las gestiona la tienda, no Motoor.</p>
<ul>
<li><strong>Android:</strong> abre Play Store, toca tu foto de perfil y luego <strong>Pagos y suscripciones → Suscripciones → Motoor → Cancelar suscripción</strong>.</li>
<li><strong>iOS:</strong> abre <strong>Ajustes</strong>, toca tu nombre y luego <strong>Suscripciones → Motoor → Cancelar suscripción</strong>.</li>
</ul>
<p>Cuando termina el período de facturación, vuelven a aplicarse los límites de Free, pero no se elimina nada. Tu primer vehículo sigue activo (puedes elegir otro), y los demás pasan a ser de solo lectura hasta que te vuelvas a suscribir. Todos los registros y archivos adjuntos se conservan, en tu teléfono y en tu copia de seguridad.</p>
</div>
</details>

<details class="mt-faq">
<summary>¿Puedo obtener un reembolso?</summary>
<div>
<p>Los reembolsos los gestiona la tienda donde compraste. En Android, solicítalo en la <a href="https://support.google.com/googleplay/answer/2479637">página de reembolsos de Google Play</a>. En iOS, usa <a href="https://reportaproblem.apple.com">reportaproblem.apple.com</a>.</p>
</div>
</details>

<details class="mt-faq">
<summary>¿Mi registro tiene copia de seguridad?</summary>
<div>
<p>Sí, automáticamente, tanto en Free como en Premium. Tus vehículos, registros, recordatorios, archivos adjuntos y recibos se respaldan en nuestro servidor siempre que estés en línea. En un teléfono nuevo, inicia sesión con la misma cuenta y tu registro vuelve. Más información en la <a href="{{ '/es/privacy/' | relative_url }}">política de privacidad</a>.</p>
</div>
</details>

<details class="mt-faq">
<summary>¿Motoor funciona sin conexión?</summary>
<div>
<p>Sí. Tu registro se guarda en tu teléfono, así que puedes registrar combustible, servicios y gastos, ver tu historial y recibir recordatorios sin conexión. Los cambios se respaldan automáticamente cuando vuelves a estar en línea. Iniciar sesión, escanear recibos, compartir y transferir un vehículo requieren conexión.</p>
</div>
</details>

<details class="mt-faq">
<summary>Tengo una idea o encontré un error</summary>
<div>
<p>Escribe a <a href="mailto:{{ dev.email }}">{{ dev.email }}</a>. Para errores, cuenta qué hiciste, qué esperabas y qué pasó en realidad. Una captura de pantalla ayuda mucho.</p>
</div>
</details>

## Eliminar tus datos {#delete-your-data}

Eliminar tu cuenta borra tu registro de tu teléfono y, pasados {{ site.privacy.deletion_grace_days }} días, de nuestro servidor de forma definitiva. Hay dos maneras de hacerlo.

**En la app:** abre **Ajustes → Perfil → Eliminar cuenta** y confirma. Tu cuenta se bloquea de inmediato y los enlaces para compartir dejan de funcionar.

**Sin la app:** escribe a [{{ dev.email }}](mailto:{{ dev.email }}?subject=Delete%20my%20account) con el asunto “Delete my account” (Eliminar mi cuenta), desde la dirección de correo con la que inicias sesión. Te lo confirmaremos por correo {{ t.ui.response_time }} y programaremos la eliminación, que funciona igual a partir de ahí.

Qué pasa después:

1. **Durante {{ site.privacy.deletion_grace_days }} días puedes cambiar de opinión.** Inicia sesión en Motoor y elige **Restaurar**. Tu registro vuelve tal como estaba.
2. **Pasados {{ site.privacy.deletion_grace_days }} días**, tu cuenta, la copia de seguridad de tu registro, los archivos adjuntos, los recibos y los escaneos se eliminan de forma permanente, y se elimina tu cuenta de inicio de sesión. Las copias en nuestros respaldos de recuperación ante desastres caducan en un plazo adicional de {{ site.privacy.backup_expiry_days }} días. Esto no se puede deshacer.
3. **Tu suscripción no se cancela automáticamente.** Cancélala primero en Google Play o en el App Store (ver arriba).

Desinstalar Motoor solo borra la copia de tu teléfono. Tu copia de seguridad se conserva hasta que elimines tu cuenta.

Si nos has escrito y quieres que se elimine esa correspondencia, escribe a [{{ dev.email }}](mailto:{{ dev.email }}?subject=Delete%20my%20emails) con el asunto “Delete my emails” (Eliminar mis correos). La eliminaremos en un plazo de 30 días y te lo confirmaremos por correo.

Más información en la [política de privacidad]({{ '/es/privacy/' | relative_url }}).
