import Sequelize from 'sequelize';

import User from '../app/models/User';
import Shop from '../app/models/Shop';
import Address from '../app/models/Address';
import Category from '../app/models/Category';
import Product from '../app/models/Product';

import databaseConfig from '../config/database';

const models = [
   User,
   Shop,
   Address,
   Category, 
   Product
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