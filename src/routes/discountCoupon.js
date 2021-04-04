import { Router } from 'express';

import DiscountCouponController from '../app/controllers/DiscountCouponController';

import authMiddleware from '../app/middlewares/auth';

const routes = new Router;

//private routes
routes.use(authMiddleware)

routes.get('/get_all', DiscountCouponController.getAll);
routes.get('/get_with_owner_id', DiscountCouponController.getAllWithOwnerId);
routes.post('/new', DiscountCouponController.store);
routes.get('/:id', DiscountCouponController.show);
routes.put('/:id', DiscountCouponController.update);
routes.delete('/:id', DiscountCouponController.destroy);



export default routes;