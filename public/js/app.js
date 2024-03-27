document.addEventListener("DOMContentLoaded", async function() {
    if (typeof window.ethereum !== 'undefined') {
        window.web3 = new Web3(window.ethereum);
        try {
            await window.ethereum.enable();
            console.log("Connected to MetaMask");
            document.getElementById('metamaskStatus').innerText = "Connected to MetaMask";
            // Fetch and display account information
            const accounts = await window.web3.eth.getAccounts();
            if (accounts.length > 0) {
                const account = accounts[0];
                document.getElementById('accountName').innerText = "Account: " + account;
                const balance = await window.web3.eth.getBalance(account);
                document.getElementById('accountBalance').innerText = "Balance: " + window.web3.utils.fromWei(balance, 'ether') + " ETH";
            }
        } catch (error) {
            console.error('User denied account access');
        }
    } else {
        console.error('MetaMask not detected. Install MetaMask to use Web3 features.');
        document.getElementById('metamaskStatus').innerText = "MetaMask not detected. Install MetaMask to use Web3 features.";
    }
});
