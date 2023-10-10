import { fastify } from "fastify"

const server = fastify()

server.get("/", () => {
  return "Hello World"
})

server.get("/fastify", () => {
  return "Hello Fastify"
})

server.listen({
  port: 3000,
})
