module.exports = (sequelize, DataType) => {
    const User = sequelize.define('User',
        {
            id: {
                type: DataType.INTEGER.UNSIGNED,
                primaryKey: true,
                autoIncrement: true
            },
            name:{
                type: DataType.STRING(255),
                allowNull: false
            },
            lastname:{
                type: DataType.STRING(255),
                allowNull: false
            },
            email:{
                    type: DataType.STRING(255)
            },
            password:{
                type:DataType.STRING(255),
                allowNull: false
            }
        },
        {
            tableName:'user',
            timestamp: true,
            underscored: true
        }
    )

        return User
}