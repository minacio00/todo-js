
exports.up = function(knex) {
    return knex.schema.alterTable('notes', function (table) {
        table.dropForeign('user_id');
        table.foreign('user_id')
                .references('id')
                .inTable('users')
                .onDelete('CASCADE');
    });
};

exports.down = function(knex) {
    return knex.schema.alterTable('notes', function (table) {
        table.dropForeign('user_id');
        table.foreign('user_id')
                .references('id')
                .inTable('users')
                .onDelete('NO ACTION');
    })
};