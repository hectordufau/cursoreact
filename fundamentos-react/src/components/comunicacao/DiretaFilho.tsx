const DiretaFilho = (props: any) => {
  const { texto, numero, bool } = props;
  return (
    <div>
      <span>{texto} </span>
      <span>
        <strong>{numero}</strong>{" "}
      </span>
      <span>{bool ? "Verdadeiro" : "Falso"}</span>
    </div>
  );
};

export default DiretaFilho;
