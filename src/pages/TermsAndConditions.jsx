import React from 'react';
import { Link } from 'react-router-dom';
import LegalLayout from '../components/LegalLayout';

const TermsAndConditions = () => (
  <LegalLayout title="Términos y condiciones" updated="7 de agosto de 2026">
    <section>
      <h2>1. Aceptación</h2>
      <p>
        Al acceder y usar el sitio web de RozoTravel y solicitar cotizaciones o servicios,
        aceptas estos términos y condiciones. Si no estás de acuerdo, te pedimos no utilizar
        el sitio ni nuestros canales de atención para contratar.
      </p>
    </section>

    <section>
      <h2>2. Identificación</h2>
      <p>
        RozoTravel ofrece alquiler y pasadías en fincas, organización de eventos empresariales
        y sociales, catering y gastronomía, entretenimiento y montaje en Rozó y zonas aledañas
        del Valle del Cauca, Colombia.
      </p>
      <p>
        Contacto principal: WhatsApp <a href="https://wa.me/573189332134">+57 318 9332134</a>.
      </p>
    </section>

    <section>
      <h2>3. Servicios y cotizaciones</h2>
      <ul>
        <li>Las descripciones, capacidades, menús y precios publicados en el sitio o en PDFs son referenciales y pueden variar según disponibilidad, fecha y condiciones del evento.</li>
        <li>Una cotización no constituye reserva hasta que se confirme por escrito (WhatsApp, correo u otro medio acordado) y se cumplan las condiciones de anticipo aplicables.</li>
        <li>Para servicios de alimentación, se requiere anticipo del 50 % para preparación y reservación, salvo pacto distinto por escrito.</li>
        <li>El transporte de mobiliario y montajes está sujeto a verificación del lugar del evento.</li>
      </ul>
    </section>

    <section>
      <h2>4. Reservas, pagos y cancelaciones</h2>
      <p>
        Las condiciones específicas de pago, fechas de corte y políticas de cancelación o
        reprogramación se acordarán en la cotización o contrato particular de cada evento.
        El incumplimiento de anticipos puede implicar la liberación de la fecha o el espacio.
      </p>
    </section>

    <section>
      <h2>5. Uso del sitio web</h2>
      <p>Te comprometes a:</p>
      <ul>
        <li>Usar el sitio de forma lícita y no intentar vulnerar su seguridad.</li>
        <li>Proporcionar información veraz en formularios y mensajes.</li>
        <li>No reproducir, copiar ni explotar comercialmente contenidos del sitio sin autorización.</li>
      </ul>
    </section>

    <section>
      <h2>6. Propiedad intelectual</h2>
      <p>
        Marcas, logotipos, textos, fotografías, menús y demás contenidos de RozoTravel están
        protegidos. Queda prohibido su uso no autorizado. Las imágenes de terceros o de
        muestra pueden reemplazarse; no otorgan derechos sobre propiedades ajenas.
      </p>
    </section>

    <section>
      <h2>7. Responsabilidad</h2>
      <ul>
        <li>Hacemos esfuerzos razonables por mantener información actualizada, pero no garantizamos exactitud absoluta en todo momento.</li>
        <li>No respondemos por interrupciones del sitio por causas ajenas (hosting, red, fuerza mayor).</li>
        <li>El uso de fincas y espacios se rige por las normas internas del lugar, horarios y aforo acordados. Daños causados por el cliente o sus invitados podrán ser cobrados.</li>
        <li>Enlaces a WhatsApp, mapas o redes de terceros se rigen por las políticas de esos servicios.</li>
      </ul>
    </section>

    <section>
      <h2>8. Privacidad y cookies</h2>
      <p>
        El tratamiento de datos personales se describe en nuestra{' '}
        <Link to="/politica-de-privacidad">Política de privacidad</Link>. El uso de cookies
        se detalla en la{' '}
        <Link to="/politica-de-cookies">Política de cookies</Link>.
      </p>
    </section>

    <section>
      <h2>9. Modificaciones</h2>
      <p>
        Podemos modificar estos términos en cualquier momento. La versión publicada en esta
        página será la vigente. Te recomendamos revisarla periódicamente.
      </p>
    </section>

    <section>
      <h2>10. Ley aplicable y jurisdicción</h2>
      <p>
        Estos términos se rigen por las leyes de la República de Colombia. Cualquier
        controversia se someterá a los jueces y tribunales competentes del país, sin
        perjuicio de normas imperativas de protección al consumidor.
      </p>
    </section>
  </LegalLayout>
);

export default TermsAndConditions;
