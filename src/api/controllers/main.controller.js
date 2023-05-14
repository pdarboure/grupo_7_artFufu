const db = require('../../database/models')


const mainController = {
    home : (req, res) => {
        try {
            res.status(200).json({
    
            })
        } catch (error) {
            res.status(500).json({
                status: 500,
                data: 'no se puede acceder a la informacion '
            })
        }
    }
}