import express from 'express';
import {addAccount, getAccount, updateAccount, removeAccount, addContract, getContract, createMandateFlowForAllContracts} from '../controller/merchantController';



const router = express.Router();

router.post('/', async (req, res) => addAccount(req,res) );

router.get('/', async (req, res) => getAccount(req,res));

router.put('/', async (req, res) => updateAccount(req,res));

router.delete('/:id', async (req, res) => removeAccount(req,res));

router.post('/contract', async (req, res) => addContract(req,res) );

router.get('/contract', async (req, res) => getContract(req,res));

router.post('/mandate', async (req, res) => createMandateFlowForAllContracts(req,res));



export default router;
