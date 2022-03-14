import { PrimaryGeneratedColumn, Column, Index, Entity } from "typeorm"

@Entity()
@Index(['name', 'type'])
export class Event {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    type: string

    @Column()
    name: string

    @Column('json')
    payload: Record<string, any>
}
