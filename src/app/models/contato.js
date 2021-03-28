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
            through:models.ContatosDeGrupos,
            foreignKey: 'id_contato'
        });
        this.belongsToMany(models.Evento,{
            through:models.Participante,
            foreignKey:'id_contato'
        });
    }

}

export default Contato;