import React, { useState } from "react";
import "./header.scss";

// logo
import assuranceLogo from "../../assets/logos/assurance-logo-navbar.svg";

// icons
import { ReactComponent as BellIcon } from "../../assets/icons/icon-bell.svg";
import { ReactComponent as MessageIcon } from "../../assets/icons/icon-message.svg";
import { ReactComponent as SettingsIcon } from "../../assets/icons/icon-setting.svg";
import { ReactComponent as LogoutIcon } from "../../assets/icons/icon-logout.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();


  const settingsClick = () => {
    navigate('/settings');
  }

  const logout = () => {
    navigate('/');
  }

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-primary-2 ">
        <div className="container-lg">
          {/* logo + hamburger menu */}
          <div className="d-flex align-items-center">
            <button
              className="navbar-toggler me-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <div className={`hamburger-menu-icon ${menuOpen ? "open" : ""}`}>
                <span className="line line-1"></span>
                <span className="line line-2"></span>
                <span className="line line-3"></span>
              </div>
            </button>
            <a className="navbar-brand" href="#">
              <img
                src={assuranceLogo}
                className="navbar-logo me-1 d-none d-md-block"
                alt="assurance-logo"
              />
              Assurance
            </a>
          </div>

          {/* notification + avatar dropdown for mobile screen */}
          <div className="d-block d-md-none">
            <div className="btn-group notification-dropdown">
              <button
                type="button"
                className="dropdown-toggle notification-btn"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <BellIcon />
                <div className="notification-dot">10</div>
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <div className="title-wrap">
                    <div className="underline">
                      <h5 className="dropdown-title">Notifications</h5>
                    </div>
                  </div>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    <div className="line">
                      <span className="me-2 circle">
                        <MessageIcon />
                      </span>
                      <p>Notification 1</p>
                    </div>
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    <div className="line">
                      <span className="me-2 circle">
                        <MessageIcon />
                      </span>
                      <p>Notification 1 sfdfd</p>
                    </div>
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    <div className="line">
                      <span className="me-2 circle">
                        <MessageIcon />
                      </span>
                      <p>Notification 1</p>
                    </div>
                  </button>
                </li>
                <li>
                  <button className="dropdown-item py-1" type="button">
                    <button className="btn btn-sm btn-link mx-auto">
                      See All
                    </button>
                  </button>
                </li>
              </ul>
            </div>
            <div className="btn-group avatar-dropdown">
              <button
                type="button"
                className="dropdown-toggle avatar-btn"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                  alt="user-avatar"
                />
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <button className="dropdown-item" type="button">
                    <span className="me-2">
                      <SettingsIcon />
                    </span>
                    Settings
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    <span className="me-2">
                      <LogoutIcon />
                    </span>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* navbar links */}
          <div
            className="collapse navbar-collapse"
            // className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
            id="navbarTogglerDemo02"
          >
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
              <Link
                  to="/courses"
                  className={`nav-link ${
                    location.pathname === "/courses" ? "active" : ""
                  }`}
                  aria-current="page"
                >
                  Courses
                </Link>
              </li>
              <li className="nav-item">
              <Link
                  to="/my-learnings"
                  className={`nav-link ${
                    location.pathname === "/my-learnings" ? "active" : ""
                  }`}
                >
                  My Learnings
                </Link>
              </li>
              <li className="nav-item">
              <Link
                  to="/cart"
                  className={`nav-link ${
                    location.pathname === "/cart" ? "active" : ""
                  }`}
                >
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* notification + avatar dropdown for large screen */}
          <div className="d-none d-md-block">
            <div className="btn-group notification-dropdown">
              <button
                type="button"
                className="dropdown-toggle notification-btn"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <BellIcon />
                <div className="notification-dot">10</div>
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <div className="title-wrap">
                    <div className="underline">
                      <h5 className="dropdown-title">Notifications</h5>
                    </div>
                  </div>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    <div className="line">
                      <span className="me-2 circle">
                        <MessageIcon />
                      </span>
                      <p>Notification 1</p>
                    </div>
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    <div className="line">
                      <span className="me-2 circle">
                        <MessageIcon />
                      </span>
                      <p>Notification 1 sfdfd</p>
                    </div>
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    <div className="line">
                      <span className="me-2 circle">
                        <MessageIcon />
                      </span>
                      <p>Notification 1</p>
                    </div>
                  </button>
                </li>
                <li>
                  <button className="dropdown-item py-1" type="button">
                    <Link to="/notifications" className="btn btn-sm btn-link mx-auto">
                      See All
                    </Link>
                  </button>
                </li>
              </ul>
            </div>
            <div className="btn-group avatar-dropdown">
              <button
                type="button"
                className="dropdown-toggle avatar-btn"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                  alt="user-avatar"
                />
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <button onClick={settingsClick} className="dropdown-item" type="button">
                    <span className="me-2">
                      <SettingsIcon />
                    </span>
                    Settings
                  </button>
                </li>
                <li>
                  <button onClick={logout} className="dropdown-item" type="button">
                    <span className="me-2">
                      <LogoutIcon />
                    </span>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
