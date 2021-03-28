import Contato from '../models/contato';
import Evento from '../models/evento';
import Participante from '../models/participante';



class ParticipanteController {
    async index(req, res) {
        const contatos = await Participante.findAll({
            include: [
                {
                    model: Contato,
                },
                {
                    model: Evento,
                    attributes: [
                        'nome_do_evento'
                    ]
                }
            ],
            
        });

        return res.status(200).json(contatos);
    }

    async store(req, res) {
        const { id_contato, id_evento } = req.body;


        if (!id_contato || !id_evento) {
            return res.status(400).json({ message: 'Dados Inválidos' });
        }

        
        
        const existente = await Participante.findOne({
            where: { id_contato, id_evento }
        });

        if (existente) {
            return res.status(400).json({ message: 'Evento já cadastrado do grupo' });
        } else {
            const novo = await Participante.create({
                id_contato, 
                id_evento,
                created_at: new Date(),
                updated_at: new Date()
            });
            return res.status(200).json(novo);
        }
    }

}

export default new ParticipanteController();