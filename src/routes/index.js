import { Router } from 'express';

import shopRoutes from './shop';
import addressRoutes from './address';
import userRoutes from './user';
import categoryRoutes from './category';
import productRoutes from './products';
import factoryRoutes from './factory'
import subcategoriesRoutes from './subcategory';
import discountCouponsRoute from './discountCoupon';
import ordersRoute from './order';
import orderListRoute from './orderList';
import affiliateRoutes from './affiliate'

import UserSessionController from '../app/controllers/sessions/UserSessionController';
import UserController from '../app/controllers/UserController';


const routes = new Router();

// User session
routes.post('/session', UserSessionController.store);

routes.use('/shop', shopRoutes);
routes.use('/address', addressRoutes);
routes.use('/user', userRoutes);
routes.use('/category', categoryRoutes);
routes.use('/subcategory', subcategoriesRoutes);
routes.use('/product', productRoutes);
routes.use('/factory', factoryRoutes);
routes.use('/discount_coupon', discountCouponsRoute);
routes.use('/order', ordersRoute);
routes.use('/order_list', orderListRoute);
routes.use('/affiliate', affiliateRoutes)



routes.get('/', (req, res) =>{
  return res.json({ message: 'funfou'});
})


export default routes;