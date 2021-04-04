import { Router } from 'express';

import UserController from '../app/controllers/UserController';

import authMiddleware from '../app/middlewares/auth';

const routes = new Router;

//private routes
routes.use(authMiddleware)

routes.get('/get_all', UserController.index);
routes.post('/get_by_id', UserController.show);
routes.put('/update', UserController.update);
routes.delete('/:id', UserController.destroy);

export default routes;