
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('developers').del()
    .then(function () {
      // Inserts seed entries
      return knex('developers').insert([
        {
          dev_name: 'Leandro Schuab',
          email: 'lschuab@gmail.com',
          password: 'as'
        }
      ]);
    });
};
