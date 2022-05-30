const db = require("./index");
const { DataTypes } = require("sequelize");
const Admin = db.sequelize.define(
  "admin",
  {
    admin_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },    
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },    
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },        
    mobile: {
      type: DataTypes.STRING,
      allowNull: false,
    },    
    gdo: {
      type: DataTypes.STRING,
      allowNull: false,
    },    
    skills: {
      type: DataTypes.STRING,
      allowNull: false,
    },    
    
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);
module.exports = Admin;
