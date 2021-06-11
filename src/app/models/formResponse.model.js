import Sequelize, { Model } from 'sequelize';

class FormResponse extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      phone: Sequelize.STRING,
      desired_skill: Sequelize.STRING,
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Date.now()
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Date.now()
      },
    },
      {
        sequelize,
        hooks: {
          beforeUpdate: (item) => {
            item.updatedAt = Date.now();
          }
        },
        tableName: "form_responses"
      });

    return this;
  }

}

export default FormResponse;