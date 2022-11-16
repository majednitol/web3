let Web3 = require('web3');
let web3 = new Web3(new Web3.providers.HttpProvider('HTTP://127.0.0.1:7545'))
web3.eth.getBalance("0x1e13Aa2a7dF0A9886B6005E54D2DF101473a1EFC").then((result) => {
    console.log(web3.utils.fromWei(result,"ether"));
})

web3.eth.sendTransaction({from:"0x1e13Aa2a7dF0A9886B6005E54D2DF101473a1EFC", to:"0x288f34649694AE5E8e8bAcd1317259d0c441d8c4",value: web3.utils.toWei("5","ether")});