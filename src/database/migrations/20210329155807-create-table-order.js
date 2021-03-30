module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('orders', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },

      subtotal: {
        type: Sequelize.FLOAT,
        allowNull: false
      },

      // orderlist_id: {
      //   type: Sequelize.INTEGER,
      //   allowNull: false,
      //   references:{
      //     model: 'order_lists',
      //     key: 'id',
      //     onUpdate: 'CASCADE',
      //     onDelete: 'SET NULL'
      //   },
      // },

      coupon_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references:{
          model: 'discount_coupons',
          key: 'id',
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL'
        },
      },

      discount: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },

      tracking_code: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      deviveryaddress_Id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references:{
          model: 'addresses',
          key: 'id',
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL'
        },
      },

      shop_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references:{
          model: 'shops',
          key: 'id',
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL'
        },
      },


      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      delivery_value: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },

      payment_status: {
        type: Sequelize.STRING,
      },

      transaction_code: {
        type: Sequelize.STRING,
      }
            
    })
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable('orders')
  }
};

