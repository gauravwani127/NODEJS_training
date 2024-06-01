// App.ts --> Routers.ts ---> Controllers ---> Service ---> pgService.ts ---> IPgService.


import {createUser, getUsers, } from '../service/userService'


import { Request, Response } from "express";

// Service .ts


export const addUser = async(req:Request, res: Response)=>{
    const users = await createUser(req.body);
    res.json(users);
}



export const getUser = async(req:Request, res: Response)=>{

    const users = await getUsers();
    res.json(users);
    
    
}


// app.get('/users', async (req, res) => {
//     
// });

//Requirement 


//Api --1. Get 2. Post


//Controller 

//Services --Add Get


//Controller 


//Router --> Controller


//App.use (router)



