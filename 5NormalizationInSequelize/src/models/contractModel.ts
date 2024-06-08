import { DataTypes, Model } from 'sequelize';
import sequelize from '../postgresDB/pgConfig';
import { Account } from './accountModel';

interface ContractAttributes {
  id?: string;
  uid: string;
  mpan: string;
  startDate: Date;
  endDate: Date;
  accountUId: string;
  active: boolean;
  archived: boolean;
  paymentDate: Date;
  isPaymentInitiated: boolean;
}

class Contract extends Model<ContractAttributes> implements ContractAttributes {
  public id!: string;
  public uid!: string;
  public mpan!: string;
  public startDate!: Date;
  public endDate!: Date;
  public accountUId!: string;
  public active!: boolean;
  public archived!: boolean;
  public paymentDate!: Date;
  public isPaymentInitiated!: boolean;
}

Contract.init(
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
    mpan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    accountUId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false,
    },
    archived: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    paymentDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    isPaymentInitiated: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'contracts',
    timestamps: true,
    
  }
);

export { Contract };
