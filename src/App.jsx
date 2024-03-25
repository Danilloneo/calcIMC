import TabelaIMC from "./componentes/Tabela/Index";
import Perfil from "./componentes/Perfil/index";
import Formulario from "./componentes/Formulario/index"; 

function App() {
  return (
    <>
      <div className="divBlock">
        <Perfil />
        <section id="result">
        <Formulario />
          <section id="reference-table">
            <TabelaIMC />
          </section>
        </section>
      </div>
    </>
  );
}

export default App;
