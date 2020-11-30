# 이더 전송과 토큰 전송에 대해 Ethereum Client에서 어떻게 핸들링하는 지를 살펴보기 위해 테스트로 만든 컨트랙트

- openZeppelin 사용해서 ERC20 규격 구현
- truffle 이용해 컴파일 및 배포

```
├─contracts  # All of my contracts are located
├─build      # compile 된 파일들 들어온다
├─migrations # 배포할 컨트랙트 지정 등

```

## 배포
```
$ truffle compile  # 컨트랙트 컴파일

$ truffle migrate #  컨트랙트 배포 
$ truffle migrate --network ropsten  # ropstrn 테스트넷에 배포
```

## 네트워크 설정 파일
```json
파일명 : ./.env.json
커맨드 : 

{
    "ropsten": {
        "mnemonic": "사용할 니모닉",
        "privateKey": "Account 개인키",
        "infuraEndpoint": "사용할 인퓨라 엔드포인트"
    }
}
```



- 참조 
> https://docs.openzeppelin.com/contracts/3.x/erc20   
> https://www.trufflesuite.com/docs/truffle/getting-started/interacting-with-your-contracts
