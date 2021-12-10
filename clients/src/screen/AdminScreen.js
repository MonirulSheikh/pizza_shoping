import React from 'react'
import { Button, ButtonGroup, Col, Container, Row } from 'react-bootstrap'

const AdminScreen = () => {
    return (
        <>
        <Container>
      
            <Row className="mt-3">
            <h1 className="text-center bg-dark text-light p-2">Admin Panel</h1>

            <Col md={2}>
                <ButtonGroup vertical style={{minHeight:"400px"}}>
                    <Button> All Users</Button>
                    <Button>All Pizzas</Button>
                    <Button> Add New Pizza</Button>
                    <Button>All Orders</Button>
                </ButtonGroup>
            </Col>
            </Row>
        </Container>
             
        </>
    )
}

export default AdminScreen
