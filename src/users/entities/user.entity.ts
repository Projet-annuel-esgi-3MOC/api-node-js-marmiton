import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { Entity } from 'typeorm/decorator/entity/Entity';

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id_users: number;
  
  @Column()
  level: string;

  @Column()
  id_league: number;

  @Column()
  id_competition: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  experience: string;
}
