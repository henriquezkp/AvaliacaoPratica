import { Router } from 'express';
import EventoController from '../controllers/eventoController';

const routes = new Router();

routes.get(
    '/eventos',
    EventoController.index
);

routes.get(
    '/eventos/:id',
    EventoController.show
);

routes.post(
    '/eventos',
    EventoController.store
);

routes.put(
    '/eventos/:id',
    EventoController.update
);

routes.delete(
    '/eventos/:id',
    EventoController.delete
);


export default routes;
