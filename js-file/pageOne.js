document.getElementById("log-out")
    .addEventListener('click',
        function () {
            window.location.href = "./loging-page.html"
        }
    );
// add money
document.getElementById("add-money")
    .addEventListener('click',
        function (event) {
            event.preventDefault();
            const pin = document.getElementById('pin').value;
            const convertPin = parseInt(pin);
            const accountNumber = document.getElementById("account-number").value;
            const amount = document.getElementById("amount").value;
            const convertAmount = parseFloat(amount);
            const balance = document.getElementById("balance");
            const mainBalance = parseFloat(balance.innerText);
            if (accountNumber.length == 11) {
                if (convertPin == 4680) {
                    const sum = mainBalance + convertAmount;
                    console.log(sum);
                    balance.innerText = sum
                }
                else {
                    alert("wrong pin")
                }
            }
            else {
                alert("type a vaalid mobile number")
            }
        }
    );
// cashOut
document.getElementById("cashout-money")
    .addEventListener("click", function (event) {
        event.preventDefault();
        const pin = document.getElementById('cashout-pin').value;
        const convertPin = parseInt(pin);
        const accountNumber = document.getElementById("agent-number").value;
        const amount = document.getElementById("cashout-amount").value;
        const convertAmount = parseFloat(amount);
        const balance = document.getElementById("balance");
        const mainBalance = parseFloat(balance.innerText);
        if (accountNumber.length == 11) {
            if (convertPin == 4680) {
                const sum = mainBalance - convertAmount;
                console.log(sum);
                balance.innerText = sum
            }
            else {
                alert("wrong pin")
            }
        }
        else {
            alert("type a vaalid mobile number")
        }


    })
// send money 
document.getElementById("send-money")
    .addEventListener("click", function (event) {
        event.preventDefault();
        const pin = document.getElementById('send-pin').value;
        const convertPin = parseInt(pin);
        const accountNumber = document.getElementById("sender-number").value;
        const amount = document.getElementById("send-amount").value;
        const convertAmount = parseFloat(amount);
        const balance = document.getElementById("balance");
        const mainBalance = parseFloat(balance.innerText);
        if (accountNumber.length == 11) {
            if (convertPin == 4680) {
                const sum = mainBalance - convertAmount;
                balance.innerText = sum
            }
            else {
                alert("wrong pin")
            }
        }
        else {
            alert("type a vaalid mobile number")
        }


    })
// bonus
document.getElementById("add-bonus-money")
    .addEventListener("click", function (event) {
        event.preventDefault();
        const amount = document.getElementById("bonus-amount").value;
        const convertAmount = parseFloat(amount);
        const balance = document.getElementById("balance");
        const mainBalance = parseFloat(balance.innerText);
        const sum = mainBalance + convertAmount;
        balance.innerText = sum


    })
// pay bill
document.getElementById("pay-now")
    .addEventListener("click", function (event) {
        event.preventDefault();
        const pin = document.getElementById('pay-pin').value;
        const convertPin = parseInt(pin);
        const accountNumber = document.getElementById("biller-number").value;
        const amount = document.getElementById("pay-amount").value;
        const convertAmount = parseFloat(amount);
        const balance = document.getElementById("balance");
        const mainBalance = parseFloat(balance.innerText);
        if (accountNumber.length == 11) {
            if (convertPin == 4680) {
                const sum = mainBalance - convertAmount;
                console.log(sum);
                balance.innerText = sum
            }
            else {
                alert("wrong pin")
            }
        }
        else {
            alert("type a vaalid mobile number")
        }


    })

// icon click

document.getElementById("payBill")
    .addEventListener("click", function (event) {
        const payBill=document.getElementById("bill-pay");
        payBill.classList.remove('hidden')
        const bonusMoney = document.getElementById("bonus-money");
        bonusMoney.classList.add('hidden');
        const transferMoney = document.getElementById("sendMoney")
        transferMoney.classList.add("hidden")
        const cashOut = document.getElementById("cashout");
        cashOut.classList.add("hidden");
        const addMoney = document.getElementById("add-money-pop");
        addMoney.classList.add('hidden');
        const payment = document.getElementById('payment');
        payment.classList.add('hidden')
        const explore = document.getElementById('explore');
        explore.classList.add('hidden');
    });
