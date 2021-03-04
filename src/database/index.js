import Sequelize from 'sequelize';

import Shop from '../app/models/Shop';
import Address from '../app/models/Adress';

import databaseConfig from '../config/database';

const models = [ 
   Shop,
   Address
]

class Database{
   constructor(){
    this.init()
   }

   init(){
      this.connection = new Sequelize(databaseConfig);
      
      models
         .map( model => model.init(this.connection))
         .map( model => model.associate && model.associate(this.connection.models));
   }
}

export default new Database();