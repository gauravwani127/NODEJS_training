import express = require('express');
import { Application, Request, Response } from 'express';

import { createUser, getUsers, updateUser, deleteUser } from './service';


const app = express();
app.use(express.json());



app.post('/users', async (req, res) => {
    const { id,name, email } = req.body;
     await createUser(id,name, email);
    res.send("User created successfully")
  
});

// Read
app.get('/users', async (req, res) => {
    const users = await getUsers();
    res.json(users);
});

// Update
app.put('/users/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const { name, email } = req.body;
    await updateUser(id, name, email);
    res.send('User updated successfully');
});

// Delete
app.delete('/users/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    await deleteUser(id);
    res.send('User deleted successfully');
});
// Start the server
app.listen(3000, () => {
    console.log(`Server is running on port`);
});

    
