module.exports = (sequelize, DataType) => {
    const ProductCategories = sequelize.define('ProductCategories',
        {
            id: {
                type: DataType.INTEGER.UNSIGNED,
                primaryKey: true,
                autoIncrement: true
            },
            category:{
                type: DataType.STRING(255),
            },
        },
        {
            tableName:'product_categories',
            timestamp: true,
            underscored: true
        }
    )

    ProductCategories.associate = (models) => {
        ProductCategories.hasMany(models.Product, {
            as: 'producto',
            foreignKey: 'product_categories_id'
        })
    };



        return ProductCategories
}