import { Router } from 'express';

import AddressController from '../app/controllers/AddressController';

import authMiddleware from '../app/middlewares/auth';

const routes = new Router;

//private routes
routes.use(authMiddleware)

routes.get('/get_all', AddressController.getAll);
routes.post('/get_by_id', AddressController.getById);
routes.post('/get_all_by_shop_id', AddressController.getAllByShopId);
routes.post('/new', AddressController.store);
routes.get('/:id', AddressController.show);
routes.put('/:id', AddressController.update);
routes.delete('/:id', AddressController.destroy);

export default routes;