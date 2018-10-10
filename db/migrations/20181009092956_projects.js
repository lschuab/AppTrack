
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', table => {
    table.increments();
    table.string('company_name');
    table.text('company_url');
    table.text('stack_pref');
    table.string('dev_type');
    table.string('short_description');
    table.text('full_description');
    table.integer('business_id')
      .notNullable()
      .references('id')
      .inTable('businesses')
      .onDelete('CASCADE')
      .index();
    table.integer('dev_id')
      .references('id')
      .inTable('developers');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('projects');
};
