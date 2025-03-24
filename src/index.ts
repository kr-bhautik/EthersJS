import { ethers } from "ethers";
import dotenv from 'dotenv'
import TEST_ABI from './test-abi.json';
dotenv.config();

const acc2 = '0xBBE60f2076BfcCd5DC66E94495290A2042De2186'
const contractAddress = '0x2c99FB8ceCEa87f36F684E0F897f3589F0336C85';

const provider = new ethers.JsonRpcProvider(process.env.INFURA_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY || "", provider);


async function transaction_test() {

    provider.getBalance(wallet.address).then(console.log);
    console.log(wallet)
    
    const tx = await wallet.sendTransaction({
        to: acc2,
        value: 1e10
    })
    const receipt = await tx.wait();
    console.log(receipt);
}

async function contract_test() {
    
    const contract = new ethers.Contract(contractAddress, TEST_ABI, wallet);

    const tx = await contract.transfer(acc2, 1e8);
    console.log(tx);
}

// transaction_test();
contract_test();
