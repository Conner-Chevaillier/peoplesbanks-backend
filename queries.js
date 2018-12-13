const db = require('./database-connection');

module.exports = {
    listAllUsers() {
        return db('users');
    },
    getUserById(id) {
        return db('users').where('id', id);
    },
    createUser(newUser) {
        return db('users').insert(newUser).returning('*');
    },
    updateUser(id, user) {
        return db('users').where('id', id).update(user).returning('*');
    },
    deleteUser(id) {
        return db('users').where('id', id).delete();
    }
}