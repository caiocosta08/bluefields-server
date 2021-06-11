import Sequelize from 'sequelize';

import User from '../app/models/user.model';
import FormResponse from '../app/models/formResponse.model';
import Information from '../app/models/information.model';

import databaseConfig from '../config/database';

const models = [
   User,
   FormResponse,
   Information,
]

class Database {
   constructor() {
      this.init()
   }

   init() {

      this.connection = new Sequelize(databaseConfig);

      models
         .map(model => model.init(this.connection))
         .map(model => model.associate && model.associate(this.connection.models));
   }
}

export default new Database();