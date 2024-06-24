"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCredentials = exports.createCredentials = void 0;
const credentials = [];
let credentialId = 1;
//Implementar una función que reciba username y password y cree un nuevo par de credenciales con estos datos. 
//Debe retornar el ID del par de credenciales creado.
const createCredentials = (params) => __awaiter(void 0, void 0, void 0, function* () {
    const newCredential = {
        id: credentialId++,
        userName: params.userName,
        password: params.password
    };
    credentials.push(newCredential);
    return newCredential.id;
});
exports.createCredentials = createCredentials;
// Implementar una función que recibirá username y password, y deberá chequear si el nombre de usuario 
// existe entre los datos disponibles y, si es así, si el password es correcto.
// En caso de que la validación sea exitosa, deberá retornar el ID de las credenciales. 
const validateCredentials = (params) => __awaiter(void 0, void 0, void 0, function* () {
    const { userName, password } = params;
    const foundCredentials = credentials.find((credential) => credential.userName === userName && credential.password === password);
    if (foundCredentials !== undefined) {
        return foundCredentials.id;
    }
    else {
        throw Error("credenciales incorrectas");
    }
});
exports.validateCredentials = validateCredentials;
