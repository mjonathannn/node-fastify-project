import { randomUUID } from "crypto"

export class DatabaseMemory {
  #clients = new Map()

  list() {
    return Array.from(this.#clients.entries()).map((elem) => {
      const clientId = elem[0]
      const clientData = elem[1]

      return {
        clientId,
        clientData,
      }
    })
  }

  create(client) {
    const clientId = randomUUID()

    this.#clients.set(clientId, client)
  }

  update(id, client) {
    this.#clients.set(id, client)
  }

  delete(id) {
    this.#clients.delete(id)
  }
}
