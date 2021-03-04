import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';


class Shop extends Model {
  static init(sequelize){
    super.init({
      email: Sequelize.STRING,
      password: Sequelize.VIRTUAL,
      password_hash: Sequelize.STRING,
      cpf_cnpj: Sequelize.STRING,
      banner: Sequelize.STRING,
      shop_name: Sequelize.STRING,
      shop_description: Sequelize.STRING,
      shop_url: Sequelize.STRING,
      phone: Sequelize.STRING, 
      instagram: Sequelize.STRING,
    },
    {
      sequelize,
    });


    this.addHook('beforeSave', async (shop) => {
      if(shop.password){
        shop.password_hash = await bcrypt.hash(shop.password, 10);
      }
    });

    return this;
  }

  static associate( models ){
    this.hasMany( models.Address, { foreignKey: 'shop_id', as: 'addresses'} )
  }

  async checkPassword(password){
    return await bcrypt.compare(password, this.password_hash);
  }

}

export default Shop;