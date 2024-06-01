//import pool from './pgConfig';
import {User} from '../models/userModel';


//CRUD ---> Create //  --> Redirect ---> Fields/attributes  (Save)

//Dashbaord ---> GetAll [{}, {}, {}, {}]



async function createUser(user: User): Promise<any> {
    try {
        // const query = 'INSERT INTO users (id, name, email) VALUES ($1, $2, $3)';
        // let result = await pool.query(query, [id,name, email])

        const newUser =await  User.create(user);
        if(newUser){
            return newUser; 
        }
       
}catch(err: any){
    throw err 
}

}

// Read
async function getUsers(): Promise<any[]> {
    // const query = 'SELECT * FROM users';
    // const result = await pool.query(query);
    // return result.rows;
    try{
      const users = await User.findAll();
    return users;

    }
    catch(err: any){
    throw err 
}
    
}


async function updateUser(user:User): Promise<any> {
    // const query = 'UPDATE users SET name = $2, email = $3 WHERE id = $1';
    // await pool.query(query, [id, name, email]);

     try {
    const userEntity = await User.findByPk(user.id);
    if (!userEntity) {
      return "User not found !"
    }
    await userEntity.update(user);

    
     return "User updated successfully";
  } catch (err:any) {
    return `Error updating user due to ${err.message}`;
  }
}






async function deleteUser(id: number): Promise<any> {
    // const query = 'DELETE FROM users WHERE id = $1';
    // await pool.query(query, [id]);
     try {
    const userEntity = await User.findByPk(id);
    if (!userEntity) {
      return "User not found !"
    }
    await userEntity.destroy();
     return "User updated successfully";
  } catch (err:any) {
    return `Error updating user due to ${err.message}`;
  }

}

export { createUser, getUsers, updateUser, deleteUser };

//RightWay ---> Hierarchy --> Circular Dependency 

//Request ---> Structure ---> Better 

// application.ts


//AppPassword


