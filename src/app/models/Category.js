import Sequelize, { Model } from 'sequelize';

class Category extends Model {
  static init(sequelize){
    super.init({
      name: Sequelize.STRING,
      status: Sequelize.STRING,
    },
    {
      sequelize,
    });



    return this;
  }

  static associate( models ){
    this.belongsTo( models.User, { foreignKey: 'owner_id', as: 'owner'})
    this.hasMany( models.Product, { foreignKey: 'category_id', as: 'products'})
  }

}

export default Category;