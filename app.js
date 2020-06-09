require( "dotenv").config();
const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const morgan = require("morgan")
const connection = require("./src/helper/mysql")
const router = require("./src/routes/index")


app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(morgan("dev"))

app.use(router)


connection.connect((error)=> {
    if(error) throw error
    console.log('Database connected')
})







app.listen(process.env.APP_PORT, () => console.log(`posapp-api running at port ${process.env.APP_PORT}`))