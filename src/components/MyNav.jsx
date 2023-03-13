import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import page_logo from "../assets/images/svg/pagelogo.svg";
import heartLogo from "../assets/images/svg/heartLogo.svg";
import threelines from "../assets/images/svg/threelines.svg";
function MyNav() {
  return (
    <Navbar collapseOnSelect expand="lg" className="nav_bg">
      <Container className="">
        <Navbar.Brand href="#home" className="py-3">
          <img src={page_logo} alt="pagelogo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="align-items-center ">
            <Nav.Link
              href="#features"
              className=" ff_opensans mx-2 fw_600 fs_md color_cream"
            >
              LEARN
            </Nav.Link>
            <Nav.Link
              href="#features"
              className=" ff_opensans mx-2 fw_600 fs_md color_cream"
            >
              LISTINGS
            </Nav.Link>
            <Nav.Link
              href="#features"
              className=" ff_opensans mx-2 fw_600 fs_md color_cream"
            >
              COMMUNITIES
            </Nav.Link>
            <Nav.Link
              href="#features"
              className=" ff_opensans mx-2 fw_600 fs_md color_cream"
            >
              CONTACT
            </Nav.Link>
            <Nav.Link href="#deets">
              <img src={heartLogo} alt="heartlogo" />
            </Nav.Link>
            <NavDropdown
              title="$ USD "
              className="ff_opensans mx-2 fw_600 fs_md "
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link eventKey={2} className="d-none d-lg-block" href="#">
              <img src={threelines} alt="threelines" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;
