
const {Sequelize, DataTypes} = require ('sequelize');
const UserModel =  require ('./models/UserModel')
const PosteosModel =  require ('./models/PosteosModel')

const database = new Sequelize(`postgres://postgres:123456@localhost:5432/demosequelize`, {logging:false});   //instanciar la db

UserModel(database);
PosteosModel(database);

module.exports = {database, ...database.models}





