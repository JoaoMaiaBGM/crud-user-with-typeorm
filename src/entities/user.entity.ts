import { Entity, Column, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity()
export class User {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column({ length: 120 })
  name: string;

  @Column({ length: 100, unique: true })
  email: string;

  @Column({ length: 120 })
  password: string;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
