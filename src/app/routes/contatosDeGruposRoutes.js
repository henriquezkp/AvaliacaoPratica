import { Router } from 'express';
import ContatosDeGruposController from '../controllers/contatosDeGruposController';

const routes = new Router();

routes.get(
    '/contatosgrupos',
    ContatosDeGruposController.index
);

routes.post(
    '/contatosgrupos',
    ContatosDeGruposController.store
);

export default routes;
