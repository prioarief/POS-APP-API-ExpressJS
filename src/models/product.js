const connection = require("../helper/mysql")
module.exports = {
    getAllProductModel :  () => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM products', (error, result) => {
                if(error){
                    reject(error)
                }
                resolve(result)
            })
        })
    },

    postProductModel : (setData) => {
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO products SET ?', setData, (error, result) => {
                if(error){
                    reject(error)
                }
                
                const newData ={
                    id : result.insertId,
                    ...setData
                }
                resolve(newData)
            })
        })
    },
    
    editProductModel : (setData, id) => {
        return new Promise((resolve, reject) => {
            connection.query('UPDATE products SET ? WHERE id=?', [setData, id], (error, result) => {
                if(error){
                    reject(error)
                }
                
                // const newData ={
                //     id : id,
                //     ...setData
                // }
                resolve(result)
            })
        })
    },
    
    deleteProductModel : (id) => {
        return new Promise((resolve, reject) => {
            connection.query('DELETE FROM products WHERE id=?', id, (error, result) => {
                if(error){
                    reject(error)
                }
                resolve(result)
            })
        })
    },
    
    getDetailProductModel :  (id) => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM products WHERE id = ?', id, (error, result) => {
                if(error){
                    reject(error)
                }
                resolve(result)
            })
        })
    },
}