import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn({ type: 'int' })
    seq: number;

    @Column({ type: 'varchar', length: 40 })
    email: string;

    @Column({ type: 'varchar', length: 40 })
    password: string;

    @Column({ type: 'varchar', length: 30 })
    nickname: string;

    @Column({ type: 'varchar', length: 10 })
    rank: string;

    @Column({ type: 'int' })
    rankPoint: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
}
