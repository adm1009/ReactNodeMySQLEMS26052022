'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable("users",{
      id:{
        type:Sequelize.INTEGER(200),
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    username:Sequelize.STRING(300),
    password:Sequelize.STRING(300),
    question:Sequelize.STRING(300),
    answer:Sequelize.STRING(300),
    createdAt: Sequelize.DATE,
    updatedAt:Sequelize.DATE,
    })
  },

  async down (queryInterface, Sequelize) {
   return queryInterface.dropTable("users")
  }
};
