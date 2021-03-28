import Contato from '../models/contato';
import Evento from '../models/evento';
import Grupo from '../models/grupo';
import ContatosDeGrupos from '../models/contatosDeGrupos';



class ContatosDeGruposController {
    async index(req, res) {
        const contatos = await ContatosDeGrupos.findAll({
            include: [
                {
                    model: Contato,
                },
                {
                    model: Grupo,
                    attributes: [
                        'nome_do_grupo'
                    ]
                }
            ],
            
        });

        return res.status(200).json(contatos);
    }

    async store(req, res) {
        const { id_contato, id_grupo } = req.body;


        if (!id_contato || !id_grupo) {
            return res.status(400).json({ message: 'Dados Inválidos' });
        }

        
        
        const existente = await ContatosDeGrupos.findOne({
            where: { id_contato, id_grupo }
        });

        if (existente) {
            return res.status(400).json({ message: 'Contato já cadastrado do grupo' });
        } else {
            const novo = await ContatosDeGrupos.create({
                id_contato, 
                id_grupo,
                created_at: new Date(),
                updated_at: new Date()
            });
            return res.status(200).json(novo);
        }
    }

}

export default new ContatosDeGruposController();