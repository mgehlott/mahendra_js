const arr = [2, 3, 0, 5, 3, 5, 0, 7, 8, 3, 6, 4];

let even = 0, odd = 0, zero = 0;
for (let x = 0; x < arr.length; x++) {
    if (arr[x] === 0)
        zero++;
    else if (arr[x] % 2 === 0 && arr[x] != 0)
        even++;
    else
        odd++;

}

console.log("even is " + even);
console.log("odd is " + odd);
console.log("zero is " + zero);