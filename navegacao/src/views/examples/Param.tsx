import { useParams } from "react-router-dom";

const Param = (props: any) => {
  const { id } = useParams();
  return (
    <div>
      <h1>Parametros</h1>
      <h2>Valor {id}</h2>
    </div>
  );
};

export default Param;
