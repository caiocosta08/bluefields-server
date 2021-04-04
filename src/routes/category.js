import { Router } from 'express';

import CategoryController from '../app/controllers/CategoryController';

import authMiddleware from '../app/middlewares/auth';

const routes = new Router;

//private routes
routes.use(authMiddleware)

routes.get('/get_all', CategoryController.getAll);
routes.post('/get_by_id', CategoryController.getById);
routes.post('/get_all_by_owner_id', CategoryController.getAllByOwnerId);
routes.post('/new', CategoryController.store);
routes.get('/:id', CategoryController.show);
routes.put('/:id', CategoryController.update);
routes.delete('/:id', CategoryController.destroy);



export default routes;