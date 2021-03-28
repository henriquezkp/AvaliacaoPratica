import Evento from '../models/evento';
import Contato from '../models/contato';

class EventoController {
    async index(req, res) {
        const eventos = await Evento.findAll();
        return res.status(200).json(eventos);
    }

}

export default new EventoController();