import { Router } from 'express';

import ProductController from '../app/controllers/ProductController';

import authMiddleware from '../app/middlewares/auth';

const routes = new Router;

//private routes
routes.use(authMiddleware)

routes.get('/', ProductController.index);
routes.post('/', ProductController.store);
routes.get('/:id', ProductController.show);
routes.put('/:id', ProductController.update);
routes.delete('/:id', ProductController.destroy);

export default routes;