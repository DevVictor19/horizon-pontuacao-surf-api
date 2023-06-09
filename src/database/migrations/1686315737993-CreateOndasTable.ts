import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateOndasTable1686315737993 implements MigrationInterface {
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
            name: 'surfista_id',
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
            name: 'fk_surfista_id',
            columnNames: ['surfista_id'],
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
