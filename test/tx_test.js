const Web3 = require('web3');
const fs = require('fs');

const networkConfig = JSON.parse(fs.readFileSync(`${__dirname}/../.env.json`, 'utf8'));
const web3 = new Web3(networkConfig.ropsten.infuraEndpoint);


const abi = JSON.parse(fs.readFileSync(`${__dirname}/../build/contracts/TxTest.json`)).abi;
const contractAddress = '0xc484FbA696b3B35FFC46756Fba415D55E31b9F2c'; //테스트한 컨트랙트 입력
const account = '0xd6d9ad342dc00d9E18c2edD56CB1807dcE413953'; // 설정에 입력한 개인키에 해당하는 주소


web3.eth.accounts.wallet.add(networkConfig.ropsten.privateKey);

const contract = new web3.eth.Contract(abi, contractAddress, {
    from: account,
    gasPrice: String(10**11),
    gas: 1000000
});

async function erc20Test() {
    const res = await contract.methods.transfer(account, 10).send();

    return res;
}

async function etherTransferThroughInternalTx(value) {
    const res = await contract.methods.etherTransferToMyself(value).send({
        value: String(value * 10**18),
    });

    return res;
}

//erc20Test().then(console.log);

etherTransferThroughInternalTx(1).then(console.log);


