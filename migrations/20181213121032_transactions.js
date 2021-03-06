exports.up = function (knex, Promise) {
    return knex.schema.createTable('transactions', (transaction) => {
        transaction.increments('id');
        transaction.string('title');
        transaction.boolean('status');
        transaction.integer('amount');
        transaction.integer('account_id').references('id').inTable('accounts').onDelete('cascade');
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('transactions');
};
