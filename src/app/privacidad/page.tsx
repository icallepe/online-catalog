import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description: 'Cómo PIERA recopila, usa y protege tu información personal.',
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Política de Privacidad" lastUpdated="20 de octubre de 2026">
      <section>
        <h2>1. Responsable del tratamiento</h2>
        <p>
          PIERA (en adelante, &ldquo;nosotros&rdquo; o &ldquo;PIERA&rdquo;) opera el sitio web
          disponible en <strong>digital-collection-ca788.web.app</strong> y es responsable del
          tratamiento de los datos personales conforme a la <strong>Ley 1581 de 2012</strong> y el{' '}
          <strong>Decreto 1377 de 2013</strong> de la República de Colombia.
        </p>
        <p>
          <strong>Contacto del responsable:</strong>{' '}
          <a href="mailto:isabelacalleperez@gmail.com">isabelacalleperez@gmail.com</a>
        </p>
      </section>

      <section>
        <h2>2. Datos que recopilamos</h2>
        <p>Recopilamos información en las siguientes circunstancias:</p>
        <ul>
          <li>
            <strong>Contacto por WhatsApp:</strong> al hacer clic en el botón de contacto, tu
            dispositivo abre WhatsApp con un mensaje prediseñado. Si decides enviarlo, compartes con
            nosotros tu número de teléfono, nombre de usuario de WhatsApp y el contenido del
            mensaje. Este dato es procesado por WhatsApp (Meta Platforms, Inc.) según sus propias
            políticas.
          </li>
          <li>
            <strong>Datos técnicos:</strong> Google Firebase, nuestro proveedor de infraestructura,
            puede registrar automáticamente datos como la dirección IP, tipo de navegador, páginas
            visitadas y fecha/hora de acceso con fines de seguridad y funcionamiento del servicio.
          </li>
        </ul>
        <p>
          Este sitio <strong>no utiliza cookies de seguimiento, publicidad ni análisis.</strong>
        </p>
      </section>

      <section>
        <h2>3. Finalidad del tratamiento</h2>
        <p>Utilizamos tus datos para:</p>
        <ul>
          <li>Responder a consultas sobre disponibilidad y compra de productos.</li>
          <li>Gestionar la relación comercial derivada de tu contacto.</li>
          <li>Cumplir con obligaciones legales aplicables.</li>
          <li>
            Garantizar la seguridad y el correcto funcionamiento del sitio web (a través de
            Firebase).
          </li>
        </ul>
      </section>

      <section>
        <h2>4. Base legal para el tratamiento</h2>
        <p>
          El tratamiento de tus datos se fundamenta en: (a) tu consentimiento, expresado al iniciar
          el contacto por WhatsApp; (b) el interés legítimo de PIERA para atender consultas
          comerciales; y (c) el cumplimiento de obligaciones legales.
        </p>
      </section>

      <section>
        <h2>5. Conservación de los datos</h2>
        <p>
          Conservaremos tus datos mientras sea necesario para atender tu consulta y mantener la
          relación comercial, o por el tiempo que exijan las normas legales aplicables. Los mensajes
          de WhatsApp se conservan según las políticas de WhatsApp/Meta.
        </p>
      </section>

      <section>
        <h2>6. Transferencias internacionales</h2>
        <p>
          Nuestro sitio web está alojado en <strong>Google Firebase</strong> (servidores en Estados
          Unidos). Al acceder al sitio, tus datos técnicos pueden ser procesados en ese país. Google
          LLC cuenta con mecanismos de transferencia internacional conformes con las regulaciones
          aplicables.
        </p>
      </section>

      <section>
        <h2>7. Tus derechos (Habeas Data)</h2>
        <p>De conformidad con la Ley 1581 de 2012, tienes derecho a:</p>
        <ul>
          <li>
            <strong>Conocer</strong> los datos personales que poseemos sobre ti.
          </li>
          <li>
            <strong>Actualizar y rectificar</strong> tus datos cuando sean inexactos, incompletos o
            fraccionados.
          </li>
          <li>
            <strong>Solicitar prueba</strong> de la autorización que otorgaste para el tratamiento.
          </li>
          <li>
            <strong>Revocar la autorización</strong> y/o solicitar la supresión de tus datos cuando
            no exista obligación legal o contractual que justifique su conservación.
          </li>
          <li>
            <strong>Presentar quejas</strong> ante la Superintendencia de Industria y Comercio (SIC)
            por infracciones a la Ley.
          </li>
        </ul>
        <p>
          Para ejercer estos derechos, escríbenos a{' '}
          <a href="mailto:isabelacalleperez@gmail.com">isabelacalleperez@gmail.com</a> indicando tu
          solicitud. Responderemos en un plazo máximo de diez (10) días hábiles.
        </p>
      </section>

      <section>
        <h2>8. Autoridad de control</h2>
        <p>
          La autoridad competente en materia de protección de datos en Colombia es la{' '}
          <strong>Superintendencia de Industria y Comercio (SIC)</strong>, a la que puedes dirigir
          reclamaciones en{' '}
          <a href="https://www.sic.gov.co" target="_blank" rel="noopener noreferrer">
            www.sic.gov.co
          </a>
          .
        </p>
      </section>

      <section>
        <h2>9. Cambios a esta política</h2>
        <p>
          Podemos actualizar esta política periódicamente. La fecha de la última modificación
          siempre estará visible en la parte superior de esta página. Te recomendamos revisarla
          regularmente.
        </p>
      </section>
    </LegalPage>
  );
}
