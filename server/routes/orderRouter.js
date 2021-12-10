const expresss=require("express")
const router=expresss.Router()
const {placeOrderController,getUserOrder} =require("../controller/orderController")

router.post("/placeorder",placeOrderController)
router.post("/orderitem",getUserOrder)

module.exports=router