import React, { useEffect } from 'react'
import Allpizza from "../pizza-data"
import { Col, Row } from 'react-bootstrap'
import PizzaCard from '../componants/PizzaCard'
import { useDispatch, useSelector } from "react-redux"
import { AllproductsAction } from "../actions/productsAction"
import Loader from "../componants/Loader"
const HomePage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(AllproductsAction())
    }, [dispatch])

    const AllProducts = useSelector((x) => x.AllPizza)
    // console.log(AllProducts)
    const { pizzas, loading, error } = AllProducts
    return (
        <>
            {loading ? (
                <Loader></Loader>
            ) : error ? (
                <h1>Error while fetching pizzas</h1>
            ) : (
                <Row>
                    {pizzas.map((x) => (<Col md={3} style={{ marginBottom: "20px" }}><PizzaCard pizza={x} /></Col>))}
                </Row>

            )}

        </>
    )
}

export default HomePage
