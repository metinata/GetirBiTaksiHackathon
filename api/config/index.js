export default {
    expressPort: process.env.PORT || 3000,
    mongo: {
        host: process.env.MONGO || 'localhost'
    }
}