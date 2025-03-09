export default {
    schema: './src/db/schema.js',
    driver: 'pg',
    out: './drizzle',
    dbCredentials: {
        host: '127.0.0.1',
        port: 5432,
        user: 'admin',
        password: 'super1234password',
        database: 'database'
    },
};