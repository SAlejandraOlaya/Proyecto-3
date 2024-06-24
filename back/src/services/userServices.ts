import Iuser from "../interfaces/IUser";
import { IUserDto } from "../dto/IUserDto";
import { createCredentials } from "./credentialsServices";
import { AppDataSource } from "../config/data-source";
import { userModel } from "../config/data-source";
import { User } from "../entities/userEntity";
import { Credential } from "../entities/credentialEntity";

//Implementar una función que pueda retornar el arreglo completo de usuarios.

const users: Iuser[] = [];
let userId: number = 1;

export const getAllUsersService = async (): Promise<User[]> => {
    const allUsers: User [] = await userModel.find(); //  llamada a la base de datos 
        return allUsers;
    }



//Implementar una función que pueda retornar un elemento del arreglo que haya sido identificado por id.
export const getUserIdService = async (id: number): Promise< User | null> => {
    const findUserById: User | null = await userModel.findOne({ where: {id}, relations:['appointments'] })
    if (!findUserById) throw Error("No se encontro ningun usuario con ese ID")
    
    return findUserById;
};




//Implementar una función que pueda crear un nuevo usuario dentro del arreglo PERO ten en cuenta que al momento de crear el usuario, 
//debe crear su correspondiente par de credenciales llamando a la función correspondiente del servicio de credenciales. 
//Al recibir de esta función el id de las credenciales, debe guardar el dato en la propiedad credentialsId.

export const createUserService = async (createData: IUserDto): Promise <void> => {
   const newUser: User = await userModel.create(createData);
   await userModel.save(newUser)


const newCredential: Credential = await createCredentials({
    username: createData.username,
    password: createData.password
});
   newUser.credential = newCredential;
   userModel.save(newUser);
  
}


export const userByCredentialIdService = async (credentialId: number): Promise <User | null> => { 
   const user: User|null = await userModel.findOneBy({credential: {id:credentialId} })
   return user;
}