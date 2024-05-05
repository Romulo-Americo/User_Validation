const { DataTypes } = require('sequelize');
const db = require('../db/connection');

const User = db.define(
    'User',{
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        registration:{
            type: DataTypes.STRING,
            allowNull: false
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false
        },
        typeUser:{
            type: DataTypes.STRING,
            allowNull: false
        },
        situationUser:{
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    }
)

module.exports = User;