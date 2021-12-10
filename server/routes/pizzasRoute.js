const express = require("express")
const router = express.Router()
const pizzaModel = require("../models/pizzasModels")
const { AllproductController, SingleProduct } = require("../controller/productController")


//GET ALL PIZZA || @GET REQUEST


// router.get("/getAllPizzas", async (req, res) => {
//     try {
//       const pizzas = await pizzaModel.find({});
//       res.send(pizzas);
//     } catch (error) {
//       res.json({ message: error });
//     }
//   });



router.get("/products", AllproductController)


// single products router

router.get("/products/:id", SingleProduct)
module.exports = router