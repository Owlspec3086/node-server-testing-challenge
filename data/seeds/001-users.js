exports.seed = async function(knex) {
	await knex("users").truncate()
	await knex("users").insert([
		{ name: "prince_q" },
		{ name: "qadir" },
		{ name: "kali" },
		{ name: "missingqueen" },
	])
}