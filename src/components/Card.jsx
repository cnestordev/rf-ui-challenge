import "../styles/card.css";

const Card = ({ title, body, icon }) => {
  return (
    <div className="card-border">
      <div className="card-header">
        <img src={icon} alt="icon" />
        <span>{title}</span>
      </div>
      <div className="card-body">
        <p>{body}</p>
      </div>
    </div>
  );
};

export default Card;
