import { Router } from 'express';

import OrderController from '../app/controllers/OrderController';

import authMiddleware from '../app/middlewares/auth';

const routes = new Router;

//private routes
routes.use(authMiddleware)

routes.get('/', OrderController.index);
routes.post('/', OrderController.store);
routes.get('/:id', OrderController.show);
routes.put('/:id', OrderController.update);
routes.delete('/:id', OrderController.destroy);

export default routes;