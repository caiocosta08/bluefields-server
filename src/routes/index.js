import { Router } from 'express';

import userRoutes from './user.route';
import formResponseRoutes from './formResponse.route';
import tbb7FormResponseRoutes from './tbb7FormResponse.route';
import informationRoutes from './information.route';

const routes = new Router();

routes.use('/user', userRoutes);
routes.use('/form-response', formResponseRoutes);
routes.use('/information', informationRoutes);
routes.use('/tbb7-form-response', tbb7FormResponseRoutes);

routes.get('/', (req, res) => {
  return res.json({ message: 'Rota raiz do servidor' });
})


export default routes;