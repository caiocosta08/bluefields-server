import { Router } from 'express';

import AffiliatedShopsController from '../app/controllers/AffiliatedShopsController';

import authMiddleware from '../app/middlewares/auth';

const routes = new Router;

//private routes
routes.use(authMiddleware)

routes.post('/new', AffiliatedShopsController.affiliateWithAFactory);
routes.post('/get_all_by_factory_id', AffiliatedShopsController.getAllByFactoryId);
routes.post('/get_all_by_shop_id', AffiliatedShopsController.getAllByShopId);
routes.delete('/delete_affiliate_from_factory', AffiliatedShopsController.removeAffiliateFromFactory);
routes.delete('/delete_affiliate_from_shop', AffiliatedShopsController.removeAffiliateFromShop);




export default routes;