import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'user_id',
  })
  id: number;

  @Column({
    nullable: false,
    default: '',
  })
  username: string;

  @Column({
    name: 'email_adds',
    nullable: false,
    default: '',
  })
  emails: string;

  @Column({
    nullable: false,
    default: '',
  })
  password: string;
}
