import { Router } from 'express';

import OrderController from '../app/controllers/OrderController';

import authMiddleware from '../app/middlewares/auth';

const routes = new Router;

//private routes
routes.use(authMiddleware)

routes.get('/get_all', OrderController.index);
routes.post('/get_by_id', OrderController.getById);
routes.post('/get_all_by_shop_id', OrderController.getAllByShopId);
routes.post('/new', OrderController.store);
routes.get('/:id', OrderController.show);
routes.put('/:id', OrderController.update);
routes.delete('/:id', OrderController.destroy);

export default routes;