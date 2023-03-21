import "../styles/main.css";

const Box = ({ title, body }) => {
  return (
    <div className="step-card">
      <span>{title}</span>
      <div>{body}</div>
    </div>
  );
};

export default Box;
