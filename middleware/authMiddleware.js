import { verify } from "jsonwebtoken";
import User from "../models/User.js"

import (verify)

export const authGuard = async (req, res, next) =>{
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ){
        try {
            const token = req.headers.authorization.split(" ")[1];
            const {id} = verify(token, process.env.JWT_SECRET);
            req.user = await

        }catch(error){
            let err = new Error("Not authorized, Token failed")
            err.statusCode = 401
            next(err)
        }
    }
}