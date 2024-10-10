import "./Card.css";

const Card = (props: any) => {
    const { titulo, children, color } = props;
    const cardStyle = {
      backgroundColor: color || "#008",
      borderColor: color || "#008",
    };
  return (
    <div className="Card" style={cardStyle}>
      <div className="Title">{titulo}</div>
      <div className="Content">{children}</div>
    </div>
  );
};

export default Card;
