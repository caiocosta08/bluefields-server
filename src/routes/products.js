import { Router } from 'express';

import ProductController from '../app/controllers/ProductController';

import authMiddleware from '../app/middlewares/auth';

const routes = new Router;

//private routes
routes.use(authMiddleware)

routes.get('/get_all', ProductController.getAll);
routes.post('/get_by_id', ProductController.getById);
routes.post('/get_all_by_owner_id', ProductController.getAllByOwnerId);
routes.post('/get_all_by_shop_id', ProductController.getAllByShopId);
routes.post('/new', ProductController.store);
routes.get('/:id', ProductController.show);
routes.put('/:id', ProductController.update);
routes.delete('/:id', ProductController.destroy);

export default routes;