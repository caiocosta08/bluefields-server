import { Router } from 'express';

import CategoryController from '../app/controllers/CategoryController';

import authMiddleware from '../app/middlewares/auth';

const routes = new Router;

//private routes
routes.use(authMiddleware)

routes.get('/', CategoryController.index);
routes.post('/', CategoryController.store);
routes.get('/:id', CategoryController.show);
routes.put('/:id', CategoryController.update);
routes.delete('/:id', CategoryController.destroy);



export default routes;