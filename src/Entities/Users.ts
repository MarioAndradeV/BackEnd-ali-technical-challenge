import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class users_test_mario_andrade_velazquez extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  Nombre!: string;

  @Column()
  Segundo_Nombre!: string;

  @Column()
  Apellido_Paterno!: string;

  @Column()
  Apellido_Materno!: string;

  @Column()
  Fecha_Nacimiento!: string;

  @Column()
  Email!: string

  @Column()
  Telefono!: string
}