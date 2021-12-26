import "./App.css";
import { welcome } from "./components/alerts";
import { FormSearch } from "./components/form-search/FormSearch";
import { MapView } from "./components/MapView";

function App() {
  welcome();
  return (
    <div className="container">
      <header>
        <h1>Animal Search</h1>
      </header>
      <section>
        <article>
          <h3>Agregar referencia:</h3>
          <p>Para poder "marcar" seleccione "Agregar Mascota"</p>
        </article>
        <article>
          <h3>Dejar de Marcar:</h3>
          <p>
            Para dejar de crear referencias, seleccione "Cancelar modo edición"
          </p>
        </article>
      </section>
      <main>
        <div className="box-form">
          <FormSearch />
        </div>
        <div className="box-map">
          <MapView />
        </div>
      </main>
    </div>
  );
}

export default App;
