# 이더 전송과 토큰 전송에 대해 Ethereum Client에서 어떻게 핸들링하는 지를 살펴보기 위해 테스트로 만든 컨트랙트

- openZeppelin 사용해서 ERC20 규격 구현
- truffle 이용해 컴파일 및 배포

```
├─contracts  # All of my contracts are located
├─build      # compile 된 파일들 들어온다
├─migrations # 배포할 컨트랙트 지정 등
├─test       # 컨트랙트 실제 전송 테스트 위함
```

## 네트워크 설정 파일
```json
파일명 : ./.env.json

{
    "ropsten": {
        "mnemonic": "사용할 니모닉",
        "privateKey": "Account 개인키",
        "account": "privakeKey에 해당하는 주소",
        "infuraEndpoint": "사용할 인퓨라 엔드포인트"
    }
}
```

## 컨트랙트 배포 (원래 컨트랙트 사용하려면 사용 X)
```
$ truffle compile  # 컨트랙트 컴파일

$ truffle migrate #  컨트랙트 배포 
$ truffle migrate --network ropsten  # ropstrn 테스트넷에 배포
```

## 순서
1. .env.json 파일 작성
2. tx_test.js에서 원하는 함수 주석 해제 후 실행 (컨트랙트 재생성할 시 tx_test의 contractAddress 부분 변경 요망)




- 참조 
> https://docs.openzeppelin.com/contracts/3.x/erc20   
> https://www.trufflesuite.com/docs/truffle/getting-started/interacting-with-your-contracts
