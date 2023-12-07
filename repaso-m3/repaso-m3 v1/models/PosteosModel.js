const {DataTypes} = require('sequelize')


module.exports = (database) =>{
    //*SQUELIZE POR DETRAS HACE POR DETRAS SQL PURO
    database.define('Posteo', {               //nombre del modelo, atributos del modelo
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false            //no puede ser nulo

        },
        content: {
            type: DataTypes.STRING,
            allowNull: false          //no puede ser nulo
        }
    })
}


