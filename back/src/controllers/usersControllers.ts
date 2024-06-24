import { Request, Response } from "express";
import { getAllUsersService, getUserIdService, createUserService, userByCredentialIdService, } from "../services/userServices";
import Iuser from "../interfaces/IUser";
import { IUserDto } from "../dto/IUserDto";
import { User } from "../entities/userEntity";
import { validateCredentials } from "../services/credentialsServices";
import { AppDataSource } from "../config/data-source";


export const getUsers = async (req: Request, res: Response) => {
    try {
        const users: User[] = await getAllUsersService();
        res.status(200).json(users);
    } catch (error: any) {
        res.status(500).json({
            error: 'Error interno del servidor'
        });
    }
};

export const getUserId = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user = await getUserIdService(Number(id));
        res.status(200).json(user)
    } catch (error: any) {
        console.log({ error })
        res.status(400).json({
            error: "error al encontrar usuario"
        })
    }
};


export const newUser = async (req: Request, res: Response) => {
    try {
        const { name, email, birthday, nDni, username, password }: IUserDto = req.body
         await createUserService({
            name, email, birthday, nDni, password, username
        });
        res.status(201).send("el usuario fue creado");
    } catch
    (error: any) {
        console.log(error)
        res.status(400).json({
            error: "error al intentar crear usuario"
        });
    }
};


export const loginUser = async(req: Request, res: Response) => {
    try {
        const {username,password}= req.body;
        const credential = await validateCredentials({username,password})
        const user = await userByCredentialIdService (credential.id)
        res.status(200).json({login:true, user})
    } catch (Error:any) {
        res.status(400).send("datos incorrectos")
    }
    
}



