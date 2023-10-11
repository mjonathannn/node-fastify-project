import Fastify from "fastify"
import { DatabaseMemory } from "./database-memory.js"

const fastify = Fastify({
  logger: true,
})

const database = new DatabaseMemory()

fastify.get("/listClients", (request, reply) => {
  return reply.send(database.list())
})

fastify.post("/addClient", (request, reply) => {
  database.create(request.body)

  return reply.status(201).send()
})

const start = async () => {
  try {
    await fastify.listen({ port: 3333 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
