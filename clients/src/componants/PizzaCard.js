import React, { useState } from 'react'
import { Card, Button, Row, Col, Modal } from "react-bootstrap"
import {useDispatch} from "react-redux"
import {addToCartAction} from "../actions/cartAction"
const PizzaCard = ({ pizza }) => {
const dispatch = useDispatch()
    const [qty, setQty] = useState(1)
    const [types, setTypes] = useState("small")
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
const AddToCartHandeler=()=>{
dispatch(addToCartAction(pizza,qty,types))
}
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={pizza.image} onClick={handleShow} />
                <Card.Body>
                    <Card.Title>{pizza.name}</Card.Title>
                    <Card.Text>
                        <Row>
                            <Col md={6}>
                                <h6>Types</h6>
                                {<select onChange={(e) => setTypes(e.target.value)} value={types}>
                                    {
                                        pizza.varients.map((y) => (<><option value={y}>{y}</option></>))
                                    }
                                </select>}
                            </Col>
                            <Col md={6}>
                                <h6>Quantity</h6>
                                {<select onChange={(e) => setQty(e.target.value)}>
                                    {
                                        [...Array(10).keys()].map((y) => (<><option value={y + 1}>{y + 1}</option></>))
                                    }
                                </select>}
                            </Col>

                        </Row>
                    </Card.Text>
                    <Row>
                        <Col md={6}><h6>Price: {pizza.prices[0][types] * qty} </h6></Col>
                        <Col md={6}><Button  onClick ={AddToCartHandeler}>Add to Cart</Button></Col>

                    </Row>

                </Card.Body>
            </Card>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{pizza.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <Card.Img
                            variant="top"
                            src={pizza.image}
                            style={{ height: "250px" }}
                        />
                    </div>
                    <div>
                        <h5>Description :</h5>
                        <h6>{pizza.description}</h6>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default PizzaCard
