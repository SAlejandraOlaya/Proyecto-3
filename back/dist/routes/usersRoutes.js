"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersControllers_1 = require("../controllers/usersControllers");
const router = (0, express_1.Router)();
router.get("/", usersControllers_1.getUsersController);
router.get("/:id", usersControllers_1.getUserId);
router.post("/register", usersControllers_1.newUser);
router.post("/login", usersControllers_1.loginUser);
exports.default = router;
