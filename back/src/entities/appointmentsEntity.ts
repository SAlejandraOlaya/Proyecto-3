import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from "typeorm"
import { User } from "./userEntity"

@Entity({
    name: "appointments"
})

export class Appointment {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    date: string

    @Column()
    time: string

    @Column()
    description: string


    @Column("enum", { enum: ["active", "canceled"], default: "active" })
    status: "active" | "canceled"

    @ManyToOne(() => User, user => user.appointments)
    user: User
}

