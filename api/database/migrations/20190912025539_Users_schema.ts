exports.up = knex => knex.schema.hasTable('users').then((exists) => {
  if (!exists) {
    return knex.schema.createTable('users', table => {
      table.increments('id').primary();
      table.string('email').unique();
      table.string('name');
      table.string('password');
      table.integer('role_id');
      table.boolean('active').defaultTo(false);
      table.boolean('mail_confirmed').defaultTo(false);
      table.datetime('deleted_at');
      table.timestamps(true, true);
      })
  };
});

exports.down = knex => knex.schema.dropTableIfExists('users');
