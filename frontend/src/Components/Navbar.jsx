import React from "react";
import "./Navbar.css";

import {
    Navbar,
    Nav,
    NavDropdown,
    Container
} from "react-bootstrap";

import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

import logo from "../Images/logo.png";

function NavbarComponent({ cart }) {

    return (
        <Navbar
            expand="lg"
            sticky="top"
            className="custom-navbar"
        >
            <Container>

                {/* Logo */}
                <Navbar.Brand
                    as={Link}
                    to="/"
                >
                    <img
                        src={logo}
                        alt="logo"
                        className="logo"
                    />
                </Navbar.Brand>

                {/* Mobile Toggle */}
                <Navbar.Toggle
                    aria-controls="navbar"
                />

                <Navbar.Collapse id="navbar">

                    <Nav className="ms-auto align-items-center">

                        {/* Home */}
                        <Nav.Link
                            as={Link}
                            to="/"
                        >
                            Home
                        </Nav.Link>

                        {/* Categories */}
                        <NavDropdown
                            title="Categories"
                            id="categories-dropdown"
                        >

                            <NavDropdown.Item
                                as={Link}
                                to="/category/shirts"
                            >
                                Shirts
                            </NavDropdown.Item>

                            <NavDropdown.Item
                                as={Link}
                                to="/category/tshirts"
                            >
                                T-Shirts
                            </NavDropdown.Item>

                            <NavDropdown.Item
                                as={Link}
                                to="/category/jeans"
                            >
                                Jeans
                            </NavDropdown.Item>

                            <NavDropdown.Item
                                as={Link}
                                to="/category/ethnicwear"
                            >
                                Ethnic Wear
                            </NavDropdown.Item>

                            <NavDropdown.Item
                                as={Link}
                                to="/category/trackpants"
                            >
                                Track Pants
                            </NavDropdown.Item>

                            <NavDropdown.Item
                                as={Link}
                                to="/category/shorts"
                            >
                                Shorts
                            </NavDropdown.Item>

                            <NavDropdown.Item
                                as={Link}
                                to="/category/watches"
                            >
                                Watches
                            </NavDropdown.Item>

                            <NavDropdown.Item
                                as={Link}
                                to="/category/shoes"
                            >
                                Shoes
                            </NavDropdown.Item>

                        </NavDropdown>

                        {/* FAQ */}
                        <Nav.Link
                            as={Link}
                            to="/faq"
                        >
                            FAQ
                        </Nav.Link>

                        {/* Create Account */}
                        <Nav.Link
                            as={Link}
                            to="/create-account"
                        >
                            Create Account
                        </Nav.Link>

                        {/* Sign In */}
                        <Nav.Link
                            as={Link}
                            to="/signin"
                        >
                            Sign In
                        </Nav.Link>

                        {/* Contact Us */}
                        <Nav.Link
                            as={Link}
                            to="/contact"
                        >
                            Contact Us
                        </Nav.Link>

                        {/* Cart */}
                        <Nav.Link
                            as={Link}
                            to="/cart"
                            className="cart-link"
                        >
                            <FaShoppingCart
                                style={{
                                    fontSize: "18px",
                                    marginRight: "6px"
                                }}
                            />

                            <span className="cart-text">
                                Cart ({cart.length})
                            </span>
                        </Nav.Link>

                    </Nav>

                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

export default NavbarComponent;