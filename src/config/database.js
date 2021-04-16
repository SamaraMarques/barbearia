module.exports = {
  development: {
    dialect: process.env.DB_DIALECT || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || '5432',
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    database: process.env.DB_DATABASE || 'barbearia-db',
    timezone: '-03:00',
    define: {
      timestamps: true,
      underscored: true,
      underscoreAll: true
    }
  },
  test: {
    dialect: 'sqlite',
    storage: 'db.sqlite',
    define: {
      timestamps: true,
      underscored: true,
      underscoreAll: true
    }
  }
};