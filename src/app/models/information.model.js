import Sequelize, { Model } from 'sequelize';

class Information extends Model {
  static init(sequelize) {
    super.init({
      type: Sequelize.STRING,
      content: Sequelize.STRING,
      order: {
        type: Sequelize.STRING,
        defaultValue: "1"
      },
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
        tableName: "informations"
      });

    return this;
  }

}

export default Information;