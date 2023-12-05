import { randomUUID } from "crypto"

export class DatabaseMemory {
  #leads = new Map([
    [
      randomUUID(),
      {
        cpf: "823.684.590-73",
        name: "João da Silva",
        maritalStatus: "solteiro(a)",
        spouseName: "",
        email: "joaodasilva@hotmail.com",
        phone: "(12) 92321-4212",
      },
    ],
    [
      randomUUID(),
      {
        cpf: "235.713.720-77",
        name: "Márcio dos Santos",
        maritalStatus: "casado(a)",
        spouseName: "Silvana Spohr",
        email: "marciosantos@gmail.com",
        phone: "(43) 29546-4129",
      },
    ],
  ])

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
