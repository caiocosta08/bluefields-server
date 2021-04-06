module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('factories', {
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

      email:{
        type: Sequelize.STRING,
        unique: true, 
        allowNull: false,
      },

      sales_comission:{
        type: Sequelize.INTEGER,
      },
      
    })
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable('factories')
  }
};

