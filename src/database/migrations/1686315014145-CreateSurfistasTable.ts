import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateSurfistasTable1686315014145 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'surfistas',
        columns: [
          {
            name: 'numero',
            type: 'serial',
            isPrimary: true,
          },
          {
            name: 'nome',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'pais',
            type: 'varchar',
            isNullable: false,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('surfistas');
  }
}
