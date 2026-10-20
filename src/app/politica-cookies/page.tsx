import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Política de Cookies',
  description: 'Cómo usa PIERA las cookies y tecnologías de almacenamiento local.',
};

export default function CookiePolicyPage() {
  return (
    <LegalPage title="Política de Cookies" lastUpdated="20 de octubre de 2026">
      <section>
        <h2>1. ¿Qué son las cookies?</h2>
        <p>
          Las cookies son pequeños archivos de texto que un sitio web almacena en tu dispositivo al
          visitarlo. También existen tecnologías similares como el{' '}
          <strong>almacenamiento local (localStorage)</strong> del navegador, que funciona de forma
          parecida pero no expira automáticamente.
        </p>
      </section>

      <section>
        <h2>2. ¿Qué tecnologías usamos?</h2>
        <p>
          Este sitio web <strong>no utiliza cookies de seguimiento, publicidad ni análisis</strong>.
          Solo empleamos tecnologías estrictamente necesarias para el funcionamiento del sitio:
        </p>
        <ul>
          <li>
            <strong>Firebase SDK (Google):</strong> nuestro proveedor de base de datos utiliza el
            almacenamiento local del navegador para mejorar el rendimiento y la disponibilidad
            offline de los datos del catálogo. Esta tecnología es esencial para que el sitio
            funcione correctamente.
          </li>
          <li>
            <strong>Preferencias de cookies:</strong> guardamos tu decisión sobre el aviso de
            cookies en el almacenamiento local del navegador bajo la clave{' '}
            <code>cookie_consent</code>, para no mostrarte el aviso en futuras visitas.
          </li>
        </ul>
        <p>
          No instalamos cookies de terceros con fines publicitarios, de remarketing ni de análisis
          de comportamiento (no usamos Google Analytics, Meta Pixel ni similares).
        </p>
      </section>

      <section>
        <h2>3. Cookies de terceros (Firebase / Google)</h2>
        <p>
          Google Firebase puede establecer sus propias cookies técnicas relacionadas con la
          autenticación y la conexión a sus servicios. Para más información sobre el tratamiento de
          datos por parte de Google, consulta la{' '}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
            Política de privacidad de Google
          </a>
          .
        </p>
      </section>

      <section>
        <h2>4. Cómo gestionar o eliminar las cookies</h2>
        <p>
          Puedes configurar tu navegador para bloquear o eliminar cookies y datos de almacenamiento
          local. Ten en cuenta que desactivar estas tecnologías puede afectar el funcionamiento del
          sitio. Instrucciones por navegador:
        </p>
        <ul>
          <li>
            <a
              href="https://support.google.com/chrome/answer/95647"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Chrome
            </a>
          </li>
          <li>
            <a
              href="https://support.mozilla.org/es/kb/cookies-informacion-que-los-sitios-web-guardan-en-"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mozilla Firefox
            </a>
          </li>
          <li>
            <a
              href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
              target="_blank"
              rel="noopener noreferrer"
            >
              Safari
            </a>
          </li>
        </ul>
        <p>
          Para borrar la preferencia de cookies que guardamos, puedes limpiar el almacenamiento
          local de tu navegador para este sitio. El aviso de cookies volverá a aparecer en tu
          próxima visita.
        </p>
      </section>

      <section>
        <h2>5. Tu consentimiento</h2>
        <p>
          Al visitar nuestro sitio por primera vez, mostramos un aviso en el que puedes aceptar el
          uso de todas las tecnologías de almacenamiento o limitar su uso a las estrictamente
          esenciales. Puedes cambiar tu preferencia en cualquier momento borrando los datos del
          sitio desde la configuración de tu navegador.
        </p>
      </section>

      <section>
        <h2>6. Cambios a esta política</h2>
        <p>
          Podemos actualizar esta política cuando cambiemos las tecnologías que usamos. La fecha de
          la última modificación siempre estará visible en la parte superior de esta página.
        </p>
      </section>

      <section>
        <h2>7. Contacto</h2>
        <p>
          Si tienes preguntas sobre nuestra política de cookies, escríbenos a{' '}
          <a href="mailto:isabelacalleperez@gmail.com">isabelacalleperez@gmail.com</a>.
        </p>
      </section>
    </LegalPage>
  );
}
