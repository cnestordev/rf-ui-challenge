import '../styles/main.css'
import Box from './Box';

const Main = () => {
    return (
        <div className='main-container'>
            <div className="main-header">
                <span className='icon'></span>
                <h3>Attendees</h3>
            </div>

            <div className='step-container'>
                <h3 className='step-title'><span>Step 1:</span> Base settings.</h3>
                <div className='step-border'>
                    <Box title="General" body="Define Attendee types & attributes" />
                    <Box title="Title" body="Description that explains the value goes here. Description that explains the value goes here. " />
                    <Box title="Title" body="Description that explains the value goes here. Description that explains the value goes here. " />
                </div>
            </div>
        </div>
    )
}

export default Main;