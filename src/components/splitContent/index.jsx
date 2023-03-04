import Showcase from "../../assets/showcase.png";
import Slackbot from "../../assets/botbot.png";
import "./splitContent.css";

const SplitContent = () => (
  <div className="split-section-container">
    <div className="split-section">
      <div className="split-section-content">
        <h1>Showcase your app in our integrations directory</h1>
        <p>
          Building something special? We're always looking to work with partners
          who wants to help the world bring their ideas to life
        </p>
        <span className="split-section-buttons">
          <button className="split-section-button-white">
            Become a partner
          </button>
          <button className="split-section-button-dark">
            View Integrations
          </button>
        </span>
      </div>
      <img src={Showcase} alt="Image" className="split-section-image" />
    </div>
    <div className="split-section split-section-reverse">
      <div className="split-section-content">
        <h1>A Slack-bot for creating and managing prototypes</h1>
        <p>
          Building something special? We're always looking to work with partners
          who wants to help the world bring their ideas to life
        </p>
        <span className="split-section-buttons">
          <button className="split-section-button-white">
            Become a partner
          </button>
          <button className="split-section-button-dark">
            View Integrations
          </button>
        </span>
      </div>
      <img src={Slackbot} alt="Image" className="split-section-image" />
    </div>
  </div>
);

export default SplitContent;
