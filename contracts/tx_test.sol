pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TxTest is ERC20 {
    constructor(uint256 initialSupply) public ERC20("TxTest", "TST") {
        _mint(msg.sender, initialSupply);
    }

    receive() external payable {}

    fallback() external payable {}
}
