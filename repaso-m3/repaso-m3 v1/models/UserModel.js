const {DataTypes} = require('sequelize')


module.exports = (database) =>{
    //*SQUELIZE POR DETRAS HACE POR DETRAS SQL PURO
    database.define('User', {               //nombre del modelo, atributos del modelo
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,            //no puede ser nulo
            unique: true
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,            //no puede ser nulo
            unique: true
        },      
    },
    
    {
        timestamps:false
    },
    )
}


