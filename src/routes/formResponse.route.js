import { Router } from 'express';

import FormResponseController from '../app/controllers/formResponse.controller';

const routes = new Router;

routes.get('/get_all', FormResponseController.index);
routes.post('/new', FormResponseController.store);
routes.post('/get_by_id', FormResponseController.getById);
routes.put('/update', FormResponseController.update);
routes.delete('/delete', FormResponseController.destroy);

export default routes;