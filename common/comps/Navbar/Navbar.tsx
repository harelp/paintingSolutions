function Navbar() {
  return (
    <nav
      className="navbar mt-3 mb-3"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
            />
          </a>

          <a
            role="button"
            className="navbar-burger" // put is-active here for navbar burger
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu has-text-centered">
          {
            // put is-active here for navbar burger
          }
          <div className="navbar-start"></div>

          <div className="navbar-end">
            <a className="navbar-item has-text-weight-normal" href="#">
              Home
            </a>
            <div className="navbar-item">
              <a className="button is-medium is-warning is-rounded has-text-weight-normal">
                <strong>Call Now</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
