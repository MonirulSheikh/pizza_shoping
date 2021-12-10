const express = require("express")
const app = express()
const dotenv = require("dotenv")
dotenv.config({ path: "./config.env" })
const port = process.env.PORT || 8000
app.use(express.json())
const productRouter = require("./routes/pizzasRoute")
const userRouter=require("./routes/userRouter")
const host = "localhost"
require("./db/connection")
app.get("/", (req, res) => {
    res.json({ name: process.env.NODE_ENV })
})

app.use("/api", productRouter)
app.use("/api/users",userRouter)
app.use("/api/orders",require("./routes/orderRouter"))
app.listen(port, () => {
    console.log(`server running on http://${host}:${port}`)
})