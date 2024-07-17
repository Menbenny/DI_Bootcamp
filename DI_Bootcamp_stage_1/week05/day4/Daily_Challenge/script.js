// let input = document.getElementById("input")

document.getElementById('lettersOnly').addEventListener('input', function(event) {
    const input = event.target;
    const value = input.value;
    const filteredValue = value.replace(/^[a-zA-Z]/g,'');
    if (value !== filteredValue) {
        input.value = filteredValue;
    }
});