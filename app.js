require('dotenv').config() ;

const EtherReceiver = require('./contracts/EtherReceiver.json');
const Web3 = require('web3');

const infuraKey = process.env.INFURA_KEY;
const web3 = new Web3(new Web3.providers.HttpProvider( `https://ropsten.infura.io/v3/${infuraKey}`));
const etherReceiver = new web3.eth.Contract(EtherReceiver.abi, '0x35AdD5e83960AE133514f6a4c0D157E759dd6f9e');

etherReceiver.methods.greeting().call({from: '0x8863ae48646c493efF8cd54f9Ffb8Be89669E62A'})
  .then((result) => {
    console.log(result);
  }).catch((error) => {
    console.log(error.message);
  });

etherReceiver.methods.getBalance().call({from: '0x8863ae48646c493efF8cd54f9Ffb8Be89669E62A'})
  .then((result) => {
    console.log(result);
  }).catch((error) => {
    console.log(error.message);
  });
