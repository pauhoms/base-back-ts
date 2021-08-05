import { MigrationInterface, QueryRunner } from "typeorm";

export class createUser1628170963929 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      create table user (
        id varchar(255),
        username varchar(255),
        password varchar(255),
        primary key (id)
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      drop table if exists user
    `);
  }
}
