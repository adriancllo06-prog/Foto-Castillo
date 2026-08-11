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
          <h3>Sesiones de fotos</h3>
          <p>
            Sesiones en estudio o exteriores adaptadas a tu estilo y ocasión.
          </p>
        </div>

        <div className="service-card">
          <h3>XV años</h3>
          <p>
            Sesiones especiales para quinceañeras, cuidando cada detalle.
          </p>
        </div>

        <div className="service-card">
          <h3>Eventos</h3>
          <p>
            Capturamos los momentos más importantes de tus celebraciones.
          </p>
        </div>

        <div className="service-card">
          <h3>Retratos</h3>
          <p>
            Retratos profesionales para personas, marcas y proyectos.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Servicios;