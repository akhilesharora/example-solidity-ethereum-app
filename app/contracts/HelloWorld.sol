pragma solidity ^0.4.2;
// contract HelloWorld {
// 	uint public balance;

// 	function HelloWorld(){
// 		balance = 1000;
// 	} 
	
// 	function setDeposit(uint _value) returns (uint _newValue){
// 		balance += _value;
// 		return balance;
// 	}

// 	function getBalance() constant returns(uint balance){
// 		return balance;

// 	}
// }
contract HelloWorld{
	address public owner;
	mapping (address => uint) balances;

	function HelloWorld(){
		// console.log(msg);
		owner = msg.sender;
		balances[owner]= 1000;
	}

	function transfer(address _to,uint _value) returns (bool success) {
		if(balances[msg.sender] <_value){
			return false;
		}
		balances[msg.sender] -= _value;
		balances[_to] += _value;
		return true;
	}

	function getBalance(address _user) constant returns(uint _balance){
		return balances[_user];

	}

}