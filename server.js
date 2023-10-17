import Fastify from "fastify"

import Routes from "./routes/routes.js"

const fastify = Fastify({
  logger: true,
})

fastify.register(Routes)

fastify.listen({ port: 3333, host: "127.0.0.1" }, (err, address) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }

  fastify.log.info(`Server listening at ${address}`)
})
