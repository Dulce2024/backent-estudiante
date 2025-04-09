import {Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity ({  name: 'estudiante'})

export class Estudiante {

    //Definir todos los campos
    @PrimaryGeneratedColumn({name: 'id_estudiante'})
    idEstudiante: number;

    @Column ({name: 'nombre_estudiante', nullable: false})
    nombreEstudiante: String;

    @Column ({name: 'direccion', nullable: false})
    direccion: String;

    @Column ({name: 'correo_electronico', nullable: true})
    correoElectronico: String;

    @Column ({name: 'telefono', nullable: false})
    telefono: String;

    @Column ({name: 'id_carrera', nullable: false})
    id_carrera: number;


}




