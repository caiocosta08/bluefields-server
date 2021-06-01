import { Router } from 'express';

import userRoutes from './user';

const routes = new Router();

routes.use('/user', userRoutes);

routes.get('/', (req, res) =>{
  return res.json({ message: 'Rota raiz do servidor'});
})


export default routes;