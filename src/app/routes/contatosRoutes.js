import { Router } from 'express';
import ContatoController from './../controllers/contatoController';

const routes = new Router();

routes.get(
    '/contatos',
    ContatoController.index
);


export default routes;
