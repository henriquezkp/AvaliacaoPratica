import { Router } from 'express';
import EventoController from '../controllers/eventoController';

const routes = new Router();

routes.get(
    '/eventos',
    EventoController.index
);


export default routes;
