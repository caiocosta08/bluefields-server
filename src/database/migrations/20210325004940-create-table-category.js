module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('categories', {
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

      status: {
        type: Sequelize.BOOLEAN,
        allowNull: true, 
        defaultValue: true,
      },
      
    })
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable('categories')
  }
};

