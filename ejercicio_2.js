const Sequelize = require('sequelize');

const sequelize = new Sequelize('prueba', 'root', '', {
  host: 'localhost',
  dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

const Model = Sequelize.Model;
class User extends Model {}
User.init({
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING
  }
}, {
  sequelize,
  modelName: 'user'
});

//2) inserción y eliminación de un registro.

// se agrega un registro

sequelize.sync()
.then(() => User.create({
firstName: 'cooso',
lastName: 'Díaz',
id : 15
}))
.then(jane => {
console.log(jane.toJSON());
});

sequelize.sync().then(() => 
User.destroy({
    where: {
        id: 15
    }
    }).then(() => {
    console.log("Elimine Registro");
    })
);


