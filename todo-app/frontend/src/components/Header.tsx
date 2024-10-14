const Header = (props: any) => {
  return (
    <header className="py-3 mb-4 border-bottom">
      <h2>
        {props.name}{" "}
        <small className="text-body-secondary">{props.small}</small>
      </h2>
    </header>
  );
};

export default Header;
