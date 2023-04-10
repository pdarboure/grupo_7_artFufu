<<<<<<< HEAD
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
=======
module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        description: {
            type: dataTypes.STRING(255)
        },
        price: {
            type: dataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        category_id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        }
    };
    let config = {
        timestamps: false,
        tablename: 'Product'
    }
    const Product = sequelize.define(alias, cols, config); 

    Product.associate = function (models) {
        Product.belongsTo(models.Category, {
            as: 'category',
            foreignKey: 'category_id'
        });
        Product.belongsToMany(models.Image, {
            as: 'images',
            foreignKey: 'product_id',
            otherKey: 'image_id',
            through: 'product_images',
            timestamps: false
        });
    }

    return Product;
};
>>>>>>> 7d46f24c6f7596badd5a56ad7c1203cc6fa1272a
