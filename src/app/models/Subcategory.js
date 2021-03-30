import Sequelize, { Model } from 'sequelize';

class Subcategory extends Model {
  static init(sequelize){
    super.init({
      name: Sequelize.STRING,
      status: Sequelize.BOOLEAN,
    },
    {
      sequelize,
    });



    return this;
  }

  static associate( models ){
    this.belongsTo( models.Category, { foreignKey: 'category_id', as: 'category'})
    this.hasMany( models.Product, { foreignKey: 'subcategory_id', as: 'products'})
  }

}

export default Subcategory;