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
  }

}

export default Factory;