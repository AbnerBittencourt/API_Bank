import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1632507282694 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "cpf",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "account",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "password",
                        type: "varchar",
                    },
                    {
                        name: "balance",
                        type: "decimal",
                        precision: 5,
                        scale: 5,
                      },
                    {
                        name: "created_at",
                        type: "timestamp without timezone",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp without timezone",
                        default: "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
