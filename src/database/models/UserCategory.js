module.exports = (sequelize, DataType) => {
    const UserCategory = sequelize.define('UserCategory',
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
            tableName:'user_category',
            timestamp: true,
            underscored: true
        }
    )

    UserCategory.associate = (models) => {
        UserCategory.hasMany(models.User, {
            as: 'user',
            foreignKey: 'user_category_id'
        })
    };



    return UserCategory
}