import Sequelize, { Model } from 'sequelize';

class FormResponse extends Model {
  static init(sequelize){
    super.init({
      name: Sequelize.STRING,
      email: Sequelize.STRING,
    },
    {
      sequelize,
    });

    return this;
  }

}

export default FormResponse;