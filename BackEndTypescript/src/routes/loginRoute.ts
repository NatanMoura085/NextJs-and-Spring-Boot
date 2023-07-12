import express from "express";
import login from "../middlewares/AuthLoguin";
const ExportRouter = express.Router()

ExportRouter


.post('/login', login );
export default ExportRouter