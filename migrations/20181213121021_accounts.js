exports.up = function (knex, Promise) {
    return knex.schema.createTable('accounts', (accout) => {
        account.increments('id');
        account.string('acct_name');
        account.string('bank_name');
        account.string('acct_type');
        account.integer('user_id');
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('accounts');
};
