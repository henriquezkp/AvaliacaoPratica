import Sequelize from 'sequelize';
import config from '../config/database';

//Models import
import Contato from '../app/models/contato';
import Evento from '../app/models/evento';
import Grupo from '../app/models/grupo';
import ContatosDeGrupos from '../app/models/contatosDeGrupos';
import Participante from '../app/models/participante';

const models = [
    Contato,
    Evento,
    Grupo,
    ContatosDeGrupos,
    Participante
];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(config);

        models
            .map(model => model.init(this.connection))
            .map(model => model.associate && model.associate(this.connection.models));
    }
}

export default new Database();
