import { Outlet, Link } from "react-router-dom";
import { Navbar, Container, Nav, Image } from "react-bootstrap";


export const StickyFooter = () => {
  return (
    <>
      <Navbar className="sticky-footer" fixed="bottom">
        <Container className="d-flex justify-content-center">
        <a href="https://github.com/corto0406" target="_blank">
  <img className="footer-image" src={require("../../img/github_logo.png")} alt="Github icon" />
</a>

        </Container>
      </Navbar>

      {/* <Outlet /> */}
    </>
  );
};