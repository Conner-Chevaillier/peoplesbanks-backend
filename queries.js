const db = require('./database-connection');

module.exports = {
    listAllUsers() {
        return db('users');
    },
    getUserById(id) {
        return db('users').select('users.email', 'users.first_name', 'users.last_name', 'users.id as user_id', 'accounts.acct_name', 'accounts.id as acct_id', 'accounts.acct_type', 'accounts.total')
            .join('accounts', 'users.id', 'accounts.user_id')
            .where('users.id', id)
    },
    createUser(newUser) {
        return db('users').insert(newUser).returning('*');
    },
    updateUser(id, user) {
        return db('users').where('id', id).update(user).returning('*');
    },
    deleteUser(id) {
        return db('users').where('id', id).delete();
    },
    getAllAccounts() {
        return db('accounts');
    },
    getTransactionsByAccount(accountId) {
        return db('accounts')
            .select('transactions.title', 'transactions.amount', 'transactions.status')
            .join('transactions', 'transactions.account_id', 'accounts.id')
            .where('accounts.id', accountId);
    },
    getAccountsByUser(id) {
        return db('users')
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