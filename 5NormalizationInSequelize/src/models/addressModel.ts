import { DataTypes, Model } from 'sequelize';
import sequelize from '../postgresDB/pgConfig';

interface AddressAttributes {
  id?: string;
  uid: string;
  line1: string;
  line2: string;
  city: string;
  postalCode: string;
}

class Address extends Model<AddressAttributes> implements AddressAttributes {
  public id!: string;
  public uid!: string;
  public line1!: string;
  public line2!: string;
  public city!: string;
  public postalCode!: string;
}

Address.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    uid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      unique: true,
    },
    line1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    line2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postalCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'addresses',
    timestamps: true,
    
  }
);

export { Address };
