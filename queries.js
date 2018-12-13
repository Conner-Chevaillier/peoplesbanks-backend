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
// {
//     listAllAccounts() {
//         return db('accounts');
//     },
//     getUserById(id) {
//         return db('accounts').where('id', id);
//     },
//     createUser(newUser) {
//         return db('accounts').insert(newUser).returning('*');
//     },
//     updateUser(id, user) {
//         return db('accounts').where('id', id).update(user).returning('*');
//     },
//     deleteUser(id) {
//         return db('accounts').where('id', id).delete();
//     }
// }