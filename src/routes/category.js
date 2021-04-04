import { Router } from 'express';

import CategoryController from '../app/controllers/CategoryController';

import authMiddleware from '../app/middlewares/auth';

const routes = new Router;

//private routes
routes.use(authMiddleware)

routes.get('/get_all', CategoryController.getAll);
routes.get('/get_with_owner_id', CategoryController.getAllWithOwnerId);
routes.post('/new', CategoryController.store);
routes.get('/:id', CategoryController.show);
routes.put('/:id', CategoryController.update);
routes.delete('/:id', CategoryController.destroy);



export default routes;