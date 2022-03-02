import { Injectable } from "@nestjs/common";
const Web3 = require('web3');
const fs = require('fs');
const web3 = new Web3(`http://127.0.0.1:8545`);
const account = "0x83C2476595e4AdCF6bce13a36641c3404CA0D16b";
const address = "0xe257c5b1342F79a8EF3ca6e3cacc7f0B1269e3CD";
const pass = "123123aa";
const abi = JSON.parse(fs.readFileSync('./src/blockchain/contracts/User.json')).abi;
const userContract = new web3.eth.Contract(abi,address); module.exports={
    addUser,
    getUser,
    checkUserExits,
};
async function addUser(phone_number:string,hoten:string) {
    await web3.eth.personal.unlockAccount(account,pass,99999);
    return userContract.methods
    .add(phone_number,hoten)
    .send({from: account});
};
async function getUser(phone_number:string){
    return userContract.methods
    .get(phone_number)
    .call();
};
async function checkUserExits(phone_number:string){
    return userContract.methods
    .get(phone_number)
    .call();
};

@Injectable()

export class BlockchainService{
}