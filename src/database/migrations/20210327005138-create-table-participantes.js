'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('participantes', {
      id_contato: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'contatos',
          key: 'id'
        }
      },
      id_evento: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'eventos',
          key: 'id'
        }
      }
    },{
      schema:'agenda'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('participantes');
  }
};
