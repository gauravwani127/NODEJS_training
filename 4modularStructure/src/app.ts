import express, {Request , Response} from 'express';
import { createUser, getUsers, updateUser, deleteUser } from './service/userService';


import userRoutes from './routes/userRoutes'

const app = express();
const port = 8000;


app.use(express.json());


app.get('/path',(req: Request,res: Response)=>{ 
    res.json({message: "You are on /path"})

})

app.use('/api/users', userRoutes);

// app.post('/users', async (req, res) => {
//     // const { id,name, email } = req.body;
//      await createUser(req.body); // Create one api for calling 
//     res.send("User created successfully")
  
// });





//DATABASE 

// app.put('/users', async (req, res) => {
//     // const id = parseInt(req.params.id);
//     // const { name, email } = req.body;
//     await updateUser(req.body);
//     res.send('User updated successfully');
// });


// app.delete('/users/:id', async (req, res) => {
//     const id = parseInt(req.params.id);
//     await deleteUser(id);
//     res.status(200).send('User deleted successfully');
// });


// app.get('/users', async (req, res) => {
//     const users = await getUsers();
//     res.json(users);
// });

//Quadrupled --> Database Engineer --> 

//post --> Payload  express.json

app.listen(port, ()=> {
    console.log(` Hii we are comfortable in NodeJS `);

})


//Other functionalities


//Postgres ---> Pool 

//ORM ---> Sequelize , TypeOrm ...Pri


//Permission-->





//Paylaod -- > JSON 
//Storing --> Cell and Tables 