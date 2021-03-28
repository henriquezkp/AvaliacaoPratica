import Sequelize, { Model } from 'sequelize';

class Contato extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            nome: {
                type: Sequelize.STRING(30),
                allowNull: false
            },
            sobrenome: {
                type: Sequelize.STRING(30),
                allowNull: false
            },
            celular: {
                type: Sequelize.STRING(30),
                allowNull: false
            },
            email: {
                type: Sequelize.STRING(100),
                allowNull: false
            }
        }, {
            sequelize,
            schema: 'agenda',
            tableName: 'contatos'
        });
        
        return this;
    }

    static associate(models){
        this.belongsToMany(models.Grupo,{
            through:models.ContatosDeGrupos
        });
        this.belongsToMany(models.Evento,{
            through:models.Participante
        });
    }

}

export default Contato;