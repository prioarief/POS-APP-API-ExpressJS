const connection = require("../helper/mysql")
const helper = require("../helper/index")
const productModel = require("../models/product")

module.exports = {
    getAllProduct : async (req, res) => {
        try {
            const result = await productModel.getAllProductModel()
            return helper.response(res, 'success' ,result, 200)
        } catch (error) {
            console.log(error)
                return helper.response(res, 'failed', 'Internal Server Error', 500)
        }
    },

    detailProduct : async (req, res) => {
        const id = req.params.id
        try {
            const result = await productModel.getDetailProductModel(id)
            return helper.response(res, 'success' ,result, 200)
        } catch (error) {
            console.log(error)
                return helper.response(res, 'failed', 'Internal Server Error', 500)
        }
    },

    createProduct : async (req, res) => {
        const setData = req.body
        try {
            const result =  await productModel.postProductModel(setData)
            return helper.response(res, 'success' , result, 201)
        } catch (error) {
            console.log(error)
            return helper.response(res, 'failed', 'Internal Server Error', 500)
        }
    },

    editProduct : async (req, res) => {
        const setData = req.body
        const id = req.params.id
        try {
            const result = await productModel.editProductModel(setData, id)
            const newData = {
                id,
                ...setData
            }
            if(result.affectedRows == 1){
                return helper.response(res, 'success' , newData, 200)
            }
            return helper.response(res, 'failed' , `Data id ${id} not found`, 404)
        } catch (error) {
            console.log(error)
            return helper.response(res, 'failed', 'Internal Server Error', 500)
        }
    },

    deleteProduuct : async (req, res) => {
        const id = req.params.id
        try {
            const result = await productModel.deleteProductModel(id)
            if(result.affectedRows == 1){
                return helper.response(res, 'success' , `Data id ${id} berhasil di hapus`, 200)
            }
            return helper.response(res, 'failed' , `Data id ${id} not found`, 404)
            
        } catch (error) {
            console.log(error)
            return helper.response(res, 'failed', 'Internal Server Error', 500)
        }
    },

    // searchPproduct : (req, res) => {
    //     const keyword = req.params.keyword
    //     connection.query('SELECT * FROM products WHERE name like ? OR price like ?', [`%${keyword}%`, `%${keyword}%`], (error, result) => {
    //         if(error){
    //             console.log(error)
    //             return helper.response(res, 'failed', 'Internal Server Error', 500)
    //         }
    //         return helper.response(res, 'success' ,result, 200)
    //     })
    // }


}