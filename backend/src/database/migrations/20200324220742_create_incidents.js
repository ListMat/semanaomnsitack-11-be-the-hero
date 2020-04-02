exports.up = function(knex) {
  return knex.schema.createTable("incidents", table => {
    // id sequencial 1, 2 ,3...
    table.increments();

    // incidents da tabela
    table.string("title").notNullable();
    table.string("description").notNullable();
    table.decimal("value").notNullable();

    // relacinamento com a tabela ong
    table.string("ong_id").notNullable();

    // key gringa
    table
      .foreign("ong_id")
      .references("id")
      .inTable("ongs");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("incidents ");
};
