import Sequelize, { Model } from 'sequelize';

class OrderList extends Model {
  static init(sequelize){
    super.init({
      quantity: Sequelize.INTEGER,
    },
    {
      tableName: 'order_lists',
      sequelize,
    });

    return this;
  }

  static associate( models ){
    this.belongsTo( models.Order, { foreignKey: 'order_id', as: 'order'})
    this.belongsTo( models.Product, { foreignKey: 'product_id', as: 'product'})
  }
}

export default OrderList;