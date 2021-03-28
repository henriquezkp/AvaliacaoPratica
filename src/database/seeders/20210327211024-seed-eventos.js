'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert({
      schema: 'agenda',
      tableName: 'eventos'
    }, [
      {
        id:1,
        nome_do_evento: 'Viagem para praia',
        data_do_evento: '2021-12-28 5:00',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id:2,
        nome_do_evento: 'Aniversário Olívio',
        data_do_evento: '2021-06-04 19:00',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id:3,
        nome_do_evento: 'Cinema com a Benedita',
        data_do_evento: '2021-05-15 21:00',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id:4,
        nome_do_evento: 'Consulta com Médico',
        data_do_evento: '2021-12-28 5:00',
        created_at: new Date(),
        updated_at: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete({
      schema: 'agenda',
      tableName: 'eventos'
    }, null, {});
  }
};
