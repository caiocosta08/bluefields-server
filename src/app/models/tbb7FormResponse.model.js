import Sequelize, { Model } from 'sequelize';

class Tbb7FormResponse extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      phone: Sequelize.STRING,
      startup_section: Sequelize.STRING,
      startup_name: Sequelize.STRING,
      startup_phase: Sequelize.STRING,
      meet_bluefields: Sequelize.STRING,
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
        tableName: "tbb7_form_responses"
      });

    return this;
  }

}

export default Tbb7FormResponse;