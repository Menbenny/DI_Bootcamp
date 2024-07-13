const api_key = `b17e4e753adbf4cc2d5e4a72`;
// let currencies = '';


// const option = document.querySelector('option');
const select = document.getElementById('currencies')
// const primaryCurrency = select.value;

// select.addEventListener('change', () => {   
//     const optionValue = select.value
//     console.log(optionValue);
// })



// ! currency (FROM) URL
const primaryURL = `https://v6.exchangerate-api.com/v6/${api_key}/latest/USD`

fetchPrimaryCurrency = async(primaryURL) => {
    try {
        let response = await fetch(primaryURL);
        let data = await response.json();


        console.log(data);



    } catch (error) {
        console.log(error, `data not found!`);
    }
}

fetchPrimaryCurrency(primaryURL)

// ! currency (TO) URL
const secondaryURL = `https://v6.exchangerate-api.com/v6/${api_key}/latest/USD`

// fetchSecondaryCurrency = async(secondaryURL) => {
//     try {
//         let secondResponse = await fetch(secondaryURL);
//         let secondData = await secondResponse.json();



//         console.log(secondData.conversion_rates.option.value);
//     } catch (error) {
//         console.log(error, `data not found!`);
//     }
// }

// fetchSecondaryCurrency(secondaryURL)


const supportedCurrencies = `https://v6.exchangerate-api.com/v6/${api_key}/codes`

firstListOfCurrencies = async(supportedCurrencies) => {
    try {
        let response = await fetch(supportedCurrencies);
        let supportedCurrenciesData = await response.json();

        // console.log(supportedCurrenciesData.supported_codes[2]);
        

        for (let x = 0; x < supportedCurrenciesData.supported_codes.length; x ++) {
            const currenciesArrays = supportedCurrenciesData.supported_codes[x];
            const currenciesCode = currenciesArrays[0];
            const currencyName = currenciesArrays[1];

            const option = document.createElement('option')
            option.value = currenciesCode
            option.textContent = `${currenciesCode} - ${currencyName}`
          
            select.appendChild(option);
        }
        

        // let currenciesCodes = JSON.parse(supportedCurrenciesData.supported_codes)

    } catch (error) {
        console.log(error, `No data found`);
    }
}
firstListOfCurrencies(supportedCurrencies)

// converter = async(primaryURL) => {

//     try {

//         let response = await fetch(primaryURL);
//         let data = await response.json();

//         // let currency = data.base_code;

//         console.log(data);
//         // if (currencies === `USD`) {
//         //     
//         // }
        
//     } catch (error) {
//         console.log(error, `Data not found`);
//     }
// }

// converter(primaryURL)

