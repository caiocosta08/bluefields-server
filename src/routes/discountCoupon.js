import { Router } from 'express';

import DiscountCouponController from '../app/controllers/DiscountCouponController';

import authMiddleware from '../app/middlewares/auth';

const routes = new Router;

//private routes
routes.use(authMiddleware)

routes.get('/', DiscountCouponController.index);
routes.post('/', DiscountCouponController.store);
routes.get('/:id', DiscountCouponController.show);
routes.put('/:id', DiscountCouponController.update);
routes.delete('/:id', DiscountCouponController.destroy);



export default routes;