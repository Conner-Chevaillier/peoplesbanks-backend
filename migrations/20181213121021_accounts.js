exports.up = function (knex, Promise) {
    return knex.schema.createTable('accounts', (account) => {
        account.increments('id');
        account.string('bank_name');
        account.string('acct_type');
        account.integer('user_id').references('id').inTable('users').onDelete('cascade');
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('accounts');
};
