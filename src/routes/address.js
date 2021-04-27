import { Router } from 'express';

import AddressController from '../app/controllers/AddressController';

import authMiddleware from '../app/middlewares/auth';

const routes = new Router;

//private routes
routes.use(authMiddleware)

routes.get('/get_all', AddressController.getAll);
routes.post('/get_by_id', AddressController.getById);
routes.post('/get_by_shop_id', AddressController.getByShopId);
routes.post('/new', AddressController.store);
routes.get('/:id', AddressController.show);
routes.put('/update', AddressController.update);
routes.delete('/delete', AddressController.destroy);

export default routes;