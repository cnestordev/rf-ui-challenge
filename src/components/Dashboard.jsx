import "../styles/dashboard.css"
import EventHeader from "./EventHeader";
import Main from "./Main";

const Dashboard = () => {
    return (
        <div className="dashboard">
            <EventHeader />
            <Main />
        </div>
    )
}

export default Dashboard;