import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import {Button} from "react-bootstrap"
import {useDispatch,useSelector} from "react-redux"
import {placeOrderAction} from "../actions/orderAction"
import Loader from "../componants/Loader"
import Error from "../componants/Error"
import Success from "../componants/Success"
const CheckOut = ({subTotal}) => {
const dispatch = useDispatch()


    const tokenhandeler=(token)=>{
dispatch(placeOrderAction(token,subTotal))

        // console.log(token)
    }

    const {loading,error,success}=useSelector((x)=>x.placeOrder)
    return (
        <>
        {/* {loading && (<Loader/>)}
        { error && (<Error error={error}/>)}

        {success && <Success success={success.message}/>} */}
            <StripeCheckout
            amount={subTotal*100}
            shippingAddress
            token={tokenhandeler}
           stripeKey="pk_test_51JrnbnSFuOSw1DY6icuYfm1lfAXOpSminoZTUYS3au1pyO0w28su70K0Yp3q5X4fFDRvNxoaItH6K95VPNlsb9ET00bwPHxPQy"
            currency="INR">
            
            
                <Button>Pay Now</Button>
            </StripeCheckout>
        </>
    )
}

export default CheckOut
