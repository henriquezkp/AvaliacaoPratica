'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createSchema('agenda');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropSchema('agenda');
  }
};
