import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class User {
  constructor(id: string, username: string, password: string) {
    this.id = id;
    this.username = username;
    this.password = password;
  }

  @PrimaryColumn()
  id: string;

  @Column()
  username: string;

  @Column()
  password: string;
}
