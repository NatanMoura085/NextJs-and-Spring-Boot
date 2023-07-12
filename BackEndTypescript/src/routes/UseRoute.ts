import  express  from "express";
import UseControllers from "../controllers/Usecontrollers";

const UseRoute = express.Router()

UseRoute


.get('/users',UseControllers.getUsers)
.post('/users',UseControllers.postUser)

export default UseRoute