import Sequelize, { Model } from 'sequelize';

class Product extends Model {
  static init(sequelize){
    super.init({
      name: Sequelize.STRING,
      photo: Sequelize.STRING,
      sku: Sequelize.STRING,
      weight: Sequelize.FLOAT,
      full_price: Sequelize.FLOAT,
      discount: Sequelize.FLOAT,
      description: Sequelize.STRING,
      active: Sequelize.BOOLEAN,
      available_quantity: Sequelize.INTEGER,
    },
    {
      sequelize,
    });



    return this;
  }

  static associate( models ){
    this.belongsTo( models.Shop, { foreignKey: 'shop_id', as: 'shop'})
    this.belongsTo( models.Category, { foreignKey: 'category_id', as: 'category'})
  }

}

export default Product;