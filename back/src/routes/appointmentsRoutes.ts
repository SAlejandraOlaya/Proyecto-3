import { Router } from "express";
import { getAppointments, getAppointmentId, createAppointment,cancelAppointment} from "../controllers/appointmentsControllers";


const router = Router () 

router.get("/", getAppointments)

router.get("/:id", getAppointmentId)

router.post("/schedule", createAppointment)

router.put("/cancel/:id", cancelAppointment)

export default router;