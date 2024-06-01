import express from 'express';

import { addUser, getUser } from '../controller/userController';

// import {} from '../controller/userController ';


//


const router = express.Router();


router.post('/', async(req, res)=>addUser(req, res));

router.get('/', async(req, res)=>getUser(req,res));


// router.post('/', async(req, res)=>{});


export default router;
