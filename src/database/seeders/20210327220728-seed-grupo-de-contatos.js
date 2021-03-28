'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert({
      schema: 'agenda',
      tableName: 'contatos_de_grupos'
    }, [
      {
        id_contato: 1,
        id_grupo: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id_contato: 2,
        id_grupo: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id_contato: 3,
        id_grupo: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id_contato: 6,
        id_grupo: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id_contato: 6,
        id_grupo: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id_contato: 1,
        id_grupo: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id_contato: 4,
        id_grupo: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id_contato: 5,
        id_grupo: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id_contato: 4,
        id_grupo: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete({
      schema: 'agenda',
      tableName: 'contatos_de_grupos'
    }, null, {});
  }
};
