module.exports = (sequelize, DataType) => {
    const ProductColor = sequelize.define('ProductColor',
        {
            id: {
                type: DataType.INTEGER.UNSIGNED,
                primaryKey: true,
                autoIncrement: true
            },
            color:{
                type: DataType.STRING(255),
            },
        },
        {
            tableName:'product_colors',
            timestamp: true,
            underscored: true
        }
    )
    ProductColor.associate = (models) => {
        ProductColor.hasMany(models.Product, {
            as: 'Product',
            foreingKey: 'product_color_id'
        })
    };

        return ProductColor
}