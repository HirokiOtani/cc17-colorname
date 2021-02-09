const config = {
  client: "pg",
  connection: {
    connectionString:
      process.env.DATABASE_URL ||
      `postgres://${process.env.USER}:${process.env.PW}@127.0.0.1:5432/colorname`,
    ssl: process.env.HAS_SSL ? { rejectUnauthorized: false } : undefined,
  },
  migrations: {
    directory: "../db/migrations",
  },
  seeds: {
    directory: "../db/seeds",
  },
  searchPath: "public",
};

module.exports = config;
