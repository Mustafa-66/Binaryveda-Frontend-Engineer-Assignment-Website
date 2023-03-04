import WhiteLogo from "../../assets/logo-white.svg";
import "./footer.css";

const Footer = () => (
  <div className="footer-section">
    <div>
      <img src={WhiteLogo} alt="logo" />
    </div>
    <span className="footer-links">
      <div className="footer-list">
        <h4>Overview</h4>
        <span>Why Marvel</span>
        <span>Enterprise</span>
        <span>Pricing</span>
        <span>Request a demo</span>
        <span>Explore</span>
        <span>Apps</span>
        <span>Developer API</span>
      </div>
      <div className="footer-list">
        <h4>Features</h4>
        <span>Wireframing</span>
        <span>Design</span>
        <span>Prototyping</span>
        <span>Collaboration</span>
        <span>Handoff</span>
        <span>Integrations</span>
        <span>Sketch Plugin</span>
      </div>
      <div className="footer-list">
        <h4>Support</h4>
        <span>Help Center</span>
        <span>Terms of Service</span>
        <span>Privacy</span>
        <span>Security</span>
      </div>
      <div className="footer-list">
        <h4>Marvel</h4>
        <span>Blog</span>
        <span>our Team</span>
        <span>Contact Us</span>
        <span>Success Stories</span>
        <span>Brand Guidelines</span>
      </div>
      <div className="footer-list">
        <h4>Follow</h4>
        <span>Twitter</span>
        <span>Dribble</span>
        <span>Facebook</span>
        <span>Github</span>
        <span>Workable</span>
      </div>
    </span>
  </div>
);

export default Footer;
