const amountElement = document.querySelector(".js-amount");
const currencyElement = document.querySelector(".js-currency");
const resultElement = document.querySelector(".js-result");
const formElement = document.querySelector(".js-form");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let currency = currencyElement.value;
    let amount = +amountElement.value;

    // amountCurrency with day 4 MARCH
    let rateEUR = 4.32;
    let rateGBP = 5.05;
    let rateUSD = 3.98;

    switch (currency) {

        case "EUR":
            result = amount / rateEUR;
            break;
        case "GBP":
            result = amount / rateGBP;
            break;
        case "USD":
            result = amount / rateUSD;
            break;
    }

    resultElement.innerText = `         ${amount} PLN = ${result.toFixed(2)} ${currency}`;
});





