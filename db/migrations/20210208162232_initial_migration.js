exports.up = function (knex) {
  return knex.schema.createTable("colors", (table) => {
    table.increments().index();
    table.string("name").notNullable();
    table.integer("r").notNullable();
    table.integer("g").notNullable();
    table.integer("b").notNullable();
    table.string("hex");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("colors");
};
