// import { Pool } from 'pg';
import { Sequelize } from 'sequelize';


// const pool = new Pool({
 const sequelize = new Sequelize({

    // user: 'postgres',
    username: 'postgres',

    host: 'localhost',
    database: "testdatabas",
    password: "Password1#",
    port: 5432,

    //dialect 
    dialect: "postgres",
});


sequelize.authenticate()
  .then(() => {
    console.log('Database connection established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });





sequelize.sync()
  .then(() => {
    console.log('Models synchronized with the database.');
  })
  .catch((err) => {
    console.error('Unable to synchronize models with the database:', err);
  });



export default sequelize;