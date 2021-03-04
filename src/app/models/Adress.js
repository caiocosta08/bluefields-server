import Sequelize, { Model } from 'sequelize';


class Address extends Model {
  static init(sequelize){
    super.init({
      zip_code: Sequelize.STRING,
      uf: Sequelize.STRING,
      city: Sequelize.STRING,
      street: Sequelize.STRING,
      complement: Sequelize.STRING,
      number_street: Sequelize.STRING,
      district: Sequelize.STRING,
    },
    {
      sequelize,
      tableName: "shop_addresses",
    });
    return this;
  }

  static associate( models ){
    this.belongsTo( models.Shop, { foreignKey: 'shop_id', as: 'shop'})
  }

}

export default Address;