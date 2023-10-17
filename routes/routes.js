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

  fastify.delete("/removeClient/:id", async (request, reply) => {
    const clientId = request.params.id

    database.delete(clientId)

    return reply.status(200).send()
  })

  fastify.put("/updateClient/:id", async (request, reply) => {
    const clientId = request.params.id

    database.update(clientId, request.body)

    return reply.status(200).send()
  })
}

export default Routes
