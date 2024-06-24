import { ICredentialDto } from "../dto/ICredentialDto";
import { Credential } from "../entities/credentialEntity";
import ICredential from "../interfaces/ICredential";
import { AppDataSource, credentialModel } from "../config/data-source";


const credentials: ICredential[] = [];
let credentialId: number = 1;

//Implementar una función que reciba username y password y cree un nuevo par de credenciales con estos datos. 
//Debe retornar el ID del par de credenciales creado.
export const createCredentials = async (credentialDTO: ICredentialDto): Promise<Credential> => {

    const newCredential: Credential = await credentialModel.create(credentialDTO);
    await credentialModel.save(newCredential)
    return newCredential;
};


// Implementar una función que recibirá username y password, y deberá chequear si el nombre de usuario 
// existe entre los datos disponibles y, si es así, si el password es correcto.
// En caso de que la validación sea exitosa, deberá retornar el ID de las credenciales. 

export const validateCredentials = async (validateCredentialsDto: ICredentialDto): Promise<Credential> => {
    const { username, password } = validateCredentialsDto;
    const credential: Credential | null = await credentialModel.findOneBy({ username })
    if (!credential) throw Error("el usuario no existe")
    if (password != credential?.password) throw Error("contrasena incorrecta")
     return credential

}

