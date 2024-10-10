import { useCallback, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import UseCallbackButtons from "./useCallbackButtons";

const UseCallback = (props: any) => {
  const [count, setCount] = useState(0);

  const inc = useCallback((delta: number) => {
    setCount(curr => curr + delta);
  }, [setCount]);

  /* const inc = (delta: number) => {
    setCount(count + delta);
  }; */

  return (
    <div className="UseCallback">
      <PageTitle
        title="Hook UseCallback"
        subtitle="Retorna uma função memoizada!"
      />
      <div className="center">
        <span className="text">{count}</span>
        <UseCallbackButtons inc={inc}></UseCallbackButtons>
      </div>
    </div>
  );
};

export default UseCallback;
