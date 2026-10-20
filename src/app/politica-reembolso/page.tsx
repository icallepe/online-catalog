import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Política de Reembolso y Cambios',
  description: 'Condiciones para devoluciones, cambios y reembolsos en PIERA.',
};

export default function RefundPolicyPage() {
  return (
    <LegalPage title="Política de Reembolso y Cambios" lastUpdated="20 de octubre de 2026">
      <section>
        <h2>1. Derecho de retracto</h2>
        <p>
          De conformidad con el artículo 47 de la{' '}
          <strong>Ley 1480 de 2011 (Estatuto del Consumidor)</strong>, tienes derecho a retractarte
          de una compra realizada a distancia dentro de los <strong>cinco (5) días hábiles</strong>{' '}
          siguientes a la entrega del producto, sin necesidad de expresar los motivos y sin
          penalización alguna.
        </p>
        <p>
          Para ejercer este derecho, comunícate con nosotros por WhatsApp o al correo{' '}
          <a href="mailto:isabelacalleperez@gmail.com">isabelacalleperez@gmail.com</a> dentro del
          plazo indicado. Procederemos a orientarte sobre el proceso de devolución y reembolso.
        </p>
        <p>
          Los costos de devolución serán acordados caso a caso. El reembolso se realizará por el
          mismo medio de pago utilizado en la compra, dentro de los treinta (30) días calendario
          siguientes a la recepción del producto en buen estado.
        </p>
      </section>

      <section>
        <h2>2. Política de cambios</h2>
        <p>
          Aceptamos cambios de talla o referencia dentro de los <strong>15 días calendario</strong>{' '}
          siguientes a la entrega, sujeto a disponibilidad, siempre que:
        </p>
        <ul>
          <li>El producto no haya sido usado, lavado ni alterado.</li>
          <li>Conserve todas sus etiquetas originales.</li>
          <li>Esté en su empaque original o equivalente.</li>
        </ul>
        <p>
          Los costos de envío del cambio serán acordados en cada caso. Contáctanos por WhatsApp para
          iniciar el proceso.
        </p>
      </section>

      <section>
        <h2>3. Productos con defecto de fábrica</h2>
        <p>
          Si recibes un producto con defecto de fabricación, tienes derecho a la reparación,
          sustitución o reembolso del precio pagado, de acuerdo con la garantía legal establecida en
          la Ley 1480 de 2011. La garantía mínima para productos nuevos es de{' '}
          <strong>un (1) año</strong> a partir de la fecha de entrega.
        </p>
        <p>
          Para reportar un defecto, comunícate con nosotros a la mayor brevedad posible con fotos
          del defecto y el número de pedido o referencia del producto.
        </p>
      </section>

      <section>
        <h2>4. Proceso de devolución</h2>
        <ol>
          <li>
            <strong>Contáctanos</strong> por WhatsApp o correo electrónico indicando el motivo de la
            devolución y el producto a devolver.
          </li>
          <li>
            <strong>Confirmación:</strong> te daremos instrucciones sobre cómo y a dónde enviar el
            producto.
          </li>
          <li>
            <strong>Recepción y verificación:</strong> al recibir el producto, verificaremos que
            cumpla las condiciones de devolución.
          </li>
          <li>
            <strong>Reembolso o cambio:</strong> procesaremos tu solicitud en un plazo máximo de
            treinta (30) días calendario.
          </li>
        </ol>
      </section>

      <section>
        <h2>5. Exclusiones</h2>
        <p>No se aceptan devoluciones ni cambios en los siguientes casos:</p>
        <ul>
          <li>Productos usados, lavados o con señales de uso.</li>
          <li>Productos sin etiquetas o fuera de su empaque original.</li>
          <li>
            Productos adquiridos en promociones especiales o ventas de liquidación, salvo defecto de
            fábrica.
          </li>
          <li>Cuando la solicitud se realice fuera de los plazos indicados.</li>
        </ul>
      </section>

      <section>
        <h2>6. Contacto</h2>
        <p>
          Para iniciar cualquier proceso de devolución o cambio, contáctanos a través del botón de
          WhatsApp disponible en la página del producto o escríbenos a{' '}
          <a href="mailto:isabelacalleperez@gmail.com">isabelacalleperez@gmail.com</a>.
        </p>
      </section>
    </LegalPage>
  );
}
