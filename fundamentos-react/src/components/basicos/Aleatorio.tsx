const Aleatorio = (props: any) => {
  const { min, max } = props;
  const aleatorio = Math.round(Math.random() * (max - min) + min);
  return (
    <>
      <h2>Valor Aleatório</h2>
      <p>
        <strong>Valor Mínimo: </strong> {min}
      </p>
      <p>
        <strong>Valor Máximo: </strong> {max}
      </p>
      <p>
        <strong>Valor Escolhido: </strong> {aleatorio}
      </p>
    </>
  );
};

export default Aleatorio;
