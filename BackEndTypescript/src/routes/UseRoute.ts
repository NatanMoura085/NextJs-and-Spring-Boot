import  express  from "express";
import UseControllers from "../controllers/Usecontrollers";

const Router = express.Router()

Router


.get('/users',UseControllers.getUsers)
.post('/users',UseControllers.postUser)

export default Router