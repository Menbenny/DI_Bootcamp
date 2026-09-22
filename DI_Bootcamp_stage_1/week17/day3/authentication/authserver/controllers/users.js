import { _regitser, _login } from "../models/users.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
    try {
        const { email, password } =req.body;
        const row = await _login(email.toLowerCase());

        if(row.length === 0) 
            return res.status(404).json({msg: "email not found "})

        const match = await bcrypt.compare(password + "", row[0].password)
        if(!match)
            return res.status(404).json({msg: "wrong password"})

        const userid = row[0].id
        const useremail = row[0].email

        const secret = process.env.ACCESS_SECRET_TOKEN 

        const accessToken = jwt.sign({userid, useremail}, secret, {
            expiresIn: "60s"
        });

        res.cookie("token", accessToken, {
            httpOnly: true,
            maxAge: 60 * 1000
        });

        res.json({token: accessToken})

    } catch(e) {
        console.log(e);
        res.status(404).json({msg: "something is wrong!"})
    }
}