import { Router } from 'express';
import ParticipantesController from '../controllers/participanteController';

const routes = new Router();

routes.get(
    '/participantes',
    ParticipantesController.index
);

routes.post(
    '/participantes',
    ParticipantesController.store
);

export default routes;
