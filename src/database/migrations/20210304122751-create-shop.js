module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('shops', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
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

      banner: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      instagram: {
        type: Sequelize.STRING,
      },

      shop_name: {
        type: Sequelize.STRING,
      },

      shop_description : {
        type: Sequelize.STRING,
      },

      shop_url : {
        type: Sequelize.STRING,
      },

      phone:{
        type: Sequelize.STRING,
      },
      
    })
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable('shops')
  }
};

