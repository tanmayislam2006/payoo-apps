document.getElementById("log-out")
    .addEventListener('click',
        function () {
            window.location.href = "./index1.html"
        }
    );
// add money
document.getElementById("add-money")
    .addEventListener('click',
        function (event) {
            event.preventDefault();
            const pin = getElementById('pin');
            const accountNumber = document.getElementById("account-number").value;
            const amount = getElementById("amount");
            const balance = getElementByIdText("balance");
            let now = new Date();
            let datetime = now.toLocaleDateString();
            let timeString = now.toLocaleTimeString();
            const id=Math.floor(100000 + Math.random() * 900000);

            if (amount < 0) {
                return alert("amount can not be negative")

            }
            if (accountNumber.length == 11) {
                if (pin == 4680) {
                    const sum = balance + amount;
                    changeInnerText("balance", sum)
                    const history = document.getElementById("payment");
                    const div = document.createElement("div");
                    div.innerHTML = `                <div class="flex justify-between border border-[#E9E9E9] p-2 rounded-lg my-3">
                    <div class="flex gap-2">
                        <!-- image  -->
                        <div class=" flex justify-center items-center ">
                            <div class="mx-3"><img src="../image/wallet1.png" alt=""></div>
                        </div>
                        <!-- text  -->
                        <div class="">
                            <h3 class="font-bold">Bank Deposit</h3>
                            <p>From ${accountNumber}</p>
                            <p>Amount ${amount}</p>
                            <p>ID ${id}</p>
                            <time datetime="25-02-2025">${datetime} ${timeString}</time>
                        </div>
                    </div>
                    <div class="flex items-center justify-center"><img
                            src="https://img.icons8.com/windows/35/menu-2.png" alt=""></div>
                </div>`;
                    history.appendChild(div);
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
        const pin = getElementById('cashout-pin');
        const accountNumber = document.getElementById("agent-number").value;
        const amount = getElementById("cashout-amount");
        const balance = getElementByIdText("balance");
        const now = new Date();
        const datetime = now.toLocaleDateString();
        const timeString = now.toLocaleTimeString();
        const id=Math.floor(100000 + Math.random() * 900000);
        if (amount < 0) {
            return alert("amount can not be negative")
        }
        if (balance < amount) {
            return alert("insufficient balance")
        }
        if (accountNumber.length === 11) {
            if (pin == 4680) {
                const sum = balance - amount;
                changeInnerText("balance", sum)
                const history = document.getElementById("payment");
                const div = document.createElement("div");
                div.innerHTML = `                <div class="flex justify-between border border-[#E9E9E9] p-2 rounded-lg my-3">
                <div class="flex gap-2">
                    <!-- image  -->
                    <div class=" flex justify-center items-center ">
                        <div class="mx-3"><img src="../image/send1.png" alt=""></div>
                    </div>
                    <!-- text  -->
                    <div class="">
                        <h3 class="font-bold">Cash Out</h3>
                        <p>Agent ${accountNumber}</p>
                        <p>Amount ${amount}</p>
                        <p>ID ${id}</p>
                        <time datetime="25-02-2025">${datetime} ${timeString}</time>
                    </div>
                </div>
                <div class="flex items-center justify-center"><img
                        src="https://img.icons8.com/windows/35/menu-2.png" alt=""></div>
            </div>`;
                history.appendChild(div);

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
        const pin = getElementById('send-pin');
        const accountNumber = document.getElementById("sender-number").value;
        const amount = getElementById("send-amount");
        const balance = getElementByIdText("balance");
        const now = new Date();
        const datetime = now.toLocaleDateString();
        const timeString = now.toLocaleTimeString();
        const id=Math.floor(100000 + Math.random() * 900000);
        if (amount < 0) {
            return alert("amount can not be negative")
        }
        if (balance < amount) {
            return alert("insufficient balance")
        }
        if (accountNumber.length === 11) {
            if (pin == 4680) {
                const sum = balance - amount;
                changeInnerText("balance", sum)
                const history = document.getElementById("payment");
                const div = document.createElement("div");
                div.innerHTML = `                <div class="flex justify-between border border-[#E9E9E9] p-2 rounded-lg my-3">
                <div class="flex gap-2">
                    <!-- image  -->
                    <div class=" flex justify-center items-center ">
                        <div class="mx-3"><img src="../image/money1.png" alt=""></div>
                    </div>
                    <!-- text  -->
                    <div class="">
                        <h3 class="font-bold">Send Money</h3>
                        <p>Recever ${accountNumber}</p>
                        <p>Amount ${amount}</p>
                        <p>ID ${id}</p>
                        <time datetime="25-02-2025">${datetime} ${timeString}</time>
                    </div>
                </div>
                <div class="flex items-center justify-center"><img
                        src="https://img.icons8.com/windows/35/menu-2.png" alt=""></div>
            </div>`;
                history.appendChild(div);

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
        const amount = getElementById("bonus-amount");
        const balance = getElementByIdText("balance");
        let now = new Date();
        let datetime = now.toLocaleDateString();
        let timeString = now.toLocaleTimeString();
        const id=Math.floor(100000 + Math.random() * 900000);
        if (amount < 0) {
            return alert("amount can not be negative")
        }
        const sum = balance + amount;
        changeInnerText("balance", sum)
        const history = document.getElementById("payment");
        const div = document.createElement("div");
        div.innerHTML = `                <div class="flex justify-between border border-[#E9E9E9] p-2 rounded-lg my-3">
        <div class="flex gap-2">
            <!-- image  -->
            <div class=" flex justify-center items-center ">
                <div class="mx-3"><img src="../image/bonus1.png" alt=""></div>
            </div>
            <!-- text  -->
            <div class="">
                <h3 class="font-bold">Get Bonus</h3>
                <p>Amount ${amount}</p>
                <p>ID ${id}</p>
                <time datetime="25-02-2025">${datetime} ${timeString}</time>
            </div>
        </div>
        <div class="flex items-center justify-center"><img
                src="https://img.icons8.com/windows/35/menu-2.png" alt=""></div>
    </div>`;
        history.appendChild(div);


    })
// pay bill
document.getElementById("pay-now")
    .addEventListener("click", function (event) {
        event.preventDefault();
        const pin = getElementById('pay-pin');
        const accountNumber = document.getElementById("biller-number").value;
        const amount = getElementById("pay-amount");
        const balance = getElementByIdText("balance");
        const now = new Date();
        const datetime = now.toLocaleDateString();
        const timeString = now.toLocaleTimeString();
        const id=Math.floor(100000 + Math.random() * 900000);
        if (amount < 0) {
            return alert("amount can not be negative")
        }
        if (balance < amount) {
            return alert("insufficient balance")
        }
        if (accountNumber.length === 11) {
            if (pin == 4680) {
                const sum = balance - amount;
                changeInnerText("balance", sum)
                const history = document.getElementById("payment");
                const div = document.createElement("div");
                div.innerHTML = `                <div class="flex justify-between border border-[#E9E9E9] p-2 rounded-lg my-3">
                <div class="flex gap-2">
                    <!-- image  -->
                    <div class=" flex justify-center items-center ">
                        <div class="mx-3"><img src="../image/purse1.png" alt=""></div>
                    </div>
                    <!-- text  -->
                    <div class="">
                        <h3 class="font-bold">Pay Bill</h3>
                        <p>Biller ${accountNumber}</p>
                        <p>Amount ${amount}</p>
                        <p>ID ${id}</p>
                        <time datetime="25-02-2025">${datetime} ${timeString}</time>
                    </div>
                </div>
                <div class="flex items-center justify-center"><img
                        src="https://img.icons8.com/windows/35/menu-2.png" alt=""></div>
            </div>`;
                history.appendChild(div);

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
        displayRemove("bill-pay", "hidden");
        displayAdd("payment", "hidden");
        displayAdd("bonus-money", "hidden");
        displayAdd("sendMoney", "hidden");
        displayAdd("cashout", "hidden");
        displayAdd("add-money-pop", "hidden");
        displayAdd("explore", "hidden");
    });
document.getElementById("get-bonus")
    .addEventListener("click", function (event) {
        displayRemove("bonus-money", "hidden");
        displayAdd("payment", "hidden");
        displayAdd("bill-pay", "hidden");
        displayAdd("sendMoney", "hidden");
        displayAdd("cashout", "hidden");
        displayAdd("add-money-pop", "hidden");
        displayAdd("explore", "hidden");
    });
document.getElementById("transfer-money")
    .addEventListener("click", function (event) {
        displayRemove("sendMoney", "hidden");
        displayAdd("payment", "hidden");
        displayAdd("bill-pay", "hidden");
        displayAdd("bonus-money", "hidden");
        displayAdd("cashout", "hidden");
        displayAdd("add-money-pop", "hidden");
        displayAdd("explore", "hidden");
    });
document.getElementById("cash-out-money")
    .addEventListener("click", function (event) {
        displayRemove("cashout", "hidden");
        displayAdd("payment", "hidden");
        displayAdd("bill-pay", "hidden");
        displayAdd("bonus-money", "hidden");
        displayAdd("sendMoney", "hidden");
        displayAdd("add-money-pop", "hidden");
        displayAdd("explore", "hidden");
    });
document.getElementById("money-add")
    .addEventListener("click", function (event) {
        displayRemove("add-money-pop", "hidden")
        displayAdd("cashout", "hidden");
        displayAdd("bill-pay", "hidden");
        displayAdd("bonus-money", "hidden");
        displayAdd("sendMoney", "hidden");
        displayAdd("payment", "hidden");
        displayAdd("explore", "hidden");
    });

document.getElementById("transiction")
    .addEventListener("click", function (event) {
        displayRemove("payment", "hidden");
        displayAdd("bill-pay", "hidden");
        displayAdd("bonus-money", "hidden");
        displayAdd("sendMoney", "hidden");
        displayAdd("cashout", "hidden");
        displayAdd("add-money-pop", "hidden");
        displayAdd("explore", "hidden");
    });

document.getElementById('home')
    .addEventListener("click", function (event) {
        displayRemove("explore", "hidden");
        displayAdd("payment", "hidden");
        displayAdd("bill-pay", "hidden");
        displayAdd("bonus-money", "hidden");
        displayAdd("sendMoney", "hidden");
        displayAdd("cashout", "hidden");
        displayAdd("add-money-pop", "hidden");
    })