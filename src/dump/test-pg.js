const Sequelize = require('sequelize');

let sequelize;

if (process.env.NODE_ENV === 'development') {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS, {
      host: process.env.DB_HOST,
      dialect: 'postgres',
    },
  );
}

sequelize
  .authenticate()
  .then(() => {
    console.log('connection has been established');
  })
  .catch((err) => {
    console.error('unable to connect to the database', err);
  });

sequelize
  .query('SELECT current_database();')
  .then((result) => console.log(result))
  .catch((err) => {
    console.error('database issue: ', err);
  });
