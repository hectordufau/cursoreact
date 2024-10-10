import Else from "./Else";
const If = (props: any) => {
  const { test, children } = props;
  const elseChild = children.filter((child: any) => {
    return child.type && child.type.name === Else.name;
  })[0];
  const ifChildren = children.filter((child: any) => {
    return child !== elseChild;
  });
  if (test) {
    return ifChildren;
  } else if (elseChild) {
    return elseChild;
  } else {
      return false;
  }
};

export default If;
