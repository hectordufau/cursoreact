const Botoes = (props: any) => {
  const { inc, dec } = props;
  return (
    <>
      <button onClick={inc}>+</button> <button onClick={dec}>-</button>
    </>
  );
};

export default Botoes;
