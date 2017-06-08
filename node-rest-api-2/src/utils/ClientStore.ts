import { Client } from './../validation';

class Clients {
  private clients: Client[] = [];

  create(client: Client): void {
    if (!client.id) client.id = Date.now();
    this.clients.push(client);
  }

  fetchAll(): Client[] {
    return this.clients;
  }

  fetch(id: number): Client | undefined {
    return this.clients.find(c => c.id === id);
  }

  isExists(email: string, password: string): boolean {
    const client = this.clients
      .find(c => c.email === email && c.password === password);
    return !!client;
  }
}

export const ClientStore = new Clients();