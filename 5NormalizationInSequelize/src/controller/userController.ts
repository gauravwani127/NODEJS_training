import { Request, Response } from "express";  
import {createUser, getUsers} from '../services/userService'  

export const addUser =async(req:Request,res: Response)=>{
const { id,name, email } = req.body;
await createUser(req.body); // Create one api for calling 
res.send("User created successfully")
}


export const getUser = async(req:Request,res: Response)=>{
     const users = await getUsers();
   res.json(users);
}


  