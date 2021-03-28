import Contato from '../models/contato';
import Evento from '../models/evento';
import Grupo from '../models/grupo';


class ContatoController {
    async index(req, res) {
        const contatos = await Contato.findAll({
            include: [
                {
                    model: Evento,
                    attributes: [
                        'nome_do_evento',
                        'data_do_evento'
                    ]
                },
                {
                    model: Grupo,
                    attributes: [
                        'nome_do_grupo'
                    ]
                }
            ],
            attributes: ['id', 'nome']
        });

        return res.status(200).json(contatos);
    }

    async show(req, res) {
        const { id } = req.params;

        const contato = await Contato.findByPk(id);

        if (!contato) {
            return res.status(400).json({ message: 'Contato não encontrado' });
        };

        return res.status(200).json(contato);
    }

    async store(req, res) {
        const { nome, sobrenome, celular, email } = req.body;


        if (!nome || !sobrenome || !celular || !email) {
            return res.status(400).json({ message: 'Dados Inválidos' });
        }

        let tNome = nome.toUpperCase();
        let tSobrenome = sobrenome.toUpperCase();
        const existente = await Contato.findOne({
            where: { nome: tNome, sobrenome: tSobrenome }
        });

        if (existente) {
            return res.status(400).json({ message: 'Contato já cadastrado' });
        } else {
            const novo = await Contato.create({
                nome: (nome.toUpperCase()),
                sobrenome: (sobrenome.toUpperCase()),
                celular,
                email,
                created_at: new Date(),
                updated_at: new Date()
            });
            return res.status(200).json(novo);
        }
    }

    async update(req, res) {
        const { id } = req.params;
        const { nome, sobrenome, celular, email } = req.body;

        const contato = await Contato.findByPk(id);
        if (!contato) {
            return res.status(400).json({ message: 'Contato não encontrado' });
        };

        const put = await Contato.update({
            nome: ((!nome) ? (contato.dataValues.nome) : (nome.toUpperCase())),
            sobrenome: ((!sobrenome) ? (contato.dataValues.sobrenome) : (sobrenome.toUpperCase())),
            celular: ((!celular) ? (contato.dataValues.celular) : (celular)),
            email: ((!email) ? (contato.dataValues.email) : (email)),
            updated_at: new Date()
        }, {
            where: { id },
            returning: true
        });
        return res.status(200).json(put);


    }

    async delete(req, res) {
        const { id } = req.params;

        const contato = await Contato.findByPk(id);
        if (!contato) {
            return res.status(400).json({ message: 'Contato não encontrado' });
        };

        await Contato.destroy({
            where: { id },
            returning: true
        });

        return res.status(200).json(`${contato.dataValues.nome}, foi deletado com sucesso.`);
    }

}

export default new ContatoController();