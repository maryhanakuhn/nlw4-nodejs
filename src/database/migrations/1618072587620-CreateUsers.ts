import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1618072587620 implements MigrationInterface {

  //criar uma migration
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          { 
            name: "name",
            type: "varchar" },
          {
            name: "email",
            type: "varchar",
          },
          {
            name: "create_at",
            type: "timestamp",
            default: "now()"
          },
        ],
      })
    );
  }

  //remover a migration
  public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("users")
  }
}
