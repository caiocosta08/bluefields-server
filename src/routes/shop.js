import { Router } from 'express';

import ShopController from '../app/controllers/ShopController';

import authMiddleware from '../app/middlewares/auth';

const routes = new Router;

//private routes
routes.use(authMiddleware)

routes.get('/', ShopController.index);
routes.post('/register', ShopController.store);
routes.get('/shop-data', ShopController.show);
routes.put('/update', ShopController.update);
routes.delete('/:id', ShopController.destroy);

export default routes;