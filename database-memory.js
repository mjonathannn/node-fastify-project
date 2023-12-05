import { randomUUID } from "crypto"

export class DatabaseMemory {
  #leads = new Map()

  list() {
    return Array.from(this.#leads.entries()).map((elem) => {
      const leadId = elem[0]
      const leadData = elem[1]

      return {
        leadId,
        leadData,
      }
    })
  }

  create(lead) {
    const leadId = randomUUID()

    this.#leads.set(leadId, lead)
  }

  update(id, lead) {
    this.#leads.set(id, lead)
  }

  delete(id) {
    this.#leads.delete(id)
  }
}
