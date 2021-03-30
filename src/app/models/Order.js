import Sequelize, { Model } from 'sequelize';

class Order extends Model {
  static init(sequelize){
    super.init({
      subtotal: Sequelize.FLOAT,
      discount: Sequelize.FLOAT,
      tracking_code: Sequelize.STRING,
      status: Sequelize.STRING,
      delivery_value: Sequelize.FLOAT,
      payment_status: Sequelize.STRING,
      transaction_code: Sequelize.STRING,
    },
    {
      tableName:'orders',
      sequelize,
    });

    return this;
  }

  static associate( models ){
    this.hasMany( models.OrderList, { foreignKey: 'order_id', as: 'orders_list'})
    this.belongsTo( models.Shop, { foreignKey: 'shop_id', as: 'shop'})
  }
}

export default Order;