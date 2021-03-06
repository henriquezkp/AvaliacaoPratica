'use strict';



module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert({ 
      tableName: 'contatos', schema: 'agenda' 
    }, [
      {
        id:1,
        nome: 'Henrique',
        sobrenome: 'Zanotti',
        celular: '1199999-9999',
        email: 'henrique@exemplo.com',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id:2,
        nome: 'Arnaldo',
        sobrenome: 'Olindo',
        celular: '1198899-2399',
        email: 'arnaldo@exemplo.com',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id:3,
        nome: 'Benedita',
        sobrenome: 'Cruz',
        celular: '559988789-2399',
        email: 'cruz@exemplo.com',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id:4,
        nome: 'Tereza',
        sobrenome: 'Almeida',
        celular: '5166789-2399',
        email: 'ta@exemplo.com',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id:5,
        nome: 'Olivio',
        sobrenome: 'Teixeira',
        celular: '548669-2399',
        email: 'ta@exemplo.com',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id:6,
        nome: 'Médico',
        sobrenome: 'Geral',
        celular: '545559-2399',
        email: 'mgeral@exemplo.com',
        created_at: new Date(),
        updated_at: new Date()
      },
    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete({ 
      tableName: 'contatos', schema: 'agenda' 
    }, null, {});

  }
};
