const express = require("express")
const router = express.Router()
const productController = require("../controllers/product")

router.get('/', productController.getAllProduct )

router.get('/:id', productController.detailProduct )

router.post('/', productController.createProduct )

router.put('/:id', productController.editProduct )

router.delete('/:id', productController.deleteProduuct )


module.exports = router