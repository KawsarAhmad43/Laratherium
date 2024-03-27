import './bootstrap';

import Web3 from 'web3';

document.addEventListener("DOMContentLoaded", async function() {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
        } catch (error) {
            console.error('User denied account access');
        }
    } else {
        console.error('No web3 detected. Falling back to http://localhost:8545.');
        window.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
    }

    const getBlockNumberButton = document.getElementById('getBlockNumberButton');
    const blockNumberElement = document.getElementById('blockNumber');

    getBlockNumberButton.addEventListener('click', async () => {
        try {
            const blockNumber = await window.web3.eth.getBlockNumber();
            blockNumberElement.innerText = `Latest Block Number: ${blockNumber}`;
        } catch (error) {
            console.error('Error:', error);
        }
    });
});
