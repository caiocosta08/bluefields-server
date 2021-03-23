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
        allowNull: false,
        references:{
          model: 'shops',
          key: 'id',
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL'
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
