import "./cardsSection.css";
import ApiImage from "../../assets/apiTeam.png";
import Graphql from "../../assets/graphQL.png";
import Supercharge from "../../assets/superchargeWorkflow.png";

const CardsSection = () => (
  <div className="cards-section">
    <div className="card">
      <img src={ApiImage} alt="card" />
      <h3>Dedicated API Team</h3>
      <p>
        Our team are available for user's questions via our Slack Developer
        Community and Email
      </p>
    </div>
    <div className="card">
      <img src={Graphql} alt="card" />
      <h3>Our API uses Graph QL</h3>
      <p>
        No handling server side. Get many API's responses in a single request
      </p>
    </div>
    <div className="card">
      <img src={Supercharge} alt="card" />
      <h3>Supercharge your workflow</h3>
      <p>
        Automate workflows, integrate and analyse data and take Marvel to the
        next level
      </p>
    </div>
  </div>
);

export default CardsSection;
