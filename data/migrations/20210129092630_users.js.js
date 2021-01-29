exports.up = async function(knex) {
	await knex.schema.createTable("users", (table) => {
		table.increments("id")
        table.text("name").notNullable()

	})
}

exports.down = async function(knex) {
	await knex.schema.dropTableIfExists("users")
}
