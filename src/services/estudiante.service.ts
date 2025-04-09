import e from "cors";
import { AppDataSource } from "../config/db";
import { Estudiante } from '../entities/Estudiante.entity';

const estudianteRespository=AppDataSource.getRepository(Estudiante);

//Leer todos los estudiantes
export const srvGetEstudiantes=async()=>{
    const estudiantes=await estudianteRespository.find({
        order:{nombreEstudiante:'ASC'}
    });
    return estudiantes;
}
//Obtener un estudiante
export const srvGetEstudianteByID=async(pIdEstudiante:number)=>{
    const estudiante=await estudianteRespository.findOne({
        where:{idEstudiante: pIdEstudiante}
    });
    return estudiante;
}
//Crear una nuevo Estudiante
export const srvCreateEstudiante = async( pNombreEstudiante: string,pDireccion:string,pCorreoElectronico
    :string,pTelefono:string,  pIdCarrera: number
) => {
    const nuevoEstudiante = new Estudiante();
     nuevoEstudiante.nombreEstudiante = pNombreEstudiante;
nuevoEstudiante.direccion = pDireccion;
nuevoEstudiante.correoElectronico =pCorreoElectronico;
nuevoEstudiante.telefono=pTelefono;
nuevoEstudiante.id_carrera=pIdCarrera;

    return await estudianteRespository.save(nuevoEstudiante);

}
//Actualizar carrera

export const srvUpdateEstudiante = async(pIdEstudiante:number,pNombreEstudiante: string,pDireccion:string,pCorreoElectronico
    :string,pTelefono:string,  pIdCarrera: number
) => {

    //Buscar el estudiante
    const estudiante=await estudianteRespository.findOne({
        where:{idEstudiante: pIdEstudiante}
    });


    //Validación
    if(!estudiante) return null;
    estudiante.nombreEstudiante= pNombreEstudiante;
    estudiante.direccion = pDireccion;
    estudiante.correoElectronico =pCorreoElectronico;
    estudiante.telefono=pTelefono;
    estudiante.id_carrera=pIdCarrera;
    
    return await estudianteRespository.save(estudiante);
}

//Eliminar Estudiante
export const srvDeleteEstudiante = async (pIdEstudiante: number)=>{



   //Buscar el estudiante
   const estudiante=await estudianteRespository.findOne({
    where:{idEstudiante: pIdEstudiante}
});


//Validación
if(!estudiante) return null;

return await estudianteRespository.remove(estudiante);
}

