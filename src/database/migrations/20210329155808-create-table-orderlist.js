module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('order_lists', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },

      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: 'products',
          key: 'id',
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL'
        },
      },

      order_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: 'orders',
          key: 'id',
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL'
        },
      }

    })
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable('order_lists')
  }
};

