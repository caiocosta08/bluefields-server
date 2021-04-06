module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('shops', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },

      shop_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      instagram: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      logo: {
        type: Sequelize.STRING,
      },

      email: {
        type: Sequelize.STRING,
        unique: true,
      },

      banner: {
        type: Sequelize.STRING,
      },

      shop_url: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },

      description: {
        type: Sequelize.STRING,
      },

      cpf_cnpj: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },

      owner_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: 'users',
          key: 'id',
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
      },

      factory_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references:{
          model: 'users',
          key: 'id',
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
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

