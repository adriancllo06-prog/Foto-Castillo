import './servicios.css';

function Servicios() {
  return (
    <section className="services" id="servicios">

      <div className="services-header">
        <p className="services-subtitle">LO QUE HACEMOS</p>

        <h2>Servicios</h2>

        <p>
          Creamos fotografías pensadas para conservar tus momentos más
          importantes.
        </p>
      </div>

      <div className="services-grid">

        <div className="service-card">
          <span className="service-number">01</span>

          <div className="service-line"></div>

          <h3>Sesiones de fotos</h3>

          <p>
            Sesiones en estudio o exteriores adaptadas a tu estilo,
            personalidad y ocasión.
          </p>
        </div>

        <div className="service-card">
          <span className="service-number">02</span>

          <div className="service-line"></div>

          <h3>XV años</h3>

          <p>
            Sesiones especiales para quinceañeras, cuidando cada detalle
            para crear recuerdos únicos.
          </p>
        </div>

        <div className="service-card">
          <span className="service-number">03</span>

          <div className="service-line"></div>

          <h3>Eventos</h3>

          <p>
            Capturamos los momentos más importantes de cumpleaños,
            graduaciones, bodas y celebraciones.
          </p>
        </div>

        <div className="service-card">
          <span className="service-number">04</span>

          <div className="service-line"></div>

          <h3>Fotografía comercial</h3>

          <p>
            Fotografías para productos, negocios, marcas y contenido
            profesional para redes sociales.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Servicios;