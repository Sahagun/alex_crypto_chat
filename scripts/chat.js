// const { Web3 } = require("./web3.min");


const ethereumButton = document.querySelector('.enableEthereumButton');
const showAccount = document.getElementbyId('showAccount');

// ethereumButton.addEventListener('click', () => {
//   getAccount();
// });

async function getAccount() {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  const account = accounts[0];
  console.log(account);

  const encrypted = web3.eth.sign("HelloWorld", account)
  const decrypted = web3.eth.sign(encrypted, account)

  console.log(encrypted);
  console.log(decrypted);

  showAccount.innerHTML = account;
}


// const web3 = new Web3();
// console.log(window.web3.eth.accounts.wallet);

// console.log('loaded');

// const ethEnabled = async () => {
//   console.log('ethEnabled');

//   if(window.ethereum){
//     console.log('started');
//     await window.ethereum.request({method: 'eth_requestAccounts'});
//     window.web3 = new Web3(window.ethereum)

//     console.log(window.web3.eth.accounts.wallet);

//     return true;
//   }
//   console.log('no eth');

//   return false
// }


