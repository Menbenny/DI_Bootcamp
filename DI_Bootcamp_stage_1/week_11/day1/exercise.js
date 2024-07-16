const api = `
https://jsonplaceholder.typicode.com/users`;

const getUsers = async() => {
    try {
        let response = await fetch(api)
        let data = await response.json()
        return data
        // console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getUsers()

module.exports = {
    getUsers,
};