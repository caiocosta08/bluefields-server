import { Router } from 'express';

import InformationController from '../app/controllers/information.controller';

const routes = new Router;

routes.get('/get_all', InformationController.index);
routes.get('/get_info_data', InformationController.getInfoData);
routes.post('/new', InformationController.store);
routes.post('/get_by_id', InformationController.getById);
routes.put('/update', InformationController.update);
routes.delete('/delete', InformationController.destroy);

export default routes;