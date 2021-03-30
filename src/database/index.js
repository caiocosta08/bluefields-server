import Sequelize from 'sequelize';

import User from '../app/models/User';
import Factory from '../app/models/Factory';
import Shop from '../app/models/Shop';
import Address from '../app/models/Address';
import Category from '../app/models/Category';
import Subcategory from '../app/models/Subcategory';
import Product from '../app/models/Product';
import DiscountCoupon from '../app/models/DiscountCoupon';
import Order from '../app/models/Order';
import OrderList from '../app/models/OrderList';

import databaseConfig from '../config/database';



const models = [
   User,
   Factory,
   Shop,
   Address,
   Category, 
   Product,
   Subcategory,
   DiscountCoupon,
   Order, 
   OrderList,
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