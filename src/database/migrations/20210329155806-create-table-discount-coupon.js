module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('discount_coupons', {
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

      discount_amount: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      type: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      use_quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      
      active: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: true
      },

      code_coupon: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      date_expirated: {
        type: Sequelize.STRING,
        allowNull: false
      }

    })
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable('discount_coupons')
  }
};

