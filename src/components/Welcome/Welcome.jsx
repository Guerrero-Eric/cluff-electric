import React from "react";
import HouseIcon from "../../images/house-icon.png";
import "./welcome.css";

const Welcome = () => {
  return (
    <div className="cluff__welcome" id="welcome">
      <div className="cluff__welcome-title">
        <div className="cluff__welcome-icon">
          <img src={HouseIcon} alt="house icon" />
        </div>
        <div>
          <div>
            <h1>WHY WE SHOULD BE YOUR - TOP CHOICE -</h1>{" "}
            <p>
              People depend on electricity now more than ever. It keeps us
              connected to the world around us, it keeps our food fresh, it
              drives industries worldwide. Because we all depend on electricity
              to get us through the days, you need to make sure that your home
              or business is wired correctly by a trained professional.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
