import { Entity, Column, Index } from 'typeorm';
import { Base } from './Base.entity';

@Entity('users')
export class User extends Base {
    @Column({ nullable: true })
    firstName?: string;

    @Column({ nullable: true })
    lastName?: string;

    @Column({ nullable: true })
    username!: string;

    @Column()
    @Index({ unique: true })
    email!: string;

    @Column({ select: false })
    password!: string;
}