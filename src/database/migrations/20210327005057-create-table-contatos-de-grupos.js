'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('contatos_de_grupos', {
      id_contato: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'contatos',
          key: 'id'
        }
      },
      id_grupo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'grupos',
          key: 'id'
        }
      }
    },{
      schema:'agenda'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('contatos_de_grupos');
  }
};
