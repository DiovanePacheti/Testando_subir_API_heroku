import {MigrationInterface, QueryRunner} from "typeorm";

export class CreatePoints1595550650354 implements MigrationInterface {
    name = 'CreatePoints1595550650354'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "points" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "image" character varying NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "whatsapp" character varying NOT NULL, "latitude" integer NOT NULL, "longitude" integer NOT NULL, "city" character varying NOT NULL, "uf" character varying(2) NOT NULL, CONSTRAINT "PK_57a558e5e1e17668324b165dadf" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "points"`);
    }

}
