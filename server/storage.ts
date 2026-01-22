import { type InsertMessage, type Message } from "@shared/schema";

export interface IStorage {
  createMessage(message: InsertMessage): Promise<Message>;
}

export class InMemoryStorage implements IStorage {
  private messages: Message[] = [];
  private nextId = 1;

  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const message: Message = {
      id: this.nextId++,
      ...insertMessage,
      createdAt: new Date(),
    };
    this.messages.push(message);
    console.log("Message stored in memory:", message);
    return message;
  }
}

export const storage = new InMemoryStorage();
