import { Router } from 'express';

import shopRoutes from './shop';
import addressRoutes from './address';
import userRoutes from './user';
import categoryRoutes from './category';
import productRoutes from './products';

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



routes.get('/', (req, res) =>{
  return res.json({ message: 'funfou'});
})


export default routes;