import { Router } from 'express';
import ContatoController from './../controllers/contatoController';

const routes = new Router();

routes.get(
    '/contatos',
    ContatoController.index
);

routes.get(
    '/contatos/:id',
    ContatoController.show
);

routes.post(
    '/contatos',
    ContatoController.store
);

routes.put(
    '/contatos/:id',
    ContatoController.update
);

routes.delete(
    '/contatos/:id',
    ContatoController.delete
);

export default routes;
