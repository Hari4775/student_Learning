import React from "react";
import "./banner.scss";

// logo
import assuranceLogo from "../../assets/logos/assurance-logo-navbar.svg";

// images
import bannerIllustration from "../../assets/images/banner-illustration.svg";

// icons
import { ReactComponent as BellIcon } from "../../assets/icons/icon-bell.svg";

const Banner = () => {
  return (
    <section
      // use it for background image
      // style={{
      //   backgroundImage: `url(
      //     "https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
      //   )`,
      // }}
      // use it for background color
      style={{ backgroundColor: "red" }}
      className="banner"
    >
      <div className="container-lg">
        <div className="row">
          <div className="col-xl-5 col-sm-8 col-10">
            <div className="banner-card">
              <h3 className="banner-title">Welcome John Doe</h3>
              <p className="banner-description">
                All the courses are specially curated by our experts.Lets start
                learning
              </p>
            </div>
          </div>
        </div>
        <div className="banner-illustration-wrap">
          <img src={bannerIllustration} alt="banner illustration" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
