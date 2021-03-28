'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('contatos', { 
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      nome: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      sobrenome: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      celular: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

    },{
      schema:'agenda'
    });
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('contatos');
  
  }
};
