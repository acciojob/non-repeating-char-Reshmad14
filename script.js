function firstNonRepeatedChar(str) {
 // Write your code here
	const charCount = {};
	for (let char of input) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
	for (let char of input) {
        if (charCount[char] === 1) {
            return char;
        }
    }
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
