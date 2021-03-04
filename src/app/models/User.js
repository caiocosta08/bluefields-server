import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';


class User extends Model {
  static init(sequelize){
    super.init({
      first_name: Sequelize.STRING,
      last_name: Sequelize.STRING,
      email: Sequelize.STRING,
      cpf: Sequelize.STRING,
      federation: Sequelize.STRING,
      sex: Sequelize.STRING,
      password: Sequelize.VIRTUAL,
      password_hash: Sequelize.STRING,
      credit: Sequelize.BIGINT,
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
    // this.hasMany( models.CaptureForm, { foreignKey: 'user_id', as: 'capture_forms'} )
  }

  async checkPassword(password){
    return await bcrypt.compare(password, this.password_hash);
  }

}

export default User;