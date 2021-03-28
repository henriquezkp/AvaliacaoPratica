import Sequelize, { Model } from 'sequelize';

class Participante extends Model {
    static init(sequelize) {
        super.init({
            id_contato: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                references: {
                    model: 'contatos',
                    schema: 'agenda',
                    key: 'id'
                }
            },
            id_evento: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                references: {
                    model: 'eventos',
                    schema: 'agenda',
                    key: 'id'
                }
            },

        }, {
            sequelize,
            schema: 'agenda',
            tableName: 'participantes'
        });

        return this;
    }

}

export default Participante;