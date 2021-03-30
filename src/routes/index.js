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

import UserSessionController from '../app/controllers/sessions/UserSessionController';
import UserController from '../app/controllers/UserController';


const routes = new Router();

//User register
routes.post('/register/user',UserController.store);

// User session
routes.post('/session', UserSessionController.store);

routes.use('/shop', shopRoutes);
routes.use('/address', addressRoutes);
routes.use('/user', userRoutes);
routes.use('/category', categoryRoutes);
routes.use('/products', productRoutes);
routes.use('/factory', factoryRoutes);
routes.use('/subcategories', subcategoriesRoutes)
routes.use('/discount-coupons', discountCouponsRoute)
routes.use('/orders', ordersRoute)
routes.use('/order-list', orderListRoute)



routes.get('/', (req, res) =>{
  return res.json({ message: 'funfou'});
})


export default routes;