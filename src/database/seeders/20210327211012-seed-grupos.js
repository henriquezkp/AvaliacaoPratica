'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert({
      schema: 'agenda',
      tableName: 'grupos'
    }, [{
      id:1,
      nome_do_grupo: 'Grupo de Amigos',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id:2,
      nome_do_grupo: 'Conhecidos',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id:3,
      nome_do_grupo: 'Grupo da Família',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id:4,
      nome_do_grupo: 'Grupo do Trabalho',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id:5,
      nome_do_grupo: 'Grupo de Corrida',
      created_at: new Date(),
      updated_at: new Date()
    },
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete({
      schema: 'agenda',
      tableName: 'grupos'
    }, null, {});
  }
};
