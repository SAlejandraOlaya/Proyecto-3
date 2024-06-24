import { Router } from "express";
import { getUserId, getUsers, loginUser, newUser } from "../controllers/usersControllers";



const router = Router()


router.get("/", getUsers);

router.get("/:id", getUserId);

router.post("/register", newUser)


router.post("/login", loginUser);

export default router;