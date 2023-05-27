const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created_on: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    }
  },
  {
    sequelize,
    // freezeTableName: true,
    // underscored: true,
    // modelName: 'comment',
  }
);

module.exports = Comment;
