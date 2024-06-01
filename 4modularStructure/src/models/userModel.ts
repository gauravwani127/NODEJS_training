import { DataTypes, Model } from 'sequelize';
import sequelize from '../postgresDB/pgConfig';
import { v4 as uuidv4 } from 'uuid'; //1, 2, 3, 4

interface UserAttributes {
  id?: string;
  name: string;
  email: string;
}
 //Signature/Contract ---


 //


class User extends Model<UserAttributes> implements UserAttributes {
  public id!: string;  //NullValue Handling   , (IgnoreCases --> u_id , )
  public name!: string;
  public email!: string;
}

User.init( //initiate
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'users',  //plural
     timestamps: false, // UPDATEDAT CREATEDAT
    //underscored: true    // Camel Cases   sunilVathar   ()  , Snake cases     sunil_vatar   //Consistency -->  //Cons --- migration emailId ---> email_id  ---> schedule --
  }
);

export { User };


// Authenticate 
// Models

