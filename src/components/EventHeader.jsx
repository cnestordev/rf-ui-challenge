import "../styles/header.css";
import logo from "../assets/media/rf-icon-large.svg";

const EventHeader = () => {
  return (
    <header className="event-heading">
      <div className="event-container">
        <div className="event-details">
          <div className="event-icon">
            <img src={logo} alt="event logo" />
          </div>
          <div className="header-info">
            <h2 className="event-title">RainFocus Summit</h2>
            <div className="event-time">
              <p>December 15th</p>
              <p>Lehi, Utah</p>
            </div>
          </div>
        </div>

        <div className="edit-btn-container">
          <button className="edit-event-btn">Edit Event</button>
        </div>
      </div>

      <div className="event-setup">
        <h3>Event setup guide</h3>
        <p>
          See the available list of modules below. We suggest that you start
          with the attendee module.
        </p>
      </div>
      <hr />
    </header>
  );
};

export default EventHeader;
