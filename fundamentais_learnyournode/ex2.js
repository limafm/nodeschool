var numbers = process.argv;
var total = 0;

for (var i=2; i<numbers.length; i++){
    conv = Number(numbers[i]);
    total += conv;
}

console.log(total);
