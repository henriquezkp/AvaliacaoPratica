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

    async show(req,res){
        const { id } = req.params;

        const grupo = await Grupo.findByPk(id);

        if (!grupo) {
            return res.status(400).json({ message: 'Grupo não encontrado' });
        };

        return res.status(200).json(grupo);
    }

    async store(req,res){
        const { nome_do_grupo } = req.body;


        if (!nome_do_grupo) {
            return res.status(400).json({ message: 'Dados Inválidos' });
        }

        let tNome_do_grupo = nome_do_grupo.toUpperCase();
        const existente = await Grupo.findOne({
            where: { nome: tNome_do_grupo }
        });

        if (existente) {
            return res.status(400).json({ message: 'Grupo já cadastrado' });
        } else {
            const novo = await Grupo.create({
                tNome_do_grupo: (tNome_do_grupo.toUpperCase()),
                created_at: new Date(),
                updated_at: new Date()
            });
            return res.status(200).json(novo);
        }
    }

    async update(req,res){
        
        const { id } = req.params;
        const { nome_do_grupo } = req.body;

        const grupo = await Grupo.findByPk(id);
        if (!grupo) {
            return res.status(400).json({ message: 'Grupo não encontrado' });
        };

        const put = await Grupo.update({
            nome_do_grupo: ((!nome_do_grupo) ? (grupo.dataValues.nome_do_grupo) : (nome_do_grupo.toUpperCase())),
            updated_at: new Date()
        }, {
            where: { id },
            returning: true
        });
        return res.status(200).json(put);
    }

    async delete(req,res){
        const { id } = req.params;

        const grupo = await Grupo.findByPk(id);
        if (!grupo) {
            return res.status(400).json({ message: 'Grupo não encontrado' });
        };

        await Grupo.destroy({
            where: { id },
            returning: true
        });

        return res.status(200).json(`${grupo.dataValues.nome_do_grupo}, foi deletado com sucesso.`);
    }

    
}

export default new GrupoController();