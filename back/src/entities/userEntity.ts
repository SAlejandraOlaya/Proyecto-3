import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn } from "typeorm"
import { Appointment } from "./appointmentsEntity"
import { Credential } from "./credentialEntity"

@Entity({
    name: "users"
})

export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    email: string

    @Column({type: "date"})
    birthday: Date 

    @Column()
    nDni: string

    @Column({ nullable: true }) 
    credentialId: number;

    @OneToOne(() => Credential)
    @JoinColumn()
    credential: Credential

    @OneToMany(() => Appointment, appointment => appointment.user)
    appointments: Appointment[];
}