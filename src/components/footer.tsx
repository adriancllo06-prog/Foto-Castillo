import './footer.css';
import logo from '../assets/LOGO SECUNDARIOPNG.png';
function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <div className="footer-brand">

          <img
            src={logo}
            alt="Foto Castillo"
            className="footer-logo"
          />

          <p>
            Capturando momentos únicos que se convierten en
            recuerdos para toda la vida.
          </p>

        </div>

        <div className="footer-links">
          <h3>Navegación</h3>

          <a href="#inicio">Inicio</a>
          <a href="#portafolio">Portafolio</a>
          <a href="#servicios">Servicios</a>
          <a href="#contacto">Contacto</a>
        </div>

        <div className="footer-social">
          <h3>Síguenos</h3>

          <a
            href="https://www.instagram.com/adrianc_photos/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>

          <a
            href="https://wa.me/18096233935"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>

        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Foto Castillo. Todos los derechos reservados.
        </p>
      </div>

    </footer>
  );
}

export default Footer;