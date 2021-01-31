import { Router } from 'express';

import seedRoutes from './seed.routes';

const routes = Router();

routes.use('/seed', seedRoutes);

export default routes;
