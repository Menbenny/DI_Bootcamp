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



const fetchSecondaryCurrency = async(secondaryURL) => {
// selectedCurrency -- // ! possible second parameter

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


// Fetch first data
selectFrom.addEventListener('change', () => {   
    const selectedCurrency = selectFrom.value;
    const primaryURL = `https://v6.exchangerate-api.com/v6/${api_key}/latest/${selectedCurrency}`  ;
   

    const fetchPrimaryCurrency = async(primaryURL) => {



        try {
            let response = await fetch(primaryURL);
            let data = await response.json();
            let conversionRate = data.conversion_rates

            console.log(data);
            console.log(selectedCurrency);
            console.log(conversionRate[selectedCurrency]);
        } catch (error) {
            console.log(error, `data not found!`);
        }
    }
    fetchPrimaryCurrency(primaryURL)
})

// SECOND Listerner -- //! SELECT TO BUTTON

selectTo.addEventListener('change', () => {   
    const selectedCurrency = selectFrom.value;
 
    const secondaryURL = `https://v6.exchangerate-api.com/v6/${api_key}/latest/${selectedCurrency}`;  

    const fetchSecondaryCurrency = async(secondaryURL) => {

        //selectedCurrency -- //! possible second parameter

        try {
            let response = await fetch(secondaryURL);
            let data = await response.json();
            let conversionRate = data.conversion_rates

            console.log(data);
            console.log(selectedCurrency);
            console.log(conversionRate);

        } catch (error) {
            console.log(error, `data not found!`);
        }
    }
    fetchSecondaryCurrency(secondaryURL)
})

const convertCurrency = async() => {
    const fromCurrency = selectFrom.value;
    const toCurrency = selectTo.value;
    const amount = document.getElementById('amountInput').value

    if (fromCurrency && toCurrency && amount) {
        const conversionURL = `https://v6.exchangerate-api.com/v6/${api_key}/latest/${fromCurrency}`;

        try {
            let response = await fetch(conversionURL)
            let data = await response.json();
            let convertRate = data.conversion_rates[toCurrency];

            if(convertRate) {
                const result = (amount * convertRate).toFixed(2);
                document.getElementById(`amountResult`).textContent = `${result} ${toCurrency}`;
            }else {
                document.getElementById(`amountResult`).textContent = `Conversion rate not found`;
            }
        } catch (error) {
            
            // ? difference between console.log and consol.error
            console.error(error, `Data not found`);
        }
    } else {
        document.getElementById('amountResult').textContent = `Please fill in the amount`
    }
};

document.getElementById(`convertButton`).addEventListener('click', (e) => {
    e.preventDefault();
    convertCurrency();
});

firstListOfCurrencies(supportedCurrencies)
secondListOfCurrencies(supportedCurrencies)



