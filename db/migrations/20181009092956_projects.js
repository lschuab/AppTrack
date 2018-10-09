
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', table => {
    table.increments();
    table.string('short_description');
    table.string('dev_type');
    table.text('stack_pref');
    table.text('full_description');
    table.integer('business_id')
      .notNullable()
      .references('id')
      .inTable('businesses')
      .onDelete('CASCADE')
      .index();
    table.boolean('accepted').defaultTo('false');
    table.integer('dev_id');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('projects');
};
