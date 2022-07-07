import React, { Component } from "react";
import "./style.css";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

import { Link } from "react-router-dom";
import CartSummary from "./CartSummary";
export default class Navi extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" expand="md" light className="deneme">
          <NavbarBrand href="/">
            <img
              id="logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Hepsiburada_logo_official.svg/2560px-Hepsiburada_logo_official.svg.png"
              alt=""
            />
          </NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() {}} />
          <Collapse navbar>
            <Nav className="me-auto" navbar>
              <NavLink>
                <Link to="form1">Form Demo 1</Link>
              </NavLink>
              <NavLink>
                <Link to="form2">Form Demo 2</Link>
              </NavLink>
              <CartSummary
                removeFromCart={this.props.removeFromCart}
                cart={this.props.cart}
              />
            </Nav>
            <NavbarText>Version 1.0</NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
