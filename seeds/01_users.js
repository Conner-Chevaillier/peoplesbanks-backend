
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { username: 'hotstuff', first_name: 'Kevin', last_name: 'Grater', email: 'hotstuff@gmail.com', password: 'hottie' },
        { username: 'dolphinlover', first_name: 'Angela', last_name: 'Adams', email: 'finlover@gmail.com', password: 'ilovedolphins' },
        { username: 'flatearther', first_name: 'Damien', last_name: 'Daniels', email: 'theworldisflat@gmail.com', password: 'flatearth' },
        { username: 'bearsarefriends', first_name: 'Bryan', last_name: 'Billings', email: 'bearbackbro@gmail.com', password: 'bearsbaby' },
        { username: 'shreddieboy', first_name: 'Ryan', last_name: 'Woolsworth', email: 'shreddit@gmail.com', password: 'shredit' }
      ]);
    });
};
