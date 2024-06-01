  import { DataTypes, Model } from 'sequelize';
  import  sequelize  from './pgConfig';

  interface UserAttributes {
    id?: number;
    name: string;
    email: string;
  }

  class User extends Model<UserAttributes> implements UserAttributes {
    public id!: number;
    public name!: string;
    public email!: string;

    // You can define additional methods and associations here

  }

  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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
      tableName: 'users',
      timestamps: false, 
    }
  );

  export { User };
