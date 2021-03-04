import { Router } from 'express';

import AddressController from '../app/controllers/AddressController';

import authMiddleware from '../app/middlewares/auth';

const routes = new Router;

//private routes
routes.use(authMiddleware)

routes.get('/', AddressController.index);
routes.post('/', AddressController.store);
routes.get('/:id', AddressController.show);
routes.put('/:id', AddressController.update);
routes.delete('/:id', AddressController.destroy);

export default routes;