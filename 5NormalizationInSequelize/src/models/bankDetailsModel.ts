import { DataTypes, Model } from 'sequelize';
import sequelize from '../postgresDB/pgConfig';

interface BankDetailsAttributes {
  id?: string;
  uid: string;
  accountNumber: string;
  accountName: string;
  bankAddress: string;
  sortCode: string;
}

class BankDetails extends Model<BankDetailsAttributes> implements BankDetailsAttributes {
  public id!: string;
  public uid!: string;
  public accountNumber!: string;
  public accountName!: string;
  public bankAddress!: string;
  public sortCode!: string;
}

BankDetails.init(
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
    accountNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    accountName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bankAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sortCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'bank_details',
    timestamps: true
    
  }
);

export { BankDetails };
