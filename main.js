function selectionSort(numbers) {
	
	for (var i = 0; i < numbers.length;i++) {
		
		var minValueIndex = i;
		
		for (var j = i; j < numbers.length - 1; j++) {
			if (numbers[minValueIndex] > numbers[j + 1]) {
				minValueIndex = j + 1;
			}
		}
		
		if (minValueIndex != i) {
			// Swap the data
			var temp = numbers[i];
			numbers[i] = numbers[minValueIndex];
			numbers[minValueIndex] = temp;
		}
	}
	
	return numbers;
}

var numbers = [8, 9, 5, 2, 3, 9, 10, 1, 3, 7, 2];

var sortedNumbers = selectionSort(numbers);

var result = "";

for (var i = 0; i < sortedNumbers.length; i++)
	result += sortedNumbers[i] + " ";

console.log(result);
