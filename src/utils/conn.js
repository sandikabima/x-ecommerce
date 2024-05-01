const { Sequelize } = require('sequelize');
require('dotenv').config();
const pg = require('pg')

const { Pool } = pg;

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT, // Tambahkan ini untuk mengatasi kesalahan
        logging: process.env.NODE_ENV === "development" ? (...msg) => console.log(msg) : false,
        dialectOptions: {
            requestTimeout: 3000,
            encrypt: true,
        }
    }
);


const pool = new Pool({
  connectionString: process.env.POSTGRES_URL ,
})

module.exports = sequelize