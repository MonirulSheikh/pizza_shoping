import React, { useEffect } from 'react'
import Loader from "../componants/Loader"
import Error from "../componants/Error"
import Success from "../componants/Success"
import {useDispatch,useSelector} from "react-redux"
import {getOrderAction} from "../actions/orderAction"
import { Row ,Col,Table} from 'react-bootstrap'

const OrderScreen = () => {

const dispatch = useDispatch()
const {orders,error,loading} = useSelector((x)=>x.myOrder)

useEffect(() => {
    dispatch(getOrderAction())
}, [dispatch])
    return (
        <>
            <h1 className="text-center ">Your Orders </h1>

            {loading && (<Loader/>)}
        { error && (<Error error={error}/>)}

        {orders ?(<>
<Row>
{orders.map((x)=>(<>
    <Col md={4}>
    <h4 className="text-center">Product details:</h4>
    <Table striped bordered hover>
    <thead>
    <tr>
    <th>Product name</th>
    <th>Varient</th>
    <th>Quantity</th>
    <th>Price</th>
    
    </tr>
       
    </thead>

    <tbody>
    {
         x.orderItems.map((y)=>(<tr>
             <td>{y.name}</td>
             <td>{y.varient}</td>
             <td>{y.quantity}</td>
             <td>{y.price}</td>
         </tr>))
    
    
    }
        <tr>
            {/* <td>{ x.orderItems.map((y)=>(y.))}</td>
            <th>small</th> */}
        </tr>
    </tbody>
</Table>
    
    
    </Col>

<Col md={5}>

               

                <Table striped bordered hover >
  <thead>
  <tr>
      <th colSpan={2} className="text-center">Order Info </th>
  </tr>

    <tr>
      <th>Order Amount</th>
      <th>{x.orderAmount}</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Transection id </th>
      <td>{x.transectionId}</td>
      
    </tr>
    <tr>
      <th>Order Id</th>
      <td>{x._id}</td>
      
    </tr>
    
  </tbody>
</Table>

</Col>

<Col md={3}>
<h4>Address :</h4>
                <h6>Street : {x.shippingAddress.street}</h6>
                <h6>City : {x.shippingAddress.city}</h6>
                <h6>PinCode : {x.shippingAddress.picode}</h6>
                <h6>Countery : {x.shippingAddress.country}</h6>
</Col>
</>))}



</Row>

        </>):(<><h1>no order found</h1></>)}

        </>
    )
}

export default OrderScreen
