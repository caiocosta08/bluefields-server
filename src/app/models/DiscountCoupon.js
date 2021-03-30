import Sequelize, { Model } from 'sequelize';

class DiscountCoupon extends Model {
  static init(sequelize){
    super.init({
      discount_amount: Sequelize.INTEGER,
      type: Sequelize.STRING,
      use_quantity: Sequelize.INTEGER,
      active: Sequelize.BOOLEAN,
      code_coupon: Sequelize.STRING,
      dateExpirated: Sequelize.STRING,
    },
    {
      sequelize,
    });



    return this;
  }

  static associate( models ){
    this.belongsTo( models.Shop, { foreignKey: 'shop_id', as: 'shop'})
  }

}

export default DiscountCoupon;