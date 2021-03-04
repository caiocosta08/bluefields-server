import { Router } from 'express';

import shopRoutes from './shop';
import addressRoutes from './address';

import UserSessionController from '../app/controllers/sessions/UserSessionController';
import ShopController from '../app/controllers/ShopController';


const routes = new Router();

//User register
routes.post('/register', ShopController.store);

// User session
routes.post('/session', UserSessionController.store);

routes.use('/shop', shopRoutes);
routes.use('/address', addressRoutes);



routes.get('/', (req, res) =>{
  return res.json({ message: 'funfou'});
})


export default routes;