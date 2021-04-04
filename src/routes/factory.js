import { Router } from 'express';

import FactoryController from '../app/controllers/FactoryController';

import authMiddleware from '../app/middlewares/auth';

const routes = new Router;

//private routes
routes.use(authMiddleware)

routes.post('/get_all', FactoryController.index);
routes.get('/get_factory_with_owner_id', FactoryController.show);
routes.post('/register', FactoryController.store);
routes.put('/update', FactoryController.update);
routes.delete('/:id', FactoryController.destroy);

export default routes;