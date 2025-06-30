import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Car {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  vin!: string;

  @ManyToOne(() => User, (user) => user.cars)
  user: User | null = null;
}
