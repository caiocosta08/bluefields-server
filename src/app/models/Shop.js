import Sequelize, { Model } from 'sequelize';

class Shop extends Model {
  static init(sequelize){
    super.init({
      shop_name: Sequelize.STRING,
      logo: Sequelize.STRING,
      email: Sequelize.STRING,
      instagram: Sequelize.STRING,
      cpf_cnpj: Sequelize.STRING,
      banner: Sequelize.STRING,
      shop_url: Sequelize.STRING,
      description: Sequelize.STRING,
      phone: Sequelize.STRING, 
      // password: Sequelize.VIRTUAL,
      // password_hash: Sequelize.STRING,
    },
    {
      sequelize,
    });


    // this.addHook('beforeSave', async (shop) => {
    //   if(shop.password){
    //     shop.password_hash = await bcrypt.hash(shop.password, 10);
    //   }
    // });

    return this;
  }

  static associate( models ){
    this.belongsTo( models.User, { foreignKey: 'owner_id', as: 'owner'})
    this.hasOne( models.Address, { foreignKey: 'shop_id', as: 'address'} )
    this.hasMany( models.Product, { foreignKey: 'shop_id', as: 'products'})
    this.hasMany( models.DiscountCoupon, { foreignKey: 'shop_id', as: 'discount_coupons'})
    this.hasMany( models.Order, { foreignKey: 'shop_id', as: 'orders'})
    this.belongsToMany( models.Factory, { foreignKey: 'shop_id', through: 'affiliated_shops', as: 'affiliates_factories'})
  }

  // async checkPassword(password){
  //   return await bcrypt.compare(password, this.password_hash);
  // }

}

export default Shop;