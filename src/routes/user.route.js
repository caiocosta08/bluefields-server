import { Router } from 'express';

import UserController from '../app/controllers/user.controller';

import authMiddleware from '../app/middlewares/auth';

const routes = new Router;

//private routes
routes.use(authMiddleware)

routes.get('/get_all', UserController.index);
routes.post('/register', UserController.store);
routes.post('/get_by_id', UserController.getById);
routes.put('/update', UserController.update);
routes.delete('/delete', UserController.destroy);

export default routes;