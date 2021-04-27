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
//1) Inserción y actualización de un registro.
// se agrega un registro

sequelize.sync()
  .then(() => User.create({
    firstName: 'Pblo',
    lastName: 'Díaz'
  }))
  .then(jane => {
    console.log(jane.toJSON());
})

// se actualiza el registro
sequelize.sync()
    .then(() => User.update({ firstName:"Pablo" }, {
    where: {
        lastName: 'Díaz'
    }
  }).then(() => {
      console.log("Done");
})
);
