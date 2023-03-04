import "./navbar.css";
import LogoWhite from "../../assets/logo-white.svg";

const NavBar = () => {
  return (
    <div class="nav-wrapper">
      <div class="logo-container">
        <img class="logo" src={LogoWhite} alt="Logo" />
        &nbsp;| Developers
      </div>
      <nav>
        <input class="hidden" type="checkbox" id="menuToggle" />
        <label class="menu-btn" for="menuToggle">
          <div class="menu"></div>
          <div class="menu"></div>
          <div class="menu"></div>
        </label>
        <div class="nav-container">
          <ul class="nav-tabs">
            <li class="nav-tab">Why Marvel</li>
            <li class="nav-tab">Enterprise</li>
            <li class="nav-tab">Pricing</li>
            <li class="nav-tab">Sign in</li>
            <li class="nav-tab">Sign up free</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
