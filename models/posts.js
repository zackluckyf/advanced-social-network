'use strict';

module.exports = (sequelize, DataTypes) => {
  var posts = sequelize.define('posts', {
    user_id: DataTypes.INTEGER,
    post_text: DataTypes.STRING
  }, {
    classMethods: {
      associate: (models) => {
          posts.belongsTo(models.users);
          posts.hasMany(models.comments);
      }
    },
    timestamps:false
  });
  return posts;
};