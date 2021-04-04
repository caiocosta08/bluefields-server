import { Router } from 'express';

import FactoryController from '../app/controllers/FactoryController';

import authMiddleware from '../app/middlewares/auth';

const routes = new Router;

//private routes
routes.use(authMiddleware)

routes.get('/get_all', FactoryController.index);
routes.post('/get_by_id', FactoryController.getById);
routes.post('/get_by_owner_id', FactoryController.getByOwnerId);
routes.post('/register', FactoryController.store);
routes.put('/update', FactoryController.update);
routes.delete('/:id', FactoryController.destroy);

export default routes;