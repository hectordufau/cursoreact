const PassoForm = (props: any) => {
  const { setPasso, passo } = props;
  return (
    <>
      <div>
        <label htmlFor="inputPasso">Passo: </label>
        <input
          id="inputPasso"
          type="number"
          onChange={(e) => setPasso(+e.target.value)}
          value={passo}
        />
      </div>
    </>
  );
};

export default PassoForm;
