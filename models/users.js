const sequelize = require('../config/connection')
const {Model, DataTypes} = require('sequelize')

class User extends Model{}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            // username can only contains number and character
            validate:{
                isAlphanumeric: true,
            }
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                leg: [8]
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;