import Sequelize, { Model } from 'sequelize';

class Grupo extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            nome_do_grupo: {
                type: Sequelize.STRING(30),
                allowNull: false
            }
        }, {
            sequelize,
            schema: 'agenda',
            tableName: 'grupos'
        });

        return this;
    }

    static associate(models) {
        this.belongsToMany(models.Contato, {
            through: models.ContatosDeGrupos
        });
    }

}

export default Grupo;