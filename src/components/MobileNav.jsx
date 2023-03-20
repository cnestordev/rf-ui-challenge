import "../styles/mobilenav.css"
import hamburger from "../assets/media/hamburger.svg"

const MobileNav = ({isOpen, setOpen}) => {
    const handleChange = () => {
        setOpen(!isOpen)
    };

    return (
        <div className="mobile-nav">
            <img onClick={handleChange} src={hamburger} alt="hamburger icon" />
        </div>
    )
}

export default MobileNav;