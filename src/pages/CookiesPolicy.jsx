import React from 'react';
import { Link } from 'react-router-dom';
import LegalLayout from '../components/LegalLayout';

const CookiesPolicy = () => (
  <LegalLayout title="Política de cookies" updated="7 de agosto de 2026">
    <section>
      <h2>1. ¿Qué son las cookies?</h2>
      <p>
        Las cookies son pequeños archivos que se almacenan en tu dispositivo cuando visitas
        un sitio web. Permiten recordar preferencias, entender cómo se usa el sitio y
        mejorar la experiencia. Tecnologías similares (pixels, almacenamiento local) pueden
        usarse con fines equivalentes.
      </p>
    </section>

    <section>
      <h2>2. ¿Quién usa cookies en este sitio?</h2>
      <p>
        RozoTravel y, en su caso, proveedores de servicios (por ejemplo, hosting, analítica
        o mapas embebidos de Google) pueden instalar cookies o tecnologías similares cuando
        navegas por nuestro sitio.
      </p>
    </section>

    <section>
      <h2>3. Tipos de cookies que podemos utilizar</h2>
      <ul>
        <li>
          <strong>Esenciales / técnicas:</strong> necesarias para el funcionamiento básico
          del sitio (seguridad, carga de recursos, preferencias mínimas).
        </li>
        <li>
          <strong>Preferencias:</strong> recuerdan opciones que eliges (idioma u otras
          configuraciones, si se implementan).
        </li>
        <li>
          <strong>Analíticas:</strong> nos ayudan a entender visitas y uso de páginas de
          forma agregada para mejorar el contenido y el diseño.
        </li>
        <li>
          <strong>De terceros:</strong> por ejemplo, al cargar el mapa de Google Maps o
          al interactuar con redes sociales / WhatsApp, esos servicios pueden establecer
          sus propias cookies según sus políticas.
        </li>
      </ul>
    </section>

    <section>
      <h2>4. Finalidad</h2>
      <p>Usamos cookies para:</p>
      <ul>
        <li>Garantizar que el sitio funcione correctamente.</li>
        <li>Medir rendimiento y mejorar contenidos (fincas, menú, contacto).</li>
        <li>Ofrecer componentes embebidos (mapa de ubicación).</li>
      </ul>
    </section>

    <section>
      <h2>5. Base legal y consentimiento</h2>
      <p>
        Las cookies estrictamente necesarias pueden instalarse con base en el interés
        legítimo de prestar el servicio. Para cookies no esenciales (analíticas o de
        marketing, si se activan), solicitaremos o basaremos el uso en tu consentimiento,
        conforme a la normativa aplicable y a nuestra{' '}
        <Link to="/politica-de-privacidad">Política de privacidad</Link>.
      </p>
    </section>

    <section>
      <h2>6. Cómo gestionar o desactivar cookies</h2>
      <p>
        Puedes configurar tu navegador para rechazar o eliminar cookies. Ten en cuenta que
        bloquear cookies esenciales puede afectar el funcionamiento del sitio. Consulta la
        ayuda de tu navegador (Chrome, Firefox, Safari, Edge, etc.) para instrucciones
        específicas.
      </p>
      <p>
        También puedes gestionar preferencias de terceros (por ejemplo, Google) desde los
        paneles de privacidad que ofrezcan esos proveedores.
      </p>
    </section>

    <section>
      <h2>7. Conservación</h2>
      <p>
        La duración de cada cookie varía: algunas son de sesión (se borran al cerrar el
        navegador) y otras persistentes (permanecen un tiempo definido o hasta que las
        elimines).
      </p>
    </section>

    <section>
      <h2>8. Actualizaciones</h2>
      <p>
        Podemos modificar esta política cuando cambien las cookies que usamos o la ley.
        La fecha de última actualización indica la versión vigente.
      </p>
    </section>

    <section>
      <h2>9. Contacto</h2>
      <p>
        Si tienes dudas sobre cookies o privacidad, escríbenos por WhatsApp al{' '}
        <a href="https://wa.me/573189332134">+57 318 9332134</a>.
      </p>
    </section>
  </LegalLayout>
);

export default CookiesPolicy;
