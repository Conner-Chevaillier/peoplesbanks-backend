
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('accounts').del()
    .then(function () {
      // Inserts seed entries
      return knex('accounts').insert([
        { bank_name: 'Bank of the People', acct_type: 'Checking', user_id: 1 },
        { bank_name: 'Bank of the People', acct_type: 'Checking', user_id: 2 },
        { bank_name: 'Bank of the People', acct_type: 'Saving', user_id: 2 },
        { bank_name: 'Bank of the People', acct_type: 'Saving', user_id: 3 },
        { bank_name: 'Bank of the People', acct_type: 'Checking', user_id: 4 },
        { bank_name: 'Bank of the People', acct_type: 'Saving', user_id: 4 },
        { bank_name: 'Bank of the People', acct_type: 'Checking', user_id: 5 }
      ]);
    });
};
