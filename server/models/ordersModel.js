const mongoose=require("mongoose")
const orderSchema=mongoose.Schema({

    name: {
        type: String,
        required: [true, "order name required"],
      },
      email: {
        type: String,
        required: [true, "email is required"],
      },
      userid: {
        type: String,
      },
      orderItems: [],
      shippingAddress: {},
    
      orderAmount: {
        type: String,
        //   required: true,
      },
      isDeliverd: {
        type: String,
        //   required: true,
      },
      transectionId: {
        type: String,
        //   required: true,
      },


},{timetamps: true })

const orderModel=mongoose.model("orders",orderSchema)
module.exports=orderModel