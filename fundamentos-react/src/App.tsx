import "./App.css";
import Aleatorio from "./components/basicos/Aleatorio";
import ComParametro from "./components/basicos/ComParametro";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Fragmento from "./components/basicos/Fragmento";
import Primeiro from "./components/basicos/Primeiro";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import Contador from "./components/contador/Contador";
import Input from "./components/formulario/Input";
import Card from "./components/layout/Card";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import Mega from "./components/mega/Mega";

const App = () => (
  <div className="App">
    <h1>Fundamentos React</h1>

    <div className="Cards">
      <Card titulo="Desafio Mega" color="#B9006E">
        <Mega nqtde={7}></Mega>
      </Card>
      <Card titulo="Contador" color="#424242">
        <Contador numeroInicial={15} passoInicial={5}></Contador>
      </Card>
      <Card titulo="Componente Controlado Input" color="#E45F56">
        <Input></Input>
      </Card>
      <Card titulo="Comunicação Indireta" color="#8BAD39">
        <IndiretaPai></IndiretaPai>
      </Card>
      <Card titulo="Comunicação Direta" color="#59323C">
        <DiretaPai></DiretaPai>
      </Card>
      <Card titulo="Renderização Condicional" color="#982395">
        <ParOuImpar numero={2}></ParOuImpar>
        <UsuarioInfo usuario={{ nome: "Fernando" }}></UsuarioInfo>
        <UsuarioInfo></UsuarioInfo>
      </Card>
      <Card titulo="Desafio Repetição" color="#3A9A2E">
        <TabelaProdutos></TabelaProdutos>
      </Card>
      <Card titulo="Repetição" color="#FA6900">
        <ListaAlunos></ListaAlunos>
      </Card>
      <Card titulo="Componente com Filhos" color="#00C8F8">
        <Familia sobrenome="Silva">
          <FamiliaMembro nome="Pedro" />
          <FamiliaMembro nome="Ana" />
          <FamiliaMembro nome="Gustavo" />
        </Familia>
      </Card>

      <Card titulo="Desafio Aleatório" color="#FA6900">
        <Aleatorio min={1} max={60} />
      </Card>

      <Card titulo="Fragmento" color="#E94C6F">
        <Fragmento />
      </Card>

      <Card titulo="Com Parametro" color="#E8B71A">
        <ComParametro titulo="Situação do Aluno" aluno="Pedro" nota={9.3} />
      </Card>

      <Card titulo="Primeiro" color="#588C73">
        <Primeiro />
      </Card>
    </div>
  </div>
);

export default App;
