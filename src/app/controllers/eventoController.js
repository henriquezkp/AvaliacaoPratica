import Evento from '../models/evento';
import Participante from '../models/participante';

class EventoController {
    async index(req, res) {
        const eventos = await Evento.findAll({
            include: [
                {
                    model: Participante,
                    attributes: ['id_contato']
                }
            ],
            attributes: ['nome_do_evento', 'data_do_evento']

        });
        return res.status(200).json(eventos);
    }

}

export default new EventoController();