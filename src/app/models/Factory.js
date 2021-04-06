import Sequelize, { Model } from 'sequelize';

class Factory extends Model {
  static init(sequelize){
    super.init({
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      cpf_cnpj: Sequelize.STRING,
      sales_comission: Sequelize.INTEGER,
    },
    {
      sequelize,
      tableName: 'factories'
    });

    return this;
  }

  static associate( models ){
    this.belongsTo( models.User, { foreignKey: 'owner_id', as: 'owner'} )
    this.hasOne( models.Address, { foreignKey: 'factory_id', as: 'addresses'} )
    this.belongsToMany( models.Shop, { foreignKey: 'factory_id', through: 'affiliated_shops', as: 'affiliates_shops'})
  }

}

export default Factory;