function convertToDecimal() {
    const binaryInput = document.getElementById('binaryInput').value;
    const decimalOutput = document.getElementById('decimalOutput');
    
    // Check if the input is a valid binary number
    if (/^[01]+$/.test(binaryInput)) {
        const decimalValue = parseInt(binaryInput, 2);
        decimalOutput.textContent = decimalValue;
    } else {
        decimalOutput.textContent = 'Invalid Binary Number';
    }
}

function convertToBinary() {
    const decimalInput = document.getElementById('decimalInput').value;
    const binaryOutput = document.getElementById('binaryOutput');
    
    // Check if the input is a valid non-negative integer
    if (decimalInput !== '' && !isNaN(decimalInput) && Number(decimalInput) >= 0) {
        const binaryValue = Number(decimalInput).toString(2);
        binaryOutput.textContent = binaryValue;
    } else {
        binaryOutput.textContent = 'Invalid Decimal Number';
    }
}
