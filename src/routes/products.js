import { Router } from 'express';

import ProductController from '../app/controllers/ProductController';

import authMiddleware from '../app/middlewares/auth';

const routes = new Router;

//private routes
routes.use(authMiddleware)

routes.get('/get_all', ProductController.getAll);
routes.get('/get_all_with_owner_id', ProductController.getAllWithOwnerId);
routes.post('/new', ProductController.store);
routes.get('/:id', ProductController.show);
routes.put('/:id', ProductController.update);
routes.delete('/:id', ProductController.destroy);

export default routes;