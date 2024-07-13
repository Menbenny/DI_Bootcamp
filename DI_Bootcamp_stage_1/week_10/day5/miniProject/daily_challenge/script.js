const api_key = `b17e4e753adbf4cc2d5e4a72`;
const selectFrom = document.getElementById('fromCurrencies')
const selectTo = document.getElementById('ToCurrencies')
const supportedCurrencies = `https://v6.exchangerate-api.com/v6/${api_key}/codes`

const firstListOfCurrencies = async(supportedCurrencies) => {
    try {
        let response = await fetch(supportedCurrencies);
        let supportedCurrenciesData = await response.json();

        for (let x = 0; x < supportedCurrenciesData.supported_codes.length; x ++) {
            const currenciesArrays = supportedCurrenciesData.supported_codes[x];
            const currenciesCode = currenciesArrays[0];
            const currencyName = currenciesArrays[1];
            
            const option = document.createElement('option')
            option.value = currenciesCode
            option.textContent = `${currenciesCode} - ${currencyName}`
            selectFrom.appendChild(option);
        }

    } catch (error) {
        console.log(error, `No data found`);
    } 
};

const secondListOfCurrencies = async(supportedCurrencies) => {
    try {
        let response = await fetch(supportedCurrencies);
        let supportedCurrenciesData = await response.json();

        for (let y = 0; y < supportedCurrenciesData.supported_codes.length; y ++) {
            const currenciesArrays = supportedCurrenciesData.supported_codes[y];
            const currenciesCode = currenciesArrays[0];
            const currencyName = currenciesArrays[1];

            const option = document.createElement('option')
            option.value = currenciesCode
            option.textContent = `${currenciesCode} - ${currencyName}`
        
            selectTo.appendChild(option);
            
        }

    } catch (error) {
        console.log(error, `No data found`);
    }
}

const fetchPrimaryCurrency = async(primaryURL, selectedCurrency) => {
    try {
        let response = await fetch(primaryURL);
        let data = await response.json();
        let conversionRate = data.conversion_rates

        console.log(selectedCurrency);
        console.log(conversionRate[selectedCurrency]);
    } catch (error) {
        console.log(error, `data not found!`);
    }
}

const fetchSecondaryCurrency = async(secondaryURL, selectedCurrency) => {
    try {
        let response = await fetch(secondaryURL);
        let data = await response.json();
        let conversionRate = data.conversion_rates

        console.log(selectedCurrency);
        console.log(conversionRate[selectedCurrency]);
    } catch (error) {
        console.log(error, `data not found!`);
    }
}

selectFrom.addEventListener('change', () => {   
    const selectedCurrency = selectFrom.value;
    const primaryURL = `https://v6.exchangerate-api.com/v6/${api_key}/latest/${selectedCurrency}`    
    fetchPrimaryCurrency(primaryURL)
})



selectTo.addEventListener('change', () => {
    const selectedCurrency = selectTo.value
    const secondaryURL = `https://v6.exchangerate-api.com/v6/${api_key}/latest/${selectedCurrency}`
    fetchSecondaryCurrency(secondaryURL)

})

firstListOfCurrencies(supportedCurrencies)
secondListOfCurrencies(supportedCurrencies)



