import Navigation from './components/navigations';
import assets from './assets/maria.jpg';
import './App.css';
import logo from './assets/LOGO SECUNDARIOPNG.png';
import Portfolio from './components/portfolio ';
import Servicios from './components/servicios';

function App() {
  return (
    <>
      <header className="header">
         <img
         src={logo}
         alt="Foto Castillo"
         className="logo"
          />

        <Navigation />
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h2>Capturando momentos únicos</h2>

            <p>
              Bienvenido a mi portafolio de fotografía. Aquí encontrarás
              algunos de mis mejores trabajos.
            </p>

            <button>Ver Portafolio</button>
          </div>

          <div className="hero-image">
            <img
              src={assets}
              alt="Sesión de fotografía de Foto Castillo"
            />
          </div>
        </section>

        <Portfolio />
        <Servicios />

      </main>
    </>
  );
}

export default App;
