import express, {Request , Response} from 'express';

import { createUser, getUsers, updateUser, deleteUser } from './service';

//2.-------Initiate dependency (Instance of Express -- app)
const app = express();
const port = 8000; //

app.use(express.json());

app.post('/users', async (req, res) => {
    // const { id,name, email } = req.body;
     await createUser(req.body); // Create one api for calling 
    res.send("User created successfully")
  
});

app.get('/users', async (req, res) => {
    const users = await getUsers();
    res.json(users);
});

app.put('/users', async (req, res) => {
    // const id = parseInt(req.params.id);
    // const { name, email } = req.body;
    await updateUser(req.body);
    res.send('User updated successfully');
});


app.delete('/users/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    await deleteUser(id);
    res.status(200).send('User deleted successfully');
});


app.listen(port, ()=> {
    console.log(` Hii we are comfortable in NodeJS `);

})