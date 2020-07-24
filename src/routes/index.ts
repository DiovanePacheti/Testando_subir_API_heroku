import Router from 'express';
import userRoutes from './user.routes'
import pointsRoutes from './points.routes'

const routes = Router();

routes.use('/users', userRoutes);
routes.use('/points', pointsRoutes);

export default routes;
