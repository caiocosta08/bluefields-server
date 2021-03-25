import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';


class User extends Model {
  static init(sequelize){
    super.init({
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.VIRTUAL,
      password_hash: Sequelize.STRING,
      cpf_cnpj: Sequelize.STRING,
      phone: Sequelize.STRING,
      type: Sequelize.STRING,
    },
    {
      sequelize,
    });


    this.addHook('beforeSave', async (user) => {
      if(user.password){
        user.password_hash = await bcrypt.hash(user.password, 10);
      }
    });

    return this;
  }

  static associate( models ){
    this.hasOne( models.Shop, { foreignKey: 'owner_id', as: 'shop'} )
    this.hasMany( models.Category, { foreignKey: 'owner_id', as: 'categories'} )
  }

  async checkPassword(password){
    return await bcrypt.compare(password, this.password_hash);
  }

}

export default User;