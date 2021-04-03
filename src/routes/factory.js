import { Router } from 'express';

import FactoryController from '../app/controllers/FactoryController';

import authMiddleware from '../app/middlewares/auth';

const routes = new Router;

//private routes
routes.use(authMiddleware)

routes.post('/get_all', FactoryController.index);
routes.post('/register', FactoryController.store);
routes.get('/data', FactoryController.show);
routes.put('/update', FactoryController.update);
routes.delete('/:id', FactoryController.destroy);

export default routes;