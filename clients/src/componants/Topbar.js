import React from 'react'
import { Navbar, Nav, Container } from "react-bootstrap"
import { LinkContainer } from 'react-router-bootstrap'
import { MdLocalOffer } from "react-icons/md";
const Topbar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <h6 className="text-light">  <MdLocalOffer className="text-warning" /> &nbsp; &nbsp; Free Home Delivery on Order Above 500/- Rupees</h6>
                    <Nav className="ms-auto">
                        <LinkContainer activeClassName to="/" >
                            <Nav.Link >Home</Nav.Link>
                        </LinkContainer>

                        <LinkContainer activeClassName to="/about">
                            <Nav.Link >About</Nav.Link>

                        </LinkContainer>
                        <LinkContainer activeClassName to="/contact">
                            <Nav.Link >Contact us</Nav.Link>

                        </LinkContainer>
                    </Nav>

                </Container>

            </Navbar>


        </>
    )
}

export default Topbar
