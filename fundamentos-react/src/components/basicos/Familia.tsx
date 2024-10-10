import { cloneElement } from "react";

const Familia = (props: any) => {
  return (
    <div>
      {props.children.map((child: any, i: any) => {
        return cloneElement(child, { ...props, key: i });
      })}
    </div>
  );
};

export default Familia;
