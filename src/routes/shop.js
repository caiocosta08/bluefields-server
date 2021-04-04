import { Router } from 'express';

import ShopController from '../app/controllers/ShopController';

import authMiddleware from '../app/middlewares/auth';

const routes = new Router;

//private routes
routes.use(authMiddleware)

routes.get('/get_all', ShopController.index);
routes.post('/new', ShopController.store);
routes.post('/get_by_id', ShopController.getById);
routes.post('/get_by_owner_id', ShopController.getByOwnerId);
routes.put('/update', ShopController.update);
routes.delete('/delete', ShopController.destroy);

export default routes;