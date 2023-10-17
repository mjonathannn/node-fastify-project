import { DatabaseMemory } from "../database-memory.js"

const Routes = async (fastify, options) => {
  const database = new DatabaseMemory()

  fastify.get("/listClients", async (request, reply) => {
    return reply.send(database.list())
  })

  fastify.post("/addClient", async (request, reply) => {
    database.create(request.body)

    return reply.status(201).send()
  })
}

export default Routes
