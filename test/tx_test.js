const Web3 = require('web3');
const fs = require('fs');

const networkConfig = JSON.parse(fs.readFileSync(`${__dirname}/../.env.json`, 'utf8'));
const web3 = new Web3(networkConfig.ropsten.infuraEndpoint);
const abi = JSON.parse(fs.readFileSync(`${__dirname}/../build/contracts/TxTest.json`)).abi;


const contractAddress = '0xEBBcC938d3BB8784c4c0b6b8Ca66b57C4bB37207'; //테스트할 컨트랙트 주소 입력
const account = networkConfig.ropsten.account; // 설정에 입력한 개인키에 해당하는 주소


web3.eth.accounts.wallet.add(networkConfig.ropsten.privateKey);

const contract = new web3.eth.Contract(abi, contractAddress, {
    from: account,
    gasPrice: String(10**11),
    gas: 1000000
});

/** erc20 전송 테스트 **/
async function erc20Test() {
    const res = await contract.methods.transfer(account, 10).send();

    return res;
}

/** 컨트랙트 이용해 자신한테 이더 전송 테스트 **/
async function etherTransferToMyself(value) {
    const res = await contract.methods.etherTransferToMyself(value).send({
        value: String(value * 10**18),
    });

    return res;
}

/** 컨트랙트 이용해 이더 전송 테스트 **/
async function etherTransfer(to, value) {
    const res = await contract.methods.etherTransfer(to, value).send({
        value: String(value * 10**18),
    });
    return res;
}




// erc20Test().then(console.log);
// etherTransfer('0x4E7C6D3F8d44990ecc62d951aFdB103118ca274c',1).then(console.log);
etherTransferToMyself(1).then(console.log);


