async function convertCurrency() {
    let amount = document.getElementById("amount").value;
    let fromCurrency = document.getElementById("fromCurrency").value;
    let toCurrency = document.getElementById("toCurrency").value;
    let resultElement = document.getElementById("result");

    if (amount === "" || amount <= 0) {
        resultElement.innerHTML = "Please enter a valid amount!";
        return;
    }

    let apiUrl = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
    
    try {
        let response = await fetch(apiUrl);
        let data = await response.json();
        let rate = data.rates[toCurrency];
        let convertedAmount = (amount * rate).toFixed(2);

        resultElement.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
    } catch (error) {
        resultElement.innerHTML = "Error fetching exchange rates!";
    }
}