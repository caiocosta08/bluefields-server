import { Router } from 'express';

import OrderListController from '../app/controllers/OrderListController';

import authMiddleware from '../app/middlewares/auth';

const routes = new Router;

//private routes
routes.use(authMiddleware)

routes.get('/get_all', OrderListController.getAll);
routes.post('/get_by_id', OrderListController.getById);
routes.post('/get_all_by_order_id', OrderListController.getAllByOrderId);
routes.post('/new', OrderListController.store);
routes.get('/:id', OrderListController.show);
routes.put('/update', OrderListController.update);
routes.delete('/delete', OrderListController.destroy);

export default routes;