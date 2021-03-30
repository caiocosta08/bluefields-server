module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('products', {
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

      photo: {
        type: Sequelize.STRING,
      },

      sku: {
        type: Sequelize.STRING,
        unique: true,
      },

      weight: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },

      full_price: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },

      discount: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },

      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      
      active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },

      available_quantity:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      shop_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: 'shops',
          key: 'id',
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL'
        },
      },

      subcategory_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: 'subcategories',
          key: 'id',
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL'
        },
      },
      
    })
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable('products')
  }
};

