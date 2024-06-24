import { Router } from "express";
import userRoutes from "./usersRoutes";
import appointmentsRoute from "./appointmentsRoutes"

const router: Router = Router();

router.use("/users",userRoutes)
router.use("/appointments",appointmentsRoute)


export default router;