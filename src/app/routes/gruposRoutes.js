import { Router } from 'express';
import GrupoController from '../controllers/grupoController';

const routes = new Router();

routes.get(
    '/grupos',
    GrupoController.index
);

routes.get(
    '/grupos/:id',
    GrupoController.show
);

routes.post(
    '/grupos',
    GrupoController.store
);

routes.put(
    '/grupos/:id',
    GrupoController.update
);

routes.delete(
    '/grupos/:id',
    GrupoController.delete
);

export default routes;
