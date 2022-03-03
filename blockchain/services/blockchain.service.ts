import { Injectable } from "@nestjs/common";
@Injectable()

export class BlockchainService{
  constructor(){}
  public an(){
    const account = "0x83C2476595e4AdCF6bce13a36641c3404CA0D16b";
    const address = "0xe257c5b1342F79a8EF3ca6e3cacc7f0B1269e3CD";
    const pass = "123123aa";
    const Web3 = require('web3');
    const web3 = new Web3('http://127.0.0.1:8545');
    const abi = [
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "name": "user",
        "outputs": [
          {
            "internalType": "string",
            "name": "phone1",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "hoten1",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "_phone",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_hoten",
            "type": "string"
          }
        ],
        "name": "add",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "_phone",
            "type": "string"
          }
        ],
        "name": "get",
        "outputs": [
          {
            "internalType": "string",
            "name": "phone",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "hoten",
            "type": "string"
          },
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "_phone",
            "type": "string"
          }
        ],
        "name": "userExists",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      }
    ]
    const userContract = new web3.eth.Contract(abi,address); module.exports={
        addUser,
        getUser,
        checkUserExits,
    };
    async function addUser(phone_number,user_name){
      await web3.eth.personal.unlockAccount(account,pass,9999)
      return userContract.methods
      .add(phone_number,user_name)
      .send({from: account});
    }
    async function getUser(phone_number){
      await web3.eth.personal.unlockAccount(account,pass,9999)
      return userContract.methods
      .get(phone_number)
      .call();
    }
    async function checkUserExits(phone_number){
      await web3.eth.personal.unlockAccount(account,pass,9999)
      return userContract.methods
      .userExists(phone_number)
      .call();
    }
    // userContract.methods
    // .add('4703221','tksxoi')
    // .send({from: account}).then(console.log);

    // userContract.methods
    // .userExists('4703221')
    // .call().then(console.log);
  }
}
