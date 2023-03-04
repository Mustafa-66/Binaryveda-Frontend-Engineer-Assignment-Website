import HeroImage from "../../assets/illustration.png";
import "./heroSection.css";

const HeroSection = () => (
  <>
    <div className="hero-section">
      <div className="hero-content">
        <h1>Let's build the future of design now</h1>
        <p>
          Create amazing tools and integrations for 1 million users or customise
          for your team
        </p>
        <span className="hero-buttons">
          <button className="button-blue">Submit your app</button>
          <button className="button-white">View API docs</button>
        </span>
      </div>
      <img src={HeroImage} alt="Hero image" className="hero-image" />
    </div>
    <div className="hero-section-bottom">
      <h1>Experience the freedom to build features, right away</h1>
      <p>
        You can now harness components of our platform and build powerful
        integrations for our 2 million users - or simply just for your team
      </p>
    </div>
  </>
);

export default HeroSection;
