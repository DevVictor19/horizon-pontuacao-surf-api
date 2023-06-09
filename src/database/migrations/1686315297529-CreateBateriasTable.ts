import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateBateriasTable1686315297529 implements MigrationInterface {
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
            name: 'surfista_1_id',
            type: 'integer',
          },
          {
            name: 'surfista_2_id',
            type: 'integer',
          },
        ],
        foreignKeys: [
          {
            name: 'fk_surfista_1_id',
            columnNames: ['surfista_1_id'],
            referencedTableName: 'surfistas',
            referencedColumnNames: ['numero'],
          },
          {
            name: 'fk_surfista_2_id',
            columnNames: ['surfista_2_id'],
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
