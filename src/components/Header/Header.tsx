import { WiMoonAltFirstQuarter } from "react-icons/wi";
function Header() {
  return (
    <div className="header">
      <a className="header-left" href="#">
        <span className="logo-text">Drop</span>
      </a>
      <nav className="nav">
        <WiMoonAltFirstQuarter size="32" color="white" />
        <a className="nav-link" href="#">
          About
        </a>
        <a className="nav-link" href="https://github.com/kuttim/drop-frontend">
          GitHub
        </a>
      </nav>
    </div>
  );
}

export default Header;
