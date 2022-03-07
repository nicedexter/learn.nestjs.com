import {MigrationInterface, QueryRunner} from "typeorm";

export class SchemaSync1646662869504 implements MigrationInterface {
    name = 'SchemaSync1646662869504'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "coffee" ADD "recommendations" integer NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "coffee" DROP COLUMN "recommendations"`);
    }

}
