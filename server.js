const express = require("express")
const cors = require("cors")
const usersRouter = require("./users/users-router")

const server = express()

server.use(cors())
server.use(express.json())

server.use("/users", usersRouter)
server.get("/", (req, res) => {
    res.json({
        message: "You are connected to the API",
    })
})

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})


module.exports = server