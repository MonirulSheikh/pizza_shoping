import axios from "axios"

export const placeOrderAction=(token,subTotal)=>async(dispatch,getState)=>{
    dispatch({type:"PLACE_ORDER_REQUEST"})

    const cartItems=getState().cartReducer.cartItems
const currentUser=getState().userData.userInfo

try {
    // console.log(subTotal) 
    const res= await axios.post("/api/orders/placeorder",{token,subTotal,currentUser,cartItems})
    dispatch({type:"PLACE_ORDER_SUCCESS",payload:res.data})

// console.log(res.data)
} catch (error) {
    dispatch({type:"PLACE_ORDER_FAIL",payload:error.response.data})
}


}

export const getOrderAction=()=>async(dispatch,getState)=>{
    const currentUser=getState().userData.userInfo


    dispatch({type:"USER_ORDER_REQUEST"})
try {
    const response=await axios.post("/api/orders/orderitem",{userId:currentUser.users._id})
dispatch({type:"USER_ORDER_SUCCESS",payload:response.data})
 
} catch (error) {
    dispatch({type:"USER_ORDER_SUCCESS",payload:error})
}
    

}