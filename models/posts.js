const {Model, DataTypes} = require('sequelize')
const sequelize = require('../config/connection')

// Create a Post Class
class Post extends Model{}

// Models with the post information
Post.init(
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
        updated_at: {
            type: DataTypes.DATE,
            defaultValue: sequelize.fn('now'),
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        underscored: true,
        modelName: 'post'
    }
)

/**
 * @exports Post
 */
module.exports = Post;