import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateOndasTable1686401811113 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'ondas',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'bateria_id',
            type: 'uuid',
          },
          {
            name: 'surfista_numero',
            type: 'integer',
          },
        ],
        foreignKeys: [
          {
            name: 'fk_bateria_id',
            columnNames: ['bateria_id'],
            referencedTableName: 'baterias',
            referencedColumnNames: ['id'],
          },
          {
            name: 'fk_surfista_numero',
            columnNames: ['surfista_numero'],
            referencedTableName: 'surfistas',
            referencedColumnNames: ['numero'],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('ondas');
  }
}
