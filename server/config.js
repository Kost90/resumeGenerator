const dotenv = require("dotenv");

dotenv.config();

const db = process.env.DATABASE;
const user = process.env.DATABASE_USERNAME;
const pw = process.env.DATABASE_PASSWORD;
const host = process.env.PG_HOST;


module.exports = {
    db,
    user,
    pw,
    host,
}

