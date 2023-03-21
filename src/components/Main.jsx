import "../styles/main.css";
import arrow from "../assets/media/arrow.svg";
import laptop from "../assets/media/laptop.svg";

import Box from "./Box";
import Card from "./Card";
import AddBox from "./AddBox";

const Main = () => {
  return (
    <div className="main-container">
      <div className="main-header">
        <span className="icon"></span>
        <h3>Attendees</h3>
      </div>

      <div className="step-container">
        <h3 className="step-title">
          <span>Step 1:</span> Base settings.
        </h3>
        <div className="step-border">
          <Box title="General" body="Define Attendee types & attributes" />
          <Box
            title="Title"
            body="Description that explains the value goes here. Description that explains the value goes here. "
          />
          <Box
            title="Title"
            body="Description that explains the value goes here. Description that explains the value goes here. "
          />
        </div>
      </div>

      <div className="step-container">
        <h3 className="step-title">
          <span>Step 2:</span> Build registration workflows.
        </h3>
        <div className="step-border no-border">
          <Card
            title="Attendee Registration"
            body="Start by creating a general registration workflow"
            icon={arrow}
          />
          <Card
            title="Attendee Registration"
            body="Start by creating a general registration workflow"
            icon={arrow}
          />
          <Card
            title="Attendee Registration"
            body="Start by creating a general registration workflow"
            icon={arrow}
          />
          <AddBox
            title="Attendee Registration"
            body="Start by creating a general registration workflow"
          />
        </div>

        <div className="step-container">
          <h3 className="step-title">
            <span>Step 3:</span> Design post-registration experiences.
          </h3>
          <div className="step-border no-border">
            <Card
              title="Attendee Portal"
              body="Manage the portal that attendees will see after they've register for your event."
              icon={laptop}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
