import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Términos y Condiciones',
  description: 'Condiciones de uso del catálogo digital PIERA.',
};

export default function TermsPage() {
  return (
    <LegalPage title="Términos y Condiciones" lastUpdated="20 de octubre de 2026">
      <section>
        <h2>1. Aceptación de los términos</h2>
        <p>
          Al acceder y navegar por este sitio web, aceptas quedar vinculado por estos Términos y
          Condiciones. Si no estás de acuerdo con alguno de ellos, te pedimos que no utilices el
          sitio.
        </p>
      </section>

      <section>
        <h2>2. Descripción del servicio</h2>
        <p>
          Este sitio web es un <strong>catálogo digital informativo</strong> de PIERA. Su propósito
          es mostrar nuestra colección de prendas y facilitar el contacto con el equipo de ventas.{' '}
          <strong>No constituye una tienda en línea</strong> ni permite realizar transacciones
          económicas directamente en el sitio.
        </p>
        <p>
          Las compras y consultas se gestionan exclusivamente a través de <strong>WhatsApp</strong>,
          donde acordaremos disponibilidad, talla, forma de pago y logística de entrega.
        </p>
      </section>

      <section>
        <h2>3. Productos, disponibilidad y precios</h2>
        <ul>
          <li>
            Las imágenes y descripciones de los productos son meramente ilustrativas. Pueden existir
            leves variaciones de color según la pantalla del usuario.
          </li>
          <li>
            La disponibilidad de tallas y colores se confirma en el momento de la consulta por
            WhatsApp, ya que puede cambiar sin previo aviso.
          </li>
          <li>
            Los precios se expresan en <strong>pesos colombianos (COP)</strong> e incluyen el IVA
            cuando corresponde. PIERA se reserva el derecho de modificar los precios sin previo
            aviso; el precio vigente al momento de confirmar el pedido es el que aplica.
          </li>
        </ul>
      </section>

      <section>
        <h2>4. Proceso de compra</h2>
        <p>
          Al hacer clic en &ldquo;Consultar por WhatsApp&rdquo;, serás redirigido a WhatsApp con un
          mensaje prellenado sobre el producto. Desde allí podrás confirmar disponibilidad, acordar
          el método de pago y coordinar el envío. El contrato de compraventa se perfecciona
          únicamente cuando PIERA confirma el pedido de forma expresa por escrito.
        </p>
      </section>

      <section>
        <h2>5. Envíos</h2>
        <p>
          Las condiciones de envío (costo, tiempo de entrega y transportadora) se informan al
          momento de confirmar el pedido. Los tiempos de entrega son estimados y pueden variar por
          causas ajenas a PIERA (huelgas, condiciones climáticas, etc.).
        </p>
      </section>

      <section>
        <h2>6. Devoluciones y reembolsos</h2>
        <p>
          Las condiciones para devoluciones y cambios se detallan en nuestra{' '}
          <a href="/politica-reembolso/">Política de Reembolso</a>, que forma parte integral de
          estos términos.
        </p>
      </section>

      <section>
        <h2>7. Propiedad intelectual</h2>
        <p>
          Todos los contenidos de este sitio (imágenes, textos, diseño, logotipos y código fuente)
          son propiedad de PIERA o sus licenciantes, y están protegidos por las leyes colombianas e
          internacionales de propiedad intelectual. Queda prohibida su reproducción, distribución o
          uso comercial sin autorización previa y escrita.
        </p>
      </section>

      <section>
        <h2>8. Limitación de responsabilidad</h2>
        <p>
          PIERA no será responsable por: (a) daños indirectos, incidentales o consecuentes derivados
          del uso del sitio; (b) interrupciones temporales del servicio por mantenimiento o causas
          de fuerza mayor; (c) contenidos de sitios de terceros a los que este sitio pueda enlazar.
        </p>
      </section>

      <section>
        <h2>9. Modificaciones</h2>
        <p>
          Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios
          entrarán en vigor en el momento de su publicación en esta página. El uso continuado del
          sitio constituye la aceptación de las modificaciones.
        </p>
      </section>

      <section>
        <h2>10. Ley aplicable y jurisdicción</h2>
        <p>
          Estos términos se rigen por las leyes de la <strong>República de Colombia</strong>,
          incluyendo la Ley 1480 de 2011 (Estatuto del Consumidor). Cualquier controversia será
          sometida a los tribunales competentes de Colombia, salvo que la ley disponga otra cosa.
        </p>
      </section>

      <section>
        <h2>11. Contacto</h2>
        <p>
          Para cualquier consulta sobre estos términos, escríbenos a{' '}
          <a href="mailto:isabelacalleperez@gmail.com">isabelacalleperez@gmail.com</a>.
        </p>
      </section>
    </LegalPage>
  );
}
