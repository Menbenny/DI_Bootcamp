const api_key = `b17e4e753adbf4cc2d5e4a72`;
// let currencies = '';

// ! currency (FROM) URL
const primaryURL = `https://v6.exchangerate-api.com/v6/${api_key}/latest/USD`
// ! currency (TO) URL

const supportedCurrencies = `https://v6.exchangerate-api.com/v6/${api_key}/codes`

listOfCurrencies = async(supportedCurrencies) => {
    try {
        let response = await fetch(supportedCurrencies);
        let supportedCurrenciesData = await response.json()
        console.log(supportedCurrenciesData.supported_codes[2]);

        

        // let currenciesCodes = JSON.parse(supportedCurrenciesData.supported_codes)

    } catch (error) {
        console.log(error, `No data found`);
    }
}
listOfCurrencies(supportedCurrencies)

converter = async(primaryURL) => {

    try {

        let response = await fetch(primaryURL);
        let data = await response.json();

        // let currency = data.base_code;

        console.log(data);
        // if (currencies === `USD`) {
        //     
        // }
        
    } catch (error) {
        console.log(error, `Data not found`);
    }
}

converter(primaryURL)

