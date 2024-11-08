import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    seq: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    nickname: string;

    @Column()
    level: string;

    @Timestamp()
    sdfs: Date;

}
