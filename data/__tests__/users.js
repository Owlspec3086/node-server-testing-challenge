const supertest = require("supertest")
const server = require(../server)
const bd = require("../data/config")

describe("user integration test", () => {
    //it is the same as test but in a sentence format for developers
    it("gets a list of users", async () => {
        const res = await supertest(server).get("/users")
        expect(res.statusCode).toBe(200)
        expect(res.type).toBe("application/json")
        expect(res.body.length).toBe(4)
        expect(res.body[0].id).toBe(1)
        expect(res.body[0].name).toBe("kali")

    })
    
    //add a new test
    it("gets a user by the id", async () => {
        const res = await supertest(server).get("/users/2")
        expect(res.statusCode).toBe(200)
        expect(res.type).toBe("application/json")
        expect(res.body.id).toBe(2)
        expect(res.body.name).toBe("prince_q")
    })
    
    // failed not found hobbit test
    it("returns a 404 if users is not found", async () => {
        const res = await supertest(server).get("/users/24")
        expect(res.statusCode).toBe(404)
        expect(res.type).toBe("application/json")
        expect(res.body.message).toBe("user not found")

    })

    //post endpoint it crates a hobbit this is a failing test I will need to go
    //into hobbits-router.js and create a new enpoint
    
    it("creates a user", async () => {
        const res = await supertest(server)
        .post("/hobbits")
        .send({ name: "qadir" })
        expect(res.statusCode).toBe(201)
        expect(res.type).toBe("application/json")
        expect(res.body.name).toBe("qadir")
    })
})