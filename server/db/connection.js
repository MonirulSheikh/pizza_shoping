const mongoose = require("mongoose")
const db = process.env.DBOFF
const db_on = process.env.DBON
const config = {
    useUnifiedTopology: true,
    useNewUrlParser: true,

}

mongoose.connect(db, config).then(() => console.log("Coonnection Ok")).catch((err) => console.log(`Connection Failed Due to ${err}`))