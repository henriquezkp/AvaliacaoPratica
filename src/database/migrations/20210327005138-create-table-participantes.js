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
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_evento: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'eventos',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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
    await queryInterface.dropTable('participantes');
  }
};
