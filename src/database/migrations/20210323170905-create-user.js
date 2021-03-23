module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
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
        unique: true
      },

      password_hash: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      cpf_cnpj: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true
      },

      phone:{
        type: Sequelize.STRING,
      },

      type: {
        type: Sequelize.STRING,
        allowNull: false,
      }
      
    })
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable('users')
  }
};

