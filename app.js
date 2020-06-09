require( "dotenv").config();
const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const morgan = require("morgan")
const connection = require("./src/helper/mysql")
const productController = require("./src/controllers/product")

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(morgan("dev"))

connection.connect((error)=> {
    if(error) throw error
    console.log('Database connected')
})


app.get('/products', productController.getAllProduct )

app.get('/products/:id', productController.detailProduct )

app.post('/products', productController.createProduct )

app.put('/products/:id', productController.editProduct )

app.delete('/products/:id', productController.deleteProduuct )

// app.get('/products/:keyword', productController.searchPproduct )



app.listen(process.env.APP_PORT, () => console.log(`posapp-api running at port ${process.env.APP_PORT}`))