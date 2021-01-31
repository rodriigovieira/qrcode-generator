import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Seed {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    seed: string;

    @Column()
    expires_at: Date;

}