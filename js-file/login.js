document.getElementById("log-in-btn")
    .addEventListener(
        'click',
        function (event) {
            event.preventDefault();
            const pin =getElementById("pin");
            const accountNumber = document.getElementById("account-number").value;
            if (accountNumber.length == 11) {
                if (pin == 4680) {
                    window.location.href = "./index.html"
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