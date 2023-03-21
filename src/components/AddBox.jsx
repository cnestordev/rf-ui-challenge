import "../styles/addbox.css";
import icon from "../assets/media/plus.svg";

const AddBox = ({ body }) => {
  return (
    <div className="addbox-border">
      <div className="addbox-header">
        <img src={icon} alt="icon" />
      </div>
      <div className="addbox-body">
        <p>Add Registration Workflow</p>
      </div>
    </div>
  );
};

export default AddBox;
