const { Sequelize }  = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite'

})
sequelize.authenticate()
            .then(() => { 
                console.log('Conexao feita com sucesso!')
                return sequelize.sync()
            })
            .catch(err => {
                    console.error('Nao foi possivel se conectar', err)
            })
            
module.exports = sequelize;           