const User = require('./users');
const Post = require('./posts')

/**
 * @association
 * User has many Posts
 */
User.hasMany(Post, {
    foreignKey: 'user_id'
});

/**
 * @association
 * Post belongs to User
 */
Post.belongsTo(User, {
    foreignKey: 'user_id'
});

/**
 * @exports {User, Post}
 */
module.exports = {
    User,
    Post
}