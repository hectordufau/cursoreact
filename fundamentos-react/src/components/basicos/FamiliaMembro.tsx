const FamiliaMembro = (props: any) => {
  const { nome, sobrenome } = props;
  return (
    <div>
      {nome} <strong>{sobrenome}</strong>
    </div>
  );
};

export default FamiliaMembro;
