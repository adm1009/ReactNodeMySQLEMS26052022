const Sequelize = require("sequelize");

module.exports = sequelize.define("users",{

    id:{
        type:Sequelize.INTEGER(1000),
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    username:Sequelize.STRING(300),
    password:Sequelize.STRING(300),
    question:Sequelize.STRING(300),
    answer:Sequelize.STRING(300)
});