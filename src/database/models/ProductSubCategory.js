module.exports = (sequelize, DataType) => {
    const ProductSubCategory = sequelize.define('ProductSubCategory',
        {
            id: {
                type: DataType.INTEGER.UNSIGNED,
                primaryKey: true,
                autoIncrement: true
            },
            subcategory:{
                type: DataType.STRING(255),
            },
        },
        {
            tableName:'product_subcategory',
            timestamp: true,
            underscored: true
        }
    )

    ProductSubCategory.associate = (models) => {
        ProductSubCategory.hasMany(models.Product, {
            as: 'Product',
            foreingKey: 'product_subcategory_id'
        })
    };

        return ProductSubCategory
}



