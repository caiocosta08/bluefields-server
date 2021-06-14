import { Router } from 'express';

import tbb7FormResponseController from '../app/controllers/tbb7FormResponse.controller';

const routes = new Router;

routes.get('/get_all', tbb7FormResponseController.index);
routes.post('/new', tbb7FormResponseController.store);
routes.post('/get_by_id', tbb7FormResponseController.getById);
routes.put('/update', tbb7FormResponseController.update);
routes.delete('/delete', tbb7FormResponseController.destroy);

export default routes;