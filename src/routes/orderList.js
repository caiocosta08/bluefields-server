import { Router } from 'express';

import OrderListController from '../app/controllers/OrderListController';

import authMiddleware from '../app/middlewares/auth';

const routes = new Router;

//private routes
routes.use(authMiddleware)

routes.post('/', OrderListController.store);
routes.get('/:id', OrderListController.show);
routes.put('/:id', OrderListController.update);

export default routes;