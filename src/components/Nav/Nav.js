import React from "react";
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Nav.css"



class NavBar extends React.Component {



  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <div>
            <Link to="/">
              <img className="style__logo___p5nsH" src={require("../../utils/logo.png")} alt="logo"/>
            </Link>
          </div>
        </Navbar.Header>
        <Nav pullRight>
          <NavItem eventKey={1} href="/portfolio">
            Portfolio
          </NavItem>
          {/* <NavItem eventKey={2} href="#">
            Link
          </NavItem> */}
          <NavDropdown eventKey={3} title="More" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}><a href="https://www.linkedin.com/in/elmagonzalez/">LinkedIn</a></MenuItem>
            
            <MenuItem eventKey={3.2}><a href="https://github.com/eyl91">Github</a></MenuItem>
            <MenuItem eventKey={3.3}><a href="http://www.kpbs.org/staff/elma-gonzalez/">KPBS</a></MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.4}><Link to="/contact">Contact Me</Link></MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    )
  }
}

export default NavBar;




