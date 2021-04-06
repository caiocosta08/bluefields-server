module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('affiliated_shops', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },

      shop_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: 'shops',
          key: 'id',
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
      },

      factory_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: 'users',
          key: 'id',
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
      },
      
    })
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable('affiliated_shops')
  }
};

