import { DatabaseMemory } from "../database-memory.js"

const Routes = async (fastify, options) => {
  const database = new DatabaseMemory()

  fastify.get("/readLeads", async (request, reply) => {
    return reply.send(database.list())
  })

  fastify.post("/createLead", async (request, reply) => {
    database.create(request.body)

    return reply.status(201).send()
  })

  fastify.delete("/deleteLead/:id", async (request, reply) => {
    const leadId = request.params.id

    database.delete(leadId)

    return reply.status(200).send()
  })

  fastify.put("/updateLead/:id", async (request, reply) => {
    const leadId = request.params.id

    database.update(leadId, request.body)

    return reply.status(200).send()
  })
}

export default Routes
