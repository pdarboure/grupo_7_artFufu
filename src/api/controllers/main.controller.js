const db = require('../../database/models')


const mainController = {
    home : (req, res) => {
        try {
            res.status(200).json({
    
            })
        } catch (error) {
            res.status(500).json({
                status: 500,
                data: 'no se puede acceder a la informacion actualmente'
            })
        }
    },
    prueba: async (req, res) => {
        try {
             let userCategory= await db.UserCategory.findAll(
                {
                    include: 'user'
                }
             )
             let user= await db.User.findAll(
                 {
                     include: 'userCategory'
                 }
            )
            let producto= await db.Product.findAll({
                include: [{association: 'size'},{association: 'category'}, {association: 'image'},{association: 'color'}]
            })
            let size= await db.Size.findAll()
            let image= await db.Image.findAll()
            let category= await db.CategoryProduct.findAll()
            let color= await db.Color.findAll()
            let colorProduct = await db.ColorProduct.findAll()
            let imageProduct = await db.ImageProduct.findAll()
            let SizeProduct = await db.SizeProduct.findAll()
    
            res.json( {
                colorProduct,
                imageProduct,
                SizeProduct,
                producto,
                user,
                userCategory,
                category,
                color,
                size,
                image
            })
            
        } catch (error) {
            res.json({
                error
            })
        }
        
    },

};

module.exports = mainController