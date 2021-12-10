import React from 'react'
import { Navbar, Nav, Container, Image ,Badge, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import {useSelector,useDispatch} from "react-redux"
import {LogOutAction} from "../actions/userActions"
const NavBar = () => {
const dispatch = useDispatch()
    const {cartItems}=useSelector((x)=>x.cartReducer)
    const {userInfo}=useSelector((y)=>y.userData)
    
//    console.log(userInfo.users)
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <Image src="images/logo.png"
                            alt="logo"
                            style={{ height: "50px" }} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="ms-auto">
                            <LinkContainer activeClassName to="/">
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
{
    userInfo.users ? (
        <LinkContainer to="/">
        
        <NavDropdown title={userInfo.users.name}>
        <LinkContainer to="/orders">
        <NavDropdown.Item>Order</NavDropdown.Item>
        </LinkContainer>
           
            <NavDropdown.Item onClick={()=>dispatch(LogOutAction())}>Log Out</NavDropdown.Item>
        </NavDropdown>
         </LinkContainer>
    ):(<>
        <LinkContainer activeClassName to="/login">
                                <Nav.Link>Login</Nav.Link>
                            </LinkContainer>
                            <LinkContainer activeClassName to="/register">
                                <Nav.Link>Register</Nav.Link>
                            </LinkContainer>
    </>)
}


                           
                            <LinkContainer activeClassName to="/cart">
                                <Nav.Link> Cart {cartItems?  cartItems.length:null}</Nav.Link>
                            </LinkContainer>
                            <LinkContainer activeClassName to="/about">
                                <Nav.Link>About Us </Nav.Link>
                            </LinkContainer>
                            <LinkContainer activeClassName to="/contact">
                                <Nav.Link>Contact Us</Nav.Link>
                            </LinkContainer>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar
