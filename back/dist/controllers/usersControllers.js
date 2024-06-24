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
exports.loginUser = exports.newUser = exports.getUserId = exports.getUsersController = void 0;
const userServices_1 = require("../services/userServices");
const getUsersController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, userServices_1.getAllUsers)();
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});
exports.getUsersController = getUsersController;
const getUserId = (req, res) => {
    res.send("Obtuvo el detalle de un usuario");
};
exports.getUserId = getUserId;
const newUser = (req, res) => {
    res.send("Se registro un nuevo usuario");
};
exports.newUser = newUser;
const loginUser = (req, res) => {
    res.send("Login del usuario a la aplicacion");
};
exports.loginUser = loginUser;
