import React from "react";
import Article from "../../components/article/Article";
import { services01, services02 } from "./imports";
import "./services.css";

const Services = () => (
  <div className="cluff__services" id="services">
    <div className="cluff__services-title">
      <div>
        <div>
          <h2>Our Services</h2>{" "}
        </div>
      </div>
    </div>

    <div className="cluff__services-container">
      <div className="cluff__services-container_groupA">
        <Article
          imgUrl={services01}
          title="Commercial Electrical"
          text="At Cluff Electric we have the knowledge, experience and equipment to undertake all types of commercial electrical work."
        />
      </div>
      <div className="cluff__services-container_groupA">
        <Article
          imgUrl={services02}
          title="Residential Electrical"
          text="Cluff Electric offer a complete and wide range of domestic electrical services, from planned works to same-day callouts. "
        />
      </div>
      
    </div>
    <div className="cluff__services-title">
        <div>
          <div>
            <h2>RESIDENTIAL AND COMMERCIAL ELECTRICAL SERVICES</h2>{" "}
            <p>
              Whenever there is an electrical issue in your home, we have the
              expertise to handle. It doesn’t matter if the job is big or small,
              you can always expect quality workmanship and exceptional
              professionalism from Cluff Electric's residential
              electricians. There are obvious inconveniences that come with
              unreliable electricity, but there are bigger concerns than spoiled
              food or not being able to check your inbox. When your home or
              business’s wiring, or even just a small feature of it, hasn’t been
              connected by a trained professional, you have to be prepared for
              the possibility of an electrical fire. <br/><br/> There is too much in your
              home and business to choose an unqualified contractor to handle
              your electrical needs. If you want to ensure the security,
              function and efficiency of your electricity, it starts with a call
              to Cluff Electric. Whenever you need help with anything
              related to your home or business’s electrical services, give
              Cluff Electric a call and we’ll be happy to assist you.
            </p>
          </div>
        </div>
      </div>
  </div>
);

export default Services;
