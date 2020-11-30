const Web3 = require('web3');
const fs = require('fs');

const networkConfig = JSON.parse(fs.readFileSync(`${__dirname}/../.env.json`, 'utf8'));

const web3 = new Web3(networkConfig.ropsten.infuraEndpoint);


const abi = JSON.parse(fs.readFileSync(`${__dirname}/../build/contracts/TxTest.json`)).abi;
const contractAddress = '0xc484FbA696b3B35FFC46756Fba415D55E31b9F2c';
const account = '0xd6d9ad342dc00d9E18c2edD56CB1807dcE413953';


const contract = new web3.eth.Contract(abi, contractAddress);
web3.eth.accounts.wallet.add(networkConfig.ropsten.privateKey);



/*
contract.methods.etherTransferToMyself(1).send({
    from: account,
    gas: String(1000000000),
})
    .then((res) => {
        console.log(res);
    });
*/

