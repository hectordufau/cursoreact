const IndiretaFilho = (props: any) => {
  const { quandoClicar } = props;
  const gerarIdade = () => Math.round(Math.random() * 20 + 50);
  return (
    <div>
      <div>Filho</div>
      <button onClick={() => quandoClicar("Joao", gerarIdade(), true)}>
        Fornecer Informações
      </button>
    </div>
  );
};

export default IndiretaFilho;
