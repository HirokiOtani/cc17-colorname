const config = {
  client: "pg",
  connection: {
    connectionString:
      process.env.DATABASE_URL ||
      `postgres://${process.env.USER}:${process.env.PW}@127.0.0.1:5432/colorname`,
    ssl: process.env.HAS_SSL ? { rejectUnauthorized: false } : undefined,
  },
  migrations: {
    directory: "../cc17-colorname/db/migrations",
  },
  seeds: {
    directory: "../cc17-colorname/db/seeds",
  },
  searchPath: "public",
};

//const config = {
//client: "pg",
//connection:
//process.env.DATABASE_URL ||
//`postgres://${process.env.USER}:${process.env.PW}@127.0.0.1:5432/colorname`,
//migrations: {
//directory: "../cc17-colorname/dbs/migrations",
//},
//seeds: {
//directory: "../cc17-colorname/db/seeds",
//},
//searchPath: "public",
//};

module.exports = config;
