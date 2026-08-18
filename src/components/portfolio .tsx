import './portfolio.css';

import foto01 from '../assets/01.jpg';
import foto02 from '../assets/02.jpg';
import foto03 from '../assets/03.jpeg';
import foto04 from '../assets/04.jpeg';
import foto05 from '../assets/05.jpg';
import foto06 from '../assets/06.jpg';


function Portfolio() {

  const fotos = [
    foto01,
    foto02,
    foto03,
    foto04,
    foto05,
    foto06,
  ];


  return (
    <section className="portfolio" id="portafolio">

      <div className="portfolio-header">
        <p className="portfolio-subtitle">MIS TRABAJOS</p>

        <h2>Portafolio</h2>

        <p>
          Una selección de momentos que hemos tenido el privilegio de capturar.
        </p>
      </div>

      <div className="portfolio-grid">

        {fotos.map((foto, index) => (
          <div className="portfolio-item" key={index}>
            <img
              src={foto}
              alt={`Fotografía de Foto Castillo ${index + 1}`}
            />
          </div>
        ))}

      </div>

    </section>
  );
}

export default Portfolio;