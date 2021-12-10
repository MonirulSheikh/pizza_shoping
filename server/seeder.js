const mogoose = require("mongoose");
const pizzaModel = require("./models/pizzasModels")
const pizza_data = require("./data/pizzas")
require("dotenv").config({ path: "./config.env" })
require("./db/connection")
const insertData = async () => {
    try {

        await pizzaModel.deleteMany()

        const sampleData = pizza_data.map((x) => {
            return { ...x }
        })
        pizzaModel.insertMany(sampleData)
        console.log("DATA IMPOrted");

    } catch (error) {
        console.log(`$error for  ${error}`);

    }
}

const dataDestroy = () => { };
if (process.argv[2] === "-d") {
    dataDestroy()
}
else {
    insertData()
}
