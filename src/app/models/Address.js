import Sequelize, { Model } from 'sequelize';


class Address extends Model {
  static init(sequelize){
    super.init({
      zip_code: Sequelize.STRING,
      state: Sequelize.STRING,
      city: Sequelize.STRING,
      street: Sequelize.STRING,
      complement: Sequelize.STRING,
      number_street: Sequelize.STRING,
      district: Sequelize.STRING,
    },
    {
      sequelize,
      tableName: "addresses",
    });
    return this;
  }

  static associate( models ){
    this.belongsTo( models.Shop, { foreignKey: 'shop_id', as: 'shop'})
    this.belongsTo( models.User, { foreignKey: 'user_id', as: 'user'})
    this.belongsTo( models.Factory, { foreignKey: 'factory_id', as: 'factory'})
  }

}

export default Address;