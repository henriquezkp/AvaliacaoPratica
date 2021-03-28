'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('grupos', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      nome_do_grupo: {
        type: Sequelize.STRING(30),
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
    await queryInterface.dropTable('grupos');

  }
};
