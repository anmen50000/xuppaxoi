import { Injectable } from "@nestjs/common";
@Injectable()

export class BlockchainService{
  constructor(){}
  abi = [
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
  Web3 = require('web3')
  web3 = new this.Web3('http://127.0.0.1:8545')
  account = "0x83C2476595e4AdCF6bce13a36641c3404CA0D16b";
  address = "0xe257c5b1342F79a8EF3ca6e3cacc7f0B1269e3CD";
  pass = "123123aa";
  userContract = new this.web3.eth.Contract(this.abi,this.address);
  async addUser(phone_number,user_name) {
      await this.web3.eth.personal.unlockAccount(this.account,this.pass,9999)
      return this.userContract.methods
      .add(phone_number,user_name)
      .send({from: this.account});
  }
  async getUser(phone_number) {
   await this.web3.eth.personal.unlockAccount(this.account,this.pass,9999)
   return this.userContract.methods
   .get(phone_number)
   .call()
}
async checkUserExtis(phone_number) {
 await this.web3.eth.personal.unlockAccount(this.account,this.pass,9999)
 return this.userContract.methods
 .userExists(phone_number)
 .call()
}
  
}
