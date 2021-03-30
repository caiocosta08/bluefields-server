module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('subcategories', {
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

      category_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: 'categories',
          key: 'id',
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL'
        },
      },

      status: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: true, 
      },
      
    })
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable('subcategories')
  }
};

