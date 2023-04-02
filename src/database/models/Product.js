module.exports = (sequelize, DataType) => {
    const Product = sequelize.define('Product',
        {
            id: {
                type: DataType.INTEGER.UNSIGNED,
                primaryKey: true,
                autoIncrement: true
            },
            name:{
                type: DataType.STRING(120),
                allowNull: false
            },
            price:{
                type: DataType.INTEGER.UNSIGNED,
                allowNull: false
            },
            capacity:{
                    type: DataType.STRING(45)
            },
            description:{
                type:DataType.STRING(255),
                allowNull: false
            }
        },
        {
            tableName:'products',
            timestamp: true,
            underscored: true
        }
    )



    Product.associate = (models) => {
        Product.belongsTo(models.ProductSubCategory, {
            as: 'ProductSubCategory',
            foreingKey: 'product_subcategory_id'
        })
        Product.belongsTo(models.ProductCategories, {
            as: 'ProductCategories',
            foreingKey: 'product_categories_id'
        })
        Product.belongsTo(models.ProductColor, {
            as: 'productColor',
            foreingKey: 'product_color_id'
        })
    };

        return Product
}