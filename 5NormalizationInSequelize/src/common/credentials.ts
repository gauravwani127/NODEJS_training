import * as dotenv from 'dotenv';

dotenv.config();

const credentials = {
    postgres:{
        USERNAME: process.env.USER || '',
        HOST: process.env.HOST_NAME || '',
        DATABASE: process.env.DATABASE || '',
        PASSWORD: process.env.PASSWORD || '',
        DBPORT: Number(process.env.PORTNAME) || 5432    
    }
}

export default credentials;
