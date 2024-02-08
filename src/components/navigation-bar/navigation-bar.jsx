import { Outlet, Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

export const NavigationBar = () => {
  return (
    <>
      <Navbar className="navbar mb-5" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Nemanja Banicevic
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="d-flex align-items-center" as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link className="d-flex align-items-center" as={Link} to="/contact">
                Contact
              </Nav.Link>
              <Nav.Link className="d-flex align-items-center" as={Link} to="/portfolio">
                My Projects
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as='a'>
                <a href="https://github.com/corto0406" target="_blank">
                  <img className="footer-image" src={require("../../img/github_logo.png")} alt="Github icon" />
                </a>
              </Nav.Link>
              <Nav.Link as='a'>
                <a href="https://www.linkedin.com/in/nemanja-banicevic-1b37492aa/" target="_blank">
                  <img className="footer-image" src={require("../../img/linkedin_logo.png")} alt="LinkedIn icon" />
                </a>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* <Outlet /> */}
    </>
  );
};

export default NavigationBar;
