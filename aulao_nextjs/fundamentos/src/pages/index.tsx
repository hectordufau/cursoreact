import Navegador from "@/components/Navegador";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexWrap: "wrap",
      }}
    >
      <Navegador destino="/estiloso" texto="Estiloso" cor="crimson" />
      <Navegador destino="/exemplo" texto="Exemplo" />
      <Navegador destino="/navegacao" texto="Nav Simples" cor="green" />
      <Navegador
        destino="/cliente/sp-1/123"
        texto="Nav Dinamica"
        cor="#6A5D7B"
      />
      <Navegador destino="/estado" texto="Com Estado" cor="gray" />
      <Navegador destino="/integracao" texto="Integração API 1" cor="#E9D985" />
    </div>
  );
};

export default Home;
