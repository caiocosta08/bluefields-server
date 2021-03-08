import { Router } from 'express';

import shopRoutes from './shop';
import addressRoutes from './address';

import ShopSessionController from '../app/controllers/sessions/ShopSessionController';
import ShopController from '../app/controllers/ShopController';
import ShopSessionController from '../app/controllers/sessions/ShopSessionController';


const routes = new Router();

//User register
routes.post('/register', ShopController.store);

// User session
routes.post('/session', ShopSessionController.store);

routes.use('/shop', shopRoutes);
routes.use('/address', addressRoutes);



routes.get('/', (req, res) =>{
  return res.json({ message: 'funfou'});
})


export default routes;