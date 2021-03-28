import Sequelize, { Model } from 'sequelize';

class ContatosDeGrupos extends Model {
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
            id_grupos: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                references: {
                    model: 'grupos',
                    schema: 'agenda',
                    key: 'id'
                }
            },

        }, {
            sequelize,
            schema: 'agenda',
            tableName: 'contatos_de_grupos'
        });

        return this;
    }

}

export default ContatosDeGrupos;