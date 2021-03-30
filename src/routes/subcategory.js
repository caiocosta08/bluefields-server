import { Router } from 'express';

import SubcategoryController from '../app/controllers/SubcategoryController';

import authMiddleware from '../app/middlewares/auth';

const routes = new Router;

//private routes
routes.use(authMiddleware)

routes.get('/', SubcategoryController.index);
routes.post('/', SubcategoryController.store);
routes.get('/:id', SubcategoryController.show);
routes.put('/:id', SubcategoryController.update);
routes.delete('/:id', SubcategoryController.destroy);

export default routes;