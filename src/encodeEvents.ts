import { ethers } from "ethers";
import dotenv from 'dotenv'
import ABI from './tx-abi.json';
dotenv.config();

async function test() {
    
    const provider = new ethers.JsonRpcProvider(process.env.INFURA_URL);
    const txRcpt = await provider.getTransactionReceipt('0x5d1a1a1f76414d7dd593c70997301e5cdfbc1d120422810db46e4421499e0316');
    // console.log(txRcpt);
    // console.log(txRcpt?.logs);

    const contractInterface = new ethers.Interface(ABI);
    const logs = txRcpt?.logs || [];
    logs?.forEach( (log) => {
        // console.log(log);
        const decLog = contractInterface.parseLog(log);
        console.log(decLog);
    })
}

test();

