import Contato from '../models/contato';
import Evento from '../models/evento';
import Grupo from '../models/grupo';


class GrupoController {
    async index(req, res) {
        const grupos = await Grupo.findAll({
           include: [
                {
                    model: Contato,
                    
                }
            ]
        });
        return res.status(200).json(grupos);
    }
    
}

export default new GrupoController();