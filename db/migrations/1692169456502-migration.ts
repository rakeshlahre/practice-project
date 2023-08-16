import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1692169456502 implements MigrationInterface {
    name = 'Migration1692169456502'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("user_id" BIGSERIAL NOT NULL, "username" character varying NOT NULL DEFAULT '', "email_add" character varying NOT NULL DEFAULT '', "password" character varying NOT NULL DEFAULT '', CONSTRAINT "PK_758b8ce7c18b9d347461b30228d" PRIMARY KEY ("user_id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
