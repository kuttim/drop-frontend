import ThemeToggle from '../Toggle/DarkMode';
function Header() {
  return (
    <div className="header">
      <a className="header-left" href="#">
        <span className="logo-text">Drop</span>
      </a>
      <nav className="nav">
        <ThemeToggle />
        <a className="nav-link" href="#">
          About
        </a>
        <a
          className="nav-link"
          href="https://github.com/kuttim/drop-frontend"
        >
          GitHub
        </a>
      </nav>
    </div>
  );
}

export default Header;
