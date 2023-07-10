import express from "express";
import login from "../middlewares/AuthLoguin";
const Router = express.Router()

Router.


post('/login',login)

export default Router