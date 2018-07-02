document.getElementById("calculate-button").onclick = function() {

	let elem1 = document.getElementById("elem-1");
	let elem2 = document.getElementById("elem-2");

	let val1 = parseInt(elem1.value);
	let val2 = parseInt(elem2.value);

	let choice = document.querySelector('input[name="operation"]:checked');
	let operation = choice.value;
	
	// Display result according to function or display text if result is NaN.
	let operationResult = getResult(val1, val2, operation) || "Favor inserir números nas caixas!"
	let resultElement = document.getElementById('result');
	resultElement.innerHTML = operationResult;

}

/**
* This function displays result according to operation selected.
*/
function getResult(num1, num2, operation) {
	if(operation === '+') {
		return num1 + num2;
	} else if (operation === '-') {
		return num1 - num2;
	} else if (operation === '*') {
		return num1 * num2;
	} else if (operation === '/') {
		return num1 / num2;
	}
}