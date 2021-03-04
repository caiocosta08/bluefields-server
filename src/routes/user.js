import { Router } from 'express';

import UserController from '../app/controllers/UserController';

import authMiddleware from '../app/middlewares/auth';

const routes = new Router;

//private routes
routes.use(authMiddleware)

routes.get('/', UserController.index);
routes.get('/:id', UserController.show);
routes.put('/:id', UserController.update);
routes.delete('/:id', UserController.destroy);

export default routes;