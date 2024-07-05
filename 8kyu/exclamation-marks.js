function remove(s) {
    // Remove all exclamation marks
    let result = s.replace(/!/g, '');
    
    // Add a single exclamation mark at the end
    return result + '!';
}

// Example usage:
console.log(remove("Hi!")); 
console.log(remove("Hi!!!"));
console.log(remove("!Hi"));    