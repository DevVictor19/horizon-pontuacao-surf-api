import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateBateriasTable1686401766360 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'baterias',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'surfista_1_numero',
            type: 'integer',
          },
          {
            name: 'surfista_2_numero',
            type: 'integer',
          },
        ],
        foreignKeys: [
          {
            name: 'fk_surfista_1_numero',
            columnNames: ['surfista_1_numero'],
            referencedTableName: 'surfistas',
            referencedColumnNames: ['numero'],
          },
          {
            name: 'fk_surfista_2_numero',
            columnNames: ['surfista_2_numero'],
            referencedTableName: 'surfistas',
            referencedColumnNames: ['numero'],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('baterias');
  }
}
