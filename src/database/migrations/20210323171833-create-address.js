module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('addresses', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },

      zip_code: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      shop_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references:{
          model: 'shops',
          key: 'id',
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
      },

      factory_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references:{
          model: 'factories',
          key: 'id',
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
      },

      user_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references:{
          model: 'users',
          key: 'id',
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
      },

      state: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      city: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      street: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      complement: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      number_street: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      district: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    
    })
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable('addresses')
  }
};
