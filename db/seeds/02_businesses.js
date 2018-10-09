
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('businesses').del()
    .then(function () {
      // Inserts seed entries
      return knex('businesses').insert([
        {
          company_name: 'Hyver',
          contact_name: 'Kirk Morales',
          email: 'kirk@hyverlabs.com',
          company_url: 'http://hyverlabs.com'
        }
      ]);
    });
};
