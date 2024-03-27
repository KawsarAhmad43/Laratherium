<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Laratherium | Laravel Web-3 Integration</title>
    <!-- Bootstrap CSS -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <!-- Custom CSS -->
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
</head>

<body>
    <div class="container mt-5">
        <div class="text-center mb-4">
            <img class="logo" src="{{ asset('img/logo.png') }}" alt="Logo">
        </div>
        <div class="glassmorphism mt-3">
            <h3 class="card-title">MetaMask Status</h3>
            <p class="card-text" id="metamaskStatus">Not connected to MetaMask</p>
        </div>

        <div class="glassmorphism mt-3">
            <h3 class="card-title">MetaMask Account Information</h3>
            <p class="card-text" id="accountName"></p>
            <p class="card-text" id="accountBalance"></p>
        </div>
    </div>

    <script src="{{ asset('js/web3.min.js') }}"></script>
    <script src="{{ asset('js/app.js') }}"></script>
</body>

</html>
