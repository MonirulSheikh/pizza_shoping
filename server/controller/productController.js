
const pizzaModel = require("../models/pizzasModels")

const AllproductController = async (req, res) => {
    try {
        const pizzas = await pizzaModel.find({})
        res.status(200).json(pizzas)
    } catch (error) {
        console.log("productController error for" + error)
    }
}

// for single product

const SingleProduct = async (req, res) => {
    try {
        const id = req.params.id
        const item = await pizzaModel.find({ _id: id })

        res.json(item)
    } catch (error) {
        console.log("SingleproductController error for" + error)
    }
}
module.exports = { AllproductController, SingleProduct }