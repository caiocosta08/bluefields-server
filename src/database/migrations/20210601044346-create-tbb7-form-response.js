'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('tbb7_form_responses', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },

      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      startup_section: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      startup_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      startup_phase: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      meet_bluefields: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },

    })
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('tbb7_form_responses');
  }
};
