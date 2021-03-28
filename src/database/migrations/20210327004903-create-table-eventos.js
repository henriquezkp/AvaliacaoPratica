'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('eventos', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      nome_do_evento: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      data_do_evento:{
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
    await queryInterface.dropTable('eventos');
  }
};
