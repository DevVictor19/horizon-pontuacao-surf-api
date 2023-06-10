import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateNotasTable1686401861334 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'notas',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'onda_id',
            type: 'uuid',
          },
          {
            name: 'notaParcial1',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'notaParcial2',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'notaParcial3',
            type: 'integer',
            isNullable: false,
          },
        ],
        foreignKeys: [
          {
            name: 'fk_onda_id',
            columnNames: ['onda_id'],
            referencedTableName: 'ondas',
            referencedColumnNames: ['id'],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('notas');
  }
}
