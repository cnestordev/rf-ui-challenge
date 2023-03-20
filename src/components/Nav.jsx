import "../styles/nav.css"

import smallLogo from '../assets/media/rf-icon-small.svg'
import userLogo from '../assets/media/user-icon.svg'
import rainfocuslogo from '../assets/media/rflogo.svg'

const Nav = ({isOpen}) => {
  return (
    <nav className={isOpen ? 'main-nav' : 'main-nav hidden'}>
      <div className="left-nav">
        <ul className="logos">
          <li><img src={rainfocuslogo} alt="logo" /></li>
          <li><img src={smallLogo} alt="logo" /></li>
        </ul>
        <div className="user-icon">
          <span className="username">FL</span>
        </div>
      </div>
      <div className="right-nav">
        <div className="event-header">
          <h3>RainFocus Summit</h3>
          <h4>Lehl, UT • December 15th</h4>
          <div className="nav-search">
            <label>
              <input type="input" placeholder="Search" />
            </label>
          </div>
        </div>
        <div className="event-menu">
          <ul>
            <div className="menu-items-name">
              <span className="circle"></span>
              <span className="menu-items">Guide</span>
            </div>
          </ul>
          <ul className="active">
            <div className="menu-items-name">
              <span className="circle"></span>
              <span className="menu-items">Attendees</span>
            </div>
            <li>Attendees</li>
            <li>Attendee types</li>
            <li>Packages</li>
            <li>Reg codes</li>
            <li>Discounts</li>
          </ul>
          <ul>
            <div className="menu-items-name">
              <span className="circle"></span>
              <span className="menu-items">Content</span>
            </div>
          </ul>
          <ul>
            <div className="menu-items-name">
              <span className="circle"></span>
              <span className="menu-items">Exhibitors</span>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  )
};

export default Nav;
