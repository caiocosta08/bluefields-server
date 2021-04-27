import Sequelize, { Model } from 'sequelize';

class Category extends Model {
  static init(sequelize){
    super.init({
      name: Sequelize.STRING,
      status: Sequelize.BOOLEAN,
      description: Sequelize.STRING
    },
    {
      sequelize,
    });



    return this;
  }

  static associate( models ){
    this.belongsTo( models.User, { foreignKey: 'owner_id', as: 'owner'})
    this.hasMany( models.Subcategory, { foreignKey: 'category_id', as: 'subcategories'})
    // this.hasMany( models.Category, { foreignKey: 'category_id', as: 'categories'})
  }

}

export default Category;