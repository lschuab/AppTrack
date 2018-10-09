
exports.up = function(knex, Promise) {
  return knex.schema.createTable('developers', table => {
    table.increments();
    table.string('dev_name');
    table.string('email');
    table.string('password');
    table.integer('project_id');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('developers');
};
