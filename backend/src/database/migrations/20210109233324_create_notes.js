
exports.up = function(knex) {
  return knex.schema.createTable('notes',function(table){
    table.increments('id');
    table.string('title').notNullable;
    table.string('body').notNullable;
    table.date('creted_at');

    table.integer('user_id').notNullable;
    table.foreign('user_id').references('id').inTable('users');
  });
};

exports.down = function(knex) {
    return knex.schema.dropTable('notes');
};
