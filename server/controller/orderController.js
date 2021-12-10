const { v4: uuidv4 } = require("uuid");
const stripe=require("stripe")("sk_test_51JrnbnSFuOSw1DY6w3d9Deoilc36QZsMFpEbJaKQWDN9nZasb6Z5O1CW4JDVWhL102j8GCnBRziJMbOfzNzyRYwS005vULBObX")
// const {v4:uuidv4} =require("uuid")
const orderModel=require("../models/ordersModel")


 const placeOrderController=async(req,res)=>{
// console.log(req.body)

const {token,subTotal,currentUser,cartItems}=req.body
console.log(currentUser)
try {
    
const customer=await stripe.customers.create({
    email:token.email,
    source:token.id
})
// console.log(token)

console.log(customer.id)
const payment= await stripe.charges.create( 
    {
    amount:subTotal * 100,
    currency:"INR",
    customer:customer.id,
    receipt_email:token.email

},
{
    idempotencyKey: uuidv4(),
  }
)

// console.log(payment)
if(payment){


const orders=new orderModel({
    name: currentUser.users.name,
    email: currentUser.users.email,
    userid: currentUser.users._id,
    orderItems: cartItems,
    orderAmount: subTotal,
    shippingAddress: {
      street: token.card.address_line1,
      city: token.card.address_city,
      country: token.card.address_country,
      picode: token.card.address_zip,
    },
    transectionId: payment.source.id,
})

const result=await orders.save()

if(result){
    res.status(200).json({message:"order successfull"})
}else{
    res.status(200).json({message:"order failed"})
}
    // console.log(payment)
    // res.status(200).json({message:"payment succesfull"})
}else{
    res.status(400).json({message:"payment failed"})
}



} catch (error) {
    console.log(error.stack)

    res.status(400).json({message:"payment failed",error:error})
}



 }

const getUserOrder=async(req,res)=>{

try {
    const orders=await orderModel.find({userid:"61852b604cfd9a4cd7fc09f4"}).sort({_id:"-1"})

    res.send(orders)
console.log(orders)

} catch (error) {
    
}

}


 module.exports={placeOrderController,getUserOrder}