document.getElementById("get-bonus")
    .addEventListener("click", function (event) {
        const bonusMoney = document.getElementById("bonus-money");
        bonusMoney.classList.remove('hidden');
        // 
        const payBill=document.getElementById("bill-pay");
        payBill.classList.add('hidden');
        const transferMoney = document.getElementById("sendMoney")
        transferMoney.classList.add("hidden")
        const cashOut = document.getElementById("cashout");
        cashOut.classList.add("hidden");
        const addMoney = document.getElementById("add-money-pop");
        addMoney.classList.add('hidden');
        const payment = document.getElementById('payment');
        payment.classList.add('hidden')
        const explore = document.getElementById('explore');
        explore.classList.add('hidden');
    });
document.getElementById("transfer-money")
    .addEventListener("click", function (event) {
        const transferMoney = document.getElementById("sendMoney")
        transferMoney.classList.remove("hidden")
        // 
        const payBill=document.getElementById("bill-pay");
        payBill.classList.add('hidden');
        const bonusMoney = document.getElementById("bonus-money");;
        bonusMoney.classList.add('hidden');
        const cashOut = document.getElementById("cashout");
        cashOut.classList.add("hidden");
        const addMoney = document.getElementById("add-money-pop");
        addMoney.classList.add('hidden');
        const payment = document.getElementById('payment');
        payment.classList.add('hidden')
        const explore = document.getElementById('explore');
        explore.classList.add('hidden');
    });
document.getElementById("cash-out-money")
    .addEventListener("click", function (event) {
        const cashOut = document.getElementById("cashout");
        cashOut.classList.remove("hidden");
        // 
        const payBill=document.getElementById("bill-pay");
        payBill.classList.add('hidden');
        const bonusMoney = document.getElementById("bonus-money");;
        bonusMoney.classList.add('hidden');
        const transferMoney = document.getElementById("sendMoney")
        transferMoney.classList.add("hidden");
        const addMoney = document.getElementById("add-money-pop");
        addMoney.classList.add('hidden');
        const payment = document.getElementById('payment');
        payment.classList.add('hidden')
        const explore = document.getElementById('explore');
        explore.classList.add('hidden');
    });
document.getElementById("money-add")
    .addEventListener("click", function (event) {
        const addMoney = document.getElementById("add-money-pop");
        addMoney.classList.remove('hidden');
        // 
        const payBill=document.getElementById("bill-pay");
        payBill.classList.add('hidden');
        const bonusMoney = document.getElementById("bonus-money");;
        bonusMoney.classList.add('hidden');
        const transferMoney = document.getElementById("sendMoney")
        transferMoney.classList.add("hidden");
        const cashOut = document.getElementById("cashout");
        cashOut.classList.add("hidden");
        const payment = document.getElementById('payment');
        payment.classList.add('hidden')
        const explore = document.getElementById('explore');
        explore.classList.add('hidden');
    });
document.getElementById("transiction")
    .addEventListener("click", function (event) {
        const payment = document.getElementById('payment');
        payment.classList.remove('hidden');
        // 
        const payBill=document.getElementById("bill-pay");
        payBill.classList.add('hidden');
        const bonusMoney = document.getElementById("bonus-money");;
        bonusMoney.classList.add('hidden');
        const transferMoney = document.getElementById("sendMoney")
        transferMoney.classList.add("hidden");
        const cashOut = document.getElementById("cashout");
        cashOut.classList.add("hidden");
        const addMoney = document.getElementById("add-money-pop");
        addMoney.classList.add('hidden');
        const explore = document.getElementById('explore');
        explore.classList.add('hidden');
    });
    document.getElementById('home')
    .addEventListener("click",function(event){
        const explore = document.getElementById('explore');
        explore.classList.remove('hidden');
        const payBill=document.getElementById("bill-pay");
        payBill.classList.add('hidden')
        const bonusMoney = document.getElementById("bonus-money");
        bonusMoney.classList.add('hidden');
        const transferMoney = document.getElementById("sendMoney")
        transferMoney.classList.add("hidden")
        const cashOut = document.getElementById("cashout");
        cashOut.classList.add("hidden");
        const addMoney = document.getElementById("add-money-pop");
        addMoney.classList.add('hidden');
        const payment = document.getElementById('payment');
        payment.classList.add('hidden')
    })