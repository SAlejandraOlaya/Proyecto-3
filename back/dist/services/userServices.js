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
exports.getUserIdService = exports.getAllUsers = void 0;
//Implementar una función que pueda retornar el arreglo completo de usuarios.
const users = [];
const getAllUsers = () => {
    return users;
};
exports.getAllUsers = getAllUsers;
//Implementar una función que pueda retornar un elemento del arreglo que haya sido identificado por id.
const getUserIdService = (params) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = params;
    const findUserById = users.find((user) => user.id === id);
    return findUserById || undefined;
});
exports.getUserIdService = getUserIdService;
//Implementar una función que pueda crear un nuevo usuario dentro del arreglo PERO ten en cuenta que al momento de crear el usuario, 
//debe crear su correspondiente par de credenciales llamando a la función correspondiente del servicio de credenciales. 
//Al recibir de esta función el id de las credenciales, debe guardar el dato en la propiedad credentialsId.
