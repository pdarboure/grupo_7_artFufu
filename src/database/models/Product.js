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
            },
            image:{
                type: DataType.STRING(255)
            },
            product_color_id:{
                type:DataType.INTEGER
            },
            product_categories_id:{
                type:DataType.INTEGER
            },
            product_sub_category_id:{
                type:DataType.INTEGER
            }
        },
        {
            tableName:'products',
            timestamp: true,
            underscored: true,
            paranoid: true
        }
    )



    Product.associate = (models) => {
        Product.belongsTo(models.ProductSubCategory, {
            as: 'ProductSubCategory',
            foreignKey: 'product_sub_category_id'
        })
        Product.belongsTo(models.ProductCategories, {
            as: 'ProductCategories',
            foreignKey: 'product_categories_id'
        })
        Product.belongsTo(models.ProductColor, {
            as: 'colors',
            foreignKey: 'product_color_id'
        })
    };

        return Product
}