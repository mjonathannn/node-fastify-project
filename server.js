import Fastify from "fastify"
import cors from "@fastify/cors"

import Routes from "./routes/routes.js"

const fastify = Fastify({
  logger: true,
})

fastify.register(Routes)
fastify.register(cors, {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
})

fastify.listen({ port: 3333, host: "127.0.0.1" }, (err, address) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }

  fastify.log.info(`Server listening at ${address}`)
})
