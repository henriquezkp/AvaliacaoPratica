'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert({
      schema: 'agenda',
      tableName: 'participantes'
    }, [
      {
        id_contato: 1,
        id_evento: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id_contato: 4,
        id_evento: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id_contato: 2,
        id_evento: 2 ,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id_contato: 3,
        id_evento: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id_contato: 4,
        id_evento: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id_contato: 5,
        id_evento: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id_contato: 3,
        id_evento: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id_contato: 5,
        id_evento: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id_contato: 1,
        id_evento: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id_contato: 6,
        id_evento: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete({
      schema: 'agenda',
      tableName: 'participantes'
    }, null, {});

  }
};
