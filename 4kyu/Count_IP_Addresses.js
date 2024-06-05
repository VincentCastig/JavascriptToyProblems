// Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

// All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.

function ipsBetween(start, end) {
    function ipToInt(ip) {
        const parts = ip.split('.').map(Number);
        return (parts[0] << 24) + (parts[1] << 16) + (parts[2] << 8) + parts[3];
    }

    const startInt = ipToInt(start);
    const endInt = ipToInt(end);

    return endInt - startInt;
}

// Examples
console.log(ipsBetween("10.0.0.0", "10.0.0.50"));  // 50
console.log(ipsBetween("10.0.0.0", "10.0.1.0"));   // 256
console.log(ipsBetween("20.0.0.10", "20.0.1.0"));  // 246
