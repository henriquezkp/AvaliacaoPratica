import Contato from '../models/contato';
import Evento from '../models/evento';


class ContatoController {
    async index(req, res) {
        const contatos = await Contato.findAll({
           /* include: [
                {
                    model: Evento
                }
            ]*/
        });
        return res.status(200).json(contatos);
    }
    
}

export default new ContatoController();