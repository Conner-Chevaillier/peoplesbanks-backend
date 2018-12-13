const db = require('./database-connection');

module.exports = {
    listAllUsers() {
        return db('users');
    }
}