const {Model, DataTypes} = require('sequelize')
const sequelize = require('../config/connection')


const Post = sequelize.define('Post', 
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title:{
            type: DataTypes.STRING,
            allowNull: false
        },
        description:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        user_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id'
            }, 
        },
    },
    {
        sequelize,
        timestamps: true,
        underscored: true,
        modelName: 'post'
    }
)

module.exports = Post;