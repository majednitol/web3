let Web3 = require('web3');
let web3 = new Web3(new Web3.providers.HttpProvider('HTTP://127.0.0.1:7545'))
let contract = new web3.eth.Contract([
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "newage",
				"type": "uint256"
			}
		],
		"name": "setter",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "age",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
], "0xd9145CCE52D386f254917e481eB44e9943F39138")
contract.methods.age().call().then(console.log)
contract.methods.setter(90).send({ from: "0xBB3cEa80BEC181e57a9dD0E9AF62eB2AbE0B4142" })
contract.methods.age().call().then(console.log)
