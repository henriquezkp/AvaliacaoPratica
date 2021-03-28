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
            attributes: ['id','nome_do_evento', 'data_do_evento']

        });
        return res.status(200).json(eventos);
    }

    async show(req, res) {
        const { id } = req.params;

        const evento = await Evento.findByPk(id);

        if (!evento) {
            return res.status(400).json({ message: 'Evento não encontrado' });
        };

        return res.status(200).json(evento);
    }

    async store(req, res) {
        const { nome_do_evento, data_do_evento } = req.body;


        if (!nome_do_evento || !data_do_evento) {
            return res.status(400).json({ message: 'Dados Inválidos' });
        }

        let tNome_do_evento = nome_do_evento.toUpperCase();

        const existente = await Evento.findOne({
            where: { nome_do_evento: tNome_do_evento, data_do_evento: data_do_evento }
        });

        if (existente) {
            return res.status(400).json({ message: 'Evento já cadastrado' });
        } else {
            const novo = await Evento.create({
                nome: (nome_do_evento.toUpperCase()),
                data_do_evento,
                created_at: new Date(),
                updated_at: new Date()
            });
            return res.status(200).json(novo);
        }
    }

    async update(req, res) {
        const { id } = req.params;
        const { nome_do_evento, data_do_evento } = req.body;

        const evento = await Evento.findByPk(id);
        if (!evento) {
            return res.status(400).json({ message: 'Evento não encontrado' });
        };

        const put = await Evento.update({
            nome_do_evento: ((!nome_do_evento) ? (evento.dataValues.nome_do_evento) : (nome_do_evento.toUpperCase())),
            data_do_evento: ((!data_do_evento) ? (evento.dataValues.data_do_evento) : (data_do_evento.toUpperCase())),
            updated_at: new Date()
        }, {
            where: { id },
            returning: true
        });
        return res.status(200).json(put);
    }

    async delete(req, res) {
        const { id } = req.params;

        const evento = await Evento.findByPk(id);
        if (!evento) {
            return res.status(400).json({ message: 'Evento não encontrado' });
        };

        await Evento.destroy({
            where: { id },
            returning: true
        });

        return res.status(200).json(`${evento.dataValues.nome_do_evento}, foi deletado com sucesso.`);
    }
}

export default new EventoController();