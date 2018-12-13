
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('accounts').del()
    .then(function () {
      // Inserts seed entries
      return knex('accounts').insert([
        { acct_name: 'My Checking', bank_name: 'Bank of the People', acct_type: 'Checking', total: 10475, user_id: 1 },
        { acct_name: 'Hookers and Blow', bank_name: 'Bank of the People', acct_type: 'Checking', total: 19475, user_id: 2 },
        { acct_name: 'House', bank_name: 'Bank of the People', acct_type: 'Saving', total: 20475, user_id: 2 },
        { acct_name: 'Crack and Stuff', bank_name: 'Bank of the People', acct_type: 'Saving', total: 800000, user_id: 3 },
        { acct_name: 'Good Stuff', bank_name: 'Bank of the People', acct_type: 'Checking', total: 70000, user_id: 4 },
        { acct_name: 'Just Blow', bank_name: 'Bank of the People', acct_type: 'Saving', total: 7500, user_id: 4 },
        { acct_name: 'Just Hookers', bank_name: 'Bank of the People', acct_type: 'Checking', total: 75000, user_id: 5 }
      ]);
    });
};