import "./App.css";
import { welcome } from "./components/alerts";
import { ChangeSateteBTN } from "./components/ChangeSateteBTN";
import { FormSearch } from "./components/form-search/FormSearch";
import { MapView } from "./components/MapView";

function App() {
  welcome();
  return (
    <div className="container">
      <header>
        <h1>
          <span>
            <img
              src={require("./components/assets/svgs/paw.svg").default}
              alt="paw"
              width="30px"
            />
          </span>{" "}
          Animal Search{" "}
          <img
            src={require("./components/assets/svgs/paw.svg").default}
            alt="paw"
            width="30px"
          />
        </h1>
      </header>
      <section>
        <article>
          <h3>Agregar referencia:</h3>
          <p>
            Para poder "marcar" seleccione "Agregar Mascota", sea lo mas exacto
            posible.
          </p>
        </article>
        <article>
          <h3>Dejar de Marcar:</h3>
          <p>
            Para dejar de crear referencias y moverse por el mapa, seleccione
            "Cancelar modo edición"
          </p>
        </article>
      </section>
      <ChangeSateteBTN />
      <main>
        <div className="box-form">
          <FormSearch />
        </div>
        <div className="box-map">
          <MapView />
        </div>
      </main>
      <h4>
        <p style={{ textAlign: "center" }}>
          Proyecto iniciado por{" "}
          <a
            href="https://wogelman-alejandro.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            Alejandro
          </a>
        </p>
      </h4>
    </div>
  );
}

export default App;
