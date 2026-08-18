import './contacto.css';

function Contacto() {
  return (
    <section className="contact" id="contacto">

      <div className="contact-header">
        <p className="contact-subtitle">HABLEMOS</p>

        <h2>¿Tienes un proyecto en mente?</h2>

        <p>
          Cuéntanos qué tienes en mente y estaremos encantados de ayudarte a
          convertirlo en fotografías que puedas conservar para siempre.
        </p>
      </div>

      <div className="contact-content">

        <div className="contact-info">

          <div className="contact-item">
  <span>WhatsApp</span>

  <p>
    Escríbenos directamente para consultar disponibilidad.
  </p>

  <a
    href="https://wa.me/18096233935"
    target="_blank"
    rel="noopener noreferrer"
  >
    Escribir por WhatsApp
  </a>
</div>

          <div className="contact-item">
  <span>Instagram</span>

  <p>
    Síguenos y descubre nuestros últimos trabajos.
  </p>

  <a
    href="https://www.instagram.com/adrianc_photos/"
    target="_blank"
    rel="noopener noreferrer"
  >
    @adrianc_photos
  </a>
</div>

          <div className="contact-item">
             <span>Ubicación</span>

  
  <a
    href="https://www.google.com/maps/search/?api=1&query=Foto+Castillo%2C+4PG3%2B7GH%2C+C.+Duarte%2C+Fantino+43000"
    target="_blank"
    rel="noopener noreferrer"
  >
    Ver ubicación
  </a>
          </div>

        </div>

        <div className="contact-action">
          <h3>Hablemos de tu sesión</h3>

          <p>
            Estamos disponibles para sesiones, eventos y proyectos
            personalizados.
          </p>

          <a
  href="https://wa.me/18096233935"
  target="_blank"
  rel="noopener noreferrer"
  className="contact-button"
>
  Contactarnos
</a>
        </div>

      </div>

    </section>
  );
}

export default Contacto;