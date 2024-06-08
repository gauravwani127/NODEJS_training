// import { Pool } from 'pg';
import { Sequelize } from 'sequelize';
import credentials  from '../common/credentials';




// const pool = new Pool({
 const sequelize = new Sequelize({

    // user: 'postgres',
    username: credentials.postgres.USERNAME,
    host: credentials.postgres.HOST,
    database: credentials.postgres.DATABASE ,
    password: credentials.postgres.PASSWORD ,
    port:  credentials.postgres.DBPORT,
    dialect: "postgres",
});


//This are the functions provided by sequeize to test database connection and synchronize database schema to that of models
sequelize.authenticate()
  .then(() => {
    console.log('Database connection established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });



//Synchronize
// sequelize.sync({alter:true})
sequelize.sync()
  .then(() => {
    console.log('Models synchronized with the database.');
  })
  .catch((err) => {
    console.error('Unable to synchronize models with the database:', err);
  });


  // Association


export default sequelize;

