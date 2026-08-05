import Navigation from './components/navigations';
import assets from './assets/DSC_0090.jpg';
function App() {
  

  return (
 <>
      <header>
        <h1>Foto Castillo</h1>

        <Navigation />
      </header>
    
      <main>
        <section>
          <h2>Capturando momentos únicos</h2>

          <p>
            Bienvenido a mi portafolio de fotografía. Aquí encontrarás algunos
            de mis mejores trabajos.
          </p>
      <img src={assets} alt="Foto de ejemplo" width="500px" height="500px"/>
          <button>Ver Portafolio</button>
        </section>
      </main>
    </>
    

    
      
  )
}

export default App
