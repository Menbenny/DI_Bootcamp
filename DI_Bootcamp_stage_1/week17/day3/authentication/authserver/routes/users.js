import express from "express";
import { register, login } from "../controllers/users.js"

const urouter = express.Router();

urouter.post("/register", register)
urouter.post("/login", register)

export default urouter;