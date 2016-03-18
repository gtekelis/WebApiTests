console.log('the array type');

var numbers = [1, 2, 3, 4, 5];

for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] == 4)
    {
        break;
    }
    console.log(numbers[i]);
}