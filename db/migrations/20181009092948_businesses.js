
exports.up = function(knex, Promise) {
  return knex.schema.createTable('businesses', table => {
    table.increments();
    table.string('company_name');
    table.string('contact_name');
    table.string('email').unique();
    table.string('password');
    table.string('phone_number');
    table.text('company_url');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('businesses');
};
