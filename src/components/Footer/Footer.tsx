import React from "react";
import "./footer.scss";

// logo
import assuranceLogo from "../../assets/logos/assurance-logo-navbar.svg";

// icons
import { ReactComponent as InstagramIcon } from "../../assets/icons/icon-instagram.svg";
import { ReactComponent as FacebookIcon } from "../../assets/icons/icon-facebook.svg";
import { ReactComponent as TwitterIcon } from "../../assets/icons/icon-twitter.svg";

const Footer = () => {
  return (
    <footer className="footer bg-primary-2">
      <div className="footer-top">
        <div className="container-lg">
          <div className="row">
            <div className="col-lg-3 col-12">
              <a href="" className="footer-logo-wrap">
                <img
                  src={assuranceLogo}
                  className="footer-logo"
                  alt="company logo"
                />
              </a>
              <p className="company-moto">Company Moto goes here</p>
            </div>
            <div className="col-6 col-sm-3 col-lg-2">
              <div className="link-wrapper">
                <h5 className="link-title">Support</h5>
                <ul>
                  <li>
                    <a href="">Licentiate</a>
                  </li>
                  <li>
                    <a href="">Associate</a>
                  </li>
                  <li>
                    <a href="">Fellowship</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-6 col-sm-3 col-lg-2">
              <div className="link-wrapper">
                <h5 className="link-title">Legal</h5>
                <ul>
                  <li>
                    <a href="">Contact Us</a>
                  </li>
                  <li>
                    <a href="">Help Center</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-6 col-sm-3 col-lg-2">
              <div className="link-wrapper">
                <h5 className="link-title">Category</h5>
                <ul>
                  <li>
                    <a href="">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="">Terms</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container-lg">
          <div className="row">
            <div className="col-12">
              <div className="d-block d-lg-flex justify-content-center justify-content-lg-between">
                <p className="copy-rights">
                  @2023 Assurance Academy. All right reserved
                </p>
                <div className="sm-wrap">
                  <div className="social-media-container">
                    <a href="" className="social-link">
                      <InstagramIcon />
                    </a>
                    <a href="" className="social-link">
                      <FacebookIcon />
                    </a>
                    <a href="" className="social-link">
                      <TwitterIcon />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
