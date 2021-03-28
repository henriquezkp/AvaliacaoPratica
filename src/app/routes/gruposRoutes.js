import { Router } from 'express';
import GrupoController from '../controllers/grupoController';

const routes = new Router();

routes.get(
    '/grupos',
    GrupoController.index
);


export default routes;
