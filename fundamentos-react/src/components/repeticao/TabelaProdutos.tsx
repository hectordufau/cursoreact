import produtos from "../../data/produtos";
import "./TabelaProdutos.css";

const lista = produtos.map((produto, i) => {
  return (
    <tr key={produto.id} className={i % 2 === 0 ? "Par" : ""}>
      <td>{produto.id}</td>
      <td>{produto.nome}</td>
      <td>R$ {produto.preco}</td>
    </tr>
  );
});

const TabelaProdutos = (props: any) => {
  return (
    <div className="TabelaProdutos">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Produto</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>{lista}</tbody>
      </table>
    </div>
  );
};

export default TabelaProdutos;
