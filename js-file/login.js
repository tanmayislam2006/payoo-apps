document.getElementById("log-in-btn")
    .addEventListener(
        'click',
        function (event) {
            event.preventDefault();
            const pin = document.getElementById('pin').value;
            const convertPin = parseInt(pin);
            const accountNumber = document.getElementById("account-number").value;
            if (accountNumber.length == 11) {
                if (convertPin == 4680) {
                    window.location.href = "./page-one.html"
                }
                else {
                    alert("wrong pin")
                }
            }
            else {
                alert("type a vaalid mobile number")
            }
        }
    )