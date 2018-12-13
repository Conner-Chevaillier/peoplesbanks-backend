
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('transactions').del()
    .then(function () {
      // Inserts seed entries
      return knex('transactions').insert([
        { title: 'DSW', status: true, amount: 10000, account_id: '1' },
        { title: 'Trader Joes', status: true, amount: 5000, account_id: '2' },
        { title: 'Coinbase', status: true, amount: 4000, account_id: '3' },
        { title: 'REI', status: true, amount: 45000, account_id: '3' },
        { title: 'Walmart', status: true, amount: 1000, account_id: '2' },
        { title: 'Kens Adult Store', status: true, amount: 2500, account_id: '4' },
        { title: 'Stuff', status: true, amount: 3000, account_id: '5' },
      ]);
    });
};
