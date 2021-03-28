import Contato from '../models/contato';
import ContatosDeGrupos from '../models/contatosDeGrupos';
import Evento from '../models/evento';
import Grupo from '../models/grupo';


class GrupoController {
    async index(req, res) {
        const grupos = await Grupo.findAll({
           include: [
                {
                    model: ContatosDeGrupos,
                    attributes:['id_contato']
                    
                }
            ]
        });
        return res.status(200).json(grupos);
    }
    
}

export default new GrupoController();