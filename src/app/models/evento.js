import Sequelize, { Model } from 'sequelize';

class Evento extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            nome_do_evento: {
                type: Sequelize.STRING(100),
                allowNull: false
            },
            data_do_evento: {
                type: Sequelize.STRING(100),
                allowNull: false
            },
        }, {
            sequelize,
            schema: 'agenda',
            tableName: 'eventos'
        });

        return this;
    }

    static associate(models) {
        this.belongsToMany(models.Contato, {
            through: models.Participante,
            foreignKey:'id_evento'
        });
    }
}

export default Evento;