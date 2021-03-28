import Contato from '../models/contato';
import Evento from '../models/evento';
import Grupo from '../models/grupo';


class ContatoController {
    async index(req, res) {
        const contatos = await Contato.findAll({
            include: [
                {
                    model: Evento,
                    attributes:[
                        'nome_do_evento',
                        'data_do_evento'
                    ]
                },
                {
                    model: Grupo,
                    attributes:[
                        'nome_do_grupo'
                    ]
                }
            ],
            attributes: ['id', 'nome']
        });
        return res.status(200).json(contatos);
    }

}

export default new ContatoController();