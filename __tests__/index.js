const supertest = require("supertest")
const server = require("../server")


test("GET /", async () => {
    const res = await supertest(server).get("/")
    expect(res.statusCode).toBe(200)
    expect(res.type).toBe("application/json")//this is refered to the datatype
    expect(res.body.message).toBe("You are connected to the API")
